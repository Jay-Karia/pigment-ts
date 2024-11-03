/**
 * Contains tests for the basic functionality of the application.
 */
import PigmentTS from "../index";

/**
 * Contains tests for lightening colors.
 */
describe("Lightening colors", () => {
  const lightenColor = PigmentTS.lightenColor;

  const lighten20 = {
    // hex
    "#FF0000": "#FF3333",
    "#00FF00": "#33FF33",
    "#0000FF": "#3333FF",
    "#FFFFFF": "#FFFFFF",
    "#000000": "#333333",
    // rgb
    "rgb(255, 0, 0)": "rgb(255, 51, 51)",
    "rgb(0, 255, 0)": "rgb(51, 255, 51)",
    "rgb(0, 0, 255)": "rgb(51, 51, 255)",
    "rgb(255, 255, 255)": "rgb(255, 255, 255)",
    "rgb(0, 0, 0)": "rgb(51, 51, 51)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 60%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 60%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 60%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 100%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 20%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(255, 51, 51, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(51, 255, 51, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(51, 51, 255, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(255, 255, 255, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(51, 51, 51, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 60%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 60%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 60%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 100%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 20%, 0.1)",
  };

  const lighten50 = {
    // hex
    "#FF0000": "#FF7F7F",
    "#00FF00": "#7FFF7F",
    "#0000FF": "#7F7FFF",
    "#FFFFFF": "#FFFFFF",
    "#000000": "#7F7F7F",
    // rgb
    "rgb(255, 0, 0)": "rgb(255, 127, 127)",
    "rgb(0, 255, 0)": "rgb(127, 255, 127)",
    "rgb(0, 0, 255)": "rgb(127, 127, 255)",
    "rgb(255, 255, 255)": "rgb(255, 255, 255)",
    "rgb(0, 0, 0)": "rgb(127, 127, 127)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 75%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 75%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 75%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 100%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 50%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(255, 127, 127, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(127, 255, 127, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(127, 127, 255, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(255, 255, 255, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(127, 127, 127, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 75%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 75%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 75%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 100%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 50%, 0.1)",
  };

  const lighten80 = {
    // hex
    "#FF0000": "#FFCCCC",
    "#00FF00": "#CCFFCC",
    "#0000FF": "#CCCCFF",
    "#FFFFFF": "#FFFFFF",
    "#000000": "#CCCCCC",
    // rgb
    "rgb(255, 0, 0)": "rgb(255, 204, 204)",
    "rgb(0, 255, 0)": "rgb(204, 255, 204)",
    "rgb(0, 0, 255)": "rgb(204, 204, 255)",
    "rgb(255, 255, 255)": "rgb(255, 255, 255)",
    "rgb(0, 0, 0)": "rgb(204, 204, 204)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 90%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 90%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 90%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 100%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 80%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(255, 204, 204, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(204, 255, 204, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(204, 204, 255, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(255, 255, 255, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(204, 204, 204, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 90%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 90%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 90%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 100%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 80%, 0.1)",
  };

  // lighten by 20%
  describe("Lighten by 20%", () => {
    it.each(Object.keys(lighten20))("should lighten %s by 20%", color => {
      expect(lightenColor(color, 20)).toBe(lighten20[color]);
    });
  });

  // lighten by 50%
  describe("Lighten by 50%", () => {
    it.each(Object.keys(lighten50))("should lighten %s by 50%", color => {
      expect(lightenColor(color, 50)).toBe(lighten50[color]);
    });
  });

  // lighten by 80%
  describe("Lighten by 80%", () => {
    it.each(Object.keys(lighten80))("should lighten %s by 80%", color => {
      expect(lightenColor(color, 80)).toBe(lighten80[color]);
    });
  });
});

/**
 * Contains tests for darkening colors.
 */
