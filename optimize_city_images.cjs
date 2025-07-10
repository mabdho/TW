const fs = require('fs');
const path = require('path');

// Function to optimize Unsplash URLs with performance parameters
function optimizeUnsplashUrl(url) {
  // Check if it's an Unsplash URL
  if (!url.includes('images.unsplash.com')) {
    return url;
  }

  const requiredParams = {
    'auto': 'format',
    'fit': 'max', 
    'w': '1400',
    'fm': 'webp'
  };

  try {
    const urlObj = new URL(url);
    
    // Add each parameter if it doesn't already exist
    Object.entries(requiredParams).forEach(([key, value]) => {
      if (!urlObj.searchParams.has(key)) {
        urlObj.searchParams.set(key, value);
      }
    });

    return urlObj.toString();
  } catch (error) {
    console.error(`Error processing URL: ${url}`, error);
    return url;
  }
}

// Function to add lazy loading to img tags
function addLazyLoading(content) {
  // More comprehensive pattern to match img tags that don't already have loading="lazy"
  const imgPattern = /<img([^>]*?)(?![\s\S]*?loading\s*=\s*["']lazy["'])([^>]*?)>/g;
  
  return content.replace(imgPattern, (match, group1, group2) => {
    // Check if loading attribute already exists with a different value
    const hasLoadingAttr = /loading\s*=\s*["'][^"']*["']/.test(match);
    
    if (hasLoadingAttr) {
      // Replace existing loading attribute with "lazy"
      return match.replace(/loading\s*=\s*["'][^"']*["']/, 'loading="lazy"');
    } else {
      // Add loading="lazy" before the closing >
      return match.replace('>', ' loading="lazy">');
    }
  });
}

// Function to process a single TSX file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let urlUpdates = 0;
    let lazyLoadingAdded = 0;
    
    // Step 1: Optimize Unsplash URLs
    const urlPattern = /(["'])https:\/\/images\.unsplash\.com\/[^"']*\1/g;
    let updatedContent = content.replace(urlPattern, (match) => {
      const quote = match[0]; // Get the opening quote
      const originalUrl = match.slice(1, -1); // Remove quotes
      const optimizedUrl = optimizeUnsplashUrl(originalUrl);
      
      if (originalUrl !== optimizedUrl) {
        urlUpdates++;
      }
      
      return quote + optimizedUrl + quote;
    });

    // Step 2: Add lazy loading to img tags that don't have it
    const originalImgCount = (content.match(/<img[^>]*>/g) || []).length;
    const lazyImgCount = (content.match(/<img[^>]*loading\s*=\s*["']lazy["'][^>]*>/g) || []).length;
    
    // Only process if there are img tags without lazy loading
    if (originalImgCount > lazyImgCount) {
      const beforeLazy = updatedContent;
      updatedContent = addLazyLoading(updatedContent);
      
      // Count how many img tags we added lazy loading to
      const newLazyCount = (updatedContent.match(/<img[^>]*loading\s*=\s*["']lazy["'][^>]*>/g) || []).length;
      lazyLoadingAdded = newLazyCount - lazyImgCount;
    }

    // Write file if any changes were made
    if (urlUpdates > 0 || lazyLoadingAdded > 0) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      
      const fileName = path.basename(filePath);
      let summary = `✓ ${fileName}:`;
      if (urlUpdates > 0) summary += ` ${urlUpdates} URLs optimized`;
      if (lazyLoadingAdded > 0) {
        if (urlUpdates > 0) summary += ',';
        summary += ` ${lazyLoadingAdded} images lazy-loaded`;
      }
      console.log(summary);
      
      return { urlUpdates, lazyLoadingAdded };
    }
    
    return { urlUpdates: 0, lazyLoadingAdded: 0 };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
    return { urlUpdates: 0, lazyLoadingAdded: 0 };
  }
}

// Main function to process all city files
function main() {
  const citiesDir = path.join(__dirname, 'client/src/pages/cities');
  
  if (!fs.existsSync(citiesDir)) {
    console.error('Cities directory not found!');
    return;
  }

  const files = fs.readdirSync(citiesDir).filter(file => file.endsWith('.tsx'));
  let totalFilesUpdated = 0;
  let totalUrlsOptimized = 0;
  let totalImagesLazyLoaded = 0;

  console.log(`🚀 Processing ${files.length} city files for image optimization...\n`);

  files.forEach(file => {
    const filePath = path.join(citiesDir, file);
    const results = processFile(filePath);
    
    if (results.urlUpdates > 0 || results.lazyLoadingAdded > 0) {
      totalFilesUpdated++;
      totalUrlsOptimized += results.urlUpdates;
      totalImagesLazyLoaded += results.lazyLoadingAdded;
    }
  });

  console.log('\n=== OPTIMIZATION SUMMARY ===');
  console.log(`📁 Files processed: ${files.length}`);
  console.log(`📝 Files updated: ${totalFilesUpdated}`);
  console.log(`🔗 Unsplash URLs optimized: ${totalUrlsOptimized}`);
  console.log(`⚡ Images lazy-loaded: ${totalImagesLazyLoaded}`);
  
  if (totalFilesUpdated === 0) {
    console.log('✅ All files are already optimized!');
  } else {
    console.log('✅ Image optimization complete!');
  }

  console.log('\n📋 Optimizations applied:');
  console.log('  • Unsplash URLs: ?auto=format&fit=max&w=1400&fm=webp');
  console.log('  • Images: loading="lazy" attribute');
}

main();