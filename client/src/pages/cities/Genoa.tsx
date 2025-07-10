import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Genoa: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Genoa, Italy (2025 Guide)"}
      description={"Genoa, or Genova, the proud capital of Liguria, is a city of captivating contrasts. Known as 'La Superba' (The Superb One), its glorious maritime past echoes through Europe's largest medieval old town, a labyrinth of narrow alleyways called 'caruggi' that unexpectedly open onto grand piazzas. As the birthplace of Christopher Columbus and the heavenly pesto sauce, Genoa offers a gritty authenticity often missed in more polished Italian destinations. It’s a vertical city, clinging to the hillsides that tumble down to the sea, offering stunning views at every turn. From the revitalized Old Port to the opulent palaces of its golden age, exploring the hidden courtyards, historic shops, and vibrant food markets reveals the true soul of the city. This guide will walk you through the very best things to do in Genoa, ensuring a memorable journey into the heart of the Italian Riviera."}
      highlights={["Aquarium of Genoa (Acquario di Genova)",
        "Palazzi dei Rolli",
        "Genoa's Old Port (Porto Antico)",
        "Cattedrale di San Lorenzo",
        "Via Garibaldi"]}
      attractions={[
        {
        name: "Aquarium of Genoa (Acquario di Genova)",
        description: "Located in the heart of the Porto Antico, the Aquarium of Genoa is one of the largest and most impressive in Europe. Designed by renowned architect Renzo Piano, it houses an incredible diversity of marine life in vast, thoughtfully created tanks. Visitors can marvel at sharks, dolphins, manatees, penguins, and countless species of fish and invertebrates.\n\nThe journey through the aquarium is an immersive experience, simulating different aquatic environments from the Mediterranean to the Red Sea and the Indian Ocean. The dolphin pavilion and the touch tanks are particularly popular with families. It's not just an attraction but an important center for marine conservation and research, making it both an educational and awe-inspiring visit.",
        practicalInfo: {
        howToGetThere: "Located in Porto Antico. Easily accessible on foot from the city center or via the San Giorgio metro station.",
        openingHours: "Generally 10:00 AM - 8:00 PM, but hours vary by season. Check the website for current times.",
        cost: "Adults approx. €22-€29. Discounts for children and families available. Booking online is recommended.",
        website: "https://www.acquariodigenova.it/"
      }
      },
        {
        name: "Palazzi dei Rolli",
        description: "The Palazzi dei Rolli are a collection of magnificent aristocratic palaces designated as a UNESCO World Heritage site. During the height of the Republic of Genoa in the 16th and 17th centuries, these opulent residences were listed on official registers ('rolli') and were used to host visiting state dignitaries. The grandeur of these palaces was meant to showcase the wealth and power of Genoa.\n\nWhile many are now private residences or banks, several are open to the public as museums, such as Palazzo Rosso, Palazzo Bianco, and Palazzo Doria-Tursi, which together form the Strada Nuova Museums on Via Garibaldi. Visiting these palaces provides a stunning glimpse into the city's golden age, with lavish frescoes, gilded halls, and priceless art collections.",
        practicalInfo: {
        howToGetThere: "Primarily located on and around Via Garibaldi in the historic center.",
        openingHours: "Museums are typically open Tuesday-Sunday, 10:00 AM - 6:00 PM. Check individual palace hours.",
        cost: "Combined tickets for Strada Nuova Museums are approx. €9. Some palaces are only open on special 'Rolli Days'.",
        website: "https://www.visitgenoa.it/en/palazzi-dei-rolli"
      }
      },
        {
        name: "Genoa's Old Port (Porto Antico)",
        description: "Once the city's industrial heart, the Porto Antico was brilliantly redeveloped in 1992 by Genoese architect Renzo Piano. Today, it's a bustling waterfront hub for culture, entertainment, and leisure. It's the perfect place for a stroll, offering beautiful views of the marina, historic buildings, and the sea.\n\nBeyond the Aquarium, the area is home to the Galata Maritime Museum, the Bigo panoramic lift, the Biosfera glass bubble with a tropical ecosystem, and the Neptune Galleon. With numerous restaurants, cafes, an open-air swimming pool, and a cinema, the Porto Antico is a vibrant destination for both locals and tourists day and night.",
        practicalInfo: {
        howToGetThere: "A short walk from the main historic center. San Giorgio metro station is the closest stop.",
        openingHours: "The area is open 24/7. Individual attraction hours vary.",
        cost: "Free to walk around. Costs apply for specific attractions.",
        website: "https://www.portoantico.it/en/"
      }
      },
        {
        name: "Cattedrale di San Lorenzo",
        description: "Genoa's main cathedral is a breathtaking masterpiece of medieval architecture. Its distinctive facade, with alternating bands of black and white marble, is a hallmark of the Ligurian Gothic style. Construction began in the 11th century, and the cathedral was built and modified over several centuries, resulting in a fascinating mix of architectural styles.\n\nInside, you'll find impressive artwork and historic relics. Don't miss the Treasury Museum (Museo del Tesoro), which houses sacred artifacts, including the Sacro Catino, a glass vessel once believed to be the Holy Grail. For a small fee, you can also climb one of the bell towers for a fantastic view of the city's rooftops.",
        practicalInfo: {
        howToGetThere: "Centrally located in Piazza San Lorenzo, in the heart of the old town.",
        openingHours: "Cathedral: Daily, 8:00 AM - 12:00 PM & 3:00 PM - 7:00 PM. Museum has more limited hours.",
        cost: "Free to enter the cathedral. A fee applies for the Treasury Museum and tower climb (approx. €6-€8).",
        website: "https://www.museodiocesanogenova.it/"
      }
      },
        {
        name: "Via Garibaldi",
        description: "Known historically as the 'Strada Nuova' (New Street), Via Garibaldi is an architectural marvel and a highlight of the Rolli palace system. This elegant street, laid out in the 16th century, was designed specifically to house the city's most powerful families. The result is an extraordinary succession of Renaissance and Baroque palaces, each more magnificent than the last.\n\nToday, you can stroll down this pedestrianized street and admire the stunning facades. Three of the most important palaces—Palazzo Rosso, Palazzo Bianco, and Palazzo Doria-Tursi—are open as the Strada Nuova Museums, showcasing incredible art collections featuring works by Caravaggio, Veronese, and Rubens. It’s an open-air museum that perfectly encapsulates the wealth of 'La Superba'.",
        practicalInfo: {
        howToGetThere: "Located in the city center, a short walk from Piazza De Ferrari.",
        openingHours: "The street is always open. Museum hours are typically Tuesday-Sunday, 10:00 AM - 6:00 PM.",
        cost: "Free to walk the street. Museum tickets required for entry into palaces.",
        website: "https://www.museidigenova.it/en/strada-nuova-museums"
      }
      },
        {
        name: "Boccadasse",
        description: "Escape the bustling city center and discover the charming, pastel-hued fishing village of Boccadasse. Tucked into a small cove, this incredibly picturesque hamlet feels a world away from Genoa, with its colorful houses clustered around a pebble beach where fishing boats are still pulled ashore. It's often compared to the famous villages of the Cinque Terre but offers a more authentic, local atmosphere.\n\nIt's the perfect spot to enjoy a relaxing afternoon. Grab a gelato or a piece of focaccia, find a spot on the beach, and watch the world go by. In the evening, the area's small bars and trattorias come alive, offering fresh seafood with a stunning seaside view.",
        practicalInfo: {
        howToGetThere: "Take bus 31 from Brignole station or enjoy a long, scenic walk along the Corso Italia promenade.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.visitgenoa.it/en/boccadasse"
      }
      },
        {
        name: "Galata Museo del Mare",
        description: "As a city built on maritime power, Genoa's connection to the sea is best explored at the Galata Museo del Mare, the largest maritime museum in the Mediterranean. Spread over four floors, the museum offers an interactive and engaging journey through centuries of seafaring history, from the age of oars and sails to the era of steamships and transatlantic migration.\n\nThe exhibits are brilliantly curated, featuring life-sized reconstructions of galleys, interactive displays, and a collection of historic maps and globes. A major highlight is the exhibit dedicated to Italian emigration to the Americas. Your ticket also includes a tour of the S-518 Nazario Sauro submarine, moored just outside.",
        practicalInfo: {
        howToGetThere: "Located in the Porto Antico, next to the Aquarium.",
        openingHours: "Varies by season, but generally 10:00 AM - 7:00 PM. Check website.",
        cost: "Approx. €17 for the museum and submarine combined ticket.",
        website: "https://galatamuseodelmare.it/en/"
      }
      },
        {
        name: "Lanterna di Genova",
        description: "The Lanterna is the majestic lighthouse that has stood as the symbol of Genoa for centuries. At 77 meters tall, it is one of the tallest traditional lighthouses in the world and has been guiding sailors home since its last major reconstruction in 1543. Its powerful beam can be seen from over 50 kilometers away.\n\nWhile you can't climb to the very top, a visit allows you to walk along a 800-meter promenade built on the old city walls, leading to the lighthouse complex. Inside, a museum details the history of the city and its port. The first terrace of the tower is accessible, offering spectacular panoramic views of the port and the city.",
        practicalInfo: {
        howToGetThere: "Accessible via the 'Passeggiata della Lanterna' starting near the Ferry Terminal (Traghetti).",
        openingHours: "Typically weekends and holidays, afternoon hours only (e.g., 2:30 PM - 6:30 PM). Check for current schedule.",
        cost: "Approx. €6 for the museum and tower access.",
        website: "https://www.lanternadigenova.it/en/"
      }
      },
        {
        name: "Palazzo Ducale (Doge's Palace)",
        description: "The Palazzo Ducale was the historic seat of the Doges of Genoa and the center of political life in the Republic for centuries. Located right next to Piazza De Ferrari, this imposing building is now the city's foremost cultural hub, hosting major art exhibitions, conferences, and events. Its architecture is a fascinating blend of medieval foundations and Neoclassical facades.\n\nWhile the main attractions are the temporary exhibitions, visitors can explore the magnificent Great Council and Small Council Chambers, admire the historic apartments, and even visit the old prisons in the tower. The palace's courtyards are a popular meeting spot, with cafes and bookshops making it a lively center of city life.",
        practicalInfo: {
        howToGetThere: "Centrally located between Piazza De Ferrari and Piazza Matteotti.",
        openingHours: "Courtyards are generally open daily. Exhibition hours vary, typically 10:00 AM - 7:00 PM.",
        cost: "Free to enter the courtyards. Ticket prices vary depending on the exhibition.",
        website: "https://phttps://palazzoducale.genova.it/"
      }
      },
        {
        name: "Spianata Castelletto",
        description: "For one of the best panoramic views of Genoa, head up to the Spianata Castelletto. This peaceful balcony offers a breathtaking vista over the sprawling rooftops of the old town, the harbor, the Lanterna, and the sea beyond. It's a favorite spot for locals to relax, enjoy a coffee, and watch the sunset.\n\nThe journey up is part of the experience. You can take the beautiful Art Nouveau public elevator, the Ascensore di Castelletto, directly from Piazza Portello. As the famous Genoese poet Giorgio Caproni wrote, 'When I decide to go to paradise... I'll go there in the Castelletto elevator.' It's a truly magical spot that puts the city's unique geography into perspective.",
        practicalInfo: {
        howToGetThere: "Take the Ascensore di Castelletto from Piazza Portello, located off Via Garibaldi.",
        openingHours: "The viewpoint is always open. The elevator runs from early morning to late night.",
        cost: "Free to access the viewpoint. The elevator ride costs the same as a standard public transport ticket (approx. €1.50).",
        website: "N/A"
      }
      },
        {
        name: "Mercato Orientale",
        description: "Dive into the culinary heart of Genoa at the Mercato Orientale (Eastern Market). Housed in a former cloister, this historic covered market is a feast for the senses. It’s a bustling, authentic place where Genoese locals do their daily shopping. The stalls are piled high with the freshest local produce, from glistening seafood to an incredible array of vegetables, cheeses, cured meats, and freshly made pasta.\n\nThe market is the perfect place to discover Ligurian specialties. Look for stalls selling basil for pesto, local olive oil, and of course, focaccia. In recent years, a modern food court, 'MOG', has been added, where you can sample delicious street food and local dishes prepared on the spot.",
        practicalInfo: {
        howToGetThere: "Located on Via XX Settembre, the main shopping street, near Brignole station.",
        openingHours: "Monday-Saturday, approximately 7:30 AM - 7:30 PM. The MOG food court has later hours.",
        cost: "Free to enter.",
        website: "https://www.moggenova.it/"
      }
      },
        {
        name: "Piazza De Ferrari",
        description: "Piazza De Ferrari is Genoa's main square and the city's modern heart, where the historic center meets the 19th-century city. The square is dominated by a magnificent central bronze fountain and surrounded by a collection of monumental buildings, including the Palazzo Ducale, the Carlo Felice Opera House, and the Palace of the Ligurian Region.\n\nThis bustling piazza serves as a major transport hub and a popular meeting point. It's a place of grand scale and civic pride, often hosting events and celebrations. Its architecture provides a striking contrast to the narrow, medieval alleyways just a few steps away, showcasing the city's evolution through the centuries.",
        practicalInfo: {
        howToGetThere: "The most central square in Genoa, with its own metro stop (De Ferrari).",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Palazzo Reale (Royal Palace Museum)",
        description: "Another magnificent Rolli palace, the Palazzo Reale was once the residence of the Savoy dynasty when they ruled Genoa. Today, it's a national museum that preserves the look and feel of a royal residence, offering one of the most complete historical house-museum experiences in the city. Visitors can wander through a succession of sumptuously decorated rooms.\n\nHighlights include the dazzling Hall of Mirrors, modeled after the one at Versailles, the Throne Room, and the Ballroom. The palace also houses an important art collection, with works by Van Dyck and Tintoretto, all displayed within the original opulent context. The beautiful hanging garden offers a quiet respite with views over the port.",
        practicalInfo: {
        howToGetThere: "Located on Via Balbi, near the Principe train station.",
        openingHours: "Hours vary, generally open Wednesday-Saturday with some Sunday openings. Check the website for details.",
        cost: "Approx. €10.",
        website: "https://www.palazzorealegenova.beniculturali.it/"
      }
      },
        {
        name: "Cimitero Monumentale di Staglieno",
        description: "While a cemetery might seem like an unusual tourist attraction, the Cimitero di Staglieno is an extraordinary open-air museum of funerary art and sculpture from the 19th and 20th centuries. Spread over a vast, green hillside, its avenues are lined with elaborate tombs, chapels, and hauntingly beautiful sculptures commissioned by Genoa's wealthy bourgeois families.\n\nThe artistry on display is remarkable, with famous works like the 'Seller of Hazelnuts' and the Oneto family tomb. It’s a peaceful, melancholic, and deeply fascinating place to explore, offering a unique insight into the city's history and its relationship with art and memory. Even Ernest Hemingway called it 'one of the wonders of the world'.",
        practicalInfo: {
        howToGetThere: "Take bus 13, 14, or 48 from the city center.",
        openingHours: "Daily, 7:30 AM - 5:00 PM.",
        cost: "Free.",
        website: "https://www.staglieno.comune.genova.it/"
      }
      },
        {
        name: "Vascello Neptune",
        description: "Moored in the Porto Antico is a ship that looks like it sailed straight out of a pirate movie. The Vascello Neptune is a full-scale replica of a 17th-century Spanish galleon, built in 1986 for Roman Polanski's film 'Pirates'. Its impressive masts and intricate woodwork make it a striking sight against the modern backdrop of the marina.\n\nWhile primarily a photo opportunity from the outside, the galleon is often open for visitors to climb aboard and explore its decks. It's a particularly fun attraction for children and anyone with a love for the golden age of sail. Walking the creaking planks and standing at the helm offers a fun, imaginative glimpse into the life of a historic seafarer.",
        practicalInfo: {
        howToGetThere: "Located in the Porto Antico, near the Aquarium.",
        openingHours: "Opening hours are irregular and seasonal. Often open daily in summer.",
        cost: "Approx. €6 to board.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Genoa's historic center is best explored on foot, but be prepared for hills and narrow lanes. The city has an efficient public transport system (AMT) including buses, a single metro line connecting the main train stations and the port, and unique public elevators (ascensori) and funiculars that are essential for navigating the vertical city. A day pass or a carnet of tickets is cost-effective.",
        whereToStay: "For atmosphere, stay in the Centro Storico (Historic Center), but choose a well-lit area near a main square. For modern comforts and family-friendly options, the Porto Antico is ideal. The Castelletto neighborhood offers stunning views and a quieter, residential feel. Recommended hotels include Hotel Bristol Palace (luxury), Hotel Palazzo Grillo (mid-range), and Ostellin Genova (budget hostel).",
        bestTimeToVisit: "The best times to visit Genoa are during the spring (April-June) and fall (September-October). The weather is pleasant for walking, and the city is less crowded than in summer. July and August are hot, humid, and attract the most tourists. Winter is mild but can be rainy, though it's a great time for fewer crowds and lower prices.",
        suggestedItinerary: "Day 1: Explore the Centro Storico. Start at Piazza De Ferrari, visit the Cattedrale di San Lorenzo, and get lost in the 'caruggi'. In the afternoon, walk down Via Garibaldi and visit the Strada Nuova Museums. Day 2: Focus on the sea. Spend the morning at the Porto Antico, visiting the Aquarium and the Galata Maritime Museum. In the late afternoon, take the bus to the fishing village of Boccadasse for sunset. Day 3: Palaces and Panoramas. Visit the Palazzo Reale in the morning. Then, take the elevator to Spianata Castelletto for panoramic views. End the day with a visit to the Mercato Orientale for a taste of local life and food."
      }}
      faqs={[{
          question: "Is Genoa expensive?",
          answer: "Compared to other major Italian tourist hubs like Rome, Florence, and Venice, Genoa is quite affordable. Accommodation and dining offer better value for money. You can enjoy fantastic local food like focaccia and farinata for just a few euros. While major attractions have entrance fees, many experiences, like wandering the historic center or visiting Boccadasse, are free."
        },
        {
          question: "How many days do you need in Genoa?",
          answer: "Two to three full days are ideal to see the main highlights of Genoa without feeling rushed. This allows enough time to explore the vast historic center, visit key museums like the Aquarium and the Palazzi dei Rolli, and experience a neighborhood like Boccadasse. If you want to use Genoa as a base to explore the Ligurian Riviera (like Portofino or Cinque Terre), plan for four to five days."
        },
        {
          question: "Is Genoa safe?",
          answer: "Genoa is generally a safe city. However, like any large port city, it's wise to be cautious. The narrow alleyways ('caruggi') of the old town can be poorly lit and feel intimidating at night, so stick to main routes and populated squares after dark. Standard precautions against pickpocketing should be taken in crowded areas like train stations and the Porto Antico."
        },
        {
          question: "What is Genoa famous for?",
          answer: "Genoa is famous for its historical maritime republic, which rivaled Venice for centuries. It's the birthplace of Christopher Columbus and Niccolò Paganini. Culinarily, it's the undisputed home of pesto alla genovese and delicious focaccia. Architecturally, it's renowned for having Europe's largest intact medieval center and for its stunning Palazzi dei Rolli, a UNESCO World Heritage site."
        }
      ]}
    />
  );
};