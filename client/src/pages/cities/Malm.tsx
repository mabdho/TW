import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Malm: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Malmö, Sweden (2025 Guide)"}
      description={"Effortlessly cool and refreshingly green, Malmö is a city that has masterfully reinvented itself. Once an industrial powerhouse, Sweden's third-largest city is now a global leader in sustainable urban development, brimming with innovative architecture, verdant parks, and a vibrant, multicultural food scene. Connected to Copenhagen by the magnificent Öresund Bridge, Malmö offers a more laid-back, compact alternative to its Danish neighbor. It’s a city best explored on two wheels, where historic squares meet futuristic design and sandy beaches are just a short cycle from the city center. Whether you're a design aficionado, a foodie, or simply seeking a charming Scandinavian escape, you'll find an incredible array of the best things to do in Malmö. This guide will walk you through the must-see sights and local favorites that make this coastal city so special."}
      highlights={["Turning Torso",
        "Malmöhus Castle (Malmö Museer)",
        "Öresund Bridge",
        "Lilla Torg",
        "Västra Hamnen (Western Harbour)"]}
      galleryImages={[
        { url: "", alt: "Malm landmark 1", caption: "Malm landmark 1 - placeholder" },
        { url: "", alt: "Malm landmark 2", caption: "Malm landmark 2 - placeholder" },
        { url: "", alt: "Malm landmark 3", caption: "Malm landmark 3 - placeholder" },
        { url: "", alt: "Malm landmark 4", caption: "Malm landmark 4 - placeholder" },
        { url: "", alt: "Malm landmark 5", caption: "Malm landmark 5 - placeholder" },
        { url: "", alt: "Malm landmark 6", caption: "Malm landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Turning Torso",
        description: "Dominating the Malmö skyline, the Turning Torso is a marvel of neo-futurist architecture and a symbol of the city's modern transformation. Designed by Spanish architect Santiago Calatrava, this residential skyscraper twists a full 90 degrees from base to top, standing at an impressive 190 meters. It was the world's first twisting skyscraper and remains the tallest building in Scandinavia.\n\nWhile the building houses private residences and is not generally open to the public for visits, its breathtaking form can be admired from all over the city, particularly from the Western Harbour area. Seeing it up close allows you to appreciate the sheer scale and ingenuity of its design, making it an essential photo opportunity and a testament to Malmö's forward-thinking spirit.",
        practicalInfo: {
        howToGetThere: "Located in the Västra Hamnen (Western Harbour) district. Accessible via bus (line 7 to 'Propellergatan') or a pleasant walk/cycle from the city center.",
        openingHours: "Exterior can be viewed 24/7. Interior access is restricted to residents and pre-booked groups.",
        cost: "Free to view from the outside.",
        website: "hsb.se/malmo/turningtorso/"
      }
      },
        {
        name: "Malmöhus Castle (Malmö Museer)",
        description: "Step back in time at Malmöhus Castle, the oldest preserved Renaissance castle in the Nordic region. Originally built in the 15th century and fortified by the Danes in the 16th century, this historic fortress has served as a royal residence, a mint, and even a prison. Today, it's the centerpiece of Malmö Museer (Malmö Museums).\n\nYour single admission ticket grants you access to a fascinating collection of institutions within the castle walls and adjacent buildings. Explore the Malmö Art Museum, the City Museum, and the Natural History Museum. You can even venture into a real submarine, the U3, docked in the moat. It's a comprehensive cultural experience offering a deep dive into the region's art, history, and natural world.",
        practicalInfo: {
        howToGetThere: "Located at Malmöhusvägen 6, a short walk west of the city center.",
        openingHours: "Typically 10:00 AM - 5:00 PM. Check website for seasonal variations.",
        cost: "Adults approx. 40 SEK; Children under 19 free. Ticket includes all museums on site.",
        website: "malmo.se/museer"
      }
      },
        {
        name: "Öresund Bridge",
        description: "An engineering masterpiece, the Öresund Bridge is the iconic link between Malmö, Sweden, and Copenhagen, Denmark. This combined railway and motorway bridge stretches for nearly 8 kilometers across the Öresund Strait before transitioning into a 4-kilometer man-made island, Peberholm, and then a 4-kilometer tunnel to the Danish coast. Its elegant, cable-stayed design is a powerful symbol of Scandinavian cooperation.\n\nWhile you can experience the bridge by taking a train or car to Copenhagen, one of the best ways to appreciate its scale is from the shore. Head to the 'Luftkastellet' or 'Utsiktsplats Öresundsbron' viewpoint near the Sibbarp camping area. The sight of the bridge arching gracefully over the water, especially at sunrise or sunset, is truly unforgettable.",
        practicalInfo: {
        howToGetThere: "For the best view, take bus 4 to 'Sibbarp' and walk towards the coast. To cross, take the Öresundståg train from Malmö Central Station.",
        openingHours: "Viewpoint is accessible 24/7. Bridge is open 24/7 for traffic.",
        cost: "Free to view. Tolls apply for vehicles crossing; train tickets vary in price.",
        website: "oresundsbron.com"
      }
      },
        {
        name: "Lilla Torg",
        description: "Lilla Torg (Little Square) is the charming, cobblestoned heart of Malmö's Old Town. Tucked away just behind the main square, Stortorget, this picturesque spot is lined with beautifully preserved half-timbered houses dating back to the 16th and 17th centuries. During the day, it's a bustling hub of activity, but it truly comes alive in the evenings.\n\nThe square is packed with restaurants, pubs, and cafes, whose outdoor terraces spill out onto the cobblestones in the warmer months. The atmosphere is cozy and convivial, making it the perfect place to enjoy a traditional Swedish 'fika' (coffee and cake break) or a leisurely dinner. It's a must-visit for soaking up Malmö's historic ambiance.",
        practicalInfo: {
        howToGetThere: "Located in the Gamla Staden (Old Town), a 5-minute walk from Malmö Central Station.",
        openingHours: "Square is public. Restaurants and shops have individual hours, generally open late.",
        cost: "Free to visit. Food and drink prices vary.",
        website: "malmotown.com"
      }
      },
        {
        name: "Västra Hamnen (Western Harbour)",
        description: "Explore the future of urban living in Västra Hamnen, a former industrial shipyard transformed into a stunningly modern and sustainable residential district. This area is a showcase of innovative architecture, green spaces, and waterfront living, with the iconic Turning Torso as its centerpiece. It's a fantastic place for a stroll or bike ride, especially on a sunny day.\n\nWalk along the Scaniaparken and Daniaparken boardwalks, where locals gather to sunbathe and swim in the sea from the wooden decks. The area is filled with intriguing buildings, small parks, and excellent cafes with views over the Öresund Strait towards Copenhagen. It perfectly captures the blend of nature and cutting-edge design that defines modern Malmö.",
        practicalInfo: {
        howToGetThere: "A 20-minute walk from the city center or take bus 7 towards 'Västra Hamnen'.",
        openingHours: "Public area, accessible 24/7.",
        cost: "Free.",
        website: "malmotown.com"
      }
      },
        {
        name: "Stortorget",
        description: "Stortorget, or the Main Square, is Malmö's oldest and largest square, laid out in the 1530s. It's a grand, open space surrounded by impressive buildings, including the historic Malmö Rådhus (City Hall) on its eastern side. In the center of the square stands an equestrian statue of King Charles X Gustav, who conquered the province of Skåne from Denmark in the 17th century.\n\nThe square is also home to the Apoteket Lejonet, a beautiful 19th-century pharmacy with a stunningly preserved interior. Stortorget serves as a central point in the city, connecting the main shopping street, Södergatan, with the historic charm of Lilla Torg. It's often the site of public events and markets.",
        practicalInfo: {
        howToGetThere: "Located in the heart of the city, a short walk from Malmö Central Station.",
        openingHours: "Public square, accessible 24/7.",
        cost: "Free.",
        website: "malmotown.com"
      }
      },
        {
        name: "St. Peter's Church (Sankt Petri Kyrka)",
        description: "Sankt Petri Kyrka is the oldest building in Malmö, a magnificent example of Brick Gothic architecture dating back to the early 14th century. Its design was heavily influenced by St. Mary's Church in Lübeck, Germany. The towering exterior is impressive, but the serene interior is the real treasure. Step inside to find whitewashed walls, soaring vaulted ceilings, and stunning medieval frescoes in the side chapels.\n\nThe church's most remarkable feature is the massive wooden altarpiece from 1611, one of the largest in the Nordic countries. Take a moment to sit in the pews and absorb the peaceful atmosphere and centuries of history contained within these walls. It offers a tranquil escape from the bustling city streets just outside.",
        practicalInfo: {
        howToGetThere: "Located just off Stortorget, near the Central Station.",
        openingHours: "Generally open daily, but check website for services and events. Typically 10:00 AM - 6:00 PM.",
        cost: "Free admission, donations are welcome.",
        website: "svenskakyrkan.se/malmo/stpetri"
      }
      },
        {
        name: "Kungsparken (The King's Park)",
        description: "Opened in 1872, Kungsparken is Malmö's oldest public park and a lush oasis in the city center. Designed in the English style, it features winding paths, exotic old trees, and romantic canals that you can explore by paddleboat. The park's centerpiece is a beautiful cast-iron fountain from 1882.\n\nA man-made grotto and charming bridges add to the picturesque scenery. The park seamlessly connects to the neighboring Slottsparken (Castle Park), creating a large green space perfect for picnics, leisurely walks, or simply relaxing. It's also home to the Malmö City Library and the historic Casino Cosmopol.",
        practicalInfo: {
        howToGetThere: "Located just west of the Old Town, adjacent to Malmöhus Castle.",
        openingHours: "Accessible 24/7.",
        cost: "Free.",
        website: "malmo.se/Uppleva-och-gora/Natur-och-parker"
      }
      },
        {
        name: "Moderna Museet Malmö",
        description: "Housed in a striking former electricity station from 1901, complemented by a contemporary orange extension, Moderna Museet Malmö is a premier destination for modern and contemporary art. As a branch of the main museum in Stockholm, it presents high-quality exhibitions featuring top Swedish and international artists.\n\nThe collection spans from the early 20th century to the present day, with works by masters like Picasso and Dalí alongside cutting-edge contemporary pieces. The museum's bright, industrial-chic galleries provide a unique backdrop for the art. Its intimate scale makes it an accessible and enjoyable art experience, even for those who aren't experts.",
        practicalInfo: {
        howToGetThere: "Located on Gasverksgatan 22, a 15-minute walk from Stortorget.",
        openingHours: "Tuesday-Sunday 11:00 AM - 5:00 PM. Closed Mondays.",
        cost: "Admission is free.",
        website: "modernamuseet.se/malmo/"
      }
      },
        {
        name: "Ribersborgsstranden & Kallbadhus",
        description: "Known affectionately as 'Ribban' by locals, Ribersborgsstranden is a long, sandy beach offering stunning views of the Turning Torso and the Öresund Bridge. On a warm day, it's the perfect spot for swimming, sunbathing, or playing sports on the vast green lawns behind the beach.\n\nThe most iconic feature is the Ribersborgs Kallbadhus, a historic open-air bathhouse dating back to 1898. Perched at the end of a long pier, it offers a traditional Scandinavian wellness experience with wood-fired saunas, sea swimming (year-round!), a cafe, and spa treatments. Even if you don't take a dip, a walk out on the pier is a must for the fantastic views.",
        practicalInfo: {
        howToGetThere: "A 30-minute walk or a short bike ride from the city center. Bus 7 also serves the area.",
        openingHours: "Beach is public. Kallbadhus has specific hours, check their website.",
        cost: "Beach is free. Entry to Kallbadhus costs approx. 85 SEK.",
        website: "ribersborgskallbadhus.se"
      }
      },
        {
        name: "Folkets Park",
        description: "Folkets Park (The People's Park) is one of the world's oldest public parks, offering a unique blend of recreation, entertainment, and green space. It’s a beloved spot for families and has a wonderfully nostalgic, funfair atmosphere. The park features a large playground, a children's stage, mini-golf, and a paddling pool in the summer.\n\nDon't miss the small terrarium, home to snakes, spiders, and monkeys. In the evenings, the park transforms, with bars like Moriska Paviljongen hosting concerts, clubs, and cultural events. Whether you're traveling with kids or looking for unique nightlife, Folkets Park offers something for everyone.",
        practicalInfo: {
        howToGetThere: "Located in the Möllevången district, easily reachable by bus or a 20-minute walk from the center.",
        openingHours: "Park is always open. Attractions have their own hours.",
        cost: "Free to enter the park. Some activities and events may have a fee.",
        website: "malmofolketspark.se"
      }
      },
        {
        name: "Möllevångstorget & Möllevången",
        description: "Experience the vibrant, multicultural heart of Malmö at Möllevångstorget (often called 'Möllan'). This bustling square hosts a lively outdoor market every day except Sunday, where you can find fresh fruit, vegetables, flowers, and spices at bargain prices. The square is the epicenter of the diverse Möllevången neighborhood.\n\nSurrounding the square is a fantastic array of affordable restaurants serving cuisine from all corners of the globe, particularly Middle Eastern and Asian. The area is known for its bohemian vibe, independent shops, and lively bars. It's the best place in Malmö to feel the city's international pulse and enjoy a delicious, budget-friendly meal.",
        practicalInfo: {
        howToGetThere: "Southeast of the city center. Take bus 5 or walk for about 20-25 minutes.",
        openingHours: "Market is open Mon-Sat, roughly 9:00 AM - 3:00 PM. Restaurants open until late.",
        cost: "Free to visit the market and neighborhood.",
        website: "malmotown.com/mollevangen"
      }
      },
        {
        name: "Disgusting Food Museum",
        description: "Challenge your senses and your stomach at one of the world's most unique museums. The Disgusting Food Museum isn't about shock value for its own sake; it's a fascinating exploration of what different cultures consider a delicacy and what we perceive as 'disgusting'. The exhibit showcases 80 of the world's most adventurous foods.\n\nFrom maggot-infested cheese from Sardinia (casu marzu) to fermented shark from Iceland (hákarl) and the notoriously pungent durian fruit, you can see, smell, and even taste some of them at the tasting bar. It's a fun, thought-provoking, and surprisingly educational experience that will change the way you think about food.",
        practicalInfo: {
        howToGetThere: "Centrally located at Södergatan 2, in the Caroli City shopping center.",
        openingHours: "Wednesday-Sunday, 11:00 AM - 5:00 PM. Check for seasonal changes.",
        cost: "Adults approx. 215 SEK; Students/Seniors 175 SEK.",
        website: "disgustingfoodmuseum.com"
      }
      },
        {
        name: "Malmö Saluhall",
        description: "For a modern taste of Swedish culinary culture, head to Malmö Saluhall. This stylish indoor food market is housed in a beautifully restored old freight depot, blending rustic charm with sleek, contemporary design. It's a haven for food lovers, bringing together local producers, artisan food makers, and quality eateries under one roof.\n\nBrowse the stalls for fresh bread, local cheeses, charcuterie, fish, and specialty coffee. Better yet, stay for lunch. You can grab gourmet wood-fired pizza, delicious ramen, fresh oysters, or classic Swedish 'fika'. The quality and variety are exceptional, making it a perfect lunch spot or a place to pick up delicious souvenirs.",
        practicalInfo: {
        howToGetThere: "Located at Gibraltargatan 6, near Malmö Live Concert Hall and the Central Station.",
        openingHours: "Mon-Thurs 10-19, Fri 10-20, Sat 10-17. Some restaurants open later. Closed Sundays.",
        cost: "Free to enter. Prices for food vary.",
        website: "malmosaluhall.se"
      }
      },
        {
        name: "Canal Boat Tour",
        description: "Discover Malmö from a different perspective with a relaxing boat tour through its historic canals and under its many bridges. The guided 'Rundan' sightseeing tour provides a comprehensive overview of the city's history and landmarks, from the old town to the modern harbor, all from the comfort of an open-air boat.\n\nThe 50-minute journey takes you through the city's parks, past Malmöhus Castle, and offers unique views that you can't get on foot. The live guide provides engaging commentary on the city's transformation and points out key sights along the way. It's an ideal activity for your first day to get acquainted with the city's layout.",
        practicalInfo: {
        howToGetThere: "Departures are from the pier opposite the Central Station, at Norra Vallgatan.",
        openingHours: "Operates daily from April to September. Multiple departures per day, check schedule online.",
        cost: "Adults approx. 200 SEK.",
        website: "stromma.com/en-se/malmo/sightseeing/sightseeing-by-boat/rundan/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Malmö is exceptionally walkable and is one of the world's most bike-friendly cities. Renting a bike is the best way to explore like a local. The public transportation system, run by Skånetrafiken, consists of green city buses that are efficient and cover the entire city. You can pay with a credit card onboard or use the Skånetrafiken app for tickets.",
        whereToStay: "For historic charm, stay in Gamla Väster (part of the Old Town), with its cobblestone streets and proximity to Lilla Torg. For modern luxury and sea views, choose Västra Hamnen near the Turning Torso. For a bohemian, vibrant, and budget-friendly atmosphere with great food, the Möllevången neighborhood is an excellent choice. Recommended hotels include MJ's (boutique), Clarion Hotel Malmö Live (modern), and The More Hotel (apartment-style).",
        bestTimeToVisit: "The best time to visit Malmö is from late spring to early autumn (May to September). During these months, the weather is pleasant, daylight hours are long (especially in June and July), and the city's parks, beaches, and outdoor cafes are in full swing. The shoulder seasons of May and September offer a good balance of nice weather and fewer crowds. Winter can be cold and dark, but the Christmas markets in December provide a cozy, festive charm.",
        suggestedItinerary: "Day 1: Historic Heart. Explore Stortorget and Lilla Torg. Visit St. Peter's Church. Tour Malmöhus Castle and the surrounding Kungsparken. End with dinner in the Old Town.\nDay 2: Modern Malmö & Sea. Cycle or walk to Västra Hamnen to see the Turning Torso. Stroll the waterfront boardwalks. Head to Ribersborgsstranden for a walk on the pier and visit the Kallbadhus. Enjoy the sunset over the Öresund Bridge.\nDay 3: Culture & Cuisine. Start at the Möllevångstorget market. Visit the unique Disgusting Food Museum or the Moderna Museet. Have lunch at Malmö Saluhall. Spend the afternoon in Folkets Park."
      }}
      faqs={[{
          question: "Is Malmö expensive?",
          answer: "Malmö is generally considered less expensive than Stockholm or Copenhagen but is still on par with other Nordic cities. Expect to pay around 120-180 SEK for a casual lunch and 300-500 SEK for a main course at a mid-range restaurant. Groceries, especially at markets like Möllevångstorget, can be quite affordable. Public transport is efficient and reasonably priced. Many attractions, like the Moderna Museet and most parks, are free."
        },
        {
          question: "How many days do you need in Malmö?",
          answer: "Two to three days are perfect for a trip to Malmö. The city is compact and easy to navigate, allowing you to see the main attractions without feeling rushed. A 2-day trip allows you to cover the historic center and the modern harbor area. With three days, you can explore more diverse neighborhoods like Möllevången, relax in the parks, and even take a half-day trip to the historic university town of Lund, just 10 minutes away by train."
        },
        {
          question: "Is Malmö safe?",
          answer: "Yes, Malmö is generally a very safe city for tourists. The main tourist areas like the Old Town and Western Harbour are well-policed and safe to walk around, even at night. Like in any city, it's wise to use common sense. Be aware of your surroundings in crowded areas to avoid pickpockets, and be cautious if you are out late at night in less central neighborhoods. Overall, violent crime rates are low, and visitors should feel comfortable exploring."
        },
        {
          question: "What is Malmö famous for?",
          answer: "Malmö is famous for its remarkable transformation from an industrial city to a hub of sustainability and innovation. Key symbols of this are the iconic Turning Torso skyscraper and the eco-friendly Västra Hamnen district. It's also famous for the Öresund Bridge connecting it to Denmark, its numerous beautiful parks earning it the nickname 'The City of Parks', its vibrant multicultural food scene, and its dedication to being one of the world's most bike-friendly cities."
        }
      ]}
    />
  );
};