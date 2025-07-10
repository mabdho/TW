import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Helsinki: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Helsinki, Finland (2025 Guide)"
      description="Welcome to Helsinki, the vibrant 'Daughter of the Baltic.' This seaside capital effortlessly blends sleek, modern design with rich history, creating a unique urban landscape where neoclassical architecture sits beside avant-garde structures. A city of islands and green spaces, Helsinki offers a breath of fresh air, both literally and figuratively. Its compact size makes it perfect for exploring on foot, revealing a world of innovative cuisine, thriving sauna culture, and a relaxed, creative atmosphere. Whether you're island-hopping to a historic fortress or sipping coffee in a trendy design district cafe, you'll find that the best things to do in Helsinki are a perfect mix of cultural discovery and serene natural beauty. Get ready to explore a city that is as cool as it is charming."
      highlights={[
      "Suomenlinna Sea Fortress",
      "Helsinki Cathedral",
      "Temppeliaukio Church (Rock Church)",
      "Löyly Sauna",
      "Market Square (Kauppatori)"
]}
      attractions={[
      {
            "name": "Suomenlinna Sea Fortress",
            "description": "A UNESCO World Heritage site, Suomenlinna is a sprawling maritime fortress spread across six interconnected islands. Built by the Swedes in the mid-18th century, it's a living piece of history with tunnels, ramparts, museums, and even a small community of residents. It's not just a museum; it's a beloved recreational area for locals and tourists alike.\n\nSpend a few hours or a whole day wandering its cobblestone paths, exploring the dry dock (one of the oldest in the world), visiting the Suomenlinna Museum, and enjoying panoramic views of the Baltic Sea. Pack a picnic or enjoy a meal at one of the island's charming cafés or the local brewery. The ferry ride itself offers a beautiful perspective of the Helsinki shoreline.",
            "practicalInfo": {
                  "howToGetThere": "A 15-minute HSL ferry ride from the Market Square (Kauppatori). The ferry is part of the city's public transport system.",
                  "openingHours": "The island is open year-round. Museums and services have varying hours, typically 10:00/11:00 AM - 4:00/6:00 PM.",
                  "cost": "Access to the island is free; you only pay for the ferry ticket. Museums have separate entrance fees.",
                  "website": "https://www.suomenlinna.fi/en/"
            }
      },
      {
            "name": "Helsinki Cathedral (Tuomiokirkko)",
            "description": "Dominating the city's skyline, the magnificent Helsinki Cathedral is the unofficial symbol of the capital. Perched atop Senate Square, this brilliant white, green-domed neoclassical masterpiece is a stunning example of Carl Ludvig Engel's architecture. Its stark, minimalist Lutheran interior provides a peaceful contrast to the grand exterior.\n\nThe wide steps leading up to the cathedral are a popular gathering spot, especially in summer, offering a fantastic vantage point over Senate Square and the surrounding government buildings. A visit here is essential for understanding Helsinki's historical heart and capturing that iconic photograph.",
            "practicalInfo": {
                  "howToGetThere": "Located at Senate Square in the city center. Easily accessible by foot or trams 2, 4, 5, and 7.",
                  "openingHours": "Daily 9:00 AM - 6:00 PM (may vary for services and events).",
                  "cost": "Free entry, though a small donation is suggested.",
                  "website": "https://helsingintuomiokirkko.fi/en/"
            }
      },
      {
            "name": "Temppeliaukio Church (Rock Church)",
            "description": "One of Helsinki's most unique architectural gems, the Temppeliaukio Church is excavated directly into solid rock. Completed in 1969, its interior is a breathtaking space with rough, natural rock walls and a stunning copper wire dome that allows natural light to flood in. The acoustics are phenomenal, making it a popular venue for concerts.\n\nUnlike any traditional church, its blend of raw nature and brilliant design creates a serene and powerful atmosphere. It’s a testament to Finnish ingenuity and a must-see for anyone interested in architecture, music, or simply seeking a moment of tranquility in a truly extraordinary setting.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Töölö district. A 10-minute walk from Kamppi, or take tram 2.",
                  "openingHours": "Generally 10:00 AM - 5:00 PM, but hours vary frequently due to services and concerts. Check the website before visiting.",
                  "cost": "€5 entrance fee.",
                  "website": "https://www.temppeliaukionkirkko.fi/en/"
            }
      },
      {
            "name": "Löyly Sauna",
            "description": "To truly experience Finnish culture, you must visit a sauna. Löyly is a stunning example of modern sauna culture, housed in an award-winning wooden building on the Helsinki waterfront. It offers two public saunas: a traditional smoke sauna and a wood-burning sauna, both with direct access to the sea for a refreshing (and chilly!) dip, even in winter.\n\nMore than just a sauna, Löyly is a social hub with a stylish restaurant and a large terrace that becomes a city hotspot in the summer. It's the perfect place to relax, rejuvenate, and participate in a cherished national pastime in a beautiful, design-forward environment.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Hernesaari district. Accessible via bus 14.",
                  "openingHours": "Saunas typically open in the afternoon. Restaurant has longer hours. Booking is highly recommended.",
                  "cost": "A 2-hour sauna session costs approximately €23. Towel, seat cover, and locker are included.",
                  "website": "https://www.loylyhelsinki.fi/en/"
            }
      },
      {
            "name": "Market Square (Kauppatori)",
            "description": "Situated at the eastern end of the Esplanadi park, the Market Square is Helsinki's bustling heart. This vibrant outdoor market is filled with stalls selling fresh Finnish produce, traditional foods, local handicrafts, and souvenirs. In the summer, the air is filled with the scent of fried vendace (muikku) and sweet berries.\n\nGrab a coffee from a tent café, try a Karelian pie, or simply soak in the lively atmosphere with views of the sea, the Presidential Palace, and the Uspenski Cathedral. From here, you can also catch ferries to Suomenlinna and other nearby islands, making it a central hub for your explorations.",
            "practicalInfo": {
                  "howToGetThere": "In the city center, by the South Harbour. Easily walkable from most central locations.",
                  "openingHours": "Mon-Sat, approximately 8:00 AM - 4:00 PM. Extended hours and Sunday opening in summer.",
                  "cost": "Free to browse.",
                  "website": "https://www.myhelsinki.fi/en/see-and-do/sights/market-square"
            }
      },
      {
            "name": "Old Market Hall (Vanha Kauppahalli)",
            "description": "Adjacent to the Market Square lies the Old Market Hall, a beautiful brick building that has been serving customers since 1889. Step inside to discover a gourmet paradise, where vendors offer the finest Finnish delicacies, from cheeses and cured meats to fish, bread, and pastries. It's a feast for the senses and a great place to sample local flavors.\n\nPull up a stool at one of the small eateries, like the popular Story restaurant or a soup kitchen, for a delicious lunch. It's an ideal spot to assemble a high-quality picnic or find unique edible souvenirs to take home. The historic ambiance combined with the quality of the food makes it a local favorite.",
            "practicalInfo": {
                  "howToGetThere": "Located next to the Market Square (Kauppatori).",
                  "openingHours": "Mon-Sat, approximately 8:00 AM - 6:00 PM. Closed on Sundays.",
                  "cost": "Free to enter.",
                  "website": "https://vanhakauppahalli.fi/en/"
            }
      },
      {
            "name": "Design District Helsinki",
            "description": "Helsinki is a world capital of design, and this is its epicenter. The Design District isn't a single building but a creative cluster of 25 streets in the heart of the city, packed with over 200 design shops, galleries, studios, museums, and cafés. Here you'll find flagship stores for iconic Finnish brands like Marimekko, Iittala, and Artek, alongside independent boutiques and artisan workshops.\n\nPick up a map of the district and spend an afternoon wandering through the Punavuori, Kaartinkaupunki, Kamppi, and Ullanlinna neighborhoods. It's the best way to immerse yourself in Finland's famous functional and beautiful aesthetic, whether you're a serious shopper or just an admirer of good design.",
            "practicalInfo": {
                  "howToGetThere": "Spans several central neighborhoods. Start your exploration around the Design Museum on Korkeavuorenkatu street.",
                  "openingHours": "Shop hours vary, but generally 10:00 AM - 6:00 PM on weekdays, shorter hours on Saturdays.",
                  "cost": "Free to explore.",
                  "website": "https://designdistrict.fi/en/"
            }
      },
      {
            "name": "Kamppi Chapel (Chapel of Silence)",
            "description": "An oasis of calm in one of Helsinki's busiest squares, the Kamppi Chapel is an architectural marvel dedicated to quiet contemplation. Its striking, curved wooden exterior looks like a giant, windowless vessel. Inside, the thick walls block out all city noise, creating a profoundly peaceful and simple space with minimalist alder-plank walls and soft lighting.\n\nIt is not a church for services but a place for anyone to pause and find a moment of silence amidst the urban hustle. Staffed by city and church social workers, it offers a unique form of public service. A visit, however brief, is a powerful and restorative experience.",
            "practicalInfo": {
                  "howToGetThere": "Located at Narinkkatori square, next to the Kamppi Shopping Centre.",
                  "openingHours": "Weekdays 8:00 AM - 8:00 PM, Weekends 10:00 AM - 6:00 PM.",
                  "cost": "Free entry.",
                  "website": "https://www.helsinginseurakunnat.fi/en/kamppichapel"
            }
      },
      {
            "name": "Seurasaari Open-Air Museum",
            "description": "Take a trip back in time at the Seurasaari Open-Air Museum, located on a beautiful, tranquil island just a few kilometers from the city center. This museum showcases traditional Finnish life through a collection of historic wooden buildings relocated from all over the country, dating from the 18th to the 20th century. You can wander through farmsteads, manors, and a picturesque wooden church.\n\nGuides in period costumes bring the history to life, demonstrating traditional crafts and skills during the summer months. The island itself is a lovely nature reserve, perfect for a peaceful walk among the tame squirrels and birds, making it a wonderful escape from the city.",
            "practicalInfo": {
                  "howToGetThere": "Take bus 24 from the city center. The island is connected to the mainland by a bridge.",
                  "openingHours": "Museum buildings open during summer season (May-Sept). The island is accessible year-round for walks.",
                  "cost": "Free to enter the island. Entrance fee (~€12) required to go inside the historic buildings during summer.",
                  "website": "https://www.kansallismuseo.fi/en/seurasaari-open-air-museum"
            }
      },
      {
            "name": "Ateneum Art Museum",
            "description": "Home to Finland's national gallery, the Ateneum Art Museum houses the country's most extensive collection of classical art. Located in a grand 19th-century building opposite the Central Railway Station, its collection spans from the 18th century to the modern age, with a strong focus on Finnish art's 'golden age' from 1880 to 1910.\n\nDiscover iconic works by Finnish masters like Albert Edelfelt, Akseli Gallen-Kallela, and Helene Schjerfbeck. The museum also displays international art, including pieces by Van Gogh and Gauguin. It's an essential visit for understanding the Finnish national identity and its artistic heritage.",
            "practicalInfo": {
                  "howToGetThere": "Opposite the Central Railway Station, easily accessible by all public transport.",
                  "openingHours": "Tue-Fri 10:00 AM - 8:00 PM, Sat-Sun 10:00 AM - 5:00 PM. Closed Mondays.",
                  "cost": "Approximately €20.",
                  "website": "https://ateneum.fi/en/"
            }
      },
      {
            "name": "Kiasma Museum of Contemporary Art",
            "description": "A stark contrast to the classical Ateneum, Kiasma is Helsinki's hub for contemporary art. The building itself, designed by American architect Steven Holl, is a work of art with its curving lines and light-filled spaces. Inside, you'll find a dynamic and often provocative collection of Finnish and international contemporary art from the 1960s onwards.\n\nThe exhibitions are constantly changing, featuring everything from paintings and sculptures to installations and media art. Kiasma aims to make contemporary art accessible and engaging for everyone, offering a thought-provoking look at the art of our time.",
            "practicalInfo": {
                  "howToGetThere": "Located next to Kamppi Chapel and the Central Railway Station.",
                  "openingHours": "Tue-Fri 10:00 AM - 8:30 PM, Sat 10:00 AM - 6:00 PM, Sun 10:00 AM - 5:00 PM. Closed Mondays.",
                  "cost": "Approximately €20.",
                  "website": "https://kiasma.fi/en/"
            }
      },
      {
            "name": "Sibelius Monument",
            "description": "Dedicated to Finland's most famous composer, Jean Sibelius, this striking monument is one of Helsinki's most popular statues. Located in the beautiful Sibelius Park, the abstract sculpture, designed by Eila Hiltunen, consists of over 600 hollow steel pipes welded together in a wave-like pattern. The structure is meant to capture the essence of Sibelius's music, resembling a forest or organ pipes.\n\nNext to the main monument is a sculpture of the composer's face, added later to appease those who wanted a more traditional representation. It's a fantastic photo opportunity and a chance to enjoy a stroll through a lovely seaside park in the Töölö district.",
            "practicalInfo": {
                  "howToGetThere": "Located in Sibelius Park, Töölö. Accessible via tram 4 or a pleasant walk from the city center.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free.",
                  "website": "https://www.myhelsinki.fi/en/see-and-do/sights/sibelius-monument"
            }
      },
      {
            "name": "Uspenski Cathedral",
            "description": "Perched on a hillside overlooking the city and the South Harbour, the Uspenski Cathedral is a stunning symbol of Russia's historical influence on Finland. Completed in 1868, it is the largest Orthodox church in Western Europe. Its red brick facade, topped with 13 gleaming golden cupolas representing Christ and the twelve apostles, is a striking sight against the Helsinki sky.\n\nThe interior is just as impressive, filled with ornate icons, gilded decorations, and rich incense. It offers a fascinating contrast to the minimalist Lutheran Cathedral across the water and provides a glimpse into a different facet of Finland's religious and cultural history.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Katajanokka district, a short walk from the Market Square.",
                  "openingHours": "Tue-Fri 9:30 AM - 4:00 PM, Sat 10:00 AM - 3:00 PM, Sun 12:00 PM - 3:00 PM. Closed Mondays.",
                  "cost": "Free entry.",
                  "website": "https://hos.fi/en/uspenski-cathedral/"
            }
      },
      {
            "name": "Allas Sea Pool",
            "description": "An urban oasis right in the heart of the city, Allas Sea Pool combines Finnish sauna culture with outdoor swimming. Located next to the Market Square, this complex features floating decks with three pools: a large freshwater pool heated to 27°C year-round, a children's pool, and a seawater pool whose temperature matches the Baltic Sea – for the brave!\n\nOf course, no Finnish pool complex is complete without saunas, and Allas has several modern, gender-separated ones with great views. With a café, restaurant, and rooftop terrace, it's a fantastic place to relax, swim, and enjoy stunning city and sea views any time of year.",
            "practicalInfo": {
                  "howToGetThere": "Located next to the Market Square, easily walkable from the city center.",
                  "openingHours": "Long hours daily, typically from early morning to late evening. Check website for specifics.",
                  "cost": "A single ticket for swimming and sauna is approximately €18.",
                  "website": "https://allasseapool.fi/en/"
            }
      },
      {
            "name": "Oodi Central Library",
            "description": "Much more than just a place for books, Oodi is Helsinki's stunning central library and a new architectural landmark. Opened in 2018, it's designed as a public 'living room' for the city's residents. The ground floor is an active, open space with a cinema and café. The top floor, or 'Book Heaven', is a traditional library in a breathtaking, light-filled hall with wavy ceilings and panoramic city views.\n\nThe middle floor is a 'makerspace' with 3D printers, sewing machines, recording studios, and game rooms, all available for public use. Oodi is a must-visit to understand modern Finnish society and its commitment to public space, learning, and community.",
            "practicalInfo": {
                  "howToGetThere": "Located opposite the Parliament House, near Kiasma and the Central Railway Station.",
                  "openingHours": "Mon-Fri 8:00 AM - 9:00 PM, Sat-Sun 10:00 AM - 6:00 PM.",
                  "cost": "Free to enter and explore. Fees may apply for using certain equipment or workshops.",
                  "website": "https://www.oodihelsinki.fi/en/"
            }
      }
]}
      logistics={{
      "gettingAround": "Helsinki is a wonderfully compact and walkable city. For longer distances, the public transport system (HSL) is superb, consisting of trams, buses, a metro line, and local trains. Trams are particularly useful for navigating the city center. A single ticket is valid on all forms of transport, including the ferry to Suomenlinna. Consider buying a day ticket (1-7 days) for convenience. City bikes are also a popular option in the summer.",
      "whereToStay": "For first-time visitors, staying in the city center (Kamppi, Kluuvi) provides easy access to major sights and transport hubs. For a trendier vibe, the Design District (Punavuori) is full of boutique hotels, shops, and cool cafes. The Kallio district, once a working-class area, is now Helsinki's bohemian heart, offering more budget-friendly options, quirky bars, and a vibrant local atmosphere. Recommended hotels include Hotel Kämp (Luxury), Hotel F6 (Boutique), and Hotel Helka (Mid-range).",
      "bestTimeToVisit": "The best time to visit Helsinki is during the summer months (June to August) when the weather is warm, the days are incredibly long (with nearly 24 hours of daylight around the solstice), and the city is alive with outdoor events and terrace culture. However, this is also peak season. For a different experience, visit in winter (December to February) to see the city covered in snow, enjoy Christmas markets, and embrace the cozy sauna culture. Spring and autumn offer fewer crowds and pleasant weather, but can be unpredictable.",
      "suggestedItinerary": "Day 1: Start at Senate Square to see Helsinki Cathedral, then walk to the nearby Uspenski Cathedral. Explore the Market Square and Old Market Hall for lunch. In the afternoon, discover Finnish art at the Ateneum. Day 2: Take the ferry to Suomenlinna Sea Fortress and spend the morning exploring. Return to the city and immerse yourself in the Design District, visiting shops and the Design Museum. Day 3: Visit the architectural wonders of Temppeliaukio Church and Oodi Library. In the afternoon, relax like a Finn with a session at a public sauna like Löyly or Allas Sea Pool."
}}
      faqs={[
      {
            "question": "Is Helsinki expensive?",
            "answer": "Helsinki is on par with other Nordic capitals, which means it can be expensive for some travelers. Accommodation and eating out at restaurants will be your biggest costs. However, there are ways to save. Opt for a 'lounas' (lunch special), which offers great value. Utilize the excellent supermarkets for picnics, and take advantage of the many free attractions like parks, Oodi Library, and exploring the different neighborhoods. A public transport day pass is much more economical than single tickets."
      },
      {
            "question": "How many days do you need in Helsinki?",
            "answer": "You can see the main highlights of Helsinki in 2 to 3 full days. This gives you enough time to explore the city center, visit Suomenlinna, and experience a sauna. If you wish to explore more museums, delve deeper into neighborhoods like Kallio, or take a day trip to places like Porvoo or Nuuksio National Park, a stay of 4 to 5 days is recommended."
      },
      {
            "question": "Is Helsinki safe?",
            "answer": "Helsinki is considered one of the safest capital cities in the world. Crime rates are very low, and it's safe to walk around at any time of day or night. As in any major city, standard precautions apply: be aware of your surroundings and keep an eye on your belongings in crowded areas like public transport and markets to avoid petty theft, although even this is rare. The public transport system is reliable and safe."
      },
      {
            "question": "What is Helsinki famous for?",
            "answer": "Helsinki is famous for its unique blend of Eastern and Western European influences, visible in its architecture. It's renowned worldwide as a capital of design, being home to iconic brands like Marimekko and Artek, and architects like Alvar Aalto. The city is also famous for its deeply ingrained sauna culture, its proximity to nature, its beautiful archipelago of over 300 islands, and its starkly beautiful, minimalist aesthetic."
      }
]}
    />
  );
};