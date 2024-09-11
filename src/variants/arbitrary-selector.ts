import type { VariantObject } from "@unocss/core";
import { toSelector } from "../utilities/variants";

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

      const [, rawSelector, rest] = matched;

      return {
        matcher: rest,
        handle: (input, next) => {
          return next({
            ...input,
            selector: toSelector(rawSelector, input.selector),
          });
        },
      };
    },
    autocomplete: "[",
  };
}
