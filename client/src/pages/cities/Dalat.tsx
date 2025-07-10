import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Dalat: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Dalat, Vietnam (2025 Guide)"}
      description={"Nestled in the Central Highlands of Vietnam, Dalat is a breath of fresh air, affectionately known as the 'City of Eternal Spring' for its temperate climate. A former colonial resort town, its European charm is evident in the French-style villas and the iconic Eiffel Tower-esque radio mast. Surrounded by pine forests, serene lakes, and rolling hills dotted with coffee and flower plantations, Dalat offers a unique escape from Vietnam's tropical heat. Adventure seekers, nature lovers, and romantics alike will find a wealth of attractions and activities. From whimsical architecture to thundering waterfalls and vibrant markets, this guide will walk you through all the very best things to do in Dalat, ensuring an unforgettable mountain getaway in 2025."}
      highlights={["Hang Nga Guesthouse (Crazy House)",
        "Datanla Waterfall",
        "Lang Biang Mountain",
        "Dalat Flower Gardens",
        "Xuan Huong Lake"]}
      galleryImages={[
        { url: "", alt: "Dalat landmark 1", caption: "Dalat landmark 1 - placeholder" },
        { url: "", alt: "Dalat landmark 2", caption: "Dalat landmark 2 - placeholder" },
        { url: "", alt: "Dalat landmark 3", caption: "Dalat landmark 3 - placeholder" },
        { url: "", alt: "Dalat landmark 4", caption: "Dalat landmark 4 - placeholder" },
        { url: "", alt: "Dalat landmark 5", caption: "Dalat landmark 5 - placeholder" },
        { url: "", alt: "Dalat landmark 6", caption: "Dalat landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Hang Nga Guesthouse (Crazy House)",
        description: "An absolute must-see, the Crazy House is a fantastical guesthouse and art gallery that defies architectural norms. Designed by Vietnamese architect Đặng Việt Nga, the structure resembles a giant, surreal banyan tree, with twisting staircases, cavernous rooms, and whimsical animal-themed sculptures. Each room is a unique creation, connected by a maze of tunnels, bridges, and ladders that wind their way through the organic structure.\n\nExploring this expressionist masterpiece feels like stepping into a Gaudí or Salvador Dalí painting. You can wander through its narrow passages, climb to the rooftop for panoramic city views, and even book a night's stay in one of the themed rooms for a truly immersive experience. It's a testament to creative freedom and one of Dalat's most photographed spots.",
        practicalInfo: {
        howToGetThere: "Located at 03 Huynh Thuc Khang Street, about 2km from the city center. Easily accessible by taxi, motorbike, or a 20-minute walk.",
        openingHours: "8:30 AM - 7:00 PM daily",
        cost: "Approx. 60,000 VND per person",
        website: "www.crazyhouse.vn"
      }
      },
        {
        name: "Datanla Waterfall",
        description: "Datanla Waterfall is one of the most accessible and popular waterfalls in Dalat, famous not just for its scenic beauty but for its thrilling alpine coaster. The coaster, a self-controlled luge cart, zips you down a 2.4km track through the lush pine forest to the base of the falls, offering a shot of adrenaline along the way. The waterfall itself cascades over multiple tiers of rock into a clear pool below, creating a serene and picturesque scene.\n\nBeyond the coaster, visitors can take a cable car or a leisurely walk down to the main falls. There are also opportunities for more adventurous activities like canyoning, which involves abseiling down the rock faces of the waterfall. It's a perfect blend of natural beauty and light adventure for all ages.",
        practicalInfo: {
        howToGetThere: "Located on Highway 20, about 6km south of Dalat city center. Best reached by taxi or motorbike.",
        openingHours: "7:00 AM - 5:00 PM daily",
        cost: "Entrance: 50,000 VND. Alpine Coaster (round trip): ~170,000 VND.",
        website: "www.datanla.com.vn"
      }
      },
        {
        name: "Lang Biang Mountain",
        description: "For the best panoramic views of the Dalat plateau, a trip to Lang Biang Mountain is essential. Consisting of two peaks, Lang Biang and Bidoup, the mountain is named after a legendary K'Ho couple. The journey to the top is part of the experience; you can either hike the scenic trails or take a shared vintage Soviet-era jeep for a bumpy but fun ride to the main viewpoint on Radar Hill.\n\nFrom the summit, you're rewarded with breathtaking vistas of the entire region, including the Golden and Silver Streams, lush forests, and scattered flower farms. The area at the top has cafes, souvenir shops, and even opportunities for horse riding. It's an ideal spot for photography, hiking, and learning about local ethnic minority culture.",
        practicalInfo: {
        howToGetThere: "Located about 12km north of Dalat. Accessible by motorbike or by booking a taxi/private car.",
        openingHours: "7:00 AM - 5:00 PM daily",
        cost: "Entrance: 50,000 VND. Jeep ride (round trip): ~100,000 VND per person (shared).",
        website: "langbiang.vn"
      }
      },
        {
        name: "Dalat Flower Gardens (Vườn Hoa Đà Lạt)",
        description: "Confirming Dalat's title as the 'City of Flowers', these expansive gardens are a vibrant showcase of local and exotic flora. Located at the northern end of Xuan Huong Lake, the Dalat Flower Gardens cover an area of about 7,000 square meters and feature over 300 different species of flowers, including roses, orchids, hydrangeas, and mimosas.\n\nThe gardens are meticulously landscaped with flower arches, themed displays, and even a giant cactus greenhouse. It's a peaceful and colorful oasis, perfect for a leisurely stroll or a romantic afternoon. The displays change seasonally, ensuring there's always something new in bloom, and the annual Dalat Flower Festival transforms this park into the city's vibrant heart.",
        practicalInfo: {
        howToGetThere: "2 Tran Nhan Tong Street, at the northern end of Xuan Huong Lake. A short walk or taxi ride from the city center.",
        openingHours: "7:30 AM - 4:00 PM daily",
        cost: "Approx. 70,000 VND per person",
        website: "No official website."
      }
      },
        {
        name: "Xuan Huong Lake",
        description: "Xuan Huong Lake is the beautiful, crescent-shaped centerpiece of Dalat. Life in the city revolves around this serene body of water, and its banks are a popular spot for both locals and tourists to relax, exercise, and socialize. A paved 7km path encircles the lake, making it perfect for a morning jog, a leisurely walk, or a tandem bicycle ride.\n\nAlong the lake, you'll find charming cafes, the Dalat Flower Gardens, and the City Square (Lam Vien Square) with its giant artichoke and wild sunflower structures. You can also rent swan-shaped paddle boats to get out on the water. Visiting at dawn or dusk offers stunning reflections and a tranquil atmosphere.",
        practicalInfo: {
        howToGetThere: "Located in the heart of Dalat city. Accessible on foot from most central hotels.",
        openingHours: "Open 24/7",
        cost: "Free to access. Paddle boat rentals have a fee.",
        website: "N/A"
      }
      },
        {
        name: "Linh Phuoc Pagoda (Ve Chai Pagoda)",
        description: "Linh Phuoc Pagoda is an architectural marvel and a testament to intricate craftsmanship. Often called the 'Pagoda of Broken Glass' (Ve Chai), its surfaces are covered in stunning mosaics made from millions of tiny pieces of broken pottery, porcelain, and glass bottles. The result is a dazzling, colorful temple complex that glitters in the sunlight.\n\nThe temple features a 49-meter-long dragon made from 12,000 glass bottles, a giant bell tower, and a towering statue of Quan Am (Goddess of Mercy) made from immortal flowers. Visitors can also explore the '18 Levels of Hell' basement exhibit, a unique and somewhat intense depiction of Buddhist purgatory. It's a visually spectacular site that combines religious devotion with incredible artistry.",
        practicalInfo: {
        howToGetThere: "Located at 120 Tự Phước, about 8km from the city center. It's the final stop on the Dalat Railway line, making a train trip a popular way to visit.",
        openingHours: "8:00 AM - 5:00 PM daily",
        cost: "Free",
        website: "No official website."
      }
      },
        {
        name: "Dalat Railway Station",
        description: "The Dalat Railway Station is a charming piece of history and one of the finest examples of French colonial architecture in Vietnam. Designed by French architects Moncet and Reveron, it was completed in 1938 and is notable for its Art Deco style, featuring a unique roofline meant to emulate the three peaks of Lang Biang mountain.\n\nWhile the full rail network is no longer operational, a short 7km tourist route remains, connecting Dalat to the nearby town of Trai Mat, home to the Linh Phuoc Pagoda. Taking this nostalgic trip on a vintage train is a delightful experience, offering scenic views of the surrounding countryside and suburban farms. Even if you don't take the train, the station itself is a beautiful landmark worth visiting for its historical and architectural significance.",
        practicalInfo: {
        howToGetThere: "1 Quang Trung Street, a short 2km drive from the city center.",
        openingHours: "7:00 AM - 5:00 PM daily",
        cost: "Station entrance: ~5,000 VND. Train ticket to Trai Mat (round trip): ~150,000 VND.",
        website: "No official website."
      }
      },
        {
        name: "Bao Dai's Summer Palace (Dinh III)",
        description: "Step back in time at Bao Dai's Summer Palace, the former retreat of the last emperor of Vietnam. Built between 1933 and 1938, the palace is relatively modest but well-preserved, offering a fascinating glimpse into the life of the royal family. The Art Deco villa served as a working and living space for Emperor Bao Dai and his family during the wet season.\n\nVisitors can tour the 25 rooms across two floors, including the emperor's office, bedrooms, dining areas, and entertainment rooms. Much of the original furniture and the family's personal effects are still on display, providing an authentic look at their lifestyle. The surrounding gardens are also lovely for a stroll.",
        practicalInfo: {
        howToGetThere: "Located on Trieu Viet Vuong Street, about 2.5km southwest of Xuan Huong Lake.",
        openingHours: "7:00 AM - 5:30 PM daily",
        cost: "Approx. 30,000 VND per person",
        website: "No official website."
      }
      },
        {
        name: "Truc Lam Zen Monastery & Cable Car",
        description: "Perched on a hill overlooking the serene Tuyen Lam Lake, Truc Lam Zen Monastery is the largest Zen monastery in Vietnam and a peaceful haven for meditation and reflection. The complex is surrounded by beautiful gardens filled with flowers and pine trees, creating a tranquil atmosphere away from the city buzz. Visitors can explore the main ceremonial hall and admire the traditional Buddhist architecture.\n\nOne of the best ways to reach the monastery is via the 2.3km cable car that runs from Robin Hill. The ride offers spectacular bird's-eye views of Dalat, the pine forests, and the sprawling Tuyen Lam Lake below. The combination of the scenic cable car journey and the monastery's serene environment makes this a truly calming and memorable experience.",
        practicalInfo: {
        howToGetThere: "The monastery is near Tuyen Lam Lake. The cable car station is on Robin Hill at the top of Đống Đa Street.",
        openingHours: "Monastery: 5:00 AM - 9:00 PM. Cable Car: 7:30 AM - 5:00 PM (with lunch break).",
        cost: "Monastery: Free. Cable Car (round trip): ~80,000 VND.",
        website: "thienvientruclam.com"
      }
      },
        {
        name: "Clay Tunnel (Đường Hầm Đất Sét)",
        description: "The Clay Tunnel is a unique and quirky attraction that depicts the history and culture of Dalat through elaborate clay sculptures. This 1.2km-long trench features meticulously carved scenes, from the region's ancient origins with native animals and tribal life to the French colonial era and the modern development of the city. The entire journey is a walk-through storybook made of basalt and dark red clay.\n\nIconic Dalat landmarks like the railway station, the cathedral, and Lang Biang mountain are recreated in miniature. The tunnel culminates in a giant, surreal sculpture of two faces looking in opposite directions, a popular spot for photos. It's a fun and educational experience, particularly for families.",
        practicalInfo: {
        howToGetThere: "Located in the Tuyen Lam Lake area, about 13km from the city center. Best reached by motorbike or taxi.",
        openingHours: "7:30 AM - 5:00 PM daily",
        cost: "Approx. 90,000 VND per person",
        website: "dalatstar.com"
      }
      },
        {
        name: "Elephant Waterfall (Thác Voi)",
        description: "Elephant Waterfall is one of the most powerful and raw waterfalls in the region. Located further from the city, it offers a more rugged, less-touristy experience. The falls get their name from a large rock at the base said to resemble an elephant's head. The water crashes down with immense force, creating a thunderous roar and a cloud of mist.\n\nA somewhat slippery and steep path of stone steps leads you down to the base for a dramatic, up-close view. You can even venture behind the water curtain into a small cave for a unique perspective. It’s an adventure for those who don’t mind getting a bit wet and muddy for a spectacular natural reward.",
        practicalInfo: {
        howToGetThere: "Located in Nam Ban town, about 30km southwest of Dalat. Often visited as part of a countryside motorbike tour.",
        openingHours: "8:00 AM - 5:00 PM daily",
        cost: "Approx. 20,000 VND per person",
        website: "No official website."
      }
      },
        {
        name: "Dalat Night Market (Chợ Đêm Đà Lạt)",
        description: "When the sun sets, the area around Nguyen Thi Minh Khai street transforms into the bustling Dalat Night Market. This vibrant market is the heart of Dalat's evening life and a must-visit for foodies and shoppers. The air is filled with the tantalizing aromas of street food, from grilled rice paper 'pizzas' (Bánh Tráng Nướng) and hot soy milk to skewers of grilled meats and sweet potato.\n\nBeyond the food stalls, you'll find vendors selling a wide variety of goods, including locally grown produce like strawberries and artichokes, warm woolen clothing (a necessity in Dalat's cool evenings), and souvenirs. It's a lively, crowded, and authentic local experience that offers a true taste of Dalat's culture.",
        practicalInfo: {
        howToGetThere: "Located in the city center, near the roundabout at the base of Xuan Huong Lake.",
        openingHours: "Approximately 5:00 PM - 10:00 PM daily",
        cost: "Free to enter; pay for what you eat or buy.",
        website: "N/A"
      }
      },
        {
        name: "Pongour Waterfall",
        description: "Often hailed as the most magnificent waterfall in Southern Vietnam, Pongour is a truly majestic sight. Known as the 'Seven-Level Waterfall', it cascades down a 40-meter-high, 100-meter-wide series of terraced stone steps. The sheer scale and beauty of the falls are breathtaking, especially during the rainy season when the water flow is at its peak. During the dry season, visitors can walk along the terraces.\n\nLocated about 50km from Dalat, the journey itself is a scenic ride through coffee plantations and rural landscapes. Its distance from the city means it's less crowded than Datanla, offering a more peaceful and awe-inspiring connection with nature. It is particularly sacred to the local K'Ho people.",
        practicalInfo: {
        howToGetThere: "Located 50km south of Dalat. Best visited via a motorbike tour, private car, or local bus.",
        openingHours: "7:30 AM - 5:00 PM daily",
        cost: "Approx. 20,000 VND per person",
        website: "No official website."
      }
      },
        {
        name: "Tuyen Lam Lake",
        description: "Tuyen Lam Lake is the largest freshwater lake in Dalat, a sprawling, picturesque reservoir surrounded by lush pine forests. Created by a dam, the lake and its surroundings are a designated national tourist area and a popular spot for outdoor activities and relaxation. It's a far more tranquil and expansive alternative to the central Xuan Huong Lake.\n\nVisitors can hire a boat or kayak to explore the lake's quiet coves and small islands, go fishing, or simply enjoy a picnic on its shores. The area around the lake is also home to several high-end resorts, cafes with stunning views, the Truc Lam Monastery, and the Clay Tunnel, making it a destination in itself. It's the perfect place to unwind and connect with Dalat's serene natural environment.",
        practicalInfo: {
        howToGetThere: "Located about 7km south of Dalat. Accessible by motorbike or taxi. Many attractions are located around its perimeter.",
        openingHours: "Open 24/7",
        cost: "Free to access. Fees apply for boat rentals and activities.",
        website: "N/A"
      }
      },
        {
        name: "Domaine de Marie Church",
        description: "The Domaine de Marie, also known as the Church of the Domain of Mary, is a charming pink church that stands out with its unique blend of French and local Vietnamese architectural styles. Built in the 1940s, its most striking feature is its roof, which resembles the traditional stilt houses of the local ethnic minorities, but constructed in a classic French style. The pink limestone walls give it a distinctive, photogenic quality.\n\nThe church sits on a hill, offering lovely views of the city. It's an active convent, home to Roman Catholic nuns who care for orphaned and disabled children. Behind the main church building, there is a beautifully maintained garden and a shop where you can buy woolen goods and other crafts made by the children and nuns, with proceeds supporting their cause.",
        practicalInfo: {
        howToGetThere: "1 Ngo Quyen Street, about 1km from the city center. Easily walkable or a short taxi ride.",
        openingHours: "Grounds are generally open during daylight hours; be respectful as it is an active convent.",
        cost: "Free",
        website: "No official website."
      }
      }
      ]}
      logistics={{
        gettingAround: "Dalat is relatively small and walkable, especially the central area around Xuan Huong Lake. For attractions further afield, renting a motorbike (approx. 100,000-150,000 VND/day) is a popular and flexible option. Taxis are plentiful, and ride-hailing apps like Grab are widely available and affordable. For a unique experience, consider joining a guided 'Easy Rider' motorbike tour.",
        whereToStay: "For first-time visitors, staying in the City Center near the Dalat Night Market provides easy access to food, shopping, and major sights. For a more tranquil and scenic retreat, consider the area around Tuyen Lam Lake, which hosts beautiful resorts and villas. Budget-friendly hostels and guesthouses are scattered throughout the city. Recommended hotels include Hotel Colline (luxury), Ana Mandara Villas Dalat (heritage), and The Lake House (mid-range).",
        bestTimeToVisit: "Dalat's cool climate makes it a year-round destination, but the best time to visit is during the dry season, from November to March. During this period, the weather is pleasant with clear skies and minimal rain, and the city is in full bloom for the famous Flower Festival (held in December). The rainy season runs from April to October, with heavier downpours typically in the afternoon, but the landscape is exceptionally lush and green.",
        suggestedItinerary: "Day 1: City & Culture. Explore Xuan Huong Lake, Dalat Flower Gardens, Crazy House, and Bao Dai's Summer Palace. End the day with street food at the Dalat Night Market.\nDay 2: Southern Loop & Nature. Take the cable car to Truc Lam Monastery, explore Tuyen Lam Lake, visit Datanla Waterfall (ride the alpine coaster!), and see the Clay Tunnel.\nDay 3: History & Countryside. Visit the historic Dalat Railway Station and take the train to Trai Mat to see Linh Phuoc Pagoda. In the afternoon, head to Lang Biang Mountain for panoramic views or visit a local coffee plantation."
      }}
      faqs={[{
          question: "Is Dalat expensive?",
          answer: "Dalat is considered very affordable for most international travelers. Accommodation can range from under $15 for a hostel to over $150 for a luxury resort. A local meal can cost as little as $2-4, while a coffee at a scenic cafe might be $2. Transportation via motorbike rental or ride-hailing apps is cheap. While slightly more expensive than some rural areas in Vietnam, it offers great value for money."
        },
        {
          question: "How many days do you need in Dalat?",
          answer: "A minimum of 3 full days is recommended to comfortably explore the main attractions without feeling rushed. This allows you to cover the city center, the area around Tuyen Lam Lake, and one or two of the further attractions like Lang Biang or a more distant waterfall. If you are an avid hiker or want to explore the coffee plantations and countryside in-depth, extending your stay to 4-5 days is ideal."
        },
        {
          question: "Is Dalat safe?",
          answer: "Dalat is generally a very safe city for tourists. The primary concerns are traffic-related, especially if you are not an experienced motorbike rider. Be cautious of your belongings in crowded places like the night market to avoid petty theft. Overall, violent crime is extremely rare, and the local people are friendly and welcoming."
        },
        {
          question: "What is Dalat famous for?",
          answer: "Dalat is famous for its cool, spring-like climate, earning it the nickname 'City of Eternal Spring'. It's renowned for its French colonial architecture, vast flower gardens and farms (especially hydrangeas and roses), high-quality coffee plantations, and locally produced wine. Its unique attractions, like the Crazy House and numerous scenic waterfalls, also make it a standout destination in Vietnam."
        }
      ]}
      imageUrl={""}
    />
  );
};