/* eslint-disable */
"use strict";
var __defProp = Object.defineProperty,
  __getOwnPropDesc = Object.getOwnPropertyDescriptor,
  __getOwnPropNames = Object.getOwnPropertyNames,
  __hasOwnProp = Object.prototype.hasOwnProperty,
  __export = (e, $) => {
    for (var r in $) __defProp(e, r, { get: $[r], enumerable: !0 });
  },
  __copyProps = (e, $, r, t) => {
    if (($ && "object" == typeof $) || "function" == typeof $)
      for (let l of __getOwnPropNames($))
        __hasOwnProp.call(e, l) ||
          l === r ||
          __defProp(e, l, {
            get: () => $[l],
            enumerable: !(t = __getOwnPropDesc($, l)) || t.enumerable,
          });
    return e;
  },
  __toCommonJS = e =>
    __copyProps(__defProp({}, "__esModule", { value: !0 }), e),
  pigment_ts_exports = {};
function detectFormat(e) {
  let $ = {
    rgb: /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/,
    hex: /^#[0-9A-F]{6}$/i,
    hsl: /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g,
    tw: /(?:$|^|)(slate-|gray-|zinc-|neutral-|stone-|red-|orange-|amber-|yellow-|lime-|green-|emerald-|teal-|cyan-|sky-|blue-|indigo-|violet-|purple-|fuchsia-|pink-|rose-|white|black)(50|100|200|300|400|500|600|700|800|900|950|)(?:$|^|)/gi,
    rgba: /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), ([0-1](\.\d+)?)\)/,
    hsla: /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%, ([0-1](\.\d+)?)\)/,
  };
  for (let r of ["rgb", "hex", "hsl", "tw", "rgba", "hsla"])
    if ($[r].test(e)) return r;
  return null;
}
function hexToRgb(e) {
  let $ = e.replace("#", ""),
    r = parseInt($[0] + $[1], 16),
    t = parseInt($[2] + $[3], 16),
    l = parseInt($[4] + $[5], 16);
  return `rgb(${r}, ${t}, ${l})`;
}
function rgbToHsl(e) {
  let $ = e.replace("rgb(", "").replace(")", "").split(",").map(Number),
    r = $[0] / 255,
    t = $[1] / 255,
    l = $[2] / 255,
    n = Math.max(r, t, l),
    o = Math.min(r, t, l),
    a = 0,
    i = 0,
    s = (n + o) / 2;
  if (n !== o) {
    let c = n - o;
    switch (((i = s > 0.5 ? c / (2 - n - o) : c / (n + o)), n)) {
      case r:
        a = (t - l) / c + (t < l ? 6 : 0);
        break;
      case t:
        a = (l - r) / c + 2;
        break;
      case l:
        a = (r - t) / c + 4;
    }
    a /= 6;
  }
  return `hsl(${Math.round(360 * a)}, ${Math.round(100 * i)}%, ${Math.round(100 * s)}%)`;
}
function toHex(e) {
  let $ = e.toString(16);
  for (; $.length < 2; ) $ = "0" + $;
  return $;
}
function hue2rgb(e, $, r) {
  return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
    ? e + ($ - e) * 6 * r
    : r < 0.5
      ? $
      : r < 2 / 3
        ? e + ($ - e) * (2 / 3 - r) * 6
        : e;
}
function hslToHex(e) {
  let $ = e
      .replace("hsl(", "")
      .replace(")", "")
      .replaceAll("%", "")
      .split(",")
      .map(Number),
    r = $[0] / 360,
    t = $[1] / 100,
    l = $[2] / 100,
    n = 0,
    o = 0,
    a = 0;
  if (0 === t) n = o = a = l;
  else {
    let i = l < 0.5 ? l * (1 + t) : l + t - l * t,
      s = 2 * l - i;
    (n = hue2rgb(s, i, r + 1 / 3)),
      (o = hue2rgb(s, i, r)),
      (a = hue2rgb(s, i, r - 1 / 3));
  }
  let c = toHex(Math.round(255 * n)),
    F = toHex(Math.round(255 * o)),
    u = toHex(Math.round(255 * a));
  return `#${c}${F}${u}`.toUpperCase();
}
function rgbToHex(e) {
  let $ = e.replace("rgb(", "").replace(")", "").split(",").map(Number),
    r = $[0].toString(16).padStart(2, "0"),
    t = $[1].toString(16).padStart(2, "0"),
    l = $[2].toString(16).padStart(2, "0");
  return `#${r}${t}${l}`.toUpperCase();
}
__export(pigment_ts_exports, {
  blendColors: () => blendColors,
  convertColor: () => convertColor,
  darkenColor: () => darkenColor,
  default: () => pigment_ts_default,
  lightenColor: () => lightenColor,
  randomColor: () => randomColor,
  setOpacity: () => setOpacity,
  toTailwind: () => toTailwind,
}),
  (module.exports = __toCommonJS(pigment_ts_exports));
