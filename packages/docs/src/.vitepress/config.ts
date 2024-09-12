import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@olets/unocss-preset-css",
  description: "The 'css-in-the-class-attribute' preset for UnoCSS",
  vite: {
    plugins: [UnoCSS()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
