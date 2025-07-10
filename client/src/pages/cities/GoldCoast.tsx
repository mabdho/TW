import React from 'react';
import { CityPage } from '../../components/CityPage';

export const GoldCoast: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Gold Coast, Australia (2025 Guide)"}
      description={"Welcome to Australia's playground, a sun-drenched metropolis where glittering skyscrapers meet miles of golden sand. The Gold Coast is a city of contrasts, offering adrenaline-pumping theme park adventures, world-class surf breaks, and a surprisingly serene and ancient rainforest hinterland just a short drive from the coast. Whether you're seeking family fun, a romantic getaway, or a solo adventure, this vibrant city delivers. From the iconic shores of Surfers Paradise to the chic cafes of Burleigh Heads and the breathtaking vistas of the national parks, there's an endless array of experiences waiting. This guide will walk you through all the best things to do in Gold Coast, ensuring your trip is packed with unforgettable moments. It’s a destination that perfectly blends natural beauty with electrifying entertainment, making it one of Australia's most beloved holiday spots."}
      imageUrl={""}
      highlights={["Surfers Paradise Beach",
        "Warner Bros. Movie World",
        "Burleigh Heads National Park",
        "Q1 SkyPoint Observation Deck",
        "Currumbin Wildlife Sanctuary"]}
      galleryImages={[
        { url: "", alt: "GoldCoast landmark 1", caption: "GoldCoast landmark 1 - placeholder" },
        { url: "", alt: "GoldCoast landmark 2", caption: "GoldCoast landmark 2 - placeholder" },
        { url: "", alt: "GoldCoast landmark 3", caption: "GoldCoast landmark 3 - placeholder" },
        { url: "", alt: "GoldCoast landmark 4", caption: "GoldCoast landmark 4 - placeholder" },
        { url: "", alt: "GoldCoast landmark 5", caption: "GoldCoast landmark 5 - placeholder" },
        { url: "", alt: "GoldCoast landmark 6", caption: "GoldCoast landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Surfers Paradise Beach",
        description: "The heart of the Gold Coast, Surfers Paradise Beach is an iconic 3-kilometer stretch of golden sand framed by a dramatic skyline of high-rise apartments. It's the quintessential Gold Coast experience, bustling with sunbathers, swimmers, and surfers. The patrolled beach is perfect for a safe swim between the flags, while the expansive foreshore is ideal for a stroll, bike ride, or simply people-watching. \n\nBeyond the sand, Cavill Avenue is a vibrant hub of shops, restaurants, and entertainment venues. By day, it’s a lively pedestrian mall; by night, it transforms into the center of the city's nightlife. The Surfers Paradise Beachfront Markets, held on Wednesday, Friday, and Sunday evenings, offer a great opportunity to find unique souvenirs and local crafts.",
        practicalInfo: {
        howToGetThere: "Located in the center of Surfers Paradise. Accessible via the G:link tram (Cavill Avenue station) or numerous bus routes.",
        openingHours: "Beach is open 24/7. Lifeguard patrols are typically from 8:00 AM to 5:00 PM.",
        cost: "Free to access the beach.",
        website: "https://www.destinationgoldcoast.com/"
      }
      },
        {
        name: "Warner Bros. Movie World",
        description: "Step into the world of Hollywood and become the star of your own adventure at Warner Bros. Movie World. This theme park brings your favorite movies and superheroes to life with a thrilling collection of world-class rides, stunt shows, and character parades. Feel the adrenaline on rollercoasters like the DC Rivals HyperCoaster and the Superman Escape, or enjoy family-friendly fun in the Looney Tunes Village.\n\nThe daily Streets Star Parade is a highlight, featuring beloved characters from Batman to Bugs Bunny. With live-action stunt shows and immersive 4D movie experiences, Movie World provides a full day of entertainment for all ages, making it a must-visit for film buffs and thrill-seekers alike.",
        practicalInfo: {
        howToGetThere: "Located in Oxenford, about a 25-minute drive from Surfers Paradise. Accessible via Theme Park Express buses (TX7) or by car.",
        openingHours: "Typically 10:00 AM to 5:00 PM daily. Check website for seasonal variations.",
        cost: "From AUD $109 for a single-day pass. Multi-park passes are available.",
        website: "https://movieworld.com.au/"
      }
      },
        {
        name: "Burleigh Heads National Park",
        description: "A stunning green oasis nestled between the surf beaches of Burleigh Heads and Tallebudgera Creek, this national park offers a perfect blend of coastal and rainforest scenery. The park features walking tracks that cater to all fitness levels, including an ocean-view circuit and a more rugged rainforest walk.\n\nFollow the path along the rocky foreshore for incredible views of the crashing waves and the Surfers Paradise skyline in the distance. During winter and spring, this is a prime spot for whale watching. The park is a culturally significant site for the local Yugambeh people and provides a beautiful, peaceful escape from the city buzz.",
        practicalInfo: {
        howToGetThere: "Located at Burleigh Heads. Accessible by bus. Limited parking is available at the northern and southern entrances.",
        openingHours: "Open 24/7, though it's recommended to visit during daylight hours.",
        cost: "Free.",
        website: "https://parks.des.qld.gov.au/parks/burleigh-head"
      }
      },
        {
        name: "Q1 SkyPoint Observation Deck",
        description: "For the best views of the Gold Coast, head to the SkyPoint Observation Deck, located on level 77 of the iconic Q1 Resort Building. At 230 meters high, it's Australia's only beachside observation deck, offering breathtaking 360-degree views from the hinterland to the Pacific Ocean and up and down the coastline. Enjoy a coffee or cocktail at the bar as you soak in the panoramic vista.\n\nFor the ultimate thrill, adventurous visitors can book the SkyPoint Climb. This is an external building walk that takes you to the spire of the Q1, 270 meters above sea level. It’s an unforgettable experience that offers an open-air perspective of the stunning landscape.",
        practicalInfo: {
        howToGetThere: "Located in the Q1 Building in Surfers Paradise. A short walk from the Surfers Paradise G:link tram station.",
        openingHours: "Open daily, typically from 7:30 AM to 7:00 PM. Hours may vary, check website.",
        cost: "From AUD $31 for general admission. SkyPoint Climb is priced separately.",
        website: "https://www.skypoint.com.au/"
      }
      },
        {
        name: "Currumbin Wildlife Sanctuary",
        description: "Get up close and personal with Australia's incredible native wildlife at the Currumbin Wildlife Sanctuary. This heritage-listed park is famous for its massive flocks of wild Rainbow Lorikeets that descend for feeding sessions twice daily. Beyond the lorikeets, you can cuddle a koala, hand-feed kangaroos, and see unique animals like wombats, Tasmanian devils, and crocodiles.\n\nThe sanctuary is set in 27 hectares of lush bushland and rainforest. Don't miss the Free Flight Bird Show or the Aboriginal Culture Show. A miniature railway helps you navigate the sprawling park, making it an enjoyable and educational day out for the whole family.",
        practicalInfo: {
        howToGetThere: "Located in Currumbin, easily accessible by bus route 700 or a 20-minute drive from Surfers Paradise.",
        openingHours: "9:00 AM to 4:00 PM daily.",
        cost: "From AUD $53.95 for an adult day pass.",
        website: "https://currumbinsanctuary.com.au/"
      }
      },
        {
        name: "Springbrook National Park",
        description: "Escape to the ancient world of the Gold Coast hinterland at Springbrook National Park, part of the Gondwana Rainforests of Australia World Heritage Area. The park is renowned for its spectacular waterfalls, lush rainforest, and breathtaking lookouts. The most famous feature is the Natural Bridge, a stunning rock arch formed by the force of a waterfall over a basalt cave.\n\nBy day, you can explore the easy 1km circuit walk to see the waterfall cascading into the cave below. At night, the cave transforms into a magical spectacle, illuminated by the largest colony of glow-worms in Australia. Other highlights of the park include Purling Brook Falls and the Best of All Lookout.",
        practicalInfo: {
        howToGetThere: "Located about a 45-minute drive inland from the coast. A car is required as public transport is not available. Guided tours are a popular option.",
        openingHours: "Park is open 24/7. Visit during daylight for walks and at night for glow-worms.",
        cost: "Free.",
        website: "https://parks.des.qld.gov.au/parks/springbrook"
      }
      },
        {
        name: "Sea World",
        description: "Dive into a world of marine life, thrilling rides, and amazing animal presentations at Sea World. This park offers a unique combination of a theme park and a marine zoo. Witness the incredible grace of dolphins at the Affinity Dolphin Presentation, laugh at the antics of sea lions, and learn about the park's rescue and rehabilitation efforts.\n\nFor thrill-seekers, rides like the Storm Coaster and Jet Rescue Coaster provide plenty of excitement. Younger visitors will love Nickelodeon Land, where they can meet characters like SpongeBob SquarePants and Dora the Explorer. Sea World's focus on conservation and education makes it both fun and informative.",
        practicalInfo: {
        howToGetThere: "Located on The Spit, Main Beach. Accessible by car or bus route 704 and 705.",
        openingHours: "Typically 10:00 AM to 5:00 PM daily.",
        cost: "From AUD $109 for a single-day pass. Multi-park passes are available.",
        website: "https://seaworld.com.au/"
      }
      },
        {
        name: "Coolangatta Beach",
        description: "At the southern end of the Gold Coast, Coolangatta offers a more relaxed, classic beach town vibe compared to the hustle of Surfers Paradise. Its beautiful, north-facing beaches, including Greenmount and Rainbow Bay, provide sheltered swimming conditions and are perfect for families. The area is also a world-renowned surfing mecca, home to the famous Snapper Rocks Superbank.\n\nStroll along the oceanfront path that connects these beaches, watch the pros carve up the waves, and enjoy the stunning coastal views from Point Danger Lookout, which sits right on the Queensland-New South Wales border. With a great selection of casual cafes and surf clubs, Coolangatta is the perfect place to unwind.",
        practicalInfo: {
        howToGetThere: "Located at the southern end of the Gold Coast, next to the Gold Coast Airport. Accessible via bus route 700.",
        openingHours: "Beach is open 24/7. Patrolled during daylight hours.",
        cost: "Free.",
        website: "https://www.destinationgoldcoast.com/places-to-see/coolangatta"
      }
      },
        {
        name: "Dreamworld",
        description: "As Australia's biggest theme park, Dreamworld offers a massive variety of rides, shows, and attractions all in one place. The park is famous for its 'Big 9' thrill rides, including The Giant Drop, Tower of Terror II, and The Claw, which are guaranteed to get your heart racing. For families, areas like ABC KIDS WORLD and DreamWorks Experience offer gentle rides and character meet-and-greets.\n\nDreamworld is also home to Tiger Island, where you can see magnificent tigers in action, and the Corroboree, which celebrates Aboriginal and Torres Strait Islander culture. Attached to the park is WhiteWater World, a separate water park, making it easy to combine two different experiences in one day.",
        practicalInfo: {
        howToGetThere: "Located in Coomera, about a 25-minute drive from Surfers Paradise. Accessible via Theme Park Express buses (TX7) or by train to Coomera station.",
        openingHours: "Typically 10:00 AM to 5:00 PM daily.",
        cost: "From AUD $109 for a single-day pass.",
        website: "https://www.dreamworld.com.au/"
      }
      },
        {
        name: "Lamington National Park",
        description: "Venture deeper into the hinterland to explore Lamington National Park, another World Heritage-listed gem. This expansive park is a hiker's paradise, with over 160 kilometers of walking trails that wind through ancient subtropical rainforest, past waterfalls, and to stunning mountain lookouts. The park is teeming with unique wildlife and is a renowned spot for birdwatching.\n\nA must-do activity is O'Reilly's Treetop Walk. This 180-meter-long series of suspension bridges takes you 15 meters above the forest floor, offering a bird's-eye view of the canopy. It's a fantastic and accessible way for everyone to experience the magic of the rainforest.",
        practicalInfo: {
        howToGetThere: "Located about a 90-minute drive from the coast. A car is essential. O'Reilly's Rainforest Retreat is a popular base in the Green Mountains section.",
        openingHours: "Park is open 24/7. Treetop walk is open from sunrise to sunset.",
        cost: "Park entry is free. The Treetop Walk is also free.",
        website: "https://parks.des.qld.gov.au/parks/lamington"
      }
      },
        {
        name: "Pacific Fair Shopping Centre",
        description: "For a dose of retail therapy, look no further than Pacific Fair. This is not just a shopping mall; it's a world-class shopping destination with a stunning, resort-like design featuring open-air walkways, water features, and lush tropical gardens. It boasts over 400 stores, ranging from high-end luxury brands like Louis Vuitton and Gucci to popular Australian and international retailers.\n\nWhen you need a break from shopping, there are plenty of dining options, from casual food courts to upscale restaurants in 'The Patio' precinct. There's also a state-of-the-art cinema complex. It's the perfect place to escape the heat or a rare rainy day.",
        practicalInfo: {
        howToGetThere: "Located in Broadbeach. The Broadbeach South G:link tram station and bus interchange is directly outside the centre.",
        openingHours: "Generally 9:00 AM to 5:30 PM (until 9:00 PM on Thursdays). Sunday 10:00 AM to 4:00 PM.",
        cost: "Free to enter.",
        website: "https://www.pacificfair.com.au/"
      }
      },
        {
        name: "HOTA, Home of the Arts",
        description: "Discover the cultural heart of the Gold Coast at HOTA. Set in a beautiful parkland with Surfers Paradise as its backdrop, this vibrant arts precinct is a hub of creativity. The centerpiece is the colorful HOTA Gallery, the largest public gallery outside a capital city in Australia, showcasing local, national, and international art through a dynamic exhibition program.\n\nBeyond the gallery, HOTA features two cinemas, performance venues, and a stunning rooftop bar with panoramic city views. The precinct regularly hosts live music, theatre performances, and farmers markets on its outdoor stage. It's a refreshing cultural counterpoint to the city's beach and theme park scene.",
        practicalInfo: {
        howToGetThere: "Located in Bundall, a short drive or a 20-minute walk from Surfers Paradise. Accessible via the HOTA Bridge for pedestrians and cyclists.",
        openingHours: "Gallery is open 10:00 AM to 4:00 PM daily. Other venue times vary.",
        cost: "General admission to the gallery is free. Special exhibitions and events may be ticketed.",
        website: "https://hota.com.au/"
      }
      },
        {
        name: "The Spit",
        description: "For a more natural and rugged coastal experience, head to The Spit at the northern end of Main Beach. This long, sandy isthmus separates the Gold Coast Broadwater from the Pacific Ocean and offers a variety of activities. The ocean side is a popular spot for surfing and fishing, while the calm Broadwater side is perfect for stand-up paddleboarding, kayaking, and jet-skiing.\n\nDoug Jennings Park at the very end of The Spit provides expansive green spaces for picnics and stunning views of the seaway and South Stradbroke Island. It's also a popular off-leash dog beach. The Spit is a fantastic place to watch the sunset over the Broadwater with the city skyline in the background.",
        practicalInfo: {
        howToGetThere: "Located at the end of Seaworld Drive, Main Beach. Best accessed by car. The 704 bus goes to Sea World, from which it's a long walk.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.destinationgoldcoast.com/places-to-see/main-beach"
      }
      },
        {
        name: "Tamborine Mountain",
        description: "Another gem of the hinterland, Tamborine Mountain offers a charming village atmosphere with a wealth of attractions. A scenic drive up the mountain reveals wineries, craft breweries, a distillery, and quaint cafes. The main attraction is the 'Gallery Walk', a street lined with art galleries, craft shops, fudge stores, and boutiques.\n\nBeyond the shops, the mountain is home to the Tamborine Rainforest Skywalk, which offers a different treetop walking experience, and several short walking tracks leading to waterfalls like Curtis Falls and Cedar Creek Falls. It’s a wonderful day trip for those looking to experience the region's food, wine, and nature.",
        practicalInfo: {
        howToGetThere: "About a 45-minute drive from Surfers Paradise. A car is recommended to explore the area fully. Several tour companies offer day trips.",
        openingHours: "Shops on Gallery Walk are typically open from 10:00 AM to 4:00 PM.",
        cost: "Free to visit the mountain and Gallery Walk. Individual attractions have their own fees.",
        website: "https://www.destinationgoldcoast.com/places-to-see/tamborine-mountain"
      }
      },
        {
        name: "Broadbeach",
        description: "Broadbeach, or 'Broadie' to locals, presents a more sophisticated and slightly more relaxed alternative to its northern neighbour, Surfers Paradise. The pristine, patrolled beach is perfect for families and sun-seekers, and the adjacent Kurrawa Park has an excellent kids' playground and hosts regular markets and festivals.\n\nThe area is a food lover's paradise, with a high concentration of excellent restaurants, chic cafes, and cool bars. It's also home to The Star Gold Coast, a major entertainment complex with a casino, theatre, and world-class restaurants, as well as the Pacific Fair Shopping Centre. Broadbeach strikes a perfect balance between beach relaxation and urban convenience.",
        practicalInfo: {
        howToGetThere: "Located just south of Surfers Paradise. Well-serviced by the G:link tram (Broadbeach North and Broadbeach South stations) and buses.",
        openingHours: "Area is always accessible. Shops and restaurants have their own hours.",
        cost: "Free to visit the beach and parks.",
        website: "https://www.destinationgoldcoast.com/places-to-see/broadbeach"
      }
      }
      ]}
      logistics={{
        gettingAround: "The Gold Coast is well-connected. The G:link tram is the easiest way to travel along the coast from Broadbeach to Helensvale. The TransLink bus network covers the rest of the city, including theme parks and the airport. Ride-sharing services like Uber and Didi are widely available. Renting a car is the best option for exploring the hinterland national parks like Springbrook and Lamington.",
        whereToStay: "Surfers Paradise is the vibrant heart, ideal for nightlife, action, and first-time visitors (e.g., Peppers Soul, QT Gold Coast). Broadbeach offers a more sophisticated, food-focused vibe with easy access to the casino and shopping (e.g., The Star Grand, Meriton Suites). Burleigh Heads provides a trendy, laid-back atmosphere with a boutique feel (e.g., The Burleigh Mediterranean Resort). Coolangatta is perfect for a classic, relaxed family beach holiday (e.g., The Pink Hotel, Mantra Coolangatta Beach).",
        bestTimeToVisit: "The Gold Coast has a pleasant subtropical climate year-round. The best times to visit are autumn (April-May) and spring (September-October) when the weather is warm and sunny with lower humidity and fewer crowds. Summer (December-February) is hot, humid, and the peak tourist season. Winter (June-August) is mild and dry with sunny days, making it ideal for outdoor activities and whale watching.",
        suggestedItinerary: "Day 1: Arrive in Surfers Paradise and head straight to Surfers Paradise Beach. Explore the bustling streets of Surfers Paradise for shopping and dining. Experience the vibrant nightlife of Surfers Paradise or visit the Night Markets.\n\nDay 2: Spend the day at Warner Bros. Movie World, enjoying thrilling rides. Drive to Tamborine Mountain to hike through the Tamborine Rainforest and enjoy stunning views. Enjoy a peaceful walk through Burleigh Heads National Park.\n\nDay 3: Visit Currumbin Wildlife Sanctuary to get up close with Australian native wildlife. Head to SkyPoint Climb at the top of the Q1 building for panoramic views, or relax on Burleigh Heads or Coolangatta beach. Enjoy dinner at Miami Marketta."
      }}
      faqs={[{
          question: "Is Gold Coast expensive?",
          answer: "The Gold Coast can cater to a range of budgets. Accommodation and theme park tickets can be significant expenses, but booking in advance and looking for package deals can help. Eating out ranges from budget-friendly surf club meals to high-end dining. Many of the best attractions, like the beaches and national parks, are free, allowing you to enjoy the city's natural beauty without spending a lot."
        },
        {
          question: "How many days do you need in Gold Coast?",
          answer: "A trip of 3 to 5 days is ideal. This allows you enough time to experience the highlights: spend a day at a theme park, a day exploring different beaches like Surfers Paradise and Burleigh Heads, and a day venturing into the lush hinterland. If you want to visit multiple theme parks or explore more deeply, a week would be more comfortable."
        },
        {
          question: "Is Gold Coast safe?",
          answer: "Yes, the Gold Coast is generally a very safe destination for tourists. Standard precautions should be taken, such as being aware of your surroundings in busy areas, especially at night in nightlife precincts. The biggest safety consideration is the ocean: always swim at patrolled beaches between the red and yellow flags, as surf conditions and rips can be dangerous."
        },
        {
          question: "What is Gold Coast famous for?",
          answer: "The Gold Coast is famous for its 'famous for fun' slogan, which perfectly encapsulates its main draws. It's renowned for its long stretch of stunning golden beaches, world-class surf breaks like Snapper Rocks, a collection of exhilarating theme parks (earning it the nickname 'Australia's playground'), and the spectacular, World Heritage-listed rainforests of its hinterland."
        }
      ]}
    />
  );
};