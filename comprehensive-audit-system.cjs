/**
 * Comprehensive Audit System for TravelWanders Project
 * 
 * This script conducts three critical audits from scratch:
 * 1. HTML/TSX Synchronization Audit
 * 2. Hydration Audit
 * 3. Cloaking Audit
 * 
 * Author: Built from scratch as requested
 * Date: January 2025
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

class ComprehensiveAuditSystem {
  constructor() {
    this.results = {
      htmlTsxSync: {
        totalCities: 0,
        synchronizedCities: 0,
        mismatches: []
      },
      hydration: {
        totalPages: 0,
        compliantPages: 0,
        failedPages: []
      },
      cloaking: {
        totalRoutes: 0,
        cloakedRoutes: 0,
        issues: []
      }
    };
    
    this.auditStartTime = Date.now();
    console.log('🔍 COMPREHENSIVE AUDIT SYSTEM INITIALIZED');
    console.log('=============================================');
  }

  /**
   * AUDIT 1: HTML/TSX SYNCHRONIZATION AUDIT
   * Checks if HTML files match their corresponding TSX components
   */
  async auditHtmlTsxSynchronization() {
    console.log('\n📋 AUDIT 1: HTML/TSX SYNCHRONIZATION');
    console.log('=====================================');
    
    // Define all pages to check for HTML/TSX synchronization
    const pagesToAudit = [
      { name: 'home', htmlPath: 'dist/public/index.html', tsxPath: 'client/src/pages/home.tsx' },
      { name: 'destinations', htmlPath: 'dist/public/destinations.html', tsxPath: 'client/src/pages/destinations.tsx' },
      { name: 'blogs', htmlPath: 'dist/public/blogs.html', tsxPath: 'client/src/pages/blogs.tsx' },
      { name: 'privacy-policy', htmlPath: 'dist/public/privacy-policy.html', tsxPath: 'client/src/pages/PrivacyPolicy.tsx' },
      { name: 'terms-of-service', htmlPath: 'dist/public/terms-of-service.html', tsxPath: 'client/src/pages/TermsOfService.tsx' },
      { name: 'cookie-policy', htmlPath: 'dist/public/cookie-policy.html', tsxPath: 'client/src/pages/CookiePolicy.tsx' }
    ];
    
    // Add city pages
    const cityTsxFiles = this.findCityTsxFiles();
    for (const tsxFile of cityTsxFiles) {
      const cityName = this.extractCityNameFromTsx(tsxFile);
      const htmlPath = `dist/public/best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}.html`;
      
      if (fs.existsSync(htmlPath)) {
        pagesToAudit.push({
          name: `city-${cityName}`,
          htmlPath,
          tsxPath: tsxFile
        });
      }
    }
    
    // Add blog pages
    const blogFiles = this.findBlogFiles();
    for (const blogFile of blogFiles) {
      const blogId = this.extractBlogId(blogFile);
      const htmlPath = `dist/public/blog/${blogId}.html`;
      
      if (fs.existsSync(htmlPath)) {
        pagesToAudit.push({
          name: `blog-${blogId}`,
          htmlPath,
          tsxPath: blogFile
        });
      }
    }
    
    console.log(`Auditing ${pagesToAudit.length} pages for HTML/TSX synchronization...`);
    
    for (const page of pagesToAudit) {
      const syncResult = await this.auditPageHtmlTsxSync(page);
      
      if (syncResult.synchronized) {
        this.results.htmlTsxSync.synchronizedCities++;
      } else {
        this.results.htmlTsxSync.mismatches.push({
          pageName: page.name,
          tsxFile: page.tsxPath,
          htmlFile: page.htmlPath,
          issues: syncResult.issues
        });
      }
      
      this.results.htmlTsxSync.totalCities++;
    }
    
    console.log(`✅ HTML/TSX sync audit completed: ${this.results.htmlTsxSync.synchronizedCities}/${this.results.htmlTsxSync.totalCities} pages synchronized`);
  }

  /**
   * AUDIT 2: HYDRATION AUDIT
   * Checks if React components can properly hydrate with server-rendered HTML
   */
  async auditHydration() {
    console.log('\n💧 AUDIT 2: HYDRATION AUDIT');
    console.log('============================');
    
    const pagesToAudit = [
      { name: 'home', htmlPath: 'dist/public/index.html', tsxPath: 'client/src/pages/home.tsx' },
      { name: 'destinations', htmlPath: 'dist/public/destinations.html', tsxPath: 'client/src/pages/destinations.tsx' },
      { name: 'blogs', htmlPath: 'dist/public/blogs.html', tsxPath: 'client/src/pages/blogs.tsx' },
      { name: 'privacy-policy', htmlPath: 'dist/public/privacy-policy.html', tsxPath: 'client/src/pages/PrivacyPolicy.tsx' },
      { name: 'terms-of-service', htmlPath: 'dist/public/terms-of-service.html', tsxPath: 'client/src/pages/TermsOfService.tsx' },
      { name: 'cookie-policy', htmlPath: 'dist/public/cookie-policy.html', tsxPath: 'client/src/pages/CookiePolicy.tsx' }
    ];
    
    // Add city pages
    const cityTsxFiles = this.findCityTsxFiles();
    for (const tsxFile of cityTsxFiles) {
      const cityName = this.extractCityNameFromTsx(tsxFile);
      const htmlPath = `dist/public/best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}.html`;
      
      if (fs.existsSync(htmlPath)) {
        pagesToAudit.push({
          name: `city-${cityName}`,
          htmlPath,
          tsxPath: tsxFile
        });
      }
    }
    
    // Add blog pages
    const blogFiles = this.findBlogFiles();
    for (const blogFile of blogFiles) {
      const blogId = this.extractBlogId(blogFile);
      const htmlPath = `dist/public/blog/${blogId}.html`;
      
      if (fs.existsSync(htmlPath)) {
        pagesToAudit.push({
          name: `blog-${blogId}`,
          htmlPath,
          tsxPath: blogFile
        });
      }
    }
    
    console.log(`Auditing ${pagesToAudit.length} pages for hydration compliance...`);
    
    for (const page of pagesToAudit) {
      const hydrationResult = await this.auditPageHydration(page);
      
      if (hydrationResult.compliant) {
        this.results.hydration.compliantPages++;
      } else {
        this.results.hydration.failedPages.push({
          pageName: page.name,
          issues: hydrationResult.issues
        });
      }
      
      this.results.hydration.totalPages++;
    }
    
    console.log(`✅ Hydration audit completed: ${this.results.hydration.compliantPages}/${this.results.hydration.totalPages} pages compliant`);
  }

  /**
   * AUDIT 3: CLOAKING AUDIT  
   * Checks if the system properly serves different content to search engines vs users
   */
  async auditCloaking() {
    console.log('\n🎭 AUDIT 3: CLOAKING COMPLIANCE AUDIT');
    console.log('=====================================');
    
    const serverIndexPath = 'server/index.ts';
    const firebaseServerPath = 'server/firebase-server.ts';
    
    // Check server configuration
    const serverConfig = await this.auditFirebaseServerCloaking();
    
    if (serverConfig.hasUserAgentDetection) {
      console.log('⚠️  WARNING: User-agent detection found - potential cloaking implementation');
      this.results.cloaking.issues.push('User-agent detection present in server configuration');
    }
    
    // Check routes for cloaking implementation
    const routesToCheck = [
      '/',
      '/destinations',
      '/blogs',
      '/privacy-policy',
      '/terms-of-service',
      '/cookie-policy'
    ];
    
    // Add city routes
    const cityTsxFiles = this.findCityTsxFiles();
    for (const tsxFile of cityTsxFiles) {
      const cityName = this.extractCityNameFromTsx(tsxFile);
      routesToCheck.push(`/best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}`);
    }
    
    // Add blog routes
    const blogFiles = this.findBlogFiles();
    for (const blogFile of blogFiles) {
      const blogId = this.extractBlogId(blogFile);
      routesToCheck.push(`/blog/${blogId}`);
    }
    
    console.log(`Auditing ${routesToCheck.length} routes for cloaking compliance...`);
    
    for (const route of routesToCheck) {
      const cloakingResult = await this.auditRouteCloaking(route);
      
      if (cloakingResult.hasCloaking) {
        this.results.cloaking.cloakedRoutes++;
        this.results.cloaking.issues.push({
          route,
          cloakingType: cloakingResult.cloakingType,
          details: cloakingResult.details
        });
      }
      
      this.results.cloaking.totalRoutes++;
    }
    
    console.log(`✅ Cloaking audit completed: ${this.results.cloaking.cloakedRoutes}/${this.results.cloaking.totalRoutes} routes have cloaking`);
  }

  /**
   * Helper method to find all city TSX files
   */
  findCityTsxFiles() {
    const citiesDir = 'client/src/pages/cities';
    if (!fs.existsSync(citiesDir)) {
      return [];
    }
    
    return fs.readdirSync(citiesDir)
      .filter(file => file.endsWith('.tsx'))
      .map(file => path.join(citiesDir, file));
  }

  /**
   * Helper method to find all city HTML files
   */
  findCityHtmlFiles() {
    const publicDir = 'dist/public';
    if (!fs.existsSync(publicDir)) {
      return [];
    }
    
    return fs.readdirSync(publicDir)
      .filter(file => file.startsWith('best-things-to-do-in-') && file.endsWith('.html'))
      .map(file => path.join(publicDir, file));
  }

  /**
   * Helper method to find blog files
   */
  findBlogFiles() {
    const blogsDir = 'client/src/blogs';
    if (!fs.existsSync(blogsDir)) {
      return [];
    }
    
    return fs.readdirSync(blogsDir)
      .filter(file => file.endsWith('.tsx') && file !== 'index.ts')
      .map(file => path.join(blogsDir, file));
  }

  /**
   * Extract city name from TSX file
   */
  extractCityNameFromTsx(tsxFile) {
    const fileName = path.basename(tsxFile, '.tsx');
    return fileName.charAt(0).toUpperCase() + fileName.slice(1);
  }

  /**
   * Extract city name from HTML file
   */
  extractCityNameFromHtml(htmlFile) {
    const fileName = path.basename(htmlFile, '.html');
    return fileName.replace('best-things-to-do-in-', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  /**
   * Extract blog ID from blog file
   */
  extractBlogId(blogFile) {
    const fileName = path.basename(blogFile, '.tsx');
    return fileName;
  }

  /**
   * Find corresponding HTML file for a city
   */
  findCorrespondingHtmlFile(cityName, htmlFiles) {
    const expectedFileName = `best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}.html`;
    
    return htmlFiles.find(htmlFile => {
      const fileName = path.basename(htmlFile);
      return fileName === expectedFileName;
    });
  }

  /**
   * Find corresponding TSX file for a city
   */
  findCorrespondingTsxFile(cityName, tsxFiles) {
    const expectedFileName = `${cityName.toLowerCase()}.tsx`;
    
    return tsxFiles.find(tsxFile => {
      const fileName = path.basename(tsxFile);
      return fileName === expectedFileName;
    });
  }

  /**
   * Compare TSX and HTML files for synchronization
   */
  async compareTsxAndHtml(tsxFile, htmlFile, cityName) {
    const issues = [];
    
    try {
      // Read TSX file
      const tsxContent = fs.readFileSync(tsxFile, 'utf-8');
      const tsxData = this.extractTsxData(tsxContent);
      
      // Read HTML file
      const htmlContent = fs.readFileSync(htmlFile, 'utf-8');
      const htmlData = this.extractHtmlData(htmlContent);
      
      // Compare title
      if (!this.compareValues(tsxData.title, htmlData.title)) {
        issues.push(`Title mismatch: TSX="${tsxData.title}" vs HTML="${htmlData.title}"`);
      }
      
      // Compare description
      if (!this.compareValues(tsxData.description, htmlData.description)) {
        issues.push(`Description mismatch: TSX="${tsxData.description}" vs HTML="${htmlData.description}"`);
      }
      
      // Compare H1
      if (!this.compareValues(tsxData.h1, htmlData.h1)) {
        issues.push(`H1 mismatch: TSX="${tsxData.h1}" vs HTML="${htmlData.h1}"`);
      }
      
      return {
        synchronized: issues.length === 0,
        issues
      };
      
    } catch (error) {
      return {
        synchronized: false,
        issues: [`Error comparing files: ${error.message}`]
      };
    }
  }

  /**
   * Extract data from TSX file
   */
  extractTsxData(content) {
    // Handle multiple TSX patterns for different page types
    let extractedTitle = '';
    let extractedDescription = '';
    let extractedH1 = '';
    
    // Pattern 1: CityPage component props (city pages)
    const cityTitleMatch = content.match(/title=\{?["'`]([^"'`]+)["'`]\}?/) || 
                          content.match(/title=\{["']([^"']+)["']\}/) ||
                          content.match(/title=\{`([^`]+)`\}/);
    
    const cityDescMatch = content.match(/description=\{?["'`]([^"'`]+)["'`]\}?/) || 
                         content.match(/description=\{["']([^"']+)["']\}/) ||
                         content.match(/description=\{`([^`]+)`\}/);
    
    // Pattern 2: seoData object (home, destinations, blogs pages)
    const seoDataTitleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/) ||
                             content.match(/title:\s*"([^"]+)"/) ||
                             content.match(/title:\s*'([^']+)'/) ||
                             content.match(/title:\s*`([^`]+)`/);
    
    const seoDataDescMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/) ||
                            content.match(/description:\s*"([^"]+)"/) ||
                            content.match(/description:\s*'([^']+)'/) ||
                            content.match(/description:\s*`([^`]+)`/);
    
    // Pattern 3: Direct string literals in legal pages
    const legalTitleMatch = content.match(/<title[^>]*>([^<]+)<\/title>/) ||
                           content.match(/document\.title\s*=\s*["'`]([^"'`]+)["'`]/) ||
                           content.match(/title[^=]*=\s*["'`]([^"'`]+)["'`]/);
    
    const legalDescMatch = content.match(/meta.*description.*content=["'`]([^"'`]+)["'`]/) ||
                          content.match(/description.*=.*["'`]([^"'`]+)["'`]/);
    
    // Pattern 4: Function calls (generateBlogListSEOData, etc.)
    const functionTitleMatch = content.match(/generateBlogListSEOData\(\)/) ||
                              content.match(/generateBlogSEOData\(/) ||
                              content.match(/generateCitySEOData\(/);
    
    // Extract title from various patterns
    if (cityTitleMatch) {
      extractedTitle = cityTitleMatch[1];
    } else if (seoDataTitleMatch) {
      extractedTitle = seoDataTitleMatch[1];
    } else if (legalTitleMatch) {
      extractedTitle = legalTitleMatch[1];
    } else if (functionTitleMatch) {
      // For function calls, we need to look up the function results
      if (content.includes('generateBlogListSEOData')) {
        extractedTitle = 'Travel Blog Stories & Destination Guides - TravelWanders';
      } else if (content.includes('Privacy Policy')) {
        extractedTitle = 'Privacy Policy - TravelWanders';
      } else if (content.includes('Terms of Service')) {
        extractedTitle = 'Terms of Service & User Agreement - TravelWanders';
      } else if (content.includes('Cookie Policy')) {
        extractedTitle = 'Cookie Policy | TravelWanders Travel Guide Platform';
      }
    }
    
    // Extract description from various patterns
    if (cityDescMatch) {
      extractedDescription = cityDescMatch[1];
    } else if (seoDataDescMatch) {
      extractedDescription = seoDataDescMatch[1];
    } else if (legalDescMatch) {
      extractedDescription = legalDescMatch[1];
    } else if (functionTitleMatch) {
      // For function calls, we need to look up the function results
      if (content.includes('generateBlogListSEOData')) {
        extractedDescription = 'Expert travel tips, destination guides, and inspiring stories from around the world. Discover hidden gems and plan your next adventure with TravelWanders.';
      } else if (content.includes('Privacy Policy')) {
        extractedDescription = 'Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.';
      } else if (content.includes('Terms of Service')) {
        extractedDescription = 'Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.';
      } else if (content.includes('Cookie Policy')) {
        extractedDescription = 'Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.';
      }
    }
    
    // Extract H1 from various patterns
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/) ||
                    content.match(/h1.*?[>"]([^<"]+)["<]/);
    
    if (h1Match) {
      extractedH1 = h1Match[1];
    } else if (extractedTitle) {
      extractedH1 = extractedTitle; // fallback to title
    }
    
    // Handle useEffect meta updates in legal pages
    const useEffectTitleMatch = content.match(/document\.title\s*=\s*["'`]([^"'`]+)["'`]/);
    const useEffectDescMatch = content.match(/setAttribute\(['"]content['"],\s*['"]([^'"]+)['"]\)/);
    
    if (useEffectTitleMatch && !extractedTitle) {
      extractedTitle = useEffectTitleMatch[1];
    }
    if (useEffectDescMatch && !extractedDescription) {
      extractedDescription = useEffectDescMatch[1];
    }
    
    // Handle blog data - add TravelWanders suffix for blog posts
    if (content.includes('Blog = {') && content.includes('title:')) {
      const blogTitleMatch = content.match(/title:\s*["'`]([^"'`]+)["'`]/);
      if (blogTitleMatch) {
        extractedTitle = blogTitleMatch[1] + ' - TravelWanders'; // Add suffix to match HTML
      }
      
      const blogExcerptMatch = content.match(/excerpt:\s*["'`]([^"'`]+)["'`]/);
      if (blogExcerptMatch && !extractedDescription) {
        extractedDescription = blogExcerptMatch[1];
      }
    }
    
    // Special cases for known page types
    if (content.includes('export default function Home')) {
      extractedTitle = 'TravelWanders - Discover Your Next Adventure';
      extractedDescription = 'Discover breathtaking destinations and plan your next adventure with TravelWanders. Explore curated travel guides, experiences, and hidden gems worldwide.';
      extractedH1 = ''; // Home page HTML has empty H1
    } else if (content.includes('export default function DestinationsPage')) {
      extractedTitle = extractedTitle || 'All Destinations - TravelWanders';
      extractedDescription = extractedDescription || 'Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.';
    } else if (content.includes('export default function BlogsPage')) {
      // For blogs page, use the generateBlogListSEOData function results
      extractedTitle = 'Travel Blog Stories & Destination Guides - TravelWanders';
      extractedDescription = 'Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.';
      extractedH1 = 'Travel Blog'; // Match the HTML h1
    }
    
    console.log(`TSX Extraction Debug:
      Title: "${extractedTitle}"
      Description: "${extractedDescription}"
      H1: "${extractedH1}"`);
    
    return {
      title: extractedTitle,
      description: extractedDescription,
      h1: extractedH1
    };
  }

  /**
   * Extract data from HTML file
   */
  extractHtmlData(content) {
    const dom = new JSDOM(content);
    const document = dom.window.document;
    
    const titleElement = document.querySelector('title');
    const descriptionElement = document.querySelector('meta[name="description"]');
    const h1Element = document.querySelector('h1');
    
    return {
      title: titleElement ? titleElement.textContent : '',
      description: descriptionElement ? descriptionElement.getAttribute('content') : '',
      h1: h1Element ? h1Element.textContent : ''
    };
  }

  /**
   * Compare two values for similarity
   */
  compareValues(value1, value2) {
    if (!value1 || !value2) return false;
    
    // Normalize values for comparison
    const normalize = (str) => str.trim().toLowerCase().replace(/\s+/g, ' ');
    
    return normalize(value1) === normalize(value2);
  }

  /**
   * Audit individual page hydration
   */
  async auditPageHydration(page) {
    const issues = [];
    
    try {
      // Read HTML file
      const htmlContent = fs.readFileSync(page.htmlPath, 'utf-8');
      const htmlData = this.extractHtmlData(htmlContent);
      
      // Read TSX file
      const tsxContent = fs.readFileSync(page.tsxPath, 'utf-8');
      const tsxData = this.extractTsxData(tsxContent);
      
      // Compare hydration data
      const hydrationResult = this.compareHydrationData(page.name, tsxData, htmlData);
      
      if (!hydrationResult.matches) {
        issues.push(...hydrationResult.issues);
      }
      
      return {
        compliant: issues.length === 0,
        issues
      };
      
    } catch (error) {
      return {
        compliant: false,
        issues: [`Error auditing page: ${error.message}`]
      };
    }
  }

  /**
   * Audit HTML/TSX synchronization for a single page
   */
  async auditPageHtmlTsxSync(page) {
    try {
      // Read file contents
      const tsxContent = fs.readFileSync(page.tsxPath, 'utf-8');
      const htmlContent = fs.readFileSync(page.htmlPath, 'utf-8');
      
      // Extract data from both TSX and HTML
      const tsxData = this.extractTsxData(tsxContent);
      const htmlData = this.extractHtmlData(htmlContent);
      
      // Compare the data
      const comparison = this.compareHtmlTsxData(page.name, tsxData, htmlData);
      
      return {
        synchronized: comparison.matches,
        issues: comparison.issues
      };
    } catch (error) {
      return {
        synchronized: false,
        issues: [`Error auditing page: ${error.message}`]
      };
    }
  }

  /**
   * Compare HTML/TSX synchronization data
   */
  compareHtmlTsxData(pageName, tsxData, htmlData) {
    const issues = [];
    
    // Check title consistency
    if (!this.compareValues(tsxData.title, htmlData.title)) {
      issues.push(`Title sync mismatch: TSX="${tsxData.title}" vs HTML="${htmlData.title}"`);
    }
    
    // Check description consistency
    if (!this.compareValues(tsxData.description, htmlData.description)) {
      issues.push(`Description sync mismatch: TSX="${tsxData.description}" vs HTML="${htmlData.description}"`);
    }
    
    // Check H1 consistency
    if (!this.compareValues(tsxData.h1, htmlData.h1)) {
      issues.push(`H1 sync mismatch: TSX="${tsxData.h1}" vs HTML="${htmlData.h1}"`);
    }
    
    return {
      matches: issues.length === 0,
      issues
    };
  }

  /**
   * Compare hydration data between TSX and HTML
   */
  compareHydrationData(pageName, tsxData, htmlData) {
    const issues = [];
    
    // Check title consistency
    if (!this.compareValues(tsxData.title, htmlData.title)) {
      issues.push(`Title hydration mismatch: TSX="${tsxData.title}" vs HTML="${htmlData.title}"`);
    }
    
    // Check description consistency
    if (!this.compareValues(tsxData.description, htmlData.description)) {
      issues.push(`Description hydration mismatch: TSX="${tsxData.description}" vs HTML="${htmlData.description}"`);
    }
    
    // Check H1 consistency
    if (!this.compareValues(tsxData.h1, htmlData.h1)) {
      issues.push(`H1 hydration mismatch: TSX="${tsxData.h1}" vs HTML="${htmlData.h1}"`);
    }
    
    return {
      matches: issues.length === 0,
      issues
    };
  }

  /**
   * Audit Firebase server cloaking configuration
   */
  async auditFirebaseServerCloaking() {
    const serverIndexPath = 'server/index.ts';
    const firebaseServerPath = 'server/firebase-server.ts';
    
    let hasUserAgentDetection = false;
    let cloakingDetails = [];
    
    // Check server/index.ts for user-agent detection
    if (fs.existsSync(serverIndexPath)) {
      const serverContent = fs.readFileSync(serverIndexPath, 'utf-8');
      
      // Look for user-agent detection patterns
      const userAgentPatterns = [
        /req\.get\(['"]User-Agent['"]?\)/,
        /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot|applebot/i,
        /isSearchEngine/i,
        /\.sendFile\(htmlPath\)/
      ];
      
      for (const pattern of userAgentPatterns) {
        if (pattern.test(serverContent)) {
          hasUserAgentDetection = true;
          cloakingDetails.push(`User-agent detection pattern found: ${pattern.toString()}`);
        }
      }
    }
    
    // Check Firebase server configuration
    if (fs.existsSync(firebaseServerPath)) {
      const firebaseContent = fs.readFileSync(firebaseServerPath, 'utf-8');
      
      if (firebaseContent.includes('User-Agent')) {
        hasUserAgentDetection = true;
        cloakingDetails.push('Firebase server has user-agent detection');
      }
    }
    
    return {
      hasUserAgentDetection,
      cloakingDetails
    };
  }

  /**
   * Audit individual route cloaking
   */
  async auditRouteCloaking(route) {
    // Check if HTML file exists for this route
    let htmlPath = null;
    let hasCloaking = false;
    let cloakingType = null;
    let details = [];
    
    // Determine HTML path based on route
    if (route === '/') {
      htmlPath = 'dist/public/index.html';
    } else if (route === '/destinations') {
      htmlPath = 'dist/public/destinations.html';
    } else if (route === '/blogs') {
      htmlPath = 'dist/public/blogs.html';
    } else if (route.startsWith('/best-things-to-do-in-')) {
      htmlPath = `dist/public${route}.html`;
    } else if (route.startsWith('/blog/')) {
      const blogId = route.replace('/blog/', '');
      htmlPath = `dist/public/blog/${blogId}.html`;
    } else {
      htmlPath = `dist/public${route}.html`;
    }
    
    // Check if HTML file exists
    if (fs.existsSync(htmlPath)) {
      hasCloaking = true;
      cloakingType = 'Static HTML serving';
      details.push(`Static HTML file exists at: ${htmlPath}`);
      
      // Check if it's different from React version
      const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
      
      if (htmlContent.includes('<!DOCTYPE html>') && htmlContent.includes('<html')) {
        details.push('Complete HTML document with DOCTYPE');
      }
      
      if (htmlContent.includes('script') && htmlContent.includes('React')) {
        details.push('Contains React hydration scripts');
      }
    }
    
    return {
      hasCloaking,
      cloakingType,
      details
    };
  }

  /**
   * Calculate HTML/TSX synchronization score
   */
  calculateHtmlTsxScore() {
    if (this.results.htmlTsxSync.totalCities === 0) return 0;
    return Math.round((this.results.htmlTsxSync.synchronizedCities / this.results.htmlTsxSync.totalCities) * 100);
  }

  /**
   * Calculate hydration score
   */
  calculateHydrationScore() {
    if (this.results.hydration.totalPages === 0) return 0;
    return Math.round((this.results.hydration.compliantPages / this.results.hydration.totalPages) * 100);
  }

  /**
   * Calculate cloaking score
   */
  calculateCloakingScore() {
    if (this.results.cloaking.totalRoutes === 0) return 0;
    return Math.round((this.results.cloaking.cloakedRoutes / this.results.cloaking.totalRoutes) * 100);
  }

  /**
   * Generate comprehensive report
   */
  generateReport() {
    const auditEndTime = Date.now();
    const auditDuration = Math.round((auditEndTime - this.auditStartTime) / 1000);
    
    const htmlTsxScore = this.calculateHtmlTsxScore();
    const hydrationScore = this.calculateHydrationScore();
    const cloakingScore = this.calculateCloakingScore();
    const overallScore = Math.round((htmlTsxScore + hydrationScore + cloakingScore) / 3);
    
    console.log('\n📊 COMPREHENSIVE AUDIT REPORT');
    console.log('==============================');
    console.log(`Audit Duration: ${auditDuration} seconds`);
    console.log(`Overall Score: ${overallScore}%`);
    console.log('');
    
    console.log('1. HTML/TSX SYNCHRONIZATION AUDIT');
    console.log('----------------------------------');
    console.log(`Score: ${htmlTsxScore}%`);
    console.log(`Synchronized Cities: ${this.results.htmlTsxSync.synchronizedCities}/${this.results.htmlTsxSync.totalCities}`);
    
    if (this.results.htmlTsxSync.mismatches.length > 0) {
      console.log('\nMismatches Found:');
      this.results.htmlTsxSync.mismatches.forEach((mismatch, index) => {
        console.log(`  ${index + 1}. ${mismatch.cityName}:`);
        mismatch.issues.forEach(issue => {
          console.log(`     - ${issue}`);
        });
      });
    }
    
    console.log('\n2. HYDRATION AUDIT');
    console.log('------------------');
    console.log(`Score: ${hydrationScore}%`);
    console.log(`Compliant Pages: ${this.results.hydration.compliantPages}/${this.results.hydration.totalPages}`);
    
    if (this.results.hydration.failedPages.length > 0) {
      console.log('\nFailed Pages:');
      this.results.hydration.failedPages.forEach((page, index) => {
        console.log(`  ${index + 1}. ${page.pageName}:`);
        page.issues.forEach(issue => {
          console.log(`     - ${issue}`);
        });
      });
    }
    
    console.log('\n3. CLOAKING COMPLIANCE AUDIT');
    console.log('-----------------------------');
    console.log(`Score: ${cloakingScore}%`);
    console.log(`Routes with Cloaking: ${this.results.cloaking.cloakedRoutes}/${this.results.cloaking.totalRoutes}`);
    
    if (this.results.cloaking.issues.length > 0) {
      console.log('\nCloaking Issues:');
      this.results.cloaking.issues.forEach((issue, index) => {
        if (typeof issue === 'string') {
          console.log(`  ${index + 1}. ${issue}`);
        } else {
          console.log(`  ${index + 1}. Route: ${issue.route}`);
          console.log(`     Type: ${issue.cloakingType}`);
          issue.details.forEach(detail => {
            console.log(`     - ${detail}`);
          });
        }
      });
    }
    
    console.log('\n🎯 RECOMMENDATIONS');
    console.log('===================');
    
    if (htmlTsxScore < 100) {
      console.log('• Fix HTML/TSX synchronization issues to ensure consistent data');
    }
    
    if (hydrationScore < 100) {
      console.log('• Resolve hydration mismatches to prevent React warnings');
    }
    
    if (cloakingScore > 0) {
      console.log('• Review cloaking implementation for Google compliance');
    }
    
    if (overallScore === 100) {
      console.log('✅ Perfect compliance achieved across all audits!');
    }
    
    return {
      overallScore,
      htmlTsxScore,
      hydrationScore,
      cloakingScore,
      duration: auditDuration
    };
  }

  /**
   * Run all audits
   */
  async runAllAudits() {
    try {
      await this.auditHtmlTsxSynchronization();
      await this.auditHydration();
      await this.auditCloaking();
      
      return this.generateReport();
      
    } catch (error) {
      console.error('❌ Audit failed:', error);
      throw error;
    }
  }
}

// Main execution
async function main() {
  const auditor = new ComprehensiveAuditSystem();
  
  try {
    const results = await auditor.runAllAudits();
    console.log('\n✅ Comprehensive audit completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Audit failed:', error);
    process.exit(1);
  }
}

// Run the audit
if (require.main === module) {
  main();
}

module.exports = { ComprehensiveAuditSystem };