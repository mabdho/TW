import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Bucharest: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Bucharest, Romania (2025 Guide)"}
      description={"Once known as the 'Little Paris of the East,' Bucharest is a city of fascinating contrasts, where Belle Époque grandeur sits alongside stark communist-era structures and vibrant modern energy. Romania's capital is a dynamic hub of history, art, and nightlife, offering a complex and compelling story at every turn. From the world's heaviest building to serene parks and hidden monastery courtyards, the city reveals its layers to those willing to explore beyond the surface. Whether you're a history buff, a foodie, or simply seeking an affordable European city break, you'll find an incredible array of experiences. This guide will walk you through the very best things to do in Bucharest, ensuring you capture the unique spirit of this resilient and captivating city."}
      highlights={["Palace of the Parliament",
        "Bucharest Old Town (Centrul Vechi)",
        "Romanian Athenaeum",
        "\"Dimitrie Gusti\" National Village Museum",
        "Cărturești Carusel"]}
      attractions={[
        {
        name: "Palace of the Parliament",
        description: "An absolute titan of architecture, the Palace of the Parliament is the defining landmark of Bucharest's skyline and a stark reminder of Romania's communist past. Commissioned by dictator Nicolae Ceaușescu, it is the heaviest building in the world and the second-largest administrative building after the Pentagon. Its construction required demolishing a significant portion of Bucharest's historic center, displacing thousands of residents.\n\nA guided tour is the only way to see the interior, a jaw-dropping expanse of marble, crystal chandeliers, and opulent halls. The sheer scale is hard to comprehend, with over 1,000 rooms decorated with the finest Romanian materials. It's an essential visit to understand the megalomania that shaped modern Bucharest.",
        practicalInfo: {
        howToGetThere: "Located at Strada Izvor 2-4. The nearest metro station is Izvor (M1/M3 line).",
        openingHours: "Daily, typically 9:00 AM - 5:00 PM. Check website for tour times and booking requirements.",
        cost: "Standard tours cost around 60-90 RON. Photo/video fees may apply. Booking in advance is highly recommended.",
        website: "http://cic.cdep.ro/en"
      }
      },
        {
        name: "Bucharest Old Town (Centrul Vechi)",
        description: "The vibrant heart of the city, Centrul Vechi is a maze of cobblestone streets, beautifully restored 19th-century buildings, and lively terraces. Once the domain of merchants and craftsmen, it's now Bucharest's primary hub for dining, entertainment, and nightlife. By day, it's a charming area to wander, discovering historic churches like Stavropoleos Monastery and famous landmarks like the Macca-Villacrosse Passage.\n\nAs evening approaches, the area transforms. Bars, pubs, and restaurants spill out onto the streets, creating an energetic atmosphere that lasts late into the night. It's the perfect place to sample traditional Romanian cuisine, enjoy a coffee, or simply soak in the city's dynamic pulse. Despite its modern vibrancy, hints of its past are everywhere, from old inn courtyards to historic bank buildings.",
        practicalInfo: {
        howToGetThere: "Centrally located, easily accessible on foot from major squares. Nearest metro stations are Universitate and Piața Unirii.",
        openingHours: "24/7, though individual shops and restaurants have their own hours.",
        cost: "Free to walk around.",
        website: "N/A (public area)"
      }
      },
        {
        name: "Romanian Athenaeum",
        description: "An architectural jewel and a symbol of Romanian culture, the Romanian Athenaeum is the city's most prestigious concert hall. This stunning, circular, domed building was financed almost entirely by public donations in a campaign called 'Give a penny for the Athenaeum.' Its neoclassical facade with ionic columns is impressive, but the interior is truly breathtaking.\n\nInside, a magnificent fresco depicting key moments in Romanian history wraps around the circular concert hall. It's home to the George Enescu Philharmonic Orchestra and hosts the world-renowned George Enescu International Festival. Even if you don't attend a concert, it's worth visiting during the day (when possible) to admire the architecture and opulent decor.",
        practicalInfo: {
        howToGetThere: "Located on Strada Benjamin Franklin 1-3, near Revolution Square. Nearest metro is Piața Romană.",
        openingHours: "Visiting hours are typically 12:00 PM - 5:00 PM Tuesday-Sunday, but can vary based on rehearsals and events. Check in person.",
        cost: "Around 10 RON for a daytime visit.",
        website: "https://www.fge.org.ro/"
      }
      },
        {
        name: "\"Dimitrie Gusti\" National Village Museum",
        description: "Escape the urban hustle and step into rural Romania at the National Village Museum. Located on the shores of Lake Herăstrău, this magnificent open-air museum showcases traditional Romanian village life. It features over 300 authentic peasant houses, farms, windmills, and wooden churches, relocated from different ethnographic regions of Romania.\n\nWalking through the museum is like traveling back in time and across the country. Each building is furnished with authentic objects, offering a glimpse into the customs, crafts, and daily routines of rural communities. It's a peaceful and fascinating experience, providing deep insight into the country's soul and heritage. It's especially beautiful in spring and autumn.",
        practicalInfo: {
        howToGetThere: "Located in King Michael I Park at Șoseaua Pavel D. Kiseleff 28-30. Nearest metro is Aviatorilor.",
        openingHours: "Varies by season. Summer: ~9:00 AM - 7:00 PM daily. Winter: shorter hours, some houses may be closed.",
        cost: "Around 30 RON for adults.",
        website: "https://muzeul-satului.ro/en/"
      }
      },
        {
        name: "Cărturești Carusel",
        description: "Often called one of the most beautiful bookshops in the world, Cărturești Carusel is a must-visit even if you're not planning to buy a book. Housed in a magnificently restored 19th-century building in the Old Town, its name translates to 'Carousel of Light.' The interior is a stunning six-story monument to literature, with minimalist white balconies, spiraling staircases, and a skylight that floods the space with natural light.\n\nBeyond being an Instagram hotspot, it offers a vast collection of books (including a good English section), music, art, and unique souvenirs. The top floor features a lovely bistro where you can enjoy a coffee or a light meal with a view over the stunning atrium. It's a tranquil oasis in the middle of the bustling Old Town.",
        practicalInfo: {
        howToGetThere: "Located in the Old Town at Strada Lipscani 55.",
        openingHours: "Daily, typically 10:00 AM - 10:00 PM (midnight on weekends).",
        cost: "Free to enter.",
        website: "https://carturesti.ro/"
      }
      },
        {
        name: "Therme București",
        description: "For a day of ultimate relaxation, head to Therme București, a massive wellness, relaxation, and entertainment complex just north of the city. Powered by thermal waters, it's one of the largest centers of its kind in Europe. The complex is divided into three main zones: Galaxy, The Palm, and Elysium.\n\nGalaxy is the family-friendly area with water slides and a wave pool. The Palm is an adults-and-teens-only zone with a huge indoor/outdoor pool surrounded by over 800,000 plants, creating a tropical paradise. Elysium, on the upper level, is a wellness sanctuary with themed saunas, mineral pools, and massage facilities. It's the perfect antidote to a long day of sightseeing.",
        practicalInfo: {
        howToGetThere: "Located just outside the city near Otopeni airport. A free, dedicated shuttle bus runs from Piața Romană.",
        openingHours: "Generally 9:30 AM - 11:30 PM, but varies by day. Check website.",
        cost: "Prices vary by zone and duration, starting from ~70 RON for 3 hours.",
        website: "https://therme.ro/en/"
      }
      },
        {
        name: "Stavropoleos Monastery",
        description: "A tiny, tranquil gem hidden in the heart of the bustling Old Town, Stavropoleos Monastery is a masterpiece of Brâncovenesc architecture. Built in 1724, this Orthodox monastery is an oasis of peace, known for its intricately carved stone and wood details, beautiful frescoes, and a serene inner courtyard.\n\nDespite its small size, it's one of the most beautiful religious sites in Bucharest. The church itself is adorned with stunning icon paintings, while the courtyard contains a collection of historic tombstones. It's a powerful contrast to the lively bars just steps away and a perfect spot for quiet reflection and admiration of Romanian religious art.",
        practicalInfo: {
        howToGetThere: "In the Old Town at Strada Stavropoleos 4.",
        openingHours: "Daily, generally 8:00 AM - 6:00 PM. Be respectful as it's an active place of worship.",
        cost: "Free to enter, donations are welcome.",
        website: "https://stavropoleos.ro/en/"
      }
      },
        {
        name: "Revolution Square (Piața Revoluției)",
        description: "This square is arguably the most historically significant place in modern Romania. It was here that Nicolae Ceaușescu gave his final, fateful speech in December 1989, which turned into the uprising that toppled his regime. The atmosphere is charged with history, anchored by the Memorial of Rebirth—a controversial 25-meter-high marble pillar 'impaling' a cloud-like structure, meant to symbolize the victims of the revolution.\n\nThe square is flanked by important buildings, including the former Royal Palace (now the National Museum of Art) and the Romanian Athenaeum. The former Communist Party Headquarters building, from whose balcony Ceaușescu spoke, still bears visible pockmarks from the fighting. Visiting the square is a poignant experience that connects you directly to Romania's struggle for freedom.",
        practicalInfo: {
        howToGetThere: "Located on Calea Victoriei. Nearest metro stations are Piața Romană and Universitate.",
        openingHours: "24/7",
        cost: "Free.",
        website: "N/A (public square)"
      }
      },
        {
        name: "Ceaușescu Mansion (Casa Ceaușescu)",
        description: "For a fascinating and unsettling look into the private life of Romania's last communist dictator, visit the Ceaușescu Mansion. Also known as the 'Spring Palace' (Palatul Primăverii), this was the private residence of Nicolae and Elena Ceaușescu for a quarter of a century. While the Romanian people suffered under austerity, the first family lived in extravagant luxury.\n\nThe tour reveals opulent rooms decorated with silk wallpaper, Murano glass, intricate mosaics, a private cinema, and a lavish indoor swimming pool. The contrast between this opulence and the starkness of the era is jarring and provides crucial context for understanding the 1989 revolution. It's a surreal and unforgettable glimpse behind the Iron Curtain.",
        practicalInfo: {
        howToGetThere: "Located in the upscale Primăverii neighborhood at Bulevardul Primăverii 50. Nearest metro is Aviatorilor.",
        openingHours: "Tuesday-Sunday, 10:00 AM - 5:00 PM. Booking online in advance is essential.",
        cost: "Around 55 RON for a standard tour.",
        website: "https://casaceausescu.ro/en/"
      }
      },
        {
        name: "King Michael I Park (Herăstrău Park)",
        description: "Bucharest's largest and most magnificent park, King Michael I Park (commonly still called Herăstrău) is a vast green expanse surrounding Herăstrău Lake. It's the city's favorite playground, offering a perfect escape for walking, jogging, cycling, or simply relaxing. You can rent a boat on the lake, explore the tranquil Japanese Garden, or find a spot on the grass for a picnic.\n\nThe park is also home to several restaurants and cafes with lakeside terraces, making it a great spot for lunch or a drink. It houses the National Village Museum on its grounds, allowing you to combine a cultural visit with a relaxing stroll. It’s the green lung of the city and a beloved spot for locals and tourists alike.",
        practicalInfo: {
        howToGetThere: "Located in the north of the city. Accessible from multiple metro stations, including Aviatorilor and Aurel Vlaicu.",
        openingHours: "24/7",
        cost: "Free to enter.",
        website: "N/A (public park)"
      }
      },
        {
        name: "National Museum of Art of Romania",
        description: "Housed in the majestic former Royal Palace in Revolution Square, the National Museum of Art of Romania is the country's premier art institution. The museum is split into two main galleries: the National Gallery, showcasing Romanian medieval and modern art, and the European Art Gallery. It offers a comprehensive journey through the evolution of Romanian art, from religious icons to the works of modern masters like Constantin Brâncuși and Nicolae Grigorescu.\n\nThe European collection includes works by masters such as Rembrandt, Monet, and El Greco. The building itself is a masterpiece, and its location in Revolution Square adds to its historical significance. It's an essential stop for art lovers looking to understand Romania's cultural heritage.",
        practicalInfo: {
        howToGetThere: "Located at Calea Victoriei 49-53 in Revolution Square.",
        openingHours: "Wednesday-Sunday, 10:00 AM - 6:00 PM (varies by season).",
        cost: "Separate tickets for each gallery, around 20-25 RON each, or a combined ticket.",
        website: "https://www.mnar.arts.ro/en/"
      }
      },
        {
        name: "Cișmigiu Gardens (Grădina Cișmigiu)",
        description: "Bucharest's oldest and most charming public park, Cișmigiu Gardens is a beloved downtown oasis. Designed in the mid-19th century by German landscape architect Carl Meyer, the park has a romantic, old-world feel. It's a delightful place for a leisurely stroll among winding paths, ancient trees, and colorful flowerbeds.\n\nThe park features a large lake where you can rent rowboats in the summer and ice-skate in the winter. It also contains several monuments to Romanian writers, a 'Romanian corner' with busts of famous cultural figures, and numerous benches perfect for people-watching. It's a smaller, more intimate alternative to Herăstrău Park and conveniently located near the city center.",
        practicalInfo: {
        howToGetThere: "Centrally located, with the main entrance on Bulevardul Regina Elisabeta. A short walk from Universitate or Izvor metro stations.",
        openingHours: "24/7",
        cost: "Free to enter.",
        website: "N/A (public park)"
      }
      },
        {
        name: "National Museum of Romanian History",
        description: "Located in a grand neoclassical building on the Calea Victoriei, this museum is the place to go for a deep dive into the nation's past. Its collections trace the history of Romania from prehistoric times to the modern era. Highlights include a full-scale replica of Trajan's Column from Rome, which depicts the Roman conquest of Dacia (ancient Romania).\n\nThe museum's crown jewel is the Romanian Treasury, located in the basement. This dazzling exhibit showcases thousands of gold artifacts, including ancient Dacian bracelets, royal crowns, and ceremonial jewels. It's a spectacular display of craftsmanship and wealth that spans millennia of Romanian history.",
        practicalInfo: {
        howToGetThere: "Located at Calea Victoriei 12. A short walk from Piața Unirii or Universitate metro stations.",
        openingHours: "Wednesday-Sunday, 10:00 AM - 6:00 PM (varies by season).",
        cost: "Around 20 RON. Separate ticket for the Treasury may be required.",
        website: "https://www.mnir.ro/"
      }
      },
        {
        name: "Macca-Villacrosse Passage",
        description: "A beautiful, fork-shaped, yellow glass-covered arcade in the heart of the city, the Macca-Villacrosse Passage is a hidden architectural gem. Built in 1891, it was designed to connect Calea Victoriei with the National Bank. Its Parisian style and elegant atmosphere make it feel like a step back in time. The glass roof allowed shopkeepers to display their wares in natural light while protecting shoppers from the elements.\n\nToday, the passage is lined with cozy cafes, shisha bars, and small shops. It's a wonderful place to escape the crowds of the Old Town, enjoy a coffee, and admire the ornate architecture. The warm, yellow light filtering through the glass creates a unique and inviting ambiance, especially in the late afternoon.",
        practicalInfo: {
        howToGetThere: "Connects Calea Victoriei and Strada Lipscani in the Old Town. Walkable from Universitate metro.",
        openingHours: "24/7, with individual cafes having their own hours.",
        cost: "Free to walk through.",
        website: "N/A (public passage)"
      }
      },
        {
        name: "Museum of Senses Bucharest",
        description: "A fun and interactive alternative to traditional museums, the Museum of Senses is an experience designed to challenge your perception and awaken your senses. Located in the AFI Cotroceni shopping mall, it offers a journey through a series of fascinating rooms filled with optical illusions, puzzles, and sensory challenges. Walk through a vortex tunnel, lie on a bed of nails, or navigate an upside-down room.\n\nIt's a fantastic activity for families, couples, or anyone looking for a playful and memorable experience. The museum is highly photogenic, with countless opportunities for mind-bending photos. It's a lighthearted adventure that provides a different perspective on the world around us.",
        practicalInfo: {
        howToGetThere: "Inside AFI Cotroceni mall (Bulevardul General Vasile Milea 4). Nearest metro is Politehnica.",
        openingHours: "Daily, 10:00 AM - 10:00 PM (mall hours).",
        cost: "Around 50-60 RON for adults.",
        website: "https://museumofsenses.ro/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Bucharest has an efficient and affordable public transport system. The metro (Metrou) is the fastest way to travel longer distances, with stations near most major attractions. Surface transport includes buses, trams, and trolleybuses; you'll need a contactless card (Card Activ or Multiplu) to use them. For convenience, ride-sharing apps like Uber and Bolt are widely available, reliable, and much cheaper than in Western Europe. The city center, especially the Old Town, is very walkable.",
        whereToStay: "For first-time visitors, the Old Town (Centrul Vechi) is ideal for its proximity to nightlife and attractions, but can be noisy. Hotels like The Marmorosch Bucharest offer luxury, while Concorde Old Bucharest Hotel is a solid mid-range choice. The area around Piața Romană and Calea Victoriei offers a more elegant and central base. For a quieter, upscale experience, consider the Dorobanți or Primăverii neighborhoods in the north.",
        bestTimeToVisit: "The best times to visit Bucharest are during the shoulder seasons: spring (April-June) and autumn (September-October). The weather is pleasant for walking, parks are in full bloom or showcasing beautiful fall colors, and the city's terrace culture is in full swing. Summers (July-August) can be very hot and crowded. Winters (December-February) are cold, often with snow, but offer a magical atmosphere with Christmas markets and fewer tourists.",
        suggestedItinerary: "Day 1: Communism & Grandeur. Start with a pre-booked tour of the Palace of the Parliament. Walk to Revolution Square to understand the 1989 revolution. In the afternoon, visit the Ceaușescu Mansion in the Primăverii neighborhood. \nDay 2: Culture & Charm. Explore the cobblestone streets of the Old Town, visiting Stavropoleos Monastery and Cărturești Carusel. In the afternoon, choose between the National Museum of Art or the National Museum of Romanian History, then stroll down the elegant Calea Victoriei.\nDay 3: Parks & Relaxation. Spend the morning at the expansive National Village Museum and the adjoining King Michael I Park. In the afternoon, take the shuttle bus to Therme București for a few hours of relaxation in the thermal pools and saunas."
      }}
      faqs={[{
          question: "Is Bucharest expensive?",
          answer: "No, Bucharest is one of the most affordable capital cities in the European Union. Accommodation, food, and public transport are significantly cheaper than in most Western European cities. You can enjoy a hearty traditional meal for €10-€15, a beer for €2-€3, and a metro ride for less than €1. While luxury options exist, it's very easy to visit Bucharest on a budget."
        },
        {
          question: "How many days do you need in Bucharest?",
          answer: "Three full days is the ideal amount of time to explore Bucharest. This allows you to see the main historical and cultural sights, experience the Old Town's atmosphere, visit a major park, and even fit in a unique experience like Therme. With four or five days, you could explore more neighborhoods, visit more niche museums, or take a day trip to attractions like Dracula's Castle in Transylvania."
        },
        {
          question: "Is Bucharest safe?",
          answer: "Bucharest is generally a safe city for tourists. Violent crime is low. The main thing to be aware of is petty crime, such as pickpocketing in crowded areas like the Old Town or on public transport. Be cautious of taxi scams; it's better to use ride-sharing apps like Uber or Bolt, or order a taxi via a reputable app. Use common sense, especially at night, and you are unlikely to have any issues."
        },
        {
          question: "What is Bucharest famous for?",
          answer: "Bucharest is famous for several things. Architecturally, it's known for the colossal Palace of the Parliament and its eclectic mix of French-inspired Belle Époque buildings which earned it the nickname 'Little Paris'. It is also famous for its vibrant and sprawling Old Town, the heart of its nightlife. Historically, it is inextricably linked with the dramatic 1989 revolution that overthrew the communist regime of Nicolae Ceaușescu."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1613556145515-5e7790f689c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxCdWNoYXJlc3QlMjB0cmF2ZWx8ZW58MHwwfHx8MTc1MjE0MDExMHww&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};