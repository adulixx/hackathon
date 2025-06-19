import Image from "next/image"

export default function Footer() {
  return (
    <footer>
      <div className="py-16">
        <div>
          <div className="flex justify-center items-center gap-4 flex-col md:flex-row text-center">
            <Image src="/logo.svg" alt="logo" width={40} height={40} className="shrink-0 invert dark:invert-0" />
            <span className="font-mono tracking-tighter text-foreground">
              Vibe Template @{new Date().getFullYear()}
              <br />
              All rights reserved
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
