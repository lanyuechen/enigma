import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

let base = '/';
if (process.env.NODE_ENV === 'production') {
  // base = '/enigma/';
  base = 'https://cdn.jsdelivr.net/gh/lanyuechen/enigma@gh-pages/';
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  build: {
    assetsDir: '',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
  ],
})
