import { updateSession } from "@/lib/supabase/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || ""
  const ua = userAgent.toLowerCase()
  const pathname = request.nextUrl.pathname

  const botPatterns = [
    "claudebot",
    "anthropic-ai",
    "googlebot",
    "bingbot",
    "gptbot",
    "perplexitybot",
    "facebookexternalhit",
    "twitterbot",
    "linkedinbot",
  ]

  const PUBLIC_PATHS = [
    "/",
    "/blog",
    "/services",
    "/about",
    "/contact",
    "/faq",
    "/cookie-policy",
    "/robots.txt",
    "/sitemap.xml",
  ]

  const isBot = botPatterns.some((pattern) => ua.includes(pattern))

  const isPublicPath = PUBLIC_PATHS.some((path) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  })

  if (isBot && isPublicPath) {
    return NextResponse.next()
  }

  return await updateSession(request)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}