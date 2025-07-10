import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Kigali: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Kigali, Rwanda (2025 Guide)"}
      description={"Welcome to Kigali, the vibrant heart of Rwanda. Perched across rolling hills, this city has undergone a remarkable transformation, emerging as one of Africa's cleanest, safest, and most forward-thinking capitals. Its immaculate streets, lush greenery, and thriving arts scene are a testament to the resilience and unity of the Rwandan people. Beyond its poignant history, Kigali offers a dynamic blend of modern innovation and rich cultural heritage. From bustling markets and contemporary art galleries to world-class coffee and serene nature escapes, there's a surprising depth to explore. Whether you're here to reflect on the past or celebrate the present, you'll find that the best things to do in Kigali offer a profound and inspiring journey. Prepare to be charmed by the 'Land of a Thousand Hills' and its welcoming capital."}
      imageUrl={""}
      highlights={["Kigali Genocide Memorial",
        "Kimironko Market",
        "Inema Arts Center",
        "Nyamirambo Women's Center",
        "Campaign Against Genocide Museum"]}
      galleryImages={[
        { url: "", alt: "Kigali landmark 1", caption: "Kigali landmark 1 - placeholder" },
        { url: "", alt: "Kigali landmark 2", caption: "Kigali landmark 2 - placeholder" },
        { url: "", alt: "Kigali landmark 3", caption: "Kigali landmark 3 - placeholder" },
        { url: "", alt: "Kigali landmark 4", caption: "Kigali landmark 4 - placeholder" },
        { url: "", alt: "Kigali landmark 5", caption: "Kigali landmark 5 - placeholder" },
        { url: "", alt: "Kigali landmark 6", caption: "Kigali landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Kigali Genocide Memorial",
        description: "An essential and deeply moving experience, the Kigali Genocide Memorial serves as a place of remembrance for the over one million victims of the 1994 Genocide against the Tutsi. The main exhibit guides visitors through the historical context leading up to the genocide, the horrific events themselves, and the ongoing process of reconciliation and rebuilding. It is a powerful, somber, and impeccably curated institution that provides crucial context for understanding modern Rwanda.\n\nBeyond the main exhibits, the memorial includes gardens for quiet reflection, mass graves where over 250,000 victims are interred, and a children's memorial. While emotionally challenging, a visit here is fundamental to appreciating the resilience and progress of the nation. It is a place of remembrance, education, and a testament to the enduring human spirit.",
        practicalInfo: {
        howToGetThere: "Located in Gisozi, a short moto-taxi or car ride from the city center.",
        openingHours: "8:00 AM - 5:00 PM (last entrance at 4:00 PM). Closed on the last Saturday of each month for Umuganda (community work).",
        cost: "Free entry, but a donation is highly recommended. Audio guides are available for a fee (approx. $15 USD).",
        website: "https://www.kgm.rw/"
      }
      },
        {
        name: "Kimironko Market",
        description: "Dive into the vibrant pulse of local life at Kimironko Market, Kigali's largest and busiest public market. This sprawling, covered complex is a sensory explosion of colors, sounds, and smells. One section is dedicated to fresh produce, with mountains of avocados, plantains, and tropical fruits. Another is a labyrinth of tailors working on sewing machines, surrounded by colorful Kitenge fabrics from across Africa. You can choose a fabric and have custom clothing made in a matter of hours.\n\nNavigate further to find everything from secondhand clothing and shoes to household goods, spices, and traditional crafts. It’s a fantastic place to practice your bargaining skills (politely, of course) and purchase authentic souvenirs. The energy is infectious, offering a genuine slice of daily Rwandan life.",
        practicalInfo: {
        howToGetThere: "Located in the Kimironko neighborhood. Easily accessible by moto-taxi from anywhere in the city.",
        openingHours: "Daily, approximately 8:00 AM - 8:00 PM.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Inema Arts Center",
        description: "Founded by two self-taught brothers, Inema Arts Center is at the forefront of Kigali's burgeoning contemporary art scene. This dynamic gallery showcases the work of ten resident artists, featuring a diverse collection of paintings, sculptures, and mixed-media pieces that reflect modern Rwanda. The art is bold, vibrant, and thought-provoking, often incorporating traditional themes with a contemporary twist.\n\nThe center is more than just a gallery; it's a creative hub. It hosts workshops, dance performances, and yoga classes. Visiting Inema provides a fantastic opportunity to meet local artists, discuss their work, and purchase a unique piece of Rwandan art to take home.",
        practicalInfo: {
        howToGetThere: "Located in the Kacyiru neighborhood.",
        openingHours: "Daily, 9:00 AM - 7:00 PM.",
        cost: "Free to enter.",
        website: "http://www.inemaartcenter.com/"
      }
      },
        {
        name: "Nyamirambo Women's Center",
        description: "For an authentic cultural immersion, visit the Nyamirambo Women's Center. This fantastic local NGO, located in Kigali's oldest and most multicultural neighborhood, aims to provide education and vocational training to disadvantaged women. They offer some of the city's best community-based tourism experiences.\n\nJoin one of their guided walking tours through Nyamirambo to visit local homes, businesses, and a hair salon, and learn about daily life. You can also participate in a traditional cooking class, where you'll help prepare and then share a delicious Rwandan meal, or try your hand at sisal basket weaving. All proceeds go directly back into the community, funding literacy programs and a community library.",
        practicalInfo: {
        howToGetThere: "Located in the Nyamirambo neighborhood. Bookings are essential for tours and classes.",
        openingHours: "Monday - Saturday: 8:00 AM - 5:00 PM. Tours and classes run at scheduled times.",
        cost: "Walking tours are approx. $20 USD; cooking classes are approx. $30 USD.",
        website: "https://www.nwc-kigali.org/"
      }
      },
        {
        name: "Campaign Against Genocide Museum",
        description: "Housed within the Rwandan Parliament building, the Campaign Against Genocide Museum offers a different but complementary perspective to the Kigali Genocide Memorial. This museum focuses on the military story of the Rwanda Patriotic Front (RPF) and their campaign to stop the genocide and liberate the country. The exhibits detail the strategic decisions and heroic actions taken during the 100-day conflict.\n\nThe building itself is historically significant, as it was a key RPF stronghold during the war and still bears the scars of bullets and shelling. The rooftop offers panoramic views and a monument, providing a poignant backdrop to the story of a nation fighting for its future.",
        practicalInfo: {
        howToGetThere: "Located in the Parliament Building in Kimihurura.",
        openingHours: "Daily, 8:00 AM - 5:00 PM.",
        cost: "Approx. 7,000 RWF for foreign nationals.",
        website: "http://museum.gov.rw/index.php?id=2"
      }
      },
        {
        name: "Question Coffee Cafe",
        description: "Rwanda is renowned for its high-quality Arabica coffee, and there's no better place to sample it than Question Coffee Cafe. This is not just a coffee shop; it's the flagship cafe for a social enterprise that supports and empowers thousands of female coffee farmers across the country. The baristas are expertly trained and passionate about their craft, ready to explain the different brewing methods and bean origins.\n\nRelax in the beautiful garden setting and enjoy a perfectly prepared latte, pour-over, or cold brew. They also offer 'crop-to-cup' coffee experiences where you can learn about the entire coffee process, from farming and processing to roasting and tasting. It's a delicious way to support a fantastic local initiative.",
        practicalInfo: {
        howToGetThere: "Located in Gishushu, near the Kigali Convention Centre.",
        openingHours: "Monday - Saturday: 7:00 AM - 7:00 PM; Sunday: 8:00 AM - 5:00 PM.",
        cost: "Coffee prices are similar to Western specialty cafes.",
        website: "https://www.questioncoffee.com/"
      }
      },
        {
        name: "Kandt House Museum",
        description: "Once the home of German explorer Dr. Richard Kandt, the first colonial governor of Rwanda, this museum is one of Kigali's original modern buildings. The Kandt House Museum offers a fascinating look at Rwanda's history during the German and Belgian colonial periods. The exhibits present life before, during, and after colonization.\n\nPerhaps the most compelling part of the museum is the annex dedicated to Rwanda's natural history. Here you'll find exhibits on the country's unique geology, flora, and fauna, including a popular exhibit with live snakes. The museum's location on a hill also provides excellent views of the surrounding city.",
        practicalInfo: {
        howToGetThere: "Located in the Nyarugenge district, a short walk from the city center.",
        openingHours: "Daily, 8:00 AM - 5:00 PM.",
        cost: "Approx. 6,000 RWF for foreign nationals.",
        website: "http://museum.gov.rw/index.php?id=2"
      }
      },
        {
        name: "Mount Kigali",
        description: "For the best panoramic views of the city, take a trip up Mount Kigali. Despite its name, it's more of a large hill, making it an accessible hike or a short moto-taxi ride to the top. The journey up winds through charming rural communities, offering a glimpse of life on the city's outskirts. Once at the summit, you're rewarded with breathtaking 360-degree views of Kigali's sprawling hills and valleys.\n\nAt the top, you'll find Fazenda Sengha, an equestrian center offering horseback riding trails with incredible vistas. There's also a casual restaurant and bar, making it a perfect spot to watch the sunset over the city with a cold drink in hand. It's a great escape from the urban hustle without having to travel far.",
        practicalInfo: {
        howToGetThere: "Take a moto-taxi or car to the summit. For hikers, trails start from the Nyamirambo neighborhood.",
        openingHours: "Accessible 24/7; businesses at the top have their own hours.",
        cost: "Free to hike. Moto-taxi fare is a few thousand RWF.",
        website: "N/A"
      }
      },
        {
        name: "Caplaki Craft Village",
        description: "If you're looking for a one-stop-shop for souvenirs, the Caplaki Craft Village in Rugunga is the place to go. This cooperative market consists of numerous wooden stalls, each run by a different vendor, offering a wide array of Rwandan and East African handicrafts. You can find everything from carved wooden gorillas and traditional masks to colorful woven baskets, jewelry, and paintings.\n\nWhile some items can be found in other markets, the convenience and concentration of goods here are unmatched. Be prepared to bargain, as it's part of the shopping experience. It's an excellent place to find gifts and mementos of your trip while supporting local artisans.",
        practicalInfo: {
        howToGetThere: "Located in the Rugunga neighborhood, near the city center.",
        openingHours: "Daily, approximately 8:00 AM - 8:00 PM.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Hotel des Mille Collines",
        description: "Famed for its role in the 1994 genocide, as depicted in the film 'Hotel Rwanda', the Hotel des Mille Collines is a site of significant historical importance. During the genocide, its manager, Paul Rusesabagina, sheltered over 1,200 people within its walls. Today, it operates as a luxury hotel, but visitors are welcome to visit its common areas.\n\nYou can have a drink at the poolside bar or dinner at the panoramic restaurant, reflecting on the history that unfolded here. While it has been fully renovated, the atmosphere remains poignant. It stands as a symbol of both immense bravery and the horrors of the past, offering a tangible connection to one of the most well-known stories of the genocide.",
        practicalInfo: {
        howToGetThere: "Centrally located in the Kiyovu neighborhood.",
        openingHours: "Open 24/7. Non-guests are welcome in the restaurants and bars.",
        cost: "Free to enter; food and drink prices are at hotel rates.",
        website: "https://www.millecollines.rw/"
      }
      },
        {
        name: "Nyandungu Eco-Park",
        description: "A stunning example of urban conservation, the Nyandungu Eco-Park transformed a degraded wetland into a 121-hectare sanctuary for nature and recreation. The park features beautifully constructed walkways and bike paths that wind through native forests, papyrus swamps, and bamboo groves. It's a haven for birdwatchers, with over 70 species recorded, and a peaceful escape for anyone looking to connect with nature within the city limits.\n\nThe park's creation is part of Rwanda's broader commitment to environmental protection and sustainable development. It's an ideal spot for a morning jog, a leisurely walk, or a family picnic, showcasing how urban spaces can coexist with and restore natural ecosystems.",
        practicalInfo: {
        howToGetThere: "Located between Kimironko and Ndera, easily accessible by car or moto-taxi.",
        openingHours: "Daily, 6:00 AM - 6:00 PM.",
        cost: "Entry fees apply for different activities (walking, cycling).",
        website: "https://www.rema.gov.rw/our-work/projects/nyandungu-urban-wetland-eco-tourism-park"
      }
      },
        {
        name: "Rwanda Art Museum",
        description: "Located in the former Presidential Palace on the outskirts of Kigali, the Rwanda Art Museum offers a unique blend of art and history. The museum showcases a collection of contemporary art from both Rwandan and international artists. The pieces rotate, providing a fresh perspective on the creative landscape of the region.\n\nHowever, a major draw is the building itself. This was the home of President Juvénal Habyarimana, whose plane crash on April 6, 1994, was a key trigger for the genocide. Visitors can tour the palace and even see the debris from the plane crash, which still lies in the garden. It's a surreal and fascinating site that provides another layer to understanding Rwanda's complex history.",
        practicalInfo: {
        howToGetThere: "Located near Kigali International Airport in Kanombe.",
        openingHours: "Daily, 8:00 AM - 5:00 PM.",
        cost: "Approx. 6,000 RWF for foreign nationals.",
        website: "http://museum.gov.rw/index.php?id=2"
      }
      },
        {
        name: "Belgian Peacekeepers Memorial (Camp Kigali)",
        description: "This stark and powerful memorial is located at the site where ten Belgian UN peacekeepers were murdered on April 7, 1994. The soldiers were captured while protecting the Prime Minister, and their deaths led to the withdrawal of the UN peacekeeping force, leaving Rwandan civilians unprotected.\n\nThe memorial consists of a small, bullet-scarred building where the soldiers made their last stand. Outside, ten stone pillars stand in a solemn line, one for each soldier, with horizontal lines carved into them to mark their age. It is a simple, poignant, and often overlooked site that powerfully conveys the international failure during the genocide's early days.",
        practicalInfo: {
        howToGetThere: "Located in the city center, an easy walk or moto-taxi ride from Kiyovu.",
        openingHours: "Generally open during daylight hours; it's an open-air site with a guard.",
        cost: "Free, though a small tip for the on-site guide/guard is appreciated.",
        website: "N/A"
      }
      },
        {
        name: "Umusambi Village",
        description: "Umusambi Village is a beautiful nature reserve and bird sanctuary dedicated to the conservation of the endangered Grey Crowned Crane. Located on a restored wetland on the edge of Kigali, the village provides a safe home for over 50 cranes that have been rescued from illegal captivity. These majestic birds, unable to be released back into the wild, now roam freely in a stunning natural habitat.\n\nA visit involves a peaceful walk along well-maintained paths and boardwalks that meander through the marshland. It's a fantastic spot for birdwatching and photography, offering a tranquil experience and a chance to support vital conservation work. The on-site visitor center provides educational information about the cranes and the importance of wetland restoration.",
        practicalInfo: {
        howToGetThere: "Located a short drive from the city center, near Masaka.",
        openingHours: "Daily, 8:00 AM - 5:00 PM.",
        cost: "Entrance fee of approx. $20 USD for foreign nationals.",
        website: "https://www.umusambivillage.org/"
      }
      },
        {
        name: "Explore the Kiyovu Neighborhood",
        description: "Take a leisurely stroll through Kiyovu, one of Kigali's oldest, leafiest, and most affluent neighborhoods. Known for its quiet, winding roads, lush gardens, and charming mix of old colonial-era villas and modern mansions, it offers a peaceful contrast to the city's more bustling districts. Many embassies and high-end hotels, including the Hotel des Mille Collines, are located here.\n\nWalking through Kiyovu allows you to appreciate the city's 'garden city' feel. The roads are impeccably clean and lined with flowering trees. It's a great area for a morning run or an afternoon walk, with several excellent cafes and restaurants tucked away where you can stop for a break. This self-guided exploration offers a glimpse into the serene and polished side of Kigali life.",
        practicalInfo: {
        howToGetThere: "Centrally located, just west of the main business district. Best explored on foot.",
        openingHours: "Accessible 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Getting around Kigali is easy and affordable. The most popular mode of transport is the 'moto-taxi,' a motorcycle taxi. They are quick, cheap, and drivers provide helmets. Always agree on the price before you start. For more comfort, regular car taxis are available, as are ride-hailing apps like Yego and Move, which offer both motos and cars with standardized pricing. The city is known for its orderly traffic and well-paved roads, making getting around a pleasant experience.",
        whereToStay: "Kigali offers a range of accommodation for all budgets. Kiyovu is an upscale, central neighborhood with luxury hotels and quiet streets. Kimihurura is popular with expats and foodies, known for its high concentration of excellent restaurants and bars. Nyamirambo offers a more vibrant, local experience with budget-friendly guesthouses. Top recommendations include The Retreat (luxury), Kigali Serena Hotel (upscale), and Mijo Hostel (budget-friendly).",
        bestTimeToVisit: "Kigali's high altitude gives it a pleasant, temperate climate year-round. The best times to visit are during the two dry seasons: the long dry season from June to September, and the shorter one from December to February. These periods offer sunny days perfect for exploring. The rainy seasons (March-May and October-November) bring heavy but usually short-lived downpours.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: History & Remembrance. Start with a profound visit to the Kigali Genocide Memorial. In the afternoon, explore the Campaign Against Genocide Museum and the Belgian Peacekeepers Memorial.\nDay 2: Culture & Arts. Take a morning walking tour and cooking class with the Nyamirambo Women's Center. Spend the afternoon browsing at Inema Arts Center and shopping for fabrics and souvenirs at Kimironko Market.\nDay 3: Nature, Coffee & Views. Hike or take a moto to the top of Mount Kigali for panoramic city views. Afterwards, relax and enjoy a world-class coffee at Question Coffee Cafe or take a nature walk at Nyandungu Eco-Park."
      }}
      faqs={[{
          question: "Is Kigali expensive?",
          answer: "Kigali can be very affordable, but it also caters to luxury travelers. Local food at small restaurants is very cheap ($3-5 per meal), while dining at international restaurants in areas like Kimihurura is more expensive ($15-30 per meal). Moto-taxis are the most budget-friendly way to get around, with most trips within the city costing less than $2. Accommodation ranges from budget hostels to high-end luxury hotels, so you can tailor your costs to your budget."
        },
        {
          question: "How many days do you need in Kigali?",
          answer: "Three full days is an ideal amount of time to explore Kigali's main attractions without feeling rushed. This allows for one day dedicated to the poignant historical sites, one day for cultural immersion and markets, and a third day for nature, coffee, and relaxation. If you are using Kigali as a base for day trips, you might want to add another day or two."
        },
        {
          question: "Is Kigali safe?",
          answer: "Kigali is widely regarded as one of the safest capital cities in Africa. Crime rates are very low, and the city is exceptionally clean and orderly. It is safe to walk around during the day and in many areas at night. Standard travel precautions should still be taken: be aware of your surroundings, don't flash valuables, and use trusted transportation at night. Rwandans are generally very welcoming and helpful to tourists."
        },
        {
          question: "What is Kigali famous for?",
          answer: "Kigali is famous for its incredible transformation, cleanliness, and safety. It's renowned as a symbol of Rwanda's post-genocide recovery and progress. The city is also known for its 'Land of a Thousand Hills' landscape, vibrant contemporary art scene, thriving specialty coffee culture, and its city-wide ban on plastic bags, which contributes to its remarkable cleanliness. It also serves as the primary gateway to Rwanda's famous national parks, home to mountain gorillas."
        }
      ]}
    />
  );
};