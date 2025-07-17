const fs = require('fs');
const path = require('path');

// Simulate clean destinations HTML generation
function generateCleanDestinationsHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>All Destinations - TravelWanders</title>
  <meta name="description" content="Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="All Destinations - TravelWanders">
  <meta property="og:description" content="Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/destinations">
  <meta property="og:site_name" content="TravelWanders">
  
  <link rel="canonical" href="https://travelwanders.com/destinations">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Travel Destinations Directory",
    "url": "https://travelwanders.com/destinations",
    "description": "Explore our comprehensive directory of travel destinations. Ready for fresh content via admin panel.",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": 0,
      "itemListElement": []
    }
  }
  </script>
</head>
<body>
  <h1>All Destinations</h1>
  <p>No destinations available yet. Add cities via the admin panel.</p>
</body>
</html>`;
}

// Generate clean HTML files
const outputDir = path.join(process.cwd(), 'dist', 'public');
fs.mkdirSync(outputDir, { recursive: true });

const destinationsHTML = generateCleanDestinationsHTML();
fs.writeFileSync(path.join(outputDir, 'destinations-seo.html'), destinationsHTML);

console.log('✅ Clean destinations HTML generated successfully');
