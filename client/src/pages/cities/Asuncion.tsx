import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Asuncion: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Asuncion, Guide"
      description={`Welcome to Asunción, the resilient 'Mother of Cities' and the heart of Paraguay. This often-overlooked South American capital offers a captivating blend of grand colonial architecture, lush green spaces, and a burgeoning modern energy. Life here moves at a more relaxed pace, inviting you to wander through historic plazas, sip tereré by the river, and connect with some of the continent's warmest people. While it may not have the towering monuments of its neighbors, Asunción's charm lies in its authenticity and quiet confidence. From exploring poignant museums to getting lost in vibrant markets, there's a surprising wealth of culture and history to uncover. This guide will walk you through all the best things to do in Asunción, revealing a city that is as intriguing as it is welcoming."`}
      highlights={[
      "Palacio de los López",
      "Panteón Nacional de los Héroes",
      "Costanera de Asunción",
      "Museo del Barro",
      "Mercado Cuatro"
]}
      galleryImages={[
        { url: "", alt: "Asuncion landmark 1", caption: "Asuncion landmark 1 - placeholder" },
        { url: "", alt: "Asuncion landmark 2", caption: "Asuncion landmark 2 - placeholder" },
        { url: "", alt: "Asuncion landmark 3", caption: "Asuncion landmark 3 - placeholder" },
        { url: "", alt: "Asuncion landmark 4", caption: "Asuncion landmark 4 - placeholder" },
        { url: "", alt: "Asuncion landmark 5", caption: "Asuncion landmark 5 - placeholder" },
        { url: "", alt: "Asuncion landmark 6", caption: "Asuncion landmark 6 - placeholder" }
      ]}
      attractions={[
      {
            "name": "Palacio de los López",
            "description": "Dominating the city's skyline along the bay, the Palacio de los López is the official workplace of the President of Paraguay and the seat of government. This stunning, U-shaped palace, built in the mid-19th century, is a masterpiece of Neoclassical and Palladian architecture. Its crisp white façade and elegant colonnades are particularly breathtaking at night when illuminated by floodlights, casting a golden glow that reflects in the nearby Paraguay River.\n\nWhile access to the interior is restricted for security reasons, the building's exterior is one of Asunción's most iconic photo opportunities. Strolling around its perimeter provides a sense of the nation's political history and architectural grandeur. The changing of the guard ceremony, though less frequent than at other presidential palaces, is a formal and impressive spectacle if you're lucky enough to catch it.",
            "practicalInfo": {
                  "howToGetThere": "Located in the historic center, easily accessible on foot from other downtown attractions. Address: Paraguayo Independiente, between Ayolas and O'Leary.",
                  "openingHours": "Exterior viewable 24/7. No public access to the interior.",
                  "cost": "Free to view from the outside.",
                  "website": "N/A (Official government site has limited tourist info)"
            }
      },
      {
            "name": "Panteón Nacional de los Héroes",
            "description": "A site of immense national pride and solemn remembrance, the Panteón Nacional de los Héroes is Paraguay's national mausoleum. Consecrated in 1936, this impressive structure was modeled after Les Invalides in Paris and holds the remains of the country's greatest military heroes, including Mariscal Francisco Solano López from the War of the Triple Alliance. The tomb of the unknown soldier is also located here.\n\nThe building itself is a beautiful example of neo-baroque architecture, with a soaring central dome and ornate detailing. Inside, the hushed atmosphere invites contemplation of the nation's turbulent past. Two soldiers stand in perpetual guard, and visitors can witness the formal changing of the guard ceremony throughout the day. It is an essential stop for understanding Paraguay's history and reverence for its national figures.",
            "practicalInfo": {
                  "howToGetThere": "Centrally located on the corner of Palma and Chile streets, in the heart of the historic downtown.",
                  "openingHours": "Typically open daily from 6:00 AM to 5:30 PM.",
                  "cost": "Free.",
                  "website": "N/A"
            }
      },
      {
            "name": "Costanera de Asunción",
            "description": "The Costanera is Asunción's revitalized riverfront promenade, a wide, modern space that has become the city's favorite recreational hub. Stretching along the Bay of Asunción, it offers a refreshing escape from the urban hustle and provides beautiful views of the Paraguay River and the downtown skyline, including a fantastic perspective of the Palacio de los López.\n\nLocals flock here, especially in the late afternoons and on weekends, to walk, jog, cycle, or simply relax with friends and family while sipping the ubiquitous tereré. With a dedicated bike path, playgrounds, and occasional food vendors, it's a lively and welcoming space for everyone. A stroll along the Costanera at sunset is a quintessential Asunción experience.",
            "practicalInfo": {
                  "howToGetThere": "Located along Avenida Costanera José Asunción Flores, just north of the historic center.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free.",
                  "website": "N/A"
            }
      },
      {
            "name": "Museo del Barro",
            "description": "Arguably the most important cultural institution in Paraguay, the Museo del Barro (Museum of Clay) is a must-visit for anyone interested in Paraguayan and Latin American art. The museum ingeniously divides its collection into three sections: pottery (indigenous and contemporary ceramics), a museum of indigenous art (featuring featherwork, masks, and textiles), and a collection of contemporary Paraguayan and Latin American paintings and drawings.\n\nThis unique structure allows you to journey through Paraguay's artistic soul, from pre-Columbian artifacts to modern political satire. The exhibits are thoughtfully curated and provide deep insights into the nation's diverse cultural identity. It's an intellectually stimulating and visually stunning experience that showcases a side of Paraguay many visitors miss.",
            "practicalInfo": {
                  "howToGetThere": "Located at Grabadores del Cabichuí 2716, in the Isla de Francia neighborhood. A short taxi or Uber ride from the city center.",
                  "openingHours": "Check official website for current hours, typically closed on Mondays and public holidays.",
                  "cost": "Free, but donations are encouraged.",
                  "website": "www.museodelbarro.org"
            }
      },
      {
            "name": "Mercado Cuatro",
            "description": "For a full-sensory immersion into the daily life of Asunción, there is no place like Mercado Cuatro. This sprawling, chaotic, and utterly fascinating market covers several city blocks and is where locals come to buy... well, everything. From fresh produce, meats, and cheeses to electronics, clothing, and traditional herbs for making tereré and medicinal teas (yuyos), the market is a vibrant labyrinth of sights, sounds, and smells.\n\nNavigating its crowded aisles is an adventure in itself. It's the perfect place to try authentic street food like chipa or mbeju, practice your Spanish with friendly vendors, and witness the city's commercial pulse. While you should keep a close eye on your belongings, the energy and authenticity of Mercado Cuatro make it an unforgettable experience.",
            "practicalInfo": {
                  "howToGetThere": "Located around Avenida Silvio Pettirossi. It's best to take a taxi or bus, as parking is nonexistent and it's a bit far to walk from the historic center.",
                  "openingHours": "Mainly Monday to Saturday, from early morning (~7:00 AM) to late afternoon (~6:00 PM).",
                  "cost": "Free to enter.",
                  "website": "N/A"
            }
      },
      {
            "name": "Loma San Jerónimo",
            "description": "Nestled near the city center, Loma San Jerónimo is Asunción's first revitalized neighborhood and a testament to community spirit. This small, hilly barrio has been transformed into a vibrant open-air museum with brightly painted houses, quirky street art, and narrow, charming alleyways. It feels a world away from the formal government buildings just a short walk away.\n\nVisitors can wander its colorful streets, enjoy panoramic views of the river and downtown, and stop at one of the small, family-run cafes for a coffee or a traditional meal. The neighborhood is particularly lively on weekends when local artisans sometimes set up stalls. It's a joyful and picturesque spot that showcases the creative energy of Asunción's residents.",
            "practicalInfo": {
                  "howToGetThere": "A short walk or taxi ride from the historic center, located just behind the port.",
                  "openingHours": "Accessible 24/7, but best visited during daylight hours.",
                  "cost": "Free to explore.",
                  "website": "N/A (Community-run Facebook pages often post updates)"
            }
      },
      {
            "name": "Jardín Botánico y Zoológico de Asunción",
            "description": "Spanning over 270 acres, the Botanical Garden and Zoo offers a vast green lung for the city. Originally the 19th-century estate of President Carlos Antonio López, it's now a place where nature, history, and recreation converge. The botanical garden section is a peaceful oasis with towering native trees, shady paths, and diverse plant life, perfect for a relaxing stroll.\n\nThe adjacent zoo houses a collection of native South American animals, including jaguars, tapirs, and the Chacoan peccary. While the enclosures reflect a more traditional style, it provides an opportunity to see regional fauna. The park also contains the former López residence, a historic mansion that now functions as a natural history museum.",
            "practicalInfo": {
                  "howToGetThere": "Located on the outskirts of the city along Avenida Artigas. Accessible by city bus or a taxi/Uber ride (approx. 20-30 minutes from downtown).",
                  "openingHours": "Park is generally open daily from 6:00 AM to 6:00 PM. Zoo hours may be shorter.",
                  "cost": "A small entrance fee is charged.",
                  "website": "N/A"
            }
      },
      {
            "name": "Manzana de la Rivera",
            "description": "Facing the Palacio de los López, the Manzana de la Rivera (Rivera Block) is a cultural complex comprised of nine restored historical houses. Each building showcases a different architectural style and era of Asunción's history, creating a beautiful and cohesive whole. The most famous house is the Casa Viola, a fine example of late colonial architecture and one of the oldest surviving buildings in the city.\n\nToday, the complex houses the city's municipal museum, art galleries, a library, a theater, and a charming café. It's a wonderfully preserved slice of old Asunción and a hub for cultural events and exhibitions. Walking through its connected patios and rooms feels like stepping back in time.",
            "practicalInfo": {
                  "howToGetThere": "Located on Juan de Ayolas 129, directly across from the presidential palace in the historic center.",
                  "openingHours": "Generally Monday to Friday 8:00 AM - 7:00 PM, with shorter hours on weekends. Check for specific gallery times.",
                  "cost": "Free.",
                  "website": "www.manzanadelarivera.org.py"
            }
      },
      {
            "name": "Catedral Metropolitana de Asunción",
            "description": "The main Roman Catholic church in the city, the Metropolitan Cathedral, stands as a quiet and dignified landmark in the historic center. The current building dates back to the mid-19th century, built on the site of previous churches that were destroyed by fire. It features a simple yet elegant neoclassical facade with twin bell towers.\n\nInside, the cathedral boasts a magnificent silver-plated main altar and a peaceful atmosphere that provides a welcome respite from the city's heat and noise. While not as ornate as some cathedrals in other South American capitals, its historical significance and serene presence make it a worthwhile visit for those exploring downtown Asunción.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Plaza de la Independencia, easily walkable from other historic sites.",
                  "openingHours": "Open daily for mass and visits, generally closes in the early afternoon.",
                  "cost": "Free.",
                  "website": "N/A"
            }
      },
      {
            "name": "Cabildo",
            "description": "The Cabildo, with its distinctive pink hue and colonial arcades, is one of Asunción's most historically significant buildings. Originally serving as the colonial town council and later as the National Congress, it has been at the center of Paraguayan politics for centuries. Today, it has been repurposed as the Centro Cultural de la República.\n\nThe cultural center hosts a variety of rotating art exhibitions, historical displays, and musical performances. It also contains several small museums dedicated to Paraguayan culture, including the Museo del Cine y la Fotografía and the Museo de Arte Sacro. It's a key piece of the historic downtown circuit and a vibrant cultural space.",
            "practicalInfo": {
                  "howToGetThere": "Located on Avenida República, adjacent to the Plaza de la Independencia.",
                  "openingHours": "Typically Tuesday to Sunday, with varying hours. Check their social media for current exhibition schedules.",
                  "cost": "Free.",
                  "website": "www.cabildoccr.gov.py"
            }
      },
      {
            "name": "Estación Central del Ferrocarril",
            "description": "Delve into the age of steam at the old Central Railway Station, a monument to a bygone era of Paraguayan innovation. This was one of the first railway stations in South America, inaugurated in 1861. The beautiful terminal building, with its grand clock tower and elegant design, stands as a proud reminder of the country's past industrial ambitions.\n\nThe station is no longer in service but has been preserved as a museum. Inside, you can see vintage locomotives, beautifully restored passenger cars, and historic railway equipment. It offers a fascinating glimpse into 19th-century technology and its impact on Paraguay's development.",
            "practicalInfo": {
                  "howToGetThere": "Located at the intersection of Eligio Ayala and Mexico streets, on the edge of the historic center.",
                  "openingHours": "Currently has limited and sometimes irregular opening hours. It's best to check locally for the most up-to-date information.",
                  "cost": "A small entrance fee is usually charged.",
                  "website": "N/A"
            }
      },
      {
            "name": "Museo de las Memorias: Dictadura y Derechos Humanos",
            "description": "This powerful and sobering museum offers a critical look into one of the darkest periods of Paraguayan history: the 35-year dictatorship of Alfredo Stroessner (1954-1989). The museum is housed in a building that was once a detention and torture center used by the regime's secret police. The exhibits document the human rights abuses, political persecution, and disappearances that occurred during this era.\n\nThrough photographs, documents, and personal testimonies, the museum honors the victims and serves as a crucial reminder of the importance of democracy and human rights. It's an emotionally impactful but essential visit for anyone seeking a deeper understanding of the country's modern history and the resilience of its people.",
            "practicalInfo": {
                  "howToGetThere": "Located at Chile 1066, a bit outside the main tourist core but reachable by a short taxi ride.",
                  "openingHours": "Typically open on weekdays, but hours can be irregular. It's advisable to call ahead.",
                  "cost": "Free.",
                  "website": "www.museodelasmemorias.com"
            }
      },
      {
            "name": "Cerro Lambaré",
            "description": "For one of the best panoramic views of Asunción and the surrounding landscape, head to Cerro Lambaré. This prominent hill, located just south of the city center, is crowned by a towering monument to Cacique Lambaré, an indigenous Guaraní leader who resisted the Spanish conquistadors. The monument itself is an imposing structure, and the viewpoint at its base offers a sweeping vista of the entire city, the Paraguay River, and even parts of Argentina on a clear day.\n\nIt's a popular spot for locals to watch the sunset. The climb or drive up the hill is part of the experience, taking you through a pleasant, wooded area. It provides a great sense of the city's geography and scale.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Lambaré district. The best way to get there is by taxi or Uber, as public transport can be complicated.",
                  "openingHours": "Open daily, best visited during daylight or at sunset.",
                  "cost": "Free.",
                  "website": "N/A"
            }
      },
      {
            "name": "Paseo La Galería",
            "description": "To see the modern face of Asunción, spend some time at Paseo La Galería. This sleek, expansive shopping mall and corporate complex represents the city's recent economic growth and increasing cosmopolitanism. It's more than just a place to shop; it's a social hub for the city's middle and upper classes.\n\nHere you'll find international brands, a high-end cinema, a vast food court with both local and international options, and several excellent restaurants and bars. It's a stark contrast to the historic center and provides insight into contemporary life and aspirations in Paraguay's capital. It's also a great, air-conditioned escape on a hot afternoon.",
            "practicalInfo": {
                  "howToGetThere": "Located on Avenida Santa Teresa in the upscale Villa Morra / Las Carmelitas area. Best reached by taxi or Uber.",
                  "openingHours": "Shops generally 9:00 AM - 9:00 PM; restaurants and cinema open later.",
                  "cost": "Free to enter.",
                  "website": "www.paseolagaleria.com.py"
            }
      },
      {
            "name": "Drink Tereré with Locals",
            "description": "This isn't a single location but an essential cultural experience. Tereré, a cold-brewed infusion of yerba mate and medicinal herbs (yuyos), is the national drink and a cornerstone of Paraguayan social life. It's consumed throughout the day, everywhere, from a shared guampa (cup) and bombilla (filtered straw).\n\nTo experience it authentically, find a spot where locals relax, such as the Costanera or Plaza Uruguaya. You can buy a complete kit (thermos, guampa, bombilla, and yerba) from a street vendor. Ask the yuyera (herb seller) to prepare a mix for you—perhaps one for digestion (digestivo) or to combat the heat (refrescante). Sharing tereré is a sign of friendship and hospitality; if offered, it's polite to accept. Participating in this daily ritual is the best way to connect with the local culture.",
            "practicalInfo": {
                  "howToGetThere": "Any park or plaza, but the Costanera and Plaza Uruguaya are popular spots. Vendors are everywhere.",
                  "openingHours": "24/7, but most common during the day.",
                  "cost": "A full kit can cost around 50,000-100,000 PYG. A single preparation of herbs from a yuyera is very cheap.",
                  "website": "N/A"
            }
      }
]}
      logistics={{
      "gettingAround": "The historic center of Asunción is compact and easily explored on foot. For longer distances, the city has an extensive, though sometimes confusing, bus (colectivo) network. Taxis are plentiful and relatively inexpensive; always ensure the meter is used or agree on a price beforehand. Ride-sharing apps like Uber and the local Muv are popular, reliable, and often cheaper than taxis, making them the most convenient option for visitors.",
      "whereToStay": "For first-time visitors, the Historic Center (Centro Histórico) is convenient for sightseeing, though it can be quiet at night. The most modern and popular areas are Villa Morra and Las Carmelitas, which offer upscale hotels, excellent restaurants, shopping malls like Paseo La Galería, and vibrant nightlife. Recommended hotels include Hotel Guarani (historic), Dazzler by Wyndham Asunción (modern), and La Misión Hotel Boutique (charming).",
      "bestTimeToVisit": "The best times to visit Asunción are during the shoulder seasons: spring (September to November) and autumn (March to May). During these months, the weather is pleasantly warm and less humid. Summers (December to February) are extremely hot and humid, with temperatures often exceeding 38°C (100°F). Winters (June to August) are mild and dry, with comfortable daytime temperatures, though nights can be cool.",
      "suggestedItinerary": "A simple 3-day itinerary:\nDay 1: Historic Core. Explore the Panteón Nacional de los Héroes, Catedral Metropolitana, Cabildo, and Manzana de la Rivera. End with a sunset stroll and views of the Palacio de los López from the Costanera.\nDay 2: Culture & Markets. Start at the fantastic Museo del Barro. In the afternoon, dive into the chaos and energy of Mercado Cuatro, then find tranquility in the colorful streets of Loma San Jerónimo.\nDay 3: Views & Relaxation. Head to the Jardín Botánico in the morning. In the afternoon, take a taxi up Cerro Lambaré for panoramic city views. Finish the day with dinner and drinks in the modern Villa Morra district."
}}
      faqs={[
      {
            "question": "Is Asunción expensive?",
            "answer": "No, Asunción is one of the most affordable capital cities in South America. Accommodation, food, and transportation are all very reasonably priced. A meal at a local restaurant can cost as little as $5-8 USD, a taxi ride across town is typically under $5 USD, and you can find comfortable hotels for a fraction of the price of those in other major cities."
      },
      {
            "question": "How many days do you need in Asunción?",
            "answer": "Two to three full days are sufficient to see the main highlights of Asunción at a comfortable pace. This allows you to explore the historic center, visit key museums like Museo del Barro, and experience local life at the Costanera and a market. If you wish to explore more deeply or take a day trip to nearby towns like Areguá, four to five days would be ideal."
      },
      {
            "question": "Is Asunción safe?",
            "answer": "Asunción is generally considered safe for tourists, especially in the main tourist areas and upscale neighborhoods like Villa Morra during the day. However, like any large city, it's important to take standard precautions. Avoid walking alone at night in poorly lit areas, particularly in the historic center which can become deserted. Be vigilant of your belongings in crowded places like Mercado Cuatro and on public buses."
      },
      {
            "question": "What is Asunción famous for?",
            "answer": "Asunción is famous for being one of the oldest cities in South America, earning it the nickname 'Mother of Cities' as many colonial expeditions departed from here. It's known for its unique blend of colonial and modern architecture, its location on the scenic Paraguay River, and its deeply ingrained Guaraní culture. Above all, it's famous for the national beverage, tereré, a cold-brewed yerba mate that is a symbol of Paraguayan hospitality and daily life."
      }
]}
      imageUrl={""}
    />
  );
};