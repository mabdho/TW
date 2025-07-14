/**
 * Performance monitoring utilities for TravelWanders
 * Tracks Core Web Vitals and application performance metrics
 */

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  cls?: number;
  fid?: number;
  ttfb?: number;
  bundleSize?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    // First Contentful Paint (FCP)
    this.createObserver(['paint'], (entries) => {
      for (const entry of entries) {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
          this.logMetric('FCP', entry.startTime);
        }
      }
    });

    // Largest Contentful Paint (LCP)
    this.createObserver(['largest-contentful-paint'], (entries) => {
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      this.logMetric('LCP', lastEntry.startTime);
    });

    // Cumulative Layout Shift (CLS)
    this.createObserver(['layout-shift'], (entries) => {
      let clsValue = 0;
      for (const entry of entries) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      this.metrics.cls = clsValue;
      this.logMetric('CLS', clsValue);
    });

    // First Input Delay (FID)
    this.createObserver(['first-input'], (entries) => {
      const firstInput = entries[0];
      this.metrics.fid = (firstInput as any).processingStart - firstInput.startTime;
      this.logMetric('FID', this.metrics.fid);
    });

    // Navigation timing
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
        this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
        this.logMetric('TTFB', this.metrics.ttfb);
      }
    });
  }

  private logMetric(name: string, value: number) {
    const threshold = this.getThreshold(name);
    const status = value <= threshold ? '✅' : '❌';
    console.log(`${status} ${name}: ${Math.round(value)}ms (threshold: ${threshold}ms)`);
  }

  private getThreshold(metric: string): number {
    const thresholds = {
      FCP: 2500,   // 2.5 seconds
      LCP: 2500,   // 2.5 seconds
      FID: 100,    // 100ms
      CLS: 0.1,    // 0.1 score
      TTFB: 600    // 600ms
    };
    return thresholds[metric as keyof typeof thresholds] || 1000;
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public generateReport(): string {
    const report = [
      '🚀 Performance Report - TravelWanders',
      '=====================================',
      ''
    ];

    if (this.metrics.fcp) {
      const fcpStatus = this.metrics.fcp <= 2500 ? '✅' : '❌';
      report.push(`${fcpStatus} First Contentful Paint: ${Math.round(this.metrics.fcp)}ms`);
    }

    if (this.metrics.lcp) {
      const lcpStatus = this.metrics.lcp <= 2500 ? '✅' : '❌';
      report.push(`${lcpStatus} Largest Contentful Paint: ${Math.round(this.metrics.lcp)}ms`);
    }

    if (this.metrics.fid !== undefined) {
      const fidStatus = this.metrics.fid <= 100 ? '✅' : '❌';
      report.push(`${fidStatus} First Input Delay: ${Math.round(this.metrics.fid)}ms`);
    }

    if (this.metrics.cls !== undefined) {
      const clsStatus = this.metrics.cls <= 0.1 ? '✅' : '❌';
      report.push(`${clsStatus} Cumulative Layout Shift: ${this.metrics.cls.toFixed(3)}`);
    }

    if (this.metrics.ttfb) {
      const ttfbStatus = this.metrics.ttfb <= 600 ? '✅' : '❌';
      report.push(`${ttfbStatus} Time to First Byte: ${Math.round(this.metrics.ttfb)}ms`);
    }

    return report.join('\n');
  }

  public disconnect() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Global performance monitor instance
export const perfMonitor = new PerformanceMonitor();

// Utility functions for performance optimization
export const performanceUtils = {
  // Preload critical images
  preloadImage: (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  },

  // Preload critical CSS
  preloadCSS: (href: string): void => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = href;
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  },

  // Defer non-critical resources
  deferResource: (callback: () => void, delay: number = 1000): Promise<any> => {
    return new Promise((resolve) => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          resolve(callback());
        }, { timeout: delay });
      } else {
        setTimeout(() => {
          resolve(callback());
        }, delay);
      }
    });
  },

  // Measure component render time
  measureRender: (componentName: string, renderFn: () => void): void => {
    const start = performance.now();
    renderFn();
    const end = performance.now();
    console.log(`${componentName} render time: ${Math.round(end - start)}ms`);
  }
};

// Export performance monitoring for debugging
if (typeof window !== 'undefined') {
  (window as any).__PERF_MONITOR__ = perfMonitor;
}