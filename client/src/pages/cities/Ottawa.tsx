import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Ottawa: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Ottawa, Canada (2025 Guide)"}
      description={"Welcome to Ottawa, Canada's captivating capital city! More than just a political hub, Ottawa is a vibrant mosaic of culture, history, and stunning natural beauty. Perched on the banks of the Ottawa River, the city boasts world-class museums, grand Victorian architecture, and sprawling green spaces. Whether you're skating on the world's largest outdoor rink in winter, admiring millions of tulips in spring, or cycling along scenic pathways in summer, you'll find endless charm. It’s a city that effortlessly balances stately grandeur with a friendly, relaxed atmosphere. Planning your visit starts with exploring the very best things to do in Ottawa, from the iconic Parliament Hill to the bustling stalls of ByWard Market. This guide will take you through the must-see sights and hidden gems that make Ottawa an unforgettable destination for any traveler."}
      highlights={["Parliament Hill",
        "Rideau Canal National Historic Site",
        "Canadian Museum of History",
        "National Gallery of Canada",
        "ByWard Market"]}
      attractions={[
        {
        name: "Parliament Hill",
        description: "No trip to Ottawa is complete without visiting Parliament Hill, the heart of Canada's federal government. The stunning Gothic Revival-style complex, dominated by the iconic Peace Tower, sits majestically above the Ottawa River. While the Centre Block undergoes extensive renovations, visitors can still take free guided tours of the House of Commons in the West Block and the Senate in the former train station. \n\nBe sure to explore the expansive grounds, admire the statues of key Canadian figures, and witness the daily Changing of the Guard ceremony in the summer. In the evening, the 'Northern Lights' sound and light show projected onto the Parliament Buildings is a spectacular, free event that tells Canada's story in a visually stunning way.",
        practicalInfo: {
        howToGetThere: "Located at Wellington St, downtown Ottawa. Easily accessible by foot from most downtown hotels, or via OC Transpo bus routes.",
        openingHours: "Grounds are always open. Tour times vary and require booking in advance. Northern Lights show runs nightly in summer.",
        cost: "Free for grounds access, tours, and the Northern Lights show.",
        website: "https://visit.parl.ca/sites/Visit/default/en_CA"
      }
      },
        {
        name: "Rideau Canal National Historic Site",
        description: "A UNESCO World Heritage Site, the Rideau Canal is a historic waterway that winds its way through the heart of Ottawa. In the warmer months, it's a scenic route for boating, kayaking, and canoeing, with beautiful pathways alongside for walking, jogging, and cycling. Take a boat cruise to learn about its fascinating construction and history.\n\nDuring winter, the canal transforms into the world's largest naturally frozen skating rink, the Rideau Canal Skateway. Spanning 7.8 kilometers (4.8 miles), it's a quintessential Ottawa experience. You can rent skates and enjoy a BeaverTail pastry—a classic Canadian treat—from one of the many stalls along the ice.",
        practicalInfo: {
        howToGetThere: "The canal runs through downtown Ottawa. Access points are numerous, including near Parliament Hill, the National Arts Centre, and Dows Lake.",
        openingHours: "Pathways are open 24/7. Skateway season is weather-dependent (typically January-March). Boat tours have seasonal schedules.",
        cost: "Free to access. Rentals for skates, bikes, or boats are extra.",
        website: "https://parks.canada.ca/lhn-nhs/on/rideau"
      }
      },
        {
        name: "Canadian Museum of History",
        description: "Located just across the river in Gatineau, Quebec, with stunning views of Parliament Hill, the Canadian Museum of History is Canada's most-visited museum. Its magnificent Grand Hall showcases the history, culture, and beliefs of Canada's Pacific First Nations with the world's largest indoor collection of totem poles. The Canadian History Hall is an immersive journey through 15,000 years of history, from the earliest human presence to modern day.\n\nThe museum also houses the Canadian Children's Museum, a hands-on adventure where kids can explore the world through interactive exhibits, and a CINÉ+ theatre with a giant dome screen. The building's architecture, designed by Douglas Cardinal, is a masterpiece in itself, meant to evoke the Canadian landscape.",
        practicalInfo: {
        howToGetThere: "100 Laurier St, Gatineau. A short walk across the Alexandra Bridge from Ottawa or accessible via the Aqua-Taxi in summer.",
        openingHours: "Typically 9:00 AM - 5:00 PM, with extended hours on Thursdays. Check website for seasonal changes.",
        cost: "Around $22 for adults. Free admission on Thursdays from 5:00 PM - 7:00 PM.",
        website: "https://www.historymuseum.ca/"
      }
      },
        {
        name: "National Gallery of Canada",
        description: "Instantly recognizable by the giant 'Maman' spider sculpture at its entrance, the National Gallery of Canada is a must-see for art lovers. Its striking glass and granite building houses the nation's premier collection of Canadian and Indigenous art, alongside significant works from European and American masters. The Rideau Chapel, a stunning 19th-century chapel interior, was painstakingly reassembled inside the gallery.\n\nThe gallery provides a comprehensive look at the evolution of Canadian art, from the Group of Seven to contemporary artists. The large, light-filled galleries and beautiful interior gardens create a serene atmosphere for appreciating centuries of creativity.",
        practicalInfo: {
        howToGetThere: "380 Sussex Drive, Ottawa. Located near ByWard Market and a short walk from Parliament Hill.",
        openingHours: "Usually 10:00 AM - 5:00 PM. Closed Mondays (except in summer). Free admission on Thursday evenings.",
        cost: "Around $20 for adults for the permanent collection. Special exhibitions may have an additional fee.",
        website: "https://www.gallery.ca/"
      }
      },
        {
        name: "ByWard Market",
        description: "One of Canada's oldest and largest public markets, the ByWard Market is the bustling heart of Ottawa's culinary and nightlife scene. By day, the outdoor stalls are filled with fresh produce, flowers, and artisanal goods, while the main market building houses specialty food vendors, butchers, and cheese shops. It's the perfect place to grab a BeaverTail pastry or sample local maple syrup.\n\nAs evening falls, the area transforms. The surrounding streets are packed with over 100 restaurants, pubs, and cafes, offering a diverse range of dining options. From casual pubs to upscale dining, the energy is infectious. It's a fantastic place to wander, shop for souvenirs, and soak up the local atmosphere any time of day.",
        practicalInfo: {
        howToGetThere: "Located just east of Parliament Hill, bordered by Sussex Drive and Rideau Street. Easily walkable from downtown.",
        openingHours: "Outdoor market stalls are typically open 9:00 AM - 5:00 PM. Restaurants and bars have their own hours, many open late.",
        cost: "Free to browse. Prices for food and goods vary.",
        website: "https://www.byward-market.com/"
      }
      },
        {
        name: "Canadian War Museum",
        description: "The Canadian War Museum offers a profound and moving exploration of Canada's military history. The museum's striking architecture, with its regenerative theme, is symbolic of both conflict and hope. Inside, four main galleries chronicle Canada's involvement in conflicts from early history to modern peacekeeping missions.\n\nThe collection includes an impressive array of tanks, artillery, and aircraft, as well as personal stories and artifacts that bring history to life. The Regeneration Hall offers a space for quiet reflection, framing a single window that perfectly aligns with the Peace Tower on Parliament Hill. It's a powerful and educational experience that provides deep insight into the events that have shaped Canada.",
        practicalInfo: {
        howToGetThere: "1 Vimy Place, on the Ottawa River west of Parliament Hill. Accessible via bus or a scenic walk along the river pathway.",
        openingHours: "Typically 9:30 AM - 5:00 PM, with extended hours on Thursdays. Closed Mondays in the off-season.",
        cost: "Around $20 for adults. Free admission on Thursdays from 5:00 PM - 7:00 PM.",
        website: "https://www.warmuseum.ca/"
      }
      },
        {
        name: "Canadian Museum of Nature",
        description: "Housed in a magnificent castle-like building, the Canadian Museum of Nature is a delight for all ages. The museum's permanent galleries explore Canada's diverse natural world through fossils, minerals, mammals, birds, and even a complete blue whale skeleton. The Dinosaur Gallery is a major highlight, featuring impressive skeletons and interactive displays.\n\nOther notable exhibits include the Water Gallery, which explores the aquatic world, and the Earth Gallery, showcasing a dazzling collection of gems and minerals. The museum effectively combines education with entertainment, making it an engaging and informative outing for families and curious minds.",
        practicalInfo: {
        howToGetThere: "240 McLeod St, Centretown. Accessible by several bus routes or a pleasant walk from downtown.",
        openingHours: "Generally 9:30 AM - 4:00 PM. Extended hours on Thursdays. Check website for current hours.",
        cost: "Around $18 for adults. Free admission on Thursdays from 5:00 PM - 8:00 PM.",
        website: "https://nature.ca/"
      }
      },
        {
        name: "Peace Tower",
        description: "Standing as the iconic centerpiece of Parliament Hill, the Peace Tower is more than just a bell and clock tower; it's a memorial to Canada's commitment to peace. Ascend to the top via an elevator for an unparalleled 360-degree view of Ottawa, Gatineau, and the surrounding landscape. The observation deck provides the best vantage point for appreciating the city's layout and natural beauty.\n\nOn the way up or down, be sure to visit the Memorial Chamber, a solemn room dedicated to Canadians who have died in military service since Confederation. The room contains the Books of Remembrance, which list the names of the fallen. The tower also houses a 53-bell carillon, which is played daily, filling the air with music.",
        practicalInfo: {
        howToGetThere: "Located in the Centre Block on Parliament Hill. Access is part of the Parliament tours, which must be booked in advance.",
        openingHours: "Tied to Parliament tour schedules. Free tickets are required and can be reserved online.",
        cost: "Free.",
        website: "https://visit.parl.ca/sites/Visit/default/en_CA/Tours"
      }
      },
        {
        name: "Notre-Dame Cathedral Basilica",
        description: "Located across from the National Gallery of Canada, the Notre-Dame Cathedral Basilica is a stunning example of Gothic Revival architecture. As the oldest and largest church in Ottawa, its twin spires are a prominent feature of the city's skyline. The exterior is impressive, but the interior is truly breathtaking.\n\nStep inside to discover a world of intricate wood carvings, beautiful stained-glass windows, and a soaring blue ceiling adorned with thousands of gold stars. The detailed craftsmanship is evident throughout, from the ornate altar to the grand organ. Whether you're attending a service or simply visiting to admire the art and architecture, it's a peaceful and awe-inspiring sanctuary.",
        practicalInfo: {
        howToGetThere: "385 Sussex Drive, Ottawa. Adjacent to the National Gallery and ByWard Market.",
        openingHours: "Open daily for visitors, but hours may be restricted during services. Check the website for mass schedules.",
        cost: "Free to enter, but donations are welcomed.",
        website: "https://www.notredameottawa.com/"
      }
      },
        {
        name: "Diefenbunker: Canada's Cold War Museum",
        description: "For a truly unique experience, venture to the Diefenbunker, a massive four-story underground bunker built during the Cold War. This once-secret facility was designed to house key members of the Canadian government and military in the event of a nuclear attack. Today, it serves as a fascinating museum and National Historic Site.\n\nTake a guided tour or explore on your own to see the Prime Minister's Suite, the War Cabinet Room, the CBC radio studio, and the vault designed to hold the Bank of Canada's gold reserves. The authentic atmosphere provides a chilling glimpse into the paranoia and planning of the Cold War era. It's a historical deep-dive unlike any other.",
        practicalInfo: {
        howToGetThere: "3929 Carp Road, Carp. Located about a 30-40 minute drive west of downtown Ottawa. A car is recommended.",
        openingHours: "Open daily, typically 10:00 AM - 4:00 PM. Booking tickets in advance is recommended.",
        cost: "Around $20 for adults. Family rates are available.",
        website: "https://diefenbunker.ca/"
      }
      },
        {
        name: "Rideau Hall",
        description: "Explore the official residence and workplace of the Governor General of Canada at Rideau Hall. This historic site, surrounded by a beautiful 79-acre urban oasis, is often called 'Canada's house'. Free guided tours of the state rooms are available, where you can see where Canadian and foreign dignitaries are welcomed and honored.\n\nThe grounds are just as impressive as the residence. Stroll through the lush gardens, see the ceremonial trees planted by visiting heads of state, and in the winter, enjoy skating on the historic outdoor rink. It's a wonderful opportunity to learn about Canada's system of government in a beautiful, park-like setting.",
        practicalInfo: {
        howToGetThere: "1 Sussex Drive, Ottawa. A pleasant walk from downtown, or accessible by bus.",
        openingHours: "Grounds are open daily 8:00 AM to one hour before sunset. Tour times vary by season and should be checked online.",
        cost: "Free.",
        website: "https://www.gg.ca/en/visit-us/rideau-hall"
      }
      },
        {
        name: "Gatineau Park",
        description: "Just a 15-minute drive from downtown Ottawa, Gatineau Park is a massive 361-square-kilometer conservation park that serves as the region's natural playground. The park offers year-round outdoor activities. In summer, enjoy hundreds of kilometers of hiking and biking trails, swim in clear lakes like Meech Lake and Philippe Lake, or have a picnic with a view.\n\nThe Champlain Lookout provides one of the most spectacular panoramic views of the Ottawa Valley, especially during the fall when the foliage is ablaze with color. In winter, the park transforms into a paradise for cross-country skiing, snowshoeing, and winter hiking. It's the perfect escape from the city for nature lovers.",
        practicalInfo: {
        howToGetThere: "Main entrance is in Chelsea, Quebec. A car is the easiest way to explore the park, though some areas are accessible by public transit in summer.",
        openingHours: "Park is open 24/7. Visitor Centre has specific hours. Some roads are closed in winter.",
        cost: "Free to enter. Fees apply for parking at beaches, trail access in winter, and camping.",
        website: "https://ncc-ccn.gc.ca/places/gatineau-park"
      }
      },
        {
        name: "Royal Canadian Mint",
        description: "Discover the art and science behind coin production at the Royal Canadian Mint. This historic facility in Ottawa is responsible for producing Canada's collector and investment coins, as well as medals and medallions. The guided tour offers a fascinating look at the craftsmanship involved in creating these intricate pieces.\n\nYou'll see artisans at work, learn about the minting process from design to finished product, and even get to hold a solid gold bar worth hundreds of thousands of dollars. The on-site boutique offers a wide selection of unique coins and souvenirs, making it a great stop for those looking for a special memento of their trip.",
        practicalInfo: {
        howToGetThere: "320 Sussex Drive, Ottawa. Located near the National Gallery and ByWard Market.",
        openingHours: "Tours run daily, typically from 10:00 AM - 5:00 PM. Booking in advance is highly recommended as tours fill up.",
        cost: "Around $10 for adults on weekdays, slightly more on weekends.",
        website: "https://www.mint.ca/en/visit-the-mint/ottawa"
      }
      },
        {
        name: "National Arts Centre (NAC)",
        description: "As Canada's premier performing arts venue, the National Arts Centre is a cultural hub that presents a diverse lineup of performances year-round. Situated alongside the Rideau Canal, its recently renovated, modern glass facade is a stunning architectural feature in the city's core. The NAC is home to four stages and hosts over 600 performances each year.\n\nThe programming includes world-class music, theatre, and dance, featuring the NAC Orchestra, as well as national and international touring companies. Even if you don't catch a show, you can enjoy a free tour of the building or dine at one of its excellent restaurants with canal views. It's the perfect destination for a sophisticated evening out.",
        practicalInfo: {
        howToGetThere: "1 Elgin Street, Ottawa. Located in the heart of downtown, next to Confederation Square.",
        openingHours: "Box office and building hours vary. Performance times are typically in the evening.",
        cost: "Ticket prices vary widely by performance. Building tours are often free.",
        website: "https://nac-cna.ca/"
      }
      },
        {
        name: "Canada Aviation and Space Museum",
        description: "Located at a former military air base, the Canada Aviation and Space Museum is a dream for flight enthusiasts. It houses an extensive collection of over 130 military and civilian aircraft, from the early days of flight to the modern jet age. Highlights include a replica of the Silver Dart, which made the first powered flight in Canada, and a collection of iconic WWII fighters like the Spitfire and Messerschmitt.\n\nThe space exploration section is equally compelling, featuring the original Canadarm from the Space Shuttle Endeavour. The museum offers helicopter rides for a bird's-eye view of Ottawa and has flight simulators for a hands-on experience. It's an engaging and spacious museum that tells the story of Canada's contributions to aviation and space.",
        practicalInfo: {
        howToGetThere: "11 Aviation Parkway, Ottawa. Located east of the city center. Accessible by car or OC Transpo bus.",
        openingHours: "Typically 10:00 AM - 5:00 PM. Closed Tuesdays in the off-season.",
        cost: "Around $18 for adults.",
        website: "https://ingeniumcanada.org/aviation"
      }
      }
      ]}
      logistics={{
        gettingAround: "Ottawa's downtown core is very walkable. For longer distances, OC Transpo operates a reliable bus network and the O-Train light rail system. Biking is popular, with extensive pathways along the rivers and canal; bike rentals are widely available. Ride-sharing services like Uber and Lyft are also common.",
        whereToStay: "For first-time visitors, staying in Downtown or the ByWard Market provides easy access to major attractions. The Glebe offers a charming, village-like atmosphere with trendy shops and restaurants. Centretown is a good central option. Hotel recommendations include the Fairmont Château Laurier (Luxury), The Andaz Ottawa ByWard Market (Mid-Range), and The Carleton Suite Hotel (Value).",
        bestTimeToVisit: "Ottawa is a year-round destination. Summer (June-August) is warm and perfect for festivals, including Canada Day on July 1st. Spring (May) is famous for the Canadian Tulip Festival. Fall (September-October) offers stunning autumn colours, especially in Gatineau Park. Winter (December-February) is cold but magical, with the Rideau Canal Skateway and the Winterlude festival.",
        suggestedItinerary: "Day 1: Explore Parliament Hill, including a tour and the Peace Tower. Wander through ByWard Market for lunch. In the afternoon, visit the National Gallery of Canada and Notre-Dame Cathedral. Day 2: Experience the Rideau Canal (skate, walk, or boat cruise). Cross over to Gatineau to visit the Canadian Museum of History. Enjoy dinner in the ByWard Market. Day 3: Choose your museum adventure: visit the Canadian War Museum, the Canadian Museum of Nature, or drive out to the Diefenbunker for a unique Cold War experience. In the evening, catch a show at the National Arts Centre."
      }}
      faqs={[{
          question: "Is Ottawa expensive?",
          answer: "Ottawa is moderately expensive, but generally more affordable than Toronto or Vancouver. Accommodation and dining can be pricey in peak season. However, many of the best attractions, including Parliament Hill tours, strolling ByWard Market, and accessing the Rideau Canal, are free. Many national museums also offer free admission on Thursday evenings, making it possible to visit on a budget."
        },
        {
          question: "How many days do you need in Ottawa?",
          answer: "A trip of 3 to 4 days is ideal for visiting Ottawa. This allows enough time to explore Parliament Hill, visit 2-3 major museums, experience the ByWard Market and the Rideau Canal, and perhaps take a short trip to Gatineau Park without feeling rushed. A weekend trip is feasible but will be packed."
        },
        {
          question: "Is Ottawa safe?",
          answer: "Yes, Ottawa is considered a very safe city, with low crime rates compared to other North American capitals. The downtown and tourist areas are well-policed and generally safe to walk around day and night. As with any city, it's wise to take standard precautions like being aware of your surroundings and securing your valuables."
        },
        {
          question: "What is Ottawa famous for?",
          answer: "Ottawa is most famous for being Canada's capital city and home to Parliament Hill. It is also renowned for the Rideau Canal, which becomes the world's largest skating rink in winter (a UNESCO World Heritage Site), its impressive collection of national museums, and major annual festivals like the Canadian Tulip Festival in spring and Winterlude in winter."
        }
      ]}
    />
  );
};