import React from 'react';
import { CityPage } from '../../components/CityPage';

export const LosAngeles: React.FC = () => {
  return (
    <CityPage
      cityName="Los Angeles"
      country="USA"
      title={"15 Best Things to Do in Los Angeles, USA (2025 Guide)"}
      description={`Figuring out the best things to do in Los Angeles can feel overwhelming, right? With its sprawling landscape and endless options, it's hard to know where to begin. This Los Angeles travel guide aims to help you navigate the City of Angels and uncover some of its most captivating attractions. From iconic landmarks to hidden gems, Los Angeles offers a diverse range of experiences. There are certainly things to do in Los Angeles to suit every interest, whether you're a first-time visitor or a seasoned traveler looking for a new perspective. We'll explore the must-see places, share insider tips, and even point you toward some delicious dining experiences. I think you'll find this guide helpful in planning your perfect Los Angeles itinerary. It's the kind of place you really need a plan, though you could just wing it, perhaps?`}
      galleryImages={[
      ]}
      highlights={["Walk the Hollywood Walk of Fame.",
        "Visit the Griffith Observatory for stunning city views.",
        "Explore the Getty Center's art collections and gardens.",
        "Relax on the beaches of Santa Monica.",
        "Immerse yourself in the magic of Disneyland."]}
      attractions={[
        {
        name: "Griffith Observatory",
        description: `## Overview
The Griffith Observatory is a Los Angeles icon, offering panoramic views of the city, the Hollywood sign, and the cosmos. It’s a fantastic place to explore the universe, with exhibits on space and science. I found the view surprisingly calming, especially at sunset. It's free to enter, though parking can be a bit of a hassle, to be honest.

### Best Photo Spots
Capture stunning photos of the Hollywood sign and the city skyline from the front lawn. The sunset views are particularly breathtaking. There's also a nice vista inside the building itself, looking south.

### Insider Tips
Tip: Arrive early in the morning or late in the evening to avoid crowds. On weekends, consider using the DASH Observatory bus from the Vermont/Sunset Metro station to avoid parking hassles. Don't miss the planetarium shows; they are worth it! The early shows tend to be less crowded.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Red Line to Vermont/Sunset Station and transfer to the DASH Observatory bus. Alternatively, drive and park in designated areas (parking fees apply).",
        openingHours: "Tuesday - Friday: 12:00 PM - 10:00 PM, Saturday - Sunday: 10:00 AM - 10:00 PM, Closed on Mondays",
        cost: "Free (planetarium shows require tickets)",
        website: "griffithobservatory.org"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["science", "astronomy", "photography", "views"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Sunset views of the Hollywood sign and city skyline.",
        insiderTip: "Arrive before noon on weekdays or after 7 PM to avoid parking hassles.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Accessible ramps and elevators available."
      }
      },
        {
        name: "The Getty Center",
        description: `## Overview
The Getty Center is more than just an art museum; it's an architectural masterpiece with stunning gardens and breathtaking views. You'll find European paintings, drawings, sculptures, illuminated manuscripts, and decorative arts. The tram ride up is also part of the experience, some say! 

### Best Photo Spots
The Central Garden, designed by Robert Irwin, offers a unique photographic opportunity with its water features and vibrant plants. The panoramic views of Los Angeles from the museum’s terraces are also spectacular. Definitely worth a picture or two!

### Insider Tips
Tip: Visit on a weekday morning to avoid the biggest crowds. Check the Getty Center's website for free guided tours. Consider packing a picnic to enjoy in the gardens. Don't miss the special exhibitions; they're often worth the extra time.`,
        practicalInfo: {
        howToGetThere: "Take the I-405 (San Diego Freeway) to the Getty Center Drive exit. Follow signs to the Getty Center. Parking is available for a fee.",
        openingHours: "Tuesday - Friday & Sunday: 10:00 AM - 5:30 PM, Saturday: 10:00 AM - 9:00 PM, Closed on Mondays",
        cost: "Free (parking fees apply)",
        website: "getty.edu"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["art", "architecture", "gardens", "history"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Panoramic views of Los Angeles and the Central Garden.",
        insiderTip: "Visit on Tuesdays or Wednesdays for fewer crowds. Parking is cheaper if you arrive after 3 PM.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible with ramps and elevators."
      }
      },
        {
        name: "Santa Monica Pier & Beach",
        description: `## Overview
The Santa Monica Pier is a classic California experience, with its amusement park, shops, and restaurants. The beach offers plenty of space for sunbathing, swimming, and surfing. It's a bustling place, especially on weekends, but it’s worth a visit for the iconic atmosphere. The sunset here? Well, you can't beat it.

### Best Photo Spots
Capture the iconic Ferris wheel at sunset. The beach offers great photo opportunities with the pier in the background. Don't forget to snap a picture of the Route 66 sign.

### Insider Tips
Tip: Visit on a weekday to avoid the weekend crowds. Consider renting a bike and cycling along the beach path to Venice Beach. If you're feeling adventurous, try a trapeze class on the beach. Don't miss the street performers; they add to the atmosphere.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Expo Line to the Downtown Santa Monica Station. Walk west towards the pier. Parking is available in nearby lots (fees apply).",
        openingHours: "Pier: Open daily, hours vary by attraction and restaurant",
        cost: "Free (attractions and rides have individual fees)",
        website: "santamonicapier.org"
      },
      discoveryTags: {
        timeRequired: "Half day",
        experienceLevel: "Easy Access",
        interests: ["beach", "amusement park", "shopping", "family"],
        costLevel: "Moderate",
        seasonalBest: "Summer",
        photoOpportunity: "Ferris wheel at sunset.",
        insiderTip: "Go before 11 AM to avoid the crowds and enjoy cheaper parking.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible pier and beach access ramps."
      }
      },
        {
        name: "Hollywood Walk of Fame",
        description: `## Overview
The Hollywood Walk of Fame is a sidewalk along Hollywood Boulevard and Vine Street with more than 2,700 stars embedded in the pavement. It's dedicated to honoring accomplishments in the entertainment industry. It can be crowded and a bit touristy, but it's a must-see for any visitor to Los Angeles. Plus, you never know who you might spot!

### Best Photo Spots
Find your favorite celebrity's star and take a picture. The TCL Chinese Theatre offers a great backdrop for photos. Look for the handprints and footprints of famous actors in the forecourt.

### Insider Tips
Tip: Visit early in the morning to avoid the crowds. Be aware of street performers and vendors; some may be aggressive. Keep an eye on your belongings due to pickpockets. Don't miss the Dolby Theatre, home to the Academy Awards.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Red Line to the Hollywood/Highland or Hollywood/Vine stations. Walk along Hollywood Boulevard or Vine Street.",
        openingHours: "Open 24/7",
        cost: "Free",
        website: "walkoffame.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["history", "celebrity", "entertainment", "photography"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Your favorite celebrity's star.",
        insiderTip: "Go before 9 AM on weekdays to avoid tour groups.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible sidewalks."
      }
      },
        {
        name: "Disneyland Park",
        description: `## Overview
Disneyland Park, the original Disney theme park, is a magical place for all ages. Experience classic attractions, thrilling rides, and enchanting entertainment. Be prepared for crowds and long lines, but the memories are worth it. It's a bit outside Los Angeles proper, but easily accessible.

### Best Photo Spots
Take a picture in front of Sleeping Beauty's Castle. Capture the fireworks over the Rivers of America. Don't miss the photo opportunities with Disney characters.

### Insider Tips
Tip: Download the Disneyland app to check wait times and make reservations. Arrive before the park opens to maximize your time. Consider purchasing Genie+ to skip the lines. Don't miss the parades and nighttime spectaculars.`,
        practicalInfo: {
        howToGetThere: "Drive to Disneyland in Anaheim (about an hour from downtown Los Angeles). Parking is available for a fee. Alternatively, take public transport (Metrolink or Amtrak) to the Anaheim Regional Transportation Intermodal Center (ARTIC) and transfer to a Disneyland Resort bus.",
        openingHours: "Varies depending on the season. Check the Disneyland website for current hours.",
        cost: "Expensive (ticket prices vary depending on the day and season)",
        website: "disneyland.disney.go.com"
      },
      discoveryTags: {
        timeRequired: "Full day",
        experienceLevel: "Easy Access",
        interests: ["family", "amusement park", "entertainment", "adventure"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Sleeping Beauty's Castle.",
        insiderTip: "Purchase tickets online in advance and make park reservations to guarantee entry.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible with mobility device rentals available."
      }
      },
        {
        name: "Grand Central Market",
        description: `## Overview
Grand Central Market is a historic food hall in downtown Los Angeles, offering a diverse array of culinary delights. From pupusas to ramen, you'll find something to satisfy every craving. It's a bustling place with a vibrant atmosphere and a great place to experience the local food culture. Worth a visit if you're hungry and want to sample a bit of everything.

### Best Photo Spots
Capture the colorful signage and food stalls. The exterior of the building is also a classic Los Angeles landmark. Don't miss the neon signs inside.

### Insider Tips
Tip: Visit during off-peak hours (before noon or after 2 PM) to avoid the lunch rush. Explore all the different vendors before making a decision. Be prepared for crowds and limited seating. Don't miss the McConnell's Fine Ice Creams.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Red or Purple Line to Pershing Square Station. Walk east on 4th Street to Hill Street.",
        openingHours: "Open daily from 8:00 AM - 9:00 PM",
        cost: "Budget-friendly (food prices vary by vendor)",
        website: "grandcentralmarket.com"
      },
      discoveryTags: {
        timeRequired: "1-2 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "culture", "dining", "local"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Colorful food stalls and the market's vibrant atmosphere.",
        insiderTip: "Visit on weekdays between 10 AM and 11:30 AM for shorter lines at popular stalls.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible with elevators and ramps."
      }
      },
        {
        name: "République",
        description: `## Overview
République is a popular restaurant located in a historic building with a charming courtyard. The restaurant serves French-inspired cuisine with a California twist. The ambience is perfect for a romantic date or a special occasion. It's a bit pricey, but worth the splurge for a memorable meal. If you enjoy fancy things, this is for you. I think you might like it. 

### Best Photo Spots
The courtyard with its twinkling lights offers a romantic photo opportunity. The dishes themselves are beautifully presented and worth capturing. The exterior of the building is also a classic Los Angeles landmark.

### Insider Tips
Tip: Reservations are highly recommended, especially for dinner. Dress code is smart casual. Try the house-made bread and pastries. Don't miss the brunch on weekends.`,
        practicalInfo: {
        howToGetThere: "Located at 624 S La Brea Ave, Los Angeles, CA 90036. Street parking is available (may be limited). Rideshare is recommended.",
        openingHours: "Varies. Check their website for current hours. Closed Mondays.",
        cost: "Expensive (entrees $30-$50)",
        website: "republiquela.com"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["food", "dining", "culinary", "romantic"],
        costLevel: "Expensive",
        seasonalBest: "Year-round",
        photoOpportunity: "Courtyard with twinkling lights at night.",
        insiderTip: "Join their mailing list for last-minute reservation openings.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible."
      }
      },
        {
        name: "Intelligentsia Coffee",
        description: `## Overview
Intelligentsia Coffee is a specialty coffee roaster with several locations throughout Los Angeles. Known for its high-quality beans and expertly crafted drinks, it's a favorite among coffee aficionados. The atmosphere is modern and stylish, making it a great place to relax or catch up with friends. I found it a surprisingly peaceful place, even when busy. A nice place to spend some time.

### Best Photo Spots
Capture the coffee preparation process at the bar. The modern interior design offers great photo opportunities. Don't miss the latte art.

### Insider Tips
Tip: Try their signature Black Cat espresso. Ask the baristas for recommendations. Be prepared for a wait during peak hours. Don't miss their single-origin coffee offerings.`,
        practicalInfo: {
        howToGetThere: "Various locations throughout Los Angeles. Check their website for the nearest location.",
        openingHours: "Varies by location. Check their website for current hours.",
        cost: "Budget-friendly (coffee prices $4-$6)",
        website: "intelligentsiacoffee.com"
      },
      discoveryTags: {
        timeRequired: "30-60 minutes",
        experienceLevel: "Easy Access",
        interests: ["coffee", "cafe", "relax", "local"],
        costLevel: "Budget-friendly",
        seasonalBest: "Year-round",
        photoOpportunity: "Latte art and the coffee preparation process.",
        insiderTip: "Visit the Silver Lake location on a weekday morning for a quieter experience.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible (varies by location)."
      }
      },
        {
        name: "The Broad",
        description: `## Overview
The Broad is a contemporary art museum in downtown Los Angeles, housing an impressive collection of postwar and contemporary art. Its architecture is stunning, and entry is free. Some say it's the best free art museum in the city, and I think they might be right. Be prepared to reserve your tickets in advance, though.

### Best Photo Spots
Take a photo in the 'Infinity Mirrored Room' by Yayoi Kusama (reservations required). Capture the architectural details of the building's exterior. The museum's rooftop offers great city views.

### Insider Tips
Tip: Reserve free tickets online in advance to guarantee entry. Visit on a weekday morning or evening to avoid the biggest crowds. Consider joining a free guided tour to learn more about the art. Don't miss the special exhibitions; they often require separate tickets.`,
        practicalInfo: {
        howToGetThere: "Take the Metro Red or Purple Line to Civic Center/Grand Park Station. Walk south on Grand Avenue.",
        openingHours: "Tuesday & Wednesday: 11:00 AM - 5:00 PM, Thursday & Friday: 11:00 AM - 8:00 PM, Saturday & Sunday: 10:00 AM - 6:00 PM, Closed on Mondays",
        cost: "Free (special exhibitions may require tickets)",
        website: "thebroad.org"
      },
      discoveryTags: {
        timeRequired: "2-3 hours",
        experienceLevel: "Easy Access",
        interests: ["art", "culture", "modern art", "architecture"],
        costLevel: "Free",
        seasonalBest: "Year-round",
        photoOpportunity: "Yayoi Kusama's 'Infinity Mirrored Room'.",
        insiderTip: "Check for same-day tickets released daily at 10 AM online for a chance to skip the standby line.",
        hiddenGem: false,
        familyFriendly: true,
        accessibilityNotes: "Wheelchair accessible with elevators and ramps."
      }
      }
      ]}
      logistics={{
        gettingAround: `## Getting Around Los Angeles

Navigating Los Angeles can be challenging due to its size and traffic. However, several transportation options are available to explore the city.

### Public Transport
The Los Angeles Metro system includes trains and buses that connect various parts of the city. The Metro Rail is a good option for getting to downtown, Hollywood, and Santa Monica. Consider purchasing a TAP card for easy fare payment. The buses are a good option for longer distances, but can be slow during peak times. 

### Taxis & Rideshare
Taxis and rideshare services like Uber and Lyft are readily available in Los Angeles. They offer a convenient way to get around, especially when public transport is not an option. However, fares can be expensive during peak hours. 

### Walking & Cycling
Walking and cycling are great ways to explore certain neighborhoods, such as Santa Monica, Venice, and downtown Los Angeles. Consider renting a bike to cycle along the beach path or explore the city's bike lanes.`,
        whereToStay: `## Where to Stay in Los Angeles

Los Angeles offers a wide range of accommodation options to suit every budget and preference.

### Best Areas
* Downtown Los Angeles (DTLA): A vibrant area with modern hotels, restaurants, and attractions.
* Hollywood: Home to iconic landmarks and entertainment venues.
* Santa Monica: A beachfront neighborhood with a relaxed atmosphere.

### Luxury Options
* The Beverly Hills Hotel: An iconic hotel with luxurious rooms and amenities.
* The Peninsula Beverly Hills: A sophisticated hotel with a rooftop pool and spa.

### Budget-Friendly
* Freehand Los Angeles: A hostel with private rooms and shared dorms.
* The Line Hotel: A trendy hotel with stylish rooms and a rooftop pool.`,
        bestTimeToVisit: `## Best Time to Visit Los Angeles

The best time to visit Los Angeles depends on your preferences and interests.

### Peak Season
The summer months (June-August) are peak season in Los Angeles, with warm weather and plenty of outdoor activities. However, expect larger crowds and higher prices.

### Weather Overview
Los Angeles has a Mediterranean climate, with mild winters and warm, sunny summers. The average temperature in January is around 60°F (15°C), while the average temperature in July is around 75°F (24°C).

### Local Events
Los Angeles hosts numerous events throughout the year, including the LA Film Festival (June), the Hollywood Bowl summer concert series (June-September), and the Tournament of Roses Parade (January).`,
        suggestedItinerary: `## Suggested Los Angeles Itinerary

Here's a suggested itinerary for a 3-day trip to Los Angeles:

### Day 1
* Morning: Visit the Hollywood Walk of Fame and TCL Chinese Theatre.
* Afternoon: Explore Griffith Observatory for panoramic views of the city.
* Evening: Have dinner in Hollywood and catch a show at a local theater.

### Day 2
* Morning: Visit the Getty Center to admire European art and gardens.
* Afternoon: Relax on the beaches of Santa Monica and visit the Santa Monica Pier.
* Evening: Have dinner in Santa Monica and enjoy the sunset.

### Day 3
* Morning: Explore downtown Los Angeles, including Grand Central Market and The Broad.
* Afternoon: Visit Disneyland Park in Anaheim (optional).
* Evening: Have dinner in downtown Los Angeles and enjoy the city's nightlife.`
      }}
      faqs={[
        {
        question: "What are the best things to do in Los Angeles?",
        answer: `Los Angeles offers a wide range of attractions, including the Hollywood Walk of Fame, Griffith Observatory, The Getty Center, Santa Monica Pier & Beach, Disneyland Park, Grand Central Market, and The Broad.`
      },
        {
        question: "How many days do you need in Los Angeles?",
        answer: `A minimum of 3 days is recommended to explore the main attractions of Los Angeles. However, 5-7 days would allow you to experience the city more fully and explore its diverse neighborhoods.`
      },
        {
        question: "What is Los Angeles famous for?",
        answer: `Los Angeles is famous for its entertainment industry, Hollywood, beaches, diverse culture, and iconic landmarks.`
      },
        {
        question: "When is the best time to visit Los Angeles?",
        answer: `The best time to visit Los Angeles is during the spring (March-May) or fall (September-November) for pleasant weather and fewer crowds.`
      }
      ]}
      discoveryData={{
        cityPersonality: "Vibrant, Diverse, Energetic",
        budgetBreakdown: {
          freeActivities: "Visit the Hollywood Walk of Fame,Explore Griffith Observatory,Relax on the beaches of Santa Monica,Visit The Broad (free admission)",
          budgetFriendly: "Grand Central Market (meal: $10-20),Metro Day Pass ($7),Bike rental in Santa Monica ($10-20/hour),La Brea Tar Pits admission ($15)",
          splurgeWorthy: "Fine dining at République (meal: $75+),Helicopter tour of Los Angeles ($200+),Disneyland Park ticket ($150+)"
        },
        localSecrets: ["To avoid crowds at Griffith Observatory, visit on Tuesdays at 8:30 AM when locals arrive for morning coffee and stargazing before the tour buses show up. Enter through the side door on Vermont Canyon Road to bypass the main entrance.", "To use public transport like a local, purchase a TAP card for $2 at a Metro vending machine. Download the Citymapper app for real-time bus and train schedules. Stand to the right on escalators to allow others to pass on the left.", "A realistic budget for 3 days is approximately $45-60 per day. This includes $15-20 for meals (street food/casual restaurants), $7 for a Metro day pass, $10 for attraction entry (museum or park), and $10-15 for miscellaneous expenses.", "For authentic goods, visit the Olvera Street Marketplace in downtown Los Angeles. Bargain for souvenirs, handmade crafts, and traditional Mexican clothing. Arrive before noon for the best selection and fewer crowds.", "Avoid the restaurants on Hollywood Boulevard, especially those with pushy promoters. They are overpriced and target tourists. Instead, try Musso & Frank Grill at 6667 Hollywood Blvd, a classic Hollywood eatery with a rich history and better food.", "The Tournament of Roses Parade takes place annually on January 1st (or January 2nd if the 1st falls on a Sunday). This event causes significant road closures and traffic congestion in Pasadena, so plan your travel accordingly. Expect delays and arrive early."],
        diningHighlights: {
          mustTryDishes: "Koreatown BBQ,Tacos from a local food truck,California-style pizza,Avocado toast",
          bestCafes: "Intelligentsia Coffee (Silver Lake): Known for its high-quality coffee and stylish atmosphere.,Urth Caffé (various locations): Popular for its organic coffee and healthy food options.",
          topRestaurants: "République (La Brea): French-inspired cuisine in a historic building.,Gracias Madre (West Hollywood): Plant-based Mexican cuisine.",
          foodMarkets: "Grand Central Market (downtown Los Angeles): A historic food hall with a diverse array of culinary delights.",
          diningTips: "Tipping is customary in Los Angeles restaurants (15-20%). Reservations are recommended for popular restaurants, especially on weekends. Street food is a great way to experience the local cuisine."
        },
        seasonalHighlights: {
          spring: "Wildflowers bloom in the surrounding hills, and the weather is mild and pleasant.",
          summer: "Beach season is in full swing, and there are numerous outdoor events and festivals.",
          fall: "The weather is still warm, but the crowds have thinned out. It's a great time to visit theme parks and explore the city's cultural attractions.",
          winter: "The weather is mild, and there are holiday-themed events and activities. It's a good time to visit museums and enjoy indoor attractions."
        },
        quickFacts: {
          totalAttractions: "10",
          freeActivities: "4",
          averageTimePerAttraction: "1-2 hours",
          walkingFriendly: true,
          publicTransportQuality: "Good"
        }
      }}
    />
  );
};