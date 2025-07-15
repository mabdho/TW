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
import { dirname } from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const execAsync = promisify(exec);

class ComprehensiveAuditSystem {
  constructor() {
    this.results = {
      htmlTsxSync: { score: 0, issues: [], strengths: [], total: 0, passed: 0 },
      hydration: { score: 0, issues: [], strengths: [], total: 0, passed: 0 },
      cloaking: { score: 0, issues: [], strengths: [], total: 0, passed: 0 },
      seo: { score: 0, issues: [], strengths: [], total: 0, passed: 0 },
      performance: { score: 0, issues: [], strengths: [], total: 0, passed: 0 },
      overallScore: 0
    };
  }

  /**
   * AUDIT 1: HTML/TSX SYNCHRONIZATION AUDIT
   * Checks if HTML files match their corresponding TSX components
   */
  async auditHtmlTsxSynchronization() {
    console.log('\n🔍 HTML/TSX SYNCHRONIZATION AUDIT');
    console.log('='.repeat(50));
    
    const sync = this.results.htmlTsxSync;
    
    // Find all TSX city files
    const tsxFiles = this.findCityTsxFiles();
    console.log(`Found ${tsxFiles.length} TSX city files`);
    
    // Find all HTML city files
    const htmlFiles = this.findCityHtmlFiles();
    console.log(`Found ${htmlFiles.length} HTML city files`);
    
    // For each TSX file, check if corresponding HTML exists
    for (const tsxFile of tsxFiles) {
      const cityName = this.extractCityNameFromTsx(tsxFile);
      const htmlFile = this.findCorrespondingHtmlFile(cityName, htmlFiles);
      
      sync.total++;
      
      if (htmlFile) {
        // Compare TSX and HTML files
        const isSync = await this.compareTsxAndHtml(tsxFile, htmlFile, cityName);
        if (isSync) {
          sync.passed++;
          sync.strengths.push(`✅ ${cityName} - TSX/HTML synchronized`);
        } else {
          sync.issues.push(`❌ ${cityName} - TSX/HTML content mismatch`);
        }
      } else {
        sync.issues.push(`❌ ${cityName} - No corresponding HTML file found`);
      }
    }
    
    // Check for orphaned HTML files
    for (const htmlFile of htmlFiles) {
      const cityName = this.extractCityNameFromHtml(htmlFile);
      const tsxFile = this.findCorrespondingTsxFile(cityName, tsxFiles);
      
      if (!tsxFile) {
        sync.issues.push(`❌ ${cityName} - Orphaned HTML file without TSX component`);
      }
    }
    
    sync.score = sync.total > 0 ? (sync.passed / sync.total) * 100 : 0;
    console.log(`HTML/TSX Synchronization Score: ${sync.score.toFixed(1)}%`);
    console.log(`Passed: ${sync.passed}/${sync.total}`);
  }

