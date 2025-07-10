import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Antwerp: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Antwerp, Belgium (2025 Guide)"
      description="Antwerp caught me completely off guard. I mean, I knew it was supposed to be important—something about diamonds and old paintings—but I wasn't prepared for how much character this place has.

First off, the train station. Seriously. I've never had strong feelings about train stations before, but this one is basically a cathedral made for trains. It's ridiculous in the best possible way. Then you step outside and realize the whole city is like this: outrageously beautiful buildings that shouldn't still exist but somehow do.

The thing about Antwerp is that it's managed to keep one foot firmly planted in its golden age while somehow becoming this incredibly hip, modern city. You'll find yourself admiring a 500-year-old cathedral in the morning and browsing cutting-edge fashion boutiques in the afternoon. The Belgians, it turns out, are quite good at this balancing act. Plus, the beer is excellent and the chocolate is... well, it's Belgian chocolate. Some clichés exist for good reasons."
      highlights={[
      "Antwerp Central Station (Antwerpen-Centraal)",
      "Cathedral of Our Lady",
      "Grote Markt (Market Square)",
      "Rubenshuis (Rubens' House)",
      "MAS | Museum aan de Stroom"
]}
      attractions={[
      {
            "name": "Antwerp Central Station (Antwerpen-Centraal)",
            "description": "Often called the 'Railway Cathedral,' Antwerp's Central Station is widely regarded as one of the most beautiful train stations in the world. Completed in 1905, its eclectic design features a colossal steel and glass train shed and a lavish neo-Baroque entrance hall with a grand dome. Even if you're not catching a train, stepping inside is a must.\n\nThe sheer scale and opulent detail—from the marble floors to the intricate ironwork—make it a destination in itself. It's a living monument that perfectly encapsulates Antwerp's historical wealth and grandeur, serving as a magnificent gateway to the city.",
            "practicalInfo": {
                  "howToGetThere": "Located at Koningin Astridplein in the city center, accessible by train, tram, and bus.",
                  "openingHours": "The main hall is accessible 24/7; shops and services have their own hours.",
                  "cost": "Free to enter and admire.",
                  "website": "www.belgiantrain.be"
            }
      },
      {
            "name": "Grote Markt (Market Square)",
            "description": "The Grote Markt is the historic heart of Antwerp, a stunning square surrounded by ornate 16th-century guildhalls, the impressive Renaissance-style City Hall (Stadhuis), and countless cafés. The architecture is a testament to the city's Golden Age, with gilded statues and detailed facades competing for your attention.\n\nAt the center stands the Brabo Fountain, depicting the local legend of the Roman soldier Silvius Brabo vanquishing a giant. It’s the perfect place to soak up the atmosphere, enjoy a Belgian beer on a terrace, and admire the timeless beauty of the city's old town.",
            "practicalInfo": {
                  "howToGetThere": "A short walk from the Scheldt river and the Cathedral in the historic city center.",
                  "openingHours": "Accessible 24/7.",
                  "cost": "Free.",
                  "website": "www.visit.antwerpen.be"
            }
      },
      {
            "name": "Cathedral of Our Lady (Onze-Lieve-Vrouwekathedraal)",
            "description": "Dominating the Antwerp skyline, the Cathedral of Our Lady is a masterpiece of Gothic architecture and the largest of its kind in the Low Countries. Its construction spanned nearly 170 years, resulting in a soaring structure with an iconic, lace-like spire. Inside, the bright, white-washed interior provides a serene backdrop for an unparalleled art collection.\n\nThe cathedral is home to four magnificent altarpieces by Peter Paul Rubens, including 'The Raising of the Cross' and 'The Descent from the Cross.' These dramatic, large-scale works are incredibly powerful and make a visit here an essential artistic and spiritual experience.",
            "practicalInfo": {
                  "howToGetThere": "Located between the Grote Markt and the Groenplaats.",
                  "openingHours": "Mon-Fri: 10:00-17:00, Sat: 10:00-15:00, Sun: 13:00-17:00. Hours can vary.",
                  "cost": "€12 for adults.",
                  "website": "www.dekathedraal.be"
            }
      },
      {
            "name": "Rubenshuis (Rubens' House)",
            "description": "Step into the world of Antwerp's most famous resident at the Rubenshuis. This beautifully restored mansion was the home, studio, and private gallery of the Baroque painter Peter Paul Rubens. He designed the Italianate portico and garden himself, creating a palatial residence that reflected his status as one of Europe's most celebrated artists.\n\nThe museum offers an intimate look at his life and work, displaying paintings by Rubens, his contemporaries, and his pupils (including Anthony van Dyck). You can walk through his grand studio where many masterpieces were created, providing a unique connection to the artist and his time.",
            "practicalInfo": {
                  "howToGetThere": "Located on the Wapper, a side street off the main Meir shopping street.",
                  "openingHours": "Tue-Sun: 10:00-17:00. Closed on Mondays.",
                  "cost": "€12 for adults. Note: The museum is closed for major renovation until 2027, but the garden and Rubenianum remain accessible.",
                  "website": "www.rubenshuis.be"
            }
      },
      {
            "name": "MAS | Museum aan de Stroom",
            "description": "The MAS is a modern architectural icon located in the trendy Eilandje district. Its unique design, resembling a stack of red-stone containers, pays homage to Antwerp's port history. The museum tells the story of Antwerp's connection to the world through its river and port, with diverse collections spread across its ten floors.\n\nEven if you skip the exhibits, the building itself is worth the visit. Take the escalators up through the 'boulevard' for free, enjoying changing views of the city through undulating glass panels. The journey culminates in a 360-degree panoramic rooftop terrace offering the best views of Antwerp and its sprawling port.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Het Eilandje district, a pleasant walk or short bus ride from the city center.",
                  "openingHours": "Tue-Sun: 10:00-17:00 (Museum). Rooftop open until 22:00 or later.",
                  "cost": "€12 for the museum. The panorama rooftop is free.",
                  "website": "www.mas.be"
            }
      },
      {
            "name": "Plantin-Moretus Museum",
            "description": "A true hidden gem, the Plantin-Moretus Museum is the world's only museum to be named a UNESCO World Heritage site. It preserves the home and printing workshop of the influential 16th-century printers Christoffel Plantin and Jan Moretus. The beautifully preserved building transports you back in time.\n\nYou can explore the original print shop, which houses the two oldest surviving printing presses in the world, along with thousands of lead letters. The museum also holds priceless manuscripts, early printed books, and a library that feels straight out of a fantasy novel. It's a fascinating insight into the spread of knowledge during the Renaissance.",
            "practicalInfo": {
                  "howToGetThere": "Located on the Vrijdagmarkt, a short walk from the Grote Markt.",
                  "openingHours": "Tue-Sun: 10:00-17:00. Closed on Mondays.",
                  "cost": "€12 for adults.",
                  "website": "www.museumplantinmoretus.be"
            }
      },
      {
            "name": "Het Steen Castle",
            "description": "Perched on the banks of the Scheldt river, Het Steen is Antwerp's oldest building. This small but mighty medieval fortress has served many purposes over its 800-year history, from a stronghold to a prison and now a modern visitor center. A recent renovation has given it a striking contemporary extension and made it a welcoming hub for tourists.\n\nInside, you can discover 'The Antwerp Story,' an interactive exhibit that provides a perfect introduction to the city's history and neighborhoods. Climb to the rooftop terrace for lovely views over the river and the city skyline. It's a great first stop to orient yourself.",
            "practicalInfo": {
                  "howToGetThere": "On the riverbank, a 5-minute walk from the Grote Markt.",
                  "openingHours": "Daily 10:00-18:00 (Visitor Center).",
                  "cost": "Free to enter the ground floor. 'The Antwerp Story' exhibit has an admission fee.",
                  "website": "www.hetsteen.be"
            }
      },
      {
            "name": "The Diamond District (Diamantkwartier)",
            "description": "Adjacent to the Central Station lies the world's most important diamond trading hub. For centuries, Antwerp has been at the heart of the global diamond industry, and a walk through this high-security district is a unique experience. The area is a bustling hub of traders, cutters, and polishers, with countless jewelry shops displaying dazzling creations in their windows.\n\nWhile much of the real business happens behind closed doors, the atmosphere is palpable. For a deeper dive, visit the nearby DIVA Museum (Museum for Diamonds, Jewellery and Silver), which explores the craft and history of these precious stones and metals in a more structured setting.",
            "practicalInfo": {
                  "howToGetThere": "Directly west of Antwerp Central Station.",
                  "openingHours": "Shops generally open during business hours, Mon-Fri. The area is quiet during the Jewish Sabbath (Saturday).",
                  "cost": "Free to walk around.",
                  "website": "www.divaantwerp.be"
            }
      },
      {
            "name": "Zurenborg Neighbourhood",
            "description": "Escape the medieval center and take a tram to Zurenborg for an architectural feast. This late 19th-century neighborhood is renowned for its stunning concentration of Art Nouveau, Fin-de-siècle, and Neo-Gothic townhouses. The most famous street, Cogels-Osylei, is an open-air museum of whimsical and wildly imaginative architecture.\n\nLook for intricate ironwork, mosaic-adorned facades, and fantastical turrets. Each house seems to be competing with its neighbor in originality and grandeur. After strolling through the streets, relax at one of the charming squares like the Draakplaats or Dageraadplaats, which are full of local cafés and restaurants.",
            "practicalInfo": {
                  "howToGetThere": "Take Tram 4 or 11 to the Zurenborg stop from the city center.",
                  "openingHours": "Accessible 24/7.",
                  "cost": "Free to explore.",
                  "website": "www.visit.antwerpen.be"
            }
      },
      {
            "name": "MoMu - Fashion Museum Antwerp",
            "description": "Antwerp secured its place on the global fashion map thanks to the 'Antwerp Six,' a group of radical designers who graduated in the 1980s. The MoMu celebrates this legacy and the city's ongoing influence in the fashion world. After a major renovation, the museum now boasts a permanent collection alongside its renowned temporary exhibitions.\n\nThe exhibits are thoughtfully curated, showcasing avant-garde designs, historical fashion, and the creative processes behind the garments. It's a must-visit for anyone interested in design, creativity, and contemporary culture, located fittingly in the heart of Antwerp's fashion district.",
            "practicalInfo": {
                  "howToGetThere": "Located in the ModeNatie building on Nationalestraat in the fashion district.",
                  "openingHours": "Tue-Sun: 10:00-18:00. Closed on Mondays.",
                  "cost": "€12 for adults.",
                  "website": "www.momu.be"
            }
      },
      {
            "name": "St. Paul's Church (Sint-Pauluskerk)",
            "description": "St. Paul's Church offers a dramatic story and a treasure trove of art. Originally a Dominican monastery church, it blends a late Gothic exterior with a lavish Baroque interior. A devastating fire in 1968 nearly destroyed it, but heroic neighbors saved most of its priceless artworks, which include masterpieces by Jordaens, Van Dyck, and a stunning series of paintings by various Antwerp masters.\n\nWhat makes St. Paul's truly unique is its outdoor Calvary sculpture garden. This grotto-like monument features over 60 life-sized statues depicting the Passion and Resurrection of Christ in a theatrical, folk-art style. It's an unexpected and deeply moving corner of the city.",
            "practicalInfo": {
                  "howToGetThere": "In the Schipperskwartier (Seaman's Quarter), near the MAS museum.",
                  "openingHours": "Daily 14:00-17:00 (April-October). Limited hours otherwise.",
                  "cost": "Donation suggested (€5).",
                  "website": "www.sintpaulusantwerpen.be"
            }
      },
      {
            "name": "Red Star Line Museum",
            "description": "Housed in the historic warehouses of the former shipping company, the Red Star Line Museum tells the poignant and powerful stories of the two million emigrants who sailed from Antwerp to North America in search of a new life. This is not a museum about ships, but about people—their dreams, their hardships, and their journeys.\n\nThe interactive exhibits follow the footsteps of the passengers, from their arrival in Antwerp to medical checks and their eventual boarding. Personal testimonies, photographs, and artifacts create a deeply human and relatable experience. A viewing tower, designed to look like a ship's smokestack, offers another fantastic view of the Scheldt and the port.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Het Eilandje district, a short walk from the MAS.",
                  "openingHours": "Tue-Sun: 10:00-17:00. Closed on Mondays.",
                  "cost": "€12 for adults.",
                  "website": "www.redstarline.be"
            }
      },
      {
            "name": "De Koninck Antwerp City Brewery",
            "description": "No trip to Belgium is complete without sampling its beer, and in Antwerp, the place to do it is the De Koninck City Brewery. Home of the famous 'Bolleke,' this historic brewery has been updated with a fantastic, interactive tour that takes you through the brewing process in a fun and engaging way.\n\nYou'll learn about the ingredients, the history of the brewery, and Antwerp's beer culture through a series of themed rooms and multimedia displays. The tour concludes, of course, with a tasting of their delicious beer. It's an excellent way to spend an afternoon and get a taste of local life.",
            "practicalInfo": {
                  "howToGetThere": "Located slightly south of the city center, easily reached by bus or tram.",
                  "openingHours": "Tue-Sun: 10:00-18:00 (last entry at 16:30).",
                  "cost": "€16 for the tour and tasting.",
                  "website": "www.dekoninck.be"
            }
      },
      {
            "name": "Middelheim Museum",
            "description": "For a breath of fresh air and a dose of culture, head to the Middelheim Museum, one of the world's most renowned open-air sculpture parks. Set within the beautiful greenery of Nachtegalen Park, the museum features a permanent collection of over 200 sculptures, ranging from modern masters like Rodin and Henry Moore to contemporary artists.\n\nThe joy of Middelheim is wandering through the park and discovering art in a natural setting. The collection is constantly evolving, with new acquisitions and temporary exhibitions ensuring there's always something new to see. It’s a peaceful and inspiring escape from the bustle of the city center.",
            "practicalInfo": {
                  "howToGetThere": "Located in Middelheim Park, south of the city center. Best reached by bus.",
                  "openingHours": "Tue-Sun: 10:00 until sunset (varies seasonally). Closed Mondays.",
                  "cost": "Free.",
                  "website": "www.middelheimmuseum.be"
            }
      },
      {
            "name": "Vlaeykensgang",
            "description": "Step through an inconspicuous wooden door near the Grote Markt and find yourself transported back to the 16th century. The Vlaeykensgang is a perfectly preserved medieval alleyway, a secret world hidden from the modern city. Originally home to the city's poorest residents and the shoemakers who looked after the cathedral's bells, it's now a tranquil and incredibly picturesque spot.\n\nWith its cobblestones, ivy-covered walls, and whitewashed houses, the alley offers a rare glimpse into the Antwerp of centuries past. It’s a quiet, atmospheric passageway that leads to a few charming restaurants and private homes. Finding it is part of the fun, and the reward is one of Antwerp's most photogenic and enchanting secrets.",
            "practicalInfo": {
                  "howToGetThere": "The main entrance is at Oude Koornmarkt 16, near the Cathedral.",
                  "openingHours": "Always accessible, but be respectful as it is residential.",
                  "cost": "Free.",
                  "website": "www.visit.antwerpen.be"
            }
      }
]}
      logistics={{
      "gettingAround": "Antwerp's historic center is very walkable. For longer distances, the De Lijn network of trams and buses is efficient and easy to use. A day pass or a 10-journey 'Lijnkaart' offers the best value. The Velo Antwerpen bike-sharing system is another excellent way to explore, with stations located all over the city.",
      "whereToStay": "For first-time visitors, the Historic Centre (Old Town) offers charm and proximity to major sights. Het Eilandje is perfect for those who love modern architecture and waterfront views. The Zuid (South) district is a trendy area known for its art galleries, boutiques, and vibrant nightlife. Recommendations: Hotel Julien (Luxury), Hotel Pilar (Mid-range), The Ash (Budget/Hostel).",
      "bestTimeToVisit": "The best time to visit Antwerp is during the spring (April to June) or early autumn (September to October). The weather is pleasant, and the city is less crowded than in the peak summer months. Summer (July-August) is vibrant with festivals but can be busy. Winter offers a magical experience with its charming Christmas market.",
      "suggestedItinerary": "Day 1: Historic Heart. Start at Central Station, walk through the Diamond District to the Meir, then explore the Grote Markt, Cathedral of Our Lady, Het Steen, and get lost in the Vlaeykensgang.\nDay 2: Art & Port. Visit the Rubenshuis and the Plantin-Moretus Museum in the morning. In the afternoon, head to Het Eilandje to explore the MAS and the Red Star Line Museum.\nDay 3: Fashion, Beer & Architecture. Spend the morning in the fashion district visiting MoMu. In the afternoon, take a tour of the De Koninck Brewery, followed by a tram ride to the Zurenborg neighborhood to admire its Art Nouveau architecture."
}}
      faqs={[
      {
            "question": "Is Antwerp expensive?",
            "answer": "Antwerp is comparable in cost to other major Western European cities like Amsterdam or Brussels. Accommodation can be pricey, so booking in advance is recommended. Dining costs vary widely; you can eat affordably by enjoying frites, sandwiches, and local markets, or splurge on world-class cuisine. Many museums offer free entry on the last Wednesday of the month, and walking around the beautiful streets is always free."
      },
      {
            "question": "How many days do you need in Antwerp?",
            "answer": "Two to three days are ideal for a comprehensive visit to Antwerp. This allows enough time to see the main historical sights, visit a few key museums like the Rubenshuis and MAS, and explore a couple of different neighborhoods without feeling rushed. If you are a dedicated art or fashion enthusiast, you might want to add a fourth day for deeper exploration."
      },
      {
            "question": "Is Antwerp safe?",
            "answer": "Yes, Antwerp is generally a very safe city for tourists. Standard precautions should be taken, especially against pickpocketing in crowded areas like Central Station, the Meir shopping street, and the Grote Markt. While the city is safe to walk around at night, it's always wise to stay aware of your surroundings, as you would in any large city."
      },
      {
            "question": "What is Antwerp famous for?",
            "answer": "Antwerp is famous for several things. It is the undisputed diamond capital of the world, handling over 80% of the world's rough diamonds. It is a major fashion hub, known for the avant-garde 'Antwerp Six' designers. Artistically, it is synonymous with the Baroque master Peter Paul Rubens. Its historic port is one of the largest in Europe. And of course, it's famous for Belgian specialties like beer, chocolate, and fries (frites)."
      }
]}
    />
  );
};