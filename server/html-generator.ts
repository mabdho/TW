import * as fs from 'fs';
import * as path from 'path';
import { readFileSync, existsSync } from 'fs';

// Utility function to get the correct HTML output directory based on environment
function getHtmlOutputDirectory(): string {
  // For Firebase deployment, use dist/public
  // For development, use public
  const isFirebaseDeployment = process.env.NODE_ENV === 'production' || process.env.FIREBASE_DEPLOYMENT === 'true';
  
  if (isFirebaseDeployment) {
    return path.join(process.cwd(), 'dist', 'public');
  } else {
    return path.join(process.cwd(), 'public');
  }
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

// Helper function to read city data from React components
function readCityDataFromComponents(): Array<{ name: string; country: string; route: string; continent?: string; imageUrl?: string }> {
  try {
    // Read CityDirectory.tsx to get the main city list
    const cityDirectoryPath = path.join(process.cwd(), 'client', 'src', 'components', 'CityDirectory.tsx');
    const cityDirectoryContent = fs.readFileSync(cityDirectoryPath, 'utf-8');
    
    // Extract the cities array from the file
    const citiesMatch = cityDirectoryContent.match(/const cities = \[([\s\S]*?)\];/);
    if (!citiesMatch) {
      console.warn('Could not find cities array in CityDirectory.tsx, falling back to default cities');
      return getDefaultCities();
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
    
    return cities.length > 0 ? cities : getDefaultCities();
  } catch (error) {
    console.error('Error reading city data from components:', error);
    return getDefaultCities();
  }
}

// Helper function to read featured cities from React components
function readFeaturedCitiesFromComponents(): Array<{ name: string; country: string; route: string; continent?: string; imageUrl?: string }> {
  try {
    // Read FeaturedCities.tsx to get the featured cities list
    const featuredCitiesPath = path.join(process.cwd(), 'client', 'src', 'components', 'FeaturedCities.tsx');
    const featuredCitiesContent = fs.readFileSync(featuredCitiesPath, 'utf-8');
    
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
    
    return cities.length > 0 ? cities : readCityDataFromComponents().slice(0, 6);
  } catch (error) {
    console.error('Error reading featured cities from components:', error);
    return readCityDataFromComponents().slice(0, 6);
  }
}

// Fallback default cities
function getDefaultCities() {
  return [
    { name: 'Austin', country: 'USA', route: '/best-things-to-do-in-austin', continent: 'North America' },
    { name: 'Berlin', country: 'Germany', route: '/best-things-to-do-in-berlin', continent: 'Europe' },
    { name: 'Miami', country: 'USA', route: '/best-things-to-do-in-miami', continent: 'North America' },
    { name: 'Milan', country: 'Italy', route: '/best-things-to-do-in-milan', continent: 'Europe' },
    { name: 'Porto', country: 'Portugal', route: '/best-things-to-do-in-porto', continent: 'Europe' },
    { name: 'Venice', country: 'Italy', route: '/best-things-to-do-in-venice', continent: 'Europe' },
    { name: 'Zurich', country: 'Switzerland', route: '/best-things-to-do-in-zurich', continent: 'Europe' }
  ];
}

// Helper function to read blog data from file system
export function readBlogDataFromFileSystem(): Array<{ id: string; title: string; excerpt: string; category: string; imageUrl?: string; featured: boolean; readTime: string; date: string; author?: string }> {
  try {
    console.log('🔍 Reading blog data from file system...');
    
    // Read blog index file
    const blogIndexPath = path.join(process.cwd(), 'client', 'src', 'blogs', 'index.ts');
    if (!fs.existsSync(blogIndexPath)) {
      console.warn('Blog index file not found, returning empty array');
      return [];
    }
    
    const blogIndexContent = fs.readFileSync(blogIndexPath, 'utf-8');
    
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
        
        if (fs.existsSync(blogFilePath)) {
          try {
            const blogFileContent = fs.readFileSync(blogFilePath, 'utf-8');
            
            // Extract blog data from the individual file
            const blogDataMatch = blogFileContent.match(/export const \w+(?:Blog)?: Blog = \{([\s\S]*?)\};/);
            if (blogDataMatch) {
              const blogData = blogDataMatch[1];
              
              // Parse the blog data with more robust regex patterns
              const id = blogData.match(/id:\s*["']([^"']+)["']/)?.[1];
              const title = blogData.match(/title:\s*["']([^"']+)["']/)?.[1];
              const excerpt = blogData.match(/excerpt:\s*["']([^"']+)["']/)?.[1];
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
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
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

  /* Intelligent Internal Links Styles - Matching TSX Component */
  .internal-links-description {
    text-align: center;
    margin-bottom: 2rem;
  }

  .internal-links-description p {
    color: #6b7280;
    max-width: 48rem;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.6;
  }

  .internal-links-grid,
  .intelligent-links-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .internal-link-card {
    display: block;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-decoration: none;
    transition: all 0.3s ease;
    height: 100%;
  }

  .internal-link-card:hover {
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-2px);
    border-color: #10b981;
  }

  .internal-link-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .internal-link-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  .internal-link-badge {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
  }

  .internal-link-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.75rem;
    line-height: 1.4;
    transition: color 0.3s ease;
  }

  .internal-link-card:hover .internal-link-title {
    color: #10b981;
  }

  .internal-link-country {
    color: #6b7280;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }

  .internal-link-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #10b981;
    font-weight: 500;
    font-size: 0.875rem;
  }

  .internal-link-arrow {
    transition: transform 0.3s ease;
  }

  .internal-link-card:hover .internal-link-arrow {
    transform: translateX(4px);
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

// Generate complete HTML page matching CityPage React component structure
// Intelligent internal linking system matching the TSX component functionality
const CITY_LINKS = [
  {
    name: 'Milan',
    url: '/best-things-to-do-in-milan',
    country: 'Italy',
    keywords: ['fashion', 'design', 'cathedral', 'opera', 'italy', 'duomo', 'scala', 'gothic', 'architecture']
  },
  {
    name: 'Porto',
    url: '/best-things-to-do-in-porto', 
    country: 'Portugal',
    keywords: ['port wine', 'douro', 'portugal', 'azulejo', 'tiles', 'river', 'unesco', 'historic']
  },
  {
    name: 'Venice',
    url: '/best-things-to-do-in-venice',
    country: 'Italy',
    keywords: ['canals', 'gondola', 'italy', 'bridges', 'piazza', 'san marco', 'romantic', 'islands']
  },
  {
    name: 'Berlin',
    url: '/best-things-to-do-in-berlin',
    country: 'Germany',
    keywords: ['history', 'wall', 'germany', 'museums', 'culture', 'art', 'nightlife', 'brandenburg']
  },
  {
    name: 'Bologna',
    url: '/best-things-to-do-in-bologna',
    country: 'Italy',
    keywords: ['food', 'university', 'italy', 'towers', 'cuisine', 'medieval', 'pasta', 'emilia-romagna']
  },
  {
    name: 'Zurich',
    url: '/best-things-to-do-in-zurich',
    country: 'Switzerland',
    keywords: ['lakes', 'mountains', 'switzerland', 'banks', 'chocolate', 'old town', 'alpine', 'luxury']
  }
];

function getRelatedCityLinks(currentCityName: string, maxLinks: number = 3) {
  const currentCity = CITY_LINKS.find(city => city.name.toLowerCase() === currentCityName.toLowerCase());
  
  if (!currentCity) {
    return CITY_LINKS.slice(0, maxLinks);
  }
  
  // Score cities based on shared keywords and same country
  const scoredCities = CITY_LINKS
    .filter(city => city.name.toLowerCase() !== currentCityName.toLowerCase())
    .map(city => {
      let score = 0;
      
      // Higher score for same country
      if (city.country === currentCity.country) {
        score += 3;
      }
      
      // Score for shared keywords
      const sharedKeywords = city.keywords.filter(keyword => 
        currentCity.keywords.some(currentKeyword => 
          currentKeyword.includes(keyword) || keyword.includes(currentKeyword)
        )
      );
      score += sharedKeywords.length;
      
      return { ...city, score };
    })
    .sort((a, b) => b.score - a.score);
    
  return scoredCities.slice(0, maxLinks);
}

function generateIntelligentInternalLinks(cityName: string): string {
  const relatedCities = getRelatedCityLinks(cityName, 3);
  
  return `
    <div class="intelligent-links-container">
      ${relatedCities.map(city => `
        <a href="https://travelwanders.com${city.url}" class="internal-link-card">
          <div class="internal-link-content">
            <div class="internal-link-header">
              <span class="internal-link-icon">📍</span>
              <span class="internal-link-badge">Destination</span>
            </div>
            <h3 class="internal-link-title">Best Things to Do in ${city.name}</h3>
            <div class="internal-link-country">${city.country}</div>
            <div class="internal-link-action">
              <span>Explore Destination</span>
              <span class="internal-link-arrow">→</span>
            </div>
          </div>
        </a>
      `).join('')}
      
      <!-- Additional site links -->
      <a href="https://travelwanders.com/destinations" class="internal-link-card">
        <div class="internal-link-content">
          <div class="internal-link-header">
            <span class="internal-link-icon">🌍</span>
            <span class="internal-link-badge">Category</span>
          </div>
          <h3 class="internal-link-title">All Destinations</h3>
          <div class="internal-link-country">Travel Guides</div>
          <div class="internal-link-action">
            <span>Browse Category</span>
            <span class="internal-link-arrow">→</span>
          </div>
        </div>
      </a>
      
      <a href="https://travelwanders.com/blogs" class="internal-link-card">
        <div class="internal-link-content">
          <div class="internal-link-header">
            <span class="internal-link-icon">📚</span>
            <span class="internal-link-badge">Blog</span>
          </div>
          <h3 class="internal-link-title">Travel Tips & Guides</h3>
          <div class="internal-link-country">Expert Advice</div>
          <div class="internal-link-action">
            <span>Read Articles</span>
            <span class="internal-link-arrow">→</span>
          </div>
        </div>
      </a>
    </div>
  `;
}

export function generateCompleteHTML(cityData: CityData): string {
  const seoTitle = cityData.title || `Best Things to Do in ${cityData.cityName}, ${cityData.country}`;
  const seoDescription = (cityData.description || 'Explore this amazing destination').substring(0, 160) + '...';
  
  const heroStyle = `background-image: url('${cityData.imageUrl || ''}');`;
  
  // Create hero section with proper title and badges like React component
  const heroHTML = `
    <div class="hero-section" style="${heroStyle}">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-breadcrumb">
          <span>${cityData.country || 'Country'}</span> › <span>${cityData.cityName}</span>
        </div>
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

  const allAttractionsHTML = cityData.attractions.map(attraction => 
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

  // Generate tab-based content structure
  const overviewContent = `
    <div class="tab-content active" id="overview">
      <div class="container">
        ${cityData.description ? `
        <section class="section">
          <div class="description-content">
            <div class="description-text">${convertMarkdownToHTML(cityData.description)}</div>
          </div>
        </section>
        ` : ''}
        <section class="section">
          <h2 class="section-title">✨ Highlights</h2>
          <div class="highlights-grid">
            ${highlightsHTML}
          </div>
        </section>
        ${discoveryCardsHTML}
        
        <!-- Intelligent Internal Links Section for SEO -->
        <section class="section">
          <h2 class="section-title">🔗 Related Destinations</h2>
          <div class="internal-links-description">
            <p>Explore more amazing destinations and discover the best things to do in other incredible cities. Planning your next adventure? Don't miss our comprehensive travel guides for other wonderful destinations.</p>
          </div>
          <div class="internal-links-grid">
            ${generateIntelligentInternalLinks(cityData.cityName)}
          </div>
        </section>
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

  const faqsHTML = cityData.faqs ? cityData.faqs.map(faq => 
    `<div class="faq-item">
      <div class="faq-question">${faq.question}</div>
      <div class="faq-answer">${faq.answer}</div>
    </div>`
  ).join('') : '';
  
  const faqsContent = cityData.faqs && cityData.faqs.length > 0 ? `
    <div class="tab-content" id="faqs">
      <div class="container">
        <section class="section">
          <h2 class="section-title">❓ Frequently Asked Questions</h2>
          ${faqsHTML}
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
    <meta name="keywords" content="${cityData.tags && cityData.tags.length > 0 ? cityData.tags.join(', ') + ', ' : ''}things to do in ${cityData.cityName}, ${cityData.cityName} travel guide, ${cityData.cityName} attractions, ${cityData.cityName} ${cityData.country}">
    <meta name="robots" content="index, follow">
    <meta name="author" content="${cityData.author || 'TravelWanders'}">
    ${cityData.lastUpdated ? `<meta name="last-modified" content="${cityData.lastUpdated}">` : ''}
    ${cityData.publishedDate ? `<meta name="article:published_time" content="${cityData.publishedDate}">` : ''}
    <link rel="canonical" href="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    
    <!-- Open Graph tags -->
    <meta property="og:title" content="${seoTitle}">
    <meta property="og:description" content="${seoDescription}">
    <meta property="og:image" content="${cityData.imageUrl}">
    <meta property="og:url" content="https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}">
    <meta property="og:type" content="article">
    ${cityData.author ? `<meta property="article:author" content="${cityData.author}">` : ''}
    
    <!-- Twitter Card tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seoTitle}">
    <meta name="twitter:description" content="${seoDescription}">
    <meta name="twitter:image" content="${cityData.imageUrl}">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "TouristAttraction",
      "name": "${cityData.cityName} Travel Guide",
      "description": "${seoDescription}",
      "image": "${cityData.imageUrl}",
      "url": "https://travelwanders.com/best-things-to-do-in-${cityData.cityName.toLowerCase()}",
      ${cityData.publishedDate ? `"datePublished": "${cityData.publishedDate}",` : ''}
      ${cityData.lastUpdated ? `"dateModified": "${cityData.lastUpdated}",` : ''}
      ${cityData.author ? `"author": {"@type": "Person", "name": "${cityData.author}"},` : ''}
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "${cityData.cityName}",
        "addressCountry": "${cityData.country}"
      }
    }
    </script>
    
    <style>${pageStyles}</style>
</head>
<body>
    <!-- Navigation Header -->
    <nav class="navigation">
        <div class="nav-container">
            <a href="https://travelwanders.com" class="nav-logo">TravelWanders</a>
            <ul class="nav-links">
                <li><a href="https://travelwanders.com" class="nav-link">Home</a></li>
                <li><a href="https://travelwanders.com/destinations" class="nav-link">Destinations</a></li>
                <li><a href="https://travelwanders.com/blogs" class="nav-link">Blogs</a></li>
                <li><a href="https://travelwanders.com/destinations" class="nav-cta">Get Started</a></li>
            </ul>
        </div>
    </nav>

    <div id="root" class="main-content">
        ${heroHTML}
        
        <!-- Tab Navigation -->
        <div class="tabs-container">
          <div class="tabs-list">
            <button class="tab-trigger active" onclick="showTab('overview')">Overview</button>
            <button class="tab-trigger" onclick="showTab('top-attractions')">Top Attractions</button>
            <button class="tab-trigger" onclick="showTab('all-attractions')">All Attractions</button>
            <button class="tab-trigger" onclick="showTab('interactive-explorer')">Interactive Explorer</button>
            <button class="tab-trigger" onclick="showTab('plan-trip')">Plan Your Trip</button>
            ${cityData.faqs && cityData.faqs.length > 0 ? '<button class="tab-trigger" onclick="showTab(\'faqs\')">FAQs</button>' : ''}
          </div>
        </div>
        
        <!-- Tab Contents -->
        ${overviewContent}
        ${topAttractionsContent}
        ${allAttractionsContent}
        ${interactiveExplorerContent}
        ${planTripContent}
        ${faqsContent}
        
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
                        <li><a href="https://travelwanders.com/destinations">Destinations</a></li>
                        <li><a href="https://travelwanders.com/blogs">Travel Blog</a></li>
                        <li><a href="https://travelwanders.com">Home</a></li>
                        <li><a href="https://travelwanders.com/destinations">Featured Cities</a></li>
                    </ul>
                </div>

                <!-- Get Started -->
                <div class="footer-section">
                    <h3>Get Started</h3>
                    <ul>
                        <li><a href="https://travelwanders.com/destinations">Browse Destinations</a></li>
                        <li><a href="https://travelwanders.com/blogs">Travel Inspiration</a></li>
                        <li><a href="https://travelwanders.com/destinations">Plan Your Trip</a></li>
                        <li><a href="https://travelwanders.com/destinations">Discover Places</a></li>
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
  <title>TravelWanders - Discover Amazing Destinations & Travel Guides</title>
  <meta name="description" content="Discover the best travel destinations, attractions, and experiences with TravelWanders. Your ultimate guide to exploring the world with comprehensive city guides and travel tips.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="TravelWanders - Discover Amazing Destinations & Travel Guides">
  <meta property="og:description" content="Discover the best travel destinations, attractions, and experiences with TravelWanders. Your ultimate guide to exploring the world with comprehensive city guides and travel tips.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="TravelWanders - Discover Amazing Destinations & Travel Guides">
  <meta name="twitter:description" content="Discover the best travel destinations, attractions, and experiences with TravelWanders. Your ultimate guide to exploring the world with comprehensive city guides and travel tips.">
  
  <link rel="canonical" href="https://travelwanders.com/">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
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
        
        <h1 class="hero-title">
          Explore the world with
          <span class="hero-gradient-text">confidence</span>
        </h1>
        
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
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>All Destinations - TravelWanders</title>
  <meta name="description" content="Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="All Destinations - TravelWanders">
  <meta property="og:description" content="Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/destinations">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="All Destinations - TravelWanders">
  <meta name="twitter:description" content="Browse our complete collection of travel destinations with detailed guides, attractions, and insider tips for amazing cities worldwide.">
  
  <link rel="canonical" href="https://travelwanders.com/destinations">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
  <style>
    ${generateCommonStyles()}
  </style>
</head>
<body>
  ${generateNavigation()}
  
  <section class="py-16 bg-gradient-to-br from-green-50 to-blue-50">
    <div class="container mx-auto px-4 text-center">
      <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">All Destinations</h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto">Explore our comprehensive collection of travel guides for amazing destinations worldwide.</p>
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
  <title>Travel Blog - TravelWanders</title>
  <meta name="description" content="Get inspired with our travel stories, tips, and destination guides from expert travelers around the world.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="Travel Blog - TravelWanders">
  <meta property="og:description" content="Get inspired with our travel stories, tips, and destination guides from expert travelers around the world.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/blogs">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Travel Blog - TravelWanders">
  <meta name="twitter:description" content="Get inspired with our travel stories, tips, and destination guides from expert travelers around the world.">
  
  <link rel="canonical" href="https://travelwanders.com/blogs">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
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
          ${blog.imageUrl ? `<img src="${blog.imageUrl}" alt="${blog.title}" style="width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0;">` : ''}
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
    const tsxContent = fs.readFileSync(tsxFilePath, 'utf-8');
    
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
      
      ${blogData.imageUrl ? `<img src="${blogData.imageUrl}" alt="${blogData.title}" class="blog-hero-image">` : ''}
    </header>
    
    <div class="blog-body">
      ${convertMarkdownToHTML(blogData.content)}
    </div>
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
  <meta property="og:title" content="Privacy Policy - TravelWanders">
  <meta property="og:description" content="Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/privacy-policy">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Privacy Policy - TravelWanders">
  <meta name="twitter:description" content="Privacy Policy for TravelWanders - Learn how we collect, use, and protect your personal information when you use our travel guide platform.">
  
  <link rel="canonical" href="https://travelwanders.com/privacy-policy">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
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
  <title>Terms of Service - TravelWanders</title>
  <meta name="description" content="Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="Terms of Service - TravelWanders">
  <meta property="og:description" content="Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/terms-of-service">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Terms of Service - TravelWanders">
  <meta name="twitter:description" content="Terms of Service for TravelWanders - Understand the rules and guidelines for using our travel guide platform and services.">
  
  <link rel="canonical" href="https://travelwanders.com/terms-of-service">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
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
  <title>Cookie Policy - TravelWanders</title>
  <meta name="description" content="Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.">
  
  <!-- SEO Meta Tags -->
  <meta property="og:title" content="Cookie Policy - TravelWanders">
  <meta property="og:description" content="Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://travelwanders.com/cookie-policy">
  <meta property="og:site_name" content="TravelWanders">
  
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Cookie Policy - TravelWanders">
  <meta name="twitter:description" content="Cookie Policy for TravelWanders - Learn about how we use cookies and similar technologies to enhance your travel guide experience.">
  
  <link rel="canonical" href="https://travelwanders.com/cookie-policy">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  
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