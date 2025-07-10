import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Columbus: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Columbus, USA (2025 Guide)"}
      description={"Welcome to Columbus, Ohio's vibrant and creative capital! Far more than just a college town, this Midwestern hub is a dynamic city brimming with artistic energy, a nationally acclaimed culinary scene, and beautifully preserved historic neighborhoods. From the chic galleries of the Short North to the charming brick-paved streets of German Village, Columbus offers a diverse array of experiences. Whether you're exploring the scenic Scioto Mile riverfront, indulging in treats at the North Market, or immersing yourself in world-class museums, you'll find a friendly, innovative spirit everywhere you go. This guide will walk you through all the very best things to do in Columbus, ensuring your visit is packed with discovery and delight. Let's explore the heart of Ohio!"}
      highlights={["German Village",
        "Franklin Park Conservatory and Botanical Gardens",
        "Short North Arts District",
        "COSI (Center of Science and Industry)",
        "Scioto Mile"]}
      attractions={[
        {
        name: "German Village",
        description: "Step back in time as you wander through the charming brick-lined streets of German Village. This meticulously restored historic neighborhood, settled by German immigrants in the mid-19th century, is one of the most picturesque areas in the United States. The beautifully preserved homes, lush gardens, and quiet courtyards create a unique, storybook atmosphere.\n\nExplore the independent shops, cozy cafes, and acclaimed restaurants. Don't miss The Book Loft, a massive bookstore with 32 rooms of literary treasures. It’s a perfect place for a leisurely afternoon stroll, offering a peaceful escape just south of the bustling downtown.",
        practicalInfo: {
        howToGetThere: "Located just south of downtown Columbus. Easily accessible by car, rideshare, or a short COTA bus ride.",
        openingHours: "Shops and restaurants have individual hours; the neighborhood is always accessible.",
        cost: "Free to explore.",
        website: "https://germanvillage.com/"
      }
      },
        {
        name: "Franklin Park Conservatory and Botanical Gardens",
        description: "A horticultural gem, the Franklin Park Conservatory and Botanical Gardens offers an escape into nature's beauty. The centerpiece is the stunning John F. Wolfe Palm House, a Victorian-era glasshouse built in 1895. Inside, you'll find diverse biomes, from a lush tropical rainforest to an arid desert, filled with exotic plants from around the globe.\n\nThe Conservatory is also famous for its extensive collection of glass art by Dale Chihuly, which is masterfully integrated into the plant displays. Outside, explore acres of botanical gardens, including the Scotts Miracle-Gro Community Garden Campus. It's a breathtaking experience in any season, with special exhibitions and a magical 'Conservatory Aglow' event during the holidays.",
        practicalInfo: {
        howToGetThere: "1777 E Broad St, Columbus, OH 43203. Accessible by car or the COTA bus line 10.",
        openingHours: "Daily, 10:00 AM - 5:00 PM. Hours may vary for special events.",
        cost: "Adults: ~$22, Seniors/Students: ~$19, Children: ~$15.",
        website: "https://www.fpconservatory.org/"
      }
      },
        {
        name: "Short North Arts District",
        description: "Known as the 'art and soul' of Columbus, the Short North is a vibrant, trend-setting neighborhood packed with art galleries, unique boutiques, lively bars, and some of the city's best restaurants. Its iconic arches welcome visitors to explore a hub of creativity and culture.\n\nPlan your visit around the first Saturday of the month for the 'Gallery Hop,' when galleries and shops stay open late, street performers entertain, and the entire district comes alive with energy. Whether you're hunting for a unique piece of art, a fashionable outfit, or a memorable meal, the Short North is an essential Columbus experience.",
        practicalInfo: {
        howToGetThere: "Located along High Street, just north of downtown and south of The Ohio State University campus.",
        openingHours: "Varies by establishment. Most active in the afternoon and evening.",
        cost: "Free to walk around; Gallery Hop is a free event.",
        website: "https://shortnorth.org/"
      }
      },
        {
        name: "COSI (Center of Science and Industry)",
        description: "COSI is a powerhouse of hands-on science and learning that's fun for all ages. Consistently ranked as one of the best science museums in the country, it features over 300 interactive exhibits across a variety of themed areas. You can ride a high-wire unicycle, explore the depths of the ocean, or walk through a classic 1960s Main Street.\n\nThe museum also includes a Dinosaur Gallery, a planetarium, and the National Geographic Giant Screen Theater. It’s an engaging and educational destination that makes complex scientific concepts accessible and exciting for everyone, making it a perfect family-friendly stop.",
        practicalInfo: {
        howToGetThere: "333 W Broad St, Columbus, OH 43215, located on the Scioto Peninsula downtown.",
        openingHours: "Typically Thursday - Sunday, 10:00 AM - 5:00 PM. Check website for current days and hours.",
        cost: "Adults: ~$25, Youth (2-12): ~$20. Prices may vary.",
        website: "https://cosi.org/"
      }
      },
        {
        name: "Scioto Mile",
        description: "The Scioto Mile is a stunning urban oasis that stretches along the downtown riverfront. This network of parks, boulevards, and pedestrian paths offers spectacular views of the Columbus skyline and connects key downtown destinations. The highlight is the 15,000-square-foot interactive fountain at Bicentennial Park, a popular spot for families to cool off in the summer.\n\nRent a CoGo bike or take a leisurely stroll along the trail, cross the iconic Main Street Bridge, or catch an outdoor concert at the Dorrian Green. At night, the fountains and city lights create a magical atmosphere. The Scioto Mile is the city's beautiful front yard and a perfect place to relax and people-watch.",
        practicalInfo: {
        howToGetThere: "Along the Scioto River in downtown Columbus, centered around Bicentennial Park (233 Civic Center Dr).",
        openingHours: "Parks are generally open from dawn to dusk. Fountains operate seasonally.",
        cost: "Free.",
        website: "https://sciotomile.com/"
      }
      },
        {
        name: "North Market",
        description: "A food lover's paradise, the North Market is Columbus's oldest and most authentic public market. Since 1876, it has been a hub for local farmers, artisans, and food entrepreneurs. Inside the bustling hall, you'll find a diverse mix of vendors offering everything from fresh produce and butcher cuts to gourmet cheeses and international cuisine.\n\nGrab lunch from one of the many prepared food stalls—options range from Vietnamese pho and Polish pierogies to Belgian waffles and Somali street food. It’s a vibrant, delicious, and essential taste of Columbus's local flavor and community spirit.",
        practicalInfo: {
        howToGetThere: "59 Spruce St, Columbus, OH 43215, near the Short North and Arena District.",
        openingHours: "Tuesday - Sunday, hours vary. Check website for specifics.",
        cost: "Free to enter; cost of food varies by vendor.",
        website: "https://northmarket.org/"
      }
      },
        {
        name: "Ohio Theatre",
        description: "Opulent and majestic, the Ohio Theatre is a beautifully restored 1928 movie palace and a designated National Historic Landmark. Known as the 'Official State Theatre of Ohio,' its breathtaking Spanish-Baroque architecture, 21-foot-high chandelier, and lavish interior details will transport you to another era.\n\nToday, it hosts a wide range of performances, including the Columbus Symphony Orchestra, Broadway shows, and concerts. Even if you don't catch a show, consider taking a guided tour to fully appreciate the stunning craftsmanship and history of this cultural treasure.",
        practicalInfo: {
        howToGetThere: "39 E State St, Columbus, OH 43215, in the heart of downtown.",
        openingHours: "Varies based on performance schedule. Tours are offered on select dates.",
        cost: "Varies by performance. Tours are approximately $5.",
        website: "https://www.capa.com/venues/detail/ohio-theatre"
      }
      },
        {
        name: "Columbus Museum of Art",
        description: "The Columbus Museum of Art showcases an outstanding collection of American and European art, with a particular strength in American modernism and works by Ohio artists. The museum is known for its welcoming and interactive approach, encouraging visitors to connect with art in personal ways.\n\nHighlights include the world's largest public collection of works by Columbus natives Aminah Robinson and Elijah Pierce, as well as an impressive collection of Impressionist and Cubist paintings. The Walter Wing, a modern expansion, and the tranquil outdoor sculpture garden make for a varied and inspiring visit. Admission is free on Sundays!",
        practicalInfo: {
        howToGetThere: "480 E Broad St, Columbus, OH 43215. Accessible by car or COTA bus.",
        openingHours: "Tuesday - Sunday, 10:00 AM - 5:00 PM (open late on Thursdays).",
        cost: "Adults: ~$18, Seniors/Students: ~$9. Free admission on Sundays.",
        website: "https://www.columbusmuseum.org/"
      }
      },
        {
        name: "Ohio Statehouse",
        description: "A masterpiece of 19th-century Greek Revival architecture, the Ohio Statehouse is both an active seat of government and a living museum. Completed in 1861, its distinct lack of a dome (a deliberate choice by the architects) makes it unique among U.S. state capitols. The building's rotunda, grand legislative chambers, and limestone exterior are truly impressive.\n\nVisitors can take free guided or self-guided tours to learn about Ohio's history, government, and the building's fascinating construction. It's a must-see for anyone interested in history, architecture, or civics, located right in the center of the city at Capitol Square.",
        practicalInfo: {
        howToGetThere: "1 Capitol Square, Columbus, OH 43215, in the center of downtown.",
        openingHours: "Weekdays 8:00 AM - 5:00 PM, Weekends 11:00 AM - 5:00 PM. Free tours offered daily.",
        cost: "Free.",
        website: "https://www.ohiostatehouse.org/"
      }
      },
        {
        name: "National Veterans Memorial and Museum",
        description: "Located on the Scioto Peninsula, this architecturally stunning museum is the only one in America dedicated to honoring the stories and experiences of veterans from all branches of service, across all eras. Rather than focusing on conflicts or battles, the museum's exhibits center on the personal journeys of service members, from taking the oath to transitioning back to civilian life.\n\nThrough powerful multimedia displays and personal artifacts, the NVMM offers a moving and insightful look at the sacrifices, challenges, and triumphs of U.S. veterans. Its unique circular design and rooftop sanctuary provide a space for remembrance and reflection.",
        practicalInfo: {
        howToGetThere: "300 W Broad St, Columbus, OH 43215, next to COSI.",
        openingHours: "Wednesday - Sunday, 10:00 AM - 5:00 PM.",
        cost: "Adults: ~$18, Seniors/Students: ~$16, Veterans: ~$11.",
        website: "https://nationalvmm.org/"
      }
      },
        {
        name: "Easton Town Center",
        description: "Easton Town Center redefines the shopping experience. It's designed as an open-air 'town square' with pedestrian-friendly streets, fountains, and parks interspersed among hundreds of high-end retailers, department stores, and diverse dining options. It offers a unique blend of indoor and outdoor shopping environments.\n\nBeyond shopping, Easton is an entertainment hub with a large movie theater, comedy club, and regular events. It's a destination in itself, providing a clean, safe, and lively atmosphere for a day of shopping, dining, and entertainment, located a short drive northeast of downtown.",
        practicalInfo: {
        howToGetThere: "160 Easton Town Ctr, Columbus, OH 43219. Best reached by car; ample parking available.",
        openingHours: "Monday - Saturday: 10:00 AM - 9:00 PM, Sunday: 12:00 PM - 6:00 PM.",
        cost: "Free to explore.",
        website: "https://eastontowncenter.com/"
      }
      },
        {
        name: "Topiary Garden",
        description: "One of Columbus's most unique and whimsical attractions, the Topiary Garden is a living sculpture park that recreates Georges Seurat's famous post-Impressionist painting, 'A Sunday Afternoon on the Isle of La Grande Jatte.' Located in the Old Deaf School Park, the garden features 54 human figures, eight boats, three dogs, a monkey, and a cat, all sculpted from yew shrubs.\n\nIt's a delightful and surreal experience to literally walk into a masterpiece of art. The park is a quiet, contemplative space that beautifully merges art and horticulture, offering a perfect photo opportunity and a serene break from the city.",
        practicalInfo: {
        howToGetThere: "480 E Town St, Columbus, OH 43215, behind the Columbus Metropolitan Library's Main Library.",
        openingHours: "Daily, dawn to dusk.",
        cost: "Free.",
        website: "https://www.columbus.gov/recreationandparks/parks/Topiary-Park/"
      }
      },
        {
        name: "Wexner Center for the Arts",
        description: "Located on The Ohio State University campus, the Wexner Center for the Arts is a bold architectural statement and an internationally renowned contemporary arts laboratory. Designed by Peter Eisenman, the building itself is a deconstructed masterpiece that challenges traditional notions of space.\n\nInside, 'the Wex' presents a dynamic, rotating schedule of exhibitions, film screenings, and performing arts events featuring innovative and emerging artists from around the world. It’s a must-visit for enthusiasts of contemporary art, architecture, and avant-garde culture.",
        practicalInfo: {
        howToGetThere: "1871 N High St, Columbus, OH 43210, on the OSU campus.",
        openingHours: "Gallery hours are typically Tuesday - Sunday, 11:00 AM - 6:00 PM. Check website for current exhibitions.",
        cost: "Exhibitions are generally free.",
        website: "https://wexarts.org/"
      }
      },
        {
        name: "Kelton House Museum & Garden",
        description: "Explore the history of 19th-century Columbus and the Underground Railroad at the Kelton House Museum & Garden. This beautifully preserved Victorian mansion was the home of Fernando and Sophia Kelton, outspoken abolitionists who used their property as a stop on the Underground Railroad.\n\nDocent-led tours provide fascinating insights into the family's life, the Victorian era, and the brave stories of the freedom seekers they helped. The home is filled with original furnishings, and the restored gardens offer a glimpse into period landscaping. It's an intimate and powerful look at a pivotal moment in American history.",
        practicalInfo: {
        howToGetThere: "586 E Town St, Columbus, OH 43215.",
        openingHours: "Tours are typically offered Thursday - Sunday afternoons. Reservations are recommended.",
        cost: "Adults: ~$12, Seniors: ~$10, Students: ~$6.",
        website: "https://keltonhouse.com/"
      }
      },
        {
        name: "Billy Ireland Cartoon Library & Museum",
        description: "A hidden gem on the OSU campus, the Billy Ireland Cartoon Library & Museum holds the world's largest collection of materials related to cartoons and comics. Its archives contain an astonishing number of original art, comic strips, editorial cartoons, and graphic novels.\n\nThe museum features free, rotating exhibitions showcasing the work of legendary cartoonists like Bill Watterson ('Calvin and Hobbes'), Charles Schulz ('Peanuts'), and many others. It’s an absolute must for anyone with an appreciation for comic art, political satire, or the history of this unique storytelling medium.",
        practicalInfo: {
        howToGetThere: "1813 N High St, Sullivant Hall, Columbus, OH 43210, on the OSU campus.",
        openingHours: "Tuesday - Sunday, 1:00 PM - 5:00 PM. Closed Mondays and holidays.",
        cost: "Free.",
        website: "https://cartoons.osu.edu/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Downtown Columbus and neighborhoods like the Short North and German Village are very walkable. The Central Ohio Transit Authority (COTA) offers extensive bus service, including the free CBUS circulator which runs along High Street connecting the Brewery District, Downtown, and the Short North. CoGo Bike Share stations are plentiful, and ride-sharing services like Uber and Lyft are widely available.",
        whereToStay: "For first-time visitors, the Short North offers trendy boutique hotels (like Moxy or Graduate Columbus) and is packed with dining and entertainment. Downtown is ideal for business travelers and those wanting to be close to the Scioto Mile and theaters, with options like Hotel LeVeque. For a quieter, charming experience, look for a B&B or rental in historic German Village.",
        bestTimeToVisit: "Late spring (May-June) and early fall (September-October) offer the most pleasant weather for exploring on foot. Summer is vibrant with numerous festivals but can be hot and humid. Fall is an exciting time due to the energy of The Ohio State University football season, but be prepared for crowds and higher hotel prices on game weekends. Winter is cold but offers indoor attractions and holiday lights.",
        suggestedItinerary: "Day 1: Downtown Discovery. Start at the Ohio Statehouse, walk the Scioto Mile, and cross the river to spend the afternoon at COSI and the National Veterans Memorial and Museum. Enjoy dinner downtown.\n\nDay 2: Arts & Culture. Spend the morning at the Columbus Museum of Art, then head to the Short North for lunch, gallery hopping, and boutique shopping. Catch a show at the Ohio Theatre in the evening.\n\nDay 3: History & Flavor. Explore the charming streets and shops of German Village in the morning. For lunch, head to the North Market for a diverse culinary experience. End your trip with a visit to the beautiful Franklin Park Conservatory and Botanical Gardens."
      }}
      faqs={[{
          question: "Is Columbus expensive?",
          answer: "Columbus is generally considered an affordable city, especially when compared to major coastal cities in the U.S. Hotel prices are reasonable, dining options range from budget-friendly food stalls at North Market to high-end restaurants, and many key attractions like the Ohio Statehouse, Scioto Mile, and Billy Ireland Cartoon Library are free. You can enjoy a full trip without breaking the bank."
        },
        {
          question: "How many days do you need in Columbus?",
          answer: "A weekend trip of 2-3 days is sufficient to see the main highlights, including the Short North, German Village, and the downtown riverfront attractions. If you want to explore more deeply, visit more museums, or catch a sporting event, extending your stay to 4-5 days would allow for a more relaxed and comprehensive experience."
        },
        {
          question: "Is Columbus safe?",
          answer: "Yes, Columbus is generally a safe city for tourists. The main visitor areas like the Short North, German Village, Downtown, and the OSU campus are well-trafficked and monitored. As with any large city, it's wise to be aware of your surroundings, especially at night. Stick to well-lit areas and take standard precautions with your belongings."
        },
        {
          question: "What is Columbus famous for?",
          answer: "Columbus is famous for several things. It's home to The Ohio State University, one of the largest universities in the country, which brings a youthful energy to the city. It's a major foodie destination, known as the birthplace of Jeni's Splendid Ice Creams and Wendy's. The city is also a 'test market' for new products, reflecting its innovative spirit. Finally, it's celebrated for its distinct, vibrant neighborhoods like the Short North Arts District and historic German Village."
        }
      ]}
      imageUrl={"https://images.unsplash.com/photo-1721033827857-da4bf72c5a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzU3NjN8MHwxfHNlYXJjaHwxfHxDb2x1bWJ1cyUyMHRyYXZlbHxlbnwwfDB8fHwxNzUyMTQwMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080"}
    />
  );
};