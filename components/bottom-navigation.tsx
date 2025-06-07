"use client"

import { motion } from "framer-motion"
import { Home, BarChart3, ArrowUpDown, CreditCard, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/dashboard", icon: Home, label: "Início" },
  { href: "/analysis", icon: BarChart3, label: "Análise" },
  { href: "/transactions", icon: ArrowUpDown, label: "Transações" },
  { href: "/cards", icon: CreditCard, label: "Cartões" },
  { href: "/profile", icon: User, label: "Perfil" },
]

export function BottomNavigation() {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200 safe-area-bottom"
    >
      <div className="flex justify-around py-3">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link key={item.href} href={item.href} className="flex flex-col items-center space-y-1">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="relative">
                {isActive ? (
                  <motion.div
                    layoutId="activeTab"
                    className="w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
              <motion.span
                className={`text-xs ${isActive ? "text-emerald-400 font-medium" : "text-gray-400"}`}
                animate={{ opacity: isActive ? 1 : 0.7 }}
              >
                {item.label}
              </motion.span>
            </Link>
          )
        })}
      </div>
    </motion.div>
  )
}
