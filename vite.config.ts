import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// Served from https://<user>.github.io/license-prep/ — base must match the repo name.
export default defineConfig({
  base: "/license-prep/",
  plugins: [tailwindcss(), react()],
  build: {
    outDir: "dist",
  },
});
