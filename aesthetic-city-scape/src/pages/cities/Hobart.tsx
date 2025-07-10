import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Hobart: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Hobart, Australia (2025 Guide)"
      description="Nestled between the towering peak of kunanyi/Mount Wellington and the deep waters of the River Derwent, Hobart is a captivating blend of heritage charm, modern culture, and untamed wilderness. As Australia's second-oldest capital, its colonial-era sandstone warehouses now house vibrant galleries, boutiques, and bars, creating a dynamic waterfront scene. This compact city serves as the perfect gateway to Tasmania's legendary landscapes, from historic penal colonies to breathtaking national parks. Whether you're indulging in farm-to-table dining, exploring a world-class subversive art museum, or hiking to panoramic lookouts, you'll find no shortage of incredible experiences. This guide will walk you through all the very best things to do in Hobart, ensuring your Tasmanian adventure is truly unforgettable."
      highlights={[
      "Museum of Old and New Art (MONA)",
      "kunanyi / Mount Wellington",
      "Salamanca Market",
      "Port Arthur Historic Site",
      "Battery Point"
]}
      attractions={[
      {
            "name": "Museum of Old and New Art (MONA)",
            "description": "MONA is not just a museum; it's an experience. Australia's largest private museum is a subterranean wonderland of confronting, thought-provoking, and often bizarre art. From ancient artifacts to cutting-edge contemporary installations, the collection, curated by owner David Walsh, is designed to challenge perceptions. The journey itself is part of the allure, with a high-speed catamaran ferry from Hobart's waterfront offering stunning views of the Derwent River.\n\nOnce inside, visitors use a custom-built device called 'The O' to read about the artworks, offering everything from straight-faced art-speak to rambling, personal essays from the curator. With its on-site winery, brewery, fine-dining restaurants, and ever-changing exhibitions, MONA is an essential, multi-sensory pilgrimage for any visitor to Hobart.",
            "practicalInfo": {
                  "howToGetThere": "Catch the MONA ROMA ferry from Brooke Street Pier in Hobart (30-min journey). Also accessible by bus or car (20-min drive). 655 Main Rd, Berriedale.",
                  "openingHours": "Thursday - Monday, 10:00 AM - 5:00 PM. Closed Tuesdays and Wednesdays.",
                  "cost": "Adults ~$38 AUD, Tasmanians free. Ferry tickets are separate.",
                  "website": "https://mona.net.au/"
            }
      },
      {
            "name": "kunanyi / Mount Wellington",
            "description": "The dramatic dolerite peak of kunanyi / Mount Wellington looms over Hobart, shaping its identity and weather. A drive to the 1,271-meter summit provides one of Australia's most spectacular and accessible alpine views, stretching across southern Tasmania, including the city, Bruny Island, and the Tasman Peninsula. The temperature at the pinnacle is often significantly colder than in the city, with snow possible even in summer.\n\nThe mountain is a hub for outdoor recreation. Numerous walking and mountain biking trails crisscross its slopes, ranging from gentle strolls through temperate rainforest at The Springs to challenging multi-hour treks. The Observation Shelter at the summit provides protection from the elements while you soak in the breathtaking 360-degree panorama.",
            "practicalInfo": {
                  "howToGetThere": "A 21km (30-minute) drive from the city centre via Pinnacle Road. The kunanyi/Mt Wellington Explorer Bus also runs services from Hobart.",
                  "openingHours": "Pinnacle Road is open 24/7, but can close due to snow or ice. Check conditions before you go.",
                  "cost": "Free to access by private vehicle. Bus fares apply.",
                  "website": "https://www.wellingtonpark.org.au/"
            }
      },
      {
            "name": "Salamanca Market",
            "description": "Every Saturday, the historic sandstone backdrop of Salamanca Place transforms into one of Australia's most beloved outdoor markets. Salamanca Market is a vibrant celebration of Tasmanian culture, art, and produce, with over 300 stallholders showcasing their goods. It's the perfect place to find unique souvenirs, from handcrafted timber and ceramics to locally designed jewelry and clothing.\n\nThe market is also a foodie's paradise. Graze on everything from freshly shucked oysters and scallop pies to artisanal cheeses, honey, and world-class spirits. The lively atmosphere, complete with street performers and the buzz of happy crowds, makes it a must-do Saturday morning ritual for locals and tourists alike.",
            "practicalInfo": {
                  "howToGetThere": "Located on Salamanca Place, an easy walk from Hobart's CBD and waterfront.",
                  "openingHours": "Saturdays, 8:30 AM - 3:00 PM.",
                  "cost": "Free to enter.",
                  "website": "https://www.salamancamarket.com.au/"
            }
      },
      {
            "name": "Port Arthur Historic Site",
            "description": "A haunting and powerful journey into Australia's convict past awaits at the Port Arthur Historic Site, a UNESCO World Heritage property. Located on the scenic Tasman Peninsula, this was once a brutal penal settlement for the most hardened of criminals. Today, the beautifully preserved ruins and restored buildings stand in stark contrast to the site's dark history.\n\nYour entry ticket includes an introductory walking tour and a short harbor cruise, which provides context and perspective on the settlement's scale and isolation. Explore the Penitentiary, the Separate Prison, the Commandant's House, and the poignant Isle of the Dead cemetery. The sheer beauty of the location makes its history all the more chilling and unforgettable.",
            "practicalInfo": {
                  "howToGetThere": "A 90-minute drive (95km) southeast of Hobart. Numerous bus tours operate daily from the city.",
                  "openingHours": "10:00 AM - 5:00 PM daily. Site access is from 9:30 AM.",
                  "cost": "Adults ~$47 AUD for a 2-day pass.",
                  "website": "https://portarthur.org.au/"
            }
      },
      {
            "name": "Battery Point",
            "description": "Take a step back in time with a stroll through Battery Point, one of Australia's oldest and most charming suburbs. Named after the gun battery that was once stationed on the point, this neighborhood is a maze of narrow streets, quaint Georgian cottages, and grand historic homes. It feels a world away from the bustling city centre, despite being just a short walk up from Salamanca Place.\n\nFollow the self-guided Battery Point Sculpture Trail or simply wander through lanes like Arthur Circus, with its circle of adorable colonial cottages. Pop into a local bakery for a treat or enjoy a coffee at a charming cafe. It's a photographer's dream and offers a peaceful glimpse into Hobart's maritime village past.",
            "practicalInfo": {
                  "howToGetThere": "Walk up the historic Kelly's Steps from Salamanca Place, or access via Hampden Road.",
                  "openingHours": "Accessible 24/7.",
                  "cost": "Free.",
                  "website": "https://www.hobartcity.com.au/Community/Arts-and-culture/Public-art/Battery-Point-Sculpture-Trail"
            }
      },
      {
            "name": "Royal Tasmanian Botanical Gardens",
            "description": "Established in 1818, the Royal Tasmanian Botanical Gardens are a tranquil oasis overlooking the Derwent River. These historic gardens cover 14 hectares and showcase a vast collection of plants from Tasmania and around the world. A key highlight is the Subantarctic Plant House, a unique climate-controlled exhibit that recreates the environment of Macquarie Island, complete with chilly mists and winds.\n\nOther notable sections include a beautiful Japanese Garden, a historic Conservatory, and an extensive collection of Tasmanian native plants. It's a perfect spot for a relaxing walk, a picnic lunch, or simply to escape the city for a few hours. The on-site restaurant offers lovely views and a menu featuring local produce.",
            "practicalInfo": {
                  "howToGetThere": "Located on the Queens Domain, a 5-minute drive or a pleasant 25-minute walk from the CBD.",
                  "openingHours": "Daily, 9:00 AM - 5:00 PM (hours may vary by season).",
                  "cost": "Entry by donation.",
                  "website": "https://gardens.rtbg.tas.gov.au/"
            }
      },
      {
            "name": "Tasmanian Museum and Art Gallery (TMAG)",
            "description": "Located on Hobart's historic waterfront, the Tasmanian Museum and Art Gallery (TMAG) is the state's premier institution for art, culture, and natural history. Housed within a collection of beautifully preserved heritage buildings, including the original Commissariat Store from 1808, the museum offers a fascinating journey through Tasmania's unique story.\n\nExhibits cover everything from the island's geology and unique fauna (including the tragic story of the thylacine) to its complex colonial history and Aboriginal heritage. The art collection spans colonial to contemporary works, providing a comprehensive look at Tasmania's creative spirit. It's a manageable size and offers a fantastic, free introduction to the island's identity.",
            "practicalInfo": {
                  "howToGetThere": "Dunn Place, Hobart. A short walk from Constitution Dock and Salamanca Place.",
                  "openingHours": "Tuesday - Sunday, 10:00 AM - 4:00 PM. Closed Mondays.",
                  "cost": "Free general admission.",
                  "website": "https://www.tmag.tas.gov.au/"
            }
      },
      {
            "name": "Bruny Island",
            "description": "An essential day trip from Hobart, Bruny Island offers a concentrated dose of Tasmania's wild beauty. This rugged island is actually two landmasses joined by a narrow isthmus called 'The Neck'. A climb up the steps at The Neck lookout provides one of Tasmania's most iconic views, with sweeping vistas of the isthmus and its contrasting coastlines.\n\nBruny is renowned for its incredible produce. Follow the food trail to sample local cheeses, oysters, honey, and fudge. The island is also a haven for wildlife, including the rare white wallaby. A wilderness cruise around the island's dramatic sea cliffs is a popular activity, offering close encounters with seals, dolphins, and migrating whales in season.",
            "practicalInfo": {
                  "howToGetThere": "Drive 35 minutes south of Hobart to Kettering to catch the vehicular ferry (20-minute crossing). Full day tours are also widely available.",
                  "openingHours": "Accessible year-round. Check ferry timetable for operating hours.",
                  "cost": "Ferry fares apply per vehicle. National Parks Pass may be required for some areas.",
                  "website": "https://www.brunyisland.org.au/"
            }
      },
      {
            "name": "Cascade Brewery",
            "description": "Established in 1824, the Cascade Brewery is Australia's oldest operating brewery. Set against the majestic backdrop of kunanyi / Mount Wellington, the iconic brewhouse is a striking piece of Hobart's industrial heritage. A tour of the facility offers a behind-the-scenes look at the brewing process, from sourcing pure mountain water to the final bottling.\n\nThe experience concludes with a guided tasting of their range of beers and ciders. Even if you don't take the tour, the Cascade Brewhouse Bar and Restaurant is a fantastic destination. Enjoy a pint in the heritage beer garden, explore the three acres of gardens, and soak up the historic atmosphere.",
            "practicalInfo": {
                  "howToGetThere": "140 Cascade Road, South Hobart. A 10-minute drive or a short bus ride from the city centre.",
                  "openingHours": "Bar & Restaurant open daily from 11:00 AM. Tour times vary.",
                  "cost": "Brewery tours start from ~$35 AUD. Bookings are essential.",
                  "website": "https://www.cascadebreweryco.com.au/"
            }
      },
      {
            "name": "Constitution Dock and the Waterfront",
            "description": "The heart and soul of Hobart can be found along its vibrant waterfront. Constitution Dock is the famous finishing line for the Sydney to Hobart Yacht Race, and its marina is filled with impressive yachts and rugged fishing boats year-round. This is the place to come for some of Tasmania's freshest seafood, served from floating fish punts moored at the dock.\n\nThe surrounding area, including Franklin Wharf and Brooke Street Pier, is a hub of activity. Explore the galleries, watch the seaplanes take off, or simply grab a bench and enjoy the maritime atmosphere. The area seamlessly connects many of Hobart's key attractions, including TMAG and Salamanca Place.",
            "practicalInfo": {
                  "howToGetThere": "Centrally located in Hobart, an easy walk from the CBD.",
                  "openingHours": "Accessible 24/7. Fish punts generally operate from morning until late afternoon.",
                  "cost": "Free to explore.",
                  "website": "https://www.hobartcity.com.au/"
            }
      },
      {
            "name": "Bonorong Wildlife Sanctuary",
            "description": "For an up-close and personal encounter with Tasmania's unique wildlife, Bonorong Wildlife Sanctuary is a must-visit. More than just a wildlife park, Bonorong operates as Tasmania's largest 24/7 wildlife rescue service. The sanctuary is dedicated to the care and rehabilitation of injured and orphaned animals, with a strong focus on conservation and education.\n\nHere you can see Tasmanian devils, wombats, quolls, wallabies, and a variety of native birds. Join one of the excellent daily tours to learn fascinating facts about the animals and the sanctuary's vital work. The opportunity to hand-feed kangaroos that roam freely throughout the park is a highlight for many visitors.",
            "practicalInfo": {
                  "howToGetThere": "593 Briggs Road, Brighton. A 30-minute drive north of Hobart.",
                  "openingHours": "Daily, 9:00 AM - 5:00 PM.",
                  "cost": "Adults ~$35 AUD.",
                  "website": "https://www.bonorong.com.au/"
            }
      },
      {
            "name": "Mawson's Huts Replica Museum",
            "description": "Discover Tasmania's deep connection to Antarctica at the Mawson's Huts Replica Museum. Located on Hobart's waterfront, this fascinating museum is a meticulously crafted replica of the historic huts used by Sir Douglas Mawson and his team during the 1911-14 Australasian Antarctic Expedition. The original huts still stand at Cape Denison in Antarctica, but are inaccessible to most.\n\nStepping inside the replica is like stepping into the past. You can see the living quarters, the bunks, the kitchen, and the scientific equipment exactly as they were, providing a powerful insight into the harsh conditions and remarkable endurance of these early polar explorers. It’s a small museum that packs a big historical punch, staffed by passionate volunteers.",
            "practicalInfo": {
                  "howToGetThere": "Corner of Argyle and Morrison Streets, on the Hobart waterfront.",
                  "openingHours": "Daily, 10:00 AM - 5:00 PM (Summer), shorter hours in Winter.",
                  "cost": "Adults ~$20 AUD.",
                  "website": "https://www.mawsons-huts-replica.org.au/"
            }
      },
      {
            "name": "Farm Gate Market",
            "description": "If Salamanca Market is for arts, crafts, and culture, then Farm Gate Market is for the serious food lover. Held every Sunday morning in the heart of the city, this market is a true farmers' market, where you can buy directly from the producers. The rule is simple: if you can't eat it, drink it, or grow it, you can't sell it here.\n\nThe atmosphere is buzzing with locals doing their weekly shop and visitors discovering the bounty of Tasmania. Find seasonal fruit and vegetables, artisanal bread, pastries, local meats, seafood, and excellent coffee. It's the perfect place to assemble a picnic or simply start your Sunday with a delicious breakfast from one of the food stalls.",
            "practicalInfo": {
                  "howToGetThere": "Bathurst Street, between Murray and Elizabeth Streets in the CBD.",
                  "openingHours": "Sundays, 8:30 AM - 1:00 PM.",
                  "cost": "Free to enter.",
                  "website": "https://farmgatemarket.com.au/"
            }
      },
      {
            "name": "Tasman National Park",
            "description": "While Port Arthur is the historic jewel of the Tasman Peninsula, the surrounding Tasman National Park is a natural masterpiece. The park is famed for its dramatic coastal scenery, with some of the highest and most spectacular sea cliffs in Australia. These dolerite formations have been carved by the wild Southern Ocean into stunning features.\n\nDon't miss the key lookouts near Eaglehawk Neck, which are easily accessible by car. Marvel at the Tessellated Pavement, a rare geological formation; the Tasman Arch, a huge natural bridge; and the Devil's Kitchen, a deep coastal trench. For the more adventurous, the park is home to the famous Three Capes Track, a multi-day hike offering world-class coastal views.",
            "practicalInfo": {
                  "howToGetThere": "The main sights are near Eaglehawk Neck, about a 75-minute drive from Hobart.",
                  "openingHours": "Accessible 24/7.",
                  "cost": "A valid Tasmanian National Parks Pass is required for entry.",
                  "website": "https://parks.tas.gov.au/explore-our-parks/tasman-national-park"
            }
      },
      {
            "name": "Lark Distillery",
            "description": "Tasmania is renowned for its world-class whisky, and Lark Distillery is where the modern industry began. Founder Bill Lark is credited with kickstarting the Tasmanian whisky revival in the early 1990s. A visit to their cellar door on the Hobart waterfront is an essential experience for any spirit enthusiast.\n\nSample their range of single malt whiskies, gins, and other spirits, guided by knowledgeable staff who can explain the nuances of each dram. The bar offers an extensive list of Tasmanian whiskies from various distilleries, making it a one-stop-shop for exploring the island's spirit scene. You can book a tasting flight or simply enjoy a cocktail in a sophisticated, welcoming atmosphere.",
            "practicalInfo": {
                  "howToGetThere": "14 Davey Street, Hobart Waterfront.",
                  "openingHours": "Open daily, generally from 11:00 AM until late.",
                  "cost": "Free to enter the bar. Tastings and drinks are priced individually.",
                  "website": "https://larkdistillery.com/"
            }
      }
]}
      logistics={{
      "gettingAround": "Hobart's CBD, waterfront, and Salamanca areas are very walkable. For destinations like MONA, ferries are a scenic option. The Metro bus network covers the greater Hobart area. To explore further afield, such as Port Arthur or Freycinet National Park, renting a car is highly recommended and provides the most flexibility.",
      "whereToStay": "For first-time visitors, the Waterfront and Salamanca areas are ideal, putting you in the heart of the action with easy access to markets, ferries, and restaurants. Battery Point offers charming, historic accommodation. North Hobart is great for a more local, bohemian vibe with excellent cafes and an independent cinema. Top hotels include The Henry Jones Art Hotel (Luxury), MACq 01 Hotel (Story-telling luxury), and Salamanca Terraces (Apartment-style).",
      "bestTimeToVisit": "Summer (December-February) is the most popular time with warm weather and numerous festivals, including the Taste of Summer and the finish of the Sydney to Hobart Yacht Race. Autumn (March-May) offers mild weather, beautiful fall colours, and fewer crowds. Winter (June-August) is cool and cosy, perfect for log fires, whisky tasting, and the Dark Mofo festival. Spring (September-November) sees the gardens bloom and is a great time for hiking.",
      "suggestedItinerary": "[object Object]"
}}
      faqs={[
      {
            "question": "Is Hobart expensive?",
            "answer": "Hobart can be moderately expensive, comparable to other Australian capital cities, especially during peak summer season. Accommodation and car rental prices increase significantly from December to February. However, many key attractions like TMAG, the Royal Tasmanian Botanical Gardens, and wandering through Battery Point are free. Eating out can range from budget-friendly market food and pub meals to high-end fine dining. Booking flights and accommodation well in advance can help manage costs."
      },
      {
            "question": "How many days do you need in Hobart?",
            "answer": "A minimum of 3 full days is recommended to experience Hobart's main highlights, including MONA, Salamanca Market (on a Saturday), and Mount Wellington. This allows for one full day to be dedicated to a day trip, such as to Port Arthur or Bruny Island. To more deeply explore the surrounding regions like the Huon Valley or Tasman Peninsula, 4-5 days would be more comfortable."
      },
      {
            "question": "Is Hobart safe?",
            "answer": "Yes, Hobart is considered a very safe city, even by Australian standards. It has a low crime rate and a relaxed, friendly atmosphere. Standard travel precautions should be taken, such as being aware of your surroundings at night and not leaving valuables unattended. When hiking or driving in remote areas, be prepared for rapidly changing weather conditions and watch for wildlife on the roads, especially at dusk and dawn."
      },
      {
            "question": "What is Hobart famous for?",
            "answer": "Hobart is famous for its unique blend of culture, history, and nature. Key highlights include the world-renowned Museum of Old and New Art (MONA), its rich convict history embodied by sites like Port Arthur, and the stunning natural backdrop of kunanyi/Mount Wellington. It's also celebrated for its vibrant food and drink scene, particularly fresh seafood, cool-climate wines, and award-winning whisky and gin."
      }
]}
    />
  );
};