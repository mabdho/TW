#!/bin/bash

# Firebase Deployment Script for TravelWanders
# This script handles the complete deployment process

set -e  # Exit on any error

echo "🚀 Starting Firebase deployment for TravelWanders..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found. Please install it:"
    echo "   npm install -g firebase-tools"
    exit 1
fi

# Check if user is logged in
if ! firebase projects:list &> /dev/null; then
    echo "❌ Not logged in to Firebase. Please login:"
    echo "   firebase login"
    exit 1
fi

# Check if project is configured
if [ ! -f ".firebaserc" ]; then
    echo "❌ Firebase project not configured. Please run:"
    echo "   firebase use --add"
    exit 1
fi

# Get the project ID from .firebaserc
PROJECT_ID=$(cat .firebaserc | grep -o '"default": "[^"]*' | sed 's/"default": "//')

if [ "$PROJECT_ID" = "your-project-id" ]; then
    echo "❌ Please update .firebaserc with your actual Firebase project ID"
    echo "   Current: $PROJECT_ID"
    echo "   Run: firebase use --add"
    exit 1
fi

echo "📋 Deploying to Firebase project: $PROJECT_ID"

# Step 1: Build the application
echo "📦 Building application for Firebase..."
./build-firebase.sh

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Step 2: Deploy to Firebase
echo "🚀 Deploying to Firebase..."

# Ask user what to deploy
echo "What would you like to deploy?"
echo "1) Everything (hosting + functions)"
echo "2) Hosting only (frontend)"
echo "3) Functions only (backend API)"
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "🌐 Deploying hosting and functions..."
        firebase deploy
        ;;
    2)
        echo "🌐 Deploying hosting only..."
        firebase deploy --only hosting
        ;;
    3)
        echo "⚙️  Deploying functions only..."
        firebase deploy --only functions
        ;;
    *)
        echo "❌ Invalid choice. Deploying everything..."
        firebase deploy
        ;;
esac

if [ $? -eq 0 ]; then
    echo "✅ Deployment completed successfully!"
    echo ""
    echo "🌍 Your application is now live at:"
    echo "   https://$PROJECT_ID.web.app"
    echo "   https://$PROJECT_ID.firebaseapp.com"
    echo ""
    echo "📊 Monitor your deployment:"
    echo "   firebase functions:log  # View function logs"
    echo "   https://console.firebase.google.com/project/$PROJECT_ID"
else
    echo "❌ Deployment failed. Please check the errors above."
    exit 1
fi

# Step 3: Test the deployment
echo "🧪 Testing deployment..."
echo "You can test your deployment by visiting:"
echo "   https://$PROJECT_ID.web.app"
echo "   https://$PROJECT_ID.web.app/api/auth/user"
echo ""
echo "✅ Deployment complete! 🎉"