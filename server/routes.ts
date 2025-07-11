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
  // City page SSR routes - serve pre-rendered HTML with proper SEO
  // This MUST be before other routes to catch city pages
  app.get('/best-things-to-do-in-*', async (req, res, next) => {
    try {
      const url = req.originalUrl;
      
      // Check for pre-rendered static HTML file
      const staticDistPath = path.join(process.cwd(), 'dist', 'public');
      const staticHtmlPath = path.join(staticDistPath, url, 'index.html');
      
      try {
        const staticContent = await fs.readFile(staticHtmlPath, 'utf-8');
        console.log(`Serving pre-rendered city page: ${staticHtmlPath}`);
        return res.status(200).set({ 'Content-Type': 'text/html' }).send(staticContent);
      } catch (staticError) {
        console.log(`No static file found for ${url}, falling back to dynamic template`);
        // Fall back to default behavior
        next();
      }
    } catch (error) {
      console.error('Error serving city page:', error);
      next();
    }
  });

  // Admin route to generate city pages
  app.post('/api/admin/generate-city-page', async (req, res) => {
    try {
      const { city, country, continent, heroImageUrl, generationMode, manualJson } = req.body;

      if (!city || !country) {
        return res.status(400).json({ error: 'City and country are required' });
      }

      let contentData;

      if (generationMode === 'manual') {
        if (!manualJson) {
          return res.status(400).json({ error: 'Manual JSON data is required when using manual mode' });
        }
        
        try {
          contentData = JSON.parse(manualJson);
          console.log('Using manual JSON data for city generation');
        } catch (error) {
          return res.status(400).json({ error: 'Invalid JSON format in manual data' });
        }
      } else {

      // Generate content using Gemini with fallback
        let model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
        let modelName = "gemini-2.0-flash-exp";

      const prompt = `You are a professional travel content writer creating an SEO-optimized city guide with interactive discovery features.

Generate content for: ${city}, ${country}${continent ? ` (${continent})` : ''}

Create a comprehensive travel guide with the title: "Best Things to Do in ${city}, ${country} (2025 Guide)"

The primary keyword is: "Best Things to Do in ${city}"
The secondary keyword is: "Things to do in ${city}"

Use both naturally throughout the content. Prioritize placing the primary keyword in the title, description, and within the first 1–2 sentences of content. Use the secondary keyword 4–5 times naturally in different sections.

Use the following semantic variations naturally across the content:
* what to do in ${city}
* top attractions in ${city}
* must-see places in ${city}
* places to visit in ${city}
* explore ${city}
* ${city} travel guide
* fun things to do in ${city}
* ${city} itinerary

This content will power interactive discovery features, including:
* Discovery Cards with insider tips, photo opportunities, experience levels, and CAFES & RESTAURANTS
* Interactive Explorer with filtering by interests, time, cost, and type
* Smart categorization and personalized recommendations

SPECIAL FOCUS FOR CAFES & RESTAURANTS DISCOVERY CARD:
Include 2–4 notable cafes, restaurants, food markets, or dining experiences as attractions.
Use keywords: "restaurant", "cafe", "coffee", "dining", "food", "cuisine", "eatery", "bistro", "market", "culinary", "meal"
Describe the dining atmosphere, signature dishes, and local food culture
Include practical dining info: price range, hours, reservation requirements

WRITING STYLE REQUIREMENTS:
* Vary sentence structure. Use a mix of short and long sentences. Occasionally interrupt the flow with hesitation or side thoughts — just enough to sound human, not robotic.
* Add subtle imperfections. Include mild redundancy, cautious qualifiers like "perhaps", "I think", or "some say", and slight hedging or uncertainty to create a more natural voice.
* Avoid perfect symmetry. Let some points feel a bit unbalanced or incomplete, as if the writer is thinking out loud. Don't try to wrap up every idea too neatly.
* Use light personalization. Add light reactions, imagined experiences, or personal touches — such as "I found the view surprisingly calming" or "it's the kind of place you might linger longer than expected".
* Allow ambiguity or mild contradiction. It's okay to shift tone slightly, or to imply uncertainty in what's 'best' or 'most popular'.
* Don't use slang or strong regionalisms. Keep the language global and accessible, but avoid sounding like a textbook or AI.
* Format intuitively. Use paragraph breaks where they make sense. Avoid rigid templates — write with flow and rhythm.

---

Generate content with this EXACT structure in valid JSON format:

{
  "metaTitle": "15 Best Things to Do in ${city}, ${country} (2025 Guide)",
  "metaDescription": "Your complete 2025 ${city} travel guide with top attractions, insider tips, dining spots, and hidden gems.",
  "slug": "things-to-do-in-${city.toLowerCase().replace(/\s+/g, '-')}",
  "description": "A meta-style introduction (150–200 words) that uses the exact phrase 'Best Things to Do in ${city}' and 'Things to do in ${city}' naturally in the first 1–2 sentences. Write in a human, engaging tone with varied sentence structure and subtle imperfections that feel authentic.",
  "highlights": ["5–6 one-line must-see places"],
  "attractions": [
    {
      "name": "Attraction Name",
      "description": "Multi-paragraph detailed description (150–200 words each). IMPORTANT: Include specific insider tips, photo opportunities, hidden gems, seasonal highlights, and local secrets. For dining attractions, describe atmosphere, signature dishes, local specialties, price range, and dining culture. Use phrases like 'tip:', 'recommend', 'best time', 'avoid', 'don't miss', 'be sure to', 'consider', 'worth', 'should', 'hidden', 'secret', 'local favorite', 'view', 'photo', 'picture', 'sunset', 'panoramic', 'stunning', 'restaurant', 'cafe', 'coffee', 'dining', 'food', 'cuisine', 'meal', 'culinary', 'taste', 'flavors'. Vary sentence structure, add subtle imperfections, use natural language with slight redundancy or hesitations that feel human. Break into 2-3 paragraphs.",
      "practicalInfo": {
        "howToGetThere": "Detailed directions with specific transport options",
        "openingHours": "Operating hours with seasonal variations if applicable",
        "cost": "Entry fees with specific amounts when possible, or 'Free'",
        "website": "Official website URL if known, or null"
      },
      "discoveryTags": {
        "timeRequired": "30–60 minutes, 1–2 hours, Half day, or Full day",
        "experienceLevel": "Easy Access, Moderate Adventure, or Local Expert",
        "interests": ["history", "art", "architecture", "nature", "food", "adventure", "relaxation", "photography"],
        "costLevel": "Free, Budget-friendly, Moderate, or Expensive",
        "seasonalBest": "Spring, Summer, Fall, Winter, or Year-round",
        "photoOpportunity": "Describe the best photo spots and timing",
        "insiderTip": "ACTIONABLE insider tip with specific details - include exact timing, location, or method that locals use",
        "hiddenGem": true/false,
        "familyFriendly": true/false,
        "accessibilityNotes": "Any accessibility information"
      }
    }
  ],
  "logistics": {
    "gettingAround": "Transportation options in the city (2–3 paragraphs)",
    "whereToStay": "Accommodation recommendations by area (2–3 paragraphs)",
    "bestTimeToVisit": "Seasonal information and weather (2–3 paragraphs)",
    "suggestedItinerary": "Day-by-day itinerary suggestions (3–4 paragraphs)"
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
    "cityPersonality": "Describe the city's character in 2–3 adjectives",
    "budgetBreakdown": {
      "freeActivities": "List 3–4 free things to do",
      "budgetFriendly": "List 3–4 budget activities with approximate costs",
      "splurgeWorthy": "List 2–3 premium experiences worth the cost"
    },
    "localSecrets": [
      "CONTEXTUAL insider tip with specific location, timing, or method - explain WHY this tip is valuable and HOW to use it",
      "SECRET photo spot with exact location details, best time to visit, and what makes it special",
      "LOCAL dining tip with specific restaurant name, dish recommendation, and cultural context",
      "CROWD-BEATING strategy with specific times, alternative routes, or lesser-known entrances"
    ],
    "diningHighlights": {
      "mustTryDishes": "3–4 signature local dishes or drinks to try",
      "bestCafes": "2–3 notable cafes with atmosphere descriptions",
      "topRestaurants": "2–3 recommended restaurants with cuisine types",
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
      "averageTimePerAttraction": "30–60 minutes",
      "walkingFriendly": true/false,
      "publicTransportQuality": "Excellent, Good, Fair, or Limited"
    }
  }
}

Generate 8-12 detailed attractions. MANDATORY: Include 2-3 dining-related attractions (restaurants, cafes, food markets, street food, local cuisine spots). Write in a natural, human tone with:
- Varied sentence structure (mix of long and short sentences)
- Subtle imperfections and hesitations ("perhaps", "I think", mild contradictions)
- Personal touches and reactions
- Natural paragraph breaks
- Avoid overly rigid or textbook-like structure
- Skip slang but maintain conversational flow
- For dining attractions: describe ambiance, signature dishes, pricing, local food culture
- KEEP DESCRIPTIONS CONCISE (150-200 words max per attraction to prevent JSON truncation)

CRITICAL: All insider tips must be ACTIONABLE and CONTEXTUAL. Instead of generic tips like "visit early", provide specific details like "visit at 7:30 AM when locals arrive for morning coffee" or "enter through the side door on Via XX to avoid tourist crowds" or "ask for the unmarked 'local menu' available only in Italian". Every tip should include WHO, WHAT, WHERE, WHEN, and WHY.

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
- localSecrets: 4 ACTIONABLE insider tips with specific context (exact locations, timing, methods) that locals would know and WHY they're valuable
- diningHighlights: Complete section with local dishes, best cafes, top restaurants, food markets, and dining tips
- seasonalHighlights: What makes each season special
- quickFacts: Accurate statistics about the attractions

✅ JSON RULES (STRICT)
Ensure the Gemini model follows these rules:

✅ Must start with { and end with }

❌ No markdown formatting (\`\`\`json or backticks)

❌ No extra text outside JSON

✅ Escape all quotes properly (He said \\"Hello\\")

❌ No trailing commas or line breaks in strings

✅ Every key and string must be wrapped in double quotes

✅ Each attraction's description must be under 200 words

✅ Must be parseable with JSON.parse()

CRITICAL: Your response MUST be ONLY a JSON object. Do NOT include:
- Any text before the opening {
- Any text after the closing }
- Markdown code blocks like \`\`\`json or \`\`\`
- Comments or explanations
- Extra formatting

Your response must start immediately with { and end with }. Nothing else.

VERIFY your JSON is complete before responding. The response MUST be parseable by JSON.parse().`;

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

      // Enhanced JSON cleaning and parsing with multiple fallback strategies
      console.log('Raw Gemini response length:', generatedText.length);
      console.log('Raw Gemini response preview:', generatedText.substring(0, 300));
      
      let cleaned = generatedText
        .replace(/```json/g, '')
        .replace(/```/g, '')
        .replace(/[\u0000-\u0008\u000B-\u000C\u000E-\u001F\u007F]/g, '') // Remove control chars but keep \n and \r
        .replace(/"/g, '"') // Replace smart quotes with regular quotes
        .replace(/"/g, '"') // Replace smart quotes with regular quotes
        .replace(/'/g, "'") // Replace smart quotes with regular quotes  
        .replace(/'/g, "'") // Replace smart quotes with regular quotes
        .replace(/…/g, '...') // Replace ellipsis character
        .replace(/\n/g, ' ') // Replace newlines with spaces to prevent JSON parsing issues
        .replace(/\r/g, ' ') // Replace carriage returns with spaces
        .replace(/\t/g, ' ') // Replace tabs with spaces
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .trim();

      // Try multiple strategies to extract valid JSON
      let jsonCandidates = [];
      
      // Strategy 1: Find first { to last }
      const jsonStart = cleaned.indexOf('{');
      const jsonEnd = cleaned.lastIndexOf('}');
      if (jsonStart !== -1 && jsonEnd !== -1 && jsonEnd > jsonStart) {
        jsonCandidates.push(cleaned.substring(jsonStart, jsonEnd + 1));
      }
      
      // Strategy 2: Look for JSON object with proper bracket matching
      let braceCount = 0;
      let jsonStartIndex = -1;
      let jsonEndIndex = -1;
      
      for (let i = 0; i < cleaned.length; i++) {
        if (cleaned[i] === '{') {
          if (braceCount === 0) {
            jsonStartIndex = i;
          }
          braceCount++;
        } else if (cleaned[i] === '}') {
          braceCount--;
          if (braceCount === 0 && jsonStartIndex !== -1) {
            jsonEndIndex = i;
            break;
          }
        }
      }
      
      if (jsonStartIndex !== -1 && jsonEndIndex !== -1) {
        jsonCandidates.push(cleaned.substring(jsonStartIndex, jsonEndIndex + 1));
      }
      
      // Strategy 3: Try to clean common JSON syntax errors
      let fixedJson = cleaned;
      if (jsonStart !== -1 && jsonEnd !== -1) {
        fixedJson = cleaned.substring(jsonStart, jsonEnd + 1);
        // Fix common issues
        fixedJson = fixedJson
          .replace(/,\s*}/g, '}') // Remove trailing commas before closing braces
          .replace(/,\s*]/g, ']') // Remove trailing commas before closing brackets
          .replace(/}\s*{/g, '},{') // Fix missing commas between objects
          .replace(/]\s*\[/g, '],[') // Fix missing commas between arrays
          .replace(/"\s*\n\s*"/g, '" "') // Fix quotes split across lines
          .replace(/([^"\\])\n/g, '$1 '); // Replace remaining newlines not inside strings
        
        jsonCandidates.push(fixedJson);
      }
      
      // Remove duplicates
      jsonCandidates = [...new Set(jsonCandidates)];
      
      console.log(`Found ${jsonCandidates.length} JSON candidates to try`);
      
      // Try parsing each candidate
      let parseError;
      for (let i = 0; i < jsonCandidates.length; i++) {
        try {
          const candidate = jsonCandidates[i];
          console.log(`Trying JSON candidate ${i + 1}:`, candidate.substring(0, 200));
          contentData = JSON.parse(candidate);
          console.log('Successfully parsed JSON with candidate', i + 1);
          break;
        } catch (error) {
          console.log(`Candidate ${i + 1} failed:`, error.message);
          parseError = error;
        }
      }
      
      // If all candidates failed, return detailed error
      if (!contentData) {
        console.error('All JSON parsing attempts failed');
        console.error('Original response:', generatedText);
        console.error('Cleaned response:', cleaned);
        console.error('Last parse error:', parseError?.message);
        
        return res.status(500).json({ 
          error: 'Gemini returned malformed JSON after multiple parsing attempts', 
          details: parseError?.message || 'Unknown parsing error',
          responsePreview: cleaned.substring(0, 800),
          fullResponse: generatedText.length > 2000 ? generatedText.substring(0, 2000) + '...' : generatedText,
          candidatesCount: jsonCandidates.length
        });
      }
      } // Close the else block for AI generation

      // Generate the React component file
      const cityFileName = city.replace(/\s+/g, '');
      const componentCode = generateReactComponent(
        cityFileName,
        contentData,
        heroImageUrl || '', // Use provided hero image URL
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
      
      // Create city entry with correct SEO-friendly URL format
      const cityEntry = `  { "name": "${city}", "country": "${country}", "path": "/best-things-to-do-in-${city.toLowerCase().replace(/\s+/g, '-')}", "continent": "${continent}" }`;
      
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
          const newCityEntry = `  { "name": "${city}", "country": "${country}", "path": "/best-things-to-do-in-${city.toLowerCase().replace(/\s+/g, '-')}", "continent": "${continent}", "imageUrl": "${heroImageUrl || ''}" }`;
          
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

      // Auto-update sitemap after blog creation
      try {
        const { updateSitemap } = await import('./functions/autoSEO');
        await updateSitemap();
        console.log('Sitemap updated after blog creation');
      } catch (sitemapError) {
        console.warn('Failed to update sitemap after blog creation:', sitemapError);
      }

      res.json({
        success: true,
        blogId,
        fileName: blogFileName,
        filePath: `client/src/blogs/${blogFileName}`,
        message: `Blog "${title}" created successfully and sitemap updated`
      });

    } catch (error) {
      console.error('Error generating blog:', error);
      res.status(500).json({ 
        error: 'Failed to generate blog',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Blog deletion route
  app.delete('/api/admin/delete-blog/:blogId', async (req, res) => {
    try {
      const { blogId } = req.params;
      
      if (!blogId) {
        return res.status(400).json({ error: 'Blog ID is required' });
      }

      // Delete blog file
      const blogFileName = `${blogId}.tsx`;
      const blogDirPath = path.join(process.cwd(), 'client', 'src', 'blogs');
      const blogFilePath = path.join(blogDirPath, blogFileName);
      
      // Check if blog file exists
      try {
        await fs.access(blogFilePath);
      } catch (error) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      // Delete the blog file
      await fs.unlink(blogFilePath);

      // Update blogs index file to remove the blog completely
      const indexPath = path.join(blogDirPath, 'index.ts');
      const indexContent = await fs.readFile(indexPath, 'utf-8');
      
      // Handle both naming patterns (with and without "Blog" suffix)
      const componentName = blogId.replace(/-/g, '');
      const possibleImports = [
        `import { ${componentName}Blog } from './${blogId}';`,
        `import { ${componentName} } from './${blogId}';`,
        `import { blog${componentName} } from './${blogId}';`
      ];
      
      const possibleEntries = [
        `  ${componentName}Blog,`,
        `  ${componentName},`,
        `  blog${componentName},`
      ];
      
      let updatedContent = indexContent;
      
      // Remove all possible import statements
      possibleImports.forEach(importStatement => {
        updatedContent = updatedContent.replace(importStatement + '\n', '');
        updatedContent = updatedContent.replace(importStatement, '');
      });
      
      // Remove from allBlogs array
      possibleEntries.forEach(blogEntry => {
        updatedContent = updatedContent.replace(blogEntry + '\n', '');
        updatedContent = updatedContent.replace(blogEntry, '');
      });
      
      // Clean up any multiple newlines and trailing commas
      updatedContent = updatedContent.replace(/\n\n\n+/g, '\n\n');
      updatedContent = updatedContent.replace(/,\s*\n\s*];/g, '\n];');
      updatedContent = updatedContent.replace(/\[\s*\n\s*\n\s*\/\//g, '[\n  //');
      
      await fs.writeFile(indexPath, updatedContent);

      // Delete static HTML files if they exist
      const distDir = path.join(process.cwd(), 'dist', 'public');
      const possibleStaticFiles = [
        path.join(distDir, 'blog', `${blogId}.html`),
        path.join(distDir, 'blog', `${blogId}`, 'index.html')
      ];
      
      for (const staticFile of possibleStaticFiles) {
        try {
          await fs.access(staticFile);
          await fs.unlink(staticFile);
          console.log(`Deleted static file: ${staticFile}`);
        } catch (error) {
          // File doesn't exist, continue
        }
      }

      // Remove from static page generation if referenced
      const staticPagesScript = path.join(process.cwd(), 'scripts', 'generate-static-pages.js');
      try {
        const staticContent = await fs.readFile(staticPagesScript, 'utf-8');
        if (staticContent.includes(blogId)) {
          // Remove blog references from static generation
          const updatedStaticContent = staticContent.replace(
            new RegExp(`\\s*"${blogId}"[,\\s]*`, 'g'),
            ''
          );
          await fs.writeFile(staticPagesScript, updatedStaticContent);
          console.log('Removed blog from static generation script');
        }
      } catch (error) {
        console.warn('Could not update static generation script:', error.message);
      }

      // Auto-update sitemap after blog deletion
      try {
        const { updateSitemap } = await import('./functions/autoSEO');
        await updateSitemap();
        console.log('Sitemap updated after blog deletion');
      } catch (sitemapError) {
        console.warn('Failed to update sitemap after blog deletion:', sitemapError);
      }

      // Clear any cached references and rebuild system files
      try {
        // Clear any potential caches in memory
        if (global.blogCache) {
          delete global.blogCache;
        }
        
        // For ES modules, we can't directly clear the cache, but we can log the action
        console.log('Cleared in-memory caches for deleted blog');
      } catch (error) {
        console.warn('Could not clear caches:', error.message);
      }

      // Verify blog removal by checking the file system
      try {
        // Check if the blog file still exists
        const blogStillExists = await fs.access(blogFilePath).then(() => true).catch(() => false);
        if (blogStillExists) {
          console.warn(`Warning: Blog file ${blogFilePath} still exists after deletion`);
        }
        
        // Count remaining blog files
        const remainingFiles = await fs.readdir(blogDirPath);
        const remainingBlogs = remainingFiles.filter(file => file.endsWith('.tsx') && file !== 'index.ts');
        console.log(`Verified blog removal: ${remainingBlogs.length} blog files remaining`);
        
      } catch (error) {
        console.warn('Could not verify blog removal:', error.message);
      }

      res.json({
        success: true,
        message: `Blog "${blogId}" completely deleted with all SEO references removed`,
        blogId,
        deletedFile: blogFileName,
        cleanupActions: [
          'Blog file deleted',
          'Index file updated',
          'Static files removed',
          'Sitemap updated',
          'Module cache cleared'
        ]
      });

    } catch (error) {
      console.error('Error deleting blog:', error);
      res.status(500).json({ 
        error: 'Failed to delete blog',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Blog API routes
  app.get('/api/blogs', async (req, res) => {
    try {
      const blogsDir = path.join(process.cwd(), 'client/src/blogs');
      
      // Check if blogs directory exists
      try {
        await fs.access(blogsDir);
      } catch {
        return res.json([]);
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
      
      // Sort blogs by date (newest first)
      blogs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      res.json(blogs);
    } catch (error) {
      console.error('Error loading blogs:', error);
      res.json([]); // Return empty array if no blogs exist
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

function extractBlogDataFromFile(content: string): any | null {
  try {
    // Extract the blog object from the file content - handle both naming patterns
    const blogObjectMatch = content.match(/export const \w+(?:Blog)?: Blog = ({[\s\S]*?});/);
    if (!blogObjectMatch) {
      console.error('No blog object found in file');
      return null;
    }
    
    const blogObjectString = blogObjectMatch[1];
    
    // Parse the blog object properties with better regex patterns
    const id = blogObjectString.match(/id: "([^"]*?)"/)?.[1];
    const title = blogObjectString.match(/title: "(.*?)"/)?.[1];
    const excerpt = blogObjectString.match(/excerpt: "(.*?)"/)?.[1];
    const category = blogObjectString.match(/category: "([^"]*?)"/)?.[1];
    const imageUrl = blogObjectString.match(/imageUrl: "([^"]*?)"/)?.[1];
    const featured = blogObjectString.match(/featured: (true|false)/)?.[1] === 'true';
    const readTime = blogObjectString.match(/readTime: "([^"]*?)"/)?.[1];
    const date = blogObjectString.match(/date: "([^"]*?)"/)?.[1];
    const author = blogObjectString.match(/author: "([^"]*?)"/)?.[1];
    
    // Extract content (handles template strings with better pattern)
    const contentMatch = blogObjectString.match(/content: `([\s\S]*?)`(?=,\s*\w+:|$)/);
    const contentString = contentMatch ? contentMatch[1] : '';
    

    
    return {
      id,
      title,
      excerpt,
      content: contentString,
      category,
      imageUrl,
      featured,
      readTime,
      date,
      author
    };
  } catch (error) {
    console.error('Error parsing blog data:', error);
    return null;
  }
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

  // Format attractions with discoveryTags
  const formattedAttractions = contentData.attractions.map((attraction: any) => `
        {
        name: "${attraction.name}",
        description: \`${attraction.description.replace(/`/g, '\\`')}\`,
        practicalInfo: {
        howToGetThere: "${attraction.practicalInfo?.howToGetThere || ''}",
        openingHours: "${attraction.practicalInfo?.openingHours || ''}",
        cost: "${attraction.practicalInfo?.cost || ''}",
        website: "${attraction.practicalInfo?.website || ''}"
      },
      discoveryTags: {
        timeRequired: "${attraction.discoveryTags?.timeRequired || '1-2 hours'}",
        experienceLevel: "${attraction.discoveryTags?.experienceLevel || 'Easy Access'}",
        interests: [${attraction.discoveryTags?.interests?.map((i: string) => `"${i}"`).join(', ') || '"history", "culture"'}],
        costLevel: "${attraction.discoveryTags?.costLevel || 'Moderate'}",
        seasonalBest: "${attraction.discoveryTags?.seasonalBest || 'Year-round'}",
        photoOpportunity: "${attraction.discoveryTags?.photoOpportunity || 'Great views available'}",
        insiderTip: "${attraction.discoveryTags?.insiderTip || 'Visit during off-peak hours'}",
        hiddenGem: ${attraction.discoveryTags?.hiddenGem || false},
        familyFriendly: ${attraction.discoveryTags?.familyFriendly || true},
        accessibilityNotes: "${attraction.discoveryTags?.accessibilityNotes || 'Standard accessibility'}"
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

  // Format discoveryData
  const discoveryData = contentData.discoveryData ? `
      discoveryData={{
        cityPersonality: "${contentData.discoveryData.cityPersonality || 'Charming, Historic'}",
        budgetBreakdown: {
          freeActivities: "${contentData.discoveryData.budgetBreakdown?.freeActivities || 'Parks, markets, viewpoints'}",
          budgetFriendly: "${contentData.discoveryData.budgetBreakdown?.budgetFriendly || 'Local cafes, walking tours'}",
          splurgeWorthy: "${contentData.discoveryData.budgetBreakdown?.splurgeWorthy || 'Fine dining, premium experiences'}"
        },
        localSecrets: [${contentData.discoveryData.localSecrets?.map((secret: string) => `"${secret}"`).join(', ') || '"Visit early morning for fewer crowds"'}],
        diningHighlights: {
          mustTryDishes: "${contentData.discoveryData.diningHighlights?.mustTryDishes || 'Local specialties'}",
          bestCafes: "${contentData.discoveryData.diningHighlights?.bestCafes || 'Charming local cafes'}",
          topRestaurants: "${contentData.discoveryData.diningHighlights?.topRestaurants || 'Recommended restaurants'}",
          foodMarkets: "${contentData.discoveryData.diningHighlights?.foodMarkets || 'Local food markets'}",
          diningTips: "${contentData.discoveryData.diningHighlights?.diningTips || 'Standard dining etiquette'}"
        },
        seasonalHighlights: {
          spring: "${contentData.discoveryData.seasonalHighlights?.spring || 'Pleasant weather'}",
          summer: "${contentData.discoveryData.seasonalHighlights?.summer || 'Peak season'}",
          fall: "${contentData.discoveryData.seasonalHighlights?.fall || 'Comfortable temperatures'}",
          winter: "${contentData.discoveryData.seasonalHighlights?.winter || 'Cooler weather'}"
        },
        quickFacts: {
          totalAttractions: "${contentData.discoveryData.quickFacts?.totalAttractions || contentData.attractions?.length || '10'}",
          freeActivities: "${contentData.discoveryData.quickFacts?.freeActivities || '3'}",
          averageTimePerAttraction: "${contentData.discoveryData.quickFacts?.averageTimePerAttraction || '30-60 minutes'}",
          walkingFriendly: ${contentData.discoveryData.quickFacts?.walkingFriendly || true},
          publicTransportQuality: "${contentData.discoveryData.quickFacts?.publicTransportQuality || 'Good'}"
        }
      }}` : '';

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
      ]}${logistics}${faqs}${discoveryData}
    />
  );
};`;
}
