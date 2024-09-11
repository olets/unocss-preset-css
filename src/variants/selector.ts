import type { VariantObject } from "@unocss/core";

function toSelector(rawSelector: string, inputSelector: string): string {
  return rawSelector.replaceAll("_", " ").replaceAll("&", inputSelector);
}

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
export function variantSelector(): VariantObject {
  return {
    name: "selector",
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
