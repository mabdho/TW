import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Rome: React.FC = () => {
  return (
    <CityPage
      cityName="Rome"
      country="Italy"
      title={"Best Things to Do in Rome, Italy (2025 Guide)"}
      description={`Discover the best things to do in Rome — top attractions, hidden gems, and food spots. Complete Rome travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1529154036614-a60975f5c760?w=800&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Colosseum and Roman Forum",
        "Explore Vatican City and St. Peter's Basilica",
        "Toss a coin in the Trevi Fountain",
        "Climb the Spanish Steps",
        "Indulge in authentic Roman cuisine"]}
      attractions={[
        {
        name: "Colosseum",
        description: `## Overview
The Colosseum is perhaps Rome's most iconic landmark, a testament to the grandeur of the Roman Empire. This ancient amphitheater once hosted gladiatorial contests and public spectacles, drawing massive crowds. Walking through its ruins, you can almost hear the roar of the crowd and the clash of swords. It's certainly worth a visit!

### Best Photo Spots
For a classic shot, position yourself outside the Colosseum, capturing its entire facade. Alternatively, venture inside and photograph the arena from different levels. The golden hour provides the best lighting. Don't miss the panoramic view from the upper levels.

### Insider Tips
Tip: Purchase tickets online in advance to avoid long queues. Consider a guided tour to learn more about the Colosseum's history and significance. Visit early in the morning (before 10:00 AM) or late in the afternoon to avoid the crowds. Be sure to wear comfortable shoes, as you'll be doing a lot of walking.`,
        practicalInfo: {
        howToGetThere: "Metro Line B, Colosseo station",
        openingHours: "8:30 AM to 7:00 PM (seasonal variations)",
        cost: "€16 (includes Roman Forum and Palatine Hill)",
        website: "parcocolosseo.it"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Exterior facade and interior arena shots",
        insiderTip: "Book online to skip the long ticket lines. Arrive before 10:00 AM to avoid peak crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility for wheelchair users"
      }
      },
        {
        name: "Vatican City",
        description: `## Overview
Vatican City is an independent city-state within Rome, the spiritual and administrative center of the Roman Catholic Church. St. Peter's Basilica, with its breathtaking dome and intricate artwork, is a must-see. The Vatican Museums house an unparalleled collection of art and artifacts, including the Sistine Chapel with Michelangelo's iconic frescoes. It’s a truly awe-inspiring place.

### Best Photo Spots
Capture the grandeur of St. Peter's Square from the basilica's steps. Inside, photograph Michelangelo's Pietà and the stunning dome. The Sistine Chapel is, of course, a highlight (though photography is often restricted).

### Insider Tips
Recommend booking Vatican Museum tickets online to avoid the notoriously long lines. Dress modestly when visiting religious sites (shoulders and knees covered). Visit in the late afternoon for fewer crowds. Consider a guided tour to navigate the vast collection.`,
        practicalInfo: {
        howToGetThere: "Metro Line A, Ottaviano-San Pietro station",
        openingHours: "Vatican Museums: 9:00 AM to 6:00 PM (seasonal variations)",
        cost: "Vatican Museums: €26",
        website: "museivaticani.va"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "religion"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "St. Peter's Square and Michelangelo's Pietà",
        insiderTip: "Pre-book tickets online at least 1 month in advance! Enter at 9 AM to beat the tour groups.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible"
      }
      },
        {
        name: "Trevi Fountain",
        description: `## Overview
The Trevi Fountain, an iconic Baroque masterpiece, is one of the most famous fountains in the world. Legend has it that throwing a coin into the fountain guarantees a return trip to Rome. The fountain's elaborate sculptures and cascading water create a truly magical scene. I think it’s always crowded, but worth seeing. 

### Best Photo Spots
Capture the fountain's grandeur from the surrounding steps. Visit early in the morning or late at night to avoid the crowds. Use a wide-angle lens to capture the entire fountain in one shot.

### Insider Tips
Tip: Visit early in the morning (around 7:00 AM) to avoid the crowds. Be aware of pickpockets in the crowded areas. Toss a coin over your left shoulder with your right hand to ensure your return to Rome.`,
        practicalInfo: {
        howToGetThere: "Metro Line A, Barberini station",
        openingHours: "24/7",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["art", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Entire fountain view and close-ups of sculptures",
        insiderTip: "Arrive before 7:30 AM on weekdays. Stand near the right side of the fountain.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility due to steps"
      }
      },
        {
        name: "Spanish Steps",
        description: `## Overview
The Spanish Steps, a monumental staircase connecting the Piazza di Spagna with the Trinità dei Monti church, are a popular meeting point and a beautiful example of Baroque architecture. Climbing the steps offers stunning views of the city. Some say it's best at sunset.

### Best Photo Spots
Capture the steps from the bottom, emphasizing their grandeur. Climb to the top for panoramic views of Rome. The best time for photos is during sunset.

### Insider Tips
Avoid sitting on the steps (it's often prohibited). Visit during the spring when the steps are adorned with flowers. Consider climbing the steps early in the morning to avoid the crowds. Check for special events or flower displays.`,
        practicalInfo: {
        howToGetThere: "Metro Line A, Spagna station",
        openingHours: "24/7",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["architecture", "photography", "history"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Panoramic city views from the top",
        insiderTip: "Go early on a weekday or during off-season to enjoy the views without the crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Not accessible for wheelchair users"
      }
      },
        {
        name: "Pantheon",
        description: `## Overview
The Pantheon, a remarkably well-preserved ancient Roman temple, is now a church. Its massive dome and oculus (the central opening) are architectural marvels. The Pantheon's interior is surprisingly peaceful and serene, offering a respite from the bustling city. I found the view surprisingly calming.

### Best Photo Spots
Capture the exterior facade from the Piazza della Rotonda. Inside, photograph the oculus and the dome's intricate details. The light streaming through the oculus creates stunning effects.

### Insider Tips
Recommend visiting during off-peak hours to avoid the crowds. Take some time to admire the architecture from different angles. Look for the tombs of famous Italians, including the artist Raphael.`,
        practicalInfo: {
        howToGetThere: "Bus lines 30, 40, 64, 70, 81, 87",
        openingHours: "9:00 AM to 6:00 PM",
        cost: "€5",
        website: "pantheondiroroma.it"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "art"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Oculus and dome interior shots",
        insiderTip: "Check if there are any masses or special events happening which may affect access.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible"
      }
      },
        {
        name: "Trastevere",
        description: `## Overview
Trastevere is a charming neighborhood known for its narrow cobblestone streets, ivy-covered buildings, and vibrant nightlife. This area is filled with traditional trattorias, artisan shops, and lively bars. It's a great place to wander, soak up the atmosphere, and enjoy authentic Roman cuisine. It's the kind of place you might linger longer than expected.

### Best Photo Spots
Capture the neighborhood's charm from the Ponte Sisto bridge. Wander through the narrow streets and photograph the ivy-covered buildings. Visit during the evening for lively street scenes.

### Insider Tips
Tip: Explore the neighborhood on foot to discover hidden gems. Sample the local cuisine at a traditional trattoria. Visit the Basilica di Santa Maria in Trastevere, one of Rome's oldest churches. Be sure to try the gelato!`,
        practicalInfo: {
        howToGetThere: "Tram line 8",
        openingHours: "Varies by establishment",
        cost: "Varies",
        website: ""
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "culture", "nightlife"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Cobblestone streets and ivy-covered buildings",
        insiderTip: "Wander off the main streets, cross to the other side of viale trastevere to find more authentic local food markets.",
        hiddenGem: true,
        familyFriendly: true,
        accessibilityNotes: "Cobblestone streets can be challenging for wheelchair users"
      }
      },
        {
        name: "Pizzarium Bonci",
        description: `## Overview
Pizzarium Bonci is renowned for its gourmet pizza al taglio (pizza by the slice). Chef Gabriele Bonci uses high-quality ingredients and innovative flavor combinations to create some of the best pizza in Rome. It's a must-visit for food lovers!

### What to Expect
Expect a bustling atmosphere and a wide variety of pizza toppings. The pizza is sold by weight, so you can try different slices. Be prepared for a possible queue, as it's a popular spot.

## Signature Dishes
Recommend trying the potato and rosemary pizza, a local favorite. The cacio e pepe pizza is also a must-try. The crust is perfectly crisp and airy. Their coffee is also excellent.

## Dining Information
This pizza restaurant is budget-friendly to moderate. Prices range from €3-€6 per slice. It is open from 11:00 AM to 10:00 PM, closed on Sundays. No reservations are required. Be sure to visit during lunch for the freshest flavors!`,
        practicalInfo: {
        howToGetThere: "Metro Line A, Cipro station",
        openingHours: "11:00 AM to 10:00 PM (closed Sundays)",
        cost: "€3-€6 per slice",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "culinary"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "The pizza selection with variety of toppings",
        insiderTip: "Arrive before noon to avoid the lunch rush.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited seating available"
      }
      },
        {
        name: "Roscioli Salumeria con Cucina",
        description: `## Overview
Roscioli Salumeria con Cucina is a restaurant, deli, and wine bar rolled into one. It's known for its high-quality cured meats, cheeses, pasta dishes, and extensive wine list. The atmosphere is lively and welcoming, making it a perfect place to enjoy a traditional Roman meal. 

## Culinary Experience
Sample the salumi and cheese platter, a perfect introduction to Italian flavors. The carbonara is a must-try, prepared with traditional ingredients. The wine selection is extensive, with options for every palate.

## Dining Information
This restaurant is moderate to expensive. Expect to pay around €30-€50 per person. Open from 12:30 PM to 4:00 PM and 7:00 PM to 11:30 PM. Reservations are highly recommended. Check out their selection of Roman wines!`,
        practicalInfo: {
        howToGetThere: "Bus lines 30, 70, 81, 87",
        openingHours: "12:30 PM to 4:00 PM, 7:00 PM to 11:30 PM",
        cost: "€30-€50 per person",
        website: "roscioli.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culinary", "dining"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Salumi and cheese platters and pasta dishes",
        insiderTip: "Book your table online at least 2 weeks in advance. Ask for a table in the front of the restaurant to enjoy the lively atmosphere.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility"
      }
      },
        {
        name: "Testaccio Market",
        description: `## Overview
Testaccio Market (Mercato di Testaccio) is a vibrant local market offering fresh produce, meat, cheese, and street food. It's a great place to experience Roman culinary culture and sample local specialties. The market is a hub of activity, with vendors selling everything from fresh pasta to artisanal crafts. It's the kind of food experience you should add to your Rome itinerary.

### What to Expect
Expect a bustling atmosphere and a wide variety of food stalls. Sample local specialties like supplì (fried rice balls) and trapizzino (pizza pocket). Be prepared to haggle for the best prices.

### Insider Tips
Tip: Visit during the morning for the freshest produce. Sample the local street food. Explore the surrounding neighborhood for hidden gems. Try to haggle for better prices on souvenirs.

## Dining Information
This food market is a budget-friendly dining experience. Expect to spend around €10-€20 for a meal. Open from 7:00 AM to 3:30 PM (closed Sundays).`,
        practicalInfo: {
        howToGetThere: "Metro Line B, Piramide station",
        openingHours: "7:00 AM to 3:30 PM (closed Sundays)",
        cost: "€10-€20 per meal",
        website: "mercatoditestaccio.it"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "culinary", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Fresh produce displays and street food stalls",
        insiderTip: "Arrive before 11 AM to avoid the lunch rush.",
        hiddenGem: true,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible"
      }
      },
        {
        name: "Borghese Gallery and Gardens",
        description: `## Overview
The Borghese Gallery and Gardens (Galleria Borghese) is a stunning art museum housed in a beautiful villa, surrounded by lush gardens. The gallery features masterpieces by Bernini, Caravaggio, and Raphael. The gardens offer a peaceful escape from the city bustle. Perhaps it is worth a visit for art lovers!.

### Best Photo Spots
Capture Bernini's sculptures from different angles. Photograph the gardens from the villa's terrace. Visit during the spring for the best flower displays.

### Insider Tips
Book tickets well in advance, as entry is timed and limited. Allow at least 2-3 hours to explore the gallery and gardens. Consider renting a rowboat on the lake for a relaxing experience.`,
        practicalInfo: {
        howToGetThere: "Metro Line A, Spagna or Flaminio station",
        openingHours: "9:00 AM to 7:00 PM (reservations required)",
        cost: "€22",
        website: "galleriaborghese.beniculturali.it"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Moderate Adventure",
        interests: ["art", "gardens", "history"],
        costLevel: "Moderate",
        seasonalBest: "Spring",
        photoOpportunity: "Bernini sculptures and gardens view",
        insiderTip: "Book at least 3-4 weeks in advance, visit on a Tuesday or Wednesday.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible"
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Rome

Rome offers a variety of transportation options to explore the city. From public transport to walking and cycling, here's how to navigate the Eternal City.

### Public Transport
Rome's public transport system includes metro lines, buses, and trams. The metro is the most efficient way to travel between major attractions. Consider purchasing a Roma Pass for unlimited travel. Purchase the BIT ticket (€1.50) for single journeys or the Roma Pass which includes public transport and access to museums. Remember to validate your ticket before boarding.

### Taxis & Rideshare
Taxis are readily available throughout Rome. Rideshare services like Uber are also available. Be sure to use official taxi stands or book through a reputable app to avoid scams. Official taxi stands are located at major attractions and train stations.

## Walking & Cycling
Walking is a great way to explore the historic center of Rome. Many attractions are within walking distance of each other. Cycling is also a popular option, with bike rentals available throughout the city. Be aware of traffic when cycling.`,
        whereToStay: `## Where to Stay in Rome

Choosing the right neighborhood can significantly enhance your Rome experience. Here are some recommendations for where to stay, catering to different preferences and budgets.

### Best Areas
* Trastevere: Known for its charming atmosphere, lively nightlife, and traditional trattorias.
* Monti: A trendy neighborhood with artisan shops, boutiques, and hip restaurants.
* Prati: A residential area near Vatican City, offering a more peaceful and authentic experience.

### Luxury Options
* Hotel de Russie: A luxurious hotel with a beautiful garden and stunning city views.
* The St. Regis Rome: A historic hotel with elegant rooms and exceptional service.

## Budget-Friendly
* Generator Rome: A stylish hostel with private rooms and dormitories.
* The Beehive: A cozy guesthouse near Termini Station, offering comfortable and affordable accommodation.`,
        bestTimeToVisit: `## Best Time to Visit Rome

The best time to visit Rome depends on your preferences for weather, crowds, and events. Here's a seasonal overview to help you plan your trip.

### Peak Season
The peak season in Rome is during the summer months (June-August). The weather is hot and sunny, but the city is crowded with tourists. Prices for accommodation and flights are also higher during this time.

### Weather Overview
* Spring (April-May): Mild temperatures and blooming flowers make spring a pleasant time to visit.
* Summer (June-August): Hot and sunny, with temperatures reaching 30°C (86°F) or higher.
* Fall (September-October): Mild temperatures and fewer crowds make fall an ideal time to visit.
* Winter (November-March): Cooler temperatures and occasional rain, but fewer tourists and lower prices.

## Local Events
Rome hosts a variety of events throughout the year, including festivals, concerts, and religious celebrations. Check the local event calendar to see what's happening during your visit.`,
        suggestedItinerary: `## Suggested Rome Itinerary

Here's a suggested 3-day itinerary to help you make the most of your time in Rome.

### Day 1
* Morning: Visit the Colosseum and Roman Forum.
* Afternoon: Explore Palatine Hill and the Capitoline Museums.
* Evening: Enjoy dinner in Monti.

### Day 2
* Morning: Visit Vatican City, including St. Peter's Basilica and the Vatican Museums.
* Afternoon: Explore Castel Sant'Angelo and cross Ponte Sant'Angelo.
* Evening: Enjoy dinner in Trastevere.

### Day 3
* Morning: Visit the Pantheon and the Trevi Fountain.
* Afternoon: Climb the Spanish Steps and explore the Borghese Gallery and Gardens.
* Evening: Enjoy a farewell dinner and gelato.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Rome?",
        answer: `Some of the best things to do in Rome include visiting the Colosseum, exploring Vatican City, tossing a coin in the Trevi Fountain, and climbing the Spanish Steps. Be sure to sample authentic Roman cuisine and explore the charming neighborhood of Trastevere. It's important to note, that there are other things to do in Rome, besides these main attractions.`
      },
        {
        question: "How many days do you need in Rome?",
        answer: `Ideally, you should spend at least 3 days in Rome to see the major attractions and get a feel for the city. However, if you have more time, you could easily spend a week or more exploring Rome's hidden gems and surrounding areas. 5-7 days allows you to fully explore the city and the Vatican.`
      },
        {
        question: "What is Rome famous for?",
        answer: `Rome is famous for its ancient history, iconic landmarks, and vibrant culture. It's home to the Colosseum, Roman Forum, Vatican City, and numerous other historical sites. Rome is also known for its delicious food, art, and fashion. Its also the home of the Pope, head of the Catholic Church.`
      },
        {
        question: "When is the best time to visit Rome?",
        answer: `The best time to visit Rome is during the spring (April-May) or fall (September-October) when the weather is mild and the crowds are smaller. Summer can be hot and crowded, while winter can be cooler and rainier.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Historic, vibrant, romantic",
        budgetBreakdown: {
          freeActivities: "Visit the Pantheon,Toss a coin in the Trevi Fountain,Climb the Spanish Steps,Walk through Trastevere",
          budgetFriendly: "Colosseum and Roman Forum (€16),Vatican Museums (€26),Pizza al taglio (€3-€6 per slice),Local trattoria meal (€20-€30)",
          splurgeWorthy: "Luxury hotel stay (€300+ per night),Fine dining experience (€100+ per person)"
        },
        localSecrets: ["Visit the Colosseum on Tuesdays at 8:30 AM, entering through the Via Labicana entrance to avoid the longest lines. Locals often buy tickets online the night before, so there are fewer people at the physical ticket office.", "Buy the 'BIT' single-journey ticket (€1.50) on the ATAC app to avoid queues. For longer stays, get the 'Roma Pass' which combines transport and museum access. Stand on the right side of escalators and let people pass on the left.", "Expect to spend €45-60 per day on a budget trip, including €15-20 for meals (pizza or pasta), €5 for transport, €15-20 for attractions (entry to one paid site), and €10 for miscellaneous costs.", "Explore the Testaccio Market (Via Beniamino Franklin) for authentic Roman goods. Bargain for leather goods and clothing, aiming for 10-15% off. Buy local cheeses like Pecorino Romano from 'Remo's' stall.", "Avoid restaurants directly surrounding the Trevi Fountain, where a simple pasta dish can cost €25-30. Instead, walk 5 minutes to 'Pasta Imperiale' on Via dei Coronari (near Piazza Navona), where pasta is €10-15.", "Attend the 'Festa de Noantri' in Trastevere (mid-July) for a traditional Roman festival with street food, music, and processions. However, be aware that the event can make transport more difficult and accommodations harder to book in Trastevere."],
        diningHighlights: {
          mustTryDishes: "Carbonara,Cacio e Pepe,Supplì,Trapizzino",
          bestCafes: "Sant'Eustachio Il Caffè: Known for its strong coffee and traditional atmosphere.,Antico Caffè Greco: A historic cafe near the Spanish Steps, serving excellent coffee and pastries.",
          topRestaurants: "Roscioli Salumeria con Cucina: High-quality cured meats, cheeses, and pasta dishes.,Armando al Pantheon: Traditional Roman cuisine near the Pantheon.",
          foodMarkets: "Testaccio Market: Fresh produce, meat, cheese, and street food.,Campo de' Fiori: A historic market offering a variety of food and souvenirs.",
          diningTips: "Reservations are recommended for popular restaurants. Tipping is not mandatory but appreciated. Try to learn a few basic Italian phrases to enhance your dining experience."
        },
        seasonalHighlights: {
          spring: "Mild temperatures, blooming flowers, and fewer crowds make spring an ideal time to visit Rome. Explore the gardens and enjoy outdoor activities.",
          summer: "Hot and sunny weather, perfect for enjoying gelato and outdoor cafes. Be prepared for crowds and higher prices.",
          fall: "Mild temperatures, fewer crowds, and beautiful autumn foliage make fall a great time to explore Rome's parks and gardens.",
          winter: "Cooler temperatures and fewer tourists, offering a more peaceful experience. Enjoy indoor activities like visiting museums and churches."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "4",
          averageTimePerAttraction: "30-60 minutes",
          walkingFriendly: true,
          publicTransportQuality: "Good"
        }
      }}
    />
  );
};