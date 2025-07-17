import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Milan: React.FC = () => {
  return (
    <CityPage
      cityName="Milan"
      country="Italy"
      title={"Things to Do in Milan, Italy (2025 Guide)"}
      description={`Discover things to do in Milan — top attractions, hidden gems, and food spots. Complete Milan travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?w=500&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Duomo di Milano, a magnificent cathedral.",
        "Explore Galleria Vittorio Emanuele II, a stunning shopping arcade.",
        "See Leonardo da Vinci's 'The Last Supper'.",
        "Wander through the Brera district, known for its art galleries.",
        "Catch a performance at Teatro alla Scala, a world-renowned opera house."]}
      attractions={[
        {
        name: "Duomo di Milano",
        description: `## Overview
The Duomo di Milano is, without a doubt, one of the most impressive cathedrals in the world. Its Gothic architecture, intricate details, and stunning rooftop views make it a must-see. Construction began in 1386 and took nearly six centuries to complete, resulting in a fascinating blend of architectural styles.

### Best Photo Spots
For the best photo opportunities, head to the rooftop. From there, you'll have panoramic views of the city and can capture the Duomo's spires against the skyline. Sunset is a particularly beautiful time to visit for photos. Also, the Piazza del Duomo provides a great vantage point for capturing the entire facade.

### Insider Tips
Tip: Consider booking your rooftop access tickets online in advance to avoid long queues. The lines can be quite long, especially during peak season. Also, be aware of the dress code: shoulders and knees must be covered to enter the Duomo.`,
        practicalInfo: {
        howToGetThere: "Metro lines M1 and M3, Duomo station",
        openingHours: "Daily, 8:00 AM - 7:00 PM (rooftop closes earlier)",
        cost: "€3 - €20 depending on access options",
        website: "duomomilano.it"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "art", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Rooftop views and facade details",
        insiderTip: "Visit early in the morning (around 8:00 AM) to avoid the biggest crowds and have a more peaceful experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Elevator access to the rooftop is available"
      }
      },
        {
        name: "Galleria Vittorio Emanuele II",
        description: `## Overview
Located next to the Duomo, the Galleria Vittorio Emanuele II is a stunning 19th-century shopping arcade. Its impressive glass dome, intricate mosaics, and high-end boutiques make it a feast for the eyes, even if you're not planning to shop. It's a popular spot for both locals and tourists, and you can't help but be impressed by the sheer grandeur of the place.

### Best Photo Spots
The central octagon, beneath the glass dome, is the most popular spot for photos. Be sure to look up to capture the dome's intricate details. The mosaics on the floor are also worth photographing. At night, the Galleria is beautifully illuminated.

### Insider Tips
Tip: Spin around on the bull mosaic under the central dome for good luck, some say. Also, consider visiting during off-peak hours (early morning or late evening) to avoid the crowds. Many of the cafes offer outdoor seating, which is a great way to soak in the atmosphere.`,
        practicalInfo: {
        howToGetThere: "Metro lines M1 and M3, Duomo station",
        openingHours: "Open 24/7 (shops have varying hours)",
        cost: "Free",
        website: "null"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["architecture", "shopping", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Glass dome and mosaics",
        insiderTip: "Grab an early morning coffee at one of the cafes for a more authentic experience before the tourist crowds arrive.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible"
      }
      },
        {
        name: "Teatro alla Scala",
        description: `## Overview
Teatro alla Scala is one of the world's most famous opera houses. If you're a fan of opera or ballet, seeing a performance here is an unforgettable experience. Even if you're not, a tour of the theater is a fascinating way to learn about its history and architecture. The acoustics are said to be unparalleled.

### Best Photo Spots
The opulent interior of the theater is the main photo opportunity. If you're taking a tour, you'll have a chance to capture the grandeur of the auditorium and stage. Check for tours that allow photography.

### Insider Tips
Tip: Book your tickets well in advance, especially for popular performances. If you can't get tickets to a show, consider a guided tour of the theater. The tours are usually available in multiple languages.`,
        practicalInfo: {
        howToGetThere: "Metro lines M1 and M3, Duomo station",
        openingHours: "Varies depending on performances and tours",
        cost: "€9 for museum, performance tickets vary",
        website: "teatroallascala.org"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["culture", "music", "architecture", "history"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Theater interior and stage",
        insiderTip: "Consider attending a performance during the off-season for potentially lower ticket prices and fewer crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible seating available"
      }
      },
        {
        name: "Santa Maria delle Grazie & The Last Supper",
        description: `## Overview
Home to Leonardo da Vinci's masterpiece, 'The Last Supper,' Santa Maria delle Grazie is a must-see for art lovers. The church itself is a beautiful example of Gothic architecture, but the main draw is undoubtedly the world-famous fresco. Seeing it in person is a truly moving experience. Be prepared for timed entry and strict rules.

### Best Photo Spots
Photography of 'The Last Supper' itself is strictly prohibited, but you can take photos of the church's exterior and the surrounding area. The cloister is a peaceful spot for reflection and picture-taking.

### Insider Tips
Tip: Book your tickets to see 'The Last Supper' months in advance, as they sell out very quickly. You'll only have a limited time (usually 15 minutes) to view the fresco. Also, note that the temperature inside the refectory is carefully controlled to preserve the artwork.`,
        practicalInfo: {
        howToGetThere: "Metro line M1, Conciliazione station; Tram lines 16",
        openingHours: "Tuesday - Sunday, 8:15 AM - 7:00 PM",
        cost: "€15 + booking fee",
        website: "vivaticket.it"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "history", "religion"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Church exterior and cloister",
        insiderTip: "Check for last-minute ticket releases online, as cancellations sometimes occur. Arrive at least 30 minutes early to allow time for security checks.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility; contact in advance"
      }
      },
        {
        name: "Brera District",
        description: `## Overview
Brera is a charming and bohemian district known for its art galleries, boutiques, and cafes. It's a great place to wander, browse, and soak up the atmosphere. The Pinacoteca di Brera, a major art museum, is located here, as well as many smaller galleries showcasing contemporary art. The area has a relaxed and artistic vibe.

### Best Photo Spots
The narrow, cobbled streets of Brera are perfect for capturing the district's atmosphere. Look for colorful doorways, flower-filled balconies, and charming cafes. The Pinacoteca di Brera also has a beautiful courtyard that's worth photographing.

### Insider Tips
Tip: Visit Brera in the evening, when the streets come alive with people enjoying aperitivo. Many bars offer free snacks with drinks during aperitivo hour (usually from 6:00 PM to 8:00 PM).`,
        practicalInfo: {
        howToGetThere: "Metro line M2, Lanza station; Tram lines 1, 4, 12, 14",
        openingHours: "Varies depending on shops and galleries",
        cost: "Free to wander; museum fees vary",
        website: "null"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["art", "culture", "shopping", "dining"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Cobbled streets and cafes",
        insiderTip: "Explore the side streets off Via Brera for hidden artisan shops and unique boutiques.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some cobblestone streets may be uneven"
      }
      },
        {
        name: "Navigli District",
        description: `## Overview
The Navigli district is known for its canals, vibrant nightlife, and trendy bars and restaurants. It's a popular spot for aperitivo and evening strolls. The canals were originally built for transportation and irrigation, but today they add a unique charm to the area. You'll find everything from traditional trattorias to modern cocktail bars here.

### Best Photo Spots
The best photo opportunities are along the canals, especially at sunset. Capture the reflections of the buildings in the water. The Vicolo dei Lavandai, a historic laundry area, is also a picturesque spot.

### Insider Tips
Tip: Take a canal cruise for a different perspective of the Navigli district. Many cruises are available, ranging from short trips to longer excursions.`,
        practicalInfo: {
        howToGetThere: "Metro line M2, Porta Genova station; Tram lines 2, 9, 10",
        openingHours: "Varies depending on businesses",
        cost: "Free to wander; canal cruises vary in price",
        website: "null"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["nightlife", "dining", "culture", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Spring, Summer, Fall",
        photoOpportunity: "Canals at sunset",
        insiderTip: "Look for live music performances at bars along the canals on weekends.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some areas may be crowded"
      }
      },
        {
        name: "Pasticceria Marchesi",
        description: `## Overview
Pasticceria Marchesi is a historic cafe known for its elegant atmosphere and delicious pastries. It's a perfect spot for a coffee break or a sweet treat. Founded in 1824, it's one of Milan's oldest and most renowned pastry shops. They offer a wide variety of cakes, pastries, chocolates, and traditional Italian sweets.

### What to Expect
Expect a refined and sophisticated atmosphere, with impeccable service and beautifully presented treats. It's a popular spot, so it can get crowded, especially during peak hours. They have multiple locations now, but the original on Via Santa Maria alla Porta is arguably the most charming.

### Insider Tips
Tip: Try their signature Panettone, a traditional Milanese sweet bread, especially during the Christmas season. Their coffee is also excellent. Also, consider purchasing a box of chocolates as a souvenir.`,
        practicalInfo: {
        howToGetThere: "Multiple locations; check website for details",
        openingHours: "Varies depending on location",
        cost: "€5-€15 per person",
        website: "pasticceriamarchesi.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "dessert", "relaxation"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Beautiful pastries and elegant interior",
        insiderTip: "Visit during off-peak hours (mid-morning or mid-afternoon) for a more relaxed experience and shorter queues.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Generally accessible"
      }
      },
        {
        name: "Trattoria Torre di Pisa",
        description: `## Overview
Trattoria Torre di Pisa is a traditional Tuscan restaurant in the heart of Milan. Known for its authentic cuisine and cozy atmosphere, it's a favorite among locals and tourists. The restaurant prides itself on using fresh, seasonal ingredients to create classic Tuscan dishes.

## Culinary Experience
Expect hearty portions of pasta, grilled meats, and seafood. Their Florentine steak is a must-try for meat lovers. The restaurant also has an extensive wine list featuring Tuscan wines. The atmosphere is warm and inviting, making it a perfect spot for a relaxed dinner.

### Insider Tips
Tip: Make a reservation in advance, especially on weekends, as it's a popular spot. Ask for a table in the main dining room for the best atmosphere. Their homemade pasta dishes are highly recommended. Don't miss their desserts, which are amazing.`,
        practicalInfo: {
        howToGetThere: "Via Fiori Chiari, 21/23",
        openingHours: "Daily 12:30 - 2:30 PM, 7:30 - 11:30 PM",
        cost: "€30-€50 per person",
        website: "torredipisa.it"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "cuisine", "restaurant"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Food presentation and cozy interior",
        insiderTip: "Try the 'pappardelle al cinghiale' (pasta with wild boar ragu), a Tuscan specialty not always found on Milanese menus.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some steps to enter"
      }
      },
        {
        name: "Mercato Centrale Milano",
        description: `## Overview
Mercato Centrale Milano is a vibrant food hall located inside the Central Station. It is a culinary hub where you can find a wide variety of Italian specialties, from pizza and pasta to artisanal cheeses and gelato. The atmosphere is lively and bustling, making it a great place to experience Milan's food scene.

## Culinary Experience
Explore a variety of food vendors offering regional specialties. Sample different dishes and enjoy the communal seating areas. It's a great place to try new things and discover local flavors. You can find something for every taste and budget.

### Insider Tips
Tip: Visit during lunchtime for a quick and affordable meal, or in the evening for a more relaxed dining experience. It's a great spot for people-watching.`,
        practicalInfo: {
        howToGetThere: "Piazza Duca d'Aosta, Inside Central Station",
        openingHours: "Daily 11:00 AM - 12:00 AM",
        cost: "€10-€30 per person",
        website: "mercatocentrale.it/milano/"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "market", "dining", "cuisine"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Diverse food stalls and lively atmosphere",
        insiderTip: "Look for the stall selling Lampredotto (a Florentine street food specialty) for a unique culinary adventure.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible"
      }
      },
        {
        name: "Pinacoteca di Brera",
        description: `## Overview
The Pinacoteca di Brera is Milan's premier art gallery, housed in a beautiful palazzo in the Brera district. It boasts an impressive collection of Italian art, particularly Venetian and Lombard paintings. Masterpieces by Raphael, Caravaggio, and Titian are among the highlights. It's an essential stop for art enthusiasts.

### What to Expect
The gallery is well-organized and easy to navigate. Allow at least 2-3 hours to see the main highlights. Audio guides are available to enhance your experience. The courtyard is a peaceful oasis where you can relax and reflect on the art.

### Insider Tips
Tip: Visit on a Sunday, when admission is often reduced or even free. Check the museum's website for current promotions. Also, don't miss the 'Supper at Emmaus' by Caravaggio, one of the gallery's most famous works.`,
        practicalInfo: {
        howToGetThere: "Via Brera, 28",
        openingHours: "Tuesday - Sunday, 8:30 AM - 7:15 PM",
        cost: "€15",
        website: "pinacotecabrera.org"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "history", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Courtyard and famous paintings",
        insiderTip: "If you are short on time, focus on rooms 6, 7, 8 and 9, which contain some of the Pinacoteca's most famous works. Check the second floor rooms for contemporary art.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible"
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Milan

Milan boasts an efficient public transportation system, making it easy to get around the city. Walking is also a great option for exploring the city center, especially the Brera and Navigli districts.

### Public Transport
The Milan Metro is a fast and reliable way to travel to major attractions. The ATM (Azienda Trasporti Milanesi) manages the metro, trams, and buses. Consider purchasing a daily or multi-day travel pass if you plan to use public transport frequently. Download the ATM app for real-time information and route planning.

### Taxis & Rideshare
Taxis are readily available in Milan, but they can be more expensive than public transport. Rideshare services like Uber are also available. Make sure the taxi is licensed and the meter is running. Hail directly or use an app to book.

## Walking & Cycling
Central Milan is very walkable. Cycling is also a great way to see the city, with bike-sharing programs available. Many streets have designated bike lanes.`,
        whereToStay: `## Where to Stay in Milan

Milan offers a wide range of accommodation options, from luxury hotels to budget-friendly hostels. The best area to stay depends on your interests and budget.

### Best Areas
For a central location close to major attractions, consider staying near the Duomo or in the Brera district. The Navigli district is a good choice for nightlife and a more bohemian atmosphere. Porta Venezia offers a more residential feel with good transport links.

### Luxury Options
Luxury hotels can be found near the Duomo and in the Quadrilatero della Moda (fashion district). Expect high-end amenities and impeccable service.

## Budget-Friendly
Budget-friendly options include hostels and smaller hotels located further from the city center, but still well-connected by public transport.`,
        bestTimeToVisit: `## Best Time to Visit Milan

The best time to visit Milan depends on your preferences. Spring and fall offer pleasant weather and fewer crowds, while summer can be hot and crowded. Winter can be cold and rainy, but it's also a festive time with Christmas markets.

### Peak Season
Peak season is generally from May to September, when the weather is warm and sunny. Expect higher prices and more tourists during this time. Book your accommodation and tours in advance.

### Weather Overview
Spring (April-May) and Fall (September-October) offer mild temperatures and fewer rainy days. Summer (June-August) can be hot and humid, with temperatures reaching up to 30°C (86°F). Winter (November-March) is cold and often rainy, with occasional snowfall.

## Local Events
Milan hosts several major events throughout the year, including Milan Fashion Week (February and September) and the Salone del Mobile (furniture fair) in April. Be aware that prices can increase during these events.`,
        suggestedItinerary: `## Suggested Milan Itinerary

Here's a suggested 3-day itinerary for exploring Milan:

### Day 1
Start your day with a visit to the Duomo di Milano. Climb to the rooftop for panoramic views of the city. Afterward, explore the Galleria Vittorio Emanuele II and have lunch at a nearby cafe. In the afternoon, visit Teatro alla Scala. In the evening, enjoy aperitivo in the Brera district.

### Day 2
Visit Santa Maria delle Grazie to see 'The Last Supper' (book well in advance!). Afterwards, explore the Sforza Castle. In the afternoon, visit the Pinacoteca di Brera. In the evening, have dinner in the Navigli district.

### Day 3
Take a day trip to Lake Como, located about an hour from Milan. Explore the charming towns along the lake and enjoy the stunning scenery. Alternatively, spend the day shopping in the Quadrilatero della Moda or exploring other museums in Milan.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Milan?",
        answer: `Some of the best things to do in Milan include visiting the Duomo di Milano, exploring the Galleria Vittorio Emanuele II, seeing 'The Last Supper' at Santa Maria delle Grazie, wandering through the Brera district, and catching a performance at Teatro alla Scala.`
      },
        {
        question: "How many days do you need in Milan?",
        answer: `A 3-day trip is generally sufficient to see the main highlights of Milan. This allows time to visit the major attractions, explore different neighborhoods, and perhaps take a day trip to Lake Como.`
      },
        {
        question: "What is Milan famous for?",
        answer: `Milan is famous for its fashion industry, its iconic Duomo cathedral, its vibrant art scene, and being the home of Leonardo da Vinci's 'The Last Supper'.`
      },
        {
        question: "When is the best time to visit Milan?",
        answer: `The best time to visit Milan is during the spring (April-May) or fall (September-October) when the weather is pleasant and the crowds are smaller.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Stylish, sophisticated, dynamic",
        budgetBreakdown: {
          freeActivities: "Wander through the Galleria Vittorio Emanuele II,Explore the Navigli district canals,Visit the Basilica di Sant'Ambrogio,Walk through Parco Sempione",
          budgetFriendly: "Entry to the Duomo Museum (€3),Aperitivo with snacks (€10-€15),Public transport day pass (€4.50),Pizza slice from a local pizzeria (€5)",
          splurgeWorthy: "A performance at Teatro alla Scala (€50+),Fine dining experience at a Michelin-starred restaurant (€100+ per person)"
        },
        localSecrets: ["Visit the Duomo rooftop on a weekday morning before 10:00 AM for the shortest queues and a more relaxed experience. Enter through the side entrance near the Duomo Museum to avoid the main entrance crowds.", "Purchase the 'ATM ordinary ticket' (€2.20) for single trips on the Milan Metro, or get the 'Daily Ticket' (€7.60) for unlimited travel within 24 hours. Download the 'Citymapper' app for real-time transit information and directions. Avoid using your phone on the lower levels of the metro as it can be pickpocketing risk.", "Expect to spend approximately €45-60 per day on a budget trip. Breakfast (€5), Lunch (€15 at a casual eatery), Dinner (€20 at a trattoria), Transportation (€5), and entry to one attraction (€10).", "Visit the 'Fiera di Sinigaglia' flea market (every Saturday near the Navigli Grande) for vintage clothing, antiques, and unique souvenirs. Bargain respectfully - start by offering 20-30% less than the asking price. Be mindful of your belongings in crowded market areas.", "Avoid the restaurants directly surrounding the Piazza del Duomo, which are often overpriced and cater to tourists. Instead, try 'Luini' (Via Santa Radegonda, 16), known for its delicious Panzerotti (savory fried dough pockets), a local favorite. 'Spontini' is another tourist trap pizza place to avoid for its overpriced pizza slices.", "Attend the 'Oh Bej! Oh Bej!' Christmas market (December 7-10) near the Castello Sforzesco for festive decorations and local crafts. This event can cause delays in transportation around the area, so plan accordingly."],
        diningHighlights: {
          mustTryDishes: "Risotto alla Milanese (saffron risotto),Ossobuco (braised veal shanks),Panettone (sweet bread, especially during Christmas),Cotoletta alla Milanese (breaded veal cutlet)",
          bestCafes: "Pasticceria Marchesi (elegant pastries and coffee),Caffè Napoli (authentic Neapolitan coffee)",
          topRestaurants: "Trattoria Torre di Pisa (traditional Tuscan cuisine),Ristorante Nabucco (refined Italian dining)",
          foodMarkets: "Mercato Centrale Milano (inside Central Station),Fiera di Sinigaglia (flea market with food stalls)",
          diningTips: "Aperitivo is a Milanese tradition, so be sure to try it. Tipping is not mandatory but appreciated for good service. Making reservations is highly recommended for popular restaurants."
        },
        seasonalHighlights: {
          spring: "Pleasant weather makes it ideal for outdoor activities and exploring the city's parks and gardens.",
          summer: "The city comes alive with outdoor events and festivals, but it can be hot and crowded.",
          fall: "The weather is mild, and the city is less crowded, making it a great time to visit museums and art galleries.",
          winter: "The city is festive with Christmas markets and decorations, but it can be cold and rainy."
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