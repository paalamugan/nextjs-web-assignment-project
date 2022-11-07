const appConfig = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  siteName: 'Web OAuth',
  title: 'Web OAuth Project',
  description:
    'Web OAuth Project using Chakra UI, Next.js, NextAuth, React, Redux, Redux Toolkit, TypeScript, and more.',
  locale: 'en',
  apiBaseUrl: '',
  reqresApiBaseUrl: process.env.REGRES_API_BASE_URL || 'https://reqres.in/api',
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/web-oauth',
  jwtSecretKey: process.env.JWT_SECRET_KEY || 'secret',
} as const;

export default appConfig;
