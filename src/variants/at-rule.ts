import type { VariantObject } from "@unocss/core";
import { toParent } from "../utilities/variants";

/**
 * at-rules
 * class="@media(width>=768px){color:red}"
 *
 * NB:
 * - underscores (`_`) are replaced with spaces (` `)
 *
 * @returns VariantObject
 */
export function variantAtRule(): VariantObject {
  return {
    name: "at-rule",
    match(matcher) {
      const matched = matcher.match(/^(@(?!layer)[^@{[]*)(.+)$/);

      if (!matched) {
        return;
      }

      const [, rawAtRule, rest] = matched;

      return {
        matcher: rest,
        handle: (input, next) => {
          return next({
            ...input,
            parent: toParent(rawAtRule, input.parent),
          });
        },
      };
    },
    autocomplete: "@",
  };
}
