// Test Firebase Functions API simulation
const fs = require('fs');
const path = require('path');

// Simulate the Firebase Functions API call
async function testFirebaseAPI() {
  console.log('🔥 Testing Firebase Functions API simulation...\n');
  
  try {
    // Simulate the request parameters
    const cityName = 'Milan';
    const tsxFilePath = path.join(__dirname, `client/src/pages/cities/${cityName}.tsx`);
    
    if (!fs.existsSync(tsxFilePath)) {
      console.log('❌ City TSX file not found');
      return;
    }
    
    // Load the compiled functions
    const functionsLib = require('./functions/lib/index.js');
    
    // Create mock request and response objects
    const mockReq = {
      query: { cityName: cityName },
      method: 'GET',
      headers: {},
      body: {}
    };
    
    const mockRes = {
      status: function(code) {
        console.log(`📡 Response status: ${code}`);
        return this;
      },
      json: function(data) {
        console.log('📦 JSON response:', data);
        return this;
      },
      send: function(data) {
        console.log('📤 Response data size:', Math.round(data.length / 1024), 'KB');
        
        // Check if it's HTML
        if (data.includes('<!DOCTYPE html>')) {
          console.log('✅ Valid HTML response detected');
          
          // Check for content sections
          const checks = [
            { name: 'Attractions', pattern: /Top Attractions/i },
            { name: 'Logistics', pattern: /Plan Your Trip/i },
            { name: 'FAQs', pattern: /Frequently Asked Questions/i },
            { name: 'Discovery Cards', pattern: /Discovery Cards/i },
            { name: 'Hero Section', pattern: /hero-section/i },
            { name: 'Milan Title', pattern: /Milan/i }
          ];
          
          checks.forEach(check => {
            const found = check.pattern.test(data);
            console.log(`   - ${check.name}: ${found ? '✅ Present' : '❌ Missing'}`);
          });
          
          // Count attraction cards
          const attractionMatches = data.match(/attraction-card/g);
          console.log(`   - Attraction cards: ${attractionMatches ? attractionMatches.length : 0}`);
          
          // Save for inspection
          const outputPath = path.join(__dirname, 'test-firebase-output.html');
          fs.writeFileSync(outputPath, data);
          console.log(`\n💾 Full HTML saved to: ${outputPath}`);
          
        } else {
          console.log('❌ Not HTML response');
        }
        
        return this;
      },
      setHeader: function(name, value) {
        console.log(`🏷️ Header set: ${name} = ${value}`);
        return this;
      }
    };
    
    // Try to call the generatePage function
    if (functionsLib.generatePage) {
      console.log('🚀 Calling generatePage function...');
      
      // Since it's a Firebase Function, we need to simulate the callable
      // Let's try to access the handler directly
      await functionsLib.generatePage(mockReq, mockRes);
      
      console.log('\n✅ Firebase Functions API test completed!');
    } else {
      console.log('❌ generatePage function not found in exports');
      console.log('Available exports:', Object.keys(functionsLib));
    }
    
  } catch (error) {
    console.error('❌ Error testing Firebase API:', error.message);
    console.error(error.stack);
  }
}

testFirebaseAPI();