"use client"

import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { Product } from "@/convex/stripe/products"
import { useAction } from "convex/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface CheckoutButtonProps {
  product: Product
  variant?: "default" | "outline" | "ghost" | "secondary"
  size?: "default" | "sm" | "lg"
  fullWidth?: boolean
}

export function CheckoutButton({
  product,
  variant = "default",
  size = "default",
  fullWidth = false,
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const createCheckoutSession = useAction(api.stripe.stripe_node.createCheckoutSession)

  const handleCheckout = async () => {
    try {
      setIsLoading(true)

      const origin = window.location.origin
      const successUrl = `${origin}/api/stripe/success`
      const cancelUrl = `${origin}/pricing`

      const checkoutUrl = await createCheckoutSession({
        priceId: product.priceId,
        successUrl,
        cancelUrl,
      })

      router.push(checkoutUrl)
    } catch (error) {
      console.error("Error creating checkout session:", error)
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={isLoading}
      variant={variant}
      size={size}
      className={fullWidth ? "w-full" : ""}
    >
      {isLoading ? "Loading..." : `Get ${product.name} - $${(product.price / 100).toFixed(2)}`}
    </Button>
  )
}
