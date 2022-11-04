import { env } from 'process';

const appConfig = {
  siteUrl: env.SITE_URL || 'http://localhost:3000',
  siteName: 'Web OAuth',
  title: 'Web OAuth Project',
  description:
    'Web OAuth Project using Chakra UI, Next.js, NextAuth, React, Redux, Redux Toolkit, TypeScript, and more.',
  locale: 'en',
  apiBaseUrl: '',
  reqresApiBaseUrl: env.REGRES_API_BASE_URL || 'https://reqres.in/api',
  googleClientId: env.GOOGLE_CLIENT_ID,
  googleClientSecret: env.GOOGLE_CLIENT_SECRET,
  mongodbUri: env.MONGODB_URI,
  jwtSecretKey: env.JWT_SECRET_KEY || 'secret',
} as const;

export default appConfig;
