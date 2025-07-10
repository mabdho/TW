#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('📊 Analyzing bundle sizes...');

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeDirectory(dir, results = {}) {
  if (!fs.existsSync(dir)) return results;
  
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      analyzeDirectory(filePath, results);
    } else {
      const ext = path.extname(file);
      const size = stat.size;
      
      if (!results[ext]) {
        results[ext] = { count: 0, totalSize: 0, files: [] };
      }
      
      results[ext].count++;
      results[ext].totalSize += size;
      results[ext].files.push({ name: file, size, path: filePath });
    }
  });
  
  return results;
}

if (fs.existsSync('dist/public')) {
  const analysis = analyzeDirectory('dist/public');
  
  console.log('\n📦 Bundle Analysis Results:\n');
  
  Object.entries(analysis)
    .sort(([,a], [,b]) => b.totalSize - a.totalSize)
    .forEach(([ext, data]) => {
      console.log(`${ext || 'no extension'}: ${data.count} files, ${formatBytes(data.totalSize)}`);
      
      // Show largest files of this type
      const largestFiles = data.files
        .sort((a, b) => b.size - a.size)
        .slice(0, 3);
      
      largestFiles.forEach(file => {
        console.log(`  📄 ${file.name}: ${formatBytes(file.size)}`);
      });
      console.log('');
    });
  
  const totalSize = Object.values(analysis).reduce((sum, data) => sum + data.totalSize, 0);
  console.log(`🎯 Total bundle size: ${formatBytes(totalSize)}`);
  
} else {
  console.log('❌ No build directory found. Run npm run build first.');
}
