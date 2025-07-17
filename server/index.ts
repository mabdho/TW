import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import compression from "compression";
import expressStaticGzip from "express-static-gzip";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { initializeSitemapIndexing } from "./utils/sitemapIndexing";
import fs from "fs";
import path from "path";


const app = express();

// Security headers for enhanced protection
app.use((req, res, next) => {
  // Remove X-Powered-By header for security
  res.removeHeader('X-Powered-By');
  
  // Content Security Policy
  res.setHeader('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://replit.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https: blob:; " +
    "connect-src 'self' https: wss:; " +
    "frame-ancestors 'none';"
  );
  
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // HSTS header (only in production with HTTPS)
  if (process.env.NODE_ENV === 'production') {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }
  
  // Cache control for static assets
  if (req.path.includes('/assets/') || req.path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (req.path === '/' || req.path.includes('/api/')) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  }
  
  next();
});

// Performance optimization: Enable gzip/brotli compression for all responses
app.use(compression({
  level: 6, // Balanced compression level
  threshold: 1024, // Only compress files larger than 1KB
  filter: (req, res) => {
    // Compress everything except already compressed files
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  }
}));

// Increase payload limit for AI-generated content
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false, limit: '10mb' }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

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

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  

  // Serve static files from public directory with advanced compression
  // This needs to be before Vite middleware to prevent it from intercepting
  // HTML files are handled by middleware above for universal serving
  
// Universal HTML serving with React hydration
// Serves same HTML to all users, then React takes over for interactivity
app.use((req, res, next) => {
  let htmlPath = null;
  
  // Route mapping for HTML serving (same for everyone)
  const routeMap = {
    '/': 'index.html',
    '/destinations': 'destinations.html',
    '/blogs': 'blogs.html',
    '/privacy-policy': 'privacy-policy.html',
    '/terms-of-service': 'terms-of-service.html',
    '/cookie-policy': 'cookie-policy.html'
  };
  
  // Check main routes
  if (routeMap[req.path]) {
    htmlPath = path.join(process.cwd(), 'dist/public', routeMap[req.path]);
  }
  // Check city routes
  else if (req.path.startsWith('/best-things-to-do-in-')) {
    htmlPath = path.join(process.cwd(), 'dist/public', req.path, 'index.html');
  }
  // Check blog routes
  else if (req.path.startsWith('/blog/')) {
    const blogId = req.path.replace('/blog/', '').replace('.html', '');
    htmlPath = path.join(process.cwd(), 'dist/public/blog', blogId + '.html');
  }
  
  // Serve HTML if exists, otherwise continue to React dev server
  if (htmlPath && fs.existsSync(htmlPath)) {
    console.log(`📄 Serving HTML (with React hydration): ${req.path}`);
    return res.sendFile(htmlPath);
  }
  
  // Continue to Vite/React dev server
  next();
});

// Static assets only (no HTML files to prevent conflicting with React)
app.use('/assets', express.static('dist/public/assets', {
  maxAge: '1y',
  immutable: true
}));

// Serve other static files (CSS, JS, images) but not HTML
app.use(express.static('dist/public', {
  index: false, // Critical: Don't serve index.html automatically
  setHeaders: (res, reqPath) => {
    // Only serve non-HTML files to avoid conflicts with React routing
    if (reqPath.endsWith('.html')) {
      res.status(404).end('HTML files handled by middleware');
      return;
    }
    if (reqPath.includes('/assets/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
}));

if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, async () => {
    log(`serving on port ${port}`);
    
    // Initialize sitemap indexing automation
    initializeSitemapIndexing();
    
    // Auto-generate/update sitemap on server startup
    console.log('🗺️  Generating sitemap on server startup...');
    try {
      const { updateSitemap } = await import('./functions/autoSEO');
      await updateSitemap();
      console.log('✅ Sitemap generated successfully');
    } catch (sitemapError) {
      console.warn('⚠️  Sitemap generation warning:', sitemapError);
    }
    
    // Auto-generate missing HTML files using Firebase HTML rendering system
    console.log('🔧 Checking for missing city HTML files...');
    try {
      const { autoGenerateMissingHTML } = await import('./utils/auto-html-generator');
      await autoGenerateMissingHTML();
    } catch (error) {
      console.warn('⚠️  Auto HTML generation warning:', error);
    }
  });
})();
