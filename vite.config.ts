import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
root: 'client',
resolve: {
alias: {
'@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client/src')
}
},
plugins: [
react(),
compression({ algorithm: 'brotliCompress' }),
visualizer({
open: false,
filename: '../stats.html',
gzipSize: true
})
],
build: {
outDir: '../dist/public',
emptyOutDir: true,
target: 'esnext',
minify: 'esbuild',
sourcemap: false,
chunkSizeWarningLimit: 1500, // Increased for code splitting chunks
rollupOptions: {
input: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client/index.html'),
output: {
manualChunks(id) {
// Vendor splitting for better caching
if (id.includes('react')) return 'vendor-react';
if (id.includes('lucide-react')) return 'vendor-icons';
if (id.includes('wouter')) return 'vendor-router';
if (id.includes('@radix-ui')) return 'vendor-ui';

// City pages chunk splitting (each city loads independently)
if (id.includes('/pages/cities/')) {
const cityName = id.match(/\/pages\/cities\/([^/]+)\.tsx/)?.[1];
return cityName ? `city-${cityName.toLowerCase()}` : 'cities';
}
},
chunkFileNames: 'assets/[name]-[hash].js',
assetFileNames: 'assets/[name]-[hash][extname]'
},
treeshake: {
moduleSideEffects: false
}
},
terserOptions: {
compress: {
drop_console: true,
drop_debugger: true
}
}
}
});