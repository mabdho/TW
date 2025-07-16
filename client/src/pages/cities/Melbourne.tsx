import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Melbourne: React.FC = () => {
  return (
    <CityPage
      cityName="Melbourne"
      country="Australia"
      title={"Best Things to Do in Melbourne, Australia (2025 Guide)"}
      description={`Discover the best things to do in Melbourne — top attractions, hidden gems, and food spots. Complete Melbourne travel guide.`}
      imageUrl={"https://plus.unsplash.com/premium_photo-1733317293766-5606f74b765b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWVsYm91cm5lfGVufDB8MHwwfHx8MA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Explore Federation Square, the heart of Melbourne",
        "Wander through the Royal Botanic Gardens",
        "Discover street art in Hosier Lane",
        "Experience the culinary scene at Queen Victoria Market",
        "Visit the iconic Melbourne Cricket Ground (MCG)",
        "Take a scenic drive along the Great Ocean Road"]}
      attractions={[
        {
        name: "Federation Square",
        description: `## Overview
Federation Square, or Fed Square as the locals call it, is the cultural heart of Melbourne. It's a vibrant public space that hosts events, festivals, and free activities throughout the year. The square's unique architecture is a conversation starter, some say it's beautiful, others... not so much. But it's undeniably a central meeting point and a must-see place in Melbourne.

### Best Photo Spots
Capture the dynamic angles and reflective surfaces of the buildings. Sunset is a great time to photograph Fed Square, with the light casting interesting shadows.

### Insider Tips
Tip: Check the Fed Square website for free events and performances during your visit. I recommend grabbing a coffee at one of the cafes and people-watching.`,
        practicalInfo: {
        howToGetThere: "Located directly opposite Flinders Street Station, easily accessible by train, tram, or bus.",
        openingHours: "Open 24/7 (some venues within Fed Square have varying hours)",
        cost: "Free to enter the square, costs vary for individual attractions and events.",
        website: "fedsquare.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["architecture", "culture", "events", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Best at sunset, capture the architecture and city views.",
        insiderTip: "Check the event schedule online beforehand to catch a free performance or festival.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible with ramps and elevators."
      }
      },
        {
        name: "Royal Botanic Gardens",
        description: `## Overview
The Royal Botanic Gardens is a tranquil oasis in the heart of Melbourne. Spanning 38 hectares, it features diverse plant collections, serene lakes, and picturesque walking trails. It's the kind of place you might linger longer than expected. A perfect escape from the bustling city.

### Best Photo Spots
Capture the iconic Ornamental Lake with the city skyline in the background. The Ian Potter Foundation Children's Garden also offers unique photo opportunities.

### Insider Tips
Tip: Take a punt tour on the Ornamental Lake for a relaxing experience. I think the Aboriginal Heritage Walk is well worth doing.`,
        practicalInfo: {
        howToGetThere: "Take tram routes 3, 5, 6, 16, 64, 67 or 72 to the gardens.",
        openingHours: "7:30am - Sunset daily",
        cost: "Free",
        website: "rbg.vic.gov.au"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "photography", "walking"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Ornamental Lake with city skyline in the background.",
        insiderTip: "Pack a picnic and enjoy lunch by the lake. It's surprisingly calming.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible paths and facilities throughout the gardens."
      }
      },
        {
        name: "Hosier Lane",
        description: `## Overview
Hosier Lane is Melbourne's most famous laneway, renowned for its vibrant street art. This hidden alleyway is a constantly evolving canvas, with new murals and graffiti appearing regularly. It's raw, edgy, and a must-see place for art lovers and photographers. 

### Best Photo Spots
Every inch of Hosier Lane is a photo opportunity! Visit during the day for the best light. 

### Insider Tips
Tip: Visit on a weekday morning to avoid the crowds. Don't be afraid to explore the smaller connecting laneways; some of the best art is hidden away.`,
        practicalInfo: {
        howToGetThere: "Located off Flinders Street, near Federation Square. Easy to reach by train or tram.",
        openingHours: "Open 24/7",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["art", "photography", "culture", "urban exploration"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Entire lane is a photo opportunity, capture the ever-changing art.",
        insiderTip: "Visit early in the morning on a weekday for fewer crowds and better photo opportunities.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Uneven pavement, may be difficult for those with mobility issues."
      }
      },
        {
        name: "Queen Victoria Market",
        description: `## Overview
The Queen Victoria Market, affectionately known as 'Queen Vic', is a Melbourne institution. This bustling market is a feast for the senses, offering everything from fresh produce and gourmet foods to clothing, souvenirs, and crafts. Some say it's the heart of Melbourne, and they might just be right. A great place to taste the real Melbourne food culture.

### Insider Tips
Tip: Visit on a Wednesday night for the Summer Night Market (seasonal) with food stalls and live music. Don't miss the hot jam donuts!

### What to Expect
Expect crowds, especially on weekends. Be prepared to haggle for the best prices. It's worth getting lost in the maze of stalls.`,
        practicalInfo: {
        howToGetThere: "Located on the corner of Elizabeth and Victoria Streets. Easily accessible by tram.",
        openingHours: "Varies by day. Generally open Tuesday, Thursday, Friday, Saturday & Sunday. Closed Mondays and Wednesdays (except Wednesday Night Market during summer).",
        cost: "Free to enter, costs vary for purchases.",
        website: "qvm.com.au"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "shopping", "culture", "local experiences"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the bustling atmosphere and colorful displays of produce.",
        insiderTip: "Arrive early in the morning on Saturday to find the freshest produce and avoid the worst of the crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible, but some areas can be crowded."
      }
      },
        {
        name: "Melbourne Cricket Ground (MCG)",
        description: `## Overview
The Melbourne Cricket Ground, or MCG, is an iconic sporting venue and a must-see for sports fans. It's one of the largest stadiums in the world and has hosted numerous historic events, from cricket matches to AFL Grand Finals. Even if you're not a sports fanatic, the sheer scale and history of the MCG is impressive.

### Best Photo Spots
Take a photo from the top level of the Great Southern Stand for a panoramic view of the stadium. The Shane Warne statue outside the ground is another popular photo spot.

### Insider Tips
Tip: Take a tour of the MCG to learn about its history and see behind the scenes. Check the MCG event calendar for upcoming matches and events.`,
        practicalInfo: {
        howToGetThere: "Located in Yarra Park, near Richmond Station. Easily accessible by train.",
        openingHours: "Varies depending on events. Tours available daily.",
        cost: "Tour prices vary. Event ticket prices also vary.",
        website: "mcg.org.au"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["sports", "history", "architecture", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic view of the stadium from the Great Southern Stand.",
        insiderTip: "Book a guided tour in advance, especially during peak season, to guarantee entry.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible with ramps, elevators, and accessible seating."
      }
      },
        {
        name: "Great Ocean Road",
        description: `## Overview
The Great Ocean Road is a spectacular coastal drive and one of Australia's most famous scenic routes. Winding along the rugged coastline of Victoria, it offers stunning views of the ocean, cliffs, and beaches. The highlight is the Twelve Apostles, dramatic rock formations rising from the sea. A must do trip if you have a few days.

### Best Photo Spots
The Twelve Apostles at sunrise or sunset. Loch Ard Gorge is also incredibly picturesque.

### Insider Tips
Tip: Allow at least two days to fully explore the Great Ocean Road. Stop at the smaller towns along the way, like Lorne and Apollo Bay.`,
        practicalInfo: {
        howToGetThere: "Start in Torquay, about a 1.5-hour drive from Melbourne. Best explored by car.",
        openingHours: "Open 24/7",
        cost: "Free to drive. Costs vary for attractions and activities along the way.",
        website: "visitgreatoceanroad.org.au"
      },
      discoveryTags: {
        timeRequired: "Full day",
        experienceLevel: "Moderate Adventure",
        interests: ["nature", "photography", "adventure", "scenic drives"],
        costLevel: "Moderate",
        seasonalBest: "Summer",
        photoOpportunity: "Twelve Apostles at sunrise or sunset. Loch Ard Gorge.",
        insiderTip: "Start your drive early to avoid the crowds, especially during peak season.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Varies depending on the specific location. Some areas may be inaccessible."
      }
      },
        {
        name: "Brunetti Classico City Square",
        description: `## Overview
Brunetti Classico City Square is a Melbourne institution, a beloved Italian cafe and pastry shop. Known for its authentic Italian treats, delicious coffee, and vibrant atmosphere, it's a perfect spot for a quick coffee or a leisurely meal. It's the kind of place where you can easily spend an hour or two just soaking up the atmosphere.

### What to Expect
Expect a bustling atmosphere, especially during peak hours. The displays of cakes and pastries are almost overwhelming! The coffee is consistently excellent, and the staff is friendly and efficient.

### Insider Tips
Tip: Try the cannoli or the tiramisu – they're both local favorites. The coffee is strong and flavorful, just like in Italy.`,
        practicalInfo: {
        howToGetThere: "Located in City Square, near Collins Street. Easily accessible by tram.",
        openingHours: "7:00 AM - 11:00 PM daily",
        cost: "Budget-friendly to Moderate (€5-€20 per person).",
        website: "brunetticlassico.com.au"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "cafe", "italian", "dessert"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the colorful displays of pastries and the bustling atmosphere.",
        insiderTip: "Grab a seat by the window for prime people-watching. It's a great spot to observe the city.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible with ramps and accessible seating."
      }
      },
        {
        name: "Cumulus Inc.",
        description: `## Overview
Cumulus Inc. is a celebrated Melbourne restaurant known for its modern Australian cuisine and innovative dishes. With a focus on fresh, seasonal ingredients, the menu is constantly evolving. The open kitchen adds to the lively atmosphere, and the food is consistently outstanding. Some say its a local favorite!

### Dining Atmosphere
The atmosphere is bustling and energetic, with a mix of locals and tourists. The open kitchen allows diners to watch the chefs at work, adding to the overall experience. The restaurant is stylish but not stuffy, making it a great choice for a special occasion or a casual meal.

### Signature Dishes
Don't miss the slow-roasted lamb shoulder, a Cumulus Inc. signature dish. The oysters are also excellent, as are the seasonal vegetable dishes.`,
        practicalInfo: {
        howToGetThere: "Located on Flinders Lane, in the heart of the city. Easily accessible by tram.",
        openingHours: "7:00 AM - 1:00 AM daily",
        cost: "Moderate to Expensive (€30-€70 per person).",
        website: "cumulusinc.com.au"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "restaurant", "dining", "modern australian", "culinary"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the stylish interior and the beautifully presented dishes.",
        insiderTip: "Make a reservation well in advance, especially for dinner. The restaurant is very popular.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible with ramps and accessible restrooms."
      }
      },
        {
        name: "South Melbourne Market",
        description: `## Overview
The South Melbourne Market is a historic market known for its gourmet food, fresh produce, and unique atmosphere. It's a local favorite for everything from seafood and cheese to pastries and coffee. A great place to experience Melbourne's culinary scene and find something delicious.

### What to Expect
Expect a bustling and vibrant atmosphere, especially on weekends. The market is a sensory overload, with the sights, sounds, and smells of fresh food and produce. Be prepared to sample your way through the market.

### Insider Tips
Try the dim sims, a South Melbourne Market institution. Also, stop by Padre Coffee for some great coffee! The seafood is incredibly fresh, especially on Saturdays.`,
        practicalInfo: {
        howToGetThere: "Take tram route 96 or 12 to the market.",
        openingHours: "Wednesday, Friday, Saturday, Sunday (check website for specific hours)",
        cost: "Free to enter, costs vary for purchases. Budget-friendly to Moderate.",
        website: "southmelbournemarket.com.au"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "market", "local experiences", "shopping", "culinary"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the colorful displays of produce and the bustling market atmosphere.",
        insiderTip: "Arrive early on Saturday morning to find the freshest produce and avoid the worst of the crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible, but some areas can be crowded."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Melbourne

Melbourne boasts an excellent public transportation system, making it easy to explore the city and its surroundings. Trams, trains, and buses are readily available, and the city's compact layout makes walking and cycling viable options as well.

### Public Transport
Myki cards are required for travel on trams, trains, and buses. You can purchase and top up Myki cards at train stations, convenience stores, and online. The Free Tram Zone covers much of the city center, making it easy to get around without paying a fare. Tram 35 runs a free circle route.

### Taxis & Rideshare
Taxis and rideshare services like Uber and Didi are readily available in Melbourne. They can be a convenient option for getting around, especially at night or when traveling outside of the city center. However, they can be more expensive than public transport, especially during peak hours.`,
        whereToStay: `## Where to Stay in Melbourne

Melbourne offers a wide range of accommodation options to suit every budget and preference. From luxury hotels and boutique apartments to budget-friendly hostels and guesthouses, you'll find something to suit your needs.

### Best Areas
The CBD (Central Business District) is a convenient location for exploring the city's attractions, with easy access to public transport and a wide range of dining and entertainment options. Southbank is a stylish area with riverside restaurants and entertainment venues. Fitzroy is a trendy neighborhood with a bohemian vibe, known for its street art and cafes.

### Luxury Options
The Crown Towers Melbourne offers luxurious accommodations with stunning city views. The Langham Melbourne is another excellent option, known for its elegant decor and exceptional service.`,
        bestTimeToVisit: `## Best Time to Visit Melbourne

The best time to visit Melbourne depends on your preferences. Spring (September-November) and autumn (March-May) offer mild weather and fewer crowds. Summer (December-February) is the peak season, with warm temperatures and numerous outdoor events. Winter (June-August) can be chilly and wet, but it also offers unique experiences like the winter festival.

### Peak Season
Summer (December-February) is the peak season in Melbourne, with warm temperatures and numerous outdoor events. Expect higher prices and larger crowds during this time.

### Weather Overview
Melbourne is known for its unpredictable weather. It's not uncommon to experience four seasons in a single day! Be sure to pack layers and be prepared for anything.`,
        suggestedItinerary: `## Suggested Melbourne Itinerary

Here's a suggested itinerary for a three-day trip to Melbourne:

### Day 1
Explore the city center: Visit Federation Square, Flinders Street Station, and St. Paul's Cathedral. Wander through the laneways, discovering street art and hidden cafes. In the afternoon, take a stroll through the Royal Botanic Gardens.

### Day 2
Visit Queen Victoria Market and experience the vibrant atmosphere. Take a tour of the Melbourne Cricket Ground (MCG). In the evening, enjoy dinner at one of Melbourne's many excellent restaurants.

### Day 3
Take a day trip to the Great Ocean Road and marvel at the Twelve Apostles. Alternatively, explore the Yarra Valley wine region and sample some of Victoria's finest wines.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Melbourne?",
        answer: `Melbourne offers a diverse range of activities, including exploring Federation Square, visiting the Royal Botanic Gardens, discovering street art in Hosier Lane, experiencing the culinary scene at Queen Victoria Market, and taking a scenic drive along the Great Ocean Road.`
      },
        {
        question: "How many days do you need in Melbourne?",
        answer: `A minimum of three days is recommended to explore Melbourne's main attractions. However, a longer stay of five to seven days will allow you to fully immerse yourself in the city's culture and explore its surrounding regions.`
      },
        {
        question: "What is Melbourne famous for?",
        answer: `Melbourne is famous for its vibrant arts scene, laneway culture, sporting events, delicious food, and unique architecture.`
      },
        {
        question: "When is the best time to visit Melbourne?",
        answer: `Spring (September-November) and autumn (March-May) offer mild weather and fewer crowds, making them ideal times to visit Melbourne. Summer (December-February) is also a popular time to visit, but expect higher prices and larger crowds.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Vibrant, Cultural, Cosmopolitan",
        budgetBreakdown: {
          freeActivities: "Explore Federation Square,Wander through the Royal Botanic Gardens,Discover street art in Hosier Lane,Walk along the Yarra River",
          budgetFriendly: "Visit Queen Victoria Market (€10-€20),Take a tram ride (€5),Explore Fitzroy (€15),Eat at a food truck (€10-€15)",
          splurgeWorthy: "Hot air balloon ride over the Yarra Valley (€300-€400),Fine dining experience at Vue de monde (€150-€250)"
        },
        localSecrets: ["Visit Hosier Lane on a weekday morning around 8:00 AM to avoid the large crowds of tourists and get the best photos without people in the way.", "Purchase a Myki card from a 7-Eleven store before traveling on public transport. Download the 'PTV' app for real-time train and tram updates. Stand to the left on escalators to allow others to pass.", "A realistic budget for 3 days is approximately AUD $400-500: $100-150 for accommodation, $50-75 per day for food, $15-20 per day for transport, and $50-100 for attractions.", "Visit the Queen Victoria Market on a Saturday or Sunday. Head to Elizabeth Street for great deals on souvenirs, and try bargaining for a lower price by offering 10-15% less than the asking price.", "Avoid restaurants on Southbank Promenade that offer overly aggressive discounts or 'free' appetizers. Instead, head to Gertrude Street in Fitzroy for authentic local cafes and restaurants like Cutler & Co.", "Check the Melbourne International Film Festival (MIFF) website for screenings in August, or the White Night festival in late August, which can affect public transport and cause closures."],
        diningHighlights: {
          mustTryDishes: "Meat Pie,Lamingtons,Vegemite on Toast,Flat White Coffee",
          bestCafes: "Brother Baba Budan: Known for its exceptional coffee and cozy atmosphere.,Industry Beans: Offers unique coffee brewing methods and a stylish interior.,Brunetti Classico City Square: A Melbourne institution, famous for its Italian pastries and coffee.",
          topRestaurants: "Cumulus Inc.: Modern Australian cuisine with a focus on seasonal ingredients.,Attica: Award-winning restaurant showcasing native Australian ingredients.,Chin Chin: Popular Asian fusion restaurant with a lively atmosphere.",
          foodMarkets: "Queen Victoria Market and South Melbourne Market are both excellent places to sample local produce and gourmet foods.",
          diningTips: "Tipping is not mandatory in Melbourne. It's customary to tip 10-15% for exceptional service. Reservations are recommended for popular restaurants, especially on weekends."
        },
        seasonalHighlights: {
          spring: "The Royal Botanic Gardens come alive with blooming flowers, making it a perfect time for picnics and outdoor activities.",
          summer: "Melbourne hosts numerous outdoor events and festivals, including the Australian Open tennis tournament and St Kilda Festival. Perfect time for beach visits.",
          fall: "The leaves change color in the parks and gardens, creating a picturesque landscape. It's also the perfect time for wine tasting in the Yarra Valley.",
          winter: "Melbourne hosts the Winter Festival with ice skating and festive markets. It's also a great time to visit the museums and art galleries."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "4",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};