/**
 * Critical Resource Loader for TravelWanders
 * Handles intelligent preloading and resource optimization
 */

import { useEffect } from 'react';

interface CriticalResource {
  href: string;
  as: 'script' | 'style' | 'image' | 'font';
  type?: string;
  crossorigin?: boolean;
  priority: 'high' | 'medium' | 'low';
}

const criticalResources: CriticalResource[] = [
  // Critical fonts
  {
    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    as: 'style',
    priority: 'high'
  },
  // Critical images for hero section
  {
    href: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80&fm=webp',
    as: 'image',
    priority: 'high'
  }
];

export function CriticalResourceLoader() {
  useEffect(() => {
    // Preload critical resources with high priority
    const highPriorityResources = criticalResources.filter(r => r.priority === 'high');
    
    highPriorityResources.forEach(resource => {
      const existingLink = document.querySelector(`link[href="${resource.href}"]`);
      if (existingLink) return; // Already exists
      
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.type) {
        link.type = resource.type;
      }
      
      if (resource.crossorigin) {
        link.crossOrigin = 'anonymous';
      }
      
      // For stylesheets, convert to actual stylesheet after load
      if (resource.as === 'style') {
        link.onload = () => {
          link.rel = 'stylesheet';
          link.onload = null;
        };
      }
      
      document.head.appendChild(link);
    });

    // Preload medium priority resources after initial render
    const mediumPriorityResources = criticalResources.filter(r => r.priority === 'medium');
    
    setTimeout(() => {
      mediumPriorityResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = resource.href;
        link.as = resource.as;
        document.head.appendChild(link);
      });
    }, 100);

    // DNS prefetch for external domains
    const domains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'images.unsplash.com'
    ];

    domains.forEach(domain => {
      const existingLink = document.querySelector(`link[href="//${domain}"]`);
      if (existingLink) return;
      
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

  }, []);

  return null; // This component doesn't render anything
}

// Service Worker registration for caching
export function registerServiceWorker() {
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    });
  }
}

// Network connection optimization
export function optimizeNetworkRequests() {
  // Prefetch critical API endpoints
  const criticalEndpoints = [
    '/api/destinations',
    '/api/blogs?featured=true'
  ];

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      criticalEndpoints.forEach(endpoint => {
        fetch(endpoint, { 
          method: 'HEAD',
          credentials: 'include'
        }).catch(() => {
          // Ignore errors for prefetch
        });
      });
    });
  }
}

// Critical CSS injection for above-the-fold content
export function injectCriticalCSS() {
  const criticalCSS = `
    /* Critical above-the-fold styles */
    .hero-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    }
    
    .hero-content {
      text-align: center;
      max-width: 4rem;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    .hero-title {
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 1.5rem;
      color: #1f2937;
    }
    
    @media (min-width: 640px) {
      .hero-title {
        font-size: 4rem;
      }
    }
    
    @media (min-width: 768px) {
      .hero-title {
        font-size: 5rem;
      }
    }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
}