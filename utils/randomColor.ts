import { rgbaToHsla } from "../lib/hslaAndRgba";
import { randomTw } from "../lib/randomTw";
import { rgbToHex } from "../lib/rgbToHex";
import { rgbToHsl } from "../lib/rgbToHsl";
import { Format } from "../types/format";

/**
 * Generates a random color in the specified format
 * @param format The format of the color
 * @param prefix The prefix for the color
 * @returns The random color in the specified format
 */
export function randomColor(format: Format, prefix?: string): string {
  if (format === "tw") return randomTw(prefix);

  const randomRgbColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  if (format === "hex") return rgbToHex(randomRgbColor);
  else if (format === "hsl") return rgbToHsl(randomRgbColor);
  else if (format === "hsla") {
    const randomRgbaColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(1)})`;
    return rgbaToHsla(randomRgbaColor);
  } else if (format === "rgba") {
    return `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random().toFixed(1)})`;
  }

  return randomRgbColor;
}
