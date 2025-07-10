import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Sofia: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Sofia, Bulgaria (2025 Guide)"}
      description={"Beneath the watchful gaze of Vitosha Mountain, Sofia unfolds as a city of compelling contrasts. Bulgaria's capital is a vibrant tapestry where ancient Roman ruins lie beside imposing Soviet-era monuments, and golden-domed Orthodox cathedrals share the skyline with trendy art galleries. It’s a city that doesn't just display its history; it lives and breathes it on every corner. Stroll through its compact, walkable center, and you'll feel the layers of Thracian, Roman, and Ottoman influence. Beyond the landmarks, you'll find a burgeoning culinary scene, leafy parks, and a warm, welcoming spirit. From its rich past to its dynamic present, discovering the best things to do in Sofia is an exploration of a European capital that is both profound and refreshingly unpretentious. This guide will help you navigate its most captivating sights and experiences."}
      imageUrl={""}
      highlights={["St. Alexander Nevsky Cathedral",
        "Vitosha Mountain",
        "Ancient Serdica Complex",
        "Boyana Church (UNESCO)",
        "National Palace of Culture (NDK)"]}
      galleryImages={[
        { url: "", alt: "Sofia landmark 1", caption: "Sofia landmark 1 - placeholder" },
        { url: "", alt: "Sofia landmark 2", caption: "Sofia landmark 2 - placeholder" },
        { url: "", alt: "Sofia landmark 3", caption: "Sofia landmark 3 - placeholder" },
        { url: "", alt: "Sofia landmark 4", caption: "Sofia landmark 4 - placeholder" },
        { url: "", alt: "Sofia landmark 5", caption: "Sofia landmark 5 - placeholder" },
        { url: "", alt: "Sofia landmark 6", caption: "Sofia landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "St. Alexander Nevsky Cathedral",
        description: "The quintessential symbol of Sofia, the St. Alexander Nevsky Cathedral, is an architectural masterpiece that commands the city's skyline. Built in the early 20th century in a stunning Neo-Byzantine style, it was constructed to honor the Russian soldiers who died liberating Bulgaria from Ottoman rule in 1877-1878. Its massive, gold-plated central dome and smaller copper-green domes are visible from all over the city center.\n\nStep inside to discover an interior just as magnificent, adorned with intricate murals, detailed mosaics, imposing archways, and a grand collection of icons. The sheer scale and solemn atmosphere make it a place of quiet reflection and awe. Don't miss the crypt, which houses the Museum of Christian Art, one of the largest collections of Orthodox icons in Europe.",
        practicalInfo: {
        howToGetThere: "Centrally located at pl. \"Sveti Aleksandar Nevski\". Easily walkable from most central locations. Nearest metro: SU Sv. Kliment Ohridski.",
        openingHours: "Daily, 7:00 AM - 7:00 PM. Crypt has separate, shorter hours.",
        cost: "Free to enter the cathedral. A small fee (around 6 BGN) applies for the crypt museum.",
        website: "http://www.cathedral.bg"
      }
      },
        {
        name: "Vitosha Mountain",
        description: "Sofia is one of the few European capitals with a major mountain on its doorstep, and Vitosha is the city's beloved natural playground. This massive nature park offers an immediate escape from urban life, with activities for every season. In summer, its well-marked trails are perfect for hiking, offering breathtaking panoramic views of the city below. You can hike to landmarks like the Golden Bridges (Zlatnite Mostove), a unique 'stone river' of large boulders, or even summit the highest peak, Cherni Vrah (2290m).\n\nDuring winter, Vitosha transforms into a ski resort with slopes suitable for both beginners and intermediate skiers and snowboarders. Accessible via public transport and gondola lifts, the mountain is an integral part of Sofia life and a must-visit for any nature lover.",
        practicalInfo: {
        howToGetThere: "Take bus 66 or 93 from Hladilnika bus station to the Aleko hut area, or bus 64 to the Dragalevtsi Monastery, a popular starting point for hikes. The Simeonovo gondola is another popular option.",
        openingHours: "Open 24/7. Lifts and resort facilities have specific seasonal hours.",
        cost: "Free to enter the park. Costs apply for ski passes and lift tickets.",
        website: "https://park-vitosha.org/"
      }
      },
        {
        name: "Ancient Serdica Complex",
        description: "Step back nearly 2,000 years right in the heart of modern Sofia. The Ancient Serdica Complex showcases the remarkably preserved ruins of the Roman city of Serdica, which lie directly beneath the current city center. Discovered during the construction of a new metro line, this open-air museum is now seamlessly integrated into the urban landscape, particularly around the Serdika metro station.\n\nYou can wander through original Roman streets, see the foundations of houses, a basilica, and other public buildings, all protected under a large glass dome. It's a surreal experience to see daily commuters walking past history. The site powerfully illustrates Sofia's motto, 'Ever growing, never old,' and provides a tangible link to its ancient past.",
        practicalInfo: {
        howToGetThere: "Located at the Serdika Metro Station. Accessible directly from the metro or from the Largo courtyard above ground.",
        openingHours: "Daily, 9:00 AM - 9:00 PM.",
        cost: "Free.",
        website: "N/A - Managed by the city."
      }
      },
        {
        name: "Boyana Church (UNESCO)",
        description: "Located at the foot of Vitosha Mountain in the Boyana district, this small medieval church is a UNESCO World Heritage site of immense cultural significance. While its exterior is charming, the true treasures are inside. The church is world-famous for its incredibly well-preserved frescoes from 1259, which are considered one of the most important collections of medieval painting.\n\nThese frescoes predate the Italian Renaissance and display a remarkable realism and humanity, breaking from the stiff canon of earlier Byzantine art. The detailed portraits and biblical scenes are breathtaking. Due to the fragility of the frescoes, visitor numbers are strictly limited, and you're only allowed inside for about 10 minutes, making the experience both exclusive and precious.",
        practicalInfo: {
        howToGetThere: "Take bus 64 from the city center to the Boyana Church stop. It's about a 25-minute ride.",
        openingHours: "Daily. April-Oct: 9:30 AM - 6:00 PM; Nov-Mar: 9:00 AM - 5:30 PM. Last entry is 30 minutes before closing.",
        cost: "10 BGN. Combined tickets with the National Museum of History are available.",
        website: "http://www.boyanachurch.org/abouten.htm"
      }
      },
        {
        name: "National Palace of Culture (NDK)",
        description: "A striking example of late-communist architecture, the National Palace of Culture (NDK) is a sprawling, hexagonal complex that is both a convention center and a vibrant cultural hub. Opened in 1981 to celebrate Bulgaria's 1300th anniversary, it's one of the largest multifunctional complexes in Southeastern Europe. Its sheer size and brutalist design are imposing, but the surrounding park is one of Sofia's most popular public spaces.\n\nThe park is always bustling with activity, from skateboarders and families to couples enjoying the fountains and green spaces. Inside, the NDK hosts concerts, film festivals, exhibitions, and conferences. It's worth visiting not just for its events but as a monument to a specific era of Bulgarian history.",
        practicalInfo: {
        howToGetThere: "Located at the southern end of Vitosha Boulevard. Accessible via the NDK Metro Station.",
        openingHours: "The building is open for events. The surrounding park is open 24/7.",
        cost: "Free to walk around the building and park. Event tickets vary.",
        website: "https://www.ndk.bg/en/"
      }
      },
        {
        name: "Vitosha Boulevard",
        description: "This is the vibrant, beating heart of modern Sofia. Vitosha Boulevard is a long, pedestrianized street lined with a mix of high-end boutiques, international brand stores, and countless cafes, bars, and restaurants. It's the city's main commercial artery and the perfect place for people-watching, shopping, or simply grabbing a coffee with a spectacular view of Vitosha Mountain at the end of the street.\n\nBy day, it's a bustling shopping destination. As evening approaches, it transforms into a lively social hub, with outdoor terraces filling up and the sound of chatter and music filling the air. A stroll down Vitosha Boulevard is essential to feel the city's contemporary pulse.",
        practicalInfo: {
        howToGetThere: "Centrally located. Runs from St. Nedelya Square south to the NDK. Nearest metro stations are Serdika and NDK.",
        openingHours: "Open 24/7. Shops and restaurants have their own hours, typically 10:00 AM - 10:00 PM.",
        cost: "Free to walk. Shopping and dining costs vary.",
        website: "N/A"
      }
      },
        {
        name: "National Museum of History",
        description: "To understand the vast and complex story of Bulgaria, a visit to the National Museum of History is essential. Housed in a former residence of the communist dictator Todor Zhivkov in the Boyana district, the museum's collection is immense, covering the region's history from prehistory to the modern era. The exhibits are a treasure trove of archaeological finds and historical artifacts.\n\nHighlights include the breathtaking Valchitran and Panagyurishte Gold Treasures, stunning examples of ancient Thracian goldsmithing. You can also explore exhibits on the First and Second Bulgarian Empires, the Ottoman period, and the Bulgarian National Revival. It provides a comprehensive context for the other historical sites you'll see around the city.",
        practicalInfo: {
        howToGetThere: "Located in Boyana district, near Boyana Church. Take bus 64 or 111. It's a good idea to combine it with a visit to Boyana Church.",
        openingHours: "Daily. April-Oct: 9:30 AM - 6:00 PM; Nov-Mar: 9:00 AM - 5:30 PM.",
        cost: "10 BGN.",
        website: "http://www.historymuseum.org/"
      }
      },
        {
        name: "Church of St. George Rotunda",
        description: "Hidden away in a quiet courtyard surrounded by government buildings, the Church of St. George is considered Sofia's oldest preserved building. This red-brick rotunda was built by the Romans in the 4th century as a pagan temple and has since served as a church, a mosque during the Ottoman era, and a church again. This layered history is visible inside.\n\nThe interior walls feature several layers of exquisite medieval frescoes, with the earliest dating back to the 10th century. Discovered and restored in the 20th century, these delicate paintings are a fragile link to Bulgaria's deep Christian heritage. Finding this serene and ancient place tucked away from the city's bustle is a magical experience.",
        practicalInfo: {
        howToGetThere: "Located in a courtyard behind the Presidency building, just off Largo Square. Enter through the archway.",
        openingHours: "Daily, 8:00 AM - 6:00 PM.",
        cost: "Free, but donations are welcome.",
        website: "N/A"
      }
      },
        {
        name: "'Ivan Vazov' National Theatre",
        description: "An architectural jewel in the heart of the city, the 'Ivan Vazov' National Theatre is one of Sofia's most beautiful and beloved buildings. Designed by Viennese architects in a striking neoclassical style, it was completed in 1907. Its ornate facade, featuring allegorical figures and a grand portico, is a popular backdrop for photos.\n\nThe theatre sits at the center of the lush City Garden, Sofia's oldest park, making the entire area a delightful place to relax. While catching a performance (usually in Bulgarian) is a treat, the building's exterior and its setting are an attraction in themselves. It's a testament to Bulgaria's rich cultural and artistic traditions.",
        practicalInfo: {
        howToGetThere: "Located in the City Garden (Gradska Gradina), a short walk from Vitosha Boulevard.",
        openingHours: "Box office has specific hours. The exterior can be viewed anytime.",
        cost: "Free to view from the outside. Ticket prices for performances vary.",
        website: "https://nationaltheatre.bg/en/"
      }
      },
        {
        name: "Central Sofia Market Hall (Halite)",
        description: "For an authentic taste of local life, head to the Central Sofia Market Hall, known as 'Halite'. This elegant, three-story building, opened in 1911, combines Neo-Renaissance and Neo-Byzantine architectural elements. It's a bustling marketplace where Sofians have shopped for over a century.\n\nInside, you'll find a lively mix of stalls. The ground floor is filled with vendors selling traditional Bulgarian products like cheese (sirene), cured meats (lukanka), fresh bread, nuts, and sweets. The upper floor has a food court where you can try classic Bulgarian dishes like banitsa (cheese pastry) or kebapche (grilled meat). It's a fantastic place to sample local flavors and pick up delicious souvenirs.",
        practicalInfo: {
        howToGetThere: "Located on Marie Louise Boulevard, opposite the Banya Bashi Mosque.",
        openingHours: "Daily, 7:00 AM - 10:00 PM.",
        cost: "Free to enter.",
        website: "https://www.halite.bg/"
      }
      },
        {
        name: "Sofia History Museum (Central Mineral Baths)",
        description: "Housed in one of Sofia's most stunning buildings, the former Central Mineral Baths, the Sofia History Museum is a must-see for its architecture alone. The colorful, striped facade is a magnificent example of Vienna Secession style, blended with Bulgarian and Byzantine elements. For decades, this was the city's public bathhouse, utilizing the natural mineral springs beneath.\n\nAfter falling into disuse, the building was beautifully restored and reopened as the city's official history museum. Inside, you'll find engaging exhibits that trace Sofia's development from a Neolithic settlement to the capital of modern Bulgaria. The displays cover royalty, daily life, and key historical events, offering a focused look at the city's unique story.",
        practicalInfo: {
        howToGetThere: "Located behind the Banya Bashi Mosque and across from the Central Market Hall.",
        openingHours: "Tuesday - Sunday, 10:00 AM - 6:00 PM. Closed Mondays.",
        cost: "6 BGN.",
        website: "http://www.sofiahistorymuseum.bg/en/"
      }
      },
        {
        name: "The Largo (Triangle of Power)",
        description: "The Largo is a grand architectural ensemble in the city center, representing the monumental aspirations of Bulgaria's post-WWII communist government. It consists of three stately Socialist Classicism buildings forming a U-shape: the former Party House (now part of the National Assembly), the Council of Ministers, and the Presidency. This area was intended to be Sofia's new, imposing administrative heart.\n\nToday, it's known as the 'Triangle of Power' and stands as a powerful reminder of a bygone political era. The yellow-paved square in front is a major transportation hub and public space, sitting directly on top of the Ancient Serdica ruins. The juxtaposition of 20th-century socialist architecture and 4th-century Roman ruins is a defining feature of Sofia.",
        practicalInfo: {
        howToGetThere: "The complex is located at the northern end of Vitosha Boulevard, around Serdika Metro Station.",
        openingHours: "Open 24/7 for exterior viewing.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Kvartal (The Creative District)",
        description: "For a taste of Sofia's modern, bohemian side, explore 'Kvartal' (The Quarter). This neighborhood, roughly bounded by Dondukov, Vasil Levski, Slivnitsa, and Maria Luiza boulevards, has transformed into the city's creative and alternative hub. The streets are lined with independent art galleries, craft beer pubs, quirky cafes, vintage shops, and cozy restaurants.\n\nIt's an area with a relaxed, artistic vibe, perfect for aimless wandering. Discover hidden courtyards, colorful street art, and unique local businesses. Kvartal hosts regular festivals and events that celebrate its creative spirit, making it the best place to experience the contemporary culture of Sofia's youth.",
        practicalInfo: {
        howToGetThere: "Located just northwest of the absolute city center. It's easily walkable from the Largo or Serdika.",
        openingHours: "Varies by establishment. The area is most vibrant in the afternoon and evening.",
        cost: "Free to explore.",
        website: "https://kvartal.sofia.bg/"
      }
      },
        {
        name: "Museum of Socialist Art",
        description: "This unique museum offers a fascinating and somewhat surreal journey back to Bulgaria's communist era (1944-1989). The collection is divided into two parts: an outdoor sculpture park and an indoor gallery. The park is a 'graveyard' of monumental statues that once dominated public squares across the country, including towering figures of Lenin and deposed Bulgarian communist leaders.\n\nThe indoor gallery displays paintings and prints that exemplify the 'socialist realism' style, which was the only art form permitted by the state. The art depicts idealized scenes of workers, soldiers, and party officials. It's a powerful and thought-provoking look at how art was used as a tool for propaganda.",
        practicalInfo: {
        howToGetThere: "Located a bit outside the center on Lachezar Stanchev Street. Take the metro to G.M. Dimitrov station, followed by a 15-minute walk.",
        openingHours: "Tuesday - Sunday, 10:00 AM - 6:00 PM. Closed Mondays.",
        cost: "6 BGN.",
        website: "https://nationalgallery.bg/bg/exhibitions/museum-of-socialist-art/"
      }
      },
        {
        name: "The Bells (Kambanite) Monument",
        description: "Situated in a park on the outskirts of Sofia, the Kambanite, or 'The Bells,' is one of the most unique and symbolic monuments from the late communist period. It was built in 1979 for the 'Banner of Peace' International Children's Assembly, an initiative by Lyudmila Zhivkova, daughter of the communist leader. The idea was to bring children together from all over the world to promote peace and creativity.\n\nThe monument consists of a central concrete structure surrounded by dozens of bells donated by countries from across the globe, from both sides of the Iron Curtain. Visitors are encouraged to ring the bells, creating a cacophony of hope. It's a strangely optimistic and touching relic of its time, offering a different perspective on the communist era.",
        practicalInfo: {
        howToGetThere: "Located near the Business Park Sofia. Take bus 111, 314, or 413 to the 'Kompleks Kambanite' stop.",
        openingHours: "Park is open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Sofia's city center is compact and very walkable. For longer distances, the city has an efficient and modern metro system that connects the airport, central railway station, and key districts. Trams and buses cover the rest of the city extensively. Tickets are cheap and can be bought at kiosks or increasingly via contactless payment on board. Taxis are affordable, but it's best to use a reputable app like TaxiMe to avoid being overcharged.",
        whereToStay: "For first-time visitors, the City Center around Vitosha Boulevard is ideal for its proximity to all major sights. For a more upscale and leafy residential feel, consider Lozenets, which offers chic restaurants and a quieter atmosphere. The Oborishte district, near the Doctors' Garden, is charming, quiet, and full of beautiful old architecture. Recommended hotels include the Grand Hotel Sofia (Luxury), Sense Hotel Sofia (Modern Luxury), Rosslyn Thracia Hotel Sofia (Mid-Range), and Hostel Mostel (Budget).",
        bestTimeToVisit: "The best times to visit Sofia are during the shoulder seasons of spring (April-June) and autumn (September-October). The weather is pleasant for walking, parks are in bloom or full of fall colors, and tourist crowds are smaller. Summer (July-August) is hot but great for enjoying outdoor cafes and hiking on Vitosha Mountain. Winter (December-February) can be cold with snow, but the city is festive around Christmas, and it's the season for skiing on Vitosha.",
        suggestedItinerary: "Day 1: Historical Core. Start at St. Alexander Nevsky Cathedral, visit the nearby St. Sofia Church. Walk to the Largo to see the 'Triangle of Power' and descend into the Ancient Serdica Complex. Find the hidden St. George Rotunda. End the day with a stroll and dinner on Vitosha Boulevard. \nDay 2: Art, Culture & Nature. In the morning, visit the National Theatre and City Garden. Then, take a bus to Boyana to see the UNESCO Boyana Church and the National Museum of History. In the late afternoon, take a gondola up Vitosha Mountain for sunset views.\nDay 3: Markets & Modern Sofia. Explore the Central Market Hall (Halite) and the Banya Bashi Mosque area. Visit the Sofia History Museum. In the afternoon, wander through the creative Kvartal district, exploring its galleries and cafes, or visit the Museum of Socialist Art for a unique historical perspective."
      }}
      faqs={[{
          question: "Is Sofia expensive?",
          answer: "Sofia is one of the most affordable capital cities in the European Union. Prices for accommodation, food, and public transport are significantly lower than in most Western European cities. A hearty meal at a traditional restaurant (mehana) can cost 15-25 BGN ($8-$14 USD), a beer is around 3-4 BGN, and a single public transport ticket is 1.60 BGN. This affordability allows travelers to experience a rich culture without breaking the bank."
        },
        {
          question: "How many days do you need in Sofia?",
          answer: "Three days is a perfect amount of time to explore Sofia's main attractions at a comfortable pace. This allows you to cover the historical city center, visit key museums, and take a half-day trip up Vitosha Mountain or to Boyana Church. If you want to explore more of the city's neighborhoods, visit more niche museums, or take day trips to places like Plovdiv or the Rila Monastery, then 4-5 days would be ideal."
        },
        {
          question: "Is Sofia safe?",
          answer: "Sofia is generally a very safe city for tourists. The city center is well-lit and regularly patrolled. The main risks are similar to any other major European city, primarily pickpocketing in crowded areas like Vitosha Boulevard, public transport, and tourist-heavy sites. It's advisable to be aware of your surroundings, keep valuables secure, and use reputable taxi companies or apps. Violent crime against tourists is very rare."
        },
        {
          question: "What is Sofia famous for?",
          answer: "Sofia is famous for its incredible layers of history, with visible Roman ruins sitting alongside Ottoman mosques, grand Orthodox cathedrals, and imposing Soviet-era architecture. Its most iconic landmark is the magnificent St. Alexander Nevsky Cathedral. The city is also unique for having a major mountain, Vitosha, directly on its doorstep, offering immediate access to nature. Finally, it's renowned for being a vibrant, up-and-coming Balkan capital that is extremely affordable."
        }
      ]}
    />
  );
};