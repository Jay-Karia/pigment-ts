export function setHslaOpacity(hslaColor: string, amount: number): string {
  const alpha = hslaColor.split(", ")[3];
  return hslaColor.replace(alpha, amount.toString() + ")");
}
