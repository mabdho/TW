
import { cityFiles, convertHtmlToReact } from './cityConverter';

// This would be used in a Node.js environment to batch convert files
export async function batchConvertCities(startIndex: number = 0, batchSize: number = 10) {
  const batch = cityFiles.slice(startIndex, startIndex + batchSize);
  const convertedFiles: Array<{componentName: string, content: string, routeName: string}> = [];

  for (const city of batch) {
    try {
      // In a real implementation, you would read the HTML file here
      // const htmlContent = await fs.readFile(`src/pages/cities/${city.filename}`, 'utf-8');
      // const reactContent = await convertHtmlToReact(htmlContent, city.componentName);
      
      // For now, we'll create a placeholder
      const reactContent = `import React from 'react';
import { CityPage } from '../../components/CityPage';

export const ${city.componentName}: React.FC = () => {
  return (
    <CityPage
      title="${city.componentName} Travel Guide"
      description="Discover the best things to do in ${city.componentName}. From iconic landmarks to hidden gems, our comprehensive guide covers everything you need to know for an unforgettable visit."
      highlights={[
        "Top Attraction 1",
        "Top Attraction 2", 
        "Top Attraction 3",
        "Top Attraction 4",
        "Top Attraction 5"
      ]}
      attractions={[
        {
          name: "Sample Attraction",
          description: "A wonderful place to visit in ${city.componentName}.",
          practicalInfo: {
            howToGetThere: "Easy to reach by public transport",
            openingHours: "Daily 9:00 AM - 5:00 PM",
            cost: "Free admission",
            website: "example.com"
          }
        }
      ]}
    />
  );
};`;

      convertedFiles.push({
        componentName: city.componentName,
        content: reactContent,
        routeName: city.routeName
      });
    } catch (error) {
      console.error(`Error converting ${city.filename}:`, error);
    }
  }

  return convertedFiles;
}

export function generateAppRoutes(cities: string[]): string {
  const imports = cities.map(city => `import { ${city} } from './pages/cities/${city}';`).join('\n');
  const routes = cities.map(city => {
    const routeName = cityFiles.find(c => c.componentName === city)?.routeName || city.toLowerCase();
    return `        <Route path="/cities/${routeName}" element={<${city} />} />`;
  }).join('\n');

  return `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
${imports}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
${routes}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;`;
}
