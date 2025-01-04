import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only apply to /studio routes
  if (request.nextUrl.pathname.startsWith('/studio')) {
    // Get the authorization header
    const authHeader = request.headers.get('authorization')

    if (!authHeader) {
      // No auth header, return 401 with WWW-Authenticate header
      return new NextResponse(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      })
    }

    try {
      // Get credentials from auth header
      const encoded = authHeader.split(' ')[1]
      const decoded = atob(encoded)
      const [username, password] = decoded.split(':')

      // Get environment variables
      const correctUsername = process.env.ADMIN_USERNAME
      const correctPassword = process.env.ADMIN_PASSWORD

      // Verify credentials
      if (
        username === correctUsername &&
        password === correctPassword
      ) {
        // Authorized, let the request through
        return NextResponse.next()
      }

      // Invalid credentials, return 401
      return new NextResponse(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      })
    } catch (error) {
      // Error parsing credentials, return 401
      return new NextResponse(null, {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      })
    }
  }

  // Not a /studio route, let the request through
  return NextResponse.next()
}

// Configure which routes use this middleware
export const config = {
  matcher: '/studio/:path*',
}    