import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["src/index"],
  clean: true,
  declaration: true,
  failOnWarn: false, // To work around the warning "Inlined implicit external @unocss/preset-attributify"
  rollup: {
    esbuild: {
      minify: true,
    },
  },
});
