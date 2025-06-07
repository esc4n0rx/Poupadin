"use client"

import { Player } from "@lottiefiles/react-lottie-player"

interface LottiePlayerProps {
  src: string
  className?: string
}

export function LottiePlayer({ src, className }: LottiePlayerProps) {
  return <Player autoplay loop src={src} className={className} />
}