import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Charleston: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Charleston, USA (2025 Guide)"}
      description={"Steeped in history and dripping with Southern charm, Charleston, South Carolina, is a city that captivates the soul. With its cobblestone streets, pastel-hued antebellum houses, and the gentle sway of Spanish moss, every corner tells a story. This coastal gem offers a rich tapestry of experiences, from poignant historical sites that shaped the nation to a world-renowned culinary scene celebrating Lowcountry flavors. Whether you're strolling along the historic waterfront, exploring lush plantation gardens, or browsing vibrant markets, you'll find a city that moves at a graceful pace, inviting you to slow down and savor every moment. This guide will walk you through all the very best things to do in Charleston, ensuring your visit is as enchanting as the city itself. Prepare to be utterly charmed by the Holy City."}
      highlights={["Historic Charleston City Market",
        "Rainbow Row",
        "Fort Sumter National Monument",
        "The Battery & White Point Garden",
        "Middleton Place"]}
      galleryImages={[
        { url: "", alt: "Charleston landmark 1", caption: "Charleston landmark 1 - placeholder" },
        { url: "", alt: "Charleston landmark 2", caption: "Charleston landmark 2 - placeholder" },
        { url: "", alt: "Charleston landmark 3", caption: "Charleston landmark 3 - placeholder" },
        { url: "", alt: "Charleston landmark 4", caption: "Charleston landmark 4 - placeholder" },
        { url: "", alt: "Charleston landmark 5", caption: "Charleston landmark 5 - placeholder" },
        { url: "", alt: "Charleston landmark 6", caption: "Charleston landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Historic Charleston City Market",
        description: "A vibrant hub of commerce and culture for over 200 years, the Historic Charleston City Market is an essential stop. Spanning four city blocks, this landmark is one of the nation's oldest public markets. While it once sold produce and provisions, today it's a bustling marketplace filled with local vendors selling everything from artisanal foods and crafts to souvenirs. The market is particularly famous for its 'basket ladies,' Gullah artisans who weave intricate sweetgrass baskets, a craft passed down through generations from their West African ancestors.\n\nWalking through the open-air sheds, you'll feel the city's living history. It's a fantastic place to find unique, locally made gifts and get a literal taste of Charleston. Be sure to explore both the day market and the seasonal night market for a different atmosphere and set of vendors.",
        practicalInfo: {
        howToGetThere: "Located at 188 Meeting St, Charleston, SC 29401. It's centrally located and easily walkable from most downtown hotels.",
        openingHours: "Daily from 9:30 AM to 5:30 PM. Night market hours vary seasonally (typically Friday & Saturday, 6:30 PM - 10:30 PM, March-December).",
        cost: "Free to enter; costs vary for purchases.",
        website: "https://www.thecharlestoncitymarket.com/"
      }
      },
        {
        name: "Rainbow Row",
        description: "Perhaps the most photographed spot in Charleston, Rainbow Row is a picturesque series of thirteen pastel-colored historic homes located on East Bay Street. These Georgian-style houses are a signature of the city's charming aesthetic. The story behind the colors varies, with legends suggesting they were painted to help drunken sailors find their way home or to keep the houses cool in the summer heat.\n\nWhile you cannot enter the private residences, the real magic is in the exterior view. A stroll along this street offers a perfect photo opportunity and a glimpse into Charleston's unique architectural preservation. The best light for photography is typically in the morning. It's a quintessential Charleston experience that perfectly captures the city's vibrant personality.",
        practicalInfo: {
        howToGetThere: "Located on East Bay Street, between Tradd and Elliott Streets. It's a short walk from The Battery and Waterfront Park.",
        openingHours: "24/7 (exterior viewing only).",
        cost: "Free.",
        website: "N/A (Public Street)"
      }
      },
        {
        name: "Fort Sumter National Monument",
        description: "History buffs cannot miss a trip to Fort Sumter, the sea fort where the first shots of the American Civil War were fired on April 12, 1861. Located on an island in Charleston Harbor, the fort is only accessible by a scenic ferry ride, which itself provides stunning views of the city, the Arthur Ravenel Jr. Bridge, and the coastline.\n\nOnce on the island, National Park Rangers provide insightful talks about the fort's history and the events that led to the war. You can explore the remaining fortifications and visit the on-site museum. The entire experience is a powerful and sobering reminder of a pivotal moment in American history.",
        practicalInfo: {
        howToGetThere: "Ferry tours depart from two locations: Liberty Square in downtown Charleston (340 Concord St) and Patriots Point in Mount Pleasant (40 Patriots Point Rd).",
        openingHours: "Tour times vary by season. Check the official concessioner's website for the ferry schedule. The trip takes about 2.5 hours.",
        cost: "Adults ~$35, Seniors ~$31, Children ~$23. The fort itself is free, but the ferry is required.",
        website: "https://www.nps.gov/fosu/index.htm"
      }
      },
        {
        name: "The Battery & White Point Garden",
        description: "The Battery is a historic defensive seawall and promenade at the southern tip of the Charleston peninsula. Lined with stately, multi-million dollar antebellum mansions, it offers breathtaking views of Charleston Harbor, Fort Sumter, and Sullivan's Island Lighthouse. It's the perfect place for a leisurely stroll, jog, or simply to watch the sailboats glide by.\n\nAdjacent to The Battery is White Point Garden, a lush park shaded by ancient oak trees. The park is dotted with historic cannons, mortars, and monuments, creating a serene space that is rich with history. It's a favorite spot for locals and tourists alike to relax and soak in the city's coastal beauty and grandeur.",
        practicalInfo: {
        howToGetThere: "Located at the southern end of the Charleston peninsula. Easily accessible by foot from anywhere south of Broad Street.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "N/A (Public Park)"
      }
      },
        {
        name: "Middleton Place",
        description: "Designated a National Historic Landmark, Middleton Place is home to America's oldest landscaped gardens. Created in 1741, these stunning gardens reflect the grand classical style of the era, with terraced lawns, symmetrical designs, and serene reflection pools. A visit feels like stepping into a European estate, but with a distinct Lowcountry atmosphere.\n\nBeyond the gardens, the property includes a House Museum, which offers a glimpse into the lives of the Middleton family, who played significant roles in American history. The plantation also includes stableyards with heritage breed animals and craftspeople demonstrating 18th-century skills. Critically, Middleton Place also works to tell the stories of the enslaved Africans who lived and labored here, providing a more complete and necessary historical narrative.",
        practicalInfo: {
        howToGetThere: "Located at 4300 Ashley River Rd, Charleston, SC 29414. It's about a 30-40 minute drive from downtown Charleston.",
        openingHours: "Daily from 9:00 AM to 5:00 PM.",
        cost: "General admission is ~$49 for adults, with discounts for students and youth. House Museum tours are an additional cost.",
        website: "https://www.middletonplace.org/"
      }
      },
        {
        name: "Joe Riley Waterfront Park",
        description: "A beloved public space, Joe Riley Waterfront Park offers a tranquil escape with beautiful views of the Charleston Harbor. The park is famous for its iconic Pineapple Fountain, a symbol of Southern hospitality that invites visitors to splash and cool off on hot days. It's a perfect spot for families and a classic Charleston photo-op.\n\nThe park features large lawns, shaded benches, and a long pier with family-sized swings where you can relax and enjoy the sea breeze. It's an ideal location for a morning coffee, an afternoon picnic, or a romantic evening stroll as you watch ships pass by.",
        practicalInfo: {
        howToGetThere: "Located along Concord Street, near the City Market. The park is easily walkable from the French Quarter and surrounding areas.",
        openingHours: "Daily from 6:00 AM to Midnight.",
        cost: "Free.",
        website: "https://www.charleston-sc.gov/1125/Waterfront-Park"
      }
      },
        {
        name: "South Carolina Aquarium",
        description: "Overlooking the Charleston Harbor, the South Carolina Aquarium showcases the diverse aquatic life of the region, from the mountains to the sea. The highlight is the two-story, 385,000-gallon Great Ocean Tank, filled with sharks, sea turtles (including a rescued loggerhead named Caretta), and hundreds of other fish. The aquarium is deeply committed to conservation, with a working Sea Turtle Care Center where visitors can see the rehabilitation of sick and injured sea turtles.\n\nOther exhibits include a touch tank with stingrays and horseshoe crabs, an albino alligator, playful otters, and a detailed look at the ecosystems of the South Carolina watershed. It's an engaging and educational experience for all ages.",
        practicalInfo: {
        howToGetThere: "Located at 100 Aquarium Wharf, Charleston, SC 29401, next to Liberty Square where the Fort Sumter ferry departs.",
        openingHours: "Daily from 9:00 AM to 5:00 PM (last entry at 3:30 PM). Reservations are often required.",
        cost: "Adults ~$34.95, Children ~$27.95. Prices can vary.",
        website: "https://scaquarium.org/"
      }
      },
        {
        name: "King Street",
        description: "King Street is Charleston's premier shopping and dining thoroughfare. This historic street is divided into three distinct districts: the Antique District, the Fashion District, and the Design District. Whether you're hunting for a priceless 18th-century furniture piece, browsing high-end boutiques and national brands, or looking for unique home decor, King Street has it all.\n\nBeyond shopping, the street is lined with some of the city's best restaurants, bars, and art galleries. On the second Sunday of each month, the street is closed to vehicle traffic for 'Second Sunday on King,' turning it into a lively pedestrian mall with outdoor dining and street performers. It's the perfect place to immerse yourself in the modern, stylish side of Charleston.",
        practicalInfo: {
        howToGetThere: "King Street runs north-to-south through the heart of the Charleston peninsula.",
        openingHours: "Store hours typically 10:00 AM to 6:00 PM, with restaurants and bars open later.",
        cost: "Free to browse; shopping and dining costs vary.",
        website: "N/A (Public Street)"
      }
      },
        {
        name: "Aiken-Rhett House Museum",
        description: "For a unique and hauntingly authentic look into antebellum life, visit the Aiken-Rhett House Museum. Unlike many historic homes that have been restored to a pristine state, this urban mansion has been preserved 'as-is,' with its original paint, flooring, and furniture largely intact. This conservation approach allows visitors to see the layers of history and the wear of time.\n\nThe tour includes the main house, as well as the original slave quarters, kitchen, and stables, providing a comprehensive and unflinching look at the lives of both the wealthy white owners and the enslaved African Americans who lived and worked on the property. The self-guided audio tour is exceptional, offering detailed narratives that bring the house's complex history to life.",
        practicalInfo: {
        howToGetThere: "Located at 48 Elizabeth St, Charleston, SC 29403, in the northern part of the historic district.",
        openingHours: "Daily from 10:00 AM to 5:00 PM (last tour at 4:15 PM).",
        cost: "Adults ~$15. A combo ticket with the Nathaniel Russell House is available.",
        website: "https://www.historiccharleston.org/house-museums/aiken-rhett-house-museum/"
      }
      },
        {
        name: "The Charleston Museum",
        description: "Founded in 1773, The Charleston Museum is proudly known as 'America's First Museum.' Its collection is a fascinating journey through the cultural and natural history of the South Carolina Lowcountry. The main exhibits showcase everything from dinosaur fossils and ancient animal skeletons to artifacts from Native American and colonial history.\n\nA highlight is the 'Lowcountry History Hall,' which traces Charleston's story from its founding through the Civil War and beyond. The museum also features an impressive collection of historic textiles and costumes, decorative arts, and a hands-on KidStory exhibit. It's a foundational stop for anyone wanting to understand the deep roots of the region.",
        practicalInfo: {
        howToGetThere: "Located at 360 Meeting St, Charleston, SC 29403, near the Visitor Center.",
        openingHours: "Monday-Saturday 9:00 AM - 5:00 PM, Sunday 12:00 PM - 5:00 PM.",
        cost: "Adults ~$15. Combo tickets for the museum's two historic houses are also available.",
        website: "https://www.charlestonmuseum.org/"
      }
      },
        {
        name: "Magnolia Plantation & Gardens",
        description: "Dating back to 1676, Magnolia Plantation & Gardens is one of the oldest plantations on the Ashley River. It is most famous for its 'romantic-style' gardens, which are less formal and more naturalistic than other gardens of the era. They burst with color year-round, especially in the spring with thousands of azaleas and camellias in bloom.\n\nBeyond the stunning gardens, visitors can take a house tour, a nature tram tour through the property's wetlands and marshes, or a boat tour on the Ashley River. The 'From Slavery to Freedom' tour offers critical insight into the lives of the enslaved people who were essential to the plantation's existence. The property also includes a petting zoo and a swamp garden, making it a diverse attraction for nature and history lovers.",
        practicalInfo: {
        howToGetThere: "Located at 3550 Ashley River Rd, Charleston, SC 29414, about a 30-minute drive from downtown.",
        openingHours: "Daily from 9:00 AM to 5:00 PM.",
        cost: "Basic admission (Gardens) is ~$29 for adults. Additional tours (House, Tram, Boat) cost extra.",
        website: "https://www.magnoliaplantation.com/"
      }
      },
        {
        name: "Old Slave Mart Museum",
        description: "This museum provides a solemn and essential look into a dark part of American history. Housed in a building that was once an auction gallery for enslaved Africans, the Old Slave Mart Museum is believed to be the last surviving slave auction facility in South Carolina. The museum's exhibits detail the history of Charleston's domestic slave trade, from the journey across the Atlantic to the auctions and the daily lives of the enslaved.\n\nThe exhibits are primarily text-based, with powerful artifacts and personal accounts that tell a harrowing story. It is a small but incredibly impactful museum that offers a crucial perspective for understanding the source of the wealth that built much of historic Charleston. Plan to spend at least an hour reading and reflecting.",
        practicalInfo: {
        howToGetThere: "Located at 6 Chalmers St, Charleston, SC 29401, on a historic cobblestone street in the French Quarter.",
        openingHours: "Monday-Saturday 9:00 AM to 5:00 PM. Closed on Sundays.",
        cost: "Adults ~$8, with discounts for seniors, students, and children.",
        website: "https://www.oldslavemartmuseum.com/"
      }
      },
        {
        name: "St. Michael's Church",
        description: "Standing at the intersection of Broad and Meeting Streets, known as the 'Four Corners of Law,' St. Michael's Church is the oldest church edifice in the City of Charleston. Completed in 1761, this beautiful Anglican church is a stunning example of Georgian architecture. Its iconic white steeple has been a landmark for sailors and residents for centuries.\n\nVisitors are welcome to step inside to admire the original 18th-century box pews (including the one where George Washington once worshipped) and the historic organ. The surrounding graveyard is the final resting place for several notable figures in American history, including John Rutledge, a signer of the U.S. Constitution. It's a peaceful and historically significant site in the heart of the city.",
        practicalInfo: {
        howToGetThere: "Located at 71 Broad St, Charleston, SC 29401.",
        openingHours: "Typically open for visitors Monday-Friday, but hours can vary based on services and events. Check their website.",
        cost: "Free (donations are welcome).",
        website: "https://www.stmichaelschurch.net/"
      }
      },
        {
        name: "Folly Beach",
        description: "For a dose of sand and sun, head to Folly Beach, a laid-back barrier island community just a short drive from downtown Charleston. Known to locals as the 'Edge of America,' Folly has a funky, bohemian vibe that sets it apart from other nearby beach towns. It's a popular spot for surfing, with the 'Washout' area being a local favorite for catching waves.\n\nThe Folly Beach Pier is a central landmark, perfect for fishing or just taking a scenic walk over the Atlantic. The town's main drag, Center Street, is lined with casual restaurants, surf shops, and beachfront bars. Whether you want to sunbathe, hunt for shark teeth, or watch dolphins play offshore, Folly Beach offers a perfect coastal escape.",
        practicalInfo: {
        howToGetThere: "Located on Folly Island, about a 20-25 minute drive south of downtown Charleston.",
        openingHours: "Beaches are open year-round. Paid parking is enforced.",
        cost: "Free to access the beach; parking fees and pier access fees apply.",
        website: "https://www.follybeach.com/"
      }
      },
        {
        name: "Patriots Point Naval & Maritime Museum",
        description: "Located across the harbor in Mount Pleasant, Patriots Point is a must-see for military history enthusiasts and families. The centerpiece of the museum is the USS Yorktown, a massive World War II aircraft carrier. Visitors can explore the flight deck, hangar bay, and many of the ship's interior compartments on self-guided tours, getting a feel for life at sea.\n\nThe museum complex also includes the USS Laffey, a historic destroyer, and the USS Clamagore, a Cold War-era submarine. Onshore, the Vietnam Experience exhibit provides an immersive look at life during the Vietnam War. With commanding views of the harbor and downtown Charleston, it's an impressive and educational destination.",
        practicalInfo: {
        howToGetThere: "Located at 40 Patriots Point Rd, Mount Pleasant, SC 29464. Accessible by car or water taxi from downtown.",
        openingHours: "Daily from 9:00 AM to 6:30 PM (ticket sales end at 5:00 PM).",
        cost: "Adults ~$28, with discounts for seniors and children. Parking is extra.",
        website: "https://www.patriotspoint.org/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Charleston's historic downtown is very walkable. For longer distances, the CARTA bus system operates throughout the area, including several free DASH (Downtown Area Shuttle) trolley routes that cover the historic peninsula. Pedicabs and ride-sharing services like Uber and Lyft are also widely available. To visit the beaches or plantations, renting a car is the most convenient option.",
        whereToStay: "For first-time visitors, staying in the Historic District is ideal. The French Quarter offers boutique hotels amidst art galleries and cobblestone streets (e.g., The Vendue). The area around King Street is perfect for shoppers and foodies (e.g., The Spectator Hotel). For more budget-friendly and family-oriented options, consider staying in Mount Pleasant or West Ashley, which are just a short drive from downtown.",
        bestTimeToVisit: "The best times to visit Charleston are spring (March to May) and fall (September to November). During these seasons, the weather is pleasant and mild, perfect for walking around. Spring brings blooming flowers and popular events like the Festival of Homes and Gardens. Fall offers fewer crowds and comfortable temperatures. Summer (June to August) is very hot and humid, while winter (December to February) is mild but quieter.",
        suggestedItinerary: "Day 1: Explore the Historic Core. Start with a photo at Rainbow Row, stroll along The Battery and White Point Garden, then browse the Historic Charleston City Market. Spend the afternoon wandering the streets south of Broad Street and visit a historic church like St. Michael's.\nDay 2: Dive into History. Take the morning ferry to Fort Sumter National Monument. In the afternoon, cool off at the Joe Riley Waterfront Park and visit a house museum like the Aiken-Rhett House or the Old Slave Mart Museum.\nDay 3: Gardens and Coast. Drive out to Ashley River Road and spend the morning at a historic plantation like Middleton Place or Magnolia Gardens. In the afternoon, relax and enjoy the coastal vibe at Folly Beach."
      }}
      faqs={[{
          question: "Is Charleston expensive?",
          answer: "Charleston can be moderately to very expensive, particularly for accommodation and dining in the historic downtown area. Hotels can be pricey, especially during peak season. However, you can manage costs by visiting free attractions like The Battery and Waterfront Park, using the free DASH trolley, and exploring dining options outside the main tourist hubs. Staying in areas like Mount Pleasant or West Ashley can also offer more affordable lodging."
        },
        {
          question: "How many days do you need in Charleston?",
          answer: "To get a good feel for the city, a 3 to 4-day trip is ideal. This allows you enough time to explore the main historic sights downtown, visit at least one plantation, and spend some time at a nearby beach. A weekend trip is feasible for a quick overview, but a longer stay lets you explore at a more relaxed pace and delve deeper into the city's neighborhoods and culinary scene."
        },
        {
          question: "Is Charleston safe?",
          answer: "Charleston is generally a safe city for tourists, especially in the well-populated historic districts and main tourist areas. Like any city, it's wise to practice standard safety precautions. Be aware of your surroundings, especially at night, stick to well-lit streets, and don't leave valuables in your car. The tourist areas are heavily patrolled and considered very safe."
        },
        {
          question: "What is Charleston famous for?",
          answer: "Charleston is famous for its rich American history, particularly its role in the Civil War. It's also renowned for its exceptionally well-preserved architecture, including historic mansions and cobblestone streets. The city is celebrated for its 'Southern charm' and hospitality, its vibrant culinary scene featuring Lowcountry cuisine (like shrimp and grits), and its beautiful coastal setting with stunning parks, gardens, and nearby beaches."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1619892127776-08a763bfe34c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxDaGFybGVzdG9uJTIwdHJhdmVsfGVufDB8MHx8fDE3NTIxNDAxMzl8MA&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};