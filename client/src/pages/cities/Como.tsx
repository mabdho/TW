import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Como: React.FC = () => {
  return (
    <CityPage
      cityName="Como"
      country="Italy"
      title={"Best Things to Do in Como, Italy (2025 Guide)"}
      description={`Discover the best things to do in Como — top attractions, hidden gems, and food spots. Complete Como travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1606745463199-d7623eee5f8a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Duomo di Como, a stunning cathedral.",
        "Take a boat trip on Lake Como.",
        "Explore Villa del Balbianello, a film location for Star Wars and James Bond.",
        "Ride the funicular to Brunate for panoramic views.",
        "Wander through the historic center of Como."]}
      attractions={[
        {
        name: "Duomo di Como",
        description: `# Overview
The Duomo di Como, or Como Cathedral, is a stunning example of Gothic and Renaissance architecture. Construction began in 1396 and continued for centuries, resulting in a fascinating blend of styles. It's truly impressive, and, I think, one of the can't-miss sights in the city. It's worth spending some time just admiring the intricate details of the facade. 

## Best Photo Spots
Capture the Duomo's grandeur from Piazza Duomo. The best light is arguably in the morning or late afternoon. For unique angles, try photographing it from nearby streets or rooftops. A wide-angle lens can help capture the entire facade.

## Insider Tips
Tip: Consider visiting during a weekday morning to avoid the largest crowds. You may be able to avoid longer lines and snap some unobstructed photos. Be sure to check for any special events or services that might affect opening hours.`,
        practicalInfo: {
        howToGetThere: "Located in Piazza Duomo, easily accessible on foot from anywhere in Como's city center.",
        openingHours: "Daily, 10:30 AM - 5:00 PM",
        cost: "Free to enter; donations appreciated.",
        website: "duomocomo.it"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "art", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Piazza Duomo offers the best perspective for capturing the cathedral's facade.",
        insiderTip: "Arrive shortly after opening at 10:30 AM to experience the Duomo with fewer crowds and enhanced tranquility.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible entrance."
      }
      },
        {
        name: "Lake Como Boat Tour",
        description: `# Overview
No trip to Como is complete without experiencing the beauty of Lake Como from the water. A boat tour offers stunning views of the villas, gardens, and mountains that line the shore. It's the kind of experience that really makes you feel like you're on vacation. The different villages dotted along the lake are gorgeous from the water. You might even see George Clooney's villa!

## What to Expect
Boat tours typically last 1-3 hours, depending on the route and operator. You can choose from private tours, group tours, or hop-on-hop-off services. Some tours include stops at various towns along the lake.

## Insider Tips
Tip: Book your tour in advance, especially during peak season. Some boat tours offer sunset cruises, which are particularly stunning. Consider bringing a light jacket, as it can get breezy on the lake.`,
        practicalInfo: {
        howToGetThere: "Boat tours depart from various locations in Como, including the main pier near Piazza Cavour.",
        openingHours: "Varies by tour operator.",
        cost: "€20-€100, depending on the type of tour.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-3 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "photography", "adventure"],
        costLevel: "Moderate",
        seasonalBest: "Spring, Summer, Fall",
        photoOpportunity: "Capture stunning views of the villas and mountains from the lake.",
        insiderTip: "Pack a small picnic and beverages to enjoy during your tour, allowing for a more relaxed and personalized experience on Lake Como.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some boats are wheelchair accessible; inquire when booking."
      }
      },
        {
        name: "Villa del Balbianello",
        description: `# Overview
Villa del Balbianello is a stunning villa located on the western shore of Lake Como, near Lenno. It's famous for its beautiful gardens and its use as a filming location for movies like Star Wars: Episode II and Casino Royale. The villa's elegant architecture and manicured grounds make it a must-see. It's the kind of place that feels like stepping into a movie set.

## Best Photo Spots
Capture the villa's iconic silhouette from the lake. The loggia offers panoramic views of the surrounding landscape. The gardens are filled with beautiful photo opportunities.

## Insider Tips
Tip: Book your tickets in advance, especially during peak season. Consider taking a boat from Como to Lenno to avoid traffic. Some say you can only access the villa through paid tours. Check the official website for access options.`,
        practicalInfo: {
        howToGetThere: "Accessible by boat from Como or by car/bus to Lenno, then a short walk or boat ride to the villa.",
        openingHours: "Varies by season; check the official website.",
        cost: "€22 for garden and interior visit. Cheaper for just gardens.",
        website: "fondoambiente.it/villa-del-balbianello-eng"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "nature", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Spring, Summer, Fall",
        photoOpportunity: "The loggia offers panoramic views of the lake and surrounding mountains.",
        insiderTip: "To bypass potential lines, buy your tickets online at least 24 hours in advance.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Gardens are partially accessible; interior is not fully accessible."
      }
      },
        {
        name: "Brunate Funicular",
        description: `# Overview
The Brunate funicular is a historic cable car that connects Como to the hilltop village of Brunate. The ride itself is an experience, offering stunning views of Lake Como and the surrounding mountains. Brunate is known as the "balcony of the Alps" because of its panoramic vistas. Taking the funicular up to Brunate is one of the best things to do in Como for great views.

## What to Expect
The funicular departs every 15-30 minutes. The ride takes about 7 minutes. Once in Brunate, you can explore the village, hike to scenic viewpoints, or enjoy a meal at a local restaurant.

## Insider Tips
Tip: The best time to visit Brunate is during sunset. Be sure to check the funicular's schedule before you go. I recommend packing water as it can be hot during the climb to the lighthouse in Brunate.`,
        practicalInfo: {
        howToGetThere: "The funicular station is located near the lakefront in Como.",
        openingHours: "Varies by season; check the official website.",
        cost: "€3.30 one way, €6.10 round trip.",
        website: "funicolarecomo.it"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["nature", "photography", "adventure"],
        costLevel: "Budget-friendly",
        seasonalBest: "Spring, Summer, Fall",
        photoOpportunity: "Capture panoramic views of Lake Como and the Alps from Brunate.",
        insiderTip: "Purchase a round-trip ticket and time your visit to catch the sunset over Lake Como for an unforgettable photographic experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair access is limited."
      }
      },
        {
        name: "Historic Center of Como",
        description: `# Overview
Wandering through the historic center of Como is like stepping back in time. The narrow streets, ancient walls, and charming piazzas are filled with history and character. It's a great place to explore on foot, discover hidden gems, and soak up the local atmosphere. There are shops, cafes, and restaurants aplenty! 

## What to Expect
Explore the main streets like Via Vittorio Emanuele II and Via Cinque Giornate. Visit Piazza Alessandro Volta and Piazza Cavour. Discover hidden courtyards and alleyways.

## Insider Tips
Tip: Take your time and get lost in the maze of streets. Be sure to look up and admire the architecture. Also, keep an eye out for hidden gems, like small artisan shops and local eateries.`,
        practicalInfo: {
        howToGetThere: "The historic center is easily accessible on foot from anywhere in Como.",
        openingHours: "Open 24/7",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "shopping", "food"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the charm of the narrow streets and ancient buildings.",
        insiderTip: "Explore the hidden courtyards behind the main streets for a glimpse into Como's authentic historic atmosphere.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some streets are pedestrian-only, but cobblestones can be challenging."
      }
      },
        {
        name: "Ristorante Sociale",
        description: `# Overview
Ristorante Sociale is a highly-rated restaurant in Como known for its modern take on traditional Italian cuisine. With a cozy and intimate atmosphere, it's the perfect spot for a romantic dinner or a special meal. The restaurant focuses on using fresh, local ingredients to create innovative and flavorful dishes. 

## Dining Experience
The ambiance is relaxed and elegant, with warm lighting and comfortable seating. The menu features a variety of pasta dishes, meat dishes, and seafood dishes, all prepared with a creative twist.

## Local Food Culture
The cuisine at Ristorante Sociale reflects the region's culinary heritage, with an emphasis on seasonal ingredients and traditional flavors. The wine list features a selection of local and regional wines. They offer a delicious tasting menu with the option of wine pairings. Consider making a reservation.`,
        practicalInfo: {
        howToGetThere: "Located in the heart of Como, easily accessible on foot.",
        openingHours: "Tuesday - Saturday: 7:30 PM - 11:00 PM. Closed Sunday and Monday.",
        cost: "€€€ (Expensive)",
        website: "ristorantesocialecomo.it"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "culinary"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the beautifully plated dishes and the restaurant's elegant ambiance.",
        insiderTip: "Request a table on the terrace for a romantic atmosphere and scenic views while dining.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility for wheelchairs."
      }
      },
        {
        name: "Caffè Giuliani",
        description: `# Overview
Caffè Giuliani is a historic cafe located in the heart of Como. Established in 1900, it's a beloved local institution known for its delicious coffee, pastries, and traditional Italian snacks. The cafe's charming atmosphere and central location make it a perfect spot to relax and people-watch. It's a great spot to start the day with a coffee or take a break from sightseeing. 

## Atmosphere and Cuisine
The cafe's interior is decorated with vintage furnishings and historical photographs, creating a cozy and nostalgic ambiance. The menu features a variety of coffee drinks, teas, pastries, sandwiches, and salads. I recommend the cappuccino and a local pastry.

## Insider Tips
Tip: Try the homemade gelato for a refreshing treat. The cafe is popular with locals, so it's a great place to experience the authentic Como lifestyle. Weekends can get crowded, so it may be best to visit in the morning.`,
        practicalInfo: {
        howToGetThere: "Located in the city center, easily accessible on foot.",
        openingHours: "7:00 AM - 8:00 PM daily.",
        cost: "€ (Budget-friendly)",
        website: "caffegiuliani.it"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["coffee", "food", "dining", "relaxation"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the cafe's vintage interior and the bustling street scene outside.",
        insiderTip: "Order a caffè corretto, an espresso with a shot of grappa, for a truly local experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible entrance."
      }
      },
        {
        name: "Mercato Coperto Como",
        description: `# Overview
For a taste of authentic local life, visit the Mercato Coperto Como, Como's vibrant covered market. Here, you'll find vendors selling fresh produce, local cheeses, meats, seafood, and other regional specialties. It's a feast for the senses and a great place to experience the culinary culture of Como. It offers a unique perspective on what to do in Como for local food lovers.

## What to Expect
The market is bustling with activity, especially on weekends. You can sample local products, chat with the vendors, and purchase ingredients for a picnic or a home-cooked meal.

## Insider Tips
Tip: Visit the market in the morning for the freshest produce. Don't be afraid to bargain with the vendors. Try some local cheese or salami for a taste of the region. Some say it's open until 6PM, but be sure to check before you go!`,
        practicalInfo: {
        howToGetThere: "Located near the city center, easily accessible on foot.",
        openingHours: "Monday - Saturday: 7:30 AM - 1:00 PM, 3:30 PM - 6:00 PM",
        cost: "Free to enter, cost varies depending on purchases.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "shopping", "local culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the vibrant colors and textures of the market's produce and products.",
        insiderTip: "Arrive before 10:00 AM on Saturdays to avoid the biggest crowds and secure the freshest selection of local ingredients.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Villa Carlotta",
        description: `# Overview
Villa Carlotta, situated in Tremezzo on the western shore of Lake Como, is a stunning 17th-century villa renowned for its exquisite gardens and art collection. The villa houses masterpieces by Canova, Thorvaldsen, and Hayez. The gardens are truly a sight to behold, particularly in the spring when the azaleas and rhododendrons are in full bloom. Villa Carlotta combines art, history, and nature in one breathtaking location. 

## Exploring the Villa
Inside, the villa's museum boasts a remarkable collection of sculptures and paintings. Be sure to explore each room to fully appreciate the art and history on display.

## Hidden Gems
Tip: Don't miss the secret gardens at the back of the property. These lesser-known areas offer tranquil spaces and unique views, adding to the villa's charm.`,
        practicalInfo: {
        howToGetThere: "Accessible by boat from Como to Tremezzo, or by bus.",
        openingHours: "Varies by season; check the official website.",
        cost: "€15 for adults.",
        website: "villacarlotta.it/en/"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "nature", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Spring, Summer",
        photoOpportunity: "Capture the villa with Lake Como in the background.",
        insiderTip: "Visit during the mid-week, ideally Wednesday or Thursday, to avoid weekend crowds and enjoy a more peaceful experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Partially wheelchair accessible; some garden paths are steep."
      }
      },
        {
        name: "Sentiero del Viandante",
        description: `# Overview
For those seeking outdoor adventure, the Sentiero del Viandante (Wayfarer's Path) offers breathtaking hiking trails along the eastern shore of Lake Como. This ancient path stretches for over 45 kilometers, providing stunning panoramic views, charming villages, and historical landmarks. Whether you're an experienced hiker or a casual walker, this trail provides an unforgettable outdoor experience.

## What to Expect
The trail is well-marked and offers varying levels of difficulty, allowing you to choose a section that suits your fitness level and interests. Wear comfortable shoes, bring water, and pack a snack to enjoy along the way.

## Insider Tips
Insider tip: Start your hike early in the morning to avoid the heat and the crowds. Bring a map or use a GPS app to stay on the trail. Some say it's best during Autumn for the colors. Pack layers for the weather changes.`,
        practicalInfo: {
        howToGetThere: "Accessible by train or bus to various starting points along the eastern shore.",
        openingHours: "Open 24/7",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Moderate Adventure",
        interests: ["nature", "adventure", "hiking", "photography"],
        costLevel: "Free",
        seasonalBest: "Spring, Fall",
        photoOpportunity: "Capture panoramic views of Lake Como and the surrounding mountains from various points along the trail.",
        insiderTip: "Download offline maps of the trail using the AllTrails app before embarking to ensure you can navigate even without cellular service.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Not wheelchair accessible; uneven terrain."
      }
      },
        {
        name: "Aperitivo at Bar S. Agostino",
        description: `# Overview
Indulge in the Italian tradition of aperitivo at Bar S. Agostino. This charming bar is nestled on a picturesque square in Como and offers a delightful experience where you can savor delicious drinks accompanied by complimentary snacks. It's a fantastic way to unwind after a day of sightseeing and immerse yourself in the local culture.

## Dining Experience
The bar boasts a relaxed atmosphere with outdoor seating, making it the perfect place to enjoy a pre-dinner drink while soaking in the ambiance of Como. Choose from a variety of cocktails, wines, and beers, and relish the tasty appetizers that come with your drink. 

## Best Time to Visit
Aperitivo typically starts around 6:00 PM and continues until 8:00 PM. Arrive early to secure a good seat and enjoy the lively atmosphere. I think you'll love it!`,
        practicalInfo: {
        howToGetThere: "Located in a central square within easy walking distance of main attractions.",
        openingHours: "Daily, 11:00 AM - 1:00 AM",
        cost: "€€ (Moderate)",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "relaxation", "local culture"],
        costLevel: "Moderate",
        seasonalBest: "Spring, Summer, Fall",
        photoOpportunity: "Capture the lively atmosphere and the beautifully presented aperitivo snacks and drinks.",
        insiderTip: "Order an Aperol Spritz, a classic Italian aperitivo drink, and enjoy it with the complimentary appetizers served at the bar.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Como

Como is a relatively small city, and the historic center is easily walkable. Walking is often the best way to explore the narrow streets and discover hidden gems. However, for reaching attractions outside the city center or exploring the lake, you'll need to consider other transportation options.

## Public Transport
The local bus network provides service to areas within and around Como. Consider purchasing a day pass if you plan to use the bus frequently. You can also take ferries to reach towns along Lake Como. The train station connects Como to other major cities in Italy. Some say buses are reliable, but it depends on traffic.

## Taxis & Rideshare
Taxis are available in Como, but they can be expensive. Ride-sharing services are not widely available. Be sure to agree on a price with the taxi driver before starting your journey.`,
        whereToStay: `## Where to Stay in Como

Como offers a variety of accommodation options to suit different budgets and preferences. From luxury hotels with lake views to budget-friendly guesthouses, you'll find something to fit your needs. Consider the location, amenities, and price when choosing your accommodation.

## Best Areas
The city center is the most convenient location for exploring Como's main attractions. You'll find a wide range of hotels, restaurants, and shops within walking distance. For a more peaceful experience, consider staying in one of the towns along Lake Como, such as Bellagio or Tremezzo. Some say the city center gets noisy at night.

## Luxury Options
Several luxury hotels in Como offer stunning lake views, world-class amenities, and exceptional service. These hotels often feature spas, fine-dining restaurants, and private beaches. Consider splurging for a truly unforgettable experience.`,
        bestTimeToVisit: `## Best Time to Visit Como

The best time to visit Como depends on your preferences and interests. The shoulder seasons (spring and fall) offer pleasant weather, fewer crowds, and lower prices. Summer is the peak season, with warm weather and plenty of activities, but it can also be crowded and expensive. Winter is the off-season, with cooler temperatures and fewer tourists. However, some attractions may have limited hours or be closed altogether.

## Peak Season
Summer (June-August) is the peak season in Como, with warm weather and plenty of sunshine. This is the best time for swimming, boating, and other water activities. However, be prepared for crowds and higher prices. Consider making reservations for accommodation and tours in advance.

## Weather Overview
Como has a temperate climate, with warm summers and mild winters. The average temperature in July is around 25°C (77°F), while the average temperature in January is around 5°C (41°F). Rainfall is fairly evenly distributed throughout the year.`,
        suggestedItinerary: `## Suggested Como Itinerary

Here's a suggested itinerary for a 3-day trip to Como:

## Day 1
Start your day with a visit to the Duomo di Como, the city's stunning cathedral. Explore the historic center and wander through the narrow streets. In the afternoon, take a boat tour on Lake Como. Enjoy a delicious dinner at a local restaurant.

## Day 2
Visit Villa del Balbianello, a famous villa with beautiful gardens. Take the funicular to Brunate for panoramic views of Lake Como. Enjoy an aperitivo at a bar in the city center.

## Day 3
Explore Villa Carlotta, known for its art collection and botanical gardens. Hike a section of the Sentiero del Viandante for stunning views. Enjoy a final meal at one of the lake-side restaurants, sampling local specialties. I think this is a great itinerary!`
      }}
      faqs={[
        {
        question: "What are the best things to do in Como?",
        answer: `The best things to do in Como include visiting the Duomo di Como, taking a boat tour on Lake Como, exploring Villa del Balbianello, riding the funicular to Brunate, and wandering through the historic center.`
      },
        {
        question: "How many days do you need in Como?",
        answer: `I recommend spending at least 2-3 days in Como to fully experience the city and its surroundings. This will give you time to explore the main attractions, take a boat tour on the lake, and visit nearby towns.`
      },
        {
        question: "What is Como famous for?",
        answer: `Como is famous for its stunning lake, picturesque villas, and charming historic center. It's also known for its silk industry and its proximity to the Italian Alps.`
      },
        {
        question: "When is the best time to visit Como?",
        answer: `The best time to visit Como is during the spring or fall, when the weather is pleasant, the crowds are smaller, and the prices are lower. Summer is also a popular time to visit, but it can be crowded and expensive.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Picturesque, Elegant, Relaxing",
        budgetBreakdown: {
          freeActivities: "Visit the Duomo di Como (free entry),Wander through the historic center,Walk along the lakefront promenade,Hike a portion of the Sentiero del Viandante",
          budgetFriendly: "Brunate funicular (€6.10 round trip),Local bus day pass (€5-€10),Picnic lunch from a local market (€10-€15),Gelato at a local gelateria (€3-€5)",
          splurgeWorthy: "Private boat tour on Lake Como (€100-€200),Fine-dining meal at Ristorante Sociale (€75+ per person)"
        },
        localSecrets: ["To avoid crowds at Villa del Balbianello, visit on a Tuesday morning at 8:30 AM when the gardens open. Enter through the service entrance located 50 meters west of the main gate to skip the line.", "Use the ASF Autolinee bus app (available on both iOS and Android) to purchase tickets and track bus arrival times. Buy the "Como Lago" card for unlimited travel within the city for €4.50 per day.", "A realistic budget for 3 days in Como is approximately €45-60 per day: €15-20 for meals (tramezzino at €3, pasta €12), €5-10 for transportation (bus and ferries), €15-20 for attractions (gardens), and €10-15 for miscellaneous expenses.", "Visit the Mercato Coperto Como (Via Mentana, 5) for authentic goods. Shop for local cheeses like Gorgonzola and Taleggio. Bargain for a 10-15% discount by politely asking, "È possibile fare uno sconto?"", "Avoid Ristorante Bella Vista (Piazza Cavour, 19) as its lake views come with inflated prices and mediocre food. Instead, try Osteria del Pozz (Via Alessandro Volta, 27) for authentic cuisine at local prices.", "Attend the Lake Como Festival (typically held in July) for classical music concerts in picturesque locations. However, book accommodations well in advance as prices increase and availability decreases during the festival."],
        diningHighlights: {
          mustTryDishes: "Risotto con Filetto di Persico (Risotto with Perch Fillet),Polenta Uncia (Creamy Polenta with Cheese and Butter),Missoltini (Sun-dried Lake Fish),Torta Miascia (Traditional Sweet Cake with Fruit and Nuts)",
          bestCafes: "Caffè Giuliani: Historic cafe known for its coffee and pastries.,Caffè Monti: Offers panoramic lake views and delicious desserts.",
          topRestaurants: "Ristorante Sociale: Modern Italian cuisine with local ingredients.,Osteria del Pozz: Authentic Como cuisine in a cozy setting.",
          foodMarkets: "Mercato Coperto Como: Covered market with fresh produce and local specialties.",
          diningTips: "Tipping is not mandatory in Italy, but rounding up the bill is common. Reservations are recommended for dinner, especially on weekends. Try the local wine from the Lombardy region."
        },
        seasonalHighlights: {
          spring: "Spring is a beautiful time to visit Como, with blooming flowers and pleasant weather. The gardens at Villa Carlotta are particularly stunning in the spring.",
          summer: "Summer is the peak season in Como, with warm weather and plenty of activities on the lake. The lake is perfect for swimming, boating, and sunbathing.",
          fall: "Fall offers pleasant weather, fewer crowds, and beautiful autumn foliage. The Sentiero del Viandante is a great place to hike in the fall.",
          winter: "Winter is the off-season in Como, with cooler temperatures and fewer tourists. It's a good time to visit if you're looking for a more peaceful experience, and the Christmas markets add festive cheer."
        },
        quickFacts: {
          totalAttractions: "11",
          freeActivities: "5",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Good"
        }
      }}
    />
  );
};