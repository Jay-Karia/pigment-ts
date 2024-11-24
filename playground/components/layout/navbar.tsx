import { Logo } from "../logo";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import { NAV_LINKS } from "@/constants";

const geistMono = localFont({
  src: "../../app/fonts/GeistVF.woff",
});

export function Navbar() {
  return (
    <nav className="h-14 px-6 flex items-center border-b border-white/10 bg-zinc-900/80 backdrop-blur-md shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
      <ul
        className={cn(
          geistMono.className,
          "flex justify-start items-center gap-8"
        )}
      >
        <li className="mr-2">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>
        </li>
        {NAV_LINKS.map((link, index) => {
          return (
            <li key={index}>
              <Button
                asChild
                variant={"retroNav"}
                size="sm"
                className="text-white/90 hover:text-white"
              >
                <Link href={link.href} target="_blank">
                  {link.title}
                </Link>
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
