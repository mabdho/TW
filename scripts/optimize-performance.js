#!/usr/bin/env node

/**
 * Comprehensive Performance Optimization Script
 * - Minifies ALL JavaScript files with aggressive settings
 * - Optimizes CSS files
 * - Compresses all assets with Brotli and Gzip
 * - Analyzes bundle sizes and performance metrics
 */

import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import { minify } from 'terser';
import { minify as cssoMinify } from 'csso';
import { gzipSync, brotliCompressSync } from 'zlib';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'client', 'dist', 'public');

// Performance optimization configuration
const OPTIMIZATION_CONFIG = {
  js: {
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn', 'console.error'],
      passes: 3,
      unsafe: true,
      unsafe_comps: true,
      unsafe_math: true,
      unsafe_proto: true,
      unsafe_regexp: true,
      pure_getters: true,
      keep_fargs: false,
      hoist_funs: true,
      hoist_vars: true,
      side_effects: false,
      dead_code: true,
      unused: true,
      conditionals: true,
      evaluate: true,
      loops: true,
      reduce_vars: true,
      collapse_vars: true,
      join_vars: true,
      sequences: true,
      properties: true,
      comparisons: true,
      booleans: true,
      typeofs: true,
      if_return: true,
      drop_unreachable: false,
      inline: 2
    },
    mangle: {
      toplevel: true,
      safari10: true,
      properties: {
        regex: /^_/
      }
    },
    format: {
      comments: false,
      ascii_only: true,
      beautify: false,
      braces: false,
      semicolons: false
    },
    sourceMap: false,
    toplevel: true,
    ie8: false,
    safari10: true
  },
  css: {
    restructure: true,
    forceMediaMerge: true,
    comments: false,
    usage: {
      blacklist: {
        classes: ['unused-*']
      }
    }
  }
};

// Performance metrics tracking
const metrics = {
  startTime: Date.now(),
  files: {
    js: { processed: 0, originalSize: 0, minifiedSize: 0, compressionRatio: 0 },
    css: { processed: 0, originalSize: 0, minifiedSize: 0, compressionRatio: 0 },
    html: { processed: 0, originalSize: 0, compressedSize: 0, compressionRatio: 0 }
  },
  compression: {
    gzip: { files: 0, originalSize: 0, compressedSize: 0, ratio: 0 },
    brotli: { files: 0, originalSize: 0, compressedSize: 0, ratio: 0 }
  }
};

/**
 * Get file size in bytes
 */
