# 🎨 PigmentTS

[![npm](https://img.shields.io/npm/v/pigment-ts)](https://www.npmjs.com/package/pigment-ts)
[![npm](https://img.shields.io/npm/dt/pigment-ts)](https://www.npmjs.com/package/pigment-ts)

<img src="./public/banner.png" alt="PigmentTS Banner" style="width: 100%">

<br>

A lightweight JavaScript/TypeScript utility for seamless color manipulation and conversion. Tailwind CSS support is built-in.

**Visit the [playground](https://playground-pigment.vercel.app/) to try out the library.** <br>
**See the [documentation](https://pigment-ts.vercel.app/) for the library**

**Supported Formats** - HEX, RGB, HSL, RGBA, HSLA, Tailwind CSS

---

### ✨ Features

- **Color Conversion:** Convert colors between all the supported formats.
- **Brightness Control:** Lighten or darken a color by a specified percentage.
- **Random Color Generation:** Generate random colors in of the supported format.
- **Opacity Control:** Set the opacity of color in any format.
- **Blend Colors:** Blend two colors in any format together in a specified ratio.

More features coming soon!

---


### 🔮 What's New in v0.2

- Support for HSLA and RGBA formats
- New utility functions for opacity control and color blending
- Optimized codebase for better performance and reduced bundle size

---

### ⏩ `pre` Features

Features that are ready for the next release. You can try them out in the [playground](https://playground-pigment.vercel.app/).
They are marked with "(`pre`)" in documentation.

- **[rgb](https://pigment-ts.vercel.app/docs/api#rgb-pre)**: Randome rgb color
- **[hsl](https://pigment-ts.vercel.app/docs/api#hsl-pre)**: Randome hsl color
- **[hex](https://pigment-ts.vercel.app/docs/api#hex-pre)**: Randome hex color
- **[hsla](https://pigment-ts.vercel.app/docs/api#hsla-pre)**: Randome hsla color
- **[rgba](https://pigment-ts.vercel.app/docs/api#rgba-pre)**: Randome rgba color
- **[tw](https://pigment-ts.vercel.app/docs/api#tw-pre)**: Randome tailwind color

---

### 🚀 Getting Started

**Installation:** Install PigmentTS via npm

```shell
npm install pigment-ts
```

**Usage**

Import all the function you need

```ts
import { convertColor, lightenColor, toTailwind } from "pigment-ts";

// Convert HEX to RGB
const rgb = convertColor("#ff5733", "rgb");
console.log(rgb); // 'rgb(255, 87, 51)'

// Lighten a color by 20%
const lighter = lightenColor("#ff5733", 20);
console.log(lighter); // '#FF8A66'

// Get Tailwind CSS class
const twClass = toTailwind("#ef4343");
console.log(twClass); // 'red-500'
```

Use all functions via default import

```ts
import PigmentTS from "pigment-ts";

const randomHex = PigmentTS.randomColor("hex");
console.log(randomHex); // '#A1B2C3'
```

---

### 🗺 Roadmap

See the [ROADMAP](ROADMAP.md) file for a list of features that are planned for future releases.

### 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🤝 Contribution

See the [CONTRIBUTING](CONTRIBUTING.md) file for more information on how to contribute to this project.

---

**Support me by giving a ⭐ if you find this project useful!**
