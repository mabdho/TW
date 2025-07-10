
import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Copenhagen: React.FC = () => {
  return (
    <CityPage
      title="Copenhagen Travel Guide"
      description="Discover the best things to do in Copenhagen. From iconic landmarks to hidden gems, our comprehensive guide covers everything you need to know for an unforgettable visit to Denmark's charming capital."
      highlights={[
        "Nyhavn Harbor",
        "Tivoli Gardens", 
        "The Little Mermaid",
        "Rosenborg Castle",
        "Christiania"
      ]}
      attractions={[
        {
          name: "Nyhavn Harbor",
          description: "The most iconic sight in Copenhagen, this picturesque waterfront district features colorful 17th-century townhouses, historic sailing ships, and waterfront cafes.",
          practicalInfo: {
            howToGetThere: "Metro to Kongens Nytorv station, short walk",
            openingHours: "Accessible 24/7",
            cost: "Free to walk around",
            website: "visitcopenhagen.com"
          }
        },
        {
          name: "Tivoli Gardens",
          description: "One of the world's oldest amusement parks, offering beautiful gardens, thrilling rides, and enchanting atmosphere in the heart of Copenhagen.",
          practicalInfo: {
            howToGetThere: "Next to Copenhagen Central Station",
            openingHours: "Varies by season, typically 11:00 AM - 11:00 PM",
            cost: "Admission around 140 DKK",
            website: "tivoli.dk"
          }
        }
      ]}
      logistics={{
        gettingAround: "Copenhagen has excellent public transport including buses, metros, and trains. The city is very bike-friendly with extensive cycling infrastructure.",
        whereToStay: "Stay in the city center near Nyhavn or Tivoli for easy access to attractions. Vesterbro and Nørrebro offer trendy neighborhoods with local character.",
        bestTimeToVisit: "May to September offers the warmest weather and longest days. Winter can be dark and cold but offers cozy hygge atmosphere.",
        suggestedItinerary: "Day 1: Explore Nyhavn and city center\nDay 2: Visit Tivoli Gardens and Rosenborg Castle\nDay 3: Bike tour and visit Christiania"
      }}
    />
  );
};
