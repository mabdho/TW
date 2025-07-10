/**
 * Data service for internal linking
 * Provides city and blog data for generating related content links
 */

import { CityData, BlogData } from './seo';
import { getAllBlogs } from '../blogs';

/**
 * Get sample city data for internal linking
 * In a real application, this would fetch from an API or database
 */
export function getAllCitiesData(): CityData[] {
  return [
    {
      name: 'Tokyo',
      country: 'Japan',
      content: 'Tokyo is a vibrant metropolis offering incredible experiences from ancient temples to modern skyscrapers.',
      imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Shibuya Crossing', description: 'Famous pedestrian crossing' },
        { name: 'Senso-ji Temple', description: 'Historic Buddhist temple' },
        { name: 'Meiji Shrine', description: 'Peaceful Shinto shrine' },
        { name: 'Tsukiji Outer Market', description: 'Fresh seafood market' }
      ]
    },
    {
      name: 'Paris',
      country: 'France',
      content: 'The City of Light offers world-class museums, iconic landmarks, and exceptional cuisine.',
      imageUrl: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Eiffel Tower', description: 'Iconic iron tower' },
        { name: 'Louvre Museum', description: 'World-famous art museum' },
        { name: 'Notre-Dame Cathedral', description: 'Gothic cathedral' },
        { name: 'Champs-Élysées', description: 'Famous avenue' }
      ]
    },
    {
      name: 'New York',
      country: 'United States',
      content: 'The Big Apple is a bustling metropolis with endless entertainment, dining, and cultural attractions.',
      imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Central Park', description: 'Large public park' },
        { name: 'Times Square', description: 'Bright lights and Broadway' },
        { name: 'Statue of Liberty', description: 'Symbol of freedom' },
        { name: 'Empire State Building', description: 'Art Deco skyscraper' }
      ]
    },
    {
      name: 'London',
      country: 'United Kingdom',
      content: 'London combines royal heritage with modern innovation, offering world-class attractions and culture.',
      imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Tower of London', description: 'Historic castle' },
        { name: 'British Museum', description: 'World history museum' },
        { name: 'Big Ben', description: 'Famous clock tower' },
        { name: 'Buckingham Palace', description: 'Royal residence' }
      ]
    },
    {
      name: 'Barcelona',
      country: 'Spain',
      content: 'Barcelona enchants visitors with Gaudí architecture, Mediterranean beaches, and vibrant culture.',
      imageUrl: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Sagrada Família', description: 'Gaudí masterpiece' },
        { name: 'Park Güell', description: 'Colorful mosaic park' },
        { name: 'Las Ramblas', description: 'Famous pedestrian street' },
        { name: 'Gothic Quarter', description: 'Medieval neighborhood' }
      ]
    },
    {
      name: 'Sydney',
      country: 'Australia',
      content: 'Sydney offers iconic landmarks, beautiful beaches, and a laid-back Australian lifestyle.',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Sydney Opera House', description: 'Iconic performing arts venue' },
        { name: 'Harbour Bridge', description: 'Famous steel arch bridge' },
        { name: 'Bondi Beach', description: 'Popular surfing beach' },
        { name: 'Royal Botanic Gardens', description: 'Waterfront gardens' }
      ]
    },
    {
      name: 'Rome',
      country: 'Italy',
      content: 'The Eternal City showcases thousands of years of history, art, and incredible Italian cuisine.',
      imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Colosseum', description: 'Ancient amphitheater' },
        { name: 'Vatican City', description: 'Papal state and museums' },
        { name: 'Trevi Fountain', description: 'Baroque fountain' },
        { name: 'Roman Forum', description: 'Ancient Roman ruins' }
      ]
    },
    {
      name: 'Bangkok',
      country: 'Thailand',
      content: 'Bangkok blends ancient temples with modern city life, offering incredible street food and culture.',
      imageUrl: 'https://images.unsplash.com/photo-1563492065-8dd88d468014?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Grand Palace', description: 'Royal palace complex' },
        { name: 'Wat Pho', description: 'Temple of the Reclining Buddha' },
        { name: 'Chatuchak Market', description: 'Massive weekend market' },
        { name: 'Khao San Road', description: 'Backpacker street' }
      ]
    },
    {
      name: 'Dubai',
      country: 'United Arab Emirates',
      content: 'Dubai is a futuristic city with world-class shopping, dining, and architectural marvels.',
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Burj Khalifa', description: 'World\'s tallest building' },
        { name: 'Dubai Mall', description: 'Massive shopping center' },
        { name: 'Palm Jumeirah', description: 'Artificial island' },
        { name: 'Dubai Marina', description: 'Waterfront district' }
      ]
    },
    {
      name: 'Berlin',
      country: 'Germany',
      content: 'Berlin combines rich history with cutting-edge culture, offering museums, nightlife, and historical sites.',
      imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?auto=format&fit=crop&w=1400&fm=webp',
      attractions: [
        { name: 'Brandenburg Gate', description: 'Historic gate' },
        { name: 'Berlin Wall Memorial', description: 'Historical site' },
        { name: 'Museum Island', description: 'UNESCO World Heritage site' },
        { name: 'Reichstag Building', description: 'German parliament' }
      ]
    }
  ];
}

/**
 * Get all blog data for internal linking
 */
export function getAllBlogsData(): BlogData[] {
  const blogs = getAllBlogs();
  
  return blogs.map(blog => ({
    title: blog.title,
    content: blog.content,
    excerpt: blog.excerpt,
    category: blog.category,
    author: blog.author,
    publishedAt: blog.date
  }));
}

/**
 * Find city data by name
 */
export function getCityByName(cityName: string): CityData | undefined {
  const cities = getAllCitiesData();
  return cities.find(city => 
    city.name.toLowerCase() === cityName.toLowerCase()
  );
}

/**
 * Find blog data by title
 */
export function getBlogByTitle(title: string): BlogData | undefined {
  const blogs = getAllBlogsData();
  return blogs.find(blog => 
    blog.title.toLowerCase() === title.toLowerCase()
  );
}

/**
 * Get cities from the same country
 */
export function getCitiesByCountry(country: string, excludeCity?: string): CityData[] {
  const cities = getAllCitiesData();
  return cities.filter(city => 
    city.country === country && 
    (!excludeCity || city.name !== excludeCity)
  );
}

/**
 * Get blogs from the same category
 */
export function getBlogsByCategory(category: string, excludeTitle?: string): BlogData[] {
  const blogs = getAllBlogsData();
  return blogs.filter(blog => 
    blog.category === category && 
    (!excludeTitle || blog.title !== excludeTitle)
  );
}