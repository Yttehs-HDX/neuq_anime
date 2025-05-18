"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n/use-translation"
import { Sparkles, Cake, Ruler, Heart, Smile } from "lucide-react"
import Image from "next/image"

export function CharacterCard() {
  const { t } = useTranslation()

  return (
    <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center">
        <CardTitle className="text-2xl font-bold">Astricia</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100">
            {t("character.traits.beastEars")}
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            {t("character.traits.staff")}
          </Badge>
          <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
            {t("character.traits.heterochromia")}
          </Badge>
          <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-100">
            {t("character.traits.starMagic")}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-500" />
            <span className="font-medium">{t("character.age")}:</span> 18
          </div>

          <div className="flex items-center gap-2">
            <Cake className="h-5 w-5 text-pink-500" />
            <span className="font-medium">{t("character.birthday")}:</span> {t("character.birthdayValue")}
          </div>

          <div className="flex items-center gap-2">
            <Ruler className="h-5 w-5 text-blue-500" />
            <span className="font-medium">{t("character.height")}:</span> 165cm
          </div>

          <div className="flex items-start gap-2">
            <Heart className="h-5 w-5 text-red-500 mt-1" />
            <div>
              <span className="font-medium">{t("character.likes")}:</span>
              <ul className="list-disc list-inside ml-2 mt-1">
                <li>{t("character.likesItems.ancientStories")}</li>
                <li>{t("character.likesItems.iceFruitPudding")}</li>
                <li>{t("character.likesItems.hotSprings")}</li>
                <li>{t("character.likesItems.fluffyThings")}</li>
              </ul>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Smile className="h-5 w-5 text-green-500 mt-1" />
            <div>
              <span className="font-medium">{t("character.personality")}:</span>
              <p className="mt-1">{t("character.personalityDescription")}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <span className="font-medium">{t("character.signature")}:</span>
          <div className="mt-2 rounded-md overflow-hidden border border-gray-200 dark:border-gray-800">
            <Image
              src="/placeholder.svg?height=100&width=250"
              alt={t("character.signatureAlt")}
              width={250}
              height={100}
              className="w-full object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
