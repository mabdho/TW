import React from 'react';
import { CityPage } from '../../components/CityPage';

export const SanAntonio: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in San Antonio, USA (2025 Guide)"
      description="Planning a trip to San Antonio? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Historical Landmarks",
        "Cultural Attractions",
        "Local Markets",
        "Scenic Viewpoints",
        "Traditional Cuisine"
]}
      attractions={[
        {
                "name": "Main Historical Site",
                "description": "A significant historical landmark that showcases the rich heritage of the city.",
                "practicalInfo": {
                        "howToGetThere": "Accessible by public transport",
                        "openingHours": "Daily 9:00 AM - 5:00 PM",
                        "cost": "Entry fee applies",
                        "website": "#"
                }
        },
        {
                "name": "Central Market",
                "description": "A vibrant local market perfect for experiencing authentic culture and cuisine.",
                "practicalInfo": {
                        "howToGetThere": "Walking distance from city center",
                        "openingHours": "Monday to Saturday 8:00 AM - 6:00 PM",
                        "cost": "Free to browse",
                        "website": "#"
                }
        },
        {
                "name": "Cultural Museum",
                "description": "Learn about local history, art, and traditions at this comprehensive museum.",
                "practicalInfo": {
                        "howToGetThere": "Bus or metro to museum district",
                        "openingHours": "Tuesday to Sunday 10:00 AM - 4:00 PM",
                        "cost": "Adult tickets from $10",
                        "website": "#"
                }
        }
]}
    />
  );
};