"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AnimatedButton } from "@/components/animated-button"
import { AnimatedCard } from "@/components/animated-card"
import { PageTransition } from "@/components/page-transition"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleLogin = () => {
    // Check if user has completed onboarding
    const onboardingComplete = localStorage.getItem("finwise_onboarding_complete")

    if (onboardingComplete === "true") {
      router.push("/dashboard")
    } else {
      router.push("/budget-setup")
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500">
        {/* Header animado */}
        <motion.div
          className="flex items-center justify-between p-4 pt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/">
              <ArrowLeft className="w-6 h-6 text-white" />
            </Link>
          </motion.div>
          <h1 className="text-xl font-semibold text-white">Bem-vindo</h1>
          <div className="w-6" />
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
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">
                      Usuário ou Email
                    </Label>
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <Input
                        id="email"
                        type="email"
                        placeholder="exemplo@exemplo.com"
                        className="bg-gray-200 border-0 rounded-2xl h-12 text-gray-600 transition-all duration-200 focus:bg-white focus:shadow-lg"
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 font-medium">
                      Senha
                    </Label>
                    <motion.div
                      className="relative"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="bg-gray-200 border-0 rounded-2xl h-12 pr-12 text-gray-600 transition-all duration-200 focus:bg-white focus:shadow-lg"
                      />
                      <motion.button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <AnimatedButton
                    onClick={handleLogin}
                    className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium"
                  >
                    Entrar
                  </AnimatedButton>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    href="/forgot-password"
                    className="text-gray-600 text-sm hover:text-emerald-500 transition-colors"
                  >
                    Esqueceu a senha?
                  </Link>
                </motion.div>

                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <AnimatedButton
                    variant="ghost"
                    className="text-gray-700 hover:bg-gray-100 rounded-2xl h-12 text-base font-medium"
                  >
                    Criar Conta
                  </AnimatedButton>
                </motion.div>

                <motion.div
                  className="text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <p className="text-gray-600 text-sm">Use sua Digital para Acessar</p>

                  <div className="text-gray-500 text-xs">ou entre com</div>

                  <div className="flex justify-center space-x-4">
                    <motion.div
                      className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="text-lg text-white">f</span>
                    </motion.div>
                    <motion.div
                      className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.1, backgroundColor: "#ef4444" }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <span className="text-lg text-white">G</span>
                    </motion.div>
                  </div>

                  <p className="text-gray-500 text-xs">
                    {"Não tem uma conta? "}
                    <Link href="/signup" className="text-emerald-400 hover:text-emerald-500 transition-colors">
                      Criar Conta
                    </Link>
                  </p>
                </motion.div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}
