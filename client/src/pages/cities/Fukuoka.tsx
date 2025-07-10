import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Fukuoka: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Fukuoka, Japan (2025 Guide)"
      description="Planning a trip to Fukuoka? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Dazaifu Tenmangu Shrine",
        "Yatai Food Stalls",
        "Ohori Park",
        "Canal City Hakata",
        "Fukuoka Castle Ruins (Maizuru Park)"
]}
      attractions={[
        {
                "name": "Dazaifu Tenmangu Shrine",
                "description": "A short trip from the city center, Dazaifu Tenmangu is one of Japan's most important Tenmangu shrines, dedicated to Sugawara no Michizane, the deity of learning and scholarship. Students from all over the country flock here to pray for academic success. The shrine's grounds are stunning, featuring a picturesque pond with an arched bridge, thousands of plum trees that blossom beautifully in late winter, and impressive main halls.\n\nBefore entering, walk along the atmospheric 'sando' (approach road) lined with shops selling 'umegae mochi,' a grilled rice cake with red bean paste that is a local specialty. The Kanko Historical Museum and the striking, modern architecture of the Kyushu National Museum are also located nearby, making Dazaifu a perfect half-day excursion.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.dazaifutenmangu.or.jp/en/"
                }
        },
        {
                "name": "Yatai Food Stalls",
                "description": "Fukuoka's yatai, or open-air food stalls, are an iconic part of the city's identity. Every evening around 6 PM, these small, intimate stalls pop up, primarily in the Tenjin and Nakasu Island areas, seating just a handful of customers. They offer a unique dining experience where you can chat with the chef and fellow diners while enjoying delicious, affordable food.\n\nThe menu typically includes local specialties like Hakata ramen (pork bone broth noodles), yakitori (grilled skewers), oden (winter hot pot), and gyoza (pan-fried dumplings). Grabbing a seat at a yatai is not just about the food; it's about soaking in the lively atmosphere and experiencing Fukuoka's warm hospitality firsthand.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://yokanavi.com/en/yatai/"
                }
        },
        {
                "name": "Ohori Park",
                "description": "Ohori Park is Fukuoka's urban oasis, a large and beautiful public park designed around a central pond that was once part of the Fukuoka Castle's moat system. Its design was modeled after the classical West Lake in China, featuring three small islands connected by elegant stone bridges. A 2-kilometer path circles the pond, making it a popular spot for jogging, walking, and cycling.\n\nWithin the park, you can rent swan boats, visit the tranquil Ohori Park Japanese Garden (for a small fee), or explore the Fukuoka Art Museum, which houses a notable collection of modern and pre-modern art. It's the perfect place to relax and escape the city buzz for a few hours.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.ohorikouen.jp/en/"
                }
        },
        {
                "name": "Canal City Hakata",
                "description": "More than just a shopping mall, Canal City Hakata is a massive multi-level complex described as a 'city within a city.' An artificial canal runs through its center, hosting spectacular fountain shows set to music every half hour. The complex features hundreds of shops, cafes, restaurants, a cinema, a theater, and two hotels.\n\nThe unique, colorful architecture is an attraction in itself. You'll find everything from international brands like Zara and Muji to the Ramen Stadium on the fifth floor, where you can sample ramen from different regions of Japan. It’s a great place to spend a rainy day or enjoy an evening of entertainment and dining.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://canalcity.co.jp/english"
                }
        },
        {
                "name": "Fukuoka Castle Ruins (Maizuru Park)",
                "description": "Explore the remnants of Fukuoka's past at the Fukuoka Castle Ruins, located within Maizuru Park. Once the largest castle in Kyushu, it was built in the early 17th century but was largely dismantled after the Meiji Restoration. Today, you can wander through the expansive grounds, trace the original layout, and see ruined walls, turrets, and gates.\n\nClimb to the top of the main citadel's foundation for a commanding view of the city. The park is especially popular during late March and early April when hundreds of cherry trees burst into bloom, creating one of the city's best hanami (cherry blossom viewing) spots.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://fukuokajyo.com/en/"
                }
        },
        {
                "name": "Kushida Shrine",
                "description": "Kushida Shrine is the spiritual heart of Fukuoka and is believed to have been founded in 757. It is dedicated to several deities, including Amaterasu (goddess of the sun) and Susanoo (god of storms), and is affectionately known as 'O-kushida-san' by locals. This shrine is the starting point for the famous Hakata Gion Yamakasa festival in July, and one of the massive decorative floats used in the festival is on display here year-round.\n\nDon't miss the ancient Gingko tree on the grounds, said to be over 1,000 years old, and a well whose water is believed to grant longevity. The shrine offers a peaceful respite in the middle of the bustling Hakata district.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.hakatayamakasa.com/kushidajinja.php"
                }
        },
        {
                "name": "Fukuoka Tower",
                "description": "The tallest seaside tower in Japan, Fukuoka Tower stands at 234 meters and is the city's most recognizable modern landmark. Covered in 8,000 half-mirrors, its triangular design is striking against the skyline. Take the elevator up to the main observation deck at 123 meters for breathtaking 360-degree panoramic views of Fukuoka city, Hakata Bay, and the surrounding mountains.\n\nThe tower also features a 'Lover's Sanctuary' for couples and a sky lounge cafe. In the evening, the tower comes alive with spectacular illuminations that change with the seasons and for special events, making it a beautiful sight both day and night.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.fukuokatower.co.jp/en/"
                }
        },
        {
                "name": "Momochi Seaside Park",
                "description": "Located right in front of Fukuoka Tower, Momochi Seaside Park (Seaside Momochi) is a modern waterfront area built on reclaimed land. Its centerpiece is a long, clean artificial beach, perfect for a stroll or relaxing on the sand. The central plaza, Marizon, is a collection of restaurants, shops, and a wedding hall built on a pier extending into the bay.\n\nThis area provides the best vantage point for photos of Fukuoka Tower. You can also catch a ferry from here to Uminonakamichi Seaside Park across the bay. It's a popular spot for locals to unwind, especially during sunset.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://www.marizon-kankyo.jp/en/"
                }
        }
]}
    />
  );
};