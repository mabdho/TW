import fs from 'fs';
import path from 'path';
import https from 'https';

// Unsplash API Keys
const API_KEYS = [
  'gOqR3P2G6Wc4yxvkivWWbUQNkFKOrpR5GNs7oEYWtG4',
  '8JRPhiFSZAwUPBn2ocQYLytRytotkFImfRZPdG0rEi4',
  'xz6uzRw7eihmPQLJVv06lZT_Jeg56WfSwDG5_EGVkUw',
  'WZ5SJhHMYqEL01hDysFQQ8kRe_-rWyHUlMnU2zTxuO4'
];

let currentKeyIndex = 0;
let requestCount = 0;

const CITIES_DIR = './client/src/pages/cities';
const TRACKING_FILE = './updated_pages.json';

// Load tracking data
function loadTracking() {
  try {
    const data = fs.readFileSync(TRACKING_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

// Fix a single city file
function fixCityFile(filename) {
  const filePath = path.join(CITIES_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file already has proper imageUrl format
  if (content.includes('imageUrl={') && content.includes('}\n    />')) {
    console.log(`${filename} already properly formatted`);
    return true;
  }
  
  // Pattern to match the end of faqs array and closing of CityPage component
  const pattern = /(\s+)(}\])\n(\s+)\/>\s*\n\s*\);/s;
  const match = content.match(pattern);
  
  if (match) {
    const indentation = match[1];
    const replacement = `${indentation}}\]}\n${indentation}imageUrl={""}\n    />\n  );`;
    content = content.replace(pattern, replacement);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filename}`);
    return true;
  }
  
  console.log(`Could not fix ${filename} - pattern not found`);
  return false;
}

// Main function
function main() {
  console.log('Starting city file fix process...');
  
  // Get all city files
  const cityFiles = fs.readdirSync(CITIES_DIR).filter(file => file.endsWith('.tsx'));
  const tracking = loadTracking();
  
  // Filter files that need fixing
  const filesToFix = cityFiles.filter(filename => {
    const cityKey = filename.replace('.tsx', '').toLowerCase();
    return tracking[cityKey] !== 'done';
  });
  
  console.log(`Found ${filesToFix.length} files that need fixing`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filename of filesToFix) {
    try {
      const success = fixCityFile(filename);
      if (success) {
        fixedCount++;
      } else {
        errorCount++;
      }
    } catch (error) {
      console.log(`Error fixing ${filename}: ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Fixed: ${fixedCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Process completed!`);
}

// Run the script
main();