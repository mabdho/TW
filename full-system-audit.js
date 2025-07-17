#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { spawn } from 'child_process';

class FullSystemAuditor {
  constructor() {
    this.results = {
      orphanLinks: {
        status: 'pending',
        totalLinks: 0,
        workingLinks: 0,
        brokenLinks: [],
        orphanPages: [],
        score: 0
      },
      hydrationCompliance: {
        status: 'pending',
        totalPages: 0,
        compliantPages: 0,
        failedPages: [],
        complianceRate: 0,
        score: 0
      },
      tsxHtmlSync: {
        status: 'pending',
        totalFiles: 0,
        syncedFiles: 0,
        mismatchedFiles: [],
        syncRate: 0,
        score: 0
      },
      seoImplementation: {
        status: 'pending',
        totalPages: 0,
        optimizedPages: 0,
        missingElements: [],
        seoScore: 0,
        score: 0
      },
      performance: {
        status: 'pending',
        bundleSize: 0,
        loadTime: 0,
        optimizations: [],
        issues: [],
        score: 0
      },
      overallScore: 0,
      timestamp: new Date().toISOString()
    };
  }

  // 1. Orphan Links Audit
  async auditOrphanLinks() {
    console.log('🔗 Running Orphan Links Audit...');
    const linkAudit = this.results.orphanLinks;
    
    try {
      // Get all HTML files
      const htmlFiles = this.getAllHTMLFiles();
      const allLinks = new Set();
      const existingPages = new Set();
      
      // Extract all links and existing pages
      for (const filePath of htmlFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        // Track existing pages
        const relativePath = path.relative('dist/public', filePath);
        existingPages.add('/' + relativePath.replace(/\/index\.html$/, '').replace(/\.html$/, ''));
        
        // Extract all internal links
        const links = document.querySelectorAll('a[href]');
        for (const link of links) {
          const href = link.getAttribute('href');
          if (href && href.startsWith('/') && !href.startsWith('//')) {
            allLinks.add(href);
          }
        }
      }
      
      // Check which links are broken
      const brokenLinks = [];
      for (const link of allLinks) {
        let targetPath = link;
        
        // Handle different URL patterns
        if (link === '/') {
          targetPath = '/home-seo';
        } else if (link.startsWith('/best-things-to-do-in-')) {
          targetPath = link;
        } else if (link === '/destinations') {
          targetPath = '/destinations-seo';
        } else if (link === '/blogs') {
          targetPath = '/blogs-seo';
        }
        
        // Check if file exists
        let fileExists = false;
        const possiblePaths = [
          `dist/public${targetPath}.html`,
          `dist/public${targetPath}/index.html`,
          `dist/public${targetPath.replace('/best-', '/things-')}/index.html`
        ];
        
        for (const possiblePath of possiblePaths) {
          if (fs.existsSync(possiblePath)) {
            fileExists = true;
            break;
          }
        }
        
        if (!fileExists) {
          brokenLinks.push(link);
        }
      }
      
      // Find orphan pages (pages with no incoming links)
      const orphanPages = [];
      for (const page of existingPages) {
        if (page !== '/' && !allLinks.has(page)) {
          orphanPages.push(page);
        }
      }
      
      linkAudit.totalLinks = allLinks.size;
      linkAudit.workingLinks = allLinks.size - brokenLinks.length;
      linkAudit.brokenLinks = brokenLinks;
      linkAudit.orphanPages = orphanPages;
      linkAudit.score = Math.max(0, Math.round((linkAudit.workingLinks / linkAudit.totalLinks) * 100));
      linkAudit.status = brokenLinks.length === 0 && orphanPages.length === 0 ? 'perfect' : 'issues_found';
      
      console.log(`✅ Orphan Links Audit Complete: ${linkAudit.workingLinks}/${linkAudit.totalLinks} links working`);
      
    } catch (error) {
      console.error('❌ Orphan Links Audit Failed:', error.message);
      linkAudit.status = 'error';
      linkAudit.score = 0;
    }
  }

