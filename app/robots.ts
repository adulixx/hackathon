import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/sign-in", "/sign-up", "/success", "/pricing", "/cancel", "/user-profile"],
    },
    sitemap: "https://vibe-template.com/sitemap.xml",
    host: "https://vibe-template.com",
  }
}
