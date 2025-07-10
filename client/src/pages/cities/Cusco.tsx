import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Cusco: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Cusco, Peru (2025 Guide)"
      description="Once the sacred capital of the formidable Inca Empire, Cusco is a city where history breathes from ancient stone walls and vibrant colonial plazas. Perched high in the Andes Mountains, this UNESCO World Heritage site is a captivating blend of indigenous culture and Spanish influence. Its cobblestone streets lead to architectural marvels, bustling markets, and world-class cuisine, all set against a backdrop of dramatic mountain scenery. Serving as the essential gateway to Machu Picchu and the Sacred Valley, Cusco is a destination in its own right, demanding time for acclimatization and exploration. Whether you're a history buff, an adventure seeker, or a cultural enthusiast, discovering the best things to do in Cusco promises an unforgettable journey into the heart of the Andean world. Prepare to be enchanted by its mystical atmosphere and the warmth of its people."
      highlights={[
      "Plaza de Armas",
      "Qorikancha (Temple of the Sun)",
      "Sacsayhuaman",
      "San Blas Neighborhood",
      "San Pedro Market"
]}
      attractions={[
      {
            "name": "Plaza de Armas",
            "description": "The Plaza de Armas is the vibrant, beating heart of Cusco. Once the 'Huacaypata' or 'Warrior's Square' of the Incas, it was the center of their empire. Today, it's a stunning example of Spanish colonial architecture, flanked by the magnificent Cusco Cathedral and the ornate Iglesia de la Compañía de Jesús. The plaza is a social hub for both locals and tourists, featuring manicured gardens, a central fountain, and wide stone arcades housing restaurants, shops, and travel agencies.\n\nIt's the perfect place to start your Cusco adventure, soaking in the atmosphere, acclimatizing to the altitude, and people-watching from a bench or a second-story balcony cafe. The plaza is constantly alive with activity, from parades and festivals to daily gatherings, making it a must-see at different times of the day and night.",
            "practicalInfo": {
                  "howToGetThere": "Located in the center of the historic district, easily accessible on foot from most central hotels.",
                  "openingHours": "Open 24/7. Surrounding churches and businesses have their own hours.",
                  "cost": "Free to visit the plaza. Entrance fees apply for the Cathedral and other attractions.",
                  "website": "https://www.peru.travel/en/attractions/main-square-of-cusco"
            }
      },
      {
            "name": "Qorikancha (Temple of the Sun)",
            "description": "Qorikancha, meaning 'Golden Courtyard' in Quechua, was the most important and sacred temple in the Inca Empire. Its walls were once famously covered in sheets of solid gold. When the Spanish conquistadors arrived, they demolished much of the temple and built the Church of Santo Domingo on its foundations, creating a striking and symbolic fusion of Inca and Spanish architecture.\n\nToday, you can witness the incredible precision of Inca stonework, with massive, polished stones that fit together perfectly without mortar, directly alongside and beneath the colonial-era church. It's a powerful and tangible representation of Cusco's complex history and the clash of two major civilizations.",
            "practicalInfo": {
                  "howToGetThere": "A 10-minute walk southeast from the Plaza de Armas, along Avenida El Sol.",
                  "openingHours": "Monday-Saturday: 8:30 AM - 5:30 PM; Sunday: 2:00 PM - 5:00 PM.",
                  "cost": "S/15 (approx. $4 USD) for general admission.",
                  "website": "https://www.tripadvisor.com/Attraction_Review-g294314-d311693-Reviews-Qorikancha-Cusco_Cusco_Region.html"
            }
      },
      {
            "name": "Sacsayhuaman",
            "description": "Looming over the city from a steep hill, Sacsayhuaman is a spectacular Inca fortress-citadel renowned for its massive, zigzagging stone walls. Some of the stones used in its construction are over 25 feet tall and weigh several hundred tons, yet they are fitted together with astonishing precision. The sheer scale and engineering genius of Sacsayhuaman leave visitors in awe, sparking wonder about how the Incas transported and placed these colossal boulders.\n\nThe site offers not only a deep dive into Inca military architecture but also breathtaking panoramic views of Cusco below. It's also the historical setting for the Inti Raymi, the Inca Festival of the Sun, which is reenacted here every June.",
            "practicalInfo": {
                  "howToGetThere": "A steep 45-minute walk uphill from the city center, or a short 10-minute taxi ride.",
                  "openingHours": "Daily, 7:00 AM - 6:00 PM.",
                  "cost": "Included in the 'Boleto Turístico del Cusco' (Tourist Ticket), which is required for entry. Partial ticket: S/70; Full ticket: S/130.",
                  "website": "https://cosituc.gob.pe/"
            }
      },
      {
            "name": "San Blas Neighborhood",
            "description": "Escape the main plaza's hustle and bustle by wandering into the charming, bohemian neighborhood of San Blas. Known as the 'Artisans' Quarter,' its steep, narrow cobblestone streets are lined with independent art studios, workshops, and quirky boutiques. This is the best place in Cusco to find high-quality, unique souvenirs, from intricate wood carvings to contemporary paintings and alpaca textiles.\n\nBeyond the shopping, San Blas is a delight to explore. Discover hidden courtyards, cozy cafes, and excellent restaurants with stunning views over the city's red-tiled roofs. The area has a tranquil, creative atmosphere that feels a world away from the tourist core, making it perfect for an afternoon of aimless, rewarding wandering.",
            "practicalInfo": {
                  "howToGetThere": "A 5-10 minute uphill walk northeast from the Plaza de Armas. Follow the narrow street Cuesta de San Blas.",
                  "openingHours": "The neighborhood is always accessible; shops and galleries typically open from 10:00 AM to 7:00 PM.",
                  "cost": "Free to explore.",
                  "website": "https://www.peru.travel/en/attractions/barrio-de-san-blas"
            }
      },
      {
            "name": "San Pedro Market",
            "description": "For a true slice of local life, a visit to the Mercado Central de San Pedro is essential. This bustling, chaotic, and utterly fascinating market is a sensory overload in the best way possible. Designed in part by Gustave Eiffel, the market is a sprawling hub where locals shop for everything from fresh produce, meats, and cheeses to shamanic herbs and textiles.\n\nBrave the juice aisle for a freshly blended fruit smoothie, sample local cheeses, or pull up a stool at one of the food stalls for a cheap and authentic lunch of 'caldo de gallina' (hen soup) or 'lomo saltado'. It's an authentic, vibrant experience that offers a glimpse into the daily culture and cuisine of the Andes.",
            "practicalInfo": {
                  "howToGetThere": "A 10-minute walk southwest of the Plaza de Armas, near the San Pedro train station.",
                  "openingHours": "Daily, approximately 6:00 AM - 6:00 PM.",
                  "cost": "Free to enter; prices for goods are very affordable.",
                  "website": "https://www.cusco.info/attractions/san-pedro-market/"
            }
      },
      {
            "name": "Cusco Cathedral",
            "description": "Dominating the Plaza de Armas, the Cusco Cathedral is a treasure trove of colonial art and religious history. Built over 100 years on the site of an Inca palace, this massive basilica combines Renaissance, Baroque, and Gothic architectural styles. Inside, it's famous for its opulent silver altar and its extensive collection of the 'Cusco School' of art.\n\nA must-see painting is Marcos Zapata’s unique rendition of 'The Last Supper,' which features Jesus and his disciples dining on a guinea pig ('cuy'), a traditional Andean delicacy. This piece is a perfect example of how local artists blended their indigenous culture with the Catholic imagery taught by the Spanish.",
            "practicalInfo": {
                  "howToGetThere": "Located directly on the Plaza de Armas.",
                  "openingHours": "Daily, 10:00 AM - 6:00 PM.",
                  "cost": "S/25 (approx. $7 USD), or included in the 'Boleto Religioso' (Religious Circuit Ticket).",
                  "website": "http://www.arzobispadodelcusco.org/catedral-del-cusco/"
            }
      },
      {
            "name": "Twelve-Angled Stone",
            "description": "A testament to the masterful stonemasonry of the Incas, the Twelve-Angled Stone is a humble yet incredible sight. Tucked away in a narrow alleyway just off the Plaza de Armas, this single diorite stone is part of a wall belonging to what was once the palace of Inca Roca. Its fame comes from its twelve perfectly cut angles that fit flawlessly with the surrounding stones without any mortar.\n\nWhile it's just one stone, it perfectly encapsulates the engineering prowess of the Inca civilization. You'll often find an actor dressed as an Inca posing for photos nearby. It's a quick but essential stop that highlights the foundational history upon which the colonial city was built.",
            "practicalInfo": {
                  "howToGetThere": "On Calle Hatunrumiyoc, a 3-minute walk from the Plaza de Armas.",
                  "openingHours": "Accessible 24/7 in a public alley.",
                  "cost": "Free.",
                  "website": "https://www.peru.travel/en/attractions/hatun-rumiyoc-street"
            }
      },
      {
            "name": "Museo Inka (Inca Museum)",
            "description": "To truly appreciate the history of the region before heading to Machu Picchu, a visit to the Museo Inka is invaluable. Housed in a magnificent colonial mansion, the museum holds a vast and impressive collection of Inca artifacts, including pottery, textiles, metalwork, and jewelry. It provides a comprehensive overview of Inca civilization, from its origins to its conquest by the Spanish.\n\nThe highlight for many is the room containing several well-preserved mummies, which offers a fascinating glimpse into Inca burial rituals and beliefs about the afterlife. The museum's collection gives context to the ruins you'll see throughout the Sacred Valley.",
            "practicalInfo": {
                  "howToGetThere": "One block northeast of the Plaza de Armas, near the cathedral.",
                  "openingHours": "Monday-Saturday: 9:00 AM - 5:00 PM.",
                  "cost": "S/10 (approx. $3 USD).",
                  "website": "https://museoinka.unsaac.edu.pe/"
            }
      },
      {
            "name": "Cristo Blanco",
            "description": "Watching over the city from a high vantage point, the Cristo Blanco is a large statue of Jesus Christ, similar to Rio de Janeiro's Christ the Redeemer. It was a gift from a group of Palestinian Christians who sought refuge in Cusco after World War II. The statue is strategically placed on a hill next to the Sacsayhuaman ruins.\n\nWhile the statue itself is impressive, the main reason to visit is for the spectacular panoramic views of Cusco and the surrounding Andes mountains. It's a fantastic photo opportunity, especially around sunset when the city lights begin to twinkle. You can see the entire valley, the Plaza de Armas, and the sprawling red roofs of the city.",
            "practicalInfo": {
                  "howToGetThere": "A 20-minute uphill walk from Sacsayhuaman, or a short taxi ride from the city center.",
                  "openingHours": "Accessible 24/7.",
                  "cost": "Free.",
                  "website": "https://www.tripadvisor.com/Attraction_Review-g294314-d554316-Reviews-Cristo_Blanco-Cusco_Cusco_Region.html"
            }
      },
      {
            "name": "Q'enqo",
            "description": "Just a short distance from Sacsayhuaman lies Q'enqo, one of the most mysterious and fascinating Inca sites around Cusco. The name means 'zigzag' or 'labyrinth' in Quechua, and the site is a large limestone rock outcrop covered in intricate carvings. It's believed to have been a holy place, or 'huaca,' used for religious ceremonies, sacrifices, and mummification rituals.\n\nThe site features a subterranean cave with a carved altar, a semi-circular amphitheater, and various channels carved into the rock, possibly for channeling sacrificial liquids like chicha (corn beer) or blood. Its purpose remains shrouded in mystery, making it a captivating stop for those interested in Inca cosmology.",
            "practicalInfo": {
                  "howToGetThere": "A 15-minute walk from Sacsayhuaman or included in many city tours.",
                  "openingHours": "Daily, 7:00 AM - 6:00 PM.",
                  "cost": "Included in the 'Boleto Turístico del Cusco'.",
                  "website": "https://cosituc.gob.pe/"
            }
      },
      {
            "name": "Puka Pukara & Tambomachay",
            "description": "Often visited together, Puka Pukara and Tambomachay are two smaller but significant Inca sites located just a few kilometers past Sacsayhuaman. Puka Pukara, or the 'Red Fortress,' likely served as a military checkpoint, administrative center, or a lodge for traveling Inca nobility. Its name comes from the reddish hue of its stones at sunset.\n\nJust across the road, Tambomachay is known as the 'Inca Baths.' It consists of a series of aqueducts, canals, and waterfalls running through terraced rocks, showcasing the Incas' mastery of hydraulics. It's believed to have been a site for ritual bathing and a temple dedicated to the worship of water. Together, they provide a fuller picture of the Inca infrastructure that surrounded the capital.",
            "practicalInfo": {
                  "howToGetThere": "Located about 8km from Cusco on the road to Pisac. Best reached by taxi, tour bus, or colectivo.",
                  "openingHours": "Daily, 7:00 AM - 6:00 PM.",
                  "cost": "Both sites are included in the 'Boleto Turístico del Cusco'.",
                  "website": "https://cosituc.gob.pe/"
            }
      },
      {
            "name": "Awanacancha",
            "description": "For a delightful and educational experience, stop at Awanacancha, a living museum and camelid center on the road to the Sacred Valley. Here, you can get up close and personal with the four main types of South American camelids: llamas, alpacas, vicuñas, and guanacos. You can feed the llamas and alpacas, and learn about the differences between them.\n\nThe center is also dedicated to preserving traditional weaving techniques. You can watch local artisans in traditional dress demonstrate the entire process, from shearing and dyeing wool with natural plants to spinning thread and weaving intricate textiles. It's a fantastic place to learn about Andean culture and buy high-quality, authentic alpaca and vicuña products.",
            "practicalInfo": {
                  "howToGetThere": "Located on the main road between Cusco and Pisac, about 23km from Cusco. Most Sacred Valley tours stop here.",
                  "openingHours": "Daily, 8:00 AM - 5:00 PM.",
                  "cost": "Free entry; donations are appreciated.",
                  "website": "https://www.awanacancha.com/"
            }
      },
      {
            "name": "ChocoMuseo (Chocolate Museum)",
            "description": "Indulge your sweet tooth and learn something new at the ChocoMuseo. This fun and interactive museum offers a fascinating journey through the history of cacao, from its origins in the Americas to its journey to becoming the chocolate we know today. You'll learn about Peru's role as a major producer of high-quality cacao beans.\n\nThe best part of the ChocoMuseo is its hands-on 'Bean to Bar' workshop. In this class, you'll roast and grind cacao beans and then create your own personalized chocolate bars with a variety of toppings. It's a delicious, fun, and family-friendly activity, and you get to take your creations home with you.",
            "practicalInfo": {
                  "howToGetThere": "There are multiple locations, with the main one located just off the Plaza de Armas on Calle Garcilaso.",
                  "openingHours": "Daily, 9:00 AM - 7:00 PM.",
                  "cost": "Free to enter the museum and sample chocolates. Workshops have a fee (approx. $25-35 USD).",
                  "website": "https://www.chocomuseo.com/cusco-peru/"
            }
      },
      {
            "name": "Planetarium Cusco",
            "description": "Discover the cosmos from the perspective of the Incas at the Planetarium Cusco. The ancient Incas were expert astronomers who used the stars for agriculture, architecture, and religion. This intimate and family-run planetarium offers a unique experience, combining Inca cosmology with modern scientific understanding of the night sky.\n\nThe tour includes an interpretation of the Inca sky in a cozy dome, followed by outdoor stargazing with professional telescopes (weather permitting). You'll learn to identify constellations, planets, and the famous 'dark constellations'—animal shapes formed by the dark patches of the Milky Way—that were so important to Inca culture. It's a magical and educational evening.",
            "practicalInfo": {
                  "howToGetThere": "Located near Sacsayhuaman. They offer a pickup service from the Plaza de Armas (Plaza Regocijo). Booking is essential.",
                  "openingHours": "Shows typically run in the evenings, e.g., 5:40 PM and 7:40 PM. Check website for current schedule.",
                  "cost": "S/50 (approx. $14 USD).",
                  "website": "http://www.planetariumcusco.com/"
            }
      },
      {
            "name": "Pisac Market & Ruins",
            "description": "While technically in the Sacred Valley, Pisac is an essential and easy day trip from Cusco. The town is famous for two things: its sprawling artisan market and its stunning Inca ruins perched on the mountain above. The market, busiest on Sundays, is a kaleidoscope of color where you can buy everything from textiles and ceramics to musical instruments and jewelry.\n\nAfter exploring the market, head up to the Pisac archaeological site. The ruins feature impressive agricultural terraces carved into the mountainside, military and religious structures, and one of the largest Inca cemeteries. The views of the valley from the top are absolutely breathtaking. A trip to Pisac offers a perfect combination of culture, shopping, and history.",
            "practicalInfo": {
                  "howToGetThere": "About a 1-hour drive from Cusco. Take a colectivo (shared van) from Calle Puputi in Cusco or hire a taxi.",
                  "openingHours": "Market is open daily but largest on Sunday. Ruins are open daily from 8:00 AM to 4:30 PM.",
                  "cost": "Market is free to browse. Entry to the ruins is included in the 'Boleto Turístico del Cusco'.",
                  "website": "https://www.peru.travel/en/attractions/archaeological-park-of-pisac"
            }
      }
]}
      logistics={{
      "gettingAround": "The historic center of Cusco is compact and best explored on foot, but be prepared for steep hills and take it easy due to the altitude. For longer distances, registered taxis are readily available and affordable; always agree on a price before getting in. 'Colectivos' (shared vans) are a cheap way to travel to nearby towns like Pisac and Ollantaytambo, offering a more local experience. For visiting multiple ruins, hiring a taxi for a few hours or joining a guided tour is the most convenient option.",
      "whereToStay": "The best area for first-time visitors is the Historic Center, around the Plaza de Armas, which puts you within walking distance of major sights, restaurants, and shops. Recommended hotels include the luxurious Palacio del Inka and the mid-range Costa del Sol Ramada. For a quieter, more bohemian vibe, the San Blas neighborhood offers charming boutique hotels like Antigua Casona San Blas. Budget travelers will find numerous excellent hostels in both areas, such as Loki Hostel or Wild Rover for a social scene.",
      "bestTimeToVisit": "The best time to visit Cusco is during the dry season, from April to October. During these months, you can expect clear blue skies, sunny days, and minimal rainfall, which is ideal for trekking and sightseeing. However, this is also peak tourist season, so expect larger crowds and higher prices. The wet season, from November to March, sees fewer crowds and greener landscapes, but be prepared for frequent rain showers, especially in January and February. The shoulder months of April, May, September, and October often provide the best balance of good weather and manageable crowds.",
      "suggestedItinerary": "Day 1: Arrive & Acclimatize. Check into your hotel, drink coca tea, and take it easy. In the afternoon, take a gentle walk to the Plaza de Armas, visit the Cusco Cathedral, and see the Twelve-Angled Stone. Enjoy dinner with a view of the plaza. Day 2: Inca History & Local Culture. Take a taxi up to Sacsayhuaman in the morning to explore the fortress and nearby Q'enqo. Head back down for an immersive lunch and shopping experience at the San Pedro Market. In the afternoon, visit the magnificent Qorikancha. Day 3: Art & Sacred Valley Glimpse. Spend the morning wandering the artisan neighborhood of San Blas. Alternatively, take a day trip to the nearby Sacred Valley to explore the famous market and spectacular ruins of Pisac."
}}
      faqs={[
      {
            "question": "Is Cusco expensive?",
            "answer": "Cusco can be very affordable or very luxurious, depending on your travel style. Compared to North America or Western Europe, it's generally inexpensive. Budget backpackers can manage on $30-40 USD per day by staying in hostels and eating at local markets. A mid-range trip might cost $70-150 USD per day for comfortable hotels, restaurant meals, and some tours. The most significant costs are typically flights to Cusco and organized multi-day treks or comprehensive tours to Machu Picchu. Entrance fees to archaeological sites, like the 'Boleto Turístico,' can add up but offer good value."
      },
      {
            "question": "How many days do you need in Cusco?",
            "answer": "It is highly recommended to spend at least 3 to 4 full days in Cusco itself before venturing to Machu Picchu or other regions. This allows your body crucial time to acclimatize to the high altitude (3,399m or 11,152 ft), which helps prevent altitude sickness. This timeframe gives you enough time to explore the main historical sites within the city, wander through the key neighborhoods like San Blas, and visit the major Inca ruins just outside the city, such as Sacsayhuaman."
      },
      {
            "question": "Is Cusco safe?",
            "answer": "Cusco is generally a safe city for tourists, but like any popular destination, it's important to take precautions. Petty crime, such as pickpocketing and bag snatching, can occur, especially in crowded areas like the San Pedro Market and the Plaza de Armas. Always be aware of your surroundings, keep your valuables secure, and avoid walking alone in quiet, unlit areas at night. Use registered taxis or ride-sharing apps. The biggest health concern is altitude sickness; be sure to acclimatize properly, stay hydrated, and avoid heavy meals and alcohol on your first day."
      },
      {
            "question": "What is Cusco famous for?",
            "answer": "Cusco is world-famous primarily as the historic capital of the Inca Empire and the gateway to Machu Picchu. It's renowned for its unique archaeological heritage, where perfectly engineered Inca stone foundations are seamlessly blended with Spanish colonial architecture. The city is also known for its vibrant indigenous culture, colorful festivals like Inti Raymi, bustling markets, and its location high in the Andes mountains, offering stunning scenery and countless opportunities for adventure travel and trekking."
      }
]}
    />
  );
};