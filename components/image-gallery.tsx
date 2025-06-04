"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface Character {
  name: string
  image: string
  description: string
}

const CHARACTERS: Character[] = [
  {
    name: "新角色A",
    image: "https://picsum.photos/seed/charA/600/800",
    description: "这是一段关于角色A的简介。",
  },
  {
    name: "新角色B",
    image: "https://picsum.photos/seed/charB/600/800",
    description: "这里是角色B的相关介绍。",
  },
]

export function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {CHARACTERS.map((c) => (
        <Card key={c.name} className="shadow-md">
          <CardContent className="p-4 space-y-4">
            <div className="relative w-full h-[400px]">
              <Image src={c.image} alt={c.name} fill className="object-cover rounded-md" />
            </div>
            <h3 className="text-lg font-semibold text-center">{c.name}</h3>
            <p className="text-sm text-center">{c.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
