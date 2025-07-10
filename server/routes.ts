import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs/promises';
import path from 'path';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin route to generate city pages
  app.post('/api/admin/generate-city-page', async (req, res) => {
    try {
      const { city, country, continent, heroImageUrl, galleryImages, msv, kd } = req.body;

      if (!city || !country) {
        return res.status(400).json({ error: 'City and country are required' });
      }

      // Generate content using Gemini
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

      const prompt = `You are a professional travel content writer creating an SEO-optimized city guide.

Generate content for: ${city}, ${country}${continent ? ` (${continent})` : ''}

Create a comprehensive travel guide with the title: "15 Best Things to Do in ${city}, ${country} (2025 Guide)"

The focus keyword is "Things to do in ${city}" - use this naturally throughout the content.

Generate content with this EXACT structure in JSON format:
{
  "description": "A meta-style introduction (150-200 words) that uses 'things to do in ${city}' within the first 1-2 lines naturally. Write in a human, engaging tone with varied sentence structure and subtle imperfections that feel authentic.",
  "highlights": ["5-6 one-line must-see places"],
  "attractions": [
    {
      "name": "Attraction Name",
      "description": "Multi-paragraph detailed description (200-300 words each). Vary sentence structure, add subtle imperfections, use natural language with slight redundancy or hesitations that feel human. Break into 2-3 paragraphs.",
      "practicalInfo": {
        "howToGetThere": "Detailed directions",
        "openingHours": "Operating hours",
        "cost": "Entry fees or 'Free'",
        "website": "Official website URL if known, or null"
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
  ]
}

Generate 8-15 detailed attractions. Write in a natural, human tone with:
- Varied sentence structure (mix of long and short sentences)
- Subtle imperfections and hesitations ("perhaps", "I think", mild contradictions)
- Personal touches and reactions
- Natural paragraph breaks
- Avoid overly rigid or textbook-like structure
- Skip slang but maintain conversational flow

Return ONLY the JSON object, no additional text.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const generatedText = response.text();

      // Parse the JSON response
      let contentData;
      try {
        contentData = JSON.parse(generatedText);
      } catch (parseError) {
        console.error('Failed to parse Gemini response:', generatedText);
        return res.status(500).json({ error: 'Failed to parse AI response' });
      }

      // Generate the React component file
      const cityFileName = city.replace(/\s+/g, '');
      const componentCode = generateReactComponent(
        cityFileName,
        contentData,
        heroImageUrl,
        galleryImages,
        country
      );

      // Write the file to the filesystem
      const filePath = path.join(process.cwd(), 'client', 'src', 'pages', 'cities', `${cityFileName}.tsx`);
      await fs.writeFile(filePath, componentCode, 'utf8');

      console.log(`Generated city page: ${cityFileName}.tsx`);

      res.json({
        success: true,
        cityName: cityFileName,
        generatedCode: componentCode,
        filePath: `client/src/pages/cities/${cityFileName}.tsx`
      });

    } catch (error) {
      console.error('Error generating city page:', error);
      res.status(500).json({ 
        error: 'Failed to generate city page',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
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
      imageUrl={"${heroImageUrl || ''}"}
      galleryImages={[${formattedGalleryImages}
      ]}
      highlights={[${formattedHighlights}]}
      attractions={[${formattedAttractions}
      ]}${logistics}${faqs}
    />
  );
};`;
}
