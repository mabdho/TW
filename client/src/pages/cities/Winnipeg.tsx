import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Winnipeg: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Winnipeg, Canada (2025 Guide)"}
      description={"Nestled at the confluence of the Red and Assiniboine rivers, Winnipeg is a city of surprising contrasts and deep cultural roots. Known as the 'Gateway to the West,' this prairie capital boasts a rich history, a thriving arts scene, and a resilience forged by its dramatic seasons. From the architectural marvel of the Canadian Museum for Human Rights to the historic charm of the Exchange District, Winnipeg offers a journey through human stories, natural beauty, and innovative design. Whether you're indulging in the diverse culinary landscape, exploring vast urban parks, or relaxing at a world-class Nordic spa, you'll find a warm welcome in this understated Canadian gem. This guide will walk you through all the best things to do in Winnipeg, ensuring a memorable and enriching visit to the heart of the continent."}
      highlights={["The Forks National Historic Site",
        "Canadian Museum for Human Rights",
        "Assiniboine Park",
        "The Exchange District National Historic Site",
        "Winnipeg Art Gallery-Qaumajuq"]}
      attractions={[
        {
        name: "The Forks National Historic Site",
        description: "The Forks is Winnipeg's most beloved gathering place, located where the Red and Assiniboine rivers meet. For over 6,000 years, this site has been a meeting point for Indigenous peoples, European fur traders, and settlers. Today, it's a bustling hub of activity year-round, featuring a vibrant market, unique shops, diverse restaurants, and beautiful river-walks. In winter, it transforms into a wonderland with the world's longest naturally frozen skating trail.\n\nInside The Forks Market, you'll find everything from local crafts to gourmet food stalls and a craft brewery. The entire site is a living museum, with outdoor sculptures and interpretive panels detailing its rich history. It's the perfect starting point for any Winnipeg adventure, offering a true taste of the city's spirit and community.",
        practicalInfo: {
        howToGetThere: "1 Forks Market Rd. Easily accessible by foot from downtown, by bus, or by car with ample paid parking.",
        openingHours: "Market: Daily, 7 AM - 11 PM. Site is always open.",
        cost: "Free to enter; costs vary for food, shopping, and activities.",
        website: "https://www.theforks.com/"
      }
      },
        {
        name: "Canadian Museum for Human Rights",
        description: "An architectural masterpiece and a globally significant institution, the Canadian Museum for Human Rights (CMHR) is the first museum in the world solely dedicated to the evolution, celebration, and future of human rights. The building itself is a marvel, designed to take visitors on a journey from darkness to light, culminating in the breathtaking Israel Asper Tower of Hope with its panoramic city views.\n\nThe galleries explore human rights concepts and stories from Canada and around the world through innovative technology, compelling artifacts, and interactive displays. It's a powerful, thought-provoking, and often emotional experience that challenges visitors to reflect on their own roles in creating a more just world. It is an absolute must-see attraction in Winnipeg.",
        practicalInfo: {
        howToGetThere: "85 Israel Asper Way, located at The Forks. Accessible by foot, bus, or car.",
        openingHours: "Tuesday - Sunday: 10 AM - 5 PM. Closed Mondays.",
        cost: "Adults ~$22 CAD. Discounts for seniors, students, and youth.",
        website: "https://humanrights.ca/"
      }
      },
        {
        name: "Assiniboine Park",
        description: "One of North America's finest urban parks, Assiniboine Park is a sprawling 1,100-acre oasis of nature, art, and recreation. It's home to the world-class Assiniboine Park Zoo, the stunning horticultural attraction The Leaf, the Leo Mol Sculpture Garden, and the Lyric Theatre, which hosts free concerts and movies in the summer. The park offers something for everyone, from lush English gardens to playgrounds and vast open spaces perfect for a picnic.\n\nThe Leaf is a recent addition, an indoor biome showcasing diverse plant life from around the world in a stunning architectural setting. Meanwhile, the Zoo's 'Journey to Churchill' exhibit is a highlight, offering an underwater viewing tunnel to see polar bears and seals swim above you. You can easily spend an entire day exploring all the park has to offer.",
        practicalInfo: {
        howToGetThere: "55 Pavilion Crescent. Best reached by car or city bus (routes 19, 20, 65, 66).",
        openingHours: "Park is open year-round. Zoo, The Leaf, and other attractions have specific hours, typically 9 AM - 5 PM.",
        cost: "Park entry is free. Separate admission fees for the Zoo and The Leaf.",
        website: "https://www.assiniboinepark.ca/"
      }
      },
        {
        name: "The Exchange District National Historic Site",
        description: "Step back in time in the Exchange District, a 20-square-block area renowned for its collection of turn-of-the-20th-century warehouses, terracotta-clad buildings, and cobblestone streets. This National Historic Site boasts North America's most extensive and well-preserved collection of heritage architecture from that era, a testament to Winnipeg's boomtown past.\n\nToday, the district is the city's cultural heart, brimming with art galleries, independent boutiques, design studios, and some of Winnipeg's best restaurants, cocktail bars, and coffee shops. It's a fantastic area to explore on foot, discovering hidden alleyways, vibrant street art, and the creative energy that now fills these historic buildings. Guided walking tours are highly recommended to appreciate the stories behind the stunning facades.",
        practicalInfo: {
        howToGetThere: "Located just north of Portage and Main. Highly walkable and accessible via downtown bus routes.",
        openingHours: "Businesses have individual hours. The area is always accessible.",
        cost: "Free to explore.",
        website: "https://www.exchangedistrict.org/"
      }
      },
        {
        name: "Winnipeg Art Gallery-Qaumajuq",
        description: "The Winnipeg Art Gallery (WAG) is home to an impressive collection of Canadian and international art, but its true gem is Qaumajuq. This stunning new wing, opened in 2021, holds the world's largest public collection of contemporary Inuit art. The name Qaumajuq means 'it is bright, it is lit' in Inuktitut, and the light-filled, undulating space is as breathtaking as the art it contains.\n\nThe visible vault, a three-story glass structure showcasing thousands of carvings, is a centerpiece that connects the new wing with the original gallery. Exploring Qaumajuq offers a profound insight into the art, culture, and stories of the North. The WAG's entire collection spans centuries and continents, making it a pivotal cultural institution in the city.",
        practicalInfo: {
        howToGetThere: "300 Memorial Blvd. Located in downtown Winnipeg, easily accessible by bus.",
        openingHours: "Tuesday - Sunday: 11 AM - 5 PM (until 9 PM on Fridays). Closed Mondays.",
        cost: "Adults ~$18 CAD. Free for youth under 18.",
        website: "https://www.wag.ca/"
      }
      },
        {
        name: "Manitoba Museum",
        description: "Embark on a journey through Manitoba's rich natural and human history at the Manitoba Museum. Its nine permanent galleries transport you from the prehistoric era to the present day. Walk through a full-size replica of the Nonsuch, the 17th-century ship that helped launch the Hudson's Bay Company, and explore a recreated 1920s Winnipeg street scene.\n\nThe museum also features a Planetarium, where you can explore the wonders of the universe, and a Science Gallery with hands-on exhibits that are fun for all ages. It's an immersive and educational experience that provides a comprehensive overview of the province's unique heritage and diverse landscapes, from northern boreal forests to southern prairies.",
        practicalInfo: {
        howToGetThere: "190 Rupert Ave, on the edge of the Exchange District.",
        openingHours: "Tuesday - Sunday: 10 AM - 4 PM. Check website for seasonal changes.",
        cost: "Multiple ticket options. Museum-only admission is ~$13 CAD for adults.",
        website: "https://manitobamuseum.ca/"
      }
      },
        {
        name: "Saint Boniface Cathedral",
        description: "Across the Red River from downtown lies the historic French quarter of St. Boniface, the heart of Manitoba's francophone community. Its most iconic landmark is the Saint Boniface Cathedral-Basilica. The original 1908 cathedral was tragically destroyed by fire in 1968, but its majestic stone façade was preserved and now serves as a dramatic frame for a modern, smaller church built within its ruins.\n\nThe result is a stunning blend of old and new architecture that is both beautiful and poignant. The surrounding cemetery is the final resting place of many prominent Manitobans, including Louis Riel, the Métis leader and founder of Manitoba. A visit here offers a peaceful moment of reflection and a glimpse into the region's foundational history.",
        practicalInfo: {
        howToGetThere: "180 Av. de la Cathedrale. Walk across the Esplanade Riel bridge from The Forks.",
        openingHours: "Grounds are open daily. Church hours vary, check website for service times and tours.",
        cost: "Free to visit the grounds. Donations are welcome.",
        website: "https://www.cathedralestboniface.ca/"
      }
      },
        {
        name: "Royal Canadian Mint",
        description: "Ever wondered where money comes from? Find out at the Royal Canadian Mint's high-tech Winnipeg facility. This striking glass tower produces every single Canadian circulation coin, as well as coins for dozens of other countries around the world. It's a fascinating look into the art and science of coin manufacturing.\n\nGuided tours offer a behind-the-scenes view of the production floor, where you can see millions of coins being struck, counted, and packaged. You'll also have the chance to lift a solid gold bar worth over $750,000 and browse the boutique for unique souvenirs and collector coins. It's a surprisingly engaging and impressive operation.",
        practicalInfo: {
        howToGetThere: "520 Lagimodiere Blvd. Best reached by car or taxi; some bus routes available.",
        openingHours: "Tours typically run Tuesday - Saturday, 9 AM - 4 PM. Reservations recommended.",
        cost: "Tours are ~$8 CAD for adults.",
        website: "https://www.mint.ca/store/mint/visit-the-mint/winnipeg-1004001"
      }
      },
        {
        name: "FortWhyte Alive",
        description: "A 660-acre urban nature reserve, FortWhyte Alive offers an escape into the wild without leaving the city. It's dedicated to environmental education and outdoor recreation, featuring forests, lakes, and wetlands that are home to a resident bison herd, deer, and countless bird species. Visitors can explore over 7 km of trails by foot or by bike, or try canoeing and fishing in the summer.\n\nIn winter, the park is a popular spot for cross-country skiing, snowshoeing, and skating on the frozen lakes. The interpretive centre has exhibits on climate change and sustainable living. Watching the massive bison roam their enclosure with the city skyline in the distance is a uniquely Manitoban experience.",
        practicalInfo: {
        howToGetThere: "1961 McCreary Rd. Located in the southwest corner of the city, best accessed by car.",
        openingHours: "Daily. Summer: 9 AM - 5 PM, Winter: 10 AM - 5 PM. Check website for specifics.",
        cost: "Adult admission ~$12 CAD.",
        website: "https://www.fortwhyte.org/"
      }
      },
        {
        name: "Thermëa by Nordik Spa-Nature",
        description: "For ultimate relaxation, Thermëa offers a world-class Nordic spa experience. This wellness haven is centered around the thermal cycle of hot, cold, and rest, which is designed to relax the body and mind. Guests can move between various saunas, steam rooms, outdoor hot and temperate pools, and cold plunges, all set within a beautiful natural landscape.\n\nThe spa also features relaxation pavilions with fireplaces, an exfoliation room, and a restaurant serving delicious and healthy cuisine. It's the perfect way to unwind after a few days of sightseeing, especially during the crisp autumn or snowy winter months, when the contrast between the hot pools and the cool air is most invigorating.",
        practicalInfo: {
        howToGetThere: "775 Crescent Dr. Located near FortWhyte Alive, best reached by car or taxi.",
        openingHours: "Daily, typically 8:30 AM - 10 PM. Reservations are essential.",
        cost: "Thermal Experience starts around $89 CAD. Packages and massages cost more.",
        website: "https://thermea.ca/winnipeg/"
      }
      },
        {
        name: "Osborne Village",
        description: "Once named Canada's best neighbourhood, Osborne Village is a dense, vibrant, and eclectic community just south of downtown. The main strip, Osborne Street, is lined with an array of independent shops, funky boutiques, vintage stores, and diverse eateries ranging from cheap and cheerful to upscale dining. It has a bohemian, energetic vibe that attracts a younger crowd.\n\nBy day, it's a great place for shopping and grabbing a coffee. By night, it comes alive with numerous pubs, bars, and live music venues, making it one of the city's premier nightlife destinations. Exploring its side streets reveals charming residential areas and hidden gems.",
        practicalInfo: {
        howToGetThere: "Walkable from downtown across the Osborne Bridge. Many bus routes pass through the Village.",
        openingHours: "Shops typically 10 AM - 6 PM, restaurants and bars open late.",
        cost: "Free to explore.",
        website: "https://www.osbornevillage.com/"
      }
      },
        {
        name: "Corydon Avenue",
        description: "Known as Winnipeg's 'Little Italy,' Corydon Avenue is a chic and bustling street known for its fantastic restaurant scene and patio culture. In the summer, the sidewalks are filled with people enjoying gelato, sipping espressos, or dining al fresco. The atmosphere is lively and social, making it the perfect spot for a leisurely lunch or a vibrant evening out.\n\nThe street offers more than just Italian food; you'll find a wide variety of cuisines, alongside stylish boutiques and salons. It has a slightly more relaxed and sophisticated vibe than Osborne Village, making it a popular spot for locals to see and be seen during the warmer months.",
        practicalInfo: {
        howToGetThere: "Located southwest of Osborne Village. Accessible by car or city bus (Route 18).",
        openingHours: "Shops and restaurants have individual hours, lively from noon until late evening.",
        cost: "Free to walk around.",
        website: "https://www.corydonbiz.com/"
      }
      },
        {
        name: "Royal Aviation Museum of Western Canada",
        description: "Located at the Winnipeg Richardson International Airport, this state-of-the-art museum celebrates Canada's rich aviation history, with a special focus on the pioneering 'bush pilots' who opened up the country's vast north. The new building, opened in 2022, is a stunning space filled with beautifully restored aircraft.\n\nExhibits are interactive and engaging, showcasing everything from early biplanes to modern jets. You can get up close to iconic planes like the 'flying saucer' Avrocar and learn about Canada's role in aviation innovation. The observation deck offers great views of the active airport runways. It's a must for aviation enthusiasts and families alike.",
        practicalInfo: {
        howToGetThere: "2088 Wellington Ave, at the airport campus. Accessible by car or bus (Route 15).",
        openingHours: "Daily, 10 AM - 5 PM.",
        cost: "Adult admission ~$19 CAD.",
        website: "https://royalaviationmuseum.com/"
      }
      },
        {
        name: "Kildonan Park",
        description: "A beautiful regional park in North Winnipeg, Kildonan Park is famous for its stunning gardens, mature trees, and the iconic Witch's Hut from the story of Hansel and Gretel. It's home to Rainbow Stage, Canada's longest-surviving outdoor theatre, which presents professional musical productions during the summer.\n\nThe park also features an outdoor swimming pool, walking and cycling paths along the Red River, a duck pond, and picnic areas. In winter, the duck pond becomes a skating rink, and the park's Pavilion serves as a warming hut. It's a cherished local spot offering a more tranquil park experience.",
        practicalInfo: {
        howToGetThere: "2015 Main St. Best reached by car or city bus (Route 11).",
        openingHours: "Park is open daily, year-round. Attraction hours vary.",
        cost: "Free to enter. Fees for pool and Rainbow Stage performances.",
        website: "https://winnipeg.ca/public-works/parks-open-spaces/regional-parks/kildonan"
      }
      },
        {
        name: "The Forks Market",
        description: "While part of the larger Forks National Historic Site, The Forks Market deserves its own mention as a premier destination for food lovers. Housed in former horse stables, this two-level market is a feast for the senses. The main floor features a bustling food hall with dozens of vendors offering global cuisines, from Salvadoran pupusas and Japanese ramen to gourmet burgers and fish and chips.\n\nThe upper level is home to 'The Common,' a bar serving a curated selection of 20 craft beers and 20 wines on tap, which you can enjoy anywhere in the licensed market. This communal, lively atmosphere makes it a perfect spot for a casual meal or drinks with friends. You'll also find local food producers selling cheese, bread, and other artisanal goods.",
        practicalInfo: {
        howToGetThere: "1 Forks Market Rd. Centrally located and easily accessible.",
        openingHours: "Daily, typically 11 AM - 9 PM for food vendors. The Common is open later.",
        cost: "Free to enter; food and drink prices vary.",
        website: "https://www.theforks.com/eat-drink"
      }
      }
      ]}
      logistics={{
        gettingAround: "Winnipeg's downtown, Exchange District, and The Forks are quite walkable. For longer distances, Winnipeg Transit operates a comprehensive bus system (a reloadable Peggo card is recommended). Ride-sharing services like Uber and Lyft are readily available, as are traditional taxis. Renting a car is a good option if you plan to visit attractions on the city's outskirts, like FortWhyte Alive or the Royal Canadian Mint.",
        whereToStay: "For first-time visitors, staying Downtown or in the Exchange District is ideal for convenience and atmosphere. The Exchange offers historic boutique hotels like the Mere Hotel. Downtown has major chains like the Fairmont Winnipeg and Alt Hotel. Osborne Village provides a trendier, more local vibe with charming B&Bs and smaller hotels. For those on a budget, there are reliable options near the airport and along major thoroughfares.",
        bestTimeToVisit: "The best time to visit Winnipeg is during the summer (June to August) when the weather is warm, the city is green, and numerous festivals like the Winnipeg Fringe Theatre Festival and Folklorama are in full swing. September and October offer pleasant temperatures, beautiful fall colours, and fewer crowds. Winter (December to February) is extremely cold but offers unique experiences like skating on the river trail and enjoying the Festival du Voyageur, Western Canada's largest winter festival.",
        suggestedItinerary: "Day 1: Start at The Forks. Explore the market for lunch, then spend the afternoon at the Canadian Museum for Human Rights. Walk across the Esplanade Riel bridge to see the Saint Boniface Cathedral at sunset. \nDay 2: Immerse yourself in history and art. Spend the morning exploring the Exchange District on foot. Visit the Manitoba Museum, followed by the Winnipeg Art Gallery-Qaumajuq in the afternoon. Enjoy dinner at one of the Exchange's acclaimed restaurants. \nDay 3: Head to Assiniboine Park. Visit the Zoo's 'Journey to Churchill' exhibit and the stunning biomes at The Leaf. In the evening, relax and unwind at Thermëa by Nordik Spa-Nature or explore the shops and restaurants in either Osborne Village or Corydon Avenue."
      }}
      faqs={[{
          question: "Is Winnipeg expensive?",
          answer: "Compared to other major Canadian cities like Vancouver, Toronto, or Montreal, Winnipeg is generally considered quite affordable. Costs for accommodation, dining, and attractions are often lower. You can enjoy a high-quality meal or find a comfortable hotel room for a fraction of the price in larger metropolitan areas, making it a great value destination."
        },
        {
          question: "How many days do you need in Winnipeg?",
          answer: "A trip of 3 to 4 days is ideal to experience the main highlights of Winnipeg without feeling rushed. This allows enough time to explore The Forks and the Canadian Museum for Human Rights, wander through the Exchange District, spend a day at Assiniboine Park, and visit a few other key museums or neighbourhoods."
        },
        {
          question: "Is Winnipeg safe?",
          answer: "Like any major city, Winnipeg has areas with higher crime rates. However, the main tourist areas such as The Forks, the Exchange District, Downtown, St. Boniface, and Assiniboine Park are generally safe, especially during the day. It's always wise to practice standard urban safety precautions: be aware of your surroundings, avoid walking alone late at night in unfamiliar areas, and keep valuables out of sight."
        },
        {
          question: "What is Winnipeg famous for?",
          answer: "Winnipeg is famous for being the 'Gateway to the West,' its strategic location at the confluence of the Red and Assiniboine Rivers (The Forks), and its brutally cold winters. It's renowned for its vibrant arts and culture scene, particularly the Royal Winnipeg Ballet, the Winnipeg Symphony Orchestra, and a thriving independent music scene. Key landmarks include the Canadian Museum for Human Rights, its historic Exchange District, and being the home of Winnie-the-Pooh's namesake, a bear named 'Winnipeg'."
        }
      ]}
    />
  );
};