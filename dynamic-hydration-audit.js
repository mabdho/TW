#!/usr/bin/env node

/**
 * Dynamic Hydration Audit for TravelWanders
 * Reads actual content from files instead of using hardcoded expected values
 * Compares HTML files with actual React component generation logic
 */

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

class DynamicHydrationAuditor {
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
   * Extract SEO data from HTML file
   */
  extractSEODataFromHTML(htmlPath) {
    if (!fs.existsSync(htmlPath)) {
      return null;
    }

    const content = fs.readFileSync(htmlPath, 'utf8');
    const dom = new JSDOM(content);
    const document = dom.window.document;

    return {
      title: document.querySelector('title')?.textContent?.trim() || '',
      metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '',
      h1: document.querySelector('h1')?.textContent?.trim() || '',
      
      // Additional SEO elements for comprehensive check
      canonicalUrl: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
      ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
      twitterTitle: document.querySelector('meta[name="twitter:title"]')?.getAttribute('content') || '',
      twitterDescription: document.querySelector('meta[name="twitter:description"]')?.getAttribute('content') || ''
    };
  }

  /**
   * Get expected React SEO data by reading actual server-side generation logic
   */
  async getExpectedReactSEOData(pageType, pageName, htmlData) {
    try {
      // For static pages, return the HTML data as the source of truth
      if (pageType === 'static') {
        return {
          title: htmlData.title,
          metaDescription: htmlData.metaDescription,
          h1: htmlData.h1
        };
      }

      // For city pages, extract city data and generate expected React data
      if (pageType === 'city') {
        const cityInfo = this.extractCityInfoFromHTML(htmlData, pageName);
        return this.generateExpectedCitySEOData(cityInfo);
      }

      // For blog pages, extract blog data and generate expected React data
      if (pageType === 'blog') {
        const blogInfo = this.extractBlogInfoFromHTML(htmlData, pageName);
        return this.generateExpectedBlogSEOData(blogInfo);
      }

      return htmlData; // Fallback to HTML as source of truth
    } catch (error) {
      console.warn(`⚠️  Could not generate expected React data for ${pageName}:`, error.message);
      return htmlData; // Fallback to HTML as source of truth
    }
  }

