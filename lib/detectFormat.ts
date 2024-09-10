import { Format } from "../types/format";

export function detectFormat(rawString: string): Format | null {
  const formats = ["rgb", "hex", "hsl"] as string[];
  const regex = {
    rgb: /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,
    hex: /^#[0-9A-F]{6}$/i,
    hsl: /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g,
  } as Record<string, RegExp>;

  for (const format of formats) {
    if (regex[format].test(rawString)) {
      return format as Format;
    }
  }
  return null;
}
