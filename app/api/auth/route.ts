import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.SESSION_SECRET;

function generateToken(email: string) {
  const payload = { email };
  const expiresIn = '1h'; 
  return jwt.sign(payload, JWT_SECRET as string, { expiresIn });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    try {
      const token = generateToken(email);

      const response = NextResponse.json({ message: 'Login successful' });

      response.cookies.set('auth_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60, 
        path: '/',
      });

      return response;
    } catch (err) {
      return NextResponse.json({ error: 'Failed to generate token' }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
  }
}
