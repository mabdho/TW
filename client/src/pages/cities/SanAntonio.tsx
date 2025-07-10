import React from 'react';
import { CityPage } from '../../components/CityPage';

export const SanAntonio: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in San Antonio, USA (2025 Guide)"
      description="Planning a trip to San Antonio? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "The Alamo",
        "San Antonio River Walk",
        "San Antonio Missions National Historical Park",
        "Historic Market Square (El Mercado)",
        "Pearl District"
]}
      attractions={[
        {
                "name": "The Alamo",
                "description": "No trip to San Antonio is complete without visiting The Alamo. Originally known as Misión San Antonio de Valero, this former Spanish mission became the legendary site of the 1836 battle for Texan independence. Today, it stands as a hallowed shrine and a symbol of courage and sacrifice. Visitors can walk through the historic chapel and the Long Barrack Museum, which houses artifacts from the Texas Revolution and the mission's history.\n\nThe grounds are beautifully maintained with gardens and memorials, offering a peaceful space for reflection amidst the bustling downtown. Arrive early to avoid the crowds and take a guided tour to gain a deeper understanding of the events that transpired here. It's a poignant and essential stop for understanding the soul of Texas.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.thealamo.org"
                }
        },
        {
                "name": "San Antonio River Walk",
                "description": "The San Antonio River Walk, or Paseo del Río, is the city's vibrant artery. This network of walkways along the banks of the San Antonio River is an oasis nestled below street level, lined with lush landscapes, stone bridges, and an endless array of restaurants, bars, and shops. It's a destination in itself, offering a completely different perspective of the city.\n\nTake a narrated river cruise to learn about the architecture and history, enjoy an alfresco dinner with twinkling lights overhead, or simply stroll along the paths to soak in the lively atmosphere. The River Walk connects major attractions like the Alamo, La Villita, and the San Antonio Museum of Art, making it both a beautiful and practical way to explore.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.thesanantonioriverwalk.com"
                }
        },
        {
                "name": "San Antonio Missions National Historical Park",
                "description": "Discover the roots of San Antonio at this UNESCO World Heritage Site, which preserves four of the five Spanish colonial missions. Stretching along the San Antonio River, the park includes Mission Concepción, Mission San José, Mission San Juan, and Mission Espada. These stunningly preserved churches and compounds offer a glimpse into 18th-century life, when they were centers of community, religion, and agriculture.\n\nMission San José, known as the 'Queen of the Missions,' is the largest and most fully restored. You can explore them via car or by renting a bike and riding the scenic Mission Reach hike-and-bike trail. Each mission has a unique character and story, collectively telling the tale of Spanish influence in the American Southwest.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.nps.gov/saan"
                }
        },
        {
                "name": "Historic Market Square (El Mercado)",
                "description": "Step into the vibrant heart of Mexican culture at Historic Market Square, the largest Mexican market in the United States. This three-block outdoor plaza is filled with shops, restaurants, and the lively sounds of mariachi music. The indoor 'El Mercado' building is a kaleidoscope of color, packed with stalls selling everything from handcrafted leather goods and pottery to festive decorations and traditional clothing.\n\nDon't miss the Farmer's Market Plaza, which features more local artisans and delicious food stalls. Grab a bite at Mi Tierra Café y Panadería, a landmark restaurant that's been serving Tex-Mex classics and sweet pastries 24/7 since 1941, decorated with an explosion of festive lights and murals.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.marketsquaresa.com"
                }
        },
        {
                "name": "Pearl District",
                "description": "Once home to the historic Pearl Brewery, this 22-acre site has been transformed into one of San Antonio's trendiest and most dynamic neighborhoods. The Pearl District is a culinary and cultural hub, featuring more than a dozen independent restaurants, chic boutiques, and a year-round farmers market. The architecture beautifully blends historic industrial buildings with modern design.\n\nFoodies will be in heaven here, with options ranging from upscale dining at the acclaimed Hotel Emma to casual food stalls at the Bottling Department Food Hall. The area also boasts a campus of the Culinary Institute of America. It's a perfect place to spend an afternoon shopping, dining, and enjoying the beautifully landscaped grounds along a quieter stretch of the River Walk.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.atpearl.com"
                }
        },
        {
                "name": "Natural Bridge Caverns",
                "description": "Journey deep into the earth at Natural Bridge Caverns, Texas's largest and most spectacular show caves. Named for the 60-foot natural limestone slab bridge that spans the cavern's entrance, this underground wonderland is filled with awe-inspiring formations. Guided tours take you through vast chambers adorned with delicate soda straws, massive stalagmites, and shimmering flowstones.\n\nAbove ground, the adventure continues with a ropes course, zip lines, a gem and fossil mining sluice, and a maze. The Discovery Tour is the most popular, but the Hidden Passages Tour offers a look at more delicate and rare formations. It's a fantastic day trip for families and anyone fascinated by geology and natural wonders.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://naturalbridgecaverns.com"
                }
        },
        {
                "name": "San Antonio Museum of Art (SAMA)",
                "description": "Housed in the historic former Lone Star Brewery complex, the San Antonio Museum of Art (SAMA) boasts an impressive and diverse collection spanning 5,000 years of global culture. The museum is particularly renowned for having the most comprehensive collection of ancient Greek, Roman, and Egyptian art in the southern United States.\n\nIts Latin American art wing is another major highlight, featuring folk art alongside contemporary masterpieces. The collection also includes significant works from Asia and a growing collection of modern and contemporary art. The museum's beautiful setting along the River Walk makes it a pleasure to visit, with a waterfront cafe for relaxing after your tour.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.samuseum.org"
                }
        },
        {
                "name": "Japanese Tea Garden",
                "description": "Find a moment of tranquility at the Japanese Tea Garden, a serene oasis located in Brackenridge Park. What was once a rock quarry has been transformed into a stunning landscape of lush gardens, stone archways, a picturesque waterfall, and winding paths. Koi-filled ponds reflect the vibrant foliage and the iconic Jingu House Cafe overlooks the gardens.\n\nThe garden's history is as compelling as its beauty, having been built by local prison labor in the early 20th century. It’s a photographer's dream and a perfect spot for a peaceful stroll. Entry is free, making it one of the city's best and most beautiful bargains.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://saparksfoundation.org/japanese-tea-garden/"
                }
        }
]}
    />
  );
};