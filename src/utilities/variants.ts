export function toParent(
  parent: string,
  existingParent: string | undefined
): string {
  return `${existingParent ? `${existingParent} $$ ` : ""}${parent}`;
}
