import { createGenerator } from "@unocss/core";
import { describe, expect, it } from "vitest";
import presetCSS from "#index.ts";

describe("preset-css", () => {
  const uno = createGenerator({
    layers: {
      other: 2,
      stuff: 1,
    },
    outputToCssLayers: true,
    presets: [presetCSS()],
  });

  it("arbitrary block at-rule variant generates CSS", async () => {
    const { css } = await uno.generate(
      "<div class='@media(width<768px){color:red}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @layer default{
      @media(width<768px){
      .\\@media\\(width\\<768px\\)\\{color\\:red\\}{color:red;}
      }
      }"
    `);
  });

  it("arbitrary block at-rule variant replaces unescaped underscores with spaces", async () => {
    const { css } = await uno.generate(
      "<div class='@media_(width<768px){color:red}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @layer default{
      @media (width<768px){
      .\\@media_\\(width\\<768px\\)\\{color\\:red\\}{color:red;}
      }
      }"
    `);
  });

  it("arbitrary block at-rule variant preserves escaped underscores", async () => {
    const { css } = await uno.generate(
      "<div class='@imaginary\\_underscored\\_at-rule{color:red}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @layer default{
      @imaginary\\_underscored\\_at-rule{
      .\\@imaginary\\\\_underscored\\\\_at-rule\\{color\\:red\\}{color:red;}
      }
      }"
    `);
  });

  it("layer block at-rule variant generates CSS", async () => {
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

  it("layer block at-rule variant preserves dashes in layer name", async () => {
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

  it("layer block at-rule variant preserves underscores in layer name", async () => {
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

  it("can combine a layer block at-rule variant and an arbitrary block at-rule variant", async () => {
    const { css } = await uno.generate(
      "<div class='@layer_safari-14@supports(aspect-ratio:1_/_1){aspect-ratio:1_/_1}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: safari-14 */
      @layer safari-14{
      @supports(aspect-ratio:1 / 1){
      .\\@layer_safari-14\\@supports\\(aspect-ratio\\:1_\\/_1\\)\\{aspect-ratio\\:1_\\/_1\\}{aspect-ratio:1 / 1;}
      }
      }"
    `);
  });

  it.skip("possible future enhancement, limited by UnoCSS multi-parent capabilities: can stack multiple at-rule blocks", async () => {
    const { css } = await uno.generate(
      "<div class='@layer_safari-14@supports(aspect-ratio:1_/_1)@media(width>=768px){aspect-ratio:1_/_1}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: safari-14 */
      @layer safari-14{
      @supports(aspect-ratio:1 / 1){
        @media(width>=768px){
      .\\@layer_safari-14\\@supports\\(aspect-ratio\\:1_\\/_1\\)\\@media\\(width\\>\\=768px\\)\\{aspect-ratio\\:1_\\/_1\\}{aspect-ratio:1 / 1;}
      }
      }
      }"
    `);
  });
});
