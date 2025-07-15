#!/usr/bin/env node

/**
 * Final SEO Compliance Audit for TravelWanders
 * Validates all final tweaks including heading structure, image optimization, 
 * breadcrumb navigation, and enhanced anchor text variations
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

class FinalSEOAuditor {
  constructor() {
    this.auditResults = {
      headingStructure: [],
      imageOptimization: [],
      breadcrumbNavigation: [],
      anchorTextVariation: [],
      overallCompliance: 0
    };
    
    this.testPages = [
      'dist/public/index.html',
      'dist/public/destinations.html', 
      'dist/public/blogs.html',
      'dist/public/best-things-to-do-in-london.html',
      'dist/public/best-things-to-do-in-rome.html',
      'dist/public/privacy-policy.html',
      'dist/public/terms-of-service.html',
      'dist/public/cookie-policy.html'
    ];
  }

  async auditFinalCompliance() {
    console.log('🔍 Starting Final SEO Compliance Audit...\n');
    
    for (const pagePath of this.testPages) {
      if (fs.existsSync(pagePath)) {
        const html = fs.readFileSync(pagePath, 'utf-8');
        const dom = new JSDOM(html);
        const document = dom.window.document;
        
        const pageAudit = {
          page: path.basename(pagePath),
          headingStructure: this.auditHeadingStructure(document),
          imageOptimization: this.auditImageOptimization(document),
          breadcrumbNavigation: this.auditBreadcrumbNavigation(document),
          anchorTextVariation: this.auditAnchorTextVariation(document)
        };
        
        this.auditResults.headingStructure.push(pageAudit.headingStructure);
        this.auditResults.imageOptimization.push(pageAudit.imageOptimization);
        this.auditResults.breadcrumbNavigation.push(pageAudit.breadcrumbNavigation);
        this.auditResults.anchorTextVariation.push(pageAudit.anchorTextVariation);
        
        console.log(`✅ ${pageAudit.page} - Final SEO Compliance Check Complete`);
      }
    }
    
    this.calculateFinalScore();
    this.generateFinalReport();
  }

  auditHeadingStructure(document) {
    const audit = {
      category: 'Heading Structure',
      score: 0,
      maxScore: 100,
      issues: [],
      recommendations: []
    };

    // Check for single H1
    const h1Elements = document.querySelectorAll('h1');
    if (h1Elements.length === 1) {
      audit.score += 30;
      audit.issues.push('✅ Single H1 tag found');
    } else {
      audit.issues.push(`❌ Found ${h1Elements.length} H1 tags (should be 1)`);
      audit.recommendations.push('Ensure only one H1 tag per page');
    }

    // Check H2 semantic usage
    const h2Elements = document.querySelectorAll('h2');
    if (h2Elements.length > 0) {
      audit.score += 25;
      audit.issues.push(`✅ Found ${h2Elements.length} H2 tags for content organization`);
      
      // Check if H2s include city names (for city pages)
      const cityContext = Array.from(h2Elements).some(h2 => 
        h2.textContent.includes('London') || 
        h2.textContent.includes('Rome') || 
        h2.textContent.includes('Attractions') ||
        h2.textContent.includes('Visit')
      );
      
      if (cityContext) {
        audit.score += 25;
        audit.issues.push('✅ H2 tags include contextual city names');
      }
    }

    // Check proper hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let hierarchyCorrect = true;
    let lastLevel = 0;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        hierarchyCorrect = false;
      }
      lastLevel = level;
    });
    
    if (hierarchyCorrect) {
      audit.score += 20;
      audit.issues.push('✅ Proper heading hierarchy maintained');
    } else {
      audit.issues.push('❌ Heading hierarchy has gaps');
      audit.recommendations.push('Ensure headings follow logical sequence (H1 → H2 → H3)');
    }

    return audit;
  }

  auditImageOptimization(document) {
    const audit = {
      category: 'Image Optimization',
      score: 0,
      maxScore: 100,
      issues: [],
      recommendations: []
    };

    const images = document.querySelectorAll('img');
    
    if (images.length === 0) {
      audit.score = 100;
      audit.issues.push('✅ No images found (N/A)');
      return audit;
    }

    let optimizedImages = 0;
    
    images.forEach(img => {
      const hasAlt = img.getAttribute('alt') && img.getAttribute('alt').length > 0;
      const hasLazyLoading = img.getAttribute('loading') === 'lazy';
      const hasDimensions = img.getAttribute('width') && img.getAttribute('height');
      const hasDescriptiveAlt = img.getAttribute('alt') && img.getAttribute('alt').length > 20;
      
      if (hasAlt && hasLazyLoading && hasDimensions && hasDescriptiveAlt) {
        optimizedImages++;
      }
    });

    const optimizationRate = (optimizedImages / images.length) * 100;
    audit.score = Math.round(optimizationRate);
    
    if (optimizationRate >= 90) {
      audit.issues.push(`✅ ${optimizedImages}/${images.length} images fully optimized`);
    } else {
      audit.issues.push(`⚠️ ${optimizedImages}/${images.length} images fully optimized`);
      audit.recommendations.push('Ensure all images have alt text, lazy loading, and dimensions');
    }

    return audit;
  }

  auditBreadcrumbNavigation(document) {
    const audit = {
      category: 'Breadcrumb Navigation',
      score: 0,
      maxScore: 100,
      issues: [],
      recommendations: []
    };

    // Check for visible breadcrumb navigation
    const breadcrumbNav = document.querySelector('nav[aria-label="Breadcrumb"]') || 
                         document.querySelector('.breadcrumb-navigation');
    
    if (breadcrumbNav) {
      audit.score += 40;
      audit.issues.push('✅ Visible breadcrumb navigation found');
      
      // Check for proper ARIA labeling
      if (breadcrumbNav.getAttribute('aria-label') === 'Breadcrumb') {
        audit.score += 20;
        audit.issues.push('✅ Proper ARIA labeling on breadcrumb');
      }
    } else {
      audit.issues.push('❌ No visible breadcrumb navigation found');
      audit.recommendations.push('Add visible breadcrumb navigation with proper ARIA labels');
    }

    // Check for JSON-LD breadcrumb structured data
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    let hasBreadcrumbSchema = false;
    
    scripts.forEach(script => {
      try {
        const jsonData = JSON.parse(script.textContent);
        if (jsonData['@type'] === 'BreadcrumbList' || 
            (Array.isArray(jsonData) && jsonData.some(item => item['@type'] === 'BreadcrumbList'))) {
          hasBreadcrumbSchema = true;
        }
      } catch (e) {
        // Invalid JSON, skip
      }
    });
    
    if (hasBreadcrumbSchema) {
      audit.score += 40;
      audit.issues.push('✅ Breadcrumb structured data found');
    } else {
      audit.issues.push('❌ Missing breadcrumb structured data');
      audit.recommendations.push('Add BreadcrumbList JSON-LD structured data');
    }

    return audit;
  }

  auditAnchorTextVariation(document) {
    const audit = {
      category: 'Anchor Text Variation',
      score: 0,
      maxScore: 100,
      issues: [],
      recommendations: []
    };

    const links = document.querySelectorAll('a');
    const linkTexts = Array.from(links).map(link => link.textContent.trim().toLowerCase());
    
    // Check for descriptive anchor text variations
    const descriptivePatterns = [
      'best things to do',
      'attractions',
      'travel guide',
      'discover',
      'explore',
      'browse',
      'read travel',
      'inspiration'
    ];
    
    let descriptiveLinks = 0;
    linkTexts.forEach(text => {
      if (descriptivePatterns.some(pattern => text.includes(pattern))) {
        descriptiveLinks++;
      }
    });

    if (links.length === 0) {
      audit.score = 100;
      audit.issues.push('✅ No links found (N/A)');
      return audit;
    }

    const descriptiveRate = (descriptiveLinks / links.length) * 100;
    
    // Check for specific improvements
    const hasContextualBlog = linkTexts.some(text => text.includes('travel blog') || text.includes('travel stories'));
    const hasContextualDestinations = linkTexts.some(text => text.includes('destinations') || text.includes('explore'));
    const hasContextualGuides = linkTexts.some(text => text.includes('guide') || text.includes('attractions'));
    
    if (hasContextualBlog) {
      audit.score += 25;
      audit.issues.push('✅ Contextual blog links found');
    }
    
    if (hasContextualDestinations) {
      audit.score += 25;
      audit.issues.push('✅ Contextual destination links found');
    }
    
    if (hasContextualGuides) {
      audit.score += 25;
      audit.issues.push('✅ Contextual guide links found');
    }
    
    if (descriptiveRate >= 30) {
      audit.score += 25;
      audit.issues.push(`✅ ${descriptiveLinks}/${links.length} links use descriptive anchor text`);
    } else {
      audit.issues.push(`⚠️ ${descriptiveLinks}/${links.length} links use descriptive anchor text`);
      audit.recommendations.push('Increase use of descriptive anchor text variations');
    }

    return audit;
  }

  calculateFinalScore() {
    const categories = ['headingStructure', 'imageOptimization', 'breadcrumbNavigation', 'anchorTextVariation'];
    let totalScore = 0;
    let totalMaxScore = 0;
    
    categories.forEach(category => {
      const categoryResults = this.auditResults[category];
      categoryResults.forEach(result => {
        totalScore += result.score;
        totalMaxScore += result.maxScore;
      });
    });
    
    this.auditResults.overallCompliance = Math.round((totalScore / totalMaxScore) * 100);
  }

  generateFinalReport() {
    console.log('\n🏆 FINAL SEO COMPLIANCE AUDIT REPORT');
    console.log('=' .repeat(50));
    
    console.log(`\n📊 OVERALL COMPLIANCE: ${this.auditResults.overallCompliance}%`);
    
    if (this.auditResults.overallCompliance >= 90) {
      console.log('🎉 EXCELLENT - Enterprise-level SEO compliance achieved!');
    } else if (this.auditResults.overallCompliance >= 80) {
      console.log('✅ GOOD - Strong SEO compliance with minor improvements needed');
    } else {
      console.log('⚠️ NEEDS IMPROVEMENT - Address critical SEO issues');
    }
    
    // Category breakdown
    console.log('\n📋 CATEGORY BREAKDOWN:');
    console.log('-'.repeat(30));
    
    const categories = {
      'Heading Structure': this.auditResults.headingStructure,
      'Image Optimization': this.auditResults.imageOptimization,
      'Breadcrumb Navigation': this.auditResults.breadcrumbNavigation,
      'Anchor Text Variation': this.auditResults.anchorTextVariation
    };
    
    Object.entries(categories).forEach(([categoryName, results]) => {
      const avgScore = results.reduce((sum, result) => sum + result.score, 0) / results.length;
      console.log(`${categoryName}: ${Math.round(avgScore)}%`);
    });
    
    // Detailed findings
    console.log('\n📝 DETAILED FINDINGS:');
    console.log('-'.repeat(30));
    
    Object.entries(categories).forEach(([categoryName, results]) => {
      console.log(`\n${categoryName}:`);
      results.forEach(result => {
        result.issues.forEach(issue => console.log(`  ${issue}`));
        result.recommendations.forEach(rec => console.log(`  💡 ${rec}`));
      });
    });
    
    console.log('\n🎯 FINAL RECOMMENDATIONS:');
    console.log('-'.repeat(30));
    console.log('• Maintain proper heading hierarchy (H1 → H2 → H3)');
    console.log('• Continue using lazy loading and dimensions for all images');
    console.log('• Ensure visible breadcrumb navigation on all pages');
    console.log('• Use descriptive, contextual anchor text variations');
    console.log('• Apply all SEO best practices to future pages consistently');
    
    console.log('\n✅ Final SEO compliance audit completed successfully!');
  }
}

// Run the audit
async function main() {
  const auditor = new FinalSEOAuditor();
  await auditor.auditFinalCompliance();
}

main().catch(console.error);