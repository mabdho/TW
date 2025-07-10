import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Albuquerque: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Albuquerque, USA (2025 Guide)"}
      description={"Nestled in the high desert, Albuquerque is a city where vibrant cultures, rich history, and stunning natural landscapes converge. Framed by the majestic Sandia Mountains and bisected by the legendary Rio Grande, the Duke City boasts over 310 days of sunshine a year. Its roots run deep, with a captivating blend of Native American, Hispanic, and Anglo influences visible in its adobe architecture, spicy cuisine, and thriving arts scene. World-famous for the International Balloon Fiesta, Albuquerque offers an adventure for every traveler, from soaring above the city at dawn to exploring ancient petroglyphs carved into volcanic rock. Whether you're seeking outdoor thrills, cultural immersion, or a taste of the iconic Southwest, you'll find an incredible array of the best things to do in Albuquerque. This guide will help you navigate it all."}
      highlights={["Sandia Peak Tramway",
        "Old Town Albuquerque",
        "Petroglyph National Monument",
        "Indian Pueblo Cultural Center",
        "Albuquerque International Balloon Fiesta"]}
      attractions={[
        {
        name: "Sandia Peak Tramway",
        description: "For breathtaking, panoramic views of the Rio Grande Valley and the Land of Enchantment, a ride on the Sandia Peak Aerial Tramway is an absolute must. The 2.7-mile journey is one of the world's longest aerial tramways, ascending over 4,000 feet to the 10,378-foot crest of the Sandia Mountains. The 15-minute ride offers a dramatic perspective of the changing landscape, from the desert floor to the dense pine forests of the Cibola National Forest.\n\nAt the top, you can hike along numerous trails, enjoy a meal with a view at the TEN 3 restaurant, or simply soak in the vast, 11,000-square-mile vista. In winter, the area transforms into a ski resort. The view is especially magical at sunset, when the city lights begin to twinkle below and the sky ignites in fiery colors.",
        practicalInfo: {
        howToGetThere: "Located at 30 Tramway Rd NE, on the far eastern edge of Albuquerque. Driving and using a rental car or rideshare is the most practical way to get here.",
        openingHours: "Daily from 9:00 AM to 9:00 PM, with seasonal variations. Check the website for the latest schedule.",
        cost: "$$$ (Adult round-trip tickets are around $30-$35).",
        website: "https://sandiapeak.com/"
      }
      },
        {
        name: "Old Town Albuquerque",
        description: "Step back in time in Old Town, the historic heart of Albuquerque, founded in 1706. This charming district is built around a central plaza, with centuries-old adobe buildings housing a delightful mix of galleries, souvenir shops, and restaurants. Wander through the maze of narrow brick paths and hidden courtyards, discovering unique jewelry, pottery, and artwork created by local artisans.\n\nThe San Felipe de Neri Church, the city's oldest building, still stands on the north side of the plaza. Old Town is the perfect place to experience the city's unique cultural blend, from the architecture to the tantalizing smell of roasting green chile. It's a pedestrian-friendly area that invites slow exploration and is home to several small, quirky museums.",
        practicalInfo: {
        howToGetThere: "Located just west of downtown, centered around Rio Grande Blvd NW & Central Ave NW. Easily accessible by car, bus, or rideshare.",
        openingHours: "Shops and restaurants have varying hours, but generally open from 10:00 AM to 8:00 PM. The area is always accessible.",
        cost: "Free to walk around; costs vary for shopping and dining.",
        website: "https://www.visitalbuquerque.org/about-abq/parts-of-town/old-town/"
      }
      },
        {
        name: "Petroglyph National Monument",
        description: "Stretching for 17 miles along Albuquerque's West Mesa, Petroglyph National Monument protects one of the largest petroglyph sites in North America. These designs and symbols, carved into volcanic rock by Native Americans and early Spanish settlers 400 to 700 years ago, offer a profound connection to the region's past. The monument features an estimated 25,000 images, ranging from simple geometric shapes to complex figures of animals and people.\n\nThere are four major hiking areas to explore the petroglyphs: Boca Negra Canyon (the most accessible with paved trails), Rinconada Canyon, Piedras Marcadas Canyon, and the Volcanoes Day Use Area. Each trail offers a different experience and a chance to contemplate these ancient messages while enjoying the stark beauty of the high desert landscape.",
        practicalInfo: {
        howToGetThere: "The visitor center is at 6001 Unser Blvd NW. A car is necessary to travel between the different trail systems within the monument.",
        openingHours: "Visitor Center: 8:30 AM - 4:30 PM. Trails are generally open from sunrise to sunset.",
        cost: "$ (Small parking fee at Boca Negra Canyon; other areas are free).",
        website: "https://www.nps.gov/petr/index.htm"
      }
      },
        {
        name: "Indian Pueblo Cultural Center",
        description: "Owned and operated by the 19 Pueblos of New Mexico, the Indian Pueblo Cultural Center is a world-class museum and cultural hub that provides an essential window into the history, art, and traditions of Pueblo people. The main exhibit walks you through the history of each Pueblo, from pre-colonial times to the present day, showcasing stunning pottery, textiles, and artifacts. The center's courtyard often hosts traditional Native American dances and artist demonstrations, offering a vibrant and authentic cultural experience.\n\nDon't miss the Pueblo Harvest restaurant, which serves incredible modern and traditional Indigenous cuisine. It's an immersive and educational destination that is crucial for understanding the foundational culture of New Mexico.",
        practicalInfo: {
        howToGetThere: "Located at 2401 12th St NW, just north of I-40. Easily accessible by car.",
        openingHours: "Daily from 9:00 AM to 4:00 PM.",
        cost: "$$ (Adult admission is around $20).",
        website: "https://indianpueblo.org/"
      }
      },
        {
        name: "Albuquerque International Balloon Fiesta",
        description: "For nine days every October, the skies above Albuquerque transform into a surreal canvas of color and wonder during the world's largest hot air balloon festival. The Albuquerque International Balloon Fiesta draws hundreds of thousands of visitors who come to witness the spectacular Mass Ascensions, where hundreds of balloons launch at dawn, filling the morning sky. Other key events include the Special Shape Rodeo, featuring whimsical balloons shaped like animals and characters, and the mesmerizing evening Balloon Glows.\n\nBeing on the field amidst the inflating and launching balloons is a truly unforgettable, multi-sensory experience. The crisp autumn air, the roar of the burners, and the sheer scale of the event make it a bucket-list item for travelers worldwide. If you plan to visit Albuquerque in the fall, this event is the ultimate highlight.",
        practicalInfo: {
        howToGetThere: "Held at Balloon Fiesta Park, 5000 Balloon Fiesta Pkwy NE. Park & Ride services are highly recommended due to heavy traffic.",
        openingHours: "Events are held in the early morning and evening. Occurs annually for nine days in early October.",
        cost: "$$ (General admission is around $15 per session; book flights, parking, and tickets well in advance).",
        website: "https://balloonfiesta.com/"
      }
      },
        {
        name: "New Mexico Museum of Natural History and Science",
        description: "Journey through billions of years of New Mexico's history at this engaging museum. From the formation of the universe to the dawn of the personal computer, the exhibits cover a vast range of topics. The main exhibit, 'Timetracks', showcases the state's incredible paleontological history, featuring skeletons of massive dinosaurs that once roamed the area, including the Seismosaurus.\n\nOther popular areas include the Hall of the Stars, a planetarium, a Lockheed Martin Dynatheater (a 3D movie theater), and exhibits on geology and space science. It's a fantastic educational experience for all ages and provides context to the unique landscape you see outside.",
        practicalInfo: {
        howToGetThere: "Located at 1801 Mountain Rd NW, near Old Town. Accessible by car or bus.",
        openingHours: "Wednesday - Monday, 10:00 AM - 5:00 PM. Closed Tuesdays.",
        cost: "$$ (Adult admission is around $8, with extra fees for the planetarium and theater).",
        website: "https://www.nmnaturalhistory.org/"
      }
      },
        {
        name: "ABQ BioPark",
        description: "The ABQ BioPark is not one attraction, but four: the Zoo, Botanic Garden, Aquarium, and Tingley Beach. A single ticket can grant you access to the Zoo, Garden, and Aquarium, making for a full day of family-friendly fun. The 64-acre Zoo is home to a wide array of animals from around the world, while the Botanic Garden offers a peaceful escape with themed gardens, including a serene Japanese garden and a whimsical children's fantasy garden.\n\nThe Aquarium takes you on a journey down the Rio Grande to the Gulf of Mexico, featuring sharks, sea turtles, and other marine life. Nearby, Tingley Beach offers fishing ponds and paddle boats. The BioPark is a sprawling, beautifully maintained facility that highlights both exotic and local flora and fauna.",
        practicalInfo: {
        howToGetThere: "The main campus (Aquarium/Garden) is at 2601 Central Ave NW. The Zoo is nearby at 903 10th St SW. A narrow-gauge railroad connects the facilities.",
        openingHours: "Daily from 9:00 AM to 5:00 PM.",
        cost: "$$ (Combo tickets are around $22 for adults).",
        website: "https://www.cabq.gov/artsculture/biopark"
      }
      },
        {
        name: "National Museum of Nuclear Science & History",
        description: "As the site of the Manhattan Project's key laboratories, New Mexico has a deep connection to the Atomic Age. This Smithsonian-affiliated museum provides a fascinating and comprehensive look at the history of nuclear science, from the first atomic bomb to modern applications in energy, medicine, and space exploration. The exhibits are objective, thought-provoking, and cover the complex scientific, historical, and social implications of nuclear technology.\n\nOutside in the 9-acre Heritage Park, you can see a massive collection of historic aircraft, including a B-29 Superfortress, a B-52 Stratofortress, missiles, and rockets. It’s a unique and important museum that tells a crucial part of American and world history.",
        practicalInfo: {
        howToGetThere: "Located at 601 Eubank Blvd SE in southeast Albuquerque. A car is recommended.",
        openingHours: "Daily from 9:00 AM to 5:00 PM.",
        cost: "$$ (Adult admission is around $17).",
        website: "https://www.nuclearmuseum.org/"
      }
      },
        {
        name: "Explora Science Center and Children's Museum",
        description: "A haven for the curious, Explora is a hands-on learning center that makes science and technology fun and accessible for everyone, not just kids. The museum is filled with over 250 interactive exhibits that encourage experimentation and discovery. You can create giant bubbles, experiment with electricity and light, build structures, and explore the physics of motion.\n\nUnlike traditional museums where you are told not to touch, Explora's motto is essentially 'please touch everything!' It’s an ideal spot for families to spend a few hours, especially on a hot summer day or a chilly winter afternoon. The exhibits are designed to engage visitors of all ages, making it a genuinely fun and educational outing.",
        practicalInfo: {
        howToGetThere: "Located at 1701 Mountain Rd NW, near Old Town and the Museum of Natural History.",
        openingHours: "Monday - Saturday 10:00 AM - 5:00 PM; Sunday 12:00 PM - 5:00 PM.",
        cost: "$$ (General admission is around $11).",
        website: "https://www.explora.us/"
      }
      },
        {
        name: "KiMo Theatre",
        description: "The KiMo Theatre is a cultural and architectural landmark in downtown Albuquerque. Opened in 1927, its stunning Pueblo Deco style is a rare and beautiful blend of Art Deco design with Native American motifs. The interior is just as spectacular, featuring decorative plasterwork, intricate light fixtures, and murals depicting Southwestern scenes. The name 'KiMo' is from a Tiwa language phrase meaning 'mountain lion.'\n\nEven if you don't catch a show, it's worth seeing the building's facade and trying to peek inside the lobby. The theatre hosts a variety of performances, including concerts, plays, and classic film screenings. Taking a tour or seeing a performance is the best way to fully appreciate this lovingly restored historic gem.",
        practicalInfo: {
        howToGetThere: "Located at 423 Central Ave NW in the heart of downtown.",
        openingHours: "Box Office: Tuesday - Friday 11:00 AM - 6:00 PM. Performance times vary. Tours are sometimes available.",
        cost: "Varies by performance. Free to view from the outside.",
        website: "https://www.kimotickets.com/"
      }
      },
        {
        name: "Paseo del Bosque Trail",
        description: "The Paseo del Bosque Trail is a 16-mile multi-use trail that runs north-south along the Rio Grande, offering a green oasis in the heart of the city. Shaded by a vast cottonwood forest (the 'bosque'), this paved trail is perfect for walking, jogging, and cycling. It provides a peaceful escape into nature, with opportunities for birdwatching and enjoying the sights and sounds of the river.\n\nThe trail connects several points of interest, including the Rio Grande Nature Center State Park and the ABQ BioPark. Renting a bike is a popular way to explore a significant portion of the trail. It's a favorite spot for locals and a great way to experience the city's natural environment.",
        practicalInfo: {
        howToGetThere: "There are multiple access points. A popular starting point is the Rio Grande Nature Center State Park at 2901 Candelaria Rd NW.",
        openingHours: "Sunrise to sunset.",
        cost: "Free (some parking areas, like the Nature Center, have a small fee).",
        website: "https://www.cabq.gov/parksandrecreation/open-space/lands/paseo-del-bosque-trail"
      }
      },
        {
        name: "Casa Rondeña Winery",
        description: "Escape to the lush, green North Valley and discover the surprising world of New Mexico wine at Casa Rondeña Winery. The state has one of the oldest wine-making traditions in the country, and this winery is one of its most beautiful expressions. The grounds are stunning, with architecture reminiscent of a Spanish castle, serene ponds, and rows of grapevines.\n\nVisitors can enjoy a wine tasting in the elegant tasting room, which features a range of award-winning varietals. It's a sophisticated and relaxing experience, perfect for an afternoon unwinding away from the city buzz. The picturesque setting makes it a popular spot for weddings and events.",
        practicalInfo: {
        howToGetThere: "Located at 733 Chavez Rd NW in Los Ranchos de Albuquerque. A car or rideshare is required.",
        openingHours: "Daily from 12:00 PM to 7:00 PM.",
        cost: "$$ (Tastings and glasses of wine vary in price).",
        website: "https://www.casarondena.com/"
      }
      },
        {
        name: "The Turquoise Museum",
        description: "Turquoise is the quintessential gemstone of the Southwest, and this museum is dedicated to its history, science, and artistry. Housed in a castle-like building, the Turquoise Museum offers an incredibly deep dive into this beautiful stone. You'll learn how to distinguish between different types of turquoise from mines around the world, see rare and massive specimens, and understand its cultural significance to Native American communities.\n\nThe exhibits showcase everything from raw, uncut stones to exquisite jewelry. It provides a fascinating education that will make you appreciate the craftsmanship you see in shops around Old Town and beyond. It’s more than just a collection; it's a passionate exploration of a single, captivating subject.",
        practicalInfo: {
        howToGetThere: "Located at 400 2nd St SW, near downtown. Parking is available.",
        openingHours: "Monday - Saturday, 10:00 AM - 5:00 PM.",
        cost: "$$ (Adult admission is around $21).",
        website: "https://www.turquoisemuseum.com/"
      }
      },
        {
        name: "Breaking Bad RV Tours",
        description: "For fans of the critically acclaimed TV show 'Breaking Bad' and its prequel 'Better Call Saul,' Albuquerque is a living film set. Several tour companies offer guided trips to the most iconic filming locations around the city. The most popular of these is the 'Breaking Bad RV Tour,' where you ride in a replica of Walter White and Jesse Pinkman's infamous RV.\n\nThe tour takes you to key sites like Walter White's house, Jesse's house, the Car Wash, and Los Pollos Hermanos (currently a real restaurant called Twisters). It's a fun, quirky way to see parts of Albuquerque you might otherwise miss, all while geeking out with fellow fans. The guides are knowledgeable and provide plenty of behind-the-scenes trivia.",
        practicalInfo: {
        howToGetThere: "Tours typically depart from a central location in Old Town. Check with the specific tour company.",
        openingHours: "Tours run on a set schedule, usually daily. Booking in advance is essential.",
        cost: "$$$ (Tours are typically $75+ per person).",
        website: "https://www.breakingbadrvtours.com/"
      }
      },
        {
        name: "American International Rattlesnake Museum",
        description: "Located in the heart of Old Town, this small, quirky museum is dedicated to one of the desert's most misunderstood creatures. The American International Rattlesnake Museum holds the world's largest collection of different species of live rattlesnakes, all housed in safely recreated naturalistic habitats. It's a surprisingly fascinating and educational stop.\n\nThe exhibits dispel common myths about rattlesnakes and teach visitors about their vital role in the ecosystem. You'll also see a wide array of snake-related art, artifacts, and memorabilia. It only takes about an hour to see everything, making it a perfect, quick addition to your Old Town explorations. For a small fee, you can get a 'Certificate of Bravery' for surviving your visit.",
        practicalInfo: {
        howToGetThere: "Located at 202 San Felipe St NW in Old Town Albuquerque.",
        openingHours: "Varies by season, but generally 11:30 AM to 5:30 PM. Check their website.",
        cost: "$ (Admission is under $10 for adults).",
        website: "https://www.rattlesnakes.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Albuquerque is a sprawling city, and renting a car is the most convenient way to explore, especially for accessing attractions like Sandia Peak and the Petroglyph National Monument. The city is served by Albuquerque International Sunport (ABQ). Ride-sharing services like Uber and Lyft are widely available. The public transportation system, ABQ RIDE, offers bus routes throughout the city, but service can be infrequent in some areas. For travel between Albuquerque and Santa Fe, the New Mexico Rail Runner Express is an excellent option.",
        whereToStay: "Old Town/Downtown offers historic charm and walkability, with boutique hotels and proximity to museums (e.g., Hotel Albuquerque, Hotel Chaco). Uptown is a modern commercial hub with major shopping centers and familiar hotel chains, ideal for shoppers (e.g., Hyatt Regency Tamaya Resort, Sandia Resort & Casino). For a quieter, more scenic stay, the North Valley provides a lush, semi-rural feel with charming B&Bs and inns. Budget options are plentiful along the I-40 and I-25 corridors.",
        bestTimeToVisit: "The best times to visit Albuquerque are spring (April-May) and fall (September-October) when the weather is mild and pleasant. Fall is particularly special due to the International Balloon Fiesta in early October and the smell of roasting green chile in the air. Summers (June-August) are hot and sunny, with temperatures often exceeding 95°F (35°C), though evenings are cool. Winters (November-February) are cool and crisp, with occasional snowfall, but still plenty of sunshine.",
        suggestedItinerary: "Day 1: Explore Old Town Albuquerque, including San Felipe de Neri Church. Visit the Indian Pueblo Cultural Center for cultural immersion and authentic Native American cuisine. End the day with dinner in the lively Nob Hill district.\n\nDay 2: Ride the Sandia Peak Tramway for stunning views. Afterwards, visit Petroglyph National Monument to see ancient rock carvings. Enjoy a relaxing sunset at Balloon Fiesta Park.\n\nDay 3: Spend time at the Explora Science Center and Children's Museum. Relax and explore the ABQ BioPark Botanic Garden. Have dinner at Sawmill Market, a bustling food hall."
      }}
      faqs={[{
          question: "Is Albuquerque expensive?",
          answer: "Albuquerque is generally considered an affordable travel destination compared to other major U.S. cities. Accommodation, dining, and activities are reasonably priced. You can enjoy a fantastic meal for $15-$25, and many attractions are either free or have admission fees under $20. While prices spike during the International Balloon Fiesta in October, it remains a budget-friendly city for most of the year."
        },
        {
          question: "How many days do you need in Albuquerque?",
          answer: "To comfortably experience the main highlights, 3 to 4 days is an ideal amount of time. This allows you to explore Old Town, visit key museums, take the Sandia Peak Tramway, and see the Petroglyph National Monument without feeling rushed. If you're an avid hiker or want to take day trips to nearby places like Santa Fe, consider extending your stay to 5 or 6 days."
        },
        {
          question: "Is Albuquerque safe?",
          answer: "Like any large city, Albuquerque has areas with higher crime rates. However, the main tourist areas—such as Old Town, the museum district, Nob Hill, and the Sandia Peak Tramway—are generally safe for visitors. It's always wise to practice standard safety precautions: be aware of your surroundings, lock your car doors, don't leave valuables in plain sight, and avoid walking alone in unfamiliar areas late at night."
        },
        {
          question: "What is Albuquerque famous for?",
          answer: "Albuquerque is most famous for the Albuquerque International Balloon Fiesta, the largest hot air balloon festival in the world. It's also renowned for its unique blend of Native American and Hispanic cultures, its location along historic Route 66, its distinctive Pueblo-style architecture, and its fiery cuisine, particularly its red and green chile. In recent years, it has also gained fame as the primary filming location for the TV shows 'Breaking Bad' and 'Better Call Saul'."
        }
      ]}
    />
  );
};