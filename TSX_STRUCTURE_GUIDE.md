# TSX Structure Guide for Firebase HTML Generator

## Overview
The HTML generation system has been enhanced with flexible extraction capabilities that automatically handle new TSX fields without requiring code changes. This guide explains how to add new metadata fields to your TSX city files.

## Current Support for New Fields

### Metadata Fields
The system now supports these optional metadata fields in TSX files:

- `author`: Author name for the city guide
- `lastUpdated`: Last update date (ISO format recommended)
- `publishedDate`: Original publication date (ISO format recommended)
- `disclaimer`: Legal disclaimer or important notice
- `tags`: Array of custom tags for the city
- `metaData`: Flexible object for any additional structured data

### How to Add New Fields to TSX Files

#### Example 1: Adding Author and Update Date
```tsx
export default function CityPage() {
  const cityData = {
    cityName: "Barcelona",
    country: "Spain",
    title: "Best Things to Do in Barcelona, Spain (2025 Guide)",
    description: "Discover Barcelona's top attractions...",
    imageUrl: "https://example.com/barcelona.jpg",
    author: "Maria Rodriguez",
    lastUpdated: "2025-01-15",
    publishedDate: "2024-12-01",
    // ... rest of existing data
  };
  
  return <CityPageTemplate cityData={cityData} />;
}
```

#### Example 2: Adding Tags and Disclaimer
```tsx
export default function CityPage() {
  const cityData = {
    cityName: "Tokyo",
    country: "Japan",
    title: "Best Things to Do in Tokyo, Japan (2025 Guide)",
    description: "Explore Tokyo's amazing attractions...",
    imageUrl: "https://example.com/tokyo.jpg",
    tags: ["cultural", "modern", "food", "temples", "shopping"],
    disclaimer: "Prices and opening hours may vary. Please check official websites before visiting.",
    // ... rest of existing data
  };
  
  return <CityPageTemplate cityData={cityData} />;
}
```

#### Example 3: Adding Custom Metadata
```tsx
export default function CityPage() {
  const cityData = {
    cityName: "New York",
    country: "USA",
    title: "Best Things to Do in New York City, USA (2025 Guide)",
    description: "Experience the best of NYC...",
    imageUrl: "https://example.com/nyc.jpg",
    metaData: {
      difficulty: "easy",
      season: "year-round",
      budget: "high",
      duration: "3-5 days"
    },
    // ... rest of existing data
  };
  
  return <CityPageTemplate cityData={cityData} />;
}
```

## HTML Generation Impact

When you add these new fields to your TSX files, the HTML generator will automatically:

### 1. Meta Tags
- `author` → `<meta name="author" content="Author Name">`
- `lastUpdated` → `<meta name="last-modified" content="2025-01-15">`
- `publishedDate` → `<meta name="article:published_time" content="2024-12-01">`
- `tags` → Added to existing keywords meta tag
- `disclaimer` → Added as a disclaimer section in the page body

### 2. Structured Data (JSON-LD)
- `author` → Added to schema.org structured data
- `publishedDate` → `datePublished` in structured data
- `lastUpdated` → `dateModified` in structured data

### 3. Open Graph Tags
- `author` → `<meta property="article:author" content="Author Name">`

### 4. Page Content
- `disclaimer` → Displayed as a dedicated disclaimer section
- `author` → Shown in footer attribution
- `lastUpdated` → Displayed in footer with "Last updated" label

## Flexible Extraction System

The system uses multiple extraction patterns to find fields:

1. **React Props Pattern**: `fieldName={value}`
2. **Object Property Pattern**: `fieldName: "value"`
3. **Template Literal Pattern**: `fieldName={\`value\`}`

This means you can add fields in any of these formats and they'll be detected automatically.

## Benefits

1. **No Code Changes Required**: Add new fields without modifying extraction logic
2. **Automatic HTML Enhancement**: New fields automatically appear in generated HTML
3. **SEO Optimization**: Metadata fields enhance search engine optimization
4. **Future-Proof**: System adapts to new field additions automatically
5. **Backward Compatibility**: Existing TSX files continue to work unchanged

## Testing New Fields

To test new fields:

1. Add the field to your TSX file
2. Generate HTML using the admin panel or API
3. Check the generated HTML for the new metadata
4. Verify SEO improvements in search engine tools

## Best Practices

1. **Use ISO Date Format**: For dates, use YYYY-MM-DD format
2. **Keep Disclaimers Concise**: Brief, clear legal disclaimers work best
3. **Relevant Tags**: Use tags that describe the city's unique characteristics
4. **Author Attribution**: Always credit content creators
5. **Regular Updates**: Keep lastUpdated field current for SEO benefits

## Example Complete TSX with All New Fields

```tsx
export default function CityPage() {
  const cityData = {
    cityName: "Rome",
    country: "Italy",
    title: "Best Things to Do in Rome, Italy (2025 Guide)",
    description: "Discover Rome's incredible history and attractions...",
    imageUrl: "https://example.com/rome.jpg",
    
    // New metadata fields
    author: "Alessandro Rossi",
    lastUpdated: "2025-01-15",
    publishedDate: "2024-11-20",
    tags: ["historical", "ancient", "art", "food", "religious"],
    disclaimer: "Opening hours and ticket prices may change. Please verify current information before visiting.",
    metaData: {
      bestVisitTime: "spring-fall",
      walkingIntensive: true,
      crowdLevel: "high"
    },
    
    // Existing data structure
    highlights: [
      "Colosseum and Roman Forum",
      "Vatican City and Sistine Chapel",
      "Trevi Fountain"
    ],
    // ... rest of existing structure
  };
  
  return <CityPageTemplate cityData={cityData} />;
}
```

This flexible system ensures your TSX city files can evolve with new requirements while maintaining full HTML generation compatibility.