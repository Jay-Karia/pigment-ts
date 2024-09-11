/**
 * Contains tests for the tailwind utility functions
 */
import PigmentJS from "../index";

/**
 * Contains tests for converting colors to tailwind classes
 */
describe("Tailwind color conversion", () => {
  const { toTailwind, convertColor } = PigmentJS;

  const hexToTailwind = {
    "#000000": "black",
    "#FFFFFF": "white",
    "#164E63": "cyan-900",
    "#4C1D95": "violet-900",
    "#4B5563": "gray-600",
    "#66A50D": "lime-600",
    "#EF4444": "red-500",
    "#22C55E": "green-500",
    "#A7F3D0": "emerald-200",
    "#FED6A9": "orange-200",
  };

  const rgbToTailwind = {
    "rgb(0, 0, 0)": "black",
    "rgb(255, 255, 255)": "white",
    "rgb(113, 63, 18)": "yellow-900",
    "rgb(24, 24, 27)": "zinc-900",
    "rgb(220, 38, 38)": "red-600",
    "rgb(82, 82, 82)": "neutral-600",
    "rgb(99, 102, 241)": "indigo-500",
    "rgb(236, 72, 153)": "pink-500",
    "rgb(186, 230, 253)": "sky-200",
    "rgb(254, 205, 211)": "rose-200",
  };

  const hslToTailwind = {
    "hsl(0, 0%, 0%)": "black",
    "hsl(0, 0%, 100%)": "white",
    "hsl(15, 75%, 28%)": "orange-900",
    "hsl(221, 39%, 11%)": "gray-900",
    "hsl(41, 96%, 40%)": "yellow-600",
    "hsl(85, 85%, 35%)": "lime-600",
    "hsl(258, 90%, 66%)": "violet-500",
    "hsl(271, 91%, 65%)": "purple-500",
    "hsl(81, 88%, 80%)": "lime-200",
    "hsl(141, 79%, 85%)": "green-200",
  };

  const withPrefixes = [
    {
      prefix: "border",
      color: "#164E63",
      expected: "border-cyan-900",
    },
    {
      prefix: "ring",
      color: "#4C1D95",
      expected: "ring-violet-900",
    },
    {
      prefix: "from",
      color: "#0D0612",
      expected: "from-[#0D0612]",
    },
    {
      prefix: "via",
      color: "#54412C",
      expected: "via-[#54412C]",
    },
    {
      prefix: "to",
      color: "rgb(239, 68, 68)",
      expected: "to-red-500",
    },
    {
      prefix: "divide",
      color: "rgb(34, 197, 94)",
      expected: "divide-green-500",
    },
    {
      prefix: "ring-offset",
      color: "hsl(32, 98%, 83%)",
      expected: "ring-offset-orange-200",
    },
  ];

  const nonStandardColors = {
    "#54412C": "[#54412C]",
    "#0D0612": "[#0D0612]",
    "#5A634E": "[#5A634E]",
    "#F8F9FA": "[#F8F9FA]",
    "#012324": "[#012324]",
  };

  const tailwindToHex = {
    black: "#000000",
    white: "#FFFFFF",
    "cyan-900": "#164E63",
    "violet-900": "#4C1D95",
    "gray-600": "#4B5563",
    "lime-600": "#66A50D",
    "red-500": "#EF4444",
    "green-500": "#22C55E",
    "emerald-200": "#A7F3D0",
    "orange-200": "#FED6A9",
    "border-cyan-900": "#164E63",
    "ring-violet-900": "#4C1D95",
    "to-red-500": "#EF4444",
    "divide-green-500": "#22C55E",
  };

  const tailwindToRgb = {
    "yellow-900": "rgb(113, 63, 18)",
    "zinc-900": "rgb(24, 24, 27)",
    "red-600": "rgb(220, 38, 38)",
    "neutral-600": "rgb(82, 82, 82)",
    "indigo-500": "rgb(99, 102, 241)",
    "pink-500": "rgb(236, 72, 153)",
    "sky-200": "rgb(186, 230, 253)",
    "rose-200": "rgb(254, 205, 211)",
  };

  const tailwindToHsl = {
    "orange-900": "hsl(15, 75%, 28%)",
    "gray-900": "hsl(221, 39%, 11%)",
    "yellow-600": "hsl(41, 96%, 40%)",
    "violet-500": "hsl(258, 90%, 66%)",
    "purple-500": "hsl(271, 91%, 65%)",
    "lime-200": "hsl(81, 88%, 80%)",
    "green-200": "hsl(141, 79%, 85%)",
  };

  const tailwindToTailwind = {
    black: "black",
    white: "white",
    "cyan-900": "cyan-900",
    "violet-900": "violet-900",
    "gray-600": "gray-600",
    "lime-600": "lime-600",
    "red-500": "red-500",
    "border-green-500": "border-green-500",
    "bg-emerald-200": "bg-emerald-200",
  };

  // hex to tailwind
  describe("HEX to Tailwind", () => {
    it.each(Object.entries(hexToTailwind))(
      "should convert %s to tailwind",
      hex => {
        expect(toTailwind(hex)).toBe(hexToTailwind[hex]);
      }
    );
  });

  // rgb to tailwind
  describe("RGB to Tailwind", () => {
    it.each(Object.entries(rgbToTailwind))(
      "should convert %s to tailwind",
      rgb => {
        expect(toTailwind(rgb)).toBe(rgbToTailwind[rgb]);
      }
    );
  });

  // hsl to tailwind
  describe("HSL to Tailwind", () => {
    it.each(Object.entries(hslToTailwind))(
      "should convert %s to tailwind",
      hsl => {
        expect(toTailwind(hsl)).toBe(hslToTailwind[hsl]);
      }
    );
  });

  // with prefixes
  describe("With prefixes", () => {
    it.each(withPrefixes)(
      "should convert to tailwind with prefix",
      ({ prefix, color, expected }) => {
        expect(toTailwind(color, prefix)).toBe(expected);
      }
    );
  });

  // non standard colors
  describe("Non standard colors", () => {
    it.each(Object.entries(nonStandardColors))(
      "should convert non standard to tailwind",
      color => {
        expect(toTailwind(color)).toBe(nonStandardColors[color]);
      }
    );
  });

  // from tailwind
  describe("From Tailwind", () => {
    it.each(Object.entries(tailwindToHex))(
      "should convert %s to hex",
      (tailwind, expected) => {
        expect(convertColor(tailwind, "hex")).toBe(expected);
      }
    );

    it.each(Object.entries(tailwindToRgb))(
      "should convert %s to rgb",
      (tailwind, expected) => {
        expect(convertColor(tailwind, "rgb")).toBe(expected);
      }
    );

    it.each(Object.entries(tailwindToHsl))(
      "should convert %s to hsl",
      (tailwind, expected) => {
        expect(convertColor(tailwind, "hsl")).toBe(expected);
      }
    );
  });

  // tailwind to tailwind
  describe("Tailwind to Tailwind", () => {
    it.each(Object.entries(tailwindToTailwind))(
      "should convert %s to %s",
      (tailwind, expected) => {
        expect(toTailwind(tailwind)).toBe(expected);
      }
    );
  });
});
