"use client"

import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const currentScrollY = window.scrollY

      // 只在相册页显示（滚动超过一个屏幕高度）
      if (currentScrollY > windowHeight * 0.9) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    // 标记这是按钮触发的滚动，避免吸附逻辑干扰
    if (window.markButtonScroll) {
      window.markButtonScroll()
    }

    // 直接滚动到页面顶部
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        "fixed right-6 bottom-6 z-50 rounded-full shadow-md transition-all duration-300",
        "bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
      )}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ChevronUp className="h-5 w-5 text-purple-500" />
    </Button>
  )
}
