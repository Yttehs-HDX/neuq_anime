"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/use-translation"

const SISTER_IMAGES: Record<"younger" | "older", string> = {
  younger: "https://cdn.sa.net/2025/06/04/Sq9BGrQWCpklULV.jpg",
  older: "https://cdn.sa.net/2025/06/04/xAcSilVetdIU8r2.jpg",
}

export function ImageGallery() {
  const [current, setCurrent] = useState<"younger" | "older">("younger")
  const { t } = useTranslation()

  const name = t(`sisters.${current}.name`)
  const bio = t(`sisters.${current}.bio`)

  return (
    <Card className="rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-md">
      <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2 space-y-4 order-last md:order-first">
          <h3 className="text-xl font-semibold text-center md:text-left">{name}</h3>
          <p className="text-sm whitespace-pre-wrap leading-relaxed text-center md:text-left">
            {bio}
          </p>
          <div className="flex justify-center md:justify-start gap-2 pt-2">
            <Button
              variant={current === "younger" ? "default" : "outline"}
              onClick={() => setCurrent("younger")}
            >
              {t("sisters.younger.label")}
            </Button>
            <Button
              variant={current === "older" ? "default" : "outline"}
              onClick={() => setCurrent("older")}
            >
              {t("sisters.older.label")}
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={SISTER_IMAGES[current]}
            alt={name}
            width={350}
            height={450}
            className="rounded-xl object-cover w-auto h-[450px]"
          />
        </div>
      </CardContent>
    </Card>
  )
}
