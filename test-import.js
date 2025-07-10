// Test if there are any import issues with city components
import fs from 'fs';
import path from 'path';

const citiesDir = './client/src/pages/cities';
const files = fs.readdirSync(citiesDir).filter(f => f.endsWith('.tsx'));

console.log('Checking city files for syntax issues...');

files.forEach(file => {
  try {
    const content = fs.readFileSync(path.join(citiesDir, file), 'utf8');
    
    // Check for basic syntax issues
    const hasOpenBrace = content.includes('{');
    const hasCloseBrace = content.includes('}');
    const endsWithSemicolon = content.trim().endsWith('};');
    const hasExport = content.includes('export');
    
    if (!hasOpenBrace || !hasCloseBrace || !endsWithSemicolon || !hasExport) {
      console.log(`ISSUE in ${file}:`, {
        hasOpenBrace,
        hasCloseBrace,
        endsWithSemicolon,
        hasExport,
        lastChars: content.slice(-20)
      });
    }
  } catch (e) {
    console.log(`ERROR reading ${file}:`, e.message);
  }
});

console.log('Syntax check complete.');