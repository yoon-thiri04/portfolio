import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Using a relative base so the build works on GitHub Pages,
// Cloudflare Pages, Surge, or any static host without extra config.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
