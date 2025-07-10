import React from 'react';
import { CityPage } from '../../components/CityPage';

export const Gdansk: React.FC = () => {
  return (
    <CityPage
      title="15 Best Things to Do in Gdansk, Poland (2025 Guide)"
      description="Planning a trip to Gdansk? Discover the top 15 things to do, from iconic landmarks to unique local experiences. Our complete 2025 guide covers where to stay, what to eat, and insider tips!"
      highlights={[
        "Long Market and Neptune's Fountain",
        "St. Mary's Basilica",
        "European Solidarity Centre",
        "Museum of the Second World War",
        "Mariacka Street"
]}
      attractions={[
        {
                "name": "Long Market and Neptune's Fountain",
                "description": "The heart of Gdansk's Main Town, the Long Market (Długi Targ) is a stunning pedestrian thoroughfare flanked by ornate, colorful facades. Historically, this was the domain of the city's wealthiest merchants and the setting for royal processions along the 'Royal Route'. It's an architectural marvel, with each building telling a story of Gdansk's prosperous past. \n\nAt its center stands Neptune's Fountain, a magnificent 17th-century bronze statue symbolizing the city's connection to the sea. This iconic landmark is a popular meeting point and a perfect spot for photos. Surrounding the fountain are Artus Court and the Golden House, further testaments to the city's former glory. It's the perfect place to begin your exploration, grab a coffee at an outdoor cafe, and soak in the vibrant atmosphere.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://visitgdansk.com/en/"
                }
        },
        {
                "name": "St. Mary's Basilica",
                "description": "Dominating the city skyline, St. Mary's Basilica (Bazylika Mariacka) is one of the largest brick churches in the world. Its sheer scale is breathtaking, capable of holding up to 25,000 people. Construction began in the 14th century, and its massive form served as a beacon for ships approaching the port. The interior is stark and white, a result of post-war reconstruction, which creates a powerful sense of space and light.\n\nFor the adventurous, the real highlight is climbing the 405 steps to the top of the 78-meter-high tower. The effort is rewarded with unparalleled panoramic views of Gdansk's red-tiled roofs, the Motława River, and the surrounding cityscape. Inside, don't miss the intricate astronomical clock and the beautiful main altar.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://bazylikamariacka.gdansk.pl/"
                }
        },
        {
                "name": "European Solidarity Centre",
                "description": "This is more than a museum; it's a monumental tribute to the Polish Solidarity (Solidarność) movement, which began in the Gdansk shipyards and played a crucial role in the fall of communism. The building itself is a striking piece of modern architecture, designed to resemble a ship's hull, clad in rust-colored steel. Inside, the interactive and deeply moving permanent exhibition tells the story of the fight for freedom and civil rights in Poland and across Eastern Europe.\n\nThe exhibits use archival footage, historical artifacts (like the original 21 demands written on wooden boards), and personal testimonies to create a powerful narrative. It's an essential visit for understanding modern Polish history and the global impact of this peaceful revolution. Even the most history-averse visitor will leave profoundly moved and inspired.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://ecs.gda.pl/en/"
                }
        },
        {
                "name": "Museum of the Second World War",
                "description": "Opened in 2017, this world-class museum offers a comprehensive and harrowing look at World War II from a global perspective, with a special focus on the Polish experience. The main exhibition is located 14 meters underground, a symbolic gesture representing the hidden horrors of war. The narrative is vast, covering the rise of totalitarianism, the daily life of civilians under occupation, resistance movements, and the Holocaust.\n\nThe museum's design is stark and immersive, using powerful artifacts, life-sized reconstructions, and multimedia displays to tell the story of human suffering and resilience. Its location is also significant, as Gdansk (then Danzig) was where the war began. It's an emotionally heavy but incredibly important museum that provides crucial context for understanding the city and the 20th century.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://muzeum1939.pl/en"
                }
        },
        {
                "name": "Mariacka Street",
                "description": "Often cited as one of the most beautiful streets in Gdansk, Ulica Mariacka is a cobblestoned gem running from St. Mary's Basilica to the Motława River. What makes it unique are the ornate, gargoyle-like 'stoops' (przedproża) that adorn the front of each narrow townhouse. These raised terraces are a characteristic feature of Gdansk's historical architecture.\n\nToday, the street is famous for its amber shops and artisan workshops. You can watch jewelers at work, polishing and setting the 'Baltic Gold' into beautiful pieces. The romantic, slightly melancholic atmosphere, especially in the evening light, makes it a perfect place for a leisurely stroll. It captures the essence of Old Gdansk's charm and its long-standing connection to the amber trade.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://visitgdansk.com/en/"
                }
        },
        {
                "name": "The Crane (Żuraw)",
                "description": "An iconic symbol of Gdansk's maritime heritage, the Crane is a massive 15th-century wooden port crane that looms over the Motława River. It was once the largest of its kind in medieval Europe, used to load cargo onto ships and install masts. Powered by men walking inside two large wooden wheels (like human-sized hamster wheels), it could lift up to four tons. \n\nToday, the restored Crane is part of the National Maritime Museum. You can go inside to see the fascinating lifting mechanism and learn about the bustling port life of Hanseatic Gdansk. It's a striking piece of medieval engineering and a testament to the city's historical importance as a trading hub.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://nmm.pl/en/zuraw/"
                }
        },
        {
                "name": "Motława River Embankment (Długie Pobrzeże)",
                "description": "Strolling along the Długie Pobrzeże, the long embankment of the Motława River, is a quintessential Gdansk experience. This lively boardwalk is lined with cafes, restaurants, and amber shops, all housed in historic buildings with picturesque waterfront views. From here, you can admire the city's iconic landmarks like the Crane and the medieval water gates.\n\nThe embankment is always buzzing with activity. You can watch replica pirate ships and modern tour boats navigate the river, listen to street musicians, or simply find a bench and people-watch. It's particularly beautiful at dusk when the lights of the city reflect on the water, creating a magical atmosphere.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://visitgdansk.com/en/"
                }
        },
        {
                "name": "Westerplatte",
                "description": "A short boat or bus ride from the city center, Westerplatte is a site of immense historical significance. It was here, on September 1, 1939, that the first shots of World War II were fired when a German battleship attacked the small Polish military depot. The Polish garrison heroically held out for seven days against overwhelming odds. \n\nToday, the peninsula is a poignant open-air memorial. You can walk among the ruins of the barracks, see the towering Monument to the Coast Defenders, and reflect on the beginning of the world's deadliest conflict. It's a sobering but essential pilgrimage for anyone interested in history, offering a powerful counterpoint to the rebuilt beauty of the city center.",
                "practicalInfo": {
                        "howToGetThere": "Easy to reach by public transport",
                        "openingHours": "Check official website for hours",
                        "cost": "Entry fees may apply",
                        "website": "https://muzeum1939.pl/en/westerplatte"
                }
        }
]}
    />
  );
};