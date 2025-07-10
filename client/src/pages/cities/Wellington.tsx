import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Wellington: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Wellington, New Zealand (2025 Guide)"
      description="Nestled between a sparkling harbour and rolling green hills, Wellington is New Zealand's compact, culture-packed capital. Affectionately known as the 'Coolest Little Capital in the World', it buzzes with a creative energy fueled by world-class coffee, a thriving craft beer scene, and an innovative film industry. Despite its infamous wind, the city's charm is undeniable, with a walkable waterfront, vibrant street art, and a treasure trove of museums and galleries. From the movie magic of 'Wellywood' to the native wildlife thriving just minutes from the city centre, there's a surprising diversity of experiences to uncover. Whether you're a foodie, a film buff, an art lover, or an outdoor enthusiast, this guide will walk you through the very best things to do in Wellington, ensuring an unforgettable visit to this dynamic corner of the world."
      highlights={[
      "Te Papa Tongarewa Museum",
      "Wellington Cable Car",
      "Wētā Workshop",
      "Zealandia Ecosanctuary",
      "Mount Victoria Lookout"
]}
      attractions={[
      {
            "name": "Te Papa Tongarewa Museum",
            "description": "More than just a museum, Te Papa Tongarewa translates to 'container of treasures' and is New Zealand's bold and innovative national museum. It offers an immersive journey through the country's art, history, and Māori culture across six floors of engaging, interactive exhibits. Highlights include the colossal squid, the powerful Gallipoli exhibition co-created with Wētā Workshop, and the authentic Rongomaraeroa marae (Māori meeting house).\n\nIt’s a place of storytelling and discovery, designed to challenge and inspire visitors of all ages. The sheer scale and quality of the exhibitions make it an absolute must-visit to understand the heart and soul of Aotearoa (New Zealand). Plan to spend at least half a day here, though you could easily fill an entire day.",
            "practicalInfo": {
                  "howToGetThere": "Located on the waterfront at 55 Cable Street, it's an easy walk from anywhere in the central city.",
                  "openingHours": "10:00 AM - 6:00 PM daily. Open until 9:00 PM on Thursdays.",
                  "cost": "Free general admission. Charges may apply for special exhibitions and tours.",
                  "website": "https://www.tepapa.govt.nz/"
            }
      },
      {
            "name": "Wellington Cable Car",
            "description": "A true Wellington icon, the historic red cable car has been trundling up the hill from Lambton Quay to the Kelburn lookout for over a century. The five-minute journey is a charming experience in itself, passing through tunnels illuminated with colourful light displays before emerging to breathtaking panoramic views of the city and harbour.\n\nAt the top, you'll find the Cable Car Museum and access to the Wellington Botanic Garden and Space Place observatory. It's the perfect starting point for a leisurely walk back down to the city through the gardens, offering a scenic and memorable perspective of the capital.",
            "practicalInfo": {
                  "howToGetThere": "The main terminal is located at 280 Lambton Quay in the central business district.",
                  "openingHours": "Mon-Fri 7:30 AM - 10:00 PM, Sat 8:30 AM - 10:00 PM, Sun & Public Holidays 8:30 AM - 9:00 PM.",
                  "cost": "Approx. NZD $6 one way for adults, with return and family passes available.",
                  "website": "https://www.wellingtoncablecar.co.nz/"
            }
      },
      {
            "name": "Wētā Workshop",
            "description": "Step into the world of movie magic at Wētā Workshop, the world-renowned special effects and prop company co-founded by Sir Peter Jackson. Famous for their work on The Lord of the Rings, Avatar, and Blade Runner 2049, Wētā offers fascinating behind-the-scenes tours that showcase the creativity and craftsmanship behind your favourite films.\n\nOn the Wētā Workshop Experience, you'll see props, costumes, and creatures up close and learn about the processes of design and manufacturing from the artists themselves. It's an unmissable experience for film fans, offering a glimpse into the imagination that put Wellington on the global filmmaking map.",
            "practicalInfo": {
                  "howToGetThere": "Located in Miramar. Take the No. 2 bus from the city centre or drive (approx. 20-30 minutes).",
                  "openingHours": "Tours run daily, typically from 9:00 AM. Booking in advance is essential.",
                  "cost": "Various tour options available, starting from approx. NZD $55 for adults.",
                  "website": "https://www.wetaworkshop.com/tours/"
            }
      },
      {
            "name": "Zealandia Ecosanctuary",
            "description": "Just ten minutes from downtown Wellington lies Zealandia, a groundbreaking 225-hectare urban ecosanctuary. Enclosed by a predator-proof fence, this lush valley is a haven where New Zealand's rare and endangered native birds, reptiles, and insects can thrive as they once did. Walking through Zealandia feels like stepping back in time.\n\nYou can spot birds like the kākā (a native parrot), tīeke (saddleback), and the little spotted kiwi (on night tours). The sanctuary’s 500-year vision is to restore the forest and freshwater ecosystems to their pre-human state. It's an inspiring conservation success story and a beautiful place for a walk.",
            "practicalInfo": {
                  "howToGetThere": "50 Waiapu Road, Karori. A free shuttle runs from the city i-SITE and top of the Cable Car.",
                  "openingHours": "9:00 AM - 5:00 PM daily (last entry 4:00 PM). Night tours must be pre-booked.",
                  "cost": "Approx. NZD $24 for adults for general admission.",
                  "website": "https://www.visitzealandia.com/"
            }
      },
      {
            "name": "Mount Victoria Lookout",
            "description": "For the best 360-degree views of Wellington, a trip up Mount Victoria is essential. Whether you drive, catch a bus, or take the scenic walk up through the forest, the summit offers a stunning panorama of the city, harbour, and surrounding hills. It's the perfect spot to get your bearings and capture that iconic photo of Wellington.\n\nThe lookout is spectacular at any time of day, but it's particularly magical at sunrise or sunset. Film fans will also recognize the forested slopes as a filming location for 'The Lord of the Rings', where the hobbits hid from the Nazgûl.",
            "practicalInfo": {
                  "howToGetThere": "Accessible via Alexandra Road by car, or take the No. 20 bus. Numerous walking tracks lead up from Oriental Bay and the central city.",
                  "openingHours": "24/7",
                  "cost": "Free",
                  "website": "https://wellington.govt.nz/recreation/outdoors/parks-and-reserves/city-and-town-belts/mount-victoria"
            }
      },
      {
            "name": "Cuba Street",
            "description": "Cuba Street is the bohemian heart and creative soul of Wellington. This vibrant, colourful pedestrian mall is a hub of activity, lined with quirky cafes, vintage clothing stores, independent record shops, and unique boutiques. It's famous for its alternative culture and the iconic Bucket Fountain, a kinetic sculpture that delights and occasionally splashes passersby.\n\nIt’s the best place in the city for people-watching, grabbing a coffee, or discovering a hidden gem in one of its many laneways. The street's diverse culinary scene comes alive at night, with an array of restaurants and bars offering flavours from around the globe.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Te Aro district, it's a short walk from the CBD and waterfront.",
                  "openingHours": "Shops typically 10:00 AM - 6:00 PM; restaurants and bars open late.",
                  "cost": "Free to wander.",
                  "website": "https://www.cubastreet.co.nz/"
            }
      },
      {
            "name": "Wellington Botanic Garden",
            "description": "Spanning 25 hectares of hillside, the Wellington Botanic Garden is a tranquil oasis of native forest, exotic trees, and colourful floral displays. Established in 1868, it's a garden of national significance and a beautiful place to explore. Key areas include the award-winning Lady Norwood Rose Garden, the Begonia House, and the extensive native bush.\n\nAccessible via the Cable Car, the gardens offer a peaceful escape from the city buzz. Winding paths lead you through different collections and offer stunning views. During summer, the garden hosts concerts and events, making it a lively community hub.",
            "practicalInfo": {
                  "howToGetThere": "Main entrance is at the top of the Cable Car in Kelburn. Also accessible from Tinakori Road.",
                  "openingHours": "Garden is open 24/7. Begonia House and Treehouse Visitor Centre have specific hours.",
                  "cost": "Free",
                  "website": "https://wellington.govt.nz/recreation/outdoors/gardens/botanic-garden"
            }
      },
      {
            "name": "City Gallery Wellington Te Whare Toi",
            "description": "Housed in a beautiful heritage building in Te Ngākau Civic Square, City Gallery Wellington is the capital's premier contemporary art gallery. It doesn't have a permanent collection, instead hosting a dynamic and ever-changing programme of exhibitions by leading international and New Zealand artists.\n\nThe gallery is known for its thought-provoking and often challenging exhibitions that span painting, sculpture, photography, and multimedia installations. It’s a must-visit for anyone interested in contemporary art and culture, offering a window into the current creative landscape.",
            "practicalInfo": {
                  "howToGetThere": "Located in Te Ngākau Civic Square, a short walk from Cuba Street and the waterfront.",
                  "openingHours": "10:00 AM - 5:00 PM daily.",
                  "cost": "Free",
                  "website": "https://citygallery.org.nz/"
            }
      },
      {
            "name": "The Beehive & Parliament Buildings",
            "description": "Discover the heart of New Zealand's democracy by visiting the iconic Parliament Buildings. The complex consists of three architecturally distinct buildings: the grand Edwardian neo-classical Parliament House, the Victorian Gothic Parliamentary Library, and the distinctive 1970s 'Beehive' (the Executive Wing).\n\nFree guided tours run daily, offering a fascinating insight into the country's political history and processes. You'll explore key rooms, learn about parliamentary procedure, and admire the impressive architecture from the inside. It’s a surprisingly engaging and informative experience.",
            "practicalInfo": {
                  "howToGetThere": "Located at the northern end of Lambton Quay.",
                  "openingHours": "Tours run daily on the hour, typically from 10:00 AM to 4:00 PM. Booking is recommended.",
                  "cost": "Free",
                  "website": "https://www.parliament.nz/en/visit-and-learn/"
            }
      },
      {
            "name": "Wellington Waterfront",
            "description": "The Wellington Waterfront is the city's premier recreational space, a wide, accessible promenade that stretches from the railway station to Oriental Bay. It's a fantastic place to walk, cycle, or skate while enjoying views of the harbour. The area is dotted with sculptures, parks, cafes, and bars.\n\nKey spots along the way include the City to Sea Bridge with its distinctive wooden sculptures, Te Papa museum, and Frank Kitts Park with its popular playground. You can also rent kayaks or paddleboards to explore the harbour from a different perspective. On weekends, the waterfront comes alive with bustling markets.",
            "practicalInfo": {
                  "howToGetThere": "Easily accessible from anywhere in the central city.",
                  "openingHours": "24/7",
                  "cost": "Free",
                  "website": "https://www.wellingtonwaterfront.co.nz/"
            }
      },
      {
            "name": "Oriental Bay",
            "description": "Often called Wellington's 'Riviera', Oriental Bay is the city's main beach, a beautiful crescent of golden sand just a short walk from the central business district. On a sunny day, it's the place to be, with locals and visitors alike swimming, sunbathing, and enjoying the vibrant atmosphere.\n\nThe promenade is perfect for a stroll, with stunning views back towards the city. Grab an ice cream or fish and chips from one of the local dairies or enjoy a meal at a seaside cafe. It’s a slice of beach life right on the edge of the capital.",
            "practicalInfo": {
                  "howToGetThere": "A 15-20 minute scenic walk from Te Papa along the waterfront.",
                  "openingHours": "24/7",
                  "cost": "Free",
                  "website": "https://wellington.govt.nz/recreation/outdoors/beaches-and-coast/central-suburbs/oriental-bay-beach"
            }
      },
      {
            "name": "Hannahs Laneway (The 'World's Tastiest Laneway')",
            "description": "A foodie paradise tucked away off Ghuznee Street, Hannahs Laneway is a must for anyone with an appetite. This small lane is packed with artisan producers, including the Wellington Chocolate Factory, Fix & Fogg's 'peanut butter window', Goldie's delicatessen, and Lashings for decadent brownies.\n\nIt’s a celebration of local craft and flavour, where you can see products being made and sample the goods. Start with a coffee, try some gourmet chocolate, grab a jar of artisan peanut butter, and finish with a craft beer at Fortune Favours brewery. It perfectly encapsulates Wellington's vibrant food scene in one delicious block.",
            "practicalInfo": {
                  "howToGetThere": "Located between Ghuznee and Leeds Streets, just off Cuba Street.",
                  "openingHours": "Varies by vendor, but most are open during standard daytime business hours.",
                  "cost": "Free to walk through; costs vary by purchase.",
                  "website": "https://www.wellingtonnz.com/visit/eat-and-drink/hannahs-laneway"
            }
      },
      {
            "name": "Space Place at Carter Observatory",
            "description": "Journey through the southern skies at Space Place, located at the top of the Botanic Garden. This world-class observatory offers a fascinating, interactive experience for all ages. Explore multimedia exhibits on planets, stars, and galaxies, and experience the universe in the full-dome planetarium, which features incredible films about space and astronomy.\n\nOn clear nights (Tuesdays and Saturdays), you can look through the powerful Thomas Cooke telescope for a real-life glimpse of the cosmos. It's a captivating experience that combines science and wonder, with fantastic views back down over the city.",
            "practicalInfo": {
                  "howToGetThere": "At the top of the Wellington Botanic Garden, accessible via the Cable Car.",
                  "openingHours": "Tue & Fri-Sun: 10am-5pm, Wed-Thu: 4pm-9.30pm, Sat: 10am-9.30pm. Check website for seasonal changes.",
                  "cost": "Approx. NZD $14 for adults, includes one planetarium show.",
                  "website": "https://www.museumswellington.org.nz/space-place/"
            }
      },
      {
            "name": "Matiu/Somes Island",
            "description": "Sitting in the middle of Wellington Harbour, Matiu/Somes Island is a scientific and historic reserve with a rich history. Once a human quarantine station and an internment camp, it's now a predator-free sanctuary for native wildlife, including tuatara, little blue penguins, and giant wētā.\n\nA short ferry ride takes you to this peaceful island where you can explore historic buildings, enjoy a picnic, and walk the scenic tracks. It offers a unique perspective on the city and a chance to see rare native species up close. Remember to check your bags for pests before you go to help protect the island's precious ecosystem.",
            "practicalInfo": {
                  "howToGetThere": "Take the East by West Ferry from Queens Wharf in the city.",
                  "openingHours": "Island is open daily. Ferry times vary, so check the schedule.",
                  "cost": "Ferry fare is approx. NZD $28 return for adults. Access to the island is free.",
                  "website": "https://www.doc.govt.nz/parks-and-recreation/places-to-go/wellington-kapiti/places/matiu-somes-island/"
            }
      },
      {
            "name": "Red Rocks Reserve (Pariwhero)",
            "description": "Embark on a rugged coastal walk at Red Rocks Reserve on Wellington's south coast. The reserve is famous for its striking red-coloured rocks, ancient formations stained by iron oxides. The easy, relatively flat walk follows the coastline, offering spectacular views of Cook Strait and the South Island on a clear day.\n\nBetween May and October, the main attraction is the colony of New Zealand fur seals that takes up residence at Sinclair Head, at the far end of the walkway. It's a fantastic, wild coastal experience just a short drive from the city centre, showcasing Wellington's untamed natural beauty.",
            "practicalInfo": {
                  "howToGetThere": "Located at the end of Owhiro Bay Parade. Drive or take the No. 29 bus to the end of the line and walk from there.",
                  "openingHours": "24/7. Best visited at low tide.",
                  "cost": "Free",
                  "website": "https://wellington.govt.nz/recreation/outdoors/walks-and-walkways/south-coast/red-rocks-coastal-walk"
            }
      }
]}
      logistics={{
      "gettingAround": "Wellington's central city is compact and highly walkable. For destinations further afield, the Metlink public transport system is efficient, with an extensive network of buses and trains. A Snapper card is a rechargeable travel card that offers cheaper fares. Ride-sharing services like Uber and taxis are readily available, and the East by West ferry provides a scenic way to cross the harbour.",
      "whereToStay": "The CBD and Lambton Quay are ideal for first-time visitors, offering easy access to the waterfront, shops, and transport. Te Aro, especially around Cuba Street, is perfect for those seeking nightlife, cafes, and a bohemian vibe. For stunning harbour views and a more relaxed atmosphere, consider Oriental Bay. Top hotels include the luxury QT Wellington, the mid-range Atura Wellington, and the budget-friendly The Marion Hostel.",
      "bestTimeToVisit": "The best time to visit Wellington is during the summer months (December to February) when the weather is warmest and sunniest, perfect for enjoying the waterfront and beaches. However, the shoulder seasons of spring (September to November) and autumn (March to May) are also excellent, with pleasant temperatures and fewer crowds. Be prepared for wind at any time of year—it's called 'Windy Welly' for a reason!",
      "suggestedItinerary": "[object Object]"
}}
      faqs={[
      {
            "question": "Is Wellington expensive?",
            "answer": "Wellington can be moderately expensive, comparable to other major cities in New Zealand. Accommodation and dining out are the biggest costs. However, there are many free activities, such as visiting Te Papa museum, walking the waterfront, exploring Mount Victoria, and relaxing in the Botanic Garden. Supermarkets offer affordable food options, and using public transport with a Snapper card can help manage costs."
      },
      {
            "question": "How many days do you need in Wellington?",
            "answer": "Three full days is an ideal amount of time to explore Wellington's main attractions without feeling rushed. This allows you to cover the city's cultural highlights, natural sanctuaries, and film industry sights. If you wish to explore more of the surrounding region, such as the Kapiti Coast or Wairarapa wine region, consider extending your stay to 4-5 days."
      },
      {
            "question": "Is Wellington safe?",
            "answer": "Wellington is generally a very safe city for travellers. The central city is well-lit and busy. However, like any city, it's wise to take standard precautions. Be aware of your surroundings, especially at night in entertainment districts like Courtenay Place. Keep valuables secure and out of sight. The emergency number in New Zealand is 111."
      },
      {
            "question": "What is Wellington famous for?",
            "answer": "Wellington is famous for several key things: its vibrant arts and culture scene, its title as the 'Coolest Little Capital in the World', and its world-class coffee and craft beer. It's also known as 'Wellywood' due to its prominent role in the international film industry, spearheaded by Peter Jackson and Wētā Workshop. And, of course, it's famous for its powerful wind that funnels through the Cook Strait."
      }
]}
    />
  );
};