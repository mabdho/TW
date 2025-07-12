// Test Firebase Functions HTML generation directly
const fs = require('fs');
const path = require('path');

// Load the compiled Firebase Functions
const functionsPath = path.join(__dirname, 'functions/lib/index.js');
if (!fs.existsSync(functionsPath)) {
  console.log('❌ Firebase Functions not built. Run: cd functions && npm run build');
  process.exit(1);
}

const { extractCityDataFromTSX, generateCompleteHTML } = require('./functions/lib/index.js');

async function testCompleteGeneration() {
  console.log('🧪 Testing complete HTML generation...\n');
  
  try {
    // Path to Milan TSX file
    const tsxPath = path.join(__dirname, 'client/src/pages/cities/Milan.tsx');
    
    if (!fs.existsSync(tsxPath)) {
      console.log('❌ Milan.tsx not found');
      return;
    }
    
    console.log('📄 Extracting city data from TSX...');
    const cityData = await extractCityDataFromTSX(tsxPath);
    
    if (!cityData) {
      console.log('❌ Failed to extract city data');
      return;
    }
    
    console.log('✅ Successfully extracted city data:');
    console.log('   - City:', cityData.cityName);
    console.log('   - Country:', cityData.country);
    console.log('   - Attractions:', cityData.attractions.length);
    console.log('   - Logistics:', cityData.logistics ? 'Present' : 'Missing');
    console.log('   - FAQs:', cityData.faqs ? cityData.faqs.length : 0);
    console.log('   - Discovery data:', cityData.discoveryData ? 'Present' : 'Missing');
    
    console.log('\n🎨 Generating complete HTML...');
    const html = generateCompleteHTML(cityData);
    
    console.log('✅ HTML generated successfully!');
    console.log('   - Size:', Math.round(html.length / 1024), 'KB');
    console.log('   - Contains attractions:', html.includes('Top Attractions') ? 'Yes' : 'No');
    console.log('   - Contains logistics:', html.includes('Plan Your Trip') ? 'Yes' : 'No');
    console.log('   - Contains FAQs:', html.includes('Frequently Asked Questions') ? 'Yes' : 'No');
    console.log('   - Contains discovery cards:', html.includes('Discovery Cards') ? 'Yes' : 'No');
    
    // Count attractions in generated HTML
    const attractionMatches = html.match(/attraction-card/g);
    console.log('   - Attraction cards:', attractionMatches ? attractionMatches.length : 0);
    
    // Save to file for inspection
    const outputPath = path.join(__dirname, 'test-output-complete.html');
    fs.writeFileSync(outputPath, html);
    console.log('💾 HTML saved to:', outputPath);
    
    // Show first few lines of HTML
    console.log('\n📝 HTML preview:');
    console.log(html.substring(0, 500) + '...');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
  }
}

testCompleteGeneration();