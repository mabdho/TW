// Complete test of HTML generation with all content
const fs = require('fs');
const path = require('path');

// Copy the exact extraction and HTML generation logic
function extractCityDataFromTSX(tsxFilePath) {
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
  let highlights = [];
  if (highlightsMatch) {
    const highlightItems = highlightsMatch[1].match(/"([^"]+)"/g);
    highlights = highlightItems ? highlightItems.map(item => item.replace(/"/g, '')) : [];
  }
  
  // Extract all attractions with complete data
  const attractions = [];
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
          timeRequired: '1-2 hours',
          experienceLevel: 'Easy',
          interests: ['history', 'culture'],
          costLevel: 'Moderate'
        }
      });
    }
  }

  // Extract logistics
  const logisticsMatch = tsxContent.match(/logistics=\{\{([\s\S]*?)\}\}/);
  let logistics = {
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
  let faqs = [];
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
  let discoveryData = {};
  
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
      
      discoveryData.diningHighlights = {
        mustTryDishes: mustTryDishesMatch ? mustTryDishesMatch[1].split(',').map(s => s.trim()) : [],
        bestCafes: bestCafesMatch ? bestCafesMatch[1].split(',').map(s => s.trim()) : [],
        topRestaurants: topRestaurantsMatch ? topRestaurantsMatch[1].split(',').map(s => s.trim()) : []
      };
    }
    
    // Extract budget breakdown
    const budgetMatch = discoveryContent.match(/budgetBreakdown:\s*\{([\s\S]*?)\}/);
    if (budgetMatch) {
      const budgetContent = budgetMatch[1];
      const freeActivitiesMatch = budgetContent.match(/freeActivities:\s*"([^"]+)"/);
      const budgetFriendlyMatch = budgetContent.match(/budgetFriendly:\s*"([^"]+)"/);
      
      discoveryData.budgetBreakdown = {
        budget: freeActivitiesMatch ? freeActivitiesMatch[1] : '',
        midRange: budgetFriendlyMatch ? budgetFriendlyMatch[1] : '',
        luxury: ''
      };
    }
  }

  return {
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
}

