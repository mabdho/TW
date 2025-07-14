/**
 * Image Optimization API Routes
 * Handles image upload, optimization, and processing
 */

import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import ServerImageOptimizer from '../services/imageOptimizationService.js';

// Configure multer for image uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|bmp|tiff|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Initialize image optimizer
const imageOptimizer = new ServerImageOptimizer({
  targetSize: 100 * 1024, // 100KB default
  quality: 80,
  maxWidth: 1200,
  maxHeight: 800
});

/**
 * POST /api/images/optimize
 * Optimize uploaded image
 */
export const optimizeUploadedImage = upload.single('image');

export async function handleImageOptimization(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const { targetSize, quality, maxWidth, maxHeight } = req.body;

    // Configure optimizer based on request parameters
    const optimizer = new ServerImageOptimizer({
      targetSize: targetSize ? parseInt(targetSize) * 1024 : 100 * 1024,
      quality: quality ? parseInt(quality) : 80,
      maxWidth: maxWidth ? parseInt(maxWidth) : 1200,
      maxHeight: maxHeight ? parseInt(maxHeight) : 800
    });

    // Optimize the image
    const result = await optimizer.optimizeFromBuffer(
      req.file.buffer,
      `optimized_${Date.now()}.webp`
    );

    if (result.success) {
      res.json({
        success: true,
        message: 'Image optimized successfully',
        data: {
          originalSize: result.originalSize,
          optimizedSize: result.optimizedSize,
          reduction: result.reduction,
          quality: result.quality,
          format: result.format,
          filename: result.filename,
          dimensions: result.dimensions,
          url: `/optimized-images/${result.filename}`
        }
      });
    } else {
      res.status(500).json({
        success: false,
        error: result.error
      });
    }
  } catch (error) {
    console.error('Image optimization error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error during image optimization'
    });
  }
}

/**
 * POST /api/images/optimize-file
 * Optimize image from file path
 */
export async function optimizeImageFile(req: Request, res: Response) {
  try {
    const { filePath, targetSize, quality, maxWidth, maxHeight, outputName } = req.body;

    if (!filePath) {
      return res.status(400).json({ error: 'File path is required' });
    }

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'File not found' });
    }

    // Configure optimizer
    const optimizer = new ServerImageOptimizer({
      targetSize: targetSize ? parseInt(targetSize) * 1024 : 100 * 1024,
      quality: quality ? parseInt(quality) : 80,
      maxWidth: maxWidth ? parseInt(maxWidth) : 1200,
      maxHeight: maxHeight ? parseInt(maxHeight) : 800
    });

    // Optimize the image
    const result = await optimizer.optimizeImage(filePath, outputName);

    if (result.success) {
      res.json({
        success: true,
        message: 'Image optimized successfully',
        data: {
          originalPath: result.originalPath,
          optimizedPath: result.optimizedPath,
          originalSize: result.originalSize,
          optimizedSize: result.optimizedSize,
          reduction: result.reduction,
          quality: result.quality,
          format: result.format,
          filename: result.filename,
          dimensions: result.dimensions,
          url: `/optimized-images/${result.filename}`
        }
      });
    } else {
      res.status(500).json({
        success: false,
        error: result.error
      });
    }
  } catch (error) {
    console.error('File optimization error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error during file optimization'
    });
  }
}

/**
 * POST /api/images/batch-optimize
 * Batch optimize images in directory
 */
export async function batchOptimizeImages(req: Request, res: Response) {
  try {
    const { inputDirectory, outputDirectory, targetSize, quality, maxWidth, maxHeight } = req.body;

    if (!inputDirectory) {
      return res.status(400).json({ error: 'Input directory is required' });
    }

    // Check if directory exists
    if (!fs.existsSync(inputDirectory)) {
      return res.status(404).json({ error: 'Input directory not found' });
    }

    // Configure optimizer
    const optimizer = new ServerImageOptimizer({
      targetSize: targetSize ? parseInt(targetSize) * 1024 : 100 * 1024,
      quality: quality ? parseInt(quality) : 80,
      maxWidth: maxWidth ? parseInt(maxWidth) : 1200,
      maxHeight: maxHeight ? parseInt(maxHeight) : 800
    });

    // Batch optimize
    const results = await optimizer.batchOptimize(inputDirectory, outputDirectory);

    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    const totalOriginal = successful.reduce((sum, r) => sum + r.originalSize, 0);
    const totalOptimized = successful.reduce((sum, r) => sum + r.optimizedSize, 0);
    const totalReduction = totalOriginal > 0 ? ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1) : 0;

    res.json({
      success: true,
      message: 'Batch optimization completed',
      data: {
        totalProcessed: results.length,
        successful: successful.length,
        failed: failed.length,
        totalOriginalSize: totalOriginal,
        totalOptimizedSize: totalOptimized,
        totalReduction: parseFloat(totalReduction),
        results: results,
        failedFiles: failed.map(f => ({ file: f.originalFile, error: f.error }))
      }
    });
  } catch (error) {
    console.error('Batch optimization error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error during batch optimization'
    });
  }
}

/**
 * GET /api/images/optimization-stats
 * Get optimization statistics
 */
export async function getOptimizationStats(req: Request, res: Response) {
  try {
    const optimizedDir = './public/optimized-images';
    
    if (!fs.existsSync(optimizedDir)) {
      return res.json({
        success: true,
        data: {
          totalImages: 0,
          totalSize: 0,
          averageSize: 0,
          images: []
        }
      });
    }

    const files = fs.readdirSync(optimizedDir);
    const imageFiles = files.filter(file => file.endsWith('.webp'));
    
    const images = imageFiles.map(file => {
      const filePath = path.join(optimizedDir, file);
      const stats = fs.statSync(filePath);
      return {
        filename: file,
        size: stats.size,
        created: stats.birthtime,
        modified: stats.mtime
      };
    });

    const totalSize = images.reduce((sum, img) => sum + img.size, 0);
    const averageSize = images.length > 0 ? totalSize / images.length : 0;

    res.json({
      success: true,
      data: {
        totalImages: images.length,
        totalSize,
        averageSize,
        images
      }
    });
  } catch (error) {
    console.error('Stats error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error getting optimization stats'
    });
  }
}