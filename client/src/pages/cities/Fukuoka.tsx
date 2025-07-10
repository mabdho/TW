import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Fukuoka: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Fukuoka, Japan (2025 Guide)"}
      description={"Welcome to Fukuoka, the vibrant gateway to Japan's southern island of Kyushu. This dynamic port city masterfully blends ancient history with modern energy, offering a more relaxed alternative to Tokyo or Kyoto without sacrificing excitement. Renowned for its friendly locals, pristine beaches, and a legendary food scene, Fukuoka is a paradise for gourmands and culture seekers alike. From slurping world-famous tonkotsu ramen at a riverside yatai stall to exploring serene shrines and futuristic art installations, there's an incredible variety of experiences waiting. Whether you're wandering through castle ruins or shopping in sprawling underground malls, you'll quickly discover why this city is a favorite among travelers. Our guide will show you all the best things to do in Fukuoka, ensuring a trip filled with delicious food, rich culture, and unforgettable memories."}
      highlights={["Dazaifu Tenmangu Shrine",
        "Yatai Food Stalls",
        "Ohori Park",
        "Canal City Hakata",
        "Fukuoka Castle Ruins (Maizuru Park)"]}
      attractions={[
        {
        name: "Dazaifu Tenmangu Shrine",
        description: "A short trip from the city center, Dazaifu Tenmangu is one of Japan's most important Tenmangu shrines, dedicated to Sugawara no Michizane, the deity of learning and scholarship. Students from all over the country flock here to pray for academic success. The shrine's grounds are stunning, featuring a picturesque pond with an arched bridge, thousands of plum trees that blossom beautifully in late winter, and impressive main halls.\n\nBefore entering, walk along the atmospheric 'sando' (approach road) lined with shops selling 'umegae mochi,' a grilled rice cake with red bean paste that is a local specialty. The Kanko Historical Museum and the striking, modern architecture of the Kyushu National Museum are also located nearby, making Dazaifu a perfect half-day excursion.",
        practicalInfo: {
        howToGetThere: "Take the Nishitetsu-Tenjin-Omuta Line from Nishitetsu Fukuoka (Tenjin) Station to Dazaifu Station (approx. 30 minutes).",
        openingHours: "6:00 AM - 7:00 PM (seasonal variations apply)",
        cost: "Free admission to shrine grounds.",
        website: "https://www.dazaifutenmangu.or.jp/en/"
      }
      },
        {
        name: "Yatai Food Stalls",
        description: "Fukuoka's yatai, or open-air food stalls, are an iconic part of the city's identity. Every evening around 6 PM, these small, intimate stalls pop up, primarily in the Tenjin and Nakasu Island areas, seating just a handful of customers. They offer a unique dining experience where you can chat with the chef and fellow diners while enjoying delicious, affordable food.\n\nThe menu typically includes local specialties like Hakata ramen (pork bone broth noodles), yakitori (grilled skewers), oden (winter hot pot), and gyoza (pan-fried dumplings). Grabbing a seat at a yatai is not just about the food; it's about soaking in the lively atmosphere and experiencing Fukuoka's warm hospitality firsthand.",
        practicalInfo: {
        howToGetThere: "Concentrated in the south of Nakasu Island and around Tenjin and Nagahama areas. Easily accessible on foot from Tenjin or Nakasu-Kawabata subway stations.",
        openingHours: "Typically 6:00 PM - 12:00 AM (varies by stall; closed in bad weather).",
        cost: "Dishes range from ¥500 - ¥1,500.",
        website: "https://yokanavi.com/en/yatai/"
      }
      },
        {
        name: "Ohori Park",
        description: "Ohori Park is Fukuoka's urban oasis, a large and beautiful public park designed around a central pond that was once part of the Fukuoka Castle's moat system. Its design was modeled after the classical West Lake in China, featuring three small islands connected by elegant stone bridges. A 2-kilometer path circles the pond, making it a popular spot for jogging, walking, and cycling.\n\nWithin the park, you can rent swan boats, visit the tranquil Ohori Park Japanese Garden (for a small fee), or explore the Fukuoka Art Museum, which houses a notable collection of modern and pre-modern art. It's the perfect place to relax and escape the city buzz for a few hours.",
        practicalInfo: {
        howToGetThere: "Directly accessible from Ohori Koen Station on the Kuko subway line.",
        openingHours: "Park is open 24/7. Japanese Garden and Art Museum have specific hours.",
        cost: "Free admission to the park. Separate fees for the Japanese Garden (¥250) and Art Museum.",
        website: "https://www.ohorikouen.jp/en/"
      }
      },
        {
        name: "Canal City Hakata",
        description: "More than just a shopping mall, Canal City Hakata is a massive multi-level complex described as a 'city within a city.' An artificial canal runs through its center, hosting spectacular fountain shows set to music every half hour. The complex features hundreds of shops, cafes, restaurants, a cinema, a theater, and two hotels.\n\nThe unique, colorful architecture is an attraction in itself. You'll find everything from international brands like Zara and Muji to the Ramen Stadium on the fifth floor, where you can sample ramen from different regions of Japan. It’s a great place to spend a rainy day or enjoy an evening of entertainment and dining.",
        practicalInfo: {
        howToGetThere: "A 10-15 minute walk from Hakata Station or Gion Station.",
        openingHours: "Shops: 10:00 AM - 9:00 PM; Restaurants: 11:00 AM - 11:00 PM (varies).",
        cost: "Free to enter.",
        website: "https://canalcity.co.jp/english"
      }
      },
        {
        name: "Fukuoka Castle Ruins (Maizuru Park)",
        description: "Explore the remnants of Fukuoka's past at the Fukuoka Castle Ruins, located within Maizuru Park. Once the largest castle in Kyushu, it was built in the early 17th century but was largely dismantled after the Meiji Restoration. Today, you can wander through the expansive grounds, trace the original layout, and see ruined walls, turrets, and gates.\n\nClimb to the top of the main citadel's foundation for a commanding view of the city. The park is especially popular during late March and early April when hundreds of cherry trees burst into bloom, creating one of the city's best hanami (cherry blossom viewing) spots.",
        practicalInfo: {
        howToGetThere: "A short walk from Ohori Koen or Akasaka subway stations.",
        openingHours: "Open 24/7.",
        cost: "Free admission.",
        website: "https://fukuokajyo.com/en/"
      }
      },
        {
        name: "Kushida Shrine",
        description: "Kushida Shrine is the spiritual heart of Fukuoka and is believed to have been founded in 757. It is dedicated to several deities, including Amaterasu (goddess of the sun) and Susanoo (god of storms), and is affectionately known as 'O-kushida-san' by locals. This shrine is the starting point for the famous Hakata Gion Yamakasa festival in July, and one of the massive decorative floats used in the festival is on display here year-round.\n\nDon't miss the ancient Gingko tree on the grounds, said to be over 1,000 years old, and a well whose water is believed to grant longevity. The shrine offers a peaceful respite in the middle of the bustling Hakata district.",
        practicalInfo: {
        howToGetThere: "A 5-minute walk from Gion Station or an 8-minute walk from Nakasu-Kawabata Station.",
        openingHours: "4:00 AM - 10:00 PM.",
        cost: "Free admission.",
        website: "https://www.hakatayamakasa.com/kushidajinja.php"
      }
      },
        {
        name: "Fukuoka Tower",
        description: "The tallest seaside tower in Japan, Fukuoka Tower stands at 234 meters and is the city's most recognizable modern landmark. Covered in 8,000 half-mirrors, its triangular design is striking against the skyline. Take the elevator up to the main observation deck at 123 meters for breathtaking 360-degree panoramic views of Fukuoka city, Hakata Bay, and the surrounding mountains.\n\nThe tower also features a 'Lover's Sanctuary' for couples and a sky lounge cafe. In the evening, the tower comes alive with spectacular illuminations that change with the seasons and for special events, making it a beautiful sight both day and night.",
        practicalInfo: {
        howToGetThere: "Take a Nishitetsu bus from Hakata or Tenjin station (approx. 20-25 minutes).",
        openingHours: "9:30 AM - 10:00 PM (last entry 9:30 PM).",
        cost: "¥800 for adults (discounts for tourists with passport).",
        website: "https://www.fukuokatower.co.jp/en/"
      }
      },
        {
        name: "Momochi Seaside Park",
        description: "Located right in front of Fukuoka Tower, Momochi Seaside Park (Seaside Momochi) is a modern waterfront area built on reclaimed land. Its centerpiece is a long, clean artificial beach, perfect for a stroll or relaxing on the sand. The central plaza, Marizon, is a collection of restaurants, shops, and a wedding hall built on a pier extending into the bay.\n\nThis area provides the best vantage point for photos of Fukuoka Tower. You can also catch a ferry from here to Uminonakamichi Seaside Park across the bay. It's a popular spot for locals to unwind, especially during sunset.",
        practicalInfo: {
        howToGetThere: "Same as Fukuoka Tower; take a bus from Hakata or Tenjin.",
        openingHours: "Open 24/7 (individual shop hours vary).",
        cost: "Free admission.",
        website: "https://www.marizon-kankyo.jp/en/"
      }
      },
        {
        name: "Yanagibashi Rengo Market",
        description: "Often called 'Hakata's Kitchen,' the Yanagibashi Rengo Market is a traditional covered market street that has been supplying the city's top restaurants and locals with fresh ingredients for over a century. The narrow arcade is packed with about 50 small shops selling a dazzling array of fresh seafood, meat, produce, and local delicacies like mentaiko (spicy pollack roe).\n\nIt's a fantastic place to immerse yourself in the local food culture. You can browse the stalls, sample products, and even enjoy a fresh seafood bowl for breakfast or lunch at one of the small eateries within the market. It offers an authentic, less-touristy alternative to larger markets in other Japanese cities.",
        practicalInfo: {
        howToGetThere: "A 5-minute walk from Watanabe-dori Station on the Nanakuma subway line.",
        openingHours: "Approx. 8:00 AM - 6:00 PM (many shops close by late afternoon). Closed Sundays and holidays.",
        cost: "Free to enter.",
        website: "http://yanagibashi-rengo.com/"
      }
      },
        {
        name: "Hakata Machiya Folk Museum",
        description: "Step back in time at the Hakata Machiya Folk Museum, dedicated to preserving and showcasing the lifestyle and culture of Hakata during the Meiji and Taisho periods (late 19th to early 20th century). The museum is housed in three beautifully restored 'machiya' (traditional townhouses).\n\nThe main exhibition hall displays artifacts and information about Hakata's history and festivals, including a detailed exhibit on the Hakata Gion Yamakasa. In the townhouse section, you can watch artisans demonstrating traditional Hakata crafts like weaving and doll making. It's a small but charming museum that offers great insight into the city's heritage.",
        practicalInfo: {
        howToGetThere: "Located next to Kushida Shrine, a short walk from Gion or Nakasu-Kawabata stations.",
        openingHours: "10:00 AM - 6:00 PM (last entry 5:30 PM).",
        cost: "¥200.",
        website: "https://www.hakatamachiya.com/static/english.php"
      }
      },
        {
        name: "Nanzoin Temple and the Reclining Buddha",
        description: "Just a short train ride from Fukuoka lies one of its most impressive sights: the giant reclining Buddha at Nanzoin Temple. The bronze statue, known as Nehanzo, is 41 meters long, 11 meters high, and weighs nearly 300 tons. It's said to be the largest bronze reclining Buddha in the world. The statue's feet are open to visitors, who can touch the intricate patterns for good luck.\n\nThe temple itself is a large, beautiful complex set on a forested hillside, with numerous other halls, statues, and a tranquil walking trail that crosses a melody bridge. It's a highly rewarding day trip that combines spiritual significance with stunning artistry.",
        practicalInfo: {
        howToGetThere: "Take the JR Fukuhoku Yutaka Line from Hakata Station to Kido-Nanzoin-mae Station (approx. 20 minutes). The temple is a 3-minute walk from the station.",
        openingHours: "9:00 AM - 5:00 PM.",
        cost: "Free admission to grounds. A ¥500 donation is required to enter the prayer room under the Buddha.",
        website: "https://nanzoin.net/en/"
      }
      },
        {
        name: "Sumiyoshi Shrine",
        description: "Considered one of the oldest Sumiyoshi shrines in Japan, this sanctuary in Hakata is dedicated to the Shinto gods of the sea, sailors, and fishermen. The current main hall, built in the early 17th century, is a designated National Important Cultural Property and is a beautiful example of the ancient Sumiyoshi-zukuri architectural style, characterized by straight roofs and vermilion-lacquered wood.\n\nThe shrine grounds are a pocket of tranquility, featuring ancient camphor trees, various smaller shrines, and a sumo ring where ceremonies are held. It's a spiritually significant site that offers a peaceful escape and a glimpse into architectural history.",
        practicalInfo: {
        howToGetThere: "A 10-minute walk from Hakata Station.",
        openingHours: "6:00 AM - 5:00 PM.",
        cost: "Free admission.",
        website: "http://chikuzen-sumiyoshi.or.jp/"
      }
      },
        {
        name: "teamLab Forest Fukuoka",
        description: "Immerse yourself in a world of digital art at teamLab Forest Fukuoka, located in the BOSS E・ZO FUKUOKA entertainment complex next to the PayPay Dome. This permanent exhibition by the world-renowned art collective teamLab is divided into two sections: the 'Catching and Collecting Forest' and the 'Forest of Motion.'\n\nVisitors use a smartphone app to 'catch' digital creatures that roam the vibrant, interactive spaces. The artwork is constantly changing and responds to the movement of people, creating a unique and mesmerizing experience every time. It's a fun and futuristic activity for visitors of all ages.",
        practicalInfo: {
        howToGetThere: "A 15-minute walk from Tojinmachi subway station, or take a bus from Hakata/Tenjin.",
        openingHours: "Weekdays 11:00 AM - 8:00 PM; Weekends 10:00 AM - 8:00 PM.",
        cost: "¥2,200 for adults.",
        website: "https://www.teamlab.art/e/forest/"
      }
      },
        {
        name: "Uminonakamichi Seaside Park",
        description: "Uminonakamichi is a massive, family-friendly national park located on a narrow peninsula across Hakata Bay. This sprawling park offers a huge variety of attractions, including seasonal flower gardens (nemophila, roses, sunflowers), playgrounds, a small zoo called the 'Animal Forest,' and extensive lawns perfect for picnics.\n\nDue to its size, renting a bicycle is the best way to explore the park's many areas. The park is also home to Marine World, a large aquarium that was renovated in 2017 and features impressive dolphin shows and large tanks showcasing local marine life. It's an ideal destination for a full day of outdoor fun.",
        practicalInfo: {
        howToGetThere: "Take the JR Kagoshima/Kashii Line from Hakata to Uminonakamichi Station, or take a ferry from Marizon Pier (Momochi) or Bayside Place Hakata Pier.",
        openingHours: "9:30 AM - 5:30 PM (March-October); 9:30 AM - 5:00 PM (November-February).",
        cost: "Park entry: ¥450. Separate admission for Marine World aquarium.",
        website: "https://uminaka-park.jp/en/"
      }
      },
        {
        name: "Kawabata Shopping Arcade",
        description: "Stretching for about 400 meters, the Kawabata Shopping Arcade is Fukuoka's oldest covered shopping street ('shotengai'). It connects the Canal City Hakata area with the Hakata Machiya Folk Museum and Kushida Shrine. This traditional arcade has a charming, slightly retro atmosphere compared to the modern Tenjin underground mall.\n\nHere you'll find a mix of old and new, with shops selling traditional Japanese crafts, Buddhist altars, Hakata dolls, souvenirs, and cheap clothing. It's also a great place to sample local snacks and see one of the giant Hakata Gion Yamakasa floats on display. It offers a glimpse into local life and is perfect for a rainy-day stroll.",
        practicalInfo: {
        howToGetThere: "Directly accessible from Nakasu-Kawabata Station.",
        openingHours: "Varies by shop, but generally 10:00 AM - 7:00 PM.",
        cost: "Free to enter.",
        website: "http://www.e-kawabata.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Fukuoka boasts an excellent public transport system. The subway is the most convenient way to travel between major areas like the airport, Hakata Station, and Tenjin, with three lines (Kuko, Hakozaki, Nanakuma). For destinations not on the subway lines, the Nishitetsu bus network is extensive and efficient. The Fukuoka Tourist City Pass offers unlimited rides on buses and subways for a day. Central areas like Tenjin and Hakata are very walkable.",
        whereToStay: "For first-time visitors, staying in Hakata is ideal for its proximity to the main shinkansen station and airport access. Tenjin is the city's downtown core, perfect for those who want to be in the heart of the shopping, dining, and nightlife scene. For a trendier, more boutique experience, the Daimyo area next to Tenjin is packed with chic cafes and independent shops. Recommended hotels include Hotel Nikko Fukuoka (luxury), The Blossom Hakata Premier (mid-range), and WeBase Hakata (budget/hostel).",
        bestTimeToVisit: "The best times to visit Fukuoka are during the spring (March-May) and autumn (September-November). Spring brings pleasant weather and the iconic cherry blossoms, which typically bloom in late March to early April. Autumn offers comfortable temperatures and beautiful fall foliage. Summer (June-August) is hot and humid, but it's also the season for major festivals like Hakata Gion Yamakasa. Winter (December-February) is mild but can be chilly, with beautiful city illuminations.",
        suggestedItinerary: "Day 1: Arrive and explore the Hakata area. Visit Kushida Shrine, Sumiyoshi Shrine, and the Hakata Machiya Folk Museum. In the evening, explore the massive Canal City Hakata complex for shopping and dinner.\nDay 2: Take a morning trip to Dazaifu Tenmangu Shrine. Return to the city and visit Ohori Park and the adjacent Fukuoka Castle Ruins. In the evening, experience the city's famous yatai food stalls in Tenjin or Nakasu.\nDay 3: Head to the coast to see Fukuoka Tower and Momochi Seaside Park. In the afternoon, immerse yourself in digital art at teamLab Forest. Finish your trip with souvenir shopping at Kawabata Shopping Arcade."
      }}
      faqs={[{
          question: "Is Fukuoka expensive?",
          answer: "Compared to Tokyo and Kyoto, Fukuoka is generally considered more affordable. Accommodation, public transport, and especially food offer great value for money. You can enjoy a delicious bowl of Hakata ramen for under ¥1000. While you can find high-end dining and shopping, it's very much a city that can be enjoyed on a reasonable budget."
        },
        {
          question: "How many days do you need in Fukuoka?",
          answer: "To see the main sights within the city comfortably, 2 to 3 days is sufficient. This gives you enough time to explore the Hakata and Tenjin districts, visit the major shrines, and enjoy the food scene. If you want to include day trips like Dazaifu Tenmangu Shrine and Nanzoin Temple, or spend a full day at Uminonakamichi Seaside Park, extending your stay to 4 or 5 days is recommended."
        },
        {
          question: "Is Fukuoka safe?",
          answer: "Yes, Fukuoka is a very safe city, consistent with Japan's overall reputation for safety. Crime rates are very low, and it's safe to walk around at night in most areas. As with any travel destination, it's wise to use common sense, be aware of your surroundings, and keep your belongings secure, especially in crowded places like train stations."
        },
        {
          question: "What is Fukuoka famous for?",
          answer: "Fukuoka is most famous for its incredible food scene. Key culinary specialties include Hakata Ramen (rich tonkotsu pork bone broth), Motsunabe (offal hot pot), Mizutaki (chicken hot pot), and Mentaiko (spicy pollack roe). The city is also renowned for its unique Yatai (open-air food stalls) culture, the lively Hakata Dontaku and Hakata Gion Yamakasa festivals, and for being a modern, relaxed city with a rich history and beautiful seaside."
        }
      ]}
    />
  );
};