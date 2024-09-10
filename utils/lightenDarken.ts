import { detectFormat } from "../lib/detectFormat";
import { hslToHex } from "../lib/hslToHex";
import { lightenHex } from "../lib/lightenHex";
import { rgbToHex } from "../lib/rgbToHex";

/**
 * Lightens a color by a percentage
 * @param color The color to lighten
 * @param percent The percentage to lighten the color by
 * @returns The lightened color
 */
export function lightenColor(color: string, percent: number) {
  const format = detectFormat(color);

  if (!format) {
    throw new Error("Invalid color format");
  }

  if (percent < 0 || percent > 100) {
    throw new Error("Invalid percentage");
  }

  if (percent == 0) {
    return color;
  }

  let hexColor = color;
  if (format === "rgb") hexColor = rgbToHex(color);
  else if (format === "hsl") hexColor = hslToHex(color);

  return lightenHex(hexColor, percent, format);
}

/**
 * Darkens a color by a percentage
 * @param color The color to darken
 * @param percent The percentage to darken the color by
 * @returns The darkened color
 */
export function darkenColor(color: string, percent: number) {
  const format = detectFormat(color);

  if (!format) {
    throw new Error("Invalid color format");
  }

  if (percent < 0 || percent > 100) {
    throw new Error("Invalid percentage");
  }

  let hexColor = color;
  if (format === "rgb") hexColor = rgbToHex(color);
  else if (format === "hsl") hexColor = hslToHex(color);

  return lightenHex(hexColor, -percent, format);
}
