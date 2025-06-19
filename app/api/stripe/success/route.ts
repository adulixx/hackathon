import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const successUrl = new URL("/success", req.url)
  return NextResponse.redirect(successUrl)
}
