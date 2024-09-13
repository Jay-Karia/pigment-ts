import { detectFormat } from "../lib/detectFormat";
import { lightenHex, darkenHex } from "../lib/lightenDarkenHex";
import { darkenTw, lightenTw } from "../lib/lightenDarkenTw";
import { Format } from "../types/format";
import { convertColor } from "./convertColor";

function checkInputs(color: string, percent: number) {
  const format = detectFormat(color);

  if (!format) throw new Error("Invalid color format");
  if (percent < 0 || percent > 100) throw new Error("Invalid percentage");
  if (percent == 0) return color;
}

/**
 * Lightens a color by a percentage
 * @param color The color to lighten
 * @param percent The percentage to lighten the color by
 * @returns The lightened color
 */
export function lightenColor(color: string, percent: number) {
  checkInputs(color, percent);
  const format = detectFormat(color) as Format;

  if (format === "tw") return lightenTw(color, percent);

  const alpha = color.split(", ")[3];
  const hex = convertColor(color, "hex");

  if (format === "rgba")
    return lightenHex(hex, percent, "rgba").replace(
      /,\s*[^,]+$/,
      `, ${alpha || "1"}`
    );
  else if (format === "hsla")
    return lightenHex(hex, percent, "hsla").replace(
      /,\s*[^,]+$/,
      `, ${alpha || "1"}`
    );

  return lightenHex(convertColor(color, "hex"), percent, format);
}

/**
 * Darkens a color by a percentage
 * @param color The color to darken
 * @param percent The percentage to darken the color by
 * @returns The darkened color
 */
export function darkenColor(color: string, percent: number) {
  checkInputs(color, percent);
  const format = detectFormat(color) as Format;
  if (format === "tw") return darkenTw(color, percent);

  const alpha = color.split(", ")[3];
  const hex = convertColor(color, "hex");

  if (format === "rgba")
    return darkenHex(hex, percent, "rgba").replace(
      /,\s*[^,]+$/,
      `, ${alpha || "1"}`
    );
  else if (format === "hsla")
    return darkenHex(hex, percent, "hsla").replace(
      /,\s*[^,]+$/,
      `, ${alpha || "1"}`
    );

  return darkenHex(convertColor(color, "hex"), percent, format);
}
