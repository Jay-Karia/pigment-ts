/**
 * Converts a number to hex
 * @param n The number to convert to hex
 * @returns The hex value of the number
 */
function toHex(n: number): string {
  let hex = n.toString(16);
  while (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
}

/**
 * Converts an hsl color to a hex color
 * @param hslColor The hsl color to be converted
 * @returns The converted hex color
 */
export function hslToHex(hslColor: string): string {
  const hsl = hslColor
    .replace("hsl(", "")
    .replace(")", "")
    .replaceAll("%", "")
    .split(",")
    .map(Number);

  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;

  let r = 0;
  let g = 0;
  let b = 0;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const redHex = toHex(Math.round(r * 255));
  const greenHex = toHex(Math.round(g * 255));
  const blueHex = toHex(Math.round(b * 255));

  return `#${redHex}${greenHex}${blueHex}`.toUpperCase();
}
