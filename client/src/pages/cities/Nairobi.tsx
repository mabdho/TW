import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Nairobi: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Nairobi, Kenya (2025 Guide)"
      description="Planning a trip to Nairobi? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Nairobi National Park",
        "David Sheldrick Wildlife Trust",
        "Giraffe Centre",
        "Karen Blixen Museum",
        "Bomas of Kenya"
]}
      attractions={[
        {
                "name": "Nairobi National Park",
                "description": "A truly unique experience, Nairobi National Park is the world's only wildlife park situated within a capital city. Just a short drive from the central business district, this pristine grassland is home to a staggering array of wildlife, including four of the Big Five (lions, leopards, rhinos, and buffaloes). The park's iconic backdrop of city skyscrapers juxtaposed with grazing giraffes or a pride of lions is a photographer's dream.\n\nDriving through the park, you can spot black rhinos, which are a critically endangered species, along with zebras, wildebeests, cheetahs, and over 400 species of birds. The Ivory Burning Site Monument, where 12 tons of ivory were burnt in 1989 to protest poaching, is also a poignant stop within the park. A game drive here is an essential Nairobi activity, offering a full safari experience without leaving the city.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "http://www.kws.go.ke/parks/nairobi-national-park"
                }
        },
        {
                "name": "David Sheldrick Wildlife Trust",
                "description": "For an incredibly heartwarming experience, visit the David Sheldrick Wildlife Trust, a world-renowned orphan elephant and rhino rescue and rehabilitation program. The nursery, located on the edge of Nairobi National Park, cares for baby elephants who have been orphaned due to poaching or other human-wildlife conflict. During the public viewing hour, you can watch the adorable calves being fed from giant milk bottles, playfully rolling in the mud, and interacting with their keepers.\n\nThe keepers provide an informative talk about each elephant's story, their conservation efforts, and the challenges they face. You can also 'adopt' an orphan elephant, which helps fund their care and eventual reintegration into the wild. It’s an inspiring and educational visit that directly supports a vital conservation cause.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.sheldrickwildlifetrust.org"
                }
        },
        {
                "name": "Giraffe Centre",
                "description": "Get up close and personal with the endangered Rothschild's giraffe at the Giraffe Centre. This conservation and education center allows visitors to feed these gentle giants from a raised wooden platform, putting you at eye level with their magnificent heads. It's a thrilling moment when a giraffe extends its long, purple tongue to take a food pellet right from your hand.\n\nThe center was established to protect the Rothschild's giraffe, and your entrance fee contributes to their breeding and conservation programs across Kenya. Staff are on hand to provide fascinating facts about the giraffes and their conservation status. Across the road, you can also take a self-guided nature walk through the Gogo River Bird Sanctuary.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.giraffecentre.org"
                }
        },
        {
                "name": "Karen Blixen Museum",
                "description": "Step back in time at the former home of Danish author Karen Blixen, who famously wrote 'Out of Africa' under the pen name Isak Dinesen. The beautifully preserved colonial farmhouse and its lush gardens offer a glimpse into the life of this celebrated writer and the early days of colonial Kenya. The museum is located in the suburb of Karen, which was named after her.\n\nA guided tour takes you through rooms filled with Blixen's original furniture, photographs, and personal effects. The grounds themselves are serene, with stunning views of the nearby Ngong Hills, which featured so prominently in her writing. It's a must-visit for literature lovers, history buffs, and anyone captivated by the romance of a bygone era in Africa.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.museums.or.ke/karen-blixen/"
                }
        },
        {
                "name": "Bomas of Kenya",
                "description": "Experience Kenya's incredible cultural diversity at Bomas of Kenya. This living museum showcases the traditional homesteads (bomas) of several Kenyan ethnic groups. You can wander through replicas of villages from the Luhya, Maasai, Kikuyu, Taita, and many other communities, gaining insight into their unique architectural styles and ways of life.\n\nThe highlight for many visitors is the spectacular afternoon performance in the large theatre. Dancers and musicians in traditional attire perform energetic and captivating songs and dances from different regions of the country. It's a vibrant, colorful, and educational celebration of Kenya's rich cultural tapestry, all in one place.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.bomasofkenya.co.ke"
                }
        },
        {
                "name": "Kazuri Beads Factory",
                "description": "Kazuri, meaning 'small and beautiful' in Swahili, is a social enterprise that employs disadvantaged local women, primarily single mothers, to create stunning handmade ceramic beads and pottery. A visit to their workshop in Karen is both a shopping opportunity and an inspiring look at a successful community empowerment project. You can take a free tour of the factory to see the entire bead-making process, from the molding of the clay to the glazing and firing.\n\nThe finished products—vibrant necklaces, bracelets, earrings, and pottery—are sold in the on-site shop. Purchasing a piece of Kazuri jewelry means taking home a unique, handcrafted souvenir that directly supports the artisans and their families. It's a wonderful place to find meaningful gifts and appreciate local craftsmanship.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.kazuri.com"
                }
        },
        {
                "name": "Maasai Market",
                "description": "For the ultimate Kenyan souvenir shopping experience, head to a Maasai Market. This is not a single location but a vibrant open-air market that moves to different venues around Nairobi on different days of the week. Here, you'll find a dizzying array of handcrafted goods, from beaded jewelry and leather sandals to wooden carvings, sisal bags ('kiondos'), and colorful Maasai 'shukas' (blankets).\n\nHaggling is expected and part of the experience, so be prepared to negotiate prices with a friendly attitude. It's a fantastic place to interact with local artisans and find unique, authentic souvenirs. Always keep your belongings secure, as the markets can get very crowded.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "No official website. Local city guides provide updated schedules."
                }
        },
        {
                "name": "Nairobi National Museum",
                "description": "The Nairobi National Museum offers a comprehensive introduction to Kenya's rich heritage and natural history. Situated on Museum Hill, it houses impressive collections that cover everything from paleontology to contemporary Kenyan art. The highlight is the Hall of Kenya, which details the nation's history, culture, and peoples. Don't miss the Cradle of Humankind exhibit, featuring an extensive collection of early human fossils found in the region.\n\nThe museum complex also includes the Snake Park and a botanical garden, making it a full day's outing. The art gallery showcases works from leading East African artists, providing a snapshot of the region's dynamic creative scene. It's the perfect place to build a foundation of knowledge before exploring the rest of the country.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.museums.or.ke/nairobi-national-museum/"
                }
        }
]}
    />
  );
};