import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Bologna: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Bologna, Guide"
      description={`Welcome to Bologna, the vibrant heart of Italy's Emilia-Romagna region. Known by its three nicknames—La Dotta (the learned), La Grassa (the fat), and La Rossa (the red)—this city offers a captivating blend of intellectual history, culinary excellence, and striking medieval architecture. Home to the oldest university in the Western world, Bologna buzzes with youthful energy yet proudly preserves its rich heritage under miles of stunning terracotta-hued porticoes. It's a city made for walking, where every corner reveals a hidden treasure, from bustling food markets to serene ancient churches. Whether you're here to climb medieval towers, indulge in world-famous cuisine, or simply soak up the authentic Italian atmosphere, our guide will show you the very best things to do in Bologna for an unforgettable trip."`}
      highlights={[
      "Piazza Maggiore and Fountain of Neptune",
      "Le Due Torri (The Two Towers)",
      "Basilica di San Petronio",
      "Archiginnasio of Bologna and the Anatomical Theatre",
      "Quadrilatero Market"
]}
      attractions={[
      {
            "name": "Piazza Maggiore and Fountain of Neptune",
            "description": "Piazza Maggiore is the pulsating heart of Bologna, a grand medieval square that has been the center of civic life for centuries. Lined with magnificent buildings like the Palazzo d'Accursio (City Hall), the Palazzo dei Notai, and the Palazzo dei Banchi, it's the perfect starting point for any visit. Dominating the adjacent Piazza del Nettuno is the iconic Fountain of Neptune, a powerful bronze sculpture by Giambologna from the 16th century. The square is a lively meeting place for locals and tourists alike, hosting events, markets, and open-air film screenings in the summer. It's an essential spot to soak in the city's atmosphere.",
            "practicalInfo": {
                  "howToGetThere": "Located in the very center of the city (Centro Storico), easily walkable from any central location.",
                  "openingHours": "The square is open 24/7. Buildings around it have their own hours.",
                  "cost": "Free to visit the square.",
                  "website": "www.bolognawelcome.com"
            }
      },
      {
            "name": "Le Due Torri (The Two Towers)",
            "description": "The Asinelli and Garisenda towers are the most iconic symbols of Bologna. These leaning medieval structures are survivors of a time when the city was filled with hundreds of such towers, built by wealthy families for defense and as status symbols. The taller Asinelli Tower, standing at 97.2 meters, is open to the public. Climbing its 498 steps is a rite of passage for visitors and rewards you with breathtaking panoramic views of Bologna's red-roofed cityscape. The shorter, more dramatically leaning Garisenda Tower is not climbable but adds to the picturesque scene.",
            "practicalInfo": {
                  "howToGetThere": "Piazza di Porta Ravegnana, a 5-minute walk from Piazza Maggiore.",
                  "openingHours": "Daily. Booking online in advance is mandatory. Hours vary by season.",
                  "cost": "Approximately €5. Tickets must be purchased online.",
                  "website": "www.duetorribologna.com"
            }
      },
      {
            "name": "Basilica di San Petronio",
            "description": "Dominating one side of Piazza Maggiore, the Basilica di San Petronio is one of the largest churches in the world. Its construction began in 1390 but was never fully completed, resulting in a fascinatingly unfinished marble and brick facade. Inside, the sheer scale of the Gothic interior is awe-inspiring. Don't miss the Cassini Meridian Line, a 67-meter-long brass line embedded in the floor that acts as a solar calendar, accurately calculating the time of year. For a unique perspective, take the elevator up to the Terrazza Panoramica for stunning views of the square and the city.",
            "practicalInfo": {
                  "howToGetThere": "Located directly on Piazza Maggiore.",
                  "openingHours": "Daily, typically from around 8:30 AM to 6:30 PM. Check for mass times.",
                  "cost": "Free entry to the Basilica. A small fee is required for the panoramic terrace and to take photos.",
                  "website": "www.basilicadisanpetronio.org"
            }
      },
      {
            "name": "Archiginnasio of Bologna and the Anatomical Theatre",
            "description": "The Archiginnasio was the first permanent seat of the University of Bologna, the oldest university in the Western world. The building itself is a masterpiece, with courtyards and halls covered in nearly 6,000 coats of arms from former students and professors. The main attraction is the 17th-century Anatomical Theatre (Teatro Anatomico). Carved entirely from fir wood, this stunning lecture hall is where medical students once witnessed public dissections. The intricate wooden sculptures, including the famous 'Spellati' (skinned men) holding up the canopy over the professor's chair, make it a truly unique and slightly macabre sight.",
            "practicalInfo": {
                  "howToGetThere": "Piazza Galvani, 1, just behind the Basilica di San Petronio.",
                  "openingHours": "Monday-Saturday, typically 10:00 AM - 6:00 PM. Limited hours on Sunday.",
                  "cost": "Approximately €3 for the Anatomical Theatre and Stabat Mater Hall.",
                  "website": "www.archiginnasio.it"
            }
      },
      {
            "name": "Quadrilatero Market",
            "description": "Just off Piazza Maggiore lies the Quadrilatero, a maze of narrow medieval streets that has been Bologna's main market area for centuries. This is the heart of 'La Grassa' (the fat Bologna), a foodie paradise where the air is thick with the smells of fresh pasta, aged cheeses, cured meats, and freshly baked bread. The streets, named after the trades that once dominated them (like Via Pescherie Vecchie for fishmongers), are packed with historic delis, butchers, bakeries, and market stalls. It's the perfect place to sample local specialties, buy delicious souvenirs, or enjoy an aperitivo at one of the many bustling outdoor tables.",
            "practicalInfo": {
                  "howToGetThere": "The area of streets east of Piazza Maggiore, including Via Pescherie Vecchie and Via Drapperie.",
                  "openingHours": "Shop hours vary, but the area is most lively from morning until early evening. Many places close in the afternoon.",
                  "cost": "Free to wander. Costs vary for food and drinks.",
                  "website": "www.bolognawelcome.com/en/places/markets/quadrilatero"
            }
      },
      {
            "name": "Sanctuary of the Madonna di San Luca",
            "description": "Perched atop a forested hill overlooking Bologna, this magnificent basilica is a significant pilgrimage site. What makes the journey truly special is the Portico di San Luca, the world's longest portico. Stretching for nearly 4 kilometers and consisting of 666 arches, this covered walkway connects the city's Saragozza gate to the sanctuary. Walking the entire length is a rewarding experience, offering changing views and a sense of accomplishment. Alternatively, the San Luca Express tourist train can take you to the top. The sanctuary itself offers stunning architecture and breathtaking views of the city and surrounding hills.",
            "practicalInfo": {
                  "howToGetThere": "Start the walk at Porta Saragozza or take bus number 20 to the Meloncello arch. The San Luca Express tourist train departs from Piazza Maggiore.",
                  "openingHours": "Sanctuary is open daily, typically 7:00 AM - 7:00 PM. Hours may vary.",
                  "cost": "Free to enter the Sanctuary. A fee applies for the San Luca Express train and to climb the cupola for panoramic views.",
                  "website": "www.sanlucabo.org"
            }
      },
      {
            "name": "Basilica di Santo Stefano (Seven Churches)",
            "description": "Often called the 'Sette Chiese' (Seven Churches), this complex is one of the most unique and spiritually captivating places in Bologna. It's not a single basilica but a labyrinthine cluster of interconnected religious buildings constructed over different eras, from the 5th century onwards. The complex includes the Church of the Crucifix, the Basilica of the Sepulchre (modelled on Jerusalem's Church of the Holy Sepulchre), and a beautiful medieval cloister. Wandering through its different chapels, courtyards, and crypts feels like stepping back in time. It provides a peaceful and fascinating escape from the bustling city streets.",
            "practicalInfo": {
                  "howToGetThere": "Located on Piazza Santo Stefano, a 10-minute walk from Piazza Maggiore.",
                  "openingHours": "Daily, generally 9:30 AM to 12:30 PM and 2:30 PM to 7:00 PM.",
                  "cost": "Free entry, donations are welcome.",
                  "website": "www.abbaziasantostefano.it"
            }
      },
      {
            "name": "Finestrella di Via Piella",
            "description": "Discover Bologna's hidden past as a city of canals at the Finestrella di Via Piella. This small, unassuming window in a wall opens up to a surprisingly charming view of the Canale delle Moline, one of the few remaining canals that once powered the city's mills. Often referred to as 'Little Venice', the view of the colourful houses lining the water is a secret, picturesque spot that many tourists miss. It's a quick but delightful stop that offers a glimpse into a different side of Bologna's history and a perfect photo opportunity.",
            "practicalInfo": {
                  "howToGetThere": "Located on Via Piella, a short walk from Via dell'Indipendenza.",
                  "openingHours": "The window is accessible 24/7.",
                  "cost": "Free.",
                  "website": "N/A"
            }
      },
      {
            "name": "Pinacoteca Nazionale di Bologna (National Art Gallery)",
            "description": "For art lovers, the Pinacoteca Nazionale is a must-visit. Housed in a former Jesuit novitiate within the university district, this gallery boasts one of Italy's most important collections of Emilian painting from the 13th to the 18th centuries. The collection features seminal works by masters like Giotto, Raphael (The Ecstasy of St. Cecilia), Parmigianino, and the Carracci brothers, who founded the Bolognese School of painting. The layout guides you chronologically, offering a deep dive into the evolution of art in the region. It's a comprehensive and impressive collection that provides context to the art seen in the city's churches.",
            "practicalInfo": {
                  "howToGetThere": "Via delle Belle Arti, 56, in the University Quarter.",
                  "openingHours": "Tuesday-Sunday, typically 9:00 AM - 7:00 PM. Closed on Mondays.",
                  "cost": "Approximately €8-€10. Free on the first Sunday of the month.",
                  "website": "www.pinacotecabologna.beniculturali.it"
            }
      },
      {
            "name": "University Quarter and Museo di Palazzo Poggi",
            "description": "Explore the area around Via Zamboni, the heart of the University of Bologna, founded in 1088. The streets are filled with students, historic university buildings, libraries, and lively cafes. A highlight is the Museo di Palazzo Poggi, the main university museum. It houses a fascinating and eclectic collection of scientific wonders from centuries past, including incredible 18th-century anatomical wax models, obstetric models, and antique maps and naval models. It's an extraordinary cabinet of curiosities that showcases the university's long and illustrious history in scientific research.",
            "practicalInfo": {
                  "howToGetThere": "The quarter is centered around Via Zamboni. Palazzo Poggi is at Via Zamboni, 33.",
                  "openingHours": "Museum hours are typically Tuesday-Sunday, 10:00 AM - 6:00 PM. The quarter is always accessible.",
                  "cost": "Approximately €7 for the museum ticket.",
                  "website": "www.sma.unibo.it/en/the-museum-of-palazzo-poggi"
            }
      },
      {
            "name": "Mercato delle Erbe",
            "description": "While the Quadrilatero is historic, the Mercato delle Erbe is Bologna's largest and most functional covered market. It’s where locals do their daily shopping for fresh produce, meat, fish, and cheese. The original structure, a beautiful iron and glass building from the early 20th century, houses traditional market stalls. The surrounding areas have been modernized into a vibrant food court, offering a wide array of options from traditional Bolognese dishes to pizza and fresh seafood. It's an excellent spot for a casual, delicious lunch, allowing you to sample different local flavors in a lively, authentic setting.",
            "practicalInfo": {
                  "howToGetThere": "Via Ugo Bassi, 25, a short walk from Piazza Maggiore.",
                  "openingHours": "Market stalls open Monday-Saturday mornings. The food court has longer hours, including evenings.",
                  "cost": "Free to enter. Food prices vary.",
                  "website": "www.mercatodelleerbe.eu"
            }
      },
      {
            "name": "Basilica di San Domenico",
            "description": "This basilica is one of the most artistically significant churches in Bologna. It was founded by Saint Dominic himself in the 13th century and houses his remains in an ornate shrine, the Arca di San Domenico. This marble tomb is a masterpiece of sculpture, featuring contributions from various artists over centuries, including a young Michelangelo, who carved three of the small statues. The church also boasts a beautifully inlaid wooden choir and numerous chapels filled with important artworks. It's a quieter but no less impressive alternative to the main basilica on Piazza Maggiore.",
            "practicalInfo": {
                  "howToGetThere": "Piazza San Domenico, 13, about a 10-minute walk south of Piazza Maggiore.",
                  "openingHours": "Daily, but closes for a few hours mid-day. Check website for specifics.",
                  "cost": "Free entry.",
                  "website": "www.conventosandomenico.org"
            }
      },
      {
            "name": "Museo Civico Archeologico (Archaeological Museum)",
            "description": "Located in the 15th-century Palazzo Galvani, this museum holds one of Italy's most important archaeological collections. Its prized possession is its Egyptian collection, second in Italy only to the one in Turin. You can explore beautifully preserved sarcophagi, papyri, and artifacts from ancient Egypt. The museum also offers extensive sections on prehistoric, Etruscan, and Roman Bologna, providing a deep historical context for the city you see today. It’s an incredibly well-curated museum that offers a fascinating journey through ancient civilizations.",
            "practicalInfo": {
                  "howToGetThere": "Via dell'Archiginnasio, 2, right next to Piazza Maggiore.",
                  "openingHours": "Hours vary, generally Tuesday-Sunday. Check the official website for current times.",
                  "cost": "Approximately €6. A combined ticket with other civic museums is available.",
                  "website": "www.museibologna.it/archeologico"
            }
      },
      {
            "name": "MAMbo - Museo d'Arte Moderna di Bologna",
            "description": "For a break from Renaissance art and medieval history, head to MAMbo, Bologna's Museum of Modern Art. Located in a converted bread factory, the museum focuses on Italian art from the post-war period to the present day, with a special emphasis on artists connected to the Bologna and Emilia-Romagna region. Its permanent collection traces key movements in recent Italian art history. MAMbo also hosts excellent temporary exhibitions of contemporary national and international artists, making it a dynamic and thought-provoking cultural hub.",
            "practicalInfo": {
                  "howToGetThere": "Via Don Giovanni Minzoni, 14, near the train station.",
                  "openingHours": "Tuesday-Sunday and select holidays. Typically 10:00 AM - 7:00 PM.",
                  "cost": "Approximately €6. Combined tickets are often available.",
                  "website": "www.mambo-bologna.org"
            }
      },
      {
            "name": "Oratorio di Santa Cecilia",
            "description": "Tucked away next to the Church of San Giacomo Maggiore is a hidden gem: the Oratory of St. Cecilia. This small chapel is a marvel of the Bolognese Renaissance. Its walls are adorned with a magnificent cycle of ten frescoes depicting the life of Saint Cecilia, painted by prominent artists of the era, including Lorenzo Costa and Francesco Francia. The colors remain incredibly vibrant, and the level of detail is stunning. Because it's less famous than other sights, you can often enjoy this artistic treasure in relative peace and quiet.",
            "practicalInfo": {
                  "howToGetThere": "Via Zamboni, 15, in the University Quarter.",
                  "openingHours": "Limited hours, typically Tuesday-Sunday from 10:00 AM to 1:00 PM and 2:00 PM to 6:00 PM. Check locally as they can vary.",
                  "cost": "A small entry fee is usually required.",
                  "website": "www.bolognawelcome.com/en/places/churches-basilicas-and-sanctuaries/oratory-of-st-cecilia-and-valeriano"
            }
      }
]}
      logistics={{
      "gettingAround": "Bologna's historic center (Centro Storico) is compact and wonderfully walkable, largely thanks to its nearly 40 km of porticoes (covered walkways). This is the best way to explore. For longer distances, such as to the Sanctuary of San Luca or the train station, the city has an efficient public bus system run by TPER. Tickets can be purchased at tobacco shops (tabacchi) or via app. Cycling is also very popular, with many bike rental options available.",
      "whereToStay": "For first-time visitors, staying in the Centro Storico (historic center) is ideal, keeping you within walking distance of all major sights. The Quadrilatero area is perfect for foodies. The University Quarter offers more budget-friendly options and a lively, youthful atmosphere. For convenience in travel to other cities, the area around the central train station (Stazione Centrale) is a good choice. Hotel recommendations: Hotel Corona d'Oro 1890 (Luxury), Art Hotel Commercianti (Mid-Range), Dopa Hostel (Budget).",
      "bestTimeToVisit": "The best times to visit Bologna are during the spring (April-June) and autumn (September-October). During these months, the weather is pleasant and mild, perfect for walking. Autumn is especially rewarding for food lovers, as it's the harvest season for many local delicacies like truffles and mushrooms. Summer (July-August) can be very hot and humid. Winter is colder and quieter, which can be pleasant for avoiding crowds.",
      "suggestedItinerary": "A simple 3-day itinerary:\nDay 1: Heart of the City. Explore Piazza Maggiore, the Fountain of Neptune, and the Basilica di San Petronio. Climb the Asinelli Tower for panoramic views. Spend the afternoon getting lost in the Quadrilatero food market, ending with an aperitivo.\nDay 2: Knowledge and Art. Visit the Archiginnasio and its Anatomical Theatre. Walk through the University Quarter to the Pinacoteca Nazionale to see masterpieces. In the afternoon, find the hidden Finestrella di Via Piella.\nDay 3: Pilgrimage and Food. In the morning, walk the Portico di San Luca up to the Sanctuary for incredible views. Have lunch at the Mercato delle Erbe. In the afternoon, consider a pasta-making class or visit the quieter Basilica di San Domenico."
}}
      faqs={[
      {
            "question": "Is Bologna expensive?",
            "answer": "Bologna is generally considered more affordable than major tourist hubs like Rome, Florence, or Venice, but it is not a rock-bottom budget destination. Accommodation and dining can be found for a range of budgets. A sit-down meal with wine can cost €25-€40, while a slice of pizza or a panino offers a cheaper option. Many key attractions like churches are free, but special exhibits or climbing towers have fees. Overall, it offers good value for an authentic Italian city experience."
      },
      {
            "question": "How many days do you need in Bologna?",
            "answer": "To see the main highlights of Bologna comfortably, 2 to 3 days is ideal. This allows you to explore the historic center, climb a tower, visit key museums, and indulge in the food scene without rushing. If you plan to use Bologna as a base for day trips into the Emilia-Romagna region (to visit cities like Modena, Parma, or Ferrara), you could easily spend 4 to 5 days."
      },
      {
            "question": "Is Bologna safe?",
            "answer": "Yes, Bologna is generally a very safe city. The crime rate is low, and the biggest concern for tourists is petty crime like pickpocketing, which can occur in crowded areas like Piazza Maggiore, markets, or on public transport. As with any city, it's wise to be aware of your surroundings, keep valuables secure, and avoid walking alone in poorly lit areas late at night. The student population keeps the city lively and well-populated in the evenings."
      },
      {
            "question": "What is Bologna famous for?",
            "answer": "Bologna is famous for several key things, earning it three nicknames. It's 'La Dotta' (the Learned) for being home to the University of Bologna, the oldest university in the Western world (founded 1088). It's 'La Grassa' (the Fat) for its rich culinary tradition, being the birthplace of dishes like tagliatelle al ragù (the original bolognese sauce), mortadella, and tortellini. Finally, it's 'La Rossa' (the Red) for its characteristic red terracotta-tiled roofs and its historical association with left-wing politics."
      }
]}
    />
  );
};