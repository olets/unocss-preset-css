import type { VariantObject } from "@unocss/core";
import { toLayer } from "../utilities/variants";

/**
 * Layer:
 * class="@layer_utilities{color:red}"
 *
 * NB:
 * - layer name cannot contain the characters `@`, `{`, or `[`
 * - underscores (`_`) are replaced with spaces (` `)
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
        layer: toLayer(rawLayer),
      };
    },
    autocomplete: "@layer_",
  };
}
