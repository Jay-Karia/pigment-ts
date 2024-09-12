import { detectFormat } from "../lib/detectFormat";
import { hexToRgb } from "../lib/hexToRgb";
import { hslaToRgba, hslToHsla, rgbaToHsla } from "../lib/hslaAndRgba";
import { rgbToHsl } from "../lib/rgbToHsl";
import { setHslaOpacity } from "../lib/setHslaOpacity";
import { convertColor } from "./convertColor";

export function setOpacity(
  color: string,
  amount: number,
  to: "rgba" | "hsla"
): string {
  const format = detectFormat(color);

  console.log(format, color);

  if (!format) throw new Error("Invalid color format");
  if (amount < 0 || amount > 1) throw new Error("Invalid opacity amount");

  if (format === "hsla" && to === "hsla") return setHslaOpacity(color, amount);
  else if (format === "rgba" && to === "hsla")
    return setHslaOpacity(rgbaToHsla(color), amount);
  else if (format === "hex" && to === "hsla")
    return setHslaOpacity(hslToHsla(rgbToHsl(hexToRgb(color))), amount);
  else if (format === "rgb" && to === "hsla")
    return setHslaOpacity(hslToHsla(rgbToHsl(color)), amount);
  else if (format === "hsl" && to === "hsla")
    return setHslaOpacity(hslToHsla(color), amount);
  else if (format === "tw" && to === "hsla")
    return setHslaOpacity(convertColor(color, "hsla") as string, amount);
  else if (format === "hsla" && to === "rgba")
    return hslaToRgba(setHslaOpacity(color, amount));
  else if (format === "rgba" && to === "rgba")
    return hslaToRgba(setHslaOpacity(rgbaToHsla(color), amount));
  else if (format === "hex" && to === "rgba")
    return hslaToRgba(
      setHslaOpacity(hslToHsla(rgbToHsl(hexToRgb(color))), amount)
    );
  else if (format === "rgb" && to === "rgba")
    return hslaToRgba(setHslaOpacity(hslToHsla(rgbToHsl(color)), amount));
  else if (format === "hsl" && to === "rgba")
    return hslaToRgba(setHslaOpacity(hslToHsla(color), amount));
  else if (format === "tw" && to === "rgba")
    return hslaToRgba(
      setHslaOpacity(convertColor(color, "hsla") as string, amount)
    );

  return "";
}
