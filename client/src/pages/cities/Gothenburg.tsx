import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Gothenburg: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Gothenburg, Sweden (2025 Guide)"}
      description={"Welcome to Gothenburg, Sweden's vibrant second city where a laid-back, friendly atmosphere meets cutting-edge design and a deep connection to the sea. Nestled on the Göta älv river on the west coast, this historic port city has transformed into a hub of culture, gastronomy, and sustainability. Stroll through charming 19th-century neighborhoods, explore a breathtaking archipelago just a tram ride away, and indulge in the cherished Swedish tradition of 'fika' (a coffee and cake break). With world-class museums, one of Scandinavia's top amusement parks, and a thriving culinary scene, Gothenburg offers an unforgettable blend of urban energy and natural beauty. This guide will walk you through all the very best things to do in Gothenburg, ensuring you experience the heart and soul of this captivating Swedish gem."}
      imageUrl={""}
      highlights={["Gothenburg Archipelago",
        "Liseberg Amusement Park",
        "Haga District",
        "Universeum",
        "Gothenburg Museum of Art"]}
      galleryImages={[
        { url: "", alt: "Gothenburg landmark 1", caption: "Gothenburg landmark 1 - placeholder" },
        { url: "", alt: "Gothenburg landmark 2", caption: "Gothenburg landmark 2 - placeholder" },
        { url: "", alt: "Gothenburg landmark 3", caption: "Gothenburg landmark 3 - placeholder" },
        { url: "", alt: "Gothenburg landmark 4", caption: "Gothenburg landmark 4 - placeholder" },
        { url: "", alt: "Gothenburg landmark 5", caption: "Gothenburg landmark 5 - placeholder" },
        { url: "", alt: "Gothenburg landmark 6", caption: "Gothenburg landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Gothenburg Archipelago",
        description: "An essential Gothenburg experience, the archipelago is a stunning collection of over 20 islands stretching up the coast. The southern, car-free islands like Styrsö and Brännö are easily accessible via public transport ferries and are perfect for serene walks, swimming in sheltered coves, and enjoying picturesque fishing villages. The northern islands, such as Hönö and Öckerö, are larger and can be reached by car ferry, offering a different but equally charming coastal vibe.\n\nSpending a day island-hopping is the perfect antidote to city life. Pack a picnic, rent a bicycle, or simply find a smooth, sun-warmed granite rock to relax on. The stark natural beauty, dotted with traditional red wooden houses, provides a glimpse into the authentic soul of Sweden's west coast.",
        practicalInfo: {
        howToGetThere: "For the southern archipelago, take tram 11 or 9 to Saltholmen, then use your Västtrafik public transport ticket for the ferries. Northern islands are reached by bus and free car ferries.",
        openingHours: "Year-round, but ferry schedules are more frequent in summer.",
        cost: "Included in the Västtrafik public transport ticket for southern islands. Free car ferries for northern islands.",
        website: "www.goteborg.com/en/guides/the-gothenburg-archipelago"
      }
      },
        {
        name: "Liseberg Amusement Park",
        description: "Scandinavia's largest and most beloved amusement park, Liseberg has been delighting visitors since 1923. It offers a fantastic mix of attractions for all ages, from gentle carousels to heart-pounding roller coasters like Helix and Valkyria. The park is beautifully landscaped with flowers and trees, creating a wonderful atmosphere that's as much a garden as it is an amusement park.\n\nLiseberg is not just for summer. It hosts a famous Halloween event and one of Sweden's most spectacular Christmas markets, transforming the park into a magical winter wonderland with millions of twinkling lights, festive food stalls, and an ice-skating rink. It's a must-visit, regardless of the season.",
        practicalInfo: {
        howToGetThere: "Located centrally. Take tram 5 from Brunnsparken or walk from the city center.",
        openingHours: "Open daily in summer, weekends in spring/autumn, and select dates for Halloween and Christmas. Check the website for exact dates and times.",
        cost: "Varies. Entrance fee plus ride passes or individual tickets. Approx. 125 SEK for admission only.",
        website: "www.liseberg.se"
      }
      },
        {
        name: "Haga District",
        description: "Step back in time in Haga, Gothenburg's oldest and most charming neighborhood. Known for its picturesque, well-preserved wooden houses, cobblestone streets, and independent shops, Haga is the perfect place for a leisurely stroll. The main street, Haga Nygata, is car-free and lined with quaint cafes, antique stores, and quirky boutiques.\n\nHaga is famous for being the home of the 'Hagabulle,' a giant cinnamon bun the size of a dinner plate. Don't leave without trying one at the iconic Café Husaren. This district embodies the Swedish concept of 'mysig' (cozy), making it an essential stop for anyone wanting to experience Gothenburg's unique local culture.",
        practicalInfo: {
        howToGetThere: "A short walk from the city center. Nearby tram stops include Hagakyrkan and Järntorget.",
        openingHours: "Shops and cafes generally open 10:00/11:00 - 18:00.",
        cost: "Free to explore.",
        website: "www.goteborg.com/en/places/haga"
      }
      },
        {
        name: "Universeum",
        description: "Located right next to Liseberg, Universeum is a spectacular public science center and museum that brings science and nature to life through interactive exhibits. It's divided into several sections, including a massive indoor rainforest where you can walk amongst free-roaming monkeys and colorful birds. The Ocean Zone features one of Europe's largest aquariums, showcasing everything from local sea life to massive sharks and rays.\n\nOther exhibits focus on space, technology, and the human body, with plenty of hands-on activities that make learning fun for both children and adults. It's an engaging and educational experience that can easily fill an entire afternoon, making it a perfect choice for families or anyone with a curious mind.",
        practicalInfo: {
        howToGetThere: "Take tram 5 to the Korsvägen stop, located next to Liseberg.",
        openingHours: "Daily, typically 10:00 - 18:00, with extended hours in summer. Check online.",
        cost: "Approx. 295 SEK for adults, 235 SEK for children (ages 3-16).",
        website: "www.universeum.se"
      }
      },
        {
        name: "Gothenburg Museum of Art (Göteborgs konstmuseum)",
        description: "Situated at the top of the main boulevard, Avenyn, the Gothenburg Museum of Art is a cultural powerhouse. It boasts one of the world's finest collections of late 19th-century Nordic art, with works from masters like Edvard Munch, Anders Zorn, and Carl Larsson. The collection spans from the 15th century to the present day, also featuring significant pieces by Rembrandt, Rubens, and Picasso.\n\nThe museum's impressive building is a landmark in itself. Inside, the Hasselblad Center, a dedicated space for photography, hosts world-class exhibitions. It's a must for art lovers seeking to understand the Nordic artistic soul.",
        practicalInfo: {
        howToGetThere: "Located at Götaplatsen at the end of Avenyn. Tram stops: Götaplatsen or Berzeliigatan.",
        openingHours: "Tuesday - Sunday, closed Mondays. Hours vary, so check the website.",
        cost: "Approx. 65 SEK for an annual pass (also valid for other city museums). Free for under 20s.",
        website: "www.goteborgskonstmuseum.se"
      }
      },
        {
        name: "Feskekôrka ('Fish Church')",
        description: "Feskekôrka, which translates to 'Fish Church', is an iconic indoor fish and seafood market housed in a building that resembles a neo-gothic church. Opened in 1874, it has been the city's temple to seafood for nearly 150 years. Inside, you'll find a wide variety of the freshest catch from the North Sea, from glistening shrimp and oysters to cod and salmon.\n\nWhile the historic market hall is undergoing extensive renovation until 2024/2025, a temporary market is located just outside, ensuring the tradition continues. You can buy fresh seafood to cook yourself or enjoy a prepared lunch at one of the on-site restaurants, offering classics like shrimp sandwiches ('räksmörgås') and fish soup. It's a true Gothenburg institution.",
        practicalInfo: {
        howToGetThere: "Centrally located near Rosenlund. Tram stop: Hagakyrkan or Domkyrkan.",
        openingHours: "Typically Tuesday - Saturday. Check the website for the temporary market's hours.",
        cost: "Free to enter. Prices for food vary.",
        website: "www.feskekorka.se"
      }
      },
        {
        name: "Slottsskogen Park",
        description: "Slottsskogen, meaning 'Castle Forest', is Gothenburg's largest and most beloved park. It's a vast green oasis perfect for picnics, jogging, or simply relaxing. Unlike a manicured garden, much of the park retains its natural forest feel, with winding paths and rocky outcrops.\n\nA key highlight is the free zoo, which features Nordic animals like moose, seals, and Gotland ponies in large, naturalistic enclosures. The 'Barnens Zoo' (Children's Zoo) is open in the summer for petting farm animals. The park also hosts the Way Out West music festival each August, transforming it into a hub of music and culture.",
        practicalInfo: {
        howToGetThere: "Take trams 1, 2, or 6 to the Linnéplatsen stop.",
        openingHours: "Park is open 24/7. Zoo is open daily during daylight hours.",
        cost: "Free.",
        website: "www.goteborg.com/en/places/slottsskogen"
      }
      },
        {
        name: "Gothenburg Botanical Garden (Botaniska Trädgården)",
        description: "Adjacent to Slottsskogen, the Gothenburg Botanical Garden is one of Europe's foremost botanical gardens, covering 175 hectares. It's a place of incredible beauty and scientific importance, cultivating around 16,000 species of plants. Highlights include the stunning Rock Garden, the tranquil Japanese Dell, and the colorful Rhododendron Valley.\n\nDon't miss the greenhouses, which house a remarkable collection of orchids and other tropical and subtropical plants, including the rare Easter Island Tree, which is extinct in its native habitat. It's a peaceful and breathtakingly beautiful escape from the city.",
        practicalInfo: {
        howToGetThere: "Take tram 1, 2, 7, or 8 to the Botaniska Trädgården stop.",
        openingHours: "Park is open daily from dawn to dusk. Greenhouses have more limited hours.",
        cost: "Voluntary entrance fee to the garden (approx. 20 SEK). Separate fee for the greenhouses.",
        website: "www.botaniska.se"
      }
      },
        {
        name: "Volvo Museum",
        description: "Gothenburg is the birthplace of Volvo, and this museum celebrates the history of Sweden's most iconic brand. Located on the Hisingen island, the Volvo Museum showcases the company's development from its first car in 1927 to modern-day models. The collection includes everything from classic cars and trucks to marine engines and concept vehicles.\n\nIt's a fascinating journey through Swedish engineering, design, and safety innovation. Even if you're not a car enthusiast, the museum offers a compelling look at a company that has played a huge role in Sweden's industrial history and global identity.",
        practicalInfo: {
        howToGetThere: "Located in Arendal on Hisingen island. Take bus 32 from Eketrägatan to the Arendal Skans stop.",
        openingHours: "Tuesday - Sunday, 10:00 - 17:00 (may vary, check online).",
        cost: "Approx. 150 SEK for adults.",
        website: "www.volvomuseum.com"
      }
      },
        {
        name: "The Garden Society of Gothenburg (Trädgårdsföreningen)",
        description: "One of the best-preserved 19th-century parks in Europe, the Trädgårdsföreningen is a lush, beautiful haven in the heart of the city, right next to the central station. It features rolling lawns, magnificent flower beds, and a famous Rosarium with thousands of rose varieties. The park's crown jewel is the Palm House (Palmhuset), a stunning glass and iron conservatory from 1878 modeled on London's Crystal Palace.\n\nInside the Palm House, you can wander through different climate zones, from tropical palms to Mediterranean flora. The park is perfect for a gentle walk, a fika at one of its cafes, or simply enjoying a moment of tranquility.",
        practicalInfo: {
        howToGetThere: "Located next to the Central Station and Brunnsparken transport hub.",
        openingHours: "Park: Daily 07:00 - 20:00 (seasonal variations). Palm House has shorter hours.",
        cost: "Free entry to the park. A small fee may apply for the Palm House.",
        website: "www.goteborg.com/en/places/tradgardsforeningen"
      }
      },
        {
        name: "Maritiman",
        description: "Explore the world's largest floating maritime museum, Maritiman, moored on the Göta älv river. This unique attraction consists of 19 vessels, including a destroyer, a submarine, and several civilian ships, all interconnected by gangways. You can climb aboard, go below deck, and experience what life was like for sailors and submariners.\n\nThe star of the fleet is the destroyer HMS Småland and the submarine Nordkaparen, offering a rare chance to explore the cramped quarters and complex machinery of Cold War-era naval vessels. It's an interactive and impressive experience for all ages, providing a tangible link to Gothenburg's rich maritime heritage.",
        practicalInfo: {
        howToGetThere: "Located at Packhuskajen, a short walk from the Opera House and Lilla Bommen.",
        openingHours: "Open daily during summer months, with limited hours in spring/autumn. Closed in winter.",
        cost: "Approx. 175 SEK for adults.",
        website: "www.maritiman.se"
      }
      },
        {
        name: "The Museum of World Culture (Världskulturmuseet)",
        description: "Housed in a striking modern building near Universeum, the Museum of World Culture explores contemporary global issues through thought-provoking and often provocative exhibitions. The museum doesn't have a permanent collection on display; instead, it hosts a series of rotating exhibitions that tackle themes like migration, gender, consumerism, and sustainability from diverse cultural perspectives.\n\nThe exhibitions are known for being interactive, engaging, and designed to challenge visitors' assumptions about the world. It’s a place for reflection and conversation, offering a different kind of museum experience that feels relevant and connected to today's society.",
        practicalInfo: {
        howToGetThere: "Located at Korsvägen, next to Liseberg and Universeum.",
        openingHours: "Tuesday - Sunday, closed Mondays. Hours vary, check the website.",
        cost: "Free entry to exhibitions.",
        website: "www.varldskulturmuseerna.se/en/varldskulturmuseet/"
      }
      },
        {
        name: "Skansen Kronan",
        description: "For one of the best panoramic views of Gothenburg, climb the hill to Skansen Kronan. This fortress, built in the late 17th century, stands guard over the Haga district. The tower itself is a striking hexagonal structure that was once part of the city's primary defense system, although it never saw battle.\n\nThe walk up the hill is steep but rewarding. From the top, you get a fantastic 360-degree view of the city's rooftops, the harbor, and the river. The fortress tower is now used for private events but the grounds are always open. It's a great spot for photos, especially at sunset.",
        practicalInfo: {
        howToGetThere: "Located on a hill above the Haga district. Access via stone steps from the end of Haga Nygata.",
        openingHours: "The grounds are always open. The tower itself is generally closed to the public.",
        cost: "Free.",
        website: "www.skansenkronan.se"
      }
      },
        {
        name: "Röhsska Museum of Design and Craft",
        description: "The Röhsska Museum is Sweden's premier museum dedicated to design, fashion, and applied arts. After a major renovation, it reopened with state-of-the-art exhibition spaces that showcase everything from historical artifacts to contemporary Swedish design. The collections are vast, covering fashion, industrial design, furniture, ceramics, and textiles from East Asia and across Europe.\n\nThe museum provides fascinating context for Sweden's world-renowned design scene, exploring the ideas and philosophies that have shaped it. It's a must for anyone interested in aesthetics, creativity, and the history of objects we use in our daily lives.",
        practicalInfo: {
        howToGetThere: "Located on Vasagatan, close to Avenyn. Tram stop: Valand.",
        openingHours: "Tuesday - Sunday, closed Mondays. Check website for current hours.",
        cost: "Approx. 65 SEK for an annual pass (also valid for other city museums). Free for under 20s.",
        website: "www.rohsska.se"
      }
      },
        {
        name: "Avenyn (Kungsportsavenyen)",
        description: "Kungsportsavenyen, universally known as 'Avenyn', is Gothenburg's main boulevard, stretching from the old moat to the impressive Götaplatsen square, home to the Poseidon statue, the Museum of Art, and the Concert Hall. This wide, tree-lined avenue is the city's commercial and cultural artery.\n\nBy day, it's a hub for shopping, with major brands and department stores. By night, it comes alive with numerous restaurants, bars, and clubs. While it can be touristy, a walk along its length is essential to feel the city's pulse. Explore the side streets for more unique dining and shopping experiences.",
        practicalInfo: {
        howToGetThere: "Centrally located. Main tram stops are Kungsportsplatsen, Valand, and Götaplatsen.",
        openingHours: "Shops typically 10:00 - 19:00. Restaurants and bars open late.",
        cost: "Free to walk and window-shop.",
        website: "www.avenyn.se"
      }
      }
      ]}
      logistics={{
        gettingAround: "Gothenburg has a superb public transport system, Västtrafik, consisting of trams, buses, and ferries. Trams are the best way to get around the city center. A single ticket is valid for 90 minutes. For longer stays, consider a 24-hour or 72-hour pass. The city is very walkable, and cycling is also a great option with many dedicated bike lanes and a bike-share system called Styr & Ställ.",
        whereToStay: "For first-time visitors, the area Inom Vallgraven (within the moat) offers central convenience. The charming districts of Haga and Linné are perfect for a cozier, more local feel with great cafes and boutiques. Vasastan is elegant and quiet yet still central. Recommended hotels include Hotel Pigalle (boutique), Avalon Hotel (design-focused), and the Clarion Hotel Post (large and central).",
        bestTimeToVisit: "The best time to visit Gothenburg is during the summer months (June to August) when the weather is warm, the city is vibrant with outdoor cafes, and events like the Way Out West festival take place. The archipelago is also at its most accessible. Spring (April-May) and autumn (September-October) offer pleasant weather with fewer crowds. Winter is cold, but the city becomes magical with its famous Christmas market at Liseberg.",
        suggestedItinerary: "Day 1: Historic & Cultural Heart. Start in Haga for fika, then walk up to Skansen Kronan for views. Explore the city center (Inom Vallgraven) and walk the length of Avenyn up to Götaplatsen to visit the Gothenburg Museum of Art.\nDay 2: Science, Nature & Thrills. Spend the morning at Universeum, then enjoy the afternoon at Liseberg amusement park. If you prefer nature, substitute Liseberg with a long walk through Slottsskogen Park and the Botanical Garden.\nDay 3: Maritime & Archipelago. Visit the Maritiman floating museum in the morning. In the afternoon, take a tram to Saltholmen and hop on a ferry to explore the car-free southern archipelago islands like Styrsö or Brännö."
      }}
      faqs={[{
          question: "Is Gothenburg expensive?",
          answer: "Like the rest of Sweden, Gothenburg can be expensive compared to other European destinations, particularly for alcohol and eating out. However, it can be enjoyed on a budget. Many museums have free entry or a low-cost annual pass. Public transport is efficient and reasonably priced. Enjoying the city's beautiful parks and archipelago is also a low-cost activity. Supermarkets offer affordable food options if you choose to self-cater."
        },
        {
          question: "How many days do you need in Gothenburg?",
          answer: "Three days is a good amount of time to see the main highlights of Gothenburg. This allows for one day exploring the city center and its museums, one day for Liseberg/Universeum and the major parks, and one day dedicated to a trip out to the archipelago. If you want to explore more islands or visit more museums at a relaxed pace, 4-5 days would be ideal."
        },
        {
          question: "Is Gothenburg safe?",
          answer: "Gothenburg is a very safe city with low crime rates. Standard precautions that you would take in any major city apply: be aware of your surroundings, especially in crowded areas like the central station or on public transport, to avoid pickpockets. Walking around at night in most central areas is generally safe, but always stick to well-lit streets."
        },
        {
          question: "What is Gothenburg famous for?",
          answer: "Gothenburg is famous for its friendly, laid-back atmosphere, its beautiful and easily accessible archipelago, and its status as a major seaport. It's renowned for its world-class seafood, particularly shrimp, lobster, and oysters. The city is also the home of Volvo, the Liseberg amusement park, and has a strong tradition in design and music, hosting major festivals like Way Out West."
        }
      ]}
    />
  );
};