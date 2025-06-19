import type { Metadata } from "next"

import NavBar from "@/components/wrapper/navbar"

export const metadata: Metadata = {
  metadataBase: new URL("https://vibe-template.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Vibe Template",
    template: "%s | Vibe Template",
  },
  description: "Vibe coding template by SaaS Garden.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <NavBar />

      <div className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8">
          <main className="max-w-[60ch] mt-[2rem] mx-auto w-full space-y-6">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

function Footer() {
  const links = [{ name: "@saas-garden", url: "https://saasgarden.studio/" }]

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  )
}
