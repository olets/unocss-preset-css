import type { Rule } from "@unocss/core";

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

export const style: Rule[] = [
  [/^\{(.+)\}$/, ([, rawStyles]) => toStyles(rawStyles)],
];

function toStyles(rawStyles: string): Record<string, string> {
  const ret: Record<string, string> = rawStyles
    .split(".,")
    .reduce((styles, style) => {
      const [property, rawValue = ""] = style.split(":");

      let value = rawValue.replaceAll("_", " ");

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
