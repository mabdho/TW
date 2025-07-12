// Quick test to verify content extraction
const fs = require('fs');
const path = require('path');

function testExtraction() {
  const tsxPath = path.join(__dirname, 'client/src/pages/cities/Milan.tsx');
  const content = fs.readFileSync(tsxPath, 'utf-8');
  
  console.log('🧪 Testing content extraction...\n');
  
  // Test attractions extraction
  const attractionsMatch = content.match(/attractions=\{(\[[\s\S]*?\])\}/);
  console.log('Attractions match:', attractionsMatch ? 'Found' : 'Not found');
  
  if (attractionsMatch) {
    const attractionsContent = attractionsMatch[1];
    const attractionPattern = /\{\s*name:\s*"([^"]+)",\s*description:\s*`([\s\S]*?)`,\s*practicalInfo:\s*\{([\s\S]*?)\},\s*discoveryTags:\s*\{([\s\S]*?)\}\s*\}/g;
    
    let count = 0;
    let match;
    while ((match = attractionPattern.exec(attractionsContent)) !== null) {
      count++;
      console.log(`  ${count}. ${match[1]}`);
    }
    console.log(`Total attractions found: ${count}`);
  }
  
  // Test logistics
  const logisticsMatch = content.match(/logistics=\{\{([\s\S]*?)\}\}/);
  console.log('\nLogistics match:', logisticsMatch ? 'Found' : 'Not found');
  
  if (logisticsMatch) {
    const logisticsContent = logisticsMatch[1];
    const sections = ['gettingAround', 'whereToStay', 'bestTimeToVisit', 'suggestedItinerary'];
    sections.forEach(section => {
      const sectionMatch = logisticsContent.match(new RegExp(`${section}:\\s*\`([^\`]+)\``));
      console.log(`  ${section}:`, sectionMatch ? 'Found' : 'Missing');
    });
  }
  
  // Test FAQs
  const faqsMatch = content.match(/faqs=\{(\[[\s\S]*?\])\}/);
  console.log('\nFAQs match:', faqsMatch ? 'Found' : 'Not found');
  
  if (faqsMatch) {
    const faqsContent = faqsMatch[1];
    const faqPattern = /\{\s*question:\s*"([^"]+)",\s*answer:\s*`([^`]+)`\s*\}/g;
    let faqCount = 0;
    let faqMatch;
    while ((faqMatch = faqPattern.exec(faqsContent)) !== null) {
      faqCount++;
      console.log(`  ${faqCount}. ${faqMatch[1]}`);
    }
    console.log(`Total FAQs found: ${faqCount}`);
  }
  
  // Test discovery data
  const discoveryDataMatch = content.match(/discoveryData=\{\{([\s\S]*?)\}\}/);
  console.log('\nDiscovery data match:', discoveryDataMatch ? 'Found' : 'Not found');
  
  if (discoveryDataMatch) {
    const discoveryContent = discoveryDataMatch[1];
    const features = [
      'localSecrets',
      'diningHighlights',
      'budgetBreakdown',
      'seasonalHighlights',
      'quickFacts'
    ];
    
    features.forEach(feature => {
      const featureMatch = discoveryContent.includes(feature);
      console.log(`  ${feature}:`, featureMatch ? 'Found' : 'Missing');
    });
  }
}

testExtraction();