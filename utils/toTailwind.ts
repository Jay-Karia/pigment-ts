import { detectFormat } from "../lib/detectFormat";
import { hexTailwindMap } from "../lib/hexTailwindMap";
import { convertColor } from "./convertColor";

/**
 * Converts a color to its tailwind equivalent
 * @param color The color to convert to tailwind
 * @param prefix The prefix to add to the tailwind color
 * @returns The tailwind equivalent of the color
 */
export function toTailwind(color: string, prefix?: string): string {
  const format = detectFormat(color);
  if (format === "tw" || color == "black" || color == "white") return color;

  const hexColor = convertColor(color, "hex");

  let tailwindEquivalent = hexTailwindMap[hexColor];
  if (tailwindEquivalent === undefined && !color.includes("-"))
    tailwindEquivalent = `[${hexColor}]`;
  else if (tailwindEquivalent === undefined) tailwindEquivalent = color;

  return prefix ? `${prefix}-${tailwindEquivalent}` : tailwindEquivalent;
}
