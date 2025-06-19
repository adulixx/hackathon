"use client"

import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"

export default function SuccessPage() {
  const userData = useQuery(api.users.getUser)

  if (userData === undefined) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 animate-spin text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <h1 className="mt-4 text-2xl font-semibold">Processing your payment</h1>
          <p className="mt-2 text-muted-foreground">
            Verifying your purchase details. You will be redirected shortly...
          </p>
        </div>
      </div>
    )
  }

  if (!userData?.hasPaid || !userData?.remainingCredits || userData?.remainingCredits <= 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 animate-spin text-primary"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <h1 className="mt-4 text-2xl font-semibold">Finalizing your purchase...</h1>
          <p className="mt-2 text-muted-foreground">Waiting for final confirmation. Please wait a moment.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mt-4 text-2xl font-semibold">Payment Successful!</h1>
        <p className="mt-2 text-muted-foreground">Redirecting you now...</p>
      </div>
    </div>
  )
}
