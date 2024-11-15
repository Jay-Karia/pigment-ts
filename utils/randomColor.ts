import { randomTw } from "../lib/randomTw";
import { Format } from "../types/format";
import { convertColor } from "./convertColor";

/**
 * Generates a random color in the specified format
 * @param format The format of the color
 * @param prefix The prefix for the color
 * @returns The random color in the specified format
 */
export function randomColor(format: Format, prefix?: string): string {
  if (format === "tw") return randomTw(prefix);

  const randomRgbColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  return convertColor(randomRgbColor, format);
}

/**
 * Generates a random rgb color
 * @returns The random rgb color
 */
export function rgb(): string {
  return randomColor("rgb");
}

/**
 * Generates a random hex color
 * @returns The random hex color
 */
export function hex(): string {
  return randomColor("hex");
}

/**
 * Generates a random hsl color
 * @returns The random hsl color
 */
export function hsl(): string {
  return randomColor("hsl");
}

/**
 * Generates a random hsla color
 * @returns The random hsla color
 */
export function hsla(): string {
  return randomColor("hsla");
}

/**
 * Generates a random rgba color
 * @returns The random rgba color
 */
export function rgba(): string {
  return randomColor("rgba");
}

/**
 * Generates a random tw color
 * @returns The random tw color
 */
export function tw(prefix?: string): string {
  return randomColor("tw", prefix);
}
