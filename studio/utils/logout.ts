'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function logout() {
  const cookieStore = cookies();
  (await cookieStore).set('auth_token', '', {
    expires: new Date(0),
    path: '/'
  })
  revalidatePath('/')
}