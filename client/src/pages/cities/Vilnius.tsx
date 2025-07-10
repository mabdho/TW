import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Vilnius: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Vilnius, Lithuania (2025 Guide)"}
      description={"Welcome to Vilnius, a city of stunning baroque beauty and resilient spirit. Its UNESCO-listed Old Town is a labyrinth of cobblestone streets, hidden courtyards, and more churches per capita than any other city in Europe. Yet, Vilnius is more than just a historical gem; it’s a vibrant, forward-thinking capital. You can step into a self-declared independent republic of artists, gaze at panoramic views from ancient hilltops, and delve into a complex, poignant history that has shaped the nation. From its thriving culinary scene to its tranquil green spaces, exploring the Lithuanian capital is a journey of constant discovery. This guide will walk you through the very best things to do in Vilnius, ensuring you experience the heart and soul of this enchanting city."}
      highlights={["Vilnius Old Town (Senamiestis)",
        "Gediminas' Castle Tower",
        "Vilnius Cathedral and Cathedral Square",
        "Trakai Island Castle",
        "Republic of Užupis"]}
      galleryImages={[
        { url: "", alt: "Vilnius landmark 1", caption: "Vilnius landmark 1 - placeholder" },
        { url: "", alt: "Vilnius landmark 2", caption: "Vilnius landmark 2 - placeholder" },
        { url: "", alt: "Vilnius landmark 3", caption: "Vilnius landmark 3 - placeholder" },
        { url: "", alt: "Vilnius landmark 4", caption: "Vilnius landmark 4 - placeholder" },
        { url: "", alt: "Vilnius landmark 5", caption: "Vilnius landmark 5 - placeholder" },
        { url: "", alt: "Vilnius landmark 6", caption: "Vilnius landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Vilnius Old Town (Senamiestis)",
        description: "The heart and soul of Vilnius, its Old Town is one of the largest and best-preserved medieval old towns in Northern Europe. A designated UNESCO World Heritage site, it’s a captivating maze of narrow, winding cobblestone streets, charming courtyards, and magnificent architecture. Spanning styles from Gothic to Renaissance and especially Baroque, every corner reveals a new visual delight, from grand squares to hidden alleys.\n\nSimply getting lost here is the best way to explore. You'll stumble upon artisan shops, cozy cafes, and countless churches, each with its own story. The atmosphere is magical, seamlessly blending centuries of history with a lively, contemporary buzz. It's the perfect starting point for any visit and an attraction you will return to again and again.",
        practicalInfo: {
        howToGetThere: "Central and highly walkable. Most central hotels are within or adjacent to the Old Town.",
        openingHours: "24/7, though shops and restaurants have their own hours.",
        cost: "Free to wander.",
        website: "https://www.govilnius.lt/visit-vilnius/places/vilnius-old-town"
      }
      },
        {
        name: "Gediminas' Castle Tower",
        description: "Perched atop a hill overlooking the city, Gediminas' Tower is the most potent symbol of Vilnius and Lithuania itself. It's the last remaining part of the Upper Castle, which dates back to the 15th century. According to legend, Grand Duke Gediminas dreamt of an iron wolf howling on this hill, which a pagan priest interpreted as a sign to build a great city here.\n\nA short but steep walk or a quick funicular ride takes you to the top. Inside the red-brick tower is a small museum detailing the castle's history. However, the main draw is the panoramic 360-degree view from the rooftop platform, offering a breathtaking perspective of the Old Town's red roofs, the modern city skyline, and the winding Neris River.",
        practicalInfo: {
        howToGetThere: "A short walk from Cathedral Square. Accessible via a walking path or funicular.",
        openingHours: "10:00 AM - 8:00 PM (May-September), 10:00 AM - 6:00 PM (October-April).",
        cost: "Around €6 for adults. Funicular is a separate small fee.",
        website: "https://lnm.lt/en/divisions/gediminas-castle-tower/"
      }
      },
        {
        name: "Vilnius Cathedral and Cathedral Square",
        description: "Dominating the vast Cathedral Square, the striking white facade of the Vilnius Cathedral is an unmissable landmark. Its clean, Neoclassical design, reminiscent of a Greek temple, is unique among the city's mostly Baroque churches. This site has been a place of worship for centuries, originally for the pagan god Perkūnas before Lithuania's conversion to Christianity. Inside, the magnificent St. Casimir's Chapel is a Baroque masterpiece.\n\nAdjacent to the Cathedral stands the freestanding Bell Tower, a former defensive tower of the city wall. You can climb it for a fantastic view of the square and Gediminas' Hill. The square itself is the city's main public space, hosting concerts, festivals, and the national Christmas tree.",
        practicalInfo: {
        howToGetThere: "Located at the foot of Gediminas' Hill, easily walkable from anywhere in the Old Town.",
        openingHours: "Cathedral: 7:00 AM - 7:00 PM daily. Bell Tower: 10:00 AM - 7:00 PM (summer), shorter hours in winter.",
        cost: "Cathedral is free. Bell Tower climb is around €6.",
        website: "https://www.katedra.lt/en/"
      }
      },
        {
        name: "Trakai Island Castle",
        description: "A fairytale escape just outside Vilnius, Trakai Island Castle is one of Lithuania's most iconic sights. Located about 28 km west of the city, this stunning 14th-century Gothic castle sits picturesquely on an island in Lake Galvė. It once served as a crucial military and political center for the Grand Duchy of Lithuania and was the residence of its rulers.\n\nAfter being restored to its former glory in the 20th century, the castle now houses a museum showcasing its history. Visitors can walk across a wooden footbridge to the island, explore the castle's halls, courtyards, and towers, and learn about the unique Karaite ethnic minority who have lived in Trakai for centuries. Don't leave without trying 'kibinai', a traditional Karaite pastry, from one of the local cafes.",
        practicalInfo: {
        howToGetThere: "A 30-40 minute trip from Vilnius by bus or train from the main stations. Organized tours are also available.",
        openingHours: "Varies by season, generally 10:00 AM - 7:00 PM in summer and 10:00 AM - 5:00 PM in winter. Check website.",
        cost: "Castle admission is around €12 for adults. Transportation costs extra.",
        website: "https://trakaimuziejus.lt/en/trakai-island-castle/"
      }
      },
        {
        name: "Republic of Užupis",
        description: "Cross a bridge over the Vilnia River and you enter another world: the Republic of Užupis. This small neighborhood, often compared to Montmartre in Paris or Freetown Christiania in Copenhagen, declared itself an independent republic on April 1, 1997. It has its own president, flag, anthem, and a quirky constitution displayed in multiple languages on a wall along Paupio Street.\n\nUžupis is a haven for artists, dreamers, and free spirits. The area is filled with art installations, galleries, workshops, and bohemian cafes. The main symbol is the 'Angel of Užupis' in the central square, representing artistic freedom. It's a place to wander without a plan, enjoy the creative atmosphere, and appreciate a community that values humor and creativity above all else.",
        practicalInfo: {
        howToGetThere: "Located just east of the Old Town, a short walk across one of the bridges over the Vilnia River.",
        openingHours: "24/7. Shops and cafes have their own hours.",
        cost: "Free. Get your passport stamped for a small fee at the Užupis Information Center.",
        website: "https://uzupis.today/en/"
      }
      },
        {
        name: "St. Anne's Church and Bernardine Church",
        description: "The St. Anne's Church and Bernardine Church complex is a breathtaking example of Flamboyant Gothic architecture. St. Anne's, with its intricate facade of 33 different types of brick, is so beautiful that Napoleon Bonaparte supposedly wished he could carry it back to Paris in the palm of his hand. It's a true masterpiece of late Gothic style, seemingly delicate and ornate.\n\nRight behind it stands the much larger and more imposing Bernardine Church, a mix of Gothic, Renaissance, and Baroque elements. Together, they create one of Vilnius's most stunning architectural ensembles. Visitors can explore the rich interiors of both churches, which stand as a testament to the city's deep religious and architectural history.",
        practicalInfo: {
        howToGetThere: "On Maironio Street, on the eastern edge of the Old Town, near the Vilnia River and Užupis.",
        openingHours: "St. Anne's: ~10:00 AM - 6:00 PM. Bernardine Church has similar hours. Check for service times.",
        cost: "Free to enter both churches. Donations are welcome.",
        website: "https://www.govilnius.lt/visit-vilnius/places/church-of-st-anne-and-bernardine-church-ensemble"
      }
      },
        {
        name: "Museum of Occupations and Freedom Fights (KGB Museum)",
        description: "For a sobering and essential understanding of Lithuania's 20th-century history, a visit to this museum is a must. Housed in the former headquarters of the Gestapo and, more notoriously, the Soviet KGB, the building itself is a chilling artifact. The upper floors document the brutal 50-year Soviet occupation, the partisan resistance, and the deportations to Siberian gulags.\n\nThe most haunting part of the museum is in the basement: the preserved KGB prison cells, interrogation rooms, and execution chamber. It's a powerful and deeply moving experience that provides crucial context for the resilience and spirit of the Lithuanian people. It is not an easy visit, but it is an unforgettable one.",
        practicalInfo: {
        howToGetThere: "Located on Gedimino Avenue, the city's main street, a short walk from the Old Town.",
        openingHours: "Wednesday - Saturday: 10:00 AM - 6:00 PM, Sunday: 10:00 AM - 5:00 PM. Closed Mondays and Tuesdays.",
        cost: "Around €6 for adults.",
        website: "https://genocid.lt/muziejus/en/"
      }
      },
        {
        name: "Gates of Dawn (Aušros Vartai)",
        description: "The Gates of Dawn is the only surviving gate of the original nine that once formed the city's defensive wall. More than just a historical structure, it's one of the most important religious, historical, and cultural monuments in Lithuania. Above the gate archway is a small chapel housing the revered icon of The Blessed Virgin Mary, Mother of Mercy.\n\nBelieved to have miraculous powers, the icon draws pilgrims from all over the world. You'll often see people praying on the street below, looking up at the chapel window. Visitors can go inside the beautiful chapel to see the golden icon up close. It's a place of profound peace and spirituality, even for non-religious visitors.",
        practicalInfo: {
        howToGetThere: "Located at the southern end of the Old Town on Aušros Vartų street.",
        openingHours: "Chapel is generally open 7:00 AM - 7:00 PM daily.",
        cost: "Free.",
        website: "https://www.ausrosvartai.lt/en/"
      }
      },
        {
        name: "Palace of the Grand Dukes of Lithuania",
        description: "Located behind Vilnius Cathedral, this magnificent palace is a reconstruction of the original residence of the Grand Dukes of Lithuania, which was demolished in the 19th century. Reopened in 2013, the palace serves as a national museum, bringing the history of the Grand Duchy to life. The original palace was the political, diplomatic, and cultural heart of the state for centuries.\n\nThe museum is divided into four main exhibition routes, showcasing the historical and architectural development of the palace, its restored ceremonial halls, and a vast collection of artifacts. It's a fascinating deep-dive into the golden age of Lithuania and offers a stark contrast to the more recent history of occupation.",
        practicalInfo: {
        howToGetThere: "In Cathedral Square, directly behind Vilnius Cathedral.",
        openingHours: "10:00 AM - 6:00 PM (Tues-Sun, longer hours in summer). Closed Mondays.",
        cost: "Around €10 for an all-routes ticket.",
        website: "https://www.valdovurumai.lt/en"
      }
      },
        {
        name: "Literatai Street (Literatų gatvė)",
        description: "Literatai Street is a unique open-air gallery dedicated to the world of literature. In 2008, a group of artists decided to pay homage to Lithuanian and foreign authors who have a connection to Vilnius and Lithuania. They began embedding small, artistic plaques—made of metal, wood, glass, or ceramic—into the street's wall, each one representing a different writer.\n\nToday, the wall features over 200 of these miniature artworks, creating a fascinating and eclectic tribute. It's a joy to walk down the street and examine each unique piece, discovering names you recognize and learning about new ones. It perfectly encapsulates Vilnius's creative spirit and its deep appreciation for culture and history.",
        practicalInfo: {
        howToGetThere: "A small street in the Old Town, connecting Pilies Street with A. Volano Street.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "https://www.govilnius.lt/visit-vilnius/places/literatai-street"
      }
      },
        {
        name: "Three Crosses Monument",
        description: "For one of the best panoramic views of Vilnius, make the climb up the hill in Kalnai Park to the Three Crosses monument. The stark white crosses stand as a symbol of national identity and martyrdom. Legend holds that seven Franciscan friars were martyred on this hill in the 14th century, and wooden crosses were erected in their memory. The current concrete monument was built in 1989, replacing one destroyed by the Soviets.\n\nThe walk up through the park is pleasant, and the reward is a sweeping vista across the Old Town's rooftops, with Gediminas' Tower and the river valley laid out before you. It's especially beautiful at sunrise or sunset.",
        practicalInfo: {
        howToGetThere: "Located in Kalnai Park, across the Vilnia River from the Bernardine Gardens. Accessible via a winding path and set of stairs.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "https://www.govilnius.lt/visit-vilnius/places/the-three-crosses"
      }
      },
        {
        name: "Vilnius University and its courtyards",
        description: "Founded in 1579, Vilnius University is one of the oldest and most prestigious institutions of higher education in Eastern and Central Europe. Its campus is not a single entity but a stunning architectural ensemble that has evolved over centuries. The main campus is a city-within-a-city, a complex of 13 interconnected courtyards, each with its own character and history.\n\nA visit allows you to wander through these beautiful courtyards and admire the blend of Gothic, Renaissance, Baroque, and Classical styles. The highlight is the Church of St. Johns and its magnificent bell tower. You can climb the tower for another unique perspective of the Old Town's rooftops. The university's library is also home to the stunning Hall of Smuglewicz, a must-see for its classical frescoes.",
        practicalInfo: {
        howToGetThere: "The main campus entrance is on Universiteto Street in the heart of the Old Town.",
        openingHours: "Courtyards generally open 9:00 AM - 6:00 PM. Church of St. Johns has visiting hours and a fee to climb the tower.",
        cost: "A small entrance fee (around €2) is required for non-students to tour the courtyards.",
        website: "https://www.vu.lt/en/about-us/visit-us"
      }
      },
        {
        name: "Halės Market (Halės Turgus)",
        description: "To experience Vilnius like a local, head to Halės Market, the city's oldest and largest indoor market. Housed in a historic brick building from 1906, this is where residents come to shop for fresh produce, meat, dairy, and flowers. The atmosphere is bustling and authentic, a true slice of daily life.\n\nBeyond the fresh goods, the market has evolved into a foodie hotspot. You'll find stalls selling local delicacies like smoked bacon (lašiniai), dark rye bread, and artisanal cheeses. Several small bars and bistros have opened inside, offering everything from craft beer to delicious soups and street food. It's the perfect place to grab an inexpensive and authentic lunch while soaking up the local vibe.",
        practicalInfo: {
        howToGetThere: "Located at Pylimo g. 58, just south of the Old Town, a short walk from the Gates of Dawn.",
        openingHours: "Tuesday - Sunday: ~7:00 AM - 3:00 PM. Closed Mondays.",
        cost: "Free to enter.",
        website: "https://halesturgaviete.lt/"
      }
      },
        {
        name: "MO Museum",
        description: "A striking example of modern architecture, the MO Museum is a private institution dedicated to showcasing modern and contemporary Lithuanian art. Designed by renowned architect Daniel Libeskind, the building itself is a work of art, with dramatic angles and a bright, open interior. It's a refreshing contrast to the historical buildings of the Old Town.\n\nThe museum's collection consists of over 5,000 works by Lithuanian artists from the 1960s to the present day. The exhibitions are thoughtfully curated and rotate regularly, offering a dynamic and engaging look into the country's recent artistic history. It's a must-visit for art lovers and anyone interested in the modern cultural pulse of Lithuania.",
        practicalInfo: {
        howToGetThere: "Located at Pylimo g. 17, on the edge of the Old Town.",
        openingHours: "Open daily 10:00 AM - 8:00 PM. Check website for specifics.",
        cost: "Around €10 for adults.",
        website: "https://mo.lt/en/"
      }
      },
        {
        name: "Vilnius TV Tower",
        description: "Soaring 326.5 meters into the sky, the Vilnius TV Tower is the tallest structure in Lithuania and a prominent feature of the city's skyline. While a bit outside the city center, it offers a completely different and equally impressive panoramic view compared to the city's hilltops. The tower is also a symbol of the struggle for independence; in 1991, 14 unarmed civilians were killed here while defending it from Soviet troops.\n\nAn elevator whisks you up to the observation deck at 165 meters, which houses the 'Paukščių Takas' (Milky Way) restaurant. The restaurant's floor revolves 360 degrees every 55 minutes, providing an ever-changing vista of the city, forests, and lakes. It's a fantastic spot for a coffee or a meal with an unforgettable view.",
        practicalInfo: {
        howToGetThere: "Located in the Karoliniškės district. Best reached by taxi, ride-sharing service, or public bus (e.g., Trolleybus 16 from the train station).",
        openingHours: "Check website for current hours, generally open from 11:00 AM to 9:00 PM.",
        cost: "Ticket to observation deck is around €11-€21, depending on the day.",
        website: "https://tvbokstas.lt/en/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Vilnius is a very walkable city, especially the Old Town and surrounding areas. For longer distances, the public transport system of buses and trolleybuses is efficient and affordable; use the 'Trafi' app for routes and tickets. Ride-sharing services like Bolt and Uber are widely available and very inexpensive.",
        whereToStay: "For first-time visitors, staying in the Old Town (Senamiestis) is ideal for atmosphere and proximity to major sights (e.g., Hotel Pacai, Artagonist Art Hotel). The Republic of Užupis offers quirky, bohemian guesthouses. For a more modern vibe with trendy bars and restaurants, look to the Naujamiestis (New Town) district near Gedimino Avenue.",
        bestTimeToVisit: "The best time to visit Vilnius is from late spring to early autumn (May to September). Summer (June-August) offers warm weather, long daylight hours, and numerous outdoor festivals, but also more crowds. Spring and autumn are beautiful, with pleasant temperatures for walking and fewer tourists. Winters are cold and snowy but magical during the Christmas market season.",
        suggestedItinerary: "Day 1: Explore the heart of the Old Town. Start at Cathedral Square, climb Gediminas' Tower, visit the Palace of the Grand Dukes, and wander down Pilies Street. In the afternoon, see St. Anne's Church and walk along Literatai Street.\nDay 2: Delve into history and art. Visit the Museum of Occupations and Freedom Fights, then cross the river to explore the Republic of Užupis. In the afternoon, visit the MO Museum and climb the Three Crosses for sunset.\nDay 3: Take a day trip. Travel to Trakai to explore the magnificent island castle and learn about Karaite culture. Return to Vilnius for a final traditional Lithuanian dinner."
      }}
      faqs={[{
          question: "Is Vilnius expensive?",
          answer: "Vilnius is one of the most affordable capital cities in Europe. Accommodation, food, and public transport are significantly cheaper than in most Western European countries. A hearty meal at a local restaurant can cost €10-€15, a beer is around €3-€4, and a public transport ticket is just over €1. It offers excellent value for money."
        },
        {
          question: "How many days do you need in Vilnius?",
          answer: "Three days is the ideal amount of time for a first visit. This allows for two full days to explore the main sights within the city itself at a comfortable pace, and one day for the essential day trip to Trakai Castle. If you're short on time, you could see the main highlights in two very busy days."
        },
        {
          question: "Is Vilnius safe?",
          answer: "Yes, Vilnius is a very safe city for tourists. The Old Town and central areas are well-lit and heavily trafficked. Standard precautions apply: be aware of your surroundings, especially at night, and keep an eye on your belongings in crowded areas to avoid pickpocketing. Overall, violent crime rates are low."
        },
        {
          question: "What is Vilnius famous for?",
          answer: "Vilnius is most famous for its sprawling, UNESCO-listed Baroque Old Town, the largest in Eastern Europe. It's also known for the quirky, self-declared Republic of Užupis, the poignant history detailed in the Museum of Occupations and Freedom Fights (KGB Museum), and its beautiful Gothic landmark, St. Anne's Church. Culturally, it's known for amber jewelry and hearty cuisine like Cepelinai (potato dumplings) and Šaltibarščiai (cold beet soup)."
        }
      ]}
    />
  );
};