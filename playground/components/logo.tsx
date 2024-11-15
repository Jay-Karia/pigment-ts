import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const geistMono = localFont({
  src: "../app/fonts/GeistVF.woff",
});

export function Logo() {
  return (
    <div className="flex gap-2">
      <Image src="/palette.png" alt="Logo" width={25} height={25} />
      <h4
        className={cn(
          geistMono.className,
          "scroll-m-20 text-md font-semibold tracking-tight"
        )}
      >
        Playground
      </h4>
    </div>
  );
}
