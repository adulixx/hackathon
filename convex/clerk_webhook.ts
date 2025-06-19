import { v } from "convex/values"
import { Webhook } from "svix"
import { internal } from "./_generated/api"
import { httpAction, internalMutation } from "./_generated/server"

interface ClerkEvent {
  data: {
    birthday: string | null
    created_at: number // e.g. 1654012591514
    email_addresses: Array<{
      email_address: string // e.g. "example@example.org"
      id: string // e.g. "idn_29w83yL7CwVlJXylYLxcslromF1"
      object: string // e.g. "email_address"
    }>
    first_name: string | null
    gender: string | null
    id: string // e.g. "user_29w83sxmDNGwOuEthce5gg56FcC"
    image_url: string | null // e.g. "https://img.clerk.com/xxxxxx"
    last_name: string | null
    object: string // e.g. "user"
    primary_email_address_id: string // e.g. "idn_29w83yL7CwVlJXylYLxcslromF1"
    profile_image_url: string | null // e.g. "https://www.gravatar.com/avatar?d=mp"
    updated_at: number
    username: string | null
  }
  object: string // e.g. "event"
  timestamp: number // e.g. 1654012824306
  type: string // e.g. "user.updated"
}

export const clerkWebhook = httpAction(async (ctx, request) => {
  try {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET
    if (!WEBHOOK_SECRET) {
      return new Response("Webhook secret not set", { status: 500 })
    }

    const svix_id = request.headers.get("svix-id")
    const svix_timestamp = request.headers.get("svix-timestamp")
    const svix_signature = request.headers.get("svix-signature")

    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response("Missing svix headers", { status: 400 })
    }

    const payload = await request.json()
    const payloadString = JSON.stringify(payload)

    const wh = new Webhook(WEBHOOK_SECRET)
    let event

    try {
      event = wh.verify(payloadString, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as ClerkEvent
    } catch (err) {
      console.error("Webhook verification failed:", err)
      return new Response("Error verifying webhook signature", { status: 400 })
    }

    if (event.type === "user.created") {
      const { id, email_addresses, first_name, last_name } = event.data

      if (id && email_addresses && email_addresses.length > 0) {
        await ctx.runMutation(internal.clerk_webhook.createUserFromWebhook, {
          clerkUserId: `${id}`,
          email: email_addresses[0].email_address,
          name: `${first_name || ""} ${last_name || ""}`.trim() || email_addresses[0].email_address,
        })
      }
    }

    return new Response(null, { status: 200 })
  } catch (err) {
    console.error("Webhook processing error:", err)
    return new Response("Error processing webhook", { status: 500 })
  }
})

export const createUserFromWebhook = internalMutation({
  args: {
    clerkUserId: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", args.clerkUserId))
      .unique()

    if (existingUser !== null) {
      return existingUser._id
    }

    return await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      clerkUserId: args.clerkUserId,
    })
  },
})
