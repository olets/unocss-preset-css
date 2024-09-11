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
export const variantLayer: VariantObject = {
  name: "layer",
  match(matcher) {
    const matchArray = matcher.match(/^@layer_(?<name>[^@{[]+)(?<rest>.+)$/);

    if (matchArray === null) {
      return;
    }

    const name = matchArray?.groups?.name || "";
    const rest = matchArray?.groups?.rest || "";

    return {
      matcher: rest,
      layer: name,
    };
  },
  autocomplete: "@layer_",
};
