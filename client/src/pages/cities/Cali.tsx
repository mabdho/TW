import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Cali: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Cali, Colombia (2025 Guide)"}
      description={"Welcome to Cali, the undisputed 'Salsa Capital of the World' and a city that moves to its own infectious rhythm. Tucked into Colombia's lush Cauca Valley, Cali pulses with a vibrant energy fueled by its warm, tropical climate and even warmer people. Beyond the world-renowned dance floors, you'll discover a city rich in culture, from the bohemian charm of its historic neighborhoods to the stunning natural beauty of the surrounding rivers and mountains. It's a place where afternoons are spent cooling off in the Pance River and nights come alive with the sound of trumpets and pounding drums. Whether you're here to master your dance moves, explore lush landscapes, or indulge in unique culinary delights, this guide will walk you through the very best things to do in Cali, ensuring a trip you'll never forget."}
      highlights={["Learn Salsa at a Local Dance School",
        "Explore the San Antonio Neighborhood",
        "Visit the Cristo Rey Statue",
        "Stroll Along El Gato del Río Park",
        "Experience a World-Class Salsa Show"]}
      galleryImages={[
        { url: "", alt: "Cali landmark 1", caption: "Cali landmark 1 - placeholder" },
        { url: "", alt: "Cali landmark 2", caption: "Cali landmark 2 - placeholder" },
        { url: "", alt: "Cali landmark 3", caption: "Cali landmark 3 - placeholder" },
        { url: "", alt: "Cali landmark 4", caption: "Cali landmark 4 - placeholder" },
        { url: "", alt: "Cali landmark 5", caption: "Cali landmark 5 - placeholder" },
        { url: "", alt: "Cali landmark 6", caption: "Cali landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Learn Salsa at a Local Dance School",
        description: "You cannot visit the world's salsa capital without trying the dance yourself. Cali is packed with dance schools for all levels, from absolute beginners to seasoned dancers looking to master the unique Caleño style, which is famous for its rapid and intricate footwork. Taking a private or group class is a fantastic way to immerse yourself in the local culture and connect with the city's soul.\n\nSchools like El Manicero, Son de Luz, and Swing Latino (which has trained world champions) offer drop-in classes and intensive courses. It’s more than just a lesson; it's an introduction to the passion that fuels the entire city. After a class, you'll have the confidence to try out your new moves at a local 'salsateca' (salsa club).",
        practicalInfo: {
        howToGetThere: "Schools are located throughout the city, with many concentrated in the San Antonio and Granada neighborhoods. Taxis or ride-sharing apps are the easiest way to get there.",
        openingHours: "Varies by school, but classes are typically available from morning until late evening.",
        cost: "Approximately $50,000 - $100,000 COP per person for a private one-hour class.",
        website: "Search for specific schools like 'El Manicero Cali' or 'Son de Luz Cali' online."
      }
      },
        {
        name: "Explore the San Antonio Neighborhood",
        description: "San Antonio is Cali's historic and bohemian heart. This charming hillside neighborhood is characterized by its well-preserved colonial architecture, colorful facades, and cobblestone streets. It’s a creative hub filled with art galleries, boutique shops, artisan workshops, and a plethora of quaint cafes and restaurants.\n\nThe centerpiece is the San Antonio Chapel, a small white church perched atop the hill, offering fantastic views of the city below. The park surrounding the chapel is a popular gathering spot for locals, especially at sunset, where you'll often find storytellers ('cuenteros') and street performers entertaining the crowds. It's the perfect place to wander without a plan, soaking up the relaxed, artistic atmosphere.",
        practicalInfo: {
        howToGetThere: "Located just west of the downtown area (El Centro), it's easily accessible on foot or by a short taxi ride.",
        openingHours: "24/7, but best explored during the day and early evening.",
        cost: "Free to explore.",
        website: "N/A (public neighborhood)"
      }
      },
        {
        name: "Visit the Cristo Rey Statue",
        description: "Perched on the Cerro de los Cristales, the Cristo Rey (Christ the King) statue stands with open arms, watching over the city of Cali. At 26 meters tall, it's slightly smaller than its famous counterpart in Rio de Janeiro but offers equally breathtaking panoramic views of the entire Cauca Valley, the city sprawl, and the surrounding mountains.\nThe journey up the hill is part of the experience, winding through lush greenery. Once at the top, you can walk around the base of the statue, visit the small chapel, and enjoy the tranquility away from the city bustle. It's a must-visit for photographers and anyone looking for a new perspective on Cali.",
        practicalInfo: {
        howToGetThere: "Located on a hill west of the city. Taking a taxi or ride-share is the most common and recommended way to get there and back, as public transport is limited.",
        openingHours: "Typically 8:00 AM - 11:00 PM.",
        cost: "Free to visit, but you must pay for transportation.",
        website: "N/A"
      }
      },
        {
        name: "Stroll Along El Gato del Río Park",
        description: "One of Cali's most whimsical and beloved landmarks is 'El Gato del Río' (The River Cat), a three-ton bronze sculpture by artist Hernando Tejada, playfully resting on the banks of the Cali River. This iconic cat has become a symbol of the city. A few years after its installation, the city added a delightful twist to the park.\n\nLocal artists were commissioned to create a series of decorated 'cat girlfriends' ('Las Novias del Gato'), each with its own unique style and personality. Today, you can stroll along the riverbank and admire the original Gato and his colorful collection of feline companions. It's a charming, open-air art gallery and a perfect spot for a relaxing walk.",
        practicalInfo: {
        howToGetThere: "Located in the El Peñón neighborhood, near the Cali River. It's a pleasant walk from the San Antonio or Granada neighborhoods.",
        openingHours: "24/7, best viewed during daylight hours.",
        cost: "Free.",
        website: "N/A (public park)"
      }
      },
        {
        name: "Experience a World-Class Salsa Show",
        description: "While taking a class is essential, seeing professional salsa dancers in action is a mind-blowing experience. Cali is home to world-famous salsa shows that are more like a Cirque du Soleil-style spectacle than a simple dance performance. These productions feature dazzling costumes, live orchestras, and incredibly skilled dancers performing at lightning speed.\nThe two most famous shows are Delirio and Ensálsate. Delirio combines salsa, circus, and orchestra in a massive tent for a unique party atmosphere, usually held on the last Friday of the month. Ensálsate is a more theatrical, cabaret-style show held in a large hotel ballroom. Both offer an unforgettable night of Caleño culture at its finest.",
        practicalInfo: {
        howToGetThere: "Locations vary. Check their websites for the venue. Taxis are the best option.",
        openingHours: "Shows typically run on specific weekend nights. Check their schedules and book tickets well in advance.",
        cost: "Expensive. Tickets can range from $200,000 to $450,000 COP or more.",
        website: "www.delirio.com.co and www.ensalsate.co"
      }
      },
        {
        name: "Hike Cerro de las Tres Cruces",
        description: "For active travelers and those seeking the best views, the hike up the 'Hill of the Three Crosses' is a Caleño ritual. This challenging urban hike is especially popular on weekends, when hundreds of locals make the steep ascent as part of their fitness routine. The trail is well-trodden but can be tough, rewarding climbers at the top with three large crosses and a stunning 360-degree view of Cali.\n\nAt the summit, you'll find vendors selling fresh juices and snacks, and an informal outdoor gym. It's a great way to experience local life, get a serious workout, and earn an incredible photo opportunity. It is highly recommended to do this hike in the morning to avoid the intense afternoon heat.",
        practicalInfo: {
        howToGetThere: "The main trailhead is in the Normandía neighborhood. You can take a taxi to the starting point.",
        openingHours: "Best to hike in the early morning (6:00 AM - 10:00 AM). Avoid hiking alone or late in the day for safety reasons.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Cool Off in the Pance River (Río Pance)",
        description: "When the Cali heat becomes intense, locals flock to the Pance River, a natural oasis just south of the city. This cool, refreshing river flows down from the Farallones de Cali mountains, creating numerous swimming spots and picnic areas along its banks. The area is known as a 'balneario', a traditional recreational bathing spot.\nThe most popular area is La Vorágine, but you can head further upriver to find quieter spots. Weekends are lively and crowded with families, music, and vendors selling food and drinks, offering an authentic slice of local life. During the week, it's a peaceful natural escape.",
        practicalInfo: {
        howToGetThere: "Located in the Pance district. You can take a taxi or a local bus (colectivo) from the city.",
        openingHours: "Accessible 24/7, but safest and most enjoyable during the day.",
        cost: "Free, though some recreational parks along the river may charge a small entrance fee.",
        website: "N/A"
      }
      },
        {
        name: "Admire La Ermita Church",
        description: "La Ermita is arguably Cali's most iconic architectural landmark. This stunning Gothic-style church, located in the heart of the city near the Cali River, looks like it was plucked straight from a European village. Its intricate design, Dutch clock, French stained-glass windows, and Italian marble create a striking contrast with the surrounding tropical environment.\nThe current church was built between 1930 and 1948 to replace an original, simpler chapel that was destroyed by an earthquake in 1925. It's a beautiful spot for photos, both day and night, and a peaceful place for quiet reflection just steps away from the bustling city center.",
        practicalInfo: {
        howToGetThere: "Located in El Centro, easily walkable from Plaza de Cayzedo.",
        openingHours: "Generally open to visitors during the day, but be respectful of mass times.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Visit the Cali Zoo (Zoológico de Cali)",
        description: "Consistently ranked as one of the best zoos in Latin America, the Zoológico de Cali is a fantastic attraction for all ages. The zoo is beautifully designed, with spacious enclosures that mimic the animals' natural habitats, all set within a lush botanical garden. It places a strong emphasis on Colombian and South American fauna.\n\nHighlights include the Andean condors, jaguars, spectacled bears, and a massive butterfly enclosure. The zoo is not just an attraction but a major center for conservation and environmental education. It's an excellent, well-maintained facility that provides a wonderful opportunity to learn about the incredible biodiversity of Colombia.",
        practicalInfo: {
        howToGetThere: "Located west of the city center, next to the Cali River. A taxi or ride-share is the easiest way to get there.",
        openingHours: "9:00 AM to 4:30 PM daily.",
        cost: "Approximately $25,000 - $30,000 COP for adults.",
        website: "www.zoologicodecali.com.co"
      }
      },
        {
        name: "Wander Through Plaza de Cayzedo",
        description: "Plaza de Cayzedo is the historical and political heart of Cali. As the city's main square, it's a bustling hub of activity surrounded by significant buildings, including the National Palace (Palacio Nacional), the Otero Building, and the imposing San Pedro Cathedral. The plaza itself is a green space filled with towering palm trees, providing shade for the many locals who come to relax, chat, and people-watch.\nThe plaza is named after the hero of independence, Joaquín de Cayzedo y Cuero, whose statue stands in the center. It's a great starting point for exploring the city's downtown area and observing the daily rhythm of Caleño life.",
        practicalInfo: {
        howToGetThere: "Located in the heart of El Centro (downtown Cali).",
        openingHours: "24/7, but most active during business hours. Be cautious at night.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Experience Art at Museo La Tertulia",
        description: "Situated on the banks of the Cali River, Museo La Tertulia is the city's premier museum of modern and contemporary art. The museum features an impressive collection of over 1,500 works, primarily focusing on Colombian and Latin American artists. The collection spans various media, including painting, sculpture, photography, and graphic arts.\nThe museum complex itself is an architectural point of interest, with several buildings and open-air exhibition spaces. In addition to its permanent collection, La Tertulia hosts rotating temporary exhibitions, workshops, and has an art-house cinema showing independent films. It's a cultural cornerstone of the city and a must for art lovers.",
        practicalInfo: {
        howToGetThere: "Located in the west of the city, near the El Gato del Río park.",
        openingHours: "Tuesday to Saturday: 10:00 AM - 7:00 PM; Sunday: 2:00 PM - 6:00 PM. Closed on Mondays.",
        cost: "Around $12,000 COP for general admission.",
        website: "www.museolatertulia.com"
      }
      },
        {
        name: "Taste Local Flavors at Mercado Alameda",
        description: "For an authentic culinary adventure, head to the Mercado Alameda. This is not a tourist market; it's a vibrant, chaotic, and utterly fantastic local market where Caleños shop for produce and eat. The market is famous for its incredible variety of exotic fruits from the Pacific region and the Amazon. You can sample fruits you've never even heard of.\nThe real highlight is the food court, where you can find some of the best and most authentic Pacific-style seafood and traditional Colombian dishes. Try a 'cazuela de mariscos' (seafood casserole) or 'sancocho de pescado' (fish stew). It’s a sensory overload in the best possible way and offers a true taste of Cali's gastronomic soul.",
        practicalInfo: {
        howToGetThere: "Located in the Alameda neighborhood, south of the city center. A taxi is recommended.",
        openingHours: "Daily from early morning until late afternoon. Best to go for lunch.",
        cost: "Free to enter. A hearty meal will cost around $25,000 - $40,000 COP.",
        website: "N/A"
      }
      },
        {
        name: "Discover the Andoke Butterfly Farm",
        description: "Just a short drive from the city, near the Cristo Rey statue, lies the Mariposario Andoke, a magical butterfly farm and educational center. This eco-tourism project offers a peaceful retreat into nature where you can walk through a netted enclosure surrounded by hundreds of colorful butterflies. The knowledgeable guides provide fascinating insights into the life cycle of these delicate creatures and the local ecosystem.\n\nBeyond the butterflies, Andoke has trails where you can learn about native plants and their traditional uses. It's a small, family-run operation with a big heart and a strong message of conservation. This is a perfect activity for families and nature lovers looking for a calm afternoon.",
        practicalInfo: {
        howToGetThere: "Located on the road leading up to Cristo Rey. It's best reached by taxi; you can ask the driver to wait.",
        openingHours: "9:30 AM to 4:00 PM daily.",
        cost: "Around $20,000 COP per person.",
        website: "www.andoke.co"
      }
      },
        {
        name: "Day Trip to San Cipriano Nature Reserve",
        description: "For a truly unique adventure, take a day trip to the San Cipriano Nature Reserve, located in the jungle of the Pacific coast region. The journey itself is an attraction: to reach the village, you ride on a 'brujita' (little witch), a wooden platform powered by a motorcycle that runs on old train tracks. This thrilling ride takes you deep into the lush, humid rainforest.\n\nOnce in San Cipriano, you can swim in the crystal-clear river, float down its gentle currents on an inner tube, explore waterfalls, and enjoy the incredible biodiversity of the region. The village has a distinct Afro-Colombian culture and offers delicious traditional food. It's a long day trip from Cali but an unforgettable experience.",
        practicalInfo: {
        howToGetThere: "Take a 2-hour bus from Cali's terminal to Buenaventura, getting off at Córdoba. From there, you take the 'brujita' into the reserve.",
        openingHours: "Best as a full-day trip, starting early in the morning.",
        cost: "Bus fare, plus ~ $20,000 COP for the round-trip brujita ride and a small entrance fee to the reserve.",
        website: "N/A"
      }
      },
        {
        name: "Indulge in the Granada Neighborhood",
        description: "Granada is Cali's most sophisticated and upscale neighborhood, known for its high-end fashion boutiques, art galleries, and, most importantly, its exceptional culinary scene. This is where you'll find some of the city's best and most innovative restaurants, offering everything from traditional Colombian fare to international gourmet cuisine.\n\nBy day, it's a chic area for shopping and a coffee. By night, the tree-lined streets come alive as Caleños head out for dinner and drinks at the many trendy bars and restaurants. If you're looking for a special night out or want to explore the modern, cosmopolitan side of Cali, a visit to Granada is a must.",
        practicalInfo: {
        howToGetThere: "Located north of the city center, an easy taxi ride from most tourist areas.",
        openingHours: "Shops during the day, restaurants and bars are busiest in the evening.",
        cost: "Dining is more expensive here than in other parts of the city.",
        website: "N/A (public neighborhood)"
      }
      }
      ]}
      logistics={{
        gettingAround: "Taxis are plentiful and affordable; always ask them to use the meter ('el taxímetro'). Ride-sharing apps like Uber, Didi, and Cabify are widely used and often preferred for safety and fixed pricing. For public transport, the MIO (Masivo Integrado de Occidente) is a bus rapid transit system with dedicated lanes, which can be efficient for longer distances once you understand the routes.",
        whereToStay: "For a bohemian and historic vibe, stay in San Antonio, which is full of boutique hotels and hostels. For upscale dining and nightlife, choose Granada or the adjacent El Peñón neighborhood. These areas are considered the safest and most convenient for tourists. Recommended hotels include Hotel Boutique San Antonio, El Peñón Hotel, and the InterContinental Cali.",
        bestTimeToVisit: "Cali has a tropical savanna climate, meaning it's warm to hot year-round, with average temperatures around 25°C (77°F). The driest seasons are December-March and July-August, making them ideal for exploring. The absolute best time to visit is in December for the 'Feria de Cali' (Cali Fair), a week-long city-wide festival of salsa, parades, and concerts from December 25th to 30th.",
        suggestedItinerary: "Day 1: Explore the vibrant San Antonio neighborhood and relax in Parque San Antonio. Take a salsa class to immerse yourself in Cali's culture. Experience the lively nightlife at a salsa club or catch a live salsa show.\n\nDay 2: Visit the Cali Zoo. Hike up to Cristo Rey statue for breathtaking panoramic views of Cali. Stroll along the Cali River and see the \"Cat's Girlfriends\" sculptures.\n\nDay 3: Explore the bustling Historic Center of Cali, including Plaza de Cayzedo and Iglesia de San Francisco or La Iglesia La Ermita. Immerse yourself in local life at Alameda Market. Enjoy a final authentic Colombian meal."
      }}
      faqs={[{
          question: "Is Cali expensive?",
          answer: "Cali is generally considered one of the most affordable major cities in Colombia. It is cheaper than Bogotá and Medellín. A meal at a local restaurant can cost as little as $15,000 COP, while a nice dinner in Granada might be $50,000-$80,000 COP. Taxis and public transport are inexpensive. Overall, Cali offers great value for travelers."
        },
        {
          question: "How many days do you need in Cali?",
          answer: "A stay of 3 to 4 days is ideal. This gives you enough time to explore the main neighborhoods like San Antonio and Granada, take a salsa class, see a show, and enjoy a nature-based activity like hiking or visiting the Pance River. If you plan to take a day trip to San Cipriano or want to immerse yourself more deeply in salsa, consider staying 5 days or longer."
        },
        {
          question: "Is Cali safe?",
          answer: "Cali has a complex reputation, but for tourists, safety is manageable by taking standard precautions. Stick to well-known tourist areas like San Antonio, Granada, and El Peñón, which are heavily policed and generally safe. Avoid walking in El Centro or unfamiliar neighborhoods at night. Use reputable taxis or ride-sharing apps instead of hailing cabs on the street, especially late at night. Do not display expensive jewelry or electronics. By being street-smart and aware of your surroundings, you can have a very safe and enjoyable trip."
        },
        {
          question: "What is Cali famous for?",
          answer: "Cali is world-famous for one thing above all: Salsa. It is globally recognized as the 'Salsa Capital of the World,' home to countless dance schools, legendary clubs, and world-champion dancers. Beyond salsa, the city is also known for its warm climate, the beauty of its women ('Caleñas'), its history in the sugar cane industry, and its vibrant, joyful street culture that makes it one of the liveliest cities in Colombia."
        }
      ]}
      imageUrl={""}
    />
  );
};