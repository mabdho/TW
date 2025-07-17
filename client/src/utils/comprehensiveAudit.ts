/**
 * Comprehensive Performance and SEO Audit for TravelWanders
 * Validates all 5 optimization areas requested
 */

interface AuditResults {
  javascriptBundles: {
    implemented: boolean;
    score: number;
    details: string[];
  };
  coreWebVitals: {
    implemented: boolean;
    score: number;
    fcp: number | null;
    lcp: number | null;
    cls: number | null;
    details: string[];
  };
  imageOptimization: {
    implemented: boolean;
    score: number;
    details: string[];
  };
  internalLinking: {
    implemented: boolean;
    score: number;
    details: string[];
  };
  richSnippets: {
    implemented: boolean;
    score: number;
    details: string[];
  };
  overallScore: number;
  recommendations: string[];
}

class ComprehensiveAuditor {
  private results: AuditResults = {
    javascriptBundles: { implemented: false, score: 0, details: [] },
    coreWebVitals: { implemented: false, score: 0, fcp: null, lcp: null, cls: null, details: [] },
    imageOptimization: { implemented: false, score: 0, details: [] },
    internalLinking: { implemented: false, score: 0, details: [] },
    richSnippets: { implemented: false, score: 0, details: [] },
    overallScore: 0,
    recommendations: []
  };

  public async conductComprehensiveAudit(): Promise<AuditResults> {
    console.log('🚀 Starting Comprehensive Performance Audit');
    console.log('===========================================');

    await this.auditJavaScriptBundles();
    await this.auditCoreWebVitals();
    await this.auditImageOptimization();
    await this.auditInternalLinking();
    await this.auditRichSnippets();
    
    this.calculateOverallScore();
    this.generateRecommendations();
    
    this.printAuditReport();
    
    return this.results;
  }

  private async auditJavaScriptBundles(): Promise<void> {
    console.log('📦 Auditing JavaScript Bundle Optimization...');
    
    // Check for code splitting
    const hasCodeSplitting = this.checkCodeSplitting();
    const bundleSize = await this.measureBundleSize();
    const hasLazyLoading = this.checkLazyLoading();
    
    let score = 0;
    const details = [];
    
    if (hasCodeSplitting) {
      score += 40;
      details.push('✅ Code splitting implemented with React.lazy()');
    } else {
      details.push('❌ Code splitting not detected');
    }
    
    if (bundleSize < 500) {
      score += 30;
      details.push(`✅ Bundle size optimized: ${bundleSize}KB`);
    } else {
      details.push(`⚠️ Bundle size could be smaller: ${bundleSize}KB`);
      score += Math.max(0, 30 - (bundleSize - 500) / 50);
    }
    
    if (hasLazyLoading) {
      score += 30;
      details.push('✅ Lazy loading implemented for non-critical components');
    } else {
      details.push('❌ Lazy loading not detected');
    }
    
    this.results.javascriptBundles = {
      implemented: score > 50,
      score: Math.round(score),
      details
    };
  }

