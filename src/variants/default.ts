import type { Variant } from "@unocss/core";
import { variantAtRule } from "./at-rule";
import { variantLayer } from "./layer";
import { variantSelector } from "./selector";

export function variants(): Variant[] {
  return [variantAtRule, variantLayer, variantSelector];
}
