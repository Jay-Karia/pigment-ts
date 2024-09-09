import { detectFormat } from "../../lib/detectFormat";
import { Format } from "../../types/format";

export function convertColor(color: string, to: Format): string {
  const colorFormat = detectFormat(color);

  if (!colorFormat) {
    throw new Error("Invalid color format.");
  }

  if (colorFormat === to) {
    return color;
  }

  return "";
}
