import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Reykjavik: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Reykjavik, Iceland (2025 Guide)"}
      description={"Welcome to Reykjavik, the world's northernmost capital city, a vibrant hub where colorful rooftops contrast with the raw, dramatic landscapes of Iceland. This city is a unique blend of quirky charm, sophisticated culture, and unparalleled access to nature's wonders. From its geothermal-powered streets to its thriving arts and music scene, Reykjavik serves as the perfect base for exploring volcanoes, glaciers, and geysers. Whether you're chasing the Northern Lights in winter or basking in the midnight sun of summer, you'll find an adventure at every turn. It’s a city that feels both cosmopolitan and deeply connected to ancient sagas. Prepare to be captivated by the energy and beauty of this Icelandic jewel as we explore the very best things to do in Reykjavik."}
      highlights={["Hallgrímskirkja",
        "Blue Lagoon",
        "Harpa Concert Hall and Conference Centre",
        "The Sun Voyager (Sólfar)",
        "Chase the Northern Lights"]}
      galleryImages={[
        { url: "", alt: "Reykjavik landmark 1", caption: "Reykjavik landmark 1 - placeholder" },
        { url: "", alt: "Reykjavik landmark 2", caption: "Reykjavik landmark 2 - placeholder" },
        { url: "", alt: "Reykjavik landmark 3", caption: "Reykjavik landmark 3 - placeholder" },
        { url: "", alt: "Reykjavik landmark 4", caption: "Reykjavik landmark 4 - placeholder" },
        { url: "", alt: "Reykjavik landmark 5", caption: "Reykjavik landmark 5 - placeholder" },
        { url: "", alt: "Reykjavik landmark 6", caption: "Reykjavik landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Hallgrímskirkja",
        description: "Dominating the Reykjavik skyline, Hallgrímskirkja is an iconic Lutheran church and one of Iceland's most famous landmarks. Its striking expressionist architecture was designed by Guðjón Samúelsson to resemble the basalt lava flows found throughout the country. The church took over 40 years to build, and its minimalistic interior provides a serene contrast to its dramatic exterior.\nThe main highlight for visitors is the observation tower. An elevator ride to the top offers breathtaking 360-degree panoramic views of Reykjavik's colorful houses, the surrounding mountains, and the vast Atlantic Ocean. It's the best vantage point in the city and an essential first stop to get your bearings.",
        practicalInfo: {
        howToGetThere: "Located in the city center at Hallgrímstorg 1. Easily accessible by foot from most downtown hotels.",
        openingHours: "Daily. May-Sep: 9:00 AM - 9:00 PM; Oct-Apr: 10:00 AM - 5:00 PM. Tower closes 30 minutes before the church. Hours may vary for services.",
        cost: "Church entry is free. Tower access: ~1400 ISK for adults.",
        website: "https://www.hallgrimskirkja.is/en"
      }
      },
        {
        name: "Blue Lagoon",
        description: "While not technically in Reykjavik, the Blue Lagoon is an unmissable Icelandic experience easily reached from the city. This world-famous geothermal spa is renowned for its milky-blue, mineral-rich waters, which are a byproduct of the nearby Svartsengi geothermal power plant. The warm water, rich in silica and sulfur, is said to have healing properties for the skin.\nVisitors can float in the expansive lagoon, apply a silica mud mask, enjoy a drink from the in-water bar, or upgrade their experience with saunas, steam rooms, and in-water massages. The stark, black lava field surrounding the vibrant blue water creates a surreal and otherworldly atmosphere, making it a perfect place for relaxation and iconic photos.",
        practicalInfo: {
        howToGetThere: "Located on the Reykjanes Peninsula, about a 50-minute drive from Reykjavik or 20 minutes from Keflavik Airport. Numerous bus and tour operators offer transfers.",
        openingHours: "Varies by season, but generally open from 8:00 AM to 9:00 PM or later. Booking is mandatory.",
        cost: "Starts from ~9,990 ISK for basic comfort package. Prices vary significantly by time and demand.",
        website: "https://www.bluelagoon.com"
      }
      },
        {
        name: "Harpa Concert Hall and Conference Centre",
        description: "A dazzling jewel on Reykjavik's waterfront, Harpa is the city's premier concert hall and a masterpiece of modern architecture. Designed by Danish-Icelandic artist Ólafur Elíasson, its distinctive geometric glass facade is inspired by Iceland's basalt columns and shifting light. During the day, the panels reflect the city and the sky; at night, they come alive with a dynamic LED light show.\nEven if you don't attend a performance by the Icelandic Symphony Orchestra or the Icelandic Opera, Harpa is a must-visit. You can freely wander through its public spaces, admire the architectural details from the inside, and enjoy stunning views of the harbor and Mount Esja. There are also guided tours, a gift shop, and a restaurant on-site.",
        practicalInfo: {
        howToGetThere: "Located at Austurbakki 2 in the Old Harbour area, a short walk from the city center.",
        openingHours: "Daily: 10:00 AM - 6:00 PM. Open later for scheduled events.",
        cost: "Free to enter and explore. Guided tours and performances have separate fees.",
        website: "https://www.harpa.is/en"
      }
      },
        {
        name: "The Sun Voyager (Sólfar)",
        description: "Set against the stunning backdrop of the sea and Mount Esja, the Sun Voyager (Sólfar in Icelandic) is a captivating steel sculpture by Jón Gunnar Árnason. Located on the Sæbraut waterfront road, it is often mistaken for a Viking longship, but it is much more than that. The artist described it as an ode to the sun, representing a dreamboat and a promise of undiscovered territory, hope, and freedom.\nThis elegant and evocative sculpture is one of Reykjavik's most photographed landmarks, especially at sunrise or sunset when the light catches the polished steel. It's a perfect spot for a contemplative stroll along the seaside path, offering a moment of peace and a connection to Iceland's spirit of exploration.",
        practicalInfo: {
        howToGetThere: "On Sæbraut road, a 5-10 minute walk east of Harpa Concert Hall.",
        openingHours: "24/7",
        cost: "Free",
        website: "https://visiticeland.com/article/the-sun-voyager"
      }
      },
        {
        name: "Chase the Northern Lights",
        description: "Witnessing the Aurora Borealis is a bucket-list experience for many visitors to Iceland, and Reykjavik is a great starting point for this celestial chase. The Northern Lights are a natural phenomenon caused by solar particles interacting with the Earth's atmosphere, creating dancing waves of green, pink, and purple light across the night sky.\nWhile you can sometimes spot them from darker parts of the city like Grótta Lighthouse, the best way to see them is to escape the city's light pollution. Numerous guided tours are available, from bus excursions to super jeep adventures and boat trips. These tours are led by experts who know the best viewing spots based on weather and aurora forecasts, maximizing your chances of a spectacular show.",
        practicalInfo: {
        howToGetThere: "Tours typically offer hotel pickup from Reykjavik.",
        openingHours: "Tours run nightly from late August to mid-April, depending on conditions.",
        cost: "Bus tours start from ~7,000 ISK. Super jeep and private tours are more expensive.",
        website: "https://guidetoiceland.is/book-trips-holiday/nature-tours/northern-lights"
      }
      },
        {
        name: "Perlan - Wonders of Iceland",
        description: "Perlan, or 'The Pearl,' is a unique educational and entertainment venue housed in a landmark building on Öskjuhlíð hill. The building itself is notable for its giant glass dome built atop six massive hot water storage tanks. Inside, Perlan offers a state-of-the-art nature exhibition that brings Iceland's wonders to life.\nKey attractions include a real indoor ice cave (the only one of its kind in the world), a stunning 360° observation deck with panoramic views of the city and beyond, and an immersive planetarium show about the Northern Lights. It's a fantastic way to learn about Iceland's glaciers, volcanoes, and unique geology in an interactive and engaging way, making it perfect for all ages.",
        practicalInfo: {
        howToGetThere: "Located on Öskjuhlíð hill. A free shuttle bus runs from Harpa. It's also a 20-30 minute walk from downtown.",
        openingHours: "Daily: 9:00 AM - 10:00 PM. Last admission varies for different exhibits.",
        cost: "Observation deck only: ~890 ISK. Full experience ticket: ~4,990 ISK.",
        website: "https://www.perlan.is"
      }
      },
        {
        name: "National Museum of Iceland",
        description: "For a deep dive into the nation's history, the National Museum of Iceland is the place to go. The museum's permanent exhibition, 'Making of a Nation - Heritage and History in Iceland,' chronologically charts the country's story from the first Viking settlements to the present day. It showcases over 2,000 artifacts, including archaeological finds, medieval church artifacts, and items from modern Icelandic life.\nThe exhibits are well-curated and engaging, with interactive displays and detailed explanations in English. It provides essential context for understanding Icelandic culture, society, and the resilient spirit of its people. Don't miss the famous Valthjófsstadur door, a medieval church door intricately carved with scenes from a 12th-century knight's tale.",
        practicalInfo: {
        howToGetThere: "Located at Suðurgata 41, near Tjörnin lake and the University of Iceland.",
        openingHours: "Daily (May-Sep): 10:00 AM - 5:00 PM. Tue-Sun (Oct-Apr): 10:00 AM - 5:00 PM.",
        cost: "Adults: ~2,500 ISK. Free for children under 18.",
        website: "https://www.thjodminjasafn.is/en"
      }
      },
        {
        name: "Laugavegur Shopping Street",
        description: "Laugavegur is the pulsating artery of Reykjavik's downtown area. It's the city's main commercial street, lined with a vibrant mix of high-end boutiques, souvenir shops, Icelandic design stores, and international brands. It's the perfect place to shop for a traditional Lopapeysa (Icelandic wool sweater) or unique souvenirs crafted by local artisans.\nBut Laugavegur is more than just a shopping destination; it's the heart of Reykjavik's social life. The street and its offshoots are packed with a diverse array of cafes, bars, and restaurants, making it a hub of activity from morning until late at night. A stroll down Laugavegur, taking in the colorful street art and lively atmosphere, is an essential Reykjavik experience.",
        practicalInfo: {
        howToGetThere: "The main street running through downtown Reykjavik (Miðborg).",
        openingHours: "Shops generally open 10:00 AM - 6:00 PM. Bars and restaurants stay open much later.",
        cost: "Free to walk. Shopping and dining costs vary widely.",
        website: "https://visitreykjavik.is/laugavegur"
      }
      },
        {
        name: "The Settlement Exhibition",
        description: "Built around an archaeological excavation, The Settlement Exhibition offers a fascinating glimpse into Reykjavik's earliest history. The centerpiece of the museum is the excavated ruin of a 10th-century Viking longhouse, one of the first known man-made structures in the area. The exhibition uses cutting-edge technology and multimedia displays to bring this ancient settlement to life.\nVisitors can explore interactive exhibits that explain who the first settlers were, how they lived, and what the environment was like over a thousand years ago. It’s a compelling and atmospheric museum that connects you directly with the Viking Age roots of the city. The museum is located partially underground, right in the heart of the city.",
        practicalInfo: {
        howToGetThere: "Located at Aðalstræti 16, one of the oldest streets in Reykjavik.",
        openingHours: "Daily: 10:00 AM - 5:00 PM.",
        cost: "Adults: ~2,950 ISK. Free for children under 18.",
        website: "https://reykjavikcitymuseum.is/the-settlement-exhibition"
      }
      },
        {
        name: "FlyOver Iceland",
        description: "FlyOver Iceland is an immersive flight simulation ride that takes you on a breathtaking journey across the country's most spectacular landscapes. Seated in a suspended chair with your feet dangling, you'll glide in front of a 20-meter spherical screen while the ride's movements are synchronized with the film. Special effects like wind, mist, and scents complete the sensory experience.\nThe ride showcases Iceland's iconic natural wonders, from soaring over glaciers and volcanoes to swooping through canyons and past cascading waterfalls. It's a thrilling and family-friendly attraction that allows you to see the entire country in a short amount of time, providing a unique perspective on its epic beauty.",
        practicalInfo: {
        howToGetThere: "Located in the Grandi district (Fishpacking District), near the Old Harbour.",
        openingHours: "Hours vary by season, typically from 10:00 AM - 7:00 PM. Check website for current times.",
        cost: "Adults: ~5,690 ISK. Discounts for children.",
        website: "https://www.flyovericeland.com"
      }
      },
        {
        name: "Whales of Iceland",
        description: "Whales of Iceland is the largest whale exhibition in Europe, offering a unique and educational experience for all ages. Located in the Grandi harbor district, the museum features 23 man-made, life-sized models of the whale species found in Icelandic waters, from the small harbour porpoise to the gigantic blue whale. Walking among these gentle giants provides a true sense of their immense scale.\nThe exhibition uses ambient underwater lighting, soundscapes, and interactive displays to create an immersive deep-sea atmosphere. It’s a fantastic complement to a whale watching tour, providing in-depth information about the biology and conservation of these magnificent creatures. It’s a great activity, especially on days when the weather is not suitable for a boat trip.",
        practicalInfo: {
        howToGetThere: "Located at Fiskislóð 23-25 in the Grandi District, a short drive or 20-minute walk from the city center.",
        openingHours: "Daily: 10:00 AM - 5:00 PM.",
        cost: "Adults: ~4,400 ISK. Family and student discounts available.",
        website: "https://www.whalesoficeland.is"
      }
      },
        {
        name: "Tjörnin (The Pond)",
        description: "Tjörnin is a small, picturesque lake right in the heart of Reykjavik. Affectionately known by locals as 'the biggest bread soup in the world' due to the tradition of feeding the ducks and swans, it's a beloved feature of the cityscape. The pond is a tranquil oasis, surrounded by beautiful parks and some of Reykjavik's most handsome buildings, including the City Hall (Ráðhús Reykjavíkur) and several museums.\nIt's a wonderful place for a leisurely walk, regardless of the season. In summer, it’s a hub for birdlife, while in winter, it often freezes over and becomes a natural ice-skating rink for locals. The path around the lake is perfect for jogging or simply sitting on a bench and enjoying a peaceful moment in the city.",
        practicalInfo: {
        howToGetThere: "Located in central Reykjavik, just south of the main downtown area.",
        openingHours: "24/7",
        cost: "Free",
        website: "https://visitreykjavik.is/tjornin-pond"
      }
      },
        {
        name: "Kolaportið Flea Market",
        description: "For a truly local and eclectic experience, head to the Kolaportið Flea Market near the Old Harbour. Open only on weekends, this indoor market is a chaotic, bustling treasure trove where you can find everything from vintage clothing and second-hand books to Icelandic wool products and quirky bric-a-brac. It’s the perfect place to hunt for a unique souvenir that goes beyond the typical tourist fare.\nThe food section is a highlight for the adventurous. Here, you can sample traditional Icelandic 'delicacies' like hákarl (fermented shark), harðfiskur (dried fish), and flatkaka (rye flatbread). Even if you don't buy anything, the atmosphere, sounds, and smells of Kolaportið provide an authentic slice of Reykjavik life.",
        practicalInfo: {
        howToGetThere: "Located at Tryggvagata 19, by the Old Harbour.",
        openingHours: "Saturdays and Sundays only, typically 11:00 AM - 5:00 PM.",
        cost: "Free to enter.",
        website: "https://kolaportid.is/en/"
      }
      },
        {
        name: "Árbær Open Air Museum",
        description: "Step back in time at the Árbær Open Air Museum, a historical village that shows what life was like in Reykjavik in the 19th and 20th centuries. The museum consists of more than 20 historical buildings relocated from central Reykjavik, forming a small town square, a village, and a farm. The old Árbær farm, which has stood on the site since the 15th century, is the museum's centerpiece.\nStaff dressed in period costumes demonstrate traditional Icelandic crafts and activities, and you can explore the interiors of the homes, a church, and various workshops. In the summer, domestic animals roam the grounds, adding to the authentic atmosphere. It's a charming and educational experience, particularly for families, offering a tangible connection to Iceland's past.",
        practicalInfo: {
        howToGetThere: "Located in the Árbær district, about a 15-minute drive or a bus ride (Strætó) from downtown.",
        openingHours: "Daily (Jun-Aug): 10:00 AM - 5:00 PM. Limited hours and guided tours only in winter (Sep-May). Check website.",
        cost: "Adults: ~2,350 ISK. Free for children under 18.",
        website: "https://reykjavikcitymuseum.is/arbaer-open-air-museum"
      }
      },
        {
        name: "Videy Island",
        description: "Just a short ferry ride from Reykjavik's harbour lies Videy Island, a serene escape offering a blend of history, art, and nature. The island is home to the Imagine Peace Tower, a memorial to John Lennon from his widow Yoko Ono, which projects a powerful beam of light into the sky between October 9th and December 8th each year. It also features 'Milestones,' a sculpture installation by Richard Serra.\nBeyond the art, Videy is a haven for birdwatchers and offers beautiful walking and cycling paths with stunning views of the Reykjavik skyline and the surrounding mountains. You can explore the ruins of old settlements and Videy House, one of Iceland's oldest buildings. It's a perfect half-day trip for those seeking tranquility and a different perspective on the capital city.",
        practicalInfo: {
        howToGetThere: "A 5-minute ferry ride from Skarfabakki pier or from the Old Harbour (summer only).",
        openingHours: "Ferry operates daily in summer and weekends in winter. Check ferry schedule.",
        cost: "Return ferry ticket: ~2,200 ISK.",
        website: "https://videy.com/en"
      }
      }
      ]}
      logistics={{
        gettingAround: "Reykjavik's downtown is compact and highly walkable. For longer distances, the Strætó public bus system is efficient and covers the greater Reykjavik area. Taxis are readily available but expensive. Renting a car is the best option for flexibility and for exploring outside the city, though parking in the center can be challenging and costly. Many tours for attractions like the Blue Lagoon and Golden Circle include transportation.",
        whereToStay: "The best area for tourists is Miðborg (downtown/101), which puts you within walking distance of most attractions, restaurants, and nightlife. For a quieter, more local vibe, consider Vesturbær, just west of the center. Laugardalur is great for families, with its parks and proximity to the zoo and botanical garden. Hotel recommendations range from luxury (The Reykjavik EDITION) to design-focused (Sand Hotel) and budget-friendly (Kex Hostel).",
        bestTimeToVisit: "Summer (June-August) offers the Midnight Sun, with nearly 24 hours of daylight, milder weather, and lush green landscapes, but it's also the most crowded and expensive season. Winter (October-April) is the prime time for Northern Lights viewing, ice cave explorations, and snowy landscapes, but daylight hours are short and weather can be harsh. The shoulder seasons (May and September) are ideal for balancing decent weather, fewer crowds, and the chance to see either lingering auroras or the start of summer's glow.",
        suggestedItinerary: "[object Object]"
      }}
      faqs={[{
          question: "Is Reykjavik expensive?",
          answer: "Yes, Reykjavik is one of the more expensive cities in Europe. The cost of food, drinks, accommodation, and tours can be high due to Iceland's remote location and reliance on imports. To save money, consider self-catering by shopping at budget supermarkets like Bónus or Krónan, take advantage of happy hour deals ('Gleðistund') at bars, and book accommodation and tours well in advance."
        },
        {
          question: "How many days do you need in Reykjavik?",
          answer: "To explore the city of Reykjavik itself, 2 to 3 days is sufficient. This gives you enough time to see the main landmarks, visit a museum or two, and soak in the atmosphere. However, most visitors use Reykjavik as a base for day trips. To comfortably see the city and do popular excursions like the Golden Circle and the South Coast or the Blue Lagoon, a stay of 4 to 5 days is recommended."
        },
        {
          question: "Is Reykjavik safe?",
          answer: "Reykjavik is considered one of the safest cities in the world, with an exceptionally low crime rate. Violent crime is very rare. Visitors can feel comfortable walking around at any time of day or night. However, as with any city, it's wise to take standard precautions: be aware of your surroundings, watch your belongings in crowded areas, and be cautious of unpredictable weather if driving or hiking."
        },
        {
          question: "What is Reykjavik famous for?",
          answer: "Reykjavik is famous for being the world's northernmost capital city and the gateway to Iceland's incredible natural wonders, including the Northern Lights, glaciers, volcanoes, and geothermal spas like the Blue Lagoon. It's also renowned for its vibrant and creative culture, boasting a thriving music scene, unique street art, distinctive architecture like Hallgrímskirkja, and a lively nightlife."
        }
      ]}
    />
  );
};