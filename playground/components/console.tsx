"use client";

import { useCodeStore } from "@/store/code";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "./ui";
import runCode from "@/actions/run-code";
import React from "react";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function Console() {
  const code = useCodeStore(state => state.code);
  const [output, setOutput] = React.useState("")

  return (
    <div className="w-full h-full p-4 bg-neutral-900 text-white">
      <div className={cn("h-full bg-neutral-800 p-4", geistSans.className)}>
        {output}
      </div>
      <Button
        onClick={ async () => {
          const output = await runCode(code);
          setOutput(output);
        }}
      >
        Run
      </Button>
    </div>
  );
}
