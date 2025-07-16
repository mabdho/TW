import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Paris: React.FC = () => {
  return (
    <CityPage
      cityName="Paris"
      country="France"
      title={"Best Things to Do in Paris, France (2025 Guide)"}
      description={`Discover the best things to do in Paris — top attractions, hidden gems, and food spots. Complete Paris travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1524396309943-e03f5249f002?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Eiffel Tower for panoramic city views.",
        "Explore the Louvre Museum and admire masterpieces.",
        "Stroll along the Seine River and soak in the atmosphere.",
        "Indulge in delicious pastries at a traditional patisserie.",
        "Discover the charming Montmartre neighborhood."]}
      attractions={[
        {
        name: "Eiffel Tower",
        description: `## Overview
The Eiffel Tower, perhaps the most iconic symbol of Paris, offers breathtaking panoramic views of the city. Ascending to the top is a must-do for any visitor. You can choose to take the stairs (for the first two levels) or the elevator to reach the summit. It's truly an unforgettable experience, and I think you might find the view surprisingly calming, despite the crowds.

### Best Photo Spots
For iconic shots, photograph the tower from the Champ de Mars or the Trocadéro. Sunset offers stunning lighting. Consider taking photos from slightly further away to get the whole structure in the frame.

### Insider Tips
Tip: Purchase tickets online in advance to avoid long queues. Arrive early in the morning or late in the evening for fewer crowds. The sparkling light show occurs every hour on the hour after sunset; it’s worth seeing. Arriving right at 9 AM before the rush is a great idea.`,
        practicalInfo: {
        howToGetThere: "Metro: Bir-Hakeim (Line 6), Champ de Mars - Tour Eiffel (RER C)",
        openingHours: "9:30 AM - 11:00 PM (times may vary)",
        cost: "€18.10 - €29.40 depending on the level",
        website: "toureiffel.paris"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["architecture", "photography", "history"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunset from the top or Trocadéro viewpoint",
        insiderTip: "Buy tickets online and arrive before opening (9:30 AM) to minimize wait times. The North Pillar usually has shorter security lines.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Elevators available to all levels; some restrictions may apply."
      }
      },
        {
        name: "Louvre Museum",
        description: `## Overview
The Louvre Museum, home to masterpieces like the Mona Lisa and Venus de Milo, is one of the world's largest and most visited museums. Exploring its vast collection can easily take an entire day. Don't miss the Egyptian antiquities, Greek sculptures, and French paintings. There's just so much to see! It's the kind of place you might linger longer than expected. Be sure to look up, too – the architecture is incredible.

### Best Photo Spots
The iconic glass pyramid is a must-photograph. Inside, the Mona Lisa is extremely popular, so be prepared for crowds. I found the sculpture galleries to be less crowded and more photogenic.

### Insider Tips
Tip: Purchase tickets online in advance and consider visiting on a Wednesday or Friday evening when the museum is open later and less crowded. The Denon entrance is often less busy than the main entrance beneath the pyramid. Don't miss the lesser-known Winged Victory of Samothrace.`,
        practicalInfo: {
        howToGetThere: "Metro: Palais-Royal–Musée du Louvre (Lines 1, 7)",
        openingHours: "9:00 AM - 6:00 PM (Wednesdays and Fridays until 9:45 PM; Closed Tuesdays)",
        cost: "€17",
        website: "louvre.fr"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["art", "history", "architecture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Glass pyramid exterior; Mona Lisa; Winged Victory of Samothrace",
        insiderTip: "Visit on Wednesday or Friday evening for extended hours and fewer crowds. Enter through the Passage Richelieu entrance from the metro station to avoid long lines.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair access available; strollers permitted."
      }
      },
        {
        name: "Montmartre & Sacré-Cœur Basilica",
        description: `## Overview
Montmartre, a charming hilltop neighborhood, is known for its artistic history and the stunning Sacré-Cœur Basilica. Explore the Place du Tertre, where artists create and sell their work. Wander through the winding streets and discover hidden cafes and boutiques. The views of Paris from the Sacré-Cœur are simply breathtaking. Some say it's the most romantic spot in the city!

### Best Photo Spots
Capture panoramic views of Paris from the steps of the Sacré-Cœur Basilica. Photograph the Place du Tertre with artists at work. Explore the charming streets for picturesque scenes.

### Insider Tips
Tip: Take the funicular up the hill to avoid the steep climb, or walk up through the back streets for a less crowded and more scenic route. Visit early in the morning to avoid the crowds and enjoy a peaceful experience. Don't miss the nearby Musée de Montmartre for insights into the area's artistic past.`,
        practicalInfo: {
        howToGetThere: "Metro: Abbesses (Line 12), Anvers (Line 2)",
        openingHours: "Sacré-Cœur Basilica: 6:00 AM - 10:30 PM daily",
        cost: "Free to enter Sacré-Cœur Basilica; Funicular: Standard metro ticket",
        website: "sacre-coeur-montmartre.com"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Moderate Adventure",
        interests: ["art", "history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Spring, Summer, Fall",
        photoOpportunity: "Panoramic views from Sacré-Cœur Basilica; Place du Tertre",
        insiderTip: "Walk up the back streets behind the basilica for a less crowded and more scenic experience. Visit early in the morning for the best light and fewer tourists.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Funicular available; some areas may be difficult to navigate with wheelchairs."
      }
      },
        {
        name: "Notre-Dame Cathedral",
        description: `## Overview
Notre-Dame Cathedral, a masterpiece of Gothic architecture, is currently undergoing restoration after the devastating fire in 2019. While you can't currently enter, it's still worth visiting to admire its exterior and reflect on its history. The surrounding area offers beautiful views of the Seine River and the Île de la Cité. The hope is that it will reopen soon, but until then it's still an iconic site. Restoration is ongoing.

### Best Photo Spots
Photograph the cathedral from the Pont d'Arcole or the Quai de Montebello. Capture the rose windows from afar. Consider visiting at sunset for golden light.

### Insider Tips
Tip: Walk around the Île de la Cité for different perspectives of the cathedral. Check for updates on the restoration progress and potential reopening dates. The Shakespeare and Company bookstore nearby is worth a visit. The area is quite bustling.`,
        practicalInfo: {
        howToGetThere: "Metro: Cité (Line 4)",
        openingHours: "Currently closed for restoration",
        cost: "Free to view the exterior",
        website: "notredamedeparis.fr"
      },
      discoveryTags: {
        timeRequired: "30–60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Exterior views from Pont d'Arcole; Seine River views",
        insiderTip: "Walk around the Île de la Cité for varied perspectives and quieter spots to view the cathedral. Check the official website for reopening updates.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Exterior is accessible; interior currently closed."
      }
      },
        {
        name: "Sainte-Chapelle",
        description: `## Overview
Sainte-Chapelle, a stunning Gothic chapel, is renowned for its breathtaking stained-glass windows. Built in the 13th century, it once housed important Christian relics. The light filtering through the stained glass creates a magical atmosphere. It's perhaps smaller than you expect, but the impact is immense!

### Best Photo Spots
Photograph the interior stained-glass windows on a sunny day for the most vibrant colors. Capture the intricate details of the architecture. Consider visiting during off-peak hours for fewer crowds.

### Insider Tips
Tip: Purchase tickets online in advance, especially during peak season. Visit on a sunny day for the best light. Combine your visit with a trip to the nearby Conciergerie. The colors inside the chapel are incredible.`,
        practicalInfo: {
        howToGetThere: "Metro: Cité (Line 4)",
        openingHours: "9:00 AM - 5:00 PM",
        cost: "€11.50",
        website: "sainte-chapelle.fr"
      },
      discoveryTags: {
        timeRequired: "1–2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "art", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Interior stained-glass windows on a sunny day",
        insiderTip: "Purchase a combined ticket with the Conciergerie for a discounted price. Visit on a sunny day to experience the stained glass at its best.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility; stairs required to reach the upper chapel."
      }
      },
        {
        name: "Le Marais District",
        description: `## Overview
Le Marais, a historic district in Paris, is known for its narrow streets, trendy boutiques, and vibrant atmosphere. Explore the Place des Vosges, one of the oldest planned squares in Paris. Visit the Musée Picasso and the Musée Carnavalet. Discover hidden courtyards and charming cafes. It's a great place to just wander, I think.

### Best Photo Spots
Photograph the Place des Vosges, a beautiful square with symmetrical architecture. Capture the narrow streets and charming facades. Consider visiting the Marché des Enfants Rouges for colorful market scenes.

### Insider Tips
Tip: Explore the side streets off the main thoroughfares for hidden gems. Visit the Marché des Enfants Rouges, Paris' oldest covered market, for a taste of local life. Don't miss the falafel shops on Rue des Rosiers. There's always something new to discover here.`,
        practicalInfo: {
        howToGetThere: "Metro: Saint-Paul (Line 1), Chemin Vert (Line 8)",
        openingHours: "Varies by shop and restaurant",
        cost: "Free to explore; costs vary for shops and restaurants",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "shopping", "food", "art"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Place des Vosges; narrow streets; Marché des Enfants Rouges",
        insiderTip: "Wander off the main streets to discover hidden courtyards and smaller boutiques. Visit the Marché des Enfants Rouges for lunch.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some areas may have uneven cobblestones."
      }
      },
        {
        name: "Berthillon Glacier",
        description: `## Overview
Berthillon Glacier, located on the Île Saint-Louis, is famous for its artisanal ice cream and sorbet. With a wide variety of flavors, it's a must-visit for dessert lovers. Expect a queue, but it's worth the wait. The ice cream is simply divine!

### What to Expect
Expect a line, especially on weekends and during peak season. Be prepared to choose from a wide array of flavors, from classic vanilla to exotic fruit sorbets. Enjoy your ice cream while strolling along the Seine River.

### Insider Tips
Tip: Check for seasonal flavors that are only available at certain times of the year. Some shops and cafes on the Île Saint-Louis also sell Berthillon ice cream, potentially offering shorter lines. Don't miss the caramel beurre salé flavor!`,
        practicalInfo: {
        howToGetThere: "Metro: Pont Marie (Line 7)",
        openingHours: "1:00 PM - 8:00 PM (Closed Mondays and Tuesdays)",
        cost: "€3-€6",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "dessert"],
        costLevel: "Budget-friendly",
        seasonalBest: "Spring, Summer, Fall",
        photoOpportunity: "Colorful ice cream cones with the Seine River in the background",
        insiderTip: "Look for smaller shops nearby that also sell Berthillon ice cream to avoid the main queue. Try the seasonal flavors for a unique taste.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Easy access."
      }
      },
        {
        name: "Marché des Enfants Rouges",
        description: `## Overview
Marché des Enfants Rouges, the oldest covered market in Paris, is a vibrant hub for food lovers. Here, you can find fresh produce, cheese, bread, and a variety of international cuisine. It's a great place to grab lunch or simply soak in the atmosphere. The sounds, smells, and tastes are amazing!

### What to Expect
Expect a bustling atmosphere with vendors selling a wide range of products. Be prepared for crowds, especially during lunchtime. Enjoy the variety of food options, from Moroccan tagine to Japanese bento boxes.

### Insider Tips
Tip: Visit during off-peak hours (before noon or after 2 PM) to avoid the crowds. Explore the different food stalls and try a variety of dishes. Don't miss the fresh oysters! Arrive early to get the best selection.`,
        practicalInfo: {
        howToGetThere: "Metro: Arts et Métiers (Lines 3, 11)",
        openingHours: "8:30 AM - 8:30 PM (Tuesday-Saturday); 8:30 AM - 5:00 PM (Sunday); Closed Mondays",
        cost: "Varies by vendor",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful food stalls; bustling market atmosphere",
        insiderTip: "Go before noon to skip the lunch rush and get first pick of the freshest produce. Many stalls offer free samples.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Easy access."
      }
      },
        {
        name: "Le Bouillon Chartier",
        description: `## Overview
Le Bouillon Chartier is a historic Parisian restaurant known for its traditional French cuisine at very affordable prices. The atmosphere is lively and bustling, with waiters hurrying between tables. It's a great place to experience classic French dining without breaking the bank. Some say it's a bit chaotic, but that's part of the charm!

### Signature Dishes
Must-try dishes include the steak frites, escargots, and pot-au-feu. The wine list is also reasonably priced. Don't expect fancy plating, but the food is hearty and satisfying.

### Practical Dining Info
Price range: €10-€20. Hours: 11:30 AM - 12:00 AM daily. Reservations are not accepted, so be prepared to queue. Arriving before or after peak dining hours can reduce your wait time.`,
        practicalInfo: {
        howToGetThere: "Metro: Grands Boulevards (Lines 8, 9)",
        openingHours: "11:30 AM - 12:00 AM daily",
        cost: "€10-€20",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "The grand dining hall; classic French dishes",
        insiderTip: "Arrive before 7 PM or after 9 PM to avoid the longest queues. The steak frites is a classic choice.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Easy access."
      }
      },
        {
        name: "Shakespeare and Company Bookstore",
        description: `## Overview
Shakespeare and Company is a historic English-language bookstore located in the Latin Quarter. It's a haven for book lovers, with its cozy atmosphere and extensive collection. The store has a rich history and has been a meeting place for writers and artists for decades. It's a must-visit for anyone who appreciates literature.

### What to Expect
Expect a charming and somewhat chaotic atmosphere, with books piled high on shelves. Browse the collection, read a book in one of the cozy nooks, or attend a literary event. The store also offers accommodation for aspiring writers in exchange for helping out.

### Insider Tips
Tip: Visit during off-peak hours to avoid the crowds. Check the store's website for upcoming events and readings. Don't miss the second-floor reading room with views of Notre-Dame. It's worth spending some time browsing here.`,
        practicalInfo: {
        howToGetThere: "Metro: Saint-Michel (Line 4)",
        openingHours: "10:00 AM - 8:00 PM daily",
        cost: "Free to browse; costs vary for books",
        website: "shakespeareandcompany.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["culture", "books", "history"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "The exterior facade of the bookstore; the interior reading room",
        insiderTip: "Check the store's website for upcoming events and readings. The second-floor reading room has a great view of Notre-Dame.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility; stairs required to reach the second floor."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Paris

Paris boasts an efficient public transportation system, making it easy to explore the city's attractions. From the metro to buses and trams, there are various options to suit your needs.

### Public Transport
The Paris Metro is the most convenient way to get around, with numerous lines connecting different parts of the city. Consider purchasing a Navigo Easy card for easy travel. Buses and trams are also available and offer scenic routes. Download the Citymapper app for real-time updates and route planning.

### Taxis & Rideshare
Taxis and rideshare services like Uber are readily available in Paris. However, traffic can be heavy, especially during peak hours. These options are best for shorter distances or when traveling with luggage.

### Walking & Cycling
Paris is a very walkable city, and exploring on foot allows you to discover hidden gems and soak in the atmosphere. Cycling is also a popular option, with numerous bike rental services available. Vélib' Métropole is a public bike-sharing system.`,
        whereToStay: `## Where to Stay in Paris

Paris offers a wide range of accommodation options to suit every budget and preference. From luxury hotels to budget-friendly hostels, there's something for everyone.

### Best Areas
Le Marais is a popular choice for its central location and charming atmosphere. Saint-Germain-des-Prés is known for its literary cafes and boutiques. Montmartre offers stunning views and a bohemian vibe.

### Luxury Options
For a luxurious stay, consider hotels like Le Bristol Paris or the Four Seasons Hotel George V. These hotels offer world-class amenities and impeccable service.

### Budget-Friendly
Budget-friendly options include hostels and smaller hotels in areas like the Latin Quarter or Belleville.`,
        bestTimeToVisit: `## Best Time to Visit Paris

The best time to visit Paris depends on your preferences and priorities. Each season offers a unique experience, with its own advantages and disadvantages.

### Peak Season
Summer (June-August) is the peak season in Paris, with warm weather and numerous events. However, expect larger crowds and higher prices.

### Weather Overview
Spring (April-May) and fall (September-October) offer pleasant weather and fewer crowds. Winter (November-March) can be cold and rainy, but it's also a magical time to visit with festive decorations and fewer tourists.

### Local Events
Consider visiting during events like Paris Fashion Week or the Christmas markets for a unique experience. Check the local calendar for festivals and events that align with your interests.`,
        suggestedItinerary: `## Suggested Paris Itinerary

Here's a suggested itinerary for a 3-day trip to Paris:

### Day 1
Start your day with a visit to the Eiffel Tower. In the afternoon, explore the Louvre Museum. In the evening, take a stroll along the Seine River and enjoy a dinner cruise.

### Day 2
Visit Notre-Dame Cathedral (exterior view only). Explore the Sainte-Chapelle and the Conciergerie. In the afternoon, wander through the Latin Quarter and visit Shakespeare and Company bookstore. In the evening, enjoy a traditional French dinner in Saint-Germain-des-Prés.

### Day 3
Explore Montmartre and visit the Sacré-Cœur Basilica. In the afternoon, visit the Musée d'Orsay or the Centre Pompidou. In the evening, enjoy a cabaret show at the Moulin Rouge.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Paris?",
        answer: `The best things to do in Paris include visiting the Eiffel Tower, exploring the Louvre Museum, strolling along the Seine River, discovering Montmartre, and indulging in delicious pastries.`
      },
        {
        question: "How many days do you need in Paris?",
        answer: `Ideally, you should spend at least 3-4 days in Paris to experience the major attractions and get a feel for the city. However, even a shorter trip can be worthwhile.`
      },
        {
        question: "What is Paris famous for?",
        answer: `Paris is famous for its iconic landmarks, world-class museums, romantic atmosphere, haute couture fashion, and delicious cuisine.`
      },
        {
        question: "When is the best time to visit Paris?",
        answer: `The best time to visit Paris is in the spring (April-May) or fall (September-October) for pleasant weather and fewer crowds.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Romantic, sophisticated, historic",
        budgetBreakdown: {
          freeActivities: "Stroll along the Seine River,Visit the Sacré-Cœur Basilica (free entry),Explore the Luxembourg Gardens,Wander through Montmartre",
          budgetFriendly: "Visit the Musée d'Orsay (€16),Take a boat tour on the Seine (€15),Enjoy a picnic in the park (€10),Eat a crepe from a street vendor (€5)",
          splurgeWorthy: "Stay in a luxury hotel (€500+ per night),Dine at a Michelin-starred restaurant (€150+ per person)"
        },
        localSecrets: ["To avoid the Eiffel Tower crowds, visit on Tuesdays at 8:30 AM and enter through the South entrance on Quai Branly. Locals use this entrance because it typically has the shortest security lines.", "For easy public transport, download the Citymapper app and purchase a Navigo Easy card at any metro station. Load it with 't+' tickets. Remember to validate your ticket before entering the platform to avoid fines.", "A realistic budget for 3 days is €45-60 per day. This covers €15-20 for meals (breakfast at a cafe, lunch at a market, dinner at a bistro), €7 for daily transport, and €15 for one attraction ticket, plus €8 for miscellaneous costs.", "For authentic goods, explore the Marché d'Aligre (12th arrondissement). It's open every day except Monday. Bargain respectfully by offering a slightly lower price than the asking price; aim for a 10-15% discount on produce.", "Avoid restaurants near the Champs-Élysées that offer tourist menus. They are often overpriced and underwhelming. Instead, try Le Bouillon Chartier (7 Rue du Faubourg Montmartre, 9th arrondissement) for affordable and authentic French cuisine.", "The Fête des Lumières (Festival of Lights) usually takes place in December. However, this event impacts transportation and some closures may occur. Check local listings to plan ahead."],
        diningHighlights: {
          mustTryDishes: "Steak frites,Crème brûlée,Croissant,Macarons",
          bestCafes: "Café de Flore: A historic cafe in Saint-Germain-des-Prés known for its literary past.,La Maison Rose: A picturesque cafe in Montmartre with a charming atmosphere.",
          topRestaurants: "Le Bouillon Chartier: Traditional French cuisine at affordable prices.,Septime: A Michelin-starred restaurant offering modern French cuisine.",
          foodMarkets: "Marché des Enfants Rouges,Marché Bastille",
          diningTips: "Tipping is not mandatory in Paris, but it's customary to round up the bill or leave a small tip for good service.,Reservations are recommended for popular restaurants.,Bread is usually served with meals; it's acceptable to use it to soak up sauces."
        },
        seasonalHighlights: {
          spring: "Paris comes alive with blooming flowers and pleasant weather, perfect for outdoor activities and picnics.",
          summer: "Warm weather and long days make summer ideal for exploring the city's attractions and enjoying outdoor events.",
          fall: "The city transforms into a colorful landscape with crisp air and fewer crowds, perfect for museum visits and cozy cafe experiences.",
          winter: "Festive decorations, Christmas markets, and fewer tourists make winter a magical time to visit Paris, despite the cold weather."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "4",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};