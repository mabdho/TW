import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { performanceOptimizer } from "./utils/performanceOptimizer";
import "./index.css";

// Performance monitoring
const perfStart = performance.now();

// Initialize critical performance optimizations IMMEDIATELY
performanceOptimizer.initializeCriticalOptimizations();

// Create root and render immediately - no lazy loading for App
const root = createRoot(document.getElementById("root")!, {
  // React 18 concurrent features for better performance
  identifierPrefix: 'tw-'
});

// Immediate render for fastest FCP - no StrictMode in production
const AppComponent = (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </QueryClientProvider>
);

// Use createRoot for React 18 optimizations
root.render(AppComponent);

// Track performance
const initTime = performance.now() - perfStart;
console.log(`React initialization: ${Math.round(initTime)}ms`);

// Start performance monitoring
performanceOptimizer.monitorPerformance();

// Advanced preloading strategy - reduced for FCP optimization
requestIdleCallback(() => {
  // Only preload after FCP is achieved
  setTimeout(() => {
    // Optimize images after render
    performanceOptimizer.optimizeImages();
    
    // Preload non-critical pages
    import("./pages/destinations").catch(() => {});
    import("./pages/blogs").catch(() => {});
  }, 1000);
}, { timeout: 2000 });

// Report performance metrics after load
window.addEventListener('load', () => {
  setTimeout(() => {
    const metrics = performanceOptimizer.getPerformanceMetrics();
    console.log('📊 Performance Metrics:', metrics);
    
    // Report if targets are met
    if (metrics.fcp <= 2500) {
      console.log('✅ FCP target achieved:', metrics.fcp + 'ms');
    } else {
      console.warn('❌ FCP target missed:', metrics.fcp + 'ms');
    }
  }, 100);
});


