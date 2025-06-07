"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Bell, Car, Utensils, Building } from "lucide-react"
import Link from "next/link"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function AnalysisPage() {
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
          <h1 className="text-xl font-semibold text-white">Análise Rápida</h1>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Bell className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="px-4 pb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex justify-between items-center text-white">
            <motion.div
              className="text-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Car className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-xs opacity-90">Economia</p>
              <p className="text-sm font-semibold">Nas Metas</p>
            </motion.div>

            <motion.div
              className="text-right"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-4 h-4 bg-white/30 rounded"></div>
                <span className="text-sm">Economia da Semana</span>
              </div>
              <motion.p
                className="text-2xl font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 300, damping: 20 }}
              >
                R$ 4.000,00
              </motion.p>
              <div className="flex items-center space-x-2 mt-1">
                <Utensils className="w-4 h-4" />
                <span className="text-sm">Comida Semana Passada</span>
              </div>
              <p className="text-lg font-semibold">-R$ 100,00</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.3 }}
          >
            <AnimatedCard className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-280px)]">
              <div className="p-6 space-y-6">
                {/* Chart Section */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Gastos de Abril</h3>
                    <div className="flex space-x-2">
                      <motion.div className="w-6 h-6 bg-emerald-400 rounded" whileHover={{ scale: 1.1 }}></motion.div>
                      <motion.div className="w-6 h-6 bg-blue-400 rounded" whileHover={{ scale: 1.1 }}></motion.div>
                    </div>
                  </div>

                  {/* Weekly Bar Chart */}
                  <div className="h-32 flex items-end justify-between space-x-4 px-4">
                    {["1ª Semana", "2ª Semana", "3ª Semana", "4ª Semana"].map((week, index) => (
                      <motion.div
                        key={week}
                        className="flex flex-col items-center space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      >
                        <motion.div
                          className="w-8 bg-blue-400 rounded-t"
                          style={{ height: `${[60, 80, 100, 70][index]}px` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${[60, 80, 100, 70][index]}px` }}
                          transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 300, damping: 30 }}
                        ></motion.div>
                        <span className="text-xs text-gray-500">{week}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Expense Categories */}
                <div className="space-y-4">
                  {[
                    {
                      icon: "💰",
                      title: "Salário",
                      date: "14:27 - 30 Abr",
                      type: "Mensal",
                      amount: "R$ 4.000,00",
                      color: "text-gray-900",
                    },
                    {
                      icon: Utensils,
                      title: "Mercado",
                      date: "17:00 - 24 Abr",
                      type: "Despensa",
                      amount: "-R$ 100,00",
                      color: "text-blue-600",
                    },
                    {
                      icon: Building,
                      title: "Aluguel",
                      date: "8:30 - 15 Abr",
                      type: "Moradia",
                      amount: "-R$ 674,40",
                      color: "text-blue-600",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center justify-between p-4 bg-white rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {typeof item.icon === "string" ? (
                            <span className="text-lg">{item.icon}</span>
                          ) : (
                            <item.icon className="w-5 h-5 text-blue-600" />
                          )}
                        </motion.div>
                        <div>
                          <p className="font-semibold text-gray-900">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{item.type}</p>
                        <p className={`font-bold ${item.color}`}>{item.amount}</p>
                      </div>
                    </motion.div>
                  ))}
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
