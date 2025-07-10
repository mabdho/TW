import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Vilnius: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Vilnius, Lithuania (2025 Guide)"
      description="Planning a trip to Vilnius? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Vilnius Old Town (Senamiestis)",
        "Gediminas' Castle Tower",
        "Vilnius Cathedral and Cathedral Square",
        "Trakai Island Castle",
        "Republic of Užupis"
]}
      attractions={[
        {
                "name": "Vilnius Old Town (Senamiestis)",
                "description": "The heart and soul of Vilnius, its Old Town is one of the largest and best-preserved medieval old towns in Northern Europe. A designated UNESCO World Heritage site, it’s a captivating maze of narrow, winding cobblestone streets, charming courtyards, and magnificent architecture. Spanning styles from Gothic to Renaissance and especially Baroque, every corner reveals a new visual delight, from grand squares to hidden alleys.\n\nSimply getting lost here is the best way to explore. You'll stumble upon artisan shops, cozy cafes, and countless churches, each with its own story. The atmosphere is magical, seamlessly blending centuries of history with a lively, contemporary buzz. It's the perfect starting point for any visit and an attraction you will return to again and again.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.govilnius.lt/visit-vilnius/places/vilnius-old-town"
                }
        },
        {
                "name": "Gediminas' Castle Tower",
                "description": "Perched atop a hill overlooking the city, Gediminas' Tower is the most potent symbol of Vilnius and Lithuania itself. It's the last remaining part of the Upper Castle, which dates back to the 15th century. According to legend, Grand Duke Gediminas dreamt of an iron wolf howling on this hill, which a pagan priest interpreted as a sign to build a great city here.\n\nA short but steep walk or a quick funicular ride takes you to the top. Inside the red-brick tower is a small museum detailing the castle's history. However, the main draw is the panoramic 360-degree view from the rooftop platform, offering a breathtaking perspective of the Old Town's red roofs, the modern city skyline, and the winding Neris River.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://lnm.lt/en/divisions/gediminas-castle-tower/"
                }
        },
        {
                "name": "Vilnius Cathedral and Cathedral Square",
                "description": "Dominating the vast Cathedral Square, the striking white facade of the Vilnius Cathedral is an unmissable landmark. Its clean, Neoclassical design, reminiscent of a Greek temple, is unique among the city's mostly Baroque churches. This site has been a place of worship for centuries, originally for the pagan god Perkūnas before Lithuania's conversion to Christianity. Inside, the magnificent St. Casimir's Chapel is a Baroque masterpiece.\n\nAdjacent to the Cathedral stands the freestanding Bell Tower, a former defensive tower of the city wall. You can climb it for a fantastic view of the square and Gediminas' Hill. The square itself is the city's main public space, hosting concerts, festivals, and the national Christmas tree.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.katedra.lt/en/"
                }
        },
        {
                "name": "Trakai Island Castle",
                "description": "A fairytale escape just outside Vilnius, Trakai Island Castle is one of Lithuania's most iconic sights. Located about 28 km west of the city, this stunning 14th-century Gothic castle sits picturesquely on an island in Lake Galvė. It once served as a crucial military and political center for the Grand Duchy of Lithuania and was the residence of its rulers.\n\nAfter being restored to its former glory in the 20th century, the castle now houses a museum showcasing its history. Visitors can walk across a wooden footbridge to the island, explore the castle's halls, courtyards, and towers, and learn about the unique Karaite ethnic minority who have lived in Trakai for centuries. Don't leave without trying 'kibinai', a traditional Karaite pastry, from one of the local cafes.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://trakaimuziejus.lt/en/trakai-island-castle/"
                }
        },
        {
                "name": "Republic of Užupis",
                "description": "Cross a bridge over the Vilnia River and you enter another world: the Republic of Užupis. This small neighborhood, often compared to Montmartre in Paris or Freetown Christiania in Copenhagen, declared itself an independent republic on April 1, 1997. It has its own president, flag, anthem, and a quirky constitution displayed in multiple languages on a wall along Paupio Street.\n\nUžupis is a haven for artists, dreamers, and free spirits. The area is filled with art installations, galleries, workshops, and bohemian cafes. The main symbol is the 'Angel of Užupis' in the central square, representing artistic freedom. It's a place to wander without a plan, enjoy the creative atmosphere, and appreciate a community that values humor and creativity above all else.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://uzupis.today/en/"
                }
        },
        {
                "name": "St. Anne's Church and Bernardine Church",
                "description": "The St. Anne's Church and Bernardine Church complex is a breathtaking example of Flamboyant Gothic architecture. St. Anne's, with its intricate facade of 33 different types of brick, is so beautiful that Napoleon Bonaparte supposedly wished he could carry it back to Paris in the palm of his hand. It's a true masterpiece of late Gothic style, seemingly delicate and ornate.\n\nRight behind it stands the much larger and more imposing Bernardine Church, a mix of Gothic, Renaissance, and Baroque elements. Together, they create one of Vilnius's most stunning architectural ensembles. Visitors can explore the rich interiors of both churches, which stand as a testament to the city's deep religious and architectural history.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.govilnius.lt/visit-vilnius/places/church-of-st-anne-and-bernardine-church-ensemble"
                }
        },
        {
                "name": "Museum of Occupations and Freedom Fights (KGB Museum)",
                "description": "For a sobering and essential understanding of Lithuania's 20th-century history, a visit to this museum is a must. Housed in the former headquarters of the Gestapo and, more notoriously, the Soviet KGB, the building itself is a chilling artifact. The upper floors document the brutal 50-year Soviet occupation, the partisan resistance, and the deportations to Siberian gulags.\n\nThe most haunting part of the museum is in the basement: the preserved KGB prison cells, interrogation rooms, and execution chamber. It's a powerful and deeply moving experience that provides crucial context for the resilience and spirit of the Lithuanian people. It is not an easy visit, but it is an unforgettable one.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://genocid.lt/muziejus/en/"
                }
        },
        {
                "name": "Gates of Dawn (Aušros Vartai)",
                "description": "The Gates of Dawn is the only surviving gate of the original nine that once formed the city's defensive wall. More than just a historical structure, it's one of the most important religious, historical, and cultural monuments in Lithuania. Above the gate archway is a small chapel housing the revered icon of The Blessed Virgin Mary, Mother of Mercy.\n\nBelieved to have miraculous powers, the icon draws pilgrims from all over the world. You'll often see people praying on the street below, looking up at the chapel window. Visitors can go inside the beautiful chapel to see the golden icon up close. It's a place of profound peace and spirituality, even for non-religious visitors.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.ausrosvartai.lt/en/"
                }
        },
        {
                "name": "Palace of the Grand Dukes of Lithuania",
                "description": "Located behind Vilnius Cathedral, this magnificent palace is a reconstruction of the original residence of the Grand Dukes of Lithuania, which was demolished in the 19th century. Reopened in 2013, the palace serves as a national museum, bringing the history of the Grand Duchy to life. The original palace was the political, diplomatic, and cultural heart of the state for centuries.\n\nThe museum is divided into four main exhibition routes, showcasing the historical and architectural development of the palace, its restored ceremonial halls, and a vast collection of artifacts. It's a fascinating deep-dive into the golden age of Lithuania and offers a stark contrast to the more recent history of occupation.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.valdovurumai.lt/en"
                }
        },
        {
                "name": "Literatai Street (Literatų gatvė)",
                "description": "Literatai Street is a unique open-air gallery dedicated to the world of literature. In 2008, a group of artists decided to pay homage to Lithuanian and foreign authors who have a connection to Vilnius and Lithuania. They began embedding small, artistic plaques—made of metal, wood, glass, or ceramic—into the street's wall, each one representing a different writer.\n\nToday, the wall features over 200 of these miniature artworks, creating a fascinating and eclectic tribute. It's a joy to walk down the street and examine each unique piece, discovering names you recognize and learning about new ones. It perfectly encapsulates Vilnius's creative spirit and its deep appreciation for culture and history.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.govilnius.lt/visit-vilnius/places/literatai-street"
                }
        }
]}
    />
  );
};