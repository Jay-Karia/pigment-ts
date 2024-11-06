import {CodeState, OutputState} from "@/types/store";
import { create } from "zustand";
import { DEFAULT_CODE } from "@/constants";

const useCodeStore = create<CodeState>()(set => ({
  code: DEFAULT_CODE,
  updateCode: (newCode: string) => set({ code: newCode }),
}));

const useOutputStore = create<OutputState>()(set => ({
  output: "",
  updateOutput: (newOutput: string) => set({output: newOutput})
}))

export { useCodeStore, useOutputStore };