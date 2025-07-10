import React from 'react';
import { CityPage } from '../../components/CityPage';

export const TheHague: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in The Hague, Netherlands (2025 Guide)"}
      description={"More than just the political heart of the Netherlands, The Hague exudes a unique blend of regal elegance and international gravitas. As the home of the Dutch Royal Family and the International Court of Justice, this city on the North Sea coast offers a sophisticated atmosphere distinct from its counterparts. Stroll along grand avenues, discover world-class art collections housed in former palaces, and explore the bustling seaside life at Scheveningen. This guide will walk you through historic government buildings, serene parks, and innovative museums, showcasing a city that is both stately and surprisingly relaxed. From its political significance to its beautiful coastline, you’ll find that the best things to do in The Hague offer a rich and diverse travel experience, cementing its status as a must-visit Dutch destination."}
      highlights={["Mauritshuis",
        "Binnenhof & Ridderzaal (Hall of Knights)",
        "Peace Palace (Vredespaleis)",
        "Scheveningen Beach & Pier",
        "Madurodam"]}
      attractions={[
        {
        name: "Mauritshuis",
        description: "Often called the 'Royal Picture Gallery', the Mauritshuis is an art lover's paradise set within a stunning 17th-century palace. This intimate museum boasts an extraordinary collection of Dutch Golden Age masterpieces. The undeniable star is Johannes Vermeer's 'Girl with a Pearl Earring', but you'll also stand in awe of Rembrandt's 'The Anatomy Lesson of Dr. Nicolaes Tulp' and Carel Fabritius' 'The Goldfinch'.\n\nThe compact size of the Mauritshuis allows for a deeply personal experience with some of the world's most famous paintings. The opulent, silk-walled rooms and grand staircases of the building itself are as much a part of the attraction as the art they contain, offering a glimpse into the lavish lifestyle of the Dutch elite during the era the paintings were created.",
        practicalInfo: {
        howToGetThere: "Located in the city center at Plein 29, next to the Binnenhof. Easily walkable from Den Haag Centraal station (10 minutes) or accessible via various trams.",
        openingHours: "Daily 10:00 AM - 6:00 PM (Mondays from 1:00 PM). Check website for holidays.",
        cost: "Adults approx. €19. Free with Museumkaart.",
        website: "https://www.mauritshuis.nl/en/"
      }
      },
        {
        name: "Binnenhof & Ridderzaal (Hall of Knights)",
        description: "The Binnenhof is the pulsating heart of Dutch politics and has served as the center of government for over 800 years, making it one of the oldest parliamentary complexes in the world. This stunning collection of buildings is set around a central courtyard on the tranquil Hofvijver pond. The architectural centerpiece is the Ridderzaal (Hall of Knights), a magnificent Gothic hall where the King delivers his annual speech to open the parliamentary year.\n\nWhile the Binnenhof is undergoing extensive renovation until at least 2028 and interior tours are suspended, the exterior remains a powerful and photogenic sight. You can walk through the historic courtyards, admire the architecture from the outside, and take the iconic photo from across the Hofvijver pond. It remains a fundamental stop for understanding the Netherlands' history and governance.",
        practicalInfo: {
        howToGetThere: "In the absolute center of The Hague, next to the Mauritshuis. Accessible by foot from anywhere in the city center.",
        openingHours: "Exterior accessible 24/7. Interior tours are currently suspended due to renovation.",
        cost: "Free to walk through the courtyards.",
        website: "https://www.denhaag.com/nl/binnenhof"
      }
      },
        {
        name: "Peace Palace (Vredespaleis)",
        description: "A true symbol of global diplomacy, the Peace Palace is an icon of The Hague's status as the International City of Peace and Justice. Funded by Andrew Carnegie and built in 1913, this magnificent neo-Renaissance building houses the International Court of Justice (the principal judicial body of the UN) and the Permanent Court of Arbitration. Its stunning facade, intricate stained glass, and gardens gifted by nations worldwide embody its mission of resolving international disputes.\n\nWhile access to the main building is limited to guided tours (which must be booked far in advance), the Visitors Centre offers an excellent free exhibition and film about the Palace's history and the institutions within. Don't miss the World Peace Flame, which burns eternally near the entrance.",
        practicalInfo: {
        howToGetThere: "Located at Carnegieplein 2. Take Tram 1 from the city center towards Scheveningen.",
        openingHours: "Visitors Centre: Tuesday-Sunday 11:00 AM - 5:00 PM. Guided tours are infrequent and must be pre-booked online.",
        cost: "Visitors Centre is free. Guided tours approx. €15.",
        website: "https://www.vredespaleis.nl/en/"
      }
      },
        {
        name: "Scheveningen Beach & Pier",
        description: "Just a short tram ride from the city center, Scheveningen offers a classic Dutch seaside experience. This long, wide sandy beach is The Hague's backyard playground, bustling with activity year-round. In the summer, it's packed with sunbathers, swimmers, and surfers, while the cooler months are perfect for windswept walks.\n\nThe iconic Pier is the area's focal point, featuring a Ferris wheel that provides spectacular views over the North Sea coast, a zipline for thrill-seekers, and various food and drink stalls. The beachfront promenade is lined with dozens of beach clubs (strandpaviljoens), restaurants, and bars, creating a lively atmosphere from morning till night.",
        practicalInfo: {
        howToGetThere: "Take Tram 1, 9, or 11 from the city center directly to the beach.",
        openingHours: "Beach is accessible 24/7. Pier and restaurant hours vary by season.",
        cost: "Free to access the beach and walk on the pier. Activities like the Ferris wheel and zipline have separate fees.",
        website: "https://denhaag.com/en/scheveningen"
      }
      },
        {
        name: "Madurodam",
        description: "Experience the whole of the Netherlands in just a few hours at Madurodam. This beloved miniature park showcases the country's most famous landmarks, historical cities, and ingenious inventions on a 1:25 scale. Wander past tiny Amsterdam canal houses, watch planes taxi at a miniature Schiphol Airport, see the Rotterdam port in action, and admire the Dutch Parliament buildings in perfect detail.\n\nMadurodam is more than just a static display; it's an interactive experience. You can operate the Oosterscheldekering storm surge barrier, bid on flowers at a flower auction, or load containers onto a cargo ship. It’s a delightful and educational attraction for all ages, offering a fun overview of what makes the Netherlands unique.",
        practicalInfo: {
        howToGetThere: "Located between the city center and Scheveningen. Take Tram 9 towards Scheveningen Noord or Bus 22.",
        openingHours: "Daily, generally 11:00 AM - 5:00 PM. Hours are extended in peak season, so check the website.",
        cost: "Approx. €22.50. Booking online is often cheaper.",
        website: "https://www.madurodam.nl/en"
      }
      },
        {
        name: "Kunstmuseum Den Haag",
        description: "Housed in a magnificent Art Deco building designed by H.P. Berlage, the Kunstmuseum is a must for lovers of modern and contemporary art. The museum is world-renowned for holding the largest collection of works by Dutch artist Piet Mondrian, allowing you to trace his journey from realistic landscapes to the iconic abstract compositions of red, yellow, and blue.\n\nBeyond Mondrian, the museum boasts an impressive collection of modern classics from artists like Picasso, Kandinsky, and Monet. It also has an extensive collection of Delftware and a fascinating fashion exhibit, making it one of the most diverse and engaging art institutions in the country. The building itself, with its natural light and spacious galleries, is a masterpiece of design.",
        practicalInfo: {
        howToGetThere: "Located near Scheveningen. Take Tram 16 or Bus 24.",
        openingHours: "Tuesday-Sunday 10:00 AM - 5:00 PM. Closed on Mondays.",
        cost: "Adults approx. €18. Free with Museumkaart.",
        website: "https://www.kunstmuseum.nl/en"
      }
      },
        {
        name: "Escher in Het Paleis",
        description: "Step into the mind-bending world of M.C. Escher at this dedicated museum, uniquely housed in the former winter palace of Queen Mother Emma. The royal ambiance of the Lange Voorhout Palace provides a striking contrast to the mathematical and optical illusions of Escher's work. The collection features almost all of his famous prints, including 'Day and Night', 'Climbing and Descending', and 'Waterfall'.\n\nThe museum showcases his progression from early realistic works to his iconic impossible constructions and tessellations. The top floor features an interactive exhibit called 'Looking as Escher does', where you can play with perspective and create your own Escher-esque photos. Don't forget to look up at the stunning custom-designed chandeliers by Hans van Bentem.",
        practicalInfo: {
        howToGetThere: "Located on the Lange Voorhout avenue in the city center. A short walk from the Binnenhof.",
        openingHours: "Tuesday-Sunday 11:00 AM - 5:00 PM. Closed on Mondays.",
        cost: "Adults approx. €12.50. Free with Museumkaart.",
        website: "https://www.escherinhetpaleis.nl/en/"
      }
      },
        {
        name: "Panorama Mesdag",
        description: "Panorama Mesdag offers one of the most unique and immersive art experiences in the world. It is a massive, 360-degree cylindrical painting, more than 14 meters high and 120 meters in circumference, depicting the seaside village of Scheveningen as it was in 1881. You view the artwork from a central observation gallery, which is cleverly designed to make you feel as though you are standing atop a sand dune looking out at the real scene.\n\nThe illusion is so convincing, with real sand in the foreground blending into the painted landscape, that it can be momentarily disorienting. Created by Hendrik Willem Mesdag, a prominent artist of the Hague School, this cultural-historical monument is the oldest 19th-century panorama in the world still in its original site.",
        practicalInfo: {
        howToGetThere: "Located at Zeestraat 65, a short walk from Noordeinde Palace.",
        openingHours: "Monday-Saturday 10:00 AM - 5:00 PM, Sunday 11:00 AM - 5:00 PM.",
        cost: "Adults approx. €15. Free with Museumkaart.",
        website: "https://www.panoramamesdag.nl/en/"
      }
      },
        {
        name: "Noordeinde Palace (Paleis Noordeinde)",
        description: "While you can't go inside, a visit to Paleis Noordeinde is essential for a taste of royal life in The Hague. This elegant palace, situated in the heart of the city's main shopping district, is the official working palace of King Willem-Alexander. When the Dutch flag is flying from the roof, it means the King is in the country and likely at work inside.\n\nThe palace's grounds are fronted by an equestrian statue of William of Orange. The real hidden gem is the Palace Garden (Paleistuin), a tranquil public park located directly behind the palace, perfect for a peaceful stroll away from the bustling shopping street.",
        practicalInfo: {
        howToGetThere: "Located on the Noordeinde shopping street in the city center. Easily walkable.",
        openingHours: "Exterior and Palace Garden are accessible 24/7. The palace itself is not open to the public.",
        cost: "Free.",
        website: "https://www.royal-house.nl/topics/palaces/noordeinde-palace"
      }
      },
        {
        name: "Lange Voorhout",
        description: "Often described as the most beautiful avenue in the Netherlands, the Lange Voorhout is a majestic, L-shaped promenade lined with stately linden trees, historic mansions, and embassies. It's a place for a sophisticated and leisurely stroll, offering a glimpse into The Hague's aristocratic past. The famous Hotel Des Indes, a landmark of luxury, sits proudly on the avenue.\n\nThroughout the year, the Lange Voorhout hosts various events, including a weekly antique and book market on Thursdays and Sundays (from May to September) and a magical Christmas market in December. It's home to the Escher in Het Paleis museum and the historic Kloosterkerk (Cloister Church).",
        practicalInfo: {
        howToGetThere: "In the city center, adjacent to the Binnenhof and Kneuterdijk Palace.",
        openingHours: "Accessible 24/7.",
        cost: "Free.",
        website: "https://denhaag.com/en/lange-voorhout"
      }
      },
        {
        name: "Prison Gate Museum (Gevangenpoort)",
        description: "For a chilling look into the darker side of Dutch history, visit the Prison Gate Museum. This well-preserved 15th-century gatehouse served as a prison for centuries, housing famous (and infamous) figures while they awaited trial at the adjacent Binnenhof. A guided tour takes you through the cramped cells, interrogation rooms, and grim collection of punishment and torture devices.\n\nThe stories of its prisoners, including the gruesome tale of the De Witt brothers, are brought to life by enthusiastic guides. It's a fascinating, if macabre, counterpoint to the city's image of peace and justice, providing a stark look at the history of crime and punishment in the Netherlands.",
        practicalInfo: {
        howToGetThere: "Located next to the Hofvijver pond and the Binnenhof at Buitenhof 33.",
        openingHours: "Tuesday-Sunday 11:00 AM - 5:00 PM. Access is often by guided tour only, so check times.",
        cost: "Adults approx. €12.50. Free with Museumkaart.",
        website: "https://www.gevangenpoort.nl/en"
      }
      },
        {
        name: "Louwman Museum",
        description: "Even if you're not a car enthusiast, the Louwman Museum is an astonishing attraction. It is home to the world's oldest private collection of automobiles, featuring over 275 antique and classic cars. The collection showcases the entire history of the automobile, from the earliest horseless carriages to modern Formula 1 cars.\n\nHighlights include an authentic James Bond Aston Martin DB5 from 'Goldfinger', Elvis Presley's custom Cadillac, and a swan-shaped car from 1910. The vehicles are presented as works of art in a purpose-built, magnificent museum building. It's a journey through innovation, design, and culture, told through the lens of the automobile.",
        practicalInfo: {
        howToGetThere: "Located on the outskirts of the city at Leidsestraatweg 57. Take Bus 90, 385 or 386 from Den Haag Centraal.",
        openingHours: "Tuesday-Sunday 10:00 AM - 5:00 PM.",
        cost: "Adults approx. €19.50.",
        website: "https://www.louwmanmuseum.nl/en/"
      }
      },
        {
        name: "Clingendael Park & Japanese Garden",
        description: "Clingendael is one of The Hague's most beautiful parks, offering a tranquil escape with rolling green lawns, picturesque water features, and historic country estates. It's a wonderful place for a walk or a picnic. The park's most famous feature, however, is its enchanting Japanese Garden.\n\nCreated in the early 20th century, the Japanese Garden is the oldest in the Netherlands and one of the largest in Europe. It features delicate mosses, beautiful lanterns, a traditional red bridge, and rare plants. Due to its fragility, the garden is only open for a few weeks each year in spring (late April to early June) and autumn (mid to late October), making a visit during these times a special treat.",
        practicalInfo: {
        howToGetThere: "Located between The Hague and Wassenaar. Take Bus 23 from the city center.",
        openingHours: "Park is open daily. Japanese Garden is open only for 8 weeks a year; check website for exact dates.",
        cost: "Free admission for both the park and the garden.",
        website: "https://denhaag.com/en/clingendael-estate"
      }
      },
        {
        name: "The Hague Market (De Haagse Markt)",
        description: "For a vibrant and truly local experience, spend a few hours at The Hague Market. As one of the largest multicultural outdoor markets in Europe, it’s a feast for the senses. Hundreds of stalls sell everything from fresh fruit, vegetables, fish, and flowers to clothing, electronics, and fabrics.\n\nThe market perfectly reflects the city's diverse population. You can find Dutch cheese right next to tropical fruits, traditional herring stands near stalls selling Middle Eastern spices and flatbreads. It's a fantastic place to people-watch, find bargains, and sample a wide variety of foods. Go with an empty stomach and an open mind.",
        practicalInfo: {
        howToGetThere: "Located at Herman Costerstraat. Take Tram 6, 11, or 12 to the 'Hoefkade' or 'Hobbemastraat' stop.",
        openingHours: "Monday, Wednesday, Friday, and Saturday, from 9:00 AM to 5:00 PM.",
        cost: "Free to enter.",
        website: "https://dehaagsemarkt.nl/"
      }
      },
        {
        name: "Hofjes van Den Haag (Courtyards of The Hague)",
        description: "Discover a hidden and peaceful side of The Hague by seeking out its 'hofjes' or almshouses. These charming inner courtyards, surrounded by small homes, were originally built by wealthy benefactors to house the poor, particularly elderly women. Today, they are tranquil oases hidden behind unassuming gates and doorways in the city center.\n\nWhile some are private, many are open to respectful visitors during the day. Notable examples include the Hofje van Nieuwkoop and the Hofje van Wouw. Finding them is part of the fun, offering a quiet escape from the city's hustle and bustle. Remember to be quiet and respect the privacy of the residents.",
        practicalInfo: {
        howToGetThere: "Scattered throughout the city center, particularly around the Lange Beestenmarkt and Prinsessegracht areas. Best discovered on foot.",
        openingHours: "Varies; many are open during daytime hours on weekdays but may close on weekends. Look for open gates.",
        cost: "Free.",
        website: "https://denhaag.com/en/hidden-courtyards"
      }
      }
      ]}
      logistics={{
        gettingAround: "The Hague has an excellent public transport system run by HTM, consisting of trams and buses that efficiently connect the city center, Scheveningen beach, and surrounding neighborhoods. A reloadable OV-chipkaart or contactless payment is the easiest way to pay. The city center is very walkable. For a true Dutch experience, rent a bike; the city is incredibly bike-friendly with dedicated paths everywhere.",
        whereToStay: "For first-time visitors, the City Centre (Centrum) is ideal, placing you within walking distance of the Binnenhof, museums, and shops. For a beach vacation vibe, stay in Scheveningen, with hotels overlooking the sea. The Zeeheldenkwartier and Archipelbuurt areas offer a more local, trendy atmosphere with boutique hotels and charming streets. Top hotels include Hotel Des Indes (Luxury), The Collector (Boutique), and the Carlton Beach Hotel (Scheveningen).",
        bestTimeToVisit: "The best time to visit The Hague is from late spring to early autumn (May to September). Summer (June-August) offers the warmest weather, perfect for enjoying Scheveningen beach, though it is the busiest season. Spring (April-May) is beautiful, with blooming flowers and the opening of the Japanese Garden in Clingendael. The nearby Keukenhof tulip gardens are also a popular day trip. Autumn offers fewer crowds and mild weather, while winter is quiet and cozy, ideal for museum hopping.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: Royal & Political Heart. Start at the Binnenhof and Hofvijver, visit the Mauritshuis, see Noordeinde Palace from the outside, and stroll through the Palace Gardens and along the Lange Voorhout.\nDay 2: Art & Illusion. Spend the morning at the Kunstmuseum Den Haag exploring Mondrian and modern art. In the afternoon, be amazed by Panorama Mesdag and the mind-bending works at Escher in Het Paleis.\nDay 3: Coast & Miniatures. Take a tram to Madurodam to see all of Holland in miniature. Then, continue to Scheveningen Beach for a walk on the pier, a ride on the Ferris wheel, and dinner at a beach club."
      }}
      faqs={[{
          question: "Is The Hague expensive?",
          answer: "The Hague is generally on par with other major Dutch cities like Amsterdam but can be slightly more affordable in terms of accommodation and dining. Expect to pay €120-€200 per night for a mid-range hotel. A meal at a casual restaurant can cost €15-€25, while museum tickets average around €15-€20. You can save money by using public transport, enjoying free attractions like parks and the beach, and grabbing food from markets like the Haagse Markt."
        },
        {
          question: "How many days do you need in The Hague?",
          answer: "Two to three days are ideal for a comprehensive visit to The Hague. This allows enough time to explore the main museums like the Mauritshuis and Kunstmuseum, see the political landmarks, and spend a half-day or evening at Scheveningen beach without feeling rushed. If you want to take day trips or explore more neighborhoods in-depth, extending your stay to four days would be comfortable."
        },
        {
          question: "Is The Hague safe?",
          answer: "Yes, The Hague is a very safe city. Like any large urban area, it's wise to take standard precautions. Be aware of your surroundings, especially in crowded tourist areas and on public transport, to guard against pickpocketing. The city is well-lit and safe to walk around at night, particularly in the central areas. Emergency services are responsive and reliable."
        },
        {
          question: "What is The Hague famous for?",
          answer: "The Hague is famous for several key things. Primarily, it is known as the International City of Peace and Justice, as it hosts the Peace Palace, the International Court of Justice, and over 200 other international organizations. Secondly, it is the political capital of the Netherlands, home to the Dutch government, parliament (Binnenhof), and the Royal Family's working palace. Lastly, it's famous for its unique combination of city life and coastal resort, with the popular Scheveningen beach just a short distance from the historic center."
        }
      ]}
    />
  );
};