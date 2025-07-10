import React from 'react';
import { CityPage } from '../../components/CityPage';

export const NewYork: React.FC = () => {
  return (
    <CityPage
      title={"15 Best Things to Do in New York, USA (2025 Guide)"}
      description={`So, you're planning a trip to the Big Apple? Awesome! Deciding on what things to do in New York can feel overwhelming, I get it. There are literally hundreds, maybe thousands, of possibilities. This guide cuts through the noise and highlights the absolute best experiences NYC has to offer in 2025. We're talking iconic landmarks, hidden gems, and unforgettable moments. Forget just ticking boxes; let's create memories. From Broadway shows that'll blow you away to quiet corners where you can escape the city's buzz, New York has something for everyone. It's a city of dreams, and I'm here to help you make yours a reality. Honestly, even living here, I'm still discovering new things. It's that kind of place. And don't worry, we'll cover all the practical stuff too, like getting around and finding the perfect hotel. Let's dive in!`}
      imageUrl={"https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
      galleryImages={[
        { url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "12", caption: "12" },
        { url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "12", caption: "12" },
        { url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "12", caption: "12" },
        { url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "12", caption: "12" },
        { url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "12", caption: "12" },
        { url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "12", caption: "12" }
      ]}
      highlights={["Ascend the Empire State Building for breathtaking panoramic views.",
        "Wander through Central Park, a green oasis in the heart of Manhattan.",
        "Experience the dazzling lights and energy of Times Square.",
        "Visit the Statue of Liberty and Ellis Island, symbols of American freedom.",
        "Catch a world-class Broadway show for an unforgettable evening."]}
      attractions={[
        {
        name: "Empire State Building",
        description: `Okay, you simply have to visit the Empire State Building. It's an absolute classic. Ascending to the top of this iconic skyscraper is an experience you won't soon forget. The views are, well, indescribable. You can see pretty much the entire city sprawling out before you, and on a clear day, you can see for miles. Try to go early in the morning, or maybe late at night, to avoid the worst of the crowds. Even if you're not a huge fan of heights, I think you'll be captivated by the sheer grandeur of it all. 

The building itself is an Art Deco masterpiece, and just being inside is a treat. And if you are a fan of heights, well, you're in for a real thrill. There are two observation decks: one on the 86th floor and another on the 102nd floor. The 86th floor is the most popular, offering incredible 360-degree views. But if you want to splurge a little, the 102nd floor offers even more breathtaking vistas. It's really up to you. Honestly, either way, you'll get amazing photos.`,
        practicalInfo: {
        howToGetThere: "Subway lines B, D, F, M, N, Q, R, W to 34th Street – Herald Square.",
        openingHours: "8:00 AM to 2:00 AM daily.",
        cost: "Starting from $44 per adult.",
        website: "https://www.esbnyc.com/"
      }
      },
        {
        name: "Central Park",
        description: `Central Park is so much more than just a park; it's a vital part of New York's identity. Seriously, it's a green oasis in the middle of a concrete jungle, a place where you can escape the hustle and bustle of city life and just breathe. You could easily spend an entire day exploring its many paths, gardens, and hidden corners. From horse-drawn carriage rides to picnics on the Great Lawn, there's something for everyone. Even just people-watching is a worthwhile activity here, I think.

Take a stroll along The Mall, a beautiful tree-lined promenade, or rent a rowboat on The Lake. Visit Strawberry Fields, a memorial to John Lennon, or catch a performance at the Delacorte Theater during the summer months. And don't forget about the Central Park Zoo, a delightful place for animal lovers of all ages. I think no trip to New York is complete without spending some time in this incredible urban sanctuary. It's a great place to recharge after a long day of sightseeing, or just to soak up the beauty of nature in the heart of the city. You really can't go wrong with a visit.`,
        practicalInfo: {
        howToGetThere: "Subway lines A, B, C to 72nd or 81st Streets, or N, Q, R, W to 59th Street – Columbus Circle.",
        openingHours: "6:00 AM to 1:00 AM daily.",
        cost: "Free",
        website: "https://www.centralparknyc.org/"
      }
      },
        {
        name: "Times Square",
        description: `Okay, Times Square. It's loud, it's crowded, it's touristy... but it's also undeniably iconic. You can't come to New York and not experience the sensory overload of Times Square, at least for a little bit. The dazzling lights, the giant billboards, the costumed characters – it's a spectacle unlike any other. And, despite what some locals might say, I do think there's something kind of magical about it, especially at night. 

Grab a bite to eat at one of the many restaurants, catch a Broadway show (which is highly recommended, by the way), or simply soak up the atmosphere. And be sure to snap a few photos, because you'll definitely want to remember this experience. Just be prepared for the crowds and the relentless energy. It's not everyone's cup of tea, but it's definitely a New York institution. And I really do think you should see it for yourself. You might even end up loving it. Plus, it's a good starting point to explore nearby areas, if you are done with it quickly.`,
        practicalInfo: {
        howToGetThere: "Subway lines 1, 2, 3, 7, N, Q, R, W, S to Times Square – 42nd Street.",
        openingHours: "Open 24/7 (but best experienced at night).",
        cost: "Free to visit.",
        website: "https://www.timessquarenyc.org/"
      }
      },
        {
        name: "Statue of Liberty and Ellis Island",
        description: `The Statue of Liberty and Ellis Island are more than just tourist attractions; they're powerful symbols of American freedom and immigration. A visit to these landmarks is a truly moving experience, a chance to connect with the history of the United States and the millions of immigrants who came to this country in search of a better life. Seeing Lady Liberty up close is awe-inspiring, and touring the Ellis Island Immigration Museum is deeply informative and often emotional. 

I really recommend booking your tickets in advance, especially if you want to go inside the Statue of Liberty's crown (the view is amazing!). The ferry ride to and from the islands offers stunning views of the Manhattan skyline, so be sure to have your camera ready. And allow yourself plenty of time to explore both islands; there's a lot to see and learn. I promise you, it's worth the effort. You'll come away with a greater appreciation for the American story. It's a sobering and a wonderful day out at the same time.`,
        practicalInfo: {
        howToGetThere: "Ferry from Battery Park in Manhattan or Liberty State Park in New Jersey.",
        openingHours: "Varies depending on the season, check the official website.",
        cost: "Ferry tickets start at $24 per adult.",
        website: "https://www.nps.gov/stli/index.htm"
      }
      },
        {
        name: "Broadway Show",
        description: `Seeing a Broadway show is an absolute must-do when you're in New York. It's a quintessential New York experience, a chance to witness world-class talent and be swept away by the magic of live theater. From classic musicals to cutting-edge dramas, there's a show for every taste and budget. Seriously, there are so many to choose from, it can be a little overwhelming! 

I recommend doing a little research beforehand to see what's playing and what's getting good reviews. You can often find discounted tickets at the TKTS booth in Times Square, but be prepared to wait in line. Or, if you're feeling adventurous, you can try your luck at the lottery for some of the more popular shows. But honestly, no matter what you see, I think you'll be amazed by the talent and the production value. It's an unforgettable evening, and a real highlight of any trip to New York. Just be prepared for a late night!`,
        practicalInfo: {
        howToGetThere: "Various theaters in the Theater District, easily accessible by subway.",
        openingHours: "Varies depending on the show, check the theater's website.",
        cost: "Tickets range from $50 to $300+.",
        website: "https://www.broadway.com/"
      }
      },
        {
        name: "Metropolitan Museum of Art",
        description: `The Metropolitan Museum of Art, affectionately known as The Met, is one of the world's largest and finest art museums. You could literally spend days wandering through its vast collection, which spans over 5,000 years of art from around the globe. From ancient Egyptian artifacts to European masterpieces, there's something to captivate every art lover. And even if you're not a huge art buff, I think you'll still be impressed by the sheer scale and beauty of it all. 

Don't miss the Egyptian collection, the European paintings galleries, and the Costume Institute. And be sure to head up to the rooftop garden for stunning views of Central Park and the city skyline. The Met is a true treasure trove, a place where you can lose yourself in the beauty and wonder of art. It's a little overwhelming, but so worth it. Plan to spend at least a few hours here, and wear comfortable shoes!`,
        practicalInfo: {
        howToGetThere: "Subway lines 4, 5, 6 to 86th Street.",
        openingHours: "Sunday-Tuesday and Thursday: 10 AM–5 PM, Friday and Saturday: 10 AM–9 PM. Closed Wednesday",
        cost: "Suggested admission: $30 for adults.",
        website: "https://www.metmuseum.org/"
      }
      },
        {
        name: "Brooklyn Bridge",
        description: `Walking or biking across the Brooklyn Bridge is a quintessential New York experience, offering stunning views of the Manhattan skyline and the Statue of Liberty. It's an architectural marvel, a symbol of New York's ingenuity and resilience. And, it's just really pretty! Even if you're not a big walker, I highly recommend making the trek. 

Start your walk on the Brooklyn side and make your way towards Manhattan for the best views. Be sure to stay in the pedestrian lane, as the bike lane can get pretty crowded. And allow yourself plenty of time to soak up the atmosphere and snap some photos. You could grab lunch in DUMBO (Down Under the Manhattan Bridge Overpass) before or after. Trust me, the views from the bridge are worth every step. Plus, it's a great way to get some exercise while you're sightseeing. A nice change of pace!`,
        practicalInfo: {
        howToGetThere: "Subway lines A, C to High Street – Brooklyn Bridge or 4, 5, 6 to Brooklyn Bridge – City Hall.",
        openingHours: "Open 24/7.",
        cost: "Free",
        website: "null"
      }
      },
        {
        name: "9/11 Memorial & Museum",
        description: `The 9/11 Memorial & Museum is a deeply moving and powerful tribute to the victims of the September 11th attacks. It's a place of remembrance and reflection, a space to honor the lives lost and to learn about the events of that tragic day. Visiting the memorial is a sobering experience, but also an important one. It's a reminder of the resilience of the human spirit and the importance of unity in the face of adversity. 

The museum offers a comprehensive and informative look at the events leading up to, during, and after the attacks. Be prepared for a lot of emotion, and allow yourself plenty of time to process what you see and hear. It's not an easy visit, but it's a worthwhile one. It is, I think, a must see and helps to provide a greater understanding of the city.`,
        practicalInfo: {
        howToGetThere: "Subway lines A, C, J, Z, 2, 3, 4, 5 to Fulton Street.",
        openingHours: "Sunday-Thursday 9 AM–8 PM, Friday-Saturday 9 AM–9 PM",
        cost: "Adults $30, Seniors and students $24.",
        website: "https://www.911memorial.org/"
      }
      }
      ]}
      logistics={{
        gettingAround: `New York City has an extensive public transportation system, making it easy to get around without a car. The subway is the most efficient way to travel, with trains running 24/7 on some lines. You can purchase a MetroCard for unlimited rides or pay per ride using OMNY (One Metro New York), a contactless payment system.

Taxis and ride-sharing services like Uber and Lyft are also readily available, but can be more expensive, especially during peak hours. Walking is a great way to explore many neighborhoods, so be sure to wear comfortable shoes. Biking is another popular option, with bike lanes throughout the city and bike-sharing programs available.

Consider purchasing a CityPASS or Explorer Pass if you plan to visit multiple attractions. These passes can save you money on admission fees and often include transportation options.`,
        whereToStay: `New York City offers a wide range of accommodation options to suit every budget and preference. Midtown Manhattan is a popular choice for its central location and proximity to major attractions. Hotels in this area tend to be pricier, but offer convenience and easy access to transportation. 

Lower Manhattan, including the Financial District and Tribeca, is a great option for business travelers and those looking for a more upscale experience. Brooklyn offers a more residential feel, with trendy neighborhoods like Williamsburg and DUMBO offering boutique hotels and Airbnb options. For budget-friendly accommodations, consider staying in Queens or the outer boroughs, which are still easily accessible by subway.

Consider your itinerary and preferred neighborhood vibe when choosing your accommodation. Book in advance, especially during peak season, to secure the best deals and availability.`,
        bestTimeToVisit: `The best time to visit New York City depends on your preferences and tolerance for crowds and weather. Spring (April-May) and fall (September-October) offer mild temperatures and pleasant weather, making it ideal for exploring the city on foot. However, these seasons tend to be more crowded and expensive.

Summer (June-August) can be hot and humid, but it's a great time to enjoy outdoor activities and events. Be prepared for large crowds and higher prices during this time. Winter (November-March) can be cold and snowy, but it's also a magical time to visit, with holiday decorations and festive events. You'll find lower prices and fewer crowds during the winter months, but be sure to pack warm clothing.

Consider your budget and interests when planning your trip. Each season offers a unique experience, so choose the one that best suits your needs.`,
        suggestedItinerary: `Here's a suggested itinerary for a 5-day trip to New York City:

*Day 1: Arrive in New York City and check into your hotel. Start your exploration with a visit to Times Square and catch a Broadway show in the evening. Grab dinner at a local restaurant in the Theater District.

Day 2: Visit the Statue of Liberty and Ellis Island. Take a ferry from Battery Park and explore these iconic landmarks. In the afternoon, head to the Financial District and visit the 9/11 Memorial & Museum. End the day with a walk across the Brooklyn Bridge.

Day 3: Explore Central Park. Rent a bike or take a stroll through this urban oasis. Visit the Metropolitan Museum of Art in the afternoon. In the evening, head to Greenwich Village for dinner and live music.

Day 4: Explore Midtown Manhattan. Visit the Empire State Building for panoramic views of the city. Head to Top of the Rock for similar views. Take the subway to Grand Central Station and explore the terminal. In the afternoon, shop along Fifth Avenue.

Day 5:* Visit the Museum of Modern Art (MoMA). Explore the museum's extensive collection of modern and contemporary art. In the afternoon, head to Chelsea Market for lunch and shopping. Depart from New York City.`
      }}
      faqs={[
        {
        question: "What are the best things to do in New York?",
        answer: `New York offers a wide range of attractions, including iconic landmarks like the Empire State Building, Statue of Liberty, and Central Park. You can also enjoy world-class museums, Broadway shows, diverse culinary experiences, and vibrant neighborhoods.`
      },
        {
        question: "How many days do you need in New York?",
        answer: `I recommend spending at least 5 days in New York to experience the city's major attractions and get a feel for its diverse neighborhoods. However, you could easily spend a week or more exploring all that New York has to offer.`
      },
        {
        question: "What is New York famous for?",
        answer: `New York is famous for its iconic landmarks, vibrant culture, world-class museums, Broadway shows, diverse culinary scene, and status as a global center for finance, fashion, and entertainment.`
      },
        {
        question: "When is the best time to visit New York?",
        answer: `The best time to visit New York is during the spring (April-May) or fall (September-October) for mild weather and pleasant temperatures. However, each season offers a unique experience, so choose the one that best suits your interests and budget.`
      }
      ]}
    />
  );
};