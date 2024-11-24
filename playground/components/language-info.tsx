import { LANGUAGE_INFO } from "@/constants";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
});

export function LanguageInfo() {
  return (
    <div
      className={cn(
        geistMono.className,
        "relative px-4 py-1.5 border border-white/20 bg-zinc-900/50 backdrop-blur-sm text-xs tracking-wide text-yellow-400/90 after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] after:bg-[length:100%_4px] after:pointer-events-none [&>span]:relative [&>span]:z-1"
      )}
    >
      <span>
        {LANGUAGE_INFO.language} {LANGUAGE_INFO.version} ({LANGUAGE_INFO.type})
      </span>
    </div>
  );
}
