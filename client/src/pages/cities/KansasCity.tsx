import React from 'react';
import { CityPage } from '../../components/CityPage';

export const KansasCity: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Kansas City, USA (2025 Guide)"}
      description={"Welcome to Kansas City, the vibrant heart of the American Midwest. Known as the 'City of Fountains' and the 'Paris of the Plains,' KC offers a surprising blend of rich history, world-class arts, and a culinary scene that sizzles. This is a city where the soulful sounds of jazz spill from historic clubs and the smoky aroma of legendary barbecue hangs in the air. From stunning architectural marvels and poignant national museums to eclectic arts districts and sprawling, beautiful parks, there's a dynamic energy here waiting to be discovered. Whether you're a history buff, a foodie, a sports fanatic, or an art lover, you'll find an incredible array of experiences. Let's explore the very best things to do in Kansas City for an unforgettable trip."}
      highlights={["National WWI Museum and Memorial",
        "The Nelson-Atkins Museum of Art",
        "Union Station",
        "Indulge in Kansas City Barbecue",
        "Country Club Plaza"]}
      galleryImages={[
        { url: "", alt: "KansasCity landmark 1", caption: "KansasCity landmark 1 - placeholder" },
        { url: "", alt: "KansasCity landmark 2", caption: "KansasCity landmark 2 - placeholder" },
        { url: "", alt: "KansasCity landmark 3", caption: "KansasCity landmark 3 - placeholder" },
        { url: "", alt: "KansasCity landmark 4", caption: "KansasCity landmark 4 - placeholder" },
        { url: "", alt: "KansasCity landmark 5", caption: "KansasCity landmark 5 - placeholder" },
        { url: "", alt: "KansasCity landmark 6", caption: "KansasCity landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "National WWI Museum and Memorial",
        description: "A profoundly moving and comprehensive institution, the National WWI Museum and Memorial is America's official museum dedicated to World War I. The experience begins by crossing a glass bridge over a field of 9,000 red poppies, each representing 1,000 combatant deaths. Inside, the main gallery offers an immersive chronological journey through the war, featuring an astonishing collection of artifacts, life-sized trenches, and interactive displays that bring the global conflict to life.\n\nDon't miss the opportunity to ascend the 217-foot Liberty Memorial Tower. The open-air observation deck provides what is arguably the most breathtaking panoramic view of the Kansas City skyline, including a perfect vantage point of Union Station directly below. It's a must-see for history enthusiasts and anyone looking to understand this pivotal moment in world history.",
        practicalInfo: {
        howToGetThere: "2 Memorial Dr, Kansas City, MO 64108. Located just south of downtown, easily accessible by car or a short ride on the KC Streetcar to the Union Station stop, followed by a brief walk.",
        openingHours: "Typically 10:00 AM - 5:00 PM. Closed Mondays. Hours can vary, so check the official website.",
        cost: "Adults: ~$20, Seniors/Military: ~$16, Youth: ~$12. Tower access is an additional fee.",
        website: "https://www.theworldwar.org/"
      }
      },
        {
        name: "The Nelson-Atkins Museum of Art",
        description: "One of the most distinguished art museums in the country, the Nelson-Atkins boasts an encyclopedic collection spanning 5,000 years of human creativity. The original neoclassical building and the stunning modern Bloch Building addition house everything from ancient Chinese ceramics and European masters like Caravaggio and Monet to an impressive collection of American and contemporary art. The museum is renowned for its Asian art collection, which is among the finest in the West.\n\nEqually famous is the Donald J. Hall Sculpture Park, a sprawling lawn dotted with monumental works, including the iconic 'Shuttlecocks' by Claes Oldenburg and Coosje van Bruggen. It's a perfect place for a leisurely stroll and a photo opportunity. Best of all, general admission to the museum is completely free.",
        practicalInfo: {
        howToGetThere: "4525 Oak St, Kansas City, MO 64111. Located south of the Country Club Plaza. Accessible by car or the Main Street MAX bus line.",
        openingHours: "10:00 AM - 5:00 PM (Fri-Mon, Wed); 10:00 AM - 9:00 PM (Thu). Closed Tuesdays. Verify hours online.",
        cost: "General admission is free. Special exhibitions may require a paid ticket.",
        website: "https://www.nelson-atkins.org/"
      }
      },
        {
        name: "Union Station",
        description: "More than just a train station, Union Station is a magnificent historical landmark and a hub of culture and entertainment. Built in 1914, this Beaux-Arts masterpiece has been beautifully restored, and its Grand Hall, with its 95-foot ceiling and three 3,500-pound chandeliers, is a breathtaking sight. Today, it still serves as an active Amtrak station but also houses a variety of attractions.\n\nYou can explore Science City, an interactive science center perfect for families; the Arvin Gottlieb Planetarium; a movie theater; and various rotating world-class exhibitions. The station also features several restaurants and shops, making it a destination where you can easily spend half a day marveling at the architecture and enjoying its many offerings.",
        practicalInfo: {
        howToGetThere: "30 W Pershing Rd, Kansas City, MO 64108. The southern terminus of the free KC Streetcar.",
        openingHours: "Station building is generally open daily 6:00 AM - 12:00 AM. Attraction hours vary.",
        cost: "Free to enter and walk around. Individual attractions (Science City, exhibits) have their own admission fees.",
        website: "https://www.unionstation.org/"
      }
      },
        {
        name: "Indulge in Kansas City Barbecue",
        description: "You cannot visit Kansas City without experiencing its most famous culinary contribution: barbecue. It's a religion here, characterized by slow-smoked meats, a thick, sweet, and tangy tomato-based sauce, and beloved side dishes. The city is packed with legendary joints, each with its own fiercely loyal following. From the iconic burnt ends (cubes of brisket point) to fall-off-the-bone ribs and pulled pork, trying KC 'cue is an essential cultural experience.\n\nChoosing where to go is part of the fun. For a classic experience, head to Arthur Bryant's or Gates Bar-B-Q, where you'll be greeted with a loud 'Hi, may I help you?'. For a more modern yet equally revered take, the gas station-born Joe's Kansas City Bar-B-Que is a must-try, often with a line out the door. Other standouts include Q39, Jack Stack, and Slap's BBQ.",
        practicalInfo: {
        howToGetThere: "Locations vary across the city. Joe's KC: 3002 W 47th Ave, Kansas City, KS 66103. Arthur Bryant's: 1727 Brooklyn Ave, Kansas City, MO 64127.",
        openingHours: "Varies by restaurant; many are closed on Sundays or Mondays. Check specific locations.",
        cost: "Plates and sandwiches typically range from $15-$30 per person.",
        website: "https://www.visitkc.com/food-drinks/barbecue"
      }
      },
        {
        name: "Country Club Plaza",
        description: "Designed in 1922 as the nation's first suburban shopping center designed for automobiles, the Country Club Plaza is a premier retail, dining, and entertainment district. Its striking Spanish-inspired architecture, featuring courtyards, towers, and ornate tilework, makes it a beautiful place to simply walk around. The area is filled with high-end retailers, local boutiques, fantastic restaurants, and dozens of fountains and sculptures.\n\nThe Plaza is a year-round destination. In the spring and summer, the courtyards are bustling with shoppers and outdoor diners. From Thanksgiving to mid-January, it transforms into a winter wonderland during the annual Plaza Lights ceremony, where every building is outlined in festive colored lights—a cherished KC tradition.",
        practicalInfo: {
        howToGetThere: "4706 Broadway Blvd, Kansas City, MO 64112. Located south of downtown and the Nelson-Atkins Museum. Best reached by car or bus.",
        openingHours: "Retail hours are generally 10:00 AM - 7:00 PM, with restaurant hours extending later.",
        cost: "Free to walk around. Shopping and dining costs vary.",
        website: "https://countryclubplaza.com/"
      }
      },
        {
        name: "American Jazz Museum",
        description: "Located in the historic 18th & Vine Jazz District, the American Jazz Museum celebrates the history and legacy of America's original art form. Kansas City was a jazz hotbed in the 1920s and 30s, and this museum pays tribute to the greats like Charlie Parker, Count Basie, Ella Fitzgerald, and Duke Ellington. Through interactive exhibits, listening stations, and memorabilia, visitors can immerse themselves in the sounds and stories of jazz.\n\nThe museum shares a building with the Negro Leagues Baseball Museum and is attached to The Blue Room, a working jazz club that hosts live performances by local and national musicians several nights a week. Visiting the museum and then catching a show at The Blue Room makes for a perfect evening.",
        practicalInfo: {
        howToGetThere: "1616 E 18th St, Kansas City, MO 64108. Located in the 18th & Vine District, east of downtown.",
        openingHours: "Typically 10:00 AM - 5:00 PM. Closed Mondays. Check website for specifics and Blue Room performance schedule.",
        cost: "Adults: ~$10, Seniors: ~$8. Combo tickets with the Negro Leagues Baseball Museum are available.",
        website: "https://americanjazzmuseum.org/"
      }
      },
        {
        name: "Negro Leagues Baseball Museum",
        description: "A powerful and important American institution, the Negro Leagues Baseball Museum (NLBM) chronicles the history of African American baseball from the late 1800s to the 1960s. This is not just a sports museum; it's a civil rights and social history museum told through the lens of baseball. The self-guided tour takes you through a timeline of segregation and the creation of the Negro Leagues, celebrating legendary players like Satchel Paige, Josh Gibson, Cool Papa Bell, and of course, Jackie Robinson, who broke the color barrier.\n\nThe culminating exhibit is the moving 'Field of Legends,' where nearly life-sized bronze statues of Negro Leagues greats are positioned on a mock baseball diamond as if in the middle of a game. It is a poignant and inspiring tribute that you won't soon forget.",
        practicalInfo: {
        howToGetThere: "1616 E 18th St, Kansas City, MO 64108. Co-located with the American Jazz Museum in the 18th & Vine District.",
        openingHours: "10:00 AM - 5:00 PM (Tues-Sat), 12:00 PM - 5:00 PM (Sun). Closed Mondays. Verify online.",
        cost: "Adults: ~$10, Seniors: ~$9, Children: ~$6. Combo tickets with the American Jazz Museum are available.",
        website: "https://www.nlbm.com/"
      }
      },
        {
        name: "City Market",
        description: "A vibrant hub of food, culture, and commerce since 1857, the City Market is a bustling destination for locals and tourists alike. The main draw is the large, open-air farmers market on weekends (April-October), where vendors from across the region sell fresh produce, flowers, baked goods, and crafts. The surrounding permanent buildings house a diverse mix of international restaurants—from Vietnamese and Brazilian to Ethiopian and Italian—as well as specialty grocery stores and boutiques.\n\nBeyond the food, the market is also home to the Arabia Steamboat Museum, which offers a fascinating glimpse into life on the American frontier. The City Market's lively atmosphere and multicultural flavor make it a fantastic place to spend a Saturday or Sunday morning.",
        practicalInfo: {
        howToGetThere: "20 E 5th St, Kansas City, MO 64106. Located in the River Market neighborhood, the northern terminus of the free KC Streetcar.",
        openingHours: "Market is open daily, year-round. Farmers Market is primarily on weekends. Restaurant hours vary.",
        cost: "Free to enter. Food and goods prices vary.",
        website: "https://thecitymarketkc.org/"
      }
      },
        {
        name: "Crossroads Arts District",
        description: "Once a neighborhood of warehouses, the Crossroads Arts District has transformed into Kansas City's creative hub. This dynamic area is brimming with over 40 art galleries, unique local boutiques, innovative restaurants, and craft breweries. It's a fantastic neighborhood to explore on foot, discovering colorful murals and public art installations around every corner.\n\nThe best time to experience the Crossroads is on the 'First Friday' of each month. From 5-9 PM, thousands of people descend on the district as galleries hold open houses, street performers entertain crowds, and food trucks line the streets. It's a massive, festive block party that showcases the city's artistic soul.",
        practicalInfo: {
        howToGetThere: "Centered around the intersection of 19th Street and Baltimore Avenue, just south of downtown and north of Union Station. The KC Streetcar runs directly through it.",
        openingHours: "Gallery hours vary, many are open Wed-Sat. Most active during First Fridays.",
        cost: "Free to explore. Gallery admission is usually free.",
        website: "https://kccrossroads.org/"
      }
      },
        {
        name: "Power & Light District",
        description: "The Power & Light District is downtown Kansas City's premier destination for dining and nightlife. This eight-block neighborhood is packed with more than 50 restaurants, bars, and shops, all centered around KC Live!, a covered outdoor courtyard with a massive video screen that hosts concerts, watch parties for sporting events, and other community gatherings. It's the electric heart of downtown entertainment.\n\nWhether you're looking for a lively sports bar to watch the Chiefs or Royals, a rollicking piano bar, a trendy cocktail lounge, or just a place for dinner before a show at the nearby T-Mobile Center, the Power & Light District offers a concentrated dose of high-energy fun.",
        practicalInfo: {
        howToGetThere: "Located in the heart of downtown, between Baltimore Ave and Grand Blvd, and 12th St and Truman Rd. Accessible via the KC Streetcar (Power & Light stop).",
        openingHours: "Varies by venue, but primarily active in the evenings and on weekends.",
        cost: "Free to walk around; prices vary by establishment.",
        website: "https://powerandlightdistrict.com/"
      }
      },
        {
        name: "Boulevard Brewing Company",
        description: "Founded in 1989, Boulevard Brewing Company has grown from a small local operation into one of the largest craft breweries in the Midwest. A tour of their massive facility offers a fascinating look into the brewing process, from the ingredients and fermentation tanks to the impressive bottling line. The popular tours are informative, fun, and culminate in a tasting of some of their famous beers, including the iconic Unfiltered Wheat.\n\nIf you can't snag a tour spot, the brewery's Beer Hall is a destination in itself. This two-story tasting room features 24 rotating taps of year-round, seasonal, and experimental beers. With a spacious outdoor deck and a gift shop, it's a perfect spot for any beer enthusiast to relax and sample some of KC's finest.",
        practicalInfo: {
        howToGetThere: "2501 Southwest Blvd, Kansas City, MO 64108. Located southwest of the Crossroads Arts District.",
        openingHours: "Beer Hall is open daily. Tour times vary and often sell out, so book in advance online.",
        cost: "Tours are around $25-$30 per person and include tastings. Beer Hall entry is free; you pay for beers.",
        website: "https://www.boulevard.com/"
      }
      },
        {
        name: "Arabia Steamboat Museum",
        description: "Located in the City Market, the Arabia Steamboat Museum is a true time capsule of the American West. In 1856, the Steamboat Arabia, loaded with 200 tons of supplies for frontier towns, sank in the Missouri River. It was excavated in 1988, and its cargo was found perfectly preserved in the mud. The museum displays this incredible 'treasure,' offering a unique window into the daily lives of pioneers.\n\nYou'll see everything from fine china and clothing to tools, medicines, and even jars of preserved food that are still edible. It's a fascinating and unconventional museum that tells the story of westward expansion through the everyday objects intended for those who lived it.",
        practicalInfo: {
        howToGetThere: "400 Grand Blvd, Kansas City, MO 64106. Inside the City Market, accessible via the KC Streetcar.",
        openingHours: "Mon-Sat: 10:00 AM - 5:00 PM, Sun: 12:00 PM - 5:00 PM. Last tour starts at 3:30 PM (Mon-Sat) and 3:00 PM (Sun).",
        cost: "Adults: ~$15.50, Seniors: ~$14.50, Children (4-14): ~$6.50.",
        website: "https://www.1856.com/"
      }
      },
        {
        name: "Kauffman Center for the Performing Arts",
        description: "An architectural marvel on the Kansas City skyline, the Kauffman Center for the Performing Arts is as stunning on the outside as the performances are on the inside. Designed by renowned architect Moshe Safdie, its shell-like design of sweeping stainless steel and glass is a modern icon. The center houses two distinct, acoustically acclaimed venues: the Muriel Kauffman Theatre for ballet, opera, and theater, and the Helzberg Hall for symphony concerts.\n\nIt is the performance home of the Kansas City Ballet, the Lyric Opera of Kansas City, and the Kansas City Symphony. Even if you don't catch a show, it's worth seeing the building itself. Public tours are often available, offering a behind-the-scenes look at its breathtaking design and engineering.",
        practicalInfo: {
        howToGetThere: "1601 Broadway Blvd, Kansas City, MO 64108. Located between the Power & Light District and the Crossroads. Accessible via the KC Streetcar (Kauffman Center stop).",
        openingHours: "Box office hours vary. Performance times are typically in the evening.",
        cost: "Tour costs are ~$7. Performance ticket prices vary widely by show.",
        website: "https://www.kauffmancenter.org/"
      }
      },
        {
        name: "Kauffman Stadium",
        description: "Home of the Kansas City Royals, Kauffman Stadium (or 'The K') is consistently ranked among the best ballparks in Major League Baseball. Known for its iconic outfield fountains—the largest privately funded fountains in the world—and crown-shaped scoreboard, the stadium provides a fantastic fan experience. It's a classic, open-air ballpark that feels both grand and intimate.\n\nTaking in a Royals game is a quintessential KC summer activity. The atmosphere is family-friendly and energetic. For die-hard fans, stadium tours are available on non-game days, offering access to the dugout, press box, and the Royals Hall of Fame.",
        practicalInfo: {
        howToGetThere: "1 Royal Way, Kansas City, MO 64129. Part of the Truman Sports Complex, east of downtown. Best reached by car; ample parking is available.",
        openingHours: "Varies based on game schedule. Tours are offered on select days.",
        cost: "Game ticket prices vary. Tour tickets are around $15-$25.",
        website: "https://www.mlb.com/royals/ballpark"
      }
      },
        {
        name: "Arrowhead Stadium",
        description: "Right next door to Kauffman Stadium sits Arrowhead Stadium, the legendary home of the NFL's Kansas City Chiefs. Renowned for its electrifying atmosphere, Arrowhead holds the Guinness World Record for the loudest outdoor sports stadium. The 'Sea of Red' on game day is a sight to behold, and the smell of barbecue from the epic tailgating scene fills the air for hours before kickoff.\n\nAttending a Chiefs game is an intense, unforgettable experience for any sports fan. The passionate fanbase and unique stadium design, which amplifies crowd noise, make it one of the most formidable home-field advantages in all of sports. Stadium tours are also available, providing a behind-the-scenes look at this iconic venue.",
        practicalInfo: {
        howToGetThere: "1 Arrowhead Dr, Kansas City, MO 64129. At the Truman Sports Complex. A car is the best way to get there.",
        openingHours: "Varies based on game schedule. Tours are available on non-game days.",
        cost: "Game ticket prices vary significantly. Tour tickets are around $35.",
        website: "https://www.chiefs.com/stadium/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Navigating the core of Kansas City is easy thanks to the free KC Streetcar, which runs a 2.2-mile route from the River Market through Downtown, the Crossroads Arts District, and down to Union Station. For areas outside this corridor, like the Country Club Plaza or the 18th & Vine District, you'll need to use the RideKC bus system, a rideshare service like Uber or Lyft, or rent a car. A car is recommended if you plan to visit the Truman Sports Complex or venture to barbecue joints in Kansas.",
        whereToStay: "For upscale shopping and a romantic atmosphere, stay in the Country Club Plaza (e.g., The Raphael Hotel, The Fontaine). For a trendier, artsy vibe with boutique hotels and great food, choose the Crossroads Arts District (e.g., Crossroads Hotel, 21c Museum Hotel). For proximity to nightlife and major events, Downtown and the Power & Light District are ideal (e.g., Loews Kansas City Hotel, Hotel Kansas City).",
        bestTimeToVisit: "The best times to visit Kansas City are in the late spring (April-June) and fall (September-October). During these months, the weather is pleasant, perfect for walking around the Plaza, enjoying the city's many fountains, and attending outdoor events. Summer (July-August) can be hot and humid, while winter (November-February) is cold, though the Plaza Lights are a major holiday attraction.",
        suggestedItinerary: "Day 1: History & Views. Start at the National WWI Museum and Memorial, taking the tower to the top for city views. Walk over to Union Station to explore its grand architecture and grab lunch. In the afternoon, head to The Nelson-Atkins Museum of Art and stroll through the sculpture park. Day 2: Culture & Cuisine. Spend the morning at the 18th & Vine District, visiting the Negro Leagues Baseball Museum and the American Jazz Museum. For lunch, indulge in classic KC barbecue at a legendary spot like Arthur Bryant's or Gates. Spend the afternoon exploring the City Market and the Arabia Steamboat Museum. In the evening, catch a jazz show at The Blue Room. Day 3: Arts & Entertainment. Explore the galleries and street art of the Crossroads Arts District. Ride the streetcar to the Power & Light District for lunch. In the afternoon, do some shopping at the Country Club Plaza or take a tour of Boulevard Brewing Company. For the evening, consider a performance at the Kauffman Center or a Royals/Chiefs game if in season."
      }}
      faqs={[{
          question: "Is Kansas City expensive?",
          answer: "Compared to major coastal cities in the U.S., Kansas City is quite affordable. Hotel prices are reasonable, and many of the top attractions, like the Nelson-Atkins Museum of Art and the KC Streetcar, are free. Dining costs offer great value, especially for the portion sizes at barbecue restaurants. You'll find your budget stretches further here than in cities like New York or San Francisco."
        },
        {
          question: "How many days do you need in Kansas City?",
          answer: "A long weekend of 3 to 4 days is the ideal amount of time to get a great feel for Kansas City. This allows you to visit the major museums, explore key neighborhoods like the Plaza and Crossroads, enjoy a few barbecue meals, and perhaps catch a live jazz performance or a sporting event without feeling rushed."
        },
        {
          question: "Is Kansas City safe?",
          answer: "Like any major American city, Kansas City has areas with higher crime rates. However, the primary tourist areas—including the Country Club Plaza, Downtown, the Crossroads Arts District, and the area around the major museums—are generally safe and well-patrolled. It's always wise to practice standard urban safety precautions: be aware of your surroundings, especially at night, don't leave valuables in your car, and stick to well-lit areas."
        },
        {
          question: "What is Kansas City famous for?",
          answer: "Kansas City is most famous for four things: barbecue, jazz, fountains, and sports. It has a distinctive slow-smoked style of barbecue with a sweet and tangy sauce that's known worldwide. Its historic 18th & Vine district was a cradle of jazz innovation in the 1930s. The city has more fountains than any city except Rome, earning it the nickname 'City of Fountains.' Finally, it's home to fiercely passionate fans of the NFL's Chiefs and MLB's Royals."
        }
      ]}
    />
  );
};