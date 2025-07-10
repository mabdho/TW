import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Victoria: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Victoria, Canada (2025 Guide)"
      description="Planning a trip to Victoria? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "The Butchart Gardens",
        "Royal BC Museum",
        "Inner Harbour",
        "Whale Watching Tour",
        "Craigdarroch Castle"
]}
      attractions={[
        {
                "name": "The Butchart Gardens",
                "description": "A world-renowned horticultural masterpiece, The Butchart Gardens is a non-negotiable stop on any Victoria itinerary. What began over a century ago as a limestone quarry has been transformed into a 55-acre wonderland of lush greens and vibrant blooms. Visitors can wander through a series of distinct gardens, including the stunning Sunken Garden, the formal Italian Garden, the tranquil Japanese Garden, and the fragrant Rose Garden.\n\nEach season offers a completely different experience, from the explosion of colour in spring and summer to the subtle beauty of autumn and the magical Christmas light display in winter. The sheer scale and meticulous design make it a paradise for photographers, nature lovers, and anyone with an appreciation for beauty.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.butchartgardens.com/"
                }
        },
        {
                "name": "Royal BC Museum",
                "description": "Consistently ranked among the best museums in Canada, the Royal BC Museum offers a captivating journey through British Columbia's natural and human history. The exhibits are incredibly immersive, allowing you to walk through a life-sized recreation of an early 20th-century town, stand in the presence of a towering woolly mammoth, and explore the rich cultures of the region's First Nations peoples.\n\nThe museum also features a Natural History gallery detailing the diverse ecosystems of BC, from the coastal rainforests to the northern Rockies. Alongside its permanent collections, it hosts world-class temporary exhibitions and is home to an impressive IMAX theatre.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://royalbcmuseum.bc.ca/"
                }
        },
        {
                "name": "Inner Harbour",
                "description": "The Inner Harbour is the vibrant heart of Victoria. Flanked by the majestic British Columbia Parliament Buildings and the iconic Fairmont Empress hotel, this bustling waterfront is a hub of activity year-round. Stroll along the scenic causeway, watch seaplanes take off and land, and enjoy performances by street musicians and artists.\n\nFrom here, you can catch a water taxi, embark on a whale watching tour, or simply find a bench and soak in the stunning views. The area truly comes alive in the summer with festivals and markets, and it's beautifully illuminated at night, making it a perfect spot for an evening walk.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.tourismvictoria.com/see-do/neighbourhoods/inner-harbour"
                }
        },
        {
                "name": "Whale Watching Tour",
                "description": "The waters surrounding Victoria are teeming with marine life, making it one of the best places in the world for whale watching. Embark on an adventure into the Salish Sea in search of majestic orcas (killer whales), humpback whales, minke whales, and grey whales. Along the way, you're also likely to spot sea lions, seals, porpoises, and a variety of seabirds.\n\nTour operators offer excursions on everything from high-speed Zodiacs to larger, more comfortable covered vessels. Knowledgeable marine biologists on board provide fascinating commentary about the wildlife and local ecology, making it an educational and thrilling experience.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "Varies by operator (e.g., Prince of Whales, Eagle Wing Tours)."
                }
        },
        {
                "name": "Craigdarroch Castle",
                "description": "Step back into the Gilded Age at Craigdarroch Castle, a stunning example of Victorian architecture and a designated National Historic Site. This legendary 'bonanza castle' was built in the late 1880s for wealthy coal baron Robert Dunsmuir. The self-guided tour takes you through 39 meticulously restored rooms, showcasing intricate woodwork, beautiful stained-glass windows, and lavish period furnishings.\n\nAs you climb the four floors to the tower, you'll get a glimpse into the opulent lifestyle of the Dunsmuir family and enjoy panoramic views of Victoria and the Olympic Mountains. It's a fascinating look at the city's history and the stories of those who built it.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://thecastle.ca/"
                }
        },
        {
                "name": "Fisherman's Wharf",
                "description": "A short, scenic walk or harbour ferry ride from the Inner Harbour leads you to the quirky and colourful Fisherman's Wharf. This unique marine destination is famous for its floating homes, food kiosks, and resident harbour seals who often pop up looking for a treat from the fish 'n' chip shops.\n\nGrab some fresh seafood from Barb's Fish & Chips, enjoy an ice cream, and wander the docks admiring the creative and whimsical houseboats. It's a lively, fun-filled spot that offers a different, more casual vibe than the formal Inner Harbour.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://gvha.ca/marinas/fishermans-wharf/"
                }
        },
        {
                "name": "Beacon Hill Park",
                "description": "Beacon Hill Park is Victoria's premier urban green space, a sprawling 200-acre park just a short walk from downtown. It's a perfect blend of manicured gardens, wild woodlands, and stunning coastal views. Wander through the beautiful flower beds, watch the ducks and swans in the ponds, and visit the charming Beacon Hill Children's Farm, famous for its goat stampede.\n\nDon't miss a walk to the southern edge of the park to see the world's fourth-tallest totem pole and enjoy breathtaking views across the Strait of Juan de Fuca to the Olympic Mountains in Washington State.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.victoria.ca/parks-recreation/parks-trails/parks/beacon-hill-park"
                }
        },
        {
                "name": "British Columbia Parliament Buildings",
                "description": "Dominating the Inner Harbour with their grand neo-baroque architecture, the British Columbia Parliament Buildings are an iconic Victoria landmark. During the day, you can join a free guided tour to learn about the province's legislative process and admire the stunning interior, including the dome, stained glass, and historical paintings.\n\nBy night, the buildings are outlined with over 3,000 light bulbs, creating a magical and romantic spectacle that reflects beautifully in the harbour waters. The expansive front lawn is also a popular spot for photos, picnics, and public events.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.leg.bc.ca/learn-about-us/visiting-the-legislature"
                }
        }
]}
    />
  );
};