import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
    copyPublicDir: true,
  },
  server: {
    historyApiFallback: true,
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false,
    },
  },
});
