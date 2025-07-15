#!/usr/bin/env node

/**
 * Enterprise-level Hydration Audit Script
 * Compares HTML files with React components to identify hydration mismatches
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

class HydrationAuditor {
  constructor() {
    this.results = {
      passed: [],
      failed: [],
      warnings: []
    };
  }

  /**
   * Extract H1 content from HTML files
   */
  extractH1FromHTML(htmlPath) {
    if (!fs.existsSync(htmlPath)) {
      return null;
    }
    
    const content = fs.readFileSync(htmlPath, 'utf8');
    const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
    
    if (h1Match) {
      // Clean up the H1 content, removing HTML tags and normalizing whitespace
      return h1Match[1].replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    }
    
    return null;
  }

  /**
   * Extract title from HTML files
   */
  extractTitleFromHTML(htmlPath) {
    if (!fs.existsSync(htmlPath)) {
      return null;
    }
    
    const content = fs.readFileSync(htmlPath, 'utf8');
    const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/s);
    
    if (titleMatch) {
      return titleMatch[1].trim();
    }
    
    return null;
  }

  /**
   * Extract meta description from HTML files
   */
  extractMetaDescriptionFromHTML(htmlPath) {
    if (!fs.existsSync(htmlPath)) {
      return null;
    }
    
    const content = fs.readFileSync(htmlPath, 'utf8');
    const metaMatch = content.match(/<meta\s+name="description"\s+content="([^"]*)"[^>]*>/i);
    
    if (metaMatch) {
      return metaMatch[1].trim();
    }
    
    return null;
  }

  /**
   * Audit individual page
   */
  auditPage(pageName, htmlPath, expectedH1, expectedTitle, expectedDescription) {
    console.log(`\n=== AUDITING ${pageName.toUpperCase()} ===`);
    
    const actualH1 = this.extractH1FromHTML(htmlPath);
    const actualTitle = this.extractTitleFromHTML(htmlPath);
    const actualDescription = this.extractMetaDescriptionFromHTML(htmlPath);
    
    const result = {
      page: pageName,
      htmlPath: htmlPath,
      h1: {
        expected: expectedH1,
        actual: actualH1,
        matches: actualH1 === expectedH1
      },
      title: {
        expected: expectedTitle,
        actual: actualTitle,
        matches: actualTitle === expectedTitle
      },
      description: {
        expected: expectedDescription,
        actual: actualDescription,
        matches: actualDescription === expectedDescription
      }
    };

    // Log results
    console.log(`H1: ${result.h1.matches ? '✅' : '❌'}`);
    console.log(`  Expected: "${expectedH1}"`);
    console.log(`  Actual:   "${actualH1}"`);
    
    console.log(`Title: ${result.title.matches ? '✅' : '❌'}`);
    console.log(`  Expected: "${expectedTitle}"`);
    console.log(`  Actual:   "${actualTitle}"`);
    
    console.log(`Description: ${result.description.matches ? '✅' : '❌'}`);
    console.log(`  Expected: "${expectedDescription}"`);
    console.log(`  Actual:   "${actualDescription}"`);

    const allMatch = result.h1.matches && result.title.matches && result.description.matches;
    
    if (allMatch) {
      this.results.passed.push(result);
      console.log(`🎉 ${pageName} PASSED - Perfect hydration match!`);
    } else {
      this.results.failed.push(result);
      console.log(`🚨 ${pageName} FAILED - Hydration mismatch detected!`);
    }

    return result;
  }

  /**
   * Run comprehensive audit
   */
  async runComprehensiveAudit() {
    console.log('🔍 Starting Comprehensive Enterprise-Level Hydration Audit...\n');

    // Home Page
    this.auditPage(
      'Home Page',
      'dist/public/home-seo.html',
      'Explore the world with confidence',
      'Best Travel Guides & Destinations - TravelWanders',
      'Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.'
    );

    // Blogs Page
    this.auditPage(
      'Blogs Page',
      'dist/public/blogs-seo.html',
      'Travel Blog',
      'Travel Blog Stories & Destination Guides - TravelWanders',
      'Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.'
    );

    // Destinations Page
    this.auditPage(
      'Destinations Page',
      'dist/public/destinations-seo.html',
      'All Destinations',
      'All Destinations - TravelWanders',
      'Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.'
    );

    // London City Page
    this.auditPage(
      'London City Page',
      'dist/public/best-things-to-do-in-london/index.html',
      '15 Best Things to Do in London, United Kingdom (2025 Guide)',
      '15 Best Things to Do in London, United Kingdom (2025 Guide)',
      'Discover the best things to do in London with this comprehensive 2025 guide. From iconic Tower of London to hidden gems, explore top attractions and insider ...'
    );

    // Rome City Page
    this.auditPage(
      'Rome City Page',
      'dist/public/best-things-to-do-in-rome/index.html',
      '15 Best Things to Do in Rome, Italy (2025 Guide)',
      '15 Best Things to Do in Rome, Italy (2025 Guide)',
      'Discover the best things to do in Rome with this comprehensive 2025 guide. From the Colosseum to Vatican City, explore top attractions and insider tips for a...'
    );

    // Individual Blog Post
    this.auditPage(
      'Individual Blog Post',
      'dist/public/blog/underrated-destinations-for-solo-travelers.html',
      'Underrated Destinations for Solo Travelers',
      'Underrated Destinations for Solo Travelers - TravelWanders',
      'Looking to explore beyond the typical solo travel spots? There are plenty of underrated destinations that offer a unique experience without the crowds. From the charming streets of Ljubljana to the vibrant culture of Oaxaca, these hidden gems provide a perfect mix of tranquility, adventure, and authentic local vibes.'
    );

    // Legal Pages
    this.auditPage(
      'Cookie Policy',
      'dist/public/cookie-policy.html',
      'Cookie Policy',
      'Cookie Policy | TravelWanders Travel Guide Platform',
      'Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.'
    );

    this.auditPage(
      'Privacy Policy',
      'dist/public/privacy-policy.html',
      'Privacy Policy',
      'Privacy Policy - TravelWanders',
      'Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.'
    );

    this.auditPage(
      'Terms of Service',
      'dist/public/terms-of-service.html',
      'Terms of Service',
      'Terms of Service & User Agreement - TravelWanders',
      'Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.'
    );

    // Generate summary report
    this.generateSummaryReport();
  }

  /**
   * Generate comprehensive summary report
   */
  generateSummaryReport() {
    console.log('\n' + '='.repeat(60));
    console.log('🎯 COMPREHENSIVE HYDRATION AUDIT SUMMARY');
    console.log('='.repeat(60));
    
    const total = this.results.passed.length + this.results.failed.length;
    const passRate = ((this.results.passed.length / total) * 100).toFixed(1);
    
    console.log(`📊 Overall Results:`);
    console.log(`   Total Pages Audited: ${total}`);
    console.log(`   Passed: ${this.results.passed.length} (${passRate}%)`);
    console.log(`   Failed: ${this.results.failed.length} (${100 - passRate}%)`);
    
    if (this.results.failed.length > 0) {
      console.log(`\n🚨 FAILED PAGES (${this.results.failed.length}):`);
      this.results.failed.forEach(result => {
        console.log(`   ❌ ${result.page}`);
        if (!result.h1.matches) {
          console.log(`      H1 Mismatch: Expected "${result.h1.expected}", Got "${result.h1.actual}"`);
        }
        if (!result.title.matches) {
          console.log(`      Title Mismatch: Expected "${result.title.expected}", Got "${result.title.actual}"`);
        }
        if (!result.description.matches) {
          console.log(`      Description Mismatch: Expected "${result.description.expected}", Got "${result.description.actual}"`);
        }
      });
    }
    
    if (this.results.passed.length > 0) {
      console.log(`\n✅ PASSED PAGES (${this.results.passed.length}):`);
      this.results.passed.forEach(result => {
        console.log(`   ✅ ${result.page} - Perfect hydration match!`);
      });
    }
    
    console.log(`\n🎯 AUDIT COMPLETE`);
    console.log(`Enterprise-level hydration compliance: ${passRate}%`);
    
    if (this.results.failed.length === 0) {
      console.log('🎉 CONGRATULATIONS! Perfect hydration achieved across all pages!');
    } else {
      console.log(`⚠️  ${this.results.failed.length} pages require attention for perfect hydration.`);
    }
  }
}

// Run the audit
async function main() {
  const auditor = new HydrationAuditor();
  await auditor.runComprehensiveAudit();
}

// Run the audit
main().catch(console.error);

export { HydrationAuditor };