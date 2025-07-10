import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Bordeaux: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Bordeaux, France (2025 Guide)"
      description="Here's what I didn't expect about Bordeaux: it's not just about wine. I mean, yes, the wine is exceptional—this is the Bordeaux we're talking about. But the city itself is this gorgeous, golden-stone beauty that somehow manages to feel both grand and approachable at the same time. They used to call it 'Sleeping Beauty,' which seems a bit unfair now because this place is anything but sleepy. The entire historic center is a UNESCO site, which usually makes me nervous about tourist traps, but Bordeaux has managed to stay authentic while still showing off. The 18th-century buildings along the river are stunning, especially when they're reflected in that massive water mirror—yes, the world's largest reflecting pool, because of course the French would do something like that. What really gets me about Bordeaux is how it doesn't take itself too seriously despite being, objectively, quite serious indeed. You can spend the morning touring world-famous vineyards and the afternoon wandering through neighborhoods that feel lived-in and real. The food scene is incredible, the architecture is Instagram-worthy without trying, and everyone seems genuinely pleased that you've come to visit."
      highlights={[
      "Place de la Bourse & Miroir d'eau",
      "La Cité du Vin",
      "Cathédrale Saint-André de Bordeaux",
      "A Wine Tour to Saint-Émilion",
      "Grand Théâtre de Bordeaux"
]}
      attractions={[
      {
            "name": "Place de la Bourse & Miroir d'eau",
            "description": "The Place de la Bourse is the quintessential image of Bordeaux. This magnificent 18th-century square, designed by royal architect Ange-Jacques Gabriel, opens majestically onto the Garonne River, symbolizing the city's prosperity. Its harmonious classical facades are a testament to Bordeaux's golden age.\n\nFacing the square is the Miroir d'eau (Water Mirror), the world's largest reflecting pool. This modern marvel creates a breathtaking spectacle, alternating between a shallow pool that perfectly mirrors the Place de la Bourse and a thick mist that envelops visitors. It's a favorite spot for locals and tourists alike, especially on warm days and at night when the buildings are illuminated.",
            "practicalInfo": {
                  "howToGetThere": "Located on the riverside quay. Accessible via Tram C or D (stop: Place de la Bourse).",
                  "openingHours": "The square is open 24/7. The Miroir d'eau operates most of the year, typically from 10:00 AM to 10:00 PM, with cycles of water and mist.",
                  "cost": "Free",
                  "website": "www.bordeaux-tourism.co.uk"
            }
      },
      {
            "name": "La Cité du Vin",
            "description": "A bold architectural statement on the banks of the Garonne, La Cité du Vin is a must-visit for anyone interested in wine, not just from Bordeaux but from around the world. Its shimmering, decanter-shaped structure houses an immersive and interactive museum dedicated to the culture and history of wine across civilizations.\n\nThe high-tech exhibits engage all your senses, making it an educational and entertaining experience for both connoisseurs and novices. The visit culminates in the Belvedere on the 8th floor, where you can enjoy a glass of wine while taking in 360-degree panoramic views of Bordeaux and the river.",
            "practicalInfo": {
                  "howToGetThere": "Tram B (stop: La Cité du Vin), or by the Bat3 river shuttle.",
                  "openingHours": "Daily 10:00 AM - 7:00 PM (hours can vary by season).",
                  "cost": "Approx. €22 for the permanent exhibition and a tasting at the Belvedere.",
                  "website": "www.laciteduvin.com"
            }
      },
      {
            "name": "Cathédrale Saint-André de Bordeaux",
            "description": "Bordeaux Cathedral, or Cathédrale Saint-André, is a monumental Gothic masterpiece and a central landmark in the city. Originally consecrated in 1096, most of the stunning structure you see today dates from the 14th and 15th centuries. It has hosted significant historical events, including two royal weddings. The intricate stone carvings of the Royal Portal are particularly noteworthy.\n\nInside, the vast nave, impressive stained-glass windows, and collection of religious art create a serene and awe-inspiring atmosphere. The cathedral's separate bell tower, the Tour Pey-Berland, stands beside it and offers one of the best views over the city for those willing to climb its 233 steps.",
            "practicalInfo": {
                  "howToGetThere": "Tram A or B (stop: Hôtel de Ville).",
                  "openingHours": "Generally 10:00 AM - 12:00 PM & 2:00 PM - 6:00 PM. Closed Monday mornings. Hours may vary for services.",
                  "cost": "Free to enter the cathedral. A fee (approx. €6) applies for climbing the Tour Pey-Berland.",
                  "website": "www.cathedrale-bordeaux.fr"
            }
      },
      {
            "name": "A Wine Tour to Saint-Émilion",
            "description": "While there is much to see in Bordeaux city, a trip to the surrounding vineyards is essential. The charming medieval village of Saint-Émilion, a UNESCO World Heritage site, is one of the most popular and picturesque destinations. Perched on a limestone hill, it's a maze of steep, cobbled streets, wine shops (caves), and ancient ruins, including a unique monolithic church carved from a single rock.\n\nNumerous tour operators offer half-day or full-day excursions from Bordeaux that typically include transportation, guided tours of the village, and tastings at one or two prestigious wine châteaux. It's the perfect way to understand the concept of 'terroir' and taste the Merlot-dominant blends for which the region is famed.",
            "practicalInfo": {
                  "howToGetThere": "By organized tour from Bordeaux, or by train from Gare Saint-Jean to Saint-Émilion (approx. 40 mins).",
                  "openingHours": "Tours and châteaux opening times vary. Booking in advance is highly recommended.",
                  "cost": "Half-day tours start from approx. €50-€90 per person.",
                  "website": "www.saint-emilion-tourisme.com"
            }
      },
      {
            "name": "Grand Théâtre de Bordeaux",
            "description": "Considered one of the most beautiful 18th-century theatres in the world, the Grand Théâtre is the cultural jewel of Bordeaux. Designed by architect Victor Louis, its magnificent neoclassical facade features 12 Corinthian columns topped with statues of the nine Muses and three goddesses. It's a focal point of the Place de la Comédie and the heart of the city's 'Golden Triangle'.\n\nEven if you don't attend a performance by the Opéra National de Bordeaux or the Ballet National de Bordeaux, it's worth admiring from the outside or taking a guided tour. The grand staircase and the opulent, blue-and-gold auditorium are breathtaking, offering a glimpse into the lavish world of 18th-century high society.",
            "practicalInfo": {
                  "howToGetThere": "Tram B (stop: Grand Théâtre).",
                  "openingHours": "Guided tours are available on specific days (usually Wednesdays and Saturdays), check the website. Box office hours vary.",
                  "cost": "Free to view from outside. Guided tours approx. €8. Performance tickets vary widely.",
                  "website": "www.opera-bordeaux.com"
            }
      },
      {
            "name": "Grosse Cloche",
            "description": "The Grosse Cloche (Great Bell) is one of the oldest belfries in France and a beloved symbol of Bordeaux. This fairytale-like gatehouse, with its two 40-meter circular towers, was once part of the 13th-century city walls and served as the belfry for the old town hall. The massive bell, weighing over 7,750 kg, was rung to mark important events like the start of the grape harvest or to sound alarms.\n\nThe gate is adorned with a golden leopard and a historic clock. It marks the entrance to the vibrant Saint-Paul district. Visitors can take guided tours to climb inside the tower, see the bell up close, and learn about its fascinating history as both a civic symbol and a former prison.",
            "practicalInfo": {
                  "howToGetThere": "A short walk from Rue Sainte-Catherine. Nearest tram stop is Musée d'Aquitaine (Tram B).",
                  "openingHours": "Guided tours available June to September, daily 1:00 PM - 7:00 PM. Book at the tourist office.",
                  "cost": "Approx. €5 for a guided tour.",
                  "website": "www.bordeaux-tourism.co.uk/historical-monuments/grosse-cloche"
            }
      },
      {
            "name": "Rue Sainte-Catherine",
            "description": "Stretching for over 1.2 kilometers, Rue Sainte-Catherine is one of the longest pedestrian shopping streets in Europe. It cuts through the heart of the historic center, connecting the Grand Théâtre at one end with the Place de la Victoire at the other. It's the city's commercial artery, bustling with energy from morning until night.\n\nHere you'll find a mix of major international brands, French department stores like Galeries Lafayette, smaller boutiques, and plenty of cafes for a mid-shopping break. Whether you're hunting for fashion, souvenirs, or just want to soak up the lively urban atmosphere, a walk down this iconic street is a must.",
            "practicalInfo": {
                  "howToGetThere": "Accessible from multiple tram stops, including Grand Théâtre (Tram B), Sainte-Catherine (Tram A), and Victoire (Tram B).",
                  "openingHours": "Shops are typically open 10:00 AM - 7:30 PM, Monday to Saturday.",
                  "cost": "Free to browse.",
                  "website": "N/A"
            }
      },
      {
            "name": "Marché des Capucins",
            "description": "Known as 'The Belly of Bordeaux,' the Marché des Capucins is the city's largest and most vibrant covered market. It's a chaotic, wonderful assault on the senses, where locals have shopped for centuries. Under its vast roof, you'll find dozens of stalls overflowing with the region's best produce: fresh vegetables, artisanal cheeses, cured meats, local honey, and, of course, seafood.\n\nOne of the market's highlights is the oyster bars, where you can sample fresh Arcachon Bay oysters with a crisp glass of local white wine for a fantastic price. It's the perfect place for a casual, authentic lunch and a true taste of Bordelais life.",
            "practicalInfo": {
                  "howToGetThere": "Tram B (stop: Victoire) or Tram C (stop: Saint-Michel). A 10-minute walk from Place de la Victoire.",
                  "openingHours": "Tuesday - Sunday, from early morning (approx. 6:00 AM) to around 2:00 PM.",
                  "cost": "Free to enter. Food prices are very reasonable.",
                  "website": "marchedescapucins.com"
            }
      },
      {
            "name": "Quartier des Chartrons",
            "description": "The Chartrons district was once the historic heart of Bordeaux's wine trade, where foreign merchants settled and aged their wine in riverside warehouses. Today, this neighborhood has transformed into one of the city's trendiest areas, blending its rich heritage with a village-like, bohemian-chic vibe.\n\nStroll along Rue Notre Dame, the district's main artery, lined with antique shops, art galleries, independent designer boutiques, and charming cafes. The area is also home to the Musée du Vin et du Négoce (Wine and Trade Museum), which offers a more traditional perspective on the city's wine history compared to La Cité du Vin.",
            "practicalInfo": {
                  "howToGetThere": "Tram B (stop: Chartrons or CAPC) or Tram C (stop: Paul Doumer).",
                  "openingHours": "Boutiques and galleries generally open Tues-Sat, 10:00 AM - 7:00 PM.",
                  "cost": "Free to explore.",
                  "website": "www.bordeaux-tourism.co.uk/discover-bordeauxs-districts/chartrons-bacalan"
            }
      },
      {
            "name": "Pont de Pierre",
            "description": "The 'Stone Bridge' was the first bridge to be built across the Garonne River in Bordeaux, commissioned by Napoleon Bonaparte. Its 17 arches famously correspond to the 17 letters in the emperor's name (Napoléon Bonaparte). Completed in 1822, it was a major engineering feat for its time.\n\nWalking across the Pont de Pierre offers one of the most iconic and beautiful views of the city's waterfront, showcasing the elegant 18th-century facades of the Quai Richelieu. It's particularly stunning at sunrise or in the evening when the city lights reflect on the water. The bridge is now primarily used by pedestrians, cyclists, and the tram, making it a pleasant and scenic route to connect the left and right banks.",
            "practicalInfo": {
                  "howToGetThere": "Connects the city center (near Porte de Bourgogne, Tram A/C/D) to the Bastide district (Tram A, stop: Stalingrad).",
                  "openingHours": "Open 24/7.",
                  "cost": "Free",
                  "website": "N/A"
            }
      },
      {
            "name": "Jardin Public",
            "description": "The Jardin Public is a beautiful green lung in the heart of Bordeaux. Established in 1746 and later redesigned as an English-style park, this 11-hectare oasis offers a peaceful escape from the bustling city. It features rolling lawns, ancient trees, a picturesque lake with swans and ducks, and an enchanting 19th-century carousel.\n\nThe park also houses the city's Natural History Museum and a botanical garden. It's a perfect spot for a leisurely stroll, a family picnic, or simply relaxing on a bench with a book. The serene atmosphere makes it a favorite among locals for jogging and recreation.",
            "practicalInfo": {
                  "howToGetThere": "Tram C (stop: Jardin Public) or Tram D (stop: Fondaudège-Muséum).",
                  "openingHours": "Daily from 7:00 AM to 9:00 PM (seasonal variations apply).",
                  "cost": "Free",
                  "website": "www.bordeaux.fr/p63973/jardin-public"
            }
      },
      {
            "name": "Darwin Ecosystem",
            "description": "For a glimpse into Bordeaux's innovative and alternative side, head across the river to the Darwin Ecosystem. Housed in a former military barracks on the Right Bank, Darwin is a vibrant and sprawling hub of sustainable development and urban culture. It's a place where creativity thrives.\n\nExplore the massive indoor skate park, browse the organic farm shop, admire the constantly evolving street art and graffiti, or grab a meal at Le Magasin Général, one of the largest organic restaurants in France. This dynamic and eco-conscious project perfectly illustrates the modern, forward-thinking spirit of Bordeaux.",
            "practicalInfo": {
                  "howToGetThere": "Take Tram A to 'Stalingrad' and walk 15 minutes along the quay, or take the Bat3 river shuttle to 'Darwin'.",
                  "openingHours": "The area is generally open to walk through daily. Restaurant and shop hours vary.",
                  "cost": "Free to explore.",
                  "website": "darwin.camp"
            }
      },
      {
            "name": "Musée d'Aquitaine",
            "description": "To truly understand Bordeaux and its region, a visit to the Musée d'Aquitaine is essential. This excellent museum traces the rich history of Aquitaine from prehistory to the present day. Its extensive collections are thoughtfully presented, offering deep insights into the area's evolution.\n\nKey exhibits include prehistoric artifacts like the Venus of Laussel, Roman relics, and detailed displays on Bordeaux's medieval past. Crucially, the museum does not shy away from the city's darker history, with powerful exhibits dedicated to its role in the 18th-century transatlantic slave trade, which was fundamental to its wealth. It provides a comprehensive and compelling narrative of the region.",
            "practicalInfo": {
                  "howToGetThere": "Tram B (stop: Musée d'Aquitaine).",
                  "openingHours": "Tuesday - Sunday, 11:00 AM - 6:00 PM. Closed Mondays.",
                  "cost": "Approx. €5 for the permanent collection. Free on the first Sunday of the month (except July and August).",
                  "website": "www.musee-aquitaine-bordeaux.fr"
            }
      },
      {
            "name": "Basilique Saint-Michel & Flèche Saint-Michel",
            "description": "Dominating the skyline of the multicultural Saint-Michel district, this magnificent basilica is a prime example of the Flamboyant Gothic style. Built between the 14th and 16th centuries, it's known for its stunning stained-glass windows and detailed sculptural work. The basilica is a central part of the neighborhood's lively atmosphere, which hosts a sprawling flea market around it every morning.\n\nLike the cathedral, its bell tower, the Flèche Saint-Michel, is a separate, freestanding structure. At 114 meters, it is one of the tallest in France. You can climb the tower for another spectacular panoramic view of the city, particularly over the medieval rooftops of the surrounding district and towards the river.",
            "practicalInfo": {
                  "howToGetThere": "Tram C (stop: Saint-Michel).",
                  "openingHours": "Basilica is open daily. The tower has limited opening hours, typically April-October, check locally.",
                  "cost": "Free to enter the basilica. A fee (approx. €5) applies to climb the tower.",
                  "website": "www.bordeaux-tourism.co.uk"
            }
      },
      {
            "name": "Taste a Canelé at Baillardran",
            "description": "You cannot leave Bordeaux without tasting its signature pastry, the canelé. This small, caramelized cake has a rich, custardy interior flavored with rum and vanilla, all encased in a thick, dark, chewy crust. The unique fluted copper molds used to bake them give them their distinctive shape and texture.\n\nWhile many bakeries sell them, Baillardran is one of the most famous and ubiquitous purveyors, with shops throughout the city, including at the train station and airport. They offer canelés in various sizes. Grabbing one (or a box) is a simple but essential Bordeaux culinary experience. It's the perfect sweet treat to enjoy with an afternoon coffee.",
            "practicalInfo": {
                  "howToGetThere": "Multiple locations throughout the city, including Rue Sainte-Catherine and Gare Saint-Jean.",
                  "openingHours": "Standard retail hours, typically 9:00 AM - 8:00 PM.",
                  "cost": "Approx. €2-€3 per canelé, depending on size.",
                  "website": "www.baillardran.com"
            }
      }
]}
      logistics={{
      "gettingAround": "Bordeaux is a highly walkable city, especially its historic center. For longer distances, the TBM network is excellent, comprising trams (the best way to get around), buses, and a river shuttle (Bat3). The V3 bike-share system is also very popular and affordable, with numerous stations across the city.",
      "whereToStay": "For luxury and central location, stay in the 'Golden Triangle' near the Grand Théâtre. For historic charm and lively restaurants, the Saint-Pierre district is ideal. The Quartier des Chartrons offers trendy, boutique hotels with a village feel. For budget-friendly options, look across the river in the Bastide neighborhood, which is well-connected by tram.",
      "bestTimeToVisit": "The best times to visit Bordeaux are late spring (May-June) and early autumn (September-October). The weather is pleasant, and you avoid the peak summer crowds and heat. September is particularly special as it's the beginning of the wine harvest (les vendanges), creating a buzz throughout the region.",
      "suggestedItinerary": "Day 1: Explore the historic center. Start at Place de la Bourse and the Miroir d'eau, walk through the Saint-Pierre district, see the Grosse Cloche, and climb the Tour Pey-Berland at the Cathédrale Saint-André. Finish with shopping on Rue Sainte-Catherine.\nDay 2: Wine and Culture. Spend the morning at La Cité du Vin, then take a tram to the Chartrons district for lunch and antique shopping.\nDay 3: Local Flavors & Views. Start at the Marché des Capucins for oysters and local life. In the afternoon, cross the Pont de Pierre to explore the Darwin Ecosystem on the Right Bank."
}}
      faqs={[
      {
            "question": "Is Bordeaux expensive?",
            "answer": "Bordeaux is moderately expensive but generally more affordable than Paris. Accommodation and dining can range from budget-friendly to high-end luxury. You can save money by eating at markets like the Marché des Capucins, using the efficient public transport, and enjoying the many free attractions like the Miroir d'eau and public parks. Museum entry is often free on the first Sunday of the month."
      },
      {
            "question": "How many days do you need in Bordeaux?",
            "answer": "Three days is the ideal amount of time to explore the city of Bordeaux itself at a comfortable pace. This allows you to cover the main historic sights, visit a major museum like La Cité du Vin, and explore different neighborhoods. If you are a wine enthusiast and wish to take day trips to vineyard areas like Saint-Émilion and the Médoc, plan for at least five days."
      },
      {
            "question": "Is Bordeaux safe?",
            "answer": "Bordeaux is considered a very safe city for tourists. The city center is well-lit and generally busy. As with any major European city, you should exercise standard precautions. Be mindful of your belongings in crowded areas like Rue Sainte-Catherine, tramways, and markets to avoid pickpockets. Otherwise, walking around both day and night is generally safe."
      },
      {
            "question": "What is Bordeaux famous for?",
            "answer": "Bordeaux is world-famous for its wine. The Bordeaux wine region is one of the largest and most prestigious in the world. The city is also famous for its stunning 18th-century neoclassical architecture, with its historic center designated as a UNESCO World Heritage site. Gastronomically, it's known for local specialties like canelés (pastries), Arcachon Bay oysters, and Pauillac lamb."
      }
]}
    />
  );
};