import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Nairobi: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Nairobi, Kenya (2025 Guide)"}
      description={"Welcome to Nairobi, the vibrant heart of Kenya, affectionately known as the 'Green City in the Sun.' This is a city of compelling contrasts, where skyscrapers overlook vast grasslands and urban energy blends seamlessly with wild nature. Nairobi is the only capital city in the world with a national park on its doorstep, offering unparalleled wildlife encounters just minutes from the bustling center. Beyond the safaris, you'll discover a thriving cultural scene, rich history, and the warm hospitality of the Kenyan people. Whether you're feeding giraffes, exploring bustling markets, or delving into the nation's past, you'll find an incredible array of experiences. Planning your adventure is easy with our guide to the very best things to do in Nairobi, ensuring a trip filled with unforgettable moments in this dynamic East African hub."}
      imageUrl={""}
      highlights={["Nairobi National Park",
        "David Sheldrick Wildlife Trust",
        "Giraffe Centre",
        "Karen Blixen Museum",
        "Bomas of Kenya"]}
      galleryImages={[
        { url: "", alt: "Nairobi landmark 1", caption: "Nairobi landmark 1 - placeholder" },
        { url: "", alt: "Nairobi landmark 2", caption: "Nairobi landmark 2 - placeholder" },
        { url: "", alt: "Nairobi landmark 3", caption: "Nairobi landmark 3 - placeholder" },
        { url: "", alt: "Nairobi landmark 4", caption: "Nairobi landmark 4 - placeholder" },
        { url: "", alt: "Nairobi landmark 5", caption: "Nairobi landmark 5 - placeholder" },
        { url: "", alt: "Nairobi landmark 6", caption: "Nairobi landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Nairobi National Park",
        description: "A truly unique experience, Nairobi National Park is the world's only wildlife park situated within a capital city. Just a short drive from the central business district, this pristine grassland is home to a staggering array of wildlife, including four of the Big Five (lions, leopards, rhinos, and buffaloes). The park's iconic backdrop of city skyscrapers juxtaposed with grazing giraffes or a pride of lions is a photographer's dream.\n\nDriving through the park, you can spot black rhinos, which are a critically endangered species, along with zebras, wildebeests, cheetahs, and over 400 species of birds. The Ivory Burning Site Monument, where 12 tons of ivory were burnt in 1989 to protest poaching, is also a poignant stop within the park. A game drive here is an essential Nairobi activity, offering a full safari experience without leaving the city.",
        practicalInfo: {
        howToGetThere: "Located about 7km south of the city center. Accessible via taxi, Uber/Bolt, or by joining a guided safari tour.",
        openingHours: "6:00 AM - 7:00 PM daily.",
        cost: "Around $43 USD for adult non-residents, $22 USD for child non-residents.",
        website: "http://www.kws.go.ke/parks/nairobi-national-park"
      }
      },
        {
        name: "David Sheldrick Wildlife Trust",
        description: "For an incredibly heartwarming experience, visit the David Sheldrick Wildlife Trust, a world-renowned orphan elephant and rhino rescue and rehabilitation program. The nursery, located on the edge of Nairobi National Park, cares for baby elephants who have been orphaned due to poaching or other human-wildlife conflict. During the public viewing hour, you can watch the adorable calves being fed from giant milk bottles, playfully rolling in the mud, and interacting with their keepers.\n\nThe keepers provide an informative talk about each elephant's story, their conservation efforts, and the challenges they face. You can also 'adopt' an orphan elephant, which helps fund their care and eventual reintegration into the wild. It’s an inspiring and educational visit that directly supports a vital conservation cause.",
        practicalInfo: {
        howToGetThere: "Located inside the western end of Nairobi National Park. Best reached by taxi or a pre-booked tour.",
        openingHours: "Public viewing is strictly from 11:00 AM - 12:00 PM daily. Booking in advance is often required.",
        cost: "Around $15 USD per person (or a minimum donation of KES 1500).",
        website: "https://www.sheldrickwildlifetrust.org"
      }
      },
        {
        name: "Giraffe Centre",
        description: "Get up close and personal with the endangered Rothschild's giraffe at the Giraffe Centre. This conservation and education center allows visitors to feed these gentle giants from a raised wooden platform, putting you at eye level with their magnificent heads. It's a thrilling moment when a giraffe extends its long, purple tongue to take a food pellet right from your hand.\n\nThe center was established to protect the Rothschild's giraffe, and your entrance fee contributes to their breeding and conservation programs across Kenya. Staff are on hand to provide fascinating facts about the giraffes and their conservation status. Across the road, you can also take a self-guided nature walk through the Gogo River Bird Sanctuary.",
        practicalInfo: {
        howToGetThere: "Located in the Lang'ata/Karen suburb, often visited along with the Sheldrick Trust and Karen Blixen Museum. A taxi is the easiest way to get here.",
        openingHours: "9:00 AM - 5:00 PM daily.",
        cost: "Around $15 USD for adult non-residents, $7.50 USD for child non-residents.",
        website: "https://www.giraffecentre.org"
      }
      },
        {
        name: "Karen Blixen Museum",
        description: "Step back in time at the former home of Danish author Karen Blixen, who famously wrote 'Out of Africa' under the pen name Isak Dinesen. The beautifully preserved colonial farmhouse and its lush gardens offer a glimpse into the life of this celebrated writer and the early days of colonial Kenya. The museum is located in the suburb of Karen, which was named after her.\n\nA guided tour takes you through rooms filled with Blixen's original furniture, photographs, and personal effects. The grounds themselves are serene, with stunning views of the nearby Ngong Hills, which featured so prominently in her writing. It's a must-visit for literature lovers, history buffs, and anyone captivated by the romance of a bygone era in Africa.",
        practicalInfo: {
        howToGetThere: "Located in Karen. It's best to take a taxi or combine it with a tour of other Karen attractions.",
        openingHours: "8:30 AM - 6:00 PM daily.",
        cost: "Around $12 USD for adult non-residents, $6 USD for child non-residents.",
        website: "https://www.museums.or.ke/karen-blixen/"
      }
      },
        {
        name: "Bomas of Kenya",
        description: "Experience Kenya's incredible cultural diversity at Bomas of Kenya. This living museum showcases the traditional homesteads (bomas) of several Kenyan ethnic groups. You can wander through replicas of villages from the Luhya, Maasai, Kikuyu, Taita, and many other communities, gaining insight into their unique architectural styles and ways of life.\n\nThe highlight for many visitors is the spectacular afternoon performance in the large theatre. Dancers and musicians in traditional attire perform energetic and captivating songs and dances from different regions of the country. It's a vibrant, colorful, and educational celebration of Kenya's rich cultural tapestry, all in one place.",
        practicalInfo: {
        howToGetThere: "Located on Lang'ata Road, near the entrance to Nairobi National Park. Accessible by taxi or public transport (matatus).",
        openingHours: "10:00 AM - 6:00 PM daily. Dance performances usually start around 2:30 PM.",
        cost: "Around $10 USD for adult non-residents, $5 USD for child non-residents.",
        website: "https://www.bomasofkenya.co.ke"
      }
      },
        {
        name: "Kazuri Beads Factory",
        description: "Kazuri, meaning 'small and beautiful' in Swahili, is a social enterprise that employs disadvantaged local women, primarily single mothers, to create stunning handmade ceramic beads and pottery. A visit to their workshop in Karen is both a shopping opportunity and an inspiring look at a successful community empowerment project. You can take a free tour of the factory to see the entire bead-making process, from the molding of the clay to the glazing and firing.\n\nThe finished products—vibrant necklaces, bracelets, earrings, and pottery—are sold in the on-site shop. Purchasing a piece of Kazuri jewelry means taking home a unique, handcrafted souvenir that directly supports the artisans and their families. It's a wonderful place to find meaningful gifts and appreciate local craftsmanship.",
        practicalInfo: {
        howToGetThere: "Located in Karen, near the Karen Blixen Museum. Best reached by taxi.",
        openingHours: "Monday-Saturday: 8:30 AM - 6:00 PM; Sunday: 9:00 AM - 4:00 PM.",
        cost: "Free to tour the workshop.",
        website: "https://www.kazuri.com"
      }
      },
        {
        name: "Maasai Market",
        description: "For the ultimate Kenyan souvenir shopping experience, head to a Maasai Market. This is not a single location but a vibrant open-air market that moves to different venues around Nairobi on different days of the week. Here, you'll find a dizzying array of handcrafted goods, from beaded jewelry and leather sandals to wooden carvings, sisal bags ('kiondos'), and colorful Maasai 'shukas' (blankets).\n\nHaggling is expected and part of the experience, so be prepared to negotiate prices with a friendly attitude. It's a fantastic place to interact with local artisans and find unique, authentic souvenirs. Always keep your belongings secure, as the markets can get very crowded.",
        practicalInfo: {
        howToGetThere: "Locations vary by day. Common spots include the High Court parking lot (Saturdays), Yaya Centre (Sundays), and Prestige Plaza (Tuesdays). Check local listings or ask your hotel for the current schedule.",
        openingHours: "Typically 8:00 AM to 6:00 PM.",
        cost: "Free entry. Prices are negotiable.",
        website: "No official website. Local city guides provide updated schedules."
      }
      },
        {
        name: "Nairobi National Museum",
        description: "The Nairobi National Museum offers a comprehensive introduction to Kenya's rich heritage and natural history. Situated on Museum Hill, it houses impressive collections that cover everything from paleontology to contemporary Kenyan art. The highlight is the Hall of Kenya, which details the nation's history, culture, and peoples. Don't miss the Cradle of Humankind exhibit, featuring an extensive collection of early human fossils found in the region.\n\nThe museum complex also includes the Snake Park and a botanical garden, making it a full day's outing. The art gallery showcases works from leading East African artists, providing a snapshot of the region's dynamic creative scene. It's the perfect place to build a foundation of knowledge before exploring the rest of the country.",
        practicalInfo: {
        howToGetThere: "Located on Museum Hill, a short taxi ride or a long walk from the Central Business District (CBD).",
        openingHours: "8:30 AM - 5:30 PM daily.",
        cost: "Around $12 USD for adult non-residents (museum only), or a combined ticket for the museum and snake park.",
        website: "https://www.museums.or.ke/nairobi-national-museum/"
      }
      },
        {
        name: "Karura Forest",
        description: "An oasis of tranquility in the northern part of the city, Karura Forest is one of the largest urban gazetted forests in the world. It's a popular spot for locals and tourists looking to escape the city's hustle. The forest features well-marked trails for walking, jogging, and mountain biking, which can be rented on-site. The lush landscape is home to waterfalls, caves, a lily-covered lake, and various species of monkeys and birds.\n\nThe forest is a testament to successful conservation efforts, led by the late Nobel Laureate Wangari Maathai. It's a safe and serene environment to connect with nature, have a picnic, or enjoy a meal at the charming The River Café located within the forest.",
        practicalInfo: {
        howToGetThere: "Main entrances are on Limuru Road and Kiambu Road. Best accessed by taxi or car.",
        openingHours: "6:00 AM - 6:00 PM daily.",
        cost: "Around 600 KES for non-resident adults.",
        website: "https://www.friendsofkarura.org"
      }
      },
        {
        name: "Kenyatta International Convention Centre (KICC) Helipad",
        description: "For the best panoramic views of Nairobi, head to the top of the Kenyatta International Convention Centre (KICC). This iconic, cylindrical building has been a symbol of the city since the 1970s. While the building itself is a major conference venue, the public can take an elevator up to the 28th floor and then climb a few flights of stairs to the circular viewing deck, which was once a revolving restaurant and now serves as a helipad.\n\nFrom this vantage point, you get a stunning 360-degree view of the entire city, from the dense skyscrapers of the CBD to the sprawling suburbs and, on a clear day, even Nairobi National Park and Mount Kenya in the distance. It’s an ideal spot for photography and for grasping the true scale of Nairobi.",
        practicalInfo: {
        howToGetThere: "Located in the heart of the CBD. Easily accessible on foot if you are in the city center, or by taxi.",
        openingHours: "Typically 9:00 AM - 8:00 PM daily, but can vary.",
        cost: "Around 500 KES for non-resident adults.",
        website: "https://kicc.co.ke/"
      }
      },
        {
        name: "Kiambethu Tea Farm",
        description: "Just a short drive from Nairobi lies the Kiambethu Tea Farm in Limuru, offering a fascinating insight into Kenya's famous tea industry. This family-run farm has been growing tea since 1910. The tour begins with a talk on the history of the farm and the tea-making process, followed by a walk through the beautiful gardens and an indigenous forest, where you can learn about local plants and spot Colobus monkeys.\n\nThe experience culminates in a delicious three-course lunch made with fresh ingredients from the farm's garden, served on the verandah overlooking the lush tea fields. It's a relaxing and educational day trip that showcases the serene beauty of the Kenyan highlands.",
        practicalInfo: {
        howToGetThere: "Located in Limuru, about a 45-minute drive from Nairobi. Pre-booking is essential. Transport can be arranged via tour operators or taxi.",
        openingHours: "Tours run from Thursday to Sunday, starting at 11:00 AM. Must book in advance.",
        cost: "Around 4,000 KES per person, including the tour and lunch.",
        website: "https://www.kiambethufarm.co.ke/"
      }
      },
        {
        name: "Mamba Village",
        description: "Nairobi's Mamba Village is a popular recreational spot centered around a large man-made lake. The main attraction is the crocodile farm, which houses thousands of crocodiles, including a massive 5-meter-long specimen nicknamed 'Big Daddy'. The most exciting part of the visit is the feeding time in the afternoon when the otherwise lethargic reptiles burst into a frenzy of action.\n\nBeyond the crocodiles, Mamba Village also offers an ostrich park, horseback riding, camel rides, and boat rentals on the lake. There's a restaurant on-site, making it a fun, family-friendly destination for a few hours of entertainment just a short drive from the city center.",
        practicalInfo: {
        howToGetThere: "Located on Lang'ata Road in Karen, close to Bomas of Kenya.",
        openingHours: "9:00 AM - 6:00 PM daily. Crocodile feeding is usually around 5:00 PM.",
        cost: "Around $10 USD for adult non-residents.",
        website: "No official website, but widely featured in local tour listings."
      }
      },
        {
        name: "Railway Museum",
        description: "Discover the fascinating and pivotal role of the 'Lunatic Express'—the railway from Mombasa to Uganda—in the founding of Nairobi and the development of Kenya. The Railway Museum, located adjacent to the Nairobi Railway Station, is a treasure trove of historical artifacts, from old train carriages and steam locomotives to maps and photographs from the colonial era.\n\nYou can climb aboard the beautifully preserved locomotives that conquered the Kenyan terrain over a century ago, including the carriage from which Superintendent Charles Ryall was dragged and killed by a man-eating lion in 1898. It's a nostalgic and educational journey into the engineering feat that shaped the nation.",
        practicalInfo: {
        howToGetThere: "Located on Station Road, just off Uhuru Highway, next to the main railway station. A short walk from the CBD.",
        openingHours: "8:00 AM - 5:00 PM daily.",
        cost: "Around 600 KES for non-resident adults.",
        website: "https://www.museums.or.ke/railway-museum/"
      }
      },
        {
        name: "The Go-Down Arts Centre",
        description: "For a deep dive into Nairobi's contemporary arts scene, visit The Go-Down Arts Centre. Housed in a converted warehouse in the Industrial Area, this dynamic space is a hub for creativity and innovation. It provides studios, rehearsal spaces, and performance venues for a diverse community of visual and performing artists.\n\nA visit here offers the chance to see art in the making, interact with artists in their studios, and catch a play, concert, or exhibition. The center regularly hosts events, workshops, and festivals that showcase the best of Kenyan talent. It's an authentic, off-the-beaten-path experience that reveals the modern, creative soul of Nairobi.",
        practicalInfo: {
        howToGetThere: "Located on Dunga Road in the Industrial Area. Best to take a taxi due to its location.",
        openingHours: "Typically office hours (9 AM - 5 PM), but event times vary. Check their schedule online.",
        cost: "Entry is usually free; specific events may have a cover charge.",
        website: "https://www.thegodownartscentre.com"
      }
      },
        {
        name: "August 7th Memorial Park",
        description: "Located on the site of the former US Embassy, the August 7th Memorial Park is a solemn and peaceful space dedicated to the victims of the 1998 embassy bombing. It serves as a place of remembrance and reflection, offering a quiet escape from the noise of the surrounding city center. The park features a memorial wall inscribed with the names of all who perished in the attack.\n\nThe beautifully landscaped gardens, fountains, and sculptures promote a message of peace and reconciliation. There is also a small museum that documents the events of that tragic day and its aftermath. It is a poignant and important site that honors a key moment in Nairobi's recent history.",
        practicalInfo: {
        howToGetThere: "Located at the corner of Moi Avenue and Haile Selassie Avenue in the CBD.",
        openingHours: "Monday-Saturday: 9:00 AM - 6:00 PM. Closed on Sundays.",
        cost: "A small entry fee of around 30 KES is charged to maintain the park.",
        website: "https://memoiralpark.or.ke/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Nairobi offers several transportation options. Ride-hailing apps like Uber and Bolt are popular, affordable, and generally safe for getting around the city. Local taxis are also available but agree on a fare before starting your trip. For a local experience, you can use 'matatus' (privately owned minibuses) which run on fixed routes and are very cheap, though they can be crowded and drive erratically. 'Boda-bodas' (motorcycle taxis) are quick for short distances but carry higher risks; always insist on a helmet.",
        whereToStay: "Westlands is a vibrant hub with upscale hotels, restaurants, and nightlife. Kilimani is a popular residential area with many mid-range hotels, apartments, and cafes. For a more tranquil and luxurious stay, Karen offers boutique hotels and guesthouses set in leafy suburbs, close to many attractions. The Central Business District (CBD) has business hotels and is convenient for museums but can be deserted at night. Recommended hotels include Villa Rosa Kempinski (Luxury), Tribe Hotel (Luxury), The Social House (Mid-Range), and Wildebeest Eco Camp (Budget).",
        bestTimeToVisit: "The best time to visit Nairobi is during its two dry seasons: from June to October and from January to February. During these months, the weather is sunny and pleasant, with cooler temperatures, making it ideal for wildlife viewing in Nairobi National Park as animals gather around water sources. The long rains occur from March to May, and the short rains from November to December. While you can still visit during the rainy seasons, game drives can be challenging on muddy tracks.",
        suggestedItinerary: "Day 1: Karen Exploration. Start your day with the 11 AM public viewing at the David Sheldrick Wildlife Trust. Afterwards, head to the nearby Giraffe Centre to feed the giraffes. Have lunch in Karen, then visit the Karen Blixen Museum and the Kazuri Beads Factory. Day 2: City & Culture. Begin at the Nairobi National Museum and Snake Park. In the afternoon, get a panoramic view from the KICC Helipad, then visit the August 7th Memorial Park. Finish your day by shopping at a Maasai Market (check schedule). Day 3: Wildlife & Tradition. Take an early morning game drive in Nairobi National Park. In the afternoon, immerse yourself in Kenyan culture with the dance performances and village tours at Bomas of Kenya."
      }}
      faqs={[{
          question: "Is Nairobi expensive?",
          answer: "Nairobi's cost can vary widely. For tourists, it can be moderately expensive, with international hotels, park fees ($40-$60), and organized tours being the main costs. A meal at a mid-range restaurant might cost $15-25. However, it can also be a budget-friendly destination. Eating at local restaurants ('kibandas'), using matatus for transport, and staying in guesthouses can significantly lower your expenses. A local meal can be as cheap as $3-5."
        },
        {
          question: "How many days do you need in Nairobi?",
          answer: "Three to four days are ideal for a first-time visitor. This allows enough time to cover the major attractions like Nairobi National Park, the Sheldrick Trust, the Giraffe Centre, and key museums without feeling rushed. A 3-day itinerary lets you experience the city's unique mix of wildlife, culture, and history. If you plan to use Nairobi as a base for day trips, like to Lake Naivasha or Kiambethu Tea Farm, consider adding an extra day or two."
        },
        {
          question: "Is Nairobi safe?",
          answer: "Nairobi has a reputation for crime, and like any major city, requires vigilance. Petty crime, such as pickpocketing and snatch-and-grab theft, can occur, especially in crowded areas like the CBD and markets. It's advisable to avoid walking alone at night, especially in unlit areas. Do not display expensive items like cameras and jewelry openly. Use reputable transport options like Uber, Bolt, or hotel-arranged taxis instead of hailing cabs off the street. By being sensible and aware of your surroundings, most visitors have a trouble-free experience."
        },
        {
          question: "What is Nairobi famous for?",
          answer: "Nairobi is most famous for being the only capital city in the world that has a national park within its borders, allowing for unique urban safari experiences. It's also known as the 'Green City in the Sun' for its warm climate and many green spaces. Furthermore, Nairobi is a major diplomatic and business hub for East and Central Africa, hosting the global headquarters for UNEP and UN-Habitat. It's celebrated for its vibrant culture, lively arts scene, and as the gateway to Kenya's world-famous safari destinations like the Maasai Mara."
        }
      ]}
    />
  );
};