import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Tallinn: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Tallinn, Estonia (2025 Guide)"}
      description={"Step into a real-life fairytale in Tallinn, Estonia, a city where medieval cobblestone streets meet a vibrant, digital-first future. As one of Northern Europe's best-preserved medieval cities, its UNESCO-listed Old Town is a labyrinth of gothic spires, hidden courtyards, and charming merchant houses. But Tallinn is no museum piece; it's a dynamic capital buzzing with creative energy, from the bohemian Kalamaja district to its world-renowned tech scene. Whether you're climbing ancient towers for panoramic views of the Baltic Sea or exploring contemporary art hubs, you'll find a captivating blend of history and innovation. This guide will walk you through the absolute best things to do in Tallinn, ensuring a memorable journey through this enchanting Baltic gem. Tallinn's unique character offers a perfect European city break, combining centuries of history with a forward-thinking spirit."}
      highlights={["Tallinn Old Town (Vanalinn)",
        "Alexander Nevsky Cathedral",
        "Kadriorg Palace and Park",
        "Lennusadam (Seaplane Harbour)",
        "Telliskivi Creative City"]}
      galleryImages={[
        { url: "", alt: "Tallinn landmark 1", caption: "Tallinn landmark 1 - placeholder" },
        { url: "", alt: "Tallinn landmark 2", caption: "Tallinn landmark 2 - placeholder" },
        { url: "", alt: "Tallinn landmark 3", caption: "Tallinn landmark 3 - placeholder" },
        { url: "", alt: "Tallinn landmark 4", caption: "Tallinn landmark 4 - placeholder" },
        { url: "", alt: "Tallinn landmark 5", caption: "Tallinn landmark 5 - placeholder" },
        { url: "", alt: "Tallinn landmark 6", caption: "Tallinn landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Tallinn Old Town (Vanalinn)",
        description: "The heart and soul of Tallinn, the Vanalinn (Old Town) is a UNESCO World Heritage site and one of the most authentically preserved Hanseatic town centers in Europe. Divided into the Lower Town (All-linn) and the Upper Town (Toompea), it’s a maze of cobblestone lanes, medieval merchant houses, and towering church spires. Spend hours simply wandering, discovering hidden courtyards, quaint cafes, and artisan shops tucked into ancient stone walls.\n\nThe Lower Town was the commercial hub, centered around the bustling Town Hall Square, while Toompea Hill was the seat of power for bishops and feudal lords. Exploring both gives you a complete picture of medieval life. The entire area is remarkably intact, surrounded by a nearly complete 2km-long city wall dotted with defensive towers you can still climb.",
        practicalInfo: {
        howToGetThere: "Centrally located and best explored on foot. It's a short walk from the ferry terminals and main train station.",
        openingHours: "24/7 access to the area. Individual shops, museums, and restaurants have their own hours.",
        cost: "Free to walk around. Fees apply for entering specific attractions like the Town Hall or climbing towers.",
        website: "https://www.visittallinn.ee/eng/visitor/see-do/neighbourhoods/old-town"
      }
      },
        {
        name: "Alexander Nevsky Cathedral",
        description: "Perched atop Toompea Hill, this magnificent, onion-domed cathedral is a stunning example of Russian Revival architecture. Built in 1900, during the period when Estonia was part of the Russian Empire, it was intended as a symbol of the empire's religious and political dominance. Its opulent exterior and richly decorated interior stand in stark contrast to the more austere Lutheran churches found elsewhere in the city.\n\nThe cathedral is dedicated to Alexander Nevsky, Prince of Novgorod, who famously won the Battle of the Ice on Lake Peipus in 1242. Listen for the powerful ringing of its 11 bells, including the largest in Tallinn, before services. Its presence is a powerful and visually striking reminder of Estonia's complex history with its eastern neighbor.",
        practicalInfo: {
        howToGetThere: "Located on Toompea Hill in the Old Town. A short, steep walk from the Lower Town.",
        openingHours: "Generally open daily, but hours can be limited. Check for service times as it is an active church.",
        cost: "Free to enter, but donations are welcome. Photography is often restricted inside.",
        website: "https://www.visittallinn.ee/eng/visitor/see-do/things-to-do/attractions-churches/174989/alexander-nevsky-cathedral"
      }
      },
        {
        name: "Kadriorg Palace and Park",
        description: "Commissioned by Russian Tsar Peter the Great for his wife Catherine I in the 18th century, Kadriorg Palace is the most spectacular example of Petrine Baroque architecture in Estonia. This stunning palace, surrounded by manicured gardens, swan ponds, and forested parkland, feels like a world away from the medieval Old Town. Today, the main palace building houses the Kadriorg Art Museum, displaying foreign art from the 16th to 20th centuries.\n\nThe vast park is a destination in itself, beloved by locals for strolls and picnics. It also contains several other attractions, including the official residence of the President of Estonia and the contemporary Kumu Art Museum, making it a perfect destination for a full day of art, history, and nature.",
        practicalInfo: {
        howToGetThere: "Take tram 1 or 3 from the city center towards Kadriorg. The journey takes about 10-15 minutes.",
        openingHours: "Park is open 24/7. Museum hours are typically Tue-Sun 10:00 - 18:00 (check for seasonal changes).",
        cost: "Park is free. Entry to the Kadriorg Art Museum costs around €10.",
        website: "https://kadriorumuuseum.ekm.ee/en/"
      }
      },
        {
        name: "Lennusadam (Seaplane Harbour)",
        description: "Part of the Estonian Maritime Museum, Lennusadam is one of Europe's most exciting and modern museums. Housed in a massive, architecturally unique seaplane hangar from the pre-WWI era, the exhibition is spread across three levels: in the air, on the sea, and below the sea. The star attraction is the authentic 1930s submarine, Lembit, which you can board and explore from bow to stern.\n\nOther highlights include a full-scale replica of a WWI-era seaplane, the historic icebreaker Suur Tõll moored outside, and numerous interactive displays that engage visitors of all ages. It's a brilliantly executed museum that brings Estonia's rich maritime and military history to life in a compelling and hands-on way.",
        practicalInfo: {
        howToGetThere: "Located in the Kalamaja district. Take bus No. 73 from the city center, or enjoy a 20-minute walk from the Old Town.",
        openingHours: "Daily 10:00 - 18:00 (may close earlier in winter).",
        cost: "Around €15 for an adult ticket, which includes the ships outside.",
        website: "https://meremuuseum.ee/lennusadam-en/"
      }
      },
        {
        name: "Telliskivi Creative City",
        description: "Telliskivi is the vibrant, beating heart of modern Tallinn. This former industrial complex, located next to the Old Town, has been transformed into the city's largest creative hub. The area is a magnet for artists, entrepreneurs, and anyone looking for a taste of Tallinn's contemporary culture. The once-drab factory walls are now a sprawling canvas for impressive street art and murals.\n\nExplore the complex to find independent design shops, studios, an international photography museum (Fotografiska Tallinn), unique bars, and some of the city's most popular restaurants and food trucks. On Saturdays, a flea market adds to the bohemian buzz. Telliskivi is the perfect place to feel the pulse of 21st-century Tallinn and see where its creative energy flourishes.",
        practicalInfo: {
        howToGetThere: "A short walk from the main train station (Balti Jaam) and the edge of the Old Town. Also accessible by tram 1 and 2.",
        openingHours: "The area is always open. Shops and restaurants keep individual hours, generally 11:00 until late.",
        cost: "Free to explore. Costs apply for shopping, dining, or visiting attractions like Fotografiska.",
        website: "https://telliskivi.cc/en/"
      }
      },
        {
        name: "Toompea Hill & Castle",
        description: "Toompea is the limestone hill that forms the Upper Old Town. Historically, this was the domain of the ruling elite, separate from the merchants' town below. At its heart stands Toompea Castle, which has been a seat of power in Estonia for over 800 years. Today, its distinct pink Baroque façade houses the Riigikogu, the Parliament of Estonia.\n\nWhile the castle interior can only be visited on guided tours, the hill itself is a must-explore area. It is home to the Alexander Nevsky Cathedral, the Dome Church (St. Mary's Cathedral), and several of the city's best viewing platforms, offering stunning vistas over the red-tiled roofs of the Lower Town and the Baltic Sea beyond.",
        practicalInfo: {
        howToGetThere: "Walk up the Pikk jalg (Long Leg) or Lühike jalg (Short Leg) streets from the Lower Old Town.",
        openingHours: "The area is open 24/7. Free guided tours of the parliament are available on Fridays (booking required).",
        cost: "Free to walk around. Tours of the parliament are free but must be booked in advance.",
        website: "https://www.riigikogu.ee/en/visit-us/tours-of-toompea-castle/"
      }
      },
        {
        name: "Kohtuotsa Viewing Platform",
        description: "Of the several viewpoints on Toompea Hill, Kohtuotsa is arguably the most famous and photogenic. It provides a sweeping panoramic view of the Lower Old Town's spires and gabled houses, with the modern city skyline and the Gulf of Finland serving as a dramatic backdrop. It's the quintessential Tallinn postcard view.\n\nThe platform is also famous for the graffiti on its eastern wall, which often features the phrase 'The times we had', adding a touch of modern melancholy to the historic vista. It's a popular spot, especially at sunrise and sunset, so be prepared for crowds, but the view is absolutely worth it.",
        practicalInfo: {
        howToGetThere: "Located on the northern side of Toompea Hill in the Old Town.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.visittallinn.ee/eng/visitor/see-do/things-to-do/attractions-churches/174826/kohtuotsa-viewing-platform"
      }
      },
        {
        name: "St. Olaf's Church (Oleviste kirik)",
        description: "This towering Gothic church has been a defining feature of Tallinn's skyline for centuries. Founded in the 12th century, its spire, which now stands at 124 meters, was once believed to be the tallest building in the world between 1549 and 1625. It served as a vital landmark for ships at sea, but its height also made it a frequent target for lightning strikes, which caused it to burn down several times throughout its history.\n\nFor those with a head for heights and sturdy legs, the main attraction is climbing the narrow spiral staircase to the observation deck around the spire. The strenuous climb is rewarded with breathtaking, 360-degree views of the Old Town, the port, and the sea. It's an unforgettable experience and provides a unique perspective on the city's layout.",
        practicalInfo: {
        howToGetThere: "Located in the northern part of the Old Town, on Lai street.",
        openingHours: "Viewing platform is typically open April-October, 10:00-18:00. The church itself is an active Baptist congregation.",
        cost: "A small fee (around €5) is required to climb the tower.",
        website: "https://oleviste.ee/"
      }
      },
        {
        name: "Kiek in de Kök Fortifications Museum",
        description: "This museum offers a fascinating journey into Tallinn's medieval military history. The name 'Kiek in de Kök' is Low German for 'Peep into the Kitchen', a nickname given to the mighty artillery tower because soldiers joked they could see into the kitchens of nearby houses from the top. The museum complex connects this tower with the Maiden Tower, the Stable Tower, and hidden underground bastion passages.\n\nThe tour through the 17th-century bastion passages is a highlight, revealing a hidden, subterranean world that was used for defense, storage, and even as a bomb shelter during WWII. The exhibits within the towers showcase the city's defense systems and the history of crime and punishment in old Tallinn.",
        practicalInfo: {
        howToGetThere: "Located on the southern edge of Toompea Hill.",
        openingHours: "Tue-Sun 10:00 - 17:30. Bastion Passage tours should be booked in advance.",
        cost: "Around €14 for a combined ticket for the towers and passages.",
        website: "https://linnamuuseum.ee/en/kiek-in-de-kok-fortifications-museum/"
      }
      },
        {
        name: "Estonian Open Air Museum",
        description: "Escape the city and step back in time at this expansive open-air museum located in the seaside Rocca al Mare area. The museum is a reconstructed rural Estonian village, with over 70 historic buildings from different regions and periods of Estonian history. You can wander between authentic farmhouses, a wooden chapel, a windmill, a village school, and a fire station, all set within a beautiful forested park.\n\nCostumed guides demonstrate old crafts and farming techniques, bringing the past to life. You can try traditional Estonian food at the village inn (Kolu kõrts) and enjoy horse-and-cart rides. It’s an excellent way to understand Estonia's rural heritage and how people lived outside the city walls from the 18th to the 20th century.",
        practicalInfo: {
        howToGetThere: "Take bus No. 21 or 41 from the Balti Jaam (main train station) stop. The ride is about 15-20 minutes.",
        openingHours: "Daily, Park 10:00-20:00, Buildings 10:00-18:00 (hours vary by season).",
        cost: "Around €12 in summer, cheaper in winter when fewer buildings are open.",
        website: "https://evm.ee/eng"
      }
      },
        {
        name: "Tallinn Town Hall Square (Raekoja plats)",
        description: "For over 600 years, the Town Hall Square has been the social heart of Tallinn. Surrounded by colourful merchant houses, this wide-open square has hosted markets, celebrations, and even public executions. Today, it's lined with outdoor cafes and restaurants, making it a perfect spot to relax and soak in the historic atmosphere. The square is dominated by the magnificent Tallinn Town Hall, the only surviving Gothic town hall in Northern Europe.\n\nThe square is a hub of activity year-round. In summer, it's filled with cafe terraces and hosts the Old Town Days festival. In winter, it transforms into a magical Christmas Market, complete with a giant Christmas tree, a tradition that has reportedly been in place here since 1441.",
        practicalInfo: {
        howToGetThere: "In the center of the Lower Old Town, easily accessible from all directions.",
        openingHours: "The square is open 24/7. The Town Hall itself has limited opening hours, mainly in summer.",
        cost: "Free to visit the square. A fee is required to enter the Town Hall.",
        website: "https://raekoda.tallinn.ee/en/"
      }
      },
        {
        name: "Kalamaja District",
        description: "Adjacent to the Old Town and Telliskivi, Kalamaja is one of Tallinn's most charming and rapidly developing neighborhoods. It's famous for its beautifully preserved wooden houses, known as 'Tallinn Houses', which were built in the 1920s and 30s to house factory workers. Today, these historic buildings have been lovingly restored and painted in vibrant colors, giving the area a unique, village-like feel.\n\nKalamaja translates to 'Fish House' and was historically home to fishermen and harbor workers. Now, it's a hip, bohemian enclave filled with cozy cafes, craft beer bars, and independent shops. It's a fantastic area to explore on foot, offering a quieter, more local alternative to the bustling Old Town.",
        practicalInfo: {
        howToGetThere: "A short walk from the Old Town and Telliskivi Creative City. Tram lines 1 and 2 also run through the area.",
        openingHours: "24/7 access to the neighborhood. Shops and cafes have their own hours.",
        cost: "Free to explore.",
        website: "https://www.visittallinn.ee/eng/visitor/see-do/neighbourhoods/kalamaja"
      }
      },
        {
        name: "Tallinn TV Tower (Teletorn)",
        description: "For the highest viewpoint in Estonia, head to the Tallinn TV Tower. This 314-meter-high Soviet-era structure, originally built for the 1980 Moscow Olympics sailing regatta, offers unparalleled panoramic views from its 21st-floor observation deck. On a clear day, you can see all of Tallinn, the surrounding forests, and even the coast of Finland across the sea.\n\nThe attraction features interactive exhibits on Estonian achievements and a glass-floored section for the brave. For the ultimate thrill, you can book the 'Walk on the Edge' experience, where you are harnessed to the outside of the observation deck, 175 meters above the ground. It's a blend of Cold War history and modern-day adrenaline.",
        practicalInfo: {
        howToGetThere: "Located in the Pirita district. Take bus No. 34A, 38, or 49 from the city center. The journey is about 25 minutes.",
        openingHours: "Daily 10:00 - 19:00.",
        cost: "Around €17 for standard admission. The Edge Walk costs extra and requires booking.",
        website: "https://www.teletorn.ee/en/"
      }
      },
        {
        name: "Vabamu Museum of Occupations and Freedom",
        description: "Vabamu provides a sobering and deeply moving look into Estonia's recent past. The museum is dedicated to the stories of the Estonian people during the periods of occupation by the Soviet Union and Nazi Germany from 1940 to 1991. Through personal accounts, artifacts, and multimedia displays, it explores themes of repression, resistance, and the eventual restoration of independence.\n\nThe exhibition doesn't just focus on the suffering; it also highlights the incredible resilience and courage of the Estonian people who kept their culture and identity alive against all odds. It's an essential visit for anyone wanting to understand the modern Estonian psyche and the value the nation places on its hard-won freedom.",
        practicalInfo: {
        howToGetThere: "Located on Toompea street, just outside the Old Town walls.",
        openingHours: "Tue-Sun 10:00 - 18:00.",
        cost: "Around €13 for an adult ticket.",
        website: "https://www.vabamu.ee/en"
      }
      },
        {
        name: "Patkuli Viewing Platform",
        description: "Another gem on Toompea Hill, the Patkuli Viewing Platform offers a slightly different but equally spectacular perspective compared to Kohtuotsa. It looks out over the western side of the Old Town, providing a magnificent view of the city wall with its defensive towers, St. Olaf's Church, and the bustling Port of Tallinn in the distance. The view perfectly captures the city's medieval fortifications against the backdrop of the Baltic Sea.\n\nThe platform is reached via a long, winding stone staircase of 157 steps that connects Toompea Hill directly to the park below, near the main train station. This staircase itself is a scenic and historic route. Patkuli is often less crowded than Kohtuotsa, offering a more serene spot to admire the cityscape.",
        practicalInfo: {
        howToGetThere: "Located on the northern tip of Toompea Hill. Accessible from the top of the hill or by climbing the Patkuli Stairs from Nunne street.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.visittallinn.ee/eng/visitor/see-do/things-to-do/attractions-churches/174983/patkuli-viewing-platform"
      }
      }
      ]}
      logistics={{
        gettingAround: "Tallinn's Old Town is extremely compact and best explored on foot. For destinations further afield like Kadriorg or the TV Tower, the city has an efficient public transport system of trams and buses. You can use a single QR-ticket, a Smartcard (Ühiskaart), or contactless payment. Ride-sharing services like Bolt are widely available and affordable.",
        whereToStay: "For first-time visitors, staying in the Old Town (Vanalinn) offers an immersive historical experience, with boutique hotels in medieval buildings. For a trendier, more local vibe, look for accommodation in Kalamaja or near Telliskivi Creative City. The Kadriorg district offers elegant and quieter options near the park and art museums. For budget travelers, there are excellent hostels both in and just outside the Old Town.",
        bestTimeToVisit: "Summer (June to August) is the most popular time to visit, with long, sunny days, warm weather, and numerous outdoor festivals. However, it's also the most crowded. Spring (May) and early autumn (September) offer pleasant weather with fewer tourists. For a magical experience, visit in winter (December) when the Old Town is often dusted with snow and hosts one of Europe's best Christmas markets.",
        suggestedItinerary: "Day 1: Immerse yourself in the Old Town. Explore the Lower Town, including the Town Hall Square and St. Olaf's Church. In the afternoon, walk up to Toompea Hill to see Alexander Nevsky Cathedral and enjoy the views from Kohtuotsa and Patkuli platforms.\nDay 2: Explore beyond the walls. Start at the magnificent Kadriorg Palace and Park. In the afternoon, head to the Lennusadam (Seaplane Harbour) for a deep dive into maritime history.\nDay 3: Discover modern Tallinn. Spend the morning exploring the street art and shops of Telliskivi Creative City and the charming wooden houses of the Kalamaja district. In the afternoon, head up the Tallinn TV Tower for panoramic views."
      }}
      faqs={[{
          question: "Is Tallinn expensive?",
          answer: "Compared to major Western European capitals like Paris or London, Tallinn is quite affordable. However, it is generally considered the most expensive of the Baltic capitals. Prices for accommodation and dining in the heart of the Old Town can be high, but stepping just a few streets away or exploring neighborhoods like Kalamaja can lead to significant savings. Public transport is cheap and efficient. Overall, it offers great value for a European city break."
        },
        {
          question: "How many days do you need in Tallinn?",
          answer: "Two to three days is the ideal amount of time to explore Tallinn. This allows you to dedicate a full day to the Old Town, another day to see key attractions outside the center like Kadriorg Palace and the Seaplane Harbour, and a third day to explore the creative hubs of Telliskivi and Kalamaja. If you wish to take a day trip to Lahemaa National Park or Helsinki, adding an extra day is recommended."
        },
        {
          question: "Is Tallinn safe?",
          answer: "Yes, Tallinn is a very safe city for tourists. Violent crime is rare. The main concern, as in any popular tourist destination, is petty crime like pickpocketing in crowded areas, particularly in the Old Town and on public transport. Exercise standard precautions: be aware of your surroundings, keep your valuables secure, and avoid leaving belongings unattended. The city is well-lit and safe to walk around at night."
        },
        {
          question: "What is Tallinn famous for?",
          answer: "Tallinn is most famous for its exceptionally well-preserved medieval Old Town, a UNESCO World Heritage Site that feels like stepping into a fairytale. It is also renowned as one of the world's most advanced digital societies, the birthplace of Skype, and a hub for tech innovation often called 'E-Estonia'. Finally, it's known for its unique culture blending Baltic, Nordic, and Eastern European influences, its beautiful coastline, and its enchanting Christmas market."
        }
      ]}
    />
  );
};