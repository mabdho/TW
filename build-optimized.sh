#!/bin/bash

echo "🚀 Starting optimized production build..."

# Clean previous builds
rm -rf dist/
echo "✅ Cleaned previous build"

# Build with optimizations
NODE_ENV=production npm run build

# Post-build CSS optimization with PurgeCSS
if [ -f "purgecss.config.js" ] && [ -d "dist/public/css" ]; then
  echo "🎨 Optimizing CSS with PurgeCSS..."
  npx purgecss --config purgecss.config.js --out dist/public/css/
  echo "✅ CSS optimization complete"
fi

# Additional JavaScript minification
echo "📦 Applying additional JavaScript optimizations..."
find dist/public/js -name "*.js" -type f -exec npx terser {} -o {} --compress drop_console=true,drop_debugger=true,pure_funcs=['console.log','console.warn'],dead_code=true,unused=true --mangle toplevel=true --format comments=false \;

# Additional CSS minification
echo "🎨 Applying additional CSS optimizations..."
find dist/public/css -name "*.css" -type f -exec npx csso {} --output {} \;

# Generate compression reports
echo "📊 Generating size reports..."
if command -v gzip >/dev/null 2>&1; then
  find dist/public -name "*.js" -o -name "*.css" | while read file; do
    original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null || echo "0")
    gzip_size=$(gzip -c "$file" | wc -c)
    echo "$(basename "$file"): ${original_size} bytes → ${gzip_size} bytes gzipped"
  done > dist/size-report.txt
  echo "✅ Size report saved to dist/size-report.txt"
fi

echo "🎉 Optimized build complete!"
echo "📋 Check dist/size-report.txt for compression details"
