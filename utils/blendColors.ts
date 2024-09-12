import { blendRgb } from "../lib/blendRgb";
import { detectFormat } from "../lib/detectFormat";
import { hslaToRgba, rgbaToHsla } from "../lib/hslaAndRgba";
import { extractPrefix } from "../lib/lightenDarkenTw";
import { setHslaOpacity } from "../lib/setHslaOpacity";
import { convertColor } from "./convertColor";

/**
 * Mixes two colors together in any format
 * @param color The first color to blend
 * @param color2 The second color to blend
 * @returns The blended color in first color's format
 */
export function blendColors(
  color: string,
  color2: string,
  ratio: number
): string {
  const format = detectFormat(color);
  const format2 = detectFormat(color2);

  if (!format || !format2) throw new Error("Invalid color format");
  if (color === color2) return color;

  const hexColor = convertColor(color, "rgb") as string;
  const hexColor2 = convertColor(color2, "rgb") as string;

  const blendedHexColor = blendRgb(hexColor, hexColor2, ratio);

  if (format === "hsla") {
    const alpha = color.split(", ")[3];
    const hslaColor = convertColor(blendedHexColor, "hsla") as string;
    return `${setHslaOpacity(hslaColor, alpha.replace(")", ""))}`;
  }
  if (format === "rgba") {
    const alpha2 = color.split(", ")[3];
    const rgbaColor = convertColor(blendedHexColor, "rgba") as string;
    const hslaColor = setHslaOpacity(
      rgbaToHsla(rgbaColor),
      alpha2.replace(")", "")
    );

    return hslaToRgba(hslaColor);
  }
  if (format === "tw")
    return `${extractPrefix(color)}${convertColor(blendedHexColor, format)}`;

  return convertColor(blendedHexColor, format) as string;
}
