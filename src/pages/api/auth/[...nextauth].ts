import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import jwt from 'jsonwebtoken';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { mongoClientPromise } from '@/lib/mongodb';
import appConfig from '@/utils/appConfig';

const { googleClientId, googleClientSecret } = appConfig;

export const nextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId as string,
      clientSecret: googleClientSecret as string,
    }),
  ],
  adapter: MongoDBAdapter(mongoClientPromise),
  session: {
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  debug: process.env.NEXTAUTH_DEBUG === 'true',
  callbacks: {
    session: async ({ session, user }) => {
      session.id = user.id;
      session.token = jwt.sign({ id: user.id }, appConfig.jwtSecretKey, { expiresIn: '24h' });
      return session;
    },
  },
  pages: {
    signIn: '/auth/signIn',
    error: '/auth/error', // Error code passed in query string as ?error=
  },
} as NextAuthOptions;

export default NextAuth(nextAuthOptions);
