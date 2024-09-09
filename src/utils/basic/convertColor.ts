import { detectFormat } from "../../lib/detectFormat";
import { Format } from "../../types/format";

export function convertColor(color: string, to: Format): string {
  const colorFormat = detectFormat(color);

  if (!colorFormat || !detectFormat(to)) {
    throw new Error("Invalid color format.");
  }

  if (colorFormat === to) {
    return color;
  }

  // hex to rgb
  if (colorFormat === "hex" && to === "rgb") {
  }
  // hex to hsl
  if (colorFormat === "hex" && to === "hsl") {
  }
  // rgb to hex
  if (colorFormat === "rgb" && to === "hex") {
  }
  // rgb to hsl
  if (colorFormat === "rgb" && to === "hsl") {
  }
  // hsl to hex
  if (colorFormat === "hsl" && to === "hex") {
  }
  // hsl to rgb
  if (colorFormat === "hsl" && to === "rgb") {
  }

  return "";
}
