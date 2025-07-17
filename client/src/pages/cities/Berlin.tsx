import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Berlin: React.FC = () => {
  return (
    <CityPage
      cityName="Berlin"
      country="Germany"
      title={"Best Things to Do in Berlin, Germany (2025 Guide)"}
      description={`Discover things to do in Berlin — top attractions, hidden gems, and food spots. Complete Berlin travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Brandenburg Gate",
        "Explore the East Side Gallery",
        "Reflect at the Memorial to the Murdered Jews of Europe",
        "Discover Museum Island",
        "Enjoy a Currywurst"]}
      attractions={[
        {
        name: "Brandenburg Gate",
        description: `## Overview
The Brandenburg Gate, a symbol of Berlin and German reunification, is a must-see. This iconic neoclassical monument stands as a powerful reminder of the city's history and resilience. The gate has witnessed centuries of triumphs and tragedies, making it a focal point for both locals and tourists alike. 

### Best Photo Spots
For the best photo opportunity, arrive early in the morning to avoid the crowds. The light is particularly stunning at sunrise, casting a golden glow on the gate. You can also capture fantastic shots from the Pariser Platz, framing the gate with the surrounding buildings.

### Insider Tips
Consider taking a guided walking tour that delves into the history of the Brandenburg Gate and its significance. Many tours offer unique insights and anecdotes that you might otherwise miss. Also, be sure to explore the nearby Tiergarten, a large park offering a peaceful escape from the city bustle.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U5 to Brandenburger Tor. S-Bahn: S1, S2, or S25 to Brandenburger Tor.",
        openingHours: "24/7",
        cost: "Free",
        website: "visitberlin.de"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunrise for golden light",
        insiderTip: "Visit early morning before 9 AM to avoid crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible for wheelchairs."
      }
      },
        {
        name: "East Side Gallery",
        description: `## Overview
The East Side Gallery, the longest remaining section of the Berlin Wall, is now an open-air art gallery. This historical landmark showcases artwork from artists around the world, each piece reflecting themes of freedom, hope, and the fall of the Berlin Wall. A visit here offers a powerful and moving experience.

### Best Photo Spots
The most popular photo spots are along the main stretch of the gallery, featuring iconic murals like the 'Fraternal Kiss' and 'Trabant breaking through the wall'. Look for unique angles by walking along the Spree River for a different perspective. Sunset provides a beautiful backdrop for photos.

### Insider Tips
Take your time walking the entire length of the gallery to fully appreciate the diverse range of artwork. Many artists sell prints and souvenirs nearby, offering a chance to support their work. Consider visiting during the week to avoid the weekend crowds. It's the kind of place you might linger longer than expected.`,
        practicalInfo: {
        howToGetThere: "S-Bahn: S3, S5, S7, or S9 to Ostbahnhof. U-Bahn: U1 or U3 to Warschauer Straße.",
        openingHours: "24/7",
        cost: "Free",
        website: "eastsidegallery-berlin.de"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunset along the Spree River",
        insiderTip: "Visit during the week for fewer crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible, some uneven surfaces."
      }
      },
        {
        name: "Memorial to the Murdered Jews of Europe",
        description: `## Overview
This memorial, also known as the Holocaust Memorial, is a poignant tribute to the Jewish victims of the Holocaust. The vast field of concrete slabs creates a powerful and unsettling atmosphere, prompting reflection on a dark chapter in history. The Information Center beneath the memorial provides further context and historical information.

### What to Expect
The memorial is designed to be walked through and experienced. The uneven ground and varying heights of the slabs create a disorienting effect, symbolizing the loss of control and the systematic dehumanization of the Holocaust victims. It's a space for quiet contemplation and remembrance.

### Insider Tips
Visit the Information Center beneath the memorial to gain a deeper understanding of the Holocaust and the individual stories of its victims. Allow ample time for reflection and be respectful of the site's significance. It's the kind of place where silence speaks volumes.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U2 to Potsdamer Platz. S-Bahn: S1, S2, or S25 to Potsdamer Platz.",
        openingHours: "Memorial: 24/7. Information Center: Hours vary, check website.",
        cost: "Free",
        website: "stiftung-denkmal.de"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "reflection", "remembrance"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Powerful perspective from the edges of the memorial",
        insiderTip: "Visit the Information Center for historical context.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible, but uneven surfaces in the memorial field."
      }
      },
        {
        name: "Museum Island",
        description: `## Overview
Museum Island, a UNESCO World Heritage Site, is home to five world-renowned museums: the Pergamon Museum, the Neues Museum, the Alte Nationalgalerie, the Bode Museum, and the Altes Museum. Each museum boasts an impressive collection of art and artifacts, spanning various periods and cultures. It's a paradise for art and history lovers.

### Must-See Exhibits
The Pergamon Museum houses the iconic Pergamon Altar and the Ishtar Gate of Babylon. The Neues Museum is home to the bust of Nefertiti. The Alte Nationalgalerie showcases 19th-century art. The Bode Museum features sculptures and Byzantine art. The Altes Museum displays classical antiquities.

### Insider Tips
Purchase a Museum Island Welcome Card for access to all five museums. Plan your visit in advance and prioritize the museums that interest you most. Consider visiting during the off-season or on weekdays to avoid the crowds. It's a lot to see, so maybe focus on a few highlights.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U5 to Museumsinsel. S-Bahn: S3, S5, S7, or S9 to Hackescher Markt.",
        openingHours: "Varies by museum, check individual museum websites.",
        cost: "Varies by museum, Museum Island Welcome Card available.",
        website: "visitberlin.de/en/museum-island"
      },
      discoveryTags: {
        timeRequired: "Full day",
        experienceLevel: "Moderate Adventure",
        interests: ["history", "art", "architecture"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Pergamon Altar and Nefertiti bust",
        insiderTip: "Purchase a Museum Island Welcome Card for access to all museums.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible, check individual museum websites."
      }
      },
        {
        name: "Currywurst",
        description: `## Overview
No visit to Berlin is complete without trying Currywurst, a local culinary staple. This fast-food dish consists of a steamed, then fried sausage, cut into slices and seasoned with curry ketchup and curry powder. It's a surprisingly delicious and satisfying snack, perfect for a quick bite on the go. Many consider it one of the best things to do in Berlin!

### Best Places to Try
Konnopke's Imbiss, located under the Schönhauser Allee U-Bahn viaduct, is a legendary Currywurst stand that has been serving up this Berlin favorite since 1930. Curry 36 at Mehringdamm is another popular spot known for its delicious Currywurst and friendly service. These are just a few of the places to try this delicious meal.

### Insider Tips
Order your Currywurst 'mit Darm' (with skin) or 'ohne Darm' (without skin) depending on your preference. Some stands offer different levels of spiciness, so be sure to ask for your preferred heat level. Enjoy your Currywurst with a side of fries and mayonnaise for the full Berlin experience.`,
        practicalInfo: {
        howToGetThere: "Various locations throughout Berlin.",
        openingHours: "Varies by stand.",
        cost: "Budget-friendly (€2-€4)",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "local culture", "dining"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the iconic Currywurst with Berlin in the background",
        insiderTip: "Order 'mit Darm' (with skin) for a more traditional experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Varies by location."
      }
      },
        {
        name: "Café Neues Ufer",
        description: `## Overview
Café Neues Ufer, formerly known as Café Einstein Stammhaus, is a charming Viennese-style coffeehouse that's been a Berlin institution for decades. With its cozy atmosphere, antique furniture, and delicious coffee, it's the perfect place to relax and soak up the local ambiance. It is definitely one of the best things to do in Berlin for coffee lovers.

### Dining Atmosphere
The cafe exudes a classic, old-world charm. High ceilings, plush seating, and walls adorned with portraits create an inviting and sophisticated atmosphere. During the warmer months, the outdoor terrace provides a delightful spot for people-watching.

### Culinary Delights
Indulge in a variety of Viennese specialties, including Sachertorte, Apfelstrudel, and Kaiserschmarrn. Pair your dessert with a classic Viennese coffee, such as a Melange or Einspänner. The cafe also offers a selection of savory dishes, including quiche and salads. The price range is moderate, expect to pay around €10-€20 for a meal and coffee. They are open from 8:00 AM to 1:00 AM. Reservations are recommended, especially during peak hours.

### Insider Tip
Try sitting in the back garden for a quieter, more secluded experience. It's the kind of place you might linger longer than expected.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U1, U2, U3, or U4 to Wittenbergplatz.",
        openingHours: "8:00 AM - 1:00 AM",
        cost: "Moderate (€10-€20)",
        website: "cafe-neues-ufer.de"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "relaxation", "local culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the classic Viennese interior and coffee",
        insiderTip: "Sit in the back garden for a quieter experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible."
      }
      },
        {
        name: "Markthalle Neun",
        description: `## Overview
Markthalle Neun is a vibrant indoor food market offering a diverse range of culinary delights from around the world. From traditional German fare to international street food, you'll find something to satisfy every craving. It's a popular spot for locals and tourists alike.

### Culinary Scene
The market features a variety of food stalls, selling everything from artisanal cheeses and breads to gourmet burgers and tacos. On Street Food Thursday (every Thursday evening), the market comes alive with a bustling atmosphere and an even wider selection of street food vendors. It offers many different cuisines.

### Insider Tips
Visit on Street Food Thursday for the best selection of food vendors and a lively atmosphere. Arrive early to avoid the crowds and secure a table. Be sure to try some of the local German specialties, such as Spätzle or Knödel. It's a great place to sample a variety of dishes.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U1 or U3 to Görlitzer Bahnhof.",
        openingHours: "Varies by vendor, generally open Mon-Sat. Street Food Thursday: 5:00 PM - 10:00 PM.",
        cost: "Budget-friendly to Moderate (€5-€20)",
        website: "markthalle9.de"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "local culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the bustling atmosphere of Street Food Thursday",
        insiderTip: "Visit on Street Food Thursday for the best selection.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible."
      }
      },
        {
        name: "Charlottenburg Palace",
        description: `## Overview
Charlottenburg Palace, the largest palace in Berlin, offers a glimpse into the opulent lifestyle of Prussian royalty. Explore the lavish state rooms, stroll through the beautiful gardens, and admire the extensive art collection. This is a great place to visit if you want to learn the history of the area.

### Best Photo Spots
The best photo opportunities are in the palace gardens, particularly near the Neuer Flügel (New Wing) and the Belvedere teahouse. The palace looks especially stunning during the spring when the gardens are in full bloom. The sunset reflecting off of the palace is also worth capturing.

### Insider Tips
Consider taking a guided tour of the palace to learn about its history and the lives of the Prussian royals. Allow ample time to explore both the palace and the gardens. Check the schedule for concerts and events held at the palace throughout the year.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U7 to Richard-Wagner-Platz. Bus: M45 or 309 to Schloss Charlottenburg.",
        openingHours: "Varies by season, check website.",
        cost: "Moderate (€12-€17)",
        website: "spsg.de/en/palaces-gardens/object/charlottenburg-palace-old-palace/"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Moderate Adventure",
        interests: ["history", "architecture", "art"],
        costLevel: "Moderate",
        seasonalBest: "Spring",
        photoOpportunity: "Palace gardens and Neuer Flügel",
        insiderTip: "Check the schedule for concerts and events.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Partially accessible, check website for details."
      }
      },
        {
        name: "Tempelhofer Feld",
        description: `## Overview
Tempelhofer Feld is a former airport turned public park, offering a unique urban green space for recreation and relaxation. Run, bike, skate, or simply relax on the vast open fields. It's a favorite spot for locals to escape the city bustle. This airport is definitely something that you should explore!

### Activities and Events
The park hosts a variety of events throughout the year, including kite festivals, concerts, and farmers' markets. There are designated areas for grilling, gardening, and birdwatching. Bring a picnic basket and enjoy a relaxing day outdoors.

### Insider Tips
Rent a bike and explore the entire park. Visit the community gardens to see local residents growing their own food. Check the event calendar for upcoming activities. Avoid visiting on extremely windy days, as the open fields can be quite exposed.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U6 to Tempelhof. S-Bahn: S41, S42, S45, S46 to Tempelhof.",
        openingHours: "Varies by season, generally sunrise to sunset.",
        cost: "Free",
        website: "gruen-berlin.de/en/tempelhofer-feld/"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "recreation"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Vast open fields and unique perspectives of the city",
        insiderTip: "Rent a bike to explore the entire park.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Ristorante A Mano",
        description: `## Overview
Ristorante A Mano is a highly regarded Italian restaurant that brings authentic flavors of Italy to the heart of Berlin. With a cozy ambiance and an extensive menu of classic Italian dishes, it's the perfect place to savor a delicious meal. The prices are moderate and worth the cost.

### Dining Atmosphere
The restaurant features a warm and inviting atmosphere, with exposed brick walls, rustic wooden tables, and soft lighting. The open kitchen allows diners to watch the chefs at work, adding to the overall dining experience.

### Culinary Highlights
Start with the burrata, which is a fresh and creamy appetizer. The homemade pasta dishes are a must-try, especially the ravioli with truffle sauce. For mains, the osso buco is a popular choice. The restaurant offers an extensive wine list to complement your meal. Expect to pay around €25-€40 per person. They are open daily from 6 PM to 12 AM. Reservations are recommended.`,
        practicalInfo: {
        howToGetThere: "U-Bahn: U8 to Rosenthaler Platz.",
        openingHours: "Daily 6:00 PM - 12:00 AM",
        cost: "Moderate (€25-€40)",
        website: "ristorante-a-mano.de/"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "culinary", "italian cuisine"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the rustic Italian atmosphere of the restaurant",
        insiderTip: "Make a reservation in advance.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Berlin

Navigating Berlin is relatively easy thanks to its comprehensive public transportation system and well-maintained infrastructure. Whether you prefer the convenience of public transport or the freedom of cycling, Berlin offers a variety of options to suit your needs.

### Public Transport
Berlin's public transport network includes U-Bahn (subway), S-Bahn (suburban train), trams, and buses. The BVG (Berliner Verkehrsbetriebe) operates the system, and tickets can be purchased at machines in stations or via the BVG app. Consider purchasing a day ticket or a tourist pass for unlimited travel within specified zones. It's an extensive transit system to use while visiting Berlin.

### Taxis & Rideshare
Taxis are readily available throughout Berlin, and rideshare services like Uber are also popular. While convenient, these options can be more expensive than public transport, especially during peak hours. Be sure to check the estimated fare before booking a ride. There are plenty of taxis if you are out and about in the area.

### Walking & Cycling
Berlin is a very walkable city, and many of its attractions are located within close proximity to each other. Cycling is also a popular option, with dedicated bike lanes and rental services available throughout the city. Consider renting a bike to explore the city at your own pace.`,
        whereToStay: `## Where to Stay in Berlin

Berlin offers a wide range of accommodation options to suit every budget and preference. From luxury hotels to budget-friendly hostels, you'll find the perfect place to call home during your visit. There are many options to choose from.

### Best Areas
For a central location with easy access to attractions, consider staying in Mitte or Prenzlauer Berg. These areas offer a mix of hotels, apartments, and guesthouses. For a more trendy and vibrant atmosphere, explore Kreuzberg or Neukölln. If you're looking for a quieter and more residential area, Charlottenburg or Wilmersdorf might be a good fit.

### Luxury Options
The Regent Berlin and Hotel de Rome are two of the city's most luxurious hotels, offering impeccable service and stunning amenities. These hotels are located in prime locations and offer a truly unforgettable experience.

### Budget-Friendly
For budget-conscious travelers, hostels and guesthouses are a great option. The EastSeven Berlin Hostel and The Circus Hotel are two popular choices, offering clean and comfortable accommodation at affordable prices.`,
        bestTimeToVisit: `## Best Time to Visit Berlin

The best time to visit Berlin depends on your preferences and priorities. Each season offers a unique experience, with its own set of advantages and disadvantages. Here is a look at each season. 

### Peak Season
The peak tourist season in Berlin is during the summer months (June-August), when the weather is warm and sunny. However, this is also the busiest and most expensive time to visit. Expect larger crowds and higher prices for accommodation and flights.

### Weather Overview
Berlin has a temperate climate, with warm summers and cold winters. The average temperature in July is around 20°C (68°F), while the average temperature in January is around 0°C (32°F). Spring and autumn offer pleasant temperatures and fewer crowds.

### Local Events
Berlin hosts a variety of events throughout the year, including the Berlin International Film Festival in February, the Gallery Weekend in April, and the Berlin Marathon in September. Check the event calendar before you travel to see if there are any events that interest you.`,
        suggestedItinerary: `## Suggested Berlin Itinerary

Here is a suggested itinerary for a three-day trip to Berlin, covering the city's major attractions and hidden gems. This will make sure you see some of the best things to do in Berlin. Of course, you can customize this trip.

### Day 1
Start your day with a visit to the Brandenburg Gate and the Reichstag Building. Take a walk through the Tiergarten and visit the Memorial to the Murdered Jews of Europe. In the afternoon, explore Museum Island and visit the Pergamon Museum. In the evening, enjoy dinner in the Hackesche Höfe.

### Day 2
Visit the East Side Gallery and learn about the history of the Berlin Wall. Explore the trendy neighborhood of Kreuzberg and visit the Checkpoint Charlie Museum. In the afternoon, take a boat tour on the Spree River. In the evening, enjoy dinner in the Prenzlauer Berg.

### Day 3
Visit Charlottenburg Palace and explore its beautiful gardens. Take a walk through the Tempelhofer Feld, a former airport turned public park. In the afternoon, visit the Berlin Television Tower for panoramic views of the city. In the evening, enjoy a final meal in one of Berlin's many delicious restaurants.`
      }}
      faqs={[
        {
        question: "What are some things to do in Berlin?",
        answer: `Berlin offers a wide range of attractions, including the Brandenburg Gate, the East Side Gallery, Museum Island, the Memorial to the Murdered Jews of Europe, and Charlottenburg Palace. Don't forget to try Currywurst and explore the city's vibrant neighborhoods.`
      },
        {
        question: "How many days do you need in Berlin?",
        answer: `A minimum of three days is recommended to see the major attractions in Berlin. However, to fully explore the city's diverse neighborhoods and hidden gems, you might consider spending four or five days.`
      },
        {
        question: "What is Berlin famous for?",
        answer: `Berlin is famous for its rich history, iconic landmarks, vibrant arts scene, and diverse culture. It's also known for its role in the Cold War and the fall of the Berlin Wall.`
      },
        {
        question: "When is the best time to visit Berlin?",
        answer: `The best time to visit Berlin is during the spring (April-May) or autumn (September-October) for pleasant weather and fewer crowds. Summer (June-August) is also popular, but it can be crowded and expensive.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Historical, Vibrant, Edgy",
        budgetBreakdown: {
          freeActivities: "Visiting the East Side Gallery,Exploring Tempelhofer Feld,Walking through the Brandenburg Gate,Reflecting at the Memorial to the Murdered Jews of Europe",
          budgetFriendly: "Currywurst (€3-€5),Public transport day ticket (€8.80),Museum admission (€8-€12),Street food market (€5-€15)",
          splurgeWorthy: "Fine dining experience (€50+ per person),Luxury hotel stay (€200+ per night)"
        },
        localSecrets: ["Visit the Brandenburg Gate on Tuesdays at 8:30 AM when fewer tour groups are present. Enter from Ebertstraße instead of Pariser Platz to avoid crowds.", "Purchase a 'BVG 24-Stunden-Karte' (24-hour ticket) using the BVG Fahrinfo app, download before travelling and check if the zone matches your needs. Platform etiquette: let people off before boarding and offer your seat to elderly people.", "Expect to spend approximately €45-60 per day: €15-20 for meals (breakfast €5, lunch €10, dinner €20-25), €9 for transport, €15-20 for attractions, and €5 for miscellaneous expenses like snacks or drinks.", "Visit the Turkish Market at Maybachufer (Tuesdays and Fridays) for affordable produce, fabrics, and snacks. Bargain respectfully by offering a slightly lower price, but be mindful of the vendor's livelihood. Try the Gözleme (Turkish flatbread).", "Avoid the restaurants immediately surrounding Checkpoint Charlie, which are overpriced and offer mediocre food. Instead, walk a few blocks to Zimmerstraße and try a local restaurant or cafe for a more authentic experience.", "The 'Festival of Lights' takes place every October, transforming Berlin's landmarks into stunning light displays. Be aware that it significantly increases tourist presence, leading to longer queues and crowded attractions. Check the exact dates and locations beforehand on festivaloflights.de."],
        diningHighlights: {
          mustTryDishes: "Currywurst,Döner Kebab,Berliner Pfannkuchen (jelly-filled doughnut),Schnitzel",
          bestCafes: "Café Neues Ufer: Viennese-style coffeehouse with a cozy atmosphere.,The Barn: Specialty coffee roaster with multiple locations.,Distrikt Coffee: Known for its expertly brewed coffee and brunch options.",
          topRestaurants: "Ristorante A Mano: Authentic Italian cuisine with a cozy ambiance.,Nobelhart & Schmutzig: Michelin-starred restaurant serving innovative German cuisine.,Mustafas Gemuese Kebab: Extremely famous Doner Kebab. Expect very long lines.",
          foodMarkets: "Markthalle Neun: Indoor food market with diverse culinary offerings.,Turkish Market at Maybachufer: Outdoor market with produce, fabrics, and snacks.",
          diningTips: "Tipping is customary in Berlin, typically around 5-10% of the bill.,Reservations are recommended for popular restaurants, especially on weekends.,Many restaurants offer a 'Mittagstisch' (lunch menu) with discounted prices."
        },
        seasonalHighlights: {
          spring: "The city comes alive with blooming flowers and outdoor events. The weather is pleasant, and the crowds are smaller than in summer.",
          summer: "Warm weather and long days make it perfect for exploring the city's parks and outdoor attractions. Expect larger crowds and higher prices.",
          fall: "The leaves change color, creating a beautiful landscape. The weather is mild, and there are fewer tourists than in summer.",
          winter: "The city transforms into a winter wonderland with Christmas markets and festive events. The weather is cold, but the atmosphere is magical."
        },
        quickFacts: {
          totalAttractions: "11",
          freeActivities: "5",
          averageTimePerAttraction: "30-60 minutes",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};