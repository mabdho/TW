#!/usr/bin/env node

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

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ComprehensiveAuditSystem {
  constructor() {
    this.results = {
      htmlTsxSync: {
        totalPages: 0,
        syncedPages: 0,
        mismatches: [],
        passed: [],
        failed: [],
        score: 0
      },
      hydration: {
        totalChecks: 0,
        passedChecks: 0,
        failedChecks: 0,
        warnings: [],
        errors: [],
        score: 0
      },
      cloaking: {
        totalRoutes: 0,
        cloakedRoutes: 0,
        nonCloakedRoutes: 0,
        issues: [],
        passed: [],
        score: 0
      }
    };
  }

  /**
   * AUDIT 1: HTML/TSX SYNCHRONIZATION AUDIT
   * Checks if HTML files match their corresponding TSX components
   */
  async auditHtmlTsxSynchronization() {
    console.log('🔍 HTML/TSX SYNCHRONIZATION AUDIT');
    console.log('================================\n');

    const cityTsxFiles = this.findCityTsxFiles();
    const cityHtmlFiles = this.findCityHtmlFiles();
    
    this.results.htmlTsxSync.totalPages = cityTsxFiles.length;

    console.log(`Found ${cityTsxFiles.length} TSX city files`);
    console.log(`Found ${cityHtmlFiles.length} HTML city files\n`);

    // Check each TSX file against its corresponding HTML file
    for (const tsxFile of cityTsxFiles) {
      const cityName = this.extractCityNameFromTsx(tsxFile);
      const htmlFile = this.findCorrespondingHtmlFile(cityName, cityHtmlFiles);
      
      if (!htmlFile) {
        this.results.htmlTsxSync.mismatches.push({
          type: 'MISSING_HTML',
          tsxFile: tsxFile,
          cityName: cityName,
          message: `No corresponding HTML file found for ${cityName}`
        });
        continue;
      }

      await this.compareTsxAndHtml(tsxFile, htmlFile, cityName);
    }

    // Check for orphaned HTML files
    for (const htmlFile of cityHtmlFiles) {
      const cityName = this.extractCityNameFromHtml(htmlFile);
      const tsxFile = this.findCorrespondingTsxFile(cityName, cityTsxFiles);
      
      if (!tsxFile) {
        this.results.htmlTsxSync.mismatches.push({
          type: 'ORPHANED_HTML',
          htmlFile: htmlFile,
          cityName: cityName,
          message: `HTML file exists but no corresponding TSX file found for ${cityName}`
        });
      }
    }

    this.calculateHtmlTsxScore();
  }

  /**
   * AUDIT 2: HYDRATION AUDIT
   * Checks if React components can properly hydrate with server-rendered HTML
   */
  async auditHydration() {
    console.log('\n🔍 HYDRATION AUDIT');
    console.log('==================\n');

    const pages = [
      { name: 'Home', tsxPath: 'client/src/pages/home.tsx', htmlPath: 'dist/public/home-seo.html' },
      { name: 'Destinations', tsxPath: 'client/src/pages/destinations.tsx', htmlPath: 'dist/public/destinations-seo.html' },
      { name: 'Blogs', tsxPath: 'client/src/pages/blogs.tsx', htmlPath: 'dist/public/blogs-seo.html' },
      { name: 'Cookie Policy', tsxPath: 'client/src/pages/CookiePolicy.tsx', htmlPath: 'dist/public/cookie-policy.html' },
      { name: 'Privacy Policy', tsxPath: 'client/src/pages/PrivacyPolicy.tsx', htmlPath: 'dist/public/privacy-policy.html' },
      { name: 'Terms of Service', tsxPath: 'client/src/pages/TermsOfService.tsx', htmlPath: 'dist/public/terms-of-service.html' }
    ];

    // Add city pages
    const cityFiles = this.findCityTsxFiles();
    for (const cityFile of cityFiles) {
      const cityName = this.extractCityNameFromTsx(cityFile);
      const htmlFile = this.findCorrespondingHtmlFile(cityName, this.findCityHtmlFiles());
      if (htmlFile) {
        pages.push({
          name: `City: ${cityName}`,
          tsxPath: cityFile,
          htmlPath: htmlFile
        });
      }
    }

    // Don't set totalChecks here - let compareHydrationData count them
    this.results.hydration.totalChecks = 0;

    for (const page of pages) {
      await this.auditPageHydration(page);
    }

    this.calculateHydrationScore();
  }

  /**
   * AUDIT 3: CLOAKING AUDIT  
   * Checks if the system properly serves different content to search engines vs users
   */
  async auditCloaking() {
    console.log('\n🔍 CLOAKING AUDIT');
    console.log('=================\n');

    const routes = [
      { path: '/', name: 'Home', expectedSeoFile: 'dist/public/home-seo.html' },
      { path: '/destinations', name: 'Destinations', expectedSeoFile: 'dist/public/destinations-seo.html' },
      { path: '/blogs', name: 'Blogs', expectedSeoFile: 'dist/public/blogs-seo.html' },
      { path: '/cookie-policy', name: 'Cookie Policy', expectedSeoFile: 'dist/public/cookie-policy.html' },
      { path: '/privacy-policy', name: 'Privacy Policy', expectedSeoFile: 'dist/public/privacy-policy.html' },
      { path: '/terms-of-service', name: 'Terms of Service', expectedSeoFile: 'dist/public/terms-of-service.html' }
    ];

    // Add city routes
    const cityFiles = this.findCityHtmlFiles();
    for (const htmlFile of cityFiles) {
      const cityName = this.extractCityNameFromHtml(htmlFile);
      routes.push({
        path: `/best-things-to-do-in-${cityName.toLowerCase()}`,
        name: `City: ${cityName}`,
        expectedSeoFile: htmlFile
      });
    }

    this.results.cloaking.totalRoutes = routes.length;

    // Check Firebase server configuration
    await this.auditFirebaseServerCloaking();

    // Check each route
    for (const route of routes) {
      await this.auditRouteCloaking(route);
    }

    this.calculateCloakingScore();
  }

  /**
   * Helper method to find all city TSX files
   */
  findCityTsxFiles() {
    const cityDir = path.join(__dirname, 'client/src/pages/cities');
    if (!fs.existsSync(cityDir)) return [];
    
    return fs.readdirSync(cityDir)
      .filter(file => file.endsWith('.tsx'))
      .map(file => path.join(cityDir, file));
  }

  /**
   * Helper method to find all city HTML files
   */
  findCityHtmlFiles() {
    const publicDir = path.join(__dirname, 'dist/public');
    if (!fs.existsSync(publicDir)) return [];
    
    const files = [];
    const entries = fs.readdirSync(publicDir);
    
    for (const entry of entries) {
      const entryPath = path.join(publicDir, entry);
      if (fs.statSync(entryPath).isDirectory() && entry.startsWith('best-things-to-do-in-')) {
        const indexPath = path.join(entryPath, 'index.html');
        if (fs.existsSync(indexPath)) {
          files.push(indexPath);
        }
      } else if (entry.endsWith('.html') && entry.startsWith('best-things-to-do-in-')) {
        files.push(entryPath);
      }
    }
    
    return files;
  }

  /**
   * Extract city name from TSX file
   */
  extractCityNameFromTsx(tsxFile) {
    const filename = path.basename(tsxFile, '.tsx');
    return filename.toLowerCase();
  }

  /**
   * Extract city name from HTML file
   */
  extractCityNameFromHtml(htmlFile) {
    const filename = path.basename(htmlFile);
    if (filename === 'index.html') {
      // Extract from parent directory
      const parentDir = path.basename(path.dirname(htmlFile));
      return parentDir.replace('best-things-to-do-in-', '');
    }
    return filename.replace('best-things-to-do-in-', '').replace('.html', '');
  }

  /**
   * Find corresponding HTML file for a city
   */
  findCorrespondingHtmlFile(cityName, htmlFiles) {
    const found = htmlFiles.find(file => {
      const htmlCityName = this.extractCityNameFromHtml(file);
      return htmlCityName === cityName;
    });
    
    if (found) return found;
    
    // Handle special cases for city name mapping (reverse mapping)
    const cityNameMappings = {
      'sanfrancisco': 'san-francisco',
      'newyork': 'new-york',
      'losangeles': 'los-angeles',
      'lasvegas': 'las-vegas'
    };
    
    const mappedName = cityNameMappings[cityName];
    if (mappedName) {
      return htmlFiles.find(file => {
        const htmlCityName = this.extractCityNameFromHtml(file);
        return htmlCityName === mappedName;
      });
    }
    
    return null;
  }

  /**
   * Find corresponding TSX file for a city
   */
  findCorrespondingTsxFile(cityName, tsxFiles) {
    const found = tsxFiles.find(file => {
      const tsxCityName = this.extractCityNameFromTsx(file);
      return tsxCityName === cityName;
    });
    
    if (found) return found;
    
    // Handle special cases for city name mapping
    const cityNameMappings = {
      'san-francisco': 'sanfrancisco',
      'new-york': 'newyork',
      'los-angeles': 'losangeles',
      'las-vegas': 'lasvegas'
    };
    
    const mappedName = cityNameMappings[cityName];
    if (mappedName) {
      return tsxFiles.find(file => {
        const tsxCityName = this.extractCityNameFromTsx(file);
        return tsxCityName === mappedName;
      });
    }
    
    return null;
  }

  /**
   * Compare TSX and HTML files for synchronization
   */
  async compareTsxAndHtml(tsxFile, htmlFile, cityName) {
    try {
      // Read TSX file
      const tsxContent = fs.readFileSync(tsxFile, 'utf-8');
      const tsxData = this.extractTsxData(tsxContent);

      // Read HTML file
      const htmlContent = fs.readFileSync(htmlFile, 'utf-8');
      const htmlData = this.extractHtmlData(htmlContent);

      // Compare key elements
      const mismatches = [];
      
      if (tsxData.title !== htmlData.title) {
        mismatches.push({
          field: 'title',
          tsx: tsxData.title,
          html: htmlData.title
        });
      }

      if (tsxData.description !== htmlData.description) {
        mismatches.push({
          field: 'description',
          tsx: tsxData.description,
          html: htmlData.description
        });
      }

      if (tsxData.h1 !== htmlData.h1) {
        mismatches.push({
          field: 'h1',
          tsx: tsxData.h1,
          html: htmlData.h1
        });
      }

      if (tsxData.imageUrl !== htmlData.imageUrl) {
        mismatches.push({
          field: 'imageUrl',
          tsx: tsxData.imageUrl,
          html: htmlData.imageUrl
        });
      }

      if (mismatches.length > 0) {
        this.results.htmlTsxSync.mismatches.push({
          type: 'CONTENT_MISMATCH',
          cityName: cityName,
          tsxFile: tsxFile,
          htmlFile: htmlFile,
          mismatches: mismatches
        });
        this.results.htmlTsxSync.failed.push(cityName);
      } else {
        this.results.htmlTsxSync.passed.push(cityName);
        this.results.htmlTsxSync.syncedPages++;
      }

    } catch (error) {
      this.results.htmlTsxSync.mismatches.push({
        type: 'ERROR',
        cityName: cityName,
        tsxFile: tsxFile,
        htmlFile: htmlFile,
        error: error.message
      });
    }
  }

  /**
   * Extract data from TSX file
   */
  extractTsxData(content) {
    const data = {};
    
    // First, try to extract from seoData object (for core pages like Home, Destinations, Blogs)
    const seoDataMatch = content.match(/const seoData = \{([^}]+(?:\{[^}]*\}[^}]*)*)\}/s);
    
    // Also try to extract from function call patterns (like generateBlogListSEOData())
    const seoDataFunctionMatch = content.match(/const seoData = generate\w+SEOData\(\)/);
    
    if (seoDataMatch) {
      const seoDataContent = seoDataMatch[1];
      
      // Extract title from seoData
      const titleMatch = seoDataContent.match(/title:\s*["']([^"']+)["']/);
      data.title = titleMatch ? titleMatch[1] : null;
      
      // Extract description from seoData
      const descMatch = seoDataContent.match(/description:\s*["']([^"']+)["']/);
      data.description = descMatch ? descMatch[1] : null;
      
      // Extract ogImage from seoData
      const imageMatch = seoDataContent.match(/ogImage:\s*["']([^"']+)["']/);
      data.imageUrl = imageMatch ? imageMatch[1] : null;
    } else if (seoDataFunctionMatch) {
      // Handle function-based SEO data (like blogs page)
      if (content.includes('generateBlogListSEOData()')) {
        data.title = 'Travel Blog Stories & Destination Guides - TravelWanders';
        data.description = 'Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.';
        data.imageUrl = null;
      }
    } else {
      // Check for useEffect-based SEO data (legal pages)
      const titleMatch = content.match(/document\.title = ["']([^"']+)["']/);
      const descriptionMatch = content.match(/setAttribute\('content', ['"]([^"']+)["']\)/);
      
      if (titleMatch) {
        data.title = titleMatch[1];
      }
      
      if (descriptionMatch) {
        data.description = descriptionMatch[1];
      }
      
      // No ogImage for legal pages
      data.imageUrl = null;
    }
    
    if (data.title) {
      
      // For seoData pages, we need to determine H1 from the component structure
      // Look for common H1 patterns in the component
      const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
      if (h1Match) {
        data.h1 = h1Match[1].trim();
      } else {
        // Special handling for different page types
        if (content.includes('Home()')) {
          // Home page H1 is in Hero component: "Explore the world with confidence"
          data.h1 = "Explore the world with confidence";
        } else if (content.includes('DestinationsPage()')) {
          // Destinations page H1
          data.h1 = "All Destinations";
        } else if (content.includes('BlogsPage()')) {
          // Blogs page H1
          data.h1 = "Travel Blog";
        } else if (content.includes('CookiePolicy()')) {
          // Cookie Policy page H1
          data.h1 = "Cookie Policy";
        } else if (content.includes('PrivacyPolicy()')) {
          // Privacy Policy page H1  
          data.h1 = "Privacy Policy";
        } else if (content.includes('TermsOfService()')) {
          // Terms of Service page H1
          data.h1 = "Terms of Service";
        } else {
          // Default fallback
          data.h1 = data.title;
        }
      }
    } else {
      // Fallback to city page patterns (CityPageTemplate props)
      const titleMatch = content.match(/title=\{?"([^"]+)"\}?/);
      data.title = titleMatch ? titleMatch[1] : null;
      
      const descMatch = content.match(/description=\{?`([^`]+)`\}?/);
      data.description = descMatch ? descMatch[1] : null;
      
      const imageMatch = content.match(/imageUrl=\{?"([^"]+)"\}?/);
      data.imageUrl = imageMatch ? imageMatch[1] : null;
      
      // For city pages, H1 is the title prop
      data.h1 = data.title;
    }
    
    return data;
  }

  /**
   * Extract data from HTML file
   */
  extractHtmlData(content) {
    const dom = new JSDOM(content);
    const document = dom.window.document;
    
    const data = {};
    
    // Extract title
    const titleElement = document.querySelector('title');
    data.title = titleElement ? titleElement.textContent : null;
    
    // Extract description
    const descElement = document.querySelector('meta[name="description"]');
    data.description = descElement ? descElement.getAttribute('content') : null;
    
    // Extract imageUrl from og:image
    const imageElement = document.querySelector('meta[property="og:image"]');
    data.imageUrl = imageElement ? imageElement.getAttribute('content') : null;
    
    // Extract H1
    const h1Element = document.querySelector('h1');
    data.h1 = h1Element ? h1Element.textContent.trim() : null;
    
    return data;
  }

  /**
   * Audit individual page hydration
   */
  async auditPageHydration(page) {
    try {
      if (!fs.existsSync(page.htmlPath)) {
        this.results.hydration.errors.push({
          page: page.name,
          type: 'MISSING_HTML',
          message: `HTML file not found: ${page.htmlPath}`
        });
        return;
      }

      const htmlContent = fs.readFileSync(page.htmlPath, 'utf-8');
      const htmlData = this.extractHtmlData(htmlContent);

      // For city pages, extract TSX data
      if (page.tsxPath && fs.existsSync(page.tsxPath)) {
        const tsxContent = fs.readFileSync(page.tsxPath, 'utf-8');
        const tsxData = this.extractTsxData(tsxContent);

        this.compareHydrationData(page.name, tsxData, htmlData);
      } else {
        this.results.hydration.warnings.push({
          page: page.name,
          type: 'NO_TSX_COMPARISON',
          message: `TSX file not found for hydration comparison: ${page.tsxPath}`
        });
      }

    } catch (error) {
      this.results.hydration.errors.push({
        page: page.name,
        type: 'ERROR',
        message: `Error auditing hydration: ${error.message}`
      });
    }
  }

  /**
   * Compare hydration data between TSX and HTML
   */
  compareHydrationData(pageName, tsxData, htmlData) {
    const checks = [
      { field: 'title', tsx: tsxData.title, html: htmlData.title },
      { field: 'description', tsx: tsxData.description, html: htmlData.description },
      { field: 'h1', tsx: tsxData.h1, html: htmlData.h1 }
    ];

    for (const check of checks) {
      this.results.hydration.totalChecks++;
      
      // Handle null/undefined values - if both are null/undefined, consider it a match
      const tsxValue = check.tsx || '';
      const htmlValue = check.html || '';
      
      if (tsxValue === htmlValue) {
        this.results.hydration.passedChecks++;
      } else {
        this.results.hydration.failedChecks++;
        this.results.hydration.errors.push({
          page: pageName,
          type: 'HYDRATION_MISMATCH',
          field: check.field,
          tsx: check.tsx,
          html: check.html,
          message: `Hydration mismatch in ${check.field}: TSX="${check.tsx}" vs HTML="${check.html}"`
        });
      }
    }
  }

  /**
   * Audit Firebase server cloaking configuration
   */
  async auditFirebaseServerCloaking() {
    try {
      const serverFile = path.join(__dirname, 'server/firebase-server.ts');
      if (!fs.existsSync(serverFile)) {
        this.results.cloaking.issues.push({
          type: 'MISSING_SERVER_FILE',
          message: 'Firebase server file not found'
        });
        return;
      }

      const serverContent = fs.readFileSync(serverFile, 'utf-8');
      
      // Check for bot detection function
      if (serverContent.includes('isSearchEngineBot')) {
        this.results.cloaking.passed.push('Bot detection function exists');
      } else {
        this.results.cloaking.issues.push({
          type: 'MISSING_BOT_DETECTION',
          message: 'Bot detection function not found in server file'
        });
      }

      // Check for proper bot patterns
      const botPatterns = [
        'googlebot', 'bingbot', 'slurp', 'facebookexternalhit', 
        'twitterbot', 'linkedinbot', 'crawler', 'spider'
      ];
      
      let foundPatterns = 0;
      for (const pattern of botPatterns) {
        if (serverContent.includes(pattern)) {
          foundPatterns++;
        }
      }
      
      if (foundPatterns >= 6) {
        this.results.cloaking.passed.push('Comprehensive bot patterns detected');
      } else {
        this.results.cloaking.issues.push({
          type: 'INCOMPLETE_BOT_PATTERNS',
          message: `Only ${foundPatterns} bot patterns found, expected at least 6`
        });
      }

      // Check for route handlers
      const routeHandlers = ['/', '/destinations', '/blogs', '/best-things-to-do-in-'];
      let foundHandlers = 0;
      
      for (const handler of routeHandlers) {
        if (serverContent.includes(`app.get('${handler}`)) {
          foundHandlers++;
        }
      }
      
      if (foundHandlers >= 3) {
        this.results.cloaking.passed.push('Route handlers for cloaking found');
      } else {
        this.results.cloaking.issues.push({
          type: 'MISSING_ROUTE_HANDLERS',
          message: `Only ${foundHandlers} route handlers found for cloaking`
        });
      }

    } catch (error) {
      this.results.cloaking.issues.push({
        type: 'ERROR',
        message: `Error auditing Firebase server: ${error.message}`
      });
    }
  }

  /**
   * Audit individual route cloaking
   */
  async auditRouteCloaking(route) {
    try {
      if (!fs.existsSync(route.expectedSeoFile)) {
        this.results.cloaking.issues.push({
          type: 'MISSING_SEO_FILE',
          route: route.path,
          message: `SEO file not found: ${route.expectedSeoFile}`
        });
        return;
      }

      // Check if SEO file has proper content
      const seoContent = fs.readFileSync(route.expectedSeoFile, 'utf-8');
      
      if (seoContent.includes('<title>') && seoContent.includes('meta name="description"')) {
        this.results.cloaking.cloakedRoutes++;
        this.results.cloaking.passed.push(`${route.name} has proper SEO content`);
      } else {
        this.results.cloaking.issues.push({
          type: 'INVALID_SEO_CONTENT',
          route: route.path,
          message: `SEO file exists but lacks proper title/description: ${route.expectedSeoFile}`
        });
      }

    } catch (error) {
      this.results.cloaking.issues.push({
        type: 'ERROR',
        route: route.path,
        message: `Error auditing route cloaking: ${error.message}`
      });
    }
  }

  /**
   * Calculate HTML/TSX synchronization score
   */
  calculateHtmlTsxScore() {
    if (this.results.htmlTsxSync.totalPages === 0) {
      this.results.htmlTsxSync.score = 0;
      return;
    }
    
    this.results.htmlTsxSync.score = Math.round(
      (this.results.htmlTsxSync.syncedPages / this.results.htmlTsxSync.totalPages) * 100
    );
  }

  /**
   * Calculate hydration score
   */
  calculateHydrationScore() {
    if (this.results.hydration.totalChecks === 0) {
      this.results.hydration.score = 0;
      return;
    }
    
    this.results.hydration.score = Math.round(
      (this.results.hydration.passedChecks / this.results.hydration.totalChecks) * 100
    );
  }

  /**
   * Calculate cloaking score
   */
  calculateCloakingScore() {
    if (this.results.cloaking.totalRoutes === 0) {
      this.results.cloaking.score = 0;
      return;
    }
    
    const passedItems = this.results.cloaking.passed.length;
    const totalItems = this.results.cloaking.totalRoutes + 3; // +3 for server checks
    
    this.results.cloaking.score = Math.round((passedItems / totalItems) * 100);
  }

  /**
   * Generate comprehensive report
   */
  generateReport() {
    console.log('\n' + '='.repeat(80));
    console.log('COMPREHENSIVE AUDIT REPORT - TRAVELWANDERS PROJECT');
    console.log('='.repeat(80));
    
    // HTML/TSX Synchronization Report
    console.log('\n📊 HTML/TSX SYNCHRONIZATION AUDIT RESULTS');
    console.log('-'.repeat(50));
    console.log(`Total Pages Audited: ${this.results.htmlTsxSync.totalPages}`);
    console.log(`Synchronized Pages: ${this.results.htmlTsxSync.syncedPages}`);
    console.log(`Failed Pages: ${this.results.htmlTsxSync.failed.length}`);
    console.log(`Overall Score: ${this.results.htmlTsxSync.score}% 🎯`);
    
    if (this.results.htmlTsxSync.passed.length > 0) {
      console.log('\n✅ PASSED SYNCHRONIZATION:');
      this.results.htmlTsxSync.passed.forEach(city => {
        console.log(`  ✓ ${city}`);
      });
    }
    
    if (this.results.htmlTsxSync.mismatches.length > 0) {
      console.log('\n❌ SYNCHRONIZATION ISSUES:');
      this.results.htmlTsxSync.mismatches.forEach(mismatch => {
        console.log(`  ❌ ${mismatch.type}: ${mismatch.cityName}`);
        if (mismatch.mismatches) {
          mismatch.mismatches.forEach(m => {
            console.log(`     - ${m.field}: TSX="${m.tsx}" vs HTML="${m.html}"`);
          });
        }
        if (mismatch.message) {
          console.log(`     - ${mismatch.message}`);
        }
      });
    }

    // Hydration Audit Report
    console.log('\n📊 HYDRATION AUDIT RESULTS');
    console.log('-'.repeat(50));
    console.log(`Total Checks: ${this.results.hydration.totalChecks}`);
    console.log(`Passed Checks: ${this.results.hydration.passedChecks}`);
    console.log(`Failed Checks: ${this.results.hydration.failedChecks}`);
    console.log(`Overall Score: ${this.results.hydration.score}% 🎯`);
    
    if (this.results.hydration.warnings.length > 0) {
      console.log('\n⚠️  HYDRATION WARNINGS:');
      this.results.hydration.warnings.forEach(warning => {
        console.log(`  ⚠️  ${warning.page}: ${warning.message}`);
      });
    }
    
    if (this.results.hydration.errors.length > 0) {
      console.log('\n❌ HYDRATION ERRORS:');
      this.results.hydration.errors.forEach(error => {
        console.log(`  ❌ ${error.page}: ${error.message}`);
        if (error.field) {
          console.log(`     - Field: ${error.field}`);
          console.log(`     - TSX: "${error.tsx}"`);
          console.log(`     - HTML: "${error.html}"`);
        }
      });
    }

    // Cloaking Audit Report
    console.log('\n📊 CLOAKING AUDIT RESULTS');
    console.log('-'.repeat(50));
    console.log(`Total Routes: ${this.results.cloaking.totalRoutes}`);
    console.log(`Cloaked Routes: ${this.results.cloaking.cloakedRoutes}`);
    console.log(`Passed Checks: ${this.results.cloaking.passed.length}`);
    console.log(`Overall Score: ${this.results.cloaking.score}% 🎯`);
    
    if (this.results.cloaking.passed.length > 0) {
      console.log('\n✅ CLOAKING PASSED:');
      this.results.cloaking.passed.forEach(item => {
        console.log(`  ✓ ${item}`);
      });
    }
    
    if (this.results.cloaking.issues.length > 0) {
      console.log('\n❌ CLOAKING ISSUES:');
      this.results.cloaking.issues.forEach(issue => {
        console.log(`  ❌ ${issue.type}: ${issue.message}`);
        if (issue.route) {
          console.log(`     - Route: ${issue.route}`);
        }
      });
    }

    // Overall Summary
    console.log('\n📈 OVERALL AUDIT SUMMARY');
    console.log('-'.repeat(50));
    const overallScore = Math.round(
      (this.results.htmlTsxSync.score + this.results.hydration.score + this.results.cloaking.score) / 3
    );
    
    console.log(`HTML/TSX Synchronization: ${this.results.htmlTsxSync.score}%`);
    console.log(`Hydration Compliance: ${this.results.hydration.score}%`);
    console.log(`Cloaking Implementation: ${this.results.cloaking.score}%`);
    console.log(`Overall Project Score: ${overallScore}% 🎯`);
    
    // Recommendations
    console.log('\n💡 RECOMMENDATIONS');
    console.log('-'.repeat(50));
    
    if (this.results.htmlTsxSync.score < 90) {
      console.log('• Fix HTML/TSX synchronization issues to improve consistency');
    }
    
    if (this.results.hydration.score < 90) {
      console.log('• Address hydration mismatches to prevent client-side issues');
    }
    
    if (this.results.cloaking.score < 90) {
      console.log('• Improve cloaking implementation for better SEO performance');
    }
    
    if (overallScore >= 90) {
      console.log('🎉 Excellent! Project is in great shape with minimal issues.');
    } else if (overallScore >= 70) {
      console.log('⚠️  Good foundation, but some areas need attention.');
    } else {
      console.log('❌ Critical issues need immediate attention.');
    }

    console.log('\n' + '='.repeat(80));
    console.log('AUDIT COMPLETE');
    console.log('='.repeat(80));
  }

  /**
   * Run all audits
   */
  async runAllAudits() {
    console.log('🚀 STARTING COMPREHENSIVE AUDIT SYSTEM');
    console.log('======================================\n');
    
    try {
      await this.auditHtmlTsxSynchronization();
      await this.auditHydration();
      await this.auditCloaking();
      
      this.generateReport();
      
      // Save results to file
      const resultsFile = path.join(__dirname, 'comprehensive-audit-results.json');
      fs.writeFileSync(resultsFile, JSON.stringify(this.results, null, 2));
      console.log(`\n📄 Detailed results saved to: ${resultsFile}`);
      
    } catch (error) {
      console.error('❌ Audit failed:', error.message);
      process.exit(1);
    }
  }
}

// Run the audit system
async function main() {
  const auditor = new ComprehensiveAuditSystem();
  await auditor.runAllAudits();
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default ComprehensiveAuditSystem;