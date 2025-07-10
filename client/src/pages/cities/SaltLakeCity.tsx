import React from 'react';
import { CityPage } from '../../components/CityPage';

export const SaltLakeCity: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Salt Lake City, USA (2025 Guide)"}
      description={"Nestled between the dramatic Wasatch Mountains and the shores of a vast inland sea, Salt Lake City offers a unique blend of urban sophistication and outdoor adventure. Founded by pioneers in 1847, the city has evolved from a religious sanctuary into a bustling hub for tech, culture, and recreation. Known for its famously friendly locals and an impeccably clean downtown, SLC provides a launchpad for world-class skiing, hiking, and biking. But the city itself is a destination, boasting historic sites, innovative museums, and a burgeoning food scene. Whether you're here to trace your ancestry, carve fresh powder, or explore a city on the rise, you'll find an incredible array of activities. This guide will walk you through all the very best things to do in Salt Lake City for an unforgettable trip."}
      imageUrl={""}
      highlights={["Temple Square",
        "Great Salt Lake State Park",
        "Natural History Museum of Utah",
        "Utah State Capitol Building",
        "Park City & Utah Olympic Park"]}
      galleryImages={[
        { url: "", alt: "SaltLakeCity landmark 1", caption: "SaltLakeCity landmark 1 - placeholder" },
        { url: "", alt: "SaltLakeCity landmark 2", caption: "SaltLakeCity landmark 2 - placeholder" },
        { url: "", alt: "SaltLakeCity landmark 3", caption: "SaltLakeCity landmark 3 - placeholder" },
        { url: "", alt: "SaltLakeCity landmark 4", caption: "SaltLakeCity landmark 4 - placeholder" },
        { url: "", alt: "SaltLakeCity landmark 5", caption: "SaltLakeCity landmark 5 - placeholder" },
        { url: "", alt: "SaltLakeCity landmark 6", caption: "SaltLakeCity landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Temple Square",
        description: "The spiritual and historical heart of Salt Lake City, Temple Square is the global headquarters of The Church of Jesus Christ of Latter-day Saints. This beautifully landscaped 35-acre site is open to all visitors and features stunning architecture, including the iconic six-spired Salt Lake Temple and the acoustically perfect Tabernacle. While the Temple itself is not open to the general public, the grounds, visitor centers, and surrounding historic buildings offer a deep dive into the city's origins and the faith that shaped it.\n\nFree guided tours are available, offering insights into the history and beliefs of the Church. Don't miss the chance to hear the world-renowned Tabernacle Choir practice or perform. Even for those not religiously inclined, the sheer beauty of the gardens and the tranquility of the square make it a peaceful and essential stop on any SLC itinerary.",
        practicalInfo: {
        howToGetThere: "Located in the heart of downtown Salt Lake City at 50 N Temple. Easily accessible by foot, public transit (TRAX Blue and Green lines to Temple Square Station), or car.",
        openingHours: "Grounds are generally open daily from 5:00 AM to 11:00 PM. Visitor Center hours vary.",
        cost: "Free",
        website: "https://www.churchofjesuschrist.org/visit/temple-square"
      }
      },
        {
        name: "Great Salt Lake State Park",
        description: "Experience the natural wonder that gave the city its name. The Great Salt Lake is the largest saltwater lake in the Western Hemisphere, a remnant of the prehistoric Lake Bonneville. The water's high salinity makes for a unique ecosystem and allows visitors to float effortlessly on its surface, much like in the Dead Sea. The state park, located on the southern shore, offers panoramic views, a marina, and opportunities for sailing and wildlife viewing.\n\nThe lake's environment is surreal, with vast, reflective waters meeting stark, mountainous horizons. It's a particularly stunning spot for sunsets, as the fading light paints the sky and water in brilliant hues. Be sure to check water levels and conditions before planning a swim, as they can vary significantly.",
        practicalInfo: {
        howToGetThere: "About a 20-minute drive west of downtown SLC via I-80. A car is necessary for access. Located at 13312 W 1075 S, Magna, UT.",
        openingHours: "Park is open year-round, typically from sunrise to sunset. Visitor Center hours vary.",
        cost: "$5 per vehicle day-use fee.",
        website: "https://stateparks.utah.gov/parks/great-salt-lake/"
      }
      },
        {
        name: "Natural History Museum of Utah",
        description: "Architecturally stunning and intellectually engaging, the Natural History Museum of Utah is a must-visit. Nestled in the foothills of the Wasatch Mountains on the University of Utah campus, the museum's copper-clad building is a work of art in itself. Inside, you'll journey through billions of years of natural history, with a special focus on the Intermountain West.\n\nThe museum's crown jewel is the 'Past Worlds' exhibit, which features an incredible collection of dinosaur skeletons unearthed in Utah, including many species new to science. Other highlights include exhibits on Utah's native peoples, the science behind the Great Salt Lake, and the state's diverse ecosystems. The rooftop terrace offers breathtaking views of the Salt Lake Valley.",
        practicalInfo: {
        howToGetThere: "Located at 301 Wakara Way on the University of Utah campus. Accessible by car or by taking the UTA bus Route 3 or 17.",
        openingHours: "Open daily, 10:00 AM - 5:00 PM (open until 9:00 PM on Wednesdays).",
        cost: "Adults ~$20, with discounts for seniors, young adults, and children.",
        website: "https://nhmu.utah.edu/"
      }
      },
        {
        name: "Utah State Capitol Building",
        description: "Perched majestically on Capitol Hill overlooking the city, the Utah State Capitol is one of the nation's most beautiful government buildings. Constructed from Utah granite and Georgian marble, its impressive Corinthian architecture and grand dome are a sight to behold. Visitors are welcome to explore the building's opulent interior on their own or through a free guided tour.\n\nInside, you'll find magnificent murals depicting scenes from Utah's history, a grand rotunda, and chambers for the House, Senate, and Supreme Court. The surrounding grounds are beautifully maintained, making it a perfect spot for a stroll with panoramic views of the entire valley and the Oquirrh Mountains to the west.",
        practicalInfo: {
        howToGetThere: "Located at 350 N State St. It's a steep but walkable climb from downtown, or a short drive or bus ride.",
        openingHours: "Monday - Friday, 8:00 AM - 5:00 PM. Weekends and holidays 9:00 AM - 6:00 PM. Free historical tours available on the hour.",
        cost: "Free",
        website: "https://utahstatecapitol.utah.gov/"
      }
      },
        {
        name: "Park City & Utah Olympic Park",
        description: "Just a 40-minute drive from SLC, the historic mining town of Park City is a world-class destination in its own right. Home to two major ski resorts (Park City Mountain Resort and Deer Valley Resort) and the Sundance Film Festival, it offers year-round fun. Stroll down the charming Main Street, lined with Victorian buildings housing art galleries, boutiques, and high-end restaurants.\n\nA key attraction is the Utah Olympic Park, a legacy of the 2002 Winter Games. This active training facility allows visitors to watch future Olympians train in sports like ski jumping and bobsledding. In the summer, you can test your own mettle on the extreme zip line, alpine slide, or even a professionally-piloted bobsled ride on the concrete track.",
        practicalInfo: {
        howToGetThere: "A scenic 40-minute drive east on I-80. Public buses also connect SLC and Park City.",
        openingHours: "Town is always accessible. Utah Olympic Park hours vary by season and activity.",
        cost: "Free to walk around Park City and the Olympic Park. Activities and lift tickets are priced individually.",
        website: "https://utaholympiclegacy.org/park/"
      }
      },
        {
        name: "Red Butte Garden",
        description: "Part of the University of Utah, Red Butte Garden is the largest botanical garden in the Intermountain West. It showcases a stunning array of plants that thrive in the region's climate, spread across over 21 acres of display gardens and several miles of hiking trails that venture into the surrounding foothills. The gardens are themed, including a Fragrance Garden, Water Pavilion, and an impressive collection of roses and daffodils.\n\nThe garden is also one of Salt Lake's premier outdoor concert venues, hosting a popular series throughout the summer. It's a perfect place for a peaceful walk, a family picnic, or simply to enjoy nature's beauty with the city skyline as a backdrop.",
        practicalInfo: {
        howToGetThere: "Located at 300 Wakara Way, adjacent to the Natural History Museum of Utah. Accessible by car or bus.",
        openingHours: "Hours vary by season, but generally open daily from 9:00 AM - 5:00 PM (later in summer).",
        cost: "Adults ~$16, with discounts for seniors, children, and military.",
        website: "https://www.redbuttegarden.org/"
      }
      },
        {
        name: "This Is The Place Heritage Park",
        description: "Step back in time at This Is The Place Heritage Park, a living history museum that commemorates the arrival of the Mormon pioneers in 1847. The park is located at the mouth of Emigration Canyon, the very spot where Brigham Young is said to have declared, \"This is the right place.\" The park features a recreated 19th-century village with over 50 historic homes and structures.\n\nCostumed interpreters demonstrate pioneer life through crafts, trades, and daily chores. You can ride a train, pan for gold, and meet farm animals. The park also includes the impressive This is the Place Monument and a Native American Village, offering a broader look at the region's history.",
        practicalInfo: {
        howToGetThere: "Located at 2601 E Sunnyside Ave. Best reached by car.",
        openingHours: "Open daily, 10:00 AM - 5:00 PM. Closed Sundays in winter.",
        cost: "Adults ~$19, with discounts for seniors and children.",
        website: "https://www.thisistheplace.org/"
      }
      },
        {
        name: "The Tabernacle Choir at Temple Square",
        description: "Hearing the world-famous Tabernacle Choir is a quintessential Salt Lake City experience. This 360-member all-volunteer choir has been performing for over 150 years and is a cultural institution. Their weekly broadcast of 'Music & the Spoken Word' is the longest-running continuous network broadcast in the world.\n\nVisitors have a unique opportunity to see the choir for free. You can attend their live Sunday morning broadcasts or, for a more casual experience, sit in on their Thursday evening rehearsals. The performances, held in the historic Tabernacle or the larger Conference Center, are powerful and moving, regardless of your musical or religious background.",
        practicalInfo: {
        howToGetThere: "Performances and rehearsals are held at Temple Square in downtown SLC.",
        openingHours: "Rehearsals are typically Thursday evenings at 7:30 PM. 'Music & the Spoken Word' is broadcast live Sunday mornings at 9:30 AM (doors open at 8:30 AM).",
        cost: "Free",
        website: "https://www.thetabernaclechoir.org/public-performances/music-and-the-spoken-word.html"
      }
      },
        {
        name: "Gilgal Sculpture Garden",
        description: "One of Salt Lake City's most unique and hidden treasures, the Gilgal Sculpture Garden is a small park filled with eccentric and thought-provoking sculptures. Created by masonry contractor Thomas Battersby Child, Jr. over a 20-year period, the garden blends Mormon theology with Child's personal interpretations, resulting in some truly unusual artwork.\n\nThe most famous piece is a sphinx with the head of Joseph Smith, the founder of the Latter-day Saint movement. You'll also find a sculpture of the artist with his trousers made of rock. It's a quirky, fascinating, and quiet space that offers a glimpse into the mind of a singular artist.",
        practicalInfo: {
        howToGetThere: "Tucked away behind houses at 749 E 500 S. It's easy to miss, so look for the small sign.",
        openingHours: "Open daily, 8:00 AM - 8:00 PM (hours may be shorter in winter).",
        cost: "Free (donations welcome).",
        website: "http://gilgalgarden.org/"
      }
      },
        {
        name: "Liberty Park & Tracy Aviary",
        description: "Liberty Park is Salt Lake City's oldest and most prominent public park, a vast green oasis just south of downtown. Spanning 80 acres, it features a pond with paddle boats, playgrounds, tennis courts, a running path, and the Chase Home Museum of Utah Folk Arts. It's a favorite spot for locals to relax, exercise, and gather.\n\nLocated within Liberty Park is the Tracy Aviary, one of only two free-standing aviaries in the United States. Home to over 400 birds representing more than 135 species, the aviary offers immersive exhibits and interactive experiences, including bird shows and opportunities to feed the birds. It's a delightful attraction for all ages.",
        practicalInfo: {
        howToGetThere: "The park is located between 900 S and 1300 S, and 500 E and 700 E. Accessible by bus, car, or a long walk/bike ride from downtown.",
        openingHours: "Park is open daily, sunrise to 11:00 PM. Tracy Aviary is open daily, 9:00 AM - 5:00 PM.",
        cost: "Liberty Park is free. Tracy Aviary admission is ~$14 for adults.",
        website: "https://tracyaviary.org/"
      }
      },
        {
        name: "Snowbird and Alta Ski Resorts",
        description: "Utah is famous for 'The Greatest Snow on Earth®,' and Little Cottonwood Canyon is where you'll find its deepest and lightest powder. At the top of this canyon sit two legendary ski resorts: Snowbird and Alta. Snowbird is known for its challenging terrain, iconic aerial tram, and a season that often extends into late spring. It welcomes both skiers and snowboarders.\n\nAdjacent Alta is a purist's paradise, one of the few remaining resorts in the U.S. that is for skiers only. Its classic vibe and incredible snow make it a pilgrimage site for dedicated skiers. In the summer, both resorts transform into hubs for hiking, mountain biking, and scenic tram rides, with stunning wildflower displays in July and August.",
        practicalInfo: {
        howToGetThere: "Located in Little Cottonwood Canyon (UT-210), about a 45-minute drive from downtown SLC. A ski bus runs frequently during winter.",
        openingHours: "Ski season typically runs November - April. Summer operations run June - September.",
        cost: "Lift tickets are premium priced, typically over $150 per day.",
        website: "https://www.snowbird.com/ and https://www.alta.com/"
      }
      },
        {
        name: "City Creek Center",
        description: "More than just a shopping mall, City Creek Center is an architectural highlight of downtown. This upscale retail and dining destination is unique for its fully retractable glass roof, which opens on warm days, and a man-made creek that flows through the property, complete with live fish. The center spans two city blocks and is connected by a pedestrian skybridge over Main Street.\n\nWith over 100 stores and restaurants, it's the premier shopping destination in the city. The design seamlessly blends the indoor and outdoor experience, making it a pleasant place to stroll even if you're not shopping. Don't miss the fountain shows, which feature choreographed water, light, and fire displays.",
        practicalInfo: {
        howToGetThere: "Located at 50 S Main St, across from Temple Square in downtown SLC.",
        openingHours: "Monday - Saturday, 10:00 AM - 8:00 PM. Closed on Sundays.",
        cost: "Free to visit; shopping costs vary.",
        website: "https://shopcitycreekcenter.com/"
      }
      },
        {
        name: "Family History Library",
        description: "Operated by The Church of Jesus Christ of Latter-day Saints, the Family History Library is the largest genealogical library in the world. This incredible resource is open to the public for free and provides access to a vast collection of records from over 100 countries. Whether you're a seasoned genealogist or just curious about your roots, this is the place to start your research.\n\nFriendly staff and volunteers are on hand to help you navigate the databases and resources. The library has millions of microfilms, books, and digital records. It's a quiet, fascinating place that connects visitors to their personal past in a profound way.",
        practicalInfo: {
        howToGetThere: "Located at 35 N W Temple St, just west of Temple Square.",
        openingHours: "Monday - Saturday, 9:00 AM to 6:00 PM. Closed Sundays.",
        cost: "Free",
        website: "https://www.familysearch.org/en/library/"
      }
      },
        {
        name: "Big Cottonwood Canyon",
        description: "A stunning 15-mile scenic byway, Big Cottonwood Canyon offers some of the most accessible and spectacular mountain scenery in the U.S. Just a short drive from the city, the canyon is a year-round playground for outdoor enthusiasts. In the winter, it's home to two popular ski resorts, Solitude and Brighton. In the summer, it becomes a paradise for hikers, rock climbers, and fishermen.\n\nPopular hikes include the easy stroll around Silver Lake and the more challenging trek to Lake Blanche. The drive itself is beautiful, especially in the fall when the canyon walls are ablaze with autumn colors. It's the perfect escape from the city for a few hours or a full day of adventure.",
        practicalInfo: {
        howToGetThere: "The mouth of the canyon (UT-190) is about a 25-minute drive southeast of downtown. A car is recommended.",
        openingHours: "Always accessible, though road conditions can be restricted in winter (4WD/chains required).",
        cost: "Free to drive through and hike. Skiing requires lift tickets.",
        website: "https://www.visitsaltlake.com/things-to-do/tours-and-scenic-drives/scenic-byways/big-cottonwood-canyon-scenic-byway/"
      }
      },
        {
        name: "Clark Planetarium",
        description: "Explore the universe at the Clark Planetarium, located in The Gateway district downtown. This engaging science museum offers a variety of free exhibits covering topics like space exploration, meteorites, and Earth's changing climate. The interactive displays make it a fun and educational stop for families and anyone with a curious mind.\n\nThe planetarium's main attractions are its two theaters. The Hansen Dome Theatre presents traditional star shows and cosmic light shows with laser displays set to music. The IMAX Theatre shows stunning science and nature documentaries on a giant screen. It's an excellent way to spend a few hours, especially on a day with bad weather.",
        practicalInfo: {
        howToGetThere: "Located at 110 S 400 W in The Gateway outdoor mall. Accessible via TRAX (Planetarium Station).",
        openingHours: "Hours vary, but generally open daily from mid-morning to evening. Check website for showtimes.",
        cost: "Exhibits are free. Tickets for Dome and IMAX shows are ~$10 each.",
        website: "https://slco.org/clark-planetarium/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Downtown Salt Lake City is very walkable and built on a simple grid system. The UTA TRAX light rail system is efficient for travel between downtown, the university, the airport, and some suburbs. The bus system is extensive. To explore the nearby canyons, ski resorts, or the Great Salt Lake, renting a car is highly recommended. Ride-sharing services like Uber and Lyft are also widely available.",
        whereToStay: "For first-time visitors, Downtown is the most convenient area, with easy access to major attractions and dining. The Sugar House neighborhood offers a more local, trendy vibe with unique shops and restaurants. If you're here primarily for skiing, consider staying in a hotel or condo near the mouths of Big and Little Cottonwood Canyons or directly in Park City.",
        bestTimeToVisit: "Salt Lake City is a true four-season destination. Winter (December-March) is prime time for skiers and snowboarders, with abundant snowfall. Summer (June-August) is warm and sunny, perfect for hiking, festivals, and patio dining. Fall (September-October) brings beautiful foliage to the canyons and pleasant temperatures. Spring (April-May) offers a mix of sunny days and occasional storms, with blooming gardens and fewer crowds.",
        suggestedItinerary: "Day 1: Explore Downtown. Start at Temple Square, visit the Utah State Capitol, then shop and dine at City Creek Center. End the day at the Gilgal Sculpture Garden.\nDay 2: Museums and Nature. Spend the morning at the Natural History Museum of Utah and Red Butte Garden. In the afternoon, drive out to the Great Salt Lake State Park for sunset.\nDay 3: Mountain Adventure. Take a day trip to Park City. Explore historic Main Street, visit the Utah Olympic Park, and take a scenic chairlift ride for stunning views. Alternatively, go for a hike or scenic drive in Big Cottonwood Canyon."
      }}
      faqs={[{
          question: "Is Salt Lake City expensive?",
          answer: "Salt Lake City is generally more affordable than other major US cities like New York or San Francisco. Costs for dining and accommodation are reasonable. However, prices can increase significantly during peak ski season (December-March), especially for lodging near the resorts and for lift tickets, which are among the most expensive in the country."
        },
        {
          question: "How many days do you need in Salt Lake City?",
          answer: "A 3 to 4-day trip is ideal to get a good feel for Salt Lake City. This allows enough time to explore the main downtown sights, visit a museum or two, and spend a full day enjoying the outdoor recreation in the nearby mountains, such as hiking in the summer or skiing in the winter."
        },
        {
          question: "Is Salt Lake City safe?",
          answer: "Yes, Salt Lake City is generally a safe city for tourists. The downtown area and major attractions are well-maintained and heavily frequented. As with any city, it's wise to be aware of your surroundings, especially at night. Property crime, like car break-ins, can occur, so don't leave valuables in your vehicle. The mountainous areas are safe but require proper preparation and respect for weather and wildlife."
        },
        {
          question: "What is Salt Lake City famous for?",
          answer: "Salt Lake City is most famous for being the world headquarters of The Church of Jesus Christ of Latter-day Saints and its historic Temple Square. It is also globally renowned for its access to world-class ski resorts and the 'Greatest Snow on Earth®'. Additionally, it's known for the Great Salt Lake, the largest saltwater lake in the Western Hemisphere, and for successfully hosting the 2002 Winter Olympic Games."
        }
      ]}
    />
  );
};