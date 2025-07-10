import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Asuncin: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Asunción, Paraguay (2025 Guide)"
      description="Planning a trip to Asunción? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Palacio de los López",
        "Panteón Nacional de los Héroes",
        "Costanera de Asunción",
        "Museo del Barro",
        "Mercado Cuatro"
]}
      attractions={[
        {
                "name": "Palacio de los López",
                "description": "Dominating the city's skyline along the bay, the Palacio de los López is the official workplace of the President of Paraguay and the seat of government. This stunning, U-shaped palace, built in the mid-19th century, is a masterpiece of Neoclassical and Palladian architecture. Its crisp white façade and elegant colonnades are particularly breathtaking at night when illuminated by floodlights, casting a golden glow that reflects in the nearby Paraguay River.\n\nWhile access to the interior is restricted for security reasons, the building's exterior is one of Asunción's most iconic photo opportunities. Strolling around its perimeter provides a sense of the nation's political history and architectural grandeur. The changing of the guard ceremony, though less frequent than at other presidential palaces, is a formal and impressive spectacle if you're lucky enough to catch it.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A (Official government site has limited tourist info)"
                }
        },
        {
                "name": "Panteón Nacional de los Héroes",
                "description": "A site of immense national pride and solemn remembrance, the Panteón Nacional de los Héroes is Paraguay's national mausoleum. Consecrated in 1936, this impressive structure was modeled after Les Invalides in Paris and holds the remains of the country's greatest military heroes, including Mariscal Francisco Solano López from the War of the Triple Alliance. The tomb of the unknown soldier is also located here.\n\nThe building itself is a beautiful example of neo-baroque architecture, with a soaring central dome and ornate detailing. Inside, the hushed atmosphere invites contemplation of the nation's turbulent past. Two soldiers stand in perpetual guard, and visitors can witness the formal changing of the guard ceremony throughout the day. It is an essential stop for understanding Paraguay's history and reverence for its national figures.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Costanera de Asunción",
                "description": "The Costanera is Asunción's revitalized riverfront promenade, a wide, modern space that has become the city's favorite recreational hub. Stretching along the Bay of Asunción, it offers a refreshing escape from the urban hustle and provides beautiful views of the Paraguay River and the downtown skyline, including a fantastic perspective of the Palacio de los López.\n\nLocals flock here, especially in the late afternoons and on weekends, to walk, jog, cycle, or simply relax with friends and family while sipping the ubiquitous tereré. With a dedicated bike path, playgrounds, and occasional food vendors, it's a lively and welcoming space for everyone. A stroll along the Costanera at sunset is a quintessential Asunción experience.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Museo del Barro",
                "description": "Arguably the most important cultural institution in Paraguay, the Museo del Barro (Museum of Clay) is a must-visit for anyone interested in Paraguayan and Latin American art. The museum ingeniously divides its collection into three sections: pottery (indigenous and contemporary ceramics), a museum of indigenous art (featuring featherwork, masks, and textiles), and a collection of contemporary Paraguayan and Latin American paintings and drawings.\n\nThis unique structure allows you to journey through Paraguay's artistic soul, from pre-Columbian artifacts to modern political satire. The exhibits are thoughtfully curated and provide deep insights into the nation's diverse cultural identity. It's an intellectually stimulating and visually stunning experience that showcases a side of Paraguay many visitors miss.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "www.museodelbarro.org"
                }
        },
        {
                "name": "Mercado Cuatro",
                "description": "For a full-sensory immersion into the daily life of Asunción, there is no place like Mercado Cuatro. This sprawling, chaotic, and utterly fascinating market covers several city blocks and is where locals come to buy... well, everything. From fresh produce, meats, and cheeses to electronics, clothing, and traditional herbs for making tereré and medicinal teas (yuyos), the market is a vibrant labyrinth of sights, sounds, and smells.\n\nNavigating its crowded aisles is an adventure in itself. It's the perfect place to try authentic street food like chipa or mbeju, practice your Spanish with friendly vendors, and witness the city's commercial pulse. While you should keep a close eye on your belongings, the energy and authenticity of Mercado Cuatro make it an unforgettable experience.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Loma San Jerónimo",
                "description": "Nestled near the city center, Loma San Jerónimo is Asunción's first revitalized neighborhood and a testament to community spirit. This small, hilly barrio has been transformed into a vibrant open-air museum with brightly painted houses, quirky street art, and narrow, charming alleyways. It feels a world away from the formal government buildings just a short walk away.\n\nVisitors can wander its colorful streets, enjoy panoramic views of the river and downtown, and stop at one of the small, family-run cafes for a coffee or a traditional meal. The neighborhood is particularly lively on weekends when local artisans sometimes set up stalls. It's a joyful and picturesque spot that showcases the creative energy of Asunción's residents.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A (Community-run Facebook pages often post updates)"
                }
        },
        {
                "name": "Jardín Botánico y Zoológico de Asunción",
                "description": "Spanning over 270 acres, the Botanical Garden and Zoo offers a vast green lung for the city. Originally the 19th-century estate of President Carlos Antonio López, it's now a place where nature, history, and recreation converge. The botanical garden section is a peaceful oasis with towering native trees, shady paths, and diverse plant life, perfect for a relaxing stroll.\n\nThe adjacent zoo houses a collection of native South American animals, including jaguars, tapirs, and the Chacoan peccary. While the enclosures reflect a more traditional style, it provides an opportunity to see regional fauna. The park also contains the former López residence, a historic mansion that now functions as a natural history museum.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Manzana de la Rivera",
                "description": "Facing the Palacio de los López, the Manzana de la Rivera (Rivera Block) is a cultural complex comprised of nine restored historical houses. Each building showcases a different architectural style and era of Asunción's history, creating a beautiful and cohesive whole. The most famous house is the Casa Viola, a fine example of late colonial architecture and one of the oldest surviving buildings in the city.\n\nToday, the complex houses the city's municipal museum, art galleries, a library, a theater, and a charming café. It's a wonderfully preserved slice of old Asunción and a hub for cultural events and exhibitions. Walking through its connected patios and rooms feels like stepping back in time.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "www.manzanadelarivera.org.py"
                }
        }
]}
    />
  );
};