import { Link } from "react-router-dom"

const ConfirmEmail = () => {
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
        <div className="px-6 py-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Confirm Email</h2>

          <div className="mb-6">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
              <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-gray-600">
              A confirmation email has been sent to your email address. Please check your inbox and click on the
              confirmation link to activate your account.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-500">Didnt receive the email? Check your spam folder or</p>
            <button className="mt-2 text-[#4182f9] hover:text-[#2f84d2] font-medium">Resend confirmation email</button>
          </div>

          <div className="mt-6">
            <Link
              to="/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4182f9] hover:bg-[#2f84d2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4182f9]"
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmEmail

