import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Berlin: React.FC = () => {
  return (
    <CityPage
      cityName="Berlin"
      country="Germany"
      title={"Best Things to Do in Berlin, Germany (2025 Guide)"}
      description={`Discover the best things to do in Berlin — top attractions, hidden gems, and food spots. Complete Berlin travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVybGlufGVufDB8fDB8fHww"}
      galleryImages={[
      ]}
      highlights={["Visit the Brandenburg Gate, a symbol of German reunification.",
        "Explore the East Side Gallery, a preserved section of the Berlin Wall.",
        "Reflect at the Memorial to the Murdered Jews of Europe.",
        "Discover Museum Island, a UNESCO World Heritage site.",
        "Enjoy a traditional German meal at a local restaurant."]}
      attractions={[
        {
        name: "Brandenburg Gate",
        description: `## Overview
The Brandenburg Gate is perhaps Berlin's most iconic landmark, a symbol of both division and reunification. This magnificent neoclassical monument has witnessed centuries of history, from Prussian military parades to the fall of the Berlin Wall. It’s a must-see for any visitor to Berlin, and I think you'll find it pretty impressive, actually.

### Best Photo Spots
For the best photo opportunities, visit early in the morning to avoid the crowds. The gate is particularly stunning at sunrise and sunset, when the light casts a warm glow on the sandstone columns.

### Insider Tips
Tip: Take a stroll through the Tiergarten park, which is right next to the Brandenburg Gate. It's a beautiful green space perfect for a relaxing walk or a picnic. Be sure to look for the Victory Column!`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U5 to Brandenburg Tor; S-Bahn: S1, S2, S25 to Brandenburg Tor; Bus: 100 to Brandenburger Tor",
        openingHours: "24/7 (exterior viewing)",
        cost: "Free",
        website: "visitberlin.de"
      },
      discoveryTags: {
        timeRequired: "30–60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunrise or sunset for golden light",
        insiderTip: "Visit early morning (before 9 AM) or late evening (after 9 PM) to avoid large crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible via ramps and elevators."
      }
      },
        {
        name: "East Side Gallery",
        description: `## Overview
The East Side Gallery is the longest remaining section of the Berlin Wall, transformed into an open-air art gallery. Over a hundred artists from around the world have painted murals on the wall, expressing themes of peace, freedom, and hope. It's a powerful reminder of Berlin's divided past and a testament to the city's artistic spirit. You really *should* see it.

### Best Photo Spots
Take photos of the iconic murals, such as the "Fraternal Kiss" between Soviet leader Leonid Brezhnev and East German leader Erich Honecker. The best light is usually in the afternoon.

### Insider Tips
Local favorite: rent a bike and cycle along the East Side Gallery for a different perspective. It's also worth visiting at night, when some of the murals are illuminated.`,
        practicalInfo: {
        howToGetThere: "S-Bahn: S3, S5, S7, S9 to Warschauer Straße; U-Bahn: U1 to Warschauer Straße",
        openingHours: "24/7 (exterior viewing)",
        cost: "Free",
        website: "eastsidegallery-berlin.de"
      },
      discoveryTags: {
        timeRequired: "1–2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Iconic murals, especially 'Fraternal Kiss'",
        insiderTip: "Visit on a weekday morning for fewer people and better photo opportunities. Bring a wide-angle lens.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly flat and accessible."
      }
      },
        {
        name: "Memorial to the Murdered Jews of Europe",
        description: `## Overview
The Memorial to the Murdered Jews of Europe, also known as the Holocaust Memorial, is a poignant and thought-provoking monument consisting of 2,711 concrete slabs of varying heights. It's a place for reflection and remembrance, designed to evoke a sense of unease and disorientation. Walking through the memorial can be a deeply moving experience.

### Best Photo Spots
Consider the sensitivity of the site when taking photos. Wide shots that capture the scale of the memorial are powerful, but avoid posing or taking selfies that could be considered disrespectful.

### Insider Tips
Don't miss the underground Information Center, which provides historical context and personal stories of victims of the Holocaust. It's an essential part of the memorial experience.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U2 to Potsdamer Platz; S-Bahn: S1, S2, S25 to Potsdamer Platz; Bus: M41, M48, M85 to Behrenstr./Wilhelmstr.",
        openingHours: "24/7 (exterior viewing); Information Center: Hours vary, check website",
        cost: "Free (exterior); Free (Information Center)",
        website: "stiftung-denkmal.de"
      },
      discoveryTags: {
        timeRequired: "1–2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "reflection"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Wide shots capturing the scale",
        insiderTip: "Visit early in the morning or late in the evening for a more solitary and contemplative experience. The underground information center is essential for understanding the history.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Partially accessible; uneven ground in some areas."
      }
      },
        {
        name: "Museum Island",
        description: `## Overview
Museum Island is a UNESCO World Heritage site comprising five world-renowned museums: the Pergamon Museum, the Neues Museum, the Alte Nationalgalerie, the Bode Museum, and the Altes Museum. Each museum houses an impressive collection of art and artifacts from various periods and cultures. You could easily spend several days exploring all that Museum Island has to offer.

### Best Photo Spots
The Bode Museum offers stunning photo opportunities from its bridge over the Spree River, especially at sunset. The Pergamon Museum's Ishtar Gate is also a popular photo spot.

### Insider Tips
Recommend: Purchase a Museum Pass Berlin for access to multiple museums over three days. This can save you money and time. The Pergamon Museum is incredibly popular; book your tickets online in advance to avoid long queues.`,
        practicalInfo: {
        howToGetThere: "S-Bahn: S3, S5, S7, S9 to Hackescher Markt; U-Bahn: U6 to Friedrichstraße",
        openingHours: "Varies by museum, typically 10:00 AM - 6:00 PM; check individual museum websites",
        cost: "Varies by museum; Museum Pass Berlin available",
        website: "visitberlin.de/en/museum-island"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "architecture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Bode Museum bridge, Ishtar Gate",
        insiderTip: "Purchase a Museum Pass Berlin for cost savings and book Pergamon Museum tickets online well in advance to skip the line.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Varies by museum; check individual museum websites."
      }
      },
        {
        name: "Reichstag Building",
        description: `## Overview
The Reichstag Building is the seat of the German Parliament and a symbol of German democracy. Visitors can explore the building's glass dome, designed by Norman Foster, which offers panoramic views of Berlin. It's a fascinating experience that provides insight into the workings of German government.

### Best Photo Spots
The glass dome offers stunning panoramic views of the city. The rooftop terrace also provides excellent photo opportunities.

### Insider Tips
Be sure to book your visit to the Reichstag dome online well in advance, as it's required and free. Security is tight, so allow plenty of time for entry.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U5 to Bundestag; S-Bahn: S1, S2, S25 to Brandenburger Tor; Bus: 100 to Reichstag/Bundestag",
        openingHours: "8:00 AM - 10:00 PM (last admission 8:45 PM); Closed on certain holidays",
        cost: "Free (registration required)",
        website: "bundestag.de"
      },
      discoveryTags: {
        timeRequired: "1–2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "politics", "panoramic views"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic views from the glass dome",
        insiderTip: "Register online weeks in advance for free entry to the dome. Arrive early and allow ample time for security checks.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Gendarmenmarkt",
        description: `## Overview
Gendarmenmarkt is considered by some to be Berlin's most beautiful square. It's home to three stunning buildings: the Konzerthaus Berlin, the French Cathedral (Französischer Dom), and the German Cathedral (Deutscher Dom). The harmonious architecture and elegant atmosphere make it a must-see for any visitor.

### Best Photo Spots
Capture the symmetry of the square by standing in the center and framing the two cathedrals with the Konzerthaus in the background. It's particularly beautiful at night when the buildings are illuminated.

### Insider Tips
Consider attending a classical music concert at the Konzerthaus Berlin for a truly memorable experience. During the Christmas season, Gendarmenmarkt hosts one of Berlin's most charming Christmas markets.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U2, U6 to Stadtmitte",
        openingHours: "24/7 (exterior viewing); Konzerthaus Berlin hours vary",
        cost: "Free (exterior); Concert prices vary",
        website: "visitberlin.de/en/gendarmenmarkt"
      },
      discoveryTags: {
        timeRequired: "30–60 minutes",
        experienceLevel: "Easy Access",
        interests: ["architecture", "history", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round (Christmas market in winter)",
        photoOpportunity: "Symmetrical view of the square with cathedrals and Konzerthaus",
        insiderTip: "Visit during the Christmas Market for a festive experience. Consider attending a performance at the Konzerthaus.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible."
      }
      },
        {
        name: "Café Einstein Stammhaus",
        description: `## Overview
Café Einstein Stammhaus is a legendary Viennese-style coffeehouse in Berlin, housed in a beautiful historic villa. It's a place to soak up the atmosphere, enjoy a delicious cup of coffee, and perhaps indulge in a slice of their famous cake. It's the kind of cafe where you feel like you can linger for hours. 

### What to Expect
Expect a traditional Viennese coffeehouse atmosphere, with wood paneling, chandeliers, and comfortable seating. The menu features a variety of coffees, teas, pastries, and light meals.

### Insider Tips
This *cafe* can get busy, especially on weekends, so be prepared to wait for a table, or maybe try to make a reservation in advance.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U3 to Uhlandstraße",
        openingHours: "8:00 AM - 12:00 AM",
        cost: "Moderate (€€)",
        website: "cafeeinstein.com"
      },
      discoveryTags: {
        timeRequired: "1–2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "relaxation"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Elegant interior and exterior of the villa",
        insiderTip: "Try the Sachertorte, a classic Viennese chocolate cake.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible."
      }
      },
        {
        name: "Mustafa's Gemüse Kebap",
        description: `## Overview
Mustafa's Gemüse Kebap is arguably the most famous *kebab* stand in Berlin, known for its delicious and flavorful döner kebabs. This *food* stand is a local favorite and a must-try for any visitor looking for an authentic Berlin *culinary* experience. Expect a queue – it's almost always there – but most say it's worth the wait.

### What to Expect
Prepare for a long line, but the reward is a flavorful kebab packed with grilled vegetables, chicken, herbs, and sauces. It's a messy but incredibly satisfying *meal*.

### Insider Tips
The line moves faster than you might think. The secret is the constant turnover and efficiency of the staff.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U1, U3 to Mehringdamm",
        openingHours: "11:00 AM - 2:00 AM (varies slightly)",
        cost: "Budget-friendly (€)",
        website: "mustafas.de"
      },
      discoveryTags: {
        timeRequired: "30–60 minutes (including queue)",
        experienceLevel: "Easy Access",
        interests: ["food", "local cuisine", "budget-friendly"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "The colorful and overflowing kebab",
        insiderTip: "Go during off-peak hours (e.g., mid-afternoon) to minimize wait times. The queue moves quickly, so don't be discouraged by its length.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility."
      }
      },
        {
        name: "Markthalle Neun",
        description: `## Overview
Markthalle Neun is a historic *food market* in Berlin's Kreuzberg neighborhood, offering a wide variety of *culinary* delights. From street *food* to gourmet cheeses, craft beers to artisanal breads, you'll find something to tempt your taste buds. It's a great place to *explore* Berlin's vibrant *food* scene and sample local specialties.

### What to Expect
A bustling atmosphere with vendors selling a diverse range of *food* and drinks. There are communal tables where you can sit and enjoy your *meal*.

### Insider Tips
Street Food Thursday is a popular event at Markthalle Neun, featuring food stalls from around the world. It's a great way to *taste* a variety of different cuisines.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U1, U8 to Kottbusser Tor",
        openingHours: "Varies by vendor; generally open Monday-Saturday, with special events on Sundays",
        cost: "Budget-friendly to Moderate (€-€€)",
        website: "markthalle9.de"
      },
      discoveryTags: {
        timeRequired: "1–2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "local cuisine", "markets"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Variety of colorful food stalls",
        insiderTip: "Visit on Street Food Thursday (evenings) for the best selection of international street food. Come hungry!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Berlin

Berlin has a comprehensive and efficient public transport system, making it easy to get around the city. From U-Bahn and S-Bahn trains to buses and trams, there are plenty of options to choose from. Consider purchasing a day ticket or a multi-day pass for unlimited travel.

### Public Transport
The U-Bahn (underground) and S-Bahn (suburban) trains are the fastest and most convenient ways to travel around Berlin. Buses and trams are also readily available and can be useful for reaching destinations not directly served by the trains.

### Taxis & Rideshare
Taxis are available throughout Berlin, but they can be more expensive than public transport. Rideshare services like Uber are also available.`,
        whereToStay: `## Where to Stay in Berlin

Berlin offers a wide range of accommodation options to suit every budget and preference. From luxury hotels to budget-friendly hostels, you'll find something to meet your needs. Consider staying in a central neighborhood like Mitte or Prenzlauer Berg for easy access to attractions.

### Best Areas
Mitte is a central and convenient location with many attractions within walking distance. Prenzlauer Berg is a trendy neighborhood with a vibrant nightlife and plenty of cafes and restaurants. Kreuzberg is a more alternative neighborhood with a diverse cultural scene.

### Luxury Options
The Hotel de Rome and The Ritz-Carlton, Berlin are two popular luxury hotels in Berlin.`,
        bestTimeToVisit: `## Best Time to Visit Berlin

The best time to visit Berlin depends on your preferences. Summer offers warm weather and long days, but it can also be crowded. Spring and fall offer milder weather and fewer crowds. Winter can be cold and snowy, but it's also a magical time to visit, with Christmas markets and festive events.

### Peak Season
Summer (June-August) is the peak tourist season in Berlin.

### Weather Overview
Berlin has a temperate climate with four distinct seasons. Summers are warm and sunny, with average temperatures in the low 20s Celsius. Winters are cold and snowy, with average temperatures around freezing.`,
        suggestedItinerary: `## Suggested Berlin Itinerary

Here's a suggested 3-day itinerary for exploring Berlin:

### Day 1
Start your day with a visit to the Brandenburg Gate and the Reichstag Building. In the afternoon, explore Museum Island and visit the Pergamon Museum. In the evening, enjoy a traditional German dinner at a local restaurant.

### Day 2
Visit the East Side Gallery and learn about the Berlin Wall. In the afternoon, explore the trendy neighborhood of Prenzlauer Berg. In the evening, enjoy a concert at the Konzerthaus Berlin.

### Day 3
Visit the Memorial to the Murdered Jews of Europe and reflect on the city's history. In the afternoon, explore the alternative neighborhood of Kreuzberg. In the evening, enjoy a final Berlin kebab at Mustafa's Gemüse Kebap.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Berlin?",
        answer: `Some of the best things to do in Berlin include visiting the Brandenburg Gate, exploring the East Side Gallery, reflecting at the Memorial to the Murdered Jews of Europe, and discovering Museum Island.`
      },
        {
        question: "How many days do you need in Berlin?",
        answer: `I'd say you need at least 3 days in Berlin to see the main sights and get a feel for the city's atmosphere. More days will allow you to explore more of the city's diverse neighborhoods and museums.`
      },
        {
        question: "What is Berlin famous for?",
        answer: `Berlin is famous for its history, art, culture, and vibrant nightlife. It's home to iconic landmarks like the Brandenburg Gate and the Berlin Wall, as well as world-renowned museums and galleries.`
      },
        {
        question: "When is the best time to visit Berlin?",
        answer: `The best time to visit Berlin is during the shoulder seasons (spring and fall) when the weather is mild and the crowds are smaller. Summer is also a popular time to visit, but it can be crowded and expensive.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Historical, Vibrant, Edgy",
        budgetBreakdown: {
          freeActivities: "Visiting the Brandenburg Gate,Walking along the East Side Gallery,Exploring the Memorial to the Murdered Jews of Europe,Wandering through the Tiergarten park",
          budgetFriendly: "Mustafa's Gemüse Kebap (€5-7),Street food at Markthalle Neun (€5-15),Day ticket for public transport (€8.80),Visiting the DDR Museum (€12.50)",
          splurgeWorthy: "Fine dining experience at a Michelin-starred restaurant,Staying at a luxury hotel like the Hotel de Rome,Private tour of Museum Island"
        },
        localSecrets: ["Visit Museum Island museums on Tuesday or Wednesday mornings around 10:00 AM for significantly fewer crowds than weekends. Enter the Pergamon Museum through the back entrance on Am Kupfergraben to bypass the main queue.", "Purchase a 'Berlin WelcomeCard AB' for zones A and B, which covers most tourist areas. Download the BVG Fahrinfo app to plan your routes and see real-time departure information. Always validate your ticket before boarding the train or bus to avoid fines. Locals stand to the right on escalators to allow others to pass on the left.", "A realistic budget for 3 days in Berlin is approximately €135-180, broken down as: €45-60 per day (Accommodation (hostel) €25, Food: €20 (€5 for breakfast, €7 for lunch, €8 for dinner), transport €9, and incidentals €1)", "For authentic local goods, head to the Turkish Market on Maybachufer (Tuesdays and Fridays). Bargain respectfully, offering 10-20% less than the asking price. Purchase spices, fabrics, and fresh produce for the best deals.", "Avoid the restaurants directly surrounding the Brandenburg Gate and Unter den Linden, as they are generally overpriced and cater to tourists. Instead, venture a few blocks into side streets for more authentic German cuisine at lower prices, such as Augustiner am Gendarmenmarkt (Charlottenstraße 55).", "The Fête de la Musique takes place on June 21st every year, with free music performances throughout the city. This can affect transportation and cause crowds, so plan accordingly. Conversely, many shops and businesses are closed on German Unity Day (October 3rd)."],
        diningHighlights: {
          mustTryDishes: "Currywurst: A Berlin street food staple, sausage with curry ketchup.,Döner Kebab: A Turkish-German fusion dish, grilled meat in pita bread.,Berliner Pfannkuchen: A jelly-filled donut, often eaten during Carnival.,Kartoffelsuppe: A creamy potato soup, perfect for a cold day.",
          bestCafes: "Café Einstein Stammhaus: A classic Viennese coffeehouse with a sophisticated atmosphere.,The Barn: Known for its high-quality specialty coffee and minimalist decor.,Bonanza Coffee Heroes: Another specialty coffee roaster with a focus on direct trade beans.",
          topRestaurants: "Zur letzten Instanz: Berlin's oldest restaurant, serving traditional German cuisine.,Nobelhart & Schmutzig: A Michelin-starred restaurant focusing on regional and seasonal ingredients.,Cocolo Ramen X-berg: Popular ramen spot with authentic Japanese flavors.",
          foodMarkets: "Markthalle Neun: A historic food market with a wide variety of culinary offerings.,Turkish Market on Maybachufer: A vibrant market with fresh produce, spices, and street food.,Arminiusmarkthalle: A historic market hall with a focus on regional and organic products.",
          diningTips: "Tipping is customary in Germany, usually around 5-10% of the bill.,Reservations are recommended for popular restaurants, especially on weekends.,Many restaurants offer a Mittagtisch (lunch menu) with discounted prices.,Don't be afraid to try local specialties like Currywurst and Döner Kebab."
        },
        seasonalHighlights: {
          spring: "The city comes alive with blooming flowers and outdoor cafes. It's a great time for exploring parks and gardens.",
          summer: "Warm weather and long days make summer ideal for outdoor activities, festivals, and exploring Berlin's many lakes and beaches.",
          fall: "The leaves change color, creating a beautiful backdrop for sightseeing. It's also a great time for cultural events and museum visits.",
          winter: "Berlin transforms into a winter wonderland with Christmas markets, festive lights, and cozy cafes. Be prepared for cold weather and snow."
        },
        quickFacts: {
          totalAttractions: "9",
          freeActivities: "4",
          averageTimePerAttraction: "30–60 minutes",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};