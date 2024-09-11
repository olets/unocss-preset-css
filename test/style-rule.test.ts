import { createGenerator } from "@unocss/core";
import presetCSS from "../src";
import { describe, expect, it } from "vitest";

describe("preset-css", () => {
  const uno = createGenerator({
    presets: [presetCSS()],
  });

  it("generates CSS from CSS-like class names", async () => {
    const { css } = await uno.generate("<div class='{color:red}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\{color\\:red\\}{color:red;}"
    `);
  });

  it("delimits CSS-like class names on '.,'", async () => {
    const { css } = await uno.generate(
      "<div class='{color:red.,font-weight:bold}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\{color\\:red\\.\\,font-weight\\:bold\\}{color:red;font-weight:bold;}"
    `);
  });

  it("quotes single-word 'content' values", async () => {
    const { css } = await uno.generate("<div class='{content:hw}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\{content\\:hw\\}{content:"hw";}"
    `);
  });

  it("replaces underscores in 'content' values with spaces", async () => {
    const { css } = await uno.generate(
      "<div class='{content:hello_world}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\{content\\:hello_world\\}{content:"hello world";}"
    `);
  });

  it("replaces null 'content' values with the empty string", async () => {
    const { css } = await uno.generate("<div class='{content:}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\{content\\:\\}{content:"";}"
    `);
  });
});
