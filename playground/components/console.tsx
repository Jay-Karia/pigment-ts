"use client"

import {useCodeStore} from "@/store/code"

export function Console() {
  const code = useCodeStore(state => state.code)
  return (
    <div className="w-full h-full p-4">
      {code}
    </div>
  )
}