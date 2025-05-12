import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the user is authenticated (has a session cookie)
  const isAuthenticated = request.cookies.has("authenticated")

  // If the user is trying to access the login page and is already authenticated,
  // redirect them to the home page
  if (request.nextUrl.pathname === "/login" && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  // If the user is not authenticated and is trying to access a protected route,
  // redirect them to the login page
  if (!isAuthenticated && request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Otherwise, continue with the request
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
