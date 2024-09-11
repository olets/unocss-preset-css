export function toParent(
  newParent: string,
  existingParent: string | undefined
): string | undefined {
  const parent = newParent.replaceAll("_", " ");

  return `${existingParent ? `${existingParent} $$ ` : ""}${parent}`;
}

export function toSelector(
  newSelector: string,
  existingSelector: string
): string {
  return newSelector.replaceAll("_", " ").replaceAll("&", existingSelector);
}
