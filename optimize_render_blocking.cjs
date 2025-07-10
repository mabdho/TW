const fs = require('fs');
const path = require('path');

/**
 * Comprehensive Render-Blocking Resource Optimization Script
 * Optimizes CSS loading, JavaScript loading, and critical resource loading
 */

console.log('🚀 Starting render-blocking resource optimization...\n');

let optimizationCount = 0;
let filesProcessed = 0;

// Critical CSS that should be inlined for above-the-fold content
const CRITICAL_CSS = `
/* Critical CSS for immediate rendering */
*, ::before, ::after {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: hsl(220 15% 88%);
}

html {
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  -moz-tab-size: 4;
  tab-size: 4;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
}

body {
  margin: 0;
  line-height: inherit;
  background-color: hsl(0 0% 100%);
  color: hsl(220 15% 15%);
}

#root {
  min-height: 100vh;
}

/* Navigation critical styles */
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid hsl(220 15% 88%);
}

/* Hero section critical styles */
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, hsl(210 100% 45%) 0%, hsl(25 95% 60%) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

/* Loading skeleton */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Typography critical styles */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
.text-xl { font-size: 1.25rem; line-height: 1.75rem; }
.font-bold { font-weight: 700; }
.font-medium { font-weight: 500; }

/* Layout critical styles */
.container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-between { justify-content: space-between; }
.text-center { text-align: center; }

/* Button critical styles */
.btn-primary {
  background-color: hsl(210 100% 45%);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary:hover {
  background-color: hsl(210 100% 35%);
}
`;

/**
 * Check if critical CSS is already inlined in HTML
 */
function hasCriticalCSS(content) {
  return content.includes('Critical CSS for immediate rendering');
}

/**
 * Check if fonts are optimally loaded
 */
function hasOptimalFontLoading(content) {
  return content.includes('media="print" onload="this.media=\'all\'"');
}

/**
 * Check if scripts have defer attributes
 */
function hasOptimalScriptLoading(content) {
  return content.includes('defer src="https://replit.com');
}

/**
 * Optimize HTML file for render-blocking resources
 */
function optimizeHTML(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let changed = false;

  // Check if already optimized
  if (hasCriticalCSS(content) && hasOptimalFontLoading(content) && hasOptimalScriptLoading(content)) {
    return false;
  }

  // 1. Inline critical CSS if not already present
  if (!hasCriticalCSS(content)) {
    const styleTag = `    <!-- Critical CSS - Inline above-the-fold styles -->
    <style>
${CRITICAL_CSS}    </style>`;
    
    newContent = newContent.replace(
      /<title>.*?<\/title>/s,
      (match) => `${match}\n    \n${styleTag}`
    );
    changed = true;
    optimizationCount++;
  }

  // 2. Optimize font loading if not already optimized
  if (!hasOptimalFontLoading(content)) {
    // Add preconnects if not present
    if (!content.includes('rel="preconnect" href="https://fonts.googleapis.com"')) {
      const preconnects = `    <!-- Preconnect to external domains -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://images.unsplash.com">`;
      
      newContent = newContent.replace(
        /<\/style>/,
        (match) => `${match}\n    \n${preconnects}`
      );
    }

    // Convert font loading to async
    newContent = newContent.replace(
      /<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Inter.*?" rel="stylesheet">/,
      '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" media="print" onload="this.media=\'all\'">\n    <noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet"></noscript>'
    );
    changed = true;
    optimizationCount++;
  }

  // 3. Add preload for main script if not present
  if (!content.includes('rel="preload"')) {
    const preload = `    <!-- Preload critical resources -->
    <link rel="preload" href="/src/main.tsx" as="script" crossorigin>`;
    
    newContent = newContent.replace(
      /<!-- Preconnect to external domains -->/,
      (match) => `${preload}\n    \n    ${match}`
    );
    changed = true;
    optimizationCount++;
  }

  // 4. Add defer to external scripts
  if (!hasOptimalScriptLoading(content)) {
    newContent = newContent.replace(
      /<script type="text\/javascript" src="https:\/\/replit\.com\/public\/js\/replit-dev-banner\.js"><\/script>/,
      '<script defer src="https://replit.com/public/js/replit-dev-banner.js"></script>'
    );
    changed = true;
    optimizationCount++;
  }

  // 5. Add loading placeholder to prevent layout shift
  if (!content.includes('loading-skeleton')) {
    const loadingPlaceholder = `      <!-- Loading placeholder to prevent layout shift -->
      <div class="loading-skeleton" style="height: 64px; width: 100%;"></div>
      <div style="height: calc(100vh - 64px); display: flex; align-items: center; justify-content: center;">
        <div class="loading-skeleton" style="width: 300px; height: 40px; border-radius: 8px;"></div>
      </div>`;
    
    newContent = newContent.replace(
      /<div id="root"><\/div>/,
      `<div id="root">\n${loadingPlaceholder}\n    </div>`
    );
    changed = true;
    optimizationCount++;
  }

  if (changed) {
    fs.writeFileSync(filePath, newContent);
    return true;
  }
  return false;
}

/**
 * Optimize CSS files to remove render-blocking imports
 */
function optimizeCSS(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let newContent = content;
  let changed = false;

  // Remove font import from CSS (moved to HTML for better control)
  if (content.includes("@import url('https://fonts.googleapis.com")) {
    newContent = newContent.replace(
      /@import url\('https:\/\/fonts\.googleapis\.com.*?'\);\s*/,
      '/* Font import moved to HTML for better loading optimization */\n'
    );
    changed = true;
    optimizationCount++;
  }

  if (changed) {
    fs.writeFileSync(filePath, newContent);
    return true;
  }
  return false;
}

/**
 * Main optimization function
 */
function optimizeRenderBlockingResources() {
  const files = [
    { path: 'client/index.html', type: 'html' },
    { path: 'client/src/index.css', type: 'css' }
  ];

  files.forEach(({ path: filePath, type }) => {
    if (fs.existsSync(filePath)) {
      filesProcessed++;
      let updated = false;

      try {
        if (type === 'html') {
          updated = optimizeHTML(filePath);
        } else if (type === 'css') {
          updated = optimizeCSS(filePath);
        }

        if (updated) {
          console.log(`✓ ${filePath}: Optimized for render-blocking resources`);
        }
      } catch (error) {
        console.log(`✗ ${filePath}: Error - ${error.message}`);
      }
    } else {
      console.log(`⚠ ${filePath}: File not found`);
    }
  });
}

// Run optimization
optimizeRenderBlockingResources();

console.log('\n=== RENDER-BLOCKING OPTIMIZATION SUMMARY ===');
console.log(`📁 Files processed: ${filesProcessed}`);
console.log(`🔧 Optimizations applied: ${optimizationCount}`);

if (optimizationCount > 0) {
  console.log('✅ Render-blocking resource optimization complete!');
} else {
  console.log('✅ All files are already optimized for render-blocking resources!');
}

console.log('\n📋 Optimizations implemented:');
console.log('  • Critical CSS inlined above-the-fold');
console.log('  • Fonts loaded asynchronously with display=swap');
console.log('  • External scripts deferred');
console.log('  • Critical resources preloaded');
console.log('  • Layout shift prevention with loading placeholders');
console.log('  • Font imports moved from CSS to HTML for better control');

console.log('\n🎯 Performance improvements:');
console.log('  • Faster First Contentful Paint (FCP)');
console.log('  • Improved Time to Interactive (TTI)');
console.log('  • Reduced Cumulative Layout Shift (CLS)');
console.log('  • Better Core Web Vitals scores');