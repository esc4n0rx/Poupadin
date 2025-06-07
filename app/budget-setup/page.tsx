"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, Plus, Minus } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const budgetCategories = [
  { id: "housing", name: "Moradia", icon: "🏠", color: "bg-blue-500", defaultAmount: 2000 },
  { id: "food", name: "Alimentação", icon: "🍽️", color: "bg-green-500", defaultAmount: 800 },
  { id: "transport", name: "Transporte", icon: "🚗", color: "bg-yellow-500", defaultAmount: 400 },
  { id: "entertainment", name: "Entretenimento", icon: "🎬", color: "bg-purple-500", defaultAmount: 300 },
  { id: "health", name: "Saúde", icon: "⚕️", color: "bg-red-500", defaultAmount: 500 },
  { id: "education", name: "Educação", icon: "📚", color: "bg-indigo-500", defaultAmount: 200 },
  { id: "shopping", name: "Compras", icon: "🛍️", color: "bg-pink-500", defaultAmount: 600 },
  { id: "savings", name: "Poupança", icon: "💰", color: "bg-emerald-500", defaultAmount: 1000 },
]

export default function BudgetSetupPage() {
  const [step, setStep] = useState(1)
  const [monthlyIncome, setMonthlyIncome] = useState("")
  const [budgetAmounts, setBudgetAmounts] = useState<Record<string, number>>({})
  const [totalBudget, setTotalBudget] = useState(0)
  const router = useRouter()

  useEffect(() => {
    // Initialize with default amounts
    const defaultBudget = budgetCategories.reduce(
      (acc, category) => {
        acc[category.id] = category.defaultAmount
        return acc
      },
      {} as Record<string, number>,
    )
    setBudgetAmounts(defaultBudget)
  }, [])

  useEffect(() => {
    const total = Object.values(budgetAmounts).reduce((sum, amount) => sum + amount, 0)
    setTotalBudget(total)
  }, [budgetAmounts])

  const updateBudgetAmount = (categoryId: string, amount: number) => {
    setBudgetAmounts((prev) => ({
      ...prev,
      [categoryId]: Math.max(0, amount),
    }))
  }

  const handleFinishSetup = () => {
    const budgetData = {
      monthlyIncome: Number.parseFloat(monthlyIncome),
      categories: budgetAmounts,
      totalBudget,
      createdAt: new Date().toISOString(),
    }

    localStorage.setItem("finwise_budget", JSON.stringify(budgetData))
    localStorage.setItem("finwise_onboarding_complete", "true")

    router.push("/dashboard")
  }

  const remainingBudget = Number.parseFloat(monthlyIncome) - totalBudget
  const isOverBudget = remainingBudget < 0

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between p-4 pt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)}>
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
            ) : (
              <Link href="/login">
                <ArrowLeft className="w-6 h-6 text-white" />
              </Link>
            )}
          </motion.div>
          <h1 className="text-xl font-semibold text-white">
            {step === 1 ? "Configurar Orçamento" : "Definir Categorias"}
          </h1>
          <div className="w-6" />
        </motion.div>

        {/* Progress Bar */}
        <motion.div className="px-4 pb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div
              className="bg-white h-2 rounded-full"
              initial={{ width: "50%" }}
              animate={{ width: step === 1 ? "50%" : "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <p className="text-white text-sm mt-2 text-center">Passo {step} de 2</p>
        </motion.div>

        {/* Content */}
        <div className="px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
          >
            <AnimatedCard className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-200px)]">
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <motion.div
                        className="text-center space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.div
                          className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <span className="text-3xl">💰</span>
                        </motion.div>
                        <h2 className="text-2xl font-bold text-gray-900">Qual sua renda mensal?</h2>
                        <p className="text-gray-600">
                          Vamos começar definindo sua renda para criar um orçamento personalizado
                        </p>
                      </motion.div>

                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <Label htmlFor="income" className="text-gray-700 font-medium">
                          Renda Mensal (R$)
                        </Label>
                        <motion.div
                          whileFocus={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                          <Input
                            id="income"
                            type="number"
                            placeholder="5.000,00"
                            value={monthlyIncome}
                            onChange={(e) => setMonthlyIncome(e.target.value)}
                            className="bg-gray-200 border-0 rounded-2xl h-14 text-lg text-center font-semibold transition-all duration-200 focus:bg-white focus:shadow-lg"
                          />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <AnimatedButton
                          onClick={() => setStep(2)}
                          disabled={!monthlyIncome || Number.parseFloat(monthlyIncome) <= 0}
                          className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Continuar
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </AnimatedButton>
                      </motion.div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <motion.div
                        className="text-center space-y-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h2 className="text-xl font-bold text-gray-900">Distribua seu orçamento</h2>
                        <p className="text-gray-600 text-sm">Defina quanto deseja gastar em cada categoria</p>
                      </motion.div>

                      {/* Budget Summary */}
                      <motion.div
                        className="bg-white rounded-2xl p-4 space-y-2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Renda Mensal:</span>
                          <span className="font-bold text-emerald-600">
                            R$ {Number.parseFloat(monthlyIncome).toLocaleString("pt-BR")}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total Orçamento:</span>
                          <span className="font-bold text-blue-600">R$ {totalBudget.toLocaleString("pt-BR")}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Restante:</span>
                          <span className={`font-bold ${isOverBudget ? "text-red-600" : "text-green-600"}`}>
                            R$ {Math.abs(remainingBudget).toLocaleString("pt-BR")}
                            {isOverBudget && " (excesso)"}
                          </span>
                        </div>
                      </motion.div>

                      {/* Categories */}
                      <div className="space-y-3 max-h-96 overflow-y-auto">
                        {budgetCategories.map((category, index) => (
                          <motion.div
                            key={category.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.05 }}
                            className="bg-white rounded-2xl p-4"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <motion.div
                                  className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                  <span className="text-lg">{category.icon}</span>
                                </motion.div>
                                <span className="font-medium text-gray-900">{category.name}</span>
                              </div>

                              <div className="flex items-center space-x-2">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateBudgetAmount(category.id, budgetAmounts[category.id] - 50)}
                                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                                >
                                  <Minus className="w-4 h-4 text-gray-600" />
                                </motion.button>

                                <div className="w-20 text-center">
                                  <span className="text-sm font-bold text-gray-900">
                                    R$ {budgetAmounts[category.id]}
                                  </span>
                                </div>

                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={() => updateBudgetAmount(category.id, budgetAmounts[category.id] + 50)}
                                  className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"
                                >
                                  <Plus className="w-4 h-4 text-gray-600" />
                                </motion.button>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <AnimatedButton
                          onClick={handleFinishSetup}
                          className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium"
                        >
                          Finalizar Configuração
                          <Check className="w-5 h-5 ml-2" />
                        </AnimatedButton>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
