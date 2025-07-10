
import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Auckland: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Auckland, New Zealand (2025 Guide)"
      description="Nestled on a narrow isthmus between two sparkling harbours, Waitematā and Manukau, Auckland is a unique blend of urban sophistication and stunning natural beauty. Known as the 'City of Sails', its skyline is defined by towering skyscrapers and countless yachts, while its landscape is dotted with 48 dormant volcanic cones. This vibrant multicultural hub offers a dynamic food scene, world-class shopping, and easy access to lush rainforests, idyllic islands, and black-sand beaches. Whether you're seeking adrenaline-pumping adventures or serene cultural experiences, discovering the best things to do in Auckland promises an unforgettable journey. From its bustling waterfront to its tranquil green spaces, New Zealand's largest city is a playground for every type of traveller, offering a perfect gateway to the wonders of the North Island."
      highlights={[
        "Sky Tower",
        "Waiheke Island",
        "Auckland War Memorial Museum",
        "Rangitoto Island",
        "Viaduct Harbour & Wynyard Quarter"
      ]}
      attractions={[
        {
          name: "Sky Tower",
          description: "Dominating the city skyline, the 328-meter Sky Tower is Auckland's most iconic landmark. A trip to the top offers breathtaking 360-degree panoramic views that stretch up to 80 kilometers on a clear day, encompassing the city, its twin harbours, and the volcanic cones. It's not just about the view; the tower is an adventure hub. For thrill-seekers, the SkyWalk offers a heart-pounding walk around the exterior pergola, 192 meters up, while the SkyJump provides the ultimate adrenaline rush with a controlled base jump from the same height. The complex also features several restaurants, including the revolving Orbit 360° Dining, allowing you to savour a meal while the city unfolds beneath you.",
          practicalInfo: {
            howToGetThere: "Located at the corner of Victoria and Federal Streets in the CBD. Easily accessible on foot from most central city locations.",
            openingHours: "Daily, 10:00 AM - 8:00 PM (hours may vary by season and for events).",
            cost: "Adult general admission approx. NZ$40. SkyWalk and SkyJump are additional costs.",
            website: "skycityauckland.co.nz/sky-tower/"
          }
        },
        {
          name: "Waiheke Island",
          description: "Just a 40-minute ferry ride from downtown Auckland, Waiheke Island feels like a world away. This haven is renowned for its picturesque vineyards, olive groves, and beautiful beaches. It's a paradise for food and wine lovers, with over 30 boutique wineries and cellar doors offering tastings and gourmet meals with stunning coastal views. Beyond the vineyards, explore the island's artistic side with numerous galleries and sculpture parks, like the acclaimed Connells Bay Sculpture Park. You can relax on the white sands of Oneroa or Onetangi beach, or get active by hiking the island's extensive network of coastal trails. Renting a scooter or using the local bus service makes exploring this idyllic island a breeze.",
          practicalInfo: {
            howToGetThere: "40-minute passenger ferry from the Downtown Ferry Terminal. Car ferries also available.",
            openingHours: "Accessible 24/7, but winery and shop hours are typically 10:00 AM - 5:00 PM.",
            cost: "Return ferry approx. NZ$59. On-island activities vary.",
            website: "waiheke.co.nz/"
          }
        },
        {
          name: "Auckland War Memorial Museum",
          description: "Housed in one of the country's most iconic heritage buildings atop a dormant volcano in the Auckland Domain, the Auckland War Memorial Museum is a must-visit for anyone interested in New Zealand's history and culture. It holds significant collections of Māori and Pacific Island taonga (treasures), offering deep insights into the region's indigenous heritage. The museum also details New Zealand's natural history, from its unique flora and fauna to its dramatic geological past. The top floors are dedicated to the country's military history, serving as a poignant war memorial. Don't miss the powerful Māori cultural performance, which takes place several times a day.",
          practicalInfo: {
            howToGetThere: "Located in the Auckland Domain, Parnell. Accessible via bus or a 30-minute walk from the CBD.",
            openingHours: "Daily, 10:00 AM - 5:00 PM (except Christmas Day).",
            cost: "Free for Auckland residents. International adult visitors approx. NZ$28. Cultural performance is an additional cost.",
            website: "aucklandmuseum.com/"
          }
        },
        {
          name: "Rangitoto Island",
          description: "The distinctive symmetrical cone of Rangitoto Island is a fixture of the Hauraki Gulf view. This dormant volcanic island, which emerged from the sea just 600 years ago, offers a unique and rugged adventure. A short ferry ride brings you to the island, where you can embark on the popular summit walk. The trail winds through the world's largest pōhutukawa forest and over fields of jagged black lava rock, culminating in spectacular 360-degree views from the top. For a different perspective, explore the island's lava caves – a series of tunnels formed by flowing lava. Remember to bring sturdy shoes, water, and food, as there are no shops on this protected nature reserve.",
          practicalInfo: {
            howToGetThere: "25-minute ferry ride from the Downtown Ferry Terminal.",
            openingHours: "Ferry timetables vary; check online. The island is a nature reserve with no facilities.",
            cost: "Return ferry approx. NZ$53.",
            website: "doc.govt.nz/parks-and-recreation/places-to-go/auckland/places/rangitoto-island-scenic-reserve/"
          }
        },
        {
          name: "Viaduct Harbour & Wynyard Quarter",
          description: "Once the hub of America's Cup sailing events, the Viaduct Harbour is now Auckland's premier waterfront dining and entertainment precinct. Lined with an array of world-class restaurants, chic bars, and luxury apartments, it's the perfect place for a sophisticated meal or sunset cocktails overlooking the superyachts. A short walk across the Wynyard Crossing bridge takes you to Wynyard Quarter, a revitalized industrial area. This family-friendly space features innovative public areas, a fantastic playground, and a vibrant weekend market. It's a dynamic area that perfectly showcases Auckland's maritime spirit and modern urban design.",
          practicalInfo: {
            howToGetThere: "A short walk from the Britomart Transport Centre and the Downtown Ferry Terminal in the CBD.",
            openingHours: "Public space accessible 24/7. Restaurant and bar hours vary.",
            cost: "Free to walk around. Dining costs vary.",
            website: "viaduct.co.nz/"
          }
        },
        {
          name: "Auckland Art Gallery Toi o Tāmaki",
          description: "Located on the edge of Albert Park, the Auckland Art Gallery Toi o Tāmaki is the largest and most impressive art institution in New Zealand. The gallery's collection includes over 17,000 works, spanning from historic masterpieces to contemporary pieces by New Zealand, Māori, Pacific, and international artists. The building itself is an architectural marvel, blending a historic French Renaissance-style structure with a stunning modern extension featuring a soaring kauri wood canopy. It's a serene and inspiring place to spend a few hours, with regularly changing exhibitions ensuring there's always something new to discover.",
          practicalInfo: {
            howToGetThere: "Corner of Kitchener and Wellesley Streets, a short walk from Queen Street.",
            openingHours: "Daily, 10:00 AM - 5:00 PM (except Christmas Day).",
            cost: "Free for general admission. Charges may apply for special exhibitions.",
            website: "aucklandartgallery.com/"
          }
        },
        {
          name: "Waitākere Ranges Regional Park",
          description: "Just a 40-minute drive from the city centre lies the wild and rugged beauty of the Waitākere Ranges. This vast regional park is a haven of dense native rainforest, cascading waterfalls, and a dramatic coastline. Hike one of the many trails that wind through the lush bush to discover stunning vistas and iconic Kauri trees. The park is also home to Auckland's famous west coast black-sand beaches, including Piha, Karekare, and Muriwai. Piha, known for its powerful surf and iconic Lion Rock, is a must-see. Before you go, check the Auckland Council website for any track closures in place to protect the forest from kauri dieback disease.",
          practicalInfo: {
            howToGetThere: "Best accessed by car. Approx. 40-minute drive from the CBD. Limited public transport options.",
            openingHours: "Park is always open. The Arataki Visitor Centre has daily hours, typically 9:00 AM - 5:00 PM.",
            cost: "Free to enter.",
            website: "aucklandcouncil.govt.nz/parks-recreation/Pages/park-details.aspx?Location=130"
          }
        },
        {
          name: "Mount Eden (Maungawhau)",
          description: "Climb to the summit of Maungawhau / Mount Eden, Auckland's highest natural point, for one of the best panoramic views of the city and its harbours. This dormant volcano, significant to local Māori as a historic pā (fortified village) site, features a remarkable 50-meter deep crater at its peak. The terraced slopes are evidence of its past occupation. A boardwalk allows visitors to walk around the sacred crater rim while protecting the site's archaeological integrity. It's a fantastic spot for a sunrise or sunset walk, offering a unique perspective on Auckland's unique volcanic geography.",
          practicalInfo: {
            howToGetThere: "Accessible by bus from the CBD or a short drive. The summit is closed to private vehicles; it's a 10-15 minute walk up from the base.",
            openingHours: "Accessible 24/7.",
            cost: "Free.",
            website: "maungawhau.co.nz/"
          }
        },
        {
          name: "Hobbiton Movie Set Tour",
          description: "While not in Auckland itself, the Hobbiton Movie Set is one of the most popular day trips from the city. Step into the enchanting world of J.R.R. Tolkien as you explore the meticulously crafted film set from The Lord of the Rings and The Hobbit trilogies. Wander through the lush pastures of the Shire, see the 44 permanently reconstructed Hobbit Holes, and stop for a complimentary beverage at the Green Dragon Inn. The two-hour guided tour provides fascinating details about how the movie magic was made. This is an unmissable experience for any fan of the films.",
          practicalInfo: {
            howToGetThere: "Located near Matamata, a 2-hour drive from Auckland. Numerous tour operators offer day trips from the city.",
            openingHours: "Daily tours, booking is essential. Check website for tour times.",
            cost: "Tour from the site approx. NZ$99 for an adult. Day tours from Auckland start from NZ$150+.",
            website: "hobbitontours.com/"
          }
        },
        {
          name: "Devonport",
          description: "Take a scenic 12-minute ferry ride across the harbour to the charming historic village of Devonport. With its well-preserved Victorian architecture, quaint main street full of boutiques, cafes, and art galleries, Devonport offers a peaceful escape from the city bustle. The main attraction is the stunning view back towards the Auckland skyline. For the best vantage point, take a short walk up Mount Victoria (Takarunga) or North Head (Maungauika), both former defensive positions with fascinating tunnels and gun emplacements to explore.",
          practicalInfo: {
            howToGetThere: "12-minute ferry from the Downtown Ferry Terminal.",
            openingHours: "Village is always accessible. Shops typically open 10:00 AM - 5:00 PM.",
            cost: "Return ferry approx. NZ$16. Free to explore.",
            website: "devonport.co.nz/"
          }
        },
        {
          name: "La Cigale French Market",
          description: "Experience a slice of provincial France in the heart of Auckland at the La Cigale French Market. Held every Saturday and Sunday in the suburb of Parnell, this award-winning market is a feast for the senses. Stallholders sell a delicious array of goods, from fresh bread, pastries, and cheeses to artisan meats, fresh produce, and gourmet products. Grab a coffee and a croissant, listen to the live music, and soak up the vibrant, bustling atmosphere. It's the perfect place to stock up for a picnic or simply enjoy a fantastic weekend brunch.",
          practicalInfo: {
            howToGetThere: "Located at 69 St Georges Bay Road, Parnell. Accessible by car or bus.",
            openingHours: "Saturdays 8:00 AM - 1:30 PM, Sundays 9:00 AM - 1:30 PM.",
            cost: "Free to enter.",
            website: "lacigale.co.nz/"
          }
        },
        {
          name: "Kelly Tarlton's SEA LIFE Aquarium",
          description: "Journey under the sea at Kelly Tarlton's SEA LIFE Aquarium, an Auckland institution for decades. Located on the scenic Tamaki Drive, the aquarium is famous for its curved acrylic tunnels that allow you to walk through a world of marine life. Come face-to-face with majestic sharks, graceful stingrays, and thousands of other fish. A highlight is the Antarctic Ice Adventure, home to a colony of King and Gentoo penguins. The aquarium also has a strong focus on conservation and rehabilitation, particularly for sea turtles.",
          practicalInfo: {
            howToGetThere: "Located on Tamaki Drive. A free shuttle bus runs from the CBD, or take a public bus.",
            openingHours: "Daily, 9:30 AM - 5:00 PM (last entry 4:00 PM).",
            cost: "Adults approx. NZ$41 (cheaper online).",
            website: "visitsealife.com/auckland/"
          }
        },
        {
          name: "One Tree Hill (Maungakiekie)",
          description: "Maungakiekie / One Tree Hill is one of Auckland's largest and most culturally significant volcanic cones. The summit is crowned by a prominent obelisk, a memorial to Māori. While the single tree that gave the hill its name is gone, the views from the top are magnificent. The volcano is set within the beautiful Cornwall Park, a sprawling green space gifted to the people of New Zealand by Sir John Logan Campbell. The park is a fantastic place for a walk or picnic, with grazing sheep and cattle, mature trees, and beautiful gardens, including an olive grove.",
          practicalInfo: {
            howToGetThere: "Located in Greenlane/Epsom. Accessible by car or bus from the CBD.",
            openingHours: "Park gates are open daily, typically from 7:00 AM to dusk.",
            cost: "Free.",
            website: "cornwallpark.co.nz/"
          }
        },
        {
          name: "Sailing on the Waitematā Harbour",
          description: "You can't visit the 'City of Sails' without getting out on the water. A sailing experience on the Waitematā Harbour offers an unparalleled perspective of the city skyline, Harbour Bridge, and nearby islands. Several companies in the Viaduct Harbour offer a range of experiences, from relaxed harbour cruises to hands-on sailing on a former America's Cup yacht. You can help trim the sails and take the helm, or simply sit back and enjoy the ride. It's an exhilarating way to connect with Auckland's deep-rooted maritime culture.",
          practicalInfo: {
            howToGetThere: "Tours depart from the Viaduct Harbour, a short walk from the CBD.",
            openingHours: "Tours run multiple times daily. Booking is recommended.",
            cost: "From NZ$95 for a 2-hour harbour sail.",
            website: "explorenz.co.nz/ (one of several operators)"
          }
        },
        {
          name: "Ponsonby Road",
          description: "For a taste of Auckland's trendiest side, spend some time exploring Ponsonby Road. This long, vibrant strip is the city's hub for boutique fashion, designer homewares, and chic cafes. During the day, it's a great spot for brunch and shopping at unique, locally-owned stores. As evening falls, Ponsonby comes alive with some of the city's best bars and restaurants, offering everything from gourmet burgers to high-end international cuisine. The Ponsonby Central complex is a particular highlight, a modern marketplace with a fantastic collection of eateries and food purveyors under one roof.",
          practicalInfo: {
            howToGetThere: "A short bus ride or a 20-30 minute walk uphill from the CBD.",
            openingHours: "Shop hours vary, generally 10:00 AM - 6:00 PM. Bars and restaurants open late.",
            cost: "Free to explore. Shopping and dining costs vary.",
            website: "iloveponsonby.co.nz/"
          }
        }
      ]}
      logistics={{
        gettingAround: "Auckland's CBD is very walkable. For wider travel, the AT HOP card is essential for discounted fares on buses, trains, and some ferries. The Link bus services (City, Inner, Outer) are frequent and cover key areas. Ferries from the Downtown Ferry Terminal are perfect for visiting places like Devonport and Waiheke Island. Ride-sharing services like Uber and Ola are also widely available.",
        whereToStay: "For first-time visitors, the CBD or Viaduct Harbour offers ultimate convenience and proximity to attractions. Ponsonby is ideal for those seeking a trendy, boutique vibe with excellent dining. Parnell provides a charming, more upscale village atmosphere. For budget travellers, hostels are concentrated around the CBD and Queen Street. Recommended hotels include The Hotel Britomart (luxury), Hotel DeBrett (boutique), and M Social (modern).",
        bestTimeToVisit: "The best time to visit Auckland is during the summer months (December to February) for warm, sunny weather perfect for beaches and island hopping. However, this is also peak season. The shoulder seasons of Autumn (March to May) and Spring (September to November) offer pleasant weather, fewer crowds, and often lower prices. Winter (June to August) is cooler and wetter, but still mild compared to many places.",
        suggestedItinerary: "[object Object]"
      }}
      faqs={[
        {
          question: "Is Auckland expensive?",
          answer: "Auckland is considered one of New Zealand's more expensive cities. Accommodation, dining out, and organized tours can be costly. A meal at a mid-range restaurant might cost NZ$25-40, while a coffee is around NZ$5-6. However, you can manage costs by self-catering, enjoying the many free natural attractions like parks and beaches, and using public transport with an AT HOP card."
        },
        {
          question: "How many days do you need in Auckland?",
          answer: "A stay of 3 to 4 days is ideal for a first-time visitor. This allows enough time to explore the main city sights like the Sky Tower and Viaduct, dedicate a full day to an island trip like Waiheke or Rangitoto, and explore a few different neighbourhoods or visit the Waitākere Ranges."
        },
        {
          question: "Is Auckland safe?",
          answer: "Auckland is generally a very safe city for travellers. However, like any major city, it's wise to take standard precautions. Be aware of your surroundings, especially at night in the central city. Avoid leaving valuables in plain sight in parked cars, particularly at tourist hotspots and beach car parks. The emergency number in New Zealand is 111."
        },
        {
          question: "What is Auckland famous for?",
          answer: "Auckland is most famous for its nickname, the 'City of Sails,' due to the thousands of yachts on its harbours. It's also renowned for its unique geography, being situated on a volcanic field with 48 dormant volcanic cones, and its location on a narrow isthmus between two major harbours, the Waitematā and the Manukau. It is New Zealand's largest and most multicultural city, serving as the country's main economic hub."
        }
      ]}
    />
  );
};
