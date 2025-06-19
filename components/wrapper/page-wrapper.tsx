import Footer from "./footer"
import NavBar from "./navbar"

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      <NavBar />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </div>
  )
}
