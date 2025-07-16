import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Perth: React.FC = () => {
  return (
    <CityPage
      cityName="Perth"
      country="Australia"
      title={"Best Things to Do in Perth, Australia (2025 Guide)"}
      description={`Discover the best things to do in Perth — top attractions, hidden gems, and food spots. Complete Perth travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1524586410818-196d249560e4?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Explore the iconic Kings Park and Botanic Garden",
        "Take a ferry to Rottnest Island and meet the adorable quokkas",
        "Stroll along the vibrant Elizabeth Quay waterfront",
        "Discover the art and culture at the Art Gallery of Western Australia",
        "Enjoy a sunset picnic at Cottesloe Beach",
        "Indulge in the local culinary scene at Fremantle Markets"]}
      attractions={[
        {
        name: "Kings Park and Botanic Garden",
        description: `## Overview
Kings Park is one of the world's largest inner-city parks, offering breathtaking panoramic views of the Perth skyline and the Swan River. More than just a pretty vista, it's home to a diverse collection of Western Australian flora, meticulously curated in the Botanic Garden. You could easily spend an entire day here exploring the various walking trails, memorials, and playgrounds.

### Best Photo Spots
The best photo opportunities are definitely at the State War Memorial and the Lotterywest Federation Walkway. The walkway gives you elevated views of the park and city, while the memorial offers a solemn yet stunning backdrop.

### Insider Tips
Tip: Visit early in the morning (around 7:00 AM or 8:00 AM) to avoid the crowds, especially on weekends. Bring a picnic blanket and enjoy lunch with a view. Don't miss the free guided walks offered by park volunteers to learn more about the local flora and fauna.`,
        practicalInfo: {
        howToGetThere: "Take the Transperth bus 37, 39, 41, or 42 from the city centre. Parking is also available, but can be limited during peak times.",
        openingHours: "Open 24/7, but the Botanic Garden and some facilities have specific opening hours (usually 9:00 AM - 5:00 PM).",
        cost: "Free",
        website: "bgpa.wa.gov.au"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "photography", "relaxation", "history"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Panoramic views of the city skyline and Swan River.",
        insiderTip: "Bring a picnic and enjoy a relaxing lunch overlooking the city.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Many areas are wheelchair accessible."
      }
      },
        {
        name: "Rottnest Island",
        description: `## Overview
Rottnest Island, or 'Rotto' as locals call it, is a car-free island paradise just a short ferry ride from Perth. It's famous for its adorable quokkas, small marsupials that are native to the island. Rent a bike and explore the island's stunning beaches, snorkel in crystal-clear waters, and discover its fascinating history.

### Best Photo Spots
Obviously, you need to get a quokka selfie! Be respectful and don't feed them. Other great photo spots include the Bathurst Lighthouse and The Basin, a beautiful swimming spot. The sunset views from the West End are also spectacular.

### Insider Tips
Tip: Book your ferry tickets and bike rental in advance, especially during peak season. The earliest ferry is the best way to get ahead of the crowds. Pack plenty of water and sunscreen, as it can get quite hot on the island. Look for the hidden beaches on the northern side of the island for more secluded swimming spots.`,
        practicalInfo: {
        howToGetThere: "Take a ferry from Fremantle, Perth, or Hillarys Boat Harbour. Several ferry operators offer services.",
        openingHours: "Ferries operate throughout the day, but check the timetable for specific departure and return times.",
        cost: "Ferry tickets range from $80 - $100 AUD per adult. Bike rental is additional.",
        website: "rottnestisland.com"
      },
      discoveryTags: {
        timeRequired: "Full day",
        experienceLevel: "Moderate Adventure",
        interests: ["nature", "adventure", "photography", "relaxation"],
        costLevel: "Moderate",
        seasonalBest: "Summer",
        photoOpportunity: "Quokka selfies and stunning coastal scenery.",
        insiderTip: "Rent a bike and explore the island's hidden beaches and bays.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some areas are accessible, but the island is best explored by bike."
      }
      },
        {
        name: "Elizabeth Quay",
        description: `## Overview
Elizabeth Quay is a vibrant waterfront precinct in the heart of Perth. It's a hub of activity, with restaurants, bars, shops, and public art installations. Take a stroll along the promenade, ride the Elizabeth Quay Carousel, or simply relax and enjoy the atmosphere.

### Best Photo Spots
The Spanda sculpture is a popular photo spot, especially at night when it's illuminated. The views of the Swan River and the city skyline are also stunning. Consider capturing a picture of the Bell Tower across the water.

### Insider Tips
Tip: Visit on a Friday or Saturday evening to experience the lively atmosphere and enjoy live music. Consider taking a Swan River cruise from Elizabeth Quay for a different perspective of the city. Many of the restaurants offer happy hour specials.`,
        practicalInfo: {
        howToGetThere: "Elizabeth Quay train station and bus port are located right in the precinct. It's also easily accessible by foot from the city centre.",
        openingHours: "Open 24/7, but individual businesses have their own opening hours.",
        cost: "Free to enter, but activities and dining costs vary.",
        website: "elizabethquay.com.au"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["architecture", "relaxation", "food", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Spanda sculpture and city skyline views.",
        insiderTip: "Visit during the evening for a vibrant atmosphere and live music.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully wheelchair accessible."
      }
      },
        {
        name: "Fremantle Markets",
        description: `## Overview
The Fremantle Markets are a historic market hall buzzing with local flavor, located in the heart of Fremantle. Open Friday to Sunday, it's the perfect place to find fresh produce, artisanal crafts, unique souvenirs, and delicious food. Expect a sensory overload in the best possible way!

### What to Expect
You'll find everything from fresh fruit and vegetables to handmade jewelry and clothing. The atmosphere is lively and colorful, with buskers and street performers adding to the entertainment. Be sure to sample some of the local delicacies on offer.

### Insider Tips
Tip: Visit on a Friday evening for the 'Sunset Markets', which feature live music and food stalls. Arrive early to avoid the crowds, especially on weekends. Don't be afraid to haggle for a better price, especially on crafts and souvenirs.`,
        practicalInfo: {
        howToGetThere: "Take the train to Fremantle station, which is a short walk from the markets. Several bus routes also stop nearby.",
        openingHours: "Friday: 9:00 AM - 8:00 PM, Saturday & Sunday: 9:00 AM - 6:00 PM",
        cost: "Free to enter, but costs vary for purchases.",
        website: "fremantlemarkets.com.au"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "shopping", "culture", "local"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful market stalls and unique products.",
        insiderTip: "Visit on Friday evening for the 'Sunset Markets' with live music.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Cottesloe Beach",
        description: `## Overview
Cottesloe Beach is arguably Perth's most iconic beach, known for its pristine white sand, clear turquoise waters, and relaxed atmosphere. It's the perfect spot for swimming, sunbathing, surfing, or simply enjoying a sunset picnic. The Norfolk pines lining the foreshore add to its charm.

### Best Photo Spots
The Indiana Teahouse provides a classic photo backdrop, especially at sunset. The groyne is also a great spot to capture the coastline. Don't miss taking a picture of the beach from the top of the hill overlooking the ocean.

### Insider Tips
Tip: Visit early in the morning for a quieter experience. The water is usually calmer in the morning as well. Stay for sunset – it's truly spectacular. Head to one of the cafes along Marine Parade for coffee and breakfast. You might consider swimming during the day and grabbing fish and chips in the evening.`,
        practicalInfo: {
        howToGetThere: "Take the train to Cottesloe station, which is a short walk from the beach. Several bus routes also stop nearby.",
        openingHours: "Open 24/7",
        cost: "Free",
        website: "None"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "photography", "swimming"],
        costLevel: "Free",
        seasonalBest: "Summer",
        photoOpportunity: "Sunset views and the iconic Indiana Teahouse.",
        insiderTip: "Visit early in the morning for a quieter experience and calm waters.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Art Gallery of Western Australia",
        description: `## Overview
The Art Gallery of Western Australia (AGWA) houses an impressive collection of Australian and international art, including a significant collection of Indigenous art. The gallery is located in the Perth Cultural Centre and offers a diverse range of exhibitions and programs.

### What to Expect
Expect to see a diverse range of artwork, from classic paintings to contemporary installations. The gallery also hosts regular events and workshops. Allow plenty of time to explore the various exhibitions.

### Insider Tips
Tip: Check the gallery's website for upcoming exhibitions and events. Entry to the permanent collection is free. You can also join a free guided tour to learn more about the artwork.`,
        practicalInfo: {
        howToGetThere: "Located in the Perth Cultural Centre, easily accessible by train and bus.",
        openingHours: "10:00 AM - 5:00 PM daily (closed Tuesdays)",
        cost: "Free entry to the permanent collection; charges may apply for special exhibitions.",
        website: "artgallery.wa.gov.au"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "culture", "history", "architecture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Architectural shots of the gallery building and select artwork.",
        insiderTip: "Visit on a Wednesday for free entry to all exhibitions.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully wheelchair accessible."
      }
      },
        {
        name: "Petition Kitchen",
        description: `## Overview
Petition Kitchen is a popular restaurant located in the historic State Buildings. It offers modern Australian cuisine with a focus on fresh, seasonal ingredients. The restaurant has a relaxed and stylish atmosphere, making it perfect for a casual lunch or a special occasion.

### Dining Experience
Petition Kitchen prides itself on its innovative dishes and commitment to local produce. Their menu changes regularly to reflect the seasons. The atmosphere is sophisticated yet relaxed, perfect for a memorable meal. They offer extensive wine list showcasing some of Western Australia's best drops. The food scene is definitely flourishing in Perth.

### Insider Tips
Tip: Book a table in advance, especially for dinner. Try the chef's tasting menu for a curated culinary experience. Don't miss their selection of craft beers and cocktails. Lunch is a local favorite due to its more accessible price point. 

CAFES & RESTAURANTS DISCOVERY CARD
 * Atmosphere: Stylish, relaxed, and modern
 * Signature Dishes: Their menu changes seasonally, but expect creative dishes with local ingredients
 * Local Food Culture: Modern Australian cuisine
 * Practical Dining Info: Price Range: Moderate to Expensive ($30 - $60 per person), Hours: Varies, check website, Reservations: Recommended`,
        practicalInfo: {
        howToGetThere: "Located in the State Buildings, easily accessible by train and bus.",
        openingHours: "Varies, check website.",
        cost: "Moderate to Expensive",
        website: "statebuildings.com/petition"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "culinary", "local"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Stylish interior and beautifully plated dishes.",
        insiderTip: "Book a table in advance and try the chef's tasting menu.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Little Creatures Brewery",
        description: `## Overview
Little Creatures Brewery is a Fremantle institution, housed in a former boat shed on the Fishing Boat Harbour. It's a popular spot for locals and tourists alike, offering a wide range of craft beers, delicious food, and a lively atmosphere. You can see the brewing process in action while you enjoy your pint.

### Dining Experience
The brewery serves up hearty pub fare, including pizzas, burgers, and seafood. The atmosphere is casual and family-friendly, with plenty of indoor and outdoor seating. This is a must-visit for beer lovers visiting Perth.

### Insider Tips
Tip: Take a brewery tour to learn more about the brewing process. Try a tasting paddle to sample a variety of beers. The outdoor seating area is the perfect spot to enjoy a sunny afternoon. It's the kind of place you might linger longer than expected.

CAFES & RESTAURANTS DISCOVERY CARD
 * Atmosphere: Lively, casual, and family-friendly
 * Signature Dishes: Pizzas, burgers, and seafood
 * Local Food Culture: Pub fare with craft beers
 * Practical Dining Info: Price Range: Budget-friendly to Moderate ($20 - $40 per person), Hours: Varies, check website, Reservations: Recommended for large groups`,
        practicalInfo: {
        howToGetThere: "Located in Fremantle, easily accessible by train and bus.",
        openingHours: "Varies, check website.",
        cost: "Budget-friendly to Moderate",
        website: "littlecreatures.com.au"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "beer", "local"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Brewery tanks and waterfront views.",
        insiderTip: "Take a brewery tour and try a tasting paddle.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Yahava KoffeeWorks Swan Valley",
        description: `## Overview
For coffee aficionados, Yahava KoffeeWorks in the Swan Valley is a must-visit. This isn't just a cafe; it's a coffee experience. They source beans from around the world, roasting them on-site to create a diverse range of blends and single-origin coffees. 

### Coffee Culture
You can sample different coffees at the tasting bar, learn about the roasting process, and even purchase your own beans to take home. The cafe also serves light meals and snacks to complement your coffee. It's a great place to relax and enjoy the beautiful Swan Valley scenery. It's the ideal spot for morning coffee!

### Insider Tips
Tip: Take part in a coffee tasting session. Ask the staff for recommendations based on your preferences. Consider buying a bag of beans to take home. Check the board for special offers. Weekdays are less crowded so you have a chance to relax and enjoy the peace.

CAFES & RESTAURANTS DISCOVERY CARD
 * Atmosphere: Relaxed, coffee-focused
 * Signature Dishes: Wide selection of coffees, light meals
 * Local Food Culture: Global coffee blends
 * Practical Dining Info: Price Range: Budget-friendly ($10-$20 per person), Hours: Varies, check website, Reservations: Not usually required`,
        practicalInfo: {
        howToGetThere: "Drive to the Swan Valley.",
        openingHours: "Varies, check website",
        cost: "Budget-friendly",
        website: "yahava.com.au"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "relaxation", "local"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Coffee beans, brewing equipment.",
        insiderTip: "Participate in a coffee tasting session.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible"
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Perth

Perth has a good public transport system, making it easy to get around without a car. However, having a car can be useful for exploring areas outside of the city centre.

### Public Transport
The Transperth network includes trains, buses, and ferries. You can purchase a SmartRider card for convenient travel or use contactless payment on buses and trains. The Free Transit Zone (FTZ) in the city centre allows for free travel on buses. Downloading the Transperth app is crucial for navigating public transport; the app can tell you exactly which bus to take to your destination.

### Taxis & Rideshare
Taxis and rideshare services like Uber and Ola are readily available in Perth. They are a convenient option for getting around, especially at night.`,
        whereToStay: `## Where to Stay in Perth

Perth offers a variety of accommodation options to suit all budgets and preferences. The city centre, Northbridge, and Fremantle are popular areas to stay.

### Best Areas
The city centre is a good option for those who want to be close to the main attractions, restaurants, and shops. Northbridge is known for its nightlife and cultural attractions. Fremantle offers a more relaxed atmosphere and is close to the beach.

### Luxury Options
The Ritz-Carlton, COMO The Treasury, and Crown Towers Perth are some of the luxury hotels in Perth.
`,
        bestTimeToVisit: `## Best Time to Visit Perth

The best time to visit Perth is during spring (September-November) or autumn (March-May), when the weather is mild and pleasant. Summer (December-February) can be hot, but it's also the best time to enjoy the beaches. 

### Weather Overview
Perth has a Mediterranean climate with hot, dry summers and mild, wet winters. The average temperature in summer is around 30°C (86°F), while the average temperature in winter is around 18°C (64°F).

### Local Events
Consider visiting during the Perth Festival (February-March) or the Fringe World Festival (January-February) for a vibrant cultural experience.`,
        suggestedItinerary: `## Suggested Perth Itinerary

Here's a suggested itinerary for a 3-day trip to Perth:

### Day 1
Start your day by exploring Kings Park and Botanic Garden. In the afternoon, visit Elizabeth Quay and take a stroll along the waterfront. In the evening, enjoy dinner at one of the many restaurants in the city centre.

### Day 2
Take a ferry to Rottnest Island and spend the day exploring the island by bike. Be sure to take a quokka selfie! Enjoy a sunset dinner overlooking the ocean.

### Day 3
Visit Fremantle and explore the Fremantle Markets. In the afternoon, relax on Cottesloe Beach. In the evening, enjoy dinner at Little Creatures Brewery.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Perth?",
        answer: `Some of the best things to do in Perth include visiting Kings Park and Botanic Garden, taking a ferry to Rottnest Island, exploring Elizabeth Quay, relaxing on Cottesloe Beach, and discovering the Fremantle Markets.`
      },
        {
        question: "How many days do you need in Perth?",
        answer: `A minimum of 3 days is recommended to see the main attractions in Perth. This allows time to explore the city, visit Rottnest Island, and relax on the beach.`
      },
        {
        question: "What is Perth famous for?",
        answer: `Perth is famous for its beautiful beaches, sunny weather, relaxed lifestyle, and its proximity to Rottnest Island, home of the adorable quokkas.`
      },
        {
        question: "When is the best time to visit Perth?",
        answer: `The best time to visit Perth is during spring (September-November) or autumn (March-May) for mild and pleasant weather.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Relaxed, sunny, vibrant",
        budgetBreakdown: {
          freeActivities: "Visit Kings Park and Botanic Garden,Relax on Cottesloe Beach,Stroll along Elizabeth Quay,Explore the Perth Cultural Centre",
          budgetFriendly: "Ferry to Rottnest Island ($80-100 AUD),Bike rental on Rottnest Island ($30 AUD per day),Entry to Fremantle Markets (Free, but budget for purchases),Lunch at a local cafe ($15-25 AUD)",
          splurgeWorthy: "Stay at a luxury hotel like COMO The Treasury,Fine dining experience at a top restaurant like Wildflower"
        },
        localSecrets: ["To avoid crowds at Kings Park, enter through the Fraser Avenue entrance before 8:00 AM on weekdays. You'll find parking much easier and enjoy a peaceful walk.", "For the cheapest transport, purchase a SmartRider card and download the Transperth app for real-time information. Remember to tag on and tag off at every journey to avoid fines.", "A realistic budget for 3 days in Perth is approximately $450-600 AUD per person. This includes $100-150 AUD per day for meals, $20-30 AUD per day for transport, $50-100 AUD for attractions, and $100 AUD for miscellaneous expenses.", "Head to the E Shed Markets in Fremantle for authentic local goods, including Indigenous art and crafts. Bargaining is generally not expected, but you may be able to negotiate a small discount for multiple purchases.", "Avoid the restaurants on the main drag of Hillarys Boat Harbour. They're overpriced and cater to tourists. Instead, walk a few blocks inland to find local cafes and restaurants with better value and quality, like The Breakwater.", "Be aware that the Perth Festival runs from February to March and can significantly increase accommodation prices. Book well in advance! During public holidays such as Australia Day (January 26), many businesses have limited hours or are closed."],
        diningHighlights: {
          mustTryDishes: "Western Rock Lobster,Barramundi,Lamingtons,Local Craft Beer",
          bestCafes: "Telegram Coffee: Known for its specialty coffee and minimalist design.,La Veen Coffee: Offers a wide range of coffee brewing methods and single-origin beans.",
          topRestaurants: "Wildflower: Fine dining restaurant with stunning city views, serving modern Australian cuisine.,Petition Kitchen: Modern Australian cuisine with a focus on fresh, seasonal ingredients.",
          foodMarkets: "Fremantle Markets for fresh produce and diverse food stalls.",
          diningTips: "Tipping is not mandatory in Australia, but it's appreciated for good service. Reservations are recommended for popular restaurants, especially on weekends."
        },
        seasonalHighlights: {
          spring: "Wildflowers bloom in Kings Park, creating a colorful spectacle.",
          summer: "Perfect for swimming and sunbathing at Perth's beaches.",
          fall: "Pleasant weather for exploring the Swan Valley and enjoying wine tasting.",
          winter: "Mild temperatures make it a good time to visit indoor attractions and enjoy cozy cafes."
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