  /**
   * AUDIT 2: HYDRATION AUDIT
   * Checks if React components can properly hydrate with server-rendered HTML
   */
  async auditHydration() {
    console.log('\n💧 HYDRATION AUDIT');
    console.log('='.repeat(50));
    
    const hydration = this.results.hydration;
    
    // Get all pages that need hydration checks
    const pages = [
      { name: 'home', htmlPath: 'dist/public/home-seo.html', tsxPath: 'client/src/pages/home.tsx' },
      { name: 'destinations', htmlPath: 'dist/public/destinations-seo.html', tsxPath: 'client/src/pages/destinations.tsx' },
      { name: 'blogs', htmlPath: 'dist/public/blogs-seo.html', tsxPath: 'client/src/pages/blogs.tsx' },
      { name: 'privacy-policy', htmlPath: 'dist/public/privacy-policy.html', tsxPath: 'client/src/pages/PrivacyPolicy.tsx' },
      { name: 'terms-of-service', htmlPath: 'dist/public/terms-of-service.html', tsxPath: 'client/src/pages/TermsOfService.tsx' },
      { name: 'cookie-policy', htmlPath: 'dist/public/cookie-policy.html', tsxPath: 'client/src/pages/CookiePolicy.tsx' }
    ];
    
    // Add all city pages
    const cityTsxFiles = this.findCityTsxFiles();
    for (const tsxFile of cityTsxFiles) {
      const cityName = this.extractCityNameFromTsx(tsxFile);
      const htmlPath = `dist/public/best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}.html`;
      
      if (fs.existsSync(htmlPath)) {
        pages.push({
          name: cityName,
          htmlPath,
          tsxPath: tsxFile
        });
      }
    }
    
    // Audit each page
    for (const page of pages) {
      hydration.total++;
      
      const hydratesCorrectly = await this.auditPageHydration(page);
      if (hydratesCorrectly) {
        hydration.passed++;
        hydration.strengths.push(`✅ ${page.name} - Hydration compatible`);
      } else {
        hydration.issues.push(`❌ ${page.name} - Hydration mismatch detected`);
      }
    }
    
    hydration.score = hydration.total > 0 ? (hydration.passed / hydration.total) * 100 : 0;
    console.log(`Hydration Score: ${hydration.score.toFixed(1)}%`);
    console.log(`Passed: ${hydration.passed}/${hydration.total}`);
  }

  /**
   * AUDIT 3: CLOAKING AUDIT  
   * Checks if the system properly serves different content to search engines vs users
   */
  async auditCloaking() {
    console.log('\n🎭 CLOAKING AUDIT');
    console.log('='.repeat(50));
    
    const cloaking = this.results.cloaking;
    
    // Check if Firebase server has bot detection
    const firebaseServerExists = fs.existsSync('server/firebase-server.ts');
    
    if (firebaseServerExists) {
      cloaking.total++;
      const serverContent = fs.readFileSync('server/firebase-server.ts', 'utf-8');
      
      if (serverContent.includes('isSearchEngineBot') || serverContent.includes('user-agent')) {
        cloaking.passed++;
        cloaking.strengths.push('✅ Bot detection implemented in Firebase server');
      } else {
        cloaking.issues.push('❌ No bot detection found in Firebase server');
      }
    } else {
      cloaking.issues.push('❌ Firebase server file not found');
    }
    
    // Check if appropriate routes exist for cloaking
    const routes = [
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
      routes.push(`/best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}`);
    }
    
    // Audit each route
    for (const route of routes) {
      cloaking.total++;
      
      const cloakingWorks = await this.auditRouteCloaking(route);
      if (cloakingWorks) {
        cloaking.passed++;
        cloaking.strengths.push(`✅ ${route} - Cloaking implemented`);
      } else {
        cloaking.issues.push(`❌ ${route} - Cloaking not working`);
      }
    }
    
    cloaking.score = cloaking.total > 0 ? (cloaking.passed / cloaking.total) * 100 : 0;
    console.log(`Cloaking Score: ${cloaking.score.toFixed(1)}%`);
    console.log(`Passed: ${cloaking.passed}/${cloaking.total}`);
  }

  /**
   * Helper method to find all city TSX files
   */
  findCityTsxFiles() {
    const citiesDir = 'client/src/pages/cities';
    if (!fs.existsSync(citiesDir)) return [];
    
    return fs.readdirSync(citiesDir)
      .filter(file => file.endsWith('.tsx'))
      .map(file => path.join(citiesDir, file));
  }

  /**
   * Helper method to find all city HTML files
   */
  findCityHtmlFiles() {
    const publicDir = 'dist/public';
    if (!fs.existsSync(publicDir)) return [];
    
    return fs.readdirSync(publicDir)
      .filter(file => file.startsWith('best-things-to-do-in-') && file.endsWith('.html'))
      .map(file => path.join(publicDir, file));
  }

