const fs = require('fs');
const path = require('path');

// Mapping from component names to route names (based on the city files configuration)
const cityRoutes = {
  'Aarhus': 'aarhus',
  'Accra': 'accra', 
  'AddisAbaba': 'addis-ababa',
  'Adelaide': 'adelaide',
  'Ahmedabad': 'ahmedabad',
  'Albuquerque': 'albuquerque',
  'Algiers': 'algiers',
  'AliceSprings': 'alice-springs',
  'Antwerp': 'antwerp',
  'Arequipa': 'arequipa',
  'Asuncion': 'asuncion',
  'Auckland': 'auckland',
  'Austin': 'austin',
  'Bandung': 'bandung',
  'Barranquilla': 'barranquilla',
  'Belgrade': 'belgrade',
  'BeloHorizonte': 'belo-horizonte',
  'Bergen': 'bergen',
  'Bilbao': 'bilbao',
  'Bologna': 'bologna',
  'Bordeaux': 'bordeaux',
  'Brisbane': 'brisbane',
  'Bucharest': 'bucharest',
  'Busan': 'busan',
  'Calgary': 'calgary',
  'CapeTown': 'cape-town',
  'Cartagena': 'cartagena',
  'Casablanca': 'casablanca',
  'Christchurch': 'christchurch',
  'Copenhagen': 'copenhagen',
  'Cusco': 'cusco',
  'Dakar': 'dakar',
  'Darwin': 'darwin',
  'Ghent': 'ghent',
  'Gothenburg': 'gothenberg',
  'Guadalajara': 'guadalajara',
  'Guayaquil': 'guayaquil',
  'Helsinki': 'helsinki',
  'Hobart': 'hobart',
  'Krakow': 'krakow',
  'Lagos': 'lagos',
  'Lyon': 'lyon',
  'Marrakech': 'marrakech',
  'Marseille': 'marseille',
  'Medellin': 'medellin',
  'Nashville': 'nashville',
  'Nice': 'nice',
  'Ottawa': 'ottawa',
  'Palermo': 'palermo',
  'Perth': 'perth',
  'QuebecCity': 'quebec-city',
  'Quito': 'quito',
  'Salvador': 'salvador',
  'Seville': 'seville',
  'Stockholm': 'stockholm',
  'Strasbourg': 'strasbourg',
  'Suva': 'suva',
  'Tokyo': 'tokyo',
  'Tunis': 'tunis',
  'Turin': 'turin',
  'Valencia': 'valencia',
  'Warsaw': 'warsaw',
  'Wellington': 'wellington'
};

// Get list of available TSX files
const citiesDir = path.join(__dirname, 'src', 'pages', 'cities');
const tsxFiles = fs.readdirSync(citiesDir)
  .filter(file => file.endsWith('.tsx'))
  .map(file => file.replace('.tsx', ''))
  .sort();

console.log('Available cities:', tsxFiles.length);

// Generate imports
const imports = tsxFiles
  .map(cityName => `import { ${cityName} } from './pages/cities/${cityName}';`)
  .join('\n');

// Generate routes
const routes = tsxFiles
  .map(cityName => {
    const routeName = cityRoutes[cityName] || cityName.toLowerCase();
    return `        <Route path="/${routeName}" element={<${cityName} />} />`;
  })
  .join('\n');

console.log('\n--- IMPORTS TO ADD ---');
console.log(imports);

console.log('\n--- ROUTES TO ADD ---');
console.log(routes);

// Generate complete App.tsx content
const appContent = `
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

export default App;
`;

console.log('\n--- COMPLETE APP.TSX CONTENT ---');
console.log(appContent);

// Save to file
fs.writeFileSync(path.join(__dirname, 'src', 'App-generated.tsx'), appContent);
console.log('\n✓ Generated App-generated.tsx with all routes');