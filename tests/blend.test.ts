import PigmentTS from "../index";

/**
 * Contains tests for blending colors
 */
describe("Blend colors", () => {
  const blendColors = PigmentTS.blendColors;

  const tests: {
    color: string;
    color2: string;
    ratio: number;
    expected: string;
  }[] = [
    // hex + hex
    {
      color: "#FF0000",
      color2: "#00FF00",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "#00FF00",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + rgb
    {
      color: "#FF0000",
      color2: "rgb(0, 255, 0)",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "rgb(0, 255, 0)",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + hsl
    {
      color: "#FF0000",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + rgba
    {
      color: "#FF0000",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + hsla
    {
      color: "#FF0000",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.5,
      expected: "#808000",
    },
    {
      color: "#FF0000",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.2,
      expected: "#CC3300",
    },
    // hex + tw
    {
      color: "#FF0000",
      color2: "bg-green-500",
      ratio: 0.5,
      expected: "#91632F",
    },
    {
      color: "#FF0000",
      color2: "bg-green-500",
      ratio: 0.2,
      expected: "#D32713",
    },

    // rgb + rgb
    {
      color: "rgb(255, 150, 0)",
      color2: "rgb(0, 255, 0)",
      ratio: 0.7,
      expected: "rgb(77, 224, 0)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "rgb(0, 255, 0)",
      ratio: 0.3,
      expected: "rgb(175, 147, 70)",
    },
    // rgb + hsl
    {
      color: "rgb(255, 150, 0)",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.7,
      expected: "rgb(77, 224, 0)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.3,
      expected: "rgb(175, 147, 70)",
    },
    // rgb + rgba
    {
      color: "rgb(255, 150, 0)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.7,
      expected: "rgb(77, 224, 0)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.3,
      expected: "rgb(175, 147, 70)",
    },
    // rgb + hsla
    {
      color: "rgb(255, 150, 0)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.7,
      expected: "rgb(77, 224, 0)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.3,
      expected: "rgb(175, 147, 70)",
    },
    // rgb + tw
    {
      color: "rgb(255, 150, 0)",
      color2: "bg-green-500",
      ratio: 0.7,
      expected: "rgb(100, 183, 66)",
    },
    {
      color: "rgb(250, 100, 100)",
      color2: "bg-green-500",
      ratio: 0.3,
      expected: "rgb(185, 129, 98)",
    },
    // hsl + hsl
    {
      color: "hsl(0, 100%, 50%)",
      color2: "hsl(120, 100%, 50%)",
      ratio: 0.7,
      expected: "hsl(94, 100%, 35%)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      color2: "hsl(0, 100%, 50%)",
      ratio: 0.3,
      expected: "hsl(94, 100%, 35%)",
    },
    // hsl + rgba
    {
      color: "hsl(0, 100%, 50%)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.7,
      expected: "hsl(94, 100%, 35%)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.3,
      expected: "hsl(120, 100%, 50%)",
    },
    // hsl + hsla
    {
      color: "hsl(0, 100%, 50%)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.7,
      expected: "hsl(94, 100%, 35%)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      color2: "hsla(0, 100%, 50%, 0.5)",
      ratio: 0.3,
      expected: "hsl(94, 100%, 35%)",
    },
    // hsl + tw
    {
      color: "hsl(0, 100%, 50%)",
      color2: "bg-green-500",
      ratio: 0.7,
      expected: "hsl(92, 35%, 40%)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      color2: "bg-green-500",
      ratio: 0.3,
      expected: "hsl(125, 92%, 49%)",
    },
    // rgba + rgba
    {
      color: "rgba(255, 150, 0, 0.5)",
      color2: "rgba(0, 255, 0, 0.5)",
      ratio: 0.7,
      expected: "rgba(79, 224, 0, 0.5)",
    },
    {
      color: "rgba(250, 100, 100, 0.2)",
      color2: "rgba(0, 255, 0, 0.2)",
      ratio: 0.3,
      expected: "rgba(175, 147, 70, 0.2)",
    },
    // rgba + hsla
    {
      color: "rgba(255, 150, 0, 0.5)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.7,
      expected: "rgba(79, 224, 0, 0.5)",
    },
    {
      color: "rgba(250, 100, 100, 0.2)",
      color2: "hsla(120, 100%, 50%, 0.2)",
      ratio: 0.3,
      expected: "rgba(175, 147, 70, 0.2)",
    },
    // rgba + tw
    {
      color: "rgba(255, 150, 0, 0.5)",
      color2: "bg-green-500",
      ratio: 0.7,
      expected: "rgba(100, 184, 66, 0.5)",
    },
    {
      color: "rgba(250, 100, 100, 0.2)",
      color2: "bg-green-500",
      ratio: 0.3,
      expected: "rgba(184, 127, 97, 0.2)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      color2: "rgba(0, 255, 0, 0.2)",
      ratio: 0.3,
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // hsla + hsla
    {
      color: "hsla(0, 100%, 50%, 0.5)",
      color2: "hsla(120, 100%, 50%, 0.5)",
      ratio: 0.7,
      expected: "hsla(94, 100%, 35%, 0.5)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      color2: "hsla(120, 100%, 50%, 0.2)",
      ratio: 0.3,
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // hsla + tw
    {
      color: "hsla(0, 100%, 50%, 0.5)",
      color2: "bg-green-500",
      ratio: 0.7,
      expected: "hsla(92, 35%, 40%, 0.5)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      color2: "bg-green-500",
      ratio: 0.3,
      expected: "hsla(125, 92%, 49%, 0.2)",
    },
    // tw + tw
    {
      color: "green-500",
      color2: "bg-red-500",
      ratio: 0.7,
      expected: "[#B26A4B]",
    },
    {
      color: "bg-green-500",
      color2: "bg-red-500",
      ratio: 0.3,
      expected: "bg-[#609E56]",
    },
  ];

  const invalidColors: [string, string, number][] = [
    ["invalid", "invalid", 0.5],
    ["#FF0000", "invalid", 0.5],
    ["invalid", "#FF0000", 0.5],
  ];

  describe("Invalid colors", () => {
    test.each(invalidColors)(
      "should return 'Invalid color format' for %p and %p",
      (color, color2, ratio) => {
        expect(blendColors(color, color2, ratio)).toBe("Invalid color format");
      }
    );
  });

  it.each(tests)(
    "should blend two colors",
    ({ color, color2, ratio, expected }) => {
      expect(blendColors(color, color2, ratio)).toBe(expected);
    }
  );
});
