/**
 * File System Functions for automatic SEO generation
 * Auto-generates SEO data for cities and blog posts
 */

import { generateCitySEOData, generateBlogSEOData, CityData, BlogData } from '../utils/seo';
import { validateSEO } from '../utils/seoValidation';

/**
 * Auto-generate SEO data for city documents (file system only)
 */
export async function autoGenerateCitySEO(cityId: string, cityData: CityData) {
  try {
    console.log(`Generating SEO data for city: ${cityData.name}`);
    
    // Generate SEO data
    const seoData = generateCitySEOData(cityData);
    
    // Validate SEO data
    const validation = validateSEO(seoData, cityData, 'city');
    seoData.seoScore = validation.score;
    
    console.log(`SEO data generated for ${cityData.name} with score: ${seoData.seoScore}`);
    
    // Update sitemap
    await updateSitemap();
    
    return seoData;
  } catch (error) {
    console.error('Error generating city SEO:', error);
    throw error;
  }
}

/**
 * Auto-generate SEO data for blog posts (file system only)
 */
export async function autoGenerateBlogSEO(blogId: string, blogData: BlogData) {
  try {
    console.log(`Generating SEO data for blog: ${blogData.title}`);
    
    // Generate SEO data
    const seoData = generateBlogSEOData(blogData);
    
    // Validate SEO data
    const validation = validateSEO(seoData, blogData, 'blog');
    seoData.seoScore = validation.score;
    
    console.log(`SEO data generated for blog "${blogData.title}" with score: ${seoData.seoScore}`);
    
    // Update sitemap
    await updateSitemap();
    
    return seoData;
  } catch (error) {
    console.error('Error generating blog SEO:', error);
    throw error;
  }
}

/**
 * Update sitemap when content changes
 */
export async function updateSitemap() {
  try {
    console.log('Updating sitemap...');
    
    // Get all cities from file system (no Firestore)
    const cities = await getFileSystemCities();
    
    // Get all blogs from file system
    const blogs = await getFileSystemBlogs();
    
    // Generate sitemap XML
    const sitemap = generateSitemapXML(cities, blogs);
    
    // Save sitemap to file system
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const sitemapPath = path.join(process.cwd(), 'dist', 'public', 'sitemap.xml');
    
    // Ensure the dist/public directory exists
    const distPublicDir = path.join(process.cwd(), 'dist', 'public');
    try {
      await fs.access(distPublicDir);
    } catch {
      await fs.mkdir(distPublicDir, { recursive: true });
    }
    
    await fs.writeFile(sitemapPath, sitemap, 'utf-8');
    
    console.log(`Sitemap updated with ${cities.length + blogs.length + 6} URLs`);
    
  } catch (error) {
    console.error('Error updating sitemap:', error);
    throw error;
  }
}

/**
 * Get cities from file system instead of database
 */
async function getFileSystemCities() {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const citiesDir = path.join(process.cwd(), 'client/src/pages/cities');
    
    // Check if cities directory exists
    try {
      await fs.access(citiesDir);
    } catch {
      return [];
    }
    
    // Read all files in the cities directory
    const files = await fs.readdir(citiesDir);
    const cityFiles = files.filter(file => file.endsWith('.tsx'));
    
    const cities = [];
    
    for (const file of cityFiles) {
      try {
        const filePath = path.join(citiesDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        
        // Extract city key from filename
        const cityKey = file.replace('.tsx', '');
        
        // Parse the city data from the file content
        const cityData = extractCityDataFromFile(content, cityKey);
        if (cityData) {
          cities.push(cityData);
        }
      } catch (error) {
        console.error(`Error reading city file ${file}:`, error);
      }
    }
    
    return cities;
  } catch (error) {
    console.error('Error getting cities from file system:', error);
    return [];
  }
}

/**
 * Get blogs from file system instead of database
 */
