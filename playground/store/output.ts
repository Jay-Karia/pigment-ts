import {OutputState} from "@/types/store"
import {create} from "zustand"

const useOutputStore = create<OutputState>()(set => ({
  output: "",
  updateOutput: (newOutput: string) => set({output: newOutput})
}))

export {useOutputStore}