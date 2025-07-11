import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Prague: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Prague, Czech Republic (2025 Guide)"}
      description={`Planning a trip to Prague and wondering about the best things to do in Prague? This 2025 guide is your ultimate resource. From iconic landmarks to hidden local spots, Prague offers a wealth of experiences. Let's explore the must-see attractions and unearth some lesser-known gems. I think you'll find that choosing from all the things to do in Prague can be a bit overwhelming, so we've curated a list of the top experiences to make your trip unforgettable. We'll delve into the city's rich history, stunning architecture, and vibrant culture. Get ready to discover the heart of the Czech Republic!`}
      galleryImages={[
      ]}
      highlights={["Charles Bridge",
        "Prague Castle",
        "Old Town Square",
        "St. Vitus Cathedral",
        "Astronomical Clock"]}
      attractions={[
        {
        name: "Charles Bridge",
        description: `Charles Bridge is perhaps Prague's most iconic landmark. Spanning the Vltava River, this historic bridge is adorned with statues and offers stunning views of Prague Castle and the Old Town. It's incredibly picturesque, especially at sunrise and sunset. Be sure to take your time and admire the intricate details of each statue; some say touching certain statues brings good luck! Expect large crowds during peak season. For a less crowded experience, visit very early in the morning. The panoramic views from the center of the bridge are worth getting up early for! I found the view surprisingly calming even amidst the crowds. It's definitely a must-see place in Prague.`,
        practicalInfo: {
        howToGetThere: "Accessible by tram or metro to Staroměstská station, then a short walk.",
        openingHours: "Open 24 hours",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunrise or sunset for golden hour photos.",
        insiderTip: "Visit before 8 AM to avoid the biggest crowds and street vendors.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Uneven cobblestones can be challenging for wheelchairs."
      }
      },
        {
        name: "Prague Castle",
        description: `Prague Castle isn't just a castle; it's a sprawling complex of palaces, churches, and gardens that have served as the seat of Czech rulers for centuries. St. Vitus Cathedral within the castle complex is a masterpiece of Gothic architecture and a must-see. Don't miss the Golden Lane, a charming street of tiny houses once inhabited by goldsmiths and castle guards. It's the kind of place you might linger longer than expected. Tip: Purchase tickets online in advance to avoid long queues. Consider visiting during the shoulder seasons (spring or fall) for pleasant weather and fewer tourists. The view from the castle overlooking the city is simply stunning.`,
        practicalInfo: {
        howToGetThere: "Take tram 22 to Pražský hrad station.",
        openingHours: "Varies by season and building; generally 9 AM to 5 PM.",
        cost: "Varies by circuit; ranges from 250-350 CZK.",
        website: "https://www.hrad.cz/en/prague-castle"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Moderate Adventure",
        interests: ["history", "architecture", "art"],
        costLevel: "Moderate",
        seasonalBest: "Spring",
        photoOpportunity: "Panoramic city views from the castle walls.",
        insiderTip: "Visit the Old Royal Palace before noon to avoid the tour groups.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some areas are not easily accessible for wheelchairs."
      }
      },
        {
        name: "Old Town Square",
        description: `The Old Town Square is the heart of Prague's historic center. Surrounded by colorful buildings and impressive churches, it's a vibrant hub of activity. The Astronomical Clock is the main attraction, drawing crowds every hour to witness its animated performance. The square also hosts various markets and events throughout the year. While it can get very crowded, especially during the summer, it's a must-see for its historical significance and lively atmosphere. Perhaps grab a Trdelník (a traditional pastry) from one of the street vendors. It's the kind of place you just want to wander around, taking it all in.`,
        practicalInfo: {
        howToGetThere: "Metro to Staroměstská station.",
        openingHours: "Open 24 hours; attractions around the square have varying hours.",
        cost: "Free to enter the square; attractions have varying fees.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "culture"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Astronomical Clock during the hourly show.",
        insiderTip: "Climb the Old Town Hall Tower for a panoramic view of the square.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Generally accessible, but cobblestones can be challenging."
      }
      },
        {
        name: "St. Vitus Cathedral",
        description: `Located within Prague Castle, St. Vitus Cathedral is a stunning example of Gothic architecture. Its towering spires and intricate stained-glass windows are truly breathtaking. The interior is equally impressive, with elaborate chapels and tombs of Bohemian kings. Don't miss the Chapel of St. Wenceslas, adorned with precious stones and murals. Consider taking a guided tour to learn about the cathedral's history and significance. Tip: The climb to the top of the South Tower provides amazing views, but it is not for the faint of heart! Be sure to look up at the intricate ceiling details; it’s a photographer's dream.`,
        practicalInfo: {
        howToGetThere: "Take tram 22 to Pražský hrad station and walk through Prague Castle.",
        openingHours: "Varies by season; generally 9 AM to 5 PM.",
        cost: "Included in Prague Castle ticket.",
        website: "https://www.hrad.cz/en/prague-castle/visitors-information/tickets"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["history", "architecture", "art"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Stained-glass windows and the interior.",
        insiderTip: "Visit early in the morning to avoid the longest queues, especially during peak season.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility; some areas have stairs."
      }
      },
        {
        name: "Astronomical Clock",
        description: `The Prague Astronomical Clock, or Orloj, is a medieval marvel located on the Old Town Hall. Every hour, crowds gather to watch the clock's animated figures perform a brief show. While the show itself is somewhat brief, the clock's history and intricate design are what make it truly fascinating. Be sure to arrive early to secure a good viewing spot. Tip: While the hourly show is popular, consider visiting the clock at other times to appreciate its details without the crowds. The view from the Old Town Hall Tower is also well worth the climb.`,
        practicalInfo: {
        howToGetThere: "Metro to Staroměstská station.",
        openingHours: "Clock show every hour from 9 AM to 11 PM.",
        cost: "Free to watch the clock; fee to climb the Old Town Hall Tower.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "culture"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "The clock during the hourly show.",
        insiderTip: "Watch the show from the opposite side of the square for a less crowded view.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The square is generally accessible; the tower has stairs."
      }
      },
        {
        name: "Lesser Town (Malá Strana)",
        description: `Lesser Town, or Malá Strana, is a charming district located beneath Prague Castle. This area is known for its picturesque streets, baroque architecture, and hidden gardens. Explore the beautiful Wallenstein Garden, visit St. Nicholas Church, and wander along the Vltava River. Lesser Town offers a more relaxed atmosphere than the Old Town, making it a great place to escape the crowds. Tip: Take the funicular up Petřín Hill for panoramic city views. Some say that Petřín Hill is even more stunning than Prague Castle! This area feels very authentic, I think.`,
        practicalInfo: {
        howToGetThere: "Metro to Malostranská station or tram to Malostranské náměstí.",
        openingHours: "Varies by attraction.",
        cost: "Varies by attraction.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Moderate Adventure",
        interests: ["history", "architecture", "nature"],
        costLevel: "Moderate",
        seasonalBest: "Spring",
        photoOpportunity: "Views from Petřín Hill and Wallenstein Garden.",
        insiderTip: "Explore the hidden gardens between the buildings for a peaceful escape.",
        hiddenGem: true,
        familyFriendly: true,
        accessibilityNotes: "Some areas have steep hills and cobblestones."
      }
      },
        {
        name: "U Fleků Restaurant",
        description: `U Fleků is Prague's oldest brewery restaurant, serving dark beer and traditional Czech cuisine since 1499. The atmosphere is lively and boisterous, with live music and long communal tables. This is more than just a restaurant; it's a cultural experience. Be sure to try the traditional goulash or roasted pork knuckle. The dark beer is brewed on-site and is a must-try. Expect to share tables and enjoy a lively, touristy atmosphere. It's the sort of place where you might meet people from all over the world. The food is hearty and flavorful; definitely an experience worth having.`,
        practicalInfo: {
        howToGetThere: "Walk from Karlovo náměstí station.",
        openingHours: "11:00 AM - 11:00 PM",
        cost: "Moderate (300-600 CZK per person)",
        website: "http://www.ufleku.cz/en/"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture", "dining"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "The historic brewery and the bustling beer garden.",
        insiderTip: "Don't be afraid to try the Becherovka liquor, a local specialty.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Partially accessible; some areas have stairs."
      }
      },
        {
        name: "Manifesto Market",
        description: `Manifesto Market is a modern food market in the heart of Prague. It features a variety of international cuisines, craft beers, and cocktails. The atmosphere is trendy and vibrant, with outdoor seating and live music. It’s a great place to sample different foods and drinks. Try the Vietnamese pho, the Argentinian empanadas, or the Czech Trdelník in a modern twist. The food is high quality, and the prices are reasonable. This is definitely one of the best places to visit in Prague for a casual meal with friends. It’s a perfect way to explore Prague's culinary scene.`,
        practicalInfo: {
        howToGetThere: "Near Florenc metro and tram station.",
        openingHours: "11:00 AM - 10:00 PM",
        cost: "Budget-friendly (150-400 CZK per person)",
        website: "https://www.manifesto.city/prague/our-markets/manifesto-market-florenc"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Summer",
        photoOpportunity: "Colorful food stalls and trendy atmosphere.",
        insiderTip: "Visit during lunchtime on weekdays for a less crowded experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Eska Restaurant",
        description: `Eska is a Michelin-recommended restaurant that showcases modern Czech cuisine with a focus on fermentation and local ingredients. The setting is industrial-chic in a former factory. The dining experience is both innovative and delicious. They're doing something genuinely new with traditional cuisine. Be sure to try the tasting menu for a culinary journey through Czech flavors. Reservations are highly recommended. Some say it's one of the best restaurants in Prague. The presentation of each dish is very artistic. Perhaps save this spot for a special occasion. The flavors here are truly memorable.`,
        practicalInfo: {
        howToGetThere: "Take the tram to Pernerova station.",
        openingHours: "12:00 PM - 3:00 PM, 6:00 PM - 11:00 PM",
        cost: "Expensive (800-1500 CZK per person)",
        website: "https://www.eska.restaurant/en/"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Local Expert",
        interests: ["food", "dining", "culinary"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Artistic food presentation and the industrial-chic setting.",
        insiderTip: "Ask for a table near the open kitchen to watch the chefs at work.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Kampa Island",
        description: `Kampa Island is a charming little island on the Vltava River, separated from Lesser Town by a narrow canal. It's a peaceful oasis with colorful houses, art galleries, and the John Lennon Wall. Take a stroll along the canal, admire the sculptures, and enjoy the laid-back atmosphere. Don't miss the Devil's Stream (Čertovka), a picturesque canal with a working water wheel. It's a lovely escape from the bustle of the city. I found the slower pace surprisingly welcome. Maybe it's the perfect place for a picnic.`,
        practicalInfo: {
        howToGetThere: "Walk from Charles Bridge or take tram 22 to Hellichova station.",
        openingHours: "Open 24 hours",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "art", "relaxation"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Colorful houses along the Devil's Stream.",
        insiderTip: "Visit the island at sunset for a romantic atmosphere.",
        hiddenGem: true,
        familyFriendly: true,
        accessibilityNotes: "Generally accessible, but some areas have steps."
      }
      },
        {
        name: "Letná Beer Garden",
        description: `Letná Beer Garden is a popular spot for locals and tourists alike. Located in Letná Park, it offers stunning panoramic views of Prague. Enjoy a traditional Czech beer while relaxing in the park. The atmosphere is casual and friendly, making it a great place to socialize. This is the perfect way to wind down after a day of exploring the city. It's probably one of the best viewpoints of Prague that doesn't cost anything. The beer is cold, and the views are priceless.`,
        practicalInfo: {
        howToGetThere: "Tram to Letenské náměstí or a walk from Old Town.",
        openingHours: "11:00 AM - 11:00 PM (seasonal)",
        cost: "Budget-friendly (50-150 CZK per beer)",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["relaxation", "nature", "dining"],
        costLevel: "Budget-friendly",
        seasonalBest: "Summer",
        photoOpportunity: "Panoramic views of Prague.",
        insiderTip: "Bring a blanket to sit on the grass and enjoy the views.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Partially accessible; some areas are on grass."
      }
      }
      ]}
      logistics={{
        gettingAround: `Prague has an excellent public transportation system consisting of the metro, trams, and buses. Tickets can be purchased at vending machines at metro stations and tram stops. Walking is also a great way to explore the city center, especially the Old Town and Lesser Town. Taxis and ride-sharing services are also available, but they can be more expensive than public transport. Consider purchasing a multi-day public transport pass if you plan to use public transport frequently. Just be sure to validate your ticket when you first use it. 

For getting to and from the airport, the Airport Express bus is a convenient and affordable option. It runs directly between the airport and the main train station (Hlavní nádraží). Alternatively, you can take a taxi or pre-booked airport transfer, but these will be more expensive. Uber and Bolt are also available. 

Overall, navigating Prague is relatively easy, thanks to its efficient and well-maintained public transportation system. Walking is ideal for the central areas, while public transport is perfect for reaching attractions further away.`,
        whereToStay: `The Old Town is a great area to stay if you want to be in the heart of the action. It's close to many of the main attractions, restaurants, and bars. However, it can be noisy and crowded, especially during peak season. Lesser Town is a more peaceful option, with charming streets and a relaxed atmosphere. It's still within walking distance of the main attractions but offers a quieter base. 

For budget travelers, consider staying in the New Town (Nové Město). It offers a good selection of affordable hotels and hostels and is well-connected to the rest of the city by public transport. Vinohrady is a trendy neighborhood with stylish cafes and restaurants. It's a bit further from the city center but easily accessible by metro. 

Ultimately, the best area to stay in Prague depends on your preferences and budget. The Old Town is ideal for those who want to be in the middle of everything, while Lesser Town and Vinohrady offer a more relaxed and local experience.`,
        bestTimeToVisit: `The best time to visit Prague is during the shoulder seasons, spring (April-May) and fall (September-October). The weather is pleasant, and the crowds are smaller than in the peak summer months. Spring brings blooming flowers and a vibrant atmosphere, while fall offers beautiful autumn foliage. 

Summer (June-August) is the peak tourist season in Prague. The weather is warm, but the city can be very crowded, and prices tend to be higher. Winter (November-March) can be cold and snowy, but Prague is still beautiful during this time, especially during the Christmas season. The Christmas markets are a major draw, and the city has a festive atmosphere. 

Keep in mind that Prague can be crowded year-round, so it's always a good idea to book accommodations and tours in advance. Consider visiting during the weekdays to avoid the weekend crowds. No matter when you visit, Prague is a city that will captivate you with its beauty and charm.`,
        suggestedItinerary: `Day 1: Start your day with a visit to Prague Castle, including St. Vitus Cathedral and the Golden Lane. In the afternoon, explore Lesser Town, including the Wallenstein Garden and St. Nicholas Church. In the evening, walk across Charles Bridge and enjoy dinner in the Old Town. 

Day 2: Explore the Old Town Square and watch the Astronomical Clock's hourly show. Visit the Jewish Quarter and learn about its history. In the afternoon, take a boat tour on the Vltava River. In the evening, enjoy a traditional Czech dinner at U Fleků Restaurant. 

Day 3: Visit Petřín Hill and climb the Petřín Lookout Tower for panoramic city views. Explore Kampa Island and the John Lennon Wall. In the afternoon, visit the National Museum or the Mucha Museum. In the evening, enjoy a performance at the National Theatre or State Opera. 

Consider adding a day trip to Kutná Hora to see the Sedlec Ossuary (Bone Church). Alternatively, spend more time exploring the different neighborhoods of Prague and discovering hidden gems. This itinerary is just a suggestion, so feel free to customize it to your interests and preferences.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Prague?",
        answer: `The best things to do in Prague include visiting Prague Castle, walking across Charles Bridge, exploring the Old Town Square, watching the Astronomical Clock, and wandering through Lesser Town. Don't miss St. Vitus Cathedral and a traditional Czech beer garden.`
      },
        {
        question: "How many days do you need in Prague?",
        answer: `Ideally, you should spend at least 3 days in Prague to see the main attractions and explore the different neighborhoods. With 4-5 days, you can also take a day trip to nearby towns like Kutná Hora.`
      },
        {
        question: "What is Prague famous for?",
        answer: `Prague is famous for its stunning architecture, including Prague Castle and Charles Bridge, its rich history, its vibrant culture, and its delicious beer and traditional Czech cuisine.`
      },
        {
        question: "When is the best time to visit Prague?",
        answer: `The best time to visit Prague is during the shoulder seasons, spring (April-May) and fall (September-October), when the weather is pleasant and the crowds are smaller.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Historical, Romantic, Cultural",
        budgetBreakdown: {
          freeActivities: "Walking across Charles Bridge,Exploring Old Town Square,Visiting Kampa Island,Wandering through Lesser Town",
          budgetFriendly: "Public transportation pass (approx. 110 CZK per day),Traditional Czech meal (approx. 200 CZK),Entrance to Petřín Lookout Tower (approx. 150 CZK),Street food like Trdelník (approx. 80 CZK)",
          splurgeWorthy: "Luxury hotel in the Old Town,Fine dining experience at Eska restaurant,Private guided tour of Prague Castle"
        },
        localSecrets: ["Find the hidden courtyard at Ungelt Square (Týn Courtyard) behind the Church of Our Lady before Týn. Enter through the archways at Týnská street and discover a peaceful medieval gem. It's a favorite lunch spot for locals avoiding tourist crowds.", "Capture stunning sunset reflections of Prague Castle from Střelecký Island (Shooters' Island). Arrive around golden hour for the best light. Locals know this island offers a less crowded vantage point than Charles Bridge.", "Order the 'Svíčková' at Lokal Dlouháá, a traditional Czech restaurant. It's a creamy vegetable sauce with beef sirloin, bread dumplings, and cranberries. Locals consider it the quintessential Czech comfort food.", "Use the lesser-known entrance to Prague Castle through the Old Castle Stairs (Staré zámecké schody). Start your ascent from Klárov metro station around 8 AM to beat the main crowds at the front gates and enjoy a more peaceful climb."],
        diningHighlights: {
          mustTryDishes: "Svíčková (beef sirloin in cream sauce),Trdelník (sweet pastry grilled over an open fire),Goulash (hearty meat stew),Pilsner Urquell (original Pilsner beer)",
          bestCafes: "EMA Espresso Bar (modern cafe with excellent coffee),Café Louvre (historic cafe with elegant atmosphere),Můj šálek kávy (cozy cafe with local vibe)",
          topRestaurants: "Eska (modern Czech cuisine),La Degustation Bohême Bourgeoise (Michelin-starred restaurant),U Medvidku (traditional Czech cuisine)",
          foodMarkets: "Manifesto Market (modern food market),Holešovice Market (large market with food stalls and fresh produce)",
          diningTips: "Tipping is customary in Prague; round up the bill or add 10-15% for good service. Reservations are recommended for popular restaurants, especially during peak season. Many restaurants offer lunch menus with lower prices."
        },
        seasonalHighlights: {
          spring: "Blooming flowers in the parks and gardens; pleasant weather for outdoor activities; Easter markets in the Old Town Square.",
          summer: "Warm weather perfect for river cruises and beer gardens; outdoor concerts and festivals; longer daylight hours for exploring.",
          fall: "Beautiful autumn foliage in the parks; wine festivals and harvest celebrations; pleasant temperatures for sightseeing.",
          winter: "Christmas markets in the Old Town Square; festive atmosphere; opportunity to experience Prague covered in snow."
        },
        quickFacts: {
          totalAttractions: "11",
          freeActivities: "5",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};