import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Paris = () => {
  return (
    <CityPage
      title="Best Things to Do in Paris"
      description="Discover the magic of Paris, the City of Light. From iconic landmarks like the Eiffel Tower to world-class museums and charming neighborhoods, Paris offers romance, culture, and unforgettable experiences."
      highlights={[
        "Visit the iconic Eiffel Tower and climb to its summit",
        "Explore the world's largest art museum, the Louvre",
        "Stroll through the romantic streets of Montmartre",
        "Experience Gothic architecture at Notre-Dame Cathedral",
        "Enjoy authentic French cuisine in local bistros and cafés"
      ]}
      attractions={[
        {
          name: "Eiffel Tower",
          description: "Paris's most iconic landmark, this iron lattice tower offers breathtaking views of the city. Built for the 1889 World's Fair, it remains a symbol of French elegance and engineering prowess.",
          rating: 4.5,
          category: "landmark",
          timeRequired: "2-3 hours",
          bestTimeToVisit: "Early morning or evening for fewer crowds"
        },
        {
          name: "Louvre Museum",
          description: "The world's largest art museum, home to the Mona Lisa and countless masterpieces. This former royal palace houses over 35,000 works of art spanning centuries.",
          rating: 4.6,
          category: "museum",
          timeRequired: "Half day to full day",
          bestTimeToVisit: "Weekday mornings or Wednesday/Friday evenings"
        },
        {
          name: "Notre-Dame Cathedral",
          description: "A masterpiece of Gothic architecture, this medieval cathedral has been the heart of Paris for over 850 years. Currently under restoration following the 2019 fire.",
          rating: 4.4,
          category: "cultural",
          timeRequired: "1-2 hours",
          bestTimeToVisit: "Early morning for peaceful exploration"
        },
        {
          name: "Montmartre & Sacré-Cœur",
          description: "A historic hilltop district known for its artistic heritage, winding cobblestone streets, and the beautiful Sacré-Cœur Basilica offering panoramic city views.",
          rating: 4.5,
          category: "neighborhood",
          timeRequired: "Half day",
          bestTimeToVisit: "Late afternoon for golden hour photography"
        },
        {
          name: "Champs-Élysées & Arc de Triomphe",
          description: "The world's most famous avenue stretching from Place de la Concorde to the Arc de Triomphe. Perfect for shopping, dining, and people-watching.",
          rating: 4.3,
          category: "landmark",
          timeRequired: "2-3 hours",
          bestTimeToVisit: "Afternoon for shopping and evening for illumination"
        }
      ]}
      imageUrl="https://images.unsplash.com/photo-1502602898536-47ad22581b52?auto=format&fit=crop&w=1400&fm=webp"
      galleryImages={[
        {
          url: "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=800&fm=webp",
          alt: "Eiffel Tower at sunset",
          caption: "The Eiffel Tower illuminated at sunset"
        },
        {
          url: "https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&w=800&fm=webp",
          alt: "Louvre Museum pyramid",
          caption: "The iconic glass pyramid at the Louvre Museum"
        }
      ]}
      logistics={{
        bestTimeToVisit: "Late spring (April-June) and early fall (September-October) offer pleasant weather and fewer crowds than summer.",
        howToGetThere: "Paris is served by Charles de Gaulle and Orly airports. The city has excellent public transport including metro, buses, and RER trains.",
        whereToStay: "Popular areas include the Marais, Saint-Germain, Opera, and Montmartre. Choose based on your interests and proximity to attractions.",
        budgetTips: "Many museums offer free entry on first Sundays. Use a Navigo weekly pass for unlimited public transport. Enjoy picnics in parks and visit free attractions like Père Lachaise Cemetery."
      }}
      faqs={[
        {
          question: "How many days should I spend in Paris?",
          answer: "A minimum of 3-4 days allows you to see major attractions, but 5-7 days provides time to explore neighborhoods, museums, and enjoy the Parisian lifestyle at a relaxed pace."
        },
        {
          question: "What's the best way to get around Paris?",
          answer: "The Paris Metro is efficient and covers the entire city. Walking is also great for exploring neighborhoods. Consider a weekly Navigo pass if staying longer than 4 days."
        },
        {
          question: "When is the best time to visit the Eiffel Tower?",
          answer: "Early morning (8-9 AM) or late evening after 8 PM typically have shorter lines. The tower sparkles every hour on the hour after sunset, creating magical photo opportunities."
        }
      ]}
      cityName="Paris"
      country="France"
    />
  );
};