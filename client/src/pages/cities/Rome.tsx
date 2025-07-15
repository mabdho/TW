import React from 'react';
import { CityPage } from '../../components/CityPage';
import { CriticalResourceLoader } from '../../components/CriticalResourceLoader';

export const Rome: React.FC = () => {
  const heroImage = "https://plus.unsplash.com/premium_photo-1661964123160-8d049fa07f0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  return (
    <CriticalResourceLoader 
      heroImage={heroImage}
      criticalImages={[heroImage]}
    >
      <CityPage
      cityName="Rome"
      country="Italy"
      title={"15 Best Things to Do in Rome, Italy (2025 Guide)"}
      description={`Discover the best things to do in Rome with this comprehensive 2025 guide. From the Colosseum to Vatican City, explore top attractions and insider tips for an unforgettable Rome experience.`}
      imageUrl={"https://plus.unsplash.com/premium_photo-1661964123160-8d049fa07f0c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Colosseum and Roman Forum",
        "Throw a coin into the Trevi Fountain",
        "Explore Vatican City and St. Peter's Basilica",
        "Wander through the charming Trastevere neighborhood",
        "Indulge in authentic Roman cuisine",
        "Discover the Pantheon's architectural marvel"]}
      attractions={[
        {
        name: "Colosseum",
        description: `## Overview
The Colosseum, or Flavian Amphitheater, is an iconic symbol of ancient Rome. This massive amphitheater once hosted gladiatorial contests and public spectacles. Walking through its ruins, you can almost hear the roar of the crowds and imagine the grandeur of the Roman Empire. It's an absolute must-see for anyone visiting Rome, and frankly, is a top reason to explore Rome, period.

### Best Photo Spots
For stunning photos, head to the Oppian Hill Park for a panoramic view of the Colosseum. Early morning or late afternoon light is best. Try capturing the Colosseum framed by the trees.

### Insider Tips
Tip: Book your tickets online in advance to avoid long queues. Consider a guided tour to learn more about its history. Avoid the midday heat, especially in the summer months.`,
        practicalInfo: {
        howToGetThere: "Metro Line B to Colosseo station",
        openingHours: "8:30 AM - 7:00 PM (varies seasonally)",
        cost: "€16 (includes Roman Forum and Palatine Hill)",
        website: "parcocolosseo.it"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic views from Oppian Hill Park",
        insiderTip: "Arrive right when it opens to beat the crowds. Head straight to the upper levels for a clearer view before everyone else arrives.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility for wheelchair users; some areas are not accessible."
      }
      },
        {
        name: "Roman Forum",
        description: `## Overview
The Roman Forum was the heart of ancient Rome, a bustling center of political, religious, and social life. Today, it's a sprawling complex of ruins, offering a glimpse into the daily life of the Roman Republic and Empire. You'll find the remains of temples, basilicas, and government buildings here. Allow plenty of time to explore; it's really quite extensive!

### Best Photo Spots
Capture the Temple of Saturn with the Colosseum in the background for a classic Roman photo. The best light is in the late afternoon.

### Insider Tips
Tip: Wear comfortable shoes as you'll be doing a lot of walking on uneven ground. Bring water and sunscreen, especially during the summer months. Consider downloading an audio guide for a self-guided tour.`,
        practicalInfo: {
        howToGetThere: "Metro Line B to Colosseo station",
        openingHours: "8:30 AM - 7:00 PM (varies seasonally)",
        cost: "Included with Colosseum ticket (€16)",
        website: "parcocolosseo.it"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Temple of Saturn with the Colosseum in the background",
        insiderTip: "Enter the Forum from the Palatine Hill entrance for a less crowded experience. Walk all the way to the back where you’ll find shaded spots to sit and absorb the atmosphere without the tour groups.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Uneven ground; limited accessibility for wheelchair users."
      }
      },
        {
        name: "Trevi Fountain",
        description: `## Overview
The Trevi Fountain is perhaps the most famous fountain in the world, and definitely one of the top attractions in Rome. This Baroque masterpiece is a stunning display of artistry and engineering. Legend says that if you throw a coin into the fountain, you're guaranteed to return to Rome. It's often crowded, but worth battling the crowds to see. There are a lot of fun things to do in Rome, but this is definitely top-tier.

### Best Photo Spots
The best photo spot is directly in front of the fountain, of course. Early morning is the best time to avoid the crowds and capture the fountain in its full glory. At night, the fountain is beautifully illuminated.

### Insider Tips
Tip: To avoid the crowds, visit the fountain early in the morning (before 7:00 AM) or late at night (after 11:00 PM). Be aware of pickpockets, especially in crowded areas.`,
        practicalInfo: {
        howToGetThere: "Metro Line A to Barberini station",
        openingHours: "Open 24 hours",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["art", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Early morning or late night to avoid crowds",
        insiderTip: "Stand on the right side of the fountain facing away from it. Throw the coin over your left shoulder to ensure you’ll return to Rome.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Easy access; can be crowded."
      }
      },
        {
        name: "Vatican City & St. Peter's Basilica",
        description: `## Overview
Vatican City is an independent city-state within Rome, and the heart of the Catholic Church. St. Peter's Basilica is the centerpiece, a breathtaking example of Renaissance architecture. Inside, you'll find masterpieces by Michelangelo and Bernini. Be prepared for long lines, especially during peak season. Exploring Vatican City should be on your list of what to do in Rome. It is important to dress respectfully when visiting Vatican City.

### Best Photo Spots
Climb to the top of St. Peter's Dome for panoramic views of Rome. The best time for photos is in the morning when the light is softer.

### Insider Tips
Tip: Book your tickets online in advance to skip the long queues. Dress modestly (shoulders and knees covered). Consider a guided tour to learn more about the basilica's history and art.`,
        practicalInfo: {
        howToGetThere: "Metro Line A to Ottaviano-San Pietro station",
        openingHours: "7:00 AM - 7:00 PM (varies seasonally)",
        cost: "Free (Basilica), €26 (Vatican Museums)",
        website: "vatican.va"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "architecture", "religion"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic views from St. Peter's Dome",
        insiderTip: "Enter Vatican City through the Sant’Anna gate to avoid the main crowds. It's typically used by residents and employees and has shorter lines. You'll need to show your passport to enter this way.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible; elevators available in St. Peter's Basilica and Vatican Museums."
      }
      },
        {
        name: "Pantheon",
        description: `## Overview
The Pantheon is a remarkable architectural marvel, a former Roman temple now a church. Its massive dome and oculus (central opening) are truly awe-inspiring. It's one of the best-preserved ancient Roman buildings and a must-see place in Rome. Walking inside and gazing up at the oculus is an experience you won't soon forget.

### Best Photo Spots
Capture the Pantheon's exterior from the Piazza della Rotonda. Inside, take a photo looking up at the oculus, especially when sunlight streams through.

### Insider Tips
Tip: Visit during off-peak hours (early morning or late afternoon) to avoid the crowds. Check for special events or concerts held inside the Pantheon.`,
        practicalInfo: {
        howToGetThere: "Bus lines to Piazza della Rotonda",
        openingHours: "9:00 AM - 7:00 PM (Sunday: 9:00 AM - 6:00 PM)",
        cost: "€5",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "religion"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Interior shot looking up at the oculus",
        insiderTip: "Go on a rainy day! The water pouring through the oculus is a spectacular (and rare) sight and makes for incredible photos. Just be sure to stand to the side.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible; flat entrance."
      }
      },
        {
        name: "Trastevere",
        description: `## Overview
Trastevere is a charming neighborhood known for its narrow cobblestone streets, ivy-covered buildings, and vibrant nightlife. It's a great place to wander, explore hidden alleys, and soak up the Roman atmosphere. It's also home to numerous restaurants, cafes, and bars, making it a popular spot for both locals and tourists. If you are looking for things to do in Rome at night, this is the place to be.

### Best Photo Spots
Capture the neighborhood's charm from Ponte Sisto bridge, especially at sunset. The ivy-covered buildings and cobblestone streets offer endless photo opportunities.

### Insider Tips
Tip: Get lost in the maze of streets and discover hidden gems. Visit the Basilica di Santa Maria in Trastevere, one of Rome's oldest churches. Enjoy an aperitivo (pre-dinner drinks and snacks) at one of the local bars.`,
        practicalInfo: {
        howToGetThere: "Tram line 8 to Trastevere",
        openingHours: "Various",
        cost: "Free (to explore)",
        website: ""
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["culture", "food", "nightlife", "photography"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunset views from Ponte Sisto bridge",
        insiderTip: "Wander away from the main streets (Viale di Trastevere). The small side alleys are full of cute shops and restaurants that are much less crowded and offer a more authentic experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Cobblestone streets; some areas may be difficult for wheelchair users."
      }
      },
        {
        name: "Pizzarium Bonci",
        description: `## Overview
Pizzarium Bonci is a celebrated pizzeria known for its gourmet pizza al taglio (pizza by the slice). Gabriele Bonci, the chef behind it, is considered one of the best pizza makers in Rome, perhaps even Italy. The eatery features a wide array of creative toppings and high-quality ingredients. I think it’s a great spot to grab a quick and delicious meal!

### What to Expect
The atmosphere is casual and bustling. It's a popular spot, so expect a bit of a wait. You'll choose your slice, and it's weighed for the price.

### Signature Dishes
Try the potato pizza (patate), a local favorite. Also, sample any pizza with seasonal vegetables or unique cheeses. They are always experimenting with something new.`,
        practicalInfo: {
        howToGetThere: "Metro Line A to Cipro station",
        openingHours: "11:00 AM - 10:00 PM (closed Sundays)",
        cost: "€3-€5 per slice",
        website: "bonci.it"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "cuisine", "culinary"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the colorful array of pizza toppings",
        insiderTip: "Grab a number and be patient, especially during lunchtime. Order a few different slices to share and taste a variety of flavors.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Easy access, but can get crowded."
      }
      },
        {
        name: "Roscioli Salumeria con Cucina",
        description: `## Overview
Roscioli Salumeria con Cucina is a deli, restaurant, and wine bar all rolled into one. It’s known for its high-quality cured meats, cheeses, and pasta dishes. It’s a culinary institution in Rome. This is one of the tastiest things to do in Rome!

### Dining Atmosphere
The atmosphere is lively and bustling, with shelves lined with gourmet products. It's a great place for a casual lunch or a more formal dinner.

### Local Food Culture
Expect authentic Roman cuisine made with the freshest ingredients. Try the carbonara or cacio e pepe – you won't be disappointed.`,
        practicalInfo: {
        howToGetThere: "Bus lines to Via dei Giubbonari",
        openingHours: "12:00 PM - 4:00 PM, 7:00 PM - 12:00 AM (closed Sundays)",
        cost: "€25-€50 per person",
        website: "roscioli.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "cuisine", "dining", "wine"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the beautiful plates of cured meats and cheeses",
        insiderTip: "Make a reservation well in advance, especially for dinner. Ask for a table in the back room for a quieter experience. Check out the deli counter for unique Italian products to take home.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility; narrow entrance."
      }
      },
        {
        name: "Sant'Eustachio Il Caffè",
        description: `## Overview
Sant'Eustachio Il Caffè is a historic cafe known for its delicious coffee and traditional atmosphere. It is located near the Pantheon and has been serving coffee since 1938. Many consider it to be serving some of the best coffee in Rome.

### Coffee Experience
The atmosphere is classic and old-world, with marble floors and wooden furnishings. They use a secret blend of beans and a unique preparation method.

### Signature Drinks
Try the Gran Caffè, a signature drink that's both strong and sweet. It’s a must for coffee lovers.`,
        practicalInfo: {
        howToGetThere: "Bus lines to Piazza Sant'Eustachio",
        openingHours: "8:30 AM - 1:00 AM (varies seasonally)",
        cost: "€2-€5 per coffee",
        website: "santeustachioilcaffe.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["coffee", "cafe", "food", "culinary"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the classic cafe atmosphere and the baristas in action.",
        insiderTip: "Order your coffee at the counter and pay first. Then, bring your receipt to the barista. Don't stir your Gran Caffè – drink it as is to experience the full flavor.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Easy access, but can get crowded."
      }
      },
        {
        name: "Borghese Gallery and Museum",
        description: `## Overview
The Borghese Gallery and Museum houses a stunning collection of sculptures and paintings, primarily from the Borghese collection. Masterpieces by Bernini and Caravaggio can be found here. It's located within the beautiful Borghese Gardens, offering a peaceful escape from the city bustle.

### Best Photo Spots
No photos are allowed inside the gallery itself. Take advantage of the beautiful Borghese Gardens for scenic shots.

### Insider Tips
Tip: Reservations are mandatory and must be booked in advance, often weeks or even months ahead, especially during peak season. The entry is timed, and you are only allowed 2 hours inside.`,
        practicalInfo: {
        howToGetThere: "Metro Line A to Spagna or Flaminio stations, then walk through the Borghese Gardens",
        openingHours: "9:00 AM - 7:00 PM (closed Mondays)",
        cost: "€22",
        website: "galleriaborghese.it"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "history", "sculpture"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Scenic views from the Borghese Gardens",
        insiderTip: "Rent a rowboat on the lake in the Borghese Gardens after your visit to relax and enjoy the scenery. You can find the boat rental near the Temple of Asclepius.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible; elevators available."
      }
      },
        {
        name: "Catacombs of Rome",
        description: `## Overview
The Catacombs of Rome are ancient underground burial places used by early Christians and Jews. They offer a unique and somewhat eerie glimpse into the history of these communities. There are several catacombs to choose from, each with its own history. It's definitely one of the more unique things to do in Rome.

### What to Expect
Expect to descend into dimly lit tunnels. The temperature is cooler underground, so dress accordingly. Guided tours are typically available.

### Insider Tips
Tip: Choose the Catacombs of Callixtus or Domitilla for well-preserved and historically significant sites. Be respectful during your visit.`,
        practicalInfo: {
        howToGetThere: "Bus lines to Appian Way",
        openingHours: "Varies depending on the catacomb",
        cost: "€8-€10",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["history", "religion", "adventure"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Photography is generally not allowed inside the catacombs to protect the ancient artwork and remains",
        insiderTip: "Wear comfortable shoes with good grip. The underground passages can be uneven and slippery. Some catacombs have narrow passages, which may be claustrophobic for some visitors.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility; many steps."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Rome

Rome has a fairly extensive public transportation system, making it relatively easy to get around. However, the historic center is best explored on foot, as many of the attractions are within walking distance of each other.

### Public Transport
The metro system consists of three lines (A, B, and C). Buses and trams also serve the city. Consider purchasing a Roma Pass for unlimited travel on public transport and free or discounted entry to some museums.

### Taxis & Rideshare
Taxis are readily available, but can be expensive. Rideshare services like Uber are also available. Be sure to use licensed taxis or verified rideshare services to avoid scams.`,
        whereToStay: `## Where to Stay in Rome

Rome offers a wide range of accommodation options, from budget-friendly hostels to luxury hotels. The best area to stay depends on your preferences and budget.

### Best Areas
For a central location, consider staying near the Pantheon or Piazza Navona. Trastevere is a great option for a lively atmosphere and charming restaurants. Monti is a trendy neighborhood with boutique hotels and artisan shops.

### Luxury Options
Luxury hotels can be found near the Spanish Steps and Via Veneto. These hotels offer high-end amenities and impeccable service.`,
        bestTimeToVisit: `## Best Time to Visit Rome

The best time to visit Rome depends on your preferences. Spring and fall offer pleasant weather and fewer crowds. Summer can be hot and crowded, but also offers numerous outdoor events.

### Peak Season
Peak season is from June to August and during the Christmas holidays. Expect higher prices and larger crowds during these times.

### Weather Overview
Rome has a Mediterranean climate with mild winters and hot summers. Spring and fall offer comfortable temperatures, ideal for sightseeing.`,
        suggestedItinerary: `## Suggested Rome Itinerary

Here's a suggested itinerary for a 3-day trip to Rome:

### Day 1
Start your day at the Colosseum and Roman Forum. In the afternoon, visit the Pantheon and Trevi Fountain. Enjoy dinner in the Piazza Navona.

### Day 2
Explore Vatican City, including St. Peter's Basilica and the Vatican Museums. In the afternoon, climb to the top of Castel Sant'Angelo for panoramic views of the city. Have dinner in the Trastevere neighborhood.

### Day 3
Visit the Borghese Gallery and Museum (book in advance!). Spend the afternoon exploring the Spanish Steps and shopping on Via Condotti. Enjoy a farewell dinner at a traditional Roman trattoria.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Rome?",
        answer: `Rome offers a wealth of attractions, including the Colosseum, Roman Forum, Trevi Fountain, Vatican City, Pantheon, and the charming Trastevere neighborhood. Don't forget to indulge in the delicious Roman cuisine!`
      },
        {
        question: "How many days do you need in Rome?",
        answer: `Ideally, you should spend at least 3-4 days in Rome to see the major attractions and experience the city's atmosphere. A longer stay will allow you to explore more hidden gems and enjoy a more relaxed pace.`
      },
        {
        question: "What is Rome famous for?",
        answer: `Rome is famous for its ancient history, iconic landmarks, stunning art and architecture, and delicious cuisine. It is also the capital of Italy and the home of the Catholic Church.`
      },
        {
        question: "When is the best time to visit Rome?",
        answer: `The best time to visit Rome is in the spring (April-May) or fall (September-October) when the weather is pleasant and the crowds are smaller. Summer can be hot and crowded, while winter is mild but can be rainy.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Historical, Vibrant, Culinary",
        budgetBreakdown: {
          freeActivities: "Visit the Trevi Fountain,Explore the Pantheon,Wander through Trastevere,Walk along the Spanish Steps",
          budgetFriendly: "Entry to Colosseum and Roman Forum (€16),Pizza al taglio at Pizzarium Bonci (€3-€5 per slice),Gelato (€3-€5),Public transportation day pass (€7)",
          splurgeWorthy: "Fine dining at a Michelin-starred restaurant,Private guided tour of Vatican City,Luxury hotel stay with panoramic city views"
        },
        localSecrets: ["To beat the Colosseum crowds, visit on Tuesdays at 8:30 AM and enter via the arena floor entrance—a tour that gives you direct access, avoiding the main lines. It's best to book this tour in advance!", "Buy the 'BIT' ticket for individual trips or the 'Roma Pass' for multiple days on Rome's public transport. Download the 'Citymapper' app to plan your routes in real-time. Remember: validate your ticket at the machine when you first board a bus or tram. Locals get annoyed if you don't!", "A realistic daily budget in Rome is €45-60. Breakfast (€5-8), Lunch (€12-18), Dinner (€20-30), Transport (€7), Attraction Entrance (€10-20), and Miscellaneous (€5-10).", "For authentic goods, visit the Campo de' Fiori market (open Mon-Sat mornings) to buy local produce, cheeses, and cured meats. Head to Via del Governo Vecchio for independent boutiques and artisan shops. Bargaining is rare, but polite inquiries may get you a small discount.", "Avoid the restaurants right next to the Trevi Fountain and the Colosseum. They are overpriced and often serve mediocre food. Instead, walk a few blocks away and try Trattoria Da Enzo al 29 (Via dei Vascellari, 29) in Trastevere for genuine Roman cuisine.", "Rome celebrates 'Natale di Roma' (Rome's birthday) on April 21st each year. This affects traffic and causes minor closures around the Colosseum, but there are reenactments, parades, and fireworks that are worth seeing."],
        diningHighlights: {
          mustTryDishes: "Pasta Carbonara,Cacio e Pepe,Pizza Romana,Supplì (fried rice balls)",
          bestCafes: "Sant'Eustachio Il Caffè: Known for its secret blend and Gran Caffè.,Caffè Greco: A historic cafe with a literary ambiance.",
          topRestaurants: "Roscioli Salumeria con Cucina: High-quality cured meats and pasta.,Armando al Pantheon: Traditional Roman cuisine near the Pantheon.",
          foodMarkets: "Campo de' Fiori: Lively market with fresh produce and local products.,Mercato Centrale: A modern food hall with a variety of culinary offerings.",
          diningTips: "Tipping is not mandatory in Rome, but it is appreciated for good service. A small tip (5-10%) is sufficient. Reservations are recommended, especially for dinner at popular restaurants."
        },
        seasonalHighlights: {
          spring: "Spring in Rome is beautiful with blooming flowers and pleasant weather. It's a great time for outdoor activities and sightseeing.",
          summer: "Summer in Rome is hot and crowded, but there are many outdoor events and festivals. Be prepared for the heat and book accommodations in advance.",
          fall: "Fall in Rome is mild and sunny, making it an ideal time for exploring the city. The fall harvest brings fresh seasonal produce to the markets.",
          winter: "Winter in Rome is mild and relatively quiet. It's a good time to visit if you prefer fewer crowds and lower prices. Christmas markets add a festive touch."
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
    </CriticalResourceLoader>
  );
};