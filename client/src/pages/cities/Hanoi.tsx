import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Hanoi: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Hanoi, Vietnam (2025 Guide)"}
      description={"A city of contrasts, Hanoi is where ancient temples whisper tales next to French colonial villas, and serene lakes offer a respite from the symphony of scooter horns. Vietnam's capital is a sensory overload in the best way possible, a place where history, culture, and cuisine collide on every street corner. The heart of the city, the Old Quarter, is a labyrinth of activity, where artisans ply their trades and vendors serve up world-famous street food. Beyond the chaos, you'll find a city with a deep soul, reflected in its elegant architecture, poignant museums, and the tranquil daily rituals of its residents. Whether you're sipping egg coffee, cruising around West Lake, or exploring centuries-old pagodas, this guide will show you the very best things to do in Hanoi for an unforgettable adventure."}
      highlights={["Hanoi Old Quarter",
        "Hoan Kiem Lake & Ngoc Son Temple",
        "Temple of Literature (Văn Miếu - Quốc Tử Giám)",
        "Ho Chi Minh Mausoleum Complex",
        "Vietnam Museum of Ethnology"]}
      galleryImages={[
        { url: "", alt: "Hanoi landmark 1", caption: "Hanoi landmark 1 - placeholder" },
        { url: "", alt: "Hanoi landmark 2", caption: "Hanoi landmark 2 - placeholder" },
        { url: "", alt: "Hanoi landmark 3", caption: "Hanoi landmark 3 - placeholder" },
        { url: "", alt: "Hanoi landmark 4", caption: "Hanoi landmark 4 - placeholder" },
        { url: "", alt: "Hanoi landmark 5", caption: "Hanoi landmark 5 - placeholder" },
        { url: "", alt: "Hanoi landmark 6", caption: "Hanoi landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Hanoi Old Quarter",
        description: "The historical heart and soul of Hanoi, the Old Quarter is a fascinating maze of 36 streets, each historically dedicated to a specific craft or trade. This bustling area is a sensory explosion, where the scent of pho broth mingles with the sound of whizzing motorbikes and the sight of colonial-era architecture. Exploring these streets on foot is an essential Hanoi experience.\n\nYou can spend hours wandering through Hang Bac (Silver Street), Hang Gai (Silk Street), and Hang Ma (Paper Votive Street), discovering hidden temples, vibrant markets, and some of the best street food stalls in the world. It’s chaotic, vibrant, and utterly captivating, offering a raw glimpse into the city's commercial and cultural life.",
        practicalInfo: {
        howToGetThere: "Located north of Hoan Kiem Lake. It's best explored on foot. Most central hotels are within walking distance.",
        openingHours: "24/7, though shops and stalls generally operate from 8:00 AM to 10:00 PM.",
        cost: "Free to explore.",
        website: "n/a"
      }
      },
        {
        name: "Hoan Kiem Lake & Ngoc Son Temple",
        description: "Hoan Kiem Lake, or 'Lake of the Restored Sword,' is the geographical and spiritual centerpiece of Hanoi. According to legend, Emperor Le Loi returned a magical sword to a Golden Turtle God in this very lake. It's a beloved public space where locals practice tai chi at dawn, couples stroll at sunset, and families gather on weekends when the surrounding roads become pedestrian-only.\n\nIn the middle of the lake, on a small island, sits Ngoc Son Temple (Temple of the Jade Mountain). Accessible via the iconic scarlet-painted Huc Bridge (Bridge of the Rising Sun), the temple is a beautiful example of traditional Vietnamese architecture and a peaceful sanctuary dedicated to historical figures and the legendary turtle.",
        practicalInfo: {
        howToGetThere: "Centrally located, just south of the Old Quarter. Easily accessible on foot from most parts of central Hanoi.",
        openingHours: "Lake is always open. Temple: 8:00 AM - 6:00 PM daily.",
        cost: "Lake is free. Temple entrance: ~30,000 VND.",
        website: "hanoi.vietnam.travel"
      }
      },
        {
        name: "Temple of Literature (Văn Miếu - Quốc Tử Giám)",
        description: "Founded in 1070, the Temple of Literature is a stunning complex dedicated to Confucius and is home to Vietnam's first national university. This well-preserved site is a rare example of traditional Vietnamese architecture and a serene escape from the city's bustle. Visitors can wander through five distinct courtyards, each with its own significance, from the grand entrance gate to the Well of Heavenly Clarity.\n\nThe most significant features are the 82 stone stelae, mounted on the backs of stone turtles, which bear the names of graduates from royal exams held between the 15th and 18th centuries. It's a place of deep cultural and historical importance, often visited by students praying for good luck in their exams.",
        practicalInfo: {
        howToGetThere: "Located at 58 Quoc Tu Giam Street, Dong Da District. A short taxi or Grab ride from the Old Quarter.",
        openingHours: "8:00 AM - 5:00 PM daily.",
        cost: "Approx. 30,000 VND.",
        website: "vanmieu.gov.vn"
      }
      },
        {
        name: "Ho Chi Minh Mausoleum Complex",
        description: "This imposing complex is one of Vietnam's most important pilgrimage sites. It includes the final resting place of President Ho Chi Minh, a vast granite mausoleum where his embalmed body lies in state. Visiting the mausoleum is a solemn experience with a strict dress code (no shorts, tank tops) and rules of conduct (no talking, hands out of pockets).\n\nBeyond the mausoleum, the complex contains Ho Chi Minh's modest Stilt House, where he lived intermittently from 1958 until his death, the grand Presidential Palace, and the One Pillar Pagoda, a unique 11th-century wooden pagoda built on a single stone pillar. The entire area offers a deep dive into the life of Vietnam's revolutionary leader and modern history.",
        practicalInfo: {
        howToGetThere: "Located in Ba Dinh Square. A taxi or Grab is the easiest way to get here.",
        openingHours: "Mausoleum: Morning hours only (approx. 7:30 AM - 10:30 AM), closed Mon & Fri, and for annual maintenance (usually Oct/Nov). Other complex sites have longer hours.",
        cost: "Mausoleum is free. A fee of ~40,000 VND applies to other sites like the Stilt House.",
        website: "bqllang.gov.vn"
      }
      },
        {
        name: "Vietnam Museum of Ethnology",
        description: "For a fascinating insight into Vietnam's diverse cultural tapestry, the Museum of Ethnology is a must-visit. The museum showcases the traditions, lifestyles, and cultural artifacts of the 54 officially recognized ethnic groups in Vietnam. The indoor exhibition features beautifully presented displays of clothing, tools, and religious items.\n\nThe real highlight is the outdoor exhibition area, where you can explore life-sized replicas of traditional village houses from various ethnic groups, including a towering Bahnar communal house and an Ede longhouse. It’s an interactive and educational experience that provides a deeper understanding of the country's rich heritage beyond the Kinh majority.",
        practicalInfo: {
        howToGetThere: "Located in the Cau Giay district, about 8km from the Old Quarter. A taxi or bus is required.",
        openingHours: "8:30 AM - 5:30 PM, closed on Mondays.",
        cost: "Approx. 40,000 VND.",
        website: "vme.org.vn"
      }
      },
        {
        name: "Hoa Lo Prison Relic",
        description: "Dubbed the 'Hanoi Hilton' by American POWs during the Vietnam War, Hoa Lo Prison has a dark and complex history. Originally built by the French in the late 19th century to incarcerate Vietnamese political prisoners, it was a symbol of colonial oppression. The exhibits detail the horrific conditions and torture endured by Vietnamese revolutionaries.\n\nA separate section is dedicated to its use during the Vietnam War, presenting a contrasting perspective on the treatment of American pilots, including former U.S. Senator John McCain. While much of the original prison was demolished, the remaining gatehouse and galleries offer a poignant and sobering look into Vietnam's turbulent past.",
        practicalInfo: {
        howToGetThere: "1 Hoa Lo Street, Hoan Kiem District. A short walk from Hoan Kiem Lake.",
        openingHours: "8:00 AM - 5:00 PM daily.",
        cost: "Approx. 30,000 VND.",
        website: "hoalo.vn"
      }
      },
        {
        name: "Thang Long Water Puppet Theatre",
        description: "Water puppetry is a unique Vietnamese art form that originated in the rice paddies of the Red River Delta over a thousand years ago. The Thang Long Water Puppet Theatre, located on the edge of Hoan Kiem Lake, offers an enchanting introduction to this tradition. Puppeteers, hidden behind a screen, manipulate wooden puppets over a pool of water, bringing to life traditional folk tales, legends, and scenes of rural life.\n\nThe performance is accompanied by a live orchestra of traditional Vietnamese musicians and singers, making it a captivating cultural experience for all ages. It’s a delightful, colorful, and often humorous show that provides a fun glimpse into Vietnamese folklore.",
        practicalInfo: {
        howToGetThere: "57B Dinh Tien Hoang Street, right next to Hoan Kiem Lake.",
        openingHours: "Shows run several times a day, typically from 3:00 PM to 8:00 PM. Booking in advance is recommended.",
        cost: "From 100,000 VND to 200,000 VND depending on seating.",
        website: "thanglongwaterpuppet.vn"
      }
      },
        {
        name: "Saint Joseph's Cathedral",
        description: "A striking piece of neo-Gothic architecture in the heart of Hanoi, Saint Joseph's Cathedral stands in stark contrast to the surrounding pagodas and tube houses. Completed in 1886, it was one of the first structures built by the French colonial government and resembles a smaller version of Notre Dame de Paris. Its weathered facade, twin bell towers, and stunning stained-glass windows make it a major landmark.\n\nThe cathedral serves the local Catholic community, and the area around it has become a trendy hub with cool cafes, boutiques, and street food vendors. It's a great spot to relax with a 'tra chanh' (lemon tea) and people-watch.",
        practicalInfo: {
        howToGetThere: "40 Nha Chung Street, Hoan Kiem District. A short walk west of Hoan Kiem Lake.",
        openingHours: "Visitors can enter between services. Main visiting hours are 5:00 AM - 11:30 AM and 2:00 PM - 8:00 PM.",
        cost: "Free.",
        website: "n/a"
      }
      },
        {
        name: "Vietnamese Women's Museum",
        description: "This excellent and modern museum offers a tribute to the pivotal role of women in Vietnamese history and society. Through well-curated exhibits, it explores themes of women in family, history, and fashion. You'll learn about marriage rituals, childbirth customs, and the crucial contributions of women during Vietnam's wars of resistance.\nThe fashion section showcases a vibrant collection of costumes from Vietnam's 54 ethnic groups, highlighting the intricate details of their craftsmanship. The museum is insightful, often moving, and provides a powerful narrative that is frequently overlooked in standard historical accounts.",
        practicalInfo: {
        howToGetThere: "36 Ly Thuong Kiet Street, Hoan Kiem District. South of Hoan Kiem Lake.",
        openingHours: "8:00 AM - 5:00 PM daily.",
        cost: "Approx. 40,000 VND.",
        website: "baotangphunu.org.vn"
      }
      },
        {
        name: "Long Bien Bridge",
        description: "A living relic of Hanoi's history, the Long Bien Bridge was designed by Gustave Eiffel's company and completed in 1902. Spanning the Red River, this cantilever bridge was a marvel of engineering for its time. It played a crucial strategic role during the Vietnam War, suffering repeated bombing raids yet always being repaired by the resilient Vietnamese.\n\nToday, the bridge carries trains, motorbikes, and pedestrians, while cars use newer bridges. Walking across it offers fantastic views of the river, banana plantations, and the city skyline. It's a gritty, atmospheric experience that connects you directly to Hanoi's industrial past and enduring spirit.",
        practicalInfo: {
        howToGetThere: "Connects Hoan Kiem and Long Bien districts. The pedestrian/motorbike entrance is on Tran Nhat Duat street.",
        openingHours: "24/7.",
        cost: "Free.",
        website: "n/a"
      }
      },
        {
        name: "West Lake (Hồ Tây) & Tran Quoc Pagoda",
        description: "West Lake is Hanoi's largest freshwater lake, a massive body of water that offers a tranquil escape from the urban core. The 17km path around the lake is popular for jogging, cycling, and leisurely strolls. The area is known for its upscale residences, excellent restaurants, and trendy cafes with beautiful sunset views.\n\nOn a small peninsula on the eastern side of the lake sits Tran Quoc Pagoda, the oldest Buddhist temple in Hanoi, with a history stretching back over 1,500 years. Its main stupa stands 15 meters tall, and the serene grounds are a beautiful place for quiet reflection, especially as the sun sets over the water.",
        practicalInfo: {
        howToGetThere: "Located northwest of the Old Quarter. Best reached by taxi or Grab. You can also rent a bicycle to circle the lake.",
        openingHours: "Lake is always accessible. Pagoda: 7:30 AM - 11:30 AM & 1:30 PM - 5:30 PM.",
        cost: "Free.",
        website: "n/a"
      }
      },
        {
        name: "Dong Xuan Market",
        description: "Dong Xuan Market is Hanoi's largest indoor market, housed in a four-story Soviet-style building. This is a wholesale market at its core, offering a dizzying array of goods from cheap clothing and electronics to fabrics and household items. The ground floor is the most interesting for casual visitors, with a bustling wet market section at the back selling fresh produce, meat, and seafood.\n\nWhile not primarily a souvenir market, it’s a fantastic place to observe local commerce in action. The surrounding streets also host a lively night market on weekends, and the nearby alleyways are a paradise for adventurous foodies looking for authentic local dishes at rock-bottom prices.",
        practicalInfo: {
        howToGetThere: "Located at the northern edge of the Old Quarter.",
        openingHours: "6:00 AM - 6:00 PM daily.",
        cost: "Free to enter.",
        website: "n/a"
      }
      },
        {
        name: "Imperial Citadel of Thang Long",
        description: "A UNESCO World Heritage site, the Imperial Citadel of Thang Long was the political center of the country for 13 consecutive centuries and served as the capital of Vietnam for over 800 years. The complex showcases different historical periods, though much of the original citadel was destroyed by the French.\n\nKey sights include the imposing Doan Mon (Main Gate), the foundations of ancient palaces, and the North Gate, which still bears cannonball marks from the French assault in 1882. The most fascinating part is the D67 Tunnel and House, a 1960s command bunker used by the Politburo and Central Military Commission during the Vietnam War. It's a site of immense historical significance.",
        practicalInfo: {
        howToGetThere: "19C Hoang Dieu Street, Ba Dinh District, near the Ho Chi Minh Mausoleum Complex.",
        openingHours: "8:00 AM - 5:00 PM, closed on Mondays.",
        cost: "Approx. 30,000 VND.",
        website: "hoangthanhthanglong.vn"
      }
      },
        {
        name: "Hanoi Opera House",
        description: "An exquisite example of French colonial architecture, the Hanoi Opera House is one of the city's most elegant buildings. Modeled after the Palais Garnier in Paris, it was completed in 1911 and became a center for high culture and French political events. Today, it hosts a range of performances, including classical music, ballet, and traditional Vietnamese folk shows.\n\nEven if you don't attend a performance, the building is worth admiring from the outside. Its grand facade, with its pillars, balconies, and glass-fronted domes, stands as a testament to a bygone era. The large square in front of the Opera House is a popular spot for locals to gather and take photos.",
        practicalInfo: {
        howToGetThere: "1 Trang Tien Street, located near the southern end of Hoan Kiem Lake.",
        openingHours: "Exterior can be viewed anytime. Performance schedules vary; check the official website.",
        cost: "Free to view from outside. Ticket prices for shows vary widely.",
        website: "hanoioperahouse.org.vn"
      }
      },
        {
        name: "Hanoi Train Street",
        description: "One of Hanoi's most famous and unusual sights, Train Street is a narrow residential alleyway with a railway track running right through its center. Twice a day, a train rumbles through, forcing residents to quickly clear their belongings and press themselves against the walls. The spectacle of daily life unfolding just inches from an active train line became a massive tourist draw.\n\nNote: Access to Train Street has been periodically restricted by authorities for safety reasons. While some cafes along the tracks may still be open, access can be unpredictable. It's best to check the current situation upon arrival in Hanoi. If accessible, it's a truly unique photographic opportunity and a glimpse into a remarkable way of life.",
        practicalInfo: {
        howToGetThere: "There are several sections; the most popular is along Le Duan and Kham Thien streets, south of Hanoi's main train station.",
        openingHours: "Train times are approximately 3:30 PM and 7:30 PM, but schedules can change. Access is currently restricted and may require being escorted by a cafe owner.",
        cost: "Free to view, but purchasing a drink from a cafe is expected.",
        website: "n/a"
      }
      }
      ]}
      logistics={{
        gettingAround: "Hanoi's Old Quarter is best explored on foot. For longer distances, the ride-hailing app Grab is the most popular, reliable, and affordable option for both cars and motorbikes. Taxis are also plentiful, but ensure the meter is used. Traditional cyclos (three-wheeled bicycle taxis) offer a slow-paced, scenic tour but be sure to agree on a price beforehand. Public buses are cheap but can be challenging for non-Vietnamese speakers.",
        whereToStay: "For first-time visitors, the Hoan Kiem District (especially the Old Quarter) is ideal for its vibrant atmosphere, walkability, and proximity to major sights. For a quieter, more historical vibe, the Ba Dinh District near the Mausoleum is a great choice. The Tay Ho District (West Lake) offers a more relaxed, upscale experience with lakeside cafes and fine dining. Hotel recommendations include The Oriental Jade Hotel (Luxury), Hanoi La Siesta Hotel & Spa (Mid-Range), and Nexy Hostel (Budget).",
        bestTimeToVisit: "The best times to visit Hanoi are during spring (February to April) and autumn (September to November). During these months, the weather is pleasant with mild temperatures and lower humidity. Summer (May to August) is hot and humid with heavy rainfall. Winter (December to January) is cool and dry, sometimes with a persistent drizzle, but still manageable for sightseeing.",
        suggestedItinerary: "Day 1: Explore the Old Quarter on foot, visit Hoan Kiem Lake and Ngoc Son Temple, and watch a Thang Long Water Puppet show in the evening. Day 2: Visit the Ho Chi Minh Mausoleum Complex, the Temple of Literature, and the Hoa Lo Prison Relic. Spend the afternoon at the Vietnamese Women's Museum. Day 3: Head to the Vietnam Museum of Ethnology in the morning, then relax by West Lake and visit Tran Quoc Pagoda for sunset. End with a street food tour."
      }}
      faqs={[{
          question: "Is Hanoi expensive?",
          answer: "Hanoi is a very budget-friendly destination. Street food is incredibly cheap, with a bowl of pho or a banh mi sandwich costing just $1-2 USD. A local beer (Bia Hoi) can be less than $0.50. Accommodation ranges from budget hostels ($5-10/night) to luxury hotels at a fraction of the price you'd pay in the West. Transportation via Grab is also very affordable. You can comfortably travel on a budget of $25-40 USD per day."
        },
        {
          question: "How many days do you need in Hanoi?",
          answer: "A minimum of three full days is recommended to cover the main attractions in Hanoi without feeling rushed. This allows you to explore the Old Quarter, visit key museums and historical sites, and enjoy the local food scene. If you plan to use Hanoi as a base for day trips or overnight excursions to places like Ha Long Bay or Ninh Binh, you should budget 5-7 days in total."
        },
        {
          question: "Is Hanoi safe?",
          answer: "Hanoi is generally a very safe city for tourists. The primary concern is traffic; crossing the street can be intimidating, so move slowly and predictably. Petty crime like pickpocketing or bag-snatching can occur in crowded areas, so keep your valuables secure. Scams, such as overcharging by taxis or street vendors, can happen, so it's wise to agree on prices beforehand or use reputable apps like Grab."
        },
        {
          question: "What is Hanoi famous for?",
          answer: "Hanoi is famous for its rich history, preserved Old Quarter with its 36 streets, and beautiful French colonial architecture. It's renowned for its vibrant and delicious street food culture, being the birthplace of dishes like pho and bun cha, and unique drinks like egg coffee. The city is also known for its many lakes, particularly the central Hoan Kiem Lake, and as the cultural and political capital of Vietnam."
        }
      ]}
    />
  );
};