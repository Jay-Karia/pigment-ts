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
    "#000000": "bg-black",
    "#ffffff": "bg-white",
    "#164e63": "bg-cyan-900",
    "#4c1d95": "bg-violet-900",
    "#4b5563": "bg-gray-600",
    "#65a30d": "bg-lime-600",
    "#ef4444": "bg-red-500",
    "#22c55e": "bg-green-500",
    "#a7f3d0": "bg-emerald-200",
    "#fed7aa": "bg-orange-200",
  };

  const rgbToTailwind = {
    "rgb(0, 0, 0)": "bg-black",
    "rgb(255, 255, 255)": "bg-white",
    "rgb(113, 63, 18)": "bg-yellow-900",
    "rgb(24, 24, 27)": "bg-zinc-900",
    "rgb(220, 38, 38)": "bg-red-600",
    "rgb(82, 82, 82)": "bg-neutral-600",
    "rgb(99, 102, 241)": "bg-indigo-500",
    "rgb(236, 72, 153)": "bg-pink-500",
    "rgb(186, 230, 253)": "bg-sky-200",
    "rgb(254, 205, 211)": "bg-rose-200",
  };

  const hslToTailwind = {
    "hsl(0, 0%, 0%)": "bg-black",
    "hsl(0, 0%, 100%)": "bg-white",
    "hsl(24, 73%, 32%)": "bg-orange-900",
    "hsl(221, 39%, 11%)": "bg-gray-900",
    "hsl(41, 96%, 40%)": "bg-yellow-600",
    "hsl(85, 85%, 35%)": "bg-lime-600",
    "hsl(258, 90%, 66%)": "bg-violet-500",
    "hsl(271, 91%, 65%)": "bg-purple-500",
    "hsl(81, 88%, 80%)": "bg-lime-200",
    "hsl(141, 79%, 85%)": "bg-green-200",
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
});
