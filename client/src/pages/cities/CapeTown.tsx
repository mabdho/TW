import React from 'react';
import { CityPage } from '../../components/CityPage';

export const CapeTown: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Cape Town, South Africa (2025 Guide)"}
      description={"Affectionately known as the 'Mother City', Cape Town is a breathtaking fusion of dramatic natural landscapes and vibrant urban life. Cradled by the iconic Table Mountain and flanked by the Atlantic and Indian Oceans, this South African gem offers a sensory feast. From its poignant history encapsulated on Robben Island to the colourful facades of Bo-Kaap and world-class vineyards just a short drive away, the city’s culture is as diverse as its scenery. Whether you're hiking a mountain at sunrise, watching penguins on a pristine beach, or indulging in its innovative culinary scene, you’ll find no shortage of unforgettable moments. This guide will walk you through the very best things to do in Cape Town, ensuring your visit is nothing short of spectacular. Prepare to be captivated by its charm, energy, and unparalleled beauty."}
      highlights={["Table Mountain National Park",
        "Robben Island Museum",
        "Victoria & Alfred (V&A) Waterfront",
        "Kirstenbosch National Botanical Garden",
        "Boulders Beach Penguin Colony"]}
      attractions={[
        {
        name: "Table Mountain National Park",
        description: "Dominating the city's skyline, Table Mountain is Cape Town's most iconic landmark. This flat-topped monolith offers breathtaking 360-degree views of the city, Robben Island, and the vast Atlantic Ocean. A UNESCO World Heritage Site, it's a haven for nature lovers, boasting a rich biodiversity with thousands of unique plant species, part of the Cape Floral Kingdom.\n\nWhether you choose to hike one of the many trails to the summit or take the scenic five-minute ride on the state-of-the-art cable car, reaching the top is an essential Cape Town experience. The plateau offers several well-marked walking paths, a café, and viewpoints that make for perfect photo opportunities, especially at sunrise or sunset.",
        practicalInfo: {
        howToGetThere: "The Lower Cable Station is on Tafelberg Road. Take a MyCiTi bus (route 107), a taxi/ride-hailing service, or the City Sightseeing bus.",
        openingHours: "Varies seasonally. Typically 8:00 AM - 7:00 PM in summer, shorter hours in winter. Check the website for the latest schedule as it's weather-dependent.",
        cost: "Cable car: Approx. R240-R420 for a return ticket (prices vary by time of day). Hiking is free (excluding park conservation fees in some areas).",
        website: "https://www.tablemountain.net/"
      }
      },
        {
        name: "Robben Island Museum",
        description: "A short ferry ride from the V&A Waterfront lies Robben Island, a place of immense historical significance. For centuries, it was a place of banishment and imprisonment, most famously holding Nelson Mandela for 18 of his 27 years in prison. Today, it is a UNESCO World Heritage site and a powerful museum that serves as a reminder of South Africa's journey to democracy.\n\nThe tour is a deeply moving experience, often led by former political prisoners who share their personal stories. You will visit the maximum-security prison, see Mandela's former cell, and learn about the harsh conditions and the resilient spirit of those who were incarcerated there.",
        practicalInfo: {
        howToGetThere: "Ferries depart from the Nelson Mandela Gateway at the V&A Waterfront. Booking in advance is essential.",
        openingHours: "Tours typically depart at 9:00 AM, 11:00 AM, and 1:00 PM. The entire tour takes about 3.5-4 hours.",
        cost: "Approx. R600 for adults (includes ferry ride and guided tour).",
        website: "https://www.robben-island.org.za/"
      }
      },
        {
        name: "Victoria & Alfred (V&A) Waterfront",
        description: "The V&A Waterfront is a vibrant and bustling hub set against the stunning backdrop of Table Mountain. This working harbour is one of Cape Town's most popular destinations, seamlessly blending historical charm with modern shopping, dining, and entertainment. Visitors can explore hundreds of retail stores, from local crafts to international luxury brands.\n\nThe area is also a cultural hotspot, home to the Zeitz MOCAA, the Two Oceans Aquarium, and an amphitheater with regular live performances. Enjoy a meal at a world-class restaurant, take a sunset cruise, or simply soak in the lively atmosphere while watching the resident seals frolic in the harbour.",
        practicalInfo: {
        howToGetThere: "Located between Robben Island and Table Mountain. Easily accessible by car, MyCiTi bus, or a short walk from the city center.",
        openingHours: "Shops: 9:00 AM - 9:00 PM daily. Restaurants have varied hours.",
        cost: "Free to enter and walk around. Individual activities and shopping have their own costs.",
        website: "https://www.waterfront.co.za/"
      }
      },
        {
        name: "Kirstenbosch National Botanical Garden",
        description: "Nestled on the eastern slopes of Table Mountain, Kirstenbosch is acclaimed as one of the great botanic gardens of the world. Devoted entirely to indigenous flora, the garden showcases the incredible diversity of South Africa's plant life. Manicured lawns blend into natural fynbos and forests, creating a tranquil escape from the city.\n\nDon't miss the Centenary Tree Canopy Walkway (the 'Boomslang'), a curved steel and timber bridge that winds through the treetops, offering spectacular views. The garden is perfect for a leisurely stroll, a family picnic, or attending one of the famous Summer Sunset Concerts (November to April).",
        practicalInfo: {
        howToGetThere: "Located in Newlands, about 13km from the city center. Accessible by car, taxi/ride-hailing, or the City Sightseeing bus.",
        openingHours: "Daily, 8:00 AM - 7:00 PM (Sep-Mar), 8:00 AM - 6:00 PM (Apr-Aug).",
        cost: "Approx. R220 for adults.",
        website: "https://www.sanbi.org/gardens/kirstenbosch/"
      }
      },
        {
        name: "Boulders Beach Penguin Colony",
        description: "One of Cape Town's most delightful experiences is visiting the African penguin colony at Boulders Beach. Located near Simon's Town, this sheltered cove is home to thousands of these charming, waddling birds. A series of wooden boardwalks allows you to get incredibly close to the penguins in their natural habitat without disturbing them.\n\nThe beach itself, with its ancient granite boulders protecting it from the wind and large waves, is a beautiful spot for a swim (if you can brave the chilly water). It's a fantastic and unique wildlife encounter that is enjoyable for all ages.",
        practicalInfo: {
        howToGetThere: "Located in Simon's Town, a 45-minute drive from the city center. You can also take a train to Simon's Town and walk or take a short taxi ride.",
        openingHours: "Varies seasonally, generally from 8:00 AM to 5:00 PM or later in summer.",
        cost: "Approx. R190 for international adults. Part of the Table Mountain National Park.",
        website: "https://www.sanparks.org/parks/table_mountain/tourism/attractions.php#boulders"
      }
      },
        {
        name: "Cape of Good Hope",
        description: "Part of the Table Mountain National Park, the Cape of Good Hope is the dramatic, rocky headland at the tip of the Cape Peninsula. It's a place of wild, rugged beauty, where you can see crashing waves, diverse fynbos, and wildlife like baboons, ostriches, and antelope. Though not the southernmost point of Africa (that's Cape Agulhas), its historical significance and raw scenery are undeniable.\n\nTake the Flying Dutchman Funicular or walk up to the old lighthouse at Cape Point for breathtaking panoramic views of the peninsula. Explore hiking trails, discover secluded beaches like Diaz Beach, and feel the powerful sense of being at the edge of a continent.",
        practicalInfo: {
        howToGetThere: "Best reached by car as part of a day trip around the Cape Peninsula, about a 90-minute drive from Cape Town.",
        openingHours: "Daily. Sunrise to sunset (approx. 6:00 AM - 6:00 PM).",
        cost: "National Park conservation fee: Approx. R400 for international adults.",
        website: "https://capepoint.co.za/"
      }
      },
        {
        name: "District Six Museum",
        description: "The District Six Museum offers a poignant look into the heart of a once-vibrant, mixed-race community that was forcibly dismantled during the apartheid era. In 1966, the government declared District Six a 'whites-only' area, and over 60,000 residents were relocated, their homes bulldozed.\n\nThe museum serves as a memorial to this community. Through photographs, recordings, and personal testimonials, it tells the stories of the people who lived there. A large map on the floor allows former residents to mark where their homes once stood, making for a powerful and deeply personal exhibition. It's an essential visit for understanding Cape Town's complex social history.",
        practicalInfo: {
        howToGetThere: "Located at 25A Buitenkant Street in the city center, easily accessible on foot or by taxi from most central locations.",
        openingHours: "Monday - Saturday: 9:00 AM - 4:00 PM. Closed on Sundays.",
        cost: "Approx. R60 for a self-guided tour.",
        website: "https://www.districtsix.co.za/"
      }
      },
        {
        name: "Bo-Kaap",
        description: "Famous for its brightly coloured houses and cobblestone streets, Bo-Kaap is one of Cape Town's most visually striking neighbourhoods. Situated on the slopes of Signal Hill, this area is the historical heart of the Cape Malay culture. The residents, descendants of slaves brought from Malaysia, Indonesia, and other parts of Africa, painted their homes in vibrant colours to celebrate their freedom.\n\nBeyond the photogenic streets, Bo-Kaap offers a rich cultural experience. Visit the Bo-Kaap Museum, take a Cape Malay cooking class to learn about the unique fusion cuisine, and listen for the call to prayer from the historic Auwal Mosque. A walk through this neighbourhood is a feast for the eyes and the soul.",
        practicalInfo: {
        howToGetThere: "A short walk from the city center, just west of Buitengracht Street. Best explored on foot.",
        openingHours: "24/7 for walking around, but be respectful as it is a residential area.",
        cost: "Free to walk around.",
        website: "N/A (Community area)"
      }
      },
        {
        name: "Chapman's Peak Drive",
        description: "Often cited as one of the most scenic marine drives in the world, Chapman's Peak Drive is a must-do for anyone visiting Cape Town. This 9km toll road winds its way between Noordhoek and Hout Bay, carved into the side of the mountain with the glittering Atlantic Ocean below. There are numerous viewpoints and picnic spots along the way where you can stop to absorb the magnificent scenery.\n\nThe drive is an engineering marvel, offering spectacular views of the rugged coastline, sandy bays, and turquoise water. It's a popular spot for photography, cycling, and witnessing the sunset. Check the website before you go, as the road can be closed due to bad weather or rockfalls.",
        practicalInfo: {
        howToGetThere: "Accessible by car. The drive starts in Hout Bay on the Atlantic Seaboard and ends in Noordhoek.",
        openingHours: "24/7, but subject to weather-related closures.",
        cost: "Toll fee of approx. R61 per light motor vehicle (one way).",
        website: "https://www.chapmanspeakdrive.co.za/"
      }
      },
        {
        name: "Lion's Head and Signal Hill",
        description: "For some of the best views of Table Mountain and the city, a hike up Lion's Head is unbeatable. This distinctive peak offers a 360-degree perspective of the City Bowl, Camps Bay, and the Atlantic seaboard. The hike is moderately challenging, involving some scrambling and climbing via ladders and chains near the summit, but the reward is immense. Full moon and sunrise hikes are particularly popular.\n\nAdjacent Signal Hill offers a less strenuous alternative. You can drive to the top, making it the perfect spot for a sunset picnic while watching the city lights begin to twinkle below. The historic Noon Gun is fired from Signal Hill every day at 12:00 PM (except Sundays).",
        practicalInfo: {
        howToGetThere: "The trailhead for Lion's Head is on Signal Hill Road. You can drive or take a taxi to the start point.",
        openingHours: "Accessible 24/7, but hiking is best during daylight hours or with a group for sunrise/full moon.",
        cost: "Free.",
        website: "N/A (Public access)"
      }
      },
        {
        name: "Camps Bay Beach",
        description: "With its pristine white sand, turquoise water, and backdrop of the Twelve Apostles mountain range, Camps Bay is Cape Town's most glamorous beach. The palm-fringed promenade is lined with trendy restaurants, chic cafes, and cocktail bars, making it the perfect place to see and be seen. It's a popular spot for sunbathing, beach volleyball, and enjoying a sundowner cocktail as the sun dips below the horizon.\n\nThe water is chilly due to the Atlantic currents, but on a hot summer day, a quick dip is incredibly refreshing. The atmosphere is vibrant and energetic, embodying the laid-back yet stylish lifestyle of Cape Town's Atlantic Seaboard.",
        practicalInfo: {
        howToGetThere: "Located on the Atlantic Seaboard, a 10-minute drive from the city center. The MyCiTi bus (route 107) also serves the area.",
        openingHours: "24/7.",
        cost: "Free to access the beach.",
        website: "N/A (Public beach)"
      }
      },
        {
        name: "Groot Constantia Wine Estate",
        description: "Step back in time at Groot Constantia, South Africa's oldest wine-producing estate, founded in 1685. Located in the beautiful Constantia Valley, this historic farm offers more than just exceptional wine. The estate is a living museum, with beautifully preserved Cape Dutch architecture, a historic manor house, and the original Cloete Cellar.\n\nVisitors can enjoy a range of experiences, including wine tasting, cellar tours, and chocolate and wine pairings. The estate has two excellent restaurants and is a wonderful place for a stroll through the vineyards. It provides a fantastic introduction to the Cape Winelands without having to travel far from the city.",
        practicalInfo: {
        howToGetThere: "Located in the Constantia Valley, about a 25-minute drive from the city. The City Sightseeing bus also stops here.",
        openingHours: "Daily, 9:00 AM - 6:00 PM.",
        cost: "Various tasting and tour options, starting from approx. R155.",
        website: "https://grootconstantia.co.za/"
      }
      },
        {
        name: "Zeitz MOCAA (Museum of Contemporary Art Africa)",
        description: "Housed in a magnificently reimagined historic grain silo at the V&A Waterfront, the Zeitz MOCAA is the largest museum of contemporary African art in the world. The building itself is a masterpiece, with its cathedral-like atrium carved from the 42 concrete tubes of the silo. The architecture alone is worth the visit.\n\nThe museum's galleries showcase a vast and compelling collection of work from artists across Africa and its diaspora. The exhibitions are thought-provoking, challenging, and vibrant, offering a powerful insight into the diverse narratives and artistic expressions of the continent. It's a must-visit for art and architecture enthusiasts.",
        practicalInfo: {
        howToGetThere: "Located at the Silo District in the V&A Waterfront.",
        openingHours: "Daily, 10:00 AM - 6:00 PM.",
        cost: "Approx. R250 for adults. Free for African citizens on Wednesdays (10am-1pm).",
        website: "https://zeitzmocaa.museum/"
      }
      },
        {
        name: "Oranjezicht City Farm Market",
        description: "For a true taste of local life, head to the Oranjezicht City Farm Market at the V&A Waterfront. This bustling weekend market is a celebration of local, seasonal, and ethically sourced food. It began as a small non-profit farm project in the Oranjezicht neighbourhood and has grown into one of the city's most beloved weekly events.\n\nHere you'll find an abundance of fresh organic produce, artisanal bread, cheeses, free-range meats, and a fantastic selection of cooked food stalls serving everything from gourmet burgers to vegan smoothie bowls. It’s a vibrant, community-focused space where you can shop for groceries, enjoy a delicious brunch, and soak up the lively atmosphere.",
        practicalInfo: {
        howToGetThere: "Located at Granger Bay, V&A Waterfront. Accessible by car or a walk from the main Waterfront area.",
        openingHours: "Saturday: 8:15 AM - 2:00 PM; Sunday: 9:00 AM - 2:00 PM. Also open on Wednesday nights in summer.",
        cost: "Free to enter.",
        website: "https://ozcf.co.za/"
      }
      },
        {
        name: "Two Oceans Aquarium",
        description: "Located at the V&A Waterfront, the Two Oceans Aquarium provides a fascinating glimpse into the rich marine life found off the South African coast. Named for the meeting point of the Atlantic and Indian Oceans, the aquarium showcases the incredible biodiversity of these two distinct ecosystems. Key exhibits include the Predator Exhibit with ragged-tooth sharks, the mesmerising I&J Ocean Exhibit, and the enchanting Kelp Forest Exhibit.\n\nThe aquarium is dedicated to conservation and education, offering interactive displays and experiences that are engaging for both children and adults. It's an ideal activity for a windy or rainy day, providing a window into the underwater world that surrounds Cape Town.",
        practicalInfo: {
        howToGetThere: "Located at the V&A Waterfront, easily accessible on foot from the main shopping area.",
        openingHours: "Daily, 9:30 AM - 6:00 PM.",
        cost: "Approx. R235 for adults.",
        website: "https://www.aquarium.co.za/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Cape Town is spread out, so you'll use a mix of transport. The MyCiTi bus is a reliable and affordable option for connecting the city center, Atlantic Seaboard, and airport. Ride-hailing services like Uber and Bolt are widely available and convenient. For exploring the Cape Peninsula or Winelands, renting a car offers the most flexibility. The City Sightseeing hop-on-hop-off bus is great for tourists wanting to hit the major attractions easily. Within areas like the City Bowl or V&A Waterfront, walking is pleasant and safe during the day.",
        whereToStay: "For first-timers and luxury seekers, the V&A Waterfront offers security, great restaurants, and easy access to attractions. The City Bowl (including Gardens and Tamboerskloof) is perfect for those who want a central, trendy base with vibrant nightlife and cafes. For beachfront bliss and stunning sunsets, stay in Camps Bay or Clifton. Sea Point and Green Point offer a great middle-ground with a beautiful promenade, lots of dining options, and a more local feel, ideal for families.",
        bestTimeToVisit: "Cape Town's peak season is summer (December to February), which offers hot, dry weather perfect for beaches, but also brings crowds and strong 'Cape Doctor' winds. The best times to visit are the shoulder seasons: spring (September to November) and autumn (March to May). During these months, the weather is pleasant, and there are fewer tourists. Winter (June to August) is cooler and rainier but is great for whale watching, cosy fireside dinners in the Winelands, and lower prices.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: Mountain & City. Start with a morning trip up Table Mountain (by cable car or hiking). In the afternoon, explore the colorful houses of Bo-Kaap, followed by a visit to the poignant District Six Museum. Enjoy dinner in the vibrant City Bowl.\nDay 2: Peninsula Exploration. Rent a car or join a tour for a full-day trip. Drive along Chapman's Peak Drive, visit the Cape of Good Hope, and then see the penguins at Boulders Beach. End the day in the charming naval town of Simon's Town.\nDay 3: Culture & Coast. Take a morning ferry to Robben Island. In the afternoon, explore the V&A Waterfront, visiting the Zeitz MOCAA or Two Oceans Aquarium. End with a sunset walk and dinner in Camps Bay."
      }}
      faqs={[{
          question: "Is Cape Town expensive?",
          answer: "For international visitors, Cape Town can be quite affordable due to favourable exchange rates. While luxury hotels, fine dining, and high-end shopping can be on par with other major cities, everyday costs are generally lower. Activities like hiking are often free, and you can eat well at local markets and casual eateries for a reasonable price. Accommodation offers a wide range from budget-friendly hostels to five-star hotels, so it can fit any budget."
        },
        {
          question: "How many days do you need in Cape Town?",
          answer: "To comfortably experience the main highlights without feeling rushed, a stay of 4 to 5 days is recommended. This allows enough time to visit Table Mountain, Robben Island, the Cape Peninsula, and explore the city's central neighbourhoods. If you wish to include a day trip to the Winelands (Stellenbosch/Franschhoek) or do more extensive hiking, extending your trip to 7 days would be ideal."
        },
        {
          question: "Is Cape Town safe?",
          answer: "Like many large cities, Cape Town has issues with crime, particularly in areas outside the main tourist hubs. However, by taking sensible precautions, tourists can have a very safe visit. Stick to well-populated areas, especially after dark. Avoid displaying expensive valuables like jewelry and cameras openly. Use reputable transportation like Uber/Bolt or pre-booked taxis instead of hailing them on the street. Be cautious when withdrawing money from ATMs. Hiking should be done in groups and during daylight hours."
        },
        {
          question: "What is Cape Town famous for?",
          answer: "Cape Town is famous for its spectacular natural setting, dominated by Table Mountain. It's renowned for its stunning coastline with world-class beaches like Camps Bay and Clifton, and the dramatic scenery of the Cape Peninsula. Historically, it's famous for Robben Island, where Nelson Mandela was imprisoned. The city is also a cultural melting pot, known for the vibrant Bo-Kaap neighbourhood, its world-class wine regions in nearby Constantia, Stellenbosch, and Franschhoek, and its innovative and diverse culinary scene."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1535744288776-15301c1a0676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxDYXBlJTIwVG93biUyMHRyYXZlbHxlbnwwfDB8fHwxNzUyMTQwMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};