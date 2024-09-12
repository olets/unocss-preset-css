import { createGenerator } from "@unocss/core";
import { describe, expect, it } from "vitest";
import presetCSS from "#index.ts";

describe("preset-css", () => {
  const uno = createGenerator({
    presets: [presetCSS()],
  });

  it("generates CSS for pseudoselectors", async () => {
    const { css } = await uno.generate("<div class=':hover{color:red}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\:hover\\{color\\:red\\}{
      :hover{color:red;}
      }"
    `);
  });

  it("generates CSS for pseudoelements", async () => {
    const { css } = await uno.generate(
      "<div class='::before{color:red}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\:\\:before\\{color\\:red\\}{
      ::before{color:red;}
      }"
    `);
  });

  it("generates CSS for stacked pseudos", async () => {
    const { css } = await uno.generate(
      "<div class=':hover::before{color:red}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\:hover\\:\\:before\\{color\\:red\\}{
      :hover::before{color:red;}
      }"
    `);
  });
});
