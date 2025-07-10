import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Brno: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Brno, Czech Republic (2025 Guide)"
      description="Planning a trip to Brno? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Špilberk Castle",
        "Cathedral of St. Peter and Paul",
        "Villa Tugendhat",
        "Brno Ossuary at the Church of St. James",
        "Old Town Hall (Stará radnice)"
]}
      attractions={[
        {
                "name": "Špilberk Castle",
                "description": "Dominating the Brno skyline from its hilltop perch, Špilberk Castle is the city's most prominent landmark. Originally a royal castle from the 13th century, it was later converted into a formidable Baroque fortress and then a notoriously harsh prison, dubbed the 'Prison of the Nations'. Today, it houses the Brno City Museum.\n\nVisitors can explore the infamous casemates (underground prison corridors), climb the lookout tower for panoramic views of the city, and wander through various museum exhibitions detailing the castle's and city's history. The surrounding park is a beautiful spot for a relaxing walk.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.spilberk.cz/en/"
                }
        },
        {
                "name": "Cathedral of St. Peter and Paul",
                "description": "Another iconic feature of the Brno skyline, the Cathedral of St. Peter and Paul sits atop Petrov hill. Its distinctive twin spires are a symbol of the city. The cathedral has a fascinating legend: during the Thirty Years' War, the Swedish army promised to call off their siege if they hadn't conquered the city by noon. The clever bell ringer rang the noon bells an hour early at 11 AM, fooling the Swedes into retreating.\n\nTo this day, the cathedral's bells chime for noon at 11 o'clock. Visitors can admire the stunning Baroque interior, explore the crypt, and climb one of the towers for a breathtaking view of the city center and Špilberk Castle.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.katedrala-petrov.cz/"
                }
        },
        {
                "name": "Villa Tugendhat",
                "description": "A must-see for architecture and design enthusiasts, Villa Tugendhat is a masterpiece of the functionalist style and a UNESCO World Heritage site. Designed by Ludwig Mies van der Rohe in 1930, it was revolutionary for its time, featuring an open-plan living space, floor-to-ceiling windows, and innovative technologies like air conditioning.\n\nThe villa's history is as compelling as its design, having been confiscated from its Jewish owners, used by the Gestapo, and later serving as the site where the leaders of Czechoslovakia signed the document that dissolved the nation in 1992. It has been meticulously restored to its original glory.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.tugendhat.eu/en/"
                }
        },
        {
                "name": "Brno Ossuary at the Church of St. James",
                "description": "Discovered by accident during construction work in 2001, the Brno Ossuary is the second-largest in Europe, after the Paris Catacombs. It is estimated to hold the remains of over 50,000 people, victims of plagues, cholera, and wars. The bones and skulls have been artfully arranged in a solemn, respectful, and slightly eerie underground exhibition.\n\nThe atmosphere is somber and reflective, enhanced by specially composed music. It offers a unique and moving glimpse into the city's medieval past and the fragility of life. It's a powerful experience quite different from other historical sites.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://ticbrno.cz/en/underground/ossuary-at-the-church-of-st-james"
                }
        },
        {
                "name": "Old Town Hall (Stará radnice)",
                "description": "The oldest secular building in Brno, the Old Town Hall is famous for its collection of local legends. Look up at the main portal to see the 'crooked pinnacle', deliberately bent by its creator, Anton Pilgram, after the city council refused to pay him the agreed price. Inside the main passage, you'll find two of Brno's most famous symbols: the Brno Dragon (actually a stuffed crocodile) and a wooden wagon wheel.\n\nFor a fantastic view, climb the 63-meter-high tower. The climb is rewarded with a stunning 360-degree perspective of the historic city center, making it a favorite spot for photographers.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.gotobrno.cz/en/place/old-town-hall-stara-radnice/"
                }
        },
        {
                "name": "Liberty Square (Náměstí Svobody)",
                "description": "This is Brno's main and largest square, a bustling hub of activity surrounded by grand buildings, shops, and cafes. It has been the city's central point since the 13th century. The square's most talked-about feature is the controversial astronomical clock, a large black marble monument shaped like a bullet cartridge. Every day at 11:00 AM, it releases a glass marble, which locals and tourists try to catch from one of its four openings.\n\nThe square also hosts seasonal markets, including the famous Christmas markets, concerts, and public events, making it a lively place to visit at any time of year.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.gotobrno.cz/en/place/namesti-svobody-liberty-square/"
                }
        },
        {
                "name": "Moravian Karst and Punkva Caves",
                "description": "For a stunning natural escape, head just north of Brno to the Moravian Karst, one of Central Europe's most important karst areas. This protected nature reserve features over 1,100 caverns and gorges. The highlight is a tour of the Punkva Caves, which includes a walk through enormous stalactite and stalagmite-filled chambers and a visit to the bottom of the spectacular Macocha Abyss, a 138-meter-deep gorge.\n\nThe tour culminates in a magical underground boat ride along the subterranean Punkva River. It's a popular day trip and offers a complete change of scenery from the urban environment.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.moravskykras.net/punkva-caves.html"
                }
        },
        {
                "name": "Capuchin Crypt (Kapucínská hrobka)",
                "description": "Beneath the Capuchin Monastery lies one of Brno's more macabre attractions. The unique geological composition of the ground and a system of air vents in the crypt created conditions that naturally mummified the bodies of Capuchin friars and their benefactors buried here in the 17th and 18th centuries.\n\nThe crypt displays these mummified remains in open coffins, offering a stark and sobering reminder of the Baroque motto 'memento mori' – remember you must die. It is a quiet and humbling place that provides a fascinating insight into the order's burial rituals and beliefs.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://hrobka.kapucini.cz/en"
                }
        }
]}
    />
  );
};