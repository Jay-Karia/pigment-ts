"use client";

import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import {useOutputStore} from "@/store/output";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function Console() {
  const output = useOutputStore(state => state.output)

  return (
    <div className="w-full h-full p-4 bg-neutral-900 text-white">
      <div className={cn("h-full bg-neutral-800 p-4", geistSans.className)}>
        {output}
      </div>
    </div>
  );
}
