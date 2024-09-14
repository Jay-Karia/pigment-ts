import PigmentTS from "../index";

/**
 * Contains tests for converting colors.
 */
describe("Color conversion", () => {
  const convertColor = PigmentTS.convertColor;

  const hexToRgb = {
    "#FF0000": "rgb(255, 0, 0)",
    "#00FF00": "rgb(0, 255, 0)",
    "#0000FF": "rgb(0, 0, 255)",
    "#FFFFFF": "rgb(255, 255, 255)",
    "#000000": "rgb(0, 0, 0)",
    "#FF00FF": "rgb(255, 0, 255)",
    "#00FFFF": "rgb(0, 255, 255)",
    "#C0C0C0": "rgb(192, 192, 192)",
    "#808080": "rgb(128, 128, 128)",
    "#800000": "rgb(128, 0, 0)",
    "#808000": "rgb(128, 128, 0)",
    "#008000": "rgb(0, 128, 0)",
    "#800080": "rgb(128, 0, 128)",
    "#A52A2A": "rgb(165, 42, 42)",
    "#FFA500": "rgb(255, 165, 0)",
  };

  const hexToHsl = {
    "#FF0000": "hsl(0, 100%, 50%)",
    "#00FF00": "hsl(120, 100%, 50%)",
    "#0000FF": "hsl(240, 100%, 50%)",
    "#FFFFFF": "hsl(0, 0%, 100%)",
    "#000000": "hsl(0, 0%, 0%)",
    "#FF00FF": "hsl(300, 100%, 50%)",
    "#00FFFF": "hsl(180, 100%, 50%)",
    "#C0C0C0": "hsl(0, 0%, 75%)",
    "#808080": "hsl(0, 0%, 50%)",
    "#800000": "hsl(0, 100%, 25%)",
    "#808000": "hsl(60, 100%, 25%)",
    "#008000": "hsl(120, 100%, 25%)",
    "#800080": "hsl(300, 100%, 25%)",
    "#A52A2A": "hsl(0, 59%, 41%)",
    "#FFA500": "hsl(39, 100%, 50%)",
  };

  const rgbToHex = {
    "rgb(255, 0, 0)": "#FF0000",
    "rgb(0, 255, 0)": "#00FF00",
    "rgb(0, 0, 255)": "#0000FF",
    "rgb(255, 255, 255)": "#FFFFFF",
    "rgb(0, 0, 0)": "#000000",
    "rgb(255, 0, 255)": "#FF00FF",
    "rgb(0, 255, 255)": "#00FFFF",
    "rgb(192, 192, 192)": "#C0C0C0",
    "rgb(128, 128, 128)": "#808080",
    "rgb(128, 0, 0)": "#800000",
    "rgb(128, 128, 0)": "#808000",
    "rgb(0, 128, 0)": "#008000",
    "rgb(128, 0, 128)": "#800080",
    "rgb(165, 42, 42)": "#A52A2A",
    "rgb(255, 165, 0)": "#FFA500",
  };

  const rgbToHsl = {
    "rgb(255, 0, 0)": "hsl(0, 100%, 50%)",
    "rgb(0, 255, 0)": "hsl(120, 100%, 50%)",
    "rgb(0, 0, 255)": "hsl(240, 100%, 50%)",
    "rgb(255, 255, 255)": "hsl(0, 0%, 100%)",
    "rgb(0, 0, 0)": "hsl(0, 0%, 0%)",
    "rgb(255, 0, 255)": "hsl(300, 100%, 50%)",
    "rgb(0, 255, 255)": "hsl(180, 100%, 50%)",
    "rgb(192, 192, 192)": "hsl(0, 0%, 75%)",
    "rgb(128, 128, 128)": "hsl(0, 0%, 50%)",
    "rgb(128, 0, 0)": "hsl(0, 100%, 25%)",
    "rgb(128, 128, 0)": "hsl(60, 100%, 25%)",
    "rgb(0, 128, 0)": "hsl(120, 100%, 25%)",
    "rgb(128, 0, 128)": "hsl(300, 100%, 25%)",
    "rgb(165, 42, 42)": "hsl(0, 59%, 41%)",
    "rgb(255, 165, 0)": "hsl(39, 100%, 50%)",
  };

  const hslToHex = {
    "hsl(0, 100%, 50%)": "#FF0000",
    "hsl(120, 100%, 50%)": "#00FF00",
    "hsl(240, 100%, 50%)": "#0000FF",
    "hsl(0, 0%, 100%)": "#FFFFFF",
    "hsl(0, 0%, 0%)": "#000000",
    "hsl(300, 100%, 50%)": "#FF00FF",
    "hsl(180, 100%, 50%)": "#00FFFF",
    "hsl(0, 0%, 75%)": "#BFBFBF",
    "hsl(0, 0%, 50%)": "#808080",
    "hsl(0, 100%, 25%)": "#800000",
    "hsl(60, 100%, 25%)": "#7F8000",
    "hsl(120, 100%, 25%)": "#008000",
    "hsl(300, 100%, 25%)": "#80007F",
    "hsl(0, 60%, 41%)": "#A72A2A",
    "hsl(39, 100%, 50%)": "#FFA600",
  };

  const hslToRgb = {
    "hsl(0, 100%, 50%)": "rgb(255, 0, 0)",
    "hsl(120, 100%, 50%)": "rgb(0, 255, 0)",
    "hsl(240, 100%, 50%)": "rgb(0, 0, 255)",
    "hsl(0, 0%, 100%)": "rgb(255, 255, 255)",
    "hsl(0, 0%, 0%)": "rgb(0, 0, 0)",
    "hsl(300, 100%, 50%)": "rgb(255, 0, 255)",
    "hsl(180, 100%, 50%)": "rgb(0, 255, 255)",
    "hsl(0, 0%, 75%)": "rgb(191, 191, 191)",
    "hsl(0, 0%, 50%)": "rgb(128, 128, 128)",
    "hsl(0, 100%, 25%)": "rgb(128, 0, 0)",
    "hsl(60, 100%, 25%)": "rgb(127, 128, 0)",
    "hsl(120, 100%, 25%)": "rgb(0, 128, 0)",
    "hsl(300, 100%, 25%)": "rgb(128, 0, 127)",
    "hsl(0, 60%, 41%)": "rgb(167, 42, 42)",
    "hsl(39, 100%, 50%)": "rgb(255, 166, 0)",
  };

  const toRgba = {
    // hex to rgba
    "#FF0000": "rgba(255, 0, 0, 1)",
    "#00FF00": "rgba(0, 255, 0, 1)",
    "#0000FF": "rgba(0, 0, 255, 1)",
    "#FFFFFF": "rgba(255, 255, 255, 1)",
    "#000000": "rgba(0, 0, 0, 1)",
    // rgb to rgba
    "rgb(255, 0, 0)": "rgba(255, 0, 0, 1)",
    "rgb(0, 255, 0)": "rgba(0, 255, 0, 1)",
    "rgb(0, 0, 255)": "rgba(0, 0, 255, 1)",
    "rgb(255, 255, 255)": "rgba(255, 255, 255, 1)",
    "rgb(0, 0, 0)": "rgba(0, 0, 0, 1)",
    // hsl to rgba
    "hsl(0, 100%, 50%)": "rgba(255, 0, 0, 1)",
    "hsl(120, 100%, 50%)": "rgba(0, 255, 0, 1)",
    "hsl(240, 100%, 50%)": "rgba(0, 0, 255, 1)",
    "hsl(0, 0%, 100%)": "rgba(255, 255, 255, 1)",
    "hsl(0, 0%, 0%)": "rgba(0, 0, 0, 1)",
    // tw to rgba
    "red-500": "rgba(239, 67, 67, 1)",
    "yellow-600": "rgba(200, 138, 4, 1)",
    "green-200": "rgba(187, 247, 208, 1)",
    "violet-500": "rgba(137, 90, 246, 1)",
    "gray-900": "rgba(17, 24, 39, 1)",
  };

  const toHsla = {
    // hex to hsla
    "#FF0000": "hsla(0, 100%, 50%, 1)",
    "#00FF00": "hsla(120, 100%, 50%, 1)",
    "#0000FF": "hsla(240, 100%, 50%, 1)",
    "#FFFFFF": "hsla(0, 0%, 100%, 1)",
    "#000000": "hsla(0, 0%, 0%, 1)",
    // rgb to hsla
    "rgb(255, 0, 0)": "hsla(0, 100%, 50%, 1)",
    "rgb(0, 255, 0)": "hsla(120, 100%, 50%, 1)",
    "rgb(0, 0, 255)": "hsla(240, 100%, 50%, 1)",
    "rgb(255, 255, 255)": "hsla(0, 0%, 100%, 1)",
    "rgb(0, 0, 0)": "hsla(0, 0%, 0%, 1)",
    // hsl to hsla
    "hsl(0, 100%, 50%)": "hsla(0, 100%, 50%, 1)",
    "hsl(120, 100%, 50%)": "hsla(120, 100%, 50%, 1)",
    "hsl(240, 100%, 50%)": "hsla(240, 100%, 50%, 1)",
    "hsl(0, 0%, 100%)": "hsla(0, 0%, 100%, 1)",
    "hsl(0, 0%, 0%)": "hsla(0, 0%, 0%, 1)",
    // tw to hsla
    "red-500": "hsla(0, 84%, 60%, 1)",
    "yellow-600": "hsla(41, 96%, 40%, 1)",
    "green-200": "hsla(141, 79%, 85%, 1)",
    "violet-500": "hsla(258, 90%, 66%, 1)",
    "gray-900": "hsla(221, 39%, 11%, 1)",
  };

  const rgbaToHex = {
    "rgba(255, 0, 0, 1)": "#FF0000",
    "rgba(0, 255, 0, 1)": "#00FF00",
    "rgba(0, 0, 255, 1)": "#0000FF",
    "rgba(255, 255, 255, 1)": "#FFFFFF",
    "rgba(0, 0, 0, 1)": "#000000",
  };

  const rgbaToRgb = {
    "rgba(255, 150, 0, 1)": "rgb(255, 150, 0)",
    "rgba(0, 255, 150, 1)": "rgb(0, 255, 150)",
    "rgba(150, 0, 255, 0.2)": "rgb(150, 0, 255)",
    "rgba(255, 255, 255, 0.5)": "rgb(255, 255, 255)",
    "rgba(0, 0, 0, 0.5)": "rgb(0, 0, 0)",
  };

  const rgbaToHsl = {
    "rgba(255, 0, 0, 0.1)": "hsl(0, 100%, 50%)",
    "rgba(0, 255, 0, 0.1)": "hsl(120, 100%, 50%)",
    "rgba(0, 0, 255, 0.1)": "hsl(240, 100%, 50%)",
    "rgba(255, 255, 255, 0.1)": "hsl(0, 0%, 100%)",
    "rgba(0, 0, 0, 0.1)": "hsl(0, 0%, 0%)",
  };

  const rgbaToHsla = {
    "rgba(255, 0, 0, 0.2)": "hsla(0, 100%, 50%, 0.2)",
    "rgba(0, 255, 0, 0.3)": "hsla(120, 100%, 50%, 0.3)",
    "rgba(0, 0, 255, 0.4)": "hsla(240, 100%, 50%, 0.4)",
    "rgba(255, 255, 255, 0.7)": "hsla(0, 0%, 100%, 0.7)",
    "rgba(0, 0, 0, 0.6)": "hsla(0, 0%, 0%, 0.6)",
  };

  const rgbaToTw = {
    "rgba(239, 67, 67, 1)": "red-500",
    "rgba(200, 138, 4, 1)": "yellow-600",
    "rgba(187, 247, 208, 1)": "green-200",
    "rgba(137, 90, 246, 1)": "violet-500",
    "rgba(17, 24, 39, 1)": "gray-900",
  };

  const hslaToHex = {
    "hsla(0, 100%, 50%, 1)": "#FF0000",
    "hsla(120, 100%, 50%, 1)": "#00FF00",
    "hsla(240, 100%, 50%, 1)": "#0000FF",
    "hsla(0, 0%, 100%, 1)": "#FFFFFF",
    "hsla(0, 0%, 0%, 1)": "#000000",
  };

  const hslaToRgb = {
    "hsla(0, 100%, 50%, 0.5)": "rgb(255, 0, 0)",
    "hsla(120, 100%, 50%, 0.5)": "rgb(0, 255, 0)",
    "hsla(240, 100%, 50%, 0.5)": "rgb(0, 0, 255)",
    "hsla(0, 0%, 100%, 0.5)": "rgb(255, 255, 255)",
    "hsla(0, 0%, 0%, 0.5)": "rgb(0, 0, 0)",
  };

  const hslaToHsl = {
    "hsla(0, 100%, 50%, 0.2)": "hsl(0, 100%, 50%)",
    "hsla(120, 100%, 50%, 0.3)": "hsl(120, 100%, 50%)",
    "hsla(240, 100%, 50%, 0.4)": "hsl(240, 100%, 50%)",
    "hsla(0, 0%, 100%, 0.7)": "hsl(0, 0%, 100%)",
    "hsla(0, 0%, 0%, 0.6)": "hsl(0, 0%, 0%)",
  };

  const hslaToRgba = {
    "hsla(0, 100%, 50%, 0.1)": "rgba(255, 0, 0, 0.1)",
    "hsla(120, 100%, 50%, 0.2)": "rgba(0, 255, 0, 0.2)",
    "hsla(240, 100%, 50%, 0.3)": "rgba(0, 0, 255, 0.3)",
    "hsla(0, 0%, 100%, 0.4)": "rgba(255, 255, 255, 0.4)",
    "hsla(0, 0%, 0%, 0.9)": "rgba(0, 0, 0, 0.9)",
  };

  const hslaToTw = {
    "hsla(0, 84%, 60%, 0.6)": "red-500",
    "hsla(41, 96%, 40%, 0.7)": "yellow-600",
    "hsla(141, 79%, 85%, 0.8)": "green-200",
    "hsla(258, 90%, 66%, 0.9)": "violet-500",
    "hsla(221, 39%, 11%, 1)": "gray-900",
  };

  // hex to rgb
  describe("HEX to RGB", () => {
    it.each(Object.keys(hexToRgb))("should convert %s to rgb", hex => {
      expect(convertColor(hex, "rgb")).toBe(hexToRgb[hex]);
    });
  });

  // hex to hsl
  describe("HEX to HSL", () => {
    it.each(Object.keys(hexToRgb))("should convert %s to hsl", hex => {
      expect(convertColor(hex, "hsl")).toBe(hexToHsl[hex]);
    });
  });

  // rgb to hex
  describe("RGB to HEX", () => {
    it.each(Object.keys(rgbToHex))("should convert %s to hex", rgb => {
      expect(convertColor(rgb, "hex")).toBe(rgbToHex[rgb]);
    });
  });

  // rgb to hsl
  describe("RGB to HSL", () => {
    it.each(Object.keys(rgbToHsl))("should convert %s to hsl", rgb => {
      expect(convertColor(rgb, "hsl")).toBe(rgbToHsl[rgb]);
    });
  });

  // hsl to hex
  describe("HSL to HEX", () => {
    it.each(Object.keys(hslToHex))("should convert %s to hex", hsl => {
      expect(convertColor(hsl, "hex")).toBe(hslToHex[hsl]);
    });
  });

  // hsl to rgb
  describe("HSL to RGB", () => {
    it.each(Object.keys(hslToRgb))("should convert %s to rgb", hsl => {
      expect(convertColor(hsl, "rgb")).toBe(hslToRgb[hsl]);
    });
  });

  // to rgba
  describe("To RGBA", () => {
    it.each(Object.keys(toRgba))("should convert %s to rgba", color => {
      expect(convertColor(color, "rgba")).toBe(toRgba[color]);
    });
  });

  // to hsla
  describe("To HSLA", () => {
    it.each(Object.keys(toHsla))("should convert %s to hsla", color => {
      expect(convertColor(color, "hsla")).toBe(toHsla[color]);
    });
  });

  // rgba to hex
  describe("RGBA to HEX", () => {
    it.each(Object.keys(rgbaToHex))("should convert %s to hex", color => {
      expect(convertColor(color, "hex")).toBe(rgbaToHex[color]);
    });
  });

  // rgba to rgb
  describe("RGBA to RGB", () => {
    it.each(Object.keys(rgbaToRgb))("should convert %s to rgb", color => {
      expect(convertColor(color, "rgb")).toBe(rgbaToRgb[color]);
    });
  });

  // rgba to hsl
  describe("RGBA to HSL", () => {
    it.each(Object.keys(rgbaToHsl))("should convert %s to hsl", color => {
      expect(convertColor(color, "hsl")).toBe(rgbaToHsl[color]);
    });
  });

  // rgba to hsla
  describe("RGBA to HSLA", () => {
    it.each(Object.keys(rgbaToHsla))("should convert %s to hsla", color => {
      expect(convertColor(color, "hsla")).toBe(rgbaToHsla[color]);
    });
  });

  // rgba to tw
  describe("RGBA to TW", () => {
    it.each(Object.keys(rgbaToTw))("should convert %s to tw", color => {
      expect(convertColor(color, "tw")).toBe(rgbaToTw[color]);
    });
  });

  // hsla to hex
  describe("HSLA to HEX", () => {
    it.each(Object.keys(hslaToHex))("should convert %s to hex", color => {
      expect(convertColor(color, "hex")).toBe(hslaToHex[color]);
    });
  });

  // hsla to rgb
  describe("HSLA to RGB", () => {
    it.each(Object.keys(hslaToRgb))("should convert %s to rgb", color => {
      expect(convertColor(color, "rgb")).toBe(hslaToRgb[color]);
    });
  });

  // hsla to hsl
  describe("HSLA to HSL", () => {
    it.each(Object.keys(hslaToHsl))("should convert %s to hsl", color => {
      expect(convertColor(color, "hsl")).toBe(hslaToHsl[color]);
    });
  });

  // hsla to rgba
  describe("HSLA to RGBA", () => {
    it.each(Object.keys(hslaToRgba))("should convert %s to rgba", color => {
      expect(convertColor(color, "rgba")).toBe(hslaToRgba[color]);
    });
  });

  // hsla to tw
  describe("HSLA to TW", () => {
    it.each(Object.keys(hslaToTw))("should convert %s to tw", color => {
      expect(convertColor(color, "tw")).toBe(hslaToTw[color]);
    });
  });
});

/**
 * Contains tests for converting colors to tailwind classes
 */
describe("Tailwind color conversion", () => {
  const { toTailwind, convertColor } = PigmentTS;

  const hexToTailwind = {
    "#000000": "black",
    "#FFFFFF": "white",
    "#164E63": "cyan-900",
    "#4C1D95": "violet-900",
    "#4B5563": "gray-600",
    "#66A50D": "lime-600",
    "#EF4343": "red-500",
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
      color: "rgb(239, 67, 67)",
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
    "red-500": "#EF4343",
    "green-500": "#22C55E",
    "emerald-200": "#A7F3D0",
    "orange-200": "#FED6A9",
    "border-cyan-900": "#164E63",
    "ring-violet-900": "#4C1D95",
    "to-red-500": "#EF4343",
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
