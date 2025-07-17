#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

class PerformanceAuditor {
  constructor() {
    this.results = {
      bundleAnalysis: {
        totalSize: 0,
        gzippedSize: 0,
        chunkSizes: [],
        optimizationStatus: 'pending'
      },
      loadingPerformance: {
        staticAssets: [],
        imageOptimization: [],
        codeOptimization: [],
        caching: []
      },
      coreWebVitals: {
        fcp: 0,
        lcp: 0,
        cls: 0,
        fid: 0,
        ttfb: 0
      },
      optimizations: {
        implemented: [],
        missing: [],
        recommendations: []
      },
      score: 0,
      timestamp: new Date().toISOString()
    };
  }

  async auditPerformance() {
    console.log('⚡ Starting Comprehensive Performance Audit...');
    
    await this.analyzeBundleOptimization();
    await this.auditLoadingPerformance();
    await this.checkImageOptimization();
    await this.analyzeCodeOptimization();
    await this.checkCachingStrategy();
    
    this.calculatePerformanceScore();
    this.generateReport();
    
    return this.results;
  }

  async analyzeBundleOptimization() {
    console.log('📦 Analyzing bundle optimization...');
    
    try {
      // Check if dist directory exists
      if (fs.existsSync('dist')) {
        const distStats = this.getDirectorySize('dist');
        this.results.bundleAnalysis.totalSize = distStats.totalSize;
        this.results.bundleAnalysis.fileCount = distStats.fileCount;
        
        console.log(`   Total dist size: ${this.formatBytes(distStats.totalSize)}`);
        console.log(`   Total files: ${distStats.fileCount}`);
      }
      
      // Check package.json for optimization tools
      if (fs.existsSync('package.json')) {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };
        
        const optimizationTools = {
          'terser': 'JavaScript minification',
          'csso': 'CSS optimization',
          'cssnano': 'CSS minification',
          'vite-plugin-compression': 'Gzip compression',
          'rollup-plugin-terser': 'Rollup minification',
          'vite-plugin-purgecss': 'CSS purging',
          '@rollup/plugin-terser': 'Modern Rollup terser'
        };
        
        for (const [tool, description] of Object.entries(optimizationTools)) {
          if (deps[tool]) {
            this.results.optimizations.implemented.push(`✅ ${tool} - ${description}`);
          } else {
            this.results.optimizations.missing.push(`❌ ${tool} - ${description}`);
          }
        }
        
        // Check for problematic dependencies
        const problematicDeps = {
          'lucide-react': 'Large icon library - should use selective imports or alternatives',
          'lodash': 'Large utility library - consider tree-shaking or alternatives',
          'moment': 'Large date library - consider date-fns or dayjs'
        };
        
        for (const [dep, issue] of Object.entries(problematicDeps)) {
          if (deps[dep]) {
            this.results.optimizations.recommendations.push(`⚠️  ${dep} detected - ${issue}`);
          } else {
            this.results.optimizations.implemented.push(`✅ ${dep} avoided/removed`);
          }
        }
      }
      
    } catch (error) {
      console.error('Error analyzing bundle:', error.message);
    }
  }

  async auditLoadingPerformance() {
    console.log('🚀 Auditing loading performance...');
    
    // Check for lazy loading implementation
    const lazyLoadingFiles = [
      'client/src/components/DynamicCityRoute.tsx',
      'client/src/utils/performance.ts',
      'client/src/hooks/usePerformanceOptimization.ts'
    ];
    
    for (const file of lazyLoadingFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('lazy(') || content.includes('import(')) {
          this.results.loadingPerformance.codeOptimization.push(`✅ ${path.basename(file)} - Dynamic imports`);
        }
        
        if (content.includes('loading="lazy"')) {
          this.results.loadingPerformance.imageOptimization.push(`✅ ${path.basename(file)} - Lazy loading`);
        }
      }
    }
    
    // Check for service worker
    const swPaths = ['dist/public/sw.js', 'public/sw.js', 'client/public/sw.js'];
    for (const swPath of swPaths) {
      if (fs.existsSync(swPath)) {
        this.results.loadingPerformance.caching.push('✅ Service worker implemented');
        break;
      }
    }
    
    // Check for preload/prefetch hints
    if (fs.existsSync('dist/public')) {
      const htmlFiles = this.getFilesRecursively('dist/public', '.html');
      let preloadFound = false;
      let prefetchFound = false;
      
      for (const htmlFile of htmlFiles) {
        const content = fs.readFileSync(htmlFile, 'utf8');
        if (content.includes('rel="preload"')) preloadFound = true;
        if (content.includes('rel="prefetch"')) prefetchFound = true;
      }
      
      if (preloadFound) {
        this.results.loadingPerformance.staticAssets.push('✅ Preload hints found');
      } else {
        this.results.optimizations.recommendations.push('⚠️  Consider adding preload hints for critical resources');
      }
      
      if (prefetchFound) {
        this.results.loadingPerformance.staticAssets.push('✅ Prefetch hints found');
      }
    }
  }

  async checkImageOptimization() {
    console.log('🖼️  Checking image optimization...');
    
    const imageOptimizationFiles = [
      'client/src/components/ImageOptimized.tsx',
      'client/src/services/ImageOptimizationService.ts',
      'client/src/utils/imageOptimization.ts'
    ];
    
    for (const file of imageOptimizationFiles) {
      if (fs.existsSync(file)) {
        this.results.loadingPerformance.imageOptimization.push(`✅ ${path.basename(file)} implemented`);
      } else {
        this.results.optimizations.missing.push(`❌ ${path.basename(file)} missing`);
      }
    }
    
    // Check for modern image formats in dist
    if (fs.existsSync('dist/public')) {
      const imageFiles = this.getFilesRecursively('dist/public', ['.jpg', '.jpeg', '.png', '.webp', '.avif']);
      const webpCount = imageFiles.filter(f => f.endsWith('.webp')).length;
      const avifCount = imageFiles.filter(f => f.endsWith('.avif')).length;
      const totalImages = imageFiles.length;
      
      if (webpCount > 0 || avifCount > 0) {
        this.results.loadingPerformance.imageOptimization.push(`✅ Modern formats: ${webpCount} WebP, ${avifCount} AVIF`);
      }
      
      if (totalImages > 0) {
        const modernRatio = (webpCount + avifCount) / totalImages;
        if (modernRatio < 0.5) {
          this.results.optimizations.recommendations.push('⚠️  Consider converting more images to WebP/AVIF format');
        }
      }
    }
  }

  async analyzeCodeOptimization() {
    console.log('🔧 Analyzing code optimization...');
    
    // Check for minification
    if (fs.existsSync('dist')) {
      const jsFiles = this.getFilesRecursively('dist', '.js');
      const cssFiles = this.getFilesRecursively('dist', '.css');
      
      let minifiedJs = 0;
      let minifiedCss = 0;
      
      for (const jsFile of jsFiles.slice(0, 5)) { // Sample first 5 files
        const content = fs.readFileSync(jsFile, 'utf8');
        if (this.isMinified(content)) minifiedJs++;
      }
      
      for (const cssFile of cssFiles.slice(0, 5)) { // Sample first 5 files
        const content = fs.readFileSync(cssFile, 'utf8');
        if (this.isMinified(content)) minifiedCss++;
      }
      
      if (minifiedJs > 0) {
        this.results.loadingPerformance.codeOptimization.push(`✅ JavaScript minification detected`);
      }
      
      if (minifiedCss > 0) {
        this.results.loadingPerformance.codeOptimization.push(`✅ CSS minification detected`);
      }
    }
    
    // Check for tree shaking indicators
    if (fs.existsSync('vite.config.ts') || fs.existsSync('vite.config.js')) {
      this.results.loadingPerformance.codeOptimization.push('✅ Vite build tool (includes tree shaking)');
    }
    
    // Check for code splitting
    const dynamicImportFiles = [
      'client/src/components/DynamicCityRoute.tsx',
      'client/src/App.tsx'
    ];
    
    for (const file of dynamicImportFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        if (content.includes('import(') || content.includes('lazy(')) {
          this.results.loadingPerformance.codeOptimization.push(`✅ Code splitting in ${path.basename(file)}`);
        }
      }
    }
  }

  async checkCachingStrategy() {
    console.log('💾 Checking caching strategy...');
    
    // Check for cache headers in server configuration
    const serverFiles = [
      'server/index.ts',
      'server/routes.ts',
      '.htaccess',
      'vercel.json',
      'netlify.toml'
    ];
    
    for (const file of serverFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        
        if (content.includes('Cache-Control') || content.includes('max-age')) {
          this.results.loadingPerformance.caching.push(`✅ Cache headers in ${path.basename(file)}`);
        }
        
        if (content.includes('ETag') || content.includes('etag')) {
          this.results.loadingPerformance.caching.push(`✅ ETag support in ${path.basename(file)}`);
        }
      }
    }
    
    // Check for static asset versioning
    if (fs.existsSync('dist')) {
      const staticFiles = this.getFilesRecursively('dist', ['.js', '.css']);
      const versionedFiles = staticFiles.filter(f => 
        /\.[a-f0-9]{8,}\.(js|css)$/i.test(f) || /-[a-f0-9]{8,}\.(js|css)$/i.test(f)
      );
      
      if (versionedFiles.length > 0) {
        this.results.loadingPerformance.caching.push(`✅ Asset versioning detected (${versionedFiles.length} files)`);
      } else {
        this.results.optimizations.recommendations.push('⚠️  Consider implementing asset versioning for better caching');
      }
    }
  }

  isMinified(content) {
    // Simple heuristic: minified files typically have very long lines and minimal whitespace
    const lines = content.split('\n');
    const avgLineLength = content.length / lines.length;
    const whitespaceRatio = (content.match(/\s/g) || []).length / content.length;
    
    return avgLineLength > 100 && whitespaceRatio < 0.2;
  }

  getDirectorySize(dirPath) {
    let totalSize = 0;
    let fileCount = 0;
    
    const files = this.getFilesRecursively(dirPath);
    
    for (const file of files) {
      try {
        const stats = fs.statSync(file);
        totalSize += stats.size;
        fileCount++;
      } catch (error) {
        // Skip files that can't be accessed
      }
    }
    
    return { totalSize, fileCount };
  }

  getFilesRecursively(dir, extensions = null) {
    const files = [];
    
    if (!fs.existsSync(dir)) return files;
    
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.getFilesRecursively(fullPath, extensions));
      } else {
        if (extensions) {
          const exts = Array.isArray(extensions) ? extensions : [extensions];
          if (exts.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        } else {
          files.push(fullPath);
        }
      }
    }
    
    return files;
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  calculatePerformanceScore() {
    const implementedCount = this.results.optimizations.implemented.length;
    const missingCount = this.results.optimizations.missing.length;
    const totalChecks = implementedCount + missingCount;
    
    this.results.score = totalChecks > 0 ? Math.round((implementedCount / totalChecks) * 100) : 0;
    
    // Adjust score based on recommendations
    const recommendationPenalty = Math.min(this.results.optimizations.recommendations.length * 5, 20);
    this.results.score = Math.max(0, this.results.score - recommendationPenalty);
  }

  generateReport() {
    console.log('\n' + '='.repeat(80));
    console.log('⚡ COMPREHENSIVE PERFORMANCE AUDIT REPORT');
    console.log('='.repeat(80));
    
    console.log(`\n📊 Performance Score: ${this.results.score}/100`);
    
    if (this.results.score >= 90) {
      console.log('🎉 EXCELLENT: Outstanding performance optimization!');
    } else if (this.results.score >= 80) {
      console.log('✅ GOOD: Strong performance with minor improvements possible.');
    } else if (this.results.score >= 70) {
      console.log('⚠️  FAIR: Good foundation but needs optimization work.');
    } else {
      console.log('❌ POOR: Significant performance improvements needed.');
    }
    
    if (this.results.bundleAnalysis.totalSize > 0) {
      console.log(`\n📦 BUNDLE ANALYSIS:`);
      console.log(`├─ Total build size: ${this.formatBytes(this.results.bundleAnalysis.totalSize)}`);
      console.log(`└─ Total files: ${this.results.bundleAnalysis.fileCount}`);
    }
    
    console.log(`\n✅ IMPLEMENTED OPTIMIZATIONS (${this.results.optimizations.implemented.length}):`);
    for (const optimization of this.results.optimizations.implemented.slice(0, 10)) {
      console.log(`   ${optimization}`);
    }
    if (this.results.optimizations.implemented.length > 10) {
      console.log(`   ... and ${this.results.optimizations.implemented.length - 10} more`);
    }
    
    if (this.results.optimizations.missing.length > 0) {
      console.log(`\n❌ MISSING OPTIMIZATIONS (${this.results.optimizations.missing.length}):`);
      for (const missing of this.results.optimizations.missing.slice(0, 8)) {
        console.log(`   ${missing}`);
      }
      if (this.results.optimizations.missing.length > 8) {
        console.log(`   ... and ${this.results.optimizations.missing.length - 8} more`);
      }
    }
    
    if (this.results.optimizations.recommendations.length > 0) {
      console.log(`\n💡 RECOMMENDATIONS (${this.results.optimizations.recommendations.length}):`);
      for (const recommendation of this.results.optimizations.recommendations.slice(0, 8)) {
        console.log(`   ${recommendation}`);
      }
      if (this.results.optimizations.recommendations.length > 8) {
        console.log(`   ... and ${this.results.optimizations.recommendations.length - 8} more`);
      }
    }
    
    console.log(`\n🔍 PERFORMANCE CATEGORIES:`);
    console.log(`├─ Code Optimization: ${this.results.loadingPerformance.codeOptimization.length} items`);
    console.log(`├─ Image Optimization: ${this.results.loadingPerformance.imageOptimization.length} items`);
    console.log(`├─ Caching Strategy: ${this.results.loadingPerformance.caching.length} items`);
    console.log(`└─ Static Assets: ${this.results.loadingPerformance.staticAssets.length} items`);
    
    console.log('\n' + '='.repeat(80));
    
    // Save detailed results
    fs.writeFileSync('performance-audit-results.json', JSON.stringify(this.results, null, 2));
    console.log('📄 Detailed results saved to: performance-audit-results.json');
    
    return this.results;
  }
}

// Run the audit if this file is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  (async () => {
    const auditor = new PerformanceAuditor();
    await auditor.auditPerformance();
  })().catch(console.error);
}

export { PerformanceAuditor };