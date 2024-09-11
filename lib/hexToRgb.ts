/**
 * Converts a hex color to an rgb color
 * @param hexColor The hex color to be converted
 * @returns The converted rgb color
 */
export function hexToRgb(hexColor: string): string {
  const hex = hexColor.replace("#", "");

  const r = parseInt(hex[0] + hex[1], 16);
  const g = parseInt(hex[2] + hex[3], 16);
  const b = parseInt(hex[4] + hex[5], 16);

  return `rgb(${r}, ${g}, ${b})`;
}
