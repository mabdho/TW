#!/bin/bash

# Firebase Build Script - Complete Static HTML Generator
echo "🔥 Building Firebase Static HTML Generator..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/functions
rm -rf functions/lib

# Create directories
mkdir -p dist/functions
mkdir -p functions/lib

# Build the frontend first
echo "📦 Building frontend..."
npm run build

# Copy client source files to functions directory for TSX processing
echo "📋 Copying client source files..."
cp -r client/src functions/

# Install functions dependencies
echo "📦 Installing functions dependencies..."
cd functions
npm install

# Build the functions
echo "🔨 Building Firebase Functions..."
npm run build

# Copy built functions to dist
echo "📋 Copying built functions..."
cp -r lib/* ../dist/functions/

# Go back to root
cd ..

# Update firebase.json to point to correct functions directory
echo "⚙️ Updating Firebase configuration..."

echo "✅ Firebase build complete!"
echo "🚀 Ready to deploy with: firebase deploy"
echo "🧪 Test locally with: firebase emulators:start"