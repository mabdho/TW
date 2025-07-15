
// Enhanced bot detection for comprehensive cloaking
const isSearchEngineBot = (userAgent) => {
  if (!userAgent) return false;
  
  const botPatterns = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i,
    /whatsapp/i,
    /telegrambot/i,
    /discordbot/i,
    /applebot/i,
    /crawler/i,
    /spider/i,
    /bot/i,
    /archiver/i,
    /scraper/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
};

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
function isSearchEngineBot(userAgent: string): boolean {
  if (!userAgent) return false;
  
  const botPatterns = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i,
    /whatsapp/i,
    /telegram/i,
    /applebot/i,
    /discordbot/i,
    /slackbot/i,
    /crawler/i,
    /spider/i,
    /bot/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
}

// Bot detection middleware for core pages
app.get('/', (req, res, next) => {
  const userAgent = req.get('user-agent') || '';
  
  if (isSearchEngineBot(userAgent)) {
    try {
      const seoHtml = readFileSync(join(process.cwd(), 'dist/public/home-seo.html'), 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.send(seoHtml);
      return;
    } catch (error) {
      console.log('Could not read home-seo.html, continuing to React app');
    }
  }
  
  next();
});

app.get('/destinations', (req, res, next) => {
  const userAgent = req.get('user-agent') || '';
  
  if (isSearchEngineBot(userAgent)) {
    try {
      const seoHtml = readFileSync(join(process.cwd(), 'dist/public/destinations-seo.html'), 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.send(seoHtml);
      return;
    } catch (error) {
      console.log('Could not read destinations-seo.html, continuing to React app');
    }
  }
  
  next();
});

app.get('/blogs', (req, res, next) => {
  const userAgent = req.get('user-agent') || '';
  
  if (isSearchEngineBot(userAgent)) {
    try {
      const seoHtml = readFileSync(join(process.cwd(), 'dist/public/blogs-seo.html'), 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.send(seoHtml);
      return;
    } catch (error) {
      console.log('Could not read blogs-seo.html, continuing to React app');
    }
  }
  
  next();
});

app.get('/best-things-to-do-in-:cityName', (req, res, next) => {
  const userAgent = req.get('user-agent') || '';
  
  if (isSearchEngineBot(userAgent)) {
    try {
      const cityName = req.params.cityName;
      const seoHtml = readFileSync(join(process.cwd(), `dist/public/best-things-to-do-in-${cityName}/index.html`), 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.send(seoHtml);
      return;
    } catch (error) {
      console.log(`Could not read city SEO HTML for ${req.params.cityName}, continuing to React app`);
    }
  }
  
  next();
});

app.get('/blog/:blogId', (req, res, next) => {
  const userAgent = req.get('user-agent') || '';
  
  if (isSearchEngineBot(userAgent)) {
    try {
      const blogId = req.params.blogId;
      const seoHtml = readFileSync(join(process.cwd(), `dist/public/blog/${blogId}.html`), 'utf-8');
      res.setHeader('Content-Type', 'text/html');
      res.send(seoHtml);
      return;
    } catch (error) {
      console.log(`Could not read blog SEO HTML for ${blogId}, continuing to React app`);
    }
  }
  
  next();
});

// Session configuration optimized for Firebase Functions
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // Always true in production Firebase Functions
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
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