"use client";

import runCode from "@/actions/run-code";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { useCodeStore, useColoredTextStore, useOutputStore } from "@/store";
import { PaintBucket } from "lucide-react";
import localFont from "next/font/local";
import { useState } from "react";
import { LanguageInfo } from "./language-info";
import { LoadingButton } from "./ui/loading-button";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export function TopBar() {
  const code = useCodeStore(state => state.code);
  const setOutput = useOutputStore(state => state.updateOutput);
  const [loading, setLoading] = useState<boolean>(false);

  const coloredText = useColoredTextStore(state => state.colored);
  const toggleColoredText = useColoredTextStore(state => state.toggleColored);

  async function handleRun() {
    setLoading(true);
    const output = await runCode(code);
    setOutput(output);
    setLoading(false);
  }

  return (
    <div className={cn("m-4 mb-0 flex justify-between", geistSans.className)}>
      <div className="flex items-end">
        <LanguageInfo />
      </div>
      <div className="flex justify-between w-[30%] pl-6">
        <LoadingButton variant={"retro2"} onClick={handleRun} loading={loading}>
          Run
        </LoadingButton>
        <Toggle
          variant={"retroGhost"}
          onClick={toggleColoredText}
          pressed={coloredText}
        >
          <PaintBucket />
          <span className="text-black font-medium">Colored text</span>
        </Toggle>
      </div>
    </div>
  );
}