  // 2. Hydration Compliance Audit
  async auditHydrationCompliance() {
    console.log('⚡ Running Hydration Compliance Audit...');
    const hydrationAudit = this.results.hydrationCompliance;
    
    try {
      const expectedData = {
        'home-seo.html': {
          title: 'Best Travel Guides & Destinations - TravelWanders',
          description: 'Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.',
          h1: 'Explore the world with confidence'
        },
        'destinations-seo.html': {
          title: 'All Destinations - TravelWanders',
          description: 'Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.',
          h1: 'All Destinations'
        },
        'blogs-seo.html': {
          title: 'Travel Blog Stories & Destination Guides - TravelWanders',
          description: 'Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.',
          h1: 'Travel Blog'
        }
      };
      
      const failedPages = [];
      let compliantPages = 0;
      
      for (const [filename, expected] of Object.entries(expectedData)) {
        const filePath = path.join('dist/public', filename);
        
        if (!fs.existsSync(filePath)) {
          failedPages.push({
            file: filename,
            issue: 'File does not exist',
            severity: 'critical'
          });
          continue;
        }
        
        const content = fs.readFileSync(filePath, 'utf8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        
        const actual = {
          title: document.querySelector('title')?.textContent?.trim() || '',
          description: document.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || '',
          h1: document.querySelector('h1')?.textContent?.trim() || ''
        };
        
        const issues = [];
        if (actual.title !== expected.title) {
          issues.push(`Title mismatch: expected "${expected.title}", got "${actual.title}"`);
        }
        if (actual.description !== expected.description) {
          issues.push(`Description mismatch: expected "${expected.description}", got "${actual.description}"`);
        }
        if (actual.h1 !== expected.h1) {
          issues.push(`H1 mismatch: expected "${expected.h1}", got "${actual.h1}"`);
        }
        
        if (issues.length > 0) {
          failedPages.push({
            file: filename,
            issues: issues,
            severity: 'medium'
          });
        } else {
          compliantPages++;
        }
      }
      
      hydrationAudit.totalPages = Object.keys(expectedData).length;
      hydrationAudit.compliantPages = compliantPages;
      hydrationAudit.failedPages = failedPages;
      hydrationAudit.complianceRate = Math.round((compliantPages / hydrationAudit.totalPages) * 100);
      hydrationAudit.score = hydrationAudit.complianceRate;
      hydrationAudit.status = failedPages.length === 0 ? 'perfect' : 'issues_found';
      
      console.log(`✅ Hydration Compliance Audit Complete: ${compliantPages}/${hydrationAudit.totalPages} pages compliant`);
      
    } catch (error) {
      console.error('❌ Hydration Compliance Audit Failed:', error.message);
      hydrationAudit.status = 'error';
      hydrationAudit.score = 0;
    }
  }

  // 3. TSX-HTML Synchronization Audit
  async auditTsxHtmlSync() {
    console.log('🔄 Running TSX-HTML Synchronization Audit...');
    const syncAudit = this.results.tsxHtmlSync;
    
    try {
      const tsxFiles = this.getAllTSXFiles();
      const htmlFiles = this.getAllHTMLFiles();
      
      const mismatchedFiles = [];
      let syncedFiles = 0;
      
      // Check if key TSX components have corresponding HTML output
      const keyComponents = [
        { tsx: 'client/src/pages/home.tsx', html: 'dist/public/home-seo.html' },
        { tsx: 'client/src/pages/destinations.tsx', html: 'dist/public/destinations-seo.html' },
        { tsx: 'client/src/pages/blogs.tsx', html: 'dist/public/blogs-seo.html' }
      ];
      
      for (const component of keyComponents) {
        if (!fs.existsSync(component.tsx)) {
          mismatchedFiles.push({
            type: 'missing_tsx',
            file: component.tsx,
            issue: 'TSX component file not found'
          });
          continue;
        }
        
        if (!fs.existsSync(component.html)) {
          mismatchedFiles.push({
            type: 'missing_html',
            file: component.html,
            issue: 'Generated HTML file not found'
          });
          continue;
        }
        
        // Basic sync check - ensure HTML has expected React hydration markers
        const htmlContent = fs.readFileSync(component.html, 'utf8');
        const hasReactRoot = htmlContent.includes('id="root"') || htmlContent.includes('data-reactroot');
        
        if (!hasReactRoot) {
          mismatchedFiles.push({
            type: 'sync_issue',
            file: component.html,
            issue: 'HTML does not contain React hydration markers'
          });
        } else {
          syncedFiles++;
        }
      }
      
      syncAudit.totalFiles = keyComponents.length;
      syncAudit.syncedFiles = syncedFiles;
      syncAudit.mismatchedFiles = mismatchedFiles;
      syncAudit.syncRate = Math.round((syncedFiles / syncAudit.totalFiles) * 100);
      syncAudit.score = syncAudit.syncRate;
      syncAudit.status = mismatchedFiles.length === 0 ? 'perfect' : 'issues_found';
      
      console.log(`✅ TSX-HTML Sync Audit Complete: ${syncedFiles}/${syncAudit.totalFiles} files synchronized`);
      
    } catch (error) {
      console.error('❌ TSX-HTML Sync Audit Failed:', error.message);
      syncAudit.status = 'error';
      syncAudit.score = 0;
    }
  }

  // 4. SEO Implementation Audit
  async auditSEOImplementation() {
    console.log('🔍 Running SEO Implementation Audit...');
    const seoAudit = this.results.seoImplementation;
    
    try {
      const htmlFiles = this.getAllHTMLFiles();
      const missingElements = [];
      let optimizedPages = 0;
      
      for (const filePath of htmlFiles) {
        const content = fs.readFileSync(filePath, 'utf8');
        const dom = new JSDOM(content);
        const document = dom.window.document;
        const filename = path.basename(filePath);
        
        const seoElements = {
          title: document.querySelector('title')?.textContent?.trim() || '',
          metaDescription: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
          h1: document.querySelector('h1')?.textContent?.trim() || '',
          canonical: document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '',
          ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') || '',
          ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') || '',
          structuredData: document.querySelectorAll('script[type="application/ld+json"]').length
        };
        
        const issues = [];
        
        if (!seoElements.title) issues.push('Missing title tag');
        if (!seoElements.metaDescription) issues.push('Missing meta description');
        if (!seoElements.h1) issues.push('Missing H1 tag');
        if (!seoElements.canonical) issues.push('Missing canonical URL');
        if (!seoElements.ogTitle) issues.push('Missing Open Graph title');
        if (!seoElements.ogDescription) issues.push('Missing Open Graph description');
        if (seoElements.structuredData === 0) issues.push('Missing structured data');
        
        if (issues.length > 0) {
          missingElements.push({
            file: filename,
            issues: issues
          });
        } else {
          optimizedPages++;
        }
      }
      
      seoAudit.totalPages = htmlFiles.length;
      seoAudit.optimizedPages = optimizedPages;
      seoAudit.missingElements = missingElements;
      seoAudit.seoScore = Math.round((optimizedPages / seoAudit.totalPages) * 100);
      seoAudit.score = seoAudit.seoScore;
      seoAudit.status = missingElements.length === 0 ? 'perfect' : 'issues_found';
      
      console.log(`✅ SEO Implementation Audit Complete: ${optimizedPages}/${seoAudit.totalPages} pages fully optimized`);
      
    } catch (error) {
      console.error('❌ SEO Implementation Audit Failed:', error.message);
      seoAudit.status = 'error';
      seoAudit.score = 0;
    }
  }

  // 5. Performance Audit
  async auditPerformance() {
    console.log('⚡ Running Performance Audit...');
    const perfAudit = this.results.performance;
    
    try {
      const optimizations = [];
      const issues = [];
      
      // Check bundle optimization
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        // Check for optimization tools
        const optimizationTools = ['terser', 'csso', 'cssnano', 'vite-plugin-compression'];
        for (const tool of optimizationTools) {
          if (deps[tool]) {
            optimizations.push(`✅ ${tool} installed`);
          }
        }
        
        // Check for potential bundle bloat
        if (deps['lucide-react']) {
          issues.push('❌ lucide-react still in dependencies - potential bundle bloat');
        } else {
          optimizations.push('✅ lucide-react removed - bundle optimized');
        }
      }
      
      // Check for performance optimization files
      const perfFiles = [
        'client/src/utils/performance.ts',
        'client/src/utils/performanceOptimizer.ts',
        'client/src/hooks/usePerformanceOptimization.ts',
        'client/src/utils/bundleOptimizer.ts'
      ];
      
      for (const file of perfFiles) {
        if (fs.existsSync(file)) {
          optimizations.push(`✅ ${path.basename(file)} implemented`);
        } else {
          issues.push(`❌ ${path.basename(file)} missing`);
        }
      }
      
      // Check for image optimization
      const imageOptFiles = [
        'client/src/components/ImageOptimized.tsx',
        'client/src/services/ImageOptimizationService.ts'
      ];
      
      for (const file of imageOptFiles) {
        if (fs.existsSync(file)) {
          optimizations.push(`✅ ${path.basename(file)} implemented`);
        } else {
          issues.push(`❌ ${path.basename(file)} missing`);
        }
      }
      
      // Check for service worker
      if (fs.existsSync('dist/public/sw.js') || fs.existsSync('public/sw.js')) {
        optimizations.push('✅ Service worker implemented');
      } else {
        issues.push('❌ Service worker missing');
      }
      
      // Calculate performance score
      const totalChecks = optimizations.length + issues.length;
      const optimizationScore = totalChecks > 0 ? Math.round((optimizations.length / totalChecks) * 100) : 0;
      
      perfAudit.optimizations = optimizations;
      perfAudit.issues = issues;
      perfAudit.score = optimizationScore;
      perfAudit.status = issues.length === 0 ? 'perfect' : 'issues_found';
      
      console.log(`✅ Performance Audit Complete: ${optimizations.length} optimizations, ${issues.length} issues`);
      
    } catch (error) {
      console.error('❌ Performance Audit Failed:', error.message);
      perfAudit.status = 'error';
      perfAudit.score = 0;
    }
  }

