import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

/** @type {import('tailwindcss').Config} */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000,
  //   hmr: {
  //     protocol: "ws",
  //     host: "localhost",
  //   },
  // },

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "build",
  } 

 
});
