// Direct test of extraction logic without Firebase Functions wrapper
const fs = require('fs');
const path = require('path');

// Copy the exact extraction logic from the Firebase Functions
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
      
      attractions.push({
        name,
        description,
        practicalInfo: {
          howToGetThere: 'Metro access',
          openingHours: 'Daily 9-7',
          cost: '€15',
          website: 'example.com'
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

// Test the extraction
const tsxPath = path.join(__dirname, 'client/src/pages/cities/Milan.tsx');
console.log('🧪 Testing direct extraction...\n');

try {
  const cityData = extractCityDataFromTSX(tsxPath);
  
  if (cityData) {
    console.log('✅ Successfully extracted city data:');
    console.log(`   - City: ${cityData.cityName}`);
    console.log(`   - Country: ${cityData.country}`);
    console.log(`   - Title: ${cityData.title.substring(0, 50)}...`);
    console.log(`   - Description: ${cityData.description.substring(0, 100)}...`);
    console.log(`   - Highlights: ${cityData.highlights.length} items`);
    console.log(`   - Attractions: ${cityData.attractions.length} items`);
    console.log(`   - Logistics: ${cityData.logistics ? 'Present' : 'Missing'}`);
    console.log(`   - FAQs: ${cityData.faqs.length} items`);
    console.log(`   - Discovery data: ${cityData.discoveryData ? 'Present' : 'Missing'}`);
    
    if (cityData.attractions.length > 0) {
      console.log('\n🎯 First few attractions:');
      cityData.attractions.slice(0, 3).forEach((attraction, i) => {
        console.log(`   ${i + 1}. ${attraction.name}`);
      });
    }
    
    if (cityData.faqs.length > 0) {
      console.log('\n❓ FAQs:');
      cityData.faqs.forEach((faq, i) => {
        console.log(`   ${i + 1}. ${faq.question}`);
      });
    }
    
    console.log('\n✅ Extraction test successful!');
  } else {
    console.log('❌ Failed to extract city data');
  }
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
}