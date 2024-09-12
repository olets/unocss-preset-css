import { createGenerator } from "@unocss/core";
import { describe, expect, it } from "vitest";
import presetCSS from "#index.ts";

describe("preset-css", () => {
  const uno = createGenerator({
    presets: [presetCSS()],
  });

  it("appended selector variant generates CSS for pseudoselectors", async () => {
    const { css } = await uno.generate("<div class=':hover{color:red}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\:hover\\{color\\:red\\}{
      :hover{color:red;}
      }"
    `);
  });

  it("appended selector variant generates CSS for pseudoelements", async () => {
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

  it("appended selector variant generates CSS for stacked pseudos", async () => {
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

  it("arbitrary selector variant generates CSS for non-self-referential selectors", async () => {
    const { css } = await uno.generate("<div class='[body]{color:red}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      body{color:red;}"
    `);
  });

  it("arbitrary selector variant generates CSS for self-referential selectors", async () => {
    const { css } = await uno.generate("<div class='[&+&]{color:red}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\[\\&\\+\\&\\]\\{color\\:red\\}{
      &+&{color:red;}
      }"
    `);
  });
});
