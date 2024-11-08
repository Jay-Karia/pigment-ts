const DEFAULT_CODE = `// Use functions directly
const rgb = randomColor("rgb")
const hex = randomColor("hex")

// or via PigmentTS object
const blend = PigmentTS.blendColors(rgb, hex, 0.5);

console.log("Color 1: " + rgb)
console.log("Color 2: " + hex)
console.log("Blend (50%): " + blend)`

const LANGUAGE_INFO = {
  language: "javascript",
  version: "18.15.0",
  type: "commonjs"
}

const NAV_LINKS = [
  {
    title: "Documentation",
    href: "https://pigment-ts-docs.vercel.app/"
  },
  {
    title: "GitHub",
    href: "https://github.com/Jay-Karia/pigment-ts"
  }
]

export {DEFAULT_CODE, LANGUAGE_INFO, NAV_LINKS}