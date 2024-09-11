/**
 * Generates a random tailwind color
 * @param prefix The prefix for the color
 * @returns The random tailwind color
 */
export function randomTw(prefix?: string): string {
  const twColors = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];

  const twShades = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950",
  ];

  const randomColor = twColors[Math.floor(Math.random() * twColors.length)];
  const randomShade = twShades[Math.floor(Math.random() * twShades.length)];

  return `${prefix ? prefix + "-" : ""}${randomColor}-${randomShade}`;
}
