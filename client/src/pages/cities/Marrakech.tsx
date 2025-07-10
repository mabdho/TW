import React from 'react';
import { CityPage } from '@/components/CityPage';

export const Marrakech: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Marrakech, Guide"
      description={`Welcome to Marrakech, Morocco's enchanting 'Red City.' A whirlwind of vibrant colors, exotic scents, and captivating sounds, this city is a sensory masterpiece. Here, ancient traditions blend seamlessly with contemporary life. Lose yourself in the labyrinthine alleys of the historic medina, a UNESCO World Heritage site, where bustling souks overflow with handcrafted treasures. By night, the city's heart, Jemaa el-Fnaa, transforms into a spectacular open-air theater of storytellers, musicians, and food vendors. Beyond the old city walls, chic art galleries, serene gardens, and stylish cafes offer a modern Moroccan experience. From opulent palaces to tranquil riads, navigating the rich tapestry of culture and history is an adventure in itself. This guide will walk you through all the very best things to do in Marrakech, ensuring your visit is unforgettable."`}
      highlights={[
      "Jemaa el-Fnaa Square",
      "Jardin Majorelle",
      "Bahia Palace",
      "The Souks of Marrakech",
      "Koutoubia Mosque"
]}
      attractions={[
      {
            "name": "Jemaa el-Fnaa Square",
            "description": "The beating heart of Marrakech, Jemaa el-Fnaa is an absolute must-see. By day, this vast public square is filled with snake charmers, henna tattoo artists, and fresh orange juice stalls. But as dusk descends, it undergoes a magical transformation. Storytellers captivate crowds, Gnawa musicians play hypnotic tunes, and rows of food stalls emerge, filling the air with the sizzling aroma of grilled meats and tagines. The energy is electric and chaotic in the most wonderful way.\n\nFor the best view, head to one of the many rooftop cafes and restaurants surrounding the square. From here, you can watch the spectacle unfold below with a mint tea in hand as the sun sets behind the Koutoubia Mosque. It's a quintessential Marrakech experience that engages all the senses.",
            "practicalInfo": {
                  "howToGetThere": "Located at the entrance of the medina, it's easily accessible on foot from most central locations.",
                  "openingHours": "24/7, with peak activity from late afternoon until late at night.",
                  "cost": "Free to enter, but bring cash for food, drinks, and tipping performers.",
                  "website": "n/a"
            }
      },
      {
            "name": "Jardin Majorelle",
            "description": "An oasis of tranquility amidst the city's hustle, Jardin Majorelle is a botanical garden that took French painter Jacques Majorelle forty years to create. Famous for its striking cobalt blue accents, aptly named 'Majorelle Blue,' the garden is a masterpiece of landscape design, featuring an impressive collection of cacti, bamboo groves, and lily-covered ponds.\n\nThe property was purchased and restored in the 1980s by fashion designer Yves Saint Laurent and his partner Pierre Bergé. Their ashes were scattered here, and a small memorial stands in their honor. The garden also houses the Berber Museum, which offers a fascinating insight into the rich culture of North Africa's indigenous people through a collection of textiles, jewelry, and artifacts.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Gueliz neighborhood, a short taxi ride from the medina.",
                  "openingHours": "8:00 AM - 6:30 PM daily (last entry at 6:00 PM). Hours can vary by season.",
                  "cost": "Approx. 150 MAD for the garden, plus an additional fee for the Berber Museum. It's highly recommended to book tickets online in advance to avoid long queues.",
                  "website": "https://www.jardinmajorelle.com/en/"
            }
      },
      {
            "name": "Bahia Palace",
            "description": "Step into a world of 19th-century opulence at the Bahia Palace, a masterpiece of Moroccan architecture and craftsmanship. Built for the Grand Vizier Si Moussa, the palace was intended to be the greatest of its time, and its name fittingly translates to 'brilliance.' Wander through its sprawling complex of courtyards, apartments, and gardens, each more intricate than the last.\n\nThe palace is renowned for its stunning zellij (mosaic tilework), intricately carved stucco, and painted cedarwood ceilings. The vast Court of Honor, paved with Italian Carrara marble, is a highlight, as are the serene riad gardens planted with orange trees and jasmine. It provides a fascinating glimpse into the lavish lifestyle of the Moroccan elite.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Mellah (Jewish Quarter) of the medina, a short walk from Jemaa el-Fnaa.",
                  "openingHours": "9:00 AM - 5:00 PM daily.",
                  "cost": "Approx. 70 MAD.",
                  "website": "n/a"
            }
      },
      {
            "name": "The Souks of Marrakech",
            "description": "Prepare to get lost in the best way possible. The souks of Marrakech are a labyrinthine network of narrow alleyways, each dedicated to a specific craft. Souk Semmarine is the main artery, but a true adventure lies in exploring the smaller, specialized markets. You'll find everything from colorful babouches (leather slippers) and shimmering lanterns to aromatic spices, handwoven Berber carpets, and fragrant argan oil.\n\nHaggling is part of the culture and is expected, so approach it with a friendly and respectful attitude. Even if you don't plan on buying anything, the experience of wandering through the bustling, vibrant corridors, watching artisans at work, and soaking in the atmosphere is an essential part of any trip to Marrakech.",
            "practicalInfo": {
                  "howToGetThere": "The main entrances are off Jemaa el-Fnaa square.",
                  "openingHours": "Generally 9:00 AM - 9:00 PM, though many shops close for a midday break.",
                  "cost": "Free to browse.",
                  "website": "n/a"
            }
      },
      {
            "name": "Koutoubia Mosque",
            "description": "The Koutoubia Mosque is the spiritual landmark of Marrakech. Its magnificent minaret, standing at 77 meters tall, is an icon of the city, visible from miles around. Built in the 12th century, its intricate design, with decorative arches and stonework, served as a model for other famous structures like the Giralda in Seville. The name 'Koutoubia' derives from 'al-Koutoubiyyin' (the booksellers), as a booksellers' market once thrived nearby.\n\nWhile non-Muslims are not permitted to enter the mosque itself, its exterior and the surrounding gardens are a sight to behold. It is particularly beautiful at sunset when the call to prayer echoes across the city and the minaret is illuminated against the evening sky.",
            "practicalInfo": {
                  "howToGetThere": "Located next to Jemaa el-Fnaa, it's impossible to miss.",
                  "openingHours": "Exterior and gardens are accessible at all times. Prayer times are restricted to Muslims.",
                  "cost": "Free to view from the outside.",
                  "website": "n/a"
            }
      },
      {
            "name": "Medersa Ben Youssef",
            "description": "Once the largest Islamic college in North Africa, the Medersa Ben Youssef is a stunning example of Saadian-era architecture. Founded in the 14th century and rebuilt in the 16th, it housed up to 900 students in its prime. After extensive restoration, it reopened as a historical site that showcases some of the most beautiful craftsmanship in Morocco.\n\nThe central courtyard is the highlight, featuring a tranquil reflecting pool, breathtaking zellij tilework, carved cedarwood, and delicate stucco plasterwork adorned with Quranic inscriptions. Visitors can also explore the small, stark student dormitories upstairs, which offer a humbling contrast to the grandeur of the main courtyard.",
            "practicalInfo": {
                  "howToGetThere": "Deep within the northern part of the medina, near the Musée de Marrakech.",
                  "openingHours": "9:00 AM - 6:00 PM daily.",
                  "cost": "Approx. 50 MAD.",
                  "website": "n/a"
            }
      },
      {
            "name": "Saadian Tombs",
            "description": "Hidden for centuries, the Saadian Tombs were rediscovered in 1917 and have since become one of Marrakech's most visited sites. This royal necropolis dates back to the 16th century and is the final resting place of Sultan Ahmad al-Mansur, his family, and close advisors. The tombs were sealed off by a later ruler and were only accessible through a small passage from an adjacent mosque.\n\nThe mausoleums are renowned for their magnificent decorations. The Chamber of the Twelve Columns, where the sultan himself is buried, is particularly breathtaking, featuring Italian Carrara marble and gilded honeycomb muqarnas (decorative plasterwork). The intricate details and serene atmosphere make this a captivating historical site.",
            "practicalInfo": {
                  "howToGetThere": "Located just outside the Kasbah Mosque, a short walk from the Mellah.",
                  "openingHours": "9:00 AM - 5:00 PM daily.",
                  "cost": "Approx. 70 MAD. Expect queues for the main mausoleum.",
                  "website": "n/a"
            }
      },
      {
            "name": "Le Jardin Secret",
            "description": "A true hidden gem in the medina, Le Jardin Secret offers a peaceful escape from the city's frenzy. This beautifully restored complex consists of two gardens: an 'Exotic Garden' and a more traditional 'Islamic Garden.' The Islamic Garden is laid out according to rigid geometric rules, with water channels that are both decorative and functional, reflecting the concept of paradise.\n\nThe palace complex itself dates back to the Saadian Dynasty more than 400 years ago. Visitors can climb the tower for a panoramic view over the medina rooftops and the Atlas Mountains in the distance. The on-site cafe is a perfect spot to relax and enjoy the serene surroundings.",
            "practicalInfo": {
                  "howToGetThere": "Located in the Mouassine district of the medina.",
                  "openingHours": "9:30 AM - 6:30 PM (Feb-Oct), 9:30 AM - 5:30 PM (Nov-Jan).",
                  "cost": "Approx. 80 MAD for the garden, with an additional fee for tower access.",
                  "website": "https://www.lejardinsecretmarrakech.com/en/"
            }
      },
      {
            "name": "Musée Yves Saint Laurent Marrakech",
            "description": "Adjacent to the Jardin Majorelle, this museum is a must for fashion and design lovers. Opened in 2017, the Musée Yves Saint Laurent (mYSLm) is dedicated to the life and work of the legendary French couturier who considered Marrakech his second home. The building itself is an architectural marvel, with a facade of interlocking brick that evokes the weave of fabric.\n\nInside, you'll find a stunning permanent exhibition showcasing some of Saint Laurent's most iconic creations, including the 'Le Smoking' tuxedo and the 'Mondrian' dress. The museum also features a temporary exhibition space, a research library, an auditorium, and a cozy cafe. It offers a deep dive into the creative genius of a designer deeply inspired by the colors and culture of Morocco.",
            "practicalInfo": {
                  "howToGetThere": "Located on Rue Yves Saint Laurent, next to Jardin Majorelle. A short taxi ride from the medina.",
                  "openingHours": "10:00 AM - 6:00 PM (last entry 5:30 PM). Closed Wednesdays.",
                  "cost": "Approx. 130 MAD. Combination tickets with Jardin Majorelle are available.",
                  "website": "https://www.museeyslmarrakech.com/en/"
            }
      },
      {
            "name": "El Badi Palace",
            "description": "While now largely in ruins, the El Badi Palace offers a powerful sense of the grandeur of the Saadian dynasty. Built in the late 16th century by Sultan Ahmad al-Mansur, it was a lavish complex of over 300 rooms, decorated with gold, turquoise, and crystal. The name 'El Badi' means 'The Incomparable,' and for a time, it was one of the most magnificent palaces in the world.\n\nToday, you can wander through the vast sunken courtyard, envisioning the grand receptions that once took place here. Explore the underground passageways and climb the ramparts for excellent views of the city and the many storks that now nest on the palace walls. Don't miss the small museum room that houses the original 12th-century minbar (pulpit) from the Koutoubia Mosque.",
            "practicalInfo": {
                  "howToGetThere": "Located in the southern part of the medina, near the Saadian Tombs.",
                  "openingHours": "9:00 AM - 5:00 PM daily.",
                  "cost": "Approx. 70 MAD.",
                  "website": "n/a"
            }
      },
      {
            "name": "Maison de la Photographie",
            "description": "For a different perspective on Morocco, visit the Maison de la Photographie. Housed in a beautifully restored fondouk (a traditional merchants' inn), this museum showcases a private collection of over 10,000 photographs of Morocco and its people, spanning from 1870 to 1960. It offers a poignant and fascinating look at the country's history and cultural evolution before the age of mass tourism.\n\nThe collection includes portraits, landscapes, and scenes of daily life, providing a rich visual archive. After exploring the exhibits, head up to the rooftop cafe, which offers some of the best panoramic views of the medina and the Atlas Mountains, making it a perfect spot for a break.",
            "practicalInfo": {
                  "howToGetThere": "Tucked away in the medina, north of the main souks. Follow the signs carefully.",
                  "openingHours": "9:30 AM - 7:00 PM daily.",
                  "cost": "Approx. 50 MAD.",
                  "website": "https://www.maisonphotorabat.com/"
            }
      },
      {
            "name": "Experience a Traditional Hammam & Spa",
            "description": "No trip to Morocco is complete without experiencing a traditional hammam. This is not just a spa treatment; it's a deep-rooted cultural ritual. The experience involves a steam room, a vigorous scrub-down with a 'kessa' glove and 'savon beldi' (black soap), and often a clay mask ('ghassoul'). You will leave feeling cleaner and more exfoliated than ever before.\n\nOptions range from local, no-frills public hammams (a truly authentic experience if you're adventurous) to luxurious private spas found in high-end riads and hotels. For a great mid-range to luxury experience, consider places like Hammam de la Rose or Les Bains de Marrakech, which offer a more private and tourist-friendly introduction to the ritual.",
            "practicalInfo": {
                  "howToGetThere": "Hammams are located all over the city. Choose one based on your comfort level and budget.",
                  "openingHours": "Varies by establishment. Luxury spas usually require advance booking.",
                  "cost": "From 20 MAD for a basic public hammam to over 500 MAD for a luxury spa package.",
                  "website": "Varies by establishment."
            }
      },
      {
            "name": "Take a Moroccan Cooking Class",
            "description": "Delve into the secrets of one of the world's most delicious cuisines by taking a Moroccan cooking class. These hands-on workshops are a fantastic way to engage with the local culture and bring a taste of Morocco home with you. Most classes begin with a guided tour of a local food market to learn about key ingredients like saffron, cumin, turmeric, and preserved lemons.\n\nYou'll then learn to prepare classic dishes such as tagine, couscous, and various Moroccan salads under the guidance of a local chef. The best part is sitting down at the end to enjoy the delicious meal you've created. Popular and well-regarded options include La Maison Arabe and Souk Cuisine.",
            "practicalInfo": {
                  "howToGetThere": "Classes are offered by various riads and dedicated schools. Most require pre-booking and may offer hotel pickup.",
                  "openingHours": "Classes are typically half-day or full-day sessions. Booking is essential.",
                  "cost": "Approx. 400-700 MAD per person.",
                  "website": "Varies by cooking school."
            }
      },
      {
            "name": "The Tanneries",
            "description": "For a raw and unforgettable sensory experience, visit the tanneries district. Here, you can observe the ancient, traditional process of treating and dyeing animal hides, a craft that has remained largely unchanged for centuries. Workers stand in vats of colorful dyes, treating leather that will eventually become bags, shoes, and coats sold in the souks.\n\nBe prepared for an intense, pungent smell. Guides at the entrance will offer you a sprig of mint to hold under your nose, which is highly recommended. You will likely be led to a leather shop's balcony overlooking the pits, which provides the best vantage point. A small tip is expected for the tour, and while there's pressure to buy from the shop, it's not obligatory.",
            "practicalInfo": {
                  "howToGetThere": "Located in the northeast corner of the medina, near the Bab Debbagh gate.",
                  "openingHours": "Best visited in the morning when the work is most active.",
                  "cost": "Free, but a tip of 10-20 MAD for the guide/shop owner is customary.",
                  "website": "n/a"
            }
      },
      {
            "name": "Day Trip to the Atlas Mountains",
            "description": "Escape the city's heat and dust with a day trip into the magnificent Atlas Mountains. This stunning mountain range offers a dramatic change of scenery, with rugged peaks, lush valleys, and traditional Berber villages clinging to the hillsides. It's a fantastic opportunity to see a different side of Morocco and experience the legendary hospitality of the Berber people.\n\nMost tours include a scenic drive through valleys like Ourika or Imlil, a short hike to a waterfall, and a visit to a local Berber home for mint tea or a traditional lunch. You can also visit a women's argan oil cooperative to see how this 'liquid gold' is produced. It's a refreshing and culturally enriching experience that provides a perfect contrast to the urban energy of Marrakech.",
            "practicalInfo": {
                  "howToGetThere": "Book a guided tour (small group or private) which typically includes hotel pickup. Alternatively, hire a grand taxi for the day.",
                  "openingHours": "Full-day trip, usually from 9:00 AM to 5:00 PM.",
                  "cost": "From 300 MAD for a group tour to over 1000 MAD for a private tour.",
                  "website": "Numerous tour operators available online or via your riad/hotel."
            }
      }
]}
      logistics={{
      "gettingAround": "The medina is best explored on foot. For longer distances, 'petit taxis' (small, beige-colored cabs) are common for up to 3 people within city limits; always insist on using the meter. 'Grand taxis' (larger, older cars) are used for destinations outside the city or for larger groups. Horse-drawn carriages, or 'caleches,' offer a romantic but touristy way to see the city's landmarks.",
      "whereToStay": "For an authentic experience, stay in a 'Riad' inside the Medina. These traditional homes with internal courtyards offer a peaceful oasis. The Kasbah area is slightly quieter than the heart of the souks. For modern luxury, the Hivernage district has large international hotels and upscale restaurants. Gueliz, the 'new town,' offers modern apartments, international brands, and a more European feel. Recommended Riads: Riad Yasmine, Riad Kniza. Recommended Hotels: La Mamounia, Royal Mansour.",
      "bestTimeToVisit": "The best times to visit Marrakech are during the spring (March to May) and autumn (September to November). During these months, the weather is pleasantly warm and perfect for exploring the city. Summers (June to August) are extremely hot, with temperatures often soaring above 40°C (104°F). Winters are mild but can be chilly, especially at night, though it's a good time to find deals.",
      "suggestedItinerary": "Day 1: Medina Immersion. Start at Jemaa el-Fnaa, dive into the souks, visit Bahia Palace and Medersa Ben Youssef. End the day with sunset drinks overlooking the square. Day 2: Gardens & Gueliz. Morning at Jardin Majorelle and the Musée Yves Saint Laurent. Afternoon exploring the modern Gueliz neighborhood. Evening experience at a traditional hammam. Day 3: History & Views. Explore the ruins of El Badi Palace and the Saadian Tombs in the morning. Visit the Maison de la Photographie for history and great views. Enjoy a final Moroccan dinner at a nice restaurant."
}}
      faqs={[
      {
            "question": "Is Marrakech expensive?",
            "answer": "Marrakech can cater to all budgets. It can be very affordable if you eat at local stalls (a meal for under 50 MAD), stay in budget riads, and walk. Conversely, it can be extremely luxurious with 5-star palace hotels, fine dining restaurants, and high-end shopping. A mid-range traveler can expect to spend around 800-1200 MAD ($80-$120 USD) per day, including accommodation, food, and activities. Always carry cash, especially smaller bills, for souks and taxis."
      },
      {
            "question": "How many days do you need in Marrakech?",
            "answer": "Three to four full days is the ideal amount of time to explore the main attractions within Marrakech without feeling rushed. This allows you to see the key palaces, gardens, and museums, get lost in the souks, and enjoy the atmosphere of Jemaa el-Fnaa. If you want to take a day trip to the Atlas Mountains or the coastal town of Essaouira, add an extra one or two days to your itinerary."
      },
      {
            "question": "Is Marrakech safe?",
            "answer": "Marrakech is generally a safe city for tourists. However, like any major city, petty crime like pickpocketing can occur in crowded areas like the souks and Jemaa el-Fnaa, so keep your valuables secure. Be aware of common scams, such as unofficial guides offering to show you the way (then demanding a high fee) or people claiming a particular attraction is closed to lead you to a relative's shop. Dress modestly, especially when visiting religious sites, to show respect for the local culture. Solo female travelers may receive some unwanted attention; being firm and polite, or ignoring it, is usually effective."
      },
      {
            "question": "What is Marrakech famous for?",
            "answer": "Marrakech is famous for its bustling and chaotic Jemaa el-Fnaa square, the labyrinthine souks filled with spices and crafts, and its historic medina, a UNESCO World Heritage site. It's renowned for its distinctive 'Red City' architecture, opulent palaces like Bahia and El Badi, and serene riads. Culturally, it's known for its delicious cuisine, particularly tagine and couscous, the tradition of mint tea, and the immersive experience of a traditional hammam."
      }
]}
    />
  );
};