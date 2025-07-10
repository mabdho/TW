import React from 'react';
import { CityPage } from '../../components/CityPage';

export const GuatemalaCity: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Guatemala City, Guatemala (2025 Guide)"}
      description={"Often bypassed by travelers heading to Antigua or Lake Atitlán, Guatemala City—or 'Guate' as it's known locally—is a sprawling, energetic metropolis with a surprising depth of culture and history. As the largest city in Central America, it's a vibrant mosaic of colonial architecture, world-class museums, bustling markets, and a burgeoning contemporary arts scene. Navigating its numbered zones reveals distinct neighborhoods, from the historic grandeur of Zona 1 to the trendy, modern vibe of Zona 4 and Zona 10. While it demands a savvy approach to safety, the rewards are immense for those who explore. To truly understand the nation's complex past and dynamic present, discovering the best things to do in Guatemala City is an essential part of any Guatemalan adventure."}
      imageUrl={""}
      highlights={["Palacio Nacional de la Cultura",
        "Museo Ixchel del Traje Indígena",
        "Mapa en Relieve",
        "Mercado Central",
        "Paseo Cayalá"]}
      galleryImages={[
        { url: "", alt: "GuatemalaCity landmark 1", caption: "GuatemalaCity landmark 1 - placeholder" },
        { url: "", alt: "GuatemalaCity landmark 2", caption: "GuatemalaCity landmark 2 - placeholder" },
        { url: "", alt: "GuatemalaCity landmark 3", caption: "GuatemalaCity landmark 3 - placeholder" },
        { url: "", alt: "GuatemalaCity landmark 4", caption: "GuatemalaCity landmark 4 - placeholder" },
        { url: "", alt: "GuatemalaCity landmark 5", caption: "GuatemalaCity landmark 5 - placeholder" },
        { url: "", alt: "GuatemalaCity landmark 6", caption: "GuatemalaCity landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Palacio Nacional de la Cultura",
        description: "Dominating the central square, the National Palace of Culture is Guatemala's most emblematic government building, often compared to a giant green wedding cake. Constructed between 1939 and 1943 under dictator Jorge Ubico, its opulent halls are a breathtaking mix of Spanish Moorish, Neoclassical, and French architectural styles. Every detail is rich with symbolism, from the lampposts shaped like the national Quetzal bird to the stunning murals depicting Guatemala's history by artist Alfredo Gálvez Suárez.\n\nA guided tour is essential to appreciate the intricate details of the grand ballrooms, the stained-glass windows, and the 'Kilometer Zero' marker in the main entrance, which is the official starting point for all of Guatemala's highways. It's a fascinating look into the country's political history and artistic heritage.",
        practicalInfo: {
        howToGetThere: "Located on the north side of Plaza de la Constitución, Zona 1. Easily accessible by taxi, rideshare, or Transmetro to the Plaza Barrios stop.",
        openingHours: "Monday to Friday, 9:00 AM - 5:00 PM. Guided tours typically run on the hour.",
        cost: "Approximately 40 GTQ for foreigners.",
        website: "https://mcd.gob.gt/palacio-nacional-de-la-cultura/"
      }
      },
        {
        name: "Catedral Metropolitana",
        description: "Facing the National Palace across the Plaza de la Constitución, the Metropolitan Cathedral has been a silent witness to Guatemala's turbulent history. Its full name is Catedral Primada Metropolitana de Santiago. Built between 1782 and 1815, its neoclassical façade has survived numerous earthquakes, which have damaged and destroyed previous structures on the site. The pillars in front of the cathedral bear the names of thousands of people who were 'disappeared' or killed during the Guatemalan Civil War.\n\nInside, you'll find a serene atmosphere with beautiful colonial art, ornate altars, and a network of catacombs beneath the main floor. It's a place for quiet reflection and a poignant reminder of the nation's resilience.",
        practicalInfo: {
        howToGetThere: "East side of Plaza de la Constitución, Zona 1. Directly opposite the Palacio Nacional.",
        openingHours: "Daily, approximately 8:00 AM - 1:00 PM and 3:00 PM - 6:00 PM.",
        cost: "Free to enter, donations welcome. A small fee may be charged to visit the catacombs.",
        website: "N/A"
      }
      },
        {
        name: "Mapa en Relieve",
        description: "One of Guatemala City's most unique and fascinating attractions, the Relief Map is a massive, open-air scale model of the entire country. Built in 1905, this giant topographical map covers around 1,800 square meters and depicts Guatemala's mountains, volcanoes, rivers, and towns with remarkable accuracy for its time. It was constructed before the age of aerial photography, based on the expeditions of engineer Francisco Vela.\n\nViewing platforms allow you to walk around the perimeter and appreciate the country's dramatic and varied landscape from a bird's-eye perspective. It’s an incredible educational tool that helps put the entire country into context before you explore further.",
        practicalInfo: {
        howToGetThere: "Located in Minerva Park, Zona 2. Best reached by taxi or rideshare.",
        openingHours: "Daily, 9:00 AM - 4:00 PM.",
        cost: "Approximately 25 GTQ.",
        website: "N/A"
      }
      },
        {
        name: "Mercado Central",
        description: "Directly behind the Metropolitan Cathedral lies the bustling Central Market. After the original building was destroyed in the 1976 earthquake, it was rebuilt as a multi-level subterranean complex. This is the perfect place to immerse yourself in local life, with vendors selling everything from fresh produce and spices to traditional handicrafts, textiles, leather goods, and pottery.\n\nThe market is a sensory explosion of colors, sounds, and smells. The lower level features a food court where you can sample authentic Guatemalan dishes like 'pepián' and 'hilachas' at incredibly low prices. It's an excellent spot for souvenir shopping, but be prepared to bargain politely.",
        practicalInfo: {
        howToGetThere: "8a Calle, between 8a and 9a Avenidas, Zona 1. Just a short walk from the main plaza.",
        openingHours: "Monday to Saturday, 8:00 AM - 6:00 PM; Sunday 8:00 AM - 12:00 PM.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Museo Ixchel del Traje Indígena",
        description: "For a deep dive into Guatemala's rich Maya heritage, the Ixchel Museum of Indigenous Textiles is a must-visit. Named after the Maya goddess of the moon, weaving, and fertility, this museum houses an extraordinary collection of traditional textiles and garments from over 120 different Guatemalan communities. The exhibits showcase the incredible diversity and artistry of Maya weaving, explaining the significance of different patterns, colors, and styles, which can signify a person's hometown, marital status, and social standing.\n\nThe displays are beautifully curated, featuring ceremonial outfits, daily wear, and detailed explanations of the weaving and dyeing processes. It offers a profound appreciation for a living tradition that is central to Maya identity.",
        practicalInfo: {
        howToGetThere: "Located on the campus of Universidad Francisco Marroquín in Zona 10. Best reached by taxi or rideshare.",
        openingHours: "Tuesday to Friday, 9:00 AM - 5:00 PM; Saturday, 9:00 AM - 1:00 PM.",
        cost: "Approximately 65 GTQ for foreigners.",
        website: "https://museoixchel.org/"
      }
      },
        {
        name: "Museo Popol Vuh",
        description: "Also located on the campus of Universidad Francisco Marroquín, the Popol Vuh Museum holds one of the world's most important collections of Maya art and artifacts. Named after the sacred Maya book of creation, the museum's exhibits guide visitors through Guatemala's pre-Columbian and colonial history. The collection includes stunning examples of pre-Hispanic pottery, stone sculptures, ceremonial masks, and funerary urns.\n\nThe museum is well-organized and provides bilingual (Spanish/English) information, making the complex history accessible. Highlights include intricately carved stelae and a superb collection of polychrome vases depicting mythological scenes. A combined visit with the nearby Museo Ixchel makes for a perfect day of cultural immersion.",
        practicalInfo: {
        howToGetThere: "On the campus of Universidad Francisco Marroquín in Zona 10, a short walk from the Museo Ixchel.",
        openingHours: "Monday to Friday, 9:00 AM - 5:00 PM; Saturday, 9:00 AM - 1:00 PM.",
        cost: "Approximately 65 GTQ for foreigners. A combined ticket with Museo Ixchel is often available.",
        website: "https://popolvuh.ufm.edu/"
      }
      },
        {
        name: "Paseo Cayalá",
        description: "A world away from the grit of the historic center, Paseo Cayalá is a meticulously planned, upscale open-air complex in Zona 16 that feels like a European village. This sprawling development features elegant colonial revival architecture, pedestrian-only streets, fountains, and manicured green spaces. It's a city within a city, boasting high-end boutiques, international restaurants, cafes, a luxury cinema, and modern apartment buildings.\n\nWhile some criticize it for its lack of authenticity, Cayalá is an undeniably beautiful and safe space to spend an afternoon or evening. It’s popular with affluent locals and expats and offers a glimpse into the modern, globalized side of Guatemala City. It's a perfect place to enjoy a gourmet meal, go for a safe evening stroll, or simply relax.",
        practicalInfo: {
        howToGetThere: "Located in Zona 16. It's best reached by taxi or rideshare as it's not well-serviced by public transport.",
        openingHours: "Shops and restaurants have individual hours, but the area is accessible 24/7.",
        cost: "Free to enter; costs depend on shopping and dining.",
        website: "https://cayala.com/"
      }
      },
        {
        name: "Kaminaljuyu Archaeological Park",
        description: "Discover the ancient roots of Guatemala City at Kaminaljuyu, an important pre-Columbian Maya archaeological site located right within the modern city limits. Often referred to as the 'City of the Dead Kings,' this site was a major center of civilization from around 1500 BC to 1200 AD, predating many of the more famous Maya sites. Although much of the area has been covered by urban sprawl, the protected park contains several restored mounds and plazas.\n\nThe on-site museum offers context, but the real experience is walking among the grassy mounds that hide ancient temples and tombs. It's a quiet, contemplative space that provides a stark contrast to the surrounding urban chaos and highlights the deep historical layers of the valley.",
        practicalInfo: {
        howToGetThere: "Located in Zona 7. Due to the area's reputation, it is strongly recommended to visit via a pre-arranged taxi or rideshare.",
        openingHours: "Wednesday to Sunday, 9:00 AM - 4:00 PM.",
        cost: "Approximately 50 GTQ for foreigners.",
        website: "https://mcd.gob.gt/parque-arqueologico-kaminaljuyu/"
      }
      },
        {
        name: "Jardín Botánico",
        description: "A tranquil oasis in the middle of the city, the Botanical Garden (officially the Jardín Botánico del Centro de Estudios Conservacionistas) is located just off the bustling Avenida La Reforma. Administered by the University of San Carlos, this nearly 20,000-square-meter garden is dedicated to the preservation and study of Guatemalan and Central American flora.\n\nWinding paths lead you through different sections, including a collection of native palm trees, a cycad garden, and greenhouses with orchids and other tropical plants. It’s a wonderful place for a peaceful walk, bird-watching, or simply escaping the city noise for an hour or two.",
        practicalInfo: {
        howToGetThere: "Calle Mariscal Cruz 1-56, Zona 10. Easily accessible and a short walk from many Zona 10 hotels.",
        openingHours: "Monday to Saturday, 9:00 AM - 3:30 PM.",
        cost: "Approximately 15 GTQ.",
        website: "https://digi.usac.edu.gt/jardin/"
      }
      },
        {
        name: "Museo Nacional de Arqueología y Etnología",
        description: "The National Museum of Archaeology and Ethnology (MUNAE) offers a comprehensive overview of Maya civilization and Guatemalan history. Its vast collection includes artifacts from major archaeological sites like Tikal, Kaminaljuyu, and Quiriguá. The museum is renowned for its impressive collection of large stone stelae (carved monuments), intricate jade jewelry, and striking ceramic pieces.\n\nThe exhibits are divided into Archaeology (pre-Hispanic) and Ethnology (post-conquest and modern indigenous cultures), providing a complete picture of the country's heritage. While some exhibits are a bit dated, the sheer quality and importance of the artifacts make it an essential stop for anyone interested in Maya history.",
        practicalInfo: {
        howToGetThere: "Finca La Aurora, Zona 13. Located next to the Modern Art Museum and near the zoo. Best reached by taxi or rideshare.",
        openingHours: "Tuesday to Sunday, 9:30 AM - 4:30 PM.",
        cost: "Approximately 60 GTQ for foreigners.",
        website: "https://munae.gt/"
      }
      },
        {
        name: "Centro Cívico",
        description: "The Civic Center, located primarily in Zona 4, is a remarkable collection of mid-20th-century modernist architecture. Constructed in the 1950s and 60s, this complex of government buildings was designed to represent a new, progressive Guatemala. The key buildings include the Bank of Guatemala, the Guatemalan Social Security Institute (IGSS), and the Municipality of Guatemala City.\n\nWhat makes this area truly special are the massive high-relief concrete murals adorning the facades, created by renowned artists like Carlos Mérida and Efraín Recinos. These murals blend modernist styles with Maya motifs, creating a unique artistic statement. A walk through this area is a must for lovers of architecture and public art.",
        practicalInfo: {
        howToGetThere: "Bordering Zona 1 and Zona 4. Can be explored on foot, but it's best to be aware of your surroundings.",
        openingHours: "Public space, accessible 24/7. Building interiors have standard business hours.",
        cost: "Free to view from the outside.",
        website: "N/A"
      }
      },
        {
        name: "Iglesia y Convento de Santo Domingo",
        description: "While the Metropolitan Cathedral gets most of the attention, the Church and Convent of Santo Domingo in Zona 1 is a historical and artistic gem. Originally one of the most powerful religious orders in Guatemala, the Dominicans built this stunning baroque church, which now serves as the Basilica of Our Lady of the Rosary. The interior is lavishly decorated with gold leaf and colonial art.\n\nThe adjacent convent ruins, accessible for a small fee, house a cultural center and offer a peaceful retreat. The site holds the tomb of Fray Bartolomé de las Casas, the famous 'Protector of the Indians', and is steeped in history. The annual processions during Holy Week are particularly spectacular.",
        practicalInfo: {
        howToGetThere: "12 Avenida y 10a Calle, Zona 1. A few blocks from the main plaza.",
        openingHours: "Church is open daily for services. The cultural center has its own hours, typically 9:00 AM - 5:00 PM.",
        cost: "Free to enter the church; a small fee for the convent/cultural center.",
        website: "N/A"
      }
      },
        {
        name: "Zoológico La Aurora",
        description: "Widely regarded as one of the best zoos in Central America, La Aurora Zoo is a popular attraction for families and animal lovers. Located in Zona 13, the zoo is clean, well-maintained, and houses a wide variety of animals from Guatemala and around the world. The enclosures are designed to mimic natural habitats, with sections dedicated to African, Asian, and American fauna.\n\nThe zoo is divided into several regions, featuring everything from penguins and tigers to an impressive serpentarium and a farm animal area. It's a large park that requires several hours to explore fully, making it a great half-day activity, especially if traveling with children.",
        practicalInfo: {
        howToGetThere: "Finca La Aurora, Zona 13, near the airport. Best reached by taxi or rideshare.",
        openingHours: "Tuesday to Sunday, 9:00 AM - 4:00 PM.",
        cost: "Approximately 33 GTQ for adults, with discounts for children.",
        website: "https://www.aurorazoo.org.gt/"
      }
      },
        {
        name: "IRTRA Mundo Petapa",
        description: "For a day of pure fun and adrenaline, IRTRA Mundo Petapa is Guatemala's premier amusement park. This clean, safe, and well-organized park in Zona 12 offers a fantastic escape from the city's more historical pursuits. The park features a wide range of attractions, from thrilling roller coasters and a towering free-fall ride to classic carousels and family-friendly attractions.\n\nThe park is themed around different plazas representing various Guatemalan towns and international concepts. It's incredibly popular with local families, especially on weekends. IRTRA is a non-profit organization dedicated to providing recreation for Guatemalan workers, and their parks are known for their high standards of quality and service.",
        practicalInfo: {
        howToGetThere: "Avenida Petapa 42-36, Zona 12. Easily accessible by taxi or rideshare.",
        openingHours: "Thursday to Sunday, hours vary seasonally. Check the website for the current schedule.",
        cost: "Approximately 100 GTQ for adults. A multi-pass bracelet for unlimited rides is extra.",
        website: "https://irtra.org.gt/parques/mundo-petapa/"
      }
      },
        {
        name: "Avenida La Reforma",
        description: "Modeled after the grand boulevards of Paris, Avenida La Reforma is a wide, tree-lined avenue that cuts through the heart of Zona 9 and 10. It is flanked by impressive statues, monuments, and elegant buildings, including many foreign embassies. The central reservation features walking and cycling paths, making it a popular spot for jogging and strolling.\n\nOn Sundays, a section of the avenue is closed to traffic for 'Pasos y Pedales,' a weekly event where thousands of residents come out to bike, run, skate, and socialize. Walking the length of La Reforma provides a great look at the city's more affluent side and connects several key areas, including the Centro Cívico and the Botanical Garden.",
        practicalInfo: {
        howToGetThere: "Runs through Zona 9 and Zona 10. Easily explored on foot if staying in these areas.",
        openingHours: "Public avenue, accessible 24/7. 'Pasos y Pedales' runs Sunday mornings.",
        cost: "Free.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Getting around Guatemala City requires some planning. For tourists, the safest and most convenient options are ride-sharing apps like Uber or licensed taxis (ask your hotel to call one). The public bus system, Transmetro, is modern and efficient but serves specific routes and can be crowded. It's best used for direct routes, like getting to the historic center. Walking is feasible within specific zones like Zona 1 (during the day) or parts of Zona 10, but not recommended between zones due to distance and safety concerns.",
        whereToStay: "Zona 10 (Zona Viva) is the most popular choice for tourists, offering upscale hotels, international restaurants, and a safe environment. Zona 4 (4 Grados Norte) is a trendier, bohemian option with boutique hotels, craft breweries, and a vibrant nightlife. Zona 1 (Historic Center) offers budget-friendly hotels and hostels close to the main historical sites but requires more caution, especially at night. For a modern, resort-like feel, the area around Paseo Cayalá in Zona 16 offers high-end apartments and hotels.",
        bestTimeToVisit: "Guatemala is known as the 'Land of Eternal Spring' for its temperate climate year-round. The best time to visit is during the dry season, which runs from November to April. You'll experience sunny days and pleasant temperatures, perfect for exploring. The rainy season (or 'winter') is from May to October, characterized by sunny mornings and afternoon showers. While still a good time to visit, be prepared for rain.",
        suggestedItinerary: "Day 1: Historic Immersion. Explore Zona 1, starting at Plaza de la Constitución. Tour the Palacio Nacional de la Cultura and the Catedral Metropolitana. Have an authentic lunch and shop for handicrafts at the Mercado Central. Day 2: Culture & Museums. Head to Zona 10 to visit the Museo Ixchel and Museo Popol Vuh. In the afternoon, take a taxi to Zona 2 to see the incredible Mapa en Relieve. Enjoy dinner in the trendy Zona 4. Day 3: Modern Guate & Relaxation. Stroll or bike down Avenida La Reforma. Relax in the Jardín Botánico. In the afternoon, experience the upscale, modern side of the city at Paseo Cayalá for shopping and a final gourmet dinner."
      }}
      faqs={[{
          question: "Is Guatemala City expensive?",
          answer: "Guatemala City can be very affordable, but it caters to all budgets. Local meals at a 'comedor' or in the Mercado Central can cost as little as $3-5 USD. Transportation via Uber is significantly cheaper than in North America or Europe. Accommodation ranges from budget hostels in Zona 1 for $15-20 a night to luxury hotels in Zona 10 for $150+ a night. Overall, it is much less expensive than most Western capital cities."
        },
        {
          question: "How many days do you need in Guatemala City?",
          answer: "Two to three full days are ideal to explore the main highlights of Guatemala City. This allows enough time to cover the historic center (Zona 1), the main museums in Zona 10 and 13, and experience the modern side of the city in areas like Zona 4 or Paseo Cayalá without feeling rushed. If you are using it purely as a transport hub, one day can suffice to see the National Palace and the Central Market."
        },
        {
          question: "Is Guatemala City safe?",
          answer: "Guatemala City has a reputation for being unsafe, and it's important to be cautious. However, tourist-frequented zones like Zona 10 (Zona Viva), Zona 14, Zona 16 (Cayalá), and Zona 4 are generally safe, especially during the day. Zona 1 (Historic Center) is safe during daylight hours but should be avoided at night. It is crucial to avoid certain zones entirely (e.g., Zona 3, 6, 18, 21). Use reputable transportation like Uber or hotel taxis instead of hailing street cabs, avoid displaying expensive jewelry or electronics, and always be aware of your surroundings. With common-sense precautions, a visit can be safe and rewarding."
        },
        {
          question: "What is Guatemala City famous for?",
          answer: "Guatemala City is famous for being the political, cultural, and economic capital of Guatemala. It is renowned for housing the nation's most important museums, including the Museo Popol Vuh and the Museo Nacional de Arqueología y Etnología, which hold priceless Maya artifacts. It's also known for its historic center with the grand Palacio Nacional de la Cultura and the Catedral Metropolitana. Finally, it serves as the primary international gateway to Guatemala's more famous tourist destinations like Antigua, Lake Atitlán, and Tikal."
        }
      ]}
    />
  );
};