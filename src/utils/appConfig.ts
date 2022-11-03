import { env } from 'process';

const appConfig = {
  siteName: 'Web OAuth',
  title: 'Web OAuth Project',
  description:
    'Web OAuth Project using Tailwind CSS, Next.js, NextAuth, React, Redux, Redux Toolkit, TypeScript, and more.',
  locale: 'en',
  apiBaseUrl: '',
  jwtSecretKey: env.JWT_SECRET_KEY || 'jwt-secret-key',
  googleClientId: env.GOOGLE_CLIENT_ID,
  googleClientSecret: env.GOOGLE_CLIENT_SECRET,
  mongodbUri: env.MONGODB_URI,
} as const;

export default appConfig;
