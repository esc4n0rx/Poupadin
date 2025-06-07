"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, Bell, ArrowUpDown, CreditCard } from "lucide-react"
import Link from "next/link"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedButton } from "@/components/animated-button"
import { PageTransition } from "@/components/page-transition"
import { BottomNavigation } from "@/components/bottom-navigation"

interface BudgetData {
  monthlyIncome: number
  categories: Record<string, number>
  totalBudget: number
  createdAt: string
}

export default function DashboardPage() {
  const [budgetData, setBudgetData] = useState<BudgetData | null>(null)
  const [currentSpent, setCurrentSpent] = useState(1187.4) // Mock data

  useEffect(() => {
    const savedBudget = localStorage.getItem("finwise_budget")
    if (savedBudget) {
      setBudgetData(JSON.parse(savedBudget))
    }
  }, [])

  const remainingBudget = budgetData ? budgetData.totalBudget - currentSpent : 0
  const budgetPercentage = budgetData ? (currentSpent / budgetData.totalBudget) * 100 : 0

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
            <Link href="/budget-setup">
              <ArrowLeft className="w-6 h-6 text-white" />
            </Link>
          </motion.div>
          <h1 className="text-xl font-semibold text-white">Análise</h1>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/notifications">
              <div className="relative">
                <Bell className="w-6 h-6 text-white" />
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 20 }}
                />
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Balance Section */}
        <motion.div
          className="px-4 pb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="text-center text-white space-y-2">
            <motion.p
              className="text-sm opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.3 }}
            >
              Saldo Total
            </motion.p>
            <motion.h2
              className="text-4xl font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 20 }}
            >
              R$ 7.783,00
            </motion.h2>
            {budgetData && (
              <motion.div
                className="flex items-center justify-center space-x-4 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>{Math.round(budgetPercentage)}%</span>
                </div>
                <span>R$ {budgetData.totalBudget.toLocaleString("pt-BR")}</span>
              </motion.div>
            )}
            <motion.p
              className="text-sm opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.6 }}
            >
              {budgetPercentage < 70
                ? `${Math.round(budgetPercentage)}% do seu orçamento está ótimo.`
                : `Atenção: ${Math.round(budgetPercentage)}% do orçamento usado.`}
            </motion.p>
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
                {/* Budget Progress */}
                {budgetData && (
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-semibold text-gray-900">Progresso do Orçamento</h3>
                    <div className="bg-white rounded-2xl p-4 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Gasto este mês</span>
                        <span className="font-semibold">R$ {currentSpent.toLocaleString("pt-BR")}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          className={`h-3 rounded-full ${budgetPercentage > 80 ? "bg-red-500" : budgetPercentage > 60 ? "bg-yellow-500" : "bg-emerald-400"}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(budgetPercentage, 100)}%` }}
                          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Restante</span>
                        <span className={`font-semibold ${remainingBudget < 0 ? "text-red-600" : "text-green-600"}`}>
                          R$ {Math.abs(remainingBudget).toLocaleString("pt-BR")}
                          {remainingBudget < 0 && " (excesso)"}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Time Period Buttons */}
                <motion.div
                  className="flex space-x-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <AnimatedButton className="bg-emerald-400 text-white rounded-full px-4 py-2 text-sm">
                    Diário
                  </AnimatedButton>
                  <AnimatedButton variant="ghost" className="text-gray-600 rounded-full px-4 py-2 text-sm">
                    Semanal
                  </AnimatedButton>
                  <AnimatedButton variant="ghost" className="text-gray-600 rounded-full px-4 py-2 text-sm">
                    Mensal
                  </AnimatedButton>
                  <AnimatedButton variant="ghost" className="text-gray-600 rounded-full px-4 py-2 text-sm">
                    Anual
                  </AnimatedButton>
                </motion.div>

                {/* Chart Section */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">Receitas & Despesas</h3>
                    <div className="flex space-x-2">
                      <motion.div className="w-6 h-6 bg-emerald-400 rounded" whileHover={{ scale: 1.1 }}></motion.div>
                      <motion.div className="w-6 h-6 bg-blue-400 rounded" whileHover={{ scale: 1.1 }}></motion.div>
                    </div>
                  </div>

                  {/* Animated Bar Chart */}
                  <div className="h-40 flex items-end justify-between space-x-2 px-4">
                    {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((day, index) => (
                      <motion.div
                        key={day}
                        className="flex flex-col items-center space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <div className="flex flex-col space-y-1">
                          <motion.div
                            className="w-6 bg-blue-400 rounded-t"
                            style={{ height: `${Math.random() * 80 + 20}px` }}
                            initial={{ height: 0 }}
                            animate={{ height: `${Math.random() * 80 + 20}px` }}
                            transition={{ delay: 0.9 + index * 0.1, type: "spring", stiffness: 300, damping: 30 }}
                          ></motion.div>
                          <motion.div
                            className="w-6 bg-emerald-400 rounded-b"
                            style={{ height: `${Math.random() * 60 + 10}px` }}
                            initial={{ height: 0 }}
                            animate={{ height: `${Math.random() * 60 + 10}px` }}
                            transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 300, damping: 30 }}
                          ></motion.div>
                        </div>
                        <span className="text-xs text-gray-500">{day}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Summary Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <AnimatedCard className="bg-white border-0 rounded-2xl p-4" delay={0.8}>
                    <div className="text-center space-y-2">
                      <motion.div
                        className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mx-auto"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <ArrowUpDown className="w-4 h-4 text-emerald-600" />
                      </motion.div>
                      <p className="text-sm text-gray-600">Receitas</p>
                      <p className="text-lg font-bold text-gray-900">R$ 4.120,00</p>
                    </div>
                  </AnimatedCard>

                  <AnimatedCard className="bg-white border-0 rounded-2xl p-4" delay={0.9}>
                    <div className="text-center space-y-2">
                      <motion.div
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CreditCard className="w-4 h-4 text-blue-600" />
                      </motion.div>
                      <p className="text-sm text-gray-600">Despesas</p>
                      <p className="text-lg font-bold text-blue-600">R$ 1.187,40</p>
                    </div>
                  </AnimatedCard>
                </div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <p className="text-gray-600 font-medium">Minhas Metas</p>
                </motion.div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>

        <BottomNavigation />
      </div>
    </PageTransition>
  )
}
