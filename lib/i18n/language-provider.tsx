"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "zh" | "ja"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "zh",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  useEffect(() => {
    // Try to get language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && ["en", "zh", "ja"].includes(savedLanguage)) {
      setLanguage(savedLanguage as Language)
    }
  }, [])

  // Keep <html lang> in sync
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}
