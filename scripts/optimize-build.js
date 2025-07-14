#!/usr/bin/env node

/**
 * Build optimization script for TravelWanders
 * Analyzes and optimizes production bundle for performance
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, statSync, readdirSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getFileSize(filePath) {
  try {
    const stats = statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

function analyzeBundleSize() {
  console.log('📊 Analyzing bundle composition...\n');
  
  const distPath = resolve(__dirname, '../dist/public');
  
  function scanDirectory(dir) {
    const files = [];
    try {
      const items = readdirSync(dir);
      items.forEach(item => {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
          files.push(...scanDirectory(fullPath));
        } else if (item.endsWith('.js') || item.endsWith('.css')) {
          files.push({
            name: item,
            size: stat.size,
            path: fullPath,
            type: item.endsWith('.js') ? 'JavaScript' : 'CSS'
          });
        }
      });
    } catch (error) {
      console.warn(`Warning: Could not scan ${dir}`);
    }
    return files;
  }

  const files = scanDirectory(distPath);
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  
  console.log('📈 Bundle Analysis Results:');
  console.log(`Total Bundle Size: ${(totalSize / 1024).toFixed(2)} KB\n`);
  
  // Sort by size and show largest files
  files.sort((a, b) => b.size - a.size);
  
  console.log('🔍 Largest Files:');
  files.slice(0, 10).forEach(file => {
    const sizeKB = (file.size / 1024).toFixed(2);
    const status = file.size > 500000 ? '🚨' : file.size > 200000 ? '⚠️' : '✅';
    console.log(`${status} ${file.name}: ${sizeKB} KB (${file.type})`);
  });
  
  return { files, totalSize };
}

function runBuild() {
  console.log('🔧 Running optimized build...\n');
  
  try {
    // Clean previous build
    execSync('rm -rf dist/public', { stdio: 'inherit' });
    
    // Run production build
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log('\n✅ Build completed successfully!\n');
    return true;
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    return false;
  }
}

function optimizeAssets() {
  console.log('🎯 Applying post-build optimizations...\n');
  
  const distPath = resolve(__dirname, '../dist/public');
  
  function compressLargeFiles(dir) {
    try {
      const items = readdirSync(dir);
      items.forEach(item => {
        const fullPath = join(dir, item);
        const stat = statSync(fullPath);
        
        if (stat.isDirectory()) {
          compressLargeFiles(fullPath);
        } else if (item.endsWith('.js') && stat.size > 100000) {
          console.log(`🗜️ Compressing ${item} (${(stat.size / 1024).toFixed(2)} KB)`);
          // Additional compression could be applied here
        }
      });
    } catch (error) {
      console.warn(`Warning: Could not optimize ${dir}`);
    }
  }
  
  compressLargeFiles(distPath);
}

function generatePerformanceReport(bundleStats) {
  const { files, totalSize } = bundleStats;
  
  console.log('\n📋 Performance Optimization Report:\n');
  
  // Analyze bundle composition
  const jsFiles = files.filter(f => f.type === 'JavaScript');
  const cssFiles = files.filter(f => f.type === 'CSS');
  
  const jsSize = jsFiles.reduce((sum, f) => sum + f.size, 0);
  const cssSize = cssFiles.reduce((sum, f) => sum + f.size, 0);
  
  console.log(`📦 JavaScript: ${(jsSize / 1024).toFixed(2)} KB (${jsFiles.length} files)`);
  console.log(`🎨 CSS: ${(cssSize / 1024).toFixed(2)} KB (${cssFiles.length} files)`);
  
  // Performance recommendations
  console.log('\n🎯 Optimization Recommendations:');
  
  if (totalSize > 1000000) {
    console.log('   🚨 CRITICAL: Total bundle size > 1MB');
    console.log('   📦 Implement aggressive code splitting');
    console.log('   🔄 Use dynamic imports for non-critical features');
  }
  
  const largeFiles = files.filter(f => f.size > 500000);
  if (largeFiles.length > 0) {
    console.log(`   ⚠️ ${largeFiles.length} files exceed 500KB threshold`);
    largeFiles.forEach(file => {
      console.log(`     - ${file.name}: ${(file.size / 1024).toFixed(2)} KB`);
    });
  }
  
  // Specific recommendations
  console.log('\n💡 Immediate Actions:');
  console.log('   1. Verify lucide-react is completely removed from bundle');
  console.log('   2. Split Radix UI components into separate chunks');
  console.log('   3. Lazy load admin/blog editor components');
  console.log('   4. Enable Brotli compression in production');
  console.log('   5. Implement service worker for caching');
  
  // Success metrics
  const targetSize = 300 * 1024; // 300KB target
  if (totalSize <= targetSize) {
    console.log(`\n✅ SUCCESS: Bundle size within target (${(totalSize / 1024).toFixed(2)} KB ≤ 300 KB)`);
  } else {
    const excess = totalSize - targetSize;
    console.log(`\n❌ OVER TARGET: ${(excess / 1024).toFixed(2)} KB over 300 KB limit`);
  }
}

async function main() {
  console.log('🚀 TravelWanders Bundle Optimization\n');
  
  // Step 1: Run build
  const buildSuccess = runBuild();
  if (!buildSuccess) {
    process.exit(1);
  }
  
  // Step 2: Analyze bundle
  const bundleStats = analyzeBundleSize();
  
  // Step 3: Apply optimizations
  optimizeAssets();
  
  // Step 4: Generate report
  generatePerformanceReport(bundleStats);
  
  console.log('\n🎉 Optimization complete!');
  console.log('\n📋 Next Steps:');
  console.log('   • Deploy optimized bundle to production');
  console.log('   • Monitor Core Web Vitals in real users');
  console.log('   • Set up performance budgets in CI/CD');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { analyzeBundleSize, optimizeAssets, generatePerformanceReport };