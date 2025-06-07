"use client"

import { motion } from "framer-motion"
import Image from "next/image" // Importar o componente Image
import Link from "next/link"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"

export default function HomePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500 flex items-center justify-center p-4">
        <AnimatedCard className="w-full max-w-sm bg-gray-50 border-0 rounded-3xl overflow-hidden">
          <div className="p-8 text-center space-y-8">
            {/* Logo com animação */}
            <motion.div
              className="space-y-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
            >
              <motion.div
                className="w-20 h-20 mx-auto bg-emerald-400 rounded-2xl flex items-center justify-center"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {/* Logo substituída aqui */}
                <Image src="/logo.svg" alt="PoupaDin Logo" width={48} height={48} />
              </motion.div>
              <div>
                <motion.h1
                  className="text-2xl font-bold text-gray-900"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  PoupaDin
                </motion.h1>
                <motion.p
                  className="text-sm text-gray-600 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  Gerencie suas finanças de forma inteligente e simples.
                </motion.p>
              </div>
            </motion.div>

            {/* Botões com animação escalonada */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Link href="/login" className="block">
                <AnimatedButton className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium">
                  Entrar
                </AnimatedButton>
              </Link>

              <Link href="/signup" className="block">
                <AnimatedButton
                  variant="ghost"
                  className="w-full text-gray-700 hover:bg-gray-100 rounded-2xl h-12 text-base font-medium"
                >
                  Criar Conta
                </AnimatedButton>
              </Link>

              <Link href="/forgot-password" className="block">
                <AnimatedButton variant="link" className="text-gray-600 text-sm">
                  Esqueceu a senha?
                </AnimatedButton>
              </Link>
            </motion.div>
          </div>
        </AnimatedCard>
      </div>
    </PageTransition>
  )
}