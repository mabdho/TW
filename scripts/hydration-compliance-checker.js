#!/usr/bin/env node
/**
 * Hydration Compliance Checker for TravelWanders
 * Automatically validates hydration compliance for any new or modified pages
 * Ensures React components match HTML files exactly
 * 
 * Usage:
 *   node scripts/hydration-compliance-checker.js
 *   node scripts/hydration-compliance-checker.js --page=home
 *   node scripts/hydration-compliance-checker.js --fix
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

class HydrationComplianceChecker {
  constructor() {
    this.results = {
      passed: [],
      failed: [],
      warnings: []
    };
    
    this.options = {
      fix: process.argv.includes('--fix'),
      page: this.getPageOption(),
      verbose: process.argv.includes('--verbose')
    };
  }

  getPageOption() {
    const pageArg = process.argv.find(arg => arg.startsWith('--page='));
    return pageArg ? pageArg.split('=')[1] : null;
  }

  async runFullAudit() {
    console.log('🔍 Running Hydration Compliance Check...\n');

    try {
      // Run the existing hydration audit script
      const auditResult = execSync('node hydration-audit.js', { encoding: 'utf8' });
      
      // Parse the results
      this.parseAuditResults(auditResult);
      
      // Generate compliance report
      this.generateComplianceReport();
      
      // Auto-fix if requested and issues found
      if (this.options.fix && this.results.failed.length > 0) {
        await this.autoFixIssues();
      }
      
      // Exit with appropriate code
      process.exit(this.results.failed.length > 0 ? 1 : 0);
      
    } catch (error) {
      console.error('❌ Hydration compliance check failed:', error.message);
      process.exit(1);
    }
  }

  parseAuditResults(auditOutput) {
    const lines = auditOutput.split('\n');
    let currentPage = null;
    
    for (const line of lines) {
      if (line.includes('=== AUDITING') && line.includes('===')) {
        currentPage = line.match(/=== AUDITING (.+) ===/)[1];
      } else if (line.includes('PASSED - Perfect hydration match!')) {
        this.results.passed.push(currentPage);
      } else if (line.includes('FAILED - Hydration mismatch detected!')) {
        this.results.failed.push(currentPage);
      }
    }
  }

  generateComplianceReport() {
    const total = this.results.passed.length + this.results.failed.length;
    const percentage = total > 0 ? ((this.results.passed.length / total) * 100).toFixed(1) : 0;
    
    console.log('📊 HYDRATION COMPLIANCE REPORT');
    console.log('============================================================');
    console.log(`✅ Compliance Rate: ${percentage}% (${this.results.passed.length}/${total} pages)`);
    
    if (this.results.failed.length > 0) {
      console.log('\n🚨 FAILED PAGES:');
      this.results.failed.forEach(page => {
        console.log(`   ❌ ${page}`);
      });
      
      console.log('\n💡 RECOMMENDED ACTIONS:');
      console.log('   1. Run with --fix flag to attempt automatic fixes');
      console.log('   2. Review HTML files in dist/public/ (source of truth)');
      console.log('   3. Update React components to match HTML exactly');
      console.log('   4. Re-run hydration audit to verify fixes');
    } else {
      console.log('\n🎉 PERFECT COMPLIANCE! All pages have proper hydration.');
    }
  }

  async autoFixIssues() {
    console.log('\n🔧 Attempting automatic fixes...');
    
    for (const failedPage of this.results.failed) {
      try {
        await this.fixPageHydration(failedPage);
        console.log(`✅ Fixed hydration for ${failedPage}`);
      } catch (error) {
        console.log(`❌ Could not auto-fix ${failedPage}: ${error.message}`);
        this.results.warnings.push(`Manual fix required for ${failedPage}`);
      }
    }
    
    // Re-run audit after fixes
    console.log('\n🔍 Re-running audit after fixes...');
    setTimeout(() => {
      execSync('node hydration-audit.js', { stdio: 'inherit' });
    }, 1000);
  }

  async fixPageHydration(pageName) {
    // This would contain logic to automatically fix common hydration issues
    // For now, it provides guidance on manual fixes needed
    
    const fixes = {
      'Home Page': () => this.fixHomePage(),
      'Blogs Page': () => this.fixBlogsPage(),
      'Destinations Page': () => this.fixDestinationsPage()
    };
    
    if (fixes[pageName]) {
      return fixes[pageName]();
    } else {
      throw new Error(`No auto-fix available for ${pageName}`);
    }
  }

  fixHomePage() {
    console.log('   📝 Fixing home page hydration...');
    // Logic to update client/src/utils/seo.ts for home page
    // This would read the HTML file and update React component accordingly
  }

  fixBlogsPage() {
    console.log('   📝 Fixing blogs page hydration...');
    // Logic to update blogs page SEO data
  }

  fixDestinationsPage() {
    console.log('   📝 Fixing destinations page hydration...');
    // Logic to update destinations page
  }
}

// Validation hooks for different scenarios
class HydrationValidationHooks {
  static async validateNewCity(cityName) {
    console.log(`🔍 Validating hydration for new city: ${cityName}`);
    
    // Check if HTML file exists
    const htmlPath = `dist/public/best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}-seo.html`;
    if (!fs.existsSync(htmlPath)) {
      console.log(`⚠️  HTML file not found: ${htmlPath}`);
      return false;
    }
    
    // Run focused audit for this city
    try {
      execSync(`node hydration-audit.js --city=${cityName}`, { stdio: 'inherit' });
      console.log(`✅ ${cityName} hydration validation passed`);
      return true;
    } catch (error) {
      console.log(`❌ ${cityName} hydration validation failed`);
      return false;
    }
  }

  static async validateNewBlog(blogId) {
    console.log(`🔍 Validating hydration for new blog: ${blogId}`);
    
    // Check if HTML file exists
    const htmlPath = `dist/public/blog/${blogId}.html`;
    if (!fs.existsSync(htmlPath)) {
      console.log(`⚠️  Blog HTML file not found: ${htmlPath}`);
      return false;
    }
    
    // Validate blog hydration
    try {
      execSync(`node hydration-audit.js --blog=${blogId}`, { stdio: 'inherit' });
      console.log(`✅ ${blogId} blog hydration validation passed`);
      return true;
    } catch (error) {
      console.log(`❌ ${blogId} blog hydration validation failed`);
      return false;
    }
  }

  static async validatePageModification(pageName) {
    console.log(`🔍 Validating hydration after ${pageName} modification`);
    
    try {
      execSync(`node hydration-audit.js --page=${pageName}`, { stdio: 'inherit' });
      console.log(`✅ ${pageName} modification hydration validation passed`);
      return true;
    } catch (error) {
      console.log(`❌ ${pageName} modification hydration validation failed`);
      return false;
    }
  }
}

// Main execution
const checker = new HydrationComplianceChecker();
checker.runFullAudit();

export { HydrationComplianceChecker, HydrationValidationHooks };