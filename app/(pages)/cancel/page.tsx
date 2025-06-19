import { Button } from "@/components/ui/button"
import NavBar from "@/components/wrapper/navbar"
import Link from "next/link"

export default function Cancel() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <NavBar />
      <h1 className="mt-[20rem] scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Payment cancelled
      </h1>
      <p className="leading-7">We&apos;re sorry to see you go.</p>
      <div className="mt-5">
        <Link href="/">
          <Button variant="outline">Home</Button>
        </Link>
      </div>
    </main>
  )
}
