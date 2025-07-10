import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Adelaide: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Adelaide, Australia (2025 Guide)"
      description="Effortlessly blending urban sophistication with a relaxed, small-town charm, Adelaide is a gem of a city nestled between rolling hills and the sparkling Gulf St Vincent. Renowned as one of Australia’s Great Wine Capitals, its cellar doors are as accessible as its vibrant cultural institutions and pristine beaches. The city’s genius grid layout, encircled by lush parklands, makes it exceptionally walkable and easy to explore. From the sensory overload of the bustling Central Market to the tranquil beauty of its Botanic Garden, Adelaide offers a diverse and enriching experience. Whether you're a foodie, a wine connoisseur, an art lover, or an outdoor enthusiast, you'll find an incredible array of the best things to do in Adelaide. This guide will help you uncover the captivating spirit of South Australia’s capital, a city that delights at every turn."
      highlights={[
      "Adelaide Central Market",
      "Barossa Valley Wine Region",
      "Kangaroo Island",
      "Art Gallery of South Australia",
      "Adelaide Botanic Garden"
]}
      attractions={[
      {
            "name": "Adelaide Central Market",
            "description": "A buzzing, vibrant institution since 1869, the Adelaide Central Market is the culinary heart of the city. With over 70 stalls under one roof, it’s a sensory explosion of fresh produce, gourmet cheeses, artisanal breads, quality meats, and international delicacies. It’s not just a place to shop; it’s a cultural experience where locals and tourists alike gather to eat, drink, and socialize. You can join a guided tour to meet the producers or simply wander the aisles, grabbing a coffee from Lucia's Pizza & Spaghetti Bar and a pastry from a local baker.\n\nMore than just a market, it reflects the multicultural fabric of South Australia. The sheer variety is astounding, from kangaroo salami to French patisseries and authentic Asian groceries. It’s the perfect spot to assemble a picnic to enjoy in the nearby parklands or to simply soak up the energetic atmosphere.",
            "practicalInfo": {
                  "howToGetThere": "Located on Grote Street in the CBD. Easily accessible by foot, tram (Victoria Square stop), or the free City Connector bus.",
                  "openingHours": "Open Tuesday to Saturday. Hours vary, but generally Tue 7am-5:30pm, Wed-Thu 9am-5:30pm, Fri 7am-9pm, Sat 7am-3pm. Closed Sunday and Monday.",
                  "cost": "Free to enter. Costs vary for food and tours.",
                  "website": "https://adelaidecentralmarket.com.au/"
            }
      },
      {
            "name": "Barossa Valley Wine Region",
            "description": "Just an hour's drive from Adelaide, the Barossa Valley is one of the world's most acclaimed wine regions, famous for its bold Shiraz. Home to over 150 wineries and 80 cellar doors, it offers a tasting experience for every palate, from historic estates like Seppeltsfield and Yalumba to boutique, family-run vineyards. The landscape is a picturesque patchwork of rolling hills, ancient vines, and charming villages, making for a scenic drive.\n\nBeyond wine, the Barossa is a haven for food lovers. Visit the Barossa Farmers Market on a Saturday morning, dine at world-class restaurants like Hentley Farm, or explore Maggie Beer's Farm Shop. You can explore via a guided tour, by bike along the dedicated cycle path, or at your own pace with a designated driver. It's an essential day trip that showcases the best of South Australian produce.",
            "practicalInfo": {
                  "howToGetThere": "Approximately a 60-75 minute drive northeast of Adelaide CBD. Best explored by car or on a guided bus tour.",
                  "openingHours": "Most cellar doors are open daily, typically 10am-5pm. It's wise to book tastings in advance, especially on weekends.",
                  "cost": "Tasting fees vary, often from $10-$25 AUD, which is sometimes waived with a wine purchase.",
                  "website": "https://www.barossa.com/"
            }
      },
      {
            "name": "Kangaroo Island",
            "description": "A pristine natural sanctuary, Kangaroo Island (or 'KI' as locals call it) is a must-see for wildlife lovers. This vast island is teeming with native Australian animals in their natural habitats. You can walk among a colony of sea lions at Seal Bay, spot koalas snoozing in eucalyptus trees, and see kangaroos, wallabies, and echidnas roaming free. The island's landscapes are just as stunning, from the rugged coastal scenery and unique rock formations of Remarkable Rocks and Admirals Arch in Flinders Chase National Park to serene, white-sand beaches like Vivonne Bay.\n\nKI is also a burgeoning foodie destination, with local honey, gin distilleries, and fresh seafood. Due to its size, a trip to KI is best done over at least two days. It’s a true escape into the wild and offers an unforgettable Australian wildlife experience.",
            "practicalInfo": {
                  "howToGetThere": "Accessible via a 45-minute SeaLink ferry from Cape Jervis (a 2-hour drive from Adelaide) or a 30-minute flight from Adelaide Airport (ADL) to Kingscote (KGC).",
                  "openingHours": "National Parks are generally accessible 24/7, but visitor centers have specific hours.",
                  "cost": "Ferry and flight costs vary. A Kangaroo Island Parks Pass is required for entry to key sites.",
                  "website": "https://www.tourkangarooisland.com.au/"
            }
      },
      {
            "name": "Art Gallery of South Australia",
            "description": "Located on the elegant North Terrace cultural boulevard, the Art Gallery of South Australia houses one of the country's most significant art collections. Its beautiful Victorian facade opens into a modern, light-filled space showcasing a vast collection spanning Australian, European, and Asian art. The gallery is particularly renowned for its collection of Australian art, including iconic colonial pieces, Aboriginal and Torres Strait Islander art, and contemporary works.\n\nThe collection is impressively diverse, with everything from Renaissance paintings and Rodin sculptures to an extensive display of decorative arts. The gallery also hosts major international exhibitions and engaging public programs. It's a peaceful and inspiring place to spend a few hours, offering a deep dive into art and culture, completely free of charge.",
            "practicalInfo": {
                  "howToGetThere": "On North Terrace in the CBD, a short walk from Rundle Mall. Accessible via tram, train (Adelaide Railway Station), and bus.",
                  "openingHours": "Open daily 10am-5pm. Closed Christmas Day.",
                  "cost": "Free for general admission. Charges may apply for special exhibitions.",
                  "website": "https://www.agsa.sa.gov.au/"
            }
      },
      {
            "name": "Adelaide Botanic Garden",
            "description": "An exquisite 51-hectare oasis in the heart of the city, the Adelaide Botanic Garden is a beautiful blend of historical significance and stunning horticulture. Established in 1857, it features a diverse collection of plants from Australia and around the world. Highlights include the magnificent Bicentennial Conservatory, the largest single-span conservatory in the Southern Hemisphere, which houses a lush lowland rainforest environment. The Palm House, a beautifully restored Victorian glasshouse, is another must-see.\n\nWander through the International Rose Garden, find tranquility in the Garden of Health, or explore the Australian Forest. It’s a perfect spot for a leisurely stroll, a picnic, or simply to escape the city bustle. The garden also hosts events, educational tours, and a fantastic restaurant.",
            "practicalInfo": {
                  "howToGetThere": "Located on the eastern edge of the CBD, with main gates on North Terrace. Easily walkable from the city center.",
                  "openingHours": "Opens 7:15am on weekdays, 9am on weekends and public holidays. Closing times vary seasonally (from 5:30pm in winter to 7pm in summer).",
                  "cost": "Free entry.",
                  "website": "https://www.botanicgardens.sa.gov.au/visit/adelaide-botanic-garden"
            }
      },
      {
            "name": "Glenelg Beach",
            "description": "Adelaide's most popular city beach, Glenelg is a vibrant seaside suburb that offers the perfect mix of sun, sand, and entertainment. The white sandy beach is ideal for swimming and sunbathing, while the bustling Jetty Road is packed with cafes, restaurants, and boutique shops. Take a stroll along the historic jetty for beautiful views of the coastline, especially at sunset.\n\nGlenelg is not just about the beach. The area is rich in history as the site of South Australia's original mainland settlement in 1836. You can explore this history at the Bay Discovery Centre. For a bit of fun, look for the resident dolphins that often play near the shore, or join a catamaran cruise to see them up close. It's a lively and fun day out for everyone.",
            "practicalInfo": {
                  "howToGetThere": "A 25-minute tram ride from Victoria Square in the CBD directly to Moseley Square, Glenelg.",
                  "openingHours": "Beach is accessible 24/7. Shops and restaurants have their own hours.",
                  "cost": "Free to visit. Public transport fares apply.",
                  "website": "https://www.holdfast.sa.gov.au/discover-our-bay"
            }
      },
      {
            "name": "South Australian Museum",
            "description": "Adjacent to the Art Gallery on North Terrace, the South Australian Museum is home to the world's largest collection of Australian Aboriginal cultural material. The multi-level Australian Aboriginal Cultures Gallery is a powerful and essential experience, offering profound insights into the history and living cultures of Australia's First Peoples. The museum's collection is vast and varied, covering natural history, ancient Egypt, Pacific cultures, and South Australia's own biodiversity.\n\nDon't miss the giant squid and the impressive collection of opals and meteorites in the Mawson Gallery. With its interactive displays and fascinating exhibits, the museum is engaging for all ages, providing a comprehensive look at the natural and cultural world.",
            "practicalInfo": {
                  "howToGetThere": "Located on North Terrace, easily accessible by public transport or on foot from the CBD.",
                  "openingHours": "Open daily 10am-5pm. Closed Good Friday and Christmas Day.",
                  "cost": "Free for general admission. Special exhibitions may have a fee.",
                  "website": "https://www.samuseum.sa.gov.au/"
            }
      },
      {
            "name": "Adelaide Oval",
            "description": "Widely regarded as one of the most picturesque sporting grounds in the world, Adelaide Oval is an iconic landmark. While it's a hallowed ground for cricket and Australian Rules Football fans, you don't need to attend a game to experience its magic. The behind-the-scenes tours offer fascinating access to restricted areas, including the historic scoreboard, players' changerooms, and the media center. You'll hear stories of sporting legends and learn about the Oval's rich history and recent redevelopment.\n\nFor the adventurous, the RoofClimb Adelaide Oval offers breathtaking 360-degree views of the city, coastline, and Adelaide Hills from the stadium's unique roofline. Whether you're a sports fanatic or just love great views and architecture, a visit to the Adelaide Oval is a memorable experience.",
            "practicalInfo": {
                  "howToGetThere": "A short walk across the River Torrens from the CBD via the picturesque Riverbank Footbridge.",
                  "openingHours": "Tours run on most non-event days. Check the website for schedules. The RoofClimb operates daily.",
                  "cost": "Tour prices start around $25 AUD for adults. The RoofClimb is significantly more expensive.",
                  "website": "https://www.adelaideoval.com.au/"
            }
      },
      {
            "name": "Adelaide Hills",
            "description": "A beautiful, cool-climate region just a 20-minute drive from the city, the Adelaide Hills feel like a world away. This area is characterized by its winding roads, charming villages, lush scenery, and a thriving food and wine scene. It's known for producing excellent Sauvignon Blanc, Chardonnay, and Pinot Noir, with numerous cellar doors offering intimate tasting experiences. Beyond wine, you'll find craft breweries, cideries, and cheese makers scattered throughout the hills.\n\nKey towns to visit include Stirling, with its leafy streets and monthly market, and the historic German village of Hahndorf. A drive up to Mount Lofty Summit provides the best panoramic views over Adelaide. The Hills are perfect for a scenic drive, a gourmet food trail, or a relaxing escape into nature.",
            "practicalInfo": {
                  "howToGetThere": "Best explored by car. Public buses also service some of the main towns like Stirling and Hahndorf.",
                  "openingHours": "Wineries and shops are generally open 10am-5pm daily.",
                  "cost": "Free to drive through. Costs for food, wine, and attractions vary.",
                  "website": "https://www.adelaidehills.org.au/"
            }
      },
      {
            "name": "Cleland Wildlife Park",
            "description": "For an immersive Australian wildlife experience without leaving the city's doorstep, head to Cleland Wildlife Park in the Adelaide Hills. This park offers a more natural setting than a traditional zoo, with many animals roaming freely in large enclosures. The highlight for many visitors is the opportunity to get up close to kangaroos, wallabies, and emus, and to hold a koala (one of the few places in Australia where this is permitted).\n\nFollow the discovery trails to see wombats, dingoes, Tasmanian devils, and various bird species. The keepers give informative talks throughout the day, providing insights into the animals' behaviors and conservation efforts. It's a fantastic and educational day out for families and animal lovers.",
            "practicalInfo": {
                  "howToGetThere": "A 20-minute drive from the CBD into the Adelaide Hills. Limited public transport is available.",
                  "openingHours": "Open daily 9:30am-5pm (no entry after 4:30pm). Koala holding has specific times.",
                  "cost": "Admission is around $30 AUD for adults. Koala holding is an additional fee.",
                  "website": "https://www.clelandwildlifepark.sa.gov.au/"
            }
      },
      {
            "name": "National Wine Centre of Australia",
            "description": "If you don't have time for a full-day trip to a wine region, the National Wine Centre offers a fantastic alternative right in the city. Located next to the Botanic Garden, this stunning architectural building provides a comprehensive overview of Australia's wine industry. The interactive 'Wine Discovery Journey' exhibit is a great starting point to learn about the history of winemaking, different grape varietals, and the science behind the process.\n\nThe real highlight is the tasting room, which features one of Australia's largest tasting experiences. Using a clever card system, you can sample from a selection of over 120 different Australian wines, from iconic brands to boutique labels. It's an educational and enjoyable way to explore the diversity of Australian wine.",
            "practicalInfo": {
                  "howToGetThere": "On Hackney Road, at the eastern edge of the CBD, adjacent to the Adelaide Botanic Garden.",
                  "openingHours": "Open daily 11am-5pm.",
                  "cost": "Free entry to the building and exhibition. Wine tasting is pay-as-you-go via a top-up card.",
                  "website": "https://www.nationalwinecentre.com.au/"
            }
      },
      {
            "name": "Port Adelaide",
            "description": "Discover Adelaide's maritime heart in the historic district of Port Adelaide. This area is rich with 19th-century colonial architecture, fascinating museums, and a unique, slightly gritty charm. Visit the South Australian Maritime Museum and the National Railway Museum to delve into the state's transport history. The streets are also becoming a canvas for vibrant street art, making for an interesting walk.\n\nA major attraction is the Port River, which is home to a surprisingly large population of dolphins. You can often spot them from the wharf, but the best way to see them is on a guided kayak tour or a river cruise. With a growing number of quirky cafes, pubs, and galleries, 'The Port' is an area undergoing a cool revitalization.",
            "practicalInfo": {
                  "howToGetThere": "A 25-minute drive or train ride from Adelaide CBD.",
                  "openingHours": "Museums and shops have their own hours, generally 10am-5pm.",
                  "cost": "Free to explore the area. Entry fees apply for museums and tours.",
                  "website": "https://www.cityofpae.sa.gov.au/explore/port-adelaide"
            }
      },
      {
            "name": "Hahndorf",
            "description": "Nestled in the Adelaide Hills, Hahndorf is Australia's oldest surviving German settlement. Walking down its main street feels like stepping back in time, with original 'Fachwerk' buildings, bakeries selling traditional pretzels and strudel, and pubs pouring German beer. The town was founded by Lutheran migrants in 1839, and it has retained a strong sense of its unique heritage.\n\nExplore the small craft shops, art galleries, and museums that line the street. Enjoy a hearty German meal at the Hahndorf Inn or The German Arms Hotel. For something different, visit the Beerenberg Farm to pick your own strawberries (in season) or browse their famous jams and preserves. It's a charming and popular destination that offers a unique cultural slice of the Adelaide Hills.",
            "practicalInfo": {
                  "howToGetThere": "A 30-minute drive from Adelaide CBD. Public buses are also available.",
                  "openingHours": "Most shops and cafes are open daily, typically 10am-5pm.",
                  "cost": "Free to visit. Costs for food and shopping vary.",
                  "website": "https://hahndorfsa.org.au/"
            }
      },
      {
            "name": "Adelaide Gaol",
            "description": "For a dose of dark history, step inside the Adelaide Gaol, one of the state's oldest public buildings. Operating from 1841 to 1988, the gaol housed over 300,000 prisoners and was the site of 45 executions. Today, you can explore the cold stone cells, courtyards, and eerie execution towers on a self-guided tour or a guided history tour.\n\nThe gaol has a reputation for being one of Australia's most haunted sites. For those who enjoy a thrill, the ghost tours offered after dark are a popular and spooky experience, recounting tales of paranormal activity and the spirits of former inmates said to still roam the halls. It provides a chilling and fascinating look into South Australia's penal history.",
            "practicalInfo": {
                  "howToGetThere": "Located on Gaol Road, just west of the CBD, near the Thebarton Tram Depot.",
                  "openingHours": "Open daily 10am-4pm for self-guided tours. Ghost tours run on select evenings.",
                  "cost": "Admission is around $15 AUD for adults for daytime entry. Ghost tours are more expensive.",
                  "website": "https://www.adelaidegaol.sa.gov.au/"
            }
      },
      {
            "name": "Rundle Mall",
            "description": "Rundle Mall is Adelaide's premier pedestrian shopping precinct and the vibrant commercial hub of the city. Stretching between King William Street and Pulteney Street, it's home to major department stores, international brands, local boutiques, and several charming arcades, like the historic Adelaide Arcade. It’s more than just a shopping strip; it’s a place to meet, eat, and be entertained, with buskers and public art installations dotted along its length.\n\nBe sure to take a photo with the mall's famous sculptures: a group of four life-sized bronze pigs named Truffles, Horatio, Oliver, and Augusta, and the iconic 'Spheres' sculpture, colloquially known as the 'Mall's Balls'. Whether you're in the mood for serious retail therapy or just want to soak up the city's daily life, Rundle Mall is the place to be.",
            "practicalInfo": {
                  "howToGetThere": "In the heart of the Adelaide CBD. All major public transport routes lead here.",
                  "openingHours": "Standard retail hours, typically 9am-5:30pm, with late-night shopping on Friday until 9pm and shorter hours on weekends.",
                  "cost": "Free to browse.",
                  "website": "https://www.rundlemall.com/"
            }
      }
]}
      logistics={{
      "gettingAround": "Adelaide is known as a '20-minute city' and is very easy to navigate. The CBD is highly walkable. Adelaide Metro offers a network of buses, trains, and trams. A free City Connector bus loops around the CBD and North Adelaide. The tram is particularly useful, running from the entertainment centre, through the city, and all the way to Glenelg beach. Ride-sharing services like Uber and Didi are widely available.",
      "whereToStay": "For first-time visitors, the CBD is ideal for its central location and proximity to attractions, with options ranging from the luxury Mayfair Hotel and Sofitel Adelaide to mid-range chains. North Adelaide offers a quieter, more boutique experience with charming heritage buildings. For a beach holiday, stay in Glenelg, with hotels like the Oaks Glenelg Plaza Pier offering fantastic ocean views.",
      "bestTimeToVisit": "The best times to visit Adelaide are during Autumn (March to May) and Spring (September to November). The weather is mild and pleasant, perfect for exploring the city and nearby wine regions. March is particularly vibrant, known as 'Mad March' due to major events like the Adelaide Festival, Fringe Festival, and WOMADelaide. Summer (December to February) can be very hot but is great for beach activities. Winter (June to August) is cool and can be wet, but it's a cozy time to visit the Barossa.",
      "suggestedItinerary": "A simple 3-day itinerary: \nDay 1: City & Culture. Start at Adelaide Central Market for breakfast. Walk the North Terrace cultural boulevard, visiting the South Australian Museum and Art Gallery. Explore Rundle Mall and finish with a stroll through the Adelaide Botanic Garden. \nDay 2: Hills & Wildlife. Drive to the Adelaide Hills. Visit Mount Lofty Summit for views, then get up close with wildlife at Cleland Wildlife Park. Spend the afternoon in the charming German town of Hahndorf. \nDay 3: Wine or Coast. Take a full-day guided tour to the Barossa Valley for world-class wine tasting and gourmet food. Alternatively, for a more relaxed day, take the tram to Glenelg Beach for swimming, shopping, and a seaside lunch."
}}
      faqs={[
      {
            "question": "Is Adelaide expensive?",
            "answer": "Compared to other major Australian cities like Sydney and Melbourne, Adelaide is generally more affordable. Costs for accommodation, dining out, and transport are noticeably lower. There are also many free activities, including entry to the Art Gallery, South Australian Museum, Botanic Garden, and exploring the city's parklands and beaches. Of course, costs can add up with wine tours and fine dining, but it's a city where you can have a great experience on a reasonable budget."
      },
      {
            "question": "How many days do you need in Adelaide?",
            "answer": "To get a good feel for the city and its immediate surroundings, 3 to 4 days is an ideal amount of time. This allows you to explore the CBD's cultural highlights, visit the Adelaide Hills, and take a day trip to a major wine region like the Barossa Valley. If you plan to visit Kangaroo Island, you should add at least 2 extra days, as it requires significant travel time and is best explored at a relaxed pace."
      },
      {
            "question": "Is Adelaide safe?",
            "answer": "Adelaide is considered a very safe city, with low crime rates and a friendly, relaxed atmosphere. The city center is well-lit and generally safe to walk around at night. However, like any city, it's always wise to take standard precautions: be aware of your surroundings, especially late at night in quieter areas, and keep your valuables secure. Overall, visitors should feel very comfortable and safe exploring Adelaide."
      },
      {
            "question": "What is Adelaide famous for?",
            "answer": "Adelaide is most famous for its world-class wine regions that are incredibly accessible from the city, particularly the Barossa Valley (Shiraz), McLaren Vale, and the Adelaide Hills. It's also known as the 'Festival City' for hosting a vibrant calendar of international arts and music events, especially during 'Mad March'. Furthermore, it's celebrated for its incredible food scene, centered around the Adelaide Central Market, and its well-planned city design, which is completely surrounded by green parklands."
      }
]}
    />
  );
};