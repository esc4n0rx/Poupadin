"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const router = useRouter()

  const handleNextStep = () => {
    // Aqui você adicionaria a lógica para enviar o e-mail
    // e então navegar para a próxima página.
    router.push("/verify-token")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Link href="/login">
          <ArrowLeft className="w-6 h-6 text-white" />
        </Link>
        <h1 className="text-xl font-semibold text-white">Esqueci a Senha</h1>
        <div className="w-6" />
      </div>

      {/* Content */}
      <div className="px-4 pt-8">
        <Card className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-120px)]">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Redefinir Senha?</h2>
              <p className="text-gray-600 text-sm">
                Não se preocupe! Digite seu e-mail abaixo que enviaremos um código para você redefinir sua senha.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Digite seu endereço de e-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="exemplo@exemplo.com"
                className="bg-gray-200 border-0 rounded-2xl h-12 text-gray-600"
              />
            </div>

            <Button
              onClick={handleNextStep}
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium"
            >
              Próximo Passo
            </Button>

            <div className="text-center">
              <p className="text-gray-500 text-xs">
                {"Lembrou da senha? "}
                <Link href="/login" className="text-emerald-400">
                  Entrar
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}