// // convex/stripeNode.ts
// "use node"

// import { v } from "convex/values"
// import Stripe from "stripe"
// import { internal } from "../_generated/api"
// import { Id } from "../_generated/dataModel"
// import { action, internalAction } from "../_generated/server"
// import { getProductByPriceId } from "./products"

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
//   apiVersion: "2025-05-28.basil",
// })

// export const createStripeCustomer = internalAction({
//   args: {
//     userDocumentId: v.id("users"),
//     email: v.string(),
//   },
//   handler: async (ctx, args) => {
//     const customer = await stripe.customers.create({
//       email: args.email,
//       metadata: {
//         userDocumentId: args.userDocumentId,
//       },
//     })

//     await ctx.runMutation(internal.stripe.payments.updateStripeCustomerId, {
//       userDocumentId: args.userDocumentId,
//       stripeCustomerId: customer.id,
//     })

//     return customer.id
//   },
// })

// export const createCheckoutSession = action({
//   args: {
//     priceId: v.string(),
//     successUrl: v.string(),
//     cancelUrl: v.string(),
//   },
//   handler: async (ctx, args): Promise<string> => {
//     const user = await ctx.runQuery(internal.users.getUserInternal)
//     let customerId = user.stripeCustomerId

//     if (!customerId) {
//       customerId = await ctx.runAction(internal.stripe.stripe_node.createStripeCustomer, {
//         userDocumentId: user._id,
//         email: user.email,
//       })
//     }

//     const product = getProductByPriceId(args.priceId)
//     if (!product) {
//       throw new Error(`Invalid price ID: ${args.priceId}`)
//     }

//     const session = await stripe.checkout.sessions.create({
//       customer: customerId,
//       payment_method_types: ["card"],
//       line_items: [
//         {
//           price: args.priceId,
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: args.successUrl,
//       cancel_url: args.cancelUrl,
//       payment_intent_data: {
//         metadata: {
//           userDocumentId: user._id,
//           productId: product.id,
//         },
//       },
//     })

//     if (!session.url) {
//       throw new Error("Failed to create checkout session")
//     }

//     return session.url
//   },
// })

// export const handleWebhookEvent = action({
//   args: {
//     body: v.string(),
//     signature: v.string(),
//   },
//   handler: async (ctx, args): Promise<{ success: boolean }> => {
//     try {
//       const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
//       if (!webhookSecret) {
//         throw new Error("Missing STRIPE_WEBHOOK_SECRET environment variable")
//       }

//       const event = stripe.webhooks.constructEvent(args.body, args.signature, webhookSecret)

//       if (event.type === "payment_intent.succeeded") {
//         const pi = event.data.object as Stripe.PaymentIntent

//         const userDocumentIdStr = pi.metadata.userDocumentId
//         const productId = pi.metadata.productId
//         const paymentIntentId = pi.id

//         if (!userDocumentIdStr || !productId) {
//           console.error(`Missing userDocumentId or productId in metadata for payment_intent ${paymentIntentId}`)
//           return { success: true }
//         }

//         const userDocumentId = userDocumentIdStr as Id<"users">

//         await ctx.runMutation(internal.stripe.payments.processSuccessfulPayment, {
//           userDocumentId: userDocumentId,
//           paymentIntentId: paymentIntentId,
//           productId: productId,
//         })
//       } else {
//         // Optionally handle other event types
//       }

//       return { success: true }
//     } catch (error: any) {
//       console.error("Error processing Stripe webhook:", error.message)
//       if (error instanceof Stripe.errors.StripeSignatureVerificationError) {
//         console.error("Stripe signature verification failed.")
//       }
//       return { success: false }
//     }
//   },
// })
