import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      email: string
    }
    expires_at: string
    accessToken: string & DefaultSession['session']
  }

  interface User {
    user: {
      email: string
    }
    token: string
  }
}
