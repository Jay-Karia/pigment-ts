import { detectFormat } from "../lib/detectFormat";
import { Format } from "../types/format";
import { hexToRgb } from "../lib/hexToRgb";
import { rgbToHsl } from "../lib/rgbToHsl";
import { hslToHex } from "../lib/hslToHex";
import { rgbToHex } from "../lib/rgbToHex";

export function convertColor(color: string, to: Format): string {
  const colorFormat = detectFormat(color);

  if (!colorFormat) {
    throw new Error("Invalid color format.");
  }

  if (colorFormat === to) {
    return color;
  }

  // hex to rgb
  if (colorFormat === "hex" && to === "rgb") {
    return hexToRgb(color);
  }
  // hex to hsl
  if (colorFormat === "hex" && to === "hsl") {
    const rgbColor = hexToRgb(color)
    return rgbToHsl(rgbColor)
  }
  // rgb to hex
  if (colorFormat === "rgb" && to === "hex") {
    return rgbToHex(color)
  }
  // rgb to hsl
  if (colorFormat === "rgb" && to === "hsl") {
    return rgbToHsl(color)
  }
  // hsl to hex
  if (colorFormat === "hsl" && to === "hex") {
    return hslToHex(color)
  }
  // hsl to rgb
  if (colorFormat === "hsl" && to === "rgb") {
    const hexColor = hslToHex(color)
    return hexToRgb(hexColor)
  }

  return "";
}
