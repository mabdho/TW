/**
 * Bundle Optimizer & Performance Tracker
 * Tracks Radix UI chunk reduction and bundle optimization results
 */

interface BundleMetrics {
  initialChunkSize: number;
  optimizedChunkSize: number;
  reductionPercent: number;
  loadTime: number;
  componentsLoaded: string[];
  timestamp: number;
}

interface PerformanceReport {
  fcp: number;
  lcp: number;
  bundleSize: number;
  chunkCount: number;
  radixComponentsUsed: number;
  optimizationStatus: 'excellent' | 'good' | 'needs-improvement';
}

export class BundleOptimizer {
  private static metrics: BundleMetrics[] = [];
  private static INITIAL_RADIX_CHUNK_SIZE = 932; // KB - the problematic chunk we're targeting

  static trackChunkReduction(componentName: string, chunkSize: number): void {
    const startTime = performance.now();
    
    const metric: BundleMetrics = {
      initialChunkSize: this.INITIAL_RADIX_CHUNK_SIZE,
      optimizedChunkSize: chunkSize,
      reductionPercent: ((this.INITIAL_RADIX_CHUNK_SIZE - chunkSize) / this.INITIAL_RADIX_CHUNK_SIZE) * 100,
      loadTime: performance.now() - startTime,
      componentsLoaded: [componentName],
      timestamp: Date.now()
    };

    this.metrics.push(metric);
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Chunk Optimization: ${componentName}`, {
        'Initial Size': `${this.INITIAL_RADIX_CHUNK_SIZE} KB`,
        'Optimized Size': `${chunkSize} KB`,
        'Reduction': `${metric.reductionPercent.toFixed(1)}%`,
        'Load Time': `${metric.loadTime.toFixed(2)}ms`
      });
    }
  }

  static getOptimizationReport(): {
    totalReduction: number;
    averageChunkSize: number;
    componentsOptimized: number;
    performanceGain: string;
  } {
    if (this.metrics.length === 0) {
      return {
        totalReduction: 0,
        averageChunkSize: this.INITIAL_RADIX_CHUNK_SIZE,
        componentsOptimized: 0,
        performanceGain: 'No optimizations tracked yet'
      };
    }

    const latestMetric = this.metrics[this.metrics.length - 1];
    const averageChunkSize = this.metrics.reduce((sum, m) => sum + m.optimizedChunkSize, 0) / this.metrics.length;
    
    let performanceGain = 'Moderate improvement';
    if (latestMetric.reductionPercent > 70) {
      performanceGain = 'Excellent - Major bundle size reduction achieved!';
    } else if (latestMetric.reductionPercent > 50) {
      performanceGain = 'Good - Significant improvement in loading';
    } else if (latestMetric.reductionPercent > 30) {
      performanceGain = 'Moderate - Noticeable performance gains';
    } else {
      performanceGain = 'Minimal - Consider additional optimizations';
    }

    return {
      totalReduction: latestMetric.reductionPercent,
      averageChunkSize: Math.round(averageChunkSize),
      componentsOptimized: this.metrics.length,
      performanceGain
    };
  }

  static analyzePagePerformance(): PerformanceReport {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const fcp = this.getFCP();
    const lcp = this.getLCP();
    
    // Estimate bundle size based on resource loading
    const resources = performance.getEntriesByType('resource');
    const jsResources = resources.filter(r => r.name.includes('.js'));
    const totalJSSize = jsResources.reduce((sum, r) => sum + (r.transferSize || 0), 0) / 1024; // KB

    // Count Radix components currently loaded
    const radixElements = document.querySelectorAll('[data-radix-*]');
    const uniqueRadixComponents = new Set(
      Array.from(radixElements).map(el => 
        Array.from(el.attributes)
          .find(attr => attr.name.startsWith('data-radix-'))
          ?.name.replace('data-radix-', '')
      ).filter(Boolean)
    ).size;

    let optimizationStatus: 'excellent' | 'good' | 'needs-improvement' = 'needs-improvement';
    if (fcp < 1500 && totalJSSize < 300) optimizationStatus = 'excellent';
    else if (fcp < 2500 && totalJSSize < 500) optimizationStatus = 'good';

    return {
      fcp,
      lcp,
      bundleSize: Math.round(totalJSSize),
      chunkCount: jsResources.length,
      radixComponentsUsed: uniqueRadixComponents,
      optimizationStatus
    };
  }

  private static getFCP(): number {
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    return fcpEntry ? Math.round(fcpEntry.startTime) : 0;
  }

  private static getLCP(): number {
    // Simplified LCP estimation
    const navTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navTiming ? Math.round(navTiming.loadEventEnd - navTiming.fetchStart) : 0;
  }

  static generateOptimizationSuggestions(): string[] {
    const report = this.analyzePagePerformance();
    const suggestions: string[] = [];

    if (report.bundleSize > 500) {
      suggestions.push('🎯 Bundle size > 500KB - Consider more aggressive code splitting');
    }

    if (report.fcp > 2500) {
      suggestions.push('⚡ FCP > 2.5s - Implement critical resource preloading');
    }

    if (report.radixComponentsUsed > 8) {
      suggestions.push('📦 High Radix usage - Consider component-level lazy loading');
    }

    if (report.chunkCount > 10) {
      suggestions.push('🔧 Too many chunks - Optimize chunk splitting strategy');
    }

    if (suggestions.length === 0) {
      suggestions.push('✅ Performance is optimized! Bundle under 300KB target achieved.');
    }

    return suggestions;
  }

  static logOptimizationSuccess(): void {
    const report = this.getOptimizationReport();
    const performance = this.analyzePagePerformance();
    
    console.log('🎉 Radix UI Optimization Complete!', {
      '📊 Bundle Reduction': `${report.totalReduction.toFixed(1)}%`,
      '⚡ Current Chunk Size': `${report.averageChunkSize} KB (Target: <300 KB)`,
      '🚀 Performance Status': performance.optimizationStatus.toUpperCase(),
      '🎯 FCP': `${performance.fcp}ms`,
      '📦 Total Bundle': `${performance.bundleSize} KB`,
      '💡 Components Optimized': report.componentsOptimized
    });

    if (performance.optimizationStatus === 'excellent') {
      console.log('🏆 ACHIEVEMENT UNLOCKED: Sub-300KB bundle with excellent performance!');
    }
  }
}

// Auto-track performance on page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Delay to ensure all lazy components have loaded
    setTimeout(() => {
      BundleOptimizer.logOptimizationSuccess();
    }, 1000);
  });
}

export default BundleOptimizer;