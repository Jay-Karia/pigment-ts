/**
 * Contains tests for the tailwind utility functions
 */
import PigmentTS from "../index";

/**
 * Contains tests for lightening and darkening tailwind colors
 */
describe("Lighten and darken tailwind colors", () => {
  const { lightenColor, darkenColor } = PigmentTS;

  const lighten20 = {
    "gray-900": "gray-700",
    "red-500": "red-300",
    "green-500": "green-300",
    "bg-emerald-200": "bg-emerald-50",
    "bg-orange-200": "bg-orange-50",
  };

  const lighten50 = {
    "gray-900": "gray-500",
    "red-500": "red-100",
    "green-500": "green-100",
    "bg-emerald-200": "bg-emerald-50",
    "bg-orange-200": "bg-orange-50",
  };

  const lighten80 = {
    "gray-900": "gray-200",
    "red-500": "red-50",
    "green-500": "green-50",
    "bg-emerald-200": "bg-emerald-50",
    "bg-orange-200": "bg-orange-50",
  };

  const lighten100 = {
    "gray-900": "gray-50",
    "red-500": "red-50",
    "green-500": "green-50",
    "bg-emerald-200": "bg-emerald-50",
    "bg-orange-200": "bg-orange-50",
  };

  const darken20 = {
    "gray-500": "gray-700",
    "red-500": "red-700",
    "green-500": "green-700",
    "bg-emerald-200": "bg-emerald-400",
    "bg-orange-200": "bg-orange-400",
  };

  const darken50 = {
    "gray-500": "gray-900",
    "red-500": "red-900",
    "green-500": "green-900",
    "bg-emerald-200": "bg-emerald-700",
    "bg-orange-200": "bg-orange-700",
  };

  const darken80 = {
    "gray-500": "gray-900",
    "red-500": "red-900",
    "green-500": "green-900",
    "bg-emerald-200": "bg-emerald-900",
    "bg-orange-200": "bg-orange-900",
  };

  const darken100 = {
    "gray-500": "gray-900",
    "red-500": "red-900",
    "green-500": "green-900",
    "bg-emerald-200": "bg-emerald-900",
    "bg-orange-200": "bg-orange-900",
  };

  const invalidAmount = {
    "gray-900": -20,
    "red-500": 101,
    "green-500": -120,
    "bg-emerald-200": 101,
    "bg-orange-200": -20,
  };

  const zeroAmount = {
    "gray-900": "gray-900",
    "red-500": "red-500",
    "green-500": "green-500",
    "bg-emerald-200": "bg-emerald-200",
    "bg-orange-200": "bg-orange-200",
  };

  // lighten 20%
  describe("Lighten colors by 20%", () => {
    it.each(Object.entries(lighten20))(
      "should lighten %s to %s",
      (color, expected) => {
        expect(lightenColor(color, 20)).toBe(expected);
      }
    );
  });

  // lighten 50%
  describe("Lighten colors by 50%", () => {
    it.each(Object.entries(lighten50))(
      "should lighten %s to %s",
      (color, expected) => {
        expect(lightenColor(color, 50)).toBe(expected);
      }
    );
  });

  // lighten 80%
  describe("Lighten colors by 80%", () => {
    it.each(Object.entries(lighten80))(
      "should lighten %s to %s",
      (color, expected) => {
        expect(lightenColor(color, 80)).toBe(expected);
      }
    );
  });

  // lighten 100%
  describe("Lighten colors by 100%", () => {
    it.each(Object.entries(lighten100))(
      "should lighten %s to %s",
      (color, expected) => {
        expect(lightenColor(color, 100)).toBe(expected);
      }
    );
  });

  // darken 20%
  describe("Darken colors by 20%", () => {
    it.each(Object.entries(darken20))(
      "should darken %s to %s",
      (color, expected) => {
        expect(darkenColor(color, 20)).toBe(expected);
      }
    );
  });

  // darken 50%
  describe("Darken colors by 50%", () => {
    it.each(Object.entries(darken50))(
      "should darken %s to %s",
      (color, expected) => {
        expect(darkenColor(color, 50)).toBe(expected);
      }
    );
  });

  // darken 80%
  describe("Darken colors by 80%", () => {
    it.each(Object.entries(darken80))(
      "should darken %s to %s",
      (color, expected) => {
        expect(darkenColor(color, 80)).toBe(expected);
      }
    );
  });

  // darken 100%
  describe("Darken colors by 100%", () => {
    it.each(Object.entries(darken100))(
      "should darken %s to %s",
      (color, expected) => {
        expect(darkenColor(color, 100)).toBe(expected);
      }
    );
  });

  // invalid amount
  describe("Invalid amount", () => {
    it.each(Object.entries(invalidAmount))(
      "should return invalid percentage for %s",
      (color, amount) => {
        expect(lightenColor(color, amount)).toBe("Invalid percentage");
        expect(darkenColor(color, amount)).toBe("Invalid percentage");
      }
    );
  });

  // zero amount
  describe("Zero amount", () => {
    it.each(Object.entries(zeroAmount))(
      "should return the same color for %s",
      (color, expected) => {
        expect(lightenColor(color, 0)).toBe(expected);
        expect(darkenColor(color, 0)).toBe(expected);
      }
    );
  });
});

/**
 * Contains tests for generating random tailwind colors
 */
describe("Random tailwind colors", () => {
  const { randomColor } = PigmentTS;

  // random colors
  describe("Random colors", () => {
    it("should generate a random color", () => {
      expect(randomColor("tw")).toMatch(
        /(?:$|^|)(slate-|gray-|zinc-|neutral-|stone-|red-|orange-|amber-|yellow-|lime-|green-|emerald-|teal-|cyan-|sky-|blue-|indigo-|violet-|purple-|fuchsia-|pink-|rose-|white|black)(50|100|200|300|400|500|600|700|800|900|950|)(?:$|^|)/gi
      );
      // with prefix
      expect(randomColor("tw", "bg")).toMatch(
        /(?:$|^|)(slate-|gray-|zinc-|neutral-|stone-|red-|orange-|amber-|yellow-|lime-|green-|emerald-|teal-|cyan-|sky-|blue-|indigo-|violet-|purple-|fuchsia-|pink-|rose-|white|black)(50|100|200|300|400|500|600|700|800|900|950|)(?:$|^|)/gi
      );
    });
  });
});
