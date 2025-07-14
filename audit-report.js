#!/usr/bin/env node

/**
 * Comprehensive Project Audit Script for TravelWanders
 * Checks all aspects: Performance, SEO, Security, Code Quality, Bundle Optimization
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

class ProjectAuditor {
  constructor() {
    this.results = {
      performance: { score: 0, issues: [], strengths: [] },
      seo: { score: 0, issues: [], strengths: [] },
      security: { score: 0, issues: [], strengths: [] },
      codeQuality: { score: 0, issues: [], strengths: [] },
      bundleOptimization: { score: 0, issues: [], strengths: [] },
      overallScore: 0
    };
  }

  // 1. FULL PROJECT AUDIT
  async auditProject() {
    console.log('🔍 COMPREHENSIVE PROJECT AUDIT - TravelWanders');
    console.log('='.repeat(60));
    
    await this.auditPerformance();
    await this.auditSEO();
    await this.auditSecurity();
    await this.auditCodeQuality();
    await this.auditBundleOptimization();
    
    this.calculateOverallScore();
    this.generateReport();
  }

  // 2. PERFORMANCE AUDIT
  async auditPerformance() {
    console.log('\n📊 PERFORMANCE AUDIT');
    console.log('-'.repeat(30));
    
    const perf = this.results.performance;
    
    // Check bundle sizes
    const bundleFiles = this.getBundleFiles();
    console.log(`📦 Found ${bundleFiles.length} JavaScript bundles`);
    
    let totalSize = 0;
    bundleFiles.forEach(file => {
      const size = fs.statSync(file.path).size / 1024; // KB
      totalSize += size;
      console.log(`   ${file.name}: ${size.toFixed(1)}KB`);
      
      if (size > 500) {
        perf.issues.push(`Large bundle: ${file.name} (${size.toFixed(1)}KB)`);
      }
    });
    
    // Performance scoring
    if (totalSize < 1000) {
      perf.score += 30;
      perf.strengths.push(`✅ Total bundle size optimized: ${totalSize.toFixed(1)}KB`);
    } else {
      perf.issues.push(`❌ Total bundle size too large: ${totalSize.toFixed(1)}KB`);
    }
    
    // Check for code splitting
    if (bundleFiles.length > 3) {
      perf.score += 20;
      perf.strengths.push('✅ Code splitting implemented');
    } else {
      perf.issues.push('❌ Limited code splitting detected');
    }
    
    // Check critical CSS
    const indexHtml = fs.readFileSync(path.join(__dirname, 'client/index.html'), 'utf-8');
    if (indexHtml.includes('<style>') && indexHtml.includes('critical')) {
      perf.score += 20;
      perf.strengths.push('✅ Critical CSS inlined');
    } else {
      perf.issues.push('❌ Critical CSS not inlined');
    }
    
    // Check preloading
    if (indexHtml.includes('rel="preload"')) {
      perf.score += 15;
      perf.strengths.push('✅ Resource preloading implemented');
    }
    
    // Check compression
    const hasCompression = fs.existsSync(path.join(__dirname, 'client/dist/public/assets')) &&
      fs.readdirSync(path.join(__dirname, 'client/dist/public/assets')).some(f => f.endsWith('.br'));
    
    if (hasCompression) {
      perf.score += 15;
      perf.strengths.push('✅ Brotli compression enabled');
    } else {
      perf.issues.push('❌ Asset compression not detected');
    }
    
    console.log(`Performance Score: ${perf.score}/100`);
  }

  // 3. SEO AUDIT
  async auditSEO() {
    console.log('\n🔍 SEO AUDIT');
    console.log('-'.repeat(30));
    
    const seo = this.results.seo;
    
    // Check meta tags in index.html
    const indexHtml = fs.readFileSync(path.join(__dirname, 'client/index.html'), 'utf-8');
    
    // Meta description
    if (indexHtml.includes('name="description"')) {
      seo.score += 15;
      seo.strengths.push('✅ Meta description present');
    } else {
      seo.issues.push('❌ Meta description missing');
    }
    
    // Open Graph tags
    if (indexHtml.includes('property="og:')) {
      seo.score += 15;
      seo.strengths.push('✅ Open Graph tags implemented');
    } else {
      seo.issues.push('❌ Open Graph tags missing');
    }
    
    // Check structured data
    if (indexHtml.includes('application/ld+json') || 
        fs.existsSync(path.join(__dirname, 'client/src/utils/structuredData.ts'))) {
      seo.score += 20;
      seo.strengths.push('✅ Structured data implemented');
    } else {
      seo.issues.push('❌ Structured data missing');
    }
    
    // Check SEO utilities
    if (fs.existsSync(path.join(__dirname, 'client/src/utils/seo.ts'))) {
      seo.score += 15;
      seo.strengths.push('✅ SEO utilities implemented');
    }
    
    // Check sitemap
    const sitemapExists = fs.existsSync(path.join(__dirname, 'public/sitemap.xml')) ||
                         fs.existsSync(path.join(__dirname, 'dist/public/sitemap.xml'));
    
    if (sitemapExists) {
      seo.score += 10;
      seo.strengths.push('✅ Sitemap.xml found');
    } else {
      seo.issues.push('❌ Sitemap.xml missing');
    }
    
    // Check robots.txt
    const robotsExists = fs.existsSync(path.join(__dirname, 'public/robots.txt')) ||
                        fs.existsSync(path.join(__dirname, 'dist/public/robots.txt'));
    
    if (robotsExists) {
      seo.score += 10;
      seo.strengths.push('✅ Robots.txt found');
    } else {
      seo.issues.push('❌ Robots.txt missing');
    }
    
    // Check canonical URLs
    if (indexHtml.includes('rel="canonical"') || 
        fs.readFileSync(path.join(__dirname, 'client/src/utils/seo.ts'), 'utf-8').includes('canonical')) {
      seo.score += 15;
      seo.strengths.push('✅ Canonical URLs implemented');
    } else {
      seo.issues.push('❌ Canonical URLs missing');
    }
    
    console.log(`SEO Score: ${seo.score}/100`);
  }

  // 4. SECURITY AUDIT
  async auditSecurity() {
    console.log('\n🔒 SECURITY AUDIT');
    console.log('-'.repeat(30));
    
    const security = this.results.security;
    
    // Check package.json for security
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8'));
    
    // Check for security headers
    const serverFiles = ['server/index.ts', 'server/routes.ts'];
    let hasSecurityHeaders = false;
    
    serverFiles.forEach(file => {
      if (fs.existsSync(path.join(__dirname, file))) {
        const content = fs.readFileSync(path.join(__dirname, file), 'utf-8');
        if (content.includes('helmet') || content.includes('security') || content.includes('cors')) {
          hasSecurityHeaders = true;
        }
      }
    });
    
    if (hasSecurityHeaders) {
      security.score += 25;
      security.strengths.push('✅ Security headers configured');
    } else {
      security.issues.push('❌ Security headers missing');
    }
    
    // Check for environment variables
    if (fs.existsSync(path.join(__dirname, '.env'))) {
      security.issues.push('⚠️ .env file found (ensure it\'s gitignored)');
    } else {
      security.score += 20;
      security.strengths.push('✅ No .env file in repository');
    }
    
    // Check session security
    if (fs.existsSync(path.join(__dirname, 'server/index.ts'))) {
      const serverContent = fs.readFileSync(path.join(__dirname, 'server/index.ts'), 'utf-8');
      if (serverContent.includes('session') && serverContent.includes('secure') && serverContent.includes('httpOnly')) {
        security.score += 25;
        security.strengths.push('✅ Secure session configuration');
      } else {
        security.issues.push('❌ Session security not properly configured');
      }
    }
    
    // Check dependencies for known vulnerabilities (basic check)
    const depCount = Object.keys(packageJson.dependencies || {}).length + 
                    Object.keys(packageJson.devDependencies || {}).length;
    
    if (depCount < 100) {
      security.score += 15;
      security.strengths.push(`✅ Reasonable dependency count: ${depCount}`);
    } else {
      security.issues.push(`⚠️ High dependency count: ${depCount} (audit for vulnerabilities)`);
    }
    
    // Check for TypeScript
    if (packageJson.devDependencies?.typescript) {
      security.score += 15;
      security.strengths.push('✅ TypeScript used for type safety');
    }
    
    console.log(`Security Score: ${security.score}/100`);
  }

  // 5. CODE QUALITY AUDIT
  async auditCodeQuality() {
    console.log('\n💎 CODE QUALITY AUDIT');
    console.log('-'.repeat(30));
    
    const quality = this.results.codeQuality;
    
    // Check TypeScript configuration
    if (fs.existsSync(path.join(__dirname, 'tsconfig.json'))) {
      quality.score += 20;
      quality.strengths.push('✅ TypeScript configuration present');
    }
    
    // Check for proper project structure
    const requiredDirs = ['client/src', 'server', 'shared'];
    const existingDirs = requiredDirs.filter(dir => 
      fs.existsSync(path.join(__dirname, dir))
    );
    
    if (existingDirs.length === requiredDirs.length) {
      quality.score += 20;
      quality.strengths.push('✅ Proper monorepo structure');
    } else {
      quality.issues.push(`❌ Missing directories: ${requiredDirs.filter(d => !existingDirs.includes(d)).join(', ')}`);
    }
    
    // Check for shared schema
    if (fs.existsSync(path.join(__dirname, 'shared/schema.ts'))) {
      quality.score += 15;
      quality.strengths.push('✅ Shared schema for type safety');
    }
    
    // Check build configuration
    if (fs.existsSync(path.join(__dirname, 'vite.config.ts'))) {
      const viteConfig = fs.readFileSync(path.join(__dirname, 'vite.config.ts'), 'utf-8');
      if (viteConfig.includes('manualChunks') && viteConfig.includes('treeshake')) {
        quality.score += 20;
        quality.strengths.push('✅ Optimized build configuration');
      }
    }
    
    // Check for utility files
    const utilityFiles = ['client/src/utils/seo.ts', 'client/src/utils/performance.ts'];
    const existingUtils = utilityFiles.filter(file => 
      fs.existsSync(path.join(__dirname, file))
    );
    
    if (existingUtils.length >= 2) {
      quality.score += 15;
      quality.strengths.push('✅ Comprehensive utility functions');
    }
    
    // Check component organization
    if (fs.existsSync(path.join(__dirname, 'client/src/components'))) {
      const components = fs.readdirSync(path.join(__dirname, 'client/src/components'));
      if (components.length > 5 && components.some(c => c.includes('SEO'))) {
        quality.score += 10;
        quality.strengths.push('✅ Well-organized component structure');
      }
    }
    
    console.log(`Code Quality Score: ${quality.score}/100`);
  }

  // 6. BUNDLE OPTIMIZATION AUDIT
  async auditBundleOptimization() {
    console.log('\n📦 BUNDLE OPTIMIZATION AUDIT');
    console.log('-'.repeat(30));
    
    const bundle = this.results.bundleOptimization;
    
    // Check Vite configuration for optimization
    if (fs.existsSync(path.join(__dirname, 'vite.config.ts'))) {
      const viteConfig = fs.readFileSync(path.join(__dirname, 'vite.config.ts'), 'utf-8');
      
      // Tree shaking
      if (viteConfig.includes('treeshake')) {
        bundle.score += 25;
        bundle.strengths.push('✅ Tree shaking enabled');
      }
      
      // Manual chunks
      if (viteConfig.includes('manualChunks')) {
        bundle.score += 25;
        bundle.strengths.push('✅ Manual chunk splitting configured');
      }
      
      // Minification
      if (viteConfig.includes('minify') || viteConfig.includes('terser')) {
        bundle.score += 20;
        bundle.strengths.push('✅ Code minification enabled');
      }
      
      // Compression
      if (viteConfig.includes('compression')) {
        bundle.score += 15;
        bundle.strengths.push('✅ Asset compression configured');
      }
    }
    
    // Check for lazy loading
    const appFile = path.join(__dirname, 'client/src/App.tsx');
    if (fs.existsSync(appFile)) {
      const appContent = fs.readFileSync(appFile, 'utf-8');
      if (appContent.includes('lazy(') && appContent.includes('Suspense')) {
        bundle.score += 15;
        bundle.strengths.push('✅ Lazy loading implemented');
      } else {
        bundle.issues.push('❌ Lazy loading not detected');
      }
    }
    
    console.log(`Bundle Optimization Score: ${bundle.score}/100`);
  }

  // Helper methods
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
      .map(r => r.score);
    
    this.results.overallScore = Math.round(
      scores.reduce((sum, score) => sum + score, 0) / scores.length
    );
  }

  generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 COMPREHENSIVE AUDIT RESULTS');
    console.log('='.repeat(60));
    
    console.log(`\n🎯 OVERALL SCORE: ${this.results.overallScore}/100`);
    
    const getGrade = (score) => {
      if (score >= 90) return '🥇 A+';
      if (score >= 80) return '🥈 A';
      if (score >= 70) return '🥉 B+';
      if (score >= 60) return '📈 B';
      return '⚠️ C';
    };
    
    console.log(`Grade: ${getGrade(this.results.overallScore)}\n`);
    
    // Detailed breakdown
    Object.entries(this.results).forEach(([category, data]) => {
      if (typeof data === 'object' && 'score' in data) {
        console.log(`\n📋 ${category.toUpperCase()}: ${data.score}/100`);
        
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
    
    // Priority recommendations
    console.log('\n🚀 PRIORITY RECOMMENDATIONS:');
    const allIssues = Object.values(this.results)
      .filter(r => typeof r === 'object' && 'issues' in r)
      .flatMap(r => r.issues);
    
    if (allIssues.length === 0) {
      console.log('   🎉 Excellent! No critical issues found.');
    } else {
      allIssues.slice(0, 5).forEach((issue, i) => {
        console.log(`   ${i + 1}. ${issue}`);
      });
    }
    
    console.log('\n' + '='.repeat(60));
  }
}

// Run the audit
const auditor = new ProjectAuditor();
auditor.auditProject().catch(console.error);