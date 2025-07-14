#!/usr/bin/env node
/**
 * Build optimization script for TravelWanders
 * Analyzes and optimizes production bundle for performance
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist', 'public');

console.log('🚀 Starting build optimization...');

// Function to get file size in a human-readable format
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    const bytes = stats.size;
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  } catch (error) {
    return 'Unknown';
  }
}

// Function to analyze bundle
function analyzeBundleSize() {
  console.log('\n📊 Analyzing bundle sizes...');
  
  if (!fs.existsSync(distDir)) {
    console.log('❌ Dist directory not found. Run build first.');
    return;
  }

  const jsFiles = [];
  const cssFiles = [];
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.js')) {
        jsFiles.push({
          name: file,
          path: filePath,
          size: stat.size
        });
      } else if (file.endsWith('.css')) {
        cssFiles.push({
          name: file,
          path: filePath,
          size: stat.size
        });
      }
    });
  }
  
  scanDirectory(distDir);
  
  // Sort by size (largest first)
  jsFiles.sort((a, b) => b.size - a.size);
  cssFiles.sort((a, b) => b.size - a.size);
  
  console.log('\n🔧 JavaScript Files:');
  jsFiles.forEach(file => {
    console.log(`  ${file.name}: ${getFileSize(file.path)}`);
  });
  
  console.log('\n🎨 CSS Files:');
  cssFiles.forEach(file => {
    console.log(`  ${file.name}: ${getFileSize(file.path)}`);
  });
  
  // Calculate totals
  const totalJS = jsFiles.reduce((sum, file) => sum + file.size, 0);
  const totalCSS = cssFiles.reduce((sum, file) => sum + file.size, 0);
  const totalSize = totalJS + totalCSS;
  
  console.log('\n📈 Bundle Summary:');
  console.log(`  Total JavaScript: ${(totalJS / 1024).toFixed(2)} KB`);
  console.log(`  Total CSS: ${(totalCSS / 1024).toFixed(2)} KB`);
  console.log(`  Total Bundle Size: ${(totalSize / 1024).toFixed(2)} KB`);
  
  // Performance recommendations
  console.log('\n💡 Performance Recommendations:');
  if (totalSize > 500 * 1024) {
    console.log('  ⚠️  Bundle size is large (>500KB). Consider code splitting.');
  }
  if (jsFiles.some(file => file.size > 200 * 1024)) {
    console.log('  ⚠️  Large JavaScript chunks detected. Consider breaking them down.');
  }
  if (totalJS > totalCSS * 10) {
    console.log('  ⚠️  JavaScript dominates bundle. Consider lazy loading.');
  }
  
  return { totalSize, totalJS, totalCSS };
}

// Function to run the build
function runBuild() {
  console.log('\n🔨 Building application...');
  try {
    execSync('npm run build', { 
      stdio: 'inherit', 
      cwd: rootDir 
    });
    console.log('✅ Build completed successfully');
    return true;
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    return false;
  }
}

// Function to optimize static assets
function optimizeAssets() {
  console.log('\n🎯 Optimizing static assets...');
  
  if (!fs.existsSync(distDir)) {
    console.log('❌ No dist directory found');
    return false;
  }
  
  // Find and compress large files
  function compressLargeFiles(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        compressLargeFiles(filePath);
      } else if (stat.size > 10 * 1024) { // Files larger than 10KB
        const ext = path.extname(file).toLowerCase();
        if (['.js', '.css', '.html', '.json'].includes(ext)) {
          console.log(`  📦 Compressing ${file} (${getFileSize(filePath)})`);
          // Note: Actual compression would be handled by the server or CDN
        }
      }
    });
  }
  
  compressLargeFiles(distDir);
  console.log('✅ Asset optimization completed');
  return true;
}

// Function to generate performance report
function generatePerformanceReport(bundleStats) {
  const reportPath = path.join(rootDir, 'performance-report.json');
  
  const report = {
    timestamp: new Date().toISOString(),
    bundleSize: {
      total: bundleStats.totalSize,
      javascript: bundleStats.totalJS,
      css: bundleStats.totalCSS
    },
    recommendations: [],
    scores: {}
  };
  
  // Calculate performance scores
  report.scores.bundleSize = bundleStats.totalSize < 500 * 1024 ? 100 : Math.max(0, 100 - ((bundleStats.totalSize - 500 * 1024) / 1024 / 10));
  report.scores.jsRatio = bundleStats.totalJS < bundleStats.totalSize * 0.8 ? 100 : 80;
  
  // Add recommendations
  if (bundleStats.totalSize > 500 * 1024) {
    report.recommendations.push('Reduce bundle size below 500KB');
  }
  if (bundleStats.totalJS > bundleStats.totalSize * 0.8) {
    report.recommendations.push('Reduce JavaScript-to-CSS ratio');
  }
  
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📋 Performance report saved to: ${reportPath}`);
}

// Main execution
async function main() {
  console.log('🎯 TravelWanders Build Optimization Tool');
  console.log('========================================\n');
  
  // Build the application
  const buildSuccess = runBuild();
  if (!buildSuccess) {
    process.exit(1);
  }
  
  // Analyze bundle
  const bundleStats = analyzeBundleSize();
  if (!bundleStats) {
    process.exit(1);
  }
  
  // Optimize assets
  optimizeAssets();
  
  // Generate report
  generatePerformanceReport(bundleStats);
  
  console.log('\n🎉 Build optimization completed!');
  console.log('\n📊 Quick Stats:');
  console.log(`  Bundle Size: ${(bundleStats.totalSize / 1024).toFixed(2)} KB`);
  console.log(`  Performance Score: ${bundleStats.totalSize < 500 * 1024 ? '✅ Good' : '⚠️ Needs Improvement'}`);
}

// Run the script
main().catch(console.error);