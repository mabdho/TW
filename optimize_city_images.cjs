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
    'fit': 'crop', 
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

// Function to add lazy loading and dimensions to img tags
function optimizeImgTags(content) {
  // More comprehensive pattern to match img tags
  const imgPattern = /<img([^>]*?)>/g;
  
  return content.replace(imgPattern, (match) => {
    let optimizedTag = match;
    
    // Check if loading attribute already exists
    const hasLoadingAttr = /loading\s*=\s*["'][^"']*["']/.test(optimizedTag);
    
    if (hasLoadingAttr) {
      // Replace existing loading attribute with "lazy"
      optimizedTag = optimizedTag.replace(/loading\s*=\s*["'][^"']*["']/, 'loading="lazy"');
    } else {
      // Add loading="lazy" before the closing >
      optimizedTag = optimizedTag.replace('>', ' loading="lazy">');
    }
    
    // Add width and height attributes if not present (standard responsive dimensions)
    const hasWidth = /width\s*=/.test(optimizedTag);
    const hasHeight = /height\s*=/.test(optimizedTag);
    
    if (!hasWidth && !hasHeight) {
      // Add responsive dimensions suitable for travel images
      optimizedTag = optimizedTag.replace('>', ' width="1400" height="800">');
    }
    
    return optimizedTag;
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

    // Step 2: Optimize img tags (lazy loading, dimensions)
    const originalImgCount = (content.match(/<img[^>]*>/g) || []).length;
    const lazyImgCount = (content.match(/<img[^>]*loading\s*=\s*["']lazy["'][^>]*>/g) || []).length;
    const imgWithDimensions = (content.match(/<img[^>]*width\s*=\s*["'][^"']*["'][^>]*height\s*=\s*["'][^"']*["'][^>]*>/g) || []).length;
    
    // Only process if there are img tags that need optimization
    if (originalImgCount > 0 && (originalImgCount > lazyImgCount || imgWithDimensions < originalImgCount)) {
      const beforeOptimize = updatedContent;
      updatedContent = optimizeImgTags(updatedContent);
      
      // Count improvements
      const newLazyCount = (updatedContent.match(/<img[^>]*loading\s*=\s*["']lazy["'][^>]*>/g) || []).length;
      const newDimensionsCount = (updatedContent.match(/<img[^>]*width\s*=\s*["'][^"']*["'][^>]*height\s*=\s*["'][^"']*["'][^>]*>/g) || []).length;
      
      lazyLoadingAdded = newLazyCount - lazyImgCount;
      const dimensionsAdded = newDimensionsCount - imgWithDimensions;
      
      if (dimensionsAdded > 0) {
        lazyLoadingAdded += dimensionsAdded; // Count both optimizations
      }
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
  console.log('  • Unsplash URLs: ?auto=format&fit=crop&w=1400&fm=webp');
  console.log('  • Images: loading="lazy" attribute');
  console.log('  • Dimensions: width/height attributes added');
  console.log('  • Picture tags: AVIF/WebP fallbacks (in CityPage component)');
  console.log('  • Performance: Lazy loading for all images');
}

main();