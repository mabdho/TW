#!/usr/bin/env node

/**
 * Enhanced SEO Audit Script for TravelWanders
 * Tests the implementation of Article schema, enhanced alt text, and contextual internal links
 */

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

class EnhancedSEOAuditor {
  constructor() {
    this.results = {
      articleSchema: {},
      altTextEnhancement: {},
      contextualLinks: {},
      overallScore: 0
    };
  }

  /**
   * Audit Article/BlogPosting schema implementation
   */
  async auditArticleSchema() {
    console.log('🔍 Auditing Article Schema Implementation...');
    
    const htmlFiles = this.getHtmlFiles();
    const schemaResults = {};
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      
      const scriptTags = document.querySelectorAll('script[type="application/ld+json"]');
      const articleSchema = this.findArticleSchema(scriptTags);
      
      const fileName = path.basename(file, '.html');
      schemaResults[fileName] = {
        hasArticleSchema: !!articleSchema,
        hasMainEntityOfPage: articleSchema ? !!articleSchema.mainEntityOfPage : false,
        hasKeywords: articleSchema ? !!articleSchema.keywords : false,
        hasWordCount: articleSchema ? !!articleSchema.wordCount : false,
        hasArticleSection: articleSchema ? !!articleSchema.articleSection : false,
        schemaScore: this.calculateSchemaScore(articleSchema)
      };
    }
    
