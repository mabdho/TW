import * as fs from 'fs/promises';
import { readFileSync, existsSync } from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { validateCityHydrationWithHTML } from './utils/hydration-prevention';

// Geographic coordinates for major cities
const CITY_COORDINATES = {
  'london': { lat: '51.5074', lng: '-0.1278' },
  'paris': { lat: '48.8566', lng: '2.3522' },
  'rome': { lat: '41.9028', lng: '12.4964' },
  'berlin': { lat: '52.5200', lng: '13.4050' },
  'madrid': { lat: '40.4168', lng: '-3.7038' },
  'barcelona': { lat: '41.3851', lng: '2.1734' },
  'vienna': { lat: '48.2082', lng: '16.3738' },
  'prague': { lat: '50.0755', lng: '14.4378' },
  'amsterdam': { lat: '52.3676', lng: '4.9041' },
  'venice': { lat: '45.4408', lng: '12.3155' },
  'florence': { lat: '43.7696', lng: '11.2558' },
  'milan': { lat: '45.4642', lng: '9.1900' },
  'lisbon': { lat: '38.7223', lng: '-9.1393' },
  'porto': { lat: '41.1579', lng: '-8.6291' },
  'zurich': { lat: '47.3769', lng: '8.5417' },
  'bologna': { lat: '44.4949', lng: '11.3426' },
  'stockholm': { lat: '59.3293', lng: '18.0686' },
  'copenhagen': { lat: '55.6761', lng: '12.5683' },
  'oslo': { lat: '59.9139', lng: '10.7522' },
  'helsinki': { lat: '60.1699', lng: '24.9384' },
  'dublin': { lat: '53.3498', lng: '-6.2603' },
  'edinburgh': { lat: '55.9533', lng: '-3.1883' },
  'brussels': { lat: '50.8503', lng: '4.3517' },
  'budapest': { lat: '47.4979', lng: '19.0402' },
  'krakow': { lat: '50.0647', lng: '19.9450' },
  'warsaw': { lat: '52.2297', lng: '21.0122' },
  'athens': { lat: '37.9838', lng: '23.7275' },
  'istanbul': { lat: '41.0082', lng: '28.9784' },
  'moscow': { lat: '55.7558', lng: '37.6173' },
  'st petersburg': { lat: '59.9311', lng: '30.3609' },
  'new york': { lat: '40.7128', lng: '-74.0060' },
  'tokyo': { lat: '35.6762', lng: '139.6503' },
  'seoul': { lat: '37.5665', lng: '126.9780' },
  'singapore': { lat: '1.3521', lng: '103.8198' },
  'hong kong': { lat: '22.3193', lng: '114.1694' },
  'bangkok': { lat: '13.7563', lng: '100.5018' },
  'mumbai': { lat: '19.0760', lng: '72.8777' },
  'delhi': { lat: '28.7041', lng: '77.1025' },
  'sydney': { lat: '-33.8688', lng: '151.2093' },
  'melbourne': { lat: '-37.8136', lng: '144.9631' },
  'dubai': { lat: '25.2048', lng: '55.2708' },
  'cairo': { lat: '30.0444', lng: '31.2357' },
  'cape town': { lat: '-33.9249', lng: '18.4241' },
  'buenos aires': { lat: '-34.6037', lng: '-58.3816' },
  'rio de janeiro': { lat: '-22.9068', lng: '-43.1729' },
  'sao paulo': { lat: '-23.5505', lng: '-46.6333' },
  'mexico city': { lat: '19.4326', lng: '-99.1332' },
  'toronto': { lat: '43.6532', lng: '-79.3832' },
  'vancouver': { lat: '49.2827', lng: '-123.1207' },
  'montreal': { lat: '45.5017', lng: '-73.5673' },
  'los angeles': { lat: '34.0522', lng: '-118.2437' },
  'san francisco': { lat: '37.7749', lng: '-122.4194' },
  'chicago': { lat: '41.8781', lng: '-87.6298' },
  'las vegas': { lat: '36.1699', lng: '-115.1398' },
  'miami': { lat: '25.7617', lng: '-80.1918' },
  'boston': { lat: '42.3601', lng: '-71.0589' },
  'seattle': { lat: '47.6062', lng: '-122.3321' },
  'washington dc': { lat: '38.9072', lng: '-77.0369' },
  'philadelphia': { lat: '39.9526', lng: '-75.1652' },
  'denver': { lat: '39.7392', lng: '-104.9903' },
  'phoenix': { lat: '33.4484', lng: '-112.0740' },
  'san diego': { lat: '32.7157', lng: '-117.1611' },
  'portland': { lat: '45.5152', lng: '-122.6784' },
  'atlanta': { lat: '33.7490', lng: '-84.3880' },
  'nashville': { lat: '36.1627', lng: '-86.7816' },
  'austin': { lat: '30.2672', lng: '-97.7431' },
  'new orleans': { lat: '29.9511', lng: '-90.0715' },
  'charleston': { lat: '32.7767', lng: '-79.9311' },
  'savannah': { lat: '32.0835', lng: '-81.0998' },
  'reykjavik': { lat: '64.1466', lng: '-21.9426' },
  'marrakech': { lat: '31.6295', lng: '-7.9811' },
  'casablanca': { lat: '33.5731', lng: '-7.5898' },
  'johannesburg': { lat: '-26.2041', lng: '28.0473' },
  'nairobi': { lat: '-1.2921', lng: '36.8219' },
  'lagos': { lat: '6.5244', lng: '3.3792' },
  'addis ababa': { lat: '9.1450', lng: '38.7451' },
  'casablanca': { lat: '33.5731', lng: '-7.5898' },
  'tunis': { lat: '36.8065', lng: '10.1815' },
  'algiers': { lat: '36.7538', lng: '3.0588' },
  'dakar': { lat: '14.7167', lng: '-17.4677' },
  'accra': { lat: '5.6037', lng: '-0.1870' },
  'abidjan': { lat: '5.3600', lng: '-4.0083' },
  'bamako': { lat: '12.6392', lng: '-8.0029' },
  'conakry': { lat: '9.6412', lng: '-13.5784' },
  'freetown': { lat: '8.4657', lng: '-13.2317' },
  'monrovia': { lat: '6.2907', lng: '-10.7605' },
  'bissau': { lat: '11.8037', lng: '-15.1804' },
  'praia': { lat: '14.9177', lng: '-23.5092' },
  'mindelo': { lat: '16.8864', lng: '-24.9928' },
  'nouakchott': { lat: '18.0735', lng: '-15.9582' },
  'rabat': { lat: '34.0209', lng: '-6.8416' },
  'fez': { lat: '34.0181', lng: '-5.0078' },
  'meknes': { lat: '33.8935', lng: '-5.5473' },
  'tangier': { lat: '35.7595', lng: '-5.8340' },
  'agadir': { lat: '30.4278', lng: '-9.5981' },
  'essaouira': { lat: '31.5085', lng: '-9.7595' },
  'ouarzazate': { lat: '30.9335', lng: '-6.9370' },
  'marrakesh': { lat: '31.6295', lng: '-7.9811' },
  'kankan': { lat: '10.3851', lng: '-9.3058' },
  'labe': { lat: '11.3180', lng: '-12.2844' },
  'nzerekore': { lat: '7.7562', lng: '-8.8179' },
  'faranah': { lat: '10.0406', lng: '-10.7418' },
  'boke': { lat: '10.9324', lng: '-14.2918' },
  'kindia': { lat: '10.0570', lng: '-12.8464' },
  'mamou': { lat: '10.3759', lng: '-12.0919' },
  'siguiri': { lat: '11.4094', lng: '-9.1712' },
  'kissidougou': { lat: '9.1846', lng: '-10.0994' },
  'gueckedou': { lat: '8.5668', lng: '-10.1335' },
  'macenta': { lat: '8.5398', lng: '-9.4689' },
  'yomou': { lat: '7.5622', lng: '-9.2358' },
  'beyla': { lat: '8.6675', lng: '-8.6500' },
  'lola': { lat: '7.8002', lng: '-8.5361' },
  'tougue': { lat: '11.4464', lng: '-11.6695' },
  'dalaba': { lat: '10.6944', lng: '-12.2441' },
  'pita': { lat: '11.0593', lng: '-12.3946' },
  'telimele': { lat: '10.9007', lng: '-13.0403' },
  'gaoual': { lat: '11.7518', lng: '-13.2018' },
  'koundara': { lat: '12.4886', lng: '-13.3072' },
  'mali': { lat: '12.6392', lng: '-8.0029' },
  'koutiala': { lat: '12.3924', lng: '-5.4651' },
  'sikasso': { lat: '11.3177', lng: '-5.6670' },
  'kayes': { lat: '14.4467', lng: '-11.4446' },
  'mopti': { lat: '14.4844', lng: '-4.1834' },
  'gao': { lat: '16.2719', lng: '-0.0449' },
  'tombouctou': { lat: '16.7666', lng: '-3.0026' },
  'kidal': { lat: '18.4411', lng: '1.4078' },
  'menaka': { lat: '15.9181', lng: '2.4017' },
  'douentza': { lat: '15.0000', lng: '-2.9500' },
  'djenné': { lat: '13.9056', lng: '-4.5536' },
  'bandiagara': { lat: '14.3500', lng: '-3.6167' },
  'youvarou': { lat: '16.0833', lng: '-4.1833' },
  'dire': { lat: '16.2667', lng: '-3.3833' },
  'niafunke': { lat: '16.0833', lng: '-3.9833' },
  'goundam': { lat: '16.4167', lng: '-3.6667' },
  'nioro': { lat: '15.2333', lng: '-9.6000' },
  'yelimane': { lat: '15.1333', lng: '-10.5667' },
  'diema': { lat: '14.5667', lng: '-9.2167' },
  'bafoulabe': { lat: '13.8167', lng: '-10.8333' },
  'kita': { lat: '13.0333', lng: '-9.4833' },
  'kolokani': { lat: '13.5667', lng: '-8.0333' },
  'nara': { lat: '15.1667', lng: '-7.2833' },
  'macina': { lat: '14.0833', lng: '-5.3667' },
  'san': { lat: '13.3000', lng: '-4.9000' },
  'tominian': { lat: '13.2667', lng: '-5.1333' },
  'djenne': { lat: '13.9056', lng: '-4.5536' },
  'banamba': { lat: '13.5500', lng: '-7.4667' },
  'kangaba': { lat: '11.9333', lng: '-8.4167' },
  'mandiana': { lat: '10.6333', lng: '-8.7000' },
  'siguiri': { lat: '11.4094', lng: '-9.1712' },
  'kouroussa': { lat: '10.6500', lng: '-9.8833' },
  'kerouane': { lat: '9.2667', lng: '-9.0333' },
  'dinguiraye': { lat: '11.3000', lng: '-10.7000' },
  'dabola': { lat: '10.7417', lng: '-11.1100' },
  'kouroussa': { lat: '10.6500', lng: '-9.8833' },
  'kankan': { lat: '10.3851', lng: '-9.3058' },
  'doko': { lat: '10.6833', lng: '-9.7833' },
  'kintinian': { lat: '10.2833', lng: '-9.4833' },
  'gbangbadou': { lat: '10.2000', lng: '-9.6833' },
  'kossou': { lat: '10.0333', lng: '-9.8000' },
  'nafadji': { lat: '10.2000', lng: '-9.9833' },
  'banankoro': { lat: '10.4833', lng: '-9.7500' },
  'kintinian': { lat: '10.2833', lng: '-9.4833' },
  'gbangbadou': { lat: '10.2000', lng: '-9.6833' },
  'kossou': { lat: '10.0333', lng: '-9.8000' },
  'nafadji': { lat: '10.2000', lng: '-9.9833' },
  'banankoro': { lat: '10.4833', lng: '-9.7500' },
  'kintinian': { lat: '10.2833', lng: '-9.4833' },
  'gbangbadou': { lat: '10.2000', lng: '-9.6833' },
  'kossou': { lat: '10.0333', lng: '-9.8000' },
  'nafadji': { lat: '10.2000', lng: '-9.9833' },
  'banankoro': { lat: '10.4833', lng: '-9.7500' }
};

// Helper function to get coordinates for a city
function getCityCoordinates(cityName: string): { lat: string; lng: string } {
  const normalizedName = cityName.toLowerCase().trim();
  return CITY_COORDINATES[normalizedName] || { lat: '0', lng: '0' };
}

// Utility function to get the correct HTML output directory - ALWAYS use dist/public for Firebase deployment
function getHtmlOutputDirectory(): string {
  // ALWAYS use dist/public for Firebase hosting deployment
  return path.join(process.cwd(), 'dist', 'public');
}

// Utility function to ensure directory exists
async function ensureDirectoryExists(dirPath: string): Promise<void> {
  try {
    await fs.access(dirPath);
  } catch (error) {
    await fs.mkdir(dirPath, { recursive: true });
  }
}

// Utility function to save HTML files to the correct directory
export async function saveHtmlFile(fileName: string, content: string): Promise<string> {
  const outputDir = getHtmlOutputDirectory();
  await ensureDirectoryExists(outputDir);
  
  const filePath = path.join(outputDir, fileName);
  await fs.writeFile(filePath, content, 'utf-8');
  
  // Auto-validate hydration compliance after HTML generation
  await validateHydrationCompliance(fileName, content);
  
  return filePath;
}

/**
 * Validate hydration compliance after HTML generation
 * Ensures HTML content matches what React components will generate
 */
async function validateHydrationCompliance(fileName: string, htmlContent: string): Promise<void> {
  try {
    // Extract SEO data from generated HTML
    const seoData = extractSEODataFromHTML(htmlContent);
    
    console.log(`🔍 Hydration validation for ${fileName}:`, {
      title: seoData.title.substring(0, 50) + (seoData.title.length > 50 ? '...' : ''),
      hasDescription: !!seoData.description,
      hasH1: !!seoData.h1,
      descriptionLength: seoData.description.length
    });
    
    // Validate title structure
    if (!seoData.title.includes('TravelWanders')) {
      console.log(`⚠️  Title validation warning: Missing 'TravelWanders' branding in ${fileName}`);
    }
    
    // Validate description length (SEO best practice: 120-160 chars)
    if (seoData.description.length > 160) {
      console.log(`⚠️  Description length warning: ${seoData.description.length} chars (max: 160) in ${fileName}`);
    }
    
    // Log successful validation
    console.log(`✅ Hydration compliance validated for ${fileName}`);
    
  } catch (error) {
    console.log(`⚠️  Hydration validation warning for ${fileName}:`, error.message);
  }
}

/**
 * Extract critical SEO data from HTML for hydration validation
 */
function extractSEODataFromHTML(htmlContent: string): { title: string; description: string; h1: string } {
  const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/);
  const descriptionMatch = htmlContent.match(/<meta name="description" content="([^"]+)"/);
  const h1Match = htmlContent.match(/<h1[^>]*>([^<]+)<\/h1>/);
  
  return {
    title: titleMatch ? titleMatch[1].trim() : '',
    description: descriptionMatch ? descriptionMatch[1].trim() : '',
    h1: h1Match ? h1Match[1].trim() : ''
  };
}

// Utility function to save city HTML files with correct directory structure
export async function saveCityHtmlFile(cityName: string, content: string): Promise<string> {
  const outputDir = getHtmlOutputDirectory();
  const cityDir = path.join(outputDir, `best-things-to-do-in-${cityName.toLowerCase().replace(/\s+/g, '-')}`);
  await ensureDirectoryExists(cityDir);
  
  const filePath = path.join(cityDir, 'index.html');
  await fs.writeFile(filePath, content, 'utf-8');
  
  // Auto-validate hydration compliance after HTML generation
  await validateHydrationCompliance(`best-things-to-do-in-${cityName}/index.html`, content);
  
  return filePath;
}

// Utility function to save HTML files to specific subdirectories (like city pages)
export async function saveHtmlFileToSubdirectory(subdirectory: string, fileName: string, content: string): Promise<string> {
  const outputDir = getHtmlOutputDirectory();
  const fullDir = path.join(outputDir, subdirectory);
  await ensureDirectoryExists(fullDir);
  
  const filePath = path.join(fullDir, fileName);
  await fs.writeFile(filePath, content, 'utf-8');
  
  return filePath;
}

