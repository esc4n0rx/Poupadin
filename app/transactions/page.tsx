"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Bell, DollarSign, ShoppingBag, HomeIcon, Car, Utensils } from "lucide-react"
import Link from "next/link"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"
import { BottomNavigation } from "@/components/bottom-navigation"

const transactions = {
  april: [
    {
      icon: DollarSign,
      title: "Salário",
      date: "14:27 - 30 Abr",
      category: "Mensal",
      amount: "R$ 4.000,00",
      type: "income",
    },
    {
      icon: ShoppingBag,
      title: "Mercado",
      date: "17:00 - 24 Abr",
      category: "Despensa",
      amount: "-R$ 100,00",
      type: "expense",
    },
    {
      icon: HomeIcon,
      title: "Aluguel",
      date: "8:30 - 15 Abr",
      category: "Moradia",
      amount: "-R$ 674,40",
      type: "expense",
    },
    {
      icon: Car,
      title: "Transporte",
      date: "9:30 - 8 Abr",
      category: "Combustível",
      amount: "-R$ 4,13",
      type: "expense",
    },
  ],
  march: [
    {
      icon: Utensils,
      title: "Comida",
      date: "18:30 - 31 Mar",
      category: "Jantar",
      amount: "-R$ 70,40",
      type: "expense",
    },
  ],
}

export default function TransactionsPage() {
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
          <h1 className="text-xl font-semibold text-white">Transações</h1>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Bell className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>

        {/* Content */}
        <div className="px-4 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
          >
            <AnimatedCard className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-140px)]">
              <div className="p-6 space-y-6">
                {/* Balance Summary Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 30 }}
                >
                  <AnimatedCard className="bg-white border-0 rounded-2xl p-6 space-y-4">
                    <motion.div
                      className="text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <p className="text-sm text-gray-600 mb-1">Saldo Total</p>
                      <motion.h2
                        className="text-3xl font-bold text-gray-900"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, type: "spring", stiffness: 300, damping: 20 }}
                      >
                        R$ 7.783,00
                      </motion.h2>
                    </motion.div>

                    <motion.div
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                          <span className="text-xs text-gray-600">Saldo Total</span>
                        </div>
                        <p className="font-bold text-gray-900">R$ 7.783,00</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                          <span className="text-xs text-gray-600">Total Gastos</span>
                        </div>
                        <p className="font-bold text-blue-600">R$ 1.187,40</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">30%</span>
                        <span className="text-gray-600">R$ 20.000,00</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className="bg-emerald-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: "30%" }}
                          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                      <p className="text-xs text-gray-600 text-center">30% dos seus gastos estão ótimos.</p>
                    </motion.div>
                  </AnimatedCard>
                </motion.div>

                {/* April Transactions */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.h3
                    className="text-lg font-semibold text-gray-900"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    Abril
                  </motion.h3>
                  <div className="space-y-3">
                    {transactions.april.map((transaction, index) => {
                      const Icon = transaction.icon
                      return (
                        <motion.div
                          key={`april-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-between p-4 bg-white rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-6 h-6 text-blue-600" />
                            </motion.div>
                            <div>
                              <p className="font-semibold text-gray-900">{transaction.title}</p>
                              <p className="text-sm text-gray-500">{transaction.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">{transaction.category}</p>
                            <p
                              className={`font-bold ${
                                transaction.type === "income" ? "text-emerald-600" : "text-blue-600"
                              }`}
                            >
                              {transaction.amount}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>

                {/* March Transactions */}
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  <motion.h3
                    className="text-lg font-semibold text-gray-900"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Março
                  </motion.h3>
                  <div className="space-y-3">
                    {transactions.march.map((transaction, index) => {
                      const Icon = transaction.icon
                      return (
                        <motion.div
                          key={`march-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.6 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-between p-4 bg-white rounded-2xl cursor-pointer transition-all duration-200 hover:shadow-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-6 h-6 text-blue-600" />
                            </motion.div>
                            <div>
                              <p className="font-semibold text-gray-900">{transaction.title}</p>
                              <p className="text-sm text-gray-500">{transaction.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">{transaction.category}</p>
                            <p
                              className={`font-bold ${
                                transaction.type === "income" ? "text-emerald-600" : "text-blue-600"
                              }`}
                            >
                              {transaction.amount}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
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
