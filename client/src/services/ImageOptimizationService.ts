/**
 * Enterprise-Level Image Optimization Service
 * Comprehensive image optimization with CDN integration, smart resizing, and performance monitoring
 */

import { OptimizedImage, GalleryImage } from '../utils/imageOptimization';

interface ImageOptimizationConfig {
  quality: {
    avif: number;
    webp: number;
    jpeg: number;
  };
  formats: ('avif' | 'webp' | 'jpeg')[];
  breakpoints: number[];
  lazyLoadOffset: number;
  placeholderColor: string;
  compressionLevel: 'low' | 'medium' | 'high' | 'ultra';
  enableAnalytics: boolean;
}

interface ImageAnalytics {
  url: string;
  format: string;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  loadTime: number;
  renderTime: number;
  devicePixelRatio: number;
}

class ImageOptimizationService {
  private static instance: ImageOptimizationService;
  private config: ImageOptimizationConfig;
  private analytics: ImageAnalytics[] = [];
  private cache: Map<string, OptimizedImage> = new Map();
  private loadingQueue: Set<string> = new Set();
  private preloadedImages: Set<string> = new Set();
  private observer: IntersectionObserver | null = null;

  private constructor() {
    this.config = {
      quality: {
        avif: 70,
        webp: 80,
        jpeg: 85
      },
      formats: ['avif', 'webp', 'jpeg'],
      breakpoints: [640, 768, 1024, 1280, 1536, 1920],
      lazyLoadOffset: 100,
      placeholderColor: '#f3f4f6',
      compressionLevel: 'high',
      enableAnalytics: true
    };
    
    this.initializeObserver();
  }

  static getInstance(): ImageOptimizationService {
    if (!ImageOptimizationService.instance) {
      ImageOptimizationService.instance = new ImageOptimizationService();
    }
    return ImageOptimizationService.instance;
  }

