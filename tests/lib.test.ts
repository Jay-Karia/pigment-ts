/**
 * Contains tests for lib functions.
 */

import {detectFormat} from "../src/lib/detectFormat"

describe("Detect color format", () => {
  const tests = {
    // valid rgb
    "rgb(255, 255, 255)": "rgb",
    "rgb(192, 192, 192)": "rgb",
    "rgb(128, 0, 0)": "rgb",
    "rgb(0, 128, 0)": "rgb",
    "rgb(255, 165, 0)": "rgb",
    // valid hex
    "#FFFfff": "hex",
    "#000000": "hex",
    "#c0c0c0": "hex",
    "#808000": "hex",
    "#a52a2a": "hex",
    // valid hsl
    "hsl(0, 0%, 100%)": "hsl",
    "hsl(120, 0%, 50%)": "hsl",
    "hsl(180, 100%, 50%)": "hsl",
    "hsl(60, 100%, 25%)": "hsl",
    "hsl(0, 58%, 41%)": "hsl",
    // invalid
    "": null,
    "random_val": null,
    "hsl(12, 21, 21)": null,
    "hsl(0, 0%, 100%, 7)": null,
    "rgb": null,
    "rgb(12, 12, 7, 77)": null,
    "rgba": null,
    "#": null,
    "#1239": null,
    "#1234561": null,
  }

  it.each(Object.keys(tests))("should detect %s", (input) => {
    expect(detectFormat(input)).toBe(tests[input]);
  });
});