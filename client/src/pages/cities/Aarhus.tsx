import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Aarhus: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Aarhus, Denmark (2025 Guide)"}
      description={"So here's what nobody tells you about Aarhus: it's Copenhagen's cooler, more relaxed younger sibling. While everyone rushes off to see the capital, this Danish city is quietly doing its own thing—and doing it really, really well.\n\nThe first thing that hits you is how young and energetic it feels. That's the student population, probably. But there's also this incredible mix of old and new that somehow just works. You'll be walking down cobblestone streets that look like they haven't changed in centuries, then suddenly there's this striking modern art museum with a rainbow on top. Yes, a rainbow. I thought it was weird too until I saw it.\n\nWhat I appreciate about Aarhus is that it doesn't try too hard. The Danes have this concept called 'hygge'—basically the art of being cozy and content—and you can feel it everywhere here. People actually seem to enjoy their lives, which sounds simple but is surprisingly rare in cities. Maybe it's the bike culture, maybe it's the excellent coffee, or maybe they're just onto something we haven't figured out yet."}
      highlights={["ARoS Aarhus Art Museum",
        "Den Gamle By (The Old Town)",
        "Moesgaard Museum (MOMU)",
        "The Latin Quarter (Latinerkvarteret)",
        "The Infinite Bridge (Den Uendelige Bro)"]}
      attractions={[
        {
        name: "ARoS Aarhus Art Museum",
        description: "ARoS is one of Northern Europe's largest art museums, offering ten levels of artistic experiences from the Danish Golden Age to international contemporary art. The museum is renowned for its captivating temporary exhibitions and impressive permanent collection. However, the undeniable crown jewel is 'Your rainbow panorama,' an iconic circular walkway on the roof designed by Olafur Eliasson. This permanent installation offers a breathtaking 360-degree view of the city, filtered through every color of the spectrum. It's an immersive experience that changes with the light and weather, making it a must-see for any visitor. The museum's architecture itself is a work of art, inspired by Dante's 'Divine Comedy,' with a 'hell' in the basement and the rainbow 'heaven' on top.",
        practicalInfo: {
        howToGetThere: "Located at Aros Allé 2, 8000 Aarhus C. It's a short walk from the central train station and city center.",
        openingHours: "Tuesday-Sunday, with late hours on Wednesdays. Closed Mondays. Hours vary, so check the website.",
        cost: "Adults approx. DKK 210. Free for under 18s.",
        website: "https://www.aros.dk/en/"
      }
      },
        {
        name: "Den Gamle By (The Old Town)",
        description: "Step back in time at Den Gamle By, a world-class open-air museum dedicated to Danish urban history and culture. This unique 'living museum' consists of 75 historical buildings relocated from all over Denmark. You can wander through three distinct time periods: a pre-1900s market town with horse-drawn carriages, a 1927 neighborhood showcasing the dawn of modern life, and a 1974 district complete with a hippie commune and a television store. Costumed interpreters bring the past to life, working in shops, homes, and workshops. You can visit the baker, the bookseller, and even see a period-specific car collection. It's an incredibly immersive and educational experience for all ages.",
        practicalInfo: {
        howToGetThere: "Located at Viborgvej 2, 8000 Aarhus C. Accessible by a short bus ride or a 20-minute walk from the city center.",
        openingHours: "Open daily, but hours vary significantly by season. Check the website for the most current information.",
        cost: "Adults approx. DKK 195. Free for under 18s.",
        website: "https://www.dengamleby.dk/en/"
      }
      },
        {
        name: "Moesgaard Museum (MOMU)",
        description: "Nestled in the scenic landscape south of Aarhus, Moesgaard Museum is an architectural marvel dedicated to archaeology and ethnography. The building itself, with its sloping, grass-covered roof, seamlessly blends into the surrounding hills and is an attraction in its own right. Inside, the museum presents the story of humankind through innovative and dramatic exhibitions. The star attraction is the Grauballe Man, the world's best-preserved Iron Age bog body. The exhibits on the Viking Age are particularly compelling, featuring interactive displays and reconstructions that bring the era to life. A walk up the museum's roof provides stunning views of the forest and the sea.",
        practicalInfo: {
        howToGetThere: "Located at Moesgård Allé 15, 8270 Højbjerg. Take bus 18 from the city center directly to the museum.",
        openingHours: "Tuesday-Sunday, with late hours on Wednesdays. Closed Mondays. Seasonal variations apply.",
        cost: "Adults approx. DKK 180. Free for under 18s.",
        website: "https://www.moesgaardmuseum.dk/en/"
      }
      },
        {
        name: "The Latin Quarter (Latinerkvarteret)",
        description: "As the oldest part of Aarhus, the Latin Quarter exudes charm and history. Its narrow cobblestone streets, half-timbered houses, and hidden courtyards create a wonderfully atmospheric setting. This is the perfect place for a leisurely stroll, where you'll discover a vibrant mix of independent designer boutiques, cozy cafes, art galleries, and high-end restaurants. The main streets, such as Mejlgade and Graven, are bustling with life. The area is named after the old Latin School, which was once located near the Aarhus Cathedral. It's the city's creative and historic heart, offering a delightful escape from the main commercial streets.",
        practicalInfo: {
        howToGetThere: "Located in the heart of the city center, just north of the main pedestrian street, Strøget. Easily accessible on foot from anywhere in central Aarhus.",
        openingHours: "Shops generally open 10:00-18:00. Cafes and restaurants have longer hours.",
        cost: "Free to explore.",
        website: "https://www.visitaarhus.com/aarhus/discover/latin-quarter"
      }
      },
        {
        name: "The Infinite Bridge (Den Uendelige Bro)",
        description: "What began as a temporary sculpture for the 'Sculpture by the Sea' festival in 2015 was so beloved it became a permanent fixture. The Infinite Bridge is a large, circular wooden bridge that extends from the coast out over the Bay of Aarhus. Located near Varna Beach and Marselisborg Forest, this unique structure allows you to walk endlessly in a circle while enjoying panoramic views of the sea, the beach, and the forest. It's a simple yet profound piece of art and architecture that invites contemplation and relaxation. It's especially beautiful at sunrise and sunset and is a favorite spot for both locals and tourists during the warmer months.",
        practicalInfo: {
        howToGetThere: "Located at Ørneredevej 3, 8000 Aarhus C. Reachable by bus (e.g., lines 17, 100) or a scenic bike ride from the city center. It's only installed during the summer season (typically April-October).",
        openingHours: "24/7 during its installation period.",
        cost: "Free.",
        website: "https://www.visitaarhus.com/aarhus/plan-your-trip/infinite-bridge-gdk1075672"
      }
      },
        {
        name: "Dokk1",
        description: "More than just a library, Dokk1 is Aarhus's cultural and community hub on the waterfront. This stunning piece of modern architecture was named the world's best public library in 2016. Inside, you'll find not only books but also maker spaces, play areas, study zones, a cafe, and citizen services. Its most unique feature is the 'Gong,' a large tubular bell that chimes every time a new baby is born at the local hospital, a heartwarming celebration of new life in the city. The outdoor areas are equally impressive, featuring innovative playgrounds and spaces to relax by the water. Dokk1 is a living example of Scandinavian design and social infrastructure at its best.",
        practicalInfo: {
        howToGetThere: "Located at Hack Kampmanns Plads 2, 8000 Aarhus C, right on the harbour. It's a short walk from the city center and is a main stop for the light rail (Letbanen).",
        openingHours: "Monday-Friday 8:00-22:00, Saturday-Sunday 10:00-16:00. Check website for changes.",
        cost: "Free to enter and explore.",
        website: "https://dokk1.dk/english"
      }
      },
        {
        name: "Tivoli Friheden",
        description: "For a day of fun and thrills, head to Tivoli Friheden, Aarhus's own amusement park nestled within the beautiful Marselisborg Forest. The park offers a classic amusement park experience with a Danish twist, featuring roller coasters, carousels, games, and rides for all ages. Adrenaline junkies can try the 'Cobra' suspended coaster or the 'Sky Tower,' which offers a 30-meter free fall experience. The park also hosts numerous concerts, festivals, and seasonal events, including a magical Christmas market. It's a great destination for families and anyone looking to add a dose of lighthearted fun to their trip.",
        practicalInfo: {
        howToGetThere: "Located at Skovbrynet 5, 8000 Aarhus C. Easily accessible by bus from the city center.",
        openingHours: "Seasonal opening, typically from April to September, plus special events like Halloween and Christmas. Hours vary daily.",
        cost: "Entrance fee approx. DKK 150. Rides require an additional unlimited ride ticket or individual coupons.",
        website: "https://friheden.dk/en/"
      }
      },
        {
        name: "Marselisborg Palace and Memorial Park",
        description: "Marselisborg Palace is the summer and Christmas residence of the Danish Royal Family. While the palace itself is not open to the public, the beautiful surrounding park is. When the Royal Family is not in residence, you can walk right up to the palace. When they are present, you can witness the charming Changing of the Guard ceremony daily at noon. The palace grounds include a lovely rose garden and expansive lawns leading down towards the sea. Adjacent to the palace is the Marselisborg Memorial Park (Mindeparken), a large public park commemorating Danish soldiers who died in World War I, offering beautiful open spaces and views of the bay.",
        practicalInfo: {
        howToGetThere: "Located at Kongevejen 100, 8000 Aarhus C. A pleasant walk, bike ride, or short bus trip south of the city center.",
        openingHours: "The park is open 24/7. Access to the palace grounds is restricted when the Royal Family is in residence.",
        cost: "Free.",
        website: "https://www.kongehuset.dk/en/the-royal-residences/marselisborg-palace/"
      }
      },
        {
        name: "Aarhus Cathedral (Aarhus Domkirke)",
        description: "Dominating the city skyline, Aarhus Cathedral is a magnificent structure and a key historical landmark. Dedicated to St. Clement, the patron saint of sailors, its construction began in the 12th century. At 93 meters, it's the longest and tallest church in Denmark. Inside, you'll find stunning frescoes dating back to the late 15th century, a beautiful baroque altarpiece, and an impressive pipe organ. For a small fee, you can climb the tower for one of the best panoramic views of the old city, the harbor, and beyond. Its central location makes it an easy and rewarding visit.",
        practicalInfo: {
        howToGetThere: "Centrally located at Domkirkepladsen, 8000 Aarhus C, in the heart of the Latin Quarter.",
        openingHours: "Generally open daily from 9:30-16:00, but may be closed for services. Check for current times.",
        cost: "Free to enter the cathedral. A small fee (approx. DKK 20) applies to climb the tower.",
        website: "https://aarhusdomkirke.dk/"
      }
      },
        {
        name: "The Botanical Garden and Greenhouses (Væksthusene)",
        description: "A green oasis in the city, the Botanical Garden is a wonderful place for a relaxing stroll. The main attraction is the Væksthusene, the large tropical houses. Architecturally striking, these dome-shaped greenhouses transport you to four different climate zones, from the arid desert to the humid rainforest. You can explore a vast collection of plants from around the world, learn about botany, and even spot free-flying butterflies in the tropical house. The surrounding park is perfect for a picnic, with rolling hills, a stream, and plenty of space to unwind. It's a fantastic free attraction for nature lovers.",
        practicalInfo: {
        howToGetThere: "Located at Peter Holms Vej, 8000 Aarhus C, next to Den Gamle By.",
        openingHours: "Park is always open. Greenhouses are open daily, typically 9:00-17:00. Check website.",
        cost: "Free.",
        website: "https://sciencemuseerne.dk/en/the-greenhouses"
      }
      },
        {
        name: "Aarhus Ø and the Harbour Bath",
        description: "Aarhus Ø (East) is the city's newest and most architecturally ambitious district, built on former container port land. It's a showcase of striking modern buildings, including the famous 'Iceberg' residential complex. The highlight for visitors, especially in summer, is the Harbour Bath (Havnebadet). This free, open-air swimming facility, designed by renowned architect Bjarke Ingels, features a 50m lap pool, a diving pool, and children's pools, all filled with clean harbor water. It's a vibrant social spot where locals gather to swim, sunbathe, and socialize, with incredible views of the city and bay.",
        practicalInfo: {
        howToGetThere: "Located at Bassin 7, 8000 Aarhus C. A 15-20 minute walk from the city center, or accessible via the Letbanen.",
        openingHours: "The Harbour Bath is open and staffed during the summer season (June-August). The area is always accessible.",
        cost: "Free.",
        website: "https://www.visitaarhus.com/aarhus/plan-your-trip/harbour-bath-gdk1087114"
      }
      },
        {
        name: "Godsbanen",
        description: "Godsbanen is a former freight yard transformed into a dynamic cultural production center. It's a gritty, creative hub where artists, designers, and performers have their workshops and studios. The atmosphere is raw and industrial, a stark contrast to the polished city center. Visitors can explore the public spaces, see works in progress, attend events, and eat at the excellent restaurant, 'Spiselauget,' which offers high-quality, affordable meals in a communal setting. Godsbanen represents the innovative and collaborative spirit of Aarhus and is the perfect place to experience the city's grassroots creative scene.",
        practicalInfo: {
        howToGetThere: "Located at Skovgaardsgade 3, 8000 Aarhus C, just behind the ARoS museum.",
        openingHours: "The building is generally open to the public daily, but workshop hours vary. Restaurant has its own hours.",
        cost: "Free to explore.",
        website: "https://www.godsbanen.dk/"
      }
      },
        {
        name: "Women's Museum (KØN - Gender Museum Denmark)",
        description: "Located in the city's old town hall, KØN is a pioneering museum dedicated to exploring the history and cultural significance of gender. Its name, 'KØN,' means 'gender' in Danish. The museum offers thought-provoking exhibitions on gender identity, equality, sexuality, and the history of the women's rights movement in Denmark. The exhibits are engaging and often interactive, challenging visitors to reflect on their own perspectives. It provides a fascinating and important look at society from a different angle and is one of the few museums of its kind in the world.",
        practicalInfo: {
        howToGetThere: "Located at Domkirkepladsen 5, 8000 Aarhus C, opposite the Cathedral.",
        openingHours: "Tuesday-Sunday, 10:00-17:00 (late hours Thursdays). Closed Mondays.",
        cost: "Adults approx. DKK 95.",
        website: "https://konmuseum.dk/en/"
      }
      },
        {
        name: "Viking Museum (Vikingemuseet)",
        description: "Discover the very origins of Aarhus at this small but fascinating underground museum. Located beneath the Nordea bank right in the city center, the Viking Museum is situated on the exact site of a Viking Age settlement. The museum was created after archaeological findings were unearthed during the bank's construction. You can see artifacts discovered on-site, a model of the Viking town of 'Aros,' and learn about the city's foundation over 1200 years ago. It's a quick visit but offers a powerful connection to the deep history lying just beneath your feet as you explore modern Aarhus.",
        practicalInfo: {
        howToGetThere: "Located at Skt. Clemens Torv 6, 8000 Aarhus C. Entrance is inside the Nordea bank building.",
        openingHours: "Monday-Friday 10:15-16:00 (Thursdays until 17:00). Closed weekends.",
        cost: "Adults approx. DKK 30. Free for under 18s.",
        website: "https://www.moesgaardmuseum.dk/en/visit-us/viking-museum/"
      }
      },
        {
        name: "Steno Museum",
        description: "Part of Aarhus University's Science Museums, the Steno Museum is dedicated to the history of science and medicine. It offers a captivating journey through scientific discoveries, from astronomy to the history of surgery. Highlights include a beautiful planetarium with regular shows, a collection of historical medical instruments that are both fascinating and terrifying, and a 'Garden of Physics' with interactive outdoor exhibits. It's a hands-on museum that makes complex subjects accessible and fun for both adults and children, offering a different kind of cultural experience.",
        practicalInfo: {
        howToGetThere: "Located at C. F. Møllers Allé 2, 8000 Aarhus C, in the University Park.",
        openingHours: "Tuesday-Sunday, 10:00-16:00. Closed Mondays.",
        cost: "Adults approx. DKK 50. Free for under 18s.",
        website: "https://sciencemuseerne.dk/en/steno-museum"
      }
      }
      ]}
      logistics={{
        gettingAround: "Aarhus is a very walkable and bike-friendly city, which is the best way to explore the center. The city has an excellent public transport system, including city buses and the 'Letbanen' light rail, which connects the city center with the suburbs and surrounding areas. You can buy tickets via the Midttrafik app or at machines. Renting a bike is highly recommended for an authentic Danish experience.",
        whereToStay: "For first-time visitors, the city center (Indre By) or the charming Latin Quarter are ideal, putting you within walking distance of major attractions, shops, and restaurants. The Frederiksbjerg district offers a more local, 'hygge' vibe with great food markets and cafes. For modern design lovers, Aarhus Ø provides stunning architecture and waterfront views. Hotel recommendations include Hotel Royal (Luxury), Villa Provence (Boutique), and Wakeup Aarhus (Budget).",
        bestTimeToVisit: "The best time to visit Aarhus is during the summer months (June to August) when the weather is warmest, days are long, and the city is alive with outdoor cafes, festivals, and events at the Harbour Bath. The shoulder seasons of late spring (May) and early autumn (September) are also excellent, offering pleasant weather with fewer crowds. Winter can be cold and dark, but the city becomes magical with its beautiful Christmas markets and cozy atmosphere.",
        suggestedItinerary: "Day 1: Historical Heart. Start at Den Gamle By (The Old Town), then walk to Aarhus Cathedral and climb the tower. Spend the afternoon getting lost in the cobblestone streets of the Latin Quarter and visit the Viking Museum. Day 2: Art & Nature. Dedicate the morning to ARoS, including the 'Your rainbow panorama'. In the afternoon, take a bus to Moesgaard Museum. Finish the day with a walk on The Infinite Bridge (seasonal). Day 3: Modern Aarhus & Culture. Explore the modern architecture of Aarhus Ø and Dokk1. In the afternoon, discover the creative hub of Godsbanen and finish with a visit to the Botanical Garden's greenhouses."
      }}
      faqs={[{
          question: "Is Aarhus expensive?",
          answer: "Like the rest of Denmark, Aarhus can be expensive compared to other European destinations, particularly for dining out and alcohol. However, it is generally more affordable than Copenhagen. You can save money by utilizing supermarkets for some meals, enjoying the many free attractions (like Dokk1, Botanical Gardens, The Infinite Bridge), and buying a transport pass if you plan to use buses or the light rail frequently. Look for lunch deals ('frokosttilbud') which are often cheaper than dinner."
        },
        {
          question: "How many days do you need in Aarhus?",
          answer: "To comfortably see the main highlights of Aarhus, a visit of 2 to 3 full days is recommended. This allows enough time to explore Den Gamle By, ARoS, Moesgaard Museum, and the city center without rushing. If you want to explore the surrounding nature, like the beaches and forests, or take day trips, extending your stay to 4 or 5 days would be ideal."
        },
        {
          question: "Is Aarhus safe?",
          answer: "Aarhus is a very safe city with a low crime rate. Visitors can feel secure walking around at any time of day or night. The biggest safety concern is bicycle traffic; always be aware and look both ways before crossing streets or bike lanes, as cyclists move quickly and expect pedestrians to respect their paths. Standard travel precautions, like being mindful of your belongings in crowded areas, are always advised."
        },
        {
          question: "What is Aarhus famous for?",
          answer: "Aarhus is famous for being a major European Capital of Culture (2017) and a vibrant university city. Its most iconic landmarks are the ARoS Art Museum with its 'Your rainbow panorama' roof, the immersive open-air museum Den Gamle By (The Old Town), and the architecturally stunning Moesgaard Museum. It's also known for its rich Viking history, its charming Latin Quarter, and its innovative modern architecture along the harborfront."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1549553443-de5431c604ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxBYXJodXMlMjB0cmF2ZWx8ZW58MHwwfHx8MTc1MjEzOTQ1OXww&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};