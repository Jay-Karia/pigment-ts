import { detectFormat } from "../lib/detectFormat";
import { hslToHex } from "../lib/hslToHex";
import { lightenHex, darkenHex } from "../lib/lightenDarkenHex";
import { rgbToHex } from "../lib/rgbToHex";
import { darkenTw, lightenTw } from "../lib/lightenDarkenTw";
import { hslaToHsl, rgbaToRgb } from "../lib/hslaAndRgba";

/**
 * Lightens a color by a percentage
 * @param color The color to lighten
 * @param percent The percentage to lighten the color by
 * @returns The lightened color
 */
export function lightenColor(color: string, percent: number) {
  const format = detectFormat(color);

  if (!format) throw new Error("Invalid color format");
  if (percent < 0 || percent > 100) throw new Error("Invalid percentage");
  if (percent == 0) return color;
  if (format === "tw") return lightenTw(color, percent);

  let hexColor = color;
  if (format === "rgb") hexColor = rgbToHex(color);
  else if (format === "hsl") hexColor = hslToHex(color);
  else if (format === "rgba") {
    const alpha = color.split(",")[3].trim();
    const hex = rgbToHex(rgbaToRgb(color)); // rgba to rgb to hex
    const lightenedRgba = lightenHex(hex, percent, "rgba");

    // replace the hsla alpha with the given alpha
    return lightenedRgba.replace(/,\s*[^,]+$/, `, ${alpha || "1"}`);
  } else if (format === "hsla") {
    const alpha = color.split(",")[3].trim();
    const hex = hslToHex(hslaToHsl(color)); // hsla to hsl to hex
    const lightenedHsla = lightenHex(hex, percent, "hsla");

    // replace the hsla alpha with the given alpha
    return lightenedHsla.replace(/,\s*[^,]+$/, `, ${alpha || "1"}`);
  }

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

  if (!format) throw new Error("Invalid color format");
  if (percent < 0 || percent > 100) throw new Error("Invalid percentage");
  if (percent == 0) return color;
  if (format === "tw") return darkenTw(color, percent);

  let hexColor = color;
  if (format === "rgb") hexColor = rgbToHex(color);
  else if (format === "hsl") hexColor = hslToHex(color);
  else if (format === "rgba") {
    const alpha = color.split(",")[3].trim();
    const hex = rgbToHex(rgbaToRgb(color)); // rgba to rgb to hex
    const darkenedRgba = darkenHex(hex, percent, "rgba");

    // replace the hsla alpha with the given alpha
    return darkenedRgba.replace(/,\s*[^,]+$/, `, ${alpha || "1"}`);
  } else if (format === "hsla") {
    const alpha = color.split(",")[3].trim();
    const hex = hslToHex(hslaToHsl(color)); // hsla to hsl to hex
    const darkenedHsla = darkenHex(hex, percent, "hsla");

    // replace the hsla alpha with the given alpha
    return darkenedHsla.replace(/,\s*[^,]+$/, `, ${alpha || "1"}`);
  }

  return darkenHex(hexColor, percent, format);
}
