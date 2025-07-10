import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Broome: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Broome, Australia (2025 Guide)"}
      description={"Where the rugged Australian outback collides with the turquoise Indian Ocean, Broome is a remote paradise steeped in a rich and diverse history. This Kimberley town, built on the fortunes of the pearling industry, offers a captivating blend of Indigenous, Asian, and European cultures. Its landscapes are just as mesmerising, from the fiery red cliffs of Gantheaume Point to the 22 kilometres of pristine white sand at Cable Beach. Whether you're witnessing the magical Staircase to the Moon, riding a camel at sunset, or delving into its storied past, you'll find an adventure that feels both timeless and uniquely Australian. This guide will walk you through all the very best things to do in Broome, ensuring your trip to this extraordinary corner of the world is unforgettable."}
      highlights={["Cable Beach Camel Ride at Sunset",
        "Staircase to the Moon",
        "Gantheaume Point",
        "Horizontal Falls Seaplane Adventure",
        "Sun Pictures Cinema"]}
      galleryImages={[
        { url: "", alt: "Broome landmark 1", caption: "Broome landmark 1 - placeholder" },
        { url: "", alt: "Broome landmark 2", caption: "Broome landmark 2 - placeholder" },
        { url: "", alt: "Broome landmark 3", caption: "Broome landmark 3 - placeholder" },
        { url: "", alt: "Broome landmark 4", caption: "Broome landmark 4 - placeholder" },
        { url: "", alt: "Broome landmark 5", caption: "Broome landmark 5 - placeholder" },
        { url: "", alt: "Broome landmark 6", caption: "Broome landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Cable Beach Camel Ride at Sunset",
        description: "An iconic Broome experience, a camel ride along the famous Cable Beach as the sun dips below the horizon is a truly magical moment. The silhouettes of the camel train against the fiery orange and purple sky create a postcard-perfect scene. The gentle, rhythmic pace of the camels allows you to soak in the vastness of the beach and the spectacular coastal colours.\n\nSeveral operators run tours, each offering a slightly different experience. It's an incredibly popular activity, so booking well in advance, especially during the peak tourist season, is essential. The guides are often full of stories about the camels and the local area, adding another layer to this unforgettable adventure.",
        practicalInfo: {
        howToGetThere: "Tours depart from the northern end of Cable Beach, near the main car park and surf club. Most operators offer courtesy bus transfers from local accommodation.",
        openingHours: "Tours typically run in the late afternoon, timed with the sunset. Morning and pre-sunset rides are also available.",
        cost: "$80 - $120 AUD per adult for a sunset ride.",
        website: "https://www.visitbroome.com.au/tours"
      }
      },
        {
        name: "Staircase to the Moon",
        description: "This incredible natural phenomenon occurs for a few nights each month between March and October. When the full moon rises over the exposed tidal flats of Roebuck Bay at low tide, it creates a stunning optical illusion of a golden staircase reaching for the moon. It's a breathtaking sight that draws crowds to the shores.\n\nThe best viewing spot is Town Beach, where the monthly Staircase to the Moon Markets are held. The markets add to the festive atmosphere with local food stalls, crafts, and live music, making it a complete cultural experience.",
        practicalInfo: {
        howToGetThere: "Best viewed from Town Beach or The Mangrove Hotel. Check the official Broome Visitor Centre website for dates and times.",
        openingHours: "Occurs 2-3 nights per month from March to October. Check the schedule online.",
        cost: "Free to view. Money for market stalls is recommended.",
        website: "https://www.visitbroome.com.au/facts/staircase-to-the-moon"
      }
      },
        {
        name: "Gantheaume Point",
        description: "Just a short drive from town, Gantheaume Point is where deep red sandstone cliffs meet the turquoise waters of the Indian Ocean, creating a dramatic and beautiful landscape. It's a fantastic spot for photography, especially during the golden hours of sunrise and sunset. The contrast of colours is simply stunning.\n\nAt very low tides (below 2.16m), you can clamber down the rocks to see 130-million-year-old dinosaur footprints preserved in the reef rock. For easier access, a plaster cast of the footprints is located at the top of the cliffs near the lighthouse.",
        practicalInfo: {
        howToGetThere: "Located about 6km from the town centre. Accessible by car; a 4WD is recommended for parts of the track but not essential for the main lookout.",
        openingHours: "24/7. Access to dinosaur footprints is dependent on the tide.",
        cost: "Free.",
        website: "https://www.australiasnorthwest.com/explore/broome/gantheaume-point"
      }
      },
        {
        name: "Horizontal Falls Seaplane Adventure",
        description: "Described by David Attenborough as 'one of the greatest natural wonders of the world,' the Horizontal Falls are a truly unique phenomenon. Massive tidal movements force huge volumes of water through two narrow gorges in the McLarty Range, creating a sideways waterfall effect. The only way to access this remote wonder is by seaplane and jet boat.\n\nTours offer a scenic flight over the stunning Buccaneer Archipelago, followed by a thrilling boat ride through the falls themselves. It's a high-adrenaline adventure and a spectacular way to appreciate the raw power and beauty of the Kimberley.",
        practicalInfo: {
        howToGetThere: "Tours depart from Broome Airport. Multiple tour operators offer half-day and full-day excursions.",
        openingHours: "Tours run daily during the dry season (approx. May-October), subject to weather and tidal conditions.",
        cost: "From $900 AUD per person for a half-day tour.",
        website: "https://www.horizontalfallsadventures.com.au/"
      }
      },
        {
        name: "Sun Pictures Cinema",
        description: "Step back in time at Sun Pictures, the world's oldest operating picture gardens. This rustic, open-air cinema has been screening films since 1916 and is oozing with character and history. Watching a movie from a canvas deckchair under a canopy of stars is a quintessential Broome experience.\n\nThe cinema has survived floods, cyclones, and societal changes, and its quirky history is part of its charm. Be sure to arrive early to read the historical displays and soak in the nostalgic atmosphere before the film begins. You might even hear an occasional plane from the nearby airport passing overhead during the movie!",
        practicalInfo: {
        howToGetThere: "Located in the heart of Chinatown on Carnarvon Street.",
        openingHours: "Open nightly for screenings. Check their website for session times.",
        cost: "Around $20 AUD for an adult ticket.",
        website: "https://www.sunpictures.com.au/"
      }
      },
        {
        name: "Willie Creek Pearl Farm",
        description: "Discover the intricate process behind the creation of the famed Australian South Sea Pearl at Willie Creek Pearl Farm. Located on a picturesque tidal estuary, the farm offers fascinating tours that explain the journey from shell to showroom. You'll learn about pearl seeding, harvesting, and grading, and take a boat cruise to see the pearl lines in the creek.\n\nThis award-winning tour provides a comprehensive insight into Broome's modern pearling industry. It's an engaging and educational experience that showcases the skill and patience required to cultivate these ocean gems. You can choose to self-drive or take a coach tour from Broome.",
        practicalInfo: {
        howToGetThere: "38km north of Broome. Accessible by a tour coach or self-drive (4WD is recommended as the last section is unsealed).",
        openingHours: "Tours run daily. Bookings are essential.",
        cost: "From $80 AUD per adult for a self-drive tour.",
        website: "https://www.williecreekpearls.com.au/pages/willie-creek-pearl-farm"
      }
      },
        {
        name: "Broome Historical Museum",
        description: "Housed in three heritage buildings, the Broome Historical Museum offers a deep dive into the town's captivating past. The exhibits cover everything from the region's First Nations history and the booming, multicultural pearling era to its role in World War II. The collection of artefacts, photographs, and personal stories is extensive and well-curated.\n\nIt's a fantastic place to spend a few hours, especially on a hot day, to understand the diverse forces that have shaped this unique town. The volunteers are passionate and knowledgeable, providing personal anecdotes that bring the history to life.",
        practicalInfo: {
        howToGetThere: "Located on Saville Street, near the town centre.",
        openingHours: "Open daily during the dry season, with reduced hours in the wet season. Check website for current times.",
        cost: "Around $12 AUD per adult.",
        website: "https://www.broomemuseum.org.au/"
      }
      },
        {
        name: "Japanese Cemetery",
        description: "The Japanese Cemetery is the largest in Australia and a poignant tribute to the thousands of Japanese divers who lost their lives in the perilous pearling industry. Over 900 gravestones, some ornately carved from sandstone, stand in silent rows, a testament to the dangers faced by the divers, many of whom died from the bends or cyclones.\n\nWalking through the cemetery is a moving experience that offers a solemn insight into the human cost of the pearling boom. It is a beautifully maintained and respectful site that highlights the significant Japanese contribution to Broome's history and multicultural identity.",
        practicalInfo: {
        howToGetThere: "Located on Port Drive, on the way to Town Beach.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.visitbroome.com.au/see-and-do/japanese-cemetery"
      }
      },
        {
        name: "Town Beach",
        description: "While Cable Beach gets the sunset glory, Town Beach is the heart of the community for sunrise and the Staircase to the Moon. Its calm, shallow waters make it a family-friendly spot for a dip, especially for those with young children. The adjacent park has a fantastic water playground, BBQs, and plenty of shade.\n\nThis is the prime location for viewing the Staircase to the Moon, and it also hosts the bustling night markets. A walk along the foreshore reveals information about Broome's history and the rich ecosystem of Roebuck Bay. At very low tide, you can even see the wrecks of WWII flying boats.",
        practicalInfo: {
        howToGetThere: "Located at the end of Town Beach Road, a short drive from Chinatown.",
        openingHours: "Open 24/7. Water park has set hours.",
        cost: "Free.",
        website: "https://www.visitbroome.com.au/see-and-do/town-beach"
      }
      },
        {
        name: "Matso's Broome Brewery",
        description: "A Broome institution, Matso's is Australia's most remote brewery, famous for its unique and refreshing beers. Housed in a heritage building overlooking Roebuck Bay, it's the perfect place to escape the midday heat and sample their creative brews, including the iconic Ginger Beer and Mango Beer.\n\nGrab a tasting paddle to try a range of their offerings and pair it with a meal from their extensive menu, which often features local ingredients and flavours. The relaxed, tropical garden setting and friendly atmosphere make it a must-visit for any traveller looking for a true taste of Broome.",
        practicalInfo: {
        howToGetThere: "Located on Hamersley Street, overlooking Roebuck Bay.",
        openingHours: "Open daily for breakfast, lunch, and dinner.",
        cost: "Pints from $12 AUD, meals from $25 AUD.",
        website: "https://matsos.com.au/"
      }
      },
        {
        name: "Dampier Peninsula & Cape Leveque",
        description: "For a true Kimberley adventure, head north of Broome to the Dampier Peninsula. This area is home to several Aboriginal communities and offers an authentic cultural experience alongside breathtaking coastal scenery. The journey itself, along the unsealed Cape Leveque Road, is part of the adventure.\n\nExplore stunning locations like Kooljaman at Cape Leveque (currently closed for redevelopment, check for updates), Cygnet Bay Pearl Farm, or One Arm Point, where you can see the massive tidal flows and learn about the local Bardi Jawi people's connection to their land and sea. Booking a tour with a local Indigenous guide is the best way to experience this special place.",
        practicalInfo: {
        howToGetThere: "Requires a high-clearance 4WD for self-driving. Numerous guided 4WD and scenic flight tours are available from Broome.",
        openingHours: "Varies by community and tour. Check specific locations before visiting.",
        cost: "Varies widely depending on tour type and duration.",
        website: "https://www.australiasnorthwest.com/explore/kimberley/dampier-peninsula"
      }
      },
        {
        name: "Roebuck Bay",
        description: "Roebuck Bay is a wetland of international importance and a paradise for birdwatchers. Its vast tidal mudflats are a critical feeding ground for tens of thousands of migratory shorebirds that travel from as far as Siberia and the Arctic Circle. The Broome Bird Observatory is the best place to learn about this incredible avian spectacle.\n\nEven for non-birders, the bay is stunning. The vibrant reds of the pindan soil, the emerald green of the mangroves, and the shimmering turquoise of the water create a photographer's dream. Kayaking or taking a hovercraft tour at high tide offers a unique perspective of this diverse ecosystem.",
        practicalInfo: {
        howToGetThere: "The Broome Bird Observatory is 25km from town. Town Beach provides easy access to the bay's southern shores.",
        openingHours: "Accessible 24/7. Observatory and tours have specific hours.",
        cost: "Free to view the bay. Tour costs vary.",
        website: "https://www.broomebirdobservatory.com/"
      }
      },
        {
        name: "Chinatown",
        description: "Far from a typical Chinatown, Broome's version is the historic and commercial heart of the town. Established in the pearling boom days, its streets are lined with heritage buildings that once housed noodle restaurants, gambling dens, and pearl cleaning workshops. Today, it's a vibrant precinct filled with pearl showrooms, art galleries, cafes, and boutiques.\n\nLook for the distinctive multicultural architecture and the Chinese characters on the signs. The revitalised Streeter's Jetty and the informative heritage trails offer glimpses into its colourful past. It's a great place for a stroll, some souvenir shopping, and to soak up the town's unique atmosphere.",
        practicalInfo: {
        howToGetThere: "The central hub of Broome town, easily walkable.",
        openingHours: "Shops generally open from 9am-5pm, with restaurants open later.",
        cost: "Free to wander.",
        website: "https://www.visitbroome.com.au/see-and-do/chinatown"
      }
      },
        {
        name: "Malcolm Douglas Crocodile Park",
        description: "Get up close and personal with one of Australia's most formidable predators at the Malcolm Douglas Crocodile Park. Founded by the legendary bushman and filmmaker, this park provides a thrilling and educational look at both saltwater and freshwater crocodiles. The highlight is the daily feeding tour, where you can witness the incredible power and 'snap' of the giant salties.\n\nThe park is designed to showcase the animals in environments that mimic their natural habitats. Walking through the park feels like a journey into the Kimberley wilderness, with cassowaries, kangaroos, and a variety of birds also on display.",
        practicalInfo: {
        howToGetThere: "Located on the Broome Highway, 15 minutes drive from the town centre.",
        openingHours: "Open daily, with the main feeding tour in the afternoon.",
        cost: "Around $40 AUD per adult.",
        website: "https://www.malcolmdouglas.com.au/"
      }
      },
        {
        name: "Broome Courthouse Markets",
        description: "Held every weekend in the beautiful tropical gardens of the historic Broome Courthouse, these markets are a local institution. It's a vibrant gathering place for locals and tourists alike, offering a fantastic array of local arts and crafts, handmade jewellery, clothing, and fresh produce.\n\nThe food stalls are a major drawcard, serving up everything from spicy noodles and satay to fresh mango smoothies and crepes. With live music often playing and a relaxed, friendly vibe, it's the perfect way to spend a Saturday or Sunday morning, find unique souvenirs, and experience Broome's community spirit.",
        practicalInfo: {
        howToGetThere: "Located at the Broome Courthouse on Hamersley Street.",
        openingHours: "Every Saturday year-round, and also on Sundays from Easter to October.",
        cost: "Free entry.",
        website: "https://www.broomemarkets.com.au/"
      }
      }
      ]}
      logistics={{
        gettingAround: "The Broome Explorer Bus is a convenient option, connecting Cable Beach, Chinatown, and Town Beach. Taxis and rideshare services are available. For flexibility, especially for sights like Gantheaume Point, renting a car is recommended. A 4WD is essential for adventures up the Dampier Peninsula or along unsealed tracks. The main town areas are walkable, and cycling is also a popular choice.",
        whereToStay: "Cable Beach is the premier resort area, perfect for luxury stays and direct beach access; top picks include the Cable Beach Club Resort & Spa. For views of Roebuck Bay and proximity to the Staircase to the Moon, The Mangrove Hotel is ideal. Areas around Chinatown offer convenient access to shops and restaurants. Budget options include backpacker hostels and caravan parks like Discovery Parks - Broome.",
        bestTimeToVisit: "The dry season (May to October) is the most popular time to visit. It features warm, dry days with clear blue skies and cooler nights, with average temperatures from 17°C to 31°C. The wet season (November to April) is characterized by high humidity, tropical downpours, and the possibility of cyclones. While some tours may not operate, it's a great time to see dramatic electrical storms, lush green landscapes, and fewer crowds.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: Explore Chinatown's galleries and pearl shops. Visit the Broome Historical Museum. Relax at Town Beach in the afternoon. Enjoy a brew at Matso's Brewery before watching a film under the stars at Sun Pictures Cinema.\nDay 2: Morning visit to Gantheaume Point to see the dinosaur footprints (tide permitting). Take a tour of the Willie Creek Pearl Farm. Spend the late afternoon swimming at Cable Beach, followed by an iconic sunset camel ride.\nDay 3: Spend the morning at the Courthouse Markets (if it's a weekend). In the afternoon, visit the Malcolm Douglas Crocodile Park. Alternatively, dedicate the full day to a major tour, such as a seaplane flight to the Horizontal Falls."
      }}
      faqs={[{
          question: "Is Broome expensive?",
          answer: "Broome can be relatively expensive compared to major Australian cities due to its remote location. Flights and accommodation are the biggest costs, especially during the peak dry season (May-October). Tours and activities can also be pricey. To manage costs, book flights and accommodation well in advance, consider visiting in the shoulder seasons (April/May or September/October), and utilise self-catering options."
        },
        {
          question: "How many days do you need in Broome?",
          answer: "A minimum of 3 to 4 days is recommended to see the main highlights of Broome itself, such as Cable Beach, Chinatown, and Gantheaume Point. If you want to include a major day trip like the Horizontal Falls or an excursion up the Dampier Peninsula, you should plan for 5 to 7 days to fully appreciate the region without feeling rushed."
        },
        {
          question: "Is Broome safe?",
          answer: "Broome is generally a safe destination for tourists. However, like any town, it's wise to take standard precautions such as locking your vehicle and accommodation and being aware of your surroundings, especially at night. Environmentally, be crocodile-aware near creeks and estuaries, swim between the flags at Cable Beach due to strong tides, and be mindful of marine stingers (Irukandji) which can be present, particularly during the wet season (November-April)."
        },
        {
          question: "What is Broome famous for?",
          answer: "Broome is famous for several key things: its historic and lucrative pearling industry, which gave the town its multicultural identity; the stunning 22km stretch of white sand at Cable Beach, renowned for its spectacular sunsets and camel rides; and the natural phenomenon known as the Staircase to the Moon. It's also celebrated as the western gateway to the vast and rugged Kimberley wilderness."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1682668731868-8d82c15870aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxCcm9vbWUlMjB0cmF2ZWx8ZW58MHwwfHx8MTc1MjE0MDEwN3ww&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};