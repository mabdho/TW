import fs from 'fs';
import path from 'path';
import https from 'https';

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
  if (requestCount >= 45) {
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    requestCount = 0;
    console.log(`Rotated to API key ${currentKeyIndex + 1}`);
  }
}

function extractCityName(filename) {
  const cityName = filename.replace('.tsx', '');
  const specialCases = {
    'CapeTown': 'Cape Town', 'ChiangMai': 'Chiang Mai', 'DaNang': 'Da Nang',
    'DarEsSalaam': 'Dar es Salaam', 'AliceSprings': 'Alice Springs',
    'BeloHorizonte': 'Belo Horizonte', 'GoldCoast': 'Gold Coast',
    'GuatemalaCity': 'Guatemala City', 'HoiAn': 'Hoi An',
    'KansasCity': 'Kansas City', 'LaPaz': 'La Paz',
    'LuangPrabang': 'Luang Prabang', 'NewOrleans': 'New Orleans',
    'PanamaCity': 'Panama City', 'PortMoresby': 'Port Moresby',
    'QuebecCity': 'Quebec City', 'SaltLakeCity': 'Salt Lake City',
    'SanAntonio': 'San Antonio', 'SanJose': 'San Jose',
    'SanJuan': 'San Juan', 'SiemReap': 'Siem Reap',
    'TheHague': 'The Hague'
  };
  return specialCases[cityName] || cityName.replace(/([A-Z])/g, ' $1').trim();
}

async function fetchUnsplashImage(cityName) {
  return new Promise((resolve, reject) => {
    const query = encodeURIComponent(`${cityName} travel`);
    const apiKey = getCurrentApiKey();
    const url = `https://api.unsplash.com/search/photos?query=${query}&orientation=landscape&per_page=1&order_by=relevant&client_id=${apiKey}`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.results && response.results.length > 0) {
            resolve(response.results[0].urls.regular);
          } else {
            reject(new Error(`No images found for ${cityName}`));
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

function fixAndUpdateCityFile(filename, imageUrl = "") {
  const filePath = path.join(CITIES_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if already has imageUrl
  if (content.includes('imageUrl=')) {
    return true;
  }
  
  // Simple string replacement approach
  const oldPattern = '      ]}\n    />\n  );\n};';
  const newPattern = `      ]}\n      imageUrl={"${imageUrl}"}\n    />\n  );\n};`;
  
  if (content.includes(oldPattern)) {
    content = content.replace(oldPattern, newPattern);
    fs.writeFileSync(filePath, content);
    return true;
  }
  
  console.log(`Could not fix ${filename} - pattern not found`);
  return false;
}

async function main() {
  console.log('Starting batch fix process...');
  
  const cityFiles = fs.readdirSync(CITIES_DIR).filter(file => file.endsWith('.tsx'));
  const tracking = loadTracking();
  
  const filesToProcess = cityFiles.filter(filename => {
    const cityKey = filename.replace('.tsx', '').toLowerCase();
    return tracking[cityKey] !== 'done';
  });
  
  console.log(`Found ${filesToProcess.length} files to process`);
  
  let processedCount = 0;
  let skippedCount = 0;
  
  // Process in small batches to avoid rate limiting
  for (let i = 0; i < filesToProcess.length; i += 3) {
    const batch = filesToProcess.slice(i, i + 3);
    
    console.log(`Processing batch ${Math.floor(i/3) + 1}/${Math.ceil(filesToProcess.length/3)}`);
    
    const promises = batch.map(async (filename) => {
      const cityKey = filename.replace('.tsx', '').toLowerCase();
      
      try {
        const cityName = extractCityName(filename);
        console.log(`Fetching image for ${cityName}...`);
        
        const imageUrl = await fetchUnsplashImage(cityName);
        rotateApiKeyIfNeeded();
        
        const success = fixAndUpdateCityFile(filename, imageUrl);
        
        if (success) {
          tracking[cityKey] = 'done';
          processedCount++;
          console.log(`✓ ${filename} updated`);
        } else {
          console.log(`✗ ${filename} failed`);
        }
        
        return success;
      } catch (error) {
        console.log(`✗ ${filename} error: ${error.message}`);
        return false;
      }
    });
    
    await Promise.all(promises);
    saveTracking(tracking);
    
    // Add delay between batches to respect rate limits
    if (i + 3 < filesToProcess.length) {
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
  }
  
  console.log(`\nCompleted! Processed: ${processedCount}, Skipped: ${skippedCount}`);
}

main().catch(console.error);