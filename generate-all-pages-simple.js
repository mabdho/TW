#!/usr/bin/env node

/**
 * Simple script to generate all pages using API call
 * This bypasses the import issues by calling the existing API endpoint
 */

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function generateAllPages() {
  console.log('🚀 Starting comprehensive Firebase HTML generation via API...');
  
  try {
    // Call the API endpoint using curl
    const { stdout, stderr } = await execAsync('curl -X POST http://localhost:5000/api/generate-all-pages-firebase -H "Content-Type: application/json" -d "{}"');
    
    console.log('API Response:', stdout);
    
    if (stderr) {
      console.error('API Error:', stderr);
    }
    
    // Try to parse the response as JSON
    try {
      const response = JSON.parse(stdout);
      if (response.success) {
        console.log('✅ All pages generated successfully!');
        console.log(`📊 Summary: ${response.summary.totalGenerated} pages generated, ${response.summary.totalSize} total`);
        
        if (response.results && response.results.length > 0) {
          console.log('\n📄 Generated Pages:');
          response.results.forEach(result => {
            console.log(`  • ${result.page}: ${result.size}`);
          });
        }
        
        if (response.errors && response.errors.length > 0) {
          console.log('\n❌ Failed Pages:');
          response.errors.forEach(error => {
            console.log(`  • ${error.page}: ${error.error}`);
          });
        }
      } else {
        console.error('❌ API call failed:', response.error);
      }
    } catch (parseError) {
      console.log('Raw API output (non-JSON):', stdout);
    }
    
  } catch (error) {
    console.error('❌ Failed to call API:', error);
  }
}

generateAllPages().catch(console.error);