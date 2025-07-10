import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Cairns: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Cairns, Australia (2025 Guide)"}
      description={"Welcome to Cairns, the vibrant tropical heart of North Queensland where two UNESCO World Heritage sites meet. Nestled between the lush, ancient Daintree Rainforest and the kaleidoscopic wonders of the Great Barrier Reef, this laid-back city is an adventurer's paradise. Whether you're seeking to dive among coral gardens, soar above jungle canopies, or simply relax by a crystal-clear lagoon, Cairns offers an unforgettable escape. It's more than just a gateway; it's a destination brimming with life, culture, and breathtaking natural beauty. From adrenaline-pumping activities to serene moments of tranquility, planning your itinerary around the best things to do in Cairns is the first step towards an epic Australian journey. This guide will navigate you through the must-see attractions and hidden gems that make this city a world-class travel hotspot."}
      highlights={["Great Barrier Reef Tour",
        "Daintree Rainforest & Cape Tribulation",
        "Kuranda Scenic Railway",
        "Skyrail Rainforest Cableway",
        "Cairns Esplanade Lagoon"]}
      galleryImages={[
        { url: "", alt: "Cairns landmark 1", caption: "Cairns landmark 1 - placeholder" },
        { url: "", alt: "Cairns landmark 2", caption: "Cairns landmark 2 - placeholder" },
        { url: "", alt: "Cairns landmark 3", caption: "Cairns landmark 3 - placeholder" },
        { url: "", alt: "Cairns landmark 4", caption: "Cairns landmark 4 - placeholder" },
        { url: "", alt: "Cairns landmark 5", caption: "Cairns landmark 5 - placeholder" },
        { url: "", alt: "Cairns landmark 6", caption: "Cairns landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Great Barrier Reef Tour",
        description: "No trip to Cairns is complete without experiencing the Great Barrier Reef, the world's largest coral reef system. A vast underwater universe of vibrant coral, dazzling fish, sea turtles, and majestic rays awaits. Numerous tour operators depart daily from the Cairns Reef Fleet Terminal, offering a range of experiences from snorkeling and scuba diving on outer reef pontoons to sailing adventures on idyllic catamarans.\n\nChoosing the right tour is key; options cater to all levels, from first-time snorkelers to certified divers. Many tours include a buffet lunch, snorkeling equipment, and educational presentations by marine biologists. Witnessing this natural wonder firsthand is a profound experience, offering a glimpse into one of the most complex and beautiful ecosystems on Earth.",
        practicalInfo: {
        howToGetThere: "Tours depart from the Reef Fleet Terminal at 1 Spence St, Cairns City. Most operators offer hotel pick-up.",
        openingHours: "Full-day tours typically run from 8:00 AM to 5:00 PM daily.",
        cost: "From AUD $200 - $300+ per adult for a full-day outer reef tour.",
        website: "https://www.tropicalnorthqueensland.org.au/things-to-do/great-barrier-reef/"
      }
      },
        {
        name: "Daintree Rainforest & Cape Tribulation",
        description: "Explore the oldest continuously surviving tropical rainforest on the planet. The Daintree Rainforest is a living museum, home to ancient flora and unique wildlife, including the elusive cassowary. A day trip or overnight stay allows you to venture north of Cairns, crossing the Daintree River by ferry into a world of dense jungle canopies and pristine beaches.\n\nAt Cape Tribulation, the rainforest dramatically meets the reef—the only place in the world where two World Heritage sites sit side-by-side. Take a guided rainforest walk, cruise a river looking for crocodiles, taste exotic tropical fruits at a local farm, or simply relax on the secluded sands of Myall Beach.",
        practicalInfo: {
        howToGetThere: "Located 2-3 hours north of Cairns. Accessible via self-drive (4WD recommended for some areas) or guided bus tours.",
        openingHours: "Accessible year-round; tour times vary.",
        cost: "Guided day tours start from AUD $170 per person. Daintree River Ferry costs approx. AUD $47 return per car.",
        website: "https://www.tropicalnorthqueensland.org.au/where-to-go/daintree-cape-tribulation/"
      }
      },
        {
        name: "Kuranda Scenic Railway",
        description: "Step back in time with a historic journey aboard the Kuranda Scenic Railway. This spectacular ride winds its way from Cairns up the Macalister Range to the charming rainforest village of Kuranda. The railway, an engineering feat completed in 1891, carves through dense rainforest, past breathtaking waterfalls like Barron Falls, and over 40 bridges and through 15 hand-carved tunnels.\n\nThe journey itself is the attraction, offering stunning views from restored vintage carriages. Upon arrival in Kuranda, you can explore the village's markets, wildlife sanctuaries, and walking tracks before returning, perhaps via the Skyrail Rainforest Cableway for a different perspective.",
        practicalInfo: {
        howToGetThere: "Departs from Cairns Central Station or Freshwater Connection Station. Can be booked as a standalone trip or packaged with the Skyrail.",
        openingHours: "Two departures daily, typically around 8:30 AM and 9:30 AM.",
        cost: "One-way tickets from approx. AUD $55 per adult. Packages available.",
        website: "https://www.ksr.com.au/"
      }
      },
        {
        name: "Skyrail Rainforest Cableway",
        description: "Glide silently for 7.5 kilometers over the canopy of the World Heritage-listed rainforest. The Skyrail Rainforest Cableway provides a unique and immersive perspective of the jungle below. The journey includes two mid-stations, Red Peak and Barron Falls, where you can alight and explore the forest floor via boardwalks, visit interpretive centres, and take in spectacular views from lookouts.\n\nThe Barron Falls station offers incredible vistas of the majestic gorge and falls, especially powerful during the wet season. Combining the Skyrail with the Kuranda Scenic Railway is the most popular way to experience both, creating a full-day rainforest adventure.",
        practicalInfo: {
        howToGetThere: "The main terminal is Smithfield, a 15-minute drive north of Cairns. Coach transfers are available.",
        openingHours: "Daily from 8:30 AM to 5:15 PM (last departure varies).",
        cost: "One-way tickets from approx. AUD $66 per adult. Packages available.",
        website: "https://www.skyrail.com.au/"
      }
      },
        {
        name: "Cairns Esplanade Lagoon",
        description: "The heart of the city, the Cairns Esplanade Lagoon is a massive 4800-square-meter saltwater swimming pool offering a safe and scenic place to cool off. With sandy shores, timber decking for sunbathing, and lifeguards on duty, it's a perfect spot for families, backpackers, and locals to relax and escape the tropical heat. As swimming in the ocean near the city is not advised due to crocodiles and stingers, this is the go-to swimming spot.\n\nSurrounded by grassy lawns, free public barbecues, and children's playgrounds, the lagoon area is a vibrant community hub. It's particularly beautiful at sunrise and sunset, with stunning views across the Trinity Inlet.",
        practicalInfo: {
        howToGetThere: "Located on the Cairns Esplanade in the city center. Easily accessible on foot from most city accommodations.",
        openingHours: "6:00 AM to 9:00 PM daily (closed for maintenance Wednesday mornings).",
        cost: "Free.",
        website: "https://www.cairns.qld.gov.au/esplanade"
      }
      },
        {
        name: "Fitzroy Island",
        description: "Just a 45-minute ferry ride from Cairns, Fitzroy Island is a pristine tropical paradise that offers a perfect island escape. Covered in lush rainforest and fringed by coral beaches and turquoise waters, it's a more rugged and adventurous alternative to Green Island. The island is part of a National Park, offering a wealth of activities.\n\nSnorkel straight off the beach at Welcome Bay and Nudey Beach (consistently voted one of Australia's best beaches), rent a kayak or stand-up paddleboard, or hike the Lighthouse Trail for panoramic views. The island is also home to the Cairns Turtle Rehabilitation Centre, where you can take a tour to learn about their conservation efforts.",
        practicalInfo: {
        howToGetThere: "Ferries depart daily from the Cairns Reef Fleet Terminal.",
        openingHours: "Ferries have multiple departure times throughout the day. Island is always accessible.",
        cost: "Return ferry from approx. AUD $89 per adult. Equipment hire and tours are extra.",
        website: "https://www.fitzroyisland.com/"
      }
      },
        {
        name: "Atherton Tablelands",
        description: "Escape the coastal heat and humidity by heading up to the Atherton Tablelands, a fertile plateau of rolling hills, volcanic crater lakes, lush rainforest, and charming country towns. This 'food bowl' of the tropics is perfect for a self-drive tour, where you can sample local coffee, cheese, chocolate, and tropical fruits directly from the producers.\n\nHighlights include swimming in the volcanic crater lakes of Lake Eacham and Lake Barrine, marveling at the enormous Curtain Fig Tree, and chasing waterfalls along the 'Waterfall Circuit,' which includes the famous Millaa Millaa Falls. The cooler climate and diverse landscapes provide a beautiful contrast to the coastal region.",
        practicalInfo: {
        howToGetThere: "Located about 1-1.5 hours' drive west of Cairns. Best explored by rental car, but guided tours are also available.",
        openingHours: "Accessible 24/7, though individual attractions have their own hours.",
        cost: "Free to drive around; some attractions may have entry fees. Food tours start from AUD $150.",
        website: "https://www.athertontablelands.com.au/"
      }
      },
        {
        name: "Mossman Gorge Centre",
        description: "Located at the southern end of the Daintree Rainforest, Mossman Gorge offers a fantastic and accessible taste of this ancient ecosystem. The Mossman Gorge Centre is the gateway, where you take a shuttle bus into the heart of the gorge. Here, crystal-clear water from the Mossman River tumbles over giant granite boulders, surrounded by lush rainforest.\n\nA key experience is the Ngadiku Dreamtime Walk, a guided tour led by local Indigenous people. They share their deep connection to the land, demonstrating traditional plant uses, identifying bush food sources, and telling legendary stories. It's a culturally rich and visually stunning experience.",
        practicalInfo: {
        howToGetThere: "Located a 1-hour drive north of Cairns. Self-drive or join a tour. A shuttle bus is required from the Centre to the gorge.",
        openingHours: "Daily from 8:00 AM to 6:00 PM.",
        cost: "Gorge shuttle bus approx. AUD $13.65 per adult. Dreamtime Walks are an additional cost.",
        website: "https://www.mossmangorge.com.au/"
      }
      },
        {
        name: "Green Island",
        description: "Green Island is a beautiful 6,000-year-old coral cay located within the Great Barrier Reef Marine Park. It's unique for being the only coral cay on the reef with a rainforest growing on it. Just a 45-minute catamaran ride from Cairns, it's an incredibly popular and family-friendly day trip.\n\nActivities include snorkeling directly from the beach, taking a glass-bottom boat tour to see the coral and marine life without getting wet, or exploring the island's lush interior on a short walking track. You can even visit Marineland Melanesia to see crocodiles and marine artifacts. It's an easy, all-in-one reef and island experience.",
        practicalInfo: {
        howToGetThere: "Ferries depart multiple times daily from the Cairns Reef Fleet Terminal.",
        openingHours: "Half-day and full-day tours available daily.",
        cost: "Return ferry and activity packages start from approx. AUD $98 per adult.",
        website: "https://greenisland.com.au/"
      }
      },
        {
        name: "Hartley's Crocodile Adventures",
        description: "Get up close and personal with one of Australia's most formidable predators at Hartley's Crocodile Adventures. This eco-park and wildlife sanctuary offers a fantastic opportunity to learn about crocodiles and other native fauna in a safe and natural setting. The highlight is the lagoon boat cruise, where you can watch massive saltwater crocodiles launch out of the water during feeding shows.\n\nBeyond the crocs, the park features extensive boardwalks that take you through different habitats to see cassowaries, koalas, kangaroos, snakes, and exotic birds. The educational presentations are excellent, making it a fun and informative day out for all ages.",
        practicalInfo: {
        howToGetThere: "Located a 40-minute drive north of Cairns on the Captain Cook Highway. Coach transfers are available.",
        openingHours: "Daily from 8:30 AM to 5:00 PM.",
        cost: "Approx. AUD $45 per adult.",
        website: "https://www.crocodileadventures.com/"
      }
      },
        {
        name: "Cairns Aquarium",
        description: "Discover the incredible biodiversity of Tropical North Queensland without getting wet. The Cairns Aquarium is the only aquarium in the world dedicated exclusively to the habitats and species of this region. It follows the journey of a drop of rain as it travels from the rainforest mountains down through rivers and mangroves to the Great Barrier Reef.\n\nThe state-of-the-art facility features impressive exhibits, including a massive Oceanarium with a walk-through tunnel, a Deep Reef tank, and a dedicated shark and ray touch tank. It's a perfect rainy-day activity and provides great context for what you'll see on a reef or rainforest tour.",
        practicalInfo: {
        howToGetThere: "Located in the heart of Cairns City at 5 Florence Street, easily walkable from most hotels.",
        openingHours: "Daily from 10:00 AM to 3:00 PM (last admission 2:00 PM).",
        cost: "Approx. AUD $52 per adult.",
        website: "https://www.cairnsaquarium.com.au/"
      }
      },
        {
        name: "Barron Gorge National Park",
        description: "Home to the spectacular Barron Falls, this national park is a rugged landscape of dense rainforest, deep gorges, and tumbling waterfalls. While the falls are a major drawcard, especially when viewed from the Kuranda Scenic Railway or Skyrail, the park itself offers numerous hiking trails and lookouts for those wanting a deeper exploration.\n\nThe park forms part of the Wet Tropics World Heritage Area. Popular spots include the Din Din Barron Falls Lookout, accessible by car from Kuranda, and the lower sections of the park near Kamerunga, which offer swimming holes and picnic areas along the Barron River (check for safety signs before swimming).",
        practicalInfo: {
        howToGetThere: "Accessible via Kuranda (upper gorge) or Kamerunga (lower gorge), a 20-minute drive from Cairns.",
        openingHours: "Accessible 24/7, but best visited during daylight hours.",
        cost: "Free.",
        website: "https://parks.des.qld.gov.au/parks/barron-gorge"
      }
      },
        {
        name: "Josephine Falls",
        description: "Consistently ranked as one of Australia's most beautiful swimming spots, Josephine Falls is a tiered cascade waterfall with crystal-clear pools, located at the base of Queensland's highest mountain, Bartle Frere. A short 700-meter walk through the rainforest leads you to viewing platforms and the main swimming area.\n\nThe highlight for many is the natural rockslide, a smooth, sloping rock face that visitors can slide down into the refreshing pool below. It's a stunningly beautiful spot to spend an afternoon swimming and relaxing. Always obey safety signs, as water levels can rise rapidly after rain.",
        practicalInfo: {
        howToGetThere: "Located about a 1-hour drive south of Cairns. Accessible by car or as part of a guided waterfalls tour.",
        openingHours: "Accessible 24/7, but daylight hours are recommended. May close after heavy rain.",
        cost: "Free.",
        website: "https://parks.des.qld.gov.au/parks/wooroonooran-josephine-falls"
      }
      },
        {
        name: "Paronella Park",
        description: "A truly unique attraction, Paronella Park is the result of one man's dream. In the 1930s, Spanish immigrant José Paronella built a Spanish-style castle, picnic area, tennis courts, and a ballroom on 5 hectares of lush rainforest next to Mena Creek Falls. Today, the moss-covered ruins evoke a sense of fantasy and romance.\n\nYour entry ticket is valid for 24 months and includes a guided walk explaining the park's incredible history, as well as an evening tour to see the castle and falls illuminated. It’s a magical, slightly surreal experience that tells a story of ambition, love, and perseverance against the odds.",
        practicalInfo: {
        howToGetThere: "Located a 1.5-hour drive south of Cairns. Best accessed by car.",
        openingHours: "Daily from 9:00 AM to 7:30 PM.",
        cost: "Approx. AUD $56 per adult.",
        website: "https://www.paronellapark.com.au/"
      }
      },
        {
        name: "Babinda Boulders",
        description: "A popular swimming hole and picnic spot for locals, the Babinda Boulders is a stunningly beautiful area where a creek flows through huge, time-worn granite boulders, creating a series of cool, clear pools. The main swimming area is safe and family-friendly, surrounded by lush rainforest.\n\nDownstream lies the Devil's Pool, an area of cultural significance to the local Indigenous people and subject to a tragic legend. While the lookout is beautiful, swimming is strictly forbidden here due to dangerously fast currents. Stick to the main picnic and swimming area for a safe and refreshing dip in a gorgeous natural setting.",
        practicalInfo: {
        howToGetThere: "Located a 1-hour drive south of Cairns, near the town of Babinda.",
        openingHours: "Accessible 24/7, daylight hours recommended.",
        cost: "Free.",
        website: "https://www.cairns.qld.gov.au/region/things-to-do/babinda-boulders"
      }
      }
      ]}
      logistics={{
        gettingAround: "Cairns city center is compact and walkable. For longer distances, the 'Sunbus' public bus network connects the city to the Northern Beaches. Taxis and rideshare services like Uber and Didi are widely available. Renting a car is the best option for exploring further afield, such as the Atherton Tablelands or Port Douglas. Many tours include coach transfers from your accommodation.",
        whereToStay: "Cairns City Centre offers the most convenience, with easy access to the Reef Fleet Terminal, Esplanade, restaurants, and nightlife. Recommended for first-time visitors. Palm Cove, a 30-minute drive north, offers luxury resorts and a quieter, more upscale atmosphere. Trinity Beach and Yorkeys Knob are great mid-range options for a relaxed beach holiday.",
        bestTimeToVisit: "The best time to visit Cairns is during the dry season, from May to October. During these months, you can expect warm temperatures, lower humidity, and plenty of sunshine, making it ideal for reef and rainforest exploration. The wet season (November to April) is characterized by high humidity, tropical downpours, and the possibility of cyclones. It's also 'stinger season', requiring protective suits for swimming in the ocean.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: Reef Exploration. Take a full-day tour to the Outer Great Barrier Reef for snorkeling or diving. In the evening, enjoy dinner at one of the restaurants along the marina.\nDay 2: Rainforest Adventure. Experience the Kuranda Scenic Railway up to the rainforest village and return via the Skyrail Rainforest Cableway for panoramic views. Explore the markets in Kuranda.\nDay 3: Local Cairns & Waterfalls. Spend the morning at the Cairns Esplanade Lagoon and visit the Cairns Aquarium. In the afternoon, rent a car and drive south to swim at Josephine Falls or Babinda Boulders."
      }}
      faqs={[{
          question: "Is Cairns expensive?",
          answer: "Cairns can be as expensive or as affordable as you make it. The main costs are tours to the Great Barrier Reef and Daintree Rainforest, which are significant but essential experiences. Accommodation ranges from budget-friendly hostels to luxury resorts. Food and drink prices are comparable to other major Australian cities, but you can save money by using public BBQs and eating at food courts. Overall, it's generally considered more affordable than Sydney or Melbourne, but budgeting for major tours is crucial."
        },
        {
          question: "How many days do you need in Cairns?",
          answer: "A minimum of 3 full days is recommended to experience the two main highlights: one day for the Great Barrier Reef and one day for the rainforest (Daintree or Kuranda). However, to truly appreciate the region without feeling rushed, 5 to 7 days is ideal. This allows for extra time to explore the Atherton Tablelands, relax on an island like Fitzroy, and enjoy the laid-back atmosphere of Cairns itself."
        },
        {
          question: "Is Cairns safe?",
          answer: "Cairns is generally a safe city for tourists. Standard precautions against petty crime, like not leaving valuables unattended, should be taken. The main safety concerns are environmental. Always swim between the flags at patrolled beaches and at the Esplanade Lagoon. During stinger season (typically Nov-May), wear a protective lycra suit in the ocean. Be 'croc-wise' near rivers and estuaries—obey all warning signs and never swim in un-signposted waterways. Sun protection is vital year-round."
        },
        {
          question: "What is Cairns famous for?",
          answer: "Cairns is world-famous for being the primary gateway to two UNESCO World Heritage sites: the Great Barrier Reef and the Daintree Rainforest. Its identity is inextricably linked to these natural wonders. The city is also known for its vibrant, tropical, and laid-back atmosphere, its adventure tourism (bungee jumping, white water rafting), and its role as a major hub for backpackers and international travelers exploring Australia's east coast."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1676164615834-2df7ac5fca20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxDYWlybnMlMjB0cmF2ZWx8ZW58MHwwfHx8MTc1MjE0MDExMHww&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};