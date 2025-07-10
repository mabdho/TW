import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Salvador: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Salvador, Brazil (2025 Guide)"
      description="Welcome to Salvador, the vibrant heart of Afro-Brazilian culture and Brazil's first capital. Perched on the stunning coast of Bahia, this city pulses with an infectious energy, fueled by the rhythms of samba and axé music. Its historic center, the Pelourinho, is a UNESCO World Heritage site, a dazzling maze of pastel-colored colonial buildings, cobblestone streets, and baroque churches. Beyond the architecture, Salvador captivates the senses with the scent of dendê oil from sizzling acarajé stalls and the powerful traditions of Candomblé. From sun-drenched beaches to electrifying cultural performances, Salvador offers a profound journey into the soul of Brazil. Exploring the city reveals a tapestry of history, art, and spirituality, making it essential to discover all the best things to do in Salvador for a truly unforgettable adventure."
      highlights={[
      "Wander Through the Pelourinho",
      "Ride the Elevador Lacerda",
      "Visit the Igreja e Convento de São Francisco",
      "Watch the Sunset at Farol da Barra",
      "Experience the Balé Folclórico da Bahia"
]}
      attractions={[
      {
            "name": "Wander Through the Pelourinho",
            "description": "The Pelourinho is the historic heart of Salvador and a UNESCO World Heritage site. Its steep, cobblestone streets are lined with magnificent, brightly painted colonial buildings, creating a living museum of 17th and 18th-century Portuguese architecture. This area was the city's center during the colonial era and the site of the first slave market in the Americas.\n\nToday, it's a vibrant cultural hub filled with art galleries, shops, restaurants, and music venues. You can feel the city's rhythm here, especially on Tuesdays when the streets come alive with drumming groups (Olodum) and festivities. Simply walking around, soaking in the atmosphere, and admiring the architecture is an essential Salvador experience.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Cidade Alta (Upper City). Best reached by taxi, ride-sharing app, or on foot if you're staying nearby.",
                  "openingHours": "24/7, but shops and restaurants have their own hours, typically 9:00 AM - 7:00 PM.",
                  "cost": "Free to walk around.",
                  "website": "http://www.pelourinho.ba.gov.br/"
            }
      },
      {
            "name": "Ride the Elevador Lacerda",
            "description": "An iconic symbol of Salvador, the Elevador Lacerda is a striking Art Deco public elevator that connects the Cidade Baixa (Lower City) with the Cidade Alta (Upper City). Inaugurated in 1873, it was the first elevator in Brazil and offers one of the most breathtaking panoramic views of the Baía de Todos os Santos (All Saints' Bay).\n\nThe quick, 30-second ride is not just a practical means of transport between the bustling Mercado Modelo below and the historic Pelourinho above; it's a rite of passage for any visitor. The view from the top platform is particularly stunning at sunset.",
            "practicalInfo": {
                  "howToGetThere": "Connects Praça Cairu in the Lower City to Praça Tomé de Souza in the Upper City.",
                  "openingHours": "Daily, approximately 6:00 AM - 11:00 PM.",
                  "cost": "Around BRL 0.15 per ride.",
                  "website": "N/A"
            }
      },
      {
            "name": "Visit the Igreja e Convento de São Francisco",
            "description": "Often called the 'Golden Church,' the Church and Convent of São Francisco is one of the most opulent and significant examples of Brazilian Baroque architecture. While its exterior is relatively simple, the interior will leave you speechless. Nearly every surface is covered in intricate woodcarvings drenched in gold leaf.\n\nThe detailed craftsmanship extends from the ceiling panels, which depict scenes from the life of the Virgin Mary, to the stunning blue-and-white Portuguese tile panels (azulejos) in the cloister that narrate moral stories. It's a dazzling display of wealth and artistry from Brazil's colonial period.",
            "practicalInfo": {
                  "howToGetThere": "Located in the heart of the Pelourinho.",
                  "openingHours": "Monday-Saturday: 9:00 AM - 5:30 PM; Sunday: 10:00 AM - 3:00 PM.",
                  "cost": "Around BRL 5.00 for entry.",
                  "website": "N/A"
            }
      },
      {
            "name": "Watch the Sunset at Farol da Barra",
            "description": "The Barra Lighthouse, or Farol da Barra, stands guard at the entrance of the All Saints' Bay. Housed within the Forte de Santo Antônio da Barra, this historic lighthouse contains the excellent Museu Náutico da Bahia, which showcases maritime artifacts and tells the story of the Portuguese slave trade and navigation.\n\nThe main event, however, is the daily spectacle of the sunset. Locals and tourists gather on the lawn and surrounding rocks to watch the sun dip below the horizon, often erupting in applause as it disappears. It’s a classic Salvador postcard moment and a perfect way to end a day of sightseeing.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Barra neighborhood. Accessible by bus, taxi, or ride-sharing.",
                  "openingHours": "Museum: Daily, 9:00 AM - 6:00 PM. The surrounding area is always open.",
                  "cost": "Museum entry is around BRL 15.00. Watching the sunset from the lawn is free.",
                  "website": "https://www.museunauticodabahia.org.br/"
            }
      },
      {
            "name": "Experience the Balé Folclórico da Bahia",
            "description": "For a powerful and mesmerizing dose of Bahian culture, do not miss a performance by the Balé Folclórico da Bahia. This internationally acclaimed dance troupe performs nightly, showcasing the region's rich African heritage through a series of captivating dances.\n\nThe show includes the sacred dances of the Candomblé Orixás (deities), the lightning-fast footwork of maculelê (a stick-fighting dance), and the mesmerizing, acrobatic movements of capoeira. Held in an intimate theater, the energy, athleticism, and passion of the performers are palpable, making it a truly unforgettable cultural experience.",
            "practicalInfo": {
                  "howToGetThere": "Performances are held at the Teatro Miguel Santana in the Pelourinho.",
                  "openingHours": "Shows typically run Monday-Saturday at 8:00 PM. Check website for schedule.",
                  "cost": "Tickets are approximately BRL 60.00.",
                  "website": "http://www.balefolcloricodabahia.com.br/"
            }
      },
      {
            "name": "Shop at the Mercado Modelo",
            "description": "Located in the Lower City, just across from the Elevador Lacerda, the Mercado Modelo is Salvador's largest and most famous handicraft market. Housed in the old customs building, it's the perfect place to shop for souvenirs, from handmade lace and leather goods to musical instruments like the berimbau and colorful Bahian clothing.\n\nEven if you're not shopping, it's a lively place to explore. The basement holds a mysterious, and sometimes flooded, network of tunnels that are part of the city's lore. Upstairs, you can find restaurants serving traditional Bahian food with great views of the bay.",
            "practicalInfo": {
                  "howToGetThere": "In the Cidade Baixa (Lower City), at Praça Cairu.",
                  "openingHours": "Monday-Saturday: 9:00 AM - 6:00 PM; Sunday: 9:00 AM - 2:00 PM.",
                  "cost": "Free to enter.",
                  "website": "N/A"
            }
      },
      {
            "name": "Relax at Praia do Porto da Barra",
            "description": "Once named one of the best beaches in the world by The Guardian, Praia do Porto da Barra is a small, sheltered cove perfect for swimming. Its calm, clear waters make it a favorite among local families and a great spot to escape the city bustle. The beach is situated inside the All Saints' Bay, protecting it from the strong Atlantic waves.\n\nYou can rent chairs and umbrellas, and vendors walk the beach selling everything from cold beer and grilled cheese (queijo coalho) to fresh acarajé. It’s an urban beach with a fantastic, lively atmosphere, ideal for a relaxing afternoon.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Barra neighborhood.",
                  "openingHours": "24/7.",
                  "cost": "Free. Chair and umbrella rentals cost around BRL 20-30.",
                  "website": "N/A"
            }
      },
      {
            "name": "Tie a Ribbon at Igreja do Bonfim",
            "description": "The Nosso Senhor do Bonfim Church is one of Brazil's most famous pilgrimage sites. It's renowned for its connection to both Catholicism and Candomblé (where the deity Oxalá is syncretized with Jesus). The church is famous for its 'Sala dos Milagres' (Room of Miracles), a room filled with wax and silver replicas of body parts, photos, and letters left by worshippers giving thanks for healed ailments.\n\nOutside, you'll see thousands of colorful wish ribbons (fitas do Senhor do Bonfim) tied to the church gates. Tradition says you should tie a ribbon to your wrist with three knots, making a wish for each. When the ribbon falls off naturally, your wishes are said to come true.",
            "practicalInfo": {
                  "howToGetThere": "Located on the Itapagipe Peninsula, about 8km from the center. Best reached by taxi or ride-sharing.",
                  "openingHours": "Monday-Thursday & Saturday: 6:30 AM - 6:00 PM; Friday & Sunday: 5:30 AM - 6:00 PM.",
                  "cost": "Free to enter.",
                  "website": "https://www.santuariosenhordobonfim.com/"
            }
      },
      {
            "name": "Explore the Rio Vermelho Neighborhood",
            "description": "Known as Salvador's bohemian district, Rio Vermelho comes alive at night. This is the place to go for lively bars, great restaurants, and a more local nightlife experience than the tourist-focused Pelourinho. The heart of the neighborhood is Largo de Santana, where you'll find several stalls selling some of the best acarajé in the city, most famously from Dinha and Cira.\n\nBy day, visit the Casa de Iemanjá, a small shrine to the goddess of the sea. On February 2nd, the neighborhood hosts the massive Festa de Iemanjá, where thousands of people dress in white and leave offerings in the ocean.",
            "practicalInfo": {
                  "howToGetThere": "A coastal neighborhood south of the center. Accessible by bus, taxi, or ride-sharing.",
                  "openingHours": "Bars and restaurants typically open in the late afternoon and stay open late.",
                  "cost": "Free to explore.",
                  "website": "N/A"
            }
      },
      {
            "name": "Visit the Museu de Arte Moderna da Bahia (MAM-BA)",
            "description": "Housed in the historic Solar do Unhão, a 17th-century sugar mill complex, the MAM-BA offers a fascinating blend of history and contemporary art. The museum's collection focuses on modern and contemporary Brazilian artists, particularly from Bahia. The real draw, however, is the setting itself.\n\nThe museum overlooks the Bay of All Saints, and its outdoor sculpture park is a stunning place to wander. On Saturday evenings, the museum hosts 'JAM no MAM,' a popular outdoor jazz session that attracts a cool, diverse crowd. It's a perfect combination of art, music, and incredible views.",
            "practicalInfo": {
                  "howToGetThere": "Located on Avenida Contorno, between Barra and the Cidade Baixa.",
                  "openingHours": "Tuesday-Sunday: 10:00 AM - 6:00 PM.",
                  "cost": "Free entry to the museum. JAM no MAM has a separate entrance fee.",
                  "website": "http://www.mam.ba.gov.br/"
            }
      },
      {
            "name": "See the Orixá Sculptures at Dique do Tororó",
            "description": "The Dique do Tororó is a large man-made lake that serves as a unique open-air art installation. In the middle of the water stand eight enormous sculptures of Orixás, the deities of the Afro-Brazilian Candomblé religion. Created by artist Tatti Moreno, the figures represent gods and goddesses like Iemanjá, Oxum, and Ogum, appearing to dance on the water's surface.\n\nThis site is a powerful public tribute to the city's deep African spiritual roots. There's a walking path around the lake, and it's located right next to the Itaipava Arena Fonte Nova, Salvador's main football stadium.",
            "practicalInfo": {
                  "howToGetThere": "Located between the city center and the stadium. Easily accessible by taxi or ride-sharing.",
                  "openingHours": "24/7.",
                  "cost": "Free.",
                  "website": "N/A"
            }
      },
      {
            "name": "Learn at the Museu Afro-Brasileiro",
            "description": "Located within the historic building of the former Royal College of Medicine in the Pelourinho, the Afro-Brazilian Museum is essential for understanding Salvador's identity. The museum is dedicated to preserving and celebrating the African heritage that is so integral to Brazilian culture.\n\nThe collection includes Candomblé artifacts, traditional masks, musical instruments, and pottery. One of its most impressive displays is a set of magnificent carved wooden panels by artist Carybé, depicting the Orixás of Candomblé with their associated tools and symbols. It offers crucial context for everything you see and experience in the city.",
            "practicalInfo": {
                  "howToGetThere": "Located at the Largo do Terreiro de Jesus in the Pelourinho.",
                  "openingHours": "Monday-Friday: 10:00 AM - 5:00 PM.",
                  "cost": "Around BRL 6.00 (often includes entry to other small museums in the same building).",
                  "website": "https://www.ufba.br/ufba_em_movimento/museu-afro-brasileiro"
            }
      },
      {
            "name": "Take a Day Trip to Praia do Forte",
            "description": "If you have an extra day, consider a trip to Praia do Forte, a charming fishing village located about 80km north of Salvador. It's famous for its beautiful beaches, natural swimming pools formed by reefs at low tide, and the headquarters of Projeto TAMAR, Brazil's sea turtle conservation program. You can see turtles of all sizes in their conservation tanks and learn about their work.\n\nThe village itself is a pedestrian-friendly collection of pousadas, shops, and restaurants. It's a more polished and resort-like atmosphere than Salvador, offering a relaxing coastal escape.",
            "practicalInfo": {
                  "howToGetThere": "By rental car or a 2-hour bus ride from the Salvador bus station (Rodoviária).",
                  "openingHours": "Projeto TAMAR: Daily, 9:00 AM - 5:30 PM.",
                  "cost": "Bus ticket is around BRL 20-30. TAMAR entry is about BRL 30.00.",
                  "website": "https://www.tamar.org.br/"
            }
      },
      {
            "name": "Explore Forte de Monte Serrat",
            "description": "While less famous than the fort in Barra, Forte de Monte Serrat is arguably one of the most beautiful military constructions in colonial Brazil. Its whitewashed walls and circular turrets stand on a small peninsula, offering spectacular views of the entrance to All Saints' Bay and the city skyline. It's a peaceful spot, perfect for photography, especially in the late afternoon light.\n\nCombine a visit with the nearby Igreja do Bonfim for a comprehensive tour of the Itapagipe Peninsula, an area that provides a different, more residential perspective on Salvador away from the main tourist circuit.",
            "practicalInfo": {
                  "howToGetThere": "Located on the Itapagipe Peninsula. Best reached by taxi or ride-sharing.",
                  "openingHours": "The fort's interior has limited hours (check locally), but the exterior grounds are generally accessible.",
                  "cost": "Free to view from the outside.",
                  "website": "N/A"
            }
      },
      {
            "name": "Visit the Fundação Casa de Jorge Amado",
            "description": "Located in a beautiful blue colonial mansion in the heart of the Pelourinho, this cultural center is dedicated to the life and work of Jorge Amado, one of Brazil's most beloved authors. His novels, such as 'Dona Flor and Her Two Husbands' and 'Captains of the Sands,' vividly captured the life, culture, and spirit of Bahia.\n\nThe foundation houses a small museum with book covers, photos, and personal effects, and serves as an important research center for Bahian literature. It's a must-visit for literature lovers and anyone wanting to understand the stories that have shaped Salvador's popular imagination.",
            "practicalInfo": {
                  "howToGetThere": "Located at Largo do Pelourinho.",
                  "openingHours": "Monday-Friday: 10:00 AM - 6:00 PM; Saturday: 10:00 AM - 4:00 PM.",
                  "cost": "Around BRL 5.00.",
                  "website": "http://www.jorgeamado.org.br/"
            }
      }
]}
      logistics={{
      "gettingAround": "Walking is the best way to explore the compact Pelourinho. For longer distances, ride-sharing apps like Uber and 99 are widely available, safe, and generally more affordable than official taxis. The city has an extensive bus system, which is very cheap but can be confusing for tourists. The Elevador Lacerda is essential for moving between the Upper and Lower cities.",
      "whereToStay": "For history and culture, stay in the Pelourinho, but be aware it can be noisy. For a beach vibe and great amenities, Barra is a popular choice with many hotels and restaurants. For nightlife and a bohemian atmosphere, Rio Vermelho is ideal. Recommended hotels include Fera Palace Hotel (Luxury), Hotel Villa Bahia (Mid-Range, Pelourinho), and Pousada Colonial Chile (Budget).",
      "bestTimeToVisit": "Salvador has a tropical climate and is warm year-round. The best time to visit is during the drier season from September to March, when there's more sun and less rain. The city's world-famous Carnaval (usually in February) is an incredible spectacle but is extremely crowded and expensive. For a calmer visit with good weather, consider September, October, or November.",
      "suggestedItinerary": "Day 1: Immerse yourself in the Cidade Alta. Explore the Pelourinho, visit the Igreja de São Francisco and the Fundação Casa de Jorge Amado. In the afternoon, ride the Elevador Lacerda down to the Cidade Baixa, browse the Mercado Modelo, and have dinner with a bay view. Day 2: Focus on the coast. Start at the Igreja do Bonfim, then head to Forte de Monte Serrat. Spend the afternoon at Praia do Porto da Barra and end the day watching the sunset from Farol da Barra. Day 3: Dive deeper into culture. Visit the Museu Afro-Brasileiro and the Museu de Arte Moderna (MAM-BA). In the evening, enjoy the nightlife in Rio Vermelho after trying some authentic acarajé, or see a performance of the Balé Folclórico da Bahia."
}}
      faqs={[
      {
            "question": "Is Salvador expensive?",
            "answer": "Compared to major hubs like Rio de Janeiro or São Paulo, Salvador is relatively affordable. Costs for food, transportation, and accommodation can be quite reasonable. A meal at a simple restaurant can be found for under $10 USD, and ride-shares are cheap. However, prices in highly touristed areas of the Pelourinho and for major events like Carnaval can be significantly higher."
      },
      {
            "question": "How many days do you need in Salvador?",
            "answer": "A minimum of three full days is recommended to cover the main highlights without rushing. This allows you to dedicate one day to the historic center (Pelourinho), one to the coastline (Barra), and one for other cultural sites like Bonfim Church and the museums. With 4-5 days, you can explore at a more relaxed pace, enjoy more beach time, or take a day trip to a nearby island or Praia do Forte."
      },
      {
            "question": "Is Salvador safe?",
            "answer": "Salvador has a reputation for crime, and visitors should be cautious, but a safe trip is very possible with common sense. Stick to well-populated tourist areas, especially after dark. Avoid walking in deserted streets or on empty beaches at night. Do not display expensive jewelry, cameras, or phones openly. Use ride-sharing apps like Uber or 99 at night instead of walking. The Pelourinho has a significant police presence, but be wary of petty theft and scams."
      },
      {
            "question": "What is Salvador famous for?",
            "answer": "Salvador is famous for being the first capital of Brazil and the epicenter of Afro-Brazilian culture. It's known for its stunning UNESCO-listed colonial architecture in the Pelourinho, its vibrant music scene (the birthplace of Samba de Roda and Axé), and the martial art of Capoeira. It's also famous for its unique cuisine, especially acarajé (a fried bean fritter) and moqueca (a seafood stew), and its powerful religious syncretism, blending Catholicism with the African Candomblé faith."
      }
]}
    />
  );
};