"use client";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import runCode from "@/actions/run-code";
import { useCodeStore, useOutputStore } from "@/store";
import React from "react";
import { LanguageInfo } from "./language-info";
import { Toggle } from "@/components/ui/toggle";
import { PaintBucket } from "lucide-react";
import { useColoredTextStore } from "@/store";

const geistSans = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export function TopBar() {
  const code = useCodeStore(state => state.code);
  const setOutput = useOutputStore(state => state.updateOutput);

  const coloredText = useColoredTextStore(state => state.colored);
  const toggleColoredText = useColoredTextStore(state => state.toggleColored);

  async function handleRun() {
    const output = await runCode(code);
    setOutput(output);
  }

  return (
    <div className={cn("m-4 mb-0 flex justify-between", geistSans.className)}>
      <div className="flex items-end">
        <LanguageInfo />
      </div>
      <div className="flex justify-between w-[30%] pl-6">
        <Button variant={"secondary"} onClick={handleRun}>
          Run
        </Button>
        <Toggle
          variant={"custom"}
          onClick={toggleColoredText}
          pressed={coloredText}
        >
          <PaintBucket />
          Colored text
        </Toggle>
      </div>
    </div>
  );
}