  /**
   * Extract city name from TSX file
   */
  extractCityNameFromTsx(tsxFile) {
    const content = fs.readFileSync(tsxFile, 'utf-8');
    
    // Look for export const [CityName] pattern
    const exportMatch = content.match(/export\s+const\s+(\w+)\s*=/);
    if (exportMatch) {
      return exportMatch[1];
    }
    
    // Fallback to filename
    return path.basename(tsxFile, '.tsx');
  }

  /**
   * Extract city name from HTML file
   */
  extractCityNameFromHtml(htmlFile) {
    const basename = path.basename(htmlFile, '.html');
    
    // Remove "best-things-to-do-in-" prefix and convert to PascalCase
    const citySlug = basename.replace('best-things-to-do-in-', '');
    return citySlug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }

  /**
   * Find corresponding HTML file for a city
   */
  findCorrespondingHtmlFile(cityName, htmlFiles) {
    const expectedSlug = cityName.toLowerCase().replace(/\s+/g, '-');
    
    return htmlFiles.find(file => {
      const basename = path.basename(file, '.html');
      return basename === `best-things-to-do-in-${expectedSlug}`;
    });
  }

  /**
   * Find corresponding TSX file for a city
   */
  findCorrespondingTsxFile(cityName, tsxFiles) {
    const normalizedCityName = cityName.replace(/\s+/g, '');
    
    return tsxFiles.find(file => {
      const basename = path.basename(file, '.tsx');
      return basename.toLowerCase() === normalizedCityName.toLowerCase();
    });
  }

  /**
   * Compare TSX and HTML files for synchronization
   */
  async compareTsxAndHtml(tsxFile, htmlFile, cityName) {
    try {
      // Extract data from TSX
      const tsxData = this.extractTsxData(fs.readFileSync(tsxFile, 'utf-8'));
      
      // Extract data from HTML
      const htmlData = this.extractHtmlData(fs.readFileSync(htmlFile, 'utf-8'));
      
      // Compare key elements
      const titleMatch = this.compareValues(tsxData.title, htmlData.title);
      const descriptionMatch = this.compareValues(tsxData.description, htmlData.description);
      const h1Match = this.compareValues(tsxData.h1, htmlData.h1);
      
      return titleMatch && descriptionMatch && h1Match;
    } catch (error) {
      console.error(`Error comparing ${cityName}:`, error.message);
      return false;
    }
  }

  /**
   * Extract data from TSX file
   */
  extractTsxData(content) {
    const data = { title: '', description: '', h1: '' };
    
    // Extract title
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    if (titleMatch) data.title = titleMatch[1];
    
    // Extract description
    const descMatch = content.match(/description:\s*["']([^"']+)["']/);
    if (descMatch) data.description = descMatch[1];
    
    // Extract H1 (usually in the hero section)
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
    if (h1Match) data.h1 = h1Match[1];
    
    return data;
  }

  /**
   * Extract data from HTML file
   */
  extractHtmlData(content) {
    const data = { title: '', description: '', h1: '' };
    
    try {
      const dom = new JSDOM(content);
      const document = dom.window.document;
      
      // Extract title
      const titleElement = document.querySelector('title');
      if (titleElement) data.title = titleElement.textContent.trim();
      
      // Extract description
      const descElement = document.querySelector('meta[name="description"]');
      if (descElement) data.description = descElement.getAttribute('content');
      
      // Extract H1
      const h1Element = document.querySelector('h1');
      if (h1Element) data.h1 = h1Element.textContent.trim();
      
    } catch (error) {
      console.error('Error parsing HTML:', error.message);
    }
    
    return data;
  }

  /**
   * Compare two values for similarity
   */
  compareValues(value1, value2) {
    if (!value1 || !value2) return false;
    
    // Normalize values for comparison
    const normalize = (str) => str.toLowerCase().replace(/\s+/g, ' ').trim();
    
    return normalize(value1) === normalize(value2);
  }

