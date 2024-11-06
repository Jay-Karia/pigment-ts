interface CodeState {
  code: string;
  updateCode: (newCode: string) => void;
}

interface OutputState {
  output: string,
  updateOutput: (newOutput: string) => void;
}

export { type CodeState, type OutputState };
