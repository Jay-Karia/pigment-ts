import { convertColor } from "./utils/convertColor";
import { lightenColor, darkenColor } from "./utils/lightenDarken";
import { randomColor } from "./utils/randomColor";
import { toTailwind } from "./utils/toTailwind";
import { setOpacity } from "./utils/setOpacity";
import { blendColors } from "./utils/blendColors";

export {
  convertColor,
  lightenColor,
  darkenColor,
  randomColor,
  toTailwind,
  setOpacity,
  blendColors,
};

const PigmentTS = {
  convertColor,
  lightenColor,
  darkenColor,
  randomColor,
  toTailwind,
  setOpacity,
  blendColors,
};

export default PigmentTS;