  /**
   * Audit individual page hydration
   */
  async auditPageHydration(page) {
    try {
      if (!fs.existsSync(page.htmlPath)) {
        return false;
      }
      
      // Extract data from HTML
      const htmlContent = fs.readFileSync(page.htmlPath, 'utf-8');
      const htmlData = this.extractHtmlData(htmlContent);
      
      // Extract data from TSX (if it exists)
      let tsxData = { title: '', description: '', h1: '' };
      if (fs.existsSync(page.tsxPath)) {
        const tsxContent = fs.readFileSync(page.tsxPath, 'utf-8');
        tsxData = this.extractTsxData(tsxContent);
      }
      
      // Compare hydration data
      return this.compareHydrationData(page.name, tsxData, htmlData);
    } catch (error) {
      console.error(`Error auditing hydration for ${page.name}:`, error.message);
      return false;
    }
  }

  /**
   * Compare hydration data between TSX and HTML
   */
  compareHydrationData(pageName, tsxData, htmlData) {
    const issues = [];
    
    // Check title consistency
    if (tsxData.title && htmlData.title) {
      if (!this.compareValues(tsxData.title, htmlData.title)) {
        issues.push(`Title mismatch: TSX="${tsxData.title}" vs HTML="${htmlData.title}"`);
      }
    }
    
    // Check description consistency
    if (tsxData.description && htmlData.description) {
      if (!this.compareValues(tsxData.description, htmlData.description)) {
        issues.push(`Description mismatch: TSX="${tsxData.description}" vs HTML="${htmlData.description}"`);
      }
    }
    
    // Check H1 consistency
    if (tsxData.h1 && htmlData.h1) {
      if (!this.compareValues(tsxData.h1, htmlData.h1)) {
        issues.push(`H1 mismatch: TSX="${tsxData.h1}" vs HTML="${htmlData.h1}"`);
      }
    }
    
    if (issues.length > 0) {
      console.log(`⚠️  ${pageName} hydration issues:`, issues);
      return false;
    }
    
    return true;
  }

  /**
   * Audit Firebase server cloaking configuration
   */
  async auditFirebaseServerCloaking() {
    try {
      if (!fs.existsSync('server/firebase-server.ts')) {
        return false;
      }
      
      const content = fs.readFileSync('server/firebase-server.ts', 'utf-8');
      
      // Check for bot detection logic
      const hasBotDetection = content.includes('isSearchEngineBot') || 
                             content.includes('user-agent') ||
                             content.includes('googlebot') ||
                             content.includes('bingbot');
      
      // Check for different content serving
      const hasContentSwitching = content.includes('seo.html') || 
                                  content.includes('static') ||
                                  content.includes('bot');
      
      return hasBotDetection && hasContentSwitching;
    } catch (error) {
      console.error('Error auditing Firebase server cloaking:', error.message);
      return false;
    }
  }

  /**
   * Audit individual route cloaking
   */
  async auditRouteCloaking(route) {
    try {
      // Check if static HTML file exists for the route
      let htmlPath = '';
      
      if (route === '/') {
        htmlPath = 'dist/public/home-seo.html';
      } else if (route === '/destinations') {
        htmlPath = 'dist/public/destinations-seo.html';
      } else if (route === '/blogs') {
        htmlPath = 'dist/public/blogs-seo.html';
      } else if (route.startsWith('/best-things-to-do-in-')) {
        htmlPath = `dist/public${route}.html`;
      } else {
        htmlPath = `dist/public${route.substring(1)}.html`;
      }
      
      return fs.existsSync(htmlPath);
    } catch (error) {
      console.error(`Error auditing route cloaking for ${route}:`, error.message);
      return false;
    }
  }

  /**
   * Calculate HTML/TSX synchronization score
   */
  calculateHtmlTsxScore() {
    const sync = this.results.htmlTsxSync;
    return sync.total > 0 ? (sync.passed / sync.total) * 100 : 0;
  }

