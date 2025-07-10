# Gallery Images Template for City Pages

## How to Add Gallery Images to Each City

To add gallery images to each city.tsx file, add the `galleryImages` prop to the CityPage component:

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

## Example Implementation

Here's how it looks in Austin.tsx:

```typescript
<CityPage
  title={"15 Best Things to Do in Austin, USA (2025 Guide)"}
  description={"..."}
  imageUrl={"..."}
  galleryImages={[
    { url: "", alt: "Austin skyline", caption: "Austin skyline - placeholder" },
    { url: "", alt: "Barton Springs Pool", caption: "Barton Springs Pool - placeholder" },
    { url: "", alt: "Sixth Street nightlife", caption: "Sixth Street nightlife - placeholder" },
    { url: "", alt: "Congress Avenue Bridge bats", caption: "Congress Avenue Bridge bats - placeholder" },
    { url: "", alt: "South Congress Avenue", caption: "South Congress Avenue - placeholder" },
    { url: "", alt: "Austin food scene", caption: "Austin food scene - placeholder" }
  ]}
  highlights={["..."]}
  attractions={[...]}
/>
```

## Cities Already Updated

The following cities have been updated with gallery placeholders:
- ✓ Austin.tsx
- ✓ Tokyo.tsx  
- ✓ Copenhagen.tsx
- ✓ Cairo.tsx

## Remaining Cities to Update

All other cities in the `client/src/pages/cities/` directory need the `galleryImages` prop added.

## Adding Real Images

To add real images, simply replace the empty `url: ""` with actual image URLs:

```typescript
{ url: "https://example.com/image1.jpg", alt: "City landmark", caption: "Beautiful city landmark" }
```

The gallery will automatically display real images when URLs are provided, or show placeholders when URLs are empty.