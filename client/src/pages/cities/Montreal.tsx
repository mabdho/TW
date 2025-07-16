import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Montreal: React.FC = () => {
  return (
    <CityPage
      cityName="Montreal"
      country="Canada"
      title={"Best Things to Do in Montreal, Canada (2025 Guide)"}
      description={`Discover the best things to do in Montreal — top attractions, hidden gems, and food spots. Complete Montreal travel guide.`}
      imageUrl={"https://plus.unsplash.com/premium_photo-1697730100119-1f40e797f395?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Explore the cobblestone streets of Old Montreal.",
        "Ascend Mount Royal for panoramic city views.",
        "Immerse yourself in art at the Montreal Museum of Fine Arts.",
        "Savor delicious smoked meat at Schwartz's Deli.",
        "Wander through the vibrant Jean-Talon Market.",
        "Discover the architectural wonder of Habitat 67."]}
      attractions={[
        {
        name: "Old Montreal",
        description: `## Overview
Old Montreal, or Vieux-Montréal, is the heart of the city's history. Its cobblestone streets, historic buildings, and charming squares transport you back to the 17th century. It's a fantastic place to just wander and soak it all in. Perhaps you'll feel as if you’re strolling through a European city, but then again, maybe that’s just the poutine talking.

### Best Photo Spots
The Place Jacques-Cartier is a must-photograph spot with its colorful flower displays and lively atmosphere. Don't miss the Notre-Dame Basilica's stunning interior, a truly awe-inspiring sight. The waterfront also offers fantastic photo opportunities, especially at sunset.

### Insider Tips
Tip: Visit Old Montreal early in the morning to avoid the crowds. It's quieter and more peaceful, allowing you to appreciate the architecture and ambiance. Stroll along the waterfront promenade for a relaxing experience and fantastic views of the St. Lawrence River.`,
        practicalInfo: {
        howToGetThere: "Take the Metro to Place-d'Armes station (Orange Line).",
        openingHours: "Open 24/7 (shops and attractions vary)",
        cost: "Free to explore (attractions vary)",
        website: "vieux.montreal.qc.ca"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography", "walking"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Place Jacques-Cartier, Notre-Dame Basilica, waterfront at sunset",
        insiderTip: "Visit early in the morning (before 10 AM) to avoid the tour groups and enjoy a more peaceful experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some areas are cobblestone and may be challenging for those with mobility issues."
      }
      },
        {
        name: "Mount Royal Park",
        description: `## Overview
Designed by Frederick Law Olmsted, the same landscape architect who designed New York City's Central Park, Mount Royal Park offers stunning panoramic views of Montreal. It's a green oasis in the heart of the city, perfect for hiking, biking, or simply relaxing and enjoying nature. Honestly, I think everyone should make time for this place. It’s so central to the city's identity.

### Best Photo Spots
The Kondiaronk Belvedere is the most popular spot for panoramic city views. The cross at the summit also provides a unique photo opportunity, especially at night. During the fall, the park's foliage creates a stunning backdrop for photos.

### Insider Tips
Tip: Hike up the trails instead of taking the road for a more immersive experience. Consider bringing a picnic to enjoy at one of the many scenic spots. Bike rentals are available near the park entrance, should you prefer to cycle.`,
        practicalInfo: {
        howToGetThere: "Take the Metro to Mont-Royal station (Orange Line) and then bus 11 or walk up the hill.",
        openingHours: "6:00 AM - 12:00 AM daily",
        cost: "Free",
        website: "montreal.ca/en/places/mount-royal-park"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["nature", "hiking", "photography", "views", "relaxation"],
        costLevel: "Free",
        seasonalBest: "Fall",
        photoOpportunity: "Kondiaronk Belvedere for panoramic city views, cross at the summit",
        insiderTip: "Visit on a weekday morning for fewer crowds. The view is especially beautiful at sunrise or sunset.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some trails are steep and may not be accessible to all. The road to the Belvedere is accessible by car and bus."
      }
      },
        {
        name: "Montreal Museum of Fine Arts",
        description: `## Overview
The Montreal Museum of Fine Arts (MMFA) is one of Canada's largest and most respected art museums. Its diverse collection spans various periods and cultures, from ancient artifacts to contemporary masterpieces. It offers something for every art lover, and I think that's a very strong statement.

### Must-See Exhibits
The museum's collection of Canadian and Quebec art is particularly noteworthy. Don't miss the exhibitions featuring international artists and historical periods. The decorative arts and design collection is also worth exploring.

### Insider Tips
Tip: Check the museum's website for special exhibitions and events. Admission is free for Quebec residents on the first Sunday of each month, but expect larger crowds. Consider joining a guided tour to learn more about the artworks and the museum's history.`,
        practicalInfo: {
        howToGetThere: "Take the Metro to Peel station (Green Line) or Guy-Concordia station (Green Line).",
        openingHours: "Tuesday - Sunday: 10:00 AM - 5:00 PM (hours vary, check website)",
        cost: "Adults: $24, Students: $15 (prices vary, check website)",
        website: "mbam.qc.ca"
      },
      discoveryTags: {
        timeRequired: "2-4 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "history", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Grand staircase, featured exhibitions (check restrictions)",
        insiderTip: "Visit on a Wednesday evening when admission to the permanent collections is free for everyone.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The museum is fully accessible with elevators and ramps."
      }
      },
        {
        name: "Jean-Talon Market",
        description: `## Overview
Jean-Talon Market is one of North America's largest open-air markets, a vibrant hub of culinary delights and local produce. It's a feast for the senses, with colorful displays of fruits, vegetables, cheeses, meats, and flowers. I truly think you can find some unexpected treasures here.

### Must-Try Foods
Sample local cheeses, maple syrup products, and fresh pastries. Don't miss the opportunity to try a Montreal-style bagel, baked in a wood-fired oven. Freshly squeezed juices and local wines are also popular choices.

### Insider Tips
Tip: Visit the market on a Saturday morning for the full experience, but be prepared for crowds. Bring cash, as some vendors may not accept credit cards. Talk to the vendors and ask for recommendations — they are passionate about their products.`,
        practicalInfo: {
        howToGetThere: "Take the Metro to Jean-Talon station (Orange Line or Blue Line).",
        openingHours: "Varies by vendor, generally 7:00 AM - 6:00 PM daily",
        cost: "Free to enter (food and products vary)",
        website: "marchejeantalon.com/en/"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture", "local", "shopping"],
        costLevel: "Budget-friendly",
        seasonalBest: "Summer",
        photoOpportunity: "Colorful produce displays, vendors with their wares",
        insiderTip: "Go early on a weekday to beat the weekend crowds and get the freshest produce. Many vendors offer free samples, so don't be shy!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The market is generally accessible, but some areas may be crowded."
      }
      },
        {
        name: "Habitat 67",
        description: `## Overview
Habitat 67, designed by architect Moshe Safdie for Expo 67, is a unique housing complex that resembles a stack of Lego blocks. It's a fascinating example of modernist architecture and urban planning. It's hard to believe it was built so long ago, and, truthfully, its impact is still felt today. 

### Best Photo Spots
Take photos from the waterfront or the surrounding streets to capture the building's unique structure. The complex is particularly striking against the backdrop of the St. Lawrence River. Consider taking a guided tour to learn more about the building's design and history.

### Insider Tips
Tip: Access to the interior is limited to residents and tour participants. Book a guided tour in advance to explore the inside of the complex and learn about its architectural significance. Take the Metro to the Ile-Sainte-Hélène station for close proximity.`,
        practicalInfo: {
        howToGetThere: "Take the Metro to Ile-Sainte-Hélène station (Yellow Line).",
        openingHours: "Exterior viewing: 24/7, Interior tours: Varies, check website",
        cost: "Free to view exterior, Tours: Varies, check website",
        website: "habitat67.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["architecture", "history", "photography"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "From the waterfront, close-up of the modules",
        insiderTip: "The best light for photography is in the late afternoon. Book your tour well in advance as spots are limited.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Exterior viewing is accessible, interior access depends on tour specifics."
      }
      },
        {
        name: "Schwartz's Deli",
        description: `## Overview
Schwartz's Deli is a Montreal institution, famous for its smoked meat sandwiches. This no-frills eatery has been serving up its signature dish since 1928, and the line out the door is a testament to its popularity. Really, I don’t think anyone can say they've visited Montreal without stopping by. 

### Must-Try Dishes
The smoked meat sandwich is the undisputed star of the menu. Order it 'medium-fat' for the perfect balance of flavor and tenderness. Accompany your sandwich with fries, coleslaw, and a pickle. Cherry Coke, anyone?

### Insider Tips
Tip: Be prepared to wait in line, especially during peak hours. Consider visiting during off-peak times, such as mid-afternoon, to avoid the longest queues. Seating is limited, so you may have to share a table with other diners. Don't be surprised!`,
        practicalInfo: {
        howToGetThere: "Take the Metro to Saint-Laurent station (Green Line).",
        openingHours: "Sunday - Thursday: 11:00 AM - 12:30 AM, Friday - Saturday: 11:00 AM - 2:30 AM",
        cost: "Budget-friendly (Smoked meat sandwich: $13-$16)",
        website: "schwartzsdeli.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "local", "cuisine"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Inside the deli, the smoked meat sandwich",
        insiderTip: "Order your smoked meat "medium fat." It's the most flavorful. Also, be prepared to pay with cash - they prefer it!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility due to crowded conditions."
      }
      },
        {
        name: "Fairmount Bagel",
        description: `## Overview
Fairmount Bagel is a Montreal institution, known for its wood-fired bagels. Unlike New York bagels, Montreal bagels are sweeter, smaller, and boiled in honey-sweetened water before being baked. The atmosphere is casual, with a focus on the bagels themselves. It's one of those places that just *feels* authentic, you know? 

### Bagel Recommendations
Try the classic sesame or poppy seed bagels. They are delicious on their own or with cream cheese. For a unique experience, try the smoked salmon bagel. They are open 24/7 so you can grab a bagel anytime.

### Insider Tips
Tip: Fairmount Bagel is open 24/7, making it the perfect spot for a late-night snack or an early-morning breakfast. Be prepared to wait in line, especially on weekends. You can watch the bakers at work while you wait.`,
        practicalInfo: {
        howToGetThere: "Take the Metro to Laurier station (Orange Line), then walk east on Laurier Avenue.",
        openingHours: "24/7",
        cost: "Budget-friendly (Bagels: $1-$2)",
        website: "fairmountbagel.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "local", "cuisine"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Freshly baked bagels, the wood-fired oven",
        insiderTip: "Go late at night to see the ovens in full swing and experience the most authentic atmosphere. The sesame bagel is a must!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited seating is available."
      }
      },
        {
        name: "Olive et Gourmando",
        description: `## Overview
Olive et Gourmando is a popular cafe in Old Montreal, known for its delicious sandwiches, pastries, and coffee. It's a great place to grab a quick bite or linger over a cup of coffee. The atmosphere is cozy and inviting, with a touch of Parisian flair. I always try to stop here when I'm nearby.

### Menu Highlights
Try the Cubain sandwich, a local favorite. The soups and salads are also excellent choices. Don't forget to try one of their delectable pastries. The coffee is top-notch, a perfect pick-me-up after exploring Old Montreal.

### Insider Tips
Tip: Olive et Gourmando can get very busy, especially during lunchtime. Consider visiting during off-peak hours, such as early morning or late afternoon, to avoid the crowds. Be prepared to wait in line, but trust me, it's worth it. `,
        practicalInfo: {
        howToGetThere: "Take the Metro to Place-d'Armes station (Orange Line).",
        openingHours: "Monday - Friday: 8:00 AM - 6:00 PM, Saturday - Sunday: 9:00 AM - 6:00 PM",
        cost: "Moderate (Sandwiches: $15-$20)",
        website: "oliveetgourmando.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "cafe", "coffee", "dining"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Pastries, sandwiches, and coffee displays",
        insiderTip: "Get there right when they open, or be prepared for a potentially long wait. The Cubain sandwich is the best thing on the menu!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited space inside, can be crowded."
      }
      },
        {
        name: "Atwater Market",
        description: `## Overview
Atwater Market is a bustling public market located in the Saint-Henri neighborhood. While smaller than Jean-Talon, it offers a more local and intimate experience. Find everything from fresh produce to artisanal cheeses and local meats. The market building itself is a beautiful art deco structure.

### Market Highlights
Don't miss the Première Moisson bakery for delicious bread and pastries. La Fromagerie Atwater offers a wide selection of local and international cheeses. Several vendors sell ready-to-eat meals, making it a great spot for lunch.

### Insider Tips
Tip: Visit on a weekday morning for a less crowded experience. Take a stroll along the Lachine Canal after visiting the market. Consider bringing your own shopping bags to reduce plastic waste.`,
        practicalInfo: {
        howToGetThere: "Take the Metro to Lionel-Groulx station (Green or Orange Line), then walk south or take bus 35.",
        openingHours: "7:00 AM to 6:00 PM Daily",
        cost: "Free admission (Food/products priced individually)",
        website: "marchesmontreal.com/en/atwater-market/"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "local", "market", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Summer",
        photoOpportunity: "Colorful produce displays, art deco building",
        insiderTip: "Pick up a freshly baked baguette from Première Moisson and some cheese from La Fromagerie Atwater for a perfect picnic on the nearby Lachine Canal.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible market building with ramps."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Montreal

Montreal offers a variety of transportation options to suit different needs and budgets. The city is relatively compact and walkable, but public transport is efficient and convenient for longer distances. 

### Public Transport
The Montreal Metro is a clean and efficient subway system with four lines connecting major areas of the city. The STM (Société de transport de Montréal) also operates an extensive bus network. Consider purchasing a day pass or a multi-day pass for unlimited travel. Downloading the Chrono app is helpful for planning your routes and tracking bus arrival times. Honestly, it can’t hurt to download it.

### Taxis & Rideshare
Taxis are readily available throughout the city, but they can be more expensive than public transport. Rideshare services like Uber and Lyft also operate in Montreal. Use them for when convenience is prioritized.`,
        whereToStay: `## Where to Stay in Montreal

Montreal offers a wide range of accommodation options, from luxury hotels to budget-friendly hostels. The best area to stay depends on your interests and budget.

### Best Areas
Old Montreal is a popular choice for its historic charm and proximity to attractions. Downtown Montreal offers a vibrant atmosphere and easy access to shopping, dining, and entertainment. Plateau Mont-Royal is a trendy neighborhood with a bohemian vibe and a variety of cafes, restaurants, and boutiques.

### Luxury Options
The Ritz-Carlton Montreal and the Hotel Birks Montreal offer luxurious accommodations and impeccable service. These hotels provide a memorable experience for discerning travelers. These will be a bit pricey.`,
        bestTimeToVisit: `## Best Time to Visit Montreal

The best time to visit Montreal depends on your preferences and interests. Each season offers a unique experience, with its own advantages and disadvantages.

### Peak Season
Summer (June-August) is the peak tourist season in Montreal. The weather is warm and sunny, and there are numerous festivals and events. However, prices are higher, and crowds are larger.

### Weather Overview
Spring (April-May) and Fall (September-October) offer pleasant weather and fewer crowds. The fall foliage is particularly stunning. Winter (November-March) can be cold and snowy, but it's a great time to experience Montreal's winter activities and festivals. 
`,
        suggestedItinerary: `## Suggested Montreal Itinerary

Here's a suggested itinerary for a 3-day trip to Montreal, designed to hit some of the major highlights and leave room for exploration. Of course, you could easily spend a week, or even longer, discovering all the city has to offer!

### Day 1
Start your day with a visit to Old Montreal, exploring the cobblestone streets and historic buildings. Visit the Notre-Dame Basilica and the Pointe-à-Callière, Montreal Archaeology and History Complex. In the afternoon, take a walk along the waterfront and enjoy the views of the St. Lawrence River. In the evening, dine at one of the many restaurants in Old Montreal. 

### Day 2
Ascend Mount Royal for panoramic city views. Explore the Montreal Museum of Fine Arts. In the afternoon, wander through the vibrant Jean-Talon Market. Enjoy dinner and live music in the Plateau Mont-Royal neighborhood.

### Day 3
Visit Habitat 67 and the Biosphere. Explore the Montreal Botanical Garden and the Insectarium. Indulge in a smoked meat sandwich at Schwartz's Deli. Enjoy a final evening stroll through the city, perhaps revisiting a favorite spot or discovering something new.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Montreal?",
        answer: `Montreal offers a wide range of attractions, including exploring Old Montreal, visiting Mount Royal Park, immersing yourself in art at the Montreal Museum of Fine Arts, and savoring local cuisine at Jean-Talon Market and Schwartz's Deli.`
      },
        {
        question: "How many days do you need in Montreal?",
        answer: `A 3-day trip is sufficient to see the main attractions in Montreal, but a longer stay will allow you to explore the city's diverse neighborhoods and hidden gems.`
      },
        {
        question: "What is Montreal famous for?",
        answer: `Montreal is famous for its European charm, vibrant culture, delicious food, and iconic landmarks like Old Montreal, Mount Royal, and the Montreal Museum of Fine Arts.`
      },
        {
        question: "When is the best time to visit Montreal?",
        answer: `The best time to visit Montreal is during the spring (April-May) or fall (September-October) for pleasant weather and fewer crowds, or during the summer (June-August) for festivals and warm weather.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Charming, Vibrant, Cosmopolitan",
        budgetBreakdown: {
          freeActivities: "Walking around Old Montreal,Visiting Mount Royal Park,Exploring the Lachine Canal,Attending free festivals and events",
          budgetFriendly: "Smoked meat sandwich at Schwartz's Deli ($15),Bagel from Fairmount Bagel ($2),Metro day pass ($11),Visit to Jean-Talon Market ($20)",
          splurgeWorthy: "Stay at the Ritz-Carlton Montreal ($400+ per night),Fine dining experience at a top-rated restaurant ($100+ per person),Private guided tour of Old Montreal ($200+)"
        },
        localSecrets: ["To avoid the crowds at the Notre-Dame Basilica, visit on a Tuesday morning at 8:30 AM, entering through the side door on Rue Notre-Dame to bypass the main entrance queue.", "To use public transport like a local, purchase an OPUS card instead of individual tickets. Download the Chrono app for real-time bus schedules and platform information. Remember to stand to the right on escalators to let others pass.", "A realistic budget estimate for 3 days in Montreal is $450-$600 CAD. This includes $150-200 CAD for accommodation (hostel or budget hotel), $90 CAD for meals ($30 per day), $30 CAD for transport ($10 per day), $100 CAD for attractions, and $80 CAD for miscellaneous expenses.", "For authentic local goods, visit the Jean-Talon Market or Atwater Market. Bargaining is generally not expected, but you can often negotiate slightly on larger purchases. Look for local maple syrup products, Quebec cheeses, and handmade crafts.", "Avoid the poutine restaurants on Rue Saint-Denis that cater to tourists. Instead, try La Banquise (994 Rue Rachel E) which is open 24/7 and serves a huge variety of poutines with local flavors.", "During the Montreal International Jazz Festival (late June/early July), expect higher accommodation prices and larger crowds. Many streets are closed to traffic, so plan your transportation accordingly. Alternatively, visit during the Montreal en Lumière festival in February for a unique winter experience."],
        diningHighlights: {
          mustTryDishes: "Smoked meat sandwich,Poutine,Montreal-style bagel,Tourtière (meat pie)",
          bestCafes: "Olive et Gourmando (Old Montreal): Known for its delicious sandwiches and pastries.,Tommy Cafe + Apéro (Various locations): Trendy cafe with stylish decor and great coffee.",
          topRestaurants: "Schwartz's Deli (Mile End): A Montreal institution for smoked meat.,Joe Beef (Little Burgundy): Award-winning restaurant with creative cuisine.",
          foodMarkets: "Jean-Talon Market (Little Italy): One of North America's largest open-air markets.,Atwater Market (Saint-Henri): A smaller, more local market with a variety of vendors.",
          diningTips: "Tipping is customary in Montreal restaurants (15-20%). Reservations are recommended for popular restaurants, especially on weekends. Many restaurants offer prix fixe menus or lunch specials for budget-conscious diners."
        },
        seasonalHighlights: {
          spring: "The city comes alive with blooming flowers and warmer weather. Maple syrup season is in full swing, and there are numerous outdoor events and festivals.",
          summer: "Montreal is bustling with activity, with outdoor concerts, festivals, and street performances. The weather is warm and sunny, perfect for exploring the city's parks and attractions.",
          fall: "The fall foliage is spectacular, transforming the city's parks and streets into a colorful display. The weather is pleasant, and there are fewer crowds than in the summer.",
          winter: "Montreal embraces the winter season with outdoor skating rinks, snow festivals, and cozy cafes. The city is beautifully decorated for the holidays, creating a festive atmosphere."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "3",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};