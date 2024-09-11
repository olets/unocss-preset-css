import type { VariantObject } from "@unocss/core";
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
 *
 * @returns VariantObject
 */
export function variantArbitrarySelector(): VariantObject {
  return {
    name: "arbitrary-selector",
    match(matcher) {
      const matched = matcher.match(/^\[(.+)\](.+)$/);

      if (!matched) {
        return;
      }

      const [, selector, rest] = matched;

      if (selector.includes("&")) {
        return {
          matcher: rest,
          handle: (input, next) =>
            next({
              ...input,
              parent: toParent(input.selector, input.parent),
              selector: selector,
            }),
        };
      }

      return {
        matcher: rest,
        handle: (input, next) =>
          next({
            ...input,
            selector: selector,
          }),
      };
    },
    autocomplete: "[",
  };
}
