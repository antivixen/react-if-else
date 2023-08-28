import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import * as packageJson from "./package.json";

export default defineConfig({
  esbuild: {
    loader: "tsx",
    keepNames: true,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.tsx"),
      name: "@antivixen/react-if-else",
      formats: ["es", "umd"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    dts({ insertTypesEntry: true, include: ["src/lib/index.tsx"] }),
  ],
});
