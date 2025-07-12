import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Venice: React.FC = () => {
  return (
    <CityPage
      cityName="Venice"
      country="Italy"
      title={"15 Best Things to Do in Venice, Italy (2025 Guide)"}
      description={`Planning a trip to Venice? You're in the right place! This guide covers the best things to do in Venice, from iconic landmarks to hidden canals. Venice, a city unlike any other, offers a unique blend of history, art, and romance. We'll explore must-see places and uncover some local secrets. Figuring out what to do in Venice can be overwhelming with so many options – gondola rides, museum visits, delicious food... the list goes on. I think this curated list will help you make the most of your trip. From St. Mark's Square to the quieter islands of Murano and Burano, prepare to be captivated. This comprehensive guide helps you plan your Venice itinerary.`}
      imageUrl={"https://plus.unsplash.com/premium_photo-1661963047742-dabc5a735357?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Ride a gondola through the canals",
        "Visit St. Mark's Square and Basilica",
        "Explore the Doge's Palace",
        "Get lost in the charming streets of Dorsoduro",
        "Discover Murano's glassblowing traditions",
        "Take a food tour of Rialto Market"]}
      attractions={[
        {
        name: "St. Mark's Square",
        description: `## Overview
St. Mark's Square (Piazza San Marco) is the heart of Venice, a grand public space surrounded by iconic landmarks. It's bustling with activity, from pigeons fluttering around to tourists taking pictures, but it's worth experiencing. Maybe it's even more magical during the off-season. 

### Best Photo Spots
The best photo opportunity is from the Campanile, offering panoramic views. Another good spot is near the Basilica, especially at sunrise or sunset for the light. 

### Insider Tips
Tip: Visit early in the morning (before 9 AM) to avoid the crowds. Later in the day, the square becomes incredibly crowded. Consider visiting during the acqua alta (high water) for a unique, albeit wet, experience – but be prepared with waterproof boots!`,
        practicalInfo: {
        howToGetThere: "Vaporetto (water bus) lines 1, 2, 4.1, 4.2, 5.1, and 5.2 stop at San Marco.",
        openingHours: "Open 24/7 (square); Basilica hours vary.",
        cost: "Free to enter the square; Basilica entry fees vary.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunrise or sunset from the Campanile.",
        insiderTip: "Arrive before 9 AM to avoid the worst of the crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible with some limitations."
      }
      },
        {
        name: "Doge's Palace",
        description: `## Overview
The Doge's Palace (Palazzo Ducale) is a masterpiece of Gothic architecture and a symbol of Venetian power. This is where the rulers of Venice once lived and governed. Prepare to be impressed by the opulent interiors and fascinating history. 

### Best Photo Spots
Take pictures of the palace from the lagoon for the best perspective. Inside, the courtyard and the Bridge of Sighs offer great photo opportunities. 

### Insider Tips
Recommend booking tickets online in advance to avoid long queues. Don't miss the Secret Itineraries tour for a more in-depth look at the palace's history and hidden areas.`,
        practicalInfo: {
        howToGetThere: "Vaporetto lines 1, 2, 4.1, 4.2, 5.1, and 5.2 stop at San Marco.",
        openingHours: "Varies seasonally, typically 9 AM - 6 PM (check website).",
        cost: "Around €30.",
        website: "palazzoducale.visitmuve.it"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "art"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "From the lagoon; Bridge of Sighs.",
        insiderTip: "Book tickets online to skip the line.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility; some areas not wheelchair accessible."
      }
      },
        {
        name: "Rialto Bridge",
        description: `## Overview
The Rialto Bridge (Ponte di Rialto) is one of the most famous bridges in Venice, connecting the districts of San Marco and San Polo. Expect it to be crowded, but the views of the Grand Canal are worth it. Some say it's a bit touristy, but it's still a must-see. 

### Best Photo Spots
The best photos are taken from either side of the Grand Canal, capturing the bridge's silhouette. Sunset is a particularly beautiful time. 

### Insider Tips
Tip: Visit early in the morning for a less crowded experience. Explore the Rialto Market nearby for a taste of local life and fresh produce.`,
        practicalInfo: {
        howToGetThere: "Vaporetto lines 1 and 2 stop at Rialto.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunset views of the Grand Canal.",
        insiderTip: "Explore the Rialto Market for a local experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Steep steps; not easily accessible for those with mobility issues."
      }
      },
        {
        name: "Gondola Ride",
        description: `## Overview
A gondola ride is the quintessential Venice experience, though admittedly, it's a bit of a splurge. Gliding through the canals offers a unique perspective of the city's architecture and hidden waterways. 

### What to Expect
Gondola rides typically last around 30 minutes and follow a set route. Prices are fixed, but you can try negotiating (though it's unlikely to work). 

### Insider Tips
Insider tip: Consider sharing a gondola with other travelers to split the cost. The best time for a romantic ride is at sunset, although it will be more crowded.`,
        practicalInfo: {
        howToGetThere: "Gondola stands are located throughout the city.",
        openingHours: "Varies, typically 9 AM - 11 PM.",
        cost: "Around €80 for 30 minutes (daytime); €120 (nighttime).",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["romance", "relaxation", "photography"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Unique perspectives of canals and architecture.",
        insiderTip: "Share a gondola to split the cost.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Not easily accessible for those with mobility issues."
      }
      },
        {
        name: "Murano",
        description: `## Overview
Murano is an island famous for its glassblowing tradition. A short vaporetto ride from Venice, it's a great place to see artisans at work and purchase unique souvenirs. It's perhaps a bit touristy in places, but seeing the glassblowing demonstrations is fascinating. 

### What to Expect
You can visit glass factories and workshops, watch demonstrations, and browse the shops. Be aware that some demonstrations are followed by pressure to buy items. 

### Insider Tips
Recommend visiting in the morning to avoid the tour group crowds. Take vaporetto line 4.1 or 4.2 from Venice.`,
        practicalInfo: {
        howToGetThere: "Vaporetto lines 4.1, 4.2, 3 from Venice.",
        openingHours: "Varies by workshop; typically 9 AM - 5 PM.",
        cost: "Vaporetto ticket required; glassblowing demonstrations may be free or have a small fee.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["art", "crafts", "shopping"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Glassblowing demonstrations; colorful glass creations.",
        insiderTip: "Visit in the morning to avoid crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Generally accessible, but some workshops may have limited accessibility."
      }
      },
        {
        name: "Burano",
        description: `## Overview
Burano is another island in the Venetian Lagoon, known for its brightly colored houses. This makes for fantastic photo opportunities. Many find it even more charming than Murano. 

### Best Photo Spots
Every street is a photo opportunity! The vibrant houses against the backdrop of the canals are stunning. 

### Insider Tips
The recommend is to wander off the main streets to discover quieter corners and local life. Take vaporetto line 12 from Venice.`,
        practicalInfo: {
        howToGetThere: "Vaporetto line 12 from Venice.",
        openingHours: "Open 24/7 (island); shops and restaurants have varying hours.",
        cost: "Vaporetto ticket required.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["photography", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Brightly colored houses.",
        insiderTip: "Wander off the main streets for a quieter experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Generally accessible, but some areas may have uneven surfaces."
      }
      },
        {
        name: "Cicchetti Crawl",
        description: `## Overview
Experience Venetian culinary culture with a 'cicchetti crawl.' Cicchetti are small snacks or appetizers, similar to Spanish tapas. This is a great way to taste a variety of local flavors and experience the city's bacari (wine bars). 

### What to Expect
Expect to hop from one bacaro to another, sampling different cicchetti and local wines (ombra). 

### Insider Tips
Try to find bacari frequented by locals, often away from the main tourist areas. Order a spritz to go along with your cicchetti. Look for cicchetti made with fresh, seasonal ingredients.`,
        practicalInfo: {
        howToGetThere: "Bacari are located throughout Venice, especially in the San Polo and Cannaregio districts.",
        openingHours: "Bacari typically open in the late afternoon/early evening.",
        cost: "Budget-friendly to Moderate (depends on how much you eat and drink).",
        website: ""
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "culture", "local life"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful cicchetti displays; lively bacari atmosphere.",
        insiderTip: "Venture away from main tourist areas to find authentic bacari.",
        hiddenGem: true,
        familyFriendly: true,
        accessibilityNotes: "Varies depending on the specific bacaro."
      }
      },
        {
        name: "Trattoria Al Gatto Nero",
        description: `## Overview
Located on the island of Burano, Trattoria Al Gatto Nero is a highly-regarded restaurant offering authentic Venetian cuisine. Many say it's one of the best dining experiences in the lagoon. The restaurant is known for its fresh seafood and traditional recipes. 

### Dining Experience
The atmosphere is cozy and welcoming, with both indoor and outdoor seating. The restaurant is popular with locals and tourists alike, so reservations are highly recommended. Expect to pay a premium for the quality and location.

### Signature Dishes
Must-try dishes include the risotto di go (a local fish risotto) and the seafood pasta. Don't miss the fresh catch of the day, prepared according to traditional Venetian recipes.`,
        practicalInfo: {
        howToGetThere: "Vaporetto line 12 to Burano.",
        openingHours: "12:00–14:30, 19:00–22:00. Closed Mondays & Tuesdays.",
        cost: "Expensive (€€€).",
        website: "gattonero.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Local Expert",
        interests: ["food", "cuisine", "dining"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Picturesque views of Burano; beautifully presented dishes.",
        insiderTip: "Make reservations well in advance, especially during peak season.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Generally accessible."
      }
      },
        {
        name: "Caffè Florian",
        description: `## Overview
Caffè Florian, located in St. Mark's Square, is Venice's oldest cafe, dating back to 1720. It's a historic institution, serving coffee, pastries, and light meals in an opulent setting. Be prepared for a splurge; the experience is the main draw here. 

### Atmosphere
The cafe's interior is decorated with ornate mirrors, frescoes, and plush seating, evoking a sense of old-world elegance. Live music is often played, adding to the ambiance. 

### Signature Treats
Indulge in their signature coffee drinks, such as the 'Caffè Florian' or a classic cappuccino. Sample their pastries and cakes, including traditional Venetian specialties.`,
        practicalInfo: {
        howToGetThere: "Located in St. Mark's Square.",
        openingHours: "Varies; typically 9:00 AM - 11:00 PM.",
        cost: "Expensive (€€€€).",
        website: "caffeflorian.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "history"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Ornate interiors; St. Mark's Square views.",
        insiderTip: "Enjoy the live music and soak in the historic atmosphere.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Rialto Market",
        description: `## Overview
The Rialto Market (Mercato di Rialto) is a bustling food market located near the Rialto Bridge. It's the place to experience local Venetian life and see (and smell!) a wide array of fresh produce, seafood, and spices. 

### What to Expect
The market is divided into sections for fruits, vegetables, and fish. The fish market is particularly lively in the morning. Be prepared for crowds, especially on weekends.

### Local Favorites
Try the local seafood, such as the 'moeche' (soft-shell crabs) when in season. Sample the fresh fruits and vegetables. It’s worth grabbing some bread and cheese for a quick picnic lunch.`,
        practicalInfo: {
        howToGetThere: "Vaporetto lines 1 and 2 stop at Rialto.",
        openingHours: "Tuesday to Saturday, 7:30 AM to 1:00 PM (fish market); Monday to Saturday, 7:30 AM to 1:00 PM (fruit and vegetable market).",
        cost: "Free to enter; cost depends on purchases.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "local life", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful produce displays; lively market atmosphere.",
        insiderTip: "Arrive early in the morning for the freshest selection and to avoid some of the crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Can be crowded; some areas may be difficult to navigate."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Venice

Venice is a unique city when it comes to transportation. Forget cars and buses – the primary ways to get around are on foot or by boat. Be prepared to do a lot of walking, as many of the streets are narrow and winding. 

### Public Transport
The vaporetto (water bus) is the main form of public transportation. There are various lines that connect different parts of the city and the surrounding islands. Consider purchasing a travel pass if you plan to use the vaporetto frequently.

### Taxis & Rideshare
Water taxis are available, but they are quite expensive. There are no rideshare services like Uber or Lyft in Venice. Gondolas are more for the experience rather than practical transportation.`,
        whereToStay: `## Where to Stay in Venice

Choosing the right area to stay in Venice can significantly impact your experience. Each district has its own unique charm and atmosphere. Consider your budget, interests, and how much you value peace and quiet when making your decision. 

### Best Areas
San Marco is the heart of Venice, but it's also the most crowded and expensive. Cannaregio is a quieter area with a more local feel. Dorsoduro is known for its art galleries and museums. Castello offers a mix of residential areas and tourist attractions.

### Luxury Options
Many of the luxury hotels are located in San Marco, offering stunning views and opulent amenities. Consider hotels near the Grand Canal for prime locations.`,
        bestTimeToVisit: `## Best Time to Visit Venice

The best time to visit Venice depends on your preferences regarding weather, crowds, and events. Each season offers a different experience, so it's important to weigh the pros and cons.

### Peak Season
Summer (June-August) is the peak season, with warm weather and plenty of sunshine. However, it's also the most crowded and expensive time to visit. Expect long queues and high hotel rates.

### Weather Overview
Spring (April-May) and Fall (September-October) offer pleasant weather and fewer crowds. Winter (November-March) can be cold and damp, but it's also the least crowded time to visit. You might even experience the unique phenomenon of acqua alta (high water).

### Local Events
The Venice Carnival (February) is a major event, attracting visitors from around the world. The Venice Film Festival (late August/early September) brings celebrities and film enthusiasts to the city.`,
        suggestedItinerary: `## Suggested Venice Itinerary

A well-planned itinerary can help you make the most of your time in Venice. Here's a suggested itinerary for a 3-day trip, allowing you to see the main sights and experience the city's unique atmosphere.

### Day 1
Start your day in St. Mark's Square, visiting St. Mark's Basilica and the Doge's Palace. In the afternoon, take a gondola ride through the canals. End the day with a cicchetti crawl in the San Polo district.

### Day 2
Visit the Rialto Market in the morning, followed by a trip to Murano to see the glassblowing demonstrations. In the afternoon, explore the colorful island of Burano. Enjoy dinner at a traditional trattoria in Cannaregio.

### Day 3
Explore the Dorsoduro district, visiting the Peggy Guggenheim Collection and the Gallerie dell'Accademia. Take a vaporetto to San Giorgio Maggiore for panoramic views of Venice. Enjoy a final Venetian meal before departing.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Venice?",
        answer: `The best things to do in Venice include visiting St. Mark's Square, exploring the Doge's Palace, riding a gondola, wandering through the Rialto Market, and taking day trips to Murano and Burano.`
      },
        {
        question: "How many days do you need in Venice?",
        answer: `I think 3 days is an ideal amount of time to spend in Venice. This allows you to see the main sights, explore the islands, and experience the city's unique atmosphere without feeling too rushed.`
      },
        {
        question: "What is Venice famous for?",
        answer: `Venice is famous for its canals, gondolas, stunning architecture, art, and history. It's a city unlike any other, built on a lagoon and known for its unique culture and romantic atmosphere.`
      },
        {
        question: "When is the best time to visit Venice?",
        answer: `The best time to visit Venice is during the spring (April-May) or fall (September-October) for pleasant weather and fewer crowds. Summer can be hot and crowded, while winter can be cold and damp.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Romantic, Historic, Unique",
        budgetBreakdown: {
          freeActivities: "Walking around St. Mark's Square,Exploring the Rialto Market (without buying anything),Wandering through the streets of Cannaregio,Visiting the Bridge of Sighs (from the outside)",
          budgetFriendly: "Vaporetto pass (€20 for 24 hours),Cicchetti and wine at a bacaro (€15-20),Entry to the Peggy Guggenheim Collection (€16),Pizza or pasta at a casual eatery (€10-15)",
          splurgeWorthy: "Gondola ride (€80 for 30 minutes),Fine dining experience at a Michelin-starred restaurant,Stay in a luxury hotel overlooking the Grand Canal"
        },
        localSecrets: ["Visit St. Mark's Basilica on Tuesdays at 8:30 AM – immediately after opening – to avoid the largest tour groups and experience the basilica in relative tranquility. Enter through the side entrance closest to the Doge's Palace for quicker access.", "Use the 'AVM Venezia Official App' to purchase vaporetto tickets and navigate the water bus system like a local. Purchase the 'Rolling Venice Card' (for ages 6-29) for discounted fares. Don't forget to validate your ticket before boarding. Always stand to let elders or mothers with children sit.", "A realistic budget for 3 days in Venice is approximately €45-60 per day. This includes €15-20 for food (cicchetti, pizza slices), €10-15 for transportation (vaporetto), €10 for attractions (museum entry), and €10-15 for miscellaneous expenses (souvenirs, water).", "For authentic Venetian goods, visit the Rialto Market (Campo della Pescaria and Campo delle Becarie) early in the morning. Bargain respectfully for fresh produce, seafood, and local crafts. Ask for the 'prezzo speciale' (special price) when buying in bulk.", "Avoid the restaurants directly on St. Mark's Square, which are overpriced and often serve mediocre food. Instead, venture into the quieter streets of Cannaregio and Castello to find trattorias frequented by locals. Avoid shops selling cheap Murano glass imitations near the train station – these are not authentic. Instead visit the Murano Glass Museum to see a certified selection.", "The Festa del Redentore (third Sunday of July) is a major Venetian festival with fireworks and boat races. Plan your visit accordingly as transportation can be affected due to boat parties and celebrations. Note, smaller shops may be closed on the holiday, and gondola prices will be higher."],
        diningHighlights: {
          mustTryDishes: "Sarde in saor (sweet and sour sardines),Risotto al nero di seppia (squid ink risotto),Fritto misto (mixed fried seafood),Cicchetti (Venetian tapas)",
          bestCafes: "Caffè Florian (historic cafe in St. Mark's Square, elegant atmosphere),Caffè del Doge (known for its high-quality coffee, near the Rialto Market)",
          topRestaurants: "Trattoria Al Gatto Nero (on Burano, fresh seafood, traditional recipes),Ristorante Alle Testiere (small, intimate restaurant, focus on seafood)",
          foodMarkets: "Rialto Market (fresh produce, seafood, spices)",
          diningTips: "Tipping is not expected in Venice, but it's customary to round up the bill or leave a small amount for good service. Reservations are recommended for popular restaurants, especially during peak season. Cicchetti are typically eaten standing at the bar in bacari."
        },
        seasonalHighlights: {
          spring: "Pleasant weather, blooming flowers, fewer crowds than summer. Ideal for exploring the islands and enjoying outdoor activities.",
          summer: "Warm and sunny, perfect for gondola rides and enjoying the beaches on the Lido. However, expect large crowds and high prices.",
          fall: "Mild weather, beautiful fall foliage, and fewer tourists. A great time to visit museums and enjoy the city's cultural attractions.",
          winter: "Cold and damp, but also the least crowded time to visit. Experience the unique atmosphere of Venice in winter, including the possibility of acqua alta."
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