import React from 'react';
import { CityPage } from '../../components/CityPage';

export const London: React.FC = () => {
  return (
    <CityPage
      cityName="London"
      country="United Kingdom"
      title={"Best Things to Do in London, United Kingdom (2025 Guide)"}
      description={`Discover the best things to do in London — top attractions, hidden gems, and food spots. Complete London travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?q=80&w=678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Tower of London",
        "Explore the British Museum",
        "Walk across Tower Bridge",
        "See a show in the West End",
        "Take a ride on the London Eye",
        "Explore Borough Market"]}
      attractions={[
        {
        name: "Tower of London",
        description: `# Overview
The Tower of London is a historic castle located on the north bank of the River Thames. It has served as a royal palace, prison, armoury, and treasury. Exploring the Tower offers a glimpse into British history.

## Best Photo Spots
The best photo spot is from Tower Bridge, capturing the Tower with the bridge in the background. Another great spot is on the riverbank facing the Tower's main entrance. 

## Insider Tips
Tip: Arrive early (around 9:00 AM) to avoid the largest crowds, especially during peak season. Purchase tickets online in advance to skip the ticket queues. Don't miss the Crown Jewels, but be prepared for a wait. There are often costumed interpreters that can provide an interesting perspective.`,
        practicalInfo: {
        howToGetThere: "Take the tube to Tower Hill station (Circle or District line).",
        openingHours: "Tuesday to Saturday 9:00 AM - 5:30 PM, Sunday to Monday 10:00 AM - 5:30 PM.",
        cost: "£34.80 for adults, £17.40 for children.",
        website: "hrp.org.uk/tower-of-london"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Tower Bridge view; riverside angles",
        insiderTip: "Arrive right at opening time to beat the crowds, especially for the Crown Jewels.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility in some areas of the Tower."
      }
      },
        {
        name: "British Museum",
        description: `# Overview
The British Museum is one of the world's largest and most comprehensive museums, showcasing human history, art, and culture. From the Rosetta Stone to Egyptian mummies, there's something for everyone.

## Best Photo Spots
The Great Court offers a stunning architectural photo opportunity. The Rosetta Stone and Egyptian mummies are popular subjects.

## Insider Tips
Tip: The British Museum is HUGE. Focus on specific collections you're interested in to avoid feeling overwhelmed. Consider taking a guided tour or downloading the museum's app for a self-guided experience. I found the Egyptian exhibit particularly interesting.`,
        practicalInfo: {
        howToGetThere: "Take the tube to Tottenham Court Road, Holborn, or Russell Square station.",
        openingHours: "Daily 10:00 AM - 5:00 PM (Fridays until 8:30 PM).",
        cost: "Free.",
        website: "britishmuseum.org"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "culture"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Great Court architecture, Rosetta Stone",
        insiderTip: "Focus on one or two sections; the museum is too large to see everything in one visit.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible with elevators and ramps."
      }
      },
        {
        name: "Buckingham Palace",
        description: `# Overview
Buckingham Palace is the official residence and administrative headquarters of the monarch of the United Kingdom. Witness the Changing of the Guard ceremony or tour the State Rooms during the summer opening.

## Best Photo Spots
The iconic front gates and the palace facade are classic photo opportunities. Capture the Changing of the Guard ceremony for a memorable shot.

## Insider Tips
Tip: The Changing of the Guard is very popular, so arrive at least an hour early to secure a good viewing spot. Check the schedule online, as it doesn't happen every day. The State Rooms are only open to the public during the summer months (usually July to September).`,
        practicalInfo: {
        howToGetThere: "Take the tube to Victoria, Green Park, or St. James's Park station.",
        openingHours: "State Rooms open during summer (check website for dates and times).",
        cost: "Varies depending on the tour; check website for details. Changing of the Guard is free to watch.",
        website: "rct.uk/visit/buckingham-palace"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture"],
        costLevel: "Moderate",
        seasonalBest: "Summer",
        photoOpportunity: "Front gates, Changing of the Guard",
        insiderTip: "Arrive at least an hour early for Changing of the Guard to get a good viewing spot. Check the schedule online in advance.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Varies depending on the tour; check website for details."
      }
      },
        {
        name: "Borough Market",
        description: `# Overview
Borough Market is a historic food market in Southwark, offering a wide array of produce, artisanal cheeses, meats, baked goods, and street food. It's a culinary paradise.

## What to Expect
Prepare for crowds, especially on weekends. The market can get very busy, but the atmosphere is lively and the food is worth it. There are plenty of options for lunch or a snack.

## Insider Tips
Tip: Visit on a weekday morning for a less crowded experience. Bring cash, as some vendors may not accept card payments. Sample as much as possible! It's a great way to discover new flavors.`,
        practicalInfo: {
        howToGetThere: "Take the tube to London Bridge station.",
        openingHours: "Monday to Friday 10:00 AM - 5:00 PM, Saturday 8:00 AM - 5:00 PM. Closed on Sundays.",
        cost: "Free entry; food prices vary.",
        website: "boroughmarket.org.uk"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Vibrant food displays, bustling market scenes",
        insiderTip: "Go early on a weekday to avoid the weekend crowds. Many stalls offer samples before you buy.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible, but can be crowded."
      }
      },
        {
        name: "Sky Garden",
        description: `# Overview
The Sky Garden offers panoramic views of London from a unique vantage point. Located on the top floors of 20 Fenchurch Street (the 'Walkie Talkie' building), it's a public garden with restaurants and bars.

## Best Photo Spots
The observation decks offer 360-degree views of London landmarks. Capture the Shard, Tower Bridge, and the River Thames from above.

## Insider Tips
Tip: Admission is free, but you need to book tickets online in advance. Book several weeks ahead, especially if you're visiting during peak season. The restaurants and bars offer a more relaxed experience with guaranteed entry.`,
        practicalInfo: {
        howToGetThere: "Take the tube to Monument or Bank station.",
        openingHours: "Daily 10:00 AM - 6:00 PM (weekdays), 11:00 AM - 9:00 PM (weekends).",
        cost: "Free (booking required).",
        website: "skygarden.london"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["architecture", "views"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic city views, The Shard",
        insiderTip: "Book your free tickets weeks in advance, especially for sunset views.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Tate Modern",
        description: `# Overview
Tate Modern is Britain's national museum of modern and contemporary art. Housed in a former power station, it features works by renowned artists from around the world.

## Best Photo Spots
The Turbine Hall is an impressive space for photos. The viewing platform on the upper floors offers panoramic views of the city.

## Insider Tips
Tip: Admission to the permanent collection is free. Special exhibitions require a ticket. Consider taking a free guided tour to learn more about the art on display.`,
        practicalInfo: {
        howToGetThere: "Take the tube to Southwark or Blackfriars station.",
        openingHours: "Sunday to Thursday 10:00 AM - 6:00 PM, Friday and Saturday 10:00 AM - 10:00 PM.",
        cost: "Free (special exhibitions may require tickets).",
        website: "tate.org.uk/visit/tate-modern"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "culture"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Turbine Hall, city views from viewing platform",
        insiderTip: "Visit on a weekday to avoid the weekend crowds. The permanent collection is free.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Dishoom Covent Garden",
        description: `# Overview
Dishoom Covent Garden is a popular restaurant serving Bombay-style Indian cuisine in a vibrant and bustling atmosphere. It's known for its delicious food and lively ambiance.

## Dining Experience
The restaurant is designed to resemble a Bombay café, with vintage decor and a lively atmosphere. It's a great place for a casual meal or a special occasion. Expect a wait, especially during peak hours. The cuisine is flavorful and authentic, showcasing the diverse culinary traditions of India. Be sure to try the Black Daal, it's a staple on their menu.

## Insider Tips
Tip: Expect a queue, especially during peak dining hours. They do not take reservations for smaller groups, so be prepared to wait. Consider visiting during off-peak hours (e.g., mid-afternoon) to avoid the crowds. It is well worth a visit!`,
        practicalInfo: {
        howToGetThere: "Take the tube to Covent Garden station.",
        openingHours: "Daily 8:00 AM - 11:00 PM.",
        cost: "Moderate (£20-£40 per person).",
        website: "dishoom.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Cafe interior, delicious plates",
        insiderTip: "Arrive before peak hours (lunch/dinner) to avoid long queues. Try the black daal; it's a signature dish.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible; check with the restaurant for specific needs."
      }
      },
        {
        name: "Regent's Park",
        description: `# Overview
Regent's Park is one of London's Royal Parks, offering beautiful gardens, open spaces, and recreational activities. It's home to the London Zoo, an open-air theatre, and stunning rose gardens. Whether you are looking for something to do in London on a nice day, or just want to spend some time outdoors, this is a great option. It's the kind of place you might linger longer than expected.

## Best Photo Spots
The rose gardens are particularly beautiful during the summer months. Primrose Hill, located on the northern edge of the park, offers panoramic views of London.

## Insider Tips
Tip: Rent a rowboat on the boating lake for a relaxing afternoon. Pack a picnic and enjoy it in one of the park's many green spaces.`,
        practicalInfo: {
        howToGetThere: "Take the tube to Regent's Park, Baker Street, or Great Portland Street station.",
        openingHours: "Daily 5:00 AM - dusk.",
        cost: "Free.",
        website: "royalparks.org.uk/parks/the-regents-park"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation"],
        costLevel: "Free",
        seasonalBest: "Summer",
        photoOpportunity: "Rose gardens, Primrose Hill views",
        insiderTip: "Rent a boat on the lake for a relaxing experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible with paved paths."
      }
      },
        {
        name: "The Churchill Arms",
        description: `# Overview
The Churchill Arms is a charming and historic pub in Kensington, renowned for its extravagant floral displays and traditional Thai cuisine. It’s a delightful blend of classic British pub culture and exotic culinary flavors.

## Dining Experience
The pub's exterior is adorned with an abundance of flowers, creating a picturesque and inviting atmosphere. Inside, the traditional pub decor is complemented by a Thai restaurant serving authentic dishes. Enjoy classic pub fare alongside flavorful curries and stir-fries. Be sure to try the green curry or the pad Thai. It offers a uniquely satisfying culinary meal.

## Insider Tips
Tip: The Churchill Arms is extremely popular, especially during peak hours, so arrive early to secure a table. During the winter months, they'll have Christmas decorations. You will not be disappointed with a visit here.`,
        practicalInfo: {
        howToGetThere: "Take the tube to Notting Hill Gate or High Street Kensington station.",
        openingHours: "Sunday to Thursday 11:00 AM - 11:00 PM, Friday and Saturday 11:00 AM - 12:00 AM.",
        cost: "Moderate (£15-£30 per person).",
        website: "churchillarmskensington.co.uk"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Floral exterior, cozy interior",
        insiderTip: "Arrive early to avoid the crowds. The Thai food is surprisingly good and authentic.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility; check with the pub for details."
      }
      },
        {
        name: "Shakespeare's Globe",
        description: `# Overview
Shakespeare's Globe is a reconstruction of the original Globe Theatre, where many of William Shakespeare's plays were first performed. Attend a performance or take a tour to learn about the history of the theatre.

## What to Expect
Standing tickets are available for a more immersive experience. Be prepared to stand for the duration of the performance. Tours offer a behind-the-scenes look at the theatre and its history.

## Insider Tips
Tip: Book tickets in advance, especially for popular plays. Consider attending a matinee performance for a less crowded experience. Check the weather forecast, as the theatre is open-air.`,
        practicalInfo: {
        howToGetThere: "Take the tube to Mansion House or Southwark station.",
        openingHours: "Varies depending on performances and tours; check website for details.",
        cost: "Varies depending on the performance or tour; check website for details.",
        website: "shakespearesglobe.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["theatre", "history"],
        costLevel: "Moderate",
        seasonalBest: "Summer",
        photoOpportunity: "Exterior of the theatre, stage during a performance",
        insiderTip: "Purchase standing tickets for a more immersive experience, but be prepared to stand for the entire performance.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility; check with the theatre for details."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around London

London has an extensive public transport network, making it easy to get around the city. The tube is the quickest way to travel long distances, while buses are a good option for shorter journeys and scenic routes. Walking is a great way to explore central London, but be prepared for long distances.

## Public Transport
The London Underground (tube) is the most efficient way to travel across the city. Purchase an Oyster card or use contactless payment for travel. Buses are another option, but they can be slower due to traffic. Consider downloading the Citymapper app for real-time travel information. It's a real life saver! 

## Taxis & Rideshare
Taxis are readily available in London, but they can be expensive. Rideshare services like Uber are also available. Be aware of surge pricing during peak hours.`,
        whereToStay: `## Where to Stay in London

London offers a wide range of accommodation options, from budget-friendly hostels to luxury hotels. The best area to stay depends on your interests and budget. 

## Best Areas
Central London (e.g., Westminster, Covent Garden) is ideal for sightseeing, but it can be expensive. Kensington and Chelsea are upscale residential areas with good transport links. Shoreditch is a trendy area with a vibrant nightlife. I'd recommend staying somewhere near a tube station for ease of access.

## Budget-Friendly
Consider staying in areas like Earls Court or Bayswater for more affordable accommodation options. Hostels are a good option for budget travelers.`,
        bestTimeToVisit: `## Best Time to Visit London

The best time to visit London depends on your preferences. Summer offers warm weather and long daylight hours, but it's also the busiest and most expensive time to visit. Spring and fall offer milder weather and fewer crowds.

## Peak Season
Summer (June to August) is peak season in London. Expect higher prices and larger crowds. Book accommodation and attractions well in advance. 

## Weather Overview
London has a temperate climate with mild winters and cool summers. Rain is common throughout the year, so be prepared for all types of weather. Pack layers to adjust to changing temperatures.`,
        suggestedItinerary: `## Suggested London Itinerary

This is just a suggested itinerary for London, of course, feel free to change it! 

## Day 1
Start your day with a visit to the Tower of London. Afterwards, walk across Tower Bridge and explore the South Bank. In the afternoon, visit the British Museum. In the evening, see a show in the West End.

## Day 2
Visit Buckingham Palace and witness the Changing of the Guard ceremony. Afterwards, explore Westminster Abbey and the Houses of Parliament. In the afternoon, take a ride on the London Eye. In the evening, enjoy dinner in Covent Garden.

## Day 3
Visit the Tate Modern and explore the South Bank. Afterwards, visit Borough Market for lunch. In the afternoon, explore Regent's Park and visit the London Zoo. In the evening, enjoy a meal at one of London's many restaurants.`
      }}
      faqs={[
        {
        question: "What are the best things to do in London?",
        answer: `London offers a variety of attractions, including historical landmarks like the Tower of London and Buckingham Palace, world-class museums like the British Museum and Tate Modern, and cultural experiences like seeing a show in the West End or exploring Borough Market.`
      },
        {
        question: "How many days do you need in London?",
        answer: `A minimum of 3 days is recommended to see the main attractions in London. However, 5-7 days would allow you to explore more thoroughly and visit some of the city's hidden gems.`
      },
        {
        question: "What is London famous for?",
        answer: `London is famous for its rich history, iconic landmarks, world-class museums, vibrant culture, and thriving arts scene.`
      },
        {
        question: "When is the best time to visit London?",
        answer: `Spring (April-May) and fall (September-October) are generally considered the best times to visit London, offering mild weather and fewer crowds.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Historic, Cosmopolitan, Vibrant",
        budgetBreakdown: {
          freeActivities: "Visiting the British Museum,Walking through Regent's Park,Exploring Borough Market (window shopping),Watching the Changing of the Guard (from a distance)",
          budgetFriendly: "Riding the tube (£2.50-£5 per journey),Visiting the Sky Garden (free, but booking required),Eating street food at Borough Market (£5-£10),Attending a matinee theatre performance (£20-£40)",
          splurgeWorthy: "Staying in a luxury hotel (£300+ per night),Dining at a Michelin-starred restaurant (£100+ per person)"
        },
        localSecrets: ["To avoid crowds at the Tower of London, visit on a Tuesday or Wednesday morning around 8:30 AM, before the tour buses arrive. Enter through the West Gate for quicker access.", "To use public transport like a local, buy an Oyster card (deposit £7) and load it with credit. Download the Citymapper app for real-time travel information and route planning. Stand on the right on escalators and let people pass on the left.", "A realistic budget for 3 days in London is around £45-60 per day: £15-20 for meals (breakfast £5, lunch £10, dinner £15), £10 for transport, £10 for attractions, and £10 for miscellaneous expenses.", "For authentic goods, visit the markets in Brick Lane (Sundays) for vintage clothing and street art. Head to Portobello Road Market (Fridays and Saturdays) for antiques and collectibles. Haggling is not common, but you can sometimes negotiate a better price for multiple items.", "Avoid the restaurants near Leicester Square that offer 'pre-theatre' menus, as they are often overpriced and serve mediocre food. Instead, try smaller eateries in nearby Soho or Chinatown for better value and authentic cuisine.", "Be aware that the Notting Hill Carnival takes place every year on the August bank holiday weekend. While it's a vibrant celebration, expect large crowds and road closures in the area. Plan your transportation accordingly."],
        diningHighlights: {
          mustTryDishes: "Fish and chips,Full English breakfast,Chicken tikka masala,Afternoon tea",
          bestCafes: "Monmouth Coffee Company (various locations): Known for its high-quality coffee and artisanal beans.,Flat White (Soho): A popular spot for Australian-style coffee and a relaxed atmosphere.",
          topRestaurants: "Dishoom (various locations): Bombay-style Indian cuisine in a vibrant setting.,The Palomar (Soho): Modern Israeli cuisine with a lively and communal dining experience.",
          foodMarkets: "Borough Market (Southwark) and Maltby Street Market (Bermondsey) offer a wide range of street food and artisanal products.",
          diningTips: "Tipping is customary in restaurants (10-15%). Reservations are recommended for popular restaurants, especially during peak hours. Pubs often have a wide selection of beers and serve traditional pub food."
        },
        seasonalHighlights: {
          spring: "Spring brings warmer weather and blooming flowers to London's parks. The Chelsea Flower Show is a highlight.",
          summer: "Summer is the peak season with long daylight hours and outdoor events. Open-air theatre performances are popular.",
          fall: "Fall offers milder weather and fewer crowds. The city's parks are particularly beautiful with autumn foliage.",
          winter: "Winter brings festive decorations and Christmas markets to London. Ice skating rinks pop up around the city."
        },
        quickFacts: {
          totalAttractions: "11",
          freeActivities: "6",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};