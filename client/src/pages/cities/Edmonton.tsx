import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Edmonton: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Edmonton, Canada (2025 Guide)"}
      description={"Welcome to Edmonton, Alberta's vibrant capital, a city where urban energy and untamed nature coexist beautifully. Known as 'Canada's Festival City,' Edmonton's calendar is packed year-round with celebrations of art, music, food, and winter. It's home to North America's largest shopping mall and the continent's largest stretch of urban parkland, the North Saskatchewan River Valley. This unique blend of indoor spectacle and outdoor adventure means there's something for every traveler. Whether you're exploring historic districts, admiring futuristic architecture, or searching for bison just outside the city limits, you'll find an authentic Canadian spirit here. Get ready to discover the energy, culture, and natural beauty that make up the very best things to do in Edmonton. This guide will help you navigate it all."}
      highlights={["West Edmonton Mall",
        "Elk Island National Park",
        "Muttart Conservatory",
        "Fort Edmonton Park",
        "Royal Alberta Museum"]}
      attractions={[
        {
        name: "West Edmonton Mall",
        description: "More than just a shopping center, West Edmonton Mall is a sprawling entertainment complex that holds records for its size and attractions. It’s a destination in itself, boasting over 800 stores, a massive indoor waterpark (World Waterpark), an amusement park with thrilling roller coasters (Galaxyland), an NHL-sized ice rink, an aquarium, and two mini-golf courses. You can easily spend an entire day or more exploring its themed streets, catching a movie, or enjoying a meal at one of over 100 dining venues.\n\nThe sheer scale is what makes WEM a must-see. Where else can you ride a roller coaster in the morning, relax on a wave pool's beach in the afternoon, and shop at high-end boutiques in the evening, all under one roof? It’s an iconic Edmonton experience, especially popular during the cold winter months, providing a tropical or thrilling escape from the weather outside.",
        practicalInfo: {
        howToGetThere: "Located at 8882 170 St NW. Accessible by car with ample free parking, or via numerous public transit bus routes from across the city.",
        openingHours: "Retail: Typically 10 AM - 9 PM (Mon-Sat), 11 AM - 6 PM (Sun). Attraction hours vary significantly; check the website.",
        cost: "Mall entry is free. Attractions are individually priced (e.g., Waterpark/Galaxyland ~$60-70 CAD per person).",
        website: "https://www.wem.ca/"
      }
      },
        {
        name: "Elk Island National Park",
        description: "Just a short drive east of Edmonton, Elk Island National Park is a crucial sanctuary for plains bison and wood bison, playing a key role in their conservation story. This Parks Canada site is a serene escape where you can hike, canoe on Astotin Lake, or simply drive the scenic parkway in search of wildlife. Besides the majestic bison, the park is home to elk, moose, deer, and over 250 species of birds, making it a paradise for photographers and nature lovers. At night, it becomes a Dark Sky Preserve, offering breathtaking views of the stars and northern lights, free from city light pollution.\n\nVisiting Elk Island provides a profound connection to Canada's natural heritage. The experience of seeing a herd of bison roam freely just minutes from a major city is unforgettable. The interpretive trails, like the one around Astotin Lake, are accessible and provide insight into the park's unique ecosystem. It's the perfect day trip for anyone looking to experience the wild beauty of the Canadian prairies.",
        practicalInfo: {
        howToGetThere: "Located on Yellowhead Hwy (AB-16), about 35 minutes east of Edmonton. A personal vehicle is required.",
        openingHours: "Open 24/7, year-round. Visitor Centre hours vary seasonally.",
        cost: "Daily admission fee per adult is ~$9 CAD, or a family/group pass is available. Free with a Parks Canada Discovery Pass.",
        website: "https://www.pc.gc.ca/en/pn-np/ab/elkisland"
      }
      },
        {
        name: "Muttart Conservatory",
        description: "The iconic glass pyramids of the Muttart Conservatory are a stunning feature of Edmonton's river valley skyline. Inside, you'll find four distinct botanical worlds. Three pyramids house permanent biomes: one for arid desert flora, another for lush tropical plants, and a third for the temperate climate. The fourth pyramid hosts creative feature displays that change several times a year, offering a new experience with every visit, from vibrant spring flower shows to festive holiday arrangements.\n\nThis attraction offers a beautiful and educational escape, allowing you to travel through different global climates in a single afternoon. It's a fantastic all-weather destination, providing a warm, green oasis during Edmonton's snowy winters and a beautifully curated garden experience in the summer. The architectural significance of the pyramids combined with the botanical wonders inside makes it a unique and memorable stop.",
        practicalInfo: {
        howToGetThere: "9626 96a St NW, in the river valley. Accessible by car, public transit (bus), or via the river valley trail system.",
        openingHours: "Generally open daily, with late hours on Thursdays. Check the website for specific times.",
        cost: "Adult admission is around $15 CAD.",
        website: "https://www.edmonton.ca/attractions_events/muttart-conservatory"
      }
      },
        {
        name: "Fort Edmonton Park",
        description: "Step back in time at Fort Edmonton Park, Canada's largest living history museum. The park is structured along a historical timeline, allowing you to walk through different eras of Edmonton's development. You can explore an 1846 fur trading fort, wander the streets of an 1885 frontier town, see the city's growth in the 1905 and 1920s streets, and experience the brand new Indigenous Peoples Experience. With costumed interpreters, a working steam train, a vintage midway, and authentic historical buildings, the park brings history to life in an immersive way.\n\nThe park offers a hands-on experience unlike any other. You can ride a streetcar, learn to churn butter, chat with a 'blacksmith,' or watch a silent film in a historic theatre. The Indigenous Peoples Experience is a powerful and essential addition, sharing the rich histories and perspectives of the local First Nations and Métis peoples. It's an educational and entertaining outing for all ages.",
        practicalInfo: {
        howToGetThere: "Located at 7000 143 St NW. Best accessed by car, with paid parking on site. Some bus routes are available.",
        openingHours: "Open seasonally, typically from May to September. Check website for hours and special events.",
        cost: "Adult admission is around $26 CAD.",
        website: "https://www.fortedmontonpark.ca/"
      }
      },
        {
        name: "Royal Alberta Museum",
        description: "The Royal Alberta Museum (RAM) is Western Canada's largest museum, located in the heart of downtown Edmonton's Arts District. It offers a captivating journey through the natural and human history of the province. The Natural History Hall showcases Alberta's diverse landscapes and wildlife, from ancient dinosaurs to modern-day mountain creatures. The Human History Hall shares the stories of Alberta's people, featuring an expansive Indigenous gallery and exhibits on the province's settlement and cultural evolution. There's also a dedicated children's gallery and a Bug Room that's a hit with all ages.\n\nThe museum is celebrated for its modern design and engaging, interactive exhibits. The Indigenous gallery, in particular, is a highlight, developed in consultation with numerous communities to present their stories in their own voices. It's a place of discovery that provides deep context for your visit to Alberta, making it an essential cultural stop.",
        practicalInfo: {
        howToGetThere: "Located at 9810 103a Ave NW, downtown. Easily accessible via LRT (MacEwan Station) and numerous bus routes.",
        openingHours: "Open year-round. Typically closed on Mondays. Check website for current hours.",
        cost: "Adult admission is approximately $21 CAD.",
        website: "https://royalalbertamuseum.ca/"
      }
      },
        {
        name: "Art Gallery of Alberta (AGA)",
        description: "Instantly recognizable for its stunning, modern architecture of zinc, glass, and steel, the Art Gallery of Alberta is the premier visual arts institution in the province. Located on Sir Winston Churchill Square, the AGA's building, designed by Randall Stout, is a work of art in itself, inspired by the North Saskatchewan River and the aurora borealis. Inside, the gallery features a diverse collection of over 6,000 works, with a strong focus on art from Alberta and Western Canada, alongside national and international exhibitions.\n\nVisiting the AGA is an inspiring experience. The gallery spaces are intimate yet impressive, allowing for a personal connection with the art. The programming includes everything from historical Canadian paintings to cutting-edge contemporary installations. It's a cultural hub that offers a quiet and contemplative counterpoint to the city's more high-energy attractions.",
        practicalInfo: {
        howToGetThere: "2 Sir Winston Churchill Square, downtown. Directly accessible by LRT (Churchill Station) and bus.",
        openingHours: "Typically open Wednesday to Sunday. Check website for hours and special exhibition times.",
        cost: "Adult admission is around $14 CAD. Admission is free on the last Thursday of each month from 4-7 PM.",
        website: "https://www.youraga.ca/"
      }
      },
        {
        name: "Edmonton River Valley",
        description: "Edmonton's river valley is its defining natural feature and the largest expanse of urban parkland in North America. It's a green ribbon of parks and trails winding through the heart of the city, offering a year-round playground for outdoor enthusiasts. In the summer, the valley is bustling with cyclists, runners, hikers, and people enjoying picnics or floating down the North Saskatchewan River. In the winter, the trails transform for cross-country skiing and snowshoeing, and outdoor skating rinks pop up.\n\nExploring the river valley is fundamental to the Edmonton experience. You can rent a bike, Segway, or canoe to see it from different perspectives. Key access points like Hawrelak Park, Victoria Park, and Mill Creek Ravine offer beautiful scenery and amenities. The valley also connects many of the city's major attractions, including the Muttart Conservatory and Fort Edmonton Park, making it both a destination and a scenic transportation corridor.",
        practicalInfo: {
        howToGetThere: "Dozens of access points throughout the city. Major parks like Hawrelak and Victoria Park have parking. The trail system is accessible by foot or bike from many neighbourhoods.",
        openingHours: "Open 24/7, year-round.",
        cost: "Free to access.",
        website: "https://www.edmonton.ca/activities_parks_recreation/parks_river_valley"
      }
      },
        {
        name: "High Level Bridge Streetcar",
        description: "For one of the best views of the Edmonton skyline and river valley, take a ride on the High Level Bridge Streetcar. Operated by the Edmonton Radial Railway Society, these beautifully restored historic streetcars travel between Old Strathcona and the downtown core, crossing the iconic High Level Bridge high above the river. The slow, rattling journey is a charming trip into the past, offering unparalleled photo opportunities.\n\nThe volunteer operators are passionate about the streetcars' history and are happy to share stories during the ride. It's a short but incredibly scenic journey that connects two of Edmonton's most vibrant areas. The service runs only in the warmer months, making it a beloved summer tradition for locals and a unique experience for visitors.",
        practicalInfo: {
        howToGetThere: "Terminals are located in Old Strathcona (Gateway Blvd & 84 Ave) and Downtown (Jasper Plaza, near 109 St).",
        openingHours: "Operates seasonally from the May long weekend until early September. Check the schedule online.",
        cost: "A round trip costs approximately $8 CAD.",
        website: "https://www.edmontonstreetcars.ca/"
      }
      },
        {
        name: "Whyte Avenue & Old Strathcona",
        description: "Whyte Avenue is the vibrant, bohemian heart of Edmonton, running through the historic district of Old Strathcona. The area is known for its preserved brick buildings, which now house a lively mix of independent boutiques, quirky shops, record stores, and bookstores. It's also a major entertainment hub, with a dense concentration of pubs, bars, cafes, and restaurants, making it the city's top spot for nightlife. The Old Strathcona Farmers' Market, held every Saturday, is a beloved local institution.\n\nThis neighbourhood is the epicenter of Edmonton's festival scene, hosting the world-renowned Edmonton International Fringe Theatre Festival and other events throughout the year. The combination of historic charm, artistic spirit, and lively energy makes Whyte Avenue a fantastic place to explore on foot, day or night. It's where you'll find unique souvenirs, enjoy a craft beer on a patio, and feel the creative pulse of the city.",
        practicalInfo: {
        howToGetThere: "Whyte Avenue is 82nd Avenue. The main district runs from roughly 99 St to 109 St. It's a major hub for bus routes and a short drive or long walk from downtown.",
        openingHours: "Shops are typically open 10/11 AM to 6/7 PM. Bars and restaurants stay open late.",
        cost: "Free to explore. Costs vary for shopping and dining.",
        website: "https://oldstrathcona.ca/"
      }
      },
        {
        name: "TELUS World of Science - Edmonton",
        description: "A destination for curious minds of all ages, the TELUS World of Science – Edmonton (TWOSE) makes science accessible and fun. The facility features numerous permanent galleries focusing on space, robotics, the human body, and Alberta's environment. The S.P.A.C.E. Gallery includes a planetarium, while the Zeidler Dome theatre offers stunning laser shows and films. The interactive exhibits are designed to be hands-on, encouraging learning through play.\n\nTWOSE is constantly evolving, with a regular rotation of blockbuster traveling exhibitions from around the world, ensuring there's always something new to see. It's also home to an IMAX theatre, which shows both Hollywood blockbusters and breathtaking documentaries. It’s an engaging, educational, and entertaining attraction, perfect for families or anyone with a keen interest in science and technology.",
        practicalInfo: {
        howToGetThere: "Located at 11211 142 St NW. Accessible by car with paid parking, and served by several bus routes.",
        openingHours: "Open daily, check website for hours as they can vary by day and for special events.",
        cost: "General admission for adults is around $24 CAD. IMAX and special exhibits may cost extra.",
        website: "https://twose.ca/"
      }
      },
        {
        name: "Alberta Legislature Building",
        description: "Known affectionately as 'The Ledge,' the Alberta Legislature Building is an architectural masterpiece and the seat of the provincial government. The magnificent Beaux-Arts building, completed in 1913, features marble pillars, a grand rotunda, and beautifully carved oak. Visitors can take free guided tours that delve into Alberta's political history and explain the art and architecture of the building. The surrounding grounds are just as impressive, with beautiful gardens, fountains, and wading pools that are popular with families in the summer.\n\nEven if you're not a political junkie, the sheer beauty of the building and its grounds makes it worth a visit. The free tour offers fascinating insights into the province's history and democratic process. In winter, the grounds are decorated with festive lights, creating a magical atmosphere. It's a peaceful and picturesque spot in the heart of the city.",
        practicalInfo: {
        howToGetThere: "10800 97 Ave NW, overlooking the river valley. Accessible by LRT (Grandinin/Government Centre Station) and bus.",
        openingHours: "Building is open daily. Free guided tours are offered throughout the day; check the schedule online.",
        cost: "Free.",
        website: "https://www.assembly.ab.ca/visit"
      }
      },
        {
        name: "Neon Sign Museum",
        description: "This unique outdoor museum is a glowing tribute to Edmonton's commercial history. Located on the side of the TELUS building and the Mercer Warehouse on 104th Street, the Neon Sign Museum features a collection of over 20 historic neon signs that have been beautifully restored. Each sign tells a story of a bygone business, from old movie theatres to long-closed diners. The museum is best viewed at dusk or after dark when the signs are fully illuminated, casting a vibrant, nostalgic glow on the street.\n\nIt's a fantastic, free attraction that captures a piece of the city's soul. The collection is curated by the City of Edmonton and is continually growing as more signs are restored. It's a perfect stop during an evening stroll through the downtown 4th Street Promenade, which is known for its great restaurants and shops.",
        practicalInfo: {
        howToGetThere: "Located on the east side of 104th Street at 104th Avenue NW, downtown.",
        openingHours: "Accessible 24/7. Best viewed after sunset.",
        cost: "Free.",
        website: "https://www.edmonton.ca/attractions_events/neon-sign-museum"
      }
      },
        {
        name: "University of Alberta Botanic Garden",
        description: "Located a short drive from the city, the University of Alberta Botanic Garden is a stunning 240-acre oasis of cultivated gardens and natural areas. Highlights include the Kurimoto Japanese Garden, a serene and beautiful space for contemplation, and the Aga Khan Garden, a magnificent 4.8-hectare garden inspired by Moghul architecture, featuring fountains, geometric pools, and fragrant plantings. There are also extensive collections of roses, peonies, lilacs, and alpine plants.\n\nThe garden is a place of beauty and tranquility. It's perfect for a relaxing stroll, a picnic, or for gardeners seeking inspiration. The scale and diversity of the collections are impressive, and the special events held throughout the season, like 'Date Night' and concerts, add to the appeal. It's a bit of a drive, but well worth the effort for a peaceful escape from the city.",
        practicalInfo: {
        howToGetThere: "51227 AB-60, Parkland County. About 15 minutes southwest of Edmonton. A personal vehicle is recommended.",
        openingHours: "Open seasonally from May to October. Hours vary, check the website.",
        cost: "Adult admission is approximately $20 CAD.",
        website: "https://botanicgarden.ualberta.ca/"
      }
      },
        {
        name: "Edmonton Valley Zoo",
        description: "Situated in the scenic river valley, the Edmonton Valley Zoo is a beloved local attraction focused on conservation and education. The zoo is home to over 350 animals from around the world, with a particular focus on species from northern climates. Popular residents include the red pandas, snow leopards, arctic wolves, and Lucy the elephant. The exhibits are designed to be intimate, allowing for close-up views and educational experiences.\n\nThe zoo has undergone significant redevelopment in recent years, with updated habitats like the 'Entry Plaza and Wander' for lemurs and the Arctic Shores exhibit. It's a manageable size, making it easy to see everything in a few hours, which is ideal for families with young children. The combination of its beautiful location and its commitment to animal welfare makes it a worthwhile visit.",
        practicalInfo: {
        howToGetThere: "13315 Buena Vista Road, in the river valley. Accessible by car or bus.",
        openingHours: "Open year-round, with hours varying by season. Check online for details.",
        cost: "Adult admission is around $15 CAD.",
        website: "https://www.edmonton.ca/attractions_events/edmonton-valley-zoo"
      }
      },
        {
        name: "Rogers Place & ICE District",
        description: "Rogers Place is the state-of-the-art home of the NHL's Edmonton Oilers and a premier venue for major concerts and events. The arena's stunning architecture has become a new landmark in the downtown core. Even if you're not attending a game or show, it's worth seeing from the outside. Surrounding the arena is the ICE District, one of Canada's largest mixed-use sports and entertainment districts. It's a vibrant, modern hub with restaurants, bars, a public plaza with a giant screen, and luxury hotels.\n\nThe energy in the ICE District on a game night is electric. It represents the modern, ambitious side of Edmonton. You can visit for a pre-game dinner, catch a free event in the plaza, or simply walk through to admire the contemporary urban design. Taking a public tour of Rogers Place offers a fascinating behind-the-scenes look at the facility.",
        practicalInfo: {
        howToGetThere: "10220 104 Ave NW, downtown. Easily accessible via LRT (MacEwan Station) and bus. Parking is available but expensive on event nights.",
        openingHours: "Varies by event. The surrounding district is always accessible.",
        cost: "Free to walk around the district. Event and tour prices vary.",
        website: "https://www.rogersplace.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Edmonton Transit Service (ETS) operates a network of buses and a Light Rail Transit (LRT) system that connects the downtown core with the south, north, and west ends. Ride-sharing services like Uber and Turo are widely available. For exploring downtown and Old Strathcona, walking is highly recommended. Cycling is also a great option, especially within the extensive river valley trail system.",
        whereToStay: "For first-time visitors, Downtown is ideal for its proximity to attractions like the Royal Alberta Museum, Art Gallery of Alberta, and Rogers Place. For nightlife and a bohemian vibe, stay in or near Old Strathcona (Whyte Avenue). West Edmonton is the best choice if your primary goal is to visit West Edmonton Mall. Hotel recommendations include the Fairmont Hotel Macdonald for luxury, Metterra Hotel on Whyte for a boutique experience, and the Fantasyland Hotel for a unique stay inside the mall.",
        bestTimeToVisit: "Summer (June to August) is peak season, with long daylight hours, warm weather, and a packed festival schedule, including the Fringe Festival and Heritage Festival. This is the best time for outdoor activities. Winter (December to February) is cold and snowy but offers its own magic with winter festivals like the Silver Skate Festival, ice skating, and cozy indoor attractions. The shoulder seasons of spring (April-May) and fall (September-October) offer pleasant weather, fewer crowds, and lower prices.",
        suggestedItinerary: "Day 1: Downtown Discovery. Start at the Royal Alberta Museum in the morning. In the afternoon, explore Sir Winston Churchill Square, visit the Art Gallery of Alberta, and take a free tour of the Legislature Building. In the evening, see the Neon Sign Museum and have dinner in the 4th Street Promenade or ICE District.\nDay 2: History & Nature. Spend the morning at Fort Edmonton Park. In the afternoon, rent a bike or go for a walk in the adjacent river valley. Cross the river to visit the iconic Muttart Conservatory pyramids. Enjoy the nightlife on Whyte Avenue in the evening.\nDay 3: Shopping & Fun. Head to Old Strathcona for Saturday's Farmers' Market and to explore the boutiques on Whyte Avenue. In the afternoon, make your way to West Edmonton Mall for shopping, the World Waterpark, or Galaxyland amusement park."
      }}
      faqs={[{
          question: "Is Edmonton expensive?",
          answer: "Compared to other major Canadian cities like Vancouver or Toronto, Edmonton is generally considered more affordable. Costs for accommodation, dining, and transportation are typically lower. While attraction tickets can add up, many of the city's best experiences, such as exploring the river valley, visiting the Neon Sign Museum, or touring the Legislature grounds, are free. Overall, you can have a high-quality visit without the high price tag of Canada's coastal cities."
        },
        {
          question: "How many days do you need in Edmonton?",
          answer: "A trip of 3 to 4 days is ideal for a first-time visitor. This allows enough time to experience the main highlights, such as West Edmonton Mall, a museum or two, the river valley, and the Whyte Avenue area, without feeling rushed. If you want to include a full-day trip to Elk Island National Park or explore more festivals and neighbourhoods, extending your stay to 5 days would be comfortable."
        },
        {
          question: "Is Edmonton safe?",
          answer: "Edmonton is a generally safe city, but like any major urban center, it's wise to take standard precautions. Tourist-heavy areas like Whyte Avenue, West Edmonton Mall, and the river valley are safe. Some parts of the downtown core can be challenging, particularly at night, so it's best to stay aware of your surroundings, avoid walking alone late at night in deserted areas, and keep valuables out of sight. The public transit system is widely used and safe."
        },
        {
          question: "What is Edmonton famous for?",
          answer: "Edmonton is famous for several key things: being 'Canada's Festival City' due to its year-round calendar of events; the vast North Saskatchewan River Valley, the largest stretch of urban parkland in North America; West Edmonton Mall, a massive shopping and entertainment complex; and its role as a gateway to the north. It is also a major hub for arts and culture in Alberta, with prominent institutions like the Royal Alberta Museum and the Art Gallery of Alberta."
        }
      ]}
    />
  );
};