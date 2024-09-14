import type { Variant, VariantObject } from "@unocss/core";
import { toParent } from "#utilities/to-parent.ts";
import { underscoreToSpace } from "#utilities/underscore-to-space.js";

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
const variantAppendedSelector: VariantObject = {
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
          selector: `&${underscoreToSpace(selector)}`,
        }),
    };
  },
  autocomplete: ":",
};

/**
 * Modify the selector:
 * class="[:root]{--color:red}"
 * class="[body:has(&[open])]{--color:green}"
 * class="[&::before]{content:\\2022}"
 * class="[.x>&_.y]{color:red}"
 * class="[details[open]_&]{color:red}"
 *
 * NB:
 * - underscores (`_`) are replaced with spaces (` `)
 */
const variantArbitrarySelector: VariantObject = {
  name: "arbitrary-selector",
  match(matcher) {
    const matchArray = matcher.match(/^\[(?<selector>.+)\](?<rest>.+)$/);

    if (matchArray === null) {
      return;
    }

    const selector = matchArray?.groups?.selector || "";
    const rest = matchArray?.groups?.rest || "";

    if (selector.includes("&")) {
      return {
        matcher: rest,
        handle: (input, next) =>
          next({
            ...input,
            parent: toParent(input.selector, input.parent),
            selector: underscoreToSpace(selector),
          }),
      };
    }

    return {
      matcher: rest,
      handle: (input, next) =>
        next({
          ...input,
          selector: underscoreToSpace(selector),
        }),
    };
  },
  autocomplete: "[",
};

export const variantsSelector = [
  variantAppendedSelector,
  variantArbitrarySelector,
] satisfies Variant[];