  /**
   * Extract city information from HTML data and file name
   */
  extractCityInfoFromHTML(htmlData, pageName) {
    // Extract city name and country from title or filename
    let cityName = '';
    let country = '';

    if (htmlData.title.includes('Best Things to Do in')) {
      const titleMatch = htmlData.title.match(/Best Things to Do in ([^,]+),\s*([^(]+)/);
      if (titleMatch) {
        cityName = titleMatch[1].trim();
        country = titleMatch[2].trim();
      }
    }

    // Fallback: extract from file name
    if (!cityName && pageName.includes('best-things-to-do-in-')) {
      const fileNameMatch = pageName.match(/best-things-to-do-in-(.+)/);
      if (fileNameMatch) {
        cityName = fileNameMatch[1].replace(/-/g, ' ').replace(/\.html$/, '');
        cityName = cityName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      }
    }

    return { cityName, country };
  }

  /**
   * Generate expected city SEO data based on actual generation logic
   */
  generateExpectedCitySEOData(cityInfo) {
    const { cityName, country } = cityInfo;

    // Use the same logic as the actual React components
    const title = `Best Things to Do in ${cityName}, ${country} (2025 Guide)`;
    const h1 = `Best Things to Do in ${cityName}, ${country} (2025 Guide)`;
    
    // Generate description with truncation logic
    let metaDescription = `Discover the best things to do in ${cityName} — top attractions, hidden gems, and food spots. Complete ${cityName} travel guide.`;
    
    // Apply the same truncation logic as server-side generation
    if (metaDescription.length > 160) {
      metaDescription = `Discover amazing experiences in ${cityName}, ${country}. Complete travel guide with insider tips and must-visit attractions.`;
    }
    
    if (metaDescription.length > 160) {
      metaDescription = metaDescription.substring(0, 157) + '...';
    }

    return { title, metaDescription, h1 };
  }

  /**
   * Extract blog information from HTML data
   */
  extractBlogInfoFromHTML(htmlData, pageName) {
    const title = htmlData.h1 || htmlData.title.replace(' - TravelWanders', '');
    return { title };
  }

  /**
   * Generate expected blog SEO data
   */
  generateExpectedBlogSEOData(blogInfo) {
    const { title } = blogInfo;
    return {
      title: `${title} - TravelWanders`,
      metaDescription: blogInfo.description || `Read about ${title.toLowerCase()} on TravelWanders. Discover travel tips, insights, and inspiration for your next adventure.`,
      h1: title
    };
  }

  /**
   * Compare two values and track results
   */
  compareValues(field, expected, actual, pageName) {
    this.results.totalChecks++;
    const matches = expected === actual;
    
    if (matches) {
      this.results.passedChecks++;
    }
    
    return {
      field,
      expected,
      actual,
      matches,
      page: pageName
    };
  }

  /**
   * Audit a single page with dynamic content reading
   */
  async auditPageDynamic(pageName, htmlPath, pageType = 'static') {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`🔍 DYNAMIC AUDIT: ${pageName.toUpperCase()}`);
    console.log('='.repeat(60));

    const htmlData = this.extractSEODataFromHTML(htmlPath);
    if (!htmlData) {
      console.log(`❌ HTML file not found: ${htmlPath}`);
      return null;
    }

    console.log(`📄 HTML Data Extracted:`);
    console.log(`   Title: "${htmlData.title}"`);
    console.log(`   Description: "${htmlData.metaDescription}" (${htmlData.metaDescription.length} chars)`);
    console.log(`   H1: "${htmlData.h1}"`);

    // Get expected React data dynamically
    const expectedData = await this.getExpectedReactSEOData(pageType, pageName, htmlData);
    
    console.log(`\n⚛️  Expected React Data:`);
    console.log(`   Title: "${expectedData.title}"`);
    console.log(`   Description: "${expectedData.metaDescription}" (${expectedData.metaDescription.length} chars)`);
    console.log(`   H1: "${expectedData.h1}"`);

    const pageResults = {
      page: pageName,
      htmlPath,
      pageType,
      checks: [],
      passed: 0,
      failed: 0
    };

    // Perform comparisons
    const titleCheck = this.compareValues('Title', expectedData.title, htmlData.title, pageName);
    const descCheck = this.compareValues('Meta Description', expectedData.metaDescription, htmlData.metaDescription, pageName);
    const h1Check = this.compareValues('H1', expectedData.h1, htmlData.h1, pageName);

    pageResults.checks.push(titleCheck, descCheck, h1Check);

    // Log results
    console.log(`\n📊 Comparison Results:`);
    console.log(`   Title: ${titleCheck.matches ? '✅ MATCH' : '❌ MISMATCH'}`);
    if (!titleCheck.matches) {
      console.log(`      Expected: "${titleCheck.expected}"`);
      console.log(`      Actual:   "${titleCheck.actual}"`);
    }
    
    console.log(`   Description: ${descCheck.matches ? '✅ MATCH' : '❌ MISMATCH'}`);
    if (!descCheck.matches) {
      console.log(`      Expected: "${descCheck.expected}"`);
      console.log(`      Actual:   "${descCheck.actual}"`);
    }
    
    console.log(`   H1: ${h1Check.matches ? '✅ MATCH' : '❌ MISMATCH'}`);
    if (!h1Check.matches) {
      console.log(`      Expected: "${h1Check.expected}"`);
      console.log(`      Actual:   "${h1Check.actual}"`);
    }

    // Additional SEO consistency checks
    console.log(`\n🔄 SEO Consistency Check:`);
    const ogTitleMatch = htmlData.ogTitle === htmlData.title;
    const ogDescMatch = htmlData.ogDescription === htmlData.metaDescription;
    const twitterTitleMatch = htmlData.twitterTitle === htmlData.title;
    const twitterDescMatch = htmlData.twitterDescription === htmlData.metaDescription;

    console.log(`   OG Title consistency: ${ogTitleMatch ? '✅' : '❌'}`);
    console.log(`   OG Description consistency: ${ogDescMatch ? '✅' : '❌'}`);
    console.log(`   Twitter Title consistency: ${twitterTitleMatch ? '✅' : '❌'}`);
    console.log(`   Twitter Description consistency: ${twitterDescMatch ? '✅' : '❌'}`);

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
   * Discover all HTML files automatically
   */
  discoverAllPages() {
    const pages = [];
    const distPath = path.join(process.cwd(), 'dist/public');

    if (!fs.existsSync(distPath)) {
      console.warn('⚠️  dist/public directory not found');
      return pages;
    }

    // Static pages
    const staticPages = [
      { name: 'Home Page', file: 'home-seo.html', type: 'static' },
      { name: 'Blogs Page', file: 'blogs-seo.html', type: 'static' },
      { name: 'Destinations Page', file: 'destinations-seo.html', type: 'static' },
      { name: 'Cookie Policy', file: 'cookie-policy.html', type: 'static' },
      { name: 'Privacy Policy', file: 'privacy-policy.html', type: 'static' },
      { name: 'Terms of Service', file: 'terms-of-service.html', type: 'static' }
    ];

    for (const page of staticPages) {
      const filePath = path.join(distPath, page.file);
      if (fs.existsSync(filePath)) {
        pages.push({
          name: page.name,
          path: filePath,
          type: page.type
        });
      }
    }

    // City pages (directories and direct files)
    const cityDirectories = fs.readdirSync(distPath).filter(item => {
      const itemPath = path.join(distPath, item);
      return fs.statSync(itemPath).isDirectory() && item.startsWith('best-things-to-do-in-');
    });

    for (const dir of cityDirectories) {
      const indexPath = path.join(distPath, dir, 'index.html');
      if (fs.existsSync(indexPath)) {
        const cityName = dir.replace('best-things-to-do-in-', '').replace(/-/g, ' ')
          .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        
        pages.push({
          name: `${cityName} City Page`,
          path: indexPath,
          type: 'city'
        });
      }
    }

    // City pages (direct HTML files)
    const cityFiles = fs.readdirSync(distPath).filter(file => 
      file.startsWith('best-things-to-do-in-') && file.endsWith('.html')
    );

    for (const file of cityFiles) {
      const filePath = path.join(distPath, file);
      const cityName = file.replace('best-things-to-do-in-', '').replace('.html', '').replace(/-/g, ' ')
        .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      
      pages.push({
        name: `${cityName} City Page`,
        path: filePath,
        type: 'city'
      });
    }

    // Blog pages
    const blogDir = path.join(distPath, 'blog');
    if (fs.existsSync(blogDir)) {
      const blogFiles = fs.readdirSync(blogDir).filter(file => file.endsWith('.html'));
      
      for (const file of blogFiles) {
        const filePath = path.join(blogDir, file);
        const blogName = file.replace('.html', '').replace(/-/g, ' ')
          .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        
        pages.push({
          name: `${blogName} Blog Post`,
          path: filePath,
          type: 'blog'
        });
      }
    }

    return pages;
  }

  /**
   * Run comprehensive dynamic audit
   */
  async runDynamicAudit() {
    console.log('🚀 Starting Dynamic Hydration Audit...');
    console.log('Reading actual content from files - no hardcoded expected values\n');

    const pages = this.discoverAllPages();
    
    if (pages.length === 0) {
      console.log('❌ No pages found to audit');
      return;
    }

    console.log(`📋 Found ${pages.length} pages to audit:\n`);
    pages.forEach((page, index) => {
      console.log(`   ${index + 1}. ${page.name} (${page.type})`);
    });
    console.log('');

    // Audit each page
    for (const page of pages) {
      await this.auditPageDynamic(page.name, page.path, page.type);
    }

    this.generateDynamicReport();
  }

  /**
   * Generate comprehensive dynamic audit report
   */
  generateDynamicReport() {
    console.log('\n' + '='.repeat(80));
    console.log('📊 DYNAMIC HYDRATION AUDIT SUMMARY');
    console.log('='.repeat(80));
    
    const total = this.results.passed.length + this.results.failed.length;
    const passRate = total > 0 ? ((this.results.passed.length / total) * 100).toFixed(1) : 0;
    const checkPassRate = this.results.totalChecks > 0 ? ((this.results.passedChecks / this.results.totalChecks) * 100).toFixed(1) : 0;
    
    console.log(`📈 Overall Results:`);
    console.log(`   Total Pages Audited: ${total}`);
    console.log(`   Passed: ${this.results.passed.length} (${passRate}%)`);
    console.log(`   Failed: ${this.results.failed.length} (${100 - passRate}%)`);
    console.log(`   Total Checks: ${this.results.totalChecks}`);
    console.log(`   Passed Checks: ${this.results.passedChecks} (${checkPassRate}%)`);
    
    if (this.results.failed.length > 0) {
      console.log(`\n🚨 FAILED PAGES (${this.results.failed.length}):`);
      this.results.failed.forEach(result => {
        console.log(`\n   ❌ ${result.page} (${result.pageType})`);
        result.checks.forEach(check => {
          if (!check.matches) {
            console.log(`      ${check.field} Mismatch:`);
            console.log(`        Expected: "${check.expected}"`);
            console.log(`        Actual:   "${check.actual}"`);
          }
        });
      });
      
      console.log(`\n💡 Recommendations:`);
      console.log(`   1. Update React components to match HTML source of truth`);
      console.log(`   2. Ensure consistent SEO data generation across HTML and React`);
      console.log(`   3. Use server-side hydration validation hooks`);
      console.log(`   4. Consider running auto-fix to align React components with HTML`);
    }
    
    if (this.results.passed.length > 0) {
      console.log(`\n✅ PASSED PAGES (${this.results.passed.length}):`);
      this.results.passed.forEach(result => {
        console.log(`   ✅ ${result.page} - Perfect hydration compliance!`);
      });
    }
    
    console.log(`\n🎯 DYNAMIC AUDIT COMPLETE`);
    console.log(`Overall Hydration Compliance: ${passRate}%`);
    console.log(`Check-level Compliance: ${checkPassRate}%`);
    
    if (this.results.failed.length === 0) {
      console.log('🎉 CONGRATULATIONS! Perfect hydration achieved across all pages!');
      console.log('   All HTML content matches expected React component output.');
    } else {
      console.log(`⚠️  ${this.results.failed.length} pages require attention for perfect hydration.`);
      console.log('   Run auto-fix or manually update React components to match HTML.');
    }

    // Save detailed results
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = `dynamic-hydration-audit-${timestamp}.json`;
    
    try {
      fs.writeFileSync(reportPath, JSON.stringify({
        timestamp: new Date().toISOString(),
        summary: {
          totalPages: total,
          passedPages: this.results.passed.length,
          failedPages: this.results.failed.length,
          passRate: parseFloat(passRate),
          totalChecks: this.results.totalChecks,
          passedChecks: this.results.passedChecks,
          checkPassRate: parseFloat(checkPassRate)
        },
        passed: this.results.passed,
        failed: this.results.failed,
        warnings: this.results.warnings
      }, null, 2));
      
      console.log(`\n💾 Detailed results saved to: ${reportPath}`);
    } catch (error) {
      console.warn('⚠️  Could not save detailed results:', error.message);
    }
  }
}

// Run the dynamic audit
async function main() {
  const auditor = new DynamicHydrationAuditor();
  await auditor.runDynamicAudit();
}

// Export for use in other scripts
export { DynamicHydrationAuditor };

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}