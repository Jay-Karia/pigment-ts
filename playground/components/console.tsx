"use client";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { useOutputStore } from "@/store";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { useColoredTextStore } from "@/store";
import React from "react";
import { detectColor } from "@/lib/detectColor";
import { detectFormat } from "@/lib/detectFormat";
import { convertColor } from "pigment-ts";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function Console() {
  const output = useOutputStore(state => state.output);
  const coloredText = useColoredTextStore(state => state.colored);

  function getColored(line: string, colored: boolean): React.ReactNode {
    let formatted: React.ReactNode;

    if (colored) {
      let nextColor = true;
      let lineCopy = line;
      const colors = [] as string[]; // Stores all the colors in the line

      while (nextColor) {
        const detected = detectColor(lineCopy);
        if (detected) {
          const color = detected[0];
          colors.push(color);
          lineCopy = lineCopy.replaceAll(color, "");
        } else {
          nextColor = false;
        }
      }

      for (let i = 0; i < colors.length; i++) {
        let colorClass = colors[i];
        // if color is tailwind, convert it to hex and update color class
        const format = detectFormat(colors[i]);
        if (format === "tw") colorClass = convertColor(colors[i], "hex");

        line = line.replaceAll(
          colors[i],
          `<span style="color:${colorClass}">${colors[i]}</span>`
        );
      }

      formatted = <span dangerouslySetInnerHTML={{ __html: line }} />;
    } else {
      formatted = <span>{line}</span>;
    }

    return formatted;
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
