import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Berlin: React.FC = () => {
  return (
    <CityPage
      cityName="Berlin"
      country="Germany"
      title={"Best Things to Do in Berlin, Germany (2025 Guide)"}
      description={`Discover the best things to do in Berlin — top attractions, hidden gems, and food spots. Complete Berlin travel guide.`}
      imageUrl={"https://plus.unsplash.com/premium_photo-1697730037237-cf245340b170?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Qm9zdG9ufGVufDB8MHwwfHx8MA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Brandenburg Gate",
        "Explore the remnants of the Berlin Wall",
        "Wander through Museum Island",
        "Take a boat tour on the Spree River",
        "Enjoy the vibrant street art scene"]}
      attractions={[
        {
        name: "Brandenburg Gate",
        description: `## Overview
The Brandenburg Gate is probably the most iconic landmark in Berlin, symbolizing both the city's turbulent past and its reunification. It stands as a powerful reminder of the Cold War and a symbol of peace and unity. The gate's neoclassical architecture, topped with the Quadriga statue, is truly impressive. I think it's a must-see for every visitor, even if it's crowded.

### Best Photo Spots
The best photo opportunities are early in the morning before the crowds arrive, or during the golden hour at sunset. Try capturing the gate from different angles along Pariser Platz.

### Insider Tips
Tip: Consider visiting at night when the gate is illuminated, creating a magical atmosphere. You'll find fewer people then, making for better photo opportunities.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U55 to Brandenburg Gate station. S-Bahn: S1, S2, or S25 to Brandenburg Gate station",
        openingHours: "Open 24/7, but best viewed during daylight hours or when illuminated at night",
        cost: "Free",
        website: "visitberlin.de"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Golden hour or nighttime illumination",
        insiderTip: "Visit at sunrise for fewer crowds and beautiful light.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible"
      }
      },
        {
        name: "East Side Gallery",
        description: `## Overview
The East Side Gallery is the longest remaining section of the Berlin Wall, transformed into an open-air art gallery. Artists from around the world have decorated the wall with murals reflecting themes of freedom, hope, and political commentary. It's a powerful and thought-provoking experience to walk along this historical monument, and one of the most important things to do in Berlin. Some say it gets very crowded during peak hours.

### Best Photo Spots
Take photos of the iconic murals like the 'Fraternal Kiss' or the 'Trabant breaking through the wall'. The best light is in the late afternoon.

### Insider Tips
I recommend visiting early in the morning or later in the afternoon to avoid the biggest crowds. Don't be afraid to take your time and really examine the artwork.`,
        practicalInfo: {
        howToGetThere: "S-Bahn: S3, S5, S7, or S9 to Warschauer Straße station. U-Bahn: U1 to Warschauer Straße station",
        openingHours: "Open 24/7",
        cost: "Free",
        website: "eastsidegallery-berlin.de"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Iconic murals, especially in the late afternoon light",
        insiderTip: "Walk along the Spree River side for quieter views and fewer crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly wheelchair accessible, but some sections may have uneven pavement"
      }
      },
        {
        name: "Museum Island",
        description: `## Overview
Museum Island is a UNESCO World Heritage site and home to five world-renowned museums: the Pergamon Museum, the Neues Museum, the Alte Nationalgalerie, the Bode Museum, and the Altes Museum. Each museum houses incredible collections of art and artifacts from various periods and cultures. If you're interested in history and art, this is a must-see. Perhaps plan to spend at least a day here to fully appreciate what's on display.

### Best Photo Spots
Capture the architectural beauty of each museum from the outside, and inside the Pergamon Museum, photograph the Ishtar Gate and the Pergamon Altar.

### Insider Tips
Be sure to purchase a Museum Pass for access to all five museums if you plan to visit more than one. Arrive early to avoid long lines, especially at the Pergamon Museum.`,
        practicalInfo: {
        howToGetThere: "S-Bahn: S1, S2, S25, or S26 to Hackescher Markt station. Tram: M4, M5, or M6 to Hackescher Markt station",
        openingHours: "Varies by museum, generally 10:00 AM - 6:00 PM. Check individual museum websites for details.",
        cost: "€12-€19 per museum, or €29 for a day pass to all five museums",
        website: "museumsinsel-berlin.de"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "architecture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Exterior architecture and exhibits inside the Pergamon Museum",
        insiderTip: "Buy a Museum Pass online in advance to skip the ticket lines.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Most museums are wheelchair accessible; check individual museum websites for details."
      }
      },
        {
        name: "Reichstag Building",
        description: `## Overview
The Reichstag Building is the seat of the German Parliament and a symbol of German democracy. Its glass dome offers panoramic views of the city, and its history is fascinating. It's free to visit, but you need to register in advance, I think. The combination of historical significance and modern architecture makes this a top attraction in Berlin.

### Best Photo Spots
Capture the city skyline from the glass dome, and take exterior shots of the building's architecture.

### Insider Tips
Register for a visit online well in advance, as slots fill up quickly. Be prepared for security checks upon entry.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U55 to Bundestag station. S-Bahn: S1, S2, or S25 to Brandenburg Gate station (10-minute walk)",
        openingHours: "8:00 AM - 10:00 PM daily, last admission at 8:45 PM",
        cost: "Free, but registration is required",
        website: "bundestag.de"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic city views from the glass dome",
        insiderTip: "Book your visit online at least 2-3 weeks in advance to secure your preferred time slot.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible; advance notice is required for specific accommodations."
      }
      },
        {
        name: "Memorial to the Murdered Jews of Europe",
        description: `## Overview
This somber and powerful memorial, also known as the Holocaust Memorial, consists of 2,711 concrete slabs of varying heights arranged in a grid-like pattern. It's designed to create a sense of disorientation and unease, prompting reflection on the horrors of the Holocaust. It's a very moving experience, I found the view surprisingly calming, but the historical significance is immense.

### Best Photo Spots
Capture the abstract patterns created by the slabs, especially at different times of the day when the light changes.

### Insider Tips
Consider visiting the Information Center underneath the memorial to learn more about the victims and the history of the Holocaust.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U2 to Mohrenstraße station. S-Bahn: S1, S2, or S25 to Brandenburg Gate station (5-minute walk)",
        openingHours: "Open 24/7; Information Center: 10:00 AM - 6:00 PM daily",
        cost: "Free",
        website: "holocaust-mahnmal.de"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "reflection"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Abstract patterns of the concrete slabs",
        insiderTip: "Visit early in the morning or late in the evening for a more solitary and reflective experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible; Information Center has accessible entrances and elevators."
      }
      },
        {
        name: "Charlottenburg Palace",
        description: `## Overview
Charlottenburg Palace is the largest palace in Berlin, offering a glimpse into the opulent lifestyle of Prussian royalty. Explore the state rooms, wander through the beautiful gardens, and admire the palace's baroque architecture. It is a peaceful escape from the bustling city center, maybe even worth an afternoon trip.

### Best Photo Spots
Capture the palace's grand facade from the gardens, and photograph the interior details of the state rooms.

### Insider Tips
Allow plenty of time to explore both the palace and the gardens. Consider taking a guided tour to learn more about the palace's history.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U7 to Richard-Wagner-Platz station. Bus: M45 or 309 to Schloss Charlottenburg",
        openingHours: "Varies by season; generally 10:00 AM - 5:30 PM. Check the website for current hours.",
        cost: "€12-€19 depending on the tour",
        website: "spsg.de"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "gardens"],
        costLevel: "Moderate",
        seasonalBest: "Spring",
        photoOpportunity: "Grand facade and interior state rooms",
        insiderTip: "Visit during the Christmas market season for a festive experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Partially wheelchair accessible; check the website for details."
      }
      },
        {
        name: "Markthalle Neun",
        description: `## Overview
Markthalle Neun is a historic food market in the Kreuzberg district, offering a wide variety of culinary delights from around the world. From street food to gourmet specialties, you'll find something to satisfy your taste buds. It's a great place to experience Berlin's diverse food scene, so be sure to visit!

### What to Expect
Expect a bustling atmosphere, especially on weekends. You'll find everything from traditional German sausages to international cuisine. It's the kind of place you might linger longer than expected.

### Insider Tips
Visit on Street Food Thursday evenings (5:00 PM - 10:00 PM) for a unique culinary experience.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U1 or U8 to Kottbusser Tor station",
        openingHours: "Varies by vendor; generally 12:00 PM - 6:00 PM Tuesday-Saturday; Street Food Thursday 5:00 PM - 10:00 PM",
        cost: "Budget-friendly to Moderate",
        website: "markthalle9.de"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culinary", "market"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful displays of food and bustling market atmosphere",
        insiderTip: "Arrive early on Street Food Thursday to avoid long lines at popular stalls.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible"
      }
      },
        {
        name: "The Barn Roastery",
        description: `## Overview
The Barn Roastery is a well-known specialty coffee shop in Berlin, renowned for its high-quality coffee beans and skilled baristas. They source their beans directly from farmers and roast them in-house, ensuring a fresh and flavorful cup of coffee. If you're a coffee lover, this is a must-visit.

### What to Expect
Expect a minimalist and modern atmosphere, with a focus on the coffee itself. The baristas are knowledgeable and passionate about their craft.

### Insider Tips
Try their espresso or a pour-over for a true taste of their coffee.`,
        practicalInfo: {
        howToGetThere: "Multiple locations throughout Berlin; check their website for the nearest location.",
        openingHours: "Varies by location; generally 8:00 AM - 6:00 PM",
        cost: "Moderate",
        website: "thebarn.de"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "cafe"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Minimalist interior and coffee preparation process",
        insiderTip: "Ask the barista for recommendations based on your taste preferences.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Varies by location; check their website for details."
      }
      },
        {
        name: "Mustafa's Gemüse Kebap",
        description: `## Overview
Mustafa's Gemüse Kebap is arguably the most famous Döner kebab stand in Berlin, known for its delicious and flavorful kebabs. Expect long lines, but many people say it's worth the wait. The secret is in the fresh vegetables, marinated chicken, and special sauces. This isn't just street food; it's a culinary experience!

### What to Expect
Expect a long wait in line, especially during peak hours. The kebab is packed with fresh vegetables, grilled chicken, and flavorful sauces. It's messy but delicious.

### Insider Tips
Go during off-peak hours (e.g., late afternoon) to avoid the longest lines.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U1, U3 to Mehringdamm station",
        openingHours: "11:00 AM - 2:00 AM Sunday-Thursday, 11:00 AM - 3:00 AM Friday-Saturday",
        cost: "Budget-friendly",
        website: "No official website"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes (including wait time)",
        experienceLevel: "Easy Access",
        interests: ["food", "street food", "cuisine"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "The colorful kebab and the long line of eager customers",
        insiderTip: "Order the 'mit alles' (with everything) for the full experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility due to crowds and location."
      }
      },
        {
        name: "Teufelsberg (Devil's Mountain)",
        description: `## Overview
Teufelsberg, or Devil's Mountain, is an artificial hill created from rubble after World War II. It's topped with a former US listening station that offers panoramic views of the city and surrounding forests. Today, it's a popular spot for street art and urban exploration. It's maybe a bit outside the tourist center, but a rewarding experience.

### Best Photo Spots
Capture the panoramic views of Berlin from the top of the listening station, and photograph the street art that adorns the walls.

### Insider Tips
Bring cash for the entrance fee. Wear comfortable shoes as the terrain can be uneven.`,
        practicalInfo: {
        howToGetThere: "S-Bahn: S41, S42, S46 to Heerstraße station (30-minute walk)",
        openingHours: "Varies by season; generally 11:00 AM - Sunset. Check their website for current hours.",
        cost: "€8",
        website: "teufelsberg-berlin.de"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["history", "urban exploration", "street art", "photography"],
        costLevel: "Budget-friendly",
        seasonalBest: "Spring",
        photoOpportunity: "Panoramic city views and street art",
        insiderTip: "Visit on a clear day for the best views of the city.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Not wheelchair accessible due to uneven terrain."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Berlin

Berlin has an excellent public transportation system, making it easy to get around the city. The U-Bahn (subway), S-Bahn (light rail), trams, and buses are all reliable and efficient. Consider purchasing a day ticket or a Berlin WelcomeCard for unlimited travel within the city.

### Public Transport
The U-Bahn and S-Bahn are the fastest ways to travel long distances. Trams are useful for getting around specific neighborhoods, while buses fill in the gaps where there are no train lines. Be sure to validate your ticket before boarding.

### Taxis & Rideshare
Taxis are readily available throughout the city, but they can be expensive. Rideshare services like Uber and Bolt are also available and may be a more affordable option. Consider using these for late-night trips or when traveling with a group.

### Walking & Cycling
Berlin is a very walkable city, and many attractions are within walking distance of each other. Cycling is also a popular way to get around, with dedicated bike lanes throughout the city. Rent a bike from one of the many rental shops.`,
        whereToStay: `## Where to Stay in Berlin

Berlin offers a wide range of accommodation options, from luxury hotels to budget-friendly hostels. The best area to stay depends on your interests and budget. Here are a few recommendations:

### Best Areas
Mitte is the city center and a great base for exploring the main attractions. Prenzlauer Berg is a trendy neighborhood with a vibrant nightlife and plenty of cafes and restaurants. Kreuzberg is a multicultural district with a more alternative vibe.

### Luxury Options
The Hotel de Rome and the Regent Berlin are both excellent luxury hotels in Mitte.

### Budget-Friendly
A&O Hostels and Meininger Hotels offer budget-friendly accommodation in various locations throughout the city.`,
        bestTimeToVisit: `## Best Time to Visit Berlin

The best time to visit Berlin is generally during the shoulder seasons (April-May and September-October). The weather is pleasant, and the crowds are smaller than during the peak summer months.

### Peak Season
Summer (June-August) is the peak tourist season in Berlin. The weather is warm, but the city can be crowded and expensive.

### Weather Overview
Berlin has a temperate climate with warm summers and cold winters. The average temperature in July is around 20°C (68°F), while the average temperature in January is around 0°C (32°F).

### Local Events
Berlin hosts numerous festivals and events throughout the year, including the Berlin International Film Festival in February, the Gallery Weekend in April, and the Berlin Festival in September.`,
        suggestedItinerary: `## Suggested Berlin Itinerary

Here's a suggested itinerary for a 3-day trip to Berlin:

### Day 1
Start your day with a visit to the Brandenburg Gate and the Reichstag Building. Then, walk to the Memorial to the Murdered Jews of Europe and reflect on its significance. In the afternoon, explore Museum Island and visit the Pergamon Museum.

### Day 2
Visit the East Side Gallery and learn about the history of the Berlin Wall. Then, explore the trendy neighborhood of Kreuzberg and visit Markthalle Neun for lunch. In the afternoon, take a boat tour on the Spree River.

### Day 3
Visit Charlottenburg Palace and explore its beautiful gardens. In the afternoon, visit Teufelsberg and enjoy the panoramic views of the city.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Berlin?",
        answer: `The best things to do in Berlin include visiting the Brandenburg Gate, exploring Museum Island, seeing the East Side Gallery, and experiencing the city's vibrant food scene.`
      },
        {
        question: "How many days do you need in Berlin?",
        answer: `Ideally, you need at least 3 days in Berlin to see the main attractions and experience the city's culture. However, you could easily spend a week or more exploring all that Berlin has to offer.`
      },
        {
        question: "What is Berlin famous for?",
        answer: `Berlin is famous for its rich history, vibrant art scene, diverse culture, and iconic landmarks such as the Brandenburg Gate and the Berlin Wall.`
      },
        {
        question: "When is the best time to visit Berlin?",
        answer: `The best time to visit Berlin is during the shoulder seasons (April-May and September-October) when the weather is pleasant and the crowds are smaller.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Historical, vibrant, multicultural",
        budgetBreakdown: {
          freeActivities: "Visit the Brandenburg Gate,Walk along the East Side Gallery,Explore the Memorial to the Murdered Jews of Europe,Wander through Tiergarten park",
          budgetFriendly: "Street food at Markthalle Neun (€5-€15),Public transportation day ticket (€8.80),Entry to Teufelsberg (€8),Coffee at a local cafe (€3-€5)",
          splurgeWorthy: "Fine dining experience at a Michelin-starred restaurant,Luxury hotel stay in Mitte,Private guided tour of Museum Island"
        },
        localSecrets: ["To avoid the crowds at the Reichstag Dome, visit on a weekday before 10:00 AM. Enter through the service entrance on Scheidemannstraße instead of the main entrance for quicker access. Book tickets online at least 3 weeks in advance.", "Use the BVG Fahrinfo app for real-time public transport information. Purchase the 'Berlin WelcomeCard AB' for unlimited travel within zones A and B. Stand to the right on escalators and let others pass on the left. Don't put your feet on the seats.", "Expect to spend €45-60 per day on a budget trip. This includes €15-20 for meals (Döner kebab: €5-7, Currywurst: €3-5), €9 for transport, €10-15 for attraction entrance fees, and €10 for miscellaneous expenses. Note: This is in EUR currency.", "For authentic souvenirs, visit the Kollwitzplatz market in Prenzlauer Berg on Saturdays. Bargain for prices on vintage clothing and handmade crafts. Look for items made from Ampelmännchen (the East German traffic light figure).", "Avoid the restaurants directly around Alexanderplatz, which are often overpriced and cater to tourists. Instead, explore the side streets of Hackesche Höfe for more authentic German cuisine at reasonable prices. Specifically, avoid 'Block House' steakhouse on Alexanderplatz and try 'Zur letzten Instanz' in Mitte for a traditional German meal instead.", "Attend the 'Karneval der Kulturen' (Carnival of Cultures) in May or June for a vibrant celebration of Berlin's multiculturalism. Be aware that this event can cause traffic congestion and public transport delays around Kreuzberg."],
        diningHighlights: {
          mustTryDishes: "Currywurst,Döner kebab,Berliner (Pancake),Sauerbraten",
          bestCafes: "The Barn: Specialty coffee roastery with multiple locations.,Five Elephant: Known for their cheesecake and coffee.,Bonanza Coffee Heroes: Another excellent coffee shop with a focus on quality beans.",
          topRestaurants: "Nobelhart & Schmutzig: Michelin-starred restaurant serving modern German cuisine.,Zur letzten Instanz: Berlin's oldest restaurant serving traditional German dishes.,Cocolo Ramen X-berg: Popular ramen restaurant in Kreuzberg.",
          foodMarkets: "Markthalle Neun: Street food and gourmet specialties.,Wochenmarkt am Karl-August-Platz: Weekly market with fresh produce and local products.,Thai Park (Preußenpark): Informal gathering of Thai food vendors.",
          diningTips: "Tipping is customary in Germany (around 10%).,Reservations are recommended for popular restaurants, especially on weekends.,Many restaurants offer a 'Mittagstisch' (lunch menu) with discounted prices."
        },
        seasonalHighlights: {
          spring: "Enjoy the blooming cherry blossoms at the Gärten der Welt and the vibrant street life as people emerge from winter hibernation.",
          summer: "Take advantage of the warm weather to swim in the lakes around Berlin, attend outdoor concerts, and explore the city's many parks.",
          fall: "Admire the colorful foliage in the Tiergarten park, visit the Berlin Festival, and enjoy the harvest season's culinary delights.",
          winter: "Visit the Christmas markets, ice skate at Potsdamer Platz, and enjoy the cozy atmosphere of Berlin's cafes and bars."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "5",
          averageTimePerAttraction: "30-60 minutes",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};