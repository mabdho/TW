import React from 'react';
import { CityPage } from '../../components/CityPage';

export const GoldCoast: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Gold Coast, Australia (2025 Guide)"
      description="Planning a trip to Gold Coast? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Surfers Paradise Beach",
        "Warner Bros. Movie World",
        "Burleigh Heads National Park",
        "Q1 SkyPoint Observation Deck",
        "Currumbin Wildlife Sanctuary"
]}
      attractions={[
        {
                "name": "Surfers Paradise Beach",
                "description": "The heart of the Gold Coast, Surfers Paradise Beach is an iconic 3-kilometer stretch of golden sand framed by a dramatic skyline of high-rise apartments. It's the quintessential Gold Coast experience, bustling with sunbathers, swimmers, and surfers. The patrolled beach is perfect for a safe swim between the flags, while the expansive foreshore is ideal for a stroll, bike ride, or simply people-watching. \n\nBeyond the sand, Cavill Avenue is a vibrant hub of shops, restaurants, and entertainment venues. By day, it’s a lively pedestrian mall; by night, it transforms into the center of the city's nightlife. The Surfers Paradise Beachfront Markets, held on Wednesday, Friday, and Sunday evenings, offer a great opportunity to find unique souvenirs and local crafts.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.destinationgoldcoast.com/"
                }
        },
        {
                "name": "Warner Bros. Movie World",
                "description": "Step into the world of Hollywood and become the star of your own adventure at Warner Bros. Movie World. This theme park brings your favorite movies and superheroes to life with a thrilling collection of world-class rides, stunt shows, and character parades. Feel the adrenaline on rollercoasters like the DC Rivals HyperCoaster and the Superman Escape, or enjoy family-friendly fun in the Looney Tunes Village.\n\nThe daily Streets Star Parade is a highlight, featuring beloved characters from Batman to Bugs Bunny. With live-action stunt shows and immersive 4D movie experiences, Movie World provides a full day of entertainment for all ages, making it a must-visit for film buffs and thrill-seekers alike.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://movieworld.com.au/"
                }
        },
        {
                "name": "Burleigh Heads National Park",
                "description": "A stunning green oasis nestled between the surf beaches of Burleigh Heads and Tallebudgera Creek, this national park offers a perfect blend of coastal and rainforest scenery. The park features walking tracks that cater to all fitness levels, including an ocean-view circuit and a more rugged rainforest walk.\n\nFollow the path along the rocky foreshore for incredible views of the crashing waves and the Surfers Paradise skyline in the distance. During winter and spring, this is a prime spot for whale watching. The park is a culturally significant site for the local Yugambeh people and provides a beautiful, peaceful escape from the city buzz.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://parks.des.qld.gov.au/parks/burleigh-head"
                }
        },
        {
                "name": "Q1 SkyPoint Observation Deck",
                "description": "For the best views of the Gold Coast, head to the SkyPoint Observation Deck, located on level 77 of the iconic Q1 Resort Building. At 230 meters high, it's Australia's only beachside observation deck, offering breathtaking 360-degree views from the hinterland to the Pacific Ocean and up and down the coastline. Enjoy a coffee or cocktail at the bar as you soak in the panoramic vista.\n\nFor the ultimate thrill, adventurous visitors can book the SkyPoint Climb. This is an external building walk that takes you to the spire of the Q1, 270 meters above sea level. It’s an unforgettable experience that offers an open-air perspective of the stunning landscape.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.skypoint.com.au/"
                }
        },
        {
                "name": "Currumbin Wildlife Sanctuary",
                "description": "Get up close and personal with Australia's incredible native wildlife at the Currumbin Wildlife Sanctuary. This heritage-listed park is famous for its massive flocks of wild Rainbow Lorikeets that descend for feeding sessions twice daily. Beyond the lorikeets, you can cuddle a koala, hand-feed kangaroos, and see unique animals like wombats, Tasmanian devils, and crocodiles.\n\nThe sanctuary is set in 27 hectares of lush bushland and rainforest. Don't miss the Free Flight Bird Show or the Aboriginal Culture Show. A miniature railway helps you navigate the sprawling park, making it an enjoyable and educational day out for the whole family.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://currumbinsanctuary.com.au/"
                }
        },
        {
                "name": "Springbrook National Park",
                "description": "Escape to the ancient world of the Gold Coast hinterland at Springbrook National Park, part of the Gondwana Rainforests of Australia World Heritage Area. The park is renowned for its spectacular waterfalls, lush rainforest, and breathtaking lookouts. The most famous feature is the Natural Bridge, a stunning rock arch formed by the force of a waterfall over a basalt cave.\n\nBy day, you can explore the easy 1km circuit walk to see the waterfall cascading into the cave below. At night, the cave transforms into a magical spectacle, illuminated by the largest colony of glow-worms in Australia. Other highlights of the park include Purling Brook Falls and the Best of All Lookout.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://parks.des.qld.gov.au/parks/springbrook"
                }
        },
        {
                "name": "Sea World",
                "description": "Dive into a world of marine life, thrilling rides, and amazing animal presentations at Sea World. This park offers a unique combination of a theme park and a marine zoo. Witness the incredible grace of dolphins at the Affinity Dolphin Presentation, laugh at the antics of sea lions, and learn about the park's rescue and rehabilitation efforts.\n\nFor thrill-seekers, rides like the Storm Coaster and Jet Rescue Coaster provide plenty of excitement. Younger visitors will love Nickelodeon Land, where they can meet characters like SpongeBob SquarePants and Dora the Explorer. Sea World's focus on conservation and education makes it both fun and informative.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://seaworld.com.au/"
                }
        },
        {
                "name": "Coolangatta Beach",
                "description": "At the southern end of the Gold Coast, Coolangatta offers a more relaxed, classic beach town vibe compared to the hustle of Surfers Paradise. Its beautiful, north-facing beaches, including Greenmount and Rainbow Bay, provide sheltered swimming conditions and are perfect for families. The area is also a world-renowned surfing mecca, home to the famous Snapper Rocks Superbank.\n\nStroll along the oceanfront path that connects these beaches, watch the pros carve up the waves, and enjoy the stunning coastal views from Point Danger Lookout, which sits right on the Queensland-New South Wales border. With a great selection of casual cafes and surf clubs, Coolangatta is the perfect place to unwind.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.destinationgoldcoast.com/places-to-see/coolangatta"
                }
        }
]}
    />
  );
};