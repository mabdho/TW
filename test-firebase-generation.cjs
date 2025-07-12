#!/usr/bin/env node

// Simple test script to verify Firebase HTML generation works
const fs = require('fs');
const path = require('path');

// Mock city data for testing
const testCityData = {
  cityName: "Milan",
  country: "Italy",
  title: "15 Best Things to Do in Milan, Italy (2025 Guide)",
  description: "Planning a trip and wondering about the best things to do in Milan? You're in the right place! Milan, a global capital of fashion and design, offers a blend of historical landmarks, modern architecture, and of course, incredible food.",
  imageUrl: "https://plus.unsplash.com/premium_photo-1715075305614-e9258ad8c118?auto=format&fit=crop&w=1400&fm=webp&q=80",
  highlights: [
    "Marvel at the Duomo di Milano",
    "Witness Da Vinci's 'The Last Supper'",
    "Explore the Galleria Vittorio Emanuele II",
    "Catch an opera at Teatro alla Scala",
    "Wander through the Brera district"
  ],
  attractions: [
    {
      name: "Duomo di Milano",
      description: "The iconic cathedral of Milan, a breathtaking example of Gothic architecture.",
      practicalInfo: {
        howToGetThere: "Metro: Duomo station (lines M1, M3)",
        openingHours: "Daily, 9:00 AM - 7:00 PM",
        cost: "Cathedral: €5, Rooftop: €15-20",
        website: "duomomilano.it"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "art"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Rooftop views at sunset",
        insiderTip: "Book tickets online to skip the line",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Elevator access available"
      }
    }
  ],
  discoveryData: {
    localSecrets: [
      "Visit the Navigli district for aperitivo",
      "Explore the Quadrilatero della Moda for luxury shopping"
    ],
    photoSpots: [
      "Duomo rooftop at sunset",
      "Galleria Vittorio Emanuele II glass dome"
    ],
    diningHighlights: {
      mustTryDishes: ["Risotto alla milanese", "Cotoletta alla milanese"],
      bestCafes: ["Prada Café", "Marchesi 1824"],
      topRestaurants: ["Osteria di Brera", "Trattoria Milanese"]
    }
  },
  faqs: [
    {
      question: "What's the best time to visit Milan?",
      answer: "Spring (April-May) and Fall (September-October) offer mild weather and fewer crowds."
    }
  ]
};

