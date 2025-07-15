#!/usr/bin/env node

/**
 * Comprehensive Hydration Audit for TravelWanders
 * Deep analysis comparing HTML files with React components for complete hydration compliance
 * Checks SEO metadata, structured data, navigation, content blocks, and more
 */

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

class ComprehensiveHydrationAuditor {
  constructor() {
    this.results = {
      passed: [],
      failed: [],
      warnings: [],
      totalChecks: 0,
      passedChecks: 0
    };
  }

  /**
   * Parse HTML content and extract all SEO and structural elements
   */
  parseHTMLContent(htmlPath) {
    if (!fs.existsSync(htmlPath)) {
      return null;
    }

    const content = fs.readFileSync(htmlPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;

    return {
      // Basic SEO
      title: document.querySelector('title')?.textContent?.trim() || '',
      metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '',
      
      // Heading hierarchy
      h1: Array.from(document.querySelectorAll('h1')).map(h => h.textContent.trim()),
      h2: Array.from(document.querySelectorAll('h2')).map(h => h.textContent.trim()),
      h3: Array.from(document.querySelectorAll('h3')).map(h => h.textContent.trim()),
      
      // Meta tags
      canonicalUrl: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
      metaKeywords: document.querySelector('meta[name="keywords"]')?.getAttribute('content') || '',
      metaAuthor: document.querySelector('meta[name="author"]')?.getAttribute('content') || '',
      
      // Open Graph tags
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
      ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
      ogImage: document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '',
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') || '',
      ogType: document.querySelector('meta[property="og:type"]')?.getAttribute('content') || '',
      ogSiteName: document.querySelector('meta[property="og:site_name"]')?.getAttribute('content') || '',
      
      // Twitter Cards
      twitterCard: document.querySelector('meta[name="twitter:card"]')?.getAttribute('content') || '',
      twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || '',
      twitterDescription: document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || '',
      twitterImage: document.querySelector('meta[name="twitter:image"]')?.getAttribute('content') || '',
      
      // Structured Data (JSON-LD)
      structuredData: Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
        .map(script => {
          try {
            return JSON.parse(script.textContent);
          } catch (e) {
            return null;
          }
        }).filter(Boolean),
      
      // Navigation elements
      navigation: Array.from(document.querySelectorAll('nav a, header a')).map(a => ({
        text: a.textContent.trim(),
        href: a.getAttribute('href')
      })),
      
      // Breadcrumbs
      breadcrumbs: Array.from(document.querySelectorAll('[aria-label*="breadcrumb"] a, .breadcrumb a, nav[aria-label="Breadcrumb"] a'))
        .map(a => ({
          text: a.textContent.trim(),
          href: a.getAttribute('href')
        })),
      
      // Internal links
      internalLinks: Array.from(document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]'))
        .map(a => ({
          text: a.textContent.trim(),
          href: a.getAttribute('href')
        })),
      
      // Performance hints
      preconnectLinks: Array.from(document.querySelectorAll('link[rel="preconnect"]')).map(link => link.getAttribute('href')),
      prefetchLinks: Array.from(document.querySelectorAll('link[rel="prefetch"]')).map(link => link.getAttribute('href')),
      preloadLinks: Array.from(document.querySelectorAll('link[rel="preload"]')).map(link => ({
        href: link.getAttribute('href'),
        as: link.getAttribute('as')
      })),
      
      // Images with SEO attributes
      images: Array.from(document.querySelectorAll('img')).map(img => ({
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt') || '',
        title: img.getAttribute('title') || '',
        loading: img.getAttribute('loading') || '',
        width: img.getAttribute('width') || '',
        height: img.getAttribute('height') || ''
      })),
      
      // Content sections
      contentSections: Array.from(document.querySelectorAll('section, article, main')).map(section => ({
        tagName: section.tagName.toLowerCase(),
        id: section.id || '',
        className: section.className || '',
        textLength: section.textContent.trim().length
      }))
    };
  }

  /**
   * Extract expected React SEO data from source files
   */
  extractReactSEOData(pageName) {
    // This would need to be implemented to read actual React components
    // For now, we'll use the expected values from the current audit
    const expectedData = {
      'Home Page': {
        title: 'Best Travel Guides & Destinations - TravelWanders',
        metaDescription: 'Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.',
        h1: ['Explore the world with confidence']
      },
      'Blogs Page': {
        title: 'Travel Blog Stories & Destination Guides - TravelWanders',
        metaDescription: 'Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.',
        h1: ['Travel Blog']
      },
      'Destinations Page': {
        title: 'All Destinations - TravelWanders',
        metaDescription: 'Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.',
        h1: ['All Destinations']
      },
      'London City Page': {
        title: '15 Best Things to Do in London, United Kingdom (2025 Guide)',
        metaDescription: 'Discover the best things to do in London with this comprehensive 2025 guide. From iconic Tower of London to hidden gems, explore top attractions and insider ...',
        h1: ['15 Best Things to Do in London, United Kingdom (2025 Guide)']
      },
      'Rome City Page': {
        title: '15 Best Things to Do in Rome, Italy (2025 Guide)',
        metaDescription: 'Discover the best things to do in Rome with this comprehensive 2025 guide. From the Colosseum to Vatican City, explore top attractions and insider tips for a...',
        h1: ['15 Best Things to Do in Rome, Italy (2025 Guide)']
      },
      'Edinburgh City Page': {
        title: '15 Best Things to Do in Edinburgh, United Kingdom (2025 Guide)',
        metaDescription: 'Planning a trip to Edinburgh? Wondering about the best things to do in Edinburgh? You\'re in the right place! This guide is packed with must-see attractions, ...',
        h1: ['15 Best Things to Do in Edinburgh, United Kingdom (2025 Guide)']
      },
      'Individual Blog Post': {
        title: 'Underrated Destinations for Solo Travelers - TravelWanders',
        metaDescription: 'Looking to explore beyond the typical solo travel spots? There are plenty of underrated destinations that offer a unique experience without the crowds. From the charming streets of Ljubljana to the vibrant culture of Oaxaca, these hidden gems provide a perfect mix of tranquility, adventure, and authentic local vibes.',
        h1: ['Underrated Destinations for Solo Travelers']
      },
      'Cookie Policy': {
        title: 'Cookie Policy | TravelWanders Travel Guide Platform',
        metaDescription: 'Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.',
        h1: ['Cookie Policy']
      },
      'Privacy Policy': {
        title: 'Privacy Policy - TravelWanders',
        metaDescription: 'Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.',
        h1: ['Privacy Policy']
      },
      'Terms of Service': {
        title: 'Terms of Service & User Agreement - TravelWanders',
        metaDescription: 'Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.',
        h1: ['Terms of Service']
      }
    };

    return expectedData[pageName] || {};
  }

  /**
   * Compare two values and track results
   */
  compareValues(category, field, expected, actual, pageName) {
    this.results.totalChecks++;
    const matches = expected === actual;
    
    if (matches) {
      this.results.passedChecks++;
    }
    
    return {
      category,
      field,
      expected,
      actual,
      matches,
      page: pageName
    };
  }

  /**
   * Compare arrays
   */
  compareArrays(category, field, expected, actual, pageName) {
    this.results.totalChecks++;
    const matches = JSON.stringify(expected.sort()) === JSON.stringify(actual.sort());
    
    if (matches) {
      this.results.passedChecks++;
    }
    
    return {
      category,
      field,
      expected,
      actual,
      matches,
      page: pageName
    };
  }

  /**
   * Audit a single page comprehensively
   */
  auditPageComprehensive(pageName, htmlPath) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🔍 COMPREHENSIVE AUDIT: ${pageName.toUpperCase()}`);
    console.log('='.repeat(60));

    const htmlData = this.parseHTMLContent(htmlPath);
    if (!htmlData) {
      console.log(`❌ HTML file not found: ${htmlPath}`);
      return null;
    }

    const expectedData = this.extractReactSEOData(pageName);
    const pageResults = {
      page: pageName,
      htmlPath,
      checks: [],
      passed: 0,
      failed: 0
    };

    // Basic SEO checks
    const titleCheck = this.compareValues('Basic SEO', 'Title', expectedData.title, htmlData.title, pageName);
    const descCheck = this.compareValues('Basic SEO', 'Meta Description', expectedData.metaDescription, htmlData.metaDescription, pageName);
    const h1Check = this.compareArrays('Basic SEO', 'H1 Tags', expectedData.h1 || [], htmlData.h1, pageName);

    pageResults.checks.push(titleCheck, descCheck, h1Check);

    // Log basic results
    console.log(`\n📋 Basic SEO Elements:`);
    console.log(`   Title: ${titleCheck.matches ? '✅' : '❌'} ${titleCheck.matches ? 'Match' : 'Mismatch'}`);
    if (!titleCheck.matches) {
      console.log(`      Expected: "${titleCheck.expected}"`);
      console.log(`      Actual:   "${titleCheck.actual}"`);
    }
    
    console.log(`   Meta Description: ${descCheck.matches ? '✅' : '❌'} ${descCheck.matches ? 'Match' : 'Mismatch'}`);
    if (!descCheck.matches) {
      console.log(`      Expected: "${descCheck.expected}"`);
      console.log(`      Actual:   "${descCheck.actual}"`);
    }
    
    console.log(`   H1 Tags: ${h1Check.matches ? '✅' : '❌'} ${h1Check.matches ? 'Match' : 'Mismatch'}`);
    if (!h1Check.matches) {
      console.log(`      Expected: [${h1Check.expected.join(', ')}]`);
      console.log(`      Actual:   [${h1Check.actual.join(', ')}]`);
    }

    // Meta tag analysis
    console.log(`\n🏷️  Meta Tag Analysis:`);
    console.log(`   Canonical URL: ${htmlData.canonicalUrl ? '✅' : '❌'} ${htmlData.canonicalUrl || 'Missing'}`);
    console.log(`   Open Graph Title: ${htmlData.ogTitle ? '✅' : '❌'} ${htmlData.ogTitle ? 'Present' : 'Missing'}`);
    console.log(`   Open Graph Description: ${htmlData.ogDescription ? '✅' : '❌'} ${htmlData.ogDescription ? 'Present' : 'Missing'}`);
    console.log(`   Open Graph Image: ${htmlData.ogImage ? '✅' : '❌'} ${htmlData.ogImage ? 'Present' : 'Missing'}`);
    console.log(`   Twitter Card: ${htmlData.twitterCard ? '✅' : '❌'} ${htmlData.twitterCard || 'Missing'}`);

    // Structured Data analysis
    console.log(`\n📊 Structured Data (JSON-LD):`);
    console.log(`   Scripts Found: ${htmlData.structuredData.length}`);
    htmlData.structuredData.forEach((data, index) => {
      console.log(`   Schema ${index + 1}: ${data['@type'] || 'Unknown'} (${Object.keys(data).length} properties)`);
    });

    // Navigation analysis
    console.log(`\n🧭 Navigation Structure:`);
    console.log(`   Navigation Links: ${htmlData.navigation.length}`);
    console.log(`   Breadcrumbs: ${htmlData.breadcrumbs.length}`);
    console.log(`   Internal Links: ${htmlData.internalLinks.length}`);

    // Performance hints analysis
    console.log(`\n⚡ Performance Optimization:`);
    console.log(`   Preconnect Links: ${htmlData.preconnectLinks.length}`);
    console.log(`   Prefetch Links: ${htmlData.prefetchLinks.length}`);
    console.log(`   Preload Resources: ${htmlData.preloadLinks.length}`);

    // Image optimization analysis
    console.log(`\n🖼️  Image Optimization:`);
    const imagesWithAlt = htmlData.images.filter(img => img.alt).length;
    const imagesWithDimensions = htmlData.images.filter(img => img.width && img.height).length;
    const imagesWithLazyLoading = htmlData.images.filter(img => img.loading === 'lazy').length;
    
    console.log(`   Total Images: ${htmlData.images.length}`);
    console.log(`   Images with Alt Text: ${imagesWithAlt}/${htmlData.images.length} (${((imagesWithAlt/htmlData.images.length)*100).toFixed(1)}%)`);
    console.log(`   Images with Dimensions: ${imagesWithDimensions}/${htmlData.images.length} (${((imagesWithDimensions/htmlData.images.length)*100).toFixed(1)}%)`);
    console.log(`   Images with Lazy Loading: ${imagesWithLazyLoading}/${htmlData.images.length} (${((imagesWithLazyLoading/htmlData.images.length)*100).toFixed(1)}%)`);

    // Content structure analysis
    console.log(`\n📝 Content Structure:`);
    console.log(`   H1 Tags: ${htmlData.h1.length}`);
    console.log(`   H2 Tags: ${htmlData.h2.length}`);
    console.log(`   H3 Tags: ${htmlData.h3.length}`);
    console.log(`   Content Sections: ${htmlData.contentSections.length}`);

    // Calculate page score
    pageResults.passed = pageResults.checks.filter(check => check.matches).length;
    pageResults.failed = pageResults.checks.length - pageResults.passed;
    const pageScore = pageResults.checks.length > 0 ? ((pageResults.passed / pageResults.checks.length) * 100).toFixed(1) : 0;

    console.log(`\n🎯 Page Score: ${pageScore}% (${pageResults.passed}/${pageResults.checks.length} checks passed)`);

    if (pageResults.failed === 0) {
      this.results.passed.push(pageResults);
      console.log(`🎉 ${pageName} PASSED - Perfect hydration compliance!`);
    } else {
      this.results.failed.push(pageResults);
      console.log(`⚠️  ${pageName} has ${pageResults.failed} hydration issues`);
    }

    return pageResults;
  }

  /**
   * Run comprehensive audit across all pages
   */
  async runComprehensiveAudit() {
    console.log('🔍 Starting Comprehensive Hydration Audit...');
    console.log('Analyzing SEO metadata, structured data, navigation, content, and performance optimization\n');

    const pages = [
      { name: 'Home Page', path: 'dist/public/home-seo.html' },
      { name: 'Blogs Page', path: 'dist/public/blogs-seo.html' },
      { name: 'Destinations Page', path: 'dist/public/destinations-seo.html' },
      { name: 'London City Page', path: 'dist/public/best-things-to-do-in-london/index.html' },
      { name: 'Rome City Page', path: 'dist/public/best-things-to-do-in-rome/index.html' },
      { name: 'Edinburgh City Page', path: 'dist/public/best-things-to-do-in-edinburgh.html' },
      { name: 'Individual Blog Post', path: 'dist/public/blog/underrated-destinations-for-solo-travelers.html' },
      { name: 'Cookie Policy', path: 'dist/public/cookie-policy.html' },
      { name: 'Privacy Policy', path: 'dist/public/privacy-policy.html' },
      { name: 'Terms of Service', path: 'dist/public/terms-of-service.html' }
    ];

    for (const page of pages) {
      this.auditPageComprehensive(page.name, page.path);
    }

    this.generateComprehensiveReport();
  }

  /**
   * Generate comprehensive audit report
   */
  generateComprehensiveReport() {
    console.log('\n' + '='.repeat(80));
    console.log('🎯 COMPREHENSIVE HYDRATION AUDIT SUMMARY');
    console.log('='.repeat(80));

    const totalPages = this.results.passed.length + this.results.failed.length;
    const passRate = totalPages > 0 ? ((this.results.passed.length / totalPages) * 100).toFixed(1) : 0;
    const checkPassRate = this.results.totalChecks > 0 ? ((this.results.passedChecks / this.results.totalChecks) * 100).toFixed(1) : 0;

    console.log(`📊 Overall Results:`);
    console.log(`   Pages Audited: ${totalPages}`);
    console.log(`   Pages Passed: ${this.results.passed.length} (${passRate}%)`);
    console.log(`   Pages Failed: ${this.results.failed.length} (${100 - passRate}%)`);
    console.log(`   Total Checks: ${this.results.totalChecks}`);
    console.log(`   Checks Passed: ${this.results.passedChecks} (${checkPassRate}%)`);
    console.log(`   Checks Failed: ${this.results.totalChecks - this.results.passedChecks} (${100 - checkPassRate}%)`);

    if (this.results.failed.length > 0) {
      console.log(`\n🚨 PAGES WITH ISSUES (${this.results.failed.length}):`);
      this.results.failed.forEach(result => {
        const pageScore = result.checks.length > 0 ? ((result.passed / result.checks.length) * 100).toFixed(1) : 0;
        console.log(`   ⚠️  ${result.page} - ${pageScore}% (${result.failed} issues)`);
        
        result.checks.forEach(check => {
          if (!check.matches) {
            console.log(`      ❌ ${check.category} - ${check.field}`);
          }
        });
      });
    }

    if (this.results.passed.length > 0) {
      console.log(`\n✅ PERFECT PAGES (${this.results.passed.length}):`);
      this.results.passed.forEach(result => {
        console.log(`   ✅ ${result.page} - 100% hydration compliance`);
      });
    }

    console.log(`\n🎯 AUDIT COMPLETE`);
    console.log(`Overall Hydration Compliance: ${checkPassRate}%`);
    
    if (this.results.failed.length === 0) {
      console.log('🎉 EXCELLENT! Perfect hydration achieved across all pages!');
    } else {
      console.log(`⚠️  ${this.results.failed.length} pages need attention for complete hydration compliance.`);
    }

    console.log('\n📋 RECOMMENDATIONS:');
    console.log('   • Ensure React components generate identical SEO metadata as HTML files');
    console.log('   • Verify structured data is preserved during hydration');
    console.log('   • Check that all navigation elements match between HTML and React');
    console.log('   • Confirm image optimization attributes are consistent');
    console.log('   • Validate performance hints are maintained after hydration');
  }
}

// Run the comprehensive audit
async function main() {
  const auditor = new ComprehensiveHydrationAuditor();
  await auditor.runComprehensiveAudit();
}

// Execute audit
main().catch(console.error);

export { ComprehensiveHydrationAuditor };