#!/usr/bin/env node

/**
 * Advanced Image Optimization Script
 * Converts images to WebP format and optimizes file sizes
 * Supports batch processing and automatic optimization
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

class ImageOptimizer {
  constructor(options = {}) {
    this.targetSize = options.targetSize || 100 * 1024; // 100KB default
    this.quality = options.quality || 80;
    this.format = options.format || 'webp';
    this.maxWidth = options.maxWidth || 1200;
    this.maxHeight = options.maxHeight || 800;
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
   * Optimize a single image
   */
  async optimizeImage(inputPath, outputPath) {
    try {
      const originalSize = this.getFileSize(inputPath);
      console.log(`📸 Processing: ${path.basename(inputPath)} (${this.formatBytes(originalSize)})`);

      // Get image metadata
      const metadata = await sharp(inputPath).metadata();
      console.log(`   Original dimensions: ${metadata.width}x${metadata.height}`);

      let processor = sharp(inputPath);
      
      // Resize if needed while maintaining aspect ratio
      if (metadata.width > this.maxWidth || metadata.height > this.maxHeight) {
        processor = processor.resize(this.maxWidth, this.maxHeight, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      // Start with high quality
      let currentQuality = this.quality;
      let attempts = 0;
      const maxAttempts = 10;

      while (attempts < maxAttempts) {
        // Apply optimization
        const optimizedBuffer = await processor
          .toFormat(this.format, { 
            quality: currentQuality,
            progressive: true,
            mozjpeg: true,
            optimizeScans: true,
            quantisationTable: 0
          })
          .toBuffer();

        // Check if target size is reached
        if (optimizedBuffer.length <= this.targetSize || currentQuality <= 10) {
          // Save the optimized image
          await sharp(optimizedBuffer).toFile(outputPath);
          
          const finalSize = this.getFileSize(outputPath);
          const reduction = ((originalSize - finalSize) / originalSize * 100).toFixed(1);
          
          console.log(`   ✅ Optimized: ${this.formatBytes(finalSize)} (${reduction}% reduction)`);
          console.log(`   🎯 Quality used: ${currentQuality}%`);
          
          return {
            success: true,
            originalSize,
            optimizedSize: finalSize,
            reduction: parseFloat(reduction),
            quality: currentQuality,
            format: this.format
          };
        }

        // Reduce quality for next attempt
        currentQuality -= 5;
        attempts++;
      }

      throw new Error('Could not optimize to target size');

    } catch (error) {
      console.error(`❌ Error optimizing ${inputPath}:`, error.message);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Optimize all images in a directory
   */
  async optimizeDirectory(inputDir, outputDir) {
    const supportedFormats = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'];
    
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => 
      supportedFormats.includes(path.extname(file).toLowerCase())
    );

    if (imageFiles.length === 0) {
      console.log('❌ No supported image files found');
      return;
    }

    console.log(`🚀 Starting optimization of ${imageFiles.length} images...\n`);

    const results = [];
    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputName = path.parse(file).name + '.webp';
      const outputPath = path.join(outputDir, outputName);

      const result = await this.optimizeImage(inputPath, outputPath);
      results.push({ file, ...result });
      console.log(''); // Empty line for readability
    }

    // Generate summary report
    this.generateReport(results);
  }

  /**
   * Generate optimization report
   */
  generateReport(results) {
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);

    console.log('\n📊 OPTIMIZATION REPORT');
    console.log('=' .repeat(50));
    console.log(`Total images processed: ${results.length}`);
    console.log(`Successfully optimized: ${successful.length}`);
    console.log(`Failed: ${failed.length}`);

    if (successful.length > 0) {
      const totalOriginal = successful.reduce((sum, r) => sum + r.originalSize, 0);
      const totalOptimized = successful.reduce((sum, r) => sum + r.optimizedSize, 0);
      const totalReduction = ((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1);

      console.log(`\nTotal size reduction: ${this.formatBytes(totalOriginal - totalOptimized)} (${totalReduction}%)`);
      console.log(`Original total: ${this.formatBytes(totalOriginal)}`);
      console.log(`Optimized total: ${this.formatBytes(totalOptimized)}`);
    }

    if (failed.length > 0) {
      console.log('\n❌ Failed optimizations:');
      failed.forEach(f => console.log(`   ${f.file}: ${f.error}`));
    }
  }
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log(`
🖼️  Image Optimizer Usage:

Single image:
  node scripts/image-optimizer.js <input-image> [output-image]

Directory:
  node scripts/image-optimizer.js <input-directory> <output-directory>

Options:
  --target-size <kb>    Target file size in KB (default: 100)
  --quality <percent>   Starting quality (default: 80)
  --max-width <px>      Maximum width (default: 1200)
  --max-height <px>     Maximum height (default: 800)

Examples:
  node scripts/image-optimizer.js image.jpg optimized.webp
  node scripts/image-optimizer.js ./images ./optimized --target-size 50
    `);
    process.exit(1);
  }

  const inputPath = args[0];
  const outputPath = args[1] || 'optimized';

  // Parse options
  const options = {};
  for (let i = 2; i < args.length; i += 2) {
    const flag = args[i];
    const value = args[i + 1];
    
    switch (flag) {
      case '--target-size':
        options.targetSize = parseInt(value) * 1024;
        break;
      case '--quality':
        options.quality = parseInt(value);
        break;
      case '--max-width':
        options.maxWidth = parseInt(value);
        break;
      case '--max-height':
        options.maxHeight = parseInt(value);
        break;
    }
  }

  const optimizer = new ImageOptimizer(options);

  // Check if input is file or directory
  const inputStats = fs.statSync(inputPath);
  
  if (inputStats.isFile()) {
    // Single file optimization
    const result = await optimizer.optimizeImage(inputPath, outputPath);
    
    if (result.success) {
      console.log('\n🎉 Optimization completed successfully!');
    } else {
      console.log('\n❌ Optimization failed');
      process.exit(1);
    }
  } else if (inputStats.isDirectory()) {
    // Directory optimization
    await optimizer.optimizeDirectory(inputPath, outputPath);
    console.log('\n🎉 Batch optimization completed!');
  } else {
    console.error('❌ Invalid input path');
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = ImageOptimizer;