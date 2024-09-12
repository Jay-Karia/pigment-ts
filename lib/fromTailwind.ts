import { Format } from "../types/format";
import { hexTailwindMapInverted } from "./hexTailwindMap";
import { hexToRgb } from "./hexToRgb";
import { rgbToHsl } from "./rgbToHsl";
import { TAILWIND_PREFIXES } from "../constants/index";
import { hslToHsla, rgbToRgba } from "./hslaAndRgba";

/**
 * Removes the tailwind prefix from a color
 * @param twColor The tailwind color to be manipulated
 * @returns The tailwind color without the prefix
 */
export function removeTailwindPrefix(twColor: string) {
  for (const prefix of TAILWIND_PREFIXES)
    if (twColor.startsWith(prefix)) return twColor.slice(prefix.length);

  return twColor;
}

/**
 * Converts a tailwind color to its hex equivalent
 */
function tailwindToHex(twColor: string) {
  const hexEquivalent = hexTailwindMapInverted[twColor];
  if (hexEquivalent === undefined) throw new Error("Invalid tailwind color.");
  return hexEquivalent;
}

/**
 * Converts a tailwind color to the specified format
 * @param twColor The tailwind color to be converted
 * @param format The format to convert the color to
 * @returns The color in the specified format
 */
export function fromTailwind(twColor: string, format: Format) {
  if (format === "tw") return twColor;

  const color = removeTailwindPrefix(twColor);
  const hexColor = tailwindToHex(color);

  if (format === "rgb") return hexToRgb(hexColor);
  else if (format === "hsl")
    return rgbToHsl(hexToRgb(hexColor)); // hex to rgb to hsl
  else if (format === "rgba")
    return rgbToRgba(hexToRgb(hexColor)); // hex to rgb to rgba
  else if (format === "hsla") return hslToHsla(rgbToHsl(hexToRgb(hexColor))); // hex to rgb to hsl to hsla

  return hexColor;
}
