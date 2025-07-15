/**
 * Comprehensive Performance Audit for TravelWanders
 * Measures Core Web Vitals, bundle optimization, and performance best practices
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    console.log('\n🚀 COMPREHENSIVE PERFORMANCE AUDIT');
    console.log('='.repeat(50));
    
    await this.auditCoreWebVitals();
    await this.auditBundleOptimization();
    await this.auditResourceOptimization();
    await this.auditCaching();
    await this.auditNetworkOptimization();
    
    this.calculateOverallScore();
    this.generatePerformanceReport();
  }

  async auditCoreWebVitals() {
    console.log('\n📊 CORE WEB VITALS AUDIT');
    console.log('-'.repeat(30));
    
    const cwv = this.results.coreWebVitals;
    
    // Check for performance optimization patterns
    const indexHtml = this.findIndexHtml();
    if (indexHtml) {
      const content = fs.readFileSync(indexHtml, 'utf-8');
      
      // Check for critical CSS inlining
      if (content.includes('<style>') && content.includes('critical')) {
        cwv.score += 25;
        cwv.strengths.push('✅ Critical CSS inlining implemented');
      } else {
        cwv.issues.push('❌ Critical CSS not inlined - impacts FCP');
      }
      
      // Check for resource hints
      if (content.includes('rel="preload"')) {
        cwv.score += 20;
        cwv.strengths.push('✅ Resource preloading for faster LCP');
      }
      
      // Check for font optimization
      if (content.includes('font-display:swap') || content.includes('&display=swap')) {
        cwv.score += 15;
        cwv.strengths.push('✅ Font optimization to prevent layout shift');
      }
      
      // Check for image optimization
      if (content.includes('loading="lazy"')) {
        cwv.score += 15;
        cwv.strengths.push('✅ Image lazy loading implemented');
      }
      
      // Check for width/height attributes on images
      if (content.includes('width=') && content.includes('height=')) {
        cwv.score += 10;
        cwv.strengths.push('✅ Image dimensions specified - prevents CLS');
      }
      
      // Check for service worker
      if (content.includes('service-worker') || content.includes('sw.js')) {
        cwv.score += 15;
        cwv.strengths.push('✅ Service worker for caching');
      }
    }
    
    // Check for performance utilities
    const performanceUtils = [
      'client/src/utils/performance.ts',
      'client/src/utils/performanceOptimizer.ts',
      'client/src/hooks/usePerformanceOptimization.ts'
    ];
    
    for (const util of performanceUtils) {
      if (fs.existsSync(util)) {
        cwv.score += 10;
        cwv.strengths.push(`✅ Performance utility: ${path.basename(util)}`);
      }
    }
    
    console.log(`Core Web Vitals Score: ${cwv.score}/100`);
  }

  async auditBundleOptimization() {
    console.log('\n📦 BUNDLE OPTIMIZATION AUDIT');
    console.log('-'.repeat(30));
    
    const bundle = this.results.bundleOptimization;
    
    // Check package.json for optimization scripts
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'));
    
    if (packageJson.scripts) {
      if (packageJson.scripts['build:optimized']) {
        bundle.score += 20;
        bundle.strengths.push('✅ Optimized build script found');
      }
      
      if (packageJson.scripts['optimize:css']) {
        bundle.score += 15;
        bundle.strengths.push('✅ CSS optimization script found');
      }
      
      if (packageJson.scripts['optimize:js']) {
        bundle.score += 15;
        bundle.strengths.push('✅ JavaScript optimization script found');
      }
      
      if (packageJson.scripts['analyze:bundle']) {
        bundle.score += 10;
        bundle.strengths.push('✅ Bundle analysis script found');
      }
    }
    
    // Check for build optimization tools
    const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
    
    const optimizationTools = [
      'terser', 'csso', 'cssnano', 'vite-plugin-compression',
      'rollup-plugin-terser', 'babel-plugin-react-remove-properties'
    ];
    
    let toolsFound = 0;
    for (const tool of optimizationTools) {
      if (dependencies[tool]) {
        toolsFound++;
        bundle.strengths.push(`✅ Optimization tool: ${tool}`);
      }
    }
    
    bundle.score += (toolsFound / optimizationTools.length) * 30;
    
    // Check for code splitting
    const viteConfig = this.findViteConfig();
    if (viteConfig) {
      const content = fs.readFileSync(viteConfig, 'utf-8');
      if (content.includes('chunkSizeWarningLimit') || content.includes('manualChunks')) {
        bundle.score += 20;
        bundle.strengths.push('✅ Code splitting configuration found');
      }
    }
    
    // Check bundle files
    const bundleFiles = this.getBundleFiles();
    if (bundleFiles.length > 0) {
      const largeFiles = bundleFiles.filter(file => file.size > 500000); // 500KB
      if (largeFiles.length === 0) {
        bundle.score += 10;
        bundle.strengths.push('✅ No large bundle files detected');
      } else {
        bundle.issues.push(`❌ Large bundle files detected: ${largeFiles.length} files > 500KB`);
      }
    }
    
    console.log(`Bundle Optimization Score: ${bundle.score}/100`);
  }

  async auditResourceOptimization() {
    console.log('\n🎯 RESOURCE OPTIMIZATION AUDIT');
    console.log('-'.repeat(30));
    
    const resource = this.results.resourceOptimization;
    
    // Check for image optimization
    const imageOptimizationFiles = [
      'client/src/components/ImageOptimized.tsx',
      'client/src/components/ImageOptimizer.tsx',
      'client/src/utils/imageOptimization.ts',
      'client/src/services/ImageOptimizationService.ts'
    ];
    
    let imageOptFound = 0;
    for (const file of imageOptimizationFiles) {
      if (fs.existsSync(file)) {
        imageOptFound++;
        resource.strengths.push(`✅ Image optimization: ${path.basename(file)}`);
      }
    }
    
    resource.score += (imageOptFound / imageOptimizationFiles.length) * 30;
    
    // Check for critical resource loader
    if (fs.existsSync('client/src/components/CriticalResourceLoader.tsx')) {
      resource.score += 20;
      resource.strengths.push('✅ Critical resource loader implemented');
    }
    
    // Check for lazy loading implementation
    const lazyLoadingFiles = [
      'client/src/components/DynamicCityRoute.tsx'
    ];
    
    for (const file of lazyLoadingFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf-8');
        if (content.includes('lazy(') && content.includes('import(')) {
          resource.score += 25;
          resource.strengths.push('✅ Dynamic imports and lazy loading implemented');
        }
      }
    }
    
    // Check for WebP/AVIF support
    const imageFiles = this.findImageOptimizationReferences();
    if (imageFiles.some(content => content.includes('webp') || content.includes('avif'))) {
      resource.score += 15;
      resource.strengths.push('✅ Modern image formats (WebP/AVIF) supported');
    }
    
    // Check for compression
    const compressionFiles = ['vite.config.ts', 'package.json'];
    for (const file of compressionFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf-8');
        if (content.includes('compression') || content.includes('gzip')) {
          resource.score += 10;
          resource.strengths.push('✅ Compression configuration found');
          break;
        }
      }
    }
    
    console.log(`Resource Optimization Score: ${resource.score}/100`);
  }

  async auditCaching() {
    console.log('\n🗄️ CACHING AUDIT');
    console.log('-'.repeat(30));
    
    const caching = this.results.caching;
    
    // Check for service worker
    const swFiles = ['public/sw.js', 'dist/public/sw.js'];
    let swFound = false;
    
    for (const swFile of swFiles) {
      if (fs.existsSync(swFile)) {
        swFound = true;
        caching.score += 30;
        caching.strengths.push('✅ Service worker implemented');
        
        // Check service worker content
        const swContent = fs.readFileSync(swFile, 'utf-8');
        if (swContent.includes('cache')) {
          caching.score += 20;
          caching.strengths.push('✅ Service worker caching strategy');
        }
        
        if (swContent.includes('networkFirst') || swContent.includes('cacheFirst')) {
          caching.score += 15;
          caching.strengths.push('✅ Advanced caching strategies');
        }
        
        break;
      }
    }
    
    if (!swFound) {
      caching.issues.push('❌ No service worker found - missing caching optimization');
    }
    
    // Check for HTTP caching headers
    const serverFiles = ['server/index.ts', 'server/firebase-server.ts'];
    for (const serverFile of serverFiles) {
      if (fs.existsSync(serverFile)) {
        const content = fs.readFileSync(serverFile, 'utf-8');
        if (content.includes('Cache-Control') || content.includes('ETag')) {
          caching.score += 20;
          caching.strengths.push('✅ HTTP caching headers configured');
        }
      }
    }
    
    // Check for static asset caching
    const viteConfig = this.findViteConfig();
    if (viteConfig) {
      const content = fs.readFileSync(viteConfig, 'utf-8');
      if (content.includes('rollupOptions') && content.includes('output')) {
        caching.score += 15;
        caching.strengths.push('✅ Build output optimization for caching');
      }
    }
    
    console.log(`Caching Score: ${caching.score}/100`);
  }

  async auditNetworkOptimization() {
    console.log('\n🌐 NETWORK OPTIMIZATION AUDIT');
    console.log('-'.repeat(30));
    
    const network = this.results.networkOptimization;
    
    // Check for DNS prefetch/preconnect
    const indexHtml = this.findIndexHtml();
    if (indexHtml) {
      const content = fs.readFileSync(indexHtml, 'utf-8');
      
      if (content.includes('dns-prefetch')) {
        network.score += 15;
        network.strengths.push('✅ DNS prefetch implemented');
      }
      
      if (content.includes('preconnect')) {
        network.score += 20;
        network.strengths.push('✅ Preconnect hints implemented');
      }
      
      if (content.includes('prefetch')) {
        network.score += 15;
        network.strengths.push('✅ Resource prefetch implemented');
      }
    }
    
    // Check for CDN usage
    const htmlFiles = this.findAllHtmlFiles();
    let cdnUsage = false;
    
    for (const htmlFile of htmlFiles) {
      const content = fs.readFileSync(htmlFile, 'utf-8');
      if (content.includes('unsplash.com') || content.includes('cdn.')) {
        cdnUsage = true;
        break;
      }
    }
    
    if (cdnUsage) {
      network.score += 20;
      network.strengths.push('✅ CDN usage detected');
    }
    
    // Check for HTTP/2 server push hints
    const serverFiles = ['server/index.ts', 'server/firebase-server.ts'];
    for (const serverFile of serverFiles) {
      if (fs.existsSync(serverFile)) {
        const content = fs.readFileSync(serverFile, 'utf-8');
        if (content.includes('Link:') && content.includes('rel=')) {
          network.score += 15;
          network.strengths.push('✅ HTTP/2 server push hints');
        }
      }
    }
    
    // Check for resource bundling
    const bundleFiles = this.getBundleFiles();
    if (bundleFiles.length > 0 && bundleFiles.length < 10) {
      network.score += 15;
      network.strengths.push('✅ Optimal number of bundle files');
    } else if (bundleFiles.length >= 10) {
      network.issues.push(`❌ Too many bundle files: ${bundleFiles.length} (should be < 10)`);
    }
    
    // Check for image optimization
    const imageOptimization = this.findImageOptimizationReferences();
    if (imageOptimization.length > 0) {
      network.score += 15;
      network.strengths.push('✅ Image optimization reduces network load');
    }
    
    console.log(`Network Optimization Score: ${network.score}/100`);
  }

  // Helper methods
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

  findViteConfig() {
    const possiblePaths = [
      'vite.config.ts',
      'vite.config.js',
      'vite.config.ssr.ts'
    ];
    
    for (const path of possiblePaths) {
      if (fs.existsSync(path)) {
        return path;
      }
    }
    
    return null;
  }

  findAllHtmlFiles() {
    const htmlFiles = [];
    
    const searchDirs = ['dist/public', 'public'];
    
    for (const dir of searchDirs) {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir, { recursive: true });
        files.forEach(file => {
          if (file.endsWith('.html')) {
            htmlFiles.push(path.join(dir, file));
          }
        });
      }
    }
    
    return htmlFiles;
  }

  findImageOptimizationReferences() {
    const imageOptFiles = [];
    
    const searchDirs = ['client/src/components', 'client/src/utils', 'client/src/services'];
    
    for (const dir of searchDirs) {
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
          if (file.toLowerCase().includes('image') && (file.endsWith('.ts') || file.endsWith('.tsx'))) {
            const content = fs.readFileSync(path.join(dir, file), 'utf-8');
            imageOptFiles.push(content);
          }
        });
      }
    }
    
    return imageOptFiles;
  }

  getBundleFiles() {
    const bundleFiles = [];
    
    const distDir = 'dist';
    if (fs.existsSync(distDir)) {
      const walkDir = (dir) => {
        const files = fs.readdirSync(dir, { withFileTypes: true });
        
        files.forEach(file => {
          const fullPath = path.join(dir, file.name);
          
          if (file.isDirectory()) {
            walkDir(fullPath);
          } else if (file.name.endsWith('.js') || file.name.endsWith('.css')) {
            const stats = fs.statSync(fullPath);
            bundleFiles.push({
              path: fullPath,
              name: file.name,
              size: stats.size
            });
          }
        });
      };
      
      walkDir(distDir);
    }
    
    return bundleFiles;
  }

  calculateOverallScore() {
    const scores = [
      this.results.coreWebVitals.score,
      this.results.bundleOptimization.score,
      this.results.resourceOptimization.score,
      this.results.caching.score,
      this.results.networkOptimization.score
    ];
    
    this.results.overallScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  }

  generatePerformanceReport() {
    console.log('\n📊 PERFORMANCE AUDIT SUMMARY');
    console.log('='.repeat(50));
    console.log(`Overall Performance Score: ${this.results.overallScore.toFixed(1)}%`);
    console.log(`├── Core Web Vitals: ${this.results.coreWebVitals.score}/100`);
    console.log(`├── Bundle Optimization: ${this.results.bundleOptimization.score}/100`);
    console.log(`├── Resource Optimization: ${this.results.resourceOptimization.score}/100`);
    console.log(`├── Caching: ${this.results.caching.score}/100`);
    console.log(`└── Network Optimization: ${this.results.networkOptimization.score}/100`);
    
    // Performance Grade
    let grade = 'F';
    if (this.results.overallScore >= 90) grade = 'A+';
    else if (this.results.overallScore >= 80) grade = 'A';
    else if (this.results.overallScore >= 70) grade = 'B';
    else if (this.results.overallScore >= 60) grade = 'C';
    else if (this.results.overallScore >= 50) grade = 'D';
    
    console.log(`\n🎯 Performance Grade: ${grade}`);
    
    // Performance recommendations
    const allIssues = [
      ...this.results.coreWebVitals.issues,
      ...this.results.bundleOptimization.issues,
      ...this.results.resourceOptimization.issues,
      ...this.results.caching.issues,
      ...this.results.networkOptimization.issues
    ];
    
    if (allIssues.length > 0) {
      console.log('\n🚨 Performance Issues:');
      allIssues.forEach(issue => console.log(`   ${issue}`));
    }
    
    return this.results;
  }
}

export { PerformanceAuditor };