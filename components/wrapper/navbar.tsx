"use client"

import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/nextjs"
import { Dialog } from "@radix-ui/react-dialog"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react"
import ModeToggle from "../mode-toggle"
import { Button, buttonVariants } from "../ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { UserProfile } from "../user-profile"

export default function NavBar() {
  const { userId } = useAuth()

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div>
        <div className="px-6 flex items-center justify-between py-4 mx-auto">
          {/* Logo - Mobile */}
          <div className="flex lg:hidden items-center gap-4">
            <Dialog>
              <SheetTrigger asChild>
                <Button variant="secondary" size="icon" className="lg:hidden" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>
                    <Image
                      src="/logo.svg"
                      alt="logo"
                      width={40}
                      height={40}
                      className="shrink-0 invert dark:invert-0"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="px-4 space-y-2">
                  {!userId && (
                    <div>
                      <SheetClose asChild>
                        <Link
                          href="/sign-in"
                          prefetch={true}
                          className={`${cn(buttonVariants({ variant: "outline" }), "w-full")}`}
                        >
                          Sign in
                        </Link>
                      </SheetClose>
                    </div>
                  )}
                  <SheetClose asChild>
                    <Link
                      href="/research"
                      prefetch={true}
                      className={`${cn(buttonVariants({ variant: "default" }), "w-full")}`}
                    >
                      Page 1
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/public-library"
                      prefetch={true}
                      className={`${cn(buttonVariants({ variant: "secondary" }), "w-full")}`}
                    >
                      Page 2
                    </Link>
                  </SheetClose>
                </div>
              </SheetContent>
            </Dialog>
            <Link href="/" prefetch={true} className="flex items-center gap-2">
              <Image src="/logo.svg" alt="logo" width={40} height={40} className="shrink-0 invert dark:invert-0" />
            </Link>
          </div>

          {/* Logo - Desktop */}
          <div className="hidden lg:flex flex-1 items-center justify-start gap-2">
            <Link href="/" prefetch={true} className="flex items-center gap-2">
              <Image src="/logo.svg" alt="logo" width={32} height={32} className="shrink-0 invert dark:invert-0" />
              <span className="font-mono tracking-tighter font-bold">Vibe Template</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="/page-1"
              prefetch={true}
              className={`${cn(buttonVariants({ variant: "link" }), "min-w-[90px]")}`}
            >
              Page 1
            </Link>
            <Link href="/page-2" prefetch={true} className={`${cn(buttonVariants({ variant: "link" }), "")}`}>
              Page 2
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 lg:flex-1 lg:justify-end">
            <ModeToggle />
            {!userId && (
              <Link href="/sign-in" prefetch={true} className={`${cn(buttonVariants({ variant: "outline" }), "")}`}>
                Sign in
              </Link>
            )}
            {userId && <UserProfile />}
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = forwardRef<ComponentRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
