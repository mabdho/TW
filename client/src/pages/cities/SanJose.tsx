import React from 'react';
import { CityPage } from '../../components/CityPage';

export const SanJose: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in San Jose, Costa Rica (2025 Guide)"}
      description={"Often viewed as a mere gateway to Costa Rica's lush rainforests and pristine beaches, San Jose is a vibrant capital city brimming with its own unique charm and cultural treasures. Nestled in the heart of the Central Valley, 'Chepe,' as it's affectionately known by locals, offers a captivating blend of history, art, and lively urban energy. Beyond the initial hustle, you'll discover magnificent neoclassical architecture, world-class museums showcasing pre-Columbian gold and jade, and bustling markets alive with the colors and flavors of Tico life. This guide will walk you through the very best things to do in San Jose, revealing a city that is not just a stopover, but a destination in its own right. From savoring gourmet coffee to exploring historic neighborhoods, San Jose invites you to dive deep into the soul of Costa Rica before your jungle adventures even begin."}
      highlights={["Teatro Nacional de Costa Rica",
        "Museo del Oro Precolombino",
        "Museo del Jade",
        "Mercado Central",
        "Museo Nacional de Costa Rica"]}
      attractions={[
        {
        name: "Teatro Nacional de Costa Rica (National Theater)",
        description: "Considered the architectural crown jewel of San Jose, the National Theater is a breathtaking masterpiece of neoclassical design. Inaugurated in 1897, its lavish interior is adorned with opulent gold leaf, Italian marble, and stunning ceiling murals, most notably the 'Alegoría al Café y al Banano' which depicts Costa Rica's key exports. The theater was funded by a tax on coffee, underscoring the crop's importance to the nation's history.\n\nTaking a guided tour is highly recommended to appreciate the intricate details and learn about its storied past. You can also catch a performance by the National Symphony Orchestra or other world-class acts. Even if you don't see a show, stopping by its elegant lobby café for a coffee and a pastry is a quintessential San Jose experience, allowing you to soak in the grandiose atmosphere.",
        practicalInfo: {
        howToGetThere: "Located in the heart of downtown San Jose, next to the Plaza de la Cultura. It's easily accessible on foot from most central hotels.",
        openingHours: "Tours generally run daily from 9:00 AM to 5:00 PM. Check the website for performance schedules.",
        cost: "Tour: ~$10-15 USD. Performance tickets vary widely.",
        website: "https://www.teatronacional.go.cr/"
      }
      },
        {
        name: "Museo del Oro Precolombino (Pre-Columbian Gold Museum)",
        description: "Housed in a subterranean building beneath the Plaza de la Cultura, this museum protects one of the most significant collections of pre-Columbian gold artifacts in the Americas. The glittering exhibits showcase over 1,600 pieces, ranging from animal figurines and shamanic amulets to intricate jewelry and warrior breastplates. The displays are thoughtfully curated to explain not just the craftsmanship but also the social and spiritual significance of gold in indigenous cultures.\n\nThe museum also features a numismatic exhibit detailing the history of Costa Rican currency. The underground setting creates a unique, vault-like atmosphere, making the discovery of these ancient treasures feel even more special. It’s a fascinating journey into the cosmology and daily life of the people who inhabited this land long before Spanish arrival.",
        practicalInfo: {
        howToGetThere: "Beneath Plaza de la Cultura, adjacent to the National Theater in downtown San Jose.",
        openingHours: "Daily, 9:15 AM to 5:00 PM.",
        cost: "Foreigners: ~$15 USD. Nationals: ~$8 USD.",
        website: "https://www.museosdelbancocentral.org/"
      }
      },
        {
        name: "Museo del Jade (Jade Museum)",
        description: "Boasting the world's largest collection of American jade, the Jade Museum is a modern architectural marvel that stands in stark contrast to the ancient artifacts it holds. The museum's five floors are organized thematically, guiding visitors through the cultural, ecological, and historical context of jade work in Costa Rica. You'll learn about its use in ceremonial rituals, its role as a status symbol, and the incredible techniques used to carve this notoriously hard stone.\n\nBeyond jade, the museum offers extensive exhibits on other pre-Columbian artifacts, including ceramics, stone tools, and goldwork. Interactive displays and a stunning view of the city from the top floor make this one of the most engaging and comprehensive museums in Central America. It provides a holistic view of the region's rich indigenous heritage.",
        practicalInfo: {
        howToGetThere: "Located on the west side of Plaza de la Democracia, downtown San Jose.",
        openingHours: "Daily, 8:00 AM to 5:00 PM.",
        cost: "Foreigners: ~$16 USD. Nationals: ~$5 USD.",
        website: "https://www.museodeljadeins.com/"
      }
      },
        {
        name: "Mercado Central (Central Market)",
        description: "For a true slice of local life, a visit to the Mercado Central is non-negotiable. Established in 1880, this labyrinthine market is a sensory explosion of sights, sounds, and smells. Navigate its narrow alleyways to find everything from fresh produce, exotic fruits, and aromatic spices to leather goods, traditional crafts, and herbal remedies. It's the perfect place to sample authentic Costa Rican flavors.\n\nDon't leave without trying a 'casado' (a traditional plate of rice, beans, salad, plantains, and a choice of meat) from one of the small eateries known as 'sodas'. For a treat, stop by 'La Sorbetera de Lolo Mora' for a scoop of their famous cinnamon-infused ice cream, a secret recipe that has been passed down for generations. The market is chaotic, vibrant, and utterly authentic.",
        practicalInfo: {
        howToGetThere: "Occupies a full city block between Avenidas Central and 1, and Calles 6 and 8 in downtown San Jose.",
        openingHours: "Monday to Saturday, approximately 6:30 AM to 6:00 PM.",
        cost: "Free to enter. Food and goods are very affordable.",
        website: "N/A"
      }
      },
        {
        name: "Museo Nacional de Costa Rica (National Museum)",
        description: "Housed within the imposing Bellavista Fortress, which still bears bullet holes from the 1948 civil war, the National Museum offers a sweeping overview of Costa Rican history. The fortress itself is a historical artifact, having been an army barracks until the army was abolished. The museum's exhibits guide you chronologically from pre-Columbian times through the colonial period, independence, and up to modern-day Costa Rica.\n\nHighlights include beautifully preserved pre-Columbian stone spheres, colonial-era furniture, and galleries detailing the nation's social and political development. The museum also features a stunning butterfly garden in its central courtyard, offering a peaceful respite. Climbing the old ramparts provides excellent panoramic views of the city and surrounding mountains.",
        practicalInfo: {
        howToGetThere: "Located on Cuesta de Moras, between Avenidas Central and 2, opposite the Legislative Assembly.",
        openingHours: "Tuesday to Saturday: 8:30 AM to 4:30 PM; Sunday: 9:00 AM to 4:30 PM. Closed Mondays.",
        cost: "Foreigners: ~$11 USD. Nationals: ~$3 USD.",
        website: "https://www.museocostarica.go.cr/"
      }
      },
        {
        name: "Parque Metropolitano La Sabana (La Sabana Metropolitan Park)",
        description: "Often called the 'lungs of San Jose,' La Sabana is the city's largest and most important urban park. Once the site of San Jose's first international airport, it's now a sprawling green space popular with locals for jogging, picnicking, and playing sports. The park features a large artificial lake, running tracks, and shaded areas perfect for relaxing.\n\nWithin the park, you'll also find the Costa Rican Art Museum (Museo de Arte Costarricense), housed in the old airport terminal building. It's an ideal spot to escape the urban hustle, enjoy some fresh air, and observe everyday Tico life. On weekends, the park is especially lively with families and local sports leagues.",
        practicalInfo: {
        howToGetThere: "Located on the west side of the city, at the end of Paseo Colón.",
        openingHours: "Open 24/7, though safest during daylight hours.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Barrio Escalante",
        description: "This trendy neighborhood has transformed into San Jose's gastronomic epicenter. By day, it's a charming residential area with tree-lined streets and French-inspired architecture. By night, it comes alive as foodies flock to its incredible collection of restaurants, pubs, and cafes. From traditional Costa Rican fare with a modern twist to international cuisine and craft beer gardens, there's something to satisfy every palate.\n\nThe main thoroughfare, Calle 33 (Paseo Gastronómico La Luz), is where much of the action is concentrated. It's a fantastic place for an evening stroll, stopping for tapas at one spot, a main course at another, and dessert or a cocktail somewhere else. The vibrant, safe atmosphere makes it a favorite for both locals and tourists.",
        practicalInfo: {
        howToGetThere: "Located east of downtown San Jose. A short taxi/Uber ride or a 20-25 minute walk from the National Museum.",
        openingHours: "Restaurants have varying hours, but the area is most active in the evenings.",
        cost: "Free to walk around. Restaurant prices range from budget-friendly to upscale.",
        website: "N/A"
      }
      },
        {
        name: "Doka Estate Coffee Plantation",
        description: "A trip to Costa Rica isn't complete without learning about its most famous export: coffee. Located on the fertile slopes of the Poás Volcano, Doka Estate is a working coffee plantation that offers fantastic guided tours. You'll learn about the entire process, from planting and harvesting the beans to roasting and cupping. The tour explains the history of coffee in Costa Rica and its impact on the country's development.\n\nThe estate itself is beautiful, with lush vegetation and stunning views. The tour typically includes a delicious traditional lunch and, of course, a coffee tasting session where you can sample different roasts. It’s an educational and aromatic experience that provides a deeper appreciation for the cup of coffee you enjoy each morning.",
        practicalInfo: {
        howToGetThere: "Located in Alajuela, about a 45-60 minute drive from San Jose. Best visited via a guided tour, rental car, or taxi.",
        openingHours: "Tours are offered daily, typically starting from 9:00 AM.",
        cost: "Tours start around $25-35 USD per person.",
        website: "https://dokaestate.com/"
      }
      },
        {
        name: "Spirogyra Butterfly Garden",
        description: "A hidden oasis in the middle of the city, the Spirogyra Butterfly Garden offers a delightful escape into nature without leaving San Jose. This small but enchanting reserve is dedicated to the study and breeding of Costa Rican butterflies. A winding path takes you through a lush, enclosed garden where dozens of species, including the iconic Blue Morpho, flutter freely around you.\n\nKnowledgeable guides are on hand to explain the life cycle of the butterflies and point out different species and their host plants. It's a peaceful and educational experience, perfect for families or anyone needing a break from the urban environment. The garden also provides a glimpse into the incredible biodiversity that lies just beyond the city limits.",
        practicalInfo: {
        howToGetThere: "Located near the El Pueblo shopping center, a short taxi ride north of the city center.",
        openingHours: "Daily, 8:00 AM to 4:00 PM.",
        cost: "~$7-10 USD.",
        website: "http://www.spirogyra.net/"
      }
      },
        {
        name: "Museo de los Niños (Children's Museum)",
        description: "Housed in a former prison that looks like a whimsical yellow castle, the Children's Museum is a paradise for families. The museum's motto is 'learn by playing,' and it delivers with over 40 rooms of interactive exhibits covering science, history, music, and daily life. Kids can lie on a bed of nails, simulate an earthquake, or learn about the human body in a fun, hands-on environment.\n\nEven if you're not traveling with children, the building itself is worth seeing. The transformation from a notoriously grim penitentiary to a place of joy and learning is a powerful symbol of Costa Rica's progress. It's part of the larger Costa Rican Center of Science and Culture.",
        practicalInfo: {
        howToGetThere: "Located on Calle 4, north of downtown. It's the striking yellow castle-like building.",
        openingHours: "Tuesday to Friday: 8:30 AM to 4:30 PM; Saturday & Sunday: 9:00 AM to 5:00 PM.",
        cost: "~$5-7 USD for both children and adults.",
        website: "https://www.museocr.org/museo-de-los-ninos"
      }
      },
        {
        name: "Mercado Nacional de Artesanías (National Craft Market)",
        description: "If you're looking for authentic souvenirs, skip the generic tourist shops and head straight to the National Craft Market. This covered market brings together artisans from all over Costa Rica, offering a wide array of high-quality, handmade goods. Here you'll find beautifully painted wooden oxcarts, Boruca ceremonial masks, handmade jewelry, leather products, and textiles.\n\nUnlike the more chaotic Central Market, this market is calmer and more focused on crafts. It's an excellent place to find unique gifts and support local artists directly. Prices are often reasonable, and you can chat with the vendors about their work and the cultural significance of the items.",
        practicalInfo: {
        howToGetThere: "Located on Calle 5, next to the Plaza de la Democracia and near the Jade Museum.",
        openingHours: "Daily, approximately 9:00 AM to 6:00 PM.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Parque Nacional",
        description: "Not to be confused with Costa Rica's famous nature reserves, this is an urban park in the heart of the city that serves as a monument to national history. The park's centerpiece is the imposing Monumento Nacional, a bronze statue depicting the Central American nations driving out the American filibuster William Walker in 1856. The park is beautifully landscaped with trees from across the country and is a popular spot for locals to relax.\n\nSurrounded by key institutions like the National Library, the Supreme Electoral Tribunal, and just a short walk from the National Museum, the park forms a significant part of San Jose's cultural and political circuit. It's a peaceful place to sit on a bench, enjoy the shade, and contemplate the country's proud history of independence and democracy.",
        practicalInfo: {
        howToGetThere: "Located between Avenidas 1 and 3, east of the National Museum.",
        openingHours: "Open 24/7, but best enjoyed during the day.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Toucan Rescue Ranch",
        description: "For an inspiring wildlife experience, take a short trip from San Jose to the Toucan Rescue Ranch. This center is dedicated to the rescue, rehabilitation, and, when possible, release of Costa Rican wildlife. While they specialize in toucans, they also care for a variety of other animals, including sloths, owls, monkeys, and macaws. A visit here is not a zoo experience; it's an educational tour focused on conservation and the stories of the individual resident animals.\n\nBooking a tour in advance is essential. The knowledgeable guides share incredible insights into the challenges these animals face and the efforts being made to protect them. Your entrance fee directly supports their conservation work, making it a visit that feels good and does good.",
        practicalInfo: {
        howToGetThere: "Located in San Isidro de Heredia, about a 30-45 minute drive from San Jose. A taxi or Uber is the easiest way to get there.",
        openingHours: "Tours are by reservation only. Check their website for available times.",
        cost: "Classic Ranch Walk starts around $30 USD.",
        website: "https://toucanrescueranch.org/"
      }
      },
        {
        name: "Avenida Central",
        description: "Avenida Central is the vibrant, beating heart of downtown San Jose. This pedestrian-only boulevard stretches for several blocks and is the city's main commercial and social artery. It's a fantastic place for people-watching, as locals, street performers, vendors, and tourists all converge here. The avenue is lined with shops, department stores, pharmacies, restaurants, and ice cream parlors.\n\nWalking the length of Avenida Central gives you a real feel for the city's rhythm. It connects several key landmarks, including the Central Market at one end and the Plaza de la Cultura and National Theater at the other. While it can be crowded, it’s an essential part of the San Jose experience, offering a snapshot of daily urban life in Costa Rica.",
        practicalInfo: {
        howToGetThere: "The main pedestrian thoroughfare running east-west through the center of downtown.",
        openingHours: "Shops are generally open from 9:00 AM to 7:00 PM. The street is always accessible.",
        cost: "Free to walk.",
        website: "N/A"
      }
      },
        {
        name: "Iglesia de la Merced (La Merced Church)",
        description: "This stunning neo-Gothic church is one of San Jose's most striking architectural landmarks. Its single, towering steeple dominates the skyline of its neighborhood. Built by German architects in the late 19th century, its intricate facade and beautiful stained-glass windows stand out from the city's more common neoclassical or Spanish colonial styles. The interior is equally impressive, with a serene atmosphere, beautiful woodwork, and soaring vaulted ceilings.\n\nLocated just a few blocks from the Central Market, it's an easy and worthwhile stop on a walking tour of the city. Whether you are religious or simply an admirer of beautiful architecture, the Iglesia de la Merced offers a moment of peace and reflection away from the bustle of the city streets.",
        practicalInfo: {
        howToGetThere: "Located on Calle 12 and Avenida 2 in downtown San Jose.",
        openingHours: "Open daily for visitors, except during mass times. Generally 8:00 AM to 5:00 PM.",
        cost: "Free.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Walking is a great way to explore the compact downtown area. For longer distances, official red taxis with a yellow triangle on the side are plentiful; always insist on using the meter ('la maría'). Ride-sharing services like Uber and DiDi are widely available and often cheaper. The public bus system is extensive and very affordable but can be confusing for first-time visitors.",
        whereToStay: "For first-timers and culture lovers, staying Downtown near the Plaza de la Cultura provides easy access to museums and landmarks. For foodies, the trendy Barrio Escalante offers a fantastic culinary scene and a vibrant nightlife. For a quieter, more upscale experience, consider the areas around La Sabana Park or the Rohrmoser neighborhood.",
        bestTimeToVisit: "The best time to visit San Jose is during the dry season, from mid-December to April. You'll experience sunny days and pleasant temperatures, perfect for exploring the city and nearby volcanoes. The green season, from May to November, sees daily afternoon showers but also brings lush landscapes, fewer crowds, and lower prices. September and October are typically the rainiest months.",
        suggestedItinerary: "Day 1: Cultural Immersion. Start at the Plaza de la Cultura. Visit the Pre-Columbian Gold Museum in the morning and the National Theater in the afternoon (take the tour). Walk down Avenida Central. Day 2: Local Life & History. Explore the bustling Central Market for breakfast and souvenirs. Then, walk to the National Museum of Costa Rica to learn about the country's history. In the evening, head to Barrio Escalante for dinner. Day 3: Coffee or Wildlife. Take a day trip to a nearby coffee plantation like Doka Estate for a tour and tasting, or visit the Toucan Rescue Ranch for a close-up look at Costa Rican wildlife conservation."
      }}
      faqs={[{
          question: "Is San Jose expensive?",
          answer: "San Jose can be more affordable than Costa Rica's popular beach and rainforest destinations. Accommodation ranges from budget-friendly hostels ($15-30 USD) to mid-range hotels ($70-150 USD). Eating at local 'sodas' is very cheap (a 'casado' meal costs around $5-8 USD), while meals in tourist-focused restaurants in areas like Barrio Escalante will be more expensive ($15-30 USD per entree). Public transportation is inexpensive, and many attractions are free or have modest entrance fees. Overall, it's moderately priced and can be tailored to any budget."
        },
        {
          question: "How many days do you need in San Jose?",
          answer: "Two to three full days are generally sufficient to experience the best of San Jose. This allows enough time to explore the main museums (Gold, Jade, National), visit the National Theater, wander through the Central Market, and enjoy an evening in Barrio Escalante. If you plan to use San Jose as a base for day trips to nearby volcanoes (Poás, Irazú) or coffee plantations, you could easily extend your stay to four or five days."
        },
        {
          question: "Is San Jose safe?",
          answer: "Like any major city, San Jose has areas that are safer than others. The main tourist areas, such as the central avenues, museum districts, and neighborhoods like Barrio Escalante, are generally safe during the day. However, it's wise to practice standard urban safety precautions: be aware of your surroundings, avoid displaying expensive jewelry or electronics, and keep a close eye on your belongings, especially in crowded places like the Central Market. Avoid walking alone in deserted areas at night and use official red taxis or reputable ride-sharing apps for transportation after dark."
        },
        {
          question: "What is San Jose famous for?",
          answer: "San Jose is famous for being Costa Rica's cultural and political heart. It is renowned for its world-class museums, particularly the Pre-Columbian Gold Museum and the Jade Museum, which hold priceless artifacts. The city is also known for its stunning neoclassical architecture, epitomized by the National Theater. Furthermore, it serves as the primary gateway for international travelers and is a central hub for exploring the coffee plantations, volcanoes, and rich biodiversity of the Central Valley."
        }
      ]}
    />
  );
};