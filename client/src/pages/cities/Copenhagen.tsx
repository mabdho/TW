import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Copenhagen: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Copenhagen, Guide"
      description={`Copenhagen has this way of making you feel instantly at home, even when you're clearly a tourist with a map and a confused expression. Maybe it's the impossibly photogenic colored houses lining the canals, or maybe it's how everyone seems to be effortlessly riding bikes everywhere (seriously, they make it look so easy). 

The Danes have figured out something the rest of us are still learning: how to live well without making it look like hard work. You'll notice it in the way they've turned an old amusement park into a cultural institution, or how their idea of fast food involves organic vegetables and sustainably sourced fish. There's this concept called 'hygge'—which basically means the art of being cozy and content—and you can feel it everywhere.

What strikes me most about Copenhagen is how it manages to be both laid-back and incredibly sophisticated at the same time. You might start your day admiring 17th-century architecture, spend your afternoon in a cutting-edge design museum, and end up at a restaurant that's redefining what food can be. The city doesn't try to impress you; it just quietly goes about being wonderful."`}
      highlights={[
      "Nyhavn",
      "Tivoli Gardens",
      "The Little Mermaid",
      "Rosenborg Castle",
      "Strøget"
]}
      attractions={[
      {
            "name": "Nyhavn",
            "description": "Nyhavn, or 'New Harbor', is the postcard-perfect image of Copenhagen. This 17th-century waterfront, canal, and entertainment district is lined with brightly colored townhouses, many of which house bustling bars, cafes, and restaurants. Historically a busy commercial port where ships from all over the world would dock, its legacy lives on through the historical wooden ships moored along the canal.\n\nIt's the perfect place for a leisurely stroll, a canal tour, or simply sitting with a drink and watching the world go by. The famous Danish author Hans Christian Andersen lived in several houses along Nyhavn over the years. The northern, sunnier side is packed with eateries, while the southern side offers a slightly quieter experience. It’s a quintessential Copenhagen experience you cannot miss.",
            "practicalInfo": {
                  "howToGetThere": "Located in the city center. A short walk from Kongens Nytorv Metro station.",
                  "openingHours": "Public area open 24/7. Restaurants and bars have individual hours.",
                  "cost": "Free to visit. Food and drink prices vary.",
                  "website": "https://www.visitcopenhagen.com/copenhagen/planning/nyhavn-gdk410948"
            }
      },
      {
            "name": "Tivoli Gardens",
            "description": "Opened in 1843, Tivoli Gardens is one of the oldest operating amusement parks in the world and a true national treasure. It's more than just roller coasters; it's a magical blend of stunning gardens, whimsical architecture, historic rides, and modern thrills. At night, the park transforms into a fairy-tale landscape, illuminated by thousands of colorful lights.\n\nThe park hosts concerts, ballets, and special events throughout its various seasons (Summer, Halloween, and Christmas). Whether you're seeking adrenaline-pumping rides like The Demon, enjoying a nostalgic spin on the 1914 wooden roller coaster, or simply soaking in the enchanting atmosphere, Tivoli offers a delightful experience for all ages.",
            "practicalInfo": {
                  "howToGetThere": "Located next to Copenhagen Central Station (København H).",
                  "openingHours": "Varies by season. Typically 11:00 AM - 10:00 PM (later on weekends). Check website for exact dates and times.",
                  "cost": "Entrance fee from 155 DKK (rides are extra). Ride passes are available.",
                  "website": "https://www.tivoli.dk/en"
            }
      },
      {
            "name": "The Little Mermaid (Den Lille Havfrue)",
            "description": "Inspired by Hans Christian Andersen's poignant fairy tale, The Little Mermaid statue is an iconic symbol of Copenhagen. Sculpted by Edvard Eriksen, this unassuming bronze and granite statue has been gazing wistfully from her rock at the Langelinie promenade since 1913. While smaller than many visitors expect, her melancholic beauty captures the essence of the story she represents.\n\nShe has become a major tourist attraction and has survived numerous acts of vandalism over the years, always being restored to her original state. A visit here is a rite of passage for any first-time visitor to the city. Combine it with a walk through the adjacent Churchill Park and the star-shaped Kastellet fortress for a scenic outing.",
            "practicalInfo": {
                  "howToGetThere": "Located at Langelinie. A 15-minute walk from Østerport Station or accessible via bus 27.",
                  "openingHours": "Open 24/7.",
                  "cost": "Free.",
                  "website": "https://www.visitcopenhagen.com/copenhagen/planning/little-mermaid-gdk586958"
            }
      },
      {
            "name": "Rosenborg Castle",
            "description": "Step back into 400 years of royal history at Rosenborg Castle. This stunning Dutch Renaissance castle was built by King Christian IV in the early 17th century as a summer pleasure palace. Today, it functions as a museum showcasing the spectacular Danish Crown Jewels and Royal Regalia, which are securely kept in the treasury vaults beneath the castle.\n\nThe interiors are immaculately preserved, allowing you to wander through the King's private chambers, bathrooms, and the magnificent Knights' Hall with its coronation thrones and silver lions. The castle is surrounded by the beautiful King's Garden (Kongens Have), Copenhagen's oldest royal garden and a popular spot for locals to relax.",
            "practicalInfo": {
                  "howToGetThere": "A short walk from Nørreport Station.",
                  "openingHours": "Daily 10:00 AM - 5:00 PM (hours vary seasonally).",
                  "cost": "Adults 130 DKK. Free with Copenhagen Card.",
                  "website": "https://www.kongernessamling.dk/en/rosenborg/"
            }
      },
      {
            "name": "Strøget",
            "description": "Strøget is one of Europe's longest pedestrian shopping streets, stretching 1.1 kilometers through the heart of Copenhagen's old city. It's not just one street, but a collection of streets connecting City Hall Square (Rådhuspladsen) to King's New Square (Kongens Nytorv). It's the city's premier shopping destination, offering a mix of high-end luxury brands like Prada and Louis Vuitton, budget-friendly chains like H&M, and classic Danish design stores like Royal Copenhagen and Georg Jensen.\n\nBeyond shopping, Strøget is a vibrant artery of city life, bustling with street performers, cafes, and beautiful squares like Amagertorv with its Stork Fountain. Even if you're not shopping, a walk down Strøget is essential for soaking up the city's dynamic atmosphere.",
            "practicalInfo": {
                  "howToGetThere": "Runs between Rådhuspladsen and Kongens Nytorv Metro stations.",
                  "openingHours": "Street open 24/7. Shop hours are typically 10:00 AM - 6:00 PM (later on Thursdays/Fridays).",
                  "cost": "Free to walk.",
                  "website": "https://www.visitcopenhagen.com/copenhagen/planning/stroget-gdk411357"
            }
      },
      {
            "name": "Christiansborg Palace",
            "description": "Located on the tiny island of Slotsholmen, Christiansborg Palace is the seat of the Danish Parliament (Folketinget), the Prime Minister's Office, and the Supreme Court. Uniquely, parts of the palace are also used by the Royal Family for official functions and events. This makes it the only building in the world to house all three branches of a country's government.\n\nVisitors can explore several parts of the palace, including the opulent Royal Reception Rooms with the magnificent Great Hall and its modern tapestries depicting 1,000 years of Danish history. You can also visit the ruins under the palace, the Royal Stables, and climb the Tower for the highest vantage point in Copenhagen, offering breathtaking panoramic views of the city for free.",
            "practicalInfo": {
                  "howToGetThere": "Centrally located on Slotsholmen, a short walk from Gammel Strand or Kongens Nytorv Metro stations.",
                  "openingHours": "Daily 10:00 AM - 5:00 PM (closed Mondays in winter). The Tower has longer hours.",
                  "cost": "Combined ticket for Royal Reception Rooms, Ruins, Stables & Kitchen is 175 DKK. The Tower is free.",
                  "website": "https://kongeligeslotte.dk/en/palaces-and-gardens/christiansborg-palace.html"
            }
      },
      {
            "name": "Amalienborg Palace",
            "description": "Amalienborg Palace is the official residence of the Danish Royal Family. It's not a single palace but an elegant complex of four identical Rococo palaces arranged around an octagonal courtyard. At the center stands a monumental statue of Amalienborg's founder, King Frederick V.\n\nA must-see daily event is the Changing of the Royal Guard (Den Kongelige Livgarde). Every day at noon, the guards march from their barracks near Rosenborg Castle through the streets of Copenhagen to Amalienborg for the ceremony. Visitors can also tour two of the four palaces: Christian VIII's Palace, which houses the Amalienborg Museum, and parts of Christian VII's Palace, used for official events.",
            "practicalInfo": {
                  "howToGetThere": "A 10-minute walk from Marmorkirken or Kongens Nytorv Metro stations.",
                  "openingHours": "Museum: Daily 10:00 AM - 5:00 PM (seasonal variations). Changing of the Guard is at 12:00 PM daily.",
                  "cost": "Museum entrance: 125 DKK. Watching the Guard Change is free.",
                  "website": "https://www.kongernessamling.dk/en/amalienborg/"
            }
      },
      {
            "name": "National Museum of Denmark (Nationalmuseet)",
            "description": "Dive deep into Danish history and culture at the National Museum of Denmark. Housed in a former 18th-century royal residence, the museum's vast collections trace Danish history from the prehistoric era of Ice Age reindeer-hunters and Vikings to the modern day. Key exhibits include incredibly well-preserved Bronze Age artifacts, Viking treasures, and the famous Sun Chariot.\n\nThe ethnographic collections are equally impressive, featuring artifacts from cultures across the globe. The museum is incredibly engaging, with interactive displays and a dedicated Children's Museum, making it a fantastic destination for families. It provides an essential context for understanding the nation's past and present.",
            "practicalInfo": {
                  "howToGetThere": "Near Christiansborg Palace, a short walk from Gammel Strand or Rådhuspladsen Metro stations.",
                  "openingHours": "Tuesday-Sunday 10:00 AM - 5:00 PM. Open daily in high season.",
                  "cost": "Adults 120 DKK. Free for children under 18.",
                  "website": "https://en.natmus.dk/"
            }
      },
      {
            "name": "Freetown Christiania",
            "description": "Christiania is a unique and controversial autonomous neighborhood in Copenhagen. Founded in 1971 by a group of hippies who occupied a former military barracks, it has developed its own set of societal rules, completely independent of the Danish government. It's known for its alternative lifestyle, homemade houses, workshops, art galleries, and organic eateries.\n\nThe infamous 'Pusher Street' is where the open cannabis trade has historically occurred, and visitors should be aware that photography is strictly forbidden in this area. While it maintains a reputation for being rough around the edges, Christiania is also a green, car-free oasis and a fascinating example of a social experiment. A walk around its lake and creatively built homes reveals the community's artistic and resourceful spirit.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Christianshavn neighborhood. A 10-minute walk from Christianshavn Metro station.",
                  "openingHours": "Open 24/7. Visitors are advised to visit during daylight hours. Be respectful of residents and follow the posted rules.",
                  "cost": "Free to enter.",
                  "website": "https://www.christiania.org/"
            }
      },
      {
            "name": "Ny Carlsberg Glyptotek",
            "description": "Founded in 1888 by the brewer Carl Jacobsen (of Carlsberg fame), the Glyptotek is an art museum built around his personal collection. The name 'Glyptotek' means 'collection of sculptures,' and the museum holds an impressive array of ancient art from Egypt, Rome, and Greece, including one of the finest collections of Roman portraits outside of Italy.\n\nThe museum also features a significant collection of Danish Golden Age art and French Impressionist paintings, with works by Monet, Renoir, and Degas. The highlight for many is the stunning central Winter Garden, a glass-domed tropical oasis that provides a tranquil space to relax between galleries. It’s a perfect blend of art, history, and architecture.",
            "practicalInfo": {
                  "howToGetThere": "Located next to Tivoli Gardens, near Copenhagen Central Station.",
                  "openingHours": "Tuesday-Sunday 10:00 AM - 5:00 PM (until 9 PM on Thursdays). Closed Mondays.",
                  "cost": "Adults 125 DKK. Free on the last Wednesday of the month. Free with Copenhagen Card.",
                  "website": "https://www.glyptoteket.com/"
            }
      },
      {
            "name": "The Round Tower (Rundetårn)",
            "description": "For one of the best views of Copenhagen's old town, climb the 17th-century Round Tower. Commissioned by King Christian IV, this astronomical observatory is a remarkable piece of architecture, famous for its helical corridor—a 209-meter-long spiral ramp that winds its way to the top instead of a traditional staircase. Legend has it that Peter the Great of Russia once rode a horse to the top.\n\nThe gentle incline makes the ascent manageable for most. Along the way, you can peek into the old library hall, which now hosts art exhibitions and concerts. At the summit, you're rewarded with a 360-degree panoramic view of the historic rooftops and spires of Copenhagen. It's a short but memorable climb into the city's history.",
            "practicalInfo": {
                  "howToGetThere": "Centrally located near Nørreport Station, just off Strøget.",
                  "openingHours": "Daily 10:00 AM - 8:00 PM (shorter hours in winter).",
                  "cost": "Adults 40 DKK.",
                  "website": "https://www.rundetaarn.dk/en/"
            }
      },
      {
            "name": "Designmuseum Danmark",
            "description": "Danish design is celebrated worldwide for its simplicity, functionality, and craftsmanship, and this is the place to explore its history and impact. Located in a beautiful 18th-century Rococo building (the former Royal Frederik's Hospital), the Designmuseum Danmark showcases an extensive collection of Danish and international design. Recently reopened after a major renovation, the museum offers a fresh perspective on a rich heritage.\n\nExhibits cover everything from furniture and industrial design by masters like Arne Jacobsen and Hans Wegner to fashion, textiles, and graphic design. The 'THE FUTURE IS PRESENT' exhibit explores how designers are tackling today's global challenges. It's a must-visit for anyone interested in aesthetics, creativity, and the objects that shape our daily lives.",
            "practicalInfo": {
                  "howToGetThere": "Near Amalienborg Palace and Kastellet. A short walk from Marmorkirken Metro station.",
                  "openingHours": "Tuesday-Sunday 10:00 AM - 6:00 PM (until 8 PM on Thursdays). Closed Mondays.",
                  "cost": "Adults 130 DKK.",
                  "website": "https://designmuseum.dk/en/"
            }
      },
      {
            "name": "Reffen - Copenhagen Street Food",
            "description": "For a true taste of modern Copenhagen, head to Reffen. Located in the industrial area of Refshaleøen, this sprawling street food market is a vibrant hub of culinary creativity. With over 40 stalls housed in shipping containers, Reffen offers a global smorgasbord of flavors, from authentic tacos and gourmet burgers to Danish specialties and vegan delights. The focus is on quality, sustainability, and innovation.\n\nThe atmosphere is relaxed and festive, with plenty of waterfront seating, bonfires, and a laid-back vibe. It’s the perfect place to spend a sunny afternoon or evening, sampling different dishes and enjoying the view back towards the city skyline. Reffen is only open during the warmer months, so check their schedule before you go.",
            "practicalInfo": {
                  "howToGetThere": "Take bus 2A to the end of the line (Refshaleøen) or the harbor bus (991/992) from Nyhavn.",
                  "openingHours": "Seasonal (typically April-October). Check website for exact hours.",
                  "cost": "Free entry. Dishes typically cost 80-120 DKK.",
                  "website": "https://reffen.dk/en/"
            }
      },
      {
            "name": "Kastellet",
            "description": "One of the best-preserved star fortresses in Northern Europe, Kastellet (The Citadel) is a peaceful green oasis perfect for a walk or jog. Still an active military barracks, the area is open to the public and offers beautifully maintained ramparts, a historic windmill, and charming red-roofed buildings. The fortress is laid out in the shape of a pentagram with bastions at its corners.\n\nA walk along the ramparts provides lovely views of the harbor and is a great way to get from The Little Mermaid to other parts of the city. The grounds also include St. Alban's Church, an Anglican church with a distinctive English style, adding to the area's picturesque quality. It's a slice of tranquil history right in the city center.",
            "practicalInfo": {
                  "howToGetThere": "Located next to Langelinie and The Little Mermaid. Closest station is Østerport.",
                  "openingHours": "Daily 6:00 AM - 10:00 PM.",
                  "cost": "Free.",
                  "website": "https://www.visitcopenhagen.com/copenhagen/planning/kastellet-citadel-gdk410972"
            }
      },
      {
            "name": "GoBoat Canal Tour",
            "description": "While many companies offer guided canal tours, GoBoat puts you in the captain's seat. Renting a solar-powered picnic boat allows you to explore Copenhagen's charming canals and harbor at your own pace. The boats are easy to operate (no license required) and feature a central picnic table, making it a perfect social activity for a group of friends or family.\n\nYou can chart your own course through the idyllic canals of Christianshavn, cruise past modern architectural marvels like the Opera House and the Black Diamond Library, and see the city from a completely different perspective. Pack a picnic basket and some drinks for a truly memorable and quintessentially Danish experience on the water.",
            "practicalInfo": {
                  "howToGetThere": "Main rental location is at Islands Brygge. Accessible via the Islands Brygge Metro station.",
                  "openingHours": "Daily, generally from 10:00 AM until sunset (seasonal). Booking ahead is highly recommended.",
                  "cost": "From 499 DKK per hour for a boat that seats up to 8 people.",
                  "website": "https://goboat.dk/en/"
            }
      }
]}
      logistics={{
      "gettingAround": "Copenhagen is incredibly bike-friendly, with dedicated bike lanes on almost every street. Renting a bike is the most authentic and efficient way to explore. The public transport system is also excellent, consisting of the Metro, S-trains, and buses, all integrated into a single ticket system. The Copenhagen Card includes unlimited public transport. For a scenic route, the harbor buses (water buses) are a great option.",
      "whereToStay": "Indre By (City Center) is perfect for first-time visitors, with easy access to major sights. Vesterbro, once a gritty neighborhood, is now a hip area with trendy bars, restaurants, and boutiques. Nørrebro is a vibrant, multicultural district known for its diverse food scene and independent shops. Christianshavn offers picturesque canals and a charming, village-like atmosphere.",
      "bestTimeToVisit": "The best time to visit Copenhagen is from May to September when the weather is warm, the days are long, and the city is alive with outdoor cafes and festivals. Spring (April-May) and autumn (September-October) are also lovely, with fewer crowds and pleasant weather. Winter (November-March) is cold and dark, but the city becomes incredibly cozy ('hyggelig') with Christmas markets and candlelit cafes.",
      "suggestedItinerary": "[object Object]"
}}
      faqs={[
      {
            "question": "Is Copenhagen expensive?",
            "answer": "Yes, Copenhagen is considered one of the more expensive cities in Europe, particularly for dining out and alcohol. However, it is possible to visit on a budget. Save money by eating at street food markets like Reffen, buying groceries from supermarkets, enjoying the many free attractions (like Nyhavn, Kastellet, and the Christiansborg Tower), and renting a bike instead of relying on taxis. The Copenhagen Card can offer good value if you plan to visit many museums and use public transport frequently."
      },
      {
            "question": "How many days do you need in Copenhagen?",
            "answer": "Three to four days is an ideal amount of time for a first visit to Copenhagen. This allows you to see all the main attractions at a comfortable pace, explore a couple of different neighborhoods, and soak in the city's atmosphere without feeling rushed. With 5 days or more, you could take a day trip to places like Roskilde to see the Viking Ship Museum or across the Øresund Bridge to Malmö, Sweden."
      },
      {
            "question": "Is Copenhagen safe?",
            "answer": "Copenhagen is a very safe city with low crime rates. Standard travel precautions apply, such as being aware of your surroundings and watching for pickpockets in crowded tourist areas and on public transport. The biggest daily 'danger' for pedestrians is often the silent and fast-moving bicycle traffic; always look both ways before crossing a street or a bike lane."
      },
      {
            "question": "What is Copenhagen famous for?",
            "answer": "Copenhagen is famous for many things: its connection to author Hans Christian Andersen and fairy tales like 'The Little Mermaid'; the Danish concept of 'hygge' (coziness and contentment); its world-renowned minimalist design and architecture; a deeply ingrained cycling culture; the historic Tivoli Gardens amusement park; and its revolutionary New Nordic Cuisine, which has made it a global culinary destination."
      }
]}
    />
  );
};