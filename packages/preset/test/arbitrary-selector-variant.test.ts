import { createGenerator } from "@unocss/core";
import presetCSS from "../src";
import { describe, expect, it } from "vitest";

describe("preset-css", () => {
  const uno = createGenerator({
    presets: [presetCSS()],
  });

  it("generates CSS for non-self-referential arbitrary selectors", async () => {
    const { css } = await uno.generate("<div class='[body]{color:red}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      body{color:red;}"
    `);
  });

  it("generates CSS for self-referential arbitrary selectors", async () => {
    const { css } = await uno.generate("<div class='[&+&]{color:red}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\[\\&\\+\\&\\]\\{color\\:red\\}{
      &+&{color:red;}
      }"
    `);
  });
});
