import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Milan: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Milan, Italy (2025 Guide)"}
      description={`Milan, the fashion capital of Italy, offers a captivating blend of history, art, and modern innovation. Deciding on the best things to do in Milan can be overwhelming, but don't worry, this guide will help you navigate the city's highlights and hidden gems. From iconic landmarks like the Duomo to world-class museums and delectable culinary experiences, Milan promises an unforgettable journey. You'll discover the city's rich heritage, explore trendy neighborhoods, and indulge in authentic Italian flavors. It's a city that effortlessly combines style and substance, making it a must-visit destination for any traveler. I think you'll be pleasantly surprised at the variety on offer. Perhaps even a little overwhelmed at first!`}
      galleryImages={[
      ]}
      highlights={["Marvel at the architectural grandeur of the Duomo di Milano.",
        "Witness Leonardo da Vinci's masterpiece, The Last Supper.",
        "Stroll through the elegant Galleria Vittorio Emanuele II.",
        "Explore the vibrant Brera district and its art galleries.",
        "Attend a world-class opera performance at Teatro alla Scala.",
        "Indulge in the city's vibrant culinary scene and savor authentic Milanese cuisine."]}
      attractions={[
        {
        name: "Duomo di Milano",
        description: `The Duomo, Milan's magnificent cathedral, is a must-see. This architectural marvel took centuries to complete, and its intricate facade and towering spires are simply breathtaking. Climb to the rooftop for panoramic city views; it's worth the effort! Inside, you'll find stunning stained glass windows and impressive artwork. Tip: purchase your tickets online in advance to avoid long queues. Don't miss the Madonnina statue atop the highest spire, a symbol of Milan. It's easily one of the most iconic photo opportunities in the city. Consider taking a guided tour to learn more about its fascinating history.`,
        practicalInfo: {
        howToGetThere: "Metro lines M1 and M3, Duomo station",
        openingHours: "9:00 AM - 7:00 PM daily",
        cost: "€16 for rooftop access, €7 for cathedral access",
        website: "www.duomomilano.it"
      }
      },
        {
        name: "Santa Maria delle Grazie (The Last Supper)",
        description: `Home to Leonardo da Vinci's masterpiece, The Last Supper, Santa Maria delle Grazie is a UNESCO World Heritage site. Viewing the fresco requires advance booking, sometimes months in advance, so plan ahead! The church itself is also worth exploring, with its beautiful Renaissance architecture. Be sure to arrive at least 15 minutes before your scheduled viewing time. The visit is strictly timed, so make the most of your allotted minutes. It's a truly awe-inspiring experience. Photo opportunities are limited inside due to preservation concerns.`,
        practicalInfo: {
        howToGetThere: "Metro line M1, Conciliazione station; Tram lines 16, 18",
        openingHours: "8:15 AM - 7:00 PM (Tuesday to Sunday); Closed on Mondays",
        cost: "€15 (reservation required)",
        website: "www.vivaticket.com"
      }
      },
        {
        name: "Galleria Vittorio Emanuele II",
        description: `The Galleria Vittorio Emanuele II is a stunning 19th-century shopping arcade. This architectural masterpiece is filled with luxury boutiques, cafes, and restaurants. Admire the intricate mosaic floors and the impressive glass dome. It's a great place for people-watching and soaking up the Milanese atmosphere. Spin your heel three times on the bull mosaic for good luck, a local tradition. The photo opportunities here are endless, especially under the dome. Consider visiting in the evening when the Galleria is beautifully illuminated.`,
        practicalInfo: {
        howToGetThere: "Metro lines M1 and M3, Duomo station",
        openingHours: "Open 24/7 (shops and restaurants have varying hours)",
        cost: "Free to enter",
        website: ""
      }
      },
        {
        name: "Teatro alla Scala",
        description: `Teatro alla Scala is one of the world's most famous opera houses. Even if you're not an opera enthusiast, a visit to this historic theater is a must. Take a guided tour to learn about its rich history and admire its opulent interiors. If you're lucky, you might even be able to attend a performance. Check the schedule and book your tickets well in advance. The museum attached to the theatre is small but interesting. Consider dressing up for a visit to fully immerse yourself in the experience.`,
        practicalInfo: {
        howToGetThere: "Metro line M1, Duomo station",
        openingHours: "Museum: 9:00 AM - 12:30 PM, 1:30 PM - 5:30 PM",
        cost: "Museum: €9; Tours: Varies",
        website: "www.teatroallascala.org"
      }
      },
        {
        name: "Brera District",
        description: `Brera is a charming and artistic district known for its narrow cobblestone streets, art galleries, boutiques, and cafes. Stroll through the neighborhood and soak up its bohemian atmosphere. Visit the Pinacoteca di Brera, one of Milan's most important art museums. Brera is also a great place to find unique souvenirs and enjoy a delicious meal. Don't miss the Orto Botanico di Brera, a hidden botanical garden. It's a local favorite for its quiet atmosphere. The photo opportunities are numerous, especially in the charming side streets.`,
        practicalInfo: {
        howToGetThere: "Metro line M2, Lanza station; Tram lines 1, 4, 12, 14",
        openingHours: "Varies by shop and gallery",
        cost: "Free to wander; Museum entry fees vary",
        website: ""
      }
      },
        {
        name: "Navigli District",
        description: `The Navigli district is known for its canals, vibrant nightlife, and aperitivo scene. Take a stroll along the canals and enjoy the lively atmosphere. Many bars and restaurants offer aperitivo, a pre-dinner drink with complimentary snacks. The Navigli is a great place to experience Milan's nightlife. Consider taking a boat tour along the canals. The sunset views are stunning, making it a perfect photo opportunity. Avoid visiting during the day when it can be less lively.`,
        practicalInfo: {
        howToGetThere: "Metro line M2, Porta Genova station; Tram lines 2, 9, 10",
        openingHours: "Varies by establishment",
        cost: "Free to wander; Aperitivo prices vary",
        website: ""
      }
      },
        {
        name: "Armani/Nobu Milan",
        description: `Located within the Armani Hotel Milano, Armani/Nobu Milan offers a sophisticated dining experience blending Japanese cuisine with Italian elegance. This stylish restaurant is known for its innovative sushi, fresh seafood, and signature dishes like black cod miso. The atmosphere is chic and modern, with a focus on impeccable service and attention to detail. Expect high-end prices for an unforgettable culinary adventure. The restaurant offers tasting menus that are worth the splurge. Reservations are highly recommended, especially for dinner. It's a meal you won't soon forget.`,
        practicalInfo: {
        howToGetThere: "Metro line M3, Montenapoleone station",
        openingHours: "7:30 PM - 11:00 PM daily",
        cost: "Expensive (€70-€150 per person)",
        website: "www.armanihotels.com/en/milan/dining/armani-nobu-milan"
      }
      },
        {
        name: "Pasticceria Marchesi",
        description: `Pasticceria Marchesi is a historic Milanese cafe dating back to 1824. This elegant cafe is known for its traditional pastries, cakes, chocolates, and coffee. The atmosphere is refined and classic, with a touch of old-world charm. It's a perfect place to enjoy a leisurely breakfast or afternoon tea. Try the signature panettone or a slice of their decadent chocolate cake. It is a truly special culinary experience. This is the spot for a really authentic Italian coffee. Be prepared for a bit of a queue, especially during peak hours. The photo opportunities are delightful; the pastries are beautiful to photograph!`,
        practicalInfo: {
        howToGetThere: "Multiple locations, including Galleria Vittorio Emanuele II and Via Monte Napoleone",
        openingHours: "Varies by location",
        cost: "Moderate (€10-€30 per person)",
        website: "www.pasticceriamarchesi.com/en/"
      }
      },
        {
        name: "Mercato Centrale Milano",
        description: `Mercato Centrale Milano is a vibrant food hall located in the central train station. This culinary destination offers a wide variety of Italian food stalls, from pizza and pasta to seafood and desserts. It's a great place to sample different regional specialties and experience the local food culture. The atmosphere is lively and bustling, with something for everyone. Grab a slice of pizza or a plate of fresh pasta, and enjoy the energetic vibe. You'll also find local artisanal products and culinary specialties to take home. A good place to visit to get a real sense of what local food is like. Worth a visit!`,
        practicalInfo: {
        howToGetThere: "Located inside the Milano Centrale train station",
        openingHours: "11:00 AM - 12:00 AM daily",
        cost: "Budget-friendly (€10-€30 per person)",
        website: "www.mercatocentrale.it/milano/"
      }
      },
        {
        name: "Pinacoteca di Brera",
        description: `The Pinacoteca di Brera is a renowned art gallery housing an extensive collection of Italian art, particularly Venetian and Lombard works. Masterpieces by artists like Caravaggio, Raphael, and Mantegna are showcased here. The gallery is situated in the Palazzo Brera, itself a significant architectural landmark. Exploring the museum offers a deep dive into Italian artistic heritage. Don't miss Mantegna's 'Lamentation over the Dead Christ'. Photography is permitted in some areas, but flash is typically prohibited. The museum is worth the visit!`,
        practicalInfo: {
        howToGetThere: "Metro line M2, Lanza station",
        openingHours: "8:30 AM - 7:15 PM (Tuesday to Sunday); Closed on Mondays",
        cost: "€15",
        website: "pinacotecabrera.org"
      }
      },
        {
        name: "Sforza Castle",
        description: `Sforza Castle, once a powerful fortress, now houses several museums and art collections. Explore the castle grounds, admire its architecture, and visit the museums within. Highlights include the Museum of Ancient Art, the Pinacoteca (art gallery), and the Egyptian Museum. The castle also houses Michelangelo's unfinished Rondanini Pietà. The castle park provides a green space for relaxation. It's a fascinating glimpse into Milan's history. Photo opportunities abound throughout the castle complex.`,
        practicalInfo: {
        howToGetThere: "Metro lines M1 and M2, Cadorna station; Metro line M2, Lanza station",
        openingHours: "Castle grounds: 7:00 AM - 7:30 PM; Museums: 10:00 AM - 5:30 PM (Tuesday to Sunday); Closed on Mondays",
        cost: "Castle grounds: Free; Museums: Varies by museum",
        website: "www.milanocastello.it"
      }
      }
      ]}
      logistics={{
        gettingAround: `Milan boasts an efficient public transportation system, making it easy to navigate the city. The metro is the fastest and most convenient way to travel, with four lines covering major attractions. Tram and bus networks provide additional options for reaching various destinations. Consider purchasing a multi-day travel pass for unlimited rides. Taxis are readily available, but they can be more expensive, especially during peak hours. Walking is a great way to explore the city center and discover hidden gems, but be prepared for long distances. Consider using ride-sharing services, they are often much cheaper than taxis.`,
        whereToStay: `Milan offers a wide range of accommodation options to suit different budgets and preferences. The city center, particularly around the Duomo and Brera districts, is ideal for those who want to be close to the main attractions. Porta Venezia is a trendy area with a vibrant nightlife and more affordable hotels. Navigli is another popular choice, known for its canals and aperitivo scene. For a more upscale experience, consider staying in the fashion district, home to luxury hotels and designer boutiques. You will always find something that suits your own personal taste.`,
        bestTimeToVisit: `The best time to visit Milan is during the spring (April-May) or fall (September-October). The weather is pleasant, with mild temperatures and sunny skies. These seasons also avoid the peak tourist crowds of summer. Summer (June-August) can be hot and humid, but it's also a great time to enjoy outdoor activities and events. Winter (November-March) can be cold and rainy, but it's a good time to find lower hotel rates and experience the city's festive atmosphere during the Christmas season. Plus, the sales are pretty good!`,
        suggestedItinerary: `Day 1: Begin your Milan adventure with a visit to the Duomo di Milano. Explore the cathedral's interior, climb to the rooftop for panoramic views, and then visit the adjacent Galleria Vittorio Emanuele II. In the afternoon, immerse yourself in art at the Pinacoteca di Brera. In the evening, indulge in an authentic Milanese dinner in the Brera district.

Day 2: Dedicate your morning to Leonardo da Vinci's The Last Supper (book well in advance!). After lunch, explore the Sforza Castle and its museums. In the afternoon, stroll through the Parco Sempione, located behind the castle. In the evening, experience the vibrant nightlife and aperitivo scene in the Navigli district.

Day 3: Take a day trip to Lake Como, a beautiful lake region located just a short train ride from Milan. Explore the charming towns of Como, Bellagio, and Varenna, and enjoy the stunning scenery. Alternatively, if you prefer to stay in Milan, visit the Museo del Novecento, dedicated to 20th-century Italian art, or explore the trendy Porta Venezia district.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Milan?",
        answer: `Milan offers a variety of attractions, including the Duomo di Milano, Santa Maria delle Grazie (The Last Supper), Galleria Vittorio Emanuele II, Teatro alla Scala, Brera district, and Navigli district. Indulging in the city's culinary scene is also a must.`
      },
        {
        question: "How many days do you need in Milan?",
        answer: `Ideally, 3-4 days is sufficient to explore Milan's main attractions and experience its culture. This allows time for museum visits, exploring different neighborhoods, and enjoying the city's culinary delights.`
      },
        {
        question: "What is Milan famous for?",
        answer: `Milan is famous for being a fashion capital, its architectural landmarks (Duomo, Galleria), Leonardo da Vinci's The Last Supper, opera at Teatro alla Scala, and its vibrant design and culinary scene.`
      },
        {
        question: "When is the best time to visit Milan?",
        answer: `The best time to visit Milan is during the spring (April-May) or fall (September-October) for pleasant weather and fewer crowds. Summer can be hot, and winter can be cold and rainy.`
      }
      ]}
    />
  );
};