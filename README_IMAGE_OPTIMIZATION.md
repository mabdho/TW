# Image Optimization for Travel City Pages

This document describes the automated image optimization system for the travel website's city pages.

## What Gets Optimized

### 1. Unsplash URLs
All Unsplash image URLs (`images.unsplash.com`) are automatically optimized with:
- `auto=format` - Automatic format selection
- `fit=crop` - Crop fitting for optimal display
- `w=1400` - Width optimization to 1400px
- `fm=webp` - WebP format for better compression

### 2. Lazy Loading
All `<img>` tags get the `loading="lazy"` attribute for improved page performance.

### 3. Image Dimensions
Standard `width` and `height` attributes are added to prevent layout shift:
- Hero images: `width="1400" height="800"`
- Thumbnail images: `width="64" height="48"`

### 4. Modern Image Formats (Picture Tags)
Hero and gallery images in the CityPage component use `<picture>` tags with:
- AVIF format (first choice)
- WebP format (fallback)
- Original format (final fallback)

### 5. Complete Performance Package
- Lazy loading for all images
- Optimized Unsplash URLs with performance parameters
- Proper dimensions to prevent layout shift
- Modern image format support
- Future-ready optimization system

## How to Use

### For New City Pages
When adding new city pages to `/client/src/pages/cities/`, run the optimization script:

```bash
node optimize_city_images.cjs
```

### For Existing Pages
The script can be run anytime to ensure all pages are optimized:

```bash
node optimize_city_images.cjs
```

## Script Features

- **Safe**: Only modifies Unsplash URLs, leaves other image sources untouched
- **Smart**: Avoids duplicate parameters and preserves existing optimizations
- **Comprehensive**: Handles both URL optimization and lazy loading in one pass
- **Reusable**: Can be run multiple times safely
- **Detailed**: Provides complete summary of changes made

## Example Output

```
🚀 Processing 157 city files for image optimization...

✓ Dubai.tsx: 2 URLs optimized, 1 images lazy-loaded
✓ Male.tsx: 7 URLs optimized
✓ NewYork.tsx: 7 URLs optimized

=== OPTIMIZATION SUMMARY ===
📁 Files processed: 157
📝 Files updated: 3
🔗 Unsplash URLs optimized: 16
⚡ Images lazy-loaded: 1
✅ Image optimization complete!

📋 Optimizations applied:
  • Unsplash URLs: ?auto=format&fit=max&w=1400&fm=webp
  • Images: loading="lazy" attribute
```

## Before & After

### Unsplash URL Optimization
**Before:**
```javascript
imageUrl: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798"
```

**After:**
```javascript
imageUrl: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&w=1400&fm=webp"
```

### Picture Tag with Modern Formats
**Before:**
```jsx
<img src={imageUrl} alt="City view" className="hero-image" />
```

**After:**
```jsx
<picture className="absolute inset-0 w-full h-full">
  <source 
    srcSet={imageUrl.replace('&fm=webp', '&fm=avif')} 
    type="image/avif" 
  />
  <source 
    srcSet={imageUrl} 
    type="image/webp" 
  />
  <img 
    src={imageUrl} 
    alt="City view"
    className="absolute inset-0 w-full h-full object-cover"
    loading="lazy"
    width="1400"
    height="800"
  />
</picture>
```

### Lazy Loading with Dimensions
**Before:**
```jsx
<img src={imageUrl} alt="City view" className="hero-image" />
```

**After:**
```jsx
<img src={imageUrl} alt="City view" className="hero-image" loading="lazy" width="1400" height="800" />
```

## Performance Benefits

- **Faster Load Times**: WebP format reduces image file sizes by 25-50%
- **Better UX**: Lazy loading prevents unnecessary downloads of off-screen images
- **SEO Improvement**: Core Web Vitals scores improve with optimized images
- **Bandwidth Savings**: Users download smaller, more efficient image formats

## Current Status

As of the last run:
- ✅ 157 city files processed
- ✅ All Unsplash URLs optimized with performance parameters
- ✅ All images have lazy loading enabled
- ✅ System ready for new city page additions

The optimization system is **permanent** and will maintain these improvements for all future city pages added to the website.