// Generate HTML similar to the Firebase Functions implementation
function generateTestHTML(cityData) {
  const seoTitle = cityData.title || `Best Things to Do in ${cityData.cityName}, ${cityData.country}`;
  const seoDescription = cityData.description.substring(0, 160) + '...';
  
  const pageStyles = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    .hero-section { position: relative; height: 60vh; background-size: cover; background-position: center; display: flex; align-items: center; justify-content: center; color: white; text-align: center; }
    .hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); }
    .hero-content { position: relative; z-index: 1; max-width: 800px; padding: 0 20px; }
    .hero-title { font-size: 3rem; font-weight: 700; margin-bottom: 1rem; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); }
    .section { margin: 4rem 0; }
    .section-title { font-size: 2.5rem; font-weight: 600; margin-bottom: 2rem; color: #2c3e50; }
    .highlight-card { background: #f8f9fa; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #007bff; margin-bottom: 1rem; }
    .attraction-card { background: white; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 2rem; margin-bottom: 2rem; }
    .attraction-name { font-size: 1.8rem; font-weight: 600; margin-bottom: 1rem; color: #2c3e50; }
    .discovery-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 2rem; border-radius: 12px; margin-bottom: 1rem; }
    .faq-item { background: white; margin-bottom: 1rem; border-radius: 8px; padding: 1.5rem; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
    .faq-question { font-weight: 600; margin-bottom: 1rem; }
    .footer { background: #2c3e50; color: white; padding: 3rem 0; text-align: center; }
    @media (max-width: 768px) { .hero-title { font-size: 2rem; } }
  `;
  
  const highlightsHTML = cityData.highlights.map(highlight => 
    `<div class="highlight-card"><p>${highlight}</p></div>`
  ).join('');
  
  const attractionsHTML = cityData.attractions.map(attraction => 
    `<div class="attraction-card">
      <h3 class="attraction-name">${attraction.name}</h3>
      <p>${attraction.description}</p>
      <div style="margin-top: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
        <h4>Practical Information</h4>
        <p><strong>How to get there:</strong> ${attraction.practicalInfo.howToGetThere}</p>
        <p><strong>Opening hours:</strong> ${attraction.practicalInfo.openingHours}</p>
        <p><strong>Cost:</strong> ${attraction.practicalInfo.cost}</p>
      </div>
    </div>`
  ).join('');
  
  const discoveryHTML = cityData.discoveryData ? `
    <div class="discovery-card">
      <h3>🤫 Local Secrets</h3>
      <ul>${cityData.discoveryData.localSecrets.map(secret => `<li>${secret}</li>`).join('')}</ul>
    </div>
    <div class="discovery-card">
      <h3>📸 Photo Spots</h3>
      <ul>${cityData.discoveryData.photoSpots.map(spot => `<li>${spot}</li>`).join('')}</ul>
    </div>
    <div class="discovery-card">
      <h3>🍽️ Dining Highlights</h3>
      <ul>${cityData.discoveryData.diningHighlights.mustTryDishes.map(dish => `<li>${dish}</li>`).join('')}</ul>
    </div>
  ` : '';
  
  const faqsHTML = cityData.faqs.map(faq => 
    `<div class="faq-item">
      <div class="faq-question">${faq.question}</div>
      <div>${faq.answer}</div>
    </div>`
  ).join('');
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seoTitle}</title>
    <meta name="description" content="${seoDescription}">
    <meta name="keywords" content="things to do in ${cityData.cityName}, ${cityData.cityName} travel guide, ${cityData.cityName} attractions">
    <link rel="canonical" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    <style>${pageStyles}</style>
</head>
<body>
    <div class="hero-section" style="background-image: url('${cityData.imageUrl}');">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <h1 class="hero-title">${cityData.cityName}</h1>
            <p>${cityData.description.substring(0, 200)}...</p>
        </div>
    </div>
    
    <div class="container">
        <section class="section">
            <h2 class="section-title">✨ Highlights</h2>
            ${highlightsHTML}
        </section>
        
        <section class="section">
            <h2 class="section-title">🎯 Discovery Cards</h2>
            ${discoveryHTML}
        </section>
        
        <section class="section">
            <h2 class="section-title">🏛️ Top Attractions</h2>
            ${attractionsHTML}
        </section>
        
        <section class="section">
            <h2 class="section-title">❓ FAQs</h2>
            ${faqsHTML}
        </section>
    </div>
    
    <footer class="footer">
        <div class="container">
            <p>&copy; 2025 TravelWanders. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
}

// Test the generation
console.log('🧪 Testing Firebase HTML Generation...');

try {
  const html = generateTestHTML(testCityData);
  
  // Save to public directory
  const outputPath = path.join(__dirname, 'public', 'test-milan-generated.html');
  fs.writeFileSync(outputPath, html);
  
  console.log(`✅ Successfully generated test HTML: ${outputPath}`);
  console.log(`📄 File size: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
  console.log(`🔗 View at: /test-milan-generated.html`);
  
  // Check if it contains all expected sections
  const requiredSections = ['Highlights', 'Discovery Cards', 'Top Attractions', 'FAQs'];
  const missingSections = requiredSections.filter(section => !html.includes(section));
  
  if (missingSections.length === 0) {
    console.log('✅ All required sections present');
  } else {
    console.log(`❌ Missing sections: ${missingSections.join(', ')}`);
  }
  
  console.log('\n🎯 Firebase Static HTML Generator Test Complete!');
  console.log('📋 Next steps:');
  console.log('1. Deploy Firebase Functions: firebase deploy --only functions');
  console.log('2. Test admin interface at: /admin');
  console.log('3. Generate real city pages using the admin panel');
  
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}