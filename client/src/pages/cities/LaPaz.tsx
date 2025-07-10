import React from 'react';
import { CityPage } from '../../components/CityPage';

export const LaPaz: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in La Paz, Bolivia (2025 Guide)"}
      description={"Touching the clouds at over 3,650 meters (11,975 feet), La Paz is a city of dizzying heights and vibrant contrasts. As Bolivia's administrative capital, it buzzes with a unique energy where indigenous traditions blend seamlessly with modern urban life. Nestled in a dramatic canyon and surrounded by the snow-capped peaks of the Andes, its landscape is as breathtaking as its altitude. From the otherworldly landscapes of the Moon Valley to the bustling, mystical Witches' Market, every corner offers a new adventure. The city's innovative cable car system provides stunning panoramic views, turning a simple commute into a sightseeing tour. Exploring this chaotic yet charming metropolis is an unforgettable experience. This guide will walk you through the very best things to do in La Paz, ensuring your trip is packed with culture, adventure, and incredible memories."}
      imageUrl={""}
      highlights={["Ride Mi Teleférico",
        "Explore the Mercado de las Brujas (Witches' Market)",
        "Bike the Yungas Road (Death Road)",
        "Visit Valle de la Luna (Moon Valley)",
        "People-Watch in Plaza Murillo"]}
      galleryImages={[
        { url: "", alt: "LaPaz landmark 1", caption: "LaPaz landmark 1 - placeholder" },
        { url: "", alt: "LaPaz landmark 2", caption: "LaPaz landmark 2 - placeholder" },
        { url: "", alt: "LaPaz landmark 3", caption: "LaPaz landmark 3 - placeholder" },
        { url: "", alt: "LaPaz landmark 4", caption: "LaPaz landmark 4 - placeholder" },
        { url: "", alt: "LaPaz landmark 5", caption: "LaPaz landmark 5 - placeholder" },
        { url: "", alt: "LaPaz landmark 6", caption: "LaPaz landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Ride Mi Teleférico",
        description: "Perhaps the most iconic experience in La Paz, Mi Teleférico is the world's highest and longest urban cable car system. It's not just public transport; it's a moving viewpoint offering breathtaking panoramic views of the entire city, the surrounding canyon, and the majestic Illimani mountain. The system connects the sprawling city of La Paz with its higher-altitude neighbor, El Alto.\n\nRiding the various lines (distinguished by color) is an efficient and spectacular way to understand the city's unique topography. The Red Line (Línea Roja) offers fantastic views on its way up to El Alto, where you can visit the massive open-air market on Thursdays and Sundays. It's a must-do for photographers and anyone wanting to grasp the sheer scale of this Andean metropolis.",
        practicalInfo: {
        howToGetThere: "Multiple stations are located throughout the city. The Central Station (Estación Central) is a major hub.",
        openingHours: "Approximately 6:00 AM - 10:00 PM daily, varies slightly by line.",
        cost: "3 BOB (about $0.45 USD) for a one-way trip on a single line.",
        website: "https://www.miteleferico.bo/"
      }
      },
        {
        name: "Explore the Mercado de las Brujas (Witches' Market)",
        description: "Located on Calle Jimenez and Linares, the Witches' Market is a fascinating, if slightly macabre, glimpse into Aymara beliefs and traditions. The market stalls are packed with a curious array of items used in spiritual rituals, from medicinal herbs and colorful powders to amulets and, most famously, dried llama fetuses. These fetuses are traditionally buried under the foundations of new buildings as a 'cha'lla' or offering to the goddess Pachamama (Mother Earth) for protection and good fortune.\n\nEven if you're not in the market for a love potion, wandering through the stalls is a unique cultural experience. You'll also find beautiful alpaca textiles and other traditional handicrafts in the surrounding streets. It's a sensory overload in the best way possible, offering a window into a belief system that remains a powerful force in modern Bolivia.",
        practicalInfo: {
        howToGetThere: "Located on Calle Linares between Sagarnaga and Santa Cruz, in the tourist heart of the city.",
        openingHours: "Daily, approximately 9:30 AM - 7:00 PM.",
        cost: "Free to browse.",
        website: "N/A (public market)"
      }
      },
        {
        name: "Bike the Yungas Road (Death Road)",
        description: "For thrill-seekers, this is the ultimate La Paz adventure. The North Yungas Road, notoriously nicknamed the 'Death Road', was once the main route connecting La Paz to the Amazon region. Famous for its extreme danger due to its narrow track, lack of guardrails, and sheer 1,000-meter drops, it's now a bucket-list item for mountain bikers. The ride descends over 3,500 meters, starting in the chilly Altiplano and finishing in the lush, tropical heat of the jungle town of Coroico.\n\nDozens of tour operators in La Paz offer guided trips with full-suspension bikes, safety gear, and support vehicles. While the road is much safer now that it's primarily used for tourism, the adrenaline rush is very real. It’s an epic journey through stunningly diverse landscapes, from stark mountain passes to cascading waterfalls and dense rainforest.",
        practicalInfo: {
        howToGetThere: "Book a full-day tour with a reputable operator in La Paz. They provide transport to the starting point.",
        openingHours: "Tours typically depart early morning (around 7:00 AM) and return in the evening.",
        cost: "Ranges from $80 - $120 USD depending on the company and equipment.",
        website: "Multiple tour operators (e.g., Gravity Bolivia, Barracuda Biking)."
      }
      },
        {
        name: "Visit Valle de la Luna (Moon Valley)",
        description: "Just a short trip from the city center lies a landscape that feels like another planet. The Valle de la Luna, or Moon Valley, is not a valley but a mesmerizing maze of canyons and spires formed by centuries of erosion. The clay and sandstone mountains have been carved by wind and rain into bizarre formations, creating a surreal, lunar-like environment.\n\nWell-marked walking paths allow you to explore the area safely, with two different trail lengths available (15 and 45 minutes). The viewpoints offer spectacular photo opportunities, especially as the setting sun casts long, dramatic shadows across the formations. It’s a peaceful escape from the city's hustle and bustle and a fantastic display of nature's artistry.",
        practicalInfo: {
        howToGetThere: "Located about 10km from the city center in Mallasa. Take a taxi (around 30-40 BOB) or a local 'micro' bus signed for Mallasa.",
        openingHours: "Daily, 8:30 AM - 5:30 PM.",
        cost: "15 BOB (about $2.20 USD) for foreigners.",
        website: "N/A (municipal park)"
      }
      },
        {
        name: "People-Watch in Plaza Murillo",
        description: "Plaza Murillo is the political heart of Bolivia. Surrounded by the Presidential Palace (Palacio Quemado), the National Congress of Bolivia, and the La Paz Cathedral, this historic square is a center of daily life and national events. It was named after Pedro Murillo, a hero of the Bolivian independence movement who was hanged in the square in 1810.\n\nThe square is always bustling with activity. You'll see politicians in suits, local families feeding the huge flocks of pigeons, and tourists soaking in the atmosphere. It's a perfect place to sit on a bench, grab a coffee, and watch the world go by. Pay attention to the Presidential Palace guards in their striking 19th-century red uniforms.",
        practicalInfo: {
        howToGetThere: "Centrally located and easily walkable from most downtown hotels.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "N/A (public square)"
      }
      },
        {
        name: "Stroll Down Calle Jaén",
        description: "Step back in time on Calle Jaén, one of the best-preserved colonial streets in La Paz. This narrow, cobblestoned alley is lined with brightly colored 18th-century houses, which now host a cluster of small, fascinating museums, including the Museo de Metales Preciosos (Museum of Precious Metals) and the Museo Costumbrista Juan de Vargas. The street's quiet, historic ambiance is a stark contrast to the noisy city just a block away.\n\nLegend has it that the street is haunted by ghosts of Spanish colonists and independence-era figures. Whether you believe in spirits or not, the street's charm is undeniable. It's a photogenic spot perfect for a leisurely afternoon stroll, followed by a visit to one of its quirky museums or cozy cafes.",
        practicalInfo: {
        howToGetThere: "A short walk from Plaza Murillo in the historic center.",
        openingHours: "Street is always open; museums typically open Tuesday-Sunday, 9:30 AM - 1:00 PM & 3:00 PM - 7:00 PM.",
        cost: "A single ticket (3.50 BOB) often grants access to several museums on the street.",
        website: "N/A"
      }
      },
        {
        name: "Experience Cholita Wrestling",
        description: "For one of the most unique and entertaining evenings you can have, head to El Alto to watch Cholita Wrestling. This spectacular event features indigenous Aymara women, known as 'Cholitas', in their traditional multi-layered skirts, bowler hats, and braided hair, battling it out in the wrestling ring. The show combines theatrical flair, incredible acrobatics, and a dose of humor, as the heroic Cholitas take on villainous male and female opponents.\n\nMore than just a gimmick, the event is a symbol of female empowerment, challenging stereotypes in a traditionally male-dominated society. The crowd is raucous and energetic, cheering for their favorite heroines. It's a loud, fun, and utterly unforgettable cultural spectacle.",
        practicalInfo: {
        howToGetThere: "Held at the Multifunctional Center in El Alto. Most visitors go with a tour that includes transport, tickets, and snacks.",
        openingHours: "Shows are typically held on Sunday afternoons.",
        cost: "Tours cost around $20-25 USD. Independent entry is cheaper but requires navigating to El Alto.",
        website: "N/A (book through local tour agencies)"
      }
      },
        {
        name: "Climb to Mirador Killi Killi",
        description: "For one of the best postcard views of La Paz, make the effort to get to Mirador Killi Killi. This viewpoint, located in the Villa Pabón neighborhood, offers a staggering 360-degree vista of the city sprawled across the canyon below, with the snowy peak of Mount Illimani dominating the horizon. The name comes from a native bird of prey, and it's easy to see why—the perspective is truly eagle-eyed.\n\nThe viewpoint was historically used as a command center during the indigenous siege of 1781. Today, it's a peaceful park that's particularly beautiful at sunset when the city lights begin to twinkle. You can walk up (a steep but rewarding climb) or take a short, inexpensive taxi ride to the top.",
        practicalInfo: {
        howToGetThere: "Located in Villa Pabón. A steep 30-minute walk from the city center or a 10-minute taxi ride.",
        openingHours: "Daily, 9:00 AM - 9:00 PM.",
        cost: "Free.",
        website: "N/A (public park)"
      }
      },
        {
        name: "Visit the Basílica de San Francisco",
        description: "Dominating the plaza of the same name, the Basílica de San Francisco is one of La Paz's most important religious landmarks. Originally built in the 16th century and rebuilt in the 18th, its facade is a stunning example of the 'Mestizo Baroque' architectural style, blending Catholic imagery with indigenous symbols like snakes, birds, and masked figures. The intricate stone carvings are a testament to the skill of Aymara artisans.\n\nFor a small fee, you can take a guided tour which includes access to the choir, the crypts, and best of all, the rooftop. Climbing the narrow staircases to the roof rewards you with fantastic views of Plaza San Francisco and the bustling city life below, offering a unique perspective on both the church and its surroundings.",
        practicalInfo: {
        howToGetThere: "Located on Plaza San Francisco, a central and busy square in the city.",
        openingHours: "Church is open daily for mass. Museum and rooftop tours run Mon-Sat 9:00 AM - 5:00 PM, Sun 9:00 AM - 1:00 PM.",
        cost: "Rooftop tour costs 20 BOB (about $3 USD).",
        website: "N/A"
      }
      },
        {
        name: "Explore the El Alto Market",
        description: "Every Thursday and Sunday, the high-altitude city of El Alto (accessible via the Teleférico) hosts one of South America's largest and most chaotic street markets. The Feria 16 de Julio sprawls for miles, with vendors selling absolutely everything imaginable, from car parts and electronics to clothing, furniture, livestock, and mysterious herbal remedies. It's a raw, authentic slice of Bolivian life, far removed from the tourist-centric markets downtown.\n\nWandering through the endless aisles is an adventure in itself. Be prepared for crowds and keep a close watch on your belongings. This is where locals shop, and you'll find few other tourists. It's an overwhelming but fascinating experience that provides deep insight into the local economy and culture.",
        practicalInfo: {
        howToGetThere: "Take the Red Line (Línea Roja) of the Teleférico to the 16 de Julio station in El Alto.",
        openingHours: "Thursdays and Sundays, from early morning until late afternoon.",
        cost: "Free to browse.",
        website: "N/A (public market)"
      }
      },
        {
        name: "Museo de la Coca (Coca Museum)",
        description: "The coca leaf has a long and complex history in the Andes, and this small but highly informative museum does an excellent job of explaining its cultural, medicinal, and controversial significance. Located in the tourist district, the Coca Museum traces the plant's history from its sacred role in ancient Andean societies, through its traditional use as a mild stimulant to combat altitude sickness, to the modern-day political issues surrounding its derivative, cocaine.\n\nThe exhibits are presented in both Spanish and English and provide a balanced, non-judgmental perspective. It's a fascinating and educational stop that helps visitors understand a crucial aspect of Bolivian culture and the plant's misunderstood role in society. You can even sample some coca-based products, like tea or candies.",
        practicalInfo: {
        howToGetThere: "Located on Calle Linares 906, near the Witches' Market.",
        openingHours: "Daily, 10:00 AM - 7:00 PM.",
        cost: "15 BOB (about $2.20 USD).",
        website: "http://www.cocamuseum.com/"
      }
      },
        {
        name: "Urban Rush - Rappelling Down a Skyscraper",
        description: "For a different kind of urban thrill, consider rappelling face-first down the side of a 17-story building. Urban Rush offers a unique 'abseiling' experience where you can walk, run, or jump down the facade of the Hotel Presidente, all while dressed in a ridiculous costume of your choice (Spiderman is a popular one). It's an adrenaline-pumping activity right in the heart of the city.\n\nHighly trained guides ensure the experience is completely safe, using a top-rope belay system. As you descend, you get an unparalleled, if brief, view of the city streets and Plaza San Francisco below. It's a wild, fun, and utterly memorable way to see La Paz from a completely new angle.",
        practicalInfo: {
        howToGetThere: "The office is in the Hotel Presidente on Calle Potosi.",
        openingHours: "Tours run daily, typically from 1:00 PM - 6:00 PM. Booking is recommended.",
        cost: "Around 220 BOB (about $32 USD) for two descents.",
        website: "https://www.urbanrushbolivia.com/"
      }
      },
        {
        name: "Hike Chacaltaya Mountain",
        description: "For a relatively easy way to stand on top of a 5,421-meter (17,785 ft) peak, take a day trip to Chacaltaya. This mountain was once home to the world's highest ski resort, but its glacier has sadly melted completely due to climate change. Despite the lack of snow, the trip is still worthwhile for the incredible high-Andean scenery and the bragging rights of reaching such a high altitude.\n\nTour agencies drive you most of the way up to the old refuge. From there, it's a short, but breathless, 200-meter hike to the summit. The altitude is extreme, so it's crucial to be well-acclimatized before attempting this. The panoramic views of the Cordillera Real, including Huayna Potosí and Illimani, are simply spectacular.",
        practicalInfo: {
        howToGetThere: "Book a half-day tour from an agency in La Paz. Transport is included.",
        openingHours: "Tours usually depart in the morning, around 8:00 AM.",
        cost: "Tours cost around 80-100 BOB ($12-15 USD).",
        website: "Multiple tour operators in La Paz."
      }
      },
        {
        name: "Visit the Cementerio General",
        description: "A cemetery might seem like a strange tourist attraction, but La Paz's Cementerio General is a vibrant and fascinating place. Instead of traditional graves, most of the deceased are interred in towering walls of stacked crypts. Families decorate these small glass-fronted niches with flowers, photos, miniature figurines, and personal mementos, creating colorful and deeply personal memorials.\n\nThe cemetery is a city within a city, with wide avenues, impressive mausoleums of former presidents, and murals painted by famous local artists. It offers a unique insight into how Bolivians view death and remembrance. It's a place of art, history, and quiet reflection, far different from any cemetery you've likely seen before.",
        practicalInfo: {
        howToGetThere: "Located west of the city center. A short taxi ride or you can take the Red or Blue Teleférico line to the 'Cementerio' station.",
        openingHours: "Daily, 8:00 AM - 5:00 PM.",
        cost: "Small entrance fee of around 5 BOB ($0.70 USD).",
        website: "N/A"
      }
      },
        {
        name: "Museo Nacional de Etnografía y Folklore (MUSEF)",
        description: "Housed in a beautiful 18th-century palace, the National Museum of Ethnography and Folklore (MUSEF) is arguably the best museum in La Paz. Its well-curated exhibits provide a deep dive into Bolivia's rich and diverse cultural tapestry. The collections cover everything from intricate textiles and feather art to ceremonial masks and pottery from various indigenous groups across the country.\n\nThe museum explains the history and meaning behind the artifacts, offering context that enriches your understanding of Bolivian traditions. The 'Masks' exhibit, showcasing vibrant and sometimes terrifying masks used in traditional dances and festivals, is a particular highlight. It's an essential stop for anyone interested in the anthropology and art of the Andean region.",
        practicalInfo: {
        howToGetThere: "Located on Calle Ingavi 916, a short walk from Plaza Murillo.",
        openingHours: "Tuesday - Saturday: 9:00 AM - 12:30 PM & 3:00 PM - 7:00 PM; Sunday: 9:00 AM - 1:00 PM.",
        cost: "20 BOB (about $3 USD) for foreigners.",
        website: "http://www.musef.org.bo/"
      }
      }
      ]}
      logistics={{
        gettingAround: "La Paz's public transport is an adventure. The most scenic and efficient way to travel between the center and El Alto is the 'Mi Teleférico' cable car system. For short distances, official taxis with a company number on the roof are best; always agree on a fare before getting in. 'Micros' (large buses) and 'minibuses' (vans) are cheap and cover extensive routes but can be crowded and confusing for newcomers. Walking is great for exploring the central historic district, but be prepared for steep hills and take it easy due to the altitude.",
        whereToStay: "Most travelers stay in the historic center (Casco Viejo), near Calle Sagarnaga and the Witches' Market. This area is bustling with hostels (like Wild Rover for party-goers), budget-friendly hotels, tour agencies, and restaurants. For a quieter, more upscale experience, the Zona Sur (Southern Zone) is the best choice. This lower-altitude, modern neighborhood has luxury hotels like Atix Hotel, fine dining, and boutique shops. It's a long taxi or Teleférico ride from the main sights but offers more comfort.",
        bestTimeToVisit: "The best time to visit La Paz is during the dry season, which runs from April to October. During these months, you can expect clear blue skies, sunny days, and cooler temperatures, which is ideal for sightseeing and outdoor activities like hiking and biking the Death Road. The wet season, from November to March, brings frequent afternoon rain showers, which can sometimes cause travel disruptions. However, the landscape is greener and there are fewer tourists.",
        suggestedItinerary: "A simple 3-day itinerary:\nDay 1: Acclimatize and explore the historic center. Start at Plaza Murillo, visit the Basílica de San Francisco, wander through the Witches' Market, and stroll down Calle Jaén, visiting its small museums.\nDay 2: Get a bird's-eye view. Ride the Mi Teleférico red line to the El Alto market (if Thursday/Sunday). In the afternoon, visit the Mirador Killi Killi for panoramic photos, then take a taxi to the surreal Valle de la Luna for sunset.\nDay 3: Adventure or Culture. Choose a full-day tour to bike the Death Road for an adrenaline rush. Alternatively, have a cultural day visiting the MUSEF and Coca museums, exploring the Cementerio General, and perhaps catching a Cholita Wrestling show in the evening."
      }}
      faqs={[{
          question: "Is La Paz expensive?",
          answer: "No, La Paz is one of the most affordable capital cities in South America. Accommodation is very reasonably priced, with dorm beds in hostels starting around $8-12 USD and private rooms in mid-range hotels available for $30-50 USD. A filling set lunch ('almuerzo') can be found for as little as $2-4 USD. Local transportation like the Teleférico costs less than $0.50 per ride. While adventure tours like the Death Road are a bigger expense, day-to-day costs are very low."
        },
        {
          question: "How many days do you need in La Paz?",
          answer: "It is recommended to spend at least 3 to 4 days in La Paz. This gives you one full day to acclimatize to the extreme altitude, which is crucial to avoid sickness. The following 2-3 days are enough to explore the main city sights like the Witches' Market, Mi Teleférico, and Valle de la Luna. If you plan to do a full-day trip like biking the Death Road or hiking Chacaltaya, add an extra day."
        },
        {
          question: "Is La Paz safe?",
          answer: "La Paz is generally safe for tourists, but like any large city, it requires caution. The main risks are petty crime like pickpocketing and bag snatching, especially in crowded areas like markets and bus terminals. Be aware of your surroundings and don't flash expensive items. Use official radio taxis at night instead of hailing them off the street. Some common scams involve fake police officers asking to see your passport and money. Be firm but polite, and offer to go to a real police station. The altitude itself is a health risk; take it easy on your first day, drink lots of water and coca tea, and avoid heavy meals and alcohol."
        },
        {
          question: "What is La Paz famous for?",
          answer: "La Paz is famous for several unique characteristics. Firstly, it is the highest administrative capital in the world. Secondly, it is known for its dramatic setting within a deep canyon surrounded by towering Andean peaks. Culturally, it's famous for the Mercado de las Brujas (Witches' Market) and the spectacle of Cholita Wrestling. Its most innovative feature is Mi Teleférico, the extensive urban cable car system that serves as both public transport and a major tourist attraction."
        }
      ]}
    />
  );
};