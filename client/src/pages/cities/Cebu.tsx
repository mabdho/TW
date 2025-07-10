import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Cebu: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Cebu, Philippines (2025 Guide)"}
      description={"Welcome to Cebu, the 'Queen City of the South' and a vibrant hub where tropical paradise meets rich colonial history. This sprawling island province in the Philippines' Visayas region offers a dazzling array of experiences. In the bustling metropolis of Cebu City, you can trace the footsteps of early Spanish explorers, while just a few hours away, pristine white-sand beaches, cascading waterfalls, and world-renowned dive sites await. Whether you're an adrenaline junkie eager to swim with whale sharks, a history buff exploring ancient basilicas, or a beach lover seeking serenity on a remote island, you'll find it here. This guide will walk you through the very best things to do in Cebu, ensuring an unforgettable adventure that blends urban excitement with breathtaking natural beauty, solidifying its status as a must-visit destination in Southeast Asia."}
      highlights={["Kawasan Falls Canyoneering",
        "Moalboal Sardine Run",
        "Basilica Minore del Santo Niño",
        "Magellan's Cross",
        "Osmeña Peak"]}
      galleryImages={[
        { url: "", alt: "Cebu landmark 1", caption: "Cebu landmark 1 - placeholder" },
        { url: "", alt: "Cebu landmark 2", caption: "Cebu landmark 2 - placeholder" },
        { url: "", alt: "Cebu landmark 3", caption: "Cebu landmark 3 - placeholder" },
        { url: "", alt: "Cebu landmark 4", caption: "Cebu landmark 4 - placeholder" },
        { url: "", alt: "Cebu landmark 5", caption: "Cebu landmark 5 - placeholder" },
        { url: "", alt: "Cebu landmark 6", caption: "Cebu landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Kawasan Falls Canyoneering",
        description: "An absolute must for thrill-seekers, canyoneering at Kawasan Falls is an exhilarating adventure that involves trekking, scrambling, climbing, and jumping down a series of stunning waterfalls. Located in the town of Badian in South Cebu, this activity takes you through lush jungle landscapes and into milky-blue freshwater pools. The journey culminates at the main Kawasan Falls, a majestic three-tiered cascade that is a famous landmark in its own right.\n\nGuided tours are mandatory for safety and provide all necessary equipment, including a life vest, helmet, and aqua shoes. The jumps range from a few feet to over 40 feet, but all high jumps have an alternative path for those who are less daring. It's a physically demanding but incredibly rewarding experience that offers a unique way to witness Cebu's raw natural beauty.",
        practicalInfo: {
        howToGetThere: "Located in Badian, approximately a 3-4 hour bus ride from the South Bus Terminal in Cebu City. Most visitors book a tour package that includes transportation.",
        openingHours: "Tours typically run from 6:00 AM to 3:00 PM daily.",
        cost: "PHP 1,500 - PHP 2,500 per person for a full tour package, including guide, gear, and entrance fees.",
        website: "https://www.cebu.gov.ph/tourism/"
      }
      },
        {
        name: "Swim with the Sardine Run in Moalboal",
        description: "Moalboal offers one of the world's most incredible underwater spectacles: the sardine run. Just a few meters off the shore of Panagsama Beach, millions of sardines move in a massive, shimmering ball. You can experience this phenomenon by snorkeling or scuba diving, immersing yourself in the heart of the swirling school. It’s a surreal and mesmerizing sight as the fish move in perfect unison, creating dark, shifting clouds that part as you swim through them.\n\nUnlike other seasonal animal encounters, the sardine run in Moalboal happens year-round. It's an easily accessible and ethical marine adventure, as the fish are naturally there and not baited. You might even spot a sea turtle gliding by to feed on the abundant fish.",
        practicalInfo: {
        howToGetThere: "Moalboal is a 3-4 hour bus ride from Cebu City's South Bus Terminal. From Moalboal town, take a tricycle to Panagsama Beach.",
        openingHours: "Accessible 24/7, but best experienced during daylight hours.",
        cost: "Free if you have your own snorkel gear. Gear rental is around PHP 100-200. Dive centers offer guided dives for around PHP 1,200-1,500.",
        website: "https://www.discoverphilippines.com/destinations/moalboal"
      }
      },
        {
        name: "Basilica Minore del Santo Niño de Cebú",
        description: "Considered the oldest Roman Catholic church in the Philippines, the Basilica Minore del Santo Niño is a site of deep historical and religious significance. Founded in 1565, the current stone church was completed in 1739 and houses the revered Santo Niño de Cebú, a Flemish statue of the child Jesus gifted by Ferdinand Magellan to Queen Juana in 1521. This icon is the center of the country's largest annual festival, Sinulog.\n\nThe basilica itself is a beautiful example of Baroque and Neoclassical architecture. Visitors can attend mass, light candles in the prayer hall, or explore the on-site museum, which contains religious artifacts, vestments, and offerings from centuries of devotees. It's a peaceful sanctuary amidst the hustle and bustle of downtown Cebu.",
        practicalInfo: {
        howToGetThere: "Located in downtown Cebu City, easily accessible by taxi, Grab, or jeepney. It's right next to Magellan's Cross.",
        openingHours: "5:00 AM - 7:00 PM daily, with varying hours for the museum.",
        cost: "Free entry to the church. A small donation is appreciated. The museum has a separate entrance fee (around PHP 30).",
        website: "https://santoninodecebubasilica.org/"
      }
      },
        {
        name: "Magellan's Cross",
        description: "Housed in a small chapel next to the Basilica, Magellan's Cross marks the spot where Portuguese explorer Ferdinand Magellan planted a wooden cross upon arriving in Cebu in 1521. This event symbolizes the arrival of Christianity in the Philippines and is one of the country's most important historical markers. The ceiling of the gazebo is painted with a mural depicting this historic moment.\n\nThe original cross is said to be encased within the newer tindalo wood cross displayed to the public, a measure taken to protect it from souvenir hunters who chipped away at it over the centuries. A visit here is a quick but essential stop to understand Cebu's pivotal role in Philippine history.",
        practicalInfo: {
        howToGetThere: "Located on Magallanes Street, right beside the Basilica Minore del Santo Niño. Easily accessible by taxi or jeepney.",
        openingHours: "8:00 AM - 6:00 PM daily.",
        cost: "Free.",
        website: "https://www.cebucity.gov.ph/attraction/magellans-cross/"
      }
      },
        {
        name: "Osmeña Peak",
        description: "For the best panoramic views in Cebu, hike to the summit of Osmeña Peak. Standing at 1,013 meters, it is the highest point on the island. The peak is famous for its unique landscape of sharp, jagged hills that are often compared to the Chocolate Hills of Bohol, but in a more rugged, pointed formation. The hike to the top is relatively easy and can be completed in just 20-30 minutes from the trailhead, making it accessible for most fitness levels.\n\nThe 360-degree view from the summit is spectacular, overlooking the jagged coastline of Cebu, the neighboring island of Negros, and the sea on both sides. It's particularly stunning at sunrise or sunset. The cool mountain air provides a refreshing escape from the coastal heat.",
        practicalInfo: {
        howToGetThere: "Take a bus from Cebu South Bus Terminal to Dalaguete (2.5-3 hours). From Dalaguete town, hire a 'habal-habal' (motorcycle taxi) for the 45-minute ride to the trailhead.",
        openingHours: "Accessible 24/7, but guides are available from early morning to late afternoon.",
        cost: "PHP 30 entrance fee per person. Habal-habal ride costs around PHP 200-300 round-trip, including waiting time.",
        website: "https://www.cebu.gov.ph/tourism/"
      }
      },
        {
        name: "Fort San Pedro",
        description: "The oldest and smallest triangular bastion fort in the country, Fort San Pedro is a historical park that offers a quiet respite in a busy port area. Originally built of wood by Spanish conquistador Miguel López de Legazpi in 1565, it was later replaced with the current stone structure in the 17th century to repel raiders. Over the centuries, it has served as a military defense structure, a rebel stronghold, an army barracks, and even a city zoo.\n\nToday, you can walk along its ramparts, explore the small museum inside, and enjoy the well-maintained gardens within its walls. It's a compact and fascinating piece of military history that provides insight into Cebu's colonial past.",
        practicalInfo: {
        howToGetThere: "Located in Plaza Independencia, near the main pier area of Cebu City. A short walk from Magellan's Cross.",
        openingHours: "8:00 AM - 7:00 PM daily.",
        cost: "PHP 30 entrance fee.",
        website: "https://www.cebucity.gov.ph/attraction/fort-san-pedro/"
      }
      },
        {
        name: "Cebu Taoist Temple",
        description: "Perched in the affluent Beverly Hills subdivision of Cebu City, the Taoist Temple is a colorful and serene spiritual site. Built in 1972 by Cebu's Chinese community, the temple is a center for the practice of Taoism, a religion based on the teachings of ancient Chinese philosopher Lao Tzu. The multi-tiered complex is a vibrant explosion of dragons, pagodas, and intricate Chinese architecture.\n\nVisitors can climb the 81 steps (representing the 81 chapters of the Tao Te Ching) to enter the temple. Inside, you can have your fortune read, light joss sticks, and observe local devotees. The temple also offers a fantastic panoramic view of Cebu City and Mactan Island.",
        practicalInfo: {
        howToGetThere: "Located in Beverly Hills Subdivision. Best reached by taxi or Grab, as jeepneys don't go directly to the entrance. You can also take a habal-habal from the base of the hill.",
        openingHours: "9:00 AM - 5:00 PM daily.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Sirao Flower Garden",
        description: "Dubbed the 'Little Amsterdam of Cebu,' the Sirao Flower Garden is a vibrant, hillside farm blanketed with colorful celosia flowers, sunflowers, and other blossoms. It became an instant social media sensation for its picturesque landscapes and quirky installations, including a giant hand structure that offers a perfect photo opportunity with the mountains in the background.\n\nWhile it can get crowded, the sheer beauty of the flower fields against the rolling hills is undeniable. There are actually two distinct gardens, the original Sirao Pictorial Garden and Camping Site (PGCS) and the newer Sirao Flower Farm. Both offer slightly different attractions but are equally photogenic.",
        practicalInfo: {
        howToGetThere: "Located in the highlands of Busay, about a 45-minute to 1-hour drive from Cebu City. Hiring a habal-habal or a taxi/Grab for a round trip is the most common option.",
        openingHours: "7:00 AM - 5:30 PM daily.",
        cost: "Around PHP 100 per person for each garden.",
        website: "https://www.facebook.com/SiraoGarden/"
      }
      },
        {
        name: "Temple of Leah",
        description: "Often called Cebu's version of the Taj Mahal, the Temple of Leah is a grandiose Roman-style temple built as a symbol of undying love from businessman Teodorico Adarna to his late wife, Leah Villa Albino-Adarna. Construction began in 2012, and while it's still partially under construction, it has become a major tourist draw for its opulent architecture, Grecian-inspired statues, and sweeping city views.\n\nThe massive structure features grand staircases, towering columns, and brass angels. Inside the main shrine, a 9-foot bronze statue of Leah Adarna is the centerpiece. It's a monument of immense scale and detail, offering a surreal and photogenic experience unlike anything else in the Philippines.",
        practicalInfo: {
        howToGetThere: "Also located in Busay, often visited on the same trip as Sirao Garden. Best reached by habal-habal, taxi, or Grab.",
        openingHours: "7:00 AM - 6:00 PM daily.",
        cost: "PHP 100 - PHP 150 entrance fee.",
        website: "https://www.facebook.com/TempleOfLeah/"
      }
      },
        {
        name: "Malapascua Island",
        description: "Malapascua is a tiny, idyllic island off the northern tip of Cebu, renowned worldwide among scuba divers for one main reason: the thresher shark. Monad Shoal, an underwater plateau just off the coast, is a cleaning station where these rare and elusive deep-water sharks come to be cleaned by smaller fish in the early morning hours. It's the only place in the world where recreational divers can see them so reliably.\n\nBeyond the sharks, Malapascua is the quintessential tropical paradise with fine white sand beaches, laid-back beach bars, and a tranquil atmosphere. It's less developed and crowded than other tourist spots, offering a more rustic and authentic island escape. Island hopping to nearby Calanggaman Island, with its famous snaking sandbar, is also a popular activity.",
        practicalInfo: {
        howToGetThere: "Take a 4-5 hour bus or van from Cebu North Bus Terminal to Maya Port. From Maya Port, take a 30-40 minute public boat to Malapascua Island.",
        openingHours: "Accessible year-round.",
        cost: "Bus fare is ~PHP 250. Boat fare is ~PHP 200. Dives cost around PHP 1,500-1,800 per dive.",
        website: "https://www.discoverphilippines.com/destinations/malapascua"
      }
      },
        {
        name: "Lapu-Lapu Shrine",
        description: "Located on Mactan Island, this shrine commemorates the historic Battle of Mactan in 1521. Here, the chieftain Lapu-Lapu and his warriors defeated the Spanish forces led by Ferdinand Magellan, who was killed in the battle. Lapu-Lapu is celebrated as the first Filipino hero to resist foreign colonization. The centerpiece of the park is a 20-meter bronze statue of the formidable chieftain.\n\nThe park also includes a monument marking the spot where Magellan is believed to have fallen. Visiting the shrine provides a crucial counter-narrative to the story presented at Magellan's Cross, highlighting Filipino bravery and resistance.",
        practicalInfo: {
        howToGetThere: "Located in Mactan, Lapu-Lapu City. Accessible by taxi or jeepney from Cebu City or anywhere on Mactan Island.",
        openingHours: "Open 24/7, but best visited during the day.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Bantayan Island",
        description: "Situated north of Cebu, Bantayan Island is the definition of a laid-back beach destination. It boasts powdery white sand, crystal-clear turquoise waters, and a blissfully unhurried pace of life. The main hub is Santa Fe, where you'll find most of the resorts, restaurants, and the most stunning beaches like Kota Beach and Paradise Beach.\n\nUnlike more adventure-focused destinations, Bantayan is a place to unwind. Rent a scooter to explore the island's sleepy fishing villages, visit the historic Sts. Peter and Paul Parish Church, or explore the Ogtong Cave Pool, a unique underground swimming spot within a resort. It's the perfect place to disconnect and simply enjoy the sun, sand, and sea.",
        practicalInfo: {
        howToGetThere: "From the Cebu North Bus Terminal, take a bus to Hagnaya Port (3-4 hours). From there, take a 1-hour ferry to Santa Fe Port on Bantayan Island.",
        openingHours: "Accessible year-round.",
        cost: "Bus fare is ~PHP 230. Ferry fare is ~PHP 300. Scooter rental is ~PHP 300-400 per day.",
        website: "https://www.discoverbantayan.com/"
      }
      },
        {
        name: "Sumilon Island Sandbar",
        description: "Sumilon Island is a small, 24-hectare coral island located just off the southeastern coast of Cebu, near Oslob. Its main attraction is a stunning, shifting sandbar that changes shape and location depending on the season and tides. The water here is exceptionally clear, making it a perfect spot for swimming, sunbathing, and snorkeling in the surrounding marine sanctuary.\n\nThe island is privately managed by the Sumilon Bluewater Island Resort, but day visitors are welcome for a fee. This fee includes access to the sandbar, as well as the resort's amenities like its infinity pool, kayaks, and trekking trails. It's an easy and beautiful side trip for those visiting South Cebu.",
        practicalInfo: {
        howToGetThere: "Take a bus towards Oslob and get off at the main road for Sumilon Island. From there, take a short outrigger boat to the island.",
        openingHours: "Day use is typically from 8:00 AM to 5:00 PM.",
        cost: "Day pass fee is around PHP 1,500-2,500 per person on weekends/weekdays, which includes boat transfers and use of facilities.",
        website: "https://www.bluewatersumilon.com.ph/"
      }
      },
        {
        name: "Oslob Whale Shark Watching",
        description: "The whale shark interaction in Oslob is one of Cebu's most famous and controversial activities. It offers a near-guaranteed chance to swim alongside the largest fish in the sea. Local fishermen feed the whale sharks (or 'butanding') to keep them in the area for tourists, allowing visitors to snorkel or dive with them from small outrigger boats.\n\nWhile the experience of being so close to these gentle giants is undeniably awe-inspiring, it's important for visitors to be aware of the ethical concerns surrounding the practice, such as altering the animals' natural migratory and feeding behaviors. Travelers should strictly follow the briefing rules—no touching the sharks and no sunscreen—to minimize their impact.",
        practicalInfo: {
        howToGetThere: "Oslob is a 3-4 hour bus ride from the Cebu South Bus Terminal. The whale shark watching area is in Barangay Tan-awan.",
        openingHours: "6:00 AM - 12:00 PM daily.",
        cost: "PHP 500 for snorkeling (Filipino tourist), PHP 1,000 for snorkeling (foreign tourist). Higher rates for scuba diving.",
        website: "https://www.oslob.gov.ph/oslob-whale-sharks/"
      }
      },
        {
        name: "Colon Street",
        description: "Recognized as the oldest street in the Philippines, Colon Street is a chaotic, vibrant, and historic artery in the heart of downtown Cebu. Established by the Spanish in 1565, it was once the center of commerce and high society. Today, it's a bustling commercial hub packed with department stores, movie theaters, restaurants, and countless street vendors selling everything imaginable.\n\nA walk down Colon Street is a sensory overload and a true local experience. While it's no longer the glamorous thoroughfare it once was, it remains the beating heart of the old city. It's a great place for bargain shopping and feeling the raw energy of Cebu, but visitors should be mindful of their belongings as it's a known spot for pickpockets.",
        practicalInfo: {
        howToGetThere: "Located in the downtown area, accessible by all forms of public transport in Cebu City.",
        openingHours: "Shops are generally open from 9:00 AM to 8:00 PM, but the street itself is always active.",
        cost: "Free to walk. Shopping prices are among the lowest in the city.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "In Cebu City, use the Grab ride-hailing app for convenient and metered travel. Taxis are also plentiful. For local immersion, try the iconic jeepneys, but be prepared for crowded conditions. To explore the province, the North and South Bus Terminals are your hubs for Ceres Liner buses, which are cheap and efficient. For island hopping, ferries and 'bangkas' (outrigger boats) are the standard.",
        whereToStay: "For first-time visitors and city explorers, stay in Cebu Business Park or IT Park for modern hotels and easy access to restaurants (e.g., Seda Ayala Center, Quest Hotel). For luxury and beach resorts, Mactan Island is the best choice (e.g., Shangri-La Mactan, Crimson Resort). For divers and backpackers, head south to Moalboal or north to Malapascua for a range of guesthouses and dive resorts.",
        bestTimeToVisit: "The best time to visit Cebu is during the dry season, which runs from December to May. These months offer plenty of sunshine and less humidity, ideal for beach activities and sightseeing. The busiest and most festive time is January for the Sinulog Festival. The wet season is from June to November, but rain usually comes in short, heavy bursts and shouldn't deter travel completely.",
        suggestedItinerary: "Day 1: Historical Cebu City. Visit Magellan's Cross, Basilica Minore del Santo Niño, and Fort San Pedro in the morning. In the afternoon, head up to the hills to see the Taoist Temple and Temple of Leah for sunset views. Day 2: South Cebu Adventure. Take an early trip to Moalboal for the sardine run and sea turtles, followed by canyoneering at Kawasan Falls. Day 3: Island Relaxation. Head to Mactan for a relaxing day at a beach resort, or take a day trip to a nearby island like Pandanon or Nalusuan for island hopping and snorkeling."
      }}
      faqs={[{
          question: "Is Cebu expensive?",
          answer: "Cebu can cater to all budgets. It is generally very affordable compared to Western destinations. A local meal can cost as little as $3-5 USD, while a mid-range restaurant meal might be $10-15 USD. Accommodation ranges from $15 hostels to $300+ luxury resorts. Transportation like buses and jeepneys is very cheap, while Grab/taxis are reasonably priced. Overall, you can travel comfortably on a budget of $40-50 USD per day."
        },
        {
          question: "How many days do you need in Cebu?",
          answer: "A minimum of 4-5 days is recommended to get a good feel for Cebu. This allows for one day exploring the historical sites in Cebu City and 3-4 days to venture either south (for Moalboal, Kawasan Falls) or north (for Malapascua, Bantayan). For a more comprehensive trip covering both the north and south, you would need at least 7-10 days."
        },
        {
          question: "Is Cebu safe?",
          answer: "Yes, Cebu is generally safe for tourists. The main tourist areas are well-policed. However, like any major urban area, it's wise to take precautions. Be mindful of your belongings in crowded places like Colon Street or on jeepneys to avoid petty theft. Use reputable transportation like Grab at night. In natural areas, always listen to your guides, especially during activities like canyoneering. Standard travel vigilance is sufficient for a safe trip."
        },
        {
          question: "What is Cebu famous for?",
          answer: "Cebu is famous for several key things. Historically, it's known as the 'Cradle of Christianity in the Philippines' due to the arrival of Magellan in 1521. Gastronomically, it's world-famous for its 'Lechon,' a whole roasted pig with incredibly crispy skin. For nature and adventure lovers, it's renowned for its world-class diving and snorkeling spots, including the sardine run in Moalboal and the thresher sharks of Malapascua, as well as its beautiful white-sand beaches and stunning waterfalls."
        }
      ]}
      imageUrl={""}
    />
  );
};