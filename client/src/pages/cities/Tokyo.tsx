import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Tokyo = () => {
  return (
    <CityPage
      title="Best Things to Do in Tokyo"
      description="Discover Tokyo's incredible blend of ancient traditions and cutting-edge modernity. From bustling Shibuya crossing to serene temples, Tokyo offers unforgettable experiences for every traveler."
      highlights={[
        "Experience the world's busiest pedestrian crossing at Shibuya",
        "Visit the iconic Senso-ji Temple in historic Asakusa district",
        "Explore the trendy neighborhoods of Harajuku and Shinjuku",
        "Enjoy authentic sushi at the famous Tsukiji Outer Market",
        "Take in panoramic city views from Tokyo Skytree or Tokyo Tower"
      ]}
      attractions={[
        {
          name: "Shibuya Crossing",
          description: "The world's busiest pedestrian crossing, a symbol of Tokyo's energy and pace. Experience the organized chaos as thousands of people cross simultaneously.",
          rating: 4.6,
          category: "landmark",
          timeRequired: "30 minutes",
          bestTimeToVisit: "Evening for the best neon lighting"
        },
        {
          name: "Senso-ji Temple",
          description: "Tokyo's oldest temple dating back to 628 AD. Located in Asakusa, it offers a glimpse into Japan's spiritual heritage with its impressive main hall and five-story pagoda.",
          rating: 4.5,
          category: "cultural",
          timeRequired: "1-2 hours",
          bestTimeToVisit: "Early morning to avoid crowds"
        },
        {
          name: "Tokyo Skytree",
          description: "The world's second-tallest structure offering breathtaking panoramic views of Tokyo. Features observation decks, shopping, and dining facilities.",
          rating: 4.4,
          category: "landmark",
          timeRequired: "2-3 hours",
          bestTimeToVisit: "Sunset for day and night views"
        },
        {
          name: "Meiji Shrine",
          description: "A peaceful Shinto shrine dedicated to Emperor Meiji, surrounded by a lush forest in the heart of the city. A perfect escape from Tokyo's hustle and bustle.",
          rating: 4.5,
          category: "cultural",
          timeRequired: "1-2 hours",
          bestTimeToVisit: "Early morning for tranquility"
        },
        {
          name: "Tsukiji Outer Market",
          description: "A food lover's paradise offering the freshest sushi, street food, and traditional Japanese ingredients. The perfect place to experience Tokyo's culinary culture.",
          rating: 4.3,
          category: "food",
          timeRequired: "2-3 hours",
          bestTimeToVisit: "Early morning when shops open"
        }
      ]}
      imageUrl="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1400&fm=webp"
      galleryImages={[
        {
          url: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?auto=format&fit=crop&w=800&fm=webp",
          alt: "Shibuya Crossing at night",
          caption: "The iconic Shibuya Crossing illuminated at night"
        },
        {
          url: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=800&fm=webp",
          alt: "Senso-ji Temple",
          caption: "The historic Senso-ji Temple in Asakusa"
        }
      ]}
      logistics={{
        bestTimeToVisit: "Spring (March-May) and Autumn (September-November) offer pleasant weather and beautiful seasonal colors.",
        howToGetThere: "Tokyo is served by two major airports: Narita and Haneda. The city has an excellent public transportation system including JR trains, subways, and buses.",
        whereToStay: "Popular areas include Shibuya, Shinjuku, Ginza, and Asakusa. Consider proximity to train stations for easy access to attractions.",
        budgetTips: "Use a JR Pass for unlimited train travel. Eat at local restaurants and convenience stores for affordable meals. Many temples and parks are free to visit."
      }}
      faqs={[
        {
          question: "What's the best time to visit Tokyo?",
          answer: "Spring (March-May) and autumn (September-November) offer the most pleasant weather. Spring features beautiful cherry blossoms, while autumn offers colorful foliage."
        },
        {
          question: "How many days do I need in Tokyo?",
          answer: "A minimum of 3-4 days is recommended to see the main attractions, but 7-10 days allows for a more thorough exploration of the city's diverse neighborhoods and day trips."
        },
        {
          question: "Is Tokyo expensive for tourists?",
          answer: "Tokyo can be expensive, but there are budget-friendly options. Use local trains, eat at casual restaurants, and visit free attractions like parks and temples to keep costs down."
        }
      ]}
      cityName="Tokyo"
      country="Japan"
    />
  );
};