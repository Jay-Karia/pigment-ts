# 🎨 PigmentTS

[![npm](https://img.shields.io/npm/v/pigment-ts)](https://www.npmjs.com/package/pigment-ts)
[![npm](https://img.shields.io/npm/dt/pigment-ts)](https://www.npmjs.com/package/pigment-ts)

<img src="./public/banner.png" alt="PigmentTS Banner" style="width: 100%">

<br>

A lightweight JavaScript/TypeScript utility for seamless color manipulation and conversion between HEX, RGB, HSL, HSLA, and RGBA formats. Tailwind CSS support is built-in.

---

### ✨ Features

- **Color Conversion:** Convert colors between HEX, RGB, HSL, HSLA, RGBA and Tailwind CSS formats.
- **Lightness Control:** Lighten or darken a color by a specified percentage.
- **Random Color Generation:** Generate random colors in HEX, RGB, HSL, HSLA, RGBA or Tailwind CSS format.
- **Opacity Control:** Set the opacity of color in any format.
- **Blend Colors:** Blend two colors in any format together in a specified ratio.

More features coming soon!

---

### 🔮 What's New in v0.2

- Support for HSLA and RGBA formats
- New utility functions for opacity control and color blending
- Optimized codebase for better performance and reduced bundle size

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

### 📚 API Reference

**convertColor**

Converts a color from one format to another. Supported formats are HEX, RGB, HSL, RGBA, HSLA and Tailwind CSS.

```ts
convertColor(color: string, format: "hex" | "rgb" | "hsl" | "tw" | "rgba" | "hsla", prefix?: string): string
```

```ts
convertColor("#ff5733", "rgb"); // 'rgb(255, 87, 51)'
convertColor("rgb(255, 87, 51)", "hex"); // '#FF5733'
convertColor("#7f1d1d", "tw"); // 'red-900'
convertColor("#7f1d1d", "tw", "bg"); // 'bg-red-900'
```

**lightenColor**

Lightens a color by a specified percentage.

```ts
lightenColor(color: string, percent: number): string
```

```ts
lightenColor("#ff5733", 20); // '#FF8A66'
```

**darkenColor**

Darkens a color by a specified percentage.

```ts
darkenColor(color: string, percent: number): string
```

```ts
darkenColor("#ff5733", 20); // '#CC2400'
```

**randomColor**

Generates a random color in the specified format.

```ts
randomColor(format: "hex" | "rgb" | "hsl" | "tw" | "rgba" | "hsla", prefix?: string): string
```

```ts
randomColor("hex"); // '#A1B2C3'
randomColor("rgb"); // 'rgb(161, 178, 195)'
randomColor("hsl"); // 'hsl(210, 26%, 70%)'
randomColor("tw", "bg"); // 'bg-blue-300'
```

**toTailwind**

Converts a color to a Tailwind CSS class.

```ts
toTailwind(color: string, prefix?: string): string
```

```ts
toTailwind("#ef4343"); // 'red-500'
toTailwind("#ef4343", "border"); // 'border-red-500'
```

**setOpacity**

Sets the opacity of a color in any format.

```ts
setOpacity(color: string, amount: number, to: "rgba" | "hsla"): string
```

```ts
setOpacity("#ff5733", 0.5, "rgba"); // 'rgba(255, 88, 51, 0.5)'
setOpacity("rgb(200, 100, 150)", 0.3, "hsla"); // hsla(330, 48%, 59%, 0.3)
```

**blendColors**

Blends two colors together to create a new color.

```ts
blendColors(color1: string, color2: string, ratio: number): string
```

```ts
blendColors("#ff5733", "#333333", 0.5); // '#994533'
blendColors("rgb(255, 87, 51)", "hsl(101, 100%, 60%)", 0.2); // 'rgb(227, 121, 51)'
```

**_Note_**: It returns the color in the format of the first color provided.<br>
The prefix for Tailwind color will be taken from the first color.

---

### 🗺 Roadmap

See the [ROADMAP.md](ROADMAP) file for a list of features that are planned for future releases.

---

### 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 🤝 Contribution

See the [CONTRIBUTING](CONTRIBUTING.md) file for more information on how to contribute to this project.

---

**Support me by giving a ⭐ if you find this project useful!**
