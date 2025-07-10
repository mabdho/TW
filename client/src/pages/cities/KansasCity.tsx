import React from 'react';
import { CityPage } from '../../components/CityPage';

export const KansasCity: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Kansas City, USA (2025 Guide)"
      description="Planning a trip to Kansas City? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "National WWI Museum and Memorial",
        "The Nelson-Atkins Museum of Art",
        "Union Station",
        "Indulge in Kansas City Barbecue",
        "Country Club Plaza"
]}
      attractions={[
        {
                "name": "National WWI Museum and Memorial",
                "description": "A profoundly moving and comprehensive institution, the National WWI Museum and Memorial is America's official museum dedicated to World War I. The experience begins by crossing a glass bridge over a field of 9,000 red poppies, each representing 1,000 combatant deaths. Inside, the main gallery offers an immersive chronological journey through the war, featuring an astonishing collection of artifacts, life-sized trenches, and interactive displays that bring the global conflict to life.\n\nDon't miss the opportunity to ascend the 217-foot Liberty Memorial Tower. The open-air observation deck provides what is arguably the most breathtaking panoramic view of the Kansas City skyline, including a perfect vantage point of Union Station directly below. It's a must-see for history enthusiasts and anyone looking to understand this pivotal moment in world history.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.theworldwar.org/"
                }
        },
        {
                "name": "The Nelson-Atkins Museum of Art",
                "description": "One of the most distinguished art museums in the country, the Nelson-Atkins boasts an encyclopedic collection spanning 5,000 years of human creativity. The original neoclassical building and the stunning modern Bloch Building addition house everything from ancient Chinese ceramics and European masters like Caravaggio and Monet to an impressive collection of American and contemporary art. The museum is renowned for its Asian art collection, which is among the finest in the West.\n\nEqually famous is the Donald J. Hall Sculpture Park, a sprawling lawn dotted with monumental works, including the iconic 'Shuttlecocks' by Claes Oldenburg and Coosje van Bruggen. It's a perfect place for a leisurely stroll and a photo opportunity. Best of all, general admission to the museum is completely free.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.nelson-atkins.org/"
                }
        },
        {
                "name": "Union Station",
                "description": "More than just a train station, Union Station is a magnificent historical landmark and a hub of culture and entertainment. Built in 1914, this Beaux-Arts masterpiece has been beautifully restored, and its Grand Hall, with its 95-foot ceiling and three 3,500-pound chandeliers, is a breathtaking sight. Today, it still serves as an active Amtrak station but also houses a variety of attractions.\n\nYou can explore Science City, an interactive science center perfect for families; the Arvin Gottlieb Planetarium; a movie theater; and various rotating world-class exhibitions. The station also features several restaurants and shops, making it a destination where you can easily spend half a day marveling at the architecture and enjoying its many offerings.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.unionstation.org/"
                }
        },
        {
                "name": "Indulge in Kansas City Barbecue",
                "description": "You cannot visit Kansas City without experiencing its most famous culinary contribution: barbecue. It's a religion here, characterized by slow-smoked meats, a thick, sweet, and tangy tomato-based sauce, and beloved side dishes. The city is packed with legendary joints, each with its own fiercely loyal following. From the iconic burnt ends (cubes of brisket point) to fall-off-the-bone ribs and pulled pork, trying KC 'cue is an essential cultural experience.\n\nChoosing where to go is part of the fun. For a classic experience, head to Arthur Bryant's or Gates Bar-B-Q, where you'll be greeted with a loud 'Hi, may I help you?'. For a more modern yet equally revered take, the gas station-born Joe's Kansas City Bar-B-Que is a must-try, often with a line out the door. Other standouts include Q39, Jack Stack, and Slap's BBQ.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.visitkc.com/food-drinks/barbecue"
                }
        },
        {
                "name": "Country Club Plaza",
                "description": "Designed in 1922 as the nation's first suburban shopping center designed for automobiles, the Country Club Plaza is a premier retail, dining, and entertainment district. Its striking Spanish-inspired architecture, featuring courtyards, towers, and ornate tilework, makes it a beautiful place to simply walk around. The area is filled with high-end retailers, local boutiques, fantastic restaurants, and dozens of fountains and sculptures.\n\nThe Plaza is a year-round destination. In the spring and summer, the courtyards are bustling with shoppers and outdoor diners. From Thanksgiving to mid-January, it transforms into a winter wonderland during the annual Plaza Lights ceremony, where every building is outlined in festive colored lights—a cherished KC tradition.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://countryclubplaza.com/"
                }
        },
        {
                "name": "American Jazz Museum",
                "description": "Located in the historic 18th & Vine Jazz District, the American Jazz Museum celebrates the history and legacy of America's original art form. Kansas City was a jazz hotbed in the 1920s and 30s, and this museum pays tribute to the greats like Charlie Parker, Count Basie, Ella Fitzgerald, and Duke Ellington. Through interactive exhibits, listening stations, and memorabilia, visitors can immerse themselves in the sounds and stories of jazz.\n\nThe museum shares a building with the Negro Leagues Baseball Museum and is attached to The Blue Room, a working jazz club that hosts live performances by local and national musicians several nights a week. Visiting the museum and then catching a show at The Blue Room makes for a perfect evening.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://americanjazzmuseum.org/"
                }
        },
        {
                "name": "Negro Leagues Baseball Museum",
                "description": "A powerful and important American institution, the Negro Leagues Baseball Museum (NLBM) chronicles the history of African American baseball from the late 1800s to the 1960s. This is not just a sports museum; it's a civil rights and social history museum told through the lens of baseball. The self-guided tour takes you through a timeline of segregation and the creation of the Negro Leagues, celebrating legendary players like Satchel Paige, Josh Gibson, Cool Papa Bell, and of course, Jackie Robinson, who broke the color barrier.\n\nThe culminating exhibit is the moving 'Field of Legends,' where nearly life-sized bronze statues of Negro Leagues greats are positioned on a mock baseball diamond as if in the middle of a game. It is a poignant and inspiring tribute that you won't soon forget.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.nlbm.com/"
                }
        },
        {
                "name": "City Market",
                "description": "A vibrant hub of food, culture, and commerce since 1857, the City Market is a bustling destination for locals and tourists alike. The main draw is the large, open-air farmers market on weekends (April-October), where vendors from across the region sell fresh produce, flowers, baked goods, and crafts. The surrounding permanent buildings house a diverse mix of international restaurants—from Vietnamese and Brazilian to Ethiopian and Italian—as well as specialty grocery stores and boutiques.\n\nBeyond the food, the market is also home to the Arabia Steamboat Museum, which offers a fascinating glimpse into life on the American frontier. The City Market's lively atmosphere and multicultural flavor make it a fantastic place to spend a Saturday or Sunday morning.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://thecitymarketkc.org/"
                }
        }
]}
    />
  );
};