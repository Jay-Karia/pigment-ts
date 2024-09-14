import PigmentTS from "../index";

/**
 * Contains tests for changing the opacity of colors.
 */
describe("Changing opacity", () => {
  const setOpacity = PigmentTS.setOpacity;

  const setOpacity20: {
    color: string;
    opacity: number;
    to: "rgba" | "hsla";
    expected: string;
  }[] = [
    // hex to rgba
    {
      color: "#FF0000",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.2)",
    },
    {
      color: "#00FF00",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // hex to hsla
    {
      color: "#FF0000",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "#00FF00",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // rgb to rgba
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.2)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // rgb to hsla
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // hsl to rgba
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.7,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.7)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // hsl to hsla
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // tw to rgba
    {
      color: "bg-cyan-500",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(7, 182, 213, 0.2)",
    },
    {
      color: "bg-green-500",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(33, 196, 93, 0.2)",
    },
    // tw to hsla
    {
      color: "bg-cyan-500",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(189, 94%, 43%, 0.2)",
    },
    {
      color: "bg-green-500",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(142, 71%, 45%, 0.2)",
    },
    // rgba to hsla
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "rgba(0, 255, 0, 0.2)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
    // rgba to rgba
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.2)",
    },
    {
      color: "rgba(0, 255, 0, 0.2)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // hsla to rgba
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 1,
      to: "rgba",
      expected: "rgba(255, 0, 0, 1)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      opacity: 0.2,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.2)",
    },
    // hsla to hsla
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.2)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.2)",
      opacity: 0.2,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.2)",
    },
  ];

  const setOpacity50: {
    color: string;
    opacity: number;
    to: "rgba" | "hsla";
    expected: string;
  }[] = [
    // hex to rgba
    {
      color: "#FF0000",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.5)",
    },
    {
      color: "#00FF00",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // hex to hsla
    {
      color: "#FF0000",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "#00FF00",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
    // rgb to rgba
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.5)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // rgb to hsla
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
    // hsl to rgba
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.5)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // hsl to hsla
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
    // tw to rgba
    {
      color: "bg-cyan-500",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(7, 182, 213, 0.5)",
    },
    {
      color: "bg-green-500",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(33, 196, 93, 0.5)",
    },
    // tw to hsla
    {
      color: "bg-cyan-500",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(189, 94%, 43%, 0.5)",
    },
    {
      color: "bg-green-500",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(142, 71%, 45%, 0.5)",
    },
    // rgba to hsla
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "rgba(0, 255, 0, 0.5)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
    // rgba to rgba
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.5)",
    },
    {
      color: "rgba(0, 255, 0, 0.5)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // hsla to rgba
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 1,
      to: "rgba",
      expected: "rgba(255, 0, 0, 1)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.5)",
      opacity: 0.5,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.5)",
    },
    // hsla to hsla
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.5)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.5)",
      opacity: 0.5,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.5)",
    },
  ];

  const setOpacity80: {
    color: string;
    opacity: number;
    to: "rgba" | "hsla";
    expected: string;
  }[] = [
    // hex to rgba
    {
      color: "#FF0000",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.8)",
    },
    {
      color: "#00FF00",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // hex to hsla
    {
      color: "#FF0000",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "#00FF00",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
    // rgb to rgba
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.8)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // rgb to hsla
    {
      color: "rgb(255, 0, 0)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "rgb(0, 255, 0)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
    // hsl to rgba
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.8)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // hsl to hsla
    {
      color: "hsl(0, 100%, 50%)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "hsl(120, 100%, 50%)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
    // tw to rgba
    {
      color: "bg-cyan-500",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(7, 182, 213, 0.8)",
    },
    {
      color: "bg-green-500",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(33, 196, 93, 0.8)",
    },
    // tw to hsla
    {
      color: "bg-cyan-500",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(189, 94%, 43%, 0.8)",
    },
    {
      color: "bg-green-500",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(142, 71%, 45%, 0.8)",
    },
    // rgba to hsla
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "rgba(0, 255, 0, 0.8)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
    // rgba to rgba
    {
      color: "rgba(255, 0, 0, 1)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(255, 0, 0, 0.8)",
    },
    {
      color: "rgba(0, 255, 0, 1)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // hsla to rgba
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 1,
      to: "rgba",
      expected: "rgba(255, 0, 0, 1)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.8)",
      opacity: 0.8,
      to: "rgba",
      expected: "rgba(0, 255, 0, 0.8)",
    },
    // hsla to hsla
    {
      color: "hsla(0, 100%, 50%, 1)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(0, 100%, 50%, 0.8)",
    },
    {
      color: "hsla(120, 100%, 50%, 0.8)",
      opacity: 0.8,
      to: "hsla",
      expected: "hsla(120, 100%, 50%, 0.8)",
    },
  ];

  // invalid opacity
  const invalidOpacity: {
    color: string;
    opacity: number;
    to: "rgba" | "hsla";
    expected: string;
  }[] = [
    {
      color: "#FF0000",
      opacity: -1,
      to: "rgba",
      expected: "Invalid opacity amount",
    },
    {
      color: "#FF0000",
      opacity: 2,
      to: "rgba",
      expected: "Invalid opacity amount",
    },
  ];

  it.each(setOpacity20)(
    `should set opacity to 20%`,
    ({ color, opacity, to, expected }) => {
      expect(setOpacity(color, opacity, to)).toBe(expected);
    }
  );

  it.each(setOpacity50)(
    `should set opacity to 50%`,
    ({ color, opacity, to, expected }) => {
      expect(setOpacity(color, opacity, to)).toBe(expected);
    }
  );

  it.each(setOpacity80)(
    `should set opacity to 80%`,
    ({ color, opacity, to, expected }) => {
      expect(setOpacity(color, opacity, to)).toBe(expected);
    }
  );

  it.each(invalidOpacity)(
    `should return 'Invalid opacity amount'`,
    ({ color, opacity, to, expected }) => {
      expect(setOpacity(color, opacity, to)).toBe(expected);
    }
  );
});
