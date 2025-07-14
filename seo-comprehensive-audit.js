#!/usr/bin/env node

/**
 * Comprehensive SEO Audit for TravelWanders
 * Checks all SEO best practices and compliance
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class SEOAuditor {
  constructor() {
    this.results = {
      technicalSEO: { score: 0, issues: [], strengths: [] },
      onPageSEO: { score: 0, issues: [], strengths: [] },
      structuredData: { score: 0, issues: [], strengths: [] },
      performance: { score: 0, issues: [], strengths: [] },
      mobileSEO: { score: 0, issues: [], strengths: [] },
      overallScore: 0
    };
  }

  async auditSEO() {
    console.log('🔍 COMPREHENSIVE SEO AUDIT - TravelWanders');
    console.log('='.repeat(60));
    
    await this.auditTechnicalSEO();
    await this.auditOnPageSEO();
    await this.auditStructuredData();
    await this.auditPerformanceSEO();
    await this.auditMobileSEO();
    
    this.calculateOverallScore();
    this.generateSEOReport();
  }

  async auditTechnicalSEO() {
    console.log('\n🔧 TECHNICAL SEO AUDIT');
    console.log('-'.repeat(30));
    
    const tech = this.results.technicalSEO;
    
    // Check robots.txt
    const robotsExists = fs.existsSync(path.join(__dirname, 'public/robots.txt')) ||
                        fs.existsSync(path.join(__dirname, 'dist/public/robots.txt')) ||
                        fs.existsSync(path.join(__dirname, 'client/dist/public/robots.txt'));
    
    if (robotsExists) {
      tech.score += 10;
      tech.strengths.push('✅ Robots.txt found');
    } else {
      tech.issues.push('❌ Robots.txt missing - critical for search engine crawling');
    }
    
    // Check sitemap.xml
    const sitemapExists = fs.existsSync(path.join(__dirname, 'public/sitemap.xml')) ||
                         fs.existsSync(path.join(__dirname, 'dist/public/sitemap.xml')) ||
                         fs.existsSync(path.join(__dirname, 'client/dist/public/sitemap.xml'));
    
    if (sitemapExists) {
      tech.score += 15;
      tech.strengths.push('✅ Sitemap.xml found');
    } else {
      tech.issues.push('❌ Sitemap.xml missing - critical for search engine indexing');
    }
    
    // Check canonical URLs
    const seoUtils = path.join(__dirname, 'client/src/utils/seo.ts');
    if (fs.existsSync(seoUtils)) {
      const seoContent = fs.readFileSync(seoUtils, 'utf-8');
      if (seoContent.includes('canonical')) {
        tech.score += 15;
        tech.strengths.push('✅ Canonical URL implementation found');
      }
    }
    
    // Check SSL/HTTPS
    const indexHtml = fs.readFileSync(path.join(__dirname, 'client/index.html'), 'utf-8');
    if (indexHtml.includes('https://')) {
      tech.score += 10;
      tech.strengths.push('✅ HTTPS URLs detected');
    }
    
    // Check meta viewport
    if (indexHtml.includes('name="viewport"')) {
      tech.score += 10;
      tech.strengths.push('✅ Viewport meta tag present');
    }
    
    // Check favicon
    if (indexHtml.includes('favicon')) {
      tech.score += 5;
      tech.strengths.push('✅ Favicon implemented');
    }
    
    // Check URL structure
    const appFile = path.join(__dirname, 'client/src/App.tsx');
    if (fs.existsSync(appFile)) {
      const appContent = fs.readFileSync(appFile, 'utf-8');
      if (appContent.includes('best-things-to-do-in-')) {
        tech.score += 15;
        tech.strengths.push('✅ SEO-friendly URL structure');
      }
    }
    
    // Check for 404 handling
    if (fs.existsSync(appFile)) {
      const appContent = fs.readFileSync(appFile, 'utf-8');
      if (appContent.includes('NotFound') || appContent.includes('404')) {
        tech.score += 10;
        tech.strengths.push('✅ 404 error handling implemented');
      }
    }
    
    // Check loading speed optimizations
    if (indexHtml.includes('preload') || indexHtml.includes('prefetch')) {
      tech.score += 10;
      tech.strengths.push('✅ Resource preloading implemented');
    }
    
    console.log(`Technical SEO Score: ${tech.score}/100`);
  }

  async auditOnPageSEO() {
    console.log('\n📝 ON-PAGE SEO AUDIT');
    console.log('-'.repeat(30));
    
    const onPage = this.results.onPageSEO;
    
    const indexHtml = fs.readFileSync(path.join(__dirname, 'client/index.html'), 'utf-8');
    
    // Check title tag
    if (indexHtml.includes('<title>') && indexHtml.includes('TravelWanders')) {
      onPage.score += 15;
      onPage.strengths.push('✅ Title tag present and branded');
    } else {
      onPage.issues.push('❌ Title tag missing or improperly formatted');
    }
    
    // Check meta description
    const descMatch = indexHtml.match(/name="description" content="([^"]+)"/);
    if (descMatch) {
      const description = descMatch[1];
      if (description.length >= 120 && description.length <= 160) {
        onPage.score += 15;
        onPage.strengths.push('✅ Meta description optimal length');
      } else if (description.length > 0) {
        onPage.score += 10;
        onPage.issues.push(`⚠️ Meta description length: ${description.length} chars (optimal: 120-160)`);
      }
    } else {
      onPage.issues.push('❌ Meta description missing');
    }
    
    // Check keywords meta tag
    if (indexHtml.includes('name="keywords"')) {
      onPage.score += 10;
      onPage.strengths.push('✅ Keywords meta tag present');
    }
    
    // Check Open Graph tags
    const ogTags = ['og:title', 'og:description', 'og:type', 'og:image'];
    const foundOgTags = ogTags.filter(tag => indexHtml.includes(tag));
    
    if (foundOgTags.length === ogTags.length) {
      onPage.score += 20;
      onPage.strengths.push('✅ Complete Open Graph implementation');
    } else if (foundOgTags.length > 0) {
      onPage.score += 10;
      onPage.issues.push(`⚠️ Partial Open Graph: ${foundOgTags.length}/${ogTags.length} tags`);
    }
    
    // Check Twitter Cards
    if (indexHtml.includes('twitter:card') && indexHtml.includes('twitter:title')) {
      onPage.score += 15;
      onPage.strengths.push('✅ Twitter Cards implemented');
    } else {
      onPage.issues.push('❌ Twitter Cards missing');
    }
    
    // Check heading structure
    const homeFile = path.join(__dirname, 'client/src/pages/home.tsx');
    if (fs.existsSync(homeFile)) {
      const homeContent = fs.readFileSync(homeFile, 'utf-8');
      if (homeContent.includes('h1') || homeContent.includes('h2')) {
        onPage.score += 10;
        onPage.strengths.push('✅ Heading structure implemented');
      }
    }
    
    // Check internal linking
    const internalLinkFile = path.join(__dirname, 'client/src/utils/internalLinking.ts');
    if (fs.existsSync(internalLinkFile)) {
      onPage.score += 15;
      onPage.strengths.push('✅ Internal linking system implemented');
    } else {
      onPage.issues.push('❌ Internal linking system missing');
    }
    
    console.log(`On-Page SEO Score: ${onPage.score}/100`);
  }

  async auditStructuredData() {
    console.log('\n📊 STRUCTURED DATA AUDIT');
    console.log('-'.repeat(30));
    
    const structured = this.results.structuredData;
    
    // Check for structured data utilities
    const structuredDataFile = path.join(__dirname, 'client/src/utils/structuredData.ts');
    if (fs.existsSync(structuredDataFile)) {
      const structuredContent = fs.readFileSync(structuredDataFile, 'utf-8');
      
      // Check for different schema types
      const schemas = [
        'Organization',
        'Website', 
        'BreadcrumbList',
        'TouristAttraction',
        'LocalBusiness',
        'Article',
        'BlogPosting'
      ];
      
      const foundSchemas = schemas.filter(schema => 
        structuredContent.includes(schema)
      );
      
      if (foundSchemas.length >= 5) {
        structured.score += 30;
        structured.strengths.push(`✅ Rich structured data: ${foundSchemas.length} schema types`);
      } else if (foundSchemas.length >= 3) {
        structured.score += 20;
        structured.strengths.push(`✅ Good structured data: ${foundSchemas.length} schema types`);
      } else if (foundSchemas.length > 0) {
        structured.score += 10;
        structured.issues.push(`⚠️ Limited structured data: ${foundSchemas.length} schema types`);
      }
    } else {
      structured.issues.push('❌ Structured data utilities missing');
    }
    
    // Check for JSON-LD implementation
    const seoHeadFile = path.join(__dirname, 'client/src/components/SEOHead.tsx');
    if (fs.existsSync(seoHeadFile)) {
      const seoHeadContent = fs.readFileSync(seoHeadFile, 'utf-8');
      if (seoHeadContent.includes('application/ld+json')) {
        structured.score += 25;
        structured.strengths.push('✅ JSON-LD structured data implementation');
      }
    }
    
    // Check for breadcrumb implementation
    if (fs.existsSync(seoHeadFile)) {
      const seoHeadContent = fs.readFileSync(seoHeadFile, 'utf-8');
      if (seoHeadContent.includes('breadcrumb')) {
        structured.score += 20;
        structured.strengths.push('✅ Breadcrumb structured data');
      }
    }
    
    // Check for FAQ schema
    if (fs.existsSync(seoHeadFile)) {
      const seoHeadContent = fs.readFileSync(seoHeadFile, 'utf-8');
      if (seoHeadContent.includes('faq')) {
        structured.score += 15;
        structured.strengths.push('✅ FAQ structured data');
      }
    }
    
    // Check city pages for TouristAttraction schema
    const cityFiles = ['client/src/pages/cities'];
    if (fs.existsSync(path.join(__dirname, cityFiles[0]))) {
      structured.score += 10;
      structured.strengths.push('✅ City pages with potential TouristAttraction schema');
    }
    
    console.log(`Structured Data Score: ${structured.score}/100`);
  }

  async auditPerformanceSEO() {
    console.log('\n⚡ PERFORMANCE SEO AUDIT');
    console.log('-'.repeat(30));
    
    const perf = this.results.performance;
    
    const indexHtml = fs.readFileSync(path.join(__dirname, 'client/index.html'), 'utf-8');
    
    // Check critical CSS
    if (indexHtml.includes('<style>') && indexHtml.includes('critical')) {
      perf.score += 20;
      perf.strengths.push('✅ Critical CSS inlined');
    } else {
      perf.issues.push('❌ Critical CSS not inlined');
    }
    
    // Check preloading
    const preloadCount = (indexHtml.match(/rel="preload"/g) || []).length;
    if (preloadCount >= 3) {
      perf.score += 15;
      perf.strengths.push(`✅ Resource preloading: ${preloadCount} resources`);
    } else if (preloadCount > 0) {
      perf.score += 10;
      perf.issues.push(`⚠️ Limited preloading: ${preloadCount} resources`);
    }
    
    // Check DNS prefetch
    if (indexHtml.includes('dns-prefetch')) {
      perf.score += 10;
      perf.strengths.push('✅ DNS prefetch implemented');
    }
    
    // Check preconnect
    if (indexHtml.includes('preconnect')) {
      perf.score += 10;
      perf.strengths.push('✅ Preconnect implemented');
    }
    
    // Check lazy loading
    const appFile = path.join(__dirname, 'client/src/App.tsx');
    if (fs.existsSync(appFile)) {
      const appContent = fs.readFileSync(appFile, 'utf-8');
      if (appContent.includes('lazy(')) {
        perf.score += 15;
        perf.strengths.push('✅ Lazy loading implemented');
      }
    }
    
    // Check image optimization
    const imageOptFile = path.join(__dirname, 'client/src/utils/imageOptimization.ts');
    if (fs.existsSync(imageOptFile)) {
      perf.score += 15;
      perf.strengths.push('✅ Image optimization utilities');
    }
    
    // Check compression
    const viteConfig = path.join(__dirname, 'vite.config.ts');
    if (fs.existsSync(viteConfig)) {
      const viteContent = fs.readFileSync(viteConfig, 'utf-8');
      if (viteContent.includes('compression')) {
        perf.score += 15;
        perf.strengths.push('✅ Asset compression configured');
      }
    }
    
    console.log(`Performance SEO Score: ${perf.score}/100`);
  }

  async auditMobileSEO() {
    console.log('\n📱 MOBILE SEO AUDIT');
    console.log('-'.repeat(30));
    
    const mobile = this.results.mobileSEO;
    
    const indexHtml = fs.readFileSync(path.join(__dirname, 'client/index.html'), 'utf-8');
    
    // Check viewport meta tag
    const viewportMatch = indexHtml.match(/name="viewport" content="([^"]+)"/);
    if (viewportMatch) {
      const viewport = viewportMatch[1];
      if (viewport.includes('width=device-width') && viewport.includes('initial-scale=1')) {
        mobile.score += 25;
        mobile.strengths.push('✅ Proper viewport configuration');
      } else {
        mobile.score += 15;
        mobile.issues.push('⚠️ Viewport configuration could be improved');
      }
    } else {
      mobile.issues.push('❌ Viewport meta tag missing');
    }
    
    // Check mobile-friendly meta tags
    if (indexHtml.includes('mobile-web-app-capable')) {
      mobile.score += 10;
      mobile.strengths.push('✅ Mobile app meta tags present');
    }
    
    // Check theme color
    if (indexHtml.includes('theme-color')) {
      mobile.score += 10;
      mobile.strengths.push('✅ Theme color defined');
    }
    
    // Check responsive design implementation
    const tailwindConfig = path.join(__dirname, 'tailwind.config.ts');
    if (fs.existsSync(tailwindConfig)) {
      mobile.score += 20;
      mobile.strengths.push('✅ Responsive framework (Tailwind) detected');
    }
    
    // Check touch-friendly interactions
    if (indexHtml.includes('touch') || indexHtml.includes('tap')) {
      mobile.score += 15;
      mobile.strengths.push('✅ Touch-friendly optimizations');
    }
    
    // Check font loading optimization
    if (indexHtml.includes('font-display') || indexHtml.includes('display=swap')) {
      mobile.score += 10;
      mobile.strengths.push('✅ Font loading optimized');
    }
    
    // Check critical CSS for mobile
    if (indexHtml.includes('mobile') || indexHtml.includes('responsive')) {
      mobile.score += 10;
      mobile.strengths.push('✅ Mobile-specific optimizations detected');
    }
    
    console.log(`Mobile SEO Score: ${mobile.score}/100`);
  }

  calculateOverallScore() {
    const scores = Object.values(this.results)
      .filter(r => typeof r === 'object' && 'score' in r)
      .map(r => r.score);
    
    this.results.overallScore = Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length
    );
  }

  generateSEOReport() {
    console.log('\n' + '='.repeat(60));
    console.log('🎯 COMPREHENSIVE SEO AUDIT RESULTS');
    console.log('='.repeat(60));
    
    console.log(`\n🏆 OVERALL SEO SCORE: ${this.results.overallScore}/100`);
    
    const getGrade = (score) => {
      if (score >= 90) return '🥇 A+ (Excellent)';
      if (score >= 80) return '🥈 A (Very Good)';
      if (score >= 70) return '🥉 B+ (Good)';
      if (score >= 60) return '📈 B (Fair)';
      return '⚠️ C (Needs Improvement)';
    };
    
    console.log(`SEO Grade: ${getGrade(this.results.overallScore)}\n`);
    
    // Detailed breakdown
    Object.entries(this.results).forEach(([category, data]) => {
      if (typeof data === 'object' && 'score' in data) {
        console.log(`\n📋 ${category.toUpperCase().replace(/([A-Z])/g, ' $1').trim()}: ${data.score}/100`);
        
        if (data.strengths.length > 0) {
          console.log('  Strengths:');
          data.strengths.forEach(strength => console.log(`    ${strength}`));
        }
        
        if (data.issues.length > 0) {
          console.log('  Issues:');
          data.issues.forEach(issue => console.log(`    ${issue}`));
        }
      }
    });
    
    // Critical SEO recommendations
    console.log('\n🚀 CRITICAL SEO RECOMMENDATIONS:');
    const allIssues = Object.values(this.results)
      .filter(r => typeof r === 'object' && 'issues' in r)
      .flatMap(r => r.issues)
      .filter(issue => issue.includes('❌'));
    
    if (allIssues.length === 0) {
      console.log('   🎉 Excellent! No critical SEO issues found.');
    } else {
      allIssues.slice(0, 5).forEach((issue, i) => {
        console.log(`   ${i + 1}. ${issue}`);
      });
    }
    
    // SEO best practices summary
    console.log('\n📚 SEO BEST PRACTICES STATUS:');
    const practiceChecks = [
      { name: 'Technical SEO Foundation', score: this.results.technicalSEO.score },
      { name: 'Content Optimization', score: this.results.onPageSEO.score },
      { name: 'Rich Snippets', score: this.results.structuredData.score },
      { name: 'Performance Optimization', score: this.results.performance.score },
      { name: 'Mobile-First SEO', score: this.results.mobileSEO.score }
    ];
    
    practiceChecks.forEach(practice => {
      const status = practice.score >= 80 ? '✅' : practice.score >= 60 ? '⚠️' : '❌';
      console.log(`   ${status} ${practice.name}: ${practice.score}%`);
    });
    
    console.log('\n' + '='.repeat(60));
  }
}

// Run the SEO audit
const seoAuditor = new SEOAuditor();
seoAuditor.auditSEO().catch(console.error);