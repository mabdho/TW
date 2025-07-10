import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Savannah: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Savannah, USA (2025 Guide)"}
      description={"Dripping with Spanish moss and Southern charm, Savannah is a city suspended in time. Its cobblestone streets, impeccably preserved antebellum architecture, and 22 picturesque public squares create a fairytale-like setting that beckons travelers to slow down and explore. Founded in 1733, Georgia's First City is a living museum, where every corner tells a story of colonial ambition, Civil War turmoil, and ghostly legends. From haunted historic homes to a vibrant riverfront and a world-class art scene, there’s an enchanting experience waiting for everyone. Whether you're a history buff, a foodie, or simply in search of beauty, you'll find no shortage of captivating activities. This guide will walk you through all the very best things to do in Savannah, ensuring your visit is as magical as the city itself."}
      imageUrl={""}
      highlights={["Explore the Historic District & City Squares",
        "Stroll Through Forsyth Park",
        "Wander Bonaventure Cemetery",
        "Experience River Street",
        "Tour the Mercer Williams House Museum"]}
      galleryImages={[
        { url: "", alt: "Savannah landmark 1", caption: "Savannah landmark 1 - placeholder" },
        { url: "", alt: "Savannah landmark 2", caption: "Savannah landmark 2 - placeholder" },
        { url: "", alt: "Savannah landmark 3", caption: "Savannah landmark 3 - placeholder" },
        { url: "", alt: "Savannah landmark 4", caption: "Savannah landmark 4 - placeholder" },
        { url: "", alt: "Savannah landmark 5", caption: "Savannah landmark 5 - placeholder" },
        { url: "", alt: "Savannah landmark 6", caption: "Savannah landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Explore the Historic District & City Squares",
        description: "The heart and soul of Savannah is its National Historic Landmark District, a stunningly preserved grid of streets and 22 public squares designed by General James Oglethorpe. Each square has its own unique character, fountain, or monument, shaded by magnificent live oaks draped in Spanish moss. The best way to experience it is on foot, allowing you to wander from one tranquil green space to the next, admiring the surrounding Federal, Georgian, and Greek Revival architecture.\n\nStart in Johnson Square, the first and largest, and make your way to others like Chippewa Square, famous for the bus bench scene in 'Forrest Gump' (the bench is now in a museum), and Madison Square with its statue of Sergeant William Jasper. These squares are not just historic relics; they are the living rooms of the city, hosting farmers' markets, festivals, and locals simply enjoying the day.",
        practicalInfo: {
        howToGetThere: "The Historic District is the central downtown area, best explored on foot. Paid parking garages are available on the perimeter.",
        openingHours: "24/7",
        cost: "Free to explore",
        website: "https://www.visitsavannah.com/list/savannahs-squares"
      }
      },
        {
        name: "Stroll Through Forsyth Park",
        description: "Forsyth Park is the largest and most iconic park in the Historic District, spanning 30 acres of lush greenery. It's a hub of local life, where you'll find people jogging, playing frisbee, or relaxing in the shade. The park's most famous feature is the grand cast-iron fountain at the northern end, installed in 1858 and modeled after the one at the Place de la Concorde in Paris. It's one of the most photographed spots in Savannah.\n\nBeyond the fountain, the park features walking paths, a Fragrant Garden for the blind, sports courts, and a large event space. On Saturdays, a bustling farmers' market takes over the southern end of the park. It's the perfect place for a picnic, a leisurely stroll, or simply to soak in the city's enchanting atmosphere.",
        practicalInfo: {
        howToGetThere: "Located at the southern edge of the Historic District, between Gaston Street and Park Avenue.",
        openingHours: "Daily, 24/7 (Fountain area is well-lit at night)",
        cost: "Free",
        website: "https://www.savannah.com/forsyth-park-in-savannah/"
      }
      },
        {
        name: "Wander Bonaventure Cemetery",
        description: "Made famous by the book and film 'Midnight in the Garden of Good and Evil,' Bonaventure Cemetery is a hauntingly beautiful final resting place. Situated on a scenic bluff overlooking the Wilmington River, this Victorian cemetery is known for its stunning sculptures, historic graves, and avenues of ancient live oaks draped in Spanish moss. It's more of a sculpture garden than a simple graveyard.\n\nNotable graves include those of songwriter Johnny Mercer and poet Conrad Aiken. While the 'Bird Girl' statue from the book cover is no longer here (it's at the Telfair Academy), the cemetery's ethereal atmosphere remains. You can explore on your own or take a guided tour to hear the fascinating stories of the people interred here.",
        practicalInfo: {
        howToGetThere: "330 Bonaventure Rd. It's about a 10-15 minute drive from the Historic District. Ride-sharing services are the easiest way to get there.",
        openingHours: "Daily, 8:00 AM - 5:00 PM",
        cost: "Free admission. Guided tours available for a fee.",
        website: "https://www.bonaventurehistorical.org/"
      }
      },
        {
        name: "Experience River Street",
        description: "Running alongside the Savannah River, River Street is a bustling, energetic promenade with a distinctive historic charm. The street is paved with 200-year-old cobblestones that once served as ballast for ships arriving from Europe. Today, former cotton warehouses have been transformed into a vibrant mix of antique shops, boutiques, pubs, restaurants, and candy stores famous for their pralines.\n\nWatch massive container ships glide by, enjoy a cocktail with a river view, or simply browse the unique shops. The area comes alive at night with live music pouring out of the bars. Don't miss the Waving Girl statue, a tribute to Florence Martus, who greeted ships for over 40 years.",
        practicalInfo: {
        howToGetThere: "Located along the Savannah River at the northern edge of the Historic District. Accessible via steep, historic stone stairs or elevators.",
        openingHours: "Shops and restaurants have varying hours, generally 10:00 AM - 11:00 PM or later.",
        cost: "Free to walk around",
        website: "https://www.savannahswaterfront.com/"
      }
      },
        {
        name: "Tour the Mercer Williams House Museum",
        description: "Another star from 'Midnight in the Garden of Good and Evil,' the Mercer Williams House is a must-see for fans of the book and anyone interested in Savannah's high-society history and scandal. Designed by John S. Norris for General Hugh W. Mercer (great-grandfather of songwriter Johnny Mercer), construction was completed in 1868. It was later purchased and meticulously restored by Jim Williams, the antiques dealer at the center of the famous murder trial.\n\nThe tour focuses on the magnificent 18th and 19th-century furniture and art that Williams collected, showcasing his impeccable taste. While the tour doesn't sensationalize the infamous events, the palpable history and opulent interiors make it a fascinating glimpse into a secretive and elegant world.",
        practicalInfo: {
        howToGetThere: "429 Bull Street on Monterey Square.",
        openingHours: "Varies, generally Mon-Sat 10:00 AM - 5:00 PM, Sun 11:30 AM - 4:30 PM. Check website for tour times.",
        cost: "Approximately $13.50 for adults.",
        website: "https://mercerwilliamshouse.com/"
      }
      },
        {
        name: "Owens-Thomas House & Slave Quarters",
        description: "Considered one of the finest examples of English Regency architecture in America, the Owens-Thomas House offers a powerful and comprehensive look at life in 19th-century Savannah. The tour takes you through the stunning main house, the beautiful parterre garden, and the original carriage house, which includes one of the best-preserved urban slave quarters in the South. This National Historic Landmark provides a crucial, multi-perspective view of history by telling the stories of both the wealthy Owens family and the enslaved people who lived and worked there.\n\nThe thoughtful and honest interpretation of the lives of all residents makes this tour particularly impactful. From the ingenious passive cooling systems in the main house to the stark living conditions in the slave quarters, it's an essential educational experience.",
        practicalInfo: {
        howToGetThere: "124 Abercorn St on Oglethorpe Square.",
        openingHours: "Daily, 10:00 AM - 5:00 PM (Closed Wednesdays).",
        cost: "Included in the Telfair Museums '3-site pass' for ~$25.",
        website: "https://www.telfair.org/visit/owens-thomas/"
      }
      },
        {
        name: "Wormsloe State Historic Site",
        description: "Prepare for a breathtaking entrance. Wormsloe State Historic Site is famed for its spectacular avenue of over 400 live oaks and Spanish moss, which form a mile-and-a-half long tunnel leading to the ruins of a colonial-era estate. This is the postcard image of the romantic South brought to life. The tabby ruins are the oldest standing structure in Savannah, remnants of the fortified home built by Noble Jones, one of Georgia's founding colonists.\n\nBeyond the famous avenue, visitors can explore a museum with artifacts, watch a short film about the site's history, and walk interpretive nature trails that lead past the marsh and through the forest. The site also features costumed interpreters who demonstrate colonial life skills, offering a tangible connection to the past.",
        practicalInfo: {
        howToGetThere: "7601 Skidaway Rd. It's about a 15-20 minute drive from downtown Savannah. A car is required.",
        openingHours: "Daily, 9:00 AM - 4:45 PM",
        cost: "Approximately $10 for adults.",
        website: "https://gastateparks.org/Wormsloe"
      }
      },
        {
        name: "Cathedral Basilica of St. John the Baptist",
        description: "Often called the 'Sistine of the South,' the Cathedral Basilica of St. John the Baptist is an architectural masterpiece and an active Roman Catholic parish. Its towering twin spires are a landmark of the Savannah skyline. Step inside to be awed by the soaring ceilings, intricate gold-leaf detailing, vibrant murals, and stunning Austrian stained-glass windows that depict biblical scenes. Whether you are religious or not, the sheer beauty and craftsmanship of the French Gothic architecture are inspiring.\n\nThe current structure was completed in the late 19th century after the original was destroyed by a fire. It's a peaceful and awe-inspiring sanctuary that offers a quiet respite from the bustling city streets.",
        practicalInfo: {
        howToGetThere: "222 E Harris St on Lafayette Square.",
        openingHours: "Mon-Sat 9:00 AM - 11:45 AM & 1:00 PM - 5:00 PM for self-guided tours. Closed to tourists during mass.",
        cost: "Free admission, donations are appreciated.",
        website: "https://savannahcathedral.org/"
      }
      },
        {
        name: "Telfair Museums: Jepson Center & Telfair Academy",
        description: "Telfair Museums is a collection of three distinct sites that together span centuries of art and architecture. The Telfair Academy, housed in a classical Regency mansion, was the first public art museum in the South. It features 19th- and 20th-century American and European art, including the iconic 'Bird Girl' statue. Next door, the Jepson Center for the Arts is a stunning, modern building that provides a striking contrast. It showcases contemporary art, rotating exhibitions, and an interactive gallery for children.\n\nA single ticket grants access to these two buildings plus the Owens-Thomas House & Slave Quarters, making it an incredible value. This trio offers a comprehensive journey through art history, from classical portraits to cutting-edge contemporary works, all within a few blocks.",
        practicalInfo: {
        howToGetThere: "Located on Telfair Square in the Historic District.",
        openingHours: "Daily, 10:00 AM - 5:00 PM.",
        cost: "A '3-site pass' is approximately $25 for adults.",
        website: "https://www.telfair.org/"
      }
      },
        {
        name: "American Prohibition Museum",
        description: "Take a spirited journey back to the Roaring Twenties at the American Prohibition Museum. Uniquely located in Savannah, this is the only museum in the country dedicated to the history of the 18th Amendment. Through immersive displays, life-size dioramas, and a cast of costumed characters, you'll learn about the temperance movement, bootlegging, notorious gangsters like Al Capone, and the rise of the speakeasy.\n\nThe museum is highly interactive and entertaining, making history fun for all ages. The experience culminates in an authentic-feeling speakeasy where you can order classic, period-appropriate cocktails (for those 21+). It's a fun, educational, and unique attraction you won't find anywhere else.",
        practicalInfo: {
        howToGetThere: "209 W St. Julian Street in City Market.",
        openingHours: "Daily, 10:00 AM - 5:00 PM (last ticket sold at 4:15 PM).",
        cost: "Approximately $16 for adults. Cocktails are extra.",
        website: "https://www.americanprohibitionmuseum.com/"
      }
      },
        {
        name: "City Market",
        description: "For centuries, City Market has been the commercial and social center of Savannah. Today, it's a vibrant four-block open-air marketplace filled with art galleries, boutiques, restaurants, and live music. During the day, it's a great place to shop for local art and souvenirs or grab a casual lunch. At night, the area transforms into one of Savannah's nightlife hotspots, with bars and restaurants buzzing with energy.\n\nThe market has a more casual, festive atmosphere than the refined squares, offering a different but equally essential Savannah experience. It's the perfect place to people-watch, discover a new artist, or enjoy a drink on an outdoor patio.",
        practicalInfo: {
        howToGetThere: "Located on West St. Julian Street, between Franklin and Johnson Squares.",
        openingHours: "Retail stores typically 10:00 AM - 8:00 PM; restaurants and bars open later.",
        cost: "Free to explore.",
        website: "https://www.savannahcitymarket.com/"
      }
      },
        {
        name: "First African Baptist Church",
        description: "Constituted in 1777, the First African Baptist Church is one of the oldest Black churches in North America. This National Historic Landmark is not only a place of worship but a profound monument to African American history and resilience. The current sanctuary, built by the hands of its enslaved congregation members in the 1850s, holds incredible stories.\n\nTours of the church reveal its role as a stop on the Underground Railroad, pointing out the holes in the floorboards in the shape of a Kongo cosmogram, which were used to provide air to escaped slaves hiding in the space below. The original pews, also built by slaves, are another powerful artifact. A tour here is a moving and essential experience for understanding a deeper side of Savannah's history.",
        practicalInfo: {
        howToGetThere: "23 Montgomery St on Franklin Square.",
        openingHours: "Tours are typically offered Tuesday-Saturday at specific times. Check the website or call ahead as hours can vary.",
        cost: "Tour costs approximately $15 for adults (cash preferred).",
        website: "https://www.firstafricanbc.com/"
      }
      },
        {
        name: "Sorrel-Weed House Museum",
        description: "One of Savannah's most architecturally significant and reportedly most haunted homes, the Sorrel-Weed House is a must-visit for lovers of history and mystery. This grand Greek Revival mansion was one of the first two homes in Georgia to be designated a state landmark. The tour explores the opulent main house and the carriage house, delving into the lives of the Sorrel family and the enslaved people who worked there.\n\nThe home is famous for its paranormal activity and has been featured on numerous ghost hunting shows. Whether you take a daytime history tour or a nighttime ghost tour, the impressive architecture, beautifully preserved interiors, and compelling stories of its former residents make for an unforgettable visit.",
        practicalInfo: {
        howToGetThere: "6 W Harris Street on Madison Square.",
        openingHours: "Daily, 10:00 AM - 5:00 PM for history tours. Ghost tours run in the evening.",
        cost: "History tours are ~$14, ghost tours are more.",
        website: "https://www.sorrelweedhouse.com/"
      }
      },
        {
        name: "Leopold's Ice Cream",
        description: "A stop at Leopold's Ice Cream is a quintessential Savannah tradition. This old-fashioned ice cream parlor has been serving up sweet treats since 1919. Founded by three brothers from Greece, the shop has retained its nostalgic charm, complete with a classic soda fountain, black-and-white photos, and original fixtures. The ice cream itself is legendary, made using the same secret, super-premium recipes for over a century.\n\nBe prepared for a line, as this spot is incredibly popular with locals and tourists alike. Try the signature Tutti Frutti flavor, a rum-based ice cream with candied fruit and Georgia pecans, or other classics like Butter Pecan and Chocolate Chewies & Cream. It's a delicious taste of history.",
        practicalInfo: {
        howToGetThere: "212 E Broughton St.",
        openingHours: "Sun-Thurs 12:00 PM - 10:00 PM, Fri-Sat 12:00 PM - 11:00 PM. Hours can vary by season.",
        cost: "Around $5-$8 for a scoop or two.",
        website: "https://www.leopoldsicecream.com/"
      }
      },
        {
        name: "Day Trip to Tybee Island",
        description: "When you need a break from the historic streets, head to 'Savannah's Beach.' Just a 20-30 minute drive from downtown, Tybee Island offers a completely different vibe with its wide sandy beaches, salt marshes, and relaxed, coastal town atmosphere. It's the perfect place to swim, sunbathe, or try some water sports. You can rent a bike and explore the island's laid-back neighborhoods and quiet back roads.\n\nKey attractions on the island include the Tybee Island Light Station and Museum, Georgia's oldest and tallest lighthouse, which you can climb for panoramic views, and the Tybee Island Marine Science Center. It's an easy and refreshing day trip that combines history with seaside relaxation.",
        practicalInfo: {
        howToGetThere: "A 20-30 minute drive east from Savannah via US-80 E. A car is the best way to get there.",
        openingHours: "Beaches are public. Attraction hours vary.",
        cost: "Free to visit the island; paid parking is required everywhere. Lighthouse admission is ~$12.",
        website: "https://visittybee.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Savannah's Historic District is incredibly walkable. For longer distances, the city offers a free DOT shuttle service that connects key visitor areas, including River Street and Forsyth Park. Hop-on-hop-off trolley tours are a popular way to see the sights and learn about the city's history. Ride-sharing services like Uber and Lyft are widely available, and pedicabs are common in the downtown area.",
        whereToStay: "For the most immersive experience, stay in the Historic District, where you'll be within walking distance of most attractions. The River Street area offers hotels with great views but can be noisier. The Victorian District, just south of Forsyth Park, offers charming inns and is a bit quieter. Top hotel choices include The Perry Lane Hotel (Luxury), The Marshall House (Historic/Mid-Range), and The Gastonian (Boutique Inn).",
        bestTimeToVisit: "The best times to visit Savannah are spring (March to May) and fall (September to November). In spring, the city is in full bloom with azaleas, and the weather is pleasant. Fall offers cooler temperatures and lower humidity. Summer (June to August) can be very hot and humid, while winter (December to February) is mild but can be chilly, with fewer crowds.",
        suggestedItinerary: "Day 1: Arrive and explore the northern part of the Historic District. Walk River Street, browse City Market, and visit the American Prohibition Museum. Enjoy dinner with a river view. Day 2: Focus on the southern Historic District. Start at Forsyth Park, tour the Mercer Williams House and the Cathedral of St. John the Baptist. In the afternoon, drive to Bonaventure Cemetery. Consider a ghost tour in the evening. Day 3: Dive into art and culture. Use a Telfair Museums pass to visit the Jepson Center, Telfair Academy, and Owens-Thomas House & Slave Quarters. Grab a scoop at Leopold's before you depart."
      }}
      faqs={[{
          question: "Is Savannah expensive?",
          answer: "Savannah can be considered a moderately priced destination. Accommodation will be your biggest expense, with hotel prices in the Historic District being higher. However, there are many free activities, such as exploring the 22 squares, walking through Forsyth Park, and strolling along River Street. Dining ranges from budget-friendly cafes to high-end restaurants. Overall, it's possible to visit Savannah on a budget, but it can also accommodate a luxury trip."
        },
        {
          question: "How many days do you need in Savannah?",
          answer: "To see the main highlights of the Historic District comfortably, 2 to 3 full days is ideal. This allows you enough time to explore the squares, visit a few historic homes and museums, and enjoy the food scene. If you want to explore at a more relaxed pace, visit more museums, or take a day trip to Tybee Island or Wormsloe, plan for 4 to 5 days."
        },
        {
          question: "Is Savannah safe?",
          answer: "The main tourist areas, including the Historic District, River Street, and City Market, are generally safe, especially during the day. Like any city, it's important to be aware of your surroundings. At night, stick to well-lit, populated streets. Some areas outside the main tourist core can have higher crime rates, so it's best to use a ride-sharing service or pedicab if you're traveling late at night or to an unfamiliar area."
        },
        {
          question: "What is Savannah famous for?",
          answer: "Savannah is famous for its unique city plan with 22 historic public squares, its stunning antebellum architecture, and the iconic live oak trees draped in Spanish moss. It's also known for its rich history, Southern hospitality, and a reputation for being one of America's most haunted cities. Its fame was boosted internationally by the 1994 book 'Midnight in the Garden of Good and Evil,' which highlighted its eccentric characters and mysterious charm."
        }
      ]}
    />
  );
};