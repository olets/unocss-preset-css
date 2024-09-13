import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  clean: true,
  declaration: true,
  rollup: {
    esbuild: {
      minify: true,
    },
  },
  /**
   * Works around the false-positive warning
   * "Inlined implicit external" for local imports
   * See https://github.com/unjs/unbuild/issues/201#issuecomment-2349892637
   */
  failOnWarn: false,
});
