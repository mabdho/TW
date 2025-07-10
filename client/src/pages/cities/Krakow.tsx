import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Krakow: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Krakow, Poland (2025 Guide)"}
      description={"Steeped in legend and history, Krakow is Poland's cultural heart, a city that miraculously escaped the ravages of WWII. Its UNESCO-listed Old Town is a fairytale tapestry of Gothic spires, cobblestone lanes, and Europe's largest medieval market square. From the regal Wawel Castle, echoing with tales of kings and dragons, to the poignant history of the Kazimierz district, Krakow offers a journey through time. But this is no city stuck in the past; it pulses with a vibrant energy, fueled by its student population, quirky cellar bars, and innovative art scenes. Whether you're here to delve into somber history, marvel at architectural wonders, or simply soak up the bohemian atmosphere, you'll find an incredible array of the best things to do in Krakow. Prepare to be enchanted by this city of resilience, beauty, and unforgettable stories."}
      imageUrl={""}
      highlights={["Main Market Square (Rynek Główny)",
        "Wawel Royal Castle",
        "Auschwitz-Birkenau Memorial and Museum",
        "Wieliczka Salt Mine",
        "Kazimierz (The Old Jewish Quarter)"]}
      galleryImages={[
        { url: "", alt: "Krakow landmark 1", caption: "Krakow landmark 1 - placeholder" },
        { url: "", alt: "Krakow landmark 2", caption: "Krakow landmark 2 - placeholder" },
        { url: "", alt: "Krakow landmark 3", caption: "Krakow landmark 3 - placeholder" },
        { url: "", alt: "Krakow landmark 4", caption: "Krakow landmark 4 - placeholder" },
        { url: "", alt: "Krakow landmark 5", caption: "Krakow landmark 5 - placeholder" },
        { url: "", alt: "Krakow landmark 6", caption: "Krakow landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Main Market Square (Rynek Główny)",
        description: "The beating heart of Krakow's Old Town, the Rynek Główny is one of the largest medieval town squares in Europe. Dating back to the 13th century, it is surrounded by magnificent townhouses, historic palaces, and soaring church towers. At its center stands the iconic Cloth Hall (Sukiennice), a Renaissance masterpiece that has been a center of trade for centuries, now housing souvenir stalls and an art gallery upstairs.\n\nThe square is a vibrant hub of activity day and night. Listen for the Hejnał Mariacki, a trumpet call played every hour from the top of St. Mary's Basilica, which abruptly cuts off to commemorate a 13th-century trumpeter shot while warning the city of an impending attack. It's the perfect place to start your Krakow adventure, grab a coffee at a cafe, and soak in the city's incredible atmosphere.",
        practicalInfo: {
        howToGetThere: "Located in the center of the Old Town (Stare Miasto), easily accessible on foot from anywhere in the area.",
        openingHours: "Open 24/7. Individual attractions, cafes, and shops have their own hours.",
        cost: "Free to visit the square. Attractions like St. Mary's Basilica and the Rynek Underground Museum have admission fees.",
        website: "https://krakow.pl/english"
      }
      },
        {
        name: "Wawel Royal Castle",
        description: "Perched majestically on a hill overlooking the Vistula River, Wawel Royal Castle is the most historically and culturally significant site in Poland. For centuries, this was the residence of Polish kings and a symbol of Polish statehood. The sprawling complex is a mix of Romanesque, Gothic, Renaissance, and Baroque architecture, offering a fascinating glimpse into the nation's past.\n\nYou can spend a whole day exploring its various sections, which require separate tickets. Highlights include the opulent State Rooms, the lavish Royal Private Apartments, the Crown Treasury and Armoury, and the Wawel Cathedral, where Polish monarchs were crowned and buried. Don't miss the legendary Dragon's Den at the foot of the hill.",
        practicalInfo: {
        howToGetThere: "A 10-15 minute walk south from the Main Market Square.",
        openingHours: "Varies by season and exhibition. Generally 9:30 AM - 5:00 PM. Check the website as hours differ for each part of the castle.",
        cost: "Free to enter the courtyard. Separate tickets are required for each exhibition (approx. 20-35 PLN each).",
        website: "https://wawel.krakow.pl/en"
      }
      },
        {
        name: "Auschwitz-Birkenau Memorial and Museum",
        description: "A visit to Auschwitz-Birkenau is a somber and profoundly moving experience, but an essential one for understanding the depths of human tragedy during the Holocaust. Located about an hour from Krakow, this former Nazi concentration and extermination camp stands as a solemn memorial to the more than 1.1 million people who perished here during World War II.\n\nThe tour covers two sites: Auschwitz I, the main camp with its brick barracks now housing museum exhibits, and Auschwitz II-Birkenau, the vast extermination camp with its iconic guard tower and the remains of gas chambers. Due to the sensitive and distressing nature of the site, it is highly recommended to join a guided tour for context and respectful navigation. It's a place of quiet reflection and remembrance that will stay with you long after you leave.",
        practicalInfo: {
        howToGetThere: "Located in Oświęcim, about 70km from Krakow. Book a guided tour with transportation, or take a public bus or train.",
        openingHours: "Opens at 7:30 AM. Closing times vary by month (from 2:00 PM in winter to 7:00 PM in summer).",
        cost: "Entry is free for individual visitors, but booking a time slot online is mandatory. Guided tours have a fee (approx. 90 PLN) and are highly recommended.",
        website: "http://www.auschwitz.org/"
      }
      },
        {
        name: "Wieliczka Salt Mine",
        description: "Descend into a breathtaking underground world at the Wieliczka Salt Mine, a UNESCO World Heritage site that has been in operation since the 13th century. This subterranean labyrinth stretches over 287 kilometers and reaches depths of 327 meters, though visitors explore a fascinating 3.5-kilometer tourist route.\n\nThe journey takes you through chambers and corridors carved entirely out of rock salt. You'll marvel at underground saline lakes, intricate statues of historical and mythical figures, and the jaw-dropping Chapel of St. Kinga. This immense, ornate chapel, complete with salt-crystal chandeliers and detailed altarpieces, is the mine's crowning glory. The tour provides a unique look at the history of mining and the artistry of the miners who worked here for centuries.",
        practicalInfo: {
        howToGetThere: "Located about 15km from Krakow. Accessible by suburban train, public bus (line 304), or organized tour.",
        openingHours: "Generally 8:00 AM - 6:00 PM, but hours vary by season. Check the website.",
        cost: "A guided tour is mandatory. Prices are around 126 PLN for foreign language tours.",
        website: "https://www.wieliczka-saltmine.com/"
      }
      },
        {
        name: "Kazimierz (The Old Jewish Quarter)",
        description: "Once a separate city, Kazimierz was the center of Jewish life in Krakow for over 500 years before being tragically devastated during WWII. Today, it has been reborn as Krakow's most vibrant and bohemian district, a captivating blend of history, culture, and nightlife. The area is a mosaic of synagogues, old Jewish cemeteries, and poignant memorials, standing alongside trendy art galleries, quirky shops, and countless atmospheric bars and restaurants.\n\nExplore Szeroka Street, the heart of the old Jewish town, visit the Old Synagogue and the historic Remuh Cemetery, and feel the creative energy in the air. In the evening, the district comes alive, with klezmer music drifting from restaurants and locals and tourists alike filling the unique cellar bars. It's a place to wander, get lost, and discover.",
        practicalInfo: {
        howToGetThere: "A 15-20 minute walk southeast of the Main Market Square.",
        openingHours: "The district is always accessible. Synagogues and museums have their own opening hours and entrance fees.",
        cost: "Free to explore. Small fees for entering synagogues (approx. 10-20 PLN).",
        website: "https://www.krakow.pl/english/visit_krakow/1120,artykul,kazimierz.html"
      }
      },
        {
        name: "St. Mary's Basilica",
        description: "Dominating one corner of the Main Market Square, St. Mary's Basilica is a stunning example of Polish Gothic architecture. Its two unequal towers are a defining feature of the Krakow skyline. While the exterior is impressive, the interior is truly breathtaking. Step inside to be dazzled by the star-spangled blue ceiling, intricate stained-glass windows, and elaborate wall paintings.\n\nThe basilica's greatest treasure is the magnificent Altarpiece of Veit Stoss, the largest Gothic altarpiece in the world. Carved between 1477 and 1489, this wooden masterpiece depicts the life of the Virgin Mary with incredible detail and emotion. It is ceremoniously opened every day at 11:50 AM. Remember to buy a separate ticket to climb the taller tower (Hejnał Tower) for the best views and a close-up look at where the famous trumpet call is played.",
        practicalInfo: {
        howToGetThere: "Located on the Main Market Square (Rynek Główny).",
        openingHours: "Mon-Sat 11:30 AM - 6:00 PM, Sun & holidays 2:00 PM - 6:00 PM. Tower has different hours.",
        cost: "Approx. 15 PLN for the basilica, and a separate ticket of approx. 20 PLN for the tower.",
        website: "https://mariacki.com/en/"
      }
      },
        {
        name: "Schindler's Factory Museum",
        description: "While many visit because of the film 'Schindler's List,' this excellent museum is much more than just the story of Oskar Schindler. It is a powerful and immersive exhibition titled 'Krakow Under Nazi Occupation 1939-1945.' Located in the former enamel factory's administrative building, the museum uses artifacts, photographs, and multimedia installations to paint a vivid picture of the wartime experience for all of Krakow's citizens, both Polish and Jewish.\n\nYou'll walk through recreated street scenes, apartments, and even a mock-up of the Plaszow concentration camp, gaining a deep understanding of the daily struggles, resistance, and terror of the occupation. Schindler's office has been preserved as part of the exhibition, putting his heroic actions into the broader context of the city's tragic history.",
        practicalInfo: {
        howToGetThere: "Located in the Zabłocie district, south of the river. Take a tram or walk from Kazimierz (approx. 20 minutes).",
        openingHours: "Tue-Sun 9:00 AM - 6:00 PM, Mon 10:00 AM - 2:00 PM (free admission on Mondays, but book online).",
        cost: "Approx. 32 PLN. It is highly recommended to book tickets online in advance as they sell out.",
        website: "https://www.muzeumkrakowa.pl/branches/oskar-schindlers-factory"
      }
      },
        {
        name: "Planty Park",
        description: "Encircling the entire Old Town, Planty Park is a lush green belt that was established in the early 19th century on the site of the medieval city walls. This beautiful park covers about 52 acres and is a favorite spot for both locals and tourists to take a relaxing stroll, sit on a bench with a book, or simply escape the bustling city streets.\n\nThe park is dotted with fountains, statues of famous Poles, and remnants of the old fortifications like the Florian Gate and the Barbican. Walking the full loop of the Planty takes about an hour and is a wonderful way to orient yourself, passing by many of Krakow's key landmarks along the way. It offers a peaceful and scenic route between different parts of the city center.",
        practicalInfo: {
        howToGetThere: "It surrounds the Old Town (Stare Miasto), you can't miss it.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Rynek Underground Museum",
        description: "Hidden four meters beneath the bustling surface of the Main Market Square lies a high-tech, interactive museum that brings medieval Krakow to life. The Rynek Underground exhibition is a unique archaeological park showcasing the excavated foundations of the 12th-century Cloth Hall, ancient merchant stalls, and a preserved medieval road.\n\nUsing holograms, touchscreens, and audiovisual presentations, the museum creates an immersive experience that tells the story of the city's history, its trade connections, and daily life centuries ago. You can see ancient artifacts, weigh yourself in old Polish units, and watch animations about the city's past. It's a fascinating blend of archaeology and modern technology that provides incredible context for the historic square above.",
        practicalInfo: {
        howToGetThere: "The entrance is in the Cloth Hall on the Main Market Square.",
        openingHours: "Wed-Mon 10:00 AM - 7:00 PM, Tue 10:00 AM - 2:00 PM (free admission on Tuesdays).",
        cost: "Approx. 32 PLN. Booking online is highly recommended as visitor numbers are limited.",
        website: "https://www.muzeumkrakowa.pl/branches/rynek-underground"
      }
      },
        {
        name: "Collegium Maius",
        description: "Step into the academic world of centuries past at Collegium Maius (Great College), the oldest building of the Jagiellonian University, which dates back to the 14th century. Its most famous student was Nicolaus Copernicus. The highlight is the stunning arcaded courtyard, a masterpiece of Gothic architecture. It's a peaceful oasis just steps from the busy Old Town streets.\n\nWhile the courtyard is free to enter, taking a guided tour of the interior museum is highly recommended. You'll see historic lecture halls, the old library, professors' quarters, and a fascinating collection of scientific instruments. Don't miss the courtyard's musical clock, which features a procession of historical figures at 9 AM, 11 AM, 1 PM, 3 PM, and 5 PM.",
        practicalInfo: {
        howToGetThere: "Located on Jagiellońska Street, a short walk from the Main Market Square.",
        openingHours: "Courtyard: 8:00 AM - 6:00 PM. Museum tours: Tue-Fri at specific times, booking advised.",
        cost: "Free to enter the courtyard. Guided museum tours approx. 18 PLN.",
        website: "https://maius.uj.edu.pl/en_GB/"
      }
      },
        {
        name: "Kościuszko Mound",
        description: "For one of the best panoramic views of Krakow, make the trip to the Kościuszko Mound. This man-made hill was erected in the 1820s to honor Tadeusz Kościuszko, a Polish national hero who also fought in the American Revolutionary War. A winding path takes you to the summit, 34 meters above the ground, where you'll be rewarded with a breathtaking 360-degree vista of the city, the Vistula River, and on a clear day, even the Tatra Mountains.\n\nThe mound is surrounded by 19th-century brick fortifications which now house a small museum dedicated to Kościuszko's life. It's a great choice for those looking to combine a bit of history with a refreshing walk and stunning photo opportunities, slightly away from the main tourist trail.",
        practicalInfo: {
        howToGetThere: "Located west of the city center. Take bus 100 or 101 from the Salwator tram loop.",
        openingHours: "Daily from 9:00 AM, closing time varies by season (around 5 PM in winter, 8 PM in summer).",
        cost: "Approx. 20 PLN.",
        website: "https://kopieckosciuszki.pl/en/"
      }
      },
        {
        name: "Wawel Cathedral",
        description: "While part of the Wawel Castle complex, the Cathedral of St. Stanislaus and St. Wenceslaus is an attraction in its own right and deserves special attention. This is Poland's national sanctuary and the coronation site of Polish monarchs. The current Gothic structure dates to the 14th century, but it stands on the remains of two earlier Romanesque cathedrals.\n\nThe interior is a rich jumble of art and architecture from different eras, with 18 different chapels, including the stunning gold-domed Sigismund Chapel, a masterpiece of Renaissance design. The cathedral is also the final resting place of most of Poland's kings and national heroes. A separate ticket allows you to climb the Sigismund Bell Tower to see the massive Sigismund Bell and enjoy incredible views over the city.",
        practicalInfo: {
        howToGetThere: "Located within the Wawel Castle complex.",
        openingHours: "Mon-Sat 9:00 AM - 4:45 PM, Sun 12:30 PM - 4:45 PM. Subject to change for religious services.",
        cost: "Free to enter the main nave. A combined ticket (approx. 25 PLN) is needed for the Royal Tombs, Sigismund Bell, and Cathedral Museum.",
        website: "https://www.katedra-wawelska.pl/en/"
      }
      },
        {
        name: "Ghetto Heroes Square (Plac Bohaterów Getta)",
        description: "Located in the Podgórze district, across the river from Kazimierz, this square holds a powerful and poignant memorial. During WWII, this area was the site of the Krakow Ghetto, and this square, then called Plac Zgody, was the main hub where Jews were forced to assemble for deportation to concentration camps. Today, the square is filled with 70 oversized, empty metal chairs.\n\nThis art installation, created by Piotr Lewicki and Kazimierz Łatak, symbolizes the tragic departure and the lost lives of the ghetto's inhabitants, as well as the furniture and belongings they were forced to leave behind. It's a deeply moving and thought-provoking monument. Nearby, you can visit the Eagle Pharmacy (Apteka pod Orłem), which operated inside the ghetto and is now a museum detailing its history.",
        practicalInfo: {
        howToGetThere: "In the Podgórze district. Cross the river from Kazimierz via the Powstańców Śląskich bridge or take a tram.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Museum of Contemporary Art in Krakow (MOCAK)",
        description: "Located right next to Schindler's Factory in the post-industrial Zabłocie district, MOCAK offers a striking contrast to the historical sites that dominate Krakow. The museum focuses on contemporary art from the last two decades, with a strong emphasis on post-war and conceptual art from Polish and international artists. Its mission is to explain the rationale behind contemporary art and make it accessible to a wider audience.\n\nThe sleek, modern building houses a permanent collection as well as a dynamic program of temporary exhibitions that are often challenging, thought-provoking, and politically engaged. It's an essential stop for modern art lovers and offers a fresh perspective on the creative energy pulsing through modern-day Krakow.",
        practicalInfo: {
        howToGetThere: "In the Zabłocie district, next to Schindler's Factory. Accessible by tram.",
        openingHours: "Tue-Sun 11:00 AM - 7:00 PM. Closed Mondays.",
        cost: "Approx. 25 PLN. Free admission on Thursdays.",
        website: "https://en.mocak.pl/"
      }
      },
        {
        name: "Dragon's Den (Smocza Jama)",
        description: "A fun and legendary attraction for all ages, the Dragon's Den is a limestone cave located at the foot of Wawel Hill. According to Krakow's founding myth, this cave was once home to the terrifying Wawel Dragon, who was famously outsmarted and defeated by a clever shoemaker named Skuba. The legend is a beloved part of local folklore.\n\nVisitors can descend a spiral staircase from inside the Wawel Castle grounds into the dark, damp cave and walk through its chambers, emerging near the banks of the Vistula River. Upon exiting, you'll be greeted by a modern, fire-breathing statue of the dragon, which delights children and adults by roaring and shooting real flames every few minutes. It's a quick but memorable stop, especially for families.",
        practicalInfo: {
        howToGetThere: "Entrance is on Wawel Hill, exit is by the Vistula River.",
        openingHours: "Open daily from April to October, 10:00 AM - 5:00 PM (later in summer). Closed in winter.",
        cost: "Approx. 9 PLN.",
        website: "https://wawel.krakow.pl/en/exhibition/smocza-jama-wawel-dragon-s-den"
      }
      }
      ]}
      logistics={{
        gettingAround: "Krakow is a very walkable city, especially the Old Town and Kazimierz. For longer distances, the public transport system of trams and buses is efficient and affordable. Tickets can be bought from machines at stops or on board (card payment often available). Ride-sharing apps like Bolt and Uber are also widely available and inexpensive.",
        whereToStay: "For first-time visitors, staying in or near the Old Town (Stare Miasto) offers easy access to major sights. For a bohemian vibe with fantastic nightlife and dining, choose Kazimierz (The Jewish Quarter). Podgórze, across the river, is an up-and-coming area with a more local feel. Hotel recommendations: Hotel Stary (Luxury), PURO Kraków Kazimierz (Modern), and Greg & Tom Beer House Hostel (Budget).",
        bestTimeToVisit: "The best times to visit are during the shoulder seasons of spring (April-June) and autumn (September-October). The weather is pleasant for walking, and the city is less crowded than in summer. Summer (July-August) is warm and vibrant but also peak tourist season. Winter can be very cold, but the Christmas markets in December create a magical atmosphere.",
        suggestedItinerary: "Day 1: Explore the Old Town. Start at the Main Market Square, visit St. Mary's Basilica, the Cloth Hall, and the Rynek Underground Museum. Walk the Planty Park and see the Barbican. Day 2: Morning at Wawel Royal Castle and Cathedral. Afternoon exploring Kazimierz, its synagogues, and streets. Evening enjoying the district's food and bars. Day 3: Full-day trip to Auschwitz-Birkenau Memorial and Museum, or a half-day trip to the Wieliczka Salt Mine, followed by a visit to Schindler's Factory Museum in the afternoon."
      }}
      faqs={[{
          question: "Is Krakow expensive?",
          answer: "Compared to major Western European cities, Krakow is very affordable. A meal at a traditional 'milk bar' (bar mleczny) can cost as little as $5-7 USD, while a three-course meal at a mid-range restaurant is typically $20-30 USD per person. Public transport is cheap, and many attractions are free or have low admission fees. Accommodation offers great value across all budget levels."
        },
        {
          question: "How many days do you need in Krakow?",
          answer: "A minimum of three full days is recommended. This allows one day for the Old Town and its attractions, one day for Wawel Castle and Kazimierz, and a third day for a trip to Auschwitz-Birkenau or the Wieliczka Salt Mine. If you wish to visit both Auschwitz and the Salt Mine without rushing, plan for four days."
        },
        {
          question: "Is Krakow safe?",
          answer: "Krakow is generally a very safe city for tourists. The main tourist areas like the Old Town and Kazimierz are well-policed and busy. Standard precautions should be taken, such as being aware of your surroundings and watching out for pickpockets in crowded places, especially on public transport and at the Main Market Square. Overall, visitors can feel very secure exploring the city day and night."
        },
        {
          question: "What is Krakow famous for?",
          answer: "Krakow is famous for its exceptionally well-preserved medieval core, the Stare Miasto (Old Town), which is a UNESCO World Heritage site. It's known for Wawel Royal Castle, the historic seat of Polish kings; the Main Market Square, one of Europe's largest; and its rich Jewish heritage centered in the Kazimierz district. It is also a crucial base for visiting the nearby Auschwitz-Birkenau Memorial and Museum and the Wieliczka Salt Mine."
        }
      ]}
    />
  );
};