/**
 * Firebase Functions for automatic SEO generation
 * Auto-generates SEO data for cities and blog posts
 */

import { db } from '../firebase-config';
import { generateCitySEOData, generateBlogSEOData, CityData, BlogData } from '../utils/seo';
import { validateSEO } from '../utils/seoValidation';

/**
 * Auto-generate SEO data for city documents
 */
export async function autoGenerateCitySEO(cityId: string, cityData: CityData) {
  try {
    console.log(`Generating SEO data for city: ${cityData.name}`);
    
    // Generate SEO data
    const seoData = generateCitySEOData(cityData);
    
    // Validate SEO data
    const validation = validateSEO(seoData, cityData, 'city');
    seoData.seoScore = validation.score;
    
    // Update city document with SEO data
    await db.collection('cities').doc(cityId).update({
      seo: seoData,
      lastUpdated: new Date().toISOString()
    });
    
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
 * Auto-generate SEO data for blog posts
 */
export async function autoGenerateBlogSEO(blogId: string, blogData: BlogData) {
  try {
    console.log(`Generating SEO data for blog: ${blogData.title}`);
    
    // Generate SEO data
    const seoData = generateBlogSEOData(blogData);
    
    // Validate SEO data
    const validation = validateSEO(seoData, blogData, 'blog');
    seoData.seoScore = validation.score;
    
    // Update blog document with SEO data
    await db.collection('blogs').doc(blogId).update({
      seo: seoData,
      lastUpdated: new Date().toISOString()
    });
    
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
    
    // Get all cities
    const citiesSnapshot = await db.collection('cities').get();
    const cities = citiesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Get all blogs
    const blogsSnapshot = await db.collection('blogs').get();
    const blogs = blogsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    // Generate sitemap XML
    const sitemap = generateSitemapXML(cities, blogs);
    
    // Store sitemap in Firestore
    await db.collection('system').doc('sitemap').set({
      xml: sitemap,
      lastUpdated: new Date().toISOString(),
      totalUrls: cities.length + blogs.length + 3 // +3 for home, destinations, blog pages
    });
    
    console.log(`Sitemap updated with ${cities.length + blogs.length + 3} URLs`);
    
  } catch (error) {
    console.error('Error updating sitemap:', error);
    throw error;
  }
}

/**
 * Generate sitemap XML from data
 */
function generateSitemapXML(cities: any[], blogs: any[]): string {
  const baseUrl = 'https://travelwanders.com';
  
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/destinations</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
`;

  // Add city pages
  cities.forEach(city => {
    const slug = city.seo?.slug || city.name.toLowerCase().replace(/\s+/g, '-');
    xml += `  <url>
    <loc>${baseUrl}/best-things-to-do-in-${slug}</loc>
    <lastmod>${city.lastUpdated || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
  });

  // Add blog pages
  blogs.forEach(blog => {
    const slug = blog.seo?.slug || blog.title.toLowerCase().replace(/\s+/g, '-');
    xml += `  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${blog.lastUpdated || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });

  xml += `</urlset>`;
  
  return xml;
}

/**
 * Batch update SEO for all existing cities
 */
export async function batchUpdateCitySEO() {
  try {
    console.log('Starting batch SEO update for all cities...');
    
    const citiesSnapshot = await db.collection('cities').get();
    const cities = citiesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    const batchSize = 10;
    const batches = [];
    
    for (let i = 0; i < cities.length; i += batchSize) {
      batches.push(cities.slice(i, i + batchSize));
    }
    
    for (const batch of batches) {
      await Promise.all(
        batch.map(async (city) => {
          try {
            await autoGenerateCitySEO(city.id, city);
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
    
    const blogsSnapshot = await db.collection('blogs').get();
    const blogs = blogsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
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