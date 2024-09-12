import { defineConfig } from "unocss";
import presetCSS from "@olets/unocss-preset-css";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        "src/**/*.ts",
      ],
    },
  },
  presets: [presetCSS()],
});
