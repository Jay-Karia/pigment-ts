/**
 * Contains tests for the tailwind utility functions
 */
import PigmentJS from "../index";

/**
 * Contains tests for converting colors to tailwind classes
 */
describe("Tailwind color conversion", () => {
  const { toTailwind } = PigmentJS;

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

  // hex to tailwind
  it.each(Object.entries(hexToTailwind))(
    "should convert %s to tailwind",
    hex => {
      expect(toTailwind(hex)).toBe(hexToTailwind[hex]);
    }
  );

  // rgb to tailwind
  it.each(Object.entries(rgbToTailwind))(
    "should convert %s to tailwind",
    rgb => {
      expect(toTailwind(rgb)).toBe(rgbToTailwind[rgb]);
    }
  );

  // hsl to tailwind
  it.each(Object.entries(hslToTailwind))(
    "should convert %s to tailwind",
    hsl => {
      expect(toTailwind(hsl)).toBe(hslToTailwind[hsl]);
    }
  );

  // with prefixes
  it.each(withPrefixes)(
    "should convert to tailwind with prefix",
    ({ prefix, color, expected }) => {
      expect(toTailwind(color, prefix)).toBe(expected);
    }
  );

  // non standard colors
  it.each(Object.entries(nonStandardColors))(
    "should convert non standard to tailwind",
    color => {
      expect(toTailwind(color)).toBe(nonStandardColors[color]);
    }
  );
});
