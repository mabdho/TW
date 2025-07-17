#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const faviconFiles = [
  'favicon.svg',
  'favicon.ico', 
  'apple-touch-icon.svg',
  'manifest.json'
];

// Ensure dist/public directory exists
const distPublicDir = path.join(process.cwd(), 'dist', 'public');
if (!fs.existsSync(distPublicDir)) {
  fs.mkdirSync(distPublicDir, { recursive: true });
}

// Copy favicon files from public to dist/public
faviconFiles.forEach(file => {
  const src = path.join(process.cwd(), 'public', file);
  const dest = path.join(distPublicDir, file);
  
  try {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      console.log(`✅ Copied ${file} to dist/public/`);
    } else {
      console.log(`⚠️  ${file} not found in public folder`);
    }
  } catch (error) {
    console.error(`❌ Error copying ${file}: ${error.message}`);
  }
});

console.log('🎉 Favicon files copied to dist/public successfully!');