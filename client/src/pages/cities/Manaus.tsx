import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Manaus: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Manaus, Brazil (2025 Guide)"}
      description={"Welcome to Manaus, the sprawling metropolis carved out of the heart of the Amazon rainforest. Known as the 'Gateway to the Amazon,' this Brazilian city is a captivating paradox, where the Belle Époque grandeur of its rubber boom past collides with the untamed wilderness at its doorstep. From the gilded dome of its world-famous opera house to the mesmerizing confluence of two mighty rivers, Manaus offers an adventure unlike any other. Exploring the vibrant markets, encountering unique wildlife, and delving into the immense green expanse are just a few of the experiences that await. Whether you're a culture enthusiast, a nature lover, or an intrepid explorer, you'll find an incredible array of the best things to do in Manaus. This guide will navigate you through its most unforgettable sights and experiences, ensuring a journey deep into the soul of the Amazon."}
      highlights={["Teatro Amazonas (Amazon Theatre)",
        "Meeting of Waters (Encontro das Águas)",
        "Anavilhanas National Park",
        "Mercado Adolpho Lisboa",
        "Ponta Negra Beach"]}
      galleryImages={[
        { url: "", alt: "Manaus landmark 1", caption: "Manaus landmark 1 - placeholder" },
        { url: "", alt: "Manaus landmark 2", caption: "Manaus landmark 2 - placeholder" },
        { url: "", alt: "Manaus landmark 3", caption: "Manaus landmark 3 - placeholder" },
        { url: "", alt: "Manaus landmark 4", caption: "Manaus landmark 4 - placeholder" },
        { url: "", alt: "Manaus landmark 5", caption: "Manaus landmark 5 - placeholder" },
        { url: "", alt: "Manaus landmark 6", caption: "Manaus landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Teatro Amazonas (Amazon Theatre)",
        description: "An opulent symbol of the city's golden age during the late 19th-century rubber boom, the Teatro Amazonas is an architectural masterpiece set improbably in the middle of the jungle. Its magnificent Renaissance-style dome, laid with 36,000 tiles in the colors of the Brazilian flag, is a beacon in the city skyline. The interior is just as lavish, featuring Italian marble, French furniture, and Venetian Murano glass chandeliers.\n\nTaking a guided tour reveals the fascinating history behind its construction and the immense wealth that poured into Manaus. If possible, attending a performance by the Amazonas Philharmonic Orchestra is an unforgettable experience, allowing you to appreciate the theater's superb acoustics and soak in its historic grandeur.",
        practicalInfo: {
        howToGetThere: "Located at Largo de São Sebastião in the historic city center (Centro). Easily accessible on foot from most central hotels or by taxi/ride-sharing.",
        openingHours: "Guided tours typically run Tuesday - Saturday, 9:00 AM - 5:00 PM; Sunday, 9:00 AM - 2:00 PM. Closed Mondays. Check schedule for performances.",
        cost: "Tour: Approx. R$20. Performance tickets vary.",
        website: "www.cultura.am.gov.br/teatro-amazonas/"
      }
      },
        {
        name: "Meeting of Waters (Encontro das Águas)",
        description: "One of nature's most stunning spectacles, the Meeting of Waters is where the dark, acidic Rio Negro and the sandy, sediment-rich Rio Solimões meet to form the mighty Amazon River. For over six kilometers, the two rivers flow side-by-side without mixing due to differences in temperature, speed, and density, creating a distinct two-toned line in the water.\n\nThis phenomenon is best experienced on a boat tour, which is a staple of any Manaus itinerary. Most tours depart from the Port of Manaus and often include other activities like visiting a floating village, seeing water lilies (Vitória Régia), and searching for wildlife along the riverbanks. It's a powerful visual representation of the forces that shape the Amazon.",
        practicalInfo: {
        howToGetThere: "Accessible via boat tours departing from the Port of Manaus (Porto de Manaus). Numerous tour operators offer full-day or half-day trips.",
        openingHours: "Tours typically run daily, starting in the morning around 9:00 AM.",
        cost: "Half-day tours start around R$150-R$250 per person.",
        website: "N/A (Book through local tour agencies or at the port)."
      }
      },
        {
        name: "Anavilhanas National Park",
        description: "A UNESCO World Heritage site, Anavilhanas is a breathtaking freshwater river archipelago on the Rio Negro, comprising around 400 islands. It is one of the largest of its kind in the world, forming a labyrinth of channels, lakes, and flooded forests (igapós). The park is a sanctuary for an incredible array of biodiversity, including pink river dolphins, manatees, giant otters, jaguars, and hundreds of bird species.\n\nVisiting Anavilhanas is an immersive Amazon experience. During the dry season (July-December), white sand beaches emerge, perfect for relaxing and hiking. In the rainy season (January-June), the high water levels allow for canoe trips deep into the flooded forest. Most visits are arranged through multi-day stays at jungle lodges located within or near the park.",
        practicalInfo: {
        howToGetThere: "Located on the Rio Negro, about 100km upstream from Manaus. Accessible via boat or by road to the town of Novo Airão, followed by a boat.",
        openingHours: "24/7 for those staying at lodges. Day trips are possible but long.",
        cost: "Varies greatly depending on the lodge or tour operator. Expect to pay for a package deal.",
        website: "www.icmbio.gov.br/parnaanavilhanas/"
      }
      },
        {
        name: "Mercado Adolpho Lisboa",
        description: "Modeled after the famous Les Halles market in Paris, the Mercado Adolpho Lisboa is Manaus's main public market. Its intricate cast-iron structure was designed by Gustave Eiffel's firm and shipped from Europe, another testament to the rubber boom's extravagance. The market is a sensory explosion, bustling with activity, colors, and smells.\n\nInside, you'll find a vast array of local products. One pavilion is dedicated to fresh fish, including giant pirarucu and tambaqui. Another section bursts with exotic Amazonian fruits, vegetables, medicinal herbs, and spices. It's also a great place to buy authentic handicrafts and souvenirs. Stop at one of the small eateries to try a classic Amazonian dish like Tacacá soup or a fresh fruit juice.",
        practicalInfo: {
        howToGetThere: "Located on the banks of the Rio Negro at Rua dos Barés, 46, Centro. A short walk from the main port.",
        openingHours: "Monday - Saturday, 6:00 AM - 6:00 PM; Sunday, 6:00 AM - 12:00 PM.",
        cost: "Free to enter.",
        website: "N/A"
      }
      },
        {
        name: "Ponta Negra Beach",
        description: "Praia da Ponta Negra is the city's most popular urban river beach, located in an upscale neighborhood about 13 km from the city center. It's not an ocean beach, but a wide stretch of sand on the banks of the dark Rio Negro. The beach is a vibrant hub of activity, especially on weekends, where locals come to swim, sunbathe, play volleyball, and relax.\n\nThe recently revitalized waterfront promenade (calçadão) is lined with kiosks (barracas) selling cold drinks, coconuts, and classic Amazonian snacks. In the evening, the area comes alive with people jogging, cycling, and enjoying the sunset over the river. Note that the beach's size varies dramatically with the season; it's vast in the dry season and almost disappears during the high water months.",
        practicalInfo: {
        howToGetThere: "Located in the Ponta Negra neighborhood. Accessible by city bus, taxi, or ride-sharing from the center.",
        openingHours: "Open 24/7, but best enjoyed during daylight hours. The promenade is active in the evening.",
        cost: "Free to access.",
        website: "N/A"
      }
      },
        {
        name: "MUSA - Museu da Amazônia (Amazon Museum)",
        description: "The MUSA is not a traditional museum but a 100-hectare living laboratory within the Adolpho Ducke Forest Reserve. It's a fantastic place to experience the Amazon's flora and fauna without venturing too far from the city. Well-maintained forest trails lead you through primary rainforest, past exhibits on indigenous cultures, a serpentarium, an orchid house, and a pond with giant water lilies.\n\nThe undeniable highlight is the 42-meter-high observation tower. Climbing its 242 steps rewards you with a breathtaking panoramic view above the forest canopy, offering a perspective usually reserved for birds. It's an excellent spot for birdwatching and photography.",
        practicalInfo: {
        howToGetThere: "Located on Av. Margarita, Cidade de Deus, about a 30-40 minute drive from the center. Best reached by taxi or ride-sharing.",
        openingHours: "Daily (except Wednesdays), 8:30 AM - 5:00 PM (last entry at 4:00 PM).",
        cost: "Approx. R$40. Additional fee for guided tours and tower access.",
        website: "museudaamazonia.org.br"
      }
      },
        {
        name: "Palácio Rio Negro",
        description: "Originally the lavish home of a German rubber baron, this palace later became the seat of the Amazonas state government. Today, the Palácio Rio Negro stands as a beautiful cultural center, offering a glimpse into the opulent lifestyle of the rubber boom elite. The architecture is eclectic and grand, and the restored rooms are filled with period furniture, art, and historical artifacts.\n\nVisitors can freely wander through the main building's stately rooms, including the former governor's office and reception halls. The grounds also house a small art gallery and often host temporary exhibitions and cultural events. It's a quick but worthwhile stop that adds another layer to understanding Manaus's unique history.",
        practicalInfo: {
        howToGetThere: "Located at Av. Sete de Setembro, Centro. A short walk from the Teatro Amazonas.",
        openingHours: "Tuesday - Saturday, 9:00 AM - 5:00 PM.",
        cost: "Free to enter.",
        website: "www.cultura.am.gov.br/palacio-rio-negro/"
      }
      },
        {
        name: "Jaú National Park",
        description: "For the truly adventurous, Jaú National Park offers an unparalleled deep-Amazon experience. As a UNESCO World Heritage site, it's one of the largest protected tropical rainforest areas in the world. The park is a vast expanse of pristine, untouched nature, characterized by blackwater rivers, dense jungle, and an extremely high level of biodiversity, including endangered species like the jaguar, giant otter, and Amazonian manatee.\n\nA trip to Jaú is a serious expedition, not a day trip. It requires a licensed tour operator and a multi-day boat journey from Novo Airão. Visitors sleep on board expedition boats, explore remote tributaries by canoe, hike through virgin forest, and visit sparse riverside communities (caboclos). This is immersion at its most profound.",
        practicalInfo: {
        howToGetThere: "Access is via the Rio Negro and Rio Jaú. Multi-day boat expeditions must be arranged with licensed operators, usually departing from Novo Airão, a 3-hour drive from Manaus.",
        openingHours: "Requires a permit and a certified guide. Not for independent travel.",
        cost: "Expeditions are expensive, typically starting from R$4000-R$5000 for a 4-5 day trip.",
        website: "www.icmbio.gov.br/parna-jau/"
      }
      },
        {
        name: "Swim with Pink River Dolphins",
        description: "The 'boto', or Amazon pink river dolphin, is a mythical and fascinating creature unique to the freshwater systems of South America. Many river tours on the Rio Negro offer the chance for a controlled interaction with these gentle animals. These encounters take place at floating platforms where local families have habituated the dolphins to their presence through feeding.\n\nWhile standing on a submerged platform, you can feel the curious dolphins swim around your legs. It's a unique opportunity to see these incredible animals up close. It's important to choose responsible tour operators who prioritize the animals' welfare and follow strict guidelines to ensure the interaction is safe for both humans and dolphins.",
        practicalInfo: {
        howToGetThere: "Included as a stop on most full-day river tours departing from Manaus or as an activity offered by jungle lodges near Novo Airão.",
        openingHours: "Part of tour schedules, usually in the morning or afternoon.",
        cost: "Included in the price of a full-day river tour (approx. R$200-R$300).",
        website: "N/A (Book through local tour agencies)."
      }
      },
        {
        name: "CIGS Zoo (Bosque da Ciência)",
        description: "Operated by the Brazilian Army's Jungle Warfare Training Center (CIGS), this is more of a conservation center than a traditional zoo. It houses Amazonian animals that have been rescued from trafficking or were injured and cannot be returned to the wild. This provides a rare chance to see iconic and elusive creatures like jaguars, pumas, monkeys, tapirs, and giant anacondas in a safe environment.\n\nThe enclosures are designed to mimic the animals' natural habitats, and the facility plays a crucial role in environmental education. The zoo is relatively small but well-maintained, making it an easy and educational half-day trip, especially for families.",
        practicalInfo: {
        howToGetThere: "Located in the São Jorge neighborhood, on the same road as Ponta Negra Beach. Best reached by taxi or ride-sharing.",
        openingHours: "Tuesday - Sunday, 9:00 AM - 4:30 PM.",
        cost: "Approx. R$10.",
        website: "www.cigs.eb.mil.br/zoo-do-cigs"
      }
      },
        {
        name: "Indigenous Community Visit",
        description: "Gain insight into the human element of the rainforest by visiting an indigenous community. Many river tours from Manaus include a stop at a village, often of the Dessana or Tuyuka people, who have opened their doors to visitors to share their culture and generate income. During a visit, you can witness traditional dances, see demonstrations of crafts and hunting tools, and learn about their customs and relationship with the forest.\n\nWhile some might see these as touristy, they provide a valuable opportunity for cultural exchange and support the preservation of ancestral traditions. You can also purchase beautiful, authentic handicrafts like woven baskets and seed jewelry directly from the artisans. It's a chance to understand that the Amazon is not just wilderness, but a home.",
        practicalInfo: {
        howToGetThere: "Included as a stop on many full-day river tours from Manaus.",
        openingHours: "Part of tour schedules.",
        cost: "Included in the price of a river tour.",
        website: "N/A (Book through local tour agencies)."
      }
      },
        {
        name: "Palacete Provincial",
        description: "Housed in a grand, beautifully restored historic building that once served as the police headquarters, the Palacete Provincial is a cultural complex containing five different museums under one roof. It's a one-stop-shop for art and history lovers. The museums include the Pinacoteca do Estado (State Art Gallery), the Museu de Arqueologia (Archaeology Museum), and the Museu da Imagem e do Som (Image and Sound Museum).\n\nYou can easily spend a few hours exploring the diverse collections, from pre-Columbian pottery and archaeological finds to paintings by Amazonian artists and exhibits on the history of local cinema and television. The building itself, with its lovely central courtyard, is a highlight.",
        practicalInfo: {
        howToGetThere: "Located at Praça Heliodoro Balbi, Centro. A short walk from the Teatro Amazonas.",
        openingHours: "Tuesday - Saturday, 9:00 AM - 5:00 PM.",
        cost: "Free to enter.",
        website: "www.cultura.am.gov.br/palacete-provincial/"
      }
      },
        {
        name: "Paricatuba Waterfall (Cachoeira de Paricatuba)",
        description: "Located on the right bank of the Rio Negro, across the river from Manaus, the Paricatuba Waterfall is a beautiful seasonal cascade. The water tumbles over a series of large rock formations, forming natural swimming pools. The surrounding area also features the ruins of an old, abandoned mansion, adding a touch of mystery to the visit.\n\nIt's important to note that the waterfall is highly dependent on the season. During the rainy season (January-June), it's a powerful and impressive sight. However, in the dry season (August-November), it can reduce to a mere trickle or dry up completely. The trip is made by boat and offers lovely views of the Rio Negro bridge along the way.",
        practicalInfo: {
        howToGetThere: "Accessible by boat from the Marina do Davi, near Ponta Negra. The boat ride takes about 30 minutes.",
        openingHours: "Best visited during the day. Visit during the rainy season (Jan-Jun) for best flow.",
        cost: "Boat transport costs around R$15-R$20 per person for a return trip.",
        website: "N/A"
      }
      },
        {
        name: "Stay at an Amazon Jungle Lodge",
        description: "For a true immersion into the Amazon, nothing beats staying at a jungle lodge. These accommodations range from rustic and adventurous to comfortable and luxurious, but all offer the chance to sleep surrounded by the sounds of the rainforest. Lodges are typically located several hours from Manaus by boat and car, ensuring a genuine sense of isolation and connection with nature.\n\nStays are usually all-inclusive, with meals and a package of guided activities like jungle trekking, piranha fishing, night-time caiman spotting, canoeing in flooded forests (igapós), and visits to local communities. It is the most comprehensive way to experience the Amazon's ecosystems and wildlife firsthand, guided by experts who know the forest intimately.",
        practicalInfo: {
        howToGetThere: "Lodge packages include transfers from Manaus by van and boat.",
        openingHours: "Year-round.",
        cost: "Varies widely. Expect to pay from R$500 per person per night for a basic lodge to over R$1500 for a luxury one.",
        website: "Examples include Juma Amazon Lodge, Anavilhanas Jungle Lodge, Uakari Lodge."
      }
      },
        {
        name: "Presidente Figueiredo Waterfalls",
        description: "Known as the 'Terra das Cachoeiras' (Land of Waterfalls), the town of Presidente Figueiredo is a fantastic day or weekend trip from Manaus. Located about two hours north by car, this area is famous for its dozens of stunning waterfalls, caves, and jungle trails, offering a different kind of nature experience from the river-focused activities around Manaus.\n\nPopular spots include the powerful Cachoeira do Santuário, the picturesque Cachoeira de Iracema, and the Gruta do Refúgio do Maroaga cave system. You can swim in refreshing pools, hike through lush forest, and explore fascinating geological formations. It's a favorite getaway for Manaus locals looking to escape the city heat.",
        practicalInfo: {
        howToGetThere: "Located 107 km north of Manaus via the BR-174 highway. Accessible by car, bus, or organized day tour.",
        openingHours: "Most sites are open daily, typically from 8:00 AM to 5:00 PM.",
        cost: "Most waterfalls and parks charge an entrance fee of R$10-R$20.",
        website: "N/A (Information available from tour operators or local tourism offices)."
      }
      }
      ]}
      logistics={{
        gettingAround: "Within the historic center, many attractions are walkable. For longer distances, ride-sharing apps like Uber and 99 are widely available and affordable. City buses are cheap but can be confusing for tourists. Taxis are also an option. For exploring the rivers and jungle, booking organized boat tours or packages with jungle lodges is essential, as these areas are not accessible independently.",
        whereToStay: "Centro Histórico (Historic Center): Best for culture vultures, with easy walking access to the Teatro Amazonas, palaces, and markets. Adrianópolis: An upscale, modern neighborhood with excellent restaurants, shopping malls, and high-end hotels. Ponta Negra: A resort-like area by the river beach, great for those who want a mix of city amenities and a more relaxed, scenic environment. Jungle Lodges: For the ultimate immersive experience, stay at a lodge outside the city for 2-4 nights.",
        bestTimeToVisit: "Manaus has two distinct seasons. The rainy season (January to June) means higher water levels, making it ideal for boat and canoe trips through the flooded forests (igapós). The dry season (July to December) is better for jungle trekking as trails are accessible, and white sand river beaches emerge. Temperatures are hot and humid year-round, averaging 27°C (81°F). The shoulder months (June, July, December) can offer a good balance of both.",
        suggestedItinerary: "Day 1: Explore the historic heart of Manaus. Start at the Mercado Adolpho Lisboa, walk to the Palacete Provincial and Palácio Rio Negro, and finish with a guided tour or evening performance at the magnificent Teatro Amazonas. Day 2: Take a full-day river tour to see the Meeting of Waters, swim with pink river dolphins, and visit an indigenous community. Day 3: Immerse yourself in the forest. Visit the MUSA observation tower for a canopy view and explore its trails, or take a day trip to the waterfalls of Presidente Figueiredo."
      }}
      faqs={[{
          question: "Is Manaus expensive?",
          answer: "Manaus can be considered a mid-range destination. Flights to the city can be one of the biggest expenses due to its remote location. However, once there, costs are reasonable. Local food, transportation like buses and ride-sharing, and entrance fees to city attractions are affordable. The most significant costs are associated with multi-day jungle lodge stays and extensive private tours, which can range from budget-friendly to very luxurious."
        },
        {
          question: "How many days do you need in Manaus?",
          answer: "A minimum of 3 to 4 days is recommended. This allows for one full day to explore the historic city sights like the Teatro Amazonas and market, and at least two days for a river tour (Meeting of Waters) and a basic jungle experience (like a day tour or a single overnight stay at a nearby lodge). To have a more immersive Amazon experience, including a stay at a deeper jungle lodge, plan for 5 to 7 days."
        },
        {
          question: "Is Manaus safe?",
          answer: "Like many large Brazilian cities, Manaus has issues with crime, and visitors should exercise caution. The main tourist areas, such as the Centro Histórico around the opera house and the Ponta Negra neighborhood, are generally safe during the day but require vigilance. It's advisable to avoid walking alone at night, especially in quieter areas. Do not display expensive items like jewelry or cameras openly. Use ride-sharing apps or official taxis for transport, especially after dark. Organized tours and jungle lodges have good safety records."
        },
        {
          question: "What is Manaus famous for?",
          answer: "Manaus is most famous for being the primary gateway to the vast Amazon Rainforest. It is renowned for the Teatro Amazonas, an opulent opera house built during the 19th-century rubber boom. Another key highlight is the Encontro das Águas (Meeting of Waters), the stunning natural phenomenon where the dark Rio Negro and the sandy Rio Solimões flow side-by-side without mixing. The region's unique biodiversity, especially the Amazon pink river dolphin, also draws visitors from around the world."
        }
      ]}
    />
  );
};