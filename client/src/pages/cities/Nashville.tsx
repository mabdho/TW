import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Nashville: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Nashville, USA (2025 Guide)"}
      description={"Welcome to Nashville, the undisputed 'Music City' of the USA! This vibrant Tennessee capital pulses with the energy of live music pouring from every honky-tonk, the rich history of country music legends, and a burgeoning culinary scene that goes far beyond its famous hot chicken. From the hallowed halls of the Grand Ole Opry to the creative buzz of East Nashville's boutiques, the city offers a unique blend of down-home Southern charm and contemporary cool. Whether you're here to trace the footsteps of Johnny Cash, discover emerging artists, or simply soak in the electric atmosphere of Lower Broadway, you'll find no shortage of excitement. This guide will walk you through all the very best things to do in Nashville, ensuring your trip is as unforgettable as the city's iconic soundtrack. So, grab your boots and get ready to explore!"}
      highlights={["Grand Ole Opry",
        "Ryman Auditorium",
        "Country Music Hall of Fame and Museum",
        "Honky Tonk Highway (Lower Broadway)",
        "The Parthenon"]}
      galleryImages={[
        { url: "", alt: "Nashville landmark 1", caption: "Nashville landmark 1 - placeholder" },
        { url: "", alt: "Nashville landmark 2", caption: "Nashville landmark 2 - placeholder" },
        { url: "", alt: "Nashville landmark 3", caption: "Nashville landmark 3 - placeholder" },
        { url: "", alt: "Nashville landmark 4", caption: "Nashville landmark 4 - placeholder" },
        { url: "", alt: "Nashville landmark 5", caption: "Nashville landmark 5 - placeholder" },
        { url: "", alt: "Nashville landmark 6", caption: "Nashville landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Grand Ole Opry",
        description: "Known as the show that made country music famous, the Grand Ole Opry is an absolute institution. This live radio show has been running since 1925, and seeing a performance here is a quintessential Nashville experience. The show features a dynamic lineup of new stars, superstars, and legends of country music in a fast-paced, variety-style format. Each artist performs a few songs before the next one takes the stage.\n\nEven if you can't catch a show, the daytime backstage tours are a must. You'll get to walk in the footsteps of countless music legends, see the artist entrance, explore the dressing rooms, and even stand in the famous six-foot circle of wood taken from the Ryman stage. It’s an immersive look into the heart of country music history.",
        practicalInfo: {
        howToGetThere: "Located at 2804 Opryland Dr, next to the Opry Mills mall. Best reached by car or rideshare. Ample parking is available.",
        openingHours: "Showtimes are typically in the evening. Daytime tours run daily, usually from 9:30 AM to 4:00 PM. Check the schedule online as times vary.",
        cost: "Show tickets range from $45-$150+. Backstage tours are around $40-$50.",
        website: "https://www.opry.com"
      }
      },
        {
        name: "Ryman Auditorium",
        description: "Often called the 'Mother Church of Country Music,' the Ryman Auditorium is arguably the most famous music venue in Nashville. Originally built as a tabernacle in 1892, its unparalleled acoustics made it the perfect home for the Grand Ole Opry from 1943 to 1974. The history within these walls is palpable, with ghosts of performances by everyone from Hank Williams and Patsy Cline to Johnny Cash and Elvis Presley.\n\nTake a self-guided or guided tour during the day to learn about its incredible history and see memorabilia. Stand on the legendary stage where so many icons have performed. If you have the chance, seeing a concert here is an unforgettable, almost spiritual experience due to the intimate setting and flawless sound.",
        practicalInfo: {
        howToGetThere: "116 5th Ave N, in the heart of downtown Nashville, an easy walk from most downtown hotels.",
        openingHours: "Daily tours from 9:00 AM to 4:00 PM. Concerts are held in the evenings.",
        cost: "Self-guided tours are around $30; guided backstage tours are around $40. Concert ticket prices vary widely.",
        website: "https://www.ryman.com"
      }
      },
        {
        name: "Country Music Hall of Fame and Museum",
        description: "Considered the 'Smithsonian of country music,' this massive museum is an essential stop for any music fan. Its collection documents the history of the genre with an incredible array of artifacts, from Elvis Presley's 'Solid Gold' Cadillac to Taylor Swift's tour costumes. The exhibits are beautifully curated, tracing country music's evolution from its folk roots to the global phenomenon it is today.\n\nYou can easily spend half a day exploring the two floors of exhibits, which include interactive displays, rare performance footage, and handwritten lyrics. The Rotunda, where the plaques of Hall of Fame inductees are displayed, is a particularly reverent space. It's a comprehensive and engaging journey through American music history.",
        practicalInfo: {
        howToGetThere: "222 Rep. John Lewis Way S, in the SoBro (South of Broadway) district of downtown. Easily walkable from many hotels.",
        openingHours: "Open daily from 9:00 AM to 5:00 PM.",
        cost: "General admission is around $30. Packages including RCA Studio B or Hatch Show Print tours are available for an additional cost.",
        website: "https://www.countrymusichalloffame.org"
      }
      },
        {
        name: "Honky Tonk Highway (Lower Broadway)",
        description: "This is the beating heart of Nashville's nightlife. Lower Broadway, affectionately known as the Honky Tonk Highway, is a vibrant strip of bars and music venues that blast live music from 10 AM until the early morning hours, 365 days a year. There's no cover charge at most places, so you can hop from one bar to the next, discovering incredible musicians playing for tips and a chance to be discovered.\n\nFamous spots like Tootsie's Orchid Lounge, The Bluebird Cafe (off-Broadway), and Legends Corner are institutions, but newer, artist-owned venues like Ole Red (Blake Shelton) and AJ's Good Time Bar (Alan Jackson) are also immensely popular. It's loud, crowded, and energetic – an experience you can only get in Music City.",
        practicalInfo: {
        howToGetThere: "Located on Lower Broadway between 1st and 5th Avenues in downtown Nashville.",
        openingHours: "Most venues open mid-morning (around 10:00 AM) and close around 3:00 AM.",
        cost: "Free entry to most bars; you pay for drinks. Musicians play for tips.",
        website: "https://www.visitmusiccity.com/things-to-do/honky-tonks"
      }
      },
        {
        name: "The Parthenon",
        description: "A full-scale replica of the ancient Parthenon in Athens, Greece, might be the last thing you'd expect to find in Tennessee, but Nashville's Parthenon is a stunning and iconic landmark. It was originally built as a temporary structure for Tennessee's 1897 Centennial Exposition but was so beloved that it was rebuilt as a permanent structure.\n\nLocated in the beautiful Centennial Park, it's a magnificent sight to behold from the outside. Inside, it functions as an art museum and features a colossal, 42-foot-tall statue of the goddess Athena, gilded with real gold leaf. It's a surreal and impressive attraction that offers a dose of classical history in the heart of Music City.",
        practicalInfo: {
        howToGetThere: "Located in Centennial Park at 2500 West End Ave. Accessible via bus, car, or a long walk/short rideshare from downtown.",
        openingHours: "Tuesday-Saturday 9:00 AM - 4:30 PM, Sunday 12:30 PM - 4:30 PM. Closed Mondays.",
        cost: "Around $10 for adults to enter the museum. The park and exterior view are free.",
        website: "https://www.nashvilleparthenon.com"
      }
      },
        {
        name: "Johnny Cash Museum",
        description: "Dedicated to the life and career of the 'Man in Black,' this museum is a must-see for fans of Johnny Cash and American music in general. Endorsed by the Cash estate, it houses the world's largest and most comprehensive collection of artifacts and memorabilia related to the music icon. The exhibits trace his life from his early years in Arkansas, his time at Sun Records, his legendary Folsom Prison concert, and his late-career resurgence.\n\nThrough interactive exhibits, personal letters, stage costumes, and instruments, the museum paints a vivid picture of a complex and brilliant artist. It's an incredibly well-curated and moving tribute that goes beyond the music to explore the man behind the legend.",
        practicalInfo: {
        howToGetThere: "119 3rd Ave S, just off Lower Broadway in downtown Nashville.",
        openingHours: "Open daily from 9:00 AM to 7:00 PM.",
        cost: "Around $25 for adult admission.",
        website: "https://www.johnnycashmuseum.com"
      }
      },
        {
        name: "National Museum of African American Music (NMAAM)",
        description: "This state-of-the-art museum is one of Nashville's newest and most important cultural institutions. Located in the heart of downtown, NMAAM is the only museum dedicated to preserving and celebrating the many music genres created, influenced, and inspired by African Americans. It tells the story of how a single stream of music, rooted in spirituals and blues, branched out to create genres like jazz, gospel, R&B, and hip-hop.\n\nThe museum is highly interactive, allowing visitors to produce a blues song, sing with a gospel choir, and curate their own playlists. It’s an educational and incredibly fun experience that highlights the profound impact of Black artists on over 50 music styles, providing crucial context to the American soundscape.",
        practicalInfo: {
        howToGetThere: "510 Broadway, at the Assembly Food Hall complex in downtown Nashville.",
        openingHours: "Tuesday-Saturday 10:00 AM - 5:00 PM. Closed Mondays.",
        cost: "Around $25 for adults.",
        website: "https://www.nmaam.org"
      }
      },
        {
        name: "Belle Meade Historic Site & Winery",
        description: "Step back in time at Belle Meade, a stunning 19th-century Greek Revival mansion that was once the centerpiece of a world-renowned thoroughbred horse farm. Known as the 'Queen of the Tennessee Plantations,' a visit here offers a glimpse into the opulent and complex history of the Old South. Guided tours, led by costumed interpreters, detail the stories of the Harding and Jackson families who owned the estate, as well as the enslaved individuals whose labor built and sustained it.\n\nAfter the mansion tour, your ticket includes a complimentary wine tasting at the on-site winery. Belle Meade was one of the first licensed wineries in Tennessee, and tasting their Southern-style fruit wines is a perfect way to conclude your visit. The expansive grounds are beautiful to walk around, making for a peaceful escape from the city.",
        practicalInfo: {
        howToGetThere: "5025 Harding Pike. It's about a 15-20 minute drive southwest of downtown Nashville. A car or rideshare is necessary.",
        openingHours: "Open daily from 9:00 AM to 5:00 PM.",
        cost: "Mansion tours are around $28 (includes wine tasting). Grounds-only passes are cheaper.",
        website: "https://visitbellemeade.com"
      }
      },
        {
        name: "Andrew Jackson's Hermitage",
        description: "The Hermitage was the home of Andrew Jackson, the seventh President of the United States. This National Historic Landmark is one of the most accurately preserved early presidential homes in the country. A visit offers a deep dive into the life of one of America's most controversial and consequential figures. You can tour the beautiful mansion, which is still furnished with many of Jackson's original belongings.\n\nThe grounds are vast and include historic gardens, original log cabins, and Jackson's tomb. The museum does an excellent job of presenting not only Jackson's political career but also the lives of the hundreds of enslaved men, women, and children who lived and worked on the plantation, providing a more complete and honest historical narrative.",
        practicalInfo: {
        howToGetThere: "4580 Rachel's Lane in Hermitage, TN, about a 20-30 minute drive east of downtown Nashville.",
        openingHours: "Open daily from 9:00 AM to 5:00 PM (hours can vary seasonally).",
        cost: "Grounds passes start around $20; mansion tours are around $26.",
        website: "https://thehermitage.com"
      }
      },
        {
        name: "Historic RCA Studio B",
        description: "Step into the recording studio where legends were made. RCA Studio B is one of the most famous studios in the world, the birthplace of the 'Nashville Sound' in the late 1950s and 60s. Over 35,000 songs were recorded here, including more than 1,000 American hits by artists like Elvis Presley ('Are You Lonesome Tonight?'), Dolly Parton ('Jolene'), and Waylon Jennings.\n\nTours are operated exclusively through the Country Music Hall of Fame and Museum. You'll board a bus from the museum and be taken to Music Row for a guided tour of the studio. Standing in the same spot where Elvis recorded countless hits and hearing the stories behind the songs is a magical experience for any music lover.",
        practicalInfo: {
        howToGetThere: "Tours depart exclusively from the Country Music Hall of Fame and Museum via a shuttle bus.",
        openingHours: "Tours run daily, typically every hour from 10:00 AM to 3:00 PM.",
        cost: "Around $50, which includes admission to the Country Music Hall of Fame and Museum.",
        website: "https://studiob.org"
      }
      },
        {
        name: "John Seigenthaler Pedestrian Bridge",
        description: "For the best skyline view of Nashville, take a stroll across the John Seigenthaler Pedestrian Bridge. This iconic truss bridge was originally built in 1909 for vehicle traffic but was converted for pedestrian use in 1998. It spans the Cumberland River, connecting downtown Nashville with the residential neighborhoods of East Nashville.\n\nThe bridge is a popular spot for photos, exercise, and simply taking in the cityscape. The view is spectacular at any time of day, but it's particularly breathtaking at sunset and at night when the downtown buildings are all lit up. It's a free and simple way to get a fantastic perspective on the city.",
        practicalInfo: {
        howToGetThere: "Accessible from 3rd Ave S downtown or S 1st St in East Nashville.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "The Gulch",
        description: "The Gulch is one of Nashville's trendiest and most upscale neighborhoods. A formerly abandoned industrial area, it has been transformed into a vibrant, LEED-certified community filled with chic boutiques, contemporary restaurants, and lively bars. It's a great place to wander, shop, and grab a high-quality meal or craft cocktail.\n\nOne of the neighborhood's most famous landmarks is the 'What Lifts You' wings mural by Kelsey Montague, a must-have photo for any visitor. The Gulch also hosts a vibrant nightlife scene that's a bit more polished than the honky-tonks on Broadway, offering rooftop bars and sophisticated lounges. It's the perfect showcase of Nashville's modern, cosmopolitan side.",
        practicalInfo: {
        howToGetThere: "Located just south of downtown Nashville. It's about a 15-20 minute walk from Broadway or a very short rideshare.",
        openingHours: "Shops and restaurants have individual hours, generally 10:00 AM to 9:00 PM.",
        cost: "Free to walk around; shopping and dining costs vary.",
        website: "https://www.explorethegulch.com"
      }
      },
        {
        name: "12 South Neighborhood",
        description: "For a more relaxed, local vibe, head to the 12 South neighborhood. This half-mile stretch of 12th Avenue South is packed with charming local boutiques, vintage shops, excellent coffee houses, and some of the city's best eateries. It's an incredibly walkable area perfect for an afternoon of browsing and people-watching.\n\nHere you'll find Draper James, Reese Witherspoon's flagship store, alongside local favorites like White's Mercantile. It's also home to several of Nashville's iconic murals, including the 'I Believe in Nashville' sign. Grab a gourmet donut at Five Daughters Bakery or a coffee at Frothy Monkey and enjoy the neighborhood's laid-back atmosphere.",
        practicalInfo: {
        howToGetThere: "Located on 12th Avenue South, a few miles south of downtown. Best reached by car or rideshare.",
        openingHours: "Shops are typically open from 10:00 AM to 6:00 PM.",
        cost: "Free to explore.",
        website: "N/A"
      }
      },
        {
        name: "Cheekwood Estate & Gardens",
        description: "Escape the city's hustle and bustle at Cheekwood, a magnificent 55-acre estate featuring a historic mansion, stunning botanical gardens, and an impressive art collection. The Georgian-style mansion, built by the Cheek family of Maxwell House Coffee fame, now serves as a museum displaying American and contemporary art.\n\nThe real star, however, is the grounds. You can wander through a variety of distinct gardens, including a Japanese garden, a wildflower garden, and a formal boxwood garden. Cheekwood also hosts seasonal events like 'Cheekwood in Bloom' in the spring and incredible holiday light displays in the winter. It’s a beautiful and tranquil retreat for art and nature lovers.",
        practicalInfo: {
        howToGetThere: "1200 Forrest Park Dr. Located about 8 miles southwest of downtown, requiring a car or rideshare.",
        openingHours: "Tuesday-Sunday 9:00 AM - 5:00 PM. Closed Mondays. Evening hours during special events.",
        cost: "Around $20-$25 for adults (gardens and mansion). Timed-entry tickets are required.",
        website: "https://cheekwood.org"
      }
      },
        {
        name: "Radnor Lake State Park",
        description: "For those seeking a true natural oasis, Radnor Lake State Park offers serene hiking trails just a short drive from the city. This 1,368-acre park is a protected Class II Natural Area, meaning its primary purpose is wildlife observation and preservation. The trails are exclusively for hiking and walking, making it a peaceful and quiet experience.\n\nThe Lake Trail is a relatively flat and easy 2.4-mile loop that offers beautiful views of the lake and excellent opportunities for spotting wildlife like deer, turtles, and a variety of bird species. For a more challenging hike, the Ganier Ridge Trail provides elevation and stunning overlooks. It's the perfect place to reconnect with nature and enjoy the Tennessee landscape.",
        practicalInfo: {
        howToGetThere: "1160 Otter Creek Rd. Located about 20 minutes south of downtown Nashville. A car is required.",
        openingHours: "Park opens at 6:00 AM and closes 20 minutes after sunset.",
        cost: "Free.",
        website: "https://tnstateparks.com/parks/radnor-lake"
      }
      }
      ]}
      logistics={{
        gettingAround: "Downtown Nashville is very walkable. For longer distances, rideshare services like Uber and Lyft are abundant and are the most common way to get around. The city's public bus system, WeGo Public Transit, is an affordable option. For a fun, touristy experience, consider the hop-on-hop-off trolley tours. Renting a car is recommended only if you plan to visit many attractions outside the downtown core, like The Hermitage or Radnor Lake, as parking downtown can be expensive and difficult to find.",
        whereToStay: "For first-time visitors who want to be in the center of the action, Downtown or SoBro (South of Broadway) is ideal, with hotels like The Joseph or the Grand Hyatt. The Gulch offers trendy, upscale hotels like the Thompson Nashville. For a more local, bohemian vibe, look for Airbnbs or boutique hotels in East Nashville. Music Row/Midtown is another great option, slightly removed from the downtown chaos but still close to many attractions and Vanderbilt University.",
        bestTimeToVisit: "The best times to visit Nashville are in the spring (April-May) and fall (September-October). The weather is pleasant, perfect for walking around, and the city is vibrant with seasonal events. Spring brings blooming flowers, while fall offers beautiful foliage. Summer (June-August) is very popular but can be hot and humid with larger crowds. Winter (November-February) is the off-season, with colder weather but fewer crowds and lower hotel prices.",
        suggestedItinerary: "Day 1: Dive into Music History. Start at the Country Music Hall of Fame and Museum (book the RCA Studio B tour combo). In the afternoon, tour the Ryman Auditorium. In the evening, experience the live music and energy of the Honky Tonk Highway on Lower Broadway. Day 2: Culture and Neighborhoods. Spend the morning at the National Museum of African American Music. In the afternoon, explore the trendy shops and murals in The Gulch and 12 South. Enjoy dinner in one of these neighborhoods. Day 3: History and Views. Drive to Andrew Jackson's Hermitage or Belle Meade for a morning of history. In the late afternoon, walk across the John Seigenthaler Pedestrian Bridge for stunning skyline views, followed by a farewell show at the Grand Ole Opry."
      }}
      faqs={[{
          question: "Is Nashville expensive?",
          answer: "Nashville's costs are on par with other major US cities but can vary greatly depending on your choices. While there are many free things to do like walking the pedestrian bridge or listening to music in honky-tonks (with the cost of a drink), ticketed attractions, concerts, and tours can add up. Accommodation in the downtown core is expensive, especially on weekends. Food costs can range from cheap (hot chicken shacks) to very high-end. Overall, it's possible to visit on a budget, but a typical tourist trip can be moderately expensive."
        },
        {
          question: "How many days do you need in Nashville?",
          answer: "A 3-day weekend is the perfect amount of time to get a great taste of Nashville. This allows you to cover the main music attractions downtown, explore a couple of distinct neighborhoods like The Gulch or 12 South, and enjoy the nightlife. If you want to visit more historical sites like The Hermitage or Cheekwood, or take a day trip to nearby Franklin, extending your stay to 4 or 5 days would be ideal for a more relaxed pace."
        },
        {
          question: "Is Nashville safe?",
          answer: "Nashville is generally safe for tourists, especially in the main areas like Downtown, The Gulch, and Music Row where there is a heavy police presence. However, like any large city, it's important to be aware of your surroundings. The crowds on Lower Broadway at night can be intense, so keep your belongings secure. Petty crime like pickpocketing can occur. It's wise to use rideshare services at night rather than walking long distances alone in unfamiliar areas."
        },
        {
          question: "What is Nashville famous for?",
          answer: "Nashville is world-famous as 'Music City.' It's the epicenter of country music, home to legendary venues like the Grand Ole Opry and the Ryman Auditorium, the Country Music Hall of Fame, and countless record labels on Music Row. Beyond country, it's a hub for all genres of live music, which can be heard 24/7 on the Honky Tonk Highway. Nashville is also famous for its Southern cuisine, most notably its signature dish, Nashville Hot Chicken. The city is also a major center for healthcare and education."
        }
      ]}
    />
  );
};