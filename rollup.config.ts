import { defineConfig } from "rollup";

export default defineConfig([
  {
    input: "src/index.mjs",
    output: [
      {
        dir: "esm",
        format: "es",
      },
    ],
  },
]);
