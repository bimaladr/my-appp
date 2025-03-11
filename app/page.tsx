"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function HomePage() {

  const { data: session } = useSession()

  return (

    <div className="container">

      <div className="content">

        {!session && (

          <>

            <h1 className="text-2xl font-bold mb-4">Welcome to Our App</h1>

            <p className="message">Please sign in to continue.</p>

            <button className="sign-in-btn" onClick={() => signIn("google")}>

              Sign in with Google

            </button>

          </>

        )}

        {session && (

          <>

            <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>

            <p className="welcome-message">Hello, {session.user?.name}!</p>

            <button className="sign-out-btn" onClick={() => signOut()}>

              Sign out

            </button>

          </>

        )}

      </div>

    </div>

  )}