import { convertColor } from "./utils/convertColor";
import { lightenColor, darkenColor } from "./utils/lightenDarken";
import { randomColor } from "./utils/randomColor";
import { toTailwind } from "./utils/toTailwind";
import { setOpacity } from "./utils/setOpacity";

export {
  convertColor,
  lightenColor,
  darkenColor,
  randomColor,
  toTailwind,
  setOpacity,
};

const PigmentTS = {
  convertColor,
  lightenColor,
  darkenColor,
  randomColor,
  toTailwind,
  setOpacity,
};

export default PigmentTS;
