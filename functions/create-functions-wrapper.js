#!/usr/bin/env node

/**
 * Creates a Firebase Functions wrapper for the existing Express app
 * This script generates the necessary wrapper code to run the Express app as a Firebase Function
 */

const fs = require('fs');
const path = require('path');

// Create the Firebase Functions wrapper
const functionsWrapperCode = `
import { onRequest } from 'firebase-functions/v2/https';
import express from 'express';
import session from 'express-session';
import { registerRoutes } from './routes';
import { serveStatic } from './vite';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Session configuration for Firebase Functions
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // Always true in production
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Add request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = \`\${req.method} \${path} \${res.statusCode} in \${duration}ms\`;
      if (capturedJsonResponse) {
        logLine += \` :: \${JSON.stringify(capturedJsonResponse)}\`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

// Initialize routes
registerRoutes(app).then(() => {
  // Serve static files in production
  serveStatic(app);
}).catch(console.error);

// Error handling middleware
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  
  res.status(status).json({ message });
  console.error(err);
});

// Export the Express app as a Firebase Function
export const api = onRequest({ 
  region: 'us-central1',
  memory: '1GiB',
  timeoutSeconds: 60,
  maxInstances: 10
}, app);
`;

// Write the wrapper file
fs.writeFileSync(path.join(__dirname, 'index.js'), functionsWrapperCode.trim());

console.log('✅ Firebase Functions wrapper created successfully');
console.log('📁 Location: functions/index.js');
console.log('🚀 Ready for Firebase deployment');