#!/bin/bash

# Firebase Setup Script for TravelWanders
# This script helps you set up Firebase for your project

set -e  # Exit on any error

echo "🔧 Firebase Setup for TravelWanders"
echo "===================================="

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI not found."
    echo "Installing Firebase CLI..."
    npm install -g firebase-tools
fi

# Login to Firebase
echo "🔐 Logging into Firebase..."
firebase login

# Initialize Firebase project
echo "📋 Setting up Firebase project..."
read -p "Enter your Firebase project ID: " project_id

# Update .firebaserc with the project ID
echo "📝 Updating .firebaserc..."
cat > .firebaserc << EOF
{
  "projects": {
    "default": "$project_id"
  }
}
EOF

# Set up Firebase Functions config
echo "⚙️  Setting up Firebase Functions configuration..."
echo "You'll need to configure the following environment variables:"
echo ""

# Firebase config
echo "1. Firebase Admin SDK (for Firestore access):"
read -p "   Service Account Email: " client_email
echo "   Private Key (paste the full key including headers):"
read -p "   Private Key: " private_key

firebase functions:config:set \
  firebase.project_id="$project_id" \
  firebase.client_email="$client_email" \
  firebase.private_key="$private_key"

# Session secret
echo "2. Session configuration:"
read -p "   Session Secret (random string): " session_secret
firebase functions:config:set session.secret="$session_secret"

# Gemini API key
echo "3. Gemini AI API key:"
read -p "   Gemini API Key: " gemini_key
firebase functions:config:set gemini.api_key="$gemini_key"

# Optional: Additional API keys
echo "4. Optional API keys (press Enter to skip):"
read -p "   Unsplash API Key (optional): " unsplash_key
if [ ! -z "$unsplash_key" ]; then
    firebase functions:config:set unsplash.api_key="$unsplash_key"
fi

echo ""
echo "✅ Firebase setup complete!"
echo ""
echo "🚀 Next steps:"
echo "1. Test locally: ./firebase-emulator.sh"
echo "2. Deploy to Firebase: ./deploy-firebase.sh"
echo ""
echo "📋 Your configuration:"
echo "   Project ID: $project_id"
echo "   Service Account: $client_email"
echo "   Functions Region: us-central1"
echo ""
echo "🌍 Your app will be available at:"
echo "   https://$project_id.web.app"
echo "   https://$project_id.firebaseapp.com"