import { SignUp } from "@clerk/nextjs"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Get started with Vibe Template",
}

export default function SignUpPage() {
  return (
    <div className="flex flex-grow justify-center items-center py-4">
      <SignUp
        fallbackRedirectUrl="/"
        signInFallbackRedirectUrl="/"
        appearance={{
          variables: {
            colorBackground: "#0F0F0F",
          },
        }}
      />
    </div>
  )
}
