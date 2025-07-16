#!/usr/bin/env node
/**
 * Enhanced Automatic Compliance Enforcer for TravelWanders
 * Includes comprehensive TSX-HTML synchronization and ensures 100% compliance
 * Runs automatically during page generation without manual intervention
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class EnhancedComplianceEnforcer {
  constructor() {
    this.auditResults = {};
    this.fixActions = [];
    this.errors = [];
    this.syncResults = { success: 0, failed: 0, total: 0 };
  }

  /**
   * Main enforcement method - ensures 100% compliance with TSX-HTML sync
   */
  async enforceCompliance() {
    console.log('🚀 ENHANCED COMPLIANCE ENFORCEMENT - TravelWanders');
    console.log('=================================================\n');

    try {
      // Step 1: TSX-HTML Synchronization
      console.log('🔄 Step 1: TSX-HTML Synchronization...');
      await this.enforceTsxHtmlSync();

      // Step 2: Run comprehensive audit
      console.log('🔍 Step 2: Running comprehensive compliance audit...');
      const auditOutput = execSync('node comprehensive-audit-system.js', { 
        cwd: process.cwd(), 
        encoding: 'utf8' 
      });

      // Parse audit results
      this.parseAuditResults(auditOutput);
      
      // Step 3: Calculate overall score
      const overallScore = this.calculateOverallScore();
      console.log(`📊 Current compliance score: ${overallScore}%`);

      // Step 4: Apply automatic fixes if needed
      if (overallScore < 100) {
        console.log('🔧 Applying automatic fixes...');
        await this.applyAutomaticFixes();
      }

      // Step 5: Re-run audit to verify fixes
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
      return finalScore >= 100;

    } catch (error) {
      this.logError(error);
      return false;
    }
  }

  /**
   * Enforce TSX-HTML synchronization for all cities
   */
  async enforceTsxHtmlSync() {
    try {
      // Import the TSX-HTML synchronizer
      const tsxHtmlSyncPath = path.join(process.cwd(), 'server', 'utils', 'tsx-html-sync.ts');
      
      if (!fs.existsSync(tsxHtmlSyncPath)) {
        console.warn('⚠️  TSX-HTML synchronizer not found, skipping sync...');
        return;
      }

      // Use Node.js to run the synchronization
      console.log('🔄 Running batch TSX-HTML synchronization...');
      
      // Read all city TSX files
      const citiesDir = path.join(process.cwd(), 'client', 'src', 'pages', 'cities');
      if (!fs.existsSync(citiesDir)) {
        console.warn('⚠️  Cities directory not found, skipping sync...');
        return;
      }

      const cityFiles = fs.readdirSync(citiesDir).filter(file => file.endsWith('.tsx'));
      this.syncResults.total = cityFiles.length;

      for (const file of cityFiles) {
        const cityName = file.replace('.tsx', '');
        try {
          // Basic synchronization check
          const success = await this.syncCityTsxHtml(cityName);
          if (success) {
            this.syncResults.success++;
            this.fixActions.push(`✅ TSX-HTML synchronized: ${cityName}`);
          } else {
            this.syncResults.failed++;
            this.errors.push(`❌ TSX-HTML sync failed: ${cityName}`);
          }
        } catch (syncError) {
          this.syncResults.failed++;
          this.errors.push(`❌ TSX-HTML sync error for ${cityName}: ${syncError.message}`);
        }
      }

      console.log(`📊 TSX-HTML Sync Results: ${this.syncResults.success}/${this.syncResults.total} successful`);

    } catch (error) {
      console.error('❌ TSX-HTML synchronization enforcement failed:', error);
      this.errors.push(`TSX-HTML sync error: ${error.message}`);
    }
  }

  /**
   * Synchronize individual city TSX with HTML
   */
  async syncCityTsxHtml(cityName) {
    try {
      const tsxPath = this.getTsxPath(cityName);
      const htmlPath = this.getHtmlPath(cityName);
      
      if (!fs.existsSync(tsxPath) || !fs.existsSync(htmlPath)) {
        return false;
      }

      // Extract data from both sources
      const htmlData = await this.extractHtmlData(htmlPath);
      const tsxData = await this.extractTsxData(tsxPath);

      // Compare and sync if needed
      const needsSync = this.compareData(htmlData, tsxData);
      
      if (needsSync) {
        await this.updateTsxFromHtml(tsxPath, htmlData);
        console.log(`🔧 Synchronized ${cityName} TSX with HTML source of truth`);
      }

      return true;

    } catch (error) {
      console.error(`❌ Sync error for ${cityName}:`, error);
      return false;
    }
  }

  /**
   * Generate HTML path from city name
   */
  getTsxPath(cityName) {
    return path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityName}.tsx`);
  }

  /**
   * Generate HTML path from city name
   */
  getHtmlPath(cityName) {
    const slugName = this.cityNameToSlug(cityName);
    return path.join(process.cwd(), 'dist', 'public', `best-things-to-do-in-${slugName}`, 'index.html');
  }

  /**
   * Convert city name to URL slug
   */
  cityNameToSlug(cityName) {
    return cityName
      .toLowerCase()
      .replace(/[áàâã]/g, 'a')
      .replace(/[éèê]/g, 'e')
      .replace(/[íì]/g, 'i')
      .replace(/[óò]/g, 'o')
      .replace(/[úù]/g, 'u')
      .replace(/[ç]/g, 'c')
      .replace(/[ñ]/g, 'n')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
  }

  /**
   * Extract data from HTML file (source of truth)
   */
  async extractHtmlData(htmlPath) {
    const content = fs.readFileSync(htmlPath, 'utf-8');
    
    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descriptionMatch = content.match(/<meta name="description" content="([^"]+)"/);
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);

    return {
      title: titleMatch ? titleMatch[1].trim() : '',
      description: descriptionMatch ? descriptionMatch[1].trim() : '',
      h1: h1Match ? h1Match[1].trim() : ''
    };
  }

  /**
   * Extract data from TSX file
   */
  async extractTsxData(tsxPath) {
    const content = fs.readFileSync(tsxPath, 'utf-8');
    
    const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
    const descriptionMatch = content.match(/description:\s*["']([^"']+)["']/);
    const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);

    return {
      title: titleMatch ? titleMatch[1].trim() : '',
      description: descriptionMatch ? descriptionMatch[1].trim() : '',
      h1: h1Match ? h1Match[1].trim() : ''
    };
  }

  /**
   * Compare HTML and TSX data to determine if sync is needed
   */
  compareData(htmlData, tsxData) {
    return (
      htmlData.title !== tsxData.title ||
      htmlData.description !== tsxData.description ||
      htmlData.h1 !== tsxData.h1
    );
  }

  /**
   * Update TSX file to match HTML data (HTML is source of truth)
   */
  async updateTsxFromHtml(tsxPath, htmlData) {
    let content = fs.readFileSync(tsxPath, 'utf-8');

    // Update title
    if (htmlData.title) {
      content = content.replace(
        /title:\s*["']([^"']+)["']/,
        `title: "${htmlData.title.replace(/"/g, '\\"')}"`
      );
    }

    // Update description
    if (htmlData.description) {
      content = content.replace(
        /description:\s*["']([^"']+)["']/,
        `description: "${htmlData.description.replace(/"/g, '\\"')}"`
      );
    }

    // Update h1
    if (htmlData.h1) {
      content = content.replace(
        /<h1[^>]*>([^<]+)<\/h1>/,
        `<h1>${htmlData.h1}</h1>`
      );
    }

    fs.writeFileSync(tsxPath, content, 'utf-8');
  }

  /**
   * Calculate overall compliance score
   */
  calculateOverallScore() {
    const htmlTsxScore = this.auditResults.htmlTsxScore || 0;
    const hydrationScore = this.auditResults.hydrationScore || 0;
    const cloakingScore = this.auditResults.cloakingScore || 0;
    const syncScore = this.syncResults.total > 0 ? 
      (this.syncResults.success / this.syncResults.total) * 100 : 100;

    return ((htmlTsxScore + hydrationScore + cloakingScore + syncScore) / 4);
  }

  /**
   * Apply automatic fixes based on audit results
   */
  async applyAutomaticFixes() {
    // Apply existing fixes from the original compliance enforcer
    try {
      const originalEnforcer = await import('./automatic-compliance-enforcer.js');
      if (originalEnforcer.default) {
        const enforcer = new originalEnforcer.default();
        await enforcer.applyAutomaticFixes();
        this.fixActions.push('Applied original compliance fixes');
      }
    } catch (error) {
      console.warn('⚠️  Could not run original compliance fixes:', error.message);
    }
  }

  /**
   * Parse audit results from output
   */
  parseAuditResults(auditOutput) {
    try {
      // Extract scores from audit output
      const htmlTsxMatch = auditOutput.match(/HTML\/TSX Synchronization Score: ([\d.]+)%/);
      const hydrationMatch = auditOutput.match(/Hydration Score: ([\d.]+)%/);
      const cloakingMatch = auditOutput.match(/Cloaking Score: ([\d.]+)%/);
      
      this.auditResults = {
        htmlTsxScore: htmlTsxMatch ? parseFloat(htmlTsxMatch[1]) : 0,
        hydrationScore: hydrationMatch ? parseFloat(hydrationMatch[1]) : 0,
        cloakingScore: cloakingMatch ? parseFloat(cloakingMatch[1]) : 0
      };
    } catch (error) {
      console.warn('⚠️  Could not parse audit results:', error.message);
      this.auditResults = { htmlTsxScore: 0, hydrationScore: 0, cloakingScore: 0 };
    }
  }

  /**
   * Log successful enforcement
   */
  logSuccess() {
    console.log('\n🎉 ENHANCED COMPLIANCE ENFORCEMENT SUCCESSFUL!');
    console.log('============================================');
    console.log('✅ 100% compliance achieved');
    console.log(`✅ TSX-HTML synchronization: ${this.syncResults.success}/${this.syncResults.total} cities`);
    console.log('✅ All systems are perfectly synchronized');
    console.log('✅ Ready for production deployment\n');
  }

  /**
   * Log failed enforcement
   */
  logFailure(score) {
    console.log('\n❌ ENHANCED COMPLIANCE ENFORCEMENT INCOMPLETE');
    console.log('===========================================');
    console.log(`❌ Current compliance score: ${score.toFixed(1)}%`);
    console.log(`❌ TSX-HTML sync: ${this.syncResults.success}/${this.syncResults.total} successful`);
    console.log('❌ Manual intervention may be required\n');
  }

  /**
   * Log error
   */
  logError(error) {
    console.error('\n💥 ENHANCED COMPLIANCE ENFORCEMENT ERROR');
    console.error('=====================================');
    console.error('💥 Critical error occurred:', error.message);
    console.error('💥 Manual investigation required\n');
  }

  /**
   * Write enforcement log to file
   */
  async writeEnforcementLog() {
    const logContent = `# Enhanced Compliance Enforcement Report
**Date:** ${new Date().toISOString()}
**Enforcer:** Enhanced Automatic Compliance Enforcer

## TSX-HTML Synchronization Results
- **Total Cities:** ${this.syncResults.total}
- **Successful Sync:** ${this.syncResults.success}
- **Failed Sync:** ${this.syncResults.failed}
- **Success Rate:** ${this.syncResults.total > 0 ? ((this.syncResults.success / this.syncResults.total) * 100).toFixed(1) : 0}%

## Overall Compliance Scores
- **HTML/TSX Sync:** ${this.auditResults.htmlTsxScore || 0}%
- **Hydration:** ${this.auditResults.hydrationScore || 0}%
- **Cloaking:** ${this.auditResults.cloakingScore || 0}%
- **Overall:** ${this.calculateOverallScore().toFixed(1)}%

## Actions Taken
${this.fixActions.map(action => `- ${action}`).join('\n')}

## Errors Encountered
${this.errors.length > 0 ? this.errors.map(error => `- ${error}`).join('\n') : '- None'}

## Status
${this.calculateOverallScore() >= 100 ? '✅ **PERFECT COMPLIANCE ACHIEVED**' : '⚠️ **COMPLIANCE ISSUES REMAIN**'}
`;

    const logPath = path.join(process.cwd(), 'ENHANCED_COMPLIANCE_REPORT.md');
    fs.writeFileSync(logPath, logContent, 'utf-8');
    console.log(`📝 Enhanced compliance report written to: ${logPath}`);
  }
}

/**
 * Main execution function
 */
async function main() {
  const enforcer = new EnhancedComplianceEnforcer();
  const success = await enforcer.enforceCompliance();
  
  process.exit(success ? 0 : 1);
}

// Export for use in other scripts
export { EnhancedComplianceEnforcer };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(error => {
    console.error('Enhanced compliance enforcement failed:', error);
    process.exit(1);
  });
}