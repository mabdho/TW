import React from 'react';
import { CityPage } from '../../components/CityPage';

export const DaNang: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Da Nang, Vietnam (2025 Guide)"}
      description={"Nestled along the shimmering coast of Central Vietnam, Da Nang is a city where gleaming skyscrapers meet serene beaches and ancient traditions blend with modern energy. Once a humble fishing village, it has transformed into a vibrant hub known for its pristine coastline, dramatic mountain landscapes, and world-class attractions. From the fire-breathing Dragon Bridge to the mystical Marble Mountains, the city offers a dynamic mix of adventure and relaxation. Whether you're a foodie eager to explore bustling markets, a history buff venturing to ancient ruins, or a beach lover seeking sun-drenched sands, you'll find an incredible array of experiences. This guide will walk you through all the very best things to do in Da Nang, ensuring your trip to Vietnam's most liveable city is unforgettable. Prepare to be captivated by its unique charm and warm hospitality."}
      highlights={["The Marble Mountains (Ngu Hanh Son)",
        "Golden Bridge & Ba Na Hills",
        "My Khe Beach",
        "Dragon Bridge (Cau Rong)",
        "Hoi An Ancient Town (Day Trip)"]}
      galleryImages={[
        { url: "", alt: "DaNang landmark 1", caption: "DaNang landmark 1 - placeholder" },
        { url: "", alt: "DaNang landmark 2", caption: "DaNang landmark 2 - placeholder" },
        { url: "", alt: "DaNang landmark 3", caption: "DaNang landmark 3 - placeholder" },
        { url: "", alt: "DaNang landmark 4", caption: "DaNang landmark 4 - placeholder" },
        { url: "", alt: "DaNang landmark 5", caption: "DaNang landmark 5 - placeholder" },
        { url: "", alt: "DaNang landmark 6", caption: "DaNang landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "The Marble Mountains (Ngu Hanh Son)",
        description: "A cluster of five limestone and marble hills, each named after one of the five elements (metal, water, wood, fire, and earth), the Marble Mountains are a spectacular natural wonder. This sacred site is riddled with caves, tunnels, and grottoes, many of which house elaborate Buddhist sanctuaries and pagodas. Visitors can climb the steps carved into the mountainside (or take a glass elevator up the main peak, Thuy Son) to explore these hidden temples and enjoy panoramic views of the coastline and surrounding landscape.\n\nThe journey through the Marble Mountains is a spiritual and physical one, offering a peaceful escape from the bustling city below. Discovering the Huyen Khong Cave, with its magnificent statues and light filtering through a natural ceiling opening, is a truly breathtaking experience. It’s a perfect blend of natural beauty, religious significance, and adventure.",
        practicalInfo: {
        howToGetThere: "Located 8km south of Da Nang city center. Easily accessible by taxi, Grab, or motorbike.",
        openingHours: "7:00 AM - 5:30 PM daily",
        cost: "Entrance: 40,000 VND. Elevator (one way): 15,000 VND. Am Phu Cave: 20,000 VND.",
        website: "https://danangwonders.com/attractions/the-marble-mountains/"
      }
      },
        {
        name: "Golden Bridge & Ba Na Hills",
        description: "Perched high in the Truong Son Mountains, the Golden Bridge has become an iconic symbol of Da Nang. This stunning pedestrian bridge, seemingly held aloft by two giant stone hands, offers jaw-dropping views of the surrounding highlands. It's located within the Sun World Ba Na Hills resort, a whimsical French-themed mountain complex accessed by one of the world's longest and highest non-stop cable car rides, which is an attraction in itself.\n\nBeyond the bridge, Ba Na Hills is a sprawling entertainment park featuring a faux French Village with cobblestone streets, a magnificent flower garden (Le Jardin D'Amour), an alpine coaster, and the Linh Ung Pagoda. While it can be crowded, the unique architecture and stunning scenery make it an unmissable, albeit surreal, day out. Plan to spend a full day here to experience everything it has to offer.",
        practicalInfo: {
        howToGetThere: "Located about 25km from Da Nang. Book a shuttle bus, private car, or taxi for the 45-minute drive to the cable car station.",
        openingHours: "Cable Car: 8:00 AM - 5:00 PM. Park hours may vary.",
        cost: "Adults: ~900,000 VND, Children: ~750,000 VND. This all-inclusive ticket covers the cable car and most attractions.",
        website: "https://sunworld.vn/en/ba-na-hills"
      }
      },
        {
        name: "My Khe Beach",
        description: "Stretching for miles along the Da Nang coast, My Khe Beach is famed for its soft white sand, gentle surf, and crystal-clear water. Often cited as one of the most beautiful beaches in the world, it offers a perfect retreat for sunbathing, swimming, and water sports like jet-skiing and parasailing. The long, wide esplanade is ideal for a morning jog or a leisurely evening stroll, with plenty of palm trees providing welcome shade.\n\nThe beach is lined with excellent seafood restaurants, casual cafes, and luxurious resorts. As the sun sets, the area comes alive with locals and tourists alike enjoying the cool ocean breeze. Its clean environment and well-developed facilities make it a popular spot, yet it rarely feels overly crowded due to its vast size.",
        practicalInfo: {
        howToGetThere: "Located on the eastern side of Da Nang city, easily accessible from the city center and most hotels.",
        openingHours: "24/7",
        cost: "Free to access. Charges apply for chair rentals, water sports, and food.",
        website: "N/A"
      }
      },
        {
        name: "Dragon Bridge (Cau Rong)",
        description: "An architectural marvel and a symbol of modern Da Nang, the Dragon Bridge spans the Han River. This impressive steel bridge is shaped like a golden dragon from the Ly Dynasty, a powerful symbol of fortune and power in Vietnamese culture. During the day, it's a stunning piece of engineering to admire, but it truly comes to life at night when it's illuminated by thousands of colorful LED lights.\n\nThe highlight for many visitors is the weekend fire and water show. Every Saturday and Sunday evening at 9:00 PM, the dragon's head spectacularly breathes fire and then spouts plumes of water, drawing huge crowds to the riverbanks. For the best view, find a spot along the riverfront, on a nearby bridge, or at a rooftop bar.",
        practicalInfo: {
        howToGetThere: "Located in the center of Da Nang, crossing the Han River.",
        openingHours: "Bridge is open 24/7. Fire and Water Show: 9:00 PM on Saturdays and Sundays.",
        cost: "Free",
        website: "N/A"
      }
      },
        {
        name: "Hoi An Ancient Town (Day Trip)",
        description: "Just a short drive from Da Nang lies the enchanting UNESCO World Heritage site of Hoi An. This remarkably well-preserved Southeast Asian trading port from the 15th to 19th centuries feels like a step back in time. Spend the day wandering through its narrow, car-free streets, admiring the yellow-walled merchant houses, ornate Chinese temples, and the iconic Japanese Covered Bridge.\n\nHoi An is famous for its skilled tailors who can create custom clothing in a day, its vibrant food scene, and its magical atmosphere, especially after dark when the town is illuminated by thousands of colorful silk lanterns. Taking a boat ride on the Thu Bon River at sunset is an unforgettable experience. While it deserves a longer stay, Hoi An is an essential and easy day trip from Da Nang.",
        practicalInfo: {
        howToGetThere: "Located 30km south of Da Nang. A 45-minute journey by taxi, Grab, or local bus.",
        openingHours: "Most shops and sights open from morning until around 9:30 PM. Ancient Town ticket booths open 7:00 AM - 9:00 PM.",
        cost: "Ancient Town entrance ticket (optional, for specific sights): 120,000 VND. Otherwise, free to wander.",
        website: "https://www.hoianworldheritage.org.vn/en"
      }
      },
        {
        name: "Linh Ung Pagoda (Lady Buddha)",
        description: "Dominating the skyline of the Son Tra Peninsula is the magnificent Linh Ung Pagoda, home to the tallest statue of the Goddess of Mercy (Lady Buddha) in Vietnam. Standing at 67 meters, the gleaming white statue faces the sea, believed to protect local fishermen and bring peace to the city. The pagoda itself is a beautiful example of modern Vietnamese temple architecture, set within a serene complex with meticulously maintained gardens and 18 large Arhat statues.\n\nVisitors come not only for the spiritual ambiance but also for the breathtaking, sweeping views of Da Nang's coastline and the city itself. The elevated position offers a peaceful atmosphere away from the urban hustle. It's a place for quiet reflection and stunning photo opportunities.",
        practicalInfo: {
        howToGetThere: "Located on the Son Tra Peninsula, about a 20-minute drive from the city center. Best reached by motorbike or taxi.",
        openingHours: "6:00 AM - 9:00 PM daily",
        cost: "Free",
        website: "N/A"
      }
      },
        {
        name: "Hai Van Pass",
        description: "Immortalized by the TV show 'Top Gear', the Hai Van Pass (or 'Ocean Cloud Pass') is one of the most scenic coastal roads in the world. This 21km-long mountain pass snakes along the Truong Son mountain range, connecting Da Nang with the Lang Co Bay to the north. As you ascend the winding road, you're rewarded with spectacular, dramatic views of the turquoise sea, lush jungle, and the city in the distance.\n\nAt the summit, you'll find old French and American bunkers, offering a glimpse into Vietnam's history and an even better vantage point for photos. While a tunnel now bypasses the pass for most traffic, renting a motorbike or hiring an 'easy rider' to experience the original road is a thrilling adventure for many travelers.",
        practicalInfo: {
        howToGetThere: "The pass starts about 30km north of Da Nang. Rent a motorbike, hire a private car with a driver, or book an easy rider tour.",
        openingHours: "24/7 (daylight hours recommended for safety and views)",
        cost: "Free to drive. Costs vary for rentals or tours.",
        website: "N/A"
      }
      },
        {
        name: "My Son Sanctuary",
        description: "Another fantastic day trip from Da Nang, the My Son Sanctuary is a UNESCO World Heritage site that was once the religious and political capital of the Champa Kingdom. Nestled in a lush valley surrounded by mountains, this complex features dozens of red brick tower temples dating from the 4th to the 13th centuries. The temples are dedicated to the Hindu god Shiva and showcase intricate stone carvings and impressive masonry.\n\nAlthough heavily damaged by bombing during the Vietnam War, the remaining structures are hauntingly beautiful and offer profound insight into the spiritual and artistic heritage of the Cham people. Exploring the atmospheric ruins feels like discovering a lost city in the jungle.",
        practicalInfo: {
        howToGetThere: "Located about 40km from Da Nang. Best reached via an organized tour, private car, or motorbike.",
        openingHours: "6:00 AM - 5:00 PM daily",
        cost: "150,000 VND per person",
        website: "http://mysonsanctuary.com.vn/en/"
      }
      },
        {
        name: "Da Nang Cathedral (Pink Church)",
        description: "A charming remnant of the French colonial era, the Da Nang Cathedral stands out with its candy-pink facade and Gothic-style architecture. Officially named the Cathedral of the Sacred Heart of Jesus, it's affectionately known by locals and tourists as the 'Pink Church'. Built in 1923, it serves the local Catholic community and features stained-glass windows depicting saints and a weathercock-topped bell tower, earning it the nickname 'Rooster Church' (Con Ga Church).\n\nThe cathedral is a popular photo spot due to its unique color and design, providing a stark contrast to the surrounding modern buildings. While the interior is often closed to tourists outside of mass times, its exterior is well worth a visit for a quick, picturesque stop.",
        practicalInfo: {
        howToGetThere: "Centrally located on Tran Phu Street in the city center.",
        openingHours: "Exterior can be viewed anytime. Interior access is generally restricted to mass times. Sunday Mass in English is at 9:00 AM.",
        cost: "Free",
        website: "http://www.giaoxuchinhtoadanang.org.vn/"
      }
      },
        {
        name: "Han Market",
        description: "For an authentic local experience, dive into the bustling atmosphere of Han Market. This two-story indoor market is the city's main trading hub, offering a dizzying array of goods. The ground floor is a foodie's paradise, filled with vendors selling fresh produce, spices, dried goods, and a fantastic selection of Vietnamese snacks and dishes. It's a great place to sample local delicacies and buy edible souvenirs like chili paste or dried squid.\n\nThe upper floor is dedicated to clothing, fabrics, shoes, and souvenirs. It's a vibrant, chaotic, and fascinating place to observe daily life in Da Nang, practice your bargaining skills, and find some unique keepsakes.",
        practicalInfo: {
        howToGetThere: "Located in the heart of the city, near the Han River and Dragon Bridge.",
        openingHours: "6:00 AM - 7:00 PM daily",
        cost: "Free to enter. Prices for goods are negotiable.",
        website: "N/A"
      }
      },
        {
        name: "Con Market",
        description: "If Han Market is for tourists, Con Market is where the locals go. This sprawling market is a sensory overload in the best way possible, especially for food lovers. While it also sells household goods and clothing, its main draw is the incredible street food section. Here you can find hundreds of vendors serving up authentic Central Vietnamese specialties like Mi Quang (turmeric noodles), Banh Xeo (crispy pancakes), and a huge variety of sweet soups (Che).\n\nThe market is divided into indoor and outdoor sections, with the outdoor area becoming particularly lively in the late afternoon. It's less polished than Han Market but offers a more raw and authentic taste of Da Nang's culinary soul. Come with an empty stomach and an adventurous palate.",
        practicalInfo: {
        howToGetThere: "Located at the intersection of Hung Vuong and Ong Ich Khiem streets in the city center.",
        openingHours: "7:00 AM - 7:30 PM daily. The street food area is best in the late afternoon.",
        cost: "Free to enter. Food dishes are very affordable (~20,000 - 50,000 VND).",
        website: "N/A"
      }
      },
        {
        name: "Son Tra Peninsula (Monkey Mountain)",
        description: "Jutting out into the sea, the Son Tra Peninsula is a lush, protected nature reserve often called Monkey Mountain due to its population of rare red-shanked douc langurs. This jungle-clad mountain offers a refreshing escape with winding roads, pristine hidden beaches like Bai But and Tien Sa, and incredible viewpoints. The Linh Ung Pagoda with its giant Lady Buddha statue is the peninsula's most famous landmark.\n\nExploring the peninsula by motorbike is a popular activity, allowing you to discover secluded spots and enjoy the fresh air. Key viewpoints include the Banyan Tree, estimated to be over 800 years old, and Ban Co Peak, the highest point on the peninsula, which offers 360-degree views on a clear day.",
        practicalInfo: {
        howToGetThere: "Located northeast of Da Nang. Best explored by motorbike or private car. Some roads are steep and require a powerful bike.",
        openingHours: "24/7, though daylight hours are strongly recommended.",
        cost: "Free",
        website: "N/A"
      }
      },
        {
        name: "Asia Park - Sun World Da Nang Wonders",
        description: "A fantastic option for families and thrill-seekers, Asia Park is a modern amusement park located on the west bank of the Han River. The park is divided into several zones celebrating the culture and architecture of various Asian countries. Its most prominent feature is the 115-meter-tall Sun Wheel, a giant Ferris wheel that offers spectacular nighttime views of the illuminated city and Dragon Bridge.\n\nThe park boasts a variety of rides, from gentle carousels for young children to exhilarating roller coasters like the Queen Cobra. With its vibrant atmosphere, cultural displays, and diverse entertainment options, Asia Park provides a fun-filled evening for all ages.",
        practicalInfo: {
        howToGetThere: "Located south of the city center, near the Tran Thi Ly Bridge.",
        openingHours: "3:00 PM - 10:00 PM on weekdays; 9:00 AM - 10:00 PM on weekends.",
        cost: "Entrance fee is around 200,000 VND for adults, which includes most rides.",
        website: "https://asiapark.sunworld.vn/en/"
      }
      },
        {
        name: "Museum of Cham Sculpture",
        description: "For a deep dive into the region's rich history, the Museum of Cham Sculpture is an essential stop. Housing the world's largest collection of Cham artifacts, this museum showcases the art of the ancient Champa Kingdom, which flourished in Central Vietnam from the 2nd to the 15th centuries. The artifacts, primarily sandstone sculptures of Hindu deities like Shiva, Vishnu, and Brahma, were recovered from various Cham sites, including the nearby My Son Sanctuary.\n\nThe museum building itself is a work of art, with its design blending French colonial and Cham architectural elements. It provides crucial context to the Cham ruins you might visit and offers a fascinating look at a highly sophisticated and artistic civilization.",
        practicalInfo: {
        howToGetThere: "Located near the Dragon Bridge in the city center.",
        openingHours: "7:30 AM - 5:00 PM daily",
        cost: "60,000 VND per person",
        website: "http://chammuseum.vn/en/"
      }
      },
        {
        name: "Non Nuoc Stone Carving Village",
        description: "Situated at the foot of the Marble Mountains, the Non Nuoc Stone Carving Village is a traditional craft village with a history spanning over 400 years. Here, you can witness skilled artisans transforming blocks of marble and stone into intricate sculptures, from giant religious statues to delicate jewelry and household items. The stone is sourced from quarries all over Vietnam, as quarrying from the Marble Mountains themselves is now banned for conservation.\n\nWandering through the village, you'll see countless workshops and showrooms displaying an incredible variety of stone craftsmanship. It’s a fascinating place to observe a centuries-old tradition in action and perhaps purchase a unique, handcrafted souvenir to take home. Prices are often negotiable.",
        practicalInfo: {
        howToGetThere: "Located at the base of the Marble Mountains, about 8km from Da Nang.",
        openingHours: "Most shops are open from 8:00 AM - 5:00 PM.",
        cost: "Free to visit. Items for sale vary widely in price.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Da Nang is easy to navigate. Ride-hailing apps like Grab and GoJek are extremely popular and affordable for both car and motorbike taxis. Traditional taxis are also plentiful. For ultimate freedom, especially for exploring the Son Tra Peninsula or Hai Van Pass, renting a motorbike is a great option. For short distances in tourist areas, cyclos (three-wheeled bicycle taxis) offer a more leisurely experience.",
        whereToStay: "My Khe Beach Area: Ideal for beach lovers and families, offering a wide range of accommodation from luxury resorts like the Hyatt Regency to mid-range hotels. City Center (Hai Chau District): Perfect for foodies and those who want to be close to markets, the Han River, and nightlife. Son Tra Peninsula: For a luxurious and secluded escape, with high-end resorts offering stunning ocean views.",
        bestTimeToVisit: "The best time to visit Da Nang is during the dry season, from February to August. During these months, you can expect warm, sunny weather with clear skies, perfect for beach activities and exploring. The hottest months are June and July. The rainy season runs from September to January, characterized by heavier rainfall and the possibility of typhoons, which can disrupt travel plans.",
        suggestedItinerary: "Day 1: Morning exploration of the Marble Mountains and Non Nuoc Stone Carving Village. Afternoon relaxing and swimming at My Khe Beach. Evening walk along the Han River, watch the Dragon Bridge fire and water show (if it's a weekend).\nDay 2: Full day trip to Ba Na Hills to see the Golden Bridge, French Village, and enjoy the amusement park and gardens.\nDay 3: Day trip south to the enchanting Hoi An Ancient Town. Wander the lantern-lit streets, get clothes tailored, and enjoy a boat ride on the Thu Bon River. Alternatively, head north to conquer the scenic Hai Van Pass on a motorbike."
      }}
      faqs={[{
          question: "Is Da Nang expensive?",
          answer: "No, Da Nang is a very affordable travel destination, especially compared to Western cities. A delicious local meal like a bowl of My Quang noodles can cost as little as $1.50-$2 USD. Transportation via ride-hailing apps is cheap, and accommodation offers great value, with decent hotels available from $25-$50 per night and luxury resorts at a fraction of international prices."
        },
        {
          question: "How many days do you need in Da Nang?",
          answer: "A stay of 3 to 4 days is ideal. This gives you enough time to see the main city highlights like the Marble Mountains and Dragon Bridge, spend a full day at Ba Na Hills, and take at least one day trip to the nearby UNESCO World Heritage sites of Hoi An Ancient Town or My Son Sanctuary."
        },
        {
          question: "Is Da Nang safe?",
          answer: "Da Nang is considered one of the safest cities in Vietnam. The crime rate is low. However, like in any tourist destination, it's wise to take standard precautions. Be mindful of your belongings in crowded markets, and be cautious of snatch-and-grab theft if riding a motorbike. The biggest safety concern is often the traffic, so be extra careful when crossing streets or driving a scooter."
        },
        {
          question: "What is Da Nang famous for?",
          answer: "Da Nang is famous for its stunning coastline, particularly My Khe Beach. It's also known for its iconic modern landmarks like the fire-breathing Dragon Bridge and the awe-inspiring Golden Bridge held by giant hands. Furthermore, it's renowned for its natural beauty, including the Marble Mountains and Son Tra Peninsula, and its strategic location as a gateway to the historical treasures of Hoi An and the My Son Sanctuary."
        }
      ]}
      imageUrl={""}
    />
  );
};