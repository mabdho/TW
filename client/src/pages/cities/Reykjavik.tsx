import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Reykjavik: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Reykjavik, Iceland (2025 Guide)"
      description="Planning a trip to Reykjavik? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Hallgrímskirkja",
        "Blue Lagoon",
        "Harpa Concert Hall and Conference Centre",
        "The Sun Voyager (Sólfar)",
        "Chase the Northern Lights"
]}
      attractions={[
        {
                "name": "Hallgrímskirkja",
                "description": "Dominating the Reykjavik skyline, Hallgrímskirkja is an iconic Lutheran church and one of Iceland's most famous landmarks. Its striking expressionist architecture was designed by Guðjón Samúelsson to resemble the basalt lava flows found throughout the country. The church took over 40 years to build, and its minimalistic interior provides a serene contrast to its dramatic exterior.\nThe main highlight for visitors is the observation tower. An elevator ride to the top offers breathtaking 360-degree panoramic views of Reykjavik's colorful houses, the surrounding mountains, and the vast Atlantic Ocean. It's the best vantage point in the city and an essential first stop to get your bearings.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.hallgrimskirkja.is/en"
                }
        },
        {
                "name": "Blue Lagoon",
                "description": "While not technically in Reykjavik, the Blue Lagoon is an unmissable Icelandic experience easily reached from the city. This world-famous geothermal spa is renowned for its milky-blue, mineral-rich waters, which are a byproduct of the nearby Svartsengi geothermal power plant. The warm water, rich in silica and sulfur, is said to have healing properties for the skin.\nVisitors can float in the expansive lagoon, apply a silica mud mask, enjoy a drink from the in-water bar, or upgrade their experience with saunas, steam rooms, and in-water massages. The stark, black lava field surrounding the vibrant blue water creates a surreal and otherworldly atmosphere, making it a perfect place for relaxation and iconic photos.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.bluelagoon.com"
                }
        },
        {
                "name": "Harpa Concert Hall and Conference Centre",
                "description": "A dazzling jewel on Reykjavik's waterfront, Harpa is the city's premier concert hall and a masterpiece of modern architecture. Designed by Danish-Icelandic artist Ólafur Elíasson, its distinctive geometric glass facade is inspired by Iceland's basalt columns and shifting light. During the day, the panels reflect the city and the sky; at night, they come alive with a dynamic LED light show.\nEven if you don't attend a performance by the Icelandic Symphony Orchestra or the Icelandic Opera, Harpa is a must-visit. You can freely wander through its public spaces, admire the architectural details from the inside, and enjoy stunning views of the harbor and Mount Esja. There are also guided tours, a gift shop, and a restaurant on-site.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.harpa.is/en"
                }
        },
        {
                "name": "The Sun Voyager (Sólfar)",
                "description": "Set against the stunning backdrop of the sea and Mount Esja, the Sun Voyager (Sólfar in Icelandic) is a captivating steel sculpture by Jón Gunnar Árnason. Located on the Sæbraut waterfront road, it is often mistaken for a Viking longship, but it is much more than that. The artist described it as an ode to the sun, representing a dreamboat and a promise of undiscovered territory, hope, and freedom.\nThis elegant and evocative sculpture is one of Reykjavik's most photographed landmarks, especially at sunrise or sunset when the light catches the polished steel. It's a perfect spot for a contemplative stroll along the seaside path, offering a moment of peace and a connection to Iceland's spirit of exploration.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://visiticeland.com/article/the-sun-voyager"
                }
        },
        {
                "name": "Chase the Northern Lights",
                "description": "Witnessing the Aurora Borealis is a bucket-list experience for many visitors to Iceland, and Reykjavik is a great starting point for this celestial chase. The Northern Lights are a natural phenomenon caused by solar particles interacting with the Earth's atmosphere, creating dancing waves of green, pink, and purple light across the night sky.\nWhile you can sometimes spot them from darker parts of the city like Grótta Lighthouse, the best way to see them is to escape the city's light pollution. Numerous guided tours are available, from bus excursions to super jeep adventures and boat trips. These tours are led by experts who know the best viewing spots based on weather and aurora forecasts, maximizing your chances of a spectacular show.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://guidetoiceland.is/book-trips-holiday/nature-tours/northern-lights"
                }
        },
        {
                "name": "Perlan - Wonders of Iceland",
                "description": "Perlan, or 'The Pearl,' is a unique educational and entertainment venue housed in a landmark building on Öskjuhlíð hill. The building itself is notable for its giant glass dome built atop six massive hot water storage tanks. Inside, Perlan offers a state-of-the-art nature exhibition that brings Iceland's wonders to life.\nKey attractions include a real indoor ice cave (the only one of its kind in the world), a stunning 360° observation deck with panoramic views of the city and beyond, and an immersive planetarium show about the Northern Lights. It's a fantastic way to learn about Iceland's glaciers, volcanoes, and unique geology in an interactive and engaging way, making it perfect for all ages.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.perlan.is"
                }
        },
        {
                "name": "National Museum of Iceland",
                "description": "For a deep dive into the nation's history, the National Museum of Iceland is the place to go. The museum's permanent exhibition, 'Making of a Nation - Heritage and History in Iceland,' chronologically charts the country's story from the first Viking settlements to the present day. It showcases over 2,000 artifacts, including archaeological finds, medieval church artifacts, and items from modern Icelandic life.\nThe exhibits are well-curated and engaging, with interactive displays and detailed explanations in English. It provides essential context for understanding Icelandic culture, society, and the resilient spirit of its people. Don't miss the famous Valthjófsstadur door, a medieval church door intricately carved with scenes from a 12th-century knight's tale.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.thjodminjasafn.is/en"
                }
        },
        {
                "name": "Laugavegur Shopping Street",
                "description": "Laugavegur is the pulsating artery of Reykjavik's downtown area. It's the city's main commercial street, lined with a vibrant mix of high-end boutiques, souvenir shops, Icelandic design stores, and international brands. It's the perfect place to shop for a traditional Lopapeysa (Icelandic wool sweater) or unique souvenirs crafted by local artisans.\nBut Laugavegur is more than just a shopping destination; it's the heart of Reykjavik's social life. The street and its offshoots are packed with a diverse array of cafes, bars, and restaurants, making it a hub of activity from morning until late at night. A stroll down Laugavegur, taking in the colorful street art and lively atmosphere, is an essential Reykjavik experience.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://visitreykjavik.is/laugavegur"
                }
        },
        {
                "name": "The Settlement Exhibition",
                "description": "Built around an archaeological excavation, The Settlement Exhibition offers a fascinating glimpse into Reykjavik's earliest history. The centerpiece of the museum is the excavated ruin of a 10th-century Viking longhouse, one of the first known man-made structures in the area. The exhibition uses cutting-edge technology and multimedia displays to bring this ancient settlement to life.\nVisitors can explore interactive exhibits that explain who the first settlers were, how they lived, and what the environment was like over a thousand years ago. It’s a compelling and atmospheric museum that connects you directly with the Viking Age roots of the city. The museum is located partially underground, right in the heart of the city.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://reykjavikcitymuseum.is/the-settlement-exhibition"
                }
        },
        {
                "name": "FlyOver Iceland",
                "description": "FlyOver Iceland is an immersive flight simulation ride that takes you on a breathtaking journey across the country's most spectacular landscapes. Seated in a suspended chair with your feet dangling, you'll glide in front of a 20-meter spherical screen while the ride's movements are synchronized with the film. Special effects like wind, mist, and scents complete the sensory experience.\nThe ride showcases Iceland's iconic natural wonders, from soaring over glaciers and volcanoes to swooping through canyons and past cascading waterfalls. It's a thrilling and family-friendly attraction that allows you to see the entire country in a short amount of time, providing a unique perspective on its epic beauty.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.flyovericeland.com"
                }
        }
]}
    />
  );
};