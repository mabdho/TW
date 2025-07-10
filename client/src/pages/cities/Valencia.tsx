import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Valencia: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Valencia, Spain (2025 Guide)"}
      description={"Valencia, Spain's vibrant third-largest city, effortlessly blends futuristic innovation with rich history on the sun-drenched Mediterranean coast. It's a city of contrasts, where the Gothic spires of the old town stand in dialogue with the sweeping, space-age curves of the City of Arts and Sciences. A former riverbed has been transformed into a sunken green park that meanders through the city, connecting diverse neighborhoods. Famous as the birthplace of paella and home to the raucous Las Fallas festival, Valencia offers a feast for the senses. Whether you're exploring ancient markets, relaxing on golden beaches, or cycling through lush gardens, you'll find an incredible array of experiences. This guide will walk you through all the best things to do in Valencia, ensuring an unforgettable Spanish adventure."}
      imageUrl={""}
      highlights={["City of Arts and Sciences (Ciutat de les Arts i les Ciències)",
        "Valencia Cathedral (Catedral de València)",
        "Mercado Central (Central Market)",
        "Turia Gardens (Jardí del Túria)",
        "La Lonja de la Seda (Silk Exchange)"]}
      galleryImages={[
        { url: "", alt: "Valencia landmark 1", caption: "Valencia landmark 1 - placeholder" },
        { url: "", alt: "Valencia landmark 2", caption: "Valencia landmark 2 - placeholder" },
        { url: "", alt: "Valencia landmark 3", caption: "Valencia landmark 3 - placeholder" },
        { url: "", alt: "Valencia landmark 4", caption: "Valencia landmark 4 - placeholder" },
        { url: "", alt: "Valencia landmark 5", caption: "Valencia landmark 5 - placeholder" },
        { url: "", alt: "Valencia landmark 6", caption: "Valencia landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "City of Arts and Sciences (Ciutat de les Arts i les Ciències)",
        description: "An architectural masterpiece that seems plucked from the future, the City of Arts and Sciences is Valencia's most iconic modern landmark. Designed by Santiago Calatrava and Félix Candela, this sprawling complex is set within the Turia Gardens and features several stunning buildings, including an opera house (Palau de les Arts Reina Sofía), a science museum (Museu de les Ciències Príncipe Felipe), and an IMAX cinema (L'Hemisfèric). \n\nThe gleaming white structures are surrounded by brilliant turquoise pools, creating a breathtaking visual spectacle. You can spend a full day exploring the different venues or simply wander the grounds, admiring the architecture and taking photos. It's a symbol of Valencia's forward-thinking spirit and a must-see for any visitor.",
        practicalInfo: {
        howToGetThere: "Located at the southeastern end of the Turia Gardens. Accessible via numerous bus lines (e.g., 95, 35) or a pleasant walk/bike ride through the park.",
        openingHours: "Grounds are open 24/7. Individual building hours vary, generally 10:00 AM - 7:00 PM.",
        cost: "Free to walk around the exterior. Tickets are required for individual buildings, with combined tickets available. Prices range from €8 to €38.",
        website: "https://www.cac.es/"
      }
      },
        {
        name: "L'Oceanogràfic",
        description: "Located within the City of Arts and Sciences complex, L'Oceanogràfic is the largest aquarium in Europe. It's home to over 45,000 animals from 500 different species, representing the world's main marine ecosystems. The park is divided into several zones, including the Mediterranean, Wetlands, Temperate and Tropical Seas, Oceans, and the Arctic and Antarctic.\n\nHighlights include the spectacular underwater tunnel where sharks and rays glide overhead, the charming beluga whales, and the impressive dolphinarium, which hosts daily educational shows. The unique, water-lily-shaped architecture by Félix Candela adds to the immersive experience, making it a fantastic destination for families and wildlife enthusiasts.",
        practicalInfo: {
        howToGetThere: "Part of the City of Arts and Sciences complex. Use bus lines 95 or 15.",
        openingHours: "Generally 10:00 AM - 6:00 PM, with extended hours in summer.",
        cost: "Adults approx. €35. Concessions available. Often sold as a combo ticket with other CAC attractions.",
        website: "https://www.oceanografic.org/"
      }
      },
        {
        name: "Valencia Cathedral (Catedral de València)",
        description: "A stunning mix of Gothic, Romanesque, and Baroque architectural styles, Valencia Cathedral is the spiritual heart of the city. Consecrated in 1238, it's most famous for being the reputed home of the Holy Grail, the chalice from which Jesus is said to have drunk at the Last Supper. The Chapel of the Holy Grail displays the revered relic for pilgrims and curious visitors alike.\n\nInside, you can admire beautiful frescoes by Renaissance artists and explore the cathedral museum. Don't miss the opportunity to climb the 207 steps of the Miguelete bell tower for panoramic views of the entire city, from the historic rooftops to the distant Mediterranean Sea.",
        practicalInfo: {
        howToGetThere: "Located in Plaça de la Reina in the heart of the Old Town (Ciutat Vella). Easily walkable from most central locations.",
        openingHours: "Monday-Saturday: 10:30 AM - 6:30 PM; Sunday: 2:00 PM - 6:30 PM. Hours may vary.",
        cost: "Cathedral entrance approx. €9 (includes audio guide). A separate ticket is required for the Miguelete Tower (approx. €2.50).",
        website: "https://catedraldevalencia.es/"
      }
      },
        {
        name: "La Lonja de la Seda (Silk Exchange)",
        description: "A testament to Valencia's golden age, La Lonja de la Seda is a masterpiece of late Valencian Gothic architecture and a UNESCO World Heritage site. Built between 1482 and 1533, this was the city's commercial hub where silk and other commodities were traded. It was designed to be a temple to commerce, reflecting the wealth and power of 15th-century Valencia.\n\nThe main hall, the Sala de Contratación, is breathtaking. Its soaring, twisted columns fan out like palm trees to support the vaulted ceiling. The intricate details, from the gargoyles on the exterior to the Latin inscription proclaiming the honesty of its merchants, make this a fascinating glimpse into Valencia's mercantile past.",
        practicalInfo: {
        howToGetThere: "In the Old Town, directly opposite the Mercado Central.",
        openingHours: "Monday-Saturday: 10:00 AM - 7:00 PM; Sunday: 10:00 AM - 2:00 PM.",
        cost: "Approx. €2. Free on Sundays and public holidays.",
        website: "https://www.visitvalencia.com/en/what-to-see-valencia/la-lonja-de-la-seda-silk-exchange"
      }
      },
        {
        name: "Mercado Central (Central Market)",
        description: "A feast for the senses, the Mercado Central is one of Europe's oldest and most beautiful food markets. Housed in a stunning Art Nouveau building from 1928, it features intricate ironwork, colorful ceramic tiles (azulejos), and a magnificent stained-glass dome. The market is a bustling hub of daily life for Valencians.\n\nWander through over 400 stalls selling an incredible variety of fresh produce, cured meats, cheeses, seafood, spices, and local specialties. Grab a fresh orange juice, sample some Iberian ham, or buy ingredients for a picnic. The vibrant atmosphere, incredible architecture, and delicious aromas make it an essential Valencian experience.",
        practicalInfo: {
        howToGetThere: "Centrally located in the Old Town, opposite La Lonja de la Seda.",
        openingHours: "Monday-Saturday: 7:30 AM - 3:00 PM. Closed on Sundays.",
        cost: "Free to enter.",
        website: "https://www.mercadocentralvalencia.es/"
      }
      },
        {
        name: "Turia Gardens (Jardí del Túria)",
        description: "One of Spain's largest urban parks, the Turia Gardens is the green soul of Valencia. This lush, 9-kilometer-long park was created in the former riverbed of the Turia River after it was diverted to prevent catastrophic floods. The result is a sunken oasis that snakes through the city, offering a unique recreational space below street level.\n\nThe park is a haven for joggers, cyclists, families, and anyone looking for a peaceful escape. It's dotted with fountains, sports facilities, playgrounds (including the giant Gulliver's Park), and beautifully landscaped areas. It conveniently connects the Bioparc at one end with the City of Arts and Sciences at the other, making it the perfect green highway for exploring the city.",
        practicalInfo: {
        howToGetThere: "Accessible from numerous points along its 9km stretch. Cross any of the bridges in the city center to descend into the park.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.visitvalencia.com/en/what-to-see-valencia/turia-gardens"
      }
      },
        {
        name: "Barrio del Carmen",
        description: "The heart of Valencia's Old Town, Barrio del Carmen is a vibrant, bohemian neighborhood with a history stretching back over a thousand years. Its labyrinthine streets, once enclosed by medieval walls, are now a canvas for colorful street art and home to countless tapas bars, independent boutiques, and quirky cafes.\n\nBy day, explore historic sites like the Torres de Serranos and Torres de Quart, the ancient city gates. As evening falls, the district comes alive. Follow the sound of chatter to Plaça del Tossal or Plaça del Negret, find a cozy spot for some Agua de Valencia (the local cocktail), and soak up the lively, creative atmosphere. Getting lost in its charming alleyways is part of the fun.",
        practicalInfo: {
        howToGetThere: "The northwestern part of the Ciutat Vella (Old Town). Easily explored on foot.",
        openingHours: "The neighborhood is always accessible; individual shop and restaurant hours vary.",
        cost: "Free to wander.",
        website: "https://www.visitvalencia.com/en/what-to-do-valencia/valencia-s-neighbourhoods/el-carmen-valencia"
      }
      },
        {
        name: "Torres de Serranos",
        description: "One of the twelve gates that once stood along the old medieval city wall, the Torres de Serranos is a formidable and beautifully preserved example of 14th-century Gothic military architecture. For centuries, it served as the main entrance to the city from the north and was also used as a prison for nobles. Today, it stands as a powerful symbol of Valencia's history.\n\nYou can climb to the top of the towers for a small fee. The ascent provides an excellent perspective on the structure's scale and offers fantastic views over the Old Town on one side and the Turia Gardens on the other. It's a great spot to orient yourself and appreciate the city's layout.",
        practicalInfo: {
        howToGetThere: "Located at the edge of Barrio del Carmen, overlooking the Turia Gardens.",
        openingHours: "Tuesday-Saturday: 10:00 AM - 7:00 PM; Sunday: 10:00 AM - 2:00 PM. Closed Mondays.",
        cost: "Approx. €2. Free on Sundays and public holidays.",
        website: "https://www.visitvalencia.com/en/what-to-see-valencia/serranos-towers"
      }
      },
        {
        name: "Malvarrosa Beach (Playa de la Malvarrosa)",
        description: "Valencia's main city beach, Playa de la Malvarrosa, is a wide expanse of fine golden sand stretching along the Mediterranean. It's a popular spot for both locals and tourists to sunbathe, swim, and enjoy water sports. The beach is well-equipped with showers, lifeguard stations, and volleyball nets.\n\nThe long, palm-lined promenade (Paseo Marítimo) behind the beach is perfect for a stroll, run, or bike ride. It's also lined with a vast array of restaurants and bars, many of which specialize in paella and fresh seafood. It's the perfect place to enjoy a leisurely seaside lunch with your feet almost in the sand.",
        practicalInfo: {
        howToGetThere: "Accessible via bus lines 32 and 92, or by tram to La Cadena station.",
        openingHours: "Open 24/7.",
        cost: "Free. Sunbed and umbrella rentals are available for a fee.",
        website: "https://www.visitvalencia.com/en/what-to-see-valencia/valencia-s-beaches/malvarrosa-beach"
      }
      },
        {
        name: "Albufera Natural Park",
        description: "Just 10 kilometers south of the city lies the Albufera Natural Park, a vast freshwater lagoon and estuary that is one of the most important wetland areas in Spain. This tranquil landscape of rice paddies and reed beds is the true birthplace of paella, and the local rice is highly prized.\n\nThe park is a haven for birdwatchers, with hundreds of species of resident and migratory birds. The best way to experience Albufera is by taking a traditional boat trip on the lagoon, especially at sunset when the sky erupts in color. Afterward, visit the nearby village of El Palmar to sample an authentic paella at one of its many specialist restaurants.",
        practicalInfo: {
        howToGetThere: "Take the EMT bus line 24 or 25 from the city center. The journey takes about 40-60 minutes.",
        openingHours: "The park is always open. Boat trips and restaurants have their own schedules.",
        cost: "Park entry is free. Boat trips cost approx. €4-€6 per person.",
        website: "https://www.visitvalencia.com/en/what-to-see-valencia/albufera-natural-park"
      }
      },
        {
        name: "Bioparc Valencia",
        description: "Redefining the zoo experience, Bioparc Valencia is a 10-hectare park dedicated to African fauna. It utilizes a concept called 'zoo-immersion,' which removes visible barriers and recreates natural habitats to make visitors feel as though they are actually in Africa. The park is divided into distinct ecosystems: the Savannah, Equatorial Forest, and Madagascar.\n\nYou'll see gorillas, leopards, giraffes, lions, and rhinos roaming in thoughtfully designed, multi-species enclosures. The attention to detail is incredible, from the baobab trees to the rocky outcrops. It's an educational and ethical way to observe animals, making it a top attraction for all ages.",
        practicalInfo: {
        howToGetThere: "Located at the western end of the Turia Gardens. Accessible by bus (lines 98, 99) or metro (Nou d'Octubre stop).",
        openingHours: "Opens at 10:00 AM; closing times vary seasonally from 6:00 PM to 9:00 PM.",
        cost: "Adults approx. €26.90. Discounts for children and seniors.",
        website: "https://www.bioparcvalencia.es/"
      }
      },
        {
        name: "Palacio del Marqués de Dos Aguas (Ceramics Museum)",
        description: "Even if you don't go inside, the exterior of this palace is a must-see. The Palacio del Marqués de Dos Aguas features one of Spain's most stunning and extravagant Rococo facades. The alabaster entryway is a swirling masterpiece depicting the two rivers, Turia and Júcar, alongside the coat of arms of the Marquis.\n\nInside, the building houses the National Museum of Ceramics and Decorative Arts (Museo Nacional de Cerámica y Artes Suntuarias 'González Martí'). You can wander through opulent palace rooms and admire an extensive collection of ceramics, from prehistoric times to contemporary pieces by Picasso, with a special focus on the renowned local Valencian ceramics.",
        practicalInfo: {
        howToGetThere: "In the city center, a short walk from Plaça de la Reina.",
        openingHours: "Tuesday-Saturday: 10:00 AM - 2:00 PM & 4:00 PM - 8:00 PM; Sunday: 10:00 AM - 2:00 PM.",
        cost: "Approx. €3. Free on Saturdays after 4 PM and Sundays.",
        website: "https://www.culturaydeporte.gob.es/mnceramica/home.html"
      }
      },
        {
        name: "Museo de Bellas Artes (Museum of Fine Arts)",
        description: "Housing a vast collection of art primarily from the 14th to the 17th centuries, the Museo de Bellas Artes is Spain's second-largest art gallery. It is particularly renowned for its extensive collection of Valencian Masters, including works by Sorolla, Goya, and Velázquez. The museum is often called the 'Valencian Prado'.\n\nThe collection of medieval Gothic altarpieces is one of the finest in Europe. Housed in a beautiful 17th-century baroque building with a striking blue dome, the museum is a peaceful and culturally enriching place to spend a few hours, especially for those interested in classical Spanish art.",
        practicalInfo: {
        howToGetThere: "Located on the northern edge of the Turia Gardens, near the Jardines del Real.",
        openingHours: "Tuesday-Sunday: 10:00 AM - 8:00 PM. Closed Mondays.",
        cost: "Free admission.",
        website: "https://museobellasartesvalencia.gva.es/"
      }
      },
        {
        name: "Colón Market (Mercado de Colón)",
        description: "While the Mercado Central is for grocery shopping, the Mercado de Colón is for socializing. This former market, another gem of Valencian Art Nouveau architecture, was beautifully restored and transformed into a stylish gastronomic space. Its grand brick and iron structure, adorned with intricate mosaics, now houses upscale cafes, horchaterías, and tapas bars.\n\nIt's the perfect spot for a mid-afternoon break. Join the locals for a glass of horchata (a sweet, milky drink made from tiger nuts) and fartons (long, glazed pastries for dipping), or enjoy a pre-dinner aperitif in a sophisticated setting. The atmosphere is chic and relaxed, offering a different market experience from the bustling Mercado Central.",
        practicalInfo: {
        howToGetThere: "Located in the elegant Eixample district, near the main shopping streets.",
        openingHours: "Building is open daily from 8:00 AM to 1:30 AM. Individual vendor hours vary.",
        cost: "Free to enter.",
        website: "https://www.mercadocolon.es/"
      }
      },
        {
        name: "Ruzafa (Russafa)",
        description: "Ruzafa is Valencia's trendiest neighborhood, a hub of creativity, gastronomy, and nightlife. This vibrant area is characterized by its 19th-century buildings with colorful facades, independent art galleries, vintage clothing stores, and concept shops. It has a slightly grittier, more bohemian feel than the polished city center.\n\nThe neighborhood is famous for its eclectic culinary scene, offering everything from traditional tapas bars to innovative fusion restaurants, cozy brunch spots, and specialty coffee shops. The covered Ruzafa Market is the heart of the district, providing fresh produce to the local eateries. In the evening, the area buzzes with energy as locals and visitors fill the numerous terraces and cool cocktail bars.",
        practicalInfo: {
        howToGetThere: "Located just south of the main train station (Estació del Nord) and the bullring. A 10-15 minute walk from the Old Town.",
        openingHours: "The neighborhood is always accessible. Shops and restaurants have individual hours.",
        cost: "Free to explore.",
        website: "https://www.visitvalencia.com/en/what-to-do-valencia/valencia-s-neighbourhoods/ruzafa-eixample"
      }
      }
      ]}
      logistics={{
        gettingAround: "Valencia is a very walkable city, especially the Old Town. For longer distances, the public transport system is efficient, with an integrated network of metro, tram, and bus lines. The Valenbisi bike-sharing system is excellent, thanks to the city's flat terrain and extensive bike lanes, particularly through the Turia Gardens. Taxis and ride-sharing services are also readily available.",
        whereToStay: "For first-time visitors, Ciutat Vella (Old Town) is ideal, placing you amidst historic sites and charming streets. Ruzafa is the best choice for those seeking a trendy, bohemian vibe with great restaurants and nightlife. For a beach holiday, stay in Poblats Marítims near Malvarrosa Beach. Eixample offers elegant architecture and upscale shopping.",
        bestTimeToVisit: "The best times to visit Valencia are in the spring (April-May) and autumn (September-October). The weather is pleasantly warm, perfect for exploring and beach-going, and the crowds are smaller than in the peak summer months. March is also a spectacular time to visit for the world-famous Las Fallas festival, a week-long celebration with giant papier-mâché sculptures, fireworks, and parades, but be prepared for large crowds and higher prices.",
        suggestedItinerary: "Day 1: Explore the Ciutat Vella (Old Town). Visit the Valencia Cathedral, climb the Miguelete Tower, see La Lonja de la Seda, and get lost in the stalls of the Mercado Central. Wander through Barrio del Carmen in the evening. \nDay 2: Dedicate the day to modern Valencia. Start at the City of Arts and Sciences, visiting L'Oceanogràfic and the Science Museum. In the afternoon, rent a bike and cycle through the Turia Gardens. \nDay 3: Head to the coast. Spend the morning at Malvarrosa Beach, followed by a traditional paella lunch on the promenade. In the afternoon, take a bus to Albufera Natural Park for a relaxing boat trip at sunset."
      }}
      faqs={[{
          question: "Is Valencia expensive?",
          answer: "Compared to other major Spanish cities like Barcelona or Madrid, Valencia is quite affordable. Eating out is a great value, with a 'menú del día' (three-course lunch menu) often available for €12-€18. Public transport is reasonably priced, and many key attractions, like the Turia Gardens and the Museum of Fine Arts, are free. While accommodation prices can rise during peak season and festivals, it generally offers better value for money than its larger counterparts."
        },
        {
          question: "How many days do you need in Valencia?",
          answer: "Three to four days is the ideal amount of time to spend in Valencia. This allows you to comfortably explore the main highlights of the Old Town, spend a day at the City of Arts and Sciences, relax on the beach, and even take a half-day trip to the Albufera park without feeling rushed. With more time, you could explore more neighborhoods like Ruzafa in-depth or take day trips to nearby towns."
        },
        {
          question: "Is Valencia safe?",
          answer: "Valencia is considered a very safe city for tourists. The general crime rate is low. However, as in any popular tourist destination, you should take standard precautions. Be mindful of your belongings in crowded areas like the Mercado Central, on public transport, and at the beach to avoid pickpocketing. The city is generally safe to walk around at night, but it's always wise to stick to well-lit main streets."
        },
        {
          question: "What is Valencia famous for?",
          answer: "Valencia is world-famous for several things. It is the undisputed birthplace of paella, Spain's most iconic dish. Architecturally, it's known for the futuristic City of Arts and Sciences complex. It is home to the massive Las Fallas festival in March, a UNESCO Intangible Cultural Heritage event. The city also claims to possess the Holy Grail, housed in its cathedral, and is celebrated for its delicious oranges and the unique Turia Gardens, a riverbed converted into a park."
        }
      ]}
    />
  );
};