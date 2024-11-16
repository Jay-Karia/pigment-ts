import { Format } from "@/types/format";

export function detectColor(line: string) {
  const formats = ["rgb", "hex", "hsl", "tw", "rgba", "hsla"] as Format[];

  const regex = {
    rgb: /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,
    hex: /#[0-9A-F]{6}$/i,
    hsl: /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g,
    tw: /(?:$|^|)(slate-|gray-|zinc-|neutral-|stone-|red-|orange-|amber-|yellow-|lime-|green-|emerald-|teal-|cyan-|sky-|blue-|indigo-|violet-|purple-|fuchsia-|pink-|rose-|white|black)(50|100|200|300|400|500|600|700|800|900|950|)(?:$|^|)/gi,
    rgba: /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), ([0-1](\.\d+)?)\)/,
    hsla: /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%, ([0-1](\.\d+)?)\)/,
  } as Record<string, RegExp>;

  for (const format of formats)
    if (regex[format].exec(line)) return regex[format].exec(line);

  return null;
}
