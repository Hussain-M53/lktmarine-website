import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { generateToken } from './studio/utils/auth';

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    url.pathname = '/site';
    return NextResponse.redirect(url);
  }
  // if (request.nextUrl.pathname.startsWith('/studio') || request.nextUrl.pathname.startsWith('/admin')) {
  //   const tokenCookie = request.cookies.get('auth_token')
    
  //   if (tokenCookie) {
  //     try {
  //       const token = JSON.parse(tokenCookie.value);
  //       if (Date.now() < token.expires) {
  //         return NextResponse.next();
  //       }
  //     } catch (e) {
  //     }
  //   }

  //   if (request.nextUrl.pathname === '/admin') {
  //     return NextResponse.next();
  //   }

  //   const authHeader = request.headers.get('authorization')

  //   if (!authHeader) {
  //     return NextResponse.redirect(new URL('/admin', request.url))
  //   }

  //   try {
  //     const encoded = authHeader.split(' ')[1]
  //     const decoded = atob(encoded)
  //     const [username, password] = decoded.split(':')

  //     const correctUsername = process.env.ADMIN_USERNAME
  //     const correctPassword = process.env.ADMIN_PASSWORD

  //     if (username === correctUsername && password === correctPassword) {
  //       const token = generateToken(username)

  //       const response = NextResponse.next()
        
  //       response.cookies.set({
  //         name: 'auth_token',
  //         value: JSON.stringify(token),
  //         httpOnly: true,
  //         secure: process.env.NODE_ENV === 'production',
  //         sameSite: 'lax',
  //         maxAge: 60 
  //       })

  //       return response
  //     }

  //     const url = new URL('/admin', request.url)
  //     url.searchParams.set('error', 'invalid_credentials')
  //     return NextResponse.redirect(url)
  //   } catch (error) {
  //     return NextResponse.redirect(new URL('/admin', request.url))
  //   }
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/studio/:path*', '/admin/:path*','/']
}    