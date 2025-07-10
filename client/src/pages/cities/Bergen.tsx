import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Bergen: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Bergen, Norway (2025 Guide)"}
      description={"Bergen is the kind of city that makes you understand why people fall in love with Norway. It's perched between seven mountains (yes, they actually count them), and everywhere you look there's either a fjord or a mountain or some impossibly picturesque wooden building that looks like it's been painted by someone with very good taste in colors.\n\nThe thing is, Bergen doesn't just rest on its natural beauty—though it has plenty of that. This is a city with serious character. Those colorful wooden houses lined up along the harbor? They're not just pretty; they're where medieval merchants once controlled the fish trade across Northern Europe. The fish market is still there, by the way, and it's still excellent.\n\nWhat I love about Bergen is how it manages to be both ruggedly Norwegian and surprisingly cosmopolitan. You can take a funicular up a mountain in the morning for views that will ruin other cities for you, then spend the afternoon in world-class art museums. Plus, if you're into rain—and let's be honest, you should probably get into rain if you're visiting Norway—Bergen has some of the best."}
      highlights={["Bryggen Hanseatic Wharf",
        "Fløyen Mountain and the Fløibanen Funicular",
        "Bergen Fish Market (Fisketorget)",
        "Fjord Cruise from Bergen",
        "KODE Art Museums of Bergen"]}
      galleryImages={[
        { url: "", alt: "Bergen landmark 1", caption: "Bergen landmark 1 - placeholder" },
        { url: "", alt: "Bergen landmark 2", caption: "Bergen landmark 2 - placeholder" },
        { url: "", alt: "Bergen landmark 3", caption: "Bergen landmark 3 - placeholder" },
        { url: "", alt: "Bergen landmark 4", caption: "Bergen landmark 4 - placeholder" },
        { url: "", alt: "Bergen landmark 5", caption: "Bergen landmark 5 - placeholder" },
        { url: "", alt: "Bergen landmark 6", caption: "Bergen landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Bryggen Hanseatic Wharf",
        description: "The absolute heart of Bergen, Bryggen is a UNESCO World Heritage site and a living piece of history. This row of colourful, leaning wooden houses along the Vågen harbour was the centre of the Hanseatic League's trading empire in Norway from the 14th to the mid-16th century. For 400 years, German merchants dominated the stockfish trade from these very buildings.\n\nStrolling through the narrow, creaking alleyways feels like stepping back in time. Today, the historic buildings house a fascinating mix of museums, artisan workshops, small boutiques, and charming cafes. Despite several fires throughout history, Bryggen has been rebuilt following traditional patterns and methods, preserving its unique medieval character and making it an essential first stop for any visitor.",
        practicalInfo: {
        howToGetThere: "Located in the central harbour of Bergen (Vågen), easily walkable from anywhere in the city center.",
        openingHours: "The wharf area is always open to walk through. Shops and museums have individual hours, typically 10:00 AM - 5:00 PM.",
        cost: "Free to walk around. Museum entry fees apply.",
        website: "https://www.visitbergen.com/things-to-do/bryggen-in-bergen-p824843"
      }
      },
        {
        name: "Fløyen Mountain and the Fløibanen Funicular",
        description: "For the most iconic view of Bergen, a trip up Mount Fløyen is non-negotiable. The Fløibanen funicular, a historic railway, whisks you from the city center to the summit at 320 meters (1,050 ft) above sea level in just under eight minutes. The journey itself is an experience, offering glimpses of the city through the trees as you ascend.\n\nAt the top, you're greeted with a breathtaking panoramic vista of the city, the surrounding mountains, and the islands dotting the sea. Besides the viewpoint, the summit features a restaurant, a cafe, a souvenir shop, and a fantastic children's playground. It's also the starting point for numerous well-marked hiking trails, ranging from easy strolls through the 'Troll Forest' to longer treks to other mountains.",
        practicalInfo: {
        howToGetThere: "The funicular's lower station is at Vetrlidsallmenningen 23A, a 5-minute walk from the Fish Market.",
        openingHours: "Daily, 7:30 AM - 11:00 PM (later on weekends). Hours can vary slightly by season.",
        cost: "Approx. 180 NOK for an adult round-trip ticket (cheaper one-way or in winter).",
        website: "https://www.floyen.no/en"
      }
      },
        {
        name: "Ulriken Mountain and the Ulriken643 Cable Car",
        description: "For those seeking even more dramatic views, Mount Ulriken, the highest of Bergen's seven mountains, is the place to go. Reaching 643 meters (2,110 ft), its summit offers a wilder, more expansive perspective than Fløyen. The journey via the Ulriken643 cable car is a thrilling ride, providing stunning aerial views of the landscape.\n\nOnce at the top, you feel truly on top of the world. The terrain is more rugged, perfect for more serious hikers who might tackle the famous 'Vidden' trail connecting Ulriken to Fløyen (a 4-5 hour hike). For those less inclined to hike, the summit has a panoramic restaurant and a zipline for the adventurous. It's an excellent way to experience the raw nature that surrounds Bergen.",
        practicalInfo: {
        howToGetThere: "Take the Ulriken bus from the city center (near the Tourist Information) to the cable car station. Alternatively, use local bus lines.",
        openingHours: "Daily, typically 9:00 AM - 9:00 PM. Subject to weather conditions.",
        cost: "Approx. 395 NOK for an adult round-trip ticket (bus transfer included).",
        website: "https://ulriken643.no/en/"
      }
      },
        {
        name: "Bergen Fish Market (Fisketorget)",
        description: "A Bergen institution since the 1200s, the Fish Market is a lively, bustling hub of activity right in the city's heart. Located between Bryggen and the main shopping district, it's a feast for the senses. You'll find stalls overflowing with the day's catch, from salmon and cod to giant king crabs and local delicacies like whale meat (hvalkjøtt).\n\nWhile the indoor Mathallen is open year-round, the outdoor market truly comes alive in the summer. You can sample fresh shrimp, smoked salmon, and fish cakes, or sit down at one of the many seafood stalls for a full meal of grilled fish or a creamy fish soup. While it can be touristy and pricier than other food options, the atmosphere and freshness make it a must-do experience.",
        practicalInfo: {
        howToGetThere: "Centrally located at the head of the Vågen harbour, impossible to miss.",
        openingHours: "Outdoor market: May-Sept, daily from 9:00 AM. Indoor market (Mathallen): open year-round, hours vary.",
        cost: "Free to browse. Food prices are high; a meal can cost 300-500 NOK.",
        website: "https://www.visitbergen.com/things-to-do/fish-market-in-bergen-p824833"
      }
      },
        {
        name: "KODE Art Museums of Bergen",
        description: "KODE is one of Scandinavia's largest museums for art, design, and music. It's not a single building but a complex of four distinct art museums (KODE 1, 2, 3, 4) lining the picturesque Lille Lungegårdsvann lake in the city center. A single ticket grants you access to all of them, offering a comprehensive journey through art history.\n\nKODE 3 is the highlight for many, as it houses an extensive collection of works by Edvard Munch, including key pieces from his Frieze of Life series. KODE 4 focuses on modern and contemporary art, KODE 2 hosts temporary exhibitions, and KODE 1 showcases fine craft and design. It's an incredible cultural offering that could easily fill a full day for any art lover.",
        practicalInfo: {
        howToGetThere: "Located around Lille Lungegårdsvann lake in the city center, a 10-minute walk from Bryggen.",
        openingHours: "Tues-Sun: 11:00 AM - 5:00 PM. Closed Mondays.",
        cost: "Approx. 160 NOK for an adult ticket (valid for all 4 buildings for two days).",
        website: "https://www.kodebergen.no/en"
      }
      },
        {
        name: "Fjord Cruise from Bergen",
        description: "Bergen's title as 'Gateway to the Fjords' is well-earned, and no trip is complete without experiencing these natural wonders. Numerous cruises depart directly from the city's harbour, with the 'Fjord Cruise to Mostraumen' being the most popular and accessible option. This three-hour round trip offers a fantastic fjord experience in a nutshell.\n\nThe journey takes you up the 27-kilometer long Osterfjord. The scenery becomes progressively more dramatic as the fjord narrows into the shallow and powerful Mostraumen strait. The boat navigates through deep fjords, past sheer mountain cliffs, and gets so close to waterfalls that you can feel the spray on your face. It's a perfect, compact adventure for those short on time.",
        practicalInfo: {
        howToGetThere: "Cruises depart from the Zachariasbryggen pier, next to the Fish Market.",
        openingHours: "Multiple daily departures, especially in summer. Booking in advance is highly recommended.",
        cost: "Approx. 750 NOK for an adult.",
        website: "https://www.rodne.no/en/fjordcruise/bergen-mostraumen/"
      }
      },
        {
        name: "Gamle Bergen Museum (Old Bergen Museum)",
        description: "Step into 19th-century Bergen at this delightful open-air museum. Gamle Bergen is a reconstructed town with around 50 wooden houses relocated from the city center, saving them from modern development. It offers a tangible sense of what life was like in Bergen during its heyday as a major European port.\n\nYou can wander through streets, squares, and alleys, peering into the homes of merchants, dentists, and sailors. During the summer, actors in period costumes bring the town to life, performing short skits, interacting with visitors, and demonstrating old crafts. It's a charming and educational experience, particularly enjoyable for families.",
        practicalInfo: {
        howToGetThere: "Located in Sandviken, a 10-minute bus ride (lines 3, 4, 5, 6) from the city center.",
        openingHours: "Open daily in summer (mid-May to August). Limited hours or closed the rest of the year. Check website.",
        cost: "Approx. 160 NOK for an adult in high season.",
        website: "https://www.kodebergen.no/en/museums-and-composers-homes/gamle-bergen"
      }
      },
        {
        name: "Troldhaugen - Edvard Grieg Museum",
        description: "Visit the beautiful home of Norway's most celebrated composer, Edvard Grieg. Troldhaugen was his home for the last 22 years of his life, and the villa has been preserved just as it was in 1907. The museum provides intimate insight into his life and work, set in a stunning location overlooking Nordås Lake.\n\nVisitors can explore the main villa, see the small composer's hut by the water where he sought inspiration, and visit his and his wife Nina's tomb, set into a cliff face. The complex also includes a modern museum building and the Troldsalen concert hall, which hosts daily piano recitals during the summer. Hearing Grieg's music performed in the very place it was composed is a magical experience.",
        practicalInfo: {
        howToGetThere: "Take the Bybanen (light rail) to Hop station, followed by a 20-minute signposted walk. A shuttle bus is also available in summer.",
        openingHours: "Daily from May to September, 10:00 AM - 6:00 PM. Reduced hours in the off-season.",
        cost: "Approx. 160 NOK for an adult.",
        website: "https://www.kodebergen.no/en/museums-and-composers-homes/edvard-grieg-museum-troldhaugen"
      }
      },
        {
        name: "Fantoft Stave Church",
        description: "Experience a piece of Viking-era architecture at the Fantoft Stave Church. Originally built in Fortun in Sogn around 1150, it was moved to Fantoft in 1883 to save it from demolition. Tragically, the church was destroyed by arson in 1992, but it has been painstakingly reconstructed using traditional methods, once again standing as a proud symbol of Norway's heritage.\n\nThe church is a magnificent sight, with its intricate dragon-head carvings, tarred wood exterior, and tiered roofs. It's a powerful link to Norway's pre-Christian past and its conversion to Christianity. The serene, wooded location adds to the mystical atmosphere, making it a peaceful and fascinating excursion from the city center.",
        practicalInfo: {
        howToGetThere: "Take the Bybanen (light rail) to Fantoft station. From there, it's a 10-minute uphill walk.",
        openingHours: "Open daily for visitors from mid-May to mid-September, 10:30 AM - 6:00 PM.",
        cost: "Approx. 80 NOK for an adult.",
        website: "https://stavechurch.com/"
      }
      },
        {
        name: "Bergenhus Fortress",
        description: "Guarding the entrance to Bergen's harbour, Bergenhus is one of the oldest and best-preserved stone fortresses in Norway. The area has been a royal residence and military stronghold since the 13th century. The two most significant buildings within the fortress walls are Håkon's Hall and the Rosenkrantz Tower.\n\nHåkon's Hall was built by King Håkon Håkonsson between 1247 and 1261 as a royal residence and feasting hall. The Rosenkrantz Tower, built in the 1560s, incorporated parts of older fortifications and served both defensive and residential purposes. Exploring these buildings offers a direct connection to Bergen's medieval royal and military history. The surrounding park is also a lovely place for a stroll.",
        practicalInfo: {
        howToGetThere: "Located at the end of the Bryggen wharf, a short walk from the city center.",
        openingHours: "Fortress grounds are always open. Håkon's Hall and Rosenkrantz Tower are open daily 10:00 AM - 4:00 PM (hours vary by season).",
        cost: "Approx. 120 NOK for a combined ticket to both buildings.",
        website: "https://www.bymuseet.no/en/museums/bergenhus-fortress/"
      }
      },
        {
        name: "Nordnes Peninsula & Aquarium",
        description: "For a glimpse into a charming residential part of Bergen, take a walk through the Nordnes peninsula. This area features narrow streets lined with picturesque wooden houses, quiet parks, and beautiful sea views. At the very tip of the peninsula, you'll find Nordnes Park, a lovely green space with a totem pole gifted from Seattle, Bergen's sister city.\n\nAlso located here is the Bergen Aquarium (Akvariet i Bergen). While not the largest in the world, it offers a great look at the marine life of the Norwegian coast, as well as penguins, sea lions, and tropical fish. The daily sea lion training and feeding sessions are particularly popular with families. It's a great combination of a pleasant walk and a fun attraction.",
        practicalInfo: {
        howToGetThere: "A 15-20 minute scenic walk from the city center. Bus line 11 also serves the area.",
        openingHours: "Aquarium is open daily from 10:00 AM - 6:00 PM.",
        cost: "Walking in Nordnes is free. Aquarium admission is approx. 345 NOK for an adult.",
        website: "https://www.akvariet.no/en"
      }
      },
        {
        name: "St. Mary's Church (Mariakirken)",
        description: "St. Mary's Church is the oldest surviving building in Bergen, with construction starting in the early 12th century. For centuries, this beautiful Romanesque church served the German Hanseatic community, earning it the nickname 'German Church' (Tyskekirken). Its twin towers are a distinctive feature of the Bergen skyline.\n\nThe interior is just as impressive, featuring a stunning Baroque pulpit from 1676, considered one of the most beautiful in Norway, and a magnificent altarpiece. The church's thick stone walls have withstood the test of time, including all of Bergen's great fires. A visit here is a peaceful and profound journey into the city's deep-rooted history.",
        practicalInfo: {
        howToGetThere: "Located just behind Bryggen, a very short walk from the wharf.",
        openingHours: "Check website for current opening hours for visitors, which can be limited due to services.",
        cost: "Approx. 80 NOK for entry during visitor hours.",
        website: "https://www.kirken.no/nb-NO/fellesrad/bergen/menigheter/domkirken-og-st-jakob/kirker/mariakirken/"
      }
      },
        {
        name: "Leprosy Museum (St. Jørgen's Hospital)",
        description: "For a truly unique and poignant museum experience, visit the Leprosy Museum. Housed in the preserved St. Jørgen's Hospital, one of Europe's best-preserved leprosy hospitals from the 18th century, it tells the story of leprosy in Norway. Bergen was a European centre for leprosy research, and this museum provides a respectful and fascinating look at the lives of the patients and the scientific breakthroughs made here.\n\nWalking through the sparse patient quarters and examining the medical archives offers a sobering but important perspective on a disease that profoundly affected the region. It's a powerful tribute to the human stories behind the illness and the scientific work of doctors like Armauer Hansen, who discovered the leprosy bacterium in Bergen in 1873.",
        practicalInfo: {
        howToGetThere: "Located in the Korskirkekvartalet neighborhood, a 10-minute walk from the Fish Market.",
        openingHours: "Open daily from mid-May to August, 11:00 AM - 3:00 PM. Check for off-season hours.",
        cost: "Approx. 120 NOK.",
        website: "https://www.bymuseet.no/en/museums/the-leprosy-museum/"
      }
      },
        {
        name: "Skostredet Street",
        description: "Escape the main tourist thoroughfares and discover Skostredet, arguably Bergen's trendiest and most charming street. This short, cobbled lane is packed with character and represents the modern, creative spirit of the city. Here you'll find a vibrant mix of independent boutiques, vintage clothing stores, quirky design shops, and cozy cafes.\n\nBy day, it's a perfect spot for a coffee and some unique souvenir shopping. By night, the street comes alive with a number of excellent small bars and restaurants, making it a popular spot for locals to unwind. Exploring Skostredet offers an authentic taste of contemporary Bergen life, away from the crowds of Bryggen.",
        practicalInfo: {
        howToGetThere: "Centrally located, connecting Vågsallmenningen with Kong Oscars gate. A 5-minute walk from the Fish Market.",
        openingHours: "Shops typically open 10:00 AM - 6:00 PM. Bars and restaurants are open late.",
        cost: "Free to explore.",
        website: "https://www.visitbergen.com/things-to-do/shopping/skostredet-p935963"
      }
      },
        {
        name: "The Hanseatic Museum and Schøtstuene",
        description: "To truly understand Bryggen, a visit to this museum is essential. It provides a deep dive into the lives of the Hanseatic merchants who lived and worked here for centuries. The main museum building (Finnegården) is an authentic 18th-century trading house, preserved with its original interiors. **Note:** The main building is undergoing extensive restoration and is closed, but the associated Schøtstuene are open.\n\nThe Schøtstuene were the assembly halls and winter common rooms for the Hanseatic merchants. As fire was forbidden in the trading houses, these were the only heated buildings where they could gather for meals and social events. A visit gives you a fascinating glimpse into the spartan, communal, and male-dominated society of the Hanseatic League.",
        practicalInfo: {
        howToGetThere: "Schøtstuene is located behind Bryggen, near St. Mary's Church. The main museum is on the Bryggen front.",
        openingHours: "Open daily 10:00 AM - 5:00 PM in summer. Check website for current status and hours.",
        cost: "Approx. 120 NOK for Schøtstuene.",
        website: "https://www.hanseatiskmuseum.no/en"
      }
      }
      ]}
      logistics={{
        gettingAround: "Bergen's city center is compact and highly walkable. For attractions further afield, the city has an excellent public transport system. The 'Bybanen' (light rail) is perfect for reaching places like Fantoft Stave Church and Troldhaugen. 'Skyss' operates the extensive network of local buses. Ferries serve the nearby islands. A single ticket is valid for buses and the Bybanen for 90 minutes. The Bergen Card offers free or discounted travel and attraction entry.",
        whereToStay: "For first-time visitors, staying in 'Sentrum' (city center) near Bryggen and the Fish Market is ideal for convenience. The 'Nordnes' peninsula offers a quieter, more residential feel with charming streets. For a truly historic atmosphere, look for accommodation in 'Skuteviken', just past the Bergenhus Fortress. Hotel recommendations include: Clarion Hotel Admiral (mid-range, fantastic harbour views), Thon Hotel Orion (mid-range, next to Bryggen), and Citybox Bergen (budget-friendly, modern).",
        bestTimeToVisit: "The best time to visit Bergen is during the summer months (June to August). You'll enjoy long daylight hours (midnight sun in June), vibrant festivals, and all attractions are fully open. However, this is also the busiest and most expensive season. The shoulder seasons of May and September offer pleasant weather, beautiful spring blooms or autumn colours, and fewer crowds. Be prepared for rain at any time of year; Bergen is famously one of Europe's rainiest cities, which adds to its charm!",
        suggestedItinerary: "Day 1: Historic Heart. Explore Bryggen Hanseatic Wharf, visit the Bergenhus Fortress, wander through the Fish Market for lunch, and take the Fløibanen funicular up Mount Fløyen for sunset views. Day 2: Culture & Nature. Spend the morning at the KODE Art Museums. In the afternoon, choose between the open-air Gamle Bergen Museum or taking the cable car up Mount Ulriken for a hike. Day 3: Fjord Adventure. Take a half-day fjord cruise to Mostraumen to experience the stunning landscapes surrounding the city."
      }}
      faqs={[{
          question: "Is Bergen expensive?",
          answer: "Yes, like the rest of Norway, Bergen is an expensive destination. Eating out, alcohol, and taxis are particularly costly. A mid-range restaurant meal can cost 300-500 NOK per person. To save money, utilize supermarkets like Rema 1000 or Kiwi for lunches and snacks, drink tap water (it's excellent), and walk as much as possible. Consider the Bergen Card if you plan to visit many museums and use public transport frequently, as it can offer good value."
        },
        {
          question: "How many days do you need in Bergen?",
          answer: "To see the main sights of the city itself, 2 to 3 full days is a good amount of time. This allows you to explore the historic center, visit a few museums, and go up at least one of the mountains. If you plan to use Bergen as a base for longer fjord excursions, such as the 'Norway in a Nutshell' tour, you should plan for 4 to 5 days to avoid feeling rushed."
        },
        {
          question: "Is Bergen safe?",
          answer: "Bergen is a very safe city with low crime rates. Standard precautions apply, such as being mindful of your belongings in crowded tourist areas like the Fish Market and Bryggen. The biggest 'safety' concern is often the weather, especially if you go hiking. Always check the weather forecast, wear appropriate waterproof clothing and sturdy footwear, and let someone know your route if you're attempting a longer trail like the Vidden hike."
        },
        {
          question: "What is Bergen famous for?",
          answer: "Bergen is most famous for its iconic Bryggen Hanseatic Wharf, a UNESCO World Heritage site. It is also known as the 'Gateway to the Fjords,' being the primary starting point for exploring the world-renowned fjords of Western Norway. Other claims to fame include its famously rainy weather, being the birthplace of composer Edvard Grieg, its history as a major European trading port, and its stunning setting surrounded by seven mountains."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1645564386021-0db0dd3e2ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxCZXJnZW4lMjB0cmF2ZWx8ZW58MHwwfHx8MTc1MjE0MDA5MXww&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};