import { Format } from "../types/format";
import { convertColor } from "../utils/convertColor";
import { hexToRgb } from "./hexToRgb";

/**
 * Lightens a color by a percentage
 * @param hexColor The color to lighten
 * @param percent The percentage to lighten the color by
 * @param format The output format
 * @returns The lightened color
 */
export function lightenHex(hexColor: string, percent: number, format: Format) {
  const amt = Math.round(2.55 * percent);
  const rgbColor = hexToRgb(hexColor)
    .replace(/[^\d,]/g, "")
    .split(",")
    .map(Number);

  const r = Math.min(255, rgbColor[0] + amt);
  const g = Math.min(255, rgbColor[1] + amt);
  const b = Math.min(255, rgbColor[2] + amt);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  return convertColor(rgb, format);
}

/**
 * Darkens a hex color by a percentage
 * @param hexColor The color to darken
 * @param percent The percentage to darken the color by
 * @param format The output format
 * @returns The darkened color
 */
export function darkenHex(hexColor: string, percent: number, format: Format) {
  const amt = Math.round(2.55 * percent);
  const rgbColor = hexToRgb(hexColor)
    .replace(/[^\d,]/g, "")
    .split(",")
    .map(Number);

  const r = Math.max(0, rgbColor[0] - amt);
  const g = Math.max(0, rgbColor[1] - amt);
  const b = Math.max(0, rgbColor[2] - amt);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  return convertColor(rgb, format);
}
