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

function loadTracking() {
  try {
    const data = fs.readFileSync(TRACKING_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

function saveTracking(data) {
  fs.writeFileSync(TRACKING_FILE, JSON.stringify(data, null, 2));
}

function getCurrentApiKey() {
  return API_KEYS[currentKeyIndex];
}

function rotateApiKeyIfNeeded() {
  requestCount++;
  if (requestCount >= 50) {
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    requestCount = 0;
    console.log(`Rotating to API key ${currentKeyIndex + 1}`);
  }
}

function extractCityName(filename) {
  const cityName = filename.replace('.tsx', '');
  
  const specialCases = {
    'CapeTown': 'Cape Town',
    'ChiangMai': 'Chiang Mai',
    'DaNang': 'Da Nang',
    'DarEsSalaam': 'Dar es Salaam',
    'AliceSprings': 'Alice Springs',
    'BeloHorizonte': 'Belo Horizonte',
    'GoldCoast': 'Gold Coast',
    'GuatemalaCity': 'Guatemala City',
    'HoiAn': 'Hoi An',
    'KansasCity': 'Kansas City',
    'LaPaz': 'La Paz',
    'LuangPrabang': 'Luang Prabang',
    'NewOrleans': 'New Orleans',
    'PanamaCity': 'Panama City',
    'PortMoresby': 'Port Moresby',
    'QuebecCity': 'Quebec City',
    'SaltLakeCity': 'Salt Lake City',
    'SanAntonio': 'San Antonio',
    'SanJose': 'San Jose',
    'SanJuan': 'San Juan',
    'SiemReap': 'Siem Reap',
    'TheHague': 'The Hague'
  };
  
  if (specialCases[cityName]) {
    return specialCases[cityName];
  }
  
  return cityName.replace(/([A-Z])/g, ' $1').trim();
}

async function fetchUnsplashImage(cityName) {
  return new Promise((resolve, reject) => {
    const query = encodeURIComponent(`${cityName} travel`);
    const apiKey = getCurrentApiKey();
    const url = `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&per_page=1&order_by=relevant&client_id=${apiKey}`;
    
    https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.results && response.results.length > 0) {
            const imageUrl = response.results[0].urls.regular;
            resolve(imageUrl);
          } else {
            reject(new Error(`No images found for ${cityName}`));
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

function fixCityFile(filename, imageUrl = "") {
  const filePath = path.join(CITIES_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file already has imageUrl
  if (content.includes('imageUrl=')) {
    console.log(`${filename} already has imageUrl`);
    return true;
  }
  
  // Pattern to match the end of faqs array and closing of CityPage component
  const pattern = /(\s+)(}\])\n(\s+)\/>\s*\n(\s+)\);/s;
  const match = content.match(pattern);
  
  if (match) {
    const indentation = match[1];
    const replacement = `${indentation}}\]}\n${indentation}imageUrl={"${imageUrl}"}\n    />\n  );`;
    content = content.replace(pattern, replacement);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filename}`);
    return true;
  }
  
  console.log(`Could not fix ${filename} - pattern not found`);
  return false;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('Starting fix and update process...');
  
  const cityFiles = fs.readdirSync(CITIES_DIR).filter(file => file.endsWith('.tsx'));
  const tracking = loadTracking();
  
  const filesToProcess = cityFiles.filter(filename => {
    const cityKey = filename.replace('.tsx', '').toLowerCase();
    return tracking[cityKey] !== 'done';
  });
  
  console.log(`Found ${filesToProcess.length} files to process`);
  
  let processedCount = 0;
  let errorCount = 0;
  
  // Process files in batches to avoid overwhelming the API
  for (let i = 0; i < filesToProcess.length; i += 5) {
    const batch = filesToProcess.slice(i, i + 5);
    
    for (const filename of batch) {
      const cityKey = filename.replace('.tsx', '').toLowerCase();
      
      try {
        console.log(`Processing ${filename}...`);
        
        // First, fix the file structure
        const cityName = extractCityName(filename);
        
        let imageUrl = "";
        if (cityName !== "Algiers") { // Skip Algiers as it was already fixed
          // Fetch image from Unsplash
          imageUrl = await fetchUnsplashImage(cityName);
          rotateApiKeyIfNeeded();
          await sleep(1000); // 1 second delay between API calls
        }
        
        const success = fixCityFile(filename, imageUrl);
        
        if (success) {
          tracking[cityKey] = 'done';
          saveTracking(tracking);
          processedCount++;
          console.log(`✓ Successfully processed ${filename}`);
        } else {
          errorCount++;
          console.log(`✗ Failed to process ${filename}`);
        }
        
      } catch (error) {
        errorCount++;
        console.log(`✗ Error processing ${filename}: ${error.message}`);
        await sleep(1000); // Still delay on error
      }
    }
    
    if (i + 5 < filesToProcess.length) {
      console.log(`Processed batch ${Math.floor(i/5) + 1}, taking a longer break...`);
      await sleep(5000); // 5 second break between batches
    }
  }
  
  console.log(`\n=== SUMMARY ===`);
  console.log(`Processed: ${processedCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log(`Process completed!`);
}

main().catch(console.error);