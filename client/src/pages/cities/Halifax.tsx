import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Halifax: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Halifax, Canada (2025 Guide)"}
      description={"Welcome to Halifax, a city where maritime history sails alongside a vibrant, modern culture. Perched on the edge of the Atlantic, Nova Scotia's capital is a captivating blend of rugged coastal beauty, colonial architecture, and a famously friendly East Coast spirit. Stroll along one of the world's longest urban boardwalks, explore military forts that have guarded the harbor for centuries, and indulge in a culinary scene brimming with fresh seafood and local craft beer. From the poignant stories of immigrants at Pier 21 to the serene beauty of the Public Gardens, the city offers a rich tapestry of experiences. Whether you're a history buff, a foodie, or an outdoor enthusiast, you'll find an incredible array of the best things to do in Halifax. Prepare to be charmed by this historic port city's unique energy and unforgettable scenery."}
      highlights={["Halifax Waterfront",
        "Peggy's Cove",
        "Halifax Citadel National Historic Site",
        "Canadian Museum of Immigration at Pier 21",
        "Halifax Public Gardens"]}
      galleryImages={[
        { url: "", alt: "Halifax landmark 1", caption: "Halifax landmark 1 - placeholder" },
        { url: "", alt: "Halifax landmark 2", caption: "Halifax landmark 2 - placeholder" },
        { url: "", alt: "Halifax landmark 3", caption: "Halifax landmark 3 - placeholder" },
        { url: "", alt: "Halifax landmark 4", caption: "Halifax landmark 4 - placeholder" },
        { url: "", alt: "Halifax landmark 5", caption: "Halifax landmark 5 - placeholder" },
        { url: "", alt: "Halifax landmark 6", caption: "Halifax landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Halifax Waterfront",
        description: "The heart and soul of the city, the Halifax Waterfront is a 4-kilometer urban boardwalk buzzing with energy. It's a must-do for any visitor, offering a dynamic mix of shops, restaurants, and attractions. You can grab a lobster roll, sip a local craft beer on a patio, visit historic ships, or simply relax in one of the iconic waterfront hammocks while watching the boats go by. Throughout the year, the waterfront hosts festivals, concerts, and events, making it a lively hub of activity day and night.\n\nFrom the Wave sculpture to the Queen's Marque district, there are endless photo opportunities and places to explore. It serves as a central point, providing easy walking access to the Maritime Museum of the Atlantic, the Seaport Farmers' Market, and ferry terminals. It perfectly encapsulates the city's connection to the sea.",
        practicalInfo: {
        howToGetThere: "Located in downtown Halifax, easily accessible on foot from most central hotels. Multiple bus routes stop nearby.",
        openingHours: "Open 24/7, though individual shop and restaurant hours vary.",
        cost: "Free to walk and explore.",
        website: "https://www.halifaxwaterfront.ca/"
      }
      },
        {
        name: "Peggy's Cove",
        description: "Just an hour's drive from Halifax, Peggy's Cove is an iconic Canadian landmark and a quintessential Nova Scotian fishing village. The village is famous for its picturesque lighthouse perched on a massive granite outcrop, pounded by the Atlantic waves. It's one of the most photographed lighthouses in the world, and for good reason. Visitors can explore the charming village, with its colourful fishing shacks and art galleries, and watch fishing boats come and go.\n\nWhile the rugged beauty is undeniable, visitors must exercise extreme caution on the rocks, as rogue waves are a real danger. The stark, windswept landscape offers a powerful glimpse into the raw power of the Atlantic and the resilience of coastal communities. It's a day trip that provides an unforgettable taste of Nova Scotia's coastline.",
        practicalInfo: {
        howToGetThere: "Located on Route 333, about a 1-hour drive from Halifax. Several tour companies offer day trips.",
        openingHours: "Village is always accessible; lighthouse grounds are open year-round. Local businesses have their own hours.",
        cost: "Free to visit the village and lighthouse. Parking is available.",
        website: "https://www.peggyscovens.com/"
      }
      },
        {
        name: "Halifax Citadel National Historic Site",
        description: "Dominating the city's skyline, the Halifax Citadel is a star-shaped fort that has stood guard over Halifax since the mid-19th century. This Parks Canada site offers a fascinating journey back in time. Visitors can explore the fort's ramparts, barracks, and magazines, and enjoy panoramic views of the harbour and downtown. The experience is brought to life by historical reenactors, including the 78th Highlanders, who perform drills, fire the Noon Gun, and play the bagpipes.\n\nThe Citadel played a crucial role in establishing Halifax as a key British naval base. You can take a guided tour to hear stories of soldiers' lives, learn about military architecture, or even sign up to be a 'Soldier for a Day.' It's an immersive historical experience for all ages.",
        practicalInfo: {
        howToGetThere: "Located atop Citadel Hill at 5425 Sackville St. It's a steep but manageable walk from downtown, or accessible by car and bus.",
        openingHours: "Typically 9:00 AM - 5:00 PM daily in peak season. Check website for seasonal hours.",
        cost: "Admission fee required (approx. $12-$15 CAD for adults, free for youth).",
        website: "https://parks.canada.ca/lhn-nhs/ns/halifax"
      }
      },
        {
        name: "Canadian Museum of Immigration at Pier 21",
        description: "Located on the Halifax Waterfront, Pier 21 was the gateway to Canada for nearly one million immigrants between 1928 and 1971. Today, this National Historic Site is a powerful and moving museum dedicated to their stories. The museum offers two main exhibits: one detailing the Pier 21 experience and another covering the broader history of immigration to Canada from coast to coast.\n\nVisitors can step into a replica of a colony car on a train, explore interactive displays, and hear firsthand accounts from former immigrants. The museum also provides access to immigration records, allowing many Canadians to trace their family's arrival. It's an emotional and educational experience that highlights the diverse fabric of modern Canada.",
        practicalInfo: {
        howToGetThere: "1055 Marginal Rd, on the southern end of the Halifax Waterfront.",
        openingHours: "Open daily, typically 9:30 AM - 5:30 PM in summer. Check website for off-season hours.",
        cost: "Admission fee required (approx. $15-$20 CAD for adults).",
        website: "https://pier21.ca/"
      }
      },
        {
        name: "Halifax Public Gardens",
        description: "A tranquil oasis in the heart of the city, the Halifax Public Gardens are a rare and beautifully preserved example of a Victorian-era garden. Opened in 1867, this 16-acre National Historic Site is a masterpiece of horticultural design. Stroll along winding paths past ornate fountains, statues, a charming bandstand, and meticulously maintained flowerbeds bursting with colour.\n\nThe gardens are enclosed by a wrought-iron fence and feature magnificent formal and informal planting styles. It's the perfect place for a peaceful walk, a picnic, or simply to escape the urban hustle. Don't miss the tropical plants inside the greenhouse or the chance to get a treat at the on-site cafe, Uncommon Grounds.",
        practicalInfo: {
        howToGetThere: "Located at the corner of Spring Garden Road and South Park Street, a short walk from downtown.",
        openingHours: "Open daily from early spring to late fall, approx. 8:00 AM to dusk.",
        cost: "Free.",
        website: "https://www.halifaxpublicgardens.ca/"
      }
      },
        {
        name: "Maritime Museum of the Atlantic",
        description: "Immerse yourself in Nova Scotia's rich maritime heritage at this waterfront museum. The Maritime Museum of the Atlantic is the oldest and largest maritime museum in Canada, with a vast collection that includes everything from small crafts and ship models to artifacts from the Titanic and the Halifax Explosion. The museum's exhibits explore the age of steam, convoys of the World Wars, and the daily life of sailors.\n\nOne of the most compelling exhibits is dedicated to the Halifax Explosion of 1917, a catastrophic event that shaped the city. The museum also has a permanent display on the Titanic, featuring artifacts recovered from the sea, including a poignant pair of child's shoes. Berthed outside the museum is the CSS Acadia, a 100-year-old hydrographic survey ship that you can board and explore.",
        practicalInfo: {
        howToGetThere: "1675 Lower Water St, located directly on the Halifax Waterfront.",
        openingHours: "Open year-round, with extended hours in the summer. Check website for details.",
        cost: "Admission fee required (approx. $5-$10 CAD, varies by season).",
        website: "https://maritimemuseum.novascotia.ca/"
      }
      },
        {
        name: "Art Gallery of Nova Scotia",
        description: "Home to the province's art collection, the Art Gallery of Nova Scotia (AGNS) showcases a wide range of visual arts, from contemporary works to historical paintings. The gallery is spread across two buildings and features a significant collection of Canadian and international art. It is particularly celebrated for its collection of folk art, most notably the Maud Lewis House.\n\nThe brightly painted, tiny house of beloved Nova Scotian folk artist Maud Lewis was carefully restored and moved into the gallery. Seeing her home, where she painted almost every available surface, is a heartwarming and unique experience. The AGNS offers a thoughtful look into the creative spirit of the region and beyond.",
        practicalInfo: {
        howToGetThere: "1723 Hollis St, in downtown Halifax.",
        openingHours: "Open Tuesday to Sunday, hours vary. Check website for details. Free admission on Thursday evenings.",
        cost: "Admission fee required (approx. $10-$12 CAD for adults).",
        website: "https://www.artgalleryofnovascotia.ca/"
      }
      },
        {
        name: "Halifax Seaport Farmers' Market",
        description: "Operating since 1750, the Halifax Seaport Farmers' Market is the longest continuously running market in North America. Now housed in a modern, LEED-certified building at the south end of the waterfront, the market is a vibrant hub for local producers, artisans, and food vendors. On weekends, it's bustling with locals and tourists alike, browsing stalls filled with fresh produce, baked goods, local wines, and unique crafts.\n\nIt's a fantastic place to grab breakfast or lunch, with options ranging from traditional Nova Scotian fare to international cuisine. Even on weekdays, a smaller selection of vendors is open. The rooftop patio offers great views of the harbour, making it a perfect spot to enjoy your market finds.",
        practicalInfo: {
        howToGetThere: "1209 Marginal Rd, at the Halifax Seaport, next to Pier 21.",
        openingHours: "Busiest on Saturdays and Sundays. Some vendors open daily. Check website for current hours.",
        cost: "Free to enter.",
        website: "https://www.halifaxfarmersmarket.com/"
      }
      },
        {
        name: "Point Pleasant Park",
        description: "Located at the southern tip of the Halifax peninsula, Point Pleasant Park is a 75-hectare urban park offering a natural escape with a rich history. The park is crisscrossed with 39 km of winding trails, perfect for walking, jogging, and cycling. It features a mix of forested areas and open coastal paths with beautiful views of the harbour entrance and McNabs Island.\n\nThroughout the park, you can discover historical remnants, including the ruins of several forts and batteries, most notably the Prince of Wales Tower, which is the oldest Martello tower in North America. The park is leased from the British government for 999 years for the price of one shilling a year. It's a beloved local spot for recreation and relaxation.",
        practicalInfo: {
        howToGetThere: "5530 Point Pleasant Dr. Accessible by car (paid parking) or the #29 bus route.",
        openingHours: "Open daily, 5:00 AM to 12:00 AM.",
        cost: "Free to enter.",
        website: "https://www.halifax.ca/parks-recreation/parks-trails-gardens/parks-outdoor-spaces/point-pleasant-park"
      }
      },
        {
        name: "Alexander Keith's Nova Scotia Brewery",
        description: "Step back into 1863 and experience a brewery tour unlike any other at Alexander Keith's. Located in a historic ironstone building, this tour is as much about theatre as it is about beer. Actors in period costumes guide you through the brewery, sharing stories of Alexander Keith's life, the history of Halifax, and the brewing process, all with a healthy dose of song and good cheer.\n\nThe tour concludes in the Stag's Head pub, a historic watering hole where you can sample different styles of Keith's beer and enjoy live music. It's an entertaining and interactive way to learn about one of Canada's most beloved brewers and a key figure in Halifax's history.",
        practicalInfo: {
        howToGetThere: "1496 Lower Water St, in the Brewery Market complex downtown.",
        openingHours: "Tours run daily with varying frequency depending on the season. Booking ahead is recommended.",
        cost: "Tour fee required (approx. $30 CAD), includes beer samples.",
        website: "https://www.alexanderkeiths.ca/"
      }
      },
        {
        name: "Discovery Centre",
        description: "A fantastic destination for families and the curious of all ages, the Discovery Centre is Nova Scotia's premier science centre. Located on the waterfront, this state-of-the-art facility features four floors of interactive, hands-on exhibits that make learning about science and technology fun. Visitors can explore themes like flight, energy, health, and the ocean.\n\nThe centre includes a massive climbing structure, an innovation lab where you can experiment with new technologies, and a domed theatre for immersive film experiences. The exhibits are designed to be engaging and educational, encouraging experimentation and discovery. It's a perfect indoor activity, especially on a rainy day.",
        practicalInfo: {
        howToGetThere: "1215 Lower Water St, on the Halifax Waterfront.",
        openingHours: "Open daily, typically 9:00 AM - 4:00 PM. Check website for current hours.",
        cost: "Admission fee required (approx. $15 CAD per person).",
        website: "https://thediscoverycentre.ca/"
      }
      },
        {
        name: "McNabs and Lawlor Islands Provincial Park",
        description: "For a true natural getaway just a short boat ride from the city, head to McNabs and Lawlor Islands Provincial Park. Located at the mouth of Halifax Harbour, McNabs Island offers a rustic escape with over 22 km of hiking trails, historic forts, a lighthouse, and secluded beaches. The island is rich in history, having served as a military outpost, a fishing ground for the Mi'kmaq, and a site for cholera quarantine.\n\nYou can explore the ruins of Fort McNab National Historic Site, wander through diverse ecosystems, and enjoy a picnic with stunning views back towards the city skyline. Several private water taxi operators run services from Halifax, Dartmouth, and Eastern Passage. Remember to pack everything you need, as there are no services on the island.",
        practicalInfo: {
        howToGetThere: "Accessible by private water taxi or ferry from Halifax, Dartmouth, or Eastern Passage. Book transportation in advance.",
        openingHours: "Park is open year-round; transportation is seasonal (typically May-October).",
        cost: "Free to enter the park, but you must pay for boat transportation.",
        website: "https://mcnabsisland.ca/"
      }
      },
        {
        name: "Africville Museum",
        description: "The Africville Museum stands on the former site of Africville, a vibrant African Nova Scotian community that was demolished by the City of Halifax in the 1960s. The museum, a replica of the Seaview United Baptist Church which was the heart of the community, tells the powerful and poignant story of Africville's residents, their resilience, and their fight for justice.\n\nThrough photos, artifacts, and personal testimonies, the museum honors the legacy of this community and serves as a memorial to the injustice of its destruction. It's a place of reflection and education about a crucial, and often overlooked, part of Canadian history. A visit provides deep insight into the enduring spirit of the African Nova Scotian people.",
        practicalInfo: {
        howToGetThere: "5795 Africville Rd, at the northern tip of the Halifax peninsula in Seaview Park. Best reached by car or taxi.",
        openingHours: "Typically Tuesday-Saturday, 10:00 AM - 4:00 PM. Check website for seasonal variations.",
        cost: "Admission by donation or a small fee.",
        website: "https://africvillemuseum.org/"
      }
      },
        {
        name: "Halifax Central Library",
        description: "More than just a library, this architectural marvel is a community hub and a must-see destination in itself. The Halifax Central Library, opened in 2014, is a stunning building of cantilevered glass boxes, offering incredible views of the city from its upper floors. It has won international acclaim for its innovative design and welcoming atmosphere.\n\nInside, you'll find not just books, but also two cafes, a 300-seat auditorium, and public spaces designed for reading, working, and socializing. The fifth-floor 'Halifax Living Room' offers a rooftop terrace with panoramic views of Citadel Hill and Spring Garden Road. It's a testament to modern public spaces and a wonderful place to spend an hour or two.",
        practicalInfo: {
        howToGetThere: "5440 Spring Garden Rd, in the heart of the shopping district.",
        openingHours: "Open daily, hours vary. Check website.",
        cost: "Free.",
        website: "https://www.halifaxpubliclibraries.ca/"
      }
      },
        {
        name: "Georges Island National Historic Site",
        description: "Shrouded in mystery for generations, Georges Island National Historic Site in the middle of Halifax Harbour is now open for public exploration. This small island played a vital role in the city's defence system for centuries, featuring a maze of underground tunnels and historic fortifications. Visitors can take a ferry from the waterfront for a guided or self-guided tour of the island.\n\nExploring the island offers a unique perspective on the city and its military history. The views of the Halifax and Dartmouth skylines are unparalleled. As a recently opened Parks Canada site, it provides a new and exciting adventure for those looking to delve deeper into the stories that shaped the harbour.",
        practicalInfo: {
        howToGetThere: "Accessible by ferry from the Cable Wharf on the Halifax Waterfront. Book tickets in advance.",
        openingHours: "Open seasonally, typically Thursday to Monday from June to October. Check website for tour times.",
        cost: "Fee for ferry transportation and park access (approx. $25-$30 CAD).",
        website: "https://parks.canada.ca/lhn-nhs/ns/georges"
      }
      }
      ]}
      logistics={{
        gettingAround: "Halifax's downtown core is very walkable, with most major attractions located close together. For longer distances, Halifax Transit operates a network of buses and a charming passenger ferry connecting downtown Halifax with Dartmouth. Taxis and ride-sharing services like Uber are readily available. Renting a car is recommended for day trips outside the city, such as to Peggy's Cove or the Annapolis Valley.",
        whereToStay: "The best area for tourists is Downtown and the Waterfront, which offers immediate access to top attractions, restaurants, and nightlife. Hotels here range from luxury options like The Muir and The Sutton Place to reliable chains. The North End is a vibrant, trendy neighborhood with boutique hotels and excellent local eateries. The South End, near the universities and Point Pleasant Park, offers quieter streets and charming B&Bs.",
        bestTimeToVisit: "The best time to visit Halifax is from June to October. Summer (July-August) brings warm weather, long days, and a packed calendar of festivals. Fall (September-October) is also beautiful, with comfortable temperatures, fewer crowds, and stunning autumn foliage. Spring can be cool and rainy, while winters are cold, snowy, and windy, though the city has a cozy charm.",
        suggestedItinerary: "Day 1: Explore the Waterfront. Start at the Seaport Farmers' Market, visit the Maritime Museum of the Atlantic and Pier 21, and enjoy lunch on a patio. Walk the boardwalk, relax in the hammocks, and finish with a tour at Alexander Keith's Brewery.\nDay 2: History and Gardens. Spend the morning at the Halifax Citadel National Historic Site, catching the Noon Gun. In the afternoon, stroll through the beautiful Halifax Public Gardens, visit the Art Gallery of Nova Scotia, and explore the shops on Spring Garden Road.\nDay 3: Coastal Exploration. Take a day trip to the iconic Peggy's Cove lighthouse and fishing village. Return to the city and take the ferry to Dartmouth for a different view of the harbour and dinner at one of its excellent restaurants."
      }}
      faqs={[{
          question: "Is Halifax expensive?",
          answer: "Halifax is moderately expensive, but generally more affordable than larger Canadian cities like Toronto or Vancouver. Accommodation will be the largest expense, especially during the peak summer season. Food costs can be managed by mixing restaurant meals with visits to farmers' markets and food trucks. Many key attractions, like the Public Gardens and Point Pleasant Park, are free."
        },
        {
          question: "How many days do you need in Halifax?",
          answer: "A stay of 3 to 4 days is ideal. This gives you enough time to explore the main attractions in the city core, such as the Waterfront, Citadel Hill, and the major museums, without feeling rushed. It also allows for a half-day or full-day trip to a nearby highlight like Peggy's Cove or the charming town of Lunenburg."
        },
        {
          question: "Is Halifax safe?",
          answer: "Yes, Halifax is considered a very safe city. Like any urban area, it's wise to take standard precautions: be aware of your surroundings, especially at night, and don't leave valuables unattended. The downtown and tourist areas are well-policed and generally safe for walking at all hours."
        },
        {
          question: "What is Halifax famous for?",
          answer: "Halifax is famous for its rich maritime history, its strategic role as a major naval port, and its connection to major historical events like the sinking of the Titanic (many victims are buried here) and the catastrophic Halifax Explosion of 1917. It's also known for fresh seafood (especially lobster), the iconic Peggy's Cove lighthouse, and being the birthplace of the donair, a unique Canadian street food."
        }
      ]}
    />
  );
};