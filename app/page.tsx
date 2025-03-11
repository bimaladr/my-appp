"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function HomePage() {
  const { data: session, status } = useSession()

  // Check if session is loading
  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        <div className="text-white text-2xl font-semibold">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg w-full">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Our App</h1>
          <p className="text-lg text-gray-600 mb-8">Please sign in to continue or explore our services.</p>

          {/* If not signed in */}
          {!session ? (
            <div>
              <p className="text-gray-500 mb-4">Sign in to access personalized features and content.</p>
              <button
                className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                onClick={() => signIn("google")}
              >
                Sign in with Google
              </button>
            </div>
          ) : (
            <div>
              {/* If signed in */}
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome Back, {session.user?.name}!</h2>
              <p className="text-gray-600 mb-8">You are now logged in and ready to explore the app.</p>
              <button
                className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
