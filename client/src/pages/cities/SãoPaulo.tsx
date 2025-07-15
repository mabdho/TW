import React from 'react';
import { CityPage } from '../../components/CityPage';

export const SãoPaulo: React.FC = () => {
  return (
    <CityPage
      cityName="São Paulo"
      country="Brazil"
      title={"Best Things to Do in São Paulo, Brazil (2025 Guide)"}
      description={`Discover the best things to do in São Paulo — top attractions, hidden gems, and food spots. Complete São Paulo travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1554168848-228452c09d60?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Wander through the vibrant street art of Beco do Batman.",
        "Explore the masterpieces at the Museu de Arte de São Paulo (MASP).",
        "Indulge in a culinary adventure at the Mercado Municipal.",
        "Relax in the sprawling greenery of Ibirapuera Park.",
        "Experience the city's nightlife in Vila Madalena."]}
      attractions={[
        {
        name: "Museu de Arte de São Paulo (MASP)",
        description: `## Overview
The Museu de Arte de São Paulo Assis Chateaubriand, or MASP, is a landmark of the city. Known for its iconic modern architecture – two red concrete beams supporting the main structure – it houses an impressive collection of European and Brazilian art. The collection includes works by renowned artists like Van Gogh, Renoir, and Picasso. I think even non-art lovers will appreciate the building itself.

### Best Photo Spots
The open space beneath the museum's main structure offers unique photo opportunities. Try capturing the red beams with the city skyline in the background. Inside, the suspended glass easels are also a fantastic subject.

### Insider Tips
Visit on Tuesdays, when admission is free, but be prepared for larger crowds. The museum also hosts occasional evening events with live music and extended hours, so check their website for the schedule. Don't miss the MASP shop for unique souvenirs.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Line 2 (Green Line) to Trianon-MASP station. The museum is directly in front of the station exit.",
        openingHours: "Tuesday: Free (10 AM - 8 PM), Wednesday - Sunday: 10 AM - 6 PM, Closed Mondays",
        cost: "R$ 70 (Full), R$ 35 (Students and Seniors), Free on Tuesdays",
        website: "masp.org.br"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "architecture", "history", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Red beams and glass easels",
        insiderTip: "Visit on Tuesdays for free admission, but arrive early to avoid the biggest crowds. Aim to arrive by 10 AM to secure a spot.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible entrances and elevators available."
      }
      },
        {
        name: "Ibirapuera Park",
        description: `## Overview
Ibirapuera Park is São Paulo's version of Central Park, a vast green space offering a welcome escape from the city's hustle and bustle. Designed by Oscar Niemeyer and Roberto Burle Marx, the park features walking and cycling paths, lakes, museums (like the Museu Afro Brasil), and the iconic Ibirapuera Auditorium. Some say it's the perfect spot for a picnic or just to relax. It's the kind of place you could spend a whole day.

### Best Photo Spots
Head to the Japanese Pavilion for serene garden views, or capture the modern architecture of the Ibirapuera Auditorium. The lake at sunset offers stunning reflections.

### Insider Tips
Rent a bike near the entrance for an easy way to explore the park. Weekends can be crowded, so consider visiting during the week for a more peaceful experience. Check the park's event calendar for free concerts and performances.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Line 5 (Lilac Line) to Eucaliptos station, then take a short bus ride or walk to the park.",
        openingHours: "5:00 AM - 12:00 AM daily",
        cost: "Free",
        website: "parqueibirapuera.org"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "photography", "architecture"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunset at the lake, Japanese Pavilion, Ibirapuera Auditorium",
        insiderTip: "Rent a bike near Gate 4 on weekdays before 10 AM for the quietest experience and cheapest rates.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly flat terrain with accessible paths throughout the park."
      }
      },
        {
        name: "Beco do Batman",
        description: `## Overview
Beco do Batman (Batman's Alley) is a vibrant alleyway in the Vila Madalena neighborhood, famous for its ever-changing street art and graffiti. Local artists continuously add new murals and designs, making each visit a unique experience. Wandering through the alley, you'll find a diverse range of styles and themes. It’s definitely one of the more colourful things to do in São Paulo.

### Best Photo Spots
Every corner is a potential photo op! Look for murals with bold colours and interesting compositions. Weekday mornings offer the best light and fewer crowds.

### Insider Tips
Explore the surrounding streets of Vila Madalena for more hidden street art gems. Many of the artists work during the day, so you might catch them in action. It's a safe area during the day, but be cautious at night.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Line 2 (Green Line) to Vila Madalena station, then walk approximately 15 minutes to the alleyway.",
        openingHours: "Open 24/7 (street art is always accessible), but best visited during daylight hours.",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "photography", "culture", "urban exploration"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful street art murals",
        insiderTip: "Visit on a weekday morning (before 11 AM) to avoid crowds and get the best lighting for photos. The art changes frequently, so each visit is unique.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Uneven pavement in some areas."
      }
      },
        {
        name: "Mercado Municipal",
        description: `## Overview
The Mercado Municipal, also known as the 'Mercadão', is a bustling food market housed in a stunning art nouveau building. Here, you can find a wide variety of fresh produce, meats, cheeses, spices, and prepared foods. It's a great place to sample local delicacies and experience the city's culinary scene. The market is known for its enormous mortadella sandwiches.

### Culinary Delights
Don't miss trying the famous mortadella sandwich at Bar do Mané or Hocca Bar. Sample tropical fruits like pitaya and jabuticaba. You might find yourself lingering longer than expected.

### Insider Tips
Visit during the week to avoid weekend crowds. Be prepared to negotiate prices with vendors. Keep an eye on your belongings, as pickpocketing can occur in crowded areas. It's worth bargaining here to get the best price.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Line 1 (Blue Line) to São Bento station, then walk approximately 10 minutes to the market.",
        openingHours: "Monday - Saturday: 6:00 AM - 6:00 PM, Sunday: 6:00 AM - 4:00 PM",
        cost: "Free admission, but food and drink purchases vary.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture", "shopping", "culinary"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful displays of fruits and vegetables, the market's architecture.",
        insiderTip: "Go to Hocca Bar BEFORE 10 AM on weekdays, order the 'pastel de bacalhau' (codfish pastry) fresh out of the fryer, and skip the mortadella sandwich – locals say the pastry is the real hidden gem.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Crowded and may be difficult to navigate with wheelchairs or strollers."
      }
      },
        {
        name: "Terraço Itália",
        description: `## Overview
Terraço Itália is a sophisticated restaurant and bar located on the top floors of the Edifício Itália, one of São Paulo's tallest skyscrapers. Offering panoramic views of the city, it's a popular spot for special occasions and romantic dinners. It's the perfect place to appreciate the city skyline. The restaurant serves Italian cuisine.

### Dining Experience
The restaurant offers a formal dining experience with impeccable service and a classic Italian menu. The bar provides a more relaxed atmosphere with cocktails and appetizers. Reservations are highly recommended.

### Insider Tips
Visit during sunset for the most stunning views. Dress code is smart casual. Consider arriving early to secure a window table.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Line 4 (Yellow Line) to República station, then walk approximately 5 minutes to the Edifício Itália.",
        openingHours: "Restaurant: 12:00 PM - 11:00 PM daily, Bar: 3:00 PM - 1:00 AM daily",
        cost: "Expensive (R$ 150-400 per person)",
        website: "terracoitalia.com.br"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["dining", "cuisine", "views", "romantic"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic city views at sunset.",
        insiderTip: "Make reservations at least 2 weeks in advance and request a table by the window on the west side for the best sunset views, specifically tables 20-25.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Pinacoteca do Estado de São Paulo",
        description: `## Overview
The Pinacoteca do Estado de São Paulo is one of the most important art museums in Brazil, housing a collection of 19th-century and contemporary Brazilian art. Located in a beautiful historic building designed by Ramos de Azevedo, the museum showcases paintings, sculptures, and drawings by renowned Brazilian artists. I found the architecture of the building surprisingly calming.

### What to Expect
The museum's collection is well-curated, offering a comprehensive overview of Brazilian art history. Special exhibitions are frequently held, showcasing both established and emerging artists. The surrounding park also provides a peaceful escape.

### Insider Tips
Check the museum's website for temporary exhibitions and guided tours. The museum café offers a pleasant spot for a break.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Line 1 (Blue Line) or Line 4 (Yellow Line) to Luz station, then walk approximately 5 minutes to the museum.",
        openingHours: "Wednesday - Monday: 10:00 AM - 6:00 PM, Closed Tuesdays",
        cost: "R$ 30 (Full), R$ 15 (Students and Seniors), Free on Saturdays",
        website: "pinacoteca.org.br"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "history", "culture", "architecture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "The museum's historic building and the surrounding park.",
        insiderTip: "Visit on a Saturday for free admission, but arrive shortly after it opens at 10 AM to beat the crowds that usually start around noon. Alternatively, buy tickets online in advance to skip the line any day of the week.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible entrances and elevators available."
      }
      },
        {
        name: "Vila Madalena",
        description: `## Overview
Vila Madalena is a bohemian neighborhood known for its vibrant nightlife, trendy bars, street art, and independent shops. This is a place to see and be seen. It's a great place to wander and soak in the atmosphere. I think it’s a great place to just feel the city’s vibe.

### Nightlife Hotspot
The area comes alive at night, with numerous bars and clubs offering live music and a lively atmosphere. During the day, explore the unique boutiques and art galleries.

### Insider Tips
Explore the side streets for hidden bars and restaurants. Be sure to try some local craft beers. The area is generally safe, but be mindful of your belongings at night.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Line 2 (Green Line) to Vila Madalena station.",
        openingHours: "Shops and restaurants vary, but the neighborhood is most active in the evenings.",
        cost: "Varies depending on activities.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["nightlife", "culture", "shopping", "food"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Street art and vibrant nightlife scenes.",
        insiderTip: "For a less crowded experience, visit Rua Aspicuelta (the main street) on a weekday evening after 9 PM when most tourists have left, but locals are still enjoying the bars and restaurants.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Hilly terrain in some areas."
      }
      },
        {
        name: "Coffee Lab",
        description: `## Overview
Coffee Lab is a specialty coffee shop that takes its coffee seriously. It's known for its experimental approach to coffee brewing and its commitment to sourcing high-quality beans. Located in Vila Madalena, it's a haven for coffee enthusiasts. It's the kind of place you might find your new favorite brew.

### Coffee Experience
Coffee Lab offers a variety of brewing methods, from espresso to pour-over. Their baristas are knowledgeable and passionate about coffee. They also offer coffee workshops and tasting sessions. I think I learned more about coffee there than anywhere else.

### Insider Tips
Try the 'Coffee Experience' tasting menu to sample different brewing methods and bean varieties. The cafe also serves delicious pastries and snacks.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Line 2 (Green Line) to Vila Madalena station, then walk approximately 10 minutes.",
        openingHours: "Monday - Friday: 9:00 AM - 7:00 PM, Saturday: 10:00 AM - 6:00 PM, Sunday: Closed",
        cost: "Moderate (R$ 20-50 per person)",
        website: "coffeelab.com.br"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["coffee", "food", "culinary", "relaxation"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Artisan coffee brewing and stylish interior.",
        insiderTip: "Order the 'Café Filtrado' (filtered coffee) prepared with the Hario V60 method by barista Isabela Raposeiras – she won the Brazilian Brewers Cup and knows her stuff.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around São Paulo

São Paulo is a massive city, so getting around efficiently requires careful planning. Public transport is the most affordable option, but traffic can be heavy, especially during peak hours. Consider using a combination of metro, bus, and rideshare services to navigate the city effectively.

### Public Transport
The São Paulo Metro is clean, efficient, and relatively safe. It connects to a vast network of buses, making it possible to reach most parts of the city. Purchase a 'Bilhete Único' card for easy access to both metro and bus services. Download the 'Moovit' app for real-time transit information.

### Taxis & Rideshare
Taxis and rideshare services like Uber and 99 are readily available throughout the city. They offer a convenient way to travel, especially for short distances or during off-peak hours. Be aware of surge pricing during peak times.`,
        whereToStay: `## Where to Stay in São Paulo

São Paulo offers a wide range of accommodation options, from luxury hotels to budget-friendly hostels. The best area to stay depends on your interests and budget. Consider these popular neighborhoods:

### Best Areas
* Jardins: Upscale neighborhood with luxury hotels, fine dining restaurants, and high-end shopping.
* Vila Madalena: Bohemian neighborhood with trendy bars, street art, and boutique hotels.
* Pinheiros: Vibrant neighborhood with a mix of restaurants, bars, and cultural attractions.

### Budget-Friendly
Look for hostels and guesthouses in areas like Vila Mariana or Consolação. These neighborhoods offer convenient access to public transport and a variety of affordable dining options.`,
        bestTimeToVisit: `## Best Time to Visit São Paulo

The best time to visit São Paulo depends on your preferences for weather and crowds. The city has a subtropical climate, with warm summers and mild winters.

### Peak Season
Summer (December - February) is the peak tourist season, with warm temperatures and occasional rain. Carnival in February is a major event, attracting large crowds.

### Weather Overview
Spring (September - November) and Fall (March - May) offer pleasant weather with fewer crowds. Winter (June - August) is the driest season, with mild temperatures during the day but cooler evenings.`,
        suggestedItinerary: `## Suggested São Paulo Itinerary

Here's a possible itinerary for a 3-day trip to São Paulo:

### Day 1
Start your day with a visit to the Museu de Arte de São Paulo (MASP). In the afternoon, explore the vibrant street art of Beco do Batman. Enjoy dinner and nightlife in Vila Madalena.

### Day 2
Explore Ibirapuera Park, visiting the Museu Afro Brasil and the Ibirapuera Auditorium. In the afternoon, visit the Pinacoteca do Estado de São Paulo. Enjoy dinner at Terraço Itália for panoramic city views.

### Day 3
Visit the Mercado Municipal for a culinary adventure. In the afternoon, explore the historic center of São Paulo, including the Catedral da Sé and the Mosteiro de São Bento.`
      }}
      faqs={[
        {
        question: "What are the best things to do in São Paulo?",
        answer: `Some of the best things to do in São Paulo include visiting the Museu de Arte de São Paulo (MASP), exploring Ibirapuera Park, wandering through Beco do Batman, and indulging in a culinary adventure at the Mercado Municipal.`
      },
        {
        question: "How many days do you need in São Paulo?",
        answer: `A minimum of 3 days is recommended to explore the main attractions of São Paulo. This allows time for museums, parks, cultural experiences, and culinary delights.`
      },
        {
        question: "What is São Paulo famous for?",
        answer: `São Paulo is famous for its vibrant culture, diverse cuisine, impressive art museums, bustling nightlife, and iconic architecture.`
      },
        {
        question: "When is the best time to visit São Paulo?",
        answer: `Spring (September-November) and Fall (March-May) offer pleasant weather and fewer crowds, making them ideal times to visit São Paulo.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Cosmopolitan, Vibrant, Cultural",
        budgetBreakdown: {
          freeActivities: "Explore Ibirapuera Park,Wander through Beco do Batman,Visit the Catedral da Sé,Attend free events at Centro Cultural São Paulo",
          budgetFriendly: "Lunch at Mercado Municipal (R$ 30-50),Visit the Pinacoteca do Estado (R$ 30),Explore Vila Madalena (R$ 20-40 for drinks),Ride the metro (R$ 4.40 per trip)",
          splurgeWorthy: "Dinner at Terraço Itália (R$ 200-400 per person),Helicopter tour of the city (R$ 800-1200)"
        },
        localSecrets: ["Avoid the crowds at MASP by visiting on a Wednesday morning at 10 AM right when it opens. The locals are at work, giving you a more peaceful experience.", "To navigate the São Paulo Metro like a local, download the 'Citymapper' app for real-time updates and use the 'Bilhete Único' card. Avoid using the 'QR Code' option at peak times, as it can be slower. Stand to the right on escalators, like everyone else.", "A realistic budget for 3 days in São Paulo is approximately R$ 450-600. Daily breakdown: R$ 100-150 for meals (street food to mid-range restaurants), R$ 20-30 for transport, R$ 50-100 for attractions, and R$ 30-50 for miscellaneous expenses.", "For authentic goods, visit the Feira da Liberdade (Liberdade Street Fair) on Sundays. Bargain politely for souvenirs and try the takoyaki from the street vendors. Most vendors will drop prices if you pay in cash (Reais).", "Avoid the overpriced restaurants on Avenida Paulista, particularly the ones offering 'tourist menus'. Instead, venture into the side streets of Jardins for better quality and more authentic dining experiences at similar prices. Try the 'Mocotó' restaurant.", "Carnival in February can cause significant transportation disruptions, but if you enjoy street parties, it's the best time to visit. The São Paulo International Film Festival in October might lead to limited cinema showings, so check film listings in advance."],
        diningHighlights: {
          mustTryDishes: "Virado à Paulista (traditional São Paulo dish),Coxinha (chicken croquette),Pão de Queijo (cheese bread),Mortadella Sandwich (from Mercado Municipal)",
          bestCafes: "Coffee Lab: Specialty coffee shop with experimental brewing methods.,Sofá Café: Cozy cafe with a wide selection of coffee beans.,King of the Fork: Popular cafe known for its delicious coffee and brunch options",
          topRestaurants: "Mocotó: Serves modern Brazilian cuisine with a focus on northeastern flavors.,D.O.M.: Michelin-starred restaurant offering innovative tasting menus.,Maní: Contemporary Brazilian cuisine in a stylish setting.",
          foodMarkets: "Mercado Municipal: Bustling market with a wide variety of fresh produce and prepared foods.,Feira da Liberdade: Japanese street market with food stalls and cultural products.",
          diningTips: "Tipping is generally not expected in São Paulo, but it's customary to round up the bill or leave a small amount for good service. Reservations are recommended for popular restaurants, especially on weekends. Try to learn some basic Portuguese phrases to enhance your dining experience."
        },
        seasonalHighlights: {
          spring: "Blooming jacaranda trees add a splash of color to the city. Pleasant temperatures make it ideal for outdoor activities.",
          summer: "Warm temperatures and occasional rain create a lush green landscape. Carnival festivities bring the city to life.",
          fall: "Mild temperatures and fewer crowds make it a great time for sightseeing. The city's parks offer beautiful autumn foliage.",
          winter: "Driest season with mild temperatures during the day. Perfect for exploring the city's cultural attractions."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "4",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Good"
        }
      }}
    />
  );
};