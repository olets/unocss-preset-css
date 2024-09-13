import { defineConfig } from "vitepress";
import markdownItFootnote from "markdown-it-footnote";
import UnoCSS from "unocss/vite";

const description = "The 'css-in-the-class-attribute' preset for UnoCSS";
const title = "@olets/unocss-preset-css";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // favicon generated by https://realfavicongenerator.net/
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#444444",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileColor",
        content: "#444444",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],

    // social metas
    ["meta", { property: "og:title", content: "@olets/unocss-preset-css" }],
    [
      "meta",
      {
        property: "og:description",
        content: description,
      },
    ],
    [
      "meta",
      {
        property: "og:url",
        content: "https://unocss-preset-css.olets.dev/",
      },
    ],
    ["meta", { property: "og:site_name", content: "@olets/unocss-preset-css" }],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:image",
        content:
          "https://unocss-preset-css.olets.dev/unocss-preset-css-card.png",
      },
    ],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "630" }],
    ["meta", { name: "twitter:title", content: "@olets/unocss-preset-css" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:description",
        content: description,
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content:
          "https://unocss-preset-css.olets.dev/unocss-preset-css-card.png",
      },
    ],

    // Analytics
    [
      "script",
      {
        src: "https://cdn.usefathom.com/script.js",
        "data-site": "IOYVWMYR",
        "data-spa": "auto",
        defer: "true",
      },
    ],
    [
      "script",
      {
        src: "/js/analytics.js",
      },
    ],

    // Font
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    ],
    [
      "link",
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "true",
      },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  title: title,
  description: description,
  // https://vitepress.dev/reference/site-config#titletemplate
  titleTemplate: `:title :: ${title}`, // to change delimiter from default pipe to play nice with Fathom event id format. see also homepage frontmatter
  // https://vitepress.dev/reference/default-theme-last-updated
  lastUpdated: true,
  markdown: {
    externalLinks: {
      class: "vp-external-link-icon",
      target: "_self",
    },
    config: (md) => {
      md.use(markdownItFootnote);
    },
    theme: {
      light: "github-light-high-contrast",
      dark: "github-dark-high-contrast",
    },
  },
  srcExclude: ["vitepressignore"],
  sitemap: {
    hostname: "https://unocss-preset-css.olets.dev",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    editLink: {
      pattern:
        "https://github.com/olets/unocss-preset-css/edit/main/docs/:path",
    },

    logo: "/assets/images/unocss-preset-css-logo.png",

    nav: [
      {
        text: "Source, Changelog, License",
        link: "https://github.com/olets/unocss-preset-css/",
        target: "_self",
      },
      {
        text: "olets.dev",
        link: "https://olets.dev",
        target: "_self",
      },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      { text: "Overview", link: "/" },
      { text: "Installation", link: "/installation" },
      { text: "Usage", link: "/usage" },
      {
        text: "Examples",
        items: [
          // TODO
          // {
          //   text: "…",
          //   link: "/examples/…",
          // },
        ],
      },
      { text: "Contributing", link: "/contributing" },
      { text: "Acknowledgments", link: "/acknowledgments" },
    ],
  },
  vite: {
    plugins: [UnoCSS()],
  },
});
