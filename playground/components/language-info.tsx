import { LANGUAGE_INFO } from "@/constants";

export function LanguageInfo() {
  return (
    <div>
      {LANGUAGE_INFO.language} {LANGUAGE_INFO.version} ( {LANGUAGE_INFO.type} )
    </div>
  );
}
