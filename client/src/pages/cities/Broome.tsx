import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Broome: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Broome, Australia (2025 Guide)"
      description="Planning a trip to Broome? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Cable Beach Camel Ride at Sunset",
        "Staircase to the Moon",
        "Gantheaume Point",
        "Horizontal Falls Seaplane Adventure",
        "Sun Pictures Cinema"
]}
      attractions={[
        {
                "name": "Cable Beach Camel Ride at Sunset",
                "description": "An iconic Broome experience, a camel ride along the famous Cable Beach as the sun dips below the horizon is a truly magical moment. The silhouettes of the camel train against the fiery orange and purple sky create a postcard-perfect scene. The gentle, rhythmic pace of the camels allows you to soak in the vastness of the beach and the spectacular coastal colours.\n\nSeveral operators run tours, each offering a slightly different experience. It's an incredibly popular activity, so booking well in advance, especially during the peak tourist season, is essential. The guides are often full of stories about the camels and the local area, adding another layer to this unforgettable adventure.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.visitbroome.com.au/tours"
                }
        },
        {
                "name": "Staircase to the Moon",
                "description": "This incredible natural phenomenon occurs for a few nights each month between March and October. When the full moon rises over the exposed tidal flats of Roebuck Bay at low tide, it creates a stunning optical illusion of a golden staircase reaching for the moon. It's a breathtaking sight that draws crowds to the shores.\n\nThe best viewing spot is Town Beach, where the monthly Staircase to the Moon Markets are held. The markets add to the festive atmosphere with local food stalls, crafts, and live music, making it a complete cultural experience.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.visitbroome.com.au/facts/staircase-to-the-moon"
                }
        },
        {
                "name": "Gantheaume Point",
                "description": "Just a short drive from town, Gantheaume Point is where deep red sandstone cliffs meet the turquoise waters of the Indian Ocean, creating a dramatic and beautiful landscape. It's a fantastic spot for photography, especially during the golden hours of sunrise and sunset. The contrast of colours is simply stunning.\n\nAt very low tides (below 2.16m), you can clamber down the rocks to see 130-million-year-old dinosaur footprints preserved in the reef rock. For easier access, a plaster cast of the footprints is located at the top of the cliffs near the lighthouse.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.australiasnorthwest.com/explore/broome/gantheaume-point"
                }
        },
        {
                "name": "Horizontal Falls Seaplane Adventure",
                "description": "Described by David Attenborough as 'one of the greatest natural wonders of the world,' the Horizontal Falls are a truly unique phenomenon. Massive tidal movements force huge volumes of water through two narrow gorges in the McLarty Range, creating a sideways waterfall effect. The only way to access this remote wonder is by seaplane and jet boat.\n\nTours offer a scenic flight over the stunning Buccaneer Archipelago, followed by a thrilling boat ride through the falls themselves. It's a high-adrenaline adventure and a spectacular way to appreciate the raw power and beauty of the Kimberley.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.horizontalfallsadventures.com.au/"
                }
        },
        {
                "name": "Sun Pictures Cinema",
                "description": "Step back in time at Sun Pictures, the world's oldest operating picture gardens. This rustic, open-air cinema has been screening films since 1916 and is oozing with character and history. Watching a movie from a canvas deckchair under a canopy of stars is a quintessential Broome experience.\n\nThe cinema has survived floods, cyclones, and societal changes, and its quirky history is part of its charm. Be sure to arrive early to read the historical displays and soak in the nostalgic atmosphere before the film begins. You might even hear an occasional plane from the nearby airport passing overhead during the movie!",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.sunpictures.com.au/"
                }
        },
        {
                "name": "Willie Creek Pearl Farm",
                "description": "Discover the intricate process behind the creation of the famed Australian South Sea Pearl at Willie Creek Pearl Farm. Located on a picturesque tidal estuary, the farm offers fascinating tours that explain the journey from shell to showroom. You'll learn about pearl seeding, harvesting, and grading, and take a boat cruise to see the pearl lines in the creek.\n\nThis award-winning tour provides a comprehensive insight into Broome's modern pearling industry. It's an engaging and educational experience that showcases the skill and patience required to cultivate these ocean gems. You can choose to self-drive or take a coach tour from Broome.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.williecreekpearls.com.au/pages/willie-creek-pearl-farm"
                }
        },
        {
                "name": "Broome Historical Museum",
                "description": "Housed in three heritage buildings, the Broome Historical Museum offers a deep dive into the town's captivating past. The exhibits cover everything from the region's First Nations history and the booming, multicultural pearling era to its role in World War II. The collection of artefacts, photographs, and personal stories is extensive and well-curated.\n\nIt's a fantastic place to spend a few hours, especially on a hot day, to understand the diverse forces that have shaped this unique town. The volunteers are passionate and knowledgeable, providing personal anecdotes that bring the history to life.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.broomemuseum.org.au/"
                }
        },
        {
                "name": "Japanese Cemetery",
                "description": "The Japanese Cemetery is the largest in Australia and a poignant tribute to the thousands of Japanese divers who lost their lives in the perilous pearling industry. Over 900 gravestones, some ornately carved from sandstone, stand in silent rows, a testament to the dangers faced by the divers, many of whom died from the bends or cyclones.\n\nWalking through the cemetery is a moving experience that offers a solemn insight into the human cost of the pearling boom. It is a beautifully maintained and respectful site that highlights the significant Japanese contribution to Broome's history and multicultural identity.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.visitbroome.com.au/see-and-do/japanese-cemetery"
                }
        }
]}
    />
  );
};