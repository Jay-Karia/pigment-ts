import { Format } from "../types/format";

/**
 * Detect the format of a color string
 * @param rawString The string to detect the format of
 * @returns The detected format
 */
export function detectFormat(rawString: string): Format | null {
  const formats = ["rgb", "hex", "hsl", "tw"] as Format[];
  const regex = {
    rgb: /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,
    hex: /^#[0-9A-F]{6}$/i,
    hsl: /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g,
    tw: /(?:$|^|)(slate-|gray-|zinc-|neutral-|stone-|red-|orange-|amber-|yellow-|lime-|green-|emerald-|teal-|cyan-|sky-|blue-|indigo-|violet-|purple-|fuchsia-|pink-|rose-|white|black)(50|100|200|300|400|500|600|700|800|900|950|)(?:$|^|)/gi,
  } as Record<string, RegExp>;

  for (const format of formats)
    if (regex[format].test(rawString)) return format as Format;

  return null;
}
