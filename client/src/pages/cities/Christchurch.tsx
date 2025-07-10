import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Christchurch: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Christchurch, New Zealand (2025 Guide)"
      description="Welcome to Christchurch, a city of resilience, innovation, and natural beauty. Known as the 'Garden City,' it masterfully blends its traditional English heritage with a vibrant, forward-thinking spirit born from renewal. Set against the backdrop of the rolling Port Hills and the vast Canterbury Plains, Christchurch offers a unique urban experience where tranquil parks and the gentle Avon River coexist with striking modern architecture and a world-class street art scene. The city serves as the perfect gateway to the incredible landscapes of the South Island, but it is a remarkable destination in its own right. From punting on the river to exploring poignant memorials and lively markets, discovering the best things to do in Christchurch is an inspiring journey through a city that has truly reinvented itself. Prepare to be captivated by its story, its people, and its undeniable charm."
      highlights={[
      "Christchurch Botanic Gardens",
      "Punting on the Avon River",
      "Christchurch Gondola",
      "Canterbury Museum",
      "Quake City"
]}
      attractions={[
      {
            "name": "Christchurch Botanic Gardens",
            "description": "An absolute oasis in the heart of the city, the Christchurch Botanic Gardens are a testament to why Christchurch is known as the 'Garden City.' Spanning 21 hectares, these magnificent gardens were founded in 1863 and showcase a spectacular collection of native and exotic plants. Wander through the lush fernery, admire the vibrant colours of the Central Rose Garden, and find a moment of peace in the tranquil New Zealand Gardens.\n\nThe sprawling lawns are perfect for a picnic, while the meandering paths invite leisurely strolls. Don't miss the Ilex Cafe for a coffee amidst the greenery or the stunning Cuningham House, a Victorian-era conservatory housing tropical plants. The gardens are a living museum and a beloved retreat for locals and visitors alike, offering beauty and serenity in every season.",
            "practicalInfo": {
                  "howToGetThere": "Located in the city centre, accessible via Rolleston Avenue. Easily walkable from most central hotels.",
                  "openingHours": "Grounds: Daily from 7:00 AM until one hour before sunset. Visitor Centre: 9:00 AM - 5:00 PM.",
                  "cost": "Free entry to the gardens. Charges may apply for guided tours.",
                  "website": "https://www.ccc.govt.nz/parks-and-gardens/christchurch-botanic-gardens"
            }
      },
      {
            "name": "Punting on the Avon River",
            "description": "Experience Christchurch from a unique and timeless perspective with a punting tour on the scenic Avon River. Dressed in traditional Edwardian attire, your skilled punter will guide you in a classic flat-bottomed boat along the serene waterway, which meanders through the city centre and the Botanic Gardens. It's a peaceful and romantic activity that feels a world away from the city buzz.\n\nAs you glide along, you'll see weeping willows trailing in the water, ducks paddling by, and the beautiful flora of the gardens. It’s a perfect way to relax, soak in the tranquil atmosphere, and appreciate the city's natural beauty. The 30-minute ride is a signature Christchurch experience that shouldn't be missed.",
            "practicalInfo": {
                  "howToGetThere": "Two departure points: Antigua Boat Sheds (2 Cambridge Terrace) or the Worcester Bridge landing (near the corner of Worcester Boulevard and Oxford Terrace).",
                  "openingHours": "Daily, 9:00 AM - 6:00 PM (Summer), 10:00 AM - 4:00 PM (Winter). Hours vary seasonally.",
                  "cost": "From approx. NZD $35 per adult for a shared punt.",
                  "website": "https://www.christchurchattractions.nz/punting-on-the-avon-river/"
            }
      },
      {
            "name": "Christchurch Gondola",
            "description": "For the most breathtaking panoramic views of Christchurch and beyond, take a ride on the Christchurch Gondola. The cable car ascends to the summit of Mount Cavendish in the Port Hills, offering spectacular 360-degree vistas of the city, the Canterbury Plains, the majestic Southern Alps, and the sparkling blue of the Pacific Ocean and Lyttelton Harbour.\n\nAt the summit complex, you can learn about the region's history with the Time Tunnel ride, enjoy a coffee with a view at the Red Rock Cafe, or browse the gift shop. Numerous walking and hiking trails also start from the summit, providing opportunities for further exploration of the beautiful Port Hills.",
            "practicalInfo": {
                  "howToGetThere": "10 Bridle Path Road, Heathcote Valley. Accessible by car (plenty of parking) or the number 28 bus from the city centre.",
                  "openingHours": "Daily, 10:00 AM - 5:00 PM.",
                  "cost": "Approx. NZD $35 per adult.",
                  "website": "https://www.christchurchattractions.nz/christchurch-gondola/"
            }
      },
      {
            "name": "Canterbury Museum",
            "description": "Delve into the rich cultural and natural history of the Canterbury region at this fascinating museum. Canterbury Museum houses an extensive collection of artifacts and exhibits covering everything from Māori history and early European settlement to the continent of Antarctica. Wander through a re-created Victorian Christchurch street, marvel at the Paua Shell House, and explore the diverse natural history displays.\n\nThe museum provides deep context to the land and people of this part of New Zealand. Please note that the main museum building on Rolleston Avenue is currently closed for a major redevelopment project, but a pop-up museum is operating in the central city, showcasing some of its most popular exhibits.",
            "practicalInfo": {
                  "howToGetThere": "The temporary location is at CoCA, 66 Gloucester Street, Christchurch Central City.",
                  "openingHours": "Daily, 9:00 AM - 5:00 PM.",
                  "cost": "Free entry; donations are welcome.",
                  "website": "https://www.canterburymuseum.com/"
            }
      },
      {
            "name": "Quake City",
            "description": "To truly understand modern Christchurch, a visit to Quake City is essential. This special exhibition by Canterbury Museum provides a powerful and moving account of the devastating earthquakes that struck the region in 2010 and 2011. Through personal stories, iconic objects, and interactive displays, the exhibition chronicles the events and the incredible resilience, innovation, and community spirit that followed.\n\nSee fragments of the ChristChurch Cathedral's spire, learn about the science behind the quakes, and hear first-hand accounts from those who lived through it. It's a poignant and thoughtfully curated experience that offers deep insight into the city's recent history and its ongoing recovery.",
            "practicalInfo": {
                  "howToGetThere": "299 Durham Street North, Christchurch Central City.",
                  "openingHours": "Daily, 10:00 AM - 5:00 PM.",
                  "cost": "Approx. NZD $20 per adult. Free for children.",
                  "website": "https://www.canterburymuseum.com/whats-on/quake-city/"
            }
      },
      {
            "name": "Christchurch Tramway",
            "description": "Hop on and off a beautifully restored heritage tram for a delightful tour of Christchurch's inner-city highlights. The Christchurch Tramway is not just a mode of transport but an attraction in itself, offering a narrated journey through the changing face of the city. The 50-minute loop includes 17 stops, taking you past key landmarks like New Regent Street, Cathedral Square, the Avon River, and the Canterbury Museum.\n\nYour ticket is valid for the entire day, allowing you to disembark and explore attractions at your leisure before rejoining the tram later. The onboard commentary provides fascinating insights into the city's history, architecture, and post-quake rebuild.",
            "practicalInfo": {
                  "howToGetThere": "You can board at any of the 17 stops. The main stop is at Cathedral Junction, 109 Worcester Street.",
                  "openingHours": "Daily, 9:00 AM - 6:00 PM (Summer), 10:00 AM - 5:00 PM (Winter).",
                  "cost": "Approx. NZD $30 per adult for an all-day pass.",
                  "website": "https://www.christchurchattractions.nz/christchurch-tram/"
            }
      },
      {
            "name": "Cardboard Cathedral",
            "description": "A powerful symbol of Christchurch's resilience and innovation, the Transitional Cathedral, commonly known as the 'Cardboard Cathedral,' is a must-see. Designed by Japanese architect Shigeru Ban, this temporary replacement for the earthquake-damaged ChristChurch Cathedral is an architectural marvel built from large-diameter cardboard tubes, timber, and steel.\n\nThe A-frame structure is surprisingly beautiful and serene inside, with stunning triangular stained-glass windows incorporating images from the original cathedral's rose window. It's a fully functioning church and a venue for concerts and events, representing hope and creative thinking in the face of adversity.",
            "practicalInfo": {
                  "howToGetThere": "Located at 234 Hereford Street, in the Latimer Square area of the central city.",
                  "openingHours": "Daily, 9:00 AM - 5:00 PM. Visitors are welcome outside of service times.",
                  "cost": "Free entry; donations are appreciated.",
                  "website": "https://www.cardboardcathedral.org.nz/"
            }
      },
      {
            "name": "Margaret Mahy Playground",
            "description": "Arguably one of the best and biggest playgrounds in the world, the Margaret Mahy Playground is a wonderland for children and the young at heart. Named after one of New Zealand's most beloved authors, this sprawling playground on the banks of the Avon River is a masterpiece of design, with dedicated zones for different age groups.\n\nFeaturing giant slides, a flying fox, water play areas with pumps and dams, sandpits, and climbing nets, it's a place of pure joy and energy. The imaginative equipment and thoughtful landscaping make it a fantastic free attraction for families, and a vibrant, colourful part of the renewed city centre.",
            "practicalInfo": {
                  "howToGetThere": "Located on Manchester Street by the Avon River, a short walk from Cathedral Square.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free.",
                  "website": "https://www.ccc.govt.nz/parks-and-gardens/playgrounds/show/36"
            }
      },
      {
            "name": "Air Force Museum of New Zealand",
            "description": "Located at Wigram, the birthplace of New Zealand military aviation, this museum is a national treasure. The Air Force Museum of New Zealand tells the story of the country's aviation history through an incredible collection of over 30 historic aircraft and countless artefacts. Get up close to a Spitfire, a Hercules, and even a Skyhawk jet.\n\nBeyond the aircraft, interactive displays bring the stories of pilots and ground crew to life. You can even take a simulated flight in a Mosquito. It's an engaging and comprehensive museum that appeals to all ages, not just aviation enthusiasts. Best of all, admission is free.",
            "practicalInfo": {
                  "howToGetThere": "45 Harvard Avenue, Wigram. About a 20-minute drive from the city centre. Accessible via bus routes.",
                  "openingHours": "Daily, 10:00 AM - 5:00 PM.",
                  "cost": "Free entry. Charges apply for simulator rides and guided tours.",
                  "website": "https://www.airforcemuseum.co.nz/"
            }
      },
      {
            "name": "Riverside Market",
            "description": "The culinary heart of Christchurch, Riverside Market is a bustling indoor market that celebrates the best of local food and produce. This vibrant, modern space is home to over 30 independent food stalls offering a huge variety of cuisines, from souvlaki and sushi to gourmet burgers and artisan cheese. It's the perfect place to grab lunch, a coffee, or ingredients for a special meal.\n\nThe market has a fantastic atmosphere, with communal seating and a lively buzz. Adjoining the food market is Riverside Lanes, which features boutique retail shops. Whether you're a serious foodie or just looking for a delicious and varied meal, a visit to Riverside Market is a sensory delight.",
            "practicalInfo": {
                  "howToGetThere": "Corner of Lichfield Street and Oxford Terrace, overlooking the Avon River in the central city.",
                  "openingHours": "Open 7 days. Most food stalls open from around 10:00 AM until late evening.",
                  "cost": "Free to enter; cost varies depending on what you purchase.",
                  "website": "https://riverside.nz/"
            }
      },
      {
            "name": "Port Hills",
            "description": "The Port Hills form the dramatic backdrop to Christchurch and are a fantastic natural playground for outdoor enthusiasts. These rugged hills, remnants of an ancient volcano, are crisscrossed with numerous trails for walking, trail running, and mountain biking, suitable for all fitness levels. The tracks offer spectacular views over the city on one side and Lyttelton Harbour on the other.\n\nPopular spots include the Bridle Path (a historic and steep walk between Lyttelton and Heathcote) and Victoria Park, which has a network of gentler tracks and a dog park. Driving up to the Sign of the Takahe or the Sign of the Kiwi offers fantastic viewpoints accessible by car. It's the perfect way to escape the city and immerse yourself in Canterbury's stunning landscape.",
            "practicalInfo": {
                  "howToGetThere": "Various access points. Dyers Pass Road is the main road traversing the hills. Victoria Park is accessible from Sign of the Takahe.",
                  "openingHours": "Accessible 24/7.",
                  "cost": "Free.",
                  "website": "https://www.ccc.govt.nz/parks-and-gardens/explore-parks/port-hills"
            }
      },
      {
            "name": "New Regent Street",
            "description": "Christchurch's most beautiful street, New Regent Street is a charming pedestrian mall renowned for its pastel-coloured buildings in the Spanish Mission Revival style. Built in the 1930s, it miraculously survived the earthquakes largely intact and has become a hub for boutique shopping, cafes, and bars.\n\nThe heritage tram runs right down the middle of the street, adding to its picturesque character. It's the perfect place for a coffee, a scoop of gelato, or a craft beer. At night, the street lights up, creating a magical atmosphere for an evening stroll or a pre-theatre drink at the adjoining Isaac Theatre Royal.",
            "practicalInfo": {
                  "howToGetThere": "Located in the central city, connecting Armagh Street and Gloucester Street.",
                  "openingHours": "Shops and cafes have individual operating hours, generally from morning until late.",
                  "cost": "Free to walk through.",
                  "website": "https://www.christchurchnz.com/explore/new-regent-street"
            }
      },
      {
            "name": "International Antarctic Centre",
            "description": "Located right next to Christchurch Airport, the International Antarctic Centre offers an immersive and interactive experience of the icy continent. Christchurch is one of only five official gateway cities to Antarctica, and this attraction brings the experience to you. Brave an Antarctic storm in the storm dome, watch Little Blue Penguins, and take a thrilling ride on the Hägglund, an all-terrain amphibious Antarctic vehicle.\n\nThe centre provides a fascinating look at life on Scott Base and the incredible science and exploration that takes place in Antarctica. It's a fun, educational, and unique attraction for the whole family, conveniently located for a visit upon arrival or before departure.",
            "practicalInfo": {
                  "howToGetThere": "38 Orchard Road, adjacent to Christchurch International Airport. A free penguin express shuttle runs from the city.",
                  "openingHours": "Daily, 9:00 AM - 5:30 PM.",
                  "cost": "Approx. NZD $59 per adult. Various family passes available.",
                  "website": "https://www.iceberg.co.nz/"
            }
      },
      {
            "name": "Sumner Beach",
            "description": "For a dose of sand and sea, head to the charming coastal suburb of Sumner, just a 20-minute drive from the city centre. Sumner Beach is a long, sandy beach popular for swimming, surfing, and walking. At low tide, you can walk around to the impressive Cave Rock, a large volcanic rock formation with a cave you can walk through.\n\nThe village itself has a laid-back, bohemian vibe with a great selection of cafes, restaurants, and boutique cinemas. A walk along the esplanade is a fantastic way to spend a sunny afternoon. It's the perfect city escape to enjoy Christchurch's coastal side.",
            "practicalInfo": {
                  "howToGetThere": "A 20-minute drive southeast of the city centre. Also accessible via the number 3 bus.",
                  "openingHours": "Accessible 24/7.",
                  "cost": "Free.",
                  "website": "https://www.christchurchnz.com/explore/destinations/sumner"
            }
      },
      {
            "name": "Willowbank Wildlife Reserve",
            "description": "For a guaranteed kiwi sighting and a wonderful introduction to New Zealand's native species, visit Willowbank Wildlife Reserve. The reserve is designed as a journey through the natural history of New Zealand, showcasing introduced pioneers, native wildlife, and heritage farm animals in a natural setting. The highlight for many is the nocturnal house where you can see the iconic kiwi bird foraging in a natural-like environment.\n\nBeyond the kiwi, you can see the ancient tuatara, the cheeky kea (the world's only alpine parrot), and many other native birds. The reserve is committed to conservation and breeding programs, making it an ethical and educational wildlife experience.",
            "practicalInfo": {
                  "howToGetThere": "60 Hussey Road, Northwood. About a 15-minute drive from the city centre.",
                  "openingHours": "Daily from 9:30 AM. Closing times vary seasonally.",
                  "cost": "Approx. NZD $32.50 per adult.",
                  "website": "https://www.willowbank.co.nz/"
            }
      }
]}
      logistics={{
      "gettingAround": "Christchurch's central city is flat and compact, making it highly walkable. For wider exploration, the Metro bus network is extensive and efficient. The heritage Christchurch Tramway offers a scenic loop of city centre attractions. Cycling is also a popular option, with dedicated cycle lanes throughout the city. Taxis and ride-sharing services like Uber are readily available.",
      "whereToStay": "The Central Business District (CBD) is ideal for first-time visitors, with easy access to attractions and dining; hotels like The George and Crowne Plaza are top choices. Merivale offers boutique accommodation and upscale shopping. Riccarton is great for mid-range and budget options near the university and a large shopping mall. For a coastal vibe, consider staying in the seaside suburb of Sumner.",
      "bestTimeToVisit": "Christchurch is a year-round destination. Summer (December-February) is warm and sunny, perfect for exploring the parks and beaches. Autumn (March-May) brings beautiful colours and pleasant temperatures. Winter (June-August) is crisp and cool, offering clear days and proximity to ski fields. Spring (September-November) is arguably the best time, as the 'Garden City' bursts into bloom with festivals like NZ Cup and Show Week.",
      "suggestedItinerary": "Day 1: Explore the central city. Start with the Botanic Gardens, take a punt on the Avon River, visit Quake City and the Canterbury Museum, and finish with dinner at the Riverside Market. \nDay 2: Gain some perspective. Ride the Christchurch Gondola for stunning views, followed by a walk or drive in the Port Hills. In the afternoon, head to the coastal suburb of Sumner for a walk on the beach. \nDay 3: Choose your adventure. Visit the International Antarctic Centre or Willowbank Wildlife Reserve in the morning. In the afternoon, take a full tour on the Christchurch Tram and explore the boutique shops on New Regent Street."
}}
      faqs={[
      {
            "question": "Is Christchurch expensive?",
            "answer": "Christchurch is moderately expensive, similar to other major cities in New Zealand and Australia. Accommodation can range from NZD $40 for a hostel dorm to over NZD $300 for a luxury hotel. A meal at a mid-range restaurant costs around NZD $25-40. However, there are many ways to save, including visiting free attractions like the Botanic Gardens and Air Force Museum, self-catering using produce from supermarkets or the Riverside Market, and utilizing the efficient public bus system."
      },
      {
            "question": "How many days do you need in Christchurch?",
            "answer": "To see the main highlights of the city itself, 2 to 3 days is a good amount of time. This allows you to explore the central city, visit a few key attractions like the Botanic Gardens and Quake City, and get up into the Port Hills. If you want to use Christchurch as a base for day trips to places like Akaroa, Arthur's Pass, or the Waipara wine region, consider staying for 4 to 5 days."
      },
      {
            "question": "Is Christchurch safe?",
            "answer": "Yes, Christchurch is generally a very safe city for travelers. Standard safety precautions should be taken, as in any city worldwide. Be aware of your surroundings, especially at night, keep valuables secure and out of sight in your vehicle, and stick to well-lit areas. The risk of seismic activity is low, and modern building codes are extremely stringent."
      },
      {
            "question": "What is Christchurch famous for?",
            "answer": "Christchurch is famous for several key things. It is known as the 'Garden City' for its many beautiful parks and gardens, especially the expansive Botanic Gardens. It is also known for its English heritage, visible in its neo-Gothic architecture and activities like punting on the Avon River. Most significantly in recent times, it is famous for its incredible resilience, creativity, and community spirit in rebuilding and reimagining the city after the devastating 2011 earthquake. Finally, it serves as the primary gateway to the stunning landscapes and adventures of the South Island."
      }
]}
    />
  );
};