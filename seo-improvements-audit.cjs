#!/usr/bin/env node

/**
 * SEO Improvements Audit Script
 * Verifies the implementation of comprehensive SEO best practices
 * Added after July 15, 2025 SEO enhancement implementation
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

class SEOImprovementsAuditor {
  constructor() {
    this.results = {
      breadcrumbNavigation: [],
      coordinateAccuracy: [],
      headingStructure: [],
      imageOptimization: [],
      internalLinking: [],
      overallCompliance: 0
    };
  }

  async auditSEOImprovements() {
    console.log('🔍 Starting SEO Improvements Audit...\n');
    
    await this.auditBreadcrumbNavigation();
    await this.auditCoordinateAccuracy();
    await this.auditHeadingStructure();
    await this.auditImageOptimization();
    await this.auditInternalLinking();
    
    this.calculateOverallCompliance();
    this.generateImprovementsReport();
  }

  async auditBreadcrumbNavigation() {
    console.log('📍 Auditing breadcrumb navigation...');
    
    const htmlFiles = this.findHTMLFiles();
    let passedFiles = 0;
    
    for (const file of htmlFiles) {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        const breadcrumbNav = document.querySelector('.hero-breadcrumb');
        const breadcrumbList = document.querySelector('.breadcrumb-list');
        const breadcrumbItems = document.querySelectorAll('.breadcrumb-item');
        
        // Check for structured data breadcrumb schema
        const structuredData = this.extractStructuredData(document);
        const hasBreadcrumbSchema = structuredData.some(data => 
          data['@type'] === 'BreadcrumbList' || 
          (data.breadcrumb && data.breadcrumb['@type'] === 'BreadcrumbList')
        );
        
        const breadcrumbAudit = {
          file: path.basename(file),
          visibleBreadcrumb: !!breadcrumbNav,
          structuredBreadcrumb: hasBreadcrumbSchema,
          breadcrumbItems: breadcrumbItems.length,
          ariaLabel: breadcrumbNav ? breadcrumbNav.getAttribute('aria-label') : null,
          currentPageMarked: document.querySelector('.breadcrumb-item.current') !== null,
          score: 0
        };
        
        // Calculate score
        if (breadcrumbAudit.visibleBreadcrumb) breadcrumbAudit.score += 20;
        if (breadcrumbAudit.structuredBreadcrumb) breadcrumbAudit.score += 20;
        if (breadcrumbAudit.breadcrumbItems >= 3) breadcrumbAudit.score += 20;
        if (breadcrumbAudit.ariaLabel) breadcrumbAudit.score += 20;
        if (breadcrumbAudit.currentPageMarked) breadcrumbAudit.score += 20;
        
        this.results.breadcrumbNavigation.push(breadcrumbAudit);
        
        if (breadcrumbAudit.score >= 80) passedFiles++;
        
      } catch (error) {
        console.warn(`Error auditing ${file}:`, error.message);
      }
    }
    
    console.log(`✅ Breadcrumb Navigation: ${passedFiles}/${htmlFiles.length} files passed\n`);
  }

  async auditCoordinateAccuracy() {
    console.log('🌍 Auditing coordinate accuracy...');
    
    const htmlFiles = this.findHTMLFiles();
    let passedFiles = 0;
    
    for (const file of htmlFiles) {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        const structuredData = this.extractStructuredData(document);
        let coordinateAudit = {
          file: path.basename(file),
          hasCoordinates: false,
          validCoordinates: false,
          latitude: null,
          longitude: null,
          score: 0
        };
        
        // Check for GeoCoordinates in structured data
        structuredData.forEach(data => {
          if (data.mainEntity && data.mainEntity.geo) {
            coordinateAudit.hasCoordinates = true;
            coordinateAudit.latitude = data.mainEntity.geo.latitude;
            coordinateAudit.longitude = data.mainEntity.geo.longitude;
            
            // Validate coordinates (not 0,0 placeholder)
            if (coordinateAudit.latitude !== "0" && coordinateAudit.longitude !== "0" &&
                coordinateAudit.latitude !== 0 && coordinateAudit.longitude !== 0) {
              coordinateAudit.validCoordinates = true;
            }
          }
        });
        
        // Calculate score
        if (coordinateAudit.hasCoordinates) coordinateAudit.score += 50;
        if (coordinateAudit.validCoordinates) coordinateAudit.score += 50;
        
        this.results.coordinateAccuracy.push(coordinateAudit);
        
        if (coordinateAudit.score >= 80) passedFiles++;
        
      } catch (error) {
        console.warn(`Error auditing coordinates in ${file}:`, error.message);
      }
    }
    
    console.log(`✅ Coordinate Accuracy: ${passedFiles}/${htmlFiles.length} files passed\n`);
  }

  async auditHeadingStructure() {
    console.log('📝 Auditing heading structure...');
    
    const htmlFiles = this.findHTMLFiles();
    let passedFiles = 0;
    
    for (const file of htmlFiles) {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        const h1Tags = document.querySelectorAll('h1');
        const h2Tags = document.querySelectorAll('h2');
        const h3Tags = document.querySelectorAll('h3');
        
        const headingAudit = {
          file: path.basename(file),
          hasH1: h1Tags.length > 0,
          h1Count: h1Tags.length,
          h2Count: h2Tags.length,
          h3Count: h3Tags.length,
          properH1: false,
          properH2s: false,
          contextualHeadings: false,
          score: 0
        };
        
        // Check for proper H1 (should be hero title)
        if (h1Tags.length === 1) {
          const h1 = h1Tags[0];
          if (h1.classList.contains('hero-title')) {
            headingAudit.properH1 = true;
          }
        }
        
        // Check for proper H2s (should be section titles)
        let properH2Count = 0;
        h2Tags.forEach(h2 => {
          if (h2.classList.contains('section-title')) {
            properH2Count++;
          }
        });
        headingAudit.properH2s = properH2Count > 0;
        
        // Check for contextual headings (city name included)
        const cityNameInHeadings = Array.from(h2Tags).some(h2 => {
          const text = h2.textContent.toLowerCase();
          return text.includes('london') || text.includes('rome') || text.includes('paris') ||
                 text.includes('attractions') || text.includes('highlights') || text.includes('faq');
        });
        headingAudit.contextualHeadings = cityNameInHeadings;
        
        // Calculate score
        if (headingAudit.properH1) headingAudit.score += 30;
        if (headingAudit.properH2s) headingAudit.score += 30;
        if (headingAudit.contextualHeadings) headingAudit.score += 20;
        if (headingAudit.h2Count >= 3) headingAudit.score += 20;
        
        this.results.headingStructure.push(headingAudit);
        
        if (headingAudit.score >= 80) passedFiles++;
        
      } catch (error) {
        console.warn(`Error auditing headings in ${file}:`, error.message);
      }
    }
    
    console.log(`✅ Heading Structure: ${passedFiles}/${htmlFiles.length} files passed\n`);
  }

  async auditImageOptimization() {
    console.log('🖼️ Auditing image optimization...');
    
    const htmlFiles = this.findHTMLFiles();
    let passedFiles = 0;
    
    for (const file of htmlFiles) {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        const images = document.querySelectorAll('img');
        const preloadLinks = document.querySelectorAll('link[rel="preload"][as="image"]');
        
        const imageAudit = {
          file: path.basename(file),
          totalImages: images.length,
          imagesWithAlt: 0,
          imagesWithDimensions: 0,
          heroImageOptimized: false,
          imagePreloading: preloadLinks.length > 0,
          score: 0
        };
        
        // Check image attributes
        images.forEach(img => {
          if (img.getAttribute('alt')) {
            imageAudit.imagesWithAlt++;
          }
          if (img.getAttribute('width') && img.getAttribute('height')) {
            imageAudit.imagesWithDimensions++;
          }
          if (img.classList.contains('hero-image')) {
            imageAudit.heroImageOptimized = true;
          }
        });
        
        // Calculate score
        if (imageAudit.imagesWithAlt === imageAudit.totalImages && imageAudit.totalImages > 0) {
          imageAudit.score += 30;
        }
        if (imageAudit.imagesWithDimensions === imageAudit.totalImages && imageAudit.totalImages > 0) {
          imageAudit.score += 30;
        }
        if (imageAudit.heroImageOptimized) imageAudit.score += 20;
        if (imageAudit.imagePreloading) imageAudit.score += 20;
        
        this.results.imageOptimization.push(imageAudit);
        
        if (imageAudit.score >= 80) passedFiles++;
        
      } catch (error) {
        console.warn(`Error auditing images in ${file}:`, error.message);
      }
    }
    
    console.log(`✅ Image Optimization: ${passedFiles}/${htmlFiles.length} files passed\n`);
  }

  async auditInternalLinking() {
    console.log('🔗 Auditing internal linking...');
    
    const htmlFiles = this.findHTMLFiles();
    let passedFiles = 0;
    
    for (const file of htmlFiles) {
      try {
        const content = fs.readFileSync(file, 'utf-8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        const internalLinks = document.querySelectorAll('a[href*="travelwanders.com"]');
        const contextualLinks = document.querySelectorAll('.internal-links-grid a, .internal-link-card');
        const footerLinks = document.querySelectorAll('.footer a');
        
        const linkingAudit = {
          file: path.basename(file),
          totalInternalLinks: internalLinks.length,
          contextualLinks: contextualLinks.length,
          footerLinks: footerLinks.length,
          descriptiveAnchorText: 0,
          relatedDestinations: false,
          score: 0
        };
        
        // Check for descriptive anchor text
        internalLinks.forEach(link => {
          const text = link.textContent.trim().toLowerCase();
          if (text.includes('best things to do') || text.includes('attractions') || 
              text.includes('guide') || text.includes('discover') || text.includes('explore')) {
            linkingAudit.descriptiveAnchorText++;
          }
        });
        
        // Check for related destinations section
        const relatedSection = document.querySelector('.section-title');
        if (relatedSection && relatedSection.textContent.includes('Related Destinations')) {
          linkingAudit.relatedDestinations = true;
        }
        
        // Calculate score
        if (linkingAudit.totalInternalLinks >= 10) linkingAudit.score += 25;
        if (linkingAudit.contextualLinks >= 3) linkingAudit.score += 25;
        if (linkingAudit.descriptiveAnchorText >= 5) linkingAudit.score += 25;
        if (linkingAudit.relatedDestinations) linkingAudit.score += 25;
        
        this.results.internalLinking.push(linkingAudit);
        
        if (linkingAudit.score >= 80) passedFiles++;
        
      } catch (error) {
        console.warn(`Error auditing internal linking in ${file}:`, error.message);
      }
    }
    
    console.log(`✅ Internal Linking: ${passedFiles}/${htmlFiles.length} files passed\n`);
  }

  calculateOverallCompliance() {
    const categories = [
      this.results.breadcrumbNavigation,
      this.results.coordinateAccuracy,
      this.results.headingStructure,
      this.results.imageOptimization,
      this.results.internalLinking
    ];
    
    let totalScore = 0;
    let totalFiles = 0;
    
    categories.forEach(category => {
      category.forEach(item => {
        totalScore += item.score;
        totalFiles++;
      });
    });
    
    this.results.overallCompliance = totalFiles > 0 ? Math.round(totalScore / totalFiles) : 0;
  }

  generateImprovementsReport() {
    const report = `
# SEO Improvements Audit Report
Generated on: ${new Date().toISOString()}

## Executive Summary
Overall SEO Compliance: ${this.results.overallCompliance}%

## Detailed Results

### 1. Breadcrumb Navigation
${this.results.breadcrumbNavigation.map(item => `
- **${item.file}**: ${item.score}%
  - Visible Breadcrumb: ${item.visibleBreadcrumb ? '✅' : '❌'}
  - Structured Data: ${item.structuredBreadcrumb ? '✅' : '❌'}
  - Items Count: ${item.breadcrumbItems}
  - ARIA Label: ${item.ariaLabel ? '✅' : '❌'}
  - Current Page Marked: ${item.currentPageMarked ? '✅' : '❌'}
`).join('')}

### 2. Coordinate Accuracy
${this.results.coordinateAccuracy.map(item => `
- **${item.file}**: ${item.score}%
  - Has Coordinates: ${item.hasCoordinates ? '✅' : '❌'}
  - Valid Coordinates: ${item.validCoordinates ? '✅' : '❌'}
  - Latitude: ${item.latitude || 'N/A'}
  - Longitude: ${item.longitude || 'N/A'}
`).join('')}

### 3. Heading Structure
${this.results.headingStructure.map(item => `
- **${item.file}**: ${item.score}%
  - Proper H1: ${item.properH1 ? '✅' : '❌'} (${item.h1Count} found)
  - Proper H2s: ${item.properH2s ? '✅' : '❌'} (${item.h2Count} found)
  - Contextual Headings: ${item.contextualHeadings ? '✅' : '❌'}
  - H3 Count: ${item.h3Count}
`).join('')}

### 4. Image Optimization
${this.results.imageOptimization.map(item => `
- **${item.file}**: ${item.score}%
  - Images with Alt: ${item.imagesWithAlt}/${item.totalImages}
  - Images with Dimensions: ${item.imagesWithDimensions}/${item.totalImages}
  - Hero Image Optimized: ${item.heroImageOptimized ? '✅' : '❌'}
  - Image Preloading: ${item.imagePreloading ? '✅' : '❌'}
`).join('')}

### 5. Internal Linking
${this.results.internalLinking.map(item => `
- **${item.file}**: ${item.score}%
  - Total Internal Links: ${item.totalInternalLinks}
  - Contextual Links: ${item.contextualLinks}
  - Footer Links: ${item.footerLinks}
  - Descriptive Anchor Text: ${item.descriptiveAnchorText}
  - Related Destinations: ${item.relatedDestinations ? '✅' : '❌'}
`).join('')}

## Recommendations

### High Priority
${this.results.overallCompliance < 80 ? `
- Overall compliance is below 80%. Focus on improving failing categories.
- Ensure all pages have proper breadcrumb navigation with structured data.
- Verify all coordinates are accurate and not placeholder values.
` : '✅ All high priority items are implemented correctly.'}

### Medium Priority
- Continue monitoring image optimization and loading performance
- Enhance internal linking with more descriptive anchor text
- Ensure consistent heading structure across all pages

### Low Priority
- Consider adding more contextual internal links
- Monitor and improve mobile responsiveness of breadcrumb navigation
- Add more structured data for enhanced rich snippets

## Conclusion
${this.results.overallCompliance >= 90 ? '🎉 Excellent! Your SEO improvements are highly effective.' :
  this.results.overallCompliance >= 80 ? '👍 Good! Your SEO improvements are working well.' :
  this.results.overallCompliance >= 70 ? '⚠️ Fair. Some improvements needed.' :
  '❌ Poor. Significant improvements required.'}

Total Pages Audited: ${this.results.breadcrumbNavigation.length}
Average Compliance Score: ${this.results.overallCompliance}%
`;

    fs.writeFileSync('seo-improvements-audit-report.md', report);
    console.log('📊 SEO Improvements Audit Report generated: seo-improvements-audit-report.md');
    console.log(`\n🎯 Overall SEO Compliance: ${this.results.overallCompliance}%`);
  }

  findHTMLFiles() {
    const htmlFiles = [];
    const distPublicPath = path.join(__dirname, 'dist', 'public');
    
    if (fs.existsSync(distPublicPath)) {
      // Check city directories
      const files = fs.readdirSync(distPublicPath);
      files.forEach(file => {
        const filePath = path.join(distPublicPath, file);
        if (fs.statSync(filePath).isDirectory() && file.startsWith('best-things-to-do-in-')) {
          const indexPath = path.join(filePath, 'index.html');
          if (fs.existsSync(indexPath)) {
            htmlFiles.push(indexPath);
          }
        }
      });
    }
    
    return htmlFiles.slice(0, 5); // Limit to first 5 files for performance
  }

  extractStructuredData(document) {
    const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
    const structuredData = [];
    
    structuredDataScripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent);
        structuredData.push(data);
      } catch (error) {
        console.warn('Error parsing structured data:', error.message);
      }
    });
    
    return structuredData;
  }
}

// Run the audit
async function main() {
  const auditor = new SEOImprovementsAuditor();
  await auditor.auditSEOImprovements();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = SEOImprovementsAuditor;