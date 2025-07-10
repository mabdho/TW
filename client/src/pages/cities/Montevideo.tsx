import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Montevideo: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Montevideo, Uruguay (2025 Guide)"}
      description={"Welcome to Montevideo, Uruguay's wonderfully laid-back and culturally rich capital. Nestled on the shores of the Río de la Plata, this city offers a refreshing blend of grand European architecture, a relaxed beach-town atmosphere, and a vibrant arts scene. Unlike its bustling neighbor Buenos Aires, Montevideo invites you to slow down, wander through historic cobblestone streets, sip mate with locals along the waterfront, and indulge in world-class steak. From the historic heart of the Ciudad Vieja to the sun-drenched sands of Pocitos, there's a unique charm waiting around every corner. It's a city of subtle delights, perfect for travelers seeking authenticity over spectacle. Get ready to explore a place where history, culture, and coastal living merge seamlessly. This guide will walk you through all the very best things to do in Montevideo for an unforgettable trip."}
      imageUrl={""}
      highlights={["Ciudad Vieja (Old City)",
        "Mercado del Puerto",
        "Rambla de Montevideo",
        "Palacio Salvo",
        "Teatro Solís"]}
      galleryImages={[
        { url: "", alt: "Montevideo landmark 1", caption: "Montevideo landmark 1 - placeholder" },
        { url: "", alt: "Montevideo landmark 2", caption: "Montevideo landmark 2 - placeholder" },
        { url: "", alt: "Montevideo landmark 3", caption: "Montevideo landmark 3 - placeholder" },
        { url: "", alt: "Montevideo landmark 4", caption: "Montevideo landmark 4 - placeholder" },
        { url: "", alt: "Montevideo landmark 5", caption: "Montevideo landmark 5 - placeholder" },
        { url: "", alt: "Montevideo landmark 6", caption: "Montevideo landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Ciudad Vieja (Old City)",
        description: "The historical heart of Montevideo, Ciudad Vieja is a captivating maze of cobblestone streets, colonial-era buildings, and leafy plazas. Start at the Puerta de la Ciudadela, the original gateway to the city, and wander towards Plaza Matriz, home to the Metropolitan Cathedral. The district is packed with art galleries, quirky antique shops, independent bookstores, and charming cafes.\n\nBy day, it’s a hub of business and tourism, buzzing with activity. As evening approaches, some streets quiet down while others come alive with the sounds of tango and candombe. It's the perfect place to get lost and feel the city's history, appreciating the beautifully preserved and sometimes gracefully decaying architecture that gives Montevideo its unique character.",
        practicalInfo: {
        howToGetThere: "Located on the western peninsula of the city, easily accessible on foot from the city center (Centro). Multiple bus lines stop at its edge.",
        openingHours: "24/7, though shops and galleries typically open 10:00 AM - 6:00 PM.",
        cost: "Free to explore.",
        website: "turismo.montevideo.gub.uy"
      }
      },
        {
        name: "Mercado del Puerto",
        description: "An essential pilgrimage for any food lover, the Mercado del Puerto is not a traditional fruit and vegetable market but a temple dedicated to Uruguayan barbecue, or 'parrilla'. Housed in a magnificent 19th-century wrought-iron structure, the market is filled with dozens of parrilla restaurants, each with sizzling grills piled high with prime cuts of beef, sausages (chorizo), and organ meats (morcilla, chinchulines).\n\nThe atmosphere is loud, smoky, and incredibly festive. Grab a stool at a counter, order a glass of Tannat wine, and watch the 'asadores' (grill masters) at work. Don't miss trying 'medio y medio', a sparkling wine unique to the market, which perfectly cuts through the richness of the meat.",
        practicalInfo: {
        howToGetThere: "At the edge of Ciudad Vieja, overlooking the port. A short walk from Plaza Independencia.",
        openingHours: "Daily, primarily for lunch from 12:00 PM to 5:00 PM. Some places open for dinner.",
        cost: "Free to enter, meal prices vary ($$-$$$).",
        website: "www.mercadodelpuerto.com"
      }
      },
        {
        name: "Rambla de Montevideo",
        description: "Stretching for an incredible 22 kilometers (13.7 miles) along the Río de la Plata, the Rambla is Montevideo's beloved waterfront promenade and the social artery of the city. It's where Montevideanos of all ages come to walk, jog, cycle, fish, and, most importantly, share mate with friends and family while watching the sunset.\n\nThe character of the Rambla changes as it passes through different neighborhoods, from the historic port area to the sandy beaches of Ramirez, Pocitos, and Carrasco. Renting a bike is one of the best ways to experience its full length. It offers unparalleled views and a genuine slice of local life.",
        practicalInfo: {
        howToGetThere: "Accessible from all coastal neighborhoods. Major bus routes run parallel to it.",
        openingHours: "24/7",
        cost: "Free",
        website: "turismo.montevideo.gub.uy"
      }
      },
        {
        name: "Palacio Salvo",
        description: "Dominating the skyline over Plaza Independencia, Palacio Salvo is Montevideo's most iconic and enigmatic building. This eclectic architectural marvel, blending Gothic, Neoclassical, and Art Deco styles, was the tallest building in South America when it was completed in 1928. Originally designed to be a hotel, it now houses private apartments and offices.\n\nWhile you can't freely wander the residential floors, you can admire its imposing facade from the plaza, take a peek inside the grand lobby, or book a guided tour. The tours offer fascinating insights into its history, legends (including its connection to the famous tango 'La Cumparsita'), and provide access to a viewpoint for stunning panoramic views of the city.",
        practicalInfo: {
        howToGetThere: "Located on the east side of Plaza Independencia.",
        openingHours: "Guided tours are available on specific days and times. Check the website for the current schedule.",
        cost: "Free to view from outside. Tours have a fee ($).",
        website: "www.palaciosalvo.net"
      }
      },
        {
        name: "Teatro Solís",
        description: "Uruguay's most prestigious and historic theater is a cultural gem located just off Plaza Independencia. Inaugurated in 1856, this neoclassical masterpiece boasts stunning acoustics and an opulent interior with a grand chandelier, gold leaf details, and plush red velvet seats. It has hosted some of the world's most famous performers over its long history.\n\nEven if you don't catch a performance by the National Ballet or the Philharmonic Orchestra, the guided tours are highly recommended. They provide a behind-the-scenes look at the main hall, stage, and private boxes, while sharing stories of the theater's past. It's a must-visit for lovers of architecture, history, and the performing arts.",
        practicalInfo: {
        howToGetThere: "One block from Plaza Independencia, at the entrance to the Ciudad Vieja.",
        openingHours: "Box office and guided tours have set hours, usually Tuesday-Sunday. Check online for performance schedules.",
        cost: "Tours have a small fee ($). Performance tickets vary.",
        website: "www.teatrosolis.org.uy"
      }
      },
        {
        name: "Feria de Tristán Narvaja",
        description: "Every Sunday morning, the Tristán Narvaja street transforms into Montevideo's largest and most famous flea market. This sprawling, chaotic, and utterly fascinating market is an experience in itself. You can find absolutely everything here, from fresh fruits and vegetables to antique furniture, rare books, vinyl records, vintage clothing, pets, and assorted bric-a-brac.\n\nIt's a vibrant spectacle of local life, where vendors shout their offers and crowds shuffle along, searching for bargains. It's the perfect place to people-watch, practice your Spanish, and find a unique souvenir. Even if you don't buy anything, the lively atmosphere is worth the visit. Arrive early to beat the biggest crowds.",
        practicalInfo: {
        howToGetThere: "Located on Tristán Narvaja street, between Avenida 18 de Julio and La Paz, in the Cordón neighborhood.",
        openingHours: "Every Sunday, from approximately 8:00 AM to 3:00 PM.",
        cost: "Free to browse.",
        website: "N/A"
      }
      },
        {
        name: "Plaza Independencia",
        description: "Montevideo's most important plaza serves as a bridge between the historic Ciudad Vieja and the modern downtown area. It's a grand, spacious square dominated by the imposing Palacio Salvo on one end and the Puerta de la Ciudadela on the other. At its center stands a massive equestrian statue of General José Artigas, Uruguay's national hero.\n\nBeneath the statue lies the Artigas Mausoleum, a subterranean chamber where the hero's remains are kept under solemn guard. The plaza is surrounded by significant buildings, including the Presidential Offices (Torre Ejecutiva) and the Teatro Solís, making it a crucial starting point for any city tour.",
        practicalInfo: {
        howToGetThere: "Centrally located, separating Ciudad Vieja from Centro. Accessible by numerous bus lines.",
        openingHours: "Plaza is open 24/7. Mausoleum has specific visiting hours (usually 10:00 AM to 6:00 PM).",
        cost: "Free.",
        website: "turismo.montevideo.gub.uy"
      }
      },
        {
        name: "Museo Andes 1972",
        description: "This small but incredibly powerful museum tells the harrowing and inspiring story of the 1972 Andes flight disaster, where a Uruguayan rugby team's plane crashed in the mountains, leading to a remarkable tale of survival. The museum was created by one of the survivors and is dedicated to the memory of the 29 who perished and the 16 who lived.\n\nThrough personal objects, photographs, and detailed accounts, the museum offers a respectful and deeply moving chronicle of the 72 days the survivors spent in the Andes. It's an emotional and unforgettable experience that highlights human resilience, solidarity, and the will to live. It is widely considered one of the best museums in the city.",
        practicalInfo: {
        howToGetThere: "Located in the heart of Ciudad Vieja on Rincón street.",
        openingHours: "Monday-Saturday, 10:00 AM to 5:00 PM. Check for seasonal changes.",
        cost: "Entrance fee applies ($$).",
        website: "www.mandes.uy"
      }
      },
        {
        name: "Fortaleza del Cerro",
        description: "Perched atop the highest hill in Montevideo (the 'cerro' that gives the city its name), this historic fortress offers the most commanding panoramic views of the city and the bay. Built by the Spanish in the early 19th century to protect the city, the Fortaleza General Artigas now houses a military museum.\n\nThe museum's collection includes historic weapons, uniforms, and artifacts detailing Uruguay's military history. However, the main draw is the journey to the top and the spectacular vistas. It provides a unique perspective on Montevideo's geography and layout, making it well worth the trip from the city center.",
        practicalInfo: {
        howToGetThere: "Located in the Cerro neighborhood across the bay. Best reached by taxi, ride-sharing app, or specific bus lines.",
        openingHours: "Wednesday to Sunday, 10:00 AM to 6:00 PM (hours can vary).",
        cost: "Small entrance fee ($).",
        website: "www.descubrimontevideo.uy/es/fortaleza-del-cerro"
      }
      },
        {
        name: "Pocitos Beach",
        description: "Pocitos is Montevideo's most famous urban beach and neighborhood. This crescent-shaped stretch of sand is a hub of activity, especially during the summer months. The beach is lined with high-rise apartment buildings and the wide Rambla, where locals gather to play sports like volleyball and beach soccer.\n\nThe iconic 'MONTEVIDEO' sign, perfect for a photo op, is located here. The water of the Río de la Plata is calm, making it suitable for a dip, although it's more of a social spot than a classic swimming beach. The surrounding neighborhood is upscale and vibrant, with plenty of excellent restaurants, cafes, and shops.",
        practicalInfo: {
        howToGetThere: "Located east of the city center. Easily accessible by numerous bus routes from Centro or Ciudad Vieja.",
        openingHours: "24/7",
        cost: "Free",
        website: "turismo.montevideo.gub.uy"
      }
      },
        {
        name: "Estadio Centenario & Museo del Fútbol",
        description: "A must-visit for any soccer fan, the Estadio Centenario is a hallowed ground in the world of football. Built to host the very first FIFA World Cup in 1930, which Uruguay won, it is listed by FIFA as a Classic Football Stadium. The stadium itself is an impressive concrete monument to a bygone era of sports architecture.\n\nBeneath the Olympic Tower is the Museo del Fútbol (Football Museum), which showcases memorabilia from the 1930 and 1950 World Cup victories, along with exhibits on the history of Uruguayan soccer. You can take a tour that allows you to step out onto the terraces and imagine the roar of the crowd from nearly a century ago.",
        practicalInfo: {
        howToGetThere: "Located in Parque Batlle. Accessible by multiple bus lines.",
        openingHours: "Monday to Friday, 10:00 AM to 5:00 PM.",
        cost: "Entrance fee for the museum and stadium tour ($).",
        website: "estadiocentenario.com.uy/site/museo"
      }
      },
        {
        name: "Mercado Agrícola de Montevideo (MAM)",
        description: "Less tourist-focused than the Mercado del Puerto, the MAM is a beautifully restored historic market that offers a more authentic local experience. Housed in a stunning wood and steel structure from 1913, this market is a feast for the senses. Here, you'll find pristine fruit and vegetable stalls, gourmet food shops, artisanal cheese and bread makers, and a diverse food court.\n\nIt's a great place to sample local specialties, buy high-quality produce, or enjoy a casual lunch alongside Montevideanos. The restoration has made it a beautiful architectural space to visit, combining history with modern gastronomy.",
        practicalInfo: {
        howToGetThere: "Located in the Goes neighborhood, a short taxi or bus ride from the center.",
        openingHours: "Daily, from around 9:00 AM to 10:00 PM.",
        cost: "Free to enter.",
        website: "www.mam.com.uy"
      }
      },
        {
        name: "Espacio de Arte Contemporáneo (EAC)",
        description: "For a dose of modern culture, head to the Espacio de Arte Contemporáneo. What makes this art space particularly unique is its location: a former 19th-century prison. The individual cells of the Miguelete prison have been converted into minimalist white-cube galleries, where contemporary Uruguayan and international artists display their work.\n\nThe architecture itself is a powerful backdrop to the often thought-provoking installations, sculptures, and multimedia art. It's a fascinating juxtaposition of past and present, offering a completely different artistic experience from the city's more traditional museums.",
        practicalInfo: {
        howToGetThere: "Located near the Tres Cruces bus terminal and Palacio Legislativo.",
        openingHours: "Wednesday to Saturday 1:00 PM to 7:00 PM, Sunday 11:00 AM to 5:00 PM. Closed Monday/Tuesday.",
        cost: "Free.",
        website: "www.eac.gub.uy"
      }
      },
        {
        name: "Jardín Botánico",
        description: "A peaceful green oasis in the Prado neighborhood, Montevideo's Botanical Garden is the perfect escape from the urban hustle. Founded in 1902, the garden covers 13 hectares and is home to a diverse collection of native and exotic plants from around the world. It's a beautifully maintained space for a leisurely stroll among towering trees, themed gardens, and glasshouses.\n\nThe garden is particularly lovely in the spring when many of the plants are in bloom. It's a favorite spot for locals seeking tranquility and a great place for anyone interested in botany or simply looking for a quiet, shady place to relax and read a book.",
        practicalInfo: {
        howToGetThere: "Located in the Prado neighborhood, best reached by bus or taxi from the city center.",
        openingHours: "Daily, from 7:30 AM to 6:30 PM (hours can vary by season).",
        cost: "Free.",
        website: "jardinbotanico.montevideo.gub.uy"
      }
      },
        {
        name: "Palacio Legislativo",
        description: "Even if you're not interested in politics, Uruguay's Legislative Palace is an architectural masterpiece that is well worth a visit. Completed in 1925, this magnificent neoclassical building is a symbol of the country's strong democratic traditions. Its construction involved an astonishing amount of marble—over 27 different types, all sourced from within Uruguay.\n\nThe exterior is grand and imposing, but the interior is truly breathtaking, with its stunning 'Salón de los Pasos Perdidos' (Hall of Lost Steps), intricate stained-glass ceilings, and detailed woodwork. Guided tours are available on weekdays and offer a fascinating look at the building's art, architecture, and function.",
        practicalInfo: {
        howToGetThere: "Located at the end of Avenida del Libertador Brig. Gral. Juan Antonio Lavalleja. Accessible by bus.",
        openingHours: "Guided tours are offered Monday to Friday at 10:30 AM and 3:00 PM (subject to change).",
        cost: "Tours are free.",
        website: "parlamento.gub.uy"
      }
      }
      ]}
      logistics={{
        gettingAround: "Montevideo is a very walkable city, especially the downtown areas of Ciudad Vieja and Centro. For longer distances, the city has an extensive and affordable bus system (colectivos); you can pay with cash or the rechargeable STM card. Taxis are plentiful and metered. Ride-sharing apps like Uber and Cabify are also widely available and reliable. Renting a bike is a great option for exploring the Rambla.",
        whereToStay: "For history and charm, stay in Ciudad Vieja, which is close to many key sights but can be quiet at night. For a beach vibe and modern amenities, Pocitos and Punta Carretas are excellent choices, offering great restaurants, shopping, and access to the Rambla. Centro is a convenient and budget-friendly option, while the leafy, upscale neighborhood of Carrasco offers luxurious hotels near the airport.",
        bestTimeToVisit: "The best times to visit Montevideo are during the spring (September to November) and autumn (March to May). During these months, the weather is pleasant and mild, and the city is less crowded than in the peak summer season. Summer (December to February) is hot and popular, especially for enjoying the beaches, but prices are higher. Winter (June to August) is cool and damp, with fewer tourists.",
        suggestedItinerary: "Day 1: Explore the heart of the city. Start at Plaza Independencia, see Palacio Salvo, and take a tour of Teatro Solís. Wander through Ciudad Vieja, visit the Museo Andes 1972, and end with a massive parrilla lunch at Mercado del Puerto. \nDay 2: Experience the coast. Rent a bike and ride a long stretch of the Rambla. Relax on Pocitos Beach and take a photo with the 'MONTEVIDEO' sign. Explore the upscale Punta Carretas neighborhood and its lighthouse. \nDay 3: Culture and markets. If it's a Sunday, dive into the Feria de Tristán Narvaja. Otherwise, visit the Mercado Agrícola (MAM) for a local food experience. In the afternoon, visit the iconic Estadio Centenario and its Football Museum or the impressive Palacio Legislativo."
      }}
      faqs={[{
          question: "Is Montevideo expensive?",
          answer: "Montevideo is considered one of the more expensive cities in South America, but it is still generally more affordable than major cities in North America or Western Europe. A meal at a mid-range restaurant might cost $20-30 USD per person. Public transportation and groceries are reasonably priced. Accommodation can range from budget-friendly hostels to high-end hotels, so there are options for every budget."
        },
        {
          question: "How many days do you need in Montevideo?",
          answer: "Three days is a perfect amount of time to get a good feel for Montevideo. This allows you to explore the main historical and cultural sights, spend time on the Rambla, and enjoy the local food scene without feeling rushed. If you want to take a day trip to a nearby place like Colonia del Sacramento or Punta del Este, plan for four to five days."
        },
        {
          question: "Is Montevideo safe?",
          answer: "Montevideo is generally considered one of the safest capital cities in Latin America. Tourists can feel comfortable walking around most areas, especially during the day. However, like in any large city, it's wise to take precautions. Be aware of your surroundings, avoid displaying expensive valuables, and be cautious in certain areas of Ciudad Vieja and Centro after dark. Stick to well-lit, busy streets at night and use a taxi or ride-sharing app for late-night transport."
        },
        {
          question: "What is Montevideo famous for?",
          answer: "Montevideo is famous for its massive waterfront promenade, the Rambla; its historic Ciudad Vieja with beautiful colonial and Art Deco architecture; and its world-class beef, served up at lively parrillas in the Mercado del Puerto. It's also known for being the birthplace of the famous tango 'La Cumparsita', the home of the first-ever FIFA World Cup, and its laid-back culture centered around drinking mate by the water."
        }
      ]}
    />
  );
};