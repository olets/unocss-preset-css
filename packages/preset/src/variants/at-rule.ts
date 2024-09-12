import type { Variant, VariantObject } from "@unocss/core";
import { toParent } from "#utilities/variants.ts";

/**
 * Arbitrary block at-rules
 *
 * e.g.
 * class="@media(width>=768px){color:red}"
 *
 * NB:
 * - for `layer` at-rules, see the `layer` variant
 * - at-rule cannot contain the characters `@`, `{`, or `[`
 * - underscores (`_`) are replaced with spaces (` `)
 */
const variantArbitraryBlockAtRule: VariantObject = {
  name: "arbitrary-block-at-rule",
  match(matcher) {
    const matchArray = matcher.match(
      /^(?<atRule>@(?!layer)[^@{[]*)(?<rest>.+)$/
    );

    if (matchArray === null) {
      return;
    }

    const atRule = matchArray?.groups?.atRule || "";
    const rest = matchArray?.groups?.rest || "";

    return {
      matcher: rest,
      handle: (input, next) => {
        return next({
          ...input,
          parent: toParent(atRule.replaceAll("_", " "), input.parent),
        });
      },
    };
  },
  autocomplete: "@",
};

/**
 * Layer block at-rules
 *
 * e.g.
 * class="@layer_utilities{color:red}"
 *
 * NB:
 * - layer name cannot contain the characters `@`, `{`, or `[`
 */
const variantLayerBlockAtRule: VariantObject = {
  name: "layer-block-at-rule",
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

export const variantsAtRule = [
  variantArbitraryBlockAtRule,
  variantLayerBlockAtRule,
] satisfies Variant[];
