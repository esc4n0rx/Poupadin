"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Bell, Edit, Shield, Settings, HelpCircle, LogOut } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"
import { BottomNavigation } from "@/components/bottom-navigation"

const menuItems = [
  { icon: Edit, label: "Editar Perfil", color: "text-blue-600" },
  { icon: Shield, label: "Segurança", color: "text-blue-600" },
  { icon: Settings, label: "Configurações", color: "text-blue-600" },
  { icon: HelpCircle, label: "Ajuda", color: "text-blue-600" },
  { icon: LogOut, label: "Sair", color: "text-red-600" },
]

export default function ProfilePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500 pb-20">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between p-4 pt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/dashboard">
              <ArrowLeft className="w-6 h-6 text-white" />
            </Link>
          </motion.div>
          <h1 className="text-xl font-semibold text-white">Perfil</h1>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Bell className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="px-4 pt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
          >
            <AnimatedCard className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-120px)]">
              <div className="p-6 space-y-6">
                {/* Profile Header */}
                <motion.div
                  className="text-center space-y-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    className="w-20 h-20 mx-auto rounded-full overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Perfil"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <motion.h2
                      className="text-xl font-bold text-gray-900"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      João Silva
                    </motion.h2>
                    <motion.p
                      className="text-gray-500 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      ID: 20030404
                    </motion.p>
                  </div>
                </motion.div>

                {/* Menu Items */}
                <div className="space-y-3">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center space-x-4 p-4 bg-white rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg"
                      >
                        <motion.div
                          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className={`w-5 h-5 ${item.color}`} />
                        </motion.div>
                        <span className="font-medium text-gray-900">{item.label}</span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>

        <BottomNavigation />
      </div>
    </PageTransition>
  )
}
