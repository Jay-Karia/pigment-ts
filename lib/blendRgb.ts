/**
 * Mixes two rgb colors together
 */
export function blendRgb(
  rgbColor: string,
  rgbColor2: string,
  ratio: number
): string {
  if (rgbColor === rgbColor2) return rgbColor;

  const color1 = rgbColor.match(/\d+/g) as string[];
  const color2 = rgbColor2.match(/\d+/g) as string[];

  const r = Math.round(
    parseInt(color1[0]) + (parseInt(color2[0]) - parseInt(color1[0])) * ratio
  );
  const g = Math.round(
    parseInt(color1[1]) + (parseInt(color2[1]) - parseInt(color1[1])) * ratio
  );
  const b = Math.round(
    parseInt(color1[2]) + (parseInt(color2[2]) - parseInt(color1[2])) * ratio
  );

  return `rgb(${r}, ${g}, ${b})`;
}
