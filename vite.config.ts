import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  root: 'client',
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client/src'),
      '@assets': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'attached_assets')
    }
  },
  plugins: [
    react({
      // Enable React Fast Refresh for development
      fastRefresh: true,
      // Configure JSX runtime
      jsxRuntime: 'automatic',
      // Enable development features
      include: "**/*.{jsx,tsx}",
      // Fix babel configuration
      babel: {
        plugins: []
      }
    })
  ],
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      input: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client/index.html'),
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['wouter'],
          query: ['@tanstack/react-query']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    cors: true,
    hmr: {
      overlay: true
    }
  },
  preview: {
    port: 4173,
    host: true
  }
});