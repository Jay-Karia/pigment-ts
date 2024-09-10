/**
 * Contains tests for the basic functionality of the application.
 */
import PigmentJS from "../index";

/**
 * Contains test for converting colors.
 */
describe("Color conversion", () => {
  const convertColor = PigmentJS.convertColor;

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

  // hex to rgb
  it.each(Object.keys(hexToRgb))("should convert %s to rgb", hex => {
    expect(convertColor(hex, "rgb")).toBe(hexToRgb[hex]);
  });

  // hex to hsl
  it.each(Object.keys(hexToRgb))("should convert %s to hsl", hex => {
    expect(convertColor(hex, "hsl")).toBe(hexToHsl[hex]);
  });

  // rgb to hex
  it.each(Object.keys(rgbToHex))("should convert %s to hex", rgb => {
    expect(convertColor(rgb, "hex")).toBe(rgbToHex[rgb]);
  });

  // rgb to hsl
  it.each(Object.keys(rgbToHsl))("should convert %s to hsl", rgb => {
    expect(convertColor(rgb, "hsl")).toBe(rgbToHsl[rgb]);
  });

  // hsl to hex
  it.each(Object.keys(hslToHex))("should convert %s to hex", hsl => {
    expect(convertColor(hsl, "hex")).toBe(hslToHex[hsl]);
  });

  // hsl to rgb
  it.each(Object.keys(hslToRgb))("should convert %s to rgb", hsl => {
    expect(convertColor(hsl, "rgb")).toBe(hslToRgb[hsl]);
  });
});

/**
 * Contains tests for lightening colors.
 */
describe("Lightening colors", () => {
  const lightenColor = PigmentJS.lightenColor;

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
  };

  // lighten by 20%
  it.each(Object.keys(lighten20))("should lighten %s by 20%", color => {
    expect(lightenColor(color, 20)).toBe(lighten20[color]);
  });

  // lighten by 50%
  it.each(Object.keys(lighten50))("should lighten %s by 50%", color => {
    expect(lightenColor(color, 50)).toBe(lighten50[color]);
  });

  // lighten by 80%
  it.each(Object.keys(lighten80))("should lighten %s by 80%", color => {
    expect(lightenColor(color, 80)).toBe(lighten80[color]);
  });
});

/**
 * Contains tests for darkening colors.
 */
describe("Darkening colors", () => {
  const darkenColor = PigmentJS.darkenColor;

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
  };

  // darken by 20%
  it.each(Object.keys(darken20))("should darken %s by 20%", color => {
    expect(darkenColor(color, 20)).toBe(darken20[color]);
  });

  // darken by 50%
  it.each(Object.keys(darken50))("should darken %s by 50%", color => {
    expect(darkenColor(color, 50)).toBe(darken50[color]);
  });

  // darken by 80%
  it.each(Object.keys(darken80))("should darken %s by 80%", color => {
    expect(darkenColor(color, 80)).toBe(darken80[color]);
  });
});

/**
 * Contains tests for generating random colors.
 */
describe("Random colors", () => {
  const randomColor = PigmentJS.randomColor;

  // random hex
  it("should generate a random hex color", () => {
    expect(randomColor("hex")).toMatch(/^#[0-9A-F]{6}$/);
  });

  // random rgb
  it("should generate a random rgb color", () => {
    expect(randomColor("rgb")).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
  });

  // random hsl
  it("should generate a random hsl color", () => {
    expect(randomColor("hsl")).toMatch(/^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/);
  });
});
