"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"

export default function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      {theme === "dark" ? (
        <Button variant="ghost" size="icon" onClick={() => setTheme("light")}>
          <Sun className="w-5 h-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      ) : (
        <Button variant="ghost" size="icon" onClick={() => setTheme("dark")}>
          <Moon className="w-5 h-5" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </div>
  )
}
