import { Doc } from "./_generated/dataModel"
import { internalQuery, query, QueryCtx } from "./_generated/server"

export const getUser = query({
  args: {},
  handler: async (ctx): Promise<Doc<"users">> => {
    const identity = await ctx.auth.getUserIdentity()
    if (identity === null) {
      throw new Error(`Unauthenticated call to getUser: ${identity}`)
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", identity.subject))
      .unique()

    if (!user) {
      throw new Error(`User not found in getUser: ${identity.subject}`)
    }

    return user
  },
})

export const getUserInternal = internalQuery({
  args: {},
  handler: async (ctx: QueryCtx): Promise<Doc<"users">> => {
    const identity = await ctx.auth.getUserIdentity()
    if (identity === null) {
      throw new Error(`Unauthenticated call to internal query in getUserInternal: ${identity}`)
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkUserId", (q) => q.eq("clerkUserId", identity.subject))
      .unique()

    if (!user) {
      throw new Error(`User not found in getUserInternal: ${identity.subject}`)
    }

    return user
  },
})
