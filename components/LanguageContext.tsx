"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "zh";

const LanguageContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "en", toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, toggle: () => setLang((l) => (l === "en" ? "zh" : "en")) }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
