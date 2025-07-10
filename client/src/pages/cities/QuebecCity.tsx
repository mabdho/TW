import React from 'react';
import { CityPage } from '../../components/CityPage';

export const QuebecCity: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Quebec City, Canada (2025 Guide)"}
      description={"Step into a fairytale in Quebec City, the heart of French Canada and a UNESCO World Heritage treasure. As the only fortified city north of Mexico, its cobblestone streets, 17th-century architecture, and commanding position over the St. Lawrence River evoke a timeless European charm. From the iconic silhouette of the Château Frontenac to the vibrant culture found in its artisan boutiques and cozy bistros, the city offers a unique blend of history, romance, and adventure. Whether you're exploring historic battlefields, indulging in decadent poutine, or simply soaking in the atmosphere of a 400-year-old city, you'll find no shortage of captivating experiences. This guide will walk you through all the best things to do in Quebec City, ensuring your visit is truly unforgettable."}
      highlights={["Old Quebec (Vieux-Québec)",
        "Fairmont Le Château Frontenac",
        "Plains of Abraham (Battlefields Park)",
        "Montmorency Falls Park",
        "Quartier Petit Champlain"]}
      attractions={[
        {
        name: "Old Quebec (Vieux-Québec)",
        description: "The historic heart of the city, Old Quebec is a designated UNESCO World Heritage site. It's split into two parts: Upper Town (Haute-Ville), enclosed by fortified walls, and Lower Town (Basse-Ville) by the river. Spend hours wandering through its narrow, winding streets, discovering hidden courtyards, historic homes, and charming shops. Every corner tells a story, transporting you back to the early days of New France.\n\nThis area is where you'll find many of the city's most famous landmarks, including the Château Frontenac, Place Royale, and the fortifications themselves. It's best explored on foot, so wear comfortable shoes and allow yourself to get lost in its enchanting atmosphere. From street performers on Rue Saint-Jean to quiet moments in Parc Montmorency, Old Quebec is an experience in itself.",
        practicalInfo: {
        howToGetThere: "Located in the city center. Upper and Lower Towns are connected by the Funicular or the steep 'Breakneck Stairs' (L'Escalier Casse-Cou). Highly walkable.",
        openingHours: "24/7, though shop and restaurant hours vary.",
        cost: "Free to explore.",
        website: "https://www.quebec-cite.com/en/old-quebec"
      }
      },
        {
        name: "Fairmont Le Château Frontenac",
        description: "Dominating the city skyline, the Fairmont Le Château Frontenac is not just a luxury hotel but a historic landmark and arguably the most photographed hotel in the world. Opened in 1893 by the Canadian Pacific Railway, its castle-like architecture was designed to promote luxury tourism. Even if you aren't a guest, you can explore its opulent lobby, enjoy a cocktail at the 1608 Bar, or take a guided tour to learn about its history and the famous guests who have stayed here, from Queen Elizabeth II to Alfred Hitchcock.\n\nThe hotel sits atop Cap Diamant, offering unparalleled views of the St. Lawrence River and Old Quebec. Its presence is central to the city's identity and a visit here, even just to admire it from the outside on Terrasse Dufferin, is an essential part of any trip.",
        practicalInfo: {
        howToGetThere: "1 Rue des Carrières, in the heart of Upper Town.",
        openingHours: "Lobby is generally accessible. Guided tours are available daily at specific times.",
        cost: "Free to enter the lobby. Guided tours cost around $25 CAD per adult.",
        website: "https://www.fairmont.com/frontenac-quebec/"
      }
      },
        {
        name: "Plains of Abraham (Battlefields Park)",
        description: "This vast urban park is Quebec City's 'Central Park' and a site of immense historical significance. It was here in 1759 that the pivotal Battle of the Plains of Abraham took place between British and French forces, a conflict that sealed the fate of New France. Today, the park is a beautiful green space for recreation and relaxation, beloved by locals and tourists alike.\n\nVisitors can explore the Joan of Arc Garden, walk or cycle along scenic paths, enjoy a picnic with stunning river views, or visit the Plains of Abraham Museum for an immersive look at the area's history. In winter, the park transforms into a wonderland for cross-country skiing and snowshoeing. It also hosts major events, including the city's national holiday celebrations and the Festival d'été de Québec.",
        practicalInfo: {
        howToGetThere: "Directly adjacent to Old Quebec's Upper Town. Easily accessible on foot.",
        openingHours: "Park is open 24/7. Museum hours vary.",
        cost: "Free to access the park. Museum admission fees apply.",
        website: "https://www.ccbn-nbc.gc.ca/en/"
      }
      },
        {
        name: "Montmorency Falls Park (Parc de la Chute-Montmorency)",
        description: "Just a short drive from the city center, Montmorency Falls is a breathtaking natural wonder. At 83 meters (272 feet) high, it's a full 30 meters taller than Niagara Falls. The park offers several spectacular viewpoints to admire the powerful cascade. You can take a cable car to the top, walk across a suspension bridge that spans the crest of the falls, or climb the 487-step panoramic staircase for a heart-pumping workout with an incredible reward.\n\nFor the more adventurous, there are three via ferrata routes and a double zipline that soars across the cove. In winter, the spray from the falls freezes into a massive cone of ice at its base, known as the 'Sugar Loaf,' creating a unique and beautiful landscape.",
        practicalInfo: {
        howToGetThere: "Located about 12 km (7.5 miles) from Old Quebec. Accessible by car, city bus (Route 800), or a scenic bike path.",
        openingHours: "Park is open year-round. Cable car and activities are seasonal. Check website for details.",
        cost: "There is a parking fee per vehicle or an entrance fee per person. Cable car and activities are extra.",
        website: "https://www.sepaq.com/en/parks/parc-de-la-chute-montmorency"
      }
      },
        {
        name: "Quartier Petit Champlain",
        description: "Nestled at the foot of Cap Diamant in Lower Town, the Quartier Petit Champlain is one of the oldest and most picturesque commercial districts in North America. Its narrow, pedestrian-only cobblestone streets, including the famous Rue du Petit Champlain, are lined with unique artisan boutiques, art galleries, and charming restaurants serving Quebecois cuisine. The area is decorated beautifully year-round, but it's especially magical during the holiday season when it's blanketed in snow and lit with festive lights.\n\nDon't miss the large Fresque des Québécois, a massive mural depicting 400 years of the city's history. The district is also home to the 'Breakneck Stairs' (Escalier Casse-Cou), the city's oldest staircase, which connects it to the Upper Town. For a less strenuous ascent, the historic Funicular provides lovely views on its short journey up the cliff.",
        practicalInfo: {
        howToGetThere: "In Lower Town. Accessible from Upper Town via the Funicular or stairs.",
        openingHours: "Shops are typically open 10 AM - 6 PM, with extended hours in summer.",
        cost: "Free to explore.",
        website: "https://www.quartierpetitchamplain.com/en/"
      }
      },
        {
        name: "La Citadelle de Québec",
        description: "La Citadelle is an active military installation and the official residence of the Governor General of Canada. Perched atop Cap Diamant, this star-shaped fortress has been a key part of the city's defenses for centuries. Its construction was started by the French in the 18th century and completed by the British in 1850, and it has never seen military action.\n\nVisitors can take a guided tour to explore the fortress grounds, learn about its architecture and history, and visit the Royal 22e Régiment Museum. A highlight for many is the traditional Changing of the Guard ceremony, a colorful military spectacle held daily during the summer months. The views from its walls over the city and the St. Lawrence River are simply magnificent.",
        practicalInfo: {
        howToGetThere: "Adjacent to the Plains of Abraham and overlooking the St. Lawrence River. Entrance is on Côte de la Citadelle.",
        openingHours: "Open daily. Tour times and ceremony schedules vary by season.",
        cost: "Admission fee includes a guided tour and museum access. Around $22 CAD for adults.",
        website: "https://www.lacitadelle.qc.ca/en/"
      }
      },
        {
        name: "Île d'Orléans",
        description: "Escape the city for a scenic journey to Île d'Orléans, a charming island in the St. Lawrence River often called the 'Garden of Quebec'. Just a 15-minute drive from downtown, this island offers a glimpse into the region's rural and agricultural heritage. The island is dotted with historic farms, 18th-century stone houses, and six distinct villages, each with its own character and church.\n\nRent a bike or drive the 67-km (42-mile) loop road (Chemin Royal) that circles the island. Stop at farm stands to sample fresh strawberries, apples, and blackcurrants. Visit vineyards for wine tasting, indulge at a chocolate shop, or enjoy a meal at a restaurant offering incredible views of the Quebec City skyline. It’s a perfect day trip for foodies and those seeking pastoral beauty.",
        practicalInfo: {
        howToGetThere: "Accessible by car via the Pont de l'Île. Biking is popular, but be prepared for some hills.",
        openingHours: "Businesses are mostly seasonal, with peak season from May to October.",
        cost: "Free to access the island. Costs vary for activities and purchases.",
        website: "https://tourisme.iledorleans.com/en/"
      }
      },
        {
        name: "Terrasse Dufferin",
        description: "This wide, wooden boardwalk wraps around the Château Frontenac and offers one of the most iconic and breathtaking views in Quebec City. Stretching from the Citadelle to the start of the Governor's Promenade, Terrasse Dufferin is a lively hub of activity year-round. In the summer, it's filled with street performers, artists, and people simply strolling and enjoying the panoramic vistas of the St. Lawrence River, Île d'Orléans, and the Lower Town.\n\nIn the winter, the terrace becomes home to the Au 1884 toboggan slide, a tradition dating back to 1884. Thrill-seekers can zoom down the icy tracks on a traditional wooden toboggan, reaching speeds up to 70 km/h (43 mph). It's an exhilarating experience with an unbeatable backdrop.",
        practicalInfo: {
        howToGetThere: "Located in Upper Town, directly in front of the Château Frontenac.",
        openingHours: "24/7. Toboggan slide operates in winter, weather permitting.",
        cost: "Free to walk. Small fee for the toboggan slide.",
        website: "https://www.quebec-cite.com/en/what-to-do-quebec-city/terrasse-dufferin"
      }
      },
        {
        name: "Musée national des beaux-arts du Québec (MNBAQ)",
        description: "Located on the edge of the Plains of Abraham, the MNBAQ is the premier institution dedicated to preserving and promoting Quebec art. The museum is spread across four distinct pavilions, including a former prison and the stunning, modern Pierre Lassonde Pavilion. Its vast collection comprises over 42,000 works dating from the 17th century to the present day.\n\nThe museum provides a comprehensive overview of Quebec's artistic history, from early religious works to modern abstract pieces and contemporary installations. It features renowned Quebec artists like Jean-Paul Riopelle, Alfred Pellan, and Fernand Leduc. The light-filled, architecturally impressive Lassonde Pavilion is a must-see in its own right.",
        practicalInfo: {
        howToGetThere: "Located in Battlefields Park (Plains of Abraham). Accessible by bus or a pleasant walk from Upper Town.",
        openingHours: "Tuesday-Sunday 10 AM - 5 PM (until 9 PM on Wednesdays).",
        cost: "Around $25 CAD for adults. Reduced rates for seniors and students.",
        website: "https://www.mnbaq.org/en"
      }
      },
        {
        name: "Morrin Centre",
        description: "Discover a hidden gem of Quebec City at the Morrin Centre. This beautiful National Historic Site has served many purposes over its 200-year history: it was the city's first common gaol (prison), later became a college for the English-speaking minority, and now houses the city's main English-language library and the Literary and Historical Society of Quebec. The building itself is a beautiful example of Palladian architecture.\n\nGuided tours bring its fascinating, multi-layered history to life. You can explore the old prison cells, stand in the former science laboratory, and marvel at the stunning Victorian-era library, which looks like something straight out of a movie with its spiral staircases and shelves of rare books. It's a unique window into the history of Quebec's English-speaking community.",
        practicalInfo: {
        howToGetThere: "44 Chaussée des Écossais, inside the walls of Old Quebec.",
        openingHours: "Guided tours are offered at specific times; check the website. Library has separate hours.",
        cost: "Admission fee for guided tours, around $16 CAD for adults.",
        website: "https://www.morrin.org/"
      }
      },
        {
        name: "Basilica-Cathedral Notre-Dame de Québec",
        description: "The mother church of the Roman Catholic Archdiocese of Quebec, this basilica-cathedral is a masterpiece of religious architecture and a National Historic Site of Canada. Its history dates back to 1647, though it has been rebuilt several times after being destroyed by bombardments and fire. Its current form features a stunning neoclassical facade and a lavish interior adorned with gold leaf, intricate carvings, and beautiful religious art, including a canopy and bishop's throne designed by François Baillairgé.\n\nIt is also the site of the only Holy Door outside of Europe, which is unsealed for special jubilee years. The crypt is the final resting place for many of Quebec's bishops and four governors of New France, including Louis de Buade de Frontenac, after whom the famous château is named.",
        practicalInfo: {
        howToGetThere: "Located at 16 Rue De Buade in the heart of Old Quebec's Upper Town.",
        openingHours: "Open daily, but hours can be restricted for services or events. Check the website.",
        cost: "Free to enter for prayer and visits. Donations are appreciated.",
        website: "https://www.notre-dame-de-quebec.org/index.php/en/"
      }
      },
        {
        name: "Place Royale",
        description: "This picturesque square in the Lower Town is the very birthplace of French civilization in North America. It was here that Samuel de Champlain founded the settlement of Quebec in 1608. The square is surrounded by beautifully restored 17th and 18th-century stone houses that once belonged to wealthy merchants. The centerpiece of the square is a bust of King Louis XIV.\n\nAt the heart of Place Royale stands the magnificent Notre-Dame-des-Victoires Church, the oldest stone church in North America, built in 1688. The entire square feels like a perfectly preserved movie set, offering a profound sense of history and European ambiance. It's a key stop on any walking tour of the Lower Town and is particularly enchanting in the evening.",
        practicalInfo: {
        howToGetThere: "Located in Lower Town, a short walk from the Quartier Petit Champlain.",
        openingHours: "24/7. Church and shop hours vary.",
        cost: "Free.",
        website: "https://www.quebec-cite.com/en/what-to-do-quebec-city/place-royale"
      }
      },
        {
        name: "Old Port of Quebec (Vieux-Port)",
        description: "Stretching along the St. Lawrence River at the edge of the Lower Town, the Old Port is a vibrant area that blends maritime history with modern leisure. It remains an active cruise ship terminal, welcoming thousands of visitors each year. The area is home to the Marché du Vieux-Port, a bustling public market where you can find fresh local produce, Quebec cheeses, maple products, ice cider, and artisanal goods. It's the perfect place to assemble a picnic or find a delicious souvenir.\n\nThe port also features a waterfront park with bike paths and walking trails, offering fantastic views of the river and the city. In the summer, it's a hub for events and festivals, while in the winter, an outdoor skating rink provides classic Canadian fun.",
        practicalInfo: {
        howToGetThere: "Located in Lower Town along the river, within walking distance from Place Royale.",
        openingHours: "Area is always accessible. Market hours are typically 9 AM - 6 PM.",
        cost: "Free to explore. Pay for what you buy at the market.",
        website: "https://www.marchevieuxport.com/en"
      }
      },
        {
        name: "Parliament Building (Hôtel du Parlement)",
        description: "Home to the National Assembly of Quebec, the Parliament Building is an architectural gem inspired by the Louvre Palace in Paris. Completed in 1886, its Second Empire style stands in contrast to the city's other prominent buildings. The impressive facade features 26 bronze statues of key figures from Quebec's history, from explorers like Jacques Cartier to military leaders like Montcalm.\n\nFree guided tours are available, offering insight into Quebec's political system and history, and allowing access to the magnificent National Assembly Chamber and Legislative Council Chamber. Surrounding the building are the beautiful Parliament Gardens, which are lovely to stroll through. Don't miss the Fontaine de Tourny, a spectacular fountain gifted to the city for its 400th anniversary.",
        practicalInfo: {
        howToGetThere: "Located just outside the Saint-Louis Gate of Old Quebec, at 1045 Rue des Parlementaires.",
        openingHours: "Monday-Friday, with tour times varying. Reservations are recommended.",
        cost: "Free guided tours.",
        website: "https://www.assnat.qc.ca/en/visiteurs/"
      }
      },
        {
        name: "Musée de la civilisation",
        description: "Located near the Old Port, the Musée de la civilisation is a modern and interactive museum that explores the human experience through the lens of Quebec's history and diverse cultures. Rather than focusing solely on artifacts, this museum emphasizes participation and discovery, making it engaging for all ages. Its exhibitions are known for being thought-provoking and innovative.\n\nPermanent exhibits delve into the history of Quebec, the lives of its First Nations peoples, and other societal themes. The museum also hosts a rotating lineup of high-quality international exhibitions covering a wide range of topics from ancient civilizations to contemporary pop culture. It’s a fantastic place to spend a few hours, especially on a rainy day, to gain a deeper understanding of the world and Quebec's place in it.",
        practicalInfo: {
        howToGetThere: "85 Rue Dalhousie, in the Old Port area of Lower Town.",
        openingHours: "Tuesday-Sunday 10 AM - 5 PM. Open daily in summer.",
        cost: "Around $24 CAD for adults.",
        website: "https://www.mcq.org/en"
      }
      }
      ]}
      logistics={{
        gettingAround: "Old Quebec is best explored on foot. The Upper and Lower Towns are connected by the Funicular and several staircases. For longer distances, the RTC bus network is efficient and reliable. Taxis and ride-sharing services like Uber are also widely available. To visit Île d'Orléans or Montmorency Falls, renting a car is a convenient option, though city buses also serve the falls.",
        whereToStay: "For the ultimate historic experience, stay within the walls of Old Quebec (Vieux-Québec), but be prepared for higher prices. Fairmont Le Château Frontenac is the luxury icon, while Auberge Saint-Antoine is a top-tier boutique hotel. The Saint-Roch and Saint-Jean-Baptiste neighborhoods offer a more local, bohemian vibe with trendy restaurants, shops, and more affordable hotels and Airbnbs.",
        bestTimeToVisit: "Quebec City is a year-round destination. Summer (June-August) is warm and bustling with festivals, but also has the largest crowds. Fall (September-October) is spectacular with stunning foliage and comfortable temperatures. Winter (December-February) is magical, with snow-covered streets, the German Christmas Market, and the famous Quebec Winter Carnival, but it is very cold. Spring (April-May) is the quietest season, offering lower prices as the city thaws.",
        suggestedItinerary: "Day 1: Explore the historic city center and main attractions\nDay 2: Visit museums and cultural sites\nDay 3: Experience local markets and neighborhoods\nDay 4: Day trips to nearby attractions or relaxation"
      }}
      faqs={[{
          question: "Is Quebec City expensive?",
          answer: "Quebec City can be moderately expensive, similar to other major Canadian cities. Accommodation and dining within the historic walls of Old Quebec tend to be the biggest costs. However, there are many ways to manage your budget, such as staying in neighborhoods like Saint-Roch, eating at bakeries and casual bistros, and enjoying free activities like walking the city walls and exploring the Plains of Abraham."
        },
        {
          question: "How many days do you need in Quebec City?",
          answer: "A stay of 3 to 4 days is ideal. This gives you enough time to thoroughly explore both Upper and Lower Towns of Old Quebec at a relaxed pace, visit a couple of museums, and dedicate a full day to an excursion outside the city center, such as visiting Montmorency Falls and Île d'Orléans."
        },
        {
          question: "Is Quebec City safe?",
          answer: "Yes, Quebec City is considered very safe. It has one of the lowest crime rates in Canada. Visitors can feel comfortable walking around, even at night, especially in the main tourist areas. As with any travel destination, it's wise to practice standard safety precautions like being aware of your surroundings and keeping your valuables secure."
        },
        {
          question: "What is Quebec City famous for?",
          answer: "Quebec City is most famous for being the only fortified city north of Mexico, with its historic walls still intact. It's also renowned for its well-preserved Old Quebec, a UNESCO World Heritage site; its strong French heritage and language; the iconic Fairmont Le Château Frontenac hotel; the massive Quebec Winter Carnival (Carnaval de Québec); and its delicious local cuisine, especially poutine."
        }
      ]}
    />
  );
};