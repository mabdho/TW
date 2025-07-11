#!/bin/bash

# Firebase Emulator Script for TravelWanders
# This script runs Firebase emulators for local development and testing

set -e  # Exit on any error

echo "🧪 Starting Firebase emulators for local testing..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Please install it:"
    echo "   npm install -g firebase-tools"
    exit 1
fi

# Build the application for local testing
echo "📦 Building application for local testing..."
./build-firebase.sh

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Start Firebase emulators
echo "🚀 Starting Firebase emulators..."
echo "📍 Your application will be available at:"
echo "   http://localhost:5000  # Hosting emulator"
echo "   http://localhost:5001  # Functions emulator"
echo ""
echo "📊 Firebase UI will be available at:"
echo "   http://localhost:4000  # Emulator UI"
echo ""
echo "💡 Press Ctrl+C to stop emulators"
echo ""

# Start emulators with hosting and functions
firebase emulators:start --only hosting,functions --import=./firebase-export --export-on-exit=./firebase-export

echo "✅ Emulators stopped"