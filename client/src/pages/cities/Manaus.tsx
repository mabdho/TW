import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Manaus: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Manaus, Brazil (2025 Guide)"
      description="Planning a trip to Manaus? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Teatro Amazonas (Amazon Theatre)",
        "Meeting of Waters (Encontro das Águas)",
        "Anavilhanas National Park",
        "Mercado Adolpho Lisboa",
        "Ponta Negra Beach"
]}
      attractions={[
        {
                "name": "Teatro Amazonas (Amazon Theatre)",
                "description": "An opulent symbol of the city's golden age during the late 19th-century rubber boom, the Teatro Amazonas is an architectural masterpiece set improbably in the middle of the jungle. Its magnificent Renaissance-style dome, laid with 36,000 tiles in the colors of the Brazilian flag, is a beacon in the city skyline. The interior is just as lavish, featuring Italian marble, French furniture, and Venetian Murano glass chandeliers.\n\nTaking a guided tour reveals the fascinating history behind its construction and the immense wealth that poured into Manaus. If possible, attending a performance by the Amazonas Philharmonic Orchestra is an unforgettable experience, allowing you to appreciate the theater's superb acoustics and soak in its historic grandeur.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "www.cultura.am.gov.br/teatro-amazonas/"
                }
        },
        {
                "name": "Meeting of Waters (Encontro das Águas)",
                "description": "One of nature's most stunning spectacles, the Meeting of Waters is where the dark, acidic Rio Negro and the sandy, sediment-rich Rio Solimões meet to form the mighty Amazon River. For over six kilometers, the two rivers flow side-by-side without mixing due to differences in temperature, speed, and density, creating a distinct two-toned line in the water.\n\nThis phenomenon is best experienced on a boat tour, which is a staple of any Manaus itinerary. Most tours depart from the Port of Manaus and often include other activities like visiting a floating village, seeing water lilies (Vitória Régia), and searching for wildlife along the riverbanks. It's a powerful visual representation of the forces that shape the Amazon.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A (Book through local tour agencies or at the port)."
                }
        },
        {
                "name": "Anavilhanas National Park",
                "description": "A UNESCO World Heritage site, Anavilhanas is a breathtaking freshwater river archipelago on the Rio Negro, comprising around 400 islands. It is one of the largest of its kind in the world, forming a labyrinth of channels, lakes, and flooded forests (igapós). The park is a sanctuary for an incredible array of biodiversity, including pink river dolphins, manatees, giant otters, jaguars, and hundreds of bird species.\n\nVisiting Anavilhanas is an immersive Amazon experience. During the dry season (July-December), white sand beaches emerge, perfect for relaxing and hiking. In the rainy season (January-June), the high water levels allow for canoe trips deep into the flooded forest. Most visits are arranged through multi-day stays at jungle lodges located within or near the park.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "www.icmbio.gov.br/parnaanavilhanas/"
                }
        },
        {
                "name": "Mercado Adolpho Lisboa",
                "description": "Modeled after the famous Les Halles market in Paris, the Mercado Adolpho Lisboa is Manaus's main public market. Its intricate cast-iron structure was designed by Gustave Eiffel's firm and shipped from Europe, another testament to the rubber boom's extravagance. The market is a sensory explosion, bustling with activity, colors, and smells.\n\nInside, you'll find a vast array of local products. One pavilion is dedicated to fresh fish, including giant pirarucu and tambaqui. Another section bursts with exotic Amazonian fruits, vegetables, medicinal herbs, and spices. It's also a great place to buy authentic handicrafts and souvenirs. Stop at one of the small eateries to try a classic Amazonian dish like Tacacá soup or a fresh fruit juice.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Ponta Negra Beach",
                "description": "Praia da Ponta Negra is the city's most popular urban river beach, located in an upscale neighborhood about 13 km from the city center. It's not an ocean beach, but a wide stretch of sand on the banks of the dark Rio Negro. The beach is a vibrant hub of activity, especially on weekends, where locals come to swim, sunbathe, play volleyball, and relax.\n\nThe recently revitalized waterfront promenade (calçadão) is lined with kiosks (barracas) selling cold drinks, coconuts, and classic Amazonian snacks. In the evening, the area comes alive with people jogging, cycling, and enjoying the sunset over the river. Note that the beach's size varies dramatically with the season; it's vast in the dry season and almost disappears during the high water months.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "MUSA - Museu da Amazônia (Amazon Museum)",
                "description": "The MUSA is not a traditional museum but a 100-hectare living laboratory within the Adolpho Ducke Forest Reserve. It's a fantastic place to experience the Amazon's flora and fauna without venturing too far from the city. Well-maintained forest trails lead you through primary rainforest, past exhibits on indigenous cultures, a serpentarium, an orchid house, and a pond with giant water lilies.\n\nThe undeniable highlight is the 42-meter-high observation tower. Climbing its 242 steps rewards you with a breathtaking panoramic view above the forest canopy, offering a perspective usually reserved for birds. It's an excellent spot for birdwatching and photography.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "museudaamazonia.org.br"
                }
        },
        {
                "name": "Palácio Rio Negro",
                "description": "Originally the lavish home of a German rubber baron, this palace later became the seat of the Amazonas state government. Today, the Palácio Rio Negro stands as a beautiful cultural center, offering a glimpse into the opulent lifestyle of the rubber boom elite. The architecture is eclectic and grand, and the restored rooms are filled with period furniture, art, and historical artifacts.\n\nVisitors can freely wander through the main building's stately rooms, including the former governor's office and reception halls. The grounds also house a small art gallery and often host temporary exhibitions and cultural events. It's a quick but worthwhile stop that adds another layer to understanding Manaus's unique history.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "www.cultura.am.gov.br/palacio-rio-negro/"
                }
        },
        {
                "name": "Jaú National Park",
                "description": "For the truly adventurous, Jaú National Park offers an unparalleled deep-Amazon experience. As a UNESCO World Heritage site, it's one of the largest protected tropical rainforest areas in the world. The park is a vast expanse of pristine, untouched nature, characterized by blackwater rivers, dense jungle, and an extremely high level of biodiversity, including endangered species like the jaguar, giant otter, and Amazonian manatee.\n\nA trip to Jaú is a serious expedition, not a day trip. It requires a licensed tour operator and a multi-day boat journey from Novo Airão. Visitors sleep on board expedition boats, explore remote tributaries by canoe, hike through virgin forest, and visit sparse riverside communities (caboclos). This is immersion at its most profound.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "www.icmbio.gov.br/parna-jau/"
                }
        },
        {
                "name": "Swim with Pink River Dolphins",
                "description": "The 'boto', or Amazon pink river dolphin, is a mythical and fascinating creature unique to the freshwater systems of South America. Many river tours on the Rio Negro offer the chance for a controlled interaction with these gentle animals. These encounters take place at floating platforms where local families have habituated the dolphins to their presence through feeding.\n\nWhile standing on a submerged platform, you can feel the curious dolphins swim around your legs. It's a unique opportunity to see these incredible animals up close. It's important to choose responsible tour operators who prioritize the animals' welfare and follow strict guidelines to ensure the interaction is safe for both humans and dolphins.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A (Book through local tour agencies)."
                }
        },
        {
                "name": "CIGS Zoo (Bosque da Ciência)",
                "description": "Operated by the Brazilian Army's Jungle Warfare Training Center (CIGS), this is more of a conservation center than a traditional zoo. It houses Amazonian animals that have been rescued from trafficking or were injured and cannot be returned to the wild. This provides a rare chance to see iconic and elusive creatures like jaguars, pumas, monkeys, tapirs, and giant anacondas in a safe environment.\n\nThe enclosures are designed to mimic the animals' natural habitats, and the facility plays a crucial role in environmental education. The zoo is relatively small but well-maintained, making it an easy and educational half-day trip, especially for families.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "www.cigs.eb.mil.br/zoo-do-cigs"
                }
        }
]}
    />
  );
};