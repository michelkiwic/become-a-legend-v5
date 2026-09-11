import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/become-a-legend-v5/",
  plugins: [react()],
  build: {
    outDir: "github-pages-dist",
    emptyOutDir: true,
  },
});
