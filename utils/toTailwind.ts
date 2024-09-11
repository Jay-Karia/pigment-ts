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
  let hexColor = color;

  if (format === "rgb") hexColor = rgbToHex(color);
  else if (format === "hsl") hexColor = hslToHex(color);
  else if (format === "hex") hexColor = color.toUpperCase();
  else if (format === "tw" || color == "black" || color == "white")
    return color;

  let tailwindEquivalent = hexTailwindMap[hexColor];
  if (tailwindEquivalent === undefined && !color.includes("-"))
    tailwindEquivalent = `[${hexColor}]`;
  else if (tailwindEquivalent === undefined) tailwindEquivalent = color;

  return prefix ? `${prefix}-${tailwindEquivalent}` : tailwindEquivalent;
}
