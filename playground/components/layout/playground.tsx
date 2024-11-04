"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

type PlaygroundProps = {
  editor: React.ReactNode;
  console: React.ReactNode;
};

export function Playground({ editor, console }: PlaygroundProps) {
  return (
    <div className="flex border">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={70} minSize={30}>{editor}</ResizablePanel>
        <ResizableHandle withHandle/>
        <ResizablePanel defaultSize={30} minSize={20}>{console}</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