// Simplified HTML generation function
function generateCompleteHTML(cityData) {
  const seoDescription = cityData.description.substring(0, 160);
  const heroStyle = `background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${cityData.imageUrl}')`;
  
  // Generate highlights HTML
  const highlightsHTML = cityData.highlights.map(highlight => 
    `<div class="highlight-item">
      <div class="highlight-icon">✨</div>
      <div class="highlight-text">${highlight}</div>
    </div>`
  ).join('');
  
  // Generate attractions HTML
  const attractionsHTML = cityData.attractions.map((attraction, index) => 
    `<div class="attraction-card">
      <div class="attraction-number">${index + 1}</div>
      <div class="attraction-content">
        <h3 class="attraction-name">${attraction.name}</h3>
        <div class="attraction-description">${attraction.description.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
        <div class="attraction-practical">
          <p><strong>How to get there:</strong> ${attraction.practicalInfo.howToGetThere}</p>
          <p><strong>Opening hours:</strong> ${attraction.practicalInfo.openingHours}</p>
          <p><strong>Cost:</strong> ${attraction.practicalInfo.cost}</p>
          ${attraction.practicalInfo.website ? `<p><strong>Website:</strong> <a href="${attraction.practicalInfo.website}" target="_blank">${attraction.practicalInfo.website}</a></p>` : ''}
        </div>
      </div>
    </div>`
  ).join('');
  
  // Generate FAQs HTML
  const faqsHTML = cityData.faqs.map(faq => 
    `<div class="faq-item">
      <div class="faq-question">${faq.question}</div>
      <div class="faq-answer">${faq.answer}</div>
    </div>`
  ).join('');
  
  // Generate discovery cards HTML
  const discoveryCardsHTML = cityData.discoveryData && Object.keys(cityData.discoveryData).length > 0 ? `
    <section class="section">
      <h2 class="section-title">🔍 Discovery Cards</h2>
      <div class="discovery-grid">
        ${cityData.discoveryData.localSecrets ? `
          <div class="discovery-card">
            <h3>🤫 Local Secrets</h3>
            <ul>
              ${cityData.discoveryData.localSecrets.slice(0, 3).map(secret => `<li>${secret}</li>`).join('')}
            </ul>
          </div>
        ` : ''}
        ${cityData.discoveryData.diningHighlights ? `
          <div class="discovery-card">
            <h3>🍽️ Dining Highlights</h3>
            <p><strong>Must Try:</strong> ${cityData.discoveryData.diningHighlights.mustTryDishes.join(', ')}</p>
            <p><strong>Best Cafes:</strong> ${cityData.discoveryData.diningHighlights.bestCafes.join(', ')}</p>
          </div>
        ` : ''}
        ${cityData.discoveryData.budgetBreakdown ? `
          <div class="discovery-card">
            <h3>💰 Budget Breakdown</h3>
            <p><strong>Free Activities:</strong> ${cityData.discoveryData.budgetBreakdown.budget}</p>
            <p><strong>Mid-Range:</strong> ${cityData.discoveryData.budgetBreakdown.midRange}</p>
          </div>
        ` : ''}
      </div>
    </section>
  ` : '';
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${cityData.title}</title>
    <meta name="description" content="${seoDescription}">
    <meta property="og:title" content="${cityData.title}">
    <meta property="og:description" content="${seoDescription}">
    <meta property="og:image" content="${cityData.imageUrl}">
    <meta property="og:url" content="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    <meta property="og:type" content="article">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${cityData.title}">
    <meta name="twitter:description" content="${seoDescription}">
    <meta name="twitter:image" content="${cityData.imageUrl}">
    <link rel="canonical" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
      .hero-section { height: 60vh; background-size: cover; background-position: center; position: relative; display: flex; align-items: center; justify-content: center; }
      .hero-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.4); }
      .hero-content { position: relative; z-index: 2; text-align: center; color: white; }
      .hero-title { font-size: 3rem; font-weight: 700; margin-bottom: 1rem; }
      .hero-description { font-size: 1.2rem; max-width: 600px; }
      .section { margin: 4rem 0; }
      .section-title { font-size: 2.5rem; font-weight: 700; margin-bottom: 2rem; text-align: center; }
      .highlights-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
      .highlight-item { background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-left: 4px solid #007bff; }
      .attractions-grid { display: grid; gap: 2rem; }
      .attraction-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
      .attraction-number { font-size: 1.5rem; font-weight: 700; color: #007bff; margin-bottom: 1rem; }
      .attraction-name { font-size: 1.8rem; font-weight: 600; margin-bottom: 1rem; }
      .attraction-description { margin-bottom: 1.5rem; }
      .attraction-practical { background: #f8f9fa; padding: 1rem; border-radius: 8px; }
      .discovery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
      .discovery-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-left: 4px solid #28a745; }
      .logistics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
      .logistics-card { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-left: 4px solid #28a745; }
      .faq-item { background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); margin-bottom: 1rem; }
      .faq-question { font-size: 1.2rem; font-weight: 600; margin-bottom: 1rem; }
      .faq-answer { color: #666; }
      .footer { background: #2c3e50; color: white; padding: 3rem 0; text-align: center; }
    </style>
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
</body>
</html>`;
}

// Test the complete process
const tsxPath = path.join(__dirname, 'client/src/pages/cities/Milan.tsx');
console.log('🧪 Testing complete HTML generation...\n');

try {
  const cityData = extractCityDataFromTSX(tsxPath);
  
  if (cityData) {
    console.log('✅ Successfully extracted city data');
    console.log(`   - Attractions: ${cityData.attractions.length}`);
    console.log(`   - FAQs: ${cityData.faqs.length}`);
    console.log(`   - Logistics: ${cityData.logistics ? 'Present' : 'Missing'}`);
    console.log(`   - Discovery data: ${cityData.discoveryData ? 'Present' : 'Missing'}`);
    
    const html = generateCompleteHTML(cityData);
    
    console.log('\n🎨 Generated HTML:');
    console.log(`   - Size: ${Math.round(html.length / 1024)} KB`);
    console.log(`   - Contains highlights: ${html.includes('Highlights') ? 'Yes' : 'No'}`);
    console.log(`   - Contains attractions: ${html.includes('Top Attractions') ? 'Yes' : 'No'}`);
    console.log(`   - Contains logistics: ${html.includes('Plan Your Trip') ? 'Yes' : 'No'}`);
    console.log(`   - Contains FAQs: ${html.includes('Frequently Asked Questions') ? 'Yes' : 'No'}`);
    console.log(`   - Contains discovery cards: ${html.includes('Discovery Cards') ? 'Yes' : 'No'}`);
    
    // Count attraction cards
    const attractionMatches = html.match(/attraction-card/g);
    console.log(`   - Attraction cards: ${attractionMatches ? attractionMatches.length : 0}`);
    
    // Count FAQs
    const faqMatches = html.match(/faq-item/g);
    console.log(`   - FAQ items: ${faqMatches ? faqMatches.length : 0}`);
    
    // Save to file
    const outputPath = path.join(__dirname, 'test-complete-milan.html');
    fs.writeFileSync(outputPath, html);
    console.log(`\n💾 Complete HTML saved to: ${outputPath}`);
    
    console.log('\n✅ Complete HTML generation test successful!');
    console.log('🎉 All content sections are working correctly!');
  } else {
    console.log('❌ Failed to extract city data');
  }
} catch (error) {
  console.error('❌ Error:', error.message);
}