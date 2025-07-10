import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

// Lazy load the main App component for code splitting
const App = lazy(() => import("./App"));

// No loading fallback - let the static HTML loader handle it
const AppLoadingFallback = () => null;

// Use requestIdleCallback for non-critical initialization
const scheduleNonCriticalWork = (callback: () => void) => {
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
};

// Hide the initial loader and render React app
const root = createRoot(document.getElementById("root")!);
root.render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Suspense fallback={<AppLoadingFallback />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </QueryClientProvider>
);

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
