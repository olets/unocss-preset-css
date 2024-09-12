import type { PresetOptions } from "@unocss/core";
import { definePreset } from "@unocss/core";
import { extractorAttributify } from "@unocss/preset-attributify";
import { VarPrefixPostprocessor } from "@unocss/preset-mini";
import { rules } from "./rules";
import { variants } from "./variants";

export interface PresetCSSOptions extends PresetOptions {
  /**
   * Prefix for CSS variables.
   *
   * @default 'un-'
   */
  variablePrefix?: string;
  /**
   * Utils prefix. When using tagged pseudo selector, only the first truthy prefix will be used.
   *
   * @default undefined
   */
  prefix?: string | string[];
}

/**
 * The 'css-in-the-class-attribute' preset for UnoCSS.
 *
 * @see https://github.com/olets/unocss-preset-css
 */
export const presetCSS = definePreset((options: PresetCSSOptions = {}) => {
  options.preflight = options.preflight ?? true;
  options.variablePrefix = options.variablePrefix ?? "un-";
  return {
    extractors: [extractorAttributify()],
    name: "@olets/unocss-preset-css",
    prefix: options.prefix,
    postprocess: VarPrefixPostprocessor(options.variablePrefix),
    rules,
    variants: variants(),
  };
});

export default presetCSS;
