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

  switch (colorFormat) {
    case "hex":
      switch (to) {
        case "rgb":
          return hexToRgb(color);
        case "hsl":
          return rgbToHsl(hexToRgb(color));
        case "rgba":
          return rgbToRgba(hexToRgb(color));
        case "hsla":
          return hslToHsla(rgbToHsl(hexToRgb(color)));
      }
      break;
    case "rgb":
      switch (to) {
        case "hex":
          return rgbToHex(color);
        case "hsl":
          return rgbToHsl(color);
        case "rgba":
          return rgbToRgba(color);
        case "hsla":
          return hslToHsla(rgbToHsl(color));
      }
      break;
    case "hsl":
      switch (to) {
        case "hex":
          return hslToHex(color);
        case "rgb":
          return hexToRgb(hslToHex(color));
        case "rgba":
          return rgbToRgba(hexToRgb(hslToHex(color)));
        case "hsla":
          return hslToHsla(color);
      }
      break;
    case "rgba":
      switch (to) {
        case "hsla":
          return rgbaToHsla(color);
        case "rgb":
          return rgbaToRgb(color);
        case "hex":
          return rgbToHex(rgbaToRgb(color));
        case "hsl":
          return hslaToHsl(rgbaToHsla(color));
      }
      break;
    case "hsla":
      switch (to) {
        case "rgba":
          return hslaToRgba(color);
        case "rgb":
          return rgbaToRgb(hslaToRgba(color));
        case "hex":
          return rgbToHex(rgbaToRgb(hslaToRgba(color)));
        case "hsl":
          return hslaToHsl(color);
      }
      break;
    case "tw":
      return fromTailwind(color, to);
  }

  if (to === "tw") return toTailwind(color, twPrefix);

  return "";
}
