/**
 * Converts an rgb color to a hex color
 * @param rgbColor The rgb color to be converted
 * @returns The converted hex color
 */
export function rgbToHex(rgbColor: string): string {
  const rgb = rgbColor
    .replace("rgb(", "")
    .replace(")", "")
    .split(",")
    .map(Number);

  const redHex = rgb[0].toString(16).padStart(2, "0");
  const greenHex = rgb[1].toString(16).padStart(2, "0");
  const blueHex = rgb[2].toString(16).padStart(2, "0");

  return `#${redHex}${greenHex}${blueHex}`.toUpperCase();
}
