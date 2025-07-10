import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Milwaukee: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Milwaukee, USA (2025 Guide)"}
      description={"Nestled on the western shore of Lake Michigan, Milwaukee, Wisconsin offers a vibrant blend of old-world charm and modern energy. Once the beer capital of the world, its rich brewing heritage is still palpable in historic breweries and lively beer gardens. But this \\\"Cream City\\\" is much more than its sudsy past. Explore a stunning architectural landscape, from the soaring wings of the Calatrava-designed Art Museum to the Flemish grandeur of the Pabst Mansion. The city boasts a thriving culinary scene, diverse neighborhoods, and a calendar packed with festivals, including the world's largest music festival, Summerfest. Whether you're a history buff, a foodie, an art lover, or just looking for a friendly Midwestern city with a unique character, you'll find an incredible array of the best things to do in Milwaukee waiting to be discovered."}
      imageUrl={""}
      highlights={["Milwaukee Art Museum",
        "Harley-Davidson Museum",
        "Historic Third Ward",
        "Lakefront Brewery Tour",
        "Milwaukee Public Market"]}
      galleryImages={[
        { url: "", alt: "Milwaukee landmark 1", caption: "Milwaukee landmark 1 - placeholder" },
        { url: "", alt: "Milwaukee landmark 2", caption: "Milwaukee landmark 2 - placeholder" },
        { url: "", alt: "Milwaukee landmark 3", caption: "Milwaukee landmark 3 - placeholder" },
        { url: "", alt: "Milwaukee landmark 4", caption: "Milwaukee landmark 4 - placeholder" },
        { url: "", alt: "Milwaukee landmark 5", caption: "Milwaukee landmark 5 - placeholder" },
        { url: "", alt: "Milwaukee landmark 6", caption: "Milwaukee landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Milwaukee Art Museum",
        description: "An architectural marvel and a cultural landmark, the Milwaukee Art Museum is an unmissable stop. The museum's most iconic feature is the Quadracci Pavilion, a stunning structure designed by Santiago Calatrava with a moveable, wing-like brise soleil that opens and closes daily. This 'wing flap' is a spectacle in itself, drawing crowds at 10 a.m. when it opens, noon, and at closing time.\n\nInside, the museum houses a vast collection of nearly 25,000 works of art, spanning from antiquity to the present. It has one of the largest collections of works by Wisconsin native Georgia O'Keeffe, as well as impressive holdings of German Expressionism, folk and Haitian art, and American decorative arts. The bright, airy interior and the breathtaking views of Lake Michigan make wandering through the galleries an unforgettable experience.",
        practicalInfo: {
        howToGetThere: "700 N Art Museum Dr, Milwaukee, WI 53202. Located on the downtown lakefront, easily accessible by car, The Hop streetcar, or a scenic walk.",
        openingHours: "Typically Tue-Sun 10 AM - 5 PM (open later on some Thursdays). Closed Mondays. Wings open at 10 AM, flap at noon, and close with the museum.",
        cost: "Adults approx. $22. Discounts for students, seniors, and military. Free for children 12 and under.",
        website: "https://mam.org/"
      }
      },
        {
        name: "Harley-Davidson Museum",
        description: "Even if you're not a motorcycle enthusiast, the Harley-Davidson Museum is a fascinating journey through American history and culture. This 20-acre campus on the Menomonee River celebrates the iconic brand's 120+ year history. The museum showcases an incredible collection of over 450 motorcycles and artifacts, including 'Serial Number One,' the oldest known Harley-Davidson motorcycle.\n\nInteractive exhibits allow you to sit on modern bikes, explore engine mechanics, and trace the evolution of the brand's design and engineering. The museum delves into the role Harley-Davidson has played in popular culture, from its use in films to its dedicated rider communities. It's a testament to American innovation and a symbol of freedom and rebellion.",
        practicalInfo: {
        howToGetThere: "400 W Canal St, Milwaukee, WI 53201. Located in the Menomonee River Valley, a short drive or a long walk from downtown.",
        openingHours: "Daily 10 AM - 5 PM. The on-site restaurant and shop may have different hours.",
        cost: "Adults approx. $22. Discounts available for seniors, students, and military. Children 5 and under are free.",
        website: "https://www.harley-davidson.com/us/en/museum.html"
      }
      },
        {
        name: "Historic Third Ward",
        description: "Often called Milwaukee's 'SoHo,' the Historic Third Ward is a beautifully revitalized warehouse district brimming with character. Once a bustling hub for commerce and industry, the area's Victorian-era buildings have been transformed into art galleries, independent boutiques, theaters, specialty shops, and some of the city's best restaurants and cafes. It's a designated National Historic District and a perfect place for an afternoon stroll.\n\nWander along the Milwaukee RiverWalk, which runs through the neighborhood, or explore the dozens of unique shops offering everything from high fashion to local crafts. The area is also home to the Milwaukee Public Market and the Broadway Theatre Center, making it a vibrant hub of culture and cuisine day and night.",
        practicalInfo: {
        howToGetThere: "Located just south of downtown Milwaukee. It's highly walkable and served by The Hop streetcar.",
        openingHours: "Shops generally open 10 AM - 6 PM; restaurants and bars have later hours.",
        cost: "Free to explore.",
        website: "https://historicthirdward.org/"
      }
      },
        {
        name: "Lakefront Brewery Tour",
        description: "A Milwaukee brewery tour is a must, and Lakefront Brewery offers one of the most entertaining and beloved experiences in the city. Known for its witty and irreverent tour guides, the tour is as much a comedy show as it is an educational look at the brewing process. The tour includes generous beer samples, a souvenir pint glass, and a voucher for a free beer at a local bar.\n\nLakefront Brewery was a pioneer in the craft beer movement and is famous for its wide variety of beers, including the first certified organic beer in the U.S. and the first government-approved gluten-free beer. The tour culminates with a rendition of the 'Laverne & Shirley' theme song, paying homage to the iconic Milwaukee-set sitcom. Be sure to book your tickets in advance as they sell out quickly.",
        practicalInfo: {
        howToGetThere: "1872 N Commerce St, Milwaukee, WI 53212. Located in the Brewers' Hill neighborhood, north of downtown.",
        openingHours: "Tours run multiple times daily. Check the website for the latest schedule and to book tickets.",
        cost: "Weekdays approx. $13, weekends approx. $15.",
        website: "https://lakefrontbrewery.com/"
      }
      },
        {
        name: "Milwaukee Public Market",
        description: "A food lover's paradise located in the Historic Third Ward, the Milwaukee Public Market is a bustling marketplace featuring a diverse array of artisanal and locally-produced food. Inside, you'll find over a dozen independent vendors selling everything from fresh seafood and gourmet cheeses to decadent chocolates, spices, and fine wines. It's the perfect spot for a casual and delicious lunch, with options ranging from tacos and sushi to classic Wisconsin brats and lobster rolls.\n\nThe market's second floor, the 'Palm Garden,' offers ample seating where you can enjoy your culinary finds. They also host hands-on cooking classes and special events, making it a dynamic and delicious hub of activity. Whether you're grabbing a bite, shopping for specialty ingredients, or just soaking up the lively atmosphere, the Public Market is a feast for the senses.",
        practicalInfo: {
        howToGetThere: "400 N Water St, Milwaukee, WI 53202. Located at the intersection of the Historic Third Ward and Downtown.",
        openingHours: "Mon-Sat 10 AM - 8 PM, Sun 10 AM - 6 PM. Some vendors may have slightly different hours.",
        cost: "Free to enter; cost varies based on purchases.",
        website: "https://milwaukeepublicmarket.org/"
      }
      },
        {
        name: "Pabst Mansion",
        description: "Step back into the Gilded Age at the Pabst Mansion, the former home of Captain Frederick Pabst, the founder of Pabst Brewing Company. This magnificent Flemish Renaissance Revival mansion, completed in 1892, is an opulent showcase of late 19th-century architecture and design. A guided or self-guided tour will take you through stunningly preserved rooms featuring intricate woodwork, original furnishings, and beautiful stained glass.\n\nThe mansion provides a fascinating glimpse into the lives of one of Milwaukee's most influential families and the lavish lifestyle of the era. The attention to detail in the restoration is remarkable, making it one of the country's most authentic historic house museums.",
        practicalInfo: {
        howToGetThere: "2000 W Wisconsin Ave, Milwaukee, WI 53233. Located just west of the Marquette University campus.",
        openingHours: "Daily tours available; check the website for specific times. Usually opens around 10 AM.",
        cost: "Adults approx. $17 for self-guided tours. Discounts for seniors, students, and children.",
        website: "https://www.pabstmansion.com/"
      }
      },
        {
        name: "Mitchell Park Horticultural Conservatory (The Domes)",
        description: "A beloved local landmark, the Mitchell Park Horticultural Conservatory, affectionately known as 'The Domes,' offers a tropical escape any time of year. These three massive, beehive-shaped glass domes are an architectural wonder and each houses a distinct climate and plant collection. The Tropical Dome is a lush, humid rainforest filled with exotic flowers, fruit trees, and a waterfall. The Desert Dome showcases a diverse array of cacti, succulents, and other arid-climate plants from the Americas and Africa.\n\nThe third, the Floral Show Dome, features spectacular seasonal shows with vibrant, themed floral displays that change five times a year. It's a wonderful place for a peaceful walk, a family outing, or for photographers seeking unique shots.",
        practicalInfo: {
        howToGetThere: "524 S Layton Blvd, Milwaukee, WI 53215. Located in Mitchell Park on the city's south side.",
        openingHours: "Wed-Fri 9 AM - 5 PM, Sat-Sun 9 AM - 4 PM. Closed Mon-Tue.",
        cost: "Adults approx. $9. Discounts for Milwaukee County residents, juniors, and seniors.",
        website: "https://www.mitchellparkdomes.com/"
      }
      },
        {
        name: "Discovery World",
        description: "Located right on the Lake Michigan waterfront next to the Art Museum, Discovery World is a hands-on science and technology center that is fun for all ages. The museum focuses on innovation and the Great Lakes, featuring interactive exhibits that let you lie on a bed of nails, control a virtual pilot, or explore the underwater world in the Reiman Aquarium.\n\nA highlight is the S/V Denis Sullivan, a full-scale replica of a 19th-century three-masted schooner that is docked at the museum. Visitors can tour the ship and even set sail on Lake Michigan during the summer months. It's an engaging and educational experience that combines science, technology, and the natural environment.",
        practicalInfo: {
        howToGetThere: "500 N Harbor Dr, Milwaukee, WI 53202. Situated on the lakefront, within walking distance of downtown.",
        openingHours: "Wed-Sun 9 AM - 4 PM. Closed Mon-Tue.",
        cost: "General admission approx. $24 for adults, $20 for children. Sailing on the S/V Denis Sullivan costs extra.",
        website: "https://www.discoveryworld.org/"
      }
      },
        {
        name: "Miller Brewery Tour",
        description: "For a taste of Milwaukee's large-scale brewing history, the Miller Brewery Tour is a classic experience. Journey through the historic Miller Valley to see where over 160 years of brewing tradition meets modern technology. The free, one-hour indoor/outdoor walking tour takes you through the packaging center, the historic brewery caves, and the brewhouse.\n\nThe tour provides a fascinating look at the scale of a major American brewery. Afterward, guests 21 and over can enjoy free samples of Miller's iconic beers in the historic Miller Inn or seasonal Beer Garden. It's a complimentary and iconic Milwaukee activity that showcases the city's 'Brew City' heritage.",
        practicalInfo: {
        howToGetThere: "4251 W State St, Milwaukee, WI 53208. Located in the Miller Valley, west of downtown.",
        openingHours: "Tours run frequently, typically from 10 AM to 3:30 PM. Check website for seasonal hours and closures.",
        cost: "Free.",
        website: "https://www.millerbrewerytour.com/"
      }
      },
        {
        name: "Basilica of St. Josaphat",
        description: "A stunning architectural masterpiece on Milwaukee's South Side, the Basilica of St. Josaphat is a source of immense pride for the city's Polish community. Modeled after St. Peter's Basilica in Rome, it features one of the largest copper domes in the world. The basilica was built by Polish immigrants at the turn of the 20th century, using salvaged materials from a dismantled Chicago post office.\n\nThe interior is just as breathtaking as the exterior, with magnificent murals, stained glass windows, and ornate decorations. Whether you attend a service or take a guided tour, visiting the Basilica is a spiritual and awe-inspiring experience, showcasing incredible artistry and the determination of a community.",
        practicalInfo: {
        howToGetThere: "2333 S 6th St, Milwaukee, WI 53215. Located in the historic Lincoln Village neighborhood.",
        openingHours: "Open daily for visitors, with tours available after the Sunday 10 AM Mass or by appointment. Check website for details.",
        cost: "Free to enter; donations are welcome. Tours may have a fee.",
        website: "https://thebasilica.org/"
      }
      },
        {
        name: "Brady Street",
        description: "For a taste of Milwaukee's eclectic and bohemian side, spend some time on Brady Street. This nine-block stretch on the city's East Side has a rich history as a hub for Italian and Polish immigrants, later becoming the heart of the city's 1960s counterculture. Today, it maintains a quirky and independent spirit with a dense concentration of unique boutiques, vintage shops, diverse restaurants, and lively bars.\n\nBy day, it's a great place to shop for one-of-a-kind items and enjoy a coffee at a sidewalk cafe. By night, it transforms into one of the city's most vibrant nightlife districts. The street also hosts popular events like the Brady Street Festival in the summer, showcasing its unique character.",
        practicalInfo: {
        howToGetThere: "Located on the Lower East Side, just north of downtown. Accessible by bus or a brisk walk.",
        openingHours: "Varies by business. Shops are typically open during the day, with bars and restaurants open late.",
        cost: "Free to explore.",
        website: "https://bradystreet.org/"
      }
      },
        {
        name: "American Family Field",
        description: "Home to the Milwaukee Brewers baseball team, American Family Field is a fantastic venue to catch a Major League Baseball game. The stadium is famous for its fan-shaped convertible roof, which ensures that games are never rained out. One of the most beloved traditions is the Sausage Race in the middle of the 6th inning, where costumed mascots representing a Bratwurst, Polish Sausage, Italian Sausage, Hot Dog, and Chorizo race around the field.\n\nThe atmosphere is electric, fueled by passionate fans and a strong tailgating culture in the parking lots before the game. Even if you're not a huge baseball fan, the experience of a Brewers game is a quintessential part of Milwaukee's culture.",
        practicalInfo: {
        howToGetThere: "1 Brewers Way, Milwaukee, WI 53214. Located southwest of downtown, accessible by car or designated MCTS bus routes on game days.",
        openingHours: "Open during baseball season (April-September) for games and stadium tours.",
        cost: "Ticket prices vary widely by game and seat location. Tours are approx. $20.",
        website: "https://www.mlb.com/brewers/ballpark"
      }
      },
        {
        name: "Grohmann Museum",
        description: "For a truly unique museum experience, visit the Grohmann Museum at the Milwaukee School of Engineering. This museum is home to the world's most comprehensive art collection dedicated to the evolution of human work. Titled 'Man at Work,' the collection comprises over 1,700 paintings and sculptures dating from 1580 to the present.\n\nThe galleries are organized by theme, such as farming, mining, and blacksmithing, illustrating the progression of industries and labor through art. The rooftop sculpture garden offers fantastic views of the city. It's a surprisingly compelling and thought-provoking museum that provides a different lens through which to view history and art.",
        practicalInfo: {
        howToGetThere: "1000 N Broadway, Milwaukee, WI 53202. Located on the MSOE campus in downtown Milwaukee.",
        openingHours: "Check website for current hours, typically open on weekends.",
        cost: "Adults approx. $5. Free for students.",
        website: "https://www.msoe.edu/grohmann-museum/"
      }
      },
        {
        name: "Milwaukee RiverWalk",
        description: "The Milwaukee RiverWalk is a three-mile-long pedestrian pathway that winds along the Milwaukee River, connecting three distinct downtown neighborhoods: the Historic Third Ward, Downtown, and Brewers' Hill. The walk is dotted with public art installations, including the famous 'Bronze Fonz,' a life-sized statue of Arthur Fonzarelli from the TV show 'Happy Days.'\n\nLined with waterfront restaurants, cafes, and pubs, the RiverWalk is a perfect way to explore the city's core. You can rent a kayak or pontoon boat for a different perspective or simply enjoy a leisurely stroll and take in the city's architecture. It's a beautiful and dynamic urban space that showcases the city's successful efforts to revitalize its riverfront.",
        practicalInfo: {
        howToGetThere: "Accessible from many points in downtown Milwaukee, with primary sections between the Historic Third Ward and Juneau Avenue.",
        openingHours: "24/7",
        cost: "Free.",
        website: "https://www.milwaukeeriverwalkdistrict.com/"
      }
      },
        {
        name: "North Point Water Tower & Bradford Beach",
        description: "The North Point Water Tower is a striking historic landmark on Milwaukee's East Side. Built in 1874 in the Victorian Gothic style, the 175-foot limestone tower is a beautiful piece of Cream City architecture. While you can't go inside, it's a great photo opportunity and marks the entrance to a scenic part of the city.\n\nJust a short walk from the tower is Bradford Beach, Milwaukee's most popular public beach on Lake Michigan. During the summer, it's a bustling hub of activity with volleyball courts, tiki bars, and concession stands. It's the perfect place to relax, swim, people-watch, and enjoy the beauty of the Great Lakes.",
        practicalInfo: {
        howToGetThere: "2288 N Lake Dr, Milwaukee, WI 53211. Located in Lake Park on the Upper East Side.",
        openingHours: "The park and beach are open daily. The beach is most active from late May to early September.",
        cost: "Free.",
        website: "https://www.bradfordbeachmke.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Milwaukee's downtown and adjacent neighborhoods are quite walkable. 'The Hop' is a modern streetcar system that offers free rides through the downtown, Third Ward, and Lower East Side areas. The Milwaukee County Transit System (MCTS) provides extensive bus service throughout the city and suburbs. Bublr Bikes is the local bike-share program, and ride-sharing services like Uber and Lyft are widely available.",
        whereToStay: "The Historic Third Ward is a top choice for its trendy, boutique hotels and proximity to dining and shopping. Downtown offers convenience and a range of major hotel chains like The Pfister (historic luxury) and the Hyatt. The East Side provides a livelier atmosphere near the university and Brady Street, with options like the unique County Clare Irish Inn. For a one-of-a-kind stay, The Iron Horse Hotel next to the Harley-Davidson Museum is a popular choice.",
        bestTimeToVisit: "Summer (June to August) is the prime time to visit Milwaukee. The weather is warm and perfect for enjoying the lakefront, beer gardens, and the city's numerous festivals, including the massive Summerfest music festival. Fall (September to October) offers pleasant temperatures, beautiful foliage, and fewer crowds. Winters are very cold and snowy, but the city offers cozy indoor activities and lower hotel rates.",
        suggestedItinerary: "Day 1: Start at the Milwaukee Art Museum to see the 'wings open.' Have lunch at the Milwaukee Public Market. Spend the afternoon exploring the shops and galleries of the Historic Third Ward, followed by a stroll on the RiverWalk. \nDay 2: Immerse yourself in Americana at the Harley-Davidson Museum. In the afternoon, choose your brew: take the classic Miller Brewery Tour or the entertaining Lakefront Brewery Tour. In the evening, catch a Brewers game at American Family Field (in season).\nDay 3: Explore a different side of the city. Start on Brady Street for unique shops and coffee. In the afternoon, escape to the tropics, desert, and floral displays at the Mitchell Park Domes. Enjoy a final Milwaukee dinner in the eclectic Walker's Point neighborhood."
      }}
      faqs={[{
          question: "Is Milwaukee expensive?",
          answer: "Milwaukee is generally considered an affordable city, especially compared to larger US metropolises like Chicago. Accommodation, dining, and attraction costs are reasonable. You can enjoy a great meal for under $20, and many attractions, like the Miller brewery tour, are free. While luxury options exist, budget-conscious travelers will find plenty of ways to enjoy the city without breaking the bank."
        },
        {
          question: "How many days do you need in Milwaukee?",
          answer: "A weekend trip of 2-3 days is perfect for covering Milwaukee's main highlights, including the Art Museum, a brewery tour, and the Historic Third Ward. If you want to explore more neighborhoods, catch a sporting event, and enjoy the city at a more relaxed pace, extending your stay to 4-5 days is ideal, especially during the summer festival season."
        },
        {
          question: "Is Milwaukee safe?",
          answer: "Like any major city, Milwaukee has areas with higher crime rates. However, the tourist-focused areas such as Downtown, the Historic Third Ward, the East Side, and the lakefront are generally safe for visitors. It's always wise to practice standard urban safety precautions: be aware of your surroundings, especially at night, secure your valuables, and stick to well-lit, populated areas."
        },
        {
          question: "What is Milwaukee famous for?",
          answer: "Milwaukee is most famous for its rich brewing history, earning it the nickname 'Brew City.' It's also the birthplace of Harley-Davidson motorcycles. Other claims to fame include its beautiful Lake Michigan shoreline, its iconic Quadracci Pavilion at the Art Museum designed by Santiago Calatrava, its abundance of summer festivals (most notably Summerfest, 'The World's Largest Music Festival'), and its beloved culinary staples like beer brats, cheese curds, and frozen custard."
        }
      ]}
    />
  );
};