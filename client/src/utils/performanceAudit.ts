/**
 * Comprehensive Performance Audit System for TravelWanders
 * Measures all Core Web Vitals and provides detailed performance analysis
 */

interface PerformanceResults {
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  fid: number | null;
  ttfb: number | null;
  bundleSize: {
    total: number;
    javascript: number;
    css: number;
  };
  scores: {
    fcp: number;
    lcp: number;
    cls: number;
    overall: number;
  };
  recommendations: string[];
  timestamp: string;
}

class PerformanceAuditor {
  private results: PerformanceResults = {
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
    bundleSize: { total: 0, javascript: 0, css: 0 },
    scores: { fcp: 0, lcp: 0, cls: 0, overall: 0 },
    recommendations: [],
    timestamp: new Date().toISOString()
  };

  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
    this.measureBundleSize();
  }

  private initializeObservers() {
    // First Contentful Paint
    this.createObserver(['paint'], (entries) => {
      for (const entry of entries) {
        if (entry.name === 'first-contentful-paint') {
          this.results.fcp = entry.startTime;
          console.log(`🎯 FCP: ${Math.round(entry.startTime)}ms`);
        }
      }
    });

    // Largest Contentful Paint
    this.createObserver(['largest-contentful-paint'], (entries) => {
      const lastEntry = entries[entries.length - 1];
      this.results.lcp = lastEntry.startTime;
      console.log(`🎯 LCP: ${Math.round(lastEntry.startTime)}ms`);
    });

    // Cumulative Layout Shift
    let clsValue = 0;
    this.createObserver(['layout-shift'], (entries) => {
      for (const entry of entries) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      this.results.cls = clsValue;
      console.log(`🎯 CLS: ${clsValue.toFixed(3)}`);
    });

    // First Input Delay
    this.createObserver(['first-input'], (entries) => {
      const firstInput = entries[0];
      this.results.fid = (firstInput as any).processingStart - firstInput.startTime;
      console.log(`🎯 FID: ${Math.round(this.results.fid)}ms`);
    });

    // Navigation timing for TTFB
    this.measureNavigationTiming();
  }

  private createObserver(entryTypes: string[], callback: (entries: PerformanceEntry[]) => void) {
    try {
      const observer = new PerformanceObserver((list) => {
        callback(list.getEntries());
      });
      observer.observe({ entryTypes });
      this.observers.push(observer);
    } catch (e) {
      console.warn('Performance observer not supported:', entryTypes);
    }
  }

  private measureNavigationTiming() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.results.ttfb = navigation.responseStart - navigation.requestStart;
        console.log(`🎯 TTFB: ${Math.round(this.results.ttfb)}ms`);
      }
    });
  }

  private measureBundleSize() {
    // Estimate bundle size from loaded resources
    window.addEventListener('load', () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      let jsSize = 0;
      let cssSize = 0;

      resources.forEach(resource => {
        if (resource.name.includes('.js')) {
          jsSize += resource.transferSize || 0;
        } else if (resource.name.includes('.css')) {
          cssSize += resource.transferSize || 0;
        }
      });

      this.results.bundleSize = {
        javascript: jsSize,
        css: cssSize,
        total: jsSize + cssSize
      };

      console.log(`🎯 Bundle Size: ${Math.round(this.results.bundleSize.total / 1024)}KB`);
    });
  }

  public calculateScores(): void {
    // FCP Score (0-100)
    if (this.results.fcp !== null) {
      if (this.results.fcp <= 1800) {
        this.results.scores.fcp = 100;
      } else if (this.results.fcp <= 3000) {
        this.results.scores.fcp = 90 - ((this.results.fcp - 1800) / 1200) * 40;
      } else {
        this.results.scores.fcp = Math.max(0, 50 - ((this.results.fcp - 3000) / 1000) * 10);
      }
    }

    // LCP Score (0-100)
    if (this.results.lcp !== null) {
      if (this.results.lcp <= 2500) {
        this.results.scores.lcp = 100;
      } else if (this.results.lcp <= 4000) {
        this.results.scores.lcp = 90 - ((this.results.lcp - 2500) / 1500) * 40;
      } else {
        this.results.scores.lcp = Math.max(0, 50 - ((this.results.lcp - 4000) / 1000) * 10);
      }
    }

    // CLS Score (0-100)
    if (this.results.cls !== null) {
      if (this.results.cls <= 0.1) {
        this.results.scores.cls = 100;
      } else if (this.results.cls <= 0.25) {
        this.results.scores.cls = 90 - ((this.results.cls - 0.1) / 0.15) * 40;
      } else {
        this.results.scores.cls = Math.max(0, 50 - ((this.results.cls - 0.25) / 0.1) * 10);
      }
    }

    // Overall Score
    const scores = [this.results.scores.fcp, this.results.scores.lcp, this.results.scores.cls];
    this.results.scores.overall = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  }

  public generateRecommendations(): void {
    this.results.recommendations = [];

    // FCP Recommendations
    if (this.results.fcp && this.results.fcp > 2500) {
      this.results.recommendations.push('Optimize First Contentful Paint: Reduce critical resource loading time');
    }

    // LCP Recommendations
    if (this.results.lcp && this.results.lcp > 2500) {
      this.results.recommendations.push('Optimize Largest Contentful Paint: Optimize hero images and critical content');
    }

    // CLS Recommendations
    if (this.results.cls && this.results.cls > 0.1) {
      this.results.recommendations.push('Reduce Cumulative Layout Shift: Add size attributes to images and containers');
    }

    // Bundle size recommendations
    if (this.results.bundleSize.total > 500 * 1024) {
      this.results.recommendations.push('Reduce bundle size: Implement more aggressive code splitting');
    }

    // JavaScript-heavy bundle
    if (this.results.bundleSize.javascript > this.results.bundleSize.total * 0.8) {
      this.results.recommendations.push('Optimize JavaScript: Consider lazy loading non-critical components');
    }

    // TTFB recommendations
    if (this.results.ttfb && this.results.ttfb > 600) {
      this.results.recommendations.push('Improve server response time: Optimize backend performance');
    }
  }

  public async conductFullAudit(): Promise<PerformanceResults> {
    return new Promise((resolve) => {
      // Wait for all metrics to be collected
      setTimeout(() => {
        this.calculateScores();
        this.generateRecommendations();
        
        console.log('\n🚀 TravelWanders Performance Audit Results');
        console.log('==========================================');
        console.log(`Overall Score: ${Math.round(this.results.scores.overall)}/100`);
        console.log(`FCP: ${this.results.fcp ? Math.round(this.results.fcp) + 'ms' : 'N/A'} (Score: ${Math.round(this.results.scores.fcp)})`);
        console.log(`LCP: ${this.results.lcp ? Math.round(this.results.lcp) + 'ms' : 'N/A'} (Score: ${Math.round(this.results.scores.lcp)})`);
        console.log(`CLS: ${this.results.cls ? this.results.cls.toFixed(3) : 'N/A'} (Score: ${Math.round(this.results.scores.cls)})`);
        console.log(`FID: ${this.results.fid ? Math.round(this.results.fid) + 'ms' : 'N/A'}`);
        console.log(`TTFB: ${this.results.ttfb ? Math.round(this.results.ttfb) + 'ms' : 'N/A'}`);
        console.log(`Bundle Size: ${Math.round(this.results.bundleSize.total / 1024)}KB`);
        
        if (this.results.recommendations.length > 0) {
          console.log('\n📋 Recommendations:');
          this.results.recommendations.forEach((rec, index) => {
            console.log(`${index + 1}. ${rec}`);
          });
        } else {
          console.log('\n✅ No recommendations - Performance is optimal!');
        }
        
        resolve(this.results);
      }, 5000); // Wait 5 seconds for all metrics
    });
  }

  public getResults(): PerformanceResults {
    return { ...this.results };
  }

  public disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Global instance
export const performanceAuditor = new PerformanceAuditor();

// Auto-start audit after page load
window.addEventListener('load', () => {
  setTimeout(() => {
    performanceAuditor.conductFullAudit();
  }, 2000);
});

// Export for debugging
if (typeof window !== 'undefined') {
  (window as any).__PERFORMANCE_AUDITOR__ = performanceAuditor;
}