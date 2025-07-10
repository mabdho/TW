import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Zagreb: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Zagreb, Croatia (2025 Guide)"
      description="Planning a trip to Zagreb? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Zagreb Cathedral",
        "St. Mark's Church",
        "Museum of Broken Relationships",
        "Dolac Market",
        "Upper Town (Gornji Grad)"
]}
      attractions={[
        {
                "name": "Zagreb Cathedral",
                "description": "The Cathedral of the Assumption of the Blessed Virgin Mary, simply known as Zagreb Cathedral, is a monumental landmark and the tallest building in Croatia. Its twin spires, currently under restoration after recent earthquakes, dominate the city skyline. This Gothic masterpiece has a rich history dating back to the 11th century, having been rebuilt multiple times.\n\nInside, you'll find a stunning treasury containing priceless religious artifacts, beautiful stained-glass windows, and the tomb of Cardinal Alojzije Stepinac. The sheer scale and intricate details of the architecture make it a spiritual and historical anchor for the city, and a visit is essential to understanding Zagreb's heritage.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.zupa-katedrala-zagreb.hr/"
                }
        },
        {
                "name": "St. Mark's Church",
                "description": "Instantly recognizable by its vibrant, tiled roof, St. Mark's Church is one of Zagreb's most emblematic buildings. Located in the heart of the Upper Town in St. Mark's Square, the church's roof beautifully displays the medieval coat of arms of Croatia, Dalmatia, and Slavonia on the left, and the emblem of the city of Zagreb on the right.\n\nThe church itself dates back to the 13th century, with a Gothic portal that is considered the most valuable in Southern Europe. While the interior is often closed to tourists except during mass, the exterior alone is worth the visit. The square is also home to the Croatian Parliament and the Government Palace, making it the political center of the country.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.infozagreb.hr/"
                }
        },
        {
                "name": "Museum of Broken Relationships",
                "description": "One of the most innovative and poignant museums in the world, the Museum of Broken Relationships is a must-visit for a truly unique experience. This award-winning museum showcases a collection of personal objects, each accompanied by a brief story, donated by anonymous people from around the globe. The items represent the remnants of past relationships, ranging from humorous and quirky to deeply touching and heartbreaking.\n\nIt’s a powerful exploration of love, loss, and the human condition. Unlike traditional museums, this space creates a powerful emotional connection with visitors, reminding us of the universal experiences that bind us together. It's thought-provoking, beautifully curated, and surprisingly uplifting.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://brokenships.com/"
                }
        },
        {
                "name": "Dolac Market",
                "description": "Known as the \"Belly of Zagreb,\" Dolac Market is the city's vibrant central marketplace. Located just a few steps from the main square, this bustling market is a feast for the senses. Its most iconic feature is the sea of red umbrellas shading the outdoor stalls, where local farmers sell fresh fruits, vegetables, and flowers. Below, in the covered section, you'll find butchers, fishmongers, and vendors selling homemade cheese, honey, pasta, and other local delicacies.\n\nIt's the perfect place to experience local life, sample fresh produce, and pick up authentic Croatian products. The energy is infectious, and it offers a genuine taste of Zagreb's daily culture. Be sure to try some 'sir i vrhnje' (cottage cheese and cream), a local specialty.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.trznice-zg.hr/"
                }
        },
        {
                "name": "Upper Town (Gornji Grad)",
                "description": "Gornji Grad is Zagreb's historic core, a charming district of cobblestone streets, gas-lit lanterns (which are still lit by hand every evening), and medieval architecture. It feels like stepping back in time. This is where you'll find many of the city's key landmarks, including St. Mark's Church, the Croatian Parliament, the Museum of Broken Relationships, and Lotrščak Tower.\n\nWandering through its quiet alleys and picturesque squares is an attraction in itself. You can reach the Upper Town by a steep walk or by taking the historic Zagreb Funicular. The views over the Lower Town and the Cathedral from the Strossmayer Promenade are simply breathtaking, especially at sunset.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.infozagreb.hr/&lang=en"
                }
        },
        {
                "name": "Zagreb Funicular",
                "description": "Connecting the Lower Town (Donji Grad) with the Upper Town (Gornji Grad), the Zagreb Funicular is one of the shortest public-transport funiculars in the world. With a track length of only 66 meters, the ride takes just 64 seconds. Despite its short duration, it's a beloved city icon and a charming way to avoid the steep climb on foot.\n\nIn operation since 1890, it has retained its original appearance and construction, making it the oldest form of public transport in Zagreb. Taking a ride offers a quaint, nostalgic experience and saves you a bit of energy for exploring the historic Upper Town.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.zet.hr/turisticka-ponuda/uspinjaca/627"
                }
        },
        {
                "name": "Museum of Contemporary Art",
                "description": "For a dose of modern culture, head to the Museum of Contemporary Art (MSU) in Novi Zagreb. Housed in a striking modern building, the museum showcases an impressive collection of Croatian and international contemporary art from the 1950s to the present day. Its exhibitions are dynamic and often feature interactive installations, multimedia works, and thought-provoking pieces.\n\nEven if you're not an art aficionado, the museum's architecture and permanent installations, like Carsten Höller's 'Double Slide', make it a fun and engaging visit. It provides a fascinating contrast to the historic atmosphere of the city center.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.msu.hr/en/"
                }
        },
        {
                "name": "Maksimir Park and Zagreb Zoo",
                "description": "Maksimir Park is Zagreb's oldest and largest public park, a perfect urban oasis for a relaxing afternoon. Opened in 1794, it was one of the first public parks in southeast Europe. It features vast meadows, dense oak forests, five lakes, and several charming 19th-century structures like the Echo Pavilion and the Bellevue Belvedere.\n\nNestled within the park is the Zagreb Zoo, home to hundreds of animal species, including snow leopards, red pandas, and okapis. The combination of the beautifully landscaped English-style park and the well-maintained zoo makes it an ideal destination for families, nature lovers, or anyone looking to escape the city bustle.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://zoo.hr/en/"
                }
        },
        {
                "name": "Mirogoj Cemetery",
                "description": "While visiting a cemetery might not be on every travel itinerary, Mirogoj is an exception. Considered one of the most beautiful cemeteries in Europe, it's more like an open-air art gallery and park. Designed by the famed architect Hermann Bollé, its majestic arcades, cupolas, and lush greenery create a serene and monumental atmosphere.\n\nMirogoj is the final resting place for many of Croatia's most famous figures, and it's notable for being an interdenominational cemetery where Catholic, Orthodox, Muslim, and Jewish graves lie side by side. A walk along its ivy-covered walls and grand arcades is a peaceful and unexpectedly beautiful experience.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.gradskagroblja.hr/"
                }
        },
        {
                "name": "Lotrščak Tower and Grič Cannon",
                "description": "For the best panoramic views of Zagreb, climb the Lotrščak Tower. This fortified tower dates back to the 13th century and was built to guard the southern gate of the Gradec town wall. The climb to the top is rewarded with stunning 360-degree views of the entire city, including the Cathedral, St. Mark's Church, and the sprawling Lower Town.\n\nBe prepared for a daily tradition: every day at noon, the Grič Cannon is fired from one of the tower's windows. This tradition, dating back to 1877, was intended to signal the city's bell-ringers. The loud boom reverberates across the city and is a beloved local quirk. Arrive just before noon to witness it up close (but cover your ears!).",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.gkd.hr/kula-lotrscak/"
                }
        }
]}
    />
  );
};