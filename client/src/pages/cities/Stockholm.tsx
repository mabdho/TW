import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Stockholm: React.FC = () => {
  return (
    <CityPage
      cityName="Stockholm"
      country="Sweden"
      title={"Best Things to Do in Stockholm, Sweden (2025 Guide)"}
      description={`Discover the best things to do in Stockholm — top attractions, hidden gems, and food spots. Complete Stockholm travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1509356843151-3e7d96241e11?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Explore Gamla Stan, Stockholm's Old Town.",
        "Visit the Vasa Museum to see a remarkably preserved warship.",
        "Take a boat tour of the Stockholm archipelago.",
        "Experience modern art at Moderna Museet.",
        "Enjoy Swedish cuisine at Östermalm Saluhall."]}
      attractions={[
        {
        name: "Gamla Stan (Old Town)",
        description: `## Overview
Gamla Stan, Stockholm's Old Town, is a captivating maze of cobblestone streets, colorful buildings, and historic landmarks. This is where Stockholm began, and it's a must-see for any visitor. You can easily spend hours wandering through its narrow alleys, discovering hidden courtyards, and soaking up the atmosphere. It's a pretty popular spot, so expect some crowds, especially during peak season.

### Best Photo Spots
The Stortorget (main square) with its colorful buildings is an iconic photo spot. Also, wander down Prästgatan to capture the quintessential Old Town street view.

### Insider Tips
Tip: Explore Gamla Stan early in the morning (around 8:00 AM) before the crowds arrive. You'll have a more peaceful experience and better photo opportunities.`,
        practicalInfo: {
        howToGetThere: "Take the metro to Gamla Stan station.",
        openingHours: "Open 24/7 (shops and restaurants vary)",
        cost: "Free to explore (attractions within have fees)",
        website: "visitstockholm.com"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Stortorget with its colorful buildings.",
        insiderTip: "Visit early in the morning (around 8:00 AM) for a quieter experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Cobblestone streets can be challenging for wheelchairs."
      }
      },
        {
        name: "Vasa Museum",
        description: `## Overview
The Vasa Museum houses the remarkably well-preserved 17th-century warship Vasa. The ship sank on its maiden voyage in 1628 and was salvaged over 300 years later. Seeing the Vasa up close is truly impressive, and the museum provides fascinating insights into its history and the lives of the people who sailed on it. It's one of the most popular places to visit in Stockholm, and for good reason.

### Best Photo Spots
The best photos are taken from the upper levels, giving you a panoramic view of the ship. Try to capture the intricate details of the ship's carvings.

### Insider Tips
Recommend: Purchase tickets online in advance to avoid long queues, especially during the summer. The museum gets very busy between 11:00 AM and 3:00 PM, so consider visiting earlier or later in the day.`,
        practicalInfo: {
        howToGetThere: "Take tram 7 or bus 67 to the Vasa Museum.",
        openingHours: "Varies by season, check website. Generally 10:00 AM - 5:00 PM.",
        cost: "SEK 190 (adults)",
        website: "vasamuseet.se"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "museums"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic view of the ship from the upper levels.",
        insiderTip: "Buy tickets online to avoid queues and visit early or late in the day.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Stockholm Archipelago Boat Tour",
        description: `## Overview
No trip to Stockholm is complete without exploring the Stockholm archipelago, a vast network of islands and islets. Taking a boat tour allows you to experience the stunning natural beauty of the archipelago, with its rocky shores, forests, and charming villages. There are various tour options available, from short excursions to full-day adventures. I found the view surprisingly calming.

### Best Photo Spots
Every island offers stunning photo opportunities. Try to capture the reflection of the sunset on the water.

### Insider Tips
Consider taking a tour that includes a stop on one of the outer islands for a more authentic experience. Some tours offer the chance to swim or kayak.`,
        practicalInfo: {
        howToGetThere: "Tours depart from various locations, including Strömkajen.",
        openingHours: "Varies by tour operator, typically seasonal (May-September)",
        cost: "SEK 300-800 (depending on tour length)",
        website: "stromma.com"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["nature", "adventure", "relaxation"],
        costLevel: "Moderate",
        seasonalBest: "Summer",
        photoOpportunity: "Sunset reflections on the water.",
        insiderTip: "Take a tour that includes a stop on an outer island.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessibility varies by boat, check with the operator."
      }
      },
        {
        name: "Moderna Museet (Museum of Modern Art)",
        description: `## Overview
Moderna Museet is home to an impressive collection of modern and contemporary art, including works by Picasso, Dalí, and Warhol. The museum's location on the island of Skeppsholmen offers stunning views of the city. Even if you're not a huge art buff, it's worth a visit for the architecture and the atmosphere.

### Best Photo Spots
The outdoor sculpture park offers unique photo opportunities. Also, capture the views of the city from the museum's windows.

### Insider Tips
Admission is free to the permanent collection. Check the museum's website for temporary exhibitions and events.`,
        practicalInfo: {
        howToGetThere: "Walk from Kungsträdgården or take bus 65.",
        openingHours: "Tuesday - Sunday 10:00 AM - 6:00 PM (check website for variations)",
        cost: "Free (permanent collection), SEK 150 (temporary exhibitions)",
        website: "modernamuseet.se"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Outdoor sculpture park.",
        insiderTip: "Admission to the permanent collection is free.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Östermalm Saluhall (Food Market)",
        description: `## Overview
Östermalm Saluhall is a historic food market offering a wide variety of Swedish and international delicacies. You can sample local cheeses, seafood, pastries, and more. It's a great place to experience the Swedish culinary scene and enjoy a delicious meal. Some say it's the best place to grab lunch.

### What to Expect
Expect a bustling atmosphere, especially during lunchtime. The market offers a mix of sit-down restaurants and food stalls.

### Insider Tips
Consider trying the classic Swedish 'smörgåsbord' at one of the restaurants. Be sure to sample some local cheeses and seafood.`,
        practicalInfo: {
        howToGetThere: "Take the metro to Östermalmstorg station.",
        openingHours: "Monday - Saturday 9:30 AM - 7:00 PM (check website for variations)",
        cost: "Varies by vendor",
        website: "ostermalmshallen.se"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Display of fresh seafood.",
        insiderTip: "Try the classic Swedish 'smörgåsbord'.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible."
      }
      },
        {
        name: "Fotografiska (Photography Museum)",
        description: `## Overview
Fotografiska is a world-renowned photography museum showcasing contemporary photography from around the globe. The museum is located in a former industrial building with stunning waterfront views. In addition to the exhibitions, there's a restaurant and bar with panoramic city views. It's the kind of place you might linger longer than expected.

### Best Photo Spots
The restaurant and bar offer stunning panoramic views of the city.

### Insider Tips
Visit during the late afternoon or early evening to enjoy the sunset views from the restaurant.`,
        practicalInfo: {
        howToGetThere: "Walk from Slussen metro station.",
        openingHours: "Sunday - Wednesday 10:00 AM - 11:00 PM, Thursday - Saturday 10:00 AM - 1:00 AM",
        cost: "SEK 175 (adults)",
        website: "fotografiska.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic city views from the restaurant.",
        insiderTip: "Visit during late afternoon for sunset views.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Skansen Open-Air Museum",
        description: `## Overview
Skansen is an open-air museum showcasing Swedish history and culture. It features historic buildings, farms, and workshops, offering a glimpse into life in Sweden throughout the centuries. It's a great place to learn about Swedish traditions and see how people lived in the past. You can easily spend a whole day here. I think this is one of the best things to do in Stockholm with the entire family.

### What to Expect
Expect to walk around a large area with various buildings and exhibits. There are also animals to see, including reindeer and bears.

### Insider Tips
Check the museum's schedule for demonstrations and events, such as traditional crafts and folk dancing.`,
        practicalInfo: {
        howToGetThere: "Take tram 7 or bus 67 to Skansen.",
        openingHours: "Varies by season, check website.",
        cost: "Varies by season, check website.",
        website: "skansen.se"
      },
      discoveryTags: {
        timeRequired: "Full day",
        experienceLevel: "Easy Access",
        interests: ["history", "culture", "family"],
        costLevel: "Moderate",
        seasonalBest: "Summer",
        photoOpportunity: "Historic buildings and landscapes.",
        insiderTip: "Check the schedule for demonstrations and events.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some areas may be challenging for wheelchairs."
      }
      },
        {
        name: "Café Pascal",
        description: `## Overview
Café Pascal is a popular cafe known for its excellent coffee and delicious pastries. It's a great spot for a Swedish 'fika' (coffee break) or a light lunch. The atmosphere is cozy and inviting, making it a perfect place to relax and recharge. You'll find several locations around the city. A visit to this cafe is a MUST for any coffee lover!

### What to Expect
Expect a bustling atmosphere, especially during peak hours. They offer a variety of coffee drinks, pastries, sandwiches, and salads.

### Insider Tips
Try their signature cardamom bun ('kardemummabullar'). They also have a great selection of gluten-free options.`,
        practicalInfo: {
        howToGetThere: "Various locations, check website.",
        openingHours: "Varies by location, typically 7:00 AM - 6:00 PM.",
        cost: "Budget-friendly",
        website: "cafepascal.se"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "relaxation"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Cardamom bun and coffee.",
        insiderTip: "Try their signature cardamom bun.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible."
      }
      },
        {
        name: "Meatballs for the People",
        description: `## Overview
Meatballs for the People (or *Köttbullar för folket* in Swedish) is a restaurant dedicated to Sweden's most iconic dish: meatballs! This eatery serves a variety of meatball variations, from traditional beef to more exotic options like moose and reindeer. The focus is on high-quality ingredients and authentic Swedish flavors. It's a must-try for anyone wanting a truly local culinary experience.

## Signature Dishes
Don't miss their classic Swedish meatballs with mashed potatoes, gravy, and lingonberry jam. They also offer vegetarian and vegan options.

## Dining Culture
Meatballs are a staple of Swedish cuisine, often enjoyed with family and friends. Expect a casual and friendly atmosphere.`,
        practicalInfo: {
        howToGetThere: "Take the metro to Södermalm.",
        openingHours: "Monday - Sunday 11:30 AM - 10:00 PM",
        cost: "Moderate",
        website: "meatball.se"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Plating of classic Swedish meatballs.",
        insiderTip: "Try the moose meatballs for a unique taste of Sweden.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible."
      }
      },
        {
        name: "Hötorgshallen Market",
        description: `## Overview
Hötorgshallen is an indoor food market near Hötorget Square, offering a wide range of culinary delights. From fresh produce and seafood to international cuisines, this is a great place to sample Stockholm's diverse food scene. Locals come here to shop for groceries and enjoy lunch at one of the many food stalls.

### What to Expect
Expect a bustling and lively atmosphere. The market is filled with vendors selling everything from Swedish cheeses to Middle Eastern spices.

## Dining Tips
Don't be afraid to try something new! The market offers a variety of cuisines, so there's something for everyone.`,
        practicalInfo: {
        howToGetThere: "Take the metro to Hötorget station.",
        openingHours: "Monday - Friday 10:00 AM - 6:00 PM, Saturday 10:00 AM - 4:00 PM",
        cost: "Varies by vendor",
        website: "hotorgshallen.se"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful displays of produce and seafood.",
        insiderTip: "Try the seafood sandwiches at Lisa Elmqvist.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible."
      }
      },
        {
        name: "Junibacken",
        description: `## Overview
Junibacken is a children's museum dedicated to the stories of Astrid Lindgren, the author of Pippi Longstocking. Kids can explore the world of Pippi and other beloved characters through interactive exhibits and play areas. This is a fantastic destination for families with young children. It is definitely a must-see place to visit in Stockholm for families.

### What to Expect
Expect a fun and engaging environment for kids. The museum features a story train, play areas, and live performances.

### Insider Tips
Purchase tickets online in advance to avoid queues. Plan to spend at least 3 hours at the museum.`,
        practicalInfo: {
        howToGetThere: "Take tram 7 or bus 67 to Junibacken.",
        openingHours: "Varies by season, check website.",
        cost: "SEK 195 (adults), SEK 165 (children)",
        website: "junibacken.se"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["family", "children"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Pippi Longstocking characters.",
        insiderTip: "Buy tickets online in advance to avoid queues.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Stockholm

Stockholm has an excellent public transport system, making it easy to get around the city. Options include the metro, buses, trams, and ferries. Walking and cycling are also popular choices, especially in the city center.

### Public Transport
The metro (Tunnelbana) is the fastest and most convenient way to travel long distances. Buses and trams are useful for reaching areas not served by the metro. A travel card can save you money if you plan to use public transport frequently.

### Taxis & Rideshare
Taxis and rideshare services like Uber are available, but they can be more expensive than public transport. They may be a good option for late-night travel or when you have a lot of luggage.

## Walking & Cycling
Stockholm is a very walkable city, and cycling is also a popular option. There are many bike paths, and you can rent a bike from various locations throughout the city.`,
        whereToStay: `## Where to Stay in Stockholm

Stockholm offers a wide range of accommodation options, from luxury hotels to budget-friendly hostels. The best area to stay depends on your preferences and budget. It is one of the important things to do in Stockholm, choose the best accomodation based on your needs.

### Best Areas
Gamla Stan (Old Town) is a good choice if you want to be in the heart of the historical center. Södermalm is a trendy area with a vibrant nightlife and a creative atmosphere. Norrmalm is a central location with easy access to shopping, restaurants, and attractions.

### Luxury Options
For a luxurious stay, consider the Grand Hôtel or the Hotel Diplomat. These hotels offer stunning views, excellent service, and top-notch amenities.

## Budget-Friendly
For budget-friendly options, check out Generator Stockholm or City Backpackers Hostel. These accommodations offer comfortable rooms and a social atmosphere.`,
        bestTimeToVisit: `## Best Time to Visit Stockholm

The best time to visit Stockholm depends on your preferences. Summer offers warm weather and long daylight hours, while winter provides a magical atmosphere with snow and Christmas markets. Spring and fall offer milder temperatures and fewer crowds.

### Peak Season
Summer (June-August) is the peak season, with warm weather and numerous outdoor events. However, expect higher prices and larger crowds.

### Weather Overview
Spring (April-May) and fall (September-October) offer pleasant temperatures and fewer crowds. Winter (November-March) is cold, with snow and shorter daylight hours.

## Local Events
Midsummer (June) is a major Swedish holiday celebrated with traditional festivities. Stockholm Music & Arts (July) is a popular music festival.`,
        suggestedItinerary: `## Suggested Stockholm Itinerary

Here's a suggested itinerary for a 3-day trip to Stockholm:

### Day 1
Start your day by exploring Gamla Stan (Old Town). Visit the Royal Palace, Stortorget, and the Nobel Museum. In the afternoon, take a boat tour of the Stockholm archipelago. Enjoy dinner at a traditional Swedish restaurant.

### Day 2
Visit the Vasa Museum in the morning. In the afternoon, explore Skansen Open-Air Museum. In the evening, enjoy a concert or performance.

### Day 3
Visit Moderna Museet (Museum of Modern Art) in the morning. In the afternoon, explore Södermalm, a trendy neighborhood with shops, cafes, and restaurants. Enjoy dinner with a view.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Stockholm?",
        answer: `Some of the best things to do in Stockholm include exploring Gamla Stan (Old Town), visiting the Vasa Museum, taking a boat tour of the Stockholm archipelago, experiencing modern art at Moderna Museet, and enjoying Swedish cuisine at Östermalm Saluhall.`
      },
        {
        question: "How many days do you need in Stockholm?",
        answer: `A minimum of 3 days is recommended to see the main attractions in Stockholm. However, you could easily spend a week or more exploring the city and its surroundings.`
      },
        {
        question: "What is Stockholm famous for?",
        answer: `Stockholm is famous for its beautiful archipelago, historic Gamla Stan (Old Town), innovative design, and vibrant cultural scene.`
      },
        {
        question: "When is the best time to visit Stockholm?",
        answer: `The best time to visit Stockholm is during the summer (June-August) for warm weather and long daylight hours, or during the spring or fall for milder temperatures and fewer crowds.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Stylish, Historical, Coastal",
        budgetBreakdown: {
          freeActivities: "Walking tour of Gamla Stan,Visiting parks and gardens,Exploring the islands of the archipelago by public ferry,Window shopping along Drottninggatan",
          budgetFriendly: "Visiting museums with student discounts (SEK 80-120),Enjoying a 'fika' (coffee and pastry) at a local cafe (SEK 50-80),Taking public transport (single journey SEK 39),Eating at food trucks or affordable restaurants (SEK 100-150)",
          splurgeWorthy: "Staying at a luxury hotel with waterfront views (SEK 2500+ per night),Fine dining experience at a Michelin-starred restaurant (SEK 1000+ per person)"
        },
        localSecrets: ["Visit the Vasa Museum on Tuesdays at 8:30 AM, when it opens. Locals arrive right before opening to get the first glimpse of the ship, avoiding the massive tour groups that arrive later. Use the entrance facing the water for quicker access.", "To navigate Stockholm's public transport like a local, download the 'SL' app for real-time updates and purchase a 72-hour travel card. Stand on the right side of escalators and allow others to pass on the left. Avoid loud conversations on the metro.", "A realistic budget for 3 days in Stockholm is approximately SEK 2000-3000. This includes SEK 600-900 for meals (SEK 200-300 per day), SEK 300 for transport, SEK 500-800 for attractions, and SEK 600-900 for miscellaneous expenses.", "For authentic Swedish goods, visit Östermalmshallen market for high-quality foods and crafts. Bargaining is generally not accepted, but you can sometimes negotiate discounts for bulk purchases.", "Avoid the restaurants lining the main street in Gamla Stan, as they often overcharge tourists. Instead, try the more local eateries along Prästgatan, which offers better value and more authentic food.", "Stockholm celebrates Midsummer on June 24th (variable date). This can affect travel plans due to closures and crowds. However, attending the festivities is a truly unique cultural experience and is definitely worth it!"],
        diningHighlights: {
          mustTryDishes: "Swedish meatballs with lingonberry jam,Gravlax (cured salmon),Semla (cream-filled cardamom bun),Kanelbulle (cinnamon bun)",
          bestCafes: "Drop Coffee: Known for its expertly brewed coffee and minimalist design.,Café Pascal: Offers a wide variety of pastries and sandwiches in a cozy atmosphere.",
          topRestaurants: "Gastrologik: A Michelin-starred restaurant serving innovative Swedish cuisine.,Meatballs for the People: Specializes in Swedish meatballs with various flavor options.",
          foodMarkets: "Hötorgshallen market is a great place to sample Stockholm's diverse food scene.",
          diningTips: "Tipping is not mandatory but is appreciated for good service (5-10%). Reservations are recommended for popular restaurants, especially on weekends."
        },
        seasonalHighlights: {
          spring: "The city comes alive with blooming flowers and outdoor cafes opening up.",
          summer: "Long daylight hours, warm weather, and numerous outdoor events.",
          fall: "Beautiful autumn colors in the parks and forests.",
          winter: "Christmas markets, snow-covered landscapes, and cozy indoor activities."
        },
        quickFacts: {
          totalAttractions: "11",
          freeActivities: "4",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};