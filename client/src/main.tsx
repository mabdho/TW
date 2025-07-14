import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { performanceAuditor } from "./utils/performanceAudit";
import { comprehensiveAuditor } from "./utils/comprehensiveAudit";
import "./index.css";

// Performance monitoring
const perfStart = performance.now();

// Create root and render immediately - no lazy loading for App
const root = createRoot(document.getElementById("root")!);

// Immediate render for fastest FCP
root.render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </QueryClientProvider>
);

// Track performance
const initTime = performance.now() - perfStart;
console.log(`React initialization: ${Math.round(initTime)}ms`);

// Monitor Core Web Vitals
new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.name === 'first-contentful-paint') {
      console.log(`FCP: ${Math.round(entry.startTime)}ms`);
    }
  }
}).observe({ entryTypes: ['paint'] });

// Preload critical resources after initial render
setTimeout(() => {
  // Preload next likely pages
  import("./pages/destinations");
  import("./pages/blogs");
}, 1000);


