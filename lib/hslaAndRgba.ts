import { hexToRgb } from "./hexToRgb";
import { hslToHex } from "./hslToHex";
import { rgbToHsl } from "./rgbToHsl";

export function hslToHsla(hslColor: string): string {
  const hsl = hslColor
    .replace("hsl(", "")
    .replace(")", "")
    .split(",")
    .map(Number);

  return `hsla(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%, 1)`;
}

export function hslaToHsl(hslaColor: string): string {
  const hsla = hslaColor
    .replace("hsla(", "")
    .replace(")", "")
    .split(",")
    .map(Number);

  return `hsl(${hsla[0]}, ${hsla[1]}%, ${hsla[2]}%)`;
}

export function hslaToRgba(hslaColor: string): string {
  const hsla = hslaColor
    .replace("hsla(", "")
    .replace(")", "")
    .split(",")
    .map(Number);

  const a = hsla[3];

  const hsl = `hsl(${hsla[0] * 360}, ${hsla[1] * 100}%, ${hsla[2] * 100}%)`;
  const rgb = hexToRgb(hslToHex(hsl));

  return `rgba(${rgb}, ${a})`;
}

export function rgbaToHsla(rgbaColor: string): string {
  const rgba = rgbaColor
    .replace("rgba(", "")
    .replace(")", "")
    .split(",")
    .map(Number);

  const a = rgba[3];

  const rgb = `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]})`;
  const hsl = rgbToHsl(rgb).replace("hsl(", "").replace(")", "");

  return `hsla(${hsl}, ${a})`;
}

export function rgbaToRgb(rgbaColor: string) {
  return rgbaColor
    .replace("rgba(", "")
    .replace(")", "")
    .split(",")
    .slice(0, 3)
    .join(", ");
}

export function rgbToRgba(rgbColor: string): string {
  return `rgba(${rgbColor}, 1)`;
}
