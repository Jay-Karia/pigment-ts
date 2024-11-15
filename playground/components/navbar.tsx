import { Logo } from "./logo";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Button } from "./ui";
import { NAV_LINKS } from "@/constants";

const geistMono = localFont({
  src: "../app/fonts/GeistVF.woff",
});

export function Navbar() {
  return (
    <nav className="h-12 px-4 flex items-center">
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
        {NAV_LINKS.map((link, index) => {
          return (
            <li key={index}>
              <Button asChild variant={"link"} className="text-white">
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
