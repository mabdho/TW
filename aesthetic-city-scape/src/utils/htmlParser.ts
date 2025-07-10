
interface ParsedCityData {
  title: string;
  description: string;
  highlights: string[];
  attractions: Array<{
    name: string;
    description: string;
    practicalInfo?: {
      howToGetThere?: string;
      openingHours?: string;
      cost?: string;
      website?: string;
    };
  }>;
  logistics?: {
    gettingAround?: string;
    whereToStay?: string;
    bestTimeToVisit?: string;
    suggestedItinerary?: string;
  };
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

export function parseHtmlCityData(htmlContent: string): ParsedCityData {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');

  // Extract title
  const title = doc.querySelector('h1')?.textContent?.trim() || '';

  // Extract description from intro section
  const description = doc.querySelector('.intro p')?.textContent?.trim() || '';

  // Extract highlights
  const highlights: string[] = [];
  const highlightItems = doc.querySelectorAll('.highlights li');
  highlightItems.forEach(item => {
    const text = item.textContent?.trim();
    if (text) highlights.push(text);
  });

  // Extract attractions
  const attractions: ParsedCityData['attractions'] = [];
  const attractionElements = doc.querySelectorAll('.attraction');
  attractionElements.forEach(element => {
    const name = element.querySelector('h3')?.textContent?.trim() || '';
    const description = element.querySelector('p')?.textContent?.trim() || '';
    
    const practicalInfo: any = {};
    const practicalInfoElement = element.querySelector('.practical-info');
    if (practicalInfoElement) {
      const paragraphs = practicalInfoElement.querySelectorAll('p');
      paragraphs.forEach(p => {
        const text = p.textContent?.trim() || '';
        if (text.includes('How to Get There:')) {
          practicalInfo.howToGetThere = text.replace('How to Get There:', '').trim();
        } else if (text.includes('Opening Hours:')) {
          practicalInfo.openingHours = text.replace('Opening Hours:', '').trim();
        } else if (text.includes('Cost:')) {
          practicalInfo.cost = text.replace('Cost:', '').trim();
        } else if (text.includes('Website:')) {
          const link = p.querySelector('a');
          practicalInfo.website = link?.href || text.replace('Website:', '').trim();
        }
      });
    }

    if (name && description) {
      attractions.push({
        name,
        description,
        practicalInfo: Object.keys(practicalInfo).length > 0 ? practicalInfo : undefined
      });
    }
  });

  // Extract logistics
  let logistics: ParsedCityData['logistics'];
  const logisticsSection = doc.querySelector('.logistics');
  if (logisticsSection) {
    logistics = {};
    const logisticsItems = logisticsSection.querySelectorAll('.logistics-item');
    logisticsItems.forEach(item => {
      const heading = item.querySelector('h3')?.textContent?.trim() || '';
      const content = item.querySelector('p')?.textContent?.trim() || '';
      
      if (heading.includes('Getting Around')) {
        logistics!.gettingAround = content;
      } else if (heading.includes('Where to Stay')) {
        logistics!.whereToStay = content;
      } else if (heading.includes('Best Time to Visit')) {
        logistics!.bestTimeToVisit = content;
      } else if (heading.includes('Suggested Itinerary')) {
        logistics!.suggestedItinerary = content;
      }
    });
  }

  // Extract FAQs
  let faqs: ParsedCityData['faqs'];
  const faqsSection = doc.querySelector('.faqs');
  if (faqsSection) {
    faqs = [];
    const faqItems = faqsSection.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question')?.textContent?.trim() || '';
      const answer = item.querySelector('.faq-answer')?.textContent?.trim() || '';
      if (question && answer) {
        faqs!.push({ question, answer });
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
