import React from 'react';
import { CityPage } from '../../components/CityPage';

export const SanAntonio: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in San Antonio, USA (2025 Guide)"}
      description={"Welcome to San Antonio, a city where the spirit of Texas is infused with a rich tapestry of Spanish colonial history and vibrant Mexican culture. Nestled in the heart of the Lone Star State, this city is a feast for the senses. Its crown jewel, the romantic River Walk, winds through the downtown core, lined with cypress trees, bustling restaurants, and charming boutiques. Beyond the river, centuries-old missions stand as silent witnesses to its storied past, earning the city a UNESCO World Heritage designation. From the hallowed grounds of the Alamo to the bustling energy of Market Square, San Antonio offers a unique blend of history, art, and culinary delight. Whether you're a history buff, a foodie, or an adventurer, you'll find no shortage of incredible experiences. This guide will walk you through all the best things to do in San Antonio for an unforgettable trip."}
      highlights={["The Alamo",
        "San Antonio River Walk",
        "San Antonio Missions National Historical Park",
        "Historic Market Square (El Mercado)",
        "Pearl District"]}
      galleryImages={[
        { url: "", alt: "SanAntonio landmark 1", caption: "SanAntonio landmark 1 - placeholder" },
        { url: "", alt: "SanAntonio landmark 2", caption: "SanAntonio landmark 2 - placeholder" },
        { url: "", alt: "SanAntonio landmark 3", caption: "SanAntonio landmark 3 - placeholder" },
        { url: "", alt: "SanAntonio landmark 4", caption: "SanAntonio landmark 4 - placeholder" },
        { url: "", alt: "SanAntonio landmark 5", caption: "SanAntonio landmark 5 - placeholder" },
        { url: "", alt: "SanAntonio landmark 6", caption: "SanAntonio landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "The Alamo",
        description: "No trip to San Antonio is complete without visiting The Alamo. Originally known as Misión San Antonio de Valero, this former Spanish mission became the legendary site of the 1836 battle for Texan independence. Today, it stands as a hallowed shrine and a symbol of courage and sacrifice. Visitors can walk through the historic chapel and the Long Barrack Museum, which houses artifacts from the Texas Revolution and the mission's history.\n\nThe grounds are beautifully maintained with gardens and memorials, offering a peaceful space for reflection amidst the bustling downtown. Arrive early to avoid the crowds and take a guided tour to gain a deeper understanding of the events that transpired here. It's a poignant and essential stop for understanding the soul of Texas.",
        practicalInfo: {
        howToGetThere: "Located at 300 Alamo Plaza in downtown San Antonio, easily accessible on foot from most downtown hotels.",
        openingHours: "Daily 9:00 AM - 5:30 PM (Hours may vary seasonally).",
        cost: "Free general admission, but reservations are required. Specific tours and exhibits may have a fee.",
        website: "https://www.thealamo.org"
      }
      },
        {
        name: "San Antonio River Walk",
        description: "The San Antonio River Walk, or Paseo del Río, is the city's vibrant artery. This network of walkways along the banks of the San Antonio River is an oasis nestled below street level, lined with lush landscapes, stone bridges, and an endless array of restaurants, bars, and shops. It's a destination in itself, offering a completely different perspective of the city.\n\nTake a narrated river cruise to learn about the architecture and history, enjoy an alfresco dinner with twinkling lights overhead, or simply stroll along the paths to soak in the lively atmosphere. The River Walk connects major attractions like the Alamo, La Villita, and the San Antonio Museum of Art, making it both a beautiful and practical way to explore.",
        practicalInfo: {
        howToGetThere: "Accessible via multiple stairways and elevators from downtown streets. The main loop is in the heart of the city.",
        openingHours: "Open 24/7. Most businesses operate from late morning until late evening.",
        cost: "Free to walk. River cruises are approximately $14.50 for adults.",
        website: "https://www.thesanantonioriverwalk.com"
      }
      },
        {
        name: "San Antonio Missions National Historical Park",
        description: "Discover the roots of San Antonio at this UNESCO World Heritage Site, which preserves four of the five Spanish colonial missions. Stretching along the San Antonio River, the park includes Mission Concepción, Mission San José, Mission San Juan, and Mission Espada. These stunningly preserved churches and compounds offer a glimpse into 18th-century life, when they were centers of community, religion, and agriculture.\n\nMission San José, known as the 'Queen of the Missions,' is the largest and most fully restored. You can explore them via car or by renting a bike and riding the scenic Mission Reach hike-and-bike trail. Each mission has a unique character and story, collectively telling the tale of Spanish influence in the American Southwest.",
        practicalInfo: {
        howToGetThere: "The missions are located south of downtown along the Mission Trail. Driving or using the VIVA Mission bus route (40) is recommended.",
        openingHours: "Daily 9:00 AM - 5:00 PM. Grounds are generally open from sunrise to sunset.",
        cost: "Free admission.",
        website: "https://www.nps.gov/saan"
      }
      },
        {
        name: "Historic Market Square (El Mercado)",
        description: "Step into the vibrant heart of Mexican culture at Historic Market Square, the largest Mexican market in the United States. This three-block outdoor plaza is filled with shops, restaurants, and the lively sounds of mariachi music. The indoor 'El Mercado' building is a kaleidoscope of color, packed with stalls selling everything from handcrafted leather goods and pottery to festive decorations and traditional clothing.\n\nDon't miss the Farmer's Market Plaza, which features more local artisans and delicious food stalls. Grab a bite at Mi Tierra Café y Panadería, a landmark restaurant that's been serving Tex-Mex classics and sweet pastries 24/7 since 1941, decorated with an explosion of festive lights and murals.",
        practicalInfo: {
        howToGetThere: "Located at 514 W Commerce St, a short walk or trolley ride west of the downtown core.",
        openingHours: "Daily 10:00 AM - 6:00 PM (some restaurants have longer hours).",
        cost: "Free to enter.",
        website: "https://www.marketsquaresa.com"
      }
      },
        {
        name: "Pearl District",
        description: "Once home to the historic Pearl Brewery, this 22-acre site has been transformed into one of San Antonio's trendiest and most dynamic neighborhoods. The Pearl District is a culinary and cultural hub, featuring more than a dozen independent restaurants, chic boutiques, and a year-round farmers market. The architecture beautifully blends historic industrial buildings with modern design.\n\nFoodies will be in heaven here, with options ranging from upscale dining at the acclaimed Hotel Emma to casual food stalls at the Bottling Department Food Hall. The area also boasts a campus of the Culinary Institute of America. It's a perfect place to spend an afternoon shopping, dining, and enjoying the beautifully landscaped grounds along a quieter stretch of the River Walk.",
        practicalInfo: {
        howToGetThere: "Located just north of downtown at 312 Pearl Pkwy. Accessible by car, ride-share, or the river taxi.",
        openingHours: "Varies by business. Shops typically open mid-morning, restaurants open for lunch and dinner.",
        cost: "Free to explore. Pay for shopping and dining.",
        website: "https://www.atpearl.com"
      }
      },
        {
        name: "Natural Bridge Caverns",
        description: "Journey deep into the earth at Natural Bridge Caverns, Texas's largest and most spectacular show caves. Named for the 60-foot natural limestone slab bridge that spans the cavern's entrance, this underground wonderland is filled with awe-inspiring formations. Guided tours take you through vast chambers adorned with delicate soda straws, massive stalagmites, and shimmering flowstones.\n\nAbove ground, the adventure continues with a ropes course, zip lines, a gem and fossil mining sluice, and a maze. The Discovery Tour is the most popular, but the Hidden Passages Tour offers a look at more delicate and rare formations. It's a fantastic day trip for families and anyone fascinated by geology and natural wonders.",
        practicalInfo: {
        howToGetThere: "Located at 26495 Natural Bridge Caverns Rd, about a 30-minute drive north of downtown San Antonio.",
        openingHours: "Hours vary seasonally, typically from 9:00 AM - 5:00 PM. Check the website for current tour times.",
        cost: "Tour prices start around $32 for adults.",
        website: "https://naturalbridgecaverns.com"
      }
      },
        {
        name: "San Antonio Museum of Art (SAMA)",
        description: "Housed in the historic former Lone Star Brewery complex, the San Antonio Museum of Art (SAMA) boasts an impressive and diverse collection spanning 5,000 years of global culture. The museum is particularly renowned for having the most comprehensive collection of ancient Greek, Roman, and Egyptian art in the southern United States.\n\nIts Latin American art wing is another major highlight, featuring folk art alongside contemporary masterpieces. The collection also includes significant works from Asia and a growing collection of modern and contemporary art. The museum's beautiful setting along the River Walk makes it a pleasure to visit, with a waterfront cafe for relaxing after your tour.",
        practicalInfo: {
        howToGetThere: "Located at 200 West Jones Avenue, on the Museum Reach section of the River Walk.",
        openingHours: "Tue & Fri 10am-7pm; Wed, Thu, Sat, Sun 10am-5pm; Closed Mondays.",
        cost: "$20 for adults. Bexar County residents get free admission on certain days/times.",
        website: "https://www.samuseum.org"
      }
      },
        {
        name: "Japanese Tea Garden",
        description: "Find a moment of tranquility at the Japanese Tea Garden, a serene oasis located in Brackenridge Park. What was once a rock quarry has been transformed into a stunning landscape of lush gardens, stone archways, a picturesque waterfall, and winding paths. Koi-filled ponds reflect the vibrant foliage and the iconic Jingu House Cafe overlooks the gardens.\n\nThe garden's history is as compelling as its beauty, having been built by local prison labor in the early 20th century. It’s a photographer's dream and a perfect spot for a peaceful stroll. Entry is free, making it one of the city's best and most beautiful bargains.",
        practicalInfo: {
        howToGetThere: "Located at 3853 N St Mary's St within Brackenridge Park, a short drive from downtown.",
        openingHours: "Daily from sunrise to sunset (7:00 AM - 5:00 PM).",
        cost: "Free admission.",
        website: "https://saparksfoundation.org/japanese-tea-garden/"
      }
      },
        {
        name: "The Witte Museum",
        description: "Where nature, science, and culture meet, the Witte Museum is a must-visit for families and curious minds. Located on the banks of the San Antonio River, the museum focuses on the natural history, science, and South Texas heritage. Exhibits include massive dinosaur skeletons, interactive science displays in the H-E-B Body Adventure, and fascinating galleries dedicated to Texas history and wildlife.\n\nThe Robert J. and Helen C. Kleberg South Texas Heritage Center provides an immersive look into the lives of cowboys, ranchers, and oilmen who shaped the region. The museum's blend of indoor and outdoor exhibits makes for a dynamic and engaging experience.",
        practicalInfo: {
        howToGetThere: "Located at 3801 Broadway in Brackenridge Park.",
        openingHours: "Mon, Wed-Sat 10am-5pm; Tue 10am-6pm; Sun 12pm-5pm.",
        cost: "Approximately $16 for adults. Free general admission on Tuesdays from 3-6 PM.",
        website: "https://www.wittemuseum.org"
      }
      },
        {
        name: "Tower of the Americas",
        description: "For the best panoramic views of the Alamo City, head to the top of the 750-foot-tall Tower of the Americas. Built for the 1968 World's Fair, the tower's observation deck offers a breathtaking 360-degree perspective of the city skyline and the surrounding landscape. Informative panels help identify key landmarks below.\n\nFor a unique dining experience, make a reservation at the revolving Chart House Restaurant at the top. The tower also features a 4D theater ride called 'Skies Over Texas' that takes you on a virtual flight over the Lone Star State. It's especially beautiful at sunset as the city lights begin to twinkle on.",
        practicalInfo: {
        howToGetThere: "Located in Hemisfair Park at 739 E César E. Chávez Blvd, a short walk from the convention center and River Walk.",
        openingHours: "Sun-Thu 11am-10pm; Fri-Sat 11am-11pm.",
        cost: "Approximately $18.50 for adults to access the observation deck and 4D theater.",
        website: "https://www.toweroftheamericas.com"
      }
      },
        {
        name: "La Villita Historic Arts Village",
        description: "Meaning 'little village' in Spanish, La Villita was one of San Antonio's first neighborhoods. Today, this charming historic district on the south bank of the River Walk is a thriving arts community. Its quaint stone-paved streets are lined with historic adobe and Victorian buildings that now house art galleries, artisan studios, and unique gift shops.\n\nYou can watch artists at work, from glassblowers to painters, and purchase one-of-a-kind souvenirs. The village is a beautiful and peaceful place to wander, offering a glimpse into the city's layered past. It also hosts many cultural events and festivals throughout the year.",
        practicalInfo: {
        howToGetThere: "Located at 418 Villita St, directly accessible from the River Walk and South Alamo Street.",
        openingHours: "Shops are generally open daily from 10:00 AM - 6:00 PM, with some variations.",
        cost: "Free to explore.",
        website: "https://www.lavillitasanantonio.com"
      }
      },
        {
        name: "Majestic Theatre",
        description: "Step into a world of opulent beauty at the Majestic Theatre, a National Historic Landmark and one of the most ornate theaters in the United States. Opened in 1929, its stunning Spanish Mediterranean architecture, intricate detailing, and a 'sky' ceiling complete with twinkling stars and floating clouds create a magical atmosphere before the show even begins.\n\nThe Majestic hosts a variety of performances, including Broadway Across America tours, top-tier concerts, and comedians. Even if you don't catch a show, consider taking a guided tour to fully appreciate the breathtaking architecture and learn about its history. It's a true San Antonio treasure.",
        practicalInfo: {
        howToGetThere: "Located at 224 E Houston St in the downtown Theater District.",
        openingHours: "Box office hours vary. Tours are offered on select days.",
        cost: "Varies by performance. Tours are approximately $15.",
        website: "https://www.majesticempire.com"
      }
      },
        {
        name: "San Fernando Cathedral",
        description: "Founded in 1731, San Fernando Cathedral is the oldest continuously functioning religious community in Texas. This beautiful cathedral serves as the heart of Catholic life in San Antonio and is a place of deep historical significance, as the final resting place for some of the Alamo's defenders. The Gothic Revival structure is stunning both inside and out.\n\nAfter dark, the cathedral becomes a canvas for a spectacular video art installation called 'The Saga.' Created by French artist Xavier de Richemont, the 24-minute show projects a visual history of San Antonio onto the cathedral's facade. It's a free and mesmerizing experience that beautifully blends history with modern art.",
        practicalInfo: {
        howToGetThere: "Located in the Main Plaza at 115 Main Plaza, a few blocks west of the River Walk.",
        openingHours: "Open daily for visitors and mass. 'The Saga' light show runs on select evenings (Tue, Fri, Sat, Sun) at 9:00 PM and 9:30 PM.",
        cost: "Free admission. Donations are welcome.",
        website: "https://sfcathedral.org"
      }
      },
        {
        name: "Brackenridge Park",
        description: "A sprawling 343-acre public park that serves as a green lung for the city, Brackenridge Park is home to several of San Antonio's top attractions, including the San Antonio Zoo, the Witte Museum, and the Japanese Tea Garden. The park itself is a destination, with the San Antonio River winding through it, offering space for picnics, playgrounds, and leisurely walks.\n\nYou can rent paddle boats, ride the miniature train that circles the park, or enjoy a round of golf at the historic Brackenridge Park Golf Course. It's the perfect place to escape the urban hustle and enjoy a day outdoors without leaving the city.",
        practicalInfo: {
        howToGetThere: "Located at 3700 N St Mary's St, just north of downtown.",
        openingHours: "Daily 5:00 AM - 11:00 PM.",
        cost: "Free to enter the park. Individual attractions have their own admission fees.",
        website: "https://www.brackenridgepark.org"
      }
      },
        {
        name: "Six Flags Fiesta Texas",
        description: "For thrill-seekers and families looking for high-energy fun, Six Flags Fiesta Texas delivers. Set in a former rock quarry, the park's unique setting provides a stunning backdrop for its world-class roller coasters and attractions. Feel the rush on coasters like the Iron Rattler or Dr. Diabolical's Cliffhanger, the world's steepest dive coaster.\n\nThe park is divided into themed sections, including a massive water park (White Water Bay) to cool off during the hot Texas summers. With a full lineup of shows, character meet-and-greets, and seasonal events like Fright Fest and Holiday in the Park, it offers a full day of entertainment for all ages.",
        practicalInfo: {
        howToGetThere: "Located at 17000 IH-10 West, on the northwest side of San Antonio.",
        openingHours: "Hours vary significantly by season. Open daily in summer, weekends-only in spring and fall. Check the website for the exact schedule.",
        cost: "Single-day tickets start around $45-$50 when purchased online in advance.",
        website: "https://www.sixflags.com/fiestatexas"
      }
      }
      ]}
      logistics={{
        gettingAround: "Downtown San Antonio is very walkable, with major attractions like the Alamo, River Walk, and La Villita in close proximity. The VIA Metropolitan Transit offers bus services, including the VIVA routes which connect popular tourist sites. Ride-sharing services like Uber and Lyft are widely available. For a unique experience, use the Go Rio River Shuttles (river taxis) to navigate between points along the Museum and Downtown Reaches of the River Walk.",
        whereToStay: "For first-time visitors, staying in the Downtown / River Walk area is ideal for convenience. Hotels like the Mokara Hotel & Spa or the Hyatt Regency offer direct River Walk access. The Pearl District provides a trendier, upscale experience with the celebrated Hotel Emma at its center. For a boutique, artsy vibe, look for hotels in the Southtown Arts District, such as Hotel Havana.",
        bestTimeToVisit: "The best times to visit San Antonio are spring (March to May) and fall (September to November). The weather during these months is pleasant and mild, perfect for exploring the outdoor attractions. The summer (June to August) is very hot and humid. Winter is mild, and the holiday season is magical, with the River Walk adorned with millions of twinkling lights.",
        suggestedItinerary: "A simple 3-day itinerary: \nDay 1: Immerse yourself in history. Start at The Alamo (book a free ticket in advance), then explore the San Antonio Missions National Historical Park via the Mission Trail. In the evening, watch 'The Saga' light show at San Fernando Cathedral.\nDay 2: Experience city culture. Take a Go Rio cruise on the River Walk, explore the shops in La Villita Historic Arts Village and Historic Market Square. Spend the late afternoon and evening dining and exploring the trendy Pearl District.\nDay 3: Enjoy art and nature. Spend the morning at Brackenridge Park, visiting the serene Japanese Tea Garden. Then, choose between the vast collections at the San Antonio Museum of Art or the engaging exhibits at the Witte Museum."
      }}
      faqs={[{
          question: "Is San Antonio expensive?",
          answer: "San Antonio is generally considered more affordable than other major U.S. cities. While you can find luxury hotels and fine dining, there are plentiful budget-friendly options. Many key attractions, like the Alamo and the Missions, are free. Food costs can be low, especially if you enjoy the delicious and inexpensive Tex-Mex food from local taquerias. Transportation is also reasonable, with a very walkable downtown core."
        },
        {
          question: "How many days do you need in San Antonio?",
          answer: "A trip of 3 to 4 days is ideal to experience the main highlights of San Antonio without feeling rushed. This allows enough time to explore the Alamo and the Missions, enjoy the River Walk, visit a museum or two, and soak in the atmosphere of Market Square and the Pearl District. If you plan to visit theme parks like Six Flags or take day trips, consider extending your stay to 5 days."
        },
        {
          question: "Is San Antonio safe?",
          answer: "San Antonio is a generally safe city for tourists, especially in the well-patrolled downtown and River Walk areas. As with any large city, it's wise to practice standard safety precautions. Be aware of your surroundings, especially at night, stick to well-lit areas, and keep your valuables secure. The main tourist zones are accustomed to large crowds and have a visible security presence."
        },
        {
          question: "What is San Antonio famous for?",
          answer: "San Antonio is most famous for being the home of The Alamo, the iconic symbol of Texan independence. It's also renowned for its beautiful and lively River Walk (Paseo del Río). The city holds a prestigious UNESCO World Heritage designation for its five 18th-century Spanish colonial missions. Culturally, it's celebrated for its unique Tex-Mex cuisine and vibrant Mexican-American culture, best experienced at the Historic Market Square."
        }
      ]}
    />
  );
};