import { defineConfig } from "rollup";

export default defineConfig([
  {
    input: "src/index.mjs",
    output: [
      {
        file: "dist/index.mjs",
        format: "es",
      },
      {
        file: "dist/index.cjs",
        format: "commonjs"
      }
    ],
  },
]);