    this.results.articleSchema = schemaResults;
    console.log('✅ Article Schema Audit Complete');
  }

  /**
   * Audit enhanced alt text implementation
   */
  async auditAltTextEnhancement() {
    console.log('🔍 Auditing Enhanced Alt Text Implementation...');
    
    const htmlFiles = this.getHtmlFiles();
    const altTextResults = {};
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      
      const images = document.querySelectorAll('img');
      const altTextAnalysis = this.analyzeAltText(images);
      
      const fileName = path.basename(file, '.html');
      altTextResults[fileName] = {
        totalImages: images.length,
        imagesWithAlt: altTextAnalysis.withAlt,
        descriptiveAlt: altTextAnalysis.descriptive,
        contextualAlt: altTextAnalysis.contextual,
        altTextScore: this.calculateAltTextScore(altTextAnalysis, images.length)
      };
    }
    
    this.results.altTextEnhancement = altTextResults;
    console.log('✅ Alt Text Enhancement Audit Complete');
  }

  /**
   * Audit contextual internal links implementation
   */
  async auditContextualLinks() {
    console.log('🔍 Auditing Contextual Internal Links Implementation...');
    
    const htmlFiles = this.getHtmlFiles();
    const linksResults = {};
    
    for (const file of htmlFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const dom = new JSDOM(content);
      const document = dom.window.document;
      
      const internalLinks = this.findInternalLinks(document);
      const contextualLinks = this.findContextualLinks(document);
      
      const fileName = path.basename(file, '.html');
      linksResults[fileName] = {
        totalInternalLinks: internalLinks.length,
        contextualLinks: contextualLinks.length,
        relatedDestinations: this.countRelatedDestinations(internalLinks),
        travelPlanningLinks: this.countTravelPlanningLinks(internalLinks),
        linksScore: this.calculateLinksScore(internalLinks, contextualLinks)
      };
    }
    
    this.results.contextualLinks = linksResults;
    console.log('✅ Contextual Links Audit Complete');
  }

  /**
   * Find Article schema in script tags
   */
  findArticleSchema(scriptTags) {
    for (const script of scriptTags) {
      try {
        const data = JSON.parse(script.textContent);
        if (data['@type'] === 'Article' || data['@type'] === 'BlogPosting') {
          return data;
        }
      } catch (e) {
        // Skip invalid JSON
      }
    }
    return null;
  }

  /**
   * Calculate schema score based on completeness
   */
  calculateSchemaScore(schema) {
    if (!schema) return 0;
    
    let score = 0;
    const requiredFields = ['headline', 'description', 'author', 'publisher', 'datePublished'];
    const enhancedFields = ['mainEntityOfPage', 'keywords', 'wordCount', 'articleSection'];
    
    // Check required fields (60 points)
    for (const field of requiredFields) {
      if (schema[field]) score += 12;
    }
    
    // Check enhanced fields (40 points)
    for (const field of enhancedFields) {
      if (schema[field]) score += 10;
    }
    
    return Math.min(score, 100);
  }

  /**
   * Analyze alt text quality
   */
  analyzeAltText(images) {
    let withAlt = 0;
    let descriptive = 0;
    let contextual = 0;
    
    for (const img of images) {
      const alt = img.getAttribute('alt');
      if (alt) {
        withAlt++;
        
        // Check if alt text is descriptive (>20 chars)
        if (alt.length > 20) {
          descriptive++;
        }
        
        // Check if alt text is contextual (contains location keywords)
        if (alt.includes('in ') || alt.includes('attraction') || alt.includes('landmark')) {
          contextual++;
        }
      }
    }
    
    return { withAlt, descriptive, contextual };
  }

  /**
   * Calculate alt text score
   */
  calculateAltTextScore(analysis, totalImages) {
    if (totalImages === 0) return 100;
    
    const altPercentage = (analysis.withAlt / totalImages) * 100;
    const descriptivePercentage = (analysis.descriptive / totalImages) * 100;
    const contextualPercentage = (analysis.contextual / totalImages) * 100;
    
    return Math.round((altPercentage * 0.4) + (descriptivePercentage * 0.3) + (contextualPercentage * 0.3));
  }

  /**
   * Find internal links in document
   */
  findInternalLinks(document) {
    const links = document.querySelectorAll('a[href^="/"], a[href^="#"]');
    return Array.from(links).filter(link => 
      !link.href.includes('mailto:') && 
      !link.href.includes('tel:') &&
      link.href.length > 1
    );
  }

  /**
   * Find contextual links (links within content areas)
   */
  findContextualLinks(document) {
    const contextualSelectors = [
      '.contextual-links-inline',
      '.contextual-links-sidebar',
      '.contextual-links-footer',
      'section a',
      'article a',
      '.content a'
    ];
    
    const contextualLinks = [];
    for (const selector of contextualSelectors) {
      const links = document.querySelectorAll(selector);
      contextualLinks.push(...Array.from(links));
    }
    
    return contextualLinks;
  }

  /**
   * Count related destinations links
   */
  countRelatedDestinations(links) {
    return links.filter(link => 
      link.href.includes('destinations') || 
      link.href.includes('best-things-to-do') ||
      link.textContent.toLowerCase().includes('destination')
    ).length;
  }

  /**
   * Count travel planning links
   */
  countTravelPlanningLinks(links) {
    return links.filter(link => 
      link.href.includes('travel-tips') || 
      link.href.includes('when-to-visit') ||
      link.href.includes('accommodation') ||
      link.textContent.toLowerCase().includes('travel') ||
      link.textContent.toLowerCase().includes('planning')
    ).length;
  }

  /**
   * Calculate links score
   */
  calculateLinksScore(internalLinks, contextualLinks) {
    const internalCount = internalLinks.length;
    const contextualCount = contextualLinks.length;
    
    // Base score for having internal links
    let score = Math.min(internalCount * 5, 50);
    
    // Bonus for contextual links
    score += Math.min(contextualCount * 10, 50);
    
    return Math.min(score, 100);
  }

  /**
   * Get HTML files to audit
   */
  getHtmlFiles() {
    const publicDir = path.join(__dirname, 'dist', 'public');
    const files = [];
    
    // Add city pages (check both flat and directory structure)
    const cityFiles = [
      'best-things-to-do-in-seoul/index.html',
      'best-things-to-do-in-london/index.html',
      'best-things-to-do-in-rome/index.html',
      'best-things-to-do-in-edinburgh/index.html'
    ];
    cityFiles.forEach(file => {
      const filePath = path.join(publicDir, file);
      if (fs.existsSync(filePath)) {
        files.push(filePath);
      }
    });
    
    // Add main pages
    const mainFiles = ['home-seo.html', 'destinations-seo.html', 'blogs-seo.html'];
    mainFiles.forEach(file => {
      const filePath = path.join(publicDir, file);
      if (fs.existsSync(filePath)) {
        files.push(filePath);
      }
    });
    
    return files;
  }

  /**
   * Calculate overall score
   */
  calculateOverallScore() {
    const categories = [
      this.results.articleSchema,
      this.results.altTextEnhancement,
      this.results.contextualLinks
    ];
    
    let totalScore = 0;
    let totalPages = 0;
    
    for (const category of categories) {
      for (const page in category) {
        const pageData = category[page];
        if (pageData.schemaScore !== undefined) {
          totalScore += pageData.schemaScore;
          totalPages++;
        } else if (pageData.altTextScore !== undefined) {
          totalScore += pageData.altTextScore;
          totalPages++;
        } else if (pageData.linksScore !== undefined) {
          totalScore += pageData.linksScore;
          totalPages++;
        }
      }
    }
    
    this.results.overallScore = totalPages > 0 ? Math.round(totalScore / totalPages) : 0;
  }

  /**
   * Generate comprehensive report
   */
  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('🎯 ENHANCED SEO AUDIT REPORT');
    console.log('='.repeat(60));
    
    // Article Schema Report
    console.log('\n📄 ARTICLE SCHEMA IMPLEMENTATION');
    console.log('-'.repeat(40));
    for (const [page, data] of Object.entries(this.results.articleSchema)) {
      console.log(`${page}: ${data.schemaScore}/100`);
      console.log(`  ✓ Article Schema: ${data.hasArticleSchema ? 'Yes' : 'No'}`);
      console.log(`  ✓ Main Entity: ${data.hasMainEntityOfPage ? 'Yes' : 'No'}`);
      console.log(`  ✓ Keywords: ${data.hasKeywords ? 'Yes' : 'No'}`);
      console.log(`  ✓ Word Count: ${data.hasWordCount ? 'Yes' : 'No'}`);
      console.log(`  ✓ Article Section: ${data.hasArticleSection ? 'Yes' : 'No'}`);
      console.log('');
    }
    
    // Alt Text Enhancement Report
    console.log('\n🖼️ ALT TEXT ENHANCEMENT');
    console.log('-'.repeat(40));
    for (const [page, data] of Object.entries(this.results.altTextEnhancement)) {
      console.log(`${page}: ${data.altTextScore}/100`);
      console.log(`  📊 Total Images: ${data.totalImages}`);
      console.log(`  ✓ With Alt Text: ${data.imagesWithAlt}`);
      console.log(`  ✓ Descriptive Alt: ${data.descriptiveAlt}`);
      console.log(`  ✓ Contextual Alt: ${data.contextualAlt}`);
      console.log('');
    }
    
    // Contextual Links Report
    console.log('\n🔗 CONTEXTUAL INTERNAL LINKS');
    console.log('-'.repeat(40));
    for (const [page, data] of Object.entries(this.results.contextualLinks)) {
      console.log(`${page}: ${data.linksScore}/100`);
      console.log(`  📊 Total Internal Links: ${data.totalInternalLinks}`);
      console.log(`  ✓ Contextual Links: ${data.contextualLinks}`);
      console.log(`  ✓ Related Destinations: ${data.relatedDestinations}`);
      console.log(`  ✓ Travel Planning: ${data.travelPlanningLinks}`);
      console.log('');
    }
    
    // Overall Score
    console.log('\n🎯 OVERALL ENHANCED SEO SCORE');
    console.log('-'.repeat(40));
    console.log(`Overall Score: ${this.results.overallScore}/100`);
    
    if (this.results.overallScore >= 90) {
      console.log('🌟 EXCELLENT: Enhanced SEO implementation is outstanding!');
    } else if (this.results.overallScore >= 80) {
      console.log('✅ GOOD: Enhanced SEO implementation is solid with room for improvement');
    } else if (this.results.overallScore >= 70) {
      console.log('⚠️ FAIR: Enhanced SEO implementation needs improvement');
    } else {
      console.log('❌ POOR: Enhanced SEO implementation requires significant work');
    }
    
    console.log('\n' + '='.repeat(60));
  }

  /**
   * Run complete enhanced SEO audit
   */
  async runCompleteAudit() {
    console.log('🚀 Starting Enhanced SEO Audit...\n');
    
    await this.auditArticleSchema();
    await this.auditAltTextEnhancement();
    await this.auditContextualLinks();
    
    this.calculateOverallScore();
    this.generateReport();
    
    // Save results to file
    const resultsPath = path.join(__dirname, 'enhanced-seo-audit-results.json');
    fs.writeFileSync(resultsPath, JSON.stringify(this.results, null, 2));
    console.log(`\n📁 Results saved to: ${resultsPath}`);
  }
}

// Run the audit
async function main() {
  const auditor = new EnhancedSEOAuditor();
  await auditor.runCompleteAudit();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { EnhancedSEOAuditor };