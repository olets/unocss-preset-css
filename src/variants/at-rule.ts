import type { VariantObject } from "@unocss/core";
import { toParent } from "../utilities/variants";

/**
 * at-rules
 * class="@media(width>=768px){color:red}"
 *
 * NB:
 * - for `layer` at-rules, see the `layer` variant
 * - at-rule cannot contain the characters `@`, `{`, or `[`
 * - underscores (`_`) are replaced with spaces (` `)
 *
 * @returns VariantObject
 */
export const variantAtRule: VariantObject = {
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
          parent: toParent(rawAtRule.replaceAll("_", " "), input.parent),
        });
      },
    };
  },
  autocomplete: "@",
};
