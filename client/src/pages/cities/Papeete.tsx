import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Papeete: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Papeete, French Polynesia (2025 Guide)"}
      description={"Welcome to Papeete, the vibrant heart of French Polynesia and the gateway to Tahiti's legendary islands. Far more than just a stopover point, this bustling capital offers a captivating blend of urban energy and laid-back island charm. Here, French sophistication meets Polynesian warmth, creating a unique cultural tapestry. You can spend your days exploring colorful markets overflowing with tropical fruits and black pearls, strolling along scenic waterfront parks, and delving into the rich history of the region. As evening falls, the city comes alive with the irresistible aromas of its famous food trucks. Whether you're starting your island-hopping adventure or exploring Tahiti itself, you'll find that discovering the best things to do in Papeete is an essential part of any Tahitian journey, offering a genuine taste of modern Polynesian life."}
      imageUrl={""}
      highlights={["Marché de Papeete (Papeete Market)",
        "Place Vai'ete for 'Les Roulottes'",
        "Robert Wan Pearl Museum",
        "Jardins de Paofai (Paofai Gardens)",
        "Cathédrale Notre-Dame de Papeete"]}
      galleryImages={[
        { url: "", alt: "Papeete landmark 1", caption: "Papeete landmark 1 - placeholder" },
        { url: "", alt: "Papeete landmark 2", caption: "Papeete landmark 2 - placeholder" },
        { url: "", alt: "Papeete landmark 3", caption: "Papeete landmark 3 - placeholder" },
        { url: "", alt: "Papeete landmark 4", caption: "Papeete landmark 4 - placeholder" },
        { url: "", alt: "Papeete landmark 5", caption: "Papeete landmark 5 - placeholder" },
        { url: "", alt: "Papeete landmark 6", caption: "Papeete landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Marché de Papeete (Papeete Market)",
        description: "The Marché de Papeete is the vibrant, beating heart of the city. This bustling, two-story public market is a feast for the senses, where locals and tourists alike gather to shop for everything from fresh fish and tropical fruits to fragrant monoi oil and intricate wood carvings. The ground floor is dedicated to produce, flowers, and food stalls, offering a colorful glimpse into daily Tahitian life. \n\nHead upstairs to find a treasure trove of handicrafts, including pareus (sarongs), woven hats, shell jewelry, and the region's famous black pearls. It's the perfect place to soak up the local atmosphere, sample exotic treats, and find authentic souvenirs. Arrive early in the morning, especially on Sunday, to see it at its most animated.",
        practicalInfo: {
        howToGetThere: "Located in the center of downtown Papeete, easily walkable from the cruise port and most downtown hotels.",
        openingHours: "Monday-Friday: 5:00 AM - 6:00 PM, Saturday: 5:00 AM - 1:00 PM, Sunday: 4:00 AM - 9:00 AM.",
        cost: "Free to enter.",
        website: "https://www.tahititourisme.com/en-us/vacation-activities/papeete-market/"
      }
      },
        {
        name: "Place Vai'ete for 'Les Roulottes'",
        description: "Every evening, the waterfront square of Place Vai'ete transforms into a lively open-air food court. 'Les Roulottes', or food trucks, roll in and set up shop, offering a delicious and affordable array of dining options under the stars. The air fills with tantalizing smells of grilling fish, sizzling crêpes, and Chinese stir-fries. \n\nThis is a quintessential Papeete experience, beloved by both locals and visitors. Grab a seat at a communal picnic table and choose from a variety of dishes, including fresh poisson cru (Tahitian raw fish salad), steak frites, and chow mein. It’s a fantastic way to enjoy a casual dinner, people-watch, and experience the city's festive evening atmosphere.",
        practicalInfo: {
        howToGetThere: "Located on the waterfront, a short walk from the ferry terminal and downtown Papeete.",
        openingHours: "Daily from approximately 6:00 PM to late evening (around 11:00 PM or later).",
        cost: "Dishes typically range from 1,000 to 2,500 XPF.",
        website: "https://www.tahititourisme.com/en-us/restaurants/roulottes/"
      }
      },
        {
        name: "Robert Wan Pearl Museum",
        description: "French Polynesia is famous for its exquisite black pearls, and there's no better place to learn about them than the Robert Wan Pearl Museum. This small but fascinating museum, founded by the 'Emperor of the Tahitian Pearl' himself, is the only one in the world dedicated entirely to pearls. \n\nExhibits chronicle the history, mythology, and cultivation techniques of these ocean gems. You'll see historical artifacts, learn how pearls are harvested and graded, and gaze upon some truly exceptional and rare specimens, including the world's largest round Tahitian pearl. The adjoining shop offers a stunning, high-end collection for those looking for a truly special souvenir.",
        practicalInfo: {
        howToGetThere: "Located in the center of Papeete, near the Vaima Shopping Centre.",
        openingHours: "Monday-Saturday: 9:00 AM - 5:00 PM. Closed on Sundays.",
        cost: "Free to enter.",
        website: "https://www.robertwan.com/en/our-story/the-pearl-museum/"
      }
      },
        {
        name: "Jardins de Paofai (Paofai Gardens)",
        description: "For a peaceful escape from the city's hustle and bustle, head to the Jardins de Paofai. This beautifully landscaped waterfront park stretches over four hectares, offering lush green lawns, shady trees, and stunning views of Papeete's harbor and the neighboring island of Moorea. \n\nIt's a favorite spot for locals to exercise, relax, and socialize. Follow the walking and cycling paths, watch traditional outrigger canoes (va'a) glide across the water, or simply find a bench and enjoy the tropical breeze. The park is well-maintained with water features, picnic areas, and children's playgrounds, making it a perfect spot for an afternoon stroll or a family outing.",
        practicalInfo: {
        howToGetThere: "Situated along the waterfront boulevard, between the cruise ship terminal and the Taaone hospital.",
        openingHours: "Open 24/7.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Cathédrale Notre-Dame de Papeete",
        description: "An enduring landmark in the heart of the city, the Cathédrale Notre-Dame de Papeete stands as a testament to Tahiti's colonial history. Built in the late 19th century, its striking yellow facade and red roof make it a prominent feature of the skyline. The interior provides a cool and tranquil respite from the tropical heat. \n\nThe cathedral showcases a unique blend of European Gothic design and Polynesian artistic touches, including intricate mother-of-pearl inlays and stained-glass windows depicting religious scenes. It remains an active place of worship and offers a glimpse into the spiritual life of the island.",
        practicalInfo: {
        howToGetThere: "Centrally located near the Papeete Market.",
        openingHours: "Generally open daily for visitors and prayer, but be respectful of mass times.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Take the Ferry to Moorea",
        description: "While not strictly in Papeete, taking the ferry to the stunning island of Moorea is a must-do day trip and a quintessential Papeete experience. The high-speed catamarans of Aremiti and Terevau whisk you across the Sea of the Moon in just 30-45 minutes, offering breathtaking views of Moorea's jagged volcanic peaks as you approach. \n\nOnce on Moorea, you can rent a car or scooter to explore its lush valleys, pineapple plantations, and turquoise bays. Swim with stingrays and sharks in the lagoon, hike to a scenic viewpoint, or simply relax on a pristine white-sand beach. The journey itself is as spectacular as the destination, making it an unforgettable excursion.",
        practicalInfo: {
        howToGetThere: "Ferries depart from the Ferry Terminal (Gare Maritime) on the Papeete waterfront.",
        openingHours: "Multiple departures daily, starting early morning until late afternoon. Check Aremiti or Terevau websites for current schedules.",
        cost: "Approximately 3,000-3,500 XPF for a round-trip adult ticket.",
        website: "https://www.aremiti.pf/en/ or https://www.terevau.pf/"
      }
      },
        {
        name: "Papeete Town Hall (Mairie de Papeete)",
        description: "The Papeete Town Hall is a striking piece of architecture you can't miss. Built in 1990, it's a beautiful replica of the former palace of Queen Pōmare IV. With its vibrant pink walls, wraparound verandas, and a grand central staircase, the building is a wonderful example of colonial-style architecture with a Polynesian flair. \n\nWhile it's a functioning government building, visitors are welcome to stroll through the surrounding gardens and admire the impressive exterior. The building and its grounds often host cultural events and exhibitions, particularly during the Heiva Nui festival in July.",
        practicalInfo: {
        howToGetThere: "Located slightly inland from the waterfront, a 10-15 minute walk from the Papeete Market.",
        openingHours: "Grounds are generally accessible during business hours.",
        cost: "Free to admire from the outside.",
        website: "N/A"
      }
      },
        {
        name: "Point Venus & Lighthouse",
        description: "Journey a short drive east of Papeete to Point Venus, a site of immense historical significance. This is where Captain James Cook observed the transit of Venus in 1769, and where the first missionaries from the London Missionary Society landed in 1797. A tall, white lighthouse, the only one in Tahiti, has stood guard here since 1867. \n\nThe area features a monument to Captain Cook and another to the missionaries. It's also home to a beautiful black-sand beach, popular with local families for swimming and picnicking. The combination of rich history and natural beauty makes it a fascinating and scenic spot to visit.",
        practicalInfo: {
        howToGetThere: "Located in Mahina, about a 20-30 minute drive east of Papeete. Best reached by rental car or taxi.",
        openingHours: "Open 24/7.",
        cost: "Free to enter.",
        website: "https://www.tahititourisme.com/en-us/vacation-activities/venus-point/"
      }
      },
        {
        name: "Musée de Tahiti et des Îles (Museum of Tahiti)",
        description: "For a deep dive into Polynesian culture and history, a visit to the Musée de Tahiti et des Îles is essential. Located about 15 km west of Papeete in Puna'auia, this comprehensive museum is set in a beautiful waterfront location. It covers the natural environment, settlement, social life, religion, and art of the Polynesian people. \n\nThe exhibits feature ancient petroglyphs, traditional tools, ceremonial costumes, and detailed accounts of European contact. It provides invaluable context for understanding the islands you are visiting. After exploring the museum, take a walk through its scenic gardens, which feature native plants and historical artifacts.",
        practicalInfo: {
        howToGetThere: "Located in Puna'auia (PK 15). Best reached by rental car, taxi, or local bus (Le Truck).",
        openingHours: "Tuesday-Sunday: 9:00 AM - 5:00 PM. Closed on Mondays.",
        cost: "Approximately 1,000 XPF for adults.",
        website: "https://www.museetahiti.pf/"
      }
      },
        {
        name: "Fa'aruma'i Waterfalls (Les Trois Cascades)",
        description: "Escape the city and immerse yourself in Tahiti's lush interior with a trip to the Fa'aruma'i Waterfalls, also known as Les Trois Cascades (The Three Waterfalls). Located on the east coast, about a 45-minute drive from Papeete, this site offers an easily accessible rainforest experience. \n\nA short, flat walk from the parking lot takes you to the first and most impressive waterfall, Vaimahutu. Two other cascades, Haamaremare Rahi and Haamaremare Iti, can be reached via a slightly more challenging 20-minute trail. It's a refreshing and picturesque spot, perfect for cooling off and capturing beautiful photos of Tahiti's natural splendor.",
        practicalInfo: {
        howToGetThere: "Located in Tiarei. A rental car is the easiest way to get there.",
        openingHours: "Accessible during daylight hours.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Plage de Vaiava (PK18 Beach)",
        description: "While Tahiti is known more for its dramatic volcanic landscapes than white-sand beaches, Plage de Vaiava (often called PK18 for its kilometer marker) is a beautiful exception. Located on the west coast, it's considered one of the island's best public beaches. The sand is white and soft, and the calm, clear lagoon is perfect for swimming and snorkeling. \n\nThere's a designated snorkeling area with decent coral and abundant fish, making it great for families and beginners. The beach has public restrooms and showers, and on weekends, you'll find food trucks selling snacks and drinks. It's the perfect place to spend a relaxing afternoon enjoying the sun and sea.",
        practicalInfo: {
        howToGetThere: "Located at Kilometer Point 18 (PK18) on the west coast in Puna'auia. Accessible by car or local bus.",
        openingHours: "Open 24/7.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Hike Mont Aorai",
        description: "For the truly adventurous and physically fit, hiking Mont Aorai is an unforgettable challenge. As Tahiti's third-highest peak, it offers some of the most spectacular and dramatic views on the island. The trail is demanding, often muddy, and involves narrow ridges, so it's not for the faint of heart. \n\nThe full hike to the summit is typically done over two days, with an overnight stay in a basic shelter. However, a shorter day hike to the first shelter (a 4-5 hour round trip) still provides incredible panoramic views of Papeete, the lagoon, and Moorea. This trek offers a powerful connection to Tahiti's wild, untamed interior.",
        practicalInfo: {
        howToGetThere: "The trailhead is located at the Le Belvédère restaurant, accessible via a steep road from Pirae. A 4x4 is recommended for the road.",
        openingHours: "Accessible 24/7, but start early in the morning to avoid heat and afternoon rain.",
        cost: "Free. Hiring a local guide is highly recommended for safety.",
        website: "https://www.tahititourisme.com/en-us/vacation-activities/aorai-hike/"
      }
      },
        {
        name: "Bougainville Park (Parc Bougainville)",
        description: "Named after the French explorer Louis Antoine de Bougainville, who landed in Tahiti in 1768, this small and tranquil park offers a shady oasis in the city center. It's a pleasant spot to rest your feet after exploring the nearby shops and waterfront. \n\nThe park features two large cannons salvaged from the Seeadler, a German schooner scuttled in the Tuamotu Archipelago during WWI, and a bronze statue of Bougainville. The giant Banyan trees provide ample shade, and a small stream runs through the grounds, creating a peaceful ambiance right next to the busy downtown streets.",
        practicalInfo: {
        howToGetThere: "Located in downtown Papeete, across from Place Vai'ete.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Tomb of King Pōmare V",
        description: "Visit a unique and slightly unusual historical site at the Tomb of King Pōmare V, the last king of Tahiti. Located in Arue, just east of Papeete, the tomb is notable for its construction. It was originally intended to be the Queen Mother's water cistern, but was repurposed upon the king's death in 1891. \n\nThe tomb is constructed from coral blocks and is topped with what looks like a red Greek urn, which some say is a nod to the king's notorious love for French spirits like Benedictine. It's a quick but interesting stop that offers a glimpse into the end of Tahiti's royal era and the transition to French rule.",
        practicalInfo: {
        howToGetThere: "Located in Arue, on the coast road. Best reached by car or taxi. It's on the grounds of the former royal residence.",
        openingHours: "Accessible during daylight hours.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Shopping for Pareu and Monoi Oil",
        description: "Immerse yourself in Polynesian culture by shopping for two of its most iconic products: the pareu and monoi oil. The pareu is a brightly colored sarong, an incredibly versatile piece of clothing that can be tied in dozens of ways. You'll find them everywhere, from high-end boutiques to the bustling stalls of the Papeete Market. \n\nMonoi oil is a fragrant, infused perfume oil made from soaking the petals of Tahitian gardenias (tiare flowers) in coconut oil. It's used for moisturizing skin and hair and is a signature scent of the islands. Exploring the different shops, smelling the various scents of monoi, and choosing a vibrant pareu is a cultural activity in itself and provides the perfect authentic souvenir.",
        practicalInfo: {
        howToGetThere: "The best selection is at the Marché de Papeete. You can also find boutiques along the Centre Vaima and Boulevard Pōmare.",
        openingHours: "Varies by shop, but generally standard retail hours (9:00 AM - 5:00 PM).",
        cost: "Pareus range from 1,000-3,000 XPF. Monoi oil starts around 500 XPF.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Walking is easy for the compact downtown area, including the market, waterfront, and ferry terminal. For longer distances, taxis are available but can be expensive; always agree on a fare beforehand. 'Le Truck' is the informal public bus system—it's cheap and a local experience, but runs on a loose schedule. Rental cars are the best option for exploring the entire island of Tahiti at your own pace.",
        whereToStay: "For convenience, stay near the Papeete waterfront or downtown area, which puts you within walking distance of attractions and restaurants. For a more resort-style experience, the Puna'auia commune, west of the city, has several beachfront hotels with stunning lagoon views. Recommendations: Hotel Tahiti Nui (downtown, mid-range), InterContinental Tahiti Resort & Spa (Puna'auia, luxury), or Mahana Lodge Hostel & Backpacker (budget).",
        bestTimeToVisit: "The best time to visit Papeete is during the dry season, from May to October. You'll experience less rain, lower humidity, and plenty of sunshine, making it ideal for outdoor activities. This is also the peak tourist season, so expect higher prices and more crowds. The wet season, from November to April, sees more rain and humidity but also fewer tourists and often lower prices. The famous Heiva Nui cultural festival takes place in July, making it a vibrant but busy time to visit.",
        suggestedItinerary: "Day 1: City & Culture. Morning at the Marché de Papeete, visit the Papeete Cathedral, and learn at the Robert Wan Pearl Museum. Stroll through Bougainville Park. Evening dinner at the Place Vai'ete roulottes.\nDay 2: Coastal Exploration. Rent a car and drive east to visit the Fa'aruma'i Waterfalls and historic Point Venus. In the afternoon, head west to relax and snorkel at Plage de Vaiava (PK18).\nDay 3: Moorea Day Trip. Take an early ferry to Moorea. Rent a scooter or car to drive around the island, stopping at Ōpūnohu Bay and Cook's Bay. Enjoy lunch at a beachside café before catching an afternoon ferry back to Papeete."
      }}
      faqs={[{
          question: "Is Papeete expensive?",
          answer: "Yes, Papeete and French Polynesia in general are considered expensive travel destinations. This is primarily because most goods, from food to fuel, have to be imported. Accommodation, tours, and restaurant dining can be costly. To save money, eat at the 'roulottes' (food trucks), shop for supplies at local supermarkets like Carrefour, and utilize 'Le Truck' for transportation where possible."
        },
        {
          question: "How many days do you need in Papeete?",
          answer: "Two to three days are sufficient to explore the main sights of Papeete itself. This gives you enough time to see the market, museums, and waterfront, and to take a day trip to explore other parts of Tahiti. Many travelers use Papeete as a starting or ending point for their trip to other islands like Moorea or Bora Bora, often staying just one or two nights."
        },
        {
          question: "Is Papeete safe?",
          answer: "Papeete is generally a safe city for tourists. However, like any urban area, it's wise to take standard precautions. Practice common sense, be aware of your surroundings, especially after dark, and avoid walking alone in poorly lit areas. Petty crime, such as pickpocketing, can occur in crowded places like the market, so keep your valuables secure."
        },
        {
          question: "What is Papeete famous for?",
          answer: "Papeete is famous for being the vibrant capital and economic hub of French Polynesia. Its key highlights include the world-renowned Tahitian black pearl, the bustling Marché de Papeete (public market), the lively evening 'roulottes' (food trucks) at Place Vai'ete, and for being the primary gateway for international travelers heading to the idyllic outer islands like Bora Bora and Moorea."
        }
      ]}
    />
  );
};