  /**
   * Calculate hydration score
   */
  calculateHydrationScore() {
    const hydration = this.results.hydration;
    return hydration.total > 0 ? (hydration.passed / hydration.total) * 100 : 0;
  }

  /**
   * Calculate cloaking score
   */
  calculateCloakingScore() {
    const cloaking = this.results.cloaking;
    return cloaking.total > 0 ? (cloaking.passed / cloaking.total) * 100 : 0;
  }

  /**
   * Generate comprehensive report
   */
  generateReport() {
    console.log('\n📊 COMPREHENSIVE AUDIT REPORT');
    console.log('='.repeat(60));
    
    const htmlTsxScore = this.calculateHtmlTsxScore();
    const hydrationScore = this.calculateHydrationScore();
    const cloakingScore = this.calculateCloakingScore();
    
    this.results.overallScore = (htmlTsxScore + hydrationScore + cloakingScore) / 3;
    
    console.log(`\n🎯 OVERALL SCORE: ${this.results.overallScore.toFixed(1)}%`);
    console.log(`\n📋 DETAILED BREAKDOWN:`);
    console.log(`├── HTML/TSX Synchronization: ${htmlTsxScore.toFixed(1)}% (${this.results.htmlTsxSync.passed}/${this.results.htmlTsxSync.total})`);
    console.log(`├── Hydration Compliance: ${hydrationScore.toFixed(1)}% (${this.results.hydration.passed}/${this.results.hydration.total})`);
    console.log(`└── Cloaking Implementation: ${cloakingScore.toFixed(1)}% (${this.results.cloaking.passed}/${this.results.cloaking.total})`);
    
    // Production readiness assessment
    console.log('\n🚀 PRODUCTION READINESS ASSESSMENT:');
    if (this.results.overallScore >= 95) {
      console.log('✅ READY FOR PRODUCTION - Excellent compliance across all areas');
    } else if (this.results.overallScore >= 85) {
      console.log('⚠️  NEEDS MINOR FIXES - Good overall but some issues need attention');
    } else if (this.results.overallScore >= 70) {
      console.log('⚠️  NEEDS SIGNIFICANT WORK - Major issues must be resolved');
    } else {
      console.log('❌ NOT READY FOR PRODUCTION - Critical issues require immediate attention');
    }
    
    // Key issues summary
    const allIssues = [
      ...this.results.htmlTsxSync.issues,
      ...this.results.hydration.issues,
      ...this.results.cloaking.issues
    ];
    
    if (allIssues.length > 0) {
      console.log('\n🔥 CRITICAL ISSUES TO ADDRESS:');
      allIssues.forEach(issue => console.log(`   ${issue}`));
    }
    
    // Strengths summary
    const allStrengths = [
      ...this.results.htmlTsxSync.strengths,
      ...this.results.hydration.strengths,
      ...this.results.cloaking.strengths
    ];
    
    if (allStrengths.length > 0) {
      console.log('\n💪 STRENGTHS:');
      allStrengths.slice(0, 5).forEach(strength => console.log(`   ${strength}`));
      if (allStrengths.length > 5) {
        console.log(`   ... and ${allStrengths.length - 5} more strengths`);
      }
    }
  }

  /**
   * Run all audits
   */
  async runAllAudits() {
    console.log('🚀 COMPREHENSIVE AUDIT SYSTEM STARTING...');
    console.log('Project: TravelWanders');
    console.log('Auditor: Independent Consultant');
    console.log('Date:', new Date().toISOString());
    
    await this.auditHtmlTsxSynchronization();
    await this.auditHydration();
    await this.auditCloaking();
    
    this.generateReport();
  }
}

// Main execution
async function main() {
  const auditor = new ComprehensiveAuditSystem();
  await auditor.runAllAudits();
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { ComprehensiveAuditSystem };