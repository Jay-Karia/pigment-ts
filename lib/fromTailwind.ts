import { Format } from "../types/format";
import { hexTailwindMapInverted } from "./hexTailwindMap";
import { hexToRgb } from "./hexToRgb";
import { rgbToHsl } from "./rgbToHsl";

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

function tailwindToHex(twColor: string) {
  const hexEquivalent = hexTailwindMapInverted[twColor];
  if (hexEquivalent === undefined) throw new Error("Invalid tailwind color.");
  return hexEquivalent;
}

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
