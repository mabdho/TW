import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs/promises';
import path from 'path';
import { 
  validateSEOData, 
  getSitemap, 
  generateCitySEO, 
  generateBlogSEO, 
  updateSitemapManually, 
  getSEOAnalyticsData, 
  batchUpdateCitiesSEO, 
  batchUpdateBlogsSEO, 
  getRobotsTxt,
  submitSitemapManually,
  getSitemapIndexingStatusRoute
} from "./routes/seo";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin route to generate city pages
  app.post('/api/admin/generate-city-page', async (req, res) => {
    try {
      const { city, country, continent } = req.body;

      if (!city || !country) {
        return res.status(400).json({ error: 'City and country are required' });
      }

      let contentData;

      // Generate content using Gemini with fallback
        let model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
        let modelName = "gemini-2.0-flash-exp";

      const prompt = `You are a professional travel content writer creating an SEO-optimized city guide with interactive discovery features.

Generate content for: ${city}, ${country}${continent ? ` (${continent})` : ''}

Create a comprehensive travel guide with the title: "15 Best Things to Do in ${city}, ${country} (2025 Guide)"

The focus keyword is "Things to do in ${city}" - use this naturally throughout the content.

IMPORTANT: This content will power interactive discovery features including:
- Discovery Cards with insider tips, photo opportunities, experience levels, and CAFES & RESTAURANTS
- Interactive Explorer with filtering by interests, time, cost, and type
- Smart categorization and personalized recommendations

SPECIAL FOCUS FOR CAFES & RESTAURANTS DISCOVERY CARD:
- Include 2-4 notable cafes, restaurants, food markets, or dining experiences as attractions
- Use keywords: "restaurant", "cafe", "coffee", "dining", "food", "cuisine", "eatery", "bistro", "market", "culinary", "meal"
- Describe the dining atmosphere, signature dishes, and local food culture
- Include practical dining info: price range, hours, reservation requirements

Generate content with this EXACT structure in JSON format:
{
  "description": "A meta-style introduction (150-200 words) that uses 'things to do in ${city}' within the first 1-2 lines naturally. Write in a human, engaging tone with varied sentence structure and subtle imperfections that feel authentic.",
  "highlights": ["5-6 one-line must-see places"],
  "attractions": [
    {
      "name": "Attraction Name",
      "description": "Multi-paragraph detailed description (200-300 words each). IMPORTANT: Include specific insider tips, photo opportunities, hidden gems, seasonal highlights, and local secrets. For DINING attractions, describe atmosphere, signature dishes, local specialties, price range, and dining culture. Use phrases like 'tip:', 'recommend', 'best time', 'avoid', 'don't miss', 'be sure to', 'consider', 'worth', 'should', 'hidden', 'secret', 'local favorite', 'view', 'photo', 'picture', 'sunset', 'panoramic', 'stunning', 'restaurant', 'cafe', 'coffee', 'dining', 'food', 'cuisine', 'meal', 'culinary', 'taste', 'flavors'. Vary sentence structure, add subtle imperfections, use natural language with slight redundancy or hesitations that feel human. Break into 2-3 paragraphs.",
      "practicalInfo": {
        "howToGetThere": "Detailed directions with specific transport options",
        "openingHours": "Operating hours with seasonal variations if applicable",
        "cost": "Entry fees with specific amounts when possible, or 'Free'",
        "website": "Official website URL if known, or null"
      },
      "discoveryTags": {
        "timeRequired": "30-60 minutes, 1-2 hours, Half day, or Full day",
        "experienceLevel": "Easy Access, Moderate Adventure, or Local Expert",
        "interests": ["history", "art", "architecture", "nature", "food", "adventure", "relaxation", "photography"],
        "costLevel": "Free, Budget-friendly, Moderate, or Expensive",
        "seasonalBest": "Spring, Summer, Fall, Winter, or Year-round",
        "photoOpportunity": "Describe the best photo spots and timing",
        "insiderTip": "Specific local knowledge or pro tip",
        "hiddenGem": true/false,
        "familyFriendly": true/false,
        "accessibilityNotes": "Any accessibility information"
      }
    }
  ],
  "logistics": {
    "gettingAround": "Transportation options in the city (2-3 paragraphs)",
    "whereToStay": "Accommodation recommendations by area (2-3 paragraphs)", 
    "bestTimeToVisit": "Seasonal information and weather (2-3 paragraphs)",
    "suggestedItinerary": "Day-by-day itinerary suggestions (3-4 paragraphs)"
  },
  "faqs": [
    {
      "question": "What are the best things to do in ${city}?",
      "answer": "Comprehensive answer mentioning top attractions"
    },
    {
      "question": "How many days do you need in ${city}?",
      "answer": "Suggested duration with reasoning"
    },
    {
      "question": "What is ${city} famous for?",
      "answer": "Cultural significance and famous attractions"
    },
    {
      "question": "When is the best time to visit ${city}?",
      "answer": "Seasonal recommendations"
    }
  ],
  "discoveryData": {
    "cityPersonality": "Describe the city's character in 2-3 adjectives",
    "budgetBreakdown": {
      "freeActivities": "List 3-4 free things to do",
      "budgetFriendly": "List 3-4 budget activities with approximate costs",
      "splurgeWorthy": "List 2-3 premium experiences worth the cost"
    },
    "localSecrets": [
      "Hidden gem known mainly to locals",
      "Best photo spot that's not crowded",
      "Local food spot or market recommendation",
      "Best time to avoid crowds at popular spots"
    ],
    "diningHighlights": {
      "mustTryDishes": "3-4 signature local dishes or drinks to try",
      "bestCafes": "2-3 notable cafes with atmosphere descriptions",
      "topRestaurants": "2-3 recommended restaurants with cuisine types",
      "foodMarkets": "Local markets or street food areas",
      "diningTips": "Local dining etiquette, tipping, or reservation tips"
    },
    "seasonalHighlights": {
      "spring": "What's special about visiting in spring",
      "summer": "What's special about visiting in summer", 
      "fall": "What's special about visiting in fall",
      "winter": "What's special about visiting in winter"
    },
    "quickFacts": {
      "totalAttractions": "Number of attractions generated",
      "freeActivities": "Number of free activities",
      "averageTimePerAttraction": "30-60 minutes",
      "walkingFriendly": true/false,
      "publicTransportQuality": "Excellent, Good, Fair, or Limited"
    }
  }
}

Generate 8-15 detailed attractions. MANDATORY: Include 2-4 dining-related attractions (restaurants, cafes, food markets, street food, local cuisine spots). Write in a natural, human tone with:
- Varied sentence structure (mix of long and short sentences)
- Subtle imperfections and hesitations ("perhaps", "I think", mild contradictions)
- Personal touches and reactions
- Natural paragraph breaks
- Avoid overly rigid or textbook-like structure
- Skip slang but maintain conversational flow
- For dining attractions: describe ambiance, signature dishes, pricing, local food culture

For each attraction, include comprehensive discoveryTags:
- timeRequired: Be specific (e.g., "30-60 minutes", "1-2 hours", "Half day", "Full day")
- experienceLevel: "Easy Access", "Moderate Adventure", or "Local Expert"
- interests: Select 2-4 relevant tags from the list
- costLevel: "Free", "Budget-friendly", "Moderate", or "Expensive"
- seasonalBest: Best season to visit or "Year-round"
- photoOpportunity: Specific photo tips and best spots
- insiderTip: Unique local knowledge or pro tip
- hiddenGem: true if it's lesser-known, false if popular
- familyFriendly: true/false based on suitability for families
- accessibilityNotes: Brief accessibility information

Fill out the complete discoveryData section with:
- cityPersonality: 2-3 descriptive words
- budgetBreakdown: Specific lists of activities by price range
- localSecrets: 4 insider tips that locals would know
- diningHighlights: Complete section with local dishes, best cafes, top restaurants, food markets, and dining tips
- seasonalHighlights: What makes each season special
- quickFacts: Accurate statistics about the attractions

Respond ONLY with valid JSON. Do NOT wrap the output in markdown code blocks (like \`\`\`json or \`\`\`). Do not include any commentary. Return only the JSON object.

CRITICAL JSON FORMATTING REQUIREMENTS:
- Use only basic punctuation: periods, commas, apostrophes, hyphens
- NO special characters like smart quotes, em dashes, or ellipsis
- Escape all quotes in text content properly
- Keep descriptions concise to avoid parsing issues

Return only the JSON object with no additional text or formatting.`;

      let result;
      try {
        result = await model.generateContent(prompt);
      } catch (error: any) {
        console.log('Primary model error:', error.status, error.message);
        if (error.status === 503 || error.message.includes('overloaded') || error.message.includes('Service Unavailable')) {
          console.log('Primary model overloaded, trying fallback model...');
          try {
            model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            modelName = "gemini-1.5-flash";
            result = await model.generateContent(prompt);
          } catch (fallbackError: any) {
            console.log('Fallback model also failed, trying gemini-1.5-pro...');
            model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
            modelName = "gemini-1.5-pro";
            result = await model.generateContent(prompt);
          }
        } else {
          throw error;
        }
      }
      const response = await result.response;
      const generatedText = response.text();

      console.log(`Used model: ${modelName}`);
      console.log('AI Response Length:', generatedText.length);
      console.log('AI Response Preview:', generatedText.substring(0, 500));

      // Fix known bad formatting from Gemini
      const cleaned = generatedText
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .replace(/[\u0000-\u001F\u007F]/g, '') // Remove control characters
        .replace(/"/g, '"') // Replace smart quotes with regular quotes
        .replace(/"/g, '"') // Replace smart quotes with regular quotes
        .replace(/'/g, "'") // Replace smart quotes with regular quotes
        .replace(/'/g, "'") // Replace smart quotes with regular quotes
        .replace(/…/g, '...') // Replace ellipsis character
        .replace(/\*([^*]+)\*/g, '$1') // Remove markdown italics
        .replace(/\*\*([^*]+)\*\*/g, '$1') // Remove markdown bold
        .trim();

      // Parse the JSON response with fallback logging
      try {
        contentData = JSON.parse(cleaned);
      } catch (parseError) {
        console.error('Failed to parse Gemini response:', cleaned.slice(0, 500));
        console.error('Full response length:', generatedText.length);
        console.error('Parse error:', parseError.message);
        return res.status(500).json({ 
          error: 'Gemini returned malformed JSON', 
          details: parseError.message,
          responsePreview: cleaned.substring(0, 500)
        });
      }

      // Generate the React component file
      const cityFileName = city.replace(/\s+/g, '');
      const componentCode = generateReactComponent(
        cityFileName,
        contentData,
        '', // heroImageUrl - empty for simplified form
        [], // galleryImages - empty for simplified form
        country
      );

      // Write the file to the filesystem
      const filePath = path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityFileName}.tsx`);
      await fs.writeFile(filePath, componentCode, 'utf8');

      console.log(`Generated city page: ${cityFileName}.tsx`);

      // Update DynamicCityRoute.tsx with new city mapping
      const dynamicRoutePath = path.join(process.cwd(), 'client', 'src', 'components', 'DynamicCityRoute.tsx');
      const dynamicContent = await fs.readFile(dynamicRoutePath, 'utf-8');
      
      const routePath = city.toLowerCase().replace(/\s+/g, '-');
      const cityMapping = `  '${routePath}': createCityImport('${cityFileName}', '../pages/cities/${cityFileName}'),`;
      
      if (!dynamicContent.includes(`'${routePath}':`)) {
        // Find the cityMap object and add the new mapping
        const cityMapStart = dynamicContent.indexOf('const cityMap = {');
        const cityMapEnd = dynamicContent.indexOf('};', cityMapStart);
        
        const beforeCityMap = dynamicContent.slice(0, cityMapEnd);
        const afterCityMap = dynamicContent.slice(cityMapEnd);
        
        const updatedDynamicContent = beforeCityMap + '\n' + cityMapping + '\n' + afterCityMap;
        
        await fs.writeFile(dynamicRoutePath, updatedDynamicContent);
        console.log(`Updated DynamicCityRoute.tsx with ${cityFileName} dynamic import`);
      }
      
      // Auto-integrate into CityDirectory.tsx
      const cityDirectoryPath = path.join(process.cwd(), 'client', 'src', 'components', 'CityDirectory.tsx');
      const cityDirectoryContent = await fs.readFile(cityDirectoryPath, 'utf-8');
      
      // Create city entry
      const cityEntry = `  { "name": "${city}", "country": "${country}", "path": "/${city.toLowerCase().replace(/\s+/g, '-')}", "continent": "${continent}" }`;
      
      // Check if city already exists
      if (!cityDirectoryContent.includes(`"name": "${city}"`)) {
        // Find the end of the cities array and add the new city
        const citiesEndIndex = cityDirectoryContent.indexOf('];');
        const beforeCitiesEnd = cityDirectoryContent.lastIndexOf('\n', citiesEndIndex);
        let updatedCityContent = cityDirectoryContent.slice(0, beforeCitiesEnd) + ',\n' + cityEntry + cityDirectoryContent.slice(beforeCitiesEnd);
        
        // Update the city count in the badge
        const currentCount = (cityDirectoryContent.match(/\{ "name":/g) || []).length;
        const newCount = currentCount + 1;
        updatedCityContent = updatedCityContent.replace(/\d+\+ City Guides/, `${newCount}+ City Guides`);
        
        await fs.writeFile(cityDirectoryPath, updatedCityContent);
        console.log(`Updated CityDirectory.tsx with ${city} entry (${newCount} cities total)`);
        
        // Auto-integrate into Destinations page
        const destinationsPath = path.join(process.cwd(), 'client', 'src', 'pages', 'destinations.tsx');
        const destinationsContent = await fs.readFile(destinationsPath, 'utf-8');
        
        // Check if city already exists in destinations
        if (!destinationsContent.includes(`"name": "${city}"`)) {
          // Find the end of the cities array and add the new city
          const destinationsCitiesEndIndex = destinationsContent.indexOf('];');
          const beforeDestinationsCitiesEnd = destinationsContent.lastIndexOf('\n', destinationsCitiesEndIndex);
          const updatedDestinationsContent = destinationsContent.slice(0, beforeDestinationsCitiesEnd) + ',\n' + cityEntry + destinationsContent.slice(beforeDestinationsCitiesEnd);
          
          await fs.writeFile(destinationsPath, updatedDestinationsContent);
          console.log(`Updated destinations.tsx with ${city} entry`);
        }
        
        // Update Hero component city count
        const heroPath = path.join(process.cwd(), 'client', 'src', 'components', 'Hero.tsx');
        const heroContent = await fs.readFile(heroPath, 'utf-8');
        const updatedHeroContent = heroContent.replace(/\d+\+<\/div>\s*<div[^>]*>Cities<\/div>/, `${newCount}+</div>\n              <div className="text-sm sm:text-base text-white/80">Cities</div>`);
        
        await fs.writeFile(heroPath, updatedHeroContent);
        console.log(`Updated Hero.tsx with new city count: ${newCount}`);
        
        // Update TravelCategories component city count
        const travelCategoriesPath = path.join(process.cwd(), 'client', 'src', 'components', 'TravelCategories.tsx');
        const travelCategoriesContent = await fs.readFile(travelCategoriesPath, 'utf-8');
        const updatedTravelCategoriesContent = travelCategoriesContent.replace(/\d+\+ destinations/g, `${newCount}+ destinations`);
        
        await fs.writeFile(travelCategoriesPath, updatedTravelCategoriesContent);
        console.log(`Updated TravelCategories.tsx with new city count: ${newCount}`);
        
        // Update FeaturedCities component with the new city
        const featuredCitiesPath = path.join(process.cwd(), 'client', 'src', 'components', 'FeaturedCities.tsx');
        const featuredCitiesContent = await fs.readFile(featuredCitiesPath, 'utf-8');
        
        // Get current featured cities array
        const featuredCitiesMatch = featuredCitiesContent.match(/const featuredCities = \[([\s\S]*?)\];/);
        if (featuredCitiesMatch) {
          const currentFeaturedCities = featuredCitiesMatch[1];
          const newCityEntry = `  { "name": "${city}", "country": "${country}", "path": "/${city.toLowerCase().replace(/\s+/g, '-')}", "continent": "${continent}", "imageUrl": "" }`;
          
          // Add new city to the beginning and keep only 8 cities
          const lines = currentFeaturedCities.split('\n').filter(line => line.trim().startsWith('{ "name"'));
          lines.unshift(newCityEntry);
          const updatedFeaturedCities = lines.slice(0, 8).join(',\n');
          
          const updatedFeaturedCitiesContent = featuredCitiesContent.replace(
            /const featuredCities = \[([\s\S]*?)\];/,
            `const featuredCities = [\n${updatedFeaturedCities}\n];`
          );
          
          await fs.writeFile(featuredCitiesPath, updatedFeaturedCitiesContent);
          console.log(`Updated FeaturedCities.tsx with ${city} at the top (image: ${heroImageUrl ? 'yes' : 'no'})`);
        }
      }

      // Auto-generate static HTML for the new city
      try {
        const { generateSingleCityStatic } = await import('../scripts/generate-single-city-static.js');
        const staticGenerated = await generateSingleCityStatic(routePath, city);
        
        res.json({
          success: true,
          cityName: cityFileName,
          generatedCode: componentCode,
          filePath: `client/src/pages/cities/${cityFileName}.tsx`,
          staticGenerated,
          message: `City page for ${city} created successfully${staticGenerated ? ' with static HTML generated' : ''} and integrated into navigation`
        });
      } catch (staticError) {
        console.warn('Failed to generate static HTML (build may not exist yet):', staticError.message);
        res.json({
          success: true,
          cityName: cityFileName,
          generatedCode: componentCode,
          filePath: `client/src/pages/cities/${cityFileName}.tsx`,
          staticGenerated: false,
          message: `City page for ${city} created successfully and integrated into navigation (static HTML will be generated on next build)`
        });
      }

    } catch (error) {
      console.error('Error generating city page:', error);
      res.status(500).json({ 
        error: 'Failed to generate city page',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Blog generation route
  app.post('/api/admin/generate-blog', async (req, res) => {
    try {
      const { title, category, imageUrl, author, generationMode, manualContent } = req.body;

      if (!title || !category) {
        return res.status(400).json({ error: 'Title and category are required' });
      }

      let content, excerpt;

      if (generationMode === 'manual') {
        if (!manualContent || !manualContent.content || !manualContent.excerpt) {
          return res.status(400).json({ error: 'Manual content and excerpt are required' });
        }
        content = manualContent.content;
        excerpt = manualContent.excerpt;
      } else {
        // Generate content using Gemini AI
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
        
        const prompt = `Write a comprehensive travel blog post with the title: "${title}"
        
        Category: ${category}
        
        Generate content in this JSON format:
        {
          "excerpt": "A compelling 2-3 sentence excerpt (150-200 characters) that summarizes the post and entices readers",
          "content": "A full blog post (800-1500 words) written in engaging, informative style. Use markdown formatting for headers, lists, and emphasis. Include practical tips, personal insights, and actionable advice for travelers."
        }
        
        Write in a conversational, engaging tone that inspires travel while providing practical value.`;

        const result = await model.generateContent(prompt);
        const generatedText = result.response.text();
        
        // Clean and parse JSON
        const cleaned = generatedText
          .replace(/```json\s*/g, '')
          .replace(/```\s*/g, '')
          .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
          .trim();

        try {
          const parsedContent = JSON.parse(cleaned);
          content = parsedContent.content;
          excerpt = parsedContent.excerpt;
        } catch (parseError) {
          return res.status(500).json({ 
            error: 'Failed to parse AI-generated content', 
            details: parseError.message 
          });
        }
      }

      // Generate blog file
      const blogId = title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-');
      const readTime = Math.ceil(content.split(' ').length / 200) + ' min read';
      
      const blogData = {
        id: blogId,
        title,
        excerpt,
        content,
        category,
        imageUrl: imageUrl || '',
        featured: false,
        readTime,
        date: new Date().toISOString().split('T')[0],
        author: author || 'TravelWanders Team'
      };

      // Create blog component file
      const blogFileName = `${blogId}.tsx`;
      const blogComponentCode = generateBlogComponent(blogData);
      
      // Write blog file
      const blogDirPath = path.join(process.cwd(), 'client', 'src', 'blogs');
      await fs.mkdir(blogDirPath, { recursive: true });
      const blogFilePath = path.join(blogDirPath, blogFileName);
      await fs.writeFile(blogFilePath, blogComponentCode, 'utf8');

      // Update blogs index file
      const indexPath = path.join(blogDirPath, 'index.ts');
      const indexContent = await fs.readFile(indexPath, 'utf-8');
      
      // Add import
      const importStatement = `import { ${blogId.replace(/-/g, '')}Blog } from './${blogId}';`;
      const blogEntry = `  ${blogId.replace(/-/g, '')}Blog,`;
      
      // Update the file
      let updatedContent = indexContent;
      if (!updatedContent.includes(importStatement)) {
        // Add import after existing imports
        const lastImportIndex = updatedContent.lastIndexOf("import");
        if (lastImportIndex === -1) {
          updatedContent = `${importStatement}\n${updatedContent}`;
        } else {
          const afterLastImport = updatedContent.indexOf('\n', lastImportIndex) + 1;
          updatedContent = updatedContent.slice(0, afterLastImport) + importStatement + '\n' + updatedContent.slice(afterLastImport);
        }
        
        // Add to allBlogs array
        const arrayStart = updatedContent.indexOf('export const allBlogs: Blog[] = [');
        const arrayEnd = updatedContent.indexOf('];', arrayStart);
        updatedContent = updatedContent.slice(0, arrayEnd) + blogEntry + '\n' + updatedContent.slice(arrayEnd);
        
        await fs.writeFile(indexPath, updatedContent);
      }

      res.json({
        success: true,
        blogId,
        fileName: blogFileName,
        filePath: `client/src/blogs/${blogFileName}`,
        message: `Blog "${title}" created successfully`
      });

    } catch (error) {
      console.error('Error generating blog:', error);
      res.status(500).json({ 
        error: 'Failed to generate blog',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // SEO API routes
  app.post('/api/seo/validate', validateSEOData);
  app.get('/api/seo/sitemap.xml', getSitemap);
  app.get('/sitemap.xml', getSitemap); // Alternative route for sitemap
  app.post('/api/seo/generate/city/:cityId', generateCitySEO);
  app.post('/api/seo/generate/blog/:blogId', generateBlogSEO);
  app.post('/api/seo/update/sitemap', updateSitemapManually);
  app.get('/api/seo/analytics', getSEOAnalyticsData);
  app.post('/api/seo/batch/cities', batchUpdateCitiesSEO);
  app.post('/api/seo/batch/blogs', batchUpdateBlogsSEO);
  app.get('/robots.txt', getRobotsTxt);
  
  // Sitemap indexing routes
  app.post('/api/seo/submit/sitemap', submitSitemapManually);
  app.get('/api/seo/indexing/status', getSitemapIndexingStatusRoute);

  const httpServer = createServer(app);
  return httpServer;
}

function generateBlogComponent(blogData: any): string {
  const componentName = blogData.id.replace(/-/g, '');
  
  return `import React from 'react';
import { Blog } from '@shared/schema';

export const ${componentName}Blog: Blog = {
  id: "${blogData.id}",
  title: "${blogData.title}",
  excerpt: "${blogData.excerpt}",
  content: \`${blogData.content.replace(/`/g, '\\`')}\`,
  category: "${blogData.category}",
  imageUrl: "${blogData.imageUrl}",
  featured: ${blogData.featured},
  readTime: "${blogData.readTime}",
  date: "${blogData.date}",
  author: "${blogData.author}"
};`;
}

function generateReactComponent(
  cityName: string,
  contentData: any,
  heroImageUrl: string,
  galleryImages: any[],
  country: string
): string {
  const title = `15 Best Things to Do in ${cityName.replace(/([A-Z])/g, ' $1').trim()}, ${country} (2025 Guide)`;
  
  // Format gallery images
  const formattedGalleryImages = galleryImages.map(img => `
        { url: "${img.url || ''}", alt: "${img.alt || ''}", caption: "${img.caption || ''}" }`).join(',');

  // Format highlights
  const formattedHighlights = contentData.highlights.map((h: string) => `"${h}"`).join(',\n        ');

  // Format attractions
  const formattedAttractions = contentData.attractions.map((attraction: any) => `
        {
        name: "${attraction.name}",
        description: \`${attraction.description.replace(/`/g, '\\`')}\`,
        practicalInfo: {
        howToGetThere: "${attraction.practicalInfo?.howToGetThere || ''}",
        openingHours: "${attraction.practicalInfo?.openingHours || ''}",
        cost: "${attraction.practicalInfo?.cost || ''}",
        website: "${attraction.practicalInfo?.website || ''}"
      }
      }`).join(',');

  // Format logistics
  const logistics = contentData.logistics ? `
      logistics={{
        gettingAround: \`${contentData.logistics.gettingAround?.replace(/`/g, '\\`') || ''}\`,
        whereToStay: \`${contentData.logistics.whereToStay?.replace(/`/g, '\\`') || ''}\`,
        bestTimeToVisit: \`${contentData.logistics.bestTimeToVisit?.replace(/`/g, '\\`') || ''}\`,
        suggestedItinerary: \`${contentData.logistics.suggestedItinerary?.replace(/`/g, '\\`') || ''}\`
      }}` : '';

  // Format FAQs
  const faqs = contentData.faqs ? `
      faqs={[${contentData.faqs.map((faq: any) => `
        {
        question: "${faq.question}",
        answer: \`${faq.answer.replace(/`/g, '\\`')}\`
      }`).join(',')}
      ]}` : '';

  return `import React from 'react';
import { CityPage } from '../../components/CityPage';

export const ${cityName}: React.FC = () => {
  return (
    <CityPage
      title={"${title}"}
      description={\`${contentData.description.replace(/`/g, '\\`')}\`}
      galleryImages={[${formattedGalleryImages}
      ]}
      highlights={[${formattedHighlights}]}
      attractions={[${formattedAttractions}
      ]}${logistics}${faqs}
    />
  );
};`;
}
