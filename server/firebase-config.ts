import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Check if all required Firebase environment variables are present
if (!process.env.VITE_FIREBASE_PROJECT_ID || !process.env.FIREBASE_PRIVATE_KEY || !process.env.FIREBASE_CLIENT_EMAIL) {
  console.warn('Firebase environment variables not found. Using mock configuration for development.');
}

// Initialize Firebase Admin
let privateKey = process.env.FIREBASE_PRIVATE_KEY;
// Handle different possible formats of the private key
if (privateKey) {
  // Remove any outer quotes
  privateKey = privateKey.trim().replace(/^["']|["']$/g, '');
  
  // Replace escaped newlines with actual newlines
  privateKey = privateKey.replace(/\\n/g, '\n');
  
  // Remove any extra whitespace
  privateKey = privateKey.trim();
  
  // Extract the base64 content between headers
  let keyContent = privateKey
    .replace(/-----BEGIN PRIVATE KEY-----/g, '')
    .replace(/-----END PRIVATE KEY-----/g, '')
    .replace(/-----BEGIN RSA PRIVATE KEY-----/g, '')
    .replace(/-----END RSA PRIVATE KEY-----/g, '')
    .replace(/\s/g, ''); // Remove all whitespace
  
  // Add line breaks every 64 characters for proper PEM format
  const formattedKeyContent = keyContent.match(/.{1,64}/g)?.join('\n') || keyContent;
  
  // Reconstruct the private key with proper formatting
  privateKey = `-----BEGIN PRIVATE KEY-----\n${formattedKeyContent}\n-----END PRIVATE KEY-----`;
}

console.log('Firebase Project ID:', process.env.VITE_FIREBASE_PROJECT_ID);
console.log('Firebase Client Email:', process.env.FIREBASE_CLIENT_EMAIL);
console.log('Private Key starts with:', privateKey?.substring(0, 50) + '...');

let app;
let db;

try {
  app = getApps().length > 0 ? getApp() : initializeApp({
    credential: cert({
      projectId: process.env.VITE_FIREBASE_PROJECT_ID,
      privateKey: privateKey,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
  });
  db = getFirestore(app);
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Failed to initialize Firebase:', error.message);
  // Create a mock db object for development
  db = {
    collection: () => ({
      doc: () => ({
        get: async () => ({ exists: false, data: () => null }),
        set: async () => {},
        update: async () => {},
        delete: async () => {}
      }),
      add: async () => ({ id: 'mock-id' }),
      where: () => ({
        get: async () => ({ docs: [] })
      }),
      get: async () => ({ docs: [] })
    })
  };
}

export { db };