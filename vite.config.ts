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
    react({
      babel: {
        plugins: [
          // Remove React DevTools in production
          process.env.NODE_ENV === 'production' && ['babel-plugin-react-remove-properties', { properties: ['data-testid'] }]
        ].filter(Boolean)
      }
    }),
    compression({ 
      algorithm: 'brotliCompress',
      threshold: 1024,
      deleteOriginFile: false
    }),
    visualizer({
      open: false,
      filename: '../stats.html',
      gzipSize: true,
      brotliSize: true
    })
  ],
  build: {
    outDir: '../dist/public',
    emptyOutDir: true,
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      input: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'client/index.html'),
      output: {
        manualChunks: {
          // Framework chunks
          'vendor-react': ['react', 'react-dom'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-ui': ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          'vendor-icons': ['lucide-react'],
          'vendor-router': ['wouter'],
          'vendor-forms': ['react-hook-form', '@hookform/resolvers'],

          // App chunks
          'app-pages': [/src\/pages\/(?!cities)/],
          'app-components': [/src\/components\/(?!ui)/],
          'app-utils': [/src\/utils/]
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop().replace('.tsx', '').replace('.ts', '') : 'chunk';
          return `assets/${facadeModuleId}-[hash].js`;
        },
        assetFileNames: 'assets/[name]-[hash][extname]'
      },
      treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    cors: true
  },
  preview: {
    port: 4173,
    host: true
  }
});