import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Milan: React.FC = () => {
  return (
    <CityPage
      cityName="Milan"
      country="Italy"
      title={"15 Best Things to Do in Milan, Italy (2025 Guide)"}
      description={`Planning a trip and wondering about the best things to do in Milan? You're in the right place! Milan, a global capital of fashion and design, offers a blend of historical landmarks, modern architecture, and of course, incredible food. This guide highlights the top attractions and hidden gems that even some locals might not know about. We'll explore everything from iconic cathedrals to world-class museums, and, perhaps most importantly, the best places to indulge in authentic Italian cuisine. When considering things to do in Milan, remember to pace yourself; there's a lot to take in. This guide is designed to help you plan the perfect Milan itinerary, whether you're here for a weekend or a longer stay. So, let's dive in and discover the magic of Milan!`}
      imageUrl={"https://plus.unsplash.com/premium_photo-1715075305614-e9258ad8c118?auto=format&fit=crop&w=1400&fm=webp&q=80"}
      galleryImages={[
      ]}
      highlights={["Marvel at the Duomo di Milano.",
        "Witness Da Vinci's 'The Last Supper'.",
        "Explore the Galleria Vittorio Emanuele II.",
        "Catch an opera at Teatro alla Scala.",
        "Wander through the Brera district."]}
      attractions={[
        {
        name: "Duomo di Milano",
        description: `## Overview
The Duomo di Milano is the city's iconic cathedral, a breathtaking example of Gothic architecture. Construction began in the 14th century and continued for nearly 600 years! The sheer scale and intricate details of the facade are truly awe-inspiring. Inside, you'll find stunning stained glass windows, elaborate sculptures, and a sense of grandeur that's hard to match. It's certainly one of the must-see places in Milan.

### Best Photo Spots
For stunning photos, head to the rooftop at sunset for panoramic views of the city. The spires and statues silhouetted against the colorful sky make for a magical photo opportunity. Another great spot is the Piazza del Duomo itself, especially early in the morning before the crowds arrive.

### Insider Tips
Tip: Book your tickets online in advance to avoid long queues. Consider a guided tour to learn more about the cathedral's history and art. It's worth the climb (or elevator ride) to the rooftop for unparalleled views. Be sure to dress respectfully; shoulders and knees must be covered.`,
        practicalInfo: {
        howToGetThere: "Metro: Duomo station (lines M1, M3)",
        openingHours: "Daily, 9:00 AM - 7:00 PM (rooftop closes earlier)",
        cost: "Cathedral: €5, Rooftop: €15 (stairs), €20 (elevator)",
        website: "duomomilano.it"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "art", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Rooftop views at sunset",
        insiderTip: "Arrive early (around 9:00 AM) or late afternoon to avoid the biggest crowds and long queues for entry. Book tickets online to skip the line.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Elevator access to the rooftop is available for a higher price."
      }
      },
        {
        name: "Santa Maria delle Grazie & The Last Supper",
        description: `## Overview
Santa Maria delle Grazie is a church and Dominican convent, a UNESCO World Heritage site, but the main draw is Leonardo da Vinci's 'The Last Supper' ('Il Cenacolo'). This iconic fresco is housed in the refectory, and seeing it in person is a truly unforgettable experience. The masterpiece is incredibly detailed, and its preservation is remarkable, considering its age.

### What to Expect
Visiting 'The Last Supper' requires advance booking, sometimes months in advance. You'll only have 15 minutes to view the fresco, so make the most of it. Photography is not allowed inside the refectory.

### Insider Tips
Tip: Book tickets online well in advance (at least 2-3 months) at vivaticket.it. If you can't find tickets, try calling the reservation center directly. Sometimes, last-minute cancellations are available. Be sure to arrive 30 minutes before your scheduled entry time for security checks.`,
        practicalInfo: {
        howToGetThere: "Metro: Conciliazione or Cadorna (lines M1, M2)",
        openingHours: "Tuesday - Sunday, 8:15 AM - 7:00 PM (reservations required)",
        cost: "€15 (includes reservation fee)",
        website: "vivaticket.it"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "religion"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "The exterior of Santa Maria delle Grazie",
        insiderTip: "Join a guided tour specifically focused on "The Last Supper" to fully appreciate the historical context and artistic details that you might miss during the short viewing time.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Galleria Vittorio Emanuele II",
        description: `## Overview
The Galleria Vittorio Emanuele II is a stunning 19th-century shopping arcade located next to the Duomo. It's one of the world's oldest active shopping malls and a major landmark of Milan. The architecture is incredible, with a glass-domed roof and ornate decorations. Even if you're not planning on shopping, it's worth a visit just to admire the beauty of this place. It's certainly one of the top attractions in Milan.

### Best Photo Spots
The best photo spot is definitely under the central dome, looking up. The intricate mosaics and the light filtering through the glass create a magical effect. Also, be sure to capture the mosaics on the floor, including the famous bull. Some say if you spin around on the bull's mosaic three times with your heel, it will bring you good luck!

### Insider Tips
Tip: Visit early in the morning before the shops open to avoid the crowds and have the Galleria all to yourself for some great photos. Consider having an aperitivo at one of the cafes for a truly Milanese experience.`,
        practicalInfo: {
        howToGetThere: "Metro: Duomo station (lines M1, M3)",
        openingHours: "Open 24/7 (shops have varying hours)",
        cost: "Free (window shopping!)",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["architecture", "shopping", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Looking up at the central dome",
        insiderTip: "Find the Turin bull mosaic on the floor and spin around on its... well, *you know*... for good luck! This is a local tradition, and you'll likely see others doing it. (Watch out for pickpockets, though!)",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Teatro alla Scala",
        description: `## Overview
Teatro alla Scala is one of the most famous opera houses in the world. Attending a performance here is a truly special experience, but even if you're not an opera fan, a tour of the theater is well worth it. You'll learn about the history of the theater, see the opulent auditorium, and maybe even catch a glimpse of a rehearsal.

### What to Expect
Dressing up is encouraged if you're attending a performance, although it's not strictly required. Tours are available during the day, but check the schedule in advance as they may be canceled due to rehearsals or performances.

### Insider Tips
Tip: Book tickets for performances well in advance, especially for popular operas. Consider taking a guided tour of the theater to learn about its history and see the backstage areas. Try to dress smartly if attending a show to really fit the atmosphere. You can find discounted tickets by checking the box office on the day of the performance, but availability is not guaranteed.`,
        practicalInfo: {
        howToGetThere: "Metro: Duomo or Cordusio (lines M1, M3)",
        openingHours: "Tours: Daily, 9:00 AM - 12:30 PM, 1:30 PM - 6:00 PM (check schedule online)",
        cost: "Tours: €9, Performances: Varies",
        website: "teatroallascala.org"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["music", "history", "architecture", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "The exterior of Teatro alla Scala",
        insiderTip: "Check the "Last Minute Tickets" section on the Teatro alla Scala website the day before or the morning of a performance. Heavily discounted tickets are often released for unsold seats!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Brera District",
        description: `## Overview
The Brera district is a charming neighborhood known for its artistic vibe, narrow cobblestone streets, and boutique shops. It's a great place to wander around, soak up the atmosphere, and discover hidden gems. You'll find art galleries, antique shops, cafes, and restaurants. The Pinacoteca di Brera, a major art museum, is also located in this district.

### What to Expect
Brera is a popular spot for both locals and tourists, so it can get crowded, especially in the evening. It's a great place to have dinner or aperitivo, but be sure to make reservations in advance.

### Insider Tips
Tip: Explore the side streets and alleys to discover hidden courtyards and art galleries. Visit the Pinacoteca di Brera for a dose of art and culture. Consider having dinner at one of the traditional trattorias in the area. Don't miss the Brera Botanical Garden, a peaceful oasis in the heart of the city.`,
        practicalInfo: {
        howToGetThere: "Metro: Lanza or Moscova (line M2)",
        openingHours: "Varies by shop/restaurant",
        cost: "Free (to wander)",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["art", "shopping", "food", "culture", "walking"],
        costLevel: "Moderate",
        seasonalBest: "Spring, Fall",
        photoOpportunity: "Cobblestone streets and charming buildings",
        insiderTip: "Wander along Via Fiori Chiari on a Sunday morning. It transforms into a vibrant open-air art market where local artists display and sell their work directly – a great opportunity to find unique souvenirs.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Cobblestone streets may be challenging for wheelchairs."
      }
      },
        {
        name: "Navigli District",
        description: `## Overview
The Navigli district is known for its canals, which were once used for transportation and trade. Today, the canals are lined with bars, restaurants, and shops, making it a popular spot for nightlife and aperitivo. It's a lively and vibrant area, especially in the evening.

### What to Expect
The Navigli district can get very crowded in the evening, especially on weekends. Be prepared for a lively and noisy atmosphere.

### Insider Tips
Tip: Take a boat tour along the canals to see the district from a different perspective. Visit the Navigli Grande, the main canal, for the best views. Enjoy an aperitivo at one of the bars along the canal and sample the local snacks. Explore the Vicolo dei Lavandai, a historic laundry alley.`,
        practicalInfo: {
        howToGetThere: "Metro: Porta Genova (line M2)",
        openingHours: "Varies by shop/restaurant",
        cost: "Free (to wander)",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["nightlife", "food", "walking", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Summer",
        photoOpportunity: "Canals at sunset",
        insiderTip: "On the last Sunday of each month, the Navigli Grande hosts a huge antiques market. Arrive early (around 9 AM) for the best finds and be prepared to bargain!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some areas may have uneven surfaces."
      }
      },
        {
        name: "Pasticceria Marchesi",
        description: `## Overview
Pasticceria Marchesi is a historic cafe and pastry shop dating back to 1824. It's an institution in Milan, known for its elegant atmosphere, delicious pastries, and excellent coffee. There are a few locations around the city, but the original one on Via Santa Maria alla Porta is the most iconic. If you're looking for a quintessential Milanese cafe experience, this is the place to go. It's a great spot to grab a coffee and a pastry, people-watch, and soak up the atmosphere.

### What to Expect
Expect a sophisticated and refined atmosphere. The pastries are beautifully presented, and the coffee is expertly made. Prices are on the higher side, but the quality and experience are worth it.

### Insider Tips
Tip: Try the panettone, a traditional Milanese sweet bread, especially during the Christmas season. Also, be sure to sample the chocolate selection; it's divine. Consider visiting during off-peak hours to avoid the crowds. It's the kind of place you might linger longer than expected.`,
        practicalInfo: {
        howToGetThere: "Various locations, see website for details",
        openingHours: "Varies by location, generally 7:30 AM - 9:00 PM",
        cost: "Moderate",
        website: "pasticceriamarchesi.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "pastries", "cafe", "culinary"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Elegant pastries and coffee presentation",
        insiderTip: "At the original Marchesi location, ask the staff if you can see the antique cash register – it's a beautiful piece of history that they are often happy to show patrons.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Ristorante Nabucco",
        description: `## Overview
Ristorante Nabucco, located in the heart of Brera, offers traditional Milanese cuisine in a charming and romantic setting. With exposed brick walls and soft lighting, it's the perfect place for a special occasion or a quiet dinner. This eatery is one of Brera's hidden gems, serving up classic dishes with a modern twist.

### Culinary Delights
Don't miss the risotto alla Milanese, a creamy saffron-infused rice dish that's a local specialty. The cotoletta alla Milanese, a breaded veal cutlet, is also a must-try. Be sure to pair your meal with a bottle of local wine.

### Practical Information
Reservations are highly recommended, especially on weekends. The price range is moderate to expensive, but the quality of the food and the ambiance make it worth the splurge.`,
        practicalInfo: {
        howToGetThere: "Metro: Lanza or Moscova (line M2)",
        openingHours: "Daily, 12:30 PM - 2:30 PM, 7:30 PM - 11:00 PM",
        cost: "Moderate",
        website: "ristorantenabucco.it"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "cuisine", "restaurant", "romantic"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "The restaurant's exterior at night",
        insiderTip: "Ask for a table outside on the small patio. Although small, it provides a much more intimate and less noisy dining experience than inside the restaurant.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible with assistance."
      }
      },
        {
        name: "Mercato Centrale Milano",
        description: `## Overview
Mercato Centrale Milano is a vibrant food market located inside the Milan Central Station. It offers a wide variety of food stalls, from pizza and pasta to sushi and gelato. It's a great place to sample different cuisines, try local specialties, and grab a quick bite to eat. This culinary hub is a great place for foodies wanting to explore Milanese food culture.

### What to Expect
The market can get very crowded, especially during lunchtime. Be prepared for a lively and bustling atmosphere. It's a great place to people-watch and soak up the local culture. There is ample seating available to relax and enjoy your culinary finds.

### Insider Tips
Tip: Try the arancini (fried rice balls) from one of the Sicilian stalls. Also, be sure to sample the gelato; there are several artisan gelato makers in the market. Consider visiting during off-peak hours to avoid the crowds.`,
        practicalInfo: {
        howToGetThere: "Metro: Centrale FS (lines M2, M3)",
        openingHours: "Daily, 8:00 AM - 12:00 AM",
        cost: "Budget-friendly",
        website: "mercatocentrale.it/milano/"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "market", "cuisine", "culinary", "budget-friendly"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "The market's bustling interior",
        insiderTip: "Head to the market at around 11 AM during the week to beat the lunch rush crowd. That way you have more access to different vendors and food options.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Milan

Milan has an excellent public transportation system, making it easy to get around the city. The metro is the most efficient way to travel, with four lines covering most of the major attractions. Buses and trams are also available, but they can be slower due to traffic. Consider purchasing a day pass or a multi-day pass for unlimited travel on public transport.

### Public Transport
The Milan Metro (ATM) is efficient and reliable. A single ticket costs €2.20 and is valid for 90 minutes. A day pass costs €7.60 and is valid for 24 hours. Consider purchasing a MilanoCard for discounts on attractions and public transport.

### Taxis & Rideshare
Taxis are readily available, but they can be expensive. Rideshare services like Uber are also available. Be sure to use official taxi stands to avoid scams. It's important to know, though, that traffic in Milan can be quite heavy, especially during peak hours.`,
        whereToStay: `## Where to Stay in Milan

Milan offers a wide range of accommodation options, from luxury hotels to budget-friendly hostels. The best area to stay depends on your interests and budget. The city center is the most convenient location, but it can also be the most expensive. The Brera district is a good option for those looking for a charming and artistic atmosphere. The Navigli district is a great choice for nightlife and entertainment.

### Best Areas
The city center (Duomo area) is the most convenient for sightseeing. Brera is a charming and artistic neighborhood. Navigli is known for its canals and nightlife. Porta Venezia is a multicultural area with a good selection of restaurants and shops.

### Budget-Friendly
For budget-friendly options, consider staying in the Porta Venezia or Città Studi areas. Hostels and budget hotels are available in these areas.`,
        bestTimeToVisit: `## Best Time to Visit Milan

The best time to visit Milan is during the spring (April-May) or fall (September-October). The weather is mild and pleasant, and the crowds are smaller than in the summer. Summer (June-August) can be hot and humid, but it's a great time to enjoy outdoor activities and events. Winter (November-March) can be cold and rainy, but it's also a good time to find deals on accommodation and flights.

### Peak Season
The peak tourist season is from June to August, so expect larger crowds and higher prices during these months. If you're planning to visit during this time, be sure to book your accommodation and flights well in advance.

### Weather Overview
Spring and fall offer pleasant weather with average temperatures ranging from 15°C to 25°C (59°F to 77°F). Summer can be hot and humid, with average temperatures ranging from 25°C to 35°C (77°F to 95°F). Winter can be cold and rainy, with average temperatures ranging from 0°C to 10°C (32°F to 50°F).`,
        suggestedItinerary: `## Suggested Milan Itinerary

Here's a suggested itinerary for a 3-day trip to Milan. Feel free to adjust it based on your interests and time.

### Day 1
Start your day with a visit to the Duomo di Milano. Climb to the rooftop for panoramic views of the city. After visiting the Duomo, head to the Galleria Vittorio Emanuele II for some window shopping. In the afternoon, visit the Teatro alla Scala. In the evening, enjoy dinner in the Brera district.

### Day 2
Visit Santa Maria delle Grazie to see Leonardo da Vinci's 'The Last Supper'. Be sure to book your tickets in advance. In the afternoon, explore the Sforza Castle and its museums. In the evening, enjoy an aperitivo in the Navigli district.

### Day 3
Visit the Pinacoteca di Brera art museum. In the afternoon, go shopping in the fashion district (Via Montenapoleone). In the evening, enjoy a final Milanese dinner at Ristorante Nabucco.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Milan?",
        answer: `Milan offers a variety of attractions, including the Duomo, 'The Last Supper', the Galleria Vittorio Emanuele II, Teatro alla Scala, and the Brera district. It's also a great city for shopping and dining.`
      },
        {
        question: "How many days do you need in Milan?",
        answer: `Ideally, you should spend at least 3 days in Milan to see the main attractions and experience the city's atmosphere. If you're interested in shopping or exploring the surrounding areas, you may want to stay longer.`
      },
        {
        question: "What is Milan famous for?",
        answer: `Milan is famous for being a global fashion capital, its historical landmarks such as the Duomo, and Leonardo da Vinci's 'The Last Supper'.`
      },
        {
        question: "When is the best time to visit Milan?",
        answer: `The best time to visit Milan is during the spring (April-May) or fall (September-October) when the weather is mild and the crowds are smaller.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Fashionable, sophisticated, vibrant",
        budgetBreakdown: {
          freeActivities: "Wander through the Galleria Vittorio Emanuele II,Visit the Basilica di Sant'Ambrogio,Explore the Sempione Park,Stroll along the Navigli canals",
          budgetFriendly: "Visit the Pinacoteca di Brera (€15),Enjoy an aperitivo (€10-€15),Take a bike tour (€30),Visit the Cimitero Monumentale (€0)",
          splurgeWorthy: "Attend an opera at Teatro alla Scala (from €50),Stay in a luxury hotel (from €300 per night)"
        },
        localSecrets: ["To see the Duomo without the massive crowds, go on Tuesdays at 8:30 AM. Enter through the south side entrance on Via Arcivescovado, which is usually less congested than the main entrance.", "Instead of the tourist trap MilanoCard, purchase a 'Biglietto giornaliero' day pass for €7.60, valid for 24 hours on all ATM transport. Download the 'ATM Milano Official App' for real-time bus/tram tracking. As a courtesy, allow elderly passengers priority seating on buses and trams.", "A realistic budget for 3 days in Milan is €45-60 per day, excluding accommodation. This includes: Lunch (€15), Dinner (€20), Transportation (€7.60 day pass), and one attraction (€10-15).", "Skip the overpriced shops in the fashion district. Instead, head to the Isola district, specifically Via Paolo Sarpi, for authentic Chinese goods, spices, and textiles at bargain prices. Bargaining is accepted in most smaller shops – start by offering 70% of the asking price.", "Avoid eating near the Duomo or Galleria. These areas are packed with tourist traps like 'Spizzico' pizza. A better alternative is 'Luini' (Via Santa Radegonda, 16) for delicious and cheap Panzerotti, a local favorite.", "During Milan Fashion Week (February/September), the city is incredibly crowded and expensive. However, if you're an art lover, 'Artigiano in Fiera' (December) at Fieramilano Rho is a massive event to explore and buy handcrafted goods. Check dates online as they change annually."],
        diningHighlights: {
          mustTryDishes: "Risotto alla Milanese,Cotoletta alla Milanese,Panettone,Ossobuco",
          bestCafes: "Pasticceria Marchesi: Historic cafe with elegant atmosphere and delicious pastries.,Caffè Napoli: Known for its traditional Neapolitan coffee and pastries.",
          topRestaurants: "Ristorante Nabucco: Traditional Milanese cuisine in a romantic setting.,Trattoria Torre di Pisa: Tuscan cuisine in a rustic atmosphere.",
          foodMarkets: "Mercato Centrale Milano: A vibrant food market with a wide variety of stalls.,East Market Milano: Vintage & Design Market",
          diningTips: "Tipping is not customary in Milan, but you can round up the bill as a sign of appreciation. Making reservations is recommended, especially for dinner. A "coperto" or cover charge is standard."
        },
        seasonalHighlights: {
          spring: "Pleasant weather, blooming flowers, and outdoor events.",
          summer: "Hot weather, outdoor concerts, and Aperitivo season.",
          fall: "Mild weather, harvest festivals, and vibrant foliage.",
          winter: "Cold weather, Christmas markets, and festive atmosphere."
        },
        quickFacts: {
          totalAttractions: "9",
          freeActivities: "4",
          averageTimePerAttraction: "30-60 minutes",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};