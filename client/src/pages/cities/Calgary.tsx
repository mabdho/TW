import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Calgary: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Calgary, Canada (2025 Guide)"
      description="Nestled where the prairies meet the majestic Canadian Rockies, Calgary is a dynamic city that perfectly blends western heritage with modern sophistication. Once a humble outpost of the North-West Mounted Police, it has blossomed into Canada's energy capital, known for its entrepreneurial spirit and warm, welcoming locals. While the world-famous Calgary Stampede showcases its cowboy roots, the city's gleaming skyscrapers, vibrant arts scene, and burgeoning culinary landscape prove there's much more to explore. From sprawling urban parks along the Bow River to world-class museums, discovering the best things to do in Calgary offers an unforgettable Canadian adventure. Whether you're seeking urban excitement or a gateway to breathtaking natural wonders, Calgary delivers in spades."
      highlights={[
      "Calgary Tower",
      "Calgary Stampede",
      "Studio Bell, home of the National Music Centre",
      "Heritage Park Historical Village",
      "Day Trip to Banff National Park"
]}
      attractions={[
      {
            "name": "Calgary Tower",
            "description": "No trip to Calgary is complete without ascending its most iconic landmark. Standing 191 meters tall, the Calgary Tower offers breathtaking 360-degree panoramic views of the city skyline, the vast prairies, and the distant, snow-capped Rocky Mountains. For the brave, the glass floor observation deck provides a thrilling perspective of the streets directly below. \n\nThe tower also features a revolving restaurant, Sky 360, allowing you to dine while the entire city unfolds beneath you. It's the perfect first stop to get your bearings and appreciate the scale and beauty of Calgary and its surrounding landscape.",
            "practicalInfo": {
                  "howToGetThere": "Located at 101 9 Ave SW in the heart of downtown, easily accessible by foot, C-Train (1 Street SW or Centre Street stations), or car.",
                  "openingHours": "Daily, typically 10:00 AM - 9:00 PM. Hours can vary seasonally, so check the website.",
                  "cost": "Adults: ~$20 CAD; Discounts for seniors and children.",
                  "website": "https://www.calgarytower.com/"
            }
      },
      {
            "name": "Calgary Stampede",
            "description": "Dubbed 'The Greatest Outdoor Show on Earth,' the Calgary Stampede is a world-renowned ten-day festival held every July that embodies the city's Western spirit. It's an electrifying celebration featuring a massive parade, rodeo competitions, chuckwagon races, live music concerts, midway rides, and incredible food. Millions of visitors don their cowboy hats and boots to partake in the city-wide party.\n\nEven if your visit doesn't coincide with the ten-day event, Stampede Park hosts concerts, sporting events, and trade shows year-round. It's the cultural heart of the city and an unmissable experience if you're in town during the festival.",
            "practicalInfo": {
                  "howToGetThere": "Stampede Park is located at 1410 Olympic Way SE, just southeast of downtown. It has its own C-Train station (Victoria Park/Stampede).",
                  "openingHours": "The main festival runs for 10 days in early July. Grounds are open year-round for other events.",
                  "cost": "Stampede Park Admission: ~$23 CAD; Rodeo and evening show tickets are extra.",
                  "website": "https://www.calgarystampede.com/"
            }
      },
      {
            "name": "Studio Bell, home of the National Music Centre",
            "description": "An architectural masterpiece in Calgary's East Village, Studio Bell is more than a museum; it's a celebration of Canada's rich musical history. The stunning building, with its interlocking terracotta towers, houses five floors of interactive exhibits, musical artifacts (including Elton John's piano), and performance spaces. Visitors can experiment with instruments, mix their own tracks, and tour the historic Rolling Stones Mobile Studio.\n\nThe National Music Centre is also home to the Canadian Music Hall of Fame and the Canadian Country Music Hall of Fame. It's an engaging and inspiring destination for music lovers of all ages and genres, showcasing the stories that have shaped Canada's sound.",
            "practicalInfo": {
                  "howToGetThere": "Located at 850 4 St SE. Accessible via the C-Train's City Hall station and a short walk.",
                  "openingHours": "Typically Thursday - Sunday, 10:00 AM - 5:00 PM. Check website for current hours.",
                  "cost": "Adults: ~$22 CAD. Free admission for Indigenous Peoples.",
                  "website": "https://www.studiobell.ca/"
            }
      },
      {
            "name": "Heritage Park Historical Village",
            "description": "Step back in time at Canada's largest living history museum. Heritage Park vividly recreates life in Western Canada from the 1860s to the 1950s. The park is vast, featuring over 200 exhibits and attractions, including a historic village with costumed interpreters, a working steam train, a paddlewheel boat on the Glenmore Reservoir, and an antique midway.\n\nYou can explore a prairie railway town, a Hudson's Bay Company fort, and a pre-railway settlement. From riding the rails on a steam engine to churning your own butter, the park offers a hands-on, immersive experience that is both educational and incredibly fun for the entire family.",
            "practicalInfo": {
                  "howToGetThere": "Located at 1900 Heritage Dr SW. Best reached by car or the Route 502 bus from Heritage C-Train station.",
                  "openingHours": "Summer Season (May-September): Daily, 10:00 AM - 5:00 PM. Limited winter operations.",
                  "cost": "Adults: ~$35 CAD for summer admission. Prices vary by season.",
                  "website": "https://heritagepark.ca/"
            }
      },
      {
            "name": "Day Trip to Banff National Park",
            "description": "While not in Calgary itself, the city's status as the gateway to the Rockies makes a day trip to Banff an essential experience. Just a 90-minute drive west, you'll enter a world of turquoise lakes, towering peaks, and abundant wildlife. Canada's first national park offers iconic sights that are famous worldwide.\n\nIn a single day, you can stroll the charming streets of the Banff townsite, take the Banff Gondola for stunning mountain vistas, and witness the surreal beauty of Lake Louise and Moraine Lake. It's a long but incredibly rewarding day that showcases the natural splendor that lies on Calgary's doorstep.",
            "practicalInfo": {
                  "howToGetThere": "A 90-minute drive west on the Trans-Canada Highway. Several bus services (like Brewster Express and The Banff Airporter) run between Calgary and Banff.",
                  "openingHours": "Open 24/7, year-round. Visitor centers have specific hours.",
                  "cost": "A Parks Canada Discovery Pass is required. Day pass is ~$11 CAD per adult or ~$22 CAD per vehicle.",
                  "website": "https://www.banfflakelouise.com/"
            }
      },
      {
            "name": "Calgary Zoo",
            "description": "Located on St. George's Island in the Bow River, the Calgary Zoo is a world-class facility dedicated to wildlife conservation. It's home to nearly 1,000 animals from around the globe, with exhibits organized by geographical region, such as the Canadian Wilds, Destination Africa, and Exploration Asia. The zoo is particularly known for its successful conservation and breeding programs for endangered species.\n\nPopular areas include the Penguin Plunge, the Land of Lemurs, and the Prehistoric Park with its life-sized dinosaur models. It's a fantastic destination for families and animal lovers, offering a full day of discovery just minutes from the downtown core.",
            "practicalInfo": {
                  "howToGetThere": "Located at 210 St. George's Drive NE. Has its own C-Train station (Zoo).",
                  "openingHours": "Daily, 9:00 AM - 5:00 PM. Check website for seasonal variations.",
                  "cost": "Adults: ~$35 CAD. Timed tickets often required.",
                  "website": "https://www.calgaryzoo.com/"
            }
      },
      {
            "name": "Prince's Island Park",
            "description": "An urban oasis nestled in the heart of the city, Prince's Island Park is a beautiful green space located on an island in the Bow River. Connected to downtown by three pedestrian bridges, it's a local favorite for picnics, cycling, walking, and relaxing. The park's beautifully manicured gardens, wetlands, and pathways make it a perfect escape from the urban hustle.\n\nThe island is also a cultural hub, hosting major annual events like the Calgary Folk Music Festival and Canada Day celebrations. It’s also home to the River Café, an acclaimed restaurant known for its regional Canadian cuisine, offering a fine dining experience in a rustic, natural setting.",
            "practicalInfo": {
                  "howToGetThere": "Accessible by foot from downtown Calgary via bridges from Eau Claire Market or Memorial Drive.",
                  "openingHours": "Daily, 5:00 AM - 11:00 PM.",
                  "cost": "Free",
                  "website": "https://www.calgary.ca/parks/princes-island-park.html"
            }
      },
      {
            "name": "WinSport's Canada Olympic Park",
            "description": "Built for the 1988 Winter Olympics, WinSport's Canada Olympic Park is now a year-round, multi-purpose training and competition facility. In winter, it's a popular spot for local skiing, snowboarding, and tubing. But it truly shines in the summer, offering a range of adrenaline-pumping activities.\n\nVisitors can experience the thrill of riding a bobsleigh down the original Olympic track (with a professional driver), soar through the air on North America's fastest zipline, or try their hand at the skyline luge. It's a unique opportunity to engage with Calgary's Olympic legacy and get your heart racing.",
            "practicalInfo": {
                  "howToGetThere": "Located at 88 Canada Olympic Road SW, on the western edge of the city. Best reached by car.",
                  "openingHours": "Varies by season and activity. Check the website for detailed schedules.",
                  "cost": "Free to visit the grounds. Activities are individually priced (e.g., Zipline ~$85, Bobsleigh ~$120).",
                  "website": "https://www.winsport.ca/"
            }
      },
      {
            "name": "Stephen Avenue Walk",
            "description": "Stretching through the heart of downtown, Stephen Avenue (8th Avenue SW) is a bustling pedestrian mall and a National Historic Site. By day, it's a hub of activity with shoppers, business people, and tourists exploring its mix of high-end retailers, local boutiques, and public art. The street is lined with beautifully restored historic sandstone buildings, providing a glimpse into Calgary's past.\n\nAs evening approaches, the avenue transforms into a vibrant entertainment district. Patios spill onto the street, and the area's many restaurants, pubs, and bars come alive. It's the perfect place to grab a bite to eat, enjoy a drink, and soak up the city's energetic atmosphere.",
            "practicalInfo": {
                  "howToGetThere": "Runs along 8th Avenue SW in downtown Calgary. Closed to traffic from 6 AM to 6 PM daily.",
                  "openingHours": "24/7, with retail shops typically open 10:00 AM - 6:00 PM.",
                  "cost": "Free to walk and explore.",
                  "website": "https://www.downtowncalgary.com/be-down/stephen-avenue"
            }
      },
      {
            "name": "Peace Bridge",
            "description": "A striking piece of modern architecture, the Peace Bridge is a pedestrian and cyclist bridge spanning the Bow River. Designed by the renowned Spanish architect Santiago Calatrava, its bold red, helical steel structure and glass roof make it a standout landmark and a photographer's dream. The bridge's design is unique, resembling a Chinese finger trap, and it offers beautiful views of the river and the downtown skyline.\n\nConnecting the downtown core with the trendy community of Sunnyside, the bridge is part of Calgary's extensive pathway system. It's a popular spot for a scenic walk or bike ride, especially at night when it's beautifully illuminated.",
            "practicalInfo": {
                  "howToGetThere": "Spans the Bow River between Eau Claire Park and Memorial Drive NW.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free",
                  "website": "https://www.calgary.ca/roads/peace-bridge.html"
            }
      },
      {
            "name": "TELUS Spark Science Centre",
            "description": "Fuel your curiosity at the TELUS Spark Science Centre, an interactive museum that makes science fun for all ages. With hands-on exhibits, multimedia presentations, and live science demonstrations, it's a place of discovery and play. The centre features several galleries focused on topics like earth science, the human body, and creativity, as well as a dedicated creative space for kids.\n\nA major highlight is the Infinity Dome theatre, which hosts immersive planetarium shows and films that transport you across the universe. It's an engaging and educational experience that encourages visitors to ask questions and explore the world around them.",
            "practicalInfo": {
                  "howToGetThere": "Located at 220 St. George's Drive NE, next to the Calgary Zoo. Accessible via the Zoo C-Train station.",
                  "openingHours": "Daily, 9:00 AM - 4:00 PM (until 7:00 PM on Fridays). Check website for updates.",
                  "cost": "Adults: ~$26 CAD.",
                  "website": "https://www.sparkscience.ca/"
            }
      },
      {
            "name": "Glenbow Museum",
            "description": "The Glenbow Museum has long been Calgary's premier institution for art and history, with a vast collection focusing on Western Canada. Note: The main Glenbow building is currently closed for a major renovation, with a grand reopening planned for the future. However, the spirit of the Glenbow lives on through a temporary satellite location.\n\nGlenbow at The Edison offers a more intimate but equally compelling experience, featuring rotating exhibitions drawn from the museum's extensive collection. It provides a fantastic opportunity to engage with art and artifacts that tell the story of this region. Be sure to check their website for the latest on the renovation progress and current exhibitions.",
            "practicalInfo": {
                  "howToGetThere": "Temporary location is Glenbow at The Edison, 150 9th Avenue SW, 2nd Floor. Easily accessible in the downtown core.",
                  "openingHours": "Wednesday - Friday: 11:00 AM - 7:00 PM; Saturday - Sunday: 10:00 AM - 6:00 PM.",
                  "cost": "Free admission during the renovation period.",
                  "website": "https://www.glenbow.org/"
            }
      },
      {
            "name": "Fish Creek Provincial Park",
            "description": "A natural treasure within the city limits, Fish Creek Provincial Park is one of the largest urban parks in North America. This expansive park follows Fish Creek into the Bow River valley and offers a true escape into nature without leaving Calgary. With over 80 kilometers of pathways, it's a paradise for hikers, cyclists, and trail runners.\n\nThe park's diverse ecosystems, including forests, prairies, and wetlands, make it a hotspot for birdwatching and wildlife viewing—it's not uncommon to spot deer or coyotes. It also features Sikome Lake (Sikome Aquatic Facility), a popular man-made beach for summer swimming.",
            "practicalInfo": {
                  "howToGetThere": "Located in the southern part of Calgary. Multiple access points. The Fish Creek-Lacombe C-Train station provides access to the eastern end.",
                  "openingHours": "Daily, 8:00 AM - 10:00 PM.",
                  "cost": "Free to enter the park. Fees apply for Sikome Lake.",
                  "website": "https://www.albertaparks.ca/parks/kananaskis/fish-creek-pp/"
            }
      },
      {
            "name": "Devonian Gardens",
            "description": "A tropical paradise in a surprising location, the Devonian Gardens is a one-hectare indoor botanical garden situated on the top floor of the CORE Shopping Centre downtown. It's a lush, tranquil retreat featuring over 500 trees, 50 varieties of plants, a 900-square-foot living wall, fountains, and fish ponds. The entire garden is enclosed by a massive glass roof, creating a bright and airy atmosphere year-round.\n\nIt's the perfect place to escape the winter cold or a summer downpour. Visitors can relax on a bench, watch the koi fish swim, and enjoy the peaceful ambiance. The gardens also include a children's play area, making it a wonderful and free attraction for families.",
            "practicalInfo": {
                  "howToGetThere": "Located on the 4th floor of the CORE Shopping Centre (333 7 Ave SW), accessible via the C-Train's 3rd Street SW station.",
                  "openingHours": "Follows shopping mall hours, typically 10:00 AM - 6:00 PM.",
                  "cost": "Free",
                  "website": "https://www.coreshopping.ca/pages/core-devonian-gardens"
            }
      },
      {
            "name": "The Hangar Flight Museum",
            "description": "For aviation enthusiasts and history buffs, The Hangar Flight Museum is a hidden gem. Located near the Calgary International Airport, the museum is dedicated to celebrating the history of flight in Western Canada. It features a diverse collection of aircraft, from early biplanes like a Sopwith Triplane replica to Cold War-era jets like the Avro Canada CF-100 Canuck.\n\nThe museum consists of a main hangar and an outdoor yard where you can get up close to these impressive machines. The exhibits are informative, telling the stories of the pioneers of Canadian aviation and the technological advancements that shaped the industry. It's a fascinating look into a crucial part of Canada's history.",
            "practicalInfo": {
                  "howToGetThere": "Located at 4629 McCall Way NE. Best reached by car.",
                  "openingHours": "Daily, 10:00 AM - 4:00 PM.",
                  "cost": "Adults: ~$15 CAD.",
                  "website": "https://thehangarmuseum.ca/"
            }
      }
]}
      logistics={{
      "gettingAround": "Calgary's downtown core is very walkable. The C-Train (light rail) is efficient for traveling between neighbourhoods and features a free-fare zone along 7th Avenue downtown. Calgary Transit buses cover the rest of the city. Ride-sharing services like Uber and Lyft are widely available. To explore the nearby Rocky Mountains, renting a car is highly recommended for maximum flexibility.",
      "whereToStay": "For first-time visitors, Downtown and the Beltline offer the most convenience, with hotels like the Fairmont Palliser, Hyatt Regency Calgary, and the trendy Hotel Arts. For a bohemian vibe with boutique shops and excellent restaurants, consider the neighbourhoods of Kensington or Inglewood. For those with early flights or rental cars, hotels near the Calgary International Airport (YYC) offer good value.",
      "bestTimeToVisit": "The best time to visit Calgary is during the summer months (June to August) when the weather is warm and sunny, perfect for festivals like the Calgary Stampede. September and October offer pleasant weather, beautiful fall colours, and fewer crowds. Winter (December to February) is cold but ideal for those interested in skiing and winter sports in the nearby mountains, plus you can experience the unique 'Chinook' warm winds.",
      "suggestedItinerary": "A simple 3-day itinerary:\nDay 1: Downtown Discovery. Ascend the Calgary Tower, stroll down Stephen Avenue Walk, explore Studio Bell, and relax in Prince's Island Park.\nDay 2: History and Science. Spend the morning at Heritage Park Historical Village, then choose between the Calgary Zoo or the TELUS Spark Science Centre for the afternoon.\nDay 3: Mountain Adventure. Take a full-day trip to Banff National Park to see the town of Banff, Lake Louise, and Moraine Lake."
}}
      faqs={[
      {
            "question": "Is Calgary expensive?",
            "answer": "Calgary is considered moderately expensive, but generally more affordable than Vancouver or Toronto. A mid-range hotel room costs around $150-250 CAD per night. A meal at a mid-range restaurant is about $25-40 CAD per person. Public transit is efficient, and there are many free activities like visiting Prince's Island Park, Devonian Gardens, and Stephen Avenue Walk to help manage your budget."
      },
      {
            "question": "How many days do you need in Calgary?",
            "answer": "A stay of 3 to 4 days is ideal. This allows for two full days to explore the main attractions within the city itself, such as the Calgary Tower, Heritage Park, and Studio Bell. It also provides 1-2 days for an essential day trip into the Rocky Mountains to visit Banff National Park, which is a highlight of any trip to the region."
      },
      {
            "question": "Is Calgary safe?",
            "answer": "Yes, Calgary is generally a very safe city for tourists and residents. Like any major city, it's wise to exercise standard precautions. Be aware of your surroundings, especially at night in less crowded areas or on public transit. The downtown core and popular tourist areas are well-patrolled and safe to walk around."
      },
      {
            "question": "What is Calgary famous for?",
            "answer": "Calgary is most famous for the Calgary Stampede, its annual rodeo and festival that celebrates Western heritage. It's also known as the centre of Canada's oil and gas industry, its role as the host of the 1988 Winter Olympics, and its unbeatable proximity to the Canadian Rockies, serving as the primary gateway to Banff and Jasper National Parks."
      }
]}
    />
  );
};