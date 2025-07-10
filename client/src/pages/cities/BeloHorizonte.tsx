import React from 'react';
import { CityPage } from '../../components/CityPage';

export const BeloHorizonte: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Belo Horizonte, Brazil (2025 Guide)"}
      description={"Welcome to Belo Horizonte, Brazil's vibrant 'bar capital' and a hidden gem nestled in the mountains of Minas Gerais. As one of Brazil's first planned modern cities, its organized grid is an urban explorer's dream, framed by the stunning Serra do Curral mountain range. Famous for its world-class gastronomy, particularly its heavenly pão de queijo, and a legendary nightlife with a bar on almost every corner, BH offers a truly authentic Brazilian experience. Beyond the culinary delights, you'll find a thriving cultural scene, anchored by the architectural wonders of Oscar Niemeyer and a circuit of impressive museums. For travelers seeking a destination that beautifully blends urban energy with rich cultural heritage, exploring the best things to do in Belo Horizonte is an unforgettable adventure waiting to happen. It's a city that captures the heart of Brazil."}
      highlights={["Pampulha Modern Ensemble",
        "Mercado Central",
        "Praça da Liberdade & Circuito Cultural",
        "Inhotim Institute",
        "Parque da Serra do Curral"]}
      galleryImages={[
        { url: "", alt: "BeloHorizonte landmark 1", caption: "BeloHorizonte landmark 1 - placeholder" },
        { url: "", alt: "BeloHorizonte landmark 2", caption: "BeloHorizonte landmark 2 - placeholder" },
        { url: "", alt: "BeloHorizonte landmark 3", caption: "BeloHorizonte landmark 3 - placeholder" },
        { url: "", alt: "BeloHorizonte landmark 4", caption: "BeloHorizonte landmark 4 - placeholder" },
        { url: "", alt: "BeloHorizonte landmark 5", caption: "BeloHorizonte landmark 5 - placeholder" },
        { url: "", alt: "BeloHorizonte landmark 6", caption: "BeloHorizonte landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Pampulha Modern Ensemble",
        description: "A UNESCO World Heritage site, the Pampulha Modern Ensemble is a visionary project designed by legendary architect Oscar Niemeyer in the 1940s. Centered around a large artificial lake, this complex is a landmark of modern architecture. The main highlights include the Church of Saint Francis of Assisi, with its bold curves and stunning tile murals by Cândido Portinari; the Casa do Baile, a charming dance hall that seems to float on the water; the Museu de Arte da Pampulha (MAP), originally a casino; and the former Yacht Club. \n\nExploring this area offers a fascinating glimpse into the creative genius that would later define Brasília, the nation's capital. Renting a bike to circle the lake is a popular way to experience all the different buildings and enjoy the scenic views, making it a perfect blend of culture, architecture, and recreation.",
        practicalInfo: {
        howToGetThere: "Located in the Pampulha neighborhood, about 9 km from the city center. Best reached by ride-sharing app or bus lines (e.g., 5106 from the center).",
        openingHours: "Outdoor areas are always accessible. Individual building hours vary, typically Tue-Sun, 9 AM - 6 PM. Check individual sites.",
        cost: "Free to visit the area. Small entrance fees for the Church, MAP, and Casa do Baile (around R$5-R$15 each).",
        website: "https://www.pbh.gov.br/fundacaomunicipaldecultura"
      }
      },
        {
        name: "Mercado Central",
        description: "The vibrant, bustling heart of Belo Horizonte, the Mercado Central is an absolute must-visit. This sprawling indoor market is a sensory overload in the best way possible, with over 400 stalls selling everything from local cheeses (especially the famous queijo minas), cachaça, fruits, and spices to handicrafts, religious artifacts, and even live birds. It's the perfect place to immerse yourself in the local culture and sample the flavors of Minas Gerais.\n\nDon't leave without trying a slice of liver with jiló (scarlet eggplant) at a traditional market bar, washed down with a cold chopp (draft beer). It's a beloved local ritual. The energy is infectious, the smells are intoxicating, and you can easily spend hours wandering the aisles, discovering new tastes and treasures.",
        practicalInfo: {
        howToGetThere: "Located centrally at Av. Augusto de Lima, 744 - Centro. Easily walkable from downtown hotels or a short taxi ride.",
        openingHours: "Mon-Sat 8 AM - 6 PM, Sun & Holidays 8 AM - 1 PM.",
        cost: "Free to enter. Prices for goods and food vary.",
        website: "https://mercadocentral.com.br/"
      }
      },
        {
        name: "Praça da Liberdade & Circuito Cultural",
        description: "Once the political heart of Minas Gerais, Praça da Liberdade is a magnificent square surrounded by ornate, French-inspired government buildings. Today, these historic palaces have been transformed into a stunning cultural circuit, housing some of the city's best museums and cultural centers. This pedestrian-friendly complex invites you to stroll through beautiful gardens and pop into various institutions, all within a few blocks.\n\nKey venues include the Memorial Minas Gerais Vale, an interactive museum dedicated to the state's culture and history; the Centro Cultural Banco do Brasil (CCBB), hosting world-class art exhibitions; and the Espaço do Conhecimento UFMG, a fascinating science and planetarium museum. You can easily spend a full day here, soaking up art, history, and the grand architecture.",
        practicalInfo: {
        howToGetThere: "Located at the southern end of Avenida João Pinheiro. Accessible by multiple bus lines or a pleasant walk from Savassi.",
        openingHours: "Square is always open. Museums are generally Tue-Sun, 10 AM - 6 PM. Some have late hours on Thursdays.",
        cost: "Free to enter the square and most museums in the circuit.",
        website: "http://circuitoliberdade.mg.gov.br/"
      }
      },
        {
        name: "Inhotim Institute",
        description: "While technically located in the nearby town of Brumadinho, the Inhotim Institute is an essential day trip from Belo Horizonte and one of the world's most extraordinary destinations for art lovers. It is the largest open-air contemporary art center in Latin America, where stunning art installations are seamlessly integrated into a breathtaking botanical garden. The sprawling grounds feature works by renowned international and Brazilian artists, housed in unique pavilions scattered across the landscape.\n\nPlan for a full day of walking (or rent a golf cart) to explore the vast park. The fusion of nature and art is profound, creating a unique and immersive experience that is both intellectually stimulating and spiritually restorative. It's a world-class attraction that justifies a trip to the region on its own.",
        practicalInfo: {
        howToGetThere: "Located in Brumadinho, 60 km from Belo Horizonte. A dedicated bus service runs from the main bus terminal (Rodoviária) or you can book a transfer.",
        openingHours: "Tue-Fri 9:30 AM - 4:30 PM, Sat-Sun & Holidays 9:30 AM - 5:30 PM. Closed on Mondays.",
        cost: "Around R$50. It's recommended to book tickets online in advance.",
        website: "https://www.inhotim.org.br/"
      }
      },
        {
        name: "Parque da Serra do Curral",
        description: "For the best panoramic views of Belo Horizonte, head to Parque da Serra do Curral. This park protects the mountain range that serves as the city's iconic 'frame' and offers a refreshing escape into nature. A well-maintained, paved path leads up to several viewpoints (mirantes), each providing a spectacular perspective of the city's skyline and surrounding landscape. It's a popular spot for locals to exercise, watch the sunset, and appreciate the city's unique geography.\n\nFor more adventurous visitors, guided hikes are available to reach the higher, more rugged peaks of the sierra. This offers a more challenging trek and even more impressive vistas. Whether you opt for a gentle walk or a strenuous hike, the views are an incredible reward.",
        practicalInfo: {
        howToGetThere: "The main entrance is in the Mangabeiras neighborhood (Praça Estado de Israel). Best reached by car or ride-sharing app.",
        openingHours: "Tue-Sun, 8 AM - 5 PM (last entry at 4 PM).",
        cost: "Free entry to the main park area. Guided hikes have a fee.",
        website: "https://www.pbh.gov.br/parques"
      }
      },
        {
        name: "Memorial Minas Gerais Vale",
        description: "Located in the historic Praça da Liberdade, the Memorial Minas Gerais Vale is one of the most engaging and well-executed museums in Brazil. Housed in the stunning former State Treasury building, it uses interactive technology and creative exhibits to tell the story of Minas Gerais, its people, history, art, and traditions. The experience is a sensory journey, from rooms celebrating literary figures like Carlos Drummond de Andrade to exhibits on baroque art and local village life.\n\nThe museum masterfully blends historical artifacts with modern multimedia displays, making it accessible and fascinating for all ages. It provides deep context to the state you're visiting and is a highlight of the Circuito Cultural.",
        practicalInfo: {
        howToGetThere: "On the Praça da Liberdade circuit, easily walkable from the city center or Savassi.",
        openingHours: "Tue, Wed, Fri, Sat 10 AM - 5:30 PM; Thu 10 AM - 9:30 PM; Sun 10 AM - 3:30 PM. Closed Mondays.",
        cost: "Free.",
        website: "http://www.memorialvale.com.br/"
      }
      },
        {
        name: "Palácio das Artes",
        description: "The main cultural complex of the city, the Palácio das Artes is a hub for performance and visual arts. It houses three theaters, a cinema, art galleries, and a library. The programming is diverse and high-quality, featuring everything from classical concerts by the Minas Gerais Philharmonic Orchestra to contemporary dance, popular music shows, and avant-garde theater. Even if you don't catch a show, it's worth visiting to see the building itself and check out the free exhibitions in its art galleries.\n\nThe complex, designed by Oscar Niemeyer, is integrated with the Parque Municipal, creating a seamless flow between urban culture and green space. It's a cornerstone of the city's artistic life.",
        practicalInfo: {
        howToGetThere: "Av. Afonso Pena, 1537 - Centro. Located next to the Parque Municipal.",
        openingHours: "Box office and galleries typically open Tue-Sun. Check website for specific event times.",
        cost: "Exhibitions are often free. Ticket prices for performances vary widely.",
        website: "https://fcs.mg.gov.br/"
      }
      },
        {
        name: "Feira Hippie (Hippie Fair)",
        description: "Every Sunday morning, Avenida Afonso Pena transforms into one of the largest open-air markets in Latin America. The Feira de Artes, Artesanato e Produtores de Variedades de Belo Horizonte, affectionately known as the Feira Hippie, is a massive affair with thousands of stalls. You can find an incredible variety of goods here, including leather products, clothing, jewelry, home decor, furniture, and art. It's a fantastic place for souvenir shopping and to see local craftsmanship up close.\n\nBeyond the shopping, there's a huge food court area with dozens of stalls serving up classic Mineiro dishes like feijão tropeiro and pastel. The atmosphere is lively and crowded, offering a genuine slice of local life. Arrive early to beat the biggest crowds and the midday sun.",
        practicalInfo: {
        howToGetThere: "Takes over a large stretch of Avenida Afonso Pena in the city center.",
        openingHours: "Every Sunday, approximately 8 AM - 2 PM.",
        cost: "Free to browse.",
        website: "N/A"
      }
      },
        {
        name: "Mineirão Stadium & Brazilian Football Museum",
        description: "Football is a religion in Brazil, and the Mineirão Stadium is one of its most sacred temples. This legendary stadium has hosted World Cup matches (including the infamous Brazil 7-1 Germany semi-final in 2014), and is home to local powerhouse clubs Cruzeiro and Atlético Mineiro. On non-match days, you can take a guided tour to see the locker rooms, press area, and walk out onto the pitch side.\n\nThe stadium also houses the excellent Museu Brasileiro do Futebol (Brazilian Football Museum), which offers a comprehensive look at the history of the sport in Brazil. It's a must-see for any sports fan, providing context to the passion that drives the nation.",
        practicalInfo: {
        howToGetThere: "Located near the Pampulha lake. Take bus 64 from the city center or use a ride-sharing app.",
        openingHours: "Museum and Tours: Tue-Sun, 9 AM - 5 PM. Hours change on match days.",
        cost: "Around R$20-R$40 for the combined museum and tour.",
        website: "https://www.estadiomineirao.com.br/"
      }
      },
        {
        name: "Savassi Neighborhood",
        description: "Savassi is Belo Horizonte's trendiest and most vibrant neighborhood. It's a fantastic area to explore on foot, with leafy streets, boutique shops, art galleries, and an endless array of cafes, bars, and restaurants. During the day, it's a popular spot for shopping and a leisurely lunch. By night, Savassi comes alive as the city's premier nightlife district, with locals and visitors alike filling the sidewalk tables of its many 'botecos' (pubs).\n\nPraça da Savassi is the central point, but the charm is in wandering the surrounding streets like Rua Pernambuco and Rua Tomé de Souza. Whether you're looking for a sophisticated meal, a casual beer, live music, or just a great place to people-watch, Savassi is the place to be.",
        practicalInfo: {
        howToGetThere: "South of the city center, easily walkable from Lourdes or a short taxi ride from most central locations.",
        openingHours: "Shops are typically 9 AM - 7 PM. Bars and restaurants stay open late.",
        cost: "Free to explore. Costs vary depending on establishment.",
        website: "N/A"
      }
      },
        {
        name: "Centro Cultural Banco do Brasil (CCBB)",
        description: "A key anchor of the Praça da Liberdade cultural circuit, the CCBB is renowned for hosting major national and international art exhibitions. Housed in a magnificent historic building, the center's galleries are spacious and modern, providing a perfect backdrop for impressive displays of painting, sculpture, photography, and interactive installations. The quality of the exhibitions is consistently high, often featuring blockbuster shows that have toured the world.\n\nIn addition to the visual arts, the CCBB also has a theater, a cinema, and a lovely cafe, making it a cultural hub where you can spend several hours. Its location on the circuit makes it easy to combine with visits to other nearby museums.",
        practicalInfo: {
        howToGetThere: "Located on the Praça da Liberdade circuit.",
        openingHours: "Wed-Mon, 10 AM - 10 PM. Closed Tuesdays.",
        cost: "Free entry to exhibitions.",
        website: "https://ccbb.com.br/belo-horizonte/"
      }
      },
        {
        name: "Mirante das Mangabeiras",
        description: "For a different but equally stunning view of the city, visit the Mirante das Mangabeiras. Located behind the Governor's Palace, this viewpoint offers a sweeping vista of the city against the backdrop of the Serra do Curral. It's a more tranquil and landscaped alternative to the wilder Parque da Serra do Curral, with wooden decks perfect for photography and contemplation. It is particularly beautiful at dusk as the city lights begin to twinkle on.\n\nThe viewpoint is part of the larger Parque das Mangabeiras, one of the biggest urban parks in Latin America, although the main park area has separate access points and activities. The mirante itself is a dedicated space for enjoying the view.",
        practicalInfo: {
        howToGetThere: "Located at the end of Avenida José do Patrocínio Pontes in the Mangabeiras neighborhood. Best reached by car or ride-sharing app.",
        openingHours: "Tue-Sun, 9 AM - 6:30 PM.",
        cost: "Free.",
        website: "https://www.pbh.gov.br/fundacao-de-parques-e-zoobotanica"
      }
      },
        {
        name: "Museu de Artes e Ofícios",
        description: "Situated in the beautiful, historic Central Train Station (Estação Central), the Museum of Arts and Crafts celebrates the history of labor and production in pre-industrial Brazil. Its vast and impressive collection features thousands of tools, utensils, and machines from the 18th century onwards, covering dozens of different trades from blacksmithing and shoemaking to weaving and cheesemaking. It offers a unique and profound perspective on the country's social and economic history through the lens of its workers.\n\nThe museum's displays are beautifully curated within the station's grand halls, creating a powerful juxtaposition between the industrial age of the railway and the craft-based eras that preceded it. It's a fascinating and often overlooked museum.",
        practicalInfo: {
        howToGetThere: "Located in the main train station building at Praça Rui Barbosa (Praça da Estação), next to the Metro Central station.",
        openingHours: "Tue, Thu, Fri 12 PM - 7 PM; Wed 12 PM - 9 PM; Sat & Sun 11 AM - 5 PM.",
        cost: "Free.",
        website: "http://www.mao.org.br/"
      }
      },
        {
        name: "Parque Municipal Américo Renné Giannetti",
        description: "An oasis of green in the heart of downtown Belo Horizonte, the Parque Municipal is the city's oldest and most traditional park. Inaugurated in 1897, it was inspired by French parks and features beautiful gardens, large trees, and a series of small lakes where you can rent paddle boats. It's a beloved spot for locals to escape the urban hustle, have a picnic, or go for a run.\n\nThe park also contains the Palácio das Artes, a small amusement park for children, and the Teatro Francisco Nunes. It's a charming place for a leisurely stroll, offering a peaceful respite right next to the busy Avenida Afonso Pena.",
        practicalInfo: {
        howToGetThere: "Av. Afonso Pena, 1377 - Centro. Easily accessible from anywhere downtown.",
        openingHours: "Tue-Sun, 6 AM - 6 PM.",
        cost: "Free.",
        website: "https://www.pbh.gov.br/parques"
      }
      },
        {
        name: "Edifício Maletta",
        description: "The Maletta Building is a Belo Horizonte institution and the heart of the city's bohemian and intellectual scene. By day, its ground floor and mezzanine are filled with traditional bookstores ('sebos') selling used books, vinyl record shops, and simple restaurants serving 'prato feito' (set lunch plates). It has a nostalgic, intellectual vibe that feels like stepping back in time.\n\nBy night, especially on the upper terrace, the atmosphere transforms. The space becomes a bustling hub of alternative bars and restaurants, popular with students, artists, and activists. It's a fantastic place to find cheap beer, interesting conversations, and a less polished, more authentic side of BH's nightlife compared to the more upscale Savassi.",
        practicalInfo: {
        howToGetThere: "Corner of Av. Augusto de Lima and Rua da Bahia - Centro.",
        openingHours: "Shops and restaurants have their own hours. The building is generally open from morning until late at night.",
        cost: "Free to enter. Food and drinks are generally very affordable.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Walking is feasible in central neighborhoods like Centro, Lourdes, and Savassi. For longer distances, ride-sharing apps like Uber and 99 are widely available, affordable, and generally the most convenient option for tourists. The city has an extensive bus system, which is economical but can be confusing for non-locals. The metro has only one line and is useful for specific routes, such as connecting the center to the main bus terminal (Rodoviária).",
        whereToStay: "Savassi is the top choice for most visitors, offering a great selection of hotels, restaurants, and bars in a safe, walkable area. Lourdes is a more upscale, chic neighborhood adjacent to Savassi, known for its high-end dining. For budget travelers, the Centro (downtown) area has more affordable options but requires more caution at night. Pampulha is an option if you want to be close to the lake and stadium, but it's far from the main city buzz.",
        bestTimeToVisit: "The best time to visit Belo Horizonte is during the dry season, from April to September. During these months, you can expect pleasant, mild temperatures and plenty of sunshine, perfect for exploring the city's parks and outdoor attractions. The summer months (December to March) are warmer and significantly wetter, with frequent afternoon thunderstorms.",
        suggestedItinerary: "Day 1: Explore the Centro. Start at the Mercado Central for breakfast and browsing. Walk to Praça da Estação to see the Museu de Artes e Ofícios. In the evening, experience the bohemian nightlife at the Edifício Maletta. \nDay 2: Culture & Views. Spend the morning at the Circuito Cultural Praça da Liberdade, visiting the Memorial Vale and CCBB. In the afternoon, take a ride up to Parque da Serra do Curral for sunset views. Enjoy dinner in the chic Lourdes neighborhood. \nDay 3: Modernism & Nightlife. Dedicate the day to the Pampulha Modern Ensemble. Rent a bike to circle the lake and visit Niemeyer's architectural gems and the Mineirão Stadium. In the evening, dive into the lively bar scene in Savassi."
      }}
      faqs={[{
          question: "Is Belo Horizonte expensive?",
          answer: "Belo Horizonte is generally more affordable than Brazil's main tourist hubs like Rio de Janeiro and São Paulo. Accommodation, food, and transportation costs are noticeably lower. You can enjoy a fantastic meal at a traditional 'boteco' or a 'comida a quilo' (pay-by-weight) restaurant for a very reasonable price. While there are high-end options, it's a city where you can have a rich experience on a moderate budget."
        },
        {
          question: "How many days do you need in Belo Horizonte?",
          answer: "A stay of 3 to 4 days is ideal. This allows you to comfortably explore the main city attractions, including the Centro, Praça da Liberdade, Pampulha, and Savassi. If you plan to visit the world-class Inhotim Institute (which is highly recommended), you should add an entire extra day, as it requires a full-day trip from the city."
        },
        {
          question: "Is Belo Horizonte safe?",
          answer: "Like any large city in Brazil, Belo Horizonte requires awareness and common sense regarding safety. Tourist-heavy areas like Savassi, Lourdes, and Pampulha are generally safe, especially during the day. Exercise caution in the Centro area at night, and avoid walking alone in quiet or poorly lit streets. Using ride-sharing apps like Uber or 99 for nighttime travel is a safe and recommended practice. Avoid displaying expensive jewelry or electronics openly."
        },
        {
          question: "What is Belo Horizonte famous for?",
          answer: "Belo Horizonte is famous for several things. It holds the unofficial title of 'Bar Capital of Brazil' for its incredible density of bars and vibrant nightlife. It's a culinary powerhouse, renowned for its 'comida mineira' (Minas Gerais cuisine), especially its world-famous pão de queijo (cheese bread). Architecturally, it's known for the Pampulha Modern Ensemble, a key work by Oscar Niemeyer. Finally, it serves as the gateway to the historic colonial towns of Minas Gerais and the spectacular Inhotim art park."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxCZWxvJTIwSG9yaXpvbnRlJTIwdHJhdmVsfGVufDB8MHx8fDE3NTIxNDAwODh8MA&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};