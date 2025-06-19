import { Product } from "@/convex/stripe/products"
import { CheckIcon } from "lucide-react"
import { CheckoutButton } from "./checkout-button"

interface PricingCardProps {
  product: Product
  isPopular?: boolean
}

export function PricingCard({ product, isPopular = false }: PricingCardProps) {
  return (
    <div className={`border p-8 shadow-xs ${isPopular ? "ring-2 ring-primary" : ""}`}>
      {isPopular && (
        <div className="absolute -top-5 left-0 right-0 mx-auto w-32  bg-primary px-3 py-1 text-center text-sm font-medium text-primary-foreground">
          Most Popular
        </div>
      )}

      <div className="relative">
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="mt-2 text-muted-foreground">{product.description}</p>

        <div className="mt-6">
          <span className="text-4xl font-bold">${(product.price / 100).toFixed(2)}</span>
          <span className="text-muted-foreground"> one-time payment</span>
        </div>

        <div className="mt-6">
          <CheckoutButton product={product} fullWidth={true} size="lg" />
        </div>

        <ul className="mt-8 space-y-3">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckIcon className="mr-2 h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
