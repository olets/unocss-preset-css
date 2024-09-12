import type { VariantHandler, VariantObject } from "@unocss/core";
import { toParent } from "../utilities/variants";

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
export const variantArbitrarySelector: VariantObject = {
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
            selector,
          }),
      };
    }

    return {
      matcher: rest,
      handle: (input, next) =>
        next({
          ...input,
          selector,
        }),
    };
  },
  autocomplete: "[",
};
