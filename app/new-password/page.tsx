"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const handleChangePassword = () => {
    // Lógica de redefinição de senha aqui
    router.push("/password-reset-success")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Link href="/verify-token">
          <ArrowLeft className="w-6 h-6 text-white" />
        </Link>
        <h1 className="text-xl font-semibold text-white">Nova Senha</h1>
        <div className="w-6" />
      </div>

      {/* Content */}
      <div className="px-4 pt-8">
        <Card className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-120px)]">
          <CardContent className="p-6 space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Nova Senha
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-gray-200 border-0 rounded-2xl h-12 pr-12 text-gray-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">
                  Confirme a Nova Senha
                </Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="bg-gray-200 border-0 rounded-2xl h-12 pr-12 text-gray-600"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            <Button
              onClick={handleChangePassword}
              className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium"
            >
              Alterar Senha
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}