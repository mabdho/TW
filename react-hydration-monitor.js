#!/usr/bin/env node

/**
 * React Hydration Monitor for TravelWanders
 * Monitors browser console for React hydration warnings and mismatches
 * Provides detailed analysis and automatic fix suggestions
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

class ReactHydrationMonitor {
  constructor() {
    this.hydrationIssues = [];
    this.consoleMessages = [];
    this.browser = null;
    this.page = null;
  }

  /**
   * Initialize browser and set up console monitoring
   */
  async initialize() {
    console.log('🚀 Initializing React Hydration Monitor...');
    
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    this.page = await this.browser.newPage();
    
    // Monitor console for React hydration warnings
    this.page.on('console', (msg) => {
      const message = msg.text();
      this.consoleMessages.push({
        type: msg.type(),
        message: message,
        timestamp: new Date().toISOString()
      });
      
      // Check for React hydration-specific warnings
      if (this.isHydrationWarning(message)) {
        this.hydrationIssues.push({
          type: 'hydration_warning',
          message: message,
          timestamp: new Date().toISOString(),
          severity: this.getWarningSeverity(message)
        });
        
        console.log(`⚠️  Hydration Warning Detected: ${message}`);
      }
    });
    
    // Monitor for React errors
    this.page.on('pageerror', (error) => {
      if (error.message.includes('hydrat') || error.message.includes('server') || error.message.includes('client')) {
        this.hydrationIssues.push({
          type: 'hydration_error',
          message: error.message,
          stack: error.stack,
          timestamp: new Date().toISOString(),
          severity: 'critical'
        });
        
        console.log(`❌ Hydration Error Detected: ${error.message}`);
      }
    });
  }

  /**
   * Check if console message is a React hydration warning
   */
  isHydrationWarning(message) {
    const hydrationPatterns = [
      /Warning.*Text content did not match/i,
      /Warning.*Prop.*did not match/i,
      /Warning.*Expected server HTML/i,
      /Hydration failed/i,
      /server.*client.*mismatch/i,
      /Warning.*validateDOMNesting/i,
      /Warning.*Extra attributes from the server/i,
      /Warning.*Missing attributes from the server/i
    ];
    
    return hydrationPatterns.some(pattern => pattern.test(message));
  }

  /**
   * Determine severity of hydration warning
   */
  getWarningSeverity(message) {
    if (message.includes('Hydration failed') || message.includes('critical')) {
      return 'critical';
    } else if (message.includes('Text content did not match') || message.includes('Prop')) {
      return 'high';
    } else if (message.includes('Extra attributes') || message.includes('Missing attributes')) {
      return 'medium';
    } else {
      return 'low';
    }
  }

  /**
   * Test a specific page for hydration issues
   */
  async testPage(url, pageName) {
    console.log(`\n🔍 Testing ${pageName}: ${url}`);
    
    try {
      // Clear previous issues for this page
      const initialIssueCount = this.hydrationIssues.length;
      
      // Navigate to page
      await this.page.goto(url, { 
        waitUntil: 'networkidle0',
        timeout: 30000 
      });
      
      // Wait for React to hydrate
      await this.page.waitForTimeout(2000);
      
      // Check for hydration completion
      const hydrationComplete = await this.page.evaluate(() => {
        // Check if React has finished hydrating
        return window.React && document.querySelector('#root') && 
               document.querySelector('#root').innerHTML.length > 100;
      });
      
      if (!hydrationComplete) {
        this.hydrationIssues.push({
          type: 'hydration_timeout',
          message: `Hydration did not complete within timeout for ${pageName}`,
          page: pageName,
          url: url,
          timestamp: new Date().toISOString(),
          severity: 'critical'
        });
      }
      
      // Count new issues for this page
      const newIssues = this.hydrationIssues.length - initialIssueCount;
      
      if (newIssues === 0) {
        console.log(`✅ ${pageName}: No hydration issues detected`);
      } else {
        console.log(`⚠️  ${pageName}: ${newIssues} hydration issues detected`);
      }
      
      return {
        page: pageName,
        url: url,
        issues: newIssues,
        hydrationComplete: hydrationComplete
      };
      
    } catch (error) {
      console.log(`❌ ${pageName}: Failed to test - ${error.message}`);
      
      this.hydrationIssues.push({
        type: 'test_error',
        message: `Failed to test ${pageName}: ${error.message}`,
        page: pageName,
        url: url,
        timestamp: new Date().toISOString(),
        severity: 'critical'
      });
      
      return {
        page: pageName,
        url: url,
        issues: 1,
        hydrationComplete: false,
        error: error.message
      };
    }
  }

  /**
   * Test all pages for hydration issues
   */
  async testAllPages() {
    console.log('🔍 Starting React Hydration Monitoring across all pages...\n');
    
    const pages = [
      { name: 'Home Page', url: 'http://localhost:5000/' },
      { name: 'Destinations Page', url: 'http://localhost:5000/destinations' },
      { name: 'Blogs Page', url: 'http://localhost:5000/blogs' },
      { name: 'London City Page', url: 'http://localhost:5000/best-things-to-do-in-london' },
      { name: 'Rome City Page', url: 'http://localhost:5000/best-things-to-do-in-rome' },
      { name: 'Privacy Policy', url: 'http://localhost:5000/privacy-policy' },
      { name: 'Terms of Service', url: 'http://localhost:5000/terms-of-service' },
      { name: 'Cookie Policy', url: 'http://localhost:5000/cookie-policy' }
    ];
    
    const results = [];
    
    for (const page of pages) {
      const result = await this.testPage(page.url, page.name);
      results.push(result);
    }
    
    return results;
  }

  /**
   * Analyze hydration issues and provide fix suggestions
   */
  analyzeIssues() {
    console.log('\n📊 Analyzing Hydration Issues...\n');
    
    if (this.hydrationIssues.length === 0) {
      console.log('🎉 No React hydration issues detected! Perfect hydration achieved.');
      return { status: 'perfect', issues: [] };
    }
    
    // Group issues by type and severity
    const issuesByType = {};
    const issuesBySeverity = { critical: 0, high: 0, medium: 0, low: 0 };
    
    this.hydrationIssues.forEach(issue => {
      if (!issuesByType[issue.type]) {
        issuesByType[issue.type] = [];
      }
      issuesByType[issue.type].push(issue);
      issuesBySeverity[issue.severity]++;
    });
    
    console.log(`⚠️  Total Hydration Issues: ${this.hydrationIssues.length}`);
    console.log(`   Critical: ${issuesBySeverity.critical}`);
    console.log(`   High: ${issuesBySeverity.high}`);
    console.log(`   Medium: ${issuesBySeverity.medium}`);
    console.log(`   Low: ${issuesBySeverity.low}`);
    
    // Provide specific fix suggestions
    this.provideFixes(issuesByType);
    
    return {
      status: issuesBySeverity.critical > 0 ? 'critical' : 'issues_found',
      totalIssues: this.hydrationIssues.length,
      breakdown: issuesBySeverity,
      issues: this.hydrationIssues
    };
  }

  /**
   * Provide specific fix suggestions based on issue types
   */
  provideFixes(issuesByType) {
    console.log('\n🔧 Fix Suggestions:\n');
    
    if (issuesByType.hydration_warning) {
      console.log('📝 Text Content Mismatches:');
      issuesByType.hydration_warning.forEach(issue => {
        if (issue.message.includes('Text content did not match')) {
          console.log(`   • Issue: ${issue.message}`);
          console.log(`     Fix: Check for whitespace differences between HTML and React components`);
          console.log(`     Location: Compare server-rendered HTML with client React output`);
        }
      });
    }
    
    if (issuesByType.hydration_error) {
      console.log('\n❌ Critical Hydration Errors:');
      issuesByType.hydration_error.forEach(issue => {
        console.log(`   • Error: ${issue.message}`);
        console.log(`     Fix: Review server-side rendering and client-side hydration logic`);
      });
    }
    
    if (issuesByType.hydration_timeout) {
      console.log('\n⏱️  Hydration Timeouts:');
      issuesByType.hydration_timeout.forEach(issue => {
        console.log(`   • Page: ${issue.page}`);
        console.log(`     Fix: Check for JavaScript errors preventing React hydration`);
      });
    }
    
    console.log('\n📚 General Recommendations:');
    console.log('   • Run `node comprehensive-hydration-audit.js` for detailed static analysis');
    console.log('   • Check browser DevTools Console for specific React warnings');
    console.log('   • Ensure identical content between server HTML and client React render');
    console.log('   • Verify all dynamic content is properly handled during hydration');
  }

  /**
   * Generate detailed report
   */
  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: this.hydrationIssues.length,
        totalConsoleMessages: this.consoleMessages.length
      },
      issues: this.hydrationIssues,
      consoleMessages: this.consoleMessages.filter(msg => 
        msg.type === 'warning' || msg.type === 'error'
      )
    };
    
    fs.writeFileSync('hydration-monitoring-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Detailed report saved to: hydration-monitoring-report.json');
    
    return report;
  }

  /**
   * Cleanup browser resources
   */
  async cleanup() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Main execution
async function main() {
  const monitor = new ReactHydrationMonitor();
  
  try {
    await monitor.initialize();
    const results = await monitor.testAllPages();
    const analysis = monitor.analyzeIssues();
    const report = monitor.generateReport();
    
    console.log('\n🎯 React Hydration Monitoring Complete!');
    console.log(`Status: ${analysis.status}`);
    
    if (analysis.status === 'perfect') {
      console.log('🎉 Perfect React hydration achieved across all pages!');
    } else {
      console.log(`⚠️  ${analysis.totalIssues} hydration issues require attention.`);
    }
    
  } catch (error) {
    console.error('❌ React Hydration Monitoring Failed:', error.message);
  } finally {
    await monitor.cleanup();
  }
}

// Handle script termination
process.on('SIGINT', async () => {
  console.log('\n⏹️  React Hydration Monitoring interrupted');
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error.message);
  process.exit(1);
});

// Run the monitor
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { ReactHydrationMonitor };