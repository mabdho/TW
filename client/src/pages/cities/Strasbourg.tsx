import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Strasbourg: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Strasbourg, France (2025 Guide)"
      description="Nestled in the heart of the Alsace region, Strasbourg is a city where centuries of French and Germanic cultures intertwine, creating a uniquely captivating atmosphere. Its UNESCO-listed Grande Île is a fairytale world of winding cobblestone streets, canals, and whimsical half-timbered houses. From the soaring Gothic cathedral to its powerful role as a European capital, the city offers a rich tapestry of experiences. Whether you're indulging in hearty Alsatian cuisine, cruising along the River Ill, or getting lost in the magical Christmas markets, you'll find no shortage of enchanting activities. This guide will walk you through all the very best things to do in Strasbourg, ensuring your visit is as memorable as the city itself. Prepare to be charmed by its history, beauty, and vibrant spirit."
      highlights={[
      "Cathédrale Notre-Dame de Strasbourg",
      "La Petite France",
      "Palais Rohan",
      "European Parliament",
      "Parc de l'Orangerie"
]}
      attractions={[
      {
            "name": "Cathédrale Notre-Dame de Strasbourg",
            "description": "A masterpiece of Gothic art, the Strasbourg Cathedral is an awe-inspiring sight. For centuries, its 142-meter spire made it the tallest building in Christendom. The façade is a complex storybook of biblical figures, while inside, the vast space, stunning stained-glass windows (some dating to the 12th century), and the famous astronomical clock captivate visitors. The clock comes to life every day at 12:30 PM with a parade of apostles before Christ.\n\nFor a breathtaking view of the city and the Vosges mountains beyond, climb the 330 steps to the viewing platform. It's a challenging but incredibly rewarding ascent. The cathedral's pink sandstone exterior changes color with the light of the day, making it a photographic marvel at any hour, especially during sunrise and sunset.",
            "practicalInfo": {
                  "howToGetThere": "Located on the Place de la Cathédrale in the center of the Grande Île, easily accessible on foot from anywhere in the city center.",
                  "openingHours": "Cathedral: Daily 8:30 AM - 11:15 AM & 12:45 PM - 5:45 PM. Platform: Daily 10:00 AM - 6:15 PM (hours vary seasonally).",
                  "cost": "Cathedral entry is free. Platform climb: around €8.",
                  "website": "https://www.cathedrale-strasbourg.fr/en/"
            }
      },
      {
            "name": "La Petite France",
            "description": "La Petite France is the historic heart of Strasbourg and arguably its most picturesque district. Once home to the city's tanners, fishermen, and millers, this 'island' is characterized by its magnificent half-timbered houses from the 16th and 17th centuries, their colorful flower boxes reflected in the canals of the River Ill. The narrow cobblestone streets, such as Rue des Dentelles and Rue du Bain-aux-Plantes, are perfect for aimless wandering.\n\nThis area is a living postcard, offering endless photo opportunities, charming waterside restaurants, and artisan shops. Don't miss the Ponts Couverts and the formidable Barrage Vauban at its edge, which provide stunning panoramic views of the district.",
            "practicalInfo": {
                  "howToGetThere": "Located on the western side of the Grande Île. The 'Langstross Grand'Rue' tram stop is a 5-minute walk away.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free to explore.",
                  "website": "https://www.visitstrasbourg.fr/en/things-to-do/visiting/must-see-sites-and-monuments/la-petite-france/"
            }
      },
      {
            "name": "Palais Rohan",
            "description": "This magnificent 18th-century palace, a former residence of the prince-bishops of Strasbourg, is a stunning example of French Baroque architecture, often called a 'mini-Versailles'. Its opulent design and historical significance make it a key landmark. Today, the palace is a cultural hub, housing three of the city's most important museums.\n\nYou can explore the Musée des Arts Décoratifs (showcasing the lavish apartments of the cardinals), the Musée des Beaux-Arts (with its collection of European painting from the Middle Ages to 1870), and the Musée Archéologique (one of France's richest, covering Alsatian history from prehistory to the early Middle Ages). A single ticket can often grant access to all three.",
            "practicalInfo": {
                  "howToGetThere": "Located at 2 Place du Château, right next to the cathedral.",
                  "openingHours": "Museums: 10:00 AM - 6:00 PM. Closed on Tuesdays.",
                  "cost": "Around €7.50 for one museum or a combined ticket for around €15.",
                  "website": "https://www.musees.strasbourg.eu/en/"
            }
      },
      {
            "name": "European Parliament",
            "description": "As one of the official seats of the European Union, Strasbourg plays a pivotal role in modern European politics. The impressive Louise Weiss building, with its striking glass and steel architecture, houses the hemicycle where parliamentary members hold their plenary sessions. Visiting the European Parliament offers a fascinating insight into the workings of the EU.\n\nVisitors can explore the Parlamentarium Simone Veil, an interactive exhibition that explains the role of the parliament and the history of European integration. It's also possible to observe plenary sessions from the public gallery (when in session) or take a guided tour of the building. It's a must-do for anyone interested in contemporary history and politics.",
            "practicalInfo": {
                  "howToGetThere": "Located in the European Quarter (Quartier Européen). Take Tram E to the 'Parlement Européen' stop.",
                  "openingHours": "Visit times vary. Check the website for tour schedules and session dates. Generally open daily but closed on weekends and public holidays.",
                  "cost": "Free.",
                  "website": "https://visiting.europarl.europa.eu/en/visitor-offer/strasbourg"
            }
      },
      {
            "name": "Parc de l'Orangerie",
            "description": "The city's oldest and largest park is a beloved green oasis, perfect for a relaxing escape from the urban hustle. Commissioned for Empress Joséphine (though she never saw it), the park features beautiful tree-lined avenues, a large lake where you can rent rowboats, and manicured French gardens. It's also home to the Pavillon Joséphine, used for exhibitions and events.\n\nThe park is famous for its stork reintroduction program, and you can see these iconic Alsatian birds nesting in the trees. With a small, free zoo, playgrounds, and waffle stands, it's a favorite spot for families and couples alike. It's an ideal place for a picnic, a leisurely stroll, or simply enjoying a sunny afternoon.",
            "practicalInfo": {
                  "howToGetThere": "Located east of the city center, near the European Quarter. Take Bus L1 or Tram E to the 'Droits de l'Homme' stop.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free.",
                  "website": "https://www.visitstrasbourg.fr/en/things-to-do/leisure-activities-and-relaxation/nature-escapes/parc-de-l-orangerie/"
            }
      },
      {
            "name": "Barrage Vauban",
            "description": "The Vauban Dam, built in the 17th century by military engineer Sébastien Le Prestre de Vauban, is a defensive marvel. This fortified bridge and weir was designed to flood the entire southern part of the city in case of attack. Today, its primary function is to offer one of the best panoramic views in Strasbourg.\n\nWalk through the corridor inside, which houses ancient plaster casts and gargoyles from the Cathedral and Palais Rohan. Then, climb to the rooftop terrace for a spectacular, uninterrupted view over the Ponts Couverts, the canals of Petite France, and the distant spire of the cathedral. It’s a photographer's dream, especially at sunset.",
            "practicalInfo": {
                  "howToGetThere": "At the southern end of Petite France, a short walk from the 'Musée d'Art Moderne' tram stop.",
                  "openingHours": "Daily, approximately 9:00 AM to 7:30 PM.",
                  "cost": "Free.",
                  "website": "https://www.musees.strasbourg.eu/en/barrage-vauban/"
            }
      },
      {
            "name": "Musée Alsacien",
            "description": "For a deep dive into the region's unique culture and traditions, the Alsatian Museum is essential. Housed in three interconnected, historic Strasbourg houses, the museum feels like stepping back in time. The winding staircases and creaking floorboards lead you through dozens of rooms meticulously reconstructed to show rural Alsatian life from the 18th to the 20th century.\n\nYou'll see traditional costumes, painted furniture, ceramics, toys, and tools, offering a comprehensive look at the domestic and social life of the region. It provides invaluable context for the architecture and customs you see throughout the city and is a charming, immersive experience.",
            "practicalInfo": {
                  "howToGetThere": "Located at 23-25 Quai Saint-Nicolas, just across the river from the Grande Île.",
                  "openingHours": "10:00 AM - 6:00 PM. Closed on Mondays.",
                  "cost": "Around €7.50.",
                  "website": "https://www.musees.strasbourg.eu/en/alsatian-museum"
            }
      },
      {
            "name": "Ponts Couverts",
            "description": "Despite their name, the 'Covered Bridges' are no longer covered. These three bridges, punctuated by four formidable 14th-century square towers, form a distinctive part of Strasbourg's historic defenses. They span the four channels of the River Ill and once had wooden roofs to protect the defenders stationed there.\n\nToday, they are a powerful symbol of Strasbourg's medieval past and a picturesque entry point to the Petite France district. For the best view of the bridges and towers together, head to the panoramic terrace of the nearby Barrage Vauban. Walking across them offers a wonderful perspective on the water and the surrounding half-timbered homes.",
            "practicalInfo": {
                  "howToGetThere": "Connecting Petite France to the Krutenau district, immediately downstream from the Barrage Vauban.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free.",
                  "website": "https://www.visitstrasbourg.fr/en/things-to-do/visiting/must-see-sites-and-monuments/the-ponts-couverts-covered-bridges/"
            }
      },
      {
            "name": "Place Kléber",
            "description": "Place Kléber is the largest and most central square in Strasbourg, a bustling hub of city life. Named after the French Revolutionary general Jean-Baptiste Kléber, whose statue stands in the center, it's a popular meeting point for locals and a center for shopping and events. The square is lined with elegant historic buildings, including the Aubette, a neoclassical masterpiece that once housed military facilities and is now a shopping center.\n\nDuring winter, Place Kléber is the heart of the Christmas Market, hosting the magnificent Great Christmas Tree. In summer, its fountains provide a refreshing respite. It's the perfect place to people-watch from a cafe terrace or begin a shopping spree along the nearby Rue des Grandes Arcades.",
            "practicalInfo": {
                  "howToGetThere": "In the center of the Grande Île. The 'Homme de Fer' tram hub is just a block away.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free.",
                  "website": "https://noel.strasbourg.eu/en/place-kleber"
            }
      },
      {
            "name": "Batorama Boat Tours",
            "description": "Seeing Strasbourg from the water offers a completely different and enchanting perspective. Batorama runs glass-canopy boats that navigate the River Ill, providing a comprehensive tour of the city's most important sights. The 70-minute tour circles the Grande Île, gliding through the locks of Petite France, past the Ponts Couverts and Barrage Vauban, before heading towards the Neustadt (German Quarter) and the European Quarter.\n\nAudio guides are available in multiple languages, providing historical and architectural commentary along the way. Whether you choose an open-air or covered boat, it’s a relaxing and highly informative way to orient yourself and appreciate the city's unique layout and stunning riverside architecture.",
            "practicalInfo": {
                  "howToGetThere": "The main ticket office and departure point is near the Palais Rohan, close to the cathedral.",
                  "openingHours": "Tours run year-round, with frequent departures from roughly 9:45 AM to 9:00 PM in peak season. Fewer tours in winter.",
                  "cost": "Around €14.50 for adults.",
                  "website": "https://www.batorama.com/en"
            }
      },
      {
            "name": "Strasbourg Christmas Market (Christkindelsmärik)",
            "description": "Known as the 'Capital of Christmas,' Strasbourg hosts one of the oldest and most famous Christmas markets in Europe, dating back to 1570. From late November until the end of December, the entire city center transforms into a winter wonderland. Hundreds of wooden chalets spread across various squares, selling handcrafted gifts, ornaments, and delicious Alsatian holiday treats.\n\nThe atmosphere is magical, with twinkling lights, the scent of mulled wine (vin chaud) and gingerbread, and carolers filling the air. Key market locations include Place de la Cathédrale, Place Broglie (the historic Christkindelsmärik), and Place Kléber with its giant Christmas tree. It's a truly unforgettable experience, but be prepared for large crowds.",
            "practicalInfo": {
                  "howToGetThere": "Markets are spread throughout the Grande Île, all accessible by foot.",
                  "openingHours": "Late November to late December. Generally 11:00 AM - 8:00 PM daily (later on weekends).",
                  "cost": "Free to browse; costs vary for food, drinks, and shopping.",
                  "website": "https://noel.strasbourg.eu/en/les-marches-de-noel"
            }
      },
      {
            "name": "Maison Kammerzell",
            "description": "Located on the Place de la Cathédrale, Maison Kammerzell is the most famous and ornate building in Strasbourg, aside from the cathedral itself. This stunning example of German Renaissance architecture features an intricately carved timber-frame facade depicting biblical, mythological, and historical scenes. The ground floor is stone and dates from 1427, while the three upper floors with their 75 windows were added in the 16th century.\n\nOnce a merchant's house, it now houses a prestigious hotel and restaurant, famous for its Alsatian specialty: choucroute aux trois poissons (sauerkraut with three types of fish). Even if you don't dine there, it's worth taking time to admire its incredible exterior detail and snap a few photos.",
            "practicalInfo": {
                  "howToGetThere": "On Place de la Cathédrale, impossible to miss.",
                  "openingHours": "Exterior can be viewed 24/7. Restaurant has regular dining hours.",
                  "cost": "Free to view the exterior.",
                  "website": "https://www.maison-kammerzell.com/en/"
            }
      },
      {
            "name": "Musée d'Art Moderne et Contemporain (MAMCS)",
            "description": "Housed in a large, sleek glass building on the banks of the River Ill, the Museum of Modern and Contemporary Art stands in stark contrast to the historic architecture of Petite France just across the water. Its vast collection covers the period from 1870 to the present day, with significant works from Impressionism, Art Nouveau, Surrealism, and beyond.\n\nThe museum features works by masters like Monet, Picasso, Kandinsky, and Magritte, but also has a strong focus on artists from the region, including Gustave Doré. The spacious galleries, excellent library, and rooftop cafe with views of the city make it a fantastic cultural destination for art lovers.",
            "practicalInfo": {
                  "howToGetThere": "Located at 1 Place Hans-Jean-Arp. The 'Musée d'Art Moderne' tram stop (Lines B, F) is right outside.",
                  "openingHours": "10:00 AM - 6:00 PM. Closed on Mondays.",
                  "cost": "Around €7.50.",
                  "website": "https://www.musees.strasbourg.eu/en/museum-of-modern-and-contemporary-art"
            }
      },
      {
            "name": "Cave Historique des Hospices de Strasbourg",
            "description": "Hidden beneath the city's civil hospital lies a truly unique historical treasure: a wine cellar founded in 1395. This cellar was created to store wine, which was often donated by citizens or accepted as a form of payment for care. For centuries, the hospital produced and sold its own wine to fund its operations.\n\nToday, you can visit this atmospheric cellar, wander past giant, ancient oak barrels, and even see a barrel containing what is claimed to be the oldest barrel-stored white wine in the world, dating from 1472. The cellar now ages wines from select local producers, which are available for tasting and purchase. It's a fascinating intersection of medical, social, and oenological history.",
            "practicalInfo": {
                  "howToGetThere": "Located at 1 Place de l'Hôpital. A 10-minute walk from the city center or take Tram A/D to 'Porte de l'Hôpital'.",
                  "openingHours": "Monday-Friday 8:30 AM - 12:00 PM & 1:30 PM - 5:30 PM. Saturday 9:00 AM - 12:30 PM. Closed Sunday.",
                  "cost": "Free to visit. Tastings may have a fee.",
                  "website": "https://www.vins-des-hospices-de-strasbourg.fr/en/"
            }
      },
      {
            "name": "Jardin des Deux Rives / Garten der zwei Ufer",
            "description": "Symbolizing Franco-German friendship, the Garden of Two Shores is a unique public park that spans the Rhine River, connecting Strasbourg in France with Kehl in Germany. A stunning pedestrian and cyclist bridge, the Passerelle des Deux Rives, links the two halves of the park, allowing you to walk from one country to another in just a few minutes.\n\nThe park features contemporary landscaping, open lawns, play areas, and an observation tower on the German side offering great views. It hosts various cultural events and festivals throughout the year. It's a perfect spot for a bike ride, a picnic, and to experience the modern, borderless spirit of Europe firsthand.",
            "practicalInfo": {
                  "howToGetThere": "On the eastern edge of Strasbourg. Take Bus 2 from the 'Ponts Couverts' to the 'Jardin des Deux Rives' stop.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free.",
                  "website": "https://www.visitstrasbourg.fr/en/things-to-do/leisure-activities-and-relaxation/nature-escapes/le-jardin-des-deux-rives/"
            }
      }
]}
      logistics={{
      "gettingAround": "Strasbourg is wonderfully walkable, especially the central Grande Île. For longer distances, the CTS public transport network is excellent, with a modern and efficient tram system being the best option. You can buy tickets at machines at every stop. Biking is also extremely popular and safe, with dedicated lanes throughout the city; use the Vélhop bike-sharing system for easy rentals.",
      "whereToStay": "For ultimate charm, stay in La Petite France, where you'll find boutique hotels like Hôtel & Spa Le Bouclier d'Or amidst the canals. For centrality and convenience, the Grande Île near the Cathedral is ideal, with options like Hôtel Cour du Corbeau. The Neustadt (German Quarter) offers elegant, spacious buildings and a quieter atmosphere. For budget travelers, areas around the train station offer more affordable hotels.",
      "bestTimeToVisit": "Spring (April-June) and autumn (September-October) offer pleasant weather and fewer crowds than summer. Summer (July-August) is warm and vibrant with many festivals, but it's peak tourist season. Winter (late November-December) is magical due to the world-famous Christmas Markets, but be prepared for cold weather and book accommodation far in advance.",
      "suggestedItinerary": "Day 1: Explore the Grande Île. Start at the Cathédrale Notre-Dame, climb the tower, then visit Palais Rohan. Wander through the charming streets of La Petite France, see the Ponts Couverts, and get a panoramic view from the Barrage Vauban. Enjoy dinner at a traditional winstub.\nDay 2: European & German Quarters. Take a Batorama boat tour in the morning for an overview. Then, head to the European Quarter to see the Parliament. In the afternoon, relax at the Parc de l'Orangerie. Explore the grand architecture of the Neustadt (German Quarter).\nDay 3: Culture & Cuisine. Visit the Musée Alsacien in the morning to understand local history. Discover the unique Cave Historique des Hospices for a wine tasting. Spend the afternoon at the Musée d'Art Moderne et Contemporain (MAMCS) or go shopping around Place Kléber."
}}
      faqs={[
      {
            "question": "Is Strasbourg expensive?",
            "answer": "Strasbourg can be moderately expensive, comparable to other major French cities but generally cheaper than Paris. Accommodation prices peak during the Christmas Market season and European Parliament sessions. Dining can range from affordable bakeries and winstubs (traditional Alsatian taverns) to high-end restaurants. Many attractions like parks and viewing the cathedral exterior are free, and using public transport is cost-effective."
      },
      {
            "question": "How many days do you need in Strasbourg?",
            "answer": "Two to three days are sufficient to see the main highlights of Strasbourg, including the Grande Île, the cathedral, a museum or two, and a boat tour. If you want to explore more deeply, visit multiple museums, enjoy the parks at a leisurely pace, or take a day trip into the Alsace Wine Route, extending your stay to four or five days is recommended."
      },
      {
            "question": "Is Strasbourg safe?",
            "answer": "Strasbourg is a very safe city for tourists. The city center and main tourist areas are well-policed and generally safe to walk around day and night. Standard precautions should be taken: be aware of your surroundings, especially in crowded areas like markets or public transport, to avoid pickpocketing. Emergency services are reliable and responsive."
      },
      {
            "question": "What is Strasbourg famous for?",
            "answer": "Strasbourg is most famous for being the 'Capital of Christmas' due to its historic and sprawling Christmas markets. It's also renowned for its stunning Cathédrale Notre-Dame, the picturesque La Petite France district, and its unique Alsatian culture and cuisine (like choucroute and tarte flambée). Additionally, it is a formal seat of the European Parliament, making it a major center for European diplomacy."
      }
]}
    />
  );
};