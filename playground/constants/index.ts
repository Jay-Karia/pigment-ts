const DEFAULT_CODE = `// Use functions directly
const randomRgb = randomColor("rgb")
const randomHex = randomColor("hex")

const ratio = 0.5

// or via PigmentTS object
const blend = PigmentTS.blendColors(randomRgb, randomHex, ratio);

console.log("Color 1: " + randomRgb)
console.log("Color 2: " + randomHex)
console.log("Blend (" + (ratio * 100) + "%): " + blend)`;

const LANGUAGE_INFO = {
  language: "javascript",
  version: "18.15.0",
  type: "commonjs",
};

const NAV_LINKS = [
  {
    title: "Documentation",
    href: "https://pigment-ts-docs.vercel.app/",
  },
  {
    title: "GitHub",
    href: "https://github.com/Jay-Karia/pigment-ts",
  },
];

export { DEFAULT_CODE, LANGUAGE_INFO, NAV_LINKS };
