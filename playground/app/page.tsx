import { Navbar } from "@/components/layout/navbar";
import { Console } from "@/components/console";
import { Playground } from "@/components/layout/playground";
import { CodeEditor } from "@/components/code-editor";

export default function Home() {
  return (
    <div className="h-full flex flex-col w-full bg-zinc-900 text-white">
      <Navbar />
      <Playground editor={<CodeEditor />} console={<Console />} />
    </div>
  );
}
