import { defineConfig } from "vite";
// @ts-ignore
import react from "@vitejs/plugin-react"; // AGGIUNTO: Mancava questo import
import tsconfigPaths from "vite-tsconfig-paths";
// @ts-ignore
import path from "node:path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  base: '/',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});