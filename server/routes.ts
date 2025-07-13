import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { GoogleGenerativeAI } from '@google/generative-ai';
import { loginSchema } from "@shared/schema";
import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { 
  validateSEOData, 
  getSitemap, 
  generateCitySEO, 
  generateBlogSEO, 
  updateSitemapManually, 
  getSEOAnalyticsData, 
  batchUpdateCitiesSEO, 
  batchUpdateBlogsSEO, 
  getRobotsTxt,
  submitSitemapManually,
  getSitemapIndexingStatusRoute
} from "./routes/seo";
import { 
  generateCompleteHTML, 
  extractCityDataFromTSX as extractCityDataFromTSXHtmlGen,
  generateHomePageHTML,
  generateDestinationsPageHTML,
  generateBlogsPageHTML
} from './html-generator';

// Helper function to regenerate static HTML files
async function regenerateStaticFiles() {
  try {
    console.log('🔄 Regenerating static HTML files...');
    
    // Regenerate home page
    const homePageHTML = generateHomePageHTML();
    await fs.writeFile(path.join(process.cwd(), 'public', 'index.html'), homePageHTML, 'utf-8');
    
    // Regenerate destinations page
    const destinationsHTML = generateDestinationsPageHTML();
    await fs.writeFile(path.join(process.cwd(), 'public', 'destinations.html'), destinationsHTML, 'utf-8');
    
    // Regenerate blogs page
    const blogsHTML = generateBlogsPageHTML();
    await fs.writeFile(path.join(process.cwd(), 'public', 'blogs.html'), blogsHTML, 'utf-8');
    
    console.log('✅ Static HTML files regenerated successfully');
    return true;
  } catch (error) {
    console.error('❌ Error regenerating static HTML files:', error);
    return false;
  }
}