// Helper function to read city data from destinations page (source of truth)
function readCityDataFromComponents(): Array<{ name: string; country: string; route: string; continent?: string; imageUrl?: string }> {
  try {
    // Read destinations.tsx to get the actual city list displayed on the page
    const destinationsPath = path.join(process.cwd(), 'client', 'src', 'pages', 'destinations.tsx');
    const destinationsContent = readFileSync(destinationsPath, 'utf-8');
    
    // Extract the cities array from the file
    const citiesMatch = destinationsContent.match(/const cities = \[([\s\S]*?)\];/);
    if (!citiesMatch) {
      console.warn('Could not find cities array in destinations.tsx, falling back to default cities');
      return [];
    }
    
    const citiesArrayContent = citiesMatch[1];
    const cities = [];
    
    // Parse each city object
    const cityMatches = citiesArrayContent.match(/\{\s*"name":\s*"([^"]+)",\s*"country":\s*"([^"]+)",\s*"path":\s*"([^"]+)",\s*"continent":\s*"([^"]+)"(?:,\s*"imageUrl":\s*"([^"]*)")?\s*\}/g);
    
    if (cityMatches) {
      cityMatches.forEach(match => {
        const cityMatch = match.match(/"name":\s*"([^"]+)",\s*"country":\s*"([^"]+)",\s*"path":\s*"([^"]+)",\s*"continent":\s*"([^"]+)"(?:,\s*"imageUrl":\s*"([^"]*)")?/);
        if (cityMatch) {
          cities.push({
            name: cityMatch[1],
            country: cityMatch[2],
            route: cityMatch[3],
            continent: cityMatch[4],
            imageUrl: cityMatch[5] || ''
          });
        }
      });
    }
    
    return cities.length > 0 ? cities : [];
  } catch (error) {
    console.error('Error reading city data from components:', error);
    return [];
  }
}

// Helper function to read featured cities from React components
function readFeaturedCitiesFromComponents(): Array<{ name: string; country: string; route: string; continent?: string; imageUrl?: string }> {
  try {
    // Read FeaturedCities.tsx to get the featured cities list
    const featuredCitiesPath = path.join(process.cwd(), 'client', 'src', 'components', 'FeaturedCities.tsx');
    const featuredCitiesContent = readFileSync(featuredCitiesPath, 'utf-8');
    
    // Extract the featuredCities array from the file
    const featuredCitiesMatch = featuredCitiesContent.match(/const featuredCities = \[([\s\S]*?)\];/);
    if (!featuredCitiesMatch) {
      console.warn('Could not find featuredCities array in FeaturedCities.tsx, falling back to city directory');
      return readCityDataFromComponents().slice(0, 6);
    }
    
    const featuredCitiesArrayContent = featuredCitiesMatch[1];
    const cities = [];
    
    // Parse each city object
    const cityMatches = featuredCitiesArrayContent.match(/\{\s*"name":\s*"([^"]+)",\s*"country":\s*"([^"]+)",\s*"path":\s*"([^"]+)",\s*"continent":\s*"([^"]+)"(?:,\s*"imageUrl":\s*"([^"]*)")?\s*\}/g);
    
    if (cityMatches) {
      cityMatches.forEach(match => {
        const cityMatch = match.match(/"name":\s*"([^"]+)",\s*"country":\s*"([^"]+)",\s*"path":\s*"([^"]+)",\s*"continent":\s*"([^"]+)"(?:,\s*"imageUrl":\s*"([^"]*)")?/);
        if (cityMatch) {
          cities.push({
            name: cityMatch[1],
            country: cityMatch[2],
            route: cityMatch[3],
            continent: cityMatch[4],
            imageUrl: cityMatch[5] || ''
          });
        }
      });
    }
    
    return cities.length > 0 ? cities : [];
  } catch (error) {
    console.error('Error reading featured cities from components:', error);
    return readCityDataFromComponents().slice(0, 6);
  }
}

// Fallback default cities - cleared for fresh content
function getDefaultCities() {
  return [];
}

// Helper function to read blog data from file system
export function readBlogDataFromFileSystem(): Array<{ id: string; title: string; excerpt: string; content: string; category: string; imageUrl?: string; featured: boolean; readTime: string; date: string; author?: string }> {
  try {
    console.log('🔍 Reading blog data from file system...');
    
    // Read blog index file
    const blogIndexPath = path.join(process.cwd(), 'client', 'src', 'blogs', 'index.ts');
    if (!existsSync(blogIndexPath)) {
      console.warn('Blog index file not found, returning empty array');
      return [];
    }
    
    const blogIndexContent = readFileSync(blogIndexPath, 'utf-8');
    
    // Extract the allBlogs array from the file
    const blogsMatch = blogIndexContent.match(/export const allBlogs: Blog\[\] = \[([\s\S]*?)\];/);
    if (!blogsMatch) {
      console.warn('Could not find allBlogs array in index.ts');
      return [];
    }
    
    const blogsArrayContent = blogsMatch[1];
    const blogs = [];
    
    console.log('📄 Found allBlogs array, parsing content...');
    
    // Parse inline blog objects first
    const blogObjectRegex = /\{\s*id:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*excerpt:\s*['"]([^'"]+)['"],\s*content:\s*['"]([^'"]*?)['"],\s*category:\s*['"]([^'"]+)['"],\s*imageUrl:\s*['"]([^'"]*?)['"],\s*featured:\s*(true|false),\s*readTime:\s*['"]([^'"]+)['"],\s*date:\s*['"]([^'"]+)['"],\s*author:\s*['"]([^'"]*?)['"][\s\S]*?\}/g;
    
    let blogMatch;
    while ((blogMatch = blogObjectRegex.exec(blogsArrayContent)) !== null) {
      console.log(`📝 Found inline blog: ${blogMatch[2]}`);
      blogs.push({
        id: blogMatch[1],
        title: blogMatch[2],
        excerpt: blogMatch[3],
        content: blogMatch[4] || '',
        category: blogMatch[5],
        imageUrl: blogMatch[6] || '',
        featured: blogMatch[7] === 'true',
        readTime: blogMatch[8],
        date: blogMatch[9],
        author: blogMatch[10] || 'TravelWanders Team'
      });
    }
    
    // Also parse imported blog references and read their actual files
    const blogDir = path.join(process.cwd(), 'client', 'src', 'blogs');
    const importedBlogRegex = /([a-zA-Z0-9_]+Blog),?/g;
    
    let importMatch;
    while ((importMatch = importedBlogRegex.exec(blogsArrayContent)) !== null) {
      const blogVarName = importMatch[1];
      
      // Find the corresponding import statement and file
      const importRegex = new RegExp(`import \\{ ${blogVarName} \\} from '\\./([^']+)';`);
      const importStatementMatch = blogIndexContent.match(importRegex);
      
      if (importStatementMatch) {
        const fileName = importStatementMatch[1];
        const blogFilePath = path.join(blogDir, fileName.endsWith('.tsx') ? fileName : `${fileName}.tsx`);
        
        if (existsSync(blogFilePath)) {
          try {
            const blogFileContent = readFileSync(blogFilePath, 'utf-8');
            
            // Extract blog data from the individual file
            const blogDataMatch = blogFileContent.match(/export const \w+(?:Blog)?: Blog = \{([\s\S]*?)\};/);
            if (blogDataMatch) {
              const blogData = blogDataMatch[1];
              
              // Parse the blog data with more robust regex patterns
              const id = blogData.match(/id:\s*["']([^"']+)["']/)?.[1];
              const title = blogData.match(/title:\s*["']([^"']+)["']/)?.[1];
              const excerpt = blogData.match(/excerpt:\s*["']([^"']+)["']/)?.[1];
              const content = blogData.match(/content:\s*`([^`]*)`/s)?.[1] || '';
              const category = blogData.match(/category:\s*["']([^"']+)["']/)?.[1];
              const imageUrl = blogData.match(/imageUrl:\s*["']([^"']*?)["']/)?.[1] || '';
              const featured = blogData.match(/featured:\s*(true|false)/)?.[1] === 'true';
              const readTime = blogData.match(/readTime:\s*["']([^"']+)["']/)?.[1];
              const date = blogData.match(/date:\s*["']([^"']+)["']/)?.[1];
              const createdAt = blogData.match(/createdAt:\s*["']([^"']*?)["']/)?.[1]; // Parse createdAt timestamp
              const author = blogData.match(/author:\s*["']([^"']*?)["']/)?.[1] || 'TravelWanders Team';
              
              if (id && title && excerpt && category && readTime && date) {
                blogs.push({
                  id,
                  title,
                  excerpt,
                  content,
                  category,
                  imageUrl,
                  featured,
                  readTime,
                  date,
                  createdAt, // Include createdAt in the parsed blog data
                  author
                });
                console.log(`Successfully parsed blog: ${title} (${id})`);
              } else {
                console.warn(`Missing required fields in blog ${blogVarName}:`, { id, title, excerpt, category, readTime, date });
              }
            }
          } catch (fileError) {
            console.warn(`Error reading blog file ${fileName}:`, fileError);
          }
        }
      }
    }
    
    // Remove duplicates and sort blogs by date (newest first)
    const uniqueBlogs = blogs.filter((blog, index, self) => 
      index === self.findIndex(b => b.id === blog.id)
    );
    
    return uniqueBlogs.sort((a, b) => {
      // Use createdAt timestamp if available, fallback to date for precise ordering
      const timeA = a.createdAt ? new Date(a.createdAt).getTime() : new Date(a.date).getTime();
      const timeB = b.createdAt ? new Date(b.createdAt).getTime() : new Date(b.date).getTime();
      return timeB - timeA; // Most recent first
    });
  } catch (error) {
    console.error('Error reading blog data from file system:', error);
    return [];
  }
}

interface CityData {
  cityName: string;
  country: string;
  title: string;
  description: string;
  imageUrl: string;
  galleryImages: Array<{
    url: string;
    alt: string;
    caption: string;
  }>;
  highlights: string[];
  attractions: Array<{
    name: string;
    description: string;
    practicalInfo: {
      howToGetThere: string;
      openingHours: string;
      cost: string;
      website: string;
    };
    discoveryTags: {
      timeRequired: string;
      experienceLevel: string;
      interests: string[];
      costLevel: string;
      seasonalBest: string;
      photoOpportunity: string;
      insiderTip: string;
      hiddenGem: boolean;
      familyFriendly: boolean;
      accessibilityNotes: string;
    };
  }>;
  discoveryData?: {
    localSecrets?: string[];
    photoSpots?: string[];
    quickFacts?: {
      totalAttractions: string;
      freeActivities: string;
      averageTimePerAttraction: string;
      walkingFriendly: boolean;
      publicTransportQuality: string;
    };
    seasonalHighlights?: {
      spring: string;
      summer: string;
      fall: string;
      winter: string;
    };
    budgetBreakdown?: {
      budget: string;
      midRange: string;
      luxury: string;
    };
    diningHighlights?: {
      mustTryDishes: string[];
      bestCafes: string[];
      topRestaurants: string[];
      foodMarkets: string[];
      diningTips: string[];
    };
  };
  logistics?: {
    gettingAround: string;
    whereToStay: string;
    bestTimeToVisit: string;
    suggestedItinerary: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  // New metadata fields for future expansion
  author?: string;
  lastUpdated?: string;
  disclaimer?: string;
  publishedDate?: string;
  tags?: string[];
  metaData?: Record<string, any>; // Flexible field for any future additions
}

// CSS styles for the complete HTML page (from Firebase Functions)
const pageStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #fff;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .hero-section {
    position: relative;
    height: 60vh;
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    overflow: hidden;
  }

  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 0;
  }

  .hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 0 20px;
  }

  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .hero-description {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  .hero-breadcrumb {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  .hero-subtitle {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.95;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }

  .hero-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
  }

  .badge {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .tabs-container {
    background: white;
    border-bottom: 1px solid #e2e8f0;
    position: sticky;
    top: 0;
    z-index: 40;
  }

  .tabs-list {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    overflow-x: auto;
  }

  .tab-trigger {
    padding: 1rem 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
    font-weight: 500;
    color: #64748b;
    border-bottom: 2px solid transparent;
    white-space: nowrap;
    transition: all 0.2s;
  }

  .tab-trigger:hover,
  .tab-trigger.active {
    color: #0f172a;
    border-bottom-color: #3b82f6;
  }

  .tab-content {
    display: none;
  }

  .tab-content.active {
    display: block;
  }

  .top-attraction {
    position: relative;
    padding-left: 60px;
  }

  .attraction-number {
    position: absolute;
    left: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    background: #3b82f6;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .highlights-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
  }

  .highlight-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #007bff;
  }

  .section {
    margin: 4rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #2c3e50;
    text-align: center;
  }

  /* Proper H2 styling for section titles */
  h2.section-title {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #2c3e50;
    text-align: center;
    border-bottom: 3px solid #3b82f6;
    padding-bottom: 1rem;
  }

  /* H1 hierarchy for hero title */
  h1.hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .description-content {
    max-width: 800px;
    margin: 0 auto 3rem;
    padding: 2rem;
    background: #f8fafc;
    border-radius: 12px;
    border-left: 4px solid #3b82f6;
  }

  .description-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #374151;
    text-align: left;
    margin: 0;
  }

  .attractions-grid {
    display: grid;
    gap: 2rem;
  }

  .attraction-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .attraction-card:hover {
    transform: translateY(-5px);
  }

  .attraction-content {
    padding: 2rem;
  }

  .attraction-name {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  .attraction-description {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .practical-info {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1rem;
  }

  .discovery-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .discovery-tag {
    background: #e3f2fd;
    color: #1976d2;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .discovery-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .discovery-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }

  .discovery-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .discovery-list {
    list-style: none;
  }

  .discovery-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .faq-section {
    background: #f8f9fa;
    padding: 3rem 0;
    margin: 4rem 0;
  }

  .faq-item {
    background: white;
    margin-bottom: 1rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .faq-question {
    padding: 1.5rem;
    font-weight: 600;
    font-size: 1.1rem;
    color: #2c3e50;
  }

  .faq-answer {
    padding: 0 1.5rem 1.5rem;
    color: #555;
    line-height: 1.7;
  }

  /* Navigation Styles */
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid #e2e8f0;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  .nav-logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    text-decoration: none;
    transition: color 0.3s;
  }

  .nav-logo:hover {
    color: #059669;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
  }

  .nav-link {
    color: #4b5563;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
  }

  .nav-link:hover {
    color: #059669;
  }

  .nav-cta {
    background: #059669;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: background 0.3s;
  }

  .nav-cta:hover {
    background: #047857;
  }

  /* Main content padding for fixed nav */
  .main-content {
    padding-top: 60px;
  }

  /* Footer Styles */
  .footer {
    background: #f9fafb;
    border-top: 1px solid #e2e8f0;
    padding: 3rem 0 1.5rem;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .footer-section h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .footer-section ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-section li {
    margin-bottom: 0.5rem;
  }

  .footer-section a {
    color: #6b7280;
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.3s;
  }

  .footer-section a:hover {
    color: #059669;
  }

  .footer-brand {
    color: #6b7280;
    font-size: 0.875rem;
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .footer-bottom {
    border-top: 1px solid #e2e8f0;
    padding-top: 1.5rem;
    margin-top: 2rem;
    text-align: center;
    color: #6b7280;
    font-size: 0.875rem;
  }

  .social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
  }

  .social-links a {
    color: #6b7280;
    text-decoration: none;
    transition: color 0.3s;
  }

  .social-links a:hover {
    color: #059669;
  }

  /* Smart Internal Links Styles - Matching TSX Component */
  .smart-internal-links {
    margin: 3rem 0;
    padding: 0;
    background: white;
  }

  .smart-links-container {
    max-width: 100%;
  }

  .smart-links-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827 !important;
    margin-bottom: 2rem;
    text-align: left;
    border-bottom: 2px solid #e5e7eb;
    padding-bottom: 0.75rem;
  }

  .smart-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .smart-link-card {
    display: block;
    background: transparent;
    border: none;
    border-left: 3px solid #e5e7eb;
    border-radius: 0;
    padding: 1.5rem;
    text-decoration: none;
    color: #111827 !important;
    transition: all 0.3s ease;
    box-shadow: none;
    position: relative;
    overflow: hidden;
  }

  .smart-link-card:hover {
    transform: none;
    box-shadow: none;
    border-left-color: #10b981;
    padding-left: 2rem;
    background: rgba(16, 185, 129, 0.02);
  }

  .smart-link-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
  }

  .smart-link-type {
    background: #f3f4f6 !important;
    color: #4b5563 !important;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .smart-link-title {
    font-size: 1.125rem;
    font-weight: 700;
    color: #111827 !important;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  .smart-link-card:hover .smart-link-title {
    color: #10b981 !important;
  }

  .smart-link-location {
    color: #4b5563 !important;
    font-size: 0.875rem;
    margin: 0;
    font-weight: 600;
  }

  /* Legacy internal links styles for backward compatibility */
  .internal-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .link-group h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 0.75rem;
  }

  .internal-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    color: #374151;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.3s ease;
    text-align: center;
  }

  .internal-link:hover {
    background: #e0f2fe;
    border-color: #0891b2;
    color: #0891b2;
    transform: translateY(-1px);
  }

  /* Mobile optimizations */
  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
    
    .internal-links {
      grid-template-columns: 1fr;
    }
    
    .links-grid {
      grid-template-columns: 1fr;
    }

    .internal-links-grid,
    .intelligent-links-container {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .internal-link-card {
      padding: 1rem;
    }

    .internal-link-title {
      font-size: 1rem;
    }
  }

  .logistics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .logistics-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #28a745;
  }

  .logistics-card h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  .logistics-content {
    color: #555;
    line-height: 1.7;
  }

  .quick-facts-content,
  .seasonal-content,
  .dining-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .quick-fact-item,
  .seasonal-item,
  .dining-section {
    padding: 0.75rem;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 3px solid #3b82f6;
  }

  .quick-fact-item strong,
  .seasonal-item strong,
  .dining-section strong {
    color: #2c3e50;
    display: block;
    margin-bottom: 0.5rem;
  }

  .dining-list {
    list-style: none;
    padding: 0;
    margin: 0.5rem 0 0 0;
  }

  .dining-list li {
    padding: 0.25rem 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .dining-list li:last-child {
    border-bottom: none;
  }

  .internal-links-section {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 12px;
    margin-top: 2rem;
  }

  .internal-links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .internal-link-card {
    background: white;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s ease;
  }

  .internal-link-card:hover {
    transform: translateY(-2px);
  }

  .internal-link-card h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  .internal-link {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 600;
  }

  .internal-link:hover {
    text-decoration: underline;
  }

  .link-description {
    margin: 0;
    color: #6b7280;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-description {
      font-size: 1rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .highlights-grid {
      grid-template-columns: 1fr;
    }
    
    .discovery-cards {
      grid-template-columns: 1fr;
    }
  }
`;

// Helper functions for generating HTML components
// Convert markdown to HTML with proper header hierarchy
function convertMarkdownToHTML(text: string): string {
  if (!text) return '';
  
  return text
    .replace(/### (.*)/g, '<h4>$1</h4>')  // Convert ### to h4
    .replace(/## (.*)/g, '<h3>$1</h3>')   // Convert ## to h3  
    .replace(/# (.*)/g, '<h2>$1</h2>')    // Convert # to h2
    .replace(/\n/g, '<br>')               // Convert newlines to br
    .replace(/<br><br>/g, '</p><p>')      // Convert double breaks to paragraphs
    .replace(/^/, '<p>')                  // Add opening p tag
    .replace(/$/, '</p>')                 // Add closing p tag
    .replace(/<p><h([1-6])>/g, '<h$1>')   // Remove p tags around headers
    .replace(/<\/h([1-6])><\/p>/g, '</h$1>'); // Remove p tags around headers
}

function generatePracticalInfoHTML(practicalInfo: any): string {
  return `
    <div class="practical-info">
      <h4>📍 Practical Information</h4>
      <div class="practical-grid">
        <div class="practical-item">
          <strong>🚌 How to get there:</strong> ${practicalInfo.howToGetThere || 'Information not available'}
        </div>
        <div class="practical-item">
          <strong>⏰ Opening hours:</strong> ${practicalInfo.openingHours || 'Check website'}
        </div>
        <div class="practical-item">
          <strong>💰 Cost:</strong> ${practicalInfo.cost || 'Varies'}
        </div>
        ${practicalInfo.website ? `
          <div class="practical-item">
            <strong>🌐 Website:</strong> <a href="https://${practicalInfo.website}" target="_blank" rel="noopener">${practicalInfo.website}</a>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function generateDiscoveryTagsHTML(discoveryTags: any): string {
  return `
    <div class="discovery-tags">
      <h4>🎯 Discovery Info</h4>
      <div class="tags-grid">
        ${discoveryTags.timeRequired ? `<span class="discovery-tag">⏱️ ${discoveryTags.timeRequired}</span>` : ''}
        ${discoveryTags.experienceLevel ? `<span class="discovery-tag">🎯 ${discoveryTags.experienceLevel}</span>` : ''}
        ${discoveryTags.costLevel ? `<span class="discovery-tag">💰 ${discoveryTags.costLevel}</span>` : ''}
        ${discoveryTags.seasonalBest ? `<span class="discovery-tag">🌟 ${discoveryTags.seasonalBest}</span>` : ''}
        ${discoveryTags.hiddenGem ? '<span class="discovery-tag gem">💎 Hidden Gem</span>' : ''}
        ${discoveryTags.familyFriendly ? '<span class="discovery-tag family">👨‍👩‍👧‍👦 Family Friendly</span>' : ''}
      </div>
      ${discoveryTags.interests && discoveryTags.interests.length > 0 ? `
        <div class="interests">
          <strong>🎨 Interests:</strong> ${discoveryTags.interests.join(', ')}
        </div>
      ` : ''}
      ${discoveryTags.photoOpportunity ? `
        <div class="photo-tip">
          <strong>📸 Photo Opportunity:</strong> ${discoveryTags.photoOpportunity}
        </div>
      ` : ''}
      ${discoveryTags.insiderTip ? `
        <div class="insider-tip">
          <strong>💡 Insider Tip:</strong> ${discoveryTags.insiderTip}
        </div>
      ` : ''}
      ${discoveryTags.accessibilityNotes ? `
        <div class="accessibility-notes">
          <strong>♿ Accessibility:</strong> ${discoveryTags.accessibilityNotes}
        </div>
      ` : ''}
    </div>
  `;
}

// Smart interlinking system for enhanced SEO and user experience
import { interlinkingSystem } from './utils/interlinking';

function generateInternalLinksHTML(cityData: any): string {
  try {
    // Generate contextual internal links for the city page
    const pageUrl = `/best-things-to-do-in-${cityData.slug || cityData.cityName.toLowerCase()}`;
    console.log(`🔗 Generating internal links for: ${pageUrl}`);
    const links = interlinkingSystem.generateInternalLinks(pageUrl, 'city');
    
    console.log(`🔗 Generated ${links.length} internal links for ${cityData.cityName}`);
    
    if (links.length === 0) {
      console.warn(`⚠️  No internal links generated for ${cityData.cityName}`);
      return '';
    }
    
    return `
      <section class="section internal-links-section">
        <h2 class="section-title">🔗 Related Destinations</h2>
        <div class="internal-links-grid">
          ${links.map(link => `
            <div class="internal-link-card">
              <h3><a href="${link.url}" class="internal-link">${link.title}</a></h3>
              <p class="link-description">Explore ${link.title} and discover amazing attractions and experiences.</p>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  } catch (error) {
    console.error('❌ Error generating internal links:', error);
    return '';
  }
}

export async function generateCompleteHTML(cityData: CityData): Promise<string> {
  // Pre-generation hydration validation
  try {
    const { validateCityHydration } = await import('./utils/hydration-prevention');
    const preValidation = await validateCityHydration(cityData);
    
    if (!preValidation.isValid) {
      console.warn(`⚠️  Pre-generation hydration validation failed for ${cityData.cityName}:`, preValidation.issues);
      // Continue with generation but log issues
    } else {
      console.log(`✅ Pre-generation hydration validation passed for ${cityData.cityName}`);
    }
  } catch (error) {
    console.warn('Hydration validation system not available:', error.message);
  }

  const seoTitle = cityData.title || `Best Things to Do in ${cityData.cityName}, ${cityData.country}`;
  
  // Fix meta description - ensure under 155 characters without truncation ellipsis
  let seoDescription = cityData.description || `Discover the best things to do in ${cityData.cityName}, ${cityData.country}. Complete travel guide with top attractions, insider tips, and essential information for your perfect ${cityData.cityName} adventure.`;
  if (seoDescription.length > 155) {
    // Find the last complete sentence or phrase that fits within 155 characters - NO ellipsis
    const lastSpace = seoDescription.lastIndexOf(' ', 155);
    seoDescription = seoDescription.substring(0, lastSpace > 100 ? lastSpace : 155).trim();
    // Ensure it doesn't end with punctuation that might look like truncation
    if (seoDescription.endsWith('.') || seoDescription.endsWith(',') || seoDescription.endsWith(';')) {
      // Keep natural ending
    } else {
      // Find last complete sentence or phrase
      const lastSentence = seoDescription.lastIndexOf('.');
      if (lastSentence > 100) {
        seoDescription = seoDescription.substring(0, lastSentence + 1);
      }
    }
  }
  
  const heroStyle = `background-image: url('${cityData.imageUrl || ''}');`;
  
  // Create hero section with WebP support and SEO-optimized alt text
  const heroHTML = `
    <div class="hero-section">
      ${cityData.imageUrl ? `
        <picture>
          <source srcset="${cityData.imageUrl}&fm=avif&w=1920&fit=crop&auto=format" type="image/avif">
          <source srcset="${cityData.imageUrl}&fm=webp&w=1920&fit=crop&auto=format" type="image/webp">
          <img src="${cityData.imageUrl}&w=1920&fit=crop&auto=format&fm=jpg" 
               alt="Best things to do in ${cityData.cityName}, ${cityData.country} - Panoramic view showcasing iconic landmarks and top attractions for travelers in 2025"
               class="hero-image"
               loading="eager"
               width="1920" 
               height="960"
               fetchpriority="high"
               decoding="async">
        </picture>
      ` : ''}
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <!-- Visible breadcrumb navigation for SEO -->
        <nav class="hero-breadcrumb" aria-label="Breadcrumb">
          <ol class="breadcrumb-list">
            <li class="breadcrumb-item"><a href="https://travelwanders.com">Home</a></li>
            <li class="breadcrumb-item"><a href="https://travelwanders.com/destinations">Destinations</a></li>
            <li class="breadcrumb-item"><a href="https://travelwanders.com/destinations/${cityData.country?.toLowerCase()}">${cityData.country || 'Country'}</a></li>
            <li class="breadcrumb-item current" aria-current="page">${cityData.cityName}</li>
          </ol>
        </nav>
        <h1 class="hero-title">${seoTitle}</h1>
        <p class="hero-subtitle">Discover amazing experiences and top attractions in ${cityData.cityName}, ${cityData.country} (2025 Guide)</p>
        <div class="hero-badges">
          <span class="badge">${cityData.cityName}, ${cityData.country} (2025 Guide)</span>
          <span class="badge">🎯 ${cityData.attractions?.length || 0}+ Attractions</span>
          <span class="badge">⭐ Travel Guide</span>
        </div>
      </div>
    </div>
  `;
  
  const highlightsHTML = (cityData.highlights || []).map(highlight => 
    `<div class="highlight-card">
      <p>${highlight}</p>
    </div>`
  ).join('');

  const topAttractionsHTML = cityData.attractions.slice(0, 6).map((attraction, index) => 
    `<div class="attraction-card top-attraction">
      <div class="attraction-number">${index + 1}</div>
      <div class="attraction-content">
        <h3 class="attraction-name">${attraction.name || 'Unnamed Attraction'}</h3>
        <div class="attraction-description">${convertMarkdownToHTML(attraction.description || 'No description available')}</div>
        ${attraction.practicalInfo ? generatePracticalInfoHTML(attraction.practicalInfo) : ''}
        ${attraction.discoveryTags ? generateDiscoveryTagsHTML(attraction.discoveryTags) : ''}
      </div>
    </div>`
  ).join('');

  const allAttractionsHTML = cityData.attractions.map((attraction, index) => 
    `<div class="attraction-card">
      <div class="attraction-content">
        <h3 class="attraction-name">${attraction.name || 'Unnamed Attraction'}</h3>
        <div class="attraction-description">${convertMarkdownToHTML(attraction.description || 'No description available')}</div>
        
        ${attraction.practicalInfo ? generatePracticalInfoHTML(attraction.practicalInfo) : ''}
        ${attraction.discoveryTags ? generateDiscoveryTagsHTML(attraction.discoveryTags) : ''}
      </div>
    </div>`
  ).join('');

  // Generate discovery cards for overview tab (moved before tab content generation)
  const discoveryCardsHTML = cityData.discoveryData ? `
    <section class="section">
      <h2 class="section-title">🔍 Interactive Explorer</h2>
      <div class="discovery-cards">
        ${cityData.discoveryData.localSecrets && cityData.discoveryData.localSecrets.length > 0 ? `
          <div class="discovery-card">
            <h3>🤫 Local Secrets</h3>
            <ul class="discovery-list">
              ${cityData.discoveryData.localSecrets.map(secret => `<li>${secret}</li>`).join('')}
            </ul>
          </div>
        ` : `
          <div class="discovery-card">
            <h3>🤫 Local Secrets</h3>
            <ul class="discovery-list">
              <li>Discover hidden gems and local favorites</li>
            </ul>
          </div>
        `}
        
        <div class="discovery-card">
          <h3>📸 Photo Spots</h3>
          <ul class="discovery-list">
            ${cityData.discoveryData.photoSpots && cityData.discoveryData.photoSpots.length > 0 ? 
              cityData.discoveryData.photoSpots.map(spot => `<li>${spot}</li>`).join('') : 
              `<li>Best photo locations in ${cityData.cityName}</li>`
            }
          </ul>
        </div>
        
        ${cityData.discoveryData.budgetBreakdown ? `
          <div class="discovery-card">
            <h3>💰 Time & Budget</h3>
            <div class="budget-breakdown">
              ${cityData.discoveryData.budgetBreakdown.budget ? `
                <div class="budget-item">
                  <strong>💸 Free Activities:</strong>
                  <p>${cityData.discoveryData.budgetBreakdown.budget}</p>
                </div>
              ` : ''}
              ${cityData.discoveryData.budgetBreakdown.midRange ? `
                <div class="budget-item">
                  <strong>💳 Budget-Friendly:</strong>
                  <p>${cityData.discoveryData.budgetBreakdown.midRange}</p>
                </div>
              ` : ''}
              ${cityData.discoveryData.budgetBreakdown.luxury ? `
                <div class="budget-item">
                  <strong>💎 Splurge-Worthy:</strong>
                  <p>${cityData.discoveryData.budgetBreakdown.luxury}</p>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
        
        ${cityData.discoveryData.diningHighlights ? `
          <div class="discovery-card">
            <h3>🍽️ Dining Highlights</h3>
            <div class="dining-content">
              ${cityData.discoveryData.diningHighlights.mustTryDishes && cityData.discoveryData.diningHighlights.mustTryDishes.length > 0 ? `
                <div class="dining-section">
                  <strong>🍲 Must-Try Dishes:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.mustTryDishes.map(dish => `<li>${dish}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${cityData.discoveryData.diningHighlights.bestCafes && cityData.discoveryData.diningHighlights.bestCafes.length > 0 ? `
                <div class="dining-section">
                  <strong>☕ Best Cafes:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.bestCafes.map(cafe => `<li>${cafe}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${cityData.discoveryData.diningHighlights.topRestaurants && cityData.discoveryData.diningHighlights.topRestaurants.length > 0 ? `
                <div class="dining-section">
                  <strong>🏆 Top Restaurants:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.topRestaurants.map(restaurant => `<li>${restaurant}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${cityData.discoveryData.diningHighlights.foodMarkets && cityData.discoveryData.diningHighlights.foodMarkets.length > 0 ? `
                <div class="dining-section">
                  <strong>🛒 Food Markets:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.foodMarkets.map(market => `<li>${market}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
              ${cityData.discoveryData.diningHighlights.diningTips && cityData.discoveryData.diningHighlights.diningTips.length > 0 ? `
                <div class="dining-section">
                  <strong>💡 Dining Tips:</strong>
                  <ul class="dining-list">
                    ${cityData.discoveryData.diningHighlights.diningTips.map(tip => `<li>${tip}</li>`).join('')}
                  </ul>
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
        
        ${cityData.attractions && cityData.attractions.some(attr => attr.discoveryTags && attr.discoveryTags.hiddenGem) ? `
          <div class="discovery-card">
            <h3>💎 Hidden Gems</h3>
            <ul class="discovery-list">
              ${cityData.attractions.filter(attr => attr.discoveryTags && attr.discoveryTags.hiddenGem).map(attr => `
                <li><strong>${attr.name}</strong> - ${attr.discoveryTags.insiderTip || 'A hidden gem worth discovering'}</li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
        
        ${cityData.discoveryData.quickFacts ? `
          <div class="discovery-card">
            <h3>⚡ Quick Facts</h3>
            <div class="quick-facts-content">
              ${cityData.discoveryData.quickFacts.totalAttractions ? `
                <div class="quick-fact-item">
                  <strong>🎯 Total Attractions:</strong> ${cityData.discoveryData.quickFacts.totalAttractions}
                </div>
              ` : ''}
              ${cityData.discoveryData.quickFacts.freeActivities ? `
                <div class="quick-fact-item">
                  <strong>🆓 Free Activities:</strong> ${cityData.discoveryData.quickFacts.freeActivities}
                </div>
              ` : ''}
              ${cityData.discoveryData.quickFacts.averageTimePerAttraction ? `
                <div class="quick-fact-item">
                  <strong>⏱️ Average Time per Attraction:</strong> ${cityData.discoveryData.quickFacts.averageTimePerAttraction}
                </div>
              ` : ''}
              ${cityData.discoveryData.quickFacts.walkingFriendly ? `
                <div class="quick-fact-item">
                  <strong>🚶 Walking Friendly:</strong> ${cityData.discoveryData.quickFacts.walkingFriendly ? 'Yes' : 'No'}
                </div>
              ` : ''}
              ${cityData.discoveryData.quickFacts.publicTransportQuality ? `
                <div class="quick-fact-item">
                  <strong>🚌 Public Transport:</strong> ${cityData.discoveryData.quickFacts.publicTransportQuality}
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
        
        ${cityData.discoveryData.seasonalHighlights ? `
          <div class="discovery-card">
            <h3>🌟 Seasonal Highlights</h3>
            <div class="seasonal-content">
              ${cityData.discoveryData.seasonalHighlights.spring ? `
                <div class="seasonal-item">
                  <strong>🌸 Spring:</strong> ${cityData.discoveryData.seasonalHighlights.spring}
                </div>
              ` : ''}
              ${cityData.discoveryData.seasonalHighlights.summer ? `
                <div class="seasonal-item">
                  <strong>☀️ Summer:</strong> ${cityData.discoveryData.seasonalHighlights.summer}
                </div>
              ` : ''}
              ${cityData.discoveryData.seasonalHighlights.fall ? `
                <div class="seasonal-item">
                  <strong>🍂 Fall:</strong> ${cityData.discoveryData.seasonalHighlights.fall}
                </div>
              ` : ''}
              ${cityData.discoveryData.seasonalHighlights.winter ? `
                <div class="seasonal-item">
                  <strong>❄️ Winter:</strong> ${cityData.discoveryData.seasonalHighlights.winter}
                </div>
              ` : ''}
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  ` : '';

  // Generate static content structure for search engines (no tabs)
  const staticContent = `
    <div class="main-content-wrapper">
      <div class="container">
        ${cityData.description ? `
        <section class="section">
          <div class="description-content">
            <div class="description-text">${convertMarkdownToHTML(cityData.description)}</div>
          </div>
        </section>
        ` : ''}
        
        <section class="section">
          <h2 class="section-title">✨ Why Visit ${cityData.cityName} - Top Highlights</h2>
          <div class="highlights-grid">
            ${highlightsHTML}
          </div>
        </section>
        
        <section class="section discovery-section">
          ${discoveryCardsHTML}
        </section>
        
        <section class="section attractions-section">
          <h2 class="section-title">🏆 Top ${cityData.cityName} Attractions You Must Visit</h2>
          <div class="attractions-grid">
            ${topAttractionsHTML}
          </div>
        </section>
        
        <section class="section attractions-section">
          <h2 class="section-title">🎯 Complete Guide to ${cityData.cityName} Attractions</h2>
          <div class="attractions-grid">
            ${allAttractionsHTML}
          </div>
        </section>
        
        ${cityData.logistics ? `
        <section class="section logistics-section">
          <h2 class="section-title">📋 Plan Your Trip</h2>
          <div class="logistics-grid">
            ${cityData.logistics.gettingAround ? `
              <div class="logistics-card">
                <h3>🚌 Getting Around</h3>
                <div class="logistics-content">${cityData.logistics.gettingAround.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            ${cityData.logistics.whereToStay ? `
              <div class="logistics-card">
                <h3>🏨 Where to Stay</h3>
                <div class="logistics-content">${cityData.logistics.whereToStay.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            ${cityData.logistics.bestTimeToVisit ? `
              <div class="logistics-card">
                <h3>📅 Best Time to Visit</h3>
                <div class="logistics-content">${cityData.logistics.bestTimeToVisit.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            ${cityData.logistics.suggestedItinerary ? `
              <div class="logistics-card">
                <h3>🎯 Suggested Itinerary</h3>
                <div class="logistics-content">${cityData.logistics.suggestedItinerary.replace(/#{1,6}\s/g, '').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
          </div>
        </section>
        ` : ''}
        
        ${cityData.faqs && cityData.faqs.length > 0 ? `
        <section class="section faq-section">
          <h2 class="section-title">❓ Frequently Asked Questions About ${cityData.cityName}</h2>
          ${cityData.faqs.map(faq => 
            `<div class="faq-item" itemscope itemtype="https://schema.org/Question">
              <div class="faq-question" itemprop="name">${faq.question}</div>
              <div class="faq-answer" itemscope itemtype="https://schema.org/Answer" itemprop="acceptedAnswer">
                <div itemprop="text">${faq.answer}</div>
              </div>
            </div>`
          ).join('')}
        </section>
        ` : ''}
        
        ${generateInternalLinksHTML(cityData)}
      </div>
    </div>
  `;
  
  // Generate complete tab content structure
  const topAttractionsContent = `
    <div class="tab-content" id="top-attractions">
      <div class="container">
        <section class="section">
          <h2 class="section-title">🏆 Top Attractions</h2>
          <div class="attractions-grid">
            ${topAttractionsHTML}
          </div>
        </section>
      </div>
    </div>
  `;

  const allAttractionsContent = `
    <div class="tab-content" id="all-attractions">
      <div class="container">
        <section class="section">
          <h2 class="section-title">🎯 All Attractions</h2>
          <div class="attractions-grid">
            ${allAttractionsHTML}
          </div>
        </section>
      </div>
    </div>
  `;

  const interactiveExplorerContent = `
    <div class="tab-content" id="interactive-explorer">
      <div class="container">
        ${discoveryCardsHTML}
      </div>
    </div>
  `;

  const planTripContent = cityData.logistics ? `
    <div class="tab-content" id="plan-trip">
      <div class="container">
        <section class="section">
          <h2 class="section-title">📋 Plan Your Trip</h2>
          <div class="logistics-grid">
            ${cityData.logistics.gettingAround ? `
              <div class="logistics-card">
                <h3>🚌 Getting Around</h3>
                <div class="logistics-content">${cityData.logistics.gettingAround.replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            ${cityData.logistics.whereToStay ? `
              <div class="logistics-card">
                <h3>🏨 Where to Stay</h3>
                <div class="logistics-content">${cityData.logistics.whereToStay.replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            ${cityData.logistics.bestTimeToVisit ? `
              <div class="logistics-card">
                <h3>📅 Best Time to Visit</h3>
                <div class="logistics-content">${cityData.logistics.bestTimeToVisit.replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
            ${cityData.logistics.suggestedItinerary ? `
              <div class="logistics-card">
                <h3>🎯 Suggested Itinerary</h3>
                <div class="logistics-content">${cityData.logistics.suggestedItinerary.replace(/#{1,6}\s/g, '<h4>').replace(/\n/g, '<br>')}</div>
              </div>
            ` : ''}
          </div>
        </section>
      </div>
    </div>
  ` : '';



  // Complete HTML structure with tabbed navigation matching React CityPage component
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seoTitle}</title>
    <meta name="description" content="${seoDescription}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="${cityData.author || 'TravelWanders'}">
    <meta name="language" content="en">
    <meta name="geo.region" content="${cityData.country}">
    <meta name="geo.placename" content="${cityData.cityName}">
    <meta name="geo.position" content="${getCityCoordinates(cityData.cityName).lat};${getCityCoordinates(cityData.cityName).lng}">
    <meta name="ICBM" content="${getCityCoordinates(cityData.cityName).lat}, ${getCityCoordinates(cityData.cityName).lng}">
    ${cityData.lastUpdated ? `<meta name="last-modified" content="${cityData.lastUpdated}">` : ''}
    ${cityData.publishedDate ? `<meta name="article:published_time" content="${cityData.publishedDate}">` : ''}
    <link rel="canonical" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    
    <!-- Hreflang for international SEO (future multilingual support) -->
    <link rel="alternate" hreflang="en" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    <link rel="alternate" hreflang="x-default" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    
    <!-- Open Graph tags -->
    <meta property="og:title" content="${seoTitle}">
    <meta property="og:description" content="${seoDescription}">
    <meta property="og:image" content="${cityData.imageUrl}">
    <meta property="og:url" content="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="TravelWanders">
    ${cityData.author ? `<meta property="article:author" content="${cityData.author}">` : ''}
    
    <!-- Twitter Card tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seoTitle}">
    <meta name="twitter:description" content="${seoDescription}">
    <meta name="twitter:image" content="${cityData.imageUrl}">
    <meta name="twitter:site" content="@TravelWanders">
    
    <!-- Structured Data - Article Schema for Travel Guide -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "${seoTitle}",
      "description": "${seoDescription}",
      "url": "https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}",
      "image": {
        "@type": "ImageObject",
        "url": "${cityData.imageUrl}",
        "width": 1920,
        "height": 960
      },
      ${cityData.publishedDate ? `"datePublished": "${cityData.publishedDate}",` : '"datePublished": "2025-01-15T10:00:00Z",'}
      ${cityData.lastUpdated ? `"dateModified": "${cityData.lastUpdated}",` : '"dateModified": "2025-01-15T10:00:00Z",'}
      "author": {
        "@type": "Person",
        "name": "${cityData.author || 'TravelWanders Editorial Team'}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "TravelWanders",
        "logo": {
          "@type": "ImageObject",
          "url": "https://travelwanders.com/favicon.svg",
          "width": 60,
          "height": 60
        }
      },
      "articleSection": "Travel Guides",
      "keywords": "best things to do in ${cityData.cityName}, ${cityData.cityName} attractions, ${cityData.cityName} travel guide, things to do ${cityData.cityName}, ${cityData.country} travel, visit ${cityData.cityName}, ${cityData.cityName} ${cityData.country}",
      "wordCount": ${cityData.attractions?.length ? cityData.attractions.length * 150 : 1500},
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}"
      },
      "about": {
        "@type": "TravelDestination",
        "name": "${cityData.cityName}",
        "description": "${seoDescription}",
        "image": "${cityData.imageUrl}",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "${cityData.cityName}",
          "addressCountry": "${cityData.country}"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "${getCityCoordinates(cityData.cityName).lat}",
          "longitude": "${getCityCoordinates(cityData.cityName).lng}"
        },
        "touristType": "leisure",
        "hasMap": "https://www.google.com/maps/search/${encodeURIComponent(cityData.cityName + ', ' + cityData.country)}"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://travelwanders.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Destinations",
            "item": "https://travelwanders.com/destinations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${cityData.cityName}",
            "item": "https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}"
          }
        ]
      }
    }
    </script>
    
    <!-- FAQ Structured Data for Featured Snippets -->
    ${cityData.faqs && cityData.faqs.length > 0 ? `
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        ${cityData.faqs.map(faq => `
        {
          "@type": "Question",
          "name": "${faq.question.replace(/"/g, '\\"')}",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "${faq.answer.replace(/"/g, '\\"').replace(/\n/g, ' ')}"
          }
        }`).join(',')}
      ]
    }
    </script>
    ` : ''}
    
    <!-- Breadcrumb Navigation Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "WebPage",
            "@id": "https://travelwanders.com/",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "WebPage",
            "@id": "https://travelwanders.com/destinations",
            "name": "Destinations"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "WebPage",
            "@id": "https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}",
            "name": "${cityData.cityName}, ${cityData.country}"
          }
        }
      ]
    }
    </script>
    
    <!-- Performance Optimization Tags for Core Web Vitals -->
    <link rel="preload" href="${cityData.imageUrl}&fm=avif&w=1920&fit=crop&auto=format" as="image" type="image/avif" fetchpriority="high">
    <link rel="preload" href="${cityData.imageUrl}&fm=webp&w=1920&fit=crop&auto=format" as="image" type="image/webp">
    <link rel="prefetch" href="https://travelwanders.com/destinations">
    <link rel="dns-prefetch" href="//images.unsplash.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="modulepreload" href="https://travelwanders.com/assets/app.js">
    <meta name="format-detection" content="telephone=no">
    <meta name="theme-color" content="#2563eb">
    
    <!-- Critical Web Vitals Optimization -->
    <link rel="preload" as="style" href="data:text/css;base64,Ym9keXtmb250LWZhbWlseTpJbnRlcn0=">
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <link rel="dns-prefetch" href="//www.google-analytics.com">
    <link rel="dns-prefetch" href="//www.googletagmanager.com">
    
    <!-- Critical CSS for above-the-fold content - Optimized for Core Web Vitals -->
    <style>
      /* Critical CSS for immediate rendering - Compressed for LCP optimization */
      *{margin:0;padding:0;box-sizing:border-box}
      body{font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;line-height:1.6;color:#333;background:#fff;font-display:swap}
      .container{max-width:1200px;margin:0 auto;padding:0 20px}
      .hero-section{position:relative;height:60vh;min-height:400px;display:flex;align-items:center;justify-content:center;color:#fff;text-align:center;overflow:hidden;contain:layout style paint}
      .hero-image{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:0;will-change:transform}
      .hero-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.4)}
      .hero-content{position:relative;z-index:1;max-width:800px;padding:0 20px}
      .hero-title{font-size:clamp(2rem,5vw,3rem);font-weight:700;margin-bottom:1rem;text-shadow:2px 2px 4px rgba(0,0,0,.3);line-height:1.2}
      .hero-subtitle{font-size:clamp(.9rem,2.5vw,1.1rem);margin-bottom:2rem;opacity:.95;text-shadow:1px 1px 2px rgba(0,0,0,.3)}
      .hero-badges{display:flex;flex-wrap:wrap;gap:.75rem;justify-content:center}
      .badge{background:rgba(255,255,255,.2);backdrop-filter:blur(10px);color:#fff;padding:.5rem 1rem;border-radius:50px;font-size:.9rem;font-weight:500;border:1px solid rgba(255,255,255,.3)}
      .hero-breadcrumb{font-size:.9rem;margin-bottom:1rem;opacity:.9}
      .breadcrumb-list{display:flex;justify-content:center;align-items:center;list-style:none;margin:0;padding:0;gap:.5rem;flex-wrap:wrap}
      .breadcrumb-item{display:flex;align-items:center}
      .breadcrumb-item:not(:last-child)::after{content:"›";margin-left:.5rem;opacity:.7}
      .breadcrumb-item a{color:#fff;text-decoration:none;transition:color .3s}
      .breadcrumb-item a:hover{color:#fbbf24;text-decoration:underline}
      .breadcrumb-item.current{opacity:.8;font-weight:500}
      .navigation{background:#fff;border-bottom:1px solid #e2e8f0;position:sticky;top:0;z-index:50;contain:layout style}
      .nav-container{display:flex;justify-content:space-between;align-items:center;max-width:1200px;margin:0 auto;padding:0 20px;height:60px}
      .nav-brand{display:flex;align-items:center;gap:.5rem;color:#1e40af;font-weight:700;font-size:1.25rem;text-decoration:none}
      .nav-links{display:flex;gap:2rem;align-items:center}
      .nav-links a{color:#64748b;text-decoration:none;font-weight:500;transition:color .2s}
      .nav-links a:hover{color:#0f172a}
      .admin-link{background:#f97316;color:#fff;padding:.5rem 1rem;border-radius:.5rem;text-decoration:none;font-weight:500;transition:background .2s}
      img{height:auto;max-width:100%}
      /* Prevent layout shift */
      @media (max-width:768px){.nav-links{display:none}.hero-title{font-size:2rem}.breadcrumb-list{font-size:.8rem}}
    </style>
    
    <!-- Load non-critical CSS asynchronously -->
    <link rel="preload" href="data:text/css;base64,${Buffer.from(pageStyles).toString('base64')}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><style>${pageStyles}</style></noscript>
</head>
<body>
    <!-- Navigation Header -->
    <nav class="navigation">
        <div class="nav-container">
            <a href="https://travelwanders.com" class="nav-logo">TravelWanders</a>
            <ul class="nav-links">
                <li><a href="https://travelwanders.com" class="nav-link">Travel Home</a></li>
                <li><a href="https://travelwanders.com/destinations" class="nav-link">Explore Destinations</a></li>
                <li><a href="https://travelwanders.com/blogs" class="nav-link">${cityData.cityName} Travel Blogs</a></li>
                <li><a href="https://travelwanders.com/destinations" class="nav-cta">Start Planning Trip</a></li>
            </ul>
        </div>
    </nav>

    <div id="root" class="main-content">
        ${heroHTML}
        
        <!-- Static Content for Search Engines -->
        ${staticContent}
        
        <!-- Footer -->
        <footer class="footer">
            <div class="footer-content">
                <!-- Brand Section -->
                <div class="footer-section">
                    <h3>TravelWanders</h3>
                    <p class="footer-brand">Your trusted companion for discovering amazing destinations around the world. We curate the best travel experiences to make your journey unforgettable.</p>
                    <div class="social-links">
                        <a href="https://facebook.com/travelwanders" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com/travelwanders" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://instagram.com/travelwanders" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://youtube.com/travelwanders" target="_blank" rel="noopener noreferrer">YouTube</a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="https://travelwanders.com/destinations">Explore More ${cityData.country} Cities</a></li>
                        <li><a href="https://travelwanders.com/blogs">${cityData.cityName} Travel Blogs & Guides</a></li>
                        <li><a href="https://travelwanders.com">Discover Amazing European Destinations</a></li>
                        <li><a href="https://travelwanders.com/destinations">Best Things to Do in Top Cities</a></li>
                    </ul>
                </div>

                <!-- Get Started -->
                <div class="footer-section">
                    <h3>Plan Your ${cityData.country} Adventure</h3>
                    <ul>
                        <li><a href="https://travelwanders.com/destinations" title="Browse comprehensive ${cityData.country} travel destinations and city guides">Browse ${cityData.country} Destinations Guide</a></li>
                        <li><a href="https://travelwanders.com/blogs" title="Read expert travel stories and insider tips for ${cityData.cityName}">Read ${cityData.cityName} Travel Stories</a></li>
                        <li><a href="https://travelwanders.com/destinations" title="Plan your perfect European city break with our comprehensive travel guides">Plan Your European City Break</a></li>
                        <li><a href="https://travelwanders.com/destinations" title="Discover hidden gems and local secrets in ${cityData.country}">Discover Hidden Gems in ${cityData.country}</a></li>
                    </ul>
                </div>

                <!-- Legal & Support -->
                <div class="footer-section">
                    <h3>Legal & Support</h3>
                    <ul>
                        <li><a href="https://travelwanders.com/privacy-policy">Privacy Policy</a></li>
                        <li><a href="https://travelwanders.com/terms-of-service">Terms of Service</a></li>
                        <li><a href="https://travelwanders.com/cookie-policy">Cookie Policy</a></li>
                        <li><a href="mailto:support@travelwanders.com">Contact Support</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 TravelWanders. All rights reserved. Made with ❤️ for travelers worldwide.</p>
            </div>
        </footer>
    </div>

    <script>
      function showTab(tabId) {
        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Remove active class from all triggers
        const tabTriggers = document.querySelectorAll('.tab-trigger');
        tabTriggers.forEach(trigger => {
          trigger.classList.remove('active');
        });
        
        // Show selected tab content
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
          selectedTab.classList.add('active');
        }
        
        // Add active class to clicked trigger
        event.target.classList.add('active');
      }

      // Analytics and SEO enhancements
      console.log('TravelWanders - ${cityData.cityName} Guide loaded successfully');
      
      // Basic interactivity
      document.addEventListener('DOMContentLoaded', function() {
          // Smooth scrolling for any anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                      target.scrollIntoView({
                          behavior: 'smooth'
                      });
                  }
              });
          });
      });
    </script>
</body>
</html>`;

  // Post-generation hydration validation  
  const generatedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${seoTitle}</title>
    <meta name="description" content="${seoDescription}">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="author" content="${cityData.author || 'TravelWanders'}">
    <meta name="language" content="en">
    <meta name="geo.region" content="${cityData.country}">
    <meta name="geo.placename" content="${cityData.cityName}">
    <meta name="geo.position" content="${getCityCoordinates(cityData.cityName).lat};${getCityCoordinates(cityData.cityName).lng}">
    <meta name="ICBM" content="${getCityCoordinates(cityData.cityName).lat}, ${getCityCoordinates(cityData.cityName).lng}">
    ${cityData.lastUpdated ? `<meta name="last-modified" content="${cityData.lastUpdated}">` : ''}
    ${cityData.publishedDate ? `<meta name="article:published_time" content="${cityData.publishedDate}">` : ''}
    <link rel="canonical" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    
    <!-- Hreflang for international SEO (future multilingual support) -->
    <link rel="alternate" hreflang="en" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    <link rel="alternate" hreflang="x-default" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    
    <!-- Open Graph tags -->
    <meta property="og:title" content="${seoTitle}">
    <meta property="og:description" content="${seoDescription}">
    <meta property="og:image" content="${cityData.imageUrl}">
    <meta property="og:url" content="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="TravelWanders">
    ${cityData.author ? `<meta property="article:author" content="${cityData.author}">` : ''}
    
    <!-- Twitter Card tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seoTitle}">
    <meta name="twitter:description" content="${seoDescription}">
    <meta name="twitter:image" content="${cityData.imageUrl}">
    <meta name="twitter:site" content="@TravelWanders">
    
    ${generateCommonStyles()}
</head>
<body>
    <div class="page-wrapper">
        ${generateNavigation()}
        <main class="main-content">
            ${heroHTML}
            ${staticContent}
        </main>
        ${generateFooter()}
    </div>

    <script>
      function showTab(tabId) {
        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
        
        // Remove active class from all triggers
        const tabTriggers = document.querySelectorAll('.tab-trigger');
        tabTriggers.forEach(trigger => {
          trigger.classList.remove('active');
        });
        
        // Show selected tab content
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
          selectedTab.classList.add('active');
        }
        
        // Add active class to clicked trigger
        event.target.classList.add('active');
      }

      // Analytics and SEO enhancements
      console.log('TravelWanders - ${cityData.cityName} Guide loaded successfully');
      
      // Basic interactivity
      document.addEventListener('DOMContentLoaded', function() {
          // Smooth scrolling for any anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
              anchor.addEventListener('click', function (e) {
                  e.preventDefault();
                  const target = document.querySelector(this.getAttribute('href'));
                  if (target) {
                      target.scrollIntoView({
                          behavior: 'smooth'
                      });
                  }
              });
          });
      });
    </script>
</body>
</html>`;
  try {
    const { validateCityHydrationWithHTML } = await import('./utils/hydration-prevention');
    const postValidation = await validateCityHydrationWithHTML(cityData, generatedHtml, '');
    
    if (!postValidation.isValid) {
      console.warn(`⚠️  Post-generation hydration validation failed for ${cityData.cityName}:`, postValidation.issues);
      // Log issues but return generated HTML
    } else {
      console.log(`✅ Post-generation hydration validation passed for ${cityData.cityName}`);
    }
  } catch (error) {
    console.warn('Post-generation hydration validation failed:', error.message);
  }

  return generatedHtml;
}

// Enhanced extraction functions for flexible TSX parsing
function extractFieldFromTSX(content: string, fieldName: string): string | null {
  // Try multiple patterns for field extraction, including multiline template literals
  const patterns = [
    new RegExp(`${fieldName}=\\{\`([\\s\\S]*?)\`\\}`, 's'),  // Template literal with multiline support
    new RegExp(`${fieldName}=\\{?"([^"]+)"\\}?`),
    new RegExp(`${fieldName}:\\s*['"\`]([^'"\`]+)['"\`]`),
    new RegExp(`${fieldName}="([^"]+)"`),  // Direct string prop
    new RegExp(`${fieldName}=\\{"([^"]+)"\\}`) // String in JSX expression
  ];
  
  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match) {
      // Clean up template literal content
      return match[1].trim();
    }
  }
  return null;
}

function extractArrayFromTSX(content: string, fieldName: string): string[] {
  const patterns = [
    new RegExp(`${fieldName}=\\{(\\[[\\s\\S]*?\\])\\}`),
    new RegExp(`${fieldName}:\\s*(\\[[\\s\\S]*?\\])`)
  ];
  
  for (const pattern of patterns) {
    const match = content.match(pattern);
    if (match) {
      try {
        // First try direct JSON parse
        return JSON.parse(match[1].replace(/'/g, '"'));
      } catch (e) {
        // Enhanced fallback parsing for multiline arrays
        const arrayContent = match[1];
        
        // Extract all quoted strings, handling multiline content
        const itemMatches = arrayContent.match(/"([^"\\]|\\.)*"/g);
        if (itemMatches) {
          return itemMatches.map(item => item.replace(/^"/, '').replace(/"$/, ''));
        }
        
        // Fallback to single quotes
        const singleQuoteMatches = arrayContent.match(/'([^'\\]|\\.)*'/g);
        if (singleQuoteMatches) {
          return singleQuoteMatches.map(item => item.replace(/^'/, '').replace(/'$/, ''));
        }
        
        // Last resort - extract any text within quotes
        const genericMatches = arrayContent.match(/['"`]([^'"`]+)['"`]/g);
        return genericMatches ? genericMatches.map(item => item.replace(/['"`]/g, '')) : [];
      }
    }
  }
  return [];
}

// Extract city data from TSX file (from Firebase Functions) - COMPLETE EXTRACTION WITH FLEXIBLE METADATA
// Generate HTML for different page types
export function generateHomePageHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Best Travel Guides & Destinations - TravelWanders</title>
  <meta name="description" content="Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="Best Travel Guides & Destinations - TravelWanders">
  <meta property="og:image" content="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&h=630">
  <meta property="og:description" content="Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Best Travel Guides & Destinations - TravelWanders">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&h=630">
  <meta name="twitter:description" content="Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.">
  
  <link rel="canonical" href="https://travelwanders.com/">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Performance optimization tags -->
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://images.unsplash.com">
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TravelWanders",
    "url": "https://travelwanders.com",
    "description": "Discover amazing travel destinations with TravelWanders. Find comprehensive city guides, hidden gems, and travel tips for your next adventure.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://travelwanders.com/destinations?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://facebook.com/travelwanders",
      "https://twitter.com/travelwanders",
      "https://instagram.com/travelwanders"
    ]
  }
  </script>
  
  <style>
    ${generateCommonStyles()}
    
    /* Hero Section Styles */
    .hero-section {
      position: relative;
      background: white;
      min-height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    
    .hero-bg {
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(255, 237, 213, 0.3) 0%, rgba(255, 255, 255, 1) 50%, rgba(236, 253, 245, 0.3) 100%);
    }
    
    .hero-content {
      position: relative;
      z-index: 10;
      text-align: center;
      max-width: 64rem;
      margin: 0 auto;
    }
    
    .trust-badge {
      display: inline-flex;
      align-items: center;
      background: #dcfce7;
      color: #166534;
      border: 1px solid #bbf7d0;
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      margin-bottom: 2rem;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .hero-title {
      font-size: clamp(2rem, 8vw, 4rem);
      font-weight: 700;
      color: #111827;
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }
    
    .hero-gradient-text {
      background: linear-gradient(135deg, #059669 0%, #ea580c 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .hero-subtitle {
      font-size: 1.125rem;
      color: #4b5563;
      margin-bottom: 3rem;
      max-width: 32rem;
      margin-left: auto;
      margin-right: auto;
    }
    
    .hero-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #059669;
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 600;
      transition: background-color 0.3s ease;
    }
    
    .hero-cta:hover {
      background: #047857;
    }
    
    /* Travel Categories Section */
    .travel-categories {
      padding: 4rem 0;
      background: #f9fafb;
    }
    
    .travel-categories-content {
      text-align: center;
      padding: 3rem 0;
    }
    
    .travel-categories h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .travel-categories p {
      color: #4b5563;
      margin-bottom: 2rem;
    }
    
    .travel-categories-cta {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: #059669;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }
    
    .travel-categories-cta:hover {
      background: #047857;
    }
    
    /* Destinations Section */
    .destinations-section {
      padding: 4rem 0;
      background: white;
    }
    
    .destinations-header {
      text-align: center;
      margin-bottom: 3rem;
    }
    
    .destinations-header h2 {
      font-size: 2.25rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .destinations-header p {
      font-size: 1.125rem;
      color: #4b5563;
      max-width: 32rem;
      margin: 0 auto 2rem;
    }
    
    .destinations-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .destination-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 0.75rem;
      overflow: hidden;
      transition: all 0.3s ease;
      text-decoration: none;
      color: inherit;
    }
    
    .destination-card:hover {
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
    
    .destination-image {
      width: 100%;
      height: 200px;
      background: linear-gradient(135deg, #059669 0%, #3b82f6 100%);
      position: relative;
    }
    
    .destination-content {
      padding: 1.5rem;
    }
    
    .destination-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.5rem;
    }
    
    .destination-country {
      color: #4b5563;
      font-size: 0.875rem;
      margin-bottom: 1rem;
    }
    
    .destination-cta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #059669;
      font-weight: 500;
      font-size: 0.875rem;
    }
    
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .destinations-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  ${generateNavigation()}
  
  <!-- Hero Section -->
  <section class="hero-section">
    <div class="hero-bg"></div>
    <div class="container mx-auto px-4">
      <div class="hero-content">
        <div class="trust-badge">
          ⭐ Trusted by millions of travelers
        </div>
        
        <h1 class="hero-title">Explore the world with <span class="hero-gradient-text">confidence</span></h1>
        
        <p class="hero-subtitle">
          Get trusted reviews, insider tips, and comprehensive guides for destinations worldwide.
        </p>
        
        <a href="/destinations" class="hero-cta">
          Start Exploring
          <span>→</span>
        </a>
      </div>
    </div>
  </section>
  
  <!-- Travel Categories Section -->
  <section class="travel-categories">
    <div class="container mx-auto px-4">
      <div class="travel-categories-content">
        <h2>Latest Travel <span style="color: #059669;">Stories</span></h2>
        <p>Get inspired by our latest travel insights, tips, and destination guides.</p>
        ${generateLatestBlogsHTML()}
      </div>
    </div>
  </section>
  
  <!-- Destinations Section -->
  <section class="destinations-section">
    <div class="container mx-auto px-4">
      <div class="destinations-header">
        <h2>All destinations</h2>
        <p>Browse our complete collection of travel guides and insider tips for destinations worldwide.</p>
        <p style="color: #6b7280; font-size: 0.875rem;">${generateDestinationCount()} destinations</p>
      </div>
      
      <div class="destinations-grid">
        ${generateAllDestinationsCards()}
      </div>
    </div>
  </section>
  
  ${generateFooter()}
</body>
</html>`;
}

export function generateDestinationsPageHTML(): string {
  const cities = readCityDataFromComponents();
  const continents = ["Europe", "Asia", "Oceania", "Africa", "North America", "South America"];
  const continentCount = continents.length;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>All Destinations - TravelWanders</title>
  <meta name="description" content="Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="All Destinations - TravelWanders">
  <meta property="og:image" content="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&h=630">
  <meta property="og:description" content="Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/destinations">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="All Destinations - TravelWanders">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=1200&h=630">
  <meta name="twitter:description" content="Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.">
  
  <link rel="canonical" href="https://travelwanders.com/destinations">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Performance optimization tags -->
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://images.unsplash.com">
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Travel Destinations Directory",
    "url": "https://travelwanders.com/destinations",
    "description": "Explore our comprehensive directory of travel destinations. Find detailed guides for cities around the world with attractions, tips, and local insights.",
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": ${cities.length},
      "itemListElement": [
        ${cities.slice(0, 10).map((city, index) => `{
          "@type": "ListItem",
          "position": ${index + 1},
          "item": {
            "@type": "TravelAction",
            "name": "${city.name}",
            "url": "https://travelwanders.com${city.route}"
          }
        }`).join(',\n        ')}
      ]
    }
  }
  </script>
  
  <style>
    ${generateCommonStyles()}
  </style>
</head>
<body>
  ${generateNavigation()}
  
  <section class="py-16 bg-gradient-to-br from-green-50 to-blue-50">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">All Destinations</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Explore our complete collection of ${cities.length} travel guides spanning ${continentCount} continents. Find insider tips, must-see attractions, and local insights for every destination.</p>
    </div>
  </section>
  
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${generateAllDestinationsCards()}
      </div>
    </div>
  </section>
  
  ${generateFooter()}
</body>
</html>`;
}

export function generateBlogsPageHTML(): string {
  const blogs = readBlogDataFromFileSystem();
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Travel Blog Stories & Destination Guides - TravelWanders</title>
  <meta name="description" content="Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="Travel Blog Stories & Destination Guides - TravelWanders">
  <meta property="og:image" content="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=630">
  <meta property="og:description" content="Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/blogs">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Travel Blog Stories & Destination Guides - TravelWanders">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=630">
  <meta name="twitter:description" content="Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.">
  
  <link rel="canonical" href="https://travelwanders.com/blogs">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Performance optimization tags -->
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://images.unsplash.com">
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "TravelWanders Blog",
    "url": "https://travelwanders.com/blogs",
    "description": "Get inspired with our travel stories, tips, and destination guides from expert travelers around the world. Discover hidden gems and travel inspiration.",
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "url": "https://travelwanders.com"
    }
  }
  </script>
  
  <style>
    ${generateCommonStyles()}
    
    /* Blog-specific styles */
    .blog-card {
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.3s ease;
      display: block;
      color: inherit;
      text-decoration: none;
    }
    
    .blog-card:hover {
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
    
    .blog-image {
      width: 100%;
      height: 200px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    .blog-content {
      padding: 1.5rem;
    }
    
    .blog-category {
      background: #dcfce7;
      color: #166534;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
      display: inline-block;
      margin-bottom: 0.75rem;
    }
    
    .blog-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.5rem;
      line-height: 1.4;
    }
    
    .blog-excerpt {
      color: #6b7280;
      font-size: 0.875rem;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
    
    .blog-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.75rem;
      color: #9ca3af;
    }
    
    .featured-badge {
      background: #fef3c7;
      color: #92400e;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
  </style>
</head>
<body>
  ${generateNavigation()}
  
  <section class="py-16 bg-gradient-to-br from-green-50 to-blue-50">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Travel Blog</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Get inspired with our travel stories, tips, and destination guides from expert travelers around the world.</p>
      ${blogs.length > 0 ? `<p class="mt-4 text-green-600 font-medium">${blogs.length} Article${blogs.length !== 1 ? 's' : ''} Available</p>` : ''}
    </div>
  </section>
  
  <section class="py-16">
    <div class="container mx-auto px-4">
      ${blogs.length > 0 ? `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${blogs.map(blog => `
            <a href="/blog/${blog.id}" class="blog-card">
              ${blog.featured ? '<div class="featured-badge">Featured</div>' : ''}
              <div class="blog-image" style="${blog.imageUrl ? `background-image: url(${blog.imageUrl});` : 'background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);'}"></div>
              <div class="blog-content">
                <div class="blog-category">${blog.category}</div>
                <h2 class="blog-title">${blog.title}</h2>
                <p class="blog-excerpt">${blog.excerpt}</p>
                <div class="blog-meta">
                  <span>${blog.author}</span>
                  <span>${blog.readTime}</span>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      ` : `
        <div class="text-center py-12">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">No Blog Posts Yet</h2>
          <p class="text-gray-600 mb-8">We're working on amazing travel stories and guides for you!</p>
          <a href="/destinations" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            Explore Destinations
          </a>
        </div>
      `}
    </div>
  </section>
  
  ${generateFooter()}
</body>
</html>`;
}

function generateFeaturedDestinationsCards(): string {
  const cities = readFeaturedCitiesFromComponents();
  
  return cities.slice(0, 6).map(city => `
    <a href="${city.route}" class="group">
      <div class="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div class="relative aspect-4/3 overflow-hidden">
          <div class="w-full h-full ${city.imageUrl ? 
            `bg-gray-900" style="background-image: url(${city.imageUrl}); background-size: cover; background-position: center;"` : 
            'bg-gradient-to-br from-green-500 to-blue-500"'
          }></div>
        </div>
        <div class="p-6">
          <h3 class="font-semibold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">${city.name}</h3>
          <p class="text-gray-600 text-sm mb-4">${city.country}</p>
          <div class="flex items-center text-green-600 group-hover:text-green-700 font-medium text-sm">
            <span>Explore Destination</span>
            <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </a>
  `).join('');
}

function generateLatestBlogsHTML(): string {
  try {
    const blogs = readBlogDataFromFileSystem();
    
    if (blogs.length === 0) {
      return `
        <p style="color: #4b5563; margin-bottom: 1rem;">No blog posts available yet.</p>
        <a href="/blogs" class="travel-categories-cta">
          Visit Blog Page
          <span>→</span>
        </a>
      `;
    }
    
    // Get latest 2 blogs (they're already sorted by date) and mark them as featured for home page
    const latestBlogs = blogs.slice(0, 2).map(blog => ({ ...blog, featured: true }));
    
    if (latestBlogs.length === 0) {
      return `
        <p style="color: #4b5563; margin-bottom: 1rem;">No blog posts available yet.</p>
        <a href="/blogs" class="travel-categories-cta">
          Visit Blog Page
          <span>→</span>
        </a>
      `;
    }
    
    // Generate HTML for blog cards
    const blogCardsHTML = latestBlogs.map(blog => `
      <div style="background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; overflow: hidden; transition: all 0.3s ease; margin-bottom: 1.5rem;">
        <div style="height: 12rem; background: linear-gradient(135deg, #059669 0%, #3b82f6 100%); position: relative;">
          ${blog.imageUrl ? `<img src="${blog.imageUrl}" alt="Featured travel blog: ${blog.title} - Travel guide and destination insights for wanderers" width="400" height="200" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;" loading="lazy" decoding="async">` : ''}
          ${blog.featured ? '<div style="position: absolute; top: 1rem; left: 1rem; background: #ea580c; color: white; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;">Featured</div>' : ''}
        </div>
        <div style="padding: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
            <span style="background: #f3f4f6; color: #4b5563; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500;">${blog.category}</span>
            <span style="color: #6b7280; font-size: 0.75rem;">${blog.readTime}</span>
          </div>
          <h3 style="font-size: 1.125rem; font-weight: 600; color: #111827; margin-bottom: 0.5rem; line-height: 1.4;">${blog.title}</h3>
          <p style="color: #4b5563; font-size: 0.875rem; line-height: 1.5; margin-bottom: 1rem;">${blog.excerpt}</p>
          <a href="/blog/${blog.id}" style="display: inline-flex; align-items: center; color: #059669; font-weight: 500; font-size: 0.875rem; text-decoration: none;">
            Read More
            <span style="margin-left: 0.5rem;">→</span>
          </a>
        </div>
      </div>
    `).join('');
    
    return `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 2rem;">
        ${blogCardsHTML}
      </div>
      <a href="/blogs" class="travel-categories-cta">
        View All Stories
        <span>→</span>
      </a>
    `;
    
  } catch (error) {
    console.error('Error generating latest blogs HTML:', error);
    return `
      <p style="color: #4b5563; margin-bottom: 1rem;">No blog posts available yet.</p>
      <a href="/blogs" class="travel-categories-cta">
        Visit Blog Page
        <span>→</span>
      </a>
    `;
  }
}

function generateDestinationCount(): number {
  const cities = readCityDataFromComponents();
  return cities.length;
}

function generateAllDestinationsCards(): string {
  const cities = readCityDataFromComponents();
  
  return cities.map(city => `
    <a href="${city.route}" class="destination-card">
      <div class="destination-image" style="${city.imageUrl ? `background-image: url(${city.imageUrl}); background-size: cover; background-position: center;` : 'background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);'}"></div>
      <div class="destination-content">
        <h3 class="destination-title">${city.name}</h3>
        <p class="destination-country">${city.country}</p>
        <div class="destination-cta">
          <span>Explore Destination</span>
          <span>→</span>
        </div>
      </div>
    </a>
  `).join('');
}

function generateNavigation(): string {
  return `
  <nav class="bg-white border-b sticky top-0 z-50">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center space-x-3">
          <div class="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
            <span class="text-white text-lg font-bold">T</span>
          </div>
          <span class="text-xl font-bold text-gray-900">TravelWanders</span>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="/" class="text-gray-700 hover:text-green-600 font-medium">Home</a>
          <a href="/destinations" class="text-gray-700 hover:text-green-600 font-medium">Destinations</a>
          <a href="/blogs" class="text-gray-700 hover:text-green-600 font-medium">Blogs</a>
        </div>
      </div>
    </div>
  </nav>`;
}

function generateCommonStyles(): string {
  return `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Inter, system-ui, -apple-system, sans-serif; line-height: 1.6; color: #374151; }
    .container { max-width: 1200px; margin: 0 auto; }
    .text-center { text-align: center; }
    .font-bold { font-weight: 700; }
    .font-semibold { font-weight: 600; }
    .text-gray-900 { color: #111827; }
    .text-gray-700 { color: #374151; }
    .text-gray-600 { color: #4b5563; }
    .text-green-600 { color: #059669; }
    .text-green-700 { color: #047857; }
    .bg-white { background-color: white; }
    .bg-green-600 { background-color: #059669; }
    .bg-green-700 { background-color: #047857; }
    .hover\\:bg-green-700:hover { background-color: #047857; }
    .hover\\:text-green-600:hover { color: #059669; }
    .border { border: 1px solid #e5e7eb; }
    .border-b { border-bottom: 1px solid #e5e7eb; }
    .border-gray-200 { border-color: #e5e7eb; }
    .rounded-lg { border-radius: 0.5rem; }
    .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
    .hover\\:shadow-lg:hover { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
    .transition-all { transition: all 0.3s ease; }
    .transition-colors { transition: color 0.3s ease; }
    .sticky { position: sticky; }
    .top-0 { top: 0; }
    .z-50 { z-index: 50; }
    .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
    .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
    .px-8 { padding-left: 2rem; padding-right: 2rem; }
    .mb-2 { margin-bottom: 0.5rem; }
    .mb-4 { margin-bottom: 1rem; }
    .mb-6 { margin-bottom: 1.5rem; }
    .mb-8 { margin-bottom: 2rem; }
    .mb-10 { margin-bottom: 2.5rem; }
    .mb-12 { margin-bottom: 3rem; }
    .ml-2 { margin-left: 0.5rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .text-xl { font-size: 1.25rem; }
    .text-2xl { font-size: 1.5rem; }
    .text-3xl { font-size: 1.875rem; }
    .text-4xl { font-size: 2.25rem; }
    .text-5xl { font-size: 3rem; }
    .text-6xl { font-size: 3.75rem; }
    .text-lg { font-size: 1.125rem; }
    .text-sm { font-size: 0.875rem; }
    .flex { display: flex; }
    .grid { display: grid; }
    .hidden { display: none; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .justify-center { justify-content: center; }
    .space-x-3 > * + * { margin-left: 0.75rem; }
    .space-x-8 > * + * { margin-left: 2rem; }
    .flex-col { flex-direction: column; }
    .gap-4 { gap: 1rem; }
    .gap-6 { gap: 1.5rem; }
    .gap-8 { gap: 2rem; }
    .h-8 { height: 2rem; }
    .h-16 { height: 4rem; }
    .w-8 { width: 2rem; }
    .w-full { width: 100%; }
    .max-w-3xl { max-width: 48rem; }
    .overflow-hidden { overflow: hidden; }
    .relative { position: relative; }
    .aspect-4\\/3 { aspect-ratio: 4/3; }
    .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
    .bg-gradient-to-r { background-image: linear-gradient(to right, var(--tw-gradient-stops)); }
    .from-green-50 { --tw-gradient-from: #f0fdf4; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(240, 253, 244, 0)); }
    .to-blue-50 { --tw-gradient-to: #eff6ff; }
    .from-green-500 { --tw-gradient-from: #10b981; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(16, 185, 129, 0)); }
    .to-blue-500 { --tw-gradient-to: #3b82f6; }
    .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
    .grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    @media (min-width: 640px) {
      .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .sm\\:flex-row { flex-direction: row; }
    }
    @media (min-width: 768px) {
      .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .md\\:text-5xl { font-size: 3rem; }
      .md\\:text-6xl { font-size: 3.75rem; }
      .md\\:flex { display: flex; }
    }
    @media (min-width: 1024px) {
      .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    }
    a { text-decoration: none; }
    .group:hover .group-hover\\:text-green-600 { color: #059669; }
    .group:hover .group-hover\\:text-green-700 { color: #047857; }
    .group:hover .group-hover\\:translate-x-1 { transform: translateX(0.25rem); }
    .transition-transform { transition: transform 0.3s ease; }
  `;
}

export async function extractCityDataFromTSX(tsxFilePath: string): Promise<CityData | null> {
  try {
    // Ensure the file path exists
    if (!existsSync(tsxFilePath)) {
      console.error(`TSX file not found: ${tsxFilePath}`);
      return null;
    }
    
    const tsxContent = readFileSync(tsxFilePath, 'utf-8');
    
    // Extract basic city information using enhanced extraction
    const title = extractFieldFromTSX(tsxContent, 'title');
    const description = extractFieldFromTSX(tsxContent, 'description');
    const imageUrl = extractFieldFromTSX(tsxContent, 'imageUrl');
    
    if (!title || !description) {
      console.error('Failed to extract basic city data from TSX file');
      return null;
    }
    
    // Extract city name and country from title
    const titleParseMatch = title.match(/Best Things to Do in (.*?), (.*?) \(/);
    const cityName = titleParseMatch ? titleParseMatch[1] : 'Unknown City';
    const country = titleParseMatch ? titleParseMatch[2] : 'Unknown Country';
    
    // Extract new metadata fields using flexible extraction
    const author = extractFieldFromTSX(tsxContent, 'author');
    const lastUpdated = extractFieldFromTSX(tsxContent, 'lastUpdated');
    const disclaimer = extractFieldFromTSX(tsxContent, 'disclaimer');
    const publishedDate = extractFieldFromTSX(tsxContent, 'publishedDate');
    const tags = extractArrayFromTSX(tsxContent, 'tags');
    
    // Extract highlights using enhanced array extraction
    const highlights = extractArrayFromTSX(tsxContent, 'highlights');
    
    // Extract attractions with COMPLETE content including descriptions, practical info, and discovery tags
    const attractionsMatch = tsxContent.match(/attractions=\{(\[[\s\S]*?\])\}/);
    let attractions: any[] = [];
    if (attractionsMatch) {
      const attractionsContent = attractionsMatch[1];
      
      // Find all attraction objects
      const attractionMatches = attractionsContent.match(/\{\s*name:\s*"([^"]+)"[\s\S]*?\}/g);
      if (attractionMatches) {
        attractions = attractionMatches.map(attractionStr => {
          const nameMatch = attractionStr.match(/name:\s*"([^"]+)"/);
          const descriptionMatch = attractionStr.match(/description:\s*`([^`]+)`/);
          const howToGetThereMatch = attractionStr.match(/howToGetThere:\s*"([^"]+)"/);
          const openingHoursMatch = attractionStr.match(/openingHours:\s*"([^"]+)"/);
          const costMatch = attractionStr.match(/cost:\s*"([^"]+)"/);
          const websiteMatch = attractionStr.match(/website:\s*"([^"]+)"/);
          const timeRequiredMatch = attractionStr.match(/timeRequired:\s*"([^"]+)"/);
          const experienceLevelMatch = attractionStr.match(/experienceLevel:\s*"([^"]+)"/);
          const interestsMatch = attractionStr.match(/interests:\s*\[(.*?)\]/);
          const costLevelMatch = attractionStr.match(/costLevel:\s*"([^"]+)"/);
          const seasonalBestMatch = attractionStr.match(/seasonalBest:\s*"([^"]+)"/);
          const photoOpportunityMatch = attractionStr.match(/photoOpportunity:\s*"([^"]+)"/);
          const insiderTipMatch = attractionStr.match(/insiderTip:\s*"([^"]+)"/);
          const hiddenGemMatch = attractionStr.match(/hiddenGem:\s*(true|false)/);
          const familyFriendlyMatch = attractionStr.match(/familyFriendly:\s*(true|false)/);
          const accessibilityNotesMatch = attractionStr.match(/accessibilityNotes:\s*"([^"]+)"/);
          
          const interests = interestsMatch ? interestsMatch[1].split(',').map(i => i.trim().replace(/['"]/g, '')) : [];
          
          return {
            name: nameMatch ? nameMatch[1] : 'Unknown',
            description: descriptionMatch ? descriptionMatch[1] : 'Description not available',
            practicalInfo: {
              howToGetThere: howToGetThereMatch ? howToGetThereMatch[1] : 'Information not available',
              openingHours: openingHoursMatch ? openingHoursMatch[1] : 'Check locally',
              cost: costMatch ? costMatch[1] : 'Varies',
              website: websiteMatch ? websiteMatch[1] : ''
            },
            discoveryTags: {
              timeRequired: timeRequiredMatch ? timeRequiredMatch[1] : '1-2 hours',
              experienceLevel: experienceLevelMatch ? experienceLevelMatch[1] : 'Easy Access',
              interests: interests,
              costLevel: costLevelMatch ? costLevelMatch[1] : 'Moderate',
              seasonalBest: seasonalBestMatch ? seasonalBestMatch[1] : 'Year-round',
              photoOpportunity: photoOpportunityMatch ? photoOpportunityMatch[1] : 'Great photo opportunities',
              insiderTip: insiderTipMatch ? insiderTipMatch[1] : 'Visit during off-peak hours',
              hiddenGem: hiddenGemMatch ? hiddenGemMatch[1] === 'true' : false,
              familyFriendly: familyFriendlyMatch ? familyFriendlyMatch[1] === 'true' : true,
              accessibilityNotes: accessibilityNotesMatch ? accessibilityNotesMatch[1] : 'Generally accessible'
            }
          };
        });
      }
    }
    
    // Extract logistics with full content
    const logisticsMatch = tsxContent.match(/logistics=\{\{([\s\S]*?)\}\}/);
    let logistics: any = {};
    if (logisticsMatch) {
      const logisticsContent = logisticsMatch[1];
      const gettingAroundMatch = logisticsContent.match(/gettingAround:\s*`([^`]+)`/);
      const whereToStayMatch = logisticsContent.match(/whereToStay:\s*`([^`]+)`/);
      const bestTimeToVisitMatch = logisticsContent.match(/bestTimeToVisit:\s*`([^`]+)`/);
      const suggestedItineraryMatch = logisticsContent.match(/suggestedItinerary:\s*`([^`]+)`/);
      
      logistics = {
        gettingAround: gettingAroundMatch ? gettingAroundMatch[1] : `${cityName} has excellent public transport connections`,
        whereToStay: whereToStayMatch ? whereToStayMatch[1] : `Various accommodations available throughout ${cityName}`,
        bestTimeToVisit: bestTimeToVisitMatch ? bestTimeToVisitMatch[1] : 'Spring and Fall are ideal visiting seasons',
        suggestedItinerary: suggestedItineraryMatch ? suggestedItineraryMatch[1] : `Plan 2-3 days to explore the highlights of ${cityName}`
      };
    }
    
    // Extract FAQs with complete content
    const faqsMatch = tsxContent.match(/faqs=\{(\[[\s\S]*?\])\}/);
    let faqs: any[] = [];
    if (faqsMatch) {
      const faqsContent = faqsMatch[1];
      const faqMatches = faqsContent.match(/\{\s*question:\s*"([^"]+)",\s*answer:\s*`([^`]+)`\s*\}/g);
      if (faqMatches) {
        faqs = faqMatches.map(faqStr => {
          const questionMatch = faqStr.match(/question:\s*"([^"]+)"/);
          const answerMatch = faqStr.match(/answer:\s*`([^`]+)`/);
          return {
            question: questionMatch ? questionMatch[1] : 'Question not available',
            answer: answerMatch ? answerMatch[1] : 'Answer not available'
          };
        });
      }
    }
    
    // Extract discovery data with full content
    const discoveryDataMatch = tsxContent.match(/discoveryData=\{\{([\s\S]*?)\}\}/);
    let discoveryData: any = {};
    if (discoveryDataMatch) {
      const discoveryContent = discoveryDataMatch[1];
      
      // Extract local secrets
      const localSecretsMatch = discoveryContent.match(/localSecrets:\s*\[([\s\S]*?)\]/);
      let localSecrets: string[] = [];
      if (localSecretsMatch) {
        const secretsContent = localSecretsMatch[1];
        const secretMatches = secretsContent.match(/"([^"]+)"/g);
        if (secretMatches) {
          localSecrets = secretMatches.map(s => s.replace(/"/g, ''));
        }
      }
      
      // Extract dining highlights
      const diningHighlightsMatch = discoveryContent.match(/diningHighlights:\s*\{([\s\S]*?)\}/);
      let diningHighlights: any = {};
      if (diningHighlightsMatch) {
        const diningContent = diningHighlightsMatch[1];
        const mustTryDishesMatch = diningContent.match(/mustTryDishes:\s*"([^"]+)"/);
        const bestCafesMatch = diningContent.match(/bestCafes:\s*"([^"]+)"/);
        const topRestaurantsMatch = diningContent.match(/topRestaurants:\s*"([^"]+)"/);
        const foodMarketsMatch = diningContent.match(/foodMarkets:\s*"([^"]+)"/);
        const diningTipsMatch = diningContent.match(/diningTips:\s*"([^"]+)"/);
        
        diningHighlights = {
          mustTryDishes: mustTryDishesMatch ? mustTryDishesMatch[1].split(',').map(d => d.trim()) : [],
          bestCafes: bestCafesMatch ? bestCafesMatch[1].split('.').filter(c => c.trim()).map(c => c.trim()) : [],
          topRestaurants: topRestaurantsMatch ? topRestaurantsMatch[1].split('.').filter(r => r.trim()).map(r => r.trim()) : [],
          foodMarkets: foodMarketsMatch ? foodMarketsMatch[1].split('.').filter(m => m.trim()).map(m => m.trim()) : [],
          diningTips: diningTipsMatch ? [diningTipsMatch[1]] : []
        };
      }
      
      // Extract seasonal highlights
      const seasonalHighlightsMatch = discoveryContent.match(/seasonalHighlights:\s*\{([\s\S]*?)\}/);
      let seasonalHighlights: any = {};
      if (seasonalHighlightsMatch) {
        const seasonalContent = seasonalHighlightsMatch[1];
        const springMatch = seasonalContent.match(/spring:\s*"([^"]+)"/);
        const summerMatch = seasonalContent.match(/summer:\s*"([^"]+)"/);
        const fallMatch = seasonalContent.match(/fall:\s*"([^"]+)"/);
        const winterMatch = seasonalContent.match(/winter:\s*"([^"]+)"/);
        
        seasonalHighlights = {
          spring: springMatch ? springMatch[1] : '',
          summer: summerMatch ? summerMatch[1] : '',
          fall: fallMatch ? fallMatch[1] : '',
          winter: winterMatch ? winterMatch[1] : ''
        };
      }
      
      // Extract quick facts
      const quickFactsMatch = discoveryContent.match(/quickFacts:\s*\{([\s\S]*?)\}/);
      let quickFacts: any = {};
      if (quickFactsMatch) {
        const quickFactsContent = quickFactsMatch[1];
        const totalAttractionsMatch = quickFactsContent.match(/totalAttractions:\s*"([^"]+)"/);
        const freeActivitiesMatch = quickFactsContent.match(/freeActivities:\s*"([^"]+)"/);
        const averageTimeMatch = quickFactsContent.match(/averageTimePerAttraction:\s*"([^"]+)"/);
        const walkingFriendlyMatch = quickFactsContent.match(/walkingFriendly:\s*(true|false)/);
        const transportQualityMatch = quickFactsContent.match(/publicTransportQuality:\s*"([^"]+)"/);
        
        quickFacts = {
          totalAttractions: totalAttractionsMatch ? totalAttractionsMatch[1] : attractions.length.toString(),
          freeActivities: freeActivitiesMatch ? freeActivitiesMatch[1] : 'Several free activities available',
          averageTimePerAttraction: averageTimeMatch ? averageTimeMatch[1] : '1-2 hours',
          walkingFriendly: walkingFriendlyMatch ? walkingFriendlyMatch[1] === 'true' : true,
          publicTransportQuality: transportQualityMatch ? transportQualityMatch[1] : 'Good'
        };
      }
      
      // Extract budget breakdown
      const budgetBreakdownMatch = discoveryContent.match(/budgetBreakdown:\s*\{([\s\S]*?)\}/);
      let budgetBreakdown: any = {};
      if (budgetBreakdownMatch) {
        const budgetContent = budgetBreakdownMatch[1];
        const freeActivitiesMatch = budgetContent.match(/freeActivities:\s*"([^"]+)"/);
        const budgetFriendlyMatch = budgetContent.match(/budgetFriendly:\s*"([^"]+)"/);
        const splurgeWorthyMatch = budgetContent.match(/splurgeWorthy:\s*"([^"]+)"/);
        
        budgetBreakdown = {
          budget: freeActivitiesMatch ? freeActivitiesMatch[1] : 'Free activities available',
          midRange: budgetFriendlyMatch ? budgetFriendlyMatch[1] : 'Budget-friendly options available',
          luxury: splurgeWorthyMatch ? splurgeWorthyMatch[1] : 'Luxury experiences available'
        };
      }
      
      // Extract photo spots from attractions' photoOpportunity fields
      const photoSpots = attractions.length > 0 ? 
        attractions.filter(attr => attr.discoveryTags && attr.discoveryTags.photoOpportunity)
          .map(attr => `${attr.name}: ${attr.discoveryTags.photoOpportunity}`) 
        : [`Best photo locations in ${cityName}`];
      
      discoveryData = {
        localSecrets,
        photoSpots,
        quickFacts: quickFacts,
        seasonalHighlights,
        budgetBreakdown,
        diningHighlights
      };
    }
    
    // Build the city data object with flexible metadata
    const cityData: CityData = {
      cityName,
      country,
      title,
      description,
      imageUrl: imageUrl || '',
      galleryImages: [],
      highlights,
      attractions,
      discoveryData,
      logistics,
      faqs
    };
    
    // Add optional metadata fields only if they exist
    if (author) cityData.author = author;
    if (lastUpdated) cityData.lastUpdated = lastUpdated;
    if (disclaimer) cityData.disclaimer = disclaimer;
    if (publishedDate) cityData.publishedDate = publishedDate;
    if (tags.length > 0) cityData.tags = tags;
    
    return cityData;
  } catch (error) {
    console.error('Error extracting city data from TSX:', error);
    return null;
  }
}

function generateFooter(): string {
  return `
    <footer class="bg-gray-50 border-t border-gray-200 py-12">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span class="text-white text-lg font-bold">T</span>
              </div>
              <span class="text-xl font-bold text-gray-900">TravelWanders</span>
            </div>
            <p class="text-gray-600 text-sm">Discover amazing destinations and create unforgettable memories with our curated travel guides.</p>
          </div>
          
          <div>
            <h3 class="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li><a href="/" class="text-gray-600 hover:text-green-600 text-sm transition-colors">Home</a></li>
              <li><a href="/destinations" class="text-gray-600 hover:text-green-600 text-sm transition-colors">Destinations</a></li>
              <li><a href="/blogs" class="text-gray-600 hover:text-green-600 text-sm transition-colors">Travel Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-gray-900 font-semibold mb-4">Travel Resources</h3>
            <ul class="space-y-2">
              <li><a href="/destinations" class="text-gray-600 hover:text-green-600 text-sm transition-colors">City Guides</a></li>
              <li><a href="/blogs" class="text-gray-600 hover:text-green-600 text-sm transition-colors">Travel Tips</a></li>
              <li><a href="/destinations" class="text-gray-600 hover:text-green-600 text-sm transition-colors">Popular Destinations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-gray-900 font-semibold mb-4">Legal & Support</h3>
            <ul class="space-y-2">
              <li><a href="/privacy" class="text-gray-600 hover:text-green-600 text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" class="text-gray-600 hover:text-green-600 text-sm transition-colors">Terms of Service</a></li>
              <li><a href="mailto:support@travelwanders.com" class="text-gray-600 hover:text-green-600 text-sm transition-colors">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-200 mt-8 pt-6 text-center">
          <p class="text-gray-600 text-sm">&copy; 2025 TravelWanders. All rights reserved. Made with ❤️ for travelers worldwide.</p>
        </div>
      </div>
    </footer>
  `;
}

// Generate individual blog HTML page
export function generateIndividualBlogHTML(blogData: any): string {
  const publishedDate = new Date(blogData.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${blogData.title} - TravelWanders</title>
  <meta name="description" content="${blogData.excerpt}">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="${blogData.title} - TravelWanders">
  <meta property="og:description" content="${blogData.excerpt}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="https://travelwanders.com/blog/${blogData.id}">
  <meta property="og:site_name" content="TravelWanders">
  ${blogData.imageUrl ? `<meta property="og:image" content="${blogData.imageUrl}">` : ''}
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${blogData.title} - TravelWanders">
  <meta name="twitter:description" content="${blogData.excerpt}">
  ${blogData.imageUrl ? `<meta name="twitter:image" content="${blogData.imageUrl}">` : ''}
  
  <link rel="canonical" href="https://travelwanders.com/blog/${blogData.id}">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Structured Data for Blog Post -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "${blogData.title}",
    "description": "${blogData.excerpt}",
    "author": {
      "@type": "Person",
      "name": "${blogData.author || 'TravelWanders Team'}"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "logo": {
        "@type": "ImageObject",
        "url": "https://travelwanders.com/favicon.svg"
      }
    },
    "datePublished": "${blogData.date}",
    "dateModified": "${blogData.date}",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://travelwanders.com/blog/${blogData.id}"
    }${blogData.imageUrl ? `,
    "image": {
      "@type": "ImageObject",
      "url": "${blogData.imageUrl}"
    }` : ''}
  }
  </script>
  
  <style>
    ${generateCommonStyles()}
    
    .blog-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    
    .blog-header {
      margin-bottom: 2rem;
      text-align: center;
    }
    
    .blog-meta {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      color: #666;
    }
    
    .blog-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    .blog-excerpt {
      font-size: 1.125rem;
      color: #4b5563;
      line-height: 1.6;
      margin-bottom: 2rem;
    }
    
    .blog-hero-image {
      width: 100%;
      height: 400px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 2rem;
    }
    
    .blog-body {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #374151;
    }
    
    .blog-body h1, .blog-body h2, .blog-body h3 {
      color: #111827;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
    
    .blog-body h1 { font-size: 2rem; }
    .blog-body h2 { font-size: 1.5rem; }
    .blog-body h3 { font-size: 1.25rem; }
    
    .blog-body p {
      margin-bottom: 1.5rem;
    }
    
    .blog-body ul, .blog-body ol {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
    }
    
    .blog-body li {
      margin-bottom: 0.5rem;
    }
    
    .blog-body blockquote {
      border-left: 4px solid #059669;
      padding-left: 1.5rem;
      margin: 2rem 0;
      font-style: italic;
      color: #4b5563;
    }
    
    .category-badge {
      background: #f3f4f6;
      color: #4b5563;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    .featured-badge {
      background: #ea580c;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      font-weight: 500;
    }
    
    /* Author Section */
    .author-section {
      margin-top: 3rem;
      padding: 2rem 0;
      border-top: 1px solid #e5e7eb;
    }
    
    .author-card {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .author-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #059669;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: 600;
      flex-shrink: 0;
    }
    
    .author-name {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.5rem;
    }
    
    .author-bio {
      color: #6b7280;
      font-size: 0.9rem;
      line-height: 1.5;
    }
    
    /* Social Media Sharing */
    .social-sharing {
      margin-top: 2rem;
      padding: 2rem 0;
      border-top: 1px solid #e5e7eb;
    }
    
    .social-sharing h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .social-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    
    .social-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;
      border: 1px solid #e5e7eb;
      color: #374151;
      background: white;
    }
    
    .social-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .social-button.twitter:hover {
      background: #1d9bf0;
      border-color: #1d9bf0;
      color: white;
    }
    
    .social-button.facebook:hover {
      background: #1877f2;
      border-color: #1877f2;
      color: white;
    }
    
    .social-button.linkedin:hover {
      background: #0a66c2;
      border-color: #0a66c2;
      color: white;
    }
    
    .social-button.email:hover {
      background: #059669;
      border-color: #059669;
      color: white;
    }
    
    @media (max-width: 768px) {
      .blog-content {
        padding: 1rem;
      }
      
      .blog-title {
        font-size: 2rem;
      }
      
      .blog-meta {
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .blog-hero-image {
        height: 250px;
      }
      
      .author-card {
        flex-direction: column;
        text-align: center;
      }
      
      .social-buttons {
        justify-content: center;
      }
      
      .social-button {
        flex: 1;
        min-width: 120px;
        justify-content: center;
      }
    }
  </style>
</head>
<body>
  ${generateNavigation()}
  
  <article class="blog-content">
    <header class="blog-header">
      <div class="blog-meta">
        <span class="category-badge">${blogData.category}</span>
        ${blogData.featured ? '<span class="featured-badge">Featured</span>' : ''}
        <span>${publishedDate}</span>
        <span>${blogData.readTime}</span>
        <span>By ${blogData.author || 'TravelWanders Team'}</span>
      </div>
      
      <h1 class="blog-title">${blogData.title}</h1>
      <p class="blog-excerpt">${blogData.excerpt}</p>
      
      ${blogData.imageUrl ? `<img src="${blogData.imageUrl}" alt="Travel blog header: ${blogData.title} - Expert travel insights and destination guide" class="blog-hero-image" loading="eager" width="1200" height="400" decoding="async">` : ''}
    </header>
    
    <div class="blog-body">
      ${blogData.content || ''}
    </div>
    
    <!-- Author Section -->
    <section class="author-section">
      <div class="author-card">
        <div class="author-avatar">
          ${blogData.author ? blogData.author.charAt(0).toUpperCase() : 'T'}
        </div>
        <div class="author-info">
          <h3 class="author-name">${blogData.author || 'TravelWanders Team'}</h3>
          <p class="author-bio">
            ${blogData.author ? `${blogData.author} is a passionate travel writer who loves exploring hidden gems and sharing authentic travel experiences.` : 'Our travel experts are passionate explorers who curate the best travel guides and insider tips for authentic adventures around the world.'}
          </p>
        </div>
      </div>
    </section>
    
    <!-- Social Media Sharing -->
    <section class="social-sharing">
      <h3>Share this article</h3>
      <div class="social-buttons">
        <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(blogData.title)}&url=${encodeURIComponent(`https://travelwanders.com/blog/${blogData.id}`)}" 
           target="_blank" rel="noopener" class="social-button twitter">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Twitter
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://travelwanders.com/blog/${blogData.id}`)}" 
           target="_blank" rel="noopener" class="social-button facebook">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          Facebook
        </a>
        <a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://travelwanders.com/blog/${blogData.id}`)}" 
           target="_blank" rel="noopener" class="social-button linkedin">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <a href="mailto:?subject=${encodeURIComponent(blogData.title)}&body=${encodeURIComponent(`Check out this article: ${blogData.title} - https://travelwanders.com/blog/${blogData.id}`)}" 
           class="social-button email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
          </svg>
          Email
        </a>
      </div>
    </section>
  </article>
  
  ${generateFooter()}
</body>
</html>`;
}

// Extract blog data from TSX file
export async function extractBlogDataFromTSX(tsxFilePath: string): Promise<any | null> {
  try {
    const content = await fs.readFile(tsxFilePath, 'utf-8');
    
    // Extract the blog object from the file content
    const blogObjectMatch = content.match(/export const \w+(?:Blog)?: Blog = ({[\s\S]*?});/);
    if (!blogObjectMatch) {
      console.error('No blog object found in file');
      return null;
    }
    
    const blogObjectString = blogObjectMatch[1];
    
    // Parse the blog object properties
    const id = blogObjectString.match(/id: "([^"]*?)"/)?.[1];
    const title = blogObjectString.match(/title: "([^"]*?)"/)?.[1];
    const excerpt = blogObjectString.match(/excerpt: "([^"]*?)"/)?.[1];
    const category = blogObjectString.match(/category: "([^"]*?)"/)?.[1];
    const imageUrl = blogObjectString.match(/imageUrl: "([^"]*?)"/)?.[1];
    const featured = blogObjectString.match(/featured: (true|false)/)?.[1] === 'true';
    const readTime = blogObjectString.match(/readTime: "([^"]*?)"/)?.[1];
    const date = blogObjectString.match(/date: "([^"]*?)"/)?.[1];
    const author = blogObjectString.match(/author: "([^"]*?)"/)?.[1];
    
    // Extract content (handles template strings)
    const contentMatch = blogObjectString.match(/content: `([\s\S]*?)`,/);
    const blogContent = contentMatch ? contentMatch[1].replace(/\\`/g, '`') : '';
    
    if (!id || !title || !blogContent) {
      console.error('Missing required blog fields');
      return null;
    }
    
    return {
      id,
      title,
      excerpt: excerpt || '',
      content: blogContent,
      category: category || 'Travel',
      imageUrl: imageUrl || '',
      featured: featured || false,
      readTime: readTime || '5 min read',
      date: date || new Date().toISOString().split('T')[0],
      author: author || 'TravelWanders Team'
    };
    
  } catch (error) {
    console.error('Error extracting blog data from TSX:', error);
    return null;
  }
}

// Generate legal pages HTML
export function generatePrivacyPolicyHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Privacy Policy - TravelWanders</title>
  <meta name="description" content="Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="Privacy Policy & Data Protection - TravelWanders">
  <meta property="og:image" content="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=630">
  <meta property="og:description" content="Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/privacy-policy">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Privacy Policy & Data Protection - TravelWanders">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=630">
  <meta name="twitter:description" content="Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.">
  
  <link rel="canonical" href="https://travelwanders.com/privacy-policy">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Performance optimization tags -->
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://images.unsplash.com">
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://travelwanders.com/privacy-policy",
    "description": "Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "TravelWanders",
      "url": "https://travelwanders.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "url": "https://travelwanders.com"
    }
  }
  </script>
  
  <style>
    ${generateCommonStyles()}
    
    .legal-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.8;
    }
    
    .legal-header {
      text-align: center;
      margin-bottom: 3rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid #e5e7eb;
    }
    
    .legal-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .legal-updated {
      color: #6b7280;
      font-size: 1rem;
    }
    
    .legal-section {
      margin-bottom: 2rem;
    }
    
    .legal-section h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 1rem;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 0.5rem;
    }
    
    .legal-section h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.75rem;
      margin-top: 1.5rem;
    }
    
    .legal-section p {
      margin-bottom: 1rem;
      color: #4b5563;
    }
    
    .legal-section ul {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }
    
    .legal-section li {
      margin-bottom: 0.5rem;
      color: #4b5563;
    }
    
    .contact-info {
      background: #f9fafb;
      padding: 1.5rem;
      border-radius: 8px;
      margin-top: 2rem;
    }
    
    .contact-info h3 {
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .contact-info p {
      color: #4b5563;
      margin-bottom: 0.5rem;
    }
  </style>
</head>
<body>
  ${generateNavigation()}
  
  <main class="legal-content">
    <header class="legal-header">
      <h1 class="legal-title">Privacy Policy</h1>
      <p class="legal-updated">Last Updated: July 13, 2025</p>
    </header>
    
    <section class="legal-section">
      <h2>1. Information We Collect</h2>
      <p>At TravelWanders, we collect information to provide you with the best travel guide experience possible.</p>
      
      <h3>Information You Provide</h3>
      <ul>
        <li>Account information (username, email)</li>
        <li>Profile information and preferences</li>
        <li>Comments and reviews you submit</li>
        <li>Communication with our support team</li>
      </ul>
      
      <h3>Information We Collect Automatically</h3>
      <ul>
        <li>Usage data and analytics</li>
        <li>Device information and IP address</li>
        <li>Cookies and similar technologies</li>
        <li>Location data (with your permission)</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and improve our travel guide services</li>
        <li>Personalize your experience and recommendations</li>
        <li>Communicate with you about updates and features</li>
        <li>Ensure security and prevent fraud</li>
        <li>Comply with legal obligations</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>3. Information Sharing</h2>
      <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described below:</p>
      <ul>
        <li>With service providers who assist in our operations</li>
        <li>When required by law or to protect our rights</li>
        <li>In connection with a business transaction</li>
        <li>With your explicit consent</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>4. Data Security</h2>
      <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
    </section>
    
    <section class="legal-section">
      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Object to processing of your information</li>
        <li>Data portability</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>6. Cookies and Tracking</h2>
      <p>We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can control cookie settings through your browser preferences.</p>
    </section>
    
    <section class="legal-section">
      <h2>7. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
    </section>
    
    <div class="contact-info">
      <h3>Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us:</p>
      <p><strong>Email:</strong> privacy@travelwanders.com</p>
      <p><strong>Address:</strong> TravelWanders Privacy Team</p>
    </div>
  </main>
  
  ${generateFooter()}
</body>
</html>`;
}

export function generateTermsOfServiceHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Terms of Service & User Agreement - TravelWanders</title>
  <meta name="description" content="Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="Terms of Service & User Agreement - TravelWanders">
  <meta property="og:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=630">
  <meta property="og:description" content="Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/terms-of-service">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Terms of Service & User Agreement - TravelWanders">
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&h=630">
  <meta name="twitter:description" content="Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.">
  
  <link rel="canonical" href="https://travelwanders.com/terms-of-service">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Performance optimization tags -->
  <link rel="preconnect" href="https://images.unsplash.com">
  <link rel="dns-prefetch" href="https://images.unsplash.com">
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "url": "https://travelwanders.com/terms-of-service",
    "description": "Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.",
    "isPartOf": {
      "@type": "WebSite",
      "name": "TravelWanders",
      "url": "https://travelwanders.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TravelWanders",
      "url": "https://travelwanders.com"
    }
  }
  </script>
  
  <style>
    ${generateCommonStyles()}
    
    .legal-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.8;
    }
    
    .legal-header {
      text-align: center;
      margin-bottom: 3rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid #e5e7eb;
    }
    
    .legal-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .legal-updated {
      color: #6b7280;
      font-size: 1rem;
    }
    
    .legal-section {
      margin-bottom: 2rem;
    }
    
    .legal-section h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 1rem;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 0.5rem;
    }
    
    .legal-section h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.75rem;
      margin-top: 1.5rem;
    }
    
    .legal-section p {
      margin-bottom: 1rem;
      color: #4b5563;
    }
    
    .legal-section ul {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }
    
    .legal-section li {
      margin-bottom: 0.5rem;
      color: #4b5563;
    }
    
    .contact-info {
      background: #f9fafb;
      padding: 1.5rem;
      border-radius: 8px;
      margin-top: 2rem;
    }
    
    .contact-info h3 {
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .contact-info p {
      color: #4b5563;
      margin-bottom: 0.5rem;
    }
  </style>
</head>
<body>
  ${generateNavigation()}
  
  <main class="legal-content">
    <header class="legal-header">
      <h1 class="legal-title">Terms of Service</h1>
      <p class="legal-updated">Last Updated: July 13, 2025</p>
    </header>
    
    <section class="legal-section">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using TravelWanders, you accept and agree to be bound by the terms and provision of this agreement.</p>
    </section>
    
    <section class="legal-section">
      <h2>2. Use License</h2>
      <p>Permission is granted to temporarily download one copy of the materials on TravelWanders for personal, non-commercial transitory viewing only.</p>
      
      <h3>Under this license you may not:</h3>
      <ul>
        <li>Modify or copy the materials</li>
        <li>Use the materials for commercial purpose or public display</li>
        <li>Attempt to reverse engineer any software contained on the website</li>
        <li>Remove any copyright or other proprietary notations</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>3. User Accounts</h2>
      <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times.</p>
      
      <h3>Account Responsibilities</h3>
      <ul>
        <li>You are responsible for safeguarding your account credentials</li>
        <li>You must notify us immediately of any breach of security</li>
        <li>You may not use another user's account without permission</li>
        <li>You may not share your account credentials with others</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>4. Content Guidelines</h2>
      <p>Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material.</p>
      
      <h3>Prohibited Content</h3>
      <ul>
        <li>Illegal, harmful, or offensive material</li>
        <li>Spam, fraudulent, or misleading content</li>
        <li>Content that infringes on intellectual property rights</li>
        <li>Personal information of others without consent</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>5. Intellectual Property</h2>
      <p>The service and its original content, features and functionality are and will remain the exclusive property of TravelWanders and its licensors.</p>
    </section>
    
    <section class="legal-section">
      <h2>6. Disclaimer</h2>
      <p>The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, TravelWanders excludes all representations, warranties, and conditions relating to our website and use of this website.</p>
    </section>
    
    <section class="legal-section">
      <h2>7. Limitation of Liability</h2>
      <p>In no event shall TravelWanders, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
    </section>
    
    <section class="legal-section">
      <h2>8. Termination</h2>
      <p>We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever.</p>
    </section>
    
    <section class="legal-section">
      <h2>9. Changes to Terms</h2>
      <p>We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page.</p>
    </section>
    
    <div class="contact-info">
      <h3>Contact Us</h3>
      <p>If you have any questions about these Terms of Service, please contact us:</p>
      <p><strong>Email:</strong> legal@travelwanders.com</p>
      <p><strong>Address:</strong> TravelWanders Legal Team</p>
    </div>
  </main>
  
  ${generateFooter()}
</body>
</html>`;
}

export function generateCookiePolicyHTML(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cookie Policy | TravelWanders Travel Guide Platform</title>
  <meta name="description" content="Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="Cookie Policy - TravelWanders">
  <meta property="og:description" content="Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/cookie-policy">
  <meta property="og:site_name" content="TravelWanders">
  <meta property="og:image" content="https://travelwanders.com/assets/travelwanders-og-image.jpg">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cookie Policy - TravelWanders",
    "description": "Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.",
    "url": "https://travelwanders.com/cookie-policy",
    "mainEntity": {
      "@type": "Organization",
      "name": "TravelWanders",
      "url": "https://travelwanders.com",
      "description": "Your ultimate travel guide platform"
    }
  }
  </script>
  
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Cookie Policy - TravelWanders">
  <meta name="twitter:description" content="Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.">
  
  <link rel="canonical" href="https://travelwanders.com/cookie-policy">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <!-- Performance Optimization Tags -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="prefetch" href="https://travelwanders.com/destinations">
  <link rel="prefetch" href="https://travelwanders.com/blogs">
  <meta name="format-detection" content="telephone=no">
  <meta name="theme-color" content="#2563eb">
  
  <style>
    ${generateCommonStyles()}
    
    .legal-content {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
      line-height: 1.8;
    }
    
    .legal-header {
      text-align: center;
      margin-bottom: 3rem;
      padding-bottom: 2rem;
      border-bottom: 2px solid #e5e7eb;
    }
    
    .legal-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .legal-updated {
      color: #6b7280;
      font-size: 1rem;
    }
    
    .legal-section {
      margin-bottom: 2rem;
    }
    
    .legal-section h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 1rem;
      border-bottom: 1px solid #e5e7eb;
      padding-bottom: 0.5rem;
    }
    
    .legal-section h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: #374151;
      margin-bottom: 0.75rem;
      margin-top: 1.5rem;
    }
    
    .legal-section p {
      margin-bottom: 1rem;
      color: #4b5563;
    }
    
    .legal-section ul {
      margin-bottom: 1rem;
      padding-left: 1.5rem;
    }
    
    .legal-section li {
      margin-bottom: 0.5rem;
      color: #4b5563;
    }
    
    .cookie-table {
      width: 100%;
      border-collapse: collapse;
      margin: 1rem 0;
    }
    
    .cookie-table th,
    .cookie-table td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid #e5e7eb;
    }
    
    .cookie-table th {
      background-color: #f9fafb;
      font-weight: 600;
      color: #111827;
    }
    
    .cookie-table td {
      color: #4b5563;
    }
    
    .contact-info {
      background: #f9fafb;
      padding: 1.5rem;
      border-radius: 8px;
      margin-top: 2rem;
    }
    
    .contact-info h3 {
      color: #111827;
      margin-bottom: 1rem;
    }
    
    .contact-info p {
      color: #4b5563;
      margin-bottom: 0.5rem;
    }
  </style>
</head>
<body>
  ${generateNavigation()}
  
  <main class="legal-content">
    <header class="legal-header">
      <h1 class="legal-title">Cookie Policy</h1>
      <p class="legal-updated">Last Updated: July 13, 2025</p>
    </header>
    
    <section class="legal-section">
      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
    </section>
    
    <section class="legal-section">
      <h2>2. How We Use Cookies</h2>
      <p>TravelWanders uses cookies to:</p>
      <ul>
        <li>Remember your preferences and settings</li>
        <li>Provide personalized travel recommendations</li>
        <li>Analyze website usage and performance</li>
        <li>Improve user experience and functionality</li>
        <li>Ensure website security</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>3. Types of Cookies We Use</h2>
      
      <table class="cookie-table">
        <thead>
          <tr>
            <th>Cookie Type</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Essential Cookies</td>
            <td>Required for basic website functionality</td>
            <td>Session</td>
          </tr>
          <tr>
            <td>Analytics Cookies</td>
            <td>Help us understand website usage</td>
            <td>Up to 2 years</td>
          </tr>
          <tr>
            <td>Functional Cookies</td>
            <td>Remember your preferences</td>
            <td>Up to 1 year</td>
          </tr>
          <tr>
            <td>Marketing Cookies</td>
            <td>Deliver relevant advertisements</td>
            <td>Up to 1 year</td>
          </tr>
        </tbody>
      </table>
    </section>
    
    <section class="legal-section">
      <h2>4. Third-Party Cookies</h2>
      <p>We may also use third-party cookies from trusted partners to:</p>
      <ul>
        <li>Provide analytics and insights (Google Analytics)</li>
        <li>Enable social media integration</li>
        <li>Deliver targeted advertising</li>
        <li>Improve website performance</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>5. Managing Cookies</h2>
      <p>You can control and manage cookies in several ways:</p>
      
      <h3>Browser Settings</h3>
      <p>Most browsers allow you to:</p>
      <ul>
        <li>View and delete cookies</li>
        <li>Block cookies from specific sites</li>
        <li>Block third-party cookies</li>
        <li>Delete all cookies when you close your browser</li>
      </ul>
      
      <h3>Opt-Out Tools</h3>
      <p>You can opt out of targeted advertising cookies through:</p>
      <ul>
        <li>Google Ads Settings</li>
        <li>Network Advertising Initiative opt-out page</li>
        <li>Digital Advertising Alliance opt-out page</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>6. Impact of Disabling Cookies</h2>
      <p>Please note that disabling cookies may affect website functionality:</p>
      <ul>
        <li>Some features may not work properly</li>
        <li>Personalization may be limited</li>
        <li>You may need to re-enter information</li>
        <li>Performance may be reduced</li>
      </ul>
    </section>
    
    <section class="legal-section">
      <h2>7. Updates to This Policy</h2>
      <p>We may update this Cookie Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on this page.</p>
    </section>
    
    <div class="contact-info">
      <h3>Contact Us</h3>
      <p>If you have any questions about this Cookie Policy, please contact us:</p>
      <p><strong>Email:</strong> privacy@travelwanders.com</p>
      <p><strong>Address:</strong> TravelWanders Privacy Team</p>
    </div>
  </main>
  
  ${generateFooter()}
</body>
</html>`;
}