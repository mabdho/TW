#!/bin/bash

echo "🏗️  Building TravelWanders with Static Site Generation..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/

# Build the application
echo "📦 Building application..."
NODE_ENV=production npm run build

# Generate static pages
echo "📄 Generating static pages..."
node scripts/generate-static-pages.js

# Apply optimizations
echo "⚡ Applying optimizations..."
npm run optimize:post-build

echo "✅ Static build complete!"
echo "📁 Static files ready in dist/public/"
echo "🌐 Deploy the dist/public folder to your hosting provider"