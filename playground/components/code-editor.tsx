"use client";

import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import {useCodeStore} from "@/store/code";

export function CodeEditor() {
  const code = useCodeStore(state => state.code)
  const setCode = useCodeStore(state => state.updateCode)

  return (
    <div className="w-full h-full p-4 bg-slate-100">
      <Editor
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
        className="bg-white border border-black"
      />
    </div>
  );
}

