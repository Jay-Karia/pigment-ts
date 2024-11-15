import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <div className="w-1/2 mt-24 flex flex-col gap-4 items-center p-4 ">
      <h1 className="text-5xl font-bold">PigmentTS</h1>
      <small className="text-sm font-medium text-fd-muted-foreground">
        A lightweight utility for color manipulation and conversion
      </small>
      <div className="mt-8 flex gap-6">
        <Button className="rounded-tl-xl" asChild>
          <Link href="/docs/getting-started">Getting Started</Link>
        </Button>
        <Button className="rounded-tr-xl" asChild>
          <Link href="https://github.com/Jay-Karia/pigment-ts" target="_blank">
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
}
