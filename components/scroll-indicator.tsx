"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // 一旦滚动就隐藏指示器
      setVisible(false)

      // 自动吸附到下一页
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // 如果滚动超过窗口高度的20%，自动滚动到下一页
      if (scrollY > windowHeight * 0.2 && scrollY < windowHeight * 0.8) {
        window.scrollTo({
          top: windowHeight,
          behavior: "smooth",
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToGallery = () => {
    const windowHeight = window.innerHeight
    window.scrollTo({
      top: windowHeight,
      behavior: "smooth",
    })
    setVisible(false)
  }

  return (
    <div
      className={cn(
        "fixed left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 cursor-pointer z-10",
        "bottom-16",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
      onClick={scrollToGallery}
    >
      <div className="bg-white dark:bg-slate-800 rounded-full p-2 shadow-md">
        <ChevronDown className="w-6 h-6 text-purple-500 animate-bounce" />
      </div>
    </div>
  )
}
