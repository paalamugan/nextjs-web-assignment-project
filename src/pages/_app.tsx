import '../styles/global.scss';

import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { AuthLayout } from '@/layouts/AuthLayout';
import { MainLayout } from '@/layouts/MainLayout';

interface MyAppProps extends AppProps {
  Component: AppProps['Component'] & { requireAuth?: boolean };
}

const MyApp = ({ Component, pageProps: { session, ...pageProps } }: MyAppProps) => {
  const requireAuth = Component.requireAuth != null ? Component.requireAuth : true;
  return (
    <MainLayout>
      <SessionProvider session={session}>
        {requireAuth ? (
          <AuthLayout>
            <Component {...pageProps} />
          </AuthLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
    </MainLayout>
  );
};

export default MyApp;
