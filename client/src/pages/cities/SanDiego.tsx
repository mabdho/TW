import React from 'react';
import { CityPage } from '../../components/CityPage';

export const SanDiego: React.FC = () => {
  return (
    <CityPage
      cityName="San Diego"
      country="USA"
      title={"Best Things to Do in San Diego, USA (2025 Guide)"}
      description={`Discover the best things to do in San Diego — top attractions, hidden gems, and food spots. Complete San Diego travel guide.`}
      imageUrl={"https://plus.unsplash.com/premium_photo-1697730053017-3110659431c7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Explore Balboa Park's museums and gardens.",
        "Relax on the beautiful beaches of Coronado Island.",
        "Visit the historic Gaslamp Quarter.",
        "Discover marine life at SeaWorld San Diego.",
        "Enjoy panoramic views from Cabrillo National Monument.",
        "Indulge in delicious seafood at a local restaurant."]}
      attractions={[
        {
        name: "Balboa Park",
        description: `## Overview
Balboa Park is a must-see place in San Diego, home to numerous museums, gardens, and the famous San Diego Zoo. It's a sprawling urban oasis that offers a diverse range of activities and attractions. You could easily spend several days exploring everything this park has to offer! I've found the variety to be quite impressive, really.

### Best Photo Spots
The Botanical Building provides stunning photo opportunities with its lush greenery and unique architecture. Also, the Spanish Village Art Center offers colorful backdrops for memorable pictures. Don't miss capturing the iconic California Tower from El Prado.

### Insider Tips
Tip: Visit on a Tuesday, when many of the museums offer free admission to San Diego residents (check specific museum websites for participation). Arrive early to avoid crowds. The Japanese Friendship Garden is best experienced during the morning hours when the light is soft and the crowds are thinner. Don't miss the Spreckels Organ Pavilion's free Sunday afternoon concerts.`,
        practicalInfo: {
        howToGetThere: "Take the MTS Bus Route 7 or 215 from downtown San Diego. Alternatively, drive and park in one of the designated lots.",
        openingHours: "Park grounds are open 24/7, but individual museum hours vary. Check the Balboa Park website for specific hours.",
        cost: "Park admission is free; however, individual museums and attractions may charge an entrance fee.",
        website: "balboapark.org"
      },
      discoveryTags: {
        timeRequired: "Full day",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "nature", "architecture", "photography"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Botanical Building, Spanish Village Art Center, California Tower",
        insiderTip: "Visit the park on Tuesdays to enjoy free admission to some of the museums as a resident, but bring your ID!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Many areas of the park are wheelchair accessible, but accessibility varies by museum."
      }
      },
        {
        name: "Gaslamp Quarter",
        description: `## Overview
The Gaslamp Quarter is a vibrant historic district in downtown San Diego, known for its Victorian architecture, lively nightlife, and diverse dining options. It's a fantastic place to explore on foot, with plenty of shops, restaurants, and bars to discover. It's really quite charming, and I think you'll enjoy the atmosphere.

### Best Photo Spots
Capture the historic buildings along Fifth Avenue, especially at night when they're illuminated. The Gaslamp Quarter sign is also a popular photo spot. Consider taking photos during the early evening, or the "golden hour", for the best light.

### Insider Tips
Tip: Visit during happy hour (typically from 4-7 PM) for discounted drinks and appetizers at many bars and restaurants. Weekends can be crowded, so consider visiting during the week for a more relaxed experience. Explore the side streets to find hidden gems and less crowded spots.`,
        practicalInfo: {
        howToGetThere: "Take the San Diego Trolley to the Gaslamp Quarter station. Alternatively, drive and park in one of the nearby parking garages.",
        openingHours: "Open 24/7, but individual business hours vary.",
        cost: "Free to explore; however, individual businesses may charge for services or products.",
        website: "gaslamp.org"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "food", "nightlife"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Historic buildings along Fifth Avenue, Gaslamp Quarter sign",
        insiderTip: "Happy Hour specials run from 4 PM - 7 PM on most weekdays. Perfect time to avoid crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The Gaslamp Quarter is generally wheelchair accessible, but some businesses may have limited accessibility."
      }
      },
        {
        name: "Coronado Beach",
        description: `## Overview
Coronado Beach, consistently ranked among the best beaches in the US, is famous for its wide sandy expanse, gentle waves, and the iconic Hotel del Coronado. It's a perfect spot for swimming, sunbathing, and building sandcastles. And, well, who doesn't love a good beach?

### Best Photo Spots
Capture the stunning views of the Hotel del Coronado with the Pacific Ocean as a backdrop. The beach is especially beautiful at sunset. Try to capture the sand glistening, it has gold in it!

### Insider Tips
Tip: Arrive early in the morning to secure a good spot, especially during peak season. Rent bikes and explore the island at your own pace. The beach is generally less crowded north of the Hotel del Coronado.`,
        practicalInfo: {
        howToGetThere: "Drive across the Coronado Bridge or take the MTS Bus Route 901 from downtown San Diego. You can also take a ferry from downtown.",
        openingHours: "Open 24/7",
        cost: "Free",
        website: "visitcoronado.com"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "photography"],
        costLevel: "Free",
        seasonalBest: "Summer",
        photoOpportunity: "Hotel del Coronado, Sunset views, Golden sand",
        insiderTip: "Arrive before 10 AM to grab free parking along Ocean Boulevard.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The beach has accessible parking and restrooms. Beach wheelchairs are available for rent."
      }
      },
        {
        name: "Cabrillo National Monument",
        description: `## Overview
Cabrillo National Monument commemorates the landing of Juan Rodriguez Cabrillo in 1542, the first European expedition to set foot on what is now the West Coast of the United States. Besides the historical significance, the monument offers breathtaking panoramic views of the San Diego skyline, the Pacific Ocean, and Mexico. It's quite spectacular, I think!

### Best Photo Spots
Capture the panoramic views from the Old Point Loma Lighthouse. The tide pools are also a great spot for unique photos. The views toward downtown San Diego at sunset are spectacular.

### Insider Tips
Tip: Visit during low tide to explore the tide pools and discover marine life. Check the tide charts online before your visit. Weekday afternoons are typically less crowded than weekends. Don't miss the whale watching opportunities during the winter months (December-February).`,
        practicalInfo: {
        howToGetThere: "Drive along Cabrillo Memorial Drive to the monument. There is no public transportation directly to the monument.",
        openingHours: "9:00 AM to 5:00 PM daily.",
        cost: "$20 per vehicle (valid for 7 days).",
        website: "nps.gov/cabr"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "nature", "photography", "adventure"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic views from the lighthouse, Tide pools",
        insiderTip: "Enter the monument before 9:30 AM on weekends to avoid the long lines for parking.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The visitor center and lighthouse are wheelchair accessible. The tide pools require navigating rocky terrain."
      }
      },
        {
        name: "SeaWorld San Diego",
        description: `## Overview
SeaWorld San Diego is a popular marine life park that offers a combination of animal encounters, thrilling rides, and educational exhibits. It's a great place for families to learn about marine conservation and see amazing animals up close. It's a classic, for sure.

### Best Photo Spots
Capture photos of the orcas during the Orca Encounter show. The underwater viewing tunnels offer unique photo opportunities of sharks and other marine life.

### Insider Tips
Tip: Arrive early to avoid long lines at popular attractions. Check the show schedule and plan your day accordingly. Consider purchasing a Quick Queue pass to skip the lines.`,
        practicalInfo: {
        howToGetThere: "Drive to SeaWorld San Diego or take the MTS Bus Route 9 from downtown San Diego.",
        openingHours: "Varies depending on the season. Check the SeaWorld San Diego website for specific hours.",
        cost: "Varies depending on the day and season. Check the SeaWorld San Diego website for ticket prices.",
        website: "seaworld.com/san-diego"
      },
      discoveryTags: {
        timeRequired: "Full day",
        experienceLevel: "Easy Access",
        interests: ["nature", "adventure", "family"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Orca Encounter show, Underwater viewing tunnels",
        insiderTip: "Download the SeaWorld app for show schedules and wait times, available only to app users!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "SeaWorld San Diego is generally wheelchair accessible. Check the website for specific accessibility information."
      }
      },
        {
        name: "La Jolla Cove",
        description: `## Overview
La Jolla Cove is a picturesque cove known for its stunning cliffs, clear waters, and abundant marine life. It's a popular spot for swimming, snorkeling, diving, and kayaking. You might even spot some seals and sea lions! A real treat, it really is.

### Best Photo Spots
Capture photos of the seals and sea lions basking on the rocks. The cliffs offer stunning views of the cove and the Pacific Ocean. Sunset is an exceptional time to capture the colors reflected on the cliffs.

### Insider Tips
Tip: Visit during low tide to explore the tide pools. Bring your snorkeling gear and explore the underwater world. Be respectful of the wildlife and maintain a safe distance.`,
        practicalInfo: {
        howToGetThere: "Drive to La Jolla Cove or take the MTS Bus Route 30 from downtown San Diego.",
        openingHours: "Open 24/7",
        cost: "Free",
        website: "lajollabythesea.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "adventure", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Seals and sea lions, Cliffs, Sunset views",
        insiderTip: "Look for the hidden staircase located near the lifeguard tower (locals only!).",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "La Jolla Cove has limited accessibility. The cliffs can be challenging to navigate for those with mobility issues."
      }
      },
        {
        name: "Snooze, an A.M. Eatery",
        description: `## Overview
Snooze is a popular breakfast and brunch restaurant in San Diego, known for its creative menu and lively atmosphere. They put a unique spin on classic breakfast dishes, making it a popular spot with locals and tourists alike. Expect a wait, but many say it's worth it!

### What to Expect
The atmosphere at Snooze is vibrant and energetic, with colorful decor and a friendly staff. The menu features a wide variety of breakfast and brunch options, including pancakes, eggs benedict, and breakfast tacos. The coffee is pretty darn good too.

### Insider Tips
Tip: Join the waitlist online before you arrive to reduce your wait time. Try the pancake flight to sample different pancake flavors. The restaurant can get very crowded on weekends; therefore, consider visiting on a weekday for a more relaxed experience. Ask the server for the daily special; they are creative and well-prepared.`,
        practicalInfo: {
        howToGetThere: "Located in Hillcrest, easily accessible by car or public transportation.",
        openingHours: "6:30 AM to 2:30 PM daily.",
        cost: "Moderate ($15-$25 per person).",
        website: "snoozeeatery.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "cuisine"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful pancakes, Unique breakfast dishes",
        insiderTip: "Join the waitlist online 30 minutes before your arrival to minimize waiting.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The restaurant is wheelchair accessible."
      }
      },
        {
        name: "Liberty Public Market",
        description: `## Overview
Liberty Public Market is a bustling food hall located in the Liberty Station neighborhood of San Diego. It features a variety of local vendors selling everything from artisan cheeses and baked goods to craft beer and international cuisine. It's a food lover's paradise!

### What to Expect
The atmosphere at Liberty Public Market is lively and energetic, with a diverse crowd of locals and tourists. You can sample food from different vendors and find a place to sit and enjoy your meal. It's definitely a social experience.

### Insider Tips
Tip: Visit during the week to avoid the weekend crowds. Try the fresh seafood at the fish market. Don't miss the craft beer selection at the Stone Company Store. Explore the shops in Liberty Station and discover local art and crafts.`,
        practicalInfo: {
        howToGetThere: "Located in Liberty Station, easily accessible by car or public transportation.",
        openingHours: "11 AM to 7 PM daily. Some vendor hours may vary.",
        cost: "Budget-friendly (Varies depending on what you purchase).",
        website: "libertypublicmarket.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "cuisine", "market"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Diverse food vendors, Colorful displays",
        insiderTip: "Grab a fresh pastry before 11:30 AM when they're still warm!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The market is wheelchair accessible."
      }
      },
        {
        name: "Juniper and Ivy",
        description: `## Overview
Juniper and Ivy is a trendy restaurant in San Diego's Little Italy neighborhood, known for its innovative cuisine and stylish decor. Chef Richard Blais, a Top Chef All-Stars winner, creates inventive dishes with local ingredients. It's an experience, to be sure.

### What to Expect
The atmosphere at Juniper and Ivy is upscale and modern, with a focus on creating a memorable dining experience. The menu features a variety of dishes, including seafood, meat, and vegetarian options. There's also an extensive wine list and craft cocktails.

### Insider Tips
Tip: Make a reservation well in advance, especially for weekend dining. Try the "Yodel" dessert, a signature dish. Consider sitting at the bar to watch the chefs at work. Street parking can be tough, so consider rideshare.`,
        practicalInfo: {
        howToGetThere: "Located in Little Italy, easily accessible by car or public transportation.",
        openingHours: "5:00 PM to 10:00 PM Sunday - Thursday, 5:00 PM to 11:00 PM Friday & Saturday.",
        cost: "Expensive ($50+ per person).",
        website: "juniperandivy.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "dining", "cuisine"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Inventive dishes, Stylish interior",
        insiderTip: "Ask for the chef's tasting menu. It's a curated dining experience not listed online.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The restaurant is wheelchair accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around San Diego

San Diego offers a variety of transportation options to explore the city and its surrounding areas. From public transit to ride-sharing services, getting around is relatively easy.

### Public Transport
The San Diego Metropolitan Transit System (MTS) operates buses and trolleys throughout the city. The trolley is a convenient way to travel between downtown, the Gaslamp Quarter, and other popular destinations. Purchase a day pass for unlimited rides. Alternatively, consider renting a car if you plan to explore areas outside the city center.

### Taxis & Rideshare
Taxis and rideshare services like Uber and Lyft are readily available in San Diego. These options are convenient for short trips or when public transportation is not easily accessible. However, they can be more expensive than public transport, especially during peak hours.

### Walking & Cycling
Many areas of San Diego, such as downtown, the Gaslamp Quarter, and Coronado, are easily walkable. Cycling is also a popular option, with numerous bike paths and rental services available.`,
        whereToStay: `## Where to Stay in San Diego

San Diego offers a wide range of accommodation options to suit every budget and preference. From luxury hotels to budget-friendly hostels, you'll find something to fit your needs.

### Best Areas
The Gaslamp Quarter is a vibrant area with plenty of hotels, restaurants, and nightlife. Coronado Island offers a more relaxed atmosphere with beautiful beaches and the iconic Hotel del Coronado. La Jolla is a scenic area with stunning coastline and upscale resorts.

### Luxury Options
The Hotel del Coronado is a historic landmark offering luxurious accommodations and stunning ocean views. The Fairmont Grand Del Mar is another excellent choice, with a world-class spa and golf course.

### Budget-Friendly
Numerous budget-friendly hotels and hostels can be found in downtown San Diego and near the airport. These options provide comfortable accommodations at a more affordable price.`,
        bestTimeToVisit: `## Best Time to Visit San Diego

The best time to visit San Diego depends on your preferences and interests. The city enjoys a mild, Mediterranean climate year-round, making it a pleasant destination at any time.

### Peak Season
The peak season in San Diego is during the summer months (June-August), when the weather is warm and sunny. However, this is also the most crowded time to visit, and prices for accommodations and activities tend to be higher.

### Weather Overview
San Diego enjoys sunny skies and mild temperatures throughout the year. The average high temperature ranges from 65°F (18°C) in the winter to 75°F (24°C) in the summer. Rainfall is minimal, with most of the precipitation occurring during the winter months.

### Local Events
San Diego hosts numerous events and festivals throughout the year, including Comic-Con in July, the San Diego Bay Wine & Food Festival in November, and the Holiday Bowl in December. Check the local event calendar to see what's happening during your visit.`,
        suggestedItinerary: `## Suggested San Diego Itinerary

This is a suggested itinerary for a three-day trip to San Diego. You can adjust it to fit your interests and preferences.

### Day 1
Start your day by exploring Balboa Park, visiting the museums and gardens. In the afternoon, head to the Gaslamp Quarter for lunch and shopping. In the evening, enjoy dinner and nightlife in the Gaslamp Quarter.

### Day 2
Spend the morning relaxing on Coronado Beach and visiting the Hotel del Coronado. In the afternoon, take a ferry to Seaport Village and explore the shops and restaurants. In the evening, enjoy a sunset dinner overlooking the bay.

### Day 3
Visit Cabrillo National Monument and enjoy the panoramic views. In the afternoon, head to La Jolla Cove and explore the tide pools and beaches. In the evening, enjoy dinner at a restaurant in La Jolla.`
      }}
      faqs={[
        {
        question: "What are the best things to do in San Diego?",
        answer: `Some of the best things to do in San Diego include visiting Balboa Park, exploring the Gaslamp Quarter, relaxing on Coronado Beach, visiting Cabrillo National Monument, and discovering marine life at SeaWorld San Diego. And don't forget the food scene!`
      },
        {
        question: "How many days do you need in San Diego?",
        answer: `I think 3-5 days is a good amount of time to spend in San Diego to see the main attractions and enjoy the city's atmosphere. You could easily spend a week or more if you want to explore further afield.`
      },
        {
        question: "What is San Diego famous for?",
        answer: `San Diego is famous for its beautiful beaches, mild climate, world-class attractions, and thriving craft beer scene. It's also home to the San Diego Zoo and Balboa Park, two of the city's most popular destinations.`
      },
        {
        question: "When is the best time to visit San Diego?",
        answer: `The best time to visit San Diego is during the spring or fall when the weather is mild and the crowds are smaller. Summer is also a popular time to visit, but it can be more crowded and expensive.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Relaxed, Sunny, Vibrant",
        budgetBreakdown: {
          freeActivities: "Visit Coronado Beach,Explore Balboa Park (park grounds),Walk around the Gaslamp Quarter,Visit La Jolla Cove",
          budgetFriendly: "San Diego Zoo Safari Park: $62 (online),USS Midway Museum: $31 (online),Maritime Museum of San Diego: $22,Catch the ferry from downtown to Coronado: $10",
          splurgeWorthy: "Hot air balloon ride over Temecula Valley: $200+,Private yacht tour of San Diego Bay: $500+"
        },
        localSecrets: ["Visit Balboa Park on Tuesday mornings between 7 AM and 9 AM. Locals enter before the museum crowds arrive to enjoy the peace and quiet before the park becomes busy. Head straight to the Botanical Building.", "To travel like a local use the MTS Pronto app to pay your fare on San Diego's buses and trolleys. You can load money onto the virtual card and tap on and off at each station. Also, always enter the trolley platform from the correct direction.", "Budget approximately $70-90 per day for a comfortable visit. Expect to spend $20-30 on food, $10-15 on transport, $20-40 on attractions and $20 on miscellaneous items.", "Head to Barrio Logan for authentic Mexican goods and street art. Explore Chicano Park, browse the local shops on Logan Avenue, and bargain at La Central Market. Be ready to haggle prices down by at least 10-15%.", "Avoid the Old Town Trolley Tours. Instead, use the MTS Trolley to get around. Visit the actual Old Town for a real experience. Many of the restaurants are tourist traps, opt for local options.", "San Diego Pride happens every July, causing hotel prices and transportation to surge. On the other hand, the Over-the-Line (OTL) tournament on Fiesta Island every summer is a local tradition worth checking out for a truly unique experience."],
        diningHighlights: {
          mustTryDishes: "Fish Tacos,California Burrito,Carne Asada Fries,Craft Beer",
          bestCafes: "Better Buzz Coffee: Local chain known for its creative coffee drinks and vibrant atmosphere. The 'Best Drink Ever' is a must-try.,Communal Coffee: Offers a curated selection of coffee and a beautiful, minimalist setting.,Holsem Coffee: Try the Black Magic Latte. Not for the faint of heart.",
          topRestaurants: "Addison: Michelin-starred fine dining experience with innovative cuisine.,Born and Raised: Upscale steakhouse with a lively atmosphere in Little Italy.,Mitch's Seafood: Enjoy fresh seafood with waterfront views.",
          foodMarkets: "Liberty Public Market, Little Italy Mercato Farmers' Market",
          diningTips: "Tipping is customary in San Diego restaurants (15-20%). Reservations are recommended for popular restaurants, especially on weekends. Check for happy hour specials for discounted drinks and appetizers."
        },
        seasonalHighlights: {
          spring: "Enjoy blooming flowers and outdoor festivals in Balboa Park. It's also whale watching season.",
          summer: "Perfect for beach days and water sports. Check out the summer concert series.",
          fall: "Mild weather and fewer crowds make it a great time for hiking and exploring the city.",
          winter: "Ideal for whale watching and enjoying holiday events. Some say it is the most picturesque time to visit."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "4",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Good"
        }
      }}
    />
  );
};