import { Format } from "../types/format";
import { hexToRgb } from "./hexToRgb";
import { rgbToHsl } from "./rgbToHsl";
import { hexTailwindMapInverted } from "./hexTailwindMap";
import { toTailwind } from "../utils/toTailwind";

export function fromTailwind(color: string, format: Format) {
  if (format === "tw") {
    return color;
  }

  const hexEquivalent = toTailwind(color, undefined, hexTailwindMapInverted);
  const rgbEquivalent = hexToRgb(hexEquivalent);
  const hslEquivalent = rgbToHsl(rgbEquivalent);

  if (format === "hex") return hexEquivalent;
  if (format === "rgb") return rgbEquivalent;
  if (format === "hsl") return hslEquivalent;
}
