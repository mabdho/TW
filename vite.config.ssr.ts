import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import path from 'path';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  root: 'client',
  plugins: [
    react(),
    ssr({
      prerender: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client/src')
    }
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    ssr: true
  },
  ssr: {
    noExternal: ['react', 'react-dom']
  }
});