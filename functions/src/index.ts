import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';

// Initialize Firebase Admin
admin.initializeApp();

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
    quickFacts?: {
      totalAttractions: string;
      freeActivities: string;
      averageTimePerAttraction: string;
      walkingFriendly: boolean;
      publicTransportQuality: string;
    };
    seasonalHighlights?: {
      spring: string;
      summer: string;
      fall: string;
      winter: string;
    };
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

// CSS styles for the complete HTML page
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

// Generate complete HTML page
function generateCompleteHTML(cityData: CityData): string {
  const seoTitle = cityData.title || `Best Things to Do in ${cityData.cityName}, ${cityData.country}`;
  const seoDescription = cityData.description.substring(0, 160) + '...';
  
  const heroStyle = `background-image: url('${cityData.imageUrl}');`;
  
  const highlightsHTML = cityData.highlights.map(highlight => 
    `<div class="highlight-card">
      <p>${highlight}</p>
    </div>`
  ).join('');
  
  const attractionsHTML = cityData.attractions.map(attraction => 
    `<div class="attraction-card">
      <div class="attraction-content">
        <h3 class="attraction-name">${attraction.name}</h3>
        <div class="attraction-description">${attraction.description.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
        <div class="practical-info">
          <h4>Practical Information</h4>
          <p><strong>How to get there:</strong> ${attraction.practicalInfo.howToGetThere}</p>
          <p><strong>Opening hours:</strong> ${attraction.practicalInfo.openingHours}</p>
          <p><strong>Cost:</strong> ${attraction.practicalInfo.cost}</p>
          <p><strong>Website:</strong> <a href="https://${attraction.practicalInfo.website}" target="_blank">${attraction.practicalInfo.website}</a></p>
        </div>
        <div class="discovery-tags">
          <span class="discovery-tag">⏰ ${attraction.discoveryTags.timeRequired}</span>
          <span class="discovery-tag">🎯 ${attraction.discoveryTags.experienceLevel}</span>
          <span class="discovery-tag">💰 ${attraction.discoveryTags.costLevel}</span>
          <span class="discovery-tag">📅 ${attraction.discoveryTags.seasonalBest}</span>
          ${attraction.discoveryTags.familyFriendly ? '<span class="discovery-tag">👨‍👩‍👧‍👦 Family Friendly</span>' : ''}
        </div>
      </div>
    </div>`
  ).join('');
  
  const discoveryCardsHTML = cityData.discoveryData ? `
    <div class="discovery-cards">
      ${cityData.discoveryData.localSecrets ? `
        <div class="discovery-card">
          <h3>🤫 Local Secrets</h3>
          <ul class="discovery-list">
            ${cityData.discoveryData.localSecrets.map(secret => `<li>${secret}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${cityData.discoveryData.photoSpots ? `
        <div class="discovery-card">
          <h3>📸 Photo Spots</h3>
          <ul class="discovery-list">
            ${cityData.discoveryData.photoSpots.map(spot => `<li>${spot}</li>`).join('')}
          </ul>
        </div>
      ` : ''}
      ${cityData.discoveryData.diningHighlights ? `
        <div class="discovery-card">
          <h3>🍽️ Dining Highlights</h3>
          <ul class="discovery-list">
            ${cityData.discoveryData.diningHighlights.mustTryDishes ? cityData.discoveryData.diningHighlights.mustTryDishes.map(dish => `<li>${dish}</li>`).join('') : ''}
          </ul>
        </div>
      ` : ''}
    </div>
  ` : '';
  
  const faqsHTML = cityData.faqs ? cityData.faqs.map(faq => 
    `<div class="faq-item">
      <div class="faq-question">${faq.question}</div>
      <div class="faq-answer">${faq.answer}</div>
    </div>`
  ).join('') : '';
  
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
        <!-- Hero Section -->
        <div class="hero-section" style="${heroStyle}">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 class="hero-title">${cityData.cityName}</h1>
                <p class="hero-description">${cityData.description.substring(0, 200)}...</p>
            </div>
        </div>
        
        <!-- Main Content -->
        <div class="container">
            <!-- Highlights Section -->
            <section class="section">
                <h2 class="section-title">✨ Highlights</h2>
                <div class="highlights-grid">
                    ${highlightsHTML}
                </div>
            </section>
            
            <!-- Discovery Cards Section -->
            ${discoveryCardsHTML}
            
            <!-- Attractions Section -->
            <section class="section">
                <h2 class="section-title">🎯 Top Attractions</h2>
                <div class="attractions-grid">
                    ${attractionsHTML}
                </div>
            </section>
            
            <!-- Logistics Section -->
            ${cityData.logistics ? `
            <section class="section">
                <h2 class="section-title">🗺️ Plan Your Trip</h2>
                <div class="logistics-grid">
                    <div class="logistics-card">
                        <h3>🚌 Getting Around</h3>
                        <div class="logistics-content">${cityData.logistics.gettingAround.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
                    </div>
                    <div class="logistics-card">
                        <h3>🏨 Where to Stay</h3>
                        <div class="logistics-content">${cityData.logistics.whereToStay.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
                    </div>
                    <div class="logistics-card">
                        <h3>📅 Best Time to Visit</h3>
                        <div class="logistics-content">${cityData.logistics.bestTimeToVisit.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
                    </div>
                    <div class="logistics-card">
                        <h3>🎯 Suggested Itinerary</h3>
                        <div class="logistics-content">${cityData.logistics.suggestedItinerary.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
                    </div>
                </div>
            </section>` : ''}
            
            <!-- FAQs Section -->
            ${cityData.faqs && cityData.faqs.length > 0 ? `
            <section class="section">
                <h2 class="section-title">❓ Frequently Asked Questions</h2>
                ${faqsHTML}
            </section>
            ` : ''}
        </div>
        
        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <p>&copy; 2025 TravelWanders. All rights reserved.</p>
                <p>Explore the world with confidence and discover hidden gems in every destination.</p>
            </div>
        </footer>
    </div>
    
    <script>
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

// Extract city data from TSX file
async function extractCityDataFromTSX(tsxFilePath: string): Promise<CityData | null> {
  try {
    const tsxContent = fs.readFileSync(tsxFilePath, 'utf-8');
    
    // Extract basic city information
    const cityNameMatch = tsxContent.match(/cityName="([^"]+)"/);
    const countryMatch = tsxContent.match(/country="([^"]+)"/);
    const titleMatch = tsxContent.match(/title=\{?"([^"]+)"\}?/);
    const descriptionMatch = tsxContent.match(/description=\{`([^`]+)`\}/);
    const imageUrlMatch = tsxContent.match(/imageUrl=\{?"([^"]+)"\}?/);
    
    if (!cityNameMatch || !countryMatch || !titleMatch || !descriptionMatch) {
      console.error('Failed to extract basic city data from TSX file');
      return null;
    }
    
    // Extract highlights
    const highlightsMatch = tsxContent.match(/highlights=\{(\[[\s\S]*?\])\}/);
    let highlights: string[] = [];
    if (highlightsMatch) {
      const highlightItems = highlightsMatch[1].match(/"([^"]+)"/g);
      highlights = highlightItems ? highlightItems.map(item => item.replace(/"/g, '')) : [];
    }
    
    // Extract all attractions with complete data
    const attractions: CityData['attractions'] = [];
    const attractionsMatch = tsxContent.match(/attractions=\{(\[[\s\S]*?\])\}/);
    if (attractionsMatch) {
      const attractionsContent = attractionsMatch[1];
      
      // Match each attraction object
      const attractionPattern = /\{\s*name:\s*"([^"]+)",\s*description:\s*`([\s\S]*?)`,\s*practicalInfo:\s*\{([\s\S]*?)\},\s*discoveryTags:\s*\{([\s\S]*?)\}\s*\}/g;
      let attractionMatch;
      
      while ((attractionMatch = attractionPattern.exec(attractionsContent)) !== null) {
        const name = attractionMatch[1];
        const description = attractionMatch[2];
        const practicalInfoStr = attractionMatch[3];
        const discoveryTagsStr = attractionMatch[4];
        
        // Parse practical info
        const howToGetThereMatch = practicalInfoStr.match(/howToGetThere:\s*"([^"]+)"/);
        const openingHoursMatch = practicalInfoStr.match(/openingHours:\s*"([^"]+)"/);
        const costMatch = practicalInfoStr.match(/cost:\s*"([^"]+)"/);
        const websiteMatch = practicalInfoStr.match(/website:\s*"([^"]*)"/);
        
        // Parse discovery tags
        const timeRequiredMatch = discoveryTagsStr.match(/timeRequired:\s*"([^"]+)"/);
        const experienceLevelMatch = discoveryTagsStr.match(/experienceLevel:\s*"([^"]+)"/);
        const interestsMatch = discoveryTagsStr.match(/interests:\s*\[([^\]]+)\]/);
        const costLevelMatch = discoveryTagsStr.match(/costLevel:\s*"([^"]+)"/);
        const seasonalBestMatch = discoveryTagsStr.match(/seasonalBest:\s*"([^"]+)"/);
        const photoOpportunityMatch = discoveryTagsStr.match(/photoOpportunity:\s*"([^"]+)"/);
        const insiderTipMatch = discoveryTagsStr.match(/insiderTip:\s*"([^"]+)"/);
        const hiddenGemMatch = discoveryTagsStr.match(/hiddenGem:\s*(true|false)/);
        const familyFriendlyMatch = discoveryTagsStr.match(/familyFriendly:\s*(true|false)/);
        const accessibilityNotesMatch = discoveryTagsStr.match(/accessibilityNotes:\s*"([^"]+)"/);
        
        const interests = interestsMatch ? 
          interestsMatch[1].match(/"([^"]+)"/g)?.map(item => item.replace(/"/g, '')) || [] : [];
        
        attractions.push({
          name,
          description,
          practicalInfo: {
            howToGetThere: howToGetThereMatch ? howToGetThereMatch[1] : '',
            openingHours: openingHoursMatch ? openingHoursMatch[1] : '',
            cost: costMatch ? costMatch[1] : '',
            website: websiteMatch ? websiteMatch[1] : ''
          },
          discoveryTags: {
            timeRequired: timeRequiredMatch ? timeRequiredMatch[1] : '',
            experienceLevel: experienceLevelMatch ? experienceLevelMatch[1] : '',
            interests,
            costLevel: costLevelMatch ? costLevelMatch[1] : '',
            seasonalBest: seasonalBestMatch ? seasonalBestMatch[1] : '',
            photoOpportunity: photoOpportunityMatch ? photoOpportunityMatch[1] : '',
            insiderTip: insiderTipMatch ? insiderTipMatch[1] : '',
            hiddenGem: hiddenGemMatch ? hiddenGemMatch[1] === 'true' : false,
            familyFriendly: familyFriendlyMatch ? familyFriendlyMatch[1] === 'true' : true,
            accessibilityNotes: accessibilityNotesMatch ? accessibilityNotesMatch[1] : ''
          }
        });
      }
    }

    // Extract logistics
    const logisticsMatch = tsxContent.match(/logistics=\{\{([\s\S]*?)\}\}/);
    let logistics: CityData['logistics'] = {
      gettingAround: 'Public transport recommended',
      whereToStay: 'City center recommended',
      bestTimeToVisit: 'Spring and Fall',
      suggestedItinerary: '3-4 days recommended'
    };
    
    if (logisticsMatch) {
      const logisticsContent = logisticsMatch[1];
      const gettingAroundMatch = logisticsContent.match(/gettingAround:\s*`([^`]+)`/);
      const whereToStayMatch = logisticsContent.match(/whereToStay:\s*`([^`]+)`/);
      const bestTimeToVisitMatch = logisticsContent.match(/bestTimeToVisit:\s*`([^`]+)`/);
      const suggestedItineraryMatch = logisticsContent.match(/suggestedItinerary:\s*`([^`]+)`/);
      
      logistics = {
        gettingAround: gettingAroundMatch ? gettingAroundMatch[1] : logistics.gettingAround,
        whereToStay: whereToStayMatch ? whereToStayMatch[1] : logistics.whereToStay,
        bestTimeToVisit: bestTimeToVisitMatch ? bestTimeToVisitMatch[1] : logistics.bestTimeToVisit,
        suggestedItinerary: suggestedItineraryMatch ? suggestedItineraryMatch[1] : logistics.suggestedItinerary
      };
    }

    // Extract FAQs
    const faqsMatch = tsxContent.match(/faqs=\{(\[[\s\S]*?\])\}/);
    let faqs: CityData['faqs'] = [];
    if (faqsMatch) {
      const faqsContent = faqsMatch[1];
      const faqPattern = /\{\s*question:\s*"([^"]+)",\s*answer:\s*`([^`]+)`\s*\}/g;
      let faqMatch;
      
      while ((faqMatch = faqPattern.exec(faqsContent)) !== null) {
        faqs.push({
          question: faqMatch[1],
          answer: faqMatch[2]
        });
      }
    }

    // Extract discovery data
    const discoveryDataMatch = tsxContent.match(/discoveryData=\{\{([\s\S]*?)\}\}/);
    let discoveryData: CityData['discoveryData'] = {};
    
    if (discoveryDataMatch) {
      const discoveryContent = discoveryDataMatch[1];
      
      // Extract local secrets
      const localSecretsMatch = discoveryContent.match(/localSecrets:\s*\[([^\]]+)\]/);
      if (localSecretsMatch) {
        const secretItems = localSecretsMatch[1].match(/"([^"]+)"/g);
        discoveryData.localSecrets = secretItems ? secretItems.map(item => item.replace(/"/g, '')) : [];
      }
      
      // Extract dining highlights
      const diningMatch = discoveryContent.match(/diningHighlights:\s*\{([\s\S]*?)\}/);
      if (diningMatch) {
        const diningContent = diningMatch[1];
        const mustTryDishesMatch = diningContent.match(/mustTryDishes:\s*"([^"]+)"/);
        const bestCafesMatch = diningContent.match(/bestCafes:\s*"([^"]+)"/);
        const topRestaurantsMatch = diningContent.match(/topRestaurants:\s*"([^"]+)"/);
        const foodMarketsMatch = diningContent.match(/foodMarkets:\s*"([^"]+)"/);
        const diningTipsMatch = diningContent.match(/diningTips:\s*"([^"]+)"/);
        
        discoveryData.diningHighlights = {
          mustTryDishes: mustTryDishesMatch ? mustTryDishesMatch[1].split(',').map(s => s.trim()) : [],
          bestCafes: bestCafesMatch ? bestCafesMatch[1].split(',').map(s => s.trim()) : [],
          topRestaurants: topRestaurantsMatch ? topRestaurantsMatch[1].split(',').map(s => s.trim()) : [],
          foodMarkets: foodMarketsMatch ? foodMarketsMatch[1].split(',').map(s => s.trim()) : [],
          diningTips: diningTipsMatch ? diningTipsMatch[1].split(',').map(s => s.trim()) : []
        };
      }
      
      // Extract budget breakdown
      const budgetMatch = discoveryContent.match(/budgetBreakdown:\s*\{([\s\S]*?)\}/);
      if (budgetMatch) {
        const budgetContent = budgetMatch[1];
        const freeActivitiesMatch = budgetContent.match(/freeActivities:\s*"([^"]+)"/);
        const budgetFriendlyMatch = budgetContent.match(/budgetFriendly:\s*"([^"]+)"/);
        const splurgeWorthyMatch = budgetContent.match(/splurgeWorthy:\s*"([^"]+)"/);
        
        discoveryData.budgetBreakdown = {
          budget: freeActivitiesMatch ? freeActivitiesMatch[1] : '',
          midRange: budgetFriendlyMatch ? budgetFriendlyMatch[1] : '',
          luxury: splurgeWorthyMatch ? splurgeWorthyMatch[1] : ''
        };
      }
    }

    const cityData: CityData = {
      cityName: cityNameMatch[1],
      country: countryMatch[1],
      title: titleMatch[1],
      description: descriptionMatch[1],
      imageUrl: imageUrlMatch ? imageUrlMatch[1] : '',
      galleryImages: [],
      highlights,
      attractions,
      discoveryData,
      logistics,
      faqs
    };

    return cityData;
  } catch (error) {
    console.error('Error extracting city data from TSX:', error);
    return null;
  }
}

