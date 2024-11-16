"use server";

import axios from "axios";
import { LANGUAGE_INFO } from "@/constants";
import { libraryCode64 } from "@/library-code";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export default async function runCode(code: string) {
  const base64Code = libraryCode64;
  const utf8Code = Buffer.from(base64Code, "base64").toString("utf8");

  const response = await API.post("/execute", {
    language: LANGUAGE_INFO.language,
    version: LANGUAGE_INFO.version,
    files: [
      {
        content: utf8Code + code,
      },
    ],
  });

  return response.data.run.output;
}