var hexTailwindMap = {
    "#000000": "black",
    "#FFFFFF": "white",
    "#F8FAFC": "slate-50",
    "#F1F5F9": "slate-100",
    "#E2E8F0": "slate-200",
    "#CBD5E1": "slate-300",
    "#94A3B8": "slate-400",
    "#64748B": "slate-500",
    "#475569": "slate-600",
    "#334155": "slate-700",
    "#1E293B": "slate-800",
    "#0F172A": "slate-900",
    "#020617": "slate-950",
    "#F9FAFB": "gray-50",
    "#F3F4F6": "gray-100",
    "#E5E7EB": "gray-200",
    "#D1D5DB": "gray-300",
    "#9CA3AF": "gray-400",
    "#6B7280": "gray-500",
    "#4B5563": "gray-600",
    "#374151": "gray-700",
    "#1F2937": "gray-800",
    "#111827": "gray-900",
    "#030712": "gray-950",
    "#FAFAFA": "zinc-50",
    "#F4F4F5": "zinc-100",
    "#E4E4E7": "zinc-200",
    "#D4D4D8": "zinc-300",
    "#A1A1AA": "zinc-400",
    "#71717A": "zinc-500",
    "#52525B": "zinc-600",
    "#3F3F46": "zinc-700",
    "#27272A": "zinc-800",
    "#18181B": "zinc-900",
    "#09090B": "zinc-950",
    "#F7F7F7": "neutral-50",
    "#F5F5F5": "neutral-100",
    "#E5E5E5": "neutral-200",
    "#D4D4D4": "neutral-300",
    "#A3A3A3": "neutral-400",
    "#737373": "neutral-500",
    "#525252": "neutral-600",
    "#404040": "neutral-700",
    "#262626": "neutral-800",
    "#171717": "neutral-900",
    "#0A0A0A": "neutral-950",
    "#FAFAF9": "stone-50",
    "#F5F5F4": "stone-100",
    "#E7E5E4": "stone-200",
    "#D6D3D1": "stone-300",
    "#A8A29E": "stone-400",
    "#78716C": "stone-500",
    "#57534E": "stone-600",
    "#44403C": "stone-700",
    "#292524": "stone-800",
    "#1C1917": "stone-900",
    "#0C0A09": "stone-950",
    "#FEF2F2": "red-50",
    "#FEE2E2": "red-100",
    "#FECACA": "red-200",
    "#FCA5A5": "red-300",
    "#F87171": "red-400",
    "#EF4343": "red-500",
    "#DC2626": "red-600",
    "#B91C1C": "red-700",
    "#991B1B": "red-800",
    "#7F1D1D": "red-900",
    "#450A0A": "red-950",
    "#FFF7ED": "orange-50",
    "#FFEDD5": "orange-100",
    "#FED6A9": "orange-200",
    "#FDBA74": "orange-300",
    "#FB923C": "orange-400",
    "#F97316": "orange-500",
    "#EA580C": "orange-600",
    "#C2410C": "orange-700",
    "#9A3412": "orange-800",
    "#7D2D12": "orange-900",
    "#431407": "orange-950",
    "#FFFBEB": "amber-50",
    "#FEF3C7": "amber-100",
    "#FDE68A": "amber-200",
    "#FCD34D": "amber-300",
    "#FBBF24": "amber-400",
    "#F59E0B": "amber-500",
    "#D97706": "amber-600",
    "#B45309": "amber-700",
    "#92400E": "amber-800",
    "#78350F": "amber-900",
    "#451A03": "amber-950",
    "#FEFCE8": "yellow-50",
    "#FEF9C3": "yellow-100",
    "#FEF08A": "yellow-200",
    "#FDE047": "yellow-300",
    "#FACC15": "yellow-400",
    "#EAB308": "yellow-500",
    "#C88A04": "yellow-600",
    "#A16207": "yellow-700",
    "#854D0E": "yellow-800",
    "#713F12": "yellow-900",
    "#422006": "yellow-950",
    "#F7FEE7": "lime-50",
    "#ECFCCB": "lime-100",
    "#D9F99F": "lime-200",
    "#BEF264": "lime-300",
    "#A3E635": "lime-400",
    "#84CC16": "lime-500",
    "#66A50D": "lime-600",
    "#4D7C0F": "lime-700",
    "#3F6212": "lime-800",
    "#365314": "lime-900",
    "#1A2E05": "lime-950",
    "#F0FDF4": "green-50",
    "#DCFCE7": "green-100",
    "#BBF7D0": "green-200",
    "#86EFAC": "green-300",
    "#4ADE80": "green-400",
    "#22C55E": "green-500",
    "#16A34A": "green-600",
    "#15803D": "green-700",
    "#166534": "green-800",
    "#14532D": "green-900",
    "#0D332F": "green-950",
    "#ECFDF5": "emerald-50",
    "#D1FAE5": "emerald-100",
    "#A7F3D0": "emerald-200",
    "#6EE7B7": "emerald-300",
    "#34D399": "emerald-400",
    "#10B981": "emerald-500",
    "#059669": "emerald-600",
    "#047857": "emerald-700",
    "#065F46": "emerald-800",
    "#064E3B": "emerald-900",
    "#022C22": "emerald-950",
    "#F0FDFA": "teal-50",
    "#CCFBF1": "teal-100",
    "#99F6E4": "teal-200",
    "#5EEAD4": "teal-300",
    "#2DD4BF": "teal-400",
    "#14B8A6": "teal-500",
    "#0D9488": "teal-600",
    "#0F766E": "teal-700",
    "#115E59": "teal-800",
    "#134E4A": "teal-900",
    "#042F2E": "teal-950",
    "#ECFEFF": "cyan-50",
    "#CFFAFE": "cyan-100",
    "#A5F3FC": "cyan-200",
    "#67E8F9": "cyan-300",
    "#22D3EE": "cyan-400",
    "#06B6D4": "cyan-500",
    "#0891B2": "cyan-600",
    "#0E7490": "cyan-700",
    "#155E75": "cyan-800",
    "#164E63": "cyan-900",
    "#083344": "cyan-950",
    "#F0F9FF": "sky-50",
    "#E0F2FE": "sky-100",
    "#BAE6FD": "sky-200",
    "#7DD3FC": "sky-300",
    "#38BDF8": "sky-400",
    "#0EA5E9": "sky-500",
    "#0284C7": "sky-600",
    "#0369A1": "sky-700",
    "#075985": "sky-800",
    "#0C4A6E": "sky-900",
    "#082F49": "sky-950",
    "#EFF6FF": "blue-50",
    "#DBEAFF": "blue-100",
    "#BFDBFE": "blue-200",
    "#93C5FD": "blue-300",
    "#60A5FA": "blue-400",
    "#3B82F6": "blue-500",
    "#2563EB": "blue-600",
    "#1D4ED8": "blue-700",
    "#1E40AF": "blue-800",
    "#1E3A8A": "blue-900",
    "#172554": "blue-950",
    "#EEF2FF": "indigo-50",
    "#E0E7FF": "indigo-100",
    "#C7D2FE": "indigo-200",
    "#A5B4FC": "indigo-300",
    "#818CF8": "indigo-400",
    "#6366F1": "indigo-500",
    "#4F46E5": "indigo-600",
    "#4338CA": "indigo-700",
    "#3730A3": "indigo-800",
    "#312E81": "indigo-900",
    "#1E1B4B": "indigo-950",
    "#F5F3FF": "violet-50",
    "#EDE9FE": "violet-100",
    "#DDD6FE": "violet-200",
    "#C4B5FD": "violet-300",
    "#A78BFA": "violet-400",
    "#895AF6": "violet-500",
    "#7C3AED": "violet-600",
    "#6D28D9": "violet-700",
    "#5B21B6": "violet-800",
    "#4C1D95": "violet-900",
    "#2E1065": "violet-950",
    "#FAF5FF": "purple-50",
    "#F3E8FF": "purple-100",
    "#E9D5FF": "purple-200",
    "#D8B4FE": "purple-300",
    "#C084FC": "purple-400",
    "#A855F7": "purple-500",
    "#9333EA": "purple-600",
    "#7E22CE": "purple-700",
    "#6B21A8": "purple-800",
    "#581C87": "purple-900",
    "#3B0764": "purple-950",
    "#FDF4FF": "fuchsia-50",
    "#FAE8FF": "fuchsia-100",
    "#F5D0FE": "fuchsia-200",
    "#F0ABFC": "fuchsia-300",
    "#E879F9": "fuchsia-400",
    "#D946EF": "fuchsia-500",
    "#C026D3": "fuchsia-600",
    "#A21CAF": "fuchsia-700",
    "#86198F": "fuchsia-800",
    "#701A75": "fuchsia-900",
    "#4A044E": "fuchsia-950",
    "#FDF2F8": "pink-50",
    "#FCE7F3": "pink-100",
    "#FBCFE8": "pink-200",
    "#F9A8D4": "pink-300",
    "#F472B6": "pink-400",
    "#EC4899": "pink-500",
    "#DB2777": "pink-600",
    "#BE185D": "pink-700",
    "#9D174D": "pink-800",
    "#831843": "pink-900",
    "#500724": "pink-950",
    "#FFF1F2": "rose-50",
    "#FFE4E6": "rose-100",
    "#FECDD3": "rose-200",
    "#FDA4AF": "rose-300",
    "#FB7185": "rose-400",
    "#F43F5E": "rose-500",
    "#E11D48": "rose-600",
    "#BE123C": "rose-700",
    "#9F1239": "rose-800",
    "#881337": "rose-900",
    "#4C0519": "rose-950",
  },
  hexTailwindMapInverted = Object.fromEntries(
    Object.entries(hexTailwindMap).map(([e, $]) => [$, e])
  );
