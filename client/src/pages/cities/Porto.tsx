import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Porto: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Porto, Portugal (2025 Guide)"}
      description={"Cascading down a hillside to the banks of the majestic Douro River, Porto is a city of intoxicating charm and rugged beauty. Portugal's second city blends historic grandeur with a vibrant, creative energy. Known worldwide for its fortified Port wine, Porto's attractions go far beyond the cellar door. Here, centuries-old churches adorned with blue azulejo tiles stand beside contemporary architectural marvels, and narrow, cobbled lanes in the UNESCO-listed Ribeira district open onto sweeping river views. Whether you're crossing the iconic Dom Luís I Bridge, tasting local delicacies, or simply getting lost in its atmospheric streets, you'll quickly discover that the city itself is one of its greatest attractions. From world-class museums to sunset viewpoints and historic tram rides, this guide will help you find all the best things to do in Porto for an unforgettable journey."}
      highlights={["Cais da Ribeira (Ribeira District)",
        "Dom Luís I Bridge",
        "Port Wine Cellars in Vila Nova de Gaia",
        "Livraria Lello",
        "Clérigos Church and Tower"]}
      galleryImages={[
        { url: "", alt: "Porto landmark 1", caption: "Porto landmark 1 - placeholder" },
        { url: "", alt: "Porto landmark 2", caption: "Porto landmark 2 - placeholder" },
        { url: "", alt: "Porto landmark 3", caption: "Porto landmark 3 - placeholder" },
        { url: "", alt: "Porto landmark 4", caption: "Porto landmark 4 - placeholder" },
        { url: "", alt: "Porto landmark 5", caption: "Porto landmark 5 - placeholder" },
        { url: "", alt: "Porto landmark 6", caption: "Porto landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Cais da Ribeira (Ribeira District)",
        description: "The Cais da Ribeira is the heart and soul of Porto. This UNESCO World Heritage site is a charismatic jumble of medieval alleys, narrow townhouses painted in vibrant ochre, blue, and orange hues, and bustling cafés that spill onto the riverside promenade. By day, it's alive with the buzz of tourists and locals, while traditional 'rabelo' boats, once used to transport wine barrels, bob gently on the Douro River.\n\nAs evening descends, the area transforms into one of Porto's most atmospheric spots for dinner or a drink, with the illuminated Dom Luís I Bridge providing a spectacular backdrop. Exploring its winding streets is an essential Porto experience, offering a glimpse into the city's historic past and its lively present. Don't be afraid to wander off the main square; the real magic is found in the hidden staircases and tiny tascas tucked away from the crowds.",
        practicalInfo: {
        howToGetThere: "Located on the Porto side of the Douro River. Accessible on foot from most of the city center or via the São Bento metro/train station, followed by a 10-minute walk downhill.",
        openingHours: "24/7 (area); shops and restaurants have individual hours.",
        cost: "Free to explore.",
        website: "visitporto.travel"
      }
      },
        {
        name: "Dom Luís I Bridge",
        description: "An icon of Porto, the Dom Luís I Bridge is a magnificent double-decker metal arch bridge that spans the Douro River, connecting Porto with Vila Nova de Gaia. Designed by a student of Gustave Eiffel, Théophile Seyrig, its intricate ironwork bears a striking resemblance to the Eiffel Tower. The bridge is a marvel of 19th-century engineering and offers some of the most breathtaking views in the city.\n\nYou can cross on two levels. The lower deck is for vehicles and pedestrians, putting you right alongside the river traffic. The upper deck, used by the Metro and pedestrians, is the real highlight. Walking across the top provides an unparalleled panoramic vista of the Ribeira district, the terracotta rooftops of Gaia, and the winding Douro. It's particularly magical at sunset when the city is bathed in a golden glow.",
        practicalInfo: {
        howToGetThere: "The upper deck is accessible from near São Bento Station on the Porto side and Jardim do Morro on the Gaia side. The lower deck connects the Cais da Ribeira with the Gaia riverfront.",
        openingHours: "24/7 for pedestrians.",
        cost: "Free to cross.",
        website: "N/A"
      }
      },
        {
        name: "Port Wine Cellars in Vila Nova de Gaia",
        description: "A trip to Porto is incomplete without sampling its most famous export: Port wine. Across the river in Vila Nova de Gaia, you'll find the historic Port wine cellars, or 'caves,' where barrels of this fortified wine have been aged for centuries. Big names like Taylor's, Graham's, Sandeman, and Cálem line the waterfront, each offering guided tours and tasting experiences.\n\nA tour provides fascinating insight into the history of the Douro Valley wine region, the unique production process of Port, and the different varieties available, from rich Ruby and tawny Ports to crisp White and Rosé versions. Most tours conclude with a tasting session in an atmospheric tasting room, often with stunning views back across the river to Porto's skyline.",
        practicalInfo: {
        howToGetThere: "Located in Vila Nova de Gaia, across the Dom Luís I Bridge from Porto. Easily walkable from the Ribeira.",
        openingHours: "Most cellars open daily from around 10:00 AM to 6:00 PM. Booking in advance is highly recommended.",
        cost: "Tours and tastings typically range from €15 to €50+, depending on the cellar and the number of wines tasted.",
        website: "visitporto.travel/en-GB/what-to-do/port-wine-cellars"
      }
      },
        {
        name: "Livraria Lello",
        description: "Often cited as one of the most beautiful bookstores in the world, Livraria Lello is a neo-Gothic masterpiece that feels like stepping into a fantasy novel. Opened in 1906, its stunning interior features a forked crimson staircase, intricate wood carvings on the walls and ceilings, and a breathtaking stained-glass skylight that bathes the space in natural light. The store's magical ambiance is rumored to have inspired J.K. Rowling during her time living in Porto, with many seeing parallels to the Flourish and Blotts bookshop or the Hogwarts library.\n\nDue to its immense popularity, entry is ticketed, but the ticket price is redeemable against any book purchase. It's an enchanting experience for book lovers, architecture enthusiasts, and Harry Potter fans alike. Be prepared for crowds, but the sheer beauty of the space makes it a worthwhile visit.",
        practicalInfo: {
        howToGetThere: "Located at Rua das Carmelitas 144, a short walk from Clérigos Tower.",
        openingHours: "Daily, approximately 9:30 AM to 7:00 PM. Check website for exact times.",
        cost: "Around €8 entry voucher, which is deductible from a book purchase. Tickets must be bought online in advance.",
        website: "www.livrarialello.pt/en"
      }
      },
        {
        name: "Clérigos Church and Tower",
        description: "The Clérigos Tower (Torre dos Clérigos) is the defining feature of Porto's skyline. This 75-meter-high Baroque bell tower, attached to the beautiful Clérigos Church, offers the best 360-degree view of the city. Designed by Italian architect Nicolau Nasoni in the 18th century, the climb up its 240 narrow steps is a rite of passage for visitors. The reward at the top is a stunning panorama of Porto's historic center, the Douro River, and the endless sea of red-tiled roofs.\n\nThe church itself is a magnificent example of Baroque architecture, with an elliptical plan that was unusual for its time. Its intricate altarpiece and marble details are well worth admiring before or after you make the ascent. The tower is especially popular around sunset, so consider booking tickets in advance to secure your spot.",
        practicalInfo: {
        howToGetThere: "Centrally located on Rua de São Filipe de Nery. Easily walkable from Aliados or São Bento stations.",
        openingHours: "Daily, 9:00 AM to 7:00 PM (check for slight seasonal variations).",
        cost: "Around €8 for the Tower and Museum visit.",
        website: "www.torredosclerigos.pt/en"
      }
      },
        {
        name: "Palácio da Bolsa (Stock Exchange Palace)",
        description: "A stone's throw from the Ribeira, the Palácio da Bolsa is a 19th-century Neoclassical masterpiece built by the city's commercial association to impress and court European investors. While the exterior is stately, the interior is a breathtaking display of opulent decoration. A mandatory guided tour takes you through several lavish rooms, including the Portrait Room and the Golden Room, covered in gold leaf.\n\nThe undeniable highlight is the Arab Room. Inspired by the Alhambra Palace in Granada, this Moorish Revival ballroom is adorned with intricate stucco carvings, stained glass, and gilded surfaces. It's a jaw-dropping space that took 18 years to complete and is still used for official receptions. The tour provides a fascinating look into Porto's 19th-century wealth and global ambitions.",
        practicalInfo: {
        howToGetThere: "Located at Rua de Ferreira Borges, next to the Church of São Francisco.",
        openingHours: "Daily, 9:00 AM to 6:30 PM (April-October); 9:00 AM to 12:30 PM & 2:00 PM to 5:30 PM (November-March).",
        cost: "Around €12 for a mandatory 30-minute guided tour.",
        website: "palaciodabolsa.com/en"
      }
      },
        {
        name: "São Francisco Church (Igreja de São Francisco)",
        description: "From the outside, the Church of São Francisco appears to be a standard, albeit impressive, 14th-century Gothic structure. However, stepping inside reveals one of the most astonishingly opulent interiors in all of Europe. During the 18th century, almost every surface—pillars, vaults, and altarpieces—was covered in intricately carved woodwork gilded with an estimated 300 kilograms of gold dust.\n\nThis explosion of Baroque splendor is overwhelming and unforgettable. Highlights include the Tree of Jesse altarpiece, a detailed family tree of Jesus Christ in gilded wood, and the eerie catacombs below, where many of Porto's Franciscan friars and wealthy citizens are buried. The church is often called the 'Golden Church,' and it's easy to see why. Note that photography is not permitted inside, encouraging you to simply absorb the jaw-dropping detail.",
        practicalInfo: {
        howToGetThere: "Located on Rua do Infante D. Henrique, near the Palácio da Bolsa and the Ribeira district.",
        openingHours: "Daily, 9:00 AM to 8:00 PM (summer); hours vary in other seasons.",
        cost: "Around €9 for entry to the church and museum/catacombs.",
        website: "www.museufranciscano.pt"
      }
      },
        {
        name: "Porto Cathedral (Sé do Porto)",
        description: "Perched on a hill overlooking the historic center, the Sé do Porto is one of the city's oldest and most important monuments. Its construction began in the 12th century, and its fortress-like appearance speaks to its origins. The building is a fascinating mix of architectural styles, primarily Romanesque, but with Gothic and Baroque additions made over the centuries. The imposing facade offers spectacular views over the city and river.\n\nBe sure to visit the adjoining Gothic cloister, which is a true highlight. Decorated with magnificent blue and white azulejo tile panels depicting scenes from the life of the Virgin Mary, it's a serene and beautiful space. You can also climb the tower for another excellent vantage point over Porto.",
        practicalInfo: {
        howToGetThere: "Located at Terreiro da Sé. A 5-minute walk uphill from São Bento Station.",
        openingHours: "Cathedral: Daily, 9:00 AM - 6:30 PM (summer), closing earlier in winter. Cloister has slightly shorter hours.",
        cost: "Free to enter the cathedral; around €3 to enter the cloister and museum.",
        website: "www.diocesedoporto.pt/se-catedral"
      }
      },
        {
        name: "Estação de São Bento (São Bento Train Station)",
        description: "More than just a transportation hub, São Bento is an art gallery disguised as a train station. Considered one of the most beautiful railway stations in the world, its main hall is adorned with over 20,000 azulejo tiles. These stunning blue and white panels, created by artist Jorge Colaço, were installed in the early 20th century and depict scenes from Portugal's rich history, such as famous battles and royal events.\n\nEven if you're not catching a train, it's well worth stopping in to admire the artistry. The scale and detail of the tilework are truly impressive. Look up to see the colorful frieze that illustrates the history of transport in Portugal. It’s a functioning station, so it's free to enter and always bustling with activity, offering a beautiful introduction to the city's culture.",
        practicalInfo: {
        howToGetThere: "Centrally located on Praça de Almeida Garrett. It's a major metro (Line D) and train hub.",
        openingHours: "Open 24/7, but best viewed during daylight hours.",
        cost: "Free.",
        website: "www.cp.pt"
      }
      },
        {
        name: "World of Wine (WOW)",
        description: "A modern and ambitious cultural district, World of Wine (WOW) is located on the Gaia side with commanding views over Porto. This sprawling complex, developed from restored Port wine cellars, houses seven distinct museums, twelve restaurants and bars, and a wine school. It's a one-stop destination for immersive experiences centered around Portuguese culture.\n\nThe museums are the main draw. 'The Wine Experience' demystifies wine from grape to glass, while 'Planet Cork' explores Portugal's surprising role as the world's leading cork producer. Other experiences delve into the history of Porto, chocolate, and fashion. It's a contemporary counterpoint to Porto's historic attractions and perfect for a rainy day or for visitors wanting a deep dive into specific Portuguese industries.",
        practicalInfo: {
        howToGetThere: "Located in Vila Nova de Gaia. Walkable from the riverfront or accessible via taxi/ride-sharing.",
        openingHours: "Museums generally open from 10:00 AM to 7:00 PM. Restaurants have later hours.",
        cost: "Each museum has a separate ticket (approx. €20), or you can buy bundles. The main area is free to enter.",
        website: "www.wow.pt/en"
      }
      },
        {
        name: "Serralves Museum & Villa",
        description: "For a dose of modern art and tranquil nature, head to the Serralves Foundation. This cultural institution comprises a world-class contemporary art museum designed by Pritzker Prize-winning architect Álvaro Siza Vieira, a stunning pink Art Deco villa, and 18 hectares of magnificent gardens. The museum hosts rotating exhibitions featuring prominent Portuguese and international artists.\n\nThe grounds are an attraction in themselves. The meticulously landscaped gardens seamlessly blend formal French-style lawns, modern sculptures, and wooded areas, culminating in a popular Treetop Walk. The Casa de Serralves, the pink villa, is a jewel of Art Deco design and offers a glimpse into the opulent lifestyle of the 1930s. It's a perfect escape from the bustling city center, offering a full day of art, architecture, and nature.",
        practicalInfo: {
        howToGetThere: "Located in the western part of Porto. Best reached by bus (e.g., lines 201, 203, 502) or taxi.",
        openingHours: "Daily, 10:00 AM to 7:00 PM (hours may vary by season and day).",
        cost: "Around €20 for a combined ticket for the park, museum, and villa.",
        website: "www.serralves.pt/en"
      }
      },
        {
        name: "Mercado do Bolhão",
        description: "After a multi-year renovation, the historic Mercado do Bolhão is back and better than ever. Housed in a magnificent two-story Neoclassical building from 1914, this is Porto's most famous fresh market. It's a vibrant, bustling place where you can experience the authentic sounds, smells, and tastes of the city. Stalls are piled high with fresh produce, flowers, fish, meat, cheeses, and regional specialties.\n\nIt’s a fantastic place to shop for edible souvenirs, like local olive oil or canned sardines with beautiful vintage-style packaging. Many stalls also offer quick bites and small plates, making it an excellent spot for a casual lunch. Chat with the friendly vendors, sample some local cheese, and soak in the lively atmosphere of a traditional Portuguese market.",
        practicalInfo: {
        howToGetThere: "Centrally located on Rua de Sá da Bandeira. The Bolhão metro station is right outside.",
        openingHours: "Monday to Saturday, 8:00 AM to 8:00 PM. Closed on Sundays.",
        cost: "Free to enter.",
        website: "www.mercadobolhao.pt"
      }
      },
        {
        name: "Majestic Café",
        description: "Step back in time at the Majestic Café, an opulent Belle Époque institution on the bustling pedestrian shopping street, Rua de Santa Catarina. Opened in 1921, it retains all of its original charm with crystal chandeliers, carved wooden frames, Flemish mirrors, and leather-backed chairs. It was a favorite haunt for the city's intellectuals, artists, and politicians, and its historical atmosphere is palpable.\n\nWhile it's one of the more expensive places for a coffee in Porto, the experience is worth it. It’s the perfect spot to rest your feet after shopping and soak up the glamorous ambiance. Order a coffee and their famous French toast (rabanada), which is served year-round, not just at Christmas. It’s a slice of Porto’s golden age.",
        practicalInfo: {
        howToGetThere: "Located at Rua Santa Catarina 112, a major shopping street.",
        openingHours: "Monday to Saturday, 9:00 AM to 11:30 PM.",
        cost: "Higher than average café prices (e.g., coffee from €5), but you're paying for the experience.",
        website: "www.cafemajestic.com"
      }
      },
        {
        name: "Foz do Douro",
        description: "Where the Douro River meets the Atlantic Ocean lies the charming district of Foz. This area offers a complete change of pace from the historic center, with a breezy seaside promenade, sandy beaches, and upscale restaurants. It's the perfect place for a long walk or a bike ride along the coast, culminating at the Felgueiras Lighthouse, where waves dramatically crash against the pier.\n\nThe Pergola da Foz, a beautiful colonnaded walkway from the 1930s, is a romantic and iconic spot for photos, especially at sunset. The area has several small beaches, like Praia dos Ingleses and Praia do Molhe, which are more for scenic enjoyment than swimming. To get here, take a memorable ride on the historic Tram Line 1, which trundles along the riverbank from the Ribeira all the way to Foz.",
        practicalInfo: {
        howToGetThere: "Take the historic Tram 1 from Ribeira or Bus 500. Both offer scenic riverside journeys.",
        openingHours: "24/7 (area).",
        cost: "Free to explore. Tram/bus fare required to get there.",
        website: "N/A"
      }
      },
        {
        name: "Casa da Música",
        description: "A bold statement of contemporary architecture, the Casa da Música is a concert hall designed by the acclaimed Dutch architect Rem Koolhaas. Its striking, futuristic shape—an irregular polyhedron—stands in stark contrast to Porto's traditional buildings and has become a modern city landmark. Completed in 2005, it is renowned for its world-class acoustics and innovative design.\n\nWhile the best way to experience it is by attending a concert by the Porto Symphony Orchestra or another visiting artist, you can also explore the building on a guided tour. Tours offer insight into the architect's vision and provide access to the stunning main auditorium, with its corrugated glass walls, and other unique spaces. Even just viewing the building from the outside is an experience in itself.",
        practicalInfo: {
        howToGetThere: "Located at Rotunda da Boavista. Accessible via the Casa da Música metro station (Lines A, B, C, E, F).",
        openingHours: "Box office is open daily. Guided tours run twice daily in Portuguese and English.",
        cost: "Guided tours are around €12. Concert tickets vary.",
        website: "www.casadamusica.com/en"
      }
      }
      ]}
      logistics={{
        gettingAround: "Porto is a very walkable city, especially in the historic center. However, be prepared for steep hills. For longer distances, the Metro do Porto is efficient, clean, and covers the city and suburbs. The historic trams, particularly Line 1 along the river, are a scenic experience. Buses cover areas the metro doesn't reach. Ride-sharing services like Uber and Bolt are widely available and affordable.",
        whereToStay: "Ribeira: Ideal for first-time visitors who want to be in the heart of the action, with stunning river views and historic charm. Cedofeita: Known as the 'arts district,' it's full of cool galleries, concept stores, and trendy restaurants. Vila Nova de Gaia: Perfect for wine lovers, offering amazing views of Porto and direct access to the Port cellars. Hotel recommendations: The Yeatman Hotel (Luxury), Pestana Vintage Porto (Boutique), The Passenger Hostel (Budget).",
        bestTimeToVisit: "The best times to visit Porto are during the shoulder seasons: spring (April to June) and fall (September to October). During these months, the weather is pleasantly warm, and the city is less crowded than in the peak summer months of July and August. Winters are mild but can be very rainy.",
        suggestedItinerary: "Day 1: Historic Core. Start at São Bento Station, walk to the Sé Cathedral, then down to the Ribeira. Cross the lower deck of the Dom Luís I Bridge. In the afternoon, visit the Palácio da Bolsa and São Francisco Church. Day 2: Wine and Views. Cross the upper deck of the Dom Luís I Bridge to Vila Nova de Gaia. Visit a Port wine cellar for a tour and tasting. Enjoy sunset from Jardim do Morro. Day 3: Arts and Coast. In the morning, visit Livraria Lello and Clérigos Tower. In the afternoon, take Tram 1 to Foz do Douro to see the Atlantic coast."
      }}
      faqs={[{
          question: "Is Porto expensive?",
          answer: "Compared to other major Western European cities like Paris or London, Porto is quite affordable. Accommodation, food, and public transport offer great value. You can enjoy a delicious meal with wine for under €20, and a glass of Port at a cellar is often just a few euros. While prices in the most tourist-heavy areas of Ribeira are higher, overall costs are reasonable, making it an excellent budget-friendly destination."
        },
        {
          question: "How many days do you need in Porto?",
          answer: "To see the main highlights of Porto and Vila Nova de Gaia without rushing, 3 full days is ideal. This allows you to explore the historic center, visit a Port cellar, enjoy the riverside, and see a few key museums. If you wish to take a day trip to the Douro Valley wine region or nearby cities like Braga or Guimarães, you should plan for 4-5 days."
        },
        {
          question: "Is Porto safe?",
          answer: "Porto is generally a very safe city for tourists. The main concern, as in any popular European city, is pickpocketing. Be especially vigilant in crowded areas like São Bento Station, on public transport (especially Tram 1), and in the busy Ribeira district. Use common sense, keep your valuables secure, and avoid poorly lit, empty streets late at night. Overall, violent crime is very low."
        },
        {
          question: "What is Porto famous for?",
          answer: "Porto is most famous for Port wine, the fortified wine that is aged in the cellars of Vila Nova de Gaia, just across the river. The city is also renowned for its stunning historic center, the Ribeira district, which is a UNESCO World Heritage site. Other famous features include the iconic Dom Luís I Bridge, the beautiful blue azulejo tiles that decorate many buildings like São Bento Station, and its signature dish, the Francesinha sandwich."
        }
      ]}
    />
  );
};