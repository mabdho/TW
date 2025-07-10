import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Hanoi: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Hanoi, Vietnam (2025 Guide)"
      description="Planning a trip to Hanoi? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Hanoi Old Quarter",
        "Hoan Kiem Lake & Ngoc Son Temple",
        "Temple of Literature (Văn Miếu - Quốc Tử Giám)",
        "Ho Chi Minh Mausoleum Complex",
        "Vietnam Museum of Ethnology"
]}
      attractions={[
        {
                "name": "Hanoi Old Quarter",
                "description": "The historical heart and soul of Hanoi, the Old Quarter is a fascinating maze of 36 streets, each historically dedicated to a specific craft or trade. This bustling area is a sensory explosion, where the scent of pho broth mingles with the sound of whizzing motorbikes and the sight of colonial-era architecture. Exploring these streets on foot is an essential Hanoi experience.\n\nYou can spend hours wandering through Hang Bac (Silver Street), Hang Gai (Silk Street), and Hang Ma (Paper Votive Street), discovering hidden temples, vibrant markets, and some of the best street food stalls in the world. It’s chaotic, vibrant, and utterly captivating, offering a raw glimpse into the city's commercial and cultural life.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "n/a"
                }
        },
        {
                "name": "Hoan Kiem Lake & Ngoc Son Temple",
                "description": "Hoan Kiem Lake, or 'Lake of the Restored Sword,' is the geographical and spiritual centerpiece of Hanoi. According to legend, Emperor Le Loi returned a magical sword to a Golden Turtle God in this very lake. It's a beloved public space where locals practice tai chi at dawn, couples stroll at sunset, and families gather on weekends when the surrounding roads become pedestrian-only.\n\nIn the middle of the lake, on a small island, sits Ngoc Son Temple (Temple of the Jade Mountain). Accessible via the iconic scarlet-painted Huc Bridge (Bridge of the Rising Sun), the temple is a beautiful example of traditional Vietnamese architecture and a peaceful sanctuary dedicated to historical figures and the legendary turtle.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "hanoi.vietnam.travel"
                }
        },
        {
                "name": "Temple of Literature (Văn Miếu - Quốc Tử Giám)",
                "description": "Founded in 1070, the Temple of Literature is a stunning complex dedicated to Confucius and is home to Vietnam's first national university. This well-preserved site is a rare example of traditional Vietnamese architecture and a serene escape from the city's bustle. Visitors can wander through five distinct courtyards, each with its own significance, from the grand entrance gate to the Well of Heavenly Clarity.\n\nThe most significant features are the 82 stone stelae, mounted on the backs of stone turtles, which bear the names of graduates from royal exams held between the 15th and 18th centuries. It's a place of deep cultural and historical importance, often visited by students praying for good luck in their exams.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "vanmieu.gov.vn"
                }
        },
        {
                "name": "Ho Chi Minh Mausoleum Complex",
                "description": "This imposing complex is one of Vietnam's most important pilgrimage sites. It includes the final resting place of President Ho Chi Minh, a vast granite mausoleum where his embalmed body lies in state. Visiting the mausoleum is a solemn experience with a strict dress code (no shorts, tank tops) and rules of conduct (no talking, hands out of pockets).\n\nBeyond the mausoleum, the complex contains Ho Chi Minh's modest Stilt House, where he lived intermittently from 1958 until his death, the grand Presidential Palace, and the One Pillar Pagoda, a unique 11th-century wooden pagoda built on a single stone pillar. The entire area offers a deep dive into the life of Vietnam's revolutionary leader and modern history.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "bqllang.gov.vn"
                }
        },
        {
                "name": "Vietnam Museum of Ethnology",
                "description": "For a fascinating insight into Vietnam's diverse cultural tapestry, the Museum of Ethnology is a must-visit. The museum showcases the traditions, lifestyles, and cultural artifacts of the 54 officially recognized ethnic groups in Vietnam. The indoor exhibition features beautifully presented displays of clothing, tools, and religious items.\n\nThe real highlight is the outdoor exhibition area, where you can explore life-sized replicas of traditional village houses from various ethnic groups, including a towering Bahnar communal house and an Ede longhouse. It’s an interactive and educational experience that provides a deeper understanding of the country's rich heritage beyond the Kinh majority.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "vme.org.vn"
                }
        },
        {
                "name": "Hoa Lo Prison Relic",
                "description": "Dubbed the 'Hanoi Hilton' by American POWs during the Vietnam War, Hoa Lo Prison has a dark and complex history. Originally built by the French in the late 19th century to incarcerate Vietnamese political prisoners, it was a symbol of colonial oppression. The exhibits detail the horrific conditions and torture endured by Vietnamese revolutionaries.\n\nA separate section is dedicated to its use during the Vietnam War, presenting a contrasting perspective on the treatment of American pilots, including former U.S. Senator John McCain. While much of the original prison was demolished, the remaining gatehouse and galleries offer a poignant and sobering look into Vietnam's turbulent past.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "hoalo.vn"
                }
        },
        {
                "name": "Thang Long Water Puppet Theatre",
                "description": "Water puppetry is a unique Vietnamese art form that originated in the rice paddies of the Red River Delta over a thousand years ago. The Thang Long Water Puppet Theatre, located on the edge of Hoan Kiem Lake, offers an enchanting introduction to this tradition. Puppeteers, hidden behind a screen, manipulate wooden puppets over a pool of water, bringing to life traditional folk tales, legends, and scenes of rural life.\n\nThe performance is accompanied by a live orchestra of traditional Vietnamese musicians and singers, making it a captivating cultural experience for all ages. It’s a delightful, colorful, and often humorous show that provides a fun glimpse into Vietnamese folklore.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "thanglongwaterpuppet.vn"
                }
        },
        {
                "name": "Saint Joseph's Cathedral",
                "description": "A striking piece of neo-Gothic architecture in the heart of Hanoi, Saint Joseph's Cathedral stands in stark contrast to the surrounding pagodas and tube houses. Completed in 1886, it was one of the first structures built by the French colonial government and resembles a smaller version of Notre Dame de Paris. Its weathered facade, twin bell towers, and stunning stained-glass windows make it a major landmark.\n\nThe cathedral serves the local Catholic community, and the area around it has become a trendy hub with cool cafes, boutiques, and street food vendors. It's a great spot to relax with a 'tra chanh' (lemon tea) and people-watch.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "n/a"
                }
        },
        {
                "name": "Vietnamese Women's Museum",
                "description": "This excellent and modern museum offers a tribute to the pivotal role of women in Vietnamese history and society. Through well-curated exhibits, it explores themes of women in family, history, and fashion. You'll learn about marriage rituals, childbirth customs, and the crucial contributions of women during Vietnam's wars of resistance.\nThe fashion section showcases a vibrant collection of costumes from Vietnam's 54 ethnic groups, highlighting the intricate details of their craftsmanship. The museum is insightful, often moving, and provides a powerful narrative that is frequently overlooked in standard historical accounts.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "baotangphunu.org.vn"
                }
        },
        {
                "name": "Long Bien Bridge",
                "description": "A living relic of Hanoi's history, the Long Bien Bridge was designed by Gustave Eiffel's company and completed in 1902. Spanning the Red River, this cantilever bridge was a marvel of engineering for its time. It played a crucial strategic role during the Vietnam War, suffering repeated bombing raids yet always being repaired by the resilient Vietnamese.\n\nToday, the bridge carries trains, motorbikes, and pedestrians, while cars use newer bridges. Walking across it offers fantastic views of the river, banana plantations, and the city skyline. It's a gritty, atmospheric experience that connects you directly to Hanoi's industrial past and enduring spirit.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "n/a"
                }
        }
]}
    />
  );
};