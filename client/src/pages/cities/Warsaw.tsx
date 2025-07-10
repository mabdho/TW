import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Warsaw: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Warsaw, Poland (2025 Guide)"
      description="Rising like a phoenix from the ashes of World War II, Warsaw is a city of incredible resilience, complex history, and dynamic energy. Once a grey landscape under communist rule, Poland's capital has blossomed into a vibrant European hub where meticulously reconstructed Gothic architecture shares the skyline with soaring modern skyscrapers. This contrast is the heart of its charm. Exploring Warsaw means walking through centuries of turbulent history, from its royal past to the heroic tragedy of the 1944 Uprising, before diving into its thriving arts, culinary, and nightlife scenes. Whether you're a history buff, a foodie, or an art lover, you'll find an abundance of captivating experiences. This guide will walk you through all the very best things to do in Warsaw, ensuring a trip you'll never forget."
      highlights={[
      "Warsaw Old Town Market Square",
      "Warsaw Uprising Museum",
      "The Royal Castle in Warsaw",
      "Łazienki Park",
      "POLIN Museum of the History of Polish Jews"
]}
      attractions={[
      {
            "name": "Warsaw Old Town Market Square (Rynek Starego Miasta)",
            "description": "The heart of Warsaw, the Old Town Market Square, is a stunning testament to the city's spirit. Completely obliterated during WWII, it was painstakingly rebuilt using old paintings and photographs, an achievement that earned it UNESCO World Heritage status. The vibrant facades of the merchants' houses, the central Warsaw Mermaid statue, and the lively atmosphere of cafes and street artists make it the perfect starting point for any visit.\n\nStrolling through its cobblestone streets feels like stepping back in time. It's a place to simply wander, enjoy a coffee or a traditional Polish meal at an outdoor restaurant, and soak in the ambiance. The square is beautiful year-round, but it's especially magical during the summer and when it hosts the annual Christmas market in winter.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Stare Miasto district. Accessible by numerous bus and tram lines stopping at 'Stare Miasto' or 'Plac Zamkowy'.",
                  "openingHours": "Open 24/7. Individual shops and restaurants have their own hours.",
                  "cost": "Free to visit.",
                  "website": "https://www.warsawtour.pl/en/project/old-town-market-square/"
            }
      },
      {
            "name": "The Royal Castle in Warsaw (Zamek Królewski)",
            "description": "Dominating Castle Square, the Royal Castle was the official residence of Polish monarchs for centuries. Like the Old Town, it was deliberately destroyed by the Nazis and meticulously reconstructed after the war using rubble and surviving fragments. Today, it stands as a powerful symbol of national identity and cultural endurance, functioning as a museum and a venue for state events.\n\nInside, you can explore the opulent royal apartments, the grand Assembly Hall, the Senate Chamber where the historic 1791 Constitution was passed, and see two original Rembrandt paintings. A visit provides a deep dive into Poland's regal history and the incredible craftsmanship of its restorers.",
            "practicalInfo": {
                  "howToGetThere": "Plac Zamkowy 4, at the entrance to the Old Town. Tram and bus stop 'Stare Miasto'.",
                  "openingHours": "Hours vary seasonally, typically 10:00 AM - 5:00 PM. Check the website for current times.",
                  "cost": "Approx. 50 PLN for a regular ticket. Free entry on Wednesdays.",
                  "website": "https://www.zamek-krolewski.pl/en"
            }
      },
      {
            "name": "Warsaw Uprising Museum (Muzeum Powstania Warszawskiego)",
            "description": "This is one of Poland's most important and moving museums. It offers a powerful, immersive tribute to the heroic and tragic 1944 Warsaw Uprising, a 63-day struggle by the Polish Home Army to liberate the city from German occupation. The museum doesn't just display artifacts; it tells a story through interactive displays, photographs, oral histories, and recreated environments.\n\nYou'll walk over cobblestones, hear the sounds of the battle, and see a full-size replica of a Liberator bomber. A key feature is the 'beating heart' of the museum, a steel monument that emits the sound of a heartbeat, symbolizing the life of Warsaw in 1944. It's a sobering but essential experience for understanding the city's soul.",
            "practicalInfo": {
                  "howToGetThere": "Grzybowska 79. Accessible by tram (lines 1, 22, 24) or metro (Rondo Daszyńskiego station).",
                  "openingHours": "Closed Tuesdays. Typically 10:00 AM - 6:00 PM. Check website for details.",
                  "cost": "Approx. 30 PLN. Free entry on Mondays.",
                  "website": "https://www.1944.pl/en"
            }
      },
      {
            "name": "Łazienki Park (Park Łazienkowski)",
            "description": "Warsaw's largest and most beautiful park is a green oasis in the city center. This 18th-century park-and-palace complex was designed for Poland's last king, Stanisław August Poniatowski, as his summer residence. It's a perfect blend of nature and classical architecture, featuring manicured gardens, wilder forested areas, and a large lake.\n\nThe park's main sights include the stunning Palace on the Isle, the Neoclassical Amphitheatre, and the iconic monument to Frédéric Chopin. On summer Sundays, free piano concerts are held at the foot of the Chopin monument, attracting locals and tourists alike. It's an idyllic spot for a long walk, a picnic, or simply relaxing among peacocks and red squirrels.",
            "practicalInfo": {
                  "howToGetThere": "Agrykola 1. Numerous bus lines stop along the park's perimeter (e.g., 'Łazienki Królewskie' stop).",
                  "openingHours": "Park is open daily from dawn till dusk. Palaces and museums within have specific hours.",
                  "cost": "Park entry is free. Tickets are required for the palaces and museums.",
                  "website": "https://www.lazienki-krolewskie.pl/en"
            }
      },
      {
            "name": "POLIN Museum of the History of Polish Jews",
            "description": "Located on the site of the former Warsaw Ghetto, the POLIN Museum is a spectacular architectural marvel that tells the story of 1000 years of Jewish life in Poland. The museum's core exhibition is a multimedia narrative journey, from the first Jewish merchants in the Middle Ages through periods of prosperity, the devastation of the Holocaust, and the post-war revival of the Jewish community.\n\nRather than focusing solely on the Holocaust, POLIN celebrates the rich and complex history of a community that was once the largest in the world. Its interactive displays, reconstructed rooms, and powerful artifacts make for an incredibly engaging and educational experience. It is a vital institution for understanding the multicultural fabric of Polish history.",
            "practicalInfo": {
                  "howToGetThere": "Anielewicza 6. Bus and tram stop 'Nalewki-Muzeum'.",
                  "openingHours": "Closed Tuesdays. Typically 10:00 AM - 6:00 PM. Check website for specifics.",
                  "cost": "Approx. 45 PLN. Free entry on Thursdays.",
                  "website": "https://polin.pl/en"
            }
      },
      {
            "name": "Palace of Culture and Science (Pałac Kultury i Nauki)",
            "description": "A controversial and unmissable landmark, the Palace of Culture and Science was a 'gift' from Joseph Stalin to the people of Poland in the 1950s. For years, it was a hated symbol of Soviet dominance, but today Varsovians have adopted it with a certain irony. It remains Poland's tallest building and houses theaters, cinemas, museums, and a university.\n\nThe main draw for tourists is the observation deck on the 30th floor, which offers an unrivaled 360-degree panorama of Warsaw. From here, you can truly appreciate the city's scale and the contrast between its historic districts and modern city center. It's the best viewpoint in the city, day or night.",
            "practicalInfo": {
                  "howToGetThere": "Plac Defilad 1. Centrally located, next to the 'Centrum' metro station and Warszawa Centralna train station.",
                  "openingHours": "Viewing Terrace is typically open 10:00 AM - 8:00 PM daily.",
                  "cost": "Approx. 25 PLN for the viewing terrace.",
                  "website": "https://pkin.pl/en/home/"
            }
      },
      {
            "name": "Copernicus Science Centre (Centrum Nauki Kopernik)",
            "description": "A paradise for the curious of all ages, the Copernicus Science Centre is one of Europe's best and most modern science museums. Its philosophy is based on hands-on experimentation. With hundreds of interactive exhibits, you are encouraged to touch, test, and discover scientific principles for yourself, from creating a tornado to lying on a bed of nails.\n\nThe center includes a high-tech planetarium ('The Heavens of Copernicus'), a 'Buzzz!' gallery for young children, and fascinating temporary exhibitions. It's incredibly popular, so booking tickets online in advance is highly recommended to avoid long queues and ensure entry.",
            "practicalInfo": {
                  "howToGetThere": "Wybrzeże Kościuszkowskie 20. Near the river, accessible via the 'Centrum Nauki Kopernik' M2 metro station.",
                  "openingHours": "Hours vary, generally open 9:00 AM - 7:00 PM. Check the website and book in advance.",
                  "cost": "Approx. 40 PLN for the Centre, separate ticket for the Planetarium.",
                  "website": "https://www.kopernik.org.pl/en"
            }
      },
      {
            "name": "Wilanów Palace and Park (Pałac w Wilanowie)",
            "description": "Often called the 'Polish Versailles,' Wilanów Palace is a magnificent Baroque royal residence that survived both World Wars unscathed, making it one of Warsaw's few authentic historical treasures. It was built in the late 17th century for King John III Sobieski and is a riot of color, detail, and symbolism.\n\nThe palace interiors are lavishly decorated, showcasing original furniture and artworks. The surrounding park is just as impressive, featuring a two-level Baroque garden, a romantic English-style park, and an Anglo-Chinese garden. In winter, the Royal Garden of Light transforms the grounds into a magical wonderland of light installations.",
            "practicalInfo": {
                  "howToGetThere": "Stanisława Kostki Potockiego 10/16. Located in the Wilanów district, best reached by bus (e.g., 116, 180, 519) from the city center.",
                  "openingHours": "Palace and park have different, seasonally varying hours. Check online for details.",
                  "cost": "Approx. 35 PLN for palace, 10 PLN for park only. Free entry on Thursdays (excluding some exhibits).",
                  "website": "https://www.wilanow-palac.pl/en"
            }
      },
      {
            "name": "Fryderyk Chopin Museum (Muzeum Fryderyka Chopina)",
            "description": "Dedicated to Poland's most famous composer, this state-of-the-art multimedia museum is a must for music lovers. Housed in the historic Ostrogski Palace, the museum presents Chopin's life and work through interactive exhibits, manuscripts, personal belongings, and of course, his music.\n\nEach visitor receives an electronic card which allows them to personalize their experience, choosing which information and music they wish to hear as they move through the themed rooms. The highlight for many is the composer's last piano and a collection of his death masks. The museum is a pilgrimage site for classical music aficionados and provides a deep, intimate look at a musical genius.",
            "practicalInfo": {
                  "howToGetThere": "Okólnik 1. In the city center, a short walk from Nowy Świat street.",
                  "openingHours": "Closed Mondays. Generally 11:00 AM - 7:00 PM. Timed-entry tickets recommended.",
                  "cost": "Approx. 25 PLN. Free entry on Wednesdays.",
                  "website": "https://muzeum.nifc.pl/en/"
            }
      },
      {
            "name": "Neon Museum (Muzeum Neonów)",
            "description": "For a quirky and visually stunning experience, head to the Neon Museum in the Praga district. This unique museum is dedicated to preserving and documenting Poland's Cold War-era neon signs. During the communist period, 'neonization' was a state-sponsored project to brighten up grey cities, resulting in thousands of creative and artistic signs.\n\nThe museum has rescued hundreds of these signs, which once adorned cinemas, shops, and restaurants. Displayed in a post-industrial warehouse, the glowing collection is an incredible sight and offers a fascinating glimpse into the commercial art and design of a bygone era. It's one of Warsaw's most photogenic spots.",
            "practicalInfo": {
                  "howToGetThere": "Mińska 25, in the Soho Factory complex in the Praga district. Accessible by tram or bus.",
                  "openingHours": "Open daily, check website for exact hours as they can vary.",
                  "cost": "Approx. 20 PLN.",
                  "website": "https://www.neonmuzeum.org/en"
            }
      },
      {
            "name": "Praga District",
            "description": "Cross the Vistula River to explore the Praga district, a neighborhood that largely survived the destruction of WWII, retaining its pre-war character. Once considered rough and neglected, Praga is now Warsaw's bohemian heart, teeming with art galleries, alternative clubs, unique bars, and street art.\n\nKey streets like Ząbkowska are lined with old tenement buildings, some still bearing bullet holes. The area is home to the Neon Museum and the Polish Vodka Museum. Exploring Praga offers a glimpse of an 'authentic' old Warsaw that can't be found in the reconstructed city center. It's a place of creative energy, historical texture, and hidden courtyards.",
            "practicalInfo": {
                  "howToGetThere": "Take the M2 metro to 'Dworzec Wileński' or various trams/buses across the bridges from the city center.",
                  "openingHours": "The district is always open; individual venues have their own hours.",
                  "cost": "Free to explore.",
                  "website": "https://www.warsawtour.pl/en/project/praga-district/"
            }
      },
      {
            "name": "The Royal Route (Trakt Królewski)",
            "description": "The Royal Route is a historic thoroughfare that connects three former royal residences: the Royal Castle, Łazienki Park, and Wilanów Palace. The most famous and elegant section runs from Castle Square south along Krakowskie Przedmieście and Nowy Świat streets. This grand boulevard is lined with magnificent churches, palaces, university buildings, and upscale shops.\n\nA walk along the Royal Route is a journey through Warsaw's history and architectural splendor. Key landmarks include the Presidential Palace, Warsaw University's main campus, the Holy Cross Church (which houses Chopin's heart in a pillar), and the Nicolaus Copernicus Monument. Nowy Świat transforms into a vibrant hub of restaurants and bars, bustling with life day and night.",
            "practicalInfo": {
                  "howToGetThere": "Starts at Plac Zamkowy (Castle Square) and extends south. Easily walkable.",
                  "openingHours": "Open 24/7. Shops and attractions along it have their own hours.",
                  "cost": "Free to walk.",
                  "website": "https://www.warsawtour.pl/en/project/the-royal-route/"
            }
      },
      {
            "name": "Polish Vodka Museum (Muzeum Polskiej Wódki)",
            "description": "Celebrate Poland's national spirit at this modern and interactive museum, appropriately located in the former Koneser vodka distillery in the Praga district. The Polish Vodka Museum explores the 500-year history of vodka production in Poland, explaining the different ingredients, distillation processes, and cultural significance of the drink.\n\nThe guided tour is highly engaging, utilizing multimedia displays and historical artifacts to tell the story of Polish Vodka (Polska Wódka), a geographically protected designation. The tour concludes with a guided tasting session in the museum's bar, where you'll learn to appreciate the subtle differences between rye, wheat, and potato vodkas. It's an educational and spirited experience.",
            "practicalInfo": {
                  "howToGetThere": "Plac Konesera 1, in the Praga district. Metro 'Dworzec Wileński' is a short walk away.",
                  "openingHours": "Open daily, with tours running frequently. Booking online is recommended.",
                  "cost": "Approx. 45 PLN, which includes the tasting. Visitors must be 18+.",
                  "website": "https://muzeumpolskiejwodki.pl/en/"
            }
      },
      {
            "name": "National Museum in Warsaw (Muzeum Narodowe w Warszawie)",
            "description": "As Poland's largest museum, the National Museum in Warsaw boasts a vast and diverse collection spanning from antiquity to contemporary times. It holds an extensive collection of Polish painting, including the country's most famous canvas, Jan Matejko's monumental 'Battle of Grunwald.'\n\nBeyond Polish art, the museum has an impressive gallery of European painting and a unique Faras Gallery, which displays the world's largest collection of Nubian Christian art rescued from a flooded region of Sudan. From medieval altarpieces to 20th-century design, the museum provides a comprehensive overview of art and culture, making it a key destination for art lovers.",
            "practicalInfo": {
                  "howToGetThere": "Aleje Jerozolimskie 3, centrally located near the Poniatowski Bridge.",
                  "openingHours": "Closed Mondays. Typically 10:00 AM - 6:00 PM. Check website.",
                  "cost": "Approx. 25 PLN. Free entry on Tuesdays.",
                  "website": "https://www.mnw.art.pl/en/"
            }
      },
      {
            "name": "Tomb of the Unknown Soldier (Grób Nieznanego Żołnierza)",
            "description": "Located in the Saxon Garden (Ogród Saski), the Tomb of the Unknown Soldier is a poignant national monument dedicated to the unidentified soldiers who have died for Poland. It is housed in the only surviving part of the 18th-century Saxon Palace, which was destroyed in WWII. The tomb contains the ashes of a young soldier who fell defending Lwów in 1918.\n\nAn eternal flame burns at the monument, which is guarded 24/7 by a two-person honor guard from the Polish Armed Forces. The ceremonial changing of the guard takes place every hour on the hour and is a solemn and impressive sight to witness. It's a place of quiet reflection and a powerful symbol of national sacrifice.",
            "practicalInfo": {
                  "howToGetThere": "Located in Piłsudski Square, adjacent to the Saxon Garden. A short walk from the Old Town.",
                  "openingHours": "Open 24/7. Changing of the guard is every hour.",
                  "cost": "Free to visit.",
                  "website": "https://www.warsawtour.pl/en/project/tomb-of-the-unknown-soldier-1/"
            }
      }
]}
      logistics={{
      "gettingAround": "Warsaw has an excellent and affordable public transport system (ZTM) of buses, trams, and a two-line metro that efficiently connects all major districts. Tickets are integrated and can be purchased from machines (biletomaty) at stops and on board some vehicles. The 'Jakdojade' app is essential for planning routes. The city center and Old Town are very walkable. Ride-sharing apps like Uber and Bolt are widely available and cheap.",
      "whereToStay": "For first-time visitors, Śródmieście (City Center) is ideal for its central location and proximity to major sights and transport hubs. The Old Town (Stare Miasto) offers charming boutique hotels but can be crowded. For a more bohemian and artistic vibe, consider the Praga district across the river. Recommended hotels include Hotel Bristol (Luxury), H15 Boutique Hotel (Boutique), and Oki Doki OLD TOWN Hostel (Budget).",
      "bestTimeToVisit": "The best time to visit Warsaw is during late spring (May-June) and early autumn (September-October). The weather is pleasant for walking, and the city's parks are beautiful. Summer (July-August) is warm and vibrant with many festivals but is also the peak tourist season. Winter is cold, often with snow, but the Christmas markets create a magical atmosphere.",
      "suggestedItinerary": "Day 1: Historical Heart. Start at the Royal Castle and walk through the Old Town Market Square. In the afternoon, visit the deeply moving Warsaw Uprising Museum. End the day with a traditional Polish dinner. Day 2: Royal & Cultural Pursuits. Spend the morning at the beautiful Łazienki Park, visiting the Palace on the Isle. Afterwards, explore the Fryderyk Chopin Museum. In the evening, go up the Palace of Culture and Science for sunset views. Day 3: Modern & Alternative Warsaw. Cross the river to the Praga district. Visit the Polish Vodka Museum and the Neon Museum. In the afternoon, explore the POLIN Museum of the History of Polish Jews."
}}
      faqs={[
      {
            "question": "Is Warsaw expensive?",
            "answer": "Compared to many other major European capitals like Paris, London, or Rome, Warsaw is quite affordable. A meal at an inexpensive restaurant can cost around 30-40 PLN ($7-10 USD), a pint of beer is about 15 PLN ($4 USD), and a 24-hour public transport ticket is only 15 PLN. Accommodation offers great value across all budget levels. While prices are rising, it remains a budget-friendly destination."
      },
      {
            "question": "How many days do you need in Warsaw?",
            "answer": "A stay of 3 to 4 days is ideal for a first-time visitor. This allows enough time to explore the main historical attractions like the Old Town and the Warsaw Uprising Museum at a comfortable pace, visit key museums like POLIN and the Chopin Museum, enjoy the parks, and spend an afternoon exploring the alternative Praga district. With more time, you could take a day trip or explore more neighborhoods."
      },
      {
            "question": "Is Warsaw safe?",
            "answer": "Yes, Warsaw is considered a very safe city for tourists. Violent crime rates are low, and it's generally safe to walk around at night in the city center and other busy areas. As in any large city, you should take standard precautions against pickpocketing, especially in crowded places like public transport, train stations, and popular tourist spots. Be aware of your surroundings, but there is no need to be overly anxious."
      },
      {
            "question": "What is Warsaw famous for?",
            "answer": "Warsaw is most famous for its incredible story of destruction and rebirth. It is often called the 'Phoenix City' because it was almost completely destroyed during World War II and then meticulously rebuilt. It is also famous as the home of composer Frédéric Chopin and scientist Marie Skłodowska-Curie. Today, it is known for its complex history, its vibrant cultural scene, its striking contrast between old and new architecture, and its hearty Polish cuisine, including pierogi, żurek, and bigos."
      }
]}
    />
  );
};