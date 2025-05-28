"use client"

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { ImmersiveMap } from '@/components/immersive-map'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/lib/i18n/use-translation'
import { ArrowLeft, Maximize2, Minimize2 } from 'lucide-react'

export default function MapPage() {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  // Listen for fullscreen change
  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFsChange)
    return () => document.removeEventListener('fullscreenchange', onFsChange)
  }, [])

  const toggleFullscreen = () => {
    if (!containerRef.current) return
    if (!isFullscreen) {
      containerRef.current.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen bg-slate-900 relative"
    >
      {/* Back to Home */}
      <div className="absolute top-4 left-4 z-20">
        <Link href="/">
          <Button variant="outline" size="icon" aria-label={t('map.backHome')}>
            <ArrowLeft />
          </Button>
        </Link>
      </div>
      {/* Fullscreen Toggle */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleFullscreen}
          aria-label={isFullscreen ? t('map.exitFullscreen') : t('map.fullscreen')}
        >
          {isFullscreen ? <Minimize2 /> : <Maximize2 />}
        </Button>
      </div>
      {/* Map Canvas */}
      <div className="w-full h-full overflow-hidden">
        <ImmersiveMap />
      </div>
    </div>
  )
}