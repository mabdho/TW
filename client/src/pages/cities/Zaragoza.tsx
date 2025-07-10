import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Zaragoza: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Zaragoza, Spain (2025 Guide)"}
      description={"Straddling the mighty Ebro River, Zaragoza is a city of surprising grandeur and profound history. As Spain's fifth-largest city, it often flies under the radar, offering an authentic Aragonese experience without the overwhelming crowds of Madrid or Barcelona. With over 2,000 years of history, its streets showcase a tapestry of Roman, Moorish, Jewish, and Christian heritage, most famously embodied in its breathtaking basilicas and fortified palaces. The city is also the proud birthplace of the revolutionary artist Francisco de Goya, whose spirit permeates its museums and culture. From marveling at sacred art to indulging in one of Spain's best tapas scenes, exploring the rich legacy of this underrated gem is a rewarding journey. This guide will walk you through all the best things to do in Zaragoza, ensuring you capture the essence of this magnificent city."}
      highlights={["Basílica de Nuestra Señora del Pilar",
        "Palacio de la Aljafería",
        "Catedral del Salvador (La Seo)",
        "Museo Goya - Colección Ibercaja",
        "El Tubo Tapas District"]}
      galleryImages={[
        { url: "", alt: "Zaragoza landmark 1", caption: "Zaragoza landmark 1 - placeholder" },
        { url: "", alt: "Zaragoza landmark 2", caption: "Zaragoza landmark 2 - placeholder" },
        { url: "", alt: "Zaragoza landmark 3", caption: "Zaragoza landmark 3 - placeholder" },
        { url: "", alt: "Zaragoza landmark 4", caption: "Zaragoza landmark 4 - placeholder" },
        { url: "", alt: "Zaragoza landmark 5", caption: "Zaragoza landmark 5 - placeholder" },
        { url: "", alt: "Zaragoza landmark 6", caption: "Zaragoza landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Basílica de Nuestra Señora del Pilar",
        description: "The undisputed heart and soul of Zaragoza, this colossal Baroque basilica is a breathtaking sight. Its eleven domes, adorned with vibrant blue, green, and yellow tiles, dominate the city skyline along the Ebro River. According to legend, the Virgin Mary appeared to the Apostle St. James on this spot atop a marble pillar ('pilar' in Spanish), which is now enshrined within the church. It's one of the most important pilgrimage sites in the Catholic world.\n\nInside, the sheer scale is awe-inspiring. Visitors can admire the Holy Chapel housing the sacred pillar, and gaze up at two magnificent ceiling frescoes painted by a young Francisco de Goya. For an unforgettable view, take the elevator up one of the four towers to the observation deck, offering a panoramic perspective of Zaragoza and the river.",
        practicalInfo: {
        howToGetThere: "Located in Plaza del Pilar, the main square. Easily accessible on foot from anywhere in the Old Town.",
        openingHours: "Daily, approx. 6:45 AM - 8:30 PM. Tower has shorter hours, typically 10:00 AM - 2:00 PM and 4:00 PM - 6:00 PM.",
        cost: "Free to enter the basilica. Small fee (approx. €4) for the tower elevator.",
        website: "https://www.basilicadelpilar.es/"
      }
      },
        {
        name: "Palacio de la Aljafería",
        description: "A journey through centuries of Aragonese history, the Aljafería Palace is the most spectacular example of Islamic architecture outside of Andalusia. Originally built as a pleasure palace for a Moorish ruler in the 11th century, its 'Patio de Santa Isabel' offers serene beauty with its delicate arches and tranquil pool, rivaling Granada's Alhambra.\n\nAfter the Christian Reconquista, it was adapted by the Kings of Aragon, who added Mudéjar-style additions, including magnificent carved wooden ceilings. Later, it served as a palace for the Catholic Monarchs, a fortress, and today houses the regional parliament of Aragon. A guided tour is highly recommended to understand the rich fusion of styles and stories within its fortified walls.",
        practicalInfo: {
        howToGetThere: "Located on Calle de los Diputados. A 20-minute walk from Plaza del Pilar or accessible via city bus lines 22, 32, 33, 34, 51 or the tourist bus.",
        openingHours: "Hours vary significantly depending on parliamentary activity. Check the website before visiting. Generally open daily.",
        cost: "Approx. €5. Free entry on Sunday afternoons.",
        website: "https://www.cortesdearagon.es/la-aljaferia"
      }
      },
        {
        name: "Catedral del Salvador (La Seo)",
        description: "While the Basílica del Pilar gets most of the attention, Zaragoza's other cathedral, La Seo, is arguably its most historically and artistically rich. Built on the site of the former Roman forum and the city's main mosque, this cathedral is a stunning medley of architectural styles, from Romanesque foundations to a Gothic nave, a Mudéjar exterior wall (a UNESCO World Heritage site), and a Baroque tower.\n\nThe interior is just as diverse, featuring a magnificent altarpiece and beautiful chapels. Don't miss the attached Tapestry Museum, which holds one of the world's finest collections of medieval and Renaissance tapestries, with enormous and incredibly detailed pieces that are truly works of art.",
        practicalInfo: {
        howToGetThere: "Located at the end of Plaza del Pilar, a short walk from the Basilica.",
        openingHours: "Hours vary, typically 10:00 AM - 2:00 PM & 4:00 PM - 7:00 PM. Check for seasonal changes.",
        cost: "Approx. €7 (includes entry to the Tapestry Museum).",
        website: "https://www.catedraldezaragoza.es/"
      }
      },
        {
        name: "Museo Goya - Colección Ibercaja",
        description: "No visit to Zaragoza is complete without paying homage to its most famous son, Francisco de Goya. Housed in a beautifully restored 16th-century Renaissance palace, this museum provides a comprehensive look at the artist's life and work, with a particular focus on his genius as an engraver.\n\nThe museum's crown jewel is the complete collection of his four major print series: Los Caprichos, Los Desastres de la Guerra, La Tauromaquia, and Los Disparates. Seeing these powerful, often dark and satirical, works up close offers a profound insight into Goya's mind and the turbulent times he lived in. The museum also features paintings by Goya and his contemporaries.",
        practicalInfo: {
        howToGetThere: "Located at Calle Espoz y Mina, 23, very close to Plaza del Pilar.",
        openingHours: "Tuesday-Saturday: 10:00 AM - 8:00 PM; Sunday: 10:00 AM - 2:00 PM. Closed Mondays.",
        cost: "Approx. €8. Reduced rates available.",
        website: "https://www.museogoya.es/"
      }
      },
        {
        name: "El Tubo Tapas District",
        description: "To truly experience Zaragoza's social life, you must dive into El Tubo. This labyrinth of narrow, bustling alleyways in the Old Town is the city's legendary tapas quarter. The tradition here is to go from bar to bar, enjoying one or two specialty tapas (known as a 'tapa') and a small drink ('caña' for beer, 'vino' for wine) at each spot before moving on to the next.\n\nEach bar has its own claim to fame, from grilled mushrooms with garlic and parsley (champiñones) to crispy fried calamari (calamares) or intricate modern creations. The atmosphere is electric, especially on weekend evenings, as locals and visitors alike crowd the streets, creating a vibrant, communal dining experience that is quintessentially Spanish.",
        practicalInfo: {
        howToGetThere: "A network of streets just west of Plaza de España, including Calle Estébanes and Calle Libertad. It's the heart of the Old Town.",
        openingHours: "Best from 1:00 PM - 3:00 PM for lunch and after 8:00 PM for dinner, especially Thursday through Sunday.",
        cost: "Pay as you go. Tapas range from €2-€5 each.",
        website: "N/A"
      }
      },
        {
        name: "Puente de Piedra (Stone Bridge)",
        description: "Dating back to the 15th century, the Puente de Piedra is Zaragoza's oldest surviving bridge. Flanked by four bronze lions, symbols of the city, this historic bridge offers the most iconic and photogenic view of the Basílica del Pilar, perfectly reflected in the Ebro River on a calm day. It's affectionately known by locals as the 'Bridge of Lions'.\n\nA walk across the bridge is a must-do, especially at sunrise or sunset when the light casts a magical glow on the basilica's domes. It's a peaceful spot to appreciate the city's grandeur and serves as a perfect vantage point for photographers.",
        practicalInfo: {
        howToGetThere: "Connects the Old Town with the Arrabal neighborhood, just north of Plaza del Pilar.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Museo del Foro de Caesaraugusta",
        description: "Step back in time to the founding of Zaragoza under the Roman Emperor Augustus. Located beneath Plaza de la Seo, this museum protects the archaeological remains of the main forum of Caesaraugusta. It was the civic, religious, and economic heart of the Roman city.\n\nThrough audiovisual displays and well-preserved remains of a market, shops, and a great sewer system, you get a fascinating glimpse into daily life over two millennia ago. It is part of the 'Caesaraugusta Route', which also includes the river port, public baths, and theatre museums, offering a complete picture of Roman Zaragoza.",
        practicalInfo: {
        howToGetThere: "Located in Plaza de la Seo, underneath the square in front of the cathedral.",
        openingHours: "Tuesday-Saturday: 10:00 AM - 2:00 PM & 5:00 PM - 9:00 PM; Sunday: 10:00 AM - 2:30 PM. Closed Mondays.",
        cost: "Approx. €4. A combined ticket for all four Roman sites is available for ~€7.",
        website: "https://www.zaragoza.es/ciudad/museos/es/foro"
      }
      },
        {
        name: "Patio de la Infanta",
        description: "One of Zaragoza's hidden gems, the Patio de la Infanta is a magnificent Renaissance courtyard from the 16th century, now housed within the headquarters of the Ibercaja bank. This stunning patio, belonging to the Zaporta family, was considered one of the finest examples of Aragonese Renaissance architecture. In the early 20th century, it was dismantled and sold to a French antiquarian.\n\nDecades later, Ibercaja bank bought it back, painstakingly reassembled it, and built their modern headquarters around it. Today, you can step from a contemporary bank lobby into this breathtaking, column-lined courtyard, which hosts exhibitions and events. It's a remarkable story of cultural rescue and preservation.",
        practicalInfo: {
        howToGetThere: "Inside the Ibercaja headquarters at Calle San Ignacio de Loyola, 16.",
        openingHours: "Monday-Saturday: 10:00 AM - 2:00 PM & 4:00 PM - 8:00 PM; Sunday: 10:00 AM - 2:00 PM.",
        cost: "Free.",
        website: "https://www.fundacionibercaja.es/patio-de-la-infanta/"
      }
      },
        {
        name: "Museo de Zaragoza",
        description: "The city's principal museum offers a sweeping overview of the region's history, from prehistory to the modern age. Housed in a neo-Renaissance building from the 1908 Hispano-French Exposition, its collection is divided into two main sections: Archaeology and Fine Arts.\n\nThe archaeology section features significant Roman artifacts, including mosaics and bronze tablets with Roman laws. The Fine Arts section is particularly strong, boasting an important collection of paintings by Goya, including portraits and early religious works, as well as pieces by other Aragonese and Spanish masters.",
        practicalInfo: {
        howToGetThere: "Located at Plaza de los Sitios, 6, east of the Old Town.",
        openingHours: "Tuesday-Saturday: 10:00 AM - 2:00 PM & 5:00 PM - 8:00 PM; Sunday: 10:00 AM - 2:00 PM. Closed Mondays.",
        cost: "Free.",
        website: "https://www.museodezaragoza.es/"
      }
      },
        {
        name: "Parque Grande José Antonio Labordeta",
        description: "When you need a break from historical sights, head to Zaragoza's largest and most beloved green space. Often called the 'green lung' of the city, this sprawling park is perfect for a leisurely stroll, a bike ride, or a picnic. It was inaugurated in 1929 and designed in a formal, classical style.\n\nKey features include the grand main avenue leading up to a monument of King Alfonso I 'The Battler', the elegant botanical gardens, and numerous fountains and sculptures. It’s a favorite spot for locals to relax, exercise, and escape the city buzz, offering beautiful, shaded pathways and a tranquil atmosphere.",
        practicalInfo: {
        howToGetThere: "Located south of the city center. Accessible via the Tram line (stop: Emperador Carlos V) or a long walk.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Mercado Central (Central Market)",
        description: "A feast for the senses, the Mercado Central is the best place to discover the flavors of Aragon. Housed in a magnificent late 19th-century modernist building with iron and glass details, this bustling market has been the city's main food hub for over a century. It was beautifully restored and reopened in 2020.\n\nInside, you'll find hundreds of stalls selling fresh local produce, from fruits and vegetables grown in the Ebro valley to cured hams, regional cheeses, olives, and much more. It's a fantastic place to observe local life, sample some delicacies, and buy edible souvenirs. Some stalls have small bars where you can enjoy fresh tapas.",
        practicalInfo: {
        howToGetThere: "Located on Avenida de César Augusto, a short walk from the Old Town and Plaza del Pilar.",
        openingHours: "Monday-Saturday, approx. 9:00 AM - 2:00 PM & 5:30 PM - 8:00 PM. Best to visit in the morning.",
        cost: "Free to enter.",
        website: "https://www.mercadocentralzaragoza.com/"
      }
      },
        {
        name: "IAACC Pablo Serrano",
        description: "Dedicated to the Aragonese sculptor Pablo Serrano (1908-1985), this museum is a hub for contemporary art. The building itself is a work of modern architecture, a striking black monolith that stands in contrast to the city's older buildings. Inside, the museum showcases a large collection of Serrano's expressive and abstract sculptures.\n\nIn addition to the permanent collection, the IAACC (Aragonese Institute of Contemporary Art and Culture) hosts rotating exhibitions of national and international contemporary artists. Don't miss the rooftop terrace, which offers fantastic panoramic views of the city, including a unique perspective on the Aljafería Palace.",
        practicalInfo: {
        howToGetThere: "Located at Paseo María Agustín, 20.",
        openingHours: "Tuesday-Saturday: 10:00 AM - 2:00 PM & 5:00 PM - 9:00 PM; Sunday: 10:00 AM - 2:00 PM. Closed Mondays.",
        cost: "Free.",
        website: "https://www.iaacc.es/"
      }
      },
        {
        name: "CaixaForum Zaragoza",
        description: "Another icon of Zaragoza's modern architectural landscape, the CaixaForum is a cultural center that immediately catches the eye with its dramatic, geometric design. Created by the renowned architect Carme Pinós, the building looks like two interlocking, futuristic structures suspended in the air. \n\nInside, this dynamic space hosts a high-quality, ever-changing program of temporary exhibitions covering art, photography, science, and culture, often from major international collections. It's a vibrant cultural hub that also includes an auditorium, cafe, and a bookstore, making it a great spot for anyone interested in contemporary design and art.",
        practicalInfo: {
        howToGetThere: "Located at Av. de Anselmo Clavé, 4, near the Portillo train station and the IAACC Pablo Serrano.",
        openingHours: "Daily, 10:00 AM - 8:00 PM.",
        cost: "Approx. €6. Free for CaixaBank customers.",
        website: "https://caixaforum.org/es/zaragoza"
      }
      },
        {
        name: "Museo del Teatro de Caesaraugusta",
        description: "Completing the Roman Route, this museum showcases the impressive remains of what was once one of the largest Roman theatres in Hispania, capable of holding 6,000 spectators. Discovered by chance in 1972, the ruins are now protected by a modern structure that allows visitors to walk above and around the ancient seating tiers and stage area.\n\nThe accompanying exhibition explains the theatre's construction, its role in Roman society, and its eventual decline and burial beneath the city. Standing in the ruins, you can almost hear the echoes of ancient performances, providing a powerful connection to Zaragoza's Roman past.",
        practicalInfo: {
        howToGetThere: "Located at Calle San Jorge, 12, in the Old Town.",
        openingHours: "Tuesday-Saturday: 10:00 AM - 2:00 PM & 5:00 PM - 9:00 PM; Sunday: 10:00 AM - 2:30 PM. Closed Mondays.",
        cost: "Approx. €4. A combined ticket for all four Roman sites is available for ~€7.",
        website: "https://www.zaragoza.es/ciudad/museos/es/teatro"
      }
      },
        {
        name: "Acuario de Zaragoza (Zaragoza Aquarium)",
        description: "A legacy of the 2008 International Expo, the Zaragoza Aquarium is Europe's largest freshwater aquarium. Instead of oceans, it focuses on the ecosystems of five major rivers from around the world: the Nile, Mekong, Amazon, Murray-Darling, and the local Ebro. Each section faithfully recreates the unique flora and fauna of its respective river basin.\n\nIt's a fantastic attraction for families and anyone with an interest in the natural world. Highlights include the massive Arapaima fish of the Amazon, Nile crocodiles, and playful otters. The central tank, representing the 'World River,' is an impressive 9 meters deep and holds all the ecosystems in one symbolic space.",
        practicalInfo: {
        howToGetThere: "Located within the Expo 2008 site, northwest of the city center. Accessible via bus lines CI1, CI2, and 23.",
        openingHours: "Hours vary seasonally. Generally open from 10:00 AM, closing between 6:00 PM and 8:00 PM. Check website for specifics.",
        cost: "Adults approx. €17; Children approx. €11.",
        website: "https://www.acuariodezaragoza.com/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Zaragoza's historic center is very walkable, with most major attractions located close to each other. The city has an efficient public transport system, including a modern tram line (L1) that runs north-south through the city center and a comprehensive bus network. A 'Tarjeta BUS' card can be purchased for cheaper fares. Bike-sharing services are also available.",
        whereToStay: "For first-time visitors, the Casco Histórico (Old Town) is ideal, placing you steps from the Basílica del Pilar, La Seo, and El Tubo. For a more modern feel with better access to shopping and the train station, consider the area around Paseo de la Independencia and Plaza de España. Recommendations: Hotel Reina Petronila (Luxury), INNSiDE by Meliá Zaragoza (Mid-Range), Hotel Pilar Plaza (Budget).",
        bestTimeToVisit: "Spring (April to June) and autumn (September to October) offer the most pleasant weather for exploring the city. Summers (July-August) can be very hot and dry. The second week of October is the Fiestas del Pilar, the city's main festival. It's an incredibly vibrant and exciting time to visit, but expect huge crowds and higher prices. Winters are cold and can be windy.",
        suggestedItinerary: "Day 1: Explore Plaza del Pilar, visiting the Basílica del Pilar (including the tower) and the Catedral del Salvador (La Seo). Discover the Roman Forum Museum and walk across the Puente de Piedra at sunset. Finish with a tapas crawl in El Tubo.\n\nDay 2: Visit the magnificent Palacio de la Aljafería in the morning. In the afternoon, follow the rest of the Roman Route by visiting the Theatre and River Port museums. Explore the Central Market for local flavors.\n\nDay 3: Dedicate the morning to art at the Museo Goya. Afterwards, see the modern side of Zaragoza at the IAACC Pablo Serrano or CaixaForum. Enjoy a relaxing afternoon stroll in the Parque Grande José Antonio Labordeta."
      }}
      faqs={[{
          question: "Is Zaragoza expensive?",
          answer: "Zaragoza is generally considered very affordable compared to Spain's major tourist hubs like Barcelona or Madrid. Accommodation, food, and drinks offer excellent value for money. A tapas meal in El Tubo can be both a delicious and economical way to dine."
        },
        {
          question: "How many days do you need in Zaragoza?",
          answer: "Two to three full days are ideal to explore Zaragoza comfortably. This allows enough time to visit the main landmarks like the Pilar, Aljafería, and La Seo, explore the Roman ruins and Goya museum, and still have ample time to enjoy the tapas culture and atmosphere without rushing."
        },
        {
          question: "Is Zaragoza safe?",
          answer: "Zaragoza is a very safe city with low crime rates. Like in any city, you should take standard precautions against pickpocketing, especially in crowded areas like Plaza del Pilar and on public transport. Otherwise, walking around both day and night is generally very safe."
        },
        {
          question: "What is Zaragoza famous for?",
          answer: "Zaragoza is most famous for the Basílica de Nuestra Señora del Pilar, a major Catholic pilgrimage site. It is also renowned for its stunning Mudéjar architecture, with the Aljafería Palace and La Seo Cathedral being UNESCO World Heritage sites. The city is the birthplace of the artist Francisco de Goya, and it boasts one of Spain's most celebrated tapas scenes in the El Tubo district."
        }
      ]}
    />
  );
};