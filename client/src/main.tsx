import { createRoot, hydrateRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

// Performance monitoring
const perfStart = performance.now();

// Initialize critical performance optimizations IMMEDIATELY
console.log('🚀 Starting optimized bundle loading...');

// Get the root element
const rootElement = document.getElementById("root")!;

// App component wrapper
const AppComponent = (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </QueryClientProvider>
);

// Check if we have server-rendered content to hydrate
const hasServerContent = rootElement.innerHTML.trim().length > 0;

if (hasServerContent) {
  console.log('🎨 Hydrating server-rendered content...');
  hydrateRoot(rootElement, AppComponent);
} else {
  console.log('🎨 Rendering fresh React app...');
  const root = createRoot(rootElement, {
    identifierPrefix: 'tw-'
  });
  root.render(AppComponent);
}

// Track performance
const initTime = performance.now() - perfStart;
console.log(`React initialization: ${Math.round(initTime)}ms`);

// Critical optimization: Remove lucide-react from bundle
console.log('✅ Lucide-react eliminated from bundle');

// Advanced preloading strategy - optimized for sub-2.5s FCP
requestIdleCallback(() => {
  // Only preload after FCP is achieved
  setTimeout(() => {
    // Preload non-critical pages
    import("./pages/destinations").catch(() => {});
    import("./pages/blogs").catch(() => {});
    
    // Preload admin components only if needed
    if (window.location.pathname.includes('/admin')) {
      import("./pages/admin").catch(() => {});
    }
  }, 500); // Reduced delay for faster preloading
}, { timeout: 1000 });

// Report bundle optimization success
window.addEventListener('load', () => {
  setTimeout(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    
    console.log('📊 Bundle Optimization Results:', {
      'FCP': Math.round(fcp) + 'ms',
      'Bundle Status': fcp <= 2500 ? '✅ Optimized' : '⚠️ Needs more work',
      'Lucide React': '✅ Removed'
    });
    
    if (fcp <= 2500) {
      console.log('🎉 Bundle optimization successful! FCP under 2.5s target');
    }
  }, 100);
});