  /**
   * Initialize intersection observer for lazy loading
   */
  private initializeObserver(): void {
    if (typeof window === 'undefined') return;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            this.loadImage(img);
            this.observer?.unobserve(img);
          }
        });
      },
      {
        root: null,
        rootMargin: `${this.config.lazyLoadOffset}px`,
        threshold: 0.1
      }
    );
  }

  /**
   * Generate optimized image URL with CDN parameters
   */
  public generateOptimizedUrl(
    originalUrl: string,
    width: number = 500,
    format: 'avif' | 'webp' | 'jpeg' = 'webp',
    quality?: number
  ): string {
    const cacheKey = `${originalUrl}-${width}-${format}-${quality}`;
    
    // Check cache first
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!.url;
    }

    let optimizedUrl = originalUrl;
    const finalQuality = quality || this.config.quality[format];

    // Handle different CDN providers
    if (originalUrl.includes('unsplash.com')) {
      optimizedUrl = this.optimizeUnsplashUrl(originalUrl, width, format, finalQuality);
    } else if (originalUrl.includes('cloudinary.com')) {
      optimizedUrl = this.optimizeCloudinaryUrl(originalUrl, width, format, finalQuality);
    } else if (originalUrl.includes('imagekit.io')) {
      optimizedUrl = this.optimizeImageKitUrl(originalUrl, width, format, finalQuality);
    } else {
      // Generic optimization for other URLs
      optimizedUrl = this.applyGenericOptimization(originalUrl, width, format, finalQuality);
    }

    return optimizedUrl;
  }

  /**
   * Optimize Unsplash URLs
   */
  private optimizeUnsplashUrl(url: string, width: number, format: string, quality: number): string {
    try {
      const urlObj = new URL(url);
      urlObj.searchParams.set('auto', 'format');
      urlObj.searchParams.set('fit', 'crop');
      urlObj.searchParams.set('w', width.toString());
      urlObj.searchParams.set('fm', format);
      urlObj.searchParams.set('q', quality.toString());
      
      // Add optimization parameters
      urlObj.searchParams.set('cs', 'srgb');
      urlObj.searchParams.set('dl', '1');
      
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  /**
   * Optimize Cloudinary URLs
   */
  private optimizeCloudinaryUrl(url: string, width: number, format: string, quality: number): string {
    try {
      const parts = url.split('/');
      const uploadIndex = parts.findIndex(part => part === 'upload');
      
      if (uploadIndex !== -1) {
        const transformations = [
          `w_${width}`,
          `q_${quality}`,
          `f_${format}`,
          'c_fill',
          'g_auto',
          'fl_progressive'
        ];
        
        parts.splice(uploadIndex + 1, 0, transformations.join(','));
        return parts.join('/');
      }
      
      return url;
    } catch {
      return url;
    }
  }

  /**
   * Optimize ImageKit URLs
   */
  private optimizeImageKitUrl(url: string, width: number, format: string, quality: number): string {
    try {
      const urlObj = new URL(url);
      const transformations = [
        `w-${width}`,
        `q-${quality}`,
        `f-${format}`,
        'c-maintain_ratio',
        'fo-auto'
      ];
      
      // Insert transformations before the filename
      const pathname = urlObj.pathname;
      const filename = pathname.split('/').pop();
      const basePath = pathname.substring(0, pathname.lastIndexOf('/'));
      
      urlObj.pathname = `${basePath}/tr:${transformations.join(',')}/${filename}`;
      
      return urlObj.toString();
    } catch {
      return url;
    }
  }

  /**
   * Apply generic optimization
   */
  private applyGenericOptimization(url: string, width: number, format: string, quality: number): string {
    // For generic URLs, we can't modify them, so return as-is
    return url;
  }

  /**
   * Generate responsive srcSet
   */
  public generateResponsiveSrcSet(
    originalUrl: string,
    format: 'avif' | 'webp' | 'jpeg' = 'webp',
    maxWidth: number = 1920
  ): string {
    const relevantBreakpoints = this.config.breakpoints.filter(bp => bp <= maxWidth);
    
    return relevantBreakpoints
      .map(width => {
        const optimizedUrl = this.generateOptimizedUrl(originalUrl, width, format);
        return `${optimizedUrl} ${width}w`;
      })
      .join(', ');
  }

  /**
   * Generate sizes attribute for responsive images
   */
  public generateSizesAttribute(context: 'hero' | 'gallery' | 'card' | 'thumbnail' = 'gallery'): string {
    const sizeMap = {
      hero: '100vw',
      gallery: '(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw',
      card: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
      thumbnail: '(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw'
    };
    
    return sizeMap[context];
  }

  /**
   * Create optimized picture element
   */
  public createPictureElement(
    src: string,
    alt: string,
    width: number,
    height?: number,
    className: string = '',
    priority: boolean = false,
    context: 'hero' | 'gallery' | 'card' | 'thumbnail' = 'gallery'
  ): HTMLPictureElement {
    const picture = document.createElement('picture');
    picture.className = className;

    // Add AVIF source
    const avifSource = document.createElement('source');
    avifSource.srcset = this.generateResponsiveSrcSet(src, 'avif', width);
    avifSource.type = 'image/avif';
    avifSource.sizes = this.generateSizesAttribute(context);
    picture.appendChild(avifSource);

    // Add WebP source
    const webpSource = document.createElement('source');
    webpSource.srcset = this.generateResponsiveSrcSet(src, 'webp', width);
    webpSource.type = 'image/webp';
    webpSource.sizes = this.generateSizesAttribute(context);
    picture.appendChild(webpSource);

    // Add JPEG fallback
    const img = document.createElement('img');
    img.src = this.generateOptimizedUrl(src, width, 'jpeg');
    img.alt = alt;
    img.width = width;
    if (height) img.height = height;
    img.loading = priority ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.className = 'w-full h-full object-cover';
    
    // Add performance attributes
    if (priority) {
      img.fetchPriority = 'high';
    }
    
    // Add analytics tracking
    if (this.config.enableAnalytics) {
      img.addEventListener('load', () => this.trackImageLoad(src, 'success'));
      img.addEventListener('error', () => this.trackImageLoad(src, 'error'));
    }

    picture.appendChild(img);
    return picture;
  }

  /**
   * Load image with performance tracking
   */
  private loadImage(img: HTMLImageElement): void {
    const startTime = performance.now();
    const src = img.dataset.src || img.src;
    
    if (this.loadingQueue.has(src)) return;
    this.loadingQueue.add(src);

    const loadHandler = () => {
      const loadTime = performance.now() - startTime;
      this.trackImagePerformance(src, loadTime);
      this.loadingQueue.delete(src);
      img.removeEventListener('load', loadHandler);
      img.removeEventListener('error', errorHandler);
    };

    const errorHandler = () => {
      this.loadingQueue.delete(src);
      img.removeEventListener('load', loadHandler);
      img.removeEventListener('error', errorHandler);
    };

    img.addEventListener('load', loadHandler);
    img.addEventListener('error', errorHandler);
  }

  /**
   * Track image performance
   */
  private trackImagePerformance(url: string, loadTime: number): void {
    if (!this.config.enableAnalytics) return;

    const analytics: ImageAnalytics = {
      url,
      format: this.detectImageFormat(url),
      originalSize: 0, // Would need to be measured
      optimizedSize: 0, // Would need to be measured
      compressionRatio: 0,
      loadTime,
      renderTime: performance.now(),
      devicePixelRatio: window.devicePixelRatio || 1
    };

    this.analytics.push(analytics);
  }

  /**
   * Track image load events
   */
  private trackImageLoad(url: string, status: 'success' | 'error'): void {
    if (!this.config.enableAnalytics) return;
    
    console.log(`Image ${status}:`, url);
  }

  /**
   * Detect image format from URL
   */
  private detectImageFormat(url: string): string {
    const formatMatch = url.match(/\.(avif|webp|jpeg|jpg|png)(\?|$)/i);
    return formatMatch ? formatMatch[1].toLowerCase() : 'unknown';
  }

  /**
   * Get performance analytics
   */
  public getAnalytics(): ImageAnalytics[] {
    return [...this.analytics];
  }

  /**
   * Clear analytics data
   */
  public clearAnalytics(): void {
    this.analytics = [];
  }

  /**
   * Update configuration
   */
  public updateConfig(newConfig: Partial<ImageOptimizationConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  /**
   * Generate placeholder image
   */
  public generatePlaceholder(width: number, height: number, text?: string): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return '';
    
    // Fill with placeholder color
    ctx.fillStyle = this.config.placeholderColor;
    ctx.fillRect(0, 0, width, height);
    
    // Add text if provided
    if (text) {
      ctx.fillStyle = '#666';
      ctx.font = '14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(text, width / 2, height / 2);
    }
    
    return canvas.toDataURL();
  }

  /**
   * Preload critical images
   */
  public preloadImage(src: string, priority: boolean = false): Promise<void> {
    // Check if already preloaded
    if (this.preloadedImages.has(src)) {
      console.log(`🔄 Skipping duplicate preload for: ${src}`);
      return Promise.resolve();
    }
    
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      
      if (priority) {
        link.setAttribute('fetchpriority', 'high');
      }
      
      link.onload = () => {
        this.preloadedImages.add(src);
        resolve();
      };
      link.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
      
      document.head.appendChild(link);
    });
  }

  /**
   * Batch preload images
   */
  public async preloadImages(urls: string[], priority: boolean = false): Promise<void> {
    const promises = urls.map(url => this.preloadImage(url, priority));
    await Promise.all(promises);
  }

  /**
   * Get cache statistics
   */
  public getCacheStats(): { size: number; hitRate: number } {
    return {
      size: this.cache.size,
      hitRate: 0 // Would need to track hits/misses
    };
  }

  /**
   * Clear image cache
   */
  public clearCache(): void {
    this.cache.clear();
  }

  /**
   * Check if image is already preloaded
   */
  public isPreloaded(src: string): boolean {
    return this.preloadedImages.has(src);
  }
}

export default ImageOptimizationService;
export type { ImageOptimizationConfig, ImageAnalytics };