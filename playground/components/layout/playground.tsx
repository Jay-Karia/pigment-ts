"use client";

import { TopBar } from "./top-bar";

type PlaygroundProps = {
  editor: React.ReactNode;
  console: React.ReactNode;
};

export function Playground({ editor, console }: PlaygroundProps) {
  return (
    <div>
      <TopBar />
      <div className="flex lg:flex-row flex-col">
        <div className="lg:w-[70%]">{editor}</div>
        <div className="lg:w-[30%]">{console}</div>
      </div>
    </div>
  );
}
