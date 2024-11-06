"use client";

declare global {
  interface Window {
    PigmentTS: typeof PigmentTS;
  }
}

import React, {useEffect} from "react";
import { useCodeStore } from "@/store/code";
import Editor, { monaco } from "@monaco-editor/react";
import PigmentTS from "pigment-ts";
import {Button} from "./ui";

export function CodeEditor() {
  const code = useCodeStore(state => state.code);
  const setCode = useCodeStore(state => state.updateCode)

  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor, monaco: typeof import("monaco-editor")) {
    editorRef.current = editor;
    monaco.languages.typescript.javascriptDefaults.addExtraLib(
      `declare const PigmentTS: typeof import('pigment-ts');`,
      'ts:pigment-ts.d.ts'
    );
  }

  function handleEditorChange() {
    if (editorRef.current === null)
      setCode("")
    else
      setCode(editorRef.current.getValue())
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.PigmentTS = PigmentTS;
    }
  }, [])

  function handleRunCode() {
    if (editorRef.current === null) return;
    console.log(code);
  }
  

  return (
    <div className="w-full h-full p-4 bg-zinc-900 text-black">
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={code}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        theme="vs-dark"
      />

      <Button onClick={handleRunCode}>Run code</Button>
    </div>
  );
}
