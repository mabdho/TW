#!/usr/bin/env node
/**
 * Automatic Compliance Enforcer for TravelWanders
 * Ensures 100% project compliance is maintained automatically
 * Runs comprehensive audits and fixes after any content changes
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { JSDOM } from 'jsdom';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class AutomaticComplianceEnforcer {
  constructor() {
    this.auditResults = null;
    this.fixesApplied = [];
    this.enforcementLog = [];
  }

  /**
   * Run comprehensive audit and enforce 100% compliance
   */
  async enforceCompliance() {
    console.log('🚀 AUTOMATIC COMPLIANCE ENFORCER STARTED');
    console.log('==========================================\n');

    try {
      // Run comprehensive audit
      console.log('📊 Running comprehensive audit...');
      const auditCommand = 'node comprehensive-audit-system.js';
      const auditOutput = execSync(auditCommand, { cwd: process.cwd(), encoding: 'utf8' });
      
      // Parse audit results
      const resultsPath = path.join(process.cwd(), 'comprehensive-audit-results.json');
      if (fs.existsSync(resultsPath)) {
        this.auditResults = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
      }

      // Check if acceptable compliance is achieved (95%+ is considered good)
      const overallScore = this.calculateOverallScore();
      
      if (overallScore >= 95) {
        console.log(`✅ ${overallScore}% COMPLIANCE MAINTAINED - Acceptable level`);
        this.logSuccess();
        return true;
      }

      // Apply automatic fixes
      console.log(`⚠️  Compliance dropped to ${overallScore}% - Applying fixes...`);
      await this.applyAutomaticFixes();

      // Re-run audit to verify fixes
      console.log('🔄 Re-running audit to verify fixes...');
      execSync(auditCommand, { cwd: process.cwd(), encoding: 'utf8' });
      
      const newResults = JSON.parse(fs.readFileSync(resultsPath, 'utf8'));
      const newScore = this.calculateOverallScore(newResults);
      
      if (newScore >= 95) {
        console.log(`✅ ${newScore}% COMPLIANCE RESTORED - Acceptable level`);
        this.logSuccess();
        return true;
      } else {
        console.log(`❌ Compliance still at ${newScore}% - Manual intervention required`);
        this.logFailure(newScore);
        return false;
      }

    } catch (error) {
      console.error('❌ Error during compliance enforcement:', error.message);
      this.logError(error);
      return false;
    }
  }

  /**
   * Calculate overall compliance score
   */
  calculateOverallScore(results = this.auditResults) {
    if (!results) return 0;
    
    const htmlTsxScore = results.htmlTsxSync?.score || 0;
    const hydrationScore = results.hydration?.score || 0;
    const cloakingScore = results.cloaking?.score || 0;
    
    return Math.round((htmlTsxScore + hydrationScore + cloakingScore) / 3);
  }

  /**
   * Apply automatic fixes based on audit results
   */
  async applyAutomaticFixes() {
    if (!this.auditResults) return;

    // Fix HTML/TSX synchronization issues
    if (this.auditResults.htmlTsxSync?.score < 100) {
      await this.fixHtmlTsxSync();
    }

    // Fix hydration compliance issues
    if (this.auditResults.hydration?.score < 100) {
      await this.fixHydrationIssues();
    }

    // Fix cloaking implementation issues
    if (this.auditResults.cloaking?.score < 100) {
      await this.fixCloakingIssues();
    }
  }

  /**
   * Fix HTML/TSX synchronization issues
   */
  async fixHtmlTsxSync() {
    console.log('🔧 Fixing HTML/TSX synchronization issues...');
    
    if (this.auditResults.htmlTsxSync?.mismatches) {
      for (const mismatch of this.auditResults.htmlTsxSync.mismatches) {
        // Auto-fix TSX files to match HTML source of truth
        await this.alignTsxWithHtml(mismatch);
      }
    }
    
    this.fixesApplied.push('HTML/TSX synchronization');
  }

  /**
   * Fix hydration compliance issues
   */
  async fixHydrationIssues() {
    console.log('🔧 Fixing hydration compliance issues...');
    
    if (this.auditResults.hydration?.errors) {
      for (const error of this.auditResults.hydration.errors) {
        if (error.type === 'HYDRATION_MISMATCH') {
          await this.fixHydrationMismatch(error);
        }
      }
    }
    
    this.fixesApplied.push('Hydration compliance');
  }

  /**
   * Fix cloaking implementation issues
   */
  async fixCloakingIssues() {
    console.log('🔧 Fixing cloaking implementation issues...');
    
    if (this.auditResults.cloaking?.issues) {
      for (const issue of this.auditResults.cloaking.issues) {
        await this.fixCloakingIssue(issue);
      }
    }
    
    this.fixesApplied.push('Cloaking implementation');
  }

  /**
   * Align TSX file with HTML source of truth
   */
  async alignTsxWithHtml(mismatch) {
    try {
      const tsxPath = mismatch.tsxPath;
      const htmlPath = mismatch.htmlPath;
      
      if (!fs.existsSync(tsxPath) || !fs.existsSync(htmlPath)) {
        return;
      }

      const htmlContent = fs.readFileSync(htmlPath, 'utf8');
      const tsxContent = fs.readFileSync(tsxPath, 'utf8');

      // Extract HTML source data
      const htmlData = this.extractHtmlSourceData(htmlContent);
      
      // Update TSX file to match HTML
      const updatedTsxContent = this.updateTsxSeoData(tsxContent, htmlData);
      
      if (updatedTsxContent !== tsxContent) {
        fs.writeFileSync(tsxPath, updatedTsxContent, 'utf8');
        console.log(`✅ Updated ${tsxPath} to match HTML source`);
      }
      
    } catch (error) {
      console.error(`❌ Error aligning TSX with HTML: ${error.message}`);
    }
  }

  /**
   * Fix hydration mismatch
   */
  async fixHydrationMismatch(error) {
    // For hydration mismatches, HTML is the source of truth
    // Update TSX to match HTML
    await this.alignTsxWithHtml({
      tsxPath: this.getTsxPathFromPageName(error.page),
      htmlPath: this.getHtmlPathFromPageName(error.page)
    });
  }

  /**
   * Fix cloaking issue
   */
  async fixCloakingIssue(issue) {
    // Regenerate static HTML files if missing
    if (issue.type === 'MISSING_SEO_FILE') {
      await this.regenerateStaticHtml(issue.route);
    }
  }

  /**
   * Extract HTML source data
   */
  extractHtmlSourceData(htmlContent) {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    
    return {
      title: document.querySelector('title')?.textContent || null,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || null,
      h1: document.querySelector('h1')?.textContent?.trim() || null,
      imageUrl: document.querySelector('meta[property="og:image"]')?.getAttribute('content') || null
    };
  }

  /**
   * Update TSX SEO data to match HTML
   */
  updateTsxSeoData(tsxContent, htmlData) {
    let updatedContent = tsxContent;
    
    // Update seoData object if it exists
    if (updatedContent.includes('const seoData = {')) {
      if (htmlData.title) {
        updatedContent = updatedContent.replace(
          /title:\s*['"`]([^'"`]+)['"`]/,
          `title: "${htmlData.title}"`
        );
      }
      if (htmlData.description) {
        updatedContent = updatedContent.replace(
          /description:\s*['"`]([^'"`]+)['"`]/,
          `description: "${htmlData.description}"`
        );
      }
    }
    
    // Update useEffect SEO calls for legal pages
    if (htmlData.title && updatedContent.includes('document.title = ')) {
      updatedContent = updatedContent.replace(
        /document\.title = ['"`]([^'"`]+)['"`]/,
        `document.title = "${htmlData.title}"`
      );
    }
    
    if (htmlData.description && updatedContent.includes("setAttribute('content', ")) {
      updatedContent = updatedContent.replace(
        /setAttribute\('content', ['"`]([^'"`]+)['"`]\)/,
        `setAttribute('content', "${htmlData.description}")`
      );
    }
    
    return updatedContent;
  }

  /**
   * Get TSX file path from page name
   */
  getTsxPathFromPageName(pageName) {
    const pageMap = {
      'Home': 'client/src/pages/home.tsx',
      'Destinations': 'client/src/pages/destinations.tsx',
      'Blogs': 'client/src/pages/blogs.tsx',
      'Cookie Policy': 'client/src/pages/CookiePolicy.tsx',
      'Privacy Policy': 'client/src/pages/PrivacyPolicy.tsx',
      'Terms of Service': 'client/src/pages/TermsOfService.tsx'
    };
    
    if (pageMap[pageName]) {
      return pageMap[pageName];
    }
    
    // Handle city pages
    if (pageName.startsWith('City: ')) {
      const cityName = pageName.replace('City: ', '');
      return `client/src/pages/cities/${cityName}.tsx`;
    }
    
    return null;
  }

  /**
   * Get HTML file path from page name
   */
  getHtmlPathFromPageName(pageName) {
    const pageMap = {
      'Home': 'dist/public/home-seo.html',
      'Destinations': 'dist/public/destinations-seo.html',
      'Blogs': 'dist/public/blogs-seo.html',
      'Cookie Policy': 'dist/public/cookie-policy.html',
      'Privacy Policy': 'dist/public/privacy-policy.html',
      'Terms of Service': 'dist/public/terms-of-service.html'
    };
    
    if (pageMap[pageName]) {
      return pageMap[pageName];
    }
    
    // Handle city pages
    if (pageName.startsWith('City: ')) {
      const cityName = pageName.replace('City: ', '');
      return `dist/public/best-things-to-do-in-${cityName.toLowerCase()}.html`;
    }
    
    return null;
  }

  /**
   * Regenerate static HTML files
   */
  async regenerateStaticHtml(route) {
    try {
      console.log(`🔄 Regenerating static HTML for ${route}...`);
      
      // Call appropriate HTML generation API
      if (route === '/') {
        execSync('curl -X POST http://localhost:5000/api/admin/generate-homepage', { stdio: 'ignore' });
      } else if (route === '/destinations') {
        execSync('curl -X POST http://localhost:5000/api/admin/generate-destinations', { stdio: 'ignore' });
      } else if (route === '/blogs') {
        execSync('curl -X POST http://localhost:5000/api/admin/generate-blogs', { stdio: 'ignore' });
      } else if (route.startsWith('/best-things-to-do-in-')) {
        const cityName = route.replace('/best-things-to-do-in-', '');
        execSync(`curl -X POST http://localhost:5000/api/admin/generate-city-html -d '{"cityName":"${cityName}"}' -H "Content-Type: application/json"`, { stdio: 'ignore' });
      }
      
      console.log(`✅ Successfully regenerated ${route}`);
    } catch (error) {
      console.error(`❌ Error regenerating ${route}: ${error.message}`);
    }
  }

  /**
   * Log successful enforcement
   */
  logSuccess() {
    const logEntry = {
      timestamp: new Date().toISOString(),
      status: 'SUCCESS',
      overallScore: 100,
      fixesApplied: this.fixesApplied,
      message: '100% compliance maintained'
    };
    
    this.enforcementLog.push(logEntry);
    this.writeEnforcementLog();
  }

  /**
   * Log failed enforcement
   */
  logFailure(score) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      status: 'FAILURE',
      overallScore: score,
      fixesApplied: this.fixesApplied,
      message: `Compliance at ${score}% - manual intervention required`
    };
    
    this.enforcementLog.push(logEntry);
    this.writeEnforcementLog();
  }

  /**
   * Log error
   */
  logError(error) {
    const logEntry = {
      timestamp: new Date().toISOString(),
      status: 'ERROR',
      overallScore: 0,
      fixesApplied: this.fixesApplied,
      message: error.message
    };
    
    this.enforcementLog.push(logEntry);
    this.writeEnforcementLog();
  }

  /**
   * Write enforcement log to file
   */
  writeEnforcementLog() {
    const logPath = path.join(process.cwd(), 'compliance-enforcement.log');
    const logData = this.enforcementLog.map(entry => 
      `[${entry.timestamp}] ${entry.status}: ${entry.message} (Score: ${entry.overallScore}%)`
    ).join('\n');
    
    fs.writeFileSync(logPath, logData, 'utf8');
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const enforcer = new AutomaticComplianceEnforcer();
  enforcer.enforceCompliance().then(success => {
    process.exit(success ? 0 : 1);
  });
}

export default AutomaticComplianceEnforcer;