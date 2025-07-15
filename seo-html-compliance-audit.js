#!/usr/bin/env node

/**
 * Comprehensive HTML SEO Compliance Audit for TravelWanders
 * Checks all generated HTML files for SEO best practices compliance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class HTMLSEOAuditor {
  constructor() {
    this.results = {
      totalPages: 0,
      compliantPages: 0,
      issues: [],
      compliance: {
        title: { passed: 0, failed: 0, details: [] },
        metaDescription: { passed: 0, failed: 0, details: [] },
        headings: { passed: 0, failed: 0, details: [] },
        images: { passed: 0, failed: 0, details: [] },
        internalLinks: { passed: 0, failed: 0, details: [] },
        structuredData: { passed: 0, failed: 0, details: [] },
        openGraph: { passed: 0, failed: 0, details: [] },
        twitter: { passed: 0, failed: 0, details: [] },
        canonical: { passed: 0, failed: 0, details: [] },
        mobile: { passed: 0, failed: 0, details: [] },
        performance: { passed: 0, failed: 0, details: [] },
        accessibility: { passed: 0, failed: 0, details: [] }
      }
    };
  }

  async auditAllHTMLPages() {
    console.log('🔍 COMPREHENSIVE HTML SEO COMPLIANCE AUDIT - TravelWanders');
    console.log('============================================================\n');

    const htmlFiles = await this.findAllHTMLFiles();
    this.results.totalPages = htmlFiles.length;

    console.log(`📊 Found ${htmlFiles.length} HTML pages to audit:\n`);

    for (const filePath of htmlFiles) {
      await this.auditHTMLFile(filePath);
    }

    this.generateComprehensiveReport();
  }

  async findAllHTMLFiles() {
    const htmlFiles = [];
    const distPublicDir = path.join(__dirname, 'dist', 'public');
    
    // Check for HTML files in dist/public
    if (fs.existsSync(distPublicDir)) {
      const files = fs.readdirSync(distPublicDir);
      for (const file of files) {
        const filePath = path.join(distPublicDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isFile() && file.endsWith('.html')) {
          htmlFiles.push(filePath);
        } else if (stat.isDirectory()) {
          // Check subdirectories for index.html
          const indexPath = path.join(filePath, 'index.html');
          if (fs.existsSync(indexPath)) {
            htmlFiles.push(indexPath);
          }
        }
      }
    }

    return htmlFiles;
  }

  async auditHTMLFile(filePath) {
    const relativePath = path.relative(__dirname, filePath);
    console.log(`🔍 Auditing: ${relativePath}`);

    try {
      const htmlContent = fs.readFileSync(filePath, 'utf-8');
      const dom = new JSDOM(htmlContent);
      const document = dom.window.document;

      const pageAudit = {
        file: relativePath,
        issues: [],
        passed: [],
        score: 0
      };

      // 1. Title Tag Compliance
      this.auditTitleTag(document, pageAudit);
      
      // 2. Meta Description Compliance
      this.auditMetaDescription(document, pageAudit);
      
      // 3. Heading Structure Compliance
      this.auditHeadingStructure(document, pageAudit);
      
      // 4. Image SEO Compliance
      this.auditImageSEO(document, pageAudit);
      
      // 5. Internal Links Compliance
      this.auditInternalLinks(document, pageAudit);
      
      // 6. Structured Data Compliance
      this.auditStructuredData(document, pageAudit);
      
      // 7. Open Graph Compliance
      this.auditOpenGraph(document, pageAudit);
      
      // 8. Twitter Cards Compliance
      this.auditTwitterCards(document, pageAudit);
      
      // 9. Canonical URL Compliance
      this.auditCanonicalURL(document, pageAudit);
      
      // 10. Mobile-First Compliance
      this.auditMobileFriendly(document, pageAudit);
      
      // 11. Performance SEO Compliance
      this.auditPerformanceSEO(document, pageAudit);
      
      // 12. Accessibility SEO Compliance
      this.auditAccessibilitySEO(document, pageAudit);

      // Calculate page score
      const totalChecks = pageAudit.passed.length + pageAudit.issues.length;
      pageAudit.score = totalChecks > 0 ? Math.round((pageAudit.passed.length / totalChecks) * 100) : 0;

      if (pageAudit.score >= 90) {
        this.results.compliantPages++;
      }

      console.log(`   Score: ${pageAudit.score}/100 ${pageAudit.score >= 90 ? '✅' : '⚠️'}`);
      
      if (pageAudit.issues.length > 0) {
        console.log(`   Issues: ${pageAudit.issues.length}`);
        pageAudit.issues.forEach(issue => console.log(`     ❌ ${issue}`));
      }
      
      console.log('');

    } catch (error) {
      console.error(`❌ Error auditing ${relativePath}:`, error.message);
    }
  }

  auditTitleTag(document, pageAudit) {
    const title = document.querySelector('title');
    if (!title || !title.textContent.trim()) {
      pageAudit.issues.push('Missing or empty title tag');
      this.results.compliance.title.failed++;
    } else {
      const titleText = title.textContent.trim();
      if (titleText.length < 30 || titleText.length > 60) {
        pageAudit.issues.push(`Title length not optimal: ${titleText.length} chars (30-60 recommended)`);
        this.results.compliance.title.failed++;
      } else {
        pageAudit.passed.push('Title tag optimal length');
        this.results.compliance.title.passed++;
      }
    }
  }

  auditMetaDescription(document, pageAudit) {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc || !metaDesc.getAttribute('content')) {
      pageAudit.issues.push('Missing meta description');
      this.results.compliance.metaDescription.failed++;
    } else {
      const descContent = metaDesc.getAttribute('content').trim();
      if (descContent.length < 120 || descContent.length > 160) {
        pageAudit.issues.push(`Meta description length not optimal: ${descContent.length} chars (120-160 recommended)`);
        this.results.compliance.metaDescription.failed++;
      } else {
        pageAudit.passed.push('Meta description optimal length');
        this.results.compliance.metaDescription.passed++;
      }
    }
  }

  auditHeadingStructure(document, pageAudit) {
    const h1s = document.querySelectorAll('h1');
    if (h1s.length === 0) {
      pageAudit.issues.push('Missing H1 tag');
      this.results.compliance.headings.failed++;
    } else if (h1s.length > 1) {
      pageAudit.issues.push(`Multiple H1 tags found: ${h1s.length} (should be 1)`);
      this.results.compliance.headings.failed++;
    } else {
      pageAudit.passed.push('Proper H1 structure');
      this.results.compliance.headings.passed++;
    }

    const h2s = document.querySelectorAll('h2, h3, h4, h5, h6');
    if (h2s.length === 0) {
      pageAudit.issues.push('No subheadings (H2-H6) found');
      this.results.compliance.headings.failed++;
    } else {
      pageAudit.passed.push('Subheadings present');
      this.results.compliance.headings.passed++;
    }
  }

  auditImageSEO(document, pageAudit) {
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    let imagesWithoutDimensions = 0;

    images.forEach(img => {
      if (!img.getAttribute('alt')) {
        imagesWithoutAlt++;
      }
      if (!img.getAttribute('width') || !img.getAttribute('height')) {
        imagesWithoutDimensions++;
      }
    });

    if (imagesWithoutAlt > 0) {
      pageAudit.issues.push(`${imagesWithoutAlt} images missing alt text`);
      this.results.compliance.images.failed++;
    } else if (images.length > 0) {
      pageAudit.passed.push('All images have alt text');
      this.results.compliance.images.passed++;
    }

    if (imagesWithoutDimensions > 0) {
      pageAudit.issues.push(`${imagesWithoutDimensions} images missing width/height attributes`);
      this.results.compliance.images.failed++;
    } else if (images.length > 0) {
      pageAudit.passed.push('All images have dimensions');
      this.results.compliance.images.passed++;
    }
  }

  auditInternalLinks(document, pageAudit) {
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="#"], a[href*="travelwanders.com"]');
    if (internalLinks.length < 3) {
      pageAudit.issues.push('Insufficient internal links for SEO');
      this.results.compliance.internalLinks.failed++;
    } else {
      pageAudit.passed.push(`Good internal linking: ${internalLinks.length} links`);
      this.results.compliance.internalLinks.passed++;
    }
  }

  auditStructuredData(document, pageAudit) {
    const jsonLd = document.querySelectorAll('script[type="application/ld+json"]');
    if (jsonLd.length === 0) {
      pageAudit.issues.push('Missing structured data (JSON-LD)');
      this.results.compliance.structuredData.failed++;
    } else {
      pageAudit.passed.push(`Structured data present: ${jsonLd.length} schemas`);
      this.results.compliance.structuredData.passed++;
    }
  }

  auditOpenGraph(document, pageAudit) {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    
    let ogIssues = 0;
    if (!ogTitle) ogIssues++;
    if (!ogDescription) ogIssues++;
    if (!ogImage) ogIssues++;

    if (ogIssues > 0) {
      pageAudit.issues.push(`Missing Open Graph tags: ${ogIssues}/3`);
      this.results.compliance.openGraph.failed++;
    } else {
      pageAudit.passed.push('Complete Open Graph implementation');
      this.results.compliance.openGraph.passed++;
    }
  }

  auditTwitterCards(document, pageAudit) {
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    
    if (!twitterCard || !twitterTitle) {
      pageAudit.issues.push('Incomplete Twitter Cards implementation');
      this.results.compliance.twitter.failed++;
    } else {
      pageAudit.passed.push('Twitter Cards implemented');
      this.results.compliance.twitter.passed++;
    }
  }

  auditCanonicalURL(document, pageAudit) {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      pageAudit.issues.push('Missing canonical URL');
      this.results.compliance.canonical.failed++;
    } else {
      pageAudit.passed.push('Canonical URL present');
      this.results.compliance.canonical.passed++;
    }
  }

  auditMobileFriendly(document, pageAudit) {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      pageAudit.issues.push('Missing viewport meta tag');
      this.results.compliance.mobile.failed++;
    } else {
      pageAudit.passed.push('Mobile viewport configured');
      this.results.compliance.mobile.passed++;
    }
  }

  auditPerformanceSEO(document, pageAudit) {
    const preload = document.querySelectorAll('link[rel="preload"]');
    const prefetch = document.querySelectorAll('link[rel="dns-prefetch"], link[rel="preconnect"]');
    
    if (preload.length === 0 && prefetch.length === 0) {
      pageAudit.issues.push('No performance optimization tags (preload/prefetch)');
      this.results.compliance.performance.failed++;
    } else {
      pageAudit.passed.push('Performance optimization implemented');
      this.results.compliance.performance.passed++;
    }
  }

  auditAccessibilitySEO(document, pageAudit) {
    const lang = document.documentElement.getAttribute('lang');
    if (!lang) {
      pageAudit.issues.push('Missing lang attribute on html element');
      this.results.compliance.accessibility.failed++;
    } else {
      pageAudit.passed.push('Language attribute present');
      this.results.compliance.accessibility.passed++;
    }
  }

  generateComprehensiveReport() {
    console.log('\n============================================================');
    console.log('🎯 COMPREHENSIVE HTML SEO COMPLIANCE RESULTS');
    console.log('============================================================\n');

    const overallCompliance = Math.round((this.results.compliantPages / this.results.totalPages) * 100);
    
    console.log(`🏆 OVERALL COMPLIANCE: ${overallCompliance}%`);
    console.log(`📊 Pages Audited: ${this.results.totalPages}`);
    console.log(`✅ Compliant Pages (90%+): ${this.results.compliantPages}/${this.results.totalPages}`);
    console.log(`⚠️ Pages Needing Attention: ${this.results.totalPages - this.results.compliantPages}\n`);

    // Detailed compliance breakdown
    console.log('📋 SEO COMPLIANCE BREAKDOWN:\n');
    
    Object.entries(this.results.compliance).forEach(([category, stats]) => {
      const total = stats.passed + stats.failed;
      const percentage = total > 0 ? Math.round((stats.passed / total) * 100) : 0;
      const status = percentage >= 90 ? '✅' : percentage >= 70 ? '⚠️' : '❌';
      
      console.log(`${status} ${category.toUpperCase()}: ${percentage}% (${stats.passed}/${total})`);
    });

    console.log('\n🚀 SEO BEST PRACTICES STATUS:');
    console.log(`   📝 Content Optimization: ${this.getCompliancePercentage(['title', 'metaDescription', 'headings'])}%`);
    console.log(`   🖼️ Media Optimization: ${this.getCompliancePercentage(['images'])}%`);
    console.log(`   🔗 Link Optimization: ${this.getCompliancePercentage(['internalLinks', 'canonical'])}%`);
    console.log(`   📊 Structured Data: ${this.getCompliancePercentage(['structuredData'])}%`);
    console.log(`   📱 Social Media: ${this.getCompliancePercentage(['openGraph', 'twitter'])}%`);
    console.log(`   📱 Mobile & Performance: ${this.getCompliancePercentage(['mobile', 'performance'])}%`);
    console.log(`   ♿ Accessibility: ${this.getCompliancePercentage(['accessibility'])}%`);

    console.log('\n============================================================');
    
    if (overallCompliance >= 95) {
      console.log('🎉 EXCELLENT! All HTML pages are SEO compliant and follow best practices.');
    } else if (overallCompliance >= 85) {
      console.log('👍 GOOD! Most pages are compliant. Address remaining issues for optimal SEO.');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT! Several SEO issues need to be addressed.');
    }
  }

  getCompliancePercentage(categories) {
    let totalPassed = 0;
    let totalChecks = 0;
    
    categories.forEach(category => {
      const stats = this.results.compliance[category];
      totalPassed += stats.passed;
      totalChecks += stats.passed + stats.failed;
    });
    
    return totalChecks > 0 ? Math.round((totalPassed / totalChecks) * 100) : 0;
  }
}

// Run the audit
async function main() {
  try {
    const auditor = new HTMLSEOAuditor();
    await auditor.auditAllHTMLPages();
  } catch (error) {
    console.error('❌ Audit failed:', error);
    process.exit(1);
  }
}

main();