"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function VerifyTokenPage() {
  const [token, setToken] = useState("")
  const router = useRouter()

  const handleVerifyToken = () => {
    // Lógica para verificar o token aqui.
    // Se o token for válido, navega para a redefinição de senha.
    if (token.length === 6) {
      router.push("/new-password")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Link href="/forgot-password">
          <ArrowLeft className="w-6 h-6 text-white" />
        </Link>
        <h1 className="text-xl font-semibold text-white">Verificar Código</h1>
        <div className="w-6" />
      </div>

      {/* Content */}
      <div className="px-4 pt-8">
        <Card className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-120px)]">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4 text-center">
              <h2 className="text-xl font-semibold text-gray-900">Insira o Código</h2>
              <p className="text-gray-600 text-sm">
                Enviamos um código de 6 dígitos para o seu e-mail. Por favor, insira-o abaixo para continuar.
              </p>
            </div>

            <div className="space-y-4 flex flex-col items-center">
              <Label htmlFor="token" className="text-gray-700 font-medium sr-only">
                Código de Verificação
              </Label>
              <InputOTP
                maxLength={6}
                value={token}
                onChange={(value) => setToken(value)}
                onComplete={handleVerifyToken}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>

            <Button
              onClick={handleVerifyToken}
              disabled={token.length < 6}
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium"
            >
              Verificar Código
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}