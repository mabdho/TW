import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Thessaloniki: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Thessaloniki, Greece (2025 Guide)"}
      description={"Welcome to Thessaloniki, Greece's vibrant second city and the cultural capital of Macedonia. A city where 2,300 years of history are written on every corner, from Roman ruins and Byzantine walls to Ottoman monuments and a lively Jewish heritage. Thessaloniki pulses with a youthful energy, fueled by its large student population, bustling cafes, and innovative culinary scene. It’s a place where ancient stories meet modern life along a stunning seafront promenade. Whether you're a history buff, a dedicated foodie, or simply seeking an authentic Greek urban experience, you'll find an endless list of amazing activities. This guide will walk you through the very best things to do in Thessaloniki, ensuring your visit is unforgettable. Prepare to be captivated by its charm, history, and the warm hospitality of its people."}
      imageUrl={""}
      highlights={["The White Tower",
        "Rotunda of Galerius",
        "Ano Poli (Upper Town)",
        "Archaeological Museum of Thessaloniki",
        "Aristotelous Square"]}
      galleryImages={[
        { url: "", alt: "Thessaloniki landmark 1", caption: "Thessaloniki landmark 1 - placeholder" },
        { url: "", alt: "Thessaloniki landmark 2", caption: "Thessaloniki landmark 2 - placeholder" },
        { url: "", alt: "Thessaloniki landmark 3", caption: "Thessaloniki landmark 3 - placeholder" },
        { url: "", alt: "Thessaloniki landmark 4", caption: "Thessaloniki landmark 4 - placeholder" },
        { url: "", alt: "Thessaloniki landmark 5", caption: "Thessaloniki landmark 5 - placeholder" },
        { url: "", alt: "Thessaloniki landmark 6", caption: "Thessaloniki landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "The White Tower",
        description: "The undisputed symbol of Thessaloniki, the White Tower stands proudly on the city's waterfront. Originally part of the Byzantine and later Ottoman sea fortifications, this 15th-century structure served as a fortress, garrison, and notorious prison. Its grim history earned it the name 'Tower of Blood' before it was whitewashed in the 19th century as a symbol of cleansing and renamed.\n\nToday, it houses a fascinating museum detailing the city's rich history, spread across six floors. The journey culminates in a breathtaking 360-degree panoramic view of the city, the Thermaic Gulf, and, on clear days, Mount Olympus. A visit here is the perfect introduction to Thessaloniki's layered past and stunning present.",
        practicalInfo: {
        howToGetThere: "Located on the main waterfront promenade (Leoforos Nikis). Easily accessible on foot from the city center.",
        openingHours: "Daily 8:00 AM - 8:00 PM (Summer), 8:30 AM - 3:30 PM (Winter). Check official site for variations.",
        cost: "€6 (Standard), €3 (Reduced). Free admission on certain days.",
        website: "https://www.lpth.gr/en/"
      }
      },
        {
        name: "Rotunda of Galerius",
        description: "A colossal cylindrical structure from the early 4th century, the Rotunda is one of Thessaloniki's most impressive Roman monuments. It was commissioned by Emperor Galerius, likely intended as his mausoleum, but was later converted into a Christian church, then a mosque, and is now a UNESCO World Heritage site. Its sheer scale and massive dome, once adorned with brilliant mosaics, are awe-inspiring.\n\nInside, you can still see fragments of the stunning early Christian mosaics depicting saints and martyrs against a gold background. The building's complex history is palpable, making it a powerful testament to the city's religious and cultural transformations over nearly 1,700 years.",
        practicalInfo: {
        howToGetThere: "A short walk from the Arch of Galerius, in the city center.",
        openingHours: "Daily 8:30 AM - 3:30 PM. Hours can vary, so check locally.",
        cost: "€6 (Standard), €3 (Reduced). Combined ticket with Arch available.",
        website: "http://odysseus.culture.gr"
      }
      },
        {
        name: "Arch of Galerius (Kamara)",
        description: "Erected in the late 3rd to early 4th century AD, the Arch of Galerius, known locally as the 'Kamara', is a triumphal arch built to celebrate the Roman Emperor Galerius's victory over the Persians. The surviving pillars are richly decorated with marble relief panels depicting vivid battle scenes, imperial ceremonies, and the emperor himself.\n\nToday, the Kamara is a central meeting point for locals and students, buzzing with life day and night. It's a place where antiquity is not just observed but is part of the city's living fabric. It stands as a gateway between the modern city and the historic Galerian Complex, which includes the Rotunda and the palace ruins.",
        practicalInfo: {
        howToGetThere: "Located on Egnatia Street at the intersection with Dimitriou Gounari Street. Easily accessible on foot.",
        openingHours: "Open 24/7 (Outdoor public monument).",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Archaeological Museum of Thessaloniki",
        description: "This is one of Greece's most significant museums, offering a comprehensive journey through the history of Macedonia from prehistory to Late Antiquity. The museum's collections are stunning, especially the 'Gold of Macedon' exhibit, which features exquisite artifacts from the royal tombs of Sintos, including gold wreaths, jewelry, and ornate weaponry.\n\nThe exhibits are brilliantly curated, providing deep insight into the daily life, warfare, art, and burial customs of the ancient Macedonians, including the era of Philip II and Alexander the Great. It's an essential visit for anyone interested in ancient history and the roots of Western civilization.",
        practicalInfo: {
        howToGetThere: "Located at Manoli Andronikou 6, near the White Tower.",
        openingHours: "Daily 8:00 AM - 8:00 PM (Summer), 8:30 AM - 3:30 PM (Winter).",
        cost: "€8 (Standard), €4 (Reduced). Combined ticket with Museum of Byzantine Culture available.",
        website: "https://www.amth.gr/en"
      }
      },
        {
        name: "Museum of Byzantine Culture",
        description: "Thessaloniki was the second most important city of the Byzantine Empire after Constantinople, and this award-winning museum is the best place to understand that legacy. Through 11 permanent galleries, it presents a vivid picture of Byzantine art, religion, and daily life from the 4th to the 15th century. The collection includes magnificent icons, frescoes, mosaics, pottery, and manuscripts.\n\nThe modern architecture of the museum itself is a masterpiece, creating a serene and contemplative atmosphere. The exhibits masterfully explain the transition from the ancient world to the Byzantine era and its profound influence on the region. It's a cultural treasure that perfectly complements the city's many Byzantine churches.",
        practicalInfo: {
        howToGetThere: "Located on Leoforos Stratou 2, next to the Archaeological Museum.",
        openingHours: "Daily 8:00 AM - 8:00 PM (Summer), 8:30 AM - 3:30 PM (Winter).",
        cost: "€8 (Standard), €4 (Reduced). Combined ticket with Archaeological Museum available.",
        website: "https://www.mbp.gr/en"
      }
      },
        {
        name: "Ano Poli (Upper Town) & Heptapyrgion",
        description: "Escape the bustle of the city center by heading up to Ano Poli, the historic Upper Town. This is the only part of Thessaloniki to have survived the Great Fire of 1917, and its charming, maze-like streets, traditional Ottoman-era houses, and quiet squares feel like a step back in time. The area is surrounded by the city's impressive Byzantine walls.\n\nAt the highest point of Ano Poli lies the Heptapyrgion (also known as Yedi Kule), a formidable fortress that served as the city's acropolis and later as a prison until 1989. The real reward of exploring Ano Poli is the spectacular panoramic view over the entire city and the Thermaic Gulf, especially at sunset. It's a photographer's and romantic's dream.",
        practicalInfo: {
        howToGetThere: "A steep uphill walk from the center or take bus line 23.",
        openingHours: "Streets are open 24/7. Heptapyrgion has specific visiting hours (check locally).",
        cost: "Free to wander the streets. A small fee may apply for Heptapyrgion interiors.",
        website: "N/A"
      }
      },
        {
        name: "Aristotelous Square",
        description: "The most majestic square in Greece, Aristotelous Square is the heart of Thessaloniki's public life. Designed by French architect Ernest Hébrard after the Great Fire of 1917, its U-shaped design opens up to the sea, creating a magnificent vista. The square is lined with grand, colonnaded buildings housing luxury hotels, cafes, and cinemas.\n\nIt's the city's main hub for celebrations, political rallies, and cultural events. Locals and tourists alike gather here to sip coffee, stroll, and enjoy the sea breeze. The square is a masterpiece of urban planning and the perfect starting point for exploring the city center.",
        practicalInfo: {
        howToGetThere: "Centrally located, connecting Mitropoleos and Tsimiski streets to the waterfront.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Ladadika District",
        description: "Once the heart of the city's wholesale trade district, full of olive oil shops (ladi means oil), Ladadika fell into disrepair for decades. In the 1980s, it was declared a heritage site, and its beautiful 19th-century warehouses were meticulously restored. Today, Ladadika is one of Thessaloniki's most vibrant and picturesque neighborhoods.\n\nBy day, it's a charming area for a coffee. By night, its cobblestone alleys come alive with a fantastic array of 'ouzeries' (taverns serving ouzo and meze), traditional Greek restaurants, and lively bars. The colorful buildings and buzzing atmosphere make it the ultimate destination for an authentic Greek dining and nightlife experience.",
        practicalInfo: {
        howToGetThere: "Located just west of Aristotelous Square, near the port.",
        openingHours: "Most active from the afternoon into the late night.",
        cost: "Free to explore; cost of food and drink varies.",
        website: "N/A"
      }
      },
        {
        name: "Modiano & Kapani Markets",
        description: "To experience the true soul of Thessaloniki, you must visit its central markets. The Modiano Market, a historic covered market built in the 1920s, is an architectural gem (currently under renovation but with surrounding activity). Nearby, the open-air Kapani Market is a chaotic and wonderful sensory overload. These markets have been the city's stomach for centuries.\n\nWander through stalls piled high with fresh produce, olives, cheeses, herbs, meat, and fish. You'll find vendors shouting their daily offers and locals haggling for the best prices. It's a vibrant, authentic slice of daily life and the perfect place to sample local delicacies or just soak in the atmosphere.",
        practicalInfo: {
        howToGetThere: "Located in the heart of the city, between Aristotelous and Venizelou streets.",
        openingHours: "Approximately 7:00 AM - 5:00 PM, Monday to Saturday. Busiest in the mornings.",
        cost: "Free to browse.",
        website: "N/A"
      }
      },
        {
        name: "Church of Agios Dimitrios",
        description: "Dedicated to Thessaloniki's patron saint, Saint Demetrius, this is arguably the most important church in the city. The five-aisled basilica was first built in the 4th century on the site of Roman baths where Demetrius was martyred. Destroyed by fires and rebuilt over the centuries, the current structure is a magnificent reconstruction of the 7th-century basilica.\n\nThe real treasure lies in its crypt, the actual site of the saint's martyrdom. This subterranean area is an incredibly atmospheric space containing the original Roman bath remains and a well. The church also features some beautiful surviving mosaics from the 7th and 8th centuries.",
        practicalInfo: {
        howToGetThere: "Located on Agiou Dimitriou street, a short walk north of the Roman Forum.",
        openingHours: "Daily, roughly 8:00 AM - 10:00 PM. Crypt has more limited hours.",
        cost: "Free.",
        website: "https://www.inad.gr/"
      }
      },
        {
        name: "Church of Hagia Sophia",
        description: "Not to be confused with its more famous namesake in Istanbul, Thessaloniki's Hagia Sophia ('Holy Wisdom') is one of the oldest and most important surviving churches in the city. A UNESCO World Heritage site, it was built in the 8th century on the plan of a Greek-cross domed basilica, a design that would influence Byzantine architecture for centuries.\n\nIts interior is adorned with stunning mosaics, most notably the magnificent 9th-century mosaic in the dome depicting the Ascension of Christ. The art inside represents the transition from the iconoclastic period to the Macedonian Renaissance, making it a crucial monument in the history of Byzantine art.",
        practicalInfo: {
        howToGetThere: "Centrally located on Agias Sofias square.",
        openingHours: "Daily, approximately 7:30 AM - 1:00 PM and 5:00 PM - 7:30 PM. Hours can vary.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Roman Forum (Ancient Agora)",
        description: "Discovered by accident in the 1960s, the Roman Forum was the administrative and public heart of Roman-era Thessaloniki. The site includes the remains of a two-story stoa, two Roman baths, and a small theater (odeon) that was used for gladiator games and public performances. The ruins give a fascinating glimpse into the city's civic life nearly 2,000 years ago.\n\nThere's also an excellent underground museum that cleverly integrates the archaeological findings, presenting artifacts and explaining the history of the forum. It's a peaceful and evocative place to connect with the city's deep Roman roots, located right in the middle of the modern urban landscape.",
        practicalInfo: {
        howToGetThere: "Located north of Aristotelous Square, with entrances from Olympou and Filippou streets.",
        openingHours: "Daily 8:30 AM - 3:30 PM. Closed on Tuesdays.",
        cost: "€4 (Standard), €2 (Reduced).",
        website: "http://odysseus.culture.gr"
      }
      },
        {
        name: "Waterfront Promenade (Nea Paralia)",
        description: "Thessaloniki's redeveloped waterfront, Nea Paralia, is the city's pride and joy. Stretching for about 5 kilometers from the White Tower to the Thessaloniki Concert Hall, this vast pedestrian and cycling area is a masterpiece of modern landscape architecture. It is divided into several 'thematic gardens,' each with a unique character, offering spaces for art, sport, relaxation, and play.\n\nIt's the perfect place for a leisurely walk, a bike ride, or simply to sit on a bench and watch the world go by. The promenade is dotted with iconic sculptures, like the 'Umbrellas' by Zongolopoulos, and offers stunning views of the sea and Mount Olympus. Joining the locals for their evening 'volta' (stroll) here is an essential Thessaloniki experience.",
        practicalInfo: {
        howToGetThere: "Starts at the White Tower and extends eastward along the coast.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "MOMus - Museum of Modern Art",
        description: "For a break from ancient history, dive into Greece's vibrant modern art scene at MOMus. The main collection, formerly the State Museum of Contemporary Art, is housed in a wing of the Moni Lazariston, a beautifully repurposed 18th-century monastery. It is renowned for its world-class collection of Russian avant-garde art, including major works by Malevich, Rodchenko, and Popova.\n\nThis collection offers a fascinating counterpoint to the city's Byzantine heritage, showcasing the revolutionary artistic movements of the early 20th century. The museum also hosts rotating exhibitions of Greek and international contemporary artists, making it a dynamic and thought-provoking destination for art lovers.",
        practicalInfo: {
        howToGetThere: "Located at Kolokotroni 21 in the Stavroupoli district. Accessible via bus lines 27, 34, 57.",
        openingHours: "Tuesday-Saturday 10:00 AM - 6:00 PM, Sunday 11:00 AM - 5:00 PM. Closed Mondays.",
        cost: "€5 (Standard), €3 (Reduced). Check for combined tickets.",
        website: "https://www.momus.gr/en/momus/museum-modern-art-costakis-collection"
      }
      },
        {
        name: "Ataturk Museum",
        description: "A unique site of historical significance, this museum is the house where Mustafa Kemal Atatürk, the founder of the modern Turkish Republic, was born in 1881. The house was gifted to the Turkish state in 1935 and now operates as a museum, located within the grounds of the Turkish Consulate.\n\nThe meticulously restored three-story house showcases period furniture, personal effects of Atatürk, and documents detailing his life and connection to Thessaloniki. It provides a fascinating insight into the city's late Ottoman period and its multicultural past. A visit here is a poignant reminder of the deep historical ties between Greece and Turkey.",
        practicalInfo: {
        howToGetThere: "Located at Apostolou Pavlou 17, near the Church of Agios Dimitrios. Visitors must present a passport/ID at the consulate entrance.",
        openingHours: "Daily 10:00 AM - 5:00 PM. May close for consulate functions.",
        cost: "Free.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Thessaloniki is a very walkable city, especially the central area where most attractions are located. For longer distances, the OASTH public bus system is extensive and affordable; tickets can be bought at kiosks or on the bus (exact change needed). Taxis are plentiful and reasonably priced. Ride-sharing apps like Uber and FREE NOW also operate here. Renting a bike to explore the long waterfront promenade is a popular option.",
        whereToStay: "For first-time visitors, staying near Aristotelous Square puts you in the heart of the action. The Ladadika district is perfect for those who want vibrant nightlife and dining at their doorstep. For a quieter, more atmospheric stay with incredible views, look for boutique hotels and guesthouses in Ano Poli (Upper Town). Recommended hotels include The Excelsior Hotel (luxury), Electra Palace Thessaloniki (classic elegance with a view), and The Modernist (stylish boutique).",
        bestTimeToVisit: "The best times to visit Thessaloniki are during the spring (April to June) and autumn (September to October). The weather is pleasant and sunny, perfect for sightseeing without the intense heat of summer. The city is vibrant with cultural events like the Thessaloniki International Film Festival in November. Summer (July and August) can be very hot and humid, while winters are mild but can be rainy.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: Historical Core. Start at Aristotelous Square, walk to the White Tower and climb it for views. Stroll the waterfront to see the 'Umbrellas' sculpture. In the afternoon, explore the Roman heritage at the Arch of Galerius and Rotunda. Finish with dinner in the Ladadika district.\nDay 2: Museums & Upper Town. Spend the morning at the Archaeological Museum and the Museum of Byzantine Culture (a combined ticket is available). In the late afternoon, take a bus or walk up to Ano Poli to explore its charming streets, see the Heptapyrgion, and watch the sunset from the city walls.\nDay 3: Markets & Local Life. Immerse yourself in the bustling Kapani and Modiano markets in the morning. Visit the magnificent Church of Agios Dimitrios and its crypt. Enjoy a final Greek coffee at a cafe on the promenade before departing."
      }}
      faqs={[{
          question: "Is Thessaloniki expensive?",
          answer: "Compared to Athens and popular Greek islands like Mykonos or Santorini, Thessaloniki is quite affordable. Accommodation, public transport, and entrance fees to museums are reasonably priced. Eating out is a great value, especially at traditional tavernas and souvlaki shops. You can enjoy a delicious meal with wine for under €20 per person. Coffee culture is huge, but a freddo espresso or cappuccino typically costs just €2-€4."
        },
        {
          question: "How many days do you need in Thessaloniki?",
          answer: "To see the main highlights and get a real feel for the city's unique atmosphere, 3 to 4 days is the ideal duration. This allows you to explore the historical sites without rushing, dedicate ample time to the world-class museums, enjoy the food scene in Ladadika, and experience the local ritual of a leisurely coffee and a sunset walk along the waterfront."
        },
        {
          question: "Is Thessaloniki safe?",
          answer: "Thessaloniki is a very safe city for tourists. The crime rate is low, and violent crime is rare. As in any major city, you should use common sense. Be aware of your surroundings in crowded areas like markets, public transport, and major tourist sites to guard against pickpocketing. Keep valuables secure and avoid walking alone in unlit areas late at night. Overall, visitors will find it to be a welcoming and safe place."
        },
        {
          question: "What is Thessaloniki famous for?",
          answer: "Thessaloniki is famous for several things: its rich history as a crossroads of Roman, Byzantine, and Ottoman empires, evident in its numerous UNESCO World Heritage sites; its incredible food scene, often called Greece's culinary capital, known for bougatsa (a cream-filled pastry), trigona panoramatos (syrupy triangles), and superb meze; its vibrant, youthful energy fueled by a large university population; and its iconic seaside landmark, the White Tower."
        }
      ]}
    />
  );
};