
// Enhanced bot detection for comprehensive cloaking


import { onRequest } from 'firebase-functions/v2/https';
import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import { registerRoutes } from "./routes.js";
import { serveStatic } from "./vite.js";
import { readFileSync } from 'fs';
import { join } from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Bot detection function
const isSearchEngineBot = (userAgent: string) => {
  // Bot detection middleware placeholder
  return false;
};

// Initialize routes
let server: any = null;

const initializeApp = async () => {
  if (!server) {
    server = await registerRoutes(app);
    
    // Serve static files in Firebase Functions
    serveStatic(app);
    
    // Error handling middleware
    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      console.error(err);
    });
  }
  
  return app;
};

// Export the Express app as a Firebase Function
export const api = onRequest({ 
  region: 'us-central1',
  memory: '1GiB',
  timeoutSeconds: 60,
  maxInstances: 10
}, async (req, res) => {
  const expressApp = await initializeApp();
  expressApp(req, res);
});