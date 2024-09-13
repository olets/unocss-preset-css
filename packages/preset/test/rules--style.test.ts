import { createGenerator } from "@unocss/core";
import { describe, expect, it } from "vitest";
import presetCSS from "#index.ts";

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

  it("replaces underscores values with spaces", async () => {
    const { css } = await uno.generate(
      "<div class='{padding:10px_20px}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\{padding\\:10px_20px\\}{padding:10px 20px;}"
    `);
  });

  it("preserves escaped underscores", async () => {
    const { css } = await uno.generate(
      '<div class="{background-image:url(image\\_1.avif)}">'
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\{background-image\\:url\\(image\\\\_1\\.avif\\)\\}{background-image:url(image\\_1.avif);}"
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

  it("replaces null 'content' values with the empty string", async () => {
    const { css } = await uno.generate("<div class='{content:}'></div>");

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      .\\{content\\:\\}{content:"";}"
    `);
  });
});
