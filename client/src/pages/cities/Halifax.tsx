import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Halifax: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Halifax, Canada (2025 Guide)"
      description="Planning a trip to Halifax? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Halifax Waterfront",
        "Peggy's Cove",
        "Halifax Citadel National Historic Site",
        "Canadian Museum of Immigration at Pier 21",
        "Halifax Public Gardens"
]}
      attractions={[
        {
                "name": "Halifax Waterfront",
                "description": "The heart and soul of the city, the Halifax Waterfront is a 4-kilometer urban boardwalk buzzing with energy. It's a must-do for any visitor, offering a dynamic mix of shops, restaurants, and attractions. You can grab a lobster roll, sip a local craft beer on a patio, visit historic ships, or simply relax in one of the iconic waterfront hammocks while watching the boats go by. Throughout the year, the waterfront hosts festivals, concerts, and events, making it a lively hub of activity day and night.\n\nFrom the Wave sculpture to the Queen's Marque district, there are endless photo opportunities and places to explore. It serves as a central point, providing easy walking access to the Maritime Museum of the Atlantic, the Seaport Farmers' Market, and ferry terminals. It perfectly encapsulates the city's connection to the sea.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.halifaxwaterfront.ca/"
                }
        },
        {
                "name": "Peggy's Cove",
                "description": "Just an hour's drive from Halifax, Peggy's Cove is an iconic Canadian landmark and a quintessential Nova Scotian fishing village. The village is famous for its picturesque lighthouse perched on a massive granite outcrop, pounded by the Atlantic waves. It's one of the most photographed lighthouses in the world, and for good reason. Visitors can explore the charming village, with its colourful fishing shacks and art galleries, and watch fishing boats come and go.\n\nWhile the rugged beauty is undeniable, visitors must exercise extreme caution on the rocks, as rogue waves are a real danger. The stark, windswept landscape offers a powerful glimpse into the raw power of the Atlantic and the resilience of coastal communities. It's a day trip that provides an unforgettable taste of Nova Scotia's coastline.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.peggyscovens.com/"
                }
        },
        {
                "name": "Halifax Citadel National Historic Site",
                "description": "Dominating the city's skyline, the Halifax Citadel is a star-shaped fort that has stood guard over Halifax since the mid-19th century. This Parks Canada site offers a fascinating journey back in time. Visitors can explore the fort's ramparts, barracks, and magazines, and enjoy panoramic views of the harbour and downtown. The experience is brought to life by historical reenactors, including the 78th Highlanders, who perform drills, fire the Noon Gun, and play the bagpipes.\n\nThe Citadel played a crucial role in establishing Halifax as a key British naval base. You can take a guided tour to hear stories of soldiers' lives, learn about military architecture, or even sign up to be a 'Soldier for a Day.' It's an immersive historical experience for all ages.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://parks.canada.ca/lhn-nhs/ns/halifax"
                }
        },
        {
                "name": "Canadian Museum of Immigration at Pier 21",
                "description": "Located on the Halifax Waterfront, Pier 21 was the gateway to Canada for nearly one million immigrants between 1928 and 1971. Today, this National Historic Site is a powerful and moving museum dedicated to their stories. The museum offers two main exhibits: one detailing the Pier 21 experience and another covering the broader history of immigration to Canada from coast to coast.\n\nVisitors can step into a replica of a colony car on a train, explore interactive displays, and hear firsthand accounts from former immigrants. The museum also provides access to immigration records, allowing many Canadians to trace their family's arrival. It's an emotional and educational experience that highlights the diverse fabric of modern Canada.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://pier21.ca/"
                }
        },
        {
                "name": "Halifax Public Gardens",
                "description": "A tranquil oasis in the heart of the city, the Halifax Public Gardens are a rare and beautifully preserved example of a Victorian-era garden. Opened in 1867, this 16-acre National Historic Site is a masterpiece of horticultural design. Stroll along winding paths past ornate fountains, statues, a charming bandstand, and meticulously maintained flowerbeds bursting with colour.\n\nThe gardens are enclosed by a wrought-iron fence and feature magnificent formal and informal planting styles. It's the perfect place for a peaceful walk, a picnic, or simply to escape the urban hustle. Don't miss the tropical plants inside the greenhouse or the chance to get a treat at the on-site cafe, Uncommon Grounds.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.halifaxpublicgardens.ca/"
                }
        },
        {
                "name": "Maritime Museum of the Atlantic",
                "description": "Immerse yourself in Nova Scotia's rich maritime heritage at this waterfront museum. The Maritime Museum of the Atlantic is the oldest and largest maritime museum in Canada, with a vast collection that includes everything from small crafts and ship models to artifacts from the Titanic and the Halifax Explosion. The museum's exhibits explore the age of steam, convoys of the World Wars, and the daily life of sailors.\n\nOne of the most compelling exhibits is dedicated to the Halifax Explosion of 1917, a catastrophic event that shaped the city. The museum also has a permanent display on the Titanic, featuring artifacts recovered from the sea, including a poignant pair of child's shoes. Berthed outside the museum is the CSS Acadia, a 100-year-old hydrographic survey ship that you can board and explore.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://maritimemuseum.novascotia.ca/"
                }
        },
        {
                "name": "Art Gallery of Nova Scotia",
                "description": "Home to the province's art collection, the Art Gallery of Nova Scotia (AGNS) showcases a wide range of visual arts, from contemporary works to historical paintings. The gallery is spread across two buildings and features a significant collection of Canadian and international art. It is particularly celebrated for its collection of folk art, most notably the Maud Lewis House.\n\nThe brightly painted, tiny house of beloved Nova Scotian folk artist Maud Lewis was carefully restored and moved into the gallery. Seeing her home, where she painted almost every available surface, is a heartwarming and unique experience. The AGNS offers a thoughtful look into the creative spirit of the region and beyond.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.artgalleryofnovascotia.ca/"
                }
        },
        {
                "name": "Halifax Seaport Farmers' Market",
                "description": "Operating since 1750, the Halifax Seaport Farmers' Market is the longest continuously running market in North America. Now housed in a modern, LEED-certified building at the south end of the waterfront, the market is a vibrant hub for local producers, artisans, and food vendors. On weekends, it's bustling with locals and tourists alike, browsing stalls filled with fresh produce, baked goods, local wines, and unique crafts.\n\nIt's a fantastic place to grab breakfast or lunch, with options ranging from traditional Nova Scotian fare to international cuisine. Even on weekdays, a smaller selection of vendors is open. The rooftop patio offers great views of the harbour, making it a perfect spot to enjoy your market finds.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.halifaxfarmersmarket.com/"
                }
        }
]}
    />
  );
};