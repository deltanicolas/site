import { defineConfig } from "vite";
// @ts-ignore
import react from "@vitejs/plugin-react"; // AGGIUNTO: Mancava questo import
import tsconfigPaths from "vite-tsconfig-paths"; // CORRETTO: Tolto "/dist"
// @ts-ignore
import path from "node:path";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],

  // CORRETTO: Base assoluta per evitare errori 404 su URL profondi
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