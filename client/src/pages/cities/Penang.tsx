import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Penang: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Penang, Malaysia (2025 Guide)"}
      description={"Known as the 'Pearl of the Orient,' Penang is a captivating island that seamlessly blends East and West, tradition and modernity. Its capital, George Town, a UNESCO World Heritage site, is a living museum of colonial architecture, ancient temples, and vibrant clan houses. But Penang's allure extends beyond history; it's a world-renowned food paradise where sizzling woks in bustling hawker stalls create culinary magic. The island’s cultural tapestry is woven from Malay, Chinese, Indian, and European threads, creating a unique atmosphere you won't find anywhere else. From verdant jungle-clad hills and serene beaches to its iconic, interactive street art, a journey here is an assault on the senses in the best way possible. Exploring the island offers some of the best things to do in Penang, promising an unforgettable adventure for every traveler."}
      highlights={["George Town UNESCO World Heritage Site",
        "Penang Hill",
        "Kek Lok Si Temple",
        "Street Art in George Town",
        "Cheong Fatt Tze Mansion (The Blue Mansion)"]}
      galleryImages={[
        { url: "", alt: "Penang landmark 1", caption: "Penang landmark 1 - placeholder" },
        { url: "", alt: "Penang landmark 2", caption: "Penang landmark 2 - placeholder" },
        { url: "", alt: "Penang landmark 3", caption: "Penang landmark 3 - placeholder" },
        { url: "", alt: "Penang landmark 4", caption: "Penang landmark 4 - placeholder" },
        { url: "", alt: "Penang landmark 5", caption: "Penang landmark 5 - placeholder" },
        { url: "", alt: "Penang landmark 6", caption: "Penang landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "George Town UNESCO World Heritage Site",
        description: "The heart and soul of Penang, the George Town UNESCO World Heritage Site is an open-air museum where history comes alive on every corner. Walking its streets is a journey back in time, with rows of well-preserved shophouses, magnificent colonial-era buildings, and hidden temples standing side-by-side. The area is a melting pot of cultures, reflected in its architecture, religious sites, and of course, its food.\n\nExploring this zone reveals the island's multicultural roots, from the Street of Harmony, where a church, mosque, and two temples coexist, to the intricate facades of Chinese clan houses. The best way to experience it is to simply get lost in its labyrinthine alleys, discovering hidden courtyards, artisan shops, and the irresistible aromas of street food wafting from every corner. It’s the essential starting point for any Penang adventure.",
        practicalInfo: {
        howToGetThere: "The heritage zone covers the heart of George Town. It is best explored on foot, by bicycle, or by trishaw.",
        openingHours: "24/7, though individual shops and attractions have their own hours.",
        cost: "Free to walk around.",
        website: "https://www.gtwhi.com.my/"
      }
      },
        {
        name: "Street Art in George Town",
        description: "Penang's street art scene has become an iconic attraction in its own right, transforming the old walls of George Town into a vibrant, interactive gallery. The most famous pieces are by Lithuanian artist Ernest Zacharevic, who masterfully blends painted murals with physical objects, like a real bicycle or a motorcycle, creating whimsical, 3D illusions. His 'Kids on a Bicycle' and 'Boy on a Bike' are must-see photo spots.\n\nBeyond Zacharevic's work, look for the 'Marking George Town' collection of 52 steel-rod caricatures that humorously illustrate the history and stories of the streets they occupy. Hunting for these artworks is a fantastic way to explore the hidden lanes and back alleys of the heritage zone, with a new discovery waiting around every bend.",
        practicalInfo: {
        howToGetThere: "Located throughout the George Town heritage area. Grab a map from a local tourist office to find the most famous murals.",
        openingHours: "Accessible 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Penang Hill",
        description: "Escape the city's heat and humidity by ascending Penang Hill (Bukit Bendera), a hill resort standing 833 meters above sea level. The journey itself is an experience, aboard one of the world's steepest funicular railways, which offers breathtaking views as it climbs through lush tropical rainforest. At the summit, you'll be rewarded with a cooler climate and spectacular panoramic vistas of the entire island and mainland.\n\nOnce at the top, you can explore colonial-era bungalows, a Hindu temple, a mosque, and various viewing decks. For nature lovers, The Habitat (a separate attraction on the hill) offers a world-class ecotourism experience with its treetop walks and forest trails, allowing you to get up close with the region's rich biodiversity.",
        practicalInfo: {
        howToGetThere: "Take a Grab or Rapid Penang bus 204 to the Penang Hill Lower Station. From there, take the funicular train to the top.",
        openingHours: "Funicular operates daily, 6:30 AM - 11:00 PM (last train from top).",
        cost: "Funicular ticket for foreigners: approx. RM 30 (return). MyKad holders have lower rates.",
        website: "https://www.penanghill.gov.my/"
      }
      },
        {
        name: "Kek Lok Si Temple",
        description: "A true testament to faith and architectural grandeur, Kek Lok Si is one of the largest and most impressive Chinese temples in Southeast Asia. Perched on a hillside in Air Itam, this sprawling complex is a visual feast of prayer halls, pagodas, bell towers, and beautiful gardens, built over several decades since 1891.\n\nThe temple's crowning glories are the magnificent seven-tiered Pagoda of Rama VI (Pagoda of Ten Thousand Buddhas), which blends Chinese, Thai, and Burmese architectural styles, and the colossal 36.5-meter-tall bronze statue of Kuan Yin, the Goddess of Mercy. Getting to the Kuan Yin statue via an inclined lift provides stunning views of the island. A visit during Chinese New Year is particularly magical when the entire complex is illuminated by thousands of lanterns.",
        practicalInfo: {
        howToGetThere: "Located in Air Itam. Take a Grab or Rapid Penang bus 201, 203, or 204.",
        openingHours: "Daily, 8:30 AM - 5:30 PM.",
        cost: "Entry to the temple is free, but there are small fees for the pagoda (approx. RM 2) and the inclined lift (approx. RM 6 return).",
        website: "http://kekloksitemple.com/"
      }
      },
        {
        name: "Cheong Fatt Tze Mansion (The Blue Mansion)",
        description: "Step into a world of opulence and history at the Cheong Fatt Tze Mansion, more famously known as The Blue Mansion. This iconic indigo-hued building is a masterpiece of Hakka-Teochew architecture, built in the late 19th century for a wealthy Chinese merchant. Its design incorporates Feng Shui principles, intricate carvings, Chien Nien porcelain work, and elegant stained-glass windows, showcasing the finest craftsmanship of the era.\n\nThe mansion was rescued from ruin and meticulously restored, earning it a UNESCO Most Excellent Project award. The only way to see the interior is by joining a guided tour, where knowledgeable guides share fascinating stories about the mansion's original owner and its unique architectural features. It’s a vivid glimpse into the lavish lifestyle of Penang's elite Peranakan society.",
        practicalInfo: {
        howToGetThere: "Located on Leith Street in George Town, easily accessible on foot or by Grab.",
        openingHours: "Guided tours are held at set times daily, typically 11:00 AM, 2:00 PM and 3.30 PM. Check the website for current times.",
        cost: "Tour costs approx. RM 25 per person.",
        website: "https://www.cheongfatttzemansion.com/"
      }
      },
        {
        name: "Clan Jetties of George Town",
        description: "The Clan Jetties are a unique living heritage site, representing the waterfront settlements created by Chinese immigrants in the 19th century. These rustic wooden houses are built on stilts over the water, with each jetty historically home to a specific clan. While several jetties exist, the Chew Jetty is the most tourist-friendly and well-known.\n\nA walk along the wooden plank walkways offers a fascinating insight into a traditional way of life that has endured for over a century, right on the edge of the modern city. You'll find small temples, souvenir shops, and food stalls, all while residents go about their daily lives. It's a picturesque and culturally rich corner of George Town, offering great photo opportunities, especially during sunrise or sunset.",
        practicalInfo: {
        howToGetThere: "Located at Weld Quay in George Town, a short walk from the ferry terminal.",
        openingHours: "Accessible 24/7, but it's best to visit during the day (9:00 AM - 9:00 PM) out of respect for the residents.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Penang National Park (Taman Negara Pulau Pinang)",
        description: "Despite being the world's smallest national park, Taman Negara Pulau Pinang packs a mighty punch with its incredible biodiversity. The park boasts a variety of habitats, including lush rainforests, mangrove swamps, and pristine sandy beaches. It’s a haven for hikers and nature lovers, with well-marked trails leading to stunning destinations.\n\nPopular treks lead to the secluded Monkey Beach (Teluk Duyung), home to long-tailed macaques, or the more challenging route to Kerachut Beach. Kerachut is special for two reasons: it houses a turtle sanctuary where green sea turtle eggs are incubated, and it features a rare meromictic lake, where layers of freshwater and saltwater do not mix. You can hike one way and hire a boat to take you back for the perfect day trip.",
        practicalInfo: {
        howToGetThere: "Located at Teluk Bahang on the northwest tip of the island. Take Rapid Penang bus 101.",
        openingHours: "Daily, 8:00 AM - 5:00 PM. Registration at the entrance is required.",
        cost: "Entry to the park is free. Boat rides have separate charges.",
        website: "https://www.wildlife.gov.my/"
      }
      },
        {
        name: "Pinang Peranakan Mansion",
        description: "For a deeper dive into the opulent world of the Baba-Nyonya (Peranakan Chinese), a visit to the Pinang Peranakan Mansion is essential. This stunningly restored 19th-century home offers a glimpse into the lavish lifestyle of a wealthy Peranakan family. Unlike the Blue Mansion's focus on architecture, this mansion is packed with over 1,000 antiques and collectibles.\n\nEvery room is meticulously arranged to look as it would have in its heyday, featuring intricate wood carvings, Scottish ironworks, English floor tiles, and a vast collection of Nyonya ware porcelain. The sheer scale of the collection and the richness of the decor are breathtaking, providing a comprehensive education on the unique, blended culture of the Peranakans.",
        practicalInfo: {
        howToGetThere: "Located on Church Street in George Town.",
        openingHours: "Daily, 9:30 AM - 5:00 PM.",
        cost: "Approx. RM 25 per adult.",
        website: "https://www.pinangperanakanmansion.com.my/"
      }
      },
        {
        name: "Entopia by Penang Butterfly Farm",
        description: "Far more than just a butterfly farm, Entopia is a state-of-the-art nature learning center. It is divided into two main sections: The Natureland, a massive glasshouse conservatory where thousands of butterflies flutter freely amidst lush gardens and waterfalls, and The Cocoon, an indoor discovery center with interactive exhibits on invertebrates and other small creatures.\n\nWalking through The Natureland is a magical experience, as colorful butterflies land on you. The Cocoon section is brilliantly designed to be educational and fun for all ages, demystifying the world of insects, reptiles, and other crawlies. It’s a fantastic family-friendly attraction that beautifully combines education with wonder.",
        practicalInfo: {
        howToGetThere: "Located in Teluk Bahang, near the Penang National Park. Accessible via Grab or Rapid Penang bus 101.",
        openingHours: "Thursday - Tuesday, 9:00 AM - 6:00 PM (Closed Wednesdays).",
        cost: "Approx. RM 70 for foreigners. Check website for promotions.",
        website: "https://www.entopia.com/"
      }
      },
        {
        name: "Gurney Drive Hawker Centre",
        description: "No trip to Penang is complete without a pilgrimage to a hawker center, and Gurney Drive is one of the most famous. This bustling, open-air food court comes alive at night, offering a dizzying array of Penang's legendary street food in one convenient location. The seaside promenade setting adds to the vibrant atmosphere.\n\nThis is your chance to sample all the iconic dishes. Navigate the stalls and look for local favorites like char kway teow (stir-fried rice noodles), Hokkien mee (a rich prawn noodle soup), assam laksa (a spicy-sour fish-based noodle soup), and rojak (a sweet and savory fruit and vegetable salad). It's a true feast for the senses and the ultimate Penang foodie experience.",
        practicalInfo: {
        howToGetThere: "Located along the Gurney Drive promenade. Accessible via Grab or multiple Rapid Penang bus routes.",
        openingHours: "Most stalls open from late afternoon until late night, around 5:00 PM - 12:00 AM.",
        cost: "Dishes are very affordable, typically ranging from RM 5 - RM 15.",
        website: "N/A"
      }
      },
        {
        name: "Tropical Spice Garden",
        description: "Discover the plants that sparked culinary traditions and colonial ambitions at the Tropical Spice Garden. This beautifully landscaped eight-acre jungle sanctuary showcases over 500 species of tropical flora from around the world, with a special focus on the spices that have shaped global history. The garden is divided into different trails, such as the Spice Trail and Ornamental Trail, each with its own story.\n\nYou can explore on your own with an audio guide or join an excellent guided tour to learn about the uses and origins of plants like nutmeg, cloves, cinnamon, and vanilla. The garden also features a Poison Garden, swings overlooking the sea, and a lovely cafe. For foodies, the on-site cooking school offers hands-on classes using fresh ingredients from the garden.",
        practicalInfo: {
        howToGetThere: "Located on the northern coast between Batu Ferringhi and Teluk Bahang. Accessible via Rapid Penang bus 101.",
        openingHours: "Daily, 9:00 AM - 6:00 PM.",
        cost: "Approx. RM 31 for garden entry. Cooking classes are priced separately.",
        website: "https://tropicalspicegarden.com/"
      }
      },
        {
        name: "Kapitan Keling Mosque",
        description: "A prominent landmark on the 'Street of Harmony,' the Kapitan Keling Mosque is a testament to the influence of Penang's early Indian Muslim community. Founded in the early 19th century, its name comes from the 'Kapitan' or leader of the community at the time. The current structure, with its grand Mughal-style domes, turrets, and minarets, is a breathtaking sight.\n\nThe mosque is an active place of worship but welcomes visitors outside of prayer times. You can explore the serene courtyard and admire the polished marble floors and intricate calligraphy inside the prayer hall. It's a peaceful and beautiful sanctuary that stands as a symbol of Penang's rich multicultural fabric.",
        practicalInfo: {
        howToGetThere: "Located on Jalan Masjid Kapitan Keling (Pitt Street) in George Town.",
        openingHours: "Open to visitors outside of prayer times. Robes are provided for visitors to wear.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Fort Cornwallis",
        description: "As the largest standing fort in Malaysia, Fort Cornwallis marks the spot where Captain Francis Light, founder of the British colony, first landed in 1786. The original wooden structure was rebuilt with stone in the early 19th century. Although it never saw military action, it served as an important administrative and defensive center for the British East India Company.\n\nInside the star-shaped walls, you can explore historical exhibits, see the original cannons (including the famous Seri Rambai cannon, believed to bestow fertility), an old chapel, and prison cells. While some parts are in need of restoration, it offers a tangible connection to Penang's colonial beginnings and provides a scenic view of the waterfront.",
        practicalInfo: {
        howToGetThere: "Located at the Esplanade in George Town, near the Queen Victoria Memorial Clock Tower.",
        openingHours: "Daily, 9:00 AM - 7:00 PM.",
        cost: "Approx. RM 20 for foreigners.",
        website: "N/A"
      }
      },
        {
        name: "The Habitat Penang Hill",
        description: "While located on Penang Hill, The Habitat is a world-class attraction in its own right, offering an immersive rainforest experience. This ecotourism park focuses on conservation and education, allowing visitors to experience the jungle from a unique perspective. The highlight is the 230-meter Langur Way Canopy Walk, which provides a bird's-eye view of the forest canopy.\n\nFor the ultimate vista, head to the Curtis Crest Tree Top Walk, the highest public viewing platform in Penang, offering stunning 360-degree panoramic views of the island. Guided walks along the nature trail are highly recommended to learn about the diverse flora and fauna from knowledgeable naturalists. For thrill-seekers, the Flight of the Colugo zip-line course offers an adrenaline-pumping way to fly through the trees.",
        practicalInfo: {
        howToGetThere: "First, take the funicular to the top of Penang Hill. The Habitat entrance is a short walk from the upper station.",
        openingHours: "Daily, 9:00 AM - 7:00 PM (Last entry 5:30 PM).",
        cost: "Approx. RM 60 for a standard pass. Funicular ticket is a separate cost.",
        website: "https://thehabitat.my/"
      }
      },
        {
        name: "Snake Temple (Hock Kin Keong)",
        description: "Certainly one of Penang's most unusual attractions, the Snake Temple is dedicated to the deity Chor Soo Kong. Legend has it that the deity, a Buddhist monk and healer, gave shelter to the jungle's snakes, and after the temple was built, they moved in on their own accord. True to its name, the temple is home to a number of pit vipers, which can be seen coiled around prayer stands and fixtures.\n\nThe snakes are said to be rendered harmless by the constant smoke from the burning incense, but they are de-fanged as a precaution. It's a surreal and slightly eerie experience. Behind the main temple, there is a snake farm where you can see different species and even have your photo taken with a tame python, if you dare.",
        practicalInfo: {
        howToGetThere: "Located in Bayan Lepas, near the airport. Best reached by Grab or taxi.",
        openingHours: "Daily, 6:00 AM - 7:00 PM.",
        cost: "Entry to the temple is free. The snake farm at the back has a separate entrance fee.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "George Town is highly walkable. For longer distances, 'Grab' (Asia's Uber) is the most convenient and affordable option. The Rapid Penang bus network is extensive and cheap, covering the whole island. For a touristy experience in George Town, hire a traditional trishaw for a leisurely tour.",
        whereToStay: "For history and culture, stay within the George Town UNESCO World Heritage Site in a boutique heritage hotel. For beach resorts and water sports, Batu Ferringhi is the go-to area. For modern hotels, massive shopping malls, and proximity to the famous Gurney Drive Hawker Centre, choose Gurney Drive. Recommended hotels include the Eastern & Oriental Hotel (Luxury), Cheong Fatt Tze Mansion (Heritage Boutique), and The Wembley (Mid-Range).",
        bestTimeToVisit: "Penang has a tropical climate, so it's warm and humid year-round. The best time to visit is during the dry season, from November to February, when there's less rain and plenty of sunshine. The shoulder months (March-April, September-October) are also good, with fewer crowds. The wettest season is typically from May to August.",
        suggestedItinerary: "Day 1: Immerse yourself in the George Town UNESCO World Heritage Site. Hunt for street art, visit the Clan Jetties, tour the Pinang Peranakan Mansion, and feast at a local coffee shop. Day 2: Take the funicular up Penang Hill in the morning for stunning views and explore The Habitat. In the afternoon, visit the magnificent Kek Lok Si Temple. End the day at the Gurney Drive Hawker Centre for dinner. Day 3: Explore the island's nature. Choose between hiking in Penang National Park to Monkey Beach or a sensory experience at the Tropical Spice Garden. Spend the evening enjoying the seaside ambiance of Batu Ferringhi."
      }}
      faqs={[{
          question: "Is Penang expensive?",
          answer: "Penang is considered very affordable, especially compared to European or North American destinations. Street food is incredibly cheap, with delicious meals costing just a few dollars. Public transport is economical, and Grab fares are low. Accommodation ranges from budget-friendly hostels to luxury heritage hotels, offering options for every budget. You can have a fantastic experience without breaking the bank."
        },
        {
          question: "How many days do you need in Penang?",
          answer: "A stay of 3 to 4 days is ideal to cover the main highlights of Penang. This allows enough time to explore the George Town heritage zone thoroughly, visit Penang Hill and Kek Lok Si Temple, and experience some of the island's natural attractions. If you wish to relax on the beaches or explore more off-the-beaten-path locations, a 5 to 7-day trip would be more comfortable."
        },
        {
          question: "Is Penang safe?",
          answer: "Yes, Penang is generally a very safe destination for travelers. Violent crime is rare. However, like in any tourist area, it's wise to take standard precautions. Be mindful of your belongings to avoid petty theft like pickpocketing or purse-snatching, especially in crowded areas. Traffic can be chaotic, so be cautious when crossing streets. Overall, locals are friendly and welcoming to tourists."
        },
        {
          question: "What is Penang famous for?",
          answer: "Penang is most famous for three things: its food, its heritage, and its street art. It is often hailed as the food capital of Malaysia, with its legendary street food, particularly dishes like Char Kway Teow and Assam Laksa. Its capital, George Town, is a UNESCO World Heritage Site celebrated for its unique and well-preserved colonial and multicultural architecture. Finally, the whimsical and interactive street art scattered throughout George Town has become an iconic symbol of the island's creative spirit."
        }
      ]}
    />
  );
};