describe("Darkening colors", () => {
  const darkenColor = PigmentTS.darkenColor;

  const darken20 = {
    // hex
    "#FF0000": "#CC0000",
    "#00FF00": "#00CC00",
    "#0000FF": "#0000CC",
    "#FFFFFF": "#CCCCCC",
    "#000000": "#000000",
    // rgb
    "rgb(255, 0, 0)": "rgb(204, 0, 0)",
    "rgb(0, 255, 0)": "rgb(0, 204, 0)",
    "rgb(0, 0, 255)": "rgb(0, 0, 204)",
    "rgb(255, 255, 255)": "rgb(204, 204, 204)",
    "rgb(0, 0, 0)": "rgb(0, 0, 0)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 40%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 40%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 40%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 80%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 0%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(204, 0, 0, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(0, 204, 0, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(0, 0, 204, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(204, 204, 204, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(0, 0, 0, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 40%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 40%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 40%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 80%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 0%, 0.1)",
  };

  const darken50 = {
    // hex
    "#FF0000": "#800000",
    "#00FF00": "#008000",
    "#0000FF": "#000080",
    "#FFFFFF": "#808080",
    "#000000": "#000000",
    // rgb
    "rgb(255, 0, 0)": "rgb(128, 0, 0)",
    "rgb(0, 255, 0)": "rgb(0, 128, 0)",
    "rgb(0, 0, 255)": "rgb(0, 0, 128)",
    "rgb(255, 255, 255)": "rgb(128, 128, 128)",
    "rgb(0, 0, 0)": "rgb(0, 0, 0)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 25%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 25%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 25%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 50%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 0%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(128, 0, 0, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(0, 128, 0, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(0, 0, 128, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(128, 128, 128, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(0, 0, 0, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 25%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 25%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 25%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 50%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 0%, 0.1)",
  };

  const darken80 = {
    // hex
    "#FF0000": "#330000",
    "#00FF00": "#003300",
    "#0000FF": "#000033",
    "#FFFFFF": "#333333",
    "#000000": "#000000",
    // rgb
    "rgb(255, 0, 0)": "rgb(51, 0, 0)",
    "rgb(0, 255, 0)": "rgb(0, 51, 0)",
    "rgb(0, 0, 255)": "rgb(0, 0, 51)",
    "rgb(255, 255, 255)": "rgb(51, 51, 51)",
    "rgb(0, 0, 0)": "rgb(0, 0, 0)",
    // hsl
    "hsl(0, 100%, 50%)": "hsl(0, 100%, 10%)",
    "hsl(120, 100%, 50%)": "hsl(120, 100%, 10%)",
    "hsl(240, 100%, 50%)": "hsl(240, 100%, 10%)",
    "hsl(0, 0%, 100%)": "hsl(0, 0%, 20%)",
    "hsl(0, 0%, 0%)": "hsl(0, 0%, 0%)",
    // rgba
    "rgba(255, 0, 0, 1)": "rgba(51, 0, 0, 1)",
    "rgba(0, 255, 0, 0.5)": "rgba(0, 51, 0, 0.5)",
    "rgba(0, 0, 255, 0.2)": "rgba(0, 0, 51, 0.2)",
    "rgba(255, 255, 255, 0.8)": "rgba(51, 51, 51, 0.8)",
    "rgba(0, 0, 0, 0.1)": "rgba(0, 0, 0, 0.1)",
    // hsla
    "hsla(0, 100%, 50%, 1)": "hsla(0, 100%, 10%, 1)",
    "hsla(120, 100%, 50%, 0.5)": "hsla(120, 100%, 10%, 0.5)",
    "hsla(240, 100%, 50%, 0.2)": "hsla(240, 100%, 10%, 0.2)",
    "hsla(0, 0%, 100%, 0.8)": "hsla(0, 0%, 20%, 0.8)",
    "hsla(0, 0%, 0%, 0.1)": "hsla(0, 0%, 0%, 0.1)",
  };

  // darken by 20%
  describe("Darken by 20%", () => {
    it.each(Object.keys(darken20))("should darken %s by 20%", color => {
      expect(darkenColor(color, 20)).toBe(darken20[color]);
    });
  });

  // darken by 50%
  describe("Darken by 50%", () => {
    it.each(Object.keys(darken50))("should darken %s by 50%", color => {
      expect(darkenColor(color, 50)).toBe(darken50[color]);
    });
  });

  // darken by 80%
  describe("Darken by 80%", () => {
    it.each(Object.keys(darken80))("should darken %s by 80%", color => {
      expect(darkenColor(color, 80)).toBe(darken80[color]);
    });
  });
});

/**
 * Contains tests for generating random colors.
 */
describe("Random colors", () => {
  const randomColor = PigmentTS.randomColor;

  // random hex
  describe("Random HEX", () => {
    it("should generate a random hex color", () => {
      expect(randomColor("hex")).toMatch(/^#[0-9A-F]{6}$/);
    });
  });

  // random rgb
  describe("Random RGB", () => {
    it("should generate a random rgb color", () => {
      expect(randomColor("rgb")).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
    });
  });

  // random hsl
  describe("Random HSL", () => {
    it("should generate a random hsl color", () => {
      expect(randomColor("hsl")).toMatch(
        /^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/
      );
    });
  });

  // random rgba
  describe("Random RGBA", () => {
    it("should generate a random rgba color", () => {
      expect(randomColor("rgba")).toMatch(
        /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), ([0-1](\.\d+)?)\)/
      );
    });
  });

  // random hsla
  describe("Random HSLA", () => {
    it("should generate a random hsla color", () => {
      expect(randomColor("hsla")).toMatch(
        /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%, ([0-1](\.\d+)?)\)/
      );
    });
  });
});
