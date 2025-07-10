import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Brisbane: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Brisbane, Australia (2025 Guide)"
      description="Welcome to Brisbane, Australia's sun-drenched river city where a laid-back attitude meets vibrant urban energy. Cradled by the winding Brisbane River, this city is a playground of lush parklands, a world-class cultural precinct, and a burgeoning culinary scene. Whether you're cuddling a koala, climbing the iconic Story Bridge, or simply soaking up the subtropical sunshine at a riverside brewery, Brisbane offers an effortless blend of adventure and relaxation. Its year-round warm climate makes outdoor activities a central part of life here, inviting visitors to explore its green spaces and lively neighborhoods. From gallery hopping to market shopping, discovering the best things to do in Brisbane is an experience filled with warmth and genuine Aussie charm. Get ready to explore the capital of the Sunshine State."
      highlights={[
      "South Bank Parklands",
      "Lone Pine Koala Sanctuary",
      "Story Bridge Adventure Climb",
      "Queensland Art Gallery & Gallery of Modern Art (QAGOMA)",
      "Mount Coot-tha Lookout"
]}
      attractions={[
      {
            "name": "South Bank Parklands",
            "description": "Stretching along the southern banks of the Brisbane River, the South Bank Parklands are the city's premier lifestyle and cultural destination. This sprawling oasis features lush lawns, tropical gardens, and the iconic Streets Beach, Australia's only inner-city, man-made beach. It's a perfect spot for a swim, a picnic, or a leisurely stroll along the Grand Arbour, a kilometer-long bougainvillea-draped walkway.\n\nThe precinct is also home to a fantastic array of restaurants, cafes, and bars, as well as the Wheel of Brisbane, which offers panoramic views of the city skyline. With regular markets and events, there's always something happening, making it a vibrant hub for both locals and tourists.",
            "practicalInfo": {
                  "howToGetThere": "Located on the southern bank of the Brisbane River, opposite the CBD. Accessible via the Victoria Bridge (walking), or by CityCat ferry, bus, or train to South Brisbane station.",
                  "openingHours": "Parklands are open 24/7. Streets Beach is patrolled by lifeguards from 7 AM to midnight.",
                  "cost": "Free to enter.",
                  "website": "https://www.visitbrisbane.com.au/south-bank"
            }
      },
      {
            "name": "Lone Pine Koala Sanctuary",
            "description": "For an unforgettable Australian wildlife experience, Lone Pine Koala Sanctuary is a must-visit. Established in 1927, it is the world's first and largest koala sanctuary, home to over 100 koalas. Here, you have the unique opportunity to hold a koala and get a photo, a truly special memory. The sanctuary focuses on conservation and education, providing a naturalistic habitat for its animals.\n\nBeyond koalas, you can hand-feed kangaroos and wallabies in a large open reserve, watch captivating bird of prey shows, and see a wide variety of other Australian animals, including platypus, wombats, Tasmanian devils, and dingoes. It's a fantastic day out for all ages, offering close encounters with native fauna.",
            "practicalInfo": {
                  "howToGetThere": "Located in the suburb of Fig Tree Pocket. Accessible by car, bus (route 430 or 445), or via the Mirimar river cruise from the Cultural Centre Pontoon.",
                  "openingHours": "Daily from 9 AM to 5 PM.",
                  "cost": "Adults approx. $50 AUD, with concessions and family passes available.",
                  "website": "https://lonepinekoalasanctuary.com"
            }
      },
      {
            "name": "Story Bridge Adventure Climb",
            "description": "For adrenaline junkies and those seeking the best views in Brisbane, the Story Bridge Adventure Climb is an exhilarating experience. This two-hour guided climb takes you to the summit of Brisbane's most iconic bridge, offering breathtaking 360-degree panoramic views of the city, the river, and surrounding areas, from the Glass House Mountains to Moreton Bay.\n\nClimbs are available at various times, including dawn, day, twilight, and night, each offering a unique perspective of the cityscape. Your guide will share fascinating stories about the bridge's history and construction. It's one of only three bridge climbs in the world, making it a unique and memorable way to see Brisbane from above.",
            "practicalInfo": {
                  "howToGetThere": "Base is located at 170 Main Street, Kangaroo Point. Accessible by car, bus, or a short ferry ride to the Kangaroo Point cliffs.",
                  "openingHours": "Climbs run daily at various times, booking is essential.",
                  "cost": "Prices start from approx. $130 AUD per person, varying by climb time.",
                  "website": "https://storybridgeadventureclimb.com.au"
            }
      },
      {
            "name": "Queensland Art Gallery & Gallery of Modern Art (QAGOMA)",
            "description": "Situated in the heart of the South Bank cultural precinct, QAGOMA comprises two impressive riverside galleries. The Queensland Art Gallery (QAG) showcases a rich collection of Australian, Indigenous, and international art, while the Gallery of Modern Art (GOMA) is a stunning architectural space dedicated to contemporary works from Australia, Asia, and the Pacific. GOMA is Australia's largest gallery of modern and contemporary art.\n\nTogether, they offer a dynamic and diverse art experience with ever-changing major exhibitions, interactive installations, and a dedicated children's art centre. The galleries are celebrated for their focus on the art of the Asia Pacific region, hosting the flagship 'Asia Pacific Triennial of Contemporary Art' (APT). It's a cultural feast for art lovers and casual visitors alike.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Cultural Centre at South Bank. Accessible by train (South Brisbane station), bus (Cultural Centre station), or ferry (South Bank 1 & 2 terminal).",
                  "openingHours": "Daily from 10 AM to 5 PM.",
                  "cost": "Free for general admission. Some special exhibitions may be ticketed.",
                  "website": "https://www.qagoma.qld.gov.au"
            }
      },
      {
            "name": "Mount Coot-tha Lookout",
            "description": "Just a short drive from the city center, the Mount Coot-tha Lookout offers the most spectacular panoramic view of Brisbane's skyline, stretching out to Moreton Bay. The lookout is the highest point in Brisbane and is a favorite spot for both locals and tourists to get their bearings and appreciate the city's sprawling beauty. It's particularly stunning at sunrise and sunset.\n\nAt the summit, you'll find observation decks, powerful binoculars, a cafe, and a fine dining restaurant, making it a perfect spot for a coffee or a romantic dinner with a view. The lookout is the gateway to the vast Mount Coot-tha Reserve, which also features the Brisbane Botanic Gardens and extensive walking trails.",
            "practicalInfo": {
                  "howToGetThere": "Located on Sir Samuel Griffith Drive. Best reached by car or the 471 bus from Adelaide Street in the CBD.",
                  "openingHours": "Lookout is accessible 24/7. The cafe and restaurant have specific operating hours.",
                  "cost": "Free to access.",
                  "website": "https://www.brisbane.qld.gov.au/things-to-see-and-do/council-venues-and-precincts/mt-coot-tha-precinct"
            }
      },
      {
            "name": "City Botanic Gardens",
            "description": "Nestled in a curve of the Brisbane River at the edge of the CBD, the City Botanic Gardens are a tranquil heritage-listed haven. These are Brisbane's original botanic gardens, featuring a beautiful collection of rare and unusual botanicals, including cycads, palms, figs, and bamboo. Meandering paths wind through ancient trees, lush lawns, and ornamental ponds.\n\nThe gardens are perfect for a quiet walk, a jog, or a picnic lunch away from the city's hustle. Highlights include the Bamboo Grove, the Weeping Fig Avenue, and the Mangrove Boardwalk. Free guided walks are often available, offering insight into the garden's history and plant life.",
            "practicalInfo": {
                  "howToGetThere": "Located at 1 Alice Street, Brisbane CBD. Easily walkable from the city center. Accessible via the Goodwill Bridge from South Bank.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free.",
                  "website": "https://www.brisbane.qld.gov.au/things-to-see-and-do/council-venues-and-precincts/parks/city-botanic-gardens"
            }
      },
      {
            "name": "Eat Street Northshore",
            "description": "Eat Street Northshore is a vibrant, large-scale food market set in a colourful maze of shipping containers on a historic wharf. This sensory explosion offers a huge variety of international street food, delectable desserts, and creative drinks from dozens of micro-restaurants. The atmosphere is electric, with live music and entertainment across multiple stages.\n\nFrom Japanese pizzas to Dutch pancakes and everything in between, the culinary diversity is staggering. It's a fantastic place to spend a weekend evening, grazing on different dishes, enjoying the riverside setting, and soaking up the lively, festive vibe. Arrive with an empty stomach and a sense of adventure.",
            "practicalInfo": {
                  "howToGetThere": "Located at 221D MacArthur Ave, Hamilton. Accessible by CityCat ferry to the Northshore Hamilton terminal, which drops you right at the entrance. Limited parking is available.",
                  "openingHours": "Friday & Saturday 4 PM - 10 PM, Sunday 4 PM - 9 PM.",
                  "cost": "Small entry fee (approx. $6 AUD per person). Food and drinks are purchased from individual vendors.",
                  "website": "https://www.eatstreetnorthshore.com.au"
            }
      },
      {
            "name": "Brisbane River CityCat Ferry Ride",
            "description": "The Brisbane River is the city's lifeblood, and there's no better way to experience it than by hopping on a CityCat. These sleek, high-speed catamarans are part of the city's public transport network, but they double as one of the best value sightseeing tours available. The journey offers a unique perspective of the city's landmarks, from the gleaming CBD skyscrapers to the lush botanic gardens and historic homes of New Farm.\n\nFor a scenic trip, travel the full length of the route from the University of Queensland (UQ) St Lucia to Northshore Hamilton. You can tap on and off with a Translink Go Card or a contactless payment method. Sit on the open-air deck at the front or back of the ferry for the best views and a refreshing breeze.",
            "practicalInfo": {
                  "howToGetThere": "Terminals are located along the Brisbane River, from UQ St Lucia to Northshore Hamilton. Key CBD terminals include North Quay, South Bank, and Riverside.",
                  "openingHours": "Services run frequently from early morning until late at night.",
                  "cost": "Standard public transport fares apply. Fares are capped, making it an affordable way to travel all day.",
                  "website": "https://translink.com.au"
            }
      },
      {
            "name": "Howard Smith Wharves",
            "description": "Nestled beneath the Story Bridge, Howard Smith Wharves is one of Brisbane's most popular entertainment and lifestyle precincts. This once-derelict wharf space has been brilliantly revitalized into a bustling hub featuring a craft brewery (Felons Brewing Co.), a boutique hotel, and a collection of acclaimed restaurants and bars with stunning river and city views.\n\nThe precinct's unique position offers an unparalleled view of the Story Bridge lit up at night. With expansive green spaces, direct access to the riverwalk, and a vibrant atmosphere, it's the perfect spot to enjoy a craft beer, a delicious meal, or simply watch the CityCats glide by.",
            "practicalInfo": {
                  "howToGetThere": "Located at 5 Boundary Street, Brisbane City. Accessible via a scenic walk or cycle along the riverwalk from the city or New Farm. A glass lift connects the precinct to the top of the cliffs on Bowen Terrace.",
                  "openingHours": "Varies by venue, but the precinct is generally open from morning until late.",
                  "cost": "Free to enter; costs vary by restaurant and bar.",
                  "website": "https://howardsmithwharves.com"
            }
      },
      {
            "name": "Museum of Brisbane",
            "description": "Housed in the iconic, heritage-listed Brisbane City Hall, the Museum of Brisbane (MoB) offers a fascinating look into the stories and soul of the city. Through a series of engaging exhibitions, the museum explores the people, places, and histories that have shaped Brisbane. The exhibitions are often contemporary and thought-provoking, celebrating local artists, designers, and historical events.\n\nWhile you're there, don't miss the opportunity to take the free tour up the iconic Clock Tower. A guide will take you up in one of Brisbane's oldest working cage lifts for a bird's-eye view of King George Square and the surrounding CBD. It’s a small but deeply personal museum that provides rich context to your visit.",
            "practicalInfo": {
                  "howToGetThere": "Located on Level 3 of Brisbane City Hall in King George Square, CBD.",
                  "openingHours": "Daily from 10 AM to 5 PM.",
                  "cost": "Free general admission. Bookings for the Clock Tower tour are recommended.",
                  "website": "https://www.museumofbrisbane.com.au"
            }
      },
      {
            "name": "New Farm Park & Brisbane Powerhouse",
            "description": "One of Brisbane's oldest and grandest parks, New Farm Park is a beloved local institution. Spanning 37 acres, it's famous for its stunning rose gardens, which bloom spectacularly in spring and autumn. With vast lawns, shady jacaranda trees, and a large adventure playground, it's an idyllic spot for a picnic or a game of frisbee.\n\nAdjacent to the park on the riverbank is the Brisbane Powerhouse, a former power station transformed into a vibrant arts centre. This industrial-chic venue hosts a dynamic program of theatre, music, comedy, film, and visual arts. It also features two restaurants, weekend farmers' markets, and a lively atmosphere, making the entire precinct a fantastic cultural and recreational destination.",
            "practicalInfo": {
                  "howToGetThere": "Located in the suburb of New Farm. Accessible by bus or a scenic CityCat ferry ride to the New Farm Park terminal.",
                  "openingHours": "New Farm Park is open 24/7. Powerhouse opening hours vary based on shows and events.",
                  "cost": "Park is free. Powerhouse is free to enter, but performances are ticketed.",
                  "website": "https://brisbanepowerhouse.org"
            }
      },
      {
            "name": "Roma Street Parkland",
            "description": "Roma Street Parkland is a horticultural masterpiece and one of the world's finest subtropical gardens. A short walk from the CBD, this 16-hectare parkland features a spectacular array of themed gardens, connected by winding pathways and pristine lawns. Highlights include the Spectacle Garden, with its dazzling seasonal floral displays, and the serene rainforest and fern gully.\n\nWater features, public art, and ample picnic spots with free electric barbecues make it a popular escape for city workers and visitors. You can explore on foot or hop on the Parkland Explorer, a trackless train that offers guided tours. It's a stunning example of contemporary garden design and a peaceful oasis in the city.",
            "practicalInfo": {
                  "howToGetThere": "Located next to Roma Street Station, a major transport hub. Easily walkable from the northern end of the CBD.",
                  "openingHours": "Daily from dawn till dusk.",
                  "cost": "Free.",
                  "website": "https://www.brisbane.qld.gov.au/things-to-see-and-do/council-venues-and-precincts/parks/roma-street-parkland"
            }
      },
      {
            "name": "Queen Street Mall",
            "description": "The Queen Street Mall is Brisbane's premier shopping destination, a vibrant pedestrian mall stretching for over half a kilometre through the heart of the CBD. It's home to more than 700 retailers, from international luxury brands and large department stores like Myer and David Jones, to local boutiques and souvenir shops housed in beautiful heritage-listed arcades like the Brisbane Arcade.\n\nBeyond shopping, the mall is a hub of activity with a constant stream of street performers, pop-up events, and numerous cafes and food courts. It connects several large shopping centres, making it easy to spend a full day exploring. It’s the bustling commercial heart of Brisbane.",
            "practicalInfo": {
                  "howToGetThere": "Located in the center of the Brisbane CBD. All major bus and train routes stop nearby.",
                  "openingHours": "Standard retail hours, typically 9 AM - 5:30 PM, with late-night shopping on Friday.",
                  "cost": "Free to walk through.",
                  "website": "https://www.visitbrisbane.com.au/the-city/shopping/queen-street-mall"
            }
      },
      {
            "name": "Moreton Island Day Trip",
            "description": "Escape the city for a day and discover the pristine natural beauty of Moreton Island (Mulgumpin). The third-largest sand island in the world, it's a paradise of sandy beaches, crystal-clear lakes, and lush vegetation. Most of the island is a protected national park, offering a true nature-based adventure just a 75-minute ferry ride from Brisbane.\n\nPopular activities include snorkeling or kayaking around the famous Tangalooma Wrecks, a cluster of sunken ships that have created a thriving marine habitat. You can also try sand tobogganing down massive dunes, swimming in the freshwater Blue Lagoon, or spotting wildlife like dolphins and sea turtles. Several tour operators offer all-inclusive day trips from the mainland.",
            "practicalInfo": {
                  "howToGetThere": "Accessible via passenger ferry or vehicle barge from the Port of Brisbane. Day tours typically include ferry transport.",
                  "openingHours": "Day tours operate daily, weather permitting.",
                  "cost": "Day tours range from approximately $150 to $250 AUD per person.",
                  "website": "https://www.visitmoretonisland.com"
            }
      },
      {
            "name": "West End Markets",
            "description": "Experience Brisbane's bohemian spirit at the Davies Park Market in West End, more commonly known as the West End Markets. Held every Saturday, these sprawling markets are a local institution, set under the shade of giant fig trees along the river. It's a bustling, eclectic mix of farm-fresh produce, international food stalls, artisan goods, vintage clothing, and live music.\n\nIt's the perfect place to grab a delicious breakfast or coffee, stock up on fresh fruit and vegetables, and browse for unique handmade crafts and gifts. The vibe is relaxed, friendly, and authentically Brisbane, offering a fantastic snapshot of the city's diverse and creative community.",
            "practicalInfo": {
                  "howToGetThere": "Located at Davies Park, corner of Montague Road and Jane Street, West End. Accessible by bus or a short ferry ride to the West End terminal.",
                  "openingHours": "Every Saturday from 6 AM to 2 PM.",
                  "cost": "Free to enter.",
                  "website": "https://daviesparkmarket.com.au"
            }
      }
]}
      logistics={{
      "gettingAround": "Brisbane's public transport is managed by Translink and includes buses, trains, and the iconic CityCat ferries. Purchase a 'Go Card' or use contactless payment for easy travel. The city center is very walkable, and the free City Loop and Spring Hill Loop bus services are great for getting around the CBD. Ride-sharing services and taxis are also widely available.",
      "whereToStay": "For first-time visitors, the CBD offers ultimate convenience and access to shopping and dining. South Bank is perfect for families and culture lovers, with parklands and galleries on your doorstep. Fortitude Valley is the hub for nightlife and live music, while chic and leafy New Farm offers a more relaxed, boutique experience. Recommended hotels include The Calile (Fortitude Valley), W Brisbane (CBD), and Emporium Hotel (South Bank).",
      "bestTimeToVisit": "Brisbane's subtropical climate makes it a year-round destination. However, the best times to visit are during autumn (March-May) and spring (September-November). During these seasons, you'll enjoy warm, sunny days and comfortable nights, perfect for exploring the outdoors. Summer (December-February) can be hot and humid with occasional thunderstorms, while winter (June-August) is mild and dry with cool nights.",
      "suggestedItinerary": "A simple 3-day itinerary plan:\nDay 1: Explore South Bank Parklands, take a dip at Streets Beach, and visit QAGOMA. In the afternoon, take a CityCat ferry ride to Howard Smith Wharves for sunset drinks and dinner under the Story Bridge.\nDay 2: Take a morning trip to Lone Pine Koala Sanctuary to cuddle a koala. In the afternoon, head to Mount Coot-tha Lookout for panoramic city views. Enjoy the bohemian vibe and diverse eateries in West End for dinner.\nDay 3: Spend the morning shopping at Queen Street Mall, followed by a relaxing walk through the City Botanic Gardens. In the afternoon, choose your adventure: an exhilarating Story Bridge Climb or a peaceful visit to New Farm Park and the Brisbane Powerhouse."
}}
      faqs={[
      {
            "question": "Is Brisbane expensive?",
            "answer": "Brisbane is generally considered more affordable than Sydney or Melbourne, but it is still a major Australian city. Costs for accommodation and dining can be moderate to high. However, there are many free activities to enjoy, such as visiting the South Bank Parklands, Roma Street Parkland, QAGOMA, and the Museum of Brisbane. Using the public transport system and eating at food markets can also help manage your budget."
      },
      {
            "question": "How many days do you need in Brisbane?",
            "answer": "To comfortably experience the main highlights of the city itself, 3 to 4 days is a good amount of time. This allows you to explore the CBD, South Bank, and key attractions like Lone Pine and Mount Coot-tha without feeling rushed. If you plan to take a day trip to places like Moreton Island or the Gold Coast, you should add an extra day for each excursion."
      },
      {
            "question": "Is Brisbane safe?",
            "answer": "Yes, Brisbane is generally a very safe city for tourists and locals. Standard precautions should be taken, as with any major city. Be aware of your surroundings, especially at night in entertainment precincts like Fortitude Valley. The city center and South Bank are well-lit and usually busy, but it's always wise to stick to populated areas after dark."
      },
      {
            "question": "What is Brisbane famous for?",
            "answer": "Brisbane is famous for its winding river, which is central to the city's identity and lifestyle. It's also known for its glorious subtropical climate and laid-back, outdoor-focused culture. Key highlights include the stunning South Bank Parklands with its inner-city beach, the world's largest koala sanctuary (Lone Pine), the iconic Story Bridge, and its thriving cultural and dining precincts like Howard Smith Wharves and James Street."
      }
]}
    />
  );
};