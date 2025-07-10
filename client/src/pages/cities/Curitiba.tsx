import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Curitiba: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Curitiba, Brazil (2025 Guide)"}
      description={"Welcome to Curitiba, Brazil's pioneering 'Green Capital' and a global model for sustainable urban planning. Unlike the country's sun-drenched coastal cities, Curitiba offers a different kind of charm with its vast parks, meticulously organized public transport, and a cool, temperate climate. Influenced by waves of European immigrants, the city boasts a unique cultural tapestry reflected in its architecture, cuisine, and festivals. From the iconic glasshouse of the Botanical Garden to the eye-shaped Museu Oscar Niemeyer, Curitiba is a city of design and nature in perfect harmony. Whether you're exploring its historic center, relaxing in its lush green spaces, or discovering its vibrant arts scene, you'll find an abundance of incredible experiences. This guide will walk you through all the best things to do in Curitiba, ensuring a memorable and enriching visit to this southern Brazilian gem."}
      highlights={["Jardim Botânico de Curitiba",
        "Museu Oscar Niemeyer (MON)",
        "Ópera de Arame",
        "Parque Tanguá",
        "Feira do Largo da Ordem"]}
      attractions={[
        {
        name: "Jardim Botânico de Curitiba",
        description: "The Botanical Garden is Curitiba's most famous landmark and an unmissable sight. Inspired by the Crystal Palace in London, its magnificent art nouveau greenhouse is the centerpiece, housing a collection of tropical plants from across Brazil. The structure's elegant metal and glass design stands out against the meticulously manicured French-style gardens that surround it.\n\nBeyond the greenhouse, visitors can explore the Botanical Museum, stroll along serene paths, and admire the 'Garden of Sensations,' an immersive trail designed to be experienced blindfolded to heighten the senses of touch and smell. It’s a perfect spot for a leisurely walk, photography, or simply relaxing in one of the city's most beautiful settings.",
        practicalInfo: {
        howToGetThere: "Located in the Jardim Botânico neighborhood. Accessible via the Linha Turismo (Tourist Bus Line) or regular city buses.",
        openingHours: "Garden: Daily, 6:00 AM - 7:30 PM. Greenhouse: Daily, 9:00 AM - 5:00 PM.",
        cost: "Free admission.",
        website: "https://www.curitiba.pr.gov.br/idioma/ingles/botanical-garden/23"
      }
      },
        {
        name: "Museu Oscar Niemeyer (MON)",
        description: "Affectionately known as the 'Museu do Olho' or 'Eye Museum,' this architectural marvel was designed by the legendary Brazilian architect Oscar Niemeyer. The main building is a bold, eye-shaped structure balanced on a giant yellow pillar, which is connected to an older, more conventional building. The unique design alone is worth the visit.\n\nThe museum's collection focuses on visual arts, architecture, and design, featuring works from prominent Brazilian and international artists. With constantly rotating exhibitions, there is always something new to see. It’s a cultural hub that celebrates creativity and stands as a testament to Niemeyer's groundbreaking vision.",
        practicalInfo: {
        howToGetThere: "Located in the Centro Cívico neighborhood. Accessible via the Linha Turismo or city buses.",
        openingHours: "Tuesday to Sunday, 10:00 AM - 6:00 PM. Closed on Mondays.",
        cost: "R$30 (full price), R$15 (half price). Free admission on Wednesdays.",
        website: "https://www.museuoscarniemeyer.org.br/"
      }
      },
        {
        name: "Ópera de Arame (Wire Opera House)",
        description: "Nestled in a former quarry surrounded by lush vegetation and a lake, the Ópera de Arame is a stunning piece of architecture. Built from steel tubes and transparent polycarbonate, its delicate, circular structure appears to float above the water, creating a magical atmosphere. You access the theater via a metal walkway over the lake.\n\nThe venue hosts a variety of concerts, plays, and events, and its acoustics are superb. Even if you don't catch a show, visiting during the day to admire its unique design and the surrounding Pedreira Paulo Leminski park is a must. The entire complex is a beautiful example of integrating man-made structures with nature.",
        practicalInfo: {
        howToGetThere: "Located in the Abranches neighborhood, next to Pedreira Paulo Leminski. Best reached by car, ride-sharing, or the Linha Turismo.",
        openingHours: "Tuesday to Sunday, 10:00 AM - 6:00 PM.",
        cost: "R$15 (full price), R$7.50 (half price).",
        website: "https://www.operaarame.com.br/"
      }
      },
        {
        name: "Parque Tanguá",
        description: "Another brilliant example of urban revitalization, Parque Tanguá was built on the site of two abandoned quarries. The park is split into two levels connected by a walkway and a towering 65-meter waterfall. The upper level features a viewpoint with a stunning panoramic view of the park and the city skyline, making it a favorite spot for watching the sunset.\n\nThe lower level includes a lake, a bike path, and the Poty Lazzarotto garden. Visitors can take an elevator or walk down to explore the tunnel carved into the rock face that runs behind the waterfall. The park’s dramatic landscape and beautiful gardens make it one of Curitiba's most impressive green spaces.",
        practicalInfo: {
        howToGetThere: "Located in the Pilarzinho neighborhood. Accessible via the Linha Turismo.",
        openingHours: "Daily, 6:00 AM - 8:00 PM.",
        cost: "Free admission.",
        website: "https://www.curitiba.pr.gov.br/idioma/ingles/tangua-park/90"
      }
      },
        {
        name: "Feira do Largo da Ordem",
        description: "Every Sunday morning, Curitiba's historic center, Largo da Ordem, transforms into a massive and vibrant open-air market. The 'Feira do Largo' is a city institution, drawing thousands of locals and tourists alike. You can find everything here: local arts and crafts, handmade jewelry, clothing, antiques, and a huge variety of street food.\n\nThe atmosphere is lively, with street performers, musicians, and capoeira circles adding to the festive mood. It's the perfect place to buy unique souvenirs, sample classic Brazilian snacks like pastel and caldo de cana (sugarcane juice), and immerse yourself in the local culture. Arrive early to beat the biggest crowds.",
        practicalInfo: {
        howToGetThere: "Located in the Centro Histórico (Historic Center). Easily accessible by foot from downtown hotels.",
        openingHours: "Sundays only, 9:00 AM - 2:00 PM.",
        cost: "Free to browse; costs vary for purchases.",
        website: "N/A"
      }
      },
        {
        name: "Bosque Alemão (German Woods)",
        description: "This enchanting park pays homage to the German immigrants who settled in Curitiba. The Bosque Alemão features a dense native forest with several attractions woven into it. The main path, the 'Hansel and Gretel Trail' (Trilha de João e Maria), retells the famous Grimm fairy tale through a series of illustrated panels, leading to a gingerbread-and-candy-themed house that serves as a children's library.\n\nAt the top of the park, you'll find the 'Philosopher's Tower,' a wooden replica of an old watchtower that offers a beautiful view of the city. The park also includes the Oratório de Bach, a concert hall dedicated to the German composer. It's a charming and whimsical place for both families and adults.",
        practicalInfo: {
        howToGetThere: "Located in the Vista Alegre (Jardim Schaffer) neighborhood. Accessible via the Linha Turismo.",
        openingHours: "Park: Daily, 8:00 AM - 8:00 PM. Library: Daily, 9:00 AM - 5:00 PM.",
        cost: "Free admission.",
        website: "https://www.curitiba.pr.gov.br/idioma/ingles/german-woods/89"
      }
      },
        {
        name: "Parque Barigui",
        description: "Parque Barigui is one of Curitiba's largest and most popular parks, a beloved spot for locals to exercise, socialize, and relax. Spanning 1.4 million square meters, it features a huge lake, extensive lawns, sports courts, barbecue pits, and a network of paths for jogging, cycling, and walking. The park is also a wildlife haven, and you are almost guaranteed to see capybaras lounging by the water.\n\nThe park houses an exhibition center, a restaurant, and the Curitiba Automobile Museum. It's the perfect representation of the city's outdoor lifestyle and a great place to spend an afternoon people-watching or having a picnic.",
        practicalInfo: {
        howToGetThere: "Located in the Bigorrilho neighborhood. Accessible by city bus or a short taxi/ride-share trip from the city center.",
        openingHours: "Open 24/7.",
        cost: "Free admission.",
        website: "https://www.curitiba.pr.gov.br/idioma/ingles/barigui-park/88"
      }
      },
        {
        name: "Memorial Ucraniano (Ukrainian Memorial)",
        description: "A tribute to Paraná's large Ukrainian immigrant community, this unique memorial is located within Tingui Park. The centerpiece is a stunning replica of the St. Michael the Archangel Church, a wooden church with a distinctive Byzantine design and a golden dome. The structure was built in Ukraine, disassembled, and then reassembled in Curitiba.\n\nInside the church, you'll find a permanent exhibition of 'pêssankas' (intricately decorated Easter eggs) and other Ukrainian cultural artifacts. The surrounding park is beautiful, with a large lake and plenty of green space, making the memorial a peaceful and culturally enriching stop.",
        practicalInfo: {
        howToGetThere: "Located inside Parque Tingui, in the São João neighborhood. Accessible via the Linha Turismo.",
        openingHours: "Tuesday to Sunday, 10:00 AM - 6:00 PM.",
        cost: "Free admission.",
        website: "https://www.curitiba.pr.gov.br/idioma/ingles/ukrainian-memorial/91"
      }
      },
        {
        name: "Centro Histórico (Historic Center)",
        description: "Beyond the Sunday market, the Centro Histórico is worth exploring on any day of the week. This charming area is filled with cobblestone streets, colorful colonial-era buildings, churches, and quaint squares like Largo da Ordem. It’s the oldest part of the city and the heart of its cultural life.\n\nHere you can visit the Igreja da Ordem Terceira de São Francisco (the city's oldest church), the Garibaldi Fountain, and the Bebedouro, a historic horse trough. The area is packed with cozy bars, restaurants, and art galleries. A walk through these streets offers a glimpse into Curitiba's past and its bohemian present.",
        practicalInfo: {
        howToGetThere: "Located west of the main downtown area. Best explored on foot.",
        openingHours: "Public space, always open. Businesses have individual hours.",
        cost: "Free to explore.",
        website: "N/A"
      }
      },
        {
        name: "Mercado Municipal de Curitiba",
        description: "The Municipal Market is a paradise for food lovers. This bustling, historic market is where you can find a vast array of fresh produce, cheeses, meats, spices, and imported goods. It’s a feast for the senses, with vibrant colors and tantalizing aromas filling the air. It’s the perfect place to discover local flavors and ingredients.\n\nThe market also features a popular food court on the upper level, offering a wide range of dining options, from traditional Brazilian dishes to international cuisine. Be sure to try a 'pastel' or a 'pão com bolinho' (a local meatball sandwich). There's also an organic section open on specific days.",
        practicalInfo: {
        howToGetThere: "Located in the Centro neighborhood, a short walk from the main bus terminal.",
        openingHours: "Tuesday to Saturday, 8:00 AM - 6:00 PM; Sunday, 8:00 AM - 1:00 PM. Closed on Mondays.",
        cost: "Free to enter; costs vary for purchases.",
        website: "https://www.mercadomunicipaldecuritiba.com.br/"
      }
      },
        {
        name: "UNILIVRE (Universidade Livre do Meio Ambiente)",
        description: "The Free University of the Environment is another of Curitiba's innovative projects, a non-profit organization dedicated to disseminating knowledge about the environment and sustainability. The university itself is an architectural spectacle, built from eucalyptus logs in a spiral design that rises out of a flooded quarry.\n\nVisitors can climb the ramp that winds around the structure for beautiful views of the surrounding native forest and lake. The site embodies Curitiba's ethos of ecological preservation and creative reuse of space. It's a quiet, thought-provoking place that feels a world away from the city bustle.",
        practicalInfo: {
        howToGetThere: "Located in the Pilarzinho neighborhood. Accessible via the Linha Turismo.",
        openingHours: "Daily, 8:00 AM - 7:00 PM.",
        cost: "Free admission.",
        website: "https://unilivre.org.br/"
      }
      },
        {
        name: "Museu Egípcio e Rosacruz",
        description: "For a completely unexpected and fascinating experience, visit the Egyptian and Rosicrucian Museum. It holds one of the most significant collections of Egyptian artifacts in Latin America, including a real female mummy, 'Tothmea,' and her sarcophagus. The museum is run by the Rosicrucian Order and is designed to immerse visitors in the world of ancient Egypt.\n\nThe exhibits cover Egyptian dynasties, beliefs about the afterlife, and daily life, featuring replicas and original pieces. The building's neo-Egyptian architecture, complete with sphinxes and hieroglyphic-style carvings, adds to the unique atmosphere. It’s a hidden gem for history buffs.",
        practicalInfo: {
        howToGetThere: "Located in the Bacacheri neighborhood. Best reached by city bus, taxi, or ride-sharing.",
        openingHours: "Tuesday to Friday, 10:00 AM - 5:30 PM; Saturday and Sunday, 10:00 AM - 5:00 PM.",
        cost: "R$24 (full price), R$12 (half price).",
        website: "https://www.museuegipcioerosacruz.org.br/"
      }
      },
        {
        name: "Passeio Público",
        description: "Opened in 1886, the Passeio Público is Curitiba's first public park and zoo. This historic park offers a slice of tranquility right in the city center. It features lakes with boat rentals, islands inhabited by monkeys and other small animals, and a beautiful Art Nouveau gateway that serves as its main entrance.\n\nWhile the animal enclosures are small by modern standards, the park remains a charming destination for a peaceful walk. It’s a living piece of Curitiba's history and a testament to the city's long-standing commitment to creating green public spaces for its citizens.",
        practicalInfo: {
        howToGetThere: "Located on the edge of the Centro neighborhood, easy to walk to from downtown.",
        openingHours: "Tuesday to Sunday, 6:00 AM - 8:00 PM. Closed on Mondays for maintenance.",
        cost: "Free admission.",
        website: "https://www.curitiba.pr.gov.br/idioma/ingles/passeio-publico/36"
      }
      },
        {
        name: "Torre Panorâmica (Panoramic Tower)",
        description: "For the best 360-degree views of Curitiba, head to the Torre Panorâmica. This telecommunications tower, operated by Oi, has an observation deck nearly 110 meters high, offering an unparalleled perspective of the city's layout, its skyscrapers, and its vast green areas. On clear days, you can even see the Serra do Mar mountains in the distance.\n\nThe deck features a large mosaic map on the floor pointing out key landmarks, helping you orient yourself and identify the places you've visited. It's an excellent way to appreciate the scale of the city and its masterful urban planning.",
        practicalInfo: {
        howToGetThere: "Located in the Mercês neighborhood. Accessible via the Linha Turismo.",
        openingHours: "Tuesday to Sunday, 10:00 AM - 6:00 PM.",
        cost: "R$10 (full price), R$5 (half price).",
        website: "https://www.curitiba.pr.gov.br/idioma/ingles/panoramic-tower/105"
      }
      },
        {
        name: "Santa Felicidade",
        description: "Santa Felicidade is Curitiba's vibrant Italian heart. This large neighborhood was founded by Italian immigrants in the 19th century and retains a strong connection to its roots. The main thoroughfare, Avenida Manoel Ribas, is lined with enormous Italian restaurants, wineries, and shops selling cheese, salami, and crafts.\n\nA visit here is all about the food. The restaurants are famous for their all-you-can-eat 'rodízio' style service, featuring endless courses of pasta, polenta, fried chicken, and salads. It’s a boisterous, festive, and delicious experience that offers a taste of the immigrant culture that shaped Curitiba.",
        practicalInfo: {
        howToGetThere: "Located about 7km from the city center. Best reached by city bus (including a dedicated Santa Felicidade line) or ride-sharing.",
        openingHours: "Restaurants are typically open for lunch and dinner. Shops generally follow commercial hours.",
        cost: "Free to explore. Restaurant prices vary, but rodízio meals are typically R$60-R$90 per person.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Curitiba is famous for its Bus Rapid Transit (BRT) system, a highly efficient and affordable way to navigate the city. For tourists, the 'Linha Turismo' is a fantastic hop-on, hop-off bus that stops at 26 major attractions. Ride-sharing apps like Uber and 99 are widely available and convenient. The central and historic areas are very walkable.",
        whereToStay: "Batel is an upscale neighborhood known for its trendy bars, fine dining, and luxury hotels. The Centro Histórico offers charming boutique hotels and hostels with a bohemian vibe, perfect for being close to the action. For budget-conscious travelers and convenience, Centro (downtown) provides a wide range of accommodation options close to major transport links.",
        bestTimeToVisit: "The best times to visit Curitiba are during the spring (September to November) and autumn (March to May) when temperatures are pleasant and the city's parks are at their most beautiful. Summers (December to February) can be warm and rainy, while winters (June to August) are cool and damp, with temperatures occasionally dropping near freezing.",
        suggestedItinerary: "Day 1: Explore the Centro Histórico, visit the Feira do Largo da Ordem if it's a Sunday. In the afternoon, visit the Museu Oscar Niemeyer and then the Ópera de Arame. Day 2: Start your morning at the iconic Jardim Botânico. Head to the Mercado Municipal for lunch and to browse local goods. In the afternoon, get a bird's-eye view from the Torre Panorâmica. Day 3: Immerse yourself in nature at Parque Tanguá and the nearby Bosque Alemão. For dinner, head to the Santa Felicidade neighborhood for a traditional Italian rodízio feast."
      }}
      faqs={[{
          question: "Is Curitiba expensive?",
          answer: "Curitiba is generally more affordable than Brazil's major tourist hubs like Rio de Janeiro or São Paulo. Accommodation, food, and transportation costs are reasonable. A meal at a mid-range restaurant can cost around R$40-R$70, and the efficient bus system is very budget-friendly. Many of the city's best attractions, like its parks, are free."
        },
        {
          question: "How many days do you need in Curitiba?",
          answer: "A stay of 3 to 4 days is ideal to experience the best of Curitiba. This allows enough time to explore the main parks (Jardim Botânico, Tanguá), visit key cultural sites (MON, Ópera de Arame), wander the historic center, and enjoy a meal in Santa Felicidade without feeling rushed."
        },
        {
          question: "Is Curitiba safe?",
          answer: "Curitiba is considered one of Brazil's safer state capitals. Tourist areas like Batel, the Centro Histórico, and the main parks are generally safe during the day. However, like in any large city, it's important to take precautions. Avoid walking alone in deserted areas at night, be mindful of your belongings in crowded places like markets and bus stations, and use ride-sharing apps or taxis after dark."
        },
        {
          question: "What is Curitiba famous for?",
          answer: "Curitiba is famous globally for its innovative urban planning, which has made it a benchmark for sustainability and quality of life. It's known as Brazil's 'Green Capital' due to its vast network of interconnected parks. Key icons include the glass and steel Jardim Botânico, the unique Ópera de Arame (Wire Opera House), and the striking Museu Oscar Niemeyer."
        }
      ]}
    />
  );
};