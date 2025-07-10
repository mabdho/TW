import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Guayaquil: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Guayaquil, Ecuador (2025 Guide)"}
      description={"Welcome to Guayaquil, Ecuador's vibrant and bustling port city, where tropical heat meets urban energy. As the country's largest city, Guayaquil pulsates with commercial life along the Guayas River, but it's the successful urban renewal projects that have transformed it into a captivating tourist destination. The city charms visitors with its colorful colonial neighborhoods, sprawling riverfront promenades, and unexpected wildlife encounters right in the heart of downtown. From climbing historic hills for panoramic views to sampling exquisite coastal cuisine, you'll find a dynamic blend of history, nature, and modern culture. Whether you're en route to the Galápagos or exploring mainland Ecuador, discovering the best things to do in Guayaquil reveals a city that is proud, resilient, and full of surprises. This guide will help you navigate its must-see attractions and hidden gems."}
      highlights={["Malecón 2000",
        "Las Peñas Neighborhood",
        "Cerro Santa Ana (Santa Ana Hill)",
        "Parque de las Iguanas (Seminario Park)",
        "Parque Histórico Guayaquil (Historical Park)"]}
      galleryImages={[
        { url: "", alt: "Guayaquil landmark 1", caption: "Guayaquil landmark 1 - placeholder" },
        { url: "", alt: "Guayaquil landmark 2", caption: "Guayaquil landmark 2 - placeholder" },
        { url: "", alt: "Guayaquil landmark 3", caption: "Guayaquil landmark 3 - placeholder" },
        { url: "", alt: "Guayaquil landmark 4", caption: "Guayaquil landmark 4 - placeholder" },
        { url: "", alt: "Guayaquil landmark 5", caption: "Guayaquil landmark 5 - placeholder" },
        { url: "", alt: "Guayaquil landmark 6", caption: "Guayaquil landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Malecón 2000",
        description: "The Malecón 2000 is the crown jewel of Guayaquil's urban renewal. This sprawling 2.5-kilometer riverfront promenade along the Guayas River is a vibrant public space filled with gardens, monuments, museums, shopping centers, restaurants, and playgrounds. It's a perfect place for a leisurely stroll, offering beautiful views of the river and city skyline. Key sights along the Malecón include the Moorish Clock Tower and La Rotonda, a monument commemorating the historic meeting between Simón Bolívar and José de San Martín.\n\nThis boardwalk is a microcosm of Guayaquil life, bustling with families, joggers, and tourists from morning until night. It feels safe and clean, making it an ideal starting point for exploring the city. You can easily spend half a day here, enjoying the atmosphere, visiting the MAAC museum at its northern end, or taking a boat trip on the river.",
        practicalInfo: {
        howToGetThere: "Located along the Guayas River in the city center. It's easily accessible on foot from most downtown hotels.",
        openingHours: "Open 24/7, though individual shops and attractions have their own hours (typically 10 AM - 9 PM).",
        cost: "Free to enter and walk around. Attractions along the way may have fees.",
        website: "https://malecon2000.com/"
      }
      },
        {
        name: "Las Peñas Neighborhood",
        description: "Step back in time in Las Peñas, the oldest and most charming neighborhood in Guayaquil. This historic district, perched at the foot of Santa Ana Hill, is a delightful maze of narrow, cobblestone streets lined with brightly painted wooden colonial houses. Many of these beautifully restored buildings now house art galleries, cozy cafes, and small bars, creating a bohemian and artistic atmosphere.\n\nAs you wander through Numa Pompilio Llona Street, the neighborhood's main thoroughfare, you can appreciate the intricate architecture and imagine the city's past. It's a protected heritage site and was once home to many notable figures, including former presidents and writer Ernest Hemingway. The area is especially magical in the late afternoon and evening when the lights come on and live music spills out from the bars.",
        practicalInfo: {
        howToGetThere: "Located at the northern end of the Malecón 2000, at the base of Santa Ana Hill.",
        openingHours: "Accessible 24/7, but galleries and cafes typically open from late morning to late evening.",
        cost: "Free to explore.",
        website: "N/A"
      }
      },
        {
        name: "Cerro Santa Ana (Santa Ana Hill)",
        description: "For the best panoramic views of Guayaquil, a climb up Cerro Santa Ana is essential. This iconic hill is where the city was founded in the 16th century. Today, it's a vibrant, regenerated area with a 444-step staircase leading to the summit. Each step is numbered, so you can track your progress as you ascend past colorful houses, small shops, and lively restaurants.\n\nThe climb is rewarding and offers countless photo opportunities. At the top, you'll find a small chapel, a lighthouse (El Faro), and a naval museum. Climb the lighthouse for an unparalleled 360-degree view of the entire city, the Guayas River, the Malecón, and the Santay Island bridge. It's best to go in the late afternoon to catch the sunset.",
        practicalInfo: {
        howToGetThere: "The entrance to the staircase is directly accessible from the Las Peñas neighborhood.",
        openingHours: "Stairs are open daily, roughly 7 AM - 11 PM. The lighthouse and chapel have more limited hours.",
        cost: "Free. Bring cash for drinks or snacks at the small shops along the way.",
        website: "N/A"
      }
      },
        {
        name: "Parque de las Iguanas (Seminario Park)",
        description: "Parque de las Iguanas, officially known as Seminario Park, offers one of Guayaquil's most surreal and memorable experiences. Located in the heart of the city, right in front of the Metropolitan Cathedral, this seemingly ordinary park is home to hundreds of friendly, free-roaming land iguanas. These prehistoric-looking reptiles can be seen lounging on the grass, climbing trees, and calmly crossing pathways among the locals and tourists.\n\nObserving these large, docile creatures up close is a unique thrill. You can often buy lettuce from vendors to feed them, though it's best to just watch them in their urban habitat. The park also features a pond with turtles and an equestrian statue of Simón Bolívar, making it a fascinating blend of nature and history.",
        practicalInfo: {
        howToGetThere: "Located in the city center at the intersection of Chimborazo and Clemente Ballén avenues.",
        openingHours: "Open 24/7, but best visited during daylight hours.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Parque Histórico Guayaquil (Historical Park)",
        description: "Parque Histórico is a fantastic attraction that combines a zoo, a botanical garden, and a cultural museum into one expansive park. It's divided into three zones: the Wildlife Zone, which showcases regional fauna like monkeys, sloths, crocodiles, and harpy eagles in naturalistic habitats; the Urban Architectural Zone, featuring restored colonial and republican-era buildings saved from demolition; and the Traditions Zone, which recreates a traditional hacienda to demonstrate old coastal farming practices.\n\nThis beautifully maintained park provides a comprehensive overview of the Guayaquil region's history, culture, and biodiversity. It's an excellent family-friendly destination and a peaceful escape from the city's hustle and bustle. The recreated historical street feels like stepping onto a movie set, complete with actors in period clothing on weekends.",
        practicalInfo: {
        howToGetThere: "Located in Samborondón, across the river from the main city. A taxi or ride-share is the easiest way to get there.",
        openingHours: "Wednesday to Sunday, 9 AM - 5 PM.",
        cost: "Free entry.",
        website: "https://www.parquehistoricogye.com/"
      }
      },
        {
        name: "Catedral Metropolitana de Guayaquil",
        description: "Facing the famous Parque de las Iguanas, the Guayaquil Metropolitan Cathedral is a stunning architectural landmark. Although its origins date back to the 16th century, the current structure was built in a neo-Gothic style in the 1930s after previous wooden versions were destroyed by fires. Its beautiful twin spires dominate the downtown skyline.\n\nThe interior is just as impressive, with soaring ceilings, intricate stained-glass windows depicting scenes from the life of Christ, and a magnificent high altar. It's an active place of worship but also a tranquil sanctuary where visitors can admire the art and architecture and escape the city heat for a few moments of quiet reflection.",
        practicalInfo: {
        howToGetThere: "Located in the city center, directly across from Parque de las Iguanas.",
        openingHours: "Typically open daily, but may close to tourists during mass. Check hours locally.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "MAAC (Museo Antropológico y de Arte Contemporáneo)",
        description: "Situated at the northern end of Malecón 2000, the MAAC is Guayaquil's premier museum for anthropology and contemporary art. Its vast collection provides a deep dive into the history and culture of Ecuador's coastal region. The archaeological exhibits are particularly noteworthy, featuring thousands of artifacts from pre-Columbian cultures like the Valdivia, Machalilla, and Chorrera.\n\nThe contemporary art section showcases works from prominent Ecuadorian and Latin American artists, offering a modern counterpoint to the ancient history. The museum itself is a modern architectural marvel, and its location makes it a convenient and educational stop while exploring the riverfront.",
        practicalInfo: {
        howToGetThere: "Located within the Malecón 2000 complex, near Las Peñas.",
        openingHours: "Tuesday to Sunday, 10 AM - 4 PM.",
        cost: "Free entry.",
        website: "https://www.culturaypatrimonio.gob.ec/maac/"
      }
      },
        {
        name: "Mercado Central",
        description: "For an authentic slice of local life, a visit to the Mercado Central is a must. This bustling market is a sensory overload in the best way possible, with vendors selling everything from exotic fruits and fresh vegetables to seafood, meats, herbs, and flowers. It's the perfect place to see, smell, and taste the incredible bounty of Ecuador's coast and highlands.\n\nHead to the upper floor to find a food court serving traditional and affordable Ecuadorian dishes. This is where locals eat, so it's a great opportunity to try classics like encebollado (fish soup), guatita (tripe stew), or a fresh fruit juice. Be prepared for a chaotic but friendly atmosphere and practice your Spanish with the vendors.",
        practicalInfo: {
        howToGetThere: "Located in the city center, a few blocks inland from the Malecón.",
        openingHours: "Daily, approximately 6 AM - 4 PM.",
        cost: "Free to enter. Bring small bills for purchases.",
        website: "N/A"
      }
      },
        {
        name: "Cementerio General de Guayaquil",
        description: "Often called the 'White City,' Guayaquil's General Cemetery is one of the most beautiful in Latin America. Established in 1823, it's less a graveyard and more an open-air museum of art and history. The grounds are filled with magnificent, ornate mausoleums and sculptures crafted from Italian marble, belonging to the city's most prominent families.\n\nStrolling through its peaceful avenues, you can admire the various architectural styles, from Neoclassical to Art Nouveau. Many of Ecuador's presidents, poets, and heroes are buried here. The cemetery is vast, so you can easily spend a couple of hours exploring the different sections and admiring the craftsmanship.",
        practicalInfo: {
        howToGetThere: "Located on Pedro Menendez Gilbert Avenue. A short taxi ride from the city center is recommended.",
        openingHours: "Daily, 8 AM - 6 PM.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Jardín Botánico de Guayaquil",
        description: "Escape to a lush, green oasis at the Guayaquil Botanical Garden. Located on a hill in the northern part of the city, this 5-hectare garden is dedicated to the conservation and exhibition of Ecuador's diverse plant life. It features a stunning collection of native and introduced orchids, tropical palms, and medicinal plants.\n\nBeyond the flora, the garden is a haven for wildlife. Keep an eye out for colorful butterflies in the butterfly house, listen for the calls of tropical birds, and you might even spot howler monkeys in the trees. The well-marked trails make it easy to explore, offering a peaceful and educational experience for nature lovers.",
        practicalInfo: {
        howToGetThere: "Located in the Ciudadela 'Las Orquídeas' neighborhood. A taxi or ride-share is the best option.",
        openingHours: "Daily, 8 AM - 4 PM.",
        cost: "A small entrance fee applies (around $3-5 USD).",
        website: "http://www.jardinbotanicogye.com/"
      }
      },
        {
        name: "Isla Santay",
        description: "Isla Santay is a protected ecological reserve located in the Guayas River between Guayaquil and Durán. This mangrove-filled island is a fantastic day trip for those looking to connect with nature without traveling far. The main attraction is a long, pedestrian bridge that connects the island to Guayaquil, perfect for walking or cycling.\n\nOnce on the island, you can explore elevated wooden walkways that wind through the mangroves to a small eco-village. Here, you can learn about the local community's sustainable lifestyle and visit a cocodrilera (crocodile farm). The island is a designated Ramsar wetland site, important for its biodiversity and for migratory birds.",
        practicalInfo: {
        howToGetThere: "Access the pedestrian bridge from El Oro Street, south of the city center. You can walk, or rent bikes near the bridge entrance.",
        openingHours: "Daily, 6 AM - 5 PM (Bridge access).",
        cost: "Free to enter. Bike rentals are available for a fee.",
        website: "N/A"
      }
      },
        {
        name: "Barco Pirata Morgan (Morgan Pirate Ship)",
        description: "For a fun and kitschy experience on the Guayas River, hop aboard the Barco Pirata Morgan. This replica pirate ship offers scenic tours along the river, providing a unique perspective of the Malecón 2000, Las Peñas, and Cerro Santa Ana. The tours are especially popular in the evening when the city lights up.\n\nThe boat trip is accompanied by music, entertainment from a costumed 'pirate' crew, and a lively atmosphere. While it's certainly a touristy activity, it's an enjoyable way to relax, catch a breeze, and see Guayaquil's main sights from the water. The tours last about an hour and are great for families and groups.",
        practicalInfo: {
        howToGetThere: "The ship docks on the Malecón 2000, near La Rotonda.",
        openingHours: "Tours run throughout the day and evening, typically starting from mid-morning until late.",
        cost: "Around $7-10 USD per person for the standard tour.",
        website: "https://malecon2000.com/portfolio/barco-pirata/"
      }
      },
        {
        name: "Plaza de la Administración",
        description: "Just a block inland from the Malecón, Plaza de la Administración is a beautifully manicured square flanked by some of Guayaquil's most impressive government buildings. On one side stands the neoclassical Palacio Municipal (City Hall), and opposite it is the Palacio de la Gobernación (Governor's Palace), creating a stately and symmetrical public space.\n\nThe plaza is adorned with striking monuments, including the Sucre Monument and the dazzling 'Vulcan's Forge' sculpture. It's a quieter, more formal square than Parque de las Iguanas but equally picturesque. It's a great spot for photography and to appreciate the city's civic architecture before or after visiting the nearby Malecón.",
        practicalInfo: {
        howToGetThere: "Located between the Malecón 2000 and Parque de las Iguanas in the city center.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Museo Municipal de Guayaquil",
        description: "Founded in 1908, the Municipal Museum is the oldest museum in Guayaquil and offers a journey through the city's rich history. Its collections cover a wide range, from pre-Columbian archaeology to religious art from the colonial period and artifacts related to the city's struggle for independence. One of its most prized possessions is a tsantsa, or shrunken head, from the Shuar culture.\n\nThe museum provides valuable context for understanding the city you are exploring. While not as modern as the MAAC, its classic exhibits and historical depth make it a worthwhile visit for anyone interested in the origins and development of Guayaquil.",
        practicalInfo: {
        howToGetThere: "Located on Sucre Street, between Chile and Pedro Carbo, near Parque de las Iguanas.",
        openingHours: "Tuesday to Saturday, 9 AM - 5:30 PM.",
        cost: "Free entry.",
        website: "https://www.guayaquil.gob.ec/museo-municipal/"
      }
      },
        {
        name: "Parque del Centenario",
        description: "Parque del Centenario is the largest park in downtown Guayaquil, a sprawling green space that serves as a popular gathering spot for locals. The park is dominated by the impressive Column of the Forefathers (Columna de los Próceres), a monument dedicated to the heroes of Guayaquil's 1820 independence movement. The column is adorned with allegorical statues and is a major city landmark.\n\nThe park itself is divided into several sections by streets, featuring fountains, gardens, and shaded benches perfect for people-watching. It offers a glimpse into the everyday life of Guayaquileños away from the main tourist drag of the Malecón. It's a great place to take a break while exploring the commercial heart of the city.",
        practicalInfo: {
        howToGetThere: "Located on Avenida 9 de Octubre, the city's main commercial avenue.",
        openingHours: "Open 24/7, best visited during the day.",
        cost: "Free.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Guayaquil's city center, including the Malecón 2000 and Las Peñas, is very walkable. For longer distances, registered yellow taxis are plentiful and affordable; always ensure the driver uses the meter or agree on a fare beforehand. Ride-sharing apps like Uber and Cabify are also popular and reliable options. The city's bus rapid transit system, Metrovía, is efficient for reaching different neighborhoods but can be crowded.",
        whereToStay: "For first-time visitors, staying in the Downtown (Centro) area near the Malecón 2000 is ideal for its proximity to major attractions. The Urdesa neighborhood is a great choice for foodies and those seeking vibrant nightlife. For a more modern and upscale experience, consider the Samborondón district, which has luxury hotels and shopping malls.",
        bestTimeToVisit: "Guayaquil has a tropical climate with two distinct seasons. The best time to visit is during the dry, cooler season from June to November, when humidity is lower and clear skies are common. The hot and rainy season runs from December to May, characterized by high temperatures, heavy humidity, and frequent afternoon downpours.",
        suggestedItinerary: "Day 1: Explore the Malecón 2000 from south to north, visiting La Rotonda and the Moorish Clock Tower. In the afternoon, wander through the colorful Las Peñas neighborhood and climb the 444 steps of Cerro Santa Ana for sunset views.\nDay 2: Start your morning at Parque de las Iguanas, then visit the adjacent Metropolitan Cathedral. In the afternoon, take a taxi to the Parque Histórico to experience the region's nature and history.\nDay 3: Choose between a nature-focused morning by walking or cycling across the bridge to Isla Santay, or visit the Jardín Botánico. In the afternoon, immerse yourself in culture at the MAAC or the Museo Municipal."
      }}
      faqs={[{
          question: "Is Guayaquil expensive?",
          answer: "Guayaquil is generally considered an affordable travel destination. A meal at a local restaurant or market food court can cost as little as $3-5 USD. Mid-range restaurant meals are around $10-20. Accommodation is available for all budgets, from budget hostels to luxury hotels. Taxis and public transport are also very inexpensive compared to North American or European standards."
        },
        {
          question: "How many days do you need in Guayaquil?",
          answer: "Two to three full days are sufficient to see the main highlights of Guayaquil, including the Malecón, Cerro Santa Ana, Las Peñas, and the major parks and museums. If you plan to use it as a base for day trips or want to explore more neighborhoods at a relaxed pace, you could easily spend four to five days."
        },
        {
          question: "Is Guayaquil safe?",
          answer: "Like any large city, Guayaquil has areas of concern, and visitors should exercise caution. The main tourist areas like the Malecón 2000, Las Peñas, and Cerro Santa Ana are well-policed and generally safe during the day. It is advisable to take registered taxis or use ride-sharing apps at night rather than walking. Avoid displaying expensive valuables, be aware of your surroundings to prevent pickpocketing, and stick to well-trodden areas, especially after dark."
        },
        {
          question: "What is Guayaquil famous for?",
          answer: "Guayaquil is famous for several things: being Ecuador's largest city and most important sea port; its spectacular riverfront promenade, the Malecón 2000; the charming, colorful colonial neighborhood of Las Peñas; the surprising urban colony of land iguanas in Parque de las Iguanas; and serving as the primary gateway for travelers heading to the Galápagos Islands."
        }
      ]}
    />
  );
};