"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Link href="/">
          <ArrowLeft className="w-6 h-6 text-white" />
        </Link>
        <h1 className="text-xl font-semibold text-white">Create Account</h1>
        <div className="w-6" />
      </div>

      {/* Content */}
      <div className="px-4 pt-8">
        <Card className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-120px)]">
          <CardContent className="p-6 space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullname" className="text-gray-700 font-medium">
                  Full Name
                </Label>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="example@example.com"
                  className="bg-gray-200 border-0 rounded-2xl h-12 text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  className="bg-gray-200 border-0 rounded-2xl h-12 text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-gray-700 font-medium">
                  Mobile Number
                </Label>
                <Input
                  id="mobile"
                  type="tel"
                  placeholder="+123 456 789"
                  className="bg-gray-200 border-0 rounded-2xl h-12 text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dob" className="text-gray-700 font-medium">
                  Date Of Birth
                </Label>
                <Input
                  id="dob"
                  type="text"
                  placeholder="DD / MM / YYYY"
                  className="bg-gray-200 border-0 rounded-2xl h-12 text-gray-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
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
                  Confirm Password
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

            <div className="text-center text-xs text-gray-500 py-2">
              By continuing, you agree to
              <br />
              Terms of Use and Privacy Policy.
            </div>

            <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium">
              Sign Up
            </Button>

            <div className="text-center">
              <p className="text-gray-500 text-xs">
                Already have an account?{" "}
                <Link href="/login" className="text-emerald-400">
                  Log In
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
