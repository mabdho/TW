import React from 'react';
import { CityPage } from '../../components/CityPage';

export const PanamaCity: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Panama City, Panama (2025 Guide)"}
      description={"A vibrant metropolis where shimmering skyscrapers tower over colonial ruins and a lush rainforest thrives within city limits, Panama City is a captivating study in contrasts. This global banking hub and gateway to natural wonders is defined by the monumental Panama Canal, a marvel of human engineering. Yet, beyond this famous waterway lies a city buzzing with Latin energy, culinary delights, and rich history. From the cobblestone streets of its UNESCO-listed Old Quarter to the wild trails of its urban jungles, there's an incredible diversity of experiences waiting to be discovered. Whether you're a history buff, a nature lover, or a foodie, you'll find an abundance of unforgettable adventures. This guide will walk you through the very best things to do in Panama City, ensuring your trip is nothing short of spectacular."}
      highlights={["Panama Canal (Miraflores Visitor Center)",
        "Casco Viejo (The Old Quarter)",
        "Amador Causeway (Calzada de Amador)",
        "Parque Natural Metropolitano",
        "Biomuseo"]}
      attractions={[
        {
        name: "Panama Canal (Miraflores Visitor Center)",
        description: "No trip to Panama is complete without witnessing the engineering marvel that is the Panama Canal. The Miraflores Visitor Center is the most accessible place to experience this spectacle. From its tiered observation decks, you can watch colossal container ships and cruise liners being raised and lowered through the locks, a process that has connected the Atlantic and Pacific oceans for over a century. The on-site museum offers a comprehensive look at the canal's dramatic history, from its challenging construction to its modern expansion. The sheer scale of the operation is breathtaking, and seeing it firsthand provides a deep appreciation for this vital artery of global trade.",
        practicalInfo: {
        howToGetThere: "Located about 20-30 minutes from downtown. Best reached by Uber, taxi, or a designated tour bus. Public transport is less direct.",
        openingHours: "Daily, 8:00 AM - 5:00 PM (Last admission at 4:00 PM)",
        cost: "Adults: ~$17 USD, Children (6-12): ~$7 USD. Prices can vary.",
        website: "https://visitcanaldepanama.com/"
      }
      },
        {
        name: "Casco Viejo (The Old Quarter)",
        description: "Step back in time in Casco Viejo, Panama City's historic district and a UNESCO World Heritage site. Founded in 1673, this charming neighborhood is a maze of cobblestone streets, colonial-era churches, and grand plazas. Beautifully restored buildings with wrought-iron balconies sit alongside character-filled ruins, creating a unique and photogenic atmosphere. By day, it's a hub for exploring museums, artisan shops, and quaint cafes. By night, Casco Viejo transforms into the city's premier destination for nightlife, with world-class restaurants, chic rooftop bars offering stunning skyline views, and lively salsa clubs.",
        practicalInfo: {
        howToGetThere: "Easily accessible by Uber or taxi. The 5 de Mayo metro station is a 15-minute walk away. It's a very walkable neighborhood.",
        openingHours: "24/7, though shops and attractions have specific hours (typically 10 AM - 6 PM).",
        cost: "Free to walk around. Entrance fees apply for specific museums or churches.",
        website: "https://www.cascoviejo.org/"
      }
      },
        {
        name: "Amador Causeway (Calzada de Amador)",
        description: "Built with rocks excavated during the canal's construction, the Amador Causeway connects the mainland to four small islands: Naos, Perico, Culebra, and Flamenco. This scenic, 6-kilometer stretch offers unparalleled views of the Panama City skyline on one side and the Bridge of the Americas and canal entrance on the other. The causeway is a popular recreational hub for locals and tourists alike. Rent a bike or a multi-person quadricycle, jog along the dedicated path, or simply enjoy a leisurely stroll. The islands host a variety of restaurants, souvenir shops, a marina, and the iconic Biomuseo.",
        practicalInfo: {
        howToGetThere: "Best reached by Uber or taxi. There is ample parking if you drive.",
        openingHours: "Open 24/7. Bike rentals and shops typically operate from 9 AM to 7 PM.",
        cost: "Free to access. Bike rentals cost around $5-10 per hour.",
        website: "N/A (Public space)"
      }
      },
        {
        name: "Parque Natural Metropolitano",
        description: "Discover a tropical rainforest right in the heart of Panama City. The Parque Natural Metropolitano is the only wildlife refuge in Central America located within a city's municipal boundaries. Spanning 232 hectares, this 'city lung' features several well-marked trails that wind through dense jungle, leading to lookout points with panoramic views of the city, the canal, and Ancon Hill. It's an incredible place for birdwatching and wildlife spotting; you might encounter sloths, agoutis, iguanas, and Geoffroy's tamarins. It's a perfect escape from the urban hustle without having to travel far.",
        practicalInfo: {
        howToGetThere: "Located in the Ancón district, a short taxi or Uber ride from most central hotels.",
        openingHours: "Daily, 6:30 AM - 4:30 PM.",
        cost: "Foreigners: ~$4 USD, Nationals: ~$1 USD.",
        website: "https://parquemetropolitano.org/"
      }
      },
        {
        name: "Biomuseo",
        description: "Instantly recognizable by its vibrantly colored, deconstructed design, the Biomuseo is the only building in Latin America designed by world-renowned architect Frank Gehry. The museum's striking exterior is a prelude to the fascinating story it tells inside: the story of how the isthmus of Panama rose from the sea, uniting two continents and changing the planet's biodiversity forever. Eight permanent galleries use interactive exhibits and stunning visual displays to explore Panama's unique natural heritage and its immense global impact. It's both an architectural landmark and a brilliant educational experience.",
        practicalInfo: {
        howToGetThere: "Located on the Amador Causeway. Accessible by taxi, Uber, or the Hop-On Hop-Off bus.",
        openingHours: "Tuesday - Friday: 10 AM - 3 PM; Saturday - Sunday: 11 AM - 4 PM. Closed Mondays.",
        cost: "Adults: ~$18 USD, Students/Seniors: ~$12 USD.",
        website: "https://www.biomuseo.org/"
      }
      },
        {
        name: "Panamá Viejo",
        description: "Explore the roots of Panama City at Panamá Viejo, the ruins of the original city founded in 1519 by Spanish conquistador Pedro Arias Dávila. This was the first permanent European settlement on the Pacific Ocean. In 1671, after being looted and destroyed by pirate Henry Morgan, the city was relocated to what is now Casco Viejo. Today, the archaeological site is a UNESCO World Heritage site where you can wander among the stone remnants of cathedrals, convents, and homes. Climb the restored bell tower of the old cathedral for a fantastic 360-degree view that juxtaposes the ancient ruins with the modern city skyline.",
        practicalInfo: {
        howToGetThere: "Located in the Costa del Este area. Best reached by taxi or Uber.",
        openingHours: "Tuesday - Sunday, 8:30 AM - 4:30 PM. Closed Mondays.",
        cost: "Foreigners: ~$10 USD, which includes museum access.",
        website: "https://www.patronatopanamaviejo.org/"
      }
      },
        {
        name: "Ancon Hill (Cerro Ancón)",
        description: "For the best panoramic views of Panama City, make the trek up Ancon Hill. This 199-meter (653-foot) hill is a protected reserve and a prominent landmark, easily identified by the giant Panamanian flag flying at its summit. The paved road to the top is a steep but manageable 30-40 minute walk, closed to private vehicles. As you ascend, keep an eye out for sloths, toucans, and deer. The reward at the top is a breathtaking vista encompassing Casco Viejo, the modern skyline, the Amador Causeway, and the Bridge of the Americas. It's best to go early in the morning to avoid the midday heat.",
        practicalInfo: {
        howToGetThere: "Take a taxi or Uber to the base of the hill (Mi Pueblito entrance). From there, you must walk up.",
        openingHours: "Daily, approximately 6:00 AM to 5:00 PM.",
        cost: "Free.",
        website: "N/A (Public space)"
      }
      },
        {
        name: "Cinta Costera",
        description: "The Cinta Costera is a sprawling, manicured waterfront park that stretches for several kilometers along Panama Bay. It's a beloved public space for recreation and relaxation, offering dedicated lanes for walking, jogging, and cycling. The park is dotted with green spaces, playgrounds, outdoor gyms, and sports courts for basketball and volleyball. It provides a stunning, uninterrupted view of the downtown skyline, making it a favorite spot for photographers, especially at sunset. The Cinta Costera connects the modern banking district with Casco Viejo and the Mercado de Mariscos, making it a pleasant and scenic route to walk between these key areas.",
        practicalInfo: {
        howToGetThere: "Accessible from multiple points along Avenida Balboa. Very central and easy to walk to from many hotels.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A (Public space)"
      }
      },
        {
        name: "Mercado de Mariscos",
        description: "For a truly local and flavorful experience, head to the Mercado de Mariscos (Seafood Market). Located at the edge of Casco Viejo where the Cinta Costera begins, this bustling market is where the city's fishermen bring their daily catch. Downstairs, you can see vendors selling a huge variety of fresh fish and seafood. Upstairs, and in the numerous stalls outside, you'll find simple eateries serving up incredibly fresh dishes. The star of the show is the Panamanian-style ceviche—raw fish cured in lime juice, onions, and cilantro, typically served with crackers or fried plantains. It's cheap, delicious, and an authentic taste of Panama.",
        practicalInfo: {
        howToGetThere: "Located on the Cinta Costera, at the entrance to Casco Viejo. A short walk from the 5 de Mayo metro station.",
        openingHours: "Market opens early (~6 AM). Restaurants typically serve from 11 AM to late evening.",
        cost: "Free to enter. A cup of fresh ceviche costs around $2-4 USD.",
        website: "N/A"
      }
      },
        {
        name: "Soberanía National Park & Pipeline Road",
        description: "Just a 30-40 minute drive from the city, Soberanía National Park offers a deep dive into Panama's incredible biodiversity. This park is a world-renowned birding destination, particularly along the famous Pipeline Road, where an Audubon Society Christmas Bird Count once recorded over 500 species in a single day. Even if you're not an expert birder, a walk through the dense rainforest is a fantastic experience. The park is also home to monkeys, sloths, agoutis, and other tropical wildlife. Visiting the Panama Rainforest Discovery Center within the park allows you to climb a 32-meter observation tower for a canopy-level view.",
        practicalInfo: {
        howToGetThere: "Best accessed with a rental car, a taxi for the day, or a guided tour. Public transport is not practical.",
        openingHours: "Park is generally open daily. Discovery Center: 6 AM - 4 PM (Mon-Fri), 6 AM - 5 PM (Sat-Sun).",
        cost: "Park entry is ~$5 USD. Discovery Center is ~$20 USD for foreigners.",
        website: "https://pipelineroad.org/"
      }
      },
        {
        name: "Monkey Island (Gatun Lake Tour)",
        description: "Get up close with several species of monkeys on a boat tour to Gatun Lake, the massive artificial lake that forms a major part of the Panama Canal. These tours typically depart from a dock in Gamboa, about 45 minutes from the city. As you cruise along the channels of the canal, your guide will navigate to a series of small islands that are home to thriving populations of capuchin, howler, and tamarin monkeys. The monkeys are accustomed to the tour boats and will often come right up to the vessel, offering incredible photo opportunities. The tour also provides a unique perspective of the canal's ecosystem and the huge ships passing by.",
        practicalInfo: {
        howToGetThere: "Best done through a pre-booked tour, which usually includes transportation from your hotel.",
        openingHours: "Tours typically run in the morning and early afternoon.",
        cost: "Tours range from $50 to $100+ USD per person, often including transport and other activities.",
        website: "N/A (Book through local tour operators like Gamboa Rainforest Resort or others)."
      }
      },
        {
        name: "El Cangrejo Neighborhood",
        description: "For a taste of modern Panamanian life, spend some time exploring El Cangrejo. This central, bohemian neighborhood is known for its leafy streets, laid-back atmosphere, and diverse culinary scene. Its main thoroughfare, Via Argentina, is lined with restaurants offering everything from traditional Panamanian food to Spanish, Italian, and Greek cuisine. The area has a vibrant, cosmopolitan feel, with boutique hotels, quirky bars, and several language schools. A notable landmark is the striking Einstein Head statue in a central roundabout. It’s a great area to stroll around, grab a coffee, and enjoy a fantastic dinner away from the main tourist hubs.",
        practicalInfo: {
        howToGetThere: "Very central. Accessible via the Via Argentina and Iglesia del Carmen metro stations. Also a short Uber/taxi ride from other areas.",
        openingHours: "24/7. Restaurants and bars have their own hours.",
        cost: "Free to explore.",
        website: "N/A (Neighborhood)"
      }
      },
        {
        name: "Museo del Canal Interoceánico",
        description: "While the Miraflores Visitor Center focuses on the canal's operation, the Museo del Canal Interoceánico (Interoceanic Canal Museum) provides a deep, historical dive into its human story. Housed in a beautifully restored building in Casco Viejo that once served as the original headquarters for the French Canal Company, the museum details the entire saga of the canal. Exhibits cover the early Spanish colonial attempts, the disastrous French effort, the successful American construction, and the eventual handover to Panama. It’s a must-visit for history enthusiasts who want a more profound understanding of the canal's geopolitical and human significance.",
        practicalInfo: {
        howToGetThere: "Located in Plaza de la Independencia (Cathedral Plaza) in Casco Viejo. Easily walkable within the district.",
        openingHours: "Tuesday - Sunday, 10:00 AM - 6:00 PM. Closed Mondays.",
        cost: "Adults: ~$10 USD.",
        website: "https://museodelcanal.com/"
      }
      },
        {
        name: "Iglesia del Carmen",
        description: "A stunning architectural landmark, the Iglesia del Carmen is one of the most beautiful churches in Panama City. Located in the El Cangrejo neighborhood on Via España, its dramatic Gothic design stands in stark contrast to the modern skyscrapers and colonial buildings found elsewhere in the city. Built in the mid-20th century, its intricate stonework, towering spires, and beautiful stained-glass windows are reminiscent of a medieval European cathedral. Whether you're religious or simply an admirer of architecture, it's worth a visit to appreciate its unique beauty, both inside and out. It is an active church, so be respectful if a service is in progress.",
        practicalInfo: {
        howToGetThere: "Located on Via España. The Iglesia del Carmen metro station is right next to it.",
        openingHours: "Open daily for visitors, but hours can be limited. Best to visit in the morning or mid-afternoon outside of mass times.",
        cost: "Free, donations are welcome.",
        website: "N/A"
      }
      },
        {
        name: "Gamboa Rainforest Resort Aerial Tram",
        description: "For a bird's-eye view of the jungle, take a ride on the aerial tram at the Gamboa Rainforest Resort. Located about 45 minutes from the city near Soberanía National Park, this experience lifts you from the forest floor, through the understory, and up into the lush canopy. The slow, peaceful ride allows for fantastic views and opportunities to spot wildlife like sloths, monkeys, and exotic birds in their natural habitat. The journey culminates at an observation tower with spectacular views over Gatun Lake and the Chagres River. It's a serene and accessible way to experience the rainforest canopy without strenuous hiking.",
        practicalInfo: {
        howToGetThere: "Best reached by pre-booked tour, taxi, or rental car. It's part of the Gamboa Rainforest Resort.",
        openingHours: "Tours run throughout the day, typically starting around 8:00 AM. Check with the resort for specific times.",
        cost: "Around $50-60 USD for adults for the tram ride, often bundled with other activities.",
        website: "https://www.gamboaresort.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Getting around Panama City is relatively easy. Ride-sharing apps like Uber are prevalent, affordable, and generally more reliable than local taxis. The Panama Metro is clean, efficient, and great for traveling along its main routes, connecting the city center with areas like Albrook Mall. For exploring Casco Viejo and the Cinta Costera, walking is the best option. For longer distances or day trips, renting a car or hiring a private driver are good choices.",
        whereToStay: "Casco Viejo is perfect for those seeking boutique hotels, history, and vibrant nightlife. El Cangrejo and the Financial District (Obarrio) offer modern high-rise hotels from major chains, great restaurants, and central locations. San Francisco is a more residential, upscale area with trendy eateries and a local feel. Recommended hotels include The American Trade Hotel (Luxury, Casco Viejo), Sofitel Legend Casco Viejo (Luxury), W Panama (Modern, Financial District), and Hotel El Panama by Faranda Grand (Classic, El Cangrejo).",
        bestTimeToVisit: "The best time to visit Panama City is during the dry season, which runs from mid-December to April. During these months, you can expect sunny skies, lower humidity, and minimal rain, making it ideal for exploring outdoor attractions. The wet season (or 'green season') from May to early December sees more frequent, but often short-lived, afternoon downpours. The landscape is lusher during this time, and you may find better deals on flights and accommodation.",
        suggestedItinerary: "Day 1: Morning at the Panama Canal (Miraflores Locks). Afternoon and evening exploring the historic streets, museums, and rooftop bars of Casco Viejo. Day 2: Morning visit to Parque Natural Metropolitano or a Monkey Island tour from Gamboa. Afternoon biking or walking the Amador Causeway for skyline views. Day 3: Explore the ruins of Panamá Viejo in the morning. In the afternoon, walk a section of the Cinta Costera and explore the modern neighborhood of El Cangrejo for dinner."
      }}
      faqs={[{
          question: "Is Panama City expensive?",
          answer: "Panama City can be more expensive than other Central American capitals but is generally more affordable than major US or European cities. The official currency is the US Dollar. You can find budget-friendly options, such as local eateries (fondas) and using the metro, but prices for upscale dining, high-end hotels, and private tours are comparable to Western prices. A mid-range traveler can expect to spend $100-$150 USD per day."
        },
        {
          question: "How many days do you need in Panama City?",
          answer: "To see the main highlights of Panama City, a stay of 3 to 4 full days is recommended. This allows enough time to visit the Canal, explore both Casco Viejo and Panamá Viejo, and experience one of the nearby rainforests like Parque Metropolitano or Soberanía. If you want to include day trips to the San Blas Islands or other more distant locations, you should plan for 5 to 7 days."
        },
        {
          question: "Is Panama City safe?",
          answer: "Panama City is generally considered safe for tourists, especially in the main tourist areas like Casco Viejo, the Financial District, and the Amador Causeway. However, like any large city, it's wise to take precautions. Avoid walking alone at night in unlit areas, be aware of your surroundings to prevent petty theft like pickpocketing, and avoid neighborhoods like El Chorrillo or Calidonia, especially after dark. Using official taxis or ride-sharing apps is recommended over hailing cabs on the street."
        },
        {
          question: "What is Panama City famous for?",
          answer: "Panama City is most famous for the Panama Canal, an engineering marvel that connects the Atlantic and Pacific oceans. It is also renowned for its unique skyline, which dramatically combines modern skyscrapers with the historic colonial architecture of Casco Viejo, a UNESCO World Heritage site. The city serves as a major international banking and trade hub. Furthermore, it's famous for its incredible biodiversity, with a tropical rainforest located right within the city's limits."
        }
      ]}
    />
  );
};