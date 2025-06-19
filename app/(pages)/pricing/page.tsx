"use client"

import { products } from "@/convex/stripe/products"
import { PricingCard } from "./pricing-card"

export default function PricingPage() {
  return (
    <div className="mx-auto py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that&apos;s right for you. All plans include lifetime access with no recurring fees.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {products.map((product, index) => (
          <PricingCard key={product.id} product={product} isPopular={index === 1} />
        ))}
      </div>

      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <div>
            <h3 className="text-lg font-medium mb-2">What does &ldquo;lifetime access&rdquo; mean?</h3>
            <p className="text-muted-foreground">
              When you purchase a plan, you receive permanent access to the features included in that plan, with no
              additional payments required.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Can I upgrade later?</h3>
            <p className="text-muted-foreground">
              Yes! If you decide to upgrade, you can pay the difference to access the higher tier features.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Is there a refund policy?</h3>
            <p className="text-muted-foreground">
              We offer a 14-day money-back guarantee. If you&apos;re not satisfied, contact our support team for a full
              refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
