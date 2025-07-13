import React from 'react';
import { CityPage } from '../../components/CityPage';

export const NewYork: React.FC = () => {
  return (
    <CityPage
      cityName="New York"
      country="USA"
      title={"15 Best Things to Do in New York, USA (2025 Guide)"}
      description={`Planning a trip to the Big Apple? You've come to the right place! This 2025 New York travel guide is packed with the best things to do in New York, from iconic landmarks to hidden neighborhood gems. Deciding what to do in New York can feel overwhelming, but with our insider tips and curated list, you'll be navigating the city like a pro in no time. Whether you're a first-time visitor or a seasoned New Yorker, discover something new and exciting. We cover everything from world-class museums and Broadway shows to delicious food and unique experiences. Let's explore New York!`}
      galleryImages={[
      ]}
      highlights={["Visit the iconic Statue of Liberty and Ellis Island.",
        "Explore the Metropolitan Museum of Art's vast collection.",
        "Take a stroll through Central Park.",
        "Experience the dazzling lights of Times Square.",
        "Walk across the Brooklyn Bridge for stunning city views.",
        "Catch a Broadway show in the Theater District."]}
      attractions={[
        {
        name: "Statue of Liberty & Ellis Island",
        description: `## Overview
The Statue of Liberty and Ellis Island are more than just tourist attractions; they are powerful symbols of freedom and immigration. Seeing Lady Liberty up close is awe-inspiring, and walking through the halls of Ellis Island, where millions of immigrants first set foot on American soil, is a profoundly moving experience. I think everyone should visit at least once.

### Best Photo Spots
The ferry offers fantastic photo opportunities of the Statue of Liberty and the Manhattan skyline. On Liberty Island, capture the statue from various angles, especially with the American flag in the background. On Ellis Island, the Registry Room (Great Hall) provides a dramatic setting for photos.

### Insider Tips
Tip: Book your ferry tickets well in advance, especially during peak season. Consider the early morning ferry to avoid some of the crowds. The crown access tickets sell out months in advance, so plan accordingly. Also, the audio tour on Ellis Island is worth the time to hear the stories of the immigrants.`,
        practicalInfo: {
        howToGetThere: "Take the 1 or 4/5 to South Ferry, or the R/W to Whitehall Street. Ferries depart from Battery Park in Manhattan and Liberty State Park in New Jersey.",
        openingHours: "Ferries generally operate from 9:30 AM to 3:30 PM, but check the official website for updated schedules.",
        cost: "$24.80 per adult for the ferry ticket, which includes access to both islands.",
        website: "nps.gov/stli"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Statue of Liberty from the ferry and Liberty Island",
        insiderTip: "Arrive at Battery Park before 9 AM to get through security quickly and catch an early ferry, especially during summer.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Both Liberty and Ellis Islands are wheelchair accessible, with elevators and ramps available."
      }
      },
        {
        name: "Metropolitan Museum of Art",
        description: `## Overview
The Metropolitan Museum of Art, or simply 'the Met', is one of the world's largest and finest art museums. Spanning over 5,000 years of art from around the globe, the Met's collection includes everything from ancient Egyptian artifacts to European masterpieces. It's impossible to see everything in a single visit, so plan your visit strategically. Maybe focus on a specific wing or exhibit that interests you most.

### Best Photo Spots
The Temple of Dendur is a stunning photo opportunity, especially with the natural light streaming in. The European Paintings galleries offer classic backdrops. The rooftop garden (seasonal) provides panoramic views of Central Park and the city skyline.

### Insider Tips
Tip: Check the Met's website for daily tours and lectures. Consider purchasing a CityPASS for discounted entry to multiple attractions. If you are a student, you may be able to get in for free. Also, the museum is much less crowded on weekdays and during off-peak hours.`,
        practicalInfo: {
        howToGetThere: "Take the 4/5/6 train to 86th Street and walk three blocks west to Fifth Avenue.",
        openingHours: "Sunday–Tuesday and Thursday: 10 AM – 5 PM, Friday and Saturday: 10 AM – 9 PM, Wednesday: Closed",
        cost: "$30 for adults, $22 for seniors, $17 for students; free for children under 12.",
        website: "metmuseum.org"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["art", "history", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Temple of Dendur, European Paintings galleries, Rooftop Garden (seasonal)",
        insiderTip: "Visit the Met on Friday or Saturday evenings for live music and fewer crowds. Some say it is less chaotic during these times.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The Met is fully accessible with elevators, ramps, and wheelchairs available."
      }
      },
        {
        name: "Central Park",
        description: `## Overview
Central Park is a sprawling urban oasis in the heart of Manhattan. Covering 843 acres, it offers a respite from the city's hustle and bustle with its lush green lawns, winding pathways, serene lakes, and iconic landmarks. Whether you're looking for a leisurely stroll, a bike ride, a picnic, or some cultural activities, Central Park has something for everyone. It's the kind of place you might linger longer than expected.

### Best Photo Spots
The Bow Bridge is one of the most photographed spots in the park, offering romantic views. Bethesda Terrace and Fountain are iconic. The Conservatory Garden is a beautiful formal garden with seasonal blooms. Belvedere Castle offers panoramic views.

### Insider Tips
Tip: Rent a bike to explore the park more efficiently. Consider visiting the Strawberry Fields memorial to John Lennon. Check the Central Park Conservancy's website for events and activities. During the summer, Shakespeare in the Park offers free performances, but you'll need to arrive early to get a ticket.`,
        practicalInfo: {
        howToGetThere: "Take the A/B/C/D/1 to 59th Street-Columbus Circle, or the N/Q/R/W to 5th Avenue/59th Street.",
        openingHours: "6:00 AM to 1:00 AM daily.",
        cost: "Free",
        website: "centralparknyc.org"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "photography"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Bow Bridge, Bethesda Terrace and Fountain, Conservatory Garden, Belvedere Castle",
        insiderTip: "Rent a rowboat at the Loeb Boathouse for a romantic and peaceful experience on The Lake; avoid the midday sun.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Central Park is largely accessible, with paved paths and accessible restrooms available."
      }
      },
        {
        name: "Times Square",
        description: `## Overview
Times Square is the dazzling heart of New York City, known for its bright lights, towering billboards, and bustling crowds. It's a sensory overload, but also an iconic landmark that captures the energy and excitement of the city. While it can be overwhelming, it's something you should probably see at least once. Be prepared for crowds and be aware of your surroundings.

### Best Photo Spots
Capture the iconic billboards and the overall energy of Times Square from the red stairs at the TKTS booth. Nighttime is the best time for photos, when the lights are at their brightest. Consider capturing a time-lapse video to capture the constant motion.

### Insider Tips
Tip: Visit Times Square early in the morning or late at night to avoid the worst of the crowds. Be wary of costumed characters who may ask for money after taking a photo. Consider visiting the nearby Theater District for Broadway shows.`,
        practicalInfo: {
        howToGetThere: "Take the 1/2/3/7/N/Q/R/W/S to Times Square-42nd Street.",
        openingHours: "Open 24/7, but the atmosphere is most vibrant in the evening.",
        cost: "Free to walk around.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["culture", "photography", "entertainment"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Iconic billboards, overall energy of Times Square (especially at night)",
        insiderTip: "Walk a block or two away from the main intersection for less crowded vantage points for taking photos, perhaps on a side street.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Times Square is generally accessible, but crowds can make navigation difficult."
      }
      },
        {
        name: "Brooklyn Bridge",
        description: `## Overview
The Brooklyn Bridge is an iconic landmark and a marvel of engineering, connecting Manhattan and Brooklyn. Walking or cycling across the bridge offers stunning views of the Manhattan skyline, the Statue of Liberty, and the Brooklyn waterfront. It's a must-do for any visitor to New York City. I found the view surprisingly calming, despite the traffic.

### Best Photo Spots
Capture the Manhattan skyline from the Brooklyn side of the bridge. The bridge's cables and Gothic arches offer unique framing opportunities. Sunset is an especially beautiful time to photograph the bridge.

### Insider Tips
Tip: Walk from Brooklyn to Manhattan to enjoy the best views of the Manhattan skyline. Consider visiting early in the morning to avoid the crowds. Be aware of the separate lanes for pedestrians and cyclists.`,
        practicalInfo: {
        howToGetThere: "Take the A/C to High Street-Brooklyn Bridge, or the 4/5/6 to Brooklyn Bridge-City Hall.",
        openingHours: "Open 24/7.",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["architecture", "photography", "history"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Manhattan skyline, bridge cables and arches, especially at sunset",
        insiderTip: "Walk the bridge starting in DUMBO, Brooklyn around 7 AM on a weekday to enjoy relatively clear views before the crowds arrive.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The bridge has a pedestrian walkway, but there are some steps at the Brooklyn entrance."
      }
      },
        {
        name: "Broadway Show",
        description: `## Overview
Seeing a Broadway show is a quintessential New York experience. From classic musicals to cutting-edge dramas, Broadway offers a wide variety of performances to suit every taste. Attending a show is a magical experience that you will remember for a long time. Just be sure to book your tickets in advance, especially for popular shows.

### Insider Tips
Tip: Purchase tickets in advance online or at the TKTS booth in Times Square for discounted tickets. Consider attending a matinee performance for lower prices and smaller crowds. Arrive early to enjoy the pre-show atmosphere.`,
        practicalInfo: {
        howToGetThere: "The Theater District is located in midtown Manhattan, near Times Square.",
        openingHours: "Showtimes vary depending on the production.",
        cost: "Ticket prices range from $50 to $200 or more.",
        website: "broadway.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["entertainment", "culture"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Theater marquees, pre-show atmosphere",
        insiderTip: "Enter the ticket lottery for a chance to win heavily discounted tickets for popular shows; enter online the day before for best odds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Most Broadway theaters are wheelchair accessible."
      }
      },
        {
        name: "Katz's Delicatessen",
        description: `## Overview
Katz's Delicatessen is a New York institution, famous for its towering pastrami sandwiches and old-school atmosphere. This legendary deli has been serving up classic Jewish comfort food since 1888. It's a must-visit for any foodie. Just be prepared to wait in line, especially during peak hours. It's worth it, I think!

### What to Expect
Expect a bustling, noisy atmosphere with long lines and communal tables. The menu features classic deli fare, including pastrami, corned beef, and matzo ball soup. The pastrami sandwich is the star of the show. The price is moderately high. 

### Insider Tips
Tip: Order your pastrami sandwich 'on rye' with mustard. Don't lose your ticket! You'll need it to pay at the end. Consider sharing a sandwich, as they are very large.`,
        practicalInfo: {
        howToGetThere: "Take the F train to Second Avenue.",
        openingHours: "Sunday-Wednesday: 8:00 AM - 10:45 PM, Thursday: 8:00 AM - 2:30 AM, Friday: 8:00 AM - Open 24 hours, Saturday: Open 24 hours - 10:45 PM",
        cost: "$25 - $40 per person.",
        website: "katzsdelicatessen.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "cuisine", "dining"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "The famous 'I'll have what she's having' table, the towering pastrami sandwich",
        insiderTip: "Go during off-peak hours (between lunch and dinner) to avoid the longest lines; expect a line regardless.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Katz's is generally accessible, but it can be crowded."
      }
      },
        {
        name: "Chelsea Market",
        description: `## Overview
Chelsea Market is a vibrant indoor food hall located in the Chelsea neighborhood. It's home to a diverse array of vendors selling everything from tacos and lobster rolls to artisanal cheeses and pastries. It's a great place to grab a quick bite or browse for unique culinary gifts. Be prepared for crowds, especially during lunchtime.

### Best Food Stalls
The Lobster Place is famous for its fresh lobster rolls and seafood. Los Tacos No. 1 is a local favorite for authentic Mexican tacos. Amy's Bread offers delicious artisanal breads and pastries.

### Insider Tips
Tip: Visit Chelsea Market during off-peak hours to avoid the crowds. Consider trying a variety of different foods from different vendors. Be sure to check out the unique shops and art galleries in the surrounding area.`,
        practicalInfo: {
        howToGetThere: "Take the A/C/E/L to 14th Street/8th Avenue.",
        openingHours: "Monday-Saturday: 7:00 AM - 9:00 PM, Sunday: 8:00 AM - 8:00 PM",
        cost: "Varies depending on what you purchase.",
        website: "chelseamarket.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "cuisine", "dining"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Various food stalls, colorful displays",
        insiderTip: "Order a fresh-pressed juice at one of the many juice bars inside, then walk the High Line which is directly accessible from the market's west exit.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Chelsea Market is wheelchair accessible."
      }
      },
        {
        name: "Levain Bakery",
        description: `## Overview
Levain Bakery is a beloved New York bakery known for its massive, gooey chocolate chip cookies. These cookies are legendary and attract long lines of locals and tourists alike. If you have a sweet tooth, this is a must-visit. But, maybe prepare to share one cookie with a friend, they are quite large! The cookies are worth the calories, I think.

### What to Expect
Expect long lines, especially during peak hours. The cookies are the main attraction, but they also offer other baked goods, such as scones and breads. The atmosphere is cozy and inviting.

### Insider Tips
Tip: Try the chocolate chip walnut cookie, it's their signature flavor. Consider ordering online to avoid the line. The cookies are best enjoyed warm.`,
        practicalInfo: {
        howToGetThere: "Multiple locations throughout the city.",
        openingHours: "Varies by location.",
        cost: "Approximately $5 per cookie.",
        website: "levainbakery.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "cuisine", "cafe"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "The giant chocolate chip cookies",
        insiderTip: "Buy a box of cookies to take home as a souvenir; they travel well and are a great gift.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Varies by location."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around New York

Navigating New York City can seem daunting, but with a little planning, it's surprisingly easy. The city offers a wide range of transportation options, from the subway to taxis to walking. Choosing the right method depends on your destination, budget, and time constraints.

### Public Transport
The subway is the most efficient and affordable way to get around New York. The system operates 24/7, though service may be limited late at night. Purchase a MetroCard for easy access to the subway and buses. Several apps, like Citymapper, can help you navigate the system. Remember that the subways can get very crowded during peak hours. 

### Taxis & Rideshare
Taxis and rideshare services like Uber and Lyft are readily available, but they can be expensive, especially during rush hour. Traffic can also be a major factor, making taxis slower than the subway at times. However, taxis and rideshares can be convenient for reaching destinations not easily accessible by subway.

### Walking & Cycling
Walking is a great way to explore New York's neighborhoods and discover hidden gems. Many areas are pedestrian-friendly, and you'll often stumble upon interesting shops, restaurants, and landmarks. Citi Bike is a bike-sharing program that allows you to rent bikes for short trips.`,
        whereToStay: `## Where to Stay in New York

New York City offers a wide variety of accommodation options, from luxury hotels to budget-friendly hostels. The best area to stay in depends on your interests and budget. Consider factors like proximity to attractions, transportation options, and neighborhood vibe.

### Best Areas
Midtown Manhattan is a central location with easy access to many of the city's top attractions. However, it can be crowded and expensive. Greenwich Village offers a more bohemian atmosphere, with charming streets and independent shops. Brooklyn offers a more residential feel, with a mix of trendy neighborhoods and historic brownstones.

### Luxury Options
The Ritz-Carlton, Four Seasons Hotel, and The Peninsula are among the city's most luxurious hotels, offering impeccable service and stunning views.

### Budget-Friendly
Numerous hostels and budget hotels are available throughout the city, particularly in areas like Long Island City and Harlem. Airbnb can also be a good option for finding affordable accommodation.`,
        bestTimeToVisit: `## Best Time to Visit New York

The best time to visit New York depends on your priorities and tolerance for crowds and weather. Each season offers a unique experience, with its own pros and cons.

### Peak Season
Spring (April-May) and fall (September-October) are generally considered the best times to visit New York, with pleasant weather and fewer crowds than summer. However, prices may be higher during these months.

### Weather Overview
Summers (June-August) can be hot and humid, with temperatures often exceeding 80°F. Winters (December-February) are cold and snowy, with temperatures often dropping below freezing. Spring and fall offer milder temperatures and sunny days.

### Local Events
New York hosts numerous events and festivals throughout the year, including the Macy's Thanksgiving Day Parade, the Tribeca Film Festival, and the New York City Marathon. Check the local events calendar before you go to see if there's anything that interests you.`,
        suggestedItinerary: `## Suggested New York Itinerary

This is just a suggested itinerary and can be adjusted to fit your interests and time constraints.

### Day 1
Start your day with a visit to the Statue of Liberty and Ellis Island. In the afternoon, explore the Financial District and visit the 9/11 Memorial & Museum. In the evening, catch a Broadway show.

### Day 2
Visit the Metropolitan Museum of Art in the morning. In the afternoon, explore Central Park. In the evening, enjoy dinner in Greenwich Village.

### Day 3
Walk across the Brooklyn Bridge and explore the DUMBO neighborhood. In the afternoon, visit Chelsea Market and walk the High Line. In the evening, enjoy dinner in the Meatpacking District.`
      }}
      faqs={[
        {
        question: "What are the best things to do in New York?",
        answer: `New York City offers a wealth of attractions, including the Statue of Liberty, Central Park, the Metropolitan Museum of Art, Times Square, and Broadway shows. Be sure to also explore the city's diverse neighborhoods and culinary scene.`
      },
        {
        question: "How many days do you need in New York?",
        answer: `At least 3-5 days are recommended to experience the highlights of New York City. However, you could easily spend a week or more exploring the city's many attractions and neighborhoods.`
      },
        {
        question: "What is New York famous for?",
        answer: `New York City is famous for its iconic landmarks, world-class museums, vibrant culture, diverse neighborhoods, and delicious food. It's a global center for finance, fashion, entertainment, and the arts.`
      },
        {
        question: "When is the best time to visit New York?",
        answer: `Spring (April-May) and fall (September-October) are generally considered the best times to visit New York, with pleasant weather and fewer crowds.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Energetic, Diverse, Iconic",
        budgetBreakdown: {
          freeActivities: "Walk across the Brooklyn Bridge,Explore Central Park,Visit the Staten Island Ferry (for Statue of Liberty views),Walk the High Line",
          budgetFriendly: "Subway ride: $2.75,Slice of pizza: $3,Museum of Modern Art (MoMA) free Friday nights: Free,Street food meal: $10",
          splurgeWorthy: "Broadway show: $100+,Fine dining experience: $150+,Helicopter tour of Manhattan: $250+"
        },
        localSecrets: ["Visit the Top of the Rock Observation Deck at 8:00 AM on Tuesdays for the absolute shortest lines and optimal views before tour buses arrive.", "Forget the MetroCard; download the OMNY app to your phone and tap to pay on subway turnstiles. This ensures you get free transfers and can track your spending easily.", "Budget $65-80 USD per day, covering $20 for three basic meals, $15 for transport (subway/bus), $20 for one modest attraction, and $10 for miscellaneous expenses (snacks, water).", "Head to Arthur Avenue in the Bronx for authentic Italian goods; haggle politely for discounts on cheeses and cured meats, especially later in the afternoon on Saturdays.", "Avoid the Olive Garden in Times Square; it's overpriced and inauthentic. Instead, visit Joe's Pizza on Carmine Street for a classic New York slice for a fraction of the cost.", "Be aware of the NYC marathon on the first Sunday of November: significant traffic closures and delays occur. Plan your travels according to the city map for road closures."],
        diningHighlights: {
          mustTryDishes: "New York-style pizza,Pastrami on rye,Bagel with cream cheese and lox,Junior's Cheesecake",
          bestCafes: "La Colombe Torrefaction: Known for its draft latte and minimalist decor. A good place to grab a coffee and work or read.,Cafe Grumpy: A local favorite with multiple locations, known for its strong coffee and friendly atmosphere.,Birch Coffee: Known for its unique coffee blends and cozy atmosphere. They also have a book exchange.",
          topRestaurants: "Via Carota: A popular West Village restaurant serving authentic Italian cuisine.,Peter Luger Steak House: A classic steakhouse in Brooklyn, famous for its dry-aged beef.,Momofuku Noodle Bar: A modern noodle bar serving creative and delicious ramen dishes.",
          foodMarkets: "Chelsea Market,Eataly,Smorgasburg (seasonal)",
          diningTips: "Tipping is customary in New York City restaurants (18-20%). Reservations are recommended for popular restaurants, especially on weekends. Street food is a great option for budget-friendly meals."
        },
        seasonalHighlights: {
          spring: "Cherry blossoms in Central Park, outdoor markets, rooftop bars opening.",
          summer: "Outdoor concerts, street fairs, beach trips to Coney Island.",
          fall: "Colorful foliage in Central Park, pumpkin patches, apple picking.",
          winter: "Ice skating in Rockefeller Center, holiday markets, cozy cafes."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "4",
          averageTimePerAttraction: "30-60 minutes",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};