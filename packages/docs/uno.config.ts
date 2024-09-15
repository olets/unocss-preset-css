import { defineConfig } from "unocss";
import presetCSS from "@olets/unocss-preset-css";

export default defineConfig({
  // See https://unocss.dev/guide/extracting#extracting-from-build-tools-pipeline
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        /\.([jt]s)($|\?)/,
      ],
    },
  },
  layers: {
    other: 2,
    stuff: 1,
  },
  outputToCssLayers: true,
  presets: [presetCSS()],
});
