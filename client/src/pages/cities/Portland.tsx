import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Portland: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Portland, USA (2025 Guide)"}
      description={"Welcome to Portland, Oregon, a city where 'weird' is a compliment and nature is never more than a stone's throw away. Nestled between the Willamette and Columbia rivers, this Pacific Northwest hub thrives on a unique blend of creative energy, craft culture, and outdoor adventure. Known as the 'City of Roses,' Portland offers lush green parks, a world-class culinary scene fueled by innovative chefs and countless food carts, and a vibrant arts community. Whether you're browsing the shelves of the world's largest independent bookstore, sipping a meticulously brewed coffee, or hiking through an urban forest, you'll find that the list of the best things to do in Portland is as eclectic and engaging as the city itself. Prepare to be charmed by its laid-back vibe and fiercely independent spirit."}
      imageUrl={""}
      highlights={["Powell's City of Books",
        "International Rose Test Garden",
        "Portland Japanese Garden",
        "Lan Su Chinese Garden",
        "Explore the Food Cart Pods"]}
      galleryImages={[
        { url: "", alt: "Portland landmark 1", caption: "Portland landmark 1 - placeholder" },
        { url: "", alt: "Portland landmark 2", caption: "Portland landmark 2 - placeholder" },
        { url: "", alt: "Portland landmark 3", caption: "Portland landmark 3 - placeholder" },
        { url: "", alt: "Portland landmark 4", caption: "Portland landmark 4 - placeholder" },
        { url: "", alt: "Portland landmark 5", caption: "Portland landmark 5 - placeholder" },
        { url: "", alt: "Portland landmark 6", caption: "Portland landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Powell's City of Books",
        description: "An absolute pilgrimage for any book lover, Powell's City of Books is the largest independent new and used bookstore in the world. Occupying an entire city block in the Pearl District, this literary wonderland houses over a million books across nine color-coded rooms and 3,500 different sections. You can easily lose hours wandering through its towering shelves, discovering everything from rare first editions to the latest bestsellers.\n\nThe store's sheer scale is breathtaking, but its charm lies in the thrill of discovery. Grab a map at the entrance (you'll need it) and embark on a treasure hunt. The store also hosts regular author events and has a cozy coffee shop, making it a perfect rainy-day refuge and a cornerstone of Portland's intellectual culture.",
        practicalInfo: {
        howToGetThere: "Located at 1005 W Burnside St, in the Pearl District. Accessible via MAX Light Rail (Blue/Red lines to 10th & Couch) and various bus routes.",
        openingHours: "10:00 AM - 9:00 PM daily",
        cost: "Free to enter",
        website: "https://www.powells.com"
      }
      },
        {
        name: "International Rose Test Garden",
        description: "Portland didn't earn the nickname 'City of Roses' by accident, and this garden is the stunning proof. Perched in Washington Park with breathtaking views of downtown Portland and Mount Hood on clear days, the International Rose Test Garden is the oldest continuously operated public rose test garden in the United States. It's a living laboratory for over 10,000 rose bushes representing more than 650 varieties.\n\nThe best time to visit is from late May through September when the blooms are at their peak. Stroll through the meticulously maintained grounds, breathe in the fragrant air, and admire the vibrant colors. It's a photographer's dream and a serene escape from the city buzz.",
        practicalInfo: {
        howToGetThere: "Located in Washington Park. Parking is limited. The free Washington Park Exploration Shuttle runs seasonally, or you can take MAX Light Rail to the Washington Park station.",
        openingHours: "7:30 AM - 9:00 PM daily",
        cost: "Free to enter; paid parking.",
        website: "https://www.portland.gov/parks/international-rose-test-garden"
      }
      },
        {
        name: "Portland Japanese Garden",
        description: "Often hailed as one of the most authentic Japanese gardens outside of Japan, the Portland Japanese Garden is a haven of tranquility. Situated adjacent to the Rose Garden in Washington Park, it encompasses 12 acres and eight distinct garden styles. Each space is designed to inspire peace and reflection, featuring meticulously placed stones, serene water features, graceful bridges, and carefully pruned plants.\n\nExplore the Strolling Pond Garden, the Sand and Stone Garden, and the authentic Japanese Tea House. The newer Cultural Village, designed by renowned architect Kengo Kuma, adds a modern touch with a gallery, library, and café overlooking the lush landscape. It's an immersive cultural experience that offers a profound sense of calm.",
        practicalInfo: {
        howToGetThere: "Located in Washington Park. Use the free seasonal park shuttle or take MAX Light Rail to the Washington Park station.",
        openingHours: "Wednesday - Monday: 10:00 AM - 4:30 PM; Tuesday: 12:00 PM - 4:30 PM. Check website for seasonal changes.",
        cost: "Adults ~$22; discounts for seniors, students, and youth. Advance ticket purchase recommended.",
        website: "https://japanesegarden.org"
      }
      },
        {
        name: "Lan Su Chinese Garden",
        description: "Step out of Portland and into Ming Dynasty China at the Lan Su Chinese Garden. This authentic garden, built by artisans from Portland's sister city of Suzhou, is one of the most remarkable urban oases you'll ever encounter. It occupies a full city block in Old Town Chinatown and features a harmonious blend of art, architecture, and nature.\n\nWander through pavilions with curved tile roofs, cross ornate bridges over a central lake filled with koi, and admire intricate carvings and latticework. The garden is designed to be a series of composed scenes, offering a new, beautiful vista around every corner. Don't miss the teahouse, where you can savor traditional Chinese teas and snacks.",
        practicalInfo: {
        howToGetThere: "Located at 239 NW Everett St. Accessible via MAX Light Rail (Blue/Red/Green/Yellow lines) and multiple bus routes.",
        openingHours: "10:00 AM - 6:00 PM daily (seasonal variations apply)",
        cost: "Adults ~$14; discounts available.",
        website: "https://lansugarden.org"
      }
      },
        {
        name: "Explore the Food Cart Pods",
        description: "Portland's culinary scene is famously democratic, and nowhere is this more evident than in its legendary food cart pods. These clusters of stationary food trucks offer an astonishing variety of high-quality, affordable cuisine from around the globe. It's a quintessential Portland experience to graze your way through a pod, sampling everything from Thai street food to gourmet grilled cheese.\n\nWhile the iconic downtown pods have shifted, new hubs are thriving. Check out pods like Prost! Marketplace on N Mississippi, Hawthorne Asylum on SE Hawthorne, or Cartopia on SE 12th. Each pod has its own unique vibe and collection of vendors. Arrive hungry, bring friends, and prepare to be amazed by the creativity packed into these tiny kitchens.",
        practicalInfo: {
        howToGetThere: "Pods are located throughout the city. Popular areas include SE Division St, N Mississippi Ave, and SE Hawthorne Blvd.",
        openingHours: "Varies by cart and pod, but generally open for lunch and dinner.",
        cost: "Dishes typically range from $10-$18.",
        website: "https://www.travelportland.com/dining/food-carts/"
      }
      },
        {
        name: "Pittock Mansion",
        description: "For the best panoramic view of Portland, head up to the Pittock Mansion. This magnificent French Renaissance-style château was built in 1914 for Henry Pittock, the founder of The Oregonian newspaper. Today, it stands as a historic house museum, offering a glimpse into the city's past and its transformation from a pioneer town to a modern city.\n\nThe mansion's interior is beautifully preserved with period furnishings, but the main draw is the expansive lawn out front. On a clear day, the view is unparalleled, encompassing the downtown skyline, the Willamette River, and five Cascade Mountain peaks: Mount Hood, Mount St. Helens, Mount Adams, Mount Rainier, and Mount Jefferson.",
        practicalInfo: {
        howToGetThere: "Located at 3229 NW Pittock Dr. Driving is the easiest option (parking available). Limited public transit via bus line 20 with a steep uphill walk.",
        openingHours: "Daily 10:00 AM - 5:00 PM (closes earlier in winter).",
        cost: "Grounds are free. Mansion entry is ~$14.50 for adults.",
        website: "https://pittockmansion.org"
      }
      },
        {
        name: "Forest Park",
        description: "Escape into nature without leaving the city limits at Forest Park, one of the country's largest urban forests. Spanning more than 5,200 acres in the Tualatin Mountains, this massive park provides a critical habitat for hundreds of native wildlife and plant species. It's a sanctuary for hikers, trail runners, and anyone seeking a deep-woods experience just minutes from downtown.\n\nThe park features over 80 miles of trails and fire lanes, including the famous 30-mile Wildwood Trail, which is part of the city's 40-Mile Loop system. A popular access point is via the Lower Macleay Trail, which follows Balch Creek up to the historic 'Witch's Castle' stone house and connects to the Wildwood Trail.",
        practicalInfo: {
        howToGetThere: "Multiple access points. A popular starting point is the Lower Macleay Park entrance at NW 29th Ave & Upshur St.",
        openingHours: "5:00 AM - 10:00 PM daily",
        cost: "Free",
        website: "https://www.portland.gov/parks/forest-park"
      }
      },
        {
        name: "Alberta Arts District",
        description: "To experience Portland's creative, quirky soul, spend an afternoon in the Alberta Arts District. Located in Northeast Portland along NE Alberta Street, this vibrant neighborhood is a hub of independent galleries, colorful street art, unique boutiques, and excellent eateries. It's a fantastic place to shop for locally made goods and soak up the city's artistic energy.\n\nThe district is famous for its 'Last Thursday' event (currently on hiatus but check for its return), a monthly art walk and street fair. Even without the event, any day is a good day to explore. Look for the stunning murals that adorn many of the buildings, grab a Salt & Straw ice cream, and browse shops selling everything from handmade jewelry to vintage clothing.",
        practicalInfo: {
        howToGetThere: "Centered on NE Alberta St, between roughly NE 13th and NE 30th Aves. Accessible via bus routes 8 and 72.",
        openingHours: "Shop and restaurant hours vary, generally 11:00 AM - 7:00 PM.",
        cost: "Free to explore.",
        website: "https://albertamainst.org"
      }
      },
        {
        name: "Multnomah Falls",
        description: "While technically just outside Portland, no visit is complete without a trip to the magnificent Multnomah Falls. Located in the Columbia River Gorge National Scenic Area, this is Oregon's tallest waterfall, plunging 620 feet in two dramatic tiers. It's an iconic image of the Pacific Northwest and is surprisingly accessible.\n\nA paved trail leads to the Benson Bridge, which spans the gap between the two cascades, offering an up-close, misty view. For the more adventurous, a switchback trail continues to the top for a different perspective. The falls are immensely popular, so try to visit on a weekday or early in the morning to avoid the biggest crowds.",
        practicalInfo: {
        howToGetThere: "A 30-40 minute drive east of Portland on I-84. A timed-use permit is required during peak season (May-Sept). The Columbia Gorge Express bus also runs from Portland.",
        openingHours: "Grounds are generally open from dawn to dusk. Lodge has specific hours.",
        cost: "Free, but a timed-use permit ($2) is often required.",
        website: "https://www.fs.usda.gov/recarea/crgnsa/recarea/?recid=30026"
      }
      },
        {
        name: "Portland Saturday Market",
        description: "Experience the creative pulse of the city at the Portland Saturday Market, the largest continuously operated outdoor arts and crafts market in the United States. Despite its name, the market runs on both Saturdays and Sundays from March through Christmas Eve. Set up under the Burnside Bridge in the Old Town waterfront area, it's a bustling bazaar of local culture.\n\nYou'll find hundreds of booths selling an incredible array of handmade goods, from intricate jewelry and pottery to unique clothing and artwork. The market has a strict policy that all items must be sold by the people who made them. Combined with live music and a diverse food court, it's a vibrant and entertaining way to spend a weekend afternoon.",
        practicalInfo: {
        howToGetThere: "Located at 2 SW Naito Pkwy, along the waterfront. Easily accessible via MAX Light Rail (Skidmore Fountain station).",
        openingHours: "Saturdays 10:00 AM - 5:00 PM, Sundays 11:00 AM - 4:30 PM (March - December)",
        cost: "Free to enter.",
        website: "https://www.portlandsaturdaymarket.com"
      }
      },
        {
        name: "Tom McCall Waterfront Park",
        description: "Stretching along the Willamette River, Tom McCall Waterfront Park is Portland's front yard. This lush, 37-acre green space replaced a noisy freeway, reconnecting the city to its river. It's a popular spot for jogging, cycling, and leisurely strolls with views of the downtown skyline and the city's many bridges.\n\nThe park is also the heart of Portland's festival scene, hosting major events like the Waterfront Blues Festival, the Oregon Brewers Festival, and Cinco de Mayo. Be sure to see the Salmon Street Springs fountain, a popular spot to cool off in the summer, and the Japanese American Historical Plaza at the north end, a poignant memorial.",
        practicalInfo: {
        howToGetThere: "Runs along Naito Parkway in downtown Portland. Accessible from multiple MAX stations and bus routes.",
        openingHours: "5:00 AM - Midnight daily",
        cost: "Free",
        website: "https://www.portland.gov/parks/tom-mccall-waterfront-park"
      }
      },
        {
        name: "Mississippi Avenue",
        description: "For a taste of modern Portland cool, head to Mississippi Avenue in the North Portland neighborhood. This bustling street has transformed into one of the city's trendiest destinations, packed with independent shops, innovative restaurants, cozy cafes, and lively music venues like Mississippi Studios.\n\nHere you can browse for tax-free goods at unique stores like Paxton Gate (curiosities of nature) and The Meadow (specialty salts and chocolates), then relax at a craft brewery or cocktail bar. The area is also home to the Prost! Marketplace food cart pod, offering a great selection of eats in a convivial, beer-garden atmosphere. It's a perfect blend of old Portland charm and new Portland energy.",
        practicalInfo: {
        howToGetThere: "Centered on N Mississippi Ave. Accessible via bus line 4.",
        openingHours: "Shops generally open mid-morning to early evening; restaurants and bars stay open late.",
        cost: "Free to explore.",
        website: "https://www.travelportland.com/neighborhoods/mississippi/"
      }
      },
        {
        name: "Oregon Museum of Science and Industry (OMSI)",
        description: "A playground for the curious of all ages, the Oregon Museum of Science and Industry (OMSI) is one of the nation's leading science centers. Located on the east bank of the Willamette River, its massive complex includes five halls filled with hundreds of interactive exhibits, a planetarium, a giant-screen theater, and even a real US Navy submarine you can tour.\n\nExhibits cover everything from physics and chemistry to earth science and technology. You can experience a simulated earthquake, conduct hands-on lab experiments, or explore the universe in the planetarium. OMSI makes science accessible and fun, making it an ideal destination for families or anyone with an inquisitive mind.",
        practicalInfo: {
        howToGetThere: "Located at 1945 SE Water Ave. Accessible via the Portland Streetcar (A & B Loops) and bus line 6.",
        openingHours: "Tuesday - Sunday: 10:00 AM - 5:00 PM. Check website for current hours.",
        cost: "Adults ~$19; various add-ons for theater, submarine, and special exhibits.",
        website: "https://omsi.edu"
      }
      },
        {
        name: "Hoyt Arboretum",
        description: "Often called Portland's 'living museum of trees,' the Hoyt Arboretum is another gem within the greater Washington Park area. This 190-acre sanctuary is home to over 2,300 species of trees and shrubs from six continents, many of which are endangered in their native habitats. It's a peaceful and educational place for a walk in the woods.\n\nTwelve miles of hiking trails wind through diverse groves, with signs identifying the different tree species. You can wander through collections of magnolias, redwoods, and flowering cherries. The visitor center provides maps and information about what's currently in bloom or showing autumn color. It's a beautiful, quiet alternative to the more crowded gardens nearby.",
        practicalInfo: {
        howToGetThere: "Located in Washington Park. Use the free seasonal park shuttle or drive (paid parking).",
        openingHours: "Grounds: 5:00 AM - 10:00 PM; Visitor Center: 9:00 AM - 4:00 PM",
        cost: "Free to enter; paid parking.",
        website: "https://www.hoytarboretum.org"
      }
      },
        {
        name: "Hawthorne District",
        description: "Embodying Portland's vintage, bohemian vibe, the Hawthorne District is a neighborhood that invites leisurely exploration. Stretching along SE Hawthorne Boulevard, it's a paradise for thrift shoppers, antique hunters, and fans of counter-culture. You'll find a fantastic mix of funky second-hand stores, independent movie theaters like the Bagdad Theater & Pub, and quirky gift shops.\n\nThe food scene is equally eclectic, with long-standing vegan restaurants, cozy cafes, and popular food cart pods. Hawthorne is less about specific landmarks and more about the overall atmosphere. It's the perfect place to grab a coffee, browse for hours, and observe the wonderfully diverse street style that defines this part of Portland.",
        practicalInfo: {
        howToGetThere: "Centered on SE Hawthorne Blvd, primarily between SE 30th and SE 50th Aves. Accessible via bus lines 14 and 10.",
        openingHours: "Varies by establishment; shops typically open late morning.",
        cost: "Free to explore.",
        website: "https://www.travelportland.com/neighborhoods/hawthorne/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Portland has an excellent public transportation system, TriMet, which includes the MAX Light Rail, WES Commuter Rail, streetcar, and an extensive bus network. Downtown and the Pearl District are very walkable. The city is famously bike-friendly, with numerous bike lanes and the BIKETOWN bike-share program. For destinations like Washington Park or Pittock Mansion, ride-sharing services or driving may be more convenient.",
        whereToStay: "For first-time visitors, Downtown or the adjacent Pearl District offer central access to top attractions like Powell's and the waterfront, with a range of upscale and mid-range hotels (e.g., The Nines, The Hoxton). For a more boutique and charming experience, try the Alphabet District/Nob Hill (e.g., Inn at Northrup Station). To live like a local, stay on the Eastside in neighborhoods like Hawthorne or Alberta for quirky Airbnbs and smaller inns.",
        bestTimeToVisit: "The best time to visit Portland is during the summer (June to September) for warm, dry, and sunny weather, perfect for enjoying the city's parks and outdoor festivals. However, this is also the busiest season. Spring (April-May) is beautiful with blooming flowers, including the cherry blossoms and roses. Fall (October) offers lovely autumn colors and fewer crowds. Winter (November-March) is cool and rainy, but ideal for cozying up in coffee shops, breweries, and bookstores.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: Downtown & Pearl District. Start at Powell's City of Books, walk to the Lan Su Chinese Garden, then stroll along Tom McCall Waterfront Park. Grab lunch at a downtown food cart pod.\nDay 2: Washington Park & Heights. Spend the day exploring Washington Park. Visit the Portland Japanese Garden, then the International Rose Test Garden. End the day with panoramic views from Pittock Mansion.\nDay 3: Eastside Exploration or Gorge Trip. Option 1: Explore the quirky shops and murals of the Alberta Arts District or the vintage stores of the Hawthorne District. Option 2: Take a half-day trip to the Columbia River Gorge to see the magnificent Multnomah Falls."
      }}
      faqs={[{
          question: "Is Portland expensive?",
          answer: "Portland is moderately expensive compared to other US cities. It's generally more affordable than places like New York City or San Francisco, but accommodation and dining costs can add up. You can save money by eating at the amazing and budget-friendly food carts, utilizing the efficient public transport system, and enjoying the many free parks and gardens. Oregon has no sales tax, which provides a nice discount on all shopping."
        },
        {
          question: "How many days do you need in Portland?",
          answer: "Three to four days is an ideal amount of time to get a good feel for Portland. This allows you to explore the main downtown sights, spend a day in the beautiful parks of the West Hills, and experience the unique vibe of at least one Eastside neighborhood. If you plan to take day trips to the Columbia River Gorge, Mount Hood, or the Oregon Coast, plan on five to seven days."
        },
        {
          question: "Is Portland safe?",
          answer: "Like any major American city, Portland is generally safe for tourists, especially in the main visitor areas. However, it's wise to be aware of your surroundings. Petty theft can occur, so keep valuables secure. Some areas, like parts of Old Town and certain downtown blocks, can have a visible homeless population and may feel uncomfortable at night. Stick to well-lit, populated streets after dark and use standard urban precautions."
        },
        {
          question: "What is Portland famous for?",
          answer: "Portland is famous for its 'Keep Portland Weird' ethos, reflecting a culture of individuality and creativity. It's renowned for its world-class food scene, especially its pioneering food carts, craft breweries, and specialty coffee roasters. Nicknamed the 'City of Roses,' it's also famous for its lush parks and gardens. Finally, its proximity to stunning natural landscapes like the Columbia River Gorge and Mount Hood makes it a gateway to outdoor adventure."
        }
      ]}
    />
  );
};