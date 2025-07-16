import React from 'react';
import { CityPage } from '../../components/CityPage';

export const SanFrancisco: React.FC = () => {
  return (
    <CityPage
      cityName="San Francisco"
      country="USA"
      title={"Best Things to Do in San Francisco - TravelWanders"}
      description={`Discover the best things to do in San Francisco. Complete travel guide with attractions, activities, and insider tips for your perfect San Francisco adventure.`}
      imageUrl={"https://plus.unsplash.com/premium_photo-1673002094239-c78228fbb426?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2FuJTIwRnJhbmNpc2NvfGVufDB8MHwwfHx8MA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Walk or bike across the Golden Gate Bridge",
        "Explore the notorious Alcatraz Island",
        "Ride a historic cable car",
        "Wander through Fisherman's Wharf",
        "Discover the vibrant murals of the Mission District",
        "Enjoy panoramic city views from Lombard Street"]}
      attractions={[
        {
        name: "Golden Gate Bridge",
        description: `## Overview
The Golden Gate Bridge, an iconic symbol of San Francisco, is a must-see for any visitor. Spanning the Golden Gate strait, this engineering marvel offers breathtaking views of the city, the bay, and the Pacific Ocean. Whether you walk, bike, or drive across it, the experience is truly unforgettable. I found the view surprisingly calming, despite the height.

### Best Photo Spots
For stunning photos, head to Battery Spencer in the Marin Headlands. The overlook provides a panoramic view of the bridge with the city skyline in the background. Another great spot is Fort Point, located directly beneath the bridge on the San Francisco side.

### Insider Tips
Tip: The bridge is often shrouded in fog, especially during the summer months. For the best chance of clear views, visit in the spring or fall. Early mornings tend to have less fog, but it can change quickly! Consider bringing layers of clothing, as it can be quite windy and cold on the bridge, even on a sunny day.`,
        practicalInfo: {
        howToGetThere: "Take the Golden Gate Transit bus or drive. Parking is available at both ends of the bridge.",
        openingHours: "Open 24 hours for pedestrians and cyclists, vehicle access varies.",
        cost: "Free for pedestrians and cyclists. Tolls apply for vehicles heading southbound into San Francisco.",
        website: "goldengate.org"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["architecture", "photography", "nature"],
        costLevel: "Free",
        seasonalBest: "Spring, Fall",
        photoOpportunity: "Panoramic views from Battery Spencer and Fort Point",
        insiderTip: "Visit early in the morning (before 9 AM) on weekdays to avoid heavy crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible to wheelchairs and strollers on designated paths."
      }
      },
        {
        name: "Alcatraz Island",
        description: `## Overview
Alcatraz Island, once a notorious prison, is now a popular tourist destination. A visit to "The Rock" offers a fascinating glimpse into the lives of some of America's most infamous criminals. The audio tour, narrated by former inmates and guards, brings the prison's history to life. The ferry ride to the island offers stunning views of the San Francisco skyline.

### What to Expect
The tour takes about 2.5-3 hours, and it's highly recommended to book tickets well in advance, as they often sell out weeks or even months ahead of time. The island can be chilly, even on a warm day, so dress accordingly.

### Insider Tips
Don't miss the cellhouse audio tour – it's incredibly well-done and provides a compelling narrative of life inside Alcatraz. Also, take some time to explore the island's gardens, which are maintained by volunteers and offer a peaceful contrast to the prison's grim history.`,
        practicalInfo: {
        howToGetThere: "Take the Alcatraz Cruises ferry from Pier 33.",
        openingHours: "Varies depending on the season. Check the Alcatraz Cruises website for the schedule.",
        cost: "Around $41 per adult. Prices vary based on the tour package.",
        website: "alcatrazcruises.com"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "adventure"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Views of the San Francisco skyline from the ferry and the island.",
        insiderTip: "Book tickets online at least 2-3 weeks in advance to secure your spot. Arrive at Pier 33 at least 30 minutes before your scheduled departure time.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility. Some areas of the island are not wheelchair accessible."
      }
      },
        {
        name: "Fisherman's Wharf",
        description: `## Overview
Fisherman's Wharf is a bustling tourist area known for its seafood restaurants, souvenir shops, and sea lions. While it can be crowded, it's worth a visit for its lively atmosphere and waterfront views. Pier 39 is a popular spot to watch the playful sea lions basking in the sun. 

### What to Expect
Expect crowds, especially during peak season. Be prepared to navigate through throngs of people and street performers. Consider trying some of the fresh seafood at one of the many restaurants, even if some say it's touristy. 

### Insider Tips
Avoid eating at the restaurants closest to Pier 39, as they tend to be overpriced and of lower quality. Walk a few blocks further to find better dining options. Also, be mindful of your belongings, as pickpockets are known to operate in the area.`,
        practicalInfo: {
        howToGetThere: "Take the F Market streetcar or the Muni bus. Parking is available, but it can be expensive.",
        openingHours: "Varies depending on the business.",
        cost: "Free to enter the wharf area. Costs vary for attractions and restaurants.",
        website: "fishermanswharf.org"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "nature", "adventure"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Sea lions at Pier 39.",
        insiderTip: "Visit early in the morning (before 10 AM) for a less crowded experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible to wheelchairs and strollers."
      }
      },
        {
        name: "Lombard Street",
        description: `## Overview
Lombard Street, often called the "most crooked street in the world," is a quirky and charming attraction. The one-block section features eight hairpin turns, landscaped with flowers. Driving down this street is a unique experience, but be prepared for a slow crawl and potential traffic.

### Best Photo Spots
The best photo opportunities are from the bottom of the street, looking up, or from the top, looking down. The angle highlights the street's unique curves and the surrounding houses.

### Insider Tips
Consider walking down the street instead of driving, especially during peak season. Parking can be challenging in the area. It's the kind of place you might linger longer than expected.`,
        practicalInfo: {
        howToGetThere: "Take the Powell-Hyde cable car to the top of Lombard Street or drive. Parking is limited.",
        openingHours: "Open 24 hours.",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Unique perspective of the crooked street from the bottom.",
        insiderTip: "Visit during off-peak hours (early morning or late afternoon) to avoid traffic congestion.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Steep inclines may be challenging for those with mobility issues."
      }
      },
        {
        name: "Mission District Murals",
        description: `## Overview
The Mission District is known for its vibrant murals, which depict social and political themes. Walking through the neighborhood is like exploring an open-air art gallery. Balmy Alley and Clarion Alley are two of the most concentrated areas of murals.

### What to Expect
Expect to see a diverse range of artistic styles and subjects. Many of the murals reflect the history and culture of the Latino community in the Mission District.

### Insider Tips
Take a guided walking tour to learn more about the history and meaning behind the murals. Many local organizations offer tours that support the artists and the community. And be sure to explore the surrounding neighborhood – it's full of unique shops, restaurants, and cafes.`,
        practicalInfo: {
        howToGetThere: "Take the BART to the 16th Street Mission or 24th Street Mission stations.",
        openingHours: "Open 24 hours.",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "culture", "history"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful and diverse murals throughout the Mission District.",
        insiderTip: "Visit Balmy Alley for the highest concentration of murals. Check out Clarion Alley for more contemporary and experimental works.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible to wheelchairs and strollers."
      }
      },
        {
        name: "Cable Cars",
        description: `## Overview
Riding a historic cable car is a quintessential San Francisco experience. These iconic vehicles climb the city's steep hills, offering scenic views along the way. The Powell-Hyde and Powell-Mason lines are the most popular routes, but be prepared for long lines, especially during peak season.

### What to Expect
Expect to wait in line, sometimes for up to an hour or more. The ride itself is short but memorable. The cable cars can be crowded, so be prepared to stand.

### Insider Tips
Purchase your tickets in advance online or through the MuniMobile app to save time. Also, consider riding the cable car early in the morning or late in the afternoon to avoid the biggest crowds.`,
        practicalInfo: {
        howToGetThere: "Cable car lines run throughout the city. Check the Muni website for routes and schedules.",
        openingHours: "Varies depending on the line.",
        cost: "Around $8 per ride.",
        website: "sfmta.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "adventure"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Scenic views from the cable car as it climbs the hills.",
        insiderTip: "Hop on the California Street line for a less crowded experience. It offers equally stunning views.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility. Cable cars are not fully wheelchair accessible."
      }
      },
        {
        name: "Tartine Bakery",
        description: `## Overview
Tartine Bakery in the Mission District is a San Francisco institution, renowned for its artisanal breads, pastries, and sandwiches. The bakery is always bustling, and it's worth the wait for their famous country loaf or morning bun. The aroma alone is worth the visit!

### What to Expect
Expect long lines, especially on weekends. The bakery is small and can get crowded. However, the quality of the food is consistently high, and it's a great place to experience San Francisco's food culture.

### Insider Tips
Try the morning bun – it's a flaky, buttery pastry that's worth every calorie. Also, consider visiting during off-peak hours (early morning or late afternoon) to avoid the biggest crowds.`,
        practicalInfo: {
        howToGetThere: "Take the BART to the 16th Street Mission station or the Muni bus.",
        openingHours: "Varies depending on the day. Check their website for the schedule.",
        cost: "Budget-friendly to moderate. Prices range from $3 to $15.",
        website: "tartinebakery.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "culinary"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Beautifully crafted pastries and breads.",
        insiderTip: "Arrive before 8 AM to avoid long lines for coffee and pastries.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible to wheelchairs and strollers."
      }
      },
        {
        name: "Ferry Building Marketplace",
        description: `## Overview
The Ferry Building Marketplace is a food lover's paradise, offering a wide array of artisanal cheeses, local produce, freshly baked bread, and gourmet snacks. It's a great place to sample some of the best of California's culinary offerings. There are also several restaurants and cafes within the building.

### What to Expect
Expect a bustling and vibrant atmosphere. The marketplace can get crowded, especially on weekends. Be prepared to navigate through throngs of people and vendors.

### Insider Tips
Visit on a Saturday morning for the Ferry Plaza Farmers Market, which offers an even wider selection of local and organic produce. Also, don't miss the Cowgirl Creamery for some delicious cheese and sandwiches.`,
        practicalInfo: {
        howToGetThere: "Take the BART to the Embarcadero station or the Muni bus.",
        openingHours: "Varies depending on the vendor. Check their website for the schedule.",
        cost: "Budget-friendly to expensive. Prices range depending on the vendor.",
        website: "ferrybuildingmarketplace.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culinary", "market"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful displays of fresh produce and gourmet food items.",
        insiderTip: "Visit on Tuesdays or Thursdays for a less crowded shopping experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible to wheelchairs and strollers."
      }
      },
        {
        name: "Swan Oyster Depot",
        description: `## Overview
Swan Oyster Depot is a San Francisco institution, serving fresh seafood since 1912. This no-frills eatery is known for its oysters, clam chowder, and crab salad. Be prepared to wait in line – there are only a few seats at the counter, but it's worth it for the experience.

### What to Expect
Expect a long wait, especially during peak hours. The restaurant is small and crowded. However, the seafood is incredibly fresh, and the atmosphere is lively and authentic.

### Insider Tips
Arrive before they open (around 10:30 AM) to get a head start on the line. Also, be prepared to pay in cash – they don't accept credit cards.`,
        practicalInfo: {
        howToGetThere: "Take the BART to the Powell Street station or the Muni bus.",
        openingHours: "Monday-Saturday, 10:30 AM - 5:30 PM. Closed Sundays.",
        cost: "Moderate to expensive. Prices range from $20 to $50.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Local Expert",
        interests: ["food", "seafood", "culinary"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Fresh oysters and seafood platters.",
        insiderTip: "Go on a weekday (Tuesday-Thursday) mid-afternoon for slightly shorter lines.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility. The restaurant is small and crowded."
      }
      },
        {
        name: "Japanese Tea Garden",
        description: `## Overview
Located in Golden Gate Park, the Japanese Tea Garden offers a tranquil escape from the city. This serene garden features pagodas, koi ponds, and traditional Japanese plants. It's a beautiful place to relax and enjoy a cup of tea.

### What to Expect
Expect a peaceful and serene atmosphere. The garden is well-maintained and offers a variety of scenic spots.

### Insider Tips
Visit during the cherry blossom season (usually in late March or early April) for a spectacular display of pink flowers. Also, consider attending a traditional tea ceremony for a unique cultural experience.`,
        practicalInfo: {
        howToGetThere: "Take the Muni bus to Golden Gate Park.",
        openingHours: "Varies depending on the season. Check their website for the schedule.",
        cost: "Around $12 per adult.",
        website: "japaneseteagardensf.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Spring, Fall",
        photoOpportunity: "Pagodas, koi ponds, and cherry blossoms (in season).",
        insiderTip: "Visit before 10 AM on Mondays, Wednesdays, or Fridays for free admission.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible to wheelchairs and strollers."
      }
      },
        {
        name: "de Young Museum",
        description: `## Overview
The de Young Museum, located in Golden Gate Park, houses a diverse collection of American art from the 17th through 21st centuries, international textile arts and costumes, and art from Africa, Oceania, and the Americas. The Hamon Observation Tower offers panoramic views of the city and the park.

### What to Expect
Expect to see a wide range of art styles and historical periods. The museum is large and can take several hours to explore thoroughly.

### Insider Tips
Visit on a free day (usually the first Tuesday of the month) to save money. Also, don't miss the Hamon Observation Tower – the views are spectacular!`,
        practicalInfo: {
        howToGetThere: "Take the Muni bus to Golden Gate Park.",
        openingHours: "Tuesday-Sunday, 9:30 AM - 5:15 PM. Closed Mondays.",
        cost: "Around $25 per adult.",
        website: "deyoung.famsf.org"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["art", "culture", "history"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic views from the Hamon Observation Tower.",
        insiderTip: "Check the de Young Museum website for information on free days and special exhibitions.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible to wheelchairs and strollers."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around San Francisco

San Francisco offers a variety of transportation options, making it easy to explore the city. However, navigating the steep hills and traffic can sometimes be challenging.

### Public Transport
The Muni system, which includes buses, streetcars, and cable cars, is a comprehensive and affordable way to get around. Consider purchasing a Muni Passport for unlimited rides. BART (Bay Area Rapid Transit) connects San Francisco to other cities in the Bay Area, such as Oakland and Berkeley.

### Taxis & Rideshare
Taxis and rideshare services like Uber and Lyft are readily available, but they can be expensive, especially during peak hours. Traffic congestion can also increase travel times.

### Walking & Cycling
Walking and cycling are great ways to explore many of San Francisco's neighborhoods. However, be prepared for steep hills. Bike rentals are available throughout the city.`,
        whereToStay: `## Where to Stay in San Francisco

San Francisco offers a wide range of accommodation options, from luxury hotels to budget-friendly hostels. The best area to stay depends on your interests and budget.

### Best Areas
For a central location with easy access to attractions, consider staying in Union Square or Fisherman's Wharf. Nob Hill offers stunning views and a more upscale atmosphere. The Mission District is a vibrant neighborhood with a strong Latino culture.

### Luxury Options
The Fairmont San Francisco and The Ritz-Carlton, San Francisco are two of the city's most luxurious hotels, offering exceptional service and amenities.

### Budget-Friendly
Hostels and budget hotels can be found in the Tenderloin and SoMa districts. However, be aware that these areas may not be as safe or appealing as other neighborhoods.`,
        bestTimeToVisit: `## Best Time to Visit San Francisco

The best time to visit San Francisco depends on your preferences. The city experiences mild weather year-round, but it can be unpredictable.

### Peak Season
The peak season is during the summer months (June-August), when the weather is generally warm and sunny. However, this is also the busiest and most expensive time to visit.

### Weather Overview
San Francisco is known for its microclimates, meaning that the weather can vary significantly from one neighborhood to another. Fog is common, especially during the summer months. Be sure to pack layers of clothing.

### Local Events
Several major events take place in San Francisco throughout the year, including the Outside Lands music festival in August and Fleet Week in October.`,
        suggestedItinerary: `## Suggested San Francisco Itinerary

Here's a suggested itinerary for a 3-day trip to San Francisco:

### Day 1
Start your day with a visit to the Golden Gate Bridge. Walk or bike across it for stunning views. In the afternoon, explore Fisherman's Wharf and watch the sea lions at Pier 39. Enjoy a seafood dinner at one of the local restaurants.

### Day 2
Take a ferry to Alcatraz Island and tour the former prison. In the afternoon, ride a historic cable car to Lombard Street. Explore the charming neighborhood of North Beach and enjoy a delicious Italian dinner.

### Day 3
Visit the Mission District and admire the vibrant murals. Explore Golden Gate Park and visit the Japanese Tea Garden or the de Young Museum. Enjoy a farewell dinner at one of San Francisco's many world-class restaurants.`
      }}
      faqs={[
        {
        question: "What are the best things to do in San Francisco?",
        answer: `Some of the best things to do in San Francisco include visiting the Golden Gate Bridge, Alcatraz Island, Fisherman's Wharf, and Lombard Street. Also, don't miss the Mission District murals and a ride on a historic cable car.`
      },
        {
        question: "How many days do you need in San Francisco?",
        answer: `Ideally, you should spend at least 3 days in San Francisco to see the main attractions and explore different neighborhoods. However, you could easily spend a week or more and still not see everything.`
      },
        {
        question: "What is San Francisco famous for?",
        answer: `San Francisco is famous for its iconic Golden Gate Bridge, its historic cable cars, and its vibrant cultural scene. It's also known for its diverse neighborhoods, its steep hills, and its beautiful bay.`
      },
        {
        question: "When is the best time to visit San Francisco?",
        answer: `The best time to visit San Francisco is in the spring or fall, when the weather is mild and the crowds are smaller. However, the city is worth visiting year-round.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Vibrant, Diverse, Iconic",
        budgetBreakdown: {
          freeActivities: "Walking across the Golden Gate Bridge,Exploring Golden Gate Park,Visiting the Mission District murals,Driving down Lombard Street",
          budgetFriendly: "Riding a Muni bus ($3 per ride),Visiting the Japanese Tea Garden ($12 per adult),Enjoying a pastry at Tartine Bakery ($5-10),Exploring Fisherman's Wharf (free to enter, costs vary for attractions)",
          splurgeWorthy: "Taking a helicopter tour of the city ($200+),Staying at a luxury hotel like The Fairmont San Francisco ($400+ per night)"
        },
        localSecrets: ["Visit Alcatraz Island on a Tuesday or Wednesday morning at 8:45 AM, entering with the first ferry to avoid peak crowds. Focus on cellblock D first, as it's the most congested later in the day.", "Use the Clipper Card (not the MuniMobile app, which can be unreliable) for all public transport. Load at least $20 on the card. Local etiquette dictates having your card ready BEFORE boarding the bus.", "Expect a daily budget of approximately $75-90 per person. This covers $15-20 for breakfast and lunch, $30-40 for dinner, $10 for transport, and $20 for entrance fees or miscellaneous expenses. Prices are in USD.", "Head to the Alemany Flea Market (100 Alemany Blvd) on Sundays between 7 AM and 3 PM. Bargain aggressively, starting at half the asking price, especially for vintage clothes and local crafts.", "Avoid the touristy clam chowder bread bowls at Pier 39 restaurants which cost $20+ and are often mediocre. Instead, try the clam chowder at Scoma's (Pier 47) for a more authentic experience at $15.", "Avoid visiting during Fleet Week (typically mid-October), as hotels and flights are more expensive and the city is extremely crowded. However, if you ARE interested in aviation shows, plan your visit specifically around it."],
        diningHighlights: {
          mustTryDishes: "Clam Chowder in a Sourdough Bread Bowl,Mission Burrito, cioppino,Irish Coffee",
          bestCafes: "Ritual Coffee Roasters: Known for its high-quality coffee and minimalist atmosphere.,Four Barrel Coffee: A popular spot with a rustic-chic vibe and expertly brewed coffee.",
          topRestaurants: "Zuni Café: A renowned restaurant serving American cuisine with a focus on seasonal ingredients.,Foreign Cinema: Offers Mediterranean cuisine and independent films screened in an outdoor courtyard.",
          foodMarkets: "Ferry Building Marketplace,Alemany Farmers' Market",
          diningTips: "Tipping is customary in San Francisco restaurants. A tip of 15-20% is standard.,Reservations are highly recommended for popular restaurants, especially on weekends.,Many restaurants offer happy hour specials with discounted drinks and appetizers."
        },
        seasonalHighlights: {
          spring: "Spring brings blooming flowers and mild temperatures, making it a pleasant time to explore the city's parks and gardens.",
          summer: "Summer is the peak season, with warm weather and plenty of outdoor events. However, be prepared for fog and crowds.",
          fall: "Fall offers sunny days and fewer crowds, making it an ideal time to visit. The weather is still mild, and there are many local festivals.",
          winter: "Winter is the off-season, with cooler temperatures and occasional rain. However, the city is less crowded, and there are often holiday events."
        },
        quickFacts: {
          totalAttractions: "12",
          freeActivities: "4",
          averageTimePerAttraction: "30-60 minutes",
          walkingFriendly: true,
          publicTransportQuality: "Good"
        }
      }}
    />
  );
};