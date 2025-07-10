import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Johannesburg: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Johannesburg, South Africa (2025 Guide)"
      description="Planning a trip to Johannesburg? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Apartheid Museum",
        "Soweto Tour & Vilakazi Street",
        "Constitution Hill Human Rights Precinct",
        "Cradle of Humankind",
        "Maboneng Precinct"
]}
      attractions={[
        {
                "name": "Apartheid Museum",
                "description": "No visit to Johannesburg is complete without a powerful and sobering journey through the Apartheid Museum. This world-class institution chronicles the rise and fall of South Africa's era of racial segregation. Upon entry, visitors are randomly assigned a 'white' or 'non-white' classification, forcing an immediate, visceral understanding of the arbitrary nature of apartheid. The exhibits are masterfully curated, using film, photography, artifacts, and personal accounts to guide you through the decades of oppression, the struggle for democracy, and the path to reconciliation led by Nelson Mandela.\n\nSet aside several hours for your visit, as the experience is deeply immersive and emotionally resonant. It provides essential context for understanding modern South Africa and is a profound tribute to the human spirit's triumph over injustice. It is unequivocally one of the most important cultural sites in the country.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.apartheidmuseum.org/"
                }
        },
        {
                "name": "Soweto Tour & Vilakazi Street",
                "description": "Soweto (South Western Townships) is a symbol of resistance and freedom, pulsating with history and vibrant street life. Taking a guided tour is the best way to understand its complex past and dynamic present. Tours typically cover key landmarks, including the Hector Pieterson Memorial and Museum, dedicated to the students of the 1976 Soweto Uprising, and the iconic Orlando Towers, often used for bungee jumping.\n\nThe tour's centerpiece is Vilakazi Street, the only street in the world to have been home to two Nobel Peace Prize laureates: Nelson Mandela and Archbishop Desmond Tutu. You can visit Mandela's former home, now the Nelson Mandela National Museum. Exploring Soweto offers an unparalleled insight into the heart of the anti-apartheid struggle and the resilient, creative culture that thrives there today.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.soweto.co.za/"
                }
        },
        {
                "name": "Constitution Hill Human Rights Precinct",
                "description": "Constitution Hill is a living museum that tells the story of South Africa's journey to democracy. This site was formerly a notorious prison complex, where political prisoners like Nelson Mandela and Mahatma Gandhi were once incarcerated. Today, it is home to the country's Constitutional Court, the highest court in the land and a beacon of hope and human rights.\n\nA tour takes you through the harrowing Old Fort, the Women's Gaol, and the infamous Number Four prison block. The contrast between the oppressive old prison and the inspiring, modern architecture of the Constitutional Court is incredibly powerful. It’s a place of reflection on a painful past and a celebration of a hard-won democratic future.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.constitutionhill.org.za/"
                }
        },
        {
                "name": "Cradle of Humankind",
                "description": "Just an hour's drive from Johannesburg lies a UNESCO World Heritage Site that holds the secrets to our human origins. The Cradle of Humankind is a vast paleoanthropological site that has produced some of the oldest and most significant hominin fossils ever found, including 'Mrs. Ples' and 'Little Foot'. The primary visitor centers are the Maropeng Visitor Centre and the Sterkfontein Caves.\n\nMaropeng offers an interactive, multi-sensory journey through the formation of our planet and the evolution of life. The Sterkfontein Caves are an active excavation site where you can take a guided tour deep into the caverns where many of the fossils were discovered. It’s a fascinating and humbling experience that connects you to the deep history of humanity.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.maropeng.co.za/"
                }
        },
        {
                "name": "Maboneng Precinct",
                "description": "Maboneng, meaning 'Place of Light' in Sotho, is the poster child for Johannesburg's urban renewal. This once-derelict industrial area has been transformed into a thriving, creative hub brimming with art galleries, independent cinemas, quirky boutiques, and an eclectic mix of restaurants and cafes. It's a vibrant, walkable neighborhood where street art adorns almost every wall.\n\nThe heart of the precinct is Arts on Main, a complex that hosts galleries, studios, and the popular Sunday Neighbourgoods Market. Spend an afternoon exploring the shops, grabbing a coffee at a street-side cafe, and soaking in the energetic, artistic atmosphere. Maboneng represents the new, forward-looking spirit of Johannesburg and is a fantastic place to experience the city's modern culture.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://mabonengprecinct.com/"
                }
        },
        {
                "name": "Gold Reef City",
                "description": "For a dose of fun and history combined, head to Gold Reef City. This amusement park is built on the site of an old gold mine, and it masterfully theme-packs the heady days of the 1880s Johannesburg gold rush. The park offers a thrilling mix of adrenaline-pumping roller coasters and family-friendly rides, all set against a backdrop of period architecture.\n\nBeyond the rides, the main attraction is the underground mine tour, where you descend 220 meters below ground to experience the dark, cramped conditions of a real gold mine. You can also watch a live gold-pouring demonstration. It's an entertaining way to learn about the industry that gave birth to Johannesburg, making it a great day out for all ages.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.goldreefcity.co.za/"
                }
        },
        {
                "name": "Johannesburg Art Gallery (JAG)",
                "description": "Housed in a beautiful building designed by British architect Edwin Lutyens, the Johannesburg Art Gallery (JAG) boasts the largest public collection of modern and contemporary art on the African continent. The collection is extensive and diverse, featuring 17th-century Dutch paintings, 19th-century British and European art, and a significant collection of South African works.\n\nThe gallery's strength lies in its comprehensive showcase of local talent, from historical pieces to cutting-edge contemporary installations. It provides a visual narrative of South Africa's complex social and political history through art. Located in the tranquil Joubert Park, it's a cultural oasis in the heart of the bustling city.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "http://www.friendsofjag.org/"
                }
        },
        {
                "name": "Neighbourgoods Market",
                "description": "Every Saturday, the Neighbourgoods Market transforms a multi-story car park in the Braamfontein neighborhood into a foodie paradise. This vibrant, bustling market is the place to be for locals and tourists alike, offering a spectacular array of artisanal foods, craft beers, and creative cocktails. From paella and oysters to gourmet burgers and vegan treats, the culinary options are endless.\n\nThe atmosphere is electric, with live music creating a festive vibe. Grab a dish, find a spot on the rooftop terrace, and enjoy fantastic views of the city skyline. It's a social event as much as a market, perfectly capturing Joburg's trendy, urban spirit. Arrive early as it gets very crowded by lunchtime.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.neighbourgoodsmarket.co.za/"
                }
        }
]}
    />
  );
};