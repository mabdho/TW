const fs = require('fs').promises;
const path = require('path');
const { JSDOM } = require('jsdom');

// City files configuration
const cityFiles = [
  { filename: 'aarhus.html', componentName: 'Aarhus', routeName: 'aarhus' },
  { filename: 'accra.html', componentName: 'Accra', routeName: 'accra' },
  { filename: 'addis-ababa.html', componentName: 'AddisAbaba', routeName: 'addis-ababa' },
  { filename: 'adelaide.html', componentName: 'Adelaide', routeName: 'adelaide' },
  { filename: 'ahmedabad.html', componentName: 'Ahmedabad', routeName: 'ahmedabad' },
  { filename: 'albuquerque.html', componentName: 'Albuquerque', routeName: 'albuquerque' },
  { filename: 'algiers.html', componentName: 'Algiers', routeName: 'algiers' },
  { filename: 'alice-springs.html', componentName: 'AliceSprings', routeName: 'alice-springs' },
  { filename: 'antwerp.html', componentName: 'Antwerp', routeName: 'antwerp' },
  { filename: 'arequipa.html', componentName: 'Arequipa', routeName: 'arequipa' },
  { filename: 'asuncin.html', componentName: 'Asuncion', routeName: 'asuncion' },
  { filename: 'auckland.html', componentName: 'Auckland', routeName: 'auckland' },
  { filename: 'austin.html', componentName: 'Austin', routeName: 'austin' },
  { filename: 'bandung.html', componentName: 'Bandung', routeName: 'bandung' },
  { filename: 'barranquilla.html', componentName: 'Barranquilla', routeName: 'barranquilla' },
  { filename: 'belgrade.html', componentName: 'Belgrade', routeName: 'belgrade' },
  { filename: 'belo-horizonte.html', componentName: 'BeloHorizonte', routeName: 'belo-horizonte' },
  { filename: 'bergen.html', componentName: 'Bergen', routeName: 'bergen' },
  { filename: 'bilbao.html', componentName: 'Bilbao', routeName: 'bilbao' },
  { filename: 'birmingham.html', componentName: 'Birmingham', routeName: 'birmingham' },
  { filename: 'bologna.html', componentName: 'Bologna', routeName: 'bologna' },
  { filename: 'bordeaux.html', componentName: 'Bordeaux', routeName: 'bordeaux' },
  { filename: 'brisbane.html', componentName: 'Brisbane', routeName: 'brisbane' },
  { filename: 'bristol.html', componentName: 'Bristol', routeName: 'bristol' },
  { filename: 'bruges.html', componentName: 'Bruges', routeName: 'bruges' },
  { filename: 'brussels.html', componentName: 'Brussels', routeName: 'brussels' },
  { filename: 'bucharest.html', componentName: 'Bucharest', routeName: 'bucharest' },
  { filename: 'budapest.html', componentName: 'Budapest', routeName: 'budapest' },
  { filename: 'buenos-aires.html', componentName: 'BuenosAires', routeName: 'buenos-aires' },
  { filename: 'busan.html', componentName: 'Busan', routeName: 'busan' },
  { filename: 'calgary.html', componentName: 'Calgary', routeName: 'calgary' },
  { filename: 'canberra.html', componentName: 'Canberra', routeName: 'canberra' },
  { filename: 'cape-town.html', componentName: 'CapeTown', routeName: 'cape-town' },
  { filename: 'cardiff.html', componentName: 'Cardiff', routeName: 'cardiff' },
  { filename: 'cartagena.html', componentName: 'Cartagena', routeName: 'cartagena' },
  { filename: 'casablanca.html', componentName: 'Casablanca', routeName: 'casablanca' },
  { filename: 'chambery.html', componentName: 'Chambery', routeName: 'chambery' },
  { filename: 'christchurch.html', componentName: 'Christchurch', routeName: 'christchurch' },
  { filename: 'cologne.html', componentName: 'Cologne', routeName: 'cologne' },
  { filename: 'copenhagen.html', componentName: 'Copenhagen', routeName: 'copenhagen' },
  { filename: 'cork.html', componentName: 'Cork', routeName: 'cork' },
  { filename: 'cusco.html', componentName: 'Cusco', routeName: 'cusco' },
  { filename: 'dakar.html', componentName: 'Dakar', routeName: 'dakar' },
  { filename: 'darwin.html', componentName: 'Darwin', routeName: 'darwin' },
  { filename: 'dhaka.html', componentName: 'Dhaka', routeName: 'dhaka' },
  { filename: 'dortmund.html', componentName: 'Dortmund', routeName: 'dortmund' },
  { filename: 'dublin.html', componentName: 'Dublin', routeName: 'dublin' },
  { filename: 'dusseldorf.html', componentName: 'Dusseldorf', routeName: 'dusseldorf' },
  { filename: 'edinburgh.html', componentName: 'Edinburgh', routeName: 'edinburgh' },
  { filename: 'fes.html', componentName: 'Fes', routeName: 'fes' },
  { filename: 'florence.html', componentName: 'Florence', routeName: 'florence' },
  { filename: 'geneva.html', componentName: 'Geneva', routeName: 'geneva' },
  { filename: 'ghent.html', componentName: 'Ghent', routeName: 'ghent' },
  { filename: 'glasgow.html', componentName: 'Glasgow', routeName: 'glasgow' },
  { filename: 'gothenburg.html', componentName: 'Gothenburg', routeName: 'gothenberg' },
  { filename: 'granada.html', componentName: 'Granada', routeName: 'granada' },
  { filename: 'guadalajara.html', componentName: 'Guadalajara', routeName: 'guadalajara' },
  { filename: 'guayaquil.html', componentName: 'Guayaquil', routeName: 'guayaquil' },
  { filename: 'hamburg.html', componentName: 'Hamburg', routeName: 'hamburg' },
  { filename: 'hamilton.html', componentName: 'Hamilton', routeName: 'hamilton' },
  { filename: 'hannover.html', componentName: 'Hannover', routeName: 'hannover' },
  { filename: 'helsinki.html', componentName: 'Helsinki', routeName: 'helsinki' },
  { filename: 'hobart.html', componentName: 'Hobart', routeName: 'hobart' },
  { filename: 'ibadan.html', componentName: 'Ibadan', routeName: 'ibadan' },
  { filename: 'innsbruck.html', componentName: 'Innsbruck', routeName: 'innsbruck' },
  { filename: 'inverness.html', componentName: 'Inverness', routeName: 'inverness' },
  { filename: 'jakarta.html', componentName: 'Jakarta', routeName: 'jakarta' },
  { filename: 'kano.html', componentName: 'Kano', routeName: 'kano' },
  { filename: 'krakow.html', componentName: 'Krakow', routeName: 'krakow' },
  { filename: 'lagos.html', componentName: 'Lagos', routeName: 'lagos' },
  { filename: 'leipzig.html', componentName: 'Leipzig', routeName: 'leipzig' },
  { filename: 'lille.html', componentName: 'Lille', routeName: 'lille' },
  { filename: 'lima.html', componentName: 'Lima', routeName: 'lima' },
  { filename: 'liverpool.html', componentName: 'Liverpool', routeName: 'liverpool' },
  { filename: 'lyon.html', componentName: 'Lyon', routeName: 'lyon' },
  { filename: 'malmo.html', componentName: 'Malmo', routeName: 'malmo' },
  { filename: 'manchester.html', componentName: 'Manchester', routeName: 'manchester' },
  { filename: 'marrakech.html', componentName: 'Marrakech', routeName: 'marrakech' },
  { filename: 'marseille.html', componentName: 'Marseille', routeName: 'marseille' },
  { filename: 'medellin.html', componentName: 'Medellin', routeName: 'medellin' },
  { filename: 'melbourne.html', componentName: 'Melbourne', routeName: 'melbourne' },
  { filename: 'memphis.html', componentName: 'Memphis', routeName: 'memphis' },
  { filename: 'metz.html', componentName: 'Metz', routeName: 'metz' },
  { filename: 'minneapolis.html', componentName: 'Minneapolis', routeName: 'minneapolis' },
  { filename: 'montreal.html', componentName: 'Montreal', routeName: 'montreal' },
  { filename: 'munich.html', componentName: 'Munich', routeName: 'munich' },
  { filename: 'nantes.html', componentName: 'Nantes', routeName: 'nantes' },
  { filename: 'naples.html', componentName: 'Naples', routeName: 'naples' },
  { filename: 'nashville.html', componentName: 'Nashville', routeName: 'nashville' },
  { filename: 'newcastle.html', componentName: 'Newcastle', routeName: 'newcastle' },
  { filename: 'nice.html', componentName: 'Nice', routeName: 'nice' },
  { filename: 'norwich.html', componentName: 'Norwich', routeName: 'norwich' },
  { filename: 'nuremberg.html', componentName: 'Nuremberg', routeName: 'nuremberg' },
  { filename: 'ottawa.html', componentName: 'Ottawa', routeName: 'ottawa' },
  { filename: 'oxford.html', componentName: 'Oxford', routeName: 'oxford' },
  { filename: 'palermo.html', componentName: 'Palermo', routeName: 'palermo' },
  { filename: 'perth.html', componentName: 'Perth', routeName: 'perth' },
  { filename: 'quebec-city.html', componentName: 'QuebecCity', routeName: 'quebec-city' },
  { filename: 'quito.html', componentName: 'Quito', routeName: 'quito' },
  { filename: 'rennes.html', componentName: 'Rennes', routeName: 'rennes' },
  { filename: 'rotterdam.html', componentName: 'Rotterdam', routeName: 'rotterdam' },
  { filename: 'rouen.html', componentName: 'Rouen', routeName: 'rouen' },
  { filename: 'salvador.html', componentName: 'Salvador', routeName: 'salvador' },
  { filename: 'salzburg.html', componentName: 'Salzburg', routeName: 'salzburg' },
  { filename: 'san-sebastian.html', componentName: 'SanSebastian', routeName: 'san-sebastian' },
  { filename: 'sao-paulo.html', componentName: 'SaoPaulo', routeName: 'sao-paulo' },
  { filename: 'seoul.html', componentName: 'Seoul', routeName: 'seoul' },
  { filename: 'seville.html', componentName: 'Seville', routeName: 'seville' },
  { filename: 'stockholm.html', componentName: 'Stockholm', routeName: 'stockholm' },
  { filename: 'strasbourg.html', componentName: 'Strasbourg', routeName: 'strasbourg' },
  { filename: 'stuttgart.html', componentName: 'Stuttgart', routeName: 'stuttgart' },
  { filename: 'suva.html', componentName: 'Suva', routeName: 'suva' },
  { filename: 'sydney.html', componentName: 'Sydney', routeName: 'sydney' },
  { filename: 'tokyo.html', componentName: 'Tokyo', routeName: 'tokyo' },
  { filename: 'toronto.html', componentName: 'Toronto', routeName: 'toronto' },
  { filename: 'toulouse.html', componentName: 'Toulouse', routeName: 'toulouse' },
  { filename: 'tours.html', componentName: 'Tours', routeName: 'tours' },
  { filename: 'trondheim.html', componentName: 'Trondheim', routeName: 'trondheim' },
  { filename: 'tunis.html', componentName: 'Tunis', routeName: 'tunis' },
  { filename: 'turin.html', componentName: 'Turin', routeName: 'turin' },
  { filename: 'valencia.html', componentName: 'Valencia', routeName: 'valencia' },
  { filename: 'vancouver.html', componentName: 'Vancouver', routeName: 'vancouver' },
  { filename: 'venice.html', componentName: 'Venice', routeName: 'venice' },
  { filename: 'verona.html', componentName: 'Verona', routeName: 'verona' },
  { filename: 'vienna.html', componentName: 'Vienna', routeName: 'vienna' },
  { filename: 'warsaw.html', componentName: 'Warsaw', routeName: 'warsaw' },
  { filename: 'wellington.html', componentName: 'Wellington', routeName: 'wellington' },
  { filename: 'wroclaw.html', componentName: 'Wroclaw', routeName: 'wroclaw' },
  { filename: 'york.html', componentName: 'York', routeName: 'york' },
  { filename: 'zurich.html', componentName: 'Zurich', routeName: 'zurich' }
];

