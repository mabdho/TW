import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Kathmandu: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Kathmandu, Nepal (2025 Guide)"}
      description={"Kathmandu is a city of intoxicating chaos and profound serenity, where ancient traditions and modern life collide in a vibrant spectacle. Nestled in a valley ringed by Himalayan peaks, Nepal's capital is a sensory feast of ringing temple bells, fragrant incense, and bustling market streets. The city is a living museum, home to an astonishing seven UNESCO World Heritage Sites, showcasing exquisite Newari architecture and deep spiritual roots. From the sacred hum of stupas to the thrill of exploring medieval city squares, every corner tells a story. Whether you're a spiritual seeker, a cultural enthusiast, or an adventure traveler gearing up for a trek, this guide will help you discover the very best things to do in Kathmandu, a city that captures the heart of every visitor."}
      highlights={["Boudhanath Stupa",
        "Pashupatinath Temple",
        "Swayambhunath Stupa (Monkey Temple)",
        "Kathmandu Durbar Square",
        "Bhaktapur Durbar Square"]}
      galleryImages={[
        { url: "", alt: "Kathmandu landmark 1", caption: "Kathmandu landmark 1 - placeholder" },
        { url: "", alt: "Kathmandu landmark 2", caption: "Kathmandu landmark 2 - placeholder" },
        { url: "", alt: "Kathmandu landmark 3", caption: "Kathmandu landmark 3 - placeholder" },
        { url: "", alt: "Kathmandu landmark 4", caption: "Kathmandu landmark 4 - placeholder" },
        { url: "", alt: "Kathmandu landmark 5", caption: "Kathmandu landmark 5 - placeholder" },
        { url: "", alt: "Kathmandu landmark 6", caption: "Kathmandu landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Boudhanath Stupa",
        description: "One of the largest spherical stupas in Nepal, Boudhanath is the spiritual heart of Kathmandu's Tibetan Buddhist community. The massive mandala is mesmerizing, with the all-seeing eyes of the Buddha gazing out in four directions. Join the devout locals and pilgrims as they perform the 'kora,' a clockwise circumambulation of the stupa, spinning prayer wheels and chanting mantras. The atmosphere is profoundly peaceful, especially at dawn and dusk when the air is filled with the scent of incense and the soft glow of butter lamps.\n\nThe stupa is surrounded by dozens of monasteries and shops selling thangkas, singing bowls, and other Tibetan artifacts. Find a rooftop café, order a cup of tea, and soak in the incredible views and serene energy of this sacred site. It's an unforgettable experience that offers a deep insight into Buddhist culture.",
        practicalInfo: {
        howToGetThere: "Located in the Boudha neighborhood, about 7 km from Thamel. Easily accessible by a 20-30 minute taxi ride.",
        openingHours: "Open 24/7, but the ticket counter is typically open from 5:00 AM to 6:00 PM.",
        cost: "NPR 400 for foreign nationals.",
        website: "boudhanathstupa.com"
      }
      },
        {
        name: "Pashupatinath Temple",
        description: "Pashupatinath is Nepal's most sacred Hindu temple, dedicated to Lord Shiva. Situated on the banks of the holy Bagmati River, this sprawling complex is a place of pilgrimage and profound spiritual significance. While non-Hindus are not permitted inside the main temple, the surrounding area offers a powerful and eye-opening experience. Visitors can observe the open-air cremation ghats, a public ritual that is a fundamental part of the Hindu cycle of life and death.\n\nThe complex is also home to colorfully dressed sadhus (holy men), ancient shrines, and lingams. Witnessing the evening 'Aarti' ceremony, a mesmerizing ritual of worship with fire, music, and chanting, is a highlight for many. It's a place that confronts life's big questions and offers a raw, unfiltered look into Hindu traditions.",
        practicalInfo: {
        howToGetThere: "Located near the airport, a short taxi ride from Thamel or Boudha.",
        openingHours: "Complex is open 4:00 AM to 9:00 PM. The main temple is closed to non-Hindus. Ticket counter is open 5:00 AM to 6:00 PM.",
        cost: "NPR 1000 for foreign nationals.",
        website: "www.pashupatinathtemple.org"
      }
      },
        {
        name: "Swayambhunath Stupa (Monkey Temple)",
        description: "Perched atop a hill overlooking the Kathmandu Valley, Swayambhunath Stupa, affectionately known as the 'Monkey Temple', is one of the oldest and most revered religious sites in Nepal. To reach the main stupa, you must climb a steep stone staircase of 365 steps, but the panoramic view from the top is well worth the effort. The gleaming white dome, golden spire, and the iconic Buddha eyes create a striking image against the sky.\n\nThe complex is a beautiful blend of Buddhist and Hindu iconography, reflecting the religious harmony of Nepal. As the nickname suggests, hundreds of monkeys inhabit the area, considered holy by devotees. Be mindful of your belongings as they are notoriously mischievous. The site offers a peaceful escape from the city's hustle and a fantastic vantage point for sunrise or sunset.",
        practicalInfo: {
        howToGetThere: "Located on a hill to the west of Kathmandu city. A short taxi ride or a 30-40 minute walk from Thamel.",
        openingHours: "Open 24/7, ticket counter operates during daylight hours.",
        cost: "NPR 200 for foreign nationals.",
        website: "swayambhu.buddhism-foundation.org"
      }
      },
        {
        name: "Kathmandu Durbar Square",
        description: "Located in the heart of the old city, Kathmandu Durbar Square is a magnificent complex of palaces, courtyards, and temples. This UNESCO World Heritage site was the seat of power for the Malla and Shah kings who ruled the city. Despite sustaining damage in the 2015 earthquake, the square is still a stunning showcase of traditional Newari architecture, with intricate wood carvings and masterful stonework.\n\nKey sights within the square include the Hanuman Dhoka Palace, the Taleju Temple, and the Kumari Ghar, the residence of the Living Goddess. Exploring the labyrinthine alleys and courtyards feels like stepping back in time. The square is a vibrant hub of city life, where locals come to socialize, worship, and trade.",
        practicalInfo: {
        howToGetThere: "Located in central Kathmandu, easily walkable from Thamel.",
        openingHours: "7:00 AM to 7:00 PM daily.",
        cost: "NPR 1000 for foreign nationals.",
        website: "www.hanumandhoka.gov.np"
      }
      },
        {
        name: "Bhaktapur Durbar Square",
        description: "Just east of Kathmandu lies the ancient city of Bhaktapur, whose Durbar Square is arguably the most impressive of the three in the valley. A UNESCO World Heritage site, Bhaktapur feels like a living museum. The entire area is pedestrian-friendly, allowing you to wander through cobblestone streets and admire the beautifully preserved medieval art and architecture without the constant noise of traffic.\n\nKey highlights include the 55-Window Palace, the stunning Golden Gate, and the towering Nyatapola Temple, a five-story pagoda that is one of the tallest in Nepal. Don't miss trying the local 'Juju Dhau' (King Curd), a delicious sweet yogurt unique to Bhaktapur. A full day is recommended to truly appreciate the craftsmanship and timeless atmosphere of this incredible city.",
        practicalInfo: {
        howToGetThere: "Located about 13 km from Kathmandu. Accessible by taxi (30-45 minutes) or local bus.",
        openingHours: "The square is always open, but the ticket counter operates from 7:00 AM to 6:00 PM.",
        cost: "NPR 1800 for foreign nationals.",
        website: "www.bhaktapurmun.gov.np/en"
      }
      },
        {
        name: "Patan Durbar Square",
        description: "Located in the city of Lalitpur, a sister city to Kathmandu, Patan Durbar Square is a marvel of Newari architecture. This compact square is packed with temples, shrines, and palaces, showcasing some of the finest craftsmanship in the valley. The Patan Museum, housed in a former Malla palace, is considered one of the best museums in Asia, with a stunning collection of traditional Nepali art.\n\nKey attractions include the Krishna Mandir, a stone temple with intricate carvings depicting scenes from the Ramayana and Mahabharata, and the Golden Temple (Hiranya Varna Mahavihar). Patan has a more relaxed and artistic feel compared to Kathmandu's square, with numerous artisan workshops and fair-trade craft stores in the surrounding alleys.",
        practicalInfo: {
        howToGetThere: "Located in Lalitpur, a 20-minute taxi ride south of Thamel.",
        openingHours: "Square is always open. Patan Museum is open 10:30 AM to 5:30 PM (closed Tuesdays).",
        cost: "NPR 1000 for the square; NPR 1000 additional for the museum.",
        website: "www.patanmuseum.gov.np"
      }
      },
        {
        name: "Garden of Dreams",
        description: "An oasis of calm amidst the chaotic energy of Kathmandu, the Garden of Dreams is a beautifully restored neo-classical garden. Created in the 1920s, this elegant space features pavilions, fountains, pergolas, and lush lawns inspired by Edwardian English gardens. After falling into disrepair for decades, it was meticulously restored to its former glory.\n\nIt's the perfect place to escape for a few hours with a book, enjoy a quiet coffee at the Kaiser Café, or simply relax on the manicured lawns. The garden's serene atmosphere provides a welcome contrast to the bustling streets of Thamel just outside its walls, making it a favorite spot for both tourists and locals seeking tranquility.",
        practicalInfo: {
        howToGetThere: "Located at the entrance of Thamel, easily walkable from most hotels in the area.",
        openingHours: "9:00 AM to 10:00 PM daily.",
        cost: "NPR 400 for foreign nationals.",
        website: "www.gardenofdreams.org.np"
      }
      },
        {
        name: "Explore the Thamel Neighborhood",
        description: "Thamel is the vibrant, pulsating heart of Kathmandu's tourist scene. This labyrinth of narrow streets is packed with everything a traveler could need: hotels, restaurants serving global cuisine, lively bars, trekking gear shops, and countless stores selling souvenirs, pashminas, and handicrafts. While it can be overwhelming, diving into its organized chaos is an essential Kathmandu experience.\n\nSpend an afternoon getting lost in its alleys, haggling for souvenirs, and discovering hidden courtyards. In the evening, Thamel comes alive with live music pouring out of bars and restaurants offering a festive atmosphere. It's the perfect place to arrange your trekking adventures, meet fellow travelers, and immerse yourself in the energetic side of the city.",
        practicalInfo: {
        howToGetThere: "Central tourist district, most travelers stay here or nearby. Easily explored on foot.",
        openingHours: "Shops typically open 10:00 AM to 8:00 PM; restaurants and bars stay open later.",
        cost: "Free to explore.",
        website: "N/A"
      }
      },
        {
        name: "Asan Tole Market",
        description: "For a truly authentic local experience, head to Asan Tole, one of the oldest and busiest market squares in Kathmandu. This historic intersection of six ancient trade routes is a whirlwind of activity from dawn till dusk. Here, you won't find tourist souvenirs, but rather a vibrant marketplace where locals shop for everything from fresh produce and spices to textiles and household goods.\n\nNavigating the crowded square is a sensory overload in the best way possible. Observe the intricate dance of vendors, shoppers, bicycles, and cows. The area is also home to several important shrines, including the Annapurna Temple, dedicated to the goddess of abundance. It's a fantastic place for street photography and for witnessing the daily life of Kathmandu's residents.",
        practicalInfo: {
        howToGetThere: "Located between Thamel and Kathmandu Durbar Square, about a 15-minute walk from either.",
        openingHours: "Most active from early morning until evening.",
        cost: "Free to explore.",
        website: "N/A"
      }
      },
        {
        name: "Sunrise at Nagarkot",
        description: "For breathtaking Himalayan vistas without a multi-day trek, a trip to Nagarkot is a must. This village, perched on the rim of the Kathmandu Valley at an altitude of 2,195 meters, is famous for its panoramic sunrise and sunset views. On a clear day, you can see a vast stretch of the Himalayas, including Annapurna, Manaslu, Ganesh Himal, Langtang, and even a distant glimpse of Mount Everest.\n\nMost visitors stay overnight to catch the sunrise, when the first rays of light illuminate the snow-capped peaks in spectacular shades of orange and pink. Even as a day trip, the views and the fresh mountain air provide a refreshing break from the city. The area also offers some pleasant short hiking trails through pine forests.",
        practicalInfo: {
        howToGetThere: "About 32 km from Kathmandu. A 1.5-2 hour drive by private taxi or a longer journey by local bus.",
        openingHours: "Best views are at sunrise (approx. 5:30-6:30 AM depending on the season).",
        cost: "NPR 350 entrance fee to the Nagarkot area. Taxi costs vary.",
        website: "N/A"
      }
      },
        {
        name: "Changu Narayan Temple",
        description: "Believed to be the oldest Hindu temple in the Kathmandu Valley, Changu Narayan dates back to the 4th century. Perched on a high hilltop, this UNESCO World Heritage site is dedicated to Lord Vishnu. The two-tiered pagoda is a masterpiece of Nepali art, adorned with some of the most intricate wood and stone carvings in the country. The temple's collection of statues and sculptures from the Lichhavi period is historically priceless.\n\nThe location itself is serene and less crowded than the major Durbar Squares, offering a peaceful atmosphere and lovely views of the surrounding countryside. A visit can be easily combined with a trip to Bhaktapur, as it's located just a few kilometers north.",
        practicalInfo: {
        howToGetThere: "Located a few kilometers north of Bhaktapur. Best reached by taxi or as part of a hike from Nagarkot or Bhaktapur.",
        openingHours: "8:00 AM to 6:00 PM daily.",
        cost: "NPR 350 for foreign nationals.",
        website: "N/A"
      }
      },
        {
        name: "Kopan Monastery",
        description: "Overlooking the Kathmandu Valley from a verdant hill near Boudhanath, Kopan Monastery is a renowned center for Tibetan Mahayana Buddhism. It's a working monastery, home to hundreds of monks, lamas, and teachers. The monastery is famous for its courses and retreats, particularly the popular month-long November course which offers an introduction to Buddhist philosophy and meditation.\n\nEven if you're not taking a course, visitors are welcome to explore the beautiful grounds, visit the gompas (prayer halls), and enjoy the peaceful atmosphere. The views of the valley from the monastery are stunning. It's an excellent place to learn more about Tibetan Buddhism and experience the tranquility of monastic life.",
        practicalInfo: {
        howToGetThere: "Located on a hill north of Boudhanath Stupa. A short taxi ride or a 30-minute uphill walk from Boudha.",
        openingHours: "Generally open to day visitors from 9:00 AM to 5:00 PM (check website for closures due to retreats).",
        cost: "Free to enter, but donations are welcome.",
        website: "kopanmonastery.com"
      }
      },
        {
        name: "Narayanhiti Palace Museum",
        description: "Once the residence of Nepal's royal family, the Narayanhiti Palace is now a public museum offering a fascinating, and at times somber, glimpse into the country's recent history. The palace was the scene of the 2001 royal massacre, and visitors can see the very rooms where the tragic event unfolded. The architecture is a stark contrast to the traditional temples, a modern 1960s structure filled with opulent furnishings, taxidermy, and grand reception halls.\n\nA tour of the palace provides a unique perspective on the lives of Nepal's last monarchs and the political turmoil that led to the end of the monarchy in 2008. It's a compelling and educational visit that sheds light on the foundation of modern Nepal.",
        practicalInfo: {
        howToGetThere: "Located at the eastern end of Durbar Marg, a short walk from Thamel.",
        openingHours: "11:00 AM to 4:00 PM (closed on Tuesdays and Wednesdays).",
        cost: "NPR 1000 for foreign nationals.",
        website: "narayanhitipalacemuseum.gov.np"
      }
      },
        {
        name: "Take a Mount Everest Scenic Flight",
        description: "For those who don't have the time or inclination for a multi-week trek, an Everest scenic flight offers a spectacular alternative. These early-morning flights take you on an hour-long journey along the spine of the Himalayas, providing breathtaking, close-up views of the world's highest peaks. From the comfort of your window seat, you'll see a stunning panorama of giants like Lhotse, Nuptse, and Makalu, culminating in the majestic Mount Everest.\n\nSeveral local airlines operate these flights from Kathmandu's domestic airport. It's an expensive but truly once-in-a-lifetime experience, offering an unforgettable perspective on the sheer scale and beauty of the Himalayan range. Most airlines guarantee a window seat for every passenger.",
        practicalInfo: {
        howToGetThere: "Flights depart from the domestic terminal of Tribhuvan International Airport (TIA).",
        openingHours: "Flights are typically scheduled early in the morning (around 6:30 AM) for the clearest views.",
        cost: "Approximately $200 - $250 USD per person.",
        website: "Check airline websites like Buddha Air or Yeti Airlines."
      }
      },
        {
        name: "Indra Chowk",
        description: "Indra Chowk is another of Kathmandu's most vibrant and historic market junctions, located a short walk from Asan Tole. This bustling crossroads is a sensory delight, famous for its textile merchants selling colorful fabrics, pashminas, and blankets. It's also a hub for merchants selling glass beads (potey), which are used to make traditional necklaces for married Nepali women.\n\nAt the center of the square stands the Akash Bhairab Temple, its facade often adorned with flowers. The energy here is palpable, as vendors call out their wares and shoppers navigate the crowded lanes. Exploring Indra Chowk offers a deeper dive into the commercial and cultural fabric of old Kathmandu, providing a more authentic experience than the tourist-focused shops in Thamel.",
        practicalInfo: {
        howToGetThere: "A short walk from both Asan Tole and Kathmandu Durbar Square.",
        openingHours: "Most active during daytime hours, from morning until early evening.",
        cost: "Free to explore.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Walking is the best way to explore specific districts like Thamel and the Durbar Squares. For longer distances, taxis are plentiful; always agree on a fare beforehand or ask for the meter. Ride-sharing apps like Pathao and inDrive are increasingly popular and offer transparent pricing for car or motorbike rides. Local buses are extremely cheap but can be crowded and difficult for first-time visitors to navigate.",
        whereToStay: "Thamel is the main tourist hub, offering a vast range of accommodations, from budget hostels to mid-range hotels, and is packed with restaurants and shops. For a more peaceful, spiritual atmosphere, stay in Boudha near the great stupa. Patan (Lalitpur) offers a cultural experience, with charming guesthouses amidst historic architecture. For luxury, the hotels along Durbar Marg are the top choice.",
        bestTimeToVisit: "The best times to visit Kathmandu are during the autumn (September to November) and spring (March to May). During these months, the weather is dry and pleasant, and clear skies offer magnificent views of the Himalayas. Winter (December to February) is cold but still clear. The monsoon season (June to August) brings heavy rain, cloudy skies, and humidity, which can obscure mountain views and make travel challenging.",
        suggestedItinerary: "Day 1: Spiritual Kathmandu. Start with sunrise at Swayambhunath (Monkey Temple). Then, visit the sacred Pashupatinath Temple. In the afternoon, find peace at the massive Boudhanath Stupa and explore the surrounding monasteries. Day 2: Royal Cities. Spend the morning exploring the historic Kathmandu Durbar Square. In the afternoon, take a taxi to Patan Durbar Square, visit the excellent museum, and wander through its artistic alleys. Enjoy the evening in Thamel. Day 3: Medieval Wonders. Take a day trip to Bhaktapur Durbar Square, allowing at least half a day to soak in its timeless atmosphere and try the famous Juju Dhau yogurt. Optionally, combine this with a visit to the nearby Changu Narayan Temple."
      }}
      faqs={[{
          question: "Is Kathmandu expensive?",
          answer: "Kathmandu is generally a very affordable destination. Budget travelers can easily get by on $25-35 USD per day, staying in hostels, eating local food (a plate of dal bhat costs $2-4), and using local transport. A mid-range budget of $50-70 USD per day allows for comfortable private rooms, dining at a variety of restaurants, and taking taxis. Activities like the Everest flight or hiring private guides will add to the cost, but overall, it's one of the most budget-friendly capitals in the world."
        },
        {
          question: "How many days do you need in Kathmandu?",
          answer: "To comfortably see the main highlights within the Kathmandu Valley, including the three Durbar Squares, Swayambhunath, Boudhanath, and Pashupatinath, you need at least 3 to 4 full days. This allows you to explore at a relaxed pace. If you wish to include day trips to places like Nagarkot or Panauti, or explore the city's neighborhoods more deeply, a week would be ideal. It also serves as the main entry and exit point for longer treks in Nepal."
        },
        {
          question: "Is Kathmandu safe?",
          answer: "Kathmandu is generally a safe city for travelers. The primary concerns are petty crime, like pickpocketing in crowded areas, and minor scams. Always be aware of your surroundings and keep valuables secure. Traffic can be chaotic, so exercise caution when crossing streets. The biggest safety consideration for many visitors is related to adventure activities like trekking; always use reputable companies and be aware of the risks of altitude sickness. Politically, protests (bandhs) can occur, so it's wise to stay informed about the local situation."
        },
        {
          question: "What is Kathmandu famous for?",
          answer: "Kathmandu is famous for being the gateway to the Himalayas and Mount Everest. It is renowned for its incredible concentration of UNESCO World Heritage Sites, including seven within the valley that showcase stunning traditional Newari art and architecture. The city is also a major spiritual center, known for the unique harmony between Hinduism and Buddhism, exemplified by sites like Pashupatinath Temple and Boudhanath Stupa. Finally, it's famous for its vibrant, chaotic, and friendly atmosphere, from the tourist hub of Thamel to the ancient market squares."
        }
      ]}
    />
  );
};