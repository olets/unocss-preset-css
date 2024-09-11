import type { Variant } from "@unocss/core";
import { variantAppendedSelector } from "./appended-selector";
import { variantArbitrarySelector } from "./arbitrary-selector";
import { variantAtRule } from "./at-rule";
import { variantLayer } from "./layer";

export function variants(): Variant[] {
  return [
    variantAppendedSelector,
    variantArbitrarySelector,
    variantAtRule,
    variantLayer,
  ];
}
