import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Stockholm: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Stockholm, Sweden (2025 Guide)"}
      description={"Welcome to Stockholm, a city where medieval history and cutting-edge design float together across 14 islands. Known as the 'Venice of the North', Sweden's capital is a breathtaking tapestry of cobblestone streets, grand palaces, and verdant parks, all connected by a network of bridges and ferries. The air here feels crisp, a blend of Baltic sea breeze and the scent of freshly baked cinnamon buns from a cozy café. Whether you're wandering through the colorful facades of the Old Town, exploring world-class museums, or embracing the Swedish tradition of 'fika' (a coffee and cake break), you'll find an effortless sense of cool and a deep connection to nature. This guide will walk you through all the very best things to do in Stockholm, ensuring your visit is as magical as the city itself. Prepare to be enchanted by its beauty and vibrant culture."}
      imageUrl={""}
      highlights={["Gamla Stan (Old Town)",
        "Vasa Museum",
        "Skansen",
        "The Royal Palace (Kungliga Slottet)",
        "Djurgården Island"]}
      galleryImages={[
        { url: "", alt: "Stockholm landmark 1", caption: "Stockholm landmark 1 - placeholder" },
        { url: "", alt: "Stockholm landmark 2", caption: "Stockholm landmark 2 - placeholder" },
        { url: "", alt: "Stockholm landmark 3", caption: "Stockholm landmark 3 - placeholder" },
        { url: "", alt: "Stockholm landmark 4", caption: "Stockholm landmark 4 - placeholder" },
        { url: "", alt: "Stockholm landmark 5", caption: "Stockholm landmark 5 - placeholder" },
        { url: "", alt: "Stockholm landmark 6", caption: "Stockholm landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Gamla Stan (Old Town)",
        description: "Step back in time as you wander through the labyrinthine cobblestone streets of Gamla Stan, Stockholm's historic heart. Founded in 1252, this is one of Europe's largest and best-preserved medieval city centers. The narrow, winding alleys are lined with buildings in shades of saffron and terracotta, housing quaint boutiques, artisan shops, and traditional restaurants. \n\nAt its center lies Stortorget, the city's oldest square, famous for its picturesque gabled houses and the Nobel Prize Museum. Don't miss the Mårten Trotzigs Gränd, the narrowest alley in Stockholm, measuring just 90 centimeters at its slimmest point. Gamla Stan is not just a museum piece; it's a living, breathing neighborhood that offers a magical atmosphere, especially in the evening when gaslights cast a romantic glow.",
        practicalInfo: {
        howToGetThere: "Located in the city center. Accessible on foot from Norrmalm or Södermalm. T-bana station: Gamla Stan.",
        openingHours: "24/7 access to streets. Shops and museums have their own hours, typically 10:00 - 18:00.",
        cost: "Free to walk around. Museum entry fees vary.",
        website: "https://www.visitstockholm.com/see-do/attractions/gamla-stan/"
      }
      },
        {
        name: "Vasa Museum",
        description: "The Vasa Museum is a maritime marvel and one of Stockholm's most compelling attractions. It is dedicated to a single object: the Vasa, an almost fully intact 17th-century ship that sank on its maiden voyage in 1628. After 333 years on the seabed, the magnificent warship was salvaged and now stands in a custom-built museum, offering an unparalleled glimpse into naval life during Sweden's Great Power era.\n\nThe sheer scale and intricate carvings of the ship are breathtaking. The museum brilliantly tells the story of its construction, sinking, and meticulous restoration. Multiple levels of exhibits surround the vessel, showcasing salvaged artifacts and detailing the lives of the people on board. It is an unforgettable experience and a true window into the past.",
        practicalInfo: {
        howToGetThere: "Located on Djurgården island. Accessible via tram line 7, bus 67, or the Djurgården ferry from Slussen.",
        openingHours: "Daily 10:00 - 17:00 (longer hours in summer).",
        cost: "Adults approx. 190 SEK. Free for children under 18.",
        website: "https://www.vasamuseet.se/en"
      }
      },
        {
        name: "Skansen",
        description: "Experience the whole of Sweden in one place at Skansen, the world's oldest open-air museum. Founded in 1891, Skansen showcases historical buildings and farmsteads from all corners of the country, brought here piece by piece. Costumed interpreters demonstrate traditional crafts and tell stories of Swedish life in centuries past, from Sami camps in the north to farmhouses in the south.\n\nBeyond the historical exhibits, Skansen is also home to a zoo featuring Nordic animals like bears, wolves, lynx, and moose in spacious enclosures. It's a fantastic destination for families and anyone interested in Swedish culture and nature. The site also hosts seasonal celebrations, including a famous Christmas market and traditional Midsummer festivities.",
        practicalInfo: {
        howToGetThere: "On Djurgården island. Take tram line 7, bus 67, or the Djurgården ferry.",
        openingHours: "Daily from 10:00. Closing times vary by season (16:00 - 20:00).",
        cost: "Varies by season. Adults approx. 185-245 SEK.",
        website: "https://www.skansen.se/en/"
      }
      },
        {
        name: "The Royal Palace (Kungliga Slottet)",
        description: "As the official residence of His Majesty the King of Sweden, the Royal Palace is a magnificent example of Italian Baroque architecture. With over 600 rooms, it is one of the largest palaces in Europe. While the King and Queen reside at Drottningholm Palace, this is their official workplace and is used for state receptions and ceremonies.\n\nVisitors can explore several museums within the palace walls, including the opulent Royal Apartments, the Treasury with its crown jewels, the Tre Kronor Museum detailing the palace's medieval history, and Gustav III's Museum of Antiquities. Be sure to time your visit to witness the daily Changing of the Guard ceremony in the outer courtyard, a display of military precision and pageantry.",
        practicalInfo: {
        howToGetThere: "Located on the edge of Gamla Stan. T-bana station: Gamla Stan.",
        openingHours: "Daily 10:00 - 17:00 (hours may vary seasonally).",
        cost: "Adults approx. 190 SEK for a combination ticket.",
        website: "https://www.kungligaslotten.se/english.html"
      }
      },
        {
        name: "Djurgården Island",
        description: "Djurgården is Stockholm's green lung, a tranquil oasis that was once a royal hunting ground. Today, it's a beloved recreational area for both locals and tourists, home to lush parks, scenic waterfront paths, and many of the city's top museums and attractions. You can spend a whole day here and still not see everything.\n\nBeyond the Vasa Museum and Skansen, the island hosts ABBA The Museum, the Gröna Lund amusement park, and the Nordic Museum. For a more relaxed experience, simply stroll or cycle along its canals and wooded trails, enjoy a picnic, or relax at a waterfront café. It's the perfect escape from the urban hustle and bustle without ever leaving the city.",
        practicalInfo: {
        howToGetThere: "Walk from the city center, or take tram line 7, bus 67, or the Djurgården ferry from Slussen or Nybroplan.",
        openingHours: "24/7 access. Individual attractions have their own hours.",
        cost: "Free to access the island. Costs apply for attractions.",
        website: "https://www.visitstockholm.com/see-do/attractions/royal-djurgarden/"
      }
      },
        {
        name: "Stockholm City Hall (Stadshuset)",
        description: "With its iconic 106-meter-tall tower topped by three golden crowns, Stockholm's City Hall is one of its most famous landmarks. This masterpiece of National Romanticism architecture is the seat of the city's government and the venue for the prestigious Nobel Prize banquet, held annually in the magnificent Blue Hall.\n\nAccess to the interiors is by guided tour only, which takes you through stunning ceremonial halls like the Golden Hall, adorned with 18 million gold mosaic tiles. For the best panoramic views of Stockholm, climb the tower (open May-September). The view over Gamla Stan and Riddarfjärden bay is absolutely unbeatable.",
        practicalInfo: {
        howToGetThere: "Located on the island of Kungsholmen, a short walk from Central Station.",
        openingHours: "Guided tours run daily, typically between 09:30 and 16:00. The tower has separate, seasonal hours.",
        cost: "Tour: Adults approx. 140 SEK. Tower climb is a separate ticket.",
        website: "https://stadshuset.stockholm/en/"
      }
      },
        {
        name: "ABBA The Museum",
        description: "Walk in, dance out! ABBA The Museum is an interactive and utterly joyful tribute to Sweden's most famous musical export. This is not a stuffy museum but a vibrant celebration of the pop supergroup's music, outfits, and legacy. Fans and music lovers alike will be thrilled by the experience.\n\nYou can see their spectacular stage costumes, gold records, and memorabilia. The interactive elements are the real highlight: sing along with ABBA holograms in a Polar Studio replica, mix original music, and even star in a music video. It's a fun, flamboyant, and immersive experience that will leave you with a smile on your face and a song in your heart.",
        practicalInfo: {
        howToGetThere: "On Djurgården island. Take tram line 7 or bus 67.",
        openingHours: "Daily, generally 10:00 - 18:00. Check website for specific dates.",
        cost: "Adults approx. 295 SEK. Booking online in advance is recommended.",
        website: "https://abbathemuseum.com/en/"
      }
      },
        {
        name: "Fotografiska",
        description: "Fotografiska is not just a museum; it's a world-renowned meeting place for contemporary photography. Housed in a former industrial Art Nouveau building on the Södermalm waterfront, it presents a rotating schedule of four major exhibitions and around 20 smaller ones annually, featuring both legendary photographers and emerging new talent.\n\nThe museum is known for its high-quality curation and stunning presentation. It also boasts a top-floor café and restaurant with panoramic views across the water to Gamla Stan and Djurgården. With late opening hours, it's a perfect spot to combine art, a delicious meal, and one of the best vistas in the city.",
        practicalInfo: {
        howToGetThere: "Located at Stadsgårdshamnen 22 on Södermalm. Short walk from Slussen T-bana station.",
        openingHours: "Daily 10:00 - 23:00.",
        cost: "Adults approx. 185 SEK.",
        website: "https://www.fotografiska.com/sto/en/"
      }
      },
        {
        name: "Södermalm",
        description: "Once a working-class district, Södermalm (or 'Söder' to locals) is now Stockholm's creative and trend-setting hub. Known for its bohemian vibe, it's packed with independent boutiques, vintage stores, art galleries, and some of the city's coolest bars and restaurants. The area south of Folkungagatan, nicknamed 'SoFo', is the epicenter of this creative energy.\n\nBeyond the shopping and dining, Södermalm offers fantastic viewpoints. Head to Monteliusvägen or Fjällgatan for postcard-perfect panoramas of Gamla Stan and City Hall across the water. It’s the perfect neighborhood to simply get lost in, soak up the local atmosphere, and enjoy a 'fika' at a hip café.",
        practicalInfo: {
        howToGetThere: "South of Gamla Stan. T-bana stations: Slussen, Mariatorget, Medborgarplatsen.",
        openingHours: "Neighborhood is always accessible. Shops generally open 11:00 - 18:00.",
        cost: "Free to explore.",
        website: "https://www.visitstockholm.com/see-do/districts/sodermalm/"
      }
      },
        {
        name: "Stockholm Archipelago Tour",
        description: "Stockholm's cityscape is defined by water, but the true scale of its maritime setting is best appreciated by venturing into the archipelago. This vast cluster of around 30,000 islands, skerries, and rocks stretches deep into the Baltic Sea. Taking a boat tour is an essential Stockholm experience, offering a complete change of scenery just minutes from the city.\n\nVarious tours are available, from short 2-3 hour sightseeing trips around the inner islands to full-day excursions to charming towns like Vaxholm or Sandhamn. The views are spectacular, with rugged, pine-clad islands dotted with traditional red wooden cottages. It's a serene and beautiful journey that showcases the deep connection Swedes have with the sea and nature.",
        practicalInfo: {
        howToGetThere: "Boats depart from various quays, primarily near Nybroplan and Strömkajen (near the Grand Hôtel).",
        openingHours: "Tours run year-round, with a much more extensive schedule from May to September.",
        cost: "Starts from approx. 350 SEK for a 2.5-hour tour.",
        website: "https://www.stromma.com/en-se/stockholm/sightseeing/sightseeing-by-boat/"
      }
      },
        {
        name: "Moderna Museet (Museum of Modern Art)",
        description: "Located on the idyllic island of Skeppsholmen, Moderna Museet is Sweden's premier museum for modern and contemporary art. Its outstanding collection includes key works by masters like Pablo Picasso, Salvador Dalí, and Henri Matisse, alongside a comprehensive collection of Swedish and Nordic artists.\n\nThe museum's architecture is as impressive as its contents, with light-filled galleries and beautiful views of Djurgården and Östermalm. The permanent collection is free to visit, making it an accessible cultural highlight. Don't miss the sculpture park outside, featuring works by Niki de Saint Phalle and Alexander Calder.",
        practicalInfo: {
        howToGetThere: "On Skeppsholmen island, a pleasant walk from Kungsträdgården or take bus 65.",
        openingHours: "Tue & Fri 10:00-20:00, Wed-Thu & Sat-Sun 10:00-18:00. Closed Mondays.",
        cost: "Permanent collection is free. Fees apply for temporary exhibitions.",
        website: "https://www.modernamuseet.se/stockholm/en/"
      }
      },
        {
        name: "Nobel Prize Museum",
        description: "Situated in the heart of Gamla Stan's Stortorget square, the Nobel Prize Museum celebrates the achievements of Nobel laureates and the founder, Alfred Nobel. It's a museum about ideas that changed the world, covering everything from groundbreaking scientific discoveries to literary masterpieces and peace-making efforts.\n\nThe exhibitions are engaging and often interactive, designed to inspire creativity and curiosity. Learn about the lives and work of laureates like Marie Curie, Nelson Mandela, and Albert Einstein. A unique feature is the café's 'Nobel ice cream', served with a chocolate Nobel medal, which is also served at the Nobel Banquet.",
        practicalInfo: {
        howToGetThere: "Located in Stortorget square in Gamla Stan. T-bana: Gamla Stan.",
        openingHours: "Daily 10:00 - 18:00 (longer hours in summer, sometimes closed Mondays off-season).",
        cost: "Adults approx. 140 SEK.",
        website: "https://nobelprizemuseum.se/en/"
      }
      },
        {
        name: "Östermalms Saluhall",
        description: "For a taste of Stockholm's culinary heritage, a visit to Östermalms Saluhall is a must. This historic food hall, housed in a magnificent 19th-century brick building, has been serving discerning Stockholmers since 1888. It's a feast for the senses, with beautifully presented stalls selling the finest Swedish produce.\n\nWander the aisles to find fresh seafood, game meats, artisan cheeses, and gourmet prepared foods. Many stalls have adjoining restaurants or bars where you can enjoy classic Swedish dishes like toast skagen (prawns on toast) or a hearty meatball platter. It's an ideal spot for lunch and a glimpse into the city's sophisticated food culture.",
        practicalInfo: {
        howToGetThere: "Located at Östermalmstorg. T-bana station: Östermalmstorg.",
        openingHours: "Mon-Fri 09:30 - 19:00, Sat 09:30 - 17:00. Closed Sundays.",
        cost: "Free to enter. Prices for food vary.",
        website: "https://www.ostermalmshallen.se/en"
      }
      },
        {
        name: "Subway Art Tour (Tunnelbana)",
        description: "Stockholm's subway system is famously known as the 'world's longest art gallery'. Since the 1950s, over 90 of the 100 stations have been decorated with sculptures, mosaics, paintings, and installations by more than 150 artists. It transforms a simple commute into a remarkable artistic journey.\n\nSome of the most spectacular stations include the Blue Line's T-Centralen with its serene blue vine motifs, Kungsträdgården with its archaeological dig-themed design, and Solna Centrum's dramatic red cave-like appearance, depicting a forest landscape. You can explore on your own with a valid metro ticket or join a free guided art walk offered by SL, the public transport company.",
        practicalInfo: {
        howToGetThere: "Accessible via any Tunnelbana station. A valid SL ticket is required.",
        openingHours: "During the subway's operating hours.",
        cost: "The price of a single journey ticket (approx. 39 SEK) or travel card.",
        website: "https://sl.se/en/in-english/getting-around/art-in-the-subway/"
      }
      },
        {
        name: "Drottningholm Palace",
        description: "Located on the island of Lovön, Drottningholm Palace is the private residence of the Swedish royal family and a UNESCO World Heritage site. Often called the 'Versailles of the North,' this exquisitely preserved 17th-century palace offers a fascinating look into European royal life through the ages. The best way to arrive is by a historic steamer from the city center, which is an experience in itself.\n\nThe palace complex includes the magnificent formal gardens, a unique Chinese Pavilion, and the perfectly preserved Palace Theatre, which still uses its original 18th-century stage machinery for summer operas. While the southern wing is the royals' private home, the rest of the palace and grounds are open to the public, offering a splendid day trip from the city.",
        practicalInfo: {
        howToGetThere: "Take the T-bana to Brommaplan then a local bus, or a scenic boat trip from Stadshusbron.",
        openingHours: "Daily 10:00 - 17:00 (May-Sep). Reduced hours the rest of the year.",
        cost: "Adults approx. 160 SEK. Grounds are free to enter.",
        website: "https://www.kungligaslotten.se/english/royal-palaces-and-sites/drottningholm-palace.html"
      }
      }
      ]}
      logistics={{
        gettingAround: "Stockholm's public transport system, managed by SL, is efficient and extensive. It includes the Tunnelbana (metro), buses, commuter trains, trams, and ferries. A reusable SL Access card or a contactless card/mobile payment is the easiest way to pay. The city is also very walkable, especially the central areas. Renting a bike is a great option in summer, and ferries are a scenic way to travel between islands like Djurgården and Södermalm.",
        whereToStay: "Norrmalm (City Center): Best for first-timers, close to shopping, Central Station, and major transport hubs. Hotels: At Six, Downtown Camper by Scandic. Gamla Stan (Old Town): Best for historic charm and romance, though can be crowded. Hotels: Victory Hotel, Lady Hamilton Hotel. Södermalm: Best for a trendy, local vibe with cool bars, cafes, and boutiques. Hotels: NOFO Hotel, Hotel Rival. Östermalm: Best for luxury, high-end shopping, and a quieter, more refined atmosphere. Hotels: Hotel Diplomat, Ett Hem.",
        bestTimeToVisit: "Summer (June-August) is the most popular time, with long, sunny days, warm weather, and a lively atmosphere. This is peak season, so expect crowds and higher prices. Spring (April-May) and Autumn (September-October) are excellent alternatives, with pleasant weather, beautiful colors, and fewer tourists. Winter (November-March) is cold and dark, but magical with Christmas markets, festive lights, and the chance to ice skate. It's the best time for cozy 'fika' moments.",
        suggestedItinerary: "[object Object]"
      }}
      faqs={[{
          question: "Is Stockholm expensive?",
          answer: "Yes, Stockholm is considered one of the more expensive cities in Europe, particularly for dining out and alcohol. However, you can manage your budget. Look for 'dagens rätt' (lunch of the day) specials, which are much cheaper than evening meals. Utilize the efficient public transport, enjoy free attractions like the Moderna Museet's permanent collection and exploring the parks, and consider self-catering if your accommodation allows. The Stockholm Pass can offer savings if you plan to visit many paid attractions."
        },
        {
          question: "How many days do you need in Stockholm?",
          answer: "A stay of 3 to 4 days is ideal to cover the main highlights without feeling rushed. This allows you to explore Gamla Stan, visit the key museums on Djurgården, see the City Hall, and get a feel for a neighborhood like Södermalm. If you want to take a day trip into the archipelago or visit Drottningholm Palace, extending your trip to 5 days is recommended."
        },
        {
          question: "Is Stockholm safe?",
          answer: "Stockholm is a very safe city with low crime rates. Standard precautions are sufficient. Be aware of your surroundings and watch out for pickpockets in crowded tourist areas like Gamla Stan, Central Station, and on public transport. The tap water is of excellent quality and perfectly safe to drink. Overall, you can feel very secure exploring the city day and night."
        },
        {
          question: "What is Stockholm famous for?",
          answer: "Stockholm is famous for several things. Its stunning setting across 14 islands, earning it the nickname 'Venice of the North'. It's known for its beautifully preserved Old Town (Gamla Stan), the unique Vasa Museum, and its connection to the Nobel Prize. Culturally, it's famous for ABBA, innovative Swedish design (from fashion to furniture), and the cherished social tradition of 'fika' (a coffee and pastry break)."
        }
      ]}
    />
  );
};