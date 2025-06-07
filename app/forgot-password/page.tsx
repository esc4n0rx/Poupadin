"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 to-emerald-500">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pt-12">
        <Link href="/login">
          <ArrowLeft className="w-6 h-6 text-white" />
        </Link>
        <h1 className="text-xl font-semibold text-white">Forgot Password</h1>
        <div className="w-6" />
      </div>

      {/* Content */}
      <div className="px-4 pt-8">
        <Card className="w-full bg-gray-50 border-0 rounded-t-3xl min-h-[calc(100vh-120px)]">
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Reset Password?</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Enter Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
                className="bg-gray-200 border-0 rounded-2xl h-12 text-gray-600"
              />
            </div>

            <Button className="w-full bg-emerald-400 hover:bg-emerald-500 text-white rounded-2xl h-12 text-base font-medium">
              Next Step
            </Button>

            <div className="text-center space-y-4 pt-8">
              <Button
                variant="ghost"
                className="text-gray-700 hover:bg-gray-100 rounded-2xl h-12 text-base font-medium"
              >
                Sign Up
              </Button>

              <div className="text-gray-500 text-xs">or sign up with</div>

              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-lg">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-lg">G</span>
                </div>
              </div>

              <p className="text-gray-500 text-xs">
                {"Don't have an account? "}
                <Link href="/signup" className="text-emerald-400">
                  Sign Up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
