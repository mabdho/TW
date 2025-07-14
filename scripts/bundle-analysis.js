#!/usr/bin/env node

/**
 * Bundle Analysis Script for TravelWanders
 * Analyzes and optimizes JavaScript bundles for performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function analyzeBundle() {
  console.log('🔍 Analyzing bundle composition...\n');
  
  // Find all lucide-react imports
  const srcDir = path.join(__dirname, '../client/src');
  const files = getAllFiles(srcDir, ['.tsx', '.ts']);
  
  let totalIcons = 0;
  let largeImports = [];
  
  files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const matches = content.match(/import\s*\{\s*([^}]+)\s*\}\s*from\s*['"']lucide-react['"']/);
    
    if (matches) {
      const icons = matches[1].split(',').map(icon => icon.trim()).filter(Boolean);
      totalIcons += icons.length;
      
      if (icons.length > 10) {
        largeImports.push({
          file: file.replace(srcDir, ''),
          count: icons.length,
          icons: icons
        });
      }
    }
  });
  
  console.log(`📊 Bundle Analysis Results:`);
  console.log(`Total Lucide Icons Imported: ${totalIcons}`);
  console.log(`Files with 10+ Icon Imports: ${largeImports.length}\n`);
  
  if (largeImports.length > 0) {
    console.log('⚠️  Large Import Files:');
    largeImports.forEach(item => {
      console.log(`  ${item.file}: ${item.count} icons`);
    });
    console.log('');
  }
  
  // Analyze chunk sizes
  try {
    const distPath = path.join(__dirname, '../dist');
    if (fs.existsSync(distPath)) {
      const jsFiles = fs.readdirSync(distPath)
        .filter(file => file.endsWith('.js'))
        .map(file => {
          const stats = fs.statSync(path.join(distPath, file));
          return {
            name: file,
            size: stats.size,
            sizeMB: (stats.size / (1024 * 1024)).toFixed(2)
          };
        })
        .sort((a, b) => b.size - a.size);
      
      console.log('📦 Largest JavaScript Chunks:');
      jsFiles.slice(0, 5).forEach(file => {
        console.log(`  ${file.name}: ${file.sizeMB} MB`);
      });
    }
  } catch (err) {
    console.log('ℹ️  Run npm run build first to analyze chunk sizes');
  }
}

function getAllFiles(dir, extensions) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stats = fs.statSync(fullPath);
      
      if (stats.isDirectory()) {
        traverse(fullPath);
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

function generateOptimizationReport() {
  console.log('\n🎯 Optimization Recommendations:');
  console.log('1. Reduce lucide-react imports in large components');
  console.log('2. Consider icon consolidation for similar functionality');
  console.log('3. Implement lazy loading for non-critical components');
  console.log('4. Use dynamic imports for route-based code splitting');
  console.log('\n✅ Next Steps:');
  console.log('- Run this analysis after optimizations');
  console.log('- Monitor bundle sizes in production');
  console.log('- Consider implementing icon tree-shaking');
}

if (require.main === module) {
  analyzeBundle();
  generateOptimizationReport();
}

module.exports = { analyzeBundle, generateOptimizationReport };