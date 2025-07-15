#!/usr/bin/env node
/**
 * Automatic Compliance Enforcer for TravelWanders
 * Ensures 100% project compliance is maintained automatically
 * Runs comprehensive audits and fixes after any content changes
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

class AutomaticComplianceEnforcer {
  constructor() {
    this.auditResults = {};
    this.fixActions = [];
    this.errors = [];
  }

  /**
   * Run comprehensive audit and enforce 100% compliance
   */
  async enforceCompliance() {
    console.log('🚀 ENFORCING 100% COMPLIANCE - TravelWanders');
    console.log('=============================================\n');

    try {
      // Step 1: Run comprehensive audit
      console.log('🔍 Running comprehensive compliance audit...');
      const auditOutput = execSync('node comprehensive-audit-system.js', { 
        cwd: process.cwd(), 
        encoding: 'utf8' 
      });

      // Parse audit results
      this.parseAuditResults(auditOutput);
      
      // Step 2: Calculate overall score
      const overallScore = this.calculateOverallScore();
      console.log(`📊 Current compliance score: ${overallScore}%`);

      // Step 3: Apply automatic fixes if needed
      if (overallScore < 100) {
        console.log('🔧 Applying automatic fixes...');
        await this.applyAutomaticFixes();
      }

      // Step 4: Re-run audit to verify fixes
      console.log('🔍 Re-running audit to verify fixes...');
      const finalAuditOutput = execSync('node comprehensive-audit-system.js', { 
        cwd: process.cwd(), 
        encoding: 'utf8' 
      });
      
      this.parseAuditResults(finalAuditOutput);
      const finalScore = this.calculateOverallScore();
      
      if (finalScore >= 100) {
        this.logSuccess();
      } else {
        this.logFailure(finalScore);
      }

      await this.writeEnforcementLog();

    } catch (error) {
      this.logError(error);
      throw error;
    }
  }

  /**
   * Calculate overall compliance score
   */
  calculateOverallScore(results = this.auditResults) {
    if (!results.htmlTsxScore && !results.hydrationScore && !results.cloakingScore) {
      return 0;
    }

    const htmlTsxScore = results.htmlTsxScore || 0;
    const hydrationScore = results.hydrationScore || 0;
    const cloakingScore = results.cloakingScore || 0;

    return ((htmlTsxScore + hydrationScore + cloakingScore) / 3);
  }

  /**
   * Apply automatic fixes based on audit results
   */
  async applyAutomaticFixes() {
    // Fix HTML/TSX synchronization
    if (this.auditResults.htmlTsxScore < 100) {
      console.log('📄 Fixing HTML/TSX synchronization...');
      await this.fixHtmlTsxSync();
    }

    // Fix hydration compliance
    if (this.auditResults.hydrationScore < 100) {
      console.log('💧 Fixing hydration compliance...');
      await this.fixHydrationIssues();
    }

    // Fix cloaking implementation
    if (this.auditResults.cloakingScore < 100) {
      console.log('🎭 Fixing cloaking implementation...');
      await this.fixCloakingIssues();
    }
  }

  /**
   * Fix HTML/TSX synchronization issues
   */
  async fixHtmlTsxSync() {
    const mismatches = this.auditResults.htmlTsxMismatches || [];
    
    for (const mismatch of mismatches) {
      try {
        await this.alignTsxWithHtml(mismatch);
        this.fixActions.push(`Fixed HTML/TSX sync for ${mismatch.pageName}`);
      } catch (error) {
        this.errors.push(`Failed to fix HTML/TSX sync for ${mismatch.pageName}: ${error.message}`);
      }
    }
  }

  /**
   * Fix hydration compliance issues
   */
  async fixHydrationIssues() {
    const hydrationErrors = this.auditResults.hydrationErrors || [];
    
    for (const error of hydrationErrors) {
      try {
        await this.fixHydrationMismatch(error);
        this.fixActions.push(`Fixed hydration for ${error.pageName}`);
      } catch (err) {
        this.errors.push(`Failed to fix hydration for ${error.pageName}: ${err.message}`);
      }
    }
  }

  /**
   * Fix cloaking implementation issues
   */
  async fixCloakingIssues() {
    const cloakingIssues = this.auditResults.cloakingIssues || [];
    
    for (const issue of cloakingIssues) {
      try {
        await this.fixCloakingIssue(issue);
        this.fixActions.push(`Fixed cloaking for ${issue.route}`);
      } catch (error) {
        this.errors.push(`Failed to fix cloaking for ${issue.route}: ${error.message}`);
      }
    }
  }

  /**
   * Align TSX file with HTML source of truth
   */
  async alignTsxWithHtml(mismatch) {
    const htmlFilePath = this.getHtmlPathFromPageName(mismatch.pageName);
    const tsxFilePath = this.getTsxPathFromPageName(mismatch.pageName);

    if (!fs.existsSync(htmlFilePath)) {
      throw new Error(`HTML file not found: ${htmlFilePath}`);
    }

    if (!fs.existsSync(tsxFilePath)) {
      throw new Error(`TSX file not found: ${tsxFilePath}`);
    }

    // Read HTML content to extract source data
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
    const htmlData = this.extractHtmlSourceData(htmlContent);

    // Read TSX content
    let tsxContent = fs.readFileSync(tsxFilePath, 'utf-8');

    // Update TSX to match HTML
    tsxContent = this.updateTsxSeoData(tsxContent, htmlData);

    // Write updated TSX
    fs.writeFileSync(tsxFilePath, tsxContent, 'utf-8');
  }

  /**
   * Fix hydration mismatch
   */
  async fixHydrationMismatch(error) {
    // For hydration mismatches, we align the TSX with the HTML
    await this.alignTsxWithHtml(error);
  }

  /**
   * Fix cloaking issue
   */
  async fixCloakingIssue(issue) {
    // Regenerate static HTML file for the route
    await this.regenerateStaticHtml(issue.route);
  }

  /**
   * Extract HTML source data
   */
  extractHtmlSourceData(htmlContent) {
    const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
    const descriptionMatch = htmlContent.match(/<meta name="description" content="([^"]+)"/);
    const h1Match = htmlContent.match(/<h1[^>]*>([^<]+)<\/h1>/);

    return {
      title: titleMatch ? titleMatch[1] : '',
      description: descriptionMatch ? descriptionMatch[1] : '',
      h1: h1Match ? h1Match[1] : ''
    };
  }

  /**
   * Update TSX SEO data to match HTML
   */
  updateTsxSeoData(tsxContent, htmlData) {
    // Update title
    if (htmlData.title) {
      tsxContent = tsxContent.replace(
        /title:\s*["']([^"']+)["']/,
        `title: "${htmlData.title}"`
      );
    }

    // Update description
    if (htmlData.description) {
      tsxContent = tsxContent.replace(
        /description:\s*["']([^"']+)["']/,
        `description: "${htmlData.description}"`
      );
    }

    // Update h1
    if (htmlData.h1) {
      tsxContent = tsxContent.replace(
        /<h1[^>]*>([^<]+)<\/h1>/,
        `<h1>${htmlData.h1}</h1>`
      );
    }

    return tsxContent;
  }

  /**
   * Get TSX file path from page name
   */
  getTsxPathFromPageName(pageName) {
    // Convert page name to TSX file path
    const cityName = pageName.replace('best-things-to-do-in-', '');
    const tsxFileName = cityName.charAt(0).toUpperCase() + cityName.slice(1) + '.tsx';
    return path.join(process.cwd(), 'client/src/pages/cities', tsxFileName);
  }

  /**
   * Get HTML file path from page name
   */
  getHtmlPathFromPageName(pageName) {
    // Convert page name to HTML file path
    if (pageName.includes('best-things-to-do-in-')) {
      return path.join(process.cwd(), 'dist/public', pageName, 'index.html');
    } else {
      return path.join(process.cwd(), 'dist/public', pageName + '.html');
    }
  }

  /**
   * Regenerate static HTML files
   */
  async regenerateStaticHtml(route) {
    try {
      // Use the regenerateStaticFiles function from routes
      execSync('node -e "import(\\"./server/routes.js\\").then(m => m.regenerateStaticFiles())"', {
        cwd: process.cwd(),
        encoding: 'utf8'
      });
    } catch (error) {
      console.log('Using direct HTML generation fallback...');
      execSync('node scripts/direct-html-generator.js', {
        cwd: process.cwd(),
        encoding: 'utf8'
      });
    }
  }

  /**
   * Parse audit results from output
   */
  parseAuditResults(auditOutput) {
    const htmlTsxMatch = auditOutput.match(/HTML\/TSX Synchronization: ([\d.]+)%/);
    const hydrationMatch = auditOutput.match(/Hydration Compliance: ([\d.]+)%/);
    const cloakingMatch = auditOutput.match(/Cloaking Implementation: ([\d.]+)%/);

    this.auditResults = {
      htmlTsxScore: htmlTsxMatch ? parseFloat(htmlTsxMatch[1]) : 0,
      hydrationScore: hydrationMatch ? parseFloat(hydrationMatch[1]) : 0,
      cloakingScore: cloakingMatch ? parseFloat(cloakingMatch[1]) : 0,
      htmlTsxMismatches: this.extractMismatchesFromOutput(auditOutput, 'HTML/TSX'),
      hydrationErrors: this.extractMismatchesFromOutput(auditOutput, 'Hydration'),
      cloakingIssues: this.extractMismatchesFromOutput(auditOutput, 'Cloaking')
    };
  }

  /**
   * Extract mismatches from audit output
   */
  extractMismatchesFromOutput(output, type) {
    const mismatches = [];
    
    // Extract city names that have issues
    const cityMatches = output.match(/❌ ([^:]+): /g);
    if (cityMatches) {
      cityMatches.forEach(match => {
        const cityName = match.replace('❌ ', '').replace(': ', '');
        mismatches.push({
          pageName: `best-things-to-do-in-${cityName.toLowerCase()}`,
          type: type,
          issue: 'Synchronization mismatch'
        });
      });
    }

    return mismatches;
  }

  /**
   * Log successful enforcement
   */
  logSuccess() {
    console.log('\n✅ COMPLIANCE ENFORCEMENT SUCCESSFUL');
    console.log('====================================');
    console.log('🎉 PERFECT 100% COMPLIANCE ACHIEVED!');
    console.log(`✅ Applied ${this.fixActions.length} automatic fixes`);
    this.fixActions.forEach(action => console.log(`   • ${action}`));
    
    if (this.errors.length > 0) {
      console.log(`\n⚠️  ${this.errors.length} non-critical warnings:`);
      this.errors.forEach(error => console.log(`   • ${error}`));
    }
  }

  /**
   * Log failed enforcement
   */
  logFailure(score) {
    console.log('\n❌ COMPLIANCE ENFORCEMENT INCOMPLETE');
    console.log('====================================');
    console.log(`📊 Final score: ${score}% (target: 100%)`);
    console.log(`✅ Applied ${this.fixActions.length} fixes`);
    console.log(`❌ ${this.errors.length} issues remain`);
    
    this.errors.forEach(error => console.log(`   • ${error}`));
  }

  /**
   * Log error
   */
  logError(error) {
    console.log('\n❌ COMPLIANCE ENFORCEMENT FAILED');
    console.log('=================================');
    console.log(`Critical error: ${error.message}`);
    console.log('\nStack trace:');
    console.log(error.stack);
  }

  /**
   * Write enforcement log to file
   */
  async writeEnforcementLog() {
    const logContent = {
      timestamp: new Date().toISOString(),
      auditResults: this.auditResults,
      fixActions: this.fixActions,
      errors: this.errors,
      finalScore: this.calculateOverallScore()
    };

    const logPath = path.join(process.cwd(), 'compliance-enforcement.log');
    fs.writeFileSync(logPath, JSON.stringify(logContent, null, 2), 'utf-8');
  }
}

// Export for use in other modules
export { AutomaticComplianceEnforcer };

// Run directly if called as script
if (import.meta.url === `file://${process.argv[1]}`) {
  const enforcer = new AutomaticComplianceEnforcer();
  enforcer.enforceCompliance().then(() => {
    console.log('\n🎉 AUTOMATIC COMPLIANCE ENFORCEMENT COMPLETED');
    process.exit(0);
  }).catch((error) => {
    console.error('❌ AUTOMATIC COMPLIANCE ENFORCEMENT FAILED:', error);
    process.exit(1);
  });
}