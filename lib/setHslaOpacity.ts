/**
 * The setHslaOpacity function sets the opacity of an HSLA color
 */
export function setHslaOpacity(
  hslaColor: string,
  amount: number | string
): string {
  const alpha = hslaColor.split(", ")[3];
  return hslaColor.replace(alpha, amount.toString() + ")");
}
