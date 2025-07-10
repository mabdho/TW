import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Debrecen: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Debrecen, Hungary (2025 Guide)"}
      description={"Welcome to Debrecen, Hungary's second-largest city and the cultural and intellectual heart of the Great Hungarian Plain. Often called the 'Calvinist Rome,' Debrecen is a city of profound historical significance, peaceful green spaces, and vibrant university life. Far from the bustling crowds of Budapest, it offers a more relaxed yet deeply authentic Hungarian experience. Whether you're drawn to its imposing neoclassical architecture, the lush tranquility of the Great Forest, or its rejuvenating thermal baths, you'll find a wealth of activities to fill your days. This guide will walk you through the very best things to do in Debrecen, showcasing a city that beautifully balances its rich heritage with modern energy. Prepare to be charmed by the capital of the puszta, where history and nature exist in perfect harmony."}
      imageUrl={""}
      highlights={["Great Reformed Church (Nagytemplom)",
        "Déri Museum",
        "Nagyerdő Park (Great Forest)",
        "Aquaticum Mediterranean Pleasure Baths",
        "Kossuth Square (Kossuth Tér)"]}
      galleryImages={[
        { url: "", alt: "Debrecen landmark 1", caption: "Debrecen landmark 1 - placeholder" },
        { url: "", alt: "Debrecen landmark 2", caption: "Debrecen landmark 2 - placeholder" },
        { url: "", alt: "Debrecen landmark 3", caption: "Debrecen landmark 3 - placeholder" },
        { url: "", alt: "Debrecen landmark 4", caption: "Debrecen landmark 4 - placeholder" },
        { url: "", alt: "Debrecen landmark 5", caption: "Debrecen landmark 5 - placeholder" },
        { url: "", alt: "Debrecen landmark 6", caption: "Debrecen landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Great Reformed Church (Nagytemplom)",
        description: "The undisputed symbol of Debrecen, the Great Reformed Church is a monumental piece of Hungarian neoclassical architecture. Its iconic twin towers dominate the city skyline from their position at the head of Kossuth Square. Beyond its architectural grandeur, the church holds immense historical weight; it was here that Lajos Kossuth declared Hungary's independence from the Habsburg Dynasty in 1849. Inside, the stark, white-washed interior reflects the austerity of the Calvinist faith, creating a powerful and contemplative atmosphere.\n\nA highlight of any visit is the panoramic walk between the two towers. Climbing the west tower offers breathtaking views over the city and the vast plains beyond. You can also see the massive Rákóczi Bell, the largest Protestant church bell in Hungary, and visit the historic seat where the national assembly convened.",
        practicalInfo: {
        howToGetThere: "Located at the north end of Kossuth Square in the city center. Easily accessible on foot or by Trams 1 and 2.",
        openingHours: "Generally 9:00 AM - 4:00 PM (Mon-Fri), 9:00 AM - 1:00 PM (Sat), 12:00 PM - 4:00 PM (Sun). Check website for seasonal changes and services.",
        cost: "An entrance fee is required for the church and a separate one for the panoramic walk. Approx. 1500-2000 HUF.",
        website: "https://www.nagytemplom.hu/"
      }
      },
        {
        name: "Déri Museum",
        description: "Housing one of Hungary's most eclectic and valuable collections, the Déri Museum is a cultural treasure trove. The museum's diverse exhibits span archaeology, local history, and fine arts, but its crowning glory is the monumental Christ Trilogy by Mihály Munkácsy. These three colossal paintings—'Christ Before Pilate,' 'Golgotha,' and 'Ecce Homo'—are displayed in a dedicated, atmospherically lit hall that amplifies their dramatic power. Seeing them in person is a profound and unforgettable experience.\n\nBeyond the Munkácsy masterpieces, the museum features fascinating collections of Egyptian artifacts, an Asian art collection, and extensive exhibits detailing the history and folk traditions of the Hajdúság region. The building itself, an elegant neo-baroque palace, is an attraction in its own right.",
        practicalInfo: {
        howToGetThere: "Located behind the Great Reformed Church at Déri tér 1. A short walk from Kossuth Square.",
        openingHours: "10:00 AM - 6:00 PM (Tue-Sun). Closed on Mondays.",
        cost: "Various ticket options available for permanent and temporary exhibitions. Approx. 2500 HUF for a combined ticket.",
        website: "https://www.derimuzeum.hu/"
      }
      },
        {
        name: "Nagyerdő Park (Great Forest)",
        description: "Nagyerdő, or the Great Forest, is the city's verdant heart and a protected nature reserve right on the edge of the urban center. This sprawling park offers a perfect escape with its ancient trees, serene walking trails, and the picturesque Békás Lake (Froggy Lake), complete with a spectacular fountain. It's a beloved spot for locals to jog, cycle, picnic, or simply relax on a bench and enjoy the fresh air.\n\nThe park is more than just a green space; it's a recreational hub. It's home to the Aquaticum Spa, the Debrecen Zoo and Amusement Park, the Nagyerdei Water Tower, and an open-air theatre. A stroll through the Great Forest is essential to understanding the lifestyle and soul of Debrecen.",
        practicalInfo: {
        howToGetThere: "Take Tram 1 from the city center directly to the 'Nagyerdei körút' or 'Aquaticum' stops.",
        openingHours: "Open 24/7.",
        cost: "Free to enter and walk around.",
        website: "N/A (Public Park)"
      }
      },
        {
        name: "Aquaticum Mediterranean Pleasure Baths",
        description: "Located within the Nagyerdő Park, the Aquaticum is a world-class spa complex that offers year-round tropical bliss. The main attraction is the Mediterranean Pleasure Bath, housed under a massive glass dome and filled with lush, exotic plants. Here you'll find wave pools, twelve slides of varying intensity, climbing walls, jacuzzis, and dedicated children's pools, making it a paradise for families and fun-seekers.\n\nBeyond the pleasure baths, the Aquaticum complex includes a Thermal Bath area that harnesses Debrecen's certified medicinal waters, known for their healing properties. There are also saunas, wellness treatments, and an outdoor water park (strand) that opens in the summer. It's the perfect place to unwind after a day of sightseeing.",
        practicalInfo: {
        howToGetThere: "Take Tram 1 to the 'Aquaticum' stop in the Great Forest.",
        openingHours: "Pleasure Baths: 10:00 AM - 8:00 PM daily. Thermal Baths have different hours. Check website for specifics.",
        cost: "Prices vary based on which sections you visit (pleasure bath, thermal, sauna) and duration. Expect to pay around 5000-7000 HUF for an all-day ticket.",
        website: "https://www.aquaticum.hu/"
      }
      },
        {
        name: "Kossuth Square (Kossuth Tér)",
        description: "Kossuth Square is the vibrant, beating heart of Debrecen. This expansive and beautifully renovated plaza serves as the city's main social and cultural hub. It is flanked by some of Debrecen's most important buildings, including the Great Reformed Church, the Old County Hall, and the iconic Hotel Aranybika (Golden Bull Hotel), a stunning example of Art Nouveau architecture.\n\nThe square's centerpiece is the Millennium Fountain, an elaborate mosaic depicting the city's history, which becomes a popular splash pad for children in the summer. Dotted with cafes, benches, and performance spaces, it's the perfect spot to people-watch, enjoy an ice cream, and soak up the city's atmosphere. Throughout the year, it hosts major events, markets, and the famous Debrecen Christmas Fair.",
        practicalInfo: {
        howToGetThere: "The central point of the city. Trams 1 and 2 run along the square.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A (Public Square)"
      }
      },
        {
        name: "Reformed College of Debrecen",
        description: "With a history stretching back to 1538, the Reformed College is one of Hungary's most significant historical and educational institutions. Often referred to as 'the nation's school,' it has educated generations of Hungarian intellectuals, writers, and politicians. The building itself is a formidable neoclassical structure, but its true treasures lie within its museum and library.\n\nA visit allows you to explore historic classrooms, see scientific instruments, and view religious art. The undisputed highlight is the Great Library, a breathtaking hall containing over 600,000 volumes, including rare manuscripts and codices. Standing in this room feels like stepping back in time. The college's oratory is also where the interim Hungarian government met in 1849.",
        practicalInfo: {
        howToGetThere: "Located just behind the Great Church in Kálvin Square.",
        openingHours: "10:00 AM - 4:00 PM (Tue-Sun). Closed on Mondays.",
        cost: "Approx. 1500 HUF.",
        website: "https://muzeum.drk.hu/"
      }
      },
        {
        name: "MODEM Centre for Modern and Contemporary Arts",
        description: "Proving Debrecen is not just about history, the MODEM is a leading institution for modern and contemporary art in Hungary. Housed in a striking, purpose-built modern building, it offers a stark contrast to the city's neoclassical architecture. Its spacious, minimalist galleries are the perfect setting for a rotating schedule of high-caliber international and Hungarian art exhibitions.\n\nThe museum spans three floors and covers a wide range of media, from painting and sculpture to photography and video installations. It's a dynamic and thought-provoking space that challenges visitors and provides a fresh perspective on the art world. Even if you're not an art aficionado, the building's architecture and the quality of the exhibitions make it a worthwhile visit.",
        practicalInfo: {
        howToGetThere: "Located at Baltazár Dezső tér 1, near the Déri Museum. A short walk from the city center.",
        openingHours: "10:00 AM - 6:00 PM (Tue-Sun). Closed on Mondays.",
        cost: "Approx. 2000 HUF, depending on the exhibition.",
        website: "https://www.modemart.hu/"
      }
      },
        {
        name: "Debrecen Zoo and Amusement Park",
        description: "Nestled within the Great Forest, the Debrecen Zoo and Amusement Park offers a delightful day out, especially for families. It holds the distinction of being the first zoo established outside of Budapest in Hungary. While compact, it is home to a diverse collection of over 160 species, including pygmy hippos, giraffes, red pandas, and lions, with a focus on conservation and education.\n\nAdjacent to the zoo is a classic, charming amusement park with nostalgic rides like a Ferris wheel, dodgems (bumper cars), and a small roller coaster. It provides a fun, lighthearted break from cultural sightseeing. The combination of animals and rides in the beautiful forest setting makes it a unique and enjoyable attraction.",
        practicalInfo: {
        howToGetThere: "Take Tram 1 to the 'Zoo' stop within the Nagyerdő Park.",
        openingHours: "Opening hours are highly seasonal. Generally 10:00 AM to 4:00/6:00 PM. Check the website.",
        cost: "Combined tickets for zoo and amusement park are available. Approx. 3000-4000 HUF for an adult.",
        website: "https://www.zoodebrecen.hu/"
      }
      },
        {
        name: "Water Tower (Nagyerdei Víztorony)",
        description: "A fantastic example of urban renewal, the old Nagyerdei Water Tower has been transformed from an industrial relic into a vibrant community and adventure hub. This protected monument now offers one of the most unique experiences in Debrecen. The exterior has been converted into a climbing wall, offering a challenge for both beginners and experienced climbers.\n\nInside, the tower houses a cozy cafe and a bar, which often hosts live music and events. The main draw, however, is the observation deck at the very top. Accessed by an elevator, it provides a stunning 360-degree panoramic view over the Great Forest and the city. At night, the tower is beautifully illuminated, becoming a beacon in the park.",
        practicalInfo: {
        howToGetThere: "Located in the heart of Nagyerdő Park, near the stadium. Take Tram 1.",
        openingHours: "Varies by season and day of the week, often opening in the afternoon. Check their Facebook page for current hours.",
        cost: "Free to enter the cafe/bar area. A fee applies for climbing and for accessing the observation deck.",
        website: "https://www.facebook.com/nagyerdeiviztorony/"
      }
      },
        {
        name: "Csokonai Theatre",
        description: "Named after the celebrated Hungarian poet Mihály Csokonai Vitéz, who was born in Debrecen, this theatre is the city's premier venue for drama and opera. The building itself, completed in 1865, is a magnificent example of Romantic architecture with Moorish and Byzantine elements. Its ornate facade, adorned with statues of famous Hungarian literary figures, is a beautiful sight on its own.\n\nWhile the main building is currently undergoing extensive renovation (scheduled to reopen in 2025/2026), performances are held at a temporary venue. Even just admiring the exterior of the historic building gives you a sense of Debrecen's deep-rooted cultural life. Once reopened, catching a performance here will once again be a quintessential Debrecen experience.",
        practicalInfo: {
        howToGetThere: "Located on Kossuth Lajos utca, a short walk from Kossuth Square.",
        openingHours: "Building is currently closed for renovation. Check the website for performance schedules at alternate venues.",
        cost: "Ticket prices vary by performance.",
        website: "https://csokonaiszinhaz.hu/"
      }
      },
        {
        name: "St. Anne's Cathedral",
        description: "Providing a beautiful architectural and religious contrast to the Calvinist Great Church, St. Anne's Cathedral is the seat of the Roman Catholic Diocese of Debrecen-Nyíregyháza. Built in the 1740s, this elegant yellow church is a fine example of Baroque architecture. Its twin-towered facade and ornate interior offer a different kind of spiritual atmosphere from the city's Protestant landmarks.\n\nInside, you'll find lavish altars, intricate carvings, and beautiful frescoes. Pope John Paul II visited the cathedral in 1991, elevating its status from a parish church. A visit here provides a more complete picture of Debrecen's religious diversity and architectural history.",
        practicalInfo: {
        howToGetThere: "Located on Szent Anna utca, about a 10-minute walk south from Kossuth Square.",
        openingHours: "Generally open to visitors outside of mass times. Check at the entrance.",
        cost: "Free, donations are welcome.",
        website: "N/A"
      }
      },
        {
        name: "Hortobágy National Park (Day Trip)",
        description: "A trip to Debrecen is incomplete without experiencing the nearby Hortobágy National Park, a UNESCO World Heritage site and the largest semi-natural grassland in Europe. This is the heart of the Hungarian 'puszta' (steppe), a vast, flat landscape of myth and tradition. Here you can witness traditional Hungarian cowboys (csikós) performing breathtaking horsemanship shows, see unique long-horned Grey Cattle, and spot incredible birdlife, especially during the autumn crane migration.\n\nVisit the Nine-arched Bridge, a famous landmark, and the Herdsmen's Museum in the village of Hortobágy to learn about the harsh, romantic life of the puszta. The experience is a journey into a different, more ancient Hungary, and it's easily accessible from Debrecen, making for a perfect and unforgettable day trip.",
        practicalInfo: {
        howToGetThere: "The village of Hortobágy is about a 40-minute drive or a direct train/bus ride from Debrecen.",
        openingHours: "The park itself is open, but visitor centers and attractions have specific hours, usually 10:00 AM - 4:00 PM. Best visited from April to October.",
        cost: "Varies. You can explore parts for free, but safaris, shows, and museum entry require tickets.",
        website: "https://www.hnp.hu/en"
      }
      },
        {
        name: "Timárház (Tanner's House)",
        description: "For a hands-on look at Hungarian folk traditions, head to the Timárház. This charming 'House of Crafts' is dedicated to preserving and teaching traditional artisan skills. Housed in an authentic old tanner's house, it offers a glimpse into the city's rich craft history. The permanent exhibition showcases beautiful examples of local crafts, including pottery, weaving, embroidery, and leatherwork.\n\nThe best part of a visit is the opportunity to see artisans at work in their workshops. The Timárház regularly hosts workshops and classes where visitors can try their hand at crafts like felt-making or gingerbread decoration. It's a wonderful, interactive way to connect with local culture and perhaps even buy a unique, handmade souvenir.",
        practicalInfo: {
        howToGetThere: "Located at Nagy Gál István utca 6, a short walk from the city center.",
        openingHours: "10:00 AM - 6:00 PM (Tue-Sat). Closed Sunday and Monday.",
        cost: "A small entrance fee applies, approx. 800 HUF. Workshops cost extra.",
        website: "https://www.debrecenimuvkozpont.hu/timarhaz"
      }
      },
        {
        name: "Kerekerdő Adventure Park (Kerekerdő Élménypark)",
        description: "Step into a world of fairy tales at the Kerekerdő Adventure Park, located on the outskirts of Debrecen. The name translates to 'Round Forest,' a common setting in Hungarian folk tales, and the park lives up to its name. It's a fantasy land designed for younger children and families, with attractions based on famous stories and legends.\n\nYou can explore a talking tree, navigate a labyrinth, ride a pig-themed train, and meet characters from classic tales. The park also includes playgrounds, a petting zoo, and simple rides. It's less about high-octane thrills and more about imaginative play and creating a magical atmosphere, making it a perfect family-friendly destination.",
        practicalInfo: {
        howToGetThere: "Located at Olimpia fasor 23. Best reached by car or a local bus (check routes as it's outside the main tourist area).",
        openingHours: "Seasonal opening, mainly spring to autumn, from 10:00 AM to 6:00 PM. Check website for exact dates.",
        cost: "Approx. 4000-5000 HUF per person for an all-inclusive wristband.",
        website: "https://www.kerekerdoelmenypark.hu/"
      }
      },
        {
        name: "Piac Street (Piac Utca)",
        description: "Piac utca, meaning 'Market Street,' is Debrecen's main artery, a bustling thoroughfare that connects the train station to the central Kossuth Square. A walk along this street is a journey through the city's architectural evolution. Here you'll find a mix of grand 19th-century buildings, Art Nouveau gems, and socialist-era blocks, all housing shops, banks, cafes, and restaurants.\n\nThe street is partially pedestrianized and is served by the main tram line, making it a lively and constantly moving part of the city. Key sights along the way include the Small Reformed Church (Kistemplom) with its unusual onion dome, and the ornate facade of the County Hall. It's the commercial and transit spine of Debrecen, and you'll inevitably find yourself strolling along it multiple times during your visit.",
        practicalInfo: {
        howToGetThere: "The main street running south from Kossuth Square to the Grand Station.",
        openingHours: "Street is always open; shop hours vary.",
        cost: "Free to walk.",
        website: "N/A (Public Street)"
      }
      }
      ]}
      logistics={{
        gettingAround: "Debrecen is a very walkable city, especially the central core. For longer distances, the public transport system is excellent and efficient, consisting of trams, trolleybuses, and buses. Tram line 1 is particularly useful for tourists, connecting the Grand Station, the city center (Kossuth Square), and the Great Forest (Nagyerdő). Tickets can be bought from machines at major stops or via a mobile app. Debrecen also has its own international airport (DEB) with good connections to the city center by bus.",
        whereToStay: "For first-time visitors, the City Center around Kossuth Square and Piac Street is ideal. You'll be within walking distance of most historical sights, restaurants, and cafes. Recommended hotels include the historic Hotel Aranybika and the modern Mercure Debrecen. For a quieter, nature-focused stay, the Nagyerdő (Great Forest) area is perfect. The Aquaticum Debrecen Thermal and Wellness Hotel offers direct access to the spa complex, making it a great choice for a relaxing getaway.",
        bestTimeToVisit: "The best time to visit Debrecen is during the spring (April-June) and autumn (September-October) when the weather is mild and pleasant, perfect for sightseeing and enjoying the parks. Summer (July-August) is warm and lively, highlighted by the spectacular Debrecen Flower Carnival on August 20th, a massive parade with intricate floral floats. Winter can be cold, but the city is charming with its festive Christmas market in Kossuth Square.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: Explore the historical city center. Visit the Great Reformed Church and its panorama walk, the Déri Museum (for the Munkácsy Trilogy), and the Reformed College. Stroll through Kossuth Square and down Piac Street.\nDay 2: Focus on the Great Forest (Nagyerdő). Take Tram 1 to the park. Spend the morning at the Debrecen Zoo and Amusement Park, then relax and have fun at the Aquaticum Mediterranean Pleasure Baths in the afternoon. Enjoy the view from the Water Tower in the evening.\nDay 3: Cultural immersion or nature escape. Either spend the day on a trip to Hortobágy National Park to experience the puszta, or stay in Debrecen to visit the MODEM art gallery and the Timárház craft center."
      }}
      faqs={[{
          question: "Is Debrecen expensive?",
          answer: "Debrecen is significantly more affordable than Budapest and many other major European cities. Accommodation, public transport, and food are all reasonably priced. A meal at a mid-range restaurant can cost around 3000-5000 HUF, and a public transport ticket is about 400 HUF. It's a great destination for travelers looking for value for money."
        },
        {
          question: "How many days do you need in Debrecen?",
          answer: "Two full days are sufficient to see the main sights within the city itself, including the city center and the Great Forest area. However, to have a more relaxed experience and to include a day trip to the highly recommended Hortobágy National Park, a 3-day stay is ideal."
        },
        {
          question: "Is Debrecen safe?",
          answer: "Yes, Debrecen is considered a very safe city. It has a low crime rate and a relaxed, friendly atmosphere. Standard travel precautions apply, such as being aware of your surroundings and keeping an eye on your belongings in crowded areas, but visitors should feel very comfortable walking around the city, even at night."
        },
        {
          question: "What is Debrecen famous for?",
          answer: "Debrecen is famous for several key things. It is known as the 'Calvinist Rome' due to its historical importance as a center of the Protestant Reformation in Hungary, symbolized by its Great Reformed Church. It's also famous for its prestigious university, its vast urban park (Nagyerdő), its healing thermal waters, and for hosting the spectacular annual Flower Carnival (Virágkarnevál) every August."
        }
      ]}
    />
  );
};