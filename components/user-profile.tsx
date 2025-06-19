"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SignOutButton, useUser } from "@clerk/nextjs"
import { BookTextIcon, LogOut, User } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export function UserProfile() {
  const { user } = useUser()

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="relative h-10 w-10">
          <Avatar className="h-9 w-9 ring-1 ring-border">
            <AvatarImage src={user?.imageUrl} alt={user?.fullName || "User Profile"} />
            <AvatarFallback>
              {user?.firstName?.[0]}
              {user?.lastName?.[0]}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none">{user?.fullName}</p>
            <p className="text-sm leading-none text-foreground line-clamp-1">{user?.emailAddresses[0].emailAddress}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href="/user-profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" aria-hidden />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/sample-page">
            <DropdownMenuItem>
              <BookTextIcon className="mr-2 h-4 w-4" aria-hidden />
              <span>Sample page</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <SignOutButton>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" aria-hidden />
            <span>Sign out</span>
          </DropdownMenuItem>
        </SignOutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
