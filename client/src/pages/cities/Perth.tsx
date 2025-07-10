import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Perth: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Perth, Australia (2025 Guide)"}
      description={"Welcome to Perth, the sun-drenched capital of Western Australia, a city where urban sophistication meets raw natural beauty. As one of the most isolated major cities in the world, Perth has cultivated a unique and laid-back identity. It boasts more sunny days than any other Australian capital, making it an outdoor lover's paradise. From the vast green expanse of Kings Park overlooking the city skyline to the turquoise waters of the Indian Ocean lapping at pristine beaches, there's an adventure around every corner. Explore the vibrant port city of Fremantle, meet the world-famous quokkas on Rottnest Island, or indulge in the world-class wineries of the Swan Valley. Whether you're seeking relaxation or adventure, our guide to the best things to do in Perth will help you uncover the endless charms of this remarkable city on the edge of the continent."}
      imageUrl={""}
      highlights={["Kings Park and Botanic Garden",
        "Rottnest Island",
        "Fremantle",
        "Cottesloe Beach",
        "Swan River"]}
      galleryImages={[
        { url: "", alt: "Perth landmark 1", caption: "Perth landmark 1 - placeholder" },
        { url: "", alt: "Perth landmark 2", caption: "Perth landmark 2 - placeholder" },
        { url: "", alt: "Perth landmark 3", caption: "Perth landmark 3 - placeholder" },
        { url: "", alt: "Perth landmark 4", caption: "Perth landmark 4 - placeholder" },
        { url: "", alt: "Perth landmark 5", caption: "Perth landmark 5 - placeholder" },
        { url: "", alt: "Perth landmark 6", caption: "Perth landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Kings Park and Botanic Garden",
        description: "One of the world's largest inner-city parks, Kings Park is a 400-hectare oasis of calm and natural beauty overlooking the Perth skyline and Swan River. It's larger than New York's Central Park and is a cherished spot for locals and tourists alike. The park is a mix of pristine bushland, meticulously landscaped gardens, and significant memorial sites. The Western Australian Botanic Garden within the park showcases over 3,000 species of the state's unique and vibrant flora.\n\nDon't miss the Federation Walkway, a treetop bridge offering stunning views, the serene DNA Tower for a panoramic perspective, and the tranquil Place of Reflection. It's the perfect place for a picnic, a leisurely walk, or simply to soak in the incredible views. The annual Kings Park Festival in September is a spectacular display of wildflowers.",
        practicalInfo: {
        howToGetThere: "Located on Fraser Avenue, West Perth. Easily accessible via the free Blue CAT bus from the CBD or a short drive/walk from the city center.",
        openingHours: "The park is open 24/7. The Botanic Garden visitor centre and cafes have specific hours, typically 9 AM - 5 PM.",
        cost: "Free admission.",
        website: "https://www.bgpa.wa.gov.au/kings-park"
      }
      },
        {
        name: "Rottnest Island",
        description: "A short ferry ride from the mainland, Rottnest Island, or 'Rotto' as it's affectionately known, is a protected nature reserve and a quintessential Western Australian experience. Famous for its idyllic beaches, secluded bays, and unique wildlife, the island's main drawcard is the adorable quokka, a small marsupial known for its 'smiling' expression. Renting a bike is the best way to explore the car-free island, hopping between stunning spots like The Basin, Pinky Beach, and Parker Point for swimming and snorkeling.\n\nThe island also has a rich history, with colonial-era buildings and military remnants from WWII. Whether you're taking a selfie with a quokka (from a respectful distance), snorkeling in crystal-clear waters, or enjoying the relaxed atmosphere, a day trip to Rottnest is an unforgettable adventure.",
        practicalInfo: {
        howToGetThere: "Regular ferry services depart from Fremantle (approx. 25-30 mins), Hillarys Boat Harbour (approx. 45 mins), and Perth's Barrack Street Jetty (approx. 90 mins).",
        openingHours: "Accessible year-round. Ferry schedules vary by season.",
        cost: "Ferry prices vary (approx. AUD $70-$100 return per adult) plus an island admission fee (approx. AUD $20) which is usually included in the ferry ticket.",
        website: "https://www.rottnestisland.com"
      }
      },
        {
        name: "Fremantle",
        description: "The historic port city of Fremantle, or 'Freo', has a character all its own. Located where the Swan River meets the Indian Ocean, its streets are lined with beautifully preserved 19th-century architecture, creating a bohemian and artistic vibe. Spend a weekend exploring the bustling Fremantle Markets, a vibrant hub of local produce, crafts, and street food that has been running for over a century.\n\nDelve into the area's convict history with a tour of the UNESCO World Heritage-listed Fremantle Prison, offering fascinating insights into its grim past. Wander down the 'Cappuccino Strip' for coffee and people-watching, browse quirky independent shops, and enjoy fresh fish and chips at the Fishing Boat Harbour. Freo is a feast for the senses and a vital part of the Perth experience.",
        practicalInfo: {
        howToGetThere: "A 30-minute train ride from Perth CBD on the Fremantle Line. Also accessible by car or ferry.",
        openingHours: "Shops and attractions vary. Fremantle Markets are open Friday-Sunday and public holidays.",
        cost: "Free to explore the city. Attractions like the Fremantle Prison have entry fees.",
        website: "https://www.visitfremantle.com.au"
      }
      },
        {
        name: "Cottesloe Beach",
        description: "Cottesloe is arguably Perth's most iconic beach, a stunning 1.5-kilometer stretch of golden sand and turquoise water framed by Norfolk pines. It's a beloved spot for swimming, snorkeling, surfing, and simply relaxing on the terraced lawns overlooking the ocean. The Indiana Teahouse, a landmark building right on the sand, provides a picturesque backdrop and a great spot for a meal or drink.\n\n'Cott', as it's known to locals, is the perfect place to watch the sunset over the Indian Ocean. In March, the beach transforms into a spectacular outdoor gallery for the annual Sculpture by the Sea exhibition, drawing artists and visitors from around the globe. It’s an essential stop for any beach lover visiting Perth.",
        practicalInfo: {
        howToGetThere: "Located between Perth CBD and Fremantle. Accessible via the Fremantle train line (Cottesloe Station is a short walk away) or by bus.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.cottesloe.wa.gov.au"
      }
      },
        {
        name: "Swan River",
        description: "The majestic Swan River is the geographical and cultural heart of Perth, winding its way from the Darling Scarp to the Indian Ocean at Fremantle. The river provides a stunning backdrop for the city and offers a multitude of recreational activities. A river cruise is one of the best ways to appreciate the city skyline, passing by landmarks like Elizabeth Quay, the Old Swan Brewery, and luxurious riverside homes.\n\nFor a more active experience, you can hire a kayak, go stand-up paddleboarding, or cycle along the extensive network of paths that follow its banks. A popular cruise route connects Perth's Barrack Street Jetty with Fremantle, or you can head upstream to the Swan Valley wine region for a day of tasting and indulgence.",
        practicalInfo: {
        howToGetThere: "Access points all along its banks, with major jetties at Elizabeth Quay (Perth CBD) and Fremantle.",
        openingHours: "Accessible 24/7. Cruise and hire companies have their own operating hours.",
        cost: "Free to access. Cruise prices vary, starting from around AUD $35 for a simple scenic cruise.",
        website: "https://www.swanriver.com.au"
      }
      },
        {
        name: "Elizabeth Quay",
        description: "A stunning waterfront precinct on the banks of the Swan River, Elizabeth Quay has revitalized Perth's city center. This vibrant hub connects the CBD with the river and features a striking pedestrian bridge, a unique island playground, public art, and an array of modern bars and restaurants with spectacular water views. It's a lively spot day and night, hosting events, festivals, and markets throughout the year.\n\nYou can take a ride on the beautifully restored historic carousel, cool off in the water park, or simply stroll along the promenade and admire the cityscape. It's also the departure point for many Swan River cruises and ferries to Rottnest Island and South Perth.",
        practicalInfo: {
        howToGetThere: "Located on the edge of the Perth CBD. Easily accessible by foot, train (Elizabeth Quay Station), or the free Blue CAT bus.",
        openingHours: "Public space open 24/7. Restaurant and attraction hours vary.",
        cost: "Free to visit. Some activities have a fee.",
        website: "https://developmentwa.com.au/projects/redevelopment/elizabeth-quay"
      }
      },
        {
        name: "The Bell Tower",
        description: "One of Perth's most unique architectural landmarks, the Bell Tower is home to the historic Swan Bells. These include twelve bells from St Martin-in-the-Fields church in London, which are recorded as being in existence from before the 14th century. They are one of the few sets of royal bells and are famous for having rung for every major event in English history.\n\nVisitors can learn about the history of the bells and the art of bell-ringing through engaging exhibits. For a special experience, join a bell chiming demonstration where you get to try ringing these historic bells yourself. The observation deck offers 360-degree views of the Swan River and city.",
        practicalInfo: {
        howToGetThere: "Located at Barrack Square, Riverside Drive, right next to Elizabeth Quay.",
        openingHours: "Generally 10 AM - 4 PM, but check website for seasonal changes and chiming times.",
        cost: "General entry is approx. AUD $18 for adults. Bell chiming experience is extra.",
        website: "https://www.thebelltower.com.au"
      }
      },
        {
        name: "Art Gallery of Western Australia (AGWA)",
        description: "Situated in the heart of the Perth Cultural Centre, the Art Gallery of Western Australia houses the State Art Collection. The gallery features a rich display of works by Indigenous and Western Australian artists, providing a unique perspective on the state's culture and history. Its collection also includes Australian and international art and design, with both historical and contemporary pieces.\n\nThe gallery underwent a significant redevelopment, including a new rooftop space offering city views and a stunning 34-metre-long mural by local Indigenous artist Christopher Pease. It's a must-visit for art lovers seeking to understand the creative soul of Western Australia.",
        practicalInfo: {
        howToGetThere: "Located in the Perth Cultural Centre, Northbridge, a short walk from Perth Train Station.",
        openingHours: "10 AM - 5 PM, Tuesday to Sunday. Closed Mondays.",
        cost: "Free general admission. Special exhibitions may have a fee.",
        website: "https://artgallery.wa.gov.au"
      }
      },
        {
        name: "Caversham Wildlife Park",
        description: "For an unforgettable Australian wildlife encounter, head to Caversham Wildlife Park. Located within Whiteman Park, this family-owned facility offers one of the most interactive wildlife experiences in the state. Here, you can hand-feed kangaroos, cuddle with a koala, meet a wombat, and watch engaging farm shows like sheep shearing and whip cracking.\n\nThe park focuses on native Australian animals, providing a fantastic opportunity to see everything from cassowaries and Tasmanian devils to various reptiles and birds in a spacious and well-maintained environment. It's a fun, educational, and hands-on day out for all ages.",
        practicalInfo: {
        howToGetThere: "Located inside Whiteman Park, a 30-minute drive northeast of Perth CBD. Limited public transport options, so driving or a tour is recommended.",
        openingHours: "9:30 AM - 4:00 PM daily (except Christmas Day).",
        cost: "Approx. AUD $34 for adults, with discounts for children.",
        website: "https://www.cavershamwildlife.com.au"
      }
      },
        {
        name: "Swan Valley",
        description: "Just a 25-minute drive from the city center, the Swan Valley is Western Australia's oldest wine region. This fertile valley is home to over 40 wineries, ranging from historic, family-run establishments to modern boutique producers. Beyond wine, the region is a foodie's paradise, boasting craft breweries, cideries, distilleries, and producers of artisanal cheeses, chocolates, and fresh produce.\n\nFollow the 32-kilometer Swan Valley Food and Wine Trail to sample the best of the region. You can drive yourself, join a guided bus tour, or even arrive in style on a river cruise from Perth. It's the perfect destination for a day of gourmet indulgence.",
        practicalInfo: {
        howToGetThere: "A 25-minute drive from Perth CBD. Best explored by car, tour bus, or a full-day river cruise.",
        openingHours: "Most wineries and venues are open from 10 AM - 5 PM.",
        cost: "Free to drive through. Tastings, tours, and purchases are at your own cost.",
        website: "https://www.swanvalley.com.au"
      }
      },
        {
        name: "WA Maritime Museum",
        description: "Perched on the edge of the Indian Ocean in Fremantle's Victoria Quay, the WA Maritime Museum explores Western Australia's rich seafaring history. The museum's striking design, resembling an inverted boat hull, houses several iconic vessels, including the America's Cup-winning yacht, Australia II, and an Oberon-class submarine, HMAS Ovens, which you can tour.\n\nThe exhibits cover everything from early European exploration and the state's naval defense to its vibrant fishing and trading industries. The museum offers a deep dive into the profound relationship between the people of Western Australia and the sea.",
        practicalInfo: {
        howToGetThere: "Located at Victoria Quay, Fremantle. A short walk from Fremantle Train Station.",
        openingHours: "9:30 AM - 5:00 PM daily.",
        cost: "Approx. AUD $15 for adults for museum entry. Submarine tours are an additional cost.",
        website: "https://visit.museum.wa.gov.au/maritime"
      }
      },
        {
        name: "The Perth Mint",
        description: "Step into a world of gold and treasure at The Perth Mint. Housed in a grand heritage building, the mint offers a fascinating look at the history of gold in Western Australia. It is Australia's oldest operating mint, and you can watch a spectacular live gold pour where pure gold is heated and transformed into a solid gold bar.\n\nMarvel at the world's largest and most valuable coin, the Australian Kangaroo One Tonne Gold Coin, and discover your weight's worth in gold on a special scale. The exhibits showcase a stunning collection of natural gold nuggets and precious coins, making it a glittering and educational experience.",
        practicalInfo: {
        howToGetThere: "Located at 310 Hay Street, East Perth. Accessible via the free Red CAT bus.",
        openingHours: "9 AM - 5 PM daily.",
        cost: "Guided talks and gold pour demonstrations cost approx. AUD $22 for adults.",
        website: "https://www.perthmint.com"
      }
      },
        {
        name: "Scarborough Beach",
        description: "Known for its impressive surf breaks and vibrant, modern foreshore, Scarborough Beach is a hub of activity. After a major redevelopment, the area now boasts a geo-thermal swimming pool, a skate park, an adventure playground, and a wide variety of cafes, restaurants, and bars. The long, wide stretch of white sand is perfect for sunbathing and beach sports, while the consistent waves attract surfers of all levels.\n\nIn the evening, the Scarborough Sunset Markets (summer season) come alive with food stalls, live music, and a buzzing atmosphere, making it a perfect spot to end the day. It offers a more energetic and youthful vibe compared to the relaxed elegance of Cottesloe.",
        practicalInfo: {
        howToGetThere: "A 20-minute drive northwest of the CBD. Accessible by public bus from Glendalough or Stirling train stations.",
        openingHours: "Open 24/7. Pool and market have specific hours.",
        cost: "Free. Pool entry has a fee.",
        website: "https://www.stirling.wa.gov.au/leisure-and-culture/scarborough-beach-pool"
      }
      },
        {
        name: "Hillarys Boat Harbour",
        description: "A bustling marina and family-friendly destination, Hillarys Boat Harbour offers a wide range of attractions and activities. The sheltered swimming beach is perfect for children, and the boardwalk is lined with shops, cafes, and restaurants. It's a popular spot for fishing, boating, and enjoying a casual meal with waterfront views.\n\nThe star attraction here is AQWA (The Aquarium of Western Australia), which takes you on an underwater journey through the state's diverse marine environments. Walk through a giant underwater tunnel as sharks, rays, and turtles swim overhead, and discover the unique marine life of the shipwreck coast and the vibrant coral reefs of the north.",
        practicalInfo: {
        howToGetThere: "A 25-minute drive north of Perth CBD. Accessible via public bus from Warwick or Stirling train stations.",
        openingHours: "Harbour is always open. Shop, restaurant, and AQWA hours vary. AQWA is typically 9 AM - 4 PM.",
        cost: "Free to visit the harbour. AQWA entry is approx. AUD $32 for adults.",
        website: "https://hillarysboatharbour.com.au"
      }
      },
        {
        name: "Perth Zoo",
        description: "Just a short ferry ride across the river from the CBD, Perth Zoo is dedicated to conservation and education. Home to over 1,200 animals from Australia and around the world, the zoo is divided into distinct habitat zones like the Australian Bushwalk, the Asian Rainforest, and the African Savannah. You can see everything from numbats and giraffes to Sumatran tigers and sun bears.\n\nThe zoo's lush gardens and thoughtful enclosures make for a pleasant walking experience. It plays a crucial role in breeding programs for endangered species, particularly native Australian animals. It's a wonderful day out for families and anyone interested in wildlife conservation.",
        practicalInfo: {
        howToGetThere: "Located in South Perth. Accessible by car, bus, or a short ferry ride from the Barrack Street Jetty.",
        openingHours: "9 AM - 5 PM daily.",
        cost: "Approx. AUD $37 for adults.",
        website: "https://perthzoo.wa.gov.au"
      }
      }
      ]}
      logistics={{
        gettingAround: "Perth's public transport system, Transperth, includes trains, buses, and ferries, and is efficient for getting around the metro area. A SmartRider card is the cheapest way to pay. Within the city center, free CAT (Central Area Transit) buses service key tourist spots. Ride-sharing services like Uber and Didi are widely available. For exploring further afield, like the Swan Valley or coastal areas, renting a car is a convenient option.",
        whereToStay: "For first-time visitors, the Perth CBD offers convenience and proximity to attractions like Elizabeth Quay and Kings Park. Northbridge is the hub for nightlife, dining, and the arts. Fremantle provides a historic, bohemian atmosphere with great markets and pubs. For a beachside stay, Cottesloe and Scarborough are top choices. Recommended hotels include The Ritz-Carlton (Luxury), Alex Hotel (Boutique), and The Hougoumont Hotel (Mid-Range in Fremantle).",
        bestTimeToVisit: "The best times to visit Perth are during spring (September to November) and autumn (March to May). These seasons offer pleasant, sunny days with mild temperatures, perfect for exploring beaches and parks. Spring is especially beautiful with the blooming of wildflowers in Kings Park. Summer (December to February) is hot and dry, ideal for beach activities but can be intense. Winter (June to August) is mild and rainy, but still has many sunny days.",
        suggestedItinerary: "Day 1: City & River. Start at Kings Park for panoramic views. Head to the CBD to see the Bell Tower and explore Elizabeth Quay. In the afternoon, take a Swan River cruise to Fremantle. Day 2: Fremantle & Beach. Explore the Fremantle Markets and the historic Fremantle Prison. In the afternoon, take a train to Cottesloe Beach for a swim and to watch the sunset. Day 3: Rottnest Island. Take an early ferry to Rottnest Island. Rent a bike to explore the island, find a secluded bay for a swim, and get the famous quokka selfie."
      }}
      faqs={[{
          question: "Is Perth expensive?",
          answer: "Perth is on par with other major Australian cities like Sydney and Melbourne, so it can be expensive. A mid-range hotel costs around AUD $150-250 per night, and a meal at a mid-range restaurant is about AUD $25-40. You can save money by using the free CAT buses, enjoying free attractions like Kings Park and the beaches, and eating at food courts or Fremantle Markets."
        },
        {
          question: "How many days do you need in Perth?",
          answer: "A stay of 3 to 5 days is ideal to experience the main highlights of Perth and its immediate surroundings, including a day trip to Rottnest Island and another to Fremantle. This allows for a relaxed pace to enjoy the city, beaches, and key attractions without feeling rushed. If you plan to explore more of Western Australia, such as Margaret River, you would need at least 7 to 10 days."
        },
        {
          question: "Is Perth safe?",
          answer: "Perth is generally a very safe city, with a low crime rate. Standard precautions should be taken, as with any major city. It's wise to be aware of your surroundings, especially at night in entertainment precincts like Northbridge. The beaches are well-patrolled, but always swim between the flags. Overall, visitors can feel secure exploring the city."
        },
        {
          question: "What is Perth famous for?",
          answer: "Perth is famous for being one of the most isolated capital cities in the world, its incredibly sunny climate, and its stunning natural beauty. Key highlights include the world-famous smiling quokkas on Rottnest Island, the vast inner-city oasis of Kings Park, pristine white-sand beaches like Cottesloe, and the Swan River that winds through the city. It's also known for its relaxed, outdoor-focused lifestyle and the historic charm of its port city, Fremantle."
        }
      ]}
    />
  );
};