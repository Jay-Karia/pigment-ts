"use client";

import React from "react";
import {useCodeStore} from "@/store/code";

export function CodeEditor() {
  const code = useCodeStore(state => state.code)
  // const setCode = useCodeStore(state => state.updateCode)

  return (
    <div className="w-full h-full p-4 bg-white text-black">
      {code}
    </div>
  );
}

