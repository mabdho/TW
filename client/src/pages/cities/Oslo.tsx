import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Oslo: React.FC = () => {
  return (
    <CityPage
      cityName="Oslo"
      country="Norway"
      title={"Best Things to Do in Oslo, Norway (2025 Guide)"}
      description={`Discover the best things to do in Oslo — top attractions, hidden gems, and food spots. Complete Oslo travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1712009509758-dff926710413?w=500&auto=format&fit=crop&q=75&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Explore the Viking Ship Museum and delve into Norway's maritime history.",
        "Wander through Vigeland Sculpture Park, a unique collection of over 200 sculptures.",
        "Visit the Akershus Fortress, a medieval castle with stunning views of the Oslofjord.",
        "Experience the thrill of Holmenkollen Ski Jump and its panoramic views.",
        "Discover the modern architecture of the Oslo Opera House."]}
      attractions={[
        {
        name: "Vigeland Sculpture Park",
        description: `## Overview

Vigeland Sculpture Park is perhaps the most famous of Oslo's attractions. It's a truly unique space showcasing over 200 sculptures created by Gustav Vigeland. The park is open year-round and offers a thought-provoking experience with its representations of the human form and life cycle. Seriously, you could spend hours just wandering and contemplating.

### Best Photo Spots

Capture the iconic 'Monolith' at sunset for a stunning backdrop. I found the view surprisingly calming, even with the crowds. Also, don't miss the 'Angry Boy' statue – a classic photo op.

### Insider Tips

Tip: Visit early in the morning (before 10 AM) or later in the evening to avoid the largest crowds. The park is free to enter, so you can come and go as you please!`,
        practicalInfo: {
        howToGetThere: "Take tram lines 12 or 15 to the 'Vigelandsparken' stop.",
        openingHours: "Open 24 hours daily.",
        cost: "Free",
        website: "vigeland.museum.no"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "architecture", "relaxation", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunset photos of the Monolith and close-ups of the Angry Boy statue.",
        insiderTip: "Pack a picnic and enjoy a relaxing lunch in the park. Many locals do this, especially during the summer months.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The park is mostly flat and accessible for wheelchairs."
      }
      },
        {
        name: "Viking Ship Museum",
        description: `## Overview

The Viking Ship Museum houses an incredible collection of Viking ships and artifacts, offering a fascinating glimpse into Norway's maritime past. Here, you'll see the Gokstad, Oseberg, and Tune ships, remarkably preserved remnants of Viking seafaring prowess. These ships are truly impressive, and the museum provides detailed information about their construction, use, and significance.

### What to Expect

Expect crowds, especially during peak season. The museum is relatively small, so it can feel a bit cramped. Still, the artifacts are well worth seeing.

### Insider Tips

Consider purchasing the Oslo Pass for free entry and unlimited public transport. Tip: The museum is currently closed for renovations (reopening expected in 2026), so be sure to check the website for the latest updates and alternative locations displaying Viking artifacts.`,
        practicalInfo: {
        howToGetThere: "Take bus number 30 to 'Vikingskipshuset'.",
        openingHours: "Currently closed for renovations; check website for updates.",
        cost: "Check website for updated pricing upon reopening.",
        website: "khm.uio.no/vikingskipshuset/"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "art", "architecture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the scale of the Gokstad ship and the intricate carvings on the Oseberg ship.",
        insiderTip: "Download the museum's audio guide for a more in-depth experience. It provides detailed commentary on the artifacts and their historical context.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The museum is wheelchair accessible."
      }
      },
        {
        name: "Akershus Fortress",
        description: `## Overview

Akershus Fortress is a medieval castle that has played a central role in Norway's history. Offering stunning views of the Oslofjord, the fortress is a great place to explore. Over the centuries, it has served as a royal residence, a military base, and a prison. The grounds are free to explore, and guided tours are available for a fee. It's the kind of place you might linger longer than expected.

### Best Photo Spots

Head to the ramparts for panoramic views of the Oslofjord and the city skyline. The best time for photos is during golden hour (sunset).

### Insider Tips

Tip: Check the schedule for the changing of the guard ceremony, a colorful spectacle. Also, consider visiting the Norwegian Resistance Museum located within the fortress.`,
        practicalInfo: {
        howToGetThere: "Walk from the city center or take tram lines 12 or 19 to 'Akershusstranda'.",
        openingHours: "Grounds open daily; check website for specific building hours.",
        cost: "Free to enter the grounds; fees for guided tours and museums.",
        website: "forsvarsbygg.no/festningene/festninger/akershus-festning/"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic views of the Oslofjord at sunset.",
        insiderTip: "Visit on a weekday morning for a quieter experience. The fortress can get crowded on weekends and during peak tourist season.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some areas may have limited accessibility due to uneven terrain."
      }
      },
        {
        name: "Holmenkollen Ski Jump",
        description: `## Overview

Holmenkollen Ski Jump is not just a ski jump; it's a symbol of Norway's sporting heritage. Offering breathtaking panoramic views of Oslo and the surrounding fjord, it's a must-visit for any traveler. You can take an elevator to the top of the jump for an exhilarating experience. It is quite a climb, but I think it's worth it for the views. 

### Insider Tips

Try the ski simulator for a virtual experience of jumping! It's a fun and thrilling way to experience the sport.

## Don't Miss

Don't miss the Ski Museum at the base of the jump, which tells the history of skiing in Norway.`,
        practicalInfo: {
        howToGetThere: "Take metro line 1 to 'Holmenkollen'.",
        openingHours: "Check website for seasonal hours.",
        cost: "Entry fee to the tower and museum.",
        website: "skiforeningen.no/holmenkollen/"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["adventure", "history", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic views of Oslo from the top of the ski jump.",
        insiderTip: "Visit on a clear day for the best views. The weather in Oslo can be unpredictable, so check the forecast before you go.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Elevator access to the top of the ski jump."
      }
      },
        {
        name: "Oslo Opera House",
        description: `## Overview

The Oslo Opera House is a stunning architectural marvel situated on the waterfront. Its distinctive design, resembling a glacier rising from the sea, makes it a landmark in Oslo. You can walk on the sloping roof of the building for free, offering unique perspectives of the city and the fjord. Even if you're not an opera fan, the building itself is worth exploring. 

### Best Photo Spots

Capture the Opera House from the fjord for a striking composition. Sunset and sunrise are particularly beautiful times for photography.

### Insider Tips

Check the Opera's schedule for performances. Even if opera isn't your thing, experiencing a show in this iconic venue is something special. Be sure to book tickets in advance, as popular performances sell out quickly.`,
        practicalInfo: {
        howToGetThere: "Walk from the city center or take tram lines 12 or 13 to 'Jernbanetorget'.",
        openingHours: "Open daily; check website for performance schedules and tour times.",
        cost: "Free to walk on the roof; ticket prices vary for performances.",
        website: "operaen.no/en/"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "architecture", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Stunning reflections of the Opera House in the fjord at sunset.",
        insiderTip: "Take a guided tour of the Opera House to learn about its architecture, history, and backstage secrets.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The Opera House is fully accessible for wheelchairs."
      }
      },
        {
        name: "Mathallen Oslo",
        description: `## Overview

Mathallen Oslo is a vibrant food hall offering a wide array of culinary delights. From local Norwegian specialties to international cuisine, you'll find something to satisfy every craving. It's a great place to sample local produce, try different dishes, and experience the city's food culture. I think it's a must-visit for food lovers!

## Culinary Experiences

Sample traditional Norwegian cheeses, cured meats, and fresh seafood. You can also find gourmet burgers, artisanal pizzas, and exotic spices.

### Insider Tips

Visit during lunchtime for a bustling atmosphere. Many locals come here for a quick and tasty meal.`,
        practicalInfo: {
        howToGetThere: "Take tram lines 11, 12, or 13 to 'Olaf Ryes plass'.",
        openingHours: "Check website for specific vendor hours.",
        cost: "Varies depending on vendor.",
        website: "mathallen.no"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culinary", "market"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the colorful displays of fresh produce and the lively atmosphere of the food hall.",
        insiderTip: "Try the 'lefse,' a traditional Norwegian flatbread. It's a local favorite!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The food hall is wheelchair accessible."
      }
      },
        {
        name: "Tim Wendelboe",
        description: `## Overview

Tim Wendelboe is a renowned coffee shop and roastery in Oslo, celebrated for its exceptional coffee quality and minimalist design. It's a haven for coffee aficionados, offering a curated selection of single-origin beans and expertly brewed beverages. The atmosphere is calm and focused, perfect for savoring a cup of coffee. Some say it's the best coffee in Oslo, and I wouldn't disagree.

## Coffee Culture

Expect a no-frills approach to coffee. The focus is on the quality of the beans and the brewing process.

### Insider Tips

Try the espresso or the V60 pour-over. These are the shop's specialties. Tip: Be sure to ask about the current single-origin offerings. The staff are very knowledgeable and happy to share their expertise.`,
        practicalInfo: {
        howToGetThere: "Take tram lines 11, 12, or 13 to 'Schous plass'.",
        openingHours: "Monday - Friday 8:30 AM - 5:00 PM, Saturday 10:00 AM - 5:00 PM, Sunday Closed",
        cost: "Moderate (NOK 50-80 per drink)",
        website: "timwendelboe.no"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "coffee", "relaxation"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the minimalist interior and the expertly crafted coffee beverages.",
        insiderTip: "Visit during off-peak hours (mid-morning or mid-afternoon) to avoid the crowds. The cafe can get quite busy during peak hours.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility due to the small size of the cafe."
      }
      },
        {
        name: "Restaurant Maaemo",
        description: `## Overview

Maaemo (currently closed, relocating to countryside in 2024/25) was Oslo's only three-Michelin-starred restaurant, offering a unique and innovative dining experience focused on Norwegian ingredients. The restaurant showcases the best of Norwegian cuisine, using locally sourced and seasonal produce. This is a culinary experience unlike any other.

## Dining Experience

Expect a tasting menu that highlights the flavors of Norway's natural landscape.

## Important Note

Currently, Maaemo is relocating to the countryside. Check their website for updates and reopening information before planning your visit.`,
        practicalInfo: {
        howToGetThere: "Check website for new location and transport options upon reopening.",
        openingHours: "Check website for reopening hours.",
        cost: "Expensive (Tasting menu only)",
        website: "maaemo.no"
      },
      discoveryTags: {
        timeRequired: "Full day",
        experienceLevel: "Local Expert",
        interests: ["food", "cuisine", "dining"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Artfully plated dishes showcasing the beauty of Norwegian ingredients.",
        insiderTip: "Make reservations well in advance, as this restaurant is extremely popular. Also, be prepared for a long and leisurely dining experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Check website for accessibility information upon reopening."
      }
      },
        {
        name: "Aker Brygge",
        description: `## Overview

Aker Brygge is a vibrant waterfront area offering a mix of restaurants, shops, and entertainment venues. It's a popular spot for locals and tourists alike, especially during the summer months. The area boasts stunning views of the Oslofjord and a lively atmosphere. It's a great place to stroll, grab a bite to eat, and soak up the city's energy.

## Things to Do

Enjoy a meal with a view at one of the many waterfront restaurants, browse the shops, or take a boat tour of the Oslofjord.

### Insider Tips

Visit during the summer for outdoor concerts and events. Also, consider taking a walk along the harbor to explore the nearby Tjuvholmen sculpture park.`,
        practicalInfo: {
        howToGetThere: "Walk from the city center or take tram lines 12 or 13 to 'Aker Brygge'.",
        openingHours: "Varies depending on the establishment.",
        cost: "Varies depending on the activity.",
        website: "akerbrygge.no"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["shopping", "food", "relaxation"],
        costLevel: "Moderate",
        seasonalBest: "Summer",
        photoOpportunity: "Beautiful sunset views over the Oslofjord.",
        insiderTip: "Check out the local food trucks and kiosks for budget-friendly dining options.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Aker Brygge is mostly flat and accessible for wheelchairs."
      }
      },
        {
        name: "Emanuel Vigeland Museum",
        description: `## Overview

The Emanuel Vigeland Museum, also known as Mausoleum, is a unique and somewhat bizarre art experience. It houses a single, dimly lit room completely covered in frescoes depicting scenes of human life, death, and sexuality. The room has remarkable acoustics, creating an eerie and immersive atmosphere. It's definitely an experience you won't forget, but perhaps not for the faint of heart. 

### What to Expect

Be prepared for a dark and intimate setting. The frescoes are quite explicit, so it may not be suitable for children or those easily offended. It's a very small room so you will be in close proximity to other visitors.

### Insider Tips

Reservations are required as only a limited number of visitors are allowed in at a time. The low lighting is part of the atmosphere but may make it difficult to see the frescoes in detail. A flashlight isn't permitted, so just take your time and let your eyes adjust.`,
        practicalInfo: {
        howToGetThere: "Take bus number 20 to 'Grimelund'.",
        openingHours: "Sundays 12:00 PM - 4:00 PM, Wednesdays 2:00 PM - 5:00 PM",
        cost: "Moderate (NOK 150)",
        website: "emanuelvigeland.museum.no"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Moderate Adventure",
        interests: ["art", "history", "architecture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Photography is generally not allowed inside to preserve the atmosphere and frescoes.",
        insiderTip: "Wear comfortable shoes, as you will be standing for the duration of your visit. Also, be prepared for a slightly disorienting experience due to the dim lighting and acoustics.",
        hiddenGem: true,
        familyFriendly: true,
        accessibilityNotes: "Limited accessibility due to stairs and narrow spaces."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Oslo

Oslo boasts an efficient and user-friendly public transportation system, making it easy to explore the city without a car. From trams and buses to metros and ferries, there are plenty of options to choose from. Whether you're hopping between museums, heading to the fjord, or venturing into the surrounding hills, you'll find a convenient way to get there.

### Public Transport

The public transport network is operated by Ruter. You can purchase tickets through the Ruter app, at ticket machines, or at convenience stores. Consider purchasing a day pass or a multi-day pass for unlimited travel within the city. The metro system is particularly useful for reaching attractions outside the city center, such as Holmenkollen Ski Jump.

### Taxis & Rideshare

Taxis are readily available in Oslo, but they can be quite expensive. Rideshare services like Uber are also an option. However, keep in mind that surge pricing may apply during peak hours.`,
        whereToStay: `## Where to Stay in Oslo

Oslo offers a wide range of accommodation options to suit every budget and preference. From luxury hotels to budget-friendly hostels, you'll find something to fit your needs. The location of your accommodation can significantly impact your experience, so consider what you want to be close to when making your choice.

### Best Areas

For a central location, consider staying in the city center, near Karl Johans gate. This area is close to many attractions, restaurants, and shops. Aker Brygge is a great option if you want to be near the waterfront and enjoy a lively atmosphere. Grünerløkka is a trendy neighborhood with a bohemian vibe, offering a mix of cafes, bars, and independent shops.

## Budget-Friendly

If you're on a budget, consider staying in a hostel or guesthouse. These options often offer shared facilities and a more social atmosphere.`,
        bestTimeToVisit: `## Best Time to Visit Oslo

The best time to visit Oslo depends on your interests and preferences. Each season offers a unique experience, from the vibrant summer months to the cozy winter days.

### Weather Overview

Summer (June-August) is the warmest time of year, with average temperatures around 20°C (68°F). This is a popular time to visit, as the days are long and sunny. Winter (December-February) is cold, with average temperatures around -5°C (23°F). However, the city is often covered in snow, creating a magical atmosphere.

## Local Events

Consider visiting during a local festival or event. The Oslo Jazz Festival takes place in August, while the Christmas markets are a popular attraction in December.`,
        suggestedItinerary: `## Suggested Oslo Itinerary

Here's a suggested itinerary for exploring Oslo in three days:

### Day 1

Start your day with a visit to the Viking Ship Museum (check for re-opening). In the afternoon, explore the Bygdøy peninsula and visit the Kon-Tiki Museum or the Fram Museum. End the day with a stroll along Aker Brygge and dinner at a waterfront restaurant.

### Day 2

Visit the Vigeland Sculpture Park in the morning. In the afternoon, explore the city center, including Karl Johans gate and the Royal Palace. Take a guided tour of the Akershus Fortress. 

### Day 3

Take a trip to Holmenkollen Ski Jump for panoramic views of the city. In the afternoon, explore the trendy Grünerløkka neighborhood and visit Mathallen Oslo for a culinary experience.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Oslo?",
        answer: `Oslo offers a wide range of activities, including visiting the Viking Ship Museum, exploring Vigeland Sculpture Park, seeing the Akershus Fortress, and experiencing the Holmenkollen Ski Jump. Don't miss the Oslo Opera House and Mathallen Oslo for a taste of local cuisine.`
      },
        {
        question: "How many days do you need in Oslo?",
        answer: `Three to four days is generally sufficient to explore the main attractions in Oslo and experience the city's culture and atmosphere. This allows time for museums, parks, and day trips.`
      },
        {
        question: "What is Oslo famous for?",
        answer: `Oslo is famous for its Viking history, its stunning natural surroundings (including the Oslofjord), its innovative architecture (like the Opera House), and its commitment to sustainability.`
      },
        {
        question: "When is the best time to visit Oslo?",
        answer: `The best time to visit Oslo is during the summer (June-August) for warm weather and long days or during the winter (December-February) for a magical snowy experience. Each season offers unique attractions and events.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Modern, Green, Cultural",
        budgetBreakdown: {
          freeActivities: "Explore Vigeland Sculpture Park,Walk on the roof of the Oslo Opera House,Wander through Ekebergparken Sculpture Park,Stroll along Aker Brygge waterfront",
          budgetFriendly: "Oslo Pass (unlimited public transport and museum entry): ~NOK 495 per day,Picnic lunch from a grocery store: ~NOK 100,Visit the Historical Museum: ~NOK 120,Walking tour of the city center: ~NOK 200",
          splurgeWorthy: "Fine dining experience at a top restaurant: ~NOK 1500 per person,Fjord cruise: ~NOK 600 per person"
        },
        localSecrets: ["To avoid crowds at the Vigeland Sculpture Park, visit on Tuesdays at 8:30 AM when most tour buses haven't arrived yet. Enter through the back entrance near the Frognerbadet swimming pool for a quieter entry.", "Use the RuterBillett app for easy public transport. Buy the '24-timersbillett' for unlimited travel. Remember to validate your ticket before boarding the tram. Local tip: Stand to the right of the doors to let passengers disembark first.", "A realistic budget for 3 days in Oslo is around NOK 1500-2000. This includes ~NOK 200 per day for meals, ~NOK 150 for transport, ~NOK 300 for attractions, and ~NOK 150 for miscellaneous expenses. Consider self-catering some meals to save money.", "For authentic Norwegian goods, visit the market at Youngstorget on Saturdays. Bargain respectfully by offering slightly lower than the asking price. Look for traditional knitted sweaters, rosemaling crafts, and local cheeses.", "Avoid the tourist trap restaurants on Karl Johans gate that often overcharge for mediocre food. Instead, head to Grünerløkka and visit the Mathallen food hall. Try Vulkanfisk for fresh seafood at Maridalsveien 17A.", "The Øyafestivalen music festival takes place in August. It impacts transportation and accommodation availability. Alternatively, visit in mid-June for the annual Norwegian Wood music festival, or in February for the Oslo World music festival."],
        diningHighlights: {
          mustTryDishes: "Brunost (brown cheese),Lutefisk (dried cod soaked in lye),Kjøttkaker (Norwegian meatballs),Skillingsboller (cinnamon buns)",
          bestCafes: "Tim Wendelboe: Renowned for its high-quality coffee and minimalist atmosphere.,Fuglen: A vintage-style cafe serving coffee, cocktails, and light meals.,Supreme Roastworks: A popular spot for specialty coffee and a relaxed vibe.",
          topRestaurants: "Maaemo (relocating): Formerly Oslo's only three-Michelin-starred restaurant, known for its innovative Norwegian cuisine.,Kontrast: A Michelin-starred restaurant focusing on seasonal and local ingredients.,Arakataka: A popular restaurant serving modern Norwegian dishes in a relaxed setting.",
          foodMarkets: "Mathallen Oslo: A vibrant food hall with a wide variety of food stalls and restaurants.",
          diningTips: "Tipping is not mandatory in Norway, but it's customary to round up the bill or leave a small tip for good service. Reservations are recommended for popular restaurants, especially during peak season."
        },
        seasonalHighlights: {
          spring: "Witness the city come alive as the snow melts and flowers bloom. Enjoy outdoor activities like hiking and cycling in the surrounding hills.",
          summer: "Experience long sunny days and warm weather. Take a fjord cruise, visit outdoor concerts, and enjoy the vibrant nightlife.",
          fall: "Admire the colorful foliage in the parks and forests. Enjoy cozy cafes and museums on cooler days.",
          winter: "Experience a magical snowy atmosphere. Visit Christmas markets, go skiing, and enjoy the Northern Lights (if you're lucky!)."
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