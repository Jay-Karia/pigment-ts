import { detectFormat } from "../lib/detectFormat";
import { lightenDarkenHex } from "../lib/lightenDarkenHex";
import { darkenTw, lightenTw } from "../lib/lightenDarkenTw";
import { Format } from "../types/format";
import { convertColor } from "./convertColor";

/**
 * Checks if the inputs are valid
 */
function checkInputs(color: string, percent: number) {
  const format = detectFormat(color);

  if (!format) return "Invalid color format";
  if (percent < 0 || percent > 100) return "Invalid percentage";
  if (percent == 0) return color;
}

/**
 * Lightens or darkens a color by a percentage
 */
function lightenDarkenColor(
  color: string,
  percent: number,
  format: Format,
  type: "lighten" | "darken"
) {
  const alpha = color.split(", ")[3];
  const hex = convertColor(color, "hex");

  if (format === "rgba")
    return lightenDarkenHex(hex, percent, "rgba", type).replace(
      /,\s*[^,]+$/,
      `, ${alpha || "1"}`
    );
  else if (format === "hsla")
    return lightenDarkenHex(hex, percent, "hsla", type).replace(
      /,\s*[^,]+$/,
      `, ${alpha || "1"}`
    );

  return lightenDarkenHex(hex, percent, format, type);
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

  return lightenDarkenColor(color, percent, format, "lighten");
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

  return lightenDarkenColor(color, percent, format, "darken");
}
