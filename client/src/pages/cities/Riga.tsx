import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Riga: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Riga, Latvia (2025 Guide)"}
      description={"Welcome to Riga, the vibrant capital of Latvia and the largest city in the Baltics. A city of stunning contrasts, Riga effortlessly blends its medieval heart with a cosmopolitan buzz. Its UNESCO World Heritage-listed Old Town is a labyrinth of cobblestone streets, Gothic spires, and charming squares, while just a short walk away, the world's most magnificent collection of Art Nouveau architecture awaits. From the bustling energy of its cavernous Central Market to the serene beauty of its parks and canal, Riga offers a rich tapestry of history, culture, and cuisine. Whether you're a history buff, an architecture enthusiast, or a foodie, you'll find an incredible array of experiences. This guide will walk you through all the very best things to do in Riga, ensuring your visit to this Baltic gem is truly unforgettable."}
      highlights={["Riga Old Town (Vecrīga)",
        "House of the Black Heads",
        "Riga Central Market",
        "Art Nouveau District (Alberta Iela)",
        "St. Peter's Church"]}
      galleryImages={[
        { url: "", alt: "Riga landmark 1", caption: "Riga landmark 1 - placeholder" },
        { url: "", alt: "Riga landmark 2", caption: "Riga landmark 2 - placeholder" },
        { url: "", alt: "Riga landmark 3", caption: "Riga landmark 3 - placeholder" },
        { url: "", alt: "Riga landmark 4", caption: "Riga landmark 4 - placeholder" },
        { url: "", alt: "Riga landmark 5", caption: "Riga landmark 5 - placeholder" },
        { url: "", alt: "Riga landmark 6", caption: "Riga landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Riga Old Town (Vecrīga)",
        description: "The historical and geographical heart of Riga, the Old Town (Vecrīga) is a UNESCO World Heritage site and a must-see for any visitor. Its cobblestone lanes are lined with medieval churches, guild halls, and colorful merchant houses, creating a fairytale-like atmosphere. Every corner reveals a new story, from the iconic House of the Black Heads to the tranquil Dome Square.\n\nSpend your time simply wandering without a map, discovering hidden courtyards, cozy cafes, and amber jewelry shops. The area is largely pedestrianized, making it a joy to explore on foot. Key landmarks like St. Peter's Church, Riga Cathedral, and the Swedish Gate are all packed within this compact, enchanting district.",
        practicalInfo: {
        howToGetThere: "Located on the east bank of the Daugava River. It's a compact area best explored on foot.",
        openingHours: "24/7, though individual shops and attractions have their own hours.",
        cost: "Free to walk around.",
        website: "https://www.liveriga.com/en/visit/what-to-see/sightseeing/old-riga"
      }
      },
        {
        name: "House of the Black Heads",
        description: "Arguably the most photographed building in Riga, the House of the Black Heads is a stunning example of Dutch Renaissance architecture. Originally built in the 14th century for a guild of unmarried German merchants, the building was completely destroyed during World War II. It was painstakingly reconstructed in 1999, restoring its ornate, vibrant facade to its former glory.\n\nToday, it operates as a museum and concert venue. Inside, you can explore the opulent ceremonial halls, discover historical artifacts in the medieval cellars, and learn about the fascinating history of the Brotherhood of Blackheads. It stands as a powerful symbol of Riga's resilience and pride.",
        practicalInfo: {
        howToGetThere: "Located in Town Hall Square (Rātslaukums) in the Old Town.",
        openingHours: "Tuesday - Sunday: 10:00 AM - 5:00 PM. Closed Mondays.",
        cost: "Around €7 for adults.",
        website: "https://www.melngalvjunams.lv/en"
      }
      },
        {
        name: "Riga Central Market",
        description: "Housed in five enormous zeppelin hangars left over from World War I, Riga Central Market is one of Europe's largest and most impressive markets. This bustling culinary hub is a feast for the senses, offering an authentic slice of Latvian life. Each hangar, or pavilion, specializes in different products: meat, dairy, fish, bread, and vegetables.\n\nJoin the locals as you browse stalls overflowing with smoked fish, pickled everything, dark rye bread, local cheeses, and seasonal berries. It's the perfect place to sample local delicacies like hemp butter, grey peas with bacon, or a refreshing kvass. You can also find a modern food court for a sit-down meal featuring diverse cuisines.",
        practicalInfo: {
        howToGetThere: "Just south of the Old Town, next to the main train and bus stations. A 5-10 minute walk.",
        openingHours: "Daily, approximately 7:30 AM - 6:00 PM (Pavilions). The outdoor market may have slightly different hours.",
        cost: "Free to enter.",
        website: "https://www.rct.lv/en/"
      }
      },
        {
        name: "Art Nouveau District (Alberta Iela)",
        description: "Riga is world-renowned for having the highest concentration of Art Nouveau architecture anywhere in the world, and the epicenter of this is Alberta Iela (Albert Street). Strolling down this street feels like walking through an open-air museum. The buildings, mostly designed by Mikhail Eisenstein in the early 20th century, are adorned with intricate facades featuring sculptures, floral motifs, roaring lions, and haunting mascarons.\n\nThe entire 'Quiet Centre' neighborhood is filled with these architectural masterpieces. Don't forget to look up! For a deeper dive, visit the Riga Art Nouveau Centre museum, located in a beautifully restored apartment that shows what life was like for the city's elite during this flamboyant era.",
        practicalInfo: {
        howToGetThere: "A 10-15 minute walk north of the Old Town.",
        openingHours: "Streets are accessible 24/7. The Riga Art Nouveau Centre museum has its own hours (Tues-Sun, 10:00 AM - 6:00 PM).",
        cost: "Free to walk the streets. Museum entry is around €9.",
        website: "https://jugendstils.riga.lv/en/"
      }
      },
        {
        name: "St. Peter's Church",
        description: "With its distinctive baroque spire dominating the city's skyline, St. Peter's Church is one of Riga's most important landmarks. This towering Gothic church dates back to 1209, though it has been rebuilt several times following fires and wars. Its true highlight is the observation platform in the tower, accessible by an elevator.\n\nFrom the top, you are rewarded with breathtaking 360-degree panoramic views over the red-tiled roofs of the Old Town, the Daugava River, the Central Market's hangars, and the modern city beyond. It's the best vantage point in Riga and an essential stop for photographers and first-time visitors alike.",
        practicalInfo: {
        howToGetThere: "Centrally located in the Old Town, near the House of the Black Heads.",
        openingHours: "Tuesday - Sunday. Hours vary by season, typically 10:00 AM - 6:00 PM. Check the website for details.",
        cost: "Around €9 for the tower view.",
        website: "https://peterbaznica.riga.lv/en/"
      }
      },
        {
        name: "Riga Cathedral (Doma laukums)",
        description: "Riga Cathedral, located in the largest square of the Old Town, Dome Square, is the seat of the Archbishop of Riga. Founded in 1211, its construction spanned centuries, resulting in a unique mix of Romanesque, Gothic, and Baroque architectural styles. It is the largest medieval church in the Baltics and a cornerstone of the city's spiritual and cultural life.\n\nThe Cathedral is particularly famous for its magnificent organ, built in 1884, which boasts over 6,700 pipes. Attending one of the short, daily organ concerts is a sublime experience, allowing you to appreciate the incredible acoustics and grandeur of the instrument within this historic space.",
        practicalInfo: {
        howToGetThere: "In Dome Square (Doma laukums), in the heart of the Old Town.",
        openingHours: "Daily, 9:00 AM - 5:00 PM. Hours may vary for services.",
        cost: "Small entry fee for sightseeing (around €5). Concerts have separate tickets.",
        website: "https://www.doms.lv/index.php?lang=eng"
      }
      },
        {
        name: "Latvian National Museum of Art",
        description: "Housed in a majestic building that is a work of art in itself, the Latvian National Museum of Art is the country's most significant repository of art. The museum underwent a stunning renovation and reopened in 2016, brilliantly combining its historic architecture with modern design elements.\n\nThe permanent collection traces the development of Latvian art from the 19th century to the present day, providing fascinating insights into the nation's identity, history, and artistic movements. The top-floor cupolas and rooftop terraces offer not just contemporary art installations but also fantastic views of the city.",
        practicalInfo: {
        howToGetThere: "Located on the edge of Esplanāde park, a short walk from the Art Nouveau district.",
        openingHours: "Tuesday - Sunday, 10:00 AM - 6:00 PM (until 8:00 PM on Fridays). Closed Mondays.",
        cost: "Around €6 for the permanent exhibition.",
        website: "https://www.lnmm.lv/en"
      }
      },
        {
        name: "Museum of the Occupation of Latvia",
        description: "For a sobering but essential understanding of Latvia's turbulent 20th-century history, a visit to the Museum of the Occupation is a must. The museum chronicles the periods of occupation by both the Soviet Union (1940-1941, 1945-1991) and Nazi Germany (1941-1944).\n\nThrough powerful exhibits, personal testimonies, and historical artifacts, the museum details the immense suffering and resilience of the Latvian people. It's a poignant and deeply moving experience that provides crucial context for the country's hard-won independence and modern identity. The museum is located in a stark, modern building right on the edge of the Old Town.",
        practicalInfo: {
        howToGetThere: "At Latviešu strēlnieku laukums 1, on the edge of the Old Town near the Stone Bridge.",
        openingHours: "Daily, 11:00 AM - 6:00 PM.",
        cost: "Entry is by donation.",
        website: "https://okupacijasmuzejs.lv/en"
      }
      },
        {
        name: "The Three Brothers",
        description: "The Three Brothers is a charming complex of three adjoining houses, each built in a different century, making it the oldest complex of dwelling houses in Riga. The white brother (No. 17) dates to the 15th century and features Gothic and Renaissance elements. The yellow brother (No. 19) was built in the 17th century in the Dutch Mannerism style. The green brother (No. 21) is a narrow Baroque building from the 18th century.\n\nLegend says they were built by three men of the same family. Today, the complex houses the Latvian Museum of Architecture. It's a picturesque spot that vividly illustrates the evolution of residential architecture in Riga over several hundred years.",
        practicalInfo: {
        howToGetThere: "Located on Mazā Pils iela in the Old Town.",
        openingHours: "Exterior is always visible. Museum is open on weekdays.",
        cost: "Free to view from the outside. Museum entry is also free.",
        website: "https://www.archmuseum.lv/en.html"
      }
      },
        {
        name: "Freedom Monument",
        description: "Soaring above the city near the edge of the Old Town, the Freedom Monument is a powerful symbol of Latvia's sovereignty and independence. Unveiled in 1935, it miraculously survived the Soviet occupation. The monument is crowned by a copper figure of Liberty, affectionately known as Milda, who holds three golden stars representing the three historic regions of Latvia.\n\nAt its base, intricate sculptures depict scenes from Latvian history and culture. An honor guard is present throughout the day, with a small changing of the guard ceremony taking place on the hour. It is a deeply revered national symbol and a focal point for public gatherings and national celebrations.",
        practicalInfo: {
        howToGetThere: "Located on Brīvības bulvāris, between the Old Town and Bastejkalna Parks.",
        openingHours: "Accessible 24/7. Changing of the guard is daily from 10:00 AM to 4:00 PM.",
        cost: "Free.",
        website: "https://www.liveriga.com/en/visit/what-to-see/sightseeing/monuments/the-freedom-monument"
      }
      },
        {
        name: "Bastejkalna Parks (Bastion Hill Park)",
        description: "Bastejkalna Parks is a beautiful green oasis that wraps around the northeastern edge of the Old Town. The park was created in the 19th century on the site of the city's former defensive ramparts. A picturesque canal winds through the park, crossed by romantic bridges, including the 'Bridge of Love' where couples attach padlocks.\n\nIt's a perfect place for a relaxing stroll, a picnic, or a boat trip along the canal. The park is home to several monuments, beautiful flower arrangements, and the gentle slope of Bastion Hill itself, which was once part of the city's fortifications. It offers a peaceful retreat from the bustling city streets.",
        practicalInfo: {
        howToGetThere: "Located adjacent to the Old Town and the Freedom Monument.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "https://www.liveriga.com/en/visit/what-to-see/sightseeing/parks-and-gardens/bastejkalns-park"
      }
      },
        {
        name: "Latvian National Opera and Ballet",
        description: "The 'White House' of Riga is the stunning neoclassical building that is home to the Latvian National Opera and Ballet. Built in the 19th century, it is surrounded by the beautifully manicured park and canal. The institution has a rich history and is known for its high-quality productions and world-class performers.\n\nEven if you don't attend a performance, the building itself is worth admiring. However, tickets for opera and ballet are surprisingly affordable compared to other European capitals, making it an accessible cultural experience. Check the schedule in advance to see classics or modern Latvian productions in this magnificent setting.",
        practicalInfo: {
        howToGetThere: "Located on Aspazijas bulvāris, next to Bastejkalna Parks and the Freedom Monument.",
        openingHours: "Box office hours are daily. Performance times vary.",
        cost: "Ticket prices vary widely depending on the performance and seat, but can start from as low as €10.",
        website: "https://www.opera.lv/en/"
      }
      },
        {
        name: "Corner House (KGB Museum)",
        description: "The 'Corner House' at Brīvības iela 61 is a name that once struck fear into the hearts of Latvians. This was the former headquarters of the Soviet KGB in Latvia. Today, it operates as a chilling and poignant museum, an annex of the Museum of Occupation. The main exhibition on the ground floor is free to enter and provides historical context.\n\nThe real impact comes from the guided tour of the cellars and prison cells in the basement, which have been left largely untouched since the KGB departed. Walking through these corridors and hearing stories of interrogations and imprisonment is a harrowing but profoundly important experience for understanding the realities of life under Soviet rule.",
        practicalInfo: {
        howToGetThere: "Located at the corner of Brīvības and Stabu streets, a 15-minute walk from the Old Town.",
        openingHours: "Check website for current hours, as they can vary. Guided tours are at set times.",
        cost: "Exhibition is free. Guided tour of the cellars is around €10.",
        website: "https://okupacijasmuzejs.lv/en/visit-us/kgb-building"
      }
      },
        {
        name: "Spīķeri Quarter",
        description: "Located between the Central Market and the Daugava River, the Spīķeri Quarter is a creative hub housed in beautifully restored 19th-century warehouses. Once a bustling cargo storage area, it has been transformed into a trendy district filled with art galleries, concert halls, offices for creative industries, and cool cafes.\n\nThe area has a raw, post-industrial vibe and hosts a variety of events, from open-air concerts in the summer to a popular flea market. It's also home to the Riga Ghetto and Latvian Holocaust Museum. A walk through Spīķeri provides a look at Riga's successful urban regeneration and its contemporary cultural scene.",
        practicalInfo: {
        howToGetThere: "South of the Old Town, right next to the Central Market.",
        openingHours: "Area is accessible 24/7. Individual venues have their own hours.",
        cost: "Free to walk around.",
        website: "https://spikeri.lv/en/"
      }
      },
        {
        name: "Kalnciema Quarter",
        description: "For a taste of local life away from the main tourist trail, head across the river to the Kalnciema Quarter. This charming area consists of a cluster of beautifully renovated 19th-century wooden buildings, showcasing a type of architecture that was once common throughout Riga. It's a vibrant cultural center with a strong community feel.\n\nThe main draw is the weekly market, held every Saturday, which features local farmers, artisans, and craftspeople. It's a fantastic place to buy unique souvenirs, taste local food, and enjoy live music. The quarter also hosts regular events, including open-air concerts, art exhibitions, and film screenings, making it a lively and authentic Riga experience.",
        practicalInfo: {
        howToGetThere: "Located on the west bank of the Daugava River. Take Tram 1 or various buses from the city center.",
        openingHours: "Market is on Saturdays from 10:00 AM to 4:00 PM. Check website for other events.",
        cost: "Free to enter.",
        website: "https://www.kalnciemaiela.lv/en/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Riga is a very walkable city, especially the Old Town and surrounding areas. For longer distances, the public transport system (Rīgas Satiksme) is efficient, consisting of trams, buses, and trolleybuses. Tickets can be bought from kiosks or on an app. Ride-sharing services like Bolt are also widely available and affordable.",
        whereToStay: "For first-time visitors, staying in the Old Town (Vecrīga) offers immediate access to major sights. The 'Quiet Centre' near the Art Nouveau district is perfect for those seeking elegance and tranquility. For a more local and budget-friendly vibe, consider areas across the river like Āgenskalns or the creative Kalnciema Quarter. Hotels range from luxury chains like Grand Hotel Kempinski to charming boutique hotels and modern hostels.",
        bestTimeToVisit: "The best time to visit Riga is from late spring to early autumn (May to September). Summer (June-August) offers the warmest weather, long daylight hours, and numerous festivals, but also the largest crowds. May and September provide a great balance of pleasant weather and fewer tourists. Winter can be very cold and snowy, but it's magical during the Christmas market season.",
        suggestedItinerary: "Day 1: Immerse yourself in the Old Town. Visit the House of the Black Heads, climb St. Peter's Church for views, explore Riga Cathedral, and find the Three Brothers. End the day with a traditional Latvian dinner.\nDay 2: Markets and Art. Start at the vast Riga Central Market for breakfast and browsing. Then, walk to the Art Nouveau District to admire the architecture on Alberta Iela, and visit the Latvian National Museum of Art.\nDay 3: History and Relaxation. Delve into 20th-century history at the Museum of the Occupation or the Corner House (KGB Museum). In the afternoon, relax with a stroll through Bastejkalna Parks and take a canal boat tour."
      }}
      faqs={[{
          question: "Is Riga expensive?",
          answer: "Compared to many other major European capitals, Riga is quite affordable. Accommodation, food, and public transport offer great value. A meal at a mid-range restaurant can cost between €15-€25, a local beer is around €3-€4, and a public transport ticket is just over €1. While prices in the heart of the Old Town are higher, stepping just a few streets away reveals much more budget-friendly options."
        },
        {
          question: "How many days do you need in Riga?",
          answer: "Two to three days is a perfect amount of time to explore the main highlights of Riga at a comfortable pace. This allows you to cover the Old Town, the Central Market, and the Art Nouveau district. If you wish to explore more deeply, visit more museums, or take a day trip to nearby destinations like the seaside resort of Jūrmala or Sigulda Castle, then 4-5 days would be ideal."
        },
        {
          question: "Is Riga safe?",
          answer: "Riga is generally a very safe city for tourists. The main tourist areas are well-policed and busy. Standard precautions should be taken, as in any city. Be mindful of your belongings in crowded places like the Central Market or on public transport to avoid pickpocketing. At night, stick to well-lit main streets, but overall, visitors should feel very comfortable and secure."
        },
        {
          question: "What is Riga famous for?",
          answer: "Riga is most famous for two key things: its magnificent, UNESCO-listed medieval Old Town and having the world's largest and most impressive collection of Art Nouveau architecture. It's also known for its massive Central Market housed in former Zeppelin hangars, the iconic House of the Black Heads, and its potent herbal liqueur, Riga Black Balsam."
        }
      ]}
    />
  );
};