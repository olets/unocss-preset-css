import type { Variant } from "@unocss/core";
import { variantsSelector } from "./selector";
import { variantsAtRule } from "./at-rule";

export function variants(): Variant[] {
  return [...variantsSelector, ...variantsAtRule];
}
