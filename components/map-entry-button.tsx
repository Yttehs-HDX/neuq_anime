"use client"

import Link from "next/link"
import { useTranslation } from "@/lib/i18n/use-translation"

export function MapEntryButton() {
  const { t } = useTranslation()
  return (
    <div className="mb-16 p-4 rounded-xl bg-white/30 backdrop-blur-md">
      <Link href="/map">
        <button className="w-full py-2 text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow transition-colors">
          {t("map.enterPage")}
        </button>
      </Link>
    </div>
  )
}