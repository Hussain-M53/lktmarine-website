import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

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
    if (!tokenCookie) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    try {
      const token = tokenCookie.value;
      const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
      if (payload.exp && Date.now() >= payload.exp * 1000) {
        console.log('Token expired');
        return NextResponse.redirect(new URL('/admin', request.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.log("JWT verification failed", error);
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  if (pathname.startsWith('/admin')) {
    const tokenCookie = request.cookies.get('auth_token');
    if (!tokenCookie) {
      return NextResponse.next();
    }
    try {
      const token = tokenCookie.value;
      const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
      if (payload.exp && Date.now() >= payload.exp * 1000) {
        console.log('Token expired');
        return NextResponse.next();
      }

      return NextResponse.redirect(new URL('/studio', request.url));
    } catch (error) {
      console.log("JWT verification failed", error);
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/studio/:path*', '/admin/:path*', '/'],
};
