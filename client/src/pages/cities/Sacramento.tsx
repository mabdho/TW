import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Sacramento: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Sacramento, USA (2025 Guide)"}
      description={"Welcome to Sacramento, California's vibrant state capital where Gold Rush history meets a modern, farm-to-fork culture. Known as the 'City of Trees,' its lush canopy provides a stunning backdrop for exploration. From the wooden sidewalks of the historic Old Sacramento Waterfront to the polished halls of the State Capitol, the city offers a diverse tapestry of experiences. Sacramento proudly claims the title of America's Farm-to-Fork Capital, boasting an incredible culinary scene fueled by the surrounding agricultural abundance. Whether you're a history buff, a foodie, an art lover, or an outdoor enthusiast, you'll find an array of attractions to fill your itinerary. This guide will walk you through all the best things to do in Sacramento, ensuring a memorable and enriching visit to this Northern California gem."}
      imageUrl={""}
      highlights={["Old Sacramento Waterfront",
        "California State Railroad Museum",
        "California State Capitol Museum",
        "Crocker Art Museum",
        "American River Parkway"]}
      galleryImages={[
        { url: "", alt: "Sacramento landmark 1", caption: "Sacramento landmark 1 - placeholder" },
        { url: "", alt: "Sacramento landmark 2", caption: "Sacramento landmark 2 - placeholder" },
        { url: "", alt: "Sacramento landmark 3", caption: "Sacramento landmark 3 - placeholder" },
        { url: "", alt: "Sacramento landmark 4", caption: "Sacramento landmark 4 - placeholder" },
        { url: "", alt: "Sacramento landmark 5", caption: "Sacramento landmark 5 - placeholder" },
        { url: "", alt: "Sacramento landmark 6", caption: "Sacramento landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Old Sacramento Waterfront",
        description: "Step back in time at the Old Sacramento Waterfront, a 28-acre National Historic Landmark District. This meticulously preserved area transports you to the 1850s Gold Rush era with its wooden plank sidewalks, horse-drawn carriages, and stunningly restored buildings. The district is bustling with unique shops selling everything from old-fashioned candy to fine art, along with numerous restaurants and bars.\n\nExplore historic sites like the Eagle Theatre, a replica of California's first theatre, and the Delta King Riverboat, a permanently moored hotel and restaurant. It's the heart of historic Sacramento and a perfect starting point for understanding the city's origins. The area hosts many events throughout the year, including the famous Gold Rush Days over Labor Day weekend.",
        practicalInfo: {
        howToGetThere: "Located along the Sacramento River, just west of Downtown. Easily accessible on foot from downtown or via the SacRT Gold Line.",
        openingHours: "Shops and attractions have individual hours, but the area is always accessible. Generally, 10:00 AM - 6:00 PM for shops.",
        cost: "Free to walk around. Individual attractions have admission fees.",
        website: "https://www.oldsacramento.com/"
      }
      },
        {
        name: "California State Railroad Museum",
        description: "Considered one of the finest railroad museums in North America, the California State Railroad Museum is a must-visit for all ages. Located within the Old Sacramento Waterfront, the museum tells the story of the Transcontinental Railroad and its profound impact on California and the nation. You can climb aboard beautifully restored locomotives and rail cars, including a lavish private car and a powerful steam engine.\n\nThe museum features interactive exhibits, detailed dioramas, and a vast collection of artifacts that bring the history of rail travel to life. For a special treat, take a ride on the Sacramento Southern Railroad, a steam-powered excursion train that runs along the river on weekends from April to September.",
        practicalInfo: {
        howToGetThere: "125 I Street, within the Old Sacramento Waterfront district.",
        openingHours: "Daily 10:00 AM - 5:00 PM. Closed Thanksgiving, Christmas, and New Year's Day.",
        cost: "Adults ~$12, Youth (6-17) ~$6. Excursion train rides are an additional cost.",
        website: "https://www.californiarailroad.museum/"
      }
      },
        {
        name: "California State Capitol Museum",
        description: "Explore the seat of California's government at the magnificent State Capitol building. This stunning neoclassical structure, completed in 1874, serves as both a working government building and a living museum. Visitors can take guided tours or explore on their own, viewing the historic governor's offices, the beautiful rotunda, and the legislative chambers.\n\nThe building is surrounded by the 40-acre Capitol Park, which features trees from around the world, memorials, and a beautiful rose garden. It's a peaceful oasis in the heart of the city and offers a fascinating glimpse into California's political history and present.",
        practicalInfo: {
        howToGetThere: "Located at 1315 10th Street in downtown Sacramento.",
        openingHours: "Weekdays 9:00 AM - 5:00 PM for museum exhibits. Park is open daily.",
        cost: "Free admission and tours.",
        website: "https://capitolmuseum.ca.gov/"
      }
      },
        {
        name: "Crocker Art Museum",
        description: "As the oldest public art museum west of the Mississippi River, the Crocker Art Museum is a cultural cornerstone of Sacramento. The museum's collection is housed in two distinct buildings: the original Victorian mansion of the Crocker family and a sleek, modern pavilion. This architectural contrast mirrors the diversity of the art within.\n\nThe collection is particularly noted for its impressive holdings of Californian art, Old Master drawings, and international ceramics. From ancient artifacts to contemporary works, the museum offers a comprehensive journey through art history. Its engaging exhibitions and community programs make it a dynamic and welcoming space for art lovers.",
        practicalInfo: {
        howToGetThere: "216 O Street, a short walk from downtown and Old Sacramento.",
        openingHours: "Wednesday-Sunday 10:00 AM - 5:00 PM. Open late on Thursdays.",
        cost: "Adults ~$15, Seniors/Students ~$10, Youth ~$8.",
        website: "https://www.crockerart.org/"
      }
      },
        {
        name: "American River Parkway",
        description: "Known as the 'Jewel of Sacramento,' the American River Parkway is a 32-mile paved trail that stretches from Folsom Lake to the confluence of the American and Sacramento Rivers in Old Sacramento. It's a recreational paradise for cyclists, joggers, walkers, and equestrians.\n\nThe parkway provides a beautiful escape into nature without leaving the city. You can access numerous parks, beaches, and fishing spots along the way. Rent a bike, pack a picnic, or simply enjoy a leisurely stroll along the scenic riverbanks. It's the perfect way to experience Sacramento's natural beauty and active lifestyle.",
        practicalInfo: {
        howToGetThere: "Multiple access points throughout the city and surrounding suburbs. Major access points include Discovery Park and Sutter's Landing Park.",
        openingHours: "Sunrise to sunset.",
        cost: "Free to access. Parking fees may apply at some park entrances.",
        website: "https://arpf.org/"
      }
      },
        {
        name: "Sutter's Fort State Historic Park",
        description: "Discover the place where Sacramento began. Sutter's Fort State Historic Park is a reconstruction of the agricultural and trade colony founded by Swiss immigrant John Sutter in 1839. This settlement was a key destination for pioneers arriving in California, and it was here that gold was first brought after its discovery at Sutter's Mill, sparking the Gold Rush.\n\nVisitors can explore the fort's walls and interior rooms, which have been recreated to show life in the 1840s. Docents in period clothing often demonstrate crafts like blacksmithing and weaving. It’s an immersive experience that provides context for the city's rapid growth and development.",
        practicalInfo: {
        howToGetThere: "2701 L Street in Midtown Sacramento.",
        openingHours: "Daily 10:00 AM - 5:00 PM.",
        cost: "Adults ~$7, Youth (6-17) ~$5.",
        website: "https://www.parks.ca.gov/?page_id=485"
      }
      },
        {
        name: "Tower Bridge",
        description: "An iconic symbol of the city, the Tower Bridge is a stunning golden vertical lift bridge that spans the Sacramento River, connecting Sacramento with West Sacramento. Built in 1935, its Streamline Moderne architectural style makes it a photogenic landmark, especially when illuminated at night.\n\nWhile you can drive across it, the best way to appreciate the bridge is by walking or biking along the pedestrian paths on either side. It offers fantastic views of the river, the Old Sacramento Waterfront, and the modern city skyline. The bridge is often lit in different colors to commemorate special events and holidays.",
        practicalInfo: {
        howToGetThere: "Connects Capitol Mall in Sacramento to the City of West Sacramento. Easily walkable from Old Sacramento and Downtown.",
        openingHours: "24/7 for vehicles and pedestrians.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Midtown Sacramento",
        description: "Midtown is Sacramento's trendiest and most vibrant neighborhood, known for its leafy streets, historic homes, and lively atmosphere. It's the cultural hub of the city, packed with art galleries, independent boutiques, live music venues, and some of the best restaurants and bars in town.\n\nA highlight of Midtown is its incredible street art scene, with colorful murals adorning buildings throughout the area. The 'Second Saturday Art Walk' is a monthly event where galleries open their doors late and the streets fill with artists and performers. Spend an afternoon wandering through the Handle District for upscale shopping or simply enjoy a coffee at a sidewalk cafe.",
        practicalInfo: {
        howToGetThere: "Located just east of Downtown, generally defined as the area between 16th Street and 30th Street.",
        openingHours: "Varies by business; the neighborhood is always accessible.",
        cost: "Free to explore.",
        website: "https://exploremidtown.org/"
      }
      },
        {
        name: "Sacramento Zoo",
        description: "Located within the beautiful William Land Park, the Sacramento Zoo has been a beloved family destination since 1927. The zoo is home to over 500 animals from around the world, including many rare and endangered species like the Sumatran tiger, snow leopard, and red panda. The enclosures are designed to be spacious and naturalistic, prioritizing animal welfare.\n\nThe zoo is compact and easily walkable, making it ideal for families with young children. In addition to animal exhibits, it offers educational programs, a carousel, and a miniature train that winds through the park. It's a great way to spend a relaxing afternoon enjoying wildlife and the park's lush surroundings.",
        practicalInfo: {
        howToGetThere: "3930 W Land Park Dr, in William Land Park.",
        openingHours: "Daily 9:00 AM - 4:00 PM. Check website for seasonal changes.",
        cost: "Prices vary by day, generally ~$20-$25 for adults.",
        website: "https://www.saczoo.org/"
      }
      },
        {
        name: "Leland Stanford Mansion State Historic Park",
        description: "Experience the splendor of the Victorian era at the Leland Stanford Mansion. This opulent 19,000-square-foot mansion was once the home of railroad baron and California Governor Leland Stanford. After a meticulous 14-year, $22 million restoration, it has been returned to its 1872 glory and serves as California's official reception center for diplomatic leaders from around the world.\n\nGuided tours lead visitors through lavishly decorated rooms filled with period furniture, gilded mirrors, and detailed woodwork. The tour provides fascinating stories about the Stanford family and the pivotal role their home played in California's political and social history. It's a stunning example of Gilded Age architecture and extravagance.",
        practicalInfo: {
        howToGetThere: "800 N Street, in downtown Sacramento.",
        openingHours: "Tours are offered daily on the hour from 10:00 AM to 4:00 PM.",
        cost: "Adults ~$7, Youth (6-17) ~$5.",
        website: "https://www.parks.ca.gov/?page_id=489"
      }
      },
        {
        name: "California Automobile Museum",
        description: "Car enthusiasts will be in heaven at the California Automobile Museum. This museum celebrates the history of the automobile and its influence on our culture. With a collection of over 150 vehicles, the exhibits trace the evolution of car design and technology from the early 1900s to modern times.\n\nThe collection features a rotating display of classic cars, race cars, muscle cars, and unique prototypes. You can see everything from a 1930s Ford Model A to a DeLorean. The museum also hosts popular car shows and events, making it a dynamic spot for anyone with a passion for four wheels.",
        practicalInfo: {
        howToGetThere: "2200 Front Street, just south of Old Sacramento.",
        openingHours: "Daily 10:00 AM - 5:00 PM (last admission at 4:00 PM).",
        cost: "Adults ~$12, Youth (6-17) ~$6.",
        website: "https://www.calautomuseum.org/"
      }
      },
        {
        name: "Cathedral of the Blessed Sacrament",
        description: "A striking architectural gem in the heart of downtown, the Cathedral of the Blessed Sacrament is the mother church of the Roman Catholic Diocese of Sacramento. Completed in 1889, its Italian Renaissance-style exterior is beautiful, but the interior is truly breathtaking. Step inside to admire the grand dome, intricate stained-glass windows, and beautiful marble altar.\n\nThe cathedral underwent a massive restoration in the early 2000s, returning it to its original splendor. Whether you are religious or simply an admirer of art and architecture, the cathedral offers a peaceful and awe-inspiring respite from the bustling city outside. Visitors are welcome to look around quietly when services are not in session.",
        practicalInfo: {
        howToGetThere: "1017 11th Street, near the State Capitol.",
        openingHours: "Open daily for prayer and viewing. Check website for Mass times.",
        cost: "Free. Donations are welcome.",
        website: "https://www.cathedralsacramento.org/"
      }
      },
        {
        name: "Golden 1 Center",
        description: "As the world's first LEED Platinum certified indoor sports arena, the Golden 1 Center is a marvel of modern, sustainable design. It's the home of the NBA's Sacramento Kings, but it also hosts major concerts, family shows, and other premier events. The arena is known for its incredible acoustics and excellent sightlines from every seat.\n\nEven if you're not attending an event, the arena's architecture and its integration into the Downtown Commons (DOCO) plaza are impressive. It features a massive public art installation by Jeff Koons and is surrounded by new restaurants and shops. Check their schedule for public tours, which offer a behind-the-scenes look at the facility's operations and sustainable features.",
        practicalInfo: {
        howToGetThere: "500 David J Stern Walk, in the Downtown Commons (DOCO) plaza.",
        openingHours: "Varies by event. Tours are offered on select dates.",
        cost: "Varies by event. Tours are approximately ~$20.",
        website: "https://www.golden1center.com/"
      }
      },
        {
        name: "Fairytale Town",
        description: "A whimsical park designed for young children and the young at heart, Fairytale Town brings classic fairy tales and nursery rhymes to life. For over 60 years, this charming park has encouraged imaginative play with its collection of 26 play sets, including the 'Old Woman's Shoe' slide and King Arthur's Castle.\n\nLocated in William Land Park, it's a place where kids can climb, crawl, and interact with their favorite stories in a safe and creative environment. The park also features a friendly flock of farm animals, beautiful gardens, and two performing arts stages. It's an enchanting and low-tech alternative to modern theme parks.",
        practicalInfo: {
        howToGetThere: "3901 Land Park Dr, adjacent to the Sacramento Zoo.",
        openingHours: "Daily. March-October: 9:00 AM - 4:00 PM. November-February: 10:00 AM - 4:00 PM.",
        cost: "Weekdays ~$8, Weekends ~$9. Prices are the same for adults and children.",
        website: "https://www.fairytaletown.org/"
      }
      },
        {
        name: "Raging Waters Sacramento",
        description: "When the summer heat hits Sacramento, Raging Waters is the place to cool down. Located within Cal Expo, this large water park offers a wide variety of slides, rides, and pools for every level of thrill-seeker. From towering, high-speed water slides like the Cliffhanger to the relaxing Calypso Cooler lazy river, there's something for the whole family.\n\nThe park also features a large wave pool and a dedicated water play area for younger children called Treehouse Reef. It's the ultimate destination for summer fun in the city, providing a refreshing escape during Sacramento's hot season.",
        practicalInfo: {
        howToGetThere: "1600 Exposition Blvd, at the Cal Expo fairgrounds.",
        openingHours: "Open seasonally, typically from late May to early September. Check website for specific dates and hours.",
        cost: "General admission is approximately ~$45-$50. Check for online deals.",
        website: "https://www.rwsac.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Downtown and Midtown Sacramento are highly walkable and bike-friendly. The Sacramento Regional Transit District (SacRT) operates a network of buses and light rail lines that connect the city and its suburbs. For trips to Old Sacramento, Downtown, and Midtown, the light rail is a convenient option. Ride-sharing services like Uber and Lyft are widely available. Having a car is useful for exploring the wider region, but parking in the central city can be costly.",
        whereToStay: "Downtown/Midtown is the best area for tourists, offering easy access to major attractions, restaurants, and nightlife. Hotels here range from luxury options like The Kimpton Sawyer to reliable mid-range choices. Old Sacramento offers a unique stay in historic hotels like the Delta King Riverboat. For a quieter, more residential feel, look for accommodations in the beautiful East Sacramento neighborhood.",
        bestTimeToVisit: "The best times to visit Sacramento are spring (March-May) and fall (September-November). During these seasons, the weather is pleasantly warm and sunny, perfect for exploring the city's outdoor attractions. Spring brings blooming flowers, while fall is harvest season and the peak of 'Farm-to-Fork' events. Summer (June-August) is very hot and dry, but lively with events. Winter (December-February) is mild and can be rainy, but hotel rates are often lower.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: History Deep Dive. Spend the morning at the Old Sacramento Waterfront, including the California State Railroad Museum. In the afternoon, visit Sutter's Fort State Historic Park, followed by dinner in a historic Old Sacramento restaurant.\nDay 2: Art & Politics. Start at the California State Capitol Museum and Park. In the afternoon, immerse yourself in art at the Crocker Art Museum. Enjoy the evening exploring the murals, boutiques, and diverse food scene of Midtown.\nDay 3: Recreation & Local Flavor. Rent a bike and explore a section of the American River Parkway. Visit a local farmers market to experience the 'Farm-to-Fork' culture firsthand. End the day with a farewell dinner at one of the city's acclaimed restaurants."
      }}
      faqs={[{
          question: "Is Sacramento expensive?",
          answer: "Sacramento is generally more affordable than other major California cities like San Francisco or Los Angeles. While hotel prices in the downtown core can be moderate to high, dining and entertainment offer a wide range of options to fit any budget. Many of the city's best attractions, like the State Capitol and walking through Old Sacramento, are free. Overall, it offers good value for a California city vacation."
        },
        {
          question: "How many days do you need in Sacramento?",
          answer: "A weekend trip of 2-3 days is ideal for seeing the main highlights of Sacramento. This gives you enough time to explore Old Sacramento, the Capitol, the Crocker Art Museum, and enjoy the Midtown food scene. If you wish to explore the surrounding region, including nearby wineries in Lodi or the Sierra foothills, or spend more time on the American River, a 4-5 day trip would be more comfortable."
        },
        {
          question: "Is Sacramento safe?",
          answer: "Sacramento is generally a safe city for tourists, especially in the main visitor areas like Downtown, Midtown, and Old Sacramento. These areas are well-patrolled and busy. As with any major city, it's wise to be aware of your surroundings, especially at night. Avoid leaving valuables in your car and stick to well-lit streets after dark. Standard urban safety precautions should ensure a trouble-free visit."
        },
        {
          question: "What is Sacramento famous for?",
          answer: "Sacramento is most famous for four key things: its pivotal role in the 1849 California Gold Rush; being the state capital of California; its lush urban forest, earning it the nickname 'City of Trees'; and its nationally recognized 'Farm-to-Fork' culinary movement, which celebrates the region's agricultural bounty."
        }
      ]}
    />
  );
};