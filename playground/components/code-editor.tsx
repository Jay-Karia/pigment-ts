"use client";

import React from "react";
import { useCodeStore } from "@/store";
import * as monaco from "monaco-editor";
import dynamic from "next/dynamic";

export function CodeEditor() {
  const code = useCodeStore(state => state.code);
  const setCode = useCodeStore(state => state.updateCode);

  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );

  const DynamicEditor = dynamic(() => import("@monaco-editor/react"), {
    loading: () => <p>Dynamic Loading...</p>,
    ssr: false,
  });

  function handleEditorDidMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editorRef.current = editor;
  }

  function handleEditorChange() {
    if (editorRef.current === null) setCode("");
    else setCode(editorRef.current.getValue());
  }

  return (
    <div className="w-full p-4 bg-zinc-900">
      <DynamicEditor
        height="85vh"
        defaultLanguage="javascript"
        defaultValue={code}
        onMount={handleEditorDidMount}
        onChange={handleEditorChange}
        theme="vs-dark"
      />
    </div>
  );
}
