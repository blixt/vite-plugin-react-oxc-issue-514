// Configure Vite (https://vite.dev/config/)

import react from "@vitejs/plugin-react-oxc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  worker: { format: "es" },
});
