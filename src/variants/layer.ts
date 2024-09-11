import type { VariantObject } from "@unocss/core";

function toLayer(rawLayer: string): string | undefined {
  return rawLayer.replaceAll("_", "-");
}

export function variantLayer(): VariantObject {
  return {
    name: "layer",
    match(matcher) {
      const matched = matcher.match(/^@layer_([^@{[]+)(.+)$/);

      if (!matched) {
        return;
      }

      const [, rawLayer, rest] = matched;

      return {
        matcher: rest,
        layer: toLayer(rawLayer),
      };
    },
    autocomplete: "@layer_",
  };
}
