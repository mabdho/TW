import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Sucre: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Sucre, Bolivia (2025 Guide)"}
      description={"Welcome to Sucre, Bolivia's constitutional capital and the jewel in its colonial crown. Known affectionately as 'La Ciudad Blanca' (The White City), Sucre captivates visitors with its impeccably preserved 16th-century buildings, whitewashed facades, and tranquil courtyards. This UNESCO World Heritage city offers a delightful blend of history, culture, and youthful energy, thanks to its prestigious university. Unlike the frenetic pace of La Paz, Sucre invites you to slow down, wander its charming streets, and soak in the relaxed atmosphere. Whether you're exploring the birthplace of the nation, marveling at prehistoric footprints, or haggling in vibrant markets, you'll find an incredible array of activities. From historic landmarks to stunning viewpoints, this guide will walk you through all the best things to do in Sucre for an unforgettable journey into the heart of Bolivia."}
      highlights={["Casa de la Libertad",
        "Plaza 25 de Mayo",
        "Parque Cretácico",
        "Convento de la Recoleta",
        "Mercado Central"]}
      galleryImages={[
        { url: "", alt: "Sucre landmark 1", caption: "Sucre landmark 1 - placeholder" },
        { url: "", alt: "Sucre landmark 2", caption: "Sucre landmark 2 - placeholder" },
        { url: "", alt: "Sucre landmark 3", caption: "Sucre landmark 3 - placeholder" },
        { url: "", alt: "Sucre landmark 4", caption: "Sucre landmark 4 - placeholder" },
        { url: "", alt: "Sucre landmark 5", caption: "Sucre landmark 5 - placeholder" },
        { url: "", alt: "Sucre landmark 6", caption: "Sucre landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Casa de la Libertad",
        description: "Arguably the most important historic building in Bolivia, the Casa de la Libertad is where the nation's Declaration of Independence was signed on August 6, 1825. Housed in what was once a Jesuit university chapel, the museum offers a profound journey through Bolivia's turbulent and triumphant history. The main hall, with its ornate wooden choir stalls and the original independence document, is a powerful sight.\n\nGuided tours (available in English and Spanish) are highly recommended to fully appreciate the significance of the artifacts, portraits of key figures like Simón Bolívar and Antonio José de Sucre, and the historical context of the nation's founding. It's a foundational experience for understanding modern Bolivia.",
        practicalInfo: {
        howToGetThere: "Located on the north side of Plaza 25 de Mayo in the historic center.",
        openingHours: "Tuesday - Saturday: 9:00 AM - 12:30 PM & 2:30 PM - 6:00 PM; Sunday: 9:00 AM - 12:30 PM. Closed Mondays.",
        cost: "Approx. 15 BOB for foreigners, plus a small fee for photos.",
        website: "http://www.casadelalibertad.org.bo/"
      }
      },
        {
        name: "Plaza 25 de Mayo",
        description: "The vibrant heart of Sucre, Plaza 25 de Mayo is the city's main social and cultural hub. Surrounded by magnificent colonial structures, including the Metropolitan Cathedral, the Casa de la Libertad, and the Prefecture Palace, the square is a perfect starting point for exploring the city. Manicured gardens, a central statue honoring Marshal Antonio José de Sucre, and bubbling fountains create a picturesque and relaxing atmosphere.\n\nFind a bench under the shade of a palm tree and watch the world go by. You'll see locals chatting, students relaxing, and vendors selling snacks. In the evenings, the plaza comes alive with families and couples enjoying the cool air, and the surrounding buildings are beautifully illuminated.",
        practicalInfo: {
        howToGetThere: "The central square of Sucre, impossible to miss.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Parque Cretácico",
        description: "Prepare to be astounded at Parque Cretácico, home to one of the world's largest collections of dinosaur footprints. Discovered in a local cement quarry (FANCESA), this incredible site features over 12,000 individual footprints from at least eight different dinosaur species, perfectly preserved on a near-vertical limestone wall that was once a lakebed 68 million years ago. The star attraction is the trail left by a baby Tyrannosaurus Rex, nicknamed 'Johnny Walker'.\n\nThe park features life-sized dinosaur models, a small museum, and guided tours that take you closer to the wall for a better look (check tour times, as they are often scheduled at midday). The sheer scale and clarity of the tracks make this a mind-boggling and essential stop in Sucre.",
        practicalInfo: {
        howToGetThere: "Located 5 km from the city center. Take the 'Dino Bus' from Plaza 25 de Mayo (in front of the Cathedral) or a taxi (approx. 30-40 BOB).",
        openingHours: "Tuesday - Sunday: 9:00 AM - 5:00 PM. Closed Mondays.",
        cost: "Approx. 30 BOB for foreigners.",
        website: "https://www.parquecretacicosucre.com/"
      }
      },
        {
        name: "Convento de la Recoleta",
        description: "Founded in 1601 by the Franciscan order, the Convento de la Recoleta is a peaceful monastery complex perched on a hill overlooking the city. Its serene courtyards, filled with roses and ancient trees, offer a tranquil escape from the city buzz. The attached church and museum contain a collection of colonial art, sculptures, and religious artifacts. An ancient Cedron tree in the main patio is said to be over a thousand years old.\n\nThe main draw, however, is the adjacent Mirador de la Recoleta. The arched colonnade provides a stunning, picture-perfect frame for panoramic views of Sucre's red-tiled roofs and white walls, especially at sunset.",
        practicalInfo: {
        howToGetThere: "A steep but pleasant 15-minute walk up Calle Dalence from the city center. A taxi is a quick alternative.",
        openingHours: "Monday - Friday: 9:00 AM - 11:30 AM & 2:30 PM - 4:30 PM; Saturday: 2:30 PM - 4:30 PM. Closed Sundays.",
        cost: "Approx. 10 BOB for the convent museum. The viewpoint (Mirador) is free.",
        website: "N/A"
      }
      },
        {
        name: "Mercado Central",
        description: "For a true slice of local life, dive into the bustling Mercado Central. This two-story market is a sensory overload in the best way possible. The ground floor is a kaleidoscope of color, with stalls piled high with fresh fruits, vegetables, cheeses, and meats. Upstairs, you'll find a lively food court where you can sample authentic Bolivian dishes for incredibly low prices. Don't miss the 'jugo' stalls for freshly blended fruit juices.\n\nBeyond food, the market is a place to observe daily routines and interactions. It's an excellent spot to practice your Spanish, try local specialties like 'salteñas' or a 'chorizo sandwich', and get a feel for the rhythm of the city. Be sure to try the local 'chocolates para ti' which are also sold here.",
        practicalInfo: {
        howToGetThere: "Located a few blocks from Plaza 25 de Mayo, between Calle Aniceto Arce and Calle Ravelo.",
        openingHours: "Monday - Saturday: approx. 6:30 AM - 6:30 PM; Sunday: until midday.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Cementerio General",
        description: "A cemetery might seem like a strange tourist attraction, but Sucre's General Cemetery is an astonishingly beautiful and peaceful place. It's more like a grand park, with tree-lined avenues, opulent mausoleums of Bolivia's elite, and walls of stacked crypts adorned with flowers, photos, and personal trinkets. The atmosphere is respectful and serene, not morbid.\n\nFamilies often come to tend to the graves, creating a living connection to the past. The immense scale and architectural variety make it a fascinating place for a quiet stroll. Look for the graves of former presidents and other prominent historical figures.",
        practicalInfo: {
        howToGetThere: "A 15-20 minute walk from the city center, or a short taxi ride.",
        openingHours: "Daily, 8:00 AM - 5:30 PM.",
        cost: "Approx. 5 BOB entry fee.",
        website: "N/A"
      }
      },
        {
        name: "Oratorio de San Felipe de Neri",
        description: "For the best rooftop views of Sucre's historic center, head to the Oratorio de San Felipe de Neri. This 18th-century neoclassical convent is still used as a school, but visitors are allowed access to its beautiful courtyard and, most importantly, its expansive roof terrace. From here, you can gaze out over a sea of whitewashed walls and red-tiled roofs, with the twin bell towers of the Metropolitan Cathedral framing the scene perfectly.\n\nThe bell-adorned rooftops offer an unparalleled photo opportunity and a unique perspective on the city's colonial layout. The interplay of light and shadow on the architecture, especially in the late afternoon, is simply magical. It's a must-do for any photographer or lover of beautiful cityscapes.",
        practicalInfo: {
        howToGetThere: "Located on Calle Nicolás Ortiz, just a block from Plaza 25 de Mayo.",
        openingHours: "Monday - Saturday: 2:30 PM - 6:00 PM.",
        cost: "Approx. 10 BOB.",
        website: "N/A"
      }
      },
        {
        name: "ASUR Museum of Indigenous Art",
        description: "Located near the Recoleta viewpoint, the ASUR Museum provides a deep dive into the rich textile traditions of the indigenous Jalq'a and Tarabuco cultures. The exhibits showcase stunningly intricate weavings, which are more than just crafts; they are complex expressions of cosmology, history, and community identity. The detail and symbolism in each piece are extraordinary.\n\nThe museum not only preserves this heritage but also supports it. You can watch weavers at work, demonstrating the painstaking techniques passed down through generations. The museum's shop sells high-quality, authentic textiles, ensuring that your purchase directly benefits the artists and their communities.",
        practicalInfo: {
        howToGetThere: "Located next to the Mirador de la Recoleta, about a 15-minute walk from the main plaza.",
        openingHours: "Monday - Friday: 8:30 AM - 12:30 PM & 2:30 PM - 6:00 PM; Saturday: 9:30 AM - 12:30 PM & 2:30 PM - 6:00 PM.",
        cost: "Approx. 22 BOB.",
        website: "http://www.asur.org.bo/"
      }
      },
        {
        name: "Tarabuco Market",
        description: "If your visit includes a Sunday, a day trip to the Tarabuco Market is essential. Located about 65 km from Sucre, this is one of the most authentic and colorful indigenous markets in South America. Members of the Yampara community, many wearing traditional clothing including helmet-like 'monteras', descend from the surrounding countryside to trade goods.\n\nYou'll find an incredible array of handmade textiles, weavings, musical instruments, and agricultural products. While it is a tourist attraction, it remains a vital local market. The highlight is witnessing the 'Pujllay' ceremony on certain dates, a vibrant festival celebrating a local victory over the Spanish. It's a noisy, chaotic, and utterly fascinating cultural experience.",
        practicalInfo: {
        howToGetThere: "Buses and shared taxis ('trufis') leave from the ex-terminal on Avenida de las Américas in Sucre. The trip takes about 1.5 hours. Tour agencies also offer guided trips.",
        openingHours: "Sundays only, from early morning until mid-afternoon.",
        cost: "Free to enter. Transportation costs approx. 15-20 BOB each way by public bus.",
        website: "N/A"
      }
      },
        {
        name: "Castillo de la Glorieta",
        description: "A short ride from Sucre lies one of Bolivia's most eccentric and surprising buildings: the Castillo de la Glorieta. This fairy-tale castle, built in the late 19th century for Prince Francisco Argandoña and his wife, is a whimsical mash-up of architectural styles, including Moorish, Gothic, and Russian Byzantine. Though now a bit faded and under restoration, its pink towers and unique design make it a bizarrely charming sight.\n\nThe story of the prince and princess, who were dedicated philanthropists and even housed orphans in the castle, adds to its allure. Wander the grounds, explore the different wings, and marvel at this peculiar piece of Bolivian history standing proudly in the countryside.",
        practicalInfo: {
        howToGetThere: "Located 5 km south of Sucre on the road to Potosí. Take a local bus (line 4) or a taxi.",
        openingHours: "Tuesday - Sunday: 9:00 AM - 4:30 PM.",
        cost: "Approx. 20 BOB.",
        website: "N/A"
      }
      },
        {
        name: "Metropolitan Cathedral of Sucre",
        description: "Dominating the southeastern side of Plaza 25 de Mayo, the Metropolitan Cathedral is a stunning blend of Renaissance and Baroque architecture, built between the mid-16th and early 18th centuries. Its grand facade is impressive, but the real treasures are inside. The interior is lavishly decorated with gold leaf, silver altars, and masterful colonial paintings.\n\nAttached to the cathedral is the 'Museo de la Catedral', which houses one of South America's most important collections of religious artifacts. The highlight is the Virgin of Guadalupe, a portrait of the Virgin Mary adorned with an astonishing amount of gold, pearls, diamonds, and emeralds donated by the faithful over centuries. It's a dazzling display of faith and wealth.",
        practicalInfo: {
        howToGetThere: "Located on the corner of Plaza 25 de Mayo.",
        openingHours: "Cathedral: Varies, generally open for mass. Museum: Monday - Friday 10:00 AM - 12:00 PM & 3:00 PM - 5:00 PM; Saturday 10:00 AM - 12:00 PM.",
        cost: "Cathedral is free to enter. Museum costs approx. 20 BOB.",
        website: "N/A"
      }
      },
        {
        name: "Museo del Tesoro (Treasure Museum)",
        description: "Bolivia is rich in mineral wealth, and the Museo del Tesoro offers a fascinating and glittering insight into this world. Located beneath a jewelry store, this well-curated museum explores the country's history of mining and gemology. You'll learn about the processes of mining, cutting, and polishing precious metals and stones like silver, gold, and the unique 'Bolivianita' (a bicolored amethyst-citrine gemstone found only in Bolivia).\n\nThe exhibits are modern and interactive, taking you through replica mines and showcasing incredible raw and polished specimens. It's a surprisingly engaging museum that combines science, history, and art, culminating in a beautiful jewelry shop where you can purchase high-quality pieces.",
        practicalInfo: {
        howToGetThere: "Located just off Plaza 25 de Mayo.",
        openingHours: "Monday - Friday: 9:00 AM - 12:30 PM & 2:30 PM - 7:00 PM; Saturday: 9:30 AM - 12:30 PM.",
        cost: "Approx. 25 BOB.",
        website: "http://www.museodeltesoro.com.bo/"
      }
      },
        {
        name: "Hike the Cordillera de los Frailes",
        description: "For adventurous travelers, the dramatic landscapes of the Cordillera de los Frailes surrounding Sucre offer fantastic hiking opportunities. The most famous trek is the multi-day hike along a pre-Columbian Inca trail, which winds from the outskirts of Sucre to the village of Potolo, passing through remote villages and offering spectacular mountain scenery. This trek gives you a chance to see the otherworldly Maragua Crater, a multi-colored geological formation.\n\nShorter day hikes are also possible. You can hike from Chataquila to Chaunaca, a mostly downhill walk on an Inca path with stunning views. Several reputable tour agencies in Sucre organize guided treks, which is highly recommended due to the remote nature of the trails. It's a great way to experience the rugged beauty of the Bolivian Andes.",
        practicalInfo: {
        howToGetThere: "Tour agencies in Sucre provide transport for guided treks. For independent hikes, you'll need to arrange a taxi or bus to the trailhead.",
        openingHours: "24/7, but best done during daylight hours with a guide.",
        cost: "Varies widely. Day tours can be around 200-300 BOB, while multi-day treks cost significantly more.",
        website: "N/A, check local tour operators like Condor Trekkers."
      }
      },
        {
        name: "Convento de Santa Clara",
        description: "Founded in 1639, the Convento de Santa Clara is another of Sucre's significant religious and artistic institutions. The attached museum is a treasure trove of colonial art, particularly the works of painter Melchor Pérez de Holguín, one of the most important artists of the Andean Baroque style. The collection includes magnificent canvases, intricate silverwork, and a famously ornate pipe organ.\n\nThe convent itself has a quiet, contemplative atmosphere. Visiting the museum provides insight into the cloistered life of the nuns and the immense artistic wealth accumulated by the church during the colonial period. It's a must-see for art history enthusiasts.",
        practicalInfo: {
        howToGetThere: "Located on Calle Calvo, a few blocks from the main plaza.",
        openingHours: "Monday - Friday: 9:00 AM - 12:00 PM & 3:00 PM - 5:30 PM; Saturday: 9:30 AM - 12:00 PM.",
        cost: "Approx. 15 BOB.",
        website: "N/A"
      }
      },
        {
        name: "Eat Chocolate and Local Cuisine",
        description: "Sucre is known as the chocolate capital of Bolivia, and indulging in this local delicacy is a must-do. The most famous brand is 'Chocolates Para Ti', which has several shops around the city. You can sample a wide variety of chocolates, including some with unique local fillings like coca or chili. It's the perfect souvenir to take home.\n\nBeyond chocolate, Sucre's culinary scene is fantastic. Be sure to try 'Salteñas', a baked, juicy empanada that's a classic Bolivian morning snack. Also, seek out 'Mondongo', a hearty stew of pork, corn, and potatoes in a spicy red chili sauce, which is a local specialty. The Central Market's food court is a great place to find authentic and affordable local dishes.",
        practicalInfo: {
        howToGetThere: "'Chocolates Para Ti' shops are located near the main plaza. The best food can be found at the Mercado Central, local 'pensiones', and restaurants throughout the city.",
        openingHours: "Varies by establishment.",
        cost: "Chocolates are affordable. A full meal can cost anywhere from 20 BOB at the market to 100 BOB at a nice restaurant.",
        website: "https://www.chocolatesparati.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Sucre's historic center is compact and best explored on foot. For longer distances, such as to the bus terminal or Parque Cretácico, taxis are abundant and affordable (agree on a fare before getting in). Local buses, known as 'micros', are the cheapest option and cover extensive routes, though they can be crowded.",
        whereToStay: "The best area to stay is the historic center (Casco Viejo), which puts you within walking distance of most major attractions, restaurants, and cafes. Recommendations include: Parador Santa Maria la Real (luxury), Mi Pueblo Samary Hotel Boutique (mid-range, charming), and The Beehive (budget-friendly hostel with a social atmosphere).",
        bestTimeToVisit: "The best time to visit Sucre is during the dry season, from April to October. During these months, you can expect clear blue skies, pleasant and mild daytime temperatures, and cool, crisp nights. The shoulder months of April, May, September, and October are particularly lovely. The rainy season (November to March) brings more frequent afternoon showers but also greener landscapes.",
        suggestedItinerary: "A simple 3-day itinerary plan:\nDay 1: Historic Core. Start at Plaza 25 de Mayo, visit Casa de la Libertad and the Metropolitan Cathedral. In the afternoon, climb to the rooftop of Oratorio de San Felipe de Neri for photos, then explore the Mercado Central.\nDay 2: Views & Culture. Walk up to Mirador de la Recoleta for morning views. Visit the ASUR Museum next door. In the afternoon, take a taxi to the Cementerio General, followed by the Parque Cretácico to catch a guided tour.\nDay 3: Day Trip. If it's a Sunday, take a trip to the famous Tarabuco Market. If not, take a short trip to see the quirky Castillo de la Glorieta, followed by a short, guided hike on an Inca trail in the nearby Cordillera de los Frailes."
      }}
      faqs={[{
          question: "Is Sucre expensive?",
          answer: "No, Sucre is one of the most affordable travel destinations in South America. Accommodation is cheap, with dorm beds starting around 50-70 BOB and private rooms in boutique hotels available for 250-400 BOB. A set lunch ('almuerzo') can be found for as little as 15-25 BOB, and a taxi ride within the city rarely costs more than 10-15 BOB. Entrance fees to museums and attractions are also very low."
        },
        {
          question: "How many days do you need in Sucre?",
          answer: "Three to four days is the ideal amount of time for Sucre. This allows you to explore the historic center at a relaxed pace for two days, covering the main museums, churches, and viewpoints. It also gives you a full day for a day trip, such as to the Tarabuco Market on a Sunday or for a hike in the surrounding mountains."
        },
        {
          question: "Is Sucre safe?",
          answer: "Sucre is considered one of the safest cities in Bolivia. The general atmosphere is relaxed and friendly. However, like any city, it's wise to take standard precautions. Be aware of your belongings in crowded areas like the Mercado Central and the bus terminal to avoid petty theft. Avoid walking alone in unlit areas late at night. Overall, by using common sense, travelers will find Sucre to be a very safe and welcoming place."
        },
        {
          question: "What is Sucre famous for?",
          answer: "Sucre is famous for several key things. It is the constitutional capital of Bolivia and a UNESCO World Heritage site celebrated for its stunning, well-preserved colonial architecture, which has earned it the nickname 'The White City of the Americas'. It's also famous for being the location of the world's largest collection of dinosaur footprints at Parque Cretácico. Additionally, Sucre is a center for rich indigenous culture, particularly the intricate textiles of the Jalq'a and Tarabuco peoples, and is known as Bolivia's chocolate capital."
        }
      ]}
    />
  );
};