import type {
  Postprocessor,
  Preflight,
  PreflightContext,
  PresetOptions,
} from "@unocss/core";
import { definePreset } from "@unocss/core";
import { rules } from "./rules";
import { theme, type Theme } from "./theme";
import { variants } from "./variants";
import { preflights } from "./preflights";

export { preflights } from "./preflights";
export { theme } from "./theme";

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
    name: "@olets/unocss-preset-css",
    theme,
    rules,
    prefix: options.prefix,
    // @TODO figure out a way to make the built preset be a Factory without this preflight stuff. Is it dependent on using the Theme interface? Would be nice to remove most of what we added in the commit which first added this comment.
    preflights: options.preflight
      ? normalizePreflights(preflights, options.variablePrefix)
      : [],
    postprocess: VarPrefixPostprocessor(options.variablePrefix),
    variants: variants(),
  };
});

export default presetCSS;

/**
 * H/t https://github.com/unocss/unocss/blob/243623ddb7decd7002e4110ef3674e1feeef6297/packages/preset-mini/src/index.ts#L119-L132
 */
export function VarPrefixPostprocessor(
  prefix: string
): Postprocessor | undefined {
  if (prefix !== "un-") {
    return (obj) => {
      obj.entries.forEach((i) => {
        i[0] = i[0].replace(/^--un-/, `--${prefix}`);
        if (typeof i[1] === "string")
          i[1] = i[1].replace(/var\(--un-/g, `var(--${prefix}`);
      });
    };
  }
}

export function normalizePreflights<Theme extends object>(
  preflights: Preflight<Theme>[],
  variablePrefix: string
) {
  if (variablePrefix !== "un-") {
    return preflights.map((p) => ({
      ...p,
      getCSS: (() => async (ctx: PreflightContext<Theme>) => {
        const css = await p.getCSS(ctx);
        if (css) return css.replace(/--un-/g, `--${variablePrefix}`);
      })(),
    }));
  }

  return preflights;
}
