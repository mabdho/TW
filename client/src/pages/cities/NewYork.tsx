import React from 'react';
import { CityPage } from '../../components/CityPage';

export const NewYork: React.FC = () => {
  return (
    <CityPage
      cityName="New York"
      country="USA"
      title={"Best Things to Do in New York, USA (2025 Guide)"}
      description={`Discover the best things to do in New York — top attractions, hidden gems, and food spots. Complete New York travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Visit the Statue of Liberty and Ellis Island",
        "Explore Central Park's vast green space",
        "Experience the dazzling lights of Times Square",
        "Discover world-class art at the Metropolitan Museum of Art",
        "Walk across the iconic Brooklyn Bridge",
        "Indulge in diverse cuisines and dining experiences"]}
      attractions={[
        {
        name: "Statue of Liberty & Ellis Island",
        description: `# Overview
No trip to New York is complete without visiting Lady Liberty and Ellis Island. These iconic landmarks offer a powerful glimpse into American history and immigration. It’s a deeply moving experience, I think, and one that provides valuable perspective.

## Best Photo Spots
The ferry ride offers stunning panoramic views of the Manhattan skyline and the Statue of Liberty. Be sure to capture the iconic pose with Lady Liberty against the city backdrop.

## Insider Tips
Tip: Book your ferry tickets well in advance, especially during peak season, to avoid long lines. Consider the early morning departures for fewer crowds. Don't miss the museum on Ellis Island for a moving look at immigration history.`,
        practicalInfo: {
        howToGetThere: "Take the ferry from Battery Park in Manhattan or Liberty State Park in New Jersey.",
        openingHours: "Ferries generally operate from 9:00 AM to 5:00 PM, but hours vary seasonally. Check the official website for the most up-to-date schedule.",
        cost: "Ferry tickets range from $24 to $30 per adult, depending on the tour options.",
        website: "nps.gov/stli"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "landmarks", "culture", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic views of the Manhattan skyline and close-up shots of the Statue of Liberty.",
        insiderTip: "Purchase your tickets online in advance, and arrive at least 30 minutes before your scheduled departure time to go through security. This will save you valuable time.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Both Liberty and Ellis Islands are accessible."
      }
      },
        {
        name: "Central Park",
        description: `# Overview
Escape the urban jungle and immerse yourself in the tranquility of Central Park. This sprawling green oasis offers something for everyone, from leisurely strolls to boat rides on The Lake. I found the view surprisingly calming, away from the city's hustle.

## Best Photo Spots
The Bow Bridge, Bethesda Terrace, and Belvedere Castle are among the most picturesque locations in the park. The Conservatory Garden is also a beauty.

## Insider Tips
Tip: Rent a bike and explore the park's many trails. Consider visiting Strawberry Fields, a memorial to John Lennon. Check the park's event calendar for concerts and performances.`,
        practicalInfo: {
        howToGetThere: "Accessible from multiple subway stations along the park's perimeter.",
        openingHours: "6:00 AM to 1:00 AM daily.",
        cost: "Free",
        website: "centralparknyc.org"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "relaxation", "walking", "photography"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "The Bow Bridge at sunset is particularly stunning for photos. The Bethesda Terrace provides a beautiful backdrop.",
        insiderTip: "Enter at the 72nd Street entrance near Strawberry Fields, dedicated to John Lennon, especially on a weekday morning (around 9 AM) for fewer tourists and more reflective space.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Many areas are wheelchair accessible."
      }
      },
        {
        name: "Times Square",
        description: `# Overview
Immerse yourself in the dazzling lights and bustling energy of Times Square. This iconic intersection is a sensory overload, with giant billboards, street performers, and throngs of tourists. It's definitely an experience!

## Best Photo Spots
Capture the iconic view from the red steps of the TKTS booth. Nighttime offers the most vibrant and photogenic scenes.

## Insider Tips
Tip: Avoid eating at restaurants directly on Times Square, as they tend to be overpriced and touristy. Explore side streets for better dining options.`,
        practicalInfo: {
        howToGetThere: "Subway lines 1, 2, 3, 7, N, Q, R, W, and S stop at Times Square–42nd Street.",
        openingHours: "Open 24/7, but the best time to visit is at night.",
        cost: "Free to visit; costs vary for attractions and dining.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["landmarks", "photography", "city life"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "The view from the red steps of the TKTS booth at night. Also, capture the dazzling billboards and street performers.",
        insiderTip: "Stand on the red steps of the TKTS booth around 10 PM on a weekday for fewer crowds and a clearer view of the billboards. Be mindful of your belongings due to the crowds.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Generally accessible, but crowds can make navigating difficult."
      }
      },
        {
        name: "Metropolitan Museum of Art",
        description: `# Overview
Delve into art history at the Metropolitan Museum of Art, one of the world's largest and finest art museums. Its vast collection spans over 5,000 years of art from around the globe. It's the kind of place you might linger longer than expected. Be sure to look up the roof garden for some nice views.

## Best Photo Spots
The Temple of Dendur and the European Paintings galleries offer stunning backdrops for photos. 

## Insider Tips
Tip: Plan your visit in advance and focus on specific collections to avoid feeling overwhelmed. Consider joining a guided tour for a deeper understanding.`,
        practicalInfo: {
        howToGetThere: "Take the 4, 5, or 6 subway line to 86th Street and Lexington Avenue.",
        openingHours: "Sunday to Tuesday and Thursday: 10:00 AM – 5:00 PM; Friday and Saturday: 10:00 AM – 9:00 PM; Closed Wednesdays.",
        cost: "Suggested admission is $30 for adults, $22 for seniors, and $17 for students.",
        website: "metmuseum.org"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["art", "history", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "The Temple of Dendur is perfect for photos, especially during the afternoon when sunlight streams through the windows. Also, capture the panoramic city views from the rooftop garden.",
        insiderTip: "Visit on Friday or Saturday evenings (6 PM - 9 PM) for a reduced crowd and extended hours. Head straight to the special exhibitions as soon as you arrive, then explore the rest of the museum.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Fully accessible."
      }
      },
        {
        name: "Brooklyn Bridge",
        description: `# Overview
Walk, bike, or drive across the iconic Brooklyn Bridge, offering breathtaking views of the Manhattan skyline. This architectural marvel is a symbol of New York City. Honestly, it's a must-do, especially if you like a good view.

## Best Photo Spots
Capture the panoramic views of the Manhattan skyline from the bridge's pedestrian walkway. The bridge's gothic arches also provide excellent photo opportunities.

## Insider Tips
Tip: Walk the bridge from Brooklyn to Manhattan for the best views. Go early in the morning to avoid crowds and enjoy a more peaceful experience.`,
        practicalInfo: {
        howToGetThere: "Accessible from multiple subway stations in both Brooklyn and Manhattan.",
        openingHours: "Open 24/7.",
        cost: "Free",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["architecture", "landmarks", "photography", "walking"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Walk towards Manhattan just before sunset on a clear day for the best light and cityscape panorama. The bridge's cables and architecture make for incredible structural photos.",
        insiderTip: "Start your walk from the Brooklyn side (DUMBO) around 7 AM on a weekday to avoid the tourist crowds and capture the best morning light on the Manhattan skyline.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "The pedestrian walkway is accessible, but there are some stairs involved."
      }
      },
        {
        name: "Joe's Pizza",
        description: `# Overview
Experience a true New York slice at Joe's Pizza, a West Village institution known for its classic, no-frills pizzas. It's a simple, delicious taste of the city.

## What to Expect
Expect a bustling atmosphere, especially during lunch and dinner. The line moves quickly, and it's worth the wait.

## Signature Dishes
The classic cheese slice is a must-try. The pepperoni is also a popular choice.

Tip: Be sure to have cash on hand as they may not accept cards, and eat it fresh for the best taste!
Price Range: $3-5 per slice.`,
        practicalInfo: {
        howToGetThere: "Located in the West Village, easily accessible by subway.",
        openingHours: "Open daily from 11:00 AM to 4:00 AM.",
        cost: "Budget-friendly.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "local cuisine"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Grab a picture biting into a classic New York slice outside the pizzeria.",
        insiderTip: "Visit around 3 PM for shorter lines, just before the afternoon rush. Grab a slice and walk to nearby Washington Square Park to enjoy it.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Limited seating available."
      }
      },
        {
        name: "Chelsea Market",
        description: `# Overview
Indulge your culinary senses at Chelsea Market, a vibrant indoor food hall offering a diverse range of cuisines and artisanal products. I mean, if you can't find something you like here, I don't know what to tell you.

## What to Expect
A bustling atmosphere with a wide array of food vendors, from tacos to seafood to pastries.

## Signature Dishes
Try the lobster roll at The Lobster Place, the tacos at Los Tacos No. 1, and the brownies at Fat Witch Bakery. Honestly, I'd recommend all of it.

Tip: Go hungry and try a little bit of everything! 
Price Range: $5-$20 per item.`,
        practicalInfo: {
        howToGetThere: "Located in Chelsea, easily accessible by subway.",
        openingHours: "Monday to Saturday: 7:00 AM – 9:00 PM; Sunday: 8:00 AM – 8:00 PM.",
        cost: "Moderate.",
        website: "chelseamarket.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "market", "local cuisine"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the market's vibrant atmosphere, unique food stalls, and colorful displays.",
        insiderTip: "Visit on a weekday morning (around 10 AM) to avoid the weekend crowds and get the freshest offerings. Check out the smaller vendors tucked away in the back for unique culinary gems.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "The High Line",
        description: `# Overview
Stroll along The High Line, an elevated park built on a former railway line, offering unique city views and lush landscaping. It's a peaceful escape from the city streets.

## Best Photo Spots
Capture the city views from various viewpoints along the park. The 10th Avenue Square & Overlook is particularly scenic.

## Insider Tips
Tip: Visit during the spring or fall for the best weather and foliage. Check the High Line's website for events and art installations.`,
        practicalInfo: {
        howToGetThere: "Accessible from multiple entrances along the West Side, including stairways and elevators.",
        openingHours: "Varies by season. Generally open from 7:00 AM to 10:00 PM.",
        cost: "Free",
        website: "thehighline.org"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "architecture", "walking", "photography"],
        costLevel: "Free",
        seasonalBest: "Spring",
        photoOpportunity: "Capture the urban landscape framed by the lush greenery of the park, especially at sunset. The 10th Avenue Overlook provides a unique elevated view.",
        insiderTip: "Walk the High Line southbound (from 34th Street to Gansevoort Street) around 4 PM on a weekday, ending near Chelsea Market for a post-walk bite. This direction provides optimal sunlight for photos.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Mostly accessible, with elevators at several access points."
      }
      },
        {
        name: "Russ & Daughters Cafe",
        description: `# Overview
Experience the classic Jewish appetizing tradition at Russ & Daughters Cafe. This Lower East Side institution offers a modern take on traditional dishes.

## What to Expect
A cozy and bustling cafe with a focus on smoked fish, bagels, and other Jewish specialties. It's the kind of place that feels authentic and real.

## Signature Dishes
Try the classic lox, bagels, and whitefish salad. The latkes are also a must-try.

Tip: Be prepared for a wait, especially during brunch hours. 
Price Range: $15-$30 per person.`,
        practicalInfo: {
        howToGetThere: "Located in the Lower East Side, easily accessible by subway.",
        openingHours: "Sunday to Wednesday: 8:00 AM – 8:00 PM; Thursday to Saturday: 8:00 AM – 10:00 PM.",
        cost: "Moderate",
        website: "russanddaughterscafe.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "local cuisine", "cultural"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the beautiful displays of smoked fish and bagels. Also, photograph the interior's vintage-inspired decor.",
        insiderTip: "Visit on a weekday around 2:30 PM for a shorter wait time. Try the 'Super Heebster' for a taste of everything Russ & Daughters is known for.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Greenwich Village",
        description: `# Overview
Explore the charming streets and bohemian spirit of Greenwich Village, a historic neighborhood known for its artistic legacy and vibrant culture.

## Best Photo Spots
Washington Square Park, with its iconic arch, is a must-photograph spot. The neighborhood's brownstone-lined streets also offer charming photo opportunities.

## Insider Tips
Tip: Wander through the neighborhood's side streets to discover hidden cafes, bookstores, and music venues. Catch a show at the Blue Note for a classic jazz experience.`,
        practicalInfo: {
        howToGetThere: "Accessible from multiple subway stations in Greenwich Village.",
        openingHours: "Open 24/7, but the best time to visit is during the day or evening.",
        cost: "Free to explore; costs vary for attractions and dining.",
        website: ""
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["culture", "history", "walking", "photography"],
        costLevel: "Free",
        seasonalBest: "Fall",
        photoOpportunity: "The Washington Square Arch is best photographed around sunset. Explore the side streets for brownstone and hidden cafe shots.",
        insiderTip: "Visit on a Sunday afternoon around 2 PM and catch a spontaneous musical performance in Washington Square Park. Bring a blanket and enjoy the atmosphere.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some streets are cobblestone and may be challenging for wheelchairs."
      }
      },
        {
        name: "Katz's Delicatessen",
        description: `# Overview
Step into a New York institution at Katz's Delicatessen, famous for its towering pastrami sandwiches and classic deli fare. This iconic eatery has been serving up delicious food since 1888!

## What to Expect
A bustling, old-school deli with a lively atmosphere. Expect to receive a ticket upon entry, which you must present when paying.

## Signature Dishes
The pastrami on rye is a must-try. Also, sample the corned beef and the matzo ball soup.

Tip: Be prepared for long lines during peak hours. 
Price Range: $20-$35 per sandwich.`,
        practicalInfo: {
        howToGetThere: "Located in the Lower East Side, easily accessible by subway.",
        openingHours: "Sunday to Wednesday: 8:00 AM – 10:45 PM; Thursday: 8:00 AM – 2:45 AM; Friday: 8:00 AM – Sunday 10:45 PM (Open 24 hours on Friday and Saturday).",
        cost: "Expensive",
        website: "katzsdelicatessen.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "local cuisine", "history"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Capture the towering pastrami sandwiches and the deli's old-school interior. Recreate the iconic "When Harry Met Sally" scene.",
        insiderTip: "Visit around 3 PM on a weekday to avoid the lunch rush, and ask for your sandwich to be hand-cut. Don't lose your ticket!",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around New York

New York City boasts a comprehensive public transportation system, making it easy to navigate the five boroughs. The subway is the most efficient way to travel, with trains running 24/7 on some lines.

## Public Transport
The subway system is extensive and affordable. Purchase a MetroCard for easy access. Buses also serve the city, but they can be slower due to traffic.

## Taxis & Rideshare
Taxis are readily available, but they can be expensive. Rideshare services like Uber and Lyft are also popular options.

## Walking & Cycling
Many neighborhoods are pedestrian-friendly, making walking a great way to explore. Citi Bike offers bike rentals for those who prefer to cycle.`,
        whereToStay: `## Where to Stay in New York

New York City offers a wide range of accommodation options, from luxury hotels to budget-friendly hostels. The best area to stay depends on your interests and budget.

## Best Areas
Midtown is a central location with easy access to many attractions. The Lower East Side offers a vibrant nightlife and trendy restaurants. Greenwich Village is a charming neighborhood with a bohemian vibe.

## Luxury Options
The Plaza Hotel and The Ritz-Carlton New York are iconic luxury hotels.

## Budget-Friendly
Hostels and budget hotels can be found in areas like Long Island City and Brooklyn.`,
        bestTimeToVisit: `## Best Time to Visit New York

The best time to visit New York depends on your preferences and tolerance for crowds and weather.

## Peak Season
The summer months (June-August) and the holiday season (November-December) are peak seasons, with higher prices and larger crowds.

## Weather Overview
Spring (April-May) and fall (September-October) offer pleasant weather and fewer crowds. Winter (December-February) can be cold and snowy.

## Local Events
Consider visiting during events like the Macy's Thanksgiving Day Parade or the New York Film Festival.`,
        suggestedItinerary: `## Suggested New York Itinerary

Here's a suggested itinerary for a 3-day trip to New York City, covering the must-see attractions and hidden gems.

## Day 1
Start your day with a visit to the Statue of Liberty and Ellis Island. In the afternoon, explore the Financial District and visit the 9/11 Memorial & Museum. End the day with a walk across the Brooklyn Bridge.

## Day 2
Explore Central Park in the morning. In the afternoon, visit the Metropolitan Museum of Art. In the evening, experience the lights and energy of Times Square.

## Day 3
Explore Greenwich Village and Washington Square Park. Visit Chelsea Market for lunch. Stroll along the High Line in the afternoon. Enjoy a Broadway show in the evening.`
      }}
      faqs={[
        {
        question: "What are the best things to do in New York?",
        answer: `The best things to do in New York include visiting the Statue of Liberty, exploring Central Park, experiencing Times Square, visiting the Metropolitan Museum of Art, and walking the Brooklyn Bridge. Don't forget to explore diverse neighborhoods and enjoy the culinary scene!`
      },
        {
        question: "How many days do you need in New York?",
        answer: `Ideally, you need at least 3-5 days to experience the highlights of New York City. This allows time to visit major attractions, explore different neighborhoods, and enjoy the city's cultural offerings.`
      },
        {
        question: "What is New York famous for?",
        answer: `New York is famous for its iconic landmarks like the Statue of Liberty and the Empire State Building, its world-class museums, its diverse culture, and its vibrant arts and entertainment scene.`
      },
        {
        question: "When is the best time to visit New York?",
        answer: `The best time to visit New York is during the spring (April-May) or fall (September-October) for pleasant weather and fewer crowds.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Energetic, Diverse, Iconic",
        budgetBreakdown: {
          freeActivities: "Walk the Brooklyn Bridge,Explore Central Park,Visit Times Square,Stroll through Greenwich Village",
          budgetFriendly: "Ride the Staten Island Ferry (Free),Visit the 9/11 Memorial ($0-$26),Explore Chelsea Market ($5-$20 per item),Grab a slice of pizza ($3-$5)",
          splurgeWorthy: "Attend a Broadway show ($100+),Dine at a Michelin-starred restaurant ($200+ per person),Stay at a luxury hotel ($400+ per night)"
        },
        localSecrets: ["Visit the Metropolitan Museum of Art on a Tuesday at 3:30 PM for a less crowded experience. Head straight to the rooftop garden for a panoramic view of Central Park.", "Skip the MetroCard and use OMNY (One Metro New York) by tapping your credit card or mobile device at the turnstile. Download the Citymapper app for real-time subway updates and navigation. On crowded trains, move towards the center of the car to make room for others.", "A realistic daily budget is $75-100 per person: $25-30 for meals (pizza, bagels, food trucks), $15-20 for transportation (subway), $30-40 for attractions, and $10 for miscellaneous expenses.", "Visit the Chelsea Market (75 9th Ave) for artisanal food products and unique gifts. Explore Arthur Avenue in the Bronx for authentic Italian goods. Haggling is not customary but comparing prices between vendors is a smart move.", "Avoid eating at chain restaurants in Times Square, which are overpriced and touristy. Instead, explore Hell's Kitchen (just west of Times Square) for diverse and more affordable dining options like Poseidon Greek Bakery (629 9th Ave).", "The NYC Winter Lantern Festival runs from November to January (check specific dates). This may cause heavier traffic and longer wait times for certain attractions. The Village Halloween Parade on October 31st is a unique cultural event, but expect large crowds."],
        diningHighlights: {
          mustTryDishes: "New York-style pizza,Pastrami on rye,Bagels and lox,Cheesecake",
          bestCafes: "La Colombe Torrefaction (various locations): Known for its Draft Latte and stylish ambiance.,Devoción (various locations): Offers fresh, direct-from-farm coffee in a vibrant setting.",
          topRestaurants: "Katz's Delicatessen (Lower East Side): Famous for its pastrami sandwiches.,Le Bernardin (Midtown): A renowned French seafood restaurant.",
          foodMarkets: "Chelsea Market,Eataly (various locations)",
          diningTips: "Tipping is customary in New York City restaurants (15-20%). Reservations are recommended for popular restaurants, especially on weekends."
        },
        seasonalHighlights: {
          spring: "Blooming flowers in Central Park, outdoor festivals, and pleasant weather make spring a delightful time to visit.",
          summer: "Rooftop bars, outdoor concerts, and beach trips to Coney Island are popular summer activities.",
          fall: "Colorful foliage in Central Park, crisp air, and seasonal events like the New York Film Festival make fall a picturesque time to visit.",
          winter: "Holiday markets, ice skating in Central Park, and festive decorations create a magical winter atmosphere."
        },
        quickFacts: {
          totalAttractions: "11",
          freeActivities: "4",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Excellent"
        }
      }}
    />
  );
};