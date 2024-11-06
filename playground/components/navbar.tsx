import { Logo } from "./logo";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "./ui";

const geistMono = localFont({
  src: "../app/fonts/GeistVF.woff",
});

export function Navbar() {
  return (
    <nav className="h-12 border-b px-4 flex items-center">
      <ul
        className={cn(
          geistMono.className,
          "flex justify-start items-center gap-6"
        )}
      >
        <li>
          <Link href="/">
            <Logo />
          </Link>
        </li>
        <li>
          <Button asChild variant={"link"} className="p-0 text-white" >
            <Link href="https://pigment-ts-docs.com" target="_blank">
              Docs
            </Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"link"} className="p-0 text-white">
            <Link
              href="https://github.com/Jay-Karia/pigment-ts"
              target="_blank"
            >
              GitHub
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}

