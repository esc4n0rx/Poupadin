"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "ghost" | "outline" | "link"
  type?: "button" | "submit"
}

export function AnimatedButton({
  children,
  onClick,
  className,
  variant = "default",
  type = "button",
}: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button onClick={onClick} className={className} variant={variant} type={type}>
        {children}
      </Button>
    </motion.div>
  )
}
