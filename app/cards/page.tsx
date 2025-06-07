"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Bell, CreditCardIcon } from "lucide-react"
import Link from "next/link"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"
import { BottomNavigation } from "@/components/bottom-navigation"

const cards = [
  {
    id: 1,
    type: "VISA",
    balance: "R$ 5.420,00",
    number: "**** **** **** 1234",
    holder: "João Silva",
    expires: "12/25",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    type: "MASTERCARD",
    balance: "R$ 2.180,00",
    number: "**** **** **** 5678",
    holder: "João Silva",
    expires: "08/26",
    gradient: "from-emerald-400 to-teal-500",
  },
]

export default function CardsPage() {
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
          <h1 className="text-xl font-semibold text-white">Meus Cartões</h1>
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
            <AnimatedCard className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-140px)]">
              <div className="p-6 space-y-6">
                {/* Cards List */}
                <div className="space-y-6">
                  {cards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 50, rotateY: -15 }}
                      animate={{ opacity: 1, y: 0, rotateY: 0 }}
                      transition={{
                        delay: 0.3 + index * 0.2,
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      whileHover={{
                        scale: 1.05,
                        rotateY: 5,
                        z: 50,
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="perspective-1000"
                    >
                      <div
                        className={`bg-gradient-to-r ${card.gradient} border-0 rounded-3xl text-white p-6 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300`}
                      >
                        <motion.div
                          className="space-y-6"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.2 }}
                        >
                          {/* Card Header */}
                          <div className="flex justify-between items-start">
                            <div>
                              <motion.p
                                className="text-sm opacity-80"
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 0.8 }}
                                transition={{ delay: 0.6 + index * 0.2 }}
                              >
                                Saldo
                              </motion.p>
                              <motion.p
                                className="text-2xl font-bold"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{
                                  delay: 0.7 + index * 0.2,
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                }}
                              >
                                {card.balance}
                              </motion.p>
                            </div>
                            <motion.div
                              className="text-right"
                              initial={{ x: 20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.8 + index * 0.2 }}
                            >
                              <p className="text-sm opacity-80">{card.type}</p>
                              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                                <CreditCardIcon className="w-8 h-8 mt-1" />
                              </motion.div>
                            </motion.div>
                          </div>

                          {/* Card Number */}
                          <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 + index * 0.2 }}
                          >
                            <motion.p
                              className="text-lg tracking-wider font-mono"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1 + index * 0.2 }}
                            >
                              {card.number}
                            </motion.p>

                            {/* Card Details */}
                            <div className="flex justify-between">
                              <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.1 + index * 0.2 }}
                              >
                                <p className="text-xs opacity-80">PORTADOR</p>
                                <p className="text-sm font-medium">{card.holder}</p>
                              </motion.div>
                              <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1.2 + index * 0.2 }}
                              >
                                <p className="text-xs opacity-80">VALIDADE</p>
                                <p className="text-sm font-medium">{card.expires}</p>
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>

                        {/* Card Chip Animation */}
                        <motion.div
                          className="absolute top-4 left-4 w-8 h-6 bg-yellow-400 rounded opacity-20"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 0.2 }}
                          transition={{
                            delay: 1.3 + index * 0.2,
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                          whileHover={{ opacity: 0.4, scale: 1.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Add New Card Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + cards.length * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-3xl cursor-pointer hover:border-emerald-400 hover:bg-emerald-50 transition-all duration-300"
                >
                  <div className="text-center space-y-2">
                    <motion.div
                      className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto"
                      whileHover={{ rotate: 180, backgroundColor: "#10b981" }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span className="text-2xl text-gray-400" whileHover={{ color: "#ffffff" }}>
                        +
                      </motion.span>
                    </motion.div>
                    <p className="text-gray-600 font-medium">Adicionar Novo Cartão</p>
                    <p className="text-sm text-gray-400">Conecte seus cartões para melhor controle</p>
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
