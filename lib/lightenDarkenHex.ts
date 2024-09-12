import { Format } from "../types/format";
import { hexToRgb } from "./hexToRgb";
import { hslToHsla, rgbToRgba } from "./hslaAndRgba";
import { rgbToHex } from "./rgbToHex";
import { rgbToHsl } from "./rgbToHsl";

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

  let modifiedColor = "";

  if (format === "rgb") modifiedColor = `rgb(${r}, ${g}, ${b})`;
  else if (format === "hsl") modifiedColor = rgbToHsl(`rgb(${r}, ${g}, ${b})`);
  else if (format === "hsla")
    modifiedColor = hslToHsla(rgbToHsl(`rgb(${r}, ${g}, ${b})`)); // rgb to hsl to hsla
  else if (format === "rgba")
    modifiedColor = rgbToRgba(`rgb(${r}, ${g}, ${b})`); // rgb to rgba
  else modifiedColor = rgbToHex(`rgb(${r}, ${g}, ${b})`);

  return modifiedColor;
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

  let modifiedColor = "";

  if (format === "rgb") modifiedColor = `rgb(${r}, ${g}, ${b})`;
  else if (format === "hsl") modifiedColor = rgbToHsl(`rgb(${r}, ${g}, ${b})`);
  else if (format === "rgba")
    modifiedColor = rgbToRgba(`rgb(${r}, ${g}, ${b})`);
  else if (format === "hsla")
    modifiedColor = hslToHsla(rgbToHsl(`rgb(${r}, ${g}, ${b})`)); // rgb to hsl to hsla
  else modifiedColor = rgbToHex(`rgb(${r}, ${g}, ${b})`);

  return modifiedColor;
}
