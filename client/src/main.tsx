import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { lazy, Suspense } from "react";
import "./index.css";

// Lazy load the main App component for code splitting
const App = lazy(() => import("./App"));

// Performance optimized loading component
const AppLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-orange-500">
    <div className="text-center text-white">
      <div className="loading-skeleton mb-4" style={{ width: '200px', height: '32px', borderRadius: '8px', margin: '0 auto' }}></div>
      <div className="loading-skeleton" style={{ width: '150px', height: '20px', borderRadius: '8px', margin: '0 auto' }}></div>
    </div>
  </div>
);

// Use requestIdleCallback for non-critical initialization
const scheduleNonCriticalWork = (callback: () => void) => {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
};

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<AppLoadingFallback />}>
      <App />
    </Suspense>
  </QueryClientProvider>
);

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
