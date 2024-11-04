import {CodeState} from "@/types/store";
import { create } from "zustand";

const useCodeStore = create<CodeState>()(set => ({
  code: `function add(a, b) {\n  return a + b;\n}`,
  updateCode: (newCode: string) => set({ code: newCode }),
}));

export { useCodeStore };
