/**
 * Comprehensive SEO Audit for TravelWanders
 * Checks all SEO best practices and compliance
 */

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

class SEOAuditor {
  constructor() {
    this.results = {
      technicalSEO: { score: 0, issues: [], strengths: [] },
      onPageSEO: { score: 0, issues: [], strengths: [] },
      structuredData: { score: 0, issues: [], strengths: [] },
      performanceSEO: { score: 0, issues: [], strengths: [] },
      mobileSEO: { score: 0, issues: [], strengths: [] },
      overallScore: 0
    };
  }

  async auditSEO() {
    console.log('\n🔍 COMPREHENSIVE SEO AUDIT');
    console.log('='.repeat(50));
    
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
    const robotsExists = fs.existsSync('dist/public/robots.txt') || fs.existsSync('public/robots.txt');
    if (robotsExists) {
      tech.score += 15;
      tech.strengths.push('✅ Robots.txt found');
      
      // Check robots.txt content
      const robotsPath = fs.existsSync('dist/public/robots.txt') ? 'dist/public/robots.txt' : 'public/robots.txt';
      const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
      
      if (robotsContent.includes('Sitemap:')) {
        tech.score += 5;
        tech.strengths.push('✅ Sitemap reference in robots.txt');
      }
    } else {
      tech.issues.push('❌ Robots.txt missing - critical for search engine crawling');
    }
    
    // Check sitemap.xml
    const sitemapExists = fs.existsSync('dist/public/sitemap.xml') || fs.existsSync('public/sitemap.xml');
    if (sitemapExists) {
      tech.score += 15;
      tech.strengths.push('✅ Sitemap.xml found');
      
      // Check sitemap content
      const sitemapPath = fs.existsSync('dist/public/sitemap.xml') ? 'dist/public/sitemap.xml' : 'public/sitemap.xml';
      const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
      
      if (sitemapContent.includes('<urlset')) {
        tech.score += 5;
        tech.strengths.push('✅ Valid XML sitemap structure');
      }
    } else {
      tech.issues.push('❌ Sitemap.xml missing - critical for search engine indexing');
    }
    
    // Check canonical URLs implementation
    const seoUtils = 'client/src/utils/seo.ts';
    if (fs.existsSync(seoUtils)) {
      const seoContent = fs.readFileSync(seoUtils, 'utf-8');
      if (seoContent.includes('canonical')) {
        tech.score += 10;
        tech.strengths.push('✅ Canonical URL implementation found');
      }
    }
    
    // Check for 404 handling
    const notFoundExists = fs.existsSync('client/src/pages/not-found.tsx');
    if (notFoundExists) {
      tech.score += 10;
      tech.strengths.push('✅ 404 error handling implemented');
    }
    
    // Check URL structure
    const appFile = 'client/src/App.tsx';
    if (fs.existsSync(appFile)) {
      const appContent = fs.readFileSync(appFile, 'utf-8');
      if (appContent.includes('best-things-to-do-in-')) {
        tech.score += 15;
        tech.strengths.push('✅ SEO-friendly URL structure');
      }
    }
    
    // Check HTTPS configuration
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    if (packageJson.homepage && packageJson.homepage.startsWith('https://')) {
      tech.score += 10;
      tech.strengths.push('✅ HTTPS configuration detected');
    }
    
    // Check for service worker
    const swExists = fs.existsSync('public/sw.js') || fs.existsSync('dist/public/sw.js');
    if (swExists) {
      tech.score += 10;
      tech.strengths.push('✅ Service worker implemented');
    }
    
    console.log(`Technical SEO Score: ${tech.score}/100`);
  }

