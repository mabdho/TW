import React from 'react';
import { CityPage } from '../../components/CityPage';
import { CriticalResourceLoader } from '../../components/CriticalResourceLoader';

export const London: React.FC = () => {
  const heroImage = "https://images.unsplash.com/photo-1737649766441-a334350d6015?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  
  return (
    <CriticalResourceLoader 
      heroImage={heroImage}
      criticalImages={[heroImage]}
    >
      <CityPage
      cityName="London"
      country="United Kingdom"
      title={"15 Best Things to Do in London, United Kingdom (2025 Guide)"}
      description={`Discover the best things to do in London with this comprehensive 2025 guide. From iconic Tower of London to hidden gems, explore top attractions and`}
      imageUrl={"https://images.unsplash.com/photo-1737649766441-a334350d6015?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Tower of London for a glimpse into royal history.",
        "Explore the British Museum's vast collection of artifacts.",
        "Take a ride on the London Eye for panoramic city views.",
        "Wander through the vibrant Borough Market.",
        "Catch a show in the West End theatre district.",
        "Stroll through Hyde Park and Kensington Gardens."]}
      attractions={[
        {
        name: "Tower of London",
        description: `## Overview
The Tower of London, a historic castle located on the north bank of the River Thames, has served as a royal palace, prison, armory, and treasury. It's steeped in history, and I think you'll find the tales of its famous prisoners and executions fascinating. Today, it's home to the Crown Jewels and the Yeoman Warders, or Beefeaters, who guard the tower and share its stories.

### Best Photo Spots
Capture the Tower Bridge from the Tower Wharf for a classic London shot. Inside, the White Tower and the Crown Jewels are prime subjects. The photo opportunities here are endless, from the Beefeaters to the ravens.

### Insider Tips
Tip: Arrive early (before 10:00 AM) to beat the crowds, especially during peak season. Many tour groups arrive later in the morning, so you'll have a more peaceful experience exploring this top attraction in London.`,
        practicalInfo: {
        howToGetThere: "Take the Underground to Tower Hill station (Circle or District line).",
        openingHours: "Tuesday to Saturday: 9:00 AM - 5:30 PM; Sunday to Monday: 10:00 AM - 5:30 PM. Check the official website for seasonal variations.",
        cost: "Adults: £34.80, Children (5-15): £17.40",
        website: "hrp.org.uk/tower-of-london"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "royalty", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Tower Bridge backdrop from Tower Wharf.",
        insiderTip: "Arrive before 10:00 AM to avoid the tour group rush.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The Tower is partially accessible. Check the website for detailed information."
      }
      },
        {
        name: "British Museum",
        description: `## Overview
The British Museum houses a remarkable collection of world art and artifacts, spanning over two million years of human history and culture. From the Rosetta Stone to Egyptian mummies and the Elgin Marbles, the museum boasts some of the world's most significant historical objects. Some say you could spend weeks exploring it all. It's definitely one of the must-see places in London.

### Best Photo Spots
The Great Court, with its stunning glass roof, is a popular photo spot. The Rosetta Stone and Egyptian sculptures also make for great pictures. Honestly, there are so many photo opportunities.

### Insider Tips
Insider tip: Visit on a weekday afternoon to avoid the largest crowds. The museum stays open late on Fridays, offering a less crowded experience. Don't miss the free guided tours, offering insights into key exhibits. The Rosetta Stone gets incredibly crowded; try visiting it first thing or late in the day.`,
        practicalInfo: {
        howToGetThere: "Take the Underground to Tottenham Court Road, Holborn, or Russell Square stations.",
        openingHours: "Daily 10:00 AM - 5:00 PM, Fridays until 8:30 PM. Check the website for closures.",
        cost: "Free",
        website: "britishmuseum.org"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "culture", "archaeology"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "The Great Court with its glass roof.",
        insiderTip: "Visit on Friday evenings for a less crowded experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The museum is fully accessible with lifts and ramps."
      }
      },
        {
        name: "London Eye",
        description: `## Overview
The London Eye, a giant Ferris wheel on the South Bank of the River Thames, offers breathtaking panoramic views of the city. It's a truly iconic London experience. A ride in one of its capsules provides a unique perspective on landmarks like Big Ben, the Houses of Parliament, and Buckingham Palace.

### Best Photo Spots
Capture the city skyline from within the capsule. The best time for photos is during sunset, but it's also incredibly busy then. Consider taking a twilight ride for atmospheric shots.

### Insider Tips
Tip: Book your tickets online in advance to save time and often money. Fast-track tickets are available, allowing you to skip the queue. Consider visiting early in the morning or later in the evening for shorter wait times. Perhaps avoid it during school holidays.`,
        practicalInfo: {
        howToGetThere: "Take the Underground to Waterloo station.",
        openingHours: "Daily, but hours vary. Check the website for specific times.",
        cost: "From £36 per adult, discounts available online.",
        website: "londoneye.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["views", "architecture", "photography", "landmarks"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic city views at sunset.",
        insiderTip: "Book tickets online in advance to save time and money.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible with ramps and lifts."
      }
      },
        {
        name: "Borough Market",
        description: `## Overview
Borough Market, one of London's oldest food markets, is a paradise for food lovers. It's a vibrant hub where you can sample and purchase artisan cheeses, fresh produce, gourmet meats, and delicious street food from around the world. It's a fantastic place to experience London's culinary diversity. Honestly, it's a must-visit for anyone interested in food.

### What to Expect
Expect a lively atmosphere, especially on weekends. Be prepared for crowds and long lines, but the delicious food is worth the wait. Bring cash, as some vendors don't accept cards.

### Insider Tips
Insider tip: Visit on a weekday lunchtime for a less crowded experience. Try to get to the market right when it opens on Wednesday (10 AM) to secure a pastry or sweet treat at the very popular bakery Bread Ahead before the queues begin. Also, go with an empty stomach!`,
        practicalInfo: {
        howToGetThere: "Take the Underground to London Bridge station.",
        openingHours: "Monday to Friday: 10:00 AM - 5:00 PM; Saturday: 8:00 AM - 5:00 PM; Closed Sunday.",
        cost: "Free entry; food prices vary.",
        website: "boroughmarket.org.uk"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "market", "culture", "culinary"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful food stalls and vibrant atmosphere.",
        insiderTip: "Visit on a weekday lunchtime for a less crowded visit. Arrive when it opens on Wednesdays",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Partially accessible; some areas may be crowded."
      }
      },
        {
        name: "West End Theatre District",
        description: `## Overview
The West End, London's equivalent to Broadway, is renowned for its world-class theatre productions. From classic musicals to cutting-edge plays, the West End offers something for every theatre lover. It's an experience I think everyone should have at least once. Truly a great experience.

### What to Expect
Expect a vibrant atmosphere, especially in the evening. Tickets can be expensive, but there are ways to find deals. Many shows offer discounts for matinee performances or last-minute tickets.

### Insider Tips
Insider tip: Check for last-minute ticket deals at the TKTS booth in Leicester Square. Alternatively, some theatres offer 'day seats' - tickets sold at a reduced price on the day of the performance. Be prepared to queue early for the best chance of securing a seat. Book online several weeks in advance for guaranteed seats, especially if visiting during the summer or Christmas holiday.`,
        practicalInfo: {
        howToGetThere: "Take the Underground to Leicester Square, Piccadilly Circus, or Covent Garden stations.",
        openingHours: "Varies depending on the show. Generally, matinee performances are in the afternoon, and evening performances are in the evening.",
        cost: "Varies depending on the show and seat location. From £20 to £200+.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["theatre", "culture", "entertainment", "performing arts"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Theatre facades and posters.",
        insiderTip: "Check for last-minute ticket deals at the TKTS booth in Leicester Square.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Most theatres are accessible; check with individual theatres for details."
      }
      },
        {
        name: "Hyde Park and Kensington Gardens",
        description: `## Overview
Hyde Park and Kensington Gardens, two of London's largest Royal Parks, offer a tranquil escape from the city's hustle and bustle. They're perfect for leisurely strolls, picnics, and enjoying the outdoors. I found the view surprisingly calming. Serpentine Lake is a notable aspect of this outdoor space.

### What to Expect
Expect a peaceful atmosphere, especially during the weekdays. The parks are popular with locals and tourists alike. You can rent boats on the Serpentine, visit Kensington Palace, or simply relax on the grass.

### Insider Tips
Insider tip: Visit the Diana Memorial Fountain in Hyde Park, a unique and interactive water feature. If you are a photographer, try to capture the light during the golden hour (the hour after sunrise and the hour before sunset) for stunning images. During summer, there are various outdoor concerts and events held in the park, so be sure to check the event schedule beforehand.`,
        practicalInfo: {
        howToGetThere: "Take the Underground to Hyde Park Corner, Marble Arch, or Lancaster Gate stations.",
        openingHours: "Daily from 5:00 AM to midnight.",
        cost: "Free",
        website: "royalparks.org.uk"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "walking", "outdoors"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Serpentine Lake and Kensington Palace.",
        insiderTip: "Visit the Diana Memorial Fountain and time your visit for the golden hour for photography.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The parks are generally accessible with paved paths."
      }
      },
        {
        name: "Dishoom Covent Garden",
        description: `## Overview
Dishoom Covent Garden brings the charm of Bombay's Irani cafes to London. The restaurant's decor is inspired by old Bombay, creating a warm and inviting atmosphere. It's a very popular restaurant, so expect to wait if you arrive during peak times.

### Dining Experience
Dishoom is known for its delicious Indian cuisine, especially its breakfast dishes like the Bacon Naan Roll. The menu features a range of curries, grills, and small plates, perfect for sharing. The flavors are authentic, and the prices are reasonable. The Black Daal is a must-try.

### Practical Dining Info
Price range: £15-£30 per person. Hours: 8:00 AM - 11:00 PM daily. Reservations are recommended, especially for dinner. Consider trying the Permit Room bar downstairs.`,
        practicalInfo: {
        howToGetThere: "Take the Underground to Covent Garden station.",
        openingHours: "Monday to Sunday: 8:00 AM - 11:00 PM",
        cost: "Moderate",
        website: "dishoom.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "cuisine", "dining", "indian"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Interior decor reminiscent of Bombay cafes.",
        insiderTip: "Join the virtual queue on the Dishoom website well in advance of arriving.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The restaurant is accessible."
      }
      },
        {
        name: "Flat Iron Steak",
        description: `## Overview
Flat Iron Steak is a popular chain restaurant known for serving affordable and delicious steaks. The ambiance is casual and relaxed. It's a great option for a simple and satisfying meal.

### What to Expect
The restaurant is usually busy, but the wait is generally not too long. The menu is limited, focusing on flat iron steak, but there are also a few sides and sauces to choose from. The steak is cooked perfectly to your liking, and it's surprisingly good for the price.

### Practical Dining Info
Price range: £12-£20 per person. Hours: Varies depending on the location. Reservations are not accepted. I recommend you try it! I think you'll like it.`,
        practicalInfo: {
        howToGetThere: "Various locations throughout London. Check the website for the nearest location.",
        openingHours: "Varies depending on the location.",
        cost: "Budget-friendly",
        website: "flatironsteak.co.uk"
      },
      discoveryTags: {
        timeRequired: "1 hour",
        experienceLevel: "Easy Access",
        interests: ["food", "steak", "dining", "restaurant"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Simple steak presentation.",
        insiderTip: "Arrive early to avoid long queues, especially on weekends.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessibility varies depending on the location."
      }
      },
        {
        name: "The Churchill Arms",
        description: `## Overview
The Churchill Arms is arguably London's most eye-catching pub, famed for its extravagant floral displays on the exterior. Inside, it's a traditional pub with a cozy atmosphere, serving Thai cuisine alongside classic pub fare. It's something of a local institution. Worth a look.

### Ambiance
The pub's exterior is covered in flowers, making it a popular photo spot. The interior is decorated with Churchill memorabilia, creating a unique and charming atmosphere. 

### Insider Tips
Try their excellent Thai food, a delightful surprise for a British pub. It is incredibly popular due to its looks, so you will have to arrive outside of peak hours. I recommend going during the daytime to get nice photographs and a drink inside. Best picture opportunities are in the summer. The Thai is quite delicious - give it a go!`,
        practicalInfo: {
        howToGetThere: "Take the Underground to Notting Hill Gate station.",
        openingHours: "11:00 AM - 11:00 PM daily",
        cost: "Moderate",
        website: "churchillarmskensington.co.uk"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "pub", "dining", "thai", "atmosphere"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "The flower-covered exterior.",
        insiderTip: "Try the Thai food for a unique pub experience, and visit during off-peak hours to avoid crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The pub is partially accessible."
      }
      },
        {
        name: "Sky Garden",
        description: `## Overview
The Sky Garden is London's highest public garden, offering panoramic views of the city skyline. Located on the 43rd floor of the "Walkie Talkie" building, it's a unique blend of botanical garden and observation deck. What a view!

### Best Photo Spots
There are stunning panoramic views from all sides of the Sky Garden. The view of Tower Bridge and the Shard is particularly spectacular. Try to visit around sunset for the best lighting.

### Insider Tips
Although entry is free, you need to book your tickets online in advance. Tickets are released a few weeks ahead of time and tend to go quickly, so book early. The best time to visit is early in the morning on a weekday for fewer crowds.`,
        practicalInfo: {
        howToGetThere: "Take the Underground to Monument station.",
        openingHours: "Monday to Friday: 10:00 AM - 6:00 PM; Saturday to Sunday: 11:00 AM - 9:00 PM",
        cost: "Free",
        website: "skygarden.london"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["views", "architecture", "nature", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic city views, especially at sunset.",
        insiderTip: "Book tickets online well in advance and visit early on a weekday to avoid crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The Sky Garden is fully accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around London

Navigating London is relatively easy thanks to its extensive public transport network. However, understanding your options is key to efficient travel.

### Public Transport
The London Underground (the Tube) is the fastest way to travel across the city. Oyster cards or contactless payment are the most convenient ways to pay. Consider downloading the Citymapper app for real-time travel information and route planning. Another option is the bus system, you can use an Oyster Card on this or a contactless payment. There is a bus route on almost every street in London. 

### Taxis & Rideshare
Black cabs are readily available, but they can be expensive. Rideshare services like Uber are also available and often more affordable. Be aware of surge pricing during peak hours.`,
        whereToStay: `## Where to Stay in London

London offers a wide range of accommodation options, from budget-friendly hostels to luxurious hotels. The best area to stay in depends on your interests and budget.

### Best Areas
For a central location with easy access to attractions, consider staying in Westminster, Covent Garden, or South Bank. Shoreditch is a trendy area with a vibrant nightlife. Kensington and Chelsea are upscale areas with beautiful parks. 

### Budget-Friendly
For budget-friendly options, look for hotels or hostels in areas like Earl's Court or Bayswater.`,
        bestTimeToVisit: `## Best Time to Visit London

The best time to visit London depends on your priorities. Summer offers the warmest weather, but it's also the most crowded and expensive time to visit.

### Peak Season
June to August is peak season, with warm weather and numerous festivals and events. Expect higher prices and larger crowds. Consider booking accommodations and tours well in advance.

### Weather Overview
London's weather is notoriously unpredictable. Even in summer, it's advisable to bring a light jacket or sweater. Spring and autumn offer pleasant temperatures and fewer crowds. Winter can be cold and damp, but it's also a magical time to visit, with Christmas markets and festive decorations.`,
        suggestedItinerary: `## Suggested London Itinerary

This is only a suggested itinerary, but it is perfect for a first-time visitor. This three-day itinerary provides a balanced mix of sightseeing, culture, and dining.

### Day 1
Start your day with a visit to the Tower of London and Tower Bridge. In the afternoon, explore the British Museum. In the evening, catch a show in the West End.

### Day 2
Visit Buckingham Palace and witness the Changing of the Guard ceremony (check the schedule in advance). Take a stroll through St. James's Park and visit Westminster Abbey. In the afternoon, take a ride on the London Eye.

### Day 3
Explore the vibrant Borough Market and sample delicious food. Visit Shakespeare's Globe and learn about the life and works of the famous playwright. In the afternoon, take a relaxing walk through Hyde Park and Kensington Gardens.`
      }}
      faqs={[
        {
        question: "What are the best things to do in London?",
        answer: `London offers a plethora of attractions, including the Tower of London, British Museum, London Eye, Borough Market, and the West End theatre district. Exploring the Royal Parks and indulging in the city's diverse culinary scene are also highly recommended.`
      },
        {
        question: "How many days do you need in London?",
        answer: `A minimum of three days is recommended to experience the main attractions in London. However, to fully explore the city's diverse neighborhoods and cultural offerings, a week or more would be ideal.`
      },
        {
        question: "What is London famous for?",
        answer: `London is famous for its rich history, iconic landmarks, world-class museums, vibrant theatre scene, diverse culture, and royal heritage.`
      },
        {
        question: "When is the best time to visit London?",
        answer: `Spring (April-May) and autumn (September-October) are generally considered the best times to visit London, offering pleasant weather and fewer crowds compared to the summer months.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Historic, Cosmopolitan, Vibrant",
        budgetBreakdown: {
          freeActivities: "Visiting the British Museum,Exploring Hyde Park and Kensington Gardens,Walking along the South Bank of the River Thames,Visiting the National Gallery",
          budgetFriendly: "Visiting Borough Market (£15-£25 for food),Taking a ride on the London Underground (Oyster card: £7-£10 per day),Visiting the Tower of London (£34.80),Seeing a matinee performance in the West End (£25-£50)",
          splurgeWorthy: "Staying in a luxury hotel in Mayfair (£300+ per night),Dining at a Michelin-starred restaurant (£100+ per person)"
        },
        localSecrets: ["To avoid the worst crowds at the British Museum, visit on Tuesdays at 8:30 AM when it first opens. Enter through the Montague Place entrance. You will be able to see the Rosetta Stone without large amounts of crowds.", "To navigate the London Underground efficiently, purchase an Oyster card or use contactless payment. Download the Citymapper app for real-time information and platform guidance. Stand on the right of the escalator to allow others to pass.", "A realistic budget estimate for 3 days in London is approximately £45-60 per day. This includes £15-20 for meals (lunch & dinner), £7-10 for transport (Oyster card), £15-20 for attractions, and £5-10 for miscellaneous expenses (coffee, snacks).", "For authentic goods, visit the Maltby Street Market (weekends only) for street food, or Brick Lane for vintage clothing and curry houses. Haggling is not common, but you may be able to negotiate small discounts at independent shops.", "Avoid tourist trap restaurants in Leicester Square, which are often overpriced and offer mediocre food. Instead, explore the side streets of Covent Garden for independent restaurants with better value and quality, like Balthazar.", "Be aware that Notting Hill Carnival takes place annually in August (usually the bank holiday weekend), impacting transportation and causing closures. Plan accordingly or join the vibrant festivities."],
        diningHighlights: {
          mustTryDishes: "Fish and Chips,Sunday Roast,Full English Breakfast,Chicken Tikka Masala",
          bestCafes: "Monmouth Coffee Company (various locations): Known for its high-quality coffee and ethical sourcing.,The Attendant (various locations): Unique cafe set in a former Victorian toilet.",
          topRestaurants: "Dishoom (Indian): Award-winning Indian restaurant with a vibrant atmosphere.,Hawksmoor (Steakhouse): High-end steakhouse with multiple locations.",
          foodMarkets: "Borough Market,Maltby Street Market,Broadway Market",
          diningTips: "Tipping is customary in London restaurants (10-15%). Reservations are recommended for popular restaurants, especially on weekends. Be aware that some restaurants add a service charge to the bill."
        },
        seasonalHighlights: {
          spring: "Spring brings blooming flowers to London's parks and gardens, making it a perfect time for outdoor activities.",
          summer: "Summer offers warm weather and numerous outdoor events and festivals.",
          fall: "Fall offers pleasant temperatures, fewer crowds, and stunning autumn foliage in the parks.",
          winter: "Winter brings festive Christmas markets and decorations, creating a magical atmosphere."
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
    </CriticalResourceLoader>
  );
};