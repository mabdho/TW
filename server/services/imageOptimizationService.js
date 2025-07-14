/**
 * Server-side Image Optimization Service
 * Handles automatic image optimization for uploads and processing
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

class ServerImageOptimizer {
  constructor(options = {}) {
    this.targetSize = options.targetSize || 100 * 1024; // 100KB default
    this.quality = options.quality || 80;
    this.maxWidth = options.maxWidth || 1200;
    this.maxHeight = options.maxHeight || 800;
    this.outputDir = options.outputDir || './public/optimized-images';
    
    // Ensure output directory exists
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }
  }

  /**
   * Get file size in bytes
   */
  getFileSize(filePath) {
    try {
      const stats = fs.statSync(filePath);
      return stats.size;
    } catch (error) {
      return 0;
    }
  }

  /**
   * Format bytes to human readable format
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  /**
   * Optimize image with progressive quality reduction
   */
  async optimizeImage(inputPath, outputName = null) {
    try {
      if (!fs.existsSync(inputPath)) {
        return {
          success: false,
          error: 'Input file does not exist'
        };
      }

      const originalSize = this.getFileSize(inputPath);
      const fileName = outputName || `optimized_${Date.now()}.webp`;
      const outputPath = path.join(this.outputDir, fileName);

      // Get original image dimensions
      const originalDimensions = await this.getImageDimensions(inputPath);

      // Calculate new dimensions while maintaining aspect ratio
      const { width: newWidth, height: newHeight } = this.calculateNewDimensions(
        originalDimensions.width,
        originalDimensions.height,
        this.maxWidth,
        this.maxHeight
      );

      let quality = this.quality;
      let currentSize = originalSize;
      let optimizedBuffer;

      // Progressive quality reduction until target size is reached
      while (quality > 10 && currentSize > this.targetSize) {
        optimizedBuffer = await sharp(inputPath)
          .resize(newWidth, newHeight, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality })
          .toBuffer();

        currentSize = optimizedBuffer.length;
        
        if (currentSize > this.targetSize) {
          quality -= 5; // Reduce quality by 5%
        }
      }

      // Save the optimized image
      await sharp(optimizedBuffer).toFile(outputPath);

      const finalSize = this.getFileSize(outputPath);
      const reduction = originalSize > 0 ? ((originalSize - finalSize) / originalSize) * 100 : 0;

      return {
        success: true,
        originalFile: inputPath,
        originalPath: inputPath,
        optimizedPath: outputPath,
        originalSize,
        optimizedSize: finalSize,
        reduction,
        quality,
        format: 'webp',
        filename: fileName,
        dimensions: {
          original: originalDimensions,
          optimized: { width: newWidth, height: newHeight }
        }
      };

    } catch (error) {
      console.error('Image optimization error:', error);
      return {
        success: false,
        error: error.message || 'Unknown optimization error'
      };
    }
  }

  /**
   * Get image dimensions
   */
  async getImageDimensions(imagePath) {
    try {
      const metadata = await sharp(imagePath).metadata();
      return {
        width: metadata.width || 0,
        height: metadata.height || 0
      };
    } catch (error) {
      return { width: 0, height: 0 };
    }
  }

  /**
   * Calculate new dimensions while maintaining aspect ratio
   */
  calculateNewDimensions(originalWidth, originalHeight, maxWidth, maxHeight) {
    if (originalWidth <= maxWidth && originalHeight <= maxHeight) {
      return { width: originalWidth, height: originalHeight };
    }

    const widthRatio = maxWidth / originalWidth;
    const heightRatio = maxHeight / originalHeight;
    const ratio = Math.min(widthRatio, heightRatio);

    return {
      width: Math.round(originalWidth * ratio),
      height: Math.round(originalHeight * ratio)
    };
  }

  /**
   * Optimize image from buffer (for uploads)
   */
  async optimizeFromBuffer(buffer, outputName = null) {
    try {
      const fileName = outputName || `optimized_${Date.now()}.webp`;
      const outputPath = path.join(this.outputDir, fileName);

      // Get original image metadata
      const originalMetadata = await sharp(buffer).metadata();
      const originalSize = buffer.length;

      // Calculate new dimensions
      const { width: newWidth, height: newHeight } = this.calculateNewDimensions(
        originalMetadata.width,
        originalMetadata.height,
        this.maxWidth,
        this.maxHeight
      );

      let quality = this.quality;
      let currentSize = originalSize;
      let optimizedBuffer;

      // Progressive quality reduction until target size is reached
      while (quality > 10 && currentSize > this.targetSize) {
        optimizedBuffer = await sharp(buffer)
          .resize(newWidth, newHeight, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality })
          .toBuffer();

        currentSize = optimizedBuffer.length;
        
        if (currentSize > this.targetSize) {
          quality -= 5; // Reduce quality by 5%
        }
      }

      // Save the optimized image
      await sharp(optimizedBuffer).toFile(outputPath);

      const finalSize = this.getFileSize(outputPath);
      const reduction = originalSize > 0 ? ((originalSize - finalSize) / originalSize) * 100 : 0;

      return {
        success: true,
        originalSize,
        optimizedSize: finalSize,
        reduction,
        quality,
        format: 'webp',
        filename: fileName,
        dimensions: {
          original: { width: originalMetadata.width, height: originalMetadata.height },
          optimized: { width: newWidth, height: newHeight }
        }
      };

    } catch (error) {
      console.error('Buffer optimization error:', error);
      return {
        success: false,
        error: error.message || 'Unknown buffer optimization error'
      };
    }
  }

  /**
   * Batch optimize images in directory
   */
  async batchOptimize(inputDir, outputDir = null) {
    try {
      if (!fs.existsSync(inputDir)) {
        throw new Error('Input directory does not exist');
      }

      const files = fs.readdirSync(inputDir);
      const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'].includes(ext);
      });

      const results = [];
      const currentOutputDir = outputDir || this.outputDir;

      for (const file of imageFiles) {
        const inputPath = path.join(inputDir, file);
        const outputName = `optimized_${path.parse(file).name}.webp`;
        
        console.log(`Processing: ${file}`);
        const result = await this.optimizeImage(inputPath, outputName);
        results.push(result);
      }

      return results;

    } catch (error) {
      console.error('Batch optimization error:', error);
      throw error;
    }
  }
}

export default ServerImageOptimizer;