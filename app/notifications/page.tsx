"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Bell, AlertTriangle, TrendingUp, Calendar, CreditCard } from "lucide-react"
import Link from "next/link"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"

const notifications = [
  {
    id: 1,
    type: "warning",
    icon: AlertTriangle,
    title: "Orçamento de Alimentação",
    message: "Você já gastou 85% do seu orçamento de alimentação este mês",
    time: "2 min atrás",
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    unread: true,
  },
  {
    id: 2,
    type: "success",
    icon: TrendingUp,
    title: "Meta de Poupança",
    message: "Parabéns! Você atingiu sua meta de poupança mensal",
    time: "1 hora atrás",
    color: "text-green-600",
    bgColor: "bg-green-100",
    unread: true,
  },
  {
    id: 3,
    type: "reminder",
    icon: Calendar,
    title: "Vencimento de Conta",
    message: "Sua conta de energia vence em 3 dias",
    time: "3 horas atrás",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    unread: false,
  },
  {
    id: 4,
    type: "info",
    icon: CreditCard,
    title: "Fatura do Cartão",
    message: "Sua fatura do cartão **** 1234 está disponível",
    time: "1 dia atrás",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    unread: false,
  },
  {
    id: 5,
    type: "warning",
    icon: AlertTriangle,
    title: "Gasto Elevado",
    message: "Seus gastos com transporte estão 20% acima da média",
    time: "2 dias atrás",
    color: "text-red-600",
    bgColor: "bg-red-100",
    unread: false,
  },
]

export default function NotificationsPage() {
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
            <Link href="/dashboard">
              <ArrowLeft className="w-6 h-6 text-white" />
            </Link>
          </motion.div>
          <h1 className="text-xl font-semibold text-white">Notificações</h1>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 h-6 flex items-center justify-center"
          >
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
              <div className="p-6 space-y-4">
                {/* Header */}
                <motion.div
                  className="flex items-center justify-between"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-lg font-semibold text-gray-900">Recentes</h2>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-emerald-600 text-sm font-medium"
                  >
                    Marcar todas como lidas
                  </motion.button>
                </motion.div>

                {/* Notifications List */}
                <div className="space-y-3">
                  {notifications.map((notification, index) => {
                    const Icon = notification.icon
                    return (
                      <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative bg-white rounded-2xl p-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                          notification.unread ? "border-l-4 border-emerald-400" : ""
                        }`}
                      >
                        {/* Unread indicator */}
                        {notification.unread && (
                          <motion.div
                            className="absolute top-2 right-2 w-3 h-3 bg-emerald-400 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 400, damping: 20 }}
                          />
                        )}

                        <div className="flex items-start space-x-3">
                          <motion.div
                            className={`w-10 h-10 ${notification.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className={`w-5 h-5 ${notification.color}`} />
                          </motion.div>

                          <div className="flex-1 min-w-0">
                            <motion.h3
                              className="font-semibold text-gray-900 text-sm"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                            >
                              {notification.title}
                            </motion.h3>
                            <motion.p
                              className="text-gray-600 text-sm mt-1 leading-relaxed"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              {notification.message}
                            </motion.p>
                            <motion.p
                              className="text-gray-400 text-xs mt-2"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                            >
                              {notification.time}
                            </motion.p>
                          </div>
                        </div>

                        {/* Hover effect overlay */}
                        <motion.div
                          className="absolute inset-0 bg-emerald-50 rounded-2xl opacity-0"
                          whileHover={{ opacity: 0.5 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    )
                  })}
                </div>

                {/* Empty state for older notifications */}
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Bell className="w-8 h-8 text-gray-400" />
                  </motion.div>
                  <p className="text-gray-500 text-sm">Você está em dia com suas notificações!</p>
                </motion.div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
