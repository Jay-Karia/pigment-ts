import { convertColor } from "./utils/convertColor";
import { lightenColor, darkenColor } from "./utils/lightenDarken";
import { randomColor } from "./utils/randomColor";
import { toTailwind } from "./utils/toTailwind";
import { lightenTw, darkenTw } from "./utils/lightenDarkenTw";

export { convertColor, lightenColor, darkenColor, randomColor, toTailwind };

const PigmentJS = {
  convertColor,
  lightenColor,
  darkenColor,
  randomColor,
  toTailwind,
  lightenTw,
  darkenTw,
};

export default PigmentJS;
