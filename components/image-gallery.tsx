"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/lib/i18n/use-translation"
import Image from "next/image"

export function ImageGallery() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState("casual")
  const [casualVariant, setCasualVariant] = useState<"with" | "without">("with")
  const CASUAL_WITHOUT_CLOAK = "https://cdn.sa.net/2025/05/18/EGu6CRHASBrwoLl.png?height=500&width=800"
  const CASUAL_WITH_CLOAK = "https://cdn.sa.net/2025/05/18/y4EfhVPa6sqxtm9.png?height=500&width=800"

  return (
    <Card className="shadow-md">
      <CardContent className="p-6">
        <Tabs defaultValue="casual" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="casual">{t("gallery.casual")}</TabsTrigger>
            <TabsTrigger value="winter">{t("gallery.winter")}</TabsTrigger>
          </TabsList>

          <TabsContent value="casual" className="mt-4">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setCasualVariant("with")}
                className={`px-4 py-2 rounded ${casualVariant === "with" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {t("gallery.withCloak")}
              </button>
              <button
                onClick={() => setCasualVariant("without")}
                className={`px-4 py-2 rounded ${casualVariant === "without" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                {t("gallery.withoutCloak")}
              </button>
            </div>
            <div
              className="relative w-full rounded-md overflow-hidden"
              style={{ paddingTop: "62.5%" }}
            >
              <Image
                src={casualVariant === "with" ? CASUAL_WITH_CLOAK : CASUAL_WITHOUT_CLOAK}
                alt={t("gallery.casualAlt")}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{t("gallery.casualTitle")}</h3>
                <p className="text-white/80">{t("gallery.casualDescription")}</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="winter" className="mt-4">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-md overflow-hidden">
              <Image
                src="https://cdn.sa.net/2024/10/23/Rt6CAwJgHL19hiu.png?height=500&width=800"
                alt={t("gallery.winterAlt")}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{t("gallery.winterTitle")}</h3>
                <p className="text-white/80">{t("gallery.winterDescription")}</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
