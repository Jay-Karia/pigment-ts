"use client";

import React from "react";
import { useCodeStore } from "@/store/code";
import Editor from "@monaco-editor/react";
import * as monaco from "monaco-editor";

export function CodeEditor() {
  const code = useCodeStore(state => state.code);
  const setCode = useCodeStore(state => state.updateCode);

  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(
    null
  );

  function handleEditorDidMount(
    editor: monaco.editor.IStandaloneCodeEditor,
  ) {
    editorRef.current = editor;
  }

  function handleEditorChange() {
    if (editorRef.current === null) setCode("");
    else setCode(editorRef.current.getValue());
  }

  return (
    <div className="w-full p-4 bg-zinc-900">
      <Editor
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
