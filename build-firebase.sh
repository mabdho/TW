#!/bin/bash

echo "🔥 Building TravelWanders for Firebase Deployment..."
echo "================================================="

# Step 1: Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/public/*
rm -rf dist/index.js

# Step 2: Build React app
echo "⚛️ Building React app..."
cd client
npm run build
cd ..

# Step 3: Copy React app to Firebase public directory
echo "📦 Copying React app to Firebase public directory..."
cp -r client/dist/* dist/public/

# Step 4: Ensure React app index.html is in place
echo "🔧 Ensuring React app index.html is properly placed..."
cp client/index.html dist/public/index.html

# Step 5: Generate SEO HTML files
echo "🔍 Generating SEO HTML files..."
curl -X POST http://localhost:5000/api/test-regenerate-static-files

# Step 6: Build Firebase Functions
echo "🔧 Building Firebase Functions..."
npm run build:server

# Step 7: Verify deployment structure
echo "✅ Verifying deployment structure..."
echo "React app (index.html): $(ls -la dist/public/index.html | awk '{print $5}') bytes"
echo "SEO HTML files:"
ls -la dist/public/*-seo.html | awk '{print "  " $9 ": " $5 " bytes"}'
echo "Firebase Functions: $(ls -la dist/index.js | awk '{print $5}') bytes"

echo "🎉 Firebase build completed successfully!"
echo "Ready for deployment with:"
echo "  - React app for users"
echo "  - SEO HTML for search engines"
echo "  - Firebase Functions for bot detection"