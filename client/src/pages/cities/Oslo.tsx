import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Oslo: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Oslo, Norway (2025 Guide)"}
      description={"Nestled between the Oslofjord and forested hills, Oslo is a unique European capital where urban life and stunning nature coexist in perfect harmony. The city is a hub of world-class museums, striking modern architecture, and innovative Nordic cuisine. From exploring its rich Viking heritage to walking on the roof of its magnificent Opera House, there's a captivating experience around every corner. Whether you're a history buff, an art aficionado, or an outdoor enthusiast, you'll find an incredible array of activities. This guide will walk you through all the best things to do in Oslo, ensuring your visit to this vibrant Scandinavian city is truly unforgettable. It’s a city that effortlessly blends the historic with the hyper-modern, creating a dynamic and welcoming atmosphere for every traveler."}
      imageUrl={""}
      highlights={["Vigeland Sculpture Park (Vigelandsparken)",
        "Oslo Opera House (Operahuset)",
        "Munch Museum (MUNCH)",
        "Akershus Fortress (Akershus Festning)",
        "Museum of the Viking Age (Vikingtidsmuseet)"]}
      galleryImages={[
        { url: "", alt: "Oslo landmark 1", caption: "Oslo landmark 1 - placeholder" },
        { url: "", alt: "Oslo landmark 2", caption: "Oslo landmark 2 - placeholder" },
        { url: "", alt: "Oslo landmark 3", caption: "Oslo landmark 3 - placeholder" },
        { url: "", alt: "Oslo landmark 4", caption: "Oslo landmark 4 - placeholder" },
        { url: "", alt: "Oslo landmark 5", caption: "Oslo landmark 5 - placeholder" },
        { url: "", alt: "Oslo landmark 6", caption: "Oslo landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Vigeland Sculpture Park (Vigelandsparken)",
        description: "The world's largest sculpture park made by a single artist, Vigeland Park is a breathtaking testament to the life's work of Gustav Vigeland. Located within Frogner Park, it features over 200 sculptures in bronze, granite, and wrought iron, all depicting the human form in various stages of life. The park's most iconic pieces include 'The Angry Boy' (Sinnataggen), 'The Monolith' (Monolitten), and 'The Wheel of Life' (Livshjulet).\n\nIt’s a place for quiet reflection and artistic appreciation, completely free to enter and open 24/7. Visitors can spend hours wandering the beautifully landscaped grounds, admiring the powerful and emotive sculptures that explore the full spectrum of human experience. It's not just a tourist attraction but a beloved local spot for picnics, strolls, and recreation.",
        practicalInfo: {
        howToGetThere: "Located in Frogner Park. Take tram 12 or bus 20 to 'Vigelandsparken'.",
        openingHours: "Open 24/7, all year round.",
        cost: "Free admission.",
        website: "https://www.visitoslo.com/en/product/?tlp=2983153"
      }
      },
        {
        name: "Oslo Opera House (Operahuset)",
        description: "Resembling a glacier sliding into the Oslofjord, the Oslo Opera House is a masterpiece of contemporary architecture. Designed by the Norwegian firm Snøhetta, its angled exterior of white Carrara marble and granite invites visitors to walk up its roof, offering panoramic views of the city and the fjord. This interactive design element makes it a public space as much as a cultural venue.\n\nInside, the building houses the Norwegian National Opera & Ballet. The main auditorium is a stunning space lined with oak, creating warm, world-class acoustics. Even if you don't catch a performance, exploring the building's exterior and magnificent lobby is a must-do experience in Oslo.",
        practicalInfo: {
        howToGetThere: "Located at Kirsten Flagstads Plass 1, a short walk from Oslo Central Station (Oslo S).",
        openingHours: "Foyer and roof are generally open daily. Check website for tour times and performance schedules.",
        cost: "Free to walk on the roof and explore the foyer. Ticket prices vary for performances and guided tours.",
        website: "https://www.operaen.no/en/"
      }
      },
        {
        name: "Munch Museum (MUNCH)",
        description: "Dedicated to the life and work of Norway's most famous artist, Edvard Munch, this state-of-the-art museum is an architectural landmark on the Oslo waterfront. The museum holds the world's largest collection of Munch's works, including multiple versions of his iconic masterpiece, 'The Scream'. Spread across 13 floors, the exhibits offer a deep dive into Munch's artistic journey, exploring themes of love, anxiety, and death.\n\nThe museum's dynamic exhibitions also place Munch in conversation with other modern and contemporary artists, providing fresh perspectives on his enduring influence. The top-floor bar offers spectacular views of the city, making it a perfect spot to reflect on the powerful art.",
        practicalInfo: {
        howToGetThere: "Located at Edvard Munchs plass 1 in Bjørvika, near the Opera House.",
        openingHours: "Typically 10:00 - 18:00 or later. Check the official website for exact hours.",
        cost: "Adults approx. 160 NOK. Discounts available. Included in the Oslo Pass.",
        website: "https://www.munchmuseet.no/en/"
      }
      },
        {
        name: "Akershus Fortress (Akershus Festning)",
        description: "With a history stretching back to 1299, Akershus Fortress is a medieval castle that has served as a royal residence, a military base, and a prison. Perched on a headland overlooking the harbor, it offers a fascinating journey through Norwegian history. Visitors can explore the ramparts, dungeons, and stately halls, including the chapel where several Norwegian monarchs are buried.\n\nThe fortress grounds are a beautiful public park with fantastic views of Aker Brygge and the Oslofjord. The complex also houses the Norwegian Armed Forces Museum and Norway's Resistance Museum, providing deeper insights into the nation's military history and its role during WWII.",
        practicalInfo: {
        howToGetThere: "A short walk from the city center, located at Festningsplassen 1.",
        openingHours: "Fortress grounds: 06:00 - 21:00 daily. Castle and museums have separate, shorter hours.",
        cost: "Free to enter the grounds. Admission fee for the castle and museums (included in Oslo Pass).",
        website: "https://www.visitoslo.com/en/product/?tlp=2994473"
      }
      },
        {
        name: "Museum of the Viking Age (Vikingtidsmuseet)",
        description: "The former Viking Ship Museum is currently closed and is being transformed into the much larger Museum of the Viking Age, set to open in 2026/2027. This new, world-class museum will house the world's best-preserved Viking ships—the Oseberg, Gokstad, and Tune ships—along with countless other artifacts from the Viking era, providing an unparalleled look into the lives, culture, and craftsmanship of the Norse people.\n\nWhile awaiting the grand opening, visitors can still immerse themselves in Viking history at the Historical Museum in the city center, which displays many incredible artifacts from the Viking Age. The future museum promises an immersive experience, making it a top future destination for anyone fascinated by this legendary period.",
        practicalInfo: {
        howToGetThere: "Located on the Bygdøy peninsula. The future museum is at Huk Aveny 35. Take bus 30 to 'Vikingskipshuset'.",
        openingHours: "Currently closed for rebuilding. Check the official website for updates on the 2026/2027 opening.",
        cost: "Pricing to be announced upon opening.",
        website: "https://www.khm.uio.no/english/visit-us/museum-of-the-viking-age/"
      }
      },
        {
        name: "Fram Museum - The Polar Ship Fram",
        description: "Step aboard the world's strongest wooden ship at the Fram Museum. This museum is dedicated to the history of Norwegian polar exploration and centers around the original exploration vessel, Fram. The ship was used on three groundbreaking expeditions by explorers Fridtjof Nansen, Otto Sverdrup, and Roald Amundsen. Visitors can go inside the ship and see how the crew lived and worked in the harsh polar conditions.\n\nThe museum features interactive exhibits, a polar simulator, and fascinating stories of courage and discovery in the Arctic and Antarctic. It's an immersive and educational experience that captures the spirit of adventure that defines Norwegian history.",
        practicalInfo: {
        howToGetThere: "On the Bygdøy peninsula. Take bus 30 to 'Bygdøynes' or the ferry from Rådhusbrygge 3 (summer only).",
        openingHours: "Varies by season, generally 10:00 - 18:00 in summer. Check website.",
        cost: "Adults approx. 140 NOK. Included in the Oslo Pass.",
        website: "https://frammuseum.no/"
      }
      },
        {
        name: "Kon-Tiki Museum",
        description: "Located right next to the Fram Museum, the Kon-Tiki Museum celebrates the life and expeditions of Norwegian adventurer Thor Heyerdahl. The main attraction is the original Kon-Tiki raft, a balsawood vessel that Heyerdahl and his crew sailed 8,000 km across the Pacific Ocean in 1947 to prove his theory of Polynesian migration from South America.\n\nThe museum also features the reed boat Ra II from his Atlantic expedition, as well as exhibits on his travels to Easter Island and other parts of the world. It’s a captivating story of daring and scientific curiosity, perfect for inspiring the adventurer in everyone.",
        practicalInfo: {
        howToGetThere: "On the Bygdøy peninsula, adjacent to the Fram Museum. Bus 30 or the summer ferry.",
        openingHours: "Varies by season, generally 10:00 - 18:00 in summer. Check website.",
        cost: "Adults approx. 140 NOK. Included in the Oslo Pass.",
        website: "https://www.kon-tiki.no/en/"
      }
      },
        {
        name: "Norwegian Museum of Cultural History (Norsk Folkemuseum)",
        description: "Experience Norwegian history and culture firsthand at this extensive open-air museum on the Bygdøy peninsula. The Norsk Folkemuseum features over 160 historic buildings relocated from all over Norway, from rural farmsteads to urban tenements. The highlight for many is the magnificent Gol Stave Church, dating from around 1200.\n\nDuring the summer, the museum comes alive with historical interpreters in period costumes, traditional craft demonstrations, and farm animals. The indoor exhibits showcase traditional costumes (bunad), folk art, and Sami culture, offering a comprehensive look at how Norwegians have lived through the centuries.",
        practicalInfo: {
        howToGetThere: "On the Bygdøy peninsula. Take bus 30 to 'Folkemuseet' or the summer ferry.",
        openingHours: "Varies by season, with longer hours in the summer. Check website.",
        cost: "Adults approx. 180 NOK in summer. Included in the Oslo Pass.",
        website: "https://norskfolkemuseum.no/en"
      }
      },
        {
        name: "Holmenkollen Ski Museum & Tower",
        description: "Towering over the city, the Holmenkollen ski jump is an icon of Oslo and a mecca for winter sports fans. It's one of the world's most modern ski jumps and has hosted international competitions for over a century. Inside the jump itself is the Ski Museum, the oldest of its kind in the world, which traces 4,000 years of skiing history.\n\nThe highlight is taking the elevator to the top of the jump tower. From the observation deck, you are rewarded with arguably the best panoramic view of Oslo, the fjord, and the surrounding forests. For thrill-seekers, a zip line runs from the top of the jump during the summer.",
        practicalInfo: {
        howToGetThere: "Take metro line 1 (T-bane) to 'Holmenkollen'. It's a steep but scenic 10-minute walk uphill from the station.",
        openingHours: "Varies by season, generally 10:00 - 17:00. Check website.",
        cost: "Adults approx. 160 NOK. Included in the Oslo Pass.",
        website: "https://www.skiforeningen.no/holmenkollen/"
      }
      },
        {
        name: "Aker Brygge & Tjuvholmen",
        description: "Once a shipyard, Aker Brygge is now a bustling, car-free waterfront promenade filled with restaurants, bars, shops, and apartments. It's a lively hub day and night, perfect for a meal with a view, an evening drink, or simply strolling along the fjord. The architecture is a mix of old industrial buildings and modern glass structures.\n\nAdjacent to Aker Brygge is the newer district of Tjuvholmen ('Thief Islet'), known for its striking contemporary architecture, high-end art galleries, and the Astrup Fearnley Museum. Tjuvholmen even has a small city beach, making it a popular spot for a swim on warm summer days.",
        practicalInfo: {
        howToGetThere: "A short walk from the city center, near the Nobel Peace Center and City Hall. Accessible by various trams and buses.",
        openingHours: "Shops and restaurants have individual hours; the area is always accessible.",
        cost: "Free to walk around.",
        website: "https://www.akerbrygge.no/en/"
      }
      },
        {
        name: "The Royal Palace (Det Kongelige Slott)",
        description: "Situated at the top of Karl Johans gate, Oslo's main street, the Royal Palace is the official residence of the current Norwegian monarch. Built in the first half of the 19th century, this grand neoclassical building is surrounded by the beautiful Palace Park (Slottsparken), a popular public space.\n\nWhile the palace is not generally open to the public, guided tours of the magnificent state rooms are available for a limited period during the summer. Year-round, visitors can watch the impressive changing of the guard ceremony, which takes place daily at 13:30. A stroll through the tranquil park is a lovely way to escape the city bustle.",
        practicalInfo: {
        howToGetThere: "At the end of Karl Johans gate. Take any T-bane line to 'Nationaltheatret'.",
        openingHours: "Park is open 24/7. Guided tours are in summer only (late June to mid-August), check website for tickets.",
        cost: "Free to see from the outside and walk in the park. Tours require a paid ticket.",
        website: "https://www.royalcourt.no/seksjon/110196/The-Royal-Palace"
      }
      },
        {
        name: "Nobel Peace Center",
        description: "Located in a former railway station overlooking the harbor, the Nobel Peace Center celebrates the Nobel Peace Prize, its laureates, and their work. The museum uses interactive technology, photography, and film to tell the stories of Alfred Nobel and the individuals and organizations who have fought for peace, dialogue, and human rights.\n\nThe most memorable exhibit is the 'Nobel Field', a garden of 1000 fiber-optic lights where each screen presents a different Peace Prize laureate. The center also hosts temporary exhibitions on topics related to war, peace, and conflict resolution, making it a thought-provoking and inspiring visit.",
        practicalInfo: {
        howToGetThere: "At Rådhusplassen, near Aker Brygge. Trams and buses to 'Aker Brygge' or 'Nationaltheatret'.",
        openingHours: "Typically 10:00 - 18:00. Closed on Mondays during the off-season. Check website.",
        cost: "Adults approx. 140 NOK. Included in the Oslo Pass.",
        website: "https://www.nobelpeacecenter.org/en/"
      }
      },
        {
        name: "Astrup Fearnley Museum of Modern Art",
        description: "An architectural marvel in its own right, the Astrup Fearnley Museum was designed by Renzo Piano and is located at the tip of the Tjuvholmen district. The building's curved glass roof resembles a ship's sail, perfectly complementing its waterfront location. The museum houses one of Norway's most important private collections of international contemporary art.\n\nThe collection includes significant works by artists like Jeff Koons, Damien Hirst, Cindy Sherman, and Anselm Kiefer. The exhibitions are dynamic and often challenging, offering a world-class survey of art from the 1960s to today. It's a must-see for modern art lovers.",
        practicalInfo: {
        howToGetThere: "Located at Strandpromenaden 2 on Tjuvholmen, at the end of Aker Brygge.",
        openingHours: "Tue-Sun, with varying hours. Closed on Mondays. Check website.",
        cost: "Adults approx. 150 NOK. Included in the Oslo Pass.",
        website: "https://www.afmuseet.no/en/"
      }
      },
        {
        name: "Grünerløkka",
        description: "Formerly a working-class district, Grünerløkka has transformed into Oslo's trendiest and most bohemian neighborhood. The area is characterized by its 19th-century apartment buildings, independent boutiques, vintage shops, cozy cafes, and vibrant street art. It's the perfect place to experience Oslo's creative and alternative side.\n\nWander along the Akerselva river, which runs through the neighborhood, and browse the weekend markets at Birkelunden. In the evenings, Grünerløkka comes alive with a diverse array of restaurants and bars, from microbreweries in the Mathallen Food Hall to intimate cocktail spots. It's a fantastic area to simply get lost and soak up the local atmosphere.",
        practicalInfo: {
        howToGetThere: "Take tram 11, 12, or 18 or bus 30 to 'Birkelunden' or 'Olaf Ryes plass'.",
        openingHours: "Shops and restaurants have individual hours; the area is always accessible.",
        cost: "Free to explore.",
        website: "https://www.visitoslo.com/en/articles/grunerlokka/"
      }
      },
        {
        name: "Oslo Fjord Cruise",
        description: "To truly appreciate Oslo's unique setting, you need to see it from the water. Taking a cruise on the Oslofjord offers a completely different perspective of the city and its surrounding nature. The fjord is dotted with small islands, many of which are popular recreational areas with beaches and walking trails.\n\nSeveral companies offer tours from the piers near City Hall, ranging from short 2-hour sightseeing trips on electric boats to evening shrimp buffet cruises on traditional wooden sailboats. It's a relaxing way to see landmarks like the Opera House, Akershus Fortress, and the museums on Bygdøy, all while enjoying the beautiful coastal scenery.",
        practicalInfo: {
        howToGetThere: "Tours depart from Rådhusbrygge (City Hall Pier), near Aker Brygge.",
        openingHours: "Multiple departures daily, especially in summer. Schedules vary by season and company.",
        cost: "Starts from approx. 400 NOK for a 2-hour tour. Prices vary widely.",
        website: "https://www.visitoslo.com/en/activities-and-attractions/tours/fjord-tours/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Oslo has a superb public transport system called Ruter, which includes trams, buses, the metro (T-bane), and local ferries. A single ticket covers all modes of transport within a zone. It's most economical to buy a 24-hour or 7-day pass via the Ruter app or at kiosks. The city center is very walkable, and electric scooters and city bikes are widely available. The Oslo Pass includes free public transport and entry to many museums.",
        whereToStay: "For first-time visitors, Sentrum (city center) around Karl Johans gate is ideal for its proximity to major sights and transport hubs. Grünerløkka is the best area for a hip, bohemian vibe with great cafes and nightlife. Aker Brygge and Tjuvholmen offer modern, upscale hotels with fjord views. Majorstuen is a chic residential and shopping district. Hotel recommendations: The Thief (Luxury), Clarion Hotel The Hub (Mid-Range), Citybox Oslo (Budget).",
        bestTimeToVisit: "Summer (June-August) is the most popular time, with long, sunny days, pleasant temperatures (15-25°C), and a lively atmosphere. This is the best time for fjord activities and island hopping. Spring (May) and early Autumn (September) are fantastic shoulder seasons with fewer crowds, mild weather, and beautiful foliage. Winter (November-March) is cold and dark but offers a magical atmosphere with snow, cozy cafes, and Christmas markets.",
        suggestedItinerary: "Day 1: Explore the city center. Walk Karl Johans gate to the Royal Palace, visit Akershus Fortress, and the Nobel Peace Center. In the afternoon, explore the modern architecture of the Opera House and the Munch Museum in Bjørvika. \nDay 2: Museum day on the Bygdøy peninsula. Take the bus or ferry to visit the Fram Museum, Kon-Tiki Museum, and the Norwegian Museum of Cultural History. \nDay 3: Art and Nature. Start the morning at Vigeland Sculpture Park. In the afternoon, take the metro up to Holmenkollen Ski Jump for incredible views, or spend the time exploring the trendy shops and cafes of Grünerløkka."
      }}
      faqs={[{
          question: "Is Oslo expensive?",
          answer: "Yes, Oslo is widely regarded as one of the most expensive cities in the world. Accommodation, dining out, and alcohol are particularly pricey. A restaurant meal can cost 250-400 NOK, and a beer can be 90-120 NOK. To save money, consider buying the Oslo Pass for free transport and museum entry, utilize supermarkets for some meals, and look for accommodation with kitchen facilities. Tap water is excellent and free."
        },
        {
          question: "How many days do you need in Oslo?",
          answer: "Three full days is the ideal amount of time to experience Oslo's main highlights without feeling rushed. This allows you to dedicate one day to the city center and waterfront, another to the museums on the Bygdøy peninsula, and a third to explore areas like Vigeland Park, Holmenkollen, or Grünerløkka. With 4-5 days, you can explore more neighborhoods and even take a day trip into the surrounding nature."
        },
        {
          question: "Is Oslo safe?",
          answer: "Oslo is a very safe city with a low rate of violent crime. It's safe to walk around at any time of day or night in most areas. However, like in any major city, you should take standard precautions against petty crime. Be mindful of your belongings in crowded tourist areas, on public transport, and at Oslo Central Station. Emergency services can be reached by dialing 112."
        },
        {
          question: "What is Oslo famous for?",
          answer: "Oslo is famous for its unique combination of vibrant city life and accessible nature. Key highlights include its rich seafaring history, from the Vikings (Viking Ship Museum) to polar explorers (Fram Museum). It is globally known as the home of the Nobel Peace Prize and the artist Edvard Munch. Architecturally, it's famous for striking modern buildings like the Opera House and the Munch Museum, set against the stunning backdrop of the Oslofjord and surrounding forests (Marka)."
        }
      ]}
    />
  );
};