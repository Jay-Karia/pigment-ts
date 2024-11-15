import { Navbar } from "@/components/navbar";
import { CodeEditor } from "@/components/code-editor";
import { Console } from "@/components/console";
import { Playground } from "@/components/layout/playground";

export default function Home() {
  return (
    <div className="h-full flex flex-col w-full bg-zinc-900 text-white">
      <Navbar />
      <Playground editor={<CodeEditor />} console={<Console />} />
    </div>
  );
}
