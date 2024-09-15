
# Installation

1. Add `unocss-preset-css` and `unocss` to your ECMAScript project as devDependencies (replace `<your package manager>` with your package manager, e.g. `bun`, `npm`, `pnpm`, `yarn`)

    ```shell
    <your package manager> add -D unocss @olets/unocss-preset-css
    ```

1. Create `uno.config.ts` or `uno.config.js`, your UnoCSS configuration file.

1. Configure UnoCSS to use `unocss-preset-css`. At the very least, add `unocss-preset-css` as a `preset`. See https://unocss.dev/guide/config-file for documentation.

    :::warning
    By default, UnoCSS looks for class names in `.astro`, `.elm`, `.html`, `.jsx`, `.mdx`, `.php`, `.phtml`, `.svelte`, `.tsx`, and `.vue` files _but not_ in `.js` or `.ts` files. See https://unocss.dev/guide/extracting for how to change that.
    :::

    ```js
    // uno.config.ts
    import { defineConfig } from "unocss";
    import presetCSS from "@olets/unocss-preset-css";

    export default defineConfig({
      presets: [presetCSS()],
    });
    ```

1. Integrate UnoCSS with your stack. As of this writing, there's first-party support for Astro, CLI, ESLint, JetBrains, Nuxt, PostCSS, Svelte (scoped), Vite, VS Code, VSCodium, Webpack, as well as using UnoCSS over a CDN. See https://unocss.dev/integrations/ for documentation.