function parseHtmlCityData(htmlContent) {
  const dom = new JSDOM(htmlContent);
  const doc = dom.window.document;

  // Extract title from header h1
  const title = doc.querySelector('header h1')?.textContent?.trim() || '';

  // Extract description from intro section
  const description = doc.querySelector('.intro p')?.textContent?.trim() || '';

  // Extract highlights from highlights section
  const highlights = [];
  const highlightItems = doc.querySelectorAll('.highlights li');
  highlightItems.forEach(item => {
    const text = item.textContent?.trim().replace(/^✨\s*/, ''); // Remove sparkle emoji
    if (text) highlights.push(text);
  });

  // Extract attractions from attractions section
  const attractions = [];
  const attractionElements = doc.querySelectorAll('.attraction');
  attractionElements.forEach(element => {
    const name = element.querySelector('h3')?.textContent?.trim() || '';
    const description = element.querySelector('p')?.textContent?.trim() || '';
    
    const practicalInfoElement = element.querySelector('.practical-info');
    let practicalInfo = undefined;
    
    if (practicalInfoElement) {
      practicalInfo = {};
      
      // Parse practical info paragraphs
      const infoParagraphs = practicalInfoElement.querySelectorAll('p');
      infoParagraphs.forEach(p => {
        const text = p.textContent?.trim() || '';
        
        if (text.includes('How to Get There:')) {
          practicalInfo.howToGetThere = text.replace(/^.*How to Get There:\s*/, '');
        } else if (text.includes('Opening Hours:')) {
          practicalInfo.openingHours = text.replace(/^.*Opening Hours:\s*/, '');
        } else if (text.includes('Cost:')) {
          practicalInfo.cost = text.replace(/^.*Cost:\s*/, '');
        } else if (text.includes('Website:')) {
          const link = p.querySelector('a');
          if (link) {
            practicalInfo.website = link.getAttribute('href') || '';
          }
        }
      });
    }
    
    if (name && description) {
      attractions.push({ name, description, practicalInfo });
    }
  });

  // Extract logistics from logistics section
  let logistics = undefined;
  const logisticsSection = doc.querySelector('.logistics');
  if (logisticsSection) {
    logistics = {};
    
    const logisticsItems = logisticsSection.querySelectorAll('.logistics-item');
    logisticsItems.forEach(item => {
      const heading = item.querySelector('h3')?.textContent?.trim() || '';
      const content = item.querySelector('p')?.textContent?.trim() || '';
      
      if (heading.includes('Getting Around')) {
        logistics.gettingAround = content;
      } else if (heading.includes('Where to Stay')) {
        logistics.whereToStay = content;
      } else if (heading.includes('Best Time to Visit')) {
        logistics.bestTimeToVisit = content;
      } else if (heading.includes('Suggested Itinerary')) {
        logistics.suggestedItinerary = content;
      }
    });
  }

  // Extract FAQs from faqs section
  let faqs = undefined;
  const faqsSection = doc.querySelector('.faqs');
  if (faqsSection) {
    faqs = [];
    
    const faqItems = faqsSection.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question')?.textContent?.trim() || '';
      const answer = item.querySelector('.faq-answer')?.textContent?.trim() || '';
      
      if (question && answer) {
        faqs.push({ question, answer });
      }
    });
  }

  return {
    title,
    description,
    highlights,
    attractions,
    logistics,
    faqs
  };
}

