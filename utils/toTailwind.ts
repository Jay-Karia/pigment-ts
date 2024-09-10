import { detectFormat } from "../lib/detectFormat";
import { hexTailwindMap } from "../lib/hexTailwindMap";
import { hslToHex } from "../lib/hslToHex";
import { rgbToHex } from "../lib/rgbToHex";

/**
 * Converts a color to its tailwind equivalent
 * @param color The color to convert to tailwind
 * @param prefix The prefix to add to the tailwind color
 * @returns The tailwind equivalent of the color
 */
export function toTailwind(color: string, prefix?: string): string {
  const format = detectFormat(color);
  let hexColor = "";

  if (format === "rgb") hexColor = rgbToHex(color);
  else if (format === "hsl") hexColor = hslToHex(color);
  else hexColor = color.toUpperCase();

  let tailwindEquivalent = hexTailwindMap[hexColor];
  if (tailwindEquivalent === undefined) tailwindEquivalent = `[${hexColor}]`;

  return prefix ? `${prefix}-${tailwindEquivalent}` : tailwindEquivalent;
}
