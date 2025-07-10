import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Surabaya: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Surabaya, Indonesia (2025 Guide)"}
      description={"Welcome to Surabaya, Indonesia's vibrant second-largest city and a powerhouse of history, culture, and commerce. Known as Kota Pahlawan, or the 'City of Heroes,' Surabaya played a pivotal role in the nation's struggle for independence, a legacy proudly displayed in its numerous monuments and museums. Beyond its historical significance, the city offers a fascinating blend of Dutch colonial architecture, bustling traditional markets, gleaming modern malls, and a rich culinary landscape waiting to be explored. From the iconic Suramadu Bridge to the aromatic lanes of the Arab Quarter, there's a dynamic energy here that captivates every visitor. This guide will walk you through all the best things to do in Surabaya, ensuring you experience the heart and soul of this East Javanese metropolis."}
      highlights={["Heroes Monument (Tugu Pahlawan) and 10 November Museum",
        "House of Sampoerna",
        "Suramadu National Bridge",
        "Submarine Monument (Monumen Kapal Selam)",
        "Arab Quarter (Kampung Arab) & Ampel Mosque"]}
      attractions={[
        {
        name: "Heroes Monument (Tugu Pahlawan) and 10 November Museum",
        description: "This towering 41-meter monument is the undisputed symbol of Surabaya, dedicated to the heroes who fought and died during the Battle of Surabaya on November 10, 1945. The iconic structure stands in a vast green square, offering a place for reflection on the city's fierce spirit of independence. \n\nBeneath the monument lies the 10 November Museum, an excellent subterranean museum that chronicles the battle through dioramas, historical artifacts, photographs, and personal accounts. It provides deep insight into why Surabaya is known as the 'City of Heroes' and is an essential first stop for understanding the local identity.",
        practicalInfo: {
        howToGetThere: "Located at Jalan Pahlawan, Alun-alun Contong. Easily accessible via taxi or ride-hailing services like Gojek or Grab.",
        openingHours: "Daily, 8:00 AM - 3:00 PM (Museum hours may vary, especially on weekends and public holidays).",
        cost: "Around IDR 5,000 for the museum. The monument grounds are free to enter.",
        website: "disbudporapar.surabaya.go.id"
      }
      },
        {
        name: "House of Sampoerna",
        description: "Housed in an elegant Dutch colonial-style building from 1862, the House of Sampoerna is a fascinating museum and active cigarette factory. It tells the story of the Sampoerna family and their iconic 'Dji Sam Soe' kretek (clove cigarette) brand. Visitors can watch the mesmerizing speed and precision of hundreds of women hand-rolling cigarettes on the factory floor from a viewing gallery.\n\nThe complex also includes a lovely cafe, a gift shop, and an art gallery. The museum offers a free city sightseeing bus tour, the Surabaya Heritage Track, which is an excellent way to see other historical parts of the city, but booking in advance is essential as it's very popular.",
        practicalInfo: {
        howToGetThere: "Located at Taman Sampoerna No.6, Krembangan. A short taxi or ride-hail trip from the city center.",
        openingHours: "Daily, 9:00 AM - 6:00 PM.",
        cost: "Free admission.",
        website: "www.houseofsampoerna.com"
      }
      },
        {
        name: "Suramadu National Bridge",
        description: "A marvel of modern engineering, the Suramadu Bridge is the longest bridge in Indonesia, connecting Surabaya on the island of Java with the island of Madura. Spanning over 5.4 kilometers, the cable-stayed bridge is an impressive sight, especially at night when it's illuminated with colorful lights.\n\nWhile you can drive across it, many visitors come simply to admire the view from the Surabaya side. The area near the bridge has become a popular spot for locals to gather, fly kites, and enjoy snacks from the numerous food stalls. It represents Surabaya's forward-looking development and its connection to the wider region.",
        practicalInfo: {
        howToGetThere: "Located at the northeastern edge of Surabaya. Best reached by car, taxi, or motorcycle.",
        openingHours: "Open 24/7.",
        cost: "Free to view. A toll is charged for vehicles crossing the bridge.",
        website: "N/A"
      }
      },
        {
        name: "Submarine Monument (Monumen Kapal Selam)",
        description: "Monumen Kapal Selam, or 'Monkasel,' is an actual Russian-built submarine, the KRI Pasopati 410, which served in the Indonesian Navy from 1962 until its decommissioning in 1990. Now resting on land in the city center, it has been converted into a unique museum.\n\nVisitors can climb inside the vessel and explore its narrow corridors, including the torpedo room, crew quarters, and the periscope tower, offering a real sense of life aboard a submarine. A short film detailing the submarine's history is also shown in an adjacent building. It's a fun and educational experience for all ages.",
        practicalInfo: {
        howToGetThere: "Located at Jalan Pemuda No. 39, Genteng, right by the Kalimas River.",
        openingHours: "Daily, 8:00 AM - 9:00 PM.",
        cost: "Around IDR 15,000 per person.",
        website: "www.monkasel.com"
      }
      },
        {
        name: "Arab Quarter (Kampung Arab) & Ampel Mosque",
        description: "Step into a different world in Surabaya's vibrant Arab Quarter. This bustling neighborhood is centered around the sacred Ampel Mosque, the final resting place of Sunan Ampel, one of the 'Wali Songo' (Nine Saints) who spread Islam on Java. The mosque itself is a site of pilgrimage and features a beautiful, serene atmosphere with distinctive Javanese and Arabic architectural elements.\n\nThe surrounding streets are a sensory delight, filled with shops selling perfumes, prayer beads, dates, and religious texts. The area is also famous for its delicious Middle Eastern and local cuisine. Exploring the narrow alleyways of the market (Pasar Ampel) is an unforgettable cultural experience.",
        practicalInfo: {
        howToGetThere: "Located in the Ampel subdistrict, Semampir. A taxi or becak (pedicab) is the best way to navigate the narrow streets.",
        openingHours: "Market and area are generally open all day, but busiest in the morning and late afternoon. Mosque is open 24/7 for prayer.",
        cost: "Free to enter the area and mosque. Modest dress is required for the mosque.",
        website: "N/A"
      }
      },
        {
        name: "Kenjeran Park (Kenpark)",
        description: "A sprawling recreational area on the coast, Kenjeran Park, or 'Kenpark,' is a slightly kitschy but fun destination. Its most prominent landmarks are the massive four-faced Buddha statue and the Sanggar Agung Temple, which features giant sea-dragon guardians stretching over the water.\n\nThe park offers a mix of attractions, including a waterpark, a racetrack, pagodas, and plenty of photo opportunities. It's a popular weekend spot for local families and provides a different, more relaxed pace compared to the city center, with views of the Suramadu Bridge and the Madura Strait.",
        practicalInfo: {
        howToGetThere: "Located on the eastern coast of Surabaya. Best reached by car or taxi.",
        openingHours: "Daily, 7:00 AM - 5:00 PM (hours may vary for different attractions within the park).",
        cost: "Entrance fee is around IDR 25,000 - 35,000, with separate tickets for some rides.",
        website: "N/A"
      }
      },
        {
        name: "Cheng Ho Mosque",
        description: "This unique mosque stands out with its striking Chinese-style architecture, complete with a multi-tiered pagoda roof, red pillars, and dragon motifs. It was named after Admiral Cheng Ho (Zheng He), the famous Chinese Muslim explorer who visited Surabaya in the 15th century. \n\nThe building is a beautiful symbol of the harmonious blend of Chinese and Islamic culture in Indonesia. It's not just a place of worship but also a cultural landmark that attracts visitors of all faiths who come to admire its unique design and peaceful atmosphere.",
        practicalInfo: {
        howToGetThere: "Located at Jalan Gading No. 2, Ketabang. Centrally located and easy to reach.",
        openingHours: "Open to visitors outside of prayer times. Best to visit in the morning or afternoon.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Pasar Atom (Atom Market)",
        description: "Pasar Atom is a legendary, multi-story market that is a paradise for shoppers and foodies. It’s a labyrinth of stalls selling everything imaginable, from fashion and electronics to gold jewelry and traditional snacks. This is the place to experience the authentic hustle and bustle of local Surabaya commerce.\n\nThe food court is a major highlight, offering a huge variety of Indonesian and Chinese-Indonesian dishes. Don't leave without trying some local delicacies like cakwe (fried dough sticks) or a bowl of savory noodles. It's a chaotic, vibrant, and thoroughly Surabayan experience.",
        practicalInfo: {
        howToGetThere: "Located at Jl. Bunguran No.45, Bongkaran. Close to the city's old Chinatown.",
        openingHours: "Daily, 10:00 AM - 5:00 PM.",
        cost: "Free to enter.",
        website: "www.pasaratum.com"
      }
      },
        {
        name: "Tunjungan Plaza",
        description: "For a modern shopping experience, head to Tunjungan Plaza (TP). As one of the largest and most popular shopping malls in Indonesia, TP is a massive complex of six interconnected buildings. It offers a complete contrast to the traditional markets, with a vast selection of international and local brands, department stores, cinemas, and an endless array of dining options.\n\nIt's more than just a place to shop; it's a social hub for Surabayans. Whether you're looking for air-conditioned comfort, a specific brand, or a wide variety of food choices from food courts to fine dining, Tunjungan Plaza has it all.",
        practicalInfo: {
        howToGetThere: "Centrally located on Jalan Jenderal Basuki Rachmat.",
        openingHours: "Daily, 10:00 AM - 10:00 PM.",
        cost: "Free to enter.",
        website: "www.tunjunganplaza.com"
      }
      },
        {
        name: "Surabaya's Zoo (Kebun Binatang Surabaya)",
        description: "Established in 1916, Surabaya's Zoo is one of the oldest and largest in Southeast Asia. It houses a wide collection of animals, including many native Indonesian species like the Komodo dragon, Sumatran tiger, and orangutan. The zoo has undergone significant improvements in recent years to enhance animal welfare and visitor experience.\n\nWhile it has faced criticism in the past, current efforts are focused on conservation and education. The sprawling grounds make for a pleasant walk, and it remains a popular and affordable outing for families. The nocturnal animal tour is a unique feature worth checking out.",
        practicalInfo: {
        howToGetThere: "Located at Jl. Setail No. 1, Darmo. Easily accessible.",
        openingHours: "Daily, 8:00 AM - 4:00 PM.",
        cost: "Around IDR 15,000 on weekdays, higher on weekends.",
        website: "www.surabayazoo.co.id"
      }
      },
        {
        name: "Bungkul Park (Taman Bungkul)",
        description: "Once recognized by the United Nations as one of the best urban parks in Asia, Bungkul Park is the green heart of Surabaya. It's a beautifully maintained public space that's always buzzing with activity. The park features a skate park, a children's playground, free Wi-Fi, and numerous food stalls (warungs) selling local street food.\n\nIt's the perfect place to see contemporary local life, watch families enjoying their evenings, and try some classic Surabayan snacks. The park is built around the tomb of Ki Ageng Supo, a respected religious figure, adding a touch of spiritual heritage to this modern recreational space.",
        practicalInfo: {
        howToGetThere: "Located on Jalan Raya Darmo in the city center.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A"
      }
      },
        {
        name: "Sanggar Agung Temple (Klenteng Sanggar Agung)",
        description: "Also known as Hong Tiek Hian Temple, this Chinese temple is located within the Kenjeran Park area but is an attraction in its own right. Its most spectacular feature is a pair of magnificent 20-meter-high dragons that form an arched gateway over a statue of Guan Yin, the goddess of mercy, seemingly guarding the sea.\n\nThe temple is set right on the waterfront, providing a dramatic and picturesque scene, especially during sunset. It is an active place of worship for Buddhists, Taoists, and Confucianists, and a stunning example of religious architecture blending with the natural coastal landscape.",
        practicalInfo: {
        howToGetThere: "Inside Kenjeran Park, on Jalan Sukolilo No. 100.",
        openingHours: "Daily, 7:00 AM - 8:00 PM.",
        cost: "Included in the Kenjeran Park entrance fee, or a small separate fee if entering directly.",
        website: "N/A"
      }
      },
        {
        name: "G-Walk Citraland",
        description: "G-Walk is an open-air culinary destination located in the upscale Citraland residential area in West Surabaya. This long pedestrian street is lined on both sides with a diverse array of restaurants, cafes, and food stalls, coming alive every evening.\n\nThe atmosphere is lively and relaxed, making it a favorite hangout spot for young people and families. You can find everything here from traditional Indonesian favorites like satay and bakso (meatball soup) to Japanese, Chinese, and Western cuisines. It’s an excellent place to spend an evening sampling different foods in a clean and organized setting.",
        practicalInfo: {
        howToGetThere: "Located in the Citraland complex in West Surabaya. Best reached by taxi or private car.",
        openingHours: "Most establishments open from 5:00 PM - 11:00 PM.",
        cost: "Free to enter; pay for what you eat.",
        website: "N/A"
      }
      },
        {
        name: "Mirota Batik & Handicraft",
        description: "For souvenir shopping, Mirota Batik is an essential stop. This large, fixed-price store is a treasure trove of Indonesian arts and crafts. While batik is the main event—with an enormous selection of fabrics, clothing, and accessories from various regions—the store offers much more.\n\nYou can find wooden carvings, silverware, puppets (wayang), traditional snacks (oleh-oleh), herbal remedies (jamu), and countless other trinkets. It's a one-stop-shop for high-quality, authentic Indonesian souvenirs at reasonable prices, without the need for haggling.",
        practicalInfo: {
        howToGetThere: "Located at Jalan Sulawesi No. 24, Gubeng.",
        openingHours: "Daily, 9:00 AM - 9:30 PM.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Hutan Bambu Keputih (Keputih Bamboo Forest)",
        description: "A tranquil escape from the urban sprawl, the Keputih Bamboo Forest is a beautiful green space that feels worlds away from the city. This area was formerly a landfill, but has been impressively rehabilitated into a serene park. It features dense groves of bamboo that create scenic, shaded pathways, reminiscent of the famous Arashiyama Bamboo Grove in Kyoto, Japan.\n\nAdjacent to the bamboo forest is Taman Sakura, a garden planted with Tabebuia trees that bloom with beautiful pink and white flowers, resembling cherry blossoms, typically between October and November. It's a favorite spot for photography enthusiasts and anyone looking for a peaceful stroll.",
        practicalInfo: {
        howToGetThere: "Located in Keputih, Sukolilo, near the Sepuluh Nopember Institute of Technology (ITS) campus. Best reached by taxi or ride-hailing app.",
        openingHours: "Daily, 6:00 AM - 6:00 PM.",
        cost: "Free, though there may be a small parking fee.",
        website: "N/A"
      }
      }
      ]}
      logistics={{
        gettingAround: "Getting around Surabaya is convenient. The most popular options are ride-hailing apps like Gojek and Grab, which offer affordable and reliable car and motorcycle taxi services. Blue Bird is a reputable metered taxi company. For a unique local experience, try the Suroboyo Bus, which you can pay for using plastic bottles. For short distances in older parts of town, a traditional becak (pedicab) can be a fun ride.",
        whereToStay: "For luxury and business travelers, the Central Business District around Jalan Basuki Rachmat and Jalan Embong Malang offers high-end hotels like the JW Marriott and Sheraton. For mid-range options close to shopping and attractions, the Genteng and Gubeng areas are ideal, with hotels like HARRIS Hotel & Conventions Gubeng. Budget travelers can find numerous guesthouses and affordable hotels throughout the city.",
        bestTimeToVisit: "The best time to visit Surabaya is during the dry season, which typically runs from May to September. During these months, you can expect sunny days and lower humidity, making it ideal for exploring the city's outdoor attractions. The temperature is consistently hot year-round, averaging 27-34°C (80-93°F). The wet season, from October to April, sees heavy tropical downpours, but they are often brief.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: History & Culture. Start at the Heroes Monument and 10 November Museum. Visit the House of Sampoerna (try to catch the heritage bus tour). In the afternoon, explore the historic Arab Quarter and Ampel Mosque.\nDay 2: Modern & Coastal. Admire the Suramadu Bridge, then have some fun at Kenjeran Park and Sanggar Agung Temple. Head back to the city center to explore the Submarine Monument and finish with shopping and dinner at Tunjungan Plaza.\nDay 3: Local Life & Nature. Experience the bustle of Pasar Atom in the morning. Find tranquility at the Keputih Bamboo Forest. In the evening, relax and eat like a local at Bungkul Park or G-Walk Citraland."
      }}
      faqs={[{
          question: "Is Surabaya expensive?",
          answer: "Surabaya is generally considered one of the most affordable major cities in Indonesia, especially compared to Jakarta or Bali. A decent meal at a local warung can cost as little as IDR 20,000-40,000 ($1.25-$2.50 USD). Transportation via ride-hailing apps is very cheap. Mid-range hotel rooms can be found for $30-$60 USD per night. While high-end dining and shopping are available, a budget-conscious traveler can enjoy Surabaya very comfortably."
        },
        {
          question: "How many days do you need in Surabaya?",
          answer: "Two to three full days are sufficient to cover the main highlights of Surabaya. This gives you enough time to see the key historical monuments, explore a few cultural neighborhoods, visit the main markets, and enjoy the local food. If you wish to explore at a more leisurely pace or take a day trip to nearby attractions like Mount Bromo (which requires an overnight trip) or the city of Malang, then 4-5 days would be ideal."
        },
        {
          question: "Is Surabaya safe?",
          answer: "Yes, Surabaya is generally a safe city for tourists. The crime rate is relatively low compared to other large cities in Southeast Asia. However, like any major urban area, it's wise to take standard precautions. Be mindful of your belongings in crowded places like markets and public transport to avoid petty theft or pickpocketing. Use reputable taxi companies or ride-hailing apps. Overall, Surabayans are known for being friendly and welcoming to visitors."
        },
        {
          question: "What is Surabaya famous for?",
          answer: "Surabaya is most famous for its heroic role in the Indonesian War of Independence, earning it the nickname 'Kota Pahlawan' (City of Heroes). It is also known for its rich culinary scene, with signature dishes like Rujak Cingur (a unique fruit salad with cow muzzle), Lontong Balap (bean sprout and rice cake soup), and Sate Klopo (coconut-infused satay). Key landmarks include the Heroes Monument, the modern Suramadu Bridge, and the historic House of Sampoerna."
        }
      ]}
    />
  );
};