// Generate single city page
export const generatePage = functions.https.onRequest(async (req, res) => {
  try {
    const { cityName } = req.query;
    
    if (!cityName) {
      res.status(400).json({ error: 'City name is required' });
      return;
    }
    
    const cityNameStr = Array.isArray(cityName) ? String(cityName[0]) : String(cityName);
    const tsxFilePath = path.join(__dirname, `../../../client/src/pages/cities/${cityNameStr}.tsx`);
    
    console.log('Looking for TSX file at:', tsxFilePath);
    console.log('File exists:', fs.existsSync(tsxFilePath));
    
    if (!fs.existsSync(tsxFilePath)) {
      // Try alternative path
      const alternativePath = path.join(__dirname, `../../client/src/pages/cities/${cityNameStr}.tsx`);
      console.log('Trying alternative path:', alternativePath);
      
      if (!fs.existsSync(alternativePath)) {
        res.status(404).json({ error: 'City TSX file not found' });
        return;
      }
      
      // Use alternative path
      const cityData = await extractCityDataFromTSX(alternativePath);
      if (!cityData) {
        res.status(500).json({ error: 'Failed to extract city data' });
        return;
      }
      
      const html = generateCompleteHTML(cityData);
      res.setHeader('Content-Type', 'text/html');
      res.send(html);
      return;
    }
    
    const cityData = await extractCityDataFromTSX(tsxFilePath);
    
    if (!cityData) {
      res.status(500).json({ error: 'Failed to extract city data' });
      return;
    }
    
    const html = generateCompleteHTML(cityData);
    
    // Save HTML file to public directory
    const htmlFilePath = path.join(__dirname, '../../../public', `best-things-to-do-in-${cityNameStr.toLowerCase()}.html`);
    fs.writeFileSync(htmlFilePath, html);
    
    res.json({ 
      success: true, 
      message: `Successfully generated HTML for ${cityNameStr}`,
      filePath: htmlFilePath 
    });
    
  } catch (error) {
    console.error('Error generating page:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Generate all city pages
export const generateAllPages = functions.https.onRequest(async (req, res) => {
  try {
    const citiesDir = path.join(__dirname, '../../../client/src/pages/cities');
    
    if (!fs.existsSync(citiesDir)) {
      res.status(404).json({ error: 'Cities directory not found' });
      return;
    }
    
    const cityFiles = fs.readdirSync(citiesDir).filter(file => file.endsWith('.tsx'));
    const results = [];
    
    for (const cityFile of cityFiles) {
      const cityName = cityFile.replace('.tsx', '');
      const tsxFilePath = path.join(citiesDir, cityFile);
      
      try {
        const cityData = await extractCityDataFromTSX(tsxFilePath);
        
        if (cityData) {
          const html = generateCompleteHTML(cityData);
          const htmlFilePath = path.join(__dirname, '../../../public', `best-things-to-do-in-${cityName.toLowerCase()}.html`);
          fs.writeFileSync(htmlFilePath, html);
          
          results.push({
            city: cityName,
            success: true,
            filePath: htmlFilePath
          });
        } else {
          results.push({
            city: cityName,
            success: false,
            error: 'Failed to extract city data'
          });
        }
      } catch (error) {
        results.push({
          city: cityName,
          success: false,
          error: error instanceof Error ? error.message : 'Unknown error'
        });
      }
    }
    
    res.json({
      success: true,
      message: `Generated ${results.filter(r => r.success).length} out of ${results.length} city pages`,
      results
    });
    
  } catch (error) {
    console.error('Error generating all pages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Main API endpoint
export const api = functions.https.onRequest(async (req, res) => {
  // Enable CORS
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  const path = req.path;
  
  if (path === '/generate-page') {
    return generatePage(req, res);
  } else if (path === '/generate-all-pages') {
    return generateAllPages(req, res);
  } else {
    res.status(404).json({ error: 'Endpoint not found' });
  }
});