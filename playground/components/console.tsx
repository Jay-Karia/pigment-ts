"use client";

import { useCodeStore } from "@/store/code";
import { Button } from "./ui";

export function Console() {
  const code = useCodeStore(state => state.code);

  function handleRunCode() {
    alert(code);
  }

  return (
    <div className="w-full h-full p-4 bg-neutral-900 text-white">
      <div className="h-full bg-neutral-800 p-4">{code}</div>
      <Button onClick={handleRunCode}>Run code</Button>
    </div>
  );
}
