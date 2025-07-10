import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Cairo: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Cairo, Egypt (2025 Guide)"}
      description={"Cairo, the sprawling capital of Egypt, is a city of magnificent chaos and timeless wonder. Known as 'The City of a Thousand Minarets,' it's a place where ancient history and modern life collide on the banks of the mighty Nile River. From the last surviving wonder of the ancient world to labyrinthine Islamic-era bazaars, Cairo pulses with an energy that is both overwhelming and utterly intoxicating. Navigating its vibrant streets reveals layers of Pharaonic, Coptic, and Islamic history, offering a journey unlike any other. Whether you're deciphering hieroglyphs, haggling for treasures in a bustling souk, or simply sipping sweet mint tea at a local café, exploring the best things to do in Cairo is an unforgettable adventure into the heart of Egypt. Get ready to be captivated by its rich culture, profound history, and the warm hospitality of its people."}
      highlights={["Pyramids of Giza and the Sphinx",
        "The Egyptian Museum",
        "Khan el-Khalili Bazaar",
        "The Citadel of Saladin",
        "Coptic Cairo (Old Cairo)"]}
      attractions={[
        {
        name: "Pyramids of Giza and the Sphinx",
        description: "No trip to Cairo is complete without visiting the Giza Plateau, home to the last remaining wonder of the ancient world. The Great Pyramid of Khufu, along with the pyramids of Khafre and Menkaure, has stood for over 4,500 years, a testament to the ingenuity and power of the Pharaonic civilization. Standing at their base is a humbling experience that connects you directly to the distant past. Nearby, the enigmatic Sphinx, a limestone statue with the body of a lion and the head of a human, guards the complex. You can explore the plateau on foot, by camel, or on horseback, but be sure to take a moment to absorb the sheer scale and historical significance of these monumental structures. For a truly magical experience, visit during the evening Sound and Light Show.",
        practicalInfo: {
        howToGetThere: "Located in Giza, about 18 km from downtown Cairo. Best reached via taxi or a ride-sharing app like Uber or Careem.",
        openingHours: "Daily, 8:00 AM - 5:00 PM (closes at 4:00 PM in winter).",
        cost: "General entry is approx. 540 EGP. Separate tickets required to enter the pyramids themselves (e.g., Great Pyramid approx. 900 EGP).",
        website: "https://egymonuments.gov.eg/archaeological-sites/giza-plateau/"
      }
      },
        {
        name: "The Egyptian Museum",
        description: "Located in the heart of Tahrir Square, the Egyptian Museum is a treasure trove of ancient artifacts. While many key pieces are moving to the new Grand Egyptian Museum, this historic building still holds an astonishing collection spanning thousands of years. Its halls are filled with statues, sarcophagi, papyri, and countless other relics. The absolute highlight is the world-renowned collection of Tutankhamun, including his iconic golden death mask. Even after the GEM opens, this beautiful, century-old museum will remain a vital institution, offering a classic and atmospheric journey through Egypt's Pharaonic past.",
        practicalInfo: {
        howToGetThere: "Located in Tahrir Square, Downtown Cairo. Accessible by Metro (Sadat station), taxi, or on foot from many downtown hotels.",
        openingHours: "Daily, 9:00 AM - 5:00 PM.",
        cost: "Approx. 450 EGP for general admission. Extra ticket for the Mummy Rooms.",
        website: "https://egymonuments.gov.eg/museums/the-egyptian-museum/"
      }
      },
        {
        name: "Khan el-Khalili Bazaar",
        description: "Step into a world of sensory overload at Khan el-Khalili, one of the oldest and most famous bazaars in the Middle East. Dating back to the 14th century, this labyrinthine market is a whirlwind of sights, sounds, and smells. Narrow alleyways are crammed with shops selling everything from intricate lanterns, spices, and perfumes to jewelry, papyrus, and alabaster statues. Haggling is part of the experience, so don't be shy. Even if you're not shopping, wandering through the souk is an adventure in itself. Be sure to stop at a traditional café like El Fishawy's, which has been operating for over 200 years, to enjoy a cup of sweet mint tea and watch the world go by.",
        practicalInfo: {
        howToGetThere: "Located in the heart of Islamic Cairo, near Al-Azhar Mosque. Best reached by taxi or Uber.",
        openingHours: "Most shops are open from around 10:00 AM until late evening. Many close on Fridays for prayers.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "The Citadel of Saladin",
        description: "Perched on a limestone hill overlooking the city, the Citadel of Saladin is a massive medieval Islamic-era fortification that offers some of the best panoramic views of Cairo. Built by the famous sultan Saladin in the 12th century to protect the city from Crusaders, it served as the seat of Egyptian rulers for nearly 700 years. The complex houses several important sites, most notably the magnificent Mosque of Muhammad Ali. Also known as the Alabaster Mosque for its extensive use of the stone, its Ottoman-style architecture and grand domes dominate the city skyline. Exploring the ramparts, museums, and mosques within the Citadel provides a fascinating glimpse into Cairo's military and political history.",
        practicalInfo: {
        howToGetThere: "Located on Mokattam Hill, southeast of central Cairo. A taxi or ride-sharing service is the most convenient way to get there.",
        openingHours: "Daily, 8:00 AM - 5:00 PM.",
        cost: "Approx. 450 EGP, which includes entry to the Mosque of Muhammad Ali and other sites within the Citadel.",
        website: "https://egymonuments.gov.eg/archaeological-sites/the-citadel-of-salah-al-din-al-ayyubi/"
      }
      },
        {
        name: "Coptic Cairo (Old Cairo)",
        description: "Coptic Cairo is a unique and tranquil enclave that feels a world away from the city's hustle. This area is the historical heart of Egypt's Christian community and contains some of the country's oldest churches. It is believed that the Holy Family stayed here during their flight into Egypt. Key sites include the Hanging Church (El Muallaqa), built atop the bastions of a Roman fortress, the Church of St. Sergius and Bacchus, where the Holy Family is said to have rested, and the Ben Ezra Synagogue, reportedly located where the baby Moses was found. Walking the quiet, cobblestoned streets of this ancient neighborhood offers a profound look into a different layer of Cairo's rich, multicultural identity.",
        practicalInfo: {
        howToGetThere: "Easily accessible via the Cairo Metro (Mar Girgis station), which stops directly in Coptic Cairo.",
        openingHours: "Most sites are open daily from 9:00 AM to 4:00 PM.",
        cost: "Free to enter most churches and the general area.",
        website: "N/A"
      }
      },
        {
        name: "The Grand Egyptian Museum (GEM)",
        description: "Poised to become the world's largest archaeological museum, the Grand Egyptian Museum (GEM) is a state-of-the-art institution located near the Giza Pyramids. While its grand opening has been long-awaited, parts of it are accessible on limited tours. Once fully open, it will house over 100,000 artifacts, including the entire Tutankhamun collection displayed together for the first time ever. The museum's centerpiece is a colossal statue of Ramses II in the grand hall. Its modern design and breathtaking scale promise an unparalleled visitor experience, making it a must-visit destination for any traveler interested in ancient Egypt. Even a limited tour offers a tantalizing preview of this world-class museum.",
        practicalInfo: {
        howToGetThere: "Located in Giza, near the pyramids. Best reached by taxi or a pre-booked tour.",
        openingHours: "Limited tours are available; check the official website for current access and timings.",
        cost: "Tour prices vary; check the official website for the latest information.",
        website: "https://grandegyptianmuseum.org/"
      }
      },
        {
        name: "Al-Azhar Mosque",
        description: "Founded in 970 AD, Al-Azhar Mosque is one of Cairo's oldest and most significant religious institutions. It is also home to the world's second-oldest continuously run university. The mosque's architecture is a stunning blend of styles from different dynasties, reflecting its long and storied history. Visitors can admire its beautiful minarets, serene white marble courtyard, and intricately decorated prayer hall. As a center of Sunni Islamic learning, it remains an active place of worship and study. Visitors are welcome outside of prayer times but must dress modestly (scarves are provided for women). The peaceful atmosphere provides a welcome respite from the chaos of the nearby Khan el-Khalili.",
        practicalInfo: {
        howToGetThere: "Located in Islamic Cairo, opposite the Khan el-Khalili bazaar. Easily reachable by taxi.",
        openingHours: "Daily, open to non-Muslim visitors outside of prayer times. Generally 9:00 AM - 11:00 AM and 1:00 PM - 3:00 PM.",
        cost: "Free admission.",
        website: "N/A"
      }
      },
        {
        name: "Museum of Islamic Art",
        description: "Housing one of the world's most impressive collections of Islamic artifacts, this museum is a must-see for anyone interested in art and history beyond the pharaohs. After extensive renovations, the museum reopened with beautifully curated displays showcasing over 1,000 years of Islamic civilization. The collection includes exquisite ceramics, textiles, metalwork, carved wood, and manuscripts from across the Islamic world. The exhibits are thoughtfully arranged and labeled in English, making it easy to appreciate the artistry and cultural significance of the pieces. It’s a quiet and educational escape that beautifully complements a visit to Islamic Cairo's mosques and monuments.",
        practicalInfo: {
        howToGetThere: "Located on the edge of Islamic Cairo at Bab Zuweila. A taxi is recommended.",
        openingHours: "Daily, 9:00 AM - 5:00 PM (closes at 3:00 PM on Fridays).",
        cost: "Approx. 200 EGP.",
        website: "https://www.miaegypt.org/"
      }
      },
        {
        name: "Nilometer on Rhoda Island",
        description: "A fascinating and often-overlooked historical site, the Nilometer on Rhoda Island was built in 861 AD to measure the annual flood levels of the Nile River. This measurement was crucial for ancient and medieval Egypt, as it determined the prosperity of the coming year's harvest and the level of taxation. The structure is an ornate, stone-lined pit with a central column marked with cubits. You can descend a staircase into the well to see the intricate Islamic architecture and markings up close. It's a small but incredibly well-preserved piece of history that offers a unique insight into the practicalities of life in medieval Cairo and the river that sustained it.",
        practicalInfo: {
        howToGetThere: "Located on the southern tip of Rhoda Island, near the Manial Palace. Accessible by taxi.",
        openingHours: "Daily, 9:00 AM - 5:00 PM.",
        cost: "Approx. 60 EGP.",
        website: "N/A"
      }
      },
        {
        name: "Ibn Tulun Mosque",
        description: "The Mosque of Ibn Tulun is one of the oldest and largest mosques in Cairo, remarkable for its state of preservation and serene beauty. Completed in 879 AD, it is a masterpiece of early Islamic architecture, built almost entirely of red brick. Its most unique feature is the spiral minaret, which you can climb for stunning views of the mosque's vast courtyard and the surrounding city. Unlike the more ornate mosques in Cairo, Ibn Tulun's beauty lies in its elegant simplicity and immense scale. The sense of peace and history here is palpable, and it's far less crowded than other major sites, allowing for a more contemplative experience.",
        practicalInfo: {
        howToGetThere: "Located a short distance south of the Citadel. Best reached by taxi.",
        openingHours: "Daily, 8:00 AM - 6:00 PM.",
        cost: "Free admission, though a small tip for the shoe covers or to the keeper who unlocks the minaret is appreciated.",
        website: "N/A"
      }
      },
        {
        name: "Felucca Ride on the Nile",
        description: "Escape the city's frantic pace with a relaxing ride on a felucca, a traditional wooden sailing boat. Sailing on the Nile, especially at sunset, is a classic Cairo experience. As the boat glides quietly on the water, you'll see the city's skyline from a completely different perspective. The horns and traffic fade away, replaced by the gentle lapping of waves and the breeze in the sails. It's a perfect way to unwind after a long day of sightseeing. You can hire a felucca for an hour or two from various docks, particularly in the Garden City and Zamalek areas. Bring some snacks and drinks, and enjoy one of the most peaceful and picturesque activities Cairo has to offer.",
        practicalInfo: {
        howToGetThere: "Docks are located along the Nile Corniche, particularly near the Four Seasons Hotel in Garden City.",
        openingHours: "Available all day, but sunset is the most popular time.",
        cost: "Negotiable. Expect to pay around 200-300 EGP per hour for the boat (not per person).",
        website: "N/A"
      }
      },
        {
        name: "Zamalek (Gezira Island)",
        description: "Zamalek, located on Gezira Island in the middle of the Nile, is Cairo's upscale, leafy, and cosmopolitan district. It's a hub for art galleries, chic boutiques, trendy restaurants, and cozy cafes, offering a more relaxed, Western-friendly atmosphere. The neighborhood is also home to many embassies, the Cairo Opera House, and the Cairo Tower, which provides spectacular 360-degree views of the entire city. Strolling through Zamalek's quieter, tree-lined streets is a pleasant contrast to the bustle of Downtown. It's the perfect place to spend an afternoon exploring contemporary Egyptian culture, browsing for unique souvenirs, or enjoying a sophisticated dinner.",
        practicalInfo: {
        howToGetThere: "Accessible by taxi or metro (Opera station). It's also very walkable within the district.",
        openingHours: "Shops and restaurants have varying hours; generally open until late.",
        cost: "Free to explore. The Cairo Tower has an entrance fee of around 600 EGP for foreigners.",
        website: "N/A"
      }
      },
        {
        name: "City of the Dead (Al-Qarafa)",
        description: "The City of the Dead is a vast necropolis that stretches for several miles, where generations of Cairenes have buried their dead. What makes it unique is that it's also a living neighborhood, with entire families residing among the ornate tombs and mausoleums of former pashas, sultans, and wealthy merchants. While it might sound macabre, a guided visit offers a fascinating, off-the-beaten-path look at a unique aspect of Cairo's urban fabric and social history. The area contains some stunning Mamluk-era architecture. It's strongly recommended to visit with a knowledgeable local guide who can navigate the area respectfully and provide historical context, ensuring a safe and insightful experience.",
        practicalInfo: {
        howToGetThere: "Located east of the Citadel. It is essential to go with a registered guide or an organized tour for safety and context.",
        openingHours: "Daylight hours are best for visits.",
        cost: "Cost of a guided tour, which varies.",
        website: "N/A (Book through reputable tour companies)."
      }
      },
        {
        name: "Bab Zuweila",
        description: "Bab Zuweila is one of the three remaining gates of the old Fatimid city walls, built in the 11th century. This massive gate is flanked by two impressive minarets, which belong to the nearby Mosque of al-Mu'ayyad. What makes Bab Zuweila a must-visit is that you can climb to the top. The ascent involves narrow, winding staircases but rewards you with one of the most incredible views in Cairo. From the roof, you can look out over the sprawling expanse of Islamic Cairo, with its countless domes and minarets stretching towards the Citadel. It's a breathtaking perspective that helps you appreciate the scale and density of this historic district.",
        practicalInfo: {
        howToGetThere: "Located at the southern end of Al-Muizz Street in Islamic Cairo.",
        openingHours: "Daily, 9:00 AM - 5:00 PM.",
        cost: "Approx. 60 EGP.",
        website: "N/A"
      }
      },
        {
        name: "Tahrir Square (Midan Tahrir)",
        description: "While not a traditional tourist attraction, Tahrir Square (Liberation Square) is the symbolic heart of modern Cairo and a place of immense historical importance. It was the epicenter of the 2011 Egyptian Revolution and has been a focal point for political expression for decades. The square is a vast, bustling roundabout surrounded by key landmarks, including the Egyptian Museum, the American University in Cairo building, and the Mogamma government building. While visiting, it's less about seeing specific sights and more about feeling the pulse of the city and reflecting on the recent events that have shaped modern Egypt. A walk through the square is a powerful reminder of the country's living history.",
        practicalInfo: {
        howToGetThere: "Central hub in Downtown Cairo. Accessible by Metro (Sadat station), which is directly underneath the square.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Navigating Cairo is an adventure. Ride-sharing apps like Uber and Careem are the most convenient and affordable options for tourists, offering fixed prices and avoiding haggling. The Cairo Metro is efficient, cheap, and a great way to travel long distances and avoid traffic, with dedicated carriages for women. Traditional black and white taxis are available but require negotiation. For short distances in less-congested areas, walking can be enjoyable.",
        whereToStay: "Zamalek: An upscale island district with boutique hotels, fine dining, and a relaxed vibe. Ideal for those seeking a quieter base. Downtown Cairo: Offers a mix of grand old hotels and budget-friendly options, putting you in the heart of the action near Tahrir Square. Garden City: A quieter, more residential area next to Downtown with luxury hotels and lovely Nile views. Giza: Perfect for those who want to wake up to views of the pyramids, though it is further from the city center.",
        bestTimeToVisit: "The best time to visit Cairo is from October to April when the weather is pleasantly mild and sunny, perfect for sightseeing. Spring (March-April) and autumn (October-November) offer the most comfortable temperatures. Summers (June-August) are extremely hot and dry, which can make exploring during the day challenging. Winter (December-February) is cooler, especially in the evenings, but still very pleasant.",
        suggestedItinerary: "Day 1: Ancient Wonders. Start at the Pyramids of Giza and the Sphinx in the morning. In the afternoon, immerse yourself in Pharaonic treasures at the Egyptian Museum (or the GEM, depending on accessibility). Day 2: Islamic & Coptic Cairo. Explore the Citadel of Saladin and the Mosque of Muhammad Ali. Then, wander through the historic churches of Coptic Cairo. End the day getting lost in the alleyways of the Khan el-Khalili bazaar. Day 3: Culture & Nile. Visit the Ibn Tulun Mosque, climb Bab Zuweila for incredible views, and then relax with a sunset felucca ride on the Nile. Enjoy a final dinner in the chic neighborhood of Zamalek."
      }}
      faqs={[{
          question: "Is Cairo expensive?",
          answer: "Compared to major Western cities, Cairo is very affordable for travelers. Accommodation, food, and transportation are relatively inexpensive. You can eat a delicious local meal like koshary for less than $2, and an Uber ride across town might cost only $3-5. Entrance fees to major tourist sites are the biggest expense, but are still reasonable. You can travel comfortably on a budget or indulge in luxury for far less than you would in Europe or North America."
        },
        {
          question: "How many days do you need in Cairo?",
          answer: "To see the main highlights without feeling rushed, 3 to 4 full days is ideal. This allows you to dedicate a day to the Giza Pyramids and the museums, another day to Islamic and Coptic Cairo, and a third day for markets, the Nile, and other sites. If you want to explore more deeply, take day trips (e.g., to Saqqara and Dahshur), or simply travel at a more relaxed pace, 5 to 7 days would be even better."
        },
        {
          question: "Is Cairo safe?",
          answer: "Cairo is generally safe for tourists, but like any massive city, it requires awareness. The primary concerns are petty crime (like pickpocketing in crowded areas) and scams. Keep your valuables secure and be firm but polite when declining unsolicited offers. Traffic is chaotic, so be extremely careful when crossing streets. Solo female travelers should dress modestly to avoid unwanted attention. By taking standard precautions, most visitors have a trouble-free and welcoming experience."
        },
        {
          question: "What is Cairo famous for?",
          answer: "Cairo is world-famous for being the gateway to Ancient Egypt's wonders, most notably the Pyramids of Giza and the Sphinx. It's also renowned for its rich Islamic heritage, earning it the nickname 'The City of a Thousand Minarets,' with stunning mosques and monuments. The city is famous for the vibrant Khan el-Khalili bazaar, the treasures of Tutankhamun in its museums, the lifeblood Nile River, and its unique, energetic, and often chaotic atmosphere that blends ancient history with bustling modern life."
        }
      ]}
    />
  );
};