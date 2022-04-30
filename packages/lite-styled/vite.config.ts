import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/index.ts"),
      name: "liteStyled",
      formats: ["es", "umd"],
      fileName: (format) => `liteStyled.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "clsx"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          clsx: "clsx",
        },
      },
    },
  },
});
