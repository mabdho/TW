#!/usr/bin/env node

/**
 * Continuous JavaScript Minification Watcher
 * Monitors for new JavaScript files and automatically minifies them
 */

import fs from 'fs';
import path from 'path';
import { minify } from 'terser';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

// Production-ready minification configuration
const MINIFY_CONFIG = {
  compress: {
    drop_console: true,
    drop_debugger: true,
    pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn', 'console.error'],
    passes: 2,
    dead_code: true,
    unused: true,
    conditionals: true,
    evaluate: true,
    loops: true,
    reduce_vars: true,
    collapse_vars: true,
    join_vars: true,
    sequences: true,
    properties: true,
    comparisons: true,
    booleans: true,
    typeofs: true,
    if_return: true,
    inline: 2,
    hoist_funs: true,
    hoist_vars: true,
    side_effects: false,
    global_defs: {
      'process.env.NODE_ENV': 'production'
    }
  },
  mangle: {
    toplevel: true,
    safari10: true
  },
  format: {
    comments: false,
    beautify: false,
    semicolons: false
  },
  sourceMap: false,
  toplevel: true,
  ie8: false,
  safari10: true,
  keep_classnames: false,
  keep_fnames: false
};

/**
 * Minify JavaScript file if it's not already minified
 */
async function minifyIfNeeded(filePath) {
  try {
    // Skip if already minified
    if (filePath.includes('.min.js')) {
      return;
    }
    
    const code = await fs.promises.readFile(filePath, 'utf8');
    const originalSize = Buffer.byteLength(code, 'utf8');
    
    // Skip empty files
    if (originalSize === 0) {
      return;
    }
    
    const result = await minify(code, MINIFY_CONFIG);
    
    if (result.error) {
      console.error(`Error minifying ${filePath}:`, result.error);
      return;
    }
    
    const minifiedCode = result.code;
    const minifiedSize = Buffer.byteLength(minifiedCode, 'utf8');
    
    // Only write if minification actually reduced size
    if (minifiedSize < originalSize) {
      await fs.promises.writeFile(filePath, minifiedCode, 'utf8');
      
      const savedBytes = originalSize - minifiedSize;
      const compressionRatio = ((savedBytes / originalSize) * 100).toFixed(2);
      
      console.log(`✅ Auto-minified: ${path.relative(rootDir, filePath)} (${compressionRatio}% reduction)`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

/**
 * Watch for new JavaScript files and minify them
 */
function watchForNewFiles() {
  const watchPaths = [
    path.join(rootDir, 'dist'),
    path.join(rootDir, 'scripts'),
    path.join(rootDir, 'server'),
    path.join(rootDir, 'public')
  ];
  
  watchPaths.forEach(watchPath => {
    if (fs.existsSync(watchPath)) {
      fs.watch(watchPath, { recursive: true }, (eventType, filename) => {
        if (eventType === 'change' && filename && filename.endsWith('.js')) {
          const fullPath = path.join(watchPath, filename);
          if (fs.existsSync(fullPath)) {
            minifyIfNeeded(fullPath);
          }
        }
      });
    }
  });
}

/**
 * One-time minification of all existing files
 */
async function minifyExistingFiles() {
  console.log('🔧 Performing one-time minification of existing files...');
  
  try {
    const jsFiles = await glob('**/*.js', { 
      cwd: rootDir, 
      absolute: true,
      ignore: ['node_modules/**', '.cache/**', '.git/**', '**/*.min.js']
    });
    
    for (const file of jsFiles) {
      await minifyIfNeeded(file);
    }
    
    console.log('✅ One-time minification completed');
  } catch (error) {
    console.error('Error during one-time minification:', error);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('🚀 Starting continuous JavaScript minification system...');
  
  // Minify existing files once
  await minifyExistingFiles();
  
  // Start watching for new files
  watchForNewFiles();
  
  console.log('👀 Watching for new JavaScript files to minify...');
  console.log('Press Ctrl+C to stop');
  
  // Keep the process running
  process.on('SIGINT', () => {
    console.log('\n🛑 Stopping continuous minification watcher');
    process.exit(0);
  });
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { minifyIfNeeded, MINIFY_CONFIG };