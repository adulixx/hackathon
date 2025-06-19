import Provider from "@/app/provider"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import PageWrapper from "@/components/wrapper/page-wrapper"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Organization, WebSite, WithContext } from "schema-dts"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const jsonLd: WithContext<WebSite | Organization> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Vibe Template",
  url: "https://vibe-template.com",
  description: "Vibe Template",
  publisher: {
    "@type": "Organization",
    name: "Vibe Template",
    logo: {
      "@type": "ImageObject",
      url: "https://vibe-template.com/logo.png",
      width: "600",
      height: "600",
    },
  },
}

export const metadata: Metadata = {
  metadataBase: new URL("https://vibe-template.com"),
  title: {
    default: "Vibe Template",
    template: `%s | Vibe Template`,
  },
  applicationName: "Vibe Template",
  description: "Vibe Template",
  openGraph: {
    title: "Vibe Template",
    description: "Vibe Template",
    images: [
      {
        url: `https://vibe-template.com/opengraph-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    url: "https://vibe-template.com",
    locale: "en_US",
    type: "website",
    siteName: "Vibe Template",
  },
  keywords: ["vibe template", "vibe", "template"],
  twitter: {
    card: "summary_large_image",
    title: "Vibe Template",
    description: "Vibe Template",
    images: ["https://vibe-template.com/opengraph-image.png"],
  },
  alternates: {
    canonical: "https://vibe-template.com",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      dynamic
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </head>
        <body className={cn("min-h-svh bg-background antialiased font-sans", geistSans.variable, geistMono.variable)}>
          <Provider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <PageWrapper>{children}</PageWrapper>
              <Toaster />
            </ThemeProvider>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  )
}
