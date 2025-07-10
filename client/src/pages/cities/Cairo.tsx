import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Cairo: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Cairo, Egypt (2025 Guide)"
      description="Planning a trip to Cairo? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Pyramids of Giza and the Sphinx",
        "The Egyptian Museum",
        "Khan el-Khalili Bazaar",
        "The Citadel of Saladin",
        "Coptic Cairo (Old Cairo)"
]}
      attractions={[
        {
                "name": "Pyramids of Giza and the Sphinx",
                "description": "No trip to Cairo is complete without visiting the Giza Plateau, home to the last remaining wonder of the ancient world. The Great Pyramid of Khufu, along with the pyramids of Khafre and Menkaure, has stood for over 4,500 years, a testament to the ingenuity and power of the Pharaonic civilization. Standing at their base is a humbling experience that connects you directly to the distant past. Nearby, the enigmatic Sphinx, a limestone statue with the body of a lion and the head of a human, guards the complex. You can explore the plateau on foot, by camel, or on horseback, but be sure to take a moment to absorb the sheer scale and historical significance of these monumental structures. For a truly magical experience, visit during the evening Sound and Light Show.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://egymonuments.gov.eg/archaeological-sites/giza-plateau/"
                }
        },
        {
                "name": "The Egyptian Museum",
                "description": "Located in the heart of Tahrir Square, the Egyptian Museum is a treasure trove of ancient artifacts. While many key pieces are moving to the new Grand Egyptian Museum, this historic building still holds an astonishing collection spanning thousands of years. Its halls are filled with statues, sarcophagi, papyri, and countless other relics. The absolute highlight is the world-renowned collection of Tutankhamun, including his iconic golden death mask. Even after the GEM opens, this beautiful, century-old museum will remain a vital institution, offering a classic and atmospheric journey through Egypt's Pharaonic past.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://egymonuments.gov.eg/museums/the-egyptian-museum/"
                }
        },
        {
                "name": "Khan el-Khalili Bazaar",
                "description": "Step into a world of sensory overload at Khan el-Khalili, one of the oldest and most famous bazaars in the Middle East. Dating back to the 14th century, this labyrinthine market is a whirlwind of sights, sounds, and smells. Narrow alleyways are crammed with shops selling everything from intricate lanterns, spices, and perfumes to jewelry, papyrus, and alabaster statues. Haggling is part of the experience, so don't be shy. Even if you're not shopping, wandering through the souk is an adventure in itself. Be sure to stop at a traditional café like El Fishawy's, which has been operating for over 200 years, to enjoy a cup of sweet mint tea and watch the world go by.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "The Citadel of Saladin",
                "description": "Perched on a limestone hill overlooking the city, the Citadel of Saladin is a massive medieval Islamic-era fortification that offers some of the best panoramic views of Cairo. Built by the famous sultan Saladin in the 12th century to protect the city from Crusaders, it served as the seat of Egyptian rulers for nearly 700 years. The complex houses several important sites, most notably the magnificent Mosque of Muhammad Ali. Also known as the Alabaster Mosque for its extensive use of the stone, its Ottoman-style architecture and grand domes dominate the city skyline. Exploring the ramparts, museums, and mosques within the Citadel provides a fascinating glimpse into Cairo's military and political history.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://egymonuments.gov.eg/archaeological-sites/the-citadel-of-salah-al-din-al-ayyubi/"
                }
        },
        {
                "name": "Coptic Cairo (Old Cairo)",
                "description": "Coptic Cairo is a unique and tranquil enclave that feels a world away from the city's hustle. This area is the historical heart of Egypt's Christian community and contains some of the country's oldest churches. It is believed that the Holy Family stayed here during their flight into Egypt. Key sites include the Hanging Church (El Muallaqa), built atop the bastions of a Roman fortress, the Church of St. Sergius and Bacchus, where the Holy Family is said to have rested, and the Ben Ezra Synagogue, reportedly located where the baby Moses was found. Walking the quiet, cobblestoned streets of this ancient neighborhood offers a profound look into a different layer of Cairo's rich, multicultural identity.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "The Grand Egyptian Museum (GEM)",
                "description": "Poised to become the world's largest archaeological museum, the Grand Egyptian Museum (GEM) is a state-of-the-art institution located near the Giza Pyramids. While its grand opening has been long-awaited, parts of it are accessible on limited tours. Once fully open, it will house over 100,000 artifacts, including the entire Tutankhamun collection displayed together for the first time ever. The museum's centerpiece is a colossal statue of Ramses II in the grand hall. Its modern design and breathtaking scale promise an unparalleled visitor experience, making it a must-visit destination for any traveler interested in ancient Egypt. Even a limited tour offers a tantalizing preview of this world-class museum.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://grandegyptianmuseum.org/"
                }
        },
        {
                "name": "Al-Azhar Mosque",
                "description": "Founded in 970 AD, Al-Azhar Mosque is one of Cairo's oldest and most significant religious institutions. It is also home to the world's second-oldest continuously run university. The mosque's architecture is a stunning blend of styles from different dynasties, reflecting its long and storied history. Visitors can admire its beautiful minarets, serene white marble courtyard, and intricately decorated prayer hall. As a center of Sunni Islamic learning, it remains an active place of worship and study. Visitors are welcome outside of prayer times but must dress modestly (scarves are provided for women). The peaceful atmosphere provides a welcome respite from the chaos of the nearby Khan el-Khalili.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Museum of Islamic Art",
                "description": "Housing one of the world's most impressive collections of Islamic artifacts, this museum is a must-see for anyone interested in art and history beyond the pharaohs. After extensive renovations, the museum reopened with beautifully curated displays showcasing over 1,000 years of Islamic civilization. The collection includes exquisite ceramics, textiles, metalwork, carved wood, and manuscripts from across the Islamic world. The exhibits are thoughtfully arranged and labeled in English, making it easy to appreciate the artistry and cultural significance of the pieces. It’s a quiet and educational escape that beautifully complements a visit to Islamic Cairo's mosques and monuments.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.miaegypt.org/"
                }
        },
        {
                "name": "Nilometer on Rhoda Island",
                "description": "A fascinating and often-overlooked historical site, the Nilometer on Rhoda Island was built in 861 AD to measure the annual flood levels of the Nile River. This measurement was crucial for ancient and medieval Egypt, as it determined the prosperity of the coming year's harvest and the level of taxation. The structure is an ornate, stone-lined pit with a central column marked with cubits. You can descend a staircase into the well to see the intricate Islamic architecture and markings up close. It's a small but incredibly well-preserved piece of history that offers a unique insight into the practicalities of life in medieval Cairo and the river that sustained it.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Ibn Tulun Mosque",
                "description": "The Mosque of Ibn Tulun is one of the oldest and largest mosques in Cairo, remarkable for its state of preservation and serene beauty. Completed in 879 AD, it is a masterpiece of early Islamic architecture, built almost entirely of red brick. Its most unique feature is the spiral minaret, which you can climb for stunning views of the mosque's vast courtyard and the surrounding city. Unlike the more ornate mosques in Cairo, Ibn Tulun's beauty lies in its elegant simplicity and immense scale. The sense of peace and history here is palpable, and it's far less crowded than other major sites, allowing for a more contemplative experience.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        }
]}
    />
  );
};