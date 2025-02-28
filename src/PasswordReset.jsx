"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

const PasswordReset = () => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log("Password reset requested for:", email)
    setSubmitted(true)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(19, 19, 19, 0.8)",
      }}
    >
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-6">Password Reset</h2>

          {!submitted ? (
            <>
              <p className="text-center text-gray-600 mb-6">
                Enter your email address and well send you a link to reset your password.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#4182f9] focus:border-[#4182f9]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4182f9] hover:bg-[#2f84d2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4182f9]"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Check your email</h3>
              <p className="mt-2 text-sm text-gray-600">Weve sent a password reset link to {email}</p>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link to="/login" className="font-medium text-[#4182f9] hover:text-[#2f84d2]">
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordReset

