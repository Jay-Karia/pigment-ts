"use client";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { useOutputStore } from "@/store";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { useColoredTextStore } from "@/store";
import React from "react";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function Console() {
  const output = useOutputStore(state => state.output);
  const coloredText = useColoredTextStore(state => state.colored);

  function getColored(line: string, colored: boolean): React.ReactNode {
    return (
      <span className={`${colored ? "text-blue-500" : ""}`}>
        Hello
      </span>
    )
  }

  function handleNewLine(output: string) {
    return output.split("\n").map((line, index) => {
      return (
        <div key={index} className="flex items-center">
          <span className="text-neutral-500">{">"}</span>
          <span className="ml-2">{getColored(line, coloredText)}</span>
        </div>
      );
    });
  }

  return (
    <div className="w-full h-full p-4 bg-neutral-900 text-white">
      <div className={cn("h-full bg-neutral-800 p-4", geistSans.className)}>
        <ScrollArea className="h-[80vh] overflow-auto">
          {handleNewLine(output)}
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
