import { detectFormat } from "../lib/detectFormat";
import { Format } from "../types/format";
import { hexToRgb } from "../lib/hexToRgb";
import { rgbToHsl } from "../lib/rgbToHsl";
import { hslToHex } from "../lib/hslToHex";
import { rgbToHex } from "../lib/rgbToHex";
import { toTailwind } from "./toTailwind";
import { fromTailwind } from "../lib/fromTailwind";

/**
 * Converts a color from one format to another
 * @param color The color to convert
 * @param to The format to convert to
 * @param twPrefix The tailwind prefix to use
 * @returns The converted color
 */
export function convertColor(
  color: string,
  to: Format,
  twPrefix?: string
): string | null {
  const colorFormat = detectFormat(color);

  if (!colorFormat) throw new Error("Invalid color format.");
  if (colorFormat === to) return color.toUpperCase();

  if (colorFormat === "hex" && to === "rgb") return hexToRgb(color); // hex to rgb
  if (colorFormat === "hex" && to === "hsl") return rgbToHsl(hexToRgb(color)); // hex to rgb to hsl
  if (colorFormat === "rgb" && to === "hex") return rgbToHex(color); // rgb to hex
  if (colorFormat === "rgb" && to === "hsl") return rgbToHsl(color); // rgb to hsl
  if (colorFormat === "hsl" && to === "hex") return hslToHex(color); // hsl to hex
  if (colorFormat === "hsl" && to === "rgb") return hexToRgb(hslToHex(color)); // hsl to rgb
  if (to === "tw") return toTailwind(color, twPrefix); // rgb | hex | hsl to tw
  if (colorFormat === "tw") return fromTailwind(color, to); // tw to rgb | hex | hsl

  return null;
}
