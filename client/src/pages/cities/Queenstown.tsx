import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Queenstown: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Queenstown, New Zealand (2025 Guide)"}
      description={"Nestled on the shores of the crystal-clear Lake Wakatipu and framed by the dramatic Remarkables mountain range, Queenstown is New Zealand's crown jewel of adventure and scenery. Known globally as the 'Adventure Capital of the World,' this vibrant resort town offers an exhilarating mix of adrenaline-fueled activities, serene natural beauty, and world-class hospitality. Whether you're leaping from a bridge, cruising through majestic fiords, hiking epic trails, or sipping pinot noir at a scenic vineyard, you'll find no shortage of excitement. From thrill-seekers to nature lovers and foodies, discovering the best things to do in Queenstown is an unforgettable journey into the heart of the Southern Alps. Prepare for a trip that will quite literally take your breath away."}
      imageUrl={""}
      highlights={["Milford Sound Day Trip",
        "Ride the Skyline Gondola",
        "Shotover Jet Boat Ride",
        "Kawarau Bridge Bungy",
        "Hike the Ben Lomond Track"]}
      galleryImages={[
        { url: "", alt: "Queenstown landmark 1", caption: "Queenstown landmark 1 - placeholder" },
        { url: "", alt: "Queenstown landmark 2", caption: "Queenstown landmark 2 - placeholder" },
        { url: "", alt: "Queenstown landmark 3", caption: "Queenstown landmark 3 - placeholder" },
        { url: "", alt: "Queenstown landmark 4", caption: "Queenstown landmark 4 - placeholder" },
        { url: "", alt: "Queenstown landmark 5", caption: "Queenstown landmark 5 - placeholder" },
        { url: "", alt: "Queenstown landmark 6", caption: "Queenstown landmark 6 - placeholder" }
      ]}
      attractions={[
        {
        name: "Ride the Skyline Gondola",
        description: "No trip to Queenstown is complete without a journey up the Skyline Gondola. It's the steepest cable car lift in the Southern Hemisphere, whisking you 450 metres above the town to Bob's Peak. The panoramic views from the top are simply spectacular, offering a 220-degree vista of Coronet Peak, The Remarkables, Walter and Cecil Peak, and the vast expanse of Lake Wakatipu.\n\nOnce at the summit, the fun doesn't stop. You can hurtle down the hill on the famous Luge tracks, enjoy a meal at the Stratosfare Restaurant & Bar with its incredible views, or even go stargazing with a dedicated tour. It’s an iconic Queenstown experience that combines breathtaking scenery with a dose of family-friendly fun.",
        practicalInfo: {
        howToGetThere: "The base terminal is a short 5-minute walk from central Queenstown on Brecon Street.",
        openingHours: "Daily from 9:30 AM to 9:00 PM (times can vary seasonally).",
        cost: "From NZD $52 for an adult return gondola ticket. Luge packages are extra.",
        website: "https://www.skyline.co.nz/en/queenstown/"
      }
      },
        {
        name: "Milford Sound Day Trip",
        description: "Often called the 'eighth wonder of the world,' Milford Sound is an absolute must-see. This stunning fiord, carved by glaciers during the ice ages, features towering peaks, cascading waterfalls like Stirling and Bowen Falls, and dense rainforests clinging to sheer cliffs. A day trip from Queenstown, while long, is an epic journey through the heart of Fiordland National Park.\n\nMost tours involve a coach ride along the scenic Milford Road, followed by a 2-hour cruise on the fiord itself. Keep an eye out for wildlife such as dolphins, seals, and the rare Fiordland Crested Penguin. For a truly unforgettable experience, consider a coach-cruise-fly option, returning to Queenstown via a small plane for aerial views of the Southern Alps.",
        practicalInfo: {
        howToGetThere: "Book a coach-and-cruise tour from operators in Queenstown. The drive is approximately 3.5-4 hours each way.",
        openingHours: "Tours depart early morning (around 7 AM) and return in the evening.",
        cost: "Coach and cruise tours start from around NZD $150-$250 per person.",
        website: "https://www.fiordland.org.nz/visit/milford-sound"
      }
      },
        {
        name: "Shotover Jet Boat Ride",
        description: "Prepare for the ultimate adrenaline rush with the Shotover Jet. This world-famous jet boat ride blasts through the dramatic, narrow Shotover River Canyons at speeds of up to 90km/h. The skilled drivers expertly navigate the shallow waters, performing thrilling 360-degree spins and skimming past canyon walls with just centimetres to spare.\n\nThe iconic 'Big Red' boats are a Queenstown institution, and the 25-minute experience is pure, high-octane excitement from start to finish. It’s a unique way to experience the stunning geology of the canyons while getting your heart rate soaring.",
        practicalInfo: {
        howToGetThere: "A complimentary shuttle bus departs from 'The Station' information centre in central Queenstown.",
        openingHours: "Operates daily, year-round, with frequent departures. Check website for seasonal hours.",
        cost: "Around NZD $159 for an adult.",
        website: "https://www.shotoverjet.com/"
      }
      },
        {
        name: "Kawarau Bridge Bungy",
        description: "Face your fears at the birthplace of commercial bungy jumping. The Kawarau Bridge Bungy, operated by AJ Hackett, is an iconic Kiwi experience. Leaping 43 metres from this historic suspension bridge towards the turquoise waters of the Kawarau River is a rite of passage for many visitors to New Zealand.\n\nWhether you choose to jump solo or tandem, touch the water or stay dry, the experience is unforgettable. For those not brave enough to jump, the viewing platform provides fantastic entertainment as you watch others take the plunge. It's a cornerstone of Queenstown's identity as an adventure hub.",
        practicalInfo: {
        howToGetThere: "Located on State Highway 6 in the Gibbston Valley, about a 25-minute drive from Queenstown. Most bookings include transport.",
        openingHours: "Daily from 9:30 AM to 4:30 PM (hours vary).",
        cost: "Approximately NZD $240 for a solo adult jump.",
        website: "https://www.bungy.co.nz/queenstown/kawarau-bungy/"
      }
      },
        {
        name: "Hike the Ben Lomond Track",
        description: "For avid hikers seeking a challenge with a massive payoff, the Ben Lomond Track is unbeatable. This demanding full-day hike rewards with some of the most spectacular 360-degree views in the region, encompassing Lake Wakatipu and the surrounding mountain ranges. The trail climbs steadily from the Douglas fir forest near the Skyline Gondola, up into the alpine tussocks.\n\nThe hike can be broken into two parts: the Ben Lomond Saddle (3-4 hours return) or the push to the summit (6-8 hours return). The final hour to the summit is a steep, rocky scramble, but the sense of accomplishment and the breathtaking vistas from 1,748 metres are well worth the effort. Ensure you are well-prepared with water, food, and appropriate clothing, as weather can change rapidly.",
        practicalInfo: {
        howToGetThere: "The main track starts near the top of the Skyline Gondola (saving you 450m of climbing). Alternatively, start from the access road on Lomond Crescent.",
        openingHours: "24/7, but best attempted in daylight hours. Not recommended in winter due to snow and avalanche risk.",
        cost: "Free (excluding optional gondola ride).",
        website: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/queenstown-area/things-to-do/ben-lomond-track/"
      }
      },
        {
        name: "Onsen Hot Pools Retreat",
        description: "After days of adventure, unwind at the Onsen Hot Pools Retreat. This boutique spa offers a uniquely Kiwi twist on the classic hot tub experience. Book a private, cedar-lined hot pool perched on a cliffside, offering breathtaking, uninterrupted views over the Shotover River canyon. Each pool can be indoors or outdoors at the touch of a button, allowing you to soak in the alpine air or stay sheltered from the elements.\n\nThis is the perfect activity for a romantic evening or a tranquil recovery session. Booking in advance is absolutely essential, as spots fill up weeks, if not months, ahead, especially for the coveted sunset and evening slots.",
        practicalInfo: {
        howToGetThere: "Located in Arthurs Point, a 10-minute drive from Queenstown. A complimentary shuttle is available from the town centre.",
        openingHours: "Daily from 9:00 AM to 10:00 PM.",
        cost: "From NZD $115 for a 1-hour original tub experience for two people. Prices vary.",
        website: "https://www.onsen.co.nz/"
      }
      },
        {
        name: "TSS Earnslaw Steamship Cruise",
        description: "Step back in time with a cruise across Lake Wakatipu on the TSS Earnslaw, a vintage steamship affectionately known as the 'Lady of the Lake'. This fully restored vessel has been cruising these waters since 1912. The 90-minute journey offers stunning views of the surrounding mountains from a unique vantage point on the water. You can explore the ship, view the giant steam engines at work, and even listen to a pianist play classic tunes.\n\nMany visitors combine the cruise with a visit to Walter Peak High Country Farm, where you can enjoy a gourmet BBQ lunch or dinner, watch a sheep shearing demonstration, and experience a slice of New Zealand's rural life. It's a relaxing and scenic activity suitable for all ages.",
        practicalInfo: {
        howToGetThere: "The TSS Earnslaw departs from the Steamer Wharf in central Queenstown.",
        openingHours: "Multiple departures daily. Check the website for the current schedule.",
        cost: "Cruise only starts from NZD $89 for adults. Cruise and farm tour packages are extra.",
        website: "https://www.realnz.com/en/experiences/cruises/tss-earnslaw-steamship-cruises/"
      }
      },
        {
        name: "Explore Historic Arrowtown",
        description: "Just a short drive from Queenstown lies Arrowtown, a charming and beautifully preserved gold rush village. Walking down Buckingham Street is like stepping into the 19th century, with its historic wooden storefronts, old-fashioned post office, and quaint miners' cottages. You can visit the Lakes District Museum, try your hand at gold panning in the Arrow River, or simply soak up the history.\n\nArrowtown is also a foodie destination, boasting excellent cafes, restaurants, and the famous Remarkable Sweet Shop. The town is particularly stunning in autumn (April/May) when the surrounding trees erupt in a blaze of gold, red, and orange, making it a photographer's paradise.",
        practicalInfo: {
        howToGetThere: "A 20-minute drive from Queenstown. The public Orbus service also runs regularly between the two towns.",
        openingHours: "Shops and cafes generally open from 10:00 AM to 5:00 PM.",
        cost: "Free to explore. Museum entry has a fee.",
        website: "https://www.arrowtown.com/"
      }
      },
        {
        name: "Gibbston Valley Wine Tour",
        description: "Known as the 'Valley of the Vines,' the Gibbston region is one of the world's most southerly and picturesque wine-producing areas. It's particularly famous for its exceptional Pinot Noir. Taking a wine tour is the best way to experience the region, as you can visit several cellar doors without worrying about driving.\n\nMost tours include tastings at 3-4 different wineries, ranging from boutique family-run vineyards to larger, well-known estates like Gibbston Valley Winery, which features New Zealand's largest wine cave. Many tours also include a delicious platter lunch, perfectly paired with the local vintages. It's a sophisticated and scenic way to spend an afternoon.",
        practicalInfo: {
        howToGetThere: "Book a guided wine tour with pickup from your Queenstown accommodation. Or, if you have a designated driver, it's a 25-minute drive.",
        openingHours: "Tours run daily, typically in the afternoon.",
        cost: "Half-day tours start from around NZD $170 per person.",
        website: "https://www.queenstownnz.co.nz/things-to-do/tours/wine-tours/"
      }
      },
        {
        name: "Stroll through Queenstown Gardens",
        description: "For a moment of peace and tranquility just steps from the bustling town centre, head to the Queenstown Gardens. This beautifully maintained botanical garden is located on a small peninsula jutting into Lake Wakatipu, offering spectacular views back towards the town and up to Bob's Peak. The gardens feature a lovely rose garden, mature trees from around the world, and a large duck pond.\n\nIt's the perfect place for a leisurely walk, a picnic, or a round of disc (frisbee) golf on its world-renowned 18-hole course. The flat, scenic waterfront path that encircles the gardens is popular with walkers and cyclists alike.",
        practicalInfo: {
        howToGetThere: "A 5-minute walk from the town centre. Enter via Park Street.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: "https://www.qldc.govt.nz/services/parks-recreation/parks-trails/queenstown-gardens"
      }
      },
        {
        name: "Kiwi Park Queenstown",
        description: "Discover New Zealand's unique and endangered wildlife at Kiwi Park Queenstown. This family-owned wildlife sanctuary is dedicated to conservation and is the best place in town to see the iconic, flightless kiwi bird in a specially designed nocturnal house. The park is home to over 20 species of native birds and reptiles, including the kea (the world's only alpine parrot) and the tuatara (a living dinosaur).\n\nDaily conservation shows and kiwi feeding presentations provide fascinating insights into the challenges these animals face and the efforts being made to protect them. It's a fun, educational, and rewarding experience for all ages, conveniently located at the base of the Skyline Gondola.",
        practicalInfo: {
        howToGetThere: "Located on Brecon Street, next to the Skyline Gondola base.",
        openingHours: "Daily from 9:00 AM to 5:00 PM (seasonal variations apply).",
        cost: "Around NZD $49 for an adult ticket, which is valid for re-entry for up to 24 hours.",
        website: "https://www.kiwipark.co.nz/"
      }
      },
        {
        name: "Devour a Fergburger",
        description: "More than just a meal, grabbing a Fergburger is a quintessential Queenstown experience. This legendary burger joint has grown from a local secret to a global phenomenon, with queues often snaking down the street. The menu features a huge variety of creative and delicious burgers, from the classic 'Fergburger' with cheese to more adventurous options like 'The Codfather' (battered fish) or the 'Sweet Bambi' (wild Fiordland deer).\n\nThe burgers are massive, made with fresh, high-quality ingredients, and worth the wait. It's a casual, bustling spot that perfectly captures the town's vibrant energy. Pro tip: call ahead to place your order and bypass much of the queue.",
        practicalInfo: {
        howToGetThere: "Located on Shotover Street in the heart of Queenstown.",
        openingHours: "Daily from 8:00 AM to 4:30 AM (yes, almost 21 hours a day).",
        cost: "Burgers range from NZD $14 to $22.",
        website: "https://www.fergburger.com/"
      }
      },
        {
        name: "Glenorchy & Paradise Scenic Drive",
        description: "The 45-minute drive from Queenstown to Glenorchy is consistently ranked among the most scenic drives in the world. The road hugs the edge of Lake Wakatipu, with every turn revealing another jaw-dropping vista of turquoise water and snow-capped peaks. Glenorchy itself is a rustic and charming village, serving as a gateway to spectacular hiking trails and national parks.\n\nMovie fans will recognize the area as a key filming location for The Lord of the Rings, with locations like Isengard and Lothlórien found nearby. Continue past Glenorchy to the aptly named 'Paradise' for even more untouched natural beauty. You can self-drive or take a guided tour to get the most out of the experience.",
        practicalInfo: {
        howToGetThere: "A 45-kilometre scenic drive from Queenstown along the Glenorchy-Queenstown Road.",
        openingHours: "Accessible year-round, but drive with care in winter conditions.",
        cost: "Free to drive, though guided tours have a cost.",
        website: "https://www.queenstownnz.co.nz/destinations/glenorchy/"
      }
      },
        {
        name: "Go Canyoning",
        description: "For a truly immersive adventure, try canyoning. This thrilling activity involves navigating a river canyon by a combination of abseiling down waterfalls, jumping into crystal-clear pools, sliding down natural water slides, and zip-lining across chasms. It’s an action-packed way to get up close and personal with Queenstown's stunning natural landscapes.\n\nCompanies like Canyoning Queenstown provide all the necessary gear (wetsuits, helmets, harnesses) and expert guides to ensure a safe and exhilarating experience. With options for different fitness and bravery levels, it's a unique adventure that combines multiple thrills into one unforgettable day.",
        practicalInfo: {
        howToGetThere: "Tour operators provide transport from central Queenstown to the canyoning locations.",
        openingHours: "Tours run daily during the warmer months (typically October to April).",
        cost: "Half-day trips start from around NZD $229 per person.",
        website: "https://www.canyoning.co.nz/"
      }
      },
        {
        name: "Walk or Kayak around Moke Lake",
        description: "Escape the crowds and discover the serene beauty of Moke Lake, a stunning horseshoe-shaped lake surrounded by mountains, just a short drive from Queenstown. This hidden gem offers a peaceful retreat and incredible photo opportunities, especially on a calm day when the mountains create a perfect reflection on the water's surface.\n\nThe Moke Lake Loop Track is a relatively flat and easy 2-3 hour walk that circles the lake, offering beautiful views from every angle. Alternatively, hire a kayak or paddleboard to explore the tranquil waters from a different perspective. It's a fantastic spot for a picnic, a quiet afternoon, and a dose of pure nature.",
        practicalInfo: {
        howToGetThere: "A 20-minute drive from Queenstown via Moke Lake Road. The last section is an unsealed gravel road.",
        openingHours: "Accessible 24/7.",
        cost: "Free. Kayak rentals are available from operators in Queenstown.",
        website: "https://www.doc.govt.nz/parks-and-recreation/places-to-go/otago/places/queenstown-area/things-to-do/moke-lake-loop-track/"
      }
      }
      ]}
      logistics={{
        gettingAround: "Central Queenstown is compact and easily walkable. For destinations further afield, the Orbus public bus network is efficient and affordable. Water taxis offer a scenic way to cross Lake Wakatipu. For maximum flexibility, especially for visiting places like Glenorchy or wineries, renting a car is highly recommended. Ride-sharing services like Uber are also available.",
        whereToStay: "The Town Centre is ideal for those who want to be in the heart of the action, with easy access to restaurants, bars, and tour departures. Fernhill offers great lake views and is slightly quieter but still close. Arthurs Point is great for spa-lovers and those wanting a retreat feel. Recommendations: QT Queenstown (Luxury), Mgallery Sofitel Queenstown (Mid-Range), Nomads Queenstown (Budget/Hostel).",
        bestTimeToVisit: "Queenstown is a year-round destination. Summer (December-February) is warm and perfect for hiking, biking, and water sports, but it's also the busiest season. Winter (June-August) is a skier's paradise with several world-class ski fields. Autumn (March-May) offers stable weather, fewer crowds, and stunning fall colours, especially in Arrowtown. Spring (September-November) is great for adventure sports and seeing the mountains still dusted with snow.",
        suggestedItinerary: "Day 1: Hike up Queenstown Hill for stunning views. Ride the Skyline Gondola to Bob's Peak and enjoy the panoramic views, ride the Luge, or consider ziplining. Head back down to Queenstown for dinner and consider relaxing at the Onsen Hot Pools.\n\nDay 2: Take a full-day trip to Milford Sound, which typically involves a bus tour and a scenic cruise through the fiord. Return to Queenstown and enjoy a well-deserved dinner.\n\nDay 3: Take a scenic drive to Glenorchy, exploring the area. Stop by Moke Lake for a peaceful and scenic spot, or enjoy a cruise on Lake Wakatipu on the historic TSS Earnslaw steamship. Explore Queenstown's vibrant dining scene."
      }}
      faqs={[{
          question: "Is Queenstown expensive?",
          answer: "Yes, Queenstown is generally considered one of New Zealand's most expensive destinations for tourists. Costs for accommodation, activities, and dining are higher than in many other parts of the country due to its popularity. However, you can save money by staying in hostels or apartments with kitchens, cooking some of your own meals, and taking advantage of free activities like hiking the Queenstown Hill or Ben Lomond tracks."
        },
        {
          question: "How many days do you need in Queenstown?",
          answer: "A minimum of three days is recommended to experience the main highlights, such as the Skyline Gondola, a jet boat ride, and exploring the town. However, to fully appreciate the area and include a major day trip like Milford Sound or a full day of hiking or wine tasting, 5 to 7 days is ideal. This allows for a more relaxed pace and the flexibility to add more activities."
        },
        {
          question: "Is Queenstown safe?",
          answer: "Queenstown is a very safe destination for travellers. The main risks are related to adventure activities and the natural environment. Always use reputable, certified operators for any adventure sports. When hiking, be prepared for rapidly changing weather conditions. Standard travel precautions apply: be aware of your belongings in crowded areas and don't leave valuables in your car."
        },
        {
          question: "What is Queenstown famous for?",
          answer: "Queenstown is famous for three main things: its title as the 'Adventure Capital of the World,' offering activities like bungy jumping, jet boating, skydiving, and skiing. Secondly, its breathtaking alpine scenery, set on the shores of Lake Wakatipu and surrounded by majestic mountains like The Remarkables. Finally, it's a premier tourist hub, known for its vibrant atmosphere, world-class restaurants, wineries, and as a base for exploring the wider Fiordland and Central Otago regions."
        }
      ]}
    />
  );
};