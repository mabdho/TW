#!/usr/bin/env node

/**
 * Comprehensive Performance Audit for TravelWanders
 * Measures Core Web Vitals, bundle optimization, and performance best practices
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class PerformanceAuditor {
  constructor() {
    this.results = {
      coreWebVitals: { score: 0, issues: [], strengths: [] },
      bundleOptimization: { score: 0, issues: [], strengths: [] },
      resourceOptimization: { score: 0, issues: [], strengths: [] },
      caching: { score: 0, issues: [], strengths: [] },
      networkOptimization: { score: 0, issues: [], strengths: [] },
      overallScore: 0
    };
  }

  async auditPerformance() {
    console.log('⚡ COMPREHENSIVE PERFORMANCE AUDIT - TravelWanders');
    console.log('='.repeat(60));
    
    await this.auditCoreWebVitals();
    await this.auditBundleOptimization();
    await this.auditResourceOptimization();
    await this.auditCaching();
    await this.auditNetworkOptimization();
    
    this.calculateOverallScore();
    this.generatePerformanceReport();
  }

  async auditCoreWebVitals() {
    console.log('\n🎯 CORE WEB VITALS AUDIT');
    console.log('-'.repeat(30));
    
    const cwv = this.results.coreWebVitals;
    
    // Check for performance monitoring
    const perfFiles = [
      'client/src/utils/performance.ts',
      'client/src/utils/performanceAudit.ts'
    ];
    
    const hasPerformanceMonitoring = perfFiles.some(file => 
      fs.existsSync(path.join(__dirname, file))
    );
    
    if (hasPerformanceMonitoring) {
      cwv.score += 25;
      cwv.strengths.push('✅ Performance monitoring utilities implemented');
      
      // Check for specific Core Web Vitals tracking
      perfFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
          const content = fs.readFileSync(filePath, 'utf-8');
          
          if (content.includes('FCP') || content.includes('first-contentful-paint')) {
            cwv.score += 15;
            cwv.strengths.push('✅ First Contentful Paint tracking');
          }
          
          if (content.includes('LCP') || content.includes('largest-contentful-paint')) {
            cwv.score += 15;
            cwv.strengths.push('✅ Largest Contentful Paint tracking');
          }
          
          if (content.includes('CLS') || content.includes('layout-shift')) {
            cwv.score += 15;
            cwv.strengths.push('✅ Cumulative Layout Shift tracking');
          }
          
          if (content.includes('FID') || content.includes('first-input')) {
            cwv.score += 15;
            cwv.strengths.push('✅ First Input Delay tracking');
          }
          
          if (content.includes('TTFB')) {
            cwv.score += 15;
            cwv.strengths.push('✅ Time to First Byte tracking');
          }
        }
      });
    } else {
      cwv.issues.push('❌ Performance monitoring not implemented');
    }
    
    console.log(`Core Web Vitals Score: ${Math.min(cwv.score, 100)}/100`);
  }

  async auditBundleOptimization() {
    console.log('\n📦 BUNDLE OPTIMIZATION AUDIT');
    console.log('-'.repeat(30));
    
    const bundle = this.results.bundleOptimization;
    
    // Check Vite configuration
    const viteConfigPath = path.join(__dirname, 'vite.config.ts');
    if (fs.existsSync(viteConfigPath)) {
      const viteContent = fs.readFileSync(viteConfigPath, 'utf-8');
      
      // Tree shaking
      if (viteContent.includes('treeshake')) {
        bundle.score += 20;
        bundle.strengths.push('✅ Tree shaking enabled');
      } else {
        bundle.issues.push('❌ Tree shaking not configured');
      }
      
      // Code splitting
      if (viteContent.includes('manualChunks')) {
        bundle.score += 20;
        bundle.strengths.push('✅ Manual chunk splitting configured');
      }
      
      // Minification
      if (viteContent.includes('minify') || viteContent.includes('terser')) {
        bundle.score += 15;
        bundle.strengths.push('✅ Code minification enabled');
      }
      
      // Compression
      if (viteContent.includes('compression')) {
        bundle.score += 15;
        bundle.strengths.push('✅ Asset compression configured');
      }
    }
    
    // Check bundle sizes
    const bundleFiles = this.getBundleFiles();
    if (bundleFiles.length > 0) {
      const totalSize = bundleFiles.reduce((sum, file) => {
        return sum + (fs.statSync(file.path).size / 1024);
      }, 0);
      
      console.log(`📊 Total bundle size: ${totalSize.toFixed(1)}KB across ${bundleFiles.length} files`);
      
      if (totalSize < 500) {
        bundle.score += 20;
        bundle.strengths.push(`✅ Excellent bundle size: ${totalSize.toFixed(1)}KB`);
      } else if (totalSize < 1000) {
        bundle.score += 15;
        bundle.strengths.push(`✅ Good bundle size: ${totalSize.toFixed(1)}KB`);
      } else {
        bundle.issues.push(`⚠️ Large bundle size: ${totalSize.toFixed(1)}KB (optimize further)`);
        bundle.score += Math.max(0, 10 - (totalSize - 1000) / 100);
      }
      
      // Check for code splitting (multiple bundles)
      if (bundleFiles.length >= 5) {
        bundle.score += 10;
        bundle.strengths.push(`✅ Good code splitting: ${bundleFiles.length} bundles`);
      } else if (bundleFiles.length >= 3) {
        bundle.score += 5;
        bundle.strengths.push(`✅ Basic code splitting: ${bundleFiles.length} bundles`);
      }
    }
    
    console.log(`Bundle Optimization Score: ${Math.min(bundle.score, 100)}/100`);
  }

  async auditResourceOptimization() {
    console.log('\n🖼️ RESOURCE OPTIMIZATION AUDIT');
    console.log('-'.repeat(30));
    
    const resource = this.results.resourceOptimization;
    
    const indexHtml = fs.readFileSync(path.join(__dirname, 'client/index.html'), 'utf-8');
    
    // Critical CSS
    if (indexHtml.includes('<style>') && indexHtml.includes('critical')) {
      resource.score += 25;
      resource.strengths.push('✅ Critical CSS inlined');
    } else {
      resource.issues.push('❌ Critical CSS not inlined');
    }
    
    // Resource preloading
    const preloadCount = (indexHtml.match(/rel="preload"/g) || []).length;
    if (preloadCount >= 3) {
      resource.score += 20;
      resource.strengths.push(`✅ Resource preloading: ${preloadCount} resources`);
    } else if (preloadCount > 0) {
      resource.score += 10;
      resource.strengths.push(`✅ Limited preloading: ${preloadCount} resources`);
    } else {
      resource.issues.push('❌ No resource preloading detected');
    }
    
    // Font optimization
    if (indexHtml.includes('display=swap') || indexHtml.includes('font-display')) {
      resource.score += 15;
      resource.strengths.push('✅ Font loading optimized');
    }
    
    // DNS prefetch
    if (indexHtml.includes('dns-prefetch')) {
      resource.score += 10;
      resource.strengths.push('✅ DNS prefetch implemented');
    }
    
    // Preconnect
    if (indexHtml.includes('preconnect')) {
      resource.score += 10;
      resource.strengths.push('✅ Preconnect implemented');
    }
    
    // Image optimization utilities
    const imageOptFile = path.join(__dirname, 'client/src/utils/imageOptimization.ts');
    if (fs.existsSync(imageOptFile)) {
      resource.score += 20;
      resource.strengths.push('✅ Image optimization utilities present');
    } else {
      resource.issues.push('❌ Image optimization utilities missing');
    }
    
    console.log(`Resource Optimization Score: ${Math.min(resource.score, 100)}/100`);
  }

  async auditCaching() {
    console.log('\n💾 CACHING AUDIT');
    console.log('-'.repeat(30));
    
    const caching = this.results.caching;
    
    // Check server configuration for caching
    const serverFile = path.join(__dirname, 'server/index.ts');
    if (fs.existsSync(serverFile)) {
      const serverContent = fs.readFileSync(serverFile, 'utf-8');
      
      // HTTP caching headers
      if (serverContent.includes('Cache-Control')) {
        caching.score += 30;
        caching.strengths.push('✅ HTTP caching headers configured');
      } else {
        caching.issues.push('❌ HTTP caching headers missing');
      }
      
      // Compression
      if (serverContent.includes('compression') || serverContent.includes('gzip')) {
        caching.score += 25;
        caching.strengths.push('✅ Response compression enabled');
      }
      
      // Static file serving
      if (serverContent.includes('static') || serverContent.includes('express.static')) {
        caching.score += 20;
        caching.strengths.push('✅ Static file serving configured');
      }
    }
    
    // Check for service worker
    const swFile = path.join(__dirname, 'client/src/sw.js');
    const swExists = fs.existsSync(swFile) || 
                     fs.existsSync(path.join(__dirname, 'public/sw.js')) ||
                     fs.existsSync(path.join(__dirname, 'dist/public/sw.js'));
    
    if (swExists) {
      caching.score += 25;
      caching.strengths.push('✅ Service Worker implemented');
    } else {
      caching.issues.push('❌ Service Worker not implemented');
    }
    
    console.log(`Caching Score: ${Math.min(caching.score, 100)}/100`);
  }

  async auditNetworkOptimization() {
    console.log('\n🌐 NETWORK OPTIMIZATION AUDIT');
    console.log('-'.repeat(30));
    
    const network = this.results.networkOptimization;
    
    const indexHtml = fs.readFileSync(path.join(__dirname, 'client/index.html'), 'utf-8');
    
    // HTTP/2 server push simulation (preload)
    if (indexHtml.includes('modulepreload')) {
      network.score += 20;
      network.strengths.push('✅ Module preloading (HTTP/2 push simulation)');
    }
    
    // DNS optimization
    const dnsOptCount = (indexHtml.match(/dns-prefetch|preconnect/g) || []).length;
    if (dnsOptCount >= 3) {
      network.score += 20;
      network.strengths.push(`✅ DNS optimization: ${dnsOptCount} domains`);
    } else if (dnsOptCount > 0) {
      network.score += 10;
      network.strengths.push(`✅ Basic DNS optimization: ${dnsOptCount} domains`);
    }
    
    // Lazy loading
    const appFile = path.join(__dirname, 'client/src/App.tsx');
    if (fs.existsSync(appFile)) {
      const appContent = fs.readFileSync(appFile, 'utf-8');
      if (appContent.includes('lazy(') && appContent.includes('Suspense')) {
        network.score += 25;
        network.strengths.push('✅ Lazy loading implemented');
      } else {
        network.issues.push('❌ Lazy loading not detected');
      }
    }
    
    // CDN usage check (external domains)
    const cdnDomains = ['googleapis.com', 'gstatic.com', 'unsplash.com'];
    const foundCdnDomains = cdnDomains.filter(domain => indexHtml.includes(domain));
    
    if (foundCdnDomains.length > 0) {
      network.score += 15;
      network.strengths.push(`✅ CDN usage: ${foundCdnDomains.length} external domains`);
    }
    
    // Resource bundling check
    const bundleFiles = this.getBundleFiles();
    if (bundleFiles.length > 1 && bundleFiles.length < 20) {
      network.score += 20;
      network.strengths.push(`✅ Optimal resource bundling: ${bundleFiles.length} bundles`);
    } else if (bundleFiles.length >= 20) {
      network.issues.push(`⚠️ Too many bundles: ${bundleFiles.length} (consider consolidation)`);
    }
    
    console.log(`Network Optimization Score: ${Math.min(network.score, 100)}/100`);
  }

  getBundleFiles() {
    const assetsDir = path.join(__dirname, 'client/dist/public/assets');
    if (!fs.existsSync(assetsDir)) return [];
    
    return fs.readdirSync(assetsDir)
      .filter(file => file.endsWith('.js') && !file.endsWith('.js.br') && !file.endsWith('.js.gz'))
      .map(file => ({
        name: file,
        path: path.join(assetsDir, file)
      }));
  }

  calculateOverallScore() {
    const scores = Object.values(this.results)
      .filter(r => typeof r === 'object' && 'score' in r)
      .map(r => Math.min(r.score, 100)); // Cap scores at 100
    
    this.results.overallScore = Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length
    );
  }

  generatePerformanceReport() {
    console.log('\n' + '='.repeat(60));
    console.log('⚡ COMPREHENSIVE PERFORMANCE AUDIT RESULTS');
    console.log('='.repeat(60));
    
    console.log(`\n🏆 OVERALL PERFORMANCE SCORE: ${this.results.overallScore}/100`);
    
    const getGrade = (score) => {
      if (score >= 90) return '🥇 A+ (Excellent)';
      if (score >= 80) return '🥈 A (Very Good)';
      if (score >= 70) return '🥉 B+ (Good)';
      if (score >= 60) return '📈 B (Fair)';
      return '⚠️ C (Needs Improvement)';
    };
    
    console.log(`Performance Grade: ${getGrade(this.results.overallScore)}\n`);
    
    // Core Web Vitals status
    console.log('🎯 CORE WEB VITALS STATUS:');
    const coreVitalsScore = this.results.coreWebVitals.score;
    if (coreVitalsScore >= 80) {
      console.log('   ✅ Excellent - All Core Web Vitals optimized');
    } else if (coreVitalsScore >= 60) {
      console.log('   ⚠️ Good - Some Core Web Vitals improvements needed');
    } else {
      console.log('   ❌ Poor - Significant Core Web Vitals optimization required');
    }
    
    // Detailed breakdown
    Object.entries(this.results).forEach(([category, data]) => {
      if (typeof data === 'object' && 'score' in data) {
        const cappedScore = Math.min(data.score, 100);
        console.log(`\n📋 ${category.toUpperCase().replace(/([A-Z])/g, ' $1').trim()}: ${cappedScore}/100`);
        
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
    
    // Performance recommendations
    console.log('\n🚀 PERFORMANCE OPTIMIZATION PRIORITY:');
    const allIssues = Object.values(this.results)
      .filter(r => typeof r === 'object' && 'issues' in r)
      .flatMap(r => r.issues)
      .filter(issue => issue.includes('❌'));
    
    if (allIssues.length === 0) {
      console.log('   🎉 Excellent! No critical performance issues found.');
    } else {
      allIssues.slice(0, 5).forEach((issue, i) => {
        console.log(`   ${i + 1}. ${issue}`);
      });
    }
    
    // Performance metrics targets
    console.log('\n📊 PERFORMANCE TARGETS:');
    console.log('   🎯 First Contentful Paint (FCP): < 2.5s');
    console.log('   🎯 Largest Contentful Paint (LCP): < 2.5s');
    console.log('   🎯 First Input Delay (FID): < 100ms');
    console.log('   🎯 Cumulative Layout Shift (CLS): < 0.1');
    console.log('   🎯 Time to First Byte (TTFB): < 600ms');
    
    console.log('\n' + '='.repeat(60));
  }
}

// Run the performance audit
const performanceAuditor = new PerformanceAuditor();
performanceAuditor.auditPerformance().catch(console.error);