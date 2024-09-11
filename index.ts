import { convertColor } from "./utils/convertColor";
import { lightenColor, darkenColor } from "./utils/lightenDarken";
import { randomColor } from "./utils/randomColor";
import { toTailwind } from "./utils/toTailwind";

export { convertColor, lightenColor, darkenColor, randomColor, toTailwind };

const PigmentTS = {
  convertColor,
  lightenColor,
  darkenColor,
  randomColor,
  toTailwind,
};

export default PigmentTS;
