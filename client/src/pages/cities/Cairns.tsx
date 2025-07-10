import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Cairns: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Cairns, Australia (2025 Guide)"
      description="Planning a trip to Cairns? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Great Barrier Reef Tour",
        "Daintree Rainforest & Cape Tribulation",
        "Kuranda Scenic Railway",
        "Skyrail Rainforest Cableway",
        "Cairns Esplanade Lagoon"
]}
      attractions={[
        {
                "name": "Great Barrier Reef Tour",
                "description": "No trip to Cairns is complete without experiencing the Great Barrier Reef, the world's largest coral reef system. A vast underwater universe of vibrant coral, dazzling fish, sea turtles, and majestic rays awaits. Numerous tour operators depart daily from the Cairns Reef Fleet Terminal, offering a range of experiences from snorkeling and scuba diving on outer reef pontoons to sailing adventures on idyllic catamarans.\n\nChoosing the right tour is key; options cater to all levels, from first-time snorkelers to certified divers. Many tours include a buffet lunch, snorkeling equipment, and educational presentations by marine biologists. Witnessing this natural wonder firsthand is a profound experience, offering a glimpse into one of the most complex and beautiful ecosystems on Earth.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.tropicalnorthqueensland.org.au/things-to-do/great-barrier-reef/"
                }
        },
        {
                "name": "Daintree Rainforest & Cape Tribulation",
                "description": "Explore the oldest continuously surviving tropical rainforest on the planet. The Daintree Rainforest is a living museum, home to ancient flora and unique wildlife, including the elusive cassowary. A day trip or overnight stay allows you to venture north of Cairns, crossing the Daintree River by ferry into a world of dense jungle canopies and pristine beaches.\n\nAt Cape Tribulation, the rainforest dramatically meets the reef—the only place in the world where two World Heritage sites sit side-by-side. Take a guided rainforest walk, cruise a river looking for crocodiles, taste exotic tropical fruits at a local farm, or simply relax on the secluded sands of Myall Beach.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.tropicalnorthqueensland.org.au/where-to-go/daintree-cape-tribulation/"
                }
        },
        {
                "name": "Kuranda Scenic Railway",
                "description": "Step back in time with a historic journey aboard the Kuranda Scenic Railway. This spectacular ride winds its way from Cairns up the Macalister Range to the charming rainforest village of Kuranda. The railway, an engineering feat completed in 1891, carves through dense rainforest, past breathtaking waterfalls like Barron Falls, and over 40 bridges and through 15 hand-carved tunnels.\n\nThe journey itself is the attraction, offering stunning views from restored vintage carriages. Upon arrival in Kuranda, you can explore the village's markets, wildlife sanctuaries, and walking tracks before returning, perhaps via the Skyrail Rainforest Cableway for a different perspective.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.ksr.com.au/"
                }
        },
        {
                "name": "Skyrail Rainforest Cableway",
                "description": "Glide silently for 7.5 kilometers over the canopy of the World Heritage-listed rainforest. The Skyrail Rainforest Cableway provides a unique and immersive perspective of the jungle below. The journey includes two mid-stations, Red Peak and Barron Falls, where you can alight and explore the forest floor via boardwalks, visit interpretive centres, and take in spectacular views from lookouts.\n\nThe Barron Falls station offers incredible vistas of the majestic gorge and falls, especially powerful during the wet season. Combining the Skyrail with the Kuranda Scenic Railway is the most popular way to experience both, creating a full-day rainforest adventure.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.skyrail.com.au/"
                }
        },
        {
                "name": "Cairns Esplanade Lagoon",
                "description": "The heart of the city, the Cairns Esplanade Lagoon is a massive 4800-square-meter saltwater swimming pool offering a safe and scenic place to cool off. With sandy shores, timber decking for sunbathing, and lifeguards on duty, it's a perfect spot for families, backpackers, and locals to relax and escape the tropical heat. As swimming in the ocean near the city is not advised due to crocodiles and stingers, this is the go-to swimming spot.\n\nSurrounded by grassy lawns, free public barbecues, and children's playgrounds, the lagoon area is a vibrant community hub. It's particularly beautiful at sunrise and sunset, with stunning views across the Trinity Inlet.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.cairns.qld.gov.au/esplanade"
                }
        },
        {
                "name": "Fitzroy Island",
                "description": "Just a 45-minute ferry ride from Cairns, Fitzroy Island is a pristine tropical paradise that offers a perfect island escape. Covered in lush rainforest and fringed by coral beaches and turquoise waters, it's a more rugged and adventurous alternative to Green Island. The island is part of a National Park, offering a wealth of activities.\n\nSnorkel straight off the beach at Welcome Bay and Nudey Beach (consistently voted one of Australia's best beaches), rent a kayak or stand-up paddleboard, or hike the Lighthouse Trail for panoramic views. The island is also home to the Cairns Turtle Rehabilitation Centre, where you can take a tour to learn about their conservation efforts.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.fitzroyisland.com/"
                }
        },
        {
                "name": "Atherton Tablelands",
                "description": "Escape the coastal heat and humidity by heading up to the Atherton Tablelands, a fertile plateau of rolling hills, volcanic crater lakes, lush rainforest, and charming country towns. This 'food bowl' of the tropics is perfect for a self-drive tour, where you can sample local coffee, cheese, chocolate, and tropical fruits directly from the producers.\n\nHighlights include swimming in the volcanic crater lakes of Lake Eacham and Lake Barrine, marveling at the enormous Curtain Fig Tree, and chasing waterfalls along the 'Waterfall Circuit,' which includes the famous Millaa Millaa Falls. The cooler climate and diverse landscapes provide a beautiful contrast to the coastal region.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.athertontablelands.com.au/"
                }
        },
        {
                "name": "Mossman Gorge Centre",
                "description": "Located at the southern end of the Daintree Rainforest, Mossman Gorge offers a fantastic and accessible taste of this ancient ecosystem. The Mossman Gorge Centre is the gateway, where you take a shuttle bus into the heart of the gorge. Here, crystal-clear water from the Mossman River tumbles over giant granite boulders, surrounded by lush rainforest.\n\nA key experience is the Ngadiku Dreamtime Walk, a guided tour led by local Indigenous people. They share their deep connection to the land, demonstrating traditional plant uses, identifying bush food sources, and telling legendary stories. It's a culturally rich and visually stunning experience.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.mossmangorge.com.au/"
                }
        }
]}
    />
  );
};