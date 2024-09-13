import { detectFormat } from "../lib/detectFormat";
import { Format } from "../types/format";
import { hexToRgb } from "../lib/hexToRgb";
import { rgbToHsl } from "../lib/rgbToHsl";
import { hslToHex } from "../lib/hslToHex";
import { rgbToHex } from "../lib/rgbToHex";
import { toTailwind } from "./toTailwind";
import { fromTailwind } from "../lib/fromTailwind";
import {
  hslaToHsl,
  hslaToRgba,
  hslToHsla,
  rgbaToHsla,
  rgbaToRgb,
  rgbToRgba,
} from "../lib/hslaAndRgba";

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
): string {
  const colorFormat = detectFormat(color);

  if (!colorFormat) throw new Error("Invalid color format.");
  if (colorFormat === to) return color;

  if (colorFormat === "hex" && to === "rgb") return hexToRgb(color); // hex to rgb
  if (colorFormat === "hex" && to === "hsl") return rgbToHsl(hexToRgb(color)); // hex to rgb to hsl
  if (colorFormat === "rgb" && to === "hex") return rgbToHex(color); // rgb to hex
  if (colorFormat === "rgb" && to === "hsl") return rgbToHsl(color); // rgb to hsl
  if (colorFormat === "hsl" && to === "hex") return hslToHex(color); // hsl to hex
  if (colorFormat === "hsl" && to === "rgb") return hexToRgb(hslToHex(color)); // hsl to rgb
  if (to === "tw") return toTailwind(color, twPrefix); // rgb | hex | hsl to tw
  if (colorFormat === "tw") return fromTailwind(color, to); // tw to rgb | hex | hsl
  if (colorFormat === "hex" && to === "rgba") return rgbToRgba(hexToRgb(color)); // hex to rgb to rgba
  if (colorFormat === "rgb" && to === "rgba") return rgbToRgba(color); // rgb to rgba
  if (colorFormat === "hsl" && to === "rgba")
    return rgbToRgba(hexToRgb(hslToHex(color))); // hsl to hex to rgb to rgba
  if (colorFormat === "hsla" && to === "rgba") return hslaToRgba(color); // hsla to rgba
  if (colorFormat === "hex" && to === "hsla")
    return hslToHsla(rgbToHsl(hexToRgb(color))); // hex to rgb to hsl to hsla
  if (colorFormat === "rgb" && to === "hsla") return hslToHsla(rgbToHsl(color)); // rgb to hsl to hsla
  if (colorFormat === "hsl" && to === "hsla") return hslToHsla(color); // hsl to hsla
  if (colorFormat === "rgba" && to === "hsla") return rgbaToHsla(color); // rgba to hsla
  if (colorFormat === "rgba" && to === "rgb") return rgbaToRgb(color); // rgba to rgb
  if (colorFormat === "rgba" && to === "hex") return rgbToHex(rgbaToRgb(color)); // rgba to rgb to hex
  if (colorFormat === "rgba" && to === "hsl")
    return hslaToHsl(rgbaToHsla(color)); // rgba to hsl to hsla
  if (colorFormat === "hsla" && to === "rgb")
    return rgbaToRgb(hslaToRgba(color)); // hsla to rgba to rgb
  if (colorFormat === "hsla" && to === "hex")
    return rgbToHex(rgbaToRgb(hslaToRgba(color))); // hsla to rgba to rgb to hex
  if (colorFormat === "hsla" && to === "rgba") return hslaToRgba(color); // hsla to rgba
  if (colorFormat === "hsla" && to === "hsl") return hslaToHsl(color); // hsla to hsl

  return "";
}
