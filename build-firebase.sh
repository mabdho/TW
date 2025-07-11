#!/bin/bash

# Firebase Build Script for TravelWanders
# This script builds both the client and functions for Firebase deployment

echo "🚀 Starting Firebase build process..."

# Step 1: Build the client (React app)
echo "📦 Building client application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Client build failed"
    exit 1
fi

# Step 2: Create functions directory structure
echo "📁 Setting up functions directory..."
mkdir -p dist/functions

# Step 3: Copy server dependencies to functions directory
echo "📋 Copying server dependencies..."
cp server/routes.ts dist/functions/routes.js 2>/dev/null || echo "routes.ts not found"
cp server/storage.ts dist/functions/storage.js 2>/dev/null || echo "storage.ts not found"
cp server/vite.ts dist/functions/vite.js 2>/dev/null || echo "vite.ts not found"
cp server/firebase-config.ts dist/functions/firebase-config.js 2>/dev/null || echo "firebase-config.ts not found"
cp -r server/utils dist/functions/ 2>/dev/null || echo "utils directory not found"
cp -r server/routes dist/functions/ 2>/dev/null || echo "routes directory not found"
cp -r shared dist/functions/ 2>/dev/null || echo "shared directory not found"

# Step 4: Build the Firebase Functions
echo "⚙️  Building Firebase Functions..."
npx esbuild server/firebase-server.ts \
    --platform=node \
    --bundle \
    --format=esm \
    --outfile=dist/functions/index.js \
    --external:firebase-admin \
    --external:firebase-functions \
    --external:express \
    --external:express-session \
    --external:bcryptjs \
    --external:@google/generative-ai \
    --external:drizzle-orm \
    --external:@neondatabase/serverless

if [ $? -ne 0 ]; then
    echo "❌ Functions build failed"
    exit 1
fi

# Step 5: Create functions package.json
echo "📄 Creating functions package.json..."
cat > dist/functions/package.json << 'EOF'
{
  "name": "functions",
  "version": "1.0.0",
  "description": "Firebase Functions for TravelWanders",
  "main": "index.js",
  "type": "module",
  "engines": {
    "node": "20"
  },
  "dependencies": {
    "firebase-admin": "^12.0.0",
    "firebase-functions": "^4.8.1",
    "express": "^4.18.2",
    "express-session": "^1.17.3",
    "bcryptjs": "^2.4.3",
    "@google/generative-ai": "^0.24.1",
    "drizzle-orm": "^0.35.0",
    "@neondatabase/serverless": "^1.0.1",
    "zod": "^3.22.4",
    "zod-validation-error": "^3.0.0"
  }
}
EOF

echo "✅ Firebase build completed successfully!"
echo "📁 Client files: dist/public/"
echo "📁 Functions files: dist/functions/"
echo ""
echo "🚀 Ready for Firebase deployment:"
echo "   firebase deploy --only hosting  # Deploy only frontend"
echo "   firebase deploy --only functions # Deploy only backend"
echo "   firebase deploy                  # Deploy everything"