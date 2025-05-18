"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/lib/i18n/language-provider"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
