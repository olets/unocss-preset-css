import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [UnoCSS()],
  preview: {
    open: "__unocss#/repl",
  },
});
