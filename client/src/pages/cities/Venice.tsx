import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Venice: React.FC = () => {
  return (
    <CityPage
      cityName="Venice"
      country="Italy"
      title={"Best Things to Do in Venice, Italy (2025 Guide)"}
      description={`Discover the best things to do in Venice — top attractions, hidden gems, and food spots. Complete Venice travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=500&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Ride a gondola through the canals.",
        "Visit St. Mark's Square and Basilica.",
        "Explore the Doge's Palace.",
        "Walk across the Rialto Bridge.",
        "Get lost in the colorful Burano island.",
        "Enjoy a traditional Venetian cicchetti tour."]}
      attractions={[
        {
        name: "St. Mark's Square (Piazza San Marco)",
        description: `## Overview
St. Mark's Square, the heart of Venice, is a must-see. Surrounded by stunning architecture, including St. Mark's Basilica and the Doge's Palace, it's a vibrant hub of activity. Be prepared for crowds, especially during peak season. I found the atmosphere quite enchanting, especially in the early morning before the rush.

### Best Photo Spots
The best photo opportunities are from the Campanile (bell tower), offering a panoramic view of the square and the lagoon. Also, capture the square at sunrise or sunset for stunning lighting. Some say pigeons are annoying, but they can also make a photo more vibrant!

### Insider Tips
Tip: Visit early in the morning (before 9 AM) to avoid the crowds and enjoy a more peaceful experience. Consider buying tickets online in advance to skip the long queues for the Basilica and Campanile.`,
        practicalInfo: {
        howToGetThere: "Vaporetto (water bus) lines 1, 2, 4.1, 4.2, 5.1, 5.2 to San Marco stop.",
        openingHours: "Open 24/7 (square). Basilica and Campanile have specific opening hours, check online.",
        cost: "Free (square). Basilica: Free entry (some areas require a ticket). Campanile: €10.",
        website: "basilicasanmarco.it"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunrise/sunset from Campanile, ground-level shots of the Basilica and Doge's Palace",
        insiderTip: "Visit on a weekday morning before 9 AM for fewer crowds. Check for free entry times at the Basilica.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair access to the square, limited access inside Basilica and Campanile."
      }
      },
        {
        name: "Rialto Bridge (Ponte di Rialto)",
        description: `## Overview
The Rialto Bridge, one of Venice's most iconic landmarks, is a beautiful stone bridge spanning the Grand Canal. It's a bustling area with shops and stunning views. Be prepared for a crowded experience, but the views are worth it, I think.

### Best Photo Spots
Capture the bridge from a gondola or vaporetto for a classic Venetian photo. Early morning light is ideal. Consider taking photos from the nearby Fondamenta del Vin for a wider perspective.

### Insider Tips
Tip: Visit early in the morning (before 9 AM) or late in the evening (after 9 PM) to avoid the crowds. Walk slightly away from the main bridge area to discover some hidden local eateries.`,
        practicalInfo: {
        howToGetThere: "Vaporetto lines 1, 2 to Rialto stop.",
        openingHours: "Open 24/7",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["architecture", "photography", "history"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "From a gondola or vaporetto, early morning light",
        insiderTip: "Walk along the nearby Fondamenta del Vin for less crowded views and photo opportunities, especially around sunset.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Steps to access the bridge."
      }
      },
        {
        name: "Doge's Palace (Palazzo Ducale)",
        description: `## Overview
The Doge's Palace, a masterpiece of Venetian Gothic architecture, was the former residence of the Doge, the supreme authority of the Republic of Venice. Explore opulent rooms, impressive artwork, and learn about Venetian history. It's a truly fascinating place. I found the Bridge of Sighs particularly moving.

### Best Photo Spots
Capture the palace's façade from St. Mark's Square or from a gondola. Inside, the courtyard and the Golden Staircase offer stunning photo opportunities.

### Insider Tips
Tip: Book tickets online in advance to skip the long queues. Consider a guided tour to learn more about the palace's history and art. Don't miss the Bridge of Sighs.`,
        practicalInfo: {
        howToGetThere: "Vaporetto lines 1, 2, 4.1, 4.2, 5.1, 5.2 to San Marco stop.",
        openingHours: "Varies seasonally, typically 8:30 AM - 7:00 PM (April-October). Check website for current hours.",
        cost: "€30 (includes entry to Museo Correr, Museo Archeologico Nazionale, and Monumental Rooms of the Biblioteca Nazionale Marciana)",
        website: "palazzoducale.visitmuve.it"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "art"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Palace façade from St. Mark's Square, Golden Staircase, courtyard",
        insiderTip: "Book tickets online to avoid long queues, especially during peak season. Allocate at least 3 hours to fully explore the palace and connecting museums.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility. Some areas have steps."
      }
      },
        {
        name: "Burano",
        description: `## Overview
Burano is a small island in the Venetian Lagoon known for its brightly colored houses. It's a photographer's dream! The vibrant hues are truly captivating. Take a stroll through the charming streets, admire the colorful buildings, and enjoy the laid-back atmosphere. It's the kind of place you might linger longer than expected.

### Best Photo Spots
Every corner of Burano is a photo opportunity! Capture the colorful houses reflected in the canals. The best light is usually in the morning or late afternoon.

### Insider Tips
Tip: Take vaporetto line 12 from Venice (Fondamente Nove). Explore the less-crowded back streets for unique photo opportunities. Burano is also famous for its lace making, so consider buying a souvenir.`,
        practicalInfo: {
        howToGetThere: "Vaporetto line 12 from Fondamente Nove (Venice).",
        openingHours: "Open 24/7 (island). Lace Museum has specific opening hours, check online.",
        cost: "Free (island). Vaporetto ticket required (€7.50 per ride).",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["photography", "architecture", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Spring",
        photoOpportunity: "Colorful houses reflected in canals, overall vibrant street scenes",
        insiderTip: "Arrive early in the morning (before 10 AM) to avoid the large tour groups that visit throughout the day.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly flat terrain, but some bridges have steps."
      }
      },
        {
        name: "Gondola Ride",
        description: `## Overview
A gondola ride is a quintessential Venetian experience. Glide along the canals, admire the city's architecture from a unique perspective, and enjoy the romantic atmosphere. Yes, it's touristy, but it's also unforgettable. The gondoliers often sing, adding to the charm.

### Best Photo Spots
Capture the canals and bridges from the gondola. The Rialto Bridge and the Bridge of Sighs are particularly photogenic. Consider a sunset gondola ride for stunning lighting.

### Insider Tips
Tip: Negotiate the price before you start your ride. Consider sharing a gondola with other travelers to split the cost. The standard route is usually about 30 minutes.`,
        practicalInfo: {
        howToGetThere: "Gondola stands are located throughout Venice.",
        openingHours: "Varies, typically daytime hours.",
        cost: "€80 (daytime, 25-30 minutes), €120 (nighttime, 25-30 minutes)",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["romance", "culture", "photography"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Canals, bridges, architecture from a unique perspective",
        insiderTip: "Negotiate the price beforehand and consider sharing a gondola with friends to lower the cost per person. Opt for a ride on quieter, less-trafficked canals.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility."
      }
      },
        {
        name: "Cicchetti Tour",
        description: `## Overview
A cicchetti tour is a Venetian culinary experience where you hop from bacaro (wine bar) to bacaro, sampling cicchetti (small snacks) and local wine. It's a great way to taste Venetian cuisine and experience the local culture. Think of it as Venetian tapas! I recommend trying the fried mozzarella and the sardines.

### What to Expect
Expect a casual and lively atmosphere. Bacari are usually small and crowded, so be prepared to stand and mingle. Cicchetti are typically small plates, so you can try a variety of flavors.

### Insider Tips
Tip: Ask the locals for recommendations on the best bacari. Don't be afraid to try new things! Order a 'ombra' (glass of wine) to complete the experience.`,
        practicalInfo: {
        howToGetThere: "Bacari are located throughout Venice, especially in the Rialto and Cannaregio areas.",
        openingHours: "Varies, typically lunch and evening hours.",
        cost: "€15-€30 per person (depending on how much you eat and drink)",
        website: ""
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "culture", "culinary"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful cicchetti displays, lively bacaro atmosphere",
        insiderTip: "Head to the Rialto Market area around lunch time (11:30 AM) to find the freshest seafood cicchetti. Many bacari offer 'cicchetti del giorno' – ask what's special!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Varies depending on the bacaro."
      }
      },
        {
        name: "Caffè Florian",
        description: `## Overview
Caffè Florian, located in St. Mark's Square, is the oldest café in Venice and one of the oldest in the world. Established in 1720, it offers a luxurious and historical dining experience. Enjoy coffee, pastries, and light meals in an elegant setting. I found the atmosphere quite charming, even if it's a bit pricey.

## Dining Atmosphere
The café features beautifully decorated rooms, each with its own unique character. Live music is often played in the square, adding to the ambiance. It's a perfect place to relax and soak in the Venetian atmosphere.

## Signature Dishes & Pricing
Expect to pay a premium for the experience. Coffee starts around €10, and pastries around €8. They also offer a selection of sandwiches, salads, and cocktails. Signature dishes include the Florian coffee and the Bellini cocktail.

### Insider Tips
Tip: Be prepared for a cover charge if you sit outside. Consider visiting during off-peak hours to avoid the crowds. The hot chocolate is particularly decadent.`,
        practicalInfo: {
        howToGetThere: "Located in St. Mark's Square.",
        openingHours: "9:00 AM - 11:00 PM daily.",
        cost: "Expensive (€€€€)",
        website: "caffeflorian.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture", "history"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Elegant interior, St. Mark's Square view",
        insiderTip: "Go in the late afternoon and get a Bellini and watch St. Mark's Square at sunset. It's an expensive indulgence but worth the splurge for a special occasion.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible entrance."
      }
      },
        {
        name: "Rialto Market (Mercato di Rialto)",
        description: `## Overview
The Rialto Market is a bustling marketplace offering fresh produce, seafood, and local products. It's a vibrant and authentic Venetian experience. The market is especially lively in the morning. The sights, sounds, and smells are quite captivating, some say.

### What to Expect
The fish market is located in a separate building and is best visited in the morning. The produce market is open all day. Be prepared for crowds, especially on weekends.

### Insider Tips
Tip: Visit early in the morning (before 11 AM) for the best selection. Bargain for the best prices, but be respectful. Try some of the local produce, like artichokes and radicchio.`,
        practicalInfo: {
        howToGetThere: "Vaporetto lines 1, 2 to Rialto Mercato stop.",
        openingHours: "7:30 AM - 1:00 PM (fish market), 7:30 AM - 2:00 PM (produce market), Tuesday - Saturday.",
        cost: "Free (to enter), cost of purchases varies.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "culture", "local markets"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful produce displays, bustling market scene",
        insiderTip: "Arrive before 9 AM on a Friday to witness the widest selection of fresh seafood and to observe local chefs selecting ingredients for their restaurants.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Crowded, uneven surfaces."
      }
      },
        {
        name: "Trattoria Al Gatto Nero",
        description: `## Overview
Trattoria Al Gatto Nero, located on the island of Burano, is a renowned seafood restaurant offering authentic Venetian cuisine. It's a bit of a splurge, but the food is exceptional. The atmosphere is cozy and inviting.

## Dining Atmosphere
The restaurant features a charming dining room with views of the canal. The service is attentive and the staff is knowledgeable about the menu.

## Signature Dishes & Pricing
Signature dishes include the risotto di gò (fish risotto) and the fresh grilled seafood. Prices are moderate to expensive, with main courses ranging from €25-€40. Reservations are highly recommended.

### Insider Tips
Tip: Make reservations well in advance, especially during peak season. Ask for a table with a canal view. Try the house wine, which is locally produced.`,
        practicalInfo: {
        howToGetThere: "Vaporetto line 12 to Burano, then a short walk.",
        openingHours: "12:00 PM - 3:00 PM, 7:00 PM - 10:00 PM, Wednesday - Sunday.",
        cost: "Moderate to Expensive (€€€)",
        website: "gattonero.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "dining", "culinary"],
        costLevel: "Expensive",
        seasonalBest: "Spring",
        photoOpportunity: "Picturesque canal views from the restaurant, beautifully plated seafood dishes",
        insiderTip: "Request the 'menu degustazione' (tasting menu) for a comprehensive culinary experience showcasing the restaurant's best dishes. This offers better value than ordering à la carte.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Venice

Venice is a unique city when it comes to transportation. Since it's built on water, there are no cars! The primary modes of transport are walking, water buses (vaporetti), and water taxis. Getting around can be a bit confusing at first, but you'll quickly get the hang of it.

### Public Transport
The vaporetto is the main form of public transportation in Venice. It's a network of water buses that connect the different parts of the city and the surrounding islands. You can purchase single tickets or multi-day passes. Consider a multi-day pass if you plan to use the vaporetto frequently.

### Taxis & Rideshare
Water taxis are a more expensive but faster way to get around. They can be convenient if you have a lot of luggage or are in a hurry. Ridesharing services like Uber don't operate in Venice, so water taxis are your only option. Be prepared to pay a premium.

## Walking & Cycling
Walking is the best way to explore the narrow streets and hidden corners of Venice. However, be prepared to do a lot of walking! Cycling is not allowed in the main tourist areas.`,
        whereToStay: `## Where to Stay in Venice

Choosing the right neighborhood is key to a great Venice experience. Each area has its own unique charm and atmosphere. Consider your budget and interests when making your decision.

### Best Areas
St. Mark's Square is the heart of Venice and a convenient base for exploring the main attractions. However, it can be crowded and expensive. Cannaregio is a more residential area with a local feel and more affordable prices. Dorsoduro is a lively area with a mix of students, artists, and tourists. San Polo is a bustling area with the Rialto Market and many restaurants.

### Luxury Options
For a luxurious stay, consider hotels near St. Mark's Square or the Grand Canal. These hotels often offer stunning views and top-notch amenities.

## Budget-Friendly
For budget-friendly options, look for hotels or guesthouses in Cannaregio or Castello. These areas offer more affordable accommodation without sacrificing convenience.`,
        bestTimeToVisit: `## Best Time to Visit Venice

The best time to visit Venice depends on your preferences. Each season offers a different experience.

### Peak Season
The peak season is during the summer months (June-August). The weather is warm and sunny, but the city is crowded and expensive. Be prepared for long queues and high prices.

### Weather Overview
Spring (April-May) and fall (September-October) are shoulder seasons with pleasant weather and fewer crowds. Winter (November-March) can be cold and damp, but the city is less crowded and more affordable. It also offers a unique atmosphere, especially during Carnival.

## Local Events
Carnival (February) is a major event in Venice, with elaborate costumes, masks, and celebrations. The Venice Film Festival (September) attracts celebrities and film buffs from around the world.`,
        suggestedItinerary: `## Suggested Venice Itinerary

Here's a suggested itinerary for a 3-day trip to Venice:

### Day 1
Start your day with a visit to St. Mark's Square and Basilica. Explore the Doge's Palace and cross the Bridge of Sighs. Take a gondola ride in the afternoon. Enjoy dinner at a traditional Venetian restaurant.

### Day 2
Visit the Rialto Market in the morning. Explore the Cannaregio district and try some cicchetti at a local bacaro. Take a vaporetto to the island of Murano, famous for its glassblowing. Return to Venice for dinner and enjoy a gelato.

### Day 3
Take a vaporetto to the island of Burano, known for its colorful houses. Visit the Lace Museum. Return to Venice and explore the Dorsoduro district. Visit the Peggy Guggenheim Collection or the Gallerie dell'Accademia. Enjoy a final Venetian dinner.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Venice?",
        answer: `The best things to do in Venice include visiting St. Mark's Square, exploring the Doge's Palace, riding a gondola, walking across the Rialto Bridge, getting lost in the colorful Burano island, and enjoying a traditional Venetian cicchetti tour.`
      },
        {
        question: "How many days do you need in Venice?",
        answer: `I recommend spending at least 3 days in Venice to see the main attractions and explore the surrounding islands. This allows you to experience the city at a relaxed pace and avoid feeling rushed.`
      },
        {
        question: "What is Venice famous for?",
        answer: `Venice is famous for its canals, gondolas, stunning architecture, rich history, and unique culture. It's also known for its artistic heritage, including glassblowing and lace making.`
      },
        {
        question: "When is the best time to visit Venice?",
        answer: `The best time to visit Venice is during the spring (April-May) or fall (September-October) when the weather is pleasant and the crowds are smaller. Summer can be crowded and hot, while winter can be cold and damp.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Romantic, historical, enchanting",
        budgetBreakdown: {
          freeActivities: "Walking around St. Mark's Square,Exploring the Rialto Market,Wandering through the Cannaregio district,Admiring the architecture along the Grand Canal",
          budgetFriendly: "Vaporetto ride (€7.50 per ride),Cicchetti tour (€15-€30 per person),Entry to a smaller museum (€10-€15),Gelato (€3-€5)",
          splurgeWorthy: "Gondola ride (€80-€120),Fine dining experience at a top-rated restaurant,Stay at a luxury hotel with canal views"
        },
        localSecrets: ["Visit St. Mark's Basilica on a weekday at 8:00 AM when it opens to avoid the largest crowds. Enter through the side entrance near the Doge's Palace to bypass the main queue.", "Purchase a Venezia Unica City Pass online (veneziaunica.it) for discounted access to museums and public transport (ACTV). Download the AVM Venezia Official App for real-time vaporetto schedules and platform information.", "A realistic budget for 3 days in Venice is approximately €450-€600 per person. This includes €100-€150 for accommodation per night, €40-€60 per day for meals (including cicchetti), €20-€30 per day for transport, and €50-€100 for attractions.", "For authentic Venetian goods, visit the Rialto Market (especially the side streets) or the San Polo district. Look for Murano glass beads and Burano lace. Bargain respectfully, especially when buying in bulk.", "Avoid dining at restaurants directly on St. Mark's Square, which are overpriced and often offer mediocre food. Instead, venture into the quieter backstreets of Cannaregio or Dorsoduro for more authentic and affordable options, like Osteria Alle Testiere (Calle del Mondo Novo, 5801).", "The Festa del Redentore (third Sunday of July) is a major Venetian festival with fireworks and boat races. Be aware that this event attracts large crowds and accommodation prices will be higher. Book well in advance!"],
        diningHighlights: {
          mustTryDishes: "Risotto al Nero di Seppia (squid ink risotto),Sarde in Saor (sweet and sour sardines),Fritto Misto (mixed fried seafood),Cicchetti (Venetian tapas)",
          bestCafes: "Caffè Florian (St. Mark's Square): Historic café with elegant atmosphere.,Caffè del Doge (Calle dei Cinque, 609): Known for its excellent coffee and pastries.",
          topRestaurants: "Trattoria Al Gatto Nero (Burano): Renowned for its fresh seafood.,Osteria Alle Testiere (Calle del Mondo Novo, 5801): Small and intimate restaurant with creative Venetian cuisine.",
          foodMarkets: "Rialto Market: Offers fresh produce, seafood, and local products.",
          diningTips: "Tipping is not mandatory in Venice, but it's customary to leave a small tip (5-10%) for good service. Many restaurants include a 'coperto' (cover charge) per person, which covers the cost of bread and service. Reservations are recommended, especially for dinner."
        },
        seasonalHighlights: {
          spring: "Pleasant weather, fewer crowds than summer, ideal for exploring the islands.",
          summer: "Warm and sunny weather, but crowded and expensive. Enjoy outdoor activities and festivals.",
          fall: "Mild weather, fewer crowds, beautiful foliage. Perfect for walking and sightseeing.",
          winter: "Cold and damp, but less crowded and more affordable. Experience the unique atmosphere of Venice in winter, especially during Carnival."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "4",
          averageTimePerAttraction: "30-60 minutes",
          walkingFriendly: true,
          publicTransportQuality: "Good"
        }
      }}
    />
  );
};