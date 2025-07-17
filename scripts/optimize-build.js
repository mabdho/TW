#!/usr/bin/env node

/**
 * Production Build Optimization Script
 * Handles complete build process with optimizations
 */

import { execSync } from 'child_process';
import { existsSync, statSync, readdirSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

console.log('🚀 Starting optimized production build...');

// Step 1: Clean previous builds
console.log('🧹 Cleaning previous build...');
try {
  execSync('rm -rf dist', { cwd: projectRoot, stdio: 'inherit' });
  console.log('✅ Previous build cleaned');
} catch (error) {
  console.log('⚠️  No previous build to clean');
}

// Step 2: Run TypeScript check
console.log('🔍 Running TypeScript check...');
try {
  execSync('npm run check', { cwd: projectRoot, stdio: 'inherit' });
  console.log('✅ TypeScript check passed');
} catch (error) {
  console.error('❌ TypeScript check failed');
  process.exit(1);
}

// Step 3: Build with optimizations
console.log('🏗️  Building application...');
try {
  execSync('NODE_ENV=production npm run build', { cwd: projectRoot, stdio: 'inherit' });
  console.log('✅ Application built successfully');
} catch (error) {
  console.error('❌ Build failed');
  process.exit(1);
}

// Step 4: Optimize assets
console.log('⚡ Optimizing assets...');
try {
  execSync('npm run optimize:post-build', { cwd: projectRoot, stdio: 'inherit' });
  console.log('✅ Assets optimized');
} catch (error) {
  console.log('⚠️  Asset optimization skipped (no assets found)');
}

// Step 5: Analyze bundle size
console.log('📊 Analyzing bundle size...');
const distPath = join(projectRoot, 'dist', 'public');
if (existsSync(distPath)) {
  const files = readdirSync(distPath, { recursive: true });
  let totalSize = 0;
  let jsSize = 0;
  let cssSize = 0;
  let assetCount = 0;

  files.forEach(file => {
    const filePath = join(distPath, file);
    if (statSync(filePath).isFile()) {
      const size = statSync(filePath).size;
      totalSize += size;
      assetCount++;
      
      if (file.endsWith('.js')) {
        jsSize += size;
      } else if (file.endsWith('.css')) {
        cssSize += size;
      }
    }
  });

  console.log(`📈 Build Statistics:`);
  console.log(`   Total size: ${(totalSize / 1024).toFixed(2)} KB`);
  console.log(`   JavaScript: ${(jsSize / 1024).toFixed(2)} KB`);
  console.log(`   CSS: ${(cssSize / 1024).toFixed(2)} KB`);
  console.log(`   Assets: ${assetCount} files`);
  
  // Performance recommendations
  if (jsSize > 500 * 1024) {
    console.log('⚠️  JavaScript bundle is large (>500KB). Consider code splitting.');
  }
  if (totalSize > 1000 * 1024) {
    console.log('⚠️  Total bundle is large (>1MB). Consider optimization.');
  }
  
  console.log('✅ Build analysis complete');
} else {
  console.log('⚠️  No build output found for analysis');
}

// Step 6: Test production build
console.log('🧪 Testing production build...');
try {
  // Check if essential files exist
  const essentialFiles = [
    'dist/index.js',
    'dist/public/index.html'
  ];
  
  const missingFiles = essentialFiles.filter(file => !existsSync(join(projectRoot, file)));
  
  if (missingFiles.length > 0) {
    console.error('❌ Missing essential files:', missingFiles);
    process.exit(1);
  }
  
  console.log('✅ Production build test passed');
} catch (error) {
  console.error('❌ Production build test failed');
  process.exit(1);
}

console.log('🎉 Optimized production build completed successfully!');
console.log('📋 Next steps:');
console.log('   - Run: npm start (to test production build)');
console.log('   - Deploy: Copy dist/ folder to your hosting platform');