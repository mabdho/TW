import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Oaxaca: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Oaxaca, Mexico (2025 Guide)"}
      description={"Welcome to Oaxaca, the vibrant heart of southern Mexico, where ancient history and rich culinary traditions converge on colorful, cobblestoned streets. A UNESCO World Heritage site, the city is a feast for the senses, bursting with the earthy aroma of mole, the smoky allure of mezcal, and the intricate beauty of indigenous crafts. From the breathtaking Zapotec ruins of Monte Albán perched on a nearby hilltop to the bustling energy of its local markets, Oaxaca offers an authentic and unforgettable cultural immersion. Whether you're exploring baroque churches, learning the art of textile weaving, or simply savoring a tlayuda in the Zócalo, you'll find that the list of the best things to do in Oaxaca is as deep and flavorful as its famous sauce. This guide will navigate you through the must-see sights and hidden gems that make Oaxaca a truly magical destination."}
      imageUrl={""}
      highlights={["Monte Albán Archaeological Site",
        "Hierve el Agua",
        "Templo de Santo Domingo de Guzmán",
        "Explore a Mezcal Distillery",
        "Oaxaca's Zócalo (Plaza de la Constitución)"]}
      galleryImages={[
        { url: "", alt: "Oaxaca landmark 1", caption: "Oaxaca landmark 1 - placeholder" },
        { url: "", alt: "Oaxaca landmark 2", caption: "Oaxaca landmark 2 - placeholder" },
        { url: "", alt: "Oaxaca landmark 3", caption: "Oaxaca landmark 3 - placeholder" },
        { url: "", alt: "Oaxaca landmark 4", caption: "Oaxaca landmark 4 - placeholder" },
        { url: "", alt: "Oaxaca landmark 5", caption: "Oaxaca landmark 5 - placeholder" },
        { url: "", alt: "Oaxaca landmark 6", caption: "Oaxaca landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Monte Albán Archaeological Site",
        description: "Perched on a flattened mountaintop overlooking the Oaxaca Valley, Monte Albán is one of the most significant archaeological sites in Mesoamerica. For over 1,500 years, this was the sacred capital of the Zapotec civilization. As you wander through the Gran Plaza, you can explore ancient pyramids, temples, a ball court, and mysterious tombs. The panoramic views of the surrounding valleys are as breathtaking as the history itself.\n\nThe site's most intriguing features include the 'Danzantes' (Dancers), a series of stone slabs with carved figures in contorted poses, and the incredible engineering feat of leveling the entire mountaintop. Visiting early in the morning allows you to experience the ruins in the soft light with fewer crowds, making the ancient city feel even more majestic and serene.",
        practicalInfo: {
        howToGetThere: "Located 9 km west of Oaxaca City. Accessible via tourist shuttles (round trip), taxi, or guided tour.",
        openingHours: "Daily, 8:00 AM - 5:00 PM",
        cost: "Approximately $95 MXN",
        website: "https://www.inah.gob.mx/zonas/96-zona-arqueologica-de-monte-alban"
      }
      },
        {
        name: "Hierve el Agua",
        description: "Hierve el Agua, meaning 'the water boils,' is a stunning natural wonder featuring two large, petrified waterfalls. Formed over thousands of years by mineral-rich spring water trickling over the cliff edge, these 'cascadas' create the illusion of frozen cascades. At the top, you'll find a series of man-made and natural pools, perfect for a refreshing dip with spectacular views of the Sierra Madre mountains.\n\nThere are two main waterfalls, Cascada Chica and Cascada Grande. Visitors can hike the trails around the area to get different perspectives of the formations and the valley below. It's a popular day trip, often combined with visits to Mitla or a mezcal distillery, offering a perfect blend of natural beauty and relaxation.",
        practicalInfo: {
        howToGetThere: "About 70 km from Oaxaca City. Best reached via guided tour, colectivo from the bus station, or by renting a car.",
        openingHours: "Daily, 7:00 AM - 6:30 PM",
        cost: "Approximately $50 MXN entrance fee per person.",
        website: "N/A (Community-run site)"
      }
      },
        {
        name: "Templo de Santo Domingo de Guzmán",
        description: "This magnificent 16th-century church is the crown jewel of Oaxaca's architecture and a stunning example of Mexican Baroque. While its fortress-like exterior is imposing, the interior is a breathtaking spectacle of gilded ornamentation and intricate plasterwork. Every inch of the ceiling and walls is covered in elaborate gold leaf, sculptures, and paintings, culminating in a spectacular family tree of the Dominican order above the entrance.\n\nAdjacent to the church is the former monastery, which now houses the Museo de las Culturas de Oaxaca. The sheer opulence and detailed craftsmanship make the Templo de Santo Domingo a must-see, whether for its religious significance, historical importance, or simply its overwhelming beauty.",
        practicalInfo: {
        howToGetThere: "Located on the pedestrian-only Calle Macedonio Alcalá in the historic center. Easily walkable from most central locations.",
        openingHours: "Daily, 7:00 AM - 1:00 PM & 4:00 PM - 8:00 PM (Hours can vary)",
        cost: "Free admission to the church.",
        website: "N/A"
      }
      },
        {
        name: "Explore a Mezcal Distillery",
        description: "Oaxaca is the birthplace of mezcal, and no trip is complete without discovering the magic behind this iconic spirit. Venture out of the city to Santiago Matatlán, the 'World Capital of Mezcal,' or visit smaller artisanal 'palenques' scattered throughout the Tlacolula Valley. Here, you can witness the entire traditional process, from roasting agave hearts (piñas) in earthen pits to crushing them with a stone wheel (tahona) and distilling the fermented mash in copper stills.\n\nMost tours offer guided tastings where you can learn to appreciate the complex, smoky flavors of different mezcals, from the common Espadín agave to wild varieties like Tobalá or Tepeztate. It's a fascinating cultural and sensory experience that provides a deep appreciation for the craft.",
        practicalInfo: {
        howToGetThere: "Many distilleries are along the highway to Mitla and Hierve el Agua. Best visited via guided tour, taxi, or colectivo.",
        openingHours: "Varies by distillery; most are open daily for tours from morning to late afternoon.",
        cost: "Tours and tastings can range from free with purchase to $200-500 MXN.",
        website: "Varies by distillery (e.g., El Rey de Matatlán, Gracias a Dios)."
      }
      },
        {
        name: "Oaxaca's Zócalo (Plaza de la Constitución)",
        description: "The Zócalo is the vibrant, beating heart of Oaxaca City. Shaded by massive laurel trees, this bustling main square is framed by beautiful colonial arcades, the Government Palace, and the Oaxaca Cathedral. It's the social and cultural center of the city, where locals and tourists gather from morning until late at night.\n\nFind a seat at one of the many outdoor cafes to enjoy a coffee or a meal while listening to marimba bands, watching street performers, and soaking in the lively atmosphere. The Zócalo is constantly buzzing with activity, from vendors selling balloons and crafts to local protests and festive celebrations. It’s the perfect place to begin your exploration of Oaxaca and to return to whenever you need a break.",
        practicalInfo: {
        howToGetThere: "The central point of the historic center, easily reachable on foot.",
        openingHours: "24/7",
        cost: "Free to visit.",
        website: "N/A"
      }
      },
        {
        name: "Jardín Etnobotánico de Oaxaca",
        description: "Located in the former monastery gardens of the Santo Domingo cultural center, the Jardín Etnobotánico is a beautifully curated space showcasing the vast biodiversity of Oaxaca. The garden exclusively features plants native to the state, highlighting the deep relationship between the region's flora and its indigenous cultures. The collection is organized by ecological and cultural themes, showing how plants are used for food, medicine, textiles, and rituals.\n\nThe garden can only be visited on a guided tour (offered in English and Spanish), which is highly recommended as the guides provide fascinating context about the plants' history and uses. The design, which incorporates artistic elements and remnants of the old monastery, makes it one of the most beautiful botanical gardens in the world.",
        practicalInfo: {
        howToGetThere: "Entrance is next to the Templo de Santo Domingo de Guzmán.",
        openingHours: "Monday-Saturday. English tours typically at 11:00 AM. Check schedule as it can change.",
        cost: "Tour costs approximately $100 MXN.",
        website: "https://www.jardinoaxaca.mx/"
      }
      },
        {
        name: "Mercado Benito Juárez & Mercado 20 de Noviembre",
        description: "For a true slice of Oaxacan life, dive into these two adjacent markets just south of the Zócalo. The Mercado Benito Juárez is a sensory overload in the best way possible, with stalls piled high with fresh produce, local cheeses (quesillo), chapulines (grasshoppers), mole pastes, and colorful crafts. It’s the perfect place to shop for souvenirs and ingredients.\n\nConnected to it is the Mercado 20 de Noviembre, the city's main food market. The highlight here is the famous 'Pasillo de Humo' (Smoke Alley), where vendors grill various cuts of tasajo (beef) and chorizo to order. You choose your meat, and it's served with tortillas, salsas, and radishes for a quintessential Oaxacan meal.",
        practicalInfo: {
        howToGetThere: "Located one block south of the Zócalo.",
        openingHours: "Daily, approximately 7:00 AM - 9:00 PM.",
        cost: "Free to enter; pay for what you eat or buy.",
        website: "N/A"
      }
      },
        {
        name: "Teotitlán del Valle",
        description: "This famous Zapotec village, nestled in the Tlacolula Valley, is renowned for its centuries-old tradition of hand-woven textiles, particularly rugs and tapestries. The weavers of Teotitlán use traditional pedal looms and create their own natural dyes from sources like the cochineal insect (for red), indigo (for blue), and marigold flowers (for yellow).\n\nMany family-run workshops (talleres) are open to visitors, where you can watch incredible demonstrations of the entire process, from spinning the wool to dyeing the yarn and weaving intricate Zapotec and modern designs. It's a wonderful opportunity to purchase a high-quality, authentic piece of art directly from the artisan who created it.",
        practicalInfo: {
        howToGetThere: "About 30 km from Oaxaca. Reachable by colectivo, taxi, or as part of a Tlacolula Valley tour.",
        openingHours: "Workshops are typically open daily during business hours.",
        cost: "Free to visit workshops.",
        website: "N/A"
      }
      },
        {
        name: "Museo de las Culturas de Oaxaca",
        description: "Housed within the stunning Santo Domingo cultural complex, this museum is one of the best regional museums in Mexico. It provides a comprehensive journey through the history and anthropology of Oaxaca, from pre-Hispanic times to the present day. The exhibits are thoughtfully arranged within the beautiful, cloistered rooms of the former monastery.\n\nThe museum's most prized possession is the 'Treasure of Tomb 7,' a spectacular collection of gold, silver, jade, and turquoise artifacts discovered at Monte Albán. The artifacts provide incredible insight into the wealth and craftsmanship of the Mixtec civilization. Don't miss the library and the window at the end of the main hall, which offers a perfect view of the Ethnobotanical Garden.",
        practicalInfo: {
        howToGetThere: "Inside the cultural center adjacent to the Templo de Santo Domingo de Guzmán.",
        openingHours: "Tuesday-Sunday, 10:00 AM - 6:00 PM.",
        cost: "Approximately $90 MXN.",
        website: "https://www.inah.gob.mx/museos/210-museo-de-las-culturas-de-oaxaca-centro-cultural-santo-domingo"
      }
      },
        {
        name: "Andador Turístico (Calle Macedonio Alcalá)",
        description: "This vibrant, pedestrian-only street is the main artery of Oaxaca's historic center, connecting the Zócalo to the Templo de Santo Domingo. Lined with colorful colonial buildings, the Andador Turístico is a delightful place for a stroll day or night. The street is filled with art galleries, high-end craft shops, boutique hotels, cozy cafes, and trendy restaurants.\n\nAs you walk, you'll encounter street musicians, artists selling their work, and the occasional 'calenda' (a festive parade with giant puppets). It's the perfect place for window shopping, people-watching, and absorbing the city's artistic and lively spirit. The entire street is beautifully maintained and offers endless photo opportunities.",
        practicalInfo: {
        howToGetThere: "Starts just north of the Zócalo, leading to Santo Domingo. Walkable.",
        openingHours: "24/7",
        cost: "Free to walk.",
        website: "N/A"
      }
      },
        {
        name: "Take a Oaxacan Cooking Class",
        description: "Oaxaca is Mexico's culinary capital, and taking a cooking class is an immersive way to dive into its famous cuisine. Classes typically begin with a guided tour of a local market to select fresh, seasonal ingredients like chiles, herbs, and vegetables. Under the guidance of a local chef, you'll learn the secrets behind complex dishes like mole, as well as staples like tortillas, salsas, and memelas.\n\nThis hands-on experience not only teaches you practical skills but also provides a deep cultural context for Oaxacan food. The best part is sitting down at the end to enjoy the multi-course meal you helped create, often paired with mezcal. It's a delicious and memorable highlight for any food lover.",
        practicalInfo: {
        howToGetThere: "Numerous schools are located in the city center or in nearby villages. Popular options include Seasons of My Heart, La Cocina Oaxaqueña, and El Sabor Zapoteco.",
        openingHours: "Classes typically run for 4-6 hours, offered in the morning or afternoon. Booking in advance is essential.",
        cost: "Approximately $75 - $100 USD per person.",
        website: "Varies by school."
      }
      },
        {
        name: "Mitla Archaeological Site",
        description: "While Monte Albán was the political center of the Zapotecs, Mitla was their primary religious center. What makes Mitla unique and utterly captivating is its intricate and perfectly preserved geometric mosaic fretwork. The walls of the palaces are covered in thousands of polished stones that fit together without mortar, creating complex patterns that are found nowhere else in Mexico.\n\nMitla feels more intimate than Monte Albán, with a focus on finely decorated palaces rather than towering pyramids. The site is divided into several groups of buildings, with the 'Grupo de las Columnas' being the most impressive. The level of craftsmanship is astounding and offers a different perspective on the region's pre-Hispanic architectural genius.",
        practicalInfo: {
        howToGetThere: "Located 44 km from Oaxaca City, often visited with Hierve el Agua. Accessible via tour, colectivo, or taxi.",
        openingHours: "Wednesday-Sunday, 10:00 AM - 4:00 PM (check hours, subject to change).",
        cost: "Approximately $90 MXN.",
        website: "https://www.inah.gob.mx/zonas/31-zona-arqueologica-de-mitla"
      }
      },
        {
        name: "Árbol del Tule",
        description: "In the quiet town of Santa María del Tule, just outside Oaxaca City, stands a living monument: the Tule Tree. This massive Montezuma cypress has the stoutest tree trunk in the world, with a circumference of over 42 meters (137 feet). It is so wide that it was originally thought to be multiple trees, but DNA tests have confirmed it is a single, colossal individual.\n\nEstimated to be over 1,500 years old, the tree's gnarled trunk and branches are said to contain figures of animals and people, which local guides will happily point out to you. The tree stands in a peaceful churchyard, and while the visit is quick, the sheer scale and age of this natural wonder are awe-inspiring.",
        practicalInfo: {
        howToGetThere: "Located 10 km east of Oaxaca. Easy to reach by bus, colectivo, taxi, or as part of a tour to Mitla/Hierve el Agua.",
        openingHours: "Daily, 8:00 AM - 8:00 PM.",
        cost: "A small fee of approximately $20 MXN to enter the churchyard.",
        website: "N/A"
      }
      },
        {
        name: "Barrio de Jalatlaco",
        description: "Step back in time with a stroll through the charming neighborhood of Jalatlaco. Located just east of the historic center, this barrio is known for its quiet, cobblestoned streets, brightly colored houses, and blooming bougainvillea. It has a distinctly local and artistic vibe, with small, independent coffee shops, art galleries, and boutique hotels tucked away on its picturesque lanes.\n\nJalatlaco feels like a small village within the city, offering a peaceful escape from the bustle of the Zócalo. It's incredibly photogenic and a perfect place for a relaxed morning or afternoon walk. The 17th-century Templo de San Matías Jalatlaco is the neighborhood's historic centerpiece.",
        practicalInfo: {
        howToGetThere: "A 15-20 minute walk east from the Santo Domingo church.",
        openingHours: "24/7",
        cost: "Free to explore.",
        website: "N/A"
      }
      },
        {
        name: "Museo Textil de Oaxaca (MTO)",
        description: "Housed in a beautifully restored 18th-century mansion, the Museo Textil de Oaxaca (MTO) is dedicated to celebrating the rich and diverse textile traditions of Oaxaca and the world. The museum showcases stunning examples of weaving, embroidery, and dyeing techniques through its thoughtfully curated rotating exhibits. It highlights both historical and contemporary pieces, providing context on the symbolism, materials, and processes involved.\n\nThe museum is small but impactful, offering a deep appreciation for the artistry and cultural significance of textiles in Oaxacan life. It also has a library, a conservation center, and a wonderful gift shop selling high-quality, ethically sourced textiles from local artisans. It's a must for anyone interested in art, craft, and culture.",
        practicalInfo: {
        howToGetThere: "Located in the historic center, a short walk from the Zócalo at Hidalgo 917.",
        openingHours: "Monday-Saturday 11:00 AM - 6:00 PM, Sunday 11:00 AM - 5:00 PM.",
        cost: "Free admission.",
        website: "https://www.museotextildeoaxaca.org/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Oaxaca's historic center is very walkable, and strolling is the best way to explore its streets. For longer distances within the city, taxis are plentiful and affordable (agree on the fare beforehand). Colectivos (shared taxis) run on fixed routes to nearby towns and are a very cheap option for day trips. For sites like Monte Albán, Hierve el Agua, and mezcal distilleries, booking a guided tour or a private driver is often the most convenient option.",
        whereToStay: "The best area to stay is the Centro Histórico (Historic Center), which puts you within walking distance of most major attractions, restaurants, and shops. For luxury, consider Quinta Real Oaxaca or Hotel Escondido Oaxaca. Boutique options like Pug Seal Oaxaca or Grana B&B are excellent. For budget travelers, the areas of Jalatlaco and Xochimilco offer charming guesthouses and hostels.",
        bestTimeToVisit: "The best time to visit Oaxaca is during the dry season, from October to April, when the weather is pleasant and sunny. The shoulder months of April-May and September-October offer a good balance of nice weather and fewer crowds. Oaxaca is famous for its festivals: The Guelaguetza (July) is a spectacular display of indigenous dance but brings large crowds and high prices. Day of the Dead (late October/early November) is another magical but busy time to experience the city's rich traditions.",
        suggestedItinerary: "Day 1: Explore the Centro Histórico. Start at the Zócalo, visit the Templo de Santo Domingo and the adjacent Ethnobotanical Garden, then stroll down the Andador Turístico. Explore the Benito Juárez and 20 de Noviembre markets for lunch. \nDay 2: Ancient History. Take a morning trip to the magnificent Monte Albán ruins. In the afternoon, explore the Museo de las Culturas de Oaxaca back in the city. \nDay 3: Valley Wonders & Mezcal. Take a day trip to see the petrified waterfalls of Hierve el Agua, the mosaic-covered ruins of Mitla, and visit an artisanal mezcal distillery for a tour and tasting."
      }}
      faqs={[{
          question: "Is Oaxaca expensive?",
          answer: "Oaxaca is generally considered one of the more affordable tourist destinations in Mexico. Street food and market meals can be found for a few dollars, while a meal at a mid-range restaurant is very reasonable. Accommodation offers a wide range of prices, with budget-friendly hostels and guesthouses readily available. The main expenses will be guided tours and purchasing high-quality handicrafts. Compared to destinations like Cancun or Los Cabos, Oaxaca offers excellent value for money."
        },
        {
          question: "How many days do you need in Oaxaca?",
          answer: "A minimum of 4-5 days is recommended to fully appreciate Oaxaca. This allows for two days to explore Oaxaca City's historic center, museums, and markets at a relaxed pace, and two to three days for day trips to key sites like Monte Albán, Hierve el Agua, Mitla, and the artisan villages. If you are a foodie or want to explore more remote areas, a week would be ideal."
        },
        {
          question: "Is Oaxaca safe?",
          answer: "Oaxaca is widely regarded as one of the safest states in Mexico for tourists. The city center is well-policed and generally very safe to walk around, even at night. However, like in any city, it's important to use common sense. Stick to well-lit areas after dark, be aware of your surroundings, and keep your valuables secure. Standard travel precautions are sufficient for a safe and enjoyable trip."
        },
        {
          question: "What is Oaxaca famous for?",
          answer: "Oaxaca is famous for a holy trinity of culture: food, mezcal, and crafts. It is known as the 'Land of the Seven Moles,' with its complex and delicious sauces being a culinary highlight. It is the official home of mezcal, the smoky agave spirit. The state is also renowned for its vibrant indigenous cultures, particularly the Zapotec and Mixtec peoples, who produce world-class handicrafts like alebrijes (fantastical carved creatures), black pottery, and handwoven textiles."
        }
      ]}
    />
  );
};