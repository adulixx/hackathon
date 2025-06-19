"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div>
      <div className="flex min-h-screen w-full items-center justify-center p-4">
        <Card className="w-full max-w-md border-destructive">
          <CardHeader className="space-y-2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center bg-destructive/10">
              <ExclamationTriangleIcon className="h-6 w-6 text-destructive" />
            </div>
            <CardTitle>Something went wrong!</CardTitle>
            <CardDescription>
              An unexpected error has occurred.
              {error.digest && (
                <div className="mt-2">
                  <span className="text-foreground">Error ID: {error.digest}</span>
                </div>
              )}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center text-sm text-foreground">
            <p>
              The application encountered an error and could not continue. Try refreshing the page or use the button
              below to try again.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={reset} variant="destructive">
              Try again
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