async function getFileSystemBlogs() {
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const blogsDir = path.join(process.cwd(), 'client/src/blogs');
    
    // Check if blogs directory exists
    try {
      await fs.access(blogsDir);
    } catch {
      return [];
    }
    
    // Read all files in the blogs directory
    const files = await fs.readdir(blogsDir);
    const blogFiles = files.filter(file => file.endsWith('.tsx') && file !== 'index.ts');
    
    const blogs = [];
    
    for (const file of blogFiles) {
      try {
        const filePath = path.join(blogsDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        
        // Parse the blog data from the file content
        const blogData = extractBlogDataFromFile(content);
        if (blogData) {
          blogs.push(blogData);
        }
      } catch (error) {
        console.error(`Error reading blog file ${file}:`, error);
      }
    }
    
    return blogs;
  } catch (error) {
    console.error('Error getting file system blogs:', error);
    return [];
  }
}

/**
 * Extract city data from file content for sitemap generation
 */
function extractCityDataFromFile(content: string, cityKey: string): any | null {
  try {
    // Extract city name from React component
    const nameMatch = content.match(/name:\s*['"](.*?)['"]/);
    const countryMatch = content.match(/country:\s*['"](.*?)['"]/);
    
    if (!nameMatch) {
      return null;
    }
    
    return {
      name: nameMatch[1],
      country: countryMatch ? countryMatch[1] : '',
      slug: cityKey,
      url: `/things-to-do-in-${cityKey}`
    };
  } catch (error) {
    console.error('Error extracting city data:', error);
    return null;
  }
}

/**
 * Extract blog data from file content for sitemap generation
 */
function extractBlogDataFromFile(content: string): any | null {
  try {
    // Extract the blog object from the file content - handle both naming patterns
    const blogObjectMatch = content.match(/export const \w+(?:Blog)?: Blog = ({[\s\S]*?});/);
    if (!blogObjectMatch) {
      return null;
    }
    
    const blogObjectString = blogObjectMatch[1];
    
    // Parse the blog object properties
    const id = blogObjectString.match(/id: "([^"]*?)"/)?.[1];
    const title = blogObjectString.match(/title: "(.*?)"/)?.[1];
    const date = blogObjectString.match(/date: "([^"]*?)"/)?.[1];
    
    return {
      id,
      title,
      lastUpdated: date,
      seo: {
        slug: id // Use the ID as slug for sitemap
      }
    };
  } catch (error) {
    console.error('Error parsing blog data:', error);
    return null;
  }
}

/**
 * Generate sitemap XML from data
 */
function generateSitemapXML(cities: any[], blogs: any[]): string {
  const baseUrl = 'https://travelwanders.com';
  const today = new Date().toISOString().split('T')[0];
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/destinations</loc>
    <lastmod>${today}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/blogs</loc>
    <lastmod>${today}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${today}</lastmod>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms-of-service</loc>
    <lastmod>${today}</lastmod>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/cookie-policy</loc>
    <lastmod>${today}</lastmod>
    <priority>0.5</priority>
  </url>
`;

  // Add city pages
  cities.forEach(city => {
    const slug = city.slug || city.name.toLowerCase().replace(/\s+/g, '-');
    xml += `  <url>
    <loc>${baseUrl}/things-to-do-in-${slug}</loc>
    <lastmod>${city.lastUpdated || today}</lastmod>
    <priority>0.9</priority>
  </url>
`;
  });

  // Add blog pages
  blogs.forEach(blog => {
    const slug = blog.seo?.slug || blog.id || blog.title.toLowerCase().replace(/\s+/g, '-');
    xml += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${blog.lastUpdated || today}</lastmod>
    <priority>0.7</priority>
  </url>
`;
  });

  xml += `</urlset>`;
  
  return xml;
}

/**
 * Batch update SEO for all existing cities (file system only)
 */
