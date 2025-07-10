#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('🚀 Code Splitting Bundle Analysis\n');

// Analyze the App.tsx file
const appPath = path.join(__dirname, 'client', 'src', 'App.tsx');
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf-8');
  
  // Count static imports (bad for bundle size)
  const staticImports = appContent.match(/^import.*from.*cities\//gm) || [];
  
  // Count dynamic imports (good for code splitting)
  const dynamicImports = appContent.match(/import\(['"`].*cities\//gm) || [];
  
  console.log('📊 Import Analysis:');
  console.log(`   Static city imports: ${staticImports.length}`);
  console.log(`   Dynamic city imports: ${dynamicImports.length > 0 ? 'Enabled ✅' : 'Disabled ❌'}`);
  
  if (staticImports.length > 0) {
    console.log('\n⚠️  Warning: Static imports detected. These will increase main bundle size.');
    console.log('   Consider moving these to dynamic imports for better code splitting.');
  } else {
    console.log('\n✅ Excellent! No static city imports detected.');
    console.log('   All city routes should be loaded on-demand via code splitting.');
  }
}

// Check if DynamicCityRoute component exists
const dynamicRoutePath = path.join(__dirname, 'client', 'src', 'components', 'DynamicCityRoute.tsx');
if (fs.existsSync(dynamicRoutePath)) {
  console.log('\n🔀 Dynamic Route Component: ✅ Found');
  
  const dynamicContent = fs.readFileSync(dynamicRoutePath, 'utf-8');
  const cityMappings = dynamicContent.match(/'[\w-]+': \(\) => import/g) || [];
  console.log(`   Configured dynamic routes: ${cityMappings.length}`);
} else {
  console.log('\n🔀 Dynamic Route Component: ❌ Missing');
}

// Analyze dist folder if it exists
const distPath = path.join(__dirname, 'dist', 'public', 'assets');
if (fs.existsSync(distPath)) {
  console.log('\n📦 Build Analysis:');
  
  const files = fs.readdirSync(distPath)
    .filter(file => file.endsWith('.js'))
    .map(file => {
      const filePath = path.join(distPath, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        size: stats.size,
        sizeKB: Math.round(stats.size / 1024),
        sizeMB: (stats.size / (1024 * 1024)).toFixed(2)
      };
    })
    .sort((a, b) => b.size - a.size);
  
  const totalSize = files.reduce((sum, file) => sum + file.size, 0);
  console.log(`   Total JS bundle size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
  
  console.log('\n   Largest chunks:');
  files.slice(0, 5).forEach(file => {
    console.log(`   ${file.name}: ${file.sizeKB} KB`);
  });
  
  const mainChunk = files.find(f => f.name.includes('App') || f.name.includes('main'));
  if (mainChunk) {
    if (mainChunk.sizeKB > 500) {
      console.log(`\n⚠️  Main chunk is large (${mainChunk.sizeKB} KB). Consider more aggressive code splitting.`);
    } else {
      console.log(`\n✅ Main chunk size looks good (${mainChunk.sizeKB} KB).`);
    }
  }
} else {
  console.log('\n📦 Build Analysis: ❌ No build found. Run `npm run build` first.');
}

// Recommendations
console.log('\n🎯 Code Splitting Recommendations:');
console.log('   1. ✅ Use React.lazy() for all city pages');
console.log('   2. ✅ Implement Suspense boundaries with loading states');
console.log('   3. ✅ Group related routes into chunks');
console.log('   4. ✅ Use dynamic imports instead of static imports');
console.log('   5. 🔄 Consider route-based prefetching for popular destinations');

console.log('\n💡 Next Steps:');
console.log('   • Run `npm run build` to see bundle size improvements');
console.log('   • Use `npm run analyze` to visualize bundle composition');
console.log('   • Monitor Core Web Vitals for performance impact');
console.log('   • Consider implementing intersection observer for route prefetching');