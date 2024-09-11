import { TAILWIND_COLORS, TAILWIND_SHADES } from "../constants";

/**
 * Generates a random tailwind color
 * @param prefix The prefix for the color
 * @returns The random tailwind color
 */
export function randomTw(prefix?: string): string {
  const randomColor =
    TAILWIND_COLORS[Math.floor(Math.random() * TAILWIND_COLORS.length)];
  const randomShade =
    TAILWIND_SHADES[Math.floor(Math.random() * TAILWIND_SHADES.length)];

  return `${prefix ? prefix + "-" : ""}${randomColor}-${randomShade}`;
}
