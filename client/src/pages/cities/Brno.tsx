import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Brno: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Brno, Czech Republic (2025 Guide)"}
      description={"Often overshadowed by Prague, Brno is the Czech Republic's vibrant, youthful, and effortlessly cool second city. As the capital of Moravia, it boasts a rich history evident in its grand squares and hilltop castle, yet it pulses with a modern energy fueled by its massive student population. This is a city of hidden passages, world-class functionalist architecture, a legendary bar scene, and a quirky character all its own. From exploring eerie underground ossuaries to sipping coffee in stylish cafes, you'll find that discovering the best things to do in Brno reveals a destination that is both historically profound and refreshingly authentic. Forget the crowds and embrace the charm of this dynamic cultural hub, where there's always something new to discover around every corner."}
      highlights={["Špilberk Castle",
        "Cathedral of St. Peter and Paul",
        "Villa Tugendhat",
        "Brno Ossuary at the Church of St. James",
        "Old Town Hall (Stará radnice)"]}
      galleryImages={[
        { url: "", alt: "Brno landmark 1", caption: "Brno landmark 1 - placeholder" },
        { url: "", alt: "Brno landmark 2", caption: "Brno landmark 2 - placeholder" },
        { url: "", alt: "Brno landmark 3", caption: "Brno landmark 3 - placeholder" },
        { url: "", alt: "Brno landmark 4", caption: "Brno landmark 4 - placeholder" },
        { url: "", alt: "Brno landmark 5", caption: "Brno landmark 5 - placeholder" },
        { url: "", alt: "Brno landmark 6", caption: "Brno landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Špilberk Castle",
        description: "Dominating the Brno skyline from its hilltop perch, Špilberk Castle is the city's most prominent landmark. Originally a royal castle from the 13th century, it was later converted into a formidable Baroque fortress and then a notoriously harsh prison, dubbed the 'Prison of the Nations'. Today, it houses the Brno City Museum.\n\nVisitors can explore the infamous casemates (underground prison corridors), climb the lookout tower for panoramic views of the city, and wander through various museum exhibitions detailing the castle's and city's history. The surrounding park is a beautiful spot for a relaxing walk.",
        practicalInfo: {
        howToGetThere: "Located on Špilberk hill, a 15-minute walk uphill from the city center. Tram stop 'Šilingrovo náměstí' is the closest.",
        openingHours: "Daily 10:00 AM - 6:00 PM (April-September); Tuesday-Sunday 9:00 AM - 5:00 PM (October-March). Hours can vary for different exhibitions.",
        cost: "Varies by tour. Combined tickets approx. 300-400 CZK for adults.",
        website: "https://www.spilberk.cz/en/"
      }
      },
        {
        name: "Cathedral of St. Peter and Paul",
        description: "Another iconic feature of the Brno skyline, the Cathedral of St. Peter and Paul sits atop Petrov hill. Its distinctive twin spires are a symbol of the city. The cathedral has a fascinating legend: during the Thirty Years' War, the Swedish army promised to call off their siege if they hadn't conquered the city by noon. The clever bell ringer rang the noon bells an hour early at 11 AM, fooling the Swedes into retreating.\n\nTo this day, the cathedral's bells chime for noon at 11 o'clock. Visitors can admire the stunning Baroque interior, explore the crypt, and climb one of the towers for a breathtaking view of the city center and Špilberk Castle.",
        practicalInfo: {
        howToGetThere: "A short, steep walk from the city center, near Zelný trh.",
        openingHours: "Generally open daily 8:15 AM - 6:30 PM. Tower has more limited hours, typically 10:00 AM - 6:00 PM.",
        cost: "Free entry to the cathedral; a small fee (approx. 60 CZK) to climb the tower.",
        website: "https://www.katedrala-petrov.cz/"
      }
      },
        {
        name: "Villa Tugendhat",
        description: "A must-see for architecture and design enthusiasts, Villa Tugendhat is a masterpiece of the functionalist style and a UNESCO World Heritage site. Designed by Ludwig Mies van der Rohe in 1930, it was revolutionary for its time, featuring an open-plan living space, floor-to-ceiling windows, and innovative technologies like air conditioning.\n\nThe villa's history is as compelling as its design, having been confiscated from its Jewish owners, used by the Gestapo, and later serving as the site where the leaders of Czechoslovakia signed the document that dissolved the nation in 1992. It has been meticulously restored to its original glory.",
        practicalInfo: {
        howToGetThere: "Located in the Černá Pole district. Take tram 9 or 11 to 'Tomanova'.",
        openingHours: "Tuesday-Sunday, 10:00 AM - 6:00 PM. Tours are at specific times.",
        cost: "Tours range from 350-400 CZK. Booking is essential, often months in advance.",
        website: "https://www.tugendhat.eu/en/"
      }
      },
        {
        name: "Brno Ossuary at the Church of St. James",
        description: "Discovered by accident during construction work in 2001, the Brno Ossuary is the second-largest in Europe, after the Paris Catacombs. It is estimated to hold the remains of over 50,000 people, victims of plagues, cholera, and wars. The bones and skulls have been artfully arranged in a solemn, respectful, and slightly eerie underground exhibition.\n\nThe atmosphere is somber and reflective, enhanced by specially composed music. It offers a unique and moving glimpse into the city's medieval past and the fragility of life. It's a powerful experience quite different from other historical sites.",
        practicalInfo: {
        howToGetThere: "Located at Jakubské náměstí (St. James Square) in the city center.",
        openingHours: "Tuesday-Sunday, 9:30 AM - 6:00 PM.",
        cost: "Approx. 140 CZK for adults.",
        website: "https://ticbrno.cz/en/underground/ossuary-at-the-church-of-st-james"
      }
      },
        {
        name: "Old Town Hall (Stará radnice)",
        description: "The oldest secular building in Brno, the Old Town Hall is famous for its collection of local legends. Look up at the main portal to see the 'crooked pinnacle', deliberately bent by its creator, Anton Pilgram, after the city council refused to pay him the agreed price. Inside the main passage, you'll find two of Brno's most famous symbols: the Brno Dragon (actually a stuffed crocodile) and a wooden wagon wheel.\n\nFor a fantastic view, climb the 63-meter-high tower. The climb is rewarded with a stunning 360-degree perspective of the historic city center, making it a favorite spot for photographers.",
        practicalInfo: {
        howToGetThere: "Centrally located on Radnická street, just off Zelný trh.",
        openingHours: "Tower open daily April-October, 10:00 AM - 10:00 PM. Passage is freely accessible.",
        cost: "Free to see the dragon and wheel. A small fee (approx. 75 CZK) to climb the tower.",
        website: "https://www.gotobrno.cz/en/place/old-town-hall-stara-radnice/"
      }
      },
        {
        name: "Liberty Square (Náměstí Svobody)",
        description: "This is Brno's main and largest square, a bustling hub of activity surrounded by grand buildings, shops, and cafes. It has been the city's central point since the 13th century. The square's most talked-about feature is the controversial astronomical clock, a large black marble monument shaped like a bullet cartridge. Every day at 11:00 AM, it releases a glass marble, which locals and tourists try to catch from one of its four openings.\n\nThe square also hosts seasonal markets, including the famous Christmas markets, concerts, and public events, making it a lively place to visit at any time of year.",
        practicalInfo: {
        howToGetThere: "In the heart of the pedestrian zone in the city center.",
        openingHours: "24/7",
        cost: "Free",
        website: "https://www.gotobrno.cz/en/place/namesti-svobody-liberty-square/"
      }
      },
        {
        name: "Moravian Karst and Punkva Caves",
        description: "For a stunning natural escape, head just north of Brno to the Moravian Karst, one of Central Europe's most important karst areas. This protected nature reserve features over 1,100 caverns and gorges. The highlight is a tour of the Punkva Caves, which includes a walk through enormous stalactite and stalagmite-filled chambers and a visit to the bottom of the spectacular Macocha Abyss, a 138-meter-deep gorge.\n\nThe tour culminates in a magical underground boat ride along the subterranean Punkva River. It's a popular day trip and offers a complete change of scenery from the urban environment.",
        practicalInfo: {
        howToGetThere: "By car (45 min) or by train to Blansko, then a local bus. Organized tours are available from Brno.",
        openingHours: "Varies by season, generally 8:20 AM - 4:00 PM. Booking tickets in advance is highly recommended.",
        cost: "Approx. 350 CZK for the full tour.",
        website: "https://www.moravskykras.net/punkva-caves.html"
      }
      },
        {
        name: "Capuchin Crypt (Kapucínská hrobka)",
        description: "Beneath the Capuchin Monastery lies one of Brno's more macabre attractions. The unique geological composition of the ground and a system of air vents in the crypt created conditions that naturally mummified the bodies of Capuchin friars and their benefactors buried here in the 17th and 18th centuries.\n\nThe crypt displays these mummified remains in open coffins, offering a stark and sobering reminder of the Baroque motto 'memento mori' – remember you must die. It is a quiet and humbling place that provides a fascinating insight into the order's burial rituals and beliefs.",
        practicalInfo: {
        howToGetThere: "Located at Kapucínské náměstí, a short walk from the main train station.",
        openingHours: "Monday-Saturday 9:00 AM - 12:00 PM & 1:00 PM - 4:30 PM; Sunday 11:00 AM - 4:30 PM. Hours can change.",
        cost: "Approx. 80 CZK.",
        website: "https://hrobka.kapucini.cz/en"
      }
      },
        {
        name: "10-Z Bunker",
        description: "The 10-Z Bunker is a Cold War-era nuclear fallout shelter built into the side of Špilberk hill, designed to protect the city's political elite. Declassified in 1993, it has been preserved as a time capsule of the era and transformed into a unique museum and retro hotel. Visitors can take a guided tour to see the technical equipment, sleeping quarters, and command center, all left as they were.\n\nFor a truly unique experience, you can even spend the night in one of the original rooms. It's a fascinating and slightly chilling look into the paranoia of the Cold War period.",
        practicalInfo: {
        howToGetThere: "On Husova street, beneath Špilberk hill. A 10-minute walk from the city center.",
        openingHours: "Wednesday-Sunday, 11:30 AM - 6:15 PM. Check website for tour times.",
        cost: "Approx. 280 CZK for a tour.",
        website: "https://10-z.cz/en/"
      }
      },
        {
        name: "Moravian Gallery in Brno",
        description: "The Moravian Gallery is the second largest art museum in the Czech Republic, spread across several architecturally significant buildings in Brno. The main buildings are the Pražák Palace, showcasing Czech modern and contemporary art, and the Museum of Applied Arts, which features a stunning collection of design, from glass and ceramics to furniture and photography.\n\nThe Governor's Palace focuses on older art from the Gothic period to the 19th century. A single ticket provides access to all permanent exhibitions, making it a fantastic value for art lovers looking to spend a day immersed in culture.",
        practicalInfo: {
        howToGetThere: "The main buildings are located in the city center, within walking distance of each other.",
        openingHours: "Wednesday-Sunday 10:00 AM - 6:00 PM (until 7 PM on Thursdays). Closed Monday & Tuesday.",
        cost: "A single ticket for all permanent exhibitions is approx. 220 CZK.",
        website: "https://www.moravska-galerie.cz/en/"
      }
      },
        {
        name: "Zelný trh (Cabbage Market)",
        description: "Zelný trh has been Brno's most vibrant market square for centuries. Every day (except Sunday in winter), the square is filled with stalls selling fresh fruits, vegetables, flowers, and local products. It's a fantastic place to soak up the local atmosphere and grab a healthy snack. The square is dominated by the ornate 17th-century Parnas Fountain.\n\nBeneath the market lies the Labyrinth under Zelný trh, a network of medieval cellars and corridors. A guided tour takes you through these underground passages, which were once used for storing food, maturing wine, and as a refuge during wartime.",
        practicalInfo: {
        howToGetThere: "A main square in the city center, between Petrov hill and Liberty Square.",
        openingHours: "Market: Mon-Sat, approx. 7 AM - 4 PM. Labyrinth: Tue-Sun 9 AM - 6 PM.",
        cost: "Market is free to browse. Labyrinth tour is approx. 180 CZK.",
        website: "https://ticbrno.cz/en/underground/labyrinth-under-the-vegetable-market"
      }
      },
        {
        name: "VIDA! Science Centre",
        description: "Perfect for families or anyone with a curious mind, the VIDA! Science Centre is a large, modern interactive museum with over 180 exhibits. Housed in a former pavilion of the Brno Exhibition Centre, it's designed to explain scientific principles in a fun and hands-on way. Visitors are encouraged to touch, play, and experiment with everything.\n\nThe center is divided into themed sections covering the Planet, Civilization, the Human Body, and a special area for young children. It's an engaging and educational way to spend a few hours, especially on a rainy day.",
        practicalInfo: {
        howToGetThere: "Located at the Brno Exhibition Centre. Take tram 1 from the main station to 'Výstaviště - hlavní vstup'.",
        openingHours: "Daily 10:00 AM - 6:00 PM (weekends); Mon-Fri 9:00 AM - 6:00 PM (weekdays).",
        cost: "Approx. 290 CZK for an adult day ticket.",
        website: "https://vida.cz/en/"
      }
      },
        {
        name: "Brno Observatory and Planetarium",
        description: "Situated on top of Kraví hora ('Cow's Hill'), the Brno Observatory and Planetarium is a futuristic building offering a journey to the stars. It features a state-of-the-art digital planetarium (the 'Digistar') that projects breathtaking shows about the universe onto its dome. There is also an 'exploratorium' with interactive science exhibits and telescopes for public viewings (weather permitting).\n\nThe surrounding park offers some of the best views of the city, especially at sunset. It's a great spot for both education and relaxation.",
        practicalInfo: {
        howToGetThere: "Take tram 4 to 'Náměstí Míru' and walk up the hill.",
        openingHours: "Show times and opening hours vary greatly. Check the schedule on their website.",
        cost: "Varies by show, typically around 150-200 CZK.",
        website: "https://www.hvezdarna.cz/en/"
      }
      },
        {
        name: "Denis Gardens (Denisovy sady)",
        description: "Located on the slope of Petrov hill, just below the Cathedral of St. Peter and Paul, Denis Gardens is one of the oldest public parks in the Czech Republic. It was established in the early 19th century on the site of the former city fortifications. The park is impeccably maintained with beautiful flowerbeds, fountains, and pathways.\n\nIts main feature is the grand colonnade, an obelisk commemorating the end of the Napoleonic wars. The gardens offer a tranquil escape from the city bustle and provide stunning, romantic views over the southern part of Brno, making it a favorite spot for locals to relax.",
        practicalInfo: {
        howToGetThere: "Directly below the Cathedral of St. Peter and Paul, accessible from Husova street or Nádražní street.",
        openingHours: "24/7",
        cost: "Free",
        website: "https://www.gotobrno.cz/en/place/denis-gardens-denisovy-sady/"
      }
      },
        {
        name: "Brno Dam and Veveří Castle",
        description: "The Brno Dam (Brněnská přehrada) is a vast reservoir and popular recreational area located on the outskirts of the city. In the summer, it's a hub for swimming, paddleboarding, sailing, and cycling. A fleet of electric boats operates on the lake, offering scenic cruises.\n\nA popular boat destination is the majestic Veveří Castle, one of the oldest and largest castle complexes in Moravia, perched on a rocky promontory overlooking the water. You can explore the castle grounds and exhibitions or simply enjoy the view. The combination of nature, recreation, and history makes it a perfect full-day excursion from the city center.",
        practicalInfo: {
        howToGetThere: "Take tram 1 or 3 to 'Přístaviště' for the main boat dock. The castle is also accessible by car or bus 303.",
        openingHours: "Recreational area is open 24/7. Boat and castle hours are seasonal (mainly April-October).",
        cost: "Area is free. Boat trips and castle entrance have separate fees (approx. 200-300 CZK each).",
        website: "https://www.veveri.cz/en/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Brno is a very walkable city, with most major attractions located in the compact historical center. For longer distances, the city has an excellent and efficient public transport system of trams ('šaliny') and buses. Tickets can be purchased from orange machines at major stops, via SMS, or through the 'IDOS' mobile app. A 24-hour ticket is a great value for tourists.",
        whereToStay: "The best area to stay is in the city center (Brno-střed), which puts you within walking distance of almost all sights, restaurants, and bars. For luxury, consider the Barceló Brno Palace. Mid-range options like Hotel International Brno or Hotel Continental are excellent. For a budget-friendly and unique stay, try the 10-Z Bunker hostel.",
        bestTimeToVisit: "The best time to visit Brno is during the shoulder seasons of late spring (May-June) and early autumn (September-October). The weather is pleasant for walking, and the city is vibrant without the peak summer crowds. Summer (July-August) is lively with festivals but can be hot. Winter is cold but magical, with famous Christmas markets transforming the city squares.",
        suggestedItinerary: "Day 1: Explore the historic core. Start at Liberty Square, visit the Old Town Hall, browse Zelný trh market, and then descend into the Brno Ossuary. In the afternoon, walk up to the Cathedral of St. Peter and Paul and relax in Denis Gardens. Day 2: Castles and Modernism. Spend the morning at Špilberk Castle, exploring its casemates and museum. In the afternoon, take a pre-booked tour of the iconic Villa Tugendhat. Day 3: Underground & Nature. Choose between a tour of the 10-Z Bunker and Capuchin Crypt in the morning, or take a half-day trip to the Brno Dam to see Veveří Castle and enjoy the scenery."
      }}
      faqs={[{
          question: "Is Brno expensive?",
          answer: "Compared to many Western European cities and even Prague, Brno is quite affordable. Accommodation, public transport, and food are reasonably priced. You can enjoy a hearty meal with a local beer for under 250 CZK ($11 USD) and a 24-hour transport ticket costs around 120 CZK ($5 USD). While major attractions have entrance fees, many experiences, like exploring the squares and parks, are free."
        },
        {
          question: "How many days do you need in Brno?",
          answer: "Two to three days are ideal for exploring Brno itself. This gives you enough time to see the main historical sights, visit a museum or two, and experience the local cafe and bar culture. If you plan to take a day trip to the Moravian Karst caves or the vineyards of South Moravia, you should add an extra day to your itinerary."
        },
        {
          question: "Is Brno safe?",
          answer: "Brno is a very safe city, with low crime rates. The city center is well-lit and busy in the evenings. As in any city, it's wise to take standard precautions: be aware of your surroundings, watch out for pickpockets in crowded areas like public transport and market squares, and avoid leaving valuables unattended."
        },
        {
          question: "What is Brno famous for?",
          answer: "Brno is famous for several key things. It's a major hub of Czech Modernist and Functionalist architecture, epitomized by the UNESCO-listed Villa Tugendhat. It's known for its massive student population, which fuels a vibrant, creative, and liberal atmosphere with a legendary bar and café scene. Historically, it's known for Špilberk Castle and its legends, like the Brno Dragon and the 11 o'clock noon bells at the cathedral."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1665603627677-ee31baf6b1a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxCcm5vJTIwdHJhdmVsfGVufDB8MHx8fDE3NTIxNDAxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};