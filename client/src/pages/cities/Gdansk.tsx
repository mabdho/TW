import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Gdansk: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Gdansk, Poland (2025 Guide)"}
      description={"Rising from the ashes of World War II, Gdansk is a city of profound resilience and captivating beauty. Its meticulously reconstructed Old Town, with a kaleidoscope of colorful Hanseatic-style buildings, lines the historic Royal Route. As the birthplace of the Solidarity movement, which helped topple communism in Eastern Europe, and the site of the first shots of WWII, Gdansk holds a pivotal place in 20th-century history. This vibrant port city on the Baltic coast, once the world’s amber capital, now enchants visitors with its maritime atmosphere, charming canals, and world-class museums. From wandering cobblestone lanes to exploring poignant historical sites, you'll find an incredible array of experiences. This guide will walk you through the absolute best things to do in Gdansk, ensuring a trip filled with discovery and wonder at every turn."}
      highlights={["Long Market and Neptune's Fountain",
        "St. Mary's Basilica",
        "European Solidarity Centre",
        "Museum of the Second World War",
        "Mariacka Street"]}
      galleryImages={[
        { url: "", alt: "Gdansk landmark 1", caption: "Gdansk landmark 1 - placeholder" },
        { url: "", alt: "Gdansk landmark 2", caption: "Gdansk landmark 2 - placeholder" },
        { url: "", alt: "Gdansk landmark 3", caption: "Gdansk landmark 3 - placeholder" },
        { url: "", alt: "Gdansk landmark 4", caption: "Gdansk landmark 4 - placeholder" },
        { url: "", alt: "Gdansk landmark 5", caption: "Gdansk landmark 5 - placeholder" },
        { url: "", alt: "Gdansk landmark 6", caption: "Gdansk landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Long Market and Neptune's Fountain",
        description: "The heart of Gdansk's Main Town, the Long Market (Długi Targ) is a stunning pedestrian thoroughfare flanked by ornate, colorful facades. Historically, this was the domain of the city's wealthiest merchants and the setting for royal processions along the 'Royal Route'. It's an architectural marvel, with each building telling a story of Gdansk's prosperous past. \n\nAt its center stands Neptune's Fountain, a magnificent 17th-century bronze statue symbolizing the city's connection to the sea. This iconic landmark is a popular meeting point and a perfect spot for photos. Surrounding the fountain are Artus Court and the Golden House, further testaments to the city's former glory. It's the perfect place to begin your exploration, grab a coffee at an outdoor cafe, and soak in the vibrant atmosphere.",
        practicalInfo: {
        howToGetThere: "Located in the center of the Main Town, easily accessible on foot from anywhere in the area.",
        openingHours: "Open 24/7. Shops and cafes have individual operating hours.",
        cost: "Free to walk around.",
        website: "https://visitgdansk.com/en/"
      }
      },
        {
        name: "St. Mary's Basilica",
        description: "Dominating the city skyline, St. Mary's Basilica (Bazylika Mariacka) is one of the largest brick churches in the world. Its sheer scale is breathtaking, capable of holding up to 25,000 people. Construction began in the 14th century, and its massive form served as a beacon for ships approaching the port. The interior is stark and white, a result of post-war reconstruction, which creates a powerful sense of space and light.\n\nFor the adventurous, the real highlight is climbing the 405 steps to the top of the 78-meter-high tower. The effort is rewarded with unparalleled panoramic views of Gdansk's red-tiled roofs, the Motława River, and the surrounding cityscape. Inside, don't miss the intricate astronomical clock and the beautiful main altar.",
        practicalInfo: {
        howToGetThere: "Located just off Mariacka Street in the Main Town.",
        openingHours: "Generally 9:00 AM - 6:00 PM Monday-Saturday, 1:00 PM - 6:00 PM Sunday. Hours vary by season and for services.",
        cost: "Small fee for entry to the main church and a separate, higher fee for the tower climb (approx. 16 PLN).",
        website: "https://bazylikamariacka.gdansk.pl/"
      }
      },
        {
        name: "European Solidarity Centre",
        description: "This is more than a museum; it's a monumental tribute to the Polish Solidarity (Solidarność) movement, which began in the Gdansk shipyards and played a crucial role in the fall of communism. The building itself is a striking piece of modern architecture, designed to resemble a ship's hull, clad in rust-colored steel. Inside, the interactive and deeply moving permanent exhibition tells the story of the fight for freedom and civil rights in Poland and across Eastern Europe.\n\nThe exhibits use archival footage, historical artifacts (like the original 21 demands written on wooden boards), and personal testimonies to create a powerful narrative. It's an essential visit for understanding modern Polish history and the global impact of this peaceful revolution. Even the most history-averse visitor will leave profoundly moved and inspired.",
        practicalInfo: {
        howToGetThere: "Located next to the Gdansk Shipyard, a 15-20 minute walk or a short tram ride from the Main Town.",
        openingHours: "10:00 AM - 6:00 PM (until 8:00 PM in summer). Closed on Tuesdays.",
        cost: "Approx. 30 PLN for the permanent exhibition.",
        website: "https://ecs.gda.pl/en/"
      }
      },
        {
        name: "Museum of the Second World War",
        description: "Opened in 2017, this world-class museum offers a comprehensive and harrowing look at World War II from a global perspective, with a special focus on the Polish experience. The main exhibition is located 14 meters underground, a symbolic gesture representing the hidden horrors of war. The narrative is vast, covering the rise of totalitarianism, the daily life of civilians under occupation, resistance movements, and the Holocaust.\n\nThe museum's design is stark and immersive, using powerful artifacts, life-sized reconstructions, and multimedia displays to tell the story of human suffering and resilience. Its location is also significant, as Gdansk (then Danzig) was where the war began. It's an emotionally heavy but incredibly important museum that provides crucial context for understanding the city and the 20th century.",
        practicalInfo: {
        howToGetThere: "A 10-minute walk from the Main Town, located near the Motława River.",
        openingHours: "10:00 AM - 6:00 PM (until 8:00 PM in summer). Closed on Mondays.",
        cost: "Approx. 29 PLN. Free entry on Tuesdays (booking recommended).",
        website: "https://muzeum1939.pl/en"
      }
      },
        {
        name: "Mariacka Street",
        description: "Often cited as one of the most beautiful streets in Gdansk, Ulica Mariacka is a cobblestoned gem running from St. Mary's Basilica to the Motława River. What makes it unique are the ornate, gargoyle-like 'stoops' (przedproża) that adorn the front of each narrow townhouse. These raised terraces are a characteristic feature of Gdansk's historical architecture.\n\nToday, the street is famous for its amber shops and artisan workshops. You can watch jewelers at work, polishing and setting the 'Baltic Gold' into beautiful pieces. The romantic, slightly melancholic atmosphere, especially in the evening light, makes it a perfect place for a leisurely stroll. It captures the essence of Old Gdansk's charm and its long-standing connection to the amber trade.",
        practicalInfo: {
        howToGetThere: "Adjacent to St. Mary's Basilica in the heart of the Main Town.",
        openingHours: "Street is always open. Shops typically open from 10:00 AM to 6:00 PM or later.",
        cost: "Free to explore.",
        website: "https://visitgdansk.com/en/"
      }
      },
        {
        name: "The Crane (Żuraw)",
        description: "An iconic symbol of Gdansk's maritime heritage, the Crane is a massive 15th-century wooden port crane that looms over the Motława River. It was once the largest of its kind in medieval Europe, used to load cargo onto ships and install masts. Powered by men walking inside two large wooden wheels (like human-sized hamster wheels), it could lift up to four tons. \n\nToday, the restored Crane is part of the National Maritime Museum. You can go inside to see the fascinating lifting mechanism and learn about the bustling port life of Hanseatic Gdansk. It's a striking piece of medieval engineering and a testament to the city's historical importance as a trading hub.",
        practicalInfo: {
        howToGetThere: "Located on the Motława River embankment (Długie Pobrzeże) in the Main Town.",
        openingHours: "Varies by season, generally 10:00 AM - 4:00 PM. Check the museum's website.",
        cost: "Approx. 12 PLN. Can be bought as a combined ticket with other Maritime Museum branches.",
        website: "https://nmm.pl/en/zuraw/"
      }
      },
        {
        name: "Motława River Embankment (Długie Pobrzeże)",
        description: "Strolling along the Długie Pobrzeże, the long embankment of the Motława River, is a quintessential Gdansk experience. This lively boardwalk is lined with cafes, restaurants, and amber shops, all housed in historic buildings with picturesque waterfront views. From here, you can admire the city's iconic landmarks like the Crane and the medieval water gates.\n\nThe embankment is always buzzing with activity. You can watch replica pirate ships and modern tour boats navigate the river, listen to street musicians, or simply find a bench and people-watch. It's particularly beautiful at dusk when the lights of the city reflect on the water, creating a magical atmosphere.",
        practicalInfo: {
        howToGetThere: "Runs along the eastern edge of the Main Town.",
        openingHours: "Accessible 24/7.",
        cost: "Free.",
        website: "https://visitgdansk.com/en/"
      }
      },
        {
        name: "Westerplatte",
        description: "A short boat or bus ride from the city center, Westerplatte is a site of immense historical significance. It was here, on September 1, 1939, that the first shots of World War II were fired when a German battleship attacked the small Polish military depot. The Polish garrison heroically held out for seven days against overwhelming odds. \n\nToday, the peninsula is a poignant open-air memorial. You can walk among the ruins of the barracks, see the towering Monument to the Coast Defenders, and reflect on the beginning of the world's deadliest conflict. It's a sobering but essential pilgrimage for anyone interested in history, offering a powerful counterpoint to the rebuilt beauty of the city center.",
        practicalInfo: {
        howToGetThere: "Accessible by public bus (line 106 or 138) or by 'water tram' / tour boat from the Main Town.",
        openingHours: "Open 24/7. A small museum on site has limited hours.",
        cost: "Free to walk around the memorial grounds.",
        website: "https://muzeum1939.pl/en/westerplatte"
      }
      },
        {
        name: "Oliwa Cathedral",
        description: "Located in the leafy, tranquil district of Oliwa, this cathedral is a stunning mix of Gothic, Baroque, and Rococo architecture. While the structure itself is impressive, the main draw is its magnificent 18th-century Rococo pipe organ. With nearly 8,000 pipes, it features moving angels, stars, and suns that come to life during concerts.\n\nTry to time your visit to coincide with one of the free, 20-minute organ demonstrations held throughout the day (donations welcome). The sound is incredible and fills the entire space. After the concert, take a walk through the adjacent Oliwa Park, a beautifully landscaped garden with ponds, greenhouses, and winding paths – a perfect escape from the city bustle.",
        practicalInfo: {
        howToGetThere: "Take the SKM commuter train to Gdańsk Oliwa or a tram from the city center.",
        openingHours: "9:00 AM - 5:00 PM Mon-Sat, 2:00 PM - 5:30 PM Sun. Check for concert times.",
        cost: "Free entry to the cathedral. A small donation is appreciated for the organ concert.",
        website: "http://www.katedraoliwa.pl/"
      }
      },
        {
        name: "Amber Museum",
        description: "Gdansk has been at the heart of the world's amber trade for centuries, and this museum is a dazzling celebration of 'Baltic Gold'. Housed in the historic Great Mill (Wielki Młyn), the exhibition takes you on a journey through the history of amber, from its natural formation millions of years ago to its role in art and trade. \n\nThe collection is spectacular, featuring everything from raw amber chunks with insects trapped inside (inclusions) to intricate historical artifacts and stunning contemporary jewelry. Interactive displays make it engaging for all ages. You'll learn how to distinguish real amber from fakes and gain a deep appreciation for this unique local treasure.",
        practicalInfo: {
        howToGetThere: "Located in the Great Mill, a short walk from the Main Town.",
        openingHours: "10:00 AM - 6:00 PM. Closed on Tuesdays.",
        cost: "Approx. 32 PLN.",
        website: "https://muzeumgdansk.pl/oddzialy-muzeum/muzeum-bursztynu/"
      }
      },
        {
        name: "Main Town Hall",
        description: "A centerpiece of the Long Market, the Main Town Hall (Ratusz Głównego Miasta) is a masterpiece of Gothic-Renaissance architecture. Its slender clock tower, topped with a gilded statue of King Sigismund II Augustus, is a key feature of the Gdansk skyline. For centuries, this was the seat of the city's government. \n\nInside, you can explore the lavishly decorated chambers, which now house a branch of the Gdansk History Museum. The highlight is the Red Room, considered one of the most beautiful Renaissance interiors in Europe, with intricate carvings and ceiling paintings. Climbing the tower offers another fantastic, centrally-located viewpoint over the Royal Route and the surrounding streets.",
        practicalInfo: {
        howToGetThere: "Located at the junction of Długa Street and the Long Market.",
        openingHours: "Varies seasonally, typically 10:00 AM - 4:00 PM. Check the Gdansk Museum website for current hours.",
        cost: "Approx. 16 PLN for the museum, separate fee for the tower.",
        website: "https://muzeumgdansk.pl/oddzialy-muzeum/ratusz-glownego-miasta/"
      }
      },
        {
        name: "Golden Gate & Green Gate",
        description: "These two magnificent gates bookend the Royal Route (Długa Street and the Long Market). The Golden Gate (Złota Brama), at the western end, is a triumphal arch built in the 17th century in a Dutch Mannerist style. It's adorned with allegorical figures representing civic virtues like Peace, Freedom, Wealth, and Glory.\n\nAt the eastern end, overlooking the river, is the Green Gate (Brama Zielona). Inspired by the city hall of Antwerp, it was designed as a formal residence for visiting Polish monarchs but was rarely used as such. Today it houses exhibitions and a branch of the National Museum. Walking between these two gates feels like stepping back in time, following the path of kings.",
        practicalInfo: {
        howToGetThere: "Located at the start (Golden Gate) and end (Green Gate) of the Long Market.",
        openingHours: "Exterior accessible 24/7. Green Gate exhibition hours vary.",
        cost: "Free to view the gates from the outside.",
        website: "https://visitgdansk.com/en/"
      }
      },
        {
        name: "St. Catherine's Church & Clock Museum",
        description: "The oldest church in Gdansk, St. Catherine's (Kościół św. Katarzyny) dates back to the early 13th century. While it suffered heavy damage in WWII and a fire in 2006, it has been beautifully restored. Its distinctive Baroque steeple is a local landmark.\n\nInside the church's tower is the fascinating Museum of Tower Clocks, a branch of the Gdansk Museum. Here you can see a collection of historic clock mechanisms and learn about the science of timekeeping. The church is also home to the world's first pulsar clock, an incredibly precise timepiece. It's a unique attraction for those interested in history, science, and horology.",
        practicalInfo: {
        howToGetThere: "Located in the Old Town, a short walk north of the Main Town area.",
        openingHours: "Church hours vary. Museum is generally 10:00 AM - 1:00 PM Tue-Sun (check website).",
        cost: "Donation for church entry. Approx. 10 PLN for the museum.",
        website: "https://muzeumgdansk.pl/oddzialy-muzeum/muzeum-nauki-gdanskiej/"
      }
      },
        {
        name: "Sopot Pier (Molo w Sopocie)",
        description: "A perfect half-day trip from Gdansk, Sopot is a chic seaside resort town famous for its elegant spa-town atmosphere and beautiful beach. Its crowning glory is the Molo, the longest wooden pier in Europe, stretching over 500 meters into the Baltic Sea. Strolling along the pier offers refreshing sea breezes and fantastic views of the coastline.\n\nThe area around the pier is vibrant, with the bustling 'Monciak' promenade (Bohaterów Monte Cassino street) featuring the quirky 'Crooked House' (Krzywy Domek), numerous restaurants, and shops. It's a wonderful contrast to the historical weight of Gdansk and a great place to relax, enjoy an ice cream, and experience Poland's premier beach destination.",
        practicalInfo: {
        howToGetThere: "A 20-minute ride on the SKM commuter train from Gdańsk Główny station.",
        openingHours: "Pier is open 24/7, but there's an entrance fee during the high season (April-September) from 8:00 AM to 8:00 PM.",
        cost: "Approx. 10 PLN for pier entry in summer. Free in the off-season.",
        website: "https://molo.sopot.pl/"
      }
      },
        {
        name: "Kayak Tour on the Motława River",
        description: "For a unique perspective on the city, trade the crowded streets for the calm waters of the Motława River. Taking a guided kayak tour allows you to see Gdansk's landmarks from a different angle, paddling past the historic Crane, the Granary Island, the Soldek ship museum, and into the old shipyard areas.\n\nSeveral local companies offer guided tours, including evening paddles that showcase the city beautifully illuminated at night. It's a peaceful yet active way to explore, offering fantastic photo opportunities away from the crowds. No prior kayaking experience is necessary, making it an accessible adventure for most visitors.",
        practicalInfo: {
        howToGetThere: "Tour operators are located along the Motława River, typically on Granary Island (Wyspa Spichrzów).",
        openingHours: "Tours run from spring to autumn, with various time slots available including evening tours.",
        cost: "Approx. 80-120 PLN per person for a 2-hour guided tour.",
        website: "Search for 'Gdansk kayak tour' online for various operators like 'Around Gdansk'."
      }
      }
      ]}
      logistics={{
        gettingAround: "Gdansk is a very walkable city, especially the Main Town. For longer distances, the public transport system of trams and buses is efficient and affordable; use the 'Jakdojade' app for planning. To travel between Gdansk, Sopot, and Gdynia (the 'Tri-City'), the SKM commuter train is the fastest option. Ride-sharing apps like Uber and Bolt are also widely available and inexpensive.",
        whereToStay: "For first-time visitors, staying in the Main Town (Główne Miasto) is ideal for being in the heart of the action (e.g., Radisson Blu Hotel, IBB Hotel Długi Targ). For a quieter, more modern vibe with great restaurants, consider Wyspa Spichrzów (Granary Island) across the river. The Wrzeszcz district offers a more local, less touristy experience, while Jelitkowo or nearby Sopot are perfect for those wanting to be close to the beach.",
        bestTimeToVisit: "The best time to visit Gdansk is from May to September. Summer (June-August) offers the warmest weather, long days, and numerous festivals, but also the largest crowds. The shoulder seasons of late spring (May) and early autumn (September) are perfect, with pleasant weather and fewer tourists. Winter can be cold, but the Christmas markets in December provide a magical, festive atmosphere.",
        suggestedItinerary: "A simple 3-day itinerary: \nDay 1: Explore the Royal Route, including the Golden Gate, Long Market, Neptune's Fountain, and Green Gate. Climb St. Mary's Basilica tower. In the afternoon, visit the Museum of the Second World War. Enjoy dinner on the Motława River embankment.\nDay 2: Visit the European Solidarity Centre and the historic Gdansk Shipyard. Stroll down the beautiful Mariacka Street for amber shopping. Take a river cruise or kayak tour in the afternoon. \nDay 3: Take the SKM train to Oliwa to hear the organ concert at Oliwa Cathedral and walk in Oliwa Park. Continue on the SKM to Sopot to walk the pier and see the Crooked House before returning to Gdansk."
      }}
      faqs={[{
          question: "Is Gdansk expensive?",
          answer: "Compared to many Western European cities, Gdansk is very affordable. Accommodation, public transport, and food offer great value. You can enjoy a hearty meal of pierogi for a few dollars, and a local beer is often cheaper than a coffee. While prices in the heart of the Main Town are higher, stepping just a few streets away reveals even more budget-friendly options. Museum entrance fees are also very reasonable."
        },
        {
          question: "How many days do you need in Gdansk?",
          answer: "Three days is the ideal amount of time to explore Gdansk comfortably. This allows you to cover the main historical sites in the city center, visit the two major museums (WWII and Solidarity Centre), and take a half-day trip to either Sopot or Westerplatte. With four or five days, you could explore the entire Tri-City (Gdansk, Sopot, Gdynia) or take a longer excursion to Malbork Castle."
        },
        {
          question: "Is Gdansk safe?",
          answer: "Gdansk is a very safe city for tourists. The city center is well-lit, and violent crime is rare. As in any popular tourist destination, you should exercise standard precautions. Be mindful of your belongings in crowded areas like the Long Market or on public transport to avoid pickpockets. Overall, visitors can feel secure exploring the city day and night."
        },
        {
          question: "What is Gdansk famous for?",
          answer: "Gdansk is famous for several key things. Historically, it was a major port in the Hanseatic League and the world's amber capital. In the 20th century, it became known as the starting point of World War II at Westerplatte and the birthplace of the Solidarity movement led by Lech Wałęsa, which helped end communism in Poland. Today, it's famous for its stunningly rebuilt Old Town, the iconic Crane, and its rich maritime and cultural heritage."
        }
      ]}
    />
  );
};