import { Logo } from "./logo";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const geistMono = localFont({
  src: "../app/fonts/GeistVF.woff",
});

export function Navbar() {
  return (
    <nav className="h-12 border-b px-4 flex items-center">
      <ul
        className={cn(
          geistMono.className,
          "flex justify-start items-center gap-4"
        )}
      >
        <li>
          <Link href="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Link href="https://www.pigment-ts-docs.com" target="_blank">Docs</Link>
        </li>
        <li>
          <Link href="https://github.com/Jay-Karia/pigment-ts" target="_blank">GitHub</Link>
        </li>
      </ul>
    </nav>
  );
}

