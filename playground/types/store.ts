interface CodeState {
  code: string;
  updateCode: (newCode: string) => void;
}

interface OutputState {
  output: string;
  updateOutput: (newOutput: string) => void;
}

interface ColoredTextState {
  colored: boolean;
  toggleColored: () => void;
}

export { type CodeState, type OutputState, type ColoredTextState };
