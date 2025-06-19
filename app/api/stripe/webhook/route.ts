import { ConvexHttpClient } from "convex/browser"
import { NextRequest, NextResponse } from "next/server"
import { api } from "../../../../convex/_generated/api"

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const signature = req.headers.get("stripe-signature")

    if (!signature) {
      return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 })
    }

    const result = await convex.action(api.stripe.stripe_node.handleWebhookEvent, {
      body,
      signature,
    })

    if (result) {
      return NextResponse.json({ received: true })
    } else {
      return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" + error }, { status: 500 })
  }
}
