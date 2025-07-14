#!/usr/bin/env node

/**
 * Bundle Analysis Script for TravelWanders
 * Analyzes and optimizes JavaScript bundles for performance
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Analyze bundle composition and size
 */
function analyzeBundle() {
  console.log('📊 Bundle Analysis Report\n');
  
  const distPath = resolve(__dirname, '../dist/public');
  
  if (!existsSync(distPath)) {
    console.log('❌ No build found. Run npm run build first.');
    return;
  }

  const files = getAllFiles(distPath, ['.js', '.css']);
  
  console.log('📈 Asset Sizes:');
  files.sort((a, b) => b.size - a.size).forEach(file => {
    const sizeKB = (file.size / 1024).toFixed(2);
    const status = file.size > 500000 ? '🚨' : file.size > 200000 ? '⚠️' : '✅';
    console.log(`${status} ${file.name}: ${sizeKB} KB`);
  });

  console.log('\n📋 Optimization Recommendations:');
  generateOptimizationReport();
}

function getAllFiles(dir, extensions) {
  const results = [];
  
  function traverse(currentDir) {
    try {
      const items = require('fs').readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = join(currentDir, item);
        const stat = require('fs').statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (extensions.some(ext => item.endsWith(ext))) {
          results.push({
            name: item,
            size: stat.size,
            path: fullPath
          });
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read directory ${currentDir}`);
    }
  }
  
  traverse(dir);
  return results;
}

function generateOptimizationReport() {
  const recommendations = [
    '🎯 Replace lucide-react with lightweight SVG icons (saves ~900KB)',
    '📦 Implement route-based code splitting for city pages',
    '🔄 Lazy load Radix UI components',
    '🗜️ Enable Brotli compression',
    '📱 Implement dynamic imports for mobile components',
    '🎨 Use CSS-only icons where possible',
    '📈 Add bundle size monitoring to CI/CD'
  ];
  
  recommendations.forEach(rec => console.log(`   ${rec}`));
  
  console.log('\n🎯 Priority Actions:');
  console.log('   1. Replace lucide-react with LightweightIcons (CRITICAL)');
  console.log('   2. Implement city page code splitting');
  console.log('   3. Lazy load admin components');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  analyzeBundle();
}

export { analyzeBundle };