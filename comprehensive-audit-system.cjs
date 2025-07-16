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
    
    const tsxFiles = this.findCityTsxFiles();
    const htmlFiles = this.findCityHtmlFiles();
    
    console.log(`Found ${tsxFiles.length} TSX files and ${htmlFiles.length} HTML files`);
    
    for (const tsxFile of tsxFiles) {
      const cityName = this.extractCityNameFromTsx(tsxFile);
      const correspondingHtmlFile = this.findCorrespondingHtmlFile(cityName, htmlFiles);
      
      if (correspondingHtmlFile) {
        const syncResult = await this.compareTsxAndHtml(tsxFile, correspondingHtmlFile, cityName);
        
        if (syncResult.synchronized) {
          this.results.htmlTsxSync.synchronizedCities++;
        } else {
          this.results.htmlTsxSync.mismatches.push({
            cityName,
            tsxFile,
            htmlFile: correspondingHtmlFile,
            issues: syncResult.issues
          });
        }
      } else {
        this.results.htmlTsxSync.mismatches.push({
          cityName,
          tsxFile,
          htmlFile: null,
          issues: ['No corresponding HTML file found']
        });
      }
      
      this.results.htmlTsxSync.totalCities++;
    }
    
    console.log(`✅ HTML/TSX sync audit completed: ${this.results.htmlTsxSync.synchronizedCities}/${this.results.htmlTsxSync.totalCities} cities synchronized`);
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
    // Handle multiple TSX prop formats:
    // title="string", title={"string"}, title={`string`}
    const titleMatch = content.match(/title=\{?["'`]([^"'`]+)["'`]\}?/) || 
                      content.match(/title=\{["']([^"']+)["']\}/) ||
                      content.match(/title=\{`([^`]+)`\}/);
    
    const descriptionMatch = content.match(/description=\{?["'`]([^"'`]+)["'`]\}?/) || 
                            content.match(/description=\{["']([^"']+)["']\}/) ||
                            content.match(/description=\{`([^`]+)`\}/);
    
    // Look for H1 in the content, but also check common patterns
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/) ||
                    content.match(/h1.*?[>"]([^<"]+)["<]/);
    
    // For city pages, the H1 is often the same as the title
    const extractedTitle = titleMatch ? titleMatch[1] : '';
    const extractedDescription = descriptionMatch ? descriptionMatch[1] : '';
    const extractedH1 = h1Match ? h1Match[1] : extractedTitle; // fallback to title
    
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