export async function batchUpdateCitySEO() {
  try {
    console.log('Starting batch SEO update for all cities...');
    
    const cities = await getFileSystemCities();
    
    const batchSize = 10;
    const batches = [];
    
    for (let i = 0; i < cities.length; i += batchSize) {
      batches.push(cities.slice(i, i + batchSize));
    }
    
    for (const batch of batches) {
      await Promise.all(
        batch.map(async (city) => {
          try {
            await autoGenerateCitySEO(city.slug, city);
            console.log(`Updated SEO for ${city.name}`);
          } catch (error) {
            console.error(`Error updating SEO for ${city.name}:`, error);
          }
        })
      );
      
      // Wait between batches to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('Batch SEO update completed');
    
  } catch (error) {
    console.error('Error in batch SEO update:', error);
    throw error;
  }
}

/**
 * Batch update SEO for all existing blogs
 */
export async function batchUpdateBlogSEO() {
  try {
    console.log('Starting batch SEO update for all blogs...');
    
    const blogs = await getFileSystemBlogs();
    
    const batchSize = 10;
    const batches = [];
    
    for (let i = 0; i < blogs.length; i += batchSize) {
      batches.push(blogs.slice(i, i + batchSize));
    }
    
    for (const batch of batches) {
      await Promise.all(
        batch.map(async (blog) => {
          try {
            await autoGenerateBlogSEO(blog.id, blog);
            console.log(`Updated SEO for blog: ${blog.title}`);
          } catch (error) {
            console.error(`Error updating SEO for blog "${blog.title}":`, error);
          }
        })
      );
      
      // Wait between batches to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log('Batch blog SEO update completed');
    
  } catch (error) {
    console.error('Error in batch blog SEO update:', error);
    throw error;
  }
}

/**
 * Get SEO analytics data
 */
export async function getSEOAnalytics() {
  try {
    const citiesSnapshot = await db.collection('cities').get();
    const blogsSnapshot = await db.collection('blogs').get();
    
    const cities = citiesSnapshot.docs.map(doc => doc.data());
    const blogs = blogsSnapshot.docs.map(doc => doc.data());
    
    // Calculate SEO statistics
    const cityScores = cities.map(city => city.seo?.seoScore || 0).filter(score => score > 0);
    const blogScores = blogs.map(blog => blog.seo?.seoScore || 0).filter(score => score > 0);
    
    const avgCityScore = cityScores.length > 0 ? cityScores.reduce((a, b) => a + b, 0) / cityScores.length : 0;
    const avgBlogScore = blogScores.length > 0 ? blogScores.reduce((a, b) => a + b, 0) / blogScores.length : 0;
    
    const analytics = {
      totalCities: cities.length,
      totalBlogs: blogs.length,
      citiesWithSEO: cities.filter(city => city.seo).length,
      blogsWithSEO: blogs.filter(blog => blog.seo).length,
      avgCityScore: Math.round(avgCityScore),
      avgBlogScore: Math.round(avgBlogScore),
      topCities: cities
        .filter(city => city.seo?.seoScore)
        .sort((a, b) => b.seo.seoScore - a.seo.seoScore)
        .slice(0, 10)
        .map(city => ({
          name: city.name,
          country: city.country,
          score: city.seo.seoScore
        })),
      topBlogs: blogs
        .filter(blog => blog.seo?.seoScore)
        .sort((a, b) => b.seo.seoScore - a.seo.seoScore)
        .slice(0, 10)
        .map(blog => ({
          title: blog.title,
          category: blog.category,
          score: blog.seo.seoScore
        })),
      lowScoreCities: cities
        .filter(city => city.seo?.seoScore && city.seo.seoScore < 70)
        .map(city => ({
          name: city.name,
          country: city.country,
          score: city.seo.seoScore
        })),
      lowScoreBlogs: blogs
        .filter(blog => blog.seo?.seoScore && blog.seo.seoScore < 70)
        .map(blog => ({
          title: blog.title,
          category: blog.category,
          score: blog.seo.seoScore
        }))
    };
    
    return analytics;
  } catch (error) {
    console.error('Error getting SEO analytics:', error);
    throw error;
  }
}