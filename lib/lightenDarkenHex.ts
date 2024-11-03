import { Format } from "../types/format";
import { convertColor } from "../utils/convertColor";
import { hexToRgb } from "./hexToRgb";

/**
 * Lightens or darkens a color by a percentage
 * @param hexColor The color to lighten
 * @param percent The percentage to lighten the color by
 * @param format The output format
 * @returns The lightened color
 */
export function lightenDarkenHex(
  hexColor: string,
  percent: number,
  format: Format,
  type: "lighten" | "darken"
): string {
  const amt = Math.round(2.55 * percent);
  const rgbColor = hexToRgb(hexColor)
    .replace(/[^\d,]/g, "")
    .split(",")
    .map(Number);

  const r =
    type === "lighten"
      ? Math.min(255, rgbColor[0] + amt)
      : Math.max(0, rgbColor[0] - amt);
  const g =
    type === "lighten"
      ? Math.min(255, rgbColor[1] + amt)
      : Math.max(0, rgbColor[1] - amt);
  const b =
    type === "lighten"
      ? Math.min(255, rgbColor[2] + amt)
      : Math.max(0, rgbColor[2] - amt);

  const rgb = `rgb(${r}, ${g}, ${b})`;

  return convertColor(rgb, format);
}
