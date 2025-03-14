import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    proxy: {
      "/api": {
        target: "https://digitalgalaxyrender.onrender.com",
        changeOrigin: true,
        secure: true,
      },
    },
    historyApiFallback: true,
  },
});
