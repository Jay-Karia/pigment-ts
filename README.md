# 🎨 PigmentJS

A lightweight JavaScript utility for seamless color manipulation and conversion between HEX, RGB, and HSL formats. Tailwind CSS support is built-in.

---

### ✨ Features

- **Color Conversion:** Convert colors between HEX, RGB, HSL and Tailwind CSS formats.
- **Color Manipulation:** Lighten or darken a color by a specified percentage.
- **Random Color Generation:** Generate random colors in HEX, RGB, HSL, or Tailwind CSS format.

More features coming soon!

---

### 🚀 Getting Started

**Installation:** Install PigmentJS via npm

```shell
npm install pigment-js
```

**Usage**

Import all the function you need

```ts
import { convertColor, lightenColor, toTailwind } from "pigment-js";

// Convert HEX to RGB
const rgb = convertColor("#ff5733", "rgb");
console.log(rgb); // 'rgb(255, 87, 51)'

// Lighten a color by 20%
const lighter = lightenColor("#ff5733", 20);
console.log(lighter); // '#FF8A66'

// Get Tailwind CSS class
const twClass = toTailwind("#ef4444");
console.log(twClass); // 'red-500'
```

Use all functions via default import

```ts
import PigmentJS from "pigment-js";

const randomHex = PigmentJS.randomColor("hex");
console.log(randomHex); // '#A1B2C3'
```

---

### 📚 API Reference

**convertColor(color: string, format: "hex" | "rgb" | "hsl" | "tw", prefix?: string): string**

Converts a color from one format to another. Supported formats are HEX, RGB, HSL, and Tailwind CSS.

```ts
convertColor("#ff5733", "rgb"); // 'rgb(255, 87, 51)'
convertColor("rgb(255, 87, 51)", "hex"); // '#FF5733'
convertColor("#7f1d1d", "tw"); // 'red-900'
convertColor("#7f1d1d", "tw", "bg"); // 'bg-red-900'
```

**lightenColor(color: string, percent: number): string**

Lightens a color by a specified percentage.

```ts
lightenColor("#ff5733", 20); // '#FF8A66'
```

**darkenColor(color: string, percent: number): string**

Darkens a color by a specified percentage.

```ts
darkenColor("#ff5733", 20); // '#CC2400'
```

**randomColor(format: "hex" | "rgb" | "hsl" | "tw", prefix?: string): string**

Generates a random color in the specified format.

```ts
randomColor("hex"); // '#A1B2C3'
randomColor("rgb"); // 'rgb(161, 178, 195)'
randomColor("hsl"); // 'hsl(210, 26%, 70%)'
randomColor("tw", "bg"); // 'bg-blue-300'
```

**toTailwind(color: string, prefix?: string): string**

Converts a color to a Tailwind CSS class.

```ts
toTailwind("#ef4444"); // 'red-500'
toTailwind("#ef4444", "border"); // 'border-red-500'
```

---

### 🛠️ Development

**Clone the repository**

```shell
git clone https://github.com/Jay-Karia/pigment-js
```

**Install dependencies**

```shell
npm install
```

**Build the project**

```shell
npm run build
```

**See changes in action**

Open `node` in terminal and import the module

```shell
node
> const PigmentJS = require('./dist/index.js');
> PigmentJS.randomColor("hex");
```
