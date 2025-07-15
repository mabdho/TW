#!/usr/bin/env node
/**
 * Manual SEO Verification Script for TravelWanders
 * Checks actual HTML files for complete SEO compliance without false positives
 */

const fs = require('fs');
const path = require('path');

class ManualSEOVerifier {
  constructor() {
    this.results = [];
    this.distDir = 'dist/public';
  }

  /**
   * Check a single HTML file for all SEO improvements
   */
  checkHTMLFile(filePath, pageName) {
    try {
      if (!fs.existsSync(filePath)) {
        this.results.push({
          page: pageName,
          error: `File not found: ${filePath}`
        });
        return;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      const pageResult = {
        page: pageName,
        file: filePath,
        checks: {}
      };

      // 1. Check meta description (no ellipsis truncation)
      const metaDescMatch = content.match(/<meta name="description" content="([^"]+)"/);
      if (metaDescMatch) {
        const description = metaDescMatch[1];
        pageResult.checks.metaDescription = {
          exists: true,
          length: description.length,
          hasEllipsis: description.includes('...'),
          content: description.substring(0, 100) + (description.length > 100 ? '...' : ''),
          pass: !description.includes('...') && description.length <= 160
        };
      } else {
        pageResult.checks.metaDescription = {
          exists: false,
          pass: false
        };
      }

      // 2. Check hero image optimization
      const heroImageMatch = content.match(/<img[^>]*class="hero-image"[^>]*>/);
      if (heroImageMatch) {
        const heroImg = heroImageMatch[0];
        pageResult.checks.heroImage = {
          exists: true,
          hasAlt: heroImg.includes('alt='),
          hasLazyLoading: heroImg.includes('loading='),
          loadingValue: (heroImg.match(/loading="([^"]+)"/) || [])[1] || 'none',
          altText: (heroImg.match(/alt="([^"]*)"/) || [])[1] || '',
          pass: heroImg.includes('alt=') && heroImg.includes('loading="eager"')
        };
      } else {
        pageResult.checks.heroImage = {
          exists: false,
          pass: false
        };
      }

      // 3. Check blog card images (should have lazy loading)
      const blogImages = content.match(/<img[^>]*alt="Featured travel blog[^>]*>/g) || [];
      pageResult.checks.blogImages = {
        count: blogImages.length,
        withLazyLoading: blogImages.filter(img => img.includes('loading="lazy"')).length,
        withAltText: blogImages.filter(img => img.includes('alt="Featured travel blog')).length,
        pass: blogImages.length === 0 || (blogImages.length === blogImages.filter(img => img.includes('loading="lazy"') && img.includes('alt="Featured travel blog')).length)
      };

      // 4. Check structured data schema type
      const structuredDataMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      if (structuredDataMatch) {
        try {
          const jsonData = JSON.parse(structuredDataMatch[1].trim());
          pageResult.checks.structuredData = {
            exists: true,
            type: jsonData['@type'],
            isArticle: jsonData['@type'] === 'Article',
            pass: jsonData['@type'] === 'Article'
          };
        } catch (e) {
          pageResult.checks.structuredData = {
            exists: true,
            error: 'Invalid JSON-LD',
            pass: false
          };
        }
      } else {
        pageResult.checks.structuredData = {
          exists: false,
          pass: false
        };
      }

      // 5. Check heading hierarchy (only one H1)
      const h1Count = (content.match(/<h1[^>]*>/g) || []).length;
      pageResult.checks.headingHierarchy = {
        h1Count,
        pass: h1Count === 1
      };

      // 6. Check for performance optimization tags
      const perfTags = {
        dnsPreconnect: content.includes('rel="dns-prefetch"'),
        preconnect: content.includes('rel="preconnect"'),
        preload: content.includes('rel="preload"'),
        themeColor: content.includes('name="theme-color"')
      };
      pageResult.checks.performanceOptimization = {
        ...perfTags,
        pass: Object.values(perfTags).every(Boolean)
      };

      // Calculate overall pass rate
      const checkNames = Object.keys(pageResult.checks);
      const passedChecks = checkNames.filter(name => pageResult.checks[name].pass).length;
      pageResult.overallScore = Math.round((passedChecks / checkNames.length) * 100);
      pageResult.passed = passedChecks;
      pageResult.total = checkNames.length;

      this.results.push(pageResult);

    } catch (error) {
      this.results.push({
        page: pageName,
        error: error.message
      });
    }
  }

  /**
   * Run verification on all key pages
   */
  runVerification() {
    console.log('🔍 Manual SEO Verification Starting...\n');

    // Check city pages
    const cityPages = [
      { name: 'Seoul', path: path.join(this.distDir, 'best-things-to-do-in-seoul', 'index.html') },
      { name: 'London', path: path.join(this.distDir, 'best-things-to-do-in-london', 'index.html') },
      { name: 'Rome', path: path.join(this.distDir, 'best-things-to-do-in-rome', 'index.html') },
      { name: 'Edinburgh', path: path.join(this.distDir, 'best-things-to-do-in-edinburgh', 'index.html') }
    ];

    cityPages.forEach(page => {
      this.checkHTMLFile(page.path, page.name);
    });

    // Check other key pages
    const otherPages = [
      { name: 'Home', path: path.join(this.distDir, 'home-seo.html') },
      { name: 'Destinations', path: path.join(this.distDir, 'destinations-seo.html') },
      { name: 'Blogs', path: path.join(this.distDir, 'blogs-seo.html') },
      { name: 'Cookie Policy', path: path.join(this.distDir, 'cookie-policy.html') }
    ];

    otherPages.forEach(page => {
      this.checkHTMLFile(page.path, page.name);
    });
  }

  /**
   * Generate detailed report
   */
  generateReport() {
    console.log('📊 SEO VERIFICATION RESULTS\n');
    console.log('=' .repeat(80));

    let totalScore = 0;
    let pageCount = 0;

    this.results.forEach(result => {
      if (result.error) {
        console.log(`❌ ${result.page}: ${result.error}`);
        return;
      }

      console.log(`\n📄 ${result.page} (${result.overallScore}% - ${result.passed}/${result.total} checks passed)`);
      console.log('─'.repeat(50));

      // Meta Description
      const md = result.checks.metaDescription;
      if (md.exists) {
        const status = md.pass ? '✅' : '❌';
        console.log(`${status} Meta Description: ${md.length} chars, no ellipsis: ${!md.hasEllipsis}`);
        if (!md.pass) console.log(`   Issue: ${md.hasEllipsis ? 'Contains "..."' : 'Too long'} - "${md.content}"`);
      } else {
        console.log('❌ Meta Description: Missing');
      }

      // Hero Image
      const hi = result.checks.heroImage;
      if (hi.exists) {
        const hiStatus = hi.pass ? '✅' : '❌';
        console.log(`${hiStatus} Hero Image: alt="${hi.altText.substring(0, 50)}...", loading="${hi.loadingValue}"`);
      } else {
        console.log('❌ Hero Image: Missing');
      }

      // Blog Images
      const bi = result.checks.blogImages;
      const biStatus = bi.pass ? '✅' : '❌';
      console.log(`${biStatus} Blog Images: ${bi.count} images, ${bi.withLazyLoading} with lazy loading`);

      // Structured Data
      const sd = result.checks.structuredData;
      if (sd.exists) {
        const sdStatus = sd.pass ? '✅' : '❌';
        console.log(`${sdStatus} Structured Data: Type "${sd.type}" (Article: ${sd.isArticle})`);
      } else {
        console.log('❌ Structured Data: Missing');
      }

      // Heading Hierarchy
      const hh = result.checks.headingHierarchy;
      const hhStatus = hh.pass ? '✅' : '❌';
      console.log(`${hhStatus} Heading Hierarchy: ${hh.h1Count} H1 tags (should be 1)`);

      // Performance
      const po = result.checks.performanceOptimization;
      const poStatus = po.pass ? '✅' : '❌';
      console.log(`${poStatus} Performance: DNS prefetch: ${po.dnsPreconnect}, Preconnect: ${po.preconnect}`);

      totalScore += result.overallScore;
      pageCount++;
    });

    console.log('\n' + '='.repeat(80));
    console.log(`📈 OVERALL AVERAGE SCORE: ${Math.round(totalScore / pageCount)}%`);
    console.log(`📊 Pages analyzed: ${pageCount}`);
    
    const perfectPages = this.results.filter(r => r.overallScore === 100).length;
    console.log(`🎯 Perfect pages (100%): ${perfectPages}/${pageCount}`);

    console.log('\n🔧 NEXT STEPS:');
    const needsWork = this.results.filter(r => r.overallScore < 100);
    if (needsWork.length === 0) {
      console.log('✨ All pages are perfectly optimized! 🚀');
    } else {
      console.log('📝 Pages needing optimization:');
      needsWork.forEach(page => {
        console.log(`   • ${page.page}: ${page.overallScore}% (${page.total - page.passed} issues)`);
      });
    }
  }
}

// Run verification
const verifier = new ManualSEOVerifier();
verifier.runVerification();
verifier.generateReport();