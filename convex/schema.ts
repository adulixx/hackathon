import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export const INTERVALS = {
  MONTH: "month",
  YEAR: "year",
} as const

export default defineSchema({
  users: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    clerkUserId: v.string(),
    stripeCustomerId: v.optional(v.string()),
    hasPaid: v.optional(v.boolean()),
    productId: v.optional(v.string()),
    remainingCredits: v.optional(v.number()),
  })
    .index("by_clerkUserId", ["clerkUserId"])
    .index("by_stripe_customer_id", ["stripeCustomerId"]),
  processedPayments: defineTable({
    userDocumentId: v.id("users"),
    paymentIntentId: v.string(),
    productId: v.string(),
    creditsGranted: v.number(),
  })
    .index("by_paymentIntentId", ["paymentIntentId"])
    .index("by_userDocumentId", ["userDocumentId"]),
})
