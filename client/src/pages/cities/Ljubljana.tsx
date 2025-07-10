import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Ljubljana: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Ljubljana, Slovenia (2025 Guide)"}
      description={"I'll be honest—I wasn't expecting much from Ljubljana when I first arrived. Slovenia's capital? Never heard of it, to be frank. But here's the thing: sometimes the cities that surprise you end up being the most memorable. \n\nLjubljana feels almost... well, magical isn't too strong a word. There's this dragon-guarded bridge (don't ask, it's a whole legend thing), a castle perched on a hill like something from a fairy tale, and everywhere you look there are these incredible Art Nouveau buildings that make you stop mid-conversation. The whole city center is car-free, which means you can actually hear yourself think—and hear the street musicians who seem to pop up on every corner.\n\nWhat I love most is how walkable everything is. You can see the main sights in a day if you're rushing, but honestly, why would you want to? This is a city made for wandering, for discovering that perfect little café along the river, for getting slightly lost in the market. The Slovenians have figured out something about quality of life that the rest of us are still learning."}
      highlights={["Ljubljana Castle",
        "Triple Bridge (Tromostovje)",
        "Dragon Bridge (Zmajski Most)",
        "Prešeren Square",
        "Tivoli Park"]}
      galleryImages={[
        { url: "", alt: "Ljubljana landmark 1", caption: "Ljubljana landmark 1 - placeholder" },
        { url: "", alt: "Ljubljana landmark 2", caption: "Ljubljana landmark 2 - placeholder" },
        { url: "", alt: "Ljubljana landmark 3", caption: "Ljubljana landmark 3 - placeholder" },
        { url: "", alt: "Ljubljana landmark 4", caption: "Ljubljana landmark 4 - placeholder" },
        { url: "", alt: "Ljubljana landmark 5", caption: "Ljubljana landmark 5 - placeholder" },
        { url: "", alt: "Ljubljana landmark 6", caption: "Ljubljana landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Ljubljana Castle (Ljubljanski Grad)",
        description: "Look, every European city has its castle on a hill, right? But Ljubljana's castle actually delivers on the promise. I took the funicular up (because let's face it, who wants to climb a hill when there's a perfectly good railway), and the views from the top are genuinely spectacular. On a clear day—and I got lucky with weather—you can see all the way to the Alps.\n\nThe castle itself is more than just a pretty viewpoint, though I'll admit the view is the main draw. There's a decent history museum if you're into that sort of thing, and they have this puppet museum that's honestly more interesting than it sounds. But the real magic happens in the evening when they sometimes have concerts in the courtyard. Picture this: medieval walls, city lights twinkling below, and maybe a glass of Slovenian wine in your hand. Not a bad way to spend an evening, really.",
        practicalInfo: {
        howToGetThere: "Located on Castle Hill. Accessible via a funicular from Krekov trg square, by tourist train, or by a 10-15 minute walk from the Old Town.",
        openingHours: "Generally 10:00 AM - 8:00 PM daily, with longer hours in summer. Check the website for seasonal changes.",
        cost: "Courtyard entry is free. A combined ticket for the funicular and castle attractions costs approx. €13-€16.",
        website: "https://www.ljubljanskigrad.si/en/"
      }
      },
        {
        name: "Triple Bridge (Tromostovje)",
        description: "An architectural marvel and a central hub of city life, the Triple Bridge is the iconic work of famed architect Jože Plečnik. What was once a single stone bridge was expanded by Plečnik in the 1930s with the addition of two pedestrian bridges on either side, creating a unique and elegant entrance to the Old Town. The balustrades and lamps add a touch of Venetian flair.\n\nThis bridge isn't just a crossing; it's a meeting point and a stage for street performers. It connects the modern city center at Prešeren Square with the historic Old Town, making it an unmissable part of any Ljubljana walk. Standing here, you can feel the pulse of the city as locals and tourists mingle.",
        practicalInfo: {
        howToGetThere: "Connects Prešeren Square to the Old Town. It's in the heart of the pedestrian zone and impossible to miss.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.visitljubljana.com/en/poi/triple-bridge/"
      }
      },
        {
        name: "Dragon Bridge (Zmajski Most)",
        description: "Guarded by four fearsome-looking but beloved dragon statues, the Dragon Bridge is one of the most famous and photographed sights in Ljubljana. Built in 1901, it was one of Europe's first reinforced concrete bridges and a stunning example of Art Nouveau design. The dragons are the symbol of the city, tied to the legend of Jason and the Argonauts, who supposedly founded Ljubljana after defeating a dragon.\n\nLegend has it that the dragons wag their tails whenever a virgin crosses the bridge. It's a fantastic spot for a photo and a short, scenic walk from the Central Market towards the more modern part of the city.",
        practicalInfo: {
        howToGetThere: "Located just east of the Central Market, spanning the Ljubljanica River at Kopitarjeva ulica.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.visitljubljana.com/en/poi/dragon-bridge/"
      }
      },
        {
        name: "Prešeren Square (Prešernov trg)",
        description: "This is the vibrant, beating heart of Ljubljana. Named after Slovenia's greatest poet, France Prešeren, whose statue stands in the center, the square is a constant hub of activity. It's framed by beautiful architecture, including the magnificent salmon-pink Franciscan Church of the Annunciation and several elegant Art Nouveau buildings like the Hauptmann House.\n\nThe square is the city's primary meeting point, a venue for concerts and events, and the starting point for exploring the city. It's connected to the Old Town by the Triple Bridge, making it a perfect place to orient yourself, people-watch, and soak in the lively atmosphere.",
        practicalInfo: {
        howToGetThere: "Located in the city center, at the foot of the Triple Bridge. It's a major hub in the pedestrian zone.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.visitljubljana.com/en/poi/preseren-square/"
      }
      },
        {
        name: "Tivoli Park",
        description: "Tivoli Park is Ljubljana's green lung, a sprawling urban oasis perfect for a relaxing stroll, a picnic, or a bit of recreation. Stretching over five square kilometers, it's crisscrossed with tree-lined paths, ornate flowerbeds, and intriguing statues. The Jakopič Promenade, a wide central path designed by Jože Plečnik, serves as a magnificent open-air gallery, hosting large-format photography exhibitions year-round.\n\nWithin the park, you can visit the Tivoli Mansion, which houses the International Centre of Graphic Arts, and the Cekin Mansion, home to the Contemporary History Museum. For families, there's a playground and a small botanical garden. It's the ideal escape from the city buzz without ever leaving the city.",
        practicalInfo: {
        howToGetThere: "A short 10-minute walk west from the city center.",
        openingHours: "Open 24/7.",
        cost: "Free. Entry fees apply to museums within the park.",
        website: "https://www.visitljubljana.com/en/poi/tivoli-park/"
      }
      },
        {
        name: "Central Market",
        description: "To truly experience local life, a visit to Ljubljana's Central Market is essential. Designed by Jože Plečnik, the market stretches along the river between the Dragon Bridge and the Triple Bridge. It's comprised of an open-air market in Vodnik Square, a covered market in the neighboring square, and a beautiful colonnaded market hall along the riverbank.\n\nHere you can find fresh Slovenian produce, local cheeses, cured meats, honey, and the delicious 'Kranjska klobasa' (Carniolan sausage). On Fridays from spring to autumn, the 'Open Kitchen' (Odprta Kuhna) food market takes over, offering an incredible variety of street food from Slovenian and international chefs. It's a feast for the senses and the stomach.",
        practicalInfo: {
        howToGetThere: "Located between the Triple Bridge and the Dragon Bridge along the Ljubljanica River.",
        openingHours: "Mon-Fri 7 AM - 4 PM, Sat 7 AM - 2 PM. Closed Sundays. Open Kitchen (Mar-Oct) is on Fridays, 10 AM - 9 PM.",
        cost: "Free to browse.",
        website: "https://www.lpt.si/en/central-market"
      }
      },
        {
        name: "Ljubljanica River Cruise",
        description: "Seeing Ljubljana from the water offers a completely different and enchanting perspective. A gentle cruise down the Ljubljanica River takes you under the city's famous bridges—the Triple Bridge, the Cobblers' Bridge, and the Dragon Bridge—and past the elegant facades of Old Town buildings. The covered wooden boats are comfortable in any weather.\n\nThe 45-minute tour is narrated, providing interesting tidbits about the city's history and architecture. It's a wonderfully relaxing way to sightsee, especially on a warm afternoon or a magical evening when the city lights twinkle on the water. It highlights how integral the river is to Ljubljana's identity and charm.",
        practicalInfo: {
        howToGetThere: "Several boat operators depart from the various piers along the river, primarily between the Triple Bridge and the Butchers' Bridge.",
        openingHours: "Daily from roughly 10:00 AM to 9:00 PM, depending on the season and weather.",
        cost: "Approximately €12-€15 per adult for a 45-minute cruise.",
        website: "https://www.visitljubljana.com/en/things-to-do/sightseeing/boat-cruises-on-the-ljubljanica-river/"
      }
      },
        {
        name: "Metelkova Mesto Alternative Culture Centre",
        description: "For a completely different side of Ljubljana, step into the vibrant, chaotic, and creative world of Metelkova Mesto. Situated on the site of former military barracks, this autonomous social and cultural center is a haven for alternative art. By day, it's a fascinating urban art gallery where every surface is covered in graffiti, mosaics, and bizarre sculptures made from repurposed materials.\n\nBy night, Metelkova transforms into one of Ljubljana's most popular nightlife hubs, with a variety of clubs and bars playing everything from punk rock and electronic music to jazz. It's a gritty, energetic, and utterly unique place that showcases the city's thriving counter-culture.",
        practicalInfo: {
        howToGetThere: "Located a 10-minute walk northeast of the main train station, near the Slovenian Ethnographic Museum.",
        openingHours: "Accessible to walk around 24/7. Bars and clubs open in the evenings.",
        cost: "Free to explore. Cover charges may apply for clubs/events.",
        website: "https://metelkovamesto.org/"
      }
      },
        {
        name: "National Museum of Slovenia",
        description: "As the country's main museum of national history, the National Museum of Slovenia is a treasure trove of artifacts that tell the story of the Slovenian lands from prehistory to the present day. Its most prized possession is the 60,000-year-old Neanderthal flute from the Divje Babe cave, believed to be the world's oldest known musical instrument.\n\nThe museum also houses an impressive collection of Roman artifacts, including a beautiful Roman lapidarium in the courtyard, and the Egyptian collection with a 2,600-year-old sarcophagus. It's a fascinating journey through time and a must-visit for anyone interested in the deep history of the region.",
        practicalInfo: {
        howToGetThere: "Located on Muzejska ulica, near Tivoli Park and the National Gallery.",
        openingHours: "Tuesday-Sunday 10:00 AM - 6:00 PM (until 8:00 PM on Thursdays). Closed Mondays.",
        cost: "Around €8 for a standard adult ticket.",
        website: "https://www.nms.si/en/"
      }
      },
        {
        name: "Museum of Illusions",
        description: "A guaranteed good time for all ages, the Museum of Illusions offers a mind-bending break from traditional sightseeing. This interactive museum is filled with holograms, optical illusions, and puzzling rooms that challenge your perception and play tricks on your senses. Walk through the Vortex Tunnel, defy gravity in the Tilted Room, or see infinite reflections in the Infinity Room.\n\nUnlike traditional museums, here you are encouraged to touch, interact, and take as many fun photos as you can. It's a relatively small museum, so you can experience it all in about an hour, making it a perfect rainy-day activity or a fun interlude for families and groups of friends.",
        practicalInfo: {
        howToGetThere: "Centrally located at Kongresni trg 13, just a short walk from Prešeren Square.",
        openingHours: "Daily from 9:00 AM to 10:00 PM.",
        cost: "Approximately €12.50 for adults, with family tickets available.",
        website: "https://museumofillusions.si/en/"
      }
      },
        {
        name: "Cobblers' Bridge (Šuštarski most)",
        description: "Another of Jože Plečnik's masterpieces, the Cobblers' Bridge has a distinct and charming character. Like the Triple Bridge, it's exceptionally wide, intended by Plečnik to function as a public square over the water. It's lined with classical columns, some topped with spheres and some with lamps, giving it a stately and elegant appearance.\n\nHistorically, the bridge was home to cobblers' workshops, hence its name. Today, it's a beautiful pedestrian crossing that connects two parts of the Old Town, often hosting small markets or street musicians. Its unique design and peaceful atmosphere make it a lovely spot to pause and enjoy the view of the river and castle.",
        practicalInfo: {
        howToGetThere: "Located in the Old Town, connecting Mestni trg with Novi trg.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.visitljubljana.com/en/poi/cobblers-bridge/"
      }
      },
        {
        name: "Ljubljana Cathedral (St. Nicholas's Church)",
        description: "Easily recognizable by its green dome and twin towers, Ljubljana Cathedral is the city's most important church. Originally a Gothic building, it was replaced in the early 18th century with the current Baroque structure. The interior is a lavish display of pink marble, gilded details, and stunning ceiling frescoes by Italian artist Giulio Quaglio.\n\nPay special attention to the remarkable bronze entrance doors. The main west door, known as the 'Slovenia Door,' depicts the history of Christianity in Slovenia and was added for Pope John Paul II's visit in 1996. The side door portrays the bishops of Ljubljana. It's a peaceful and awe-inspiring sanctuary in the heart of the bustling market area.",
        practicalInfo: {
        howToGetThere: "Located at Pogačarjev trg, adjacent to the Central Market and Town Hall.",
        openingHours: "Generally open for visitors outside of service times, roughly 10:00 AM - 12:00 PM and 3:00 PM - 6:00 PM.",
        cost: "A small entry fee of around €2 may be requested to support maintenance.",
        website: "http://www.stolnica.com/"
      }
      },
        {
        name: "National Gallery of Slovenia",
        description: "Slovenia's main museum of historical art, the National Gallery, holds the most comprehensive collection of Slovenian art from the High Middle Ages to the early 20th century. Housed in a beautiful neo-Renaissance palace, the gallery showcases the country's artistic evolution, with a particular focus on Slovenian impressionists like Ivan Grohar and Rihard Jakopič.\n\nThe permanent collection is beautifully curated, and the building itself is a work of art, with a modern glass extension seamlessly connecting the original palace to a newer wing. It offers a deep dive into the nation's cultural identity and is a must for art lovers.",
        practicalInfo: {
        howToGetThere: "Located on Prešernova cesta, opposite the Orthodox Church and near Tivoli Park.",
        openingHours: "Tuesday-Sunday 10:00 AM - 6:00 PM (until 8:00 PM on Thursdays). Closed Mondays.",
        cost: "Around €10 for the permanent and temporary exhibitions.",
        website: "https://www.ng-slo.si/en/"
      }
      },
        {
        name: "House of Experiments (Hiša Eksperimentov)",
        description: "The House of Experiments is Slovenia's first science center, a place where science becomes fun and accessible for everyone, especially children. It operates under the motto 'It's forbidden not to touch!', encouraging visitors to engage directly with over 50 hands-on exhibits that explore various scientific phenomena.\n\nYou can try lying on a bed of nails, encase yourself in a giant soap bubble, or solve tricky puzzles. The staff, mostly university students, are enthusiastic and excellent at explaining the science behind the fun. It's an excellent educational experience cleverly disguised as playtime.",
        practicalInfo: {
        howToGetThere: "Located on Trubarjeva cesta, a short walk from Prešeren Square.",
        openingHours: "Weekends and holidays 11:00 AM - 7:00 PM. Check website for weekday hours and 'Science Adventures' show times.",
        cost: "Approximately €8 per person.",
        website: "https://www.he.si/en/"
      }
      },
        {
        name: "Walk along the Ljubljanica River Embankment",
        description: "One of the simplest yet most rewarding things to do in Ljubljana is to take a leisurely stroll along the river embankments. The leafy banks of the Ljubljanica, largely designed by Jože Plečnik, are the city's social core. Lined with an endless array of cafes, bars, and restaurants with outdoor seating, it's the perfect place to absorb the relaxed local vibe.\n\nStart at the picturesque and quiet Trnovo Pier (Trnovski pristan), with its unique stepped banks and weeping willows, and walk downstream towards the bustling center. The atmosphere changes from serene to lively as you approach the Triple Bridge. In the evening, the area comes alive with lights, music, and chatter, making it ideal for a pre-dinner drink or a romantic nighttime walk.",
        practicalInfo: {
        howToGetThere: "The most popular stretches are between the Cobblers' Bridge and the Dragon Bridge in the city center.",
        openingHours: "Accessible 24/7.",
        cost: "Free to walk. Cost of food and drinks varies.",
        website: "https://www.visitljubljana.com/en/things-to-do/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Ljubljana is incredibly walkable, with a large pedestrian-only city center. For longer distances, the public bus system is efficient. You'll need an 'Urbana' card, which can be purchased and topped up at kiosks. The 'BicikeLJ' bike-sharing system is cheap and convenient for short rides. For a free, eco-friendly lift within the pedestrian zone, flag down one of the 'Kavalir' electric vehicles.",
        whereToStay: "For first-time visitors, staying in the Old Town or right near Prešeren Square is ideal for atmosphere and convenience. For a quieter stay, look for hotels near Tivoli Park. For budget travelers, the area around the train station has several good hostels. Recommended hotels include Grand Hotel Union (luxury), Hotel Cubo (boutique), and City Hotel Ljubljana (mid-range).",
        bestTimeToVisit: "Late spring (May-June) and early autumn (September) are perfect, offering pleasant weather and fewer crowds than peak summer. Summer (July-August) is warm and vibrant with many festivals, but also the busiest. Winter brings a magical atmosphere with charming Christmas markets in December, though it can be quite cold.",
        suggestedItinerary: "Day 1: Begin at Prešeren Square and cross the Triple Bridge into Ljubljana's picturesque Old Town. Take the funicular (or hike) up to Ljubljana Castle for panoramic views. Enjoy a leisurely boat tour along the Ljubljanica River, followed by dinner.\n\nDay 2: Embark on a day trip to Postojna Cave, one of the world's most extensive cave systems. Visit the dramatic Predjama Castle, built into a cliff face. Return to Ljubljana and enjoy a relaxed evening, perhaps catching a performance.\n\nDay 3: Take a day trip to Lake Bled, Slovenia's iconic alpine lake. Visit Vintgar Gorge, a stunning natural gorge with wooden walkways. Return to Ljubljana and enjoy a farewell dinner."
      }}
      faqs={[{
          question: "Is Ljubljana expensive?",
          answer: "Ljubljana is generally considered affordable compared to major Western European capitals like Paris or London, but more expensive than cities in the Balkans. A meal at a mid-range restaurant costs around €15-€25, a coffee is about €2-€3, and a beer is €3-€4. Public transport and attractions are reasonably priced. Overall, it offers great value for a European capital."
        },
        {
          question: "How many days do you need in Ljubljana?",
          answer: "Two to three days are sufficient to explore the main sights of Ljubljana itself at a comfortable pace. This allows you to see the castle, explore the Old Town, visit a museum or two, and enjoy the riverside cafe culture. If you plan to use Ljubljana as a base for day trips to places like Lake Bled, Lake Bohinj, or Postojna Cave, plan for 4-5 days."
        },
        {
          question: "Is Ljubljana safe?",
          answer: "Ljubljana is known for being an exceptionally safe city, with very low crime rates. It's safe to walk around at any time of day or night. As in any tourist destination, you should take standard precautions against pickpocketing in crowded areas like the Central Market or on public transport, but violent crime is extremely rare."
        },
        {
          question: "What is Ljubljana famous for?",
          answer: "Ljubljana is famous for several key things: its mythical dragons, symbolized by the iconic Dragon Bridge; the brilliant architectural works of Jože Plečnik that shaped the city's identity; its title as a 'European Green Capital' due to its vast pedestrian zones and commitment to sustainability; the charming Ljubljanica River that flows through its center, lined with lively cafes; and its magnificent castle overlooking the city."
        }
      ]}
    />
  );
};