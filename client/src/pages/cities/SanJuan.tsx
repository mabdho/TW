import React from 'react';
import { CityPage } from '../../components/CityPage';

export const SanJuan: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in San Juan, Puerto Rico (2025 Guide)"}
      description={"Welcome to San Juan, a city where 500 years of history meet the vibrant pulse of modern Caribbean life. Cobblestone streets echo with tales of Spanish galleons, while colorful colonial buildings house chic boutiques and world-class restaurants. The rhythm of salsa spills from open doorways, mixing with the gentle lull of Atlantic waves against ancient fortress walls. Beyond the historic core, golden sand beaches invite relaxation, and lush rainforests promise adventure. Whether you're a history buff, a foodie, a beach lover, or an art enthusiast, you'll find an endless array of activities. This guide will walk you through the very best things to do in San Juan, ensuring your visit is packed with unforgettable moments, rich culture, and the warm spirit of Borikén. Get ready to explore the heart and soul of Puerto Rico."}
      imageUrl={""}
      highlights={["Old San Juan (Viejo San Juan)",
        "Castillo San Felipe del Morro",
        "El Yunque National Forest",
        "Bioluminescent Bay Tour (Laguna Grande)",
        "La Placita de Santurce"]}
      galleryImages={[
        { url: "", alt: "SanJuan landmark 1", caption: "SanJuan landmark 1 - placeholder" },
        { url: "", alt: "SanJuan landmark 2", caption: "SanJuan landmark 2 - placeholder" },
        { url: "", alt: "SanJuan landmark 3", caption: "SanJuan landmark 3 - placeholder" },
        { url: "", alt: "SanJuan landmark 4", caption: "SanJuan landmark 4 - placeholder" },
        { url: "", alt: "SanJuan landmark 5", caption: "SanJuan landmark 5 - placeholder" },
        { url: "", alt: "SanJuan landmark 6", caption: "SanJuan landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Old San Juan (Viejo San Juan)",
        description: "Step back in time as you wander through the enchanting streets of Old San Juan. This 500-year-old neighborhood is a UNESCO World Heritage site, boasting a stunning collection of Spanish colonial architecture. The narrow, blue-hued cobblestone streets are lined with brightly painted buildings, charming plazas, and hidden courtyards. Every corner reveals a piece of history, from ancient city walls to historic churches and grand mansions.\n\nBeyond its historical significance, Old San Juan is the cultural heart of the city. It's a living museum filled with art galleries, craft shops, bustling cafes, and some of the island's best restaurants. Spend a day getting lost in its maze-like streets, discovering iconic landmarks, and soaking in the romantic, timeless atmosphere that makes it one of the most captivating destinations in the Caribbean.",
        practicalInfo: {
        howToGetThere: "Located on a small island connected to the mainland. Accessible by foot, Uber/taxi, or the free trolley service that circulates the historic district.",
        openingHours: "24/7, though shops and attractions have their own hours, typically 10 AM - 6 PM.",
        cost: "Free to explore.",
        website: "www.discoverpuertorico.com/region/metro/old-san-juan"
      }
      },
        {
        name: "Castillo San Felipe del Morro",
        description: "Perched majestically on a promontory overlooking the entrance to San Juan Bay, Castillo San Felipe del Morro is the city's most iconic landmark. This formidable six-level citadel took over 250 years to build and stands as a testament to Puerto Rico's strategic importance in the New World. Walking through its tunnels, barracks, and dungeons, you can almost hear the echoes of battles fought against pirates and foreign powers.\n\nThe sprawling grounds offer breathtaking panoramic views of the Atlantic Ocean. It's a perfect spot for history buffs to explore and for families to fly kites on the vast green lawn leading up to the fortress. Don't miss the sentry boxes, or 'garitas,' which have become a national symbol of Puerto Rico.",
        practicalInfo: {
        howToGetThere: "Located at the northwestern tip of Old San Juan. Reachable by a 15-minute walk from the heart of the old city or via the free trolley.",
        openingHours: "Daily, 9:30 AM - 4:30 PM.",
        cost: "$10 USD for adults (includes entry to Castillo San Cristóbal for 24 hours), free for children under 15.",
        website: "www.nps.gov/saju"
      }
      },
        {
        name: "Castillo San Cristóbal",
        description: "While El Morro guarded the sea entrance, Castillo San Cristóbal protected the city from land attacks. Spanning 27 acres, it is the largest fortress built by the Spanish in the Americas. Its ingenious design features multiple layers of defense, including moats, tunnels, and bastions, which you can explore on a self-guided tour.\n\nFrom its highest points, the fort offers stunning views of the modern city of San Juan on one side and the historic city on the other. It's often less crowded than El Morro, allowing for a more intimate exploration of its fascinating military history. The 'Devil's Sentry Box' (Garita del Diablo) is a highlight, shrouded in local legends of soldiers who mysteriously vanished from their post.",
        practicalInfo: {
        howToGetThere: "Located at the eastern entrance to Old San Juan, easily accessible by foot.",
        openingHours: "Daily, 9:30 AM - 4:30 PM.",
        cost: "$10 USD for adults (includes entry to Castillo San Felipe del Morro for 24 hours), free for children under 15.",
        website: "www.nps.gov/saju"
      }
      },
        {
        name: "El Yunque National Forest",
        description: "Escape the city for a day and immerse yourself in the lush, tropical paradise of El Yunque, the only tropical rainforest in the U.S. National Forest System. Located just a 45-minute drive from San Juan, this natural wonderland is home to cascading waterfalls, verdant hiking trails, and a rich biodiversity of flora and fauna, including the native coquí frog.\n\nHike to La Mina Falls for a refreshing dip in a natural pool, climb the Yokahú Observation Tower for spectacular 360-degree views of the forest canopy and coastline, or simply enjoy the serene sounds of nature. Due to ongoing restoration from past hurricanes, it's essential to check the official website for open trails and reservation requirements before you visit.",
        practicalInfo: {
        howToGetThere: "Best accessed by rental car or a guided tour from San Juan. Approximately a 45-60 minute drive.",
        openingHours: "Daily, 8:00 AM - 5:00 PM. A reservation is often required for entry.",
        cost: "$2 reservation fee per vehicle online. Tour prices vary.",
        website: "www.fs.usda.gov/elyunque"
      }
      },
        {
        name: "Bioluminescent Bay Tour (Laguna Grande)",
        description: "Experience one of nature's most magical phenomena on a bioluminescent bay tour. The closest and most accessible bio bay to San Juan is Laguna Grande in Fajardo. Here, millions of microscopic dinoflagellates light up the water with a brilliant blue-green glow when agitated. Paddling through the mangrove channels into the lagoon on a moonless night is an otherworldly experience.\n\nAs your kayak glides through the water, you'll see trails of light sparkle with every paddle stroke and watch as fish dart below like shooting stars. This is a fragile ecosystem, so choose a reputable, eco-friendly tour operator. While you can no longer swim in this particular bay to protect it, the visual spectacle is absolutely unforgettable.",
        practicalInfo: {
        howToGetThere: "Located in Fajardo, about a 1-hour drive from San Juan. Best experienced with a tour company that may offer transportation.",
        openingHours: "Tours run nightly, typically with two sessions (around sunset and later in the evening).",
        cost: "Tours cost approximately $55 - $75 per person.",
        website: "www.discoverpuertorico.com/fajardo"
      }
      },
        {
        name: "La Fortaleza (Palacio de Santa Catalina)",
        description: "La Fortaleza is a stunning piece of living history. Originally built in the 16th century to defend the harbor, it now serves as the official residence of the Governor of Puerto Rico, making it the oldest executive mansion in continuous use in the Americas. Its iconic blue and white facade is a beautiful example of palatial architecture and a designated UNESCO World Heritage site.\n\nWhile access can be restricted due to official functions, guided tours are often available. These tours take you through the Moorish-style gardens and some of the stately rooms, offering a glimpse into centuries of Puerto Rican history and governance. The walk down Calle de la Fortaleza towards its gates is one of the most picturesque in the city.",
        practicalInfo: {
        howToGetThere: "At the end of Calle de la Fortaleza in Old San Juan.",
        openingHours: "Guided tours are offered on weekdays, typically from 8:15 AM to 3:30 PM, but are subject to cancellation.",
        cost: "Free, but you must present a valid ID.",
        website: "www.fortaleza.pr.gov"
      }
      },
        {
        name: "Calle del Cristo & Calle de la Fortaleza",
        description: "These two streets are the vibrant arteries of Old San Juan. Calle del Cristo is famous for its high-end outlet stores, including brands like Coach and Tommy Hilfiger, housed in beautiful historic buildings. It's also home to the iconic Capilla del Cristo, a small chapel with a dramatic legend, and leads directly to the San Juan Bautista Cathedral.\n\nCalle de la Fortaleza is arguably the most photographed street in the city. Known for its ever-changing art installations, most famously the 'Umbrella Sky,' it's a bustling hub of activity. The street is lined with dozens of restaurants, souvenir shops, and bars, culminating at the gates of La Fortaleza. A stroll down these streets is essential for shopping, dining, and soaking in the lively atmosphere.",
        practicalInfo: {
        howToGetThere: "These are main streets in the heart of Old San Juan, easily accessible by foot.",
        openingHours: "Stores typically open 10 AM - 7 PM; restaurants and bars stay open much later.",
        cost: "Free to walk and window shop.",
        website: "N/A"
      }
      },
        {
        name: "Condado and Ocean Park Beaches",
        description: "Just a short drive from the old city, San Juan's modern beachfront neighborhoods offer a perfect blend of sun, sand, and city life. Condado Beach is the more glamorous of the two, lined with luxury hotels, high-end boutiques, and upscale restaurants. The waters can be a bit rough, making it popular for body surfing and other water sports.\n\nFor a more laid-back, local vibe, head to Ocean Park Beach. This wide stretch of golden sand is popular with residents, kite-surfers, and those seeking a more relaxed atmosphere. It's bordered by guesthouses and residential homes rather than large resorts, offering a more tranquil beach day experience. Both are fantastic options for a sun-soaked afternoon without leaving the city.",
        practicalInfo: {
        howToGetThere: "A 10-15 minute Uber or taxi ride from Old San Juan.",
        openingHours: "24/7, but it's best to visit during daylight hours.",
        cost: "Free. Chair and umbrella rentals are available for a fee.",
        website: "www.discoverpuertorico.com/region/metro/condado"
      }
      },
        {
        name: "Museo de Arte de Puerto Rico (MAPR)",
        description: "Located in Santurce, the Museo de Arte de Puerto Rico is the island's premier institution for Puerto Rican art. The museum is housed in a grand neoclassical building that was formerly a hospital, with a modern wing added. Its collection spans from the 17th century to the present day, offering a comprehensive look at the island's artistic evolution.\n\nThe museum's highlight is its beautiful sculpture garden, a lush, five-acre oasis featuring waterfalls, a large koi pond, and over a dozen sculptures set amidst native flora. It’s a peaceful retreat and a cultural treasure, providing deep insight into the soul of Puerto Rico through the eyes of its most talented artists.",
        practicalInfo: {
        howToGetThere: "Located in the Santurce neighborhood. A 15-minute taxi or Uber ride from Old San Juan.",
        openingHours: "Thursday to Sunday, 11:00 AM - 5:00 PM. Check website for updates.",
        cost: "Approximately $6 for adults, with discounts for seniors and students.",
        website: "www.mapr.org"
      }
      },
        {
        name: "La Placita de Santurce",
        description: "Experience two sides of local life at La Placita de Santurce. By day, it's a traditional farmers' market (mercado) where vendors sell fresh produce, local spices, and flowers. It's a great place to see daily life unfold and grab a delicious, inexpensive lunch at one of the surrounding fondas (casual eateries).\n\nBy night, especially on Thursdays and Fridays, the area transforms into a massive, open-air block party. The streets fill with people as live salsa, merengue, and reggaeton music blares from the many bars and restaurants that encircle the square. Locals and tourists alike come to dance, drink, and socialize in a uniquely vibrant and energetic atmosphere. It's the best place in San Juan to experience authentic nightlife.",
        practicalInfo: {
        howToGetThere: "In the Santurce neighborhood, a short Uber or taxi ride from Condado or Old San Juan.",
        openingHours: "Market open during the day; bars and restaurants open late, with the street party peaking from 6 PM onwards, Thursday-Sunday.",
        cost: "Free to enter the area; pay for food and drinks.",
        website: "www.discoverpuertorico.com/article/la-placita-de-santurce"
      }
      },
        {
        name: "Casa Bacardí",
        description: "Discover the story behind the world's most awarded rum at Casa Bacardí. Located across the bay in Cataño, the 'Cathedral of Rum' offers several tour options that delve into the history of the Bacardí family, the intricate rum-making process, and the art of crafting the perfect cocktail. Even the basic historical tour is engaging and comes with a welcome cocktail.\n\nFor enthusiasts, the rum tasting tour or the mixology class are highly recommended. You'll learn to muddle a mojito like a pro and sample some of Bacardí's premium and rare reserves that you can't find anywhere else. The waterfront pavilion is a beautiful place to relax with your drink and enjoy the view of Old San Juan across the water.",
        practicalInfo: {
        howToGetThere: "Take the ferry from Pier 2 in Old San Juan to Cataño ($0.50 each way), then a short taxi ride to the distillery. Or take an Uber directly.",
        openingHours: "Daily, 9:00 AM - 6:00 PM. Last tour around 4:30 PM. Booking in advance is recommended.",
        cost: "Tours start at around $30 USD and go up to $75+ for premium experiences.",
        website: "www.bacardi.com/casa-bacardi/"
      }
      },
        {
        name: "Paseo de la Princesa",
        description: "For a truly romantic stroll, head to the Paseo de la Princesa. This beautifully restored 19th-century promenade wraps around the base of the old city walls, offering stunning views of San Juan Bay. The tree-lined walkway is adorned with antique street lamps, fountains, and sculptures, including the magnificent Raíces (Roots) Fountain which depicts the island's diverse heritage.\n\nThe promenade is a favorite spot for local families and couples, especially on weekends when street vendors and artists set up shop. The path leads you along the water's edge all the way to the San Juan Gate, the historic entrance to the city. It's particularly lovely at sunset when the sky and water are bathed in golden light.",
        practicalInfo: {
        howToGetThere: "Starts near the cruise ship piers in Old San Juan.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "San Juan Bautista Cathedral",
        description: "A bastion of faith and history, the Catedral de San Juan Bautista is one of the oldest buildings in the city and the second oldest cathedral in the Americas. The original wooden structure was destroyed by a hurricane in 1529, and the current Gothic-style church was built in its place, with additions and restorations over the centuries.\n\nThe cathedral holds the marble tomb of Juan Ponce de León, the first governor of Puerto Rico. It also houses the relics of San Pío, a Roman martyr. Visitors can step inside to admire the beautiful stained-glass windows and vaulted ceilings, and experience a moment of peace and reflection away from the bustling streets of Old San Juan. It remains an active place of worship.",
        practicalInfo: {
        howToGetThere: "Located on Calle del Cristo in Old San Juan.",
        openingHours: "Daily, generally 8:30 AM - 4:00 PM (Saturdays until 2:00 PM). Mass times vary.",
        cost: "Free, donations are welcome.",
        website: "www.catedralsanjuan.com"
      }
      },
        {
        name: "Plaza de Armas",
        description: "Originally designed as the main town square for military drills, the Plaza de Armas has been the civic and social center of Old San Juan for centuries. Today, it's a lovely European-style plaza where you can sit on a bench, feed the pigeons, and watch the world go by. The square is anchored by a beautiful fountain with four marble statues representing the four seasons.\n\nThe plaza is surrounded by important government buildings, including the City Hall (Alcaldía) and the Department of State. It's a hub of activity, with nearby cafes and shops. It serves as a great starting point for exploring the western side of the old city and a perfect spot to take a break from walking the cobblestone streets.",
        practicalInfo: {
        howToGetThere: "Centrally located in Old San Juan at the intersection of Calle San Francisco and Calle de la Cruz.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Santurce Street Art Tour",
        description: "Witness the vibrant, modern soul of San Juan in the Santurce neighborhood, an open-air gallery of world-class street art. What was once a neglected area has been revitalized by local and international artists who have covered its buildings with massive, colorful murals. The main hubs for art are Calle Cerra and Calle Loíza.\n\nTaking a self-guided walking tour is the best way to experience this dynamic art scene. The murals range from abstract designs and political statements to stunning portraits, showcasing the incredible talent and creative energy of the island. This is the edgier, contemporary side of San Juan's culture, offering a stark and exciting contrast to the colonial history of the old city.",
        practicalInfo: {
        howToGetThere: "Best explored on foot once you arrive in the Santurce neighborhood via Uber or taxi. Focus on Calle Cerra and surrounding streets.",
        openingHours: "24/7, best viewed during daylight hours.",
        cost: "Free.",
        website: "www.discoverpuertorico.com/article/guide-to-street-art-in-santurce"
      }
      }
      ]}
      logistics={{
        gettingAround: "Old San Juan is very walkable, and a free trolley service helps navigate its hills. For travel between Old San Juan, Condado, and Santurce, Uber and taxis are readily available and affordable. To explore destinations outside the city like El Yunque or Fajardo, renting a car is the most flexible option. The ferry from Old San Juan to Cataño is a cheap and scenic way to get to the Bacardí distillery.",
        whereToStay: "Old San Juan offers historic charm with boutique hotels like Hotel El Convento. For a luxury beach experience with high-end dining, stay in Condado at a resort like the Condado Vanderbilt Hotel. Ocean Park provides a more relaxed, local beach vibe with guesthouses like The Dreamcatcher. Isla Verde, near the airport, is known for its large resorts and calm waters, with options like the Fairmont El San Juan Hotel.",
        bestTimeToVisit: "The best time to visit San Juan is during the spring shoulder season, from mid-April to June. You'll find pleasant weather, fewer crowds than the winter high season, and lower prices. The fall (September to November) is the peak of hurricane season and can be risky. Winter (December to March) offers perfect weather but is the busiest and most expensive time.",
        suggestedItinerary: "Day 1: Immerse yourself in history. Explore Castillo San Felipe del Morro and Castillo San Cristóbal in the morning. In the afternoon, wander the cobblestone streets of Old San Juan, visiting the Cathedral and strolling down Paseo de la Princesa at sunset. Day 2: Mix beach and culture. Spend the morning relaxing at Ocean Park or Condado Beach. In the afternoon, explore the street art of Santurce, followed by an evening of food and dancing at La Placita. Day 3: Adventure day. Take a day trip to El Yunque National Forest for hiking and waterfalls, or book an evening kayak tour of the Bioluminescent Bay in Fajardo for a magical end to your trip."
      }}
      faqs={[{
          question: "Is San Juan expensive?",
          answer: "San Juan can fit any budget. Compared to major US cities, it can be slightly more affordable. You can save money by eating at 'kioskos' (food stalls) and 'fondas' (casual eateries), enjoying free activities like exploring Old San Juan and beaches. However, costs can add up quickly with upscale dining in Condado, luxury resorts, and guided tours. Overall, it offers more value than many other Caribbean destinations."
        },
        {
          question: "How many days do you need in San Juan?",
          answer: "A minimum of 3 to 4 days is recommended to experience the main highlights of San Juan itself, including Old San Juan, the forts, the beaches, and Santurce. If you want to include major day trips like El Yunque National Forest and a bio bay tour without feeling rushed, a 5 to 7-day trip is ideal. This allows for a more relaxed pace and time to explore different neighborhoods and cuisines."
        },
        {
          question: "Is San Juan safe?",
          answer: "Yes, San Juan is generally a safe destination for tourists, especially in the main tourist areas like Old San Juan, Condado, and Isla Verde. Like any major city, it's important to be aware of your surroundings. Use standard precautions: avoid leaving valuables unattended on the beach, don't walk alone in unlit areas late at night, and be cautious of petty theft like pickpocketing in crowded places. Ubers are a reliable way to get around at night."
        },
        {
          question: "What is San Juan famous for?",
          answer: "San Juan is famous for its rich history embodied by the 500-year-old cobblestone streets and massive Spanish forts of Old San Juan, a UNESCO World Heritage Site. It's also renowned for being the birthplace of the Piña Colada and the home of world-famous rum distilleries like Bacardí. The city is celebrated for its vibrant culture, including salsa music and dancing, delicious Puerto Rican cuisine (mofongo!), beautiful city beaches, and its role as a gateway to the island's natural wonders like El Yunque rainforest."
        }
      ]}
    />
  );
};