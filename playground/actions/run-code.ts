"use server";

import axios from "axios"
import { LANGUAGE_INFO } from "@/constants";
import fs from "fs"
import path from "path";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});



export default async function runCode(code: string) {
  const libraryPath = path.resolve(process.cwd(), 'minified-lib.js');
  const libraryCode = fs.readFileSync(libraryPath, 'utf-8');

  const response = await API.post("/execute", {
    language: LANGUAGE_INFO.language,
    version: LANGUAGE_INFO.version,
    files: [
      {
        content: libraryCode + code,
      },
    ],
  });

  return response.data.run.output;
}