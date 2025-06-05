"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/i18n/use-translation"

const SISTER_IMAGES: Record<"younger" | "older", string> = {
  younger: "https://cdn.sa.net/2025/06/04/Sq9BGrQWCpklULV.jpg",
  older: "https://cdn.sa.net/2025/06/04/xAcSilVetdIU8r2.jpg",
}

export function CharacterCard() {
  const [current, setCurrent] = useState<"younger" | "older">("younger")
  const { t } = useTranslation()
  const info = {
    name: t(`sisters.${current}.name`),
    bio: t(`sisters.${current}.bio`),
    image: SISTER_IMAGES[current],
  }

  return (
    <Card className="rounded-xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md shadow-md">
      <CardHeader className="text-center pb-0">
        <CardTitle className="text-2xl font-bold">{info.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-4 flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2 space-y-4">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-center md:text-left">
            {info.bio}
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
            src={info.image}
            alt={info.name}
            width={350}
            height={450}
            className="rounded-xl object-cover w-auto h-[450px]"
          />
        </div>
      </CardContent>
    </Card>
  )
}
