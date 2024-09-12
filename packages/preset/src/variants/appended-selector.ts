import type { VariantObject } from "@unocss/core";
import { toParent } from "#utilities/variants.ts";

/**
 * Append to the selector,
 * a shorthand for aribtrary selectors of the pattern `[&:<selector>]`
 * class=":hover{color:red}"
 * class="::after{content:Hello_World}"
 *
 * NB:
 * - selector cannot contain the characters `@`, `{`, or `[`
 * - underscores (`_`) are replaced with spaces (` `)
 */
export const variantAppendedSelector: VariantObject = {
  name: "appended-selector",
  match(matcher) {
    const matchArray = matcher.match(/^(?<selector>:{1,2}[^@{[]+)(?<rest>.+)$/);

    if (!matchArray) {
      return;
    }

    const selector = matchArray?.groups?.selector || "";
    const rest = matchArray?.groups?.rest || "";

    return {
      matcher: rest,
      handle: (input, next) =>
        next({
          ...input,
          parent: toParent(input.selector, input.parent),
          selector,
        }),
    };
  },
  autocomplete: ":",
};
