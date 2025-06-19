import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow">
      <h2 className="text-2xl font-bold">Not found</h2>
      <p className="text-muted-foreground mb-4">Could not find requested resource</p>
      <Link href="/" className="underline underline-offset-4 text-muted-foreground hover:text-foreground">
        Return home
      </Link>
    </div>
  )
}
