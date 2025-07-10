import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Nouma: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Nouméa, New Caledonia (2025 Guide)"
      description="Planning a trip to Nouméa? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Tjibaou Cultural Centre",
        "Anse Vata Beach",
        "Île aux Canards (Duck Island)",
        "Aquarium des Lagons",
        "Marché de la Moselle (Municipal Market)"
]}
      attractions={[
        {
                "name": "Tjibaou Cultural Centre",
                "description": "An architectural marvel designed by Renzo Piano, the Tjibaou Cultural Centre is an essential visit for understanding Kanak culture. The structure itself, inspired by traditional Kanak huts, is breathtaking, blending seamlessly into the surrounding mangrove forest. Inside, you'll find stunning exhibitions of Melanesian art, history, and traditions, celebrating the indigenous heritage of New Caledonia.\n\nThe center is more than a museum; it's a living cultural hub with performance spaces, a library, and beautifully landscaped grounds that follow a path interpreting the Kanak creation myth. It's a powerful and moving tribute to the Kanak identity, named after the independence leader Jean-Marie Tjibaou, and provides profound context for your visit to the islands.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.adck.nc/"
                }
        },
        {
                "name": "Anse Vata Beach",
                "description": "Anse Vata is Nouméa's premier beach, a long, curving bay that is the vibrant heart of the city's tourist activity. Fringed with palm trees and lined with hotels, restaurants, and chic boutiques, it's the perfect place for a stroll, a swim, or simply relaxing on the white sand. The consistent trade winds make it a world-renowned hotspot for windsurfing and kitesurfing, with colorful sails dotting the turquoise water throughout the day.\n\nAs the sun sets, the area comes alive with a lively atmosphere. Enjoy a cocktail at a beachfront bar, dine at one of the many excellent restaurants, or just watch the world go by. From Anse Vata, you can also catch a water taxi to the nearby Île aux Canards and Îlot Maître, making it a convenient hub for aquatic adventures.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.nouvellecaledonie.travel/"
                }
        },
        {
                "name": "Île aux Canards (Duck Island)",
                "description": "Just a five-minute water taxi ride from Anse Vata, Île aux Canards is a tiny, idyllic paradise perfect for a half-day escape. This protected marine reserve offers some of the most accessible and rewarding snorkeling in Nouméa. An underwater trail, marked with five submerged buoys, guides you through coral gardens teeming with colorful fish, making it ideal for beginners and families.\n\nThe island itself has a relaxed beach club vibe, with sun loungers and umbrellas for rent, a restaurant serving lunch and drinks, and a collection of contemporary sculptures dotted along the shore. It's the ultimate easy tropical getaway without having to venture far from the city.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.ileauxcanards.nc/"
                }
        },
        {
                "name": "Aquarium des Lagons",
                "description": "Discover the incredible marine biodiversity of New Caledonia's UNESCO World Heritage lagoon without getting wet at the Aquarium des Lagons. This modern and well-maintained aquarium provides a fascinating look into the underwater world, from vibrant coral ecosystems to deep-sea creatures. Highlights include a large shark tank, a fluorescent coral display that glows in the dark, and tanks dedicated to the iconic nautilus.\n\nThe exhibits are thoughtfully designed, showcasing the different habitats within the lagoon and the wider Pacific. It’s an educational and entertaining experience for all ages, offering a deeper appreciation for the fragile environment that makes New Caledonia so special.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.aquarium.nc/"
                }
        },
        {
                "name": "Marché de la Moselle (Municipal Market)",
                "description": "To experience the vibrant local life of Nouméa, a visit to the Marché de la Moselle is a must. Housed in distinctive blue-roofed hexagonal pavilions on the waterfront, this bustling market is a feast for the senses. Every morning (except Mondays), locals and tourists gather to shop for the freshest produce, from tropical fruits and vegetables to an incredible array of freshly caught seafood.\n\nBeyond the food stalls, you'll find pavilions dedicated to arts and crafts, where you can buy authentic souvenirs like sarongs (pareos), carved wood, and locally made jewelry. Grab a fresh coconut water or a crêpe and immerse yourself in the lively atmosphere. It's the perfect place to feel the city's pulse and sample its local flavors.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.noumea.nc/marches"
                }
        },
        {
                "name": "Place des Cocotiers",
                "description": "The true heart of Nouméa, Place des Cocotiers (Coconut Tree Square) is a sprawling public park in the city center. This is where Nouméa comes to relax, socialize, and celebrate. The square is divided into several areas, including the beautiful bandstand (Kiosque à Musique), the monumental Celeste Fountain, and vast grassy areas shaded by flame trees and, of course, coconut palms.\n\nThroughout the week, the square hosts markets, concerts, and public events. It’s an excellent spot for people-watching, enjoying a picnic, or taking a break from sightseeing. Surrounded by colonial-era buildings, shops, and cafes, it serves as the central hub from which to explore the downtown area.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.noumea.nc/equipements/place-des-cocotiers"
                }
        },
        {
                "name": "Baie des Citrons (Lemon Bay)",
                "description": "Nestled next to Anse Vata, Baie des Citrons offers a different, more sheltered beach experience. Its calmer waters are protected from the prevailing winds, making it the preferred spot for families and swimmers. The beach is lined with a fantastic selection of restaurants, bars, and ice cream parlors, many with outdoor seating right on the sand.\n\nBy day, it's a relaxed haven for swimming and sunbathing. As evening approaches, the bay transforms into one of Nouméa's most popular dining and nightlife destinations. Enjoying a meal or a drink with your feet in the sand as the sun goes down over the water is a quintessential Nouméa experience.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.nouvellecaledonie.travel/"
                }
        },
        {
                "name": "Phare Amédée (Amedee Lighthouse)",
                "description": "For a perfect day trip, journey to Amedee Islet, home to the iconic Phare Amédée. This striking white metal lighthouse was built in Paris in 1862 and shipped in pieces to New Caledonia. Climbing the 247 steps to the top rewards you with breathtaking 360-degree views of the turquoise lagoon, coral reefs, and the mountainous mainland.\n\nThe islet itself is a protected marine reserve with crystal-clear water perfect for snorkeling among turtles and colorful fish. Most visitors arrive on an all-inclusive day tour that includes a glass-bottom boat tour, a buffet lunch with traditional dance performances, and plenty of time to swim and relax. It's a fantastic way to experience the beauty of the lagoon.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.amedeeisland.com/"
                }
        }
]}
    />
  );
};