  async auditOnPageSEO() {
    console.log('\n📄 ON-PAGE SEO AUDIT');
    console.log('-'.repeat(30));
    
    const onPage = this.results.onPageSEO;
    
    // Check HTML files for SEO elements
    const htmlFiles = this.findHTMLFiles();
    let totalPages = 0;
    let pagesWithProperSEO = 0;
    
    for (const htmlFile of htmlFiles) {
      totalPages++;
      const htmlContent = fs.readFileSync(htmlFile, 'utf-8');
      const dom = new JSDOM(htmlContent);
      const document = dom.window.document;
      
      let pageScore = 0;
      const pageName = path.basename(htmlFile);
      
      // Check title tag
      const titleElement = document.querySelector('title');
      if (titleElement && titleElement.textContent.trim().length > 0) {
        pageScore += 20;
        if (titleElement.textContent.length <= 60) {
          pageScore += 10;
        }
      }
      
      // Check meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && metaDesc.getAttribute('content')) {
        pageScore += 20;
        const descLength = metaDesc.getAttribute('content').length;
        if (descLength >= 120 && descLength <= 160) {
          pageScore += 10;
        }
      }
      
      // Check H1 tag
      const h1Elements = document.querySelectorAll('h1');
      if (h1Elements.length === 1) {
        pageScore += 15;
      } else if (h1Elements.length > 1) {
        pageScore += 5; // Partial credit for having H1s
      }
      
      // Check heading hierarchy
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      if (headings.length > 3) {
        pageScore += 10;
      }
      
      // Check image alt text
      const images = document.querySelectorAll('img');
      let imagesWithAlt = 0;
      images.forEach(img => {
        if (img.getAttribute('alt')) {
          imagesWithAlt++;
        }
      });
      
      if (images.length > 0) {
        const altTextScore = (imagesWithAlt / images.length) * 15;
        pageScore += altTextScore;
      }
      
      if (pageScore >= 70) {
        pagesWithProperSEO++;
        onPage.strengths.push(`✅ ${pageName} - Good on-page SEO`);
      } else {
        onPage.issues.push(`❌ ${pageName} - Poor on-page SEO (${pageScore}/100)`);
      }
    }
    
