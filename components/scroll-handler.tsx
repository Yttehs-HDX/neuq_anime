"use client"

import { useEffect, useRef } from "react"

export function ScrollHandler() {
  // 用于记录是否是通过按钮触发的滚动
  const isButtonScrollRef = useRef(false)
  // 用于记录上一次的滚动位置
  const lastScrollYRef = useRef(0)
  // 用于记录是否已经从首页进入过相册页
  const hasEnteredGalleryRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const windowHeight = window.innerHeight
      const scrollDirection = currentScrollY > lastScrollYRef.current ? "down" : "up"

      // 更新上一次滚动位置
      lastScrollYRef.current = currentScrollY

      // 如果是按钮触发的滚动，不进行吸附处理
      if (isButtonScrollRef.current) {
        return
      }

      // 只有从首页向下滚动到一定程度时，才吸附到相册页
      if (scrollDirection === "down" && currentScrollY > windowHeight * 0.2 && currentScrollY < windowHeight * 0.8) {
        window.scrollTo({
          top: windowHeight,
          behavior: "smooth",
        })
        hasEnteredGalleryRef.current = true
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 提供一个方法供其他组件调用，标记滚动是由按钮触发的
  useEffect(() => {
    // 将方法添加到 window 对象，使其他组件可以访问
    window.markButtonScroll = () => {
      isButtonScrollRef.current = true
      // 设置一个定时器，在滚动完成后重置标记
      setTimeout(() => {
        isButtonScrollRef.current = false
      }, 1000) // 假设滚动不会超过1秒
    }

    return () => {
      // 清理
      delete window.markButtonScroll
    }
  }, [])

  return null
}

// 为 window 对象添加类型定义
declare global {
  interface Window {
    markButtonScroll?: () => void
  }
}
