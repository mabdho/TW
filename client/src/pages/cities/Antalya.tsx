import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Antalya: React.FC = () => {
  return (
    <CityPage
      cityName="Antalya"
      country="Turkey"
      title={"Best Things to Do in Antalya, Turkey (2025 Guide)"}
      description={`Discover the best things to do in Antalya — top attractions, hidden gems, and food spots. Complete Antalya travel guide.`}
      imageUrl={"https://images.unsplash.com/photo-1593238739364-18cfde30e522?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Explore the historic Kaleiçi (Old Town)",
        "Visit the ancient city of Perge",
        "Relax on Konyaaltı Beach",
        "Take a cable car to Tünektepe Hill",
        "Discover the Düden Waterfalls"]}
      attractions={[
        {
        name: "Kaleiçi (Old Town)",
        description: `# Overview
Kaleiçi, Antalya's historic Old Town, is a maze of narrow, winding streets filled with charming Ottoman-era houses, boutique hotels, art galleries, and lively cafes. This walled city offers a glimpse into Antalya's rich past. I found the atmosphere to be incredibly enchanting, especially in the evenings when the streets are illuminated.

## Best Photo Spots
The iconic Hadrian's Gate, a Roman triumphal arch, is a must-photograph. Also, capture the panoramic views of the harbor from the Hıdırlık Tower.

## Insider Tips
Tip: Explore Kaleiçi in the early morning or late afternoon to avoid the midday heat and crowds. Be sure to wander off the main streets to discover hidden courtyards and local artisan shops.`,
        practicalInfo: {
        howToGetThere: "Easily accessible by tram (stop: Kale Kapısı) or bus. Walking is the best way to explore within Kaleiçi.",
        openingHours: "Open 24/7; shops and restaurants typically open from 10:00 AM to midnight.",
        cost: "Free to enter; costs vary for attractions and shops within Kaleiçi.",
        website: "None"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["history", "architecture", "culture", "photography"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Hadrian's Gate, Hıdırlık Tower, winding streets",
        insiderTip: "Visit early morning (around 8:00 AM) before the tour buses arrive to enjoy the area peacefully.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Some areas have uneven cobblestone streets."
      }
      },
        {
        name: "Perge Ancient City",
        description: `# Overview
Perge is one of the best-preserved ancient cities in Turkey, offering a fascinating look at Roman and Hellenistic history. Once the capital of Pamphylia, Perge boasts impressive ruins, including a well-preserved stadium, agora, and Roman baths. I think you should allow plenty of time to wander, imagining what life was like back then.

## Best Photo Spots
Capture the grandeur of the stadium's massive seating and the colonnaded street leading to the agora. The Roman baths also offer interesting photo opportunities.

## Insider Tips
Tip: Hire a local guide at the entrance for a more in-depth understanding of Perge's history and significance. Wear comfortable shoes as you'll be doing a lot of walking.`,
        practicalInfo: {
        howToGetThere: "Take the AntRay tram to Aksu, then a dolmuş (local minibus) to Perge.",
        openingHours: "April to October: 8:00 AM - 7:00 PM; November to March: 8:00 AM - 5:00 PM.",
        cost: "150-200 TRY",
        website: "None"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["history", "archaeology", "architecture", "photography"],
        costLevel: "Moderate",
        seasonalBest: "Spring or Fall",
        photoOpportunity: "Stadium, colonnaded street, Roman baths",
        insiderTip: "Arrive right when it opens (8:00 AM) to have the ruins largely to yourself before the tour groups.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Uneven terrain; not easily accessible for wheelchairs."
      }
      },
        {
        name: "Konyaaltı Beach",
        description: `# Overview
Konyaaltı Beach is a popular stretch of coastline with stunning views of the Taurus Mountains. The pebbly beach offers clear waters perfect for swimming and sunbathing. There are also numerous cafes, restaurants, and beach clubs along the promenade.

## Best Photo Spots
Capture the panoramic view of the mountains and the coastline, especially at sunset. The colorful beach umbrellas also make for great photos.

## Insider Tips
Tip: Rent a sunbed and umbrella for a comfortable beach experience. Consider visiting during the shoulder seasons (spring or fall) for fewer crowds and milder weather.`,
        practicalInfo: {
        howToGetThere: "Easily accessible by tram (stop: Müze or Konyaaltı Plajı) or bus.",
        openingHours: "Open 24/7; beach clubs and restaurants have varying hours.",
        cost: "Free to access the beach; sunbeds and umbrellas are available for rent (approx. 50-100 TRY).",
        website: "None"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["beach", "relaxation", "swimming", "sunbathing"],
        costLevel: "Budget-friendly",
        seasonalBest: "Summer",
        photoOpportunity: "Sunset views of the mountains, beach umbrellas",
        insiderTip: "Head to the western end of the beach (near the cliffs) for slightly quieter spots.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Easily accessible; some beach clubs offer accessible facilities."
      }
      },
        {
        name: "Düden Waterfalls",
        description: `# Overview
The Düden Waterfalls are a series of waterfalls formed by the Düden River. The Lower Düden Waterfall cascades directly into the Mediterranean Sea, while the Upper Düden Waterfall is located in a park with picnic areas and walking trails. Both are worth a visit, I think!

## Best Photo Spots
At the Lower Düden Waterfall, take photos from the viewing platforms for the best perspective. At the Upper Düden Waterfall, explore the caves behind the waterfall for unique shots.

## Insider Tips
Tip: Visit the Upper Düden Waterfall on a weekday to avoid weekend crowds. Wear waterproof shoes if you plan to explore the caves behind the waterfall.`,
        practicalInfo: {
        howToGetThere: "Lower Düden Waterfall: Bus number VF66 or KL08. Upper Düden Waterfall: Bus number VC30 or VL13.",
        openingHours: "Upper Düden Waterfall Park: 8:00 AM - 7:00 PM daily. Lower Düden Waterfall: Open 24/7.",
        cost: "Upper Düden Waterfall Park: 20-30 TRY. Lower Düden Waterfall: Free.",
        website: "None"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["nature", "waterfalls", "photography", "relaxation"],
        costLevel: "Budget-friendly",
        seasonalBest: "Spring or Summer",
        photoOpportunity: "Waterfalls cascading into the sea (Lower), caves behind waterfall (Upper)",
        insiderTip: "For a unique view of Lower Düden, take a boat tour from Kaleiçi harbor that passes by the falls.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Upper Düden has some accessible paths; Lower Düden is mostly accessible."
      }
      },
        {
        name: "Tünektepe Cable Car",
        description: `# Overview
Take a scenic cable car ride to the summit of Tünektepe Hill for breathtaking panoramic views of Antalya and the surrounding coastline. At the top, you'll find a rotating restaurant, cafe, and viewing platforms.

## Best Photo Spots
Capture the 360-degree views of Antalya from the summit. The sunset views are particularly stunning.

## Insider Tips
Tip: Visit during sunset for the most spectacular views, but be prepared for crowds. The rotating restaurant offers a unique dining experience, but reservations are recommended.`,
        practicalInfo: {
        howToGetThere: "Take the bus number KL08 to Sarısu, then walk to the cable car station.",
        openingHours: "10:00 AM - 9:00 PM daily.",
        cost: "30-50 TRY per person (round trip).",
        website: "None"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["views", "photography", "scenic", "relaxation"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic city views, sunset photos",
        insiderTip: "Check the weather forecast before you go – visibility can be poor on cloudy days.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Cable car and summit facilities are generally accessible."
      }
      },
        {
        name: "Antalya Archaeological Museum",
        description: `# Overview
The Antalya Archaeological Museum houses a vast collection of artifacts from the region's rich history, spanning from the Paleolithic era to the Ottoman period. The museum's exhibits include sculptures, ceramics, coins, and sarcophagi.

## Best Photo Spots
Capture the impressive collection of Roman sculptures and sarcophagi. The museum's gardens also offer pleasant photo opportunities.

## Insider Tips
Tip: Allocate at least 2-3 hours to fully explore the museum's exhibits. The museum is air-conditioned, providing a welcome respite from the summer heat.`,
        practicalInfo: {
        howToGetThere: "Easily accessible by tram (stop: Müze).",
        openingHours: "9:00 AM - 6:00 PM daily.",
        cost: "85 TRY",
        website: "antalyamuzesi.gov.tr"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "archaeology", "art", "culture"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Roman sculptures, sarcophagi, museum gardens",
        insiderTip: "Start your visit in the early morning to beat the crowds, especially during peak season.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Museum is wheelchair accessible."
      }
      },
        {
        name: "Seraser Fine Dining Restaurant",
        description: `# Overview
Seraser Fine Dining Restaurant is located in a beautifully restored Ottoman mansion in Kaleiçi. It offers a sophisticated dining experience with a menu featuring modern interpretations of Turkish and international cuisine. Some say it's one of the most romantic restaurants in Antalya.

## What to Expect
The restaurant features a charming courtyard setting with elegant decor. Signature dishes include slow-cooked lamb shank and seafood risotto. Expect to pay a premium for the exceptional food and service.

## Insider Tips
Tip: Make reservations well in advance, especially during peak season. Request a table in the courtyard for a romantic ambiance.`,
        practicalInfo: {
        howToGetThere: "Located in Kaleiçi (Old Town); easily accessible by tram or on foot.",
        openingHours: "7:00 PM - 11:00 PM daily.",
        cost: "Expensive (500-1000+ TRY per person).",
        website: "seraserrestaurant.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Local Expert",
        interests: ["food", "dining", "culinary", "romance"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Beautiful courtyard, elegantly plated dishes",
        insiderTip: "Ask the sommelier for wine pairing suggestions to complement your meal.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Partially accessible; inquire about accessibility when booking."
      }
      },
        {
        name: "Vanilla Lounge",
        description: `# Overview
Vanilla Lounge is a trendy cafe and restaurant in Kaleiçi known for its stylish decor, delicious coffee, and international cuisine. It's a great place to relax and people-watch.

## What to Expect
The atmosphere is vibrant and modern, with a mix of indoor and outdoor seating. The menu features a range of options, from breakfast items to salads, sandwiches, and pasta dishes. Their coffee selection is excellent.

## Insider Tips
Tip: Try their Turkish coffee served with traditional sweets. It’s a nice treat. The outdoor seating is perfect for enjoying the lively atmosphere of Kaleiçi.`,
        practicalInfo: {
        howToGetThere: "Located in Kaleiçi (Old Town); easily accessible by tram or on foot.",
        openingHours: "9:00 AM - 1:00 AM daily.",
        cost: "Moderate (100-300 TRY per person).",
        website: "vanillalounge.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["cafe", "coffee", "food", "dining"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Stylish interior, outdoor seating",
        insiderTip: "Order the Vanilla Special coffee - their signature drink, available hot or iced.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Generally accessible; some outdoor seating may have limited accessibility."
      }
      },
        {
        name: "7 Mehmet Restaurant",
        description: `# Overview
7 Mehmet Restaurant is a long-standing culinary institution in Antalya, known for its authentic Turkish cuisine and stunning views of the Mediterranean Sea. It's a popular spot for both locals and tourists.

## What to Expect
The restaurant offers a traditional Turkish dining experience with a focus on fresh, local ingredients. Signature dishes include kebabs, seafood, and mezes. The panoramic views from the terrace are exceptional.

## Insider Tips
Tip: Try the '7 Mehmet Special' kebab, a house specialty. Make reservations in advance, especially if you want a table on the terrace with a view.`,
        practicalInfo: {
        howToGetThere: "Taxi or bus are the best options.",
        openingHours: "12:00 PM - 12:00 AM daily.",
        cost: "Moderate to Expensive (200-500 TRY per person).",
        website: "7mehmet.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Local Expert",
        interests: ["food", "dining", "cuisine", "views"],
        costLevel: "Moderate",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic sea views, beautifully presented dishes",
        insiderTip: "Go for lunch rather than dinner; the lunch menu is similarly impressive but usually less crowded.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Restaurant is accessible."
      }
      },
        {
        name: "Antalya Bazaar (Local Market)",
        description: `# Overview
Experience the vibrant atmosphere of a traditional Turkish bazaar in Antalya. This bustling market offers a wide array of goods, including spices, textiles, souvenirs, and fresh produce. It's a great place to immerse yourself in local culture and sample some authentic Turkish flavors.

## What to Expect
Expect a sensory overload of sights, sounds, and smells. Bargaining is common, so be prepared to negotiate prices. Sample local delicacies like Turkish delight and baklava.

## Insider Tips
Tip: Visit the bazaar in the morning for the freshest produce and fewer crowds. Learn a few basic Turkish phrases to help with bargaining.`,
        practicalInfo: {
        howToGetThere: "Located near Kaleiçi; easily accessible by tram or on foot.",
        openingHours: "Typically open from 9:00 AM to 7:00 PM daily (hours may vary).",
        cost: "Free to enter; costs vary for goods purchased.",
        website: "None"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Moderate Adventure",
        interests: ["food", "shopping", "culture", "local"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful spices, textiles, and produce",
        insiderTip: "Don't be afraid to haggle – start by offering about half the asking price and work your way up.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Can be crowded and difficult to navigate with wheelchairs."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Antalya

Antalya offers a variety of transportation options to explore the city and its surroundings. You can choose from public transport, taxis, or rental cars, depending on your budget and preferences.

## Public Transport
Antalya's public transport system includes trams and buses. The AntRay tram is a convenient way to travel between the airport, city center, and some popular attractions. Buses cover a wider area, but can be slower due to traffic. AntalyaKart is a rechargeable card that can be used on both trams and buses, making it a cost-effective option for frequent travelers.

## Taxis & Rideshare
Taxis are readily available throughout Antalya, but it's always a good idea to negotiate the fare beforehand or ensure the meter is running. Uber is not widely available, but some local ride-hailing apps may operate. Consider using these apps for convenience and transparency.

## Walking & Cycling
Kaleiçi (Old Town) is best explored on foot, as its narrow, winding streets are not accessible by car. Cycling is also a great option for exploring the coastline and some of the parks. Rental bikes are available in some areas.`,
        whereToStay: `## Where to Stay in Antalya

Antalya offers a range of accommodation options to suit every budget and preference. From luxury hotels to budget-friendly hostels, you'll find something to suit your needs.

## Best Areas
Kaleiçi (Old Town) is a popular choice for its charming atmosphere and proximity to historical attractions. Lara Beach is known for its luxury resorts and sandy beaches. Konyaaltı is another popular beach area with a mix of hotels and apartments.

## Luxury Options
For a luxurious stay, consider hotels in Lara Beach or along the coastline. These hotels offer stunning sea views, private beaches, and a range of amenities.

## Budget-Friendly
Budget-friendly options can be found in Kaleiçi and some of the residential areas. Hostels, guesthouses, and smaller hotels offer affordable accommodation without compromising on comfort.`,
        bestTimeToVisit: `## Best Time to Visit Antalya

The best time to visit Antalya depends on your preferences for weather and crowds. The city enjoys a Mediterranean climate with hot summers and mild winters.

## Peak Season
The peak season is from June to August, when the weather is hot and sunny. This is the best time for swimming and sunbathing, but expect higher prices and larger crowds. 

## Weather Overview
Spring (April-May) and fall (September-October) offer pleasant weather with fewer crowds. The temperatures are warm enough for swimming, and the scenery is beautiful. Winter (November-March) is mild but can be rainy. Some attractions may have limited hours.

## Local Events
Antalya hosts several festivals and events throughout the year. The Antalya Film Festival in October is a major cultural event. The Antalya Sandland (sand sculpture festival) is held in the summer.`,
        suggestedItinerary: `## Suggested Antalya Itinerary

Here's a suggested itinerary for a 3-day trip to Antalya:

## Day 1
Start your day by exploring Kaleiçi (Old Town). Visit Hadrian's Gate, the Hıdırlık Tower, and the Antalya Archaeological Museum. In the afternoon, relax on Konyaaltı Beach and enjoy the sunset. Have dinner at a traditional Turkish restaurant in Kaleiçi.

## Day 2
Take a day trip to Perge Ancient City. Explore the well-preserved ruins, including the stadium, agora, and Roman baths. In the afternoon, visit the Upper Düden Waterfall and enjoy a picnic in the park. In the evening, dine at 7 Mehmet Restaurant for stunning views and authentic cuisine.

## Day 3
Take a cable car to Tünektepe Hill for panoramic views of Antalya. Spend the afternoon shopping at the local bazaar. Relax and sip coffee at Vanilla Lounge in Kaleiçi.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Antalya?",
        answer: `Antalya offers a wide range of activities, including exploring Kaleiçi (Old Town), visiting ancient cities like Perge, relaxing on Konyaaltı Beach, discovering the Düden Waterfalls, and taking a cable car to Tünektepe Hill.`
      },
        {
        question: "How many days do you need in Antalya?",
        answer: `A 3-day trip is ideal for seeing the main attractions in Antalya. This allows time to explore the city, visit nearby ancient sites, and relax on the beach.`
      },
        {
        question: "What is Antalya famous for?",
        answer: `Antalya is famous for its beautiful beaches, ancient ruins, stunning natural landscapes, and vibrant city life. It's a popular destination for both history buffs and beach lovers.`
      },
        {
        question: "When is the best time to visit Antalya?",
        answer: `The best time to visit Antalya is in the spring (April-May) or fall (September-October) for pleasant weather and fewer crowds. Summer is hot and crowded, while winter is mild but can be rainy.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Vibrant, Historical, Relaxing",
        budgetBreakdown: {
          freeActivities: "Explore Kaleiçi (Old Town),Visit Konyaaltı Beach,See Lower Düden Waterfall,Walk along the harbor",
          budgetFriendly: "Antalya Archaeological Museum (85 TRY),AntRay Tram (10-15 TRY per ride),Local Bus (5-10 TRY per ride),Street food (50-100 TRY)",
          splurgeWorthy: "Seraser Fine Dining Restaurant (500-1000+ TRY per person),Luxury hotel in Lara Beach (1500+ TRY per night)"
        },
        localSecrets: ["Visit Perge Ancient City on Tuesdays at 8:30 AM, right when it opens, to avoid the large tour groups that typically arrive later in the morning. Enter via the west gate, as it's less crowded than the main entrance.", "Use the AntalyaKart for public transport; it's cheaper than buying individual tickets. Download the 'Antalya Ulaşım' app to track bus and tram schedules. Remember to validate your card both when boarding and exiting the vehicle. Locals stand to the right when riding the escalator.", "Budget approximately 450-600 TRY per day for a comfortable trip. This includes 100-150 TRY for meals (street food and casual restaurants), 50-75 TRY for transport (AntalyaKart), 150-250 TRY for attractions, and 50-125 TRY for miscellaneous expenses.", "Visit the Lara Street Bazaar (Saturday market) for clothes, shoes, and household items. It's along the Barınaklar Bulvarı. Haggle respectfully, starting with an offer of 40% of the asking price, and be prepared to walk away if you can't reach an agreeable price.", "Avoid the tourist trap restaurants near Hadrian's Gate in Kaleiçi. They're overpriced and often serve mediocre food. Instead, walk a few blocks inland to find local eateries serving authentic Turkish cuisine at reasonable prices. Try the 'Ev Yemekleri' (home-style cooking) restaurants on Hesapçı Geçidi Sokak.", "The Antalya Golden Orange Film Festival takes place in October each year, usually around the second week. During the festival, accommodations become more expensive and restaurants become more crowded. The Antalya Sandland Festival happens every summer; it's impressive but can get extremely hot."],
        diningHighlights: {
          mustTryDishes: "Piyaz (white bean salad with tahini),Hibeş (tahini dip with spices),Tandır Kebabı (slow-cooked lamb kebab),Balık Ekmek (fish sandwich)",
          bestCafes: "Vanilla Lounge (trendy cafe with great coffee and international cuisine),Castle Cafe & Bistro (charming cafe in Kaleiçi with sea views)",
          topRestaurants: "7 Mehmet Restaurant (authentic Turkish cuisine with stunning sea views),Seraser Fine Dining Restaurant (modern Turkish and international cuisine in a historic setting)",
          foodMarkets: "Lara Street Bazaar (Saturday market with fresh produce and local delicacies),Kaleiçi Local Markets (various markets offering spices, textiles, and souvenirs)",
          diningTips: "Tipping is customary in restaurants (around 10%).,Reservations are recommended for popular restaurants, especially during peak season.,Try the local wine; Antalya produces some excellent varieties.,Many restaurants offer a 'meze' selection; these are small dishes perfect for sharing."
        },
        seasonalHighlights: {
          spring: "Spring is ideal for exploring ancient sites and enjoying outdoor activities. The weather is mild and the flowers are in bloom.",
          summer: "Summer is perfect for swimming, sunbathing, and water sports. The beaches are crowded, but the weather is consistently hot and sunny.",
          fall: "Fall offers pleasant weather and fewer crowds. It's a great time for hiking and exploring the mountains.",
          winter: "Winter is mild but can be rainy. Some attractions may have limited hours, but it's a good time to visit if you prefer fewer tourists."
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