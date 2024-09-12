import { TAILWIND_PREFIXES } from "../constants";
import { detectFormat } from "./detectFormat";
import { removeTailwindPrefix } from "./fromTailwind";

/**
 * Lightens a tailwind color by a percentage
 * @param twColor The tailwind color to be lightened
 * @param amount The amount to lighten the color by
 * @returns The lightened tailwind color
 */
export function lightenTw(twColor: string, amount: number): string {
  if (amount < 0 || amount > 100) throw new Error("Invalid percentage");
  if (amount === 0) return twColor;

  const format = detectFormat(twColor);
  if (!format) throw new Error("Invalid color format");

  const prefix = extractPrefix(twColor);
  const colorAndShade = removeTailwindPrefix(twColor);

  const baseColor = extract(colorAndShade).color;
  const originalShade = extract(colorAndShade).shade;

  const modifiedShade = calcAmount(amount, true, originalShade);

  return `${prefix}${baseColor}-${modifiedShade}`;
}

/**
 * Darkens a tailwind color by a percentage
 * @param twColor The tailwind color to be darkened
 * @param amount The amount to darken the color by
 * @returns The darkened tailwind color
 */
export function darkenTw(twColor: string, amount: number): string {
  if (amount < 0 || amount > 100) throw new Error("Invalid percentage");
  if (amount === 0) return twColor;

  const format = detectFormat(twColor);
  if (!format) throw new Error("Invalid color format");

  const prefix = extractPrefix(twColor);
  const colorAndShade = removeTailwindPrefix(twColor);

  const baseColor = extract(colorAndShade).color;
  const originalShade = extract(colorAndShade).shade;

  const modifiedShade = calcAmount(amount, false, originalShade);

  return `${prefix}${baseColor}-${modifiedShade}`;
}

/**
 * Generates a tailwind color shade to be modified
 */
function calcAmount(
  amount: number,
  lighten: boolean,
  originalShade: number
): number {
  if (amount === 100 && lighten) return 50;
  if (amount === 100 && !lighten) return 900;

  const modifier = lighten ? -1 : 1;

  const modifiedShade = originalShade + modifier * (amount / 100) * 900;

  if (modifiedShade < 50) return 50;
  if (modifiedShade > 900) return 900;

  // round to tailwind shade
  const roundedShade = Math.round(modifiedShade / 100) * 100;

  return roundedShade;
}

/**
 * Extracts the prefix from a tailwind color
 */
export function extractPrefix(twColor: string): string {
  for (const prefix of TAILWIND_PREFIXES) {
    if (twColor.startsWith(prefix)) {
      return prefix;
    }
  }

  return "";
}

/**
 * Extract the shade and color from a tailwind color
 */
function extract(twColor: string): { shade: number; color: string } {
  const shade = parseInt(twColor.split("-")[1]);
  const color = twColor.split("-")[0];
  return { shade, color };
}
