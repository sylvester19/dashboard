import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  plugins: [
    TanStackRouterVite({ routesDirectory: "./src/routes", generatedRouteTree: "./src/routeTree.gen.ts" }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
      output: {
        manualChunks: {
          "vendor-router": ["@tanstack/react-router", "@tanstack/react-query"],
          "vendor-charts": ["recharts"],
          "vendor-ui": ["lucide-react", "class-variance-authority", "clsx", "tailwind-merge"],
        },
      },
    },
  },
});