    onPage.score = totalPages > 0 ? (pagesWithProperSEO / totalPages) * 100 : 0;
    console.log(`On-Page SEO Score: ${onPage.score.toFixed(1)}%`);
    console.log(`Pages with good SEO: ${pagesWithProperSEO}/${totalPages}`);
  }

  async auditStructuredData() {
    console.log('\n🏗️ STRUCTURED DATA AUDIT');
    console.log('-'.repeat(30));
    
    const structured = this.results.structuredData;
    
    // Check HTML files for structured data
    const htmlFiles = this.findHTMLFiles();
    let totalPages = 0;
    let pagesWithStructuredData = 0;
    
    for (const htmlFile of htmlFiles) {
      totalPages++;
      const htmlContent = fs.readFileSync(htmlFile, 'utf-8');
      
      let hasStructuredData = false;
      
      // Check for JSON-LD
      if (htmlContent.includes('application/ld+json')) {
        hasStructuredData = true;
        structured.strengths.push(`✅ ${path.basename(htmlFile)} - JSON-LD structured data found`);
      }
      
      // Check for OpenGraph tags
      if (htmlContent.includes('og:title') && htmlContent.includes('og:description')) {
        hasStructuredData = true;
        structured.strengths.push(`✅ ${path.basename(htmlFile)} - OpenGraph tags found`);
      }
      
      // Check for Twitter Cards
      if (htmlContent.includes('twitter:card')) {
        hasStructuredData = true;
        structured.strengths.push(`✅ ${path.basename(htmlFile)} - Twitter Cards found`);
      }
      
      if (hasStructuredData) {
        pagesWithStructuredData++;
      } else {
        structured.issues.push(`❌ ${path.basename(htmlFile)} - No structured data found`);
      }
    }
    
    structured.score = totalPages > 0 ? (pagesWithStructuredData / totalPages) * 100 : 0;
    console.log(`Structured Data Score: ${structured.score.toFixed(1)}%`);
    console.log(`Pages with structured data: ${pagesWithStructuredData}/${totalPages}`);
  }

  async auditPerformanceSEO() {
    console.log('\n⚡ PERFORMANCE SEO AUDIT');
    console.log('-'.repeat(30));
    
    const performance = this.results.performanceSEO;
    
    // Check for performance optimizations
    const indexHtml = this.findIndexHtml();
    if (indexHtml) {
      const content = fs.readFileSync(indexHtml, 'utf-8');
      
      // Check for preload hints
      if (content.includes('rel="preload"')) {
        performance.score += 20;
        performance.strengths.push('✅ Resource preloading implemented');
      }
      
      // Check for prefetch hints
      if (content.includes('rel="prefetch"')) {
        performance.score += 10;
        performance.strengths.push('✅ Resource prefetching implemented');
      }
      
      // Check for preconnect hints
      if (content.includes('rel="preconnect"')) {
        performance.score += 15;
        performance.strengths.push('✅ DNS preconnect implemented');
      }
      
      // Check for font optimization
      if (content.includes('font-display:swap') || content.includes('&display=swap')) {
        performance.score += 15;
        performance.strengths.push('✅ Font optimization implemented');
      }
      
      // Check for image optimization
      if (content.includes('loading="lazy"')) {
        performance.score += 20;
        performance.strengths.push('✅ Image lazy loading implemented');
      }
      
      // Check for minification
      if (content.includes('<script') && !content.includes('  ') && content.length > 1000) {
        performance.score += 20;
        performance.strengths.push('✅ HTML minification detected');
      }
    }
    
    console.log(`Performance SEO Score: ${performance.score}/100`);
  }

  async auditMobileSEO() {
    console.log('\n📱 MOBILE SEO AUDIT');
    console.log('-'.repeat(30));
    
    const mobile = this.results.mobileSEO;
    
    // Check for viewport meta tag
    const indexHtml = this.findIndexHtml();
    if (indexHtml) {
      const content = fs.readFileSync(indexHtml, 'utf-8');
      
      if (content.includes('name="viewport"')) {
        mobile.score += 30;
        mobile.strengths.push('✅ Viewport meta tag found');
        
        // Check viewport content
        const viewportMatch = content.match(/name="viewport"\s+content="([^"]+)"/);
        if (viewportMatch && viewportMatch[1].includes('width=device-width')) {
          mobile.score += 20;
          mobile.strengths.push('✅ Proper viewport configuration');
        }
      } else {
        mobile.issues.push('❌ Viewport meta tag missing');
      }
      
      // Check for responsive design hints
      if (content.includes('responsive') || content.includes('mobile-first')) {
        mobile.score += 15;
        mobile.strengths.push('✅ Responsive design detected');
      }
      
      // Check Tailwind CSS (responsive framework)
      if (content.includes('tailwind')) {
        mobile.score += 20;
        mobile.strengths.push('✅ Responsive CSS framework detected');
      }
      
      // Check for touch-friendly elements
      if (content.includes('touch') || content.includes('mobile')) {
        mobile.score += 15;
        mobile.strengths.push('✅ Touch-friendly elements detected');
      }
    }
    
    console.log(`Mobile SEO Score: ${mobile.score}/100`);
  }

  findHTMLFiles() {
    const htmlFiles = [];
    
    // Check dist/public directory
    if (fs.existsSync('dist/public')) {
      const files = fs.readdirSync('dist/public');
      files.forEach(file => {
        if (file.endsWith('.html')) {
          htmlFiles.push(path.join('dist/public', file));
        }
      });
    }
    
    // Check public directory
    if (fs.existsSync('public')) {
      const files = fs.readdirSync('public');
      files.forEach(file => {
        if (file.endsWith('.html')) {
          htmlFiles.push(path.join('public', file));
        }
      });
    }
    
    return htmlFiles;
  }

  findIndexHtml() {
    const possiblePaths = [
      'client/index.html',
      'index.html',
      'public/index.html',
      'dist/index.html'
    ];
    
    for (const path of possiblePaths) {
      if (fs.existsSync(path)) {
        return path;
      }
    }
    
    return null;
  }

  calculateOverallScore() {
    const scores = [
      this.results.technicalSEO.score,
      this.results.onPageSEO.score,
      this.results.structuredData.score,
      this.results.performanceSEO.score,
      this.results.mobileSEO.score
    ];
    
    this.results.overallScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  }

  generateSEOReport() {
    console.log('\n📊 SEO AUDIT SUMMARY');
    console.log('='.repeat(50));
    console.log(`Overall SEO Score: ${this.results.overallScore.toFixed(1)}%`);
    console.log(`├── Technical SEO: ${this.results.technicalSEO.score}/100`);
    console.log(`├── On-Page SEO: ${this.results.onPageSEO.score.toFixed(1)}%`);
    console.log(`├── Structured Data: ${this.results.structuredData.score.toFixed(1)}%`);
    console.log(`├── Performance SEO: ${this.results.performanceSEO.score}/100`);
    console.log(`└── Mobile SEO: ${this.results.mobileSEO.score}/100`);
    
    // SEO Grade
    let grade = 'F';
    if (this.results.overallScore >= 90) grade = 'A+';
    else if (this.results.overallScore >= 80) grade = 'A';
    else if (this.results.overallScore >= 70) grade = 'B';
    else if (this.results.overallScore >= 60) grade = 'C';
    else if (this.results.overallScore >= 50) grade = 'D';
    
    console.log(`\n🎯 SEO Grade: ${grade}`);
    
    // Critical issues
    const allIssues = [
      ...this.results.technicalSEO.issues,
      ...this.results.onPageSEO.issues,
      ...this.results.structuredData.issues,
      ...this.results.performanceSEO.issues,
      ...this.results.mobileSEO.issues
    ];
    
    if (allIssues.length > 0) {
      console.log('\n🚨 Critical SEO Issues:');
      allIssues.forEach(issue => console.log(`   ${issue}`));
    }
    
    return this.results;
  }
}

export { SEOAuditor };