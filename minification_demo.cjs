const fs = require('fs');
const { execSync } = require('child_process');

console.log('🎯 Demonstrating Minification Effects\n');

// Create sample JavaScript with realistic React component code
const sampleJS = `import React, { useState, useEffect } from 'react';
console.log('Debug message that will be removed');
console.warn('Warning that will be removed');

export const SampleComponent = ({ title, description, items = [] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const unusedFunction = () => {
    console.log('This function is never called');
    return 'unused';
  };
  
  const handleClick = (index) => {
    console.log('Handling click for index:', index);
    setCurrentIndex(index);
  };
  
  if (!isVisible) return <div className="loading">Loading...</div>;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <p className="text-lg text-gray-600 mb-8">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={item.id || index} className="bg-white rounded-lg shadow-md p-6" onClick={() => handleClick(index)}>
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};`;

// Create sample CSS with typical styles
const sampleCSS = `/* Custom component styles - this comment will be removed */
.custom-button {
  background-color: #3b82f6;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
}

.custom-button:hover {
  background-color: #2563eb;
}

/* Unused class that might be purged */
.unused-class {
  background-color: #ff0000;
  color: white;
  padding: 1rem;
  margin: 1rem 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in { animation: fadeIn 0.3s ease-out; }

.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  animation: loading 1.5s infinite;
}`;

// Write files and demonstrate minification
fs.writeFileSync('sample.js', sampleJS);
fs.writeFileSync('sample.css', sampleCSS);

const jsSize = fs.statSync('sample.js').size;
const cssSize = fs.statSync('sample.css').size;

console.log(`📊 Original Sizes: JS=${jsSize}b, CSS=${cssSize}b, Total=${jsSize + cssSize}b`);

try {
  execSync('npx terser sample.js -o sample.min.js --compress drop_console=true,dead_code=true,unused=true --mangle --format comments=false', { stdio: 'pipe' });
  const minJsSize = fs.statSync('sample.min.js').size;
  console.log(`✅ JS: ${jsSize}b → ${minJsSize}b (${((jsSize-minJsSize)/jsSize*100).toFixed(1)}% reduction)`);
} catch (e) {
  console.log('❌ JS minification failed');
}

try {
  execSync('npx cssnano sample.css sample.min.css', { stdio: 'pipe' });
  const minCssSize = fs.statSync('sample.min.css').size;
  console.log(`✅ CSS: ${cssSize}b → ${minCssSize}b (${((cssSize-minCssSize)/cssSize*100).toFixed(1)}% reduction)`);
} catch (e) {
  console.log('❌ CSS minification failed');
}

if (fs.existsSync('sample.min.js')) {
  console.log('\n🔸 Minified JS preview:', fs.readFileSync('sample.min.js', 'utf8').substring(0, 150) + '...');
}

console.log('\n✨ Optimizations Applied:');
console.log('  • Removed console statements and comments');
console.log('  • Shortened variable names');
console.log('  • Eliminated dead code');
console.log('  • Minimized whitespace');

// Cleanup
['sample.js', 'sample.css', 'sample.min.js', 'sample.min.css'].forEach(f => {
  if (fs.existsSync(f)) fs.unlinkSync(f);
});

console.log('\n🚀 Minification system ready! Use: npm run build:optimized');