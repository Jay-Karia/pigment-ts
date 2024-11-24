"use client";

import React from "react";
import { useCodeStore } from "@/store";
import * as monaco from "monaco-editor";
import { Editor } from "@monaco-editor/react";
import { Button } from "./ui";

export function CodeEditor() {
  const code = useCodeStore(state => state.code);
  const setCode = useCodeStore(state => state.updateCode);
  const [loaded, setLoaded] = React.useState(false);

  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  function handleEditorChange() {
    if (editorRef.current === null) setCode("");
    else setCode(editorRef.current.getValue());
  }

  return (
    <div className="w-full p-4 bg-zinc-900 h-full">
      {!loaded && (
        <div className="w-full h-full flex justify-center items-center bg-zinc-900/90 backdrop-blur-sm after:content-[''] shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
          <Button
            onClick={() => {
              setLoaded(true);
            }}
            variant={"retro"}
          >
            Load Editor
          </Button>
        </div>
      )}
      {loaded && (
        <Editor
          height="85vh"
          defaultLanguage="javascript"
          defaultValue={code}
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
          theme="vs-dark"
        />
      )}
    </div>
  );
}
