# Firebase Deployment Guide for TravelWanders

This guide shows how to deploy your existing TravelWanders application to Firebase Hosting and Functions without changing any functionality.

## Prerequisites

1. **Firebase CLI**: Install if not already installed
   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase Account**: Create a Firebase project at https://console.firebase.google.com/

3. **Firebase Project Setup**: 
   - Create a new project or use existing one
   - Enable Firestore Database
   - Enable Firebase Functions

## Setup Instructions

### 1. Initialize Firebase Project

```bash
# Login to Firebase
firebase login

# Initialize your project (if not already done)
firebase init

# OR update the project ID in .firebaserc
# Replace "your-project-id" with your actual Firebase project ID
```

### 2. Configure Environment Variables

Set up the same environment variables you currently use, but in Firebase:

```bash
# Set Firebase config
firebase functions:config:set \
  firebase.project_id="your-project-id" \
  firebase.client_email="your-service-account@your-project.iam.gserviceaccount.com" \
  firebase.private_key="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----"

# Set other environment variables
firebase functions:config:set \
  session.secret="your-session-secret" \
  gemini.api_key="your-gemini-api-key"
```

### 3. Build for Firebase

```bash
# Build both client and functions
./build-firebase.sh
```

This creates:
- `dist/public/` - Your React app (for Firebase Hosting)
- `dist/functions/` - Your Express server (for Firebase Functions)

### 4. Deploy to Firebase

```bash
# Deploy everything
firebase deploy

# OR deploy separately
firebase deploy --only hosting    # Deploy only frontend
firebase deploy --only functions  # Deploy only backend API
```

## Project Structure

```
├── dist/
│   ├── public/              # Firebase Hosting files
│   │   ├── index.html
│   │   ├── assets/
│   │   └── best-things-to-do-in-*/
│   └── functions/           # Firebase Functions files
│       ├── index.js
│       └── package.json
├── firebase.json            # Firebase configuration
├── .firebaserc             # Project settings
└── build-firebase.sh       # Build script
```

## How It Works

### Firebase Hosting
- Serves your React app from `dist/public/`
- Handles all static files (HTML, CSS, JS, images)
- Routes API calls to Firebase Functions

### Firebase Functions
- Your Express server runs as a single Firebase Function
- Handles all `/api/*` routes
- Maintains session management and authentication
- Connects to Firestore database

### URL Structure
```
https://your-project.web.app/                    # Homepage
https://your-project.web.app/api/auth/login      # API endpoints
https://your-project.web.app/best-things-to-do-in-tokyo/  # City pages
```

## Environment Variables

Your application will use these environment variables in Firebase Functions:

```javascript
// In Firebase Functions, access via:
process.env.FIREBASE_CONFIG  // Auto-provided by Firebase
functions.config().firebase.project_id
functions.config().firebase.client_email
functions.config().firebase.private_key
functions.config().session.secret
functions.config().gemini.api_key
```

## Development vs Production

### Development (Current)
```bash
npm run dev  # Runs on localhost:5000
```

### Production (Firebase)
```bash
firebase serve  # Test locally
firebase deploy # Deploy to production
```

## Database

Your Firestore database will work exactly the same:
- Same collections (users, blogs)
- Same authentication system
- Same admin panel functionality
- Same city/blog management

## Static Files

All your static content is preserved:
- Pre-generated city pages
- Sitemap.xml
- Robots.txt
- SEO optimization
- Image assets

## Testing Locally

```bash
# Build for Firebase
./build-firebase.sh

# Test locally with Firebase emulators
firebase emulators:start

# Access at http://localhost:5000
```

## Monitoring

After deployment, monitor your application:

```bash
# View function logs
firebase functions:log

# View usage
firebase functions:log --only api
```

## Cost Considerations

Firebase offers generous free tiers:
- **Hosting**: 10GB storage, 10GB transfer/month
- **Functions**: 125K invocations, 40K GB-seconds/month
- **Firestore**: 50K reads, 20K writes/day

Your current application should fit well within free limits.

## Troubleshooting

### Build Issues
```bash
# Clean build
rm -rf dist/
./build-firebase.sh
```

### Function Issues
```bash
# Check function logs
firebase functions:log

# Redeploy functions only
firebase deploy --only functions
```

### Environment Variables
```bash
# View current config
firebase functions:config:get

# Update config
firebase functions:config:set key=value
```

## Migration Checklist

- [ ] Create Firebase project
- [ ] Update `.firebaserc` with project ID
- [ ] Set environment variables with `firebase functions:config:set`
- [ ] Run `./build-firebase.sh` 
- [ ] Test with `firebase emulators:start`
- [ ] Deploy with `firebase deploy`
- [ ] Update DNS (if using custom domain)
- [ ] Test all functionality in production

## Notes

1. **No Code Changes**: Your existing code works as-is
2. **Same Functionality**: All features preserved
3. **Better Performance**: Firebase CDN worldwide
4. **Automatic Scaling**: Functions scale automatically
5. **HTTPS**: Built-in SSL certificates
6. **Monitoring**: Firebase console provides analytics

Your TravelWanders app is now ready for Firebase deployment! 🚀