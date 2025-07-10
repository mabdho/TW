import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Medellin: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Medellin, Colombia (2025 Guide)"}
      description={"Once infamous, now innovative, Medellin has undergone one of the most remarkable urban transformations in modern history. Nestled in a lush Andean valley, Colombia's second-largest city is affectionately known as the 'City of Eternal Spring' for its perfect year-round climate. This vibrant metropolis captivates visitors with its groundbreaking public transport, thriving arts scene, and the incredible warmth of its people, the Paisas. From the colorful streets of Comuna 13 to the serene heights of Parque Arví, Medellin offers a compelling blend of resilient history and forward-thinking culture. It’s a city that invites you to explore, learn, and be inspired. Whether you're an art lover, a nature enthusiast, or a foodie, you'll find an endless list of the best things to do in Medellin that will leave a lasting impression on your heart."}
      highlights={["Comuna 13 Tour",
        "Plaza Botero",
        "Medellin Metrocable",
        "Parque Arví",
        "Jardín Botánico de Medellín"]}
      galleryImages={[
        { url: "", alt: "Medellin landmark 1", caption: "Medellin landmark 1 - placeholder" },
        { url: "", alt: "Medellin landmark 2", caption: "Medellin landmark 2 - placeholder" },
        { url: "", alt: "Medellin landmark 3", caption: "Medellin landmark 3 - placeholder" },
        { url: "", alt: "Medellin landmark 4", caption: "Medellin landmark 4 - placeholder" },
        { url: "", alt: "Medellin landmark 5", caption: "Medellin landmark 5 - placeholder" },
        { url: "", alt: "Medellin landmark 6", caption: "Medellin landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Comuna 13 Tour",
        description: "Comuna 13 is the ultimate symbol of Medellin's incredible transformation. Once one of the most dangerous neighborhoods in the world, it is now a vibrant beacon of hope, community, and art. The best way to experience it is through a guided tour, where local guides share powerful personal stories of the area's violent past and its inspiring rebirth. \n\nThe neighborhood is famous for its outdoor electric escalators, which replaced hundreds of steep steps and connected the community to the city, and its stunning graffiti and street art that cover nearly every wall. These murals tell stories of resilience, peace, and local heroes. You'll also see talented street performers, from breakdancers to rappers, adding to the dynamic atmosphere.",
        practicalInfo: {
        howToGetThere: "Take Metro Line B to San Javier station. From there, you can walk or take a short bus or taxi ride to the start of the escalator section. Many guided tours offer hotel pickup or meet at the station.",
        openingHours: "Tours run daily, typically from 9 AM to 6 PM. The area is open, but it's best to visit during daylight hours.",
        cost: "Free to enter, but guided tours are highly recommended and range from free (tip-based) to $30 USD per person.",
        website: "https://www.medellin.travel/en/"
      }
      },
        {
        name: "Plaza Botero",
        description: "Located in Medellin's historic center, Plaza Botero is a large, open-air art gallery dedicated to the city's most famous artist, Fernando Botero. The plaza is home to 23 of his iconic, voluptuous bronze sculptures, donated by the artist himself. It’s a whimsical and accessible way to experience his unique style, characterized by exaggerated proportions and voluminous figures.\n\nThe bustling plaza is a fantastic spot for people-watching and photography. It’s surrounded by two important cultural buildings: the Museo de Antioquia and the Rafael Uribe Uribe Palace of Culture, making it the artistic and cultural heart of the city. Strolling among these larger-than-life statues is an essential Medellin experience.",
        practicalInfo: {
        howToGetThere: "Take Metro Line A to Parque Berrío station. The plaza is directly outside the station.",
        openingHours: "Open 24/7, but best visited during daylight hours (8 AM to 6 PM) for safety and the best light.",
        cost: "Free.",
        website: "https://www.museodeantioquia.co/en/"
      }
      },
        {
        name: "Medellin Metrocable",
        description: "More than just a tourist attraction, the Metrocable is a vital part of Medellin's public transportation system and a testament to its social innovation. These cable car lines connect the hillside communities (comunas) with the main valley metro system, providing residents with access to jobs and services. For visitors, it offers an unforgettable ride and breathtaking panoramic views of the entire city sprawling across the Aburrá Valley.\n\nThere are several lines, but the most popular for tourists is Line L, which connects to Santo Domingo station and continues up the mountain to Parque Arví. The journey itself is a powerful experience, showcasing the city's vastness and the dense architecture of the comunas from a unique perspective.",
        practicalInfo: {
        howToGetThere: "Accessible from several Metro stations. To go to Parque Arví, take Line A to Acevedo station, then transfer to Line K (Metrocable) to Santo Domingo, then transfer to Line L to the park.",
        openingHours: "Varies by line. Line L to Arví: Tue-Sat 9am-6pm, Sun 8:30am-6pm. Closed Mondays.",
        cost: "A standard Metro/Metrocable ride is about $1 USD. The ride on Line L to Parque Arví has a separate, higher fee of approx. $4 USD.",
        website: "https://www.metrodemedellin.gov.co/en/"
      }
      },
        {
        name: "Parque Arví",
        description: "Escape the urban hustle and ascend into the cool, fresh air of Parque Arví, a massive nature reserve and pre-Hispanic archeological site in the mountains east of the city. The journey via the Metrocable is an adventure in itself, lifting you high above the city and into a dense forest canopy. Once there, you can explore over 54 kilometers of walking and biking trails that wind through eucalyptus and pine forests.\n\nThe park is a haven for nature lovers, offering opportunities for bird watching, hiking, and picnicking. Near the main entrance, there is a small farmer's market, the Mercado Arví, where local vendors sell fresh produce, traditional snacks, and handmade crafts. It’s the perfect green lung for a city that never stops moving.",
        practicalInfo: {
        howToGetThere: "Take Metro Line A to Acevedo, transfer to Metrocable Line K to Santo Domingo, then take the separate Metrocable Line L directly to the park entrance.",
        openingHours: "Tuesday - Sunday, 9:00 AM to 6:00 PM. Closed on Mondays (or Tuesdays if Monday is a holiday).",
        cost: "Park entry is free. The Metrocable Line L ride costs approx. $4 USD each way. Guided tours and activities within the park have separate fees.",
        website: "https://parquearvi.org/en/"
      }
      },
        {
        name: "Jardín Botánico de Medellín",
        description: "The Medellín Botanical Garden is a 34-acre living museum and a tranquil oasis in the heart of the city. It's a wonderful place to spend an afternoon wandering through diverse collections of plants, including a palm garden, a desert garden, and a lake teeming with wildlife. You might even spot large iguanas basking in the sun.\n\nThe garden's centerpiece is the stunning 'Orquideorama', a futuristic wooden and metal mesh structure that provides shade and collects water for the vast orchid and butterfly collection beneath it. The architecture is as much of an attraction as the flora. The garden is perfect for a relaxing stroll, a picnic, or simply escaping the city's energy for a few hours.",
        practicalInfo: {
        howToGetThere: "Take Metro Line A to Universidad station. The garden is a short walk from the station, located next to Parque Explora.",
        openingHours: "Tuesday - Sunday, 9:00 AM to 4:30 PM.",
        cost: "Free.",
        website: "https://www.botanicomedellin.org/"
      }
      },
        {
        name: "Day Trip to Guatapé and El Peñol",
        description: "While not technically in Medellin, a day trip to Guatapé is a must-do for anyone visiting the region. This vibrant resort town is famous for two things: its brightly colored buildings and the monolithic Rock of El Peñol. The town's houses and shops are adorned with 'zócalos' – decorative panels along the base of the buildings depicting everything from local history to geometric patterns.\n\nThe main event is climbing the 740 steps built into a crevice of El Peñol. The strenuous climb is rewarded with what might be the best view in all of Colombia: a stunning 360-degree panorama of the sprawling, man-made reservoir with its countless green islands. After descending, you can explore the charming streets of Guatapé or take a boat tour on the lake.",
        practicalInfo: {
        howToGetThere: "Buses leave from Medellin's Terminal del Norte every 30 minutes. The journey takes about 2 hours. Organized day tours are also widely available.",
        openingHours: "The rock is generally open from 8 AM to 6 PM daily.",
        cost: "Bus fare is approx. $6 USD each way. Climbing El Peñol costs about $7 USD. Day tours range from $30-$50 USD.",
        website: "https://www.guatape-antioquia.gov.co/"
      }
      },
        {
        name: "Museo de Antioquia",
        description: "Facing Plaza Botero, the Museo de Antioquia is the city's most important museum and a perfect complement to the sculptures outside. It houses a vast collection of Fernando Botero's paintings and drawings, forming the largest single collection of his work in the world. Seeing his art on canvas provides a deeper understanding of his signature 'Boterismo' style.\n\nBeyond Botero, the museum offers a comprehensive look at Colombian and international art, with galleries dedicated to colonial-era religious art, modern photography, and contemporary installations. It's a beautifully curated space that provides critical context to the artistic soul of Medellin and the broader region of Antioquia.",
        practicalInfo: {
        howToGetThere: "Take Metro Line A to Parque Berrío station. The museum is located on Plaza Botero.",
        openingHours: "Monday - Saturday, 10:00 AM to 5:30 PM.",
        cost: "Approx. $7 USD for foreign tourists.",
        website: "https://www.museodeantioquia.co/en/"
      }
      },
        {
        name: "Parque Lleras and El Poblado",
        description: "El Poblado is Medellin's most upscale and tourist-friendly neighborhood, and Parque Lleras is its vibrant heart. By day, it's a pleasant park surrounded by cafes and boutiques. By night, the area transforms into the city's premier nightlife destination, with dozens of bars, salsa clubs, and world-class restaurants packed into the surrounding blocks.\n\nWhile it's the most international part of Medellin, it's an excellent base for visitors. The area is safe, walkable, and offers a huge variety of dining and entertainment options, from high-end gastronomic experiences to lively sports bars and rooftop lounges with spectacular city views. It's the perfect place to experience the modern, cosmopolitan side of Medellin.",
        practicalInfo: {
        howToGetThere: "Take Metro Line A to Poblado station. From there, it's a 10-15 minute uphill walk or a short taxi ride to Parque Lleras.",
        openingHours: "Restaurants and bars are typically open from noon until late, especially on weekends.",
        cost: "Free to visit the park. Prices at establishments vary widely.",
        website: "https://www.medellin.travel/en/"
      }
      },
        {
        name: "Museo Casa de la Memoria",
        description: "To truly understand Medellin's transformation, a visit to the Museo Casa de la Memoria (House of Memory Museum) is essential. This poignant and thoughtfully designed museum is dedicated to honoring the victims of Colombia's decades-long urban and armed conflict. It moves beyond statistics to tell the human stories behind the violence through interactive exhibits, personal testimonies, and art installations.\n\nIt's a sobering but incredibly important experience that provides crucial context for the city's celebrated renewal. The museum doesn't just dwell on the past; it focuses on themes of resilience, reconciliation, and the ongoing process of peace-building, leaving visitors with a profound respect for the strength of the Paisa people.",
        practicalInfo: {
        howToGetThere: "Located in the Boston neighborhood, it's a short taxi ride from the city center or a 15-minute walk from the Pabellon del Agua EPM tram stop (Line T-A).",
        openingHours: "Tuesday - Friday 9:00 AM to 6:00 PM; Saturday - Sunday 10:00 AM to 4:00 PM. Closed Mondays.",
        cost: "Free.",
        website: "https://www.museocasadelamemoria.gov.co/"
      }
      },
        {
        name: "Pueblito Paisa",
        description: "Perched atop Cerro Nutibara, Pueblito Paisa is a charming, small-scale replica of a traditional Antioquian village. Complete with a cobblestone square, a classic white church, and colorful buildings housing craft shops and restaurants, it offers a glimpse into the region's rural heritage. It's a bit touristy, but the real draw is the location.\n\nCerro Nutibara offers stunning 360-degree views of the entire Medellin valley. It's an excellent spot to orient yourself and appreciate the city's unique geography, nestled between mountains. It's particularly beautiful around sunset as the city lights begin to twinkle on. The hill also features a sculpture park and walking paths.",
        practicalInfo: {
        howToGetThere: "It's a steep walk up the hill. The easiest way is to take a taxi or rideshare directly to the top. The closest Metro station is Industriales, but it's still a significant walk.",
        openingHours: "The hill is open from 6:00 AM to midnight; shops and restaurants have more limited hours.",
        cost: "Free to enter.",
        website: "https://www.medellin.gov.co/es/secretaria-de-cultura-ciudadana/cerro-nutibara/"
      }
      },
        {
        name: "Mercado del Río",
        description: "For foodies, Mercado del Río is paradise. This modern, upscale food hall is housed in a renovated brick warehouse and features over 40 different restaurants and food stalls offering a huge variety of cuisines. You can find everything from traditional Colombian dishes like bandeja paisa to international options like Peruvian ceviche, Mexican tacos, gourmet burgers, and fresh pasta.\n\nThe lively, communal atmosphere makes it a great place for groups. You can grab a drink from a central bar and then wander around to choose your meal. It's a fantastic spot for lunch or a casual dinner, showcasing the modern and diverse culinary scene that is exploding in Medellin.",
        practicalInfo: {
        howToGetThere: "Located next to the Bancolombia headquarters, it's a 10-minute walk from the Industriales Metro station.",
        openingHours: "Sunday - Wednesday 12:00 PM to 10:00 PM; Thursday - Saturday 12:00 PM to 11:00 PM.",
        cost: "Free to enter. Meal prices range from $5 to $20 USD.",
        website: "https://mercadodelrio.co/"
      }
      },
        {
        name: "Parque Explora",
        description: "Parque Explora is Colombia's largest interactive science museum and a fantastic attraction for families, students, or anyone with a curious mind. The striking red building, designed to look like four interconnected boxes, is an architectural landmark. Inside, you'll find over 300 hands-on exhibits covering physics, neuroscience, technology, and more.\n\nThe park also features South America's largest freshwater aquarium, showcasing the incredible biodiversity of Colombia's rivers, including the Amazon and Orinoco. There's also a planetarium and a vivarium with poison dart frogs and other reptiles. It's an engaging, educational, and fun way to spend a half-day.",
        practicalInfo: {
        howToGetThere: "Take Metro Line A to Universidad station. The park is right next to the station and the Botanical Garden.",
        openingHours: "Tuesday - Friday 8:30 AM to 5:30 PM; Saturday - Sunday 10:00 AM to 6:30 PM.",
        cost: "Approx. $10 USD for a full access passport.",
        website: "https://www.parqueexplora.org/"
      }
      },
        {
        name: "Modern Art Museum of Medellín (MAMM)",
        description: "Housed in a striking building that combines a repurposed steel mill with a modern concrete structure, the Museo de Arte Moderno de Medellín (MAMM) is the city's hub for contemporary art. The museum focuses on the evolution of Colombian art in the 20th and 21st centuries, providing a counterpoint to the more classical collections at the Museo de Antioquia.\n\nThe MAMM has a significant permanent collection of works by pioneering Colombian modern artist Débora Arango, known for her politically charged and controversial paintings. The museum also features rotating exhibitions from national and international artists, a small cinema showing independent films, and a fantastic rooftop terrace with city views. It’s a must-visit for lovers of modern art and architecture.",
        practicalInfo: {
        howToGetThere: "Located in Ciudad del Río, it's a 15-minute walk from the Industriales Metro station or a short taxi ride from El Poblado.",
        openingHours: "Tuesday - Friday 11:00 AM to 7:00 PM; Saturday - Sunday 11:00 AM to 6:00 PM.",
        cost: "Approx. $5 USD. Entry is free on the last Friday of the month from 4 PM.",
        website: "https://www.elmamm.org/en"
      }
      },
        {
        name: "Salsa Dancing in Laureles",
        description: "While El Poblado has plenty of clubs, the neighborhood of Laureles offers a more authentic salsa dancing experience. This middle-class, less tourist-heavy area is known for its circular streets, relaxed vibe, and its legendary salsa bars. Places like Son Havana and El Tibiri are institutions where locals and in-the-know foreigners go to dance seriously.\n\nThe atmosphere is electric and welcoming, even for beginners. You don't need to be an expert to enjoy the music and the energy; many places offer beginner classes early in the evening. Experiencing a night out in Laureles is a fantastic way to dive into the local culture and witness the passion Paisas have for music and dance.",
        practicalInfo: {
        howToGetThere: "Laureles is best reached by taxi or rideshare. The closest Metro station is Estadio, but the main salsa district is a walk from there.",
        openingHours: "Bars are typically busiest from Thursday to Saturday, 9:00 PM until late.",
        cost: "Cover charges are usually $3-$5 USD. Drinks are reasonably priced.",
        website: "N/A (Search for specific clubs like 'Son Havana Medellin')."
      }
      },
        {
        name: "Comuna 8 (Villa Hermosa)",
        description: "For those looking to get off the beaten path and see another side of Medellin's transformation, a visit to Comuna 8 is highly recommended. Less crowded than Comuna 13, this area also has its own Metrocable line (Line H) and a story of renewal. The cable car ride itself offers spectacular and different views of the city's eastern slopes.\n\nAt the top, you can explore the neighborhood, see local life, and visit viewpoints like the 'Paseo Urbano 13 de Noviembre'. This area is less about graffiti and more about understanding the daily life and impact of urban planning projects. It’s an authentic look at a community in progress, best experienced with a local guide who can share the area's history and current projects.",
        practicalInfo: {
        howToGetThere: "Take the Ayacucho Tram (Line T-A) from San Antonio station to Oriente station, then transfer to the Metrocable Line H.",
        openingHours: "Best visited during daylight hours.",
        cost: "The ride is part of the standard Metro fare (approx. $1 USD).",
        website: "https://www.metrodemedellin.gov.co/en/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Medellin's public transport is a model of urban innovation. The Metro is the backbone, running north-south (Line A) and east-west (Line B). It's clean, efficient, and cheap. The integrated Metrocable (gondola) lines are essential, connecting hillside communities and offering breathtaking views. To use the system, purchase a rechargeable Cívica card. Taxis are plentiful and affordable, but always ensure the meter is used. Ride-sharing apps like Uber and DiDi are also widely available and offer fixed pricing.",
        whereToStay: "El Poblado is the most popular area for tourists, offering a vast array of hotels, hostels, restaurants, and nightlife. It's safe, walkable, and very cosmopolitan. For a more authentic, local vibe, consider Laureles. This neighborhood has a burgeoning foodie scene, relaxed parks, and fantastic salsa clubs. Envigado, technically a separate municipality but part of the metro area, offers a quieter, more residential, and family-friendly atmosphere.",
        bestTimeToVisit: "Medellin is known as the 'City of Eternal Spring' for its consistent, pleasant climate year-round, with average temperatures around 22°C (72°F). The two main dry seasons are from December to March and July to August, which are ideal for sightseeing. The wettest months are typically April, May, October, and November. A highlight is the 'Feria de las Flores' (Flower Festival) in early August, a spectacular week-long celebration of Paisa culture.",
        suggestedItinerary: "Day 1: History & Transformation. Start in the center at Plaza Botero and the Museo de Antioquia. In the afternoon, take a guided tour of Comuna 13 to experience its street art and inspiring story. \nDay 2: Nature & Views. Ride the Metrocable up to Parque Arví for a morning of hiking and fresh air. In the afternoon, visit the serene Jardín Botánico back in the city. Enjoy dinner and nightlife in El Poblado. \nDay 3: Day Trip or Modern Culture. Take a full-day trip to the colorful town of Guatapé and climb the Rock of El Peñol. Alternatively, stay in the city, visit the Modern Art Museum (MAMM), explore the foodie scene in Laureles, and try a salsa class at night."
      }}
      faqs={[{
          question: "Is Medellin expensive?",
          answer: "Compared to major cities in North America or Europe, Medellin is very affordable. A meal at a local restaurant can cost $4-7 USD, while a three-course meal at a mid-range restaurant might be $15-25 USD. Public transportation is extremely cheap, with a metro ride costing around $1 USD. Accommodation varies, but you can find excellent hostels for $15-25 USD per night and comfortable mid-range hotels for $60-100 USD. While you can certainly spend a lot at high-end establishments in El Poblado, it's generally an easy city to visit on a budget."
        },
        {
          question: "How many days do you need in Medellin?",
          answer: "To get a good feel for the city and see the main highlights, a minimum of 3 to 4 days is recommended. This allows you to explore the city center, visit Comuna 13, experience the Metrocable and Parque Arví, and enjoy the nightlife. If you want to include a day trip to the nearby town of Guatapé (which is highly recommended), you should plan for 4 to 5 days. This provides a more relaxed pace to soak in the culture without rushing."
        },
        {
          question: "Is Medellin safe?",
          answer: "Medellin has transformed dramatically from its dangerous past and is now considered safe for tourists. The main tourist areas like El Poblado and Laureles are heavily policed and generally very safe. However, like any large city, it's important to exercise caution. Avoid walking alone at night in deserted areas, especially in the downtown area (El Centro) after business hours. Be discreet with valuables like phones and jewelry to avoid petty theft. Use official taxis or ride-sharing apps instead of hailing unmarked cars. By taking standard precautions, you are very likely to have a safe and wonderful trip."
        },
        {
          question: "What is Medellin famous for?",
          answer: "Medellin is famous for several things. Firstly, its remarkable social and urban transformation from the most dangerous city in the world to a hub of innovation. It's also famous for its perfect, spring-like climate, earning it the nickname 'City of Eternal Spring'. Art is a major draw, specifically the works of its most famous son, Fernando Botero. The city is also known for its pioneering public transport system, the Metrocable, its vibrant coffee culture, the annual Feria de las Flores (Flower Festival), and the warm, welcoming nature of its people, known as Paisas."
        }
      ]}
    />
  );
};