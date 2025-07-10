import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Victoria: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Victoria, Canada (2025 Guide)"}
      description={"Welcome to Victoria, the charming capital of British Columbia, where garden-city vibes meet rugged coastal beauty. Known as Canada's 'most British city,' Victoria boasts stunning Victorian architecture, a picturesque harbour bustling with life, and an abundance of green spaces. Perched on the southern tip of Vancouver Island, it offers a perfect blend of historic sites, outdoor adventure, and a thriving culinary scene. Whether you're sipping afternoon tea at a grand hotel, exploring the world-famous Butchart Gardens, or scanning the horizon for orcas, you'll quickly fall for its laid-back yet sophisticated atmosphere. This guide will walk you through all the very best things to do in Victoria, ensuring a memorable visit to this enchanting seaside city."}
      highlights={["The Butchart Gardens",
        "Royal BC Museum",
        "Inner Harbour",
        "Whale Watching Tour",
        "Craigdarroch Castle"]}
      galleryImages={[
        { url: "", alt: "Victoria landmark 1", caption: "Victoria landmark 1 - placeholder" },
        { url: "", alt: "Victoria landmark 2", caption: "Victoria landmark 2 - placeholder" },
        { url: "", alt: "Victoria landmark 3", caption: "Victoria landmark 3 - placeholder" },
        { url: "", alt: "Victoria landmark 4", caption: "Victoria landmark 4 - placeholder" },
        { url: "", alt: "Victoria landmark 5", caption: "Victoria landmark 5 - placeholder" },
        { url: "", alt: "Victoria landmark 6", caption: "Victoria landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "The Butchart Gardens",
        description: "A world-renowned horticultural masterpiece, The Butchart Gardens is a non-negotiable stop on any Victoria itinerary. What began over a century ago as a limestone quarry has been transformed into a 55-acre wonderland of lush greens and vibrant blooms. Visitors can wander through a series of distinct gardens, including the stunning Sunken Garden, the formal Italian Garden, the tranquil Japanese Garden, and the fragrant Rose Garden.\n\nEach season offers a completely different experience, from the explosion of colour in spring and summer to the subtle beauty of autumn and the magical Christmas light display in winter. The sheer scale and meticulous design make it a paradise for photographers, nature lovers, and anyone with an appreciation for beauty.",
        practicalInfo: {
        howToGetThere: "Located in Brentwood Bay, about a 30-minute drive from downtown Victoria. Accessible by car, public bus (Route 75), or dedicated shuttle services.",
        openingHours: "Varies seasonally; typically opens at 9:00 AM. Check the website for specific closing times.",
        cost: "Seasonal pricing applies, typically $20-$40 CAD for adults. Check the website for current rates.",
        website: "https://www.butchartgardens.com/"
      }
      },
        {
        name: "Royal BC Museum",
        description: "Consistently ranked among the best museums in Canada, the Royal BC Museum offers a captivating journey through British Columbia's natural and human history. The exhibits are incredibly immersive, allowing you to walk through a life-sized recreation of an early 20th-century town, stand in the presence of a towering woolly mammoth, and explore the rich cultures of the region's First Nations peoples.\n\nThe museum also features a Natural History gallery detailing the diverse ecosystems of BC, from the coastal rainforests to the northern Rockies. Alongside its permanent collections, it hosts world-class temporary exhibitions and is home to an impressive IMAX theatre.",
        practicalInfo: {
        howToGetThere: "Centrally located in the Inner Harbour at 675 Belleville Street, easily walkable from downtown hotels.",
        openingHours: "Generally 10:00 AM - 6:00 PM daily. Hours can vary.",
        cost: "Approximately $30 CAD for adults. Discounts for seniors, youth, and children.",
        website: "https://royalbcmuseum.bc.ca/"
      }
      },
        {
        name: "Inner Harbour",
        description: "The Inner Harbour is the vibrant heart of Victoria. Flanked by the majestic British Columbia Parliament Buildings and the iconic Fairmont Empress hotel, this bustling waterfront is a hub of activity year-round. Stroll along the scenic causeway, watch seaplanes take off and land, and enjoy performances by street musicians and artists.\n\nFrom here, you can catch a water taxi, embark on a whale watching tour, or simply find a bench and soak in the stunning views. The area truly comes alive in the summer with festivals and markets, and it's beautifully illuminated at night, making it a perfect spot for an evening walk.",
        practicalInfo: {
        howToGetThere: "The central point of downtown Victoria, located at the intersection of Government Street and Belleville Street.",
        openingHours: "Open 24/7, with vendor and activity hours varying.",
        cost: "Free to walk around and enjoy.",
        website: "https://www.tourismvictoria.com/see-do/neighbourhoods/inner-harbour"
      }
      },
        {
        name: "Whale Watching Tour",
        description: "The waters surrounding Victoria are teeming with marine life, making it one of the best places in the world for whale watching. Embark on an adventure into the Salish Sea in search of majestic orcas (killer whales), humpback whales, minke whales, and grey whales. Along the way, you're also likely to spot sea lions, seals, porpoises, and a variety of seabirds.\n\nTour operators offer excursions on everything from high-speed Zodiacs to larger, more comfortable covered vessels. Knowledgeable marine biologists on board provide fascinating commentary about the wildlife and local ecology, making it an educational and thrilling experience.",
        practicalInfo: {
        howToGetThere: "Numerous tour operators depart directly from the Inner Harbour.",
        openingHours: "Tours run multiple times daily, typically from April to October.",
        cost: "Around $120-$160 CAD per person for a 3-hour tour.",
        website: "Varies by operator (e.g., Prince of Whales, Eagle Wing Tours)."
      }
      },
        {
        name: "Craigdarroch Castle",
        description: "Step back into the Gilded Age at Craigdarroch Castle, a stunning example of Victorian architecture and a designated National Historic Site. This legendary 'bonanza castle' was built in the late 1880s for wealthy coal baron Robert Dunsmuir. The self-guided tour takes you through 39 meticulously restored rooms, showcasing intricate woodwork, beautiful stained-glass windows, and lavish period furnishings.\n\nAs you climb the four floors to the tower, you'll get a glimpse into the opulent lifestyle of the Dunsmuir family and enjoy panoramic views of Victoria and the Olympic Mountains. It's a fascinating look at the city's history and the stories of those who built it.",
        practicalInfo: {
        howToGetThere: "Located at 1050 Joan Crescent, a short drive or a 30-minute walk from the Inner Harbour.",
        openingHours: "Typically 10:00 AM - 4:30 PM. Check website for seasonal variations.",
        cost: "Around $20 CAD for adults.",
        website: "https://thecastle.ca/"
      }
      },
        {
        name: "Fisherman's Wharf",
        description: "A short, scenic walk or harbour ferry ride from the Inner Harbour leads you to the quirky and colourful Fisherman's Wharf. This unique marine destination is famous for its floating homes, food kiosks, and resident harbour seals who often pop up looking for a treat from the fish 'n' chip shops.\n\nGrab some fresh seafood from Barb's Fish & Chips, enjoy an ice cream, and wander the docks admiring the creative and whimsical houseboats. It's a lively, fun-filled spot that offers a different, more casual vibe than the formal Inner Harbour.",
        practicalInfo: {
        howToGetThere: "Located at 12 Erie Street. Accessible via a 15-minute walk from the Inner Harbour or a quick ride on the Victoria Harbour Ferry.",
        openingHours: "Businesses operate seasonally, generally busiest from May to September.",
        cost: "Free to visit; cost varies for food and activities.",
        website: "https://gvha.ca/marinas/fishermans-wharf/"
      }
      },
        {
        name: "Beacon Hill Park",
        description: "Beacon Hill Park is Victoria's premier urban green space, a sprawling 200-acre park just a short walk from downtown. It's a perfect blend of manicured gardens, wild woodlands, and stunning coastal views. Wander through the beautiful flower beds, watch the ducks and swans in the ponds, and visit the charming Beacon Hill Children's Farm, famous for its goat stampede.\n\nDon't miss a walk to the southern edge of the park to see the world's fourth-tallest totem pole and enjoy breathtaking views across the Strait of Juan de Fuca to the Olympic Mountains in Washington State.",
        practicalInfo: {
        howToGetThere: "Located on the southern edge of downtown Victoria. Easily walkable.",
        openingHours: "Park is open 24/7. Children's Farm has specific seasonal hours.",
        cost: "Free. The Children's Farm accepts donations.",
        website: "https://www.victoria.ca/parks-recreation/parks-trails/parks/beacon-hill-park"
      }
      },
        {
        name: "British Columbia Parliament Buildings",
        description: "Dominating the Inner Harbour with their grand neo-baroque architecture, the British Columbia Parliament Buildings are an iconic Victoria landmark. During the day, you can join a free guided tour to learn about the province's legislative process and admire the stunning interior, including the dome, stained glass, and historical paintings.\n\nBy night, the buildings are outlined with over 3,000 light bulbs, creating a magical and romantic spectacle that reflects beautifully in the harbour waters. The expansive front lawn is also a popular spot for photos, picnics, and public events.",
        practicalInfo: {
        howToGetThere: "Located at 501 Belleville Street in the Inner Harbour.",
        openingHours: "Weekdays, typically 8:30 AM - 4:30 PM for tours. Check website for schedule. Grounds are always accessible.",
        cost: "Free.",
        website: "https://www.leg.bc.ca/learn-about-us/visiting-the-legislature"
      }
      },
        {
        name: "Abkhazi Garden",
        description: "Often called 'the garden that love built,' Abkhazi Garden is a hidden gem that tells a beautiful story. It was created by Prince and Princess Abkhazi, who, after being separated by WWII, reunited and settled in Victoria. Over 40 years, they cultivated an exquisite one-acre garden that masterfully utilizes the natural landscape of rock and oak trees.\n\nWinding paths lead you through lush rhododendrons, Japanese maples, and carpets of alpine flowers, all with a subtle Asian influence. It's a tranquil and romantic escape from the city bustle, complete with a charming teahouse for light lunch or afternoon tea.",
        practicalInfo: {
        howToGetThere: "Located at 1964 Fairfield Road. A short drive or bus ride from downtown.",
        openingHours: "Open seasonally, typically from March to October. 11:00 AM - 5:00 PM.",
        cost: "Admission is by donation.",
        website: "https://www.abkhaziteahouse.com/"
      }
      },
        {
        name: "Miniature World",
        description: "A delightful and surprisingly captivating attraction, Miniature World takes you on a journey through history and fantasy on a tiny scale. Located in the Fairmont Empress hotel, this family-friendly museum features over 85 intricately detailed dioramas and displays. \n\nYou can explore everything from the battlefields of history and the great Canadian railway to fairytale lands and the futuristic world of Space 2201. The incredible attention to detail in 'The World's Tiniest Operational Sawmill' and the grand 'Camelot' display makes it a charming experience for all ages.",
        practicalInfo: {
        howToGetThere: "Located inside the Fairmont Empress at 649 Humboldt Street.",
        openingHours: "Varies by season, generally open daily. Check website for specific times.",
        cost: "Around $19 CAD for adults.",
        website: "https://miniatureworld.com/"
      }
      },
        {
        name: "Hatley Park National Historic Site",
        description: "Home to the magnificent Hatley Castle, this historic site is a must-see for fans of architecture, gardens, and film. The castle, an Edwardian mansion completed in 1908, may look familiar as it has served as a filming location for numerous movies, including the X-Men series (as Professor Xavier's School for Gifted Youngsters) and Deadpool.\n\nWhile the castle itself is part of Royal Roads University and can only be entered on a guided tour, the surrounding Hatley Park is open to the public. You can freely explore the stunning formal gardens, which include an Italian Garden, a Japanese Garden, and a Rose Garden.",
        practicalInfo: {
        howToGetThere: "Located in Colwood, a 25-minute drive from downtown Victoria.",
        openingHours: "Gardens are open daily from 10:00 AM to dusk. Castle tours have a specific schedule.",
        cost: "Free to visit the gardens. A fee applies for guided castle tours.",
        website: "https://hatleypark.ca/"
      }
      },
        {
        name: "Fan Tan Alley in Chinatown",
        description: "Explore the oldest Chinatown in Canada and discover its most famous thoroughfare: Fan Tan Alley. Holding the record as the narrowest commercial street in Canada, the alley is so slender you can touch both walls at once. Historically home to gambling dens and opium factories, today it's lined with quirky boutiques, artisan shops, and art galleries.\n\nWalking through Fan Tan Alley and the surrounding vibrant streets of Chinatown, marked by the impressive Gate of Harmonious Interest, is a unique cultural experience. Look for the traditional architecture, colourful lanterns, and hidden courtyards that tell the story of this historic neighborhood.",
        practicalInfo: {
        howToGetThere: "Located in Chinatown, between Fisgard Street and Pandora Avenue. Easily walkable from downtown.",
        openingHours: "Alley is always open; shop hours vary.",
        cost: "Free to explore.",
        website: "https://www.tourismvictoria.com/see-do/neighbourhoods/chinatown"
      }
      },
        {
        name: "Ogden Point Breakwater",
        description: "For a refreshing seaside walk with spectacular views, head to the Ogden Point Breakwater. This 1.6-kilometer (1-mile) round trip concrete walkway stretches straight out into the ocean, offering panoramic vistas of the Strait of Juan de Fuca, the Olympic Mountains, and the Victoria skyline. It's a popular spot for locals and tourists alike to watch cruise ships arrive, spot marine life, and enjoy a dramatic sunset.\n\nThe breakwater is also a renowned cold-water diving site, with a vibrant underwater world depicted in murals along the walkway. Be prepared for windy conditions, but the views are more than worth it.",
        practicalInfo: {
        howToGetThere: "Located at 12 Dallas Road in the James Bay neighborhood, a 30-minute walk or short drive from the Inner Harbour.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://gvha.ca/cruise/ogden-point/"
      }
      },
        {
        name: "Government House",
        description: "The official residence of the Lieutenant Governor of British Columbia, Government House is a place of history and stunning horticulture. While the house itself is not open to the public except on special occasions, its magnificent 36-acre grounds are free to explore and are considered some of the finest gardens in the province.\n\nThe meticulously maintained gardens include formal rose gardens, an English country garden, herb gardens, and native Garry Oak woodlands. It's a peaceful and beautiful place for a stroll, offering a glimpse into the ceremonial heart of British Columbia away from the main tourist crowds.",
        practicalInfo: {
        howToGetThere: "Located at 1401 Rockland Avenue, a short drive from downtown.",
        openingHours: "Gardens are open daily from dawn to dusk.",
        cost: "Free.",
        website: "https://ltgov.bc.ca/government-house/"
      }
      },
        {
        name: "Fort Rodd Hill and Fisgard Lighthouse National Historic Sites",
        description: "Discover over a century of Canadian West Coast military history at Fort Rodd Hill, a coastal artillery fort built in the late 1890s to defend Victoria and the Esquimalt Naval Base. Visitors can explore original gun batteries, underground magazines, and command posts while enjoying scenic ocean views.\n\nAdjacent to the fort and connected by a causeway is the Fisgard Lighthouse, the first lighthouse built on Canada's west coast. Step inside the historic building to see exhibits about the life of a lightkeeper and the maritime heritage of the area. It's a fantastic combination of military history and iconic coastal scenery.",
        practicalInfo: {
        howToGetThere: "Located in Colwood, about a 20-minute drive from downtown Victoria.",
        openingHours: "Open daily, typically 10:00 AM - 5:00 PM. Check website as hours vary seasonally.",
        cost: "Around $9 CAD for adults; free for youth under 18.",
        website: "https://parks.canada.ca/lhn-nhs/bc/fortroddhill"
      }
      }
      ]}
      logistics={{
        gettingAround: "Victoria's downtown core is very walkable. For longer distances, BC Transit offers an extensive and reliable bus service. Taxis and ride-sharing services like Uber and Lyft are readily available. For a scenic trip around the harbour, the charming Victoria Harbour Ferry water taxis are a great option. Cycling is also popular, with many dedicated bike lanes.",
        whereToStay: "The Inner Harbour and Downtown areas are ideal for first-time visitors, putting you within walking distance of major attractions. Top hotels include the Fairmont Empress and the Hotel Grand Pacific. James Bay, just south of the legislature, offers a quieter, more residential feel with lovely B&Bs. For a trendier vibe, check out the Fernwood neighborhood.",
        bestTimeToVisit: "The best time to visit Victoria is during the summer (June to August) for warm, sunny weather and long days, although this is also peak season. The shoulder seasons of spring (April to May) and fall (September to October) are excellent alternatives, with pleasant weather, blooming gardens or fall colours, and fewer crowds. Winter is mild but often rainy.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: Explore the Inner Harbour. Visit the Royal BC Museum in the morning, tour the BC Parliament Buildings, and enjoy Afternoon Tea at the Fairmont Empress. Stroll the causeway in the evening.\nDay 2: Gardens & Grandeur. Take a morning trip to The Butchart Gardens. In the afternoon, visit the historic Craigdarroch Castle and explore the nearby Government House gardens.\nDay 3: Coastal Charm & Creatures. Start at Fisherman's Wharf, then walk through Beacon Hill Park. In the afternoon, embark on a thrilling whale watching tour from the Inner Harbour."
      }}
      faqs={[{
          question: "Is Victoria expensive?",
          answer: "Victoria can be moderately expensive, similar to other major Canadian cities. Accommodation and dining in the downtown core, especially during the peak summer season, are the biggest expenses. However, you can save money by visiting during the shoulder season (spring or fall), utilizing the efficient public transit system, and enjoying the many free attractions like Beacon Hill Park, the Inner Harbour causeway, and various public gardens."
        },
        {
          question: "How many days do you need in Victoria?",
          answer: "A stay of 2 to 3 full days is ideal for seeing Victoria's main attractions without feeling rushed. This allows enough time for the Inner Harbour, The Butchart Gardens, and a museum or castle visit. If you want to explore more of the surrounding area, go on extended hikes, or take a day trip to other parts of Vancouver Island, consider staying 4 to 5 days."
        },
        {
          question: "Is Victoria safe?",
          answer: "Yes, Victoria is generally a very safe city for residents and tourists. The downtown area is well-lit and busy, even at night. However, like any city, it's wise to use common sense. Be aware of your surroundings, especially in less crowded areas after dark, and keep your valuables secure. The vast majority of visitors experience a trouble-free stay."
        },
        {
          question: "What is Victoria famous for?",
          answer: "Victoria is famous for several key things: its stunning gardens, most notably the world-renowned Butchart Gardens; its distinct British colonial heritage, visible in its Victorian architecture, double-decker buses, and the tradition of afternoon tea; its beautiful and bustling Inner Harbour, flanked by the Parliament Buildings and Fairmont Empress hotel; and for being a world-class destination for whale watching."
        }
      ]}
    />
  );
};