  // Helper methods
  getAllHTMLFiles() {
    const htmlFiles = [];
    const searchDirs = ['dist/public'];
    
    for (const dir of searchDirs) {
      if (fs.existsSync(dir)) {
        const files = this.getFilesRecursively(dir, '.html');
        htmlFiles.push(...files);
      }
    }
    
    return htmlFiles;
  }

  getAllTSXFiles() {
    const tsxFiles = [];
    const searchDirs = ['client/src'];
    
    for (const dir of searchDirs) {
      if (fs.existsSync(dir)) {
        const files = this.getFilesRecursively(dir, '.tsx');
        tsxFiles.push(...files);
      }
    }
    
    return tsxFiles;
  }

  getFilesRecursively(dir, extension) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath, extension));
      } else if (item.endsWith(extension)) {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  calculateOverallScore() {
    const scores = [
      this.results.orphanLinks.score,
      this.results.hydrationCompliance.score,
      this.results.tsxHtmlSync.score,
      this.results.seoImplementation.score,
      this.results.performance.score
    ];
    
    this.results.overallScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  generateFinalReport() {
    this.calculateOverallScore();
    
    console.log('\n' + '='.repeat(80));
    console.log('🎯 FULL SYSTEM AUDIT REPORT');
    console.log('='.repeat(80));
    
    console.log(`\n📊 Overall Score: ${this.results.overallScore}/100`);
    
    if (this.results.overallScore >= 90) {
      console.log('🎉 EXCELLENT: Your system is in outstanding condition!');
    } else if (this.results.overallScore >= 80) {
      console.log('✅ GOOD: Your system is performing well with minor improvements needed.');
    } else if (this.results.overallScore >= 70) {
      console.log('⚠️  FAIR: Your system needs attention in several areas.');
    } else {
      console.log('❌ POOR: Your system requires significant improvements.');
    }
    
    // Detailed breakdown
    console.log('\n📋 DETAILED BREAKDOWN:');
    console.log(`├─ 🔗 Orphan Links: ${this.results.orphanLinks.score}/100 (${this.results.orphanLinks.status})`);
    console.log(`├─ ⚡ Hydration Compliance: ${this.results.hydrationCompliance.score}/100 (${this.results.hydrationCompliance.status})`);
    console.log(`├─ 🔄 TSX-HTML Sync: ${this.results.tsxHtmlSync.score}/100 (${this.results.tsxHtmlSync.status})`);
    console.log(`├─ 🔍 SEO Implementation: ${this.results.seoImplementation.score}/100 (${this.results.seoImplementation.status})`);
    console.log(`└─ ⚡ Performance: ${this.results.performance.score}/100 (${this.results.performance.status})`);
    
    // Critical issues summary
    const criticalIssues = [];
    
    if (this.results.orphanLinks.brokenLinks.length > 0) {
      criticalIssues.push(`${this.results.orphanLinks.brokenLinks.length} broken links found`);
    }
    
    if (this.results.hydrationCompliance.failedPages.length > 0) {
      criticalIssues.push(`${this.results.hydrationCompliance.failedPages.length} pages failed hydration compliance`);
    }
    
    if (this.results.tsxHtmlSync.mismatchedFiles.length > 0) {
      criticalIssues.push(`${this.results.tsxHtmlSync.mismatchedFiles.length} TSX-HTML synchronization issues`);
    }
    
    if (this.results.seoImplementation.missingElements.length > 0) {
      criticalIssues.push(`${this.results.seoImplementation.missingElements.length} pages with SEO issues`);
    }
    
    if (this.results.performance.issues.length > 0) {
      criticalIssues.push(`${this.results.performance.issues.length} performance issues`);
    }
    
    if (criticalIssues.length > 0) {
      console.log('\n🚨 CRITICAL ISSUES TO ADDRESS:');
      criticalIssues.forEach(issue => console.log(`   • ${issue}`));
    }
    
    // Success highlights
    const successes = [];
    
    if (this.results.orphanLinks.score >= 90) successes.push('Excellent link structure');
    if (this.results.hydrationCompliance.score >= 90) successes.push('Perfect hydration compliance');
    if (this.results.tsxHtmlSync.score >= 90) successes.push('TSX-HTML synchronization working well');
    if (this.results.seoImplementation.score >= 90) successes.push('SEO implementation is excellent');
    if (this.results.performance.score >= 90) successes.push('Performance optimization is excellent');
    
    if (successes.length > 0) {
      console.log('\n✨ STRENGTHS:');
      successes.forEach(success => console.log(`   • ${success}`));
    }
    
    console.log('\n' + '='.repeat(80));
    
    // Save detailed results to file
    fs.writeFileSync('full-system-audit-results.json', JSON.stringify(this.results, null, 2));
    console.log('📄 Detailed results saved to: full-system-audit-results.json');
    
    return this.results;
  }

  async runFullAudit() {
    console.log('🚀 Starting Full System Audit...');
    console.log('This comprehensive audit will check:');
    console.log('   • Orphan links and broken navigation');
    console.log('   • Hydration compliance between React and static HTML');
    console.log('   • TSX-HTML synchronization');
    console.log('   • SEO best practices implementation');
    console.log('   • Performance optimization');
    console.log('');
    
    try {
      // Run all audits in parallel for efficiency
      await Promise.all([
        this.auditOrphanLinks(),
        this.auditHydrationCompliance(),
        this.auditTsxHtmlSync(),
        this.auditSEOImplementation(),
        this.auditPerformance()
      ]);
      
      return this.generateFinalReport();
      
    } catch (error) {
      console.error('❌ Full System Audit Failed:', error);
      return this.results;
    }
  }
}

// Run the audit if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    const auditor = new FullSystemAuditor();
    await auditor.runFullAudit();
  })().catch(console.error);
}

export { FullSystemAuditor };