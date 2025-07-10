import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Oaxaca: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Oaxaca, Mexico (2025 Guide)"
      description="Planning a trip to Oaxaca? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Monte Albán Archaeological Site",
        "Hierve el Agua",
        "Templo de Santo Domingo de Guzmán",
        "Explore a Mezcal Distillery",
        "Oaxaca's Zócalo (Plaza de la Constitución)"
]}
      attractions={[
        {
                "name": "Monte Albán Archaeological Site",
                "description": "Perched on a flattened mountaintop overlooking the Oaxaca Valley, Monte Albán is one of the most significant archaeological sites in Mesoamerica. For over 1,500 years, this was the sacred capital of the Zapotec civilization. As you wander through the Gran Plaza, you can explore ancient pyramids, temples, a ball court, and mysterious tombs. The panoramic views of the surrounding valleys are as breathtaking as the history itself.\n\nThe site's most intriguing features include the 'Danzantes' (Dancers), a series of stone slabs with carved figures in contorted poses, and the incredible engineering feat of leveling the entire mountaintop. Visiting early in the morning allows you to experience the ruins in the soft light with fewer crowds, making the ancient city feel even more majestic and serene.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.inah.gob.mx/zonas/96-zona-arqueologica-de-monte-alban"
                }
        },
        {
                "name": "Hierve el Agua",
                "description": "Hierve el Agua, meaning 'the water boils,' is a stunning natural wonder featuring two large, petrified waterfalls. Formed over thousands of years by mineral-rich spring water trickling over the cliff edge, these 'cascadas' create the illusion of frozen cascades. At the top, you'll find a series of man-made and natural pools, perfect for a refreshing dip with spectacular views of the Sierra Madre mountains.\n\nThere are two main waterfalls, Cascada Chica and Cascada Grande. Visitors can hike the trails around the area to get different perspectives of the formations and the valley below. It's a popular day trip, often combined with visits to Mitla or a mezcal distillery, offering a perfect blend of natural beauty and relaxation.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A (Community-run site)"
                }
        },
        {
                "name": "Templo de Santo Domingo de Guzmán",
                "description": "This magnificent 16th-century church is the crown jewel of Oaxaca's architecture and a stunning example of Mexican Baroque. While its fortress-like exterior is imposing, the interior is a breathtaking spectacle of gilded ornamentation and intricate plasterwork. Every inch of the ceiling and walls is covered in elaborate gold leaf, sculptures, and paintings, culminating in a spectacular family tree of the Dominican order above the entrance.\n\nAdjacent to the church is the former monastery, which now houses the Museo de las Culturas de Oaxaca. The sheer opulence and detailed craftsmanship make the Templo de Santo Domingo a must-see, whether for its religious significance, historical importance, or simply its overwhelming beauty.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Explore a Mezcal Distillery",
                "description": "Oaxaca is the birthplace of mezcal, and no trip is complete without discovering the magic behind this iconic spirit. Venture out of the city to Santiago Matatlán, the 'World Capital of Mezcal,' or visit smaller artisanal 'palenques' scattered throughout the Tlacolula Valley. Here, you can witness the entire traditional process, from roasting agave hearts (piñas) in earthen pits to crushing them with a stone wheel (tahona) and distilling the fermented mash in copper stills.\n\nMost tours offer guided tastings where you can learn to appreciate the complex, smoky flavors of different mezcals, from the common Espadín agave to wild varieties like Tobalá or Tepeztate. It's a fascinating cultural and sensory experience that provides a deep appreciation for the craft.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "Varies by distillery (e.g., El Rey de Matatlán, Gracias a Dios)."
                }
        },
        {
                "name": "Oaxaca's Zócalo (Plaza de la Constitución)",
                "description": "The Zócalo is the vibrant, beating heart of Oaxaca City. Shaded by massive laurel trees, this bustling main square is framed by beautiful colonial arcades, the Government Palace, and the Oaxaca Cathedral. It's the social and cultural center of the city, where locals and tourists gather from morning until late at night.\n\nFind a seat at one of the many outdoor cafes to enjoy a coffee or a meal while listening to marimba bands, watching street performers, and soaking in the lively atmosphere. The Zócalo is constantly buzzing with activity, from vendors selling balloons and crafts to local protests and festive celebrations. It’s the perfect place to begin your exploration of Oaxaca and to return to whenever you need a break.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Jardín Etnobotánico de Oaxaca",
                "description": "Located in the former monastery gardens of the Santo Domingo cultural center, the Jardín Etnobotánico is a beautifully curated space showcasing the vast biodiversity of Oaxaca. The garden exclusively features plants native to the state, highlighting the deep relationship between the region's flora and its indigenous cultures. The collection is organized by ecological and cultural themes, showing how plants are used for food, medicine, textiles, and rituals.\n\nThe garden can only be visited on a guided tour (offered in English and Spanish), which is highly recommended as the guides provide fascinating context about the plants' history and uses. The design, which incorporates artistic elements and remnants of the old monastery, makes it one of the most beautiful botanical gardens in the world.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.jardinoaxaca.mx/"
                }
        },
        {
                "name": "Mercado Benito Juárez & Mercado 20 de Noviembre",
                "description": "For a true slice of Oaxacan life, dive into these two adjacent markets just south of the Zócalo. The Mercado Benito Juárez is a sensory overload in the best way possible, with stalls piled high with fresh produce, local cheeses (quesillo), chapulines (grasshoppers), mole pastes, and colorful crafts. It’s the perfect place to shop for souvenirs and ingredients.\n\nConnected to it is the Mercado 20 de Noviembre, the city's main food market. The highlight here is the famous 'Pasillo de Humo' (Smoke Alley), where vendors grill various cuts of tasajo (beef) and chorizo to order. You choose your meat, and it's served with tortillas, salsas, and radishes for a quintessential Oaxacan meal.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        },
        {
                "name": "Teotitlán del Valle",
                "description": "This famous Zapotec village, nestled in the Tlacolula Valley, is renowned for its centuries-old tradition of hand-woven textiles, particularly rugs and tapestries. The weavers of Teotitlán use traditional pedal looms and create their own natural dyes from sources like the cochineal insect (for red), indigo (for blue), and marigold flowers (for yellow).\n\nMany family-run workshops (talleres) are open to visitors, where you can watch incredible demonstrations of the entire process, from spinning the wool to dyeing the yarn and weaving intricate Zapotec and modern designs. It's a wonderful opportunity to purchase a high-quality, authentic piece of art directly from the artisan who created it.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "N/A"
                }
        }
]}
    />
  );
};