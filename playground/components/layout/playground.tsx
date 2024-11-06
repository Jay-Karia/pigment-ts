"use client";

type PlaygroundProps = {
  editor: React.ReactNode;
  console: React.ReactNode;
};

export function Playground({ editor, console }: PlaygroundProps) {
  return (
    <div className="flex">
      <div className="w-[70%]">{editor}</div>
      <div className="w-[30%]">{console}</div>
    </div>
  );
}
