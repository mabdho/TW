import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import path from 'path';

export default defineConfig({
root: 'client',
resolve: {
alias: {
'@': path.resolve(__dirname, 'client/src')
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
rollupOptions: {
input: path.resolve(__dirname, 'client/index.html'),
output: {
manualChunks(id) {
if (id.includes('react')) return 'vendor-react';
if (id.includes('lucide-react')) return 'vendor-icons';
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