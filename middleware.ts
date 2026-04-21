import { updateSession } from "@/lib/supabase/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

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

  const isPublicPath = PUBLIC_PATHS.some((path) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  })

  // Public pages — allow everyone through freely
  // No session check needed — these are marketing pages
  if (isPublicPath) {
    return NextResponse.next()
  }

  // Protected pages — run Supabase session check
  return await updateSession(request)
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}