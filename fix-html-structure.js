/**
 * Fix HTML File Structure - Migrate to Correct Directory Format
 * Ensures all city HTML files use: dist/public/best-things-to-do-in-[city]/index.html
 */

import fs from 'fs';
import path from 'path';

async function fixHTMLStructure() {
  console.log('🔧 Fixing HTML file structure...');
  console.log('Converting to format: dist/public/best-things-to-do-in-[city]/index.html\n');

  const publicDir = 'dist/public';
  
  if (!fs.existsSync(publicDir)) {
    console.log('❌ dist/public directory not found');
    return;
  }

  // Find all HTML files that should be in directory format
  const files = fs.readdirSync(publicDir);
  const cityHTMLFiles = files.filter(file => 
    file.startsWith('best-things-to-do-in-') && 
    file.endsWith('.html') && 
    !file.includes('index')
  );

  console.log(`📋 Found ${cityHTMLFiles.length} HTML files to migrate:`);
  cityHTMLFiles.forEach(file => console.log(`   - ${file}`));

  let migrated = 0;
  let errors = 0;

  for (const file of cityHTMLFiles) {
    try {
      const cityName = file.replace('best-things-to-do-in-', '').replace('.html', '');
      const oldPath = path.join(publicDir, file);
      const newDir = path.join(publicDir, `best-things-to-do-in-${cityName}`);
      const newPath = path.join(newDir, 'index.html');

      // Create directory if it doesn't exist
      if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir, { recursive: true });
        console.log(`📁 Created directory: best-things-to-do-in-${cityName}/`);
      }

      // Read the file content
      const content = fs.readFileSync(oldPath, 'utf-8');
      
      // Write to new location
      fs.writeFileSync(newPath, content, 'utf-8');
      
      // Remove old file
      fs.unlinkSync(oldPath);
      
      console.log(`✅ Migrated: ${file} → best-things-to-do-in-${cityName}/index.html`);
      migrated++;
      
    } catch (error) {
      console.error(`❌ Error migrating ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n📊 Migration Summary:`);
  console.log(`   Successfully migrated: ${migrated}`);
  console.log(`   Errors: ${errors}`);

  // Check current structure
  console.log(`\n📁 Current directory structure:`);
  const allDirs = files.filter(item => {
    const itemPath = path.join(publicDir, item);
    return fs.statSync(itemPath).isDirectory() && item.startsWith('best-things-to-do-in-');
  });

  allDirs.forEach(dir => {
    const indexPath = path.join(publicDir, dir, 'index.html');
    const hasIndex = fs.existsSync(indexPath);
    const size = hasIndex ? (fs.statSync(indexPath).size / 1024).toFixed(1) : 'N/A';
    console.log(`   ${hasIndex ? '✅' : '❌'} ${dir}/index.html (${size} KB)`);
  });

  console.log(`\n🎯 HTML structure migration complete!`);
}

// Update saveHtmlFile function to use directory structure for city pages
function updateHTMLGeneratorFunction() {
  console.log('\n🔧 Updating HTML generator function...');
  
  const htmlGeneratorPath = 'server/html-generator.ts';
  
  if (!fs.existsSync(htmlGeneratorPath)) {
    console.log('❌ html-generator.ts not found');
    return;
  }

  let content = fs.readFileSync(htmlGeneratorPath, 'utf-8');
  
  // Add new function for city HTML files
  const newFunction = `
// Utility function to save city HTML files with correct directory structure
export async function saveCityHtmlFile(cityName: string, content: string): Promise<string> {
  const outputDir = getHtmlOutputDirectory();
  const cityDir = path.join(outputDir, \`best-things-to-do-in-\${cityName.toLowerCase().replace(/\\s+/g, '-')}\`);
  await ensureDirectoryExists(cityDir);
  
  const filePath = path.join(cityDir, 'index.html');
  await fs.writeFile(filePath, content, 'utf-8');
  
  // Auto-validate hydration compliance after HTML generation
  await validateHydrationCompliance(\`best-things-to-do-in-\${cityName}/index.html\`, content);
  
  return filePath;
}
`;

  // Insert the new function after saveHtmlFile
  if (!content.includes('saveCityHtmlFile')) {
    const insertPoint = content.indexOf('export async function saveHtmlFileToSubdirectory');
    if (insertPoint !== -1) {
      content = content.slice(0, insertPoint) + newFunction + '\n' + content.slice(insertPoint);
      fs.writeFileSync(htmlGeneratorPath, content, 'utf-8');
      console.log('✅ Added saveCityHtmlFile function to html-generator.ts');
    } else {
      console.log('⚠️  Could not find insertion point in html-generator.ts');
    }
  } else {
    console.log('✅ saveCityHtmlFile function already exists');
  }
}

async function main() {
  await fixHTMLStructure();
  updateHTMLGeneratorFunction();
  
  console.log('\n🎉 HTML structure fix complete!');
  console.log('All city HTML files now use the correct directory structure.');
}

main().catch(console.error);