// Firebase Functions HTML Generator Interface
interface CityData {
  cityName: string;
  country: string;
  title: string;
  description: string;
  imageUrl: string;
  galleryImages: Array<{
    url: string;
    alt: string;
    caption: string;
  }>;
  highlights: string[];
  attractions: Array<{
    name: string;
    description: string;
    practicalInfo: {
      howToGetThere: string;
      openingHours: string;
      cost: string;
      website: string;
    };
    discoveryTags: {
      timeRequired: string;
      experienceLevel: string;
      interests: string[];
      costLevel: string;
      seasonalBest: string;
      photoOpportunity: string;
      insiderTip: string;
      hiddenGem: boolean;
      familyFriendly: boolean;
      accessibilityNotes: string;
    };
  }>;
  discoveryData?: {
    localSecrets?: string[];
    photoSpots?: string[];
    quickFacts?: string[];
    seasonalHighlights?: string[];
    budgetBreakdown?: {
      budget: string;
      midRange: string;
      luxury: string;
    };
    diningHighlights?: {
      mustTryDishes: string[];
      bestCafes: string[];
      topRestaurants: string[];
      foodMarkets: string[];
      diningTips: string[];
    };
  };
  logistics?: {
    gettingAround: string;
    whereToStay: string;
    bestTimeToVisit: string;
    suggestedItinerary: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

// CSS styles for the complete HTML page
const pageStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8fafc;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .hero-section {
    position: relative;
    height: 60vh;
    min-height: 400px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
  }

  .hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  .section {
    padding: 4rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 3rem;
    color: #2c3e50;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .highlight-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #3498db;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .highlight-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }

  .attractions-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .attraction-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .attraction-card:hover {
    transform: translateY(-5px);
  }

  .attraction-content {
    padding: 2rem;
  }

  .attraction-name {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  .attraction-description {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .practical-info {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .discovery-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .discovery-tag {
    background: #e3f2fd;
    color: #1976d2;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .discovery-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .discovery-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .discovery-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .discovery-list {
    list-style: none;
  }

  .discovery-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .faq-section {
    background: #f8f9fa;
    padding: 3rem 0;
    margin: 4rem 0;
  }

  .faq-item {
    background: white;
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .faq-question {
    padding: 1.5rem;
    font-weight: 600;
    font-size: 1.1rem;
    color: #2c3e50;
  }

  .faq-answer {
    padding: 0 1.5rem 1.5rem;
    color: #555;
    line-height: 1.7;
  }

  .footer {
    background: #2c3e50;
    color: white;
    padding: 3rem 0;
    text-align: center;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-description {
      font-size: 1rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .highlights-grid {
      grid-template-columns: 1fr;
    }
    
    .discovery-cards {
      grid-template-columns: 1fr;
    }
  }
`;

// Note: HTML generation and TSX extraction now handled by ./html-generator.ts module

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Extend Express Request type to include session
declare module 'express-session' {
  interface SessionData {
    userId?: number;
    isAdmin?: boolean;
  }
}

// Authentication middleware
const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
};

const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.userId || !req.session.isAdmin) {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
};

// Function to clean content data and remove markdown formatting
function cleanContentData(data: any): any {
  if (typeof data === 'string') {
    return data.replace(/\*\*(.*?)\*\*/g, '$1'); // Remove markdown bold formatting
  }
  
  if (Array.isArray(data)) {
    return data.map(cleanContentData);
  }
  
  if (typeof data === 'object' && data !== null) {
    const cleaned: any = {};
    for (const [key, value] of Object.entries(data)) {
      cleaned[key] = cleanContentData(value);
    }
    return cleaned;
  }
  
  return data;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes MUST come first to prevent being caught by wildcard routes
  
  // Explicit middleware to handle API routes before Vite
  app.use('/api/*', (req, res, next) => {
    // Set proper headers for API responses
    res.set('Content-Type', 'application/json');
    next();
  });
  
  // Firebase Functions HTML Generation API endpoints
  app.post('/api/generate-page', async (req, res) => {
    try {
      const { cityKey } = req.body;
      
      if (!cityKey) {
        return res.status(400).json({ error: 'City key is required' });
      }
      
      // Look for TSX file - handle proper case
      const cityKeyCapitalized = cityKey.charAt(0).toUpperCase() + cityKey.slice(1);
      const tsxFilePath = path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityKeyCapitalized}.tsx`);
      
      console.log(`🔍 Looking for TSX file at: ${tsxFilePath}`);
      
      // Check if file exists before processing
      if (!existsSync(tsxFilePath)) {
        return res.status(404).json({ 
          error: 'TSX file not found', 
          filePath: tsxFilePath,
          hint: 'Make sure the city TSX file exists in the correct location'
        });
      }
      
      try {
        const cityData = await extractCityDataFromTSXHtmlGen(tsxFilePath);
        
        if (!cityData) {
          return res.status(404).json({ error: 'Could not extract city data from TSX file' });
        }
        
        // Generate complete HTML using Firebase Functions HTML generator
        const generatedHTML = generateCompleteHTML(cityData);
        
        // Ensure output directory exists
        const outputDir = path.join(process.cwd(), 'dist', 'public', `best-things-to-do-in-${cityData.cityName.toLowerCase()}`);
        await fs.mkdir(outputDir, { recursive: true });
        
        // Write HTML file
        const outputFile = path.join(outputDir, 'index.html');
        await fs.writeFile(outputFile, generatedHTML, 'utf-8');
        
        console.log(`✅ Generated HTML for ${cityData.cityName} (${generatedHTML.length} bytes)`);
        
        res.json({
          success: true,
          message: `Generated HTML for ${cityData.cityName}`,
          outputPath: outputFile,
          fileSize: `${(generatedHTML.length / 1024).toFixed(2)} KB`,
          cityName: cityData.cityName,
          country: cityData.country
        });
        
      } catch (tsxError) {
        console.error('Error processing TSX file:', tsxError);
        return res.status(500).json({ 
          error: 'Failed to process TSX file',
          details: tsxError instanceof Error ? tsxError.message : 'Unknown error'
        });
      }
      
    } catch (error) {
      console.error('Error generating page:', error);
      res.status(500).json({ 
        error: 'Failed to generate page',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  app.post('/api/generate-all-pages', async (req, res) => {
    try {
      const citiesDir = path.join(process.cwd(), 'client', 'src', 'pages', 'cities');
      
      try {
        const cityFiles = await fs.readdir(citiesDir);
        const tsxFiles = cityFiles.filter(file => file.endsWith('.tsx'));
        
        const results = [];
        
        for (const tsxFile of tsxFiles) {
          const cityKey = tsxFile.replace('.tsx', '');
          const tsxFilePath = path.join(citiesDir, tsxFile);
          
          try {
            const cityData = await extractCityDataFromTSXHtmlGen(tsxFilePath);
            
            if (cityData) {
              // Generate complete HTML using Firebase Functions HTML generator
              const generatedHTML = generateCompleteHTML(cityData);
              
              // Ensure output directory exists
              const outputDir = path.join(process.cwd(), 'dist', 'public', `best-things-to-do-in-${cityData.cityName.toLowerCase()}`);
              await fs.mkdir(outputDir, { recursive: true });
              
              // Write HTML file
              const outputFile = path.join(outputDir, 'index.html');
              await fs.writeFile(outputFile, generatedHTML, 'utf-8');
              
              results.push({
                cityKey,
                cityName: cityData.cityName,
                country: cityData.country,
                success: true,
                fileSize: `${(generatedHTML.length / 1024).toFixed(2)} KB`,
                outputPath: outputFile
              });
              
              console.log(`✅ Generated HTML for ${cityData.cityName} (${generatedHTML.length} bytes)`);
            } else {
              results.push({
                cityKey,
                success: false,
                error: 'Could not extract city data'
              });
            }
            
          } catch (cityError) {
            console.error(`Error processing ${cityKey}:`, cityError);
            results.push({
              cityKey,
              success: false,
              error: cityError instanceof Error ? cityError.message : 'Unknown error'
            });
          }
        }
        
        const successCount = results.filter(r => r.success).length;
        const totalCount = results.length;
        
        res.json({
          success: true,
          message: `Generated ${successCount}/${totalCount} city pages`,
          results,
          summary: {
            total: totalCount,
            successful: successCount,
            failed: totalCount - successCount
          }
        });
        
      } catch (dirError) {
        console.error('Error reading cities directory:', dirError);
        return res.status(500).json({ 
          error: 'Could not read cities directory',
          details: dirError instanceof Error ? dirError.message : 'Unknown error'
        });
      }
      
    } catch (error) {
      console.error('Error generating all pages:', error);
      res.status(500).json({ 
        error: 'Failed to generate pages',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  // Add new API routes for generating other page types using Firebase HTML Generator
  app.post('/api/generate-homepage', async (req, res) => {
    try {
      const htmlContent = generateHomePageHTML();
      const outputPath = path.join(process.cwd(), 'dist', 'public', 'index.html');
      
      // Ensure directory exists
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      
      // Write HTML file
      await fs.writeFile(outputPath, htmlContent, 'utf-8');
      
      const fileStat = await fs.stat(outputPath);
      const fileSize = (fileStat.size / 1024).toFixed(2) + ' KB';
      
      res.json({
        success: true,
        message: 'Generated homepage HTML',
        outputPath,
        fileSize
      });
    } catch (error) {
      console.error('Error generating homepage:', error);
      res.status(500).json({
        error: 'Failed to generate homepage',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  app.post('/api/generate-destinations', async (req, res) => {
    try {
      const htmlContent = generateDestinationsPageHTML();
      const outputPath = path.join(process.cwd(), 'dist', 'public', 'destinations', 'index.html');
      
      // Ensure directory exists
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      
      // Write HTML file
      await fs.writeFile(outputPath, htmlContent, 'utf-8');
      
      const fileStat = await fs.stat(outputPath);
      const fileSize = (fileStat.size / 1024).toFixed(2) + ' KB';
      
      res.json({
        success: true,
        message: 'Generated destinations page HTML',
        outputPath,
        fileSize
      });
    } catch (error) {
      console.error('Error generating destinations page:', error);
      res.status(500).json({
        error: 'Failed to generate destinations page',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  app.post('/api/generate-blogs', async (req, res) => {
    try {
      const htmlContent = generateBlogsPageHTML();
      const outputPath = path.join(process.cwd(), 'dist', 'public', 'blogs', 'index.html');
      
      // Ensure directory exists
      await fs.mkdir(path.dirname(outputPath), { recursive: true });
      
      // Write HTML file
      await fs.writeFile(outputPath, htmlContent, 'utf-8');
      
      const fileStat = await fs.stat(outputPath);
      const fileSize = (fileStat.size / 1024).toFixed(2) + ' KB';
      
      res.json({
        success: true,
        message: 'Generated blogs page HTML',
        outputPath,
        fileSize
      });
    } catch (error) {
      console.error('Error generating blogs page:', error);
      res.status(500).json({
        error: 'Failed to generate blogs page',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });
  
  app.post('/api/generate-all-static-pages', async (req, res) => {
    try {
      const results = [];
      
      // Generate homepage
      try {
        const homeHtml = generateHomePageHTML();
        const homePath = path.join(process.cwd(), 'dist', 'public', 'index.html');
        await fs.mkdir(path.dirname(homePath), { recursive: true });
        await fs.writeFile(homePath, homeHtml, 'utf-8');
        const homeSize = (await fs.stat(homePath)).size;
        results.push({
          page: 'Homepage',
          success: true,
          fileSize: (homeSize / 1024).toFixed(2) + ' KB',
          outputPath: homePath
        });
      } catch (error) {
        results.push({
          page: 'Homepage',
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
      
      // Generate destinations page
      try {
        const destHtml = generateDestinationsPageHTML();
        const destPath = path.join(process.cwd(), 'dist', 'public', 'destinations', 'index.html');
        await fs.mkdir(path.dirname(destPath), { recursive: true });
        await fs.writeFile(destPath, destHtml, 'utf-8');
        const destSize = (await fs.stat(destPath)).size;
        results.push({
          page: 'Destinations',
          success: true,
          fileSize: (destSize / 1024).toFixed(2) + ' KB',
          outputPath: destPath
        });
      } catch (error) {
        results.push({
          page: 'Destinations',
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
      
      // Generate blogs page
      try {
        const blogsHtml = generateBlogsPageHTML();
        const blogsPath = path.join(process.cwd(), 'dist', 'public', 'blogs', 'index.html');
        await fs.mkdir(path.dirname(blogsPath), { recursive: true });
        await fs.writeFile(blogsPath, blogsHtml, 'utf-8');
        const blogsSize = (await fs.stat(blogsPath)).size;
        results.push({
          page: 'Blogs',
          success: true,
          fileSize: (blogsSize / 1024).toFixed(2) + ' KB',
          outputPath: blogsPath
        });
      } catch (error) {
        results.push({
          page: 'Blogs',
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
      
      const successCount = results.filter(r => r.success).length;
      const totalCount = results.length;
      
      res.json({
        success: true,
        message: `Generated ${successCount}/${totalCount} static pages`,
        results,
        summary: {
          total: totalCount,
          successful: successCount,
          failed: totalCount - successCount
        }
      });
    } catch (error) {
      console.error('Error generating all static pages:', error);
      res.status(500).json({
        error: 'Failed to generate static pages',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Authentication routes
  app.post('/api/auth/login', async (req, res) => {
    try {
      const { username, password } = loginSchema.parse(req.body);
      
      const user = await storage.getUserByUsername(username);
      if (!user || !user.isAdmin) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      
      const isValidPassword = await storage.verifyPassword(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      
      // Set session
      req.session.userId = user.id;
      req.session.isAdmin = user.isAdmin;
      
      res.json({ 
        message: 'Login successful',
        user: { 
          id: user.id, 
          username: user.username, 
          isAdmin: user.isAdmin 
        }
      });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/auth/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: 'Could not log out' });
      }
      res.json({ message: 'Logout successful' });
    });
  });

  app.get('/api/auth/user', (req, res) => {
    if (req.session.userId) {
      res.json({ 
        id: req.session.userId, 
        isAdmin: req.session.isAdmin 
      });
    } else {
      res.status(401).json({ error: 'Not authenticated' });
    }
  });

  // Serve home page HTML for search engines
  app.get('/', async (req, res, next) => {
    const userAgent = req.get('User-Agent') || '';
    const isBot = /bot|crawler|spider|scraper|facebook|twitter|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|developers\.google\.com/i.test(userAgent);
    
    // If it's a search engine bot, serve the static HTML
    if (isBot) {
      try {
        const htmlContent = generateHomePageHTML();
        res.set('Content-Type', 'text/html');
        res.send(htmlContent);
      } catch (error) {
        console.error('Error generating home page HTML:', error);
        res.status(500).send('Error generating page');
      }
    } else {
      // For regular users, continue to next middleware (Vite in development)
      next();
    }
  });

  // Admin route to generate city pages (now protected)
  app.post('/api/admin/generate-city-page', requireAdmin, async (req, res) => {
    try {
      const { city, country, continent, heroImageUrl, generationMode, manualJson } = req.body;

      if (!city || !country) {
        return res.status(400).json({ error: 'City and country are required' });
      }

      let contentData;

      if (generationMode === 'manual') {
        if (!manualJson) {
          return res.status(400).json({ error: 'Manual JSON data is required when using manual mode' });
        }
        
        try {
          contentData = JSON.parse(manualJson);
          console.log('Using manual JSON data for city generation');
          
          // Clean manual JSON content to remove markdown formatting
          contentData = cleanContentData(contentData);
        } catch (error) {
          return res.status(400).json({ error: 'Invalid JSON format in manual data' });
        }
      } else {

      // Generate content using Gemini with fallback
        let model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
        let modelName = "gemini-2.0-flash-exp";

      const prompt = `You are a professional travel content writer creating an SEO-optimized city guide with interactive discovery features.

Generate content for: ${city}, ${country}${continent ? ` (${continent})` : ''}

Create a comprehensive travel guide with the title: "Best Things to Do in ${city}, ${country} (2025 Guide)"

The primary keyword is: "Best Things to Do in ${city}"
The secondary keyword is: "Things to do in ${city}"

Use both naturally throughout the content. Prioritize placing the primary keyword in the title, description, and within the first 1–2 sentences of content. Use the secondary keyword 4–5 times naturally in different sections.

Use the following semantic variations naturally across the content:
* what to do in ${city}
* top attractions in ${city}
* must-see places in ${city}
* places to visit in ${city}
* explore ${city}
* ${city} travel guide
* fun things to do in ${city}
* ${city} itinerary

This content will power interactive discovery features, including:
* Discovery Cards with insider tips, photo opportunities, experience levels, and CAFES & RESTAURANTS
* Interactive Explorer with filtering by interests, time, cost, and type
* Smart categorization and personalized recommendations

SPECIAL FOCUS FOR CAFES & RESTAURANTS DISCOVERY CARD:
Include 2–4 notable cafes, restaurants, food markets, or dining experiences as attractions.
Use keywords: "restaurant", "cafe", "coffee", "dining", "food", "cuisine", "eatery", "bistro", "market", "culinary", "meal"
Describe the dining atmosphere, signature dishes, and local food culture
Include practical dining info: price range, hours, reservation requirements

WRITING STYLE REQUIREMENTS:
* Vary sentence structure. Use a mix of short and long sentences. Occasionally interrupt the flow with hesitation or side thoughts — just enough to sound human, not robotic.
* Add subtle imperfections. Include mild redundancy, cautious qualifiers like "perhaps", "I think", or "some say", and slight hedging or uncertainty to create a more natural voice.
* Avoid perfect symmetry. Let some points feel a bit unbalanced or incomplete, as if the writer is thinking out loud. Don't try to wrap up every idea too neatly.
* Use light personalization. Add light reactions, imagined experiences, or personal touches — such as "I found the view surprisingly calming" or "it's the kind of place you might linger longer than expected".
* Allow ambiguity or mild contradiction. It's okay to shift tone slightly, or to imply uncertainty in what's 'best' or 'most popular'.
* Don't use slang or strong regionalisms. Keep the language global and accessible, but avoid sounding like a textbook or AI.
* Format intuitively. Use paragraph breaks where they make sense. Avoid rigid templates — write with flow and rhythm.

CONTENT FORMATTING REQUIREMENTS:
* Use H2 (##) and H3 (###) headings to structure content logically throughout all text fields
* Structure attraction descriptions with subheadings like "## Overview", "### Best Photo Spots", "### Insider Tips"
* Format logistics sections with clear headings like "## Getting Around", "### Public Transport", "### Best Areas"
* For website URLs: Remove "https://" and "www." prefixes (use "museumname.com" not "https://www.museumname.com")
* Use markdown formatting for better readability and content structure

---

Generate content with this EXACT structure in valid JSON format:

{
  "metaTitle": "Best Things to Do in ${city}, ${country} (2025 Guide)",
  "metaDescription": "Discover the best things to do in ${city} — top attractions, hidden gems, and food spots. Complete ${city} travel guide. (MUST naturally include 'best things to do in ${city}' AND 'things to do in ${city}', stay under 160 characters)",
  "slug": "things-to-do-in-${city.toLowerCase().replace(/\s+/g, '-')}",
  "description": "A meta-style introduction (150–200 words) that uses the exact phrase 'Best Things to Do in ${city}' and 'Things to do in ${city}' naturally in the first 1–2 sentences. Write in a human, engaging tone with varied sentence structure and subtle imperfections that feel authentic.",
  "highlights": ["5–6 one-line must-see places"],
  "attractions": [
    {
      "name": "Attraction Name",
      "description": "Multi-paragraph detailed description (150–200 words each) with structured formatting using ## and ### headings where appropriate (e.g., '## Overview', '### Best Photo Spots', '### Insider Tips'). IMPORTANT: Include specific insider tips, photo opportunities, hidden gems, seasonal highlights, and local secrets. For dining attractions, describe atmosphere, signature dishes, local specialties, price range, and dining culture. Use phrases like 'tip:', 'recommend', 'best time', 'avoid', 'don't miss', 'be sure to', 'consider', 'worth', 'should', 'hidden', 'secret', 'local favorite', 'view', 'photo', 'picture', 'sunset', 'panoramic', 'stunning', 'restaurant', 'cafe', 'coffee', 'dining', 'food', 'cuisine', 'meal', 'culinary', 'taste', 'flavors'. Vary sentence structure, add subtle imperfections, use natural language with slight redundancy or hesitations that feel human. Break into 2-3 paragraphs with logical subheadings.",
      "practicalInfo": {
        "howToGetThere": "Detailed directions with specific transport options",
        "openingHours": "Operating hours with seasonal variations if applicable",
        "cost": "Entry fees with specific amounts when possible, or 'Free'",
        "website": "Official website URL WITHOUT 'https://' or 'www.' prefix (e.g., 'museumname.com' not 'https://www.museumname.com'), or null if unknown"
      },
      "discoveryTags": {
        "timeRequired": "30–60 minutes, 1–2 hours, Half day, or Full day",
        "experienceLevel": "Easy Access, Moderate Adventure, or Local Expert",
        "interests": ["history", "art", "architecture", "nature", "food", "adventure", "relaxation", "photography"],
        "costLevel": "Free, Budget-friendly, Moderate, or Expensive",
        "seasonalBest": "Spring, Summer, Fall, Winter, or Year-round",
        "photoOpportunity": "Describe the best photo spots and timing",
        "insiderTip": "ACTIONABLE insider tip with specific details - include exact timing, location, or method that locals use",
        "hiddenGem": true/false,
        "familyFriendly": true/false,
        "accessibilityNotes": "Any accessibility information"
      }
    }
  ],
  "logistics": {
    "gettingAround": "## Getting Around ${city}\n\nTransportation options in the city (2–3 paragraphs) with structured headings like '### Public Transport', '### Taxis & Rideshare', '### Walking & Cycling'",
    "whereToStay": "## Where to Stay in ${city}\n\nAccommodation recommendations by area (2–3 paragraphs) with headings like '### Best Areas', '### Luxury Options', '### Budget-Friendly'",
    "bestTimeToVisit": "## Best Time to Visit ${city}\n\nSeasonal information and weather (2–3 paragraphs) with headings like '### Peak Season', '### Weather Overview', '### Local Events'",
    "suggestedItinerary": "## Suggested ${city} Itinerary\n\nDay-by-day itinerary suggestions (3–4 paragraphs) with headings like '### Day 1', '### Day 2', '### Day 3'"
  },
  "faqs": [
    {
      "question": "What are the best things to do in ${city}?",
      "answer": "Comprehensive answer mentioning top attractions"
    },
    {
      "question": "How many days do you need in ${city}?",
      "answer": "Suggested duration with reasoning"
    },
    {
      "question": "What is ${city} famous for?",
      "answer": "Cultural significance and famous attractions"
    },
    {
      "question": "When is the best time to visit ${city}?",
      "answer": "Seasonal recommendations"
    }
  ],
  "discoveryData": {
    "cityPersonality": "Describe the city's character in 2–3 adjectives",
    "budgetBreakdown": {
      "freeActivities": "List 3–4 free things to do",
      "budgetFriendly": "List 3–4 budget activities with approximate costs",
      "splurgeWorthy": "List 2–3 premium experiences worth the cost"
    },
    "localSecrets": [
      "Best time to visit popular attractions to avoid crowds - provide EXACT times and days when crowds are lightest, with specific entrance strategies",
      "How to use public transport like a local - specify which metro/transport cards to buy, essential apps to download, and local transit etiquette tips",
      "Realistic budget estimate for 3 days - break down daily costs for meals, transport, attractions, and miscellaneous expenses with specific amounts in local currency",
      "Best markets or local shops for authentic goods - name specific markets, shops, or districts where locals shop, what to buy, and how to negotiate prices",
      "Tourist traps to avoid - identify specific overpriced restaurants, shops, or attractions that target tourists and suggest better local alternatives",
      "Local festivals or seasonal events - mention specific dates, holidays, or events that could affect travel plans, both positively (festivals to attend) and negatively (closures or crowds)"
    ],
    "diningHighlights": {
      "mustTryDishes": "3–4 signature local dishes or drinks to try",
      "bestCafes": "2–3 notable cafes with atmosphere descriptions",
      "topRestaurants": "2–3 recommended restaurants with cuisine types",
      "foodMarkets": "Local markets or street food areas",
      "diningTips": "Local dining etiquette, tipping, or reservation tips"
    },
    "seasonalHighlights": {
      "spring": "What's special about visiting in spring",
      "summer": "What's special about visiting in summer",
      "fall": "What's special about visiting in fall",
      "winter": "What's special about visiting in winter"
    },
    "quickFacts": {
      "totalAttractions": "Number of attractions generated",
      "freeActivities": "Number of free activities",
      "averageTimePerAttraction": "30–60 minutes",
      "walkingFriendly": true/false,
      "publicTransportQuality": "Excellent, Good, Fair, or Limited"
    }
  },
  "schemaSuggestions": ["FAQPage", "Article", "TouristAttraction", "BreadcrumbList", "LocalBusiness"]
}

Generate 8-12 detailed attractions. MANDATORY: Include 2-3 dining-related attractions (restaurants, cafes, food markets, street food, local cuisine spots). Write in a natural, human tone with:
- Varied sentence structure (mix of long and short sentences)
- Subtle imperfections and hesitations ("perhaps", "I think", mild contradictions)
- Personal touches and reactions
- Natural paragraph breaks with H2/H3 headings for structure
- Use headings like "## Overview", "### Best Photo Spots", "### Insider Tips", "### What to Expect"
- Avoid overly rigid or textbook-like structure
- Skip slang but maintain conversational flow
- For dining attractions: describe ambiance, signature dishes, pricing, local food culture
- KEEP DESCRIPTIONS CONCISE (150-200 words max per attraction to prevent JSON truncation)
- MANDATORY: Structure all content with appropriate ## and ### headings for readability

CRITICAL: All insider tips must be ACTIONABLE and CONTEXTUAL. Instead of generic tips like "visit early", provide specific details like "visit at 7:30 AM when locals arrive for morning coffee" or "enter through the side door on Via XX to avoid tourist crowds" or "ask for the unmarked 'local menu' available only in Italian". Every tip should include WHO, WHAT, WHERE, WHEN, and WHY.

ENHANCED LOCAL SECRETS REQUIREMENTS: Each of the 6 localSecrets must be highly specific:
1. Crowd avoidance: Exact times (e.g., "Tuesdays at 8:30 AM"), specific entrances, off-peak days
2. Transport tips: Exact card names (e.g., "MetroCard vs. OMNY"), specific app names (e.g., "Citymapper"), platform numbers, local etiquette rules
3. Budget breakdown: Actual currency amounts (e.g., "€45-60 per day"), meal costs by type, transportation daily costs, attraction pricing
4. Shopping locations: Specific market names, districts, street names, bargaining strategies, what items to buy
5. Tourist traps: Name specific restaurants/shops to avoid, exact reasons why, and precise alternatives with addresses
6. Events/festivals: Exact dates if known, months for seasonal events, how they impact transportation/closures, cultural significance

For each attraction, include comprehensive discoveryTags:
- timeRequired: Be specific (e.g., "30-60 minutes", "1-2 hours", "Half day", "Full day")
- experienceLevel: "Easy Access", "Moderate Adventure", or "Local Expert"
- interests: Select 2-4 relevant tags from the list
- costLevel: "Free", "Budget-friendly", "Moderate", or "Expensive"
- seasonalBest: Best season to visit or "Year-round"
- photoOpportunity: Specific photo tips and best spots
- insiderTip: Unique local knowledge or pro tip
- hiddenGem: true if it's lesser-known, false if popular
- familyFriendly: true/false based on suitability for families
- accessibilityNotes: Brief accessibility information

Fill out the complete discoveryData section with:
- cityPersonality: 2-3 descriptive words
- budgetBreakdown: Specific lists of activities by price range
- localSecrets: 6 SPECIFIC insider tips following the exact categories above - provide precise times, costs, app names, specific locations, and actionable advice that locals would actually use
- diningHighlights: Complete section with local dishes, best cafes, top restaurants, food markets, and dining tips
- seasonalHighlights: What makes each season special
- quickFacts: Accurate statistics about the attractions

The schemaSuggestions field should contain relevant schema.org types for structured data markup. Common options include:
- "FAQPage" (for the FAQ section)
- "Article" (for the travel guide content)
- "TouristAttraction" (for individual attractions)
- "BreadcrumbList" (for navigation)
- "LocalBusiness" (for restaurants/cafes mentioned)
- "Place" (for geographic location)
- "TravelAction" (for travel-related activities)

✅ JSON RULES (STRICT)
Ensure the Gemini model follows these rules:

✅ Must start with { and end with }

❌ No markdown formatting (\`\`\`json or backticks)

❌ No extra text outside JSON

✅ Escape all quotes properly (He said \\"Hello\\")

❌ No trailing commas or line breaks in strings

✅ Every key and string must be wrapped in double quotes

✅ Each attraction's description must be under 200 words

✅ Must be parseable with JSON.parse()

CRITICAL: Your response MUST be ONLY a JSON object. Do NOT include:
- Any text before the opening {
- Any text after the closing }
- Markdown code blocks like \`\`\`json or \`\`\`
- Comments or explanations
- Extra formatting
- Markdown bold formatting (** or __) anywhere in the content

Your response must start immediately with { and end with }. Nothing else.
All text content must be clean, readable text without any markdown formatting.

VERIFY your JSON is complete before responding. The response MUST be parseable by JSON.parse().`;

      let result;
      try {
        result = await model.generateContent(prompt);
      } catch (error: any) {
        console.log('Primary model error:', error.status, error.message);
        if (error.status === 503 || error.message.includes('overloaded') || error.message.includes('Service Unavailable')) {
          console.log('Primary model overloaded, trying fallback model...');
          try {
            model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            modelName = "gemini-1.5-flash";
            result = await model.generateContent(prompt);
          } catch (fallbackError: any) {
            console.log('Fallback model also failed, trying gemini-1.5-pro...');
            model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
            modelName = "gemini-1.5-pro";
            result = await model.generateContent(prompt);
          }
        } else {
          throw error;
        }
      }
      const response = await result.response;
      const generatedText = response.text();

      console.log(`Used model: ${modelName}`);
      console.log('AI Response Length:', generatedText.length);
      console.log('AI Response Preview:', generatedText.substring(0, 500));

      // Enhanced JSON cleaning and parsing with multiple fallback strategies
      console.log('Raw Gemini response length:', generatedText.length);
      console.log('Raw Gemini response preview:', generatedText.substring(0, 300));
      
      let cleaned = generatedText
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F]/g, '') // Remove control chars but keep \n and \r
        .replace(/"/g, '"') // Replace smart quotes with regular quotes
        .replace(/"/g, '"') // Replace smart quotes with regular quotes
        .replace(/'/g, "'") // Replace smart quotes with regular quotes  
        .replace(/'/g, "'") // Replace smart quotes with regular quotes
        .replace(/…/g, '...') // Replace ellipsis character
        .replace(/\*\*(.*?)\*\*/g, '$1') // Remove markdown bold formatting
        .replace(/\n/g, ' ') // Replace newlines with spaces to prevent JSON parsing issues
        .replace(/\r/g, ' ') // Replace carriage returns with spaces
        .replace(/\t/g, ' ') // Replace tabs with spaces
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .trim();

      // Try multiple strategies to extract valid JSON
      let jsonCandidates = [];
      
      // Strategy 1: Find first { to last }
      const jsonStart = cleaned.indexOf('{');
      const jsonEnd = cleaned.lastIndexOf('}');
      if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
        jsonCandidates.push(cleaned.substring(jsonStart, jsonEnd + 1));
      }
      
      // Strategy 2: Look for JSON object with proper bracket matching
      let braceCount = 0;
      let jsonStartIndex = -1;
      let jsonEndIndex = -1;
      
      for (let i = 0; i < cleaned.length; i++) {
        if (cleaned[i] === '{') {
          if (braceCount === 0) {
            jsonStartIndex = i;
          }
          braceCount++;
        } else if (cleaned[i] === '}') {
          braceCount--;
          if (braceCount === 0 && jsonStartIndex !== -1) {
            jsonEndIndex = i;
            break;
          }
        }
      }
      
      if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
        jsonCandidates.push(cleaned.substring(jsonStartIndex, jsonEndIndex + 1));
      }
      
      // Strategy 3: Try to clean common JSON syntax errors
      let fixedJson = cleaned;
      if (jsonStart !== -1 && jsonEnd !== -1) {
        fixedJson = cleaned.substring(jsonStart, jsonEnd + 1);
        // Fix common issues
        fixedJson = fixedJson
          .replace(/,\s*}/g, '}') // Remove trailing commas before closing braces
          .replace(/,\s*]/g, ']') // Remove trailing commas before closing brackets
          .replace(/}\s*{/g, '},{') // Fix missing commas between objects
          .replace(/]\s*\[/g, '],[') // Fix missing commas between arrays
          .replace(/"\s*\n\s*"/g, '" "') // Fix quotes split across lines
          .replace(/([^"\\])\n/g, '$1 '); // Replace remaining newlines not inside strings
        
        jsonCandidates.push(fixedJson);
      }
      
      // Remove duplicates
      jsonCandidates = [...new Set(jsonCandidates)];
      
      console.log(`Found ${jsonCandidates.length} JSON candidates to try`);
      
      // Try parsing each candidate
      let parseError;
      for (let i = 0; i < jsonCandidates.length; i++) {
        try {
          const candidate = jsonCandidates[i];
          console.log(`Trying JSON candidate ${i + 1}:`, candidate.substring(0, 200));
          contentData = JSON.parse(candidate);
          console.log('Successfully parsed JSON with candidate', i + 1);
          // Clean all content data to remove markdown formatting
          contentData = cleanContentData(contentData);
          break;
        } catch (error) {
          console.log(`Candidate ${i + 1} failed:`, error.message);
          parseError = error;
        }
      }
      
      // If all candidates failed, return detailed error
      if (!contentData) {
        console.error('All JSON parsing attempts failed');
        console.error('Original response:', generatedText);
        console.error('Cleaned response:', cleaned);
        console.error('Last parse error:', parseError?.message);
        
        return res.status(500).json({ 
          error: 'Gemini returned malformed JSON after multiple parsing attempts', 
          details: parseError?.message || 'Unknown parsing error',
          responsePreview: cleaned.substring(0, 800),
          fullResponse: generatedText.length > 2000 ? generatedText.substring(0, 2000) + '...' : generatedText,
          candidatesCount: jsonCandidates.length
        });
      }
      } // Close the else block for AI generation

      // Generate the React component file
      const cityFileName = city.replace(/\s+/g, '');
      const componentCode = generateReactComponent(
        cityFileName,
        contentData,
        heroImageUrl || '', // Use provided hero image URL
        [], // galleryImages - empty for simplified form
        country
      );

      // Write the file to the filesystem
      const filePath = path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityFileName}.tsx`);
      await fs.writeFile(filePath, componentCode, 'utf8');

      console.log(`Generated city page: ${cityFileName}.tsx`);

      // Update DynamicCityRoute.tsx with new city mapping
      const dynamicRoutePath = path.join(process.cwd(), 'client', 'src', 'components', 'DynamicCityRoute.tsx');
      const dynamicContent = await fs.readFile(dynamicRoutePath, 'utf-8');
      
      const routePath = city.toLowerCase().replace(/\s+/g, '-');
      const cityMapping = `  '${routePath}': createCityImport('${cityFileName}', '../pages/cities/${cityFileName}'),`;
      
      if (!dynamicContent.includes(`'${routePath}':`)) {
        // Find the cityMap object and add the new mapping
        const cityMapStart = dynamicContent.indexOf('const cityMap = {');
        const cityMapEnd = dynamicContent.indexOf('};', cityMapStart);
        
        const beforeCityMap = dynamicContent.slice(0, cityMapEnd);
        const afterCityMap = dynamicContent.slice(cityMapEnd);
        
        const updatedDynamicContent = beforeCityMap + '\n' + cityMapping + '\n' + afterCityMap;
        
        await fs.writeFile(dynamicRoutePath, updatedDynamicContent);
        console.log(`Updated DynamicCityRoute.tsx with ${cityFileName} dynamic import`);
      }
      
      // Auto-integrate into CityDirectory.tsx
      const cityDirectoryPath = path.join(process.cwd(), 'client', 'src', 'components', 'CityDirectory.tsx');
      const cityDirectoryContent = await fs.readFile(cityDirectoryPath, 'utf-8');
      
      // Create city entry with correct SEO-friendly URL format and imageUrl
      const cityEntry = `  { "name": "${city}", "country": "${country}", "path": "/best-things-to-do-in-${city.toLowerCase().replace(/\s+/g, '-')}", "continent": "${continent}"${heroImageUrl ? `, "imageUrl": "${heroImageUrl}"` : ''} }`;
      
      // Check if city already exists
      if (!cityDirectoryContent.includes(`"name": "${city}"`)) {
        // Find the end of the cities array and add the new city
        const citiesEndIndex = cityDirectoryContent.indexOf('];');
        const beforeCitiesEnd = cityDirectoryContent.lastIndexOf('\n', citiesEndIndex);
        let updatedCityContent = cityDirectoryContent.slice(0, beforeCitiesEnd) + ',\n' + cityEntry + cityDirectoryContent.slice(beforeCitiesEnd);
        
        // Update the city count in the badge
        const currentCount = (cityDirectoryContent.match(/\{ "name":/g) || []).length;
        const newCount = currentCount + 1;
        updatedCityContent = updatedCityContent.replace(/\d+\+ City Guides/, `${newCount}+ City Guides`);
        
        await fs.writeFile(cityDirectoryPath, updatedCityContent);
        console.log(`Updated CityDirectory.tsx with ${city} entry (${newCount} cities total)`);
        
        // Auto-integrate into Destinations page
        const destinationsPath = path.join(process.cwd(), 'client', 'src', 'pages', 'destinations.tsx');
        const destinationsContent = await fs.readFile(destinationsPath, 'utf-8');
        
        // Check if city already exists in destinations
        if (!destinationsContent.includes(`"name": "${city}"`)) {
          // Find the end of the cities array and add the new city
          const destinationsCitiesEndIndex = destinationsContent.indexOf('];');
          const beforeDestinationsCitiesEnd = destinationsContent.lastIndexOf('\n', destinationsCitiesEndIndex);
          const updatedDestinationsContent = destinationsContent.slice(0, beforeDestinationsCitiesEnd) + ',\n' + cityEntry + destinationsContent.slice(beforeDestinationsCitiesEnd);
          
          await fs.writeFile(destinationsPath, updatedDestinationsContent);
          console.log(`Updated destinations.tsx with ${city} entry`);
        }
        
        // Update Hero component city count
        const heroPath = path.join(process.cwd(), 'client', 'src', 'components', 'Hero.tsx');
        const heroContent = await fs.readFile(heroPath, 'utf-8');
        const updatedHeroContent = heroContent.replace(/\d+\+<\/div>\s*<div[^>]*>Cities<\/div>/, `${newCount}+</div>\n              <div className="text-sm sm:text-base text-white/80">Cities</div>`);
        
        await fs.writeFile(heroPath, updatedHeroContent);
        console.log(`Updated Hero.tsx with new city count: ${newCount}`);
        
        // Update TravelCategories component city count
        const travelCategoriesPath = path.join(process.cwd(), 'client', 'src', 'components', 'TravelCategories.tsx');
        const travelCategoriesContent = await fs.readFile(travelCategoriesPath, 'utf-8');
        const updatedTravelCategoriesContent = travelCategoriesContent.replace(/\d+\+ destinations/g, `${newCount}+ destinations`);
        
        await fs.writeFile(travelCategoriesPath, updatedTravelCategoriesContent);
        console.log(`Updated TravelCategories.tsx with new city count: ${newCount}`);
        
        // Update FeaturedCities component with the new city
        const featuredCitiesPath = path.join(process.cwd(), 'client', 'src', 'components', 'FeaturedCities.tsx');
        const featuredCitiesContent = await fs.readFile(featuredCitiesPath, 'utf-8');
        
        // Get current featured cities array
        const featuredCitiesMatch = featuredCitiesContent.match(/const featuredCities = \[([\s\S]*?)\];/);
        if (featuredCitiesMatch) {
          const currentFeaturedCities = featuredCitiesMatch[1];
          const newCityEntry = `  { "name": "${city}", "country": "${country}", "path": "/best-things-to-do-in-${city.toLowerCase().replace(/\s+/g, '-')}", "continent": "${continent}", "imageUrl": "${heroImageUrl || ''}" }`;
          
          // Add new city to the beginning and keep only 8 cities
          const lines = currentFeaturedCities.split('\n').filter(line => line.trim().startsWith('{ "name"'));
          lines.unshift(newCityEntry);
          const updatedFeaturedCities = lines.slice(0, 8).join(',\n');
          
          const updatedFeaturedCitiesContent = featuredCitiesContent.replace(
            /const featuredCities = \[([\s\S]*?)\];/,
            `const featuredCities = [\n${updatedFeaturedCities}\n];`
          );
          
          await fs.writeFile(featuredCitiesPath, updatedFeaturedCitiesContent);
          console.log(`Updated FeaturedCities.tsx with ${city} at the top (image: ${heroImageUrl ? 'yes' : 'no'})`);
        }
      }

      // Auto-generate Firebase Functions HTML for the new city
      let htmlGenerated = false;
      let htmlMessage = '';
      
      try {
        // First try the Firebase Functions HTML generator
        const { generateCompleteHTML, extractCityDataFromTSX } = await import('./html-generator');
        const tsxFilePath = path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityFileName}.tsx`);
        
        // Extract city data from the newly created TSX file
        const cityData = await extractCityDataFromTSX(tsxFilePath);
        
        if (cityData) {
          // Generate complete HTML using Firebase Functions system
          const completeHTML = generateCompleteHTML(cityData);
          
          // Save the HTML file to public directory
          const htmlFileName = `best-things-to-do-in-${city.toLowerCase().replace(/\s+/g, '-')}.html`;
          const htmlFilePath = path.join(process.cwd(), 'public', htmlFileName);
          
          await fs.writeFile(htmlFilePath, completeHTML);
          htmlGenerated = true;
          htmlMessage = ` with complete HTML generated at /${htmlFileName}`;
          
          console.log(`Generated complete HTML for ${city} using Firebase Functions system`);
        } else {
          console.warn('Could not extract city data from TSX file for HTML generation');
        }
      } catch (htmlError) {
        console.warn('Firebase Functions HTML generation failed, trying fallback static generation:', htmlError.message);
        
        // Fallback to old static generation system
        try {
          const { generateSingleCityStatic } = await import('../scripts/generate-single-city-static.js');
          const staticGenerated = await generateSingleCityStatic(routePath, city);
          
          if (staticGenerated) {
            htmlGenerated = true;
            htmlMessage = ' with static HTML generated';
          }
        } catch (staticError) {
          console.warn('Both HTML generation methods failed:', staticError.message);
        }
      }
      
      // Automatically regenerate static HTML files to reflect the new city
      console.log('🔄 Regenerating static HTML files after new city creation...');
      const regenerationSuccess = await regenerateStaticFiles();
      
      res.json({
        success: true,
        cityName: cityFileName,
        generatedCode: componentCode,
        filePath: `client/src/pages/cities/${cityFileName}.tsx`,
        htmlGenerated,
        staticFilesRegenerated: regenerationSuccess,
        message: `City page for ${city} created successfully${htmlMessage} and integrated into navigation${regenerationSuccess ? ' with static files updated' : ''}`
      });

    } catch (error) {
      console.error('Error generating city page:', error);
      res.status(500).json({ 
        error: 'Failed to generate city page',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Firebase Functions HTML generation route (protected)
  app.post('/api/admin/generate-html', requireAdmin, async (req, res) => {
    try {
      const { cityName } = req.body;
      
      if (!cityName) {
        return res.status(400).json({ error: 'City name is required' });
      }
      
      console.log(`Generating HTML for city: ${cityName}`);
      
      // Try to find the TSX file for this city
      const possibleFiles = [
        `${cityName}.tsx`,
        `${cityName.toLowerCase()}.tsx`,
        `${cityName.toLowerCase().replace(/\s+/g, '-')}.tsx`,
        `${cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase()}.tsx`
      ];
      
      let tsxFilePath = null;
      const citiesDir = path.join(process.cwd(), 'client', 'src', 'pages', 'cities');
      
      for (const fileName of possibleFiles) {
        const filePath = path.join(citiesDir, fileName);
        if (await fs.access(filePath).then(() => true).catch(() => false)) {
          tsxFilePath = filePath;
          break;
        }
      }
      
      if (!tsxFilePath) {
        return res.status(404).json({ error: `TSX file not found for city: ${cityName}` });
      }
      
      // Generate HTML using Firebase Functions system
      const { generateCompleteHTML, extractCityDataFromTSX } = await import('./html-generator');
      const cityData = await extractCityDataFromTSX(tsxFilePath);
      
      if (!cityData) {
        return res.status(500).json({ error: 'Failed to extract city data from TSX file' });
      }
      
      const completeHTML = generateCompleteHTML(cityData);
      
      // Save the HTML file to public directory
      const htmlFileName = `best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}.html`;
      const htmlFilePath = path.join(process.cwd(), 'public', htmlFileName);
      
      await fs.writeFile(htmlFilePath, completeHTML);
      
      res.json({
        success: true,
        cityName,
        fileName: htmlFileName,
        filePath: htmlFilePath,
        fileSize: `${(completeHTML.length / 1024).toFixed(2)} KB`,
        url: `/${htmlFileName}`,
        message: `Complete HTML generated for ${cityName}`
      });
      
    } catch (error) {
      console.error('Error generating HTML:', error);
      res.status(500).json({ 
        error: 'Failed to generate HTML',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Generate HTML for all cities route (protected)
  app.post('/api/admin/generate-all-html', requireAdmin, async (req, res) => {
    try {
      const citiesDir = path.join(process.cwd(), 'client', 'src', 'pages', 'cities');
      
      // Get all TSX files in the cities directory
      const files = await fs.readdir(citiesDir);
      const tsxFiles = files.filter(file => file.endsWith('.tsx'));
      
      if (tsxFiles.length === 0) {
        return res.status(404).json({ error: 'No city TSX files found' });
      }
      
      console.log(`Found ${tsxFiles.length} city files to generate HTML for`);
      
      const { generateCompleteHTML, extractCityDataFromTSX } = await import('./html-generator');
      const results = [];
      
      for (const file of tsxFiles) {
        try {
          const tsxFilePath = path.join(citiesDir, file);
          const cityData = await extractCityDataFromTSX(tsxFilePath);
          
          if (cityData) {
            const completeHTML = generateCompleteHTML(cityData);
            
            // Generate HTML filename from city name
            const cityName = cityData.cityName.toLowerCase().replace(/\s+/g, '-');
            const htmlFileName = `best-things-to-do-in-${cityName}.html`;
            const htmlFilePath = path.join(process.cwd(), 'public', htmlFileName);
            
            await fs.writeFile(htmlFilePath, completeHTML);
            
            results.push({
              success: true,
              cityName: cityData.cityName,
              fileName: htmlFileName,
              fileSize: `${(completeHTML.length / 1024).toFixed(2)} KB`,
              url: `/${htmlFileName}`
            });
            
            console.log(`Generated HTML for ${cityData.cityName} (${(completeHTML.length / 1024).toFixed(2)} KB)`);
          } else {
            results.push({
              success: false,
              fileName: file,
              error: 'Failed to extract city data'
            });
          }
        } catch (error) {
          results.push({
            success: false,
            fileName: file,
            error: error instanceof Error ? error.message : 'Unknown error'
          });
        }
      }
      
      const successful = results.filter(r => r.success).length;
      const failed = results.filter(r => !r.success).length;
      
      res.json({
        success: true,
        totalFiles: tsxFiles.length,
        successful,
        failed,
        results,
        message: `Generated HTML for ${successful} cities (${failed} failed)`
      });
      
    } catch (error) {
      console.error('Error generating all HTML:', error);
      res.status(500).json({ 
        error: 'Failed to generate HTML for all cities',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Blog generation route (protected)
  app.post('/api/admin/generate-blog', requireAdmin, async (req, res) => {
    try {
      const { title, category, imageUrl, author, generationMode, manualContent } = req.body;

      if (!title || !category) {
        return res.status(400).json({ error: 'Title and category are required' });
      }

      let content, excerpt;

      if (generationMode === 'manual') {
        if (!manualContent || !manualContent.content || !manualContent.excerpt) {
          return res.status(400).json({ error: 'Manual content and excerpt are required' });
        }
        content = manualContent.content;
        excerpt = manualContent.excerpt;
      } else {
        // Generate content using Gemini AI
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
        
        const prompt = `Write a comprehensive travel blog post with the title: "${title}"
        
        Category: ${category}
        
        Generate content in this JSON format:
        {
          "excerpt": "A compelling 2-3 sentence excerpt (150-200 characters) that summarizes the post and entices readers",
          "content": "A full blog post (800-1500 words) written in engaging, informative style. Use markdown formatting for headers, lists, and emphasis. Include practical tips, personal insights, and actionable advice for travelers."
        }
        
        Write in a conversational, engaging tone that inspires travel while providing practical value.`;

        const result = await model.generateContent(prompt);
        const generatedText = result.response.text();
        
        // Clean and parse JSON
        const cleaned = generatedText
          .replace(/```json\s*/g, '')
          .replace(/```\s*/g, '')
          .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
          .trim();

        try {
          const parsedContent = JSON.parse(cleaned);
          content = parsedContent.content;
          excerpt = parsedContent.excerpt;
        } catch (parseError) {
          return res.status(500).json({ 
            error: 'Failed to parse AI-generated content', 
            details: parseError.message 
          });
        }
      }

      // Generate blog file
      const blogId = title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
      const readTime = Math.ceil(content.split(' ').length / 200) + ' min read';
      
      const blogData = {
        id: blogId,
        title,
        excerpt,
        content,
        category,
        imageUrl: imageUrl || '',
        featured: false,
        readTime,
        date: new Date().toISOString().split('T')[0],
        author: author || 'TravelWanders Team'
      };

      // Create blog component file
      const blogFileName = `${blogId}.tsx`;
      const blogComponentCode = generateBlogComponent(blogData);
      
      // Write blog file
      const blogDirPath = path.join(process.cwd(), 'client', 'src', 'blogs');
      await fs.mkdir(blogDirPath, { recursive: true });
      const blogFilePath = path.join(blogDirPath, blogFileName);
      await fs.writeFile(blogFilePath, blogComponentCode, 'utf8');

      // Update blogs index file
      const indexPath = path.join(blogDirPath, 'index.ts');
      const indexContent = await fs.readFile(indexPath, 'utf-8');
      
      // Add import
      const importStatement = `import { ${blogId.replace(/-/g, '')}Blog } from './${blogId}';`;
      const blogEntry = `  ${blogId.replace(/-/g, '')}Blog,`;
      
      // Update the file
      let updatedContent = indexContent;
      if (!updatedContent.includes(importStatement)) {
        // Add import after existing imports
        const lastImportIndex = updatedContent.lastIndexOf("import");
        if (lastImportIndex === -1) {
          updatedContent = `${importStatement}\n${updatedContent}`;
        } else {
          const afterLastImport = updatedContent.indexOf('\n', lastImportIndex) + 1;
          updatedContent = updatedContent.slice(0, afterLastImport) + importStatement + '\n' + updatedContent.slice(afterLastImport);
        }
        
        // Add to allBlogs array
        const arrayStart = updatedContent.indexOf('export const allBlogs: Blog[] = [');
        const arrayEnd = updatedContent.indexOf('];', arrayStart);
        updatedContent = updatedContent.slice(0, arrayEnd) + blogEntry + '\n' + updatedContent.slice(arrayEnd);
        
        await fs.writeFile(indexPath, updatedContent);
      }

      // Auto-update sitemap after blog creation
      try {
        const { updateSitemap } = await import('./functions/autoSEO');
        await updateSitemap();
        console.log('Sitemap updated after blog creation');
      } catch (sitemapError) {
        console.warn('Failed to update sitemap after blog creation:', sitemapError);
      }

      // Automatically regenerate static HTML files to reflect the new blog
      console.log('🔄 Regenerating static HTML files after new blog creation...');
      const regenerationSuccess = await regenerateStaticFiles();

      res.json({
        success: true,
        blogId,
        fileName: blogFileName,
        filePath: `client/src/blogs/${blogFileName}`,
        staticFilesRegenerated: regenerationSuccess,
        message: `Blog "${title}" created successfully and sitemap updated${regenerationSuccess ? ' with static files updated' : ''}`
      });

    } catch (error) {
      console.error('Error generating blog:', error);
      res.status(500).json({ 
        error: 'Failed to generate blog',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Blog deletion route (protected)
  app.delete('/api/admin/delete-blog/:blogId', requireAdmin, async (req, res) => {
    try {
      const { blogId } = req.params;
      
      if (!blogId) {
        return res.status(400).json({ error: 'Blog ID is required' });
      }

      // Delete blog file
      const blogFileName = `${blogId}.tsx`;
      const blogDirPath = path.join(process.cwd(), 'client', 'src', 'blogs');
      const blogFilePath = path.join(blogDirPath, blogFileName);
      
      // Check if blog file exists
      try {
        await fs.access(blogFilePath);
      } catch (error) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      // Delete the blog file
      await fs.unlink(blogFilePath);

      // Update blogs index file to remove the blog completely
      const indexPath = path.join(blogDirPath, 'index.ts');
      const indexContent = await fs.readFile(indexPath, 'utf-8');
      
      // Handle both naming patterns (with and without "Blog" suffix)
      const componentName = blogId.replace(/-/g, '');
      const possibleImports = [
        `import { ${componentName}Blog } from './${blogId}';`,
        `import { ${componentName} } from './${blogId}';`,
        `import { blog${componentName} } from './${blogId}';`
      ];
      
      const possibleEntries = [
        `  ${componentName}Blog,`,
        `  ${componentName},`,
        `  blog${componentName},`
      ];
      
      let updatedContent = indexContent;
      
      // Remove all possible import statements
      possibleImports.forEach(importStatement => {
        updatedContent = updatedContent.replace(importStatement + '\n', '');
        updatedContent = updatedContent.replace(importStatement, '');
      });
      
      // Remove from allBlogs array
      possibleEntries.forEach(blogEntry => {
        updatedContent = updatedContent.replace(blogEntry + '\n', '');
        updatedContent = updatedContent.replace(blogEntry, '');
      });
      
      // Clean up any multiple newlines and trailing commas
      updatedContent = updatedContent.replace(/\n\n\n+/g, '\n\n');
      updatedContent = updatedContent.replace(/,\s*\n\s*];/g, '\n];');
      updatedContent = updatedContent.replace(/\[\s*\n\s*\n\s*\/\//g, '[\n  //');
      
      await fs.writeFile(indexPath, updatedContent);

      // Delete static HTML files if they exist
      const distDir = path.join(process.cwd(), 'dist', 'public');
      const possibleStaticFiles = [
        path.join(distDir, 'blog', `${blogId}.html`),
        path.join(distDir, 'blog', `${blogId}`, 'index.html')
      ];
      
      for (const staticFile of possibleStaticFiles) {
        try {
          await fs.access(staticFile);
          await fs.unlink(staticFile);
          console.log(`Deleted static file: ${staticFile}`);
        } catch (error) {
          // File doesn't exist, continue
        }
      }

      // Remove from static page generation if referenced
      const staticPagesScript = path.join(process.cwd(), 'scripts', 'generate-static-pages.js');
      try {
        const staticContent = await fs.readFile(staticPagesScript, 'utf-8');
        if (staticContent.includes(blogId)) {
          // Remove blog references from static generation
          const updatedStaticContent = staticContent.replace(
            new RegExp(`\\s*"${blogId}"[,\\s]*`, 'g'),
            ''
          );
          await fs.writeFile(staticPagesScript, updatedStaticContent);
          console.log('Removed blog from static generation script');
        }
      } catch (error) {
        console.warn('Could not update static generation script:', error.message);
      }

      // Auto-update sitemap after blog deletion
      try {
        const { updateSitemap } = await import('./functions/autoSEO');
        await updateSitemap();
        console.log('Sitemap updated after blog deletion');
      } catch (sitemapError) {
        console.warn('Failed to update sitemap after blog deletion:', sitemapError);
      }

      // Clear any cached references and rebuild system files
      try {
        // Clear any potential caches in memory
        if (global.blogCache) {
          delete global.blogCache;
        }
        
        // For ES modules, we can't directly clear the cache, but we can log the action
        console.log('Cleared in-memory caches for deleted blog');
      } catch (error) {
        console.warn('Could not clear caches:', error.message);
      }

      // Verify blog removal by checking the file system
      try {
        // Check if the blog file still exists
        const blogStillExists = await fs.access(blogFilePath).then(() => true).catch(() => false);
        if (blogStillExists) {
          console.warn(`Warning: Blog file ${blogFilePath} still exists after deletion`);
        }
        
        // Count remaining blog files
        const remainingFiles = await fs.readdir(blogDirPath);
        const remainingBlogs = remainingFiles.filter(file => file.endsWith('.tsx') && file !== 'index.ts');
        console.log(`Verified blog removal: ${remainingBlogs.length} blog files remaining`);
        
      } catch (error) {
        console.warn('Could not verify blog removal:', error.message);
      }

      // Automatically regenerate static HTML files to reflect the blog deletion
      console.log('🔄 Regenerating static HTML files after blog deletion...');
      const regenerationSuccess = await regenerateStaticFiles();

      res.json({
        success: true,
        message: `Blog "${blogId}" completely deleted with all SEO references removed`,
        blogId,
        deletedFile: blogFileName,
        staticFilesRegenerated: regenerationSuccess,
        cleanupActions: [
          'Blog file deleted',
          'Index file updated',
          'Static files removed',
          'Sitemap updated',
          'Module cache cleared',
          regenerationSuccess ? 'Static HTML files regenerated' : 'Static HTML regeneration failed'
        ]
      });

    } catch (error) {
      console.error('Error deleting blog:', error);
      res.status(500).json({ 
        error: 'Failed to delete blog',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Blog API routes (public)
  app.get('/api/blogs', async (req, res) => {
    try {
      const blogsDir = path.join(process.cwd(), 'client/src/blogs');
      
      // Check if blogs directory exists
      try {
        await fs.access(blogsDir);
      } catch {
        return res.json([]);
      }
      
      // Read all files in the blogs directory
      const files = await fs.readdir(blogsDir);
      const blogFiles = files.filter(file => file.endsWith('.tsx') && file !== 'index.ts');
      
      const blogs = [];
      
      for (const file of blogFiles) {
        try {
          const filePath = path.join(blogsDir, file);
          const content = await fs.readFile(filePath, 'utf-8');
          
          // Parse the blog data from the file content
          const blogData = extractBlogDataFromFile(content);
          if (blogData) {
            blogs.push(blogData);
          }
        } catch (error) {
          console.error(`Error reading blog file ${file}:`, error);
        }
      }
      
      // Sort blogs by date (newest first)
      blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      res.json(blogs);
    } catch (error) {
      console.error('Error loading blogs:', error);
      res.json([]); // Return empty array if no blogs exist
    }
  });



  // SEO API routes
  app.post('/api/seo/validate', validateSEOData);
  app.get('/api/seo/sitemap.xml', getSitemap);
  app.get('/sitemap.xml', getSitemap); // Alternative route for sitemap
  app.post('/api/seo/generate/city/:cityId', generateCitySEO);
  app.post('/api/seo/generate/blog/:blogId', generateBlogSEO);
  app.post('/api/seo/update/sitemap', updateSitemapManually);
  app.get('/api/seo/analytics', getSEOAnalyticsData);
  app.post('/api/seo/batch/cities', batchUpdateCitiesSEO);
  app.post('/api/seo/batch/blogs', batchUpdateBlogsSEO);
  app.get('/robots.txt', getRobotsTxt);
  
  // Sitemap indexing routes
  app.post('/api/seo/submit/sitemap', submitSitemapManually);
  app.get('/api/seo/indexing/status', getSitemapIndexingStatusRoute);

  const httpServer = createServer(app);
  return httpServer;
}

function extractBlogDataFromFile(content: string): any | null {
  try {
    // Extract the blog object from the file content - handle both naming patterns
    const blogObjectMatch = content.match(/export const \w+(?:Blog)?: Blog = ({[\s\S]*?});/);
    if (!blogObjectMatch) {
      console.error('No blog object found in file');
      return null;
    }
    
    const blogObjectString = blogObjectMatch[1];
    
    // Parse the blog object properties with better regex patterns
    const id = blogObjectString.match(/id: "([^"]*?)"/)?.[1];
    const title = blogObjectString.match(/title: "(.*?)"/)?.[1];
    const excerpt = blogObjectString.match(/excerpt: "(.*?)"/)?.[1];
    const category = blogObjectString.match(/category: "([^"]*?)"/)?.[1];
    const imageUrl = blogObjectString.match(/imageUrl: "([^"]*?)"/)?.[1];
    const featured = blogObjectString.match(/featured: (true|false)/)?.[1] === 'true';
    const readTime = blogObjectString.match(/readTime: "([^"]*?)"/)?.[1];
    const date = blogObjectString.match(/date: "([^"]*?)"/)?.[1];
    const author = blogObjectString.match(/author: "([^"]*?)"/)?.[1];
    
    // Extract content (handles template strings with better pattern)
    const contentMatch = blogObjectString.match(/content: `([\s\S]*?)`(?=,\s*\w+:|$)/);
    const contentString = contentMatch ? contentMatch[1] : '';
    

    
    return {
      id,
      title,
      excerpt,
      content: contentString,
      category,
      imageUrl,
      featured,
      readTime,
      date,
      author
    };
  } catch (error) {
    console.error('Error parsing blog data:', error);
    return null;
  }
}

function generateBlogComponent(blogData: any): string {
  const componentName = blogData.id.replace(/-/g, '');
  
  return `import React from 'react';
import { Blog } from '@shared/schema';

export const ${componentName}Blog: Blog = {
  id: "${blogData.id}",
  title: "${blogData.title}",
  excerpt: "${blogData.excerpt}",
  content: \`${blogData.content.replace(/`/g, '\\`')}\`,
  category: "${blogData.category}",
  imageUrl: "${blogData.imageUrl}",
  featured: ${blogData.featured},
  readTime: "${blogData.readTime}",
  date: "${blogData.date}",
  author: "${blogData.author}"
};`;
}

function generateReactComponent(
  cityName: string,
  contentData: any,
  heroImageUrl: string,
  galleryImages: any[],
  country: string
): string {
  const title = `15 Best Things to Do in ${cityName.replace(/([A-Z])/g, ' $1').trim()}, ${country} (2025 Guide)`;
  
  // Format gallery images
  const formattedGalleryImages = galleryImages.map(img => `
        { url: "${img.url || ''}", alt: "${img.alt || ''}", caption: "${img.caption || ''}" }`).join(',');

  // Format highlights
  const formattedHighlights = contentData.highlights.map((h: string) => `"${h}"`).join(',\n        ');

  // Format attractions with discoveryTags
  const formattedAttractions = contentData.attractions.map((attraction: any) => `
        {
        name: "${attraction.name}",
        description: \`${attraction.description.replace(/`/g, '\\`')}\`,
        practicalInfo: {
        howToGetThere: "${attraction.practicalInfo?.howToGetThere || ''}",
        openingHours: "${attraction.practicalInfo?.openingHours || ''}",
        cost: "${attraction.practicalInfo?.cost || ''}",
        website: "${attraction.practicalInfo?.website || ''}"
      },
      discoveryTags: {
        timeRequired: "${attraction.discoveryTags?.timeRequired || '1-2 hours'}",
        experienceLevel: "${attraction.discoveryTags?.experienceLevel || 'Easy Access'}",
        interests: [${attraction.discoveryTags?.interests?.map((i: string) => `"${i}"`).join(', ') || '"history", "culture"'}],
        costLevel: "${attraction.discoveryTags?.costLevel || 'Moderate'}",
        seasonalBest: "${attraction.discoveryTags?.seasonalBest || 'Year-round'}",
        photoOpportunity: "${attraction.discoveryTags?.photoOpportunity || 'Great views available'}",
        insiderTip: "${attraction.discoveryTags?.insiderTip || 'Visit during off-peak hours'}",
        hiddenGem: ${attraction.discoveryTags?.hiddenGem || false},
        familyFriendly: ${attraction.discoveryTags?.familyFriendly || true},
        accessibilityNotes: "${attraction.discoveryTags?.accessibilityNotes || 'Standard accessibility'}"
      }
      }`).join(',');

  // Format logistics
  const logistics = contentData.logistics ? `
      logistics={{
        gettingAround: \`${contentData.logistics.gettingAround?.replace(/`/g, '\\`') || ''}\`,
        whereToStay: \`${contentData.logistics.whereToStay?.replace(/`/g, '\\`') || ''}\`,
        bestTimeToVisit: \`${contentData.logistics.bestTimeToVisit?.replace(/`/g, '\\`') || ''}\`,
        suggestedItinerary: \`${contentData.logistics.suggestedItinerary?.replace(/`/g, '\\`') || ''}\`
      }}` : '';

  // Format FAQs
  const faqs = contentData.faqs ? `
      faqs={[${contentData.faqs.map((faq: any) => `
        {
        question: "${faq.question}",
        answer: \`${faq.answer.replace(/`/g, '\\`')}\`
      }`).join(',')}
      ]}` : '';

  // Format discoveryData
  const discoveryData = contentData.discoveryData ? `
      discoveryData={{
        cityPersonality: "${contentData.discoveryData.cityPersonality || 'Charming, Historic'}",
        budgetBreakdown: {
          freeActivities: "${contentData.discoveryData.budgetBreakdown?.freeActivities || 'Parks, markets, viewpoints'}",
          budgetFriendly: "${contentData.discoveryData.budgetBreakdown?.budgetFriendly || 'Local cafes, walking tours'}",
          splurgeWorthy: "${contentData.discoveryData.budgetBreakdown?.splurgeWorthy || 'Fine dining, premium experiences'}"
        },
        localSecrets: [${contentData.discoveryData.localSecrets?.map((secret: string) => `"${secret}"`).join(', ') || '"Visit early morning for fewer crowds"'}],
        diningHighlights: {
          mustTryDishes: "${contentData.discoveryData.diningHighlights?.mustTryDishes || 'Local specialties'}",
          bestCafes: "${contentData.discoveryData.diningHighlights?.bestCafes || 'Charming local cafes'}",
          topRestaurants: "${contentData.discoveryData.diningHighlights?.topRestaurants || 'Recommended restaurants'}",
          foodMarkets: "${contentData.discoveryData.diningHighlights?.foodMarkets || 'Local food markets'}",
          diningTips: "${contentData.discoveryData.diningHighlights?.diningTips || 'Standard dining etiquette'}"
        },
        seasonalHighlights: {
          spring: "${contentData.discoveryData.seasonalHighlights?.spring || 'Pleasant weather'}",
          summer: "${contentData.discoveryData.seasonalHighlights?.summer || 'Peak season'}",
          fall: "${contentData.discoveryData.seasonalHighlights?.fall || 'Comfortable temperatures'}",
          winter: "${contentData.discoveryData.seasonalHighlights?.winter || 'Cooler weather'}"
        },
        quickFacts: {
          totalAttractions: "${contentData.discoveryData.quickFacts?.totalAttractions || contentData.attractions?.length || '10'}",
          freeActivities: "${contentData.discoveryData.quickFacts?.freeActivities || '3'}",
          averageTimePerAttraction: "${contentData.discoveryData.quickFacts?.averageTimePerAttraction || '30-60 minutes'}",
          walkingFriendly: ${contentData.discoveryData.quickFacts?.walkingFriendly || true},
          publicTransportQuality: "${contentData.discoveryData.quickFacts?.publicTransportQuality || 'Good'}"
        }
      }}` : '';

  return `import React from 'react';
import { CityPage } from '../../components/CityPage';

export const ${cityName}: React.FC = () => {
  return (
    <CityPage
      cityName="${cityName.replace(/([A-Z])/g, ' $1').trim()}"
      country="${country}"
      title={"${title}"}
      description={\`${contentData.description.replace(/`/g, '\\`')}\`}${heroImageUrl ? `\n      imageUrl={"${heroImageUrl}"}` : ''}
      galleryImages={[${formattedGalleryImages}
      ]}
      highlights={[${formattedHighlights}]}
      attractions={[${formattedAttractions}
      ]}${logistics}${faqs}${discoveryData}
    />
  );
};`;
}
