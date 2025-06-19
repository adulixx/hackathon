import { SignIn } from "@clerk/nextjs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your account",
}

export default function SignInPage() {
  return (
    <div className="flex flex-grow justify-center items-center py-4">
      <SignIn fallbackRedirectUrl="/" signUpFallbackRedirectUrl="/" />
    </div>
  )
}
