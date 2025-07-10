import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Marseille: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Marseille, France (2025 Guide)"}
      description={"As France's oldest city, Marseille is a vibrant tapestry of history, culture, and coastal grit. This sun-drenched Mediterranean port pulses with a unique energy, where ancient Greek foundations meet bold modern architecture. From the bustling quays of the Old Port to the labyrinthine streets of Le Panier, the city offers a sensory feast. Its stunning natural landscapes, like the dramatic Calanques, provide a breathtaking escape just moments from the urban core. Whether you're savoring a traditional bouillabaisse, exploring a world-class museum, or simply soaking up the atmosphere in a lively square, you'll find that the best things to do in Marseille reveal a city with a fierce and captivating soul. This guide will navigate you through its most unforgettable experiences, ensuring a trip you won't soon forget."}
      highlights={["Vieux-Port (Old Port)",
        "Basilique Notre-Dame de la Garde",
        "Parc National des Calanques",
        "Le Panier (Old Town)",
        "Mucem - Museum of European and Mediterranean Civilisations"]}
      galleryImages={[
        { url: "", alt: "Marseille landmark 1", caption: "Marseille landmark 1 - placeholder" },
        { url: "", alt: "Marseille landmark 2", caption: "Marseille landmark 2 - placeholder" },
        { url: "", alt: "Marseille landmark 3", caption: "Marseille landmark 3 - placeholder" },
        { url: "", alt: "Marseille landmark 4", caption: "Marseille landmark 4 - placeholder" },
        { url: "", alt: "Marseille landmark 5", caption: "Marseille landmark 5 - placeholder" },
        { url: "", alt: "Marseille landmark 6", caption: "Marseille landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Vieux-Port (Old Port)",
        description: "The Vieux-Port is the historic and cultural heart of Marseille, where the city was founded by Greek sailors around 600 BC. This bustling natural harbor is the soul of the city, lined with restaurants, cafes, and boats of all sizes, from traditional fishing 'pointus' to luxurious yachts. In the morning, you can witness the lively fish market where local fishermen sell their catch directly from the quay. The port is watched over by two historic forts, Saint-Nicolas and Saint-Jean, guarding its entrance.\n\nThe Ombrière, a giant mirrored sunshade designed by Norman Foster, provides a fantastic modern focal point and a great spot for photos. The Vieux-Port is not just a marina; it's a living, breathing part of Marseille life, perfect for a leisurely stroll, a pastis at a terrace cafe, or as a departure point for boat trips to the surrounding islands and Calanques.",
        practicalInfo: {
        howToGetThere: "Located in the city center. Access via Metro Line 1 (Vieux-Port station) or numerous bus lines.",
        openingHours: "Open 24/7. Fish market is daily from approx. 8:00 AM to 1:00 PM.",
        cost: "Free to visit.",
        website: "https://www.marseille-tourisme.com/en/what-to-do/heritage-culture/sites-to-visit/vieux-port/"
      }
      },
        {
        name: "Basilique Notre-Dame de la Garde",
        description: "Perched atop the highest point in Marseille, the Basilique Notre-Dame de la Garde, affectionately known as 'La Bonne Mère' (The Good Mother), watches over the city's inhabitants. This magnificent Romano-Byzantine basilica is an iconic symbol of Marseille, crowned by a gleaming golden statue of the Virgin and Child. The journey to the top is rewarded with the most breathtaking 360-degree panoramic views of the city, the sea, and the surrounding islands.\n\nInside, the basilica is just as stunning, adorned with intricate mosaics, colored marble, and countless ex-votos—small plaques and paintings left by sailors and families in thanks for answered prayers and safe returns from the sea. The atmosphere is one of peace and reverence, offering a serene escape from the bustling city below. It's a must-visit for its spiritual significance, stunning architecture, and unparalleled views.",
        practicalInfo: {
        howToGetThere: "Take Bus 60 from the Vieux-Port or the Tourist Train. It's a steep but rewarding walk.",
        openingHours: "Daily, 7:00 AM to 6:15 PM. Hours may vary.",
        cost: "Free to enter. A fee applies for the tourist train.",
        website: "https://www.notredamedelagarde.com/"
      }
      },
        {
        name: "Parc National des Calanques",
        description: "A natural wonder on the edge of the city, the Calanques National Park is a dramatic stretch of coastline featuring steep-walled limestone inlets, hidden beaches, and stunningly clear turquoise water. These fjord-like coves are carved into the white cliffs between Marseille and the town of Cassis, offering a spectacular landscape for outdoor enthusiasts. The park is a haven for hiking, rock climbing, kayaking, and swimming.\n\nYou can explore this protected area in several ways: by taking a guided boat tour from the Vieux-Port, which offers fantastic views from the water; by renting a kayak to paddle into the coves at your own pace; or by hiking one of the many well-marked trails. Popular Calanques include Sormiou, Morgiou, and En-Vau, each offering its own unique beauty. It's an essential Marseille experience, showcasing the raw, wild beauty of the Mediterranean coast.",
        practicalInfo: {
        howToGetThere: "Access by boat from Vieux-Port, or by bus (e.g., Line B1 to Luminy for Calanque de Sugiton) followed by hiking. Access can be restricted in summer due to fire risk.",
        openingHours: "Open 24/7, but check official site for fire risk closures (usually June-September).",
        cost: "Free to enter the park. Boat tours and rentals have associated costs.",
        website: "https://www.calanques-parcnational.fr/en"
      }
      },
        {
        name: "Le Panier (Old Town)",
        description: "Le Panier is the oldest district in Marseille and exudes an irresistible charm. Located on a hillside just north of the Vieux-Port, this historic neighborhood feels like a village within the city. Its narrow, winding streets are a delight to explore, opening onto sun-drenched squares filled with cafes and artisan workshops. The colorful facades, flower-filled balconies, and vibrant street art create a picturesque setting.\n\nHistorically a working-class area for immigrants, Le Panier has retained a strong sense of identity and community. Today, it's home to independent boutiques, ceramicists, soap makers (Savon de Marseille), and art galleries. Don't miss the Vieille Charité, a stunning 17th-century almshouse that now houses museums and cultural exhibitions. Getting lost in Le Panier's labyrinthine alleys is one of the most rewarding experiences in Marseille.",
        practicalInfo: {
        howToGetThere: "A short walk uphill from the Vieux-Port and the Cathédrale de la Major. The nearest tram stop is Sadi Carnot (T2/T3).",
        openingHours: "Always open to walk through. Shop and museum hours vary.",
        cost: "Free to explore.",
        website: "https://www.marseille-tourisme.com/en/what-to-do/heritage-culture/neighbourhoods/le-panier/"
      }
      },
        {
        name: "Mucem - Museum of European and Mediterranean Civilisations",
        description: "A masterpiece of modern architecture, the Mucem is a striking landmark on Marseille's waterfront. Opened in 2013, the museum is dedicated to the history, culture, and anthropology of the Mediterranean world. The main building, designed by Rudy Ricciotti, is a stunning glass cube wrapped in a delicate black concrete lattice, connected by a dramatic footbridge to the historic Fort Saint-Jean.\n\nBeyond its architectural beauty, the Mucem hosts fascinating exhibitions that explore the complex and diverse heritage of the Mediterranean basin. Even if you don't visit the exhibitions, you can access the building's rooftop terrace and footbridges for free. The walk across the bridge to Fort Saint-Jean provides incredible views of the sea, the port, and the Cathédrale de la Major, making it a cultural and visual highlight.",
        practicalInfo: {
        howToGetThere: "Located at the entrance to the Vieux-Port. Accessible via Bus 60, 82, or Metro Line 1 (Vieux-Port).",
        openingHours: "Daily except Tuesdays. 10:00 AM to 7:00 PM (hours vary seasonally).",
        cost: "€11 for exhibitions. Free access to outdoor areas, rooftop, and footbridges.",
        website: "https://www.mucem.org/en"
      }
      },
        {
        name: "Château d'If",
        description: "Immortalized by Alexandre Dumas in his novel 'The Count of Monte Cristo', the Château d'If is a formidable island fortress located a short boat ride from the Vieux-Port. Built in the 16th century by King François I, it was originally intended to defend the city but was soon converted into a fearsome prison for political and religious dissidents. The rocky, isolated setting made escape virtually impossible.\n\nThe fortress remains largely unchanged, and visitors can explore the stark cells, including the one fictionally attributed to the novel's hero, Edmond Dantès. The journey to the island offers spectacular views back towards the Marseille skyline, and the castle itself provides a fascinating glimpse into a grim period of history, blended with literary legend.",
        practicalInfo: {
        howToGetThere: "Regular ferry services (navettes) depart from the Vieux-Port. The crossing takes about 20 minutes.",
        openingHours: "Daily except Mondays (seasonal closures may apply). Check website for ferry times.",
        cost: "€6 for entry, plus the cost of the ferry ticket (around €11).",
        website: "http://www.chateau-if.fr/en/"
      }
      },
        {
        name: "La Corniche Kennedy",
        description: "La Corniche Kennedy is a magnificent coastal road that stretches for several kilometers south from the city center, offering breathtaking views of the Mediterranean Sea and the Frioul islands. It's a perfect route for a scenic drive, a bike ride, or a long, invigorating walk. The road is named in honor of US President John F. Kennedy, following his assassination.\n\nAlong the way, you'll find the iconic 'Banc de la Corniche', reputedly the longest bench in the world, offering plenty of spots to sit and admire the view. The route passes by several small coves and beaches, including the Plage des Catalans and Plage du Prophète, popular with locals for a quick dip. The Corniche is Marseille's beautiful balcony over the sea, connecting the city to its coastal splendor.",
        practicalInfo: {
        howToGetThere: "Take Bus 83 from the Vieux-Port, which runs the length of the Corniche.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.marseille-tourisme.com/en/what-to-do/see-the-sea/on-the-coast/corniche-kennedy/"
      }
      },
        {
        name: "Cours Julien",
        description: "If you're looking for Marseille's bohemian and artistic heart, head to Cours Julien. This vibrant, alternative neighborhood is a canvas for the city's best street art, with murals and graffiti covering nearly every wall. The area is centered around a large pedestrian square with a fountain, surrounded by independent bookshops, vintage clothing stores, artists' studios, and concert venues.\n\nBy day, it's a great place to browse unique shops and enjoy a coffee. By night, 'Le Cours Ju' comes alive with a buzzing energy as locals flock to its trendy bars, diverse restaurants (offering everything from Middle Eastern to vegan cuisine), and live music spots. It offers a completely different vibe from the historic port, showcasing Marseille's youthful, creative, and counter-cultural side.",
        practicalInfo: {
        howToGetThere: "Metro Line 2 (Notre-Dame du Mont station). A 10-15 minute walk from the Vieux-Port.",
        openingHours: "Area is always accessible. Shops and restaurants have their own hours.",
        cost: "Free to explore.",
        website: "https://www.marseille-tourisme.com/en/what-to-do/heritage-culture/neighbourhoods/cours-julien/"
      }
      },
        {
        name: "Cathédrale de la Major",
        description: "The Cathédrale de la Major is a monumental sight, standing proudly between Le Panier and the modern Joliette district. Its sheer scale is staggering, making it one of the largest cathedrals built in France since the Middle Ages. Constructed in the 19th century in a spectacular Byzantine-Roman style, its facade features alternating bands of green and white stone, reminiscent of Italian cathedrals.\n\nInside, the vast space is equally impressive, with grand arches, beautiful mosaics, and ornate decorations. The cathedral is actually composed of two churches: the 'new' 19th-century one and the 'old' Major, a much smaller Romanesque church from the 12th century that still stands beside it. Its location by the sea, near the Mucem, makes it a key part of Marseille's stunning waterfront skyline.",
        practicalInfo: {
        howToGetThere: "Located a short walk from the Mucem and Le Panier. Nearest metro is Joliette (Line 2).",
        openingHours: "Daily except Tuesdays, 10:00 AM to 6:30 PM (hours vary seasonally).",
        cost: "Free.",
        website: "https://marseille.catholique.fr/La-cathedrale-de-la-Major"
      }
      },
        {
        name: "Palais Longchamp",
        description: "The Palais Longchamp is a magnificent monument that is more than just a palace; it's a celebration of water. Built in the 19th century to commemorate the completion of the Canal de Marseille, which brought much-needed water to the city, the palace is an opulent structure featuring a grand central colonnade, majestic fountains, and dramatic sculptures. It's a breathtaking piece of Second Empire architecture.\n\nThe palace houses two of the city's most important museums: the Musée des Beaux-Arts (Fine Arts Museum) in its left wing and the Muséum d'Histoire Naturelle (Natural History Museum) in its right wing. Behind the palace lies the Parc Longchamp, one of the few designated 'Remarkable Gardens of France', offering a tranquil green space for a relaxing walk.",
        practicalInfo: {
        howToGetThere: "Metro Line 1 (Cinq Avenues Longchamp station) or Tram T2 (Longchamp stop).",
        openingHours: "Park is open daily. Museums are open daily except Mondays, hours vary.",
        cost: "Free to visit the park and see the exterior. Museum entry fees apply.",
        website: "https://musees.marseille.fr/musee-des-beaux-arts-mba"
      }
      },
        {
        name: "Cité Radieuse (Le Corbusier)",
        description: "An icon of 20th-century architecture, the Cité Radieuse is a groundbreaking housing unit designed by the legendary architect Le Corbusier between 1947 and 1952. A UNESCO World Heritage site, this 'Unité d'Habitation' was conceived as a 'vertical village,' containing apartments, shops, a school, and a hotel, all within a single concrete structure. It's a seminal work of the Brutalist movement.\n\nVisitors can freely explore the third-floor 'shopping street' and take the elevator to the magnificent rooftop terrace, which features a paddling pool, a gymnasium, and stunning panoramic views of the city and sea. The building is still a residential complex, so visitors are asked to be respectful. It's an essential pilgrimage for anyone interested in modern architecture and urban planning.",
        practicalInfo: {
        howToGetThere: "Take Bus B1 or 21 from Rond-Point du Prado metro station (Line 2). Stop: Le Corbusier.",
        openingHours: "Public areas (street on 3rd floor and roof on 9th) are open daily from 9:00 AM to 6:00 PM. Guided tours are available.",
        cost: "Free to visit public areas. Fees apply for guided tours.",
        website: "https://www.marseille-tourisme.com/en/what-to-do/heritage-culture/sites-to-visit/cite-radieuse-le-corbusier/"
      }
      },
        {
        name: "Les Goudes",
        description: "Located at the very end of the coast road, past La Corniche, Les Goudes feels like the end of the world. This tiny, rustic fishing port is nestled in a rocky cove, offering a wilder, more rugged side of Marseille. With its traditional 'cabanons' (small fisherman's cottages), a few charming seafood restaurants, and a dramatic backdrop of bare white hills, Les Goudes has a timeless, authentic atmosphere.\n\nIt serves as a gateway to the Calanques National Park, with hiking trails leading to stunning viewpoints and secluded coves like the Calanque de Callelongue. It’s the perfect place to escape the city's hustle, enjoy incredibly fresh seafood, and watch the sunset over the sea. The journey there is part of the experience, with the road winding along the coast offering spectacular views.",
        practicalInfo: {
        howToGetThere: "Take Bus 19 from Castellane to the terminus at Madrague de Montredon, then switch to Bus 20 to Les Goudes.",
        openingHours: "Always accessible.",
        cost: "Free to visit.",
        website: "https://www.marseille-tourisme.com/en/what-to-do/heritage-culture/neighbourhoods/les-goudes/"
      }
      },
        {
        name: "Vallon des Auffes",
        description: "Tucked away beneath the grand arches of the Corniche Kennedy bridge is the Vallon des Auffes, a picture-perfect traditional fishing harbor. This small, sheltered cove is brimming with charm, packed with colorful fishing boats, traditional cottages, and a handful of excellent seafood restaurants built right on the rocks. It feels like a hidden gem, miraculously preserved from the passage of time.\n\nThe name 'Auffes' comes from 'auffo,' the Provençal name for the alpha grass used to make fishing nets and ropes. It’s a wonderfully peaceful spot to watch the fishermen mend their nets, take a swim off the rocks with the locals, or enjoy a sunset aperitif. The contrast between the quaint harbor and the busy traffic passing overhead on the bridge makes it a uniquely Marseillais experience.",
        practicalInfo: {
        howToGetThere: "Located on the Corniche Kennedy. Take Bus 83 and get off at the 'Vallon des Auffes' stop.",
        openingHours: "Always accessible.",
        cost: "Free to visit.",
        website: "https://www.marseille-tourisme.com/en/what-to-do/see-the-sea/on-the-coast/vallon-des-auffes/"
      }
      },
        {
        name: "La Friche la Belle de Mai",
        description: "Housed in a former tobacco factory in the Belle de Mai neighborhood, La Friche is a sprawling cultural complex and a vibrant hub of creativity. This dynamic space is a city within a city, containing artists' studios, concert halls, a theatre, a cinema, a bookstore, a community garden, a skatepark, and a fantastic playground for children. It's a living, breathing example of urban regeneration.\n\nThe massive rooftop terrace is a major draw, especially in summer when it transforms into a huge open-air bar and event space with amazing city views. La Friche hosts an eclectic program of exhibitions, festivals, markets, and performances throughout the year, reflecting the contemporary pulse of Marseille. It’s the place to go to experience the city's modern, artistic, and community-driven spirit.",
        practicalInfo: {
        howToGetThere: "A 15-minute walk from Saint-Charles train station. Or take Bus 49 or 52.",
        openingHours: "Site is open daily, but hours for individual venues, restaurants, and exhibitions vary.",
        cost: "Free to enter the site. Tickets required for shows and some exhibitions.",
        website: "https://www.lafriche.org/en/"
      }
      },
        {
        name: "Musée d'Histoire de Marseille (Marseille History Museum)",
        description: "To truly understand Marseille, a visit to its history museum is essential. Located next to the Vieux-Port, the Musée d'Histoire de Marseille takes you on a journey through 2,600 years of the city's past, from its origins as the Greek colony of Massalia to the present day. The museum is ingeniously built around the 'Jardin des Vestiges,' an archaeological site discovered in the 1960s that contains the original Greek port, fortifications, and Roman roads.\n\nInside, the museum's extensive collection includes ancient shipwrecks, mosaics, pottery, and interactive displays that bring the city's rich and often turbulent history to life. It provides fascinating context for all the other sights you'll see around the city, explaining its role as a major port, its periods of plague and rebellion, and its constant evolution. It is one of the largest history museums in France and offers a comprehensive look at this ancient metropolis.",
        practicalInfo: {
        howToGetThere: "Located at the Centre Bourse shopping center, near the Vieux-Port. Metro Line 1 (Vieux-Port).",
        openingHours: "Daily except Mondays, 9:30 AM to 6:00 PM.",
        cost: "€6 for permanent collection. Free on the first Sunday of the month.",
        website: "https://musees.marseille.fr/musee-dhistoire-de-marseille-mhm"
      }
      }
      ]}
      logistics={{
        gettingAround: "Marseille has an efficient public transport system (RTM) with 2 metro lines, 3 tram lines, and an extensive bus network. A City Pass offers unlimited travel and discounts on attractions. The city center, including the Vieux-Port and Le Panier, is very walkable. Ferries operate from the Vieux-Port to the Frioul Islands and for cross-harbor trips. Ride-sharing apps and taxis are also widely available.",
        whereToStay: "For first-time visitors, staying near the Vieux-Port is ideal for its central location and lively atmosphere (e.g., Hôtel La Résidence du Vieux Port). For historic charm, choose a boutique hotel in Le Panier. The Cours Julien area offers a bohemian vibe with trendy hotels and apartments. For luxury, the InterContinental Marseille - Hotel Dieu offers stunning views from a former hospital.",
        bestTimeToVisit: "The best times to visit Marseille are spring (April to June) and autumn (September to October). The weather is pleasant and warm, perfect for exploring the city and the Calanques, and the crowds are smaller than in summer. July and August are hot and very busy, though lively with festivals. Winters are mild but can be wet and windy, with the 'Mistral' wind being a notable feature.",
        suggestedItinerary: "Day 1: Explore the Vieux-Port in the morning, get lost in the alleys of Le Panier, and visit the Mucem and Cathédrale de la Major in the afternoon. Day 2: Take the bus up to the Basilique Notre-Dame de la Garde for panoramic views, then take a boat tour of the Calanques National Park from the Vieux-Port. Day 3: Immerse yourself in the street art of Cours Julien, visit the grand Palais Longchamp, and take a ferry to the historic Château d'If in the afternoon."
      }}
      faqs={[{
          question: "Is Marseille expensive?",
          answer: "Marseille is generally more affordable than Paris but can be considered moderately expensive compared to other French cities. Accommodation and dining at prime locations like the Vieux-Port can be pricey. However, you can find budget-friendly options, especially for food, in neighborhoods like Noailles or Cours Julien. Public transport is reasonably priced, and many key attractions like churches, parks, and exploring neighborhoods are free."
        },
        {
          question: "How many days do you need in Marseille?",
          answer: "A stay of 3 to 4 days is ideal for a comprehensive Marseille experience. This allows you to cover the main city highlights like the Vieux-Port, Le Panier, and Notre-Dame de la Garde, while also dedicating a full day to exploring the magnificent Calanques National Park by boat or on foot. A longer stay would allow for more relaxed exploration and day trips to nearby Provençal towns."
        },
        {
          question: "Is Marseille safe?",
          answer: "Marseille has a reputation for being gritty, but like any large city, safety is largely a matter of awareness. The main tourist areas such as the Vieux-Port, Le Panier, and La Corniche are generally safe, especially during the day. It's wise to exercise standard precautions: be aware of your surroundings, watch out for pickpockets in crowded areas and on public transport, and avoid walking alone in unfamiliar northern districts late at night. Overall, tourists rarely experience serious issues."
        },
        {
          question: "What is Marseille famous for?",
          answer: "Marseille is famous for being the oldest city in France and its largest commercial port. It's renowned for the iconic Basilique Notre-Dame de la Garde, the stunning natural beauty of the Calanques, and the historic Vieux-Port. Culturally, it's famous for its signature dish, bouillabaisse (a traditional fish stew), the anise-flavored aperitif pastis, and its authentic Savon de Marseille (Marseille soap). The city also served as the setting for the classic novel 'The Count of Monte Cristo'."
        }
      ]}
    />
  );
};