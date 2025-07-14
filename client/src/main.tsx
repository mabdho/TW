import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

// Performance monitoring
const perfStart = performance.now();

// Preload App component immediately for faster rendering
const AppPromise = import("./App");
const App = lazy(() => AppPromise);

// Critical path optimization - no loading fallback
const AppLoadingFallback = () => null;

// Performance-optimized scheduling
const scheduleOptimizedWork = (callback: () => void, delay: number = 0) => {
  if (delay === 0) {
    callback();
  } else if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback, { timeout: delay });
  } else {
    setTimeout(callback, delay);
  }
};

// Create root and render immediately
const root = createRoot(document.getElementById("root")!);

// Immediate render for fastest FCP
root.render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Suspense fallback={<AppLoadingFallback />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </QueryClientProvider>
);

// Track performance
const initTime = performance.now() - perfStart;
console.log(`React initialization: ${Math.round(initTime)}ms`);

// Defer non-critical work
scheduleOptimizedWork(() => {
  // Preload critical pages
  import("./pages/home");
  import("./pages/destinations");
  
  // Monitor Core Web Vitals
  new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.name === 'first-contentful-paint') {
        console.log(`FCP: ${Math.round(entry.startTime)}ms`);
      }
    }
  }).observe({ entryTypes: ['paint'] });
}, 100);

// No loader removal needed since there's no loader

// Schedule non-critical performance optimizations
scheduleNonCriticalWork(() => {
  // Preload critical routes when browser is idle
  import("./pages/home");
  
  // Register service worker for caching (if available)
  if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Silent fail - service worker is optional
    });
  }
});
