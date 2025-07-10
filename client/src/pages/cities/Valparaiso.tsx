import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Valparaiso: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Valparaiso, Chile (2025 Guide)"}
      description={"Clinging precariously to a series of steep hills overlooking the Pacific, Valparaiso is Chile's chaotic, colorful, and poetic soul. A UNESCO World Heritage city, this vibrant port is a labyrinth of winding alleys, creaking funiculars, and decaying mansions painted in every hue imaginable. Every corner reveals a masterpiece of street art, a hidden café, or a breathtaking viewpoint. Once a bustling hub for global trade before the Panama Canal, it now thrives on a bohemian energy that has inspired artists and writers for generations, most notably the poet Pablo Neruda. Far more than just a city, Valparaíso is an experience, a living museum waiting to be explored. To truly capture its spirit, you must wander its streets, ride its historic lifts, and dive into the creative chaos. This guide will show you all the best things to do in Valparaiso for an unforgettable adventure."}
      imageUrl={""}
      highlights={["Cerro Concepción & Cerro Alegre",
        "La Sebastiana Museum (Pablo Neruda's House)",
        "Ride the Historic Funiculars (Ascensores)",
        "Valparaiso Street Art Tour",
        "Muelle Prat and the Harbor"]}
      galleryImages={[
        { url: "", alt: "Valparaiso landmark 1", caption: "Valparaiso landmark 1 - placeholder" },
        { url: "", alt: "Valparaiso landmark 2", caption: "Valparaiso landmark 2 - placeholder" },
        { url: "", alt: "Valparaiso landmark 3", caption: "Valparaiso landmark 3 - placeholder" },
        { url: "", alt: "Valparaiso landmark 4", caption: "Valparaiso landmark 4 - placeholder" },
        { url: "", alt: "Valparaiso landmark 5", caption: "Valparaiso landmark 5 - placeholder" },
        { url: "", alt: "Valparaiso landmark 6", caption: "Valparaiso landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Cerro Concepción & Cerro Alegre",
        description: "These two adjacent hills form the heart of Valparaiso's UNESCO-listed historic quarter and are the epicenter of its charm. Getting lost here is the main objective. Wander through a maze of cobblestone streets like Paseo Gervasoni and Paseo Atkinson, flanked by brightly painted corrugated-iron houses, charming boutiques, and art galleries. The area is brimming with trendy cafes, boutique hotels, and restaurants with terraces offering spectacular views of the harbor.\n\nThis is the most picturesque and tourist-friendly part of the city, where every turn presents a new photo opportunity. The two hills are connected by narrow passageways and staircases, each adorned with intricate murals and mosaics. It’s the perfect introduction to the city's bohemian atmosphere and architectural anarchy.",
        practicalInfo: {
        howToGetThere: "Accessible via Ascensor El Peral (from Plaza Sotomayor) or Ascensor Concepción. You can also walk up from the 'plan' (flat part of the city), but the ascensores are part of the experience.",
        openingHours: "24/7, but best explored during daylight hours.",
        cost: "Free to walk around. Funiculars cost approx. 100-300 CLP.",
        website: "https://www.chile.travel/en/valparaiso"
      }
      },
        {
        name: "La Sebastiana Museum (Pablo Neruda's House)",
        description: "Perched high on Cerro Florida with commanding views of the bay, La Sebastiana was one of three homes belonging to Nobel laureate Pablo Neruda. The poet wanted a house that felt like it was floating in the air yet firmly planted on the ground, and this quirky, five-story building perfectly captures his eccentric vision. Each room is a treasure trove of his collections, from old maps and ship figureheads to whimsical glassware and furniture.\n\nThe audio guide (available in several languages) is essential, providing intimate details about Neruda's life, his love for the sea, and the stories behind his eclectic possessions. The panoramic views from the top-floor study are arguably the best in all of Valparaiso, offering a glimpse into the city that so deeply inspired him.",
        practicalInfo: {
        howToGetThere: "Located on Ferrari 692, Cerro Florida. It's a steep walk or a short taxi/colectivo ride from the city center.",
        openingHours: "Tuesday-Sunday, 10:00 AM - 6:00 PM (times may vary by season). Closed on Mondays.",
        cost: "Approx. 8,000 CLP for foreign adults.",
        website: "https://www.fundacionneruda.org/en/la-sebastiana-museum-house"
      }
      },
        {
        name: "Ride the Historic Funiculars (Ascensores)",
        description: "Valparaiso's famous 'ascensores' are more than just a mode of transport; they are a living part of the city's heritage. These rickety, wooden cable cars have been hauling residents up the steep hillsides since the late 19th century. Of the nearly 30 that once operated, only a handful remain functional, but riding one is an essential Valparaiso experience. They offer a practical solution to navigating the vertical city and provide a charming, historical perspective.\n\nThe most popular and well-maintained include Ascensor El Peral, which connects Plaza Sotomayor to Paseo Yugoslavo on Cerro Alegre, and Ascensor Concepción, the oldest of them all (1883). The short, rattling journey inside the wooden box is a trip back in time and saves your legs a strenuous climb.",
        practicalInfo: {
        howToGetThere: "Funiculars are located at the base of various hills, connecting the 'plan' with the 'cerros'. Look for signs pointing to 'Ascensor'.",
        openingHours: "Generally from 7:00 AM to 10:00 PM, but hours can be erratic.",
        cost: "Very cheap, typically 100-300 CLP per ride.",
        website: "N/A"
      }
      },
        {
        name: "Valparaiso Street Art Tour",
        description: "Valparaiso is a world-renowned canvas for street art. The entire city functions as an open-air gallery, with artists from Chile and around the globe leaving their mark on its walls, staircases, and doorways. The art ranges from simple tags to enormous, politically charged murals that cover entire buildings. A guided tour is highly recommended to understand the context, learn about the artists, and distinguish between commissioned murals and illegal graffiti.\n\nTours often focus on the vibrant art scenes of Cerro Alegre, Cerro Concepción, and the Museo a Cielo Abierto. Knowledgeable guides share stories behind the pieces, introducing you to famous works like the 'We are not hippies, we are happies' mural. Alternatively, you can simply wander and discover the art for yourself—it’s an endless treasure hunt.",
        practicalInfo: {
        howToGetThere: "Tours typically start in Plaza Sotomayor or Plaza Aníbal Pinto. Many are 'free' (tip-based).",
        openingHours: "Tours usually run daily in the morning and afternoon.",
        cost: "Free (tip-based) tours are common, or private tours for a fixed fee.",
        website: "Search for 'Valpo Street Art Tours' or 'Tours 4 Tips'."
      }
      },
        {
        name: "Muelle Prat and the Harbor",
        description: "To understand Valparaiso, you must see its port. Muelle Prat is the main pier, a bustling hub of activity where you can feel the city's maritime pulse. Stroll along the dock, watch the massive container ships being loaded, and observe the Chilean Navy vessels. The area is often filled with artisans selling souvenirs and street performers.\n\nThe highlight is taking a 30-minute boat tour around the harbor. These small boats offer a fantastic perspective of the city's amphitheater-like geography, showing the colorful houses cascading down the hills. You'll also get up close to a colony of lazy sea lions basking on a buoy and see the naval ships from the water. It’s a cheap, cheerful, and fantastic way to appreciate the scale of Valparaiso.",
        practicalInfo: {
        howToGetThere: "Located directly in front of Plaza Sotomayor.",
        openingHours: "The pier is always open. Boat tours run throughout the day, typically 10:00 AM - 6:00 PM.",
        cost: "Free to walk the pier. Boat tours are approx. 4,000-5,000 CLP per person.",
        website: "N/A"
      }
      },
        {
        name: "Plaza Sotomayor",
        description: "Plaza Sotomayor is Valparaiso's most significant civic square and the gateway to the port. The plaza is dominated by the striking blue Edificio Armada de Chile (Chilean Navy Headquarters) and the central Monumento a los Héroes de Iquique, a mausoleum honoring the sailors who died in the 1879 Battle of Iquique. The monument is guarded by naval officers and serves as a powerful symbol of Chile's maritime history.\n\nThis grand, open space provides a stark contrast to the narrow, winding streets of the hills above. It's the perfect starting point for any city tour, as it's where the 'plan' meets the 'cerros' and where Muelle Prat and the historic district begin. The surrounding architecture reflects the city's former glory as a major international port.",
        practicalInfo: {
        howToGetThere: "Centrally located in the flat 'plan' area of the city. Easily accessible by foot, bus, or metro.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Palacio Baburizza & Paseo Yugoslavo",
        description: "Sitting elegantly at the end of Paseo Yugoslavo on Cerro Alegre, the Palacio Baburizza is one of Valparaiso's most beautiful buildings. This Art Nouveau mansion, built in 1916, now houses the Municipal Museum of Fine Arts. The building itself is as much of an attraction as the art inside, with its eclectic towers, intricate details, and stunning stained-glass windows.\n\nThe museum's collection features a significant array of Chilean and European art from the 19th and 20th centuries. After visiting, take a stroll along Paseo Yugoslavo, a scenic walkway that offers breathtaking views of the city and harbor below. It's a perfect spot to relax and soak in the atmosphere of Valparaiso.",
        practicalInfo: {
        howToGetThere: "Accessible via Ascensor El Peral from Plaza Sotomayor.",
        openingHours: "Tuesday-Sunday, 10:00 AM - 6:00 PM.",
        cost: "Approx. 4,000 CLP for foreign adults.",
        website: "https://www.museobaburizza.cl/"
      }
      },
        {
        name: "Museo a Cielo Abierto (Open Air Museum)",
        description: "Before the entire city became a street art gallery, there was the Museo a Cielo Abierto. Initiated in 1969 by students from the local university's art institute, this project was one of the first of its kind in the world. It consists of 20 murals painted by renowned Chilean artists on the walls of houses along a specific path on Cerro Bellavista.\n\nWhile some of the original murals have faded or been painted over, the route remains a fascinating cultural walk. It’s a more curated and historic look at the city's public art movement compared to the more modern and chaotic works found elsewhere. Following the numbered signs takes you on a unique journey through a quieter, more residential hill.",
        practicalInfo: {
        howToGetThere: "Located on Cerro Bellavista. You can start the walk from Calle Ferrari near La Sebastiana or take Ascensor Espíritu Santo.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Paseo 21 de Mayo",
        description: "For one of the most classic and expansive panoramic views of Valparaiso, head to Paseo 21 de Mayo. This long, wide promenade is perched atop Cerro Artillería and offers an unparalleled vista of the entire harbor, the container port, the downtown area, and the colorful hills beyond. It's a postcard-perfect viewpoint where you can truly appreciate the city's unique geography.\n\nThe paseo is lined with a bustling craft market, making it a great place to shop for souvenirs like alpaca sweaters, lapis lazuli jewelry, and other local handicrafts. The best way to reach it is by riding the historic Ascensor Artillería, an experience in itself that adds to the charm of the visit.",
        practicalInfo: {
        howToGetThere: "Take the Ascensor Artillería from Plaza Aduana.",
        openingHours: "The promenade is always open; the market operates during daytime hours.",
        cost: "Free to visit. The ascensor costs around 300 CLP.",
        website: "N/A"
      }
      },
        {
        name: "Mercado Cardonal",
        description: "For an authentic slice of local life, visit Mercado Cardonal. This bustling, two-story market is a sensory overload in the best way possible. The ground floor is a riot of color and noise, with vendors hawking fresh fruits, vegetables, cheeses, meats, and an impressive array of seafood fresh from the Pacific. It's a fantastic place to see the ingredients that form the basis of Chilean cuisine.\n\nHead to the second floor for the real treat: a collection of simple, no-frills eateries serving incredibly fresh and affordable seafood lunches. Squeeze into a seat at one of the lively 'comedores' and order a classic Chilean dish like 'paila marina' (seafood stew) or fried fish with a side salad. It's a delicious, chaotic, and truly local experience.",
        practicalInfo: {
        howToGetThere: "Located on Avenida Brasil in the Almendral neighborhood, a short walk or bus ride from the city center.",
        openingHours: "Market is open daily, roughly 8:00 AM - 5:00 PM. Restaurants serve lunch.",
        cost: "Free to enter. A hearty lunch costs around 8,000-12,000 CLP.",
        website: "N/A"
      }
      },
        {
        name: "Paseo Gervasoni",
        description: "Paseo Gervasoni is one of the most iconic walkways in Valparaiso, located in the heart of Cerro Concepción. This pedestrian-only street offers stunning views of the bay and is lined with some of the city's most beautiful historic buildings. It is home to the elegant Gran Hotel Gervasoni and several charming cafes where you can grab a coffee and watch the world go by.\n\nThe paseo begins at the top of the Ascensor Concepción, the city's first funicular, making it easily accessible. It's a relatively short walk but packs in a lot of character, including artisan shops and access to the famous 'Piano Staircase' nearby. It perfectly encapsulates the romantic, slightly faded grandeur of 19th-century Valparaiso.",
        practicalInfo: {
        howToGetThere: "Take the Ascensor Concepción from Calle Prat, or walk up from the 'plan'.",
        openingHours: "24/7.",
        cost: "Free to walk. Ascensor costs around 100 CLP.",
        website: "N/A"
      }
      },
        {
        name: "Cementerio de Disidentes (Dissidents' Cemetery)",
        description: "For a dose of history and tranquility away from the bustling streets, visit the Dissidents' Cemetery on Cerro Panteón. Founded in 1825, this cemetery was created for the city's European immigrants—mostly British, German, and French protestants—who were not allowed burial in Catholic grounds. The weathered tombstones and ornate mausoleums tell the stories of the engineers, merchants, and sailors who helped build Valparaiso into a thriving port.\n\nIt's a peaceful and beautifully maintained place, offering a quiet moment for reflection and a different perspective on the city's multicultural history. The adjacent Catholic cemetery (Cementerio N°1) is also worth a look for its elaborate tombs.",
        practicalInfo: {
        howToGetThere: "Located on Cerro Panteón. It's a steep walk; a taxi or colectivo is recommended.",
        openingHours: "Monday-Sunday, 10:00 AM to 5:30 PM.",
        cost: "Free, but a small donation is appreciated.",
        website: "N/A"
      }
      },
        {
        name: "Parque Cultural Ex-Cárcel",
        description: "This unique cultural center represents Valparaiso's transformation. What was once a notorious prison is now a vibrant public space for arts and culture. The Parque Cultural Ex-Cárcel has preserved parts of the old jail, including the gun-powder magazine built in 1811, while adding modern structures for theater, dance, and art exhibitions.\n\nThe sprawling park offers green space to relax and incredible views of the city. It's a dynamic place where you might stumble upon a dance rehearsal, an art installation, or a community event. It symbolizes the city's spirit of renewal and creative reuse, making it a fascinating stop for those interested in contemporary culture.",
        practicalInfo: {
        howToGetThere: "Located on Cerro Cárcel. It's a 15-minute walk from Plaza Aníbal Pinto.",
        openingHours: "Tuesday-Sunday, 10:00 AM - 7:00 PM. Park grounds are generally accessible.",
        cost: "Free to enter; some events may have a fee.",
        website: "https://parquecultural.cl/"
      }
      },
        {
        name: "Caleta Portales",
        description: "For a raw, authentic look at Valparaiso's fishing industry, head to Caleta Portales. This bustling fishing cove, located at the eastern end of the city, is where local fishermen bring in their daily catch. The beach is a chaotic scene of small boats, squawking gulls, barking sea lions, and huge pelicans all vying for a share of the scraps.\n\nYou can watch fishermen mending their nets, selling their catch directly from their boats, and enjoy some of the freshest seafood in the city at the simple restaurants lining the shore. It's a gritty, smelly, and utterly fascinating experience that connects you directly to the Pacific Ocean, the lifeblood of Valparaiso.",
        practicalInfo: {
        howToGetThere: "Take the Merval train to Portales station, or a local bus ('micro') heading towards Viña del Mar.",
        openingHours: "Most active in the morning and around midday.",
        cost: "Free to visit.",
        website: "N/A"
      }
      },
        {
        name: "Get Lost in the 'Pasajes' and 'Escaleras'",
        description: "Perhaps the greatest attraction in Valparaiso isn't a single sight, but the act of exploration itself. The city is a web of 'pasajes' (passageways) and 'escaleras' (staircases) that connect the different levels of the hills. Ditching the map and allowing yourself to get lost is the best way to uncover the city's hidden secrets: a tiny art studio, a staircase painted like piano keys, a secluded viewpoint, or a charming local bar.\n\nThis isn't about ticking boxes but about immersing yourself in the environment. Let curiosity be your guide as you climb colorful stairs, peek down narrow alleys, and discover the spontaneous art and unexpected beauty that define Valparaiso. This unstructured wandering is where you'll find the true 'Joya del Pacífico' (Jewel of the Pacific).",
        practicalInfo: {
        howToGetThere: "Start in Cerro Alegre or Cerro Concepción and just start walking.",
        openingHours: "Best during daylight hours for safety and visibility.",
        cost: "Free.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Walking is essential for exploring the hills, but be prepared for steep climbs. The historic 'ascensores' (funiculars) are a must-try for getting up and down. For longer distances, 'colectivos' (fixed-route shared taxis) are cheap and efficient. Local buses, or 'micros', cover the entire city and are very inexpensive. The Merval train connects Valparaiso with nearby Viña del Mar and other coastal towns.",
        whereToStay: "The best and most charming areas to stay are Cerro Alegre and Cerro Concepción. They are safe, picturesque, and filled with boutique hotels, B&Bs, and excellent restaurants. Recommended hotels include Hotel Fauna for its incredible views and rooftop bar, Casa Higueras for luxury, and Zerohotel for style. For budget travelers, hostels in these areas are also available. The 'plan' (flat downtown area) has cheaper options but lacks the charm and can feel less safe at night.",
        bestTimeToVisit: "Valparaiso has a mild, Mediterranean climate. The best times to visit are during the spring (September-November) and fall (March-May). During these months, the weather is pleasant, and the crowds are smaller than in the summer peak. Summer (December-February) is warm and sunny but can be crowded and more expensive. Winter (June-August) is cooler and can bring rain.",
        suggestedItinerary: "A Simple 3-Day Itinerary:\nDay 1: Explore Cerro Alegre & Cerro Concepción. Ride Ascensor El Peral and Concepción. Enjoy a street art tour in the afternoon and have dinner with a view.\nDay 2: Visit Plaza Sotomayor and Muelle Prat for a morning boat tour. In the afternoon, visit La Sebastiana (Neruda's House) and the nearby Museo a Cielo Abierto.\nDay 3: Experience local life at Mercado Cardonal for lunch. Take Ascensor Artillería to Paseo 21 de Mayo for panoramic views and souvenir shopping. Explore the Parque Cultural Ex-Cárcel."
      }}
      faqs={[{
          question: "Is Valparaiso expensive?",
          answer: "Valparaiso is generally more affordable than Chile's capital, Santiago. Accommodation can range from 15,000 CLP for a dorm bed to over 150,000 CLP for a luxury hotel. A meal at a local eatery in Mercado Cardonal might cost 8,000 CLP, while a dinner in a touristy restaurant on Cerro Alegre could be 20,000-25,000 CLP. Activities like funicular rides and bus fares are very cheap (under 500 CLP). Overall, it can be visited on a backpacker's budget or enjoyed with more mid-range comforts."
        },
        {
          question: "How many days do you need in Valparaiso?",
          answer: "Two to three full days is the ideal amount of time to explore Valparaiso. This allows you to wander the main hills (Alegre and Concepción), visit a museum or two like La Sebastiana, take a boat tour, and soak in the atmosphere without rushing. A day trip from Santiago is possible, but you will only scratch the surface. With three days, you can explore at a more relaxed pace and visit less-crowded areas."
        },
        {
          question: "Is Valparaiso safe?",
          answer: "Valparaiso has a reputation for petty crime, so it's important to be vigilant. Stick to the main tourist areas like Cerro Alegre and Cerro Concepción, which are generally safe during the day. Be cautious in the 'plan' (downtown) area, especially after dark. Avoid walking on deserted hills or stairs at night. Do not flash expensive items like cameras or phones, and always be aware of your surroundings, particularly in crowds. Use common sense, and you are likely to have a trouble-free visit."
        },
        {
          question: "What is Valparaiso famous for?",
          answer: "Valparaiso is famous for its UNESCO World Heritage status, awarded for its unique urban landscape and architecture. It's renowned for its brightly colored houses clinging to steep hillsides, its vibrant and world-class street art scene, and its historic 'ascensores' (funiculars). The city is also known for its bohemian, artistic atmosphere and was home to Chile's most famous poet, Pablo Neruda. Its history as a vital South American port in the 19th century has left a legacy of grand, albeit decaying, architecture."
        }
      ]}
    />
  );
};