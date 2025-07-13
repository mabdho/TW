#!/bin/bash

# Complete Firebase HTML Deployment Script
# Ensures all HTML files are in the correct directory for Firebase hosting

echo "🔥 Preparing Firebase HTML deployment..."

# Set Firebase deployment environment
export FIREBASE_DEPLOYMENT=true
export NODE_ENV=production

echo "📦 Step 1: Building React app and assets..."
npm run build

echo "📋 Step 2: Verifying Firebase deployment structure..."
if [ ! -d "dist/public" ]; then
    echo "❌ Error: dist/public directory not found!"
    exit 1
fi

echo "📊 Step 3: Checking HTML files in Firebase deployment directory..."
html_count=$(find dist/public -name "*.html" | wc -l)
echo "📄 Found $html_count HTML files in dist/public/"

echo "📂 HTML files ready for Firebase deployment:"
find dist/public -name "*.html" | head -10

echo "📁 City page directories:"
find dist/public -name "best-things-to-do-in-*" -type d | head -5

echo "🔍 Checking specific files:"
echo "- Homepage: $(ls dist/public/index.html 2>/dev/null && echo '✅ Ready' || echo '❌ Missing')"
echo "- Destinations: $(ls dist/public/destinations.html 2>/dev/null && echo '✅ Ready' || echo '❌ Missing')"
echo "- Blogs: $(ls dist/public/blogs.html 2>/dev/null && echo '✅ Ready' || echo '❌ Missing')"
echo "- Sitemap: $(ls dist/public/sitemap.xml 2>/dev/null && echo '✅ Ready' || echo '❌ Missing')"
echo "- Robots: $(ls dist/public/robots.txt 2>/dev/null && echo '✅ Ready' || echo '❌ Missing')"

echo "📊 Directory structure verification:"
echo "dist/public/ contains $(ls dist/public/ | wc -l) items"
echo "Total size: $(du -sh dist/public/ | cut -f1)"

echo "✅ Firebase HTML deployment preparation complete!"
echo ""
echo "🚀 To deploy to Firebase:"
echo "1. Make sure you have firebase-tools installed: npm install -g firebase-tools"
echo "2. Run: firebase deploy"
echo "3. Or deploy only hosting: firebase deploy --only hosting"
echo ""
echo "📍 Your HTML files are ready in dist/public/ for Firebase hosting"