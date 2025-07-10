import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Turin: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Turin, Italy (2025 Guide)"}
      description={"Often overlooked for its more famous Italian counterparts, Turin is a city of understated elegance and immense cultural wealth. As Italy's first capital and the cradle of its automotive industry, this northern gem offers a unique blend of Parisian-style boulevards, Baroque splendor, and industrial heritage, all framed by the magnificent backdrop of the Alps. Known for its world-class museums, historic cafés, and culinary innovations like gianduja chocolate and vermouth, Turin captivates visitors with its sophisticated yet unpretentious charm. From ascending its iconic architectural symbol to exploring ancient Egyptian treasures, discovering the best things to do in Turin reveals a city rich in history, art, and flavor, waiting to be explored. It’s a destination that rewards the curious traveler with unforgettable experiences at every turn."}
      highlights={["Mole Antonelliana & National Cinema Museum",
        "Egyptian Museum (Museo Egizio)",
        "Royal Palace of Turin (Palazzo Reale)",
        "Turin Cathedral & Chapel of the Holy Shroud",
        "Quadrilatero Romano"]}
      galleryImages={[
        { url: "", alt: "Turin landmark 1", caption: "Turin landmark 1 - placeholder" },
        { url: "", alt: "Turin landmark 2", caption: "Turin landmark 2 - placeholder" },
        { url: "", alt: "Turin landmark 3", caption: "Turin landmark 3 - placeholder" },
        { url: "", alt: "Turin landmark 4", caption: "Turin landmark 4 - placeholder" },
        { url: "", alt: "Turin landmark 5", caption: "Turin landmark 5 - placeholder" },
        { url: "", alt: "Turin landmark 6", caption: "Turin landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Mole Antonelliana & National Cinema Museum",
        description: "The undisputed symbol of Turin, the Mole Antonelliana towers over the city with its unique aluminum spire. Originally intended as a synagogue, this architectural marvel now houses the National Cinema Museum (Museo Nazionale del Cinema), one of the best of its kind in the world. The museum's layout spirals upwards through the building, offering an immersive journey through the history of filmmaking, from early optical illusions to modern blockbusters.\nThe absolute highlight is the panoramic lift that whisks you through the center of the dome to the 'tempietto' viewing platform. From here, you are rewarded with breathtaking 360-degree views of Turin, with the snow-capped Alps providing a stunning backdrop on clear days. It's a quintessential Turin experience that combines architecture, culture, and an unforgettable vista.",
        practicalInfo: {
        howToGetThere: "Located at Via Montebello, 20. A short walk from Piazza Castello in the city center.",
        openingHours: "Wednesday-Monday: 9:00 AM - 7:00 PM. Closed on Tuesdays. Check website for seasonal changes.",
        cost: "Museum + Panoramic Lift: ~€17. Museum only: ~€12. Lift only: ~€9.",
        website: "https://www.museocinema.it/en/"
      }
      },
        {
        name: "Egyptian Museum (Museo Egizio)",
        description: "Prepare to be transported to the land of the pharaohs at Turin's Egyptian Museum, which holds the second most important collection of Egyptian artifacts in the world, after Cairo. Founded in 1824, the museum's vast collection includes over 30,000 artifacts, with 6,500 on display, spanning from the Paleolithic to the Coptic era.\nHighlights include the breathtaking Gallery of the Kings, featuring massive statues of pharaohs like Ramesses II and Seti II, the intact Tomb of Kha and Merit, and the Ellesija Temple, which was gifted to Italy by Egypt. The meticulous curation and stunning displays make this an absolute must-see, offering a deep and compelling insight into ancient Egyptian life and death.",
        practicalInfo: {
        howToGetThere: "Located at Via Accademia delle Scienze, 6, near Piazza San Carlo.",
        openingHours: "Tuesday-Sunday: 9:00 AM - 6:30 PM; Monday: 9:00 AM - 2:00 PM.",
        cost: "Adults: ~€18. Reductions available. Booking online is highly recommended.",
        website: "https://museoegizio.it/en/"
      }
      },
        {
        name: "Royal Palace of Turin (Palazzo Reale)",
        description: "Step into the opulent world of the Savoy dynasty at the Royal Palace of Turin. This magnificent palace served as the seat of power for Italy's royal family for over 200 years and is the heart of the UNESCO-listed Residences of the Royal House of Savoy. The tour takes you through a lavish sequence of state apartments, including the Throne Room, the Ballroom, and the stunning Daniel Gallery, all dripping with gold leaf, frescoes, and priceless tapestries.\nYour ticket also grants access to the Royal Armory (Armeria Reale), one of the world's most significant collections of arms and armor, and the Sabauda Gallery (Galleria Sabauda), which houses the Savoys' impressive art collection. It's a journey through the history, power, and extravagance of the family that unified Italy.",
        practicalInfo: {
        howToGetThere: "Located in the central Piazza Castello.",
        openingHours: "Tuesday-Sunday: 10:00 AM - 7:00 PM. Closed on Mondays. Ticket office closes at 6:00 PM.",
        cost: "Full ticket for Royal Museums (Palace, Armory, Gallery, etc.): ~€15.",
        website: "https://museireali.beniculturali.it/en/"
      }
      },
        {
        name: "Turin Cathedral & Chapel of the Holy Shroud",
        description: "Adjacent to the Royal Palace stands the Turin Cathedral (Duomo di Torino), a 15th-century Renaissance church dedicated to St. John the Baptist. While architecturally important, its primary draw is what it contains: the Chapel of the Holy Shroud (Cappella della Sacra Sindone). This masterpiece of Baroque architecture by Guarino Guarini was built specifically to house the legendary Shroud of Turin, the linen cloth believed by many to be the burial cloth of Jesus Christ.\nThe original Shroud is rarely displayed to the public for conservation reasons, but a replica is on view, and the chapel itself, now reopened after a devastating fire in 1997, is an awe-inspiring space. Its intricate dome and dark marble create a powerful and contemplative atmosphere.",
        practicalInfo: {
        howToGetThere: "Located in Piazza San Giovanni, next to Piazza Castello.",
        openingHours: "Daily, generally 7:00 AM - 12:30 PM & 3:00 PM - 7:00 PM. Hours can vary for services.",
        cost: "Free entry to the Cathedral. Access to the Royal Museums is required for certain views.",
        website: "http://www.duomoditorino.it/"
      }
      },
        {
        name: "Quadrilatero Romano",
        description: "The Quadrilatero Romano is Turin's oldest neighborhood, tracing its grid layout to the ancient Roman settlement of Augusta Taurinorum. Today, this historic quarter is the city's most atmospheric and vibrant hub for dining and nightlife. By day, its narrow cobblestone streets are filled with artisan shops, quirky boutiques, and historic cafes. You can also see the ancient Porta Palatina, one of the best-preserved Roman city gates in the world.\nAs evening descends, the Quadrilatero transforms. The piazzas and laneways buzz with energy as locals and visitors flock to its countless restaurants, osterias, and cocktail bars. It's the perfect place to experience the Torinese tradition of 'aperitivo' or enjoy a traditional Piedmontese meal in a charming, historic setting.",
        practicalInfo: {
        howToGetThere: "North-west of Piazza Castello. Easily walkable from the city center.",
        openingHours: "Shops during the day, restaurants and bars open until late.",
        cost: "Free to wander. Cost of food and drinks varies.",
        website: "N/A (Neighborhood)"
      }
      },
        {
        name: "Palazzo Madama",
        description: "Dominating the center of Piazza Castello, Palazzo Madama is a building that encapsulates 2,000 years of Turin's history. Its foundations are a Roman gate, which became a medieval fortress, and was later transformed into a royal residence with a spectacular Baroque facade designed by Filippo Juvarra. The name 'Madama' refers to the two French royal regents who resided here in the 17th century.\nToday, the palace houses the Museo Civico d'Arte Antica (Civic Museum of Ancient Art). The collection spans from the Early Middle Ages to the Baroque period, but the building itself is the main exhibit. Ascend the grand Juvarra staircase and explore rooms that have witnessed centuries of change, culminating in the tower for a great view over the piazza.",
        practicalInfo: {
        howToGetThere: "Centrally located in Piazza Castello.",
        openingHours: "Wednesday-Monday: 10:00 AM - 6:00 PM. Closed on Tuesdays.",
        cost: "Full ticket: ~€10. Free with the Torino+Piemonte Card.",
        website: "https://www.palazzomadamatorino.it/en/"
      }
      },
        {
        name: "Venaria Reale",
        description: "Just outside Turin lies the Reggia di Venaria Reale, a magnificent former royal residence that rivals Versailles in its scale and grandeur. A UNESCO World Heritage site, this sprawling Baroque palace was built as a hunting lodge for Duke Charles Emmanuel II. After falling into neglect for two centuries, it underwent one of Europe's largest-ever cultural restoration projects and reopened in 2007.\nThe highlights are the immense Great Gallery (Galleria Grande), a dazzling 80-meter-long hall of white stucco, and the beautiful Chapel of Saint Hubert. The extensive, perfectly manicured gardens are equally impressive, offering beautiful walks with views of the palace and Alps.",
        practicalInfo: {
        howToGetThere: "Take the dedicated 'Venaria Express' shuttle bus from central Turin, or local bus lines 11 or 72.",
        openingHours: "Tuesday-Sunday, hours vary seasonally. Check the website for current times.",
        cost: "Palace + Gardens: ~€20. Can vary based on exhibitions.",
        website: "https://lavenaria.it/en"
      }
      },
        {
        name: "National Automobile Museum (MAUTO)",
        description: "Turin is the birthplace of FIAT and the heart of Italy's automotive industry, a legacy celebrated at the world-renowned National Automobile Museum (MAUTO). Housed in a striking modern building, the museum takes you on a chronological and thematic journey through the history of the automobile.\nThe collection features over 200 original cars from 80 different brands, from the earliest steam-powered carriages to iconic Formula 1 race cars and futuristic prototypes. The exhibitions are brilliantly designed, contextualizing the car's evolution with social and cultural history. It's a fascinating visit, even for those who aren't car fanatics.",
        practicalInfo: {
        howToGetThere: "Located at Corso Unità d'Italia, 40, south of the city center. Accessible via Metro (Lingotto station) or bus.",
        openingHours: "Monday: 10:00 AM - 2:00 PM; Tuesday-Sunday: 10:00 AM - 7:00 PM.",
        cost: "Adults: ~€15.",
        website: "https://www.museoauto.com/en/"
      }
      },
        {
        name: "Superga Basilica",
        description: "Perched on a hill overlooking the city, the Basilica of Superga is a stunning Baroque church designed by Filippo Juvarra. It was built as a votive offering by Duke Victor Amadeus II after a victory and later became the burial site for many princes of the House of Savoy. The climb to the top of the dome offers arguably the most spectacular panoramic view of Turin and the surrounding Alpine arc.\nThe site also holds a poignant place in modern history. The rear of the basilica is the site of the 1949 air disaster that killed the entire 'Grande Torino' football team, one of the greatest in Italian history. A memorial plaque serves as a powerful pilgrimage site for sports fans.",
        practicalInfo: {
        howToGetThere: "Take the historic Sassi-Superga rack railway from Sassi station (accessible by bus 61 or 68 from the city center).",
        openingHours: "Daily, hours vary seasonally. Check website. Last admission to dome/tombs is usually 45 mins before closing.",
        cost: "Basilica is free. A combined ticket for the Royal Tombs and Dome climb is ~€7.",
        website: "http://www.basilicadisuperga.com/en/"
      }
      },
        {
        name: "Parco del Valentino & Borgo Medievale",
        description: "Parco del Valentino is Turin's favorite green lung, a beautiful park stretching along the western bank of the Po River. It's the perfect place for a relaxing stroll, a bike ride, or a picnic. The park is home to a botanical garden, elegant fountains, and the grand Castello del Valentino, a former royal residence and now the seat of the University's Architecture department.\nWithin the park, you'll find the charming Borgo Medievale (Medieval Village), a detailed replica of a 15th-century Piedmontese village built for the 1884 Italian General Exposition. Complete with a fortress, workshops, and houses, it's a fascinating and picturesque walk back in time.",
        practicalInfo: {
        howToGetThere: "South of the city center along the Po River. Easily accessible by foot, bike, or public transport.",
        openingHours: "Park is always open. Borgo Medievale village: 9:00 AM - 7:00 PM (winter) / 8:00 PM (summer).",
        cost: "Free to enter the park and the village streets. A fee applies to enter the fortress (Rocca).",
        website: "http://www.parcodelvalentino.it/"
      }
      },
        {
        name: "Porta Palazzo Market",
        description: "Engage all your senses at the Porta Palazzo Market, Europe's largest open-air market. Located in the vast Piazza della Repubblica, this bustling, multicultural market is a true slice of daily life in Turin. The market is divided into sections: one area is a vibrant sea of tents selling fresh fruit and vegetables, another is dedicated to local cheeses, meats, and breads, and there's an indoor section for fish and meat.\nDon't miss the nearby Mercato Centrale, a modern food hall with gourmet stalls, and the Balon, a famous flea market held every Saturday (with a grand version, the Gran Balon, on the second Sunday of each month). It's a chaotic, colorful, and unmissable cultural experience.",
        practicalInfo: {
        howToGetThere: "In Piazza della Repubblica, a short walk from the Quadrilatero Romano.",
        openingHours: "Monday-Saturday, from early morning until mid-afternoon (~3:00 PM).",
        cost: "Free to browse.",
        website: "N/A (Public Market)"
      }
      },
        {
        name: "Eataly Lingotto",
        description: "The 'Eat Italian' movement started here. Eataly Lingotto is the original flagship location of the global Italian food emporium, a true paradise for food lovers. It's cleverly located in a converted vermouth factory in the Lingotto complex, opposite the former FIAT factory. Part high-end supermarket, part food court, part cooking school, Eataly is dedicated to showcasing the best of Italian and Piedmontese gastronomy.\nYou can browse shelves laden with artisanal pasta, olive oils, and chocolates, watch mozzarella being made, or dine at one of the several themed restaurants specializing in pasta, pizza, meat, or fish. It’s the perfect place to shop for edible souvenirs or enjoy a high-quality, authentic meal.",
        practicalInfo: {
        howToGetThere: "Via Nizza, 230/14, in the Lingotto district. Take the Metro to Lingotto station.",
        openingHours: "Daily, from 9:00 AM to 11:00 PM. Restaurant hours vary.",
        cost: "Free to enter. Cost depends on dining and shopping choices.",
        website: "https://www.eataly.net/it_it/negozi/torino-lingotto"
      }
      },
        {
        name: "Monte dei Cappuccini",
        description: "For one of the most iconic postcard views of Turin, make the short, pleasant climb up Monte dei Cappuccini. Located on the east bank of the Po River, directly opposite Piazza Vittorio Veneto, this hill is crowned by the Santa Maria al Monte dei Cappuccini church and monastery. The viewing terrace in front of the church offers a stunning panorama of the city's rooftops, the curve of the river, and the towering Mole Antonelliana, all perfectly framed by the Alps on a clear day.\nIt's an especially magical spot at sunset, as the city lights begin to twinkle on and the sky changes color behind the mountains. The hill is also home to the National Museum of the Mountain (Museo Nazionale della Montagna), for those interested in alpine history and culture.",
        practicalInfo: {
        howToGetThere: "Cross the Vittorio Emanuele I bridge from Piazza Vittorio Veneto and walk up the hill.",
        openingHours: "The viewing terrace is always accessible. Church hours vary.",
        cost: "Free. A fee applies for the mountain museum.",
        website: "https://www.museomontagna.org/"
      }
      },
        {
        name: "GAM - Civic Gallery of Modern and Contemporary Art",
        description: "Turin has a rich modern artistic heritage, which is showcased brilliantly at the GAM (Galleria Civica d'Arte Moderna e Contemporanea). The museum holds an impressive collection of over 45,000 works, focusing primarily on 19th and 20th-century Italian art, with significant pieces from international artists as well.\nThe collection includes masterpieces from Italian movements like Futurism (Balla, Boccioni) and Arte Povera, which has strong roots in Turin. The layout is clean and spacious, allowing the art to shine. It's a fantastic counterpoint to the city's Baroque and ancient collections, offering insight into a different, more recent chapter of Italy's creative genius.",
        practicalInfo: {
        howToGetThere: "Located at Via Magenta, 31. Near the Porta Nuova train station.",
        openingHours: "Tuesday-Sunday: 10:00 AM - 6:00 PM. Closed on Mondays.",
        cost: "Adults: ~€10. Free with Torino+Piemonte Card.",
        website: "https://www.gamtorino.it/en/"
      }
      },
        {
        name: "Bicerin Tasting at Caffè Al Bicerin",
        description: "You cannot leave Turin without tasting its signature drink, the Bicerin. This decadent, layered beverage consists of espresso, hot chocolate, and whole milk (or cream), carefully poured to remain separate in a small glass. The best and most historic place to try it is at its birthplace, Caffè Al Bicerin, a tiny, atmospheric café that has been operating since 1763.\nStepping inside is like entering a time capsule, with its marble-topped tables, wood paneling, and old-world charm. Figures like Cavour and Puccini once frequented this spot. Ordering a Bicerin here isn't just about a drink; it's about partaking in a cherished Torinese ritual and a piece of culinary history. Be prepared to wait for a table – it's well worth it.",
        practicalInfo: {
        howToGetThere: "Located at Piazza della Consolata, 5, in the Quadrilatero Romano.",
        openingHours: "8:30 AM - 7:30 PM. Closed on Wednesdays.",
        cost: "A Bicerin costs around €7-€8.",
        website: "https://bicerin.it/en/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Turin is a very walkable city, especially the central historic area (Centro). For longer distances, the GTT public transport system is efficient and includes buses, trams, and a single, user-friendly metro line connecting the main train stations to the Lingotto district. Tickets must be purchased beforehand from 'tabaccherie' (tobacco shops) or newsstands. Bike sharing services like [TO]Bike are also popular.",
        whereToStay: "For first-time visitors, staying in 'Centro' near Piazza Castello or Via Roma provides easy access to major sights. The 'Quadrilatero Romano' is perfect for those seeking vibrant nightlife and culinary experiences. 'Crocetta' offers an elegant, residential feel with beautiful Art Nouveau buildings, while 'San Salvario', near the Porta Nuova station, is a trendy, multicultural area popular with a younger crowd.",
        bestTimeToVisit: "The best times to visit Turin are during the shoulder seasons: spring (April-June) and autumn (September-October). The weather is pleasant for walking, and you can enjoy seasonal events like the Salone del Gusto food festival in the fall. Summers (July-August) can be hot and humid. Winter is cold but magical, with Christmas markets and the Luci d'Artista light installations illuminating the city.",
        suggestedItinerary: "[object Object]"
      }}
      faqs={[{
          question: "Is Turin expensive?",
          answer: "Turin is generally considered more affordable than other major Italian tourist destinations like Rome, Florence, or Venice. Accommodation, dining, and public transport offer good value. A meal at a mid-range restaurant is reasonably priced, and the tradition of 'apericena' (a buffet with your evening drink) can be a budget-friendly dinner option. While major museum tickets add up, the overall cost of a trip to Turin is quite manageable."
        },
        {
          question: "How many days do you need in Turin?",
          answer: "A stay of 3 full days is ideal to comfortably cover the main attractions within the city center, including the major museums and historic sites. If you wish to explore further, such as visiting the Venaria Reale palace or the Superga Basilica, or want to explore different neighborhoods more deeply, extending your trip to 4 or 5 days is recommended."
        },
        {
          question: "Is Turin safe?",
          answer: "Turin is a relatively safe city. Standard precautions apply as in any large European city. Be mindful of your belongings and aware of your surroundings, especially in crowded areas like the Porta Palazzo market, on public transport, and around the main train stations (Porta Nuova and Porta Susa) to avoid pickpockets. The main tourist areas are well-policed and safe to walk around, even at night."
        },
        {
          question: "What is Turin famous for?",
          answer: "Turin is famous for several key things. It was the first capital of a unified Italy and the home of the Italian royal family, the House of Savoy. It is the heart of Italy's automotive industry, being the birthplace of FIAT. Culinarily, it's renowned for inventing gianduja (the precursor to Nutella), the Bicerin drink, and being the commercial hub for vermouth. It also houses two world-famous artifacts: the Shroud of Turin and the second-largest collection of Egyptian artifacts at the Museo Egizio."
        }
      ]}
    />
  );
};