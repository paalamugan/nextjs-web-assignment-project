import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import jwt from 'jsonwebtoken';
import type { NextAuthOptions } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import clientPromise from '@/lib/mongodb';
import appConfig from '@/utils/appConfig';

const { jwtSecretKey, googleClientId, googleClientSecret } = appConfig;

export const nextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: googleClientId as string,
      clientSecret: googleClientSecret as string,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  // session: {
  //   strategy: 'jwt',
  //   // Seconds - How long until an idle session expires and is no longer valid.
  //   maxAge: 30 * 24 * 60 * 60, // 30 days
  // },
  // jwt: {
  //   // The maximum age of the NextAuth.js issued JWT in seconds.
  //   // Defaults to `session.maxAge`.
  //   maxAge: 60 * 60 * 24 * 30,
  //   encode: async ({ token }): Promise<string> => {
  //     if (!token) return '';
  //     const tokenContents = {
  //       id: token.id,
  //       name: token.name,
  //       email: token.email,
  //       picture: token.picture,
  //       iat: Date.now() / 1000,
  //       exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
  //       sub: token.id,
  //     };

  //     const encodedToken = jwt.sign(tokenContents, jwtSecretKey);

  //     return encodedToken;
  //   },
  //   decode: async ({ token }) => {
  //     if (!token) return null;
  //     const decodedToken = jwt.verify(token, jwtSecretKey);

  //     return decodedToken as Exclude<typeof decodedToken, string>;
  //   },
  // },
  debug: process.env.NEXTAUTH_DEBUG === 'true',
  callbacks: {
    session: async ({ session, user }) => {
      const encodedToken = jwt.sign(user, jwtSecretKey);

      session.id = user.id;
      session.token = encodedToken;

      return Promise.resolve(session);
    },
    jwt: async ({ token, user }) => {
      const isSignIn = !!user;

      if (isSignIn) {
        token.id = user.id;
      }

      return Promise.resolve(token);
    },
  },
  // pages: {
  //   signIn: '/auth/signIn',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  // },
} as NextAuthOptions;

export default NextAuth(nextAuthOptions);
