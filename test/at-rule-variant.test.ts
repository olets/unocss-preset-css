import { createGenerator } from "@unocss/core";
import presetCSS from "../src";
import { describe, expect, it } from "vitest";

describe("preset-css", () => {
  const uno = createGenerator({
    presets: [presetCSS()],
  });

  it("generates at-rule CSS", async () => {
    const { css } = await uno.generate(
      "<div class='@media(width<768px){color:red}'></div>"
    );

    expect(css).toMatchInlineSnapshot(`
      "/* layer: default */
      @media(width<768px){
      .\\@media\\(width\\<768px\\)\\{color\\:red\\}{color:red;}
      }"
    `);
  });
});
