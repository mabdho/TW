const fs = require('fs');
const path = require('path');

// Test the content extraction directly on the Milan TSX file
function testContentExtraction() {
  const tsxPath = path.join(__dirname, 'client/src/pages/cities/Milan.tsx');
  
  if (!fs.existsSync(tsxPath)) {
    console.log('❌ Milan.tsx not found at:', tsxPath);
    return;
  }
  
  const content = fs.readFileSync(tsxPath, 'utf-8');
  
  // Test attraction extraction
  const attractionMatches = content.match(/\{\s*name:\s*"([^"]+)",\s*description:\s*"([^"]+)"/g);
  console.log('🎯 Attractions found:', attractionMatches ? attractionMatches.length : 0);
  
  if (attractionMatches) {
    attractionMatches.forEach((match, i) => {
      const nameMatch = match.match(/name:\s*"([^"]+)"/);
      if (nameMatch) {
        console.log(`   ${i + 1}. ${nameMatch[1]}`);
      }
    });
  }
  
  // Test logistics extraction
  const logisticsMatch = content.match(/logistics:\s*\{([\s\S]*?)\}/);
  console.log('🚗 Logistics section:', logisticsMatch ? 'Found' : 'Not found');
  
  if (logisticsMatch) {
    const logisticsContent = logisticsMatch[1];
    const gettingAroundMatch = logisticsContent.match(/gettingAround:\s*"([^"]+)"/);
    const whereToStayMatch = logisticsContent.match(/whereToStay:\s*"([^"]+)"/);
    const bestTimeMatch = logisticsContent.match(/bestTimeToVisit:\s*"([^"]+)"/);
    const itineraryMatch = logisticsContent.match(/suggestedItinerary:\s*"([^"]+)"/);
    
    console.log('   - Getting Around:', gettingAroundMatch ? 'Present' : 'Missing');
    console.log('   - Where to Stay:', whereToStayMatch ? 'Present' : 'Missing');
    console.log('   - Best Time:', bestTimeMatch ? 'Present' : 'Missing');
    console.log('   - Itinerary:', itineraryMatch ? 'Present' : 'Missing');
  }
  
  // Test FAQs extraction
  const faqsMatch = content.match(/faqs:\s*\[([\s\S]*?)\]/);
  console.log('❓ FAQs section:', faqsMatch ? 'Found' : 'Not found');
  
  if (faqsMatch) {
    const faqContent = faqsMatch[1];
    const questionMatches = faqContent.match(/question:\s*"([^"]+)"/g);
    console.log('   - Questions count:', questionMatches ? questionMatches.length : 0);
    
    if (questionMatches) {
      questionMatches.forEach((match, i) => {
        const questionMatch = match.match(/question:\s*"([^"]+)"/);
        if (questionMatch) {
          console.log(`   ${i + 1}. ${questionMatch[1]}`);
        }
      });
    }
  }
  
  // Test discovery data
  const discoveryMatch = content.match(/discoveryData:\s*\{([\s\S]*?)\}/);
  console.log('🔍 Discovery data:', discoveryMatch ? 'Found' : 'Not found');
  
  if (discoveryMatch) {
    const discoveryContent = discoveryMatch[1];
    const localSecretsMatch = discoveryContent.match(/localSecrets:\s*\[/);
    const photoSpotsMatch = discoveryContent.match(/photoSpots:\s*\[/);
    const quickFactsMatch = discoveryContent.match(/quickFacts:\s*\[/);
    const budgetMatch = discoveryContent.match(/budgetBreakdown:\s*\{/);
    const diningMatch = discoveryContent.match(/diningHighlights:\s*\{/);
    
    console.log('   - Local Secrets:', localSecretsMatch ? 'Present' : 'Missing');
    console.log('   - Photo Spots:', photoSpotsMatch ? 'Present' : 'Missing');
    console.log('   - Quick Facts:', quickFactsMatch ? 'Present' : 'Missing');
    console.log('   - Budget Breakdown:', budgetMatch ? 'Present' : 'Missing');
    console.log('   - Dining Highlights:', diningMatch ? 'Present' : 'Missing');
  }
}

console.log('🧪 Testing content extraction from Milan.tsx...\n');
testContentExtraction();