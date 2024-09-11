import type { VariantObject } from "@unocss/core";
import { toSelector } from "../utilities/variants";

/**
 * Append to the selector,
 * a shorthand for aribtrary selectors of the pattern `[&:<selector>]`
 * class=":hover{color:red}"
 * class="::after{content:Hello_World}"
 *
 * NB:
 * - underscores (`_`) are replaced with spaces (` `)
 *
 * @returns VariantObject
 */
export function variantAppendedSelector(): VariantObject {
  return {
    name: "appended-selector",
    match(matcher) {
      const matched = matcher.match(/^(:{1,2}[^@{[]+)(.+)$/);

      if (!matched) {
        return;
      }

      const [, rawSelector, rest] = matched;

      return {
        matcher: rest,
        handle: (input, next) => {
          return next({
            ...input,
            selector: toSelector(`&${rawSelector}`, input.selector),
          });
        },
      };
    },
    autocomplete: ":",
  };
}