function convertHtmlToReact(htmlContent, componentName) {
  const cityData = parseHtmlCityData(htmlContent);
  
  const formatValue = (value) => {
    if (typeof value === 'string') {
      return `"${value.replace(/"/g, '\\"')}"`;
    }
    return JSON.stringify(value, null, 6);
  };

  return `import React from 'react';
import { CityPage } from '../../components/CityPage';

export const ${componentName}: React.FC = () => {
  return (
    <CityPage
      title=${formatValue(cityData.title)}
      description=${formatValue(cityData.description)}
      highlights={${formatValue(cityData.highlights)}}
      attractions={${formatValue(cityData.attractions)}}${cityData.logistics ? `
      logistics={${formatValue(cityData.logistics)}}` : ''}${cityData.faqs ? `
      faqs={${formatValue(cityData.faqs)}}` : ''}
    />
  );
};`;
}

async function convertCities(batchSize = 10) {
  const sourceDir = path.join(__dirname, 'src', 'pages', 'cities');
  const outputDir = sourceDir;
  
  let convertedCount = 0;
  let totalFiles = cityFiles.length;
  
  console.log(`Starting conversion of ${totalFiles} city files...`);
  
  for (let i = 0; i < cityFiles.length; i += batchSize) {
    const batch = cityFiles.slice(i, i + batchSize);
    
    const promises = batch.map(async (cityFile) => {
      try {
        const htmlPath = path.join(sourceDir, cityFile.filename);
        const tsxPath = path.join(outputDir, `${cityFile.componentName}.tsx`);
        
        // Read HTML file
        const htmlContent = await fs.readFile(htmlPath, 'utf-8');
        
        // Convert to React component
        const reactContent = convertHtmlToReact(htmlContent, cityFile.componentName);
        
        // Write TSX file
        await fs.writeFile(tsxPath, reactContent, 'utf-8');
        
        convertedCount++;
        console.log(`✓ Converted ${cityFile.filename} -> ${cityFile.componentName}.tsx (${convertedCount}/${totalFiles})`);
        
        return { success: true, cityFile };
      } catch (error) {
        console.error(`✗ Failed to convert ${cityFile.filename}:`, error.message);
        return { success: false, cityFile, error: error.message };
      }
    });
    
    await Promise.all(promises);
    
    // Small delay between batches to avoid overwhelming the system
    if (i + batchSize < cityFiles.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  
  console.log(`\nConversion complete! ${convertedCount}/${totalFiles} files converted successfully.`);
  
  // Generate route information
  console.log('\nGenerating route information...');
  generateRouteInformation(cityFiles);
}

function generateRouteInformation(cityFiles) {
  const imports = cityFiles
    .map(city => `import { ${city.componentName} } from './pages/cities/${city.componentName}';`)
    .join('\n');
  
  const routes = cityFiles
    .map(city => `        <Route path="/${city.routeName}" component={${city.componentName}} />`)
    .join('\n');
  
  console.log('\n--- Add these imports to App.tsx ---');
  console.log(imports);
  
  console.log('\n--- Add these routes to App.tsx ---');
  console.log(routes);
  
  console.log('\n--- City routes summary ---');
  cityFiles.forEach(city => {
    console.log(`/${city.routeName} -> ${city.componentName}`);
  });
}

// Run the conversion
if (require.main === module) {
  convertCities(5).catch(console.error);
}

module.exports = { convertCities, cityFiles };