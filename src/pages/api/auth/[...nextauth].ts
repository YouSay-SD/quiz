import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

import { login } from '../../../services/vivatranslate'

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const user = await login({
            email: credentials.email,
            password: credentials.password,
          })

          if (user.data && user.data.token) {
            return user.data
          }
        } catch (e) {
          throw new Error(e)
        }
      },
    }),
  ],
  secret: 'trlM1IE+pGNYPI/jdp3zzw8Q3+S2MtpqZBVYlSd1LR8=',
  session: {
    strategy: 'jwt',
    updateAge: 24 * 60 * 60, // 24 hours
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.token
        token.email = user.user.email
      }
      return Promise.resolve(token)
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken as string
      return Promise.resolve(session)
    },
  },
  pages: {
    // signIn: '/auth/signin',
  },
})
