/**
 * Contains tests for the basic functionality of the application.
 */

import PigmentJS from "../index";

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
    "hsl(0, 58%, 41%)": "#A52C2C",
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
    "hsl(0, 58%, 41%)": "rgb(165, 44, 44)",
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
