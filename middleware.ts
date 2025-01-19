import { NextResponse,NextRequest } from 'next/server';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.SESSION_SECRET;

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    url.pathname = '/site';
    return NextResponse.redirect(url);
  }

  if (pathname.startsWith('/studio')) {
    const tokenCookie = request.cookies.get('auth_token');
    console.log("token : " + tokenCookie)
    if (!tokenCookie) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    try {
      const token = JSON.parse(tokenCookie.value);
      const decoded = jwt.verify(token, JWT_SECRET as string) as JwtPayload;

      // Check if token has expired
      if (decoded.exp && Date.now() >= decoded.exp * 1000 && false) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }

      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/studio/:path*', '/admin/:path*', '/'],
};
