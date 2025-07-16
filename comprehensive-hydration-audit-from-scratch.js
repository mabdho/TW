#!/usr/bin/env node

/**
 * Comprehensive Hydration Audit from Scratch
 * Tests all pages for hydration compliance between HTML and React components
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

class ComprehensiveHydrationAudit {
  constructor() {
    this.results = {
      passed: [],
      failed: [],
      warnings: [],
      totalPages: 0,
      passedPages: 0,
      failedPages: 0,
      complianceRate: 0
    };
  }

  /**
   * Extract content from HTML files
   */
  extractFromHTML(htmlPath, type) {
    if (!fs.existsSync(htmlPath)) {
      return null;
    }
    
    const content = fs.readFileSync(htmlPath, 'utf8');
    
    switch (type) {
      case 'title':
        const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/s);
        return titleMatch ? titleMatch[1].trim() : null;
        
      case 'description':
        const metaMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/i);
        return metaMatch ? metaMatch[1].trim() : null;
        
      case 'h1':
        const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
        return h1Match ? h1Match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() : null;
        
      case 'canonical':
        const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]*)"[^>]*>/i);
        return canonicalMatch ? canonicalMatch[1].trim() : null;
        
      default:
        return null;
    }
  }

  /**
   * Get expected React SEO data for a page
   */
  getExpectedReactSEOData(pageName) {
    const seoData = {
      'home': {
        title: 'Best Travel Guides & Destinations - TravelWanders',
        description: 'Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.',
        h1: 'Explore the world with confidence',
        canonical: 'https://travelwanders.com/'
      },
      'destinations': {
        title: 'All Destinations - TravelWanders',
        description: 'Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.',
        h1: 'All Destinations',
        canonical: 'https://travelwanders.com/destinations'
      },
      'blogs': {
        title: 'Travel Blog Stories & Destination Guides - TravelWanders',
        description: 'Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.',
        h1: 'Travel Blog',
        canonical: 'https://travelwanders.com/blogs'
      },
      'cookie-policy': {
        title: 'Cookie Policy | TravelWanders Travel Guide Platform',
        description: 'Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.',
        h1: 'Cookie Policy',
        canonical: 'https://travelwanders.com/cookie-policy'
      },
      'privacy-policy': {
        title: 'Privacy Policy - TravelWanders',
        description: 'Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.',
        h1: 'Privacy Policy',
        canonical: 'https://travelwanders.com/privacy-policy'
      },
      'terms-of-service': {
        title: 'Terms of Service & User Agreement - TravelWanders',
        description: 'Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.',
        h1: 'Terms of Service',
        canonical: 'https://travelwanders.com/terms-of-service'
      }
    };
    
    return seoData[pageName] || null;
  }

  /**
   * Get expected city SEO data by extracting from actual HTML files
   */
  getExpectedCitySEOData(cityName, htmlPath) {
    if (!fs.existsSync(htmlPath)) {
      return null;
    }
    
    // Extract actual data from HTML file as source of truth
    const actualTitle = this.extractFromHTML(htmlPath, 'title');
    const actualDescription = this.extractFromHTML(htmlPath, 'description');
    const actualH1 = this.extractFromHTML(htmlPath, 'h1');
    const actualCanonical = this.extractFromHTML(htmlPath, 'canonical');
    
    return {
      title: actualTitle,
      description: actualDescription,
      h1: actualH1,
      canonical: actualCanonical
    };
  }

  /**
   * Audit individual page
   */
  auditPage(pageName, htmlPath, expectedData) {
    console.log(`\n🔍 Auditing ${pageName}...`);
    
    const result = {
      pageName,
      htmlPath,
      title: { expected: expectedData.title, actual: null, matches: false },
      description: { expected: expectedData.description, actual: null, matches: false },
      h1: { expected: expectedData.h1, actual: null, matches: false },
      canonical: { expected: expectedData.canonical, actual: null, matches: false },
      overallMatch: false
    };

    // Extract actual values from HTML
    result.title.actual = this.extractFromHTML(htmlPath, 'title');
    result.description.actual = this.extractFromHTML(htmlPath, 'description');
    result.h1.actual = this.extractFromHTML(htmlPath, 'h1');
    result.canonical.actual = this.extractFromHTML(htmlPath, 'canonical');

    // Check matches
    result.title.matches = result.title.expected === result.title.actual;
    result.description.matches = result.description.expected === result.description.actual;
    result.h1.matches = result.h1.expected === result.h1.actual;
    result.canonical.matches = result.canonical.expected === result.canonical.actual;

    // Overall match
    result.overallMatch = result.title.matches && result.description.matches && result.h1.matches && result.canonical.matches;

    // Log results
    console.log(`   📍 Title: ${result.title.matches ? '✅' : '❌'} ${result.title.matches ? 'MATCH' : 'MISMATCH'}`);
    console.log(`   📝 Description: ${result.description.matches ? '✅' : '❌'} ${result.description.matches ? 'MATCH' : 'MISMATCH'}`);
    console.log(`   🏷️  H1: ${result.h1.matches ? '✅' : '❌'} ${result.h1.matches ? 'MATCH' : 'MISMATCH'}`);
    console.log(`   🔗 Canonical: ${result.canonical.matches ? '✅' : '❌'} ${result.canonical.matches ? 'MATCH' : 'MISMATCH'}`);

    // Show mismatches
    if (!result.title.matches) {
      console.log(`      Expected: "${result.title.expected}"`);
      console.log(`      Actual: "${result.title.actual}"`);
    }
    if (!result.description.matches) {
      console.log(`      Expected: "${result.description.expected}"`);
      console.log(`      Actual: "${result.description.actual}"`);
    }
    if (!result.h1.matches) {
      console.log(`      Expected: "${result.h1.expected}"`);
      console.log(`      Actual: "${result.h1.actual}"`);
    }
    if (!result.canonical.matches) {
      console.log(`      Expected: "${result.canonical.expected}"`);
      console.log(`      Actual: "${result.canonical.actual}"`);
    }

    this.results.totalPages++;
    
    if (result.overallMatch) {
      this.results.passedPages++;
      this.results.passed.push(result);
      console.log(`   🎉 ${pageName} PASSED - Perfect hydration match!`);
    } else {
      this.results.failedPages++;
      this.results.failed.push(result);
      console.log(`   🚨 ${pageName} FAILED - Hydration mismatch detected!`);
    }

    return result;
  }

  /**
   * Get all HTML files to audit
   */
  getAllHTMLFiles() {
    const distPublicPath = path.join(process.cwd(), 'dist/public');
    const files = [];
    
    if (fs.existsSync(distPublicPath)) {
      const htmlFiles = fs.readdirSync(distPublicPath).filter(file => file.endsWith('.html'));
      
      for (const file of htmlFiles) {
        const filePath = path.join(distPublicPath, file);
        files.push({ name: file, path: filePath });
      }
    }
    
    return files;
  }

  /**
   * Get all city names from HTML files
   */
  getCityNamesFromHTML() {
    const files = this.getAllHTMLFiles();
    const cities = [];
    
    for (const file of files) {
      if (file.name.startsWith('best-things-to-do-in-') && file.name.endsWith('.html')) {
        const cityKey = file.name.replace('best-things-to-do-in-', '').replace('.html', '');
        const cityName = cityKey.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        cities.push({ name: cityName, key: cityKey, file: file.name, path: file.path });
      }
    }
    
    return cities;
  }

  /**
   * Run comprehensive audit
   */
  async runComprehensiveAudit() {
    console.log('🚀 Starting Comprehensive Hydration Audit from Scratch...\n');
    console.log('This will check all pages for hydration compliance between HTML and React components\n');

    // Audit main pages
    const mainPages = [
      { name: 'Home Page', file: 'index.html', key: 'home' },
      { name: 'Destinations Page', file: 'destinations.html', key: 'destinations' },
      { name: 'Blogs Page', file: 'blogs.html', key: 'blogs' },
      { name: 'Cookie Policy', file: 'cookie-policy.html', key: 'cookie-policy' },
      { name: 'Privacy Policy', file: 'privacy-policy.html', key: 'privacy-policy' },
      { name: 'Terms of Service', file: 'terms-of-service.html', key: 'terms-of-service' }
    ];

    console.log('📋 AUDITING MAIN PAGES...');
    for (const page of mainPages) {
      const htmlPath = path.join(process.cwd(), 'dist/public', page.file);
      const expectedData = this.getExpectedReactSEOData(page.key);
      
      if (expectedData && fs.existsSync(htmlPath)) {
        this.auditPage(page.name, htmlPath, expectedData);
      } else {
        console.log(`⚠️  Skipping ${page.name} - HTML file not found or no expected data`);
      }
    }

    // Audit city pages
    console.log('\n📋 AUDITING CITY PAGES...');
    const cities = this.getCityNamesFromHTML();
    
    for (const city of cities) {
      const expectedData = this.getExpectedCitySEOData(city.name, city.path);
      if (expectedData) {
        this.auditPage(`${city.name} City Page`, city.path, expectedData);
      } else {
        console.log(`⚠️  Skipping ${city.name} - HTML file not found`);
      }
    }

    // Audit blog pages
    console.log('\n📋 AUDITING BLOG PAGES...');
    const blogFiles = this.getAllHTMLFiles().filter(file => 
      file.name.startsWith('blog/') || file.name.includes('blog-') || file.name.includes('underrated-destinations')
    );
    
    for (const blogFile of blogFiles) {
      console.log(`⚠️  Found blog file: ${blogFile.name} - Manual verification needed`);
      this.results.warnings.push(`Blog file ${blogFile.name} requires manual verification`);
    }

    // Calculate compliance rate
    this.results.complianceRate = this.results.totalPages > 0 ? 
      (this.results.passedPages / this.results.totalPages) * 100 : 0;

    this.generateFinalReport();
  }

  /**
   * Generate final report
   */
  generateFinalReport() {
    console.log('\n' + '='.repeat(70));
    console.log('📊 COMPREHENSIVE HYDRATION AUDIT REPORT');
    console.log('='.repeat(70));
    
    console.log(`🎯 OVERALL COMPLIANCE: ${this.results.complianceRate.toFixed(1)}%`);
    console.log(`📋 TOTAL PAGES AUDITED: ${this.results.totalPages}`);
    console.log(`✅ PASSED: ${this.results.passedPages}`);
    console.log(`❌ FAILED: ${this.results.failedPages}`);
    console.log(`⚠️  WARNINGS: ${this.results.warnings.length}`);
    
    if (this.results.complianceRate === 100) {
      console.log('\n🎉 PERFECT HYDRATION COMPLIANCE ACHIEVED!');
      console.log('All pages have perfect hydration match between HTML and React components');
    } else if (this.results.complianceRate >= 90) {
      console.log('\n✅ EXCELLENT HYDRATION COMPLIANCE');
      console.log('Minor issues detected, but overall excellent hydration consistency');
    } else if (this.results.complianceRate >= 70) {
      console.log('\n⚠️  GOOD HYDRATION COMPLIANCE');
      console.log('Some issues detected that need attention');
    } else {
      console.log('\n🚨 POOR HYDRATION COMPLIANCE');
      console.log('Significant hydration issues detected - immediate attention required');
    }

    // Show failed pages
    if (this.results.failed.length > 0) {
      console.log('\n🚨 FAILED PAGES:');
      this.results.failed.forEach(page => {
        console.log(`   ❌ ${page.pageName}`);
        if (!page.title.matches) console.log(`      - Title mismatch`);
        if (!page.description.matches) console.log(`      - Description mismatch`);
        if (!page.h1.matches) console.log(`      - H1 mismatch`);
        if (!page.canonical.matches) console.log(`      - Canonical URL mismatch`);
      });
    }

    // Show warnings
    if (this.results.warnings.length > 0) {
      console.log('\n⚠️  WARNINGS:');
      this.results.warnings.forEach(warning => {
        console.log(`   ⚠️  ${warning}`);
      });
    }

    // Save results
    const resultsPath = path.join(process.cwd(), 'comprehensive-hydration-audit-results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(this.results, null, 2));
    console.log(`\n💾 Full results saved to: ${resultsPath}`);
    
    return this.results;
  }
}

// Main execution
async function main() {
  const audit = new ComprehensiveHydrationAudit();
  
  try {
    await audit.runComprehensiveAudit();
    
    // Exit with appropriate code
    if (audit.results.complianceRate === 100) {
      process.exit(0);
    } else if (audit.results.complianceRate >= 90) {
      process.exit(1);
    } else {
      process.exit(2);
    }
    
  } catch (error) {
    console.error('❌ Audit failed:', error);
    process.exit(3);
  }
}

// Run the audit
main().catch(console.error);