import { Navbar } from "@/components/navbar";
import { Editor } from "@/components/editor";
import { Console } from "@/components/console";
import {Playground} from "@/components/layout/playground";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Playground editor={<Editor />} console={<Console />} />
    </div>
  );
}
