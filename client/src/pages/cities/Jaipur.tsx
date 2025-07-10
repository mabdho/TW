import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Jaipur: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Jaipur, India (2025 Guide)"}
      description={"Welcome to Jaipur, the magnificent 'Pink City' of India and the capital of Rajasthan. Founded in 1727 by Maharaja Sawai Jai Singh II, this city is a stunning tapestry of royal history, vibrant culture, and architectural marvels. The entire old city, enclosed by walls and gates, is painted a distinctive terracotta pink, a color associated with hospitality. From sprawling forts perched on arid hills to opulent palaces and bustling bazaars brimming with textiles and gems, Jaipur offers a sensory feast. It forms one corner of the famed Golden Triangle circuit, along with Delhi and Agra. Exploring the grand monuments and chaotic, charming streets reveals a city where ancient traditions and modern life coexist beautifully. This guide will walk you through the absolute best things to do in Jaipur, ensuring an unforgettable journey into the heart of royal Rajasthan."}
      highlights={["Amber Fort (Amer Fort)",
        "Hawa Mahal",
        "City Palace",
        "Jantar Mantar",
        "Johari Bazaar"]}
      galleryImages={[
        { url: "", alt: "Jaipur landmark 1", caption: "Jaipur landmark 1 - placeholder" },
        { url: "", alt: "Jaipur landmark 2", caption: "Jaipur landmark 2 - placeholder" },
        { url: "", alt: "Jaipur landmark 3", caption: "Jaipur landmark 3 - placeholder" },
        { url: "", alt: "Jaipur landmark 4", caption: "Jaipur landmark 4 - placeholder" },
        { url: "", alt: "Jaipur landmark 5", caption: "Jaipur landmark 5 - placeholder" },
        { url: "", alt: "Jaipur landmark 6", caption: "Jaipur landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Amber Fort (Amer Fort)",
        description: "Perched majestically on a hilltop overlooking Maota Lake, Amber Fort is a breathtaking blend of Hindu and Mughal architecture. Constructed from pale yellow and pink sandstone and white marble, this 16th-century fortress-palace complex is the star attraction of Jaipur. Its highlights include the Diwan-i-Aam (Hall of Public Audience), the intricate Sheesh Mahal (Mirror Palace) where walls are embedded with thousands of tiny mirrors, and the Sukh Niwas (Hall of Pleasure), which features a clever natural air conditioning system.\n\nThe fort's massive ramparts, series of gates, and cobbled paths are a journey back in time. Visitors can choose to walk up the steep slope, take a jeep, or ride an elephant to the main courtyard, though walking or taking a jeep is the more ethical choice. The sheer scale and opulence of Amber Fort tell the story of the Kachwaha Rajput rulers and their prosperous kingdom.",
        practicalInfo: {
        howToGetThere: "Located 11 km from Jaipur city center. Easily accessible via auto-rickshaw, taxi, or local bus.",
        openingHours: "8:00 AM - 5:30 PM daily. Light and Sound Show in the evening.",
        cost: "Foreigners: ₹500; Indians: ₹100. Composite ticket available.",
        website: "https://www.tourism.rajasthan.gov.in/jaipur.html"
      }
      },
        {
        name: "Hawa Mahal",
        description: "An icon of Jaipur, the Hawa Mahal, or 'Palace of Winds', is an extraordinary pink-painted, honeycomb-like structure. This five-story facade was built in 1799 by Maharaja Sawai Pratap Singh so that the royal women could observe street festivities and daily life unseen from the outside. Its most famous feature is the intricate exterior with 953 small windows, called jharokhas, decorated with elaborate latticework.\n\nWhile stunning from the street, it's worth entering the palace to see the other side. The interior consists of a series of ramps and chambers that lead up to the small windows, offering unique perspectives of the City Palace and Jantar Mantar. The design allowed for a cool breeze to pass through, making it a perfect summer palace.",
        practicalInfo: {
        howToGetThere: "Located in the heart of the Pink City. Best viewed from the cafes opposite.",
        openingHours: "9:00 AM - 4:30 PM daily.",
        cost: "Foreigners: ₹200; Indians: ₹50.",
        website: "https://www.tourism.rajasthan.gov.in/jaipur.html"
      }
      },
        {
        name: "City Palace",
        description: "The City Palace has been the seat of the Maharaja of Jaipur since the 18th century and continues to be the home of the royal family. This sprawling complex is a magnificent example of Rajput and Mughal architectural styles, featuring a series of courtyards, gardens, and buildings. Key highlights include the Mubarak Mahal, now a museum showcasing royal costumes and artifacts, and the Chandra Mahal, the private residence of the royal family (parts of which are open for a premium ticket).\n\nDon't miss the four exquisite gates in the Pritam Niwas Chowk courtyard, each representing a different season. The Diwan-i-Khas houses two huge silver urns, which are in the Guinness Book of World Records as the largest sterling silver objects in the world.",
        practicalInfo: {
        howToGetThere: "Centrally located within the Walled City, near Hawa Mahal and Jantar Mantar.",
        openingHours: "9:30 AM - 5:00 PM and 7:00 PM - 10:00 PM (for night viewing).",
        cost: "Various ticket options. General entry for foreigners starts at ₹700; Indians at ₹200.",
        website: "https://www.thecitypalacejaipur.com/"
      }
      },
        {
        name: "Jantar Mantar",
        description: "A testament to the scientific and astronomical prowess of its founder, Maharaja Sawai Jai Singh II, Jantar Mantar is a UNESCO World Heritage site. This remarkable observatory, completed in 1734, houses a collection of nineteen colossal astronomical instruments built from stone and brass. Each instrument serves a specific purpose, such as measuring time, predicting eclipses, and tracking the location of stars.\n\nThe most impressive structure is the Samrat Yantra, the world's largest stone sundial, which is 27 meters tall and can tell the time with an accuracy of about two seconds. It's a fascinating place that blends science, art, and religion, offering a unique glimpse into the mind of a scholarly king.",
        practicalInfo: {
        howToGetThere: "Located directly opposite the entrance to the City Palace.",
        openingHours: "9:00 AM - 4:30 PM daily.",
        cost: "Foreigners: ₹200; Indians: ₹50.",
        website: "https://www.tourism.rajasthan.gov.in/jantar-mantar.html"
      }
      },
        {
        name: "Nahargarh Fort",
        description: "Standing on the edge of the Aravalli Hills, Nahargarh Fort offers the most spectacular panoramic views of Jaipur. Built in 1734 by Maharaja Sawai Jai Singh II as a place of retreat, the fort's name means 'abode of tigers'. It served as a formidable defense for the city, connected to Jaigarh Fort through its extended walls.\n\nThe main palace within the fort, Madhavendra Bhawan, has a unique cluster of 12 identical suites for the queens, all connected to the king's suite through a series of corridors. The fort is a popular spot for locals and tourists alike, especially at sunset. The journey up the winding hill is an experience in itself.",
        practicalInfo: {
        howToGetThere: "A 30-minute drive up a winding road from the city center. Best reached by taxi or auto-rickshaw.",
        openingHours: "10:00 AM - 5:30 PM daily.",
        cost: "Foreigners: ₹200; Indians: ₹50.",
        website: "https://www.tourism.rajasthan.gov.in/nahargarh-fort.html"
      }
      },
        {
        name: "Jaigarh Fort",
        description: "Often overlooked in favor of the more ornate Amber Fort, Jaigarh Fort is the rugged, military counterpart built to protect it. Perched on the 'Cheel ka Teela' (Hill of Eagles), it is connected to Amber Fort by subterranean passages. The fort was a center for artillery production for the Rajputs and has never been conquered, preserving much of its original character.\n\nThe main attraction here is the 'Jaivana Cannon', which was the world's largest cannon on wheels at the time of its manufacture in 1720. The fort also offers stunning views of the surrounding landscape and Amber Fort below. It's a must-visit for military history enthusiasts and those seeking a more authentic, less crowded fort experience.",
        practicalInfo: {
        howToGetThere: "Can be reached by a short uphill drive or a 1 km walk from Amber Fort.",
        openingHours: "9:00 AM - 4:30 PM daily.",
        cost: "Foreigners: ₹85; Indians: ₹35.",
        website: "https://www.tourism.rajasthan.gov.in/jaigarh-fort.html"
      }
      },
        {
        name: "Albert Hall Museum",
        description: "Located in the beautiful Ram Niwas Garden, the Albert Hall Museum is Rajasthan's oldest museum. Its stunning Indo-Saracenic architecture, designed by Sir Samuel Swinton Jacob, is as impressive as the collection it houses. The foundation stone was laid in 1876 during the visit of the Prince of Wales, Albert Edward, after whom the museum is named.\n\nThe extensive collection includes artifacts from around the world, such as paintings, carpets, ivory, stone and metal sculptures, and colorful crystal works. One of the main attractions is an authentic Egyptian mummy. The building is beautifully illuminated at night, making it a popular spot for evening strolls.",
        practicalInfo: {
        howToGetThere: "Located in Ram Niwas Garden, south of the Old City. Accessible by auto-rickshaw or taxi.",
        openingHours: "9:00 AM - 5:00 PM and 7:00 PM - 10:00 PM (for night visit).",
        cost: "Foreigners: ₹300; Indians: ₹40.",
        website: "https://www.alberthalljaipur.gov.in/"
      }
      },
        {
        name: "Johari Bazaar",
        description: "Johari Bazaar, literally 'Jeweler's Market', is the most famous market in Jaipur. This bustling bazaar is a treasure trove for anyone interested in jewelry, from traditional Kundan and Meenakari work to precious gemstones like emeralds, diamonds, and sapphires. The narrow lanes are lined with hundreds of shops, their vibrant displays glittering under the lights.\n\nEven if you're not in the market for expensive jewelry, the experience of wandering through the lively streets is a must. You can also find beautiful sarees and lehengas, especially in the lanes branching off the main road. Remember to bargain politely for the best prices.",
        practicalInfo: {
        howToGetThere: "Located in the heart of the Pink City, near Hawa Mahal.",
        openingHours: "Shops generally open from 10:00 AM to 9:00 PM.",
        cost: "Free to browse.",
        website: "N/A"
      }
      },
        {
        name: "Bapu Bazaar",
        description: "Bapu Bazaar is another vibrant market in Jaipur, famous for its leather goods and textiles. It's the go-to place for 'Mojari' footwear, traditional Rajasthani shoes made from camel leather. You'll also find a wide variety of Rajasthani textiles, including block-printed fabrics, quilts, bedspreads, and clothing.\n\nThe bazaar offers a more relaxed shopping experience compared to Johari Bazaar. It's a great place to pick up souvenirs and handicrafts at reasonable prices. The street food stalls here are also fantastic, offering local snacks like golgappas and kulfi.",
        practicalInfo: {
        howToGetThere: "Located between Sanganeri Gate and New Gate in the Old City.",
        openingHours: "Approximately 11:00 AM to 8:00 PM daily.",
        cost: "Free to browse.",
        website: "N/A"
      }
      },
        {
        name: "Jal Mahal",
        description: "Appearing to float serenely in the middle of Man Sagar Lake, the Jal Mahal, or 'Water Palace', is one of Jaipur's most photographed sights. This architectural marvel is a five-story palace, with four of its floors submerged when the lake is full. It was originally built as a hunting lodge and summer retreat for the royal family.\n\nWhile visitors cannot currently enter the palace itself, the view from the promenade along the lake is spectacular, especially during sunrise and sunset. The palace, set against the backdrop of the Aravalli Hills, creates a picturesque and tranquil scene. The promenade is a popular evening spot for locals, with street food vendors selling delicious snacks.",
        practicalInfo: {
        howToGetThere: "Located on the Amer Road, on the way to Amber Fort.",
        openingHours: "Accessible for viewing from the road 24/7. Boating is sometimes available.",
        cost: "Free to view from the lakeside.",
        website: "N/A"
      }
      },
        {
        name: "Galtaji Temple (Monkey Temple)",
        description: "Nestled in a narrow gorge in the Aravalli Hills, Galtaji is an ancient Hindu pilgrimage site. This complex consists of a series of temples built into the rocky landscape. Its main feature is a natural spring that emerges high on the hill and flows downwards, filling a series of sacred tanks ('kunds') where pilgrims bathe.\n\nThe temple is also famous for the large colony of rhesus macaques that live here, which has earned it the nickname 'Monkey Temple'. The serene, spiritual atmosphere and the unique setting make it a fascinating place to visit, offering a different perspective on Jaipur's religious life.",
        practicalInfo: {
        howToGetThere: "Located about 10 km east of Jaipur. Best reached by taxi or auto-rickshaw.",
        openingHours: "5:00 AM - 9:00 PM daily.",
        cost: "Entry is free, but donations are expected. A small camera fee may be charged.",
        website: "N/A"
      }
      },
        {
        name: "Patrika Gate",
        description: "One of Jaipur's newer landmarks, Patrika Gate is a visual delight and an Instagrammer's paradise. Located at the entrance to Jawahar Circle Garden, this grand gate is a vibrant explosion of color. Each pillar and archway is intricately hand-painted with scenes depicting the history, culture, and art of different regions of Rajasthan.\n\nWalking through the gate is like taking a quick tour of the entire state. The symmetrical design and vivid colors make for stunning photographs. It represents a modern tribute to the architectural and artistic traditions of Rajasthan.",
        practicalInfo: {
        howToGetThere: "Located at Jawahar Circle, near Jaipur International Airport.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Panna Meena ka Kund",
        description: "This beautifully restored 16th-century stepwell, or 'baori', is a hidden gem near Amber Fort. Panna Meena ka Kund features a unique symmetrical design with crisscrossing flights of stairs descending to the water level. These stepwells were crucial in the arid climate of Rajasthan, serving as community gathering spots and water sources.\n\nIts geometric precision and the way the light and shadows play on the steps make it a photographer's dream. It's a peaceful spot to visit before or after the crowds at Amber Fort, offering a glimpse into the ingenious engineering of the past. Visitors are typically not allowed to walk down the steps but can admire the structure from the top.",
        practicalInfo: {
        howToGetThere: "A short walk or drive from Amber Fort. Located in Amer town.",
        openingHours: "7:00 AM - 6:00 PM daily.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Anokhi Museum of Hand Printing",
        description: "Dedicated to the ancient art of block printing, the Anokhi Museum offers a fascinating insight into a craft that is synonymous with Rajasthan. Housed in a beautifully restored 'haveli' (traditional mansion), the museum showcases a stunning collection of block-printed textiles, along with tools and information about the intricate process.\n\nOne of the highlights is the live demonstration where visitors can watch artisans at work and even try their hand at block printing. The museum has a wonderful shop selling high-quality, contemporary clothing and home furnishings made with traditional techniques. It’s a must-visit for anyone interested in textiles, design, and sustainable craftsmanship.",
        practicalInfo: {
        howToGetThere: "Located in Amer town, a short distance from Amber Fort.",
        openingHours: "10:30 AM - 5:00 PM (Tuesday-Saturday), 11:00 AM - 4:30 PM (Sunday). Closed on Mondays.",
        cost: "Adults: ₹30; Students: ₹20. Camera fee: ₹50.",
        website: "https://www.anokhi.com/museum"
      }
      },
        {
        name: "Chokhi Dhani",
        description: "For a comprehensive cultural experience, head to Chokhi Dhani, a mock Rajasthani village resort on the outskirts of Jaipur. It's designed to give visitors a taste of the region's rural life, art, and cuisine all in one place. The evening comes alive with folk dancers, musicians, puppet shows, camel rides, and fortune tellers.\n\nThe highlight of the visit is the traditional Rajasthani thali, a grand, multi-course vegetarian meal served with legendary hospitality. While it's a tourist-focused experience, it's an incredibly fun and immersive way to experience the vibrant culture of Rajasthan, especially for families and first-time visitors.",
        practicalInfo: {
        howToGetThere: "Located on Tonk Road, about 20 km south of the city center. Best reached by taxi.",
        openingHours: "5:00 PM - 11:00 PM daily.",
        cost: "Entry fee starts from ₹750-₹1200 per adult, which includes all activities and the meal.",
        website: "https://www.chokhidhani.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Jaipur is well-connected. Auto-rickshaws are ubiquitous for short distances; always agree on a fare beforehand or insist on using the meter. Ride-sharing apps like Uber and Ola are widely available and offer convenient, fixed-price travel. For a traditional experience, you can hire a cycle-rickshaw in the crowded lanes of the Old City. For sightseeing, hiring a car and driver for the day is an efficient and comfortable option.",
        whereToStay: "For luxury, stay at heritage hotels like the Rambagh Palace or SUJÁN Rajmahal Palace. The C-Scheme area offers excellent upscale and mid-range hotels like the Hilton Jaipur and ITC Rajputana. For a blend of convenience and atmosphere, the Bani Park area has many charming guesthouses and boutique hotels. Budget travelers and backpackers will find numerous affordable options inside the Walled City, offering an immersive experience close to the main sights.",
        bestTimeToVisit: "The best time to visit Jaipur is during the winter months, from October to March. The weather is pleasant and cool, with sunny days perfect for sightseeing. Daytime temperatures range from 20-25°C (68-77°F). Summer (April to June) is extremely hot, with temperatures often exceeding 40°C (104°F). The monsoon season (July to September) brings rain and humidity, but also a lush, green landscape.",
        suggestedItinerary: "Day 1: Fort Exploration. Start with Amber Fort in the morning. Then, visit the nearby Jaigarh Fort and Panna Meena ka Kund. In the late afternoon, head to Nahargarh Fort for stunning sunset views over the city. Day 2: The Pink City. Explore the City Palace, the Jantar Mantar observatory, and take photos of the Hawa Mahal. In the afternoon, immerse yourself in the vibrant Johari and Bapu Bazaars for shopping. Day 3: Culture and Art. Visit the Albert Hall Museum in the morning, followed by the serene Galtaji Temple (Monkey Temple). In the afternoon, see the colorful Patrika Gate before heading to Chokhi Dhani for an evening of Rajasthani culture and dinner."
      }}
      faqs={[{
          question: "Is Jaipur expensive?",
          answer: "Jaipur can cater to every budget. It can be very affordable for backpackers, with dorm beds available for under ₹500 and simple meals for ₹100-200. A mid-range traveler can expect to spend ₹3,000-₹5,000 per day, including a comfortable hotel, meals at good restaurants, and auto-rickshaw transport. Luxury travel is also popular, with opulent palace hotels costing upwards of ₹20,000 per night. Entrance fees to monuments are higher for foreign tourists than for Indian nationals."
        },
        {
          question: "How many days do you need in Jaipur?",
          answer: "To see the main highlights of Jaipur without feeling rushed, 3 full days is ideal. This allows you to dedicate one day to the forts (Amber, Jaigarh, Nahargarh), one day to the sights within the Walled City (City Palace, Hawa Mahal, Jantar Mantar, bazaars), and a third day for other attractions like the Albert Hall Museum, Galtaji, and a cultural evening. If you are short on time, you can cover the absolute must-sees in 2 packed days."
        },
        {
          question: "Is Jaipur safe?",
          answer: "Jaipur is generally a safe city for tourists. However, like any major tourist destination, it's important to be cautious. Petty theft like pickpocketing can occur in crowded areas, so keep your valuables secure. Be wary of common scams, particularly involving gem-buying or unsolicited guides. Solo female travelers should exercise standard precautions, such as avoiding walking alone in isolated areas at night and dressing modestly to respect local culture. Using trusted transportation like app-based taxis is recommended."
        },
        {
          question: "What is Jaipur famous for?",
          answer: "Jaipur is famous for being the 'Pink City' of India, a name it earned for its distinctive terracotta-pink buildings in the old walled city. It is renowned for its magnificent forts and opulent palaces, such as Amber Fort and City Palace, which are prime examples of Rajput and Mughal architecture. The city is also a global hub for gemstones and jewelry, especially intricate Kundan and Meenakari work. Furthermore, it is celebrated for its vibrant textiles (especially block-printing), handicrafts, and delicious Rajasthani cuisine."
        }
      ]}
    />
  );
};