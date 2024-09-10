import type { Rule } from "@unocss/core";
/**
 *
 * Atomic:
 * class="{color:red} {position:relative}"
 *
 * Molecular:
 * class="{color:red.,position:relative}"
 *
 * Modify the selector:
 * class="[&::before]{content:\\2022}"
 * class="[.x>&_.y]{color:red}"
 * class="[details[open]_&]{color:red}"
 *
 * at-rules
 * class="@media(width>=768px){color:red}"
 *
 * at-rules with arbitrary selectors:
 *  -> at-rule comes first!
 * class=@media(width>=768px){color:red}
 *
 * NB:
 * - Delimit CSS with `.,` instead of `;`
 * - underscores (`_`) in CSS values are replaced with spaces (` `).
 * - underscores (`_`) in at-rules are replaced with spaces (` `).
 * - `content` is automatically wrapped in double quotes
 *   - Use `content:your_content_here` not `content:'your_content_here'`
 *   - For empty pseudoelements, use `{content}` or e.g. `{content.,other-styles:here}`
 */

function stylesToObject(styles: string): Record<string, string> {
  let ret: Record<string, string> = {};

  return styles.split(".,").reduce((obj, style) => {
    const [property, rawValue = ""] = style.split(":");

    let value = rawValue.replaceAll("_", " ");

    if (property === "content") {
      value = `"${value}"`;
    }

    obj[property] = value;
    return obj;
  }, ret);
}

export const css: Rule[] = [
  [
    /^(@[^[{]+(?=[[{]))?(\[.+\])?(\{.+\}){1}$/,
    ([, rawBlockAtRule, rawCustomSelector, rawStyles], { symbols }) => {
      const styles = rawStyles.substring(1, rawStyles.length - 1);

      let ret = stylesToObject(styles);

      if (rawBlockAtRule) {
        const blockAtRule = rawBlockAtRule.replaceAll("_", " ");

        ret = {
          ...ret,
          [symbols.parent]: blockAtRule,
        };
      }

      if (rawCustomSelector) {
        const customSelector = rawCustomSelector.substring(
          1,
          rawCustomSelector.length - 1
        );

        ret = {
          ...ret,
          [symbols.selector]: (selector: any) =>
            `${customSelector.replaceAll("_", " ").replace("&", selector)}`,
        };
      }

      return ret;
    },
  ],
];
