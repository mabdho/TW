import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Johannesburg: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Johannesburg, South Africa (2025 Guide)"}
      description={"Welcome to Johannesburg, a city built on gold and reborn through a spirit of resilience and creativity. Often called 'Joburg' or 'Jozi' by locals, South Africa's largest city is a pulsating hub of culture, history, and urban energy. Once a sprawling mining camp, it has transformed into a vibrant metropolis where history-charged landmarks stand alongside trendy art galleries and bustling markets. From confronting the stark realities of apartheid to exploring the ancient origins of humankind, Joburg offers a journey unlike any other. It’s a city of contrasts, where leafy suburbs give way to dynamic inner-city precincts. This guide will walk you through the very best things to do in Johannesburg, revealing a destination that is as complex and compelling as its past. Prepare to be moved, inspired, and thoroughly captivated by the golden heart of South Africa."}
      imageUrl={""}
      highlights={["Apartheid Museum",
        "Soweto Tour & Vilakazi Street",
        "Constitution Hill Human Rights Precinct",
        "Cradle of Humankind",
        "Maboneng Precinct"]}
      galleryImages={[
        { url: "", alt: "Johannesburg landmark 1", caption: "Johannesburg landmark 1 - placeholder" },
        { url: "", alt: "Johannesburg landmark 2", caption: "Johannesburg landmark 2 - placeholder" },
        { url: "", alt: "Johannesburg landmark 3", caption: "Johannesburg landmark 3 - placeholder" },
        { url: "", alt: "Johannesburg landmark 4", caption: "Johannesburg landmark 4 - placeholder" },
        { url: "", alt: "Johannesburg landmark 5", caption: "Johannesburg landmark 5 - placeholder" },
        { url: "", alt: "Johannesburg landmark 6", caption: "Johannesburg landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Apartheid Museum",
        description: "No visit to Johannesburg is complete without a powerful and sobering journey through the Apartheid Museum. This world-class institution chronicles the rise and fall of South Africa's era of racial segregation. Upon entry, visitors are randomly assigned a 'white' or 'non-white' classification, forcing an immediate, visceral understanding of the arbitrary nature of apartheid. The exhibits are masterfully curated, using film, photography, artifacts, and personal accounts to guide you through the decades of oppression, the struggle for democracy, and the path to reconciliation led by Nelson Mandela.\n\nSet aside several hours for your visit, as the experience is deeply immersive and emotionally resonant. It provides essential context for understanding modern South Africa and is a profound tribute to the human spirit's triumph over injustice. It is unequivocally one of the most important cultural sites in the country.",
        practicalInfo: {
        howToGetThere: "Located at Northern Park Way and Gold Reef Rd, Ormonde. Best reached by Uber/Bolt or car. It's next to Gold Reef City.",
        openingHours: "Wednesday - Sunday & Public Holidays: 9:00 AM - 5:00 PM. Closed on Good Friday & Christmas Day.",
        cost: "Adults: Approx. ZAR 150. Discounts for students and pensioners.",
        website: "https://www.apartheidmuseum.org/"
      }
      },
        {
        name: "Soweto Tour & Vilakazi Street",
        description: "Soweto (South Western Townships) is a symbol of resistance and freedom, pulsating with history and vibrant street life. Taking a guided tour is the best way to understand its complex past and dynamic present. Tours typically cover key landmarks, including the Hector Pieterson Memorial and Museum, dedicated to the students of the 1976 Soweto Uprising, and the iconic Orlando Towers, often used for bungee jumping.\n\nThe tour's centerpiece is Vilakazi Street, the only street in the world to have been home to two Nobel Peace Prize laureates: Nelson Mandela and Archbishop Desmond Tutu. You can visit Mandela's former home, now the Nelson Mandela National Museum. Exploring Soweto offers an unparalleled insight into the heart of the anti-apartheid struggle and the resilient, creative culture that thrives there today.",
        practicalInfo: {
        howToGetThere: "Booking a guided tour (half-day or full-day) is highly recommended for context and safety. Tours often include hotel pickup.",
        openingHours: "Tours run daily. Vilakazi Street is always accessible, but museum hours vary.",
        cost: "Varies by tour operator, typically ZAR 700 - ZAR 1500 for a half-day tour.",
        website: "https://www.soweto.co.za/"
      }
      },
        {
        name: "Constitution Hill Human Rights Precinct",
        description: "Constitution Hill is a living museum that tells the story of South Africa's journey to democracy. This site was formerly a notorious prison complex, where political prisoners like Nelson Mandela and Mahatma Gandhi were once incarcerated. Today, it is home to the country's Constitutional Court, the highest court in the land and a beacon of hope and human rights.\n\nA tour takes you through the harrowing Old Fort, the Women's Gaol, and the infamous Number Four prison block. The contrast between the oppressive old prison and the inspiring, modern architecture of the Constitutional Court is incredibly powerful. It’s a place of reflection on a painful past and a celebration of a hard-won democratic future.",
        practicalInfo: {
        howToGetThere: "11 Kotze Street, Braamfontein. Accessible via the Gautrain (Park Station) and a short walk, or by Uber/Bolt.",
        openingHours: "Daily, 9:00 AM - 5:00 PM.",
        cost: "Various tours available, starting around ZAR 100 for adults.",
        website: "https://www.constitutionhill.org.za/"
      }
      },
        {
        name: "Cradle of Humankind",
        description: "Just an hour's drive from Johannesburg lies a UNESCO World Heritage Site that holds the secrets to our human origins. The Cradle of Humankind is a vast paleoanthropological site that has produced some of the oldest and most significant hominin fossils ever found, including 'Mrs. Ples' and 'Little Foot'. The primary visitor centers are the Maropeng Visitor Centre and the Sterkfontein Caves.\n\nMaropeng offers an interactive, multi-sensory journey through the formation of our planet and the evolution of life. The Sterkfontein Caves are an active excavation site where you can take a guided tour deep into the caverns where many of the fossils were discovered. It’s a fascinating and humbling experience that connects you to the deep history of humanity.",
        practicalInfo: {
        howToGetThere: "Located near Krugersdorp, about 50 km northwest of Johannesburg. Best accessed by car or organized day tour.",
        openingHours: "Daily, 9:00 AM - 5:00 PM (last tour usually at 4:00 PM).",
        cost: "Combination tickets for Maropeng and Sterkfontein are available, approx. ZAR 200-250.",
        website: "https://www.maropeng.co.za/"
      }
      },
        {
        name: "Maboneng Precinct",
        description: "Maboneng, meaning 'Place of Light' in Sotho, is the poster child for Johannesburg's urban renewal. This once-derelict industrial area has been transformed into a thriving, creative hub brimming with art galleries, independent cinemas, quirky boutiques, and an eclectic mix of restaurants and cafes. It's a vibrant, walkable neighborhood where street art adorns almost every wall.\n\nThe heart of the precinct is Arts on Main, a complex that hosts galleries, studios, and the popular Sunday Neighbourgoods Market. Spend an afternoon exploring the shops, grabbing a coffee at a street-side cafe, and soaking in the energetic, artistic atmosphere. Maboneng represents the new, forward-looking spirit of Johannesburg and is a fantastic place to experience the city's modern culture.",
        practicalInfo: {
        howToGetThere: "Located on the eastern side of the CBD. Best to take an Uber/Bolt directly there.",
        openingHours: "Shops and galleries have individual hours. Most lively on weekends, especially during the Sunday market.",
        cost: "Free to walk around. Costs vary for shopping and dining.",
        website: "https://mabonengprecinct.com/"
      }
      },
        {
        name: "Gold Reef City",
        description: "For a dose of fun and history combined, head to Gold Reef City. This amusement park is built on the site of an old gold mine, and it masterfully theme-packs the heady days of the 1880s Johannesburg gold rush. The park offers a thrilling mix of adrenaline-pumping roller coasters and family-friendly rides, all set against a backdrop of period architecture.\n\nBeyond the rides, the main attraction is the underground mine tour, where you descend 220 meters below ground to experience the dark, cramped conditions of a real gold mine. You can also watch a live gold-pouring demonstration. It's an entertaining way to learn about the industry that gave birth to Johannesburg, making it a great day out for all ages.",
        practicalInfo: {
        howToGetThere: "Northern Park Way and Data Crescent, Ormonde. Adjacent to the Apartheid Museum. Ample parking and easily accessible by car or ride-sharing apps.",
        openingHours: "Thursday - Sunday & Public/School Holidays: 9:30 AM - 5:00 PM.",
        cost: "Thrill Rider Pass (all attractions): Approx. ZAR 250. Various other packages available.",
        website: "https://www.goldreefcity.co.za/"
      }
      },
        {
        name: "Johannesburg Art Gallery (JAG)",
        description: "Housed in a beautiful building designed by British architect Edwin Lutyens, the Johannesburg Art Gallery (JAG) boasts the largest public collection of modern and contemporary art on the African continent. The collection is extensive and diverse, featuring 17th-century Dutch paintings, 19th-century British and European art, and a significant collection of South African works.\n\nThe gallery's strength lies in its comprehensive showcase of local talent, from historical pieces to cutting-edge contemporary installations. It provides a visual narrative of South Africa's complex social and political history through art. Located in the tranquil Joubert Park, it's a cultural oasis in the heart of the bustling city.",
        practicalInfo: {
        howToGetThere: "Klein Street, Joubert Park. It's recommended to use a ride-sharing service for drop-off and pickup due to its location.",
        openingHours: "Tuesday - Sunday: 10:00 AM - 5:00 PM. Check for temporary closures.",
        cost: "Free admission.",
        website: "http://www.friendsofjag.org/"
      }
      },
        {
        name: "Neighbourgoods Market",
        description: "Every Saturday, the Neighbourgoods Market transforms a multi-story car park in the Braamfontein neighborhood into a foodie paradise. This vibrant, bustling market is the place to be for locals and tourists alike, offering a spectacular array of artisanal foods, craft beers, and creative cocktails. From paella and oysters to gourmet burgers and vegan treats, the culinary options are endless.\n\nThe atmosphere is electric, with live music creating a festive vibe. Grab a dish, find a spot on the rooftop terrace, and enjoy fantastic views of the city skyline. It's a social event as much as a market, perfectly capturing Joburg's trendy, urban spirit. Arrive early as it gets very crowded by lunchtime.",
        practicalInfo: {
        howToGetThere: "73 Juta Street, Braamfontein. Use Uber/Bolt or the Gautrain to Park Station and walk.",
        openingHours: "Saturdays only, 9:00 AM - 3:00 PM.",
        cost: "Free entry. Pay for food and drinks.",
        website: "https://www.neighbourgoodsmarket.co.za/"
      }
      },
        {
        name: "The Lindfield Victorian House Museum",
        description: "Step back in time at the Lindfield Victorian House Museum, a perfectly preserved home in the suburb of Auckland Park. This is not a typical museum with exhibits behind glass; it's a living museum where you are guided through the fully furnished house by the eccentric and knowledgeable owner, Katherine Love, whose family has lived there for generations.\n\nEvery room is filled to the brim with authentic Victorian and Edwardian furniture, clothing, and household items, from a fully stocked kitchen to elaborate drawing rooms. The guided tour is an immersive theatrical experience, bringing the history and social customs of the era to life with fascinating stories and anecdotes. Booking is essential for this unique and charming glimpse into Johannesburg's colonial past.",
        practicalInfo: {
        howToGetThere: "72 Richmond Avenue, Auckland Park. Best reached by car or ride-sharing service.",
        openingHours: "By appointment only. Tours are usually run at 10 AM, 12 PM, and 2 PM.",
        cost: "Approx. ZAR 100 per person.",
        website: "http://www.lindfield.co.za/"
      }
      },
        {
        name: "Lion & Safari Park",
        description: "Located just outside Johannesburg, the Lion & Safari Park offers an accessible and family-friendly wildlife experience. The park allows you to get up close to some of Africa's most iconic predators in a safe environment. You can take a guided safari drive or use your own vehicle to see lions, wild dogs, cheetahs, and hyenas in large, open enclosures.\n\nThe park also features a giraffe feeding platform, a restaurant, and play areas for children. For a more intimate experience, you can book guided cheetah or lion walks (ethical considerations should be researched by visitors). While not a traditional Big Five safari, it’s a well-managed and enjoyable way to see magnificent animals without venturing far from the city.",
        practicalInfo: {
        howToGetThere: "R512 Pelindaba Road, Broederstroom. About a 45-minute drive from Johannesburg. Best reached by car or tour.",
        openingHours: "Daily, 8:00 AM - 6:00 PM.",
        cost: "Varies based on activity. Self-drives are cheaper (approx. ZAR 200) than guided tours.",
        website: "https://www.lionandsafaripark.com/"
      }
      },
        {
        name: "Nelson Mandela National Museum (Mandela House)",
        description: "Located on the famous Vilakazi Street in Soweto, this modest house was Nelson Mandela's home from 1946 until his imprisonment in 1962. He briefly returned here after his release in 1990. Now a national museum, the house has been preserved to tell the story of Mandela's life and the family's experience during the anti-apartheid struggle.\n\nThe small interior is filled with original artifacts, photographs, and memorabilia that offer an intimate and poignant look into the personal life of the global icon. You can still see bullet holes in the walls and scorch marks from petrol bombs, stark reminders of the violence of the era. A visit here is an essential part of any Soweto tour, providing a deeply personal connection to the history you see around you.",
        practicalInfo: {
        howToGetThere: "8115 Vilakazi Street, Orlando West, Soweto. Best visited as part of a guided Soweto tour.",
        openingHours: "Daily, 9:00 AM - 5:00 PM.",
        cost: "Adults: Approx. ZAR 60.",
        website: "https://www.mandelahouse.com/"
      }
      },
        {
        name: "Wits Art Museum (WAM)",
        description: "Situated in the culturally rich Braamfontein district, the Wits Art Museum (WAM) holds an extraordinary collection of African art. Affiliated with the University of the Witwatersrand, the museum's collection spans from historical artifacts to contemporary pieces, showcasing the incredible diversity of artistic expression from across the continent.\n\nThe museum is particularly renowned for its collection of southern African art. The bright, modern gallery spaces provide a stunning backdrop for the artworks. WAM regularly hosts temporary exhibitions, ensuring there is always something new to see. It’s a must-visit for art lovers and anyone interested in gaining a deeper appreciation for African artistic heritage.",
        practicalInfo: {
        howToGetThere: "University Corner, corner of Bertha (extension of Jan Smuts Avenue) and Jorissen Streets, Braamfontein.",
        openingHours: "Wednesday - Saturday: 10:00 AM - 4:00 PM.",
        cost: "Free admission.",
        website: "https://www.wits.ac.za/wam/"
      }
      },
        {
        name: "Origins Centre at Wits University",
        description: "Another gem at Wits University, the Origins Centre Museum delves into the history of modern humankind in Africa. It houses a vast collection of paleoanthropological artifacts, rock art, and fossils, offering a comprehensive journey through human evolution and the development of art, symbolism, and technology on the continent.\n\nThe exhibitions are interactive and engaging, tracing a path from the earliest origins of humanity to the art of the San people. A highlight is the extensive collection of rock art, providing a window into the spiritual and cultural lives of Southern Africa's earliest inhabitants. It serves as a perfect complement to a visit to the Cradle of Humankind or as a standalone exploration of our shared past.",
        practicalInfo: {
        howToGetThere: "Wits University, corner of Yale Road and Jorissen Street, Braamfontein. Accessible via Uber/Bolt.",
        openingHours: "Monday - Saturday: 9:00 AM - 5:00 PM.",
        cost: "Adults: Approx. ZAR 85.",
        website: "https://www.wits.ac.za/origins/"
      }
      },
        {
        name: "The Market Theatre",
        description: "Known as the 'Theatre of the Struggle,' The Market Theatre has a legendary history of challenging the apartheid regime through multiracial, anti-apartheid plays. For over 40 years, it has been a beacon of artistic freedom and has premiered many of South Africa's most famous theatrical works, including those by Athol Fugard. Today, it remains at the forefront of South African theatre, showcasing world-class productions that are innovative, relevant, and thought-provoking.\n\nLocated in the Newtown Cultural Precinct, the complex also includes a photo gallery and a bookshop. Catching a show here is not just an evening's entertainment; it’s an opportunity to engage with a vital piece of South Africa's cultural and political history. The quality of the performances is consistently high, making it a memorable night out.",
        practicalInfo: {
        howToGetThere: "56 Margaret Mcingana Street, Newtown. Best to take an Uber/Bolt directly to the theatre.",
        openingHours: "Box office hours vary. Shows are typically in the evenings.",
        cost: "Ticket prices vary by production, typically ZAR 150 - ZAR 300.",
        website: "https://markettheatre.co.za/"
      }
      },
        {
        name: "Johannesburg Botanical Garden and Emmarentia Dam",
        description: "For a peaceful escape from the urban hustle, the Johannesburg Botanical Garden at Emmarentia Dam is the perfect retreat. This expansive green space offers beautifully manicured themed gardens, including a Shakespeare Garden, a Rose Garden, and a Herb Garden, alongside vast lawns perfect for picnics. The park is a popular spot for locals who come to walk their dogs, jog, or simply relax.\n\nThe centerpiece is the Emmarentia Dam, where you can watch canoeists and sailors or enjoy the serene water views. The gardens are also a haven for birdlife. It’s an ideal place to spend a sunny afternoon, showcasing the greener, more tranquil side of Johannesburg.",
        practicalInfo: {
        howToGetThere: "Olifants Road, Emmarentia. Best reached by car or ride-sharing service.",
        openingHours: "Daily, sunrise to sunset.",
        cost: "Free admission.",
        website: "https://www.jhbcityparksandzoo.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Johannesburg is a large, sprawling city, so public transport requires some planning. The Gautrain is a modern, safe, and efficient train service connecting the airport, Sandton, Rosebank, and Pretoria. For most other travel, ride-sharing services like Uber and Bolt are the most convenient, safe, and affordable option. The Rea Vaya Bus Rapid Transit (BRT) system serves major routes, including those to Soweto and the CBD, but can be tricky for first-time visitors. Renting a car is also an option if you're comfortable driving on the left.",
        whereToStay: "Sandton: The city's modern financial hub, known for luxury hotels, high-end shopping, and fine dining. Recommended for business travelers and those seeking upscale comfort.\nRosebank: A trendy, walkable area with excellent hotels (like The Saxon and Hyatt Regency), a popular mall, art galleries, and easy access to the Gautrain.\nMaboneng Precinct: For the artsy and adventurous, stay in a loft-style apartment or boutique hotel in this vibrant, regenerated neighborhood.\nMelville: A bohemian suburb with a relaxed vibe, quirky guesthouses, antique shops, and a lively street scene with numerous bars and restaurants.",
        bestTimeToVisit: "The best times to visit Johannesburg are during the spring (September to November) and autumn (March to May). During these months, the weather is pleasant, with warm days and mild nights, and the city experiences less rainfall. Summer (December to February) is hot with frequent afternoon thunderstorms. Winter (June to August) is dry and sunny but can be cold, especially at night, with temperatures sometimes dropping near freezing.",
        suggestedItinerary: "Day 1: History & Remembrance. Start at the Apartheid Museum (allow 3-4 hours). In the afternoon, take a guided tour of Soweto, visiting Vilakazi Street, the Nelson Mandela House, and the Hector Pieterson Memorial.\nDay 2: City Culture & Art. Explore Constitution Hill in the morning. Head to the Maboneng Precinct for lunch, gallery hopping, and street art. In the late afternoon, visit the Wits Art Museum in nearby Braamfontein.\nDay 3: Origins & Relaxation. Take a day trip to the Cradle of Humankind (Maropeng and Sterkfontein Caves). Alternatively, for a more relaxed day, visit the Johannesburg Botanical Garden for a picnic and a stroll before enjoying a final dinner in Rosebank or Melville."
      }}
      faqs={[{
          question: "Is Johannesburg expensive?",
          answer: "Johannesburg can be surprisingly affordable compared to many Western cities. While luxury hotels and fine dining in areas like Sandton can be expensive, there are plenty of budget-friendly options. Food, transport (especially Uber/Bolt), and activities are generally reasonably priced. A favorable exchange rate for visitors with USD, EUR, or GBP makes it a good value destination."
        },
        {
          question: "How many days do you need in Johannesburg?",
          answer: "To get a good feel for the city and cover the main highlights, 3 to 4 days is recommended. This allows enough time to visit the Apartheid Museum, Soweto, and Constitution Hill without rushing, and also provides time to explore a neighborhood like Maboneng and take a day trip to the Cradle of Humankind."
        },
        {
          question: "Is Johannesburg safe?",
          answer: "Johannesburg has a reputation for high crime rates, and it's important to be cautious. However, millions of tourists visit safely every year by taking sensible precautions. Stick to well-known tourist areas, avoid walking alone at night, and don't display valuables openly. Using reputable ride-sharing apps like Uber or Bolt is much safer than hailing taxis on the street. Avoid walking in the CBD after dark unless in a secure precinct like Maboneng. Being aware of your surroundings is key to having a safe and enjoyable trip."
        },
        {
          question: "What is Johannesburg famous for?",
          answer: "Johannesburg is famous for its history as the world's largest gold-mining city, which earned it the name 'Egoli' or 'City of Gold'. It is also renowned as the epicenter of South Africa's anti-apartheid struggle, with key historical sites like Soweto and Constitution Hill. Today, it's known for its incredible urban regeneration, vibrant arts and culture scene, and its status as the economic powerhouse of Africa."
        }
      ]}
    />
  );
};