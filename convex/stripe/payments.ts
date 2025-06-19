// import { v } from "convex/values"
// import { internal } from "../_generated/api"
// import { internalMutation, internalQuery, query } from "../_generated/server"
// import { getProductById } from "./products"
// import { Doc } from "../_generated/dataModel"

// export const getUserProductDetails = query({
//   args: {},
//   returns: v.object({
//     hasPaid: v.boolean(),
//     productId: v.optional(v.string()),
//     productName: v.optional(v.string()),
//     productDescription: v.optional(v.string()),
//     productFeatures: v.optional(v.array(v.string())),
//     remainingCredits: v.optional(v.number()),
//   }),
//   handler: async (
//     ctx,
//   ): Promise<{
//     hasPaid: boolean
//     productId: string | undefined
//     productName: string | undefined
//     productDescription: string | undefined
//     productFeatures: string[] | undefined
//     remainingCredits: number | undefined
//   }> => {
//     const user = await ctx.runQuery(internal.users.getUserInternal)

//     if (user.hasPaid && user.productId) {
//       const product = getProductById(user.productId)

//       return {
//         hasPaid: true,
//         productId: user.productId,
//         productName: product?.name,
//         productDescription: product?.description,
//         productFeatures: product?.features,
//         remainingCredits: user.remainingCredits,
//       }
//     }

//     return {
//       hasPaid: false,
//       productId: undefined,
//       productName: undefined,
//       productDescription: undefined,
//       productFeatures: undefined,
//       remainingCredits: undefined,
//     }
//   },
// })

// export const processSuccessfulPayment = internalMutation({
//   args: {
//     userDocumentId: v.id("users"),
//     paymentIntentId: v.string(),
//     productId: v.string(),
//   },
//   returns: v.null(),
//   handler: async (ctx, args) => {
//     const existingProcessingRecord = await ctx.runQuery(internal.stripe.payments.getProcessedPaymentByIntentId, {
//       paymentIntentId: args.paymentIntentId,
//     })

//     if (existingProcessingRecord) {
//       return null
//     }

//     const product = getProductById(args.productId)
//     if (!product) {
//       console.error(`Product not found for ID ${args.productId} in payment intent ${args.paymentIntentId}`)
//       return null
//     }

//     await ctx.runMutation(internal.stripe.payments._updateUserAndRecordPayment, {
//       userDocumentId: args.userDocumentId,
//       productId: args.productId,
//       credits: product.credits,
//       paymentIntentId: args.paymentIntentId,
//     })

//     return null
//   },
// })

// export const getProcessedPaymentByIntentId = internalQuery({
//   args: { paymentIntentId: v.string() },
//   handler: async (ctx, args): Promise<Doc<"processedPayments"> | null> => {
//     return await ctx.db
//       .query("processedPayments")
//       .withIndex("by_paymentIntentId", (q) => q.eq("paymentIntentId", args.paymentIntentId))
//       .unique()
//   },
// })

// export const updateUserPlan = internalMutation({
//   args: {
//     userDocumentId: v.id("users"),
//     productId: v.string(),
//     credits: v.number(),
//   },
//   handler: async (ctx, args) => {
//     const user = await ctx.db.get(args.userDocumentId)
//     if (!user) {
//       throw new Error(`User not found in updateUserPlan: ${args.userDocumentId}`)
//     }
//     const currentCredits = user.remainingCredits ?? 0
//     const newCreditTotal = currentCredits + args.credits

//     await ctx.db.patch(args.userDocumentId, {
//       hasPaid: true,
//       productId: args.productId,
//       remainingCredits: newCreditTotal,
//     })
//   },
// })

// export const addProcessedPayment = internalMutation({
//   args: {
//     userDocumentId: v.id("users"),
//     paymentIntentId: v.string(),
//     productId: v.string(),
//     creditsGranted: v.number(),
//   },
//   handler: async (ctx, args) => {
//     const user = await ctx.db.get(args.userDocumentId)
//     if (!user) {
//       throw new Error(`User not found for payment: ${args.userDocumentId}`)
//     }

//     await ctx.db.insert("processedPayments", {
//       userDocumentId: args.userDocumentId,
//       paymentIntentId: args.paymentIntentId,
//       productId: args.productId,
//       creditsGranted: args.creditsGranted,
//     })
//   },
// })

// export const updateRemainingCredits = internalMutation({
//   args: {
//     userDocumentId: v.id("users"),
//     change: v.number(),
//   },
//   handler: async (ctx, args) => {
//     const user = await ctx.db.get(args.userDocumentId)
//     if (!user) {
//       throw new Error(`User not found in updateRemainingCredits: ${args.userDocumentId}`)
//     }
//     const currentCredits = user.remainingCredits ?? 0
//     const newCreditTotal = Math.max(0, currentCredits + args.change)

//     await ctx.db.patch(args.userDocumentId, {
//       remainingCredits: newCreditTotal,
//     })
//   },
// })

// export const updateStripeCustomerId = internalMutation({
//   args: {
//     userDocumentId: v.id("users"),
//     stripeCustomerId: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const user = await ctx.db.get(args.userDocumentId)
//     if (!user) {
//       throw new Error(`User not found in updateStripeCustomerId: ${args.userDocumentId}`)
//     }

//     await ctx.db.patch(args.userDocumentId, {
//       stripeCustomerId: args.stripeCustomerId,
//     })
//   },
// })

// export const _updateUserAndRecordPayment = internalMutation({
//   args: {
//     userDocumentId: v.id("users"),
//     productId: v.string(),
//     credits: v.number(),
//     paymentIntentId: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const user = await ctx.db.get(args.userDocumentId)
//     if (!user) {
//       throw new Error(`User not found in _updateUserAndRecordPayment: ${args.userDocumentId}`)
//     }
//     const currentCredits = user.remainingCredits ?? 0
//     const newCreditTotal = currentCredits + args.credits

//     await ctx.db.patch(args.userDocumentId, {
//       hasPaid: true,
//       productId: args.productId,
//       remainingCredits: newCreditTotal,
//     })

//     await ctx.db.insert("processedPayments", {
//       userDocumentId: args.userDocumentId,
//       paymentIntentId: args.paymentIntentId,
//       productId: args.productId,
//       creditsGranted: args.credits,
//     })
//   },
// })
