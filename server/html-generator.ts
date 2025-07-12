import * as fs from 'fs';
import * as path from 'path';

interface CityData {
  cityName: string;
  country: string;
  title: string;
  description: string;
  imageUrl: string;
  galleryImages: Array<{
    url: string;
    alt: string;
    caption: string;
  }>;
  highlights: string[];
  attractions: Array<{
    name: string;
    description: string;
    practicalInfo: {
      howToGetThere: string;
      openingHours: string;
      cost: string;
      website: string;
    };
    discoveryTags: {
      timeRequired: string;
      experienceLevel: string;
      interests: string[];
      costLevel: string;
      seasonalBest: string;
      photoOpportunity: string;
      insiderTip: string;
      hiddenGem: boolean;
      familyFriendly: boolean;
      accessibilityNotes: string;
    };
  }>;
  discoveryData?: {
    localSecrets?: string[];
    photoSpots?: string[];
    quickFacts?: string[];
    seasonalHighlights?: string[];
    budgetBreakdown?: {
      budget: string;
      midRange: string;
      luxury: string;
    };
    diningHighlights?: {
      mustTryDishes: string[];
      bestCafes: string[];
      topRestaurants: string[];
      foodMarkets: string[];
      diningTips: string[];
    };
  };
  logistics?: {
    gettingAround: string;
    whereToStay: string;
    bestTimeToVisit: string;
    suggestedItinerary: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

// CSS styles for the complete HTML page (from Firebase Functions)
const pageStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .hero-section {
    position: relative;
    height: 60vh;
    min-height: 400px;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 0 20px;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  .hero-breadcrumb {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.95;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  .hero-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .badge {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .tabs-container {
    background: white;
    border-bottom: 1px solid #e2e8f0;
    position: sticky;
    top: 0;
    z-index: 40;
  }

  .tabs-list {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    overflow-x: auto;
  }

  .tab-trigger {
    padding: 1rem 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    color: #64748b;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    transition: all 0.2s;
  }

  .tab-trigger:hover,
  .tab-trigger.active {
    color: #0f172a;
    border-bottom-color: #3b82f6;
  }

  .tab-content {
    display: none;
  }

  .tab-content.active {
    display: block;
  }

  .top-attraction {
    position: relative;
    padding-left: 60px;
  }

  .attraction-number {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    background: #3b82f6;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }

  .highlight-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #007bff;
  }

  .section {
    margin: 4rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #2c3e50;
  }

  .attractions-grid {
    display: grid;
    gap: 2rem;
  }

  .attraction-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .attraction-card:hover {
    transform: translateY(-5px);
  }

  .attraction-content {
    padding: 2rem;
  }

  .attraction-name {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  .attraction-description {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .practical-info {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .discovery-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .discovery-tag {
    background: #e3f2fd;
    color: #1976d2;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .discovery-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .discovery-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .discovery-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .discovery-list {
    list-style: none;
  }

  .discovery-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .faq-section {
    background: #f8f9fa;
    padding: 3rem 0;
    margin: 4rem 0;
  }

  .faq-item {
    background: white;
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .faq-question {
    padding: 1.5rem;
    font-weight: 600;
    font-size: 1.1rem;
    color: #2c3e50;
  }

  .faq-answer {
    padding: 0 1.5rem 1.5rem;
    color: #555;
    line-height: 1.7;
  }

  .footer {
    background: #2c3e50;
    color: white;
    padding: 3rem 0;
    text-align: center;
  }

  .logistics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .logistics-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #28a745;
  }

  .logistics-card h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  .logistics-content {
    color: #555;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-description {
      font-size: 1rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .highlights-grid {
      grid-template-columns: 1fr;
    }
    
    .discovery-cards {
      grid-template-columns: 1fr;
    }
  }
`;

// Helper functions for generating HTML components
function generatePracticalInfoHTML(practicalInfo: any): string {
  return `
    <div class="practical-info">
      <h4>📍 Practical Information</h4>
      <div class="practical-grid">
        <div class="practical-item">
          <strong>🚌 How to get there:</strong> ${practicalInfo.howToGetThere || 'Information not available'}
        </div>
        <div class="practical-item">
          <strong>⏰ Opening hours:</strong> ${practicalInfo.openingHours || 'Check website'}
        </div>
        <div class="practical-item">
          <strong>💰 Cost:</strong> ${practicalInfo.cost || 'Varies'}
        </div>
        ${practicalInfo.website ? `
          <div class="practical-item">
            <strong>🌐 Website:</strong> <a href="https://${practicalInfo.website}" target="_blank" rel="noopener">${practicalInfo.website}</a>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function generateDiscoveryTagsHTML(discoveryTags: any): string {
  return `
    <div class="discovery-tags">
      <h4>🎯 Discovery Info</h4>
      <div class="tags-grid">
        ${discoveryTags.timeRequired ? `<span class="discovery-tag">⏱️ ${discoveryTags.timeRequired}</span>` : ''}
        ${discoveryTags.experienceLevel ? `<span class="discovery-tag">🎯 ${discoveryTags.experienceLevel}</span>` : ''}
        ${discoveryTags.costLevel ? `<span class="discovery-tag">💰 ${discoveryTags.costLevel}</span>` : ''}
        ${discoveryTags.seasonalBest ? `<span class="discovery-tag">🌟 ${discoveryTags.seasonalBest}</span>` : ''}
        ${discoveryTags.hiddenGem ? '<span class="discovery-tag gem">💎 Hidden Gem</span>' : ''}
        ${discoveryTags.familyFriendly ? '<span class="discovery-tag family">👨‍👩‍👧‍👦 Family Friendly</span>' : ''}
      </div>
      ${discoveryTags.interests && discoveryTags.interests.length > 0 ? `
        <div class="interests">
          <strong>🎨 Interests:</strong> ${discoveryTags.interests.join(', ')}
        </div>
      ` : ''}
      ${discoveryTags.photoOpportunity ? `
        <div class="photo-tip">
          <strong>📸 Photo Opportunity:</strong> ${discoveryTags.photoOpportunity}
        </div>
      ` : ''}
      ${discoveryTags.insiderTip ? `
        <div class="insider-tip">
          <strong>💡 Insider Tip:</strong> ${discoveryTags.insiderTip}
        </div>
      ` : ''}
      ${discoveryTags.accessibilityNotes ? `
        <div class="accessibility-notes">
          <strong>♿ Accessibility:</strong> ${discoveryTags.accessibilityNotes}
        </div>
      ` : ''}
    </div>
  `;
}

// Generate complete HTML page matching CityPage React component structure
export function generateCompleteHTML(cityData: CityData): string {
  const seoTitle = cityData.title || `Best Things to Do in ${cityData.cityName}, ${cityData.country}`;
  const seoDescription = (cityData.description || 'Explore this amazing destination').substring(0, 160) + '...';
  
  const heroStyle = `background-image: url('${cityData.imageUrl || ''}');`;
  
  // Create hero section with proper title and badges like React component
  const heroHTML = `
    <div class="hero-section" style="${heroStyle}">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-breadcrumb">
          <span>${cityData.country || 'Country'}</span> › <span>${cityData.cityName}</span>
        </div>
        <h1 class="hero-title">${seoTitle}</h1>
        <p class="hero-subtitle">Discover amazing experiences and top attractions in ${cityData.cityName}, ${cityData.country} (2025 Guide)</p>
        <div class="hero-badges">
          <span class="badge">${cityData.cityName}, ${cityData.country} (2025 Guide)</span>
          <span class="badge">🎯 ${cityData.attractions?.length || 0}+ Attractions</span>
          <span class="badge">⭐ Travel Guide</span>
        </div>
      </div>
    </div>
  `;
  
  const highlightsHTML = (cityData.highlights || []).map(highlight => 
    `<div class="highlight-card">
      <p>${highlight}</p>
    </div>`
  ).join('');

  const topAttractionsHTML = cityData.attractions.slice(0, 6).map((attraction, index) => 
    `<div class="attraction-card top-attraction">
      <div class="attraction-number">${index + 1}</div>
      <div class="attraction-content">
        <h3 class="attraction-name">${attraction.name || 'Unnamed Attraction'}</h3>
        <div class="attraction-description">${(attraction.description || 'No description available').replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
        ${attraction.practicalInfo ? generatePracticalInfoHTML(attraction.practicalInfo) : ''}
        ${attraction.discoveryTags ? generateDiscoveryTagsHTML(attraction.discoveryTags) : ''}
      </div>
    </div>`
  ).join('');

  const allAttractionsHTML = cityData.attractions.map(attraction => 
    `<div class="attraction-card">
      <div class="attraction-content">
        <h3 class="attraction-name">${attraction.name || 'Unnamed Attraction'}</h3>
        <div class="attraction-description">${(attraction.description || 'No description available').replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
        
        ${attraction.practicalInfo ? generatePracticalInfoHTML(attraction.practicalInfo) : ''}
        ${attraction.discoveryTags ? generateDiscoveryTagsHTML(attraction.discoveryTags) : ''}
      </div>
    </div>`
  ).join('');

  // Generate discovery cards for overview tab (moved before tab content generation)
  const discoveryCardsHTML = cityData.discoveryData ? `
    <section class="section">
      <h2 class="section-title">🔍 Interactive Explorer</h2>
      <div class="discovery-cards">
        ${cityData.discoveryData.localSecrets && cityData.discoveryData.localSecrets.length > 0 ? `
          <div class="discovery-card">
            <h3>🤫 Local Secrets</h3>
            <ul class="discovery-list">
              ${cityData.discoveryData.localSecrets.map(secret => `<li>${secret}</li>`).join('')}
            </ul>
          </div>
        ` : `
          <div class="discovery-card">
            <h3>🤫 Local Secrets</h3>
            <ul class="discovery-list">
              <li>Discover hidden gems and local favorites</li>
            </ul>
          </div>
        `}
        
        <div class="discovery-card">
          <h3>📸 Photo Spots</h3>
          <ul class="discovery-list">
            <li>Best photo locations in ${cityData.cityName}</li>
          </ul>
        </div>
        
        ${cityData.discoveryData.budgetBreakdown ? `
          <div class="discovery-card">
            <h3>💰 Time & Budget</h3>
            <div class="budget-breakdown">
              ${cityData.discoveryData.budgetBreakdown.budget ? `
                <div class="budget-item">
                  <strong>💸 Free Activities:</strong>
                  <p>${cityData.discoveryData.budgetBreakdown.budget}</p>
                </div>
              ` : ''}
              ${cityData.discoveryData.budgetBreakdown.midRange ? `
                <div class="budget-item">
                  <strong>💳 Budget-Friendly:</strong>
                  <p>${cityData.discoveryData.budgetBreakdown.midRange}</p>
                </div>
              ` : ''}
              ${cityData.discoveryData.budgetBreakdown.luxury ? `
                <div class="budget-item">
                  <strong>💎 Splurge-Worthy:</strong>
                  <p>${cityData.discoveryData.budgetBreakdown.luxury}</p>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
        
        ${cityData.discoveryData.diningHighlights ? `
          <div class="discovery-card">
            <h3>🍽️ Dining Highlights</h3>
            <div class="dining-content">
              ${cityData.discoveryData.diningHighlights.mustTryDishes && cityData.discoveryData.diningHighlights.mustTryDishes.length > 0 ? `
                <div class="dining-section">
                  <strong>🍲 Must-Try Dishes:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.mustTryDishes.map(dish => `<li>${dish}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${cityData.discoveryData.diningHighlights.bestCafes && cityData.discoveryData.diningHighlights.bestCafes.length > 0 ? `
                <div class="dining-section">
                  <strong>☕ Best Cafes:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.bestCafes.map(cafe => `<li>${cafe}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${cityData.discoveryData.diningHighlights.topRestaurants && cityData.discoveryData.diningHighlights.topRestaurants.length > 0 ? `
                <div class="dining-section">
                  <strong>🏆 Top Restaurants:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.topRestaurants.map(restaurant => `<li>${restaurant}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${cityData.discoveryData.diningHighlights.foodMarkets && cityData.discoveryData.diningHighlights.foodMarkets.length > 0 ? `
                <div class="dining-section">
                  <strong>🛒 Food Markets:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.foodMarkets.map(market => `<li>${market}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${cityData.discoveryData.diningHighlights.diningTips && cityData.discoveryData.diningHighlights.diningTips.length > 0 ? `
                <div class="dining-section">
                  <strong>💡 Dining Tips:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.diningTips.map(tip => `<li>${tip}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  ` : '';

  // Generate tab-based content structure
  const overviewContent = `
    <div class="tab-content active" id="overview">
      <div class="container">
        <section class="section">
          <h2 class="section-title">✨ Highlights</h2>
          <div class="highlights-grid">
            ${highlightsHTML}
          </div>
        </section>
        ${discoveryCardsHTML}
      </div>
    </div>
  `;
  
  // Generate complete tab content structure
  const topAttractionsContent = `
    <div class="tab-content" id="top-attractions">
      <div class="container">
        <section class="section">
          <h2 class="section-title">🏆 Top Attractions</h2>
          <div class="attractions-grid">
            ${topAttractionsHTML}
          </div>
        </section>
      </div>
    </div>
  `;

  const allAttractionsContent = `
    <div class="tab-content" id="all-attractions">
      <div class="container">
        <section class="section">
          <h2 class="section-title">🎯 All Attractions</h2>
          <div class="attractions-grid">
            ${allAttractionsHTML}
          </div>
        </section>
      </div>
    </div>
  `;

  const interactiveExplorerContent = `
    <div class="tab-content" id="interactive-explorer">
      <div class="container">
        ${discoveryCardsHTML}
      </div>
    </div>
  `;

  const planTripContent = cityData.logistics ? `
    <div class="tab-content" id="plan-trip">
      <div class="container">
        <section class="section">
          <h2 class="section-title">📋 Plan Your Trip</h2>
          <div class="logistics-grid">
            ${cityData.logistics.gettingAround ? `
              <div class="logistics-card">
                <h3>🚌 Getting Around</h3>
                <div class="logistics-content">${cityData.logistics.gettingAround.replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            ${cityData.logistics.whereToStay ? `
              <div class="logistics-card">
                <h3>🏨 Where to Stay</h3>
                <div class="logistics-content">${cityData.logistics.whereToStay.replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            ${cityData.logistics.bestTimeToVisit ? `
              <div class="logistics-card">
                <h3>📅 Best Time to Visit</h3>
                <div class="logistics-content">${cityData.logistics.bestTimeToVisit.replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            ${cityData.logistics.suggestedItinerary ? `
              <div class="logistics-card">
                <h3>🎯 Suggested Itinerary</h3>
                <div class="logistics-content">${cityData.logistics.suggestedItinerary.replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
          </div>
        </section>
      </div>
    </div>
  ` : '';

  const faqsHTML = cityData.faqs ? cityData.faqs.map(faq => 
    `<div class="faq-item">
      <div class="faq-question">${faq.question}</div>
      <div class="faq-answer">${faq.answer}</div>
    </div>`
  ).join('') : '';
  
  const faqsContent = cityData.faqs && cityData.faqs.length > 0 ? `
    <div class="tab-content" id="faqs">
      <div class="container">
        <section class="section">
          <h2 class="section-title">❓ Frequently Asked Questions</h2>
          ${faqsHTML}
        </section>
      </div>
    </div>
  ` : '';

  // Complete HTML structure with tabbed navigation matching React CityPage component
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seoTitle}</title>
    <meta name="description" content="${seoDescription}">
    <meta name="keywords" content="things to do in ${cityData.cityName}, ${cityData.cityName} travel guide, ${cityData.cityName} attractions, ${cityData.cityName} ${cityData.country}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    
    <!-- Open Graph tags -->
    <meta property="og:title" content="${seoTitle}">
    <meta property="og:description" content="${seoDescription}">
    <meta property="og:image" content="${cityData.imageUrl}">
    <meta property="og:url" content="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    <meta property="og:type" content="article">
    
    <!-- Twitter Card tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seoTitle}">
    <meta name="twitter:description" content="${seoDescription}">
    <meta name="twitter:image" content="${cityData.imageUrl}">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "${cityData.cityName} Travel Guide",
      "description": "${seoDescription}",
      "image": "${cityData.imageUrl}",
      "url": "https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${cityData.cityName}",
        "addressCountry": "${cityData.country}"
      }
    }
    </script>
    
    <style>${pageStyles}</style>
</head>
<body>
    <div id="root">
        ${heroHTML}
        
        <!-- Tab Navigation -->
        <div class="tabs-container">
          <div class="tabs-list">
            <button class="tab-trigger active" onclick="showTab('overview')">Overview</button>
            <button class="tab-trigger" onclick="showTab('top-attractions')">Top Attractions</button>
            <button class="tab-trigger" onclick="showTab('all-attractions')">All Attractions</button>
            <button class="tab-trigger" onclick="showTab('interactive-explorer')">Interactive Explorer</button>
            <button class="tab-trigger" onclick="showTab('plan-trip')">Plan Your Trip</button>
            ${cityData.faqs && cityData.faqs.length > 0 ? '<button class="tab-trigger" onclick="showTab(\'faqs\')">FAQs</button>' : ''}
          </div>
        </div>
        
        <!-- Tab Contents -->
        ${overviewContent}
        ${topAttractionsContent}
        ${allAttractionsContent}
        ${interactiveExplorerContent}
        ${planTripContent}
        ${faqsContent}
        
        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <p>&copy; 2025 TravelWanders. All rights reserved.</p>
                <p>Explore the world with confidence and discover hidden gems in every destination.</p>
            </div>
        </footer>
    </div>

    <script>
      function showTab(tabId) {
        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Remove active class from all triggers
        const tabTriggers = document.querySelectorAll('.tab-trigger');
        tabTriggers.forEach(trigger => {
          trigger.classList.remove('active');
        });
        
        // Show selected tab content
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
          selectedTab.classList.add('active');
        }
        
        // Add active class to clicked trigger
        event.target.classList.add('active');
      }

      // Analytics and SEO enhancements
      console.log('TravelWanders - ${cityData.cityName} Guide loaded successfully');
      
      // Basic interactivity
      document.addEventListener('DOMContentLoaded', function() {
          // Smooth scrolling for any anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                      target.scrollIntoView({
                          behavior: 'smooth'
                      });
                  }
              });
          });
      });
    </script>
</body>
</html>`;
}

// Extract city data from TSX file (from Firebase Functions) - COMPLETE EXTRACTION
export async function extractCityDataFromTSX(tsxFilePath: string): Promise<CityData | null> {
  try {
    const tsxContent = fs.readFileSync(tsxFilePath, 'utf-8');
    
    // Extract basic city information
    const titleMatch = tsxContent.match(/title=\{?"([^"]+)"\}?/);
    const descriptionMatch = tsxContent.match(/description=\{`([\s\S]*?)`\}/);
    const imageUrlMatch = tsxContent.match(/imageUrl=\{?"([^"]+)"\}?/);
    
    if (!titleMatch || !descriptionMatch) {
      console.error('Failed to extract basic city data from TSX file');
      return null;
    }
    
    // Extract city name and country from title
    const title = titleMatch[1];
    const titleParseMatch = title.match(/Best Things to Do in (.*?), (.*?) \(/);
    const cityName = titleParseMatch ? titleParseMatch[1] : 'Unknown City';
    const country = titleParseMatch ? titleParseMatch[2] : 'Unknown Country';
    
    // Extract highlights
    const highlightsMatch = tsxContent.match(/highlights=\{(\[[\s\S]*?\])\}/);
    let highlights: string[] = [];
    if (highlightsMatch) {
      try {
        highlights = JSON.parse(highlightsMatch[1].replace(/'/g, '"'));
      } catch (e) {
        console.warn('Failed to parse highlights, using empty array');
      }
    }
    
    // Extract attractions with COMPLETE content including descriptions, practical info, and discovery tags
    const attractionsMatch = tsxContent.match(/attractions=\{(\[[\s\S]*?\])\}/);
    let attractions: any[] = [];
    if (attractionsMatch) {
      const attractionsContent = attractionsMatch[1];
      
      // Find all attraction objects
      const attractionMatches = attractionsContent.match(/\{\s*name:\s*"([^"]+)"[\s\S]*?\}/g);
      if (attractionMatches) {
        attractions = attractionMatches.map(attractionStr => {
          const nameMatch = attractionStr.match(/name:\s*"([^"]+)"/);
          const descriptionMatch = attractionStr.match(/description:\s*`([^`]+)`/);
          const howToGetThereMatch = attractionStr.match(/howToGetThere:\s*"([^"]+)"/);
          const openingHoursMatch = attractionStr.match(/openingHours:\s*"([^"]+)"/);
          const costMatch = attractionStr.match(/cost:\s*"([^"]+)"/);
          const websiteMatch = attractionStr.match(/website:\s*"([^"]+)"/);
          const timeRequiredMatch = attractionStr.match(/timeRequired:\s*"([^"]+)"/);
          const experienceLevelMatch = attractionStr.match(/experienceLevel:\s*"([^"]+)"/);
          const interestsMatch = attractionStr.match(/interests:\s*\[(.*?)\]/);
          const costLevelMatch = attractionStr.match(/costLevel:\s*"([^"]+)"/);
          const seasonalBestMatch = attractionStr.match(/seasonalBest:\s*"([^"]+)"/);
          const photoOpportunityMatch = attractionStr.match(/photoOpportunity:\s*"([^"]+)"/);
          const insiderTipMatch = attractionStr.match(/insiderTip:\s*"([^"]+)"/);
          const hiddenGemMatch = attractionStr.match(/hiddenGem:\s*(true|false)/);
          const familyFriendlyMatch = attractionStr.match(/familyFriendly:\s*(true|false)/);
          const accessibilityNotesMatch = attractionStr.match(/accessibilityNotes:\s*"([^"]+)"/);
          
          const interests = interestsMatch ? interestsMatch[1].split(',').map(i => i.trim().replace(/['"]/g, '')) : [];
          
          return {
            name: nameMatch ? nameMatch[1] : 'Unknown',
            description: descriptionMatch ? descriptionMatch[1] : 'Description not available',
            practicalInfo: {
              howToGetThere: howToGetThereMatch ? howToGetThereMatch[1] : 'Information not available',
              openingHours: openingHoursMatch ? openingHoursMatch[1] : 'Check locally',
              cost: costMatch ? costMatch[1] : 'Varies',
              website: websiteMatch ? websiteMatch[1] : ''
            },
            discoveryTags: {
              timeRequired: timeRequiredMatch ? timeRequiredMatch[1] : '1-2 hours',
              experienceLevel: experienceLevelMatch ? experienceLevelMatch[1] : 'Easy Access',
              interests: interests,
              costLevel: costLevelMatch ? costLevelMatch[1] : 'Moderate',
              seasonalBest: seasonalBestMatch ? seasonalBestMatch[1] : 'Year-round',
              photoOpportunity: photoOpportunityMatch ? photoOpportunityMatch[1] : 'Great photo opportunities',
              insiderTip: insiderTipMatch ? insiderTipMatch[1] : 'Visit during off-peak hours',
              hiddenGem: hiddenGemMatch ? hiddenGemMatch[1] === 'true' : false,
              familyFriendly: familyFriendlyMatch ? familyFriendlyMatch[1] === 'true' : true,
              accessibilityNotes: accessibilityNotesMatch ? accessibilityNotesMatch[1] : 'Generally accessible'
            }
          };
        });
      }
    }
    
    // Extract logistics with full content
    const logisticsMatch = tsxContent.match(/logistics=\{\{([\s\S]*?)\}\}/);
    let logistics: any = {};
    if (logisticsMatch) {
      const logisticsContent = logisticsMatch[1];
      const gettingAroundMatch = logisticsContent.match(/gettingAround:\s*`([^`]+)`/);
      const whereToStayMatch = logisticsContent.match(/whereToStay:\s*`([^`]+)`/);
      const bestTimeToVisitMatch = logisticsContent.match(/bestTimeToVisit:\s*`([^`]+)`/);
      const suggestedItineraryMatch = logisticsContent.match(/suggestedItinerary:\s*`([^`]+)`/);
      
      logistics = {
        gettingAround: gettingAroundMatch ? gettingAroundMatch[1] : `${cityName} has excellent public transport connections`,
        whereToStay: whereToStayMatch ? whereToStayMatch[1] : `Various accommodations available throughout ${cityName}`,
        bestTimeToVisit: bestTimeToVisitMatch ? bestTimeToVisitMatch[1] : 'Spring and Fall are ideal visiting seasons',
        suggestedItinerary: suggestedItineraryMatch ? suggestedItineraryMatch[1] : `Plan 2-3 days to explore the highlights of ${cityName}`
      };
    }
    
    // Extract FAQs with complete content
    const faqsMatch = tsxContent.match(/faqs=\{(\[[\s\S]*?\])\}/);
    let faqs: any[] = [];
    if (faqsMatch) {
      const faqsContent = faqsMatch[1];
      const faqMatches = faqsContent.match(/\{\s*question:\s*"([^"]+)",\s*answer:\s*`([^`]+)`\s*\}/g);
      if (faqMatches) {
        faqs = faqMatches.map(faqStr => {
          const questionMatch = faqStr.match(/question:\s*"([^"]+)"/);
          const answerMatch = faqStr.match(/answer:\s*`([^`]+)`/);
          return {
            question: questionMatch ? questionMatch[1] : 'Question not available',
            answer: answerMatch ? answerMatch[1] : 'Answer not available'
          };
        });
      }
    }
    
    // Extract discovery data with full content
    const discoveryDataMatch = tsxContent.match(/discoveryData=\{\{([\s\S]*?)\}\}/);
    let discoveryData: any = {};
    if (discoveryDataMatch) {
      const discoveryContent = discoveryDataMatch[1];
      
      // Extract local secrets
      const localSecretsMatch = discoveryContent.match(/localSecrets:\s*\[([\s\S]*?)\]/);
      let localSecrets: string[] = [];
      if (localSecretsMatch) {
        const secretsContent = localSecretsMatch[1];
        const secretMatches = secretsContent.match(/"([^"]+)"/g);
        if (secretMatches) {
          localSecrets = secretMatches.map(s => s.replace(/"/g, ''));
        }
      }
      
      // Extract dining highlights
      const diningHighlightsMatch = discoveryContent.match(/diningHighlights:\s*\{([\s\S]*?)\}/);
      let diningHighlights: any = {};
      if (diningHighlightsMatch) {
        const diningContent = diningHighlightsMatch[1];
        const mustTryDishesMatch = diningContent.match(/mustTryDishes:\s*"([^"]+)"/);
        const bestCafesMatch = diningContent.match(/bestCafes:\s*"([^"]+)"/);
        const topRestaurantsMatch = diningContent.match(/topRestaurants:\s*"([^"]+)"/);
        const foodMarketsMatch = diningContent.match(/foodMarkets:\s*"([^"]+)"/);
        const diningTipsMatch = diningContent.match(/diningTips:\s*"([^"]+)"/);
        
        diningHighlights = {
          mustTryDishes: mustTryDishesMatch ? mustTryDishesMatch[1].split(',').map(d => d.trim()) : [],
          bestCafes: bestCafesMatch ? bestCafesMatch[1].split(',').map(c => c.trim()) : [],
          topRestaurants: topRestaurantsMatch ? topRestaurantsMatch[1].split(',').map(r => r.trim()) : [],
          foodMarkets: foodMarketsMatch ? foodMarketsMatch[1].split(',').map(m => m.trim()) : [],
          diningTips: diningTipsMatch ? diningTipsMatch[1].split(',').map(t => t.trim()) : []
        };
      }
      
      // Extract seasonal highlights
      const seasonalHighlightsMatch = discoveryContent.match(/seasonalHighlights:\s*\{([\s\S]*?)\}/);
      let seasonalHighlights: any = {};
      if (seasonalHighlightsMatch) {
        const seasonalContent = seasonalHighlightsMatch[1];
        const springMatch = seasonalContent.match(/spring:\s*"([^"]+)"/);
        const summerMatch = seasonalContent.match(/summer:\s*"([^"]+)"/);
        const fallMatch = seasonalContent.match(/fall:\s*"([^"]+)"/);
        const winterMatch = seasonalContent.match(/winter:\s*"([^"]+)"/);
        
        seasonalHighlights = {
          spring: springMatch ? springMatch[1] : '',
          summer: summerMatch ? summerMatch[1] : '',
          fall: fallMatch ? fallMatch[1] : '',
          winter: winterMatch ? winterMatch[1] : ''
        };
      }
      
      // Extract budget breakdown
      const budgetBreakdownMatch = discoveryContent.match(/budgetBreakdown:\s*\{([\s\S]*?)\}/);
      let budgetBreakdown: any = {};
      if (budgetBreakdownMatch) {
        const budgetContent = budgetBreakdownMatch[1];
        const freeActivitiesMatch = budgetContent.match(/freeActivities:\s*"([^"]+)"/);
        const budgetFriendlyMatch = budgetContent.match(/budgetFriendly:\s*"([^"]+)"/);
        const splurgeWorthyMatch = budgetContent.match(/splurgeWorthy:\s*"([^"]+)"/);
        
        budgetBreakdown = {
          budget: freeActivitiesMatch ? freeActivitiesMatch[1] : 'Free activities available',
          midRange: budgetFriendlyMatch ? budgetFriendlyMatch[1] : 'Budget-friendly options available',
          luxury: splurgeWorthyMatch ? splurgeWorthyMatch[1] : 'Luxury experiences available'
        };
      }
      
      discoveryData = {
        localSecrets,
        photoSpots: [`Best photo locations in ${cityName}`],
        quickFacts: [`${cityName} is known for its rich culture and stunning scenery`],
        seasonalHighlights,
        budgetBreakdown,
        diningHighlights
      };
    }
    
    return {
      cityName,
      country,
      title: titleMatch[1],
      description: descriptionMatch[1],
      imageUrl: imageUrlMatch?.[1] || '',
      galleryImages: [],
      highlights,
      attractions,
      discoveryData,
      logistics,
      faqs
    };
  } catch (error) {
    console.error('Error extracting city data from TSX:', error);
    return null;
  }
}