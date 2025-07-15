const fs = require('fs');
const { JSDOM } = require('jsdom');

console.log('🔍 EDINBURGH HYDRATION AUDIT - DETAILED ANALYSIS');
console.log('='.repeat(60));

// Read HTML file
const htmlPath = 'dist/public/best-things-to-do-in-edinburgh.html';
const htmlContent = fs.readFileSync(htmlPath, 'utf8');
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Extract complete SEO data from HTML
const htmlTitle = document.querySelector('title')?.textContent || '';
const htmlDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
const htmlH1 = document.querySelector('h1')?.textContent || '';

console.log('📄 HTML FILE ANALYSIS:');
console.log('Path:', htmlPath);
console.log('Title:', htmlTitle);
console.log('Description:', htmlDescription);
console.log('H1:', htmlH1);

// Read React component
const reactPath = 'client/src/pages/cities/Edinburgh.tsx';
const reactContent = fs.readFileSync(reactPath, 'utf8');

// Extract React component data
const titleMatch = reactContent.match(/title=\{"([^"]+)"\}/);
const descriptionMatch = reactContent.match(/description=\{`([^`]+)`\}/);

const reactTitle = titleMatch ? titleMatch[1] : '';
const reactDescription = descriptionMatch ? descriptionMatch[1] : '';

console.log('\n⚛️  REACT COMPONENT ANALYSIS:');
console.log('Path:', reactPath);
console.log('Title:', reactTitle);
console.log('Description:', reactDescription.substring(0, 100) + '...');

console.log('\n🔄 HYDRATION COMPARISON:');
console.log('Title Match:', htmlTitle === reactTitle ? '✅ PERFECT' : '❌ MISMATCH');
console.log('H1 Match:', htmlH1 === reactTitle ? '✅ PERFECT' : '❌ MISMATCH');
console.log('Description Match:', htmlDescription === reactDescription ? '✅ PERFECT' : '❌ MISMATCH');

if (htmlTitle !== reactTitle) {
  console.log('\n🚨 TITLE MISMATCH DETAILS:');
  console.log('  HTML:  "' + htmlTitle + '"');
  console.log('  React: "' + reactTitle + '"');
}

if (htmlDescription !== reactDescription) {
  console.log('\n🚨 DESCRIPTION MISMATCH DETAILS:');
  console.log('  HTML Length:', htmlDescription.length);
  console.log('  React Length:', reactDescription.length);
  console.log('  HTML:  "' + htmlDescription + '"');
  console.log('  React: "' + reactDescription.substring(0, 100) + '..."');
  
  // Check if HTML is truncated
  if (htmlDescription.endsWith('...')) {
    console.log('\n💡 ISSUE IDENTIFIED: HTML description is truncated with "..."');
    console.log('   This indicates the HTML generation truncated the description');
    console.log('   React component should match the HTML (source of truth)');
  }
}

console.log('\n🎯 HYDRATION STATUS:');
const isHydrated = htmlTitle === reactTitle && htmlDescription === reactDescription;
console.log('Overall:', isHydrated ? '✅ PERFECT HYDRATION' : '❌ HYDRATION MISMATCH');

// Provide fix suggestion
if (!isHydrated) {
  console.log('\n🔧 RECOMMENDED FIX:');
  console.log('   Since HTML is the source of truth, update React component to match HTML:');
  if (htmlTitle !== reactTitle) {
    console.log('   - Update title to: "' + htmlTitle + '"');
  }
  if (htmlDescription !== reactDescription) {
    console.log('   - Update description to: "' + htmlDescription + '"');
  }
}