import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Queenstown: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Queenstown, New Zealand (2025 Guide)"
      description="Planning a trip to Queenstown? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Ride the Skyline Gondola",
        "Milford Sound Day Trip",
        "Shotover Jet Boat Ride",
        "Kawarau Bridge Bungy",
        "Hike the Ben Lomond Track"
]}
      attractions={[
        {
                "name": "Ride the Skyline Gondola",
                "description": "No trip to Queenstown is complete without a journey up the Skyline Gondola. It's the steepest cable car lift in the Southern Hemisphere, whisking you 450 metres above the town to Bob's Peak. The panoramic views from the top are simply spectacular, offering a 220-degree vista of Coronet Peak, The Remarkables, Walter and Cecil Peak, and the vast expanse of Lake Wakatipu.\n\nOnce at the summit, the fun doesn't stop. You can hurtle down the hill on the famous Luge tracks, enjoy a meal at the Stratosfare Restaurant & Bar with its incredible views, or even go stargazing with a dedicated tour. It’s an iconic Queenstown experience that combines breathtaking scenery with a dose of family-friendly fun.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.skyline.co.nz/en/queenstown/"
                }
        },
        {
                "name": "Milford Sound Day Trip",
                "description": "Often called the 'eighth wonder of the world,' Milford Sound is an absolute must-see. This stunning fiord, carved by glaciers during the ice ages, features towering peaks, cascading waterfalls like Stirling and Bowen Falls, and dense rainforests clinging to sheer cliffs. A day trip from Queenstown, while long, is an epic journey through the heart of Fiordland National Park.\n\nMost tours involve a coach ride along the scenic Milford Road, followed by a 2-hour cruise on the fiord itself. Keep an eye out for wildlife such as dolphins, seals, and the rare Fiordland Crested Penguin. For a truly unforgettable experience, consider a coach-cruise-fly option, returning to Queenstown via a small plane for aerial views of the Southern Alps.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.fiordland.org.nz/visit/milford-sound"
                }
        },
        {
                "name": "Shotover Jet Boat Ride",
                "description": "Prepare for the ultimate adrenaline rush with the Shotover Jet. This world-famous jet boat ride blasts through the dramatic, narrow Shotover River Canyons at speeds of up to 90km/h. The skilled drivers expertly navigate the shallow waters, performing thrilling 360-degree spins and skimming past canyon walls with just centimetres to spare.\n\nThe iconic 'Big Red' boats are a Queenstown institution, and the 25-minute experience is pure, high-octane excitement from start to finish. It’s a unique way to experience the stunning geology of the canyons while getting your heart rate soaring.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.shotoverjet.com/"
                }
        },
        {
                "name": "Kawarau Bridge Bungy",
                "description": "Face your fears at the birthplace of commercial bungy jumping. The Kawarau Bridge Bungy, operated by AJ Hackett, is an iconic Kiwi experience. Leaping 43 metres from this historic suspension bridge towards the turquoise waters of the Kawarau River is a rite of passage for many visitors to New Zealand.\n\nWhether you choose to jump solo or tandem, touch the water or stay dry, the experience is unforgettable. For those not brave enough to jump, the viewing platform provides fantastic entertainment as you watch others take the plunge. It's a cornerstone of Queenstown's identity as an adventure hub.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.bungy.co.nz/queenstown/kawarau-bungy/"
                }
        },
        {
                "name": "Hike the Ben Lomond Track",
                "description": "For avid hikers seeking a challenge with a massive payoff, the Ben Lomond Track is unbeatable. This demanding full-day hike rewards with some of the most spectacular 360-degree views in the region, encompassing Lake Wakatipu and the surrounding mountain ranges. The trail climbs steadily from the Douglas fir forest near the Skyline Gondola, up into the alpine tussocks.\n\nThe hike can be broken into two parts: the Ben Lomond Saddle (3-4 hours return) or the push to the summit (6-8 hours return). The final hour to the summit is a steep, rocky scramble, but the sense of accomplishment and the breathtaking vistas from 1,748 metres are well worth the effort. Ensure you are well-prepared with water, food, and appropriate clothing, as weather can change rapidly.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/queenstown-area/things-to-do/ben-lomond-track/"
                }
        },
        {
                "name": "Onsen Hot Pools Retreat",
                "description": "After days of adventure, unwind at the Onsen Hot Pools Retreat. This boutique spa offers a uniquely Kiwi twist on the classic hot tub experience. Book a private, cedar-lined hot pool perched on a cliffside, offering breathtaking, uninterrupted views over the Shotover River canyon. Each pool can be indoors or outdoors at the touch of a button, allowing you to soak in the alpine air or stay sheltered from the elements.\n\nThis is the perfect activity for a romantic evening or a tranquil recovery session. Booking in advance is absolutely essential, as spots fill up weeks, if not months, ahead, especially for the coveted sunset and evening slots.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.onsen.co.nz/"
                }
        },
        {
                "name": "TSS Earnslaw Steamship Cruise",
                "description": "Step back in time with a cruise across Lake Wakatipu on the TSS Earnslaw, a vintage steamship affectionately known as the 'Lady of the Lake'. This fully restored vessel has been cruising these waters since 1912. The 90-minute journey offers stunning views of the surrounding mountains from a unique vantage point on the water. You can explore the ship, view the giant steam engines at work, and even listen to a pianist play classic tunes.\n\nMany visitors combine the cruise with a visit to Walter Peak High Country Farm, where you can enjoy a gourmet BBQ lunch or dinner, watch a sheep shearing demonstration, and experience a slice of New Zealand's rural life. It's a relaxing and scenic activity suitable for all ages.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.realnz.com/en/experiences/cruises/tss-earnslaw-steamship-cruises/"
                }
        },
        {
                "name": "Explore Historic Arrowtown",
                "description": "Just a short drive from Queenstown lies Arrowtown, a charming and beautifully preserved gold rush village. Walking down Buckingham Street is like stepping into the 19th century, with its historic wooden storefronts, old-fashioned post office, and quaint miners' cottages. You can visit the Lakes District Museum, try your hand at gold panning in the Arrow River, or simply soak up the history.\n\nArrowtown is also a foodie destination, boasting excellent cafes, restaurants, and the famous Remarkable Sweet Shop. The town is particularly stunning in autumn (April/May) when the surrounding trees erupt in a blaze of gold, red, and orange, making it a photographer's paradise.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.arrowtown.com/"
                }
        },
        {
                "name": "Gibbston Valley Wine Tour",
                "description": "Known as the 'Valley of the Vines,' the Gibbston region is one of the world's most southerly and picturesque wine-producing areas. It's particularly famous for its exceptional Pinot Noir. Taking a wine tour is the best way to experience the region, as you can visit several cellar doors without worrying about driving.\n\nMost tours include tastings at 3-4 different wineries, ranging from boutique family-run vineyards to larger, well-known estates like Gibbston Valley Winery, which features New Zealand's largest wine cave. Many tours also include a delicious platter lunch, perfectly paired with the local vintages. It's a sophisticated and scenic way to spend an afternoon.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.queenstownnz.co.nz/things-to-do/tours/wine-tours/"
                }
        },
        {
                "name": "Stroll through Queenstown Gardens",
                "description": "For a moment of peace and tranquility just steps from the bustling town centre, head to the Queenstown Gardens. This beautifully maintained botanical garden is located on a small peninsula jutting into Lake Wakatipu, offering spectacular views back towards the town and up to Bob's Peak. The gardens feature a lovely rose garden, mature trees from around the world, and a large duck pond.\n\nIt's the perfect place for a leisurely walk, a picnic, or a round of disc (frisbee) golf on its world-renowned 18-hole course. The flat, scenic waterfront path that encircles the gardens is popular with walkers and cyclists alike.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.qldc.govt.nz/services/parks-recreation/parks-trails/queenstown-gardens"
                }
        }
]}
    />
  );
};