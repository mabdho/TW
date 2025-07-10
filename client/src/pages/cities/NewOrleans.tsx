import React from 'react';
import { CityPage } from '../../components/CityPage';

export const NewOrleans: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in New Orleans, USA (2025 Guide)"
      description="Planning a trip to New Orleans? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Explore the French Quarter",
        "Listen to Live Jazz at Preservation Hall",
        "Visit The National WWII Museum",
        "Ride the St. Charles Streetcar",
        "Wander Through Jackson Square"
]}
      attractions={[
        {
                "name": "Explore the French Quarter",
                "description": "The vibrant heart of New Orleans, the French Quarter (Vieux Carré) is a captivating maze of historic streets, hidden courtyards, and iconic architecture. Its cast-iron balconies draped in ferns and flowers overlook bustling streets filled with artists, musicians, and fortune-tellers. By day, explore antique shops, art galleries, and historic landmarks. By night, the neighborhood transforms as the neon glow of Bourbon Street comes alive and the sounds of live music spill from countless bars and clubs. Beyond the party, the Quarter is a living museum, offering a glimpse into the city's multicultural past at every turn.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.neworleans.com/plan/neighborhoods/french-quarter/"
                }
        },
        {
                "name": "Listen to Live Jazz at Preservation Hall",
                "description": "For an authentic, unadulterated New Orleans jazz experience, nothing compares to Preservation Hall. This historic, no-frills venue has been dedicated to preserving traditional New Orleans jazz since 1961. Inside the intimate, rustic space, you'll sit on simple wooden benches or stand in the back, just feet away from some of the city's most talented musicians. The acoustic performances are powerful, soulful, and transport you back to the roots of this uniquely American art form. It's a stripped-down, pure celebration of music that is an absolute must for any visitor.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.preservationhall.com/"
                }
        },
        {
                "name": "Visit The National WWII Museum",
                "description": "Designated by Congress as America's official National WWII Museum, this sprawling institution offers a profound and immersive look into the war that changed the world. Through powerful personal narratives, stunning artifacts, and interactive exhibits, the museum tells the story of the American experience in the war. From the beaches of Normandy to the jungles of the Pacific, the exhibits are incredibly detailed and moving. Plan to spend at least half a day here; the sheer scale and emotional weight of the museum make it a compelling and essential stop.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.nationalww2museum.org/"
                }
        },
        {
                "name": "Ride the St. Charles Streetcar",
                "description": "Step back in time aboard the historic St. Charles Streetcar, the oldest continuously operating streetcar line in the world. The gentle rumble and clanging bell of the iconic green car provide a charming and scenic way to see the city. The route takes you from the Central Business District, through the picturesque Garden District with its grand mansions and oak-lined streets, all the way to the Carrollton neighborhood. It's not just transportation; it's a moving landmark and one of the most relaxing and affordable ways to soak in the city's architectural beauty.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.norta.com/ride-with-us/routes-schedules/streetcars/47-st-charles-streetcar"
                }
        },
        {
                "name": "Wander Through Jackson Square",
                "description": "Jackson Square is the historic and cultural epicenter of the French Quarter. This beautifully landscaped park, with its iconic statue of Andrew Jackson on horseback, is framed by some of the city's most important buildings: the magnificent St. Louis Cathedral, the Presbytère, and the Cabildo. The square itself is a lively open-air artist colony, where local painters display their work along the iron fence, and street performers, musicians, and tarot card readers entertain passersby. It's the perfect spot to people-watch, absorb the city's atmosphere, and capture a quintessential New Orleans photograph.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.neworleans.com/listing/jackson-square/32145/"
                }
        },
        {
                "name": "Tour a Historic Cemetery (St. Louis Cemetery No. 1)",
                "description": "New Orleans' historic cemeteries are known as 'Cities of the Dead' for their elaborate, above-ground tombs, a necessity due to the city's high water table. St. Louis Cemetery No. 1, established in 1789, is the oldest and most famous. Here, you'll wander through narrow, labyrinthine paths, discovering the final resting places of prominent New Orleanians, including the legendary Voodoo Queen, Marie Laveau. The unique burial traditions and hauntingly beautiful architecture offer a fascinating insight into the city's history and culture. Due to regulations, entry is only permitted with a licensed tour guide.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.saveourcemeteries.org/st-louis-cemetery-no-1/"
                }
        },
        {
                "name": "Experience Mardi Gras World",
                "description": "Get a magical, behind-the-scenes look at Mardi Gras any day of the year at Mardi Gras World. This massive workshop is where artisans and craftsmen build the breathtakingly intricate floats for the city's famous parades. On a guided tour, you'll learn about the history of Carnival, watch artists at work, and wander among towering sculptures of mythical creatures, historical figures, and pop culture icons. Don't forget to try on some elaborate costumes and sample a slice of King Cake, a Mardi Gras tradition.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.mardigrasworld.com/"
                }
        },
        {
                "name": "Stroll Down Frenchmen Street",
                "description": "If you're looking for the soul of New Orleans' music scene, head to Frenchmen Street in the Faubourg Marigny neighborhood. Just a short walk from the French Quarter, this vibrant, two-block stretch is packed with the city's best live music venues. Here, the vibe is more local and less tourist-heavy than Bourbon Street. You can wander from club to club, hearing everything from traditional jazz and blues to funk and reggae. The street is alive with energy, with brass bands often playing spontaneously on the corners.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.frenchmenstreetlive.com/"
                }
        }
]}
    />
  );
};