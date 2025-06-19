export const dynamic = "force-static"
export const revalidate = 3600

type SitemapEntry = {
  url: string
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"
  lastModified?: string
  priority?: number
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const baseUrl = "https://vibe-template.com"

  const staticPages: SitemapEntry[] = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]

  return [...staticPages]
}
