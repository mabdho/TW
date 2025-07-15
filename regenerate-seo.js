import fs from 'fs/promises';
import path from 'path';

// Simple regeneration script to test SEO improvements
async function regeneratePages() {
  try {
    const cities = ['London', 'Rome'];
    
    for (const city of cities) {
      console.log(`Processing ${city}...`);
      
      // Make a simple request to the regeneration endpoint
      const response = await fetch(`http://localhost:5000/api/generate-page?city=${city}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log(`✅ ${city} regenerated successfully`);
      } else {
        console.log(`❌ Failed to regenerate ${city}: ${response.status}`);
      }
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

regeneratePages();