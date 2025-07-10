import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Chicago: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Chicago, USA (2025 Guide)"}
      description={`So, you're planning a trip to the Windy City? Awesome! Figuring out what *things to do in Chicago can feel a bit overwhelming because there's just SO much on offer. From world-class museums and stunning architecture to incredible food (deep-dish pizza, anyone?) and vibrant neighborhoods, Chicago has something for everyone. I think you'll find it hard to be bored. This guide will help you narrow down the options and create the perfect Chicago itinerary. I've tried to include a little bit of everything, and maybe steer you away from some of the obvious tourist traps, or at least prepare you for them. Get ready to explore, discover, and fall in love with Chicago! Honestly, it’s one of my favorite US cities, and I hope you feel the same way after your trip.`}
      imageUrl={"https://images.unsplash.com/photo-1623607769583-f95269221eaf?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
      ]}
      highlights={["Marvel at the city from the top of the Willis Tower (formerly Sears Tower).",
        "Stroll through Millennium Park and snap a selfie with 'The Bean'.",
        "Explore the Art Institute of Chicago, home to iconic masterpieces.",
        "Take an architectural boat tour along the Chicago River.",
        "Catch a Cubs game at Wrigley Field or a White Sox game at Guaranteed Rate Field.",
        "Enjoy a delicious deep-dish pizza at a local pizzeria."]}
      attractions={[
        {
        name: "Millennium Park",
        description: `Millennium Park is, without a doubt, one of the most popular things to do in Chicago, and for good reason. It's a stunning urban oasis right in the heart of the city. The park is home to iconic attractions like Cloud Gate (aka 'The Bean'), a giant mirrored sculpture that reflects the Chicago skyline in a super fun way. Be warned, it can get really crowded, especially during peak season, but it's still worth a visit to snap some photos. Beyond 'The Bean', you'll find the Crown Fountain, an interactive video sculpture where faces of Chicago residents are projected onto towers that occasionally spout water. It's a really interesting and unique art installation.`,
        practicalInfo: {
        howToGetThere: "Easily accessible by public transportation; take the 'L' train to Washington/Wabash or Monroe/Dearborn.",
        openingHours: "Open daily from 6 AM to 11 PM.",
        cost: "Free",
        website: "https://www.cityofchicago.org/city/en/depts/dca/supp_info/millennium_park.html"
      }
      },
        {
        name: "Art Institute of Chicago",
        description: `The Art Institute of Chicago is a world-renowned museum boasting an incredible collection of art from around the globe. You can easily spend an entire day here, wandering through the halls and admiring masterpieces by artists like Van Gogh, Monet, Renoir, and Grant Wood (think 'American Gothic'). Seriously, the range is impressive, from ancient artifacts to contemporary works. I always feel like I discover something new every time I visit. The museum also hosts special exhibitions throughout the year, so be sure to check their website before you go to see what's on. It's a great place to escape the hustle and bustle of the city and immerse yourself in art. It's definitely one of the best things to do in Chicago for art lovers.`,
        practicalInfo: {
        howToGetThere: "Located in Grant Park, easily accessible by public transportation; take the 'L' train to Adams/Wabash or Monroe/Dearborn.",
        openingHours: "Open daily from 11 AM to 5 PM; Thursdays until 8 PM.",
        cost: "$32 for adults; discounts available for seniors, students, and children.",
        website: "https://www.artic.edu/"
      }
      },
        {
        name: "Willis Tower (Sears Tower)",
        description: `Formerly known as the Sears Tower, the Willis Tower offers breathtaking panoramic views of Chicago and beyond. Daredevils can step out onto The Ledge, glass boxes extending from the 103rd floor – it's a bit scary, but the views are totally worth it. The observation deck also has interactive exhibits about the history of the building and the city. It's a popular attraction, so expect long lines, especially during peak season. Consider buying your tickets online in advance to save time. Even if you're not a fan of heights, the Willis Tower is an iconic landmark and a must-see for any visitor to Chicago. I've been up there several times, and I still get a thrill every time. I mean, things to do in Chicago don't get much more iconic, do they?`,
        practicalInfo: {
        howToGetThere: "Located in the Loop; accessible by public transportation; take the 'L' train to Quincy/Wells.",
        openingHours: "Open daily from 9 AM to 10 PM.",
        cost: "$30-$40 per person.",
        website: "https://www.willistower.com/"
      }
      },
        {
        name: "Navy Pier",
        description: `Navy Pier is a bustling entertainment hub located on the shores of Lake Michigan. It features a Ferris wheel, amusement park rides, restaurants, shops, and live entertainment. You can take a boat tour, catch a show at the Shakespeare Theater, or simply stroll along the pier and enjoy the views. It can be a bit touristy, but it's a fun place to spend an afternoon, especially if you're traveling with kids. During the summer, there are often fireworks displays over the lake. It's one of those things to do in Chicago that's always lively and energetic. Personally, I prefer going during the off-season when it's less crowded.`,
        practicalInfo: {
        howToGetThere: "Accessible by public transportation; take the bus to Navy Pier.",
        openingHours: "Varies depending on the season and specific attractions.",
        cost: "Free to enter; attractions have individual fees.",
        website: "https://navypier.org/"
      }
      },
        {
        name: "Magnificent Mile",
        description: `The Magnificent Mile is Chicago's premier shopping district, stretching along North Michigan Avenue. It's home to department stores, luxury boutiques, and flagship stores of major retailers. Even if you're not a big shopper, it's worth taking a stroll down the Magnificent Mile to admire the architecture and soak up the atmosphere. There are also plenty of restaurants and cafes where you can grab a bite to eat. During the holidays, the Magnificent Mile is especially festive, with elaborate window displays and twinkling lights. It's a classic Chicago experience, and definitely one of the top things to do in Chicago if you enjoy retail therapy.`,
        practicalInfo: {
        howToGetThere: "Accessible by public transportation; take the 'L' train to Chicago/State.",
        openingHours: "Varies depending on the store.",
        cost: "Free to walk; shopping costs vary.",
        website: ""
      }
      },
        {
        name: "Wrigleyville and Wrigley Field",
        description: `For baseball fans, a visit to Wrigley Field, home of the Chicago Cubs, is a must. Even if you're not a huge baseball fan, the atmosphere in Wrigleyville on game day is electric. The neighborhood is filled with bars, restaurants, and shops, all buzzing with excitement. Take a tour of the historic ballpark, or better yet, catch a game and cheer on the Cubs. I think experiencing Wrigleyville is one of the most authentically Chicago things to do in Chicago. It's a part of the city's culture, and it's a lot of fun, even if you don't understand all the rules of baseball. Just be prepared for crowds and potentially overpriced drinks.`,
        practicalInfo: {
        howToGetThere: "Accessible by public transportation; take the 'L' train to Addison.",
        openingHours: "Varies depending on the season and game schedule.",
        cost: "Tickets vary depending on the game.",
        website: "https://www.mlb.com/cubs/ballpark"
      }
      },
        {
        name: "Museum of Science and Industry",
        description: `Located in Jackson Park, the Museum of Science and Industry is one of the largest science museums in the world. It features interactive exhibits on everything from space exploration to genetics. You can explore a German U-boat captured during World War II, descend into a coal mine, or learn about the human body. It's a great place to spend a day with the family, and it's educational as well as entertaining. I definitely think that considering things to do in Chicago with kids, this should be at the top. It's truly massive so plan your visit accordingly.`,
        practicalInfo: {
        howToGetThere: "Accessible by public transportation; take the Metra Electric Line to 57th Street.",
        openingHours: "Open daily from 9:30 AM to 4 PM.",
        cost: "$25.95 for adults; $14.95 for children.",
        website: "https://www.msichicago.org/"
      }
      },
        {
        name: "Lincoln Park Zoo",
        description: `Lincoln Park Zoo is a free zoo located in Lincoln Park. It's home to a wide variety of animals, from polar bears to gorillas to penguins. You can stroll through the zoo and observe the animals in their natural habitats. It's a great place to spend a few hours, especially if you're traveling with children. Plus, it's free! That's a big win in an expensive city like Chicago. I find it's a relaxing break from the city's hectic pace, and it's definitely one of the more enjoyable free things to do in Chicago.`,
        practicalInfo: {
        howToGetThere: "Accessible by public transportation; take the bus to Lincoln Park Zoo.",
        openingHours: "Open daily from 8 AM to 5 PM.",
        cost: "Free",
        website: "https://www.lpzoo.org/"
      }
      },
        {
        name: "Riverwalk",
        description: `The Chicago Riverwalk is a pedestrian walkway along the south bank of the Chicago River. It's lined with restaurants, bars, cafes, and shops. You can take a stroll along the Riverwalk, enjoy the views of the city skyline, and grab a bite to eat or drink. It's a particularly nice place to be in the evening, when the city lights are twinkling. It’s a perfect example of how Chicago revitalizes urban spaces. And thinking about things to do in Chicago, this is a great one to just relax and soak in the atmosphere.`,
        practicalInfo: {
        howToGetThere: "Easily accessible by public transportation; located in the Loop.",
        openingHours: "Open daily; hours vary for individual businesses.",
        cost: "Free to walk; costs vary for food and drinks.",
        website: ""
      }
      },
        {
        name: "Architecture River Cruise",
        description: `One of the most popular and highly recommended things to do in Chicago* is to take an architecture river cruise. These cruises offer a unique perspective on the city's stunning skyline and provide fascinating insights into the history and design of Chicago's iconic buildings. Knowledgeable guides share stories about the architects, the construction techniques, and the historical significance of each building. It's a relaxing and informative way to see the city, and it's a must-do for architecture enthusiasts and first-time visitors alike. Be sure to book in advance, especially during peak season.`,
        practicalInfo: {
        howToGetThere: "Cruises depart from various locations along the Chicago Riverwalk.",
        openingHours: "Varies depending on the cruise company.",
        cost: "Approximately $40-$50 per person.",
        website: ""
      }
      }
      ]}
      logistics={{
        gettingAround: `Chicago has a fantastic public transportation system, making it easy to get around without a car. The 'L' train, a network of elevated and subway trains, is the quickest and most efficient way to travel between neighborhoods. There are also numerous bus routes that cover the entire city. You can purchase a Ventra card, which can be used on both the 'L' and the buses. Taxis and ride-sharing services like Uber and Lyft are also readily available.`,
        whereToStay: `The Loop is the central business district and a great place to stay if you want to be close to the main attractions. River North is a trendy neighborhood with upscale hotels, restaurants, and nightlife. Magnificent Mile offers luxury hotels and shopping. Lincoln Park is a more residential neighborhood with charming hotels and a relaxed atmosphere. Wicker Park/Bucktown is a hip and vibrant area with boutique hotels and independent shops.`,
        bestTimeToVisit: `The best time to visit Chicago is during the spring (April-May) or fall (September-October). The weather is mild, and the crowds are smaller than in the summer. Summer (June-August) is also a popular time to visit, but the city can be hot and humid, and the attractions can be crowded. Winter (November-March) can be cold and snowy, but it's also a magical time to visit, with holiday lights and festive events.`,
        suggestedItinerary: `Day 1: Start your day with a visit to Millennium Park and snap a photo with 'The Bean'. Then, explore the Art Institute of Chicago. In the afternoon, take an architecture river cruise. In the evening, enjoy dinner in River North.

Day 2: Visit the Willis Tower for panoramic views of the city. Then, explore Navy Pier. In the afternoon, catch a Cubs game at Wrigley Field or explore the Lincoln Park Zoo. In the evening, enjoy deep-dish pizza at a local pizzeria.

Day 3: Visit the Museum of Science and Industry. Then, explore the Hyde Park neighborhood and visit the University of Chicago campus. In the afternoon, stroll along the Magnificent Mile and do some shopping. In the evening, catch a show at the Chicago Theatre.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Chicago?",
        answer: `Chicago offers a wide variety of attractions and activities, including Millennium Park, the Art Institute of Chicago, the Willis Tower, Navy Pier, Wrigley Field, the Museum of Science and Industry, and architectural boat tours.`
      },
        {
        question: "How many days do you need in Chicago?",
        answer: `I recommend spending at least three days in Chicago to see the main attractions and get a feel for the city. If you have more time, you can explore more of the neighborhoods and museums.`
      },
        {
        question: "What is Chicago famous for?",
        answer: `Chicago is famous for its stunning architecture, world-class museums, delicious deep-dish pizza, vibrant music scene, and iconic sports teams.`
      },
        {
        question: "When is the best time to visit Chicago?",
        answer: `The best time to visit Chicago is during the spring (April-May) or fall (September-October) when the weather is mild and the crowds are smaller.`
      }
      ]}
    />
  );
};