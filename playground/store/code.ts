import {CodeState} from "@/types/store";
import { create } from "zustand";
import { DEFAULT_CODE } from "@/constants";

const useCodeStore = create<CodeState>()(set => ({
  code: DEFAULT_CODE,
  updateCode: (newCode: string) => set({ code: newCode }),
}));

export { useCodeStore };
