import { detectFormat } from "../lib/detectFormat";
import { hslToHsla, rgbaToHsla } from "../lib/hslaAndRgba";
import { setHslaOpacity } from "../lib/setHslaOpacity";
import { convertColor } from "./convertColor";

/**
 * The setOpacity function sets the opacity of a color
 * @param color The color to set the opacity of
 * @param amount The amount of opacity to set
 * @param to The format to convert the color to
 * @returns The color with the opacity set
 */
export function setOpacity(
  color: string,
  amount: number,
  to: "rgba" | "hsla"
): string {
  const format = detectFormat(color);

  if (amount < 0 || amount > 1) return "Invalid opacity amount";

  if (format === "hsla") return convertColor(setHslaOpacity(color, amount), to);
  else if (format === "rgba")
    return convertColor(setHslaOpacity(rgbaToHsla(color), amount), to);
  else if (format === "hex")
    return convertColor(
      setHslaOpacity(convertColor(color, "hsla"), amount),
      to
    );
  else if (format === "rgb")
    return convertColor(
      setHslaOpacity(convertColor(color, "hsla"), amount),
      to
    );
  else if (format === "hsl")
    return convertColor(setHslaOpacity(hslToHsla(color), amount), to);
  else
    return convertColor(
      setHslaOpacity(convertColor(color, "hsla"), amount),
      to
    );
}
