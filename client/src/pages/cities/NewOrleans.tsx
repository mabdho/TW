import React from 'react';
import { CityPage } from '../../components/CityPage';

export const NewOrleans: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in New Orleans, USA (2025 Guide)"}
      description={"Steeped in a rich tapestry of history, music, and culinary artistry, New Orleans is a city that dances to its own rhythm. The air here is thick with the scent of magnolias and beignets, and the streets echo with the soulful sounds of jazz. From the iron-laced balconies of the French Quarter to the stately mansions of the Garden District, the Crescent City offers an intoxicating blend of French, Spanish, African, and American cultures. It's a place where every corner tells a story, every meal is a celebration, and every night is an invitation to 'laissez les bons temps rouler'—let the good times roll. Whether you're a history buff, a foodie, or a music lover, discovering the best things to do in New Orleans is an unforgettable adventure that engages all the senses and captures the heart."}
      highlights={["Explore the French Quarter",
        "Listen to Live Jazz at Preservation Hall",
        "Visit The National WWII Museum",
        "Ride the St. Charles Streetcar",
        "Wander Through Jackson Square"]}
      attractions={[
        {
        name: "Explore the French Quarter",
        description: "The vibrant heart of New Orleans, the French Quarter (Vieux Carré) is a captivating maze of historic streets, hidden courtyards, and iconic architecture. Its cast-iron balconies draped in ferns and flowers overlook bustling streets filled with artists, musicians, and fortune-tellers. By day, explore antique shops, art galleries, and historic landmarks. By night, the neighborhood transforms as the neon glow of Bourbon Street comes alive and the sounds of live music spill from countless bars and clubs. Beyond the party, the Quarter is a living museum, offering a glimpse into the city's multicultural past at every turn.",
        practicalInfo: {
        howToGetThere: "Located in the heart of the city, the French Quarter is best explored on foot. It's easily accessible from most downtown hotels.",
        openingHours: "24/7, though individual shop and restaurant hours vary.",
        cost: "Free to explore.",
        website: "https://www.neworleans.com/plan/neighborhoods/french-quarter/"
      }
      },
        {
        name: "Listen to Live Jazz at Preservation Hall",
        description: "For an authentic, unadulterated New Orleans jazz experience, nothing compares to Preservation Hall. This historic, no-frills venue has been dedicated to preserving traditional New Orleans jazz since 1961. Inside the intimate, rustic space, you'll sit on simple wooden benches or stand in the back, just feet away from some of the city's most talented musicians. The acoustic performances are powerful, soulful, and transport you back to the roots of this uniquely American art form. It's a stripped-down, pure celebration of music that is an absolute must for any visitor.",
        practicalInfo: {
        howToGetThere: "Located at 726 St. Peter Street in the French Quarter.",
        openingHours: "Shows typically run nightly. Check the website for specific times and to purchase tickets in advance.",
        cost: "Around $25-$50 per person. Tickets often sell out.",
        website: "https://www.preservationhall.com/"
      }
      },
        {
        name: "Visit The National WWII Museum",
        description: "Designated by Congress as America's official National WWII Museum, this sprawling institution offers a profound and immersive look into the war that changed the world. Through powerful personal narratives, stunning artifacts, and interactive exhibits, the museum tells the story of the American experience in the war. From the beaches of Normandy to the jungles of the Pacific, the exhibits are incredibly detailed and moving. Plan to spend at least half a day here; the sheer scale and emotional weight of the museum make it a compelling and essential stop.",
        practicalInfo: {
        howToGetThere: "Located at 945 Magazine Street in the Warehouse/Arts District. Accessible via the St. Charles Streetcar.",
        openingHours: "Daily, 9:00 AM - 5:00 PM.",
        cost: "Approximately $35 for adults, with discounts for seniors, military, and students.",
        website: "https://www.nationalww2museum.org/"
      }
      },
        {
        name: "Ride the St. Charles Streetcar",
        description: "Step back in time aboard the historic St. Charles Streetcar, the oldest continuously operating streetcar line in the world. The gentle rumble and clanging bell of the iconic green car provide a charming and scenic way to see the city. The route takes you from the Central Business District, through the picturesque Garden District with its grand mansions and oak-lined streets, all the way to the Carrollton neighborhood. It's not just transportation; it's a moving landmark and one of the most relaxing and affordable ways to soak in the city's architectural beauty.",
        practicalInfo: {
        howToGetThere: "Board along St. Charles Avenue or at the Canal Street stop.",
        openingHours: "Operates 24/7 with varying frequency.",
        cost: "$1.25 per ride or purchase a Jazzy Pass for unlimited rides.",
        website: "https://www.norta.com/ride-with-us/routes-schedules/streetcars/47-st-charles-streetcar"
      }
      },
        {
        name: "Wander Through Jackson Square",
        description: "Jackson Square is the historic and cultural epicenter of the French Quarter. This beautifully landscaped park, with its iconic statue of Andrew Jackson on horseback, is framed by some of the city's most important buildings: the magnificent St. Louis Cathedral, the Presbytère, and the Cabildo. The square itself is a lively open-air artist colony, where local painters display their work along the iron fence, and street performers, musicians, and tarot card readers entertain passersby. It's the perfect spot to people-watch, absorb the city's atmosphere, and capture a quintessential New Orleans photograph.",
        practicalInfo: {
        howToGetThere: "Located on Decatur Street, facing the Mississippi River in the French Quarter.",
        openingHours: "Daily, 8:00 AM to 6:00 PM (or dusk).",
        cost: "Free to enter the square.",
        website: "https://www.neworleans.com/listing/jackson-square/32145/"
      }
      },
        {
        name: "Tour a Historic Cemetery (St. Louis Cemetery No. 1)",
        description: "New Orleans' historic cemeteries are known as 'Cities of the Dead' for their elaborate, above-ground tombs, a necessity due to the city's high water table. St. Louis Cemetery No. 1, established in 1789, is the oldest and most famous. Here, you'll wander through narrow, labyrinthine paths, discovering the final resting places of prominent New Orleanians, including the legendary Voodoo Queen, Marie Laveau. The unique burial traditions and hauntingly beautiful architecture offer a fascinating insight into the city's history and culture. Due to regulations, entry is only permitted with a licensed tour guide.",
        practicalInfo: {
        howToGetThere: "Located at 425 Basin Street, on the edge of the French Quarter. Access is by guided tour only.",
        openingHours: "Tour times vary, typically operating daily between 9:00 AM and 4:00 PM.",
        cost: "Tours typically cost $25-$35 per person.",
        website: "https://www.saveourcemeteries.org/st-louis-cemetery-no-1/"
      }
      },
        {
        name: "Experience Mardi Gras World",
        description: "Get a magical, behind-the-scenes look at Mardi Gras any day of the year at Mardi Gras World. This massive workshop is where artisans and craftsmen build the breathtakingly intricate floats for the city's famous parades. On a guided tour, you'll learn about the history of Carnival, watch artists at work, and wander among towering sculptures of mythical creatures, historical figures, and pop culture icons. Don't forget to try on some elaborate costumes and sample a slice of King Cake, a Mardi Gras tradition.",
        practicalInfo: {
        howToGetThere: "1380 Port of New Orleans Place. A free shuttle is available from several French Quarter locations.",
        openingHours: "Daily, 9:00 AM - 5:30 PM.",
        cost: "Around $22 for adults.",
        website: "https://www.mardigrasworld.com/"
      }
      },
        {
        name: "Stroll Down Frenchmen Street",
        description: "If you're looking for the soul of New Orleans' music scene, head to Frenchmen Street in the Faubourg Marigny neighborhood. Just a short walk from the French Quarter, this vibrant, two-block stretch is packed with the city's best live music venues. Here, the vibe is more local and less tourist-heavy than Bourbon Street. You can wander from club to club, hearing everything from traditional jazz and blues to funk and reggae. The street is alive with energy, with brass bands often playing spontaneously on the corners.",
        practicalInfo: {
        howToGetThere: "Located in the Faubourg Marigny, adjacent to the French Quarter. A short walk or cab ride.",
        openingHours: "Clubs get going in the evening and run late into the night.",
        cost: "Free to walk the street; most clubs have a cover charge or a one-drink minimum.",
        website: "https://www.frenchmenstreetlive.com/"
      }
      },
        {
        name: "Indulge at Café Du Monde",
        description: "No trip to New Orleans is complete without a visit to the iconic Café Du Monde. This legendary, open-air coffee shop has been serving its signature chicory coffee and hot beignets since 1862. Beignets are square pieces of fried dough, generously covered in powdered sugar, and they are a quintessential New Orleans treat. The simple menu hasn't changed in over a century. Grabbing a table, sipping a café au lait, and getting powdered sugar all over yourself is a rite of passage for every visitor.",
        practicalInfo: {
        howToGetThere: "Located at 800 Decatur Street in the French Market, across from Jackson Square.",
        openingHours: "Open 24 hours a day, 7 days a week (closed only on Christmas Day).",
        cost: "Inexpensive. An order of beignets (3 pieces) and a coffee costs under $10.",
        website: "https://shop.cafedumonde.com/"
      }
      },
        {
        name: "Explore the Garden District",
        description: "Escape the bustle of the French Quarter and explore the serene elegance of the Garden District. This opulent neighborhood is famous for its stunning collection of well-preserved antebellum mansions, lush gardens, and streets lined with majestic live oaks. It's a walker's paradise, perfect for a self-guided tour to admire the grand Greek Revival and Italianate architecture. Keep an eye out for celebrity homes and historic properties like the Buckner Mansion, featured in 'American Horror Story: Coven.' The area exudes an air of Southern grace and historic charm.",
        practicalInfo: {
        howToGetThere: "Best accessed via the St. Charles Streetcar from downtown.",
        openingHours: "Best explored during daylight hours.",
        cost: "Free to walk around. Guided tours are also available for a fee.",
        website: "https://www.neworleans.com/plan/neighborhoods/garden-district/"
      }
      },
        {
        name: "Take a Swamp Tour",
        description: "Venture just outside the city to explore the mysterious and beautiful bayous of Louisiana. Swamp tours offer a thrilling opportunity to see the region's unique ecosystem and wildlife up close. Glide through moss-draped cypress trees on an airboat or a traditional tour boat as your guide points out alligators, turtles, herons, and other native creatures. These tours are not only exciting but also educational, providing insight into the Cajun culture and the vital importance of the wetlands to the region.",
        practicalInfo: {
        howToGetThere: "Most tour operators offer hotel pickup from New Orleans. The swamps are about a 30-45 minute drive from the city.",
        openingHours: "Tours run daily, with various departure times.",
        cost: "$50-$90 per person, depending on the type of boat (airboat tours are more expensive).",
        website: "https://www.neworleans.com/things-to-do/tours/swamp-tours/"
      }
      },
        {
        name: "Visit the New Orleans Museum of Art (NOMA) and Sculpture Garden",
        description: "Located in the beautiful City Park, the New Orleans Museum of Art (NOMA) is the city's premier fine arts institution. Its impressive permanent collection features over 40,000 objects, spanning French and American art, photography, glass, and African and Japanese works. After exploring the museum, step outside into the magnificent Sydney and Walda Besthoff Sculpture Garden. This world-class, 11-acre garden features more than 90 sculptures set among lagoons, live oaks, and pines. It's a tranquil and inspiring blend of art and nature.",
        practicalInfo: {
        howToGetThere: "Located at One Collins C. Diboll Circle in City Park. Accessible via the Canal Streetcar (City Park line).",
        openingHours: "Tuesday-Sunday, 10:00 AM - 5:00 PM. Closed Mondays.",
        cost: "Museum admission is around $15 for adults. The Sculpture Garden is free to the public.",
        website: "https://noma.org/"
      }
      },
        {
        name: "Discover the Backstreet Cultural Museum",
        description: "For a truly unique and authentic cultural experience, visit the Backstreet Cultural Museum in the historic Tremé neighborhood. This small but vibrant museum is a tribute to New Orleans' African American parade traditions, including Mardi Gras Indians, jazz funerals, and social aid and pleasure clubs. The collection is a dazzling display of elaborate, hand-sewn Mardi Gras Indian suits, feathered and beaded with incredible artistry. Founded and curated by the late Sylvester 'Hawk' Francis, the museum offers a deeply personal and powerful look into the cultural heartbeat of the city.",
        practicalInfo: {
        howToGetThere: "Located at 1531 St. Philip Street in the Tremé. It's a short walk from the French Quarter.",
        openingHours: "Tuesday-Saturday, 10:00 AM - 4:00 PM. Check website for updates as hours can vary.",
        cost: "Around $20 per person.",
        website: "https://www.backstreetculturalmuseum.org/"
      }
      },
        {
        name: "Take a Creole Cooking Class",
        description: "New Orleans' cuisine is world-famous, and taking a cooking class is one of the best souvenirs you can bring home. Several schools, like the New Orleans School of Cooking, offer fun, hands-on classes where you'll learn the secrets behind classic Creole and Cajun dishes. Under the guidance of a local chef, you'll chop, sauté, and simmer your way to creating Louisiana staples like gumbo, jambalaya, and pralines. It's an interactive and delicious way to immerse yourself in the local culture.",
        practicalInfo: {
        howToGetThere: "Various locations, with many popular schools located in or near the French Quarter.",
        openingHours: "Classes are offered daily, typically in the morning and afternoon. Booking in advance is essential.",
        cost: "$35-$150 per person, depending on demonstration vs. hands-on format.",
        website: "https://neworleansschoolofcooking.com/"
      }
      },
        {
        name: "Cruise on the Steamboat Natchez",
        description: "Experience the romance of the Mississippi River aboard the Steamboat Natchez, the last authentic steamboat in New Orleans. A two-hour cruise offers unparalleled views of the city skyline and the bustling port from a unique perspective. Choose from a daytime harbor cruise or an evening dinner jazz cruise. The rhythmic churn of the paddlewheel and the live jazz music from the Dukes of Dixieland create a wonderfully nostalgic atmosphere. It's a classic New Orleans experience that combines sightseeing, history, and music.",
        practicalInfo: {
        howToGetThere: "Docks at the Toulouse Street Wharf, behind Jax Brewery in the French Quarter.",
        openingHours: "Multiple cruises daily. Check the schedule and book tickets online.",
        cost: "Daytime cruises start around $40; evening dinner cruises are around $90.",
        website: "https://www.steamboatnatchez.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "New Orleans is surprisingly walkable, especially in the French Quarter and surrounding areas. The historic St. Charles and Canal Streetcar lines are a charming and affordable way to reach the Garden District, City Park, and Mid-City. The RTA bus system covers the rest of the city. Ride-sharing services like Uber and Lyft are widely available, as are traditional taxis and pedicabs for short trips.",
        whereToStay: "For first-time visitors, staying in or near the French Quarter is ideal for its proximity to major attractions. The Central Business District (CBD) and Warehouse/Arts District offer more modern hotels and are still within walking distance. The elegant Garden District provides a quieter, more scenic stay in historic inns and boutique hotels. For a bohemian vibe and proximity to music clubs, consider the Faubourg Marigny.",
        bestTimeToVisit: "The best times to visit New Orleans are in the spring (February to May) and fall (October to November) when the weather is pleasantly mild. Spring is festival season, highlighted by Mardi Gras (dates vary, typically February or early March) and the New Orleans Jazz & Heritage Festival (late April/early May). Summers are hot and humid, while winters are mild but can be rainy.",
        suggestedItinerary: "Day 1: Immerse yourself in the French Quarter. Start with beignets at Café Du Monde, explore Jackson Square and St. Louis Cathedral, browse the French Market, and tour a historic home. In the evening, enjoy dinner and live music on Frenchmen Street. Day 2: History and elegance. Spend the morning at The National WWII Museum. In the afternoon, ride the St. Charles Streetcar through the Garden District, taking a walking tour of the grand mansions. Day 3: Culture and bayous. Choose between a morning swamp tour or a visit to the New Orleans Museum of Art in City Park. In the afternoon, take a Creole cooking class or visit Mardi Gras World. End your trip with a jazz show at Preservation Hall."
      }}
      faqs={[{
          question: "Is New Orleans expensive?",
          answer: "New Orleans can fit a range of budgets. Accommodation and flight prices surge during major events like Mardi Gras and Jazz Fest. Food can be very affordable, from po-boy shops to reasonably priced Creole bistros. Many key attractions, like walking the French Quarter, are free. Transportation on the streetcar is very cheap. Overall, it's considered more affordable than other major US cities like New York or San Francisco, but planning ahead is key to managing costs."
        },
        {
          question: "How many days do you need in New Orleans?",
          answer: "A long weekend of 3 to 4 days is enough to see the main highlights, including the French Quarter, the Garden District, and some live music. However, to truly soak in the city's unique atmosphere, take a swamp tour, explore different neighborhoods, and enjoy the food scene at a relaxed pace, a 5 to 7-day trip is ideal."
        },
        {
          question: "Is New Orleans safe?",
          answer: "Like any major city, New Orleans has areas of high crime. However, the main tourist areas like the French Quarter, CBD, and Garden District are generally safe, especially during the day. It's important to practice common-sense safety: be aware of your surroundings, especially at night; avoid walking alone in poorly lit or deserted areas; don't flash expensive belongings; and stick to well-populated streets. Be cautious of street hustles and overconsumption of alcohol."
        },
        {
          question: "What is New Orleans famous for?",
          answer: "New Orleans is world-famous for being the birthplace of jazz music. It's also renowned for its unique and delicious cuisine, a blend of Creole and Cajun influences featuring dishes like gumbo, jambalaya, and beignets. The city is synonymous with its massive, vibrant Mardi Gras celebration. Additionally, it's known for its distinct French and Spanish Creole architecture, historic streetcars, voodoo lore, and its 'laissez les bons temps rouler' (let the good times roll) attitude."
        }
      ]}
    />
  );
};