async function getFileSize(filePath) {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

/**
 * Format bytes to human readable format
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Minify JavaScript file with aggressive optimization
 */
async function minifyJavaScript(filePath) {
  try {
    const originalCode = await fs.readFile(filePath, 'utf8');
    const originalSize = Buffer.byteLength(originalCode, 'utf8');
    
    console.log(`🔧 Minifying JS: ${path.relative(rootDir, filePath)}`);
    
    const result = await minify(originalCode, OPTIMIZATION_CONFIG.js);
    
    if (result.error) {
      console.error(`❌ Error minifying ${filePath}:`, result.error);
      return { success: false, originalSize, minifiedSize: originalSize };
    }
    
    const minifiedCode = result.code;
    const minifiedSize = Buffer.byteLength(minifiedCode, 'utf8');
    
    // Write minified code back to file
    await fs.writeFile(filePath, minifiedCode, 'utf8');
    
    const savedBytes = originalSize - minifiedSize;
    const compressionRatio = ((savedBytes / originalSize) * 100).toFixed(2);
    
    console.log(`✅ JS optimized: ${formatBytes(originalSize)} → ${formatBytes(minifiedSize)} (${compressionRatio}% reduction)`);
    
    return { success: true, originalSize, minifiedSize, compressionRatio: parseFloat(compressionRatio) };
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return { success: false, originalSize: 0, minifiedSize: 0 };
  }
}

/**
 * Optimize CSS file
 */
async function optimizeCSS(filePath) {
  try {
    const originalCode = await fs.readFile(filePath, 'utf8');
    const originalSize = Buffer.byteLength(originalCode, 'utf8');
    
    console.log(`🎨 Optimizing CSS: ${path.relative(rootDir, filePath)}`);
    
    const result = cssoMinify(originalCode, OPTIMIZATION_CONFIG.css);
    const optimizedCode = result.css;
    const optimizedSize = Buffer.byteLength(optimizedCode, 'utf8');
    
    // Write optimized code back to file
    await fs.writeFile(filePath, optimizedCode, 'utf8');
    
    const savedBytes = originalSize - optimizedSize;
    const compressionRatio = ((savedBytes / originalSize) * 100).toFixed(2);
    
    console.log(`✅ CSS optimized: ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${compressionRatio}% reduction)`);
    
    return { success: true, originalSize, optimizedSize, compressionRatio: parseFloat(compressionRatio) };
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return { success: false, originalSize: 0, optimizedSize: 0 };
  }
}

/**
 * Compress file with Gzip and Brotli
 */
async function compressFile(filePath) {
  try {
    const fileContent = await fs.readFile(filePath);
    const originalSize = fileContent.length;
    
    // Skip if file is too small
    if (originalSize < 1024) {
      return { success: false, reason: 'File too small' };
    }
    
    // Gzip compression
    const gzipData = gzipSync(fileContent, { level: 9 });
    const gzipPath = filePath + '.gz';
    await fs.writeFile(gzipPath, gzipData);
    
    // Brotli compression
    const brotliData = brotliCompressSync(fileContent, {
      params: {
        [0]: 6, // quality
        [1]: 22   // window size
      }
    });
    const brotliPath = filePath + '.br';
    await fs.writeFile(brotliPath, brotliData);
    
    const gzipRatio = ((1 - gzipData.length / originalSize) * 100).toFixed(2);
    const brotliRatio = ((1 - brotliData.length / originalSize) * 100).toFixed(2);
    
    console.log(`📦 Compressed: ${path.relative(rootDir, filePath)} | Gzip: ${gzipRatio}% | Brotli: ${brotliRatio}%`);
    
    // Update metrics
    metrics.compression.gzip.files++;
    metrics.compression.gzip.originalSize += originalSize;
    metrics.compression.gzip.compressedSize += gzipData.length;
    
    metrics.compression.brotli.files++;
    metrics.compression.brotli.originalSize += originalSize;
    metrics.compression.brotli.compressedSize += brotliData.length;
    
    return { success: true, originalSize, gzipSize: gzipData.length, brotliSize: brotliData.length };
  } catch (error) {
    console.error(`❌ Error compressing ${filePath}:`, error.message);
    return { success: false };
  }
}

/**
 * Process all JavaScript files
 */
async function optimizeAllJavaScript() {
  console.log('\n🚀 Starting JavaScript optimization...');
  
  const jsFiles = await glob('**/*.js', { cwd: distDir, absolute: true });
  const mjsFiles = await glob('**/*.mjs', { cwd: distDir, absolute: true });
  const allJsFiles = [...jsFiles, ...mjsFiles];
  
  console.log(`Found ${allJsFiles.length} JavaScript files to optimize`);
  
  for (const filePath of allJsFiles) {
    const result = await minifyJavaScript(filePath);
    if (result.success) {
      metrics.files.js.processed++;
      metrics.files.js.originalSize += result.originalSize;
      metrics.files.js.minifiedSize += result.minifiedSize;
    }
  }
  
  if (metrics.files.js.processed > 0) {
    metrics.files.js.compressionRatio = ((metrics.files.js.originalSize - metrics.files.js.minifiedSize) / metrics.files.js.originalSize * 100).toFixed(2);
  }
}

/**
 * Process all CSS files
 */
async function optimizeAllCSS() {
  console.log('\n🎨 Starting CSS optimization...');
  
  const cssFiles = await glob('**/*.css', { cwd: distDir, absolute: true });
  
  console.log(`Found ${cssFiles.length} CSS files to optimize`);
  
  for (const filePath of cssFiles) {
    const result = await optimizeCSS(filePath);
    if (result.success) {
      metrics.files.css.processed++;
      metrics.files.css.originalSize += result.originalSize;
      metrics.files.css.minifiedSize += result.optimizedSize;
    }
  }
  
  if (metrics.files.css.processed > 0) {
    metrics.files.css.compressionRatio = ((metrics.files.css.originalSize - metrics.files.css.minifiedSize) / metrics.files.css.originalSize * 100).toFixed(2);
  }
}

/**
 * Compress all assets
 */
async function compressAllAssets() {
  console.log('\n📦 Starting asset compression...');
  
  const compressibleFiles = await glob('**/*.{js,css,html,json,xml,txt,svg}', { cwd: distDir, absolute: true });
  
  console.log(`Found ${compressibleFiles.length} files to compress`);
  
  for (const filePath of compressibleFiles) {
    await compressFile(filePath);
  }
  
  // Calculate compression metrics
  if (metrics.compression.gzip.files > 0) {
    metrics.compression.gzip.ratio = ((1 - metrics.compression.gzip.compressedSize / metrics.compression.gzip.originalSize) * 100).toFixed(2);
  }
  
  if (metrics.compression.brotli.files > 0) {
    metrics.compression.brotli.ratio = ((1 - metrics.compression.brotli.compressedSize / metrics.compression.brotli.originalSize) * 100).toFixed(2);
  }
}

/**
 * Generate comprehensive performance report
 */
function generatePerformanceReport() {
  const endTime = Date.now();
  const duration = ((endTime - metrics.startTime) / 1000).toFixed(2);
  
  console.log('\n' + '='.repeat(80));
  console.log('🚀 PERFORMANCE OPTIMIZATION COMPLETE');
  console.log('='.repeat(80));
  console.log(`⏱️  Total time: ${duration}s`);
  console.log('');
  
  // JavaScript optimization results
  console.log('📜 JavaScript Optimization:');
  console.log(`   Files processed: ${metrics.files.js.processed}`);
  console.log(`   Original size: ${formatBytes(metrics.files.js.originalSize)}`);
  console.log(`   Minified size: ${formatBytes(metrics.files.js.minifiedSize)}`);
  console.log(`   Size reduction: ${metrics.files.js.compressionRatio}%`);
  console.log(`   Bytes saved: ${formatBytes(metrics.files.js.originalSize - metrics.files.js.minifiedSize)}`);
  console.log('');
  
  // CSS optimization results
  console.log('🎨 CSS Optimization:');
  console.log(`   Files processed: ${metrics.files.css.processed}`);
  console.log(`   Original size: ${formatBytes(metrics.files.css.originalSize)}`);
  console.log(`   Optimized size: ${formatBytes(metrics.files.css.minifiedSize)}`);
  console.log(`   Size reduction: ${metrics.files.css.compressionRatio}%`);
  console.log(`   Bytes saved: ${formatBytes(metrics.files.css.originalSize - metrics.files.css.minifiedSize)}`);
  console.log('');
  
  // Compression results
  console.log('📦 Asset Compression:');
  console.log(`   Gzip compression: ${metrics.compression.gzip.files} files, ${metrics.compression.gzip.ratio}% reduction`);
  console.log(`   Brotli compression: ${metrics.compression.brotli.files} files, ${metrics.compression.brotli.ratio}% reduction`);
  console.log('');
  
  // Performance recommendations
  console.log('💡 Performance Recommendations:');
  console.log('   ✅ Enable server-side compression (Gzip/Brotli)');
  console.log('   ✅ Set appropriate Cache-Control headers');
  console.log('   ✅ Use CDN for static assets');
  console.log('   ✅ Enable HTTP/2 for better performance');
  console.log('   ✅ Consider lazy loading for images');
  console.log('   ✅ Implement service worker for caching');
  console.log('');
  
  // Overall stats
  const totalOriginalSize = metrics.files.js.originalSize + metrics.files.css.originalSize;
  const totalOptimizedSize = metrics.files.js.minifiedSize + metrics.files.css.minifiedSize;
  const totalSavings = totalOriginalSize - totalOptimizedSize;
  const totalCompressionRatio = totalOriginalSize > 0 ? ((totalSavings / totalOriginalSize) * 100).toFixed(2) : 0;
  
  console.log('📊 Overall Statistics:');
  console.log(`   Total files optimized: ${metrics.files.js.processed + metrics.files.css.processed}`);
  console.log(`   Total size reduction: ${formatBytes(totalSavings)} (${totalCompressionRatio}%)`);
  console.log(`   Performance grade: ${totalCompressionRatio > 30 ? 'A+' : totalCompressionRatio > 20 ? 'A' : 'B'}`);
  console.log('='.repeat(80));
}

/**
 * Main optimization function
 */
async function main() {
  console.log('🚀 Starting comprehensive performance optimization...');
  
  try {
    // Check if dist directory exists
    try {
      await fs.access(distDir);
    } catch {
      console.error(`❌ Distribution directory not found: ${distDir}`);
      console.log('Please run "npm run build" first to create the distribution files.');
      process.exit(1);
    }
    
    // Run all optimizations
    await optimizeAllJavaScript();
    await optimizeAllCSS();
    await compressAllAssets();
    
    // Generate report
    generatePerformanceReport();
    
    console.log('✅ All optimizations completed successfully!');
    
  } catch (error) {
    console.error('❌ Optimization failed:', error.message);
    process.exit(1);
  }
}

// Run the optimization
main().catch(console.error);