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
 */
export const variantAtRule: VariantObject = {
  name: "at-rule",
  match(matcher) {
    const matchArray = matcher.match(
      /^(?<atRule>@(?!layer)[^@{[]*)(?<rest>.+)$/
    );

    if (matchArray === null) {
      return;
    }

    const atRule = matchArray?.groups?.atRule || "";
    const rest = matchArray?.groups?.rest || "";

    return {
      matcher: rest,
      handle: (input, next) => {
        return next({
          ...input,
          parent: toParent(atRule.replaceAll("_", " "), input.parent),
        });
      },
    };
  },
  autocomplete: "@",
};
