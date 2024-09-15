import type { Rule } from "@unocss/core";
import { underscoreToSpace } from "#utilities/underscore-to-space.ts";

/**
 *
 * Atomic:
 * class="{color:red} {position:relative}"
 *
 * Molecular:
 * class="{color:red.,position:relative}"
 *
 * NB:
 * - Delimit CSS with `.,` instead of `;`
 * - underscores (`_`) in CSS values are replaced with spaces (` `)
 * - `content` is automatically wrapped in double quotes
 *   - Use `content:your_content_here` not `content:'your_content_here'`
 *   - For empty pseudoelements, use `{content}` or `{content:}`, or with other styles `{content.,other-styles:here}` or `{content:.,other-styles:here}`
 */

const ruleRuleset: Rule = [
  /^\{(?<rawStyles>.+)\}$/,
  (matchArray) => {
    const rawStyles = matchArray?.groups?.rawStyles || "";

    return toStyles(rawStyles);
  },
];

export const rulesStyle = [ruleRuleset] satisfies Rule[];

function toStyles(rawStyles: string): Record<string, string> {
  const ret: Record<string, string> = rawStyles
    .split(".,")
    .reduce((styles, style) => {
      const [property, rawValue = ""] = style.split(":");

      let value = underscoreToSpace(rawValue);

      if (property === "content") {
        value = `"${value}"`;
      }

      return {
        ...styles,
        [property]: value,
      };
    }, {});

  return ret;
}