function toTailwind(e, $) {
  let r = detectFormat(e);
  if ("tw" === r || "black" == e || "white" == e) return e;
  let t = convertColor(e, "hex"),
    l = hexTailwindMap[t];
  return void 0 !== l || e.includes("-") || (l = `[${t}]`), $ ? `${$}-${l}` : l;
}
var TAILWIND_PREFIXES = [
    "bg-",
    "text-",
    "border-",
    "ring-",
    "from-",
    "via-",
    "to-",
    "divide-",
    "placeholder-",
    "ring-offset-",
  ],
  TAILWIND_COLORS = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ],
  TAILWIND_SHADES = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950",
  ];
function removeTailwindPrefix(e) {
  for (let $ of TAILWIND_PREFIXES)
    if (e.startsWith($)) return e.slice($.length);
  return e;
}
function tailwindToHex(e) {
  let $ = hexTailwindMapInverted[e];
  return $;
}
function fromTailwind(e, $) {
  let r = removeTailwindPrefix(e),
    t = tailwindToHex(r);
  return convertColor(t, $);
}
function hslToHsla(e) {
  let $ = e
    .replace("hsl(", "")
    .replace(")", "")
    .replaceAll("%", "")
    .split(",")
    .map(Number);
  return `hsla(${$[0]}, ${$[1]}%, ${$[2]}%, 1)`;
}
function hslaToHsl(e) {
  return e.replace("hsla", "hsl").split(",").slice(0, 3).join(",") + ")";
}
function hslaToRgba(e) {
  let $ = e
      .replace("hsla(", "")
      .replace(")", "")
      .replaceAll("%", "")
      .split(",")
      .map(Number),
    r = $[3],
    t = `hsl(${$[0]}, ${$[1]}%, ${$[2]}%)`,
    l = hexToRgb(hslToHex(t)).replace("rgb(", "").replace(")", "");
  return `rgba(${l}, ${r})`;
}
function rgbaToHsla(e) {
  let $ = e.replace("rgba(", "").replace(")", "").split(",").map(Number),
    r = $[3],
    t = `rgb(${$[0]}, ${$[1]}, ${$[2]})`,
    l = rgbToHsl(t).replace("hsl(", "").replace(")", "");
  return `hsla(${l}, ${r})`;
}
function rgbaToRgb(e) {
  return e.replace("rgba", "rgb").split(",").slice(0, 3).join(",") + ")";
}
function rgbToRgba(e) {
  return `rgba(${e.replace("rgb(", "").replace(")", "")}, 1)`;
}
function convertColor(e, $, r) {
  let t = detectFormat(e);
  if (!t) throw Error("Invalid color format.");
  if (t === $) return e;
  switch (t) {
    case "hex":
      switch ($) {
        case "rgb":
          return hexToRgb(e);
        case "hsl":
          return rgbToHsl(hexToRgb(e));
        case "rgba":
          return rgbToRgba(hexToRgb(e));
        case "hsla":
          return hslToHsla(rgbToHsl(hexToRgb(e)));
      }
      break;
    case "rgb":
      switch ($) {
        case "hex":
          return rgbToHex(e);
        case "hsl":
          return rgbToHsl(e);
        case "rgba":
          return rgbToRgba(e);
        case "hsla":
          return hslToHsla(rgbToHsl(e));
      }
      break;
    case "hsl":
      switch ($) {
        case "hex":
          return hslToHex(e);
        case "rgb":
          return hexToRgb(hslToHex(e));
        case "rgba":
          return rgbToRgba(hexToRgb(hslToHex(e)));
        case "hsla":
          return hslToHsla(e);
      }
      break;
    case "rgba":
      switch ($) {
        case "hsla":
          return rgbaToHsla(e);
        case "rgb":
          return rgbaToRgb(e);
        case "hex":
          return rgbToHex(rgbaToRgb(e));
        case "hsl":
          return hslaToHsl(rgbaToHsla(e));
      }
      break;
    case "hsla":
      switch ($) {
        case "rgba":
          return hslaToRgba(e);
        case "rgb":
          return rgbaToRgb(hslaToRgba(e));
        case "hex":
          return rgbToHex(rgbaToRgb(hslaToRgba(e)));
        case "hsl":
          return hslaToHsl(e);
      }
      break;
    case "tw":
      return fromTailwind(e, $);
  }
  return "tw" === $ ? toTailwind(e, r) : "";
}
function lightenDarkenHex(e, $, r, t) {
  let l = Math.round(2.55 * $),
    n = hexToRgb(e)
      .replace(/[^\d,]/g, "")
      .split(",")
      .map(Number),
    o = "lighten" === t ? Math.min(255, n[0] + l) : Math.max(0, n[0] - l),
    a = "lighten" === t ? Math.min(255, n[1] + l) : Math.max(0, n[1] - l),
    i = "lighten" === t ? Math.min(255, n[2] + l) : Math.max(0, n[2] - l),
    s = `rgb(${o}, ${a}, ${i})`;
  return convertColor(s, r);
}
function lightenTw(e, $) {
  if ($ < 0 || $ > 100) return "Invalid percentage";
  if (0 === $) return e;
  let r = removeTailwindPrefix(e),
    t = extract(r).shade;
  return `${extractPrefix(e)}${extract(r).color}-${calcAmount($, !0, t)}`;
}
function darkenTw(e, $) {
  if ($ < 0 || $ > 100) return "Invalid percentage";
  if (0 === $) return e;
  let r = removeTailwindPrefix(e),
    t = extract(r).shade;
  return `${extractPrefix(e)}${extract(r).color}-${calcAmount($, !1, t)}`;
}
function calcAmount(e, $, r) {
  if (100 === e && $) return 50;
  if (100 === e && !$) return 900;
  let t = r + ($ ? -1 : 1) * (e / 100) * 900;
  return t < 50 ? 50 : t > 900 ? 900 : 100 * Math.round(t / 100);
}
function extractPrefix(e) {
  for (let $ of TAILWIND_PREFIXES) if (e.startsWith($)) return $;
  return "";
}
function extract(e) {
  let $ = parseInt(e.split("-")[1]),
    r = e.split("-")[0];
  return { shade: $, color: r };
}
function checkInputs(e, $) {
  let r = detectFormat(e);
  return r
    ? $ < 0 || $ > 100
      ? "Invalid percentage"
      : 0 == $
        ? e
        : void 0
    : "Invalid color format";
}
function lightenDarkenColor(e, $, r, t) {
  let l = e.split(", ")[3],
    n = convertColor(e, "hex");
  return "rgba" === r
    ? lightenDarkenHex(n, $, "rgba", t).replace(/,\s*[^,]+$/, `, ${l || "1"}`)
    : "hsla" === r
      ? lightenDarkenHex(n, $, "hsla", t).replace(/,\s*[^,]+$/, `, ${l || "1"}`)
      : lightenDarkenHex(n, $, r, t);
}
function lightenColor(e, $) {
  checkInputs(e, $);
  let r = detectFormat(e);
  return "tw" === r ? lightenTw(e, $) : lightenDarkenColor(e, $, r, "lighten");
}
function darkenColor(e, $) {
  checkInputs(e, $);
  let r = detectFormat(e);
  return "tw" === r ? darkenTw(e, $) : lightenDarkenColor(e, $, r, "darken");
}
function randomTw(e) {
  let $ = TAILWIND_COLORS[Math.floor(Math.random() * TAILWIND_COLORS.length)],
    r = TAILWIND_SHADES[Math.floor(Math.random() * TAILWIND_SHADES.length)];
  return `${e ? e + "-" : ""}${$}-${r}`;
}
function randomColor(e, $) {
  if ("tw" === e) return randomTw($);
  let r = `rgb(${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())}, ${Math.floor(256 * Math.random())})`;
  return convertColor(r, e);
}
function setHslaOpacity(e, $) {
  let r = e.split(", ")[3];
  return e.replace(r, $.toString() + ")");
}
function setOpacity(e, $, r) {
  let t = detectFormat(e);
  if ($ < 0 || $ > 1) return "Invalid opacity amount";
  if ("hsla" === t) return convertColor(setHslaOpacity(e, $), r);
  if ("rgba" === t) return convertColor(setHslaOpacity(rgbaToHsla(e), $), r);
  if ("hex" === t)
    return convertColor(setHslaOpacity(convertColor(e, "hsla"), $), r);
  if ("rgb" === t)
    return convertColor(setHslaOpacity(convertColor(e, "hsla"), $), r);
  if ("hsl" === t) return convertColor(setHslaOpacity(hslToHsla(e), $), r);
  else return convertColor(setHslaOpacity(convertColor(e, "hsla"), $), r);
}
function blendRgb(e, $, r) {
  if (e === $) return e;
  let t = e.match(/\d+/g),
    l = $.match(/\d+/g),
    n = Math.round(parseInt(t[0]) + (parseInt(l[0]) - parseInt(t[0])) * r),
    o = Math.round(parseInt(t[1]) + (parseInt(l[1]) - parseInt(t[1])) * r),
    a = Math.round(parseInt(t[2]) + (parseInt(l[2]) - parseInt(t[2])) * r);
  return `rgb(${n}, ${o}, ${a})`;
}
function blendColors(e, $, r) {
  let t = detectFormat(e),
    l = detectFormat($);
  if (!t || !l) return "Invalid color format";
  if (e === $) return e;
  let n = convertColor(e, "rgb"),
    o = convertColor($, "rgb"),
    a = blendRgb(n, o, r);
  if ("hsla" === t) {
    let i = e.split(", ")[3],
      s = convertColor(a, "hsla");
    return `${setHslaOpacity(s, i.replace(")", ""))}`;
  }
  if ("rgba" === t) {
    let c = e.split(", ")[3],
      F = convertColor(a, "rgba"),
      u = setHslaOpacity(rgbaToHsla(F), c.replace(")", ""));
    return hslaToRgba(u);
  }
  return "tw" === t
    ? `${extractPrefix(e)}${convertColor(a, t)}`
    : convertColor(a, t);
}
var PigmentTS = {
    convertColor,
    lightenColor,
    darkenColor,
    randomColor,
    toTailwind,
    setOpacity,
    blendColors,
  },
  pigment_ts_default = PigmentTS;
