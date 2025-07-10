
import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Tokyo: React.FC = () => {
  return (
    <CityPage
      title="Tokyo Travel Guide"
      description="Discover the best things to do in Tokyo. From ancient temples to cutting-edge technology, our comprehensive guide covers everything you need to know for an unforgettable visit to Japan's dynamic capital."
      highlights={[
        "Senso-ji Temple",
        "Shibuya Crossing", 
        "Tokyo Skytree",
        "Tsukiji Fish Market",
        "Imperial Palace"
      ]}
      attractions={[
        {
          name: "Senso-ji Temple",
          description: "Tokyo's oldest temple, located in historic Asakusa district. This beautiful Buddhist temple offers a glimpse into traditional Japan.",
          practicalInfo: {
            howToGetThere: "Asakusa Station on multiple subway lines",
            openingHours: "Daily 6:00 AM - 5:00 PM",
            cost: "Free admission",
            website: "senso-ji.jp"
          }
        },
        {
          name: "Shibuya Crossing",
          description: "The world's busiest pedestrian crossing, surrounded by neon signs and towering screens. A symbol of modern Tokyo's energy.",
          practicalInfo: {
            howToGetThere: "Shibuya Station, JR Yamanote Line",
            openingHours: "Accessible 24/7",
            cost: "Free to experience",
            website: "shibuya-sky.com"
          }
        }
      ]}
      logistics={{
        gettingAround: "Tokyo has the world's largest urban railway system. Get a JR Pass for tourists. The subway system is extensive and efficient.",
        whereToStay: "Shinjuku for nightlife and transport links, Shibuya for youth culture, Asakusa for traditional atmosphere, Ginza for luxury.",
        bestTimeToVisit: "Spring (March-May) for cherry blossoms or autumn (September-November) for mild weather and fall colors.",
        suggestedItinerary: "Day 1: Asakusa and traditional Tokyo\nDay 2: Shibuya and Harajuku modern districts\nDay 3: Imperial Palace and Ginza\nDay 4: Day trip to Nikko or Kamakura"
      }}
    />
  );
};
