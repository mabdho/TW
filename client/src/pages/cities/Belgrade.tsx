import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Belgrade: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Belgrade, Serbia (2025 Guide)"}
      description={"Welcome to Belgrade, the 'White City' at the confluence of the Sava and Danube rivers. A city of contrasts, Belgrade wears its tumultuous history on its sleeve, with ancient fortresses standing beside socialist-era blocks and modern skyscrapers. It's a place where gritty energy meets warm, unpretentious hospitality. Famous for its electrifying nightlife, burgeoning creative scene, and soul-stirring 'kafana' culture, Belgrade offers an experience that is both raw and refined. Whether you're exploring centuries of history within Kalemegdan Park or dancing until dawn on a river barge, you'll quickly discover that the best things to do in Belgrade are as diverse and dynamic as the city itself. Prepare to be captivated by its spirit and charm."}
      highlights={["Belgrade Fortress (Kalemegdan)",
        "Temple of Saint Sava",
        "Nikola Tesla Museum",
        "Skadarlija",
        "Knez Mihailova Street"]}
      attractions={[
        {
        name: "Belgrade Fortress (Kalemegdan)",
        description: "Perched on a dramatic cliff overlooking the confluence of the Sava and Danube rivers, the Belgrade Fortress is the historical heart of the city. Its sprawling complex, known as Kalemegdan Park, is a layered tapestry of history, with Roman, Byzantine, Ottoman, and Austro-Hungarian influences visible in its walls, gates, and towers. It's more than just a historical site; it's Belgrade's most beloved public park.\n\nLocals and tourists alike flock here to stroll through its shaded pathways, visit the Military Museum, discover hidden churches, and marvel at the Victor Monument, a powerful symbol of the city. The panoramic views, especially at sunset, are breathtaking, making it the perfect spot to begin or end your exploration of Belgrade.",
        practicalInfo: {
        howToGetThere: "Located at the end of Knez Mihailova Street in the Old Town (Stari Grad). Easily accessible on foot from the city center.",
        openingHours: "The park is open 24/7. Museums and specific sites within have their own hours, typically 10:00 AM - 5:00 PM.",
        cost: "Free to enter the park. Admission fees apply for the Military Museum and other specific attractions inside.",
        website: "http://www.beogradskatvrdjava.co.rs"
      }
      },
        {
        name: "Temple of Saint Sava",
        description: "Dominating the Belgrade skyline, the Temple of Saint Sava is one of the largest Orthodox churches in the world and a monumental symbol of Serbian identity and faith. Its brilliant white marble and copper domes are visible from almost every part of the city. While construction began in the 1930s, the interior work is an ongoing masterpiece. \n\nStep inside to be awestruck by the sheer scale of the main dome and the stunning, shimmering gold mosaics that adorn the crypt. The level of detail is extraordinary, depicting biblical scenes with breathtaking artistry. The vast, serene space offers a moment of peace and reflection away from the city buzz.",
        practicalInfo: {
        howToGetThere: "Located in the Vračar neighborhood. Accessible via trams 9, 10, 14 or buses 31, 33, 42, 47, 48, 59.",
        openingHours: "Daily, 7:00 AM - 8:00 PM.",
        cost: "Free admission, though donations are welcome.",
        website: "https://hramsvetogsave.rs/"
      }
      },
        {
        name: "Nikola Tesla Museum",
        description: "Dedicated to the genius inventor who changed the world, the Nikola Tesla Museum is a must-visit for anyone interested in science and history. Housed in a beautiful villa in the Vračar district, this museum holds the personal legacy of Tesla, including his original documents, photographs, and, most uniquely, his ashes contained within a glowing golden orb.\n\nThe tour is the highlight. It includes a short film about his life and live demonstrations of his most famous inventions, like the Tesla Coil. Watching electricity arc through the air is an electrifying experience that brings his work to life. It's an engaging and compact museum that offers profound insight into a brilliant mind.",
        practicalInfo: {
        howToGetThere: "Krunska 51, Vračar. A short walk from Slavija Square.",
        openingHours: "Tuesday-Sunday, 10:00 AM - 8:00 PM. Closed Mondays. English tours run frequently.",
        cost: "Around 800 RSD for the tour.",
        website: "https://nikolateslamuseum.org/"
      }
      },
        {
        name: "Skadarlija (The Bohemian Quarter)",
        description: "Step back in time as you walk the cobblestone streets of Skadarlija, Belgrade's charming bohemian quarter. In the late 19th and early 20th centuries, this area was the gathering place for the city's artists, writers, and actors. Today, it retains that old-world spirit with its traditional restaurants (kafanas), flower-lined facades, and antique street lamps.\n\nIn the evening, Skadarlija comes alive with the sounds of live traditional Serbian music (Starogradska muzika) spilling out from the kafanas. It's the perfect place to enjoy a hearty Serbian meal, sip on rakija (fruit brandy), and soak up an atmosphere that feels a world away from the modern city.",
        practicalInfo: {
        howToGetThere: "Located in the Old Town, a short walk from Republic Square.",
        openingHours: "Street is always open. Restaurants typically open for lunch and stay open late into the night.",
        cost: "Free to walk around. Restaurant prices are higher than elsewhere but offer a unique experience.",
        website: "N/A (public area)"
      }
      },
        {
        name: "Knez Mihailova Street",
        description: "The vibrant, bustling heart of Belgrade's downtown, Knez Mihailova Street is the city's main pedestrian and shopping thoroughfare. Lined with magnificent 19th-century architecture, it's a showcase of Belgrade's aspirations to become a modern European capital. The street is a constant hive of activity, filled with high-street brands, independent boutiques, charming cafes, and street performers.\n\nMore than just a shopping destination, it's a place to see and be seen. It serves as a central artery connecting Republic Square to Kalemegdan Fortress. Take a leisurely stroll, grab an ice cream, admire the grand buildings, and absorb the dynamic energy of modern Belgrade.",
        practicalInfo: {
        howToGetThere: "Starts at Republic Square and runs through the Old Town to Kalemegdan Park.",
        openingHours: "Shops generally open 9:00 AM - 9:00 PM. The street itself is always open.",
        cost: "Free to walk.",
        website: "N/A (public area)"
      }
      },
        {
        name: "Republic Square",
        description: "Considered the absolute center of Belgrade, Republic Square (Trg Republike) is the city's main meeting point. The square is dominated by three major landmarks: the grand National Museum, the elegant National Theatre, and the iconic statue of Prince Mihailo on horseback, a popular rendezvous spot for locals who say 'let's meet at the horse'.\n\nRecently renovated, the square is now a vast, pedestrian-friendly space perfect for people-watching from the steps of the museum. It's the starting point for most city tours and the gateway to Knez Mihailova Street and Skadarlija, making it an unmissable and energetic hub.",
        practicalInfo: {
        howToGetThere: "Central point in the city, served by numerous bus and trolleybus lines.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A (public square)"
      }
      },
        {
        name: "Museum of Yugoslavia",
        description: "For a deep dive into the complex history of 20th-century Serbia and the region, the Museum of Yugoslavia is essential. This complex explores the life of the state of Yugoslavia, from its creation to its dramatic dissolution. The main exhibition showcases a fascinating collection of artifacts, art, and documents that narrate the Yugoslav story.\n\nThe highlight for many is the House of Flowers (Kuća Cveća), the final resting place of Marshal Josip Broz Tito, the longtime leader of Yugoslavia. His mausoleum is surrounded by a vast collection of ceremonial gifts he received from world leaders, offering a unique glimpse into the geopolitics of the Cold War era.",
        practicalInfo: {
        howToGetThere: "Located in the Dedinje neighborhood. Take trolleybus 40 or 41 from the city center.",
        openingHours: "Wednesday-Sunday, 10:00 AM - 6:00 PM. Closed Mondays and Tuesdays.",
        cost: "Around 600 RSD for the entire complex.",
        website: "https://www.muzej-jugoslavije.org/en/"
      }
      },
        {
        name: "Ada Ciganlija",
        description: "Known affectionately as 'Belgrade's Sea,' Ada Ciganlija is a massive river island on the Sava that has been transformed into the city's premier recreational zone. A paradise for sports enthusiasts and nature lovers, it offers a welcome escape from the urban heat, especially during summer.\n\nThe island boasts miles of gravel beaches, a clean lake for swimming and kayaking, and a dedicated path for cycling, rollerblading, and jogging. You'll also find countless cafes, restaurants, and sports facilities, from water skiing and bungee jumping to tennis and golf. It's the perfect place to spend a relaxing afternoon or an active day out.",
        practicalInfo: {
        howToGetThere: "Several bus lines (e.g., 23, 37, 52, 53, 58) go to the entrance. In summer, special boat lines also operate from New Belgrade.",
        openingHours: "Open 24/7. Cafes and facilities have their own hours.",
        cost: "Free to enter. Costs apply for rentals and activities.",
        website: "https://www.adaciganlija.rs/"
      }
      },
        {
        name: "Zemun Quay and Gardoš Tower",
        description: "Once a separate Austro-Hungarian town, Zemun is now a charming municipality of Belgrade with a distinctly different, more relaxed atmosphere. A walk along the Zemun Quay is a delight, with fish restaurants, swans gliding on the Danube, and beautiful views back towards the main city. \n\nThe highlight is climbing the winding, cobblestone streets to the Gardoš Tower, also known as the Millennium Tower. Built by the Hungarians in 1896, this romantic red-brick tower offers the best panoramic views over Zemun's red-tiled roofs and the vast expanse of the Danube. It's a picturesque area that feels like a day trip without leaving the city.",
        practicalInfo: {
        howToGetThere: "Take bus 83 or 84 from the city center (Zeleni Venac bus station).",
        openingHours: "Quay is always open. Gardoš Tower is typically open daily from 10:00 AM until evening.",
        cost: "Free to explore the area. A small fee (around 200 RSD) to climb the tower.",
        website: "N/A"
      }
      },
        {
        name: "New Belgrade (Novi Beograd) and Brutalist Architecture",
        description: "Cross the Sava River to New Belgrade, a district built largely after World War II in the stark, imposing style of Brutalism. This area is a fascinating open-air museum for architecture buffs. The 'Blokovi' (Blocks) are vast residential complexes that create a unique urban landscape, a testament to the socialist vision of the era.\n\nKey structures to see include the Western City Gate (Genex Tower), a futuristic-looking skyscraper with a rotating restaurant, and the Sava Centar, a massive congress hall. Exploring New Belgrade offers a profound contrast to the old-world charm of Stari Grad and is crucial to understanding the city's 20th-century identity.",
        practicalInfo: {
        howToGetThere: "Accessible via numerous bus and tram lines crossing the Branko's Bridge or Gazela Bridge.",
        openingHours: "Public spaces, viewable 24/7.",
        cost: "Free to explore.",
        website: "N/A"
      }
      },
        {
        name: "Splavovi (River Clubs)",
        description: "Belgrade's nightlife is legendary, and its epicenter is the 'splavovi' – floating barges, clubs, and restaurants moored along the banks of the Sava and Danube rivers. This is not just a tourist attraction; it's an integral part of local culture. By day, many splavovi operate as relaxed cafes, but by night, they transform into pulsating nightclubs.\n\nThe scene is diverse, with barges dedicated to every imaginable music genre, from turbo-folk and Serbian pop to electronic, house, and rock. The main concentration is near Ušće and behind the Belgrade Fair. Experiencing a night out on a splav is an essential Belgrade ritual, especially in the summer months.",
        practicalInfo: {
        howToGetThere: "Located along the Sava and Danube rivers, particularly near Ušće Park and the Belgrade Fair. Best reached by taxi.",
        openingHours: "Nightclubs typically open around 11:00 PM and go until dawn. Cafes are open during the day.",
        cost: "Entry is often free, but drink prices are higher than on land, and table reservations are highly recommended.",
        website: "Various individual websites; good info on tourist portals."
      }
      },
        {
        name: "Saint Mark's Church",
        description: "Located adjacent to the lush Tašmajdan Park, Saint Mark's Church is one of Belgrade's most impressive ecclesiastical buildings. Built between 1931 and 1940, it's a grand example of the Serbo-Byzantine Revival style, modeled after the Gračanica monastery in Kosovo. Its sheer scale and striking brick facade make it a prominent landmark.\n\nInside, the church is vast and somewhat stark, as its mosaic decoration remains incomplete, which lends it a unique, solemn atmosphere. The church also houses the tomb of the powerful Serbian Emperor Dušan the Mighty. Its location next to a lovely park makes it a peaceful and worthwhile stop.",
        practicalInfo: {
        howToGetThere: "Located near the Serbian Parliament building. A 10-minute walk from Republic Square.",
        openingHours: "Daily, 7:00 AM - 7:00 PM.",
        cost: "Free.",
        website: "https://www.crkvasvetogmarka.rs/"
      }
      },
        {
        name: "House of Flowers (Kuća Cveća)",
        description: "Part of the Museum of Yugoslavia complex, the House of Flowers is the mausoleum of Josip Broz Tito, the charismatic and controversial leader of the Socialist Federal Republic of Yugoslavia. The name comes from the fact that the tomb was once surrounded by numerous flowers. Today, it is a simple marble grave within a winter garden.\n\nVisiting the House of Flowers is a journey into a specific and powerful period of history. The adjoining rooms display an incredible collection of Tito's relay batons, used in annual birthday celebrations, which symbolize the unity of the former nation. It's a quiet, contemplative space that offers a unique window into the cult of personality that surrounded him.",
        practicalInfo: {
        howToGetThere: "In Dedinje, as part of the Museum of Yugoslavia. Use trolleybus 40 or 41.",
        openingHours: "Wednesday-Sunday, 10:00 AM - 6:00 PM.",
        cost: "Included in the ticket for the Museum of Yugoslavia (approx. 600 RSD).",
        website: "https://www.muzej-jugoslavije.org/en/"
      }
      },
        {
        name: "Avala Tower",
        description: "Rising from the forested slopes of Avala Mountain just outside the city, the Avala Tower is a symbol of Belgrade's resilience. The original 1965 tower, a masterpiece of engineering, was destroyed during the 1999 NATO bombing. An exact replica was painstakingly rebuilt and reopened in 2010, becoming a proud landmark for the city.\n\nStanding at 204.68 meters, it is the tallest tower in the Balkans. An elevator whisks visitors up to an observation deck and cafe, which provide spectacular 360-degree views of Belgrade, the rolling hills of Šumadija, and the Pannonian Plain. It's a fantastic half-day trip to appreciate the region's geography.",
        practicalInfo: {
        howToGetThere: "Located on Avala Mountain, about 16 km south of Belgrade. Best reached by car or seasonal public bus 400L.",
        openingHours: "Daily. April-Oct: 9:00 AM - 8:00 PM; Nov-March: 9:00 AM - 6:00 PM (weather permitting).",
        cost: "Around 400 RSD for the elevator.",
        website: "https://www.avalskitoranj.rs/"
      }
      },
        {
        name: "Dorćol District",
        description: "Dorćol is one of Belgrade's oldest and most characterful neighborhoods, a place where history and modern urban culture collide. Its name derives from Turkish words meaning 'four roads'. The area is split into Upper Dorćol, known for its leafy streets and historic buildings, and Lower Dorćol (or Danube Dorćol), which has a grittier, industrial-chic vibe.\n\nToday, Dorćol is arguably Belgrade's trendiest district. Wander its streets to find the city's best specialty coffee shops, independent designer stores, avant-garde art galleries, and innovative restaurants. It’s also home to the Belgrade's only mosque, the Bajrakli Mosque, and the Jewish Historical Museum, reflecting the area's multicultural past.",
        practicalInfo: {
        howToGetThere: "North of Republic Square and Knez Mihailova, stretching towards the Danube. Easily walkable from the city center.",
        openingHours: "Public area. Shops and cafes have their own hours.",
        cost: "Free to explore.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Belgrade's city center, including Stari Grad and Vračar, is very walkable. For longer distances, the public transport network consists of buses, trams, and trolleybuses. Use the 'Moja Karta' app or buy a paper ticket at a kiosk ('kiosk'). Taxis are plentiful and affordable; always use official, registered taxis (look for a TX on the license plate) or use apps like Yandex Go or CarGo to avoid being overcharged.",
        whereToStay: "For first-time visitors, Stari Grad (Old Town) is ideal, putting you within walking distance of the Fortress, Knez Mihailova, and Skadarlija. Vračar offers a more local, upscale feel near the Temple of St. Sava. Dorćol is perfect for those seeking a trendy vibe with great cafes and boutiques. For modern hotels and business travel, Novi Beograd (New Belgrade) is a good choice. Recommended hotels include the historic Hotel Moskva, the luxurious Square Nine Hotel, and the modern Hilton Belgrade.",
        bestTimeToVisit: "The best times to visit Belgrade are late spring (May-June) and early autumn (September-October). The weather is pleasant and comfortable for exploring, and the city is vibrant with outdoor cafes. Summer (July-August) is hot and lively, perfect for enjoying Ada Ciganlija and the splavovi nightlife, but can be crowded. Winter is cold, often with snow, offering a cozier atmosphere with fewer tourists.",
        suggestedItinerary: "Day 1: Historic Core. Start at Republic Square, stroll down Knez Mihailova Street to Belgrade Fortress for sunset views over the rivers. Have a traditional dinner with live music in Skadarlija. \nDay 2: Faith, Science, and Power. Visit the monumental Temple of Saint Sava in the morning, followed by the Nikola Tesla Museum. In the afternoon, explore the Museum of Yugoslavia and the House of Flowers. \nDay 3: River Life and Contrasts. Take a bus to Zemun to explore its charming streets and climb Gardoš Tower. In the afternoon, either relax and swim at Ada Ciganlija (in summer) or explore the brutalist architecture of New Belgrade. End the day at a splav on the river."
      }}
      faqs={[{
          question: "Is Belgrade expensive?",
          answer: "No, Belgrade is one of the most affordable capital cities in Europe. Accommodation, food, and transportation are significantly cheaper than in most Western European cities. You can enjoy a hearty meal in a traditional restaurant for $10-15, a coffee for around $2, and a single public transport ticket for less than $1. While prices in very touristy areas can be slightly higher, it remains a very budget-friendly destination."
        },
        {
          question: "How many days do you need in Belgrade?",
          answer: "Three full days is a good amount of time to see the main highlights of Belgrade at a comfortable pace. This allows you to cover the historical center, key museums, and get a feel for different neighborhoods like Zemun and New Belgrade. If you want to explore more deeply, enjoy the nightlife properly, and perhaps take a day trip, 4 to 5 days would be ideal."
        },
        {
          question: "Is Belgrade safe?",
          answer: "Belgrade is generally a very safe city for tourists. Violent crime is rare. The main things to be aware of are common to any large city: watch out for pickpockets in crowded areas and on public transport. The most common issue for tourists is being overcharged by unofficial taxis; always use reputable companies or ride-hailing apps. Use common sense, and you are very unlikely to encounter any problems."
        },
        {
          question: "What is Belgrade famous for?",
          answer: "Belgrade is famous for several key things: its strategic location at the confluence of the Sava and Danube rivers; its formidable Belgrade Fortress (Kalemegdan); its legendary and energetic nightlife, particularly the 'splavovi' river clubs; its stark and fascinating brutalist architecture in New Belgrade; and its complex history as the capital of former Yugoslavia. It is also renowned for its warm hospitality, vibrant cafe culture, and delicious, hearty Serbian cuisine."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1717478138654-e6507cccd858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxCZWxncmFkZSUyMHRyYXZlbHxlbnwwfDB8fHwxNzUyMTQwMDg4fDA&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};