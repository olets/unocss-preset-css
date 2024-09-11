export function toLayer(rawLayer: string): string | undefined {
  return rawLayer.replaceAll("_", "-");
}

export function toParent(
  rawParent: string,
  inputParent: string | undefined
): string | undefined {
  const parent = rawParent.replaceAll("_", " ");

  return `${inputParent ? `${inputParent} $$ ` : ""}${parent}`;
}

export function toSelector(rawSelector: string, inputSelector: string): string {
  return rawSelector.replaceAll("_", " ").replaceAll("&", inputSelector);
}
