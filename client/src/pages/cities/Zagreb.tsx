import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Zagreb: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Zagreb, Croatia (2025 Guide)"}
      description={"Welcome to Zagreb, Croatia's vibrant and often-overlooked capital. A city of contrasts, Zagreb seamlessly blends the grandeur of its Austro-Hungarian past with a lively, modern energy. Its historic Upper Town (Gornji Grad) boasts cobblestone streets and gas lamps, while the Lower Town (Donji Grad) is a hub of bustling cafes, green parks, and impressive museums. Unlike its coastal counterparts, Zagreb offers a continental charm, a world-class café culture, and a burgeoning culinary scene. Whether you're exploring quirky museums, strolling through lush parks, or simply sipping coffee like a local, you'll find that the city's heart lies in its everyday rhythm. This guide will walk you through all the very best things to do in Zagreb, ensuring you experience the authentic spirit of this captivating European capital."}
      highlights={["Zagreb Cathedral",
        "St. Mark's Church",
        "Museum of Broken Relationships",
        "Dolac Market",
        "Upper Town (Gornji Grad)"]}
      attractions={[
        {
        name: "Zagreb Cathedral",
        description: "The Cathedral of the Assumption of the Blessed Virgin Mary, simply known as Zagreb Cathedral, is a monumental landmark and the tallest building in Croatia. Its twin spires, currently under restoration after recent earthquakes, dominate the city skyline. This Gothic masterpiece has a rich history dating back to the 11th century, having been rebuilt multiple times.\n\nInside, you'll find a stunning treasury containing priceless religious artifacts, beautiful stained-glass windows, and the tomb of Cardinal Alojzije Stepinac. The sheer scale and intricate details of the architecture make it a spiritual and historical anchor for the city, and a visit is essential to understanding Zagreb's heritage.",
        practicalInfo: {
        howToGetThere: "Located at Kaptol 31, it's a short walk from the main Ban Jelačić Square.",
        openingHours: "Typically 10:00 AM - 5:00 PM (Mon-Sat), 1:00 PM - 5:00 PM (Sun). Check for service times.",
        cost: "Free admission to the cathedral; a small fee may apply for the treasury.",
        website: "https://www.zupa-katedrala-zagreb.hr/"
      }
      },
        {
        name: "St. Mark's Church",
        description: "Instantly recognizable by its vibrant, tiled roof, St. Mark's Church is one of Zagreb's most emblematic buildings. Located in the heart of the Upper Town in St. Mark's Square, the church's roof beautifully displays the medieval coat of arms of Croatia, Dalmatia, and Slavonia on the left, and the emblem of the city of Zagreb on the right.\n\nThe church itself dates back to the 13th century, with a Gothic portal that is considered the most valuable in Southern Europe. While the interior is often closed to tourists except during mass, the exterior alone is worth the visit. The square is also home to the Croatian Parliament and the Government Palace, making it the political center of the country.",
        practicalInfo: {
        howToGetThere: "Located in St. Mark's Square in the Upper Town (Gornji Grad). Accessible by walking or the funicular.",
        openingHours: "Exterior is always accessible. Interior access is limited to mass times.",
        cost: "Free.",
        website: "https://www.infozagreb.hr/"
      }
      },
        {
        name: "Museum of Broken Relationships",
        description: "One of the most innovative and poignant museums in the world, the Museum of Broken Relationships is a must-visit for a truly unique experience. This award-winning museum showcases a collection of personal objects, each accompanied by a brief story, donated by anonymous people from around the globe. The items represent the remnants of past relationships, ranging from humorous and quirky to deeply touching and heartbreaking.\n\nIt’s a powerful exploration of love, loss, and the human condition. Unlike traditional museums, this space creates a powerful emotional connection with visitors, reminding us of the universal experiences that bind us together. It's thought-provoking, beautifully curated, and surprisingly uplifting.",
        practicalInfo: {
        howToGetThere: "Ćirilometodska 2, located in the Upper Town, near St. Mark's Church.",
        openingHours: "10:00 AM - 9:00 PM daily.",
        cost: "Around €7 per adult.",
        website: "https://brokenships.com/"
      }
      },
        {
        name: "Dolac Market",
        description: "Known as the \"Belly of Zagreb,\" Dolac Market is the city's vibrant central marketplace. Located just a few steps from the main square, this bustling market is a feast for the senses. Its most iconic feature is the sea of red umbrellas shading the outdoor stalls, where local farmers sell fresh fruits, vegetables, and flowers. Below, in the covered section, you'll find butchers, fishmongers, and vendors selling homemade cheese, honey, pasta, and other local delicacies.\n\nIt's the perfect place to experience local life, sample fresh produce, and pick up authentic Croatian products. The energy is infectious, and it offers a genuine taste of Zagreb's daily culture. Be sure to try some 'sir i vrhnje' (cottage cheese and cream), a local specialty.",
        practicalInfo: {
        howToGetThere: "Centrally located just above Ban Jelačić Square.",
        openingHours: "Daily, approximately 7:00 AM to 2:00 PM. Best to go in the morning for the freshest selection.",
        cost: "Free to browse.",
        website: "https://www.trznice-zg.hr/"
      }
      },
        {
        name: "Upper Town (Gornji Grad)",
        description: "Gornji Grad is Zagreb's historic core, a charming district of cobblestone streets, gas-lit lanterns (which are still lit by hand every evening), and medieval architecture. It feels like stepping back in time. This is where you'll find many of the city's key landmarks, including St. Mark's Church, the Croatian Parliament, the Museum of Broken Relationships, and Lotrščak Tower.\n\nWandering through its quiet alleys and picturesque squares is an attraction in itself. You can reach the Upper Town by a steep walk or by taking the historic Zagreb Funicular. The views over the Lower Town and the Cathedral from the Strossmayer Promenade are simply breathtaking, especially at sunset.",
        practicalInfo: {
        howToGetThere: "Accessible on foot from Ban Jelačić Square or via the Zagreb Funicular from Tomićeva Street.",
        openingHours: "Always accessible.",
        cost: "Free to explore.",
        website: "https://www.infozagreb.hr/&lang=en"
      }
      },
        {
        name: "Zagreb Funicular",
        description: "Connecting the Lower Town (Donji Grad) with the Upper Town (Gornji Grad), the Zagreb Funicular is one of the shortest public-transport funiculars in the world. With a track length of only 66 meters, the ride takes just 64 seconds. Despite its short duration, it's a beloved city icon and a charming way to avoid the steep climb on foot.\n\nIn operation since 1890, it has retained its original appearance and construction, making it the oldest form of public transport in Zagreb. Taking a ride offers a quaint, nostalgic experience and saves you a bit of energy for exploring the historic Upper Town.",
        practicalInfo: {
        howToGetThere: "The lower station is on Tomićeva Street, off the main Ilica street. The upper station is at the base of Lotrščak Tower.",
        openingHours: "Daily, every 10 minutes from 6:30 AM to 10:00 PM.",
        cost: "Less than €1 for a one-way ticket.",
        website: "https://www.zet.hr/turisticka-ponuda/uspinjaca/627"
      }
      },
        {
        name: "Museum of Contemporary Art",
        description: "For a dose of modern culture, head to the Museum of Contemporary Art (MSU) in Novi Zagreb. Housed in a striking modern building, the museum showcases an impressive collection of Croatian and international contemporary art from the 1950s to the present day. Its exhibitions are dynamic and often feature interactive installations, multimedia works, and thought-provoking pieces.\n\nEven if you're not an art aficionado, the museum's architecture and permanent installations, like Carsten Höller's 'Double Slide', make it a fun and engaging visit. It provides a fascinating contrast to the historic atmosphere of the city center.",
        practicalInfo: {
        howToGetThere: "Located at Avenija Dubrovnik 17 in Novi Zagreb. Easily accessible by tram lines 6, 7, or 14 from the city center.",
        openingHours: "11:00 AM - 7:00 PM (Tue-Sun), closed Mondays.",
        cost: "Around €6 per adult.",
        website: "https://www.msu.hr/en/"
      }
      },
        {
        name: "Maksimir Park and Zagreb Zoo",
        description: "Maksimir Park is Zagreb's oldest and largest public park, a perfect urban oasis for a relaxing afternoon. Opened in 1794, it was one of the first public parks in southeast Europe. It features vast meadows, dense oak forests, five lakes, and several charming 19th-century structures like the Echo Pavilion and the Bellevue Belvedere.\n\nNestled within the park is the Zagreb Zoo, home to hundreds of animal species, including snow leopards, red pandas, and okapis. The combination of the beautifully landscaped English-style park and the well-maintained zoo makes it an ideal destination for families, nature lovers, or anyone looking to escape the city bustle.",
        practicalInfo: {
        howToGetThere: "Take tram lines 4, 5, 7, 11, or 12 eastbound from the city center to the Bukovačka stop.",
        openingHours: "Park is always open. Zoo hours vary by season, typically 9:00 AM to 6:00 PM in summer.",
        cost: "Park admission is free. Zoo tickets are around €4.",
        website: "https://zoo.hr/en/"
      }
      },
        {
        name: "Mirogoj Cemetery",
        description: "While visiting a cemetery might not be on every travel itinerary, Mirogoj is an exception. Considered one of the most beautiful cemeteries in Europe, it's more like an open-air art gallery and park. Designed by the famed architect Hermann Bollé, its majestic arcades, cupolas, and lush greenery create a serene and monumental atmosphere.\n\nMirogoj is the final resting place for many of Croatia's most famous figures, and it's notable for being an interdenominational cemetery where Catholic, Orthodox, Muslim, and Jewish graves lie side by side. A walk along its ivy-covered walls and grand arcades is a peaceful and unexpectedly beautiful experience.",
        practicalInfo: {
        howToGetThere: "Take bus 106 from the Kaptol terminal (near the Cathedral).",
        openingHours: "Daily, 6:00 AM - 8:00 PM (April-Sept), 7:30 AM - 6:00 PM (Oct-Mar).",
        cost: "Free.",
        website: "https://www.gradskagroblja.hr/"
      }
      },
        {
        name: "Lotrščak Tower and Grič Cannon",
        description: "For the best panoramic views of Zagreb, climb the Lotrščak Tower. This fortified tower dates back to the 13th century and was built to guard the southern gate of the Gradec town wall. The climb to the top is rewarded with stunning 360-degree views of the entire city, including the Cathedral, St. Mark's Church, and the sprawling Lower Town.\n\nBe prepared for a daily tradition: every day at noon, the Grič Cannon is fired from one of the tower's windows. This tradition, dating back to 1877, was intended to signal the city's bell-ringers. The loud boom reverberates across the city and is a beloved local quirk. Arrive just before noon to witness it up close (but cover your ears!).",
        practicalInfo: {
        howToGetThere: "Located at the top of the Zagreb Funicular in the Upper Town.",
        openingHours: "9:00 AM - 9:00 PM (Mon-Fri), 10:00 AM - 7:00 PM (Sat-Sun).",
        cost: "A small fee of around €3 to climb the tower.",
        website: "https://www.gkd.hr/kula-lotrscak/"
      }
      },
        {
        name: "Croatian National Theatre",
        description: "An architectural gem in the heart of the Lower Town, the Croatian National Theatre (HNK Zagreb) is a cultural centerpiece. Designed by Viennese architects Fellner and Helmer and opened in 1895 by Emperor Franz Joseph I, this magnificent neo-baroque building is a sight to behold. Its striking yellow facade and ornate interiors host world-class opera, ballet, and drama performances.\n\nEven if you don't catch a show, it's worth walking around the building to admire its architecture and the beautiful square it sits on, which features Ivan Meštrović's sculpture 'The Well of Life'. For a truly memorable evening, consider booking a ticket for a performance—they are surprisingly affordable.",
        practicalInfo: {
        howToGetThere: "Located at Trg Republike Hrvatske 15, easily walkable from the city center or accessible by tram.",
        openingHours: "Box office hours vary. The exterior is always accessible.",
        cost: "Free to admire from the outside. Performance tickets vary in price.",
        website: "https://www.hnk.hr/en/"
      }
      },
        {
        name: "Tkalčićeva Street",
        description: "Tkalčićeva Street is the vibrant, beating heart of Zagreb's social life. This long, winding street is lined with colorful buildings, charming boutiques, and an endless array of cafes, bars, and restaurants. By day, it's a popular spot for a leisurely coffee, while at night it transforms into the city's main hub for dining and nightlife.\n\nThe street follows the path of the former Medveščak stream, which once divided the rival settlements of Kaptol and Gradec. Today, it unites them as a place for relaxation and fun. A stroll down Tkalčićeva is essential for soaking up Zagreb's lively atmosphere and enjoying its famous café culture.",
        practicalInfo: {
        howToGetThere: "A short walk north from Ban Jelačić Square, connecting to Radićeva Street.",
        openingHours: "Shops and cafes have various hours; the street is busiest from late morning until late night.",
        cost: "Free to walk; costs vary for food and drink.",
        website: "https://www.infozagreb.hr/"
      }
      },
        {
        name: "The Stone Gate (Kamenita Vrata)",
        description: "The Stone Gate is the last remaining gate of the old Gradec town walls and a significant site of pilgrimage. According to legend, a great fire in 1731 destroyed everything except for a painting of the Virgin and Child, which was found intact in the ashes. A chapel was built within the arch of the gate to house the miraculous painting, and it remains there to this day.\n\nYou'll often find locals stopping to light a candle and say a quiet prayer, making it a place of deep spiritual significance. The stone walls are covered in plaques thanking the Virgin for answered prayers. It’s a peaceful, moving place that offers a glimpse into the city's soul.",
        practicalInfo: {
        howToGetThere: "Located on Kamenita Ulica in the Upper Town, connecting Radićeva Street with St. Mark's Square.",
        openingHours: "Always accessible.",
        cost: "Free.",
        website: "https://www.infozagreb.hr/"
      }
      },
        {
        name: "Zagreb 80's Museum",
        description: "Step into a time capsule at the Zagreb 80's Museum, an interactive and nostalgic space that recreates the everyday life of a Yugoslavian family during the 1980s. Unlike traditional museums where exhibits are behind glass, here you are encouraged to touch everything. You can sit on the sofa, play video games on a vintage computer, try on clothes, and even flick through old magazines.\n\nIt’s a fun, colorful, and highly immersive experience that provides insight into the culture and lifestyle of Zagreb during a unique period of its history. It's a fantastic alternative to more traditional museums and is particularly enjoyable for families or anyone with an interest in recent history and pop culture.",
        practicalInfo: {
        howToGetThere: "Located at Radićeva 34, a short walk from Ban Jelačić Square.",
        openingHours: "10:00 AM - 10:00 PM daily.",
        cost: "Around €6 per adult.",
        website: "https://www.zagreb80.com/"
      }
      },
        {
        name: "Botanical Garden",
        description: "Part of the 'Green Horseshoe' (a series of U-shaped parks and squares in the Lower Town), the Botanical Garden is a tranquil haven founded in 1889. It is home to over 10,000 plant species from Croatia and around the world, arranged in beautifully landscaped sections including an English-style arboretum, flowerbeds, and greenhouses with tropical and subtropical plants.\n\nIt’s the perfect place for a peaceful stroll, offering a quiet respite from the city's energy. The picturesque ponds with turtles, wooden bridges, and shaded benches make it a favorite spot for both locals and tourists to relax and connect with nature.",
        practicalInfo: {
        howToGetThere: "Located at Trg Marka Marulića 9a, within walking distance of the main train station.",
        openingHours: "Varies by season, typically open from 9:00 AM to 6:00 PM (closed Mondays and in winter). Check website for exact times.",
        cost: "Around €2 per adult.",
        website: "https://botanickivrt.biol.pmf.hr/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Zagreb is a very walkable city, especially the historic center. For longer distances, the efficient and affordable ZET tram system is excellent. Trams are the primary mode of public transport and cover the entire city. Single tickets can be bought at newspaper kiosks (called 'tisak') or from the driver. Ride-sharing services like Uber and Bolt are also widely available and reasonably priced.",
        whereToStay: "For first-time visitors, the Lower Town (Donji Grad) is ideal, offering proximity to most attractions, restaurants, and the main train station. Hotels like Hotel Dubrovnik and Canopy by Hilton Zagreb City Centre are great options. For a more charming and quiet stay, look for boutique hotels or apartments in the historic Upper Town (Gornji Grad). For budget travelers, numerous high-quality hostels are available, such as Swanky Mint Hostel.",
        bestTimeToVisit: "The best times to visit Zagreb are in the spring (April-June) and fall (September-October) when the weather is pleasant and the city is less crowded. Summer (July-August) is hot and lively with many outdoor events, though many locals head to the coast. Winter is magical due to the award-winning Advent in Zagreb Christmas markets, which transform the city into a festive wonderland.",
        suggestedItinerary: "Day 1: Explore the Upper Town. Start at Ban Jelačić Square, take the funicular up to Lotrščak Tower for the noon cannon, visit St. Mark's Church and the Museum of Broken Relationships, then walk to the Stone Gate and finish at Zagreb Cathedral.\nDay 2: Discover the Lower Town. Start your morning at Dolac Market. Stroll through the 'Green Horseshoe' park system, admire the Croatian National Theatre, and explore the shops on Ilica street. Spend the evening on Tkalčićeva Street for dinner and drinks.\nDay 3: Parks and Culture. Visit the serene Mirogoj Cemetery in the morning. In the afternoon, relax at Maksimir Park and visit the Zagreb Zoo, or explore a museum like the Museum of Contemporary Art."
      }}
      faqs={[{
          question: "Is Zagreb expensive?",
          answer: "Compared to many Western European capitals, Zagreb is quite affordable. A meal at a mid-range restaurant can cost €15-€25, a coffee is around €2, and a tram ticket is less than €1. Accommodation offers great value across all budget levels. While not as cheap as some Eastern European cities, it provides an excellent balance of cost and quality."
        },
        {
          question: "How many days do you need in Zagreb?",
          answer: "Two to three days are perfect for exploring the main sights of Zagreb at a comfortable pace. This allows you to cover both the Upper and Lower Towns, visit key museums, and enjoy the cafe culture. If you plan to take day trips to nearby attractions like Plitvice Lakes or Samobor, consider adding another one or two days."
        },
        {
          question: "Is Zagreb safe?",
          answer: "Zagreb is considered a very safe city with a low crime rate. Violent crime is rare. As in any major city, you should take standard precautions against petty theft, such as being mindful of your belongings in crowded areas like trams and markets. Walking around at night is generally safe in the city center."
        },
        {
          question: "What is Zagreb famous for?",
          answer: "Zagreb is famous for its stunning Austro-Hungarian architecture, a vibrant year-round café culture where locals spend hours socializing over coffee, and its unique and quirky museums like the Museum of Broken Relationships. It is also renowned for its spectacular Advent Christmas Market, which has been voted the best in Europe multiple times."
        }
      ]}
    />
  );
};