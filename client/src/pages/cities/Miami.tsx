import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Miami: React.FC = () => {
  return (
    <CityPage
      cityName="Miami"
      country="USA"
      title={"15 Best Things to Do in Miami, USA (2025 Guide)"}
      description={`Planning a trip to Miami? You're in for a treat! Figuring out the best things to do in Miami can seem overwhelming with so much to see and experience. From sun-kissed beaches to vibrant cultural enclaves, this city pulses with energy. This guide aims to simplify your planning by showcasing must-see places, hidden gems, and local favorites. So, whether you're looking for exciting adventures, relaxing escapes, or simply the best things to do in Miami, let's dive into this curated list that will help you make the most of your Miami adventure.`}
      imageUrl={"https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Soak up the sun on South Beach.",
        "Explore the vibrant street art in Wynwood Walls.",
        "Experience Cuban culture in Little Havana.",
        "Visit the Vizcaya Museum & Gardens for a glimpse into Miami's past.",
        "Take a boat tour of Biscayne Bay."]}
      attractions={[
        {
        name: "South Beach",
        description: `## Overview
South Beach, often called SoBe, is the iconic heart of Miami. Picture this: sun-drenched sand, turquoise waters, and Art Deco architecture lining the shore. It's not just a beach; it's a vibrant scene filled with people from all walks of life, from families enjoying the day to trendy locals showcasing their style. Stroll along Ocean Drive, admire the pastel-colored buildings, and soak up the lively atmosphere. It's the perfect place to people-watch, catch some rays, or take a refreshing dip in the ocean.

### Best Photo Spots
Head to the lifeguard stands for iconic Miami pictures. The colorful stands against the ocean create stunning backdrops. Also, don't miss the Art Deco architecture along Ocean Drive, especially during golden hour. 

### Insider Tips
Tip: Weekday mornings offer a less crowded beach experience. Consider renting a beach chair and umbrella for ultimate relaxation. Don't miss the sunset – the colors are breathtaking!`,
        practicalInfo: {
        howToGetThere: "Take the South Beach Local bus from downtown Miami or use a rideshare service. Parking can be challenging, so public transport is recommended.",
        openingHours: "Open 24/7",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["relaxation", "photography", "beach"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Lifeguard stands, Art Deco buildings, sunset views",
        insiderTip: "Arrive before 10 AM on weekdays to secure a good spot and avoid the crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible beach entrances are available."
      }
      },
        {
        name: "Wynwood Walls",
        description: `## Overview
Wynwood Walls is an outdoor street art museum showcasing vibrant murals by renowned artists from around the world. What was once a warehouse district has been transformed into a canvas for creativity and self-expression. Walking through Wynwood Walls is like stepping into a living art gallery – each wall tells a unique story, and the vibrant colors and bold designs are truly captivating. It’s arguably one of the top attractions in Miami.

### What to Expect
Expect large crowds, especially on weekends. Wear comfortable shoes, as you'll be doing a lot of walking. The area surrounding Wynwood Walls also features art galleries, trendy boutiques, and cafes, making it a great place to spend an afternoon. It's definitely one of the fun things to do in Miami.

### Insider Tips
Tip: Visit during Art Basel in December for special exhibitions and events. Or arrive early in the morning to avoid crowds and take better photos without people in the frame. Also, check out the surrounding streets for more hidden street art.`,
        practicalInfo: {
        howToGetThere: "Take the Metrorail to the Government Center station and transfer to the Wynwood Walls Trolley. Rideshares are also a convenient option.",
        openingHours: "Monday-Thursday: 10:30 AM - 7:00 PM, Friday-Saturday: 10:30 AM - 8:00 PM, Sunday: 10:30 AM - 7:00 PM",
        cost: "Admission fee applies (around $12-15)",
        website: "thewynwoodwalls.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "photography", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Every wall is a photo opportunity! Look for unique angles and perspectives.",
        insiderTip: "Download the Wynwood Walls app for artist information and interactive maps.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Little Havana",
        description: `## Overview
Immerse yourself in the vibrant Cuban culture of Little Havana. This bustling neighborhood is the heart of Miami's Cuban community, offering a taste of Cuba without leaving the United States. Walk along Calle Ocho (SW 8th Street), listen to lively music spilling from open doorways, and savor authentic Cuban cuisine. From domino games in Máximo Gómez Park (Domino Park) to the aroma of strong Cuban coffee, Little Havana is a sensory feast. Exploring Little Havana is one of the many great things to do in Miami.

### Don't Miss
Don't miss a visit to Domino Park to watch the locals play dominoes. Try a traditional Cuban sandwich and a 'cafecito' (Cuban coffee) at one of the many cafes. Consider taking a salsa dancing lesson to embrace the Cuban spirit.

### Insider Tips
Tip: Visit during the Viernes Culturales (Cultural Fridays) for live music, art, and food vendors. It's a great way to experience the neighborhood's vibrant culture. Also, try to learn a few basic Spanish phrases to enhance your experience.`,
        practicalInfo: {
        howToGetThere: "Take the Metrorail to the Brickell station and transfer to the Metrobus Route 8. Rideshares are also a convenient option.",
        openingHours: "Varies by establishment",
        cost: "Free to explore; costs vary for food and activities",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["culture", "food", "music"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Domino Park, Calle Ocho street scenes, colorful murals",
        insiderTip: "Attend Viernes Culturales on the third Friday of each month for a lively cultural experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Generally accessible, but some sidewalks may be uneven."
      }
      },
        {
        name: "Vizcaya Museum & Gardens",
        description: `## Overview
Step back in time at the Vizcaya Museum & Gardens, a stunning Italian Renaissance-style villa surrounded by lush gardens. This opulent estate, built in the early 20th century, offers a glimpse into Miami's past. Explore the elaborately decorated rooms filled with European furniture and art, wander through the meticulously landscaped gardens, and admire the breathtaking views of Biscayne Bay. It's a truly magical place that transports you to another era. Some say it’s one of the must-see places in Miami.

### Best Photo Spots
The gardens offer countless photo opportunities, especially the waterfront terrace with panoramic views. Don't miss the secret garden and the boat landing for unique perspectives. Inside the villa, the ornate rooms with their antique furnishings are perfect for capturing the elegance of the era.

### Insider Tips
Tip: Purchase tickets online in advance to avoid lines, especially during peak season. Allocate at least 3-4 hours to fully explore the museum and gardens. Consider a guided tour to learn more about the history and art of Vizcaya.`,
        practicalInfo: {
        howToGetThere: "Take the Metrorail to the Vizcaya station and walk a short distance to the museum. Parking is also available.",
        openingHours: "Wednesday - Monday: 9:30 AM - 4:30 PM. Closed Tuesdays.",
        cost: "Admission fee applies (around $25)",
        website: "vizcaya.org"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "architecture", "gardens"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Waterfront terrace, secret garden, boat landing, interior rooms",
        insiderTip: "Visit on a weekday morning to avoid the weekend crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility in some areas of the gardens and villa."
      }
      },
        {
        name: "Bayside Marketplace",
        description: `## Overview
Bayside Marketplace is a bustling outdoor shopping and dining complex located on Biscayne Bay. It’s a popular spot for tourists and locals alike, offering a wide variety of shops, restaurants, and entertainment options. Take a stroll along the waterfront, browse the shops, enjoy a delicious meal with a view, or catch a live performance. Bayside Marketplace is a great place to soak up the Miami atmosphere and enjoy the vibrant city life.

### What to Expect
Expect a lively and energetic atmosphere, especially in the evenings and on weekends. The marketplace can get crowded, so be prepared to navigate through the crowds. Street performers and live music add to the festive ambiance. It's a great place to find souvenirs and enjoy a casual meal. 

### Insider Tips
Tip: Take a boat tour from Bayside Marketplace for stunning views of the Miami skyline and Biscayne Bay. Arrive early to find parking, especially on weekends. Consider having dinner at one of the waterfront restaurants for a memorable dining experience.`,
        practicalInfo: {
        howToGetThere: "Take the Metromover to the Bayside station. Parking is also available, but it can be expensive.",
        openingHours: "Sunday - Thursday: 10:00 AM - 10:00 PM, Friday & Saturday: 10:00 AM - 11:00 PM",
        cost: "Free to enter; costs vary for shopping and dining",
        website: "baysidemarketplace.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["shopping", "dining", "entertainment"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Waterfront views, Miami skyline, lively street scenes",
        insiderTip: "Go during happy hour at one of the waterfront bars for discounted drinks and appetizers.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Versailles Restaurant",
        description: `## Overview
Versailles Restaurant is a Miami institution, renowned as the world's most famous Cuban restaurant. Located in Little Havana, it’s a must-visit for anyone seeking an authentic taste of Cuban cuisine and culture. This bustling restaurant is always packed with locals and tourists, creating a lively and energetic atmosphere. It’s more than just a restaurant; it’s a gathering place for the Cuban community and a symbol of Miami's vibrant cultural heritage. This eatery is one of the top attractions in Miami for food lovers.

### Signature Dishes
Try the 'ropa vieja' (shredded beef in tomato sauce), 'lechón asado' (roasted pork), or a classic Cuban sandwich. Don't forget to order a 'cafecito' (Cuban coffee) to complete your culinary experience. The guava pastries are also a popular choice for dessert. The food here truly embodies the culinary scene of Miami.

### Dining Atmosphere
The atmosphere is lively and bustling, with a constant buzz of conversation and the clinking of silverware. Expect a wait, especially during peak hours, but it's well worth it. The restaurant is decorated with mirrors and photographs, creating a classic Cuban diner vibe.

### Practical Info
Price Range: Budget-friendly to Moderate. Hours: Open daily from 8:00 AM to midnight. Reservations: Not required, but recommended for larger groups.`,
        practicalInfo: {
        howToGetThere: "Located on Calle Ocho (SW 8th Street) in Little Havana. Easily accessible by bus or rideshare.",
        openingHours: "Daily, 8:00 AM - 12:00 AM",
        cost: "Budget-friendly to Moderate",
        website: "versaillesrestaurant.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture", "dining"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Interior decor, lively atmosphere, plated dishes",
        insiderTip: "Order a 'cafecito' from the ventanita (walk-up window) for a quick and authentic Cuban coffee experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Joe's Stone Crab",
        description: `## Overview
Joe's Stone Crab is a legendary seafood restaurant in Miami Beach, famous for its delicious stone crabs and old-school charm. Opened in 1913, it's a Miami landmark and a must-visit for seafood lovers. The restaurant exudes a classic, almost retro vibe, and the service is impeccable. While it's definitely a splurge, the quality of the seafood and the overall experience are worth it.

### Dining Experience
The atmosphere is upscale yet relaxed, with a focus on fresh, high-quality seafood. The dress code is casual but neat. Expect a wait, especially during stone crab season (October 15 - May 15), but you can enjoy a drink at the bar while you wait.

### Signature Dishes
Of course, the star of the show is the stone crab claws, served chilled with mustard sauce. Other popular dishes include the fried chicken, key lime pie, and creamed spinach.

### Practical Info
Price Range: Expensive. Hours: Varies seasonally, check their website for current hours. Reservations: Not accepted, first-come, first-served.`,
        practicalInfo: {
        howToGetThere: "Located on South Beach. Valet parking is available.",
        openingHours: "Varies seasonally; check website for current hours",
        cost: "Expensive",
        website: "joesstonecrab.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "dining", "seafood"],
        costLevel: "Expensive",
        seasonalBest: "Winter (stone crab season)",
        photoOpportunity: "Plated stone crab claws, classic interior decor",
        insiderTip: "Go during lunch for a slightly less crowded experience and potentially shorter wait times.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Plant Miami",
        description: `## Overview
Plant Miami offers a refined vegan dining experience. Situated in Wynwood, the eatery emphasizes plant-based cuisine with global influences. Its focus on elegant plating and innovative flavor combinations makes Plant Miami a unique culinary experience. It is a fantastic option for health-conscious visitors and foodies interested in innovative flavors. This is one of the unique places to visit in Miami.

### What to Expect
The restaurant maintains a serene setting, with its minimalist décor and soft illumination. Plant Miami's menu displays a range of vegan dishes, spanning from creative appetizers to entrées and desserts, making it ideal for those seeking a memorable plant-based culinary journey. The service is attentive and knowledgeable.

### Signature Dishes
The Watermelon Ceviche is a refreshing starter. The Heart of Palm risotto provides a warm and comforting meal. The dessert menu features seasonal offerings, making it great to try. 

### Practical Information
Price range: Moderate to Expensive. Hours: Varies by day, reservations are encouraged. Plant Miami is located inside The Sacred Space Miami.`,
        practicalInfo: {
        howToGetThere: "Located in Wynwood. Street parking is limited, ride-sharing is encouraged.",
        openingHours: "Varies by day, check website for details",
        cost: "Moderate to Expensive",
        website: "plantmiami.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "vegan", "health"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Dishes with innovative vegan cuisine",
        insiderTip: "Request a table outdoors for a more immersive ambiance.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Everglades National Park",
        description: `## Overview
Escape the city bustle and discover the unique ecosystem of Everglades National Park. Just a short drive from Miami, this vast wilderness is home to alligators, crocodiles, birds, and other wildlife. Take an airboat tour, hike along the trails, or kayak through the mangrove tunnels. It's an unforgettable experience that showcases the natural beauty of Florida. Definitely one of the most fun things to do in Miami!

### What to Expect
Be prepared for hot and humid conditions, especially during the summer months. Wear comfortable shoes, sunscreen, and insect repellent. Airboat tours can be noisy, so bring earplugs if needed. Keep a safe distance from wildlife and follow the park's guidelines.

### Insider Tips
Tip: Visit during the winter months for cooler temperatures and fewer mosquitoes. Take an airboat tour at sunrise or sunset for the best wildlife viewing opportunities. Consider a guided kayaking tour to explore the mangrove tunnels with an experienced naturalist.`,
        practicalInfo: {
        howToGetThere: "Drive from Miami. Several entrances are available, depending on the activities you're interested in.",
        openingHours: "Open 24/7",
        cost: "Entrance fee applies (around $30 per vehicle)",
        website: "nps.gov/ever"
      },
      discoveryTags: {
        timeRequired: "Full day",
        experienceLevel: "Moderate Adventure",
        interests: ["nature", "wildlife", "adventure"],
        costLevel: "Budget-friendly",
        seasonalBest: "Winter",
        photoOpportunity: "Alligators, birds, mangrove tunnels, sunset views",
        insiderTip: "Check the park's website for ranger-led programs and events.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility in some areas of the park."
      }
      },
        {
        name: "Lincoln Road Mall",
        description: `## Overview
Lincoln Road Mall is a pedestrian-only promenade in South Beach, perfect for shopping, dining, and people-watching. This iconic street is lined with boutiques, art galleries, cafes, and restaurants, creating a vibrant and lively atmosphere. Stroll along the palm-lined boulevard, browse the shops, enjoy a meal al fresco, or catch a street performance. It's a great place to experience the energy of South Beach and find unique souvenirs. Looking for things to do in Miami? This might be it.

### What to Expect
Expect crowds, especially during peak season and on weekends. The mall is a popular spot for both tourists and locals, so be prepared to navigate through the crowds. Street performers and artists add to the lively atmosphere. The area surrounding Lincoln Road Mall also features art galleries and cultural venues, making it a great place to spend an afternoon.

### Insider Tips
Tip: Visit during the Lincoln Road Antique & Collectible Market on Sundays for unique finds. Look for happy hour specials at the many restaurants and bars along the mall. Consider catching a movie at the Regal South Beach movie theater.`,
        practicalInfo: {
        howToGetThere: "Take the South Beach Local bus or a rideshare service. Parking can be challenging, so public transport is recommended.",
        openingHours: "Varies by establishment",
        cost: "Free to explore; costs vary for shopping and dining",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["shopping", "dining", "entertainment"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Palm-lined promenade, street performers, Art Deco architecture",
        insiderTip: "Find discounts at chain stores and boutiques. Search for flyers, coupons, or online promotion codes on your phone while walking.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Phillipe Chow Miami",
        description: `## Overview
Philippe Chow Miami is a popular restaurant specializing in upscale Chinese cuisine. Located in the South of Fifth neighborhood, this stylish dining location has become a favorite among locals and tourists seeking a modern take on traditional Chinese flavors. The eatery is renowned for its contemporary atmosphere, attentive service, and a creative menu that blends classic Chinese recipes with modern culinary techniques. This is one of the most recommended restaurants in the Miami area.

### Dining Experience
Featuring dim lighting and elegant décor, the restaurant creates an inviting setting for a romantic dinner or a night out with friends. The staff is knowledgeable and helpful, adding to the upscale ambiance. The menu boasts a diverse array of dishes, from Peking duck to innovative noodle and rice dishes.

### Signature Dishes
Try the Mr. Cheng's Noodles, the Green Prawns and the Peking Duck. The service and atmosphere enhance the meal. 

### Practical Information
Price range: Expensive. Hours: Open daily for dinner, with reservations recommended. Philippe Chow Miami is located near some of Miami's trendiest destinations.`,
        practicalInfo: {
        howToGetThere: "Located in the South of Fifth neighborhood. Valet parking is typically available.",
        openingHours: "Open daily for dinner, hours vary",
        cost: "Expensive",
        website: "philippechow.com/miami"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "dining", "upscale"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Elegant food presentations, upscale restaurant décor",
        insiderTip: "Consider ordering one of the shared tasting menus to experience a variety of dishes.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Miami

Miami offers various transportation options, allowing you to explore the city with ease. Choosing the right mode of transport depends on your budget, destination, and preference. Public transportation is available, rideshares are easy to use, and exploring on foot in certain areas can be an advantage. 

### Public Transport
The Metrorail is an elevated train system connecting downtown Miami with areas to the north and south. The Metromover is a free elevated train that circles downtown Miami. Metro buses cover a wide area. You can purchase an EASY Card or use the GO Miami-Dade Transit app for fares. I think it's a good idea to familiarize yourself with the routes beforehand. 

### Taxis & Rideshare
Taxis and rideshare services like Uber and Lyft are readily available throughout Miami. They offer a convenient way to get around, especially for short distances or when traveling with luggage. However, be aware that fares can be higher during peak hours and in popular areas. 

### Walking & Cycling
Walking is a great way to explore certain neighborhoods, such as South Beach, Little Havana, and Wynwood. Cycling is also a popular option, with bike rentals available in many locations. Consider using the Citi Bike bike-sharing program for a convenient and affordable way to explore the city.`,
        whereToStay: `## Where to Stay in Miami

Miami offers a diverse range of accommodation options, from luxurious beachfront resorts to budget-friendly hostels. Choosing the right area to stay depends on your interests and budget.

### Best Areas
South Beach is the iconic heart of Miami, known for its beautiful beaches, Art Deco architecture, and vibrant nightlife. Downtown Miami offers a mix of business and leisure, with skyscrapers, museums, and shopping centers. Brickell is a trendy area with luxury condos, restaurants, and bars. Wynwood is known for its street art and art galleries, offering a more bohemian vibe. Little Havana offers a taste of Cuban culture, with its colorful streets, music, and restaurants.

### Luxury Options
South Beach is home to many luxury hotels, such as The Setai, The Faena Hotel, and The Ritz-Carlton. These hotels offer luxurious amenities, stunning ocean views, and impeccable service. Brickell also offers several luxury hotels, such as the Mandarin Oriental and the Four Seasons.

### Budget-Friendly
Budget-friendly options are available in areas like downtown Miami, North Beach, and Miami Beach. Hostels and budget hotels offer affordable accommodation without sacrificing comfort and convenience.`,
        bestTimeToVisit: `## Best Time to Visit Miami

The best time to visit Miami depends on your preferences and tolerance for heat and humidity. The weather is generally pleasant year-round, but there are distinct seasonal differences.

### Peak Season
Peak season is typically from December to April, when the weather is mild and dry. This is the most popular time to visit, so expect higher prices and larger crowds. The average temperatures range from the mid-60s to the mid-70s Fahrenheit. 

### Weather Overview
The summer months (May to September) are hot and humid, with average temperatures in the 80s and 90s Fahrenheit. This is also hurricane season, so be sure to check the weather forecast before your trip. The shoulder seasons (April-May and October-November) offer a good balance of pleasant weather and fewer crowds. 

### Local Events
Miami hosts numerous events and festivals throughout the year, including Art Basel Miami Beach in December, the Miami Film Festival in March, and the South Beach Wine & Food Festival in February. Consider planning your trip around one of these events to enhance your experience.`,
        suggestedItinerary: `## Suggested Miami Itinerary

Here's a suggested itinerary for a 3-day trip to Miami, balancing iconic attractions with local experiences:

### Day 1
Start your day by spending the morning on South Beach, soaking up the sun and admiring the Art Deco architecture. In the afternoon, explore the vibrant street art in Wynwood Walls. In the evening, enjoy dinner at a waterfront restaurant in Bayside Marketplace.

### Day 2
Immerse yourself in Cuban culture with a visit to Little Havana, strolling along Calle Ocho and trying authentic Cuban cuisine. In the afternoon, explore the Vizcaya Museum & Gardens, a stunning Italian Renaissance-style villa. In the evening, experience Miami's nightlife with a visit to a trendy club or bar in South Beach.

### Day 3
Escape the city bustle with a day trip to Everglades National Park, taking an airboat tour and exploring the unique ecosystem. Alternatively, if you're looking for a more relaxed day, spend the day shopping and dining on Lincoln Road Mall. In the evening, enjoy a seafood dinner at Joe's Stone Crab, a Miami institution.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Miami?",
        answer: `Miami offers a diverse range of activities, from relaxing on South Beach and exploring the street art in Wynwood Walls to experiencing Cuban culture in Little Havana and visiting the Vizcaya Museum & Gardens. Don't miss the vibrant nightlife and delicious dining options.`
      },
        {
        question: "How many days do you need in Miami?",
        answer: `A 3-day trip allows you to see the main attractions, but a longer stay will allow you to explore more of the city's hidden gems and surrounding areas.`
      },
        {
        question: "What is Miami famous for?",
        answer: `Miami is famous for its beautiful beaches, Art Deco architecture, vibrant nightlife, Cuban culture, and as a major hub for international business and tourism.`
      },
        {
        question: "When is the best time to visit Miami?",
        answer: `The best time to visit Miami is from December to April, when the weather is mild and dry, but be prepared for higher prices and larger crowds. The shoulder seasons (April-May and October-November) offer a good balance of pleasant weather and fewer crowds.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Vibrant, Energetic, Diverse",
        budgetBreakdown: {
          freeActivities: "Relaxing on South Beach,Exploring Wynwood Walls (street art viewing),Strolling along Calle Ocho in Little Havana,Walking the Bayside Marketplace",
          budgetFriendly: "Metrorail day pass: $5.65,Cuban sandwich and coffee in Little Havana: $10-15,Entrance to Vizcaya Museum & Gardens: $25,Airboat tour in Everglades National Park: $30",
          splurgeWorthy: "Dinner at Joe's Stone Crab: $100+,Luxury hotel stay in South Beach: $300+ per night"
        },
        localSecrets: ["Visit Wynwood Walls on weekday mornings (before 11 AM) or late afternoons (after 4 PM) to avoid the peak crowds. Enter from NW 25th Street to sometimes skip the long main entrance line.", "Buy a GO Miami-Dade Transit EASY Card (physical card, not the app, which can be buggy) at any Walgreens store to ride the Metrorail and Metrobus. It’s way faster than buying individual tickets. Download the Citymapper app for real-time bus and train schedules.", "Expect to spend around $75-$100 per day for a comfortable trip: $25 for meals (including breakfast, lunch, and casual dinner), $15 for transportation (Metrorail, buses), $30 for one paid attraction (museum, tour), and $5-$10 for miscellaneous expenses (snacks, drinks).", "For authentic Cuban goods, head to the Presidente Supermarket on Calle Ocho in Little Havana. You'll find everything from Cuban coffee and spices to traditional snacks and souvenirs. Prices are much lower than in tourist shops. Bargaining is not common.", "Avoid eating at the restaurants directly on Ocean Drive in South Beach. They are overpriced and the food is mediocre. Instead, venture a block or two inland to find better restaurants with more reasonable prices like A Fish Called Avalon (700 Ocean Dr) or Yardbird Southern Table & Bar (1600 Lenox Ave).", "Art Basel Miami Beach in early December causes huge crowds, traffic, and inflated prices. If you're not attending Art Basel specifically, avoid visiting Miami during that week. Instead, come in late November or mid-December for lower prices and fewer people. Be prepared for road closures due to events!"],
        diningHighlights: {
          mustTryDishes: "Cuban sandwich,Stone crab claws,Key lime pie,Ropa Vieja (shredded beef stew)",
          bestCafes: "Versailles Restaurant (Little Havana): Offers Cuban coffee and pastries in a bustling atmosphere.,Panther Coffee (Wynwood): A local roaster with expertly brewed coffee and a trendy vibe.",
          topRestaurants: "Joe's Stone Crab (South Beach): Legendary seafood restaurant famous for stone crabs.,Versailles Restaurant (Little Havana): A Miami institution for authentic Cuban cuisine.",
          foodMarkets: "Little Havana hosts numerous food stands. Try the guava pastries!",
          diningTips: "Tipping is customary in Miami restaurants (18-20%). Make reservations in advance, especially for popular restaurants. Dress code is generally casual but neat, but may vary by establishment."
        },
        seasonalHighlights: {
          spring: "Pleasant weather, perfect for outdoor activities like beach days and exploring parks. Enjoy events like the Miami Film Festival.",
          summer: "Hot and humid, ideal for water sports and enjoying the beach. Be aware of hurricane season and plan accordingly.",
          fall: "Warm and sunny weather, great for exploring the city and attending cultural events. Fewer crowds than peak season.",
          winter: "Mild and dry weather, perfect for escaping the cold. Peak season, so expect higher prices and more tourists."
        },
        quickFacts: {
          totalAttractions: "11",
          freeActivities: "4",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Good"
        }
      }}
    />
  );
};