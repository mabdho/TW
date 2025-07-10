import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Crdoba: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Córdoba, Argentina (2025 Guide)"}
      description={"Nestled in the foothills of the Sierras Chicas, Córdoba is Argentina's vibrant second city, a captivating blend of colonial history and youthful energy. Known as 'La Docta' (The Learned One) for housing one of South America's oldest universities, its streets buzz with students, artists, and intellectuals. The city's heart is a UNESCO World Heritage site, the Manzana Jesuítica, a block of 17th-century buildings that tell the story of Jesuit influence in the region. Beyond the stunning architecture, you'll find bohemian neighborhoods bursting with art, lively nightlife fueled by the local *cuarteto* music, and sprawling parks offering a green escape. This guide will walk you through all the very best things to do in Córdoba, ensuring a trip filled with culture, history, and unforgettable moments."}
      highlights={["Manzana Jesuítica (Jesuit Block)",
        "Córdoba Cathedral",
        "Paseo del Buen Pastor",
        "Barrio Güemes & Paseo de las Artes",
        "Parque Sarmiento"]}
      attractions={[
        {
        name: "Manzana Jesuítica (Jesuit Block)",
        description: "The historical and cultural soul of Córdoba, the Manzana Jesuítica is a UNESCO World Heritage site that stands as a testament to the region's rich Jesuit past. This block contains a beautifully preserved collection of 17th-century buildings, including the Church of the Company of Jesus, the National University of Córdoba's historical seat, and the Monserrat National School. Walking through these hallowed halls feels like stepping back in time.\n\nA guided tour is highly recommended to fully appreciate the intricate history and architectural marvels. You'll learn about the religious, social, and educational system established by the Jesuits, whose influence profoundly shaped not just Córdoba but much of South America. It's an unmissable starting point for understanding the city's identity.",
        practicalInfo: {
        howToGetThere: "Located in the heart of the city center, easily accessible on foot from most central locations.",
        openingHours: "Tours are typically offered Mon-Sat. Hours vary, so check the university museum's website for the latest schedule.",
        cost: "A small fee is charged for guided tours. The church is free to enter.",
        website: "https://www.unc.edu.ar/sobre-la-unc/museo-historico"
      }
      },
        {
        name: "Córdoba Cathedral",
        description: "Dominating the central Plaza San Martín, the Córdoba Cathedral (Iglesia Nuestra Señora de la Asunción) is a magnificent architectural masterpiece that blends Baroque, Neoclassical, and colonial styles. Its construction spanned over 200 years, resulting in a unique and awe-inspiring structure. The ornate facade, with its intricate carvings and towering belfries, is a photographer's delight.\n\nStep inside to discover a serene and grand interior, featuring stunning frescoes by Emilio Caraffa on the main vault, a gilded altar, and a silver tabernacle. The cathedral is not just a place of worship but also the final resting place of notable figures from Córdoba's history, including General José María Paz. It offers a peaceful retreat from the bustling city square.",
        practicalInfo: {
        howToGetThere: "On Plaza San Martín in the city center.",
        openingHours: "Open daily, generally from morning until evening. Closed to tourists during mass.",
        cost: "Free admission.",
        website: "https://www.catedraldecordoba.org.ar/"
      }
      },
        {
        name: "Paseo del Buen Pastor",
        description: "A perfect example of urban renewal, the Paseo del Buen Pastor is a former women's prison and chapel that has been brilliantly transformed into a vibrant cultural center. This multi-use space now houses art galleries, concert venues, restaurants, and shops, all centered around a large open plaza. It's a popular meeting spot for locals and tourists alike, buzzing with activity day and night.\n\nThe main attraction is the 'dancing waters' show. Every hour, the fountains in the central plaza spring to life in a choreographed spectacle of water, light, and music. The juxtaposition of the modern fountains against the beautifully restored neoclassical chapel creates a unique and memorable scene.",
        practicalInfo: {
        howToGetThere: "Located in the Nueva Córdoba neighborhood, a short walk from the city center.",
        openingHours: "The complex is open daily, typically 10:00 AM to late. Water shows usually run on the hour from late afternoon.",
        cost: "Free to enter and watch the shows.",
        website: "http://www.buenpastor.com.ar/"
      }
      },
        {
        name: "Barrio Güemes & Paseo de las Artes",
        description: "Güemes is Córdoba's bohemian heart, a neighborhood that comes alive with creative energy, especially on weekends. By day, it's a charming area of antique shops, quirky cafes, and colorful street art. By night, it transforms into a nightlife hub with trendy bars, craft breweries, and restaurants serving both traditional and international cuisine.\n\nThe highlight is the Paseo de las Artes, a sprawling outdoor market that takes over the neighborhood every weekend. Hundreds of stalls sell handmade crafts, leather goods, unique clothing, and local art. The atmosphere is electric, with street performers, live music, and the delicious aroma of street food filling the air. It's the perfect place to find a unique souvenir and experience Córdoba's modern, artistic side.",
        practicalInfo: {
        howToGetThere: "Southwest of the city center, about a 15-minute walk from Plaza San Martín.",
        openingHours: "The neighborhood is always accessible. The Paseo de las Artes market runs on Saturdays and Sundays, from late afternoon until late evening.",
        cost: "Free to browse.",
        website: "N/A"
      }
      },
        {
        name: "Parque Sarmiento",
        description: "Designed by the famous landscape architect Carlos Thays (who also designed many of Buenos Aires' parks), Parque Sarmiento is Córdoba's largest and most important green space. It's a sprawling urban oasis perfect for a relaxing afternoon stroll, a picnic, or recreational activities. The park features a beautiful rose garden (the Rosedal), a tranquil lake where you can rent paddle boats, and numerous sculptures scattered throughout.\n\nThe park is also a cultural hub, home to the Caraffa Fine Arts Museum, the Natural Science Museum, and a Greek-style amphitheater. A prominent feature is the 'Faro del Bicentenario' (Bicentennial Lighthouse), a modern 80-meter-high structure that offers panoramic views of the city.",
        practicalInfo: {
        howToGetThere: "Located in the Nueva Córdoba neighborhood, adjacent to the main university campus.",
        openingHours: "Open 24/7, though safest to visit during daylight hours.",
        cost: "Free to enter. Some attractions within the park have admission fees.",
        website: "N/A"
      }
      },
        {
        name: "Iglesia de los Capuchinos (Church of the Capuchins)",
        description: "Arguably one of Argentina's most stunning churches, the Iglesia del Sagrado Corazón de Jesús, commonly known as Los Capuchinos, is a marvel of Gothic Revival architecture. Located in Nueva Córdoba, its asymmetrical facade immediately captures attention—one tower is finished while the other is intentionally incomplete, symbolizing humanity's imperfection and the constant journey towards God.\n\nThe church's exterior is adorned with a host of intricate sculptures and gargoyles, while the interior is just as breathtaking, with soaring vaulted ceilings and vibrant stained-glass windows that bathe the space in colored light. It's a masterpiece of detail and symbolism, built by architect Augusto Ferrari, who integrated elements representing both the earthly and heavenly worlds.",
        practicalInfo: {
        howToGetThere: "On the corner of Buenos Aires and Obispo Oro streets in Nueva Córdoba.",
        openingHours: "Open daily for visits, but closes during services. Check locally for exact times.",
        cost: "Free admission.",
        website: "N/A"
      }
      },
        {
        name: "Museo Superior de Bellas Artes Evita (Palacio Ferreyra)",
        description: "Housed in the magnificent Palacio Ferreyra, a stunning Beaux-Arts mansion, this art museum is as much about the building as it is about the collection inside. The palace itself is a work of art, with opulent staircases, elegant halls, and beautiful grounds that transport you to a bygone era of Argentine aristocracy.\n\nThe museum's collection focuses on art from Córdoba and Argentina, featuring paintings, sculptures, and graphic works from the 19th century to the present day. The permanent collection is complemented by excellent temporary exhibitions. It offers a comprehensive overview of the region's artistic evolution within one of the city's most impressive architectural landmarks.",
        practicalInfo: {
        howToGetThere: "Located on the edge of Parque Sarmiento in Nueva Córdoba.",
        openingHours: "Tuesday to Sunday, 10:00 AM - 7:00 PM. Closed on Mondays.",
        cost: "Small admission fee. Wednesdays are often free.",
        website: "https://cultura.cba.gov.ar/palacio-ferreyra/"
      }
      },
        {
        name: "Cabildo de Córdoba (Colonial Town Hall)",
        description: "Standing proudly on Plaza San Martín, the historic Cabildo is one of Argentina's best-preserved colonial buildings. For centuries, it served as the center of government and justice in Córdoba. Today, it functions as the City Museum, with its corridors and courtyards telling the story of Córdoba's civic history from its founding to the present day.\n\nExploring the Cabildo's two levels and patios reveals architectural details spanning three centuries. The exhibitions inside cover a wide range of topics, including archaeology, colonial art, and the city's social development. Don't miss the view of the Plaza and Cathedral from the upper-level balconies. It's a key piece of the historical puzzle that makes up central Córdoba.",
        practicalInfo: {
        howToGetThere: "On Plaza San Martín, opposite the Cathedral.",
        openingHours: "Typically open Tuesday to Sunday, morning and afternoon. Check for current hours.",
        cost: "Free admission.",
        website: "https://cultura.cordoba.gob.ar/el-cabildo-de-cordoba/"
      }
      },
        {
        name: "Day Trip to the Sierras Chicas",
        description: "While the city has much to offer, one of the best things to do is escape to the nearby Sierras Chicas, the mountain range that provides a stunning backdrop to Córdoba. Picturesque towns like Villa General Belgrano, La Cumbrecita, and Alta Gracia are popular destinations, each offering a unique flavor.\n\nVilla General Belgrano is known for its Bavarian-style architecture and its famous Oktoberfest celebration. La Cumbrecita is a pedestrian-only alpine village perfect for hiking and enjoying nature. Alta Gracia is home to another important Jesuit Estancia and the childhood home of Che Guevara, now a museum. These towns are perfect for hiking, relaxing by a river, and enjoying the fresh mountain air.",
        practicalInfo: {
        howToGetThere: "Regular buses depart from the Córdoba Bus Terminal to all major towns in the Sierras. The journey takes 1.5 to 2.5 hours.",
        openingHours: "Year-round destination.",
        cost: "Cost of a round-trip bus ticket plus expenses in the towns.",
        website: "https://www.cordobaturismo.gov.ar/"
      }
      },
        {
        name: "Mercado Norte",
        description: "For an authentic taste of local life, head to the Mercado Norte. This bustling indoor market is where Cordobeses shop for fresh produce, quality meats, cheeses, and regional specialties. The vibrant atmosphere, with vendors calling out their daily offers and locals haggling for the best prices, is an experience in itself.\n\nBeyond the stalls, the market has a fantastic food court where you can sample traditional Argentine dishes like locro (a hearty stew), empanadas, and of course, a classic *asado* (barbecue). It’s a great, affordable lunch spot and the perfect place to try local delicacies like goat cheese and salames from the sierras.",
        practicalInfo: {
        howToGetThere: "Located on Oncativo 50, a few blocks north of the central plaza.",
        openingHours: "Monday to Saturday, from early morning until mid-afternoon. Closed on Sundays.",
        cost: "Free to enter; food prices are very reasonable.",
        website: "https://mercadonorte.com.ar/"
      }
      },
        {
        name: "Museo de la Memoria",
        description: "Located in a building that was once a clandestine detention and torture center during Argentina's last military dictatorship (1976-1983), the Museo de la Memoria is a powerful and sobering museum. It serves as a space for remembrance and reflection, honoring the thousands of people who were 'disappeared' during this dark period of the country's history.\n\nThe exhibits document the human rights abuses through photographs, testimonies, and preserved sections of the original detention center. While it can be an emotionally challenging visit, it is an essential one for understanding Argentina's recent past and its ongoing struggle for justice and memory.",
        practicalInfo: {
        howToGetThere: "Located at Pasaje Santa Catalina 66, in the city center.",
        openingHours: "Tuesday to Friday, 10:00 AM - 5:00 PM. Hours can vary, check locally.",
        cost: "Free admission.",
        website: "https://www.apm.gov.ar/espacio/museo-de-sitio"
      }
      },
        {
        name: "Plaza San Martín",
        description: "Plaza San Martín is the historic epicenter of Córdoba, where the city was founded in 1573. This leafy main square is constantly buzzing with activity and serves as the city's primary public forum. It is surrounded by Córdoba's most important historical buildings: the Cathedral, the Cabildo, and several colonial-era banks.\n\nAt its center stands a majestic equestrian statue of General José de San Martín, Argentina's liberator. The plaza is a wonderful place to sit on a bench, people-watch, and soak in the city's atmosphere. It’s the starting point for most city tours and the perfect reference point for exploring the historic downtown.",
        practicalInfo: {
        howToGetThere: "The main square in the heart of the city center.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Universidad Nacional de Córdoba",
        description: "Known as 'La Docta', Córdoba's identity is inseparable from its university. Founded in 1613, the Universidad Nacional de Córdoba (UNC) is the oldest in Argentina and the fourth-oldest in the Americas. While the historic seat is part of the Jesuit Block, the sprawling modern campus is a city within a city.\n\nVisitors can explore the historic buildings on the Manzana Jesuítica, which house fascinating libraries and museums. A walk through the modern Ciudad Universitaria campus near Parque Sarmiento offers a glimpse into the life of the city's 100,000+ students. The university's presence infuses Córdoba with a dynamic, intellectual, and youthful spirit.",
        practicalInfo: {
        howToGetThere: "The historic block is in the center. The main campus is south of the center, next to Parque Sarmiento.",
        openingHours: "Campus grounds are generally open. Museum hours vary.",
        cost: "Free to walk around the campus. Museums may have a fee.",
        website: "https://www.unc.edu.ar/"
      }
      },
        {
        name: "Cripta Jesuítica",
        description: "One of Córdoba's most intriguing hidden gems is the Cripta Jesuítica. This former Jesuit novitiate was buried for centuries, only to be rediscovered by accident in 1989 during construction work. The beautifully restored underground space now serves as a unique cultural venue for concerts, plays, and art exhibitions.\n\nDescending into the crypt feels like uncovering a lost secret. The thick stone walls, vaulted ceilings, and atmospheric lighting create an unforgettable ambiance. It's a small but fascinating site that offers a different perspective on the city's extensive Jesuit heritage.",
        practicalInfo: {
        howToGetThere: "Located on Rivera Indarte street, underneath the intersection with Avenida Colón.",
        openingHours: "Typically open on weekdays for visits, and evenings for events. Check the city's cultural agenda.",
        cost: "Small entrance fee for visits.",
        website: "https://cultura.cordoba.gob.ar/cripta-jesuitica/"
      }
      },
        {
        name: "Observatorio Astronómico de Córdoba",
        description: "Founded in 1871 by President Domingo Sarmiento, the Córdoba Astronomical Observatory was a pioneering scientific institution in Argentina. It played a crucial role in mapping the southern skies. Today, it continues to be an active research center and also houses a museum dedicated to the history of astronomy in the country.\n\nVisitors can see historic telescopes and instruments used in the observatory's early days. The main attraction is the Friday night visit, where, weather permitting, you can look through the powerful telescopes to observe planets and stars. It's a fascinating experience for anyone interested in science and the cosmos.",
        practicalInfo: {
        howToGetThere: "Located in a quiet neighborhood just west of the city center, a short taxi or bus ride away.",
        openingHours: "Museum open during the day. Public observation nights are typically Friday evenings (reservations often required).",
        cost: "A small fee for tours and night visits.",
        website: "https://oac.unc.edu.ar/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Córdoba's historic center is very walkable. For longer distances, the city has a public bus system; you'll need to purchase a rechargeable 'Red Bus' card. Taxis are plentiful and metered. Ride-sharing services like Cabify are also available and often offer competitive pricing.",
        whereToStay: "For first-time visitors, stay in the Centro (city center) to be close to historical sites. Nueva Córdoba is ideal for those seeking nightlife and a youthful vibe, as it's near the university and Parque Sarmiento. For a more bohemian and trendy experience with great bars and restaurants, choose Barrio Güemes.",
        bestTimeToVisit: "The best times to visit Córdoba are during the spring (September to November) and autumn (March to May). The weather is mild and pleasant, perfect for exploring the city and the nearby sierras. Summer (December to February) can be very hot and humid, while winter (June to August) is cool but generally sunny.",
        suggestedItinerary: "Day 1: Explore the historic center, including the Manzana Jesuítica, Cathedral, and Cabildo on Plaza San Martín. In the evening, enjoy the water show at Paseo del Buen Pastor. Day 2: Dive into art and nature. Visit the Palacio Ferreyra and Museo Caraffa, then relax in Parque Sarmiento. In the evening, explore the bohemian Barrio Güemes. Day 3: Take a day trip to the Sierras Chicas. Choose a town like Villa General Belgrano for its alpine charm or Alta Gracia for its Jesuit history and Che Guevara museum."
      }}
      faqs={[{
          question: "Is Córdoba expensive?",
          answer: "Córdoba is generally considered more affordable than Buenos Aires. Costs for accommodation, food, and transport are reasonable. You can enjoy a delicious meal at a local restaurant or the Mercado Norte for a good price. While the Argentine Peso can be volatile, visitors often find their money goes a long way. Major credit cards are accepted in most hotels and larger restaurants, but it's wise to carry cash for smaller shops and markets."
        },
        {
          question: "How many days do you need in Córdoba?",
          answer: "A stay of 3 to 4 days is ideal. This allows for two full days to explore the city's main attractions—the historical center, museums, and neighborhoods like Güemes—at a relaxed pace. It also gives you at least one full day for a highly recommended excursion into the beautiful Sierras Chicas to visit one of the charming mountain towns."
        },
        {
          question: "Is Córdoba safe?",
          answer: "Córdoba is generally a safe city for tourists, especially in the main areas like the Centro, Nueva Córdoba, and Güemes. However, like any large city, it's important to take standard precautions. Be aware of your surroundings, watch out for pickpockets in crowded areas like public transport and markets, and avoid walking alone in unlit areas late at night. Stick to reputable taxis or ride-sharing apps."
        },
        {
          question: "What is Córdoba famous for?",
          answer: "Córdoba is famous for several things. Historically, it's known for its UNESCO World Heritage Jesuit Block and for being home to one of the oldest universities in the Americas, earning it the nickname 'La Docta'. Culturally, it's the birthplace of the upbeat musical genre *cuarteto*. Geographically, it's the gateway to the scenic Sierras de Córdoba mountain range, a popular recreational area."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1669399554927-cc38ca6bc3ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxDcmRvYmElMjB0cmF2ZWx8ZW58MHwwfHx8MTc1MjE0MDE1N3ww&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};