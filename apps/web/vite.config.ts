import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  // Plugin standard React, niente magie
  plugins: [react(), tsconfigPaths()],

  // Percorso relativo per assets (fondamentale per GitHub Pages/host statici)
  base: './',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist', // Output standard
    emptyOutDir: true,
  }
});