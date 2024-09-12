import { createGenerator } from "@unocss/core";
import presetCSS from "../src";
import { describe, expect, it } from "vitest";

describe("preset-css", () => {
  const uno = createGenerator({
    outputToCssLayers: true,
    presets: [presetCSS()],
  });

  it("generates @layer CSS", async () => {
    const { css } = await uno.generate(
      "<div class='@layer_mylayer{color:red}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: mylayer */
      @layer mylayer{
      .\\@layer_mylayer\\{color\\:red\\}{color:red;}
      }"
    `);
  });

  it("generates @layer CSS, preserving dashes in layer names", async () => {
    const { css } = await uno.generate(
      "<div class='@layer_my-layer{color:red}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: my-layer */
      @layer my-layer{
      .\\@layer_my-layer\\{color\\:red\\}{color:red;}
      }"
    `);
  });

  it("generates @layer CSS, preserving underscores in layer names", async () => {
    const { css } = await uno.generate(
      "<div class='@layer_my_layer{color:red}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: my_layer */
      @layer my_layer{
      .\\@layer_my_layer\\{color\\:red\\}{color:red;}
      }"
    `);
  });
});
