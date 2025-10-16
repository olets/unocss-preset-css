// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { scrollableRegionsHaveKeyboardAccess } from "./accessibility";
import { trackLinksAndTrackedEvents } from "./analytics";
import "./style.css";
import "virtual:uno.css";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      "layout-bottom": () => {
        scrollableRegionsHaveKeyboardAccess();
        trackLinksAndTrackedEvents();
      },
    });
  },
} satisfies Theme;
