import type { VariantObject } from "@unocss/core";
import { toParent } from "../utilities/variants";

/**
 * Append to the selector,
 * a shorthand for aribtrary selectors of the pattern `[&:<selector>]`
 * class=":hover{color:red}"
 * class="::after{content:Hello_World}"
 *
 * NB:
 * - selector cannot contain the characters `@`, `{`, or `[`
 * - underscores (`_`) are replaced with spaces (` `)
 *
 * @returns VariantObject
 */
export const variantAppendedSelector: VariantObject = {
  name: "appended-selector",
  match(matcher) {
    const matched = matcher.match(/^(:{1,2}[^@{[]+)(.+)$/);

    if (!matched) {
      return;
    }

    const [, selector, rest] = matched;

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
