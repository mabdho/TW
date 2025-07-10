# Gallery & Hero Images Template for City Pages

## Overview
This guide explains how to manually update both hero images and gallery images in individual city pages. Each city has its own `.tsx` file with 1 hero image placeholder and 6 gallery image placeholders that can be individually updated.

## Hero Image Structure
Each city page has a `imageUrl` prop for the main hero image:

```typescript
imageUrl={""}
```

## Gallery Images Structure
Each city page has a `galleryImages` array with 6 slots:

```typescript
galleryImages={[
  { url: "", alt: "City landmark 1", caption: "City landmark 1 - placeholder" },
  { url: "", alt: "City landmark 2", caption: "City landmark 2 - placeholder" },
  { url: "", alt: "City landmark 3", caption: "City landmark 3 - placeholder" },
  { url: "", alt: "City landmark 4", caption: "City landmark 4 - placeholder" },
  { url: "", alt: "City landmark 5", caption: "City landmark 5 - placeholder" },
  { url: "", alt: "City landmark 6", caption: "City landmark 6 - placeholder" }
]}
```

## How to Update Images

### Step 1: Navigate to the City File
Go to `client/src/pages/cities/[CityName].tsx` (e.g., `Stockholm.tsx`)

### Step 2: Update the Hero Image
Replace the empty `imageUrl={""}` with your image URL:

```typescript
// Before (placeholder)
imageUrl={""}

// After (with real image)
imageUrl={"https://example.com/stockholm-hero.jpg"}
```

### Step 3: Update Gallery Images
Replace the empty `url: ""` with your image URLs and update alt/caption:

```typescript
// Before (placeholder)
{ url: "", alt: "Stockholm landmark 1", caption: "Stockholm landmark 1 - placeholder" },

// After (with real image)
{ url: "https://example.com/stockholm-image.jpg", alt: "Gamla Stan Old Town", caption: "Gamla Stan Old Town" },
```

## Example: Complete Update
```typescript
<CityPage
  title={"15 Best Things to Do in Stockholm, Sweden (2025 Guide)"}
  description={"..."}
  imageUrl={"https://images.unsplash.com/photo-1509356843151-3e7d96241e11"}
  galleryImages={[
    { url: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11", alt: "Stockholm Old Town", caption: "Gamla Stan - Stockholm's Historic Old Town" },
    { url: "https://images.unsplash.com/photo-1578946956088-940c1b9b7f3b", alt: "Vasa Museum", caption: "The Famous Vasa Ship Museum" },
    { url: "", alt: "Stockholm landmark 3", caption: "Stockholm landmark 3 - placeholder" },
    { url: "", alt: "Stockholm landmark 4", caption: "Stockholm landmark 4 - placeholder" },
    { url: "", alt: "Stockholm landmark 5", caption: "Stockholm landmark 5 - placeholder" },
    { url: "", alt: "Stockholm landmark 6", caption: "Stockholm landmark 6 - placeholder" }
  ]}
  highlights={["..."]}
  attractions={[...]}
/>
```

## Implementation Status
✅ **COMPLETE**: All 154 cities now have both hero and gallery image placeholders

## Image Behavior
- **Hero Image**: Shows at the top of the page when URL is provided, fallback image when empty
- **Gallery Images**: 
  - **With URL**: Shows the real image with hover effects
  - **Without URL**: Shows a placeholder with the caption
  - **Responsive**: 2 columns on mobile, 3 on tablet, 6 on desktop

## Best Practices
1. Use high-quality images (minimum 800px width)
2. Ensure images are royalty-free or properly licensed
3. Keep alt text concise but descriptive
4. Make captions informative and engaging
5. Test images load properly before deploying

## File Locations
All city files are located in: `client/src/pages/cities/`

The image system automatically detects when URLs are provided and switches from placeholders to real images seamlessly.