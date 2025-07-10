// Temporary fix for __dirname ES module issue
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const viteConfigPath = path.join(__dirname, 'vite.config.ts');

// Read current config
const currentConfig = fs.readFileSync(viteConfigPath, 'utf-8');

// Replace __dirname with proper ES module solution
const fixedConfig = currentConfig.replace(
  `'@': path.resolve(__dirname, 'client/src')`,
  `'@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client/src')`
);

// Add import for fileURLToPath and URL
const finalConfig = fixedConfig.replace(
  `import path from 'path';`,
  `import path from 'path';\nimport { fileURLToPath, URL } from 'node:url';`
);

// Write fixed config
fs.writeFileSync(viteConfigPath, finalConfig);
console.log('✅ Fixed vite.config.ts __dirname ES module issue');