import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Algiers: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Algiers, Algeria (2025 Guide)"
      description="Clinging to the hillsides above the Mediterranean, Algiers is a city of captivating contrasts. Known as 'Algiers the White' (El-Behdja) for its gleaming white buildings, this historic capital blends a labyrinthine Ottoman-era Casbah with grand French colonial boulevards. Its rich history unfolds at every turn, from ancient mosques to revolutionary monuments. The sea breeze whispers tales of pirates, colonizers, and freedom fighters, while the aroma of strong coffee fills the air. A journey here is a deep dive into North African culture, art, and resilience. To truly experience its soul, you must explore its winding alleys, grand museums, and vibrant public spaces. This guide will navigate you through the very best things to do in Algiers, revealing a city that is as complex as it is beautiful."
      highlights={[
      "The Casbah of Algiers",
      "Notre Dame d'Afrique",
      "Jardin d'Essai du Hamma",
      "Martyrs' Memorial (Maqam Echahid)",
      "Bardo National Museum of Prehistory and Ethnography"
]}
      attractions={[
      {
            "name": "The Casbah of Algiers",
            "description": "A UNESCO World Heritage site, the Casbah is the historical heart of Algiers. This ancient, walled citadel is a maze of narrow, winding streets, steep stairways, and beautiful Ottoman-era houses. Getting lost in its alleys is part of the experience, discovering hidden fountains, traditional bakeries, and workshops where artisans practice age-old crafts. The atmosphere is thick with history, offering a glimpse into life in Algiers before the French colonial era.\n\nDue to its complex layout, hiring an official local guide is highly recommended to navigate its labyrinthine paths and fully appreciate the historical significance of key sites within, such as the Dar Hassan Pacha and the various mosques. It’s a living, breathing neighborhood that represents the soul of the city.",
            "practicalInfo": {
                  "howToGetThere": "Located in the heart of old Algiers, accessible on foot from the city center. The main entrances are near Place des Martyrs.",
                  "openingHours": "Open 24/7 as it is a residential area, but it's best to visit during daylight hours (9:00 AM - 5:00 PM).",
                  "cost": "Free to wander, but hiring a guide will have a fee (recommended).",
                  "website": "https://whc.unesco.org/en/list/565"
            }
      },
      {
            "name": "Notre Dame d'Afrique",
            "description": "Perched on a cliff overlooking the Bay of Algiers, this stunning basilica is a symbol of religious coexistence and a testament to the city's diverse history. Completed in 1872, its Romano-Byzantine architecture is magnificent, but its true highlight is the panoramic view of the sea and the city below. \n\nInside, you'll find intricate mosaics and a notable inscription behind the altar that reads, 'Notre Dame d'Afrique priez pour nous et pour les Musulmans' ('Our Lady of Africa, pray for us and for the Muslims'). It's a peaceful and moving place, best visited late in the afternoon to catch the spectacular sunset.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Z'Ghara neighborhood. A taxi is the easiest option. There's also a cable car (téléphérique) from Bologhine that offers a scenic ride up.",
                  "openingHours": "Typically 11:00 AM - 12:30 PM and 3:00 PM - 5:30 PM daily. Check locally for prayer times.",
                  "cost": "Free admission.",
                  "website": "http://notre-dame-afrique.org/"
            }
      },
      {
            "name": "Jardin d'Essai du Hamma",
            "description": "A lush, tropical oasis in the heart of the city, the Jardin d'Essai is one of the world's most beautiful botanical gardens. Established in 1832, it served as a test garden (jardin d'essai) for new plant species. The garden is split into two distinct styles: a formal French garden with neat flowerbeds and fountains, and a wilder English-style garden with towering palm trees, bamboo groves, and giant banyan trees.\n\nIt’s a perfect escape from the city's hustle and bustle. The garden is so picturesque that it was one of the filming locations for the 1932 movie 'Tarzan the Ape Man'. Spend a few hours strolling its shaded pathways and admiring the incredible biodiversity.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Hamma district. Accessible via the Algiers Metro (Jardin d'Essai station) or by taxi.",
                  "openingHours": "Daily from 10:00 AM to sunset (closing times vary by season).",
                  "cost": "A small entrance fee applies (approx. 150-200 DZD).",
                  "website": "http://www.jardindessai.dz/"
            }
      },
      {
            "name": "Martyrs' Memorial (Maqam Echahid)",
            "description": "This iconic monument dominates the Algiers skyline and is a powerful symbol of Algeria's struggle for independence. Inaugurated in 1982, the memorial consists of three massive concrete palm fronds sheltering an 'eternal flame.' Each frond represents a stage of Algeria's long fight for freedom. \n\nLocated on a hill, it offers breathtaking panoramic views of the entire city and the bay. Beneath the monument are the El Madania shopping center and the National Museum of the Moudjahid, which is dedicated to the history of the resistance against colonialism. It's a must-visit for understanding modern Algeria's identity.",
            "practicalInfo": {
                  "howToGetThere": "Located in the El Madania municipality. Best reached by taxi or the cable car from the Jardin d'Essai.",
                  "openingHours": "The monument grounds are open 24/7. The museum has specific hours (typically 9:00 AM - 5:00 PM).",
                  "cost": "Free to view the monument. An entrance fee is required for the museum.",
                  "website": "N/A"
            }
      },
      {
            "name": "Bardo National Museum of Prehistory and Ethnography",
            "description": "Housed in a magnificent restored Ottoman villa, the Bardo Museum is as much an architectural treasure as it is a historical one. The building itself, with its tranquil courtyard, beautiful tilework, and carved wooden ceilings, is worth the visit alone. \n\nThe museum's collection takes you on a journey through Algeria's deep past, from prehistoric fossils and rock carvings found in the Sahara to fascinating ethnographic displays of Tuareg jewelry, traditional costumes, and Berber pottery. It provides incredible context for the diverse cultures that have shaped Algeria over millennia.",
            "practicalInfo": {
                  "howToGetThere": "Located in Algiers Center, at 3 Avenue Franklin Roosevelt. It's a short walk or taxi ride from most central locations.",
                  "openingHours": "Tuesday-Sunday, 9:00 AM - 5:00 PM (may vary). Closed on Mondays.",
                  "cost": "A small entrance fee is required.",
                  "website": "http://www.musee-bardo.dz/"
            }
      },
      {
            "name": "Grande Poste d'Alger",
            "description": "A stunning example of French-designed Neo-Moorish architecture, the Grande Poste is one of Algiers' most iconic landmarks. Built in 1910, its brilliant white facade, elegant arches, and intricate tilework make it a photographer's dream. \n\nWhile it long served as a functioning post office, it has been recently converted into a museum of postal and telecommunications history. Even if you don't go inside, stopping to admire its exterior architecture is a quintessential Algiers experience. It stands proudly at the intersection of the old town and the new, marking a key point in the city's layout.",
            "practicalInfo": {
                  "howToGetThere": "Centrally located on the Boulevard Mohamed Khemisti in Algiers Center. Easily accessible on foot.",
                  "openingHours": "Museum hours typically apply, usually around 10:00 AM - 6:00 PM. Check locally for current status.",
                  "cost": "An entrance fee may apply for the museum.",
                  "website": "N/A"
            }
      },
      {
            "name": "Ketchaoua Mosque",
            "description": "Situated at the foot of the Casbah, the Ketchaoua Mosque is a building with a complex and layered history. Originally built in the 17th century during Ottoman rule, it was controversially converted into the Cathedral of St. Philippe by the French in 1845, before being returned to its original purpose as a mosque after Algeria's independence in 1962.\n\nThis history is reflected in its unique blend of Moorish and Byzantine architectural styles. After extensive restoration with Turkish funding, the mosque has been returned to its former glory. Its historical significance and beautiful architecture make it a key site for understanding the city's turbulent past.",
            "practicalInfo": {
                  "howToGetThere": "Located in the lower Casbah, near Place des Martyrs. Easily accessible on foot from the city center.",
                  "openingHours": "Open for prayer times. Non-Muslims may be able to visit outside of these times, but it's best to check with the guards. Modest dress is required.",
                  "cost": "Free.",
                  "website": "N/A"
            }
      },
      {
            "name": "Le Bastion 23 - Palais des Raïs",
            "description": "This remarkable complex consists of several interconnected Ottoman-era palaces and houses built right on the seafront. It served as a residence for the Dey (the Ottoman ruler) and other dignitaries, as well as a defensive bastion for the port. It's one of the last surviving quarters of the lower Casbah.\n\nA walk through Bastion 23 feels like stepping back in time. You can explore the various courtyards, opulent rooms with original tilework, and wooden balconies overlooking the Mediterranean. It offers a fascinating insight into the lavish lifestyle of Algiers' rulers centuries ago.",
            "practicalInfo": {
                  "howToGetThere": "Located on the waterfront, just below the Casbah. Address: 23 Boulevard Amara Rachid, Bab El Oued.",
                  "openingHours": "Tuesday-Sunday, 10:00 AM - 5:00 PM (may vary). Closed on Mondays.",
                  "cost": "A small entrance fee is charged.",
                  "website": "http://www.palaisdesrais-bastion23.dz/"
            }
      },
      {
            "name": "Museum of Modern Art of Algiers (MAMA)",
            "description": "For a dose of contemporary culture, head to MAMA. Housed in a beautifully converted former department store, Galeries de France, the museum itself is a work of art with a stunning atrium and sweeping staircases. It's a stark contrast to the historical sites that dominate the city.\n\nMAMA showcases a dynamic range of modern and contemporary art from Algerian and international artists. The exhibitions are often thought-provoking, covering themes of identity, history, and social change. It's a vibrant space that reflects the pulse of modern Algeria's creative scene.",
            "practicalInfo": {
                  "howToGetThere": "Located at 25 Rue Larbi Ben M'hidi in Algiers Center.",
                  "openingHours": "Saturday-Thursday, 10:00 AM - 7:00 PM. Closed on Fridays.",
                  "cost": "Entrance fee is usually very modest.",
                  "website": "http://www.mama-dz.com/"
            }
      },
      {
            "name": "National Museum of Fine Arts of Algiers",
            "description": "Overlooking the Jardin d'Essai, this is one of the largest art museums in Africa. Its vast collection includes Algerian works from the 19th and 20th centuries, giving visitors a fantastic overview of the country's artistic evolution, including Orientalist paintings and works from the independence era. \n\nThe museum also boasts an impressive collection of European masters, including works by Delacroix, Renoir, and Monet. The building itself is a grand structure offering lovely views of the gardens below, making it a perfect cultural stop to combine with a visit to the Jardin d'Essai.",
            "practicalInfo": {
                  "howToGetThere": "Located next to the Jardin d'Essai in the Hamma district. Use the same metro stop or take a taxi.",
                  "openingHours": "Tuesday-Sunday, 9:00 AM - 5:00 PM. Closed on Mondays.",
                  "cost": "A small entrance fee applies.",
                  "website": "http://www.musee-des-beaux-arts.dz/"
            }
      },
      {
            "name": "Djamaa el Djedid",
            "description": "Known as the 'New Mosque' despite dating back to 1660, this Ottoman mosque is a prominent landmark on the waterfront near Place des Martyrs. Its architectural style is unique, blending Byzantine, Italian, and Andalusian influences with its traditional Ottoman roots. Its most striking feature is the large, white ovoid dome and a distinctive square minaret that was originally designed as a clock tower.\n\nWhile non-Muslim visitors are generally not permitted inside, its exterior is highly photogenic and its presence is central to the identity of the old city's port area. It stands as a beautiful example of the diverse cultural influences that have shaped Algiers over the centuries.",
            "practicalInfo": {
                  "howToGetThere": "Located at Place des Martyrs in the lower Casbah area.",
                  "openingHours": "Exterior can be viewed at any time. Interior access is for worshippers only.",
                  "cost": "Free to view from the outside.",
                  "website": "N/A"
            }
      },
      {
            "name": "Sidi Fredj Peninsula",
            "description": "For a break from the dense city, the Sidi Fredj (Sidi Ferruch) peninsula offers a seaside resort atmosphere. Historically, this is where the French forces landed in 1830, marking the beginning of the colonization of Algeria. Today, it's a popular spot for locals looking to relax.\n\nThe peninsula features a marina filled with yachts, several hotels, restaurants, and small public beaches. It's a pleasant place for a waterfront stroll, a seafood lunch, or simply to enjoy the Mediterranean breeze. While not a primary historical destination, it provides a different, more modern perspective on coastal life in Algiers.",
            "practicalInfo": {
                  "howToGetThere": "Located about 30 km west of Algiers city center. Best reached by car or taxi.",
                  "openingHours": "Accessible 24/7.",
                  "cost": "Free to visit.",
                  "website": "N/A"
            }
      },
      {
            "name": "Rue Didouche Mourad",
            "description": "This is the main artery of modern Algiers, a bustling boulevard lined with Haussmann-style buildings that give it a distinctly Parisian feel. It's the city's primary commercial and shopping street, packed with boutiques, international brands, bookstores, and historic cinemas.\n\nThe wide, tree-lined sidewalks are perfect for a stroll, people-watching from a cafe terrace, and soaking up the vibrant, cosmopolitan atmosphere of downtown Algiers. It’s a place where the city's past and present merge, with historic buildings now housing modern businesses. It's the perfect place to feel the city's energy.",
            "practicalInfo": {
                  "howToGetThere": "Runs through the heart of Algiers Center. Easily accessible on foot from anywhere downtown.",
                  "openingHours": "Shops are generally open from 9:00 AM - 7:00 PM. The street is always active.",
                  "cost": "Free to walk. Shopping and dining costs vary.",
                  "website": "N/A"
            }
      },
      {
            "name": "Tipaza Roman Ruins",
            "description": "While not in Algiers itself, the Roman ruins at Tipaza are an essential day trip. Located about 70km west of the capital, this UNESCO World Heritage site features the stunning remains of a Roman port city set against the brilliant blue of the Mediterranean Sea. You can wander through the remnants of basilicas, a forum, a theater, and villas, all with an incredible coastal backdrop.\n\nThe combination of ancient history and natural beauty is breathtaking. It's a peaceful and evocative site that offers a profound contrast to the energy of Algiers. Plan for at least half a day to explore the ruins and enjoy the charming nearby port town.",
            "practicalInfo": {
                  "howToGetThere": "Best reached by hiring a private taxi for the day or taking a shared taxi (taxi collectif) from Algiers. The journey takes about 1-1.5 hours.",
                  "openingHours": "Daily from 9:00 AM until sunset.",
                  "cost": "There is an entrance fee for the archaeological park.",
                  "website": "https://whc.unesco.org/en/list/193"
            }
      },
      {
            "name": "Villa Abd-el-Tif",
            "description": "Nestled above the Jardin d'Essai, the Villa Abd-el-Tif is a stunning 18th-century Moorish palace. For much of the 20th century, it served as a prestigious artist's residence, a North African counterpart to the Villa Medici in Rome, hosting recipients of the Prix Abd-el-Tif.\n\nToday, it has been restored and houses the Algerian Agency for Cultural Influence (AARC). While public access can be limited and often restricted to cultural events or special exhibitions, its beautiful architecture, tranquil courtyards, and lush gardens are worth seeing if the opportunity arises. Its history is deeply intertwined with the Algerian art scene.",
            "practicalInfo": {
                  "howToGetThere": "Located above the Jardin d'Essai. It's best to take a taxi.",
                  "openingHours": "Access is often restricted. Check with local tourist offices or the AARC for information on exhibitions or open days.",
                  "cost": "Varies depending on the event.",
                  "website": "https://www.aarcalgerie.org/"
            }
      }
]}
      logistics={{
      "gettingAround": "Walking is excellent for exploring central Algiers and the Casbah. For longer distances, the Algiers Metro and tramway are modern and efficient. Taxis are plentiful; use the ride-hailing app Yassir for convenience and transparent pricing. The city's iconic white-and-blue taxis are also available, but agree on a fare beforehand.",
      "whereToStay": "Algiers Center is ideal for first-time visitors, with easy access to attractions like the Grande Poste and Rue Didouche Mourad. The upscale neighborhood of Hydra is home to many embassies and high-end restaurants. For a resort feel, consider the Sidi Fredj peninsula. Recommended hotels include the Sofitel Algiers Hamma Garden for luxury, Hotel El-Djazair for history, and the more modern ST Hotel.",
      "bestTimeToVisit": "The best times to visit Algiers are during the spring (March to May) and autumn (September to November). During these seasons, the weather is pleasantly warm and sunny, perfect for exploring the city on foot. Summers (June to August) can be very hot and humid, while winters are mild but can be rainy.",
      "suggestedItinerary": "Day 1: Immerse yourself in history. Start at the foot of the Casbah with the Ketchaoua Mosque and Place des Martyrs. Hire a guide to explore the Casbah's alleys, visiting Bastion 23. End the day with a sunset view from Notre Dame d'Afrique.\nDay 2: Explore French-colonial and modern Algiers. Admire the Grande Poste, stroll down Rue Didouche Mourad, then visit the Bardo Museum and the Museum of Modern Art (MAMA).\nDay 3: Focus on nature and monuments. Spend the morning in the tranquil Jardin d'Essai du Hamma, then take the cable car up to the Martyrs' Memorial for panoramic city views and a visit to the museum below."
}}
      faqs={[
      {
            "question": "Is Algiers expensive?",
            "answer": "Algiers can be considered moderately priced. It is generally more affordable than major Western European cities but can be more expensive than other destinations in North Africa. Accommodation, especially in international chain hotels, can be a significant expense. However, food from local restaurants, public transportation, and taxi fares are very reasonable. You can travel on a budget by eating at local eateries and using public transport."
      },
      {
            "question": "How many days do you need in Algiers?",
            "answer": "To comfortably see the main sights of Algiers city, 3 full days is a good amount of time. This allows you to explore the Casbah, the city center, the main museums, and monuments without rushing. If you plan to take a day trip to the Roman ruins of Tipaza (which is highly recommended), you should plan for 4 days."
      },
      {
            "question": "Is Algiers safe?",
            "answer": "Algiers is generally a safe city for tourists, but it's important to exercise the same precautions you would in any large city. Be aware of your surroundings, especially in crowded places like markets and the Casbah to avoid pickpocketing. Hiring an official guide for the Casbah is recommended not just for safety but also to avoid getting lost. Violent crime against tourists is rare. It's advisable to dress modestly out of respect for the local culture."
      },
      {
            "question": "What is Algiers famous for?",
            "answer": "Algiers is famous for several key things. Primarily, its UNESCO World Heritage-listed Casbah, a historic Islamic citadel with maze-like streets. It's also renowned for its stunning French colonial architecture, earning it the nickname 'Algiers the White'. The city is known for its dramatic setting on the Mediterranean coast and for powerful landmarks like the Martyrs' Memorial, which symbolizes the country's fight for independence."
      }
]}
    />
  );
};