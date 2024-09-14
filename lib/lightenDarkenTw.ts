import { TAILWIND_PREFIXES } from "../constants";
import { removeTailwindPrefix } from "./fromTailwind";

/**
 * Lightens a tailwind color by a percentage
 * @param twColor The tailwind color to be lightened
 * @param amount The amount to lighten the color by
 * @returns The lightened tailwind color
 */
export function lightenTw(twColor: string, amount: number): string {
  if (amount < 0 || amount > 100) return "Invalid percentage";
  if (amount === 0) return twColor;

  const colorAndShade = removeTailwindPrefix(twColor);
  const originalShade = extract(colorAndShade).shade;

  return `${extractPrefix(twColor)}${extract(colorAndShade).color}-${calcAmount(amount, true, originalShade)}`;
}

/**
 * Darkens a tailwind color by a percentage
 * @param twColor The tailwind color to be darkened
 * @param amount The amount to darken the color by
 * @returns The darkened tailwind color
 */
export function darkenTw(twColor: string, amount: number): string {
  if (amount < 0 || amount > 100) return "Invalid percentage";
  if (amount === 0) return twColor;

  const colorAndShade = removeTailwindPrefix(twColor);
  const originalShade = extract(colorAndShade).shade;

  return `${extractPrefix(twColor)}${extract(colorAndShade).color}-${calcAmount(amount, false, originalShade)}`;
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

  return Math.round(modifiedShade / 100) * 100;
}

/**
 * Extracts the prefix from a tailwind color
 */
export function extractPrefix(twColor: string): string {
  for (const prefix of TAILWIND_PREFIXES)
    if (twColor.startsWith(prefix)) return prefix;

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
