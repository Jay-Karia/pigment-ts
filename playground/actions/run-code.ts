"use server";

import axios from "axios"
import { LANGUAGE_INFO } from "@/constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export default async function runCode(code: string) {
  const response = await API.post("/execute", {
    language: LANGUAGE_INFO.language,
    version: LANGUAGE_INFO.version,
    files: [
      {
        content: code,
      },
    ],
  });

  return response.data.run.output;
}