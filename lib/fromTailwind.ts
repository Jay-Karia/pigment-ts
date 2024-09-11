import { Format } from "../types/format";
import { hexTailwindMapInverted } from "./hexTailwindMap";
import { hexToRgb } from "./hexToRgb";
import { rgbToHsl } from "./rgbToHsl";

/**
 * Removes the tailwind prefix from a color
 * @param twColor The tailwind color to be manipulated
 * @returns The tailwind color without the prefix
 */
function removeTailwindPrefix(twColor: string) {
  const prefixes = [
    "bg-",
    "text-",
    "border-",
    "ring-",
    "from-",
    "via-",
    "to-",
    "divide-",
    "placeholder-",
    "ring-offset-",
  ];

  for (const prefix of prefixes) {
    if (twColor.startsWith(prefix)) {
      return twColor.slice(prefix.length);
    }
  }

  return twColor;
}

/**
 * Converts a tailwind color to its hex equivalent
 * @param twColor The tailwind color to be converted
 * @returns The hex equivalent of the tailwind color
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
  if (format === "tw") {
    return twColor;
  }

  const color = removeTailwindPrefix(twColor);
  const hexColor = tailwindToHex(color);

  if (format === "rgb") return hexToRgb(hexColor);
  else if (format === "hsl") {
    const rgbColor = hexToRgb(hexColor);
    return rgbToHsl(rgbColor);
  }

  return hexColor;
}
