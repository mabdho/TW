import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Harare: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Harare, Zimbabwe (2025 Guide)"}
      description={"Welcome to Harare, the vibrant heart of Zimbabwe, affectionately known as the 'Sunshine City'. With its wide avenues, often painted purple by blooming jacaranda trees, Harare offers a unique blend of contemporary urban energy and rich cultural heritage. This capital city is a canvas of contrasts, where gleaming modern buildings stand near colonial-era architecture and lush, expansive parks provide tranquil escapes from the urban bustle. The city's thriving arts scene, particularly its world-renowned Shona sculpture, adds another layer to its compelling character. Whether you're exploring bustling markets, encountering wildlife at a world-class sanctuary, or delving into the nation's history, you'll find an array of captivating experiences. This guide will walk you through the absolute best things to do in Harare, ensuring a memorable journey into the soul of Zimbabwe."}
      highlights={["Wild Is Life Grand Zimbabwe",
        "Mbare Musika Market",
        "National Heroes Acre",
        "Balancing Rocks of Epworth",
        "National Gallery of Zimbabwe"]}
      galleryImages={[
        { url: "", alt: "Harare landmark 1", caption: "Harare landmark 1 - placeholder" },
        { url: "", alt: "Harare landmark 2", caption: "Harare landmark 2 - placeholder" },
        { url: "", alt: "Harare landmark 3", caption: "Harare landmark 3 - placeholder" },
        { url: "", alt: "Harare landmark 4", caption: "Harare landmark 4 - placeholder" },
        { url: "", alt: "Harare landmark 5", caption: "Harare landmark 5 - placeholder" },
        { url: "", alt: "Harare landmark 6", caption: "Harare landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Wild Is Life Grand Zimbabwe",
        description: "More than just a zoo, Wild Is Life is a sanctuary dedicated to the rescue, rehabilitation, and conservation of Zimbabwe's native fauna. This incredible experience offers visitors an intimate and respectful encounter with animals. The highlight is the afternoon tour, which includes high tea and culminates in feeding gentle giraffes and interacting with rescued elephants, all under the guidance of knowledgeable handlers who share the animals' stories. \n\nThe sanctuary operates with a strong conservation ethos, and your visit directly supports their efforts in anti-poaching and wildlife protection. It's a truly heartwarming and educational experience that provides unparalleled photo opportunities and a deeper appreciation for Africa's magnificent creatures.",
        practicalInfo: {
        howToGetThere: "Located near Harare International Airport. A taxi or pre-booked transfer is the best way to get there.",
        openingHours: "Tours are by appointment only, typically in the afternoon around 3:30 PM. Booking in advance is essential.",
        cost: "Premium pricing (approx. $120-$150 USD), but includes drinks, snacks, and a comprehensive tour.",
        website: "https://www.wildislife.org/"
      }
      },
        {
        name: "Mbare Musika Market",
        description: "For a full-sensory immersion into local life, nothing beats Mbare Musika. This is Harare's largest and most chaotic market, a sprawling labyrinth of stalls where everything imaginable is bought and sold. You'll find vast sections dedicated to fresh produce, traditional herbs, secondhand clothing, and household goods. The real treasure for visitors is the craft section, where you can find an impressive array of Shona sculptures, wooden carvings, woven baskets, and beadwork directly from the artisans.\n\nWhile the energy can be intense, it's an authentic and unforgettable experience. Go with an open mind, be prepared to bargain politely, and consider hiring a local guide for your first visit to navigate the maze and facilitate interactions. It's the commercial and cultural pulse of the city.",
        practicalInfo: {
        howToGetThere: "Located in the Mbare suburb, a short taxi ride from the city center. It's best to take a trusted taxi that will wait for you.",
        openingHours: "Daily from early morning until late afternoon.",
        cost: "Free to enter. Prices for goods are negotiable.",
        website: "No official website. Information is available through local tour guides."
      }
      },
        {
        name: "National Heroes Acre",
        description: "Perched on a ridge just west of the city, the National Heroes Acre is a striking monument and burial ground commemorating the heroes of Zimbabwe's liberation struggle. The site is dominated by a towering 40-meter obelisk, the 'Tomb of the Unknown Soldier,' and features two large bronze statues depicting scenes from the war. The architectural style is grand and symbolic, drawing inspiration from socialist-realist design.\n\nA visit here offers profound insight into the nation's history and the sacrifices made for its independence. Guided tours are available and highly recommended, as the guides provide context and narratives that bring the monument's significance to life. The elevated position also offers panoramic views of the surrounding landscape.",
        practicalInfo: {
        howToGetThere: "About 7 km west of the city center. Best reached by taxi or as part of a guided city tour.",
        openingHours: "Typically 8:00 AM - 5:00 PM daily. Check for public holidays.",
        cost: "A small entry fee is charged, usually around $10 USD for international visitors.",
        website: "No official website. Managed by the National Museums and Monuments of Zimbabwe."
      }
      },
        {
        name: "Balancing Rocks of Epworth",
        description: "These geological marvels are one of Zimbabwe's most iconic natural landmarks, famously featured on the old Zimbabwean dollar notes. Located in Epworth, a short drive from Harare, the site consists of massive granite boulders weathered by eons of wind and rain into precarious, gravity-defying formations. The most famous grouping, known as the 'Banknote Rocks' or 'Flying Boat,' is a truly astonishing sight.\n\nThe rocks are not just a geological wonder but also hold spiritual significance for the local people. The area is peaceful and offers a fantastic opportunity for photography and a short, reflective walk. It's a perfect half-day trip to witness a unique piece of Zimbabwe's natural artistry.",
        practicalInfo: {
        howToGetThere: "Located in Epworth, about 13 km southeast of Harare. A taxi or hired car is recommended.",
        openingHours: "Daily during daylight hours, typically 8:00 AM to 5:00 PM.",
        cost: "Entry fee of approximately $10 USD for international visitors.",
        website: "Managed by National Museums and Monuments. Best to check locally for current info."
      }
      },
        {
        name: "National Gallery of Zimbabwe",
        description: "Situated on the edge of the Harare Gardens, the National Gallery is the country's premier institution for contemporary art. It holds a celebrated collection of Zimbabwean works, with a special focus on the world-renowned Shona stone sculpture movement. The galleries beautifully display intricate and powerful sculptures alongside paintings, prints, and mixed-media installations from both local and international artists.\n\nThe gallery also features a lovely outdoor sculpture garden and often hosts temporary exhibitions, workshops, and cultural events. It's an essential stop for anyone interested in art and culture, providing a deep dive into the creative spirit of Zimbabwe. Don't miss the well-curated gift shop for authentic art pieces.",
        practicalInfo: {
        howToGetThere: "Centrally located at 20 Julius Nyerere Way, bordering Harare Gardens. Easily accessible on foot from city center hotels or by taxi.",
        openingHours: "Tuesday - Sunday, 9:00 AM - 5:00 PM. Closed Mondays.",
        cost: "Small entry fee, around $5-$10 USD.",
        website: "https://www.nationalgallery.co.zw/"
      }
      },
        {
        name: "The Kopje",
        description: "The Kopje (pronounced 'koppie', meaning 'small hill' in Afrikaans) is a granite hill that stands as the highest point in central Harare. A winding road leads to the top, where a memorial flame of independence burns and offers breathtaking 360-degree views of the entire city. It's the perfect place to get your bearings and appreciate the layout of Harare, from its bustling central business district to its leafy residential suburbs.\n\nThis spot is particularly popular at sunrise and sunset when the light casts a golden glow over the city. It's a place of historical significance and natural beauty, offering a moment of tranquility above the urban energy. Due to its relative isolation, it's best to visit during the day and preferably with a driver or in a group.",
        practicalInfo: {
        howToGetThere: "Located just west of the city center. A taxi is the safest and most convenient way to the top.",
        openingHours: "Accessible during daylight hours.",
        cost: "Free to visit, though you'll need to pay for transport.",
        website: "No official website."
      }
      },
        {
        name: "Chapungu Sculpture Park",
        description: "This outdoor gallery is a serene and expansive space dedicated entirely to the art of Zimbabwean stone sculpture. Founded in 1970, Chapungu has been instrumental in promoting this unique art form on the global stage. Visitors can wander through beautifully landscaped gardens dotted with hundreds of stunning sculptures created by Zimbabwe's most revered artists, including masters like Joram Mariga and Nicholas Mukomberanwa.\n\nThe sculptures, primarily carved from serpentine, springstone, and opal stone, depict themes of family, nature, and spirituality. The park provides a tranquil environment to appreciate the skill and storytelling inherent in each piece. There are often artists-in-residence at work, offering a chance to see the creative process firsthand.",
        practicalInfo: {
        howToGetThere: "Located in the Msasa Park suburb. Best reached by taxi.",
        openingHours: "Daily, 8:00 AM to 5:00 PM.",
        cost: "An entrance fee of around $10-$15 USD is charged.",
        website: "http://www.chapungusculpturepark.com/"
      }
      },
        {
        name: "Harare Gardens",
        description: "As the city's largest public park, Harare Gardens is a lush green lung in the heart of the central business district. Its sprawling lawns, shaded pathways, and ornamental ponds offer a welcome respite from the city's hustle and bustle. The park features a miniature rainforest, known as the 'Little Rainforest,' where you can walk on elevated platforms through a dense canopy of indigenous trees.\n\nWhile it’s a popular spot for locals to relax, it's advisable to visit during the day when it's busiest. It's a lovely place for a leisurely stroll, a picnic, or simply to sit on a bench and people-watch. The National Gallery is conveniently located on its northern edge, making it easy to combine the two attractions.",
        practicalInfo: {
        howToGetThere: "Centrally located, easily walkable from most downtown locations.",
        openingHours: "Open 24/7, but it is strongly recommended to visit only during daylight hours for safety.",
        cost: "Free.",
        website: "No official website."
      }
      },
        {
        name: "National Botanic Gardens",
        description: "Spanning nearly 7 square kilometers, the National Botanic Gardens are a plant lover's paradise. The gardens showcase over 900 species of wild trees and shrubs from all over Zimbabwe and other parts of Africa. The collections are arranged by ecosystem, allowing you to walk through sections representing different geographical areas, from the Highveld grasslands to the Lowveld savanna and the lush forests of the Eastern Highlands.\n\nIt's a fantastic place for a peaceful walk, birdwatching, or a picnic. The gardens provide a comprehensive living library of Zimbabwe's diverse flora. While some areas are better maintained than others, its sheer scale and diversity make it a worthwhile visit for anyone with an interest in nature.",
        practicalInfo: {
        howToGetThere: "Located in the Alexandra Park suburb, a short taxi ride from the city center.",
        openingHours: "Daily, 8:00 AM to 6:00 PM.",
        cost: "A small entrance fee is charged.",
        website: "No official website."
      }
      },
        {
        name: "Kuimba Shiri Bird Park",
        description: "Located on the shores of Lake Chivero, about a 30-minute drive from Harare, Kuimba Shiri is the only bird park in Zimbabwe. The name means 'Singing Bird' in Shona, and it lives up to its name with a huge variety of indigenous and exotic birds. The park is particularly famous for its free-flying bird shows, where you can see majestic raptors like eagles and falcons in action.\n\nBeyond the bird shows, the park offers boat cruises on the lake, fishing, and game viewing in the surrounding recreational park. It's a great day trip for families and wildlife enthusiasts, combining education with entertainment in a beautiful lakeside setting.",
        practicalInfo: {
        howToGetThere: "Located on the shores of Lake Chivero. Best accessed with a hired car or taxi.",
        openingHours: "Daily, 8:30 AM to 5:00 PM. Bird shows are at set times, usually 11:00 AM and 4:00 PM.",
        cost: "Entrance fee of approx. $10-$15 USD, with additional costs for activities like boat cruises.",
        website: "https://kuimbashiri.co.zw/"
      }
      },
        {
        name: "Domboshawa Rocks",
        description: "Just outside Harare lies Domboshawa, a granite outcrop renowned for its stunning panoramic views and ancient San (Bushmen) rock art. The name means 'The Red Rock' in Shona, a fitting description for the vibrant lichen that covers its surface. A short but steep hike to the top rewards you with breathtaking vistas of the surrounding countryside, making it a spectacular spot for sunset.\n\nThe main draw, besides the view, is the well-preserved rock art gallery located in a sheltered cave. These paintings, some thousands of years old, depict scenes of hunting and daily life, offering a tangible connection to the region's earliest inhabitants. It's an excellent combination of light hiking, history, and natural beauty.",
        practicalInfo: {
        howToGetThere: "About 30 km north of Harare. A hired car or taxi is necessary.",
        openingHours: "Daily, 8:00 AM to 5:00 PM.",
        cost: "Entrance fee of around $10 USD for international visitors.",
        website: "Managed by National Museums and Monuments."
      }
      },
        {
        name: "Eastgate Centre",
        description: "While a shopping mall might seem like an unusual attraction, the Eastgate Centre is a must-see for anyone interested in architecture and sustainable design. Designed by architect Mick Pearce, the building is a pioneering example of biomimicry. Its ventilation system was inspired by the self-cooling mounds of African termites, using a fraction of the energy consumed by conventional air-conditioned buildings.\n\nThe complex has no heating or air-conditioning but remains temperate year-round through a system of natural convection. You can walk through the public atriums to observe the unique design features and appreciate this marvel of green architecture. It's a symbol of Zimbabwean innovation.",
        practicalInfo: {
        howToGetThere: "Located on Robert Mugabe Road in the city center. Easily accessible on foot.",
        openingHours: "Standard retail hours, typically 9:00 AM - 6:00 PM.",
        cost: "Free to enter and walk around.",
        website: "No official website."
      }
      },
        {
        name: "Avondale Flea Market",
        description: "For a more relaxed and curated market experience than Mbare, head to the Avondale Flea Market. Open on Sundays, this market is a favorite among both locals and expats. Here you'll find a wide variety of goods, including high-quality crafts, clothing from local designers, jewelry, books, and delicious street food.\n\nThe atmosphere is laid-back and friendly, making it a pleasant place to spend a Sunday morning browsing and shopping for unique souvenirs. It's smaller and easier to navigate than Mbare, offering a great selection of art and crafts without the overwhelming crowds.",
        practicalInfo: {
        howToGetThere: "Located at Avondale Shopping Centre. A short taxi ride from most northern suburbs.",
        openingHours: "Sundays, approximately 9:00 AM to 4:00 PM.",
        cost: "Free to enter.",
        website: "No official website."
      }
      },
        {
        name: "Patrick Mavros Art & Jewellery",
        description: "A visit to the Patrick Mavros studio is a journey into a world of luxury and exquisite craftsmanship. Set in a beautiful, sprawling estate in the Umwinsidale valley, this family-run business creates stunning sterling silver jewelry and sculptures inspired by the flora, fauna, and spirit of Africa. You can tour the workshop to see the artisans meticulously at work, from initial wax carving to the final polish.\n\nThe main house serves as a showroom, displaying the intricate collections of elephant-hair bangles, baobab-inspired candleholders, and crocodile-shaped letter openers. Even if you're not planning to buy, the serene setting and artistry on display make it a unique and memorable cultural experience.",
        practicalInfo: {
        howToGetThere: "Located in Umwinsidale, about a 30-minute drive from central Harare. A pre-booked taxi or hired car is essential.",
        openingHours: "Monday - Friday, 9:00 AM to 5:00 PM; Saturday, 9:00 AM to 1:00 PM. It's wise to call ahead.",
        cost: "Free to visit and tour the workshop.",
        website: "https://www.patrickmavros.com/"
      }
      },
        {
        name: "Lion and Cheetah Park",
        description: "Just a short drive from Harare, the Lion and Cheetah Park offers an easy and accessible wildlife experience. The main attraction is the drive-through lion enclosure, where you can see a large pride of lions roaming in a spacious, naturalistic habitat from the safety of your vehicle. The park is also home to cheetahs, leopards, and a variety of other animals, including zebras, elands, and nyalas in a separate game park area.\n\nWhile it operates more like a traditional safari park than a conservation-focused sanctuary like Wild Is Life, it's a popular and affordable option for families and those short on time. A highlight for many is the opportunity to see the park's resident 150-year-old giant tortoise. It provides a classic African wildlife fix close to the city.",
        practicalInfo: {
        howToGetThere: "Located along the main Harare-Bulawayo road, about 25 km from the city center. Best reached by car or taxi.",
        openingHours: "Daily, 8:30 AM to 5:00 PM.",
        cost: "Affordable entry fee, typically around $10-$15 USD per person.",
        website: "No official website. Information is best sourced locally."
      }
      }
      ]}
      logistics={{
        gettingAround: "For visitors, the most common and recommended way to get around Harare is by taxi. Use reputable, hotel-recommended companies or pre-book a driver for the day. Ride-hailing apps like Vaya are available but can be less reliable than in other cities. For safety and convenience, avoid public minibuses (known as 'kombis') unless you are with a local guide. The city is spread out, so walking is only practical within specific neighborhoods.",
        whereToStay: "The northern suburbs are the most popular and safest areas for tourists. \n- **Borrowdale**: An upscale area with luxury guesthouses, excellent restaurants, and the Sam Levy's Village shopping center.\n- **Avondale**: A vibrant suburb with a mix of hotels, guesthouses, a flea market, and good dining options.\n- **Hotel Recommendations**: Meikles Hotel (Luxury, city center icon), Bronte Hotel (Mid-range, beautiful gardens and multiple restaurants), York Lodge (Boutique Guesthouse, quiet and elegant).",
        bestTimeToVisit: "The best time to visit Harare is during the dry season, from April to October. This period offers mild, sunny days and cool, clear nights, perfect for exploring. The highlight of the year is from late September to October when the city's thousands of jacaranda trees burst into spectacular purple bloom, transforming the streets into floral tunnels. The wet season (November to March) can bring heavy afternoon thunderstorms.",
        suggestedItinerary: "A simple 3-day itinerary plan:\n- **Day 1: History & City Views**: Start at the National Heroes Acre for historical context. Head to the Kopje for panoramic city views. In the afternoon, explore the National Gallery of Zimbabwe and take a stroll through the adjacent Harare Gardens.\n- **Day 2: Wildlife Encounters**: Dedicate the afternoon to a pre-booked, unforgettable experience at Wild Is Life. Alternatively, take a day trip to the Lion and Cheetah Park and Lake Chivero for a more traditional safari feel.\n- **Day 3: Art & Markets**: Immerse yourself in the bustling energy of Mbare Musika in the morning (go with a guide). In the afternoon, visit the serene Chapungu Sculpture Park to see master stone carvers' work. If it's a Sunday, swap one for the Avondale Flea Market."
      }}
      faqs={[{
          question: "Is Harare expensive?",
          answer: "Harare can be both affordable and expensive. A dual-currency system exists (USD and Zimbabwean Dollar - ZWL). Tourist activities, tours, and high-end accommodation are almost always priced in USD and are comparable to mid-range international prices. Local transport, basic meals, and market goods can be very affordable if paid for in ZWL. It's best to carry a mix of USD in small denominations and some local currency."
        },
        {
          question: "How many days do you need in Harare?",
          answer: "Three to four days is an ideal amount of time to spend in Harare. This allows you to cover the main city sights, experience the culture at the markets and galleries, enjoy a premier wildlife encounter at Wild is Life, and even take a half-day trip to nearby attractions like the Balancing Rocks or Domboshawa without feeling rushed."
        },
        {
          question: "Is Harare safe?",
          answer: "Harare is generally considered safe for tourists, particularly in the northern suburbs where most hotels and attractions are located. However, like any major city, it requires vigilance. Standard safety precautions should be taken: avoid walking alone at night, especially in the city center; do not display valuables openly; keep car doors locked and windows up; and use trusted transportation. Be aware of your surroundings, and your visit should be trouble-free."
        },
        {
          question: "What is Harare famous for?",
          answer: "Harare is famous for several things. It's known as the 'Sunshine City' for its pleasant climate. It's renowned for its streets lined with jacaranda trees that bloom vibrantly in spring. Culturally, it is the global center for the Shona sculpture movement, an internationally acclaimed art form. It is also the political, economic, and cultural capital of Zimbabwe, housing important national monuments and institutions."
        }
      ]}
    />
  );
};