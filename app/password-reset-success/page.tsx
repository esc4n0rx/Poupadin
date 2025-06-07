"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dynamic from "next/dynamic"

// Importar o LottiePlayer dinamicamente, desabilitando SSR
const LottiePlayer = dynamic(() => import("@/components/lottie-player").then(mod => ({ default: mod.LottiePlayer })), {
  ssr: false,
  loading: () => <div className="w-48 h-48 mx-auto animate-pulse bg-gray-200 rounded-lg" />
})

export default function PasswordResetSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-sm bg-gray-50 border-0 rounded-3xl">
        <CardContent className="p-8 text-center space-y-6">
          <LottiePlayer src="/success.lottie" className="w-48 h-48 mx-auto" />

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">Senha Redefinida!</h2>
            <p className="text-gray-600 text-sm">
              Sua senha foi alterada com sucesso. Agora você pode fazer login com sua nova senha.
            </p>
          </div>

          <Link href="/login" className="block">
            <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium">
              Voltar para o Login
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}