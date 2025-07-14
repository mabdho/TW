/**
 * Advanced Performance Optimizer for TravelWanders
 * Implements aggressive optimizations to achieve sub-2.5s FCP
 */

export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private optimizationsApplied: Set<string> = new Set();

  static getInstance(): PerformanceOptimizer {
    if (!this.instance) {
      this.instance = new PerformanceOptimizer();
    }
    return this.instance;
  }

  /**
   * Initialize critical performance optimizations
   */
  public initializeCriticalOptimizations(): void {
    // Optimize DOM immediately
    this.optimizeDOM();
    
    // Critical CSS optimizations
    this.optimizeCriticalCSS();
    
    // JavaScript optimizations
    this.optimizeJavaScript();
    
    // Resource loading optimizations
    this.optimizeResourceLoading();
    
    // Network optimizations
    this.optimizeNetworking();
  }

  /**
   * Optimize DOM for fastest rendering
   */
  private optimizeDOM(): void {
    if (this.optimizationsApplied.has('dom')) return;

    // Prevent layout thrashing
    document.documentElement.style.cssText = `
      visibility: visible !important;
      opacity: 1 !important;
      transform: translateZ(0);
      will-change: auto;
    `;

    // Optimize body for GPU acceleration
    document.body.style.cssText = `
      transform: translateZ(0);
      will-change: auto;
      backface-visibility: hidden;
      perspective: 1000px;
    `;

    // Optimize root container
    const root = document.getElementById('root');
    if (root) {
      root.style.cssText = `
        transform: translateZ(0);
        will-change: auto;
        contain: layout style paint;
      `;
    }

    this.optimizationsApplied.add('dom');
  }

  /**
   * Optimize critical CSS for fastest paint
   */
  private optimizeCriticalCSS(): void {
    if (this.optimizationsApplied.has('css')) return;

    const criticalCSS = `
      /* Critical performance CSS */
      * {
        box-sizing: border-box;
        transition: none !important;
        animation: none !important;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-display: swap;
        text-rendering: optimizeSpeed;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      img {
        max-width: 100%;
        height: auto;
        image-rendering: optimizeQuality;
        transform: translateZ(0);
      }
      
      .container {
        contain: layout style paint;
        transform: translateZ(0);
      }
      
      /* Remove expensive styles */
      .card {
        contain: layout style paint;
        will-change: auto;
      }
      
      /* Disable animations for performance */
      .animate-pulse {
        animation: none !important;
      }
      
      /* Optimize transitions */
      .transition-all {
        transition: none !important;
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = criticalCSS;
    document.head.insertBefore(styleSheet, document.head.firstChild);

    this.optimizationsApplied.add('css');
  }

  /**
   * Optimize JavaScript execution
   */
  private optimizeJavaScript(): void {
    if (this.optimizationsApplied.has('js')) return;

    // Disable React DevTools in production
    if (typeof window !== 'undefined') {
      (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
        isDisabled: true,
        supportsFiber: true,
        inject: () => {},
        onCommitFiberRoot: () => {},
        onCommitFiberUnmount: () => {},
      };
    }

    // Optimize scrolling behavior
    document.documentElement.style.scrollBehavior = 'auto';

    // Disable smooth scrolling during initial load
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    // Re-enable after 3 seconds
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = originalScrollBehavior || 'smooth';
    }, 3000);

    this.optimizationsApplied.add('js');
  }

  /**
   * Optimize resource loading
   */
  private optimizeResourceLoading(): void {
    if (this.optimizationsApplied.has('resources')) return;

    // Preload critical resources
    const criticalResources = [
      '/src/components/Navigation.tsx',
      '/src/components/Hero.tsx',
      '/src/components/FeaturedCities.tsx'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Optimize font loading
    document.fonts.ready.then(() => {
      console.log('✅ Fonts optimized');
    });

    this.optimizationsApplied.add('resources');
  }

  /**
   * Optimize networking
   */
  private optimizeNetworking(): void {
    if (this.optimizationsApplied.has('network')) return;

    // DNS prefetch for critical domains
    const criticalDomains = [
      'https://images.unsplash.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to image CDN
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://images.unsplash.com';
    document.head.appendChild(preconnectLink);

    this.optimizationsApplied.add('network');
  }

  /**
   * Monitor and auto-optimize performance
   */
  public monitorPerformance(): void {
    // Monitor FCP
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          const fcp = entry.startTime;
          console.log(`🎯 FCP: ${Math.round(fcp)}ms`);
          
          if (fcp > 2500) {
            console.warn('⚠️ FCP slow - applying emergency optimizations');
            this.applyEmergencyOptimizations();
          } else {
            console.log('✅ FCP target achieved');
          }
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Monitor LCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log(`📊 LCP: ${Math.round(lastEntry.startTime)}ms`);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor resource loading
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.duration > 100) {
          console.warn(`⚠️ Slow resource: ${entry.name} (${Math.round(entry.duration)}ms)`);
        }
      });
    }).observe({ entryTypes: ['resource'] });
  }

  /**
   * Apply emergency optimizations for slow performance
   */
  private applyEmergencyOptimizations(): void {
    // Disable all animations
    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after {
        animation-duration: 0s !important;
        animation-delay: 0s !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
      }
    `;
    document.head.appendChild(style);

    // Reduce image quality
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src.includes('unsplash.com')) {
        img.src = img.src.replace(/w=\d+/, 'w=800').replace(/q=\d+/, 'q=60');
      }
    });

    // Disable hover effects
    document.body.classList.add('no-hover');

    console.log('🚨 Emergency optimizations applied');
  }

  /**
   * Optimize images for performance
   */
  public optimizeImages(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading attributes
      img.setAttribute('loading', 'lazy');
      img.setAttribute('decoding', 'async');
      
      // Optimize Unsplash URLs
      if (img.src.includes('unsplash.com')) {
        const url = new URL(img.src);
        url.searchParams.set('auto', 'format');
        url.searchParams.set('fit', 'crop');
        url.searchParams.set('q', '75');
        img.src = url.toString();
      }
    });
  }

  /**
   * Get performance metrics
   */
  public getPerformanceMetrics(): Record<string, number> {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    const lcp = paint.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
    
    return {
      fcp: Math.round(fcp),
      lcp: Math.round(lcp),
      domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.fetchStart),
      loadComplete: Math.round(navigation.loadEventEnd - navigation.fetchStart),
      ttfb: Math.round(navigation.responseStart - navigation.fetchStart)
    };
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();