import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Cartagena: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Cartagena, Colombia (2025 Guide)"}
      description={"Steeped in history and sizzling with Caribbean energy, Cartagena de Indias is a city that captures the imagination. Encased within centuries-old stone walls, its vibrant colonial streets are a kaleidoscope of candy-colored buildings, overflowing bougainvillea, and horse-drawn carriages. This UNESCO World Heritage site is where tales of pirates and treasure meet the rhythm of cumbia and the flavors of the coast. Beyond the historic center, you'll find bohemian neighborhoods pulsating with street art and nearby islands with turquoise waters and white-sand beaches. Whether you're a history buff, a sun-seeker, or a foodie, you'll find an unforgettable adventure. From grand fortresses to hidden plazas, discovering the best things to do in Cartagena is a journey into the heart of Colombian magic."}
      highlights={["Walled City (Ciudad Amurallada)",
        "Castillo de San Felipe de Barajas",
        "Getsemaní Neighborhood",
        "Rosario Islands (Islas del Rosario)",
        "Puerta del Reloj (Clock Tower)"]}
      galleryImages={[
        { url: "", alt: "Cartagena landmark 1", caption: "Cartagena landmark 1 - placeholder" },
        { url: "", alt: "Cartagena landmark 2", caption: "Cartagena landmark 2 - placeholder" },
        { url: "", alt: "Cartagena landmark 3", caption: "Cartagena landmark 3 - placeholder" },
        { url: "", alt: "Cartagena landmark 4", caption: "Cartagena landmark 4 - placeholder" },
        { url: "", alt: "Cartagena landmark 5", caption: "Cartagena landmark 5 - placeholder" },
        { url: "", alt: "Cartagena landmark 6", caption: "Cartagena landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Walled City (Ciudad Amurallada)",
        description: "The soul of Cartagena resides within its magnificent Walled City, a UNESCO World Heritage site. Getting lost here is the main attraction. Wander through a labyrinth of narrow cobblestone streets, marveling at the perfectly preserved colonial architecture with its iconic wooden balconies draped in vibrant flowers. Every corner reveals a new discovery: a hidden plaza, a grand cathedral, a charming café, or a boutique selling local crafts.\n\nAs the sun sets, the city comes alive in a different way. The warm glow of gas lamps illuminates the streets, romantic music spills from restaurants, and the air fills with the clip-clop of horse-drawn carriages. Walking atop the fortified walls offers breathtaking views of the city on one side and the Caribbean Sea on the other, providing a perfect vantage point to appreciate the history and beauty of this enchanting place.",
        practicalInfo: {
        howToGetThere: "Located in the historic center. It's best explored on foot. Taxis and ride-sharing apps can drop you at any of the main entrances.",
        openingHours: "24/7, though shops and restaurants have their own hours.",
        cost: "Free to enter and walk around.",
        website: "https://colombia.travel/en/cartagena"
      }
      },
        {
        name: "Castillo de San Felipe de Barajas",
        description: "Dominating the city's skyline from its strategic perch on San Lázaro hill, the Castillo de San Felipe de Barajas is the greatest fortress ever built by the Spanish in their colonies. This formidable stone structure is an engineering marvel, designed with a complex series of tunnels, ramparts, and batteries that successfully repelled countless pirate and enemy attacks.\n\nExploring the castle is an adventure in itself. Climb its steep ramps to the top for unparalleled panoramic views of both the old and new city. Delve into the dark, labyrinthine tunnels below, which were designed to amplify sound, allowing defenders to hear the quietest approach of an enemy's footstep. It’s a fascinating glimpse into Cartagena's military past and a must-visit for any history enthusiast.",
        practicalInfo: {
        howToGetThere: "A 15-20 minute walk from the Getsemaní neighborhood or a short taxi ride from the Walled City.",
        openingHours: "8:00 AM - 6:00 PM daily.",
        cost: "Approximately 27,000 COP for foreigners.",
        website: "https://www.fortificacionescartagena.com.co/"
      }
      },
        {
        name: "Getsemaní Neighborhood",
        description: "Just outside the main Walled City, Getsemaní is Cartagena's vibrant, bohemian heart. Once a humble district, it has transformed into a hip hub of art, music, and culture while retaining its authentic local character. The streets are a living gallery, adorned with colorful murals and street art that tell stories of the community's history and spirit. The central Plaza de la Trinidad is the neighborhood's living room, where locals and travelers gather nightly to watch street performers, listen to music, and enjoy cheap eats from food carts.\n\nBy day, it's a fantastic place to wander, camera in hand, capturing the colorful flags and umbrellas that canopy its alleys. By night, it buzzes with energy from its many salsa clubs, rooftop bars, and innovative restaurants. Getsemaní offers a more raw and authentic Cartagena experience compared to the polished perfection of the Walled City.",
        practicalInfo: {
        howToGetThere: "A 5-minute walk from the Clock Tower entrance of the Walled City.",
        openingHours: "24/7, with peak activity in the evenings.",
        cost: "Free to explore.",
        website: "N/A"
      }
      },
        {
        name: "Rosario Islands (Islas del Rosario)",
        description: "Escape the city heat with a day trip to the stunning Rosario Islands, a protected national park comprising 27 coral islands scattered in the turquoise Caribbean Sea. This archipelago is the epitome of a tropical paradise, offering crystal-clear waters, vibrant coral reefs, and pristine white-sand beaches. Most visitors arrive via speedboat tours that depart from the city's main dock.\n\nActivities here are centered around the water. You can go snorkeling or diving to witness the rich marine life, relax on the beach at a private club, kayak through mangrove lagoons, or visit the Oceanario, an open-water aquarium. Whether you're looking for adventure or pure relaxation, a trip to the Rosario Islands is an essential part of the Cartagena experience.",
        practicalInfo: {
        howToGetThere: "Book a day tour online or at the Muelle de la Bodeguita tourist dock. Boats typically depart between 8:00 AM and 9:00 AM.",
        openingHours: "Tours typically run from 9:00 AM to 5:00 PM.",
        cost: "Tours range from 150,000 to 400,000+ COP, plus a small port tax.",
        website: "https://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-caribe/parque-nacional-natural-corales-del-rosario-y-de-san-bernardo/"
      }
      },
        {
        name: "Puerta del Reloj (Clock Tower)",
        description: "The majestic Puerta del Reloj, or Clock Tower, serves as the iconic main entrance to the historic Walled City. This striking yellow gateway, crowned with an elegant clock tower added in the 19th century, was once the only way into the fortified town, connected by a drawbridge over a moat. Passing through its central arch feels like stepping back in time.\n\nThe plaza just inside the gate, Plaza de los Coches, is a bustling hub of activity. Historically a slave market, it is now filled with candy vendors selling traditional coconut sweets from colorful carts. The area is flanked by colonial archways and is a popular meeting point and a fantastic spot for photos, especially when it's beautifully lit at night.",
        practicalInfo: {
        howToGetThere: "Located at the main entrance to the Walled City, connecting Getsemaní and the historic center.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Convento de la Popa",
        description: "For the most breathtaking panoramic views of Cartagena, make your way to the Convento de la Popa. Perched atop the highest hill in the city, this former Augustinian convent offers a 360-degree perspective of the Caribbean Sea, the Walled City, Bocagrande's modern skyline, and the sprawling neighborhoods beyond. The convent itself is beautiful, featuring a flower-filled cloister, a charming chapel, and an image of the Virgen de la Candelaria, the city's patron saint.\n\nThe name 'La Popa' comes from the hill's resemblance to the stern (or 'poop deck') of a ship. The journey up is steep, but the reward is an unparalleled photo opportunity and a peaceful escape from the bustling city below.",
        practicalInfo: {
        howToGetThere: "It's highly recommended to take a taxi or a ride-sharing service to the top, as the road is steep and the surrounding area is not safe for walking.",
        openingHours: "8:30 AM - 5:30 PM daily.",
        cost: "Approximately 13,000 COP for entry, plus taxi fare.",
        website: "N/A"
      }
      },
        {
        name: "Plaza de Bolívar",
        description: "Named after the liberator Simón Bolívar, whose statue stands proudly in the center, this leafy, shaded square is a tranquil oasis in the heart of the Walled City. Surrounded by some of Cartagena's most important and elegant colonial buildings, it’s a perfect spot to rest on a park bench, people-watch, and escape the Caribbean sun.\n\nThe plaza is flanked by the grand Palacio de la Inquisición on one side and the city's Gold Museum on another. Street performers and vendors add to the lively atmosphere, while the surrounding buildings with their intricate balconies provide a stunning backdrop. It's a central point of history and culture that you'll likely pass through multiple times during your explorations.",
        practicalInfo: {
        howToGetThere: "Centrally located within the Walled City, a short walk from any point inside the walls.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Palacio de la Inquisición (Palace of the Inquisition)",
        description: "Located on the Plaza de Bolívar, this beautiful building with a magnificent baroque entrance hides a dark past. It was the seat of the Tribunal of the Holy Office of the Inquisition, which judged and punished heresy from 1610 until Colombia's independence. Today, it serves as a historical museum detailing this grim period as well as showcasing pre-Columbian, colonial, and independence-era artifacts.\n\nThe exhibits include various instruments of torture, which can be unsettling but provide a powerful look into this chapter of history. Beyond the inquisition displays, the museum offers a broader history of Cartagena, making it a comprehensive and fascinating (if sometimes somber) visit.",
        practicalInfo: {
        howToGetThere: "On the west side of Plaza de Bolívar in the Walled City.",
        openingHours: "9:00 AM - 6:00 PM (Mon-Sat), 10:00 AM - 4:00 PM (Sun).",
        cost: "Approximately 23,000 COP.",
        website: "https://www.muhca.gov.co/"
      }
      },
        {
        name: "Las Bóvedas",
        description: "Built into the city walls, Las Bóvedas (The Vaults) are a series of 23 dungeons with striking archways. Constructed in the late 18th century, they were originally used for military storage and later served as a prison during the wars of independence. Today, these dark, cavernous spaces have been transformed into something much more cheerful.\n\nEach vault now houses a small artisan shop or souvenir store, making it one of the best places in the city to shop for local handicrafts, textiles like Wayuu bags, leather goods, and other souvenirs. The bright yellow facade and the sheer number of shops make it a lively and interesting stop, blending history with commerce.",
        practicalInfo: {
        howToGetThere: "Located in the San Diego neighborhood of the Walled City, built into the wall section nearest the sea.",
        openingHours: "Most shops are open from 10:00 AM to 7:00 PM daily.",
        cost: "Free to browse.",
        website: "N/A"
      }
      },
        {
        name: "San Pedro Claver Church and Monastery",
        description: "This magnificent church and its adjoining monastery are dedicated to Saint Peter Claver, a Spanish Jesuit priest who dedicated his life to ministering to the enslaved people brought to Cartagena from Africa. He became known as the 'Apostle of the slaves' and his remains are preserved in a glass coffin under the main altar. The imposing stone church dominates the Plaza de San Pedro Claver, one of the city's most beautiful squares.\n\nThe complex also includes a tranquil, two-story cloister and a museum filled with religious art and artifacts from the colonial era. Visitors can see the humble cell where the saint lived and prayed. The building itself is an architectural gem, and its story provides a profound insight into the social and religious history of Cartagena.",
        practicalInfo: {
        howToGetThere: "Located in the Plaza de San Pedro Claver, in the southern part of the Walled City.",
        openingHours: "10:00 AM - 5:00 PM daily (may close for lunch).",
        cost: "Approximately 18,000 COP to enter the monastery and museum.",
        website: "http://www.sanpedroclaver.co/"
      }
      },
        {
        name: "Mercado de Bazurto",
        description: "For a truly authentic, chaotic, and unfiltered glimpse into local life, venture out to the Mercado de Bazurto. This is not a polished tourist attraction; it is a sprawling, bustling market where Cartageneros shop for everything from fresh fish and exotic fruits to household goods and clothing. The sights, sounds, and smells can be overwhelming, but the experience is unforgettable.\n\nIt’s a fantastic place to sample local food, try fruits you've never seen before, and see the vibrant daily commerce that fuels the city. Given its intensity and location outside the main tourist area, it's highly recommended to visit with a local guide or on a guided tour to navigate the maze-like alleys and get the most out of the experience safely.",
        practicalInfo: {
        howToGetThere: "Located about a 15-minute taxi ride southeast of the Walled City. A guided tour is the best way to visit.",
        openingHours: "Early morning to mid-afternoon is the best time to go.",
        cost: "Free to enter; costs for tours and purchases vary.",
        website: "N/A"
      }
      },
        {
        name: "Playa Blanca, Isla Barú",
        description: "While technically a peninsula, Isla Barú is home to Playa Blanca, one of the most famous beaches near Cartagena. As its name suggests, it boasts a long stretch of brilliant white sand and bright blue water, looking exactly like a Caribbean postcard. It's a popular alternative to the Rosario Islands for those who simply want to spend the day relaxing on a beautiful beach.\n\nBe aware that its popularity means it can get very crowded, especially on weekends and holidays, with many vendors along the shore. For a more tranquil experience, walk further down the beach away from the main entrance, or consider staying overnight in one of the simple beachfront hostels after the day-trippers have departed. Despite the crowds, the sheer beauty of the water and sand makes it a worthwhile trip.",
        practicalInfo: {
        howToGetThere: "Accessible by boat from the Muelle de la Bodeguita (often combined with a Rosario Islands tour) or by land via a 45-minute bus or taxi ride across the bridge.",
        openingHours: "24/7 for the beach; tours operate during the day.",
        cost: "Transportation costs vary. Boat trips are similar to Rosario Islands tours. Taxis can be negotiated.",
        website: "N/A"
      }
      },
        {
        name: "Take a Cumbia or Salsa Dance Class",
        description: "Music and dance are the lifeblood of Colombian culture, and Cartagena is no exception. Immerse yourself in the local rhythm by taking a dance class. While salsa is popular throughout Latin America, Cartagena also has deep roots in Cumbia, a folkloric dance and musical style born from the cultural fusion of Indigenous, African, and European traditions on the Caribbean coast. Several dance schools and cultural centers offer classes for all levels, from absolute beginners to experienced dancers.\n\nLearning the basic steps of these passionate dances is a fun, interactive way to connect with the culture. After your lesson, you can practice your new moves at one of Getsemaní's legendary salsa clubs, like Café Havana or Quiebra-Canto. It's an experience that will stay with you long after you've left the dance floor.",
        practicalInfo: {
        howToGetThere: "Dance schools like Crazy Salsa or private instructors are located throughout the Walled City and Getsemaní.",
        openingHours: "Classes are available throughout the day and evening; advance booking is recommended.",
        cost: "Group classes start around 50,000 COP per person.",
        website: "https://crazysalsa.net/"
      }
      },
        {
        name: "Cartagena's Gold Museum (Museo del Oro Zenú)",
        description: "While smaller than its famous counterpart in Bogotá, Cartagena's Gold Museum is a fantastic and free attraction. Located in a beautiful colonial mansion on Plaza de Bolívar, the museum is dedicated to the Zenú (or Sinú) people, an indigenous group that inhabited the region before the Spanish arrival. The Zenú were masterful goldsmiths and engineers, known for creating intricate filigree jewelry and a vast system of canals to manage flooding.\n\nThe well-curated, bilingual exhibits showcase a stunning collection of gold artifacts, pottery, and textiles, offering a fascinating insight into this advanced pre-Columbian culture. It's a quick yet enriching visit that provides important historical context for the region.",
        practicalInfo: {
        howToGetThere: "Located on the Plaza de Bolívar in the Walled City.",
        openingHours: "9:00 AM - 5:00 PM (Tues-Sat), 10:00 AM - 3:00 PM (Sun). Closed on Mondays.",
        cost: "Free.",
        website: "https://www.banrepcultural.org/cartagena/museo-del-oro-zenu"
      }
      },
        {
        name: "Street Food Tour",
        description: "To truly taste Cartagena, you must eat on its streets. The city's street food scene is a delicious fusion of Indigenous, African, and Spanish culinary traditions. Taking a guided street food tour is the best way to discover the local favorites and learn the stories behind them. Your taste buds will thank you as you sample a variety of treats.\n\nMust-try items include the arepa de huevo (a deep-fried corn cake with an egg inside), carimañolas (yucca fritters stuffed with meat or cheese), patacones (fried plantains), and fresh tropical juices. Tours often take you through the lively streets of Getsemaní or the Walled City, providing a perfect blend of culinary and cultural exploration.",
        practicalInfo: {
        howToGetThere: "Tours can be booked online and typically meet in a central location like Plaza de la Trinidad or the Clock Tower.",
        openingHours: "Tours are offered at various times, often in the late afternoon or early evening.",
        cost: "Tours typically cost between 100,000 and 200,000 COP.",
        website: "Various providers like Cartagena Connections or street food tours on Viator/Airbnb Experiences."
      }
      }
      ]}
      logistics={{
        gettingAround: "The historic Walled City and Getsemaní are best explored on foot. For longer distances, such as to the airport, Castillo de San Felipe, or Bocagrande, taxis are plentiful. It's recommended to use ride-sharing apps like Uber or Cabify for price transparency and safety. For trips to the islands, you'll need to book a spot on a speedboat or private boat from the Muelle de la Bodeguita dock.",
        whereToStay: "For historic luxury, stay inside the Walled City at hotels like Sofitel Legend Santa Clara or Hotel Charleston Santa Teresa. For a trendy, bohemian vibe with great nightlife, Getsemaní is ideal, with boutique options like Hotel Capellán or Casa Lola. For a modern, Miami-like beach experience with high-rise hotels, choose Bocagrande, with chains like the Hyatt Regency Cartagena.",
        bestTimeToVisit: "The best time to visit is during the dry season, from December to April. You'll have sunny skies and less humidity, but this is also the peak tourist season with higher prices. The shoulder months of November and May offer a good balance of decent weather and fewer crowds. The wet season runs from May to November, with September and October being the rainiest months, but showers are often short and intense.",
        suggestedItinerary: "Day 1: Explore the Walled City. Start at the Puerta del Reloj, wander through the plazas (Bolívar, Santo Domingo), visit the Gold Museum, and walk the walls at sunset. Enjoy dinner in the historic center.\nDay 2: Morning visit to Castillo de San Felipe de Barajas. In the afternoon, explore the street art of Getsemaní. In the evening, have drinks at Plaza de la Trinidad and go for salsa dancing.\nDay 3: Take a full-day boat trip to the Rosario Islands for snorkeling and relaxing on the beach, or opt for a day at Playa Blanca on Isla Barú."
      }}
      faqs={[{
          question: "Is Cartagena expensive?",
          answer: "Cartagena is generally considered one of the most expensive cities in Colombia, especially within the tourist-heavy Walled City. Accommodation, high-end restaurants, and tours can be priced similarly to destinations in Europe or North America. However, it is possible to visit on a budget by staying in Getsemaní or Bocagrande, eating at local restaurants, and enjoying street food, which is both delicious and affordable."
        },
        {
          question: "How many days do you need in Cartagena?",
          answer: "A stay of 3 to 4 days is ideal for a first-time visitor. This allows for one full day to explore the Walled City, another day for Getsemaní and the Castillo de San Felipe, and a full day for a boat trip to the Rosario Islands or Playa Blanca. If you want to explore more beaches or travel at a more relaxed pace, 5 days would be very comfortable."
        },
        {
          question: "Is Cartagena safe?",
          answer: "The main tourist areas like the Walled City, Getsemaní, and Bocagrande are generally safe, with a heavy police presence. However, like any major city, petty crime like pickpocketing and bag-snatching can occur, especially in crowds. Be aware of your surroundings, avoid flashing expensive jewelry or electronics, and be cautious of overly friendly street vendors or unsolicited tour guides. It's not recommended to walk in areas outside the tourist core at night."
        },
        {
          question: "What is Cartagena famous for?",
          answer: "Cartagena is famous for its stunningly preserved, walled colonial old town, which is a UNESCO World Heritage site. It's also renowned for its vibrant Caribbean culture, colorful architecture, rich history involving pirates and Spanish gold, the nearby Rosario Islands with their turquoise waters and coral reefs, and for being an inspiration for the literary works of Nobel laureate Gabriel García Márquez."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1715216013053-60477c7f87fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxDYXJ0YWdlbmElMjB0cmF2ZWx8ZW58MHwwfHx8MTc1MjE0MDEzNXww&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};