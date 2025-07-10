import fs from 'fs';
import path from 'path';
import https from 'https';

// Unsplash API Keys (rotate after 50 requests)
const API_KEYS = [
  'gOqR3P2G6Wc4yxvkivWWbUQNkFKOrpR5GNs7oEYWtG4',
  '8JRPhiFSZAwUPBn2ocQYLytRytotkFImfRZPdG0rEi4',
  'xz6uzRw7eihmPQLJVv06lZT_Jeg56WfSwDG5_EGVkUw',
  'WZ5SJhHMYqEL01hDysFQQ8kRe_-rWyHUlMnU2zTxuO4'
];

let currentKeyIndex = 0;
let requestCount = 0;
const REQUESTS_PER_KEY = 50;
const DELAY_BETWEEN_REQUESTS = 1000; // 1 second

// File paths
const CITIES_DIR = './client/src/pages/cities';
const TRACKING_FILE = './updated_pages.json';
const LOG_FILE = './update_log.txt';

// Initialize tracking file
function initializeTracking() {
  if (!fs.existsSync(TRACKING_FILE)) {
    fs.writeFileSync(TRACKING_FILE, JSON.stringify({}, null, 2));
  }
}

// Load tracking data
function loadTracking() {
  try {
    const data = fs.readFileSync(TRACKING_FILE, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

// Save tracking data
function saveTracking(data) {
  fs.writeFileSync(TRACKING_FILE, JSON.stringify(data, null, 2));
}

// Log function
function log(message) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}`;
  console.log(logMessage);
  fs.appendFileSync(LOG_FILE, logMessage + '\n');
}

// Get current API key
function getCurrentApiKey() {
  return API_KEYS[currentKeyIndex];
}

// Rotate API key if needed
function rotateApiKeyIfNeeded() {
  requestCount++;
  if (requestCount >= REQUESTS_PER_KEY) {
    currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
    requestCount = 0;
    log(`Rotating to API key ${currentKeyIndex + 1}`);
  }
}

// Extract city name from filename
function extractCityName(filename) {
  const cityName = filename.replace('.tsx', '');
  
  // Handle special cases
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
  
  // Add spaces before capital letters (for camelCase)
  return cityName.replace(/([A-Z])/g, ' $1').trim();
}

// Fetch image from Unsplash
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

// Update city file with image URL
function updateCityFile(filename, imageUrl) {
  const filePath = path.join(CITIES_DIR, filename);
  
  if (!fs.existsSync(filePath)) {
    log(`File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if imageUrl is already present
  if (content.includes('imageUrl=')) {
    log(`${filename} already has an image URL, skipping`);
    return true;
  }
  
  // Find the CityPage component and add imageUrl prop
  const cityPageMatch = content.match(/(<CityPage\s+[^>]*)(>)/s);
  if (cityPageMatch) {
    const beforeClosing = cityPageMatch[1];
    const closing = cityPageMatch[2];
    
    // Add imageUrl prop before the closing >
    const updatedContent = content.replace(
      cityPageMatch[0],
      `${beforeClosing}\n      imageUrl={"${imageUrl}"}${closing}`
    );
    
    fs.writeFileSync(filePath, updatedContent);
    log(`Updated ${filename} with image URL`);
    return true;
  } else {
    log(`Could not find CityPage component in ${filename}`);
    return false;
  }
}

// Sleep function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function
async function main() {
  initializeTracking();
  log('Starting city image update process...');
  
  // Get all city files
  const cityFiles = fs.readdirSync(CITIES_DIR).filter(file => file.endsWith('.tsx'));
  const tracking = loadTracking();
  
  log(`Found ${cityFiles.length} city files`);
  
  let processedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  for (const filename of cityFiles) {
    const cityKey = filename.replace('.tsx', '').toLowerCase();
    
    // Skip if already processed
    if (tracking[cityKey] === 'done') {
      log(`Skipping ${filename} - already processed`);
      skippedCount++;
      continue;
    }
    
    try {
      const cityName = extractCityName(filename);
      log(`Processing ${filename} (${cityName})...`);
      
      // Fetch image from Unsplash
      const imageUrl = await fetchUnsplashImage(cityName);
      
      // Update the file
      const success = updateCityFile(filename, imageUrl);
      
      if (success) {
        // Mark as done in tracking
        tracking[cityKey] = 'done';
        saveTracking(tracking);
        processedCount++;
        log(`✓ Successfully updated ${filename}`);
      } else {
        errorCount++;
        log(`✗ Failed to update ${filename}`);
      }
      
      // Rotate API key if needed
      rotateApiKeyIfNeeded();
      
      // Add delay between requests
      await sleep(DELAY_BETWEEN_REQUESTS);
      
    } catch (error) {
      errorCount++;
      log(`✗ Error processing ${filename}: ${error.message}`);
      
      // Still rotate API key to avoid getting stuck
      rotateApiKeyIfNeeded();
      await sleep(DELAY_BETWEEN_REQUESTS);
    }
  }
  
  log(`\n=== SUMMARY ===`);
  log(`Total files: ${cityFiles.length}`);
  log(`Processed: ${processedCount}`);
  log(`Skipped: ${skippedCount}`);
  log(`Errors: ${errorCount}`);
  log(`Process completed!`);
}

// Run the script
main().catch(console.error);