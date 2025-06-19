import { httpRouter } from "convex/server"
import { clerkWebhook } from "./clerk_webhook"

const http = httpRouter()

http.route({
  path: "/api/clerk",
  method: "POST",
  handler: clerkWebhook,
})

export default http
