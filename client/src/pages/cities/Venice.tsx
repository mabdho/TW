import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Venice: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in Venice, Italy (2025 Guide)"}
      description={`Planning a trip to Venice? You're in for a treat! When figuring out what things to do in Venice, it's easy to get overwhelmed. From gondola rides to stunning architecture, and delicious cicchetti, Venice offers a unique blend of history, culture, and beauty. I've visited several times, and I'm always discovering something new. This guide covers the best attractions, some hidden gems, and practical tips to make your Venetian adventure unforgettable. I think you'll find something here for everyone, no matter your interests or budget. Just don't forget your camera, because every corner is picture-perfect!`}
      galleryImages={[
      ]}
      highlights={["Glide along the Grand Canal in a gondola.",
        "Explore St. Mark's Square and Basilica.",
        "Get lost in the colorful streets of Burano.",
        "Indulge in delicious cicchetti and local wine.",
        "Visit Doge's Palace, a masterpiece of Gothic architecture.",
        "Cross the Rialto Bridge, a symbol of Venice."]}
      attractions={[
        {
        name: "St. Mark's Square (Piazza San Marco)",
        description: `St. Mark's Square is the heart of Venice, and it's one of the most famous squares in the world. It's always buzzing with activity, from locals enjoying an espresso to tourists snapping photos. You can visit St. Mark's Basilica, climb the Campanile for panoramic views, and admire the Doge's Palace. Be aware of pigeons, they're everywhere! 

For a great photo opportunity, visit early in the morning before the crowds arrive. It's also stunning at sunset. Tip: If you want to sit at one of the cafes in the square, be prepared to pay a premium for the experience. It's expensive but so worth it, even just for the coffee. It's kind of a must.`,
        practicalInfo: {
        howToGetThere: "Vaporetto (water bus) lines 1, 2, 4.1, 4.2, 5.1, and 5.2 stop at San Marco.",
        openingHours: "Open 24/7 (attractions within the square have varying hours).",
        cost: "Free (entry to Basilica and other attractions varies).",
        website: ""
      }
      },
        {
        name: "Doge's Palace (Palazzo Ducale)",
        description: `The Doge's Palace is a masterpiece of Gothic architecture and a former center of power in Venice. Explore the opulent rooms, admire the artwork, and cross the Bridge of Sighs. The palace offers a fascinating glimpse into the history and art of Venice. It's one of the most iconic things to do in Venice.

Tip: Book your tickets online in advance to avoid long queues. The Secret Itineraries Tour is worth it, as it takes you through hidden passages and chambers. Don't miss the view from the Bridge of Sighs; it's a hauntingly beautiful sight. Be sure to allocate at least 2-3 hours to explore the palace fully. It's larger than you might think!`,
        practicalInfo: {
        howToGetThere: "Located in St. Mark's Square; easily accessible by vaporetto.",
        openingHours: "Varies seasonally; generally 8:30 AM - 7:00 PM (check website for specific dates).",
        cost: "Around €30 (prices vary for special exhibitions and tours).",
        website: "https://palazzoducale.visitmuve.it/en/"
      }
      },
        {
        name: "Rialto Bridge (Ponte di Rialto)",
        description: `The Rialto Bridge is one of the most iconic landmarks in Venice. Spanning the Grand Canal, it offers stunning views and is a bustling hub of activity. Walk across the bridge, admire the shops, and take in the panoramic views of the canal. I think it's an amazing sight. It is probably one of the most photographed places in Venice.

Tip: Visit early in the morning or late in the evening to avoid the crowds. The Rialto Market nearby is a great place to experience local life and sample fresh produce. Be sure to check out the view from the Fondamenta del Vin, a waterfront promenade near the bridge. Don't miss it!`,
        practicalInfo: {
        howToGetThere: "Vaporetto stop: Rialto Mercato or Rialto.",
        openingHours: "Open 24/7.",
        cost: "Free.",
        website: ""
      }
      },
        {
        name: "Burano",
        description: `Burano is a small island in the Venetian Lagoon, famous for its colorful houses. It's a photographer's dream! Wander through the streets, admire the vibrant buildings, and visit the lace museum. It's a delightful escape from the hustle and bustle of Venice. I find it really charming and worth the trip.

Tip: Take vaporetto line 12 from Venice to Burano. The journey takes about 45 minutes. Be sure to try the bussolai, a traditional Burano biscuit. The best time to visit is during the week to avoid weekend crowds. Don't miss the leaning bell tower of the Church of San Martino.`,
        practicalInfo: {
        howToGetThere: "Vaporetto line 12 from Venice (Fondamente Nove).",
        openingHours: "Open 24/7 (attractions on the island have varying hours).",
        cost: "Vaporetto ticket required.",
        website: ""
      }
      },
        {
        name: "Grand Canal",
        description: `The Grand Canal is the main waterway in Venice, and the best way to experience it is by taking a gondola ride or a vaporetto. Admire the beautiful palaces and buildings that line the canal. It's a truly unforgettable experience. Maybe the most iconic thing to do in Venice. A gondola ride is expensive, but worth it at least once. Or try the traghetto, which is basically a gondola ferry!

Tip: A gondola ride is expensive. Consider sharing with others to split the cost. The best time to take a ride is at sunset for a romantic and scenic experience. Don't be afraid to negotiate the price with the gondolier. Also, consider taking a public vaporetto for a more affordable way to see the canal. Locals often use this mode of transport.`,
        practicalInfo: {
        howToGetThere: "Accessible from various points throughout Venice.",
        openingHours: "Open 24/7.",
        cost: "Gondola ride: €80-€120, Vaporetto: €7.50 per ride.",
        website: ""
      }
      },
        {
        name: "Cicchetti Tour",
        description: `Embark on a Cicchetti tour, a Venetian tradition similar to Spanish tapas. Visit local bacari (wine bars) and sample various small snacks paired with local wine (ombra). It's a great way to experience Venetian food culture and socialize with locals. You can find them everywhere.

Tip: Look for bacari that are crowded with locals; that's a good sign! Try the fried mozzarella, baccalà mantecato (creamed cod), and sarde in saor (sweet and sour sardines). Don't be afraid to try new things. Most cicchetti are affordable, so you can sample a variety without breaking the bank.`,
        practicalInfo: {
        howToGetThere: "Various locations throughout Venice.",
        openingHours: "Varies by bacaro; typically open from late morning to late evening.",
        cost: "Budget-friendly (€1-€3 per cicchetto).",
        website: ""
      }
      },
        {
        name: "Caffè Florian",
        description: `Caffè Florian, located in St. Mark's Square, is the oldest café in Venice, dating back to 1720. It's a luxurious and historic cafe known for its opulent interior and elegant atmosphere. Enjoy a coffee, pastry, or light meal while soaking in the ambiance and listening to live music. It's an expensive indulgence, but worth it for the experience. 

The cafe features ornate decor, marble tables, and antique mirrors. The signature coffee is the 'Caffè Florian,' a rich and flavorful blend. Be prepared for higher prices due to the location and history. Reservations are recommended, especially during peak season. It's open daily, but hours can vary. I think it is the ultimate Venetian experience. Be sure to taste the pastries. The vibe is incredible.`,
        practicalInfo: {
        howToGetThere: "Located in St. Mark's Square.",
        openingHours: "Varies; typically 9:00 AM - 11:00 PM.",
        cost: "Expensive (€8-€20 for coffee and pastries).",
        website: "https://www.caffeflorian.com/en/"
      }
      },
        {
        name: "Rialto Market (Mercato di Rialto)",
        description: `The Rialto Market is a vibrant and bustling food market located near the Rialto Bridge. Experience local life as you browse the stalls selling fresh produce, seafood, and other local delicacies. It's a great place to sample local flavors and soak in the atmosphere. You can grab delicious food on the go from local vendors.

Tip: Visit early in the morning (around 8:00 AM) for the freshest produce and the most lively atmosphere. Be sure to try the seasonal fruits and vegetables. The seafood market is particularly interesting. Don't be afraid to haggle politely. The best view is the buzz of daily life, as locals visit the market early to buy food for their families.`,
        practicalInfo: {
        howToGetThere: "Vaporetto stop: Rialto Mercato.",
        openingHours: "Tuesday to Saturday, 7:30 AM - 1:00 PM (fish market closes earlier).",
        cost: "Free to enter (cost of purchases varies).",
        website: ""
      }
      }
      ]}
      logistics={{
        gettingAround: `Venice is a unique city where the primary mode of transportation is by water. Vaporetti (water buses) are the most common way to get around, operating like regular city buses but on the canals. Gondolas are iconic but expensive, offering a romantic and scenic experience. Traghetto are gondola ferries. Walking is also a great way to explore the city's narrow streets and discover hidden gems. However, be prepared for lots of walking and stairs.

Water taxis are a faster but more expensive option. Consider purchasing a multi-day vaporetto pass if you plan to use them frequently. Remember to validate your ticket before boarding. Always be mindful of your belongings, especially in crowded areas. Getting lost is part of the fun, but having a map or navigation app is helpful.

One tip I recommend is using the Alilaguna ferry service to get to and from the airport. It's cheaper than a water taxi. Also, be prepared for a lot of bridges, so pack light to make walking easier.`,
        whereToStay: `Venice offers a variety of accommodation options, from luxurious hotels to budget-friendly guesthouses. San Marco is the heart of Venice and offers easy access to major attractions but can be expensive. Cannaregio is a quieter area with more affordable options. Dorsoduro is known for its art galleries and museums and is a good choice for art lovers. Castello is a residential area with a more local feel. 

For a more peaceful experience, consider staying on one of the outer islands, such as Lido or Giudecca. Booking in advance is highly recommended, especially during peak season. Consider staying near a vaporetto stop for easy access to transportation. I recommend researching different areas to find one that suits your needs and budget.

Consider also the seasonal availability. Some hotels in smaller islands might close during the off-season, so it's best to check their opening times.`,
        bestTimeToVisit: `The best time to visit Venice is during the shoulder seasons (April-May and September-October). The weather is pleasant, the crowds are smaller, and the prices are lower. Summer (June-August) can be hot and crowded, with higher prices. Winter (November-March) can be cold and wet, but it offers a unique and quieter experience. 

During the winter, Venice can be prone to flooding (acqua alta), so be prepared with waterproof shoes. However, winter can also be a romantic time to visit, with fewer tourists and a more authentic atmosphere. Spring and fall offer the best balance of weather and crowds.

Venice is magical any time of year, but I think the shoulder seasons offer the best experience. Also, consider visiting during the Venice Carnival (usually in February) for a unique and festive experience, but be prepared for even larger crowds and higher prices.`,
        suggestedItinerary: `Day 1: Start with St. Mark's Square and visit St. Mark's Basilica and Doge's Palace. Climb the Campanile for panoramic views. Take a gondola ride along the Grand Canal. In the evening, enjoy a cicchetti tour in Cannaregio.

Day 2: Explore the Rialto Market in the morning. Visit the Rialto Bridge and take in the views. Explore the Dorsoduro district, visiting the Peggy Guggenheim Collection and the Gallerie dell'Accademia. In the evening, enjoy dinner at a traditional Venetian restaurant.

Day 3: Take a day trip to Burano and Murano. Explore the colorful houses of Burano and visit the glass factories of Murano. In the evening, enjoy a relaxing evening in Venice.

Day 4: Visit the Jewish Ghetto, one of the oldest in the world. Explore the Cannaregio district and visit the Madonna dell'Orto church. Enjoy a final Venetian meal before departing. Always remember to enjoy the moment and not rush through everything.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Venice?",
        answer: `Some of the best things to do in Venice include visiting St. Mark's Square, Doge's Palace, Rialto Bridge, and the islands of Burano and Murano. Taking a gondola ride, exploring local markets, and enjoying cicchetti are also highly recommended.`
      },
        {
        question: "How many days do you need in Venice?",
        answer: `I think 3-4 days is a good amount of time to see the main attractions in Venice and also explore some of the outer islands and hidden gems. If you're short on time, you can still see the highlights in 2 days, but you'll need to prioritize.`
      },
        {
        question: "What is Venice famous for?",
        answer: `Venice is famous for its canals, gondolas, stunning architecture, art, and rich history. It's also known for its unique cultural heritage and delicious cuisine. St. Mark's Square, Doge's Palace, and the Rialto Bridge are among its most famous attractions.`
      },
        {
        question: "When is the best time to visit Venice?",
        answer: `The best time to visit Venice is during the shoulder seasons (April-May and September-October) when the weather is pleasant, the crowds are smaller, and the prices are lower. Summer can be hot and crowded, while winter can be cold and wet.`
      }
      ]}
    />
  );
};