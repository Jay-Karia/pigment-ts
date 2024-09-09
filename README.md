# 🎨 PigmentJS

A lightweight JavaScript utility for seamless color manipulation and conversion between HEX, RGB, and HSL formats. Tailwind CSS support is built-in, allowing developers to convert colors into Tailwind classes. 

## Getting Started

**Installation:** Install PigmentJS via npm

```shell
npm install pigment-js
```

**Usage**

Import all the function you need

```ts
import { convertColor, lightenColor } from 'pigment-js';

// Convert HEX to RGB
const rgb = convertColor('#ff5733', 'rgb');
console.log(rgb); // 'rgb(255, 87, 51)'

// Lighten a color by 20%
const lighter = lightenColor('#ff5733', 20);
console.log(lighter); // '#ff8566'

```

Use all functions via default import

```ts
import PigmentJS from 'pigment-js';

const randomHex = PigmentJS.randomColor('hex');
console.log(randomHex); // '#a1b2c3'

```