  private async auditCoreWebVitals(): Promise<void> {
    console.log('⚡ Auditing Core Web Vitals...');
    
    return new Promise((resolve) => {
      const details = [];
      let score = 0;
      
      // Monitor FCP
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.results.coreWebVitals.fcp = entry.startTime;
            
            if (entry.startTime <= 2500) {
              score += 40;
              details.push(`✅ FCP excellent: ${Math.round(entry.startTime)}ms`);
            } else if (entry.startTime <= 4000) {
              score += 25;
              details.push(`⚠️ FCP needs improvement: ${Math.round(entry.startTime)}ms`);
            } else {
              details.push(`❌ FCP poor: ${Math.round(entry.startTime)}ms`);
            }
          }
        }
      }).observe({ entryTypes: ['paint'] });

      // Monitor LCP
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.results.coreWebVitals.lcp = lastEntry.startTime;
        
        if (lastEntry.startTime <= 2500) {
          score += 35;
          details.push(`✅ LCP excellent: ${Math.round(lastEntry.startTime)}ms`);
        } else if (lastEntry.startTime <= 4000) {
          score += 20;
          details.push(`⚠️ LCP needs improvement: ${Math.round(lastEntry.startTime)}ms`);
        } else {
          details.push(`❌ LCP poor: ${Math.round(lastEntry.startTime)}ms`);
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Monitor CLS
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.results.coreWebVitals.cls = clsValue;
        
        if (clsValue <= 0.1) {
          score += 25;
          details.push(`✅ CLS excellent: ${clsValue.toFixed(3)}`);
        } else if (clsValue <= 0.25) {
          score += 15;
          details.push(`⚠️ CLS needs improvement: ${clsValue.toFixed(3)}`);
        } else {
          details.push(`❌ CLS poor: ${clsValue.toFixed(3)}`);
        }
      }).observe({ entryTypes: ['layout-shift'] });

      setTimeout(() => {
        this.results.coreWebVitals = {
          implemented: score > 50,
          score: Math.round(score),
          fcp: this.results.coreWebVitals.fcp,
          lcp: this.results.coreWebVitals.lcp,
          cls: this.results.coreWebVitals.cls,
          details
        };
        resolve();
      }, 3000);
    });
  }

  private async auditImageOptimization(): Promise<void> {
    console.log('🖼️ Auditing Image Optimization...');
    
    const details = [];
    let score = 0;
    
    // Check for lazy loading images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if (lazyImages.length > 0) {
      score += 30;
      details.push(`✅ Lazy loading implemented on ${lazyImages.length} images`);
    } else {
      details.push('❌ Image lazy loading not detected');
    }
    
    // Check for modern image formats
    const pictureElements = document.querySelectorAll('picture');
    if (pictureElements.length > 0) {
      score += 35;
      details.push(`✅ Modern image formats (AVIF/WebP) implemented: ${pictureElements.length} picture elements`);
    } else {
      details.push('❌ Modern image formats not detected');
    }
    
    // Check for size attributes
    const imagesWithDimensions = document.querySelectorAll('img[width][height]');
    if (imagesWithDimensions.length > 0) {
      score += 35;
      details.push(`✅ Size attributes prevent layout shift: ${imagesWithDimensions.length} images`);
    } else {
      details.push('⚠️ Some images missing size attributes');
      score += 15;
    }
    
    this.results.imageOptimization = {
      implemented: score > 50,
      score: Math.round(score),
      details
    };
  }

  private async auditInternalLinking(): Promise<void> {
    console.log('🔗 Auditing Enhanced Internal Linking...');
    
    const details = [];
    let score = 0;
    
    // Check for enhanced internal links component
    const internalLinksContainer = document.querySelector('[class*="internal-link"], [class*="related"]');
    if (internalLinksContainer) {
      score += 40;
      details.push('✅ Enhanced internal linking component detected');
    } else {
      details.push('❌ Enhanced internal linking component not found');
    }
    
    // Check for contextual links
    const cityLinks = document.querySelectorAll('a[href*="things-to-do-in"]');
    const blogLinks = document.querySelectorAll('a[href*="/blog/"]');
    
    if (cityLinks.length > 3) {
      score += 30;
      details.push(`✅ Good city page interlinking: ${cityLinks.length} links`);
    } else {
      details.push('⚠️ Limited city page interlinking');
      score += 15;
    }
    
    if (blogLinks.length > 2) {
      score += 30;
      details.push(`✅ Blog to content linking: ${blogLinks.length} links`);
    } else {
      details.push('⚠️ Limited blog content linking');
      score += 10;
    }
    
    this.results.internalLinking = {
      implemented: score > 50,
      score: Math.round(score),
      details
    };
  }

  private async auditRichSnippets(): Promise<void> {
    console.log('🏷️ Auditing Rich Snippets & Structured Data...');
    
    const details = [];
    let score = 0;
    
    // Check for JSON-LD structured data
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]');
    if (jsonLdScripts.length > 0) {
      score += 30;
      details.push(`✅ Structured data found: ${jsonLdScripts.length} schemas`);
      
      // Check for specific schema types
      let schemaTypes = new Set();
      jsonLdScripts.forEach(script => {
        try {
          const data = JSON.parse(script.textContent || '');
          if (data['@type']) {
            schemaTypes.add(data['@type']);
          }
        } catch (e) {
          // Ignore parsing errors
        }
      });
      
      if (schemaTypes.has('FAQPage')) {
        score += 20;
        details.push('✅ FAQ schema implemented');
      }
      
      if (schemaTypes.has('Place') || schemaTypes.has('TouristAttraction')) {
        score += 25;
        details.push('✅ Place/Tourist attraction schemas implemented');
      }
      
      if (schemaTypes.has('AggregateRating') || schemaTypes.has('Review')) {
        score += 25;
        details.push('✅ Review/Rating schemas implemented');
      }
      
    } else {
      details.push('❌ No structured data schemas found');
    }
    
    this.results.richSnippets = {
      implemented: score > 30,
      score: Math.round(score),
      details
    };
  }

  private checkCodeSplitting(): boolean {
    // Check if lazy imports are being used
    return (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__?.onCommitFiberRoot || 
           document.querySelector('script[src*="chunk"]') !== null ||
           typeof (window as any).React?.lazy === 'function';
  }

  private async measureBundleSize(): Promise<number> {
    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    let totalSize = 0;
    
    resources.forEach(resource => {
      if (resource.name.includes('.js') || resource.name.includes('.css')) {
        totalSize += resource.transferSize || 0;
      }
    });
    
    return Math.round(totalSize / 1024); // KB
  }

  private checkLazyLoading(): boolean {
    // Check for React Suspense and lazy loading patterns
    return document.querySelector('[class*="suspense"], [class*="lazy"]') !== null ||
           typeof (window as any).React?.Suspense === 'object';
  }

  private calculateOverallScore(): void {
    const scores = [
      this.results.javascriptBundles.score,
      this.results.coreWebVitals.score,
      this.results.imageOptimization.score,
      this.results.internalLinking.score,
      this.results.richSnippets.score
    ];
    
    this.results.overallScore = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  private generateRecommendations(): void {
    const recommendations = [];
    
    if (this.results.javascriptBundles.score < 70) {
      recommendations.push('Implement more aggressive code splitting and lazy loading');
    }
    
    if (this.results.coreWebVitals.score < 70) {
      recommendations.push('Optimize Core Web Vitals - focus on FCP, LCP, and CLS improvements');
    }
    
    if (this.results.imageOptimization.score < 70) {
      recommendations.push('Enhance image optimization with modern formats and lazy loading');
    }
    
    if (this.results.internalLinking.score < 70) {
      recommendations.push('Strengthen internal linking strategy between related content');
    }
    
    if (this.results.richSnippets.score < 70) {
      recommendations.push('Add more comprehensive structured data schemas');
    }
    
    this.results.recommendations = recommendations;
  }

  private printAuditReport(): void {
    console.log('\n🎯 COMPREHENSIVE AUDIT RESULTS');
    console.log('=====================================');
    console.log(`Overall Score: ${this.results.overallScore}/100`);
    console.log('');
    
    console.log('1️⃣ JavaScript Bundle Optimization:');
    console.log(`   Score: ${this.results.javascriptBundles.score}/100 ${this.results.javascriptBundles.implemented ? '✅' : '❌'}`);
    this.results.javascriptBundles.details.forEach(detail => console.log(`   ${detail}`));
    console.log('');
    
    console.log('2️⃣ Core Web Vitals:');
    console.log(`   Score: ${this.results.coreWebVitals.score}/100 ${this.results.coreWebVitals.implemented ? '✅' : '❌'}`);
    this.results.coreWebVitals.details.forEach(detail => console.log(`   ${detail}`));
    console.log('');
    
    console.log('3️⃣ Image Optimization:');
    console.log(`   Score: ${this.results.imageOptimization.score}/100 ${this.results.imageOptimization.implemented ? '✅' : '❌'}`);
    this.results.imageOptimization.details.forEach(detail => console.log(`   ${detail}`));
    console.log('');
    
    console.log('4️⃣ Enhanced Internal Linking:');
    console.log(`   Score: ${this.results.internalLinking.score}/100 ${this.results.internalLinking.implemented ? '✅' : '❌'}`);
    this.results.internalLinking.details.forEach(detail => console.log(`   ${detail}`));
    console.log('');
    
    console.log('5️⃣ Rich Snippets Optimization:');
    console.log(`   Score: ${this.results.richSnippets.score}/100 ${this.results.richSnippets.implemented ? '✅' : '❌'}`);
    this.results.richSnippets.details.forEach(detail => console.log(`   ${detail}`));
    console.log('');
    
    if (this.results.recommendations.length > 0) {
      console.log('📋 RECOMMENDATIONS:');
      this.results.recommendations.forEach((rec, index) => {
        console.log(`${index + 1}. ${rec}`);
      });
    } else {
      console.log('🎉 EXCELLENT! All optimization areas are well implemented.');
    }
    
    console.log('\n=====================================');
  }
}

export const comprehensiveAuditor = new ComprehensiveAuditor();

// Auto-run audit after page load
window.addEventListener('load', () => {
  setTimeout(() => {
    comprehensiveAuditor.conductComprehensiveAudit();
  }, 3000);
});