import type { VariantObject } from "@unocss/core";

/**
 * Layer:
 * class="@layer_utilities{color:red}"
 *
 * NB:
 * - layer name cannot contain the characters `@`, `{`, or `[`
 *
 * @returns VariantObject
 */
export function variantLayer(): VariantObject {
  return {
    name: "layer",
    match(matcher) {
      const matched = matcher.match(/^@layer_([^@{[]+)(.+)$/);

      if (!matched) {
        return;
      }

      const [, rawLayer, rest] = matched;

      return {
        matcher: rest,
        layer: rawLayer,
      };
    },
    autocomplete: "@layer_",
  };
}
