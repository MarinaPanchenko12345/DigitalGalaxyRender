import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    copyPublicDir: true, // Гарантирует копирование public/
  },
  server: {
    historyApiFallback: true,
  },
});