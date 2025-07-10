import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Lahore: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Lahore, Pakistan (2025 Guide)"}
      description={"Welcome to Lahore, the vibrant cultural heart of Pakistan. A city where centuries of Mughal grandeur blend seamlessly with bustling modern life, Lahore is a feast for the senses. Its ancient walled city whispers tales of emperors, poets, and saints, while its lush gardens and magnificent mosques stand as testaments to a glorious past. From savoring world-renowned culinary delights on a lively food street to witnessing the patriotic fervor of a border ceremony, Lahore offers an unforgettable journey into the soul of the nation. Known for its rich history, architectural marvels, and the unparalleled hospitality of its people, you'll find no shortage of incredible experiences. This guide will walk you through the very best things to do in Lahore, ensuring your visit is as magical as the city itself."}
      highlights={["Badshahi Mosque",
        "Lahore Fort (Shahi Qila)",
        "Wazir Khan Mosque",
        "Shalimar Gardens (Shalamar Bagh)",
        "Wagah Border Ceremony"]}
      galleryImages={[
        { url: "", alt: "Lahore landmark 1", caption: "Lahore landmark 1 - placeholder" },
        { url: "", alt: "Lahore landmark 2", caption: "Lahore landmark 2 - placeholder" },
        { url: "", alt: "Lahore landmark 3", caption: "Lahore landmark 3 - placeholder" },
        { url: "", alt: "Lahore landmark 4", caption: "Lahore landmark 4 - placeholder" },
        { url: "", alt: "Lahore landmark 5", caption: "Lahore landmark 5 - placeholder" },
        { url: "", alt: "Lahore landmark 6", caption: "Lahore landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Badshahi Mosque",
        description: "An architectural masterpiece and an icon of Lahore, the Badshahi Mosque is one of the world's largest mosques, commissioned by the Mughal Emperor Aurangzeb in 1673. Its vast courtyard can hold over 100,000 worshippers, surrounded by four towering minarets and three majestic marble domes. The intricate red sandstone carvings and marble inlays are breathtaking, especially during sunset when the entire complex is bathed in a warm, ethereal glow. \n\nWalking through its grand entrance, you are transported back to the height of the Mughal Empire. The sheer scale and symmetry of the structure are awe-inspiring, offering a serene and spiritual experience. It stands opposite the Lahore Fort, creating a spectacular historical precinct that is the heart of old Lahore.",
        practicalInfo: {
        howToGetThere: "Located in the Walled City of Lahore, next to Lahore Fort. Easily accessible via ride-hailing apps or rickshaw.",
        openingHours: "8:00 AM - 8:00 PM, closed during prayer times.",
        cost: "Nominal entry fee for locals (approx. 50 PKR), higher for foreigners (approx. 500 PKR).",
        website: "visitlahore.com"
      }
      },
        {
        name: "Lahore Fort (Shahi Qila)",
        description: "A UNESCO World Heritage site, the Lahore Fort is a citadel that encapsulates centuries of history. Its origins are ancient, but its current formidable structure was largely built during the reign of Emperor Akbar in the 16th century. Each successive ruler, from Jahangir to Shah Jahan, added their own palaces, halls, and gardens, making it a living museum of Mughal architecture. \n\nKey highlights within the fort include the breathtaking Sheesh Mahal (Palace of Mirrors), the Alamgiri Gate, and the Naulakha Pavilion. Exploring its sprawling complex feels like a journey through time, with every corner revealing intricate frescoes, delicate marble screens, and commanding views of the city.",
        practicalInfo: {
        howToGetThere: "Situated in the Walled City, directly opposite the Badshahi Mosque.",
        openingHours: "8:30 AM - 5:00 PM daily.",
        cost: "Entry fee is approx. 50 PKR for locals and 500 PKR for foreigners. Separate tickets may be needed for specific areas like Sheesh Mahal.",
        website: "walledcitylahore.gop.pk"
      }
      },
        {
        name: "Wazir Khan Mosque",
        description: "Considered the most ornately decorated Mughal-era mosque, Wazir Khan Mosque is a jewel hidden within the bustling lanes of the Walled City. Built in the 17th century during the reign of Shah Jahan, it is renowned for its stunningly intricate kashi-kari (tile mosaic work) and vibrant frescoes that cover nearly every surface, both inside and out. \n\nUnlike the monumental scale of Badshahi Mosque, Wazir Khan offers a more intimate and artistic experience. Its beauty lies in the details – the complex floral motifs, the elegant calligraphy, and the kaleidoscope of colors. Climbing one of its minarets offers a spectacular panoramic view of the ancient city's rooftops and labyrinthine streets.",
        practicalInfo: {
        howToGetThere: "Located inside the Delhi Gate of the Walled City. Best reached by rickshaw to the gate, followed by a short walk.",
        openingHours: "5:00 AM - 8:00 PM, visitors are requested to avoid prayer times.",
        cost: "Free entry, but donations are welcome.",
        website: "walledcitylahore.gop.pk"
      }
      },
        {
        name: "Shalimar Gardens (Shalamar Bagh)",
        description: "Another of Lahore's UNESCO World Heritage sites, the Shalimar Gardens are a stunning example of Mughal garden design. Built by Emperor Shah Jahan in 1642, this Persian-style garden is laid out in three descending terraces, representing different levels of sanctity. The gardens are famous for their extensive water features, including over 400 fountains, canals, and pools that create a cool and tranquil oasis. \n\nThe symmetrical layout, marble pavilions, and lush greenery make it a perfect place for a peaceful stroll. The engineering marvel of the water system, which once created a mesmerizing effect with the fountains, showcases the ingenuity of Mughal builders.",
        practicalInfo: {
        howToGetThere: "Located on GT Road, about 5 km east of the Walled City. Accessible via taxi or ride-hailing services.",
        openingHours: "8:00 AM - 6:00 PM daily.",
        cost: "Approx. 20 PKR for locals, 500 PKR for foreigners.",
        website: "visitlahore.com"
      }
      },
        {
        name: "Wagah Border Ceremony",
        description: "A visit to Lahore is incomplete without witnessing the daily Wagah Border Ceremony. This military practice sees the security forces of Pakistan (the Pakistan Rangers) and India (the Border Security Force) jointly lower their respective flags at sundown. The ceremony is a highly theatrical and patriotic display of national pride, featuring elaborate, high-kicking drills and synchronized marching. \n\nThe atmosphere is electric, with stadium-like seating on both sides of the border gate filled with cheering crowds. It's a powerful and unique spectacle that is both entertaining and poignant, symbolizing the complex relationship between the two nations.",
        practicalInfo: {
        howToGetThere: "Located about 29 km from central Lahore. Best to hire a taxi or use a ride-hailing app for the round trip. Allow at least an hour for travel.",
        openingHours: "Ceremony starts around 4:30 PM (winter) or 5:30 PM (summer). Arrive at least 90 minutes early to get a good seat.",
        cost: "Free entry. Seating is first-come, first-served.",
        website: "No official website, but tour operators offer packages."
      }
      },
        {
        name: "Explore the Walled City (Androon Lahore)",
        description: "Step back in time by wandering through the labyrinthine streets of Androon Lahore, the Walled City. This ancient heart of Lahore is a dense, living settlement enclosed by thirteen historic gates. Each alleyway is a sensory overload, filled with the aroma of spices, the sounds of craftsmen at work, and the sight of centuries-old havelis (traditional mansions) with intricately carved wooden balconies. \n\nStart at the recently restored Delhi Gate and follow the Royal Trail (Shahi Guzargah) to discover hidden courtyards, historic mosques, and bustling bazaars. It's the best way to experience the authentic, chaotic, and utterly charming soul of the city. A guided tour is highly recommended to navigate the maze and hear the stories behind the landmarks.",
        practicalInfo: {
        howToGetThere: "Enter through any of the gates, but Delhi Gate is the best starting point for the Royal Trail. Use a rickshaw to get there.",
        openingHours: "24/7, but best explored during daylight hours (9:00 AM - 7:00 PM).",
        cost: "Free to explore. Guided tours are available for a fee.",
        website: "walledcitylahore.gop.pk"
      }
      },
        {
        name: "Lahore Museum (Ajaib Ghar)",
        description: "Immortalized in Rudyard Kipling's novel 'Kim' as the 'Wonder House', the Lahore Museum is one of Pakistan's most significant cultural institutions. Founded in 1865, its impressive collection spans the history and artistic traditions of the region. The exhibits are vast and varied, featuring priceless artifacts from the Indus Valley Civilization, intricate Gandharan sculptures (including the famous Fasting Siddhartha), Mughal paintings, Sikh-era weaponry, and colonial-era documents. \n\nThe museum's grand red-brick building is a landmark in itself. It provides a comprehensive overview of the rich tapestry of cultures that have shaped this part of the world, making it a must-visit for history buffs and art lovers.",
        practicalInfo: {
        howToGetThere: "Located on Mall Road (Shahrah-e-Quaid-e-Azam), opposite the University of the Punjab.",
        openingHours: "9:00 AM - 4:00 PM (Closed on Fridays).",
        cost: "Approx. 50 PKR for locals, 1000 PKR for foreigners.",
        website: "museum.punjab.gov.pk"
      }
      },
        {
        name: "Tomb of Jahangir",
        description: "Set within a tranquil garden, the Tomb of Jahangir is the final resting place of the fourth Mughal Emperor. Completed in 1637, this mausoleum is known for its elegant and understated beauty, a contrast to the grander tombs of other emperors. The exterior is faced with red sandstone inlaid with marble motifs, while the interior is a masterpiece of intricate frescoes and delicate 'pietra dura' (inlay work with semi-precious stones). \n\nThe cenotaph, made of pure white marble, is exquisitely carved with the 99 names of Allah. The serene setting and artistic detail make it one of the most well-preserved and beautiful Mughal monuments in the subcontinent.",
        practicalInfo: {
        howToGetThere: "Located in Shahdara Bagh, across the River Ravi. It's a bit outside the city center, so a taxi is the best option.",
        openingHours: "8:00 AM - 5:00 PM daily.",
        cost: "Approx. 20 PKR for locals, 500 PKR for foreigners.",
        website: "visitlahore.com"
      }
      },
        {
        name: "Fort Road Food Street",
        description: "For an unforgettable culinary experience with a view, head to Fort Road Food Street. This vibrant, pedestrianized street comes alive at night, nestled right next to the Lahore Fort and Badshahi Mosque. The buildings are brightly painted and the air is thick with the tantalizing aromas of Pakistani barbecue, curries, and traditional sweets. \n\nChoose a rooftop restaurant, such as the famous Cuckoo's Den, for a spectacular dinner setting. As you feast on delicious Lahori cuisine, you'll be treated to a stunning, illuminated view of the Badshahi Mosque. It's the perfect fusion of history and gastronomy.",
        practicalInfo: {
        howToGetThere: "Located just outside the Fort Road Gate of the Walled City, adjacent to the Lahore Fort.",
        openingHours: "Best to visit after 7:00 PM when it's most lively.",
        cost: "Free to walk around. Meal prices vary by restaurant (approx. 1500-3000 PKR per person for a good meal).",
        website: "N/A"
      }
      },
        {
        name: "Minar-e-Pakistan",
        description: "A national monument of immense significance, the Minar-e-Pakistan stands in Iqbal Park, the site where the All-India Muslim League passed the Lahore Resolution on March 23, 1940. This resolution was a pivotal moment in the movement for an independent Pakistan. The tower's design is rich in symbolism, blending Mughal, Islamic, and modern architectural styles. \n\nThe base of the tower represents the struggle for independence, rising up to a flower-like structure that symbolizes the blossoming of the new nation. Visitors can take an elevator to the top for panoramic views of the city, including the nearby Lahore Fort and Badshahi Mosque.",
        practicalInfo: {
        howToGetThere: "Located in Iqbal Park, right next to the Walled City.",
        openingHours: "9:00 AM - 9:00 PM daily.",
        cost: "Free to enter the park. A small fee is charged for the elevator to the top.",
        website: "N/A"
      }
      },
        {
        name: "Anarkali Bazaar",
        description: "One of the oldest and most famous markets in South Asia, Anarkali Bazaar is a chaotic and exhilarating shopping experience. Named after a legendary courtesan, the bazaar is split into two sections: Old Anarkali, known for traditional food, and New Anarkali, famous for its vast array of textiles, clothing, handicrafts, and jewelry. \n\nNavigating its crowded lanes is an adventure in itself. Here, you can practice your bargaining skills and find everything from embroidered fabrics and traditional 'khussa' shoes to spices and souvenirs. It’s a sensory overload in the best possible way and a fantastic place to observe local life.",
        practicalInfo: {
        howToGetThere: "Located just off Mall Road, it's centrally located and easily accessible.",
        openingHours: "Approximately 11:00 AM - 10:00 PM (Closed on Sundays).",
        cost: "Free to browse. Prices are negotiable.",
        website: "N/A"
      }
      },
        {
        name: "Sheesh Mahal (Palace of Mirrors)",
        description: "While part of the larger Lahore Fort complex, the Sheesh Mahal deserves its own mention as a breathtaking attraction. Built by Emperor Shah Jahan, this was the private apartment for the empress and is considered the crown jewel of the fort. Its name, 'Palace of Mirrors', comes from the fact that its walls and ceilings are elaborately decorated with intricate mosaics of tiny convex mirrors. \n\nWhen a single candle is lit, the entire chamber twinkles like a star-filled sky, creating a magical and romantic effect. The detailed 'pietra dura' work and marble screens overlooking the city add to its ethereal beauty. Visiting Sheesh Mahal is an essential part of any trip to the Lahore Fort.",
        practicalInfo: {
        howToGetThere: "Located within the Lahore Fort. You must purchase an entry ticket to the fort first.",
        openingHours: "8:30 AM - 5:00 PM daily.",
        cost: "Requires a separate ticket in addition to the main fort entrance fee (approx. 100 PKR).",
        website: "walledcitylahore.gop.pk"
      }
      },
        {
        name: "Liberty Market",
        description: "For a taste of modern Lahore and some upscale shopping, head to Liberty Market in the Gulberg district. This bustling, circular market is a favorite among locals for its trendy clothing boutiques, shoe stores, and jewelers. It's the perfect place to shop for contemporary Pakistani fashion, high-quality fabrics, and accessories. \n\nBeyond shopping, Liberty Market is a social hub. The area is packed with cafes, juice bars, and eateries, making it a great spot to relax after a day of retail therapy. The atmosphere is lively, especially in the evenings when families and friends gather.",
        practicalInfo: {
        howToGetThere: "Located in the heart of Gulberg. Best reached by taxi or ride-hailing service.",
        openingHours: "11:00 AM - 11:00 PM (Closed for a period on Fridays for prayer).",
        cost: "Free to browse. Prices are generally fixed in branded stores.",
        website: "N/A"
      }
      },
        {
        name: "Delhi Gate Bazaar",
        description: "Entering the Walled City through the majestic Delhi Gate immediately plunges you into one of its most vibrant bazaars. This historic gateway, beautifully restored, opens onto a street teeming with life. The bazaar is particularly famous for its wholesale spice market, where mounds of colorful spices create a fragrant and photogenic scene. \n\nYou'll also find shops selling everything from textiles and kitchenware to traditional pickles and dried fruits. Exploring this area gives you a feel for the commercial pulse of old Lahore. Don't miss the 17th-century Shahi Hammam (Royal Bath) located just inside the gate, a beautifully conserved example of a Mughal-era bathhouse.",
        practicalInfo: {
        howToGetThere: "Located on the eastern side of the Walled City. A rickshaw can drop you right at the gate.",
        openingHours: "Bazaar is open from approx. 10:00 AM to 9:00 PM. Best experienced in the morning.",
        cost: "Free to explore. Entry fee for Shahi Hammam is approx. 50 PKR for locals, 600 PKR for foreigners.",
        website: "walledcitylahore.gop.pk"
      }
      },
        {
        name: "Jilani Park (Race Course Park)",
        description: "A sprawling green lung in the heart of the city, Jilani Park, commonly known as Race Course Park, is a favorite spot for Lahoris to unwind. The park is vast, featuring lush lawns, jogging tracks, a lake with boating facilities, and beautiful floral displays, especially during the spring flower shows. \n\nIt's an ideal place for a morning walk, a family picnic, or simply to escape the urban hustle. The park also contains a cricket ground and often hosts cultural and horticultural events. It provides a wonderful glimpse into the daily recreational life of the city's residents.",
        practicalInfo: {
        howToGetThere: "Located on Jail Road, easily accessible from all parts of the city.",
        openingHours: "5:00 AM - 10:00 PM daily.",
        cost: "Free entry.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Getting around Lahore is easy and affordable. Ride-hailing services like Uber and Careem are widely available and are the most convenient option for tourists. Auto-rickshaws are a cheaper and more traditional way to travel short distances; always negotiate the fare beforehand. For exploring the congested Walled City, walking is the best way to soak in the atmosphere, with rickshaws being useful to get to the main gates.",
        whereToStay: "For luxury, stay in Gulberg or on Mall Road, with options like Pearl Continental (PC) Hotel and Avari Hotel offering top-notch amenities. Mid-range travelers will find comfortable options in Gulberg and DHA (Defence Housing Authority), such as the Nishat Hotel. For budget-friendly guesthouses with local character, look for options near MM Alam Road or in Iqbal Town. Staying near the Walled City is less common but offers an immersive experience.",
        bestTimeToVisit: "The best time to visit Lahore is during the cooler, drier months from October to March. The weather is pleasant, perfect for sightseeing and exploring the city on foot. Spring (February-March) is particularly beautiful, with the city in full bloom and numerous festivals. The summers (May to August) are extremely hot and humid, followed by the monsoon season, making outdoor activities challenging.",
        suggestedItinerary: "Day 1: Walled City Immersion. Start at Delhi Gate, visit the Shahi Hammam and Wazir Khan Mosque. Walk the Royal Trail to the Lahore Fort and explore its palaces, including Sheesh Mahal. End the day with a spectacular view and dinner at Fort Road Food Street overlooking the Badshahi Mosque.\nDay 2: Mughal Grandeur & National Pride. Spend the morning at the serene Tomb of Jahangir and the magnificent Shalimar Gardens. In the afternoon, travel to the Wagah Border for the flag-lowering ceremony. \nDay 3: Culture, Art & Shopping. Visit the Lahore Museum in the morning. Explore the bustling Anarkali Bazaar for traditional shopping, then head to modern Liberty Market for contemporary finds and a relaxed evening meal."
      }}
      faqs={[{
          question: "Is Lahore expensive?",
          answer: "Lahore is generally a very affordable city for travelers. Accommodation can range from under $30 USD for a budget guesthouse to over $150 USD for a 5-star hotel. Food is exceptionally cheap and delicious, with a hearty meal at a local restaurant costing just a few dollars. Transportation via ride-hailing apps is also inexpensive. Entrance fees for historical sites are higher for foreigners but still reasonable, typically ranging from $2-5 USD per site."
        },
        {
          question: "How many days do you need in Lahore?",
          answer: "To comfortably see the main highlights without rushing, 3 to 4 days is the ideal amount of time for a trip to Lahore. This allows you to dedicate a full day to the Walled City and its main sites (Fort, Badshahi Mosque), another day for attractions further out like Shalimar Gardens and the Wagah Border, and a third day for museums, shopping, and soaking in the local culture."
        },
        {
          question: "Is Lahore safe?",
          answer: "Lahore is generally considered safe for tourists, and Lahoris are known for their hospitality and friendliness towards visitors. However, like any large city, it's important to take common-sense precautions. Stick to well-trafficked areas, especially at night. Be mindful of your belongings in crowded bazaars. It is advisable for female travelers to dress modestly to respect local cultural norms. Using registered taxis or ride-hailing apps is recommended over hailing random transport on the street."
        },
        {
          question: "What is Lahore famous for?",
          answer: "Lahore is famous for several key things. It is known as the 'Cultural Capital of Pakistan' due to its rich history, vibrant arts scene, and numerous festivals. It's most famous for its incredible Mughal architecture, including the Badshahi Mosque, Lahore Fort, and Shalimar Gardens. Lastly, and perhaps most importantly for Pakistanis, Lahore is legendary for its food. The city's culinary scene is unparalleled, from street food delicacies to lavish traditional dishes."
        }
      ]}
    />
  );
};