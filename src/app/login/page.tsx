"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { setCookie } from 'cookies-next'
import LockIllustration from "./lock-illustration"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // This is not a secure way to handle passwords, but this is supposed to be a small barrier for potential portfolio viewers.
    if (password === "unlock") {
      setCookie("authenticated", "true", { maxAge: 60 * 60 * 24 * 7 }) // 1 week
      router.push("/")
    } else {
      // Password is incorrect, show error
      setError("Incorrect password. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md flex flex-col items-center">
        {/* Lock Illustration */}
        <div className="mb-8">
          <LockIllustration />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2 text-center">Password Protected</h1>
        <p className="text-gray-600 mb-8 text-center">Please enter the password to access my portfolio.</p>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              required
            />
            {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-full transition-colors shadow-[0px_4px_0px_0px_#047857]"
          >
            ACCESS PORTFOLIO
          </button>
        </form>

        {/* Help Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-1">Having trouble accessing my portfolio?</p>
          <Link
            href="https://www.linkedin.com/in/elizabeth-mayorga/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            Reach out to me on LinkedIn!
          </Link>
        </div>
      </div>